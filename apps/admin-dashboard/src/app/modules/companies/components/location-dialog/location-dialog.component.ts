import { NgFor, NgIf } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    OnInit,
    ViewChild,
    inject,
} from '@angular/core';
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import mapboxgl from 'mapbox-gl';
import {
    MapboxGeocodingFeature,
    MapboxService,
} from 'app/core/services/mapbox.service';
import {
    COLOMBIA_DEPARTMENTS,
    COLOMBIA_MUNICIPALITIES,
    DepartmentOption,
    MunicipalityOption,
} from 'app/core/data/colombia';
import { finalize, firstValueFrom, take } from 'rxjs';

type ScheduleFormGroup = FormGroup<{
    day: FormControl<string>;
    start: FormControl<string>;
    end: FormControl<string>;
}>;

interface DayOption {
    label: string;
    value: string;
}

const DEFAULT_CENTER: [number, number] = [-74.0721, 4.711];

@Component({
    selector: 'app-location-dialog',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        NgIf,
        NgFor,
    ],
    templateUrl: './location-dialog.component.html',
    styleUrls: ['./location-dialog.component.scss'],
})
export class LocationDialogComponent implements OnInit, AfterViewInit {
    @ViewChild('mapContainer', { static: true })
    private _mapContainer?: ElementRef<HTMLDivElement>;

    private readonly _dialogRef = inject(MatDialogRef<LocationDialogComponent>);
    private readonly _fb = inject(FormBuilder);
    private readonly _mapboxService = inject(MapboxService);
    private readonly _destroyRef = inject(DestroyRef);

    readonly days: DayOption[] = [
        { value: 'Monday', label: 'Lunes' },
        { value: 'Tuesday', label: 'Martes' },
        { value: 'Wednesday', label: 'Miércoles' },
        { value: 'Thursday', label: 'Jueves' },
        { value: 'Friday', label: 'Viernes' },
        { value: 'Saturday', label: 'Sábado' },
        { value: 'Sunday', label: 'Domingo' },
    ];

    readonly departments: DepartmentOption[] = COLOMBIA_DEPARTMENTS;
    private readonly _municipalities: MunicipalityOption[] =
        COLOMBIA_MUNICIPALITIES;

    filteredMunicipalities: MunicipalityOption[] = [];

