import styled from '@emotion/styled';
import { media, fontWeights } from '../../../styles/stylesLayout';

export const PetsNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;

  ${media.tabletAndDesktop} {
    margin-bottom: 24px;
  }
`;

export const PetsTitle = styled.h2`
  font-weight: ${fontWeights.bold};
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;

  ${media.tabletAndDesktop} {
    font-size: 28px;
    line-height: 38px;
  }
`;
