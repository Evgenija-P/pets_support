import styled from '@emotion/styled';
import { media, colors, fontWeights } from '../../../styles/stylesLayout';

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

  object-fit: cover;

  ${media.tabletAndDesktop} {
    width: 160px;
    height: 160px;

    border-radius: 40px;
  }
`;

export const PetDescription = styled.div`
  width: 100%;
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

  display: flex;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 44px;

  border-radius: 44px;
  border: none;
  outline: none;
  background-color: ${colors.background};

  fill: ${colors.gray};

  opacity: ${p => (p.disabled ? 0.7 : 1)};

  transition: 250ms ease;

  &:hover {
    fill: ${colors.accent};
  }

  &:focus {
    fill: ${colors.accentButton};
  }
`;
