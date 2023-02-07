import styled from '@emotion/styled';
import { media, colors } from '../../styles/stylesLayout';

export const Container = styled.section`
  margin: 60px 0px;
`;

export const SectionTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: ${colors.black};

  margin-bottom: 28px;

  ${media.tabletAndDesktop} {
    font-size: 48px;
    margin-bottom: 40px;
  }
`;
