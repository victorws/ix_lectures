import React, { Component } from 'react'

import firebase from '../firebase/firebase';

import Alert from './Alert';
import Button from './Button';

const storage = firebase.storage();
const db = firebase.firestore();

export default class AddMovie extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: '',
      name: '',
      description: '',
      file: null,
      fileDisplay: null,
    };

    this.fileInputRef = React.createRef();
  }

  onImageSelected(e) {
    let file = null;
    if (e.target.files.length) {
      file = e.target.files[0];

      const reader = new FileReader();

      reader.onload = ((res) => {
        const display = res.target.result;
        this.setState({ fileDisplay: display });
      });
      reader.readAsDataURL(file);
    }

    this.setState({ file: file });
  }

  onFormSubmit(e) {
    e.preventDefault();

    const { file } = this.state;
    if (!file) { return; } // give feedback here
    this.uploadFile(file);

  }

  async uploadFile(file) {
    const uploadTask = storage.ref('images/' + file.name).put(file);

    this.setState({ loading: true });

    uploadTask.on('state_changed',
      (snap) => {
        const percent = snap.bytesTransferred / snap.totalBytes * 100;
        console.log('Upload ' + percent + '% complete');
      },
      (err) => {
        this.setState({ error: err.message });
        this.setState({ loading: false });
      },
      async () => {
        const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
        this.saveMovie(downloadUrl);
      });
  }

  async saveMovie(downloadUrl) {

    const { name, description } = this.state;

    this.setState({ loading: true });

    try {
      await db.collection('movies').add({
        name: name,
        description: description,
        downloadUrl: downloadUrl
      });

      this.props.history.push('/');
    } catch (err) {
      this.setState({ error: err.message });
    }

    this.setState({ loading: false });
  }

  onNameChanged(e) {
    this.setState({ name: e.target.value });
  }

  onDescriptionChanged(e) {
    this.setState({ description: e.target.value });
  }

  render() {

    const {
      name, description, fileDisplay, error, loading
    } = this.state;

    return (
      <div>
        <h3 className="mb-4">Add Movie</h3>

        <div className="card p-3">
          <div style={{ fontWeight: 'bold' }}>Movie Cover</div>

          {
            fileDisplay ?
              <div className="text-center">
                <img style={{
                  width: '250px',
                  height: '250px',
                  objectFit: "cover"
                }}
                  src={fileDisplay} alt="movie cover" />
              </div>
              :
              <div></div>
          }


          <input ref={this.fileInputRef}
            onChange={(e) => this.onImageSelected(e)}
            type="file"
            style={{ display: 'none' }} />

          <div className="text-center">
            <button type="button"
              className="btn btn-success mt-3"
              onClick={() => this.fileInputRef.current.click()}>
              Choose Image
            </button>
          </div>
        </div>

        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <div className="mb-3 mt-4">
            <label className="form-label">Name</label>
            <input
              value={name}
              onChange={(e) => this.onNameChanged(e)}
              type="text"
              className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              value={description}
              onChange={(e) => this.onDescriptionChanged(e)}
              className="form-control"
              rows="4"></textarea>
          </div>

          <div className="d-flex justify-content-end">
            <Button
              loading={loading}
              type="submit"
              className="btn btn-primary" >
              Save Movie
            </Button>
          </div>
        </form>

        <Alert error={error} />
      </div>
    )
  }
}
