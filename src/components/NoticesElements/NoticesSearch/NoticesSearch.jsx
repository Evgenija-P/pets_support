import {
  SearchForm,
  SearchInput,
  SearchFormButton,
  FormErrorMessage,
} from './NoticesSearch.styled';
import { Formik, ErrorMessage } from 'formik';
// import * as yup from 'yup';
import { ReactComponent as SearchIButtonIcon } from '../../../img/icons/searchIButtonIcon.svg';
// import { setSearch } from '../../../redux/notices/noticesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectNoticesObj } from '../../../redux/notices/selectors';
import { fetchNotices } from '../../../redux/notices/operations ';
import { useLocation } from 'react-router-dom';
import { setSearch } from '../../../redux/notices/noticesSlice';
const NoticesSearch = () => {
  const { isLoading, search: searchState } = useSelector(selectNoticesObj);
  const initialValues = {
    search: searchState,
  };
  // console.log('searchState ', searchState);
  // const { isLoading, search: searchState } = useSelector(selectNoticesObj);
  const dispatch = useDispatch();

  // const schema = yup.object().shape({
  //   search: yup
  //     .string()
  //     .max(20)
  //     .matches(
  //       /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
  //       'Search may contain only letters, apostrophe, dash and spaces. '
  //     )
  //     .required(),
  // });
  const { pathname: category } = useLocation();

  const heandleSubmitForm = (values, { resetForm }) => {
    const { search } = values;
    // console.log(search);
    // console.log(category);
    const normalizedSearch = search.toLocaleLowerCase();
    if (normalizedSearch && normalizedSearch !== searchState) {
      // console.log(search);
      dispatch(setSearch(normalizedSearch));
      dispatch(fetchNotices({ category, search: normalizedSearch }));
    }
  };

  const onChangeForm = event => {
    const search = event.target.value;
    // console.log('serch change', event.target.value);
    if (!search) {
      dispatch(fetchNotices({ category }));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={schema}
      onSubmit={heandleSubmitForm}
      onChange={() => {
        // console.log('changing');
      }}
    >
      <SearchForm onChange={onChangeForm}>
        <SearchInput
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
        ></SearchInput>
        <ErrorMessage name="search" component={FormErrorMessage} />
        <SearchFormButton
          type="submit"
          disabled={isLoading}
          className="button"
          aria-label="Search"
        >
          <SearchIButtonIcon />
        </SearchFormButton>
      </SearchForm>
    </Formik>
  );
};

export default NoticesSearch;
