import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
`;

export const Header = styled.header`
  display: flex;
  aling-items: center;
  justify-content: space-between;
`;

export const NavLink = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;

  &.active {
    color: white;
    backround-color: #3015a8;
  }
`;
