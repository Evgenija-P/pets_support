import { PetButton } from './AddPetButton.styled';

import { ReactComponent as AddPetIcon } from '../../../img/icons/addPetIcon.svg';

const AddPetButton = ({ onClick }) => {
  return (
    <PetButton type="button" onClick={onClick}>
      Add pet
      <span>
        <AddPetIcon />
      </span>
    </PetButton>
  );
};

export default AddPetButton;
