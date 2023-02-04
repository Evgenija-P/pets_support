import styled from '@emotion/styled';
import { media, colors } from '../../styles/stylesLayout';
import { Field } from 'formik';

export const Container = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin: auto;
`;

export const Input = styled(Field)`
  font-size: 20px;
`;
