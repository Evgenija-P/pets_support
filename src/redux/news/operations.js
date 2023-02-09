// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://petly-brs3.onrender.com/api';

// export const fetchNews = createAsyncThunk(
//   'news/fetchAll',

//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/news');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
