// import Spinner from '../../Spinner';
// import { HiDocumentSearch } from 'react-icons/hi';
import { selectNoticesObj } from '../../../redux/notices/selectors';
// import { selectFavoriteObj } from '../../../redux/favorite/selectors';
import { useSelector } from 'react-redux';
import {
  NoticesError,
  LoaderWrapper,
  NoticesMessage,
  NoticesIcon,
  NoticeErrorIcon,
} from './NoticesLoader.styled';
// import { useLocation } from 'react-router-dom';
const NoticesLoader = () => {
  // const { pathname } = useLocation();
  const { error, noticesList, noticesFavoriteList } =
    useSelector(selectNoticesObj);

  // const { favoriteList, error: errorFavorite } = useSelector(selectFavoriteObj);
  return (
    <>
      {
        <LoaderWrapper>
          {error && <NoticesError>{error}</NoticesError>}
          {error && <NoticeErrorIcon />}
          {(noticesList.length === 0 ||
            noticesFavoriteList.length === 0 ||
            !error) && <NoticesMessage> Notices not found...</NoticesMessage>}
          {noticesList.length === 0 && !error && <NoticesIcon />}
        </LoaderWrapper>
      }
      {/* {pathname === '/notices/favorite' ? (
        <LoaderWrapper>
          {errorFavorite && <NoticesError>{errorFavorite}</NoticesError>}
          {errorFavorite && <NoticeErrorIcon />}
          {favoriteList.length === 0 && !errorFavorite && (
            <NoticesMessage> Add your first favorites ...</NoticesMessage>
          )}
          {favoriteList.length === 0 && !errorFavorite && <NoticesIcon />}
        </LoaderWrapper>
      ) : (
        <LoaderWrapper>
          {error && <NoticesError>{error}</NoticesError>}
          {error && <NoticeErrorIcon />}
          {noticesList.length === 0 && !error && (
            <NoticesMessage> Notices not found...</NoticesMessage>
          )}
          {noticesList.length === 0 && !error && <NoticesIcon />}
        </LoaderWrapper>
      )} */}
    </>
  );
};
export default NoticesLoader;
