import actions from './actions';
import { takeLatest, put, all, fork } from 'redux-saga/effects';
import { getPageService, getPagesByIdService } from '../../services/page';
import { filter } from 'lodash';

function* pageSaga() {
  yield takeLatest(actions.GET_HOME_REQUEST, function*(params) {
    const { name } = params;
    try {
      const res = yield getPageService(name);
      if (res.status === 200) {
        let silder = [];
        const silderData = yield filter(res.data.pageBlocks, item => item.name === 'Silder');
        for (let i = 0; i < silderData.length; i++) {
          silder = [...silder, ...JSON.parse(silderData[i].content)];
        }
        yield put({
          type: actions.GET_HOME_RESPONSE,
          data: res.data,
          silder,
          router: name
        });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}
function* pagesBySaga() {
  yield takeLatest(actions.GET_PAGES_BY_ID_REQUEST, function*(params) {
    const { data } = params;
    try {
      const res = yield getPagesByIdService(data);
      if (res.status === 200) {
        yield put({ type: actions.GET_PAGES_BY_ID_RESPONSE, data: res.data });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(pageSaga), fork(pagesBySaga)]);
}
