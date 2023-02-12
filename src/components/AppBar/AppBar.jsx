import useAuth from '../../hooks/useAuth';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { Buttons } from './AppBar.styled';
import useMatchMedia from '../../hooks/use-match-media';


const AppBar = ({ onClick }) => {
	 const { isMobile } = useMatchMedia();

	const { isLoggedIn } = useAuth();
	const handleOnClick = (nav) => {
		onClick(nav);
	}

if (isMobile)
{
	return (
	
    <Buttons onClick={handleOnClick}>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Buttons>
  );
} else {
	return (
	
    <Buttons>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Buttons>
  );

}

  
};
export default AppBar;
