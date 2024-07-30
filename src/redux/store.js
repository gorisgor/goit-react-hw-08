import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/auth/slice';
import contactsReducer from './contacts/slice';
import filtersReducer from '../redux/filters/slice'
export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
        auth: authReducer,
    },
});
