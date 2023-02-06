// import { NavLink } from 'react-router-dom';
import NoticesAuthNav from '../NoticesAuthNav';
import NoticesUserNav from '../NoticesUserNav';
import useAuth from '../../../hooks/useAuth';

const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();

  return <div>{isLoggedIn ? <NoticesAuthNav /> : <NoticesUserNav />}</div>;
};

export default NoticesCategoriesNav;
