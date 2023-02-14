import { useState } from 'react';
import * as styled from './PreviewPhoto.styled';
import { MdClose } from 'react-icons/md';

const PreviewPhoto = ({ label, photo, onDeletePreview }) => {
  const [preview, setPreview] = useState({});

  if (photo) {
    const reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onload = () => setPreview(reader.result);
  }
  return (
    <styled.Container>
      <styled.Label>{label}</styled.Label>
      <styled.Wrapper>
        <styled.Photo src={preview} />
        <styled.DelBtn
          type="button"
          aria-label="delete selected file button "
          onClick={onDeletePreview}
        >
          <MdClose size={100} />
        </styled.DelBtn>
      </styled.Wrapper>
    </styled.Container>
  );
};

export default PreviewPhoto;
