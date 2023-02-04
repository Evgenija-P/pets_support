import { BsPersonCircle } from 'react-icons/bs';
import { NavLinkDec, Button, Sp } from './UserMenu.styled';

const UserMenu = () => {
  return (
    <Button>
      <NavLinkDec to="/user">
        <BsPersonCircle size={24} color={'#fff'} /> <Sp>Account</Sp>
      </NavLinkDec>
    </Button>
  );
};

export default UserMenu;
