import React from 'react';
import { ReactComponent as IconClose } from '../../../img/icons/close_menu.svg';
import {
  ModalWrapperDeleteDialog,
  ModalTitleDeleteDialog,
} from './ModalDeleteDialog.styled';
import { CloseButton } from '../Modal.styled';

import AlertDialog from './components/AlertDialog';

const ModalDeleteDialog = ({
  children,
  onClose,
  title,
  onDelete,
  activeNotice,
}) => {
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
      <AlertDialog
        onClose={onClose}
        onDelete={onDelete}
        activeNotice={activeNotice}
      />
    </ModalWrapperDeleteDialog>
  );
};

export default ModalDeleteDialog;
