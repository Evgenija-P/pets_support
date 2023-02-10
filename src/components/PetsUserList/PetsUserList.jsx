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
        <PetsItem>
          <PetImage />
          <PetDescription>
            <PetButtonDelete>
              <PetButtonIconDelete />
            </PetButtonDelete>
            <PetTags>
              <PetTag>
                <span>Name:</span>Jack
              </PetTag>
              <PetTag>
                <span>Date of birth:</span>22.04.2018
              </PetTag>
              <PetTag>
                <span>Breed:</span>Jack
              </PetTag>
              <PetTag>
                <span>Comments:</span>
                Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit
                amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
                ipsum dolor sit amet, consectetur
              </PetTag>
            </PetTags>
          </PetDescription>
        </PetsItem>
      </ul>
    </div>
  );
};

export default PetsUserList;
