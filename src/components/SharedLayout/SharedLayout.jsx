import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import useMatchMedia from '../../hooks/use-match-media';
import AppBar from '../AppBar';
import Logo from '../Logo';
import Navigation from '../Navigation/';
import { Container, Header, LogNav } from './SharedLayout.styled';
const SharedLayout = () => {
  const { isMobile, isTablet } = useMatchMedia();
  if (isMobile) {
    return (
      <Container>
        <Header>
          <Logo />
          <Navigation />
        </Header>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    );
  } else if (isTablet) {
    return (
      <Container>
        <Header>
          <Logo />
          <LogNav>
            <AppBar />
            <Navigation />
          </LogNav>
        </Header>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    );
  } else
    return (
      <Container>
        <Header>
          <LogNav>
            <Logo />
            <Navigation />
          </LogNav>
          <AppBar />
        </Header>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    );
};

export default SharedLayout;
