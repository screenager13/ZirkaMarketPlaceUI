import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApiSlice';
import { RootState } from '../../store';
import { User } from '../../types/User.ts';
interface InitialState {
    user: User | null;
    isAuth: boolean | null;
}
const initialState: InitialState = {
    user: null,
    isAuth: null,
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(
                authApi.endpoints.login.matchFulfilled,
                (state, action) => {
                    state.user = action.payload.user;
                    state.isAuth = true;
                    localStorage.setItem('token', action.payload.accessToken);
                },
            )
            .addMatcher(
                authApi.endpoints.registration.matchFulfilled,
                (state, action) => {
                    state.user = action.payload.user;
                    localStorage.setItem('token', action.payload.accessToken);
                },
            )
            .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
                state.user = null;
                localStorage.removeItem('token');
            })
            .addMatcher(
                authApi.endpoints.refresh.matchFulfilled,
                (state, action) => {
                    state.user = action.payload.user;
                    localStorage.setItem('token', action.payload.accessToken);
                },
            );
    },
});
export const selectNickname = (state: RootState) => state.user.user?.userName;
export const selectRole = (state: RootState) => state.user.user?.role;
export default userSlice.reducer;
