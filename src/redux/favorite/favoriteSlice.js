import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addToFavorite,
  removeFromFavorite,
  fetchFavorite,
} from './operations ';
// import { nanoid } from 'nanoid';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
const favoriteInitialState = {
  favoriteList: [],
  // page: 1,
  // totalHits: 0,
  isLoading: false,
  error: null,
  // category: '/notices',
};

const extraActions = [addToFavorite, removeFromFavorite, fetchFavorite];
const getActions = type => extraActions.map(extraAction => extraAction[type]);

const handleAddToFavoriteSuccses = (state, action) => {
  state.favoriteList = action.payload;
};

const handleRemoveFromFavoriteSuccses = (state, action) => {
  state.favoriteList = action.payload;
};

const handleFetchFavoriteSuccses = (state, action) => {
  state.favoriteList = action.payload;
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: favoriteInitialState,
  // reducers: {
  //   setCategory(state, action) {
  //     state.category = action.payload;
  //   },
  //   setPage(state, action) {
  //     state.page = action.payload;
  //   },
  // },

  ///////////////////////////////////////////////
  extraReducers: builder => {
    builder
      .addCase(addToFavorite.fulfilled, handleAddToFavoriteSuccses)
      .addCase(removeFromFavorite.fulfilled, handleRemoveFromFavoriteSuccses)
      .addCase(fetchFavorite.fulfilled, handleFetchFavoriteSuccses)
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
// export const { setCategory, setPage } = noticesSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
