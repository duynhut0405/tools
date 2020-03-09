import actions from './actions';
import { findAllByCategory } from '../../services/news';
import { takeLatest, put, all, fork } from 'redux-saga/effects';

function* getNewByCategorySaga() {
  yield takeLatest(actions.FILL_NEWS_BY_CATEGORY_REQUEST, function*(params) {
    const { id, page, year } = params;
    try {
      const res = yield findAllByCategory(id, page, year);
      if (res.status === 200) {
        yield put({
          type: actions.FILL_NEWS_BY_CATEGORY_RESPONSE,
          data: res.data
        });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getNewByCategorySaga)]);
}
