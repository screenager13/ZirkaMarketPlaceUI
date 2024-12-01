import { createSlice } from '@reduxjs/toolkit';

export type ThemeMode = 'light' | 'dark';
interface AppState {
    theme: InitialState;
}
interface InitialState {
    mode: ThemeMode;
}
const initialState: InitialState = {
    mode: 'dark',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'; // Toggle between light and dark mode
        },
        setTheme: (state, action) => {
            state.mode = action.payload;
        },
    },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export const selectTheme = (state: AppState) => state.theme.mode;

export default themeSlice.reducer;
