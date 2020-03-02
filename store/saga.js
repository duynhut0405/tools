import { all } from 'redux-saga/effects';
import pageSaga from './page/saga';
import rateSaga from './rate/saga';
import layoutSaga from './layout/saga';

export default function* rootSaga() {
  yield all([pageSaga(), rateSaga(), layoutSaga()]);
}
