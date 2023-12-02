import { createSlice } from '@reduxjs/toolkit';
import { initialCarsState } from './initialState';
import { fetchCarsList } from './operations';

const carsListSlice = createSlice({
  name: 'carsList',
  initialState: initialCarsState,
  extraReducers: builder =>
    builder
      .addCase(fetchCarsList.pending, state => {
        state.cars.isLoading = true;
        state.cars.error = null;
      })
      .addCase(fetchCarsList.fulfilled, (state, action) => {
        state.cars.isLoading = false;
        state.cars.items = state.cars.items.concat(action.payload);
      })
      .addCase(fetchCarsList.rejected, (state, action) => {
        state.cars.isLoading = false;
        state.cars.error = action.payload;
      }),
});

export const carsListReducer = carsListSlice.reducer;
