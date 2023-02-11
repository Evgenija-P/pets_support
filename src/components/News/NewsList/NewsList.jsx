import { useEffect, useState } from 'react';
import BASE_URL from '../../../servises/api';
import NewsItem from '../NewsItem/NewsItem';
import Spinner from '../../Spinner/Spinner';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { optionsToast } from '../../../styles/stylesLayout';
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
      setError('Oh! Something wrong! Please try again in a few minutes');
      toast.error('Oh! Something wrong!', optionsToast);
      console.log(error.message);
    }
  };
  const news = newsItem.sort(function (a, b) {
    var dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateB - dateA;
  });

  return (
    <ConteinerNews>
      <ListNews>
        {error && <p>{error}</p>}
        {isLoading ? (
          <Spinner />
        ) : (
          news.map(({ title, description, date, url }) => (
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
