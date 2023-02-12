import styled from '@emotion/styled';
import { colors, media } from '../../../../../styles/stylesLayout';

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;

  gap: 12px;

  ${media.tabletAndDesktop} {
    flex-direction: row;
    gap: 20px;
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 44px;

  font-size: 20px;
  line-height: 27px;
  letter-spacing: 4%;

  border-radius: 40px;
  border: 1px solid ${colors.accent};

  opacity: ${p => (p.disabled ? 0.6 : 1)};

  ${media.tabletAndDesktop} {
    width: 180px;
  }
`;

export const PrimaryBtn = styled(Btn)`
  color: ${colors.white};
  background-color: ${colors.accent};
`;

export const SecondaryBtn = styled(Btn)`
  color: ${colors.black};
  background-color: ${colors.white};
`;

export const Texts = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${colors.black};

  ${media.tabletAndDesktop} {
    font-size: 20px;
  }
`;
