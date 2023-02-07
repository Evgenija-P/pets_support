import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNotices = createAsyncThunk(
  'notices/fetchAll',
  async ({ category = '/notices' }, thunkAPI) => {
    try {
      console.log('categoryaaa', category);
      const response = await axios.get(category);
      return response.data.message;
    } catch (e) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addNotices = createAsyncThunk(
  'notices/addNotices',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/notices', { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteNotices = createAsyncThunk(
  'notices/deleteNotices',
  async (noticeId, thunkAPI) => {
    try {
      const response = await axios.delete(`/notices/${noticeId}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
///////////////////////////////////////////////////////////////////////////////////////////////////////
export const fetchFavoriteNotices = createAsyncThunk(
  'notices/fetchFavoriteNotices',
  async ({ category }, thunkAPI) => {
    try {
      console.log('category', category);
      const response = await axios.get(category);
      console.log('response ', response);
      return response.data.message;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addToFavoriteNotices = createAsyncThunk(
  'notices/addToFavoriteNotices',
  async (noticeId, thunkAPI) => {
    try {
      const response = await axios.post(`/notices/${noticeId}/favorite`);
      return response.data.message[0];
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const removeFromFavoriteNotices = createAsyncThunk(
  'notices/removeFromFavoriteNotices',
  async (noticeId, thunkAPI) => {
    try {
      const response = await axios.patch(`/notices/${noticeId}/favorite`);
      return response.data.message[0];
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
