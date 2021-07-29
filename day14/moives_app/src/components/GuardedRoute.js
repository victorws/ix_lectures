import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

export default class GuardedRoute extends Component {
  render() {
    const { component: Component, user, ...otherProps } = this.props;
    return (
      <div>
        {
          user ?
            <Route {...otherProps} render={(routerProps) => {
              const props = { ...otherProps, ...routerProps, user };
              return <Component {...props} />
            }
            } />
            :
            <Redirect to="/login" />
        }
      </div>
    )
  }
}
