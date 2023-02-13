// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import SectionContainer from '../components/SectionContainer';
import NoticesCategoriesNav from '../components/NoticesElements/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from '../components/NoticesElements/NoticesSearch/NoticesSearch';
import NoticesGallary from '../components/NoticesElements/NoticesGallary';
// import NoticesCategoriesList from '../components/NoticesElements/NoticesCategoriesList';
// import NoticeInfoCard from '../components/NoticesElements/NoticesDetailsCard/NoticeInfoCard';
// import { useEffect, useRef } from 'react';
// // import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { fetchFavorite } from '../redux/favorite/operations ';

// import { useDispatch } from 'react-redux';

// import useAuth from '../hooks/useAuth.js';

// import NoticesCategoriesListSecond from '../components/NoticesElements/NoticesCategoriesListSecond';

// import GalleryPagination from '../components/NoticesElements/GalleryPagination';
import NoticeSpiner from '../components/NoticesElements/NoticeSpiner';
const NoticesPage = () => {
  // const firstRender = useRef(true);
  // const dispatch = useDispatch();
  // const { isLoggedIn } = useAuth();

  // // const { pathname } = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (firstRender) {
  //     console.log('first render in Page Navigate ');
  //     navigate('/notices/sell', { replace: true });
  //     if (isLoggedIn) {
  //       dispatch(fetchFavorite({}));
  //     }
  //     firstRender.current = false;

  //     return;
  //   }
  // }, [isLoggedIn]);
  // console.log('Notices', noticesList);
  ///////////////////////////////////////////
  return (
    <>
      <Helmet>
        <title>NoticesPage</title>
      </Helmet>
      <SectionContainer title="Find your favorite pet">
        <NoticeSpiner />
        <NoticesSearch />

        <NoticesCategoriesNav />
        {/* <NoticesCategoriesListSecond /> */}
        <NoticesGallary />
        {/* <GalleryPagination /> */}
      </SectionContainer>

      {/* <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense> */}
    </>
  );
};

export default NoticesPage;
