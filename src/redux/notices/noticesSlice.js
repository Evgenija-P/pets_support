import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchNotices, addNotices, deleteNotices } from './operations ';
// import { nanoid } from 'nanoid';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
const noticesInitialState = {
  noticesList: [],
  isLoading: false,
  error: null,
  category: '/notices',
};

const extraActions = [fetchNotices, addNotices, deleteNotices];
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
// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };
export const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  reducers: {
    //   // fetchingInProgress(state) {
    //   //   state.isLoading = true;
    //   // },
    //   // fetchingSuccess(state, action) {
    //   //   state.isLoading = false;
    //   //   state.error = null;
    //   //   state.noticesList = action.payload;
    //   // },
    //   // fetchingError(state, action) {
    //   //   state.isLoading = false;
    //   //   state.error = action.payload;
    //   // },
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
  // extraReducers: {
  //   [fetchnoticess.pending]: handlePending,
  //   [fetchnoticess.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.noticesList = action.payload;
  //   },
  //   [fetchnoticess.rejected]: handleRejected,
  //   [addnotices.pending]: handlePending,
  //   [addnotices.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.noticesList.push(action.payload);
  //   },
  //   [addnotices.rejected]: handleRejected,
  //   [deletenotices.pending]: handlePending,
  //   [deletenotices.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.noticesList.findIndex(
  //       notices => notices.id === action.payload.id
  //     );
  //     state.noticesList.splice(index, 1);
  //   },
  //   [deletenotices.rejected]: handleRejected,
  // },
  ///////////////////////////////////////////////
  extraReducers: builder => {
    builder
      .addCase(fetchNotices.fulfilled, handleFetchNoticesSuccses)
      .addCase(addNotices.fulfilled, handleAddNoticesSuccses)
      .addCase(deleteNotices.fulfilled, handleDeleteNoticesSuccses)
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
