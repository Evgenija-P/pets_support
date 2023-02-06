import React from 'react';
import { ModalWrapperUser, ModalTitleUser } from './ModalUser.styled';

const ModalUser = ({ children, onClose, title }) => {
  return (
    <ModalWrapperUser>
      {title ? <ModalTitleUser>{title}</ModalTitleUser> : null}
      <div>{children}</div>
    </ModalWrapperUser>
  );
};

export default ModalUser;
