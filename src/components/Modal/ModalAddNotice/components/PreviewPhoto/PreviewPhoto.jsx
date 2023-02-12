import { useState } from 'react';
import * as styled from './PreviewPhoto.styled';
import { ReactComponent as IconClose } from '../../../../../img/icons/close_menu.svg';

const PreviewPhoto = ({ photo, onDeletePreview }) => {
  const [preview, setPreview] = useState({});

  if (photo) {
    const reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onload = () => setPreview(reader.result);
  }
  return (
    <styled.Container>
      <styled.Photo src={preview} />
      <styled.DelBtn type="button" onClick={onDeletePreview}>
        <IconClose />
      </styled.DelBtn>
    </styled.Container>
  );
};

export default PreviewPhoto;
