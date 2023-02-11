import GenderRadioInput from '../CategoryRadioInput';
import * as styled from './GenderSwitch.styled';

const GenderSwitch = ({ gender }) => {
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
    </styled.Container>
  );
};

export default GenderSwitch;
