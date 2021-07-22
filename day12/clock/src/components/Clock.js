
import React, { Component } from 'react'

export default class Clock extends Component {

  timerIdNew = '';

  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    console.log('componentDidMount');

    this.timerIdNew = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerIdNew);
  }

  render() {

    const { date } = this.state;

    return (
      <div>
        <h1>
          The time now is: {date.toLocaleTimeString()}
        </h1>
      </div>
    )
  }
}
