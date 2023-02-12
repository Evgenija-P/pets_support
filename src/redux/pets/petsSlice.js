import { createSlice } from '@reduxjs/toolkit';
import { fetchPets, deletePet, addNewPet } from './operations';

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

const handleAddNewPetSuccess = (state, { payload }) => {
  state.error = payload;
  state.petToDeleteId = null;
  state.isDeleting = false;

  state.pets.push(payload);
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
      .addCase(deletePet.rejected, handleDeletePetRejected)

      //addNewPet
      .addCase(addNewPet.pending, handlePending)
      .addCase(addNewPet.fulfilled, handleAddNewPetSuccess)
      .addCase(addNewPet.rejected, handleRejected),
});

export const petsReducer = petsSlice.reducer;
