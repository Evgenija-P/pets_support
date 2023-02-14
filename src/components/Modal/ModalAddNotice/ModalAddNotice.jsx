import React from 'react';
import { ReactComponent as IconClose } from '../../../img/icons/close_menu.svg';

import AddNoticeForm from './components/AddNoticeForm';

import {
  ModalTitleAddNotices,
  ModalWrapperNotices,
} from './ModalAddNotice.styled';

import { CloseButton } from '../Modal.styled';

const ModalAddNotice = ({ onClose, title }) => {
  return (
    <ModalWrapperNotices>
      <CloseButton
        type="button"
        aria-label="close modal button"
        onClick={onClose}
      >
        <IconClose />
      </CloseButton>
      {title ? <ModalTitleAddNotices>{title}</ModalTitleAddNotices> : null}
      <AddNoticeForm onClose={onClose} />
    </ModalWrapperNotices>
  );
};
export default ModalAddNotice;
