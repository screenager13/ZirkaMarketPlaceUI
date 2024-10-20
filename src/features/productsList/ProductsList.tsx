import React from 'react';
import { Box, Typography } from '@mui/material';
import ProductsListItem from '../productsListItem/ProductsListItem.tsx';
import { Product } from '../../types/product.ts';
import { useGetProductsQuery } from '../../api/product/productApiSlice.ts';

const ProductsList = () => {
    const { data } = useGetProductsQuery();
    const products = data?.items;
    // const products: Product[] = [
    //     {
    //         id: 'kindOfId',
    //         name: 'Zirka',
    //         description: 'Best Chess Player',
    //         rating: 4,
    //         price: 100,
    //         photoUrl:
    //             'https://cdn.discordapp.com/attachments/1294180715721785414/1297533907117412473/sticker.webp?ex=6716461e&is=6714f49e&hm=911e58bfe325fcee3ea980db907c07d25cca964d2b75d31627550548110d0faa&',
    //         availableAmount: 1,
    //     },
    //     {
    //         id: 'kindOfId',
    //         name: 'Zirka',
    //         description:
    //             'Best Chess Player Best Chess Player Best Chess Player Best Chess Player Best Chess Player',
    //         rating: 5,
    //         price: 100,
    //         photoUrl:
    //             'https://cdn.discordapp.com/attachments/1294180715721785414/1297533907117412473/sticker.webp?ex=6716461e&is=6714f49e&hm=911e58bfe325fcee3ea980db907c07d25cca964d2b75d31627550548110d0faa&',
    //         availableAmount: 1,
    //     },
    //     {
    //         id: 'kindOfId',
    //         name: 'Zirka',
    //         description: 'Best Chess Player',
    //         rating: 3.5,
    //         price: 100,
    //         photoUrl:
    //             'https://cdn.discordapp.com/attachments/1294180715721785414/1297533907117412473/sticker.webp?ex=6716461e&is=6714f49e&hm=911e58bfe325fcee3ea980db907c07d25cca964d2b75d31627550548110d0faa&',
    //         availableAmount: 1,
    //     },
    //     {
    //         id: 'kindOfId',
    //         name: 'Zirka',
    //         description: 'Best Chess Player',
    //         rating: 2.1,
    //         price: 100,
    //         photoUrl: '',
    //         availableAmount: 1,
    //     },
    // ];
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
                        <ProductsListItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            rating={item.rating}
                            price={item.price}
                            photoUrl={item.photoUrl}
                            availableAmount={item.availableAmount}
                        />
                    ))}
            </Box>
        </>
    );
};

export default ProductsList;
