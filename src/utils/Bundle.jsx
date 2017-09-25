import React, { PureComponent } from 'react';

export default class Bundle extends PureComponent {
  state = {
    Component: null
  }

  mounted = false

  componentDidMount () {
    this.mounted = true;

    this.load(this.props);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  componentWillUnmount () {
    this.mounted = false;
  }

  load (props) {
    this.setState({ Component: null });

    props.load(Component => {
      this.mounted && this.setState({ Component: Component.default });
    });
  }

  render () {
    const { Component } = this.state;

    if (Component) {
      const { load, ...props } = this.props;

      return <Component {...props} />;
    }

    return null;
  }
}
