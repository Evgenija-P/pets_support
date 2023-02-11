import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { selectPets } from '../../../redux/pets/selectors';
import { fetchPets } from '../../../redux/pets/operations';

import PetsLoader from '../PetsLoader';
import Spinner from '../../Spinner';

import AddPetButton from '../AddPetButton';
import Modal from '../../Modal';
import PetsList from '../PetsList';

import { PetsNav, PetsTitle } from './UserPets.styled';

const UserPets = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const { pets, isLoading, error } = useSelector(selectPets);

  function toggleAddPetModal() {
    setShowModal(prevState => !prevState);
  }

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <div>
      <PetsNav>
        <PetsTitle>My pets:</PetsTitle>

        <AddPetButton onClick={toggleAddPetModal} />
      </PetsNav>

      {showModal && (
        <Modal type="pet" title="Add pet" onClose={toggleAddPetModal} />
      )}

      {isLoading && <Spinner />}
      {(error || pets.length === 0) && !isLoading && <PetsLoader />}
      {!error && !isLoading && <PetsList />}
    </div>
  );
};

export default UserPets;
