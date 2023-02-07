import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { register, logIn, logOut, refreshUser } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => state)

      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        toast.error('Invalid email or password :(');
      })

      .addCase(logOut.fulfilled, state => {
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.isLoggedIn = true;
      }),
});

export const authReducer = authSlice.reducer;
