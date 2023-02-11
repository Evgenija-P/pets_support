import styled from '@emotion/styled';
import { media, colors, fontWeights } from '../../../styles/stylesLayout';

import { HiDocumentSearch } from 'react-icons/hi';
import { TbFaceIdError } from 'react-icons/tb';

export const LoaderWrapper = styled.div`
  margin-top: 25%;
`;

export const PetsError = styled.p`
  text-align: center;

  font-size: 14px;
  font-weight: ${fontWeights.medium};
  line-height: 0.75;

  color: ${colors.accent};

  ${media.tabletAndDesktop} {
    font-size: 24px;
  }
`;

export const PetsMessage = styled.p`
  text-align: center;

  font-size: 14px;
  font-weight: ${fontWeights.medium};
  line-height: 0.75;

  color: ${colors.accent};

  ${media.tabletAndDesktop} {
    font-size: 24px;
  }
`;

export const PetsIcon = styled(HiDocumentSearch)`
  display: block;

  width: 60px;
  height: auto;

  margin: 30px auto 0px auto;

  color: ${colors.accent};

  ${media.tabletAndDesktop} {
    width: 100px;
  }
`;

export const PetsErrorIcon = styled(TbFaceIdError)`
  display: block;

  width: 60px;
  height: auto;

  margin: 30px auto 0px auto;

  color: ${colors.accent};

  ${media.tabletAndDesktop} {
    width: 100px;
  }
`;
