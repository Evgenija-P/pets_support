import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import NoticesCategoriesListSecond from '../../NoticesElements/NoticesCategoriesListSecond';
import { fetchNotices } from '../../../redux/notices/operations ';
import { fetchFavorite } from '../../../redux/favorite/operations ';
import { selectNoticesObj } from '../../../redux/notices/selectors';
import { useDispatch, useSelector } from 'react-redux';
import GalleryPagination from '../../GalleryPagination';

import { setCategory } from '../../../redux/notices/noticesSlice';
import { useLocation } from 'react-router-dom';
import NoticesLoader from '../NoticesLoader';
import Spinner from '../../Spinner';
const NoticesGallary = () => {
  const { isLoading, error, noticesList } = useSelector(selectNoticesObj);

  const { pathname: category } = useLocation();

  const { isLoggedIn } = useAuth();

  const {
    page: currentPage,
    totalHits,
    limit,
    search,
  } = useSelector(selectNoticesObj);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchFavorite({ search }));
    }
    dispatch(setCategory(category));
    // if (search) {
    //   dispatch(fetchNotices({ category, search }));
    // } else {
    dispatch(fetchNotices({ category, search }));
    // }
  }, [dispatch, category, isLoggedIn, search]);

  const OnPagination = page => {
    dispatch(fetchNotices({ category, page, search }));
  };
  const countPages = Math.ceil(totalHits / limit);

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
