import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
    },
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
    },
    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload.id);
    },
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
  },
});

// export default contactsSlice.reducer;

export const contactsReducer = contactsSlice.reducer;
