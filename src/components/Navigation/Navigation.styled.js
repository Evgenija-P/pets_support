import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { colors, media } from '../../styles/stylesLayout';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavMobile = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0px;
  z-index: 5;
  align-items: center;
  width: 100%;
  height: 100%;

  transform: translateY(-100%);

  transition: 250ms;
  transition-property: transform;
  transition-timing-function: ease;
  background-color: #fdf7f2;
  overflow: auto;
`;

export const HeaderBurger = styled.div`
  display: flex;
  padding-top: 20px;
  z-index: 5;
  width: 95%;
  align-items: baseline;

  justify-content: space-between;
`;
export const NavLinkMenuBurger = styled.div``;
export const NavLinkMenu = styled(NavLink)`
  color: #181c27;
  margin-left: 80px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  text-decoration: none;
  cursor: pointer;
  :focus,
  :hover {
    color: #f59256;

    text-decoration-line: underline;
  }
  ${media.tablet} {
    font-size: 48px;
    line-height: 66px;
    letter-spacing: 0.04em;
    margin-top: 60px;
    margin-left: 0;
  }

  ${media.mobile} {
    font-size: 32px;
    line-height: 44px;
    margin-top: 40px;
    letter-spacing: 0.04em;
    margin-left: 0;
  }

  &.active {
    color: ${colors.accent};
  }
`;

export const Button = styled.div`
  margin-left: 20px;
`;
