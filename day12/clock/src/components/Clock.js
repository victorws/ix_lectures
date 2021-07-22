
import React, { Component } from 'react'

export default class Clock extends Component {

  timerId = '';

  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    debugger
    console.log('componentDidMount');

    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    debugger
    console.log('componentWillUnmount');
    clearInterval(this.timerId);
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
