import { Helmet } from 'react-helmet';

// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

import SectionContainer from '../components/SectionContainer';
import NoticesCategoriesNav from '../components/NoticesElements/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from '../components/NoticesElements/NoticesSearch/NoticesSearch';
// import AddNoticeButton from '../components/NoticesElements/AddNoticeButton/AddNoticeButton';
// import NoticesCategoriesList from '../components/NoticesElements/NoticesCategoriesList/NoticesCategoriesList';
import { fetchContacts } from '../redux/contacts/operations ';
import { selectContactsObj } from '../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
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
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      </SectionContainer>
    </>
  );
};

export default NoticesPage;
