import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { Company } from 'app/core/models/company.model';
import { CompanyStore } from 'app/core/state/company.store';
import { CompanyCreateDialogComponent } from 'app/modules/companies/components/company-create-dialog/company-create-dialog.component';

@Component({
    selector: 'app-companies',
    standalone: true,
    imports: [MatTableModule, MatButtonModule, MatDialogModule, MatSnackBarModule, MatIconModule, MatMenuModule, RouterLink, NgIf],
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesComponent implements OnInit {
    private readonly _store = inject(CompanyStore);
    private readonly _dialog = inject(MatDialog);
    private readonly _snackBar = inject(MatSnackBar);

    readonly displayedColumns: string[] = ['name', 'owner', 'status', 'actions'];
    readonly companies = this._store.companies;
    readonly loading = this._store.loading;
    readonly error = this._store.error;

    ngOnInit(): void {
        this._store.load();
    }

    openCreateDialog(): void {
        const dialogRef = this._dialog.open(CompanyCreateDialogComponent, {
            width: '420px',
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (!result) {
                return;
            }

            this._store
                .create(result)
                .subscribe({
                    next: () => {
                        this._snackBar.open(
                            'Compañía creada correctamente',
                            'Cerrar',
                            { duration: 3000 }
                        );
                    },
                    error: () => {
                        this._snackBar.open(
                            'No se pudo crear la compañía',
                            'Cerrar',
                            { duration: 3000 }
                        );
                    },
                });
        });
    }

    trackById(_: number, item: Company): string {
        return item.id;
    }
}
