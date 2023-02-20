import styled from '@emotion/styled';
import { media, colors, fontWeights } from '../../../styles/stylesLayout';
import noticesFavoriteIcon from '../../../img/icons/noticesFavoriteIcon.svg';
import { ReactComponent as FavoriteIcon } from '../../../img/icons/favoriteNotices.svg';
import { ReactComponent as DeleteIcon } from '../../../img/icons/delete.svg';
export const NoticesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(200px, 1fr));
  gap: 32px;

  margin: 30px 0px;

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }

  ${media.tabletAndDesktop} {
    margin: 60px 0px;
  }

  ${media.desktop} {
    grid-template-columns: repeat(4, minmax(200px, 1fr));
  }
`;

export const NoticesItem = styled.li`
  border-radius: 0px 0px 20px 20px;
  box-shadow: 7px 4px 15px 0px ${colors.shadow};

  overflow: hidden;
  background-color: ${colors.white};

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.tabletAndDesktop} {
    &:hover {
      transform: scale(1.03);
    }
  }
`;

export const NoticesTop = styled.div`
  position: relative;
  width: 100%;
`;

export const NoticesNav = styled.div`
  position: absolute;
  top: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 95%;
`;

export const NoticesBadge = styled.div`
  width: 158px;
  padding: 8px 20px;

  border-radius: 0px 20px 20px 0px;
  background: rgba(255, 255, 255, 0.6);

  font-weight: ${fontWeights.bold};
  font-size: 12px;
  letter-spacing: 0.04em;
`;

export const NoticesButtonFavorite = styled.button`
  display: flex;
  align-items: center;

  width: 44px;
  height: 44px;

  border: none;
  outline: none;
  border-radius: 44px;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(4px);

  background-image: url(${noticesFavoriteIcon});
  background-repeat: no-repeat;
  background-position: center;

  &:hover,
  &:focus {
    scale: 1.4;
  }
`;
export const NoticesFavorite = styled(FavoriteIcon)`
  stroke: ${colors.accentButton};
  fill: ${props => {
    let color = 'rgba(255, 255, 255, 0.6)';

    if (props.isfavorite === 'true') {
      color = colors.accentButton;
    }

    if (!props.isfavorite === 'false') {
      color = 'rgba(255, 255, 255, 0.6)';
    }

    return color;
  }};
`;

export const NoticesButtonFavoriteV2 = styled.button`
  width: 44px;
  height: 44px;
  border: none;
  outline: none;
  border-radius: 44px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover,
  &:focus {
    background: rgba(255, 255, 255, 1);
    scale: 1.4;
  }

  &:disabled {
    background-color: rgba(245, 146, 86, 1);
  }
`;

export const NoticesImage = styled.img`
  display: block;

  width: 100%;
  height: 288px;
  object-fit: cover;
`;

export const NoticesDescription = styled.div`
  padding: 20px 16px 32px 16px;
  max-height: 420px;
`;

export const NoticesTitle = styled.h2`
  font-weight: ${fontWeights.bold};
  font-size: 28px;
  line-height: 1.35;
  letter-spacing: -0.01em;

  margin-bottom: 20px;
`;

export const NoticesTags = styled.div`
  min-height: 90px;
`;

export const NoticesTag = styled.p`
  :not(:last-child) {
    margin-bottom: 8px;
  }

  font-weight: ${fontWeights.medium};
  font-size: 16px;
`;

export const NoticesButton = styled.button`
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px 28px;

  border-radius: 40px;
  border: 2px solid ${colors.accent};
  background-color: ${colors.white};

  font-weight: ${fontWeights.medium};
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  text-align: center;
  color: ${colors.accent};

  &:hover,
  &:focus {
    border-color: ${colors.accentButton};
    outline-color: ${colors.accentButton};
    color: ${colors.accentButton};
  }

  :not(:last-child) {
    margin-bottom: 12px;
  }

  cursor: pointer;
`;

export const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const BottonsWrapper = styled.div`
  padding-bottom: 32px;
  padding-left: 12px;
  padding-right: 12px;

  ${media.tablet} {
    padding-left: 44px;
    padding-right: 44px;
  }

  /* ${media.tabletAndDesktop} {
    margin: 60px 0px;
  } */

  ${media.desktop} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
export const Wrapper = styled.div``;

export const NoticesButtonDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;

  width: 100%;
  padding: 8px 28px;

  border-radius: 40px;
  border: 2px solid ${colors.accent};
  background-color: ${colors.white};

  font-weight: ${fontWeights.medium};
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  text-align: center;
  color: ${colors.accent};

  &:hover,
  &:focus {
    border-color: ${colors.accentButton};
    outline-color: ${colors.accentButton};
    color: ${colors.accentButton};
  }
`;
export const NoticesIconDelete = styled(DeleteIcon)`
  fill-opacity: 0.6;

  margin-left: 10px;
  /* stroke: ${colors.accentButton}; */
  fill: ${colors.accentButton};
  .delete:hover & {
    stroke: ${colors.accentButton};
  }
`;
export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-left: 20px;

  ${media.tabletAndDesktop} {
    width: 25px;
    height: 25px;
  }
`;
