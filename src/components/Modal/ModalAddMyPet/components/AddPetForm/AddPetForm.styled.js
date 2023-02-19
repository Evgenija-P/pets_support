import styled from '@emotion/styled';
import { colors, media } from '../../../../../styles/stylesLayout';

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  margin-top: 40px;

  gap: 12px;

  ${media.tabletAndDesktop} {
    flex-direction: row;
    gap: 20px;
  } ;
`;

export const Btn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;

  height: 44px;

  font-size: 20px;
  line-height: 27px;
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
    background-color: ${p => (p.disabled ? colors.accent : colors.hover)};
    border-color: ${p => (p.disabled ? colors.accent : colors.hover)};
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

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;

  ${media.tabletAndDesktop} {
    width: 25px;
    height: 25px;
  }
`;
