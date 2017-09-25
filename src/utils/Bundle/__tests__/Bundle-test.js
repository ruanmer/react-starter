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

  it('should set mounted true when componentDidMount', () => {
    const wrapper = mount(
      <Bundle load={f => f} />
    );

    const wrapperInstance = wrapper.instance();

    expect(wrapperInstance.mounted).toBe(true);
  });

  it('should set mounted false when componentWillUnmount', () => {
    const wrapper = mount(
      <Bundle load={f => f} />
    );

    const wrapperInstance = wrapper.instance();

    wrapper.unmount();

    expect(wrapperInstance.mounted).toBe(false);
  });

  it('should call given load prop', () => {
    const loadComponent = jest.fn();

    mount(
      <Bundle load={loadComponent} />
    );

    expect(loadComponent).toHaveBeenCalledTimes(1);
  });

  it('should render the given Component', () => {
    const loadComponent = (callback) => {
      callback({ default: MockComponent });
    };

    const wrapper = mount(
      <Bundle load={loadComponent} />
    );

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should call not load when componentWillReceiveProps and nextProps is equal to current props', () => {
    const spyLoad = jest.spyOn(Bundle.prototype, 'load');

    const loadComponent = (callback) => {
      callback({ default: MockComponent });
    };

    const wrapper = shallow(
      <Bundle load={loadComponent} />
    );

    wrapper.setProps({ load: loadComponent });

    expect(spyLoad).toHaveBeenCalledTimes(0);
  });

  it('should call load when componentWillReceiveProps and nextProps is not equal to current props', () => {
    const spyLoad = jest.spyOn(Bundle.prototype, 'load');

    const wrapper = shallow(
      <Bundle load={f => f} />
    );

    const loadComponent = (callback) => {
      callback({ default: MockComponent });
    };

    wrapper.setProps({ load: loadComponent });

    expect(spyLoad).toHaveBeenCalledTimes(1);
  });
});
