import useMatchMedia from '../../hooks/use-match-media';
import { BsPersonCircle } from 'react-icons/bs';

import { Nav, NavLinkMenu, NavMobile, Button } from './Navigation.styled';
const Navigation = () => {
  const { isMobile } = useMatchMedia();

  return (
    <>
      {isMobile ? (
        <>
          <Button>
            <NavLinkMenu to="/user">
              <BsPersonCircle size={24} color={'#fff'} /> 
            </NavLinkMenu>
          </Button>
          <NavMobile>
            <NavLinkMenu to="/news">News</NavLinkMenu>
            <NavLinkMenu to="/notices">Find pet</NavLinkMenu>
            <NavLinkMenu to="/friends">Our friends</NavLinkMenu>
          </NavMobile>
        </>
      ) : (
        <Nav>
          <NavLinkMenu to="/news">News</NavLinkMenu>
          <NavLinkMenu to="/notices">Find pet</NavLinkMenu>
          <NavLinkMenu to="/friends">Our friends</NavLinkMenu>
        </Nav>
      )}
    </>
  );
};

export default Navigation;
