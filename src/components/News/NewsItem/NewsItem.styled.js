import styled from 'styled-components';
import Band from '../../../img/Band.svg';
// import { colors } from '../../../styles/stylesLayout';

export const CardNews = styled.div`
  width: 390px;
`;

export const BandNews = styled.div`
  background: url(${Band}) no-repeat;
`;

export const CardButtonNews = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const TitleCardNews = styled.h3`
  padding-top: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: #111111;
`;

export const DescriptionCardNews = styled.p`
  margin-top: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #111321;
`;

export const DateCardNews = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: rgba(17, 17, 17, 0.6);
`;

export const UrlCardNews = styled.a`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #f59256;
`;
