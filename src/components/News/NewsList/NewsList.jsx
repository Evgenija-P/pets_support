import { useEffect, useState } from 'react';
import BASE_URL from '../../../servises/api';
import NewsItem from '../NewsItem/NewsItem';
import Spinner from '../../Spinner/Spinner';
import { nanoid } from 'nanoid';
import { ListNews, ItemNews, ConteinerNews } from './NewsList.styled';

const NewsList = () => {
  const [newsItem, setNewsItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const responce = await fetch(`${BASE_URL}/news`);
      const result = await responce.json();
      if (result.data.news) {
        setIsLoading(false);
        setNewsItem(result.data.news);
      }
      return result;
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <ConteinerNews>
      <ListNews>
        {error && <p>{error}</p>}
        {isLoading ? (
          <Spinner />
        ) : (
          newsItem.map(({ title, description, date, url }) => (
            <ItemNews key={nanoid()}>
              <NewsItem
                title={title}
                description={description}
                date={date}
                url={url}
              />
            </ItemNews>
          ))
        )}
      </ListNews>
    </ConteinerNews>
  );
};

export default NewsList;
