import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { CircularProgress, Container, CssBaseline } from '@mui/material';
import MainPage from './features/pages/mainPage/MainPage.tsx';
import Header from './features/header/Header.tsx';
import ProductsPage from './features/pages/productsPage/ProductsPage.tsx';

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
                    </Routes>
                    {/*<Footer/>*/}
                </Container>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
