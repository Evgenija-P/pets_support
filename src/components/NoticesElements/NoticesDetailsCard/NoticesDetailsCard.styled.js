import styled from '@emotion/styled';
import { media, colors, fontWeights } from '../../../styles/stylesLayout';

export const NoticesBox = styled.div`
  margin-bottom: 28px;

  ${media.tabletAndDesktop} {
    display: flex;
  }
`;

export const NoticesCategory = styled.span`
  position: absolute;
  top: 80px;

  display: flex;
  align-items: center;

  width: 158px;
  height: 28px;
  padding: 6px 20px;

  border-radius: 0px 20px 20px 0px;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);

  font-weight: ${fontWeights.bold};
  font-size: 12px;
  letter-spacing: 0.04em;

  ${media.tabletAndDesktop} {
    top: 52px;
    font-size: 16px;
  }
`;

export const NoticesImage = styled.img`
  display: block;

  width: 240px;
  height: 240px;

  object-fit: cover;

  border-radius: 0px 0px 40px 40px;
  box-shadow: 7px 4px 15px 0px ${colors.shadow};

  ${media.tabletAndDesktop} {
    width: 328px;
    height: 288px;
  }
`;

export const NoticesInfo = styled.div`
  margin-top: 16px;

  ${media.tabletAndDesktop} {
    margin-left: 20px;
    margin-top: 0px;
  }
`;

export const NoticesTitle = styled.h2`
  font-weight: ${fontWeights.bold};
  font-size: 28px;
  line-height: 1.35;
  letter-spacing: -0.01em;

  margin-bottom: 8px;

  ${media.tabletAndDesktop} {
    margin-bottom: 20px;
    min-width: 328px;
  }
`;

export const Notices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NotiseColumn = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const NoticesTag = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  flex: 1;

  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  ${media.tabletAndDesktop} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const NoticesText = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 80%;
  flex: 2;

  font-weight: ${fontWeights.medium};
  font-size: 14px;
  line-height: 19px;

  ${media.tabletAndDesktop} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const NoticesComment = styled.p`
  font-weight: ${fontWeights.medium};
  font-size: 14px;
  line-height: 19px;

  ${media.tabletAndDesktop} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const ButtonBlock = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column-reverse;

  ${media.tabletAndDesktop} {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    margin-top: 32px;
  }
`;

export const NoticesButtonContact = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 240px;
  height: 40px;

  border-radius: 40px;
  border: 2px solid ${colors.accent};
  background-color: ${colors.white};

  font-weight: ${fontWeights.medium};
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;

  color: ${colors.black};

  &:hover,
  &:focus {
    background-color: ${colors.accent};

    color: ${colors.white};
  }

  cursor: pointer;

  ${media.tabletAndDesktop} {
    width: 160px;
    margin-left: 12px;
    margin-top: 0px;
  }
`;

export const NoticesButtonFavorite = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  margin-top: 12px;
  padding: 9px 50px;

  width: 240px;
  height: 40px;

  border-radius: 40px;
  border: 2px solid ${colors.accent};
  background-color: ${colors.white};

  font-weight: ${fontWeights.medium};
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;

  color: ${colors.black};
  fill: ${colors.accent};

  &:hover,
  &:focus {
    background-color: ${colors.accent};

    color: ${colors.white};
    fill: ${colors.white};
  }

  cursor: pointer;

  ${media.tabletAndDesktop} {
    width: 160px;
    margin-top: 0px;
    padding: 9px 15px;
  }
`;

export const NoticesButtonDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 240px;
  height: 40px;
  margin-top: 12px;
  padding: 9px 50px;

  border-radius: 40px;
  border: 2px solid ${colors.accent};
  background-color: ${colors.white};

  font-weight: ${fontWeights.medium};
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;

  color: ${colors.black};
  fill: ${colors.accent};
  fill-opacity: 1;

  &:hover,
  &:focus {
    background-color: ${colors.accent};

    color: ${colors.white};
    fill: ${colors.white};
  }

  cursor: pointer;

  ${media.tabletAndDesktop} {
    width: 160px;
    margin-right: 12px;
    margin-top: 0px;
    padding: 9px 15px;
  }
`;

export const NoticesLink = styled.a`
  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;
