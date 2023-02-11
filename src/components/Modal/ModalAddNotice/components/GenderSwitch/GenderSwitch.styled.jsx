import styled from '@emotion/styled';

export const Container = styled.div``;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;
export const Item = styled.li`
  :not(:first-of-type) {
    margin-left: 50px;
  }
`;
export const Label = styled.span``;
export const RequiredFieldSign = styled.span`
  color: tomato;
`;
