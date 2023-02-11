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
  reducers: {
    setCurrentNotices(state, action) {
      state.currentNotices = null;
    },
  },

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
export const { setCurrentNotices } = currentSlice.actions;
export const currentReducer = currentSlice.reducer;
