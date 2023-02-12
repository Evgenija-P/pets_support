import { useEffect, useState } from 'react';
import BASE_URL from '../../../servises/api';
import NewsItem from '../NewsItem/NewsItem';
import Spinner from '../../Spinner/Spinner';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { optionsToast } from '../../../styles/stylesLayout';
import { ReactComponent as SearchIButtonIcon } from '../../../img/icons/searchIButtonIcon.svg';
import {
  ListNews,
  ItemNews,
  ConteinerNews,
  SearchNewsForm,
  SearchNewsInput,
  SearchNewsButton,
} from './NewsList.styled';

const NewsList = () => {
  const [newsItem, setNewsItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [request, setRequest] = useState('');

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

  const handleClear = evt => {
    evt.preventDefault();
    setRequest('');
  };

  const handleChange = evt => {
    setRequest(evt.target.value.trim());
    if (evt.target.value === '') {
      toast.error('Enter the name of the news!', optionsToast);
    }
  };

  const news = newsItem.sort(function (a, b) {
    var dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateB - dateA;
  });

  const filterNews = news.filter(news => {
    return news.title.toLowerCase().includes(request.toLocaleLowerCase());
  });

  return (
    <ConteinerNews>
      <SearchNewsForm>
        <SearchNewsInput
          type="text"
          autoComplete="off"
          autoFocus
          value={request}
          placeholder="Search"
          onChange={handleChange}
        />
        {request.trim() === '' ? (
          <SearchNewsButton type="button" onClick={handleChange}>
            <SearchIButtonIcon />
          </SearchNewsButton>
        ) : (
          <SearchNewsButton type="button" onClick={handleClear}>
            clear
          </SearchNewsButton>
        )}
      </SearchNewsForm>

      <ListNews>
        {error && <p>{error}</p>}
        {isLoading ? (
          <Spinner />
        ) : (
          filterNews.map(({ title, description, date, url }) => (
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
