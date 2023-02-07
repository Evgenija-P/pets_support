import styled from '@emotion/styled';
import { media, colors, fontWeights } from '../../../styles/stylesLayout';

export const NoticesCategoriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const NoticesCategoriesButton = styled.button`
  padding: 8px 28px;
  border-radius: 40px;
  border: 2px solid ${colors.accent};
  outline-color: ${colors.accent};

  background-color: ${colors.white};

  font-size: 14px;
  font-weight: ${fontWeights.medium};
  line-height: 0.75;

  ${media.tabletAndDesktop} {
    padding: 10px 28px;
    font-size: 20px;
  }

  &:hover,
  &:focus {
    background-color: ${colors.accent};
    color: ${colors.white};
  }
`;
