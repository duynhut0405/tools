import { all } from 'redux-saga/effects';
import pageSaga from './page/saga';
import rateSaga from './rate/saga';
import layoutSaga from './layout/saga';
import regulationSaga from './regulation/saga';
import menuSaga from './menu/saga';
import investorsSaga from './investors/saga';

export default function* rootSaga() {
  yield all([pageSaga(), rateSaga(), layoutSaga(), regulationSaga(), menuSaga(), investorsSaga()]);
}
