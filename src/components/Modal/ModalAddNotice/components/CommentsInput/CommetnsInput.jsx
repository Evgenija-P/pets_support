import { useField } from 'formik';
import * as styled from './CommentsInput.styled';

const CommentsInput = ({ label, required, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <styled.Container>
      <styled.Label htmlFor={props.id}>
        {required ? (
          <>
            {label} <styled.RequiredSign>*</styled.RequiredSign>
          </>
        ) : (
          label
        )}
      </styled.Label>
      <styled.CommentsField autoComplete="off" {...field} {...props} />
      {meta.error && meta.touched && <styled.Error>{meta.error}</styled.Error>}
    </styled.Container>
  );
};

export default CommentsInput;
