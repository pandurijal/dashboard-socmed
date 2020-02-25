import { GET_USER_LIST } from './../types';
import { getUserListService } from '../../@services';

export const getUserListAction = () => async dispatch => {
  const res = await getUserListService();

  dispatch({
    type: GET_USER_LIST,
    payload: res
  });
};
