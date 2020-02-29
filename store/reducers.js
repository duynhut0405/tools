import { combineReducers } from 'redux';
import pageReducer from './page/reducers';
import rateReducer from './rate/reducers';
import layoutReducer from './layout/reducers';

const reducers = combineReducers({
  pageReducer,
  rateReducer,
  layoutReducer
});

export default reducers;
