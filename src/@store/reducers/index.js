import { combineReducers } from 'redux';

import { GET_USERS, GET_POSTS, GET_ALBUMS } from './../types';

const getUserListReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
};

const getPostsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    default:
      return state;
  }
};

const getAlbumsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return action.payload;
    default:
      return state;
  }
};

const reducers = combineReducers({
  getUserListReducer,
  getPostsReducer,
  getAlbumsReducer
});

export default reducers;
