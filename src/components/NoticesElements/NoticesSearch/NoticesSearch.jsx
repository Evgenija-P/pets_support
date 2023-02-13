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
import { fetchNotices } from '../../../redux/notices/operations ';
// import { fetchNotices } from '../../../redux/notices/operations ';
import { ReactComponent as IconsCancel } from '../../../img/icons/IconsCancell.svg';
import { setSearch } from '../../../redux/notices/noticesSlice';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
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
  const [formStste, setformStste] = useState(search);
  const [isInSearch, setisInSearch] = useState(false);
  const handleClear = evt => {
    evt.preventDefault();
    dispatch(setSearch(''));
    setformStste('');
    setisInSearch(false);
    dispatch(fetchNotices({ category: pathname }));
  };
  const { pathname } = useLocation();
  const handleChange = evt => {
    if (evt.target.value === '') {
      dispatch(setSearch(''));
      setformStste('');
      setisInSearch(false);
      dispatch(fetchNotices({ category: pathname }));
      return;
    }
    setformStste(evt.target.value);
    console.log('onClick', formStste);
  };

  const handlelupa = evt => {
    if (formStste === '') {
      toast.warning('Enter the title of notice!', optionsToast);
    }
    evt.preventDefault();
    dispatch(setSearch(formStste));
    dispatch(fetchNotices({ category: pathname, search: formStste }));
    setisInSearch(true);
  };

  // const handleChange = evt => {
  //   evt.preventDefault();
  //   setValue(evt.target.value);
  // };

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
          value={formStste}
          placeholder="Search"
          onChange={handleChange}
        />
        {!isInSearch ? (
          <SearchFormButton type="sabmit" onClick={handlelupa}>
            <SearchIButtonIcon />
          </SearchFormButton>
        ) : (
          <SearchFormButton type="sabmit" onClick={handleClear}>
            <IconsCancel width={'100%'} height={'100%'} />
          </SearchFormButton>
        )}
      </SearchForm>
    </>
  );
};

export default NoticesSearch;
