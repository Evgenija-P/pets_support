import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchNotices,
  addNotices,
  deleteNotices,
  addToFavoriteNotices,
  removeFromFavoriteNotices,
} from './operations ';
// import { nanoid } from 'nanoid';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
const noticesInitialState = {
  noticesList: [],
  isLoading: false,
  error: null,
  category: '/notices',
};

const extraActions = [
  fetchNotices,
  addNotices,
  deleteNotices,
  addToFavoriteNotices,
  removeFromFavoriteNotices,
];
const getActions = type => extraActions.map(extraAction => extraAction[type]);
const handleFetchNoticesSuccses = (state, action) => {
  state.noticesList = action.payload;
};
const handleAddNoticesSuccses = (state, action) => {
  state.noticesList.push(action.payload);
};
const handleDeleteNoticesSuccses = (state, action) => {
  const index = state.noticesList.findIndex(
    notices => notices.id === action.payload.id
  );
  state.noticesList.splice(index, 1);
};
const handleAddToFavoriteNoticesSuccses = (state, action) => {};

const handleRemoveFromFavoriteNoticesSuccses = (state, action) => {};

export const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
  },

  ///////////////////////////////////////////////
  extraReducers: builder => {
    builder
      .addCase(fetchNotices.fulfilled, handleFetchNoticesSuccses)
      .addCase(addNotices.fulfilled, handleAddNoticesSuccses)
      .addCase(deleteNotices.fulfilled, handleDeleteNoticesSuccses)
      .addCase(
        addToFavoriteNotices.fulfilled,
        handleAddToFavoriteNoticesSuccses
      )
      .addCase(
        removeFromFavoriteNotices.fulfilled,
        handleRemoveFromFavoriteNoticesSuccses
      )
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
export const { setCategory } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
