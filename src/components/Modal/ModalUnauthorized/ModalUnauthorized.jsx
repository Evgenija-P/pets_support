import React from 'react';
import { ReactComponent as IconClose } from '../../../img/icons/close_menu.svg';
import { CloseButton } from '../Modal.styled';
import { ModalWrapper } from './ModalUnauthorized.styled';
import {
  NavLinkLog,
  NavLinkReg,
  ButtonLog,
  ButtonReg,
  Sp,
  User,
} from '../../AuthNav/AuthNav.styled';

const ModalUnauthorized = ({ children, onClose, title }) => {
  return (
    <div>
      <CloseButton type="button" onClick={onClose}>
        <IconClose />
      </CloseButton>{' '}
      <User>
        <ModalWrapper>
          Sorry, you are not logged in. <p>Please sign up or log in</p>
        </ModalWrapper>
        <ButtonLog>
          <NavLinkLog to="/login">
            <Sp>Login</Sp>
          </NavLinkLog>
        </ButtonLog>
        <ButtonReg>
          <NavLinkReg to="/register">
            <Sp>Registration</Sp>
          </NavLinkReg>
        </ButtonReg>
      </User>
    </div>
  );
};

export default ModalUnauthorized;
