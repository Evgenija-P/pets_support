import styled from '@emotion/styled';
import { colors, fontWeights, media } from '../../../styles/stylesLayout';

export const FriendsWrapperAbout = styled.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  width: 190px;
  height: 140px;
  background: ${colors.white};

  ${media.tabletAndDesktop} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const FriendsAboutList = styled.ul`
  font-family: 'Manrope';
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 4px; */
  margin-top: 10px;
  font-size: 12px;
  font-weight: ${fontWeights.medium};
  line-height: 1.33;
  color: ${colors.black};
  border: 1px red solid;

  ${media.tabletAndDesktop} {
    margin-top: 16px;
  }
`;

export const Active = styled.span`
  :hover,
  :focus {
    cursor: pointer;
    color: ${colors.accent};
  }
`;
