import React from 'react';
import { ReactComponent as IconClose } from '../../../img/icons/close_menu.svg';
import { ModalWrapperNotice } from './ModalNotice.styled';
import { CloseButton } from '../Modal.styled';

const ModalNotice = ({ children, onClose }) => {
  return (
    <ModalWrapperNotice>
      <CloseButton type="button" onClick={onClose}>
        <IconClose />
      </CloseButton>
      <div>{children}</div>
    </ModalWrapperNotice>
  );
};

export default ModalNotice;
