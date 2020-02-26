import { GET_USERS, GET_POSTS } from './../types';
import { getUserListService, getPostsService } from '../../@services';

export const getUserListAction = () => async dispatch => {
  const res = await getUserListService();

  dispatch({
    type: GET_USERS,
    payload: res.data
  });
};

export const getPostsAction = id => async dispatch => {
  const res = await getPostsService(id);
  console.log({ res });

  dispatch({
    type: GET_POSTS,
    payload: res.data
  });
};
