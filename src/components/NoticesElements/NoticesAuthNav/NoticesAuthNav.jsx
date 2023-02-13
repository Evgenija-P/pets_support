import {
  NoticesCategoriesListLink,
  NoticesCategoriesLink,
} from '../NoticesCategoriesNav/NoticesCategoriesNav.styled';
/////////////////////////////////////////////////////////////////////////

import { useDispatch } from 'react-redux';

import { fetchNotices } from '../../../redux/notices/operations ';
import { fetchFavorite } from '../../../redux/favorite/operations ';
import { useEffect } from 'react';
// import { selectUser } from '../../../redux/auth/selectors.js';

import { useLocation } from 'react-router-dom';

const NoticesAuthNav = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    dispatch(fetchNotices({ category: pathname }));
    dispatch(fetchFavorite({}));
  }, [pathname]);

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
