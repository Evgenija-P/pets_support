import styled from '@emotion/styled';
import { media } from '../../../../../styles/stylesLayout';

export const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 12px;
  column-gap: 8px;
  margin-top: 20px;

  list-style: none;

  ${media.tabletAndDesktop} {
    row-gap: 16px;
    column-gap: 12px;
    margin-top: 28px;
  }
`;
export const CategoryItem = styled.li``;
