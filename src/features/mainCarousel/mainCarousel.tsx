import { Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import ProductsListItem from '../productsListItem/ProductsListItem';
import { Product } from '../../types/product.ts';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type Props = {
    title: string;
    func: any;
};
const MainCarousel = ({ title, func }: Props) => {
    const { data } = func();
    const products: Product[] | undefined = data;
    // const products: Product[] = [
    //     {
    //         id: 'kindOfId1',
    //         name: 'Zirka 1',
    //         description: 'Best Chess Player',
    //         rating: 4,
    //         price: 100,
    //         photoUrl:
    //             'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRmpUug5APmUWRjrotX3x8t5MotsekC8IhUU7sQBS4R8Y8YCwD5wWk7z_FRV_0ZLtdmMevwQbcJNbcr7cpNk0kDpbwFy5Hk3NDW_EUx_0Xh5DDciJwLx6P64w',
    //         availableAmount: 1,
    //     },
    //     {
    //         id: 'kindOfId2',
    //         name: 'Zirka 2',
    //         description: 'Best Chess Player with long description',
    //         rating: 5,
    //         price: 100,
    //         photoUrl:
    //             'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRmpUug5APmUWRjrotX3x8t5MotsekC8IhUU7sQBS4R8Y8YCwD5wWk7z_FRV_0ZLtdmMevwQbcJNbcr7cpNk0kDpbwFy5Hk3NDW_EUx_0Xh5DDciJwLx6P64w',
    //         availableAmount: 1,
    //     },
    //     {
    //         id: 'kindOfId3',
    //         name: 'Zirka 3',
    //         description: 'Best Chess Player',
    //         rating: 3.5,
    //         price: 100,
    //         photoUrl:
    //             'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRmpUug5APmUWRjrotX3x8t5MotsekC8IhUU7sQBS4R8Y8YCwD5wWk7z_FRV_0ZLtdmMevwQbcJNbcr7cpNk0kDpbwFy5Hk3NDW_EUx_0Xh5DDciJwLx6P64w',
    //         availableAmount: 1,
    //     },
    //     {
    //         id: 'kindOfId4',
    //         name: 'Zirka 4',
    //         description: 'Best Chess Player',
    //         rating: 2.1,
    //         price: 100,
    //         photoUrl:
    //             'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRmpUug5APmUWRjrotX3x8t5MotsekC8IhUU7sQBS4R8Y8YCwD5wWk7z_FRV_0ZLtdmMevwQbcJNbcr7cpNk0kDpbwFy5Hk3NDW_EUx_0Xh5DDciJwLx6P64w',
    //         availableAmount: 1,
    //     },
    //     {
    //         id: 'kindOfId5',
    //         name: 'Zirka 5',
    //         description: 'Best Chess Player',
    //         rating: 4.5,
    //         price: 100,
    //         photoUrl:
    //             'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRmpUug5APmUWRjrotX3x8t5MotsekC8IhUU7sQBS4R8Y8YCwD5wWk7z_FRV_0ZLtdmMevwQbcJNbcr7cpNk0kDpbwFy5Hk3NDW_EUx_0Xh5DDciJwLx6P64w',
    //         availableAmount: 1,
    //     },
    //     {
    //         id: 'kindOfId6',
    //         name: 'Zirka 6',
    //         description: 'Best Chess Player',
    //         rating: 3,
    //         price: 100,
    //         photoUrl:
    //             'https://th.bing.com/th/id/R.7be23b31dc670187b0deae92352607c0?rik=b06SjbjBNJI%2bdg&pid=ImgRaw&r=0',
    //         availableAmount: 1,
    //     },
    //     {
    //         id: 'kindOfId7',
    //         name: 'Zirka 7',
    //         description: 'Best Chess Player',
    //         rating: 3.8,
    //         price: 100,
    //         photoUrl:
    //             'https://th.bing.com/th/id/R.7be23b31dc670187b0deae92352607c0?rik=b06SjbjBNJI%2bdg&pid=ImgRaw&r=0',
    //         availableAmount: 1,
    //     },
    //     {
    //         id: 'kindOfId8',
    //         name: 'Zirka 8',
    //         description: 'Best Chess Player',
    //         rating: 4.2,
    //         price: 100,
    //         photoUrl:
    //             'https://th.bing.com/th/id/R.7be23b31dc670187b0deae92352607c0?rik=b06SjbjBNJI%2bdg&pid=ImgRaw&r=0',
    //         availableAmount: 1,
    //     },
    //     {
    //         id: 'kindOfId9',
    //         name: 'Zirka 9',
    //         description: 'Best Chess Player',
    //         rating: 4.2,
    //         price: 100,
    //         photoUrl:
    //             'https://th.bing.com/th/id/R.7be23b31dc670187b0deae92352607c0?rik=b06SjbjBNJI%2bdg&pid=ImgRaw&r=0',
    //         availableAmount: 1,
    //     },
    //     {
    //         id: 'kindOfId10',
    //         name: 'Zirka 10',
    //         description: 'Best Chess Player',
    //         rating: 4.2,
    //         price: 100,
    //         photoUrl:
    //             'https://th.bing.com/th/id/R.7be23b31dc670187b0deae92352607c0?rik=b06SjbjBNJI%2bdg&pid=ImgRaw&r=0',
    //         availableAmount: 1,
    //     },
    // ];

    const maxVisible = 5;
    const [visibleIndex, setVisibleIndex] = useState(0);
    const totalProducts = products?.length || 5;
    const totalGroups = Math.ceil(totalProducts / maxVisible);

    const handleNext = () => {
        setVisibleIndex((prevIndex) => (prevIndex + 1) % totalGroups);
    };

    const handlePrev = () => {
        setVisibleIndex(
            (prevIndex) => (prevIndex - 1 + totalGroups) % totalGroups,
        );
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography
                variant={'h2'}
                textAlign="center"
                sx={{
                    marginBottom: 1,
                }}
            >
                {`${title}`}
            </Typography>
            <Box
                sx={{
                    padding: 1.2,
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    color: '#fff',
                    overflow: 'hidden',
                    maxWidth: 1370,
                    gap: 2,
                }}
            >
                {visibleIndex > 0 && totalGroups > 1 && (
                    <Box
                        onClick={handlePrev}
                        sx={{
                            position: 'absolute',
                            left: '15px',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(82, 5, 123, 0.6)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 1,
                        }}
                    >
                        <ArrowBackIosIcon
                            style={{
                                color: '#FFFFFF',
                                opacity: 1,
                                transform: 'translateX(4px)',
                            }}
                        />
                    </Box>
                )}

                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        transition: 'transform 0.5s ease',
                        transform: `translateX(-${visibleIndex * 71.2}%)`,
                        width: `${(totalProducts / maxVisible) * 71.2}%`,
                    }}
                >
                    {products &&
                        products.map(
                            ({
                                id,
                                name,
                                description,
                                rating,
                                price,
                                photoUrl,
                                availableAmount,
                            }) => (
                                <Box
                                    key={id}
                                    sx={{
                                        width: `calc(100% / ${maxVisible})`,
                                        padding: '0 4px',
                                        boxSizing: 'border-box',
                                    }}
                                >
                                    <ProductsListItem
                                        id={id}
                                        name={name}
                                        description={description}
                                        rating={rating}
                                        price={price}
                                        photoUrl={photoUrl}
                                        availableAmount={availableAmount}
                                    />
                                </Box>
                            ),
                        )}
                </Box>

                {totalProducts > maxVisible && (
                    <Box
                        onClick={handleNext}
                        sx={{
                            position: 'absolute',
                            right: '15px',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(82, 5, 123, 0.6)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            zIndex: 1,
                        }}
                    >
                        <ArrowForwardIosIcon
                            style={{
                                color: '#FFFFFF',
                                opacity: 1,
                            }}
                        />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default MainCarousel;
