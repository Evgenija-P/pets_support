import { Helmet } from 'react-helmet';
import SectionContainer from '../components/SectionContainer';
import NoticesSearch from '../components/NoticesElements/NoticesSearch/NoticesSearch';
import NewsList from '../components/News/NewsList/NewsList';

const NewsPage = () => {
  return (
    <>
      <Helmet>
        <title>NewsPage</title>
      </Helmet>

      <SectionContainer title="News">
        <NoticesSearch />
        <NewsList />
      </SectionContainer>
    </>
  );
};
export default NewsPage;
