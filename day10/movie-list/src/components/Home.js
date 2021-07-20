import React, { Component } from 'react'

import firebase from '../firebase/firebase';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.db = firebase.firestore();

    this.state = {
      movies: [],
      name: '',
      description: ''
    };
  }

  async componentDidMount() {

    try {

      const snapshot = await this.db.collection('movies').get();

      const movies = snapshot.docs.map(doc => {
        return {
          id: doc.id, ...doc.data()
        };
      });

      this.setState({ movies: movies });

    } catch (err) {
      console.log(err);
    }

  }

  async saveMovie(e) {
    e.preventDefault();

    const { name, description, movies } = this.state;

    try {
      const doc = await this.db.collection('movies').add({
        name,
        description
      });

      movies.push({
        id: doc.id,
        name: name,
        description: description,
      });

      this.setState({
        name: '',
        description: '',
        movies: movies,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { name, description, movies } = this.state;

    return (
      <div className="container my-4">
        <div className="card p-3">

          <div className="text-center">
            <h2>Add Movie</h2>
          </div>
          <form onSubmit={(e) => this.saveMovie(e)}>

            <div className="mb-3">
              <label className="form-label">Movie</label>
              <input
                value={name}
                onChange={(e) => this.setState({ name: e.target.value })}
                type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                value={description}
                onChange={(e) => this.setState({ description: e.target.value })}
                className="form-control" rows="3"></textarea>
            </div>

            <div className="d-flex justify-content-end">
              <button className="btn btn-primary">Save Movie</button>
            </div>
          </form>

        </div>


        <div className="card mt-4 p-3">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {
                movies.map(movie => <tr key={movie.id} >
                  <td>{movie.name}</td>
                  <td>{movie.description}</td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
