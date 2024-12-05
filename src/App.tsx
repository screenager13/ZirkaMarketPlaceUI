import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, useMemo } from 'react';
import {
    CircularProgress,
    Container,
    CssBaseline,
    ThemeProvider,
} from '@mui/material';
import MainPage from './features/pages/mainPage/MainPage.tsx';
import Header from './features/header/Header.tsx';
import ProductsPage from './features/pages/productsPage/ProductsPage.tsx';
import SingleProduct from './features/pages/singleProduct/SingleProduct.tsx';
import PaymentForm from './features/paymentForm/PaymentForm.tsx';
import SignIn from './features/pages/singIn/SingIn.tsx';
import SingUp from './features/pages/singUp/SingUp.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, toggleTheme } from './api/theme/themeSlice.ts';
import { createCustomTheme } from './style/ColorTheme.ts';

function App() {
    const dispatch = useDispatch();
    const currentThemeMode = useSelector(selectTheme); // Get the current theme mode from Redux store

    const theme = useMemo(
        () => createCustomTheme(currentThemeMode),
        [currentThemeMode],
    );
    console.log(currentThemeMode);
    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <CssBaseline />
                <Suspense fallback={<CircularProgress />}>
                    <Container
                        maxWidth="xl"
                        sx={{
                            minHeight: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                        }}
                        disableGutters
                    >
                        <Header
                            onThemeToggle={handleThemeToggle}
                            isDarkMode={currentThemeMode === 'dark'}
                        />
                        <Routes>
                            <Route path={'/'} element={<MainPage />} />
                            <Route
                                path={'/products'}
                                element={<ProductsPage />}
                            />
                            <Route
                                path={'/products/:id'}
                                element={<SingleProduct />}
                            />
                            <Route
                                path={'/payment'}
                                element={<PaymentForm />}
                            />
                            <Route
                                path={'/login'}
                                element={<SignIn />}
                            />
                            <Route
                                path={'/register'}
                                element={<SingUp />}
                            />
                        </Routes>
                        {/*<Footer/>*/}
                    </Container>
                </Suspense>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
