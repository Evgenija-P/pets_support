import {
  NoticesCategoriesList,
  NoticesCategoriesButton,
} from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = ({ categories }) => {
  return (
    <NoticesCategoriesList>
      {categories.map(category => (
        <li key={category}>
          <NoticesCategoriesButton category={category} name={category}>
            {category}
          </NoticesCategoriesButton>
        </li>
      ))}
    </NoticesCategoriesList>
  );
};

export default NoticesCategoriesNav;
