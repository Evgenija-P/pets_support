import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 28px;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Label = styled.div`
  font-size: 24px;
  line-height: 26.5px;
  color: #000000;
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
  margin-top: 12px;
  border-radius: 50%;

  background-color: tomato;
`;
