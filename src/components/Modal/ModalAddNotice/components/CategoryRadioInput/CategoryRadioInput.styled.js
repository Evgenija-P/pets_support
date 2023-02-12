import styled from '@emotion/styled';
import { colors, media } from '../../../../../styles/stylesLayout';

export const Label = styled.label`
  display: flex;
  cursor: pointer;
  justify-content: center;
  padding: 10px 28px;
  align-items: center;

  font-size: 14px;
  line-height: 27px;
  letter-spacing: 4%;

  color: ${p => (p.active ? colors.white : colors.black)};
  height: 40px;
  background-color: ${p => (p.active ? colors.accent : colors.white)};
  border: 1px solid ${colors.accent};
  border-radius: 40px;

  :not(:first-of-type) {
    margin-left: 15px;
  }

  :hover,
  :focus {
    color: ${colors.white};
    background-color: ${colors.accent};
  }

  ${media.tabletAndDesktop} {
    font-size: 20px;
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
