import {
  SearchForm,
  SearchInput,
  SearchFormButton,
} from './NoticesSearch.styled';

import { FaSearch } from 'react-icons/fa';

const NoticesSearch = () => {
  return (
    <>
      <SearchForm>
        <SearchInput type="text" placeholder="Search"></SearchInput>
        <SearchFormButton>
          <FaSearch />
        </SearchFormButton>
      </SearchForm>
    </>
  );
};

export default NoticesSearch;
