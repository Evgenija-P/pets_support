import styled from '@emotion/styled';
import { colors } from '../../../../../styles/stylesLayout';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 28px;
`;

export const Label = styled.label`
  font-size: 24px;
  line-height: 26.5px;
  color: #000000;
`;

export const Input = styled.input`
  height: 48px;
  border-radius: 30px;
  margin-top: 12px;
  padding-left: 12px;
  font-size: 16px;
  border-radius: 40px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  background-color: #fdf7f2;
`;

export const RequiredSign = styled.span`
  font-size: 24px;
  color: ${colors.accent};
`;

export const Error = styled.span`
  display: block;
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: red;
`;
