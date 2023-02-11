import styled from '@emotion/styled';
import { media, colors } from '../../../styles/stylesLayout';

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

  ${media.tabletAndDesktop} {
    width: 608px;
    padding: 40px 80px;
    min-height: 570px;
  }
`;
