import styled from '@emotion/styled';
import backImgHpDesk from '../../img/Homepage/hp-desktop.png';
import backImgHpTablet from '../../img/Homepage/mobileTablet.png';
import backMobileTablet2 from '../../img/Homepage/mobileTablet4x.png';
import main from '../../img/Homepage/mainPast.png';
import { media } from '../../styles/stylesLayout';

export const Title = styled.h2`
  font-weight: 700;
  font-size: 68px;
  line-height: 100px;

  ${media.mobile} {
    font-size: 32px;
    line-height: 44px;
  }
`;


export const ImgHpDesk = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background: url(${backImgHpDesk}) no-repeat;
  background-size: contain;
  background-position-x: right;
  background-position-y: bottom;

  ${media.desktopHeight} {
    background-size: auto;
  }

  ${media.tablet} {
    background: none;
  }
  ${media.mobile} {
    background: none;
  }
`;

export const Cont = styled.div`
  min-height: calc(100vh - 131px);
  position: relative;
  margin-top: 60px;
`;


export const MainBack = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background: url(${main}) no-repeat;
  background-size: contain;
  background-position-x: right;
  background-position-y: bottom;

  ${media.tablet} {
    background: url(${backMobileTablet2}) no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
  }
  ${media.mobile} {
    background: url(${backImgHpTablet}) no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
  }
`;