import { all } from 'redux-saga/effects';
import pageReducer from './page/saga';

export default function* rootSaga() {
  yield all([pageReducer()]);
}
