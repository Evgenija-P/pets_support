import useMatchMedia from '../../hooks/use-match-media';

import { Nav, NavLinkMenu} from './Navigation.styled';
const Navigation = () => {
  const { isMobile } = useMatchMedia();

  return (
    <>
      {isMobile ? (
        <p>Мобилка</p>
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
