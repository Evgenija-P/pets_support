import { useEffect, useState } from 'react';
import BASE_URL from '../../../servises/api';
import NewsItem from '../NewsItem/NewsItem';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { optionsToast } from '../../../styles/stylesLayout';
import { ReactComponent as SearchIButtonIcon } from '../../../img/icons/searchIButtonIcon.svg';
import { ReactComponent as IconsCancel } from '../../../img/icons/IconsCancell.svg';
import {
  ListNews,
  ItemNews,
  ConteinerNews,
  SearchNewsForm,
  SearchNewsInput,
  SearchNewsButton,
  ErrorTitle,
  SpinerWrapper,
} from './NewsList.styled';
import Spinner from '../../Spinner';

const NewsList = () => {
  const [newsItem, setNewsItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState('');
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
    setValue('');
  };

  const handleChange = evt => {
    setValue(evt.target.value);
  };

  const handlelupa = evt => {
    evt.preventDefault();
    if (value === '') {
      toast.error('Enter the name of the news!', optionsToast);
    }
    setRequest(value);
  };

  const news = newsItem.sort(function (a, b) {
    var dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateB - dateA;
  });

  const filterNews = news.filter(news => {
    return news.title.toLowerCase().includes(request.toLowerCase());
  });

  return (
    <ConteinerNews>
      <SearchNewsForm>
        <SearchNewsInput
          type="text"
          autoComplete="off"
          autoFocus
          value={value}
          placeholder="Search"
          onChange={handleChange}
        />
        {request === '' ? (
          <SearchNewsButton type="sabmit" onClick={handlelupa}>
            <SearchIButtonIcon />
          </SearchNewsButton>
        ) : (
          <SearchNewsButton type="sabmit" onClick={handleClear}>
            <IconsCancel width={'100%'} height={'100%'} />
          </SearchNewsButton>
        )}
      </SearchNewsForm>

      <ListNews>
        {isLoading ? (
          <SpinerWrapper>
            <Spinner />
          </SpinerWrapper>
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
        {(filterNews.length === 0 || error) && !isLoading && (
          <ErrorTitle>
            Nothing found for your search, please try again
          </ErrorTitle>
        )}
      </ListNews>
    </ConteinerNews>
  );
};

export default NewsList;
