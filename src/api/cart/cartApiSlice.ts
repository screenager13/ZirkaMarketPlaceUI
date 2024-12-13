import { api } from '../api';
import { CartState } from './cartSlice.ts';

export const cartApi = api.injectEndpoints({
    endpoints: (builder) => ({
        payment: builder.mutation<void, CartState>({
            query: (credentials) => ({
                url: '/payments/buy-product',
                method: 'post',
                data: credentials,
            }),
            invalidatesTags: ['Product'],
        }),
    }),
});

export const { usePaymentMutation } = cartApi;
