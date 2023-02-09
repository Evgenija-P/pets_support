import styled from '@emotion/styled';
import { media, colors, fontWeights } from '../../../styles/stylesLayout';

export const FriendsItemWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  padding: 12px 4px;
  width: 280px;
  height: 192px;
  border-radius: 20px;
  background: ${colors.white};
  /* border: 1px red solid; */
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  ${media.tabletAndDesktop} {
    width: 336px;
    height: 246px;
    gap: 32px;
    flex-direction: wrap;
  }
`;

export const FriendsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  background: ${colors.white};
  /* border: 1px green solid; */
`;

export const FriendsImgWrapper = styled.div`
  width: 110px;
  height: 76px;
  background: ${colors.white};
  /* border: 1px orange solid; */

  ${media.tabletAndDesktop} {
    width: 120px;
    height: 85px;
  }
`;

export const FriendsItemTitle = styled.p`
  font-size: 12px;
  line-height: 1.37;
  font-weight: ${fontWeights.bold};
  text-align: center;
  color: ${colors.accent};

  /* ${media.tabletAndDesktop} {
    margin-bottom: 40px;
    font-size: 36px;
    font-weight: 600;
  } */
`;

export const FriendsImg = styled.img`
  width: 90%;
  display: block;
  margin: 0 auto;
  /* background: ${colors.white};
  border: 1px blue solid; */
`;

export const FriendsURL = styled.a`
  list-style: none;
`;

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
