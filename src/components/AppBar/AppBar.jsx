import useAuth from '../../hooks/useAuth';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { Buttons } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
	// const isLoggedIn  = null;

  return (
    <Buttons>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Buttons>
  );
};
export default AppBar;
