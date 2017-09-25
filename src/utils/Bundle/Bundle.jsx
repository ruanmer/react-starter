import React, { PureComponent } from 'react';

export default class Bundle extends PureComponent {
  state = {
    Component: null
  }

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

  mounted = false

  load (props) {
    this.setState({ Component: null });

    props.load((Component) => {
      if (this.mounted) {
        this.setState({ Component: Component.default });
      }
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
