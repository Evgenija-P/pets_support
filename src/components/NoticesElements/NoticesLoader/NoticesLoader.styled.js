import styled from '@emotion/styled';
import { media, colors, fontWeights } from '../../../styles/stylesLayout';
import { HiDocumentSearch } from 'react-icons/hi';
import { TbFaceIdError } from 'react-icons/tb';

export const LoaderWrapper = styled.div`
  margin-top: 60px;
`;
export const NoticesError = styled.p`
  text-align: center;

  color: ${colors.accent};
  font-size: 14px;
  font-weight: ${fontWeights.medium};
  line-height: 0.75;
  ${media.tabletAndDesktop} {
    font-size: 24px;
  }
`;
export const NoticesMessage = styled.p`
  text-align: center;

  color: ${colors.accent};
  font-size: 14px;
  font-weight: ${fontWeights.medium};
  line-height: 0.75;
  ${media.tabletAndDesktop} {
    font-size: 24px;
  }
`;

export const NoticesIcon = styled(HiDocumentSearch)`
  margin-top: 30px;
  width: 60px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: ${colors.accent};
  ${media.tabletAndDesktop} {
    width: 100px;
  }
`;
export const NoticeErrorIcon = styled(TbFaceIdError)`
  margin-top: 30px;
  width: 60px;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: ${colors.accent};
  ${media.tabletAndDesktop} {
    width: 100px;
  }
`;
