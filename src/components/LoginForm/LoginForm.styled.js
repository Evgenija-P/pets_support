import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { media, colors, fontWeights } from '../../styles/stylesLayout';
import { Form, Field } from 'formik';

import mobileBackground from '../../img/Auth/bg-auth-mobile.png';
import tabletBackground from '../../img/Auth/bg-auth-tablet.png';
import desktopBackground from '../../img/Auth/bg-auth-desctop.png';

export const Container = styled.div`
  padding-top: 42px;

  background-image: url(${mobileBackground});
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
  height: calc(100vh - 74px);

  ${media.tablet} {
    padding-top: 204px;

    background-image: url(${tabletBackground});
    height: calc(100vh - 96px);
  }

  ${media.desktop} {
    padding-top: 80px;

    background-image: url(${desktopBackground});
    height: calc(100vh - 88px);
  }
`;

export const FormLogin = styled(Form)`
  width: 280px;
  padding-inline: 0px;

  padding-bottom: 0px;

  background-color: transparent;
  margin-inline: auto;
  box-sizing: border-box;

  ${media.tablet} {
    width: 608px;

    padding: 60px 80px 40px 80px;

    background-color: ${colors.white};
    border-radius: 40px;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }

  ${media.desktop} {
    width: 618px;

    padding: 60px 80px;

    background-color: ${colors.white};
    border-radius: 40px;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }
`;

export const Title = styled.h1`
  margin-bottom: 40px;

  font-family: 'Manrope';
  font-weight: ${fontWeights.bold};
  font-size: 24px;
  line-height: 1.4;
  letter-spacing: 0.04em;

  align-items: center;
  text-align: center;

  color: ${colors.black};

  ${media.tablet} {
    font-weight: ${fontWeights.medium};
    font-size: 36px;
  }
`;

export const FieldLogin = styled.div`
  margin-bottom: 16px;
`;
export const FieldPass = styled.div`
  margin-bottom: 40px;
`;

export const Input = styled(Field)`
  box-sizing: border-box;

  width: 100%;

  height: 40px;
  padding-left: 14px;

  font-family: 'Manrope';
  font-weight: ${fontWeights.regular};
  font-size: 14px;
  line-height: 1.4;
  align-items: center;
  letter-spacing: 0.04em;

  color: ${colors.black};

  background: transparent;
  border: 1px solid rgba(245, 146, 86, 0.5);

  border-radius: 40px;

  &::placeholder {
    font-style: normal;
    font-weight: ${fontWeights.regular};
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: 0.04em;
    color: ${colors.gray};
  }

  :hover,
  :focus {
    border: 2px solid ${colors.accent};
    outline: 0;
  }

  ${media.tablet} {
    height: 52px;
    padding-left: 32px;

    font-size: 18px;
    line-height: 1.38;

    background: ${colors.background};

    &::placeholder {
      font-style: normal;
      font-weight: ${fontWeights.regular};
      font-size: 18px;
      line-height: 1.38;
      letter-spacing: 0.04em;
      color: ${colors.gray};
    }
  }

  ${media.desktop} {
    height: 52px;
    padding-left: 32px;

    font-size: 18px;
    line-height: 1.38;

    background: ${colors.background};

    &::placeholder {
      font-style: normal;
      font-weight: ${fontWeights.regular};
      font-size: 18px;
      line-height: 1.38;
      letter-spacing: 0.04em;
      color: ${colors.gray};
    }
  }
`;

export const Button = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 280px;
  height: 44px;

  padding: 10px 28px;
  margin-bottom: 40px;

  border: none;
  border-radius: 40px;

  color: ${colors.white};
  background-color: ${colors.accent};

  cursor: pointer;

  font-family: 'Manrope';
  font-weight: ${fontWeights.medium};
  font-size: 20px;
  line-height: 1.35px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;

  :hover,
  :focus {
    color: ${colors.black};
    border: 2px solid ${colors.accent};
    background-color: ${colors.white};
  }

  ${media.tablet} {
    width: 458px;
  }

  ${media.desktop} {
    width: 458px;
    height: 48px;
  }
`;

export const Text = styled.p`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: ${fontWeights.regular};
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;

  color: ${colors.gray};
`;

export const Link = styled(NavLink)`
  display: inline-block;
  color: ${colors.blue};
  text-decoration: none;
`;

export const ErrorText = styled.div`
  display: flex;
  align-items: center;

  margin-top: 8px;

  font-family: 'Manrope';
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0.03em;

  color: #e53e3e;
`;
