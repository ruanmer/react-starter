import React from 'react';
import styled from 'styled-components';

import { wrapperStyles, titleStyles } from './style';

const Wrapper = styled.section`${wrapperStyles}`;
const Title = styled.h1`${titleStyles}`;

export default function HelloComponent () {
  return (
    <Wrapper>
      <Title>Hello!!</Title>
    </Wrapper>
  );
}
