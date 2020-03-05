import actions from './actions';
import { takeLatest, put, all, fork } from 'redux-saga/effects';
import { getNewCategoryIdService } from '../../services/news';

function* getNewSaga() {
  yield takeLatest(actions.GET_NEW_INVESTOR_REQUEST, function*(params) {
    const { id } = params;
    try {
      const res = yield getNewCategoryIdService(id);
      if (res.status === 200) {
        yield put({ type: actions.GET_NEW_INVESTOR_RESPONSE, data: res.data });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}
function* getNotifiactionSaga() {
  yield takeLatest(actions.GET_NEW_INVESTOR_NOTIFICATION_REQUEST, function*(params) {
    const { id } = params;
    try {
      const res = yield getNewCategoryIdService(id);
      if (res.status === 200) {
        yield put({ type: actions.GET_NEW_INVESTOR_NOTIFICATION_RESPONSE, data: res.data });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getNewSaga), fork(getNotifiactionSaga)]);
}
