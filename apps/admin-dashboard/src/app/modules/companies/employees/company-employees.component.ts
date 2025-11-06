import { NgFor, NgIf } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    inject,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { finalize, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from 'app/core/models/location.model';
import { EmployeeListItem } from 'app/core/models/employee.model';
import { LocationService } from 'app/core/services/location.service';
import { EmployeeService } from 'app/core/services/employee.service';
import { EmployeesBulkUploadDialogComponent } from './employees-bulk-upload-dialog.component';

@Component({
    selector: 'app-company-employees',
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatProgressSpinnerModule,
    ],
    templateUrl: './company-employees.component.html',
    styleUrls: ['./company-employees.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyEmployeesComponent implements OnInit {
    private readonly _dialog = inject(MatDialog);
    private readonly _route = inject(ActivatedRoute);
    private readonly _snackBar = inject(MatSnackBar);
    private readonly _cdr = inject(ChangeDetectorRef);
    private readonly _locationService = inject(LocationService);
    private readonly _employeeService = inject(EmployeeService);

    readonly ALL_LOCATIONS_OPTION = 'all';

    companyId = '';
    locations: Location[] = [];
    private _locationMap = new Map<string, Location>();
    selectedLocationId: string | null = null;

    employees: EmployeeListItem[] = [];
    loadingLocations = false;
    loadingEmployees = false;
    locationsError: string | null = null;
    employeesError: string | null = null;

    readonly displayedColumns: string[] = [
        'fullName',
        'identification',
        'phone',
        'location',
    ];

    get hasLocations(): boolean {
        return this.locations.length > 0;
    }

    ngOnInit(): void {
        this.companyId = this._route.snapshot.paramMap.get('companyId') ?? '';

        if (!this.companyId) {
            this.locationsError = 'No se identificó el identificador de la compañía.';
            return;
        }

        this.loadLocations();
    }

    private loadLocations(): void {
        this.loadingLocations = true;
        this.locationsError = null;
        this._locationService
            .getLocations(this.companyId)
            .pipe(
                finalize(() => {
                    this.loadingLocations = false;
                    this._cdr.markForCheck();
                })
            )
            .subscribe({
                next: (locations) => {
                    this.locations = locations;
                    this._locationMap = new Map(locations.map((loc) => [loc.id, loc]));

                    this.handleLocationSelectionAfterLoad();
                },
                error: (error) => {
                    this.locations = [];
                    this._locationMap.clear();
                    this.selectedLocationId = null;
                    this.employees = [];
                    this.employeesError = null;
                    this.locationsError =
                        error?.error?.message ??
                        'No se pudieron cargar las sedes de la compañía.';
                },
            });
    }

    private handleLocationSelectionAfterLoad(): void {
        this.locationsError = null;

        if (this.locations.length === 0) {
            this.selectedLocationId = null;
            this.employees = [];
            this.employeesError = null;
            this.locationsError =
                'No se han registrado sedes para esta compañía.';
            return;
        }

        const previous = this.selectedLocationId;

        if (previous === this.ALL_LOCATIONS_OPTION) {
            this.selectedLocationId = this.ALL_LOCATIONS_OPTION;
            this.loadEmployeesForAllLocations();
            return;
        }

        if (previous && this._locationMap.has(previous)) {
            this.selectedLocationId = previous;
            this.loadEmployeesForLocation(previous);
            return;
        }

        // default to "all" so user sees everything at once
        this.selectedLocationId = this.ALL_LOCATIONS_OPTION;
        this.loadEmployeesForAllLocations();
    }

    private loadEmployeesForLocation(locationId: string): void {
        if (!locationId) {
            this.employees = [];
            this.employeesError = null;
            this._cdr.markForCheck();
            return;
        }

        this.loadingEmployees = true;
        this.employeesError = null;

        this._employeeService
            .getEmployees(locationId)
            .pipe(
                finalize(() => {
                    this.loadingEmployees = false;
                    this._cdr.markForCheck();
                })
            )
            .subscribe({
                next: (employees) => {
                    this.employees = employees.map((employee) => ({
                        ...employee,
                        locationName:
                            this._locationMap.get(employee.locationId)?.name ??
                            'Sede sin nombre',
                    }));
                },
                error: (error) => {
                    this.employees = [];
                    this.employeesError =
                        error?.error?.message ??
                        'No se pudieron cargar los empleados de la sede seleccionada.';
                },
            });
    }

    private loadEmployeesForAllLocations(): void {
        if (!this.hasLocations) {
            this.employees = [];
            this.employeesError = null;
            this._cdr.markForCheck();
            return;
        }

        this.loadingEmployees = true;
        this.employeesError = null;

        forkJoin(
            this.locations.map((location) =>
                this._employeeService.getEmployees(location.id).pipe(
                    map((employees) =>
                        employees.map((employee) => ({
                            ...employee,
                            locationName: location.name,
                        }))
                    )
                )
            )
        )
            .pipe(
                finalize(() => {
                    this.loadingEmployees = false;
                    this._cdr.markForCheck();
                })
            )
            .subscribe({
                next: (groups) => {
                    this.employees = groups.flat();
                },
                error: (error) => {
                    this.employees = [];
                    this.employeesError =
                        error?.error?.message ??
                        'No se pudieron cargar los empleados de la compañía.';
                },
            });
    }

    onLocationChange(locationId: string): void {
        if (locationId === this.selectedLocationId) {
            return;
        }

        this.selectedLocationId = locationId;
        if (locationId === this.ALL_LOCATIONS_OPTION) {
            this.loadEmployeesForAllLocations();
        } else {
            this.loadEmployeesForLocation(locationId);
        }
    }

    refreshEmployees(): void {
        if (!this.selectedLocationId) {
            if (!this.loadingLocations) {
                this.loadLocations();
            }
            return;
        }

        if (this.selectedLocationId === this.ALL_LOCATIONS_OPTION) {
            this.loadEmployeesForAllLocations();
        } else if (!this.loadingLocations) {
            this.loadEmployeesForLocation(this.selectedLocationId);
        }
    }

    openBulkUploadDialog(): void {
        if (!this.companyId) {
            this._snackBar.open(
                'No se pudo identificar la compañía seleccionada.',
                'Cerrar',
                { duration: 3000 }
            );
            return;
        }

        if (!this.hasLocations) {
            this._snackBar.open(
                'Primero debes crear una sede para poder cargar empleados.',
                'Cerrar',
                { duration: 3500 }
            );
            return;
        }

        this._dialog
            .open(EmployeesBulkUploadDialogComponent, {
                width: '420px',
                disableClose: true,
                data: { companyId: this.companyId },
            })
            .afterClosed()
            .subscribe((result) => {
                if (result?.success) {
                    const locationId =
                        result.locationId && this._locationMap.has(result.locationId)
                            ? result.locationId
                            : this.selectedLocationId;

                    if (locationId) {
                        this.selectedLocationId = locationId;
                        if (locationId === this.ALL_LOCATIONS_OPTION) {
                            this.loadEmployeesForAllLocations();
                        } else {
                            this.loadEmployeesForLocation(locationId);
                        }
                    }

                    this._snackBar.open(
                        'Carga masiva completada correctamente.',
                        'Cerrar',
                        { duration: 3000 }
                    );
                }
            });
    }

    trackEmployee(_: number, employee: EmployeeListItem): string {
        return employee.id;
    }

    getLocationName(locationId: string): string {
        return this._locationMap.get(locationId)?.name ?? 'Sede sin nombre';
    }
}
