import styled from '@emotion/styled';
import { colors } from '../../../../../styles/stylesLayout';

export const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  gap: 30px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

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
