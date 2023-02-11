import styled from 'styled-components';
import { media } from '../../styles/stylesLayout';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 20px;

  ${media.mobile} {
    height: 48px;
    align-items: flex-start;
  }
`;

export const LogNav = styled.div`
  display: flex;
  align-items: flex-start;

  ${media.mobileAndTablet} {
    align-items: center;
  }
`;
