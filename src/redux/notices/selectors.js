// import { createSelector } from '@reduxjs/toolkit';
// import { selectFilter } from '../filters/selectors';
export const selectNoticesObj = state => state.notices;
export const selectNotices = state => state.notices.noticesList;
// export const selectFavoriteNotices = state => state.notices.favoriteNoticesList;

export const selectIsLoading = state => state.notices.isLoading;
export const selectError = state => state.notices.error;
export const selectCategory = state => state.notices.category;
// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contactList, filterContact) => {
//     // console.log('Calculating task count. Now memoized!');
//     // console.log('contactList from selectors', contactList);
//     // console.log('filter', filterContact);
//     const normalizedFilter = filterContact.toLowerCase();

//     const visibleContacts = contactList.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//     return visibleContacts ? visibleContacts : [];
//   }
// );
