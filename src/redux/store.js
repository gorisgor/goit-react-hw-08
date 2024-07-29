import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './filtersSlice';
import contactsReducer from './contactsSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersSlice,
    },
});
