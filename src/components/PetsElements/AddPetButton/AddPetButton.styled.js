import styled from '@emotion/styled';
import { colors } from '../../../styles/stylesLayout';

export const PetButton = styled.button`
  display: flex;
  align-items: center;
  gap: 24px;

  font-weight: 500;
  font-size: 20px;
  line-height: 27px;

  border: none;
  outline: none;
  background-color: transparent;

  transition: 250ms ease;

  &:hover {
    color: ${colors.accent};
  }

  &:focus {
    span {
      stroke: ${colors.white};
      background-color: ${colors.accentButton};
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 40px;

    width: 40px;
    height: 40px;

    background-color: ${colors.accent};
  }
`;
