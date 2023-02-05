import styled from '@emotion/styled';
import { media, colors, fontWeights } from '../../../styles/stylesLayout';

export const NoticesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const NoticesItem = styled.div`
  box-shadow: 7px 4px 15px 0px ${colors.shadow};
`;

export const NoticesTop = styled.div`
  position: relative;

  width: 100%;
  height: 288px;
`;

export const NoticesBadge = styled.span`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 158px;
  height: 28px;
  padding: 8px 20px;

  border-radius: 0px 20px 20px 0px;
  background-color: ${colors.white};
`;

export const NoticesDescription = styled.div`
  padding: 20px 16px 32px 16px;
  border-radius: 0px 0px 20px 20px;

  background-color: ${colors.white};
`;

export const NoticesTitle = styled.h2`
  font-weight: ${fontWeights.bold};
  font-size: 28px;
  line-height: 1.35;
  letter-spacing: -0.01em;

  margin-bottom: 20px;
`;

export const NoticesTags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 50px;
`;

export const NoticesTag = styled.span`
  display: block;

  font-weight: ${fontWeights.medium};
  font-size: 16px;
  line-height: 22px;
`;

export const NoticesButton = styled.button`
  width: 248px;
  height: 38px;

  border-radius: 40px;
  border: 2px solid ${colors.accent};
  background-color: ${colors.white};

  font-weight: ${fontWeights.medium};
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;

  text-align: center;

  color: ${colors.accent};

  &:hover,
  &focus {
    border-color: ${colors.accentButton};
    outline-color: ${colors.accentButton};
    color: ${colors.accentButton};
  }

  cursor: pointer;
`;
