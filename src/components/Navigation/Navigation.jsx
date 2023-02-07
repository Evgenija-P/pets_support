import { GiHamburgerMenu } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';
import useMatchMedia from '../../hooks/use-match-media';
import AppBar from '../AppBar';
import Logo from '../Logo';

import NoticesCategoriesNav from '../NoticesElements/NoticesCategoriesNav';

import { useState } from 'react';
import {
  Button,
  HeaderBurger,
  Nav,
  NavLinkMenu,
  NavLinkMenuBurger,
  NavMobile,
} from './Navigation.styled';

const Burger = {
  transform: 'translateY(0%)',
};

const Navigation = () => {
  const { isTablet, isMobile } = useMatchMedia();
  const [nav, setNav] = useState(false);

  if (isTablet) {
    return (
      <Nav>
        <Button>
          <NavLinkMenuBurger onClick={() => setNav(!nav)}>
            <GiHamburgerMenu size={30} color={'#000'} />
          </NavLinkMenuBurger>
        </Button>
        {nav ? (
          <NavMobile style={Burger}>
            <HeaderBurger>
              <Logo />
              <GrFormClose
                size={40}
                color={'#000'}
                onClick={() => setNav(!nav)}
              />
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
            <NavLinkMenu to="/notices" component={<NoticesCategoriesNav />}>
              Find pet
            </NavLinkMenu>
            <NavLinkMenu to="/friends">Our friends</NavLinkMenu>
          </NavMobile>
        )}
      </Nav>
    );
  } else if (isMobile) {
    return (
      <Nav>
        <Button>
          <NavLinkMenuBurger onClick={() => setNav(!nav)}>
            <GiHamburgerMenu size={30} color={'#000'} />
          </NavLinkMenuBurger>
        </Button>
        {nav ? (
          <NavMobile style={Burger}>
            <HeaderBurger>
              <Logo />
              <GrFormClose
                size={40}
                color={'#000'}
                onClick={() => setNav(!nav)}
              />
            </HeaderBurger>
            <AppBar />
            <NavLinkMenu to="/news" onClick={() => setNav(!nav)}>
              News
            </NavLinkMenu>
            <NavLinkMenu
              to="/notices"
              component={<NoticesCategoriesNav />}
              onClick={() => setNav(!nav)}
            >
              Find pet
            </NavLinkMenu>
            <NavLinkMenu to="/friends" onClick={() => setNav(!nav)}>
              Our friends
            </NavLinkMenu>
          </NavMobile>
        ) : (
          <NavMobile>
            <NavLinkMenu to="/news">News</NavLinkMenu>
            <NavLinkMenu to="/notices" component={<NoticesCategoriesNav />}>
              Find pet
            </NavLinkMenu>
            <NavLinkMenu to="/friends">Our friends</NavLinkMenu>
          </NavMobile>
        )}
      </Nav>
    );
  } else {
    return (
      <>
        {isTablet || isMobile ? (
          <Nav>
            <Button>
              <NavLinkMenuBurger onClick={() => setNav(!nav)}>
                <GiHamburgerMenu size={30} color={'#000'} />
              </NavLinkMenuBurger>
            </Button>
            {nav ? (
              <NavMobile style={Burger}>
                <HeaderBurger>
                  <Logo />
                  <GrFormClose
                    size={40}
                    color={'#000'}
                    onClick={() => setNav(!nav)}
                  />
                </HeaderBurger>
                <NavLinkMenu to="/news" onClick={() => setNav(!nav)}>
                  News
                </NavLinkMenu>
                <NavLinkMenu
                  to="/notices"
                  component={<NoticesCategoriesNav />}
                  onClick={() => setNav(!nav)}
                >
                  Find pet
                </NavLinkMenu>
                <NavLinkMenu to="/friends" onClick={() => setNav(!nav)}>
                  Our friends
                </NavLinkMenu>
              </NavMobile>
            ) : (
              <NavMobile>
                <NavLinkMenu to="/news">News</NavLinkMenu>
                <NavLinkMenu to="/notices" component={<NoticesCategoriesNav />}>
                  Find pet
                </NavLinkMenu>
                <NavLinkMenu to="/friends">Our friends</NavLinkMenu>
              </NavMobile>
            )}
          </Nav>
        ) : (
          <Nav>
            <NavLinkMenu to="/news">News</NavLinkMenu>
            <NavLinkMenu to="/notices" component={<NoticesCategoriesNav />}>
              Find pet
            </NavLinkMenu>
            <NavLinkMenu to="/friends">Our friends</NavLinkMenu>
          </Nav>
        )}
      </>
    );
  }
};

export default Navigation;
