import React from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    CardMedia,
    Typography,
    Rating,
    Button,
    Container,
} from '@mui/material';
import { useGetSingleProductQuery } from '../../api/product/productApiSlice.ts';
import { Product } from '../../types/product.ts';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SingleProductItem from '../../features/singleProductItem/SingleProductItem.tsx';

const SingleProductPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data } = useGetSingleProductQuery(id as string);
    const product: Product | undefined | null = data;

    if (!product) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <Typography variant="h4" component="h2">
                    Product not found
                </Typography>
            </Box>
        );
    }

    return (
        <Container
            maxWidth={'lg'}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <SingleProductItem product={product} />
        </Container>
    );
};

export default SingleProductPage;
