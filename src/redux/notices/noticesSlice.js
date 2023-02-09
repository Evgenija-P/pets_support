import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchNotices,
  addNotices,
  deleteNotices,
  // addToFavoriteNotices,
  // removeFromFavoriteNotices,
  // fetchFavoriteNotices,
} from './operations ';
// import { nanoid } from 'nanoid';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
const noticesInitialState = {
  noticesList: [],
  // favoriteNoticesList: [],
  page: 1,
  totalHits: 0,
  isLoading: false,
  error: null,
  category: '/notices',
  search: '',
};

const extraActions = [
  fetchNotices,
  addNotices,
  deleteNotices,
  // addToFavoriteNotices,
  // removeFromFavoriteNotices,
  // fetchFavoriteNotices,
];
const getActions = type => extraActions.map(extraAction => extraAction[type]);
const handleFetchNoticesSuccses = (state, action) => {
  state.noticesList = action.payload.message;
  state.totalHits = action.payload.totalHits;
  state.page = action.payload.page;
};
const handleAddNoticesSuccses = (state, action) => {
  state.noticesList.push(action.payload);
};
const handleDeleteNoticesSuccses = (state, action) => {
  const index = state.noticesList.findIndex(
    notices => notices._id === action.payload._id
  );
  state.noticesList.splice(index, 1);
};
// const handleAddToFavoriteNoticesSuccses = (state, action) => {
//   state.favoriteNoticesList = action.payload;
// };

// const handleRemoveFromFavoriteNoticesSuccses = (state, action) => {
//   state.favoriteNoticesList = action.payload;
// };

// const handleFetchFavoriteNoticesSuccses = (state, action) => {
//   state.favoriteNoticesList = action.payload;
// };

export const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    deletefavoriteNotice(state, action) {
      const index = state.noticesList.findIndex(
        notices => notices.id === action.payload
      );
      state.noticesList.splice(index, 1);
    },
  },

  ///////////////////////////////////////////////
  extraReducers: builder => {
    builder
      .addCase(fetchNotices.fulfilled, handleFetchNoticesSuccses)
      .addCase(addNotices.fulfilled, handleAddNoticesSuccses)
      .addCase(deleteNotices.fulfilled, handleDeleteNoticesSuccses)
      // .addCase(
      //   addToFavoriteNotices.fulfilled,
      //   handleAddToFavoriteNoticesSuccses
      // )
      // .addCase(
      //   removeFromFavoriteNotices.fulfilled,
      //   handleRemoveFromFavoriteNoticesSuccses
      // )
      // .addCase(
      //   fetchFavoriteNotices.fulfilled,
      //   handleFetchFavoriteNoticesSuccses
      // )
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), (state, action) => {
        state.isLoading = false;
        state.error = null;
      });
  },
});
export const { setCategory, setPage, deletefavoriteNotice } =
  noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
