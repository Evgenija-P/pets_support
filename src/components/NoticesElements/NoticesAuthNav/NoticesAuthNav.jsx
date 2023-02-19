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
import { useRef } from 'react';
import { setPage } from '../../../redux/notices/noticesSlice';
const NoticesAuthNav = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const firstRender = useRef(false);
  const { search, noticesList, limit, totalHits, page } =
    useSelector(selectNoticesObj);
  const location = useLocation();

  const { pathname } = location;
  useEffect(() => {
    if (!categoryName) {
      navigate('/notices/sell');
    }
  }, [categoryName, dispatch, navigate]);

  useEffect(() => {
    if (!categoryName) {
      return;
    }

    dispatch(fetchNotices({ category: pathname, search }));
  }, [pathname, dispatch, search, categoryName]);

  useEffect(() => {
    dispatch(setCategory(categoryName));
  }, [dispatch, categoryName]);

  useEffect(() => {
    if (firstRender) {
      dispatch(fetchFavoriteNotices({}));
      firstRender.current = true;
    }
  }, [dispatch]);

  useEffect(() => {
    // console.log('useEffect',page);
    // if (noticesList.length === 0 && page > 1) {
    //   console.log('useEffect');
    //   fetchNotices({ category: pathname, page: page - 1, search });
    // }
    console.log('useEffect');
    console.log('limit', limit);
    console.log('noticesList.length', noticesList.length);
    console.log('totalHits', totalHits);

    if (noticesList.length === 0 && totalHits > limit && page > 1) {
      setPage(page - 1);
      console.log('page-1');
      dispatch(fetchNotices({ category: pathname, page, search }));
    }
  }, [dispatch, limit, noticesList, page, pathname, search, totalHits]);

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
