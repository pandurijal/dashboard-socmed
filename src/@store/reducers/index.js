import { combineReducers } from 'redux';

import { getUserListReducer } from './userReducer';

const reducers = combineReducers({ getUserListReducer });

export default reducers;
