import { GET_USER_LIST } from './../types';

export const getUserListReducer = (state = {}, action) => {
  console.log({ state, action });
  switch (action.type) {
    case GET_USER_LIST:
      return action.payload;
    default:
      return state;
  }
};
