import {
  SearchForm,
  SearchInput,
  SearchFormButton,
} from './NoticesSearch.styled';

import { ReactComponent as SearchIcon } from '../../../img/icons/search.svg';

const NoticesSearch = () => {
  return (
    <>
      <SearchForm>
        <SearchInput type="text" placeholder="Search"></SearchInput>
        <SearchFormButton>
          <SearchIcon />
        </SearchFormButton>
      </SearchForm>
    </>
  );
};

export default NoticesSearch;
