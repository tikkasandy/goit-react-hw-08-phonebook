import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getLoading = state => state.contacts.isLoading;

export const getVisibleContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();

        return sortContacts(
            contacts.filter(contact =>
                contact.name.toLowerCase().includes(normalizedFilter),
            ),
        );
    });

const sortContacts = data => {
    return [...data].sort((a, b) => a.name.localeCompare(b.name));
};
