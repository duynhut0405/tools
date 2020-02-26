import { combineReducers } from 'redux';
import pageReducer from './page/reducers';
import rateReducer from './rate/reducers';

const reducers = combineReducers({
  pageReducer,
  rateReducer
});

export default reducers;
