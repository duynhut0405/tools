import actions from './actions';
import { takeLatest, put, all, fork } from 'redux-saga/effects';
import { getRateService } from '../../services/rate';

function* getRateSaga() {
  yield takeLatest(actions.GET_RATE_REQUEST, function*() {
    try {
      const res = yield getRateService();
      if (res.status === 200) {
        let list = {};
        const sortData = yield res.data.sort(
          (date_1, date_2) => date_2.created_at - date_1.created_at
        );
        for (let i = 0; i < 1; i++) {
          list = { ...list, ...sortData[i] };
        }
        yield put({ type: actions.GET_RATE_RESPONSE, data: list });
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
