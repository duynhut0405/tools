import { combineReducers } from 'redux';
import pageReducer from './page/reducers';
import rateReducer from './rate/reducers';
import layoutReducer from './layout/reducers';
import regulationReducer from './regulation/reducers';
import menuReducer from './menu/reducers';
import investorsReducer from './investors/reducer';
import newsReducer from './news/reducers';

const reducers = combineReducers({
  pageReducer,
  rateReducer,
  layoutReducer,
  regulationReducer,
  menuReducer,
  investorsReducer,
  newsReducer
});

export default reducers;
