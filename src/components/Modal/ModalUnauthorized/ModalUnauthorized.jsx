import React from 'react';
import { ReactComponent as IconClose } from '../../../img/icons/close_menu.svg';
import { CloseButton } from '../Modal.styled';
import { ModalWrapper } from './ModalUnauthorized.styled';
import { NavLinkR, ButtonR, Sp, UserWrapper } from './ModalUnauthorized.styled';

const ModalUnauthorized = ({ onClose }) => {
  return (
    <div>
      <ModalWrapper>
        <CloseButton type="button" onClick={onClose}>
          <IconClose />
        </CloseButton>
        Sorry, you are not logged in. <p>Please sign up or log in</p>
        <UserWrapper>
          <ButtonR>
            <NavLinkR to="/login">
              <Sp>Login</Sp>
            </NavLinkR>
          </ButtonR>
          <ButtonR>
            <NavLinkR to="/register">
              <Sp>Registration</Sp>
            </NavLinkR>
          </ButtonR>
        </UserWrapper>
      </ModalWrapper>
    </div>
  );
};

export default ModalUnauthorized;
