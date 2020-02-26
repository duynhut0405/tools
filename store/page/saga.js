import actions from './actions';
import { takeLatest, put, all, fork } from 'redux-saga/effects';
import { getPageService } from '../../services/page';
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
        yield put({ type: actions.GET_HOME_RESPONSE, data: res.data, silder });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(pageSaga)]);
}
