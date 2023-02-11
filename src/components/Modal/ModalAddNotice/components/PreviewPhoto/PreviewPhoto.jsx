import { useState } from 'react';
import * as styled from './PreviewPhoto.styled';

const PreviewPhoto = ({ photo, onDeletePreview }) => {
  const [preview, setPreview] = useState({});

  if (photo) {
    const reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onload = () => setPreview(reader.result);
  }
  return (
    <styled.Container>
      <styled.Label>Load the pet's image</styled.Label>
      <styled.Wrapper>
        <styled.Photo src={preview} />
        <styled.DelBtn type="button" onClick={onDeletePreview}>
          x
        </styled.DelBtn>
      </styled.Wrapper>
    </styled.Container>
  );
};

export default PreviewPhoto;
