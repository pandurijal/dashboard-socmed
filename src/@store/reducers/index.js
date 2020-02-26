import { combineReducers } from 'redux';

import { getUserListReducer, getPostsReducer } from './userReducer';

const reducers = combineReducers({ getUserListReducer, getPostsReducer });

export default reducers;
