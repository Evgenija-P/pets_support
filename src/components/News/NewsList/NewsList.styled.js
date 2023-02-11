import styled from 'styled-components';
import { media } from '../../../styles/stylesLayout';

export const ListNews = styled.ul`
  ${media.mobile} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
  }

  ${media.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  ${media.desktop} {
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
    margin-bottom: -30px;
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
  margin-top: 40px;

  ${media.tabletAndDesktop} {
    margin-top: 60px;
  }
`;
