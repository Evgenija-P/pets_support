import styled from '@emotion/styled';
import { colors } from '../../../styles/stylesLayout';

export const WorkDaysList = styled.ul`
  position: absolute;
  width: 120px;
  height: 160px;
  padding: 12px;
  border: 1px solid ${colors.accent};
  background: ${colors.white};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WorkDaysItem = styled.li`
  color: ${colors.black};
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Worky = styled.p``;
