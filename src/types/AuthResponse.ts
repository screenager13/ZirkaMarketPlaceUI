export type AuthResponse = {
    accessToken: string;
    refreshToken: string;
    id: string;
    role: 'Buyer' | 'Seller' | 'SystemAdministrator';
};
