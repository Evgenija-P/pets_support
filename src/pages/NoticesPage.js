import { Helmet } from 'react-helmet';
import SectionContainer from '../components/SectionContainer';
import { Outlet } from 'react-router-dom';
import NoticesCategoriesNav from '../components/NoticesElements/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from '../components/NoticesElements/NoticesSearch/NoticesSearch';
import NoticesGallary from '../components/NoticesElements/NoticesGallary';

const NoticesPage = () => {
  return (
    <>
      <Helmet>
        <title>NoticesPage</title>
      </Helmet>
      <SectionContainer title="Find your favorite pet">
        <NoticesSearch />
        <NoticesCategoriesNav />
        <Outlet />
        <NoticesGallary />
      </SectionContainer>
    </>
  );
};

export default NoticesPage;
