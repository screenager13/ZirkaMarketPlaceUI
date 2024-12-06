import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export type ThemeMode = 'light' | 'dark';
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
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.mode;

export default themeSlice.reducer;
