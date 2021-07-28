import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';

import NavBar from './components/NavBar';
import Home from './components/Home';
import AddMovie from './components/AddMovie';
import PropsRoute from './components/PropsRoute';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />

        <div className="container mt-4">
          <PropsRoute path="/" exact component={Home} />
          <Route path="/add-movie" exact component={AddMovie} />
        </div>

      </BrowserRouter>
    )
  }
}
