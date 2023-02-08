import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder

      // REGISTER
      .addCase(register.pending, (state, _) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(
        register.rejected,
        (state, action) => (state.error = action.payload)
      )

      // LOGIN
      .addCase(logIn.pending, (state, _) => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(
        logIn.rejected,
        (state, action) => (state.error = action.payload)
      )

      // LOGOUT
      .addCase(logOut.pending, (state, _) => state)
      .addCase(logOut.fulfilled, state => {
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(
        logOut.rejected,
        (state, action) => (state.error = action.payload)
      )

      // REFRESH
      // .addCase(refreshUser.pending, (state, _) => (state.isRefreshing = true))
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      }),
});
export const authReducer = authSlice.reducer;
