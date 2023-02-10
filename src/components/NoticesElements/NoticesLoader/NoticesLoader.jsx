// import Spinner from '../../Spinner';
// import { HiDocumentSearch } from 'react-icons/hi';
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
  const { error, noticesList } = useSelector(selectNoticesObj);
  return (
    <LoaderWrapper>
      {error && <NoticesError>{error}</NoticesError>}
      {error && <NoticeErrorIcon />}
      {noticesList.length === 0 && !error && (
        <NoticesMessage> Notices not found...</NoticesMessage>
      )}
      {noticesList.length === 0 && !error && <NoticesIcon />}
    </LoaderWrapper>
  );
};
export default NoticesLoader;
