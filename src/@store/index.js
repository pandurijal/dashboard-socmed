import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../@store/reducers';

const rootReducer = (state, action) => {
  return reducers(state, action);
};

const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, compose(middleware));

export { store };
