import React from 'react';
import { ReactComponent as IconClose } from '../../../img/icons/close_menu.svg';
import {
  ModalWrapperAddMyPet,
  ModalTitleAddMyPet,
} from './ModalAddMyPet.styled';
import { CloseButton } from '../Modal.styled';

const ModalAddMyPet = ({ children, onClose, title }) => {
  return (
    <ModalWrapperAddMyPet>
      <CloseButton type="button" onClick={onClose}>
        <IconClose />
      </CloseButton>
      {title ? <ModalTitleAddMyPet>{title}</ModalTitleAddMyPet> : null}
      <div>{children}</div>
    </ModalWrapperAddMyPet>
  );
};

export default ModalAddMyPet;
