import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { selectPets } from '../../redux/pets/selectors';
import { fetchPets } from '../../redux/pets/operations';

import {
  PetsNav,
  PetButtonAdd,
  PetsTitle,
  PetsItem,
  PetImage,
  PetDescription,
  PetTags,
  PetTag,
  PetButtonDelete,
} from './PetsUserList.styled';

import { ReactComponent as PetButtonIconDelete } from '../../img/icons/petButtonDelete.svg';
import { ReactComponent as AddPetIcon } from '../../img/icons/addPetIcon.svg';

const PetsUserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  const { pets } = useSelector(selectPets);
  console.log(pets);

  return (
    <div>
      <PetsNav>
        <PetsTitle>My pets:</PetsTitle>

        <PetButtonAdd>
          Add pet
          <span>
            <AddPetIcon />
          </span>
        </PetButtonAdd>
      </PetsNav>

      <ul>
        {pets.map(({ photoURL, name, birthday, breed, comments }) => (
          <PetsItem>
            <PetImage />
            <PetDescription>
              <PetButtonDelete>
                <PetButtonIconDelete />
              </PetButtonDelete>
              <PetTags>
                <PetTag>
                  <span>Name:</span>
                  {name}
                </PetTag>
                <PetTag>
                  <span>Date of birth:</span>
                  {birthday}
                </PetTag>
                <PetTag>
                  <span>Breed:</span>
                  {breed}
                </PetTag>
                <PetTag>
                  <span>Comments:</span>
                  {comments}
                </PetTag>
              </PetTags>
            </PetDescription>
          </PetsItem>
        ))}
      </ul>
    </div>
  );
};

export default PetsUserList;
