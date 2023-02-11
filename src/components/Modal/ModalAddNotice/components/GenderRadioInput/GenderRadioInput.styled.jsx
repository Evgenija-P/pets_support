import styled from '@emotion/styled';

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
export const Labellll = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100px;
  color: ${p => (p.active ? 'tomato' : 'black')};

  /* border: 1px solid teal; */

  :hover,
  :focus {
    color: tomato;
  }
`;
export const Text = styled.span`
  font-size: 20px;
`;
