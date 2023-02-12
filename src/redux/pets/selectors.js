export const selectPets = state => state.pets;

export const selectIsLoading = state => state.pets.IsLoading;

export const selectError = state => state.pets.erorr;

export const selectIsDeleting = state => state.pets.isDeleting;

export const selectPetToDeleteId = state => state.pets.petToDeleteId;
