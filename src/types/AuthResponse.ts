import { User } from './User.ts';
export type AuthResponse = {
    accessToken: string;
    refreshToken: string;
    user: User;
};
