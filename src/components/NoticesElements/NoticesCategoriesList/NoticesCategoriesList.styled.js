import styled from '@emotion/styled';
import { media, colors, fontWeights } from '../../../styles/stylesLayout';

import noticesFavoriteIcon from '../../../img/icons/noticesFavoriteIcon.svg';
import noticesFavoriteIconActive from '../../../img/icons/noticesFavoriteIconActive.svg';

export const NoticesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(50px, 1fr));
  gap: 32px;

  margin: 30px 0px;

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(50px, 1fr));
  }

  ${media.tabletAndDesktop} {
    margin: 60px 0px;
  }

  ${media.desktop} {
    grid-template-columns: repeat(4, minmax(50px, 1fr));
  }
`;

export const NoticesItem = styled.div`
  border-radius: 0px 0px 20px 20px;
  box-shadow: 7px 4px 15px 0px ${colors.shadow};

  overflow: hidden;
`;

export const NoticesTop = styled.div`
  position: relative;
  width: 100%;

  button {
    position: absolute;
    top: 20px;
    right: 12px;

    width: 44px;
    height: 44px;

    background-color: ${colors.white};
    border: none;
    border-radius: 44px;

    opacity: 60%;
    backdrop-filter: blur(5px);

    cursor: pointer;
  }
`;

export const NoticesImage = styled.img`
  display: block;

  width: 100%;
  height: 288px;

  object-fit: cover;
`;

export const NoticesBadge = styled.span`
  position: absolute;
  top: 20px;

  display: flex;
  align-items: center;

  width: 158px;
  height: 28px;
  padding: 8px 20px;

  border-radius: 0px 20px 20px 0px;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);

  font-weight: ${fontWeights.bold};
  font-size: 12px;
  letter-spacing: 0.04em;

  ${media.tabletAndDesktop} {
    font-size: 16px;
  }
`;

export const NoticesButtonFavorite = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  align-items: center;

  width: 44px;
  height: 44px;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);

  cursor: pointer;

  background-image: url(${noticesFavoriteIcon});
  background-repeat: no-repeat;
  background-position: center;

  &:hover,
  &:focus {
    background-image: url(${noticesFavoriteIconActive});
  }
`;

export const NoticesDescription = styled.div`
  padding: 20px 16px 32px 16px;
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
  &:focus {
    border-color: ${colors.accentButton};
    outline-color: ${colors.accentButton};
    color: ${colors.accentButton};
  }

  cursor: pointer;
`;
