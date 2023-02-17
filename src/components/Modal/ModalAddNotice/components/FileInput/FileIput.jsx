import { VscAdd } from 'react-icons/vsc';
import { useField } from 'formik';
import { useDropzone } from 'react-dropzone';

import * as styled from './FileInput.styled';

const FileInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const { getInputProps, getRootProps, isDragActive, isFocused } = useDropzone({
    onDropAccepted: values => helpers.setValue(values[0], true),
    onFileDialogCancel: () => helpers.setValue('', true),
    multiple: false,
  });
  const { value, ...customField } = field;

  return (
    <styled.Container>
      <styled.Label>{label}</styled.Label>
      <styled.UploadBtn
        aria-label="select file button "
        {...getRootProps({ isDragActive, isFocused })}
      >
        {isDragActive ? <styled.DnDIcon /> : <VscAdd size="50%" />}
      </styled.UploadBtn>
      <styled.Input
        value=""
        type="file"
        {...customField}
        {...props}
        {...getInputProps()}
      />
      {meta.error && (
        <styled.ErrorContainer>
          <styled.Error>{meta.error}</styled.Error>
        </styled.ErrorContainer>
      )}
    </styled.Container>
  );
};

export default FileInput;
