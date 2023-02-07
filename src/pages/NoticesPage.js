import { Helmet } from 'react-helmet';

// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

import SectionContainer from '../components/SectionContainer';
import NoticesCategoriesNav from '../components/NoticesElements/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from '../components/NoticesElements/NoticesSearch/NoticesSearch';
// import AddNoticeButton from '../components/NoticesElements/AddNoticeButton/AddNoticeButton';
import NoticesCategoriesListSecond from '../components/NoticesElements/NoticesCategoriesListSecond';
import { fetchContacts } from '../redux/contacts/operations ';
import { selectContactsObj } from '../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { setCategory } from '../redux/contacts/contactsSlice';
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

  const dispatch = useDispatch();

  // Получаем части состояния
  const { contactList, isLoading, error } = useSelector(selectContactsObj);
  // Вызываем операцию
  const { pathname: category } = useLocation();
  // const [state, setstate] = useState(initialState);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(setCategory(category));
  }, [category, dispatch]);

  return (
    <>
      <Helmet>
        <title>NoticesPage</title>
      </Helmet>

      <SectionContainer title="Find your favorite pet">
        <NoticesSearch />

        <NoticesCategoriesNav />
        {/* {isLoading && <Loader />} */}
        {error && <p>{error}</p>}
        <div>{isLoading && 'Request in progress...'}</div>
        <div>{'Data recived...'}</div>
        {!error && !isLoading && <NoticesCategoriesListSecond />}
        {/* <NoticesCategoriesListSecond /> */}
      </SectionContainer>
    </>
  );
};

export default NoticesPage;
