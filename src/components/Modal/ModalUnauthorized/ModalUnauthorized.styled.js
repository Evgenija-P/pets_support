import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { media, colors } from '../../../styles/stylesLayout';

export const ModalWrapper = styled.div`
  overflow: auto;
  width: 270px;
  padding: 40px 20px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background: ${colors.white};
  z-index: 1000;

  ${media.tabletAndDesktop} {
    width: 320px;
    padding: 40px 20px;
    height: 230px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonR = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #f59256;
  border-radius: 40px;
  width: 120px;
  height: 35px;

  ${media.tabletAndDesktop} {
    width: 130px;
    height: 50px;
  }
  :hover,
  :focus {
    background: ${colors.accent};
  }
`;

export const NavLinkR = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.black};
  text-decoration: none;
  padding: 8px 28px;

  ${media.tabletAndDesktop} {
    padding: 10px 28px;
  }
  :hover,
  :focus {
    color: ${colors.white};
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.45;
  text-align: center;

  ${media.mobile} {
    font-size: 14px;
    line-height: 1.35;
  }
`;

export const TextWrapper = styled.div`
  margin: 20px 0;
`;
