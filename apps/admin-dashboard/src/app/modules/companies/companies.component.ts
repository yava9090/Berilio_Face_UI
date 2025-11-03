import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Company } from 'app/core/models/company.model';
import { CompanyStore } from 'app/core/state/company.store';

@Component({
    selector: 'app-companies',
    standalone: true,
    imports: [MatTableModule, MatButtonModule, NgIf],
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesComponent implements OnInit {
    private readonly _store = inject(CompanyStore);

    readonly displayedColumns: string[] = ['name', 'owner', 'status', 'actions'];
    readonly companies = this._store.companies;
    readonly loading = this._store.loading;
    readonly error = this._store.error;

    ngOnInit(): void {
        this._store.load();
    }

    trackById(_: number, item: Company): string {
        return item.id;
    }
}
