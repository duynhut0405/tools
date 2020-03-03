import actions from './actions';
import { takeLatest, put, all, fork } from 'redux-saga/effects';
import { getMenuItemByPosition } from '../../services/menu';

const nest = (items, id = null, link = 'parentId') => {
  return items
    .filter(item => item[link] === id)
    .map(item => ({
      ...item,
      title: `${item.name}`,
      children: nest(
        items.sort((a, b) => a.position - b.position),
        item.id
      ),
      expanded: true
    }));
};

function* getMenuHeaderSaga() {
  yield takeLatest(actions.GET_MENU_HEADER_REQUEST, function*() {
    try {
      const res = yield getMenuItemByPosition('top_top');
      if (res.status === 200) {
        yield put({
          type: actions.GET_MENU_HEADER_RESPONSE,
          data: nest(res.data.menuItems)
        });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}

function* getMenuNavSaga() {
  yield takeLatest(actions.GET_MENU_NAV_REQUEST, function*() {
    try {
      const res = yield getMenuItemByPosition('top2');
      if (res.status === 200) {
        yield put({
          type: actions.GET_MENU_NAV_RESPONSE,
          data: nest(res.data.menuItems)
        });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}

function* getMenuFooterTopSaga() {
  yield takeLatest(actions.GET_MENU_FOOTER_TOP_REQUEST, function*() {
    try {
      const res = yield getMenuItemByPosition('Menu footer top');
      if (res.status === 200) {
        yield put({
          type: actions.GET_MENU_FOOTER_TOP_RESPONSE,
          data: nest(res.data.menuItems)
        });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}

function* getMenuFooterMainSaga() {
  yield takeLatest(actions.GET_MENU_FOOTER_MAIN_REQUEST, function*() {
    try {
      const res = yield getMenuItemByPosition('Menu footer main');
      if (res.status === 200) {
        yield put({
          type: actions.GET_MENU_FOOTER_MAIN_RESPONSE,
          data: nest(res.data.menuItems)
        });
      } else {
        // console.log(res);
      }
    } catch (error) {
      // console.log(error);
    }
  });
}

function* getMenuFooterBottomSaga() {
  yield takeLatest(actions.GET_MENU_FOOTER_BOTTOM_REQUEST, function*() {
    try {
      const res = yield getMenuItemByPosition('menu footer bottom');
      if (res.status === 200) {
        yield put({
          type: actions.GET_MENU_FOOTER_BOTTOM_RESPONSE,
          data: nest(res.data.menuItems)
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
  yield all([
    fork(getMenuHeaderSaga),
    fork(getMenuNavSaga),
    fork(getMenuFooterTopSaga),
    fork(getMenuFooterMainSaga),
    fork(getMenuFooterBottomSaga)
  ]);
}
