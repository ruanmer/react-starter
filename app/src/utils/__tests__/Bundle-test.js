/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';

import Bundle from '../Bundle';

describe('Bundle', () => {
  const MockComponent = () => <div>Mock Component</div>;

  it('should render null when no Component is returned', () => {
    const wrapper = shallow(
      <Bundle load={f => f} />
    );

    expect(wrapper.node).toMatchSnapshot();
  });

  it('should call load prop', () => {
    const loadComponent = jest.fn();

    mount(
      <Bundle load={loadComponent} />
    );

    expect(loadComponent).toHaveBeenCalled();
  });

  it('should render the given Component', () => {
    const loadComponent = callback => {
      callback({ default: MockComponent });
    };

    const wrapper = mount(
      <Bundle load={loadComponent} />
    );

    expect(wrapper.html()).toMatchSnapshot();
  });
});
