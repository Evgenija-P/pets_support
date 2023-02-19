import styled from '@emotion/styled';
import { media } from '../../../styles/stylesLayout';
export const Wrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.tabletAndDesktop} {
    height: 60px;
  }
`;
