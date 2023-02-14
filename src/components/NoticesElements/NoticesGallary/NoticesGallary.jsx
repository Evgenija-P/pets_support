import NoticesCategoriesListSecond from '../../NoticesElements/NoticesCategoriesListSecond';

import { selectNoticesObj } from '../../../redux/notices/selectors';
import { useSelector } from 'react-redux';
import GalleryPagination from '../../NoticesElements/GalleryPagination';

// import { selectFavoriteObj } from '../../../redux/favorite/selectors';

import NoticesLoader from '../NoticesLoader';
// import Spiner from '../../Spinner';
import Spiner from '../../Spinner';
// import Modal from '../../../components/Modal/Modal';
// //import useAuth from '../../../hooks/useAuth.js';
// import { setSelectedNotice } from '../../../redux/notices/noticesSlice';

import { selectFavoriteObj } from '../../../redux/favorite/selectors';
// import { selectUser } from '../../../redux/auth/selectors';
// import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useRef } from 'react';

const NoticesGallary = () => {
  // const { pathname } = useLocation();
  const {
    // page,
    // totalHits,
    // limit,
    // search,
    isLoading,
    error: errorNotices,
    noticesList,
    // selectedNotice,
  } = useSelector(selectNoticesObj);
  const {
    favoriteList,

    isLoading: isLoadingFavorite,
    error: errorFavorite,
  } = useSelector(selectFavoriteObj);
  // const { isLoading: isLoadingFavorite } = useSelector(selectFavoriteObj);
  // const { isLoggedIn } = useAuth();
  const { pathname } = useLocation();
  // const dispatch = useDispatch();
  // const firstRender = useRef(true);

  // const navigate = useNavigate();

  // const countPages = Math.ceil(totalHits / limit);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      {pathname === '/notices/favorite'
        ? (errorFavorite || favoriteList.length === 0) && <NoticesLoader />
        : (errorNotices || noticesList.length === 0) && <NoticesLoader />}
      {pathname === '/notices/favorite'
        ? !errorFavorite &&
          favoriteList.length !== 0 && <NoticesCategoriesListSecond />
        : !errorNotices &&
          noticesList.length !== 0 && <NoticesCategoriesListSecond />}
      {isLoading && isLoadingFavorite && <Spiner />}
      <GalleryPagination />
    </div>
  );
};
export default NoticesGallary;
