import {
  GET_USERS,
  GET_POSTS,
  DELETE_POST,
  GET_COMMENTS,
  GET_ALBUMS,
  GET_PHOTOS
} from './../types';
import {
  getUserListService,
  getPostsService,
  deletePostService,
  getCommentsService,
  getAlbumsService,
  getPhotosService
} from '../../@services';

export const getUserListAction = () => async dispatch => {
  let res;
  try {
    res = await getUserListService();
  } catch (error) {
    console.error(error);
  }

  if (res) {
    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  }
};

export const getPostsAction = id => async dispatch => {
  let res;
  try {
    res = await getPostsService(id);
  } catch (error) {
    console.error(error);
  }

  if (res) {
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  }
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

  if (res) {
    dispatch({
      type: DELETE_POST,
      payload: res.data
    });
  }
};

export const getCommentsAction = id => async dispatch => {
  let res;
  try {
    res = await getCommentsService(id);
    console.log({ res });
  } catch (error) {
    console.error(error);
  }

  if (res) {
    dispatch({
      type: GET_COMMENTS,
      payload: res.data
    });
  }
};

export const getAlbumsAction = id => async dispatch => {
  let res;
  try {
    res = await getAlbumsService(id);
  } catch (error) {
    console.error(error);
  }

  if (res) {
    dispatch({
      type: GET_ALBUMS,
      payload: res.data
    });
  }
};

export const getPhotosAction = id => async dispatch => {
  let res;
  try {
    res = await getPhotosService(id);
  } catch (error) {
    console.error(error);
  }

  if (res) {
    dispatch({
      type: GET_PHOTOS,
      payload: res.data
    });
  }
};
