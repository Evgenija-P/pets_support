import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
display: flex;
align-items: center;
`;


export const NavMobile = styled.div`

    position: fixed;
    top: 0;
    right: 0;
    z-index: 5;

    width: 100%;
    height: 100%;

    padding: 60px 20px;

    transform: translateX(100%);

    transition: 250ms;
    transition-property: transform;
    transition-timing-function: ease;

    overflow: auto;

`;


export const NavLinkMenuBurger = styled.div`



`;
export const NavLinkMenu = styled(NavLink)`
  color: #181C27;
  margin-left: 80px;
  font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 27px;
text-decoration: none;
 cursor: pointer;
  :focus,
  :hover {
	color: #F59256;

   text-decoration-line: underline;
  }
`;

export const Button = styled.div`
margin-left: 20px;

`;