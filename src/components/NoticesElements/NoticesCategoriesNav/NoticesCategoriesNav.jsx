import NoticesAuthNav from '../NoticesAuthNav';
import NoticesUserNav from '../NoticesUserNav';
import useAuth from '../../../hooks/useAuth';

const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();

  return <div>{isLoggedIn ? <NoticesUserNav /> : <NoticesAuthNav />}</div>;
};

export default NoticesCategoriesNav;
