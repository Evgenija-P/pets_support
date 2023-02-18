import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';

import { deletePet } from '../../../redux/pets/operations';
import { selectPets, selectIsDeleting } from '../../../redux/pets/selectors';
import { optionsToast } from '../../../styles/stylesLayout';
import OperationConfirmationPopUp from '../../Modal/operationConfirmationPopUp';

import {
  PetsContainer,
  PetsItem,
  PetImage,
  PetDescription,
  PetTag,
  PetButtonDelete,
} from './PetsList.styled';

import { ReactComponent as PetButtonIconDelete } from '../../../img/icons/petButtonDelete.svg';
import notFoundNoticesImage from '../../../img/notFoundNoticesImage.jpg';
import { useState } from 'react';

const PetsList = () => {
  const { pets } = useSelector(selectPets);
  const [petToDeleteId, setPetToDeleteId] = useState(null);
  const [isConfirmationPopUpShow, setIsConfirmationPopUpShow] = useState(false);

  const isDeleting = useSelector(selectIsDeleting);
  const dispatch = useDispatch();

  function toggleOperationConfirmationPopUp() {
    setIsConfirmationPopUpShow(prevState => !prevState);
  }

  async function handlePetDelete(petId) {
    try {
      await dispatch(deletePet(petId)).unwrap();
      toast.success('Pet was deleted.', optionsToast);
    } catch {
      toast.error('Error occured. Pet deleting not completed.', optionsToast);
    }
  }

  return (
    <PetsContainer>
      <AnimatePresence initial={false} position>
        {pets.map(({ _id, photoURL, name, birthday, breed, comments }) => (
          <PetsItem layout="position" key={_id}>
            <PetImage
              src={photoURL ? photoURL : notFoundNoticesImage}
              alt={name}
            />

            <PetDescription>
              <PetButtonDelete
                onClick={() => {
                  setPetToDeleteId(_id);
                  toggleOperationConfirmationPopUp();
                }}
              >
                <PetButtonIconDelete />
              </PetButtonDelete>

              <div>
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
              </div>
            </PetDescription>
          </PetsItem>
        ))}
      </AnimatePresence>
      {isConfirmationPopUpShow && (
        <OperationConfirmationPopUp
          title="Pet deleting"
          executeOperation={handlePetDelete}
          elementId={petToDeleteId}
          onClose={toggleOperationConfirmationPopUp}
          isExecuting={isDeleting}
        />
      )}
    </PetsContainer>
  );
};

export default PetsList;
