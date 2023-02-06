import styled from '@emotion/styled';
import { media, colors } from '../../../styles/stylesLayout';

export const ModalWrapperInfo = styled.div`
  overflow: auto;
  width: 280px;
  padding: 60px 20px 40px;
  min-height: 784px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background: ${colors.white};
  z-index: 1000;

  ${media.tablet} {
    width: 704px;
    padding: 32px 20px;
    min-height: 540px;
  }

  ${media.desktop} {
    min-height: 548px;
  }
`;
