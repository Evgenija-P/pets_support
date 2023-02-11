import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getNoticesById = createAsyncThunk(
  'current/getNoticesById',
  async (noticeId, thunkAPI) => {
    // console.log('getNoticesById  ', noticeId);
    try {
      const response = await axios.get(`/notices/${noticeId}`);
      // console.log('getNoticesById response ', response.data.message);
      return response.data.message;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
