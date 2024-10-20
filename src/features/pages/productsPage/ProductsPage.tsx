import React from 'react';
import { Box, Container } from '@mui/material';
import AddProductForm from '../../addProductForm/AddProductForm.tsx';
import ProductsList from '../../productsList/ProductsList.tsx';

const ProductsPage = () => {
    return (
        <Container
            maxWidth={'lg'}
            sx={{
                pt: { xs: 9, sm: 10 },
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: { xs: 0, md: 2 },
            }}
        >
            <Box>
                <ProductsList />
            </Box>
            <Box>
                <AddProductForm />
            </Box>
        </Container>
    );
};

export default ProductsPage;
