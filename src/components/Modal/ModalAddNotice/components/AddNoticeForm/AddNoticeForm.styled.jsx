import styled from '@emotion/styled';
import { colors } from '../../../../../styles/stylesLayout';
import ClipLoader from 'react-spinners/ClipLoader';

export const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  gap: 30px;
`;

export const Btn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;

  width: 180px;
  height: 44px;

  font-size: 20px;
  line-height: 27px;
  letter-spacing: 4%;

  border-radius: 40px;
  border: 1px solid ${colors.accent};

  opacity: ${p => (p.disabled ? 0.6 : 1)};
`;

export const PrimaryBtn = styled(Btn)`
  color: ${colors.white};
  background-color: ${colors.accent};
`;

export const SecondaryBtn = styled(Btn)`
  color: ${colors.black};
  background-color: ${colors.white};
`;

export const Loader = styled(ClipLoader)`
  position: absolute;
  right: 30px;
`;
