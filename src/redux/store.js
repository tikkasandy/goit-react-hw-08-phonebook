import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { contactsReducer } from './contacts';
import { authReducer } from './auth';

const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsReducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        logger],
    devTools: process.env.NODE_ENV === 'development',
})

export default store;
