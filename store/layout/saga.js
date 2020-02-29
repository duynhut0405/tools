import actions from './actions';
import { takeLatest, put, all, fork } from 'redux-saga/effects';
import { getSettingFooterService } from '../../services/menu';

function* getSettingFooterSaga() {
  yield takeLatest(actions.GET_SETTING_FOOTER_REQUEST, function*() {
    try {
      const res = yield getSettingFooterService(name);
      if (res.status === 200) {
        yield put({ type: actions.GET_SETTING_FOOTER_RESPONSE, data: res.data.general });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}
export default function* rootSaga() {
  yield all([fork(getSettingFooterSaga)]);
}
