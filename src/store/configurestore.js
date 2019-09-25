import { createStore, combineReducers } from 'redux';
import shuttlesReducer from '../reducers/shuttles';

export default () => {
  const store = createStore(
    combineReducers({
      shuttles: shuttlesReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
