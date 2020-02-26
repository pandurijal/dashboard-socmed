import { GET_USERS, GET_POSTS } from './../types';

export const getUserListReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
};

export const getPostsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    default:
      return state;
  }
};
