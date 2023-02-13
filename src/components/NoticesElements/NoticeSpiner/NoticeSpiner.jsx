import { useSelector } from 'react-redux';
import Spinner from './Spinner';
// import { selectFavoriteObj } from '../../../redux/favorite/selectors';

// import Modal from '../../../components/Modal/Modal';
// //import useAuth from '../../../hooks/useAuth.js';
import { selectNoticesObj } from '../../../redux/notices/selectors';

import { selectFavoriteObj } from '../../../redux/favorite/selectors';
// import { selectUser } from '../../../redux/auth/selectors';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { useRef } from 'react';

const NoticeSpiner = () => {
  const {
    // favoriteList,
    isLoading: isLoadingFavorite,
    // error: erorFavorite,
  } = useSelector(selectFavoriteObj);
  const {
    // noticesList,
    // selectedNotice,
    // page,
    // totalHits,
    isLoading,
    // isAdding,
    // error,
    // search,
    // limit,
  } = useSelector(selectNoticesObj);
  return isLoadingFavorite && isLoading && <Spinner />;
};

export default NoticeSpiner;
