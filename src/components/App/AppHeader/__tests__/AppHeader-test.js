import React from 'react';
import { shallow } from 'enzyme';

import AppHeader from '../AppHeader';

describe('AppHeader', () => {
  it('should renders', () => {
    const wrapper = shallow(
      <AppHeader />
    );

    expect(wrapper.node).toMatchSnapshot();
  });
});
