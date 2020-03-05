import actions from './actions';
import { takeLatest, put, all, fork } from 'redux-saga/effects';
import {
  fillRegulationServices,
  getTypeRegulationServices,
  getUrlVideoService,
  getRegulationPagation,
  getRegulationListYear
} from '../../services/regulation';

function* getRegulationSaga() {
  yield takeLatest(actions.GET_REGULATION_PAGINATION_REQUEST, function*(params) {
    const { types, year, page } = params;
    try {
      const res = yield getRegulationPagation(types, year, page);
      if (res.status === 200) {
        yield put({ type: actions.GET_REGULATION_PAGINATION_RESPONSE, data: res.data });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}

function* searchRegulationSaga() {
  yield takeLatest(actions.SEARCH_REGULATION_REQUEST, function*(params) {
    const { data } = params;
    try {
      const res = yield fillRegulationServices(data);
      if (res.status === 200) {
        yield put({ type: actions.SEARCH_REGULATION_RESPONSE, data: res.data });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}

function* getTypeRegulationSaga() {
  yield takeLatest(actions.GET_TYPE_REGULATION_REQUEST, function*() {
    try {
      const res = yield getTypeRegulationServices();
      if (res.status === 200) {
        yield put({ type: actions.GET_TYPE_REGULATION_RESPONSE, data: res.data });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}

function* getUrlVideoSaga() {
  yield takeLatest(actions.GET_URL_VIDEO_REQUEST, function*(params) {
    const { data } = params;
    try {
      const res = yield getUrlVideoService(data);
      if (res.status === 200) {
        yield put({ type: actions.GET_URL_VIDEO_RESPONSE, data: res.data });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}

function* getRegulationByYearSaga() {
  yield takeLatest(actions.GET_REGULATION_BY_YEAR_REQUEST, function*(params) {
    const { types, page, year } = params;
    try {
      const res = yield getRegulationListYear(types, page, year);
      if (res.status === 200) {
        yield put({ type: actions.GET_REGULATION_BY_YEAR_RESPONSE, data: res.data });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(searchRegulationSaga),
    fork(getTypeRegulationSaga),
    fork(getUrlVideoSaga),
    fork(getRegulationSaga),
    fork(getRegulationByYearSaga)
  ]);
}
