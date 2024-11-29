import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { CircularProgress, Container, CssBaseline } from '@mui/material';
import MainPage from './features/pages/mainPage/MainPage.tsx';
import Header from './features/header/Header.tsx';
import ProductsPage from './features/pages/productsPage/ProductsPage.tsx';
import SingleProduct from './features/pages/singleProduct/SingleProduct.tsx';
import PaymentForm from './features/paymentForm/PaymentForm.tsx';

function App() {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Suspense fallback={<CircularProgress />}>
                <Container
                    sx={{
                        minHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                    disableGutters
                >
                    <Header />
                    <Routes>
                        <Route path={'/'} element={<MainPage />} />
                        <Route path={'/products'} element={<ProductsPage />} />
                        <Route
                            path={'/products/:id'}
                            element={<SingleProduct />}
                        />
                        <Route path={'/payment'} element={<PaymentForm />} />
                    </Routes>
                    {/*<Footer/>*/}
                </Container>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
