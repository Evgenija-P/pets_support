import styled from '@emotion/styled';
import { media, colors } from '../../styles/stylesLayout';

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  background-color: ${colors.gray};
  backdrop-filter: blur(5px);
  transition-property: opacity;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: ${colors.background};
  position: absolute;
  top: 20px;
  right: 20px;

  :hover,
  :focus {
    transform: scale(1.05);
    cursor: pointer;
  }

  ${media.tablet} {
    width: 44px;
    height: 44px;
  }

  ${media.desktop} {
    top: 24px;
    right: 24px;
  }
`;
