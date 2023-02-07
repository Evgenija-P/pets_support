import {
  NoticesCategoriesListLink,
  NoticesCategoriesLink,
} from '../NoticesCategoriesNav/NoticesCategoriesNav.styled';

const NoticesAuthNav = () => {
  return (
    <>
      <NoticesCategoriesListLink>
        <li>
          <NoticesCategoriesLink to="/notices/sell">Sell</NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="/notices/lost-found">
            Lost / Found
          </NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="/notices/for-free">
            In good hands
          </NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="/notices/favorite">
            Favorite ads
          </NoticesCategoriesLink>
        </li>
        <li>
          <NoticesCategoriesLink to="/notices/own">
            My ads
          </NoticesCategoriesLink>
        </li>
      </NoticesCategoriesListLink>
    </>
  );
};

export default NoticesAuthNav;
