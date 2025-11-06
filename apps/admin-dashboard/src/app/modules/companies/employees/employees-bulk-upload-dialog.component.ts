import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { finalize } from 'rxjs/operators';
import { LocationService } from 'app/core/services/location.service';
import { EmployeeService } from 'app/core/services/employee.service';
import { Location } from 'app/core/models/location.model';

@Component({
    selector: 'app-employees-bulk-upload-dialog',
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        MatProgressSpinnerModule,
    ],
    templateUrl: './employees-bulk-upload-dialog.component.html',
    styleUrls: ['./employees-bulk-upload-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesBulkUploadDialogComponent implements OnInit {
    readonly form = this._fb.nonNullable.group({
        locationId: [{ value: '', disabled: true }, Validators.required],
    });

    fileName: string | null = null;
    private _file: File | null = null;

    loadingLocations = false;
    uploading = false;
    error: string | null = null;
    locations: Location[] = [];

    constructor(
        private readonly _dialogRef: MatDialogRef<EmployeesBulkUploadDialogComponent>,
        private readonly _locationService: LocationService,
        private readonly _employeeService: EmployeeService,
        private readonly _cdr: ChangeDetectorRef,
        private readonly _fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) private readonly _data: { companyId: string }
    ) {}

    ngOnInit(): void {
        this.loadLocations();
    }

    private loadLocations(): void {
        this.loadingLocations = true;
        this.error = null;

        this._locationService
            .getLocations(this._data.companyId)
            .pipe(
                finalize(() => {
                    this.loadingLocations = false;
                    this._cdr.markForCheck();
                })
            )
            .subscribe({
                next: (locations) => {
                    this.locations = locations;
                    if (locations.length > 0) {
                        this.form.controls.locationId.reset(locations[0].id, { emitEvent: false });
                        this.form.controls.locationId.enable({ emitEvent: false });
                    } else {
                        this.form.controls.locationId.reset('', { emitEvent: false });
                        this.form.controls.locationId.disable({ emitEvent: false });
                    }
                },
                error: (err) => {
                    this.error =
                        err?.error?.message ??
                        'No se pudieron cargar las sedes de la compañía.';
                    this.form.controls.locationId.reset('', { emitEvent: false });
                    this.form.controls.locationId.disable({ emitEvent: false });
                },
            });
    }

    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0] ?? null;
        this.error = null;

        if (file && !file.name.toLowerCase().endsWith('.xlsx')) {
            this.fileName = null;
            this._file = null;
            input.value = '';
            this.error = 'El archivo debe estar en formato XLSX.';
            this._cdr.markForCheck();
            return;
        }

        this._file = file;
        this.fileName = file?.name ?? null;
        this._cdr.markForCheck();
    }

    get hasFile(): boolean {
        return this._file !== null;
    }

    upload(): void {
        if (this.form.disabled || this.form.invalid || !this._file) {
            this.form.markAllAsTouched();
            return;
        }

        this.uploading = true;
        this.error = null;

        this._employeeService
            .importEmployees(
                this._data.companyId,
                this.form.controls.locationId.value,
                this._file
            )
            .pipe(
                finalize(() => {
                    this.uploading = false;
                    this._cdr.markForCheck();
                })
            )
            .subscribe({
                next: () => {
                    this._dialogRef.close({
                        success: true,
                        locationId: this.form.controls.locationId.value,
                    });
                },
                error: (err) => {
                    this.error =
                        err?.error?.message ??
                        'No se pudo procesar la carga de empleados.';
                },
            });
    }

    close(): void {
        this._dialogRef.close();
    }
}
