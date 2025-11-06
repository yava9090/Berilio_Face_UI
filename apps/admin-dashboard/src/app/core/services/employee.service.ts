import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
    private readonly _http = inject(HttpClient);

    importEmployees(
        companyId: string,
        locationId: string,
        file: File
    ): Observable<unknown> {
        const formData = new FormData();
        formData.append('file', file);

        return this._http.post(
            `${environment.apiUrl}/companies/${companyId}/locations/${locationId}/employees/import`,
            formData
        );
    }

    getEmployees(locationId: string): Observable<Employee[]> {
        return this._http.get<Employee[]>(
            `${environment.apiUrl}/locations/${locationId}/employees`
        );
    }
}
