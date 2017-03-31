import React from 'react';
import { render } from 'react-dom';

import './global-styles';

import HelloView from 'views/HelloView';

render(
  <HelloView />,
  document.getElementById('App')
);
