import React from 'react';
import { Box, Typography } from '@mui/material';
import ProductsListItem from '../productsListItem/ProductsListItem.tsx';
import { Product } from '../../types/product.ts';
import { useGetProductsQuery } from '../../api/product/productApiSlice.ts';

const ProductsList = () => {
    const { data } = useGetProductsQuery();
    const products = data?.items;
    return (
        <>
            <Typography component="h1" variant="h2" sx={{ mb: 2 }}>
                Twoje towary
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 3,
                    alignItems: 'center',
                    width: 800,
                    borderRadius: 3,
                }}
            >
                {products &&
                    products.map((item: Product) => (
                        <ProductsListItem product={item} />
                    ))}
            </Box>
        </>
    );
};

export default ProductsList;
