import { useSelector } from 'react-redux';

import { selectPets } from '../../../redux/pets/selectors';

import {
  PetsItem,
  PetImage,
  PetDescription,
  PetTags,
  PetTag,
  PetButtonDelete,
} from './PetsList.styled';

import { ReactComponent as PetButtonIconDelete } from '../../../img/icons/petButtonDelete.svg';
import notFoundNoticesImage from '../../../img/notFoundNoticesImage.jpg';

const PetsList = () => {
  const { pets } = useSelector(selectPets);

  return (
    <ul>
      {pets.map(({ _id, photoURL, name, birthday, breed, comments }) => (
        <PetsItem key={_id}>
          <PetImage
            src={photoURL ? photoURL : notFoundNoticesImage}
            alt={name}
          />
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
  );
};

export default PetsList;
