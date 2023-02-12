import { createSlice } from '@reduxjs/toolkit';
import { fetchPets, deletePet } from './operations';

const petsInitialState = {
  pets: [],
  isLoading: false,
  isDeleting: false,
  idAdding: false,
  petToDeleteId: null,
  error: null,
};

const handleDeletePetPending = (state, { meta }) => {
  state.isDeleting = true;
  state.petToDeleteId = meta.arg;
};

const handleDeletePetSuccess = (state, { payload }) => {
  state.petToDeleteId = null;
  state.isDeleting = false;
  state.error = null;
  state.pets = [...state.pets].filter(pet => pet._id !== payload);
};

const handleDeletePetRejected = (state, { payload }) => {
  state.error = payload;
  state.petToDeleteId = null;
  state.isDeleting = false;
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: petsInitialState,

  extraReducers: builder =>
    builder
      .addCase(fetchPets.pending, handlePending)
      .addCase(fetchPets.rejected, handleRejected)
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.pets = action.payload.data.pets;
      })

      .addCase(deletePet.pending, handleDeletePetPending)
      .addCase(deletePet.fulfilled, handleDeletePetSuccess)
      .addCase(deletePet.rejected, handleDeletePetRejected),
});

export const petsReducer = petsSlice.reducer;
