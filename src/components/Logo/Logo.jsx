import { NavLink } from 'react-router-dom';
import logoImg from '../../img/logo.png';

const Logo = () => {
  return (
    <div>
      <NavLink to="/">
        <img src={logoImg} alt="petly" />
      </NavLink>
    </div>
  );
};

export default Logo;
