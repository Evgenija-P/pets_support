import styled from '@emotion/styled';
import { media, fontWeights, colors } from '../../../styles/stylesLayout';

export const FriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  ${media.tabletAndDesktop} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const FriendsTitle = styled.p`
  font-size: 24px;
  line-height: 1.38;
  margin-top: 42px;
  margin-bottom: 24px;
  font-weight: ${fontWeights.bold};
  text-align: center;
  color: ${colors.black};

  ${media.tablet} {
    font-size: 48px;
    margin-top: 88px;
    margin-bottom: 40px;
  }

  ${media.desktop} {
    margin-top: 72px;
    margin-bottom: 60px;
  }
`;
