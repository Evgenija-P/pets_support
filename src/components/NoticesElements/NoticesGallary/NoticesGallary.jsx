import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import NoticesCategoriesListSecond from '../../NoticesElements/NoticesCategoriesListSecond';
import { fetchNotices } from '../../../redux/notices/operations ';
import { fetchFavorite } from '../../../redux/favorite/operations ';
import { selectNoticesObj } from '../../../redux/notices/selectors';
import { useDispatch, useSelector } from 'react-redux';
import GalleryPagination from '../../GalleryPagination';

import { setCategory } from '../../../redux/notices/noticesSlice';

import NoticesLoader from '../NoticesLoader';
import Spinner from '../../Spinner';
import Modal from '../../../components/Modal/Modal';
//import useAuth from '../../../hooks/useAuth.js';
import { selectCurrentObj } from '../../../redux/current/selectors';
import { setCurrentNotices } from '../../../redux/current/currentSlice';
// import { selectFavoriteList } from '../../../redux/favorite/selectors';
// import { selectUser } from '../../../redux/auth/selectors';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import NoticeInfoCard from '../../../components/NoticesElements/NoticesDetailsCard/NoticeInfoCard';
const NoticesGallary = () => {
  const {
    currentNotices,
    isLoading: isLoadingCurrent,
    error: errorCurrent,
  } = useSelector(selectCurrentObj);
  // const { _id } = useSelector(selectUser);
  // const favoriteList = useSelector(selectFavoriteList);
  const { pathname } = useLocation();
  const {
    page: currentPage,
    totalHits,
    limit,
    search,
    isLoading: isLoadingNotices,
    error: errorNotices,
    noticesList,
    category,
  } = useSelector(selectNoticesObj);

  const { isLoggedIn } = useAuth();

  const dispatch = useDispatch();
  const firstRender = useRef(true);
  // const { pathname: category } = useLocation();
  const navigate = useNavigate();

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (firstRender.current) {
  //     console.log('first render');
  //   }
  //   firstRender.current = false;
  //   console.log('render');
  // });

  // useEffect(() => {
  //   console.log('useEffect[]');
  //   if (firstRender) {
  //     return;
  //   }
  //   if (isLoggedIn) {
  //     dispatch(fetchFavorite());
  //   }
  //   // dispatch(setCategory(category));

  //   dispatch(fetchNotices({ category: '/notices/sell' }));
  //   navigate('/notices/sell', { replace: true });
  // }, []);

  //////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    console.log('useEffect [category, isLoggedIn, search]');
    if (firstRender) {
      if (isLoggedIn) {
        dispatch(fetchFavorite());
      }
      dispatch(fetchNotices({ category: '/notices/sell' }));
      navigate('/notices/sell', { replace: true });
      firstRender.current = false;
      return;
    }
    if (isLoggedIn) {
      dispatch(fetchFavorite({ search }));
    }
    dispatch(setCategory(pathname));
    dispatch(fetchNotices({ category: pathname, search }));
  }, [dispatch, pathname, isLoggedIn, search]);
  //////////////////////////////////////////////////////////////////////////////////////////////
  const OnPagination = page => {
    dispatch(fetchNotices({ category, page, search }));
  };
  const countPages = Math.ceil(totalHits / limit);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const toggleModal = () => {
    dispatch(setCurrentNotices());
  };

  // const { _id: currentID } = currentNotices;
  //
  return (
    <div>
      {isLoadingCurrent && isLoadingNotices && <Spinner />}
      {(errorNotices || noticesList.length === 0 || errorCurrent) &&
        !isLoadingNotices && <NoticesLoader />}
      {!errorNotices && !isLoadingNotices && <NoticesCategoriesListSecond />}
      {countPages > 1 && !isLoadingNotices && (
        <GalleryPagination
          onPagination={page => {
            OnPagination(page);
          }}
          countPages={countPages}
          currentPage={Number(currentPage)}
        />
      )}{' '}
      {currentNotices && !isLoadingNotices && (
        <Modal
          // title={'notice'}
          type={'info'}
          onClose={toggleModal}
          children={<NoticeInfoCard />}
        ></Modal>
      )}
    </div>
  );
};
export default NoticesGallary;
