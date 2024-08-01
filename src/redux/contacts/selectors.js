import { selectFilter } from '../filters/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = (state) => state.contacts.items
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const lowercasedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowercasedFilter) ||
      contact.number.toString().includes(lowercasedFilter)
    );
  }
);