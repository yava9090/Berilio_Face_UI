import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from 'app/core/models/location.model';
import { LocationService } from 'app/core/services/location.service';
import { finalize } from 'rxjs';
import { LocationDialogComponent } from '../components/location-dialog/location-dialog.component';

@Component({
    selector: 'app-company-locations',
    standalone: true,
    imports: [MatTableModule, MatButtonModule, RouterLink, NgIf],
    templateUrl: './company-locations.component.html',
    styleUrls: ['./company-locations.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyLocationsComponent implements OnInit {
    private readonly _locationService = inject(LocationService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _dialog = inject(MatDialog);

    companyId!: string;
    displayedColumns: string[] = ['name', 'city', 'country', 'schedule', 'actions'];
    locations: Location[] = [];
    loading = false;
    error: string | null = null;

    ngOnInit(): void {
        this.companyId = this._route.snapshot.paramMap.get('companyId') ?? '';
        this.loadLocations();
    }

    loadLocations(): void {
        if (!this.companyId) {
            this.error = 'ID de compañía inválido';
            return;
        }

        this.loading = true;
        this._locationService
            .getLocations(this.companyId)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe({
                next: (locations) => {
                    this.locations = locations;
                    this.error = null;
                },
                error: (error) => {
                    this.error =
                        error?.message ?? 'No se pudieron cargar las sedes.';
                },
            });
    }

    trackById(_: number, item: Location): string {
        return item.id;
    }

    openCreateDialog(): void {
        this._dialog
            .open(LocationDialogComponent, {
                width: '880px',
                maxWidth: '95vw',
                data: { companyId: this.companyId },
            })
            .afterClosed()
            .subscribe((result) => {
                if (result) {
                    this.loadLocations();
                }
            });
    }
}
