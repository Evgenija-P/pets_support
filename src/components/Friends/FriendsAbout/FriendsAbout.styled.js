import styled from '@emotion/styled';
import { colors, fontWeights, media } from '../../../styles/stylesLayout';

export const FriendsWrapperAbout = styled.li`
  display: flex;
  align-items: center;
  width: 170px;
  height: 140px;
  background: ${colors.white};

  ${media.tabletAndDesktop} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const FriendsAboutList = styled.ul`
  font-family: 'Manrope';
  width: 170px;
  height: 160px;
  margin-top: 10px;
  font-size: 12px;
  font-weight: ${fontWeights.medium};
  line-height: 1.33;
  color: ${colors.black};

  ${media.tabletAndDesktop} {
    margin-top: 16px;
  }
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
