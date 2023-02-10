import styled from '@emotion/styled';
import { colors, fontWeights, media } from '../../../styles/stylesLayout';

export const WorkDaysList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.37;
  color: ${colors.black};
  width: 120px;
  height: 160px;
  padding: 12px;
  border: 1px solid ${colors.accent};
  background: ${colors.white};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  ${media.tablet} {
    width: 140px;
    height: 180px;
  }

  ${media.desktop} {
    width: 160px;
    height: 200px;
  }
`;

export const WorkDaysItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;

  font-weight: ${fontWeights.medium};
`;

export const Worky = styled.p``;
