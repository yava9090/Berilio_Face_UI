import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
    Company,
    CreateCompanyRequest,
    UpdateCompanyRequest,
} from 'app/core/models/company.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

const COMPANIES_BASE_URL = `${environment.apiUrl}/companies`;

@Injectable({ providedIn: 'root' })
export class CompanyService {
    private readonly _http = inject(HttpClient);

    getCompanies(): Observable<Company[]> {
        return this._http.get<Company[]>(COMPANIES_BASE_URL);
    }

    getCompany(id: string): Observable<Company> {
        return this._http.get<Company>(`${COMPANIES_BASE_URL}/${id}`);
    }

    createCompany(payload: CreateCompanyRequest): Observable<{ id: string }> {
        return this._http.post<{ id: string }>(COMPANIES_BASE_URL, payload);
    }

    updateCompany(
        id: string,
        payload: UpdateCompanyRequest
    ): Observable<void> {
        return this._http.put<void>(`${COMPANIES_BASE_URL}/${id}`, payload);
    }

    archiveCompany(id: string): Observable<void> {
        return this._http.delete<void>(`${COMPANIES_BASE_URL}/${id}`);
    }

    restoreCompany(id: string): Observable<void> {
        return this._http.post<void>(
            `${COMPANIES_BASE_URL}/${id}/restore`,
            {}
        );
    }
}
