import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';

import * as styles from './styles';

const Wrapper = styled.header`${styles.wrapper}`;
const NavLink = styled(RouterNavLink)`${styles.navLink}`;

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
