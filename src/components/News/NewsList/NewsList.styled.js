import styled from 'styled-components';
// import { media, colors } from '../../../styles/stylesLayout';

export const ListNews = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  margin-bottom: -30px;
`;

export const ItemNews = styled.li`
  flex-basis: calc(100% / 3 - 30px);
  margin-left: 30px;
  margin-bottom: 60px;
`;

export const ConteinerNews = styled.div`
  margin-top: 60px;
`;
