import { api } from '../api';
import { Category } from '../../types/Category.ts';

export const categoryApiSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query<Category[], void>({
            query: () => ({
                url: '/categories',
                method: 'get',
            }),
            providesTags: ['Category'],
        }),
        getSingleCategory: builder.query<Category, string>({
            query: (id: string) => ({
                url: `/categories/${id}`,
                method: 'get',
            }),
            providesTags: ['Category'],
        }),
    }),
});

export const { useGetCategoriesQuery, useGetSingleCategoryQuery } =
    categoryApiSlice;
