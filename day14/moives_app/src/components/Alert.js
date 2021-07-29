import React, { Component } from 'react'

export default class Alert extends Component {
  render() {

    const { error, ...rest } = this.props;

    return (

      <div {...rest}>
        {
          error ?
            <div class="alert alert-danger" role="alert">
              {error}
            </div>
            :
            <div></div>
        }

      </div>

    )
  }
}
