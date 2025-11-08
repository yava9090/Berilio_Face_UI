import { Injectable } from '@angular/core';
import { Observable, delay, map, of, throwError } from 'rxjs';

export interface EmployeeProfile {
  id: string;
  fullName: string;
  identificationNumber: string;
  hasBaseSelfie: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  /**
   * TODO: Reemplazar la simulación por una llamada real al backend cuando
   * se exponga el endpoint de búsqueda por cédula.
   */
  lookupByIdentification(identification: string): Observable<EmployeeProfile> {
    const trimmed = identification.trim();

    if (!trimmed) {
      return throwError(() => new Error('La identificación no puede estar vacía.'));
    }

    // Simulación para desarrollo: números pares tienen selfie base, impares no.
    const hasBaseSelfie = Number(trimmed[trimmed.length - 1]) % 2 === 0;

    return of(trimmed).pipe(
      delay(600),
      map((id) => ({
        id:
          typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
            ? crypto.randomUUID()
            : `emp-${Math.floor(Math.random() * 1_000_000)}`,
        fullName: `Empleado ${id}`,
        identificationNumber: id,
        hasBaseSelfie,
      }))
    );
  }
}
