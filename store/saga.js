import { all } from 'redux-saga/effects';
import HomeSaga from './home/saga';

export default function* rootSaga() {
  yield all([HomeSaga()]);
}
