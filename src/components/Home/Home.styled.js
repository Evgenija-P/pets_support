import styled from '@emotion/styled';
import backImgCircle from '../../img/Homepage/circle.png';
import backImgHeart from '../../img/Homepage/heart.png';
import backImgHpDesk from '../../img/Homepage/hp-desktop.png';
import backImgFigureB from '../../img/Homepage/hp-figure-desktop.png';
import backImgHpFigureL from '../../img/Homepage/hp-figure-little-desktop.png';
import backImgHpTablet from '../../img/Homepage/hp-tablet.png';
import backImgHpMobile from '../../img/Homepage/hp-mobile.png';
import backImgFigureM from '../../img/Homepage/hp-figure-mobile.png';
import { media } from '../../styles/stylesLayout';

export const ImgItem = styled.div``;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 68px;
  line-height: 100px;

  ${media.mobile} {
    font-size: 32px;
    line-height: 44px;
  }
`;

export const ImgFigureB = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -2;
  background: url(${backImgFigureB}) no-repeat;
  background-position-x: right;
  background-position-y: 275px;
  ${media.tablet} {
    background: url(${backImgFigureM}) no-repeat;

    background-position-x: -210px;
    background-position-y: -80px;
  }
  ${media.mobile} {
    background: url(${backImgFigureM}) no-repeat;

    background-position-x: -310px;
    background-position-y: -210px;
  }
`;

export const ImgCircle = styled.div`
  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -2;
  background: url(${backImgCircle}) no-repeat;
  background-position-x: center;
  background-position-y: 400px;

  ${media.mobileAndTablet} {
    display: none;
  }
`;

export const ImgHeart = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -2;
  background: url(${backImgHeart}) no-repeat;
  background-position-x: 700px;
  background-position-y: top;
  ${media.mobileAndTablet} {
    display: none;
  }
`;

export const Img = styled.img``;

export const ImgHpDesk = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background: url(${backImgHpDesk}) no-repeat;
  background-position-x: right;
  background-position-y: top;

  ${media.tablet} {
    background: url(${backImgHpTablet}) no-repeat;
    background-position-x: center;
    background-position-y: bottom;
  }
  ${media.mobile} {
    background: url(${backImgHpMobile}) no-repeat;
    background-position-x: center;
    background-position-y: center;
  }
`;

export const ImgHpFigureL = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background: url(${backImgHpFigureL}) no-repeat;
  background-position-x: 150px;
  background-position-y: 341.5px;
  ${media.mobileAndTablet} {
    display: none;
  }
`;

export const Cont = styled.div`
  min-height: 768px;
  position: relative;
  margin-top: 60px;

  ${media.tablet} {
    min-height: 1000px;
  }
  ${media.mobile} {
    min-height: 601px;
  }
`;
