import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const PER_PAGE = 20;

export const fetchNotices = createAsyncThunk(
  'notices/fetchAll',
  async ({ category = '/notices', page = 1 }, thunkAPI) => {
    const params = {
      per_page: PER_PAGE,
      page,
    };
    try {
      // console.log('categoryaaa', category);
      const response = await axios.get(category, { params });
      return response.data;
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

      return response.data.message;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
///////////////////////////////////////////////////////////////////////////////////////////////////////
// export const fetchFavoriteNotices = createAsyncThunk(
//   'notices/fetchFavoriteNotices',
//   async ({ category }, thunkAPI) => {
//     try {
//       const response = await axios.get(category);
//       // console.log('reresponse.data.messagesponse ', response.data.message);
//       return response.data.message.favoriteList;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const addToFavoriteNotices = createAsyncThunk(
//   'notices/addToFavoriteNotices',
//   async (noticeId, thunkAPI) => {
//     try {
//       const response = await axios.post(`/notices/${noticeId}/favorite`);
//       console.log('addToFavoriteNotices', response.data.message.favoriteList);
//       return response.data.message.favoriteList;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const removeFromFavoriteNotices = createAsyncThunk(
//   'notices/removeFromFavoriteNotices',
//   async (noticeId, thunkAPI) => {
//     try {
//       const response = await axios.patch(`/notices/${noticeId}/favorite`);
//       return response.data.message.favoriteList;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
