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
        getNewProducts: builder.query<Product[], void>({
            query: () => ({
                url: '/products/new-products',
                method: 'get',
            }),
            providesTags: ['Product'],
        }),
        getBestSellers: builder.query<Product[], void>({
            query: () => ({
                url: '/products/bestsellers',
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

export const {
    useGetProductsQuery,
    usePostProductMutation,
    useGetBestSellersQuery,
    useGetNewProductsQuery,
} = productApiSlice;
