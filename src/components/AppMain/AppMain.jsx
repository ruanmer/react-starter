import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  padding: 60px;
  font-size: 30px;
  text-align: center;
`;

export default function AppMain (props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}
