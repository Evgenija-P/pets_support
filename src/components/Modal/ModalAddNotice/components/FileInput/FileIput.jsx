import { useField } from 'formik';

import * as styled from './FileInput.styled';

const FileInput = ({ ...props }) => {
  const [field, meta] = useField(props);

  const { value, ...customField } = field;

  return (
    <styled.Container>
      <styled.Label htmlFor={props.id || props.name}></styled.Label>
      <styled.Input value="" type="file" {...customField} {...props} />
      {meta.touched && meta.error && <styled.Error>{meta.error}</styled.Error>}
    </styled.Container>
  );
};

export default FileInput;
