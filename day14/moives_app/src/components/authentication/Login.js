import React, { Component } from 'react'

import firebase from '../../firebase/firebase';

import Button from '../Button';
import Alert from '../Alert';

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.auth = firebase.auth();

    this.state = {
      loading: false,
      error: '',
      email: '',
      password: '',
    };
  }

  async onFormSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;

    this.setState({ loading: true });

    try {
      await this.auth.signInWithEmailAndPassword(email, password);
      this.props.history.push('/');
    } catch (err) {
      this.setState({ error: err.message });
    }

    this.setState({ loading: false });
  }

  render() {
    const { email, password, loading, error } = this.state;

    return (
      <div>
        <h3 className="mb-4">Login</h3>

        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
              type="email"
              className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
              type="password"
              className="form-control" />
          </div>


          <div className="d-flex justify-content-end">
            <Button
              type="submit"
              className="btn btn-primary px-5"
              loading={loading}>Login</Button>
          </div>

        </form>
        
        <Alert className="mt-4" error={error} />
      </div>
    )
  }
}
