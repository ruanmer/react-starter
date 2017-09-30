import React from 'react';
import { shallow } from 'enzyme';

import AppMain from '../AppMain';

describe('AppMain', () => {
  it('should renders', () => {
    const wrapper = shallow(
      <AppMain />
    );

    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
