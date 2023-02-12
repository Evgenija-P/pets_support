import { Helmet } from 'react-helmet';
import SectionContainer from '../components/SectionContainer';
import NewsList from '../components/News/NewsList/NewsList';

const NewsPage = () => {
  return (
    <>
      <Helmet>
        <title>NewsPage</title>
      </Helmet>

      <SectionContainer title="News">
        <NewsList />
      </SectionContainer>
    </>
  );
};
export default NewsPage;
