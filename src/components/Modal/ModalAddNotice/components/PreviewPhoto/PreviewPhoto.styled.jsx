import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const DelBtn = styled.button`
  position: absolute;
  cursor: pointer;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: tomato;
`;
