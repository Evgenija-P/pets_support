import {
  NoticesCategoriesListLink,
  NoticesCategoriesLink,
} from '../NoticesCategoriesNav/NoticesCategoriesNav.styled';
import { useDispatch } from 'react-redux';
import { fetchNotices } from '../../../redux/notices/operations ';
import { fetchFavorite } from '../../../redux/favorite/operations ';
import { useEffect } from 'react';
import { selectNoticesObj } from '../../../redux/notices/selectors';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NoticesAuthNav = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { search } = useSelector(selectNoticesObj);

  useEffect(() => {
    if (!categoryName) {
      navigate('/notices/sell');
    }
  }, [categoryName, navigate]);

  useEffect(() => {
    if (pathname === '/notices/favorite') {
      return;
    }
    dispatch(fetchNotices({ category: pathname, search }));
  }, [pathname, dispatch, search]);

  useEffect(() => {
    dispatch(fetchFavorite({}));
  }, [dispatch]);

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
