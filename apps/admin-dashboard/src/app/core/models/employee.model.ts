export interface Employee {
    id: string;
    locationId: string;
    firstName: string;
    lastName: string;
    identificationNumber: string;
    phone: string;
}

export interface EmployeeListItem extends Employee {
    locationName?: string;
}
