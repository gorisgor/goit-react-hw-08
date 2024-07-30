import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '../redux/filters/slice';
import contactsReducer from './contacts/slice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersSlice,
    },
});
