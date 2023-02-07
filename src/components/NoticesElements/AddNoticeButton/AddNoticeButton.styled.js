import styled from '@emotion/styled';
import { media, colors, fontWeights } from '../../../styles/stylesLayout';

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.mobile} {
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 50%;

    width: 80px;
    height: 80px;
    padding: 16px;

    border: none;
    border-radius: 40px;
    outline-color: ${colors.accent};

    background-color: ${colors.accent};

    font-size: 12px;
    font-weight: ${fontWeights.medium};
    color: ${colors.white};

    &:hover,
    &:focus,
    &.active {
      outline-color: ${colors.accentButton};
      background-color: ${colors.accentButton};
    }
  }

  ${media.tabletAndDesktop} {
    flex-direction: row-reverse;
    gap: 12px;

    border: none;
    outline: none;
    background-color: transparent;

    font-size: 20px;
    font-weight: ${fontWeights.medium};
    color: ${colors.black};

    &:hover,
    &:focus,
    &.active {
      span {
        background-color: ${colors.accentButton};
      }
    }
  }

  cursor: pointer;

  span {
    ${media.tabletAndDesktop} {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 44px;
      height: 44px;
      background-color: ${colors.accent};

      border-radius: 40px;
    }
  }

  img {
    width: 32px;
    height: 32px;
  }
`;
