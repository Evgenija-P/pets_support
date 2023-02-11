import { toast } from 'react-toastify';
import { optionsToast } from '../../../styles/stylesLayout';
import { useState } from 'react';
import { ReactComponent as SearchIButtonIcon } from '../../../img/icons/searchIButtonIcon.svg';
import {
  SearchNewsForm,
  SearchNewsInput,
  SearchNewsButton,
} from './NewsSearch.styled';

const NewsSerch = ({ onSubmit }) => {
  const [request, setRequest] = useState('');

  const handleChange = evt => {
    setRequest(evt.target.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (request.trim() === '') {
      toast.error('Enter the name of the news!', optionsToast);
      return;
    }
    onSubmit({ request });
  };

  return (
    <SearchNewsForm onSubmit={handleSubmit}>
      <SearchNewsInput
        type="text"
        autoComplete="off"
        autoFocus
        value={request}
        placeholder="Search"
        onChange={handleChange}
      />
      <SearchNewsButton type="submit">
        <SearchIButtonIcon />
      </SearchNewsButton>
    </SearchNewsForm>
  );
};

export default NewsSerch;
