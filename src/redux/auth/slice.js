import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, addAvatar, updateUserInformation } from './operations';

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder

      // REGISTER
      .addCase(register.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // LOGIN
      .addCase(logIn.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // LOGOUT
      .addCase(logOut.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {};
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      })

      // REFRESH
      .addCase(refreshUser.pending, (state, _) => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = action.payload;
      })
      
      //addAvatar
      .addCase(addAvatar.fulfilled, ({ user, isLoggedIn }, { payload }) => {
        user.avatarURL = payload.data.avatarURL;
        isLoggedIn = true;
      })
      .addCase(addAvatar.rejected, (state, action) => {
        state.error = action.payload
      })
  
      //changeUserInformation
      .addCase(updateUserInformation.fulfilled, ({ user, isLoggedIn }, { payload }) => {
        user.name = payload.data.name;
        user.email = payload.data.email;
        user.birthday = payload.data.birthday;
        user.phone = payload.data.phone;
        user.city = payload.data.city;
        isLoggedIn = true;
      })
      .addCase(updateUserInformation.rejected, (state, action) => {
        state.error = action.payload
      })
});
export const authReducer = authSlice.reducer;
