import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
///////////////////////////////////////////////////////////////////////////////////////////////////////
export const fetchFavorite = createAsyncThunk(
  'favorite/fetchFavorite',
  async (
    { category = '/notices/favorite', search = '', page = 1, per_page = 20 },
    thunkAPI
  ) => {
    const params = {
      per_page,
      page,
      search,
    };
    try {
      const response = await axios.get(category, { params });
      // console.log('fetchFavorite ', response.data.favoriteList);
      return response.data.favoriteList;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  'favorite/addToFavorite',
  async (noticeId, thunkAPI) => {
    try {
      const response = await axios.post(`/notices/${noticeId}/favorite`);
      // console.log('addToFavorite', response.data.message.favoriteList);
      return response.data.message.favoriteList;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const removeFromFavorite = createAsyncThunk(
  'favorite/removeFromFavorite',
  async (noticeId, thunkAPI) => {
    try {
      const response = await axios.patch(`/notices/${noticeId}/favorite`);
      return response.data.message.favoriteList;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
