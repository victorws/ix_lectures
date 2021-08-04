import { CREATE_POST, FETCH_POSTS } from '../actions/types';

const initialState = {
  items: []
};

export default function switchType(state = initialState, action) {

  switch (action.type) {
    case FETCH_POSTS:
      return {
        items: action.payload,
      };

    case CREATE_POST:
      return {
        items: [...state.items, action.payload],
      };

    default: return state;
  }

};