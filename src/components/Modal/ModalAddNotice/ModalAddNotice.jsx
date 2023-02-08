import React from 'react';
import { ReactComponent as IconClose } from '../../../img/icons/close_menu.svg';
import {
  ModalWrapperAddNotices,
  ModalTitleAddNotices,
} from './ModalAddMyPet.styled';
import { CloseButton } from '../Modal.styled';

const ModalAddNotice = ({ children, onClose, title }) => {
  return (
    <ModalWrapperAddNotices>
      <CloseButton type="button" onClick={onClose}>
        <IconClose />
      </CloseButton>
      {title ? <ModalTitleAddNotices>{title}</ModalTitleAddNotices> : null}
      <div>{children}</div>
    </ModalWrapperAddNotices>
  );
};
export default ModalAddNotice;
