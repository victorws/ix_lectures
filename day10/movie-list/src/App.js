import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </BrowserRouter>

    )
  }
}
