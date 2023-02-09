import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import NoticesCategoriesListSecond from '../../NoticesElements/NoticesCategoriesListSecond';
import { fetchNotices } from '../../../redux/notices/operations ';
import { fetchFavorite } from '../../../redux/favorite/operations ';
import { selectNoticesObj } from '../../../redux/notices/selectors';
import { useDispatch, useSelector } from 'react-redux';
import GalleryPagination from '../../GalleryPagination';
// import notFoundNoticesImage from '../../../img/notFoundNoticesImage.jpg';
import { PER_PAGE } from '../../../redux/notices/operations ';
import useMatchMedia from '../../../hooks/use-match-media';
import { setCategory } from '../../../redux/notices/noticesSlice';
// import { selectUser } from '../../../redux/auth/selectors.js';
import { useLocation } from 'react-router-dom';

import Spinner from '../../Spinner';
const NoticesGallary = () => {
  const { isLoading, error } = useSelector(selectNoticesObj);

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
    // dispatch(setPage(page));
    // console.log('current page', currentPage);
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
