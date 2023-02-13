import {
  NoticesCategoriesListLink,
  NoticesCategoriesLink,
} from '../NoticesCategoriesNav/NoticesCategoriesNav.styled';
/////////////////////////////////////////////////////////////////////////

import { useDispatch } from 'react-redux';

import { fetchNotices } from '../../../redux/notices/operations ';
import { fetchFavorite } from '../../../redux/favorite/operations ';
import { useEffect } from 'react';
// import {  useRef } from 'react';
import { selectNoticesObj } from '../../../redux/notices/selectors';

import useAuth from '../../../hooks/useAuth.js';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NoticesAuthNav = () => {
  const { isLoggedIn } = useAuth();
  // const firstRender = useRef(false);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const {
    // noticesList: [],
    // selectedNotice: null,
    // page: 1,
    // totalHits: 0,
    // isLoading: false,
    // isAdding: false,
    // error: null,
    // // category: '/notices/',
    // // category: '',
    search,
  } = useSelector(selectNoticesObj);
  useEffect(() => {
    // if (firstRender) {
    //   if (isLoggedIn) {
    //     dispatch(fetchFavorite({}));
    //   }
    //   // firstRender.current = false;
    //   return;
    // }
    // if (isLoggedIn) {
    //   dispatch(fetchFavorite({}));
    // }
    if (pathname === '/notices/favorite') {
      // dispatch(fetchFavorite({}));
      return;
    }
    dispatch(fetchNotices({ category: pathname, search }));
    // dispatch(fetchFavorite({}));
  }, [pathname, isLoggedIn, dispatch, search]);
  useEffect(() => {
    // if (firstRender) {
    //   if (isLoggedIn) {
    //     dispatch(fetchFavorite({}));
    //   }
    //   // firstRender.current = false;
    //   return;
    // }
    // if (isLoggedIn) {
    // //   dispatch(fetchFavorite({}));
    // // }
    // // if (pathname === '/notices/favorite') {
    //   // dispatch(fetchFavorite({}));
    //   return;
    // // }
    // dispatch(fetchNotices({ category: pathname, search }));
    dispatch(fetchFavorite({}));
  }, []);

  return (
    <>
      <NoticesCategoriesListLink>
        <li>
          <NoticesCategoriesLink to="sell">sell</NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="lost-found">
            lost/found
          </NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="for-free">
            in good hands
          </NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="favorite">
            favorite ads
          </NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="own">my ads</NoticesCategoriesLink>
        </li>
      </NoticesCategoriesListLink>
    </>
  );
};

export default NoticesAuthNav;
