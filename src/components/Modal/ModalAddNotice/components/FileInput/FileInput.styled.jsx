import styled from '@emotion/styled';
import { colors, media } from '../../../../../styles/stylesLayout';

export const Container = styled.div`
  margin-top: 16px;

  ${media.tabletAndDesktop} {
    margin-top: 28px;
  }
`;

export const Label = styled.div`
  font-size: 18px;
  line-height: 1.47;
  color: ${colors.black};

  ${media.tabletAndDesktop} {
    font-size: 24px;
    line-height: 1.1;
  }
`;

export const Input = styled.input`
  position: absolute;

  width: 1px;
  height: 1px;
  padding: 0;

  margin: -1px;
  border: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);

  overflow: hidden;
  pointer-events: none;
`;

export const UploadBtn = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 116px;
  height: 116px;
  margin-top: 8px;
  border-radius: 20px;

  background-color: ${colors.background};

  ${media.tabletAndDesktop} {
    width: 140px;
    height: 140px;
    margin-top: 12px;
  }
`;

export const Error = styled.span`
  display: block;
  position: absolute;

  font-size: 14px;
  color: red;
`;
