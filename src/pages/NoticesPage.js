import { Helmet } from 'react-helmet';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import getNoticesByCategory from '../servises/fetchNotices';

import SectionContainer from '../components/SectionContainer';
import NoticesCategoriesNav from '../components/NoticesElements/NoticesCategoriesNav';
import NoticesCategoriesList from '../components/NoticesElements/NoticesCategoriesList/';
import NoticesSearch from '../components/NoticesElements/NoticesSearch';

const NoticesPage = () => {
  const [notices, setNotices] = useState([]);
  const { pathname: category } = useLocation();

  useEffect(() => {
    console.log(category);

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
      <Helmet>
        <title>NoticesPage</title>
      </Helmet>

      <SectionContainer title="Find your favorite pet">
        <NoticesSearch />

        <NoticesCategoriesNav />

        <NoticesCategoriesList notices={notices} />
      </SectionContainer>
    </>
  );
};

export default NoticesPage;
