import { PetButton } from './AddPetButton.styled';

import { ReactComponent as AddPetIcon } from '../../../img/icons/addPetIcon.svg';

const AddPetButton = () => {
  return (
    <PetButton>
      Add pet
      <span>
        <AddPetIcon />
      </span>
    </PetButton>
  );
};

export default AddPetButton;
