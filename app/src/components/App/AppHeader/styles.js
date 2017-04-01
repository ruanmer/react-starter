import { css } from 'styled-components';

export const wrapper = css`
  display: flex;
  justify-content: center;
  padding: 40px;
  background: lightgray;
`;

export const navLink = css`
  &.active {
    font-weight: bold;
  }
`;
