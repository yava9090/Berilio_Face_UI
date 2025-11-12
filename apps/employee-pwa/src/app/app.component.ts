import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { EmployeeService, EmployeeProfile } from './services/employee.service';

type ViewState = 'idle' | 'loading' | 'enroll' | 'ready' | 'error' | 'uploadingSelfie';
type SelfieCaptureType = 'Base' | 'Attendance';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly fb = inject(FormBuilder);
  private readonly employeeService = inject(EmployeeService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly selfieInput = viewChild<ElementRef<HTMLInputElement>>('selfieInput');

  readonly identificationForm = this.fb.nonNullable.group({
    identification: ['', [Validators.required, Validators.minLength(6)]],
  });

  readonly state = signal<ViewState>('idle');
  readonly errorMessage = signal<string | null>(null);
  readonly employee = signal<EmployeeProfile | null>(null);
  readonly lastCapturedLocation = signal<{ latitude: number; longitude: number } | null>(null);
  readonly captureRequestedAt = signal<Date | null>(null);
  readonly selfieCaptureType = signal<SelfieCaptureType>('Base');
  readonly uploadingMessage = computed(() =>
    this.selfieCaptureType() === 'Base' ? 'Guardando selfie base...' : 'Registrando asistencia...'
  );

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
    this.startSelfieCapture('Base');
  }

  markAttendance(): void {
    if (!this.employee()) {
      this.errorMessage.set('Debes identificar al empleado antes de registrar asistencia.');
      return;
    }

    this.startSelfieCapture('Attendance');
  }

  handleSelfieSelection(event: Event): void {
    const employee = this.employee();
    if (!employee) {
      this.errorMessage.set('Debes identificar al empleado antes de registrar la selfie.');
      return;
    }

    const input = event.target as HTMLInputElement | null;
    const file = input?.files?.item(0);

    if (!file) {
      return;
    }

    const captureType = this.selfieCaptureType();

    this.state.set('uploadingSelfie');
    this.errorMessage.set(null);

    const location = this.lastCapturedLocation();
    const capturedAt = this.captureRequestedAt() ?? new Date();

    this.employeeService
      .uploadSelfie(employee.id, file, {
        latitude: location?.latitude ?? null,
        longitude: location?.longitude ?? null,
        capturedAt: capturedAt.toISOString(),
        deviceMetadata: 'pwa-employee-kiosk',
        type: captureType,
      })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.employee.set({ ...employee, hasBaseSelfie: true });
          this.state.set('ready');
          if (input) {
            input.value = '';
          }
        },
        error: (error) => {
          this.errorMessage.set(
            error?.message ?? 'No pudimos guardar la selfie base. Intenta nuevamente.'
          );
          this.state.set(captureType === 'Base' ? 'enroll' : 'ready');
          if (input) {
            input.value = '';
          }
        },
      });
  }

  private startSelfieCapture(type: SelfieCaptureType): void {
    if (!this.employee()) {
      this.errorMessage.set('Debes identificar al empleado antes de registrar la selfie.');
      return;
    }

    this.selfieCaptureType.set(type);
    this.captureRequestedAt.set(new Date());
    this.tryCaptureLocation().finally(() => {
      const input = this.selfieInput()?.nativeElement;
      input?.click();
    });
  }

  private async tryCaptureLocation(): Promise<void> {
    if (!('geolocation' in navigator)) {
      this.lastCapturedLocation.set(null);
      return;
    }

    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.lastCapturedLocation.set({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          resolve();
        },
        () => {
          this.lastCapturedLocation.set(null);
          resolve();
        },
        {
          enableHighAccuracy: true,
          maximumAge: 30_000,
          timeout: 10_000,
        }
      );
    });
  }
}
