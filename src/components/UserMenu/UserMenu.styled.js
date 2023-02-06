import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";
import { media } from '../../styles/stylesLayout';


export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 40px;
  width: 100%;
  background: #f59256;

  ${media.mobile} {
    height: 35px;
  }
`;

export const NavLinkDec = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 10px 28px;
  text-decoration: none;

    ${media.mobile} {
    padding: 8px 28px;
  }
`;

export const Sp = styled.span`
  margin-left: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;

  ${media.mobile} {
    font-size: 14px;
    line-height: 19px;
  }
`;