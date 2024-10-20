import React from 'react';
import { Product } from '../../types/product.ts';
import { Avatar, Box, Card, CardMedia, Typography } from '@mui/material';

const ProductsListItem = ({
    id,
    name,
    description,
    rating,
    price,
    photoUrl,
    availableAmount,
}: Product) => {
    return (
        <Card
            elevation={4}
            sx={{
                backgroundColor: 'primary.main',
                mb: 2,
                display: 'flex',
                justifyContent: 'space-between',

                minHeight: '240px',
                p: 3,
                borderRadius: 3,
                gap: 1,
                width: 750,
            }}
        >
            <Box
                sx={{
                    maxWidth: 400,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <Box>
                    <Typography variant="h5">{`Nazwa: ${name}`}</Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{ color: 'text.secondary' }}
                    >{`Opis: ${description}`}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                        variant="subtitle1"
                        sx={{ color: 'text.secondary' }}
                    >{`Ocena: ${rating}/5`}</Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{ color: 'text.secondary' }}
                    >{`Ilość: ${availableAmount}`}</Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{ color: 'text.secondary' }}
                    >{`Cena: ${price} PLN`}</Typography>
                </Box>
            </Box>
            <Box sx={{ alignItems: 'center', display: 'flex' }}>
                <CardMedia
                    image={`${photoUrl}`}
                    sx={{ width: 200, height: 200 }}
                />
            </Box>
        </Card>
    );
};

export default ProductsListItem;
