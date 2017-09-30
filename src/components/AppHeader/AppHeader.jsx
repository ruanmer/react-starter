import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  padding: 40px;
  background: lightgray;
`;

const NavLink = styled(RouterNavLink)`
  &.active {
    font-weight: bold;
  }
`;

export default function AppHeader (props) {
  return (
    <Wrapper>
      <nav>
        <NavLink exact to="/">Home</NavLink>
        {' | '}
        <NavLink to="/about">About</NavLink>
      </nav>
    </Wrapper>
  );
}
