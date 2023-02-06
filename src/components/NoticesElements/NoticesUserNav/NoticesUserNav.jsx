import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import getNoticesByCategory from '../../../servises/fetchNotices/fetchNoticesByCategory';

import NoticesCategoriesList from '../NoticesCategoriesList/NoticesCategoriesList';

import {
  NoticesCategoriesListLink,
  NoticesCategoriesLink,
} from '../NoticesCategoriesNav/NoticesCategoriesNav.styled';

const NoticesAuthNav = () => {
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
      </NoticesCategoriesListLink>

      <NoticesCategoriesList notices={notices} />
    </>
  );
};

export default NoticesAuthNav;
