import React, { Component } from 'react'
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">Navbar</div>
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                  Post Count: {this.props.posts.length}
                </span>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    )
  }
}


const mapStateToProps = (state) => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, {})(Navbar);