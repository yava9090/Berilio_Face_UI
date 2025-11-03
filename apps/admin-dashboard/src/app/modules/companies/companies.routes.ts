import { Route } from '@angular/router';
import { CompaniesComponent } from 'app/modules/companies/companies.component';

export const companiesRoutes: Route[] = [
    {
        path: '',
        component: CompaniesComponent,
    },
];
