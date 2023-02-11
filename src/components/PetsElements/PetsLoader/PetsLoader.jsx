import { useSelector } from 'react-redux';
import { selectPets } from '../../../redux/pets/selectors';

import {
  LoaderWrapper,
  PetsError,
  PetsMessage,
  PetsIcon,
  PetsErrorIcon,
} from './PetsLoader.styled';

const PetsLoader = () => {
  const { pets, error } = useSelector(selectPets);
  return (
    <LoaderWrapper>
      {error && <PetsError>{error}</PetsError>}
      {error && <PetsErrorIcon />}
      {pets.length === 0 && !error && (
        <PetsMessage>Pets not found...</PetsMessage>
      )}
      {pets.length === 0 && !error && <PetsIcon />}
    </LoaderWrapper>
  );
};
export default PetsLoader;
