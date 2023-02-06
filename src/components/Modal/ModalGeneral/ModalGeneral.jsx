import React from 'react';
import { ReactComponent as IconClose } from '../../../img/icons/close_menu.svg';
import { ModalWrapperGeneral, ModalTitleGeneral } from './ModalGeneral.styles';
import { CloseButton } from '../Modal.styled';

const ModalGeneral = ({ children, onClose, title }) => {
  return (
    <ModalWrapperGeneral>
      <CloseButton type="button" onClick={onClose}>
        <IconClose />
      </CloseButton>
      {title ? <ModalTitleGeneral>{title}</ModalTitleGeneral> : null}
      <div>{children}</div>
    </ModalWrapperGeneral>
  );
};

export default ModalGeneral;
