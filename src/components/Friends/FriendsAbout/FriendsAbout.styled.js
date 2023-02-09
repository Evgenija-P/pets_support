import styled from '@emotion/styled';
import { colors, fontWeights } from '../../../styles/stylesLayout';

export const FriendsWrapperAbout = styled.div`
  display: flex;
  width: 170px;
  height: 160px;

  line-height: 1.33;
  font-weight: ${fontWeights.medium};
`;

export const AboutItem = styled.li`
  margin-bottom: 4px;
`;

export const Active = styled.span`
  :hover,
  :focus {
    cursor: pointer;
    color: ${colors.accent};
  }
`;
