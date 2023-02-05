import { Helmet } from 'react-helmet';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import getNoticesByCategory from '../servises/fetchNotices/fetchNoticesByCategory';

import SectionContainer from '../components/SectionContainer';
import NoticesCategoriesNav from '../components/NoticesElements/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from '../components/NoticesElements/NoticesSearch/NoticesSearch';
// import AddNoticeButton from '../components/NoticesElements/AddNoticeButton/AddNoticeButton';
import NoticesCategoriesList from '../components/NoticesElements/NoticesCategoriesList/NoticesCategoriesList';

const NoticesPage = () => {
  const [notices, setNotices] = useState([]);
  const { pathname: category } = useLocation();
  console.log(category);

  useEffect(() => {
    const fetchNotices = async () => {
      const { message } = await getNoticesByCategory(category);
      setNotices(message);
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

        <NoticesCategoriesNav
          categories={[
            'Lost / Found',
            'In good hands',
            'Sell',
            'Favorite ads',
            'My ads',
          ]}
        />

        {/* <AddNoticeButton /> */}

        <NoticesCategoriesList notices={notices} />
      </SectionContainer>
    </>
  );
};

export default NoticesPage;
