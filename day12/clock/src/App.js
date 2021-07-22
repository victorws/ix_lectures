import React, { Component } from 'react';

import Clock from './components/Clock';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showClock: true
    };
  }

  toggleClock() {
    this.setState({ showClock: !this.state.showClock });
  }

  render() {

    const { showClock } = this.state;

    return (
      <div>

        {
          showClock ?
            <Clock />
            :
            <div></div>
        }


        <button onClick={() => this.toggleClock()}>
          Toggle Clock
        </button>
      </div>
    )
  }
}
