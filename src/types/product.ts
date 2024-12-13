export type Product = {
    id: string;
    name: string;
    description: string;
    rating: number;
    price: number;
    photoUrl: string;
    availableAmount: number;
    userId: string;
};

export interface ProductForm {
    Name: string;
    Description: string;
    CategoryId: string;
    Price: number;
    PhotoUrl: string; // Now a Base64 string
    AvailableAmount: number;
    UserId: string;
}
