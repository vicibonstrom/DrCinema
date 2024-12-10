export interface Cinema {
    id: number;
    name: string;
    address: string;    // TODO:
    city: string;
    phone: string;
    website: string;
    description: string;
    google_map: string;
}

export type Cinemas = Cinema[];