import React, { Component } from 'react'

import firebase from '../firebase/firebase';
import Loading from './Loading';

const db = firebase.firestore();

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState({ loading: true });

    try {
      const snapshot = await db.collection('movies').get();
      const movies = snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      });

      this.setState({ movies: movies });
    } catch (err) {
      console.log(err);
    }

    this.setState({ loading: false });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div className="d-flex flex-wrap">
        <Loading show={loading}></Loading>
        {
          movies.map(movie => {
            return <div className="m-3" key={movie.id}>
              <img style={{
                width: '250px',
                height: '250px',
                objectFit: "cover"
              }}
                src={movie.downloadUrl} alt="movie cover" />

              <h4>{movie.name}</h4>

              <div>{movie.description}</div>
            </div>
          })
        }
      </div>
    )
  }
}