    readonly form = this._fb.group({
        name: this._fb.nonNullable.control('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(150),
        ]),
        address: this._fb.group({
            street: this._fb.nonNullable.control('', Validators.required),
            additionalInfo: this._fb.control(''),
            departmentCode: this._fb.control<number | null>(
                null,
                Validators.required
            ),
            state: this._fb.nonNullable.control('', Validators.required),
            cityId: this._fb.control<number | null>(null, Validators.required),
            city: this._fb.nonNullable.control('', Validators.required),
            country: this._fb.nonNullable.control('Colombia', Validators.required),
            postalCode: this._fb.control(''),
        }),
        coordinate: this._fb.group({
            latitude: this._fb.control<number | null>(null, [
                Validators.required,
                Validators.min(-90),
                Validators.max(90),
            ]),
            longitude: this._fb.control<number | null>(null, [
                Validators.required,
                Validators.min(-180),
                Validators.max(180),
            ]),
        }),
        schedule: this._fb.array<ScheduleFormGroup>([
            this._createScheduleGroup('Monday'),
        ]),
    });

    mapLoading = false;
    mapError: string | null = null;

    private _map: mapboxgl.Map | null = null;
    private _marker: mapboxgl.Marker | null = null;
    private _mapReadyPromise: Promise<void> | null = null;

    get scheduleArray(): FormArray<ScheduleFormGroup> {
        return this.form.get('schedule') as FormArray<ScheduleFormGroup>;
    }

    ngOnInit(): void {
        this._initializeAddressControls();
    }

    async ngAfterViewInit(): Promise<void> {
        try {
            await this._ensureMapReady();
        } catch (error) {
            console.error(error);
        }
    }

    addScheduleEntry(): void {
        this.scheduleArray.push(this._createScheduleGroup());
    }

    removeScheduleEntry(index: number): void {
        if (this.scheduleArray.length === 1) {
            this.scheduleArray.at(0).reset({
                day: 'Monday',
                start: '08:00',
                end: '17:00',
            });
            return;
        }

        this.scheduleArray.removeAt(index);
    }

    locateOnMap(): void {
        const address = this._composeAddressFromForm();

        if (!address) {
            this.mapError =
                'Completa la calle, departamento y municipio antes de ubicar en el mapa.';
            return;
        }

        console.info('[LocationDialog] Ubicando en el mapa con dirección:', address);

        this.mapError = null;
        this.mapLoading = true;

        this._mapboxService
            .geocode(address)
            .pipe(take(1), finalize(() => (this.mapLoading = false)))
            .subscribe({
                next: async (features: MapboxGeocodingFeature[]) => {
                    const feature = features[0];
                    const coordinates =
                        feature?.center ?? feature?.geometry?.coordinates;

                    if (!coordinates || coordinates.length < 2) {
                        this.mapError =
                            'No se encontró una ubicación para la dirección ingresada.';
                        return;
                    }

                    const [lng, lat] = coordinates as [number, number];

                    try {
                        await this._ensureMapReady();
                        this._setMapPosition([lng, lat]);
                    } catch (error) {
                        console.error(error);
                        this.mapError =
                            'Ocurrió un problema al inicializar Mapbox. Reintenta en unos segundos.';
                    }
                },
                error: (error) => {
                    this.mapError =
                        error?.message ??
                        'No se pudo ubicar la dirección en el mapa.';
                },
            });
    }

    close(): void {
        this._dialogRef.close();
    }

    submit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this._dialogRef.close(this.form.getRawValue());
    }

    trackByIndex(index: number): number {
        return index;
    }

    private _createScheduleGroup(
        defaultDay: DayOption['value'] = 'Monday'
    ): ScheduleFormGroup {
        return this._fb.nonNullable.group({
            day: [defaultDay, Validators.required],
            start: ['08:00', Validators.required],
            end: ['17:00', Validators.required],
        });
    }

    private _initializeAddressControls(): void {
        const address = this._addressGroup;
        const departmentControl = address.get('departmentCode');
        const cityControl = address.get('cityId');

        departmentControl?.valueChanges
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe((code) => this._onDepartmentChange(code));

        cityControl?.valueChanges
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe((id) => this._onCityChange(id));

        const defaultDepartment = this.departments[0];
        if (defaultDepartment) {
            departmentControl?.setValue(defaultDepartment.code);
        }
    }

    private _onDepartmentChange(code: number | null): void {
        const address = this._addressGroup;
        const department = this.departments.find((item) => item.code === code) ?? null;

        this.filteredMunicipalities = code
            ? this._municipalities
                  .filter((municipality) => municipality.departmentCode === code)
                  .sort((a, b) => a.name.localeCompare(b.name))
            : [];

        address.patchValue(
            {
                state: department?.name ?? '',
            },
            { emitEvent: false }
        );

        const cityControl = address.get('cityId');
        if (this.filteredMunicipalities.length > 0) {
            cityControl?.setValue(this.filteredMunicipalities[0].id);
        } else {
            cityControl?.setValue(null);
            this._updateCityNameById(null);
        }
    }

    private _onCityChange(id: number | null): void {
        this._updateCityNameById(id);
    }

    private _updateCityNameById(id: number | null): void {
        const municipality =
            id != null
                ? this._municipalities.find((item) => item.id === id)
                : null;

        this._addressGroup.patchValue(
            {
                city: municipality?.name ?? '',
            },
            { emitEvent: false }
        );
    }

    private _composeAddressFromForm(): string | null {
        const addressGroup = this._addressGroup;
        const { street, city, state, postalCode, country } =
            addressGroup.getRawValue();

        if (!street || !city || !state || !country) {
            return null;
        }

        const parts = [street, city, state, postalCode, country]
            .map((value) => (value ? value.toString().trim() : ''))
            .filter((value) => value.length > 0);

        return parts.join(', ');
    }

    private get _addressGroup(): FormGroup {
        return this.form.get('address') as FormGroup;
    }

    private _ensureMapReady(): Promise<void> {
        if (this._map) {
            return Promise.resolve();
        }

        if (this._mapReadyPromise) {
            return this._mapReadyPromise;
        }

        if (!this._mapContainer) {
            return Promise.reject(
                new Error('El contenedor del mapa no está disponible.')
            );
        }

        this.mapLoading = true;

        this._mapReadyPromise = new Promise((resolve, reject) => {
            firstValueFrom(this._mapboxService.initialize())
                .then((config) => {
                    const center =
                        this._currentCoordinates() ?? DEFAULT_CENTER;

                    this._map = this._mapboxService.createMap(
                        this._mapContainer!.nativeElement,
                        center,
                        config.styleUrl
                    );

                    this._map.addControl(new mapboxgl.NavigationControl(), 'top-right');

                    this._marker = new mapboxgl.Marker({
                        draggable: true,
                    })
                        .setLngLat(center)
                        .addTo(this._map);

                    this._marker.on('dragend', () => {
                        const lngLat = this._marker?.getLngLat();
                        if (lngLat) {
                            this._applyMarkerPosition(lngLat);
                        }
                    });

                    this._map.once('load', () => {
                        this.mapLoading = false;
                        this.mapError = null;
                        resolve();
                    });

                    this._map.on('error', (event) => {
                        console.error(event.error);
                        this.mapError =
                            'No se pudo cargar Mapbox. Verifica el token configurado.';
                        this.mapLoading = false;
                        reject(event.error);
                    });
                })
                .catch((error) => {
                    this.mapLoading = false;
                    this.mapError =
                        error?.message ??
                        'No se pudo inicializar Mapbox. Verifica el token configurado.';
                    reject(error);
                });
        });

        return this._mapReadyPromise;
    }

    private _currentCoordinates(): [number, number] | null {
        const coordinateGroup = this.form.get('coordinate') as FormGroup | null;

        if (!coordinateGroup) {
            return null;
        }

        const latitude = coordinateGroup.get('latitude')?.value;
        const longitude = coordinateGroup.get('longitude')?.value;

        if (typeof latitude === 'number' && typeof longitude === 'number') {
            return [longitude, latitude];
        }

        return null;
    }

    private _setMapPosition(location: [number, number]): void {
        const [lng, lat] = location;

        if (this._map) {
            this._map.flyTo({
                center: [lng, lat],
                zoom: Math.max(this._map.getZoom() ?? 16, 16),
            });
        }

        if (!this._marker && this._map) {
            this._marker = new mapboxgl.Marker({
                draggable: true,
            })
                .setLngLat([lng, lat])
                .addTo(this._map);

            this._marker.on('dragend', () => {
                const lngLat = this._marker?.getLngLat();
                if (lngLat) {
                    this._applyMarkerPosition(lngLat);
                }
            });
        } else {
            this._marker?.setLngLat([lng, lat]);
        }

        this.form.patchValue(
            {
                coordinate: {
                    latitude: Number(lat.toFixed(6)),
                    longitude: Number(lng.toFixed(6)),
                },
            },
            { emitEvent: false }
        );
    }

    private _applyMarkerPosition(lngLat: mapboxgl.LngLat): void {
        const latitude = Number(lngLat.lat.toFixed(6));
        const longitude = Number(lngLat.lng.toFixed(6));

        this.form.patchValue(
            {
                coordinate: {
                    latitude,
                    longitude,
                },
            },
            { emitEvent: false }
        );
    }
}
