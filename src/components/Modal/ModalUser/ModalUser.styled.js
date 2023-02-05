import styled from '@emotion/styled';
import { media, colors, fontWeights } from '../../../styles/stylesLayout';

export const ModalWrapperUser = styled.div`
  overflow: auto;
  width: 608px;
  padding: 60px 75px 40px;
  min-height: 449px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background: ${colors.white};
  z-index: 1000;

  ${media.desktop} {
    width: 618px;
    min-height: 473px;
    padding: 40px 75px;
  }
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

  ${media.tablet} {
    width: 44px;
    height: 44px;
  }

  ${media.tablet} {
    top: 24px;
    right: 24px;
  }
`;

export const ModalTitleUser = styled.p`
  font-size: 36px;
  line-height: 1.38;
  font-weight: ${fontWeights.medium};
  text-align: center;
  color: ${colors.black};
  margin-bottom: 20px;
`;
