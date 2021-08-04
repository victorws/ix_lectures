import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';

class PostList extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <hr></hr>
        <div>
          {
            posts.map(post => {
              return <div key={post.id} className="card p-3 mb-3">
                <div>{post.name}</div>
                <div>{post.description}</div>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(PostList);