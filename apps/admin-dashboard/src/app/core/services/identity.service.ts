import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { UserSummary } from 'app/core/models/user.model';

@Injectable({ providedIn: 'root' })
export class IdentityService {
    private readonly _http = inject(HttpClient);

    getUsersByRole(role: string): Observable<UserSummary[]> {
        const params = new HttpParams().set('role', role);
        return this._http.get<UserSummary[]>(
            `${environment.apiUrl}/api/identity/users`,
            { params }
        );
    }
}
