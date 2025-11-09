import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

import { environment } from '../../environments/environment';

export interface EmployeeProfile {
  id: string;
  locationId: string;
  firstName: string;
  lastName: string;
  identificationNumber: string;
  phone: string;
  hasBaseSelfie: boolean;
}

type EmployeeIdentificationResponse = {
  id: string;
  locationId: string;
  firstName: string;
  lastName: string;
  identificationNumber: string;
  phone: string;
  hasBaseSelfie: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  lookupByIdentification(identification: string): Observable<EmployeeProfile> {
    const trimmed = identification.trim();

    if (!trimmed) {
      return throwError(() => new Error('La identificación no puede estar vacía.'));
    }

    const url = `${this.apiUrl}/employees/identification/${encodeURIComponent(trimmed)}`;

    return this.http.get<EmployeeIdentificationResponse>(url).pipe(
      map((response) => ({
        id: response.id,
        locationId: response.locationId,
        firstName: response.firstName,
        lastName: response.lastName,
        identificationNumber: response.identificationNumber,
        phone: response.phone,
        hasBaseSelfie: response.hasBaseSelfie ?? false,
      })),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return throwError(() => new Error('No encontramos un empleado con esa identificación.'));
        }

        const fallbackMessage =
          error.error?.title ??
          error.error?.detail ??
          error.error?.message ??
          'No pudimos validar la identificación en este momento. Intenta nuevamente.';

        return throwError(() => new Error(fallbackMessage));
      })
    );
  }
}
