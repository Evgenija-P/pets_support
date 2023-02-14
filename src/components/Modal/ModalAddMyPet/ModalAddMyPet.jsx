import React from 'react';
import { ReactComponent as IconClose } from '../../../img/icons/close_menu.svg';
import {
  ModalWrapperAddMyPet,
  ModalTitleAddMyPet,
} from './ModalAddMyPet.styled';
import { CloseButton } from '../Modal.styled';

import AddPetForm from './components/AddPetForm';

const ModalAddMyPet = ({ children, onClose, title }) => {
  return (
    <ModalWrapperAddMyPet>
      <CloseButton
        type="button"
        aria-label="close modal button"
        onClick={onClose}
      >
        <IconClose />
      </CloseButton>
      {title ? <ModalTitleAddMyPet>{title}</ModalTitleAddMyPet> : null}
      <AddPetForm onClose={onClose} />
    </ModalWrapperAddMyPet>
  );
};

export default ModalAddMyPet;
