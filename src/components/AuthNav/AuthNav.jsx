import { AuthNavLink, AuthNavList } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthNavList>
      <li>
        <AuthNavLink to="/login">Login</AuthNavLink>
      </li>
      <li>
        <AuthNavLink to="/register">Registration</AuthNavLink>
      </li>
    </AuthNavList>
  );
};

export default AuthNav;
