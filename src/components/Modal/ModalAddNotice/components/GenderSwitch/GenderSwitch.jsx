import { useField } from 'formik';
import GenderRadioInput from '../GenderRadioInput';
import * as styled from './GenderSwitch.styled';

const GenderSwitch = ({ gender }) => {
  const [, meta] = useField({ name: 'sex' });

  return (
    <styled.Container>
      <styled.Label>
        The sex<styled.RequiredFieldSign>*</styled.RequiredFieldSign>
      </styled.Label>
      <styled.List>
        {gender.map(value => (
          <styled.Item key={value}>
            <GenderRadioInput id={value} name="sex" value={value} />
          </styled.Item>
        ))}
      </styled.List>
      {meta.error && meta.touched && <styled.Error>{meta.error}</styled.Error>}
    </styled.Container>
  );
};

export default GenderSwitch;
