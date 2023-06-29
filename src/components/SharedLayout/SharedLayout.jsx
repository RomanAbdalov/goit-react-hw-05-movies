import { Outlet } from 'react-router-dom';
import { Container, Header, NavLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
