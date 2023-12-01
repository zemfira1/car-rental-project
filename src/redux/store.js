import { configureStore } from '@reduxjs/toolkit';
import { carsListReducer } from './carsSlice';

export const store = configureStore({
  reducer: {
    carsList: carsListReducer,
  },
});
