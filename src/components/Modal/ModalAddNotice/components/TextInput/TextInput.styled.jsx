import styled from '@emotion/styled';
import { colors, media } from '../../../../../styles/stylesLayout';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  ${media.tabletAndDesktop} {
    margin-top: 28px;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  line-height: 1.47;
  color: ${colors.black};

  ${media.tabletAndDesktop} {
    font-size: 24px;
    line-height: 1.1;
  }
`;

export const Input = styled.input`
  height: 40px;
  margin-top: 8px;
  padding: 12px 14px;
  font-size: 16px;
  border-radius: 40px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  background-color: #fdf7f2;

  ::placeholder {
    font-size: 14px;
    line-height: 1.37;
    color: rgba(17, 17, 17, 0.6);
    ${media.tabletAndDesktop} {
      font-size: 16px;
      line-height: 1.65;
    }
  }

  ${media.tabletAndDesktop} {
    height: 48px;
    margin-top: 12px;
    padding: 10px 16px;
  }
`;

export const RequiredSign = styled.span`
  font-size: 24px;
  color: ${colors.accent};
`;

export const Error = styled.span`
  display: block;
  position: absolute;
  bottom: -20px;
  left: 0px;
  font-size: 14px;
  color: red;
`;
