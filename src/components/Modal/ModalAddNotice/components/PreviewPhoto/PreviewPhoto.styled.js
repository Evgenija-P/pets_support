import styled from '@emotion/styled';
import { colors, media } from '../../../../../styles/stylesLayout';

export const Container = styled.div`
  margin-top: 28px;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  margin-top: 8px;
  border-radius: 20px;
  overflow: hidden;

  ${media.tabletAndDesktop} {
    margin-top: 12px;
  }
`;

export const Label = styled.div`
  font-size: 24px;
  line-height: 26.5px;
  color: #000000;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DelBtn = styled.button`
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -5px;
  right: 5px;

  width: 30px;
  height: 30px;

  margin-top: 12px;

  border-radius: 50%;
  border: 1px solid;

  border-color: ${colors.accent};
  color: ${colors.accent};
  background-color: ${colors.background};

  transition: color 250ms ease-in-out, background-color 250ms ease-in-out;

  :hover,
  :focus {
    color: ${colors.background};
    background-color: ${colors.accent};
  }
`;
