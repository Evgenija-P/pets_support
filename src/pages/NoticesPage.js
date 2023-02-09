import { Helmet } from 'react-helmet';

// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';
// import getNoticesByCategory from '../servises/fetchNotices';
// import { useLocation } from 'react-router-dom';
import SectionContainer from '../components/SectionContainer';
import NoticesCategoriesNav from '../components/NoticesElements/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from '../components/NoticesElements/NoticesSearch/NoticesSearch';
import NoticesGallary from '../components/NoticesElements/NoticesGallary';
// // import AddNoticeButton from '../components/NoticesElements/AddNoticeButton/AddNoticeButton';
// import NoticesCategoriesListSecond from '../components/NoticesElements/NoticesCategoriesListSecond';
// import {
//   fetchNotices,
//   fetchFavoriteNotices,
// } from '../redux/notices/operations ';
// import { selectNoticesObj } from '../redux/notices/selectors';
// import { useDispatch } from 'react-redux';

// import { setCategory } from '../redux/notices/noticesSlice';
// import Spinner from '../components/Spinner';
const NoticesPage = () => {
  // const [notices, setNotices] = useState([]);
  // const { pathname: category } = useLocation();

  // useEffect(() => {
  //   console.log(category);

  //   const fetchNotices = async () => {
  //     const { message: result } = await getNoticesByCategory(category);
  //     setNotices(result);
  //     try {
  //     } catch (error) {}
  //   };

  //   fetchNotices();
  // }, [category]);

  // const dispatch = useDispatch();

  // Получаем части состояния
  // const { isLoading, error } = useSelector(selectNoticesObj);
  // // Вызываем операцию
  // const { pathname: category } = useLocation();
  // // const [state, setstate] = useState(initialState);

  // // useEffect(() => {
  // //   dispatch(fetchFavoriteNotices());
  // // }, [dispatch]);
  // const { isLoggedIn } = useAuth();

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     dispatch(fetchFavoriteNotices({ category: '/notices/favorite' }));
  //   }

  //   dispatch(fetchNotices({ category }));
  // }, [dispatch, category, isLoggedIn]);

  return (
    <>
      <Helmet>
        <title>NoticesPage</title>
      </Helmet>

      <SectionContainer title="Find your favorite pet">
        <NoticesSearch />

        <NoticesCategoriesNav />
        <NoticesGallary />
        {/* {isLoading && <Loader />} */}
        {/* {error && <p>{error}</p>}
        <div>{isLoading && 'Request in progress...'}</div> */}
        {/* {isLoading && <Spinner />} */}
        {/* <div>{!error && !isLoading && 'Data recived...'}</div> */}
        {/* {!error && !isLoading && <NoticesCategoriesListSecond />} */}
        {/* <NoticesCategoriesListSecond /> */}
      </SectionContainer>
    </>
  );
};

export default NoticesPage;
