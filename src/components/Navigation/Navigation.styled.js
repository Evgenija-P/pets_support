import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";
import { media } from '../../styles/stylesLayout';

export const Nav = styled.nav`
display: flex;
align-items: center;
`;


export const NavMobile = styled.div`
display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 5;
align-items: center;
    width: 100%;
    height: 100%;

    padding: 60px 20px;

    transform: translateY(-100%);

    transition: 250ms;
    transition-property: transform;
    transition-timing-function: ease;
background-color: #fdf7f2;
    overflow: auto;

`;

export const HeaderBurger = styled.div`
display: flex;
 top: 0;
    right: 0;
    z-index: 5;
 width: 100%;
justify-content: space-between;

${media.mobile} {

	width: 90%;
}
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
 ${media.tablet} {
 font-size: 48px;
line-height: 66px;
letter-spacing: 0.04em;
margin-top: 60px;
  }

`;

export const Button = styled.div`
margin-left: 20px;

`;