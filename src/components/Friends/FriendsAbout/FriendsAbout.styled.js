import styled from '@emotion/styled';
import { colors, fontWeights, media } from '../../../styles/stylesLayout';

export const FriendsWrapperAbout = styled.div`
  display: flex;
  width: 180px;

  line-height: 1.33;
  font-weight: ${fontWeights.medium};
  ${media.tablet} {
    width: 210px;
  }
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
