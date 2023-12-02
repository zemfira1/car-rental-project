import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://64f134190e1e60602d23a37d.mockapi.io/data';

export const fetchCarsList = createAsyncThunk(
  'cars/fetchAllCars',
  async (params, thunkApi) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/adverts`, { params });

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
