import React from 'react';
import { ReactComponent as IconClose } from '../../../img/icons/close_menu.svg';
import { CloseButton } from '../Modal.styled';
import { ModalWrapper } from './ModalUnauthorized.styled';
import {
  NavLinkR,
  ButtonR,
  UserWrapper,
  Text,
  TextWrapper,
} from './ModalUnauthorized.styled';

const ModalUnauthorized = ({ onClose }) => {
  return (
    <div>
      <ModalWrapper>
        <CloseButton type="button" onClick={onClose}>
          <IconClose />
        </CloseButton>
        <TextWrapper>
          <Text>Sorry, you are unauthorized</Text>
          <Text>Please, log in or registration</Text>
        </TextWrapper>

        <UserWrapper>
          <ButtonR>
            <NavLinkR to="/login">
              <Text>Login</Text>
            </NavLinkR>
          </ButtonR>
          <ButtonR>
            <NavLinkR to="/register">
              <Text>Registration</Text>
            </NavLinkR>
          </ButtonR>
        </UserWrapper>
      </ModalWrapper>
    </div>
  );
};

export default ModalUnauthorized;
