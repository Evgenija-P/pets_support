import styled from '@emotion/styled';
import { colors, fontWeights, media } from '../../../styles/stylesLayout';

export const FriendsWrapperAbout = styled.div`
  display: flex;
  width: 170px;
  height: 160px;

  line-height: 1.33;
  font-weight: ${fontWeights.medium};
`;

export const AboutItem = styled.li`
  margin-bottom: 4px;

  ${media.tablet} {
    margin-bottom: 8px;
  }

  ${media.desktop} {
    margin-bottom: 12px;
  }
`;

export const Active = styled.span`
  :hover,
  :focus {
    cursor: pointer;
    color: ${colors.accent};
  }
`;
