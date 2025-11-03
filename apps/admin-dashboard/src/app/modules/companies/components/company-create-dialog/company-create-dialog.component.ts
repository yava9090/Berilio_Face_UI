import { NgIf, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import {
    FormBuilder,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { finalize } from 'rxjs';
import { IdentityService } from 'app/core/services/identity.service';
import { UserSummary } from 'app/core/models/user.model';

@Component({
    selector: 'app-company-create-dialog',
    standalone: true,
    imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        NgIf,
        NgFor,
    ],
    templateUrl: './company-create-dialog.component.html',
    styleUrls: ['./company-create-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyCreateDialogComponent implements OnInit {
    private readonly _dialogRef = inject(
        MatDialogRef<CompanyCreateDialogComponent>
    );
    private readonly _fb = inject(FormBuilder);
    private readonly _identityService = inject(IdentityService);

    readonly form = this._fb.nonNullable.group({
        name: [
            '',
            [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(120),
            ],
        ],
        ownerUserId: ['', Validators.required],
    });

    users: UserSummary[] = [];
    loadingUsers = false;
    usersError: string | null = null;

    ngOnInit(): void {
        this.loadingUsers = true;
        this._identityService
            .getUsersByRole('Administrator')
            .pipe(finalize(() => (this.loadingUsers = false)))
            .subscribe({
                next: (users) => {
                    this.users = users;
                    if (users.length === 1) {
                        this.form.patchValue({ ownerUserId: users[0].id });
                    }
                },
                error: (error) => {
                    this.usersError =
                        error?.message ?? 'No se pudo cargar la lista de usuarios.';
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

        const { name, ownerUserId } = this.form.getRawValue();
        this._dialogRef.close({
            name: name.trim(),
            ownerUserId,
        });
    }
}
