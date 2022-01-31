import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://61ed829c634f2f00170cec38.mockapi.io/';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await axios.get('/contacts');
            return contacts.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, { rejectWithValue }) => {
        try {
            const name = await axios.post(`/contacts`, contact);
            return name.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
        try {
            await axios.delete(`/contacts/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);