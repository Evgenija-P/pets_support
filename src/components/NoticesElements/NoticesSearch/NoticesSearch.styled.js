import styled from '@emotion/styled';
import { media, colors, fontWeights } from '../../../styles/stylesLayout';

export const SearchForm = styled.form`
  width: 280px;
  height: 100%;

  margin: 0 auto;
  position: relative;

  display: flex;

  ${media.tabletAndDesktop} {
    width: 608px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;

  display: inline-block;

  padding: 8px 12px;
  border-radius: 40px;
  border: 2px solid ${colors.white};

  background-color: ${colors.white};
  box-shadow: 7px 4px 15px 0px ${colors.shadow};

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
    font-family: 'Manrope';
    font-weight: ${fontWeights.medium};
    font-size: 16px;
    line-height: 0.75;

    color: #535353;

    ${media.tabletAndDesktop} {
      font-size: 20px;
    }
  }
`;

export const SearchFormButton = styled.button`
  position: absolute;
  left: 80%;
  top: 10%;

  display: block;
  width: 48px;
  height: 48px;
  border-radius: 40px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;
  outline: none;
  background-color: ${colors.white};

  :hover {
    opacity: 1;
  }

  ${media.tabletAndDesktop} {
    left: 90%;
    top: 10%;
  }
`;
