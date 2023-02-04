import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
display: flex;
align-items: center;
`;


export const NavDesk = styled.div`



`;


export const Bar = styled.div`



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