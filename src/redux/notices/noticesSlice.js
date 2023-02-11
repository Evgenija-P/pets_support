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
  page: 1,
  totalHits: 0,
  isLoading: false,
  isAdding: false,
  error: null,
  category: '/notices/',
  search: '',
  limit: 20,
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
  state.search = action.payload.search;
  state.limit = action.payload.limit;
};
const handleAddNoticesSuccses = (state, { payload }) => {
  state.noticesList.push(payload);
  state.error = null;
  state.isAdding = false;
};

const handleAddNoticesPending = state => {
  state.isAdding = true;
};

const handleAddNoticesReject = (state, { payload }) => {
  state.error = payload;
  state.isAdding = false;
};

const handleDeleteNoticesSuccses = (state, action) => {
  const index = state.noticesList.findIndex(
    notices => notices._id === action.payload._id
  );
  state.noticesList.splice(index, 1);
};

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
    setSearch(state, action) {
      state.search = action.payload;
    },
  },

  ///////////////////////////////////////////////
  extraReducers: builder => {
    builder
      .addCase(fetchNotices.fulfilled, handleFetchNoticesSuccses)
      .addCase(addNotices.pending, handleAddNoticesPending)
      .addCase(addNotices.fulfilled, handleAddNoticesSuccses)
      .addCase(addNotices.rejected, handleAddNoticesReject)

      .addCase(deleteNotices.fulfilled, handleDeleteNoticesSuccses)

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
export const { setCategory, setPage, deletefavoriteNotice, setSearch } =
  noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
