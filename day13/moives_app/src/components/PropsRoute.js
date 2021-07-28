import React, { Component } from 'react';
import { Route } from 'react-router-dom';

export default class PropsRoute extends Component {
  render() {
    const { component: Component, ...otherProps } = this.props;
    return (
      <Route {...otherProps} render={(routerProps) => {
        const props = { ...otherProps, ...routerProps };
        return <Component {...props} />
      }
      } />
    )
  }
}
