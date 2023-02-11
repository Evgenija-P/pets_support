import styled from '@emotion/styled';
import { media } from '../../styles/stylesLayout';

export const UserInfoContainer = styled.div`
  margin: 60px 0px;

  display: flex;
  flex-direction: column;
  gap: 48px;

  ${media.tabletAndDesktop} {
    margin: 80px 0px;
  }

  ${media.desktop} {
    flex-direction: row;
    gap: 32px;
  }
`;
