import actions from './actions';
import { map } from 'lodash';
import { takeLatest, put, all, fork } from 'redux-saga/effects';
import { getProvinceService, getDistrictService, searchBranchesService } from '../../services/map';

function* getProvinceSaga() {
  yield takeLatest(actions.GET_PROVINCE_REQUEST, function*() {
    try {
      const res = yield getProvinceService();
      if (res.status === 200) {
        const data = map(res.data, province => ({ value: province.id, label: province.name }));
        yield put({ type: actions.GET_PROVINCE_RESPONSE, data: data });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}

function* getDistrictSaga() {
  yield takeLatest(actions.GET_DISTRICT_REQUEST, function*(params) {
    const { id } = params;
    try {
      const res = yield getDistrictService(id);
      if (res.status === 200) {
        const data = map(res.data, district => ({ value: district.id, label: district.name }));
        yield put({ type: actions.GET_DISTRICT_RESPONSE, data: data });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}

function* searchBranchesSaga() {
  yield takeLatest(actions.SEARCH_BRANCHES_REQUEST, function*(params) {
    try {
      const res = yield searchBranchesService(params.params);
      if (res.status === 200) {
        yield put({ type: actions.SEARCH_BRANCHES_RESPONSE, data: res.data });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getProvinceSaga), fork(getDistrictSaga), fork(searchBranchesSaga)]);
}
