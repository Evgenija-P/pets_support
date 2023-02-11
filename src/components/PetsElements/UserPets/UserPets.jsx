import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { selectPets } from '../../../redux/pets/selectors';
import { fetchPets } from '../../../redux/pets/operations';

import PetsLoader from '../PetsLoader';
import Spinner from '../../Spinner';

import { PetsNav, PetsTitle } from './UserPets.styled';

import AddPetButton from '../AddPetButton';
import PetsList from '../PetsList';

const UserPets = () => {
  const { pets, isLoading, error } = useSelector(selectPets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <div>
      <PetsNav>
        <PetsTitle>My pets:</PetsTitle>

        <AddPetButton />
      </PetsNav>

      {isLoading && <Spinner />}
      {(error || pets.length === 0) && !isLoading && <PetsLoader />}

      {!error && !isLoading && <PetsList />}
    </div>
  );
};

export default UserPets;
