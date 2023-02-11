import styled from '@emotion/styled';
import { colors, fontWeights } from '../../../../styles/stylesLayout';

export const NoticesButton = styled.button`
  width: 100%;
  padding: 8px 28px;

  border-radius: 40px;
  border: 2px solid ${colors.accent};
  background-color: ${colors.white};

  font-weight: ${fontWeights.medium};
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;

  text-align: center;
  color: ${colors.accent};

  &:hover,
  &:focus {
    border-color: ${colors.accentButton};
    outline-color: ${colors.accentButton};
    color: ${colors.accentButton};
  }

  cursor: pointer;
`;
