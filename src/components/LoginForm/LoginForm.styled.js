import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { media, colors, fontWeights } from '../../styles/stylesLayout';
import { Form, Field } from 'formik';

export const Container = styled.div`
  /* display: flex;
  align-items: center;
  flex-direction: column; */

  width: 280px;
  padding-inline: 0px;
  padding-top: 42px;
  padding-bottom: 0px;
  /* border-radius: 40px; */
  background-color: ${colors.background};
  margin-inline: auto;
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

  color: ${colors.black}; ;
`;

export const WraperForm = styled(Form)`
  display: flex;
  align-items: c;
  /* justify-content: center; */
  flex-direction: column;
`;

export const Input = styled(Field)`
  width: 100%;

  height: 40px;
  padding-left: 14px;

  font-family: 'Manrope';
  font-weight: ${fontWeights.regular};
  font-size: 14px;
  line-height: 1.4;
  align-items: center;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 0.6);

  background: transparent;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 16px;

  :hover,
  :focus {
    /* color: #212529; */
    border: 2px solid ${colors.accent};
    /* border-color: #bdbdbd; */
    outline: 0;
  }
`;

export const Button = styled.button`
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
  font-weight: ${fontWeights.regular};
  font-size: 12px;
  line-height: 1.33px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;

  :hover,
  :focus {
    color: ${colors.black};
    border: 2px solid ${colors.accent};
    background-color: ${colors.white};
  }
`;

export const Text = styled.div`
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

export const Link1 = styled(Link)`
  color: ${colors.blue};
`;
