import {
  NoticesCategoriesListLink,
  NoticesCategoriesLink,
} from '../NoticesCategoriesNav/NoticesCategoriesNav.styled';
import { useLocation } from 'react-router-dom';
import { setCategory } from '../../../redux/notices/noticesSlice';
import { useDispatch } from 'react-redux';

const NoticesAuthNav = () => {
  const { pathname: category } = useLocation();
  const dispatch = useDispatch();
  dispatch(setCategory(category));
  // useEffect(() => {
  //   const fetchNotices = async () => {
  //     const { message: result } = await getNoticesByCategory(category);
  //     setNotices(result);
  //     try {
  //     } catch (error) {}
  //   };

  //   fetchNotices();
  // }, [category]);

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
      {/* 
      <NoticesCategoriesList notices={notices} /> */}
    </>
  );
};

export default NoticesAuthNav;
