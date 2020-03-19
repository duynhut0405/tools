import actions from './actions';
import { takeLatest, put, all, fork } from 'redux-saga/effects';
import { getRateService } from '../../services/rate';

function* getRateSaga() {
  yield takeLatest(actions.GET_RATE_REQUEST, function*() {
    try {
      const res = yield getRateService();
      if (res.status === 200) {
        yield put({ type: actions.GET_RATE_RESPONSE, data: res.data });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getRateSaga)]);
}
