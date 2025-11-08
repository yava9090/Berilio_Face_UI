import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { EmployeeService, EmployeeProfile } from './services/employee.service';

type ViewState = 'idle' | 'loading' | 'enroll' | 'ready' | 'error';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly fb = inject(FormBuilder);
  private readonly employeeService = inject(EmployeeService);
  private readonly destroyRef = inject(DestroyRef);

  readonly identificationForm = this.fb.nonNullable.group({
    identification: ['', [Validators.required, Validators.pattern(/^\d{6,}$/)]],
  });

  readonly state = signal<ViewState>('idle');
  readonly errorMessage = signal<string | null>(null);
  readonly employee = signal<EmployeeProfile | null>(null);

  readonly hasEmployee = computed(() => this.employee() !== null);
  readonly employeeFullName = computed(() => {
    const profile = this.employee();
    return profile ? `${profile.firstName} ${profile.lastName}` : '';
  });

  submitIdentification(): void {
    if (this.identificationForm.invalid) {
      this.identificationForm.markAllAsTouched();
      return;
    }

    this.errorMessage.set(null);
    this.state.set('loading');

    const id = this.identificationForm.controls.identification.value.trim();

    this.employeeService
      .lookupByIdentification(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (profile) => {
          this.employee.set(profile);
          this.state.set(profile.hasBaseSelfie ? 'ready' : 'enroll');
        },
        error: (error) => {
          this.errorMessage.set(
            error?.message ?? 'No encontramos un empleado con esa identificación.'
          );
          this.employee.set(null);
          this.state.set('error');
        },
      });
  }

  resetFlow(): void {
    this.identificationForm.reset();
    this.employee.set(null);
    this.errorMessage.set(null);
    this.state.set('idle');
  }

  requestEnrollment(): void {
    this.errorMessage.set('La captura de selfie base estará disponible próximamente.');
  }

  markAttendance(): void {
    this.errorMessage.set('La captura de asistencia estará disponible en la siguiente iteración.');
  }
}
