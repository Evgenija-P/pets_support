import {
  NoticesCategoriesListLink,
  NoticesCategoriesLink,
} from '../NoticesCategoriesNav/NoticesCategoriesNav.styled';
import { useDispatch } from 'react-redux';

import { fetchNotices } from '../../../redux/notices/operations ';
import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

const NoticesAuthNav = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    dispatch(fetchNotices({ category: pathname }));
  }, [pathname, dispatch]);
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
      </NoticesCategoriesListLink>
    </>
  );
};

export default NoticesAuthNav;
