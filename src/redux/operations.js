import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://64f134190e1e60602d23a37d.mockapi.io/data';

export const fetchCarsList = createAsyncThunk(
  'cars/fetchAllCars',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/adverts`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
