import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import NoticesCategoriesListSecond from '../../NoticesElements/NoticesCategoriesListSecond';
import { fetchNotices } from '../../../redux/notices/operations ';
import { fetchFavorite } from '../../../redux/favorite/operations ';
import { selectNoticesObj } from '../../../redux/notices/selectors';
import { useDispatch, useSelector } from 'react-redux';
import GalleryPagination from '../../GalleryPagination';
import { PER_PAGE } from '../../../redux/notices/operations ';
import { setCategory } from '../../../redux/notices/noticesSlice';
import { useLocation } from 'react-router-dom';
import NoticesLoader from '../NoticesLoader';
import Spinner from '../../Spinner';
const NoticesGallary = () => {
  const { isLoading, error, noticesList } = useSelector(selectNoticesObj);

  const { pathname: category } = useLocation();

  const { isLoggedIn } = useAuth();

  const { page: currentPage, totalHits } = useSelector(selectNoticesObj);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchFavorite());
    }
    dispatch(setCategory(category));
    dispatch(fetchNotices({ category }));
  }, [dispatch, category, isLoggedIn]);

  const OnPagination = page => {
    dispatch(fetchNotices({ category, page }));
  };
  const countPages = Math.ceil(totalHits / PER_PAGE);

  return (
    <div>
      {isLoading && <Spinner />}
      {(error || noticesList.length === 0) && !isLoading && <NoticesLoader />}
      {!error && !isLoading && <NoticesCategoriesListSecond />}
      {countPages > 1 && !isLoading && (
        <GalleryPagination
          onPagination={page => {
            OnPagination(page);
          }}
          countPages={countPages}
          currentPage={Number(currentPage)}
        />
      )}
    </div>
  );
};
export default NoticesGallary;
