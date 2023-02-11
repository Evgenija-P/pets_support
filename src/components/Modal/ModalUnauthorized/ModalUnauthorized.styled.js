import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { media, colors } from '../../../styles/stylesLayout';

export const ModalWrapper = styled.div`
  overflow: auto;
  width: 320px;
  padding: 40px 20px;
  height: 230px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background: ${colors.white};
  z-index: 1000;

  /* ${media.tabletAndDesktop} {
    width: 608px;
    padding: 40px 80px;
    min-height: 570px;
  } */
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;
// export const ButtonLog = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 40px;
//   width: 130px;

//   background: #f59256;
//   :last-child {
//     margin-left: 20px;
//   }
// `;

export const ButtonR = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #f59256;
  border-radius: 40px;
  width: 130px;

  background: #fff;
  :last-child {
    margin-left: 20px;
  }

  ${media.mobile} {
    height: 35px;
    :last-child {
      margin-left: 12px;
    }
  }
`;

// export const NavLinkLog = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #fff;
//   padding: 10px 28px;

//   text-decoration: none;

//   ${media.mobile} {
//     padding: 8px 28px;
//   }
// `;

export const NavLinkR = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  text-decoration: none;
  padding: 10px 28px;
  ${media.mobile} {
    padding: 8px 28px;
  }
`;

export const Sp = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;

  ${media.mobile} {
    font-size: 14px;
    line-height: 19px;
  }
`;
