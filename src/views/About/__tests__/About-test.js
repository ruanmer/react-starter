import React from 'react';
import { shallow } from 'enzyme';

import About from '../About';

describe('About', () => {
  it('should renders', () => {
    const wrapper = shallow(
      <About />
    );

    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
