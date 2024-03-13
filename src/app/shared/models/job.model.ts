export interface JobModel {
    id: number;
    companyName: string;
    title: string;
    companyLogo: string;
    reference: string;
    favorite: boolean; 
    location?: string;
    industries?: string[];
    types?: string[];
    description?: string;
    publishDate?: Date;
}