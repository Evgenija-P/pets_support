import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
`;

export const Label = styled.div`
  font-size: 24px;
  line-height: 26.5px;
  color: #000000;
`;

export const Input = styled.input`
  position: absolute;

  width: 1px;
  height: 1px;
  padding: 0;

  margin: -1px;
  border: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);

  overflow: hidden;
  pointer-events: none;
`;

export const UploadBtn = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 182px;
  height: 182px;
  margin-top: 20px;
  border-radius: 10px;

  background-color: #fdf7f2;
`;

export const Error = styled.span`
  display: block;
  position: absolute;

  font-size: 14px;
  color: red;
`;
