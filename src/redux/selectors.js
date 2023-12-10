import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectContactFilter = state => state.filter.filter;

export const selectfindedContacts = createSelector(
  [selectContacts, selectContactFilter],
  (contacts, filter) => {
    console.log(filter);
    const formatedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(formatedFilter)
    );
  }
);
