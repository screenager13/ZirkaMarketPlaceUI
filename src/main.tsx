import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './store';
import { StyledEngineProvider } from '@mui/material';
import './style/style.scss';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <StyledEngineProvider injectFirst>
            <App />
        </StyledEngineProvider>
    </Provider>,
);
