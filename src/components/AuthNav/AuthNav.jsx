import { NavLinkLog, NavLinkReg, ButtonLog, ButtonReg, Sp, User } from './AuthNav.styled';

const AuthNav = () => {
	return (
    <User>
      <ButtonLog>
        <NavLinkLog to="/login">
          <Sp>Login</Sp>
        </NavLinkLog>
      </ButtonLog>
      <ButtonReg>
        <NavLinkReg to="/register">
          <Sp>Registration</Sp>
        </NavLinkReg>
      </ButtonReg>
    </User>
  );
};

export default AuthNav;
