import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import {
//   fetchingError,
//   fetchingInProgress,
//   fetchingSuccess,
// } from './contactSlice';

axios.defaults.baseURL =
  'https://64412077fadc69b8e07bbbdd.mockapi.io/contacts/';

// export const fetchContacts = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.get('/contacts');
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});
