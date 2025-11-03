export interface Company {
    id: string;
    name: string;
    ownerUserId: string;
    isArchived: boolean;
}

export interface CreateCompanyRequest {
    name: string;
    ownerUserId?: string;
}

export interface UpdateCompanyRequest {
    name: string;
}
