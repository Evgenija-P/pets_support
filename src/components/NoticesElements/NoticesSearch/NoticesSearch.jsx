import {
  SearchForm,
  SearchInput,
  SearchFormButton,
} from './NoticesSearch.styled';

import { ReactComponent as SearchIButtonIcon } from '../../../img/icons/searchIButtonIcon.svg';

const NoticesSearch = () => {
  return (
    <SearchForm>
      <SearchInput type="text" placeholder="Search"></SearchInput>
      <SearchFormButton type="submit">
        <SearchIButtonIcon />
      </SearchFormButton>
    </SearchForm>
  );
};

export default NoticesSearch;
