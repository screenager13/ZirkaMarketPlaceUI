import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Card, Typography, TextField, Button } from '@mui/material';
import { ProductForm } from '../../types/product.ts';
import { usePostProductMutation } from '../../api/product/productApiSlice.ts';

const AddProductForm = () => {
    const { handleSubmit, control, reset } = useForm<ProductForm>({
        defaultValues: {
            name: '',
            description: '',
            price: 0,
            img: '',
            availableAmount: 0,
        },
    });

    const [postProduct] = usePostProductMutation();

    const onSubmit = async (data: ProductForm) => {
        try {
            await postProduct(data).unwrap();
            console.log('Product added successfully');
            reset();
        } catch (err) {
            console.error('Failed to add product:', err);
        }
    };

    return (
        <Card
            sx={{
                width: 300,
                height: 600,
                backgroundColor: 'primary.light',
                p: 3,
                borderRadius: 3,
                gap: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography variant="h5" color="textSecondary">
                Dodaj nowy towar
            </Typography>
            <Box
                component="form"
                sx={{ mt: 2, width: '100%' }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: 'Nazwa jest wymagana' }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            label="Nazwa"
                            fullWidth
                            margin="normal"
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                        />
                    )}
                />
                <Controller
                    name="description"
                    control={control}
                    rules={{ required: 'Opis jest wymagany' }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            label="Opis"
                            multiline
                            maxRows={4}
                            fullWidth
                            margin="normal"
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                        />
                    )}
                />
                <Controller
                    name="price"
                    control={control}
                    rules={{
                        required: 'Cena jest wymagana',
                        min: {
                            value: 0.01,
                            message: 'Cena musi być większa niż 0',
                        },
                    }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            label="Cena w PLN"
                            type="number"
                            fullWidth
                            margin="normal"
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                        />
                    )}
                />
                <Controller
                    name="img"
                    control={control}
                    rules={{ required: 'URL zdjęcia jest wymagany' }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            label="URL Zdjęcia"
                            fullWidth
                            margin="normal"
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                        />
                    )}
                />
                <Controller
                    name="availableAmount"
                    control={control}
                    rules={{
                        required: 'Ilość jest wymagana',
                        min: {
                            value: 1,
                            message: 'Ilość musi być większa niż 0',
                        },
                    }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            label="Ilość"
                            type="number"
                            fullWidth
                            margin="normal"
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                        />
                    )}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, borderRadius: 3 }}
                    fullWidth
                >
                    Dodaj Produkt
                </Button>
            </Box>
        </Card>
    );
};

export default AddProductForm;
