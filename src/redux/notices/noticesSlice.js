import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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
  isLoading: false,
  isAdding: false,
  error: null,
  category: '',
  search: '',
  limit: 20,
};

const extraActions = [
  fetchNotices,
  deleteNotices,
  getNoticesById,

  addToFavoriteNotices,
  removeFromFavoriteNotices,
  fetchFavoriteNotices,
];
const getActions = type => extraActions.map(extraAction => extraAction[type]);

const handleFetchNoticesSuccses = (state, action) => {
  state.noticesList = action.payload.message;
  state.totalHits = action.payload.totalHits;
  state.page = action.payload.page;
  // state.search = action.payload.search;
  state.limit = action.payload.limit;
};
const handleFetchFavoriteNoticesSuccses = (state, action) => {
  state.favoriteNoticesList = action.payload.message;
  state.totalHits = action.payload.totalHits;
  state.page = action.payload.page;
  // state.search = action.payload.search;
  state.limit = action.payload.limit;
};
const handleAddNoticesSuccses = (state, { payload }) => {
  if (state.category === payload.categoryName) {
    state.noticesList.unshift(payload);
  }

  state.error = null;
  state.isAdding = false;
};

const handleAddNoticesPending = state => {
  state.isAdding = true;
};

const handleAddNoticesReject = state => {
  state.isAdding = false;
};

const handleDeleteNoticesSuccses = (state, action) => {
  const index = state.noticesList.findIndex(
    notices => notices._id === action.payload._id
  );
  state.noticesList.splice(index, 1);
};

const handleGetNoticesByIdSuccses = (state, action) => {
  state.selectedNotice = action.payload;
};

const handleAddToFavoriteNoticesSuccses = (state, action) => {
  if (state.category === 'favorite') {
    state.noticesList.push(action.payload);
  }

  state.favoriteNoticesList.push(action.payload);
};
const handleRemoveFromFavoriteNoticesSuccses = (state, action) => {
  if (state.category === 'favorite') {
    const index = state.noticesList.findIndex(
      notices => notices._id === action.payload
    );
    state.noticesList.splice(index, 1);
  }
  const index = state.favoriteNoticesList.findIndex(
    notices => notices._id === action.payload
  );
  state.favoriteNoticesList.splice(index, 1);
};

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
      .addCase(fetchNotices.fulfilled, handleFetchNoticesSuccses)
      .addCase(addNotices.pending, handleAddNoticesPending)
      .addCase(addNotices.fulfilled, handleAddNoticesSuccses)
      .addCase(addNotices.rejected, handleAddNoticesReject)

      .addCase(deleteNotices.fulfilled, handleDeleteNoticesSuccses)

      .addCase(getNoticesById.fulfilled, handleGetNoticesByIdSuccses)
      .addCase(
        fetchFavoriteNotices.fulfilled,
        handleFetchFavoriteNoticesSuccses
      )
      .addCase(
        removeFromFavoriteNotices.fulfilled,
        handleRemoveFromFavoriteNoticesSuccses
      )
      .addCase(
        addToFavoriteNotices.fulfilled,
        handleAddToFavoriteNoticesSuccses
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
export const {
  setCategory,
  setPage,
  deletefavoriteNotice,
  setSearch,
  deleteNoticLoc,
  setSelectedNotice,
} = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
