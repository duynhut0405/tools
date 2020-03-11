module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jeJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Actions = {
  GET_MENU_HEADER_REQUEST: 'GET_MENU_HEADER_REQUEST',
  GET_MENU_HEADER_RESPONSE: ' GET_MENU_HEADER_RESPONSE',
  getMenuHeader: () => ({
    type: Actions.GET_MENU_HEADER_REQUEST
  }),
  GET_MENU_NAV_REQUEST: 'GET_MENU_NAV_REQUEST',
  GET_MENU_NAV_RESPONSE: 'GET_MENU_NAV_RESPONSE',
  getMenuNav: () => ({
    type: Actions.GET_MENU_NAV_REQUEST
  }),
  GET_MENU_FOOTER_TOP_REQUEST: 'GET_MENU_FOOTER_TOP_REQUEST',
  GET_MENU_FOOTER_TOP_RESPONSE: 'GET_MENU_FOOTER_TOP_RESPONSE',
  getMenuFooterTop: () => ({
    type: Actions.GET_MENU_FOOTER_TOP_REQUEST
  }),
  GET_MENU_FOOTER_MAIN_REQUEST: 'GET_MENU_FOOTER_MAIN_REQUEST',
  GET_MENU_FOOTER_MAIN_RESPONSE: 'GET_MENU_FOOTER_MAIN_RESPONSE',
  getMenuFooterMain: () => ({
    type: Actions.GET_MENU_FOOTER_MAIN_REQUEST
  }),
  GET_MENU_FOOTER_BOTTOM_REQUEST: 'GET_MENU_FOOTER_BOTTOM_REQUEST',
  GET_MENU_FOOTER_BOTTOM_RESPONSE: 'GET_MENU_FOOTER_BOTTOM_RESPONSE',
  getMenuFooterBottom: () => ({
    type: Actions.GET_MENU_FOOTER_BOTTOM_REQUEST
  })
};
/* harmony default export */ __webpack_exports__["a"] = (Actions);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0AMe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Actions = {
  GET_RATE_REQUEST: 'GET_RATE_REQUEST',
  GET_RATE_RESPONSE: 'GET_RATE_RESPONSE',
  getRateAction: () => ({
    type: Actions.GET_RATE_REQUEST
  })
};
/* harmony default export */ __webpack_exports__["a"] = (Actions);

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "next-redux-saga"
var external_next_redux_saga_ = __webpack_require__("pEZS");
var external_next_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_saga_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: ./store/page/actions.js
var actions = __webpack_require__("hrxg");

