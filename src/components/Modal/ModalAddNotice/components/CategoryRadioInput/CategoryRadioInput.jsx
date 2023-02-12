import { useField } from 'formik';

import * as styled from './CategoryRadioInput.styled';

const CategoryRadioInput = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <>
      <styled.Label htmlFor={props.id} active={field.value === props.value}>
        {label}
      </styled.Label>
      <styled.Input type="radio" {...field} {...props} />
    </>
  );
};

export default CategoryRadioInput;
