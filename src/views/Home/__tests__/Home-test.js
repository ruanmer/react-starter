import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';

describe('Home', () => {
  it('should renders', () => {
    const wrapper = shallow(
      <Home />
    );

    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
