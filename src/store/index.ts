import { configureStore } from '@reduxjs/toolkit';
import { productApiSlice } from '../api/product/productApiSlice.ts';
const index = configureStore({
    reducer: {
        [productApiSlice.reducerPath]: productApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApiSlice.middleware),
});

export default index;

export type RootState = ReturnType<typeof index.getState>;
export type AppDispatch = typeof index.dispatch;
