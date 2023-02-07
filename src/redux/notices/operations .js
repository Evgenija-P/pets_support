import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';
// import { selectCategory } from './selectors';
// import { toast } from 'react-toastify';
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from './contactsSlice';
// axios.defaults.baseURL = 'https://6369457128cd16bba719a127.mockapi.io/api/v1';

export const fetchNotices = createAsyncThunk(
  'notices/fetchAll',
  async ({ category = '/notices' }, thunkAPI) => {
    try {
      console.log('category', category);
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
      // toast.success(
      //   `🦄 Contact ${response.data.name} succesfuly addet to phonebook .`,
      //   {
      //     position: 'top-right',
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //   }
      //);
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
      // toast.error(
      //   ` Contact ${response.data.name} succesfuly deleted from  phonebook .`,
      //   {
      //     position: 'top-right',
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //   }
      // );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
///////////////////////////////////////////////////////////////////////////////////////////////////////

export const addToFavoriteNotices = createAsyncThunk(
  'notices/addToFavoriteNotices',
  async (noticeId, thunkAPI) => {
    try {
      const response = await axios.post(`/notices/${noticeId}/favorite`);
      return response.data;
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
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// export const removeFromFavoriteNotices = createAsyncThunk(
//   'notices/removeFromFavoriteNotices',
//   async (noticeId, thunkAPI) => {
//     try {
//       const response = await axios.patch(`/notices/${noticeId}/favorite`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
