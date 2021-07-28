import React, { Component } from 'react'

import firebase from '../firebase/firebase';

const db = firebase.firestore();

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    try {
      const snapshot = await db.collection('movies').get();
      const movies = snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      });

      this.setState({ movies: movies });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        {
          movies.map(movie => {
            return <div key={movie.id}>
              <img style={{
                  width: '250px',
                  height: '250px',
                  objectFit: "cover"
                }}
                  src={movie.downloadUrl} alt="movie cover" />
            </div>
          })
        }
      </div>
    )
  }
}
