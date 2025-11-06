import { Route } from '@angular/router';
import { CompanyEmployeesComponent } from 'app/modules/companies/employees/company-employees.component';

export const companyEmployeesRoutes: Route[] = [
    {
        path: '',
        component: CompanyEmployeesComponent,
    },
];
