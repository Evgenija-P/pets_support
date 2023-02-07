import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';
export const selectContactsObj = state => state.contacts;
export const selectContacts = state => state.contacts.contactList;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contactList, filterContact) => {
    // console.log('Calculating task count. Now memoized!');
    // console.log('contactList from selectors', contactList);
    // console.log('filter', filterContact);
    const normalizedFilter = filterContact.toLowerCase();

    const visibleContacts = contactList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts ? visibleContacts : [];
  }
);
