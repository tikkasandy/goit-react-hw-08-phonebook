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
            console.log(credentials);
            const { data } = await axios.post('/users/signup', credentials);
            toast.success('You have successfully registered and logged in');
            console.log(data);
            token.set(data.token);
            return data;
        } catch (error) {
            console.dir(error);
            toast.error('Sorry, we can not register this user')
        }
    });

const logIn = createAsyncThunk(
    'auth/logIn',
    async credentials => {
        try {
            console.log(credentials);
            const { data } = await axios.post('/users/login', credentials);
            token.set(data.token);
            toast.success('You have successfully logged in');

            console.log(data);
            return data;
        } catch (error) {
            console.dir(error);
            toast.error('Sorry, email or password is incorrect')
        }
    });

const logOut = createAsyncThunk(
    'auth/logOut',
    async () => {
        try {

            await axios.post('/users/logout ');
            token.unset();
            toast.success('You have successfully logged out');
            // console.log(data);
            // return data;
        } catch (error) {
            console.dir(error);
            toast.error('Please authenticate')
        }
    });

const authOperations = {
    register,
    logIn,
    logOut
};

export default authOperations;