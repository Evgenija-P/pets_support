import styled from '@emotion/styled';
import { media, colors, fontWeights } from '../../styles/stylesLayout';

export const PetsNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;

  ${media.tabletAndDesktop} {
    margin-bottom: 24px;
  }
`;

export const PetsTitle = styled.h2`
  font-weight: ${fontWeights.bold};
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;

  ${media.tabletAndDesktop} {
    font-size: 28px;
    line-height: 38px;
  }
`;

export const PetsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;

  border-radius: 20px;
  padding: 20px;
  background-color: ${colors.white};

  box-shadow: 7px 4px 15px 0px ${colors.shadow};

  :not(:last-child) {
    margin-bottom: 20px;
  }

  ${media.tabletAndDesktop} {
    display: flex;
    flex-direction: row;
    gap: 32px;

    border-radius: 40px;

    :not(:last-child) {
      margin-bottom: 22px;
    }
  }
`;

export const PetImage = styled.img`
  display: block;

  min-width: 240px;
  min-height: 240px;

  border-radius: 20px;
  background-color: gray;

  object-fit: contain;

  ${media.tabletAndDesktop} {
    width: 160px;
    height: 160px;

    border-radius: 40px;
  }
`;

export const PetDescription = styled.div`
  position: relative;
`;

export const PetTags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${media.tabletAndDesktop} {
    gap: 16px;
  }
`;

export const PetTag = styled.p`
  font-weight: ${fontWeights.medium};
  font-size: 14px;
  line-height: 1.55;
  letter-spacing: 0.04em;

  ${media.tabletAndDesktop} {
    font-size: 16px;
  }

  span {
    display: inline-block;
    font-weight: ${fontWeights.bold};
    margin-right: 4px;
  }
`;

export const PetButtonDelete = styled.button`
  position: absolute;
  right: 0;

  width: 44px;
  height: 44px;

  border-radius: 44px;
  border: none;
  outline: none;
  background-color: ${colors.background};

  fill: ${colors.gray};

  transition: 250ms ease;

  &:hover {
    fill: ${colors.accent};
  }

  &:focus {
    fill: ${colors.accentButton};
  }
`;

export const PetButtonAdd = styled.button`
  display: flex;
  align-items: center;
  gap: 24px;

  font-weight: 500;
  font-size: 20px;
  line-height: 27px;

  border: none;
  outline: none;
  background-color: transparent;

  transition: 250ms ease;

  &:hover {
    color: ${colors.accent};
  }

  &:focus {
    span {
      stroke: ${colors.white};
      background-color: ${colors.accentButton};
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 40px;

    width: 40px;
    height: 40px;

    background-color: ${colors.accent};
  }
`;
