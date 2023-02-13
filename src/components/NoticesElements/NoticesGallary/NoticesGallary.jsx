import NoticesCategoriesListSecond from '../../NoticesElements/NoticesCategoriesListSecond';

import { selectNoticesObj } from '../../../redux/notices/selectors';
import { useSelector } from 'react-redux';
import GalleryPagination from '../../NoticesElements/GalleryPagination';

// import { selectFavoriteObj } from '../../../redux/favorite/selectors';

// import NoticesLoader from '../NoticesLoader';
// import Spinner from '../../Spinner';
// import Modal from '../../../components/Modal/Modal';
// //import useAuth from '../../../hooks/useAuth.js';
// import { setSelectedNotice } from '../../../redux/notices/noticesSlice';
// import { setCurrentNotices } from '../../../redux/current/currentSlice';
// import { selectFavoriteList } from '../../../redux/favorite/selectors';
// import { selectUser } from '../../../redux/auth/selectors';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { useRef } from 'react';

const NoticesGallary = () => {
  // const { pathname } = useLocation();
  const {
    // page,
    totalHits,
    limit,
    // search,
    isLoading: isLoadingNotices,
    error: errorNotices,
    // noticesList,
    // selectedNotice,
  } = useSelector(selectNoticesObj);
  // const { isLoading: isLoadingFavorite } = useSelector(selectFavoriteObj);
  // const { isLoggedIn } = useAuth();

  // const dispatch = useDispatch();
  // const firstRender = useRef(true);

  // const navigate = useNavigate();

  const countPages = Math.ceil(totalHits / limit);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      {/* {(isLoadingNotices || isLoadingFavorite) && <Spinner />}  */}
      {/* {/* {(errorNotices || noticesList.length === 0) && !isLoadingNotices && (
        <NoticesLoader />
      )} */}
      {!errorNotices && !isLoadingNotices && <NoticesCategoriesListSecond />}
      {countPages > 1 && !isLoadingNotices && <GalleryPagination />}
    </div>
  );
};
export default NoticesGallary;