// CONCATENATED MODULE: ./store/page/reducers.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  homedata: {},
  silder: [],
  menuMiddle: {},
  router: ''
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions["a" /* default */].GET_HOME_RESPONSE:
      return _objectSpread({}, state, {
        homedata: action.data,
        silder: action.silder,
        menuMiddle: action.data.menuMiddle,
        router: action.router
      });

    case actions["a" /* default */].GET_PAGES_BY_ID_RESPONSE:
      return _objectSpread({}, state, {
        listPages: [...state.listPages, action.data]
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers = (pageReducer);
// EXTERNAL MODULE: ./store/rate/actions.js
var rate_actions = __webpack_require__("0AMe");

// CONCATENATED MODULE: ./store/rate/reducers.js
function reducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducers_ownKeys(Object(source), true).forEach(function (key) { reducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialstate = {
  data: {}
};

const rateReducer = (state = initialstate, action) => {
  switch (action.type) {
    case rate_actions["a" /* default */].GET_RATE_RESPONSE:
      return reducers_objectSpread({}, state, {
        data: action.data
      });

    default:
      return state;
  }
};

/* harmony default export */ var rate_reducers = (rateReducer);
// EXTERNAL MODULE: ./store/layout/actions.js
var layout_actions = __webpack_require__("uPGx");

// CONCATENATED MODULE: ./store/layout/reducers.js
function layout_reducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function layout_reducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { layout_reducers_ownKeys(Object(source), true).forEach(function (key) { layout_reducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { layout_reducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function layout_reducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const reducers_initialState = {
  settingFooter: {},
  socialLink: {}
};

const layoutReducer = (state = reducers_initialState, action) => {
  switch (action.type) {
    case layout_actions["a" /* default */].GET_SETTING_FOOTER_RESPONSE:
      return layout_reducers_objectSpread({}, state, {
        settingFooter: action.data
      });

    case layout_actions["a" /* default */].GET_SOCIALINK_RESPONSE:
      return layout_reducers_objectSpread({}, state, {
        socialLink: action.data
      });

    default:
      return state;
  }
};

/* harmony default export */ var layout_reducers = (layoutReducer);
// EXTERNAL MODULE: ./store/regulation/actions.js
var regulation_actions = __webpack_require__("dxtc");

// CONCATENATED MODULE: ./store/regulation/reducers.js
function regulation_reducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function regulation_reducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { regulation_reducers_ownKeys(Object(source), true).forEach(function (key) { regulation_reducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { regulation_reducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function regulation_reducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const regulation_reducers_initialState = {
  listData: [],
  data: [],
  type: [],
  listTypeByID: [],
  urlVideo: {},
  listDataByYear: []
};

const regulationReducer = (state = regulation_reducers_initialState, action) => {
  switch (action.type) {
    case regulation_actions["a" /* default */].GET_REGULATION_PAGINATION_RESPONSE:
      return regulation_reducers_objectSpread({}, state, {
        listData: action.data
      });

    case regulation_actions["a" /* default */].SEARCH_REGULATION_RESPONSE:
      return regulation_reducers_objectSpread({}, state, {
        data: action.data
      });

    case regulation_actions["a" /* default */].GET_TYPE_REGULATION_RESPONSE:
      return regulation_reducers_objectSpread({}, state, {
        type: action.data
      });

    case regulation_actions["a" /* default */].GET_URL_VIDEO_RESPONSE:
      return regulation_reducers_objectSpread({}, state, {
        urlVideo: action.data
      });

    case regulation_actions["a" /* default */].GET_REGULATION_BY_YEAR_RESPONSE:
      return regulation_reducers_objectSpread({}, state, {
        listDataByYear: action.data
      });

    case regulation_actions["a" /* default */].GET_TYPE_REGULATION_BY_ID_RESPONSE:
      {
        return regulation_reducers_objectSpread({}, state, {
          listTypeByID: action.data
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ var regulation_reducers = (regulationReducer);
// EXTERNAL MODULE: ./store/menu/actions.js
var menu_actions = __webpack_require__("/jeJ");

// CONCATENATED MODULE: ./store/menu/reducers.js
function menu_reducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function menu_reducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { menu_reducers_ownKeys(Object(source), true).forEach(function (key) { menu_reducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { menu_reducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function menu_reducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const menu_reducers_initialState = {
  header: [],
  nav: [],
  footerTop: [],
  footerMain: [],
  footerBottom: []
};

const menuReducer = (state = menu_reducers_initialState, action) => {
  switch (action.type) {
    case menu_actions["a" /* default */].GET_MENU_HEADER_RESPONSE:
      return menu_reducers_objectSpread({}, state, {
        header: action.data
      });

    case menu_actions["a" /* default */].GET_MENU_NAV_RESPONSE:
      return menu_reducers_objectSpread({}, state, {
        nav: action.data
      });

    case menu_actions["a" /* default */].GET_MENU_FOOTER_TOP_RESPONSE:
      return menu_reducers_objectSpread({}, state, {
        footerTop: action.data
      });

    case menu_actions["a" /* default */].GET_MENU_FOOTER_MAIN_RESPONSE:
      return menu_reducers_objectSpread({}, state, {
        footerMain: action.data
      });

    case menu_actions["a" /* default */].GET_MENU_FOOTER_BOTTOM_RESPONSE:
      return menu_reducers_objectSpread({}, state, {
        footerBottom: action.data
      });

    default:
      return state;
  }
};

/* harmony default export */ var menu_reducers = (menuReducer);
// EXTERNAL MODULE: ./store/investors/actions.js
var investors_actions = __webpack_require__("rCtt");

// CONCATENATED MODULE: ./store/investors/reducer.js
function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const intialState = {
  listNewInvestor: [],
  listNewNotification: []
};

const investorsReducer = (state = intialState, action) => {
  switch (action.type) {
    case investors_actions["a" /* default */].GET_NEW_INVESTOR_RESPONSE:
      return reducer_objectSpread({}, state, {
        listNewInvestor: action.data
      });

    case investors_actions["a" /* default */].GET_NEW_INVESTOR_NOTIFICATION_RESPONSE:
      return reducer_objectSpread({}, state, {
        listNewNotification: action.data
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducer = (investorsReducer);
// EXTERNAL MODULE: ./store/news/actions.js
var news_actions = __webpack_require__("TqPW");

// CONCATENATED MODULE: ./store/news/reducers.js
function news_reducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function news_reducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { news_reducers_ownKeys(Object(source), true).forEach(function (key) { news_reducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { news_reducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function news_reducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const news_reducers_initialState = {
  listNewsByCategory: {}
};

const newReducer = (state = news_reducers_initialState, action) => {
  switch (action.type) {
    case news_actions["a" /* default */].FILL_NEWS_BY_CATEGORY_RESPONSE:
      return news_reducers_objectSpread({}, state, {
        listNewsByCategory: action.data
      });

    default:
      return state;
  }
};

/* harmony default export */ var news_reducers = (newReducer);
// EXTERNAL MODULE: ./store/map/actions.js
var map_actions = __webpack_require__("yA/M");

// CONCATENATED MODULE: ./store/map/reducers.js
function map_reducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function map_reducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { map_reducers_ownKeys(Object(source), true).forEach(function (key) { map_reducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { map_reducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function map_reducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const map_reducers_initialState = {
  listBranches: [],
  listProvince: [],
  listDistrict: []
};

const mapReducer = (state = map_reducers_initialState, action) => {
  switch (action.type) {
    case map_actions["a" /* default */].SEARCH_BRANCHES_RESPONSE:
      return map_reducers_objectSpread({}, state, {
        listBranches: action.data
      });

    case map_actions["a" /* default */].GET_PROVINCE_RESPONSE:
      return map_reducers_objectSpread({}, state, {
        listProvince: action.data
      });

    case map_actions["a" /* default */].GET_DISTRICT_RESPONSE:
      return map_reducers_objectSpread({}, state, {
        listDistrict: action.data
      });

    default:
      return state;
  }
};

/* harmony default export */ var map_reducers = (mapReducer);
// CONCATENATED MODULE: ./store/reducers.js









const reducers_reducers = Object(external_redux_["combineReducers"])({
  pageReducer: reducers,
  rateReducer: rate_reducers,
  layoutReducer: layout_reducers,
  regulationReducer: regulation_reducers,
  menuReducer: menu_reducers,
  investorsReducer: reducer,
  newsReducer: news_reducers,
  mapReducer: map_reducers
});
/* harmony default export */ var store_reducers = (reducers_reducers);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: ./services/page.js
var services_page = __webpack_require__("y9rC");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// CONCATENATED MODULE: ./store/page/saga.js





function* pageSaga() {
  yield Object(effects_["takeLatest"])(actions["a" /* default */].GET_HOME_REQUEST, function* (params) {
    const {
      name
    } = params;

    try {
      const res = yield Object(services_page["a" /* getPageService */])(name);

      if (res.status === 200) {
        let silder = [];
        const silderData = yield Object(external_lodash_["filter"])(res.data.pageBlocks, item => item.name === 'Silder');

        for (let i = 0; i < silderData.length; i++) {
          silder = [...silder, ...JSON.parse(silderData[i].content)];
        }

        yield Object(effects_["put"])({
          type: actions["a" /* default */].GET_HOME_RESPONSE,
          data: res.data,
          silder,
          router: name
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* pagesBySaga() {
  yield Object(effects_["takeLatest"])(actions["a" /* default */].GET_PAGES_BY_ID_REQUEST, function* (params) {
    const {
      data
    } = params;

    try {
      const res = yield Object(services_page["b" /* getPagesByIdService */])(data);

      if (res.status === 200) {
        yield Object(effects_["put"])({
          type: actions["a" /* default */].GET_PAGES_BY_ID_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(pageSaga), Object(effects_["fork"])(pagesBySaga)]);
}
// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__("ZPNs");

// CONCATENATED MODULE: ./services/rate.js


const getRateService = () => {
  return Object(request["a" /* default */])({
    url: '/exchange_rate',
    method: 'GET',
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlcyI6IlJPTEVfQUNDRVBUIE5FV1MsUk9MRV9BQ0NFUFQgUEFHRVMsUk9MRV9BREQgQkxPQ0ssUk9MRV9BREQgRk9STSxST0xFX0FERCBHUk9VUCxST0xFX0FERCBNRURJQSxST0xFX0FERCBST0xFLFJPTEVfQUREIFRBRyxST0xFX0FERCBVU0VSLFJPTEVfQ0jhu4hOSCBT4busQSBEQU5IIE3hu6RDLFJPTEVfQ0jhu4hOSCBT4busQSBNQUlMVEVNUExBVEUsUk9MRV9DSOG7iE5IIFPhu6xBIE1FTlUsUk9MRV9DSOG7iE5IIFPhu6xBIE1FTlVJVEVNLFJPTEVfQ0jhu4hOSCBT4busQSBQQUdFLFJPTEVfQ0jhu4hOSCBT4busQSBTTElERVIsUk9MRV9DSOG7iE5IIFPhu6xBIFRJTiBU4buoQyxST0xFX0NI4buITkggU-G7rEEgVuG7iiBUUsONIERBTkggTeG7pEMsUk9MRV9DSOG7iE5IIFPhu6xBIFbhu4ogVFLDjSBNRU5VSVRFTSxST0xFX0NI4buITkggU-G7rEEgVuG7iiBUUsONIFBBR0UsUk9MRV9DUkVBVEUgQ0FURUdPUlksUk9MRV9DUkVBVEUgRVhDSEFOR0VfUkFURSxST0xFX0NSRUFURSBJTlRFUkVTVF9SQVRFLFJPTEVfQ1JFQVRFIE1BSUxURU1QTEFURSxST0xFX0NSRUFURSBNRU5VLFJPTEVfQ1JFQVRFIE1FTlVJVEVNLFJPTEVfQ1JFQVRFIE5FVFdPUktTLFJPTEVfQ1JFQVRFIE5FV1MsUk9MRV9DUkVBVEUgUEFHRSxST0xFX0NSRUFURSBTTElERVIsUk9MRV9ERUxFVEUgQkxPQ0ssUk9MRV9ERUxFVEUgQ0FURUdPUlksUk9MRV9ERUxFVEUgRVhDSEFOR0VfUkFURSxST0xFX0RFTEVURSBGT1JNLFJPTEVfREVMRVRFIEdST1VQLFJPTEVfREVMRVRFIElOVEVSRVNUX1JBVEUsUk9MRV9ERUxFVEUgTUFJTFRFTVBMQVRFLFJPTEVfREVMRVRFIE1FRElBLFJPTEVfREVMRVRFIE1FTlUsUk9MRV9ERUxFVEUgTUVOVUlURU0sUk9MRV9ERUxFVEUgTkVUV09SS1MsUk9MRV9ERUxFVEUgTkVXUyxST0xFX0RFTEVURSBQQUdFLFJPTEVfREVMRVRFIFJPTEUsUk9MRV9ERUxFVEUgU0xJREVSLFJPTEVfREVMRVRFIFRBRyxST0xFX0RFTEVURSBVU0VSLFJPTEVfRFVZ4buGVCBUSU4gVOG7qEMsUk9MRV9EVVnhu4ZUIFRSQU5HLFJPTEVfRURJVCBCTE9DSyxST0xFX0VESVQgQ0FURUdPUlksUk9MRV9FRElUIEVYQ0hBTkdFX1JBVEUsUk9MRV9FRElUIEZPUk0sUk9MRV9FRElUIEdST1VQLFJPTEVfRURJVCBJTlRFUkVTVF9SQVRFLFJPTEVfRURJVCBNQUlMVEVNUExBVEUsUk9MRV9FRElUIE1FRElBLFJPTEVfRURJVCBNRU5VLFJPTEVfRURJVCBNRU5VSVRFTSxST0xFX0VESVQgTkVUV09SS1MsUk9MRV9FRElUIE5FV1MsUk9MRV9FRElUIFBBR0UsUk9MRV9FRElUIFJPTEUsUk9MRV9FRElUIFNMSURFUixST0xFX0VESVQgU1RPUkUsUk9MRV9FRElUIFRBRyxST0xFX0VESVQgVEjGryBQSOG6ok4gSOG7kkksUk9MRV9FRElUIFVTRVIsUk9MRV9HRVQgQkxPQ0ssUk9MRV9HRVQgQ0FURUdPUlksUk9MRV9HRVQgRVhDSEFOR0VfUkFURSxST0xFX0dFVCBGT1JNLFJPTEVfR0VUIEdST1VQLFJPTEVfR0VUIElOVEVSRVNUX1JBVEUsUk9MRV9HRVQgTUFJTFRFTVBMQVRFLFJPTEVfR0VUIE1FRElBLFJPTEVfR0VUIE1FTlUsUk9MRV9HRVQgTUVOVUlURU0sUk9MRV9HRVQgTkVUV09SS1MsUk9MRV9HRVQgTkVXUyxST0xFX0dFVCBQQUdFLFJPTEVfR0VUIFJPTEUsUk9MRV9HRVQgU0VUVElORyxST0xFX0dFVCBTTElERVIsUk9MRV9HRVQgU1RPUkUsUk9MRV9HRVQgVEFHLFJPTEVfR0VUIFRIxq8gUEjhuqJOIEjhu5JJLFJPTEVfR0VUIFVTRVIsUk9MRV9T4busQSBCTE9DSyxST0xFX1Phu6xBIEZPUk0sUk9MRV9T4busQSBMw4NJIFNV4bqkVCxST0xFX1Phu6xBIE1FRElBLFJPTEVfU-G7rEEgTeG6oE5HIEzGr-G7mkksUk9MRV9T4busQSBOSMOCTiBWScOKTixST0xFX1Phu6xBIE5Iw5NNLFJPTEVfU-G7rEEgU1RPUkUsUk9MRV9T4busQSBUQUcsUk9MRV9T4busQSBUSMavIFBI4bqiTiBI4buSSSxST0xFX1Phu6xBIFThu4ggR0nDgSxST0xFX1Phu6xBIFZBSSBUUsOSLFJPTEVfVEjDik0gQkxPQ0ssUk9MRV9USMOKTSBGT1JNLFJPTEVfVEjDik0gTUVESUEsUk9MRV9USMOKTSBOSMOCTiBWScOKTixST0xFX1RIw4pNIE5Iw5NNLFJPTEVfVEjDik0gVEFHLFJPTEVfVEjDik0gVkFJIFRSw5IsUk9MRV9U4bqgTyBEQU5IIE3hu6RDLFJPTEVfVOG6oE8gTMODSSBTVeG6pFQsUk9MRV9U4bqgTyBNQUlMVEVNUExBVEUsUk9MRV9U4bqgTyBNRU5VLFJPTEVfVOG6oE8gTUVOVUlURU0sUk9MRV9U4bqgTyBN4bqgTkcgTMav4buaSSxST0xFX1ThuqBPIFBBR0UsUk9MRV9U4bqgTyBTTElERVIsUk9MRV9U4bqgTyBUSU4gVOG7qEMsUk9MRV9U4bqgTyBU4buIIEdJw4EsUk9MRV9VUERBVEUgUE9TSVRJT04gQ0FURUdPUlksUk9MRV9VUERBVEUgUE9TSVRJT04gTUVOVUlURU0sUk9MRV9VUERBVEUgUE9TSVRJT04gUEFHRSxST0xFX1hFTSBCTE9DSyxST0xFX1hFTSBDw4BJIMSQ4bq2VCxST0xFX1hFTSBEQU5IIE3hu6RDLFJPTEVfWEVNIEZPUk0sUk9MRV9YRU0gTMODSSBTVeG6pFQsUk9MRV9YRU0gTUFJTFRFTVBMQVRFLFJPTEVfWEVNIE1FRElBLFJPTEVfWEVNIE1FTlUsUk9MRV9YRU0gTUVOVUlURU0sUk9MRV9YRU0gTeG6oE5HIEzGr-G7mkksUk9MRV9YRU0gTkjDgk4gVknDik4sUk9MRV9YRU0gTkjDk00sUk9MRV9YRU0gUEFHRSxST0xFX1hFTSBTTElERVIsUk9MRV9YRU0gU1RPUkUsUk9MRV9YRU0gVEFHLFJPTEVfWEVNIFRIxq8gUEjhuqJOIEjhu5JJLFJPTEVfWEVNIFRJTiBU4buoQyxST0xFX1hFTSBU4buIIEdJw4EsUk9MRV9YRU0gVkFJIFRSw5IsUk9MRV9Yw5NBIEJMT0NLLFJPTEVfWMOTQSBEQU5IIE3hu6RDLFJPTEVfWMOTQSBGT1JNLFJPTEVfWMOTQSBMw4NJIFNV4bqkVCxST0xFX1jDk0EgTUFJTFRFTVBMQVRFLFJPTEVfWMOTQSBNRURJQSxST0xFX1jDk0EgTUVOVSxST0xFX1jDk0EgTUVOVUlURU0sUk9MRV9Yw5NBIE3huqBORyBMxq_hu5pJLFJPTEVfWMOTQSBOSMOCTiBWScOKTixST0xFX1jDk0EgTkjDk00sUk9MRV9Yw5NBIFBBR0UsUk9MRV9Yw5NBIFNMSURFUixST0xFX1jDk0EgVEFHLFJPTEVfWMOTQSBUSU4gVOG7qEMsUk9MRV9Yw5NBIFThu4ggR0nDgSxST0xFX1jDk0EgVkFJIFRSw5IscXXhuqNuIHRy4buLIiwiaWF0IjoxNTgxMzg5MzQ3LCJleHAiOjE1ODM5ODEzNDd9.AynmpmEKDmTposaWSOzEBPLARBpisJVIK5RgS4q4MMQ'
    }
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};


// CONCATENATED MODULE: ./store/rate/saga.js
function saga_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function saga_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { saga_ownKeys(Object(source), true).forEach(function (key) { saga_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { saga_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function saga_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function* getRateSaga() {
  yield Object(effects_["takeLatest"])(rate_actions["a" /* default */].GET_RATE_REQUEST, function* () {
    try {
      const res = yield getRateService();

      if (res.status === 200) {
        let list = {};
        const sortData = yield res.data.sort((date_1, date_2) => date_2.created_at - date_1.created_at);

        for (let i = 0; i < 1; i++) {
          list = saga_objectSpread({}, list, {}, sortData[i]);
        }

        yield Object(effects_["put"])({
          type: rate_actions["a" /* default */].GET_RATE_RESPONSE,
          data: list
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(getRateSaga)]);
}
// CONCATENATED MODULE: ./services/menu.js


const getAllMenu = () => {
  return Object(request["a" /* default */])({
    url: '/menu',
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getMenuItemById = menuId => {
  return Object(request["a" /* default */])({
    url: `/menu/${menuId}/menuItem`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getSettingFooterService = () => {
  return Object(request["a" /* default */])({
    url: `/common/general`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getSocialLinkService = () => {
  return Object(request["a" /* default */])({
    url: `/common/socialLink`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getMenuItemByPosition = data => {
  return Object(request["a" /* default */])({
    url: `menu/position/${data}`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};


// CONCATENATED MODULE: ./store/layout/saga.js




function* getSettingFooterSaga() {
  yield Object(effects_["takeLatest"])(layout_actions["a" /* default */].GET_SETTING_FOOTER_REQUEST, function* () {
    try {
      const res = yield getSettingFooterService();

      if (res.status === 200) {
        yield Object(effects_["put"])({
          type: layout_actions["a" /* default */].GET_SETTING_FOOTER_RESPONSE,
          data: res.data.general
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getSocialLinkSaga() {
  yield Object(effects_["takeLatest"])(layout_actions["a" /* default */].GET_SOCIALINK_REQUEST, function* () {
    try {
      const res = yield getSocialLinkService();

      if (res.status === 200) {
        yield Object(effects_["put"])({
          type: layout_actions["a" /* default */].GET_SOCIALINK_RESPONSE,
          data: res.data.socialLink
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* layout_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(getSettingFooterSaga), Object(effects_["fork"])(getSocialLinkSaga)]);
}
// EXTERNAL MODULE: ./services/regulation.js
var regulation = __webpack_require__("HSqs");

// CONCATENATED MODULE: ./store/regulation/saga.js




function* getRegulationSaga() {
  yield Object(effects_["takeLatest"])(regulation_actions["a" /* default */].GET_REGULATION_PAGINATION_REQUEST, function* (params) {
    const {
      types,
      year,
      page
    } = params;

    try {
      const res = yield Object(regulation["c" /* getRegulationPagation */])(types, year, page);

      if (res.status === 200) {
        yield Object(effects_["put"])({
          type: regulation_actions["a" /* default */].GET_REGULATION_PAGINATION_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* searchRegulationSaga() {
  yield Object(effects_["takeLatest"])(regulation_actions["a" /* default */].SEARCH_REGULATION_REQUEST, function* (params) {
    const {
      data
    } = params;

    try {
      const res = yield Object(regulation["a" /* fillRegulationServices */])(data);

      if (res.status === 200) {
        yield Object(effects_["put"])({
          type: regulation_actions["a" /* default */].SEARCH_REGULATION_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getTypeRegulationSaga() {
  yield Object(effects_["takeLatest"])(regulation_actions["a" /* default */].GET_TYPE_REGULATION_REQUEST, function* () {
    try {
      const res = yield Object(regulation["e" /* getTypeRegulationServices */])();

      if (res.status === 200) {
        yield Object(effects_["put"])({
          type: regulation_actions["a" /* default */].GET_TYPE_REGULATION_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getTypeRegulationByIDSaga() {
  yield Object(effects_["takeLatest"])(regulation_actions["a" /* default */].GET_TYPE_REGULATION_BY_ID_REQUEST, function* (params) {
    const {
      id
    } = params;

    try {
      const res = yield Object(regulation["d" /* getTypeRegulationByIDServices */])(id);

      if (res.status === 200) {
        yield Object(effects_["put"])({
          type: regulation_actions["a" /* default */].GET_TYPE_REGULATION_BY_ID_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getUrlVideoSaga() {
  yield Object(effects_["takeLatest"])(regulation_actions["a" /* default */].GET_URL_VIDEO_REQUEST, function* (params) {
    const {
      data
    } = params;

    try {
      const res = yield Object(regulation["f" /* getUrlVideoService */])(data);

      if (res.status === 200) {
        yield Object(effects_["put"])({
          type: regulation_actions["a" /* default */].GET_URL_VIDEO_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getRegulationByYearSaga() {
  yield Object(effects_["takeLatest"])(regulation_actions["a" /* default */].GET_REGULATION_BY_YEAR_REQUEST, function* (params) {
    const {
      types,
      detailTypeId,
      number,
      page,
      year
    } = params;

    try {
      const res = yield Object(regulation["b" /* getRegulationListYear */])(types, detailTypeId, number, page, year);

      if (res.status === 200) {
        yield Object(effects_["put"])({
          type: regulation_actions["a" /* default */].GET_REGULATION_BY_YEAR_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* regulation_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(searchRegulationSaga), Object(effects_["fork"])(getTypeRegulationSaga), Object(effects_["fork"])(getUrlVideoSaga), Object(effects_["fork"])(getRegulationSaga), Object(effects_["fork"])(getRegulationByYearSaga), Object(effects_["fork"])(getTypeRegulationByIDSaga)]);
}
// CONCATENATED MODULE: ./store/menu/saga.js
function menu_saga_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function menu_saga_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { menu_saga_ownKeys(Object(source), true).forEach(function (key) { menu_saga_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { menu_saga_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function menu_saga_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const nest = (items, id = null, link = 'parentId') => {
  return items.filter(item => item[link] === id).map(item => menu_saga_objectSpread({}, item, {
    title: `${item.name}`,
    children: nest(items.sort((a, b) => a.position - b.position), item.id),
    expanded: true
  }));
};

function* getMenuHeaderSaga() {
  yield Object(effects_["takeLatest"])(menu_actions["a" /* default */].GET_MENU_HEADER_REQUEST, function* () {
    try {
      const res = yield getMenuItemByPosition('top_top');

      if (res.status === 200) {
        yield Object(effects_["put"])({
          type: menu_actions["a" /* default */].GET_MENU_HEADER_RESPONSE,
          data: nest(res.data.menuItems)
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getMenuNavSaga() {
  yield Object(effects_["takeLatest"])(menu_actions["a" /* default */].GET_MENU_NAV_REQUEST, function* () {
    try {
      const res = yield getMenuItemByPosition('top2');

      if (res.status === 200) {
        yield Object(effects_["put"])({
          type: menu_actions["a" /* default */].GET_MENU_NAV_RESPONSE,
          data: nest(res.data.menuItems)
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getMenuFooterTopSaga() {
  yield Object(effects_["takeLatest"])(menu_actions["a" /* default */].GET_MENU_FOOTER_TOP_REQUEST, function* () {
    try {
      const res = yield getMenuItemByPosition('Menu footer top');

      if (res.status === 200) {
        yield Object(effects_["put"])({
          type: menu_actions["a" /* default */].GET_MENU_FOOTER_TOP_RESPONSE,
          data: nest(res.data.menuItems)
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getMenuFooterMainSaga() {
  yield Object(effects_["takeLatest"])(menu_actions["a" /* default */].GET_MENU_FOOTER_MAIN_REQUEST, function* () {
    try {
      const res = yield getMenuItemByPosition('Menu footer main');

      if (res.status === 200) {
        yield Object(effects_["put"])({
          type: menu_actions["a" /* default */].GET_MENU_FOOTER_MAIN_RESPONSE,
          data: nest(res.data.menuItems)
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getMenuFooterBottomSaga() {
  yield Object(effects_["takeLatest"])(menu_actions["a" /* default */].GET_MENU_FOOTER_BOTTOM_REQUEST, function* () {
    try {
      const res = yield getMenuItemByPosition('menu footer bottom');

      if (res.status === 200) {
        yield Object(effects_["put"])({
          type: menu_actions["a" /* default */].GET_MENU_FOOTER_BOTTOM_RESPONSE,
          data: nest(res.data.menuItems)
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* menu_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(getMenuHeaderSaga), Object(effects_["fork"])(getMenuNavSaga), Object(effects_["fork"])(getMenuFooterTopSaga), Object(effects_["fork"])(getMenuFooterMainSaga), Object(effects_["fork"])(getMenuFooterBottomSaga)]);
}
// EXTERNAL MODULE: ./services/news.js
var news = __webpack_require__("vgnt");

// CONCATENATED MODULE: ./store/investors/saga.js




function* getNewSaga() {
  yield Object(effects_["takeLatest"])(investors_actions["a" /* default */].GET_NEW_INVESTOR_REQUEST, function* (params) {
    const {
      id
    } = params;

    try {
      const res = yield Object(news["d" /* getNewCategoryIdService */])(id);

      if (res.status === 200) {
        yield Object(effects_["put"])({
          type: investors_actions["a" /* default */].GET_NEW_INVESTOR_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getNotifiactionSaga() {
  yield Object(effects_["takeLatest"])(investors_actions["a" /* default */].GET_NEW_INVESTOR_NOTIFICATION_REQUEST, function* (params) {
    const {
      id
    } = params;

    try {
      const res = yield Object(news["d" /* getNewCategoryIdService */])(id);

      if (res.status === 200) {
        yield Object(effects_["put"])({
          type: investors_actions["a" /* default */].GET_NEW_INVESTOR_NOTIFICATION_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* investors_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(getNewSaga), Object(effects_["fork"])(getNotifiactionSaga)]);
}
// CONCATENATED MODULE: ./store/news/saga.js




function* getNewByCategorySaga() {
  yield Object(effects_["takeLatest"])(news_actions["a" /* default */].FILL_NEWS_BY_CATEGORY_REQUEST, function* (params) {
    const {
      id,
      page,
      year
    } = params;

    try {
      const res = yield Object(news["a" /* findAllByCategory */])(id, page, year);

      if (res.status === 200) {
        yield Object(effects_["put"])({
          type: news_actions["a" /* default */].FILL_NEWS_BY_CATEGORY_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* news_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(getNewByCategorySaga)]);
}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./services/map.js


const url = 'https://sapotacorp.com:8443/api';

const getProvinceService = () => {
  return external_axios_default()({
    url: `${url}/province`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getDistrictService = id => {
  return external_axios_default()({
    url: `${url}/district/${id}`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const searchBranchesService = params => {
  return Object(request["a" /* default */])({
    url: `/network/search`,
    method: 'GET',
    params: params
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};


// CONCATENATED MODULE: ./store/map/saga.js





function* getProvinceSaga() {
  yield Object(effects_["takeLatest"])(map_actions["a" /* default */].GET_PROVINCE_REQUEST, function* () {
    try {
      const res = yield getProvinceService();

      if (res.status === 200) {
        const data = Object(external_lodash_["map"])(res.data, province => ({
          value: province.id,
          label: province.name
        }));
        yield Object(effects_["put"])({
          type: map_actions["a" /* default */].GET_PROVINCE_RESPONSE,
          data: data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getDistrictSaga() {
  yield Object(effects_["takeLatest"])(map_actions["a" /* default */].GET_DISTRICT_REQUEST, function* (params) {
    const {
      id
    } = params;

    try {
      const res = yield getDistrictService(id);

      if (res.status === 200) {
        const data = Object(external_lodash_["map"])(res.data, district => ({
          value: district.id,
          label: district.name
        }));
        yield Object(effects_["put"])({
          type: map_actions["a" /* default */].GET_DISTRICT_RESPONSE,
          data: data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* searchBranchesSaga() {
  yield Object(effects_["takeLatest"])(map_actions["a" /* default */].SEARCH_BRANCHES_REQUEST, function* (params) {
    try {
      const res = yield searchBranchesService(params.params);

      if (res.status === 200) {
        yield Object(effects_["put"])({
          type: map_actions["a" /* default */].SEARCH_BRANCHES_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* map_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(getProvinceSaga), Object(effects_["fork"])(getDistrictSaga), Object(effects_["fork"])(searchBranchesSaga)]);
}
// CONCATENATED MODULE: ./store/saga.js









function* store_saga_rootSaga() {
  yield Object(effects_["all"])([rootSaga(), saga_rootSaga(), layout_saga_rootSaga(), regulation_saga_rootSaga(), menu_saga_rootSaga(), investors_saga_rootSaga(), news_saga_rootSaga(), map_saga_rootSaga()]);
}
// CONCATENATED MODULE: ./store/index.js





const bindMiddleware = middleware => {
  return Object(external_redux_["applyMiddleware"])(...middleware);
};

const configureStore = () => {
  const sagaMiddleware = external_redux_saga_default()();
  const store = Object(external_redux_["createStore"])(store_reducers, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(store_saga_rootSaga);
  return store;
};

/* harmony default export */ var store_0 = (configureStore);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: ./styles/block.scss
var block = __webpack_require__("Z4jO");

// EXTERNAL MODULE: ./styles/styles.css
var styles = __webpack_require__("vJJZ");

// EXTERNAL MODULE: ./styles/custom.css
var custom = __webpack_require__("cqJL");

// EXTERNAL MODULE: ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css
var carousel_min = __webpack_require__("a6qw");

// CONCATENATED MODULE: ./pages/_app.js
var __jsx = external_react_default.a.createElement;







 // import 'bootstrap/dist/css/bootstrap.css';





class _app_NextApp extends app_default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        ctx
      });
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(external_react_redux_["Provider"], {
      store: store
    }, __jsx(Component, pageProps));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(store_0)(external_next_redux_saga_default()(Object(i18n["a" /* appWithTranslation */])(_app_NextApp))));

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "8WVE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLang; });
const getToken = () => {
  const localStore = JSON.parse(localStorage.getItem('persist:root'));
  let token = '';

  if (localStore !== null) {
    const profile = JSON.parse(localStore.AuthReducer);
    token = profile.profile.token;
  }

  return token;
};
const setLang = (lang, flag) => {
  if (lang) {
    window.location.reload();
    localStorage.setItem('flag', JSON.stringify(flag));
    return localStorage.setItem('lang', JSON.stringify(lang));
  }

  return null;
};
const getFlag = () => {
  try {
    if (localStorage) {
      const flag = JSON.parse(localStorage.getItem('flag'));

      if (flag) {
        return flag;
      }
    }
  } catch (error) {
    return 'vn';
  }

  return 'vn';
};
const getLang = () => {
  const lang = JSON.parse(localStorage.getItem('lang'));

  if (lang) {
    return lang;
  }

  return 'vi';
};

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "HSqs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fillRegulationServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getTypeRegulationServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getUrlVideoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getRegulationPagation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRegulationListYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTypeRegulationByIDServices; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ZPNs");


const getTypeRegulationServices = () => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `/regulation/type`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getTypeRegulationByIDServices = id => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `/regulation/type/${id}`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const fillRegulationServices = data => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `/regulation/search`,
    method: 'POST',
    data: data
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getUrlVideoService = data => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `/regulation/url/${data}`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getRegulationPagation = (type, year, page) => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `/regulation/pagination/${type}/${year}?number=10&page=${page}`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getRegulationListYear = (type, detailTypeId, number, page, year) => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `/regulation/investors/${type}?detailTypeId=${detailTypeId}&number=${number}&page=${page}&year=${year}`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};



/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "TqPW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Actions = {
  FILL_NEWS_BY_CATEGORY_REQUEST: 'FILL_NEWS_BY_CATEGORY_REQUEST',
  FILL_NEWS_BY_CATEGORY_RESPONSE: 'FILL_NEWS_BY_CATEGORY_RESPONSE',
  fillNesByCategoryAction: (id, page, year) => ({
    type: Actions.FILL_NEWS_BY_CATEGORY_REQUEST,
    id,
    page,
    year
  })
};
/* harmony default export */ __webpack_exports__["a"] = (Actions);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Z4jO":
/***/ (function(module, exports) {



/***/ }),

/***/ "ZPNs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8WVE");


const request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: `https://sapotacorp.com:8443/vi/api`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlcyI6IlJPTEVfQUNDRVBUIE5FV1MsUk9MRV9BQ0NFUFQgUEFHRVMsUk9MRV9BREQgQkxPQ0ssUk9MRV9BREQgRk9STSxST0xFX0FERCBHUk9VUCxST0xFX0FERCBNRURJQSxST0xFX0FERCBST0xFLFJPTEVfQUREIFRBRyxST0xFX0FERCBVU0VSLFJPTEVfQ0jhu4hOSCBT4busQSBEQU5IIE3hu6RDLFJPTEVfQ0jhu4hOSCBT4busQSBNQUlMVEVNUExBVEUsUk9MRV9DSOG7iE5IIFPhu6xBIE1FTlUsUk9MRV9DSOG7iE5IIFPhu6xBIE1FTlVJVEVNLFJPTEVfQ0jhu4hOSCBT4busQSBQQUdFLFJPTEVfQ0jhu4hOSCBT4busQSBTTElERVIsUk9MRV9DSOG7iE5IIFPhu6xBIFRJTiBU4buoQyxST0xFX0NI4buITkggU-G7rEEgVuG7iiBUUsONIERBTkggTeG7pEMsUk9MRV9DSOG7iE5IIFPhu6xBIFbhu4ogVFLDjSBNRU5VSVRFTSxST0xFX0NI4buITkggU-G7rEEgVuG7iiBUUsONIFBBR0UsUk9MRV9DUkVBVEUgQ0FURUdPUlksUk9MRV9DUkVBVEUgRVhDSEFOR0VfUkFURSxST0xFX0NSRUFURSBJTlRFUkVTVF9SQVRFLFJPTEVfQ1JFQVRFIE1BSUxURU1QTEFURSxST0xFX0NSRUFURSBNRU5VLFJPTEVfQ1JFQVRFIE1FTlVJVEVNLFJPTEVfQ1JFQVRFIE5FVFdPUktTLFJPTEVfQ1JFQVRFIE5FV1MsUk9MRV9DUkVBVEUgUEFHRSxST0xFX0NSRUFURSBTTElERVIsUk9MRV9ERUxFVEUgQkxPQ0ssUk9MRV9ERUxFVEUgQ0FURUdPUlksUk9MRV9ERUxFVEUgRVhDSEFOR0VfUkFURSxST0xFX0RFTEVURSBGT1JNLFJPTEVfREVMRVRFIEdST1VQLFJPTEVfREVMRVRFIElOVEVSRVNUX1JBVEUsUk9MRV9ERUxFVEUgTUFJTFRFTVBMQVRFLFJPTEVfREVMRVRFIE1FRElBLFJPTEVfREVMRVRFIE1FTlUsUk9MRV9ERUxFVEUgTUVOVUlURU0sUk9MRV9ERUxFVEUgTkVUV09SS1MsUk9MRV9ERUxFVEUgTkVXUyxST0xFX0RFTEVURSBQQUdFLFJPTEVfREVMRVRFIFJPTEUsUk9MRV9ERUxFVEUgU0xJREVSLFJPTEVfREVMRVRFIFRBRyxST0xFX0RFTEVURSBVU0VSLFJPTEVfRFVZ4buGVCBUSU4gVOG7qEMsUk9MRV9EVVnhu4ZUIFRSQU5HLFJPTEVfRURJVCBCTE9DSyxST0xFX0VESVQgQ0FURUdPUlksUk9MRV9FRElUIEVYQ0hBTkdFX1JBVEUsUk9MRV9FRElUIEZPUk0sUk9MRV9FRElUIEdST1VQLFJPTEVfRURJVCBJTlRFUkVTVF9SQVRFLFJPTEVfRURJVCBNQUlMVEVNUExBVEUsUk9MRV9FRElUIE1FRElBLFJPTEVfRURJVCBNRU5VLFJPTEVfRURJVCBNRU5VSVRFTSxST0xFX0VESVQgTkVUV09SS1MsUk9MRV9FRElUIE5FV1MsUk9MRV9FRElUIFBBR0UsUk9MRV9FRElUIFJPTEUsUk9MRV9FRElUIFNMSURFUixST0xFX0VESVQgU1RPUkUsUk9MRV9FRElUIFRBRyxST0xFX0VESVQgVEjGryBQSOG6ok4gSOG7kkksUk9MRV9FRElUIFVTRVIsUk9MRV9HRVQgQkxPQ0ssUk9MRV9HRVQgQ0FURUdPUlksUk9MRV9HRVQgRVhDSEFOR0VfUkFURSxST0xFX0dFVCBGT1JNLFJPTEVfR0VUIEdST1VQLFJPTEVfR0VUIElOVEVSRVNUX1JBVEUsUk9MRV9HRVQgTUFJTFRFTVBMQVRFLFJPTEVfR0VUIE1FRElBLFJPTEVfR0VUIE1FTlUsUk9MRV9HRVQgTUVOVUlURU0sUk9MRV9HRVQgTkVUV09SS1MsUk9MRV9HRVQgTkVXUyxST0xFX0dFVCBQQUdFLFJPTEVfR0VUIFJPTEUsUk9MRV9HRVQgU0VUVElORyxST0xFX0dFVCBTTElERVIsUk9MRV9HRVQgU1RPUkUsUk9MRV9HRVQgVEFHLFJPTEVfR0VUIFRIxq8gUEjhuqJOIEjhu5JJLFJPTEVfR0VUIFVTRVIsUk9MRV9T4busQSBCTE9DSyxST0xFX1Phu6xBIEZPUk0sUk9MRV9T4busQSBMw4NJIFNV4bqkVCxST0xFX1Phu6xBIE1FRElBLFJPTEVfU-G7rEEgTeG6oE5HIEzGr-G7mkksUk9MRV9T4busQSBOSMOCTiBWScOKTixST0xFX1Phu6xBIE5Iw5NNLFJPTEVfU-G7rEEgU1RPUkUsUk9MRV9T4busQSBUQUcsUk9MRV9T4busQSBUSMavIFBI4bqiTiBI4buSSSxST0xFX1Phu6xBIFThu4ggR0nDgSxST0xFX1Phu6xBIFZBSSBUUsOSLFJPTEVfVEjDik0gQkxPQ0ssUk9MRV9USMOKTSBGT1JNLFJPTEVfVEjDik0gTUVESUEsUk9MRV9USMOKTSBOSMOCTiBWScOKTixST0xFX1RIw4pNIE5Iw5NNLFJPTEVfVEjDik0gVEFHLFJPTEVfVEjDik0gVkFJIFRSw5IsUk9MRV9U4bqgTyBEQU5IIE3hu6RDLFJPTEVfVOG6oE8gTMODSSBTVeG6pFQsUk9MRV9U4bqgTyBNQUlMVEVNUExBVEUsUk9MRV9U4bqgTyBNRU5VLFJPTEVfVOG6oE8gTUVOVUlURU0sUk9MRV9U4bqgTyBN4bqgTkcgTMav4buaSSxST0xFX1ThuqBPIFBBR0UsUk9MRV9U4bqgTyBTTElERVIsUk9MRV9U4bqgTyBUSU4gVOG7qEMsUk9MRV9U4bqgTyBU4buIIEdJw4EsUk9MRV9VUERBVEUgUE9TSVRJT04gQ0FURUdPUlksUk9MRV9VUERBVEUgUE9TSVRJT04gTUVOVUlURU0sUk9MRV9VUERBVEUgUE9TSVRJT04gUEFHRSxST0xFX1hFTSBCTE9DSyxST0xFX1hFTSBDw4BJIMSQ4bq2VCxST0xFX1hFTSBEQU5IIE3hu6RDLFJPTEVfWEVNIEZPUk0sUk9MRV9YRU0gTMODSSBTVeG6pFQsUk9MRV9YRU0gTUFJTFRFTVBMQVRFLFJPTEVfWEVNIE1FRElBLFJPTEVfWEVNIE1FTlUsUk9MRV9YRU0gTUVOVUlURU0sUk9MRV9YRU0gTeG6oE5HIEzGr-G7mkksUk9MRV9YRU0gTkjDgk4gVknDik4sUk9MRV9YRU0gTkjDk00sUk9MRV9YRU0gUEFHRSxST0xFX1hFTSBTTElERVIsUk9MRV9YRU0gU1RPUkUsUk9MRV9YRU0gVEFHLFJPTEVfWEVNIFRIxq8gUEjhuqJOIEjhu5JJLFJPTEVfWEVNIFRJTiBU4buoQyxST0xFX1hFTSBU4buIIEdJw4EsUk9MRV9YRU0gVkFJIFRSw5IsUk9MRV9Yw5NBIEJMT0NLLFJPTEVfWMOTQSBEQU5IIE3hu6RDLFJPTEVfWMOTQSBGT1JNLFJPTEVfWMOTQSBMw4NJIFNV4bqkVCxST0xFX1jDk0EgTUFJTFRFTVBMQVRFLFJPTEVfWMOTQSBNRURJQSxST0xFX1jDk0EgTUVOVSxST0xFX1jDk0EgTUVOVUlURU0sUk9MRV9Yw5NBIE3huqBORyBMxq_hu5pJLFJPTEVfWMOTQSBOSMOCTiBWScOKTixST0xFX1jDk0EgTkjDk00sUk9MRV9Yw5NBIFBBR0UsUk9MRV9Yw5NBIFNMSURFUixST0xFX1jDk0EgVEFHLFJPTEVfWMOTQSBUSU4gVOG7qEMsUk9MRV9Yw5NBIFThu4ggR0nDgSxST0xFX1jDk0EgVkFJIFRSw5IscXXhuqNuIHRy4buLIiwiaWF0IjoxNTgxMzg5MzQ3LCJleHAiOjE1ODM5ODEzNDd9.AynmpmEKDmTposaWSOzEBPLARBpisJVIK5RgS4q4MMQ'
  }
}); // before send request

request.interceptors.request.use(config => {
  // const lang = getLang();
  config.baseURL = `https://sapotacorp.com:8443/${Object(_localStorage__WEBPACK_IMPORTED_MODULE_1__[/* getLang */ "b"])()}/api`;
  return config;
}, error => {
  return error;
}); // after send request

request.interceptors.response.use(response => {
  return response;
}, error => {
  const response = JSON.parse(JSON.stringify(error));
  return response.response;
});
/* harmony default export */ __webpack_exports__["a"] = (request);

/***/ }),

/***/ "a6qw":
/***/ (function(module, exports) {



/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cqJL":
/***/ (function(module, exports) {



/***/ }),

/***/ "dxtc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Actions = {
  GET_REGULATION_PAGINATION_REQUEST: 'GET_REGULATION_PAGINATION_REQUEST',
  GET_REGULATION_PAGINATION_RESPONSE: 'GET_REGULATION_PAGINATION_RESPONSE',
  getRegulation: (types, year, page) => ({
    type: Actions.GET_REGULATION_PAGINATION_REQUEST,
    types,
    year,
    page
  }),
  GET_TYPE_REGULATION_REQUEST: 'GET_TYPE_REGULATION_REQUEST',
  GET_TYPE_REGULATION_RESPONSE: 'GET_TYPE_REGULATION_RESPONSE',
  getTypeRegulationAction: () => ({
    type: Actions.GET_TYPE_REGULATION_REQUEST
  }),
  SEARCH_REGULATION_REQUEST: 'SEARCH_REGULATION_REQUEST',
  SEARCH_REGULATION_RESPONSE: 'SEARCH_REGULATION_RESPONSE',
  searchRegulationAction: data => ({
    type: Actions.SEARCH_REGULATION_REQUEST,
    data
  }),
  GET_URL_VIDEO_REQUEST: 'GET_URL_VIDEO_REQUEST',
  GET_URL_VIDEO_RESPONSE: 'GET_URL_VIDEO_RESPONSE',
  getUrlVideo: data => ({
    type: Actions.GET_URL_VIDEO_REQUEST,
    data
  }),
  GET_REGULATION_BY_YEAR_REQUEST: 'GET_REGULATION_BY_YEAR_REQUEST',
  GET_REGULATION_BY_YEAR_RESPONSE: 'GET_REGULATION_BY_YEAR_RESPONSE',
  getRegulationByYear: (types, detailTypeId, number, page, year) => ({
    type: Actions.GET_REGULATION_BY_YEAR_REQUEST,
    types,
    detailTypeId,
    number,
    page,
    year
  }),
  GET_TYPE_REGULATION_BY_ID_REQUEST: 'GET_TYPE_REGULATION_BY_ID_REQUEST',
  GET_TYPE_REGULATION_BY_ID_RESPONSE: 'GET_TYPE_REGULATION_BY_ID_RESPONSE',
  getTypeRegulationByIDAction: id => ({
    type: Actions.GET_TYPE_REGULATION_BY_ID_REQUEST,
    id
  })
};
/* harmony default export */ __webpack_exports__["a"] = (Actions);

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hrxg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Actions = {
  GET_HOME_REQUEST: 'GET_HOME_REQUEST',
  GET_HOME_RESPONSE: 'GET_HOME_RESPONSE',
  getHomeAction: name => ({
    type: Actions.GET_HOME_REQUEST,
    name
  }),
  GET_PAGES_BY_ID_REQUEST: 'GET_PAGES_BY_ID_REQUEST',
  GET_PAGES_BY_ID_RESPONSE: 'GET_PAGES_BY_ID_RESPONSE',
  getPagesById: data => ({
    type: Actions.GET_PAGES_BY_ID_REQUEST,
    data
  })
};
/* harmony default export */ __webpack_exports__["a"] = (Actions);

/***/ }),

/***/ "k7Sn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appWithTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withTranslation; });
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6f9I");
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_0__);

const NextI18NextInstance = new next_i18next__WEBPACK_IMPORTED_MODULE_0___default.a({
  defaultLanguage: 'vi',
  lng: 'vi',
  otherLanguages: ['en'],
  localeSubpaths: {
    vi: 'vi',
    en: 'en'
  }
}); // NextI18NextInstance.i

/* unused harmony default export */ var _unused_webpack_default_export = (NextI18NextInstance);
/* Optionally, export class methods as named exports */

const {
  appWithTranslation,
  withTranslation
} = NextI18NextInstance;

/***/ }),

/***/ "pEZS":
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "rCtt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Actions = {
  GET_NEW_INVESTOR_REQUEST: 'GET_NEW_INVESTOR_REQUEST',
  GET_NEW_INVESTOR_RESPONSE: 'GET_NEW_INVESTOR_RESPONSE',
  getNewInvestorAction: id => ({
    type: Actions.GET_NEW_INVESTOR_REQUEST,
    id
  }),
  GET_NEW_INVESTOR_NOTIFICATION_REQUEST: 'GET_NEW_INVESTOR_NOTIFICATION_REQUEST',
  GET_NEW_INVESTOR_NOTIFICATION_RESPONSE: 'GET_NEW_INVESTOR_NOTIFICATION_RESPONSE',
  getNotificationAction: id => ({
    type: Actions.GET_NEW_INVESTOR_NOTIFICATION_REQUEST,
    id
  })
};
/* harmony default export */ __webpack_exports__["a"] = (Actions);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "uPGx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Actions = {
  GET_SETTING_FOOTER_REQUEST: 'GET_SETTING_FOOTER_REQUEST',
  GET_SETTING_FOOTER_RESPONSE: 'GET_SETTING_FOOTER_RESPONSE',
  getSettingFooterAction: () => ({
    type: Actions.GET_SETTING_FOOTER_REQUEST
  }),
  GET_SOCIALINK_REQUEST: 'GET_SOCIALINK_REQUEST',
  GET_SOCIALINK_RESPONSE: 'GET_SOCIALINK_RESPONSE',
  getSocailinkAction: () => ({
    type: Actions.GET_SOCIALINK_REQUEST
  })
};
/* harmony default export */ __webpack_exports__["a"] = (Actions);

/***/ }),

/***/ "vJJZ":
/***/ (function(module, exports) {



/***/ }),

/***/ "vgnt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getNewService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getNewByUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getNewByIdService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getNewCategoryIdService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findAllByCategory; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ZPNs");


const getNewService = () => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/news/isActive',
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getNewByUri = uri => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `/news/url/${uri}`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getNewByIdService = data => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `/news/ids`,
    method: 'POST',
    data
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getNewCategoryIdService = id => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `/news/category_is_active/${id}`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const findAllByCategory = (id, page, year) => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `/news/findallbycategoryandyear/${id}?number=9&page=${page}&year=${year}`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};



/***/ }),

/***/ "y9rC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPagesByIdService; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ZPNs");


const getPageService = name => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: `/pages/name?name=${name}`,
    method: 'POST'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getPagesByIdService = data => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/pages/ids',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlcyI6IlJPTEVfQUNDRVBUIE5FV1MsUk9MRV9BQ0NFUFQgUEFHRVMsUk9MRV9BREQgQkxPQ0ssUk9MRV9BREQgRk9STSxST0xFX0FERCBHUk9VUCxST0xFX0FERCBNRURJQSxST0xFX0FERCBST0xFLFJPTEVfQUREIFRBRyxST0xFX0FERCBVU0VSLFJPTEVfQ0jhu4hOSCBT4busQSBEQU5IIE3hu6RDLFJPTEVfQ0jhu4hOSCBT4busQSBNQUlMVEVNUExBVEUsUk9MRV9DSOG7iE5IIFPhu6xBIE1FTlUsUk9MRV9DSOG7iE5IIFPhu6xBIE1FTlVJVEVNLFJPTEVfQ0jhu4hOSCBT4busQSBQQUdFLFJPTEVfQ0jhu4hOSCBT4busQSBTTElERVIsUk9MRV9DSOG7iE5IIFPhu6xBIFRJTiBU4buoQyxST0xFX0NI4buITkggU-G7rEEgVuG7iiBUUsONIERBTkggTeG7pEMsUk9MRV9DSOG7iE5IIFPhu6xBIFbhu4ogVFLDjSBNRU5VSVRFTSxST0xFX0NI4buITkggU-G7rEEgVuG7iiBUUsONIFBBR0UsUk9MRV9DUkVBVEUgQ0FURUdPUlksUk9MRV9DUkVBVEUgRVhDSEFOR0VfUkFURSxST0xFX0NSRUFURSBJTlRFUkVTVF9SQVRFLFJPTEVfQ1JFQVRFIE1BSUxURU1QTEFURSxST0xFX0NSRUFURSBNRU5VLFJPTEVfQ1JFQVRFIE1FTlVJVEVNLFJPTEVfQ1JFQVRFIE5FVFdPUktTLFJPTEVfQ1JFQVRFIE5FV1MsUk9MRV9DUkVBVEUgUEFHRSxST0xFX0NSRUFURSBTTElERVIsUk9MRV9ERUxFVEUgQkxPQ0ssUk9MRV9ERUxFVEUgQ0FURUdPUlksUk9MRV9ERUxFVEUgRVhDSEFOR0VfUkFURSxST0xFX0RFTEVURSBGT1JNLFJPTEVfREVMRVRFIEdST1VQLFJPTEVfREVMRVRFIElOVEVSRVNUX1JBVEUsUk9MRV9ERUxFVEUgTUFJTFRFTVBMQVRFLFJPTEVfREVMRVRFIE1FRElBLFJPTEVfREVMRVRFIE1FTlUsUk9MRV9ERUxFVEUgTUVOVUlURU0sUk9MRV9ERUxFVEUgTkVUV09SS1MsUk9MRV9ERUxFVEUgTkVXUyxST0xFX0RFTEVURSBQQUdFLFJPTEVfREVMRVRFIFJPTEUsUk9MRV9ERUxFVEUgU0xJREVSLFJPTEVfREVMRVRFIFRBRyxST0xFX0RFTEVURSBVU0VSLFJPTEVfRFVZ4buGVCBUSU4gVOG7qEMsUk9MRV9EVVnhu4ZUIFRSQU5HLFJPTEVfRURJVCBCTE9DSyxST0xFX0VESVQgQ0FURUdPUlksUk9MRV9FRElUIEVYQ0hBTkdFX1JBVEUsUk9MRV9FRElUIEZPUk0sUk9MRV9FRElUIEdST1VQLFJPTEVfRURJVCBJTlRFUkVTVF9SQVRFLFJPTEVfRURJVCBNQUlMVEVNUExBVEUsUk9MRV9FRElUIE1FRElBLFJPTEVfRURJVCBNRU5VLFJPTEVfRURJVCBNRU5VSVRFTSxST0xFX0VESVQgTkVUV09SS1MsUk9MRV9FRElUIE5FV1MsUk9MRV9FRElUIFBBR0UsUk9MRV9FRElUIFJPTEUsUk9MRV9FRElUIFNMSURFUixST0xFX0VESVQgU1RPUkUsUk9MRV9FRElUIFRBRyxST0xFX0VESVQgVEjGryBQSOG6ok4gSOG7kkksUk9MRV9FRElUIFVTRVIsUk9MRV9HRVQgQkxPQ0ssUk9MRV9HRVQgQ0FURUdPUlksUk9MRV9HRVQgRVhDSEFOR0VfUkFURSxST0xFX0dFVCBGT1JNLFJPTEVfR0VUIEdST1VQLFJPTEVfR0VUIElOVEVSRVNUX1JBVEUsUk9MRV9HRVQgTUFJTFRFTVBMQVRFLFJPTEVfR0VUIE1FRElBLFJPTEVfR0VUIE1FTlUsUk9MRV9HRVQgTUVOVUlURU0sUk9MRV9HRVQgTkVUV09SS1MsUk9MRV9HRVQgTkVXUyxST0xFX0dFVCBQQUdFLFJPTEVfR0VUIFJPTEUsUk9MRV9HRVQgU0VUVElORyxST0xFX0dFVCBTTElERVIsUk9MRV9HRVQgU1RPUkUsUk9MRV9HRVQgVEFHLFJPTEVfR0VUIFRIxq8gUEjhuqJOIEjhu5JJLFJPTEVfR0VUIFVTRVIsUk9MRV9T4busQSBCTE9DSyxST0xFX1Phu6xBIEZPUk0sUk9MRV9T4busQSBMw4NJIFNV4bqkVCxST0xFX1Phu6xBIE1FRElBLFJPTEVfU-G7rEEgTeG6oE5HIEzGr-G7mkksUk9MRV9T4busQSBOSMOCTiBWScOKTixST0xFX1Phu6xBIE5Iw5NNLFJPTEVfU-G7rEEgU1RPUkUsUk9MRV9T4busQSBUQUcsUk9MRV9T4busQSBUSMavIFBI4bqiTiBI4buSSSxST0xFX1Phu6xBIFThu4ggR0nDgSxST0xFX1Phu6xBIFZBSSBUUsOSLFJPTEVfVEjDik0gQkxPQ0ssUk9MRV9USMOKTSBGT1JNLFJPTEVfVEjDik0gTUVESUEsUk9MRV9USMOKTSBOSMOCTiBWScOKTixST0xFX1RIw4pNIE5Iw5NNLFJPTEVfVEjDik0gVEFHLFJPTEVfVEjDik0gVkFJIFRSw5IsUk9MRV9U4bqgTyBEQU5IIE3hu6RDLFJPTEVfVOG6oE8gTMODSSBTVeG6pFQsUk9MRV9U4bqgTyBNQUlMVEVNUExBVEUsUk9MRV9U4bqgTyBNRU5VLFJPTEVfVOG6oE8gTUVOVUlURU0sUk9MRV9U4bqgTyBN4bqgTkcgTMav4buaSSxST0xFX1ThuqBPIFBBR0UsUk9MRV9U4bqgTyBTTElERVIsUk9MRV9U4bqgTyBUSU4gVOG7qEMsUk9MRV9U4bqgTyBU4buIIEdJw4EsUk9MRV9VUERBVEUgUE9TSVRJT04gQ0FURUdPUlksUk9MRV9VUERBVEUgUE9TSVRJT04gTUVOVUlURU0sUk9MRV9VUERBVEUgUE9TSVRJT04gUEFHRSxST0xFX1hFTSBCTE9DSyxST0xFX1hFTSBDw4BJIMSQ4bq2VCxST0xFX1hFTSBEQU5IIE3hu6RDLFJPTEVfWEVNIEZPUk0sUk9MRV9YRU0gTMODSSBTVeG6pFQsUk9MRV9YRU0gTUFJTFRFTVBMQVRFLFJPTEVfWEVNIE1FRElBLFJPTEVfWEVNIE1FTlUsUk9MRV9YRU0gTUVOVUlURU0sUk9MRV9YRU0gTeG6oE5HIEzGr-G7mkksUk9MRV9YRU0gTkjDgk4gVknDik4sUk9MRV9YRU0gTkjDk00sUk9MRV9YRU0gUEFHRSxST0xFX1hFTSBTTElERVIsUk9MRV9YRU0gU1RPUkUsUk9MRV9YRU0gVEFHLFJPTEVfWEVNIFRIxq8gUEjhuqJOIEjhu5JJLFJPTEVfWEVNIFRJTiBU4buoQyxST0xFX1hFTSBU4buIIEdJw4EsUk9MRV9YRU0gVkFJIFRSw5IsUk9MRV9Yw5NBIEJMT0NLLFJPTEVfWMOTQSBEQU5IIE3hu6RDLFJPTEVfWMOTQSBGT1JNLFJPTEVfWMOTQSBMw4NJIFNV4bqkVCxST0xFX1jDk0EgTUFJTFRFTVBMQVRFLFJPTEVfWMOTQSBNRURJQSxST0xFX1jDk0EgTUVOVSxST0xFX1jDk0EgTUVOVUlURU0sUk9MRV9Yw5NBIE3huqBORyBMxq_hu5pJLFJPTEVfWMOTQSBOSMOCTiBWScOKTixST0xFX1jDk0EgTkjDk00sUk9MRV9Yw5NBIFBBR0UsUk9MRV9Yw5NBIFNMSURFUixST0xFX1jDk0EgVEFHLFJPTEVfWMOTQSBUSU4gVOG7qEMsUk9MRV9Yw5NBIFThu4ggR0nDgSxST0xFX1jDk0EgVkFJIFRSw5IscXXhuqNuIHRy4buLIiwiaWF0IjoxNTgxMzg5MzQ3LCJleHAiOjE1ODM5ODEzNDd9.AynmpmEKDmTposaWSOzEBPLARBpisJVIK5RgS4q4MMQ'
    }
  });
};



/***/ }),

/***/ "yA/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Actions = {
  SEARCH_BRANCHES_REQUEST: 'SEARCH_BRANCHES_REQUEST',
  SEARCH_BRANCHES_RESPONSE: 'SEARCH_BRANCHES_RESPONSE',
  searchBranchesAction: params => ({
    type: Actions.SEARCH_BRANCHES_REQUEST,
    params
  }),
  GET_PROVINCE_REQUEST: 'GET_PROVINCE_REQUEST',
  GET_PROVINCE_RESPONSE: 'GET_PROVINCE_RESPONSE',
  getProvinceAction: () => ({
    type: Actions.GET_PROVINCE_REQUEST
  }),
  GET_DISTRICT_REQUEST: 'GET_DISTRICT_REQUEST',
  GET_DISTRICT_RESPONSE: 'GET_DISTRICT_RESPONSE',
  getDistrictAction: id => ({
    type: Actions.GET_DISTRICT_REQUEST,
    id
  })
};
/* harmony default export */ __webpack_exports__["a"] = (Actions);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });