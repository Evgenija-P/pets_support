// import { createSlice } from '@reduxjs/toolkit';
// import { fetchNews } from './operations';

// const newsInitialState = {
//   news: [],
//   isLoading: false,
//   error: null,
// };

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const newsSlice = createSlice({
//   name: 'news',
//   initialState: newsInitialState,

//   extraReducers: builder =>
//     builder
//       .addCase(fetchNews.pending, handlePending)
//       .addCase(fetchNews.rejected, handleRejected)
//       .addCase(fetchNews.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.news = action.payload;
//       }),
// });

// export const newsReducer = newsSlice.reducer;
