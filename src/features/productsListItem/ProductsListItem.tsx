import React, { useState } from 'react';
import { Product } from '../../types/product.ts';
import { Box, Card, CardMedia, Rating, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductsListItem = ({
    id,
    name,
    description,
    rating,
    price,
    photoUrl,
    availableAmount,
}: Product) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link to={`/products/${id}`}>
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
                    width: 250,
                    // Faster transition for smoother effect
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    // Scale and shadow change on hover
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    boxShadow: isHovered
                        ? '0 15px 25px rgba(0, 0, 0, 0.3)' // Deeper shadow on hover
                        : '0 4px 10px rgba(0, 0, 0, 0.1)', // Normal shadow
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box sx={{ alignItems: 'center', display: 'flex' }}>
                        <CardMedia
                            image={`${photoUrl}`}
                            sx={{ width: 200, height: 200 }}
                        />
                    </Box>
                    <Typography variant="h5">{`${name}`}</Typography>

                    <Rating name="rating" value={rating} readOnly />
                    <Typography
                        variant="subtitle1"
                        sx={{ color: 'text.secondary' }}
                    >{`Ilość: ${availableAmount}`}</Typography>
                    <Typography
                        variant="h5"
                        sx={{ color: 'secondary.light' }}
                    >{`${price} PLN`}</Typography>
                </Box>
            </Card>
        </Link>
    );
};

export default ProductsListItem;
