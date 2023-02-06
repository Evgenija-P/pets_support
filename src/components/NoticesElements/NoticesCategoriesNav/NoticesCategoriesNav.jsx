import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import NoticesCategoriesList from '../NoticesCategoriesList/NoticesCategoriesList';
import getNoticesByCategory from '../../../servises/fetchNotices/fetchNoticesByCategory';

import {
  NoticesCategoriesListLink,
  NoticesCategoriesLink,
} from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = () => {
  const [notices, setNotices] = useState([]);
  const { pathname: category } = useLocation();

  useEffect(() => {
    const fetchNotices = async () => {
      const { message: result } = await getNoticesByCategory(category);
      setNotices(result);
      try {
      } catch (error) {}
    };

    fetchNotices();
  }, [category]);

  return (
    <>
      <NoticesCategoriesListLink>
        <li>
          <NoticesCategoriesLink to="/notices/sell">Sell</NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="/notices/lost-found">
            Lost / Found
          </NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="/notices/for-free">
            In good hands
          </NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="/notices/favorite">
            Favorite ads
          </NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="/notices/own">
            My ads
          </NoticesCategoriesLink>
        </li>
      </NoticesCategoriesListLink>

      <NoticesCategoriesList notices={notices} />
    </>
  );
};

export default NoticesCategoriesNav;
