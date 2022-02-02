import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = createAsyncThunk(
    'auth/register',
    async credentials => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            toast.error('Sorry, we can not register this user')
        }
    }
);

const logIn = createAsyncThunk(
    'auth/logIn',
    async credentials => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            toast.error('Sorry, email or password is incorrect')
        }
    }
);

const logOut = createAsyncThunk(
    'auth/logOut',
    async () => {
        try {
            await axios.post('/users/logout ');
            token.unset();
        } catch (error) {
            toast.error('Please authenticate')
        }
    }
);

const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }

        token.set(persistedToken)
        try {
            const { data } = await axios.get('/users/current');
            return data;

        } catch (error) {
            toast.error('Please authenticate')
        }
    }
);

const authOperations = {
    register,
    logIn,
    logOut,
    refreshUser
};

export default authOperations;