import { GET_USERS, GET_POSTS, GET_ALBUMS } from './../types';
import {
  getUserListService,
  getPostsService,
  getAlbumsService
} from '../../@services';

export const getUserListAction = () => async dispatch => {
  let res;
  try {
    res = await getUserListService();
  } catch (error) {
    console.error(error);
  }

  dispatch({
    type: GET_USERS,
    payload: res.data
  });
};

export const getPostsAction = id => async dispatch => {
  let res;
  try {
    res = await getPostsService(id);
  } catch (error) {
    console.error(error);
  }

  dispatch({
    type: GET_POSTS,
    payload: res.data
  });
};

export const getAlbumsAction = id => async dispatch => {
  let res;
  try {
    res = await getAlbumsService(id);
  } catch (error) {
    console.error(error);
  }

  dispatch({
    type: GET_ALBUMS,
    payload: res.data
  });
};
