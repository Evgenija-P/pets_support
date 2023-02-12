import styled from '@emotion/styled';
import { colors, media } from '../../../../../styles/stylesLayout';

export const Container = styled.div`
  position: relative;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;
export const Item = styled.li`
  :not(:first-of-type) {
    margin-left: 80px;
  }
`;
export const Label = styled.span`
  font-size: 18px;
  line-height: 1.47;
  color: ${colors.black};

  ${media.tabletAndDesktop} {
    font-size: 24px;
    line-height: 1.1;
  }
`;
export const RequiredFieldSign = styled.span`
  color: tomato;
`;

export const Error = styled.span`
  display: block;
  position: absolute;
  bottom: -20px;
  left: 0px;
  font-size: 14px;
  color: red;
`;
