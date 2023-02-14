import {
  NoticesCategoriesListLink,
  NoticesCategoriesLink,
} from '../NoticesCategoriesNav/NoticesCategoriesNav.styled';
import { useDispatch } from 'react-redux';
import { fetchNotices } from '../../../redux/notices/operations ';
import { setCategory } from '../../../redux/notices/noticesSlice';
import { useEffect } from 'react';
import { selectNoticesObj } from '../../../redux/notices/selectors';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { fetchFavoriteNotices } from '../../../redux/notices/operations ';

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
    // if (pathname === '/notices/favorite') {
    //   dispatch(fetchFavoriteNotices({}));
    //   return;
    // }
    dispatch(fetchNotices({ category: pathname, search }));
    // dispatch(setCategory(categoryName));
  }, [pathname, dispatch, search]);
  useEffect(() => {
    dispatch(setCategory(categoryName));
  }, [dispatch, categoryName]);

  useEffect(() => {
    dispatch(fetchFavoriteNotices({}));
  }, [dispatch]);

  return (
    <>
      <NoticesCategoriesListLink>
        <li>
          <NoticesCategoriesLink to="favorite">
            favorite ads
          </NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="own">my ads</NoticesCategoriesLink>
        </li>

        <li>
          <NoticesCategoriesLink to="for-free">
            in good hands
          </NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="lost-found">
            lost/found
          </NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="sell">sell</NoticesCategoriesLink>
        </li>
      </NoticesCategoriesListLink>
    </>
  );
};

export default NoticesAuthNav;
