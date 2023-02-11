import styled from 'styled-components';
import { media, colors, fontWeights } from '../../styles/stylesLayout';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import mobileBackground from '../../img/Auth/bg-auth-mobile.png';
import tabletBackground from '../../img/Auth/bg-auth-tablet.png';
import desktopBackground from '../../img/Auth/bg-auth-desctop.png';

export const FormContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 58px);
  background-image: url(${mobileBackground});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  ${media.tabletAndDesktop} {
    background-image: url(${tabletBackground});
    padding-top: 184px;
    padding-bottom: 268px;
    min-height: calc(100vh - 64px);
  }
  ${media.desktop} {
    background-image: url(${desktopBackground});
    padding-top: 50px;
    padding-bottom: 147px;
  }
`;
export const Title = styled.h2`
  font-size: 24px;
  font-weight: ${fontWeights.bold};
  margin-bottom: 40px;
  margin-top: 0;
  ${media.tabletAndDesktop} {
    font-size: 36px;
    font-weight: ${fontWeights.medium};
  }
`;
export const FormRegister = styled(Form)`
  position: relative;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 44px;
  padding-bottom: 40px;
  margin: 0 auto;
  ${media.tabletAndDesktop} {
    width: 608px;
    margin: 0 auto;
    padding: 60px 0 40px 0;
    background-color: ${colors.white};
    border-radius: 40px;
    -webkit-box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);
    -moz-box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);
    box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);
  }
  ${media.desktop} {
    width: 618px;
    padding: 60px 0 60px 0;
  }
  > div {
    position: relative;
  }
`;
export const ShowPassword = styled.span`
  display: inline-block;
  position: absolute;
  width: 25px;
  height: 25px;
  right: 15px;
  top: 13px;
  color: grey;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
`;
export const Input = styled(Field)`
  width: 280px;
  font-size: 14px;
  line-height: 1.3;
  padding: 11px 0 12px 14px;
  background: ${colors.background};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 16px;
  &:focus,
  &:hover {
    outline: none;
  }
  ${media.tabletAndDesktop} {
    width: 448px;
    font-size: 18px;
    padding: 14px 0 13px 32px;
  }
  ${media.desktop} {
    width: 458px;
  }
`;
export const PhoneInput = styled(MaskedInput)`
  width: 280px;
  padding: 11px 0 12px 14px;
  background: ${colors.background};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 16px;
  &:focus,
  &:hover {
    outline: none;
  }
  ${media.tabletAndDesktop} {
    width: 448px;
    padding: 14px 0 13px 32px;
    font-size: 18px;
  }
  ${media.desktop} {
    width: 458px;
  }
`;
export const Button = styled.button`
  width: 100%;
  padding: 11px 0 12px 14px;
  text-align: center;
  color: ${colors.white};
  background: ${colors.accent};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin: 24px 0 40px 0;
  transform: scale(1);
  transition: transform 0.5s;
  cursor: pointer;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  :hover:before {
    left: 100%;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${colors.gradient};
    transition: all 450ms;
  }
  :disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }
  :disabled:before {
    transform: none;
    transition: none;
  }
  ${media.tabletAndDesktop} {
    width: 458px;
    font-size: 20px;
  }
`;
export const BackButton = styled.button`
  width: 100%;
  padding: 11px 0 12px 14px;
  text-align: center;
  color: #000;
  background: ${colors.white};
  border: 1px solid ${colors.accent};
  border-radius: 40px;
  margin: -26px 0 40px 0;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.5s;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  :hover:before {
    left: 100%;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${colors.gradient};
    transition: all 450ms;
  }
  ${media.tabletAndDesktop} {
    width: 458px;
    font-size: 20px;
  }
`;
export const ErrBox = styled.div`
  position: absolute;
  white-space: nowrap;
  bottom: 0px;
  left: 15px;
  color: red;
  font-size: 14px;
  ${media.tabletAndDesktop} {
    left: 25px;
  }
`;
export const StyledLink = styled(Link)`
  color: ${colors.blue};
  margin-left: 4px;
  :hover,
  :focus {
    color: ${colors.accent};
  }
`;
export const BoxText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 12px;
`;
