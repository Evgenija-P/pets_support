import { VscAdd } from 'react-icons/vsc';
import { useField } from 'formik';
import * as styled from './FileInput.styled';

const FileInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const { value, ...customField } = field;

  return (
    <styled.Container>
      <styled.Label>{label}</styled.Label>
      <styled.UploadBtn htmlFor={props.id || props.name}>
        <VscAdd size="50%" />
      </styled.UploadBtn>
      <styled.Input value="" type="file" {...customField} {...props} />
      {meta.error && meta.touched && <styled.Error>{meta.error}</styled.Error>}
    </styled.Container>
  );
};

export default FileInput;
