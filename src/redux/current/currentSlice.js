import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getNoticesById } from './operations ';

const currentInitialState = {
  currentNotices: null,
  isLoading: false,
  error: null,
};

const extraActions = [getNoticesById];
const getActions = type => extraActions.map(extraAction => extraAction[type]);

const handleGetNoticesByIdSuccses = (state, action) => {
  state.currentNotices = action.payload;
};

export const currentSlice = createSlice({
  name: 'current',
  initialState: currentInitialState,
  // reducers: {
  //   setCategory(state, action) {
  //     state.category = action.payload;
  //   },
  //   setPage(state, action) {
  //     state.page = action.payload;
  //   },
  //   deletefavoriteNotice(state, action) {
  //     const index = state.noticesList.findIndex(
  //       notices => notices.id === action.payload
  //     );
  //     state.noticesList.splice(index, 1);
  //   },
  //   setSearch(state, action) {
  //     state.search = action.payload;
  //   },
  // },

  extraReducers: builder => {
    builder
      .addCase(getNoticesById.fulfilled, handleGetNoticesByIdSuccses)

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
// export const { setCategory, setPage, deletefavoriteNotice, setSearch } =
//   noticesSlice.actions;
export const currentReducer = currentSlice.reducer;
