import actions from './actions';
import { findAllByCategory, getNewsByCategorySlug } from '../../services/news';
import { takeLatest, put, all, fork } from 'redux-saga/effects';

function* getNewByCategorySaga() {
  yield takeLatest(actions.FILL_NEWS_BY_CATEGORY_REQUEST, function*(params) {
    const { id, page, number, year } = params;
    try {
      const res = yield findAllByCategory(id, page, number, year);
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

function* getNewByCategorySlugSaga() {
  yield takeLatest(actions.GET_NEW_BY_CATEGORY_SLUG_REQUEST, function*(params) {
    const { slug, data } = params;
    try {
      const res = yield getNewsByCategorySlug(slug, data);
      if (res.status === 200) {
        yield put({
          type: actions.GET_NEW_BY_CATEGORY_SLUG_RESPONSE,
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
  yield all([fork(getNewByCategorySaga), fork(getNewByCategorySlugSaga)]);
}
