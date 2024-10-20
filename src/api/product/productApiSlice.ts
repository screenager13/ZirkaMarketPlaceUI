import { api } from '../api';
import { Product, ProductForm } from '../../types/product.ts';

export const productApiSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<{ items: Product[] }, void>({
            query: () => ({
                url: '/products',
                method: 'get',
            }),
            providesTags: ['Product'],
        }),
        postProduct: builder.mutation<void, ProductForm>({
            query: (credentials) => ({
                url: '/products',
                method: 'post',
                data: credentials,
            }),
            invalidatesTags: ['Product'],
        }),
    }),
});

export const { useGetProductsQuery, usePostProductMutation } = productApiSlice;
