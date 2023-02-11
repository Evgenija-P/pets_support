import styled from 'styled-components';
import BandMobile from '../../../img/Band.svg';
import BandTablet from '../../../img/Band.svg';
import Band from '../../../img/Band.svg';
import { media, colors, fontWeights } from '../../../styles/stylesLayout';

export const CardNews = styled.div`
  width: 280px;

  ${media.tablet} {
    width: 336px;
  }
  ${media.desktop} {
    width: 390px;
  }
`;

export const BoxBand = styled.div`
  background: url(${BandMobile}) no-repeat;

  ${BandTablet} {
    background: url(${BandTablet}) no-repeat;
  }
  ${Band} {
    background: url(${Band}) no-repeat;
  }
`;

export const TitleCardNews = styled.h3`
  padding-top: 8px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: ${fontWeights.bold};
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: ${colors.black};

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardButtonNews = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  ${media.tabletAndDesktop} {
    margin-top: 40px;
  }
`;

export const DescriptionCardNews = styled.p`
  margin-top: 16px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: ${fontWeights.regular};
  font-size: 16px;
  line-height: 22px;
  color: ${colors.newsText};

  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${media.tablet} {
    -webkit-line-clamp: 6;
  }
  ${media.desktop} {
    -webkit-line-clamp: 5;
  }
`;

export const DateCardNews = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: ${fontWeights.regular};
  font-size: 16px;
  line-height: 22px;
  color: ${colors.gray};
`;

export const UrlCardNews = styled.a`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: ${fontWeights.medium};
  font-size: 16px;
  line-height: 22px;
  color: ${colors.accent};
  text-decoration-line: underline;

  :hover,
  :focus {
    color: ${colors.accentButton};
  }
`;
