import styled from '@emotion/styled';
import { colors, media } from '../../../../../styles/stylesLayout';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 28px;
`;

export const Label = styled.label`
  cursor: pointer;
  font-size: 18px;
  line-height: 1.47;
  color: ${colors.black};

  ${media.tabletAndDesktop} {
    font-size: 24px;
    line-height: 1.1;
  }
`;

export const CommentsField = styled.textarea`
  height: 100px;
  margin-top: 8px;
  padding: 12px 14px;
  font-size: 14px;
  border-radius: 20px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  background-color: ${colors.background};
  outline: none;
  resize: none;
  overflow: hidden;

  transition: border-color 250ms ease-in-out;

  ::placeholder {
    font-size: 14px;
    line-height: 1.37;
    color: rgba(17, 17, 17, 0.6);
    ${media.tabletAndDesktop} {
      font-size: 16px;
      line-height: 1.65;
    }

    ${media.tabletAndDesktop} {
      height: 130px;
    }
  }

  :hover,
  :focus {
    border-color: ${colors.hover};
  }
`;

export const RequiredSign = styled.span`
  font-size: 24px;
  color: ${colors.accent};
`;

export const Error = styled.span`
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  font-size: 14px;
  color: red;
`;
