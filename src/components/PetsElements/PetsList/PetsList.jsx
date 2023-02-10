import {
  PetsList,
  PetsItem,
  PetsImage,
  PetsDescription,
  PetsTags,
  PetsTag,
  PetsButton,
} from './PetsList.styled';

const PetsUserList = () => {
  return (
    <PetsList>
      <PetsItem>
        <PetsImage />
        <PetsTags>
          <PetsTag>Name: Jack</PetsTag>
          <PetsTag>Date of birth: 22.04.2018</PetsTag>
          <PetsTag>Breed: Jack</PetsTag>
          <PetsTag>
            Comments: Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor
            sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
            ipsum dolor sit amet, consectetur
          </PetsTag>
        </PetsTags>
      </PetsItem>
    </PetsList>
  );
};

export default PetsUserList;
