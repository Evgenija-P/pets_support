import { useField } from 'formik';
import * as styled from './GenderRadioInput.styled';
import { ReactComponent as IconFemale } from '../../../../../img/icons/female.svg';
import { ReactComponent as IconMale } from '../../../../../img/icons/male.svg';

const PetGenderRadioInput = props => {
  const [field] = useField(props);

  return (
    <>
      <styled.Labellll htmlFor={props.id} active={field.value === props.value}>
        <styled.Wrap>
          {props.value === 'male' ? (
            <IconMale width={'100%'} height={'100%'} />
          ) : (
            <IconFemale width={'100%'} height={'100%'} />
          )}
        </styled.Wrap>

        <styled.Text>{props.value}</styled.Text>
      </styled.Labellll>
      <styled.Input type="radio" {...field} {...props} />
    </>
  );
};

export default PetGenderRadioInput;
