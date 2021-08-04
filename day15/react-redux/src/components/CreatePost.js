import React, { Component } from 'react'

import { connect } from 'react-redux';
import { createPost } from '../redux/actions/postActions';

class CreatePost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
    }
  }

  onFormSubmit(e) {
    e.preventDefault();

    const post = {
      name: this.state.name,
      description: this.state.description,
    };

    this.props.createPost(post);

    this.setState({
      name: '',
      description: '',
    });
  }

  render() {

    const { name, description } = this.state;

    return (
      <div className="card p-3 my-4">

        <h4>Create Post</h4>

        <form onSubmit={(e) => this.onFormSubmit(e)} className="mt-3">

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              value={description}
              onChange={(e) => this.setState({ description: e.target.value })}
              className="form-control"
              rows="3"
            ></textarea>
          </div>

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Save Post
            </button>
          </div>

        </form>
      </div>
    )
  }
}

export default connect(null, { createPost })(CreatePost);