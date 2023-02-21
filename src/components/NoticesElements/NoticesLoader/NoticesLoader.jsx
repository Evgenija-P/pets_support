import { selectNoticesObj } from '../../../redux/notices/selectors';
import { useSelector } from 'react-redux';
import {
  NoticesError,
  LoaderWrapper,
  NoticesMessage,
  NoticesIcon,
  NoticeErrorIcon,
} from './NoticesLoader.styled';

const NoticesLoader = () => {
  const { errorNotices, noticesList, favoriteNoticesList } =
    useSelector(selectNoticesObj);

  return (
    <LoaderWrapper>
      {errorNotices && <NoticesError>{errorNotices}</NoticesError>}
      {errorNotices && <NoticeErrorIcon />}
      {(noticesList.length === 0 || favoriteNoticesList.length === 0) &&
        !errorNotices && <NoticesMessage> Notices not found...</NoticesMessage>}
      {(noticesList.length === 0 || favoriteNoticesList.length === 0) &&
        !errorNotices && <NoticesIcon />}
    </LoaderWrapper>
  );
};
export default NoticesLoader;
