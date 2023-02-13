import styled from 'styled-components';
import { colors, media, fontWeights } from '../../../styles/stylesLayout';

export const ListNews = styled.ul`
  ${media.mobile} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
  }

  ${media.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
  }

  ${media.desktop} {
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
    margin-bottom: -30px;
    margin-top: 60px;
  }
`;

export const ItemNews = styled.li`
  margin-bottom: 40px;

  ${media.tablet} {
    margin-left: 34px;
    margin-bottom: 60px;
  }

  ${media.desktop} {
    flex-basis: calc(100% / 3 - 30px);
    margin-left: 30px;
    margin-bottom: 60px;
  }
`;

export const ConteinerNews = styled.div`
  ${media.tabletAndDesktop} {
    margin-top: 40px;
  }
`;
// =============== forma ====================
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
