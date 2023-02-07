import React from 'react';
import { ReactComponent as IconClose } from '../../../img/icons/close_menu.svg';
import { ModalWrapperNotice, ModalTitleNotice } from './ModalNotice.styles';
import { CloseButton } from '../Modal.styled';

const ModalNotice = ({ children, onClose, title }) => {
  return (
    <ModalWrapperNotice>
      <CloseButton type="button" onClick={onClose}>
        <IconClose />
      </CloseButton>
      {title ? <ModalTitleNotice>{title}</ModalTitleNotice> : null}
      <div>{children}</div>
    </ModalWrapperNotice>
  );
};

export default ModalNotice;
