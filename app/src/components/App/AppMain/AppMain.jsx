import React from 'react';
import styled from 'styled-components';

import * as styles from './styles';

const Wrapper = styled.main`${styles.wrapper}`;

export default function AppMain (props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}
