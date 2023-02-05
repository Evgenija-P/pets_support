import styled from '@emotion/styled';
import { colors } from '../../styles/stylesLayout';

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.gray};
  backdrop-filter: blur(5px);
  transition-property: opacity;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
`;

export const ModalWrapper = styled.div`
  overflow: auto;
  width: 280px;
  padding: 40px 20px;
  min-height: 530px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background: ${colors.white};
  z-index: 1000;
`;

export const CloseButton = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  /* border: solid 5px red; */

  background: ${colors.background};

  position: absolute;
  top: 20px;
  right: 20px;
`;