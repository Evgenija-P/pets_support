import styled from '@emotion/styled';
import { media } from '../../styles/stylesLayout';
import background from '../../img/Homepage/hp-figure-desktop.png';

export const ImgItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 590px;
  height: 640px;
`;

export const Title = styled.h2`
margin-right: 70px;
`

export const Scene = styled.div`
  background: url(${background}) no-repeat;
`;

export const Img = styled.img`
max-width: 100%;
height: auto;
`;