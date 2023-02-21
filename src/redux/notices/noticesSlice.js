import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  addNotices,
  deleteNotices,
  getNoticesById,
  addToFavoriteNotices,
  removeFromFavoriteNotices,
  fetchFavoriteNotices,
} from './operations ';

const noticesInitialState = {
  noticesList: [],
  favoriteNoticesList: [],
  selectedNotice: null,
  page: 1,
  totalHits: 0,
  isLoadingNotices: false,
  isLoadingFavorite: false,
  isLoadingSelected: false,
  isLoadingDelete: false,
  isAdding: false,
  errorNotices: null,
  errorFavorite: null,
  errorSelected: null,
  category: '',
  search: '',
  limit: 20,
};

const handleFetchNoticesSuccses = (state, action) => {
  state.noticesList = action.payload.message;
  state.totalHits = action.payload.totalHits;
  state.page = action.payload.page;
  // state.search = action.payload.search;
  state.limit = action.payload.limit;
  state.isLoadingNotices = false;
  state.errorNotices = null;
};
const handleFetchNoticesPending = (state, action) => {
  state.isLoadingNotices = true;
};
const handleFetchNoticesReject = (state, action) => {
  state.isLoadingNotices = false;
  state.errorNotices = action.payload;
};
/////////////////////////////////////////////////////
const handleFetchFavoriteNoticesSuccses = (state, action) => {
  state.favoriteNoticesList = action.payload.favoriteList;
  state.totalHits = action.payload.totalHits;
  state.page = action.payload.page;
  // state.search = action.payload.search;
  state.limit = action.payload.limit;
  state.isLoadingFavorite = false;
  state.errorFavorite = null;
};
const handleFetchFavoriteNoticesPending = (state, action) => {
  state.isLoadingFavorite = true;
};
const handleFetchFavoriteNoticesReject = (state, action) => {
  state.isLoadingFavorite = false;
  state.errorFavorite = action.payload;
};
/////////////////////////////////////////////////////////////////////////
const handleAddNoticesSuccses = (state, { payload }) => {
  if (state.category === payload.categoryName) {
    state.noticesList.unshift(payload);
  }
  if (state.category === 'own') {
    state.noticesList.unshift(payload);
  }
  state.errorNotices = null;
  state.isAdding = false;
};

const handleAddNoticesPending = state => {
  state.isAdding = true;
};

const handleAddNoticesReject = state => {
  state.isAdding = false;
};
///////////////////////////////////////////////////////////////////////////
const handleDeleteNoticesSuccses = (state, action) => {
  const index = state.noticesList.findIndex(
    notices => notices._id === action.payload._id
  );
  state.noticesList.splice(index, 1);
  state.isLoadingDelete = false;
  state.errorNotices = null;
};
const handleDeleteNoticesPending = (state, action) => {
  state.isLoadingDelete = true;
};
const handleDeleteNoticesReject = (state, action) => {
  state.isLoadingDelete = false;
  state.errorNotices = action.payload;
};
//////////////////////////////////////////////////////////////////
const handleGetNoticesByIdSuccses = (state, action) => {
  state.selectedNotice = action.payload;
  state.isLoadingSelected = false;
  state.errorSelected = null;
};
const handleGetNoticesByIdPending = (state, action) => {
  state.isLoadingSelected = true;
};
const handleGetNoticesByIdReject = (state, action) => {
  state.isLoadingSelected = false;
  state.errorSelected = action.payload;
};
////////////////////////////////////////////////////////////////////
const handleAddToFavoriteNoticesSuccses = (state, action) => {
  if (state.category === 'favorite') {
    state.noticesList.push(action.payload);
  }

  state.favoriteNoticesList.push(action.payload);
  state.isLoadingFavorite = false;
  state.errorFavorite = null;
};
const handleAddToFavoriteNoticesPending = (state, action) => {
  state.isLoadingFavorite = true;
};
const handleAddToFavoriteNoticesReject = (state, action) => {
  state.isLoadingFavorite = false;
  state.errorFavorite = action.payload;
};
///////////////////////////////////////////////////////////////////////////////
const handleRemoveFromFavoriteNoticesSuccses = (state, action) => {
  if (state.category === 'favorite') {
    const index = state.noticesList.findIndex(
      notices => notices._id === action.payload
    );
    state.noticesList.splice(index, 1);
    // state.noticesList = action.payload.favoriteList;
  }
  const index = state.favoriteNoticesList.findIndex(
    notices => notices._id === action.payload
  );
  state.favoriteNoticesList.splice(index, 1);
  // state.favoriteNoticesList = action.payload.favoriteList;
  state.isLoadingFavorite = false;
  state.errorFavorite = null;
};
const handleRemoveFromFavoriteNoticesPending = (state, action) => {
  state.isLoadingFavorite = true;
};
const handleRemoveFromFavoriteNoticesReject = (state, action) => {
  state.isLoadingFavorite = false;
  state.errorFavorite = action.payload;
};
////////////////////////////////////////////////////////////////////////////////
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
    deleteNoticLoc(state, action) {
      const index = state.noticesList.findIndex(
        notices => notices.id === action.payload
      );

      state.noticesList.splice(index, 1);
    },

    setSelectedNotice(state, action) {
      state.selectedNotice = null;
    },
  },

  ///////////////////////////////////////////////
  extraReducers: builder => {
    builder

      .addCase(fetchNotices.pending, handleFetchNoticesPending)
      .addCase(fetchNotices.rejected, handleFetchNoticesReject)
      .addCase(fetchNotices.fulfilled, handleFetchNoticesSuccses)
      .addCase(addNotices.pending, handleAddNoticesPending)
      .addCase(addNotices.fulfilled, handleAddNoticesSuccses)
      .addCase(addNotices.rejected, handleAddNoticesReject)
      .addCase(deleteNotices.fulfilled, handleDeleteNoticesSuccses)
      .addCase(deleteNotices.pending, handleDeleteNoticesPending)
      .addCase(deleteNotices.rejected, handleDeleteNoticesReject)
      .addCase(getNoticesById.fulfilled, handleGetNoticesByIdSuccses)
      .addCase(getNoticesById.rejected, handleGetNoticesByIdReject)
      .addCase(getNoticesById.pending, handleGetNoticesByIdPending)
      .addCase(
        fetchFavoriteNotices.fulfilled,
        handleFetchFavoriteNoticesSuccses
      )
      .addCase(fetchFavoriteNotices.pending, handleFetchFavoriteNoticesPending)
      .addCase(fetchFavoriteNotices.rejected, handleFetchFavoriteNoticesReject)
      .addCase(
        removeFromFavoriteNotices.fulfilled,
        handleRemoveFromFavoriteNoticesSuccses
      )
      .addCase(
        removeFromFavoriteNotices.pending,
        handleRemoveFromFavoriteNoticesPending
      )
      .addCase(
        removeFromFavoriteNotices.rejected,
        handleRemoveFromFavoriteNoticesReject
      )
      .addCase(
        addToFavoriteNotices.fulfilled,
        handleAddToFavoriteNoticesSuccses
      )
      .addCase(addToFavoriteNotices.pending, handleAddToFavoriteNoticesPending)
      .addCase(addToFavoriteNotices.rejected, handleAddToFavoriteNoticesReject);
  },
});
export const {
  setCategory,
  setPage,
  deletefavoriteNotice,
  setSearch,
  deleteNoticLoc,
  setSelectedNotice,
} = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
