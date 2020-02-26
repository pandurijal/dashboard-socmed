import { GET_USERS, GET_POSTS, DELETE_POST, GET_ALBUMS } from './../types';
import {
  getUserListService,
  getPostsService,
  deletePostService,
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

export const deletePostAction = id => async dispatch => {
  console.log({ id });
  let res;
  try {
    res = await deletePostService(id);
    console.log({ res });
  } catch (error) {
    console.error(error);
  }

  dispatch({
    type: DELETE_POST,
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
