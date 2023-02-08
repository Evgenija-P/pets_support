import styled from '@emotion/styled';
import { colors, fontWeights, media } from '../../../styles/stylesLayout';

export const FriendsWrapperAbout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 150px;
  height: 140px;
  background: ${colors.white};

  ${media.tabletAndDesktop} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const FriendsAboutList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
  font-size: 12px;
  font-weight: ${fontWeights.medium};
  line-height: 1.33;
  color: ${colors.black};

  ${media.tabletAndDesktop} {
    margin-top: 16px;
  }
`;

export const FriendsAboutItem = styled.li`
  :hover,
  :focus {
    cursor: pointer;
    color: ${colors.accent};
  }
`;
