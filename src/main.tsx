// import dotenv from 'dotenv';
// dotenv.config();

import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './store';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import './style/style.scss';
import { theme } from './style/ColorTheme.ts';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </StyledEngineProvider>
    </Provider>,
);
