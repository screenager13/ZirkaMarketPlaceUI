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
import { useGetSingleProductQuery } from '../../../api/product/productApiSlice.ts';
import { Product } from '../../../types/product.ts';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const SingleProductPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data } = useGetSingleProductQuery(id as string);
    const product: Product | undefined = data;

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
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    height: 400,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        flexGrow: 1,
                        borderRadius: 3,
                    }}
                >
                    <CardMedia
                        component="img"
                        image={
                            product.photoUrl ||
                            'https://via.placeholder.com/200'
                        }
                        alt={product.name}
                        sx={{
                            width: 300,
                            height: 300,
                            borderRadius: 2,
                            objectFit: 'contain',
                        }}
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
                            {product.name}
                        </Typography>
                        <Typography variant="h6" component="h1">
                            <Rating
                                emptyIcon={
                                    <StarBorderIcon sx={{ color: 'gray' }} />
                                }
                                value={product.rating}
                                readOnly
                            />
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{ color: 'secondary.light' }}
                        >
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
                </Box>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        borderRadius: 3,
                        mt: 3,
                        height: 45,
                        width: '100%',
                        maxWidth: 400,
                    }}
                >
                    Add to Cart
                </Button>
            </Box>
        </Container>
    );
};

export default SingleProductPage;
