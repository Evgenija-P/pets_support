import useAuth from '../../../hooks/useAuth';

import NoticesAuthNav from '../NoticesAuthNav';
import NoticesUserNav from '../NoticesUserNav';
import AddNoticeButton from '../AddNoticeButton';

import { NoticesCategoriesContainer } from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = ({ notices }) => {
  const { isLoggedIn } = useAuth();

  return (
    <NoticesCategoriesContainer>
      <AddNoticeButton />
      {isLoggedIn ? (
        <NoticesAuthNav notices={notices} />
      ) : (
        <NoticesUserNav notices={notices} />
      )}
    </NoticesCategoriesContainer>
  );
};

export default NoticesCategoriesNav;
