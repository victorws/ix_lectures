import React, { Component } from 'react'

import Loading from './Loading';

export default class Button extends Component {
  render() {

    const { loading, disabled, children, ...rest } = this.props;

    return (

      <button
        {...rest}
        disabled={loading || disabled}
        style={{ position: 'relative' }}>
        {children}

        <span style={{
          position: 'absolute', right: '2px', top: '2px'
        }}>
          <Loading show={loading} />
        </span>

      </button>

    )
  }
}
