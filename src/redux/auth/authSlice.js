import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./authOperations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshUser: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.logOut.fulfilled](state) {
            console.log(state);
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [authOperations.refreshUser.pending](state) {
            state.isRefreshUser = true;
        },
        [authOperations.refreshUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshUser = false;
        },
        [authOperations.refreshUser.rejected](state) {
            state.isRefreshUser = false;
        },
    }
});

export default authSlice.reducer;