import styled from '@emotion/styled';
import { colors, fontWeights } from '../../../styles/stylesLayout';

export const FriendsWrapperAbout = styled.div`
  width: 150px;
  height: 140px;
  background: ${colors.white};
  /* border: 1px blue solid; */
`;

export const FriendsAboutList = styled.ul`
  font-size: 12px;
  font-weight: ${fontWeights.medium};
  line-height: 1.33;
  color: ${colors.black};
`;

export const FriendsAboutItem = styled.li`
  margin-bottom: 4px;
  :hover,
  :focus {
    cursor: pointer;
    color: ${colors.accent};
  }
`;
