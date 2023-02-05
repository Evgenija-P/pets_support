import { GiHamburgerMenu } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';
import useMatchMedia from '../../hooks/use-match-media';
import Logo from '../Logo';

import { useState } from 'react';
import {
  Button,
  Nav,
  NavLinkMenu,
  NavLinkMenuBurger,
  NavMobile,
  HeaderBurger,
} from './Navigation.styled';

const Burger = {
  transform: 'translateY(0%)',
};

const Navigation = () => {
  const { isTablet, isMobile } = useMatchMedia();
  const [nav, setNav] = useState(false);

  return (
    <>
      {isTablet || isMobile ? (
        <Nav>
          <Button>
            <NavLinkMenuBurger onClick={() => setNav(!nav)}>
              {nav ? (
                <GrFormClose size={30} color={'#000'} />
              ) : (
                <GiHamburgerMenu size={30} color={'#000'} />
              )}
            </NavLinkMenuBurger>
          </Button>
          {nav ? (
            <NavMobile style={Burger}>
              <HeaderBurger>
                <Logo />
                <GrFormClose size={30} color={'#000'} />
              </HeaderBurger>
              <NavLinkMenu to="/news" onClick={() => setNav(!nav)}>
                News
              </NavLinkMenu>
              <NavLinkMenu to="/notices" onClick={() => setNav(!nav)}>
                Find pet
              </NavLinkMenu>
              <NavLinkMenu to="/friends" onClick={() => setNav(!nav)}>
                Our friends
              </NavLinkMenu>
            </NavMobile>
          ) : (
            <NavMobile>
              <NavLinkMenu to="/news">News</NavLinkMenu>
              <NavLinkMenu to="/notices">Find pet</NavLinkMenu>
              <NavLinkMenu to="/friends">Our friends</NavLinkMenu>
            </NavMobile>
          )}
        </Nav>
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
