import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { media, colors, fontWeights } from '../../styles/stylesLayout';

export const AuthNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
  margin-right: auto;
  ${media.desktop} {
    gap: 20px;
  }
`;

export const AuthNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  color: ${colors.black};
  padding: 8px 28px;

  border-radius: 40px;
  border: 2px solid #f59256;

  font-weight: ${fontWeights.medium};
  font-size: 14px;
  line-height: 1.36;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.04em;
  ${media.tabletAndDesktop} {
    padding: 10px 28px;
    font-size: 20px;
    line-height: 1.35;
  }
  &.active {
    background: ${colors.accent};
    color: ${colors.white};
  }
`;
