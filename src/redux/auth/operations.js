import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import axios from 'axios';

axios.defaults.baseURL = 'https://petly-brs3.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:3001/api';
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);

      res.data.data &&
        toast.success(
          `Congratulations! New user ${res.data.data.name} registered successfully.`
        );

      return res.data;
    } catch ({ response }) {
      console.log(response);
      const error = response.data.message;
      toast.error(error);

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signin', credentials);
      setAuthHeader(res.data.token);

      return res.data;
    } catch ({ response }) {
      // console.log(response);
      const error = response.data.message;
      toast.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch ({ response }) {
    console.log(response);
    const error = response.data.message;
    toast.error(error);

    return thunkAPI.rejectWithValue(error);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch ({ response }) {
      console.log(response);
      const error = response.data.message;
      toast.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addAvatar = createAsyncThunk(
  'auth/addAvatar',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.patch('/users/avatars', credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserInformation = createAsyncThunk(
  'auth/updateUSerInformation',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.patch('/users/current', credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
