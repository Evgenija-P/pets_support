import styled from '@emotion/styled';
import { media, colors } from '../../../styles/stylesLayout';

export const BackDrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  background-color: ${colors.gray};
  backdrop-filter: blur(5px);
  transition-property: opacity;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
`;

export const CloseBtn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: ${colors.background};
  position: absolute;
  top: 20px;
  right: 20px;

  transition: transform 250ms ease-in-out, fill 250ms ease-in-out;

  :hover,
  :focus {
    fill: ${colors.hover};
  }

  ${media.tablet} {
    width: 44px;
    height: 44px;
  }

  ${media.desktop} {
    top: 24px;
    right: 24px;
  }
`;

export const PopUp = styled.div`
  overflow: auto;
  width: 280px;
  padding: 40px 20px;
  min-height: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background: ${colors.white};
  z-index: 1001;

  ${media.tabletAndDesktop} {
    width: 608px;
    padding: 40px 80px;
  }
`;

export const Container = styled.div`
  font-size: 17px;
  line-height: 1.47;
  color: ${colors.black};
  background-color: ${colors.white};

  ${media.tabletAndDesktop} {
    font-size: 24px;
    line-height: 1.1;
  }
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.p`
  font-size: 24px;
  line-height: 1.37;
  font-weight: 500;
  text-align: center;
  color: ${colors.accentButton};

  ${media.tabletAndDesktop} {
    font-size: 36px;
    font-weight: 600;
  }
`;

export const ContentText = styled.p`
  text-align: center;
`;

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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;

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

export const BtnGroup = styled.div`
  display: flex;
  justify-content: space-around;
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
