// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import SectionContainer from '../components/SectionContainer';
import NoticesCategoriesNav from '../components/NoticesElements/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from '../components/NoticesElements/NoticesSearch/NoticesSearch';
import NoticesGallary from '../components/NoticesElements/NoticesGallary';
// import NoticeInfoCard from '../components/NoticesElements/NoticesDetailsCard/NoticeInfoCard';
// import { useEffect, useRef } from 'react';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { fetchNotices } from '../redux/notices/operations ';
// import { fetchFavorite } from '../redux/favorite/operations ';
// import { selectNoticesObj } from '../redux/notices/selectors';
// import Modal from '../components/Modal/Modal';
// import { useSelector, useDispatch } from 'react-redux';
// import useAuth from '../hooks/useAuth.js';
// import { selectCurrentObj } from '../redux/current/selectors';
// import { setCurrentNotices } from '../redux/current/currentSlice';
// import { selectFavoriteObj } from '../redux/favorite/selectors';
// import { selectUser } from '../redux/auth/selectors';
// import Spinner from '../components/Spinner/Spinner';
const NoticesPage = () => {
  // const { isLoading: isLoadingCurrent } = useSelector(selectCurrentObj);
  // const { isLoading: isLoadingNotices } = useSelector(selectNoticesObj);
  // const { isLoading: isLoadingFavorite } = useSelector(selectFavoriteObj);
  // const firstRender = useRef(true);
  // const dispatch = useDispatch();
  // const { isLoggedIn } = useAuth();

  // // const { pathname } = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   console.log('useEffect in NoticePage');
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
  return (
    <>
      <Helmet>
        <title>NoticesPage</title>
      </Helmet>
      <SectionContainer title="Find your favorite pet">
        <NoticesSearch />
        {/* {(isLoadingCurrent || isLoadingNotices || isLoadingFavorite) && (
          <Spinner />
        )} */}
        <NoticesCategoriesNav />
        <NoticesGallary />
      </SectionContainer>

      {/* <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense> */}
    </>
  );
};

export default NoticesPage;
