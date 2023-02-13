import {
  SearchForm,
  SearchInput,
  SearchFormButton,
  // FormErrorMessage,
} from './NoticesSearch.styled';
// import { Formik, ErrorMessage } from 'formik';

import { toast } from 'react-toastify';
import { optionsToast } from '../../../styles/stylesLayout';
// import * as yup from 'yup';
import { ReactComponent as SearchIButtonIcon } from '../../../img/icons/searchIButtonIcon.svg';
// import { setSearch } from '../../../redux/notices/noticesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectNoticesObj } from '../../../redux/notices/selectors';
// import { fetchNotices } from '../../../redux/notices/operations ';

import { setSearch } from '../../../redux/notices/noticesSlice';
const NoticesSearch = () => {
  const dispatch = useDispatch();
  const {
    // noticesList,
    // selectedNotic,
    // page,
    // totalHits,
    // isLoading,

    // error,
    search,
    // limit,
  } = useSelector(selectNoticesObj);
  const handleClear = evt => {
    evt.preventDefault();
    dispatch(setSearch(''));
  };

  const handleChange = evt => {
    dispatch(setSearch(evt.target.value));
  };

  const handlelupa = evt => {
    if (search === '') {
      toast.warning('Enter the title of notice!', optionsToast);
    }
  };

  // const news = newsItem.sort(function (a, b) {
  //   var dateA = new Date(a.date),
  //     dateB = new Date(b.date);
  //   return dateB - dateA;
  // });

  // const filterNews = news.filter(news => {
  //   return news.title.toLowerCase().includes(search.toLowerCase());
  // });

  return (
    <>
      <SearchForm>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          value={search}
          placeholder="Search"
          onChange={handleChange}
        />
        {search.trim() === '' ? (
          <SearchFormButton type="button" onClick={handlelupa}>
            <SearchIButtonIcon />
          </SearchFormButton>
        ) : (
          <SearchFormButton type="button" onClick={handleClear}>
            clear
          </SearchFormButton>
        )}
      </SearchForm>
    </>
  );
};

export default NoticesSearch;
