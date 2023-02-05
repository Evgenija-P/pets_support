import { Helmet } from 'react-helmet';
import NoticesCategoriesNav from '../components/NoticesCategoriesNav';

const NoticesPage = () => {
  return (
    <div>
      <Helmet>
        <title>NoticesPage</title>
      </Helmet>
      <NoticesCategoriesNav />
    </div>
  );
};
export default NoticesPage;
