import styled from '@emotion/styled';
import { media, colors, fontWeights } from '../../../styles/stylesLayout';

export const PetsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 820px;

  ${media.tabletAndDesktop} {
    gap: 22px;
  }
`;

export const PetsItem = styled.li`
  padding: 16px 20px;
  background-color: ${colors.white};

  ${media.tabletAndDesktop} {
    display: flex;
    gap: 32px;

    border-radius: 40px;
    padding: 20px;
  }
`;

export const PetsImage = styled.img`
  display: block;

  width: 240px;
  height: 240px;

  border-radius: 20px;

  object-fit: contain;
  background-color: gray;

  ${media.tabletAndDesktop} {
    width: 160px;
    height: 160px;
  }
`;

export const PetsDescription = styled.div``;

export const PetsTags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${media.tabletAndDesktop} {
    width: 470px;

    font-size: 16px;
  }

  ${media.desktop} {
    width: 580px;
  }
`;

export const PetsTag = styled.span`
  display: inline-block;

  font-weight: ${fontWeights.medium};
  font-size: 14px;
  font-size: 14px;
  line-height: 1.55;
  letter-spacing: 0.04em;

  ${media.tabletAndDesktop} {
    font-size: 16px;
  }
`;

export const PetsButton = styled.button``;
