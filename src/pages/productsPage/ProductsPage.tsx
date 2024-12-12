import React from 'react';
import { Box, Container, Divider } from '@mui/material';
import AddProductForm from '../../features/addProductForm/AddProductForm.tsx';
import ProductsList from '../../features/productsList/ProductsList.tsx';

const ProductsPage = () => {
    return (
        <Container
            maxWidth={'lg'}
            sx={{
                minHeight: '100vh',
                height: 'auto',
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
            <Divider
                orientation="vertical"
                variant="middle"
                sx={{ bgcolor: 'primary.main' }}
                flexItem
            />
            <Box>
                <AddProductForm />
            </Box>
        </Container>
    );
};

export default ProductsPage;
