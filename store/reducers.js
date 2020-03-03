import { combineReducers } from 'redux';
import pageReducer from './page/reducers';
import rateReducer from './rate/reducers';
import layoutReducer from './layout/reducers';
import regulationReducer from './regulation/reducers';

const reducers = combineReducers({
  pageReducer,
  rateReducer,
  layoutReducer,
  regulationReducer
});

export default reducers;
