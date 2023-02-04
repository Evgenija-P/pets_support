import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar';
import Logo from '../Logo';
import Navigation from '../Navigation/';
import { Container, Header, LogNav } from './SharedLayout.styled';
const SharedLayout = () => {
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
