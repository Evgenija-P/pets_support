import styled from 'styled-components';
import { colors, media, fontWeights } from '../../../styles/stylesLayout';
export const SearchNewsForm = styled.form`
  position: relative;
  margin: 0px auto;
  width: 280px;
  height: 100%;

  ${media.tabletAndDesktop} {
    width: 608px;
  }
`;

export const SearchNewsInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 44px;
  padding: 8px 12px;
  border-radius: 44px;
  background-color: ${colors.white};
  box-shadow: 7px 4px 15px 0px ${colors.shadow};
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 0.75;
  letter-spacing: 0.04em;

  ${media.tabletAndDesktop} {
    max-width: 610px;
    height: 44px;
    padding: 8px 20px;
    font-size: 20px;
  }

  &:focus {
    outline-color: ${colors.white};
  }

  ::placeholder {
    font-weight: ${fontWeights.medium};
    font-size: 16px;
    line-height: 0.75;
    color: #535353;

    ${media.tabletAndDesktop} {
      font-size: 20px;
    }
  }
`;

export const SearchNewsButton = styled.button`
  position: absolute;
  top: 8px;
  right: 20px;

  width: 32px;
  height: 32px;

  border-radius: 32px;
  border: none;
  outline: none;

  background-color: transparent;

  cursor: pointer;

  fill: ${colors.black};

  :hover {
    fill: ${colors.accent};
  }
`;