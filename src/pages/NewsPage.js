import { Helmet } from 'react-helmet';
import { useState } from 'react';
import NewsSerch from '../components/News/NewsSearch/NewsSearch';
import SectionContainer from '../components/SectionContainer';
// import NoticesSearch from '../components/NoticesElements/NoticesSearch/NoticesSearch';
import NewsList from '../components/News/NewsList/NewsList';

const NewsPage = () => {
  const [request, setRequest] = useState('');

  const formSubmitHandler = ({ request }) => {
    setRequest(request);
  };

  return (
    <>
      <Helmet>
        <title>NewsPage</title>
      </Helmet>

      <SectionContainer title="News">
        <NewsSerch onSubmit={formSubmitHandler} />
        <NewsList request={request} />
      </SectionContainer>
    </>
  );
};
export default NewsPage;
