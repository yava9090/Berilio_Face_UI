import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

type ScheduleFormGroup = FormGroup<{
    day: FormControl<string>;
    start: FormControl<string>;
    end: FormControl<string>;
}>;

interface DayOption {
    label: string;
    value: string;
}

@Component({
    selector: 'app-location-dialog',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        NgIf,
        NgFor,
    ],
    templateUrl: './location-dialog.component.html',
    styleUrls: ['./location-dialog.component.scss'],
})
export class LocationDialogComponent {
    private readonly _dialogRef = inject(MatDialogRef<LocationDialogComponent>);
    private readonly _fb = inject(FormBuilder);

    readonly days: DayOption[] = [
        { value: 'Monday', label: 'Lunes' },
        { value: 'Tuesday', label: 'Martes' },
        { value: 'Wednesday', label: 'Miércoles' },
        { value: 'Thursday', label: 'Jueves' },
        { value: 'Friday', label: 'Viernes' },
        { value: 'Saturday', label: 'Sábado' },
        { value: 'Sunday', label: 'Domingo' },
    ];

    readonly form = this._fb.group({
        name: this._fb.nonNullable.control('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(150),
        ]),
        address: this._fb.group({
            street: this._fb.nonNullable.control('', Validators.required),
            additionalInfo: this._fb.control(''),
            city: this._fb.nonNullable.control('', Validators.required),
            state: this._fb.nonNullable.control('', Validators.required),
            country: this._fb.nonNullable.control('', Validators.required),
            postalCode: this._fb.nonNullable.control('', Validators.required),
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

    get scheduleArray(): FormArray<ScheduleFormGroup> {
        return this.form.get('schedule') as FormArray<ScheduleFormGroup>;
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
}
