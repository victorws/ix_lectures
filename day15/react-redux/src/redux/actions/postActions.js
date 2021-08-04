import { FETCH_POSTS, CREATE_POST } from './types'

import firebase from '../../firebase/firebase';

const db = firebase.firestore();

export const fetchPosts = () => dispatch => {

  const promise = db.collection('posts').get();

  promise.then((snapshot) => {
    dispatch({
      type: FETCH_POSTS,
      payload: snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      })
    });
  });

};

export const createPost = (post) => dispatch => {

  const promise = db.collection('posts').add(post);

  promise.then((snapshot) => {
    dispatch({
      type: CREATE_POST,
      payload: { id: snapshot.id, ...post }
    });
  });

};