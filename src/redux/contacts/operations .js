import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from './contactsSlice';
// axios.defaults.baseURL = 'https://6369457128cd16bba719a127.mockapi.io/api/v1';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
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
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
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
