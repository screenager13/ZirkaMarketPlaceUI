import { api } from '../api';
import { User } from '../../types/User.ts';
import { AuthResponse } from '../../types/AuthResponse.ts';
import { RegisterUser } from '../../features/pages/singUp/SingUp.tsx';
export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<
            AuthResponse,
            { userName: string; password: string }
        >({
            query: (credentials) => ({
                url: '/users/login',
                method: 'post',
                data: credentials,
            }),
        }),
        registration: builder.mutation<AuthResponse, RegisterUser>({
            query: (credentials) => ({
                url: '/users/register',
                method: 'post',
                data: credentials,
            }),
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: '/users/logout',
                method: 'post',
            }),
        }),
        getAllUsers: builder.query<User[], void>({
            query: () => ({
                url: '/users',
                method: 'get',
            }),
            providesTags: ['User'],
        }),
        getUser: builder.query({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'GET',
            }),
        }),
        refresh: builder.query<AuthResponse, void>({
            query: (credentials) => ({
                url: '/users/refreshtoken',
                method: 'get',
                data: credentials,
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useRegistrationMutation,
    useLogoutMutation,
    useRefreshQuery,
    useGetAllUsersQuery,
    useGetUserQuery,
} = authApi;
