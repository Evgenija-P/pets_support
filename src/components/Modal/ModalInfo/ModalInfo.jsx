import React from 'react';
import { ReactComponent as IconClose } from '../../../img/icons/close_menu.svg';
import { ModalWrapperInfo } from './ModalInfo.styled';
import { CloseButton } from '../Modal.styled';

const ModalInfo = ({ children, onClose }) => {
  return (
    <ModalWrapperInfo>
      <CloseButton type="button" onClick={onClose}>
        <IconClose />
      </CloseButton>
      <div>{children}</div>
    </ModalWrapperInfo>
  );
};

export default ModalInfo;
