export interface Company {
    id: string;
    name: string;
    ownerUserId: string;
    ownerName?: string;
    ownerEmail?: string;
    isArchived: boolean;
}

export interface CreateCompanyRequest {
    name: string;
    ownerUserId: string;
    ownerName?: string;
    ownerEmail?: string;
}

export interface UpdateCompanyRequest {
    name: string;
}
