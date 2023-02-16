import React from 'react';
import { ReactComponent as IconClose } from '../../../img/icons/close_menu.svg';
import {
  ModalWrapperDeleteDialog,
  ModalTitleDeleteDialog,
} from './ModalDeleteDialog.styled';
import { CloseButton } from '../Modal.styled';

import AlertDialog from './components/AlertDialog';

const ModalDeleteDialog = ({ children, onClose, title, onDelete }) => {
  return (
    <ModalWrapperDeleteDialog>
      <CloseButton
        type="button"
        aria-label="close modal button"
        onClick={onClose}
      >
        <IconClose />
      </CloseButton>
      {title ? <ModalTitleDeleteDialog>{title}</ModalTitleDeleteDialog> : null}
      <AlertDialog onClose={onClose} onDelete={onDelete} />
    </ModalWrapperDeleteDialog>
  );
};

export default ModalDeleteDialog;
