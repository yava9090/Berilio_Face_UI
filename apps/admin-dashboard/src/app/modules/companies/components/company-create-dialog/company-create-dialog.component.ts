import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
    FormBuilder,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-company-create-dialog',
    standalone: true,
    imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        NgIf,
    ],
    templateUrl: './company-create-dialog.component.html',
    styleUrls: ['./company-create-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyCreateDialogComponent {
    private readonly _dialogRef = inject(
        MatDialogRef<CompanyCreateDialogComponent>
    );
    private readonly _fb = inject(FormBuilder);

    readonly form = this._fb.nonNullable.group({
        name: [
            '',
            [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(120),
            ],
        ],
        ownerUserId: [''],
    });

    close(): void {
        this._dialogRef.close();
    }

    submit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        const { name, ownerUserId } = this.form.getRawValue();
        this._dialogRef.close({
            name: name.trim(),
            ownerUserId: ownerUserId?.trim() || undefined,
        });
    }
}
