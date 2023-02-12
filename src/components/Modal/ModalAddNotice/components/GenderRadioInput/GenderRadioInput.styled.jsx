import styled from '@emotion/styled';
import { media, colors, fontWeights } from '../../../../../styles/stylesLayout';

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
export const Labellll = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: 16px;
  color: ${p => (p.active ? colors.accent : colors.black)};

  :hover,
  :focus,
  :active {
    color: ${colors.accent};
  }

  ${media.tabletAndDesktop} {
    margin-top: 20px;
  }
`;
export const Text = styled.span`
  margin-top: 12px;
  font-size: 18px;
  font-weight: ${fontWeights.regular};

  ${media.tabletAndDesktop} {
    font-size: 20px;
    margin-top: 20px;
  }
`;

export const Wrap = styled.div`
  width: 40px;
  height: 40px;

  ${media.tabletAndDesktop} {
    width: 60px;
    height: 60px;
  }
`;
