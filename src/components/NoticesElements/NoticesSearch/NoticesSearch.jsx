import {
  SearchForm,
  SearchInput,
  SearchFormButton,
} from './NoticesSearch.styled';
import { toast } from 'react-toastify';
import { optionsToast } from '../../../styles/stylesLayout';
import { ReactComponent as SearchIButtonIcon } from '../../../img/icons/searchIButtonIcon.svg';
import { useSelector, useDispatch } from 'react-redux';
import { selectNoticesObj } from '../../../redux/notices/selectors';
import { fetchNotices } from '../../../redux/notices/operations ';
import { ReactComponent as IconsCancel } from '../../../img/icons/IconsCancell.svg';
import { setSearch } from '../../../redux/notices/noticesSlice';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const NoticesSearch = () => {
  const dispatch = useDispatch();
  const { search, category } = useSelector(selectNoticesObj);

  const [formStste, setformStste] = useState(search);

  const [isInSearch, setisInSearch] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== category) {
      dispatch(setSearch(''));
      setformStste('');
      setisInSearch(false);
    }
  }, [category, dispatch, pathname]);

  const handleClear = evt => {
    evt.preventDefault();
    dispatch(setSearch(''));
    setformStste('');
    setisInSearch(false);
    dispatch(fetchNotices({ category: pathname }));
  };

  const handleChange = evt => {
    if (evt.target.value === '') {
      dispatch(setSearch(''));
      setformStste('');
      setisInSearch(false);
      dispatch(fetchNotices({ category: pathname }));
      return;
    }
    setformStste(evt.target.value);
    // console.log('onClick', formStste);
  };

  const handlelupa = evt => {
    if (formStste === '' || formStste === '?') {
      evt.preventDefault();
      toast.warning('Enter the title of notice!', optionsToast);
      return;
    }
    evt.preventDefault();
    dispatch(setSearch(formStste));
    setisInSearch(true);
    dispatch(fetchNotices({ category: pathname, search: formStste }));
  };

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
