import styled from '@emotion/styled';
import backImgHpDesk from '../../img/Homepage/hp-desktop.png';
import backGirlMob from '../../img/Homepage/hp-mobile.png';
import backGirlTabl from '../../img/Homepage/hp-tablet.png';
import main from '../../img/Homepage/mainPast.png';
import backVecTabl from '../../img/Homepage/Vector.png';
import backVecMob from '../../img/Homepage/VectorMobile.png';
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
  z-index: -99;

  background: url(${backImgHpDesk}) no-repeat;
  background-size: auto;
  background-position-x: right;
  background-position-y: bottom;

  ${media.desktopHeight} {
    background-size: auto;
  }

  ${media.tablet} {
    background: url(${backGirlTabl}) no-repeat;
    background-size: 50vh;
    background-position-x: center;
    background-position-y: bottom;
  }
  ${media.mobile} {
    background: url(${backGirlMob}) no-repeat;
    background-size: auto;
    background-position-x: center;
    background-position-y: bottom;
  }
`;

export const Cont = styled.div`
  min-height: calc(100vh - 131px);
  margin-top: 60px;
`;

export const MainBack = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -98;

  background: url(${main}) no-repeat;
  background-size: auto;
  background-position-x: right;
  background-position-y: bottom;

  ${media.tablet} {
    background: url(${backVecTabl}) no-repeat;
    background-size: 100% 100vh;
    background-position-x: center;
    background-position-y: bottom;
    ${media.tabletHeight} {
      background-position-y: 200px;
    }
  }
  ${media.mobile} {
    background: url(${backVecMob}) no-repeat;
    background-size: 100% 100vh;
    background-position-x: center;
    background-position-y: bottom 100px;
    ${media.tabletHeight} {
      background-position-y: 200px;
    }
  }
`;
