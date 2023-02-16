import styled from '@emotion/styled';
import { colors, media } from '../../../../../styles/stylesLayout';

export const Btn = styled.button`
  height: 44px;
  width: 100px;
  font-size: 18px;
  line-height: 1.47;
  color: ${colors.black};

  ${media.tabletAndDesktop} {
    font-size: 24px;
    line-height: 1.1;
  }
  letter-spacing: 4%;

  border-radius: 40px;
  border: 1px solid;

  border-color: ${colors.accent};

  opacity: ${p => (p.disabled ? 0.6 : 1)};

  transition: border-color 250ms ease-in-out;

  ${media.tabletAndDesktop} {
    width: 180px;
  }
`;

export const PrimaryBtn = styled(Btn)`
  color: ${colors.white};
  background-color: ${colors.accent};

  transition: background-color 250ms ease-in-out, border-color 250ms ease-in-out;

  :hover,
  :focus {
    background-color: ${colors.hover};
    border-color: ${colors.hover};
  }
`;

export const SecondaryBtn = styled(Btn)`
  color: ${colors.black};
  background-color: ${colors.white};

  transition: border-color 250ms ease-in-out;

  :hover,
  :focus {
    border-color: ${colors.hover};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const DialogContentText = styled.p`
  text-align: center;
  /* font-size: 18px;
  line-height: 1.47;
  color: ${colors.black};

  ${media.tabletAndDesktop} {
    font-size: 24px;
    line-height: 1.1;
  } */
`;
export const DialogWrapper = styled.div`
  font-size: 17px;
  line-height: 1.47;
  color: ${colors.black};

  ${media.tabletAndDesktop} {
    font-size: 24px;
    line-height: 1.1;
  }
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
