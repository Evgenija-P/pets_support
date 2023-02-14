// import Spinner from '../../Spinner';
// import { HiDocumentSearch } from 'react-icons/hi';
import { selectNoticesObj } from '../../../redux/notices/selectors';
// import { selectFavoriteObj } from '../../../redux/favorite/selectors';
// import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  NoticesError,
  LoaderWrapper,
  NoticesMessage,
  NoticesIcon,
  NoticeErrorIcon,
} from './NoticesLoader.styled';

const NoticesLoader = () => {
  const { error, noticesList, noticesFavoriteList } =
    useSelector(selectNoticesObj);
  // const { pathname } = useLocation();
  return (
    <LoaderWrapper>
      {/* <div>нет ничего</div> */}
      {error && <NoticesError>{error}</NoticesError>}
      {error && <NoticeErrorIcon />}
      {(noticesList.length === 0 || noticesFavoriteList.length === 0) &&
        !error && <NoticesMessage> Notices not found...</NoticesMessage>}
      {(noticesList.length === 0 || noticesFavoriteList.length === 0) &&
        !error && <NoticesIcon />}
    </LoaderWrapper>
  );
};
export default NoticesLoader;
