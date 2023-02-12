import styled from '@emotion/styled';
import { media, fontWeights, colors } from '../../../styles/stylesLayout';

export const FriendsTitle = styled.h1`
  font-size: 24px;
  line-height: 1.38;
  margin: 28px 0 42px;
  text-align: center;
  color: ${colors.black};

  ${media.tablet} {
    font-size: 48px;
    margin: 88px 0 40px;
  }

  ${media.desktop} {
    margin: 72px 0 60px;
  }
`;

export const FriendsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  line-height: 1.37;
  font-weight: ${fontWeights.bold};
  color: ${colors.black};
  margin-bottom: 100px;

  ${media.tablet} {
    font-size: 14px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }

  ${media.desktop} {
    font-size: 16px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 26px;
  }
`;

export const FriendsError = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 26px;
  text-align: center;

  ${media.tabletAndDesktop} {
    font-size: 40px;
  }
`;

export const FriendsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 12px 4px;

  width: 280px;
  height: 200px;
  border-radius: 20px;
  background: ${colors.white};

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  ${media.tablet} {
    width: 336px;
    height: 250px;
    padding: 16px 4px;
  }

  ${media.desktop} {
    width: 395px;
    height: 300px;
  }

  :hover,
  :focus {
    transform: scale(1.05);
  }
`;

export const FriendsData = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const FriendsImg = styled.img`
  max-width: 90px;
  display: block;
  margin: 0 auto;

  ${media.tablet} {
    max-width: 110px;
  }

  ${media.desktop} {
    max-width: 130px;
  }
`;

export const FriendsItemTitle = styled.a`
  font-size: 12px;
  list-style: none;
  text-align: center;
  color: ${colors.accent};
  margin-bottom: 12px;

  ${media.tabletAndDesktop} {
    font-size: 16px;
    margin-bottom: 16px;
  }
`;
