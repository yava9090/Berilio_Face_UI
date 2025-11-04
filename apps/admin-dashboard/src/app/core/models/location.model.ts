export interface LocationAddress {
    street: string;
    additionalInfo?: string | null;
    city: string;
    state: string;
    country: string;
    postalCode: string;
}

export interface LocationCoordinate {
    latitude: number;
    longitude: number;
}

export interface LocationScheduleEntry {
    day: string;
    start: string;
    end: string;
}

export interface Location {
    id: string;
    companyId: string;
    name: string;
    address: LocationAddress;
    coordinate: LocationCoordinate;
    schedule: LocationScheduleEntry[];
}

export interface CreateLocationRequest {
    name: string;
    address: LocationAddress;
    coordinate: LocationCoordinate;
    schedule: LocationScheduleEntry[];
}
