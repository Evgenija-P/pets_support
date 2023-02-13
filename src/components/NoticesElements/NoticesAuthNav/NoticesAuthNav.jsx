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
// import { selectUser } from '../../../redux/auth/selectors.js';

import useAuth from '../../../hooks/useAuth.js';
import { useLocation } from 'react-router-dom';

const NoticesAuthNav = () => {
  const { isLoggedIn } = useAuth();
  // const firstRender = useRef(false);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    // if (firstRender) {
    //   if (isLoggedIn) {
    //     dispatch(fetchFavorite({}));
    //   }
    //   // firstRender.current = false;
    //   return;
    // }
    if (isLoggedIn) {
      dispatch(fetchFavorite({}));
    }
    if (pathname === '/notices/favorite') {
      // dispatch(fetchFavorite({}));
      return;
    }
    dispatch(fetchNotices({ category: pathname }));
    // dispatch(fetchFavorite({}));
  }, [pathname, isLoggedIn]);

  return (
    <>
      <NoticesCategoriesListLink>
        <li>
          <NoticesCategoriesLink to="sell">Sell</NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="lost-found">
            Lost / Found
          </NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="for-free">
            In good hands
          </NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="favorite">
            Favorite ads
          </NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="own">My ads</NoticesCategoriesLink>
        </li>
      </NoticesCategoriesListLink>
    </>
  );
};

export default NoticesAuthNav;
