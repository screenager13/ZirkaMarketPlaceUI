import React from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Card,
    CardMedia,
    Typography,
    Rating,
    Button,
    Container,
} from '@mui/material';
import { useGetProductsQuery } from '../../../api/product/productApiSlice.ts';
import { Product } from '../../../types/product.ts';

const SingleProductPage = () => {
    const { productId } = useParams<{ productId: string }>();
    const { data } = useGetProductsQuery();
    const product: Product | undefined = data?.items?.find(
        (p) => p.id === productId,
    );

    // const product = {
    //     id: 'kindOfId',
    //     name: 'Zirka',
    //     description: 'Best Chess Player',
    //     rating: 2.1,
    //     price: 100,
    //     photoUrl: '',
    //     availableAmount: 1,
    // };

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
                backgroundColor: '#272727',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Box
                sx={{
                    flexGrow: 1,
                    borderRadius: 3,
                    display: 'flex',
                    gap: 2,
                    height: 400,
                }}
            >
                <CardMedia
                    component="img"
                    image={
                        product.photoUrl || 'https://via.placeholder.com/200'
                    }
                    alt={product.name}
                    sx={{ width: 300, height: 300, borderRadius: 2 }}
                />

                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <Typography variant="h4" component="h1">
                        Nazwa: {product.name}
                    </Typography>
                    <Typography variant="h6" component="h1">
                        Ocena: <Rating value={product.rating} readOnly />
                    </Typography>

                    <Typography variant="h6" sx={{ color: 'secondary.light' }}>
                        Cena: {`${product.price} PLN`}
                    </Typography>
                    <Typography variant="subtitle1">
                        Iłość{`: ${product.availableAmount}`}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: 'text.secondary', mt: 2 }}
                    >
                        Opis: {product.description}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box sx={{ height: 235 }}></Box>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ mt: 3, height: 45, width: 200 }}
                    >
                        Add to Cart
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default SingleProductPage;
