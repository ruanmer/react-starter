import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    margin:0;
    padding:0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #App {
    min-width: 100%;
    min-height: 100%;
  }
`;
