import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import NoticesCategoriesListSecond from '../../NoticesElements/NoticesCategoriesListSecond';
import { fetchNotices } from '../../../redux/notices/operations ';
import { fetchFavorite } from '../../../redux/favorite/operations ';
import { selectNoticesObj } from '../../../redux/notices/selectors';
import { useDispatch, useSelector } from 'react-redux';
import GalleryPagination from '../../GalleryPagination';

import { selectFavoriteObj } from '../../../redux/favorite/selectors';

import NoticesLoader from '../NoticesLoader';
import Spinner from '../../Spinner';
import Modal from '../../../components/Modal/Modal';
//import useAuth from '../../../hooks/useAuth.js';
import { setSelectedNotice } from '../../../redux/notices/noticesSlice';
// import { setCurrentNotices } from '../../../redux/current/currentSlice';
// import { selectFavoriteList } from '../../../redux/favorite/selectors';
// import { selectUser } from '../../../redux/auth/selectors';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import NoticeInfoCard from '../../../components/NoticesElements/NoticesDetailsCard/NoticeInfoCard';
const NoticesGallary = () => {
  // const {
  //   currentNotices,
  //   isLoading: isLoadingCurrent,
  //   error: errorCurrent,
  // } = useSelector(selectCurrentObj);
  const { pathname } = useLocation();
  const {
    page: currentPage,
    totalHits,
    limit,
    search,
    isLoading: isLoadingNotices,
    error: errorNotices,
    noticesList,
    selectedNotice,
  } = useSelector(selectNoticesObj);
  const { isLoading: isLoadingFavorite } = useSelector(selectFavoriteObj);
  const { isLoggedIn } = useAuth();

  const dispatch = useDispatch();
  const firstRender = useRef(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (firstRender.current) {
      console.log('first render');
      // console.log('useEffect in gallary Navigate ');
      navigate('/notices/sell', { replace: true });
      firstRender.current = false;
      return;
    }

    console.log('render');
  });

  // useEffect(() => {
  //   // if (isLoggedIn) {
  //   //   dispatch(fetchFavorite());
  //   // }

  //   navigate('/notices/sell', { replace: true });
  //   dispatch(fetchNotices({ category: '/notices/sell' }));
  // }, []);

  //////////////////////////////////////////////////////////////////////////////////////////
  // useEffect(() => {
  //   console.log('useEffect in gallary Navigate ');
  //   navigate('/notices/sell', { replace: true });
  //   // if (firstRender) {
  //   //   console.log('first render');
  //   //   navigate('/notices/sell', { replace: true });
  //   // console.log('fetchNotices from NoticePage {category: /notices/sell}');
  //   // dispatch(fetchNotices({ category: '/notices/sell' }));

  //   // if (isLoggedIn) {
  //   //   console.log('fetchFavorite() from NoticePage');
  //   //   dispatch(fetchFavorite());
  //   // }
  // }, []);
  useEffect(() => {
    // if (isLoggedIn) {
    //   console.log('IsLog fetchFavorite({ search } in Gallary');
    //   dispatch(fetchFavorite({ search }));
    // }
    // dispatch(setCategory(pathname));
    if (!firstRender.current) {
      // console.log(
      //   'fetchNotices({ category: pathname, search }',
      //   pathname,
      //   search
      // );
      dispatch(fetchNotices({ category: pathname, search }));
    }
  }, [dispatch, pathname, search]);

  useEffect(() => {
    if (isLoggedIn) {
      // console.log('IsLog fetchFavorite() in Gallary');
      dispatch(fetchFavorite({}));
    }
  }, [dispatch, isLoggedIn]);

  //////////////////////////////////////////////////////////////////////////////////////////////
  const OnPagination = page => {
    console.log('OnPagination', { category: pathname, page, search });
    dispatch(fetchNotices({ category: pathname, page, search }));
  };
  const countPages = Math.ceil(totalHits / limit);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const toggleModal = () => {
    dispatch(setSelectedNotice());
  };

  return (
    <div>
      {(isLoadingNotices || isLoadingFavorite) && <Spinner />}
      {(errorNotices || noticesList.length === 0) && !isLoadingNotices && (
        <NoticesLoader />
      )}
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
      {selectedNotice && !isLoadingNotices && (
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
