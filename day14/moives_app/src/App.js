import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';

import NavBar from './components/NavBar';
import Home from './components/Home';
import AddMovie from './components/AddMovie';
import PropsRoute from './components/PropsRoute';
import GuardedRoute from './components/GuardedRoute';
import Login from './components/authentication/Login';

import firebase from './firebase/firebase';
import Loading from './components/Loading';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.auth = firebase.auth();

    this.state = {
      loading: true,
      user: null,
    };
  }

  componentDidMount() {
    this.auth.onAuthStateChanged(user => {
      this.setState({ user: user, loading: false });
    });
  }

  render() {
    const { user, loading } = this.state;

    return (
      <BrowserRouter>
        <NavBar user={user} />

        <div className="container mt-4">
          {
            loading ?
              <Loading show={loading} />
              :
              <div>
                <PropsRoute path="/" exact user={user} component={Home} />

                <GuardedRoute path="/add-movie" exact user={user} component={AddMovie} />

                <PropsRoute path="/login" exact user={user} component={Login} />
              </div>
          }
        </div>



      </BrowserRouter>
    )
  }
}
