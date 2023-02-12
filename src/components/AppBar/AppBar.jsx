import useAuth from '../../hooks/useAuth';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { Buttons } from './AppBar.styled';


const AppBar = ({ onClick }) => {

	const { isLoggedIn } = useAuth();
	const handleOnClick = (nav) => {
		onClick(nav);
	}

  return (
    <Buttons onClick={handleOnClick}>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Buttons>
  );
};
export default AppBar;
