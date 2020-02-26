import { combineReducers } from 'redux';

import {
  GET_USERS,
  GET_POSTS,
  DELETE_POST,
  GET_COMMENTS,
  GET_ALBUMS,
  GET_PHOTOS
} from './../types';

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

const deletePostReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_POST:
      return action.payload;
    default:
      return state;
  }
};

const getCommentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS:
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

const getPhotosReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return action.payload;
    default:
      return state;
  }
};

const reducers = combineReducers({
  getUserListReducer,
  getPostsReducer,
  deletePostReducer,
  getCommentsReducer,
  getAlbumsReducer,
  getPhotosReducer
});

export default reducers;
