import styled from '@emotion/styled';
import { colors, media } from '../../../../../styles/stylesLayout';
import { ReactComponent as DragAndDropIcon } from '../../../../../img/icons/DnD.svg';

export const Container = styled.div`
  position: relative;
  margin-top: 16px;

  ${media.tabletAndDesktop} {
    margin-top: 28px;
  }
`;

export const Label = styled.div`
  font-size: 18px;
  line-height: 1.47;
  color: ${colors.black};

  ${media.tabletAndDesktop} {
    font-size: 24px;
    line-height: 1.1;
  }
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

export const UploadBtn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 116px;
  height: 116px;
  margin-top: 8px;
  border-radius: 20px;
  border: 1px solid ${colors.background};

  background-color: ${colors.background};

  border-color: ${p => (p.isDragActive ? colors.hover : colors.background)};

  color: ${p => (p.isDragActive ? 'tomato' : 'black')};

  outline: none;

  transition: color 250ms ease-in-out, border-color 250ms ease-in-out,
    fill 250ms ease-in-out;

  :focus,
  :hover {
    color: ${colors.hover};
    border-color: ${colors.hover};
  }

  ${media.tabletAndDesktop} {
    width: 140px;
    height: 140px;
    margin-top: 12px;
  }
`;

export const DnDIcon = styled(DragAndDropIcon)`
  width: 50%;
  height: 50%;

  fill: ${colors.hover};
`;

export const Error = styled.span`
  display: block;
  font-size: 14px;
  color: red;
`;

export const LoadInstruction = styled.span`
  display: block;
  font-size: 14px;
`;

export const MetaDataContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
`;
