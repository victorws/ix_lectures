import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/collapse.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <div >
        <Navbar />

        <div className="container">
          <CreatePost />
          <PostList />
        </div>
      </div>
    )
  }
}
