import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import NoticesCategoriesListSecond from '../../NoticesElements/NoticesCategoriesListSecond';
import {
  fetchNotices,
  fetchFavoriteNotices,
} from '../../../redux/notices/operations ';
import { selectNoticesObj } from '../../../redux/notices/selectors';
import { useDispatch, useSelector } from 'react-redux';
import GalleryPagination from '../../GalleryPagination';
// import notFoundNoticesImage from '../../../img/notFoundNoticesImage.jpg';
import { PER_PAGE } from '../../../redux/notices/operations ';
import useMatchMedia from '../../../hooks/use-match-media';
// import { setPage } from '../../../redux/notices/noticesSlice';
// import { selectUser } from '../../../redux/auth/selectors.js';

import Spinner from '../../Spinner';
const NoticesGallary = () => {
  const { isLoading, error } = useSelector(selectNoticesObj);

  const { pathname: category } = useLocation();

  const { isLoggedIn } = useAuth();
  //  const { category } = useSelector(selectNoticesObj);
  const dispatch = useDispatch();
  const { page: currentPage, totalHits } = useSelector(selectNoticesObj);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchFavoriteNotices({ category: '/notices/favorite' }));
    }

    dispatch(fetchNotices({ category }));
  }, [dispatch, category, isLoggedIn]);

  const OnPagination = page => {
    // dispatch(setPage(page));
    console.log('current page', currentPage);
    dispatch(fetchNotices({ category, page }));
  };
  const { isDesktop } = useMatchMedia();
  const countPages = Math.ceil(totalHits / PER_PAGE);

  return (
    <div>
      {error && <p>{error}</p>}
      <div>{isLoading && 'Request in progress...'}</div>
      {isLoading && <Spinner />}
      {/* <div>{!error && !isLoading && 'Data recived...'}</div> */}
      {!error && !isLoading && <NoticesCategoriesListSecond />}
      {countPages > 1 && isDesktop && (
        <GalleryPagination
          onPagination={page => {
            OnPagination(page);
            console.log('Pagination presed');
          }}
          countPages={countPages}
          currentPage={Number(currentPage)}
        />
      )}
    </div>
  );
};
export default NoticesGallary;
