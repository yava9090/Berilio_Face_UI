import { computed, inject, Injectable, signal } from '@angular/core';
import { CompanyService } from 'app/core/services/company.service';
import {
    Company,
    CreateCompanyRequest,
    UpdateCompanyRequest,
} from 'app/core/models/company.model';
import { finalize, map, catchError, throwError, tap, Observable } from 'rxjs';
import { IdentityService } from 'app/core/services/identity.service';
import { UserSummary } from 'app/core/models/user.model';

@Injectable({ providedIn: 'root' })
export class CompanyStore {
    private readonly _service = inject(CompanyService);
    private readonly _identityService = inject(IdentityService);

    private readonly _companies = signal<Company[]>([]);
    private readonly _loading = signal(false);
    private readonly _error = signal<string | null>(null);
    private readonly _owners = signal<Record<string, UserSummary>>({});

    readonly companies = computed(() => this._companies().map((company) => {
        const owner = this._owners()[company.ownerUserId];
        return {
            ...company,
            ownerName: owner?.displayName,
            ownerEmail: owner?.email,
        };
    }));
    readonly loading = this._loading.asReadonly();
    readonly error = this._error.asReadonly();

    load(): void {
        this._loading.set(true);
        this._service
            .getCompanies()
            .pipe(finalize(() => this._loading.set(false)))
            .subscribe({
                next: (companies) => {
                    this._companies.set(companies);
                    this._error.set(null);
                    this._loadOwners();
                },
                error: (error) => {
                    this._error.set(
                        error?.message ?? 'Error cargando compañías'
                    );
                },
            });
    }

    private _loadOwners(): void {
        this._identityService
            .getUsersByRole('Administrator')
            .subscribe({
                next: (users) => {
                    const lookup = users.reduce(
                        (acc, user) => { acc[user.id] = user; return acc; }, {} as Record<string, UserSummary>
                    );
                    this._owners.set(lookup);
                },
                error: () => {
                    // dejamos owners vacío si falla
                },
            });
    }

    create(payload: CreateCompanyRequest): Observable<void> {
        return this._service
            .createCompany(payload)
            .pipe(
            tap(() => this.load()),
            catchError((error) => {
                this._error.set(
                    error?.message ?? 'No se pudo crear la compañía'
                );
                return throwError(() => error);
            }),
            map(() => void 0)
        );
    }

    update(id: string, payload: UpdateCompanyRequest): void {
        this._service.updateCompany(id, payload).subscribe({
            next: () => {
                this._companies.update((companies) =>
                    companies.map((company) =>
                        company.id === id
                            ? { ...company, name: payload.name }
                            : company
                    )
                );
            },
            error: (error) => {
                this._error.set(
                    error?.message ?? 'No se pudo actualizar la compañía'
                );
            },
        });
    }

    archive(id: string): void {
        this._service.archiveCompany(id).subscribe({
            next: () => {
                this._companies.update((companies) =>
                    companies.map((company) =>
                        company.id === id
                            ? { ...company, isArchived: true }
                            : company
                    )
                );
            },
            error: (error) => {
                this._error.set(
                    error?.message ?? 'No se pudo archivar la compañía'
                );
            },
        });
    }

    restore(id: string): void {
        this._service.restoreCompany(id).subscribe({
            next: () => {
                this._companies.update((companies) =>
                    companies.map((company) =>
                        company.id === id
                            ? { ...company, isArchived: false }
                            : company
                    )
                );
            },
            error: (error) => {
                this._error.set(
                    error?.message ?? 'No se pudo restaurar la compañía'
                );
            },
        });
    }
}
