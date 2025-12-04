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

type EnrollStatusResponse = {
  hasBaseSelfie: boolean;
  baseImageObjectName?: string | null;
  comprefaceImageId?: string | null;
};

type VerifyResponse = {
  employeeId: string;
  identificationNumber: string;
  similarity: number;
  imageObjectName?: string | null;
};

type AttendanceResponse = {
  attendanceId: string;
  employeeId: string;
  identificationNumber: string;
  similarity: number;
  imageObjectName?: string | null;
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

  getEnrollStatusByIdentification(identification: string): Observable<EnrollStatusResponse> {
    const url = `${this.apiUrl}/employees/identification/${encodeURIComponent(identification)}/enroll/status`;
    return this.http.get<EnrollStatusResponse>(url);
  }

  enrollFace(employeeId: string, image: File, latitude: number, longitude: number): Observable<string> {
    const url = `${this.apiUrl}/employees/${encodeURIComponent(employeeId)}/enroll`;
    const formData = new FormData();
    formData.append('image', image);
    formData.append('latitude', latitude.toString());
    formData.append('longitude', longitude.toString());

    return this.http.post<{ imageId: string }>(url, formData).pipe(
      map((resp) => resp.imageId),
      catchError((error: HttpErrorResponse) => {
        const fallbackMessage =
          error.error?.title ??
          error.error?.detail ??
          error.error?.message ??
          'No pudimos enrolar la selfie. Intenta nuevamente.';

        return throwError(() => new Error(fallbackMessage));
      })
    );
  }

  verifyFace(identification: string, image: File, latitude: number, longitude: number): Observable<VerifyResponse> {
    const url = `${this.apiUrl}/employees/identification/${encodeURIComponent(identification)}/verify`;
    const formData = new FormData();
    formData.append('image', image);
    formData.append('latitude', latitude.toString());
    formData.append('longitude', longitude.toString());

    return this.http.post<VerifyResponse>(url, formData).pipe(
      catchError((error: HttpErrorResponse) => {
        const fallbackMessage =
          error.error?.title ??
          error.error?.detail ??
          error.error?.message ??
          'No pudimos verificar la identidad. Intenta nuevamente.';

        return throwError(() => new Error(fallbackMessage));
      })
    );
  }

  registerAttendance(
    identification: string,
    image: File,
    latitude: number,
    longitude: number
  ): Observable<AttendanceResponse> {
    const url = `${this.apiUrl}/employees/identification/${encodeURIComponent(identification)}/attendance`;
    const formData = new FormData();
    formData.append('image', image);
    formData.append('latitude', latitude.toString());
    formData.append('longitude', longitude.toString());

    return this.http.post<AttendanceResponse>(url, formData).pipe(
      catchError((error: HttpErrorResponse) => {
        const fallbackMessage =
          error.error?.title ??
          error.error?.detail ??
          error.error?.message ??
          'No pudimos registrar la asistencia. Intenta nuevamente.';

        return throwError(() => new Error(fallbackMessage));
      })
    );
  }
}
