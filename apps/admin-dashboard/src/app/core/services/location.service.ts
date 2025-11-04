import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import {
    CreateLocationRequest,
    Location,
} from 'app/core/models/location.model';

@Injectable({ providedIn: 'root' })
export class LocationService {
    private readonly _http = inject(HttpClient);

    getLocations(companyId: string): Observable<Location[]> {
        return this._http.get<Location[]>(
            `${environment.apiUrl}/companies/${companyId}/locations`
        );
    }

    createLocation(
        companyId: string,
        payload: CreateLocationRequest
    ): Observable<Location> {
        return this._http.post<Location>(
            `${environment.apiUrl}/companies/${companyId}/locations`,
            payload
        );
    }
}
