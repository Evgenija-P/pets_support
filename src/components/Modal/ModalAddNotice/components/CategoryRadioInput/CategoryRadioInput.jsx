import { useField } from 'formik';

import * as styled from './CategoryRadioInput.styled';

const CategoryRadioInput = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <styled.Label htmlFor={props.id} active={field.value === props.value}>
        {props.value}
      </styled.Label>
      <styled.Input type="radio" {...field} {...props} />
    </>
  );
};

export default CategoryRadioInput;
