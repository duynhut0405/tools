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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "325u":
/***/ (function(module, exports) {

module.exports = require("react-sticky");

/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

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

/***/ "99J/":
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "AY/1":
/***/ (function(module, exports) {

module.exports = require("react-show-more-text");

/***/ }),

/***/ "E/xK":
/***/ (function(module, exports) {

module.exports = require("google-map-react");

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

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KaAA":
/***/ (function(module, exports) {

module.exports = require("react-responsive-carousel");

/***/ }),

/***/ "MQhX":
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/common/index.js + 34 modules
var common = __webpack_require__("lCwK");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__("MQhX");

// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// CONCATENATED MODULE: ./components/formRate/RateSelect.js
var __jsx = external_react_default.a.createElement;



function RateSelect({
  data
}) {
  return __jsx("select", {
    className: "select"
  }, Object(external_lodash_["map"])(data, value => __jsx("option", {
    key: value.id,
    value: value.currency
  }, value.currency)));
}

/* harmony default export */ var formRate_RateSelect = (RateSelect);
// CONCATENATED MODULE: ./components/formRate/Table.js
var Table_jsx = external_react_default.a.createElement;





function TableRate({
  data
}) {
  const {
    t
  } = Object(external_react_i18next_["useTranslation"])();
  return Table_jsx("table", {
    className: "table table-borderless"
  }, Table_jsx("tbody", null, Table_jsx("tr", null, Table_jsx("th", null, t('codeNT')), Table_jsx("th", null, t('buycash')), Table_jsx("th", null, t('transfer')), Table_jsx("th", null, t('sold_out'))), Object(external_lodash_["map"])(data, value => {
    return Table_jsx("tr", {
      key: value.id
    }, Table_jsx("td", null, Table_jsx("img", {
      src: "static/flags/vn.png",
      alt: "",
      style: {
        top: '-1px'
      }
    }), value.currency), Table_jsx("td", null, value.buy_cash), Table_jsx("td", null, value.buy_transfer), Table_jsx("td", null, value.sell));
  })));
}

TableRate.getInitialProps = async () => ({
  namespacesRequired: ['common', 'tableRate']
});

/* harmony default export */ var Table = (Object(i18n["b" /* withTranslation */])('common')(TableRate));
// CONCATENATED MODULE: ./components/formRate/index.js
var formRate_jsx = external_react_default.a.createElement;







function FormRate({
  data
}) {
  const {
    t
  } = Object(external_react_i18next_["useTranslation"])();
  return formRate_jsx("section", {
    className: "sec-b sec-tb sec-tigia"
  }, data !== undefined && formRate_jsx("div", {
    className: "container"
  }, formRate_jsx("div", {
    className: "row list-item"
  }, formRate_jsx("div", {
    className: "col-lg-7"
  }, formRate_jsx("div", {
    className: "divtigia"
  }, formRate_jsx("h2", null, t('exchange_rate')), formRate_jsx(Table, {
    data: data.exchangeRateDetail
  }))), formRate_jsx("div", {
    className: "col-lg-5"
  }, formRate_jsx("div", {
    className: "divquidoi"
  }, formRate_jsx("h2", null, t('change_foreign_currency')), formRate_jsx("div", null, t('transfer_from')), formRate_jsx("div", {
    className: "input-group"
  }, formRate_jsx("span", {
    className: "input-group-addon none arrow"
  }, formRate_jsx(formRate_RateSelect, {
    data: data.exchangeRateDetail
  }), formRate_jsx("i", {
    className: "icon-arrow-3"
  })), formRate_jsx("input", {
    className: "input",
    placeholder: t('amount')
  })), formRate_jsx("div", null, t('to')), formRate_jsx("div", {
    className: "input-group"
  }, formRate_jsx("span", {
    className: "input-group-addon none"
  }, formRate_jsx(formRate_RateSelect, {
    data: data.exchangeRateDetail
  }), formRate_jsx("i", {
    className: "icon-arrow-3"
  })), formRate_jsx("input", {
    className: "input",
    placeholder: t('amount')
  })), formRate_jsx("p", null, `${t('updated_at')} ${external_moment_default()(data.created_at).format('HH:mm')} ${t('date')} ${external_moment_default()(data.created_at).format('DD/MM/YYYY')}`))))));
}

FormRate.getInitialProps = async () => ({
  namespacesRequired: ['common', 'formRate']
});

/* harmony default export */ var formRate = (Object(i18n["b" /* withTranslation */])('common')(FormRate));
// EXTERNAL MODULE: ./components/layout/index.js + 14 modules
var layout = __webpack_require__("okHz");

// EXTERNAL MODULE: ./store/actions.js
var actions = __webpack_require__("qzSc");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;








function Home({
  list,
  silder,
  menuMiddle,
  listRate,
  getHome,
  getRate
}) {
  Object(external_react_["useEffect"])(() => {
    getHome('homepage');
    getRate();
  }, [getHome, getRate]);
  return pages_jsx(layout["a" /* default */], {
    title: list.meta_title
  }, pages_jsx("div", {
    className: "main_content"
  }, pages_jsx(common["b" /* Carousel */], {
    silder: silder
  }), pages_jsx(common["e" /* MenuMiddle */], {
    data: menuMiddle
  }), pages_jsx(common["a" /* BlockRender */], {
    data: list.pageBlocks
  }), pages_jsx(formRate, {
    data: listRate
  }), list.template === 4 && pages_jsx(common["d" /* DowloadCategory */], null)));
}

const mapStateToProp = state => {
  return {
    list: state.pageReducer.homedata,
    silder: state.pageReducer.silder,
    menuMiddle: state.pageReducer.menuMiddle,
    listRate: state.rateReducer.data
  };
};

const mapDispatchToProps = {
  getHome: actions["f" /* PageActions */].getHomeAction,
  getRate: actions["g" /* RateActions */].getRateAction
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'common']
});

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProp, mapDispatchToProps)(Object(i18n["b" /* withTranslation */])('common')(Home)));

/***/ }),

/***/ "TPUY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qnP0");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lCwK");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("qzSc");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function DowloadFileWapper({
  listRegulation,
  typeRegulation,
  seachRegulation,
  getTypeRegulation
}) {
  const date = new Date();
  const {
    0: year,
    1: setYear
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(moment__WEBPACK_IMPORTED_MODULE_3___default()(date).format('YYYY'));
  const {
    0: datatype,
    1: setDataType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    seachRegulation(datatype, year, page);
    getTypeRegulation();
  }, [getTypeRegulation, seachRegulation]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    seachRegulation(datatype, year, page);
  }, [year, datatype, page]);
  return __jsx("div", {
    className: "accodion accodion-2 container sec-tb"
  }, __jsx(_index__WEBPACK_IMPORTED_MODULE_1__[/* Fillter */ "c"], {
    center: true,
    type: typeRegulation,
    setDate: event => setYear(event.target.value),
    setType: event => setDataType(event.target.value)
  }), __jsx(_index__WEBPACK_IMPORTED_MODULE_1__[/* DowloadFile */ "a"], {
    data: listRegulation.investors,
    year: year,
    isChecked: true
  }), __jsx(_index__WEBPACK_IMPORTED_MODULE_2__[/* Pagination */ "f"], {
    page: page,
    setPage: pageNumber => setPage(pageNumber),
    next: nextNumber => setPage(nextNumber),
    previous: previousNumber => setPage(previousNumber)
  }));
}

const mapStateToProp = state => {
  return {
    listRegulation: state.regulationReducer.listData,
    typeRegulation: state.regulationReducer.type,
    urlVideo: state.regulationReducer.urlVideo
  };
};

const mapDispatchToProps = {
  seachRegulation: _store_actions__WEBPACK_IMPORTED_MODULE_4__[/* RegulationActions */ "h"].getRegulation,
  getTypeRegulation: _store_actions__WEBPACK_IMPORTED_MODULE_4__[/* RegulationActions */ "h"].getTypeRegulationAction,
  getUrlVideo: _store_actions__WEBPACK_IMPORTED_MODULE_4__[/* RegulationActions */ "h"].getUrlVideo
};
/* unused harmony default export */ var _unused_webpack_default_export = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProp, mapDispatchToProps)(DowloadFileWapper));

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

/***/ "VLDe":
/***/ (function(module, exports) {



/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

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

/***/ "gifY":
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

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

/***/ "jSP5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qnP0");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("lCwK");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("qzSc");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function DowloadFileWapper({
  listRegulation,
  typeRegulation,
  seachRegulation,
  getTypeRegulation
}) {
  const {
    0: datatype,
    1: setDataType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: year,
    1: setYear
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    seachRegulation(datatype, page, year);
    getTypeRegulation();
  }, [getTypeRegulation, seachRegulation]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    seachRegulation(datatype, page, year);
  }, [datatype, page, year]);
  return __jsx("div", {
    className: "accodion accodion-2 container sec-tb"
  }, __jsx(_index__WEBPACK_IMPORTED_MODULE_1__[/* Fillter */ "c"], {
    center: true,
    type: typeRegulation,
    setDate: event => setYear(event.target.value),
    setType: event => setDataType(event.target.value)
  }), Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(listRegulation, item => {
    if (item.investors.length > 0) {
      return __jsx("div", {
        className: "sec-tb",
        key: item.year
      }, __jsx(_index__WEBPACK_IMPORTED_MODULE_1__[/* DowloadVideo */ "b"], {
        data: item.investors,
        year: item.year,
        isChecked: true
      }));
    }

    return null;
  }), __jsx(_index__WEBPACK_IMPORTED_MODULE_3__[/* Pagination */ "f"], {
    page: page,
    setPage: pageNumber => setPage(pageNumber),
    next: nextNumber => setPage(nextNumber),
    previous: previousNumber => setPage(previousNumber)
  }));
}

const mapStateToProp = state => {
  return {
    listRegulation: state.regulationReducer.listDataByYear,
    typeRegulation: state.regulationReducer.type,
    urlVideo: state.regulationReducer.urlVideo
  };
};

const mapDispatchToProps = {
  seachRegulation: _store_actions__WEBPACK_IMPORTED_MODULE_4__[/* RegulationActions */ "h"].getRegulationByYear,
  getTypeRegulation: _store_actions__WEBPACK_IMPORTED_MODULE_4__[/* RegulationActions */ "h"].getTypeRegulationAction,
  getUrlVideo: _store_actions__WEBPACK_IMPORTED_MODULE_4__[/* RegulationActions */ "h"].getUrlVideo
};
/* unused harmony default export */ var _unused_webpack_default_export = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProp, mapDispatchToProps)(DowloadFileWapper));

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

/***/ "lCwK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_ = __webpack_require__("KaAA");

// CONCATENATED MODULE: ./components/common/Carousel.js
var __jsx = external_react_default.a.createElement;




function Carousels({
  silder,
  className
}) {
  const getItems = (index, item) => {
    const url = item.props.children[0].props.href;
    window.location.href = url;
  };

  return __jsx(external_react_default.a.Fragment, null, !Object(external_lodash_["isEmpty"])(silder) && __jsx("div", {
    className: className,
    style: {
      boxShadow: '0px 2px 26px 0px rgba(0,0,0,0.09)'
    }
  }, __jsx(external_react_responsive_carousel_["Carousel"], {
    showThumbs: false,
    showStatus: false,
    infiniteLoop: true,
    onClickItem: getItems,
    emulateTouch: true,
    showIndicators: false
  }, Object(external_lodash_["map"])(silder, (item, index) => __jsx("div", {
    key: index,
    className: "silder_items"
  }, __jsx("a", {
    href: item.url === undefined ? '#' : item.url
  }, __jsx("img", {
    src: item.image,
    alt: "icon"
  })), __jsx("div", {
    className: `silder_content ${item.options} container`
  }, __jsx("p", {
    className: "text_content1"
  }, item.note_1), __jsx("p", {
    className: "text_content2"
  }, item.note_2), __jsx("p", {
    className: "text_content3"
  }, item.note_3), item.text_action !== undefined && __jsx("button", null, __jsx("a", {
    href: item.url
  }, item.text_action))))))));
}

/* harmony default export */ var Carousel = (Carousels);
// EXTERNAL MODULE: external "react-multi-carousel"
var external_react_multi_carousel_ = __webpack_require__("99J/");
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_);

// EXTERNAL MODULE: ./node_modules/react-multi-carousel/lib/styles.css
var styles = __webpack_require__("VLDe");

// CONCATENATED MODULE: ./components/common/MenuMiddle.js
var MenuMiddle_jsx = external_react_default.a.createElement;





function MenuMiddle({
  data,
  query
}) {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 8
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 4
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 2
    }
  };
  return MenuMiddle_jsx(external_react_default.a.Fragment, null, data !== null && MenuMiddle_jsx("div", {
    className: "sec-tb"
  }, MenuMiddle_jsx("div", {
    className: "text-center common-menumiddle",
    style: {
      marginBottom: '40px',
      position: 'relative'
    }
  }, MenuMiddle_jsx("h1", {
    className: "text-center",
    style: {
      margin: '15px 0 15px 0'
    }
  }, data.title)), MenuMiddle_jsx("div", {
    className: "menuicon container"
  }, data.menuItems !== undefined && data.menuItems.length >= 8 && MenuMiddle_jsx(external_react_multi_carousel_default.a, {
    responsive: responsive,
    draggable: true,
    minimumTouchDrag: 80,
    ssr: true // means to render carousel on server-side.
    ,
    infinite: true,
    keyBoardControl: true
  }, Object(external_lodash_["map"])(data.menuItems.sort((a, b) => a.position - b.position), (item, key) => {
    return MenuMiddle_jsx("div", {
      className: query === item.slugPages ? 'item active' : 'item',
      key: key
    }, MenuMiddle_jsx("a", {
      href: `/page/${item.slugPages}`,
      className: "link"
    }, MenuMiddle_jsx("div", {
      className: "img"
    }, MenuMiddle_jsx("img", {
      className: " loaded loaded",
      "data-lazy-type": "image",
      "data-lazy-src": item.icon,
      src: item.icon
    })), MenuMiddle_jsx("div", {
      className: "title"
    }, item.name)));
  })), data.menuItems !== undefined && data.menuItems.length < 8 && MenuMiddle_jsx("div", {
    className: "list-menu-middle"
  }, Object(external_lodash_["map"])(data.menuItems.sort((a, b) => a.position - b.position), (item, key) => {
    return MenuMiddle_jsx("div", {
      className: query === item.slugPages ? 'item active' : 'item',
      key: key
    }, MenuMiddle_jsx("a", {
      href: `/page/${item.slugPages}`,
      className: "link"
    }, MenuMiddle_jsx("div", {
      className: "img"
    }, MenuMiddle_jsx("img", {
      className: " loaded loaded",
      "data-lazy-type": "image",
      "data-lazy-src": item.icon,
      src: item.icon
    })), MenuMiddle_jsx("div", {
      className: "title"
    }, item.name)));
  })))));
}

/* harmony default export */ var common_MenuMiddle = (MenuMiddle);
// CONCATENATED MODULE: ./components/block/Icon.js
var Icon_jsx = external_react_default.a.createElement;




function Icon({
  data,
  id
}) {
  const {
    0: refCarousel,
    1: setRefCarousel
  } = Object(external_react_["useState"])(null);
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 8
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 4
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 2
    }
  };
  return Icon_jsx(external_react_default.a.Fragment, null, data[0].type === '1' && Icon_jsx(external_react_default.a.Fragment, null, data.length > 8 && Icon_jsx("section", {
    className: "sec-tb sec-h-1 group-ef block-icon",
    id: id
  }, Icon_jsx("div", {
    className: "container"
  }, Icon_jsx("div", {
    className: "entry-head text-center"
  }, Icon_jsx("h2", {
    className: "ht"
  }, data[0].title || '')), Icon_jsx("div", {
    className: "sec-b"
  }, Icon_jsx("div", {
    className: "menuicon  owl-carousel   s-nav nav-2 owl-loaded owl-drag"
  }, Icon_jsx("div", {
    className: "owl-stage-outer"
  }, Icon_jsx("div", {
    className: "owl-stage"
  }, Icon_jsx(external_react_multi_carousel_default.a, {
    responsive: responsive,
    draggable: true,
    minimumTouchDrag: 80,
    ssr: true // means to render carousel on server-side.
    ,
    infinite: true,
    keyBoardControl: true,
    arrows: false,
    ref: ref => {
      setRefCarousel(ref);
    }
  }, Object(external_lodash_["map"])(data, (items, index) => Icon_jsx("div", {
    className: "item ef-img-t item_carousel",
    key: index
  }, Icon_jsx("a", {
    href: items.url,
    className: "link"
  }, Icon_jsx("div", {
    className: "img"
  }, Icon_jsx("img", {
    src: items.image
  })), Icon_jsx("div", {
    className: "title"
  }, items.note_1))))))), Icon_jsx("div", {
    className: "owl-nav"
  }, Icon_jsx("div", {
    className: "owl-prev disabled",
    onClick: () => {
      refCarousel.previous();
    }
  }, Icon_jsx("i", {
    className: "icon-arrow-1 ix"
  })), Icon_jsx("div", {
    className: "owl-next",
    onClick: () => {
      refCarousel.next();
    }
  }, Icon_jsx("i", {
    className: "icon-arrow-1"
  }))))))), data.length <= 8 && Icon_jsx("section", {
    className: "sec-tb sec-h-1 group-ef loaded"
  }, Icon_jsx("div", {
    className: "container"
  }, Icon_jsx("div", {
    className: "entry-head text-center"
  }, Icon_jsx("h2", {
    className: "ht efch-1 ef-img-t"
  }, data[0].title || '')), Icon_jsx("div", {
    className: "menuicon"
  }, Object(external_lodash_["map"])(data, (items, index) => Icon_jsx("div", {
    className: `item  efch-${index + 3} ef-img-t`,
    key: index
  }, Icon_jsx("a", {
    href: "#",
    className: "link"
  }, Icon_jsx("div", {
    className: "img"
  }, Icon_jsx("img", {
    className: " loaded loaded",
    "data-lazy-type": "image",
    src: items.image
  })), Icon_jsx("div", {
    className: "title"
  }, items.note_1)))))))), data[0].type === '2' && Icon_jsx(external_react_default.a.Fragment, null, Icon_jsx("section", {
    className: "sec-b sec-img-svg group-ef loaded",
    id: id
  }, Icon_jsx("div", {
    className: "container"
  }, Icon_jsx("div", {
    className: "entry-head text-center"
  }, Icon_jsx("h2", {
    className: "ht"
  }, data[0].title || '')), Icon_jsx("div", {
    className: "row list-item"
  }, Object(external_lodash_["map"])(data, (items, index) => {
    return Icon_jsx("div", {
      className: `col-sm-6 col-md-${data[0].column}`,
      key: index
    }, Icon_jsx("div", {
      className: "item"
    }, Icon_jsx("a", {
      href: items.url
    }, Icon_jsx("div", {
      className: "img "
    }, Icon_jsx("img", {
      className: " loaded loaded",
      src: items.image
    })), Icon_jsx("div", {
      className: "divtext"
    }, Icon_jsx("h4", {
      className: "title"
    }, items.note_1), Icon_jsx("div", {
      className: "desc"
    }, items.note_2)))));
  }))))), data[0].type === '3' && Icon_jsx(external_react_default.a.Fragment, null, Icon_jsx("section", {
    className: "sec-b "
  }, Icon_jsx("div", {
    className: "container"
  }, Icon_jsx("div", {
    className: "entry-head text-center"
  }, Icon_jsx("h2", {
    className: "ht efch-1 ef-img-l"
  }, data[0].title || '')), Icon_jsx("div", {
    className: "owl-carousel s-nav nav-2 list-9 owl-flex owl-loaded owl-drag",
    "data-res": "4,3,2,1",
    paramowl: "margin=0"
  }, Icon_jsx("div", {
    className: "owl-stage-outer"
  }, Icon_jsx("div", {
    className: "owl-stage",
    style: "transform: translate3d(-1665px, 0px, 0px); transition: all 0.25s ease 0s; width: 2775px;"
  }, Icon_jsx(external_react_multi_carousel_default.a, {
    responsive: responsive,
    draggable: true,
    minimumTouchDrag: 80,
    ssr: true // means to render carousel on server-side.
    ,
    infinite: true,
    keyBoardControl: true,
    arrows: false,
    ref: ref => {
      setRefCarousel(ref);
    }
  }, Object(external_lodash_["map"])(data, (items, index) => Icon_jsx("div", {
    className: "owl-item",
    style: "width: 277.5px;",
    key: index
  }, Icon_jsx("div", {
    className: "item efch-2 ef-img-l "
  }, Icon_jsx("div", {
    className: "img "
  }, Icon_jsx("img", {
    className: " loaded loaded",
    "data-lazy-type": "image",
    src: items.image
  })), Icon_jsx("div", {
    className: "desc"
  }, items.note_1))))))), Icon_jsx("div", {
    className: "owl-nav"
  }, Icon_jsx("div", {
    className: "owl-prev disabled",
    onClick: () => {
      refCarousel.previous();
    }
  }, Icon_jsx("i", {
    className: "icon-arrow-1 ix"
  })), Icon_jsx("div", {
    className: "owl-next",
    onClick: () => {
      refCarousel.next();
    }
  }, Icon_jsx("i", {
    className: "icon-arrow-1"
  }))))))));
}

/* harmony default export */ var block_Icon = (Icon);
// EXTERNAL MODULE: external "react-html-parser"
var external_react_html_parser_ = __webpack_require__("gifY");
var external_react_html_parser_default = /*#__PURE__*/__webpack_require__.n(external_react_html_parser_);

// CONCATENATED MODULE: ./components/block/Images/Left.js
var Left_jsx = external_react_default.a.createElement;



function ImageLeft({
  items
}) {
  return Left_jsx("section", {
    className: "sec-tb sec-img-text group-ef loaded"
  }, Left_jsx("div", {
    className: "container"
  }, Left_jsx("div", {
    className: "row center"
  }, Left_jsx("div", {
    className: "col-lg-6"
  }, items.video_url === undefined && Left_jsx("div", {
    className: "img tRes_66 efch-2 ef-img-r "
  }, Left_jsx("img", {
    className: " loaded loaded",
    "data-lazy-type": "image",
    "data-lazy-src": items.image,
    src: items.image
  })), items.video_url !== undefined && Left_jsx("div", {
    className: "single_video  tRes_16_9 max750",
    "data-id": "2UrWPUAr68A",
    "data-video": "autoplay=1&controls=1&mute=0"
  }, external_react_html_parser_default()(items.video_url))), Left_jsx("div", {
    className: "col-lg-6"
  }, Left_jsx("div", {
    className: "divtext entry-content"
  }, Left_jsx("h2", {
    className: "ht  efch-1 ef-tx-t "
  }, items.note_1), Left_jsx("p", {
    className: "fs16"
  }, Left_jsx("strong", null, items.note_2)), Left_jsx("ul", {
    className: "efch-3 ef-tx-t"
  }, items.note_3), items.text_action !== undefined && Left_jsx("a", {
    className: "btn lg",
    href: items.url === undefined ? '#' : items.url
  }, items.text_action === undefined ? 'Đăng ký ngay' : items.text_action))))));
}

/* harmony default export */ var Left = (ImageLeft);
// CONCATENATED MODULE: ./components/block/Images/Right.js
var Right_jsx = external_react_default.a.createElement;



function ImageRight({
  items
}) {
  return Right_jsx("section", {
    className: "sec-b sec-img-text group-ef loaded"
  }, Right_jsx("div", {
    className: "container"
  }, Right_jsx("div", {
    className: "row center end"
  }, Right_jsx("div", {
    className: "col-lg-6"
  }, items.video_url === undefined && Right_jsx("div", {
    className: "img tRes_66 efch-2 ef-img-r "
  }, Right_jsx("img", {
    className: " loaded loaded",
    "data-lazy-type": "image",
    "data-lazy-src": items.image,
    src: items.image
  })), items.video_url !== undefined && Right_jsx("div", {
    className: "single_video  tRes_16_9 max750",
    "data-id": "2UrWPUAr68A",
    "data-video": "autoplay=1&controls=1&mute=0"
  }, external_react_html_parser_default()(items.video_url))), Right_jsx("div", {
    className: "col-lg-6"
  }, Right_jsx("div", {
    className: "divtext "
  }, Right_jsx("h2", {
    className: "ht "
  }, items.note_1), Right_jsx("p", {
    className: "fs16"
  }, Right_jsx("strong", null, items.note_2)), Right_jsx("ul", {
    className: "efch-3 ef-tx-t"
  }, items.note_3), items.text_action !== undefined && Right_jsx("a", {
    className: "btn lg",
    href: items.url === undefined ? '#' : items.url
  }, items.text_action === undefined ? 'Đăng ký ngay' : items.text_action))))));
}

/* harmony default export */ var Right = (ImageRight);
// CONCATENATED MODULE: ./components/block/Images/Center.js
var Center_jsx = external_react_default.a.createElement;



function ImageCenter({
  items
}) {
  return Center_jsx("section", {
    className: "sec-tb sec-cskh block-images-center"
  }, Center_jsx("div", {
    className: "container"
  }, Center_jsx("div", {
    className: "entry-head text-center"
  }, Center_jsx("h2", {
    className: "ht "
  }, items.note_1), Center_jsx("div", {
    className: "desc max555"
  }, items.note_2), Center_jsx("ul", {
    className: "efch-3 ef-tx-t"
  }, items.note_3)), items.video_url === undefined && Center_jsx("div", {
    className: "single_video  tRes_16_9 max750"
  }, Center_jsx("img", {
    className: " loaded loaded",
    "data-lazy-type": "image",
    "data-lazy-src": items.image,
    src: items.image
  })), items.video_url && Center_jsx("div", {
    className: "single_video  tRes_16_9 max750",
    "data-id": "2UrWPUAr68A",
    "data-video": "autoplay=1&controls=1&mute=0"
  }, external_react_html_parser_default()(items.video_url)), items.text_action !== undefined && Center_jsx("a", {
    className: "btn lg",
    href: items.url === undefined ? '#' : items.url
  }, items.text_action === undefined ? 'Đăng ký ngay' : items.text_action)));
}

/* harmony default export */ var Center = (ImageCenter);
// CONCATENATED MODULE: ./components/block/Images/index.js




// CONCATENATED MODULE: ./components/block/Images.js
var Images_jsx = external_react_default.a.createElement;




function Images({
  data,
  id
}) {
  return Images_jsx(external_react_default.a.Fragment, null, Images_jsx("div", {
    className: "entry-head text-center",
    id: id
  }, Images_jsx("h2", {
    className: "ht  efch-1 ef-img-t"
  }, data[0].title)), Object(external_lodash_["map"])(data, (items, index) => {
    if (items.type === '1') {
      return Images_jsx(Left, {
        items: items,
        key: index
      });
    }

    if (items.type === '2') {
      return Images_jsx(Right, {
        items: items,
        key: index
      });
    }

    return Images_jsx(Center, {
      items: items,
      key: index
    });
  }));
}

/* harmony default export */ var block_Images = (Images);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__("MQhX");

// CONCATENATED MODULE: ./components/block/Post.js
var Post_jsx = external_react_default.a.createElement;





function Post({
  data,
  type
}) {
  const {
    0: page,
    1: setPage
  } = Object(external_react_["useState"])(3);
  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])(false);
  const listNews = Object(external_lodash_["slice"])(data.news, 0, page);
  const {
    t
  } = Object(external_react_i18next_["useTranslation"])(); //   slice(data.news, 0, page)

  Object(external_react_["useEffect"])(() => {
    if (listNews.length === data.news.length) {
      setActive(true);
    }
  }, [page]);

  const showPage = () => {
    setActive(false);
    setPage(page + 3);

    if (active) {
      setPage(3);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  if (type === '1') {
    return Post_jsx("div", {
      className: "post_block mb-5 pt-4 mt-5"
    }, Post_jsx("div", {
      className: "title"
    }, Post_jsx("h2", null, data.title)), Post_jsx("div", {
      className: "row"
    }, Object(external_lodash_["map"])(listNews, item => Post_jsx("div", {
      className: "col-sm-4 col-md-6 col-lg-4",
      key: item.newsId
    }, Post_jsx("div", {
      className: "post_content mb-3"
    }, Post_jsx("div", {
      style: {
        height: '230px',
        width: '100%',
        overflow: 'hidden'
      }
    }, Post_jsx("img", {
      src: item.base_image,
      alt: "icon"
    })), Post_jsx("div", {
      className: "content"
    }, Post_jsx("div", {
      className: "date mt-4"
    }, Post_jsx("p", null, external_moment_default()(item.created_at).format('DD-MM-YYYY'))), Post_jsx("p", {
      className: "title"
    }, item.title), Post_jsx("p", {
      className: "show"
    }, Post_jsx("a", {
      href: `/news/${item.url}`
    }, "Xem th\xEAm"))))))), Post_jsx("div", {
      className: "btn"
    }, Post_jsx("button", {
      onClick: () => showPage()
    }, active === false ? 'Xem thêm' : 'Thu gọn')));
  }

  if (type === '3') {
    return Post_jsx("section", {
      className: "sec-tb sec-h-4"
    }, Post_jsx("div", {
      className: "container"
    }, Post_jsx("div", {
      className: "entry-head"
    }, Post_jsx("h2", {
      className: "ht efch-1 ef-img-l"
    }, data.title), Post_jsx("a", {
      className: "viewall",
      href: "#"
    }, t('view.viewall'), " ", Post_jsx("i", {
      className: "icon-arrow-1"
    }))), Post_jsx("div", {
      className: "row list-item"
    }, Post_jsx("div", {
      className: "col-lg-8 "
    }, Post_jsx("div", {
      className: "list-5 row "
    }, Object(external_lodash_["map"])(listNews, item => Post_jsx("div", {
      className: "col-md-6",
      key: item.newsId
    }, Post_jsx("a", {
      href: "#",
      className: "item efch-<?php echo $i+1; ?> ef-img-l equal"
    }, Post_jsx("div", {
      className: "img tRes_71"
    }, Post_jsx("img", {
      className: "lazy-hidden",
      "data-lazy-type": "image",
      src: item.base_image
    })), Post_jsx("div", {
      className: "divtext"
    }, Post_jsx("div", {
      className: "date"
    }, external_moment_default()(item.created_at).format('DD-MM-YYYY')), Post_jsx("h4", {
      className: "title line2"
    }, item.title), Post_jsx("div", {
      className: "desc line2"
    }, item.description))))))), Post_jsx("div", {
      className: "col-lg-4"
    }, Object(external_lodash_["map"])(listNewsTabs, item => Post_jsx("div", {
      className: "list-6",
      key: item.newsId
    }, Post_jsx("a", {
      href: "#",
      className: "item item-inline-table"
    }, Post_jsx("div", {
      className: "img"
    }, Post_jsx("img", {
      className: "lazy-hidden",
      "data-lazy-type": "image",
      src: item.base_image
    })), Post_jsx("div", {
      className: "divtext"
    }, Post_jsx("h4", {
      className: "title line4"
    }, item.title)))))))));
  }

  if (type === '4') {
    return Post_jsx("section", {
      className: "sec-tb sec-h-3 "
    }, Post_jsx("div", {
      className: "container"
    }, Post_jsx("div", {
      className: "entry-head"
    }, Post_jsx("h2", {
      className: "ht efch-1 ef-img-l"
    }, data.title), Post_jsx("a", {
      className: "viewall",
      href: "#"
    }, t('view.viewall'), Post_jsx("i", {
      className: "icon-arrow-1"
    }))), Post_jsx("div", {
      className: "owl-carousel equalHeight s-nav nav-2 list-5",
      "data-res": "4,3,2,1",
      paramowl: "margin=0"
    }, Object(external_lodash_["map"])(listNews, item => Post_jsx("a", {
      href: "#",
      className: "item efch-<?php echo $i+1; ?> ef-img-l equal",
      key: item.newsId
    }, Post_jsx("div", {
      className: "img tRes_71"
    }, Post_jsx("img", {
      className: "lazy-hidden",
      "data-lazy-type": "image",
      src: item.base_image
    })), Post_jsx("div", {
      className: "divtext"
    }, Post_jsx("div", {
      className: "date"
    }, external_moment_default()(item.created_at).format('DD-MM-YYYY')), Post_jsx("h4", {
      className: "title"
    }, item.title)))))));
  }
}

/* harmony default export */ var block_Post = (Post);
// CONCATENATED MODULE: ./components/block/Question/Item.js
var Item_jsx = external_react_default.a.createElement;



function QuestionItems({
  question,
  answer
}) {
  const {
    0: active,
    1: setAcive
  } = Object(external_react_["useState"])(false);
  return Item_jsx("div", {
    className: "accodion-tab "
  }, Item_jsx("input", {
    type: "checkbox",
    checked: active
  }), Item_jsx("label", {
    className: "accodion-title",
    onClick: () => setAcive(!active)
  }, Item_jsx("span", null, question), Item_jsx("span", {
    className: "triangle"
  }, Item_jsx("i", {
    className: "icon-plus"
  }))), Item_jsx("div", {
    className: "accodion-content entry-content"
  }, Item_jsx("div", {
    className: "inner"
  }, external_react_html_parser_default()(answer))));
}

/* harmony default export */ var Item = (QuestionItems);
// CONCATENATED MODULE: ./components/block/Question/index.js
var Question_jsx = external_react_default.a.createElement;




function Questions({
  data,
  id
}) {
  const {
    0: page,
    1: setPage
  } = Object(external_react_["useState"])(4);
  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])(false);
  const list = Object(external_lodash_["slice"])(data, 0, page);
  Object(external_react_["useEffect"])(() => {
    if (list.length === data.length) {
      setActive(true);
    }
  }, [page]);

  const show = () => {
    setActive(false);
    setPage(page + 4);

    if (active) {
      setPage(4);
    }
  };

  return Question_jsx("section", {
    className: "sec-b sec-cauhoi",
    id: id
  }, Question_jsx("div", {
    className: "container"
  }, Question_jsx("div", {
    className: "entry-head text-center block-question-index"
  }, Question_jsx("h2", {
    className: "ht "
  }, data[0].title || '')), Question_jsx("div", {
    className: "accodion accodion-1"
  }, Object(external_lodash_["map"])(list, (item, index) => Question_jsx(Item, {
    key: index,
    answer: item.answer,
    question: item.question
  }))), data.length > 4 && Question_jsx("div", {
    className: "text-center"
  }, Question_jsx("button", {
    className: "btn lg",
    onClick: () => show()
  }, active === false ? 'Xem thêm' : 'Thu gọn'))));
}

/* harmony default export */ var Question = (Questions);
// CONCATENATED MODULE: ./components/block/SingerPost.js
var SingerPost_jsx = external_react_default.a.createElement;



function SingerPost({
  data
}) {
  return SingerPost_jsx("div", {
    className: "block_imege_left mb-5"
  }, SingerPost_jsx("h2", {
    className: "title mb-5"
  }, data.title), SingerPost_jsx("div", {
    className: "row"
  }, SingerPost_jsx("div", {
    className: "col-sm-7"
  }, SingerPost_jsx("img", {
    src: data.news.base_image,
    alt: "icon"
  })), SingerPost_jsx("div", {
    className: "col-sm-5"
  }, SingerPost_jsx("div", {
    className: "content"
  }, SingerPost_jsx("div", {
    className: "date mt-4"
  }, SingerPost_jsx("p", null, external_moment_default()(data.news.created_at).format('DD-MM-YYYY'))), SingerPost_jsx("p", {
    className: "title"
  }, data.news.title), SingerPost_jsx("p", {
    className: "show"
  }, SingerPost_jsx("a", {
    href: `/news/${data.news.url}`
  }, "Xem th\xEAm"))))));
}

/* harmony default export */ var block_SingerPost = (SingerPost);
// CONCATENATED MODULE: ./components/block/Repeat.js
var Repeat_jsx = external_react_default.a.createElement;




function Repeat({
  data,
  type,
  id
}) {
  const {
    0: listTable,
    1: setListTable
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    setListTable(data.listTable);
  });

  if (type === '1') {
    return Repeat_jsx("section", {
      className: " sec-tb ",
      id: id
    }, Repeat_jsx("div", {
      className: "container"
    }, Repeat_jsx("div", {
      className: "table-responsive table table-full"
    }, Object(external_lodash_["map"])(listTable, (items, index) => {
      return external_react_html_parser_default()(items.description);
    }))));
  }

  if (type && type === '2') {
    return Repeat_jsx("section", {
      className: " sec-tb ",
      id: id
    }, Repeat_jsx("div", {
      className: "container"
    }, Repeat_jsx("div", {
      className: "max950"
    }, Repeat_jsx("div", {
      className: "row list-item"
    }, Object(external_lodash_["map"])(listTable, (items, index) => Repeat_jsx("div", {
      key: index,
      className: "col-md-6"
    }, Repeat_jsx("div", {
      className: "widget-default widget-content entry-content"
    }, external_react_html_parser_default()(items.description))))))));
  }

  if (type && type === '3') {
    return Repeat_jsx("section", {
      className: " sec-tb ",
      id: id
    }, Repeat_jsx("div", {
      className: "container"
    }, Repeat_jsx("div", {
      className: "max950"
    }, Repeat_jsx("div", {
      className: "row list-item"
    }, Object(external_lodash_["map"])(listTable, (items, index) => Repeat_jsx("div", {
      key: index,
      className: "col-md-4"
    }, Repeat_jsx("div", {
      className: "widget-default table "
    }, external_react_html_parser_default()(items.description))))))));
  }

  if (type && type === '4') {
    return Repeat_jsx("section", {
      className: " sec-tb ",
      id: id
    }, Repeat_jsx("div", {
      className: "container"
    }, Repeat_jsx("div", {
      className: "max950"
    }, Repeat_jsx("div", {
      className: "row list-item"
    }, Repeat_jsx("div", {
      className: "row grid-space-20 list-item "
    }, Object(external_lodash_["map"])(listTable, (items, index) => Repeat_jsx("div", {
      key: index,
      className: "col-md-6 col-sm-6 col-lg-3"
    }, Repeat_jsx("div", {
      className: "widget-default table "
    }, external_react_html_parser_default()(items.description)))))))));
  }
}

/* harmony default export */ var block_Repeat = (Repeat);
// CONCATENATED MODULE: ./components/block/Product.js
var Product_jsx = external_react_default.a.createElement;



function Product({
  data
}) {
  return Product_jsx("div", {
    className: "post_block mb-5 pt-4"
  }, Product_jsx("div", {
    className: "title"
  }, Product_jsx("h2", null, data.title)), Product_jsx("div", {
    className: "row"
  }, Object(external_lodash_["map"])(data.page, items => {
    if (data.type === '1' || data.type === undefined) {
      return Product_jsx("div", {
        className: "col-sm-4",
        key: items.id
      }, Product_jsx("div", {
        className: "post_content mb-3"
      }, Product_jsx("div", null, Product_jsx("a", {
        href: `page/${items.slug}`
      }, Product_jsx("img", {
        src: items.baseImage,
        alt: "icon"
      }))), Product_jsx("div", {
        className: "content"
      }, Product_jsx("a", {
        href: `page/${items.slug}`
      }, Product_jsx("p", {
        className: "title"
      }, items.name)), Product_jsx("p", {
        className: "text_content"
      }, items.meta_description))));
    }

    return Product_jsx("div", {
      className: "col-sm-4",
      key: items.id
    }, Product_jsx("div", {
      className: "row mb-3 mr-4 page_wapper"
    }, Product_jsx("div", {
      className: "col-sm-5 img_wapper"
    }, Product_jsx("a", {
      href: `page/${items.slug}`
    }, Product_jsx("img", {
      src: items.miniImage,
      alt: "icon"
    }))), Product_jsx("div", {
      className: "col-sm-7 content"
    }, Product_jsx("a", {
      href: `page/${items.slug}`
    }, Product_jsx("p", {
      className: "title"
    }, items.name)), Product_jsx("p", {
      className: "text_content"
    }, items.meta_description))));
  })));
}

/* harmony default export */ var block_Product = (Product);
// EXTERNAL MODULE: ./services/page.js
var services_page = __webpack_require__("y9rC");

// CONCATENATED MODULE: ./components/block/MiniTabItem.js
var MiniTabItem_jsx = external_react_default.a.createElement;




function MiniTabItem({
  data
}) {
  const {
    0: listPage,
    1: setListPage
  } = Object(external_react_["useState"])([]);

  const getPageBlock = async () => {
    const ids = Object(external_lodash_["map"])(data.pages, values => values.value);
    const res = await Object(services_page["b" /* getPagesByIdService */])(ids);

    if (res && res.status === 200) {
      setListPage(res.data);
    }
  };

  Object(external_react_["useEffect"])(() => {
    getPageBlock();
  }, []);
  return MiniTabItem_jsx("div", {
    className: "container"
  }, MiniTabItem_jsx("div", {
    className: "list-7  list-item row style-table-menu"
  }, Object(external_lodash_["map"])(listPage, item => MiniTabItem_jsx("div", {
    className: "col-md-6 style-colum1",
    key: item.newsId
  }, MiniTabItem_jsx("a", {
    href: `/page/${item.slug}`,
    className: "item item-inline-table"
  }, MiniTabItem_jsx("div", {
    className: "img"
  }, MiniTabItem_jsx("img", {
    className: "lazy-hidden",
    "data-lazy-type": "image",
    src: item.baseImage,
    alt: "icon"
  })), MiniTabItem_jsx("div", {
    className: "divtext"
  }, MiniTabItem_jsx("h4", {
    className: "title line2"
  }, item.name), MiniTabItem_jsx("div", {
    className: "desc line4"
  }, item.meta_description, "..")))))));
}

/* harmony default export */ var block_MiniTabItem = (MiniTabItem);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./components/block/MiniTab.js
var MiniTab_jsx = external_react_default.a.createElement;





function MiniTab({
  data,
  id
}) {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(external_react_["useState"])('0');
  return MiniTab_jsx("div", {
    className: "container",
    id: id
  }, MiniTab_jsx("section", {
    className: "sec-tb block-minitab"
  }, MiniTab_jsx("h2", {
    className: "ht styleht"
  }, data[0].title), MiniTab_jsx("div", {
    className: "cttab-v3   "
  }, MiniTab_jsx("div", {
    className: "tab-menu style-table-menu"
  }, Object(external_lodash_["map"])(data, (value, index) => MiniTab_jsx("div", {
    className: external_classnames_default()({
      active: activeTab === String(index)
    }),
    onClick: () => {
      setActiveTab(String(index));
    },
    key: index
  }, MiniTab_jsx("span", null, value.tabtitle)))), MiniTab_jsx("div", {
    className: "tab-content"
  }, Object(external_lodash_["map"])(data, (value, index) => MiniTab_jsx("div", {
    className: external_classnames_default()({
      active: activeTab === String(index)
    }),
    key: index
  }, MiniTab_jsx("div", {
    className: "tab-inner"
  }, MiniTab_jsx("div", {
    className: "list-7  list-item row"
  }, MiniTab_jsx(block_MiniTabItem, {
    data: value
  })))))))));
}

/* harmony default export */ var block_MiniTab = (MiniTab);
// CONCATENATED MODULE: ./components/block/Pages.js
var Pages_jsx = external_react_default.a.createElement;





function Pages({
  data,
  type,
  id
}) {
  const {
    0: page
  } = Object(external_react_["useState"])(3);
  const {
    0: listPage,
    1: setListPage
  } = Object(external_react_["useState"])([]);

  const getPageBlock = async () => {
    const ids = Object(external_lodash_["map"])(data.pages, values => values.value);
    const res = await Object(services_page["b" /* getPagesByIdService */])(ids);

    if (res && res.status === 200) {
      setListPage(res.data);
    }
  };

  Object(external_react_["useEffect"])(() => {
    getPageBlock();
  }, []);
  const {
    t
  } = Object(external_react_i18next_["useTranslation"])();
  const listNews = Object(external_lodash_["slice"])(listPage, 0, page);

  if (type && type === '1') {
    return Pages_jsx("div", {
      className: "container sec-tb block-page",
      id: id
    }, Pages_jsx("div", {
      className: "entry-head text-center"
    }), Pages_jsx("div", {
      className: "list-5 row list-item"
    }, Object(external_lodash_["map"])(listNews, item => Pages_jsx("div", {
      className: "col-md-4",
      key: item.newsId
    }, Pages_jsx("a", {
      href: `/page/${item.slug}`,
      className: "item "
    }, Pages_jsx("div", {
      className: "img tRes_71"
    }, Pages_jsx("img", {
      className: "lazy-hidden",
      "data-lazy-type": "image",
      src: item.baseImage,
      alt: "icon"
    })), Pages_jsx("div", {
      className: "divtext"
    }, Pages_jsx("h4", {
      className: "title"
    }, item.name), Pages_jsx("div", {
      className: "desc line4"
    }, item.meta_description, "..")))))));
  }

  if (type && type === '2') {
    return Pages_jsx("div", {
      className: "container",
      id: id
    }, Pages_jsx("section", {
      className: "sec-tb  block-page block-type-2"
    }, Pages_jsx("h2", {
      className: "ht styleht"
    }, data.title), Pages_jsx("div", {
      className: "list-7  list-item row"
    }, Object(external_lodash_["map"])(listNews, item => Pages_jsx("div", {
      className: "col-md-6",
      key: item.newsId
    }, Pages_jsx("a", {
      href: `/page/${item.slug}`,
      className: "item item-inline-table style-colummb"
    }, Pages_jsx("div", {
      className: "img"
    }, Pages_jsx("img", {
      className: "lazy-hidden",
      "data-lazy-type": "image",
      src: item.baseImage,
      alt: "icon"
    })), Pages_jsx("div", {
      className: "divtext"
    }, Pages_jsx("h4", {
      className: "title line2"
    }, item.name), Pages_jsx("div", {
      className: "desc line4"
    }, item.meta_description, ".."))))))));
  }

  if (type && type === '3') {
    return Pages_jsx("section", {
      className: "sec-tb",
      id: id
    }, Pages_jsx("div", {
      className: "container"
    }, Pages_jsx("h2", {
      className: "ht text-center"
    }, data.title), Pages_jsx("div", {
      className: "list-7  list-item row"
    }, Object(external_lodash_["map"])(listPage, (values, index) => Pages_jsx("div", {
      key: index,
      className: "col-md-6"
    }, Pages_jsx("a", {
      href: values.slug,
      className: "item item-inline-table"
    }, Pages_jsx("div", {
      className: "img"
    }, Pages_jsx("img", {
      className: "lazy-hidden",
      "data-lazy-type": "image",
      src: values.baseImage,
      alt: "icon"
    })), Pages_jsx("div", {
      className: "divtext"
    }, Pages_jsx("h4", {
      className: "title line2"
    }, values.name), Pages_jsx("div", {
      className: "desc line4"
    }, values.meta_description)))))), Pages_jsx("div", {
      className: "tags"
    }, Object(external_lodash_["map"])(data.listTag, (values, index) => Pages_jsx("a", {
      key: index,
      className: "tag",
      href: values.url
    }, values.name)))));
  }

  if (type && type === '4') {
    return Pages_jsx("section", {
      className: "sec-tb bg-gray",
      id: id
    }, Pages_jsx("div", {
      className: "container"
    }, Pages_jsx("div", {
      className: "max750"
    }), Pages_jsx("h2", {
      className: "ht text-center"
    }, data.title), Pages_jsx("ul", {
      className: "cols-2 link2"
    }, Object(external_lodash_["map"])(listPage, (values, index) => Pages_jsx("li", {
      key: index
    }, Pages_jsx("a", {
      href: values.slug
    }, values.name)))), Pages_jsx("div", {
      className: "tags"
    }, Object(external_lodash_["map"])(data.listTag, (values, index) => Pages_jsx("a", {
      key: index,
      className: "tag",
      href: values.url
    }, values.name)))));
  }
}

/* harmony default export */ var block_Pages = (Pages);
// EXTERNAL MODULE: ./services/news.js
var news = __webpack_require__("vgnt");

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__("ZPNs");

// CONCATENATED MODULE: ./services/category.js


const getCategoryByIdService = id => {
  return Object(request["a" /* default */])({
    url: `/categorys/${id}`,
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


// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: external "react-show-more-text"
var external_react_show_more_text_ = __webpack_require__("AY/1");
var external_react_show_more_text_default = /*#__PURE__*/__webpack_require__.n(external_react_show_more_text_);

// CONCATENATED MODULE: ./components/block/News.js
var News_jsx = external_react_default.a.createElement;










function News({
  data,
  type,
  id
}) {
  const {
    0: page,
    1: setPage
  } = Object(external_react_["useState"])(3);
  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])(false);
  const {
    0: listCategory,
    1: setListCategory
  } = Object(external_react_["useState"])([]);
  const {
    0: slugCategory,
    1: setSlugCategory
  } = Object(external_react_["useState"])('');
  const listNews = Object(external_lodash_["slice"])(listCategory, 0, 2);
  const listNewsTabs = Object(external_lodash_["slice"])(listCategory, 2, 5);
  const {
    0: refCarousel,
    1: setRefCarousel
  } = Object(external_react_["useState"])(null);
  const {
    t
  } = Object(external_react_i18next_["useTranslation"])();
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 4
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 500
      },
      items: 2
    },
    mobile: {
      breakpoint: {
        max: 500,
        min: 0
      },
      items: 1
    }
  };

  const getCategoryById = async () => {
    const res = await getCategoryByIdService(Number(data.category));

    if (res && res.status === 200) {
      setSlugCategory(res.data.slug);
    }
  };

  const getCategoryPage = async () => {
    const idItems = Object(external_lodash_["map"])(data.news, item => item.newsId);
    const res = await Object(news["b" /* getNewByIdService */])(idItems);

    if (res && res.status === 200) {
      setListCategory(res.data);
    }
  };

  Object(external_react_["useEffect"])(() => {
    getCategoryPage();
    getCategoryById();
  }, []);

  const showPage = () => {
    setActive(false);
    setPage(page + 3);

    if (active) {
      setPage(3);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  if (type === '1') {
    return News_jsx("div", {
      className: "post_block mb-5 pt-4 mt-5",
      id: id
    }, News_jsx("div", {
      className: "title"
    }, News_jsx("h2", null, data === null ? '' : data.title)), News_jsx("div", {
      className: "row"
    }, Object(external_lodash_["map"])(listNews, (item, index) => News_jsx("div", {
      className: "col-sm-4 col-md-6 col-lg-4",
      key: index
    }, News_jsx("div", {
      className: "post_content mb-3"
    }, News_jsx("div", {
      style: {
        height: '230px',
        width: '100%',
        overflow: 'hidden'
      }
    }, News_jsx("img", {
      src: item.base_image,
      alt: "icon"
    })), News_jsx("div", {
      className: "content"
    }, News_jsx("div", {
      className: "date mt-4"
    }, News_jsx("p", null, external_moment_default()(item.created_at).format('DD-MM-YYYY'))), News_jsx("p", {
      className: "title"
    }, item.title), News_jsx("p", {
      className: "show"
    }, News_jsx("a", {
      href: `/news/${item.url}`
    }, t('viewmore')))))))), News_jsx("div", {
      className: "btn"
    }, News_jsx("button", {
      onClick: () => showPage()
    }, active === false ? 'Xem thêm' : 'Thu gọn')));
  }

  if (type === '3') {
    return News_jsx("section", {
      className: "sec-tb sec-h-4",
      id: id
    }, News_jsx("div", {
      className: "container"
    }, News_jsx("div", {
      className: "entry-head"
    }, News_jsx("h2", {
      className: "ht efch-1 ef-img-l"
    }, data.title), News_jsx("p", {
      className: "cl5"
    }, data.description), News_jsx("a", {
      className: "viewall",
      href: `news/list/${slugCategory}`
    }, t('view'), News_jsx("i", {
      className: "icon-arrow-1"
    }))), News_jsx("div", {
      className: "row list-item"
    }, News_jsx("div", {
      className: "col-lg-8 "
    }, News_jsx("div", {
      className: "list-5 row "
    }, Object(external_lodash_["map"])(listNews, (item, index) => News_jsx("div", {
      className: "col-md-6",
      key: index
    }, News_jsx("a", {
      href: `/news/${item.url}`,
      className: `item efch-${index} ef-img-l equal`
    }, News_jsx("div", {
      className: "img tRes_71"
    }, News_jsx("img", {
      className: "lazy-hidden",
      "data-lazy-type": "image",
      src: item.base_image
    })), News_jsx("div", {
      className: "divtext"
    }, News_jsx("div", {
      className: "date"
    }, external_moment_default()(item.created_at).format('DD-MM-YYYY')), News_jsx("h4", {
      className: "title line2"
    }, item.title), News_jsx("div", {
      className: "desc line2"
    }, item.shortDescription))))))), News_jsx("div", {
      className: "col-lg-4"
    }, News_jsx("div", {
      className: "list-6"
    }, Object(external_lodash_["map"])(listNewsTabs, (item, index) => News_jsx("a", {
      key: index,
      href: `/news/${item.url}`,
      className: "item item-inline-table"
    }, News_jsx("div", {
      className: "img"
    }, News_jsx("img", {
      className: "lazy-hidden",
      "data-lazy-type": "image",
      src: item.base_image
    })), News_jsx("div", {
      className: "divtext"
    }, News_jsx("h4", {
      className: "title line4"
    }, item.title)))))))));
  }

  if (type === '4') {
    return News_jsx("section", {
      className: "sec-tb sec-h-3 ",
      id: id
    }, News_jsx("div", {
      className: "container"
    }, News_jsx("div", {
      className: "entry-head"
    }, News_jsx("h2", {
      className: "ht efch-1 ef-img-t"
    }, data.title), News_jsx("a", {
      className: "viewall",
      href: `news/list/${slugCategory}`
    }, t('view'), " ", News_jsx("i", {
      className: "icon-arrow-1"
    }))), News_jsx("div", {
      className: "owl-carousel equalHeight s-nav nav-2 list-5 owl-loaded owl-drag"
    }, News_jsx("div", {
      className: "owl-stage-outer"
    }, News_jsx("div", {
      className: "owl-stage"
    }, News_jsx(external_react_multi_carousel_default.a, {
      responsive: responsive,
      draggable: true,
      minimumTouchDrag: 80,
      ssr: true // means to render carousel on server-side.
      ,
      infinite: true,
      keyBoardControl: true,
      arrows: false,
      renderButtonGroupOutside: true,
      ref: ref => {
        setRefCarousel(ref);
      }
    }, Object(external_lodash_["map"])(listCategory, (item, index) => News_jsx("div", {
      className: "owl-item",
      key: index
    }, News_jsx("a", {
      href: `/news/${item.url}`,
      className: `item efch-${index} ef-img-l equal`,
      key: index,
      style: {
        height: '300px',
        width: '262px'
      }
    }, News_jsx("div", {
      className: "img tRes_71"
    }, News_jsx("img", {
      className: "lazy-hidden",
      "data-lazy-type": "image",
      src: item.base_image,
      style: {
        height: '187px'
      }
    })), News_jsx("div", {
      className: "divtext"
    }, News_jsx("div", {
      className: "date"
    }, external_moment_default()(item.created_at).format('DD-MM-YYYY')), News_jsx("h4", {
      className: "title"
    }, News_jsx(external_react_show_more_text_default.a, {
      lines: 1,
      more: "",
      expanded: false,
      width: 370
    }, item.title))))))))), News_jsx("div", {
      className: "owl-nav"
    }, News_jsx("div", {
      className: "owl-prev disabled",
      onClick: () => {
        refCarousel.previous();
      }
    }, News_jsx("i", {
      className: "icon-arrow-1 ix"
    })), News_jsx("div", {
      className: "owl-next",
      onClick: () => {
        refCarousel.next();
      }
    }, News_jsx("i", {
      className: "icon-arrow-1"
    }))))));
  }

  if (type === '5') {
    return News_jsx("section", {
      className: "sec-b",
      id: id
    }, News_jsx("div", {
      className: "container"
    }, News_jsx("h2", {
      className: ""
    }, data.title), News_jsx("p", null, data.description), News_jsx("div", {
      className: "list-5 row list-item"
    }, Object(external_lodash_["map"])(listCategory, (item, index) => {
      // if (index < 3) {
      return News_jsx("div", {
        className: data.column === undefined ? `col-md-4` : `col-md-${data.column}`,
        key: index
      }, News_jsx("a", {
        href: `/news/${item.url}`,
        className: "item efch-2 ef-img-l "
      }, News_jsx("div", {
        className: "img tRes_71"
      }, News_jsx("img", {
        className: " loaded loaded",
        "data-lazy-type": "image",
        src: item.base_image
      })), News_jsx("div", {
        className: "divtext"
      }, News_jsx("div", {
        className: "date"
      }, external_moment_default()(item.created_at).format('DD-MM-YYYY')), News_jsx("h4", {
        className: "title line2"
      }, item.title), News_jsx("div", {
        className: "desc line2"
      }, item.shortDescription)))); // }
    }))));
  }

  if (type === '6') {
    return News_jsx("section", {
      className: "sec-b sec-blog-2",
      id: id
    }, News_jsx("div", {
      className: "container"
    }, News_jsx("h2", {
      className: ""
    }, data.title), News_jsx("div", {
      className: "row list-item"
    }, News_jsx("div", {
      className: "col-lg-4"
    }, News_jsx("a", {
      href: data.url,
      className: "item-banner  tRes "
    }, News_jsx("img", {
      className: " loaded loaded",
      "data-lazy-type": "image",
      src: data.image
    }))), News_jsx("div", {
      className: "col-lg-8"
    }, News_jsx("div", {
      className: "list-1-1  mb-30 "
    }, Object(external_lodash_["map"])(listCategory, (item, index) => {
      if (index === 0) {
        return News_jsx("a", {
          href: `/news/${item.url}`,
          className: "item  tRes_39 "
        }, News_jsx("img", {
          className: " loaded loaded",
          "data-lazy-type": "image",
          src: item.base_image
        }), News_jsx("div", {
          className: "divtext"
        }, News_jsx("h4", {
          className: "title line2"
        }, item.title)));
      }

      return null;
    })), News_jsx("div", {
      className: "list-5 row list-item"
    }, Object(external_lodash_["map"])(listCategory, (item, index) => {
      if (index > 0 && index < 3) {
        return News_jsx("div", {
          className: "col-md-6"
        }, News_jsx("a", {
          href: `/news/${item.url}`,
          className: `item efch-${index} ef-img-l `
        }, News_jsx("div", {
          className: "img tRes_51"
        }, News_jsx("img", {
          className: " loaded loaded",
          "data-lazy-type": "image",
          src: item.base_image
        })), News_jsx("div", {
          className: "divtext"
        }, News_jsx("h4", {
          className: "title line2"
        }, item.title))));
      }

      return null;
    }))))));
  }

  if (type === '7') {
    return News_jsx("section", {
      className: "sec-b",
      id: id
    }, News_jsx("div", {
      className: "container"
    }, News_jsx("div", {
      className: "list-5 row list-item"
    }, Object(external_lodash_["map"])(listCategory, (item, index) => News_jsx("div", {
      className: "col-md-4",
      key: index
    }, News_jsx("a", {
      href: `/news/${item.url}`,
      className: `item efch-${index} ef-img-l`
    }, News_jsx("div", {
      className: "img tRes_71"
    }, News_jsx("img", {
      className: " loaded loaded",
      "data-lazy-type": "image",
      src: item.base_image
    })), News_jsx("div", {
      className: "divtext"
    }, News_jsx("div", {
      className: "date"
    }, external_moment_default()(item.created_at).format('DD-MM-YYYY')), News_jsx("h4", {
      className: "title line2"
    }, item.title), News_jsx("div", {
      className: "desc line2"
    }, item.shortDescription))))))));
  }

  if (type === '8') {
    return News_jsx("section", {
      className: "sec-b sec-h-4__",
      id: id
    }, News_jsx("div", {
      className: "container"
    }, News_jsx("h2", {
      className: "font"
    }, data.title), News_jsx("p", {
      className: "cl5"
    }, data.description), News_jsx("div", {
      className: "list-5 list-5-1 row list-item"
    }, Object(external_lodash_["map"])(listCategory, (item, index) => News_jsx("div", {
      className: "col-md-4",
      key: index
    }, News_jsx("a", {
      href: `/news/${item.url}`,
      className: `item efch-${index} ef-img-l equal`
    }, News_jsx("div", {
      className: "divtext"
    }, News_jsx("div", {
      className: "date"
    }, external_moment_default()(item.created_at).format('DD-MM-YYYY')), News_jsx("h4", {
      className: "title line2"
    }, item.title), News_jsx("div", {
      className: "desc line2"
    }, item.shortDescription), News_jsx("span", {
      className: "more cl1",
      style: {
        display: 'block',
        paddingTop: '30px'
      }
    }, t('look_more')))))))));
  }

  if (type === '9') {
    return News_jsx("section", {
      className: "sec-b sec-h-4"
    }, News_jsx("div", {
      className: "container"
    }, News_jsx("div", {
      className: "entry-head"
    }, News_jsx("h2", {
      className: "ht efch-1 ef-img-l"
    }, data.title)), News_jsx("div", {
      className: "row list-item"
    }, News_jsx("div", {
      className: "col-lg-6 list-1"
    }, Object(external_lodash_["map"])(listCategory, (item, index) => {
      if (index === 0) {
        return News_jsx(external_react_default.a.Fragment, null, News_jsx("a", {
          href: `/news/${item.url}`,
          className: "item  tRes_56 video"
        }, item.author_name === '' || item.author_name === null ? News_jsx("div", null, News_jsx("img", {
          className: " loaded loaded",
          "data-lazy-type": "image",
          "data-lazy-src": "https://via.placeholder.com/262x187",
          src: item.base_image
        }), News_jsx("div", {
          className: "divtext"
        }, News_jsx("div", {
          className: "date"
        }, external_moment_default()(item.created_at).format('DD-MM-YYYY')), News_jsx("h4", {
          className: "title line2"
        }, item.title))) : News_jsx("iframe", {
          src: item.author_name
        })));
      }

      return null;
    })), News_jsx("div", {
      className: "col-lg-6"
    }, News_jsx("div", {
      className: "list-6-1"
    }, Object(external_lodash_["map"])(listCategory, (item, index) => {
      if (index > 0 && index < 3) {
        return News_jsx(external_react_default.a.Fragment, null, News_jsx("a", {
          href: `/news/${item.url}`,
          className: "item item-inline-table"
        }, item.author_name === null ? News_jsx(external_react_default.a.Fragment, null, News_jsx("div", {
          className: "img tRes_56 video cl"
        }, News_jsx("img", {
          className: " loaded loaded",
          "data-lazy-type": "image",
          src: item.base_image
        })), News_jsx("div", {
          className: "divtext"
        }, News_jsx("div", {
          className: "date"
        }, external_moment_default()(item.created_at).format('DD-MM-YYYY')), News_jsx("h4", {
          className: "title line2"
        }, item.title), News_jsx("div", {
          className: "desc line3"
        }, item.shortDescription))) : News_jsx(external_react_default.a.Fragment, null, News_jsx("div", {
          className: "img tRes_56 video cl"
        }, News_jsx("iframe", {
          src: item.author_name
        })), News_jsx("div", {
          className: "divtext"
        }, News_jsx("div", {
          className: "date"
        }, external_moment_default()(item.created_at).format('DD-MM-YYYY')), News_jsx("h4", {
          className: "title line2"
        }, item.title), News_jsx("div", {
          className: "desc line3"
        }, item.shortDescription)))));
      }

      return null;
    }))))));
  }
}

News.getInitialProps = async () => ({
  namespacesRequired: ['common', 'news']
});

/* harmony default export */ var block_News = (Object(i18n["b" /* withTranslation */])('common')(News));
// CONCATENATED MODULE: ./services/form.js


const getFormbuilderByIdService = id => {
  return Object(request["a" /* default */])({
    url: `/forms/${id}`,
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


// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./components/block/Form.js
var Form_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Form({
  data
}) {
  const {
    0: formdata,
    1: setFormData
  } = Object(external_react_["useState"])([]);
  const {
    0: formState,
    1: setFormState
  } = Object(external_react_["useState"])({});

  const getFormByID = async () => {
    const res = await getFormbuilderByIdService(data.formdata);

    if (res && res.status === 200) {
      setFormData(JSON.parse(res.data.list));
    }
  };

  Object(external_react_["useEffect"])(() => {
    getFormByID();
  }, []);

  const handleChange = event => {
    event.persist();
    setFormState(formState => _objectSpread({}, formState, {
      [event.target.name]: event.target.value
    }));
  };

  console.log(formState);
  return Form_jsx("section", {
    className: "sec-tb"
  }, Form_jsx("div", {
    className: "container"
  }, Form_jsx("div", {
    className: "max750"
  }, Object(external_lodash_["map"])(formdata, (item, index) => {
    if (item.type === 'header') {
      return Form_jsx(external_react_default.a.Fragment, null, Form_jsx("div", {
        className: "max600 entry-head text-center"
      }, external_react_html_parser_default()(item.label)));
    }

    if (item.type === 'paragraph') {
      return Form_jsx("p", {
        className: item.className
      }, external_react_html_parser_default()(item.label));
    }

    if (item.type === 'radio-group') {
      return Form_jsx("div", {
        className: "mb-30 text-center"
      }, Object(external_lodash_["map"])(item.values, (items, key) => Form_jsx("label", {
        className: "radio",
        key: key,
        style: {
          marginLeft: '20px'
        }
      }, Form_jsx("input", {
        type: "radio",
        name: "check1"
      }), Form_jsx("span", null), items.label)));
    }

    if (item.type === 'text') {
      return Form_jsx(external_react_default.a.Fragment, null, Form_jsx("div", {
        className: "col-12"
      }, Form_jsx("label", {
        className: "block"
      }, Form_jsx("span", {
        className: "title"
      }, item.label), Form_jsx(external_reactstrap_["Input"], {
        className: "input",
        name: item.name,
        type: "text",
        placeholder: item.placeholder,
        style: {
          width: '100%'
        },
        onChange: e => handleChange(e)
      }))));
    }

    if (item.type === 'textarea') {
      return Form_jsx(external_react_default.a.Fragment, null, Form_jsx("div", {
        className: "col-12"
      }, Form_jsx("label", {
        className: "block"
      }, Form_jsx("span", {
        className: "title"
      }, item.label, "(", Form_jsx("span", {
        className: "require"
      }, "*"), ")"), Form_jsx("textarea", {
        className: "input"
      }))));
    }

    if (item.type === 'button') {
      return Form_jsx(external_react_default.a.Fragment, null, Form_jsx("div", {
        className: "col-12 text-center"
      }, Form_jsx("button", {
        className: "btn"
      }, item.label)));
    }
  }))));
}

/* harmony default export */ var block_Form = (Form);
// CONCATENATED MODULE: ./components/block/product/ItemImages.js
var ItemImages_jsx = external_react_default.a.createElement;



function ItemImages({
  data
}) {
  return ItemImages_jsx("div", {
    className: "row list-item list-1"
  }, Object(external_lodash_["map"])(data, (item, index) => {
    if (index < 2) {
      return ItemImages_jsx("div", {
        className: "col-md-6 efch-2 ef-img-t",
        key: index
      }, ItemImages_jsx("a", {
        href: item.url === undefined ? '#' : item.url,
        className: "item tRes_66"
      }, ItemImages_jsx("img", {
        className: " loaded loaded",
        "data-lazy-type": "image",
        "data-lazy-src": item.image,
        src: item.image
      }), ItemImages_jsx("div", {
        className: "divtext"
      }, ItemImages_jsx("div", {
        className: "desc"
      }, item.note_1), ItemImages_jsx("h4", {
        className: "title"
      }, item.note_2))));
    }

    return null;
  }));
}

/* harmony default export */ var product_ItemImages = (ItemImages);
// CONCATENATED MODULE: ./components/block/product/ItemIcon.js
var ItemIcon_jsx = external_react_default.a.createElement;



function ItemIcon({
  data
}) {
  const table = data.filter((item, index) => index >= 5);
  return ItemIcon_jsx("div", {
    className: "row list-item list-2"
  }, Object(external_lodash_["map"])(data, (item, index) => {
    if (index >= 2 && index < 5) {
      return ItemIcon_jsx("div", {
        className: "col-lg-3 col-6 efch-4 ef-img-t",
        key: index
      }, ItemIcon_jsx("a", {
        href: item.url === undefined ? '#' : item.url,
        className: "item"
      }, ItemIcon_jsx("div", {
        className: "img"
      }, ItemIcon_jsx("img", {
        className: " loaded loaded",
        "data-lazy-type": "image",
        "data-lazy-src": item.image,
        src: item.image
      })), ItemIcon_jsx("h4", {
        className: "title"
      }, item.note_1), ItemIcon_jsx("div", {
        className: "desc"
      }, item.note_2)));
    }

    return null;
  }), ItemIcon_jsx("div", {
    className: "col-lg-3 col-6 efch-7 ef-img-t"
  }, ItemIcon_jsx("div", {
    className: "item item-2"
  }, ItemIcon_jsx("h5", {
    className: "title"
  }, "Truy c\u1EADp nhanh"), Object(external_lodash_["map"])(table, (item, index) => ItemIcon_jsx("a", {
    className: "btn btn-3 radius-8",
    href: item.url === undefined ? '#' : item.url,
    key: index
  }, ItemIcon_jsx("img", {
    className: "icon-image",
    "data-lazy-type": "image",
    "data-lazy-src": item.image,
    src: item.image,
    width: "25"
  }), item.note_1)))));
}

/* harmony default export */ var product_ItemIcon = (ItemIcon);
// CONCATENATED MODULE: ./components/block/product/index.js



// CONCATENATED MODULE: ./components/block/TagProduct.js
var TagProduct_jsx = external_react_default.a.createElement;



function TagProduct({
  data,
  id
}) {
  return TagProduct_jsx("section", {
    className: "sec-tb sec-h-2 bg-gray group-ef loaded",
    id: id
  }, TagProduct_jsx("div", {
    className: "container"
  }, TagProduct_jsx("div", {
    className: "entry-head text-center"
  }, TagProduct_jsx("h2", {
    className: "ht efch-1 ef-img-t"
  }, data[0].title || '')), TagProduct_jsx(product_ItemImages, {
    data: data
  }), TagProduct_jsx(product_ItemIcon, {
    data: data
  })));
}

/* harmony default export */ var block_TagProduct = (TagProduct);
// CONCATENATED MODULE: ./components/block/MenuIntro.js
var MenuIntro_jsx = external_react_default.a.createElement;





function MenuIntro({
  data
}) {
  const {
    0: formdata,
    1: setFormData
  } = Object(external_react_["useState"])({});

  const getFormByID = async () => {
    const res = await getFormbuilderByIdService(Number(data.formdata));

    if (res && res.status === 200) {
      setFormData(res.data);
    }
  };

  Object(external_react_["useEffect"])(() => {
    getFormByID();
  }, []);
  return MenuIntro_jsx("div", null, MenuIntro_jsx("section", {
    className: " sec-menu"
  }, MenuIntro_jsx("div", {
    className: "container"
  }, MenuIntro_jsx("ul", null, MenuIntro_jsx("li", {
    className: "active"
  }, MenuIntro_jsx("a", {
    href: "#"
  }, "Gi\u1EDBi thi\u1EC7u")), Object(external_lodash_["map"])(data.listBlock, (values, index) => MenuIntro_jsx("li", {
    key: index
  }, MenuIntro_jsx("a", {
    href: `#${values.id}`
  }, values.title)))))), MenuIntro_jsx("section", {
    className: " sec-tb sec-ab-1"
  }, MenuIntro_jsx("div", {
    className: "container"
  }, MenuIntro_jsx("div", {
    className: "row list-item "
  }, MenuIntro_jsx("div", {
    className: "col-lg-8"
  }, MenuIntro_jsx("div", {
    className: "boxwidget"
  }, MenuIntro_jsx("h2", {
    className: "widget-title"
  }, "GI\u1EDAI THI\u1EC6U"), MenuIntro_jsx("p", null, "App MBBank l\xE0 \u1EE9ng d\u1EE5ng ng\xE2n h\xE0ng c\u1EE7a MB tr\xEAn \u0111i\u1EC7n tho\u1EA1i di \u0111\u1ED9ng, cho ph\xE9p kh\xE1ch h\xE0ng th\u1EF1c hi\u1EC7n h\u1EA7u h\u1EBFt giao d\u1ECBch t\xE0i ch\xEDnh, thanh to\xE1n h\xE0ng ng\xE0y v\u1EDBi thao t\xE1c \u0111\u01A1n gi\u1EA3n, th\u1EF1c hi\u1EC7n \u0111\u01B0\u1EE3c m\u1ECDi l\xFAc, m\u1ECDi n\u01A1i. L\xE0 \u1EE9ng d\u1EE5ng \u0111\u01B0\u1EE3c c\xE0i \u0111\u1EB7t tr\xEAn \u0111i\u1EC7n tho\u1EA1i th\xF4ng minh n\xEAn th\u01B0\u1EDDng xuy\xEAn \u0111\u01B0\u1EE3c n\xE2ng c\u1EA5p, mang \u0111\u1EBFn tr\u1EA3i nghi\u1EC7m v\xE0 s\u1EF1 thu\u1EADn ti\u1EC7n t\u1ED1i \u01B0u nh\u1EA5t cho kh\xE1ch h\xE0ng", ' ')), MenuIntro_jsx("div", {
    className: "boxwidget-2"
  }, MenuIntro_jsx("p", null, "N\u1EBFu b\u1EA1n mu\u1ED1n c\xF3 th\xEAm th\xF4ng tin v\u1EC1 s\u1EA3n ph\u1EA9m Vay si\xEAu nhanh, h\xE3y li\xEAn h\u1EC7 ", MenuIntro_jsx("br", null), " \u2028v\u1EDBi ch\xFAng t\xF4i qua:"), MenuIntro_jsx("div", {
    className: "fs16 cl1"
  }, "1900 545426 - (84-24) 3767 4050 (qu\u1ED1c t\u1EBF g\u1ECDi v\u1EC1)"))), MenuIntro_jsx("div", {
    className: "col-lg-4 sidebar"
  }, MenuIntro_jsx("div", {
    className: "widget widget-tuvan"
  }, MenuIntro_jsx("div", null, external_react_html_parser_default()(formdata.embedded))))))));
}

/* harmony default export */ var block_MenuIntro = (MenuIntro);
// CONCATENATED MODULE: ./components/block/Download.js
var Download_jsx = external_react_default.a.createElement;


function Download({
  data,
  id,
  type
}) {
  if (type && type === '1') {
    return Download_jsx("section", {
      className: " sec-tb b-tl-3",
      id: id
    }, Download_jsx("div", {
      className: "container"
    }, Download_jsx("h2", {
      className: "ht text-center"
    }, data.title), Download_jsx("div", {
      className: "inner"
    }, Download_jsx("div", {
      className: "desc"
    }, data.description), Download_jsx("a", {
      className: "btn lg",
      href: data.buttonUrl ? data.buttonUrl : data.image
    }, data.buttonTitle))));
  }

  if (type && type === '2') {
    return Download_jsx("section", {
      className: " sec-b ",
      id: id
    }, Download_jsx("div", {
      className: "container"
    }, Download_jsx("div", {
      className: " b-tl-1"
    }, Download_jsx("div", {
      className: "inner"
    }, Download_jsx("h2", {
      className: "ht"
    }, data.title), Download_jsx("div", {
      className: "desc"
    }, data.description)), Download_jsx("a", {
      className: "btn lg btn-2",
      href: data.buttonUrl ? data.buttonUrl : data.image
    }, data.buttonTitle))));
  }

  if (type && type === '3') {
    return Download_jsx("section", {
      className: " sec-b ",
      id: id
    }, Download_jsx("div", {
      className: "container"
    }, Download_jsx("div", {
      className: " b-tl-2"
    }, Download_jsx("h2", {
      className: "ht"
    }, data.title), Download_jsx("div", {
      className: "divtext"
    }, Download_jsx("div", {
      className: "desc"
    }, data.description), Download_jsx("a", {
      className: "btn lg btn-2",
      href: data.buttonUrl ? data.buttonUrl : data.image
    }, data.buttonTitle)))));
  }

  if (type && type === '4') {
    return Download_jsx("section", {
      className: " sec-tb sec-hstt",
      id: id
    }, Download_jsx("div", {
      className: "container"
    }, Download_jsx("div", {
      className: "inner"
    }, Download_jsx("h2", {
      className: "ht"
    }, data.title), Download_jsx("p", {
      className: "desc"
    }, data.description), Download_jsx("a", {
      className: "btn lg btn-2",
      href: data.buttonUrl ? data.buttonUrl : data.image
    }, data.buttonTitle))));
  }

  return null;
}

/* harmony default export */ var block_Download = (Download);
// CONCATENATED MODULE: ./components/block/DetailPerson.js
var DetailPerson_jsx = external_react_default.a.createElement;



function DetailPerson({
  data
}) {
  return DetailPerson_jsx("main", {
    id: "main",
    className: "sec-tb "
  }, DetailPerson_jsx("div", {
    className: "container"
  }, DetailPerson_jsx("div", {
    className: "sec-b"
  }, DetailPerson_jsx("h2", {
    className: "text-center h1"
  }, data.title), DetailPerson_jsx("div", {
    className: "list-8 row list-item"
  }, Object(external_lodash_["map"])(data.listDetail, (item, index) => DetailPerson_jsx(external_react_default.a.Fragment, null, DetailPerson_jsx("div", {
    className: "col-md-3",
    key: index
  }, DetailPerson_jsx("a", {
    href: "#",
    className: `item efch-${index + 2} ef-img-l equal`
  }, DetailPerson_jsx("div", {
    className: "img tRes"
  }, DetailPerson_jsx("img", {
    className: " loaded loaded",
    "data-lazy-type": "image",
    src: item.image
  })), DetailPerson_jsx("div", {
    className: "divtext"
  }, DetailPerson_jsx("h4", {
    className: "title line2"
  }, item.name), DetailPerson_jsx("div", {
    className: "desc line2"
  }, item.position))))))))));
}

/* harmony default export */ var block_DetailPerson = (DetailPerson);
// CONCATENATED MODULE: ./components/block/index.js

















// CONCATENATED MODULE: ./components/common/BlockRender.js
var BlockRender_jsx = external_react_default.a.createElement;




function BlockRender({
  data
}) {
  return BlockRender_jsx(external_react_default.a.Fragment, null, data !== undefined && BlockRender_jsx(external_react_default.a.Fragment, null, Object(external_lodash_["map"])(data.sort((a, b) => a.position - b.position), (values, index) => {
    if (values.name === 'Block Icon' && values.content !== null) {
      return BlockRender_jsx(block_Icon, {
        id: values.id,
        data: JSON.parse(values.content),
        key: index
      });
    }

    if (values.name === 'Block Images' && values.content !== null) {
      return BlockRender_jsx(block_Images, {
        id: values.id,
        data: JSON.parse(values.content),
        key: index
      });
    }

    if (values.name === 'Single Post' && values.content !== null) {
      return BlockRender_jsx(block_SingerPost, {
        id: values.id,
        data: JSON.parse(values.content),
        key: index
      });
    }

    if (values.name === 'Block News' && values.content !== null) {
      return BlockRender_jsx(block_News, {
        type: JSON.parse(values.content).type,
        data: JSON.parse(values.content),
        key: index,
        id: values.id
      });
    } // if (values.name === 'Block News') {
    //   return <Post data={JSON.parse(values.content)} key={index} />;
    // }


    if (values.name === 'Pages' && values.content !== null) {
      return BlockRender_jsx(block_Pages, {
        id: values.id,
        data: JSON.parse(values.content),
        key: index
      });
    }

    if (values.name === 'Form đăng kí' && values.content !== null) {
      return BlockRender_jsx(block_Form, {
        id: values.id,
        data: JSON.parse(values.content),
        key: index
      });
    }

    if (values.name === 'Category-mini-wtithtab' && values.content !== null) {
      return BlockRender_jsx(block_MiniTab, {
        id: values.id,
        data: JSON.parse(values.content),
        key: index
      });
    }

    if (values.name === 'Table' && values.content !== null) {
      return BlockRender_jsx(block_Repeat, {
        data: JSON.parse(values.content),
        type: JSON.parse(values.content).type,
        key: index,
        id: values.id
      });
    }

    if (values.name === 'Download' && values.content !== null) {
      return BlockRender_jsx(block_Download, {
        data: JSON.parse(values.content),
        type: JSON.parse(values.content).type,
        key: index,
        id: values.id
      });
    }

    if (values.name === 'Product' && values.content !== null) {
      return BlockRender_jsx(block_Product, {
        data: JSON.parse(values.content),
        id: values.id,
        key: index
      });
    }

    if (values.name === 'Question' && values.content !== null) {
      return BlockRender_jsx(Question, {
        data: JSON.parse(values.content),
        id: values.id,
        key: index
      });
    }

    if (values.name === 'Category' && values.content !== null) {
      return BlockRender_jsx(block_Pages, {
        type: JSON.parse(values.content).type,
        data: JSON.parse(values.content),
        key: index,
        id: values.id
      });
    }

    if (values.name === 'Sản phẩm nổi bật' && values.content !== null) {
      return BlockRender_jsx(block_TagProduct, {
        data: JSON.parse(values.content),
        key: index,
        id: values.id
      });
    }

    if (values.name === 'MenuIntro' && values.content !== null) {
      return BlockRender_jsx(block_MenuIntro, {
        data: JSON.parse(values.content),
        key: index,
        id: values.id
      });
    }

    if (values.name === 'Lãnh Đạo' && values.content !== null) {
      return BlockRender_jsx(block_DetailPerson, {
        data: JSON.parse(values.content),
        key: index,
        id: values.id
      });
    }

    return null;
  })));
}

/* harmony default export */ var common_BlockRender = (BlockRender);
// EXTERNAL MODULE: ./components/common/download/index.js + 7 modules
var download = __webpack_require__("qnP0");

// EXTERNAL MODULE: ./store/actions.js
var actions = __webpack_require__("qzSc");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/common/DowloadCategory.js
var DowloadCategory_jsx = external_react_default.a.createElement;






function DowloadCategory({
  listRegulation,
  typeRegulation,
  seachRegulation,
  getTypeRegulation
}) {
  const date = new Date();
  const {
    0: year,
    1: setYear
  } = Object(external_react_["useState"])(external_moment_default()(date).format('YYYY'));
  const {
    0: datatype,
    1: setDataType
  } = Object(external_react_["useState"])(1);
  Object(external_react_["useEffect"])(() => {
    seachRegulation({
      idSearch: datatype,
      year: year
    });
    getTypeRegulation();
  }, [getTypeRegulation, seachRegulation]);
  Object(external_react_["useEffect"])(() => {
    seachRegulation({
      idSearch: datatype,
      year: year
    });
  }, [year, datatype]);
  return DowloadCategory_jsx(external_react_default.a.Fragment, null, DowloadCategory_jsx("div", {
    className: "accodion accodion-2 container sec-tb"
  }, DowloadCategory_jsx(download["c" /* Fillter */], {
    type: typeRegulation,
    setDate: event => setYear(event.target.value),
    setType: event => setDataType(event.target.value)
  }), DowloadCategory_jsx(download["a" /* DowloadFile */], {
    data: listRegulation,
    year: year,
    isChecked: true
  }), DowloadCategory_jsx(download["b" /* DowloadVideo */], {
    data: listRegulation,
    year: year
  })));
}

const mapStateToProp = state => {
  return {
    listRegulation: state.regulationReducer.data,
    typeRegulation: state.regulationReducer.type,
    urlVideo: state.regulationReducer.urlVideo
  };
};

const mapDispatchToProps = {
  seachRegulation: actions["h" /* RegulationActions */].searchRegulationAction,
  getTypeRegulation: actions["h" /* RegulationActions */].getTypeRegulationAction,
  getUrlVideo: actions["h" /* RegulationActions */].getUrlVideo
};
/* harmony default export */ var common_DowloadCategory = (Object(external_react_redux_["connect"])(mapStateToProp, mapDispatchToProps)(DowloadCategory));
// CONCATENATED MODULE: ./components/common/Social.js
var Social_jsx = external_react_default.a.createElement;


function Social({
  data
}) {
  return Social_jsx("ul", {
    className: "blog-item-social "
  }, Social_jsx("li", null, Social_jsx("a", {
    className: "item",
    title: "Facebook",
    href: data.facebook
  }, Social_jsx("i", {
    className: "icon-facebook"
  }))), Social_jsx("li", null, Social_jsx("a", {
    className: "item",
    title: "Instagram",
    href: data.instagram
  }, Social_jsx("i", {
    className: "icon-instagram"
  }))), Social_jsx("li", null, Social_jsx("a", {
    className: "item",
    title: "Twitter",
    href: data.twitter
  }, Social_jsx("i", {
    className: "icon-twitter"
  }))), Social_jsx("li", null, Social_jsx("a", {
    className: "item",
    title: "Youtube",
    href: data.youtube
  }, Social_jsx("i", {
    className: "icon-youtube-2"
  }))));
}

/* harmony default export */ var common_Social = (Social);
// CONCATENATED MODULE: ./components/common/Pagination.js
var Pagination_jsx = external_react_default.a.createElement;


function Pagination({
  page,
  setPage,
  next,
  previous
}) {
  return Pagination_jsx("div", {
    className: "pages mt-5"
  }, Pagination_jsx("ul", {
    className: "page-numbers"
  }, Pagination_jsx("li", null, Pagination_jsx("a", {
    className: "prev page-numbers",
    onClick: () => next(page - 1)
  }, Pagination_jsx("i", {
    className: "icon-arrow-2 ix"
  }))), Pagination_jsx("li", null, Pagination_jsx("span", {
    className: page === 1 || page === 0 ? 'page-numbers current' : 'page-numbers',
    onClick: () => setPage(1)
  }, "1")), Pagination_jsx("li", null, Pagination_jsx("a", {
    className: page === 2 ? 'page-numbers current' : 'page-numbers',
    onClick: () => setPage(2)
  }, "2")), Pagination_jsx("li", null, Pagination_jsx("span", {
    className: "page-numbers"
  }, "...")), Pagination_jsx("li", null, Pagination_jsx("a", {
    className: page === 8 ? 'page-numbers current' : 'page-numbers',
    onClick: () => setPage(8)
  }, "8")), Pagination_jsx("li", null, Pagination_jsx("a", {
    className: page === 9 ? 'page-numbers current' : 'page-numbers',
    onClick: () => setPage(9)
  }, "9")), Pagination_jsx("li", null, Pagination_jsx("a", {
    className: "next page-numbers",
    onClick: () => previous(page + 1)
  }, Pagination_jsx("i", {
    className: "icon-arrow-2"
  })))));
}

/* harmony default export */ var common_Pagination = (Pagination);
// EXTERNAL MODULE: ./components/common/download/DowloadFileWapper.js
var DowloadFileWapper = __webpack_require__("TPUY");

// EXTERNAL MODULE: ./components/common/download/DowloadVideoWapper.js
var DowloadVideoWapper = __webpack_require__("jSP5");

// EXTERNAL MODULE: external "google-map-react"
var external_google_map_react_ = __webpack_require__("E/xK");
var external_google_map_react_default = /*#__PURE__*/__webpack_require__.n(external_google_map_react_);

// CONCATENATED MODULE: ./components/common/Contact.js
var Contact_jsx = external_react_default.a.createElement;






function Contact({
  settingFooter,
  getSettingFooter
}) {
  Object(external_react_["useEffect"])(() => {
    getSettingFooter();
  }, []);

  const AnyReactComponent = ({
    text
  }) => Contact_jsx("div", null, text);

  return Contact_jsx(external_react_default.a.Fragment, null, Contact_jsx("main", {
    id: "main",
    className: "section page-lien-he"
  }, Contact_jsx("div", {
    className: "container "
  }, Contact_jsx("div", {
    className: "row"
  }, Contact_jsx("div", {
    className: "col-lg-4 col-md-6"
  }, Contact_jsx("div", {
    className: "widget widget-contact"
  }, Contact_jsx("h1", {
    className: "widget-title  h2"
  }, "Li\xEAn h\u1EC7"), settingFooter.information && Contact_jsx(external_react_default.a.Fragment, null, Contact_jsx("h3", null, "H\u1ED9i s\u1EDF ch\xEDnh MBBank:"), Contact_jsx("p", null, settingFooter.information.place), Contact_jsx("h3", null, "Th\u1EDDi gian ph\u1EE5c v\u1EE5 kh\xE1ch h\xE0ng"), Contact_jsx("p", null, settingFooter.information.time), Contact_jsx("h3", null, "Hotline"), Contact_jsx("div", {
    className: "phone"
  }, Contact_jsx("a", {
    href: `tel:${settingFooter.information.hotLine}`
  }, settingFooter.information.hotLine)), Contact_jsx("p", null, settingFooter.information.international), Contact_jsx("h3", null, "Email"), Contact_jsx("a", {
    href: `mailto:${settingFooter.information.email}`
  }, settingFooter.information.email)))), Contact_jsx("div", {
    className: "col-lg-8 col-md-6"
  }, !isNaN(Number(settingFooter.latitude)) && Contact_jsx(external_google_map_react_default.a, {
    bootstrapURLKeys: {
      key: 'AIzaSyBFtaHtOcwUGvv2pDBtMoPrI5NvnUwe2GU'
    },
    center: {
      lat: Number(settingFooter.latitude),
      lng: Number(settingFooter.longitude)
    },
    zoom: 18
  }, Contact_jsx(AnyReactComponent, {
    lat: Number(settingFooter.latitude),
    lng: Number(settingFooter.longitude),
    text: "H\u1ED9i s\u1EDF ch\xEDnh MBBank"
  })))))));
}

const mapStateToProps = state => {
  return {
    settingFooter: state.layoutReducer.settingFooter
  };
};

const Contact_mapDispatchToProps = {
  getSettingFooter: actions["b" /* LayoutActions */].getSettingFooterAction
};
/* harmony default export */ var common_Contact = (Object(external_react_redux_["connect"])(mapStateToProps, Contact_mapDispatchToProps)(Contact));
// CONCATENATED MODULE: ./components/common/index.js
/* concated harmony reexport Carousel */__webpack_require__.d(__webpack_exports__, "b", function() { return Carousel; });
/* concated harmony reexport MenuMiddle */__webpack_require__.d(__webpack_exports__, "e", function() { return common_MenuMiddle; });
/* concated harmony reexport BlockRender */__webpack_require__.d(__webpack_exports__, "a", function() { return common_BlockRender; });
/* concated harmony reexport DowloadCategory */__webpack_require__.d(__webpack_exports__, "d", function() { return common_DowloadCategory; });
/* concated harmony reexport Social */__webpack_require__.d(__webpack_exports__, "g", function() { return common_Social; });
/* unused concated harmony import DowloadFileWapper */
/* unused concated harmony import DowloadVideoWapper */
/* concated harmony reexport Pagination */__webpack_require__.d(__webpack_exports__, "f", function() { return common_Pagination; });
/* concated harmony reexport Contact */__webpack_require__.d(__webpack_exports__, "c", function() { return common_Contact; });











/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "okHz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./public/images/logo.svg
/* harmony default export */ var logo = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjE0NnB4IiBoZWlnaHQ9IjY2cHgiIHZpZXdCb3g9IjAgMCAxNDYgNjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MS4yICg4OTY1MykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+DQogICAgPHRpdGxlPkxPR08gLSBXaGl0ZTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+DQogICAgICAgIDxmaWx0ZXIgeD0iLTAuOCUiIHk9Ii0xMC4wJSIgd2lkdGg9IjEwMS43JSIgaGVpZ2h0PSIxMjAuMCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci0xIj4NCiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjIiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+DQogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+DQogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4yNTYwMzY5MzIgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiPjwvZmVDb2xvck1hdHJpeD4NCiAgICAgICAgICAgIDxmZU1lcmdlPg0KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4T3V0ZXIxIj48L2ZlTWVyZ2VOb2RlPg0KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyI+PC9mZU1lcmdlTm9kZT4NCiAgICAgICAgICAgIDwvZmVNZXJnZT4NCiAgICAgICAgPC9maWx0ZXI+DQogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTIiIHBvaW50cz0iMC4xNzE0NDE0NjYgMC4wNjMzMzMzMzMzIDExLjYzOTI1MzQgMC4wNjMzMzMzMzMzIDExLjYzOTI1MzQgMTMuNjcwMDYxMiAwLjE3MTQ0MTQ2NiAxMy42NzAwNjEyIj48L3BvbHlnb24+DQogICAgPC9kZWZzPg0KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IiNIZWFkZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDcuMDAwMDAwLCAtNDkuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0iY2EtbmhhbiIgZmlsdGVyPSJ1cmwoI2ZpbHRlci0xKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9IkxPR08tLS1XaGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUxLjAwMDAwMCwgNTEuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02NCw0NiBDNjQuMTc0OTkyOCw0MC4wMTEwNTE5IDY0LjU0MDcwMDUsMzQuMjU4NTU1MyA2NC45NTQ5NDE0LDI4LjUxMDkxMjUgQzY1LjI3NzU4NDQsMjQuMDM0OTc2NSA2NS43MjM5NTI4LDE5LjU2ODA1NDcgNjYuMTM1NDU5NCwxNS4wOTkwNTI3IEM2Ni4yNjI2MDI2LDEzLjcyMDU2MTUgNjYuNDY0MjU0NSwxMi4zNDkwMDQzIDY2LjYxNTMyMjYsMTAuOTcyNTkzMyBDNjYuNjg0MzYyNywxMC4zMzk1MTM1IDY2LjkwMTA1MzEsOS45OTgzNTc3NiA2Ny42MzMxNTIsMTAuMDEzNjEyNyBDNjkuODE4NTExNywxMC4wNTkzNzc1IDcyLjAwNzI4OTMsMTAuMDc2NzEyNiA3NC4xOTEyODE4LDEwLjAwNzM3MiBDNzUuMDkyMjIxNSw5Ljk3ODk0MjQgNzUuMjc4MTUxNCwxMC41Nzg3Mzg2IDc1LjU1NzA0NjIsMTEuMTY5NTIwNiBDNzguMDc1OTg2LDE2LjUxNjM3NDcgODAuNTY3NTgzMiwyMS44NzU3MSA4Mi44MDYyNjExLDI3LjM1MTUzNzYgQzgyLjk4NjcyMjQsMjcuNzkzOTMwNyA4My4wODAzNzA5LDI4LjI4NDg2MjIgODMuNDQ1Mzk1LDI4LjYzNDMzODggQzgzLjk1MzI4NDQsMjguNTE0Mzc5NiA4My45MzY4Nzg4LDI4LjA0MDA4OTggODQuMDY0NzA1NiwyNy43MjA0Mjk2IEM4Ni4zMDc0ODQ5LDIyLjEyNDY0MjggODguODk1NDY0OCwxNi42ODgzMzk0IDkxLjQxMDMwMzIsMTEuMjE3MzY1NiBDOTEuODEwMTg5MiwxMC4zNDcxNDEgOTIuMjYzMzkzMyw5Ljk1NjA2IDkzLjI1NDU2MzYsMTAuMDAzOTA1IEM5NS4xMDkwNzc1LDEwLjA5MjY2MSA5Ni45NzA0MjcxLDEwLjAxNzA3OTcgOTguODI5MDQyNCwxMC4wMzMwMjgxIEMxMDAuMzYyMjgsMTAuMDQ2MjAyOCAxMDAuMjExODk2LDkuNzYyNTk5NzEgMTAwLjQ3NjQzNiwxMS41NjYxNDg4IEMxMDAuNzgyNjczLDEzLjY0NzA2MDQgMTAwLjk5NDU3OSwxNS43NDQ2MTM3IDEwMS4xODM5MjYsMTcuODQxNDczNiBDMTAxLjk3NDEyOCwyNi42MTg2MDc0IDEwMi42MTEyMTIsMzUuNDA2ODM1NyAxMDIuOTQ2MTU5LDQ0LjIxNTg2NjIgQzEwMi45NjExOTcsNDQuNjA0MTczNiAxMDIuOTg3ODU2LDQ0Ljk5MTA5NDIgMTAyLjk5OTQ3Nyw0NS4zNzk0MDE2IEMxMDMuMDExNzgxLDQ1Ljc4Mjk2MzkgMTAyLjgwNjcxMSw0NS45ODgyMTIxIDEwMi40MTE2MSw0NS45ODgyMTIxIEMxMDAuMDYxNTExLDQ1Ljk5MDI5MjMgOTcuNzExNDEyMyw0NS45OTMwNjU5IDk1LjM2MTMxMzMsNDUuOTg2MTMxOSBDOTQuOTYxNDI3Myw0NS45ODQ3NDUxIDk0Ljc5MjU4NjYsNDUuNzI4MTg0OCA5NC43ODA5NjYsNDUuMzQxOTU3NyBDOTQuNzY1OTI3NSw0NC44NDMzOTg3IDk0LjczODU4NDksNDQuMzQ0ODM5OCA5NC43MjY5NjQzLDQzLjg0NjI4MDggQzk0LjU4OTU2NzUsMzcuODYwNzk5OCA5NC4zMTQ3NzQxLDMxLjg4MDE3MjYgOTMuOTg2NjYyNSwyNS45MDMwMTI0IEM5My45NjM0MjEzLDI1LjQ4MjExNDkgOTQuMDU4NDM3LDI1LjAyNDQ2NjkgOTMuNzQxMjYyNCwyNC41ODQxNTQxIEM5My4yNTc5ODE1LDI0Ljc2Mzc0NjIgOTMuMjEwODE1NCwyNS4yNDQ5NyA5My4wNjA0MzEsMjUuNjA1NTQxMiBDOTEuMDU3NTgzMywzMC4zOTY5NzcgODkuMDcxMTQxMiwzNS4xOTYwNDAzIDg3LjA4MTk2NDksMzkuOTkzNzE2OCBDODYuNTE2NjU2LDQxLjM1OTAzMzMgODYuNTE5MzkwMiw0MS4zNjMxOTM3IDg1LjA4NTI2OTMsNDEuMzY5NDM0NCBDODQuMDQ2OTMyOSw0MS4zNzM1OTQ4IDgzLjAwNzkxMyw0MS4zNzI5MDE0IDgxLjk2OTU3NjYsNDEuMzY5NDM0NCBDODAuNDk2NDkyNCw0MS4zNjQ1ODA1IDgwLjQ5NzE3NTksNDEuMzYyNTAwMyA3OS45NDc1ODkxLDQwLjAzNDYyNzcgQzc4LjA2NjQxNjEsMzUuNDkwNzM3OSA3Ni4xODcyOTM4LDMwLjk0NjE1NDYgNzQuMzAyMDE5NSwyNi40MDQzNDUgQzc0LjA1MTgzNDQsMjUuODAwMzg4MyA3My43NzA4ODg5LDI1LjIwOTYwNjMgNzMuNDU1MDgxNSwyNC41MDM3MTkgQzcyLjg0ODc1ODcsMjQuOTYzNDQ3MiA3My4wNjMzOTgzLDI1LjU1MTQ1NTUgNzMuMDM1MzcyMiwyNi4wMjE1ODQ4IEM3Mi42OTE1Mzg2LDMxLjgzMjMyNzUgNzIuNDM1ODg1LDM3LjY0NjUzNzMgNzIuMzA2MDA3NSw0My40NjYyOTQzIEM3Mi4yNDkyNzE1LDQ2IDcyLjIzNDkxNjcsNDYgNjkuNzA1NzIzNCw0NiBDNjcuODU1MzEwOSw0NiA2Ni4wMDU1ODE5LDQ2IDY0LDQ2IiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOCwyNi42NTY4NjU4IEMxNy45ODczMjI3LDI3LjMzNDQyMzggMTcuNjU1NzEwOSwyOC4xMzAzMjk2IDE3LjA3MTg4NzIsMjguODE1NTAwNiBDMTQuNzQxOTMwNSwzMS41NDk5NTU5IDEyLjQyNTMxODMsMzQuMjk1NDg0NyAxMC4wNjkzMzk4LDM3LjAwNTAyNDcgQzkuMDkxODUyMjEsMzguMTI4OTgyMSA3Ljk0Mjg4NzMsMzguMjg0MDEwNyA2LjkzNzM3NjE5LDM3LjU1NDU0NTggQzUuOTYzODkxOTksMzYuODQ3OTE5OSA1LjY5NDMzMjI4LDM1LjU1OTI0NDYgNi4zODY5MTM5MSwzNC4zMTc2MzE3IEM4LjIwMTEwNDE1LDMxLjA2Njg3NTcgMTAuMDM0NjQ0LDI3LjgyNjUwMTIgMTEuOTI0MjMwOSwyNC42MjIxMTU0IEMxMi43NDk1OTA3LDIzLjIyMjcwNTUgMTQuMjc4ODc1LDIyLjcwNTAyMDcgMTUuNjc4MDUsMjMuMTYxODAxNCBDMTcuMDE5MTc2MywyMy41OTkyMDM1IDE3Ljk4NTMyMSwyNC45NTE1NTEyIDE4LDI2LjY1Njg2NTgiIGlkPSJGaWxsLTMiIGZpbGw9IiNFMzA2MTMiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMzLjQzOTY4MjEsNDEgQzMxLjc1NDYxNyw0MC45Nzk2ODk0IDMwLjMyOTU1NzcsMzkuNzMzMjE5OSAzMC4wNjE3Mzc1LDM4LjA0NDQzMDYgQzI5LjczOTIxNjYsMzYuMDExODY1NCAzMC42OTU0MTI5LDM0LjI4Njk2ODMgMzIuNTc3MjU4NCwzMy43NDgzNjExIEMzNC4zODA5NjAxLDMzLjIzMjMyMTIgMzYuMjE3MzQwMSwzMi44NDY0MTk3IDM4LjA0MjM1MzcsMzIuNDE3NjQwMiBDMzkuOTc4MTg5NSwzMS45NjI1MzIyIDQxLjkxMjYwNDUsMzEuNDk2MTQwNSA0My44NTY5NjUxLDMxLjA4NzY3MTYgQzQ1LjM5ODUyOTcsMzAuNzYzNDU0MSA0Ni40MzIxNTk0LDMxLjM0Nzk0ODMgNDYuODU0ODQ2NSwzMi42ODM5MzQ4IEM0Ny4yNzc1MzM2LDM0LjAyMTQyNTkgNDYuNzc1MjgxOSwzNS4yMTg5OTk1IDQ1LjM3MTUzNDYsMzUuODgwMjIyNiBDNDEuOTAyNjU4OSwzNy41MTQwOTgxIDM4LjQwNzQ5ODUsMzkuMDg2Mjg5NSAzNC45MjkzODc3LDQwLjY5ODM0OTkgQzM0LjQ0NTYwNjQsNDAuOTIyNTE4OCAzMy45NTE4Nzk0LDQwLjk4NzIxMTggMzMuNDM5NjgyMSw0MSIgaWQ9IkZpbGwtNSIgZmlsbD0iI0UzMDYxMyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzUuOTk3Nzg1MywyMy4yODUwOTE5IEMzNi4wNTk5MDE3LDI1LjQ2NDEyMzYgMzQuODA5NjU1NywyNy4wMTg0MTI0IDMyLjk2OTkxMjQsMjcgQzMxLjE5NzE1NzMsMjYuOTgyNjM0MiAyOS44NTc5OTk1LDI1LjM5NjAwNzQgMzAuMDEyMDcyNywyMy4zMjkxMjY2IEMzMC4yODQ4OTgsMTkuNjY1Mjk4NSAzMC42NDcyNDQsMTYuMDA5NzI2OCAzMC45NTUzOTAzLDEyLjM0OTMzODggQzMxLjA0NjczODEsMTEuMjY2MzU5NCAzMS40MzEwMDc1LDEwLjQ0MzQ2MDIgMzIuMzkyNTk0NywxMC4xMTQ1NzU3IEMzMy42NjU5ODIxLDkuNjc4MzU2NTEgMzQuODE5Mzk5NSwxMC41MTk4MzI5IDM1LjA1MjY0MDcsMTIuMDkyNjk4OSBDMzUuMTg5MDUzMywxMy4wMTA1NDggMzUuMjA4NTQwOCwxMy45NDk3MjY1IDM1LjI4NjQ5MDksMTQuODc4NTg0NCBDMzUuNTIwMzQxMSwxNy42NjU4NDU5IDM1Ljc1Nzg0NTIsMjAuNDUxNzMxNCAzNS45OTc3ODUzLDIzLjI4NTA5MTkiIGlkPSJGaWxsLTciIGZpbGw9IiNFMzA2MTMiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEyLjg4ODc3NjMsMTQuMDA3MDU3MSBDMTMuNzA0NzA4NSwxNC4yMDE2NDgxIDE0Ljc1MzA1MzQsMTQuNDU4MzU4NSAxNS44MDM1MzA1LDE0LjcwMTU5NzIgQzE4LjUxNTcyMzEsMTUuMzMwMjc1NyAyMS4yMjg2MjY0LDE1Ljk1MTQ3IDIzLjk0MTUyOTcsMTYuNTc4NjUxNyBDMjUuMzcxNTQzMiwxNi45MDk0NTY0IDI2LjQ1ODk3ODksMTcuNjg2MzIzNCAyNi44NDk4ODcxLDE5LjI0NjA0NDkgQzI3LjE5MDMzMjcsMjAuNjA2Njg0OSAyNi45NzIxMzQ4LDIxLjg4MzUwMTEgMjUuOTg0OTEzOCwyMi44ODcxNDE1IEMyNC45Njk5NzM4LDIzLjkxOTIyMjEgMjMuNzUzODkzNywyNC4yOTA0NDE4IDIyLjM4NDI5MzMsMjMuNzU4MzEwMyBDMjEuNjQwODU2OSwyMy40NzAxNjYgMjAuOTE1ODk5OCwyMy4xMjczODY1IDIwLjE4ODA5OTcsMjIuNzk2NTgxOCBDMTcuNTg2NzgyOSwyMS42MTE4MjIyIDE0Ljk4NzU5ODMsMjAuNDIyNTcxOSAxMi4zODg0MTM4LDE5LjIzMzMyMTcgQzEyLjAyNDUxMzcsMTkuMDY3MTcwOSAxMS42NDkyNDE4LDE4LjkxOTczMDggMTEuMzA3Mzc0OCwxOC43MTE2NjgyIEMxMC4xOTIyMjAxLDE4LjAzMzU5MzUgOS43NjIyMjEwMiwxNi44OTY3MzMxIDEwLjEyNjgzMTgsMTUuNjY0ODIyNSBDMTAuNDU0NDg0LDE0LjU1NTY1NCAxMS40MDU0NTcyLDEzLjkyNTQ3ODYgMTIuODg4Nzc2MywxNC4wMDcwNTcxIiBpZD0iRmlsbC05IiBmaWxsPSIjRTMwNjEzIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS4wMDM3NDQ3LDM5LjM1Mjk5MDMgQzE4Ljk4MzY0NTQsMzcuODg1MDQ0IDE5Ljc3ODIzNzIsMzYuNzE0ODM4NCAyMS4wNjMyNTE3LDM2LjIzMjIyNTkgQzIyLjM4NTExNDksMzUuNzM1OTkxMiAyMy43NjM5MjYsMzYuMDQ0MTEwOCAyNC43MjA2NTIxLDM3LjA2OTY2MjMgQzI0LjkzMzcwNDYsMzcuMjk3OTk1MSAyNS4xMTY2MDgxLDM3LjU1ODc2MTYgMjUuMjc5NDEyNCwzNy44MjQ3MTc0IEMyNy4wMjA2ODA3LDQwLjY3MzAzOTQgMjguNzU1OTE5Miw0My41MjQ2MDQ3IDMwLjQ5MDQ4NzgsNDYuMzc2ODE4NyBDMzAuNjI1MTUzLDQ2LjU5OTMxMzQgMzAuNzY5ODY3OSw0Ni44MjM3NTQyIDMwLjg1NzYzNDcsNDcuMDY0NDExNyBDMzEuMjAyNjcyNSw0OC4wMTA4MjUzIDMwLjkwNTIwMzEsNDkuMDA3ODM1MiAzMC4xMzEzODA1LDQ5LjU3NDc3NTIgQzI5LjMzMDA4ODksNTAuMTYxODI0IDI4LjExODc3MTgsNTAuMTQzMDEyNSAyNy4zMDQwODA2LDQ5LjUwNjAxNTkgQzI3LjA1Njg1OTQsNDkuMzEzMzYwMSAyNi44NTM4NTY2LDQ5LjA2NjIxNTggMjYuNjQxNDc0MSw0OC44MzM5OTA5IEMyNC40ODAxMzA3LDQ2LjQ3MDIyNzUgMjIuMzI0MTQ3LDQ0LjEwMTkyMzQgMjAuMTU4NzgzNyw0MS43NDA3NTQ3IEMxOS41MDYyMjY5LDQxLjAyOTE2MDcgMTguOTQ4ODA2Niw0MC4yODQ0ODQ0IDE5LjAwMzc0NDcsMzkuMzUyOTkwMyIgaWQ9IkZpbGwtMTEiIGZpbGw9IiNFMzA2MTMiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjk5NzU5MzIsMjIuMDMyNjE5NCBDMTIuMDAzMTY3NywyMy4yNTY5OTMzIDExLjU4ODU2NTgsMjQuMDU2MTA0NyAxMC43NjkxMTc0LDI0LjU4MTI1NiBDOS44ODk3NDMzMywyNS4xNDUzMzQ3IDguOTY5MjU3NDYsMjUuMTI3NzA3MiA4LjA3NDU1MzU2LDI0LjU5OTYxOCBDNy44MzYyNDQ1NywyNC40NTkzMzI4IDcuNjExMTc0OTgsMjQuMjYzOTYxOCA3LjQzMjA5NDg0LDI0LjA0NjU1NjUgQzUuMjA3ODc3NjYsMjEuMzQyOTQ1MSAyLjk0NjcyOTU2LDE4LjY3MDkxNjMgMC43OTM1ODY5OTMsMTUuOTA1NjA4OSBDLTAuNDk4Mjk4NTQ3LDE0LjI0NDk1NTQgLTAuMTU1NDY4MDgsMTIuMDAwMzkyNSAxLjQwNTM4NjA4LDEwLjc1OTEyNTcgQzIuOTU2NDg0OSw5LjUyNDQ2OTE0IDUuMTMzMzE5LDkuNzkwMzQ5OTcgNi4yNTE2OTg4OCwxMS41OTcxNjQ0IEM4LjE2NDQ0MjAzLDE0LjY4ODU3OTggOS45MTQ4Mjg0OCwxNy44OTE2MzU4IDExLjczMDcxNTEsMjEuMDQ5MTU0MiBDMTEuOTM5MDYxMiwyMS40MTEyNTE1IDEyLjAxNTAxMzUsMjEuODEwODA3MiAxMS45OTc1OTMyLDIyLjAzMjYxOTQiIGlkPSJGaWxsLTEzIiBmaWxsPSIjRTMwNjEzIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUuMDAwMDAwLCAwLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMyIgZmlsbD0id2hpdGUiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+DQogICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+DQogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ2xpcC0xNiI+PC9nPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTguMjMxMDY2NjcsMC4wNjM2IEMxMC43OTA0LDAuMDE2OTMzMzMzMyAxMi41NTk3MzMzLDIuNzI4MjY2NjcgMTEuMTI3NzMzMyw0Ljg0NzYgQzkuMTA1NzMzMzMsNy44NDA5MzMzMyA2LjU5MTA2NjY3LDEwLjQ3MjI2NjcgNC4xMDY0LDEzLjA5NjI2NjcgQzMuMzk5NzMzMzMsMTMuODQyOTMzMyAyLjM1ODQsMTMuODA1NiAxLjQyNjQsMTMuMzAxNiBDMC40OTkwNjY2NjcsMTIuNzk5NiAwLjA0NzA2NjY2NjcsMTEuODIwOTMzMyAwLjIwMTA2NjY2NywxMC43NDM2IEMwLjI2MjQsMTAuMzEzNiAwLjQyOTczMzMzMyw5LjkyOTYgMC42NTM3MzMzMzMsOS41NjIyNjY2NyBDMi4yMzA0LDYuOTczNiAzLjgwNzA2NjY3LDQuMzg2MjY2NjcgNS4zNzUwNjY2NywxLjc5MjI2NjY3IEM2LjAyODQsMC43MTE2IDYuOTM4NCwwLjA3NjkzMzMzMzMgOC4yMzEwNjY2NywwLjA2MzYiIGlkPSJGaWxsLTE1IiBmaWxsPSIjRTMwNjEzIiBtYXNrPSJ1cmwoI21hc2stMykiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzAuMDc5ODIzMiw1Mi42ODc5MTIyIEMzMC4yODU5MjY4LDQ5Ljk5NjQ5ODkgMzAuNDgxNjAyNSw0Ny4zMDQzOTQ4IDMwLjcwMjQyNzgsNDQuNjE0MzYzMiBDMzAuODI4Nzg4OSw0My4wNjQ4NjYyIDMxLjY4OTM5NDIsNDIuMDY5NDAyNiAzMi45MDM5MzMyLDQyLjAwMzA4NDQgQzM0LjA4MzUwODMsNDEuOTM4ODM4NiAzNS4wNTU3NTMsNDIuODgyNDkxMiAzNS4yNDgzNjE3LDQ0LjQzNjgyMzggQzM1LjQzNzI5LDQ1Ljk2NDIxNDcgMzUuNTIwNzEyOSw0Ny41MDgxODUxIDM1LjYzNTQxOTQsNDkuMDQ1OTM4MiBDMzUuNzcwMzY4MSw1MC44NTg2MzU0IDM1Ljk1MjU0OSw1Mi42NzEzMzI2IDM1Ljk5ODU1NDMsNTQuNDg4MTc0OCBDMzYuMDUxMzA3LDU2LjU4MzQxNTEgMzQuNjUzOTczNiw1OC4wNzgzMzc3IDMyLjg2MDM4MTYsNTcuOTk2ODIxNiBDMzEuMzk1NTczOCw1Ny45MzExOTQyIDMwLjI4MjI0NjQsNTYuODAyNDAzMyAzMC4wNDU0NzI2LDU1LjE2NDQ4MjEgQzI5LjkyNTI0NTUsNTQuMzMzNDMyMyAzMC4wODE2NjM0LDUzLjUxNDgxNzEgMzAuMDc5ODIzMiw1Mi42ODc5MTIyIiBpZD0iRmlsbC0xOCIgZmlsbD0iI0UzMDYxMyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMSw0NS4yMzE1NTI0IEMwLjk5NjI1OTQ1Nyw0My4zMTY4ODU1IDEuOTI5MjEwNyw0MS45NTk0MjExIDMuNzAwNjkyNTMsNDEuNDMxMjYzNSBDNS45NzY3OTM0Myw0MC43NTMyOTU2IDguMjY0Nzc1MDcsNDAuMTMxMTI0NCAxMC41NDc3NTQzLDM5LjQ4ODMxNjEgQzExLjEzMDUzNjIsMzkuMzIzOTgzNCAxMS43MTA4MTY4LDM5LjExNDU1NDggMTIuMzAxNzI3NiwzOS4wMjgxODQ2IEMxMy41NzkyMjA1LDM4Ljg0MjQ1MDQgMTQuNTUxNTY1OCwzOS41ODYxNTE0IDE0Ljg3Nzk3MzcsNDAuOTIwNjg1NiBDMTUuMjM2MjcyLDQyLjM4Mjg2NDQgMTQuODA1NDM4Niw0My43NTE3OTM5IDEzLjU4NjcyNDIsNDQuNDAzNzc0MyBDMTAuNzU2NjA1Myw0NS45MTk0NTY3IDcuOTEzOTgwNCw0Ny40MTI5NzMzIDUuMDI2OTU5MDEsNDguNzU1OTE1MyBDMy4wMjA5ODg3Nyw0OS42ODg0MDc4IDEuMDA1MDEzNjksNDcuODI4MDA4OSAxLDQ1LjIzMTU1MjQiIGlkPSJGaWxsLTIwIiBmaWxsPSIjRTMwNjEzIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01MS44OTAwMzEzLDMxLjk5NzkzOTcgQzUxLjQ1MzkzOTcsMzIuMDIwMTk4NCA1MC45MjkwMDMsMzEuODYwNTUwMiA1MC40MTQwNzcxLDMxLjU5NDIxNCBDNDcuODM4ODIxNywzMC4yNjMzMDA2IDQ1LjI2MzU2NjIsMjguOTMzOTIyMyA0Mi42Nzk1NTE1LDI3LjYyOTEwNTIgQzQxLjgzOTkwMzEsMjcuMjA1NDIzNCA0MS4yMTczNjIsMjYuNTc2ODA4NiA0MS4wNDcxNzk5LDI1LjQzNDcxIEM0MC43MzI0NjgyLDIzLjMyMzIwODkgNDIuMDMwMTA2NiwyMS42ODUyNzk4IDQzLjgwOTUxMDUsMjIuMDUxMzk2MSBDNDUuMDg2NTAxOCwyMi4zMTQ2NjIxIDQ2LjMzOTA5MiwyMi43NTI5MjcxIDQ3LjYwMjMxODYsMjMuMTE1OTczMyBDNDkuMzUxMDY0NywyMy42MTc5NDQxIDUxLjExNDgyNjgsMjQuMDU2MjA5MSA1Mi44NDM1NTE1LDI0LjY0Nzk4MiBDNTQuMzk3MDg4NywyNS4xODA2NTQ0IDU1LjIyNDIyMzcsMjYuOTk1MTE3NiA1NC45NDcwNTIyLDI4Ljk1MDA0MDYgQzU0LjY5MTE1MzQsMzAuNzUxNDU1NyA1My41MTkyNzQ1LDMxLjk2ODAwNTcgNTEuODkwMDMxMywzMS45OTc5Mzk3IiBpZD0iRmlsbC0yMiIgZmlsbD0iI0UzMDYxMyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTI2Ljc2MTc0MiwzOC42NDgwODMyIEMxMjUuODcyNzA3LDM5LjE5Nzg2NTQgMTI0Ljg3MDY2NCwzOS40MzMxODYyIDEyMy44NDY0NSwzOS41MTA5MjYxIEMxMjEuNzk5NDUyLDM5LjY2NTcwNTYgMTE5Ljc0NzQ0NywzOS41NzYwNTk2IDExNy42OTY4NzMsMzkuNTQwMzQxMiBDMTE2Ljk3ODc3OSwzOS41Mjc3MzQ4IDExNi42NzEyMjgsMzkuMjc3NzA2NCAxMTYuNjk4NDA3LDM4LjU0OTMzMjUgQzExNi43MzkxNzUsMzcuNDM1MDYwNSAxMTYuNzA5MTM2LDM2LjMxODY4NzUgMTE2LjcwOTg1MSwzNS4yMDMwMTQ3IEMxMTYuNzA5ODUxLDM0LjA4NjY0MTcgMTE2LjczMTMwOCwzMi45NzAyNjg2IDExNi43MDEyNjgsMzEuODU1Mjk2MyBDMTE2LjY4NjI0OCwzMS4yODgwMDUxIDExNi45NTE2LDMxLjA0NDI3OTkgMTE3LjQ4NTE2NCwzMS4wMDAxNTczIEMxMjAuMjcxNzEzLDMwLjc3MTg0MDEgMTIzLjA2Njg0NiwzMC41NjczMzUxIDEyNS44MDgzMzYsMzEuMjgyNDAyMiBDMTI3LjU2NzgxLDMxLjc0MTgzOCAxMjguNjQ3ODEyLDMyLjkwMzAzNDEgMTI4LjgzMzc3MywzNC43MTk3NjY3IEMxMjkuMDExMTUxLDM2LjQ0NzU1MzYgMTI4LjIzNTgzOCwzNy43MzY5MTU1IDEyNi43NjE3NDIsMzguNjQ4MDgzMiBNMTE2LjcwODQyLDIwLjg5MDQ2NzcgQzExNi43MDg0MiwxOS44MTI2MTQ0IDExNi43MjU1ODYsMTguOTE2MTU0MiAxMTYuNzAyNjk5LDE4LjAyMTA5NDcgQzExNi42ODc2NzksMTcuNDMzNDkzMSAxMTYuODM3MTYyLDE3LjA1MjQ5NzUgMTE3LjUzNDUxNSwxNy4wMzU2ODg5IEMxMTkuNzA1OTY0LDE2Ljk4MTc2MTIgMTIxLjg3ODg0MywxNi44NzQ2MDYyIDEyNC4wNDE3MDksMTcuMTQxNDQzMiBDMTI0LjYwMDMwNiwxNy4yMTAwNzg0IDEyNS4xNTYwNDMsMTcuMzk0MjczIDEyNS42ODMxNywxNy42MDA4NzkgQzEyNy4yODEwMDEsMTguMjI3MDAwNCAxMjguMTA3ODExLDE5LjQzMzAxOTUgMTI4LjAyODQyLDIwLjk0NTc5NjEgQzEyNy45NTExNzUsMjIuNDIzNTU0NyAxMjYuOTY1NTgzLDIzLjU4NDA1MDQgMTI1LjI5NjIyOCwyMy45OTUxNjE0IEMxMjQuNDE1Nzc2LDI0LjIxMjI3MjkgMTIzLjQ5NDU1NSwyNC4yOTAwMTI4IDEyMi41ODY5MjQsMjQuMzcxOTU0OCBDMTIxLjkwNjAyMiwyNC40MzM1ODY1IDEyMS4yMTQzOTEsMjQuNDM3Nzg4NiAxMjAuNTMwNjI4LDI0LjQwMjA3MDMgQzExOS4yODk2OTgsMjQuMzM3NjM3MiAxMTcuNzMzMzUsMjQuODQ2MDk4MiAxMTYuOTA3OTcxLDIzLjk3MDY0ODggQzExNi4yMjkyMTQsMjMuMjUyMDggMTE2Ljc4NDk1LDIxLjgyMDU0NTEgMTE2LjcwODQyLDIwLjg5MDQ2NzcgTTEzMi44ODcwMDEsMjYuNTc1OTg2MiBDMTMzLjE5MTY5LDI2LjI5MDkzOTkgMTMzLjM4NDA4OCwyNi4wODU3MzQ2IDEzMy42MDE1MTksMjUuOTEwNjQ0NyBDMTM3Ljc3NzA1MiwyMi41NDQwMTY1IDEzNy40MjMwMTIsMTYuMDE4MDY2NSAxMzIuNzY4OTg3LDEyLjY3ODc1MjQgQzEzMS4zMTM0ODcsMTEuNjM0NTE2MyAxMjkuNjY2MzA1LDExLjAxMTE5NjMgMTI3LjkxMzI2OCwxMC42NjUyMTg3IEMxMjUuNjA4Nzg1LDEwLjIwOTk4NTEgMTIzLjI3MjgzMywxMC4wNDE4OTg4IDEyMC45MjQ3MjIsMTAuMDA4MjgxNSBDMTE3LjE0ODI4OSw5Ljk1MzY1MzQ4IDExMy4zNzk3MjQsMTAuMTgzMzcxNCAxMDkuNjA4Mjk4LDEwLjI4NDkyMzUgQzEwOC4wMTYxODgsMTAuMzI3NjQ1NSAxMDguMDAzMzE0LDEwLjMzNzQ1MDUgMTA4LjAwMjU5OSwxMS44NDExMjI0IEMxMDcuOTk5MDIzLDIyLjk4NTk0MzQgMTA3Ljk5OTAyMywzNC4xMzA3NjQzIDEwOC4wMDMzMTQsNDUuMjc1NTg1MyBDMTA4LjAwMzMxNCw0Ni42Mzg0ODQ5IDEwOC4wMTc2MTksNDYuNjYyMjk3MSAxMDkuMzU3MjUxLDQ2Ljc0MjEzODEgQzExNC4zODQ2MjcsNDcuMDQzMjkyNyAxMTkuNDE3NzI1LDQ3LjA2OTIwNiAxMjQuNDQ3MjQ2LDQ2Ljg3OTQwODYgQzEyNi4zODI2NjgsNDYuODA2NTcxMiAxMjguMzE1MjI5LDQ2LjU0NjczNzggMTMwLjE4OTg1Niw0NS45ODY0NTAyIEMxMzQuNTQwNjIxLDQ0LjY4NjU4MyAxMzcuMjgyMTExLDQxLjkyOTk2NzkgMTM3Ljg2Mjg4LDM3LjQ2NTE3NiBDMTM4LjQ0NzIyNiwzMi45NzUxNzExIDEzNy4yMzI3NTksMjkuMTM0Mzk5NSAxMzIuODg3MDAxLDI2LjU3NTk4NjIiIGlkPSJGaWxsLTI0IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+");
// CONCATENATED MODULE: ./public/images/svg/pin.svg
/* harmony default export */ var pin = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiBjbGFzcz0iIj48Zz48Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTI1NiwwQzE1Ni43NDgsMCw3Niw4MC43NDgsNzYsMTgwYzAsMzMuNTM0LDkuMjg5LDY2LjI2LDI2Ljg2OSw5NC42NTJsMTQyLjg4NSwyMzAuMjU3ICAgIGMyLjczNyw0LjQxMSw3LjU1OSw3LjA5MSwxMi43NDUsNy4wOTFjMC4wNCwwLDAuMDc5LDAsMC4xMTksMGM1LjIzMS0wLjA0MSwxMC4wNjMtMi44MDQsMTIuNzUtNy4yOTJMNDEwLjYxMSwyNzIuMjIgICAgQzQyNy4yMjEsMjQ0LjQyOCw0MzYsMjEyLjUzOSw0MzYsMTgwQzQzNiw4MC43NDgsMzU1LjI1MiwwLDI1NiwweiBNMzg0Ljg2NiwyNTYuODE4TDI1OC4yNzIsNDY4LjE4NmwtMTI5LjkwNS0yMDkuMzQgICAgQzExMy43MzQsMjM1LjIxNCwxMDUuOCwyMDcuOTUsMTA1LjgsMTgwYzAtODIuNzEsNjcuNDktMTUwLjIsMTUwLjItMTUwLjJTNDA2LjEsOTcuMjksNDA2LjEsMTgwICAgIEM0MDYuMSwyMDcuMTIxLDM5OC42ODksMjMzLjY4OCwzODQuODY2LDI1Ni44MTh6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBmaWxsPSIjMzMzMzMzIi8+DQoJPC9nPg0KPC9nPjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjU2LDkwYy00OS42MjYsMC05MCw0MC4zNzQtOTAsOTBjMCw0OS4zMDksMzkuNzE3LDkwLDkwLDkwYzUwLjkwMywwLDkwLTQxLjIzMyw5MC05MEMzNDYsMTMwLjM3NCwzMDUuNjI2LDkwLDI1Niw5MHogICAgIE0yNTYsMjQwLjJjLTMzLjI1NywwLTYwLjItMjcuMDMzLTYwLjItNjAuMmMwLTMzLjA4NCwyNy4xMTYtNjAuMiw2MC4yLTYwLjJzNjAuMSwyNy4xMTYsNjAuMSw2MC4yICAgIEMzMTYuMSwyMTIuNjgzLDI4OS43ODQsMjQwLjIsMjU2LDI0MC4yeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZmlsbD0iIzMzMzMzMyIvPg0KCTwvZz4NCjwvZz48L2c+IDwvc3ZnPg0K");
// CONCATENATED MODULE: ./public/images/svg/bieuphi.svg
/* harmony default export */ var bieuphi = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjIzcHgiIGhlaWdodD0iMjhweCIgdmlld0JveD0iMCAwIDIzIDI4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjEuMiAoODk2NTMpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPg0KICAgIDx0aXRsZT5Hcm91cCAyMDwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+DQogICAgICAgIDxmaWx0ZXIgeD0iLTAuOCUiIHk9Ii0xMC4wJSIgd2lkdGg9IjEwMS43JSIgaGVpZ2h0PSIxMjAuMCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci0xIj4NCiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjIiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+DQogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+DQogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4yNTYwMzY5MzIgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiPjwvZmVDb2xvck1hdHJpeD4NCiAgICAgICAgICAgIDxmZU1lcmdlPg0KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4T3V0ZXIxIj48L2ZlTWVyZ2VOb2RlPg0KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyI+PC9mZU1lcmdlTm9kZT4NCiAgICAgICAgICAgIDwvZmVNZXJnZT4NCiAgICAgICAgPC9maWx0ZXI+DQogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTIiIHBvaW50cz0iMCAwIDE0LjYwOTk3NDkgMCAxNC42MDk5NzQ5IDE5Ljc2OTYwMDQgMCAxOS43Njk2MDA0Ij48L3BvbHlnb24+DQogICAgPC9kZWZzPg0KICAgIDxnIGlkPSIjLUhvbWUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iI1BDLS0tSG9tZS0tLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMDAuMDAwMDAwLCAtOS4wMDAwMDApIj4NCiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wMDAwMDAsIDAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9IiMtSEVBREVSIj4NCiAgICAgICAgICAgICAgICAgICAgPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlci0xKSIgaWQ9ImJpZXVwaGkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjk5LjAwMDAwMCwgNy4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvLWRpZW1nZGljaCI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi4wMDAwMDAsIDQuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC4wMzE5NTMxNSw4LjI1OTY0NzM0IEwyLjMxMDY1ODM0LDguMjU5NjQ3MzQgQzIuMTUwNjg2NjYsOC4yNTk2NDczNCAyLjAyMTA2NDQyLDguMzg5MzA4MTkgMi4wMjEwNjQ0Miw4LjU0OTI0MTI2IEMyLjAyMTA2NDQyLDguNzA5MjEyOTUgMi4xNTA3MjUyNyw4LjgzODgzNTE5IDIuMzEwNjU4MzQsOC44Mzg4MzUxOSBMOC4wMzE5NTMxNSw4LjgzODgzNTE5IEM4LjE5MTg4NjIyLDguODM4ODM1MTkgOC4zMjE1NDcwOCw4LjcwOTIxMjk1IDguMzIxNTQ3MDgsOC41NDkyNDEyNiBDOC4zMjE1NDcwOCw4LjM4OTMwODE5IDguMTkxODg2MjIsOC4yNTk2NDczNCA4LjAzMTk1MzE1LDguMjU5NjQ3MzQiIGlkPSJGaWxsLTEiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMi4yMjEwMzM1LDcuNzA1ODIwMTkgTDEwLjg2NTUwMjMsOC40ODUzMjk4MiBMMTAuOTg5OTg5MSw4LjAzMzkxMDgxIEMxMS4wMzI1NDAxLDcuODc5NzMxIDEwLjk0MjAzMjMsNy43MjAyNjEyOCAxMC43ODc4NTI1LDcuNjc3NzQ4ODkgQzEwLjYzMzU1NjksNy42MzUxOTc4OSAxMC40NzQyMDMsNy43MjU3NDQyNiAxMC40MzE2OTA2LDcuODc5OTI0MDYgTDEwLjI3MzIyNDgsOC40NTQzNjI1NyBDMTAuMjE2MTk0MSw4LjY2MTA5NDAyIDEwLjI4ODkwMTUsOC44Nzk1MjUwNyAxMC40NTg0MTA1LDkuMDEwODQ2MjYgQzEwLjYxOTQyNDcsOS4xMzU1NjQ3MSAxMC44NTczOTM3LDkuMTU4MTUzMDMgMTEuMDQzNTgzMiw5LjA1MTA0MTg5IEwxMi41MDk3Mzk0LDguMjA3OTM3NDUgQzEyLjY0ODM1ODMsOC4xMjgyMDI1OSAxMi42OTYxNjA2LDcuOTUxMTY0MTcgMTIuNjE2Mzg3Miw3LjgxMjUwNjYgQzEyLjUzNjcyOTUsNy42NzM4ODc2NCAxMi4zNTk2OTExLDcuNjI2MTIzOTUgMTIuMjIxMDMzNSw3LjcwNTgyMDE5IiBpZD0iRmlsbC0zIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC4wMzE5NTMxNSwxMC40NjczODc5IEwyLjMxMDY1ODM0LDEwLjQ2NzM4NzkgQzIuMTUwNzI1MjcsMTAuNDY3Mzg3OSAyLjAyMTA2NDQyLDEwLjU5NzA0ODcgMi4wMjEwNjQ0MiwxMC43NTY5ODE4IEMyLjAyMTA2NDQyLDEwLjkxNjk1MzUgMi4xNTA2ODY2NiwxMS4wNDY1NzU3IDIuMzEwNjU4MzQsMTEuMDQ2NTc1NyBMOC4wMzE5NTMxNSwxMS4wNDY1NzU3IEM4LjE5MTg4NjIyLDExLjA0NjU3NTcgOC4zMjE1NDcwOCwxMC45MTY5OTIxIDguMzIxNTQ3MDgsMTAuNzU2OTgxOCBDOC4zMjE1NDcwOCwxMC41OTcwNDg3IDguMTkxODg2MjIsMTAuNDY3Mzg3OSA4LjAzMTk1MzE1LDEwLjQ2NzM4NzkiIGlkPSJGaWxsLTUiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMi4yMjEwMzM1LDkuOTEzNjE0NzggTDEwLjg2NTUwMjMsMTAuNjkzMDg1OCBMMTAuOTg5OTg5MSwxMC4yNDE3MDU0IEMxMS4wMzI1Nzg3LDEwLjA4NzUyNTYgMTAuOTQyMDMyMyw5LjkyODA1NTg2IDEwLjc4Nzg1MjUsOS44ODU1NDM0NyBDMTAuNjMzNTU2OSw5Ljg0Mjk5MjQ3IDEwLjQ3NDIwMyw5LjkzMzUzODg0IDEwLjQzMTY5MDYsMTAuMDg3NzE4NiBMMTAuMjczMjI0OCwxMC42NjIxNTcyIEMxMC4yMTYxOTQxLDEwLjg2ODg4ODYgMTAuMjg4OTAxNSwxMS4wODcyODEgMTAuNDU4NDQ5MSwxMS4yMTg2NDA4IEMxMC42MTk5MjY2LDExLjM0Mzc0NTQgMTAuODU2ODUzMSwxMS4zNjYyMTc5IDExLjA0MzYyMTksMTEuMjU4ODM2NSBMMTIuNTA5Nzc4LDEwLjQxNTczMiBDMTIuNjQ4MzU4MywxMC4zMzU5NTg2IDEyLjY5NjE2MDYsMTAuMTU4OTU4NyAxMi42MTYzODcyLDEwLjAyMDMwMTIgQzEyLjUzNjcyOTUsOS44ODE2NDM2MSAxMi4zNTk2OTExLDkuODMzODc5OTIgMTIuMjIxMDMzNSw5LjkxMzYxNDc4IiBpZD0iRmlsbC03IiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC4wMzE5NTMxNSwxMi42NzUxMjQ1IEwyLjMxMDY1ODM0LDEyLjY3NTEyNDUgQzIuMTUwNzI1MjcsMTIuNjc1MTI0NSAyLjAyMTA2NDQyLDEyLjgwNDc4NTQgMi4wMjEwNjQ0MiwxMi45NjQ3MTg1IEMyLjAyMTA2NDQyLDEzLjEyNDY5MDEgMi4xNTA2ODY2NiwxMy4yNTQzMTI0IDIuMzEwNjU4MzQsMTMuMjU0MzEyNCBMOC4wMzE5NTMxNSwxMy4yNTQzMTI0IEM4LjE5MTg4NjIyLDEzLjI1NDMxMjQgOC4zMjE1NDcwOCwxMy4xMjQ2OTAxIDguMzIxNTQ3MDgsMTIuOTY0NzE4NSBDOC4zMjE1NDcwOCwxMi44MDQ3ODU0IDguMTkxODg2MjIsMTIuNjc1MTI0NSA4LjAzMTk1MzE1LDEyLjY3NTEyNDUiIGlkPSJGaWxsLTkiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMi4yMjEwMzM1LDEyLjEyMTM1NTMgTDEwLjg2NTUwMjMsMTIuOTAwODY0OSBMMTAuOTg5OTg5MSwxMi40NDk0MDczIEMxMS4wMzI1Nzg3LDEyLjI5NTIyNzUgMTAuOTQyMDMyMywxMi4xMzU3NTc4IDEwLjc4Nzg1MjUsMTIuMDkzMjQ1NCBDMTAuNjMzNTU2OSwxMi4wNTA2OTQ0IDEwLjQ3NDIwMywxMi4xNDEyNDA3IDEwLjQzMTY5MDYsMTIuMjk1NDIwNiBMMTAuMjczMjI0OCwxMi44Njk4NTkxIEMxMC4yMTYxOTQxLDEzLjA3NjU5MDUgMTAuMjg4OTAxNSwxMy4yOTUwMjE2IDEwLjQ1ODQ0OTEsMTMuNDI2MzgxNCBDMTAuNjI2NjA2NiwxMy41NTY2MjE0IDEwLjg1OTI0NzEsMTMuNTcyNTI5OCAxMS4wNDM1ODMyLDEzLjQ2NjU3NyBMMTIuNTA5NzM5NCwxMi42MjM0NzI2IEMxMi42NDgzNTgzLDEyLjU0MzczNzcgMTIuNjk2MTYwNiwxMi4zNjY2OTkzIDEyLjYxNjM4NzIsMTIuMjI4MDQxNyBDMTIuNTM2NzI5NSwxMi4wODk0MjI3IDEyLjM1OTY5MTEsMTIuMDQxNjU5MSAxMi4yMjEwMzM1LDEyLjEyMTM1NTMiIGlkPSJGaWxsLTExIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC4wMzE5NTMxNSwxNC44ODI5MDM3IEwyLjMxMDY1ODM0LDE0Ljg4MjkwMzcgQzIuMTUwNzI1MjcsMTQuODgyOTAzNyAyLjAyMTA2NDQyLDE1LjAxMjUyNTkgMi4wMjEwNjQ0MiwxNS4xNzI0OTc2IEMyLjAyMTA2NDQyLDE1LjMzMjQzMDcgMi4xNTA2ODY2NiwxNS40NjIwOTE1IDIuMzEwNjU4MzQsMTUuNDYyMDkxNSBMOC4wMzE5NTMxNSwxNS40NjIwOTE1IEM4LjE5MTg4NjIyLDE1LjQ2MjA5MTUgOC4zMjE1NDcwOCwxNS4zMzI0MzA3IDguMzIxNTQ3MDgsMTUuMTcyNDk3NiBDOC4zMjE1NDcwOCwxNS4wMTI1MjU5IDguMTkxODg2MjIsMTQuODgyOTAzNyA4LjAzMTk1MzE1LDE0Ljg4MjkwMzciIGlkPSJGaWxsLTEzIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuMjIxMDMzNSwxNC4zMjkwOTIgTDEwLjg2NTUwMjMsMTUuMTA4NjAxNiBMMTAuOTg5OTg5MSwxNC42NTcxNDQgQzExLjAzMjU0MDEsMTQuNTAyOTY0MiAxMC45NDIwMzIzLDE0LjM0MzQ5NDQgMTAuNzg3ODUyNSwxNC4zMDA5ODIgQzEwLjYzMzU1NjksMTQuMjU4NDMxIDEwLjQ3NDIwMywxNC4zNDg5Nzc0IDEwLjQzMTY5MDYsMTQuNTAzMTU3MiBMMTAuMjczMjI0OCwxNS4wNzc1OTU3IEMxMC4yMTYxOTQxLDE1LjI4NDI4ODYgMTAuMjg4OTAxNSwxNS41MDI3NTgyIDEwLjQ1ODQ0OTEsMTUuNjM0MDc5NCBDMTAuNjI2NTY4LDE1Ljc2NDMxOTUgMTAuODU5MTY5OCwxNS43ODAzMDUgMTEuMDQzNTgzMiwxNS42NzQyNzUgTDEyLjUwOTczOTQsMTQuODMxMTcwNiBDMTIuNjQ4MzU4MywxNC43NTE0MzU3IDEyLjY5NjE2MDYsMTQuNTc0NDM1OSAxMi42MTYzODcyLDE0LjQzNTgxNyBDMTIuNTM2NzI5NSwxNC4yOTcxMjA4IDEyLjM1OTY5MTEsMTQuMjQ5Mzk1NyAxMi4yMjEwMzM1LDE0LjMyOTA5MiIgaWQ9IkZpbGwtMTUiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xOSI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMyIgZmlsbD0id2hpdGUiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTIiPjwvdXNlPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ2xpcC0xOCI+PC9nPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNC4wMzA4MTAyLDE4LjUyNjUwODggQzE0LjAzMDgxMDIsMTguODkyNTk0MSAxMy43MzI5MTQ2LDE5LjE5MDQxMjUgMTMuMzY2ODY3OSwxOS4xOTA0MTI1IEwxLjI0MzExNDc0LDE5LjE5MDQxMjUgQzAuODc3MDI5NDEsMTkuMTkwNDEyNSAwLjU3OTE3MjQwNSwxOC44OTI1OTQxIDAuNTc5MTcyNDA1LDE4LjUyNjUwODggTDAuNTc5MTcyNDA1LDE3LjIxMzc5ODggQzAuNTc5MTcyNDA1LDE3LjIxMzUyODUgMC41NzkxNzI0MDUsMTcuMjEzMjk2OSAwLjU3OTE3MjQwNSwxNy4yMTMwMjY2IEwwLjU3OTE3MjQwNSw1LjY3NzAzMzI3IEw0LjI1MDQ4OTc0LDUuNjc3MDMzMjcgQzQuODg5NjA0MjIsNS42NzcwMzMyNyA1LjQzMTk1NTcyLDUuMjU0NTM1MDQgNS42MTI4MTY3OCw0LjY3NDE1MDIgQzUuNjU1NTIyMjMsNC41MzcyNjg4MSA1LjY3NzA2ODAyLDQuMzkzNzQ2MDYgNS42NzcwNjgwMiw0LjI1MDM3Nzc2IEw1LjY3NzA2ODAyLDAuNTc5MTc2MjY2IEwxMy4zNjY5MDY1LDAuNTc5MTc2MjY2IEMxMy43MzI5NTMyLDAuNTc5MTc2MjY2IDE0LjAzMDgxMDIsMC44NzcxODc3MjEgMTQuMDMwODEwMiwxLjI0MzQ2NjEyIEwxNC4wMzA4MTAyLDYuMzI0MzMzNjEgQzE0LjAzMDgxMDIsNi4zMjQ2MDM5IDE0LjAzMDgxMDIsNi4zMjQ4MzU1OCAxNC4wMzA4MTAyLDYuMzI1MDY3MjUgTDE0LjAzMDgxMDIsMTguNTI2NTA4OCBaIE01LjA5Nzg4MDE3LDAuOTg4NzAwNjg5IEw1LjA5Nzg4MDE3LDQuMjUwNDE2MzcgQzUuMDk3ODgwMTcsNC43MDk5MDU0IDQuNzEyOTUxOTMsNS4wOTc4NDU0MiA0LjI1MDQ4OTc0LDUuMDk3ODQ1NDIgTDAuOTg4NzM1NDQsNS4wOTc4NDU0MiBMNS4wOTc4ODAxNywwLjk4ODcwMDY4OSBaIE0xNC42MDk5OTgxLDEuMjQzNDY2MTIgQzE0LjYwOTk5ODEsMC41NTc4NjIxNTMgMTQuMDUyMzE3NCwtMS4xNTgzNzU3ZS0wNSAxMy4zNjY4Njc5LC0xLjE1ODM3NTdlLTA1IEw1LjM4NzQzNTQ4LC0xLjE1ODM3NTdlLTA1IEM1LjMxMTYzOTEsLTEuMTU4Mzc1N2UtMDUgNS4yMzYzODMyOSwwLjAzMTI2NDU2MDEgNS4xODI3MTE4OSwwLjA4NDc4MTUxNzUgQzUuMTgyNzExODksMC4wODQ3ODE1MTc1IDAuMDg1NzgxNTgxOCw1LjE4MTc1MDQzIDAuMDg0NjYxODE4Niw1LjE4MjgzMTU5IEMwLjAzMTkxNzExMTgsNS4yMzY1NDE2IC0xLjU0NDUwMDkzZS0wNSw1LjMxMjIyMjE1IC0xLjU0NDUwMDkzZS0wNSw1LjM4NzQzOTM1IEwtMS41NDQ1MDA5M2UtMDUsMTcuMjEzNzk4OCBMLTEuNTQ0NTAwOTNlLTA1LDE3LjU5OTg4NTQgTC0xLjU0NDUwMDkzZS0wNSwxOC41MjY1MDg4IEMtMS41NDQ1MDA5M2UtMDUsMTkuMjExOTU4MyAwLjU1NzYyNjYxNywxOS43Njk2MDA0IDEuMjQzMDc2MTMsMTkuNzY5NjAwNCBMMTMuMzY2ODY3OSwxOS43Njk2MDA0IEMxNC4wNTIzMTc0LDE5Ljc2OTYwMDQgMTQuNjA5OTk4MSwxOS4yMTE5NTgzIDE0LjYwOTk5ODEsMTguNTI2NTA4OCBMMTQuNjA5OTk4MSw2LjMyNTc2MjI4IEMxNC42MDk5OTgxLDYuMzI1NTMwNiAxNC42MDk5OTgxLDYuMzI1Mjk4OTMgMTQuNjA5OTk4MSw2LjMyNTAyODY0IEwxNC42MDk5OTgxLDEuMjQzNDY2MTIgWiIgaWQ9IkZpbGwtMTciIGZpbGw9IiMwMDAwMDAiIG1hc2s9InVybCgjbWFzay0zKSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+");
// CONCATENATED MODULE: ./public/images/svg/folder.svg
/* harmony default export */ var folder = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjMxcHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDMxIDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjEuMiAoODk2NTMpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPg0KICAgIDx0aXRsZT5mb2xkZXI8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSIwMi4tSGVhZGVyLS0tRm9vdGVyLS0tQmFubmVyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPg0KICAgICAgICA8ZyBpZD0iIy1Gb290ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05Ny4wMDAwMDAsIC0yMDU4LjAwMDAwMCkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIxLjM3NyI+DQogICAgICAgICAgICA8ZyBpZD0iIy1GT09URVItTWItMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDk1NS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iIy1Cb3R0b20tYmFyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTA4NS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE0LUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc1LjAwMDAwMCwgNi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4wMDAwMDAsIDUuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IjAyLXNhbnBoYW0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzLjAwMDAwMCwgMC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImZvbGRlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4zNzcwMDAsIDguMjYyMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aCIgcG9pbnRzPSIwIDAgOS42MzkgMCAxMS4yNDU1IDMuMTQzMTUyMTcgMjguOTE3IDMuMTQzMTUyMTcgMjguOTE3IDIyLjAwMjA2NTIgMCAyMi4wMDIwNjUyIj48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");
// CONCATENATED MODULE: ./public/images/svg/giadinh.svg
/* harmony default export */ var giadinh = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjMycHgiIGhlaWdodD0iMjdweCIgdmlld0JveD0iMCAwIDMyIDI3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjEuMiAoODk2NTMpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPg0KICAgIDx0aXRsZT4wNC1naWFkaW5oPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZGVmcz4NCiAgICAgICAgPHJlY3QgaWQ9InBhdGgtMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjMxLjY3MSIgaGVpZ2h0PSIzMS42NzEiPjwvcmVjdD4NCiAgICA8L2RlZnM+DQogICAgPGcgaWQ9IjAyLi1IZWFkZXItLS1Gb290ZXItLS1CYW5uZXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iIy1Gb290ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNDcuMDAwMDAwLCAtMjA1NC4wMDAwMDApIj4NCiAgICAgICAgICAgIDxnIGlkPSIjLUZPT1RFUi1NYi0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgOTU1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnIGlkPSIjLUJvdHRvbS1iYXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxMDg1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTQtQ29weS0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjUuMDAwMDAwLCA2LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0LjAwMDAwMCwgNS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMDQtZ2lhZGluaCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC4wMDAwMDAsIDAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZSI+PC9nPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTYiIG1hc2s9InVybCgjbWFzay0yKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMzc3MDAwLCA0LjEzMTAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJwZW9wbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA4LjA3NDIyNykiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCwxNi4xNDg0NTQ1IEMwLDEzLjEyMDYxOTMgNC4wMzcxMTM2NCwxMy4xMjA2MTkzIDYuMDU1NjcwNDUsMTEuMTAyMDYyNSBDNy4wNjQ5NDg4NiwxMC4wOTI3ODQxIDQuMDM3MTEzNjQsMTAuMDkyNzg0MSA0LjAzNzExMzY0LDUuMDQ2MzkyMDUgQzQuMDM3MTEzNjQsMS42ODI0NjcxMSA1LjM4MjQ4MTc2LDAgOC4wNzQyMjcyNywwIEMxMC43NjU5NzI4LDAgMTIuMTExMzQwOSwxLjY4MjQ2NzExIDEyLjExMTM0MDksNS4wNDYzOTIwNSBDMTIuMTExMzQwOSwxMC4wOTI3ODQxIDkuMDgzNTA1NjgsMTAuMDkyNzg0MSAxMC4wOTI3ODQxLDExLjEwMjA2MjUgQzEyLjExMTM0MDksMTMuMTIwNjE5MyAxNi4xNDg0NTQ1LDEzLjEyMDYxOTMgMTYuMTQ4NDU0NSwxNi4xNDg0NTQ1IE0xNS44NjgyOTQyLDEzLjA4OTIyMTkgQzE2LjUzMDcwODgsMTIuODQ5MTQ1IDE3LjA3MzYwNzgsMTIuNjI3MTQ4NyAxNy40OTY5OTExLDEyLjQyMzIzMjggQzE4LjIzODAzMjMsMTIuMDY2MzIyMSAxOC45NTI5ODAxLDExLjY2MTc5ODMgMTkuNTEyNzE1OSwxMS4xMDIwNjI1IEMyMC41MjE5OTQzLDEwLjA5Mjc4NDEgMTcuNDk0MTU5MSwxMC4wOTI3ODQxIDE3LjQ5NDE1OTEsNS4wNDYzOTIwNSBDMTcuNDk0MTU5MSwxLjY4MjQ2NzExIDE4LjgzOTUyNzIsMCAyMS41MzEyNzI3LDAgQzI0LjIyMzAxODIsMCAyNS41NjgzODY0LDEuNjgyNDY3MTEgMjUuNTY4Mzg2NCw1LjA0NjM5MjA1IEMyNS41NjgzODY0LDEwLjA5Mjc4NDEgMjIuNTQwNTUxMSwxMC4wOTI3ODQxIDIzLjU0OTgyOTUsMTEuMTAyMDYyNSBDMjUuNTY4Mzg2NCwxMy4xMjA2MTkzIDI5LjYwNTUsMTMuMTIwNjE5MyAyOS42MDU1LDE2LjE0ODQ1NDUiIGlkPSJTaGFwZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjEuMzc3Ij48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNC44MDI3NSwxMy40NTcwNDU1IEMxNS4yOTU2NDY3LDEzLjI5MDY0NTMgMTUuNjUwODI4MSwxMy4xNjgwMzc0IDE1Ljg2ODI5NDIsMTMuMDg5MjIxOSIgaWQ9IlBhdGgiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIxLjM3NyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaG9tZS1hbHQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAxODU1NywgMC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJTaGFwZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjEuMTcwNDUiIHBvaW50cz0iMjUuMTY0Njc1IDcuNDM1MDE3NjEgMTIuNTgyMzM3NSAwIDAgNy40MzUwMTc2MSI+PC9wb2x5bGluZT4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");
// CONCATENATED MODULE: ./public/images/svg/MB.svg
/* harmony default export */ var MB = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI4cHgiIGhlaWdodD0iMjlweCIgdmlld0JveD0iMCAwIDI4IDI5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjEuMiAoODk2NTMpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPg0KICAgIDx0aXRsZT4wMy1NQisrPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZGVmcz4NCiAgICAgICAgPHJlY3QgaWQ9InBhdGgtMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjMxLjY3MSIgaGVpZ2h0PSIzMS42NzEiPjwvcmVjdD4NCiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMyIgcG9pbnRzPSIwIDMuNDEyMDM1NGUtMDUgMjcuNTMxMzIzNyAzLjQxMjAzNTRlLTA1IDI3LjUzMTMyMzcgMjguMDEyMTYyMyAwIDI4LjAxMjE2MjMiPjwvcG9seWdvbj4NCiAgICA8L2RlZnM+DQogICAgPGcgaWQ9IjAyLi1IZWFkZXItLS1Gb290ZXItLS1CYW5uZXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iIy1Gb290ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzQuMDAwMDAwLCAtMjA1My4wMDAwMDApIj4NCiAgICAgICAgICAgIDxnIGlkPSIjLUZPT1RFUi1NYi0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgOTU1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnIGlkPSIjLUJvdHRvbS1iYXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxMDg1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTQtQ29weS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTAuMDAwMDAwLCA2LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxLjAwMDAwMCwgNS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMDMtTUIrKyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wMDAwMDAsIDAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZSI+PC9nPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMyIgbWFzaz0idXJsKCNtYXNrLTIpIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDY1NTAwLCAyLjA2NTUwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTQiIGZpbGw9IndoaXRlIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0zIj48L3VzZT4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMiIgc3Ryb2tlPSJub25lIiBmaWxsPSJub25lIj48L2c+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIuOTM1MTc5MDgsMjQuOTY3MzU5NCBMMi45MzUxNzkwOCwxMi40ODk3ODk3IEwyNC42NTI1NDA3LDEyLjQ4OTc4OTcgTDI0LjY1MjU0MDcsMjUuMDQwMTMzMyBDMjQuNjUyNTQwNywyNi4wMDg5MDc2IDIzLjg2NzIzNjQsMjYuNzk0MjExOSAyMi44OTg0MTMzLDI2Ljc5NDIxMTkgTDQuNzYyMDgwMzIsMjYuNzk0MjExOSBDMy43NTQ0NTc1MiwyNi43OTEzODQ4IDIuOTM4MjAxMTcsMjUuOTc1MDMxIDIuOTM1MTc5MDgsMjQuOTY3MzU5NCBMMi45MzUxNzkwOCwyNC45NjczNTk0IFogTTEuMjE3OTUwNDEsOC40ODI3OTI4MSBDMS4yMjA3Nzc1Miw3LjQ3NDk3NTA0IDIuMDM3MTgwMTEsNi42NTg3Njc0MyAzLjA0NDgwMjksNi42NTU5NDAzMiBMMjQuNDU5OTA2OSw2LjY1NTk0MDMyIEMyNS40ODgzOTE5LDYuNjU1OTQwMzIgMjYuMzIyMDk4Myw3LjQ4OTY0Njc5IDI2LjMyMjA5ODMsOC41MTgxMzE3NSBMMjYuMzIyMDk4MywxMS4yNzE4MzkzIEwxLjIxNzk1MDQxLDExLjI3MTgzOTMgTDEuMjE3OTUwNDEsOC40ODI3OTI4MSBaIE03LjQzNTYwNTAzLDUuMTg4MzI2NCBDNi43ODc4MDU3Myw0LjUzNTAxOTExIDYuNzkwMjkxNjUsMy40ODA5NDM4OSA3LjQ0MDU3Njg1LDIuODMwNzA3NDMgQzguMDkxMjAzMjYsMi4xODAwMzIyOCA5LjE0NDg4ODUzLDIuMTc3OTM2MzIgOS43OTgxOTU4MiwyLjgyNTM0NTY2IEwxMi40MTA3OTEzLDUuNDM3OTg5OTEgTDcuNjg1MDczNTYsNS40Mzc5ODk5MSBMNy40MzU2MDUwMyw1LjE4ODMyNjQgWiBNMTguOTg3NTg3LDEuNzA1MDc2OTUgQzE5LjMwMDI3NTcsMS4zOTEyNjcxOCAxOS43MjU5NTE1LDEuMjE1OTg2MDUgMjAuMTY4Nzg1LDEuMjE3ODcxNzQgQzIwLjg0NDUxNDIsMS4yMTY3NjU5NCAyMS40NTQ0Mzk5LDEuNjIzMjM2ODUgMjEuNzEzMjY3MiwyLjI0NzQ0NDM1IEMyMS45NzIwNDU3LDIuODcxNzk4MDggMjEuODI4Nzg4OSwzLjU5MDc2MjY5IDIxLjM1MDMyNDEsNC4wNjc4MTM5OCBMMjEuMzQ0MDM2Miw0LjA3MzcxMTkzIEwyMC4wMTY1NTk0LDUuNDMxODk2OTkgTDE1LjI1NDQ3OTEsNS40MzE4OTY5OSBMMTguOTg3NTg3LDEuNzA1MDc2OTUgWiBNMjQuNDkyNDE4Nyw1LjQzNzk4OTkxIEwyMS43MjE2NTEsNS40Mzc5ODk5MSBMMjIuMjE1MTI4OCw0LjkzMjU2OTk4IEMyMy4zMzUzOTc1LDMuODAxMDQxNTUgMjMuMzM1Mzk3NSwxLjk3ODEzNzI3IDIyLjIxNTEyODgsMC44NDYyNjc2NDIgQzIxLjA4Njc2ODcsLTAuMjgyMDQzNzIgMTkuMjU3MDQwNCwtMC4yODIwNDM3MiAxOC4xMjg3Nzc3LDAuODQ2MjY3NjQyIEwxMy44MzU1NTk4LDUuMTMzNTM4ODYgTDEwLjY2MzA5ODEsMS45NjA4MzMzOCBDOS42Mzk2MzM2NiwwLjkzNjYzNzgzNyA4LjAxNjE4NzIyLDAuODI4NTI1MDU4IDYuODY2MDM4ODMsMS43MDc3MDkwOSBDNS43MTYwMzY2NywyLjU4Njk0MTg3IDUuMzk0NDI3OTYsNC4xODE4MjQ3IDYuMTEzOTc3NDksNS40Mzc5ODk5MSBMMy4wNDQ4MDI5LDUuNDM3OTg5OTEgQzEuMzYzNDk4MDksNS40Mzg1NzQ4MyAwLjAwMDc3OTg5MzgwNSw2LjgwMTQ4OCAwLDguNDgyNzkyODEgTDAsMTEuODgwNzkwMSBDMC4wMDA5NzQ4NjcyNTcsMTIuMjE2NjgwNiAwLjI3MzA2MDMxOSwxMi40ODg4MTQ4IDAuNjA4OTUwODMyLDEyLjQ4OTc4OTcgTDEuNzE3Mjc3NDIsMTIuNDg5Nzg5NyBMMS43MTcyNzc0MiwyNC45NjczNTk0IEMxLjcxODAwODU3LDI2LjY0ODY2NDIgMy4wODA3NzU1LDI4LjAxMTQzMTIgNC43NjIwODAzMiwyOC4wMTIxNjIzIEwyMi43NjkwNDg0LDI4LjAxMjE2MjMgQzI0LjQ1MDU0ODIsMjguMDExNDMxMiAyNS44MTMyNjY0LDI2LjY0ODY2NDIgMjUuODEzODUxMywyNC45NjczNTk0IEwyNS44MTM4NTEzLDEyLjQ4OTc4OTcgTDI2LjkyMjM3MjgsMTIuNDg5Nzg5NyBDMjcuMjU4MjE0NiwxMi40ODg4MTQ4IDI3LjUzMDM0ODgsMTIuMjE2NjgwNiAyNy41MzEzMzM5LDExLjg4MDc5MDEgTDI3LjUzMTMzMzksOC40ODI3OTI4MSBDMjcuNTMzNDE5Niw3LjY3NTc0ODk1IDI3LjIxMzg1ODIsNi45MDEwMjE5NCAyNi42NDM3NTU4LDYuMzI5NTU0NzYgQzI2LjA3Mzc5OTYsNS43NTgyODI1NSAyNS4yOTk0NjI2LDUuNDM3NTk5OTYgMjQuNDkyNDE4Nyw1LjQzNzk4OTkxIEwyNC40OTI0MTg3LDUuNDM3OTg5OTEgWiIgaWQ9IkZpbGwtMSIgc3Ryb2tlPSJub25lIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG1hc2s9InVybCgjbWFzay00KSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+");
// CONCATENATED MODULE: ./public/images/svg/tienich.svg
/* harmony default export */ var tienich = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI2cHgiIGhlaWdodD0iMjZweCIgdmlld0JveD0iMCAwIDI2IDI2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjEuMiAoODk2NTMpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPg0KICAgIDx0aXRsZT4wNS10aWVuaWNoPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZGVmcz4NCiAgICAgICAgPHJlY3QgaWQ9InBhdGgtMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjMxLjY3MSIgaGVpZ2h0PSIzMS42NzEiPjwvcmVjdD4NCiAgICA8L2RlZnM+DQogICAgPGcgaWQ9IjAyLi1IZWFkZXItLS1Gb290ZXItLS1CYW5uZXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iIy1Gb290ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMjUuMDAwMDAwLCAtMjA1NS4wMDAwMDApIj4NCiAgICAgICAgICAgIDxnIGlkPSIjLUZPT1RFUi1NYi0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgOTU1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnIGlkPSIjLUJvdHRvbS1iYXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxMDg1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTQtQ29weS00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDAuMDAwMDAwLCA2LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LjAwMDAwMCwgNS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMDUtdGllbmljaCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi4wMDAwMDAsIDAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZSI+PC9nPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iZ3JpZCIgbWFzaz0idXJsKCNtYXNrLTIpIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjM3NyI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjEzMTAwMCwgNC44MTk1MDApIiBpZD0iUmVjdGFuZ2xlIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iOS4zNzEyNSIgaGVpZ2h0PSI5LjM3MTI1Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0iMTQuNzI2MjUiIHk9IjAiIHdpZHRoPSI5LjM3MTI1IiBoZWlnaHQ9IjkuMzcxMjUiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PSIwIiB5PSIxNC43MjYyNSIgd2lkdGg9IjkuMzcxMjUiIGhlaWdodD0iOS4zNzEyNSI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjE0LjcyNjI1IiB5PSIxNC43MjYyNSIgd2lkdGg9IjkuMzcxMjUiIGhlaWdodD0iOS4zNzEyNSI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+");
// CONCATENATED MODULE: ./public/images/svg/home.svg
/* harmony default export */ var home = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI2cHgiIGhlaWdodD0iMjlweCIgdmlld0JveD0iMCAwIDI2IDI5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjEuMiAoODk2NTMpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPg0KICAgIDx0aXRsZT5ob21lLWFsdDwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9IjAyLi1IZWFkZXItLS1Gb290ZXItLS1CYW5uZXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+DQogICAgICAgIDxnIGlkPSIjLUZvb3RlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1LjAwMDAwMCwgLTIwNTMuMDAwMDAwKSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjEuMzc3Ij4NCiAgICAgICAgICAgIDxnIGlkPSIjLUZPT1RFUi1NYi0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgOTU1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnIGlkPSIjLUJvdHRvbS1iYXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxMDg1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA2LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5LjAwMDAwMCwgNS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMDEtdHJhbmdjaHUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzLjAwMDAwMCwgMC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImhvbWUtYWx0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjEzMTAwMCwgMy40NDI1MDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjAgMTAuOTUzNjUyNSAwIDI2Ljc3NSAyNC4wOTc1IDI2Ljc3NSAyNC4wOTc1IDEwLjk1MzY1MjUgMTIuMDQ4NzUgMCI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iOC4wMzI1IiB5PSIxNi4wNjUiIHdpZHRoPSI4LjAzMjUiIGhlaWdodD0iMTAuNzEiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==");
// CONCATENATED MODULE: ./public/images/svg/btt-chplay-mb.svg
/* harmony default export */ var btt_chplay_mb = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjExOHB4IiBoZWlnaHQ9IjQycHgiIHZpZXdCb3g9IjAgMCAxMTggNDIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MiAoOTEzOTApIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPg0KICAgIDx0aXRsZT5Hcm91cCAyOTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iIy1GT09URVItTWItMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNi4wMDAwMDAsIC0yMDkuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wMDAwMDAsIDAuMDAwMDAwKSIgaWQ9Ikdyb3VwLTM1Ij4NCiAgICAgICAgICAgICAgICA8Zz4NCiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTM0Ij4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSItLS1Eb3dubG9hZC1hcHAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCAxOTQuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNS4wMDAwMDAsIDE1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMi4wMDAwMDAsIDAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMjkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAwLjgyOTg4MikiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMyIgc3Ryb2tlPSIjMTQxRUQyIiBzdHJva2Utd2lkdGg9IjAuNTcxMjA5NDA4IiBmaWxsPSIjRkZGRkZGIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTE2IiBoZWlnaHQ9IjQwIiByeD0iMTkuMDg3MjgxOCI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMDAwMDAwLCA3LjAwMDAwMCkiIGZpbGw9IiMxNDFFRDIiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMS41NzYwMzE4LDAuMTcwMTE4MTgyIEMwLjcwNTYxMzQ3MywwLjE3MDExODE4MiAwLDEuMDAyMjg4MjMgMCwyLjAzMjgyMjI5IEwwLDIxLjMwNzQxNDEgQzAsMjIuMzM2MTU3MSAwLjcwNDgzMjk1NiwyMy4xNzAxMTgyIDEuNTc2MDMxOCwyMy4xNzAxMTgyIEw5LjQyMzk2ODIsMjMuMTcwMTE4MiBDMTAuMjk0Mzg2NSwyMy4xNzAxMTgyIDExLDIyLjMzNzk0ODEgMTEsMjEuMzA3NDE0MSBMMTEsMi4wMzI4MjIyOSBDMTEsMS4wMDQwNzkyMiAxMC4yOTUxNjcsMC4xNzAxMTgxODIgOS40MjM5NjgyLDAuMTcwMTE4MTgyIEwxLjU3NjAzMTgsMC4xNzAxMTgxODIgTDEuNTc2MDMxOCwwLjE3MDExODE4MiBaIE0xLjAzMTI1LDMuMTg2NTExNjIgTDEuMDMxMjUsMjAuMTUzNzI0NyBMOS45Njg3NSwyMC4xNTM3MjQ3IEw5Ljk2ODc1LDMuMTg2NTExNjIgTDEuMDMxMjUsMy4xODY1MTE2MiBMMS4wMzEyNSwzLjE4NjUxMTYyIFogTTUuNSwyMi40MTYwMTk4IEM1Ljg3OTY5NTc3LDIyLjQxNjAxOTggNi4xODc1LDIyLjA3ODM5ODUgNi4xODc1LDIxLjY2MTkyMTUgQzYuMTg3NSwyMS4yNDU0NDQ0IDUuODc5Njk1NzcsMjAuOTA3ODIzMSA1LjUsMjAuOTA3ODIzMSBDNS4xMjAzMDQyMywyMC45MDc4MjMxIDQuODEyNSwyMS4yNDU0NDQ0IDQuODEyNSwyMS42NjE5MjE1IEM0LjgxMjUsMjIuMDc4Mzk4NSA1LjEyMDMwNDIzLDIyLjQxNjAxOTggNS41LDIyLjQxNjAxOTggTDUuNSwyMi40MTYwMTk4IFogTTQuMTI1LDEuNjc4MzE0OSBDNC4xMjUsMS44ODY1NTM0MiA0LjI0MzE2NDA2LDIuMDU1MzY0MDggNC4zOTg3MzQzMywyLjA1NTM2NDA4IEw2LjYwMTI2NTY3LDIuMDU1MzY0MDggQzYuNzUyNDQ0OTcsMi4wNTUzNjQwOCA2Ljg3NSwxLjg4MDQ2MzM0IDYuODc1LDEuNjc4MzE0OSBDNi44NzUsMS40NzAwNzYzOSA2Ljc1NjgzNTk0LDEuMzAxMjY1NzIgNi42MDEyNjU2NywxLjMwMTI2NTcyIEw0LjM5ODczNDMzLDEuMzAxMjY1NzIgQzQuMjQ3NTU1MDMsMS4zMDEyNjU3MiA0LjEyNSwxLjQ3NjE2NjQ3IDQuMTI1LDEuNjc4MzE0OSBaIiBpZD0iaVBob25lLVZlY3RvciI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTcuODk0MjQsNi4xNzAxMTgxOCBMMTguNDM4NTYsNC41MjE2MDYxOCBMMjAuMjk3MDI0LDQuNTIxNjA2MTggTDIwLjg1Njg5Niw2LjE3MDExODE4IEwyMS41ODAwNjQsNi4xNzAxMTgxOCBMMTkuNzkxNTg0LDAuOTI5MDk0MTgyIEwxOC45NzUxMDQsMC45MjkwOTQxODIgTDE3LjE5NDQsNi4xNzAxMTgxOCBMMTcuODk0MjQsNi4xNzAxMTgxOCBaIE0yMC4xNTcwNTYsMy45OTI4MzgxOCBMMTguNTc4NTI4LDMuOTkyODM4MTggTDE5LjA5MTc0NCwyLjQ3NjUxODE4IEMxOS4xOTI4MzIsMi4xNTc3MDIxOCAxOS4yNzgzNjgsMS44Mzg4ODYxOCAxOS4zNTYxMjgsMS41Mjc4NDYxOCBMMTkuMzcxNjgsMS41Mjc4NDYxOCBDMTkuNDQ5NDQsMS44MzExMTAxOCAxOS41MjcyLDIuMTQyMTUwMTggMTkuNjQzODQsMi40ODQyOTQxOCBMMjAuMTU3MDU2LDMuOTkyODM4MTggWiBNMjMuOTM2MTkyLDYuMTcwMTE4MTggTDI1LjQxMzYzMiwyLjQwNjUzNDE4IEwyNC42OTgyNCwyLjQwNjUzNDE4IEwyMy45NjcyOTYsNC41MjE2MDYxOCBDMjMuODQyODgsNC44NjM3NTAxOCAyMy43MzQwMTYsNS4xNzQ3OTAxOCAyMy42NDg0OCw1LjQ4NTgzMDE4IEwyMy42MjUxNTIsNS40ODU4MzAxOCBDMjMuNTQ3MzkyLDUuMTc0NzkwMTggMjMuNDQ2MzA0LDQuODYzNzUwMTggMjMuMzIxODg4LDQuNTIxNjA2MTggTDIyLjU4MzE2OCwyLjQwNjUzNDE4IEwyMS44NTIyMjQsMi40MDY1MzQxOCBMMjMuMjgzMDA4LDYuMTcwMTE4MTggTDIzLjkzNjE5Miw2LjE3MDExODE4IFogTTI3LjAzODgxNiw2LjI1NTY1NDE4IEMyNy41NzUzNiw2LjI1NTY1NDE4IDI3Ljk3OTcxMiw1Ljk5MTI3MDE4IDI4LjE4OTY2NCw1LjY5NTc4MjE4IEwyOC4yMTI5OTIsNS42OTU3ODIxOCBMMjguMjY3NDI0LDYuMTcwMTE4MTggTDI4Ljg4OTUwNCw2LjE3MDExODE4IEMyOC44NDI4NDgsNS45MTM1MTAxOCAyOC44MjcyOTYsNS41OTQ2OTQxOCAyOC44MjcyOTYsNS4yNjgxMDIxOCBMMjguODI3Mjk2LDMuODYwNjQ2MTggQzI4LjgyNzI5NiwzLjEwNjM3NDE4IDI4LjU0NzM2LDIuMzIwOTk4MTggMjcuMzk2NTEyLDIuMzIwOTk4MTggQzI2LjkyMjE3NiwyLjMyMDk5ODE4IDI2LjQ3MTE2OCwyLjQ1MzE5MDE4IDI2LjE2MDEyOCwyLjY1NTM2NjE4IEwyNi4zMTU2NDgsMy4xMDYzNzQxOCBDMjYuNTgwMDMyLDIuOTM1MzAyMTggMjYuOTQ1NTA0LDIuODI2NDM4MTggMjcuMjk1NDI0LDIuODI2NDM4MTggQzI4LjA2NTI0OCwyLjgyNjQzODE4IDI4LjE1MDc4NCwzLjM4NjMxMDE4IDI4LjE1MDc4NCwzLjY5NzM1MDE4IEwyOC4xNTA3ODQsMy43NzUxMTAxOCBDMjYuNjk2NjcyLDMuNzY3MzM0MTggMjUuODg3OTY4LDQuMjY0OTk4MTggMjUuODg3OTY4LDUuMTc0NzkwMTggQzI1Ljg4Nzk2OCw1LjcxOTExMDE4IDI2LjI3Njc2OCw2LjI1NTY1NDE4IDI3LjAzODgxNiw2LjI1NTY1NDE4IFogTTI3LjIxNzY2NCw1Ljc1MDIxNDE4IEMyNi44Njc3NDQsNS43NTAyMTQxOCAyNi41NzIyNTYsNS41NDAyNjIxOCAyNi41NzIyNTYsNS4wOTcwMzAxOCBDMjYuNTcyMjU2LDQuMzY2MDg2MTggMjcuNDE5ODQsNC4yMzM4OTQxOCAyOC4xNjYzMzYsNC4yNDk0NDYxOCBMMjguMTY2MzM2LDQuOTAyNjMwMTggQzI4LjE2NjMzNiw0Ljk3MjYxNDE4IDI4LjE1MDc4NCw1LjA1MDM3NDE4IDI4LjEyNzQ1Niw1LjEyMDM1ODE4IEMyOC4wMTg1OTIsNS40MzkxNzQxOCAyNy43MDc1NTIsNS43NTAyMTQxOCAyNy4yMTc2NjQsNS43NTAyMTQxOCBaIE0zMC40MTM2LDEuNzY4OTAyMTggQzMwLjY4NTc2LDEuNzY4OTAyMTggMzAuODU2ODMyLDEuNTgyMjc4MTggMzAuODQ5MDU2LDEuMzQ4OTk4MTggQzMwLjg0OTA1NiwxLjEwNzk0MjE4IDMwLjY4NTc2LDAuOTIxMzE4MTgyIDMwLjQyOTE1MiwwLjkyMTMxODE4MiBDMzAuMTgwMzIsMC45MjEzMTgxODIgMzAuMDAxNDcyLDEuMTA3OTQyMTggMzAuMDAxNDcyLDEuMzQ4OTk4MTggQzMwLjAwMTQ3MiwxLjU4MjI3ODE4IDMwLjE3MjU0NCwxLjc2ODkwMjE4IDMwLjQxMzYsMS43Njg5MDIxOCBaIE0zMC43NzEyOTYsNi4xNzAxMTgxOCBMMzAuNzcxMjk2LDIuNDA2NTM0MTggTDMwLjA4NzAwOCwyLjQwNjUzNDE4IEwzMC4wODcwMDgsNi4xNzAxMTgxOCBMMzAuNzcxMjk2LDYuMTcwMTE4MTggWiBNMzIuNzQ2NCw2LjE3MDExODE4IEwzMi43NDY0LDAuNjQ5MTU4MTgyIEwzMi4wNjIxMTIsMC42NDkxNTgxODIgTDMyLjA2MjExMiw2LjE3MDExODE4IEwzMi43NDY0LDYuMTcwMTE4MTggWiBNMzQuOTA4MTI4LDYuMjU1NjU0MTggQzM1LjQ0NDY3Miw2LjI1NTY1NDE4IDM1Ljg0OTAyNCw1Ljk5MTI3MDE4IDM2LjA1ODk3Niw1LjY5NTc4MjE4IEwzNi4wODIzMDQsNS42OTU3ODIxOCBMMzYuMTM2NzM2LDYuMTcwMTE4MTggTDM2Ljc1ODgxNiw2LjE3MDExODE4IEMzNi43MTIxNiw1LjkxMzUxMDE4IDM2LjY5NjYwOCw1LjU5NDY5NDE4IDM2LjY5NjYwOCw1LjI2ODEwMjE4IEwzNi42OTY2MDgsMy44NjA2NDYxOCBDMzYuNjk2NjA4LDMuMTA2Mzc0MTggMzYuNDE2NjcyLDIuMzIwOTk4MTggMzUuMjY1ODI0LDIuMzIwOTk4MTggQzM0Ljc5MTQ4OCwyLjMyMDk5ODE4IDM0LjM0MDQ4LDIuNDUzMTkwMTggMzQuMDI5NDQsMi42NTUzNjYxOCBMMzQuMTg0OTYsMy4xMDYzNzQxOCBDMzQuNDQ5MzQ0LDIuOTM1MzAyMTggMzQuODE0ODE2LDIuODI2NDM4MTggMzUuMTY0NzM2LDIuODI2NDM4MTggQzM1LjkzNDU2LDIuODI2NDM4MTggMzYuMDIwMDk2LDMuMzg2MzEwMTggMzYuMDIwMDk2LDMuNjk3MzUwMTggTDM2LjAyMDA5NiwzLjc3NTExMDE4IEMzNC41NjU5ODQsMy43NjczMzQxOCAzMy43NTcyOCw0LjI2NDk5ODE4IDMzLjc1NzI4LDUuMTc0NzkwMTggQzMzLjc1NzI4LDUuNzE5MTEwMTggMzQuMTQ2MDgsNi4yNTU2NTQxOCAzNC45MDgxMjgsNi4yNTU2NTQxOCBaIE0zNS4wODY5NzYsNS43NTAyMTQxOCBDMzQuNzM3MDU2LDUuNzUwMjE0MTggMzQuNDQxNTY4LDUuNTQwMjYyMTggMzQuNDQxNTY4LDUuMDk3MDMwMTggQzM0LjQ0MTU2OCw0LjM2NjA4NjE4IDM1LjI4OTE1Miw0LjIzMzg5NDE4IDM2LjAzNTY0OCw0LjI0OTQ0NjE4IEwzNi4wMzU2NDgsNC45MDI2MzAxOCBDMzYuMDM1NjQ4LDQuOTcyNjE0MTggMzYuMDIwMDk2LDUuMDUwMzc0MTggMzUuOTk2NzY4LDUuMTIwMzU4MTggQzM1Ljg4NzkwNCw1LjQzOTE3NDE4IDM1LjU3Njg2NCw1Ljc1MDIxNDE4IDM1LjA4Njk3Niw1Ljc1MDIxNDE4IFogTTM5LjgzMDMzNTksNi4yNTU2NTQxOCBDNDAuNjcwMTQzOSw2LjI1NTY1NDE4IDQxLjUxNzcyNzksNS41ODY5MTgxOCA0MS41MTc3Mjc5LDQuMjQxNjcwMTggQzQxLjUyNTUwMzksMy4wOTg1OTgxOCA0MC44NjQ1NDM5LDIuMzIwOTk4MTggMzkuOTMxNDIzOSwyLjMyMDk5ODE4IEMzOS4zMjQ4OTU5LDIuMzIwOTk4MTggMzguODg5NDM5OSwyLjU5MzE1ODE4IDM4LjY0ODM4MzksMy4wMTMwNjIxOCBMMzguNjMyODMxOSwzLjAxMzA2MjE4IEwzOC42MzI4MzE5LDAuNjQ5MTU4MTgyIEwzNy45NTYzMTk5LDAuNjQ5MTU4MTgyIEwzNy45NTYzMTk5LDUuMTk4MTE4MTggQzM3Ljk1NjMxOTksNS41MzI0ODYxOCAzNy45NDA3Njc5LDUuOTEzNTEwMTggMzcuOTI1MjE1OSw2LjE3MDExODE4IEwzOC41MTYxOTE5LDYuMTcwMTE4MTggTDM4LjU0NzI5NTksNS41NDgwMzgxOCBMMzguNTcwNjIzOSw1LjU0ODAzODE4IEMzOC44NTA1NTk5LDYuMDQ1NzAyMTggMzkuMjg2MDE1OSw2LjI1NTY1NDE4IDM5LjgzMDMzNTksNi4yNTU2NTQxOCBaIE0zOS42OTAzNjc5LDUuNzExMzM0MTggQzM5LjE5MjcwMzksNS43MTEzMzQxOCAzOC43OTYxMjc5LDUuMzg0NzQyMTggMzguNjYzOTM1OSw0LjkxMDQwNjE4IEMzOC42NDgzODM5LDQuODMyNjQ2MTggMzguNjMyODMxOSw0Ljc0NzExMDE4IDM4LjYzMjgzMTksNC42NjE1NzQxOCBMMzguNjMyODMxOSwzLjk4NTA2MjE4IEMzOC42MzI4MzE5LDMuODc2MTk4MTggMzguNjU2MTU5OSwzLjc4Mjg4NjE4IDM4LjY3MTcxMTksMy43MDUxMjYxOCBDMzguODExNjc5OSwzLjE4NDEzNDE4IDM5LjI0NzEzNTksMi44NjUzMTgxOCAzOS43MTM2OTU5LDIuODY1MzE4MTggQzQwLjQ0NDYzOTksMi44NjUzMTgxOCA0MC44MzM0Mzk5LDMuNTEwNzI2MTggNDAuODMzNDM5OSw0LjI2NDk5ODE4IEM0MC44MzM0Mzk5LDUuMTI4MTM0MTggNDAuNDA1NzU5OSw1LjcxMTMzNDE4IDM5LjY5MDM2NzksNS43MTEzMzQxOCBaIE00My4yMjA2NzE5LDYuMTcwMTE4MTggTDQzLjIyMDY3MTksMC42NDkxNTgxODIgTDQyLjUzNjM4MzksMC42NDkxNTgxODIgTDQyLjUzNjM4MzksNi4xNzAxMTgxOCBMNDMuMjIwNjcxOSw2LjE3MDExODE4IFogTTQ2LjEwNTU2NzksNi4yNDc4NzgxOCBDNDYuNzA0MzE5OSw2LjI0Nzg3ODE4IDQ3LjExNjQ0NzksNi4xMjM0NjIxOCA0Ny4zNTc1MDM5LDYuMDE0NTk4MTggTDQ3LjI0MDg2MzksNS41MjQ3MTAxOCBDNDYuOTg0MjU1OSw1LjYzMzU3NDE4IDQ2LjY4ODc2NzksNS43MTkxMTAxOCA0Ni4xOTg4Nzk5LDUuNzE5MTEwMTggQzQ1LjUxNDU5MTksNS43MTkxMTAxOCA0NC45MjM2MTU5LDUuMzM4MDg2MTggNDQuOTA4MDYzOSw0LjQxMjc0MjE4IEw0Ny41NTE5MDM5LDQuNDEyNzQyMTggQzQ3LjU1OTY3OTksNC4zNDI3NTgxOCA0Ny41NzUyMzE5LDQuMjMzODk0MTggNDcuNTc1MjMxOSw0LjA5MzkyNjE4IEM0Ny41NzUyMzE5LDMuNDAxODYyMTggNDcuMjQ4NjM5OSwyLjMyMDk5ODE4IDQ2LjAyMDAzMTksMi4zMjA5OTgxOCBDNDQuOTIzNjE1OSwyLjMyMDk5ODE4IDQ0LjI1NDg3OTksMy4yMTUyMzgxOCA0NC4yNTQ4Nzk5LDQuMzUwNTM0MTggQzQ0LjI1NDg3OTksNS40ODU4MzAxOCA0NC45NDY5NDM5LDYuMjQ3ODc4MTggNDYuMTA1NTY3OSw2LjI0Nzg3ODE4IFogTTQ2LjkxNDI3MTksMy45MjI4NTQxOCBMNDQuOTE1ODM5OSwzLjkyMjg1NDE4IEM0NC45NzAyNzE5LDMuNDQ4NTE4MTggNDUuMjczNTM1OSwyLjgxMDg4NjE4IDQ1Ljk2NTU5OTksMi44MTA4ODYxOCBDNDYuNzM1NDIzOSwyLjgxMDg4NjE4IDQ2LjkyMjA0NzksMy40ODczOTgxOCA0Ni45MTQyNzE5LDMuOTIyODU0MTggWiBNNTEuOTE0MjM5OSw2LjI1NTY1NDE4IEM1Mi44MjQwMzE5LDYuMjU1NjU0MTggNTMuNzg4MjU1OSw1LjY0OTEyNjE4IDUzLjc4ODI1NTksNC4yNTcyMjIxOCBDNTMuNzg4MjU1OSwzLjEwNjM3NDE4IDUzLjA1NzMxMTksMi4zMjA5OTgxOCA1MS45NzY0NDc5LDIuMzIwOTk4MTggQzUwLjkzNDQ2MzksMi4zMjA5OTgxOCA1MC4xMTAyMDc5LDMuMDU5NzE4MTggNTAuMTEwMjA3OSw0LjMxOTQzMDE4IEM1MC4xMTAyMDc5LDUuNTA5MTU4MTggNTAuODk1NTgzOSw2LjI1NTY1NDE4IDUxLjkxNDIzOTksNi4yNTU2NTQxOCBaIE01MS45NDUzNDM5LDUuNzQyNDM4MTggQzUxLjI3NjYwNzksNS43NDI0MzgxOCA1MC44MDIyNzE5LDUuMTIwMzU4MTggNTAuODAyMjcxOSw0LjI5NjEwMjE4IEM1MC44MDIyNzE5LDMuNTgwNzEwMTggNTEuMTUyMTkxOSwyLjgzNDIxNDE4IDUxLjk2MDg5NTksMi44MzQyMTQxOCBDNTIuNzY5NTk5OSwyLjgzNDIxNDE4IDUzLjA4ODQxNTksMy42NDI5MTgxOCA1My4wODg0MTU5LDQuMjgwNTUwMTggQzUzLjA4ODQxNTksNS4xMjgxMzQxOCA1Mi41OTg1Mjc5LDUuNzQyNDM4MTggNTEuOTQ1MzQzOSw1Ljc0MjQzODE4IFogTTU1LjQ5MTE5OTksNi4xNzAxMTgxOCBMNTUuNDkxMTk5OSwzLjkwNzMwMjE4IEM1NS40OTExOTk5LDMuNzkwNjYyMTggNTUuNTA2NzUxOSwzLjY3NDAyMjE4IDU1LjUzNzg1NTksMy41ODg0ODYxOCBDNTUuNjU0NDk1OSwzLjIwNzQ2MjE4IDU2LjAwNDQxNTksMi44ODg2NDYxOCA1Ni40NTU0MjM5LDIuODg4NjQ2MTggQzU3LjEwMDgzMTksMi44ODg2NDYxOCA1Ny4zMjYzMzU5LDMuMzk0MDg2MTggNTcuMzI2MzM1OSw0LjAwMDYxNDE4IEw1Ny4zMjYzMzU5LDYuMTcwMTE4MTggTDU4LjAxMDYyMzksNi4xNzAxMTgxOCBMNTguMDEwNjIzOSwzLjkyMjg1NDE4IEM1OC4wMTA2MjM5LDIuNjMyMDM4MTggNTcuMjAxOTE5OSwyLjMyMDk5ODE4IDU2LjY4MDkyNzksMi4zMjA5OTgxOCBDNTYuMDU4ODQ3OSwyLjMyMDk5ODE4IDU1LjYyMzM5MTksMi42NzA5MTgxOCA1NS40MzY3Njc5LDMuMDI4NjE0MTggTDU1LjQyMTIxNTksMy4wMjg2MTQxOCBMNTUuMzgyMzM1OSwyLjQwNjUzNDE4IEw1NC43NzU4MDc5LDIuNDA2NTM0MTggQzU0Ljc5OTEzNTksMi43MTc1NzQxOCA1NC44MDY5MTE5LDMuMDM2MzkwMTggNTQuODA2OTExOSwzLjQyNTE5MDE4IEw1NC44MDY5MTE5LDYuMTcwMTE4MTggTDU1LjQ5MTE5OTksNi4xNzAxMTgxOCBaIE02Mi4yNDA3Njc5LDYuMjQ3ODc4MTggQzYyLjUwNTE1MTksNi4yNDc4NzgxOCA2Mi43MTUxMDM5LDYuMjA4OTk4MTggNjIuODQ3Mjk1OSw2LjE1NDU2NjE4IEw2Mi44MTYxOTE5LDUuNjQxMzUwMTggQzYyLjczMDY1NTksNS42NjQ2NzgxOCA2Mi41OTg0NjM5LDUuNjg4MDA2MTggNjIuNDE5NjE1OSw1LjY4ODAwNjE4IEM2Mi4wMzg1OTE5LDUuNjg4MDA2MTggNjEuOTA2Mzk5OSw1LjQyMzYyMjE4IDYxLjkwNjM5OTksNC45NTcwNjIxOCBMNjEuOTA2Mzk5OSwyLjkyNzUyNjE4IEw2Mi44ODYxNzU5LDIuOTI3NTI2MTggTDYyLjg4NjE3NTksMi40MDY1MzQxOCBMNjEuOTA2Mzk5OSwyLjQwNjUzNDE4IEw2MS45MDYzOTk5LDEuMzI1NjcwMTggTDYxLjIzNzY2MzksMS41MDQ1MTgxOCBMNjEuMjM3NjYzOSwyLjQwNjUzNDE4IEw2MC42NTQ0NjM5LDIuNDA2NTM0MTggTDYwLjY1NDQ2MzksMi45Mjc1MjYxOCBMNjEuMjM3NjYzOSwyLjkyNzUyNjE4IEw2MS4yMzc2NjM5LDQuOTgwMzkwMTggQzYxLjIzNzY2MzksNS40MjM2MjIxOCA2MS4zMDc2NDc5LDUuNzU3OTkwMTggNjEuNTAyMDQ3OSw1Ljk2MDE2NjE4IEM2MS42NjUzNDM5LDYuMTQ2NzkwMTggNjEuOTIxOTUxOSw2LjI0Nzg3ODE4IDYyLjI0MDc2NzksNi4yNDc4NzgxOCBaIE02NC40OTU4MDc5LDYuMTcwMTE4MTggTDY0LjQ5NTgwNzksMy44OTk1MjYxOCBDNjQuNDk1ODA3OSwzLjc2NzMzNDE4IDY0LjUwMzU4MzksMy42NjYyNDYxOCA2NC41NDI0NjM5LDMuNTcyOTM0MTggQzY0LjY2Njg3OTksMy4xOTk2ODYxOCA2NS4wMTY3OTk5LDIuODg4NjQ2MTggNjUuNDYwMDMxOSwyLjg4ODY0NjE4IEM2Ni4xMDU0Mzk5LDIuODg4NjQ2MTggNjYuMzMwOTQzOSwzLjQwMTg2MjE4IDY2LjMzMDk0MzksNC4wMDgzOTAxOCBMNjYuMzMwOTQzOSw2LjE3MDExODE4IEw2Ny4wMTUyMzE5LDYuMTcwMTE4MTggTDY3LjAxNTIzMTksMy45MzA2MzAxOCBDNjcuMDE1MjMxOSwyLjYzMjAzODE4IDY2LjIwNjUyNzksMi4zMjA5OTgxOCA2NS43MDEwODc5LDIuMzIwOTk4MTggQzY1LjQ0NDQ3OTksMi4zMjA5OTgxOCA2NS4yMDM0MjM5LDIuMzk4NzU4MTggNjUuMDAxMjQ3OSwyLjUxNTM5ODE4IEM2NC43OTEyOTU5LDIuNjMyMDM4MTggNjQuNjIwMjIzOSwyLjgwMzExMDE4IDY0LjUxMTM1OTksMi45OTc1MTAxOCBMNjQuNDk1ODA3OSwyLjk5NzUxMDE4IEw2NC40OTU4MDc5LDAuNjQ5MTU4MTgyIEw2My44MTE1MTk5LDAuNjQ5MTU4MTgyIEw2My44MTE1MTk5LDYuMTcwMTE4MTggTDY0LjQ5NTgwNzksNi4xNzAxMTgxOCBaIE02OS44NjEyNDc5LDYuMjQ3ODc4MTggQzcwLjQ1OTk5OTksNi4yNDc4NzgxOCA3MC44NzIxMjc5LDYuMTIzNDYyMTggNzEuMTEzMTgzOSw2LjAxNDU5ODE4IEw3MC45OTY1NDM5LDUuNTI0NzEwMTggQzcwLjczOTkzNTksNS42MzM1NzQxOCA3MC40NDQ0NDc5LDUuNzE5MTEwMTggNjkuOTU0NTU5OSw1LjcxOTExMDE4IEM2OS4yNzAyNzE5LDUuNzE5MTEwMTggNjguNjc5Mjk1OSw1LjMzODA4NjE4IDY4LjY2Mzc0MzksNC40MTI3NDIxOCBMNzEuMzA3NTgzOSw0LjQxMjc0MjE4IEM3MS4zMTUzNTk5LDQuMzQyNzU4MTggNzEuMzMwOTExOSw0LjIzMzg5NDE4IDcxLjMzMDkxMTksNC4wOTM5MjYxOCBDNzEuMzMwOTExOSwzLjQwMTg2MjE4IDcxLjAwNDMxOTksMi4zMjA5OTgxOCA2OS43NzU3MTE5LDIuMzIwOTk4MTggQzY4LjY3OTI5NTksMi4zMjA5OTgxOCA2OC4wMTA1NTk5LDMuMjE1MjM4MTggNjguMDEwNTU5OSw0LjM1MDUzNDE4IEM2OC4wMTA1NTk5LDUuNDg1ODMwMTggNjguNzAyNjIzOSw2LjI0Nzg3ODE4IDY5Ljg2MTI0NzksNi4yNDc4NzgxOCBaIE03MC42Njk5NTE5LDMuOTIyODU0MTggTDY4LjY3MTUxOTksMy45MjI4NTQxOCBDNjguNzI1OTUxOSwzLjQ0ODUxODE4IDY5LjAyOTIxNTksMi44MTA4ODYxOCA2OS43MjEyNzk5LDIuODEwODg2MTggQzcwLjQ5MTEwMzksMi44MTA4ODYxOCA3MC42Nzc3Mjc5LDMuNDg3Mzk4MTggNzAuNjY5OTUxOSwzLjkyMjg1NDE4IFoiIGlkPSJBdmFpbGFibGVvbnRoZSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC43ODg0OCwxOS4xNzAxMTgyIEwxOS44NzcxMiwxNS44NzMwOTQyIEwyMy41OTQwNDgsMTUuODczMDk0MiBMMjQuNzEzNzkyLDE5LjE3MDExODIgTDI2LjE2MDEyOCwxOS4xNzAxMTgyIEwyMi41ODMxNjgsOC42ODgwNzAxOCBMMjAuOTUwMjA4LDguNjg4MDcwMTggTDE3LjM4ODgsMTkuMTcwMTE4MiBMMTguNzg4NDgsMTkuMTcwMTE4MiBaIE0yMy4zMTQxMTIsMTQuODE1NTU4MiBMMjAuMTU3MDU2LDE0LjgxNTU1ODIgTDIxLjE4MzQ4OCwxMS43ODI5MTgyIEMyMS4zODU2NjQsMTEuMTQ1Mjg2MiAyMS41NTY3MzYsMTAuNTA3NjU0MiAyMS43MTIyNTYsOS44ODU1NzQxOCBMMjEuNzQzMzYsOS44ODU1NzQxOCBDMjEuODk4ODgsMTAuNDkyMTAyMiAyMi4wNTQ0LDExLjExNDE4MjIgMjIuMjg3NjgsMTEuNzk4NDcwMiBMMjMuMzE0MTEyLDE0LjgxNTU1ODIgWiBNMjguNDA4ODMyNywyMi4yNDk0MTQyIEwyOC40MDg4MzI3LDE4LjE1OTIzODIgTDI4LjQzOTkzNjcsMTguMTU5MjM4MiBDMjguODkwOTQ0NywxOC45MDU3MzQyIDI5Ljc2MTg1NjcsMTkuMzQxMTkwMiAzMC43NTcxODQ3LDE5LjM0MTE5MDIgQzMyLjUzMDExMjcsMTkuMzQxMTkwMiAzNC4xNzg2MjQ3LDE4LjAwMzcxODIgMzQuMTc4NjI0NywxNS4yOTc2NzAyIEMzNC4xNzg2MjQ3LDEzLjAxMTUyNjIgMzIuODEwMDQ4NywxMS40NzE4NzgyIDMwLjk5MDQ2NDcsMTEuNDcxODc4MiBDMjkuNzYxODU2NywxMS40NzE4NzgyIDI4Ljg3NTM5MjcsMTIuMDE2MTk4MiAyOC4zMTU1MjA3LDEyLjkzMzc2NjIgTDI4LjI4NDQxNjcsMTIuOTMzNzY2MiBMMjguMjIyMjA4NywxMS42NDI5NTAyIEwyNi45OTM2MDA3LDExLjY0Mjk1MDIgQzI3LjAyNDcwNDcsMTIuMzU4MzQyMiAyNy4wNTU4MDg3LDEzLjEzNTk0MjIgMjcuMDU1ODA4NywxNC4xMDAxNjYyIEwyNy4wNTU4MDg3LDIyLjI0OTQxNDIgTDI4LjQwODgzMjcsMjIuMjQ5NDE0MiBaIE0zMC41MjM5MDQ3LDE4LjI2ODEwMjIgQzI5LjU0NDEyODcsMTguMjY4MTAyMiAyOC43MTk4NzI3LDE3LjYxNDkxODIgMjguNDcxMDQwNywxNi42NjYyNDYyIEMyOC40Mzk5MzY3LDE2LjQ5NTE3NDIgMjguNDA4ODMyNywxNi4zMDg1NTAyIDI4LjQwODgzMjcsMTYuMTA2Mzc0MiBMMjguNDA4ODMyNywxNC44MTU1NTgyIEMyOC40MDg4MzI3LDE0LjYyODkzNDIgMjguNDU1NDg4NywxNC40MjY3NTgyIDI4LjUwMjE0NDcsMTQuMjU1Njg2MiBDMjguNzY2NTI4NywxMy4yMjkyNTQyIDI5LjYzNzQ0MDcsMTIuNTYwNTE4MiAzMC41NzA1NjA3LDEyLjU2MDUxODIgQzMyLjAxNjg5NjcsMTIuNTYwNTE4MiAzMi44MTAwNDg3LDEzLjg1MTMzNDIgMzIuODEwMDQ4NywxNS4zNTk4NzgyIEMzMi44MTAwNDg3LDE3LjA4NjE1MDIgMzEuOTcwMjQwNywxOC4yNjgxMDIyIDMwLjUyMzkwNDcsMTguMjY4MTAyMiBaIE0zNi43MDcyNjU1LDIyLjI0OTQxNDIgTDM2LjcwNzI2NTUsMTguMTU5MjM4MiBMMzYuNzM4MzY5NSwxOC4xNTkyMzgyIEMzNy4xODkzNzc1LDE4LjkwNTczNDIgMzguMDYwMjg5NSwxOS4zNDExOTAyIDM5LjA1NTYxNzUsMTkuMzQxMTkwMiBDNDAuODI4NTQ1NSwxOS4zNDExOTAyIDQyLjQ3NzA1NzUsMTguMDAzNzE4MiA0Mi40NzcwNTc1LDE1LjI5NzY3MDIgQzQyLjQ3NzA1NzUsMTMuMDExNTI2MiA0MS4xMDg0ODE1LDExLjQ3MTg3ODIgMzkuMjg4ODk3NSwxMS40NzE4NzgyIEMzOC4wNjAyODk1LDExLjQ3MTg3ODIgMzcuMTczODI1NSwxMi4wMTYxOTgyIDM2LjYxMzk1MzUsMTIuOTMzNzY2MiBMMzYuNTgyODQ5NSwxMi45MzM3NjYyIEwzNi41MjA2NDE1LDExLjY0Mjk1MDIgTDM1LjI5MjAzMzUsMTEuNjQyOTUwMiBDMzUuMzIzMTM3NSwxMi4zNTgzNDIyIDM1LjM1NDI0MTUsMTMuMTM1OTQyMiAzNS4zNTQyNDE1LDE0LjEwMDE2NjIgTDM1LjM1NDI0MTUsMjIuMjQ5NDE0MiBMMzYuNzA3MjY1NSwyMi4yNDk0MTQyIFogTTM4LjgyMjMzNzUsMTguMjY4MTAyMiBDMzcuODQyNTYxNSwxOC4yNjgxMDIyIDM3LjAxODMwNTUsMTcuNjE0OTE4MiAzNi43Njk0NzM1LDE2LjY2NjI0NjIgQzM2LjczODM2OTUsMTYuNDk1MTc0MiAzNi43MDcyNjU1LDE2LjMwODU1MDIgMzYuNzA3MjY1NSwxNi4xMDYzNzQyIEwzNi43MDcyNjU1LDE0LjgxNTU1ODIgQzM2LjcwNzI2NTUsMTQuNjI4OTM0MiAzNi43NTM5MjE1LDE0LjQyNjc1ODIgMzYuODAwNTc3NSwxNC4yNTU2ODYyIEMzNy4wNjQ5NjE1LDEzLjIyOTI1NDIgMzcuOTM1ODczNSwxMi41NjA1MTgyIDM4Ljg2ODk5MzUsMTIuNTYwNTE4MiBDNDAuMzE1MzI5NSwxMi41NjA1MTgyIDQxLjEwODQ4MTUsMTMuODUxMzM0MiA0MS4xMDg0ODE1LDE1LjM1OTg3ODIgQzQxLjEwODQ4MTUsMTcuMDg2MTUwMiA0MC4yNjg2NzM1LDE4LjI2ODEwMjIgMzguODIyMzM3NSwxOC4yNjgxMDIyIFogTTQ4LjU5MTg3NSwxOS4zMjU2MzgyIEM1MS4wNjQ2NDMsMTkuMzI1NjM4MiA1Mi4yNjIxNDcsMTcuOTI1OTU4MiA1Mi4yNjIxNDcsMTYuMzA4NTUwMiBDNTIuMjYyMTQ3LDE0Ljc2ODkwMjIgNTEuMzYwMTMxLDEzLjkxMzU0MjIgNDkuNTg3MjAzLDEzLjIyOTI1NDIgQzQ4LjE0MDg2NywxMi42NjkzODIyIDQ3LjUwMzIzNSwxMi4xODcyNzAyIDQ3LjUwMzIzNSwxMS4yMDc0OTQyIEM0Ny41MDMyMzUsMTAuNDkyMTAyMiA0OC4wNDc1NTUsOS42MzY3NDIxOCA0OS40NzgzMzksOS42MzY3NDIxOCBDNTAuNDI3MDExLDkuNjM2NzQyMTggNTEuMTI2ODUxLDkuOTQ3NzgyMTggNTEuNDY4OTk1LDEwLjEzNDQwNjIgTDUxLjg0MjI0Myw5LjAzMDIxNDE4IEM1MS4zNzU2ODMsOC43NjU4MzAxOCA1MC41OTgwODMsOC41MTY5OTgxOCA0OS41MjQ5OTUsOC41MTY5OTgxOCBDNDcuNDg3NjgzLDguNTE2OTk4MTggNDYuMTM0NjU5LDkuNzMwMDU0MTggNDYuMTM0NjU5LDExLjM2MzAxNDIgQzQ2LjEzNDY1OSwxMi44NDA0NTQyIDQ3LjE5MjE5NSwxMy43MjY5MTgyIDQ4LjkwMjkxNSwxNC4zMzM0NDYyIEM1MC4zMTgxNDcsMTQuODc3NzY2MiA1MC44NzgwMTksMTUuNDM3NjM4MiA1MC44NzgwMTksMTYuNDE3NDE0MiBDNTAuODc4MDE5LDE3LjQ3NDk1MDIgNTAuMDY5MzE1LDE4LjIwNTg5NDIgNDguNjg1MTg3LDE4LjIwNTg5NDIgQzQ3Ljc1MjA2NywxOC4yMDU4OTQyIDQ2Ljg2NTYwMywxNy44OTQ4NTQyIDQ2LjI1OTA3NSwxNy41MjE2MDYyIEw0NS45MTY5MzEsMTguNjU2OTAyMiBDNDYuNDc2ODAzLDE5LjAzMDE1MDIgNDcuNTgwOTk1LDE5LjMyNTYzODIgNDguNTkxODc1LDE5LjMyNTYzODIgWiBNNTUuNzg2MTE1NywxOS4zMjU2MzgyIEM1Ni4zMTQ4ODM3LDE5LjMyNTYzODIgNTYuNzM0Nzg3NywxOS4yNDc4NzgyIDU2Ljk5OTE3MTcsMTkuMTM5MDE0MiBMNTYuOTM2OTYzNywxOC4xMTI1ODIyIEM1Ni43NjU4OTE3LDE4LjE1OTIzODIgNTYuNTAxNTA3NywxOC4yMDU4OTQyIDU2LjE0MzgxMTcsMTguMjA1ODk0MiBDNTUuMzgxNzYzNywxOC4yMDU4OTQyIDU1LjExNzM3OTcsMTcuNjc3MTI2MiA1NS4xMTczNzk3LDE2Ljc0NDAwNjIgTDU1LjExNzM3OTcsMTIuNjg0OTM0MiBMNTcuMDc2OTMxNywxMi42ODQ5MzQyIEw1Ny4wNzY5MzE3LDExLjY0Mjk1MDIgTDU1LjExNzM3OTcsMTEuNjQyOTUwMiBMNTUuMTE3Mzc5Nyw5LjQ4MTIyMjE4IEw1My43Nzk5MDc3LDkuODM4OTE4MTggTDUzLjc3OTkwNzcsMTEuNjQyOTUwMiBMNTIuNjEzNTA3NywxMS42NDI5NTAyIEw1Mi42MTM1MDc3LDEyLjY4NDkzNDIgTDUzLjc3OTkwNzcsMTIuNjg0OTM0MiBMNTMuNzc5OTA3NywxNi43OTA2NjIyIEM1My43Nzk5MDc3LDE3LjY3NzEyNjIgNTMuOTE5ODc1NywxOC4zNDU4NjIyIDU0LjMwODY3NTcsMTguNzUwMjE0MiBDNTQuNjM1MjY3NywxOS4xMjM0NjIyIDU1LjE0ODQ4MzcsMTkuMzI1NjM4MiA1NS43ODYxMTU3LDE5LjMyNTYzODIgWiBNNjEuMDM2MzU2NSwxOS4zNDExOTAyIEM2Mi44NTU5NDA1LDE5LjM0MTE5MDIgNjQuNzg0Mzg4NSwxOC4xMjgxMzQyIDY0Ljc4NDM4ODUsMTUuMzQ0MzI2MiBDNjQuNzg0Mzg4NSwxMy4wNDI2MzAyIDYzLjMyMjUwMDUsMTEuNDcxODc4MiA2MS4xNjA3NzI1LDExLjQ3MTg3ODIgQzU5LjA3NjgwNDUsMTEuNDcxODc4MiA1Ny40MjgyOTI1LDEyLjk0OTMxODIgNTcuNDI4MjkyNSwxNS40Njg3NDIyIEM1Ny40MjgyOTI1LDE3Ljg0ODE5ODIgNTguOTk5MDQ0NSwxOS4zNDExOTAyIDYxLjAzNjM1NjUsMTkuMzQxMTkwMiBaIE02MS4wOTg1NjQ1LDE4LjMxNDc1ODIgQzU5Ljc2MTA5MjUsMTguMzE0NzU4MiA1OC44MTI0MjA1LDE3LjA3MDU5ODIgNTguODEyNDIwNSwxNS40MjIwODYyIEM1OC44MTI0MjA1LDEzLjk5MTMwMjIgNTkuNTEyMjYwNSwxMi40OTgzMTAyIDYxLjEyOTY2ODUsMTIuNDk4MzEwMiBDNjIuNzQ3MDc2NSwxMi40OTgzMTAyIDYzLjM4NDcwODUsMTQuMTE1NzE4MiA2My4zODQ3MDg1LDE1LjM5MDk4MjIgQzYzLjM4NDcwODUsMTcuMDg2MTUwMiA2Mi40MDQ5MzI1LDE4LjMxNDc1ODIgNjEuMDk4NTY0NSwxOC4zMTQ3NTgyIFogTTY3LjMxMzAyOTIsMTkuMTcwMTE4MiBMNjcuMzEzMDI5MiwxNS4xNTc3MDIyIEM2Ny4zMTMwMjkyLDE0LjkyNDQyMjIgNjcuMzQ0MTMzMiwxNC43MDY2OTQyIDY3LjM3NTIzNzIsMTQuNTIwMDcwMiBDNjcuNTYxODYxMiwxMy40OTM2MzgyIDY4LjI0NjE0OTIsMTIuNzYyNjk0MiA2OS4yMTAzNzMyLDEyLjc2MjY5NDIgQzY5LjM5Njk5NzIsMTIuNzYyNjk0MiA2OS41MzY5NjUyLDEyLjc3ODI0NjIgNjkuNjc2OTMzMiwxMi44MDkzNTAyIEw2OS42NzY5MzMyLDExLjUxODUzNDIgQzY5LjU1MjUxNzIsMTEuNDg3NDMwMiA2OS40NDM2NTMyLDExLjQ3MTg3ODIgNjkuMjg4MTMzMiwxMS40NzE4NzgyIEM2OC4zNzA1NjUyLDExLjQ3MTg3ODIgNjcuNTQ2MzA5MiwxMi4xMDk1MTAyIDY3LjIwNDE2NTIsMTMuMTIwMzkwMiBMNjcuMTQxOTU3MiwxMy4xMjAzOTAyIEw2Ny4wOTUzMDEyLDExLjY0Mjk1MDIgTDY1Ljg5Nzc5NzIsMTEuNjQyOTUwMiBDNjUuOTQ0NDUzMiwxMi4zNDI3OTAyIDY1Ljk2MDAwNTIsMTMuMTA0ODM4MiA2NS45NjAwMDUyLDEzLjk5MTMwMjIgTDY1Ljk2MDAwNTIsMTkuMTcwMTE4MiBMNjcuMzEzMDI5MiwxOS4xNzAxMTgyIFogTTczLjQ5NjM4OTksMTkuMzI1NjM4MiBDNzQuNjkzODkzOSwxOS4zMjU2MzgyIDc1LjUxODE0OTksMTkuMDc2ODA2MiA3Ni4wMDAyNjE5LDE4Ljg1OTA3ODIgTDc1Ljc2Njk4MTksMTcuODc5MzAyMiBDNzUuMjUzNzY1OSwxOC4wOTcwMzAyIDc0LjY2Mjc4OTksMTguMjY4MTAyMiA3My42ODMwMTM5LDE4LjI2ODEwMjIgQzcyLjMxNDQzNzksMTguMjY4MTAyMiA3MS4xMzI0ODU5LDE3LjUwNjA1NDIgNzEuMTAxMzgxOSwxNS42NTUzNjYyIEw3Ni4zODkwNjE5LDE1LjY1NTM2NjIgQzc2LjQwNDYxMzksMTUuNTE1Mzk4MiA3Ni40MzU3MTc5LDE1LjI5NzY3MDIgNzYuNDM1NzE3OSwxNS4wMTc3MzQyIEM3Ni40MzU3MTc5LDEzLjYzMzYwNjIgNzUuNzgyNTMzOSwxMS40NzE4NzgyIDczLjMyNTMxNzksMTEuNDcxODc4MiBDNzEuMTMyNDg1OSwxMS40NzE4NzgyIDY5Ljc5NTAxMzksMTMuMjYwMzU4MiA2OS43OTUwMTM5LDE1LjUzMDk1MDIgQzY5Ljc5NTAxMzksMTcuODAxNTQyMiA3MS4xNzkxNDE5LDE5LjMyNTYzODIgNzMuNDk2Mzg5OSwxOS4zMjU2MzgyIFogTTc1LjExMzc5NzksMTQuNjc1NTkwMiBMNzEuMTE2OTMzOSwxNC42NzU1OTAyIEM3MS4yMjU3OTc5LDEzLjcyNjkxODIgNzEuODMyMzI1OSwxMi40NTE2NTQyIDczLjIxNjQ1MzksMTIuNDUxNjU0MiBDNzQuNzU2MTAxOSwxMi40NTE2NTQyIDc1LjEyOTM0OTksMTMuODA0Njc4MiA3NS4xMTM3OTc5LDE0LjY3NTU5MDIgWiIgaWQ9IkFwcFN0b3JlIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");
// CONCATENATED MODULE: ./public/images/svg/btt-google-mb.svg
/* harmony default export */ var btt_google_mb = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjExOHB4IiBoZWlnaHQ9IjQycHgiIHZpZXdCb3g9IjAgMCAxMTggNDIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2MiAoOTEzOTApIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPg0KICAgIDx0aXRsZT5Hcm91cCAyNzwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iIy1GT09URVItTWItMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0Mi4wMDAwMDAsIC0yMDguMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wMDAwMDAsIDAuMDAwMDAwKSIgaWQ9Ikdyb3VwLTM1Ij4NCiAgICAgICAgICAgICAgICA8Zz4NCiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTM0Ij4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSItLS1Eb3dubG9hZC1hcHAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCAxOTQuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNS4wMDAwMDAsIDE1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMi4wMDAwMDAsIDAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNi4wMDAwMDAsIDAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS00IiBzdHJva2U9IiMxNDFFRDIiIHN0cm9rZS13aWR0aD0iMC41NzEyMDk0MDgiIGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMTYiIGhlaWdodD0iNDAiIHJ4PSIxOS4wODcyODE4Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC4wMDAwMDAsIDcuMDAwMDAwKSIgZmlsbD0iIzE0MUVEMiI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAuMTY2MTI4LCAwLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTAsMi42MDgzNzA1OSBDMCwxLjAyMDc2OTQ0IDEuMTgzMjc1NDgsMCAyLjY1NTE0MzE5LDAgQzMuNjQxMjg1MDcsMCA0LjI4NTc2MDMxLDAuNDY4NTgwODgxIDQuNjg4MDgzNDUsMS4wNDM0NDI3MSBMMy45NjczMTM3MiwxLjQ1OTU5MTY2IEMzLjY5NDM1OTUsMS4wODEyMzE0OSAzLjIxNjIxNTc1LDAuNzg2NDc4OTk5IDIuNjU1MTQzMTksMC43ODY0Nzg5OTkgQzEuNjU0MzExMDYsMC43ODY0Nzg5OTkgMC45MTAzMjEyNjgsMS41NDI3MjY5NyAwLjkxMDMyMTI2OCwyLjYwODM3MDU5IEMwLjkxMDMyMTI2OCwzLjY1OTM3MTA1IDEuNjUzODM3MTgsNC40MzAyNjIxOCAyLjY1NTE0MzE5LDQuNDMwMjYyMTggQzMuMTcxMTk3MjUsNC40MzAyNjIxOCAzLjYyNjEyMDk1LDQuMTk1OTcxNzQgMy44NTM1ODI4LDMuOTc2Nzk2ODEgTDMuODUzNTgyOCwzLjE5Nzg3NTU3IEwyLjMzNjY5NjYsMy4xOTc4NzU1NyBMMi4zMzY2OTY2LDIuNDE5NDI2NjkgTDQuNzMzNTc1ODIsMi40MTk0MjY2OSBMNC43MzM1NzU4Miw0LjMwMTc4MDMzIEM0LjI0MDc0MTgyLDQuODUzOTY4ODkgMy41Mjc1NTQxNSw1LjIyNDI5ODk0IDIuNjU1MTQzMTksNS4yMjQyOTg5NCBDMS4xODMyNzU0OCw1LjIyNDI5ODk0IDAsNC4xODg4ODYzNCAwLDIuNjA4MzcwNTkgTDAsMi42MDgzNzA1OSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgcG9pbnRzPSI1Ljk3NTE0OTA5IDUuMDQzMzg1MTUgNS45NzUxNDkwOSAwIDkuNDQxMDk4OTkgMCA5LjQ0MTA5ODk5IDAuNzc4OTIxMjQzIDYuODYyMjUwMyAwLjc3ODkyMTI0MyA2Ljg2MjI1MDMgMi4wNzkzMjc2NiA5LjM4ODQ5ODQ0IDIuMDc5MzI3NjYgOS4zODg0OTg0NCAyLjg1ODI0ODkgNi44NjIyNTAzIDIuODU4MjQ4OSA2Ljg2MjI1MDMgNC4yNjQ5MzYyNyA5LjQ0MTA5ODk5IDQuMjY0OTM2MjcgOS40NDEwOTg5OSA1LjA0MzM4NTE1IDUuOTc1MTQ5MDkgNS4wNDMzODUxNSI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBwb2ludHM9IjExLjk4ODU2MTIgNS4wNDI5MTI3OSAxMS45ODg1NjEyIDAuNzc4OTIxMjQzIDEwLjQ1NjUxMDkgMC43Nzg5MjEyNDMgMTAuNDU2NTEwOSAwIDE0LjQwODE4NjYgMCAxNC40MDgxODY2IDAuNzc4OTIxMjQzIDEyLjg3NjYxMDIgMC43Nzg5MjEyNDMgMTIuODc2NjEwMiA1LjA0MjkxMjc5Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIHBvaW50cz0iMTcuMTc4NTUzNiA1LjA0MzM4NTE1IDE3LjE3ODU1MzYgMCAxOC4wNjU2NTQ4IDAgMTguMDY1NjU0OCA1LjA0MzM4NTE1Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIHBvaW50cz0iMjAuMjA0MzkxMiA1LjA0MjkxMjc5IDIwLjIwNDM5MTIgMC43Nzg5MjEyNDMgMTguNjcyMzQwOSAwLjc3ODkyMTI0MyAxOC42NzIzNDA5IDAgMjIuNjI0MDE2NiAwIDIyLjYyNDAxNjYgMC43Nzg5MjEyNDMgMjEuMDkxOTY2MyAwLjc3ODkyMTI0MyAyMS4wOTE5NjYzIDUuMDQyOTEyNzkiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNi4xNDEyNzczLDIuNjA4MzcwNTkgQzI2LjE0MTI3NzMsMS4xMDM0MzI0IDI3LjIxMDgyMTgsMCAyOC43MjgxODE5LDAgQzMwLjIzNzAxMjIsMCAzMS4zMTQ2MTI3LDEuMTAzOTA0NzYgMzEuMzE0NjEyNywyLjYwODM3MDU5IEMzMS4zMTQ2MTI3LDQuMTEyODM2NDIgMzAuMjM3MDEyMiw1LjIxNjc0MTE4IDI4LjcyODE4MTksNS4yMTY3NDExOCBDMjcuMjEwMzQ4LDUuMjE2NzQxMTggMjYuMTQxMjc3Myw0LjExMjgzNjQyIDI2LjE0MTI3NzMsMi42MDgzNzA1OSBMMjYuMTQxMjc3MywyLjYwODM3MDU5IFogTTMwLjQwNDI5MTQsMi42MDgzNzA1OSBDMzAuNDA0MjkxNCwxLjU2NDkyNzg4IDI5Ljc0NDE3ODIsMC43ODY0Nzg5OTkgMjguNzI4MTgxOSwwLjc4NjQ3ODk5OSBDMjcuNzA0MTI5NywwLjc4NjQ3ODk5OSAyNy4wNTE1OTg1LDEuNTY0OTI3ODggMjcuMDUxNTk4NSwyLjYwODM3MDU5IEMyNy4wNTE1OTg1LDMuNjQzNzgzMTggMjcuNzA0MTI5Nyw0LjQzMDI2MjE4IDI4LjcyODE4MTksNC40MzAyNjIxOCBDMjkuNzQ0MTc4Miw0LjQzMDI2MjE4IDMwLjQwNDI5MTQsMy42NDM3ODMxOCAzMC40MDQyOTE0LDIuNjA4MzcwNTkgTDMwLjQwNDI5MTQsMi42MDgzNzA1OSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgcG9pbnRzPSIzNS42NDMwMzI4IDUuMDQzMzg1MTUgMzMuMDAzNTI3NiAxLjQzNjkxODM5IDMzLjAwMzUyNzYgNS4wNDMzODUxNSAzMi4xMTY0MjY0IDUuMDQzMzg1MTUgMzIuMTE2NDI2NCAwIDMzLjAyNjc0NzYgMCAzNS42MTMxNzg0IDMuNDkzNTcyNzggMzUuNjEzMTc4NCAwIDM2LjUwMDc1MzUgMCAzNi41MDA3NTM1IDUuMDQzMzg1MTUiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA4Ljk2MjcyNCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4xNjYxMjgsIDAuNzQ2ODk0KSI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ1LjQ0MTQ5NywxMC44Mzc5MDcxIEw0NC42NzY2NTY1LDExLjU1NjgzODcgQzQ0LjUwMDM3MzYsMTEuNjUzNjcyNCA0NC4zMjQ1NjQ1LDExLjc2NjA5NCA0NC4xNDkyMjkzLDExLjg0NTkyMjggQzQzLjYxODAxMTIsMTIuMDg2MzUzOSA0My4wNzc3ODkzLDEyLjE0NjgxNiA0Mi41OTc3NSwxMi4xNDY4MTYgQzQyLjA4NjkwODYsMTIuMTQ2ODE2IDQxLjI4NjA1MzMsMTIuMTE0MjIzMiA0MC40Njk1NjAxLDExLjUyNTE5MDUgQzM5LjMzNDYyMDIsMTAuNzI3ODQ3MyAzOC44Mzg0NjkxLDkuMzU4NDc2MzMgMzguODM4NDY5MSw4LjE2NDgyMzIyIEMzOC44Mzg0NjkxLDUuNjkzNDM2OTYgNDAuODU2NzE5MSw0LjQ4MTM2MTgyIDQyLjUwMjUwMDMsNC40ODEzNjE4MiBDNDMuMDc4MjYzMSw0LjQ4MTM2MTgyIDQzLjY2OTE5MDEsNC42MjQ5NTkxOCA0NC4xNDk3MDMyLDQuOTI3NzQxNzkgQzQ0Ljk0ODY2Myw1LjQ1Mzk1MDU2IDQ1LjE1NTI3NDEsNi4xMzgzOTk4NSA0NS4yNjk5NTI4LDYuNTA1NDIzMzkgTDQxLjUxMDE5OCw4LjAxOTMzNjQxIEw0MC4yNzkwNjA4LDguMTE0NzUzMDkgQzQwLjY3NzU5MjksMTAuMTQwNzA0MSA0Mi4wNTI3ODkzLDExLjMxOTI0MTcgNDMuNTcyNTE4OCwxMS4zMTkyNDE3IEM0NC4zMzE2NzI3LDExLjMxOTI0MTcgNDQuODk1MTE0NywxMS4wNzI2Njk5IDQ1LjQxMjExNjUsMTAuODE3NTk1NiBDNDUuNDExNjQyNiwxMC44MTgwNjggNDUuNTE1NDIyMSwxMC43NjQyMTkgNDUuNDQxNDk3LDEwLjgzNzkwNzEgTDQ1LjQ0MTQ5NywxMC44Mzc5MDcxIFogTTQzLjE3MzUxMjgsNi44MDcyNjEyNyBDNDMuNDc5MTY0Nyw2LjY5NjcyOTA5IDQzLjYzNzQ0MDIsNi42MDA4NDAwNiA0My42Mzc0NDAyLDYuMzc5MzAzMzMgQzQzLjYzNzQ0MDIsNS43NDI1NjIzOCA0Mi45MTQ3NzQ5LDUuMDA3NTcwNTkgNDIuMDUyMzE1NCw1LjAwNzU3MDU5IEM0MS40MTMwNTI5LDUuMDA3NTcwNTkgNDAuMjE0MTM5NCw1LjUwMzU0ODM0IDQwLjIxNDEzOTQsNy4yMjUyOTk2NiBDNDAuMjE0MTM5NCw3LjQ5NDA3MjM2IDQwLjI0NTg4OTMsNy43ODAzMjIzOCA0MC4yNjI0NzUsOC4wNjY1NzIzOSBMNDMuMTczNTEyOCw2LjgwNzI2MTI3IEw0My4xNzM1MTI4LDYuODA3MjYxMjcgWiIgaWQ9IlNoYXBlIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTM3Ljg3NzEzOTksMTAuMDU4NDI4NyBDMzcuODc3MTM5OSwxMC42NzgxNjQ3IDM3Ljk4ODAyNzYsMTAuNzc0NTI2MSAzOC41MTM1NTkyLDEwLjgyMjcwNjggQzM4Ljc4NzQ2MTIsMTAuODU0ODI3MyAzOS4wNjA0MTU0LDEwLjg2OTQ3MDQgMzkuMzMxMDAwMiwxMC45MDExMTg1IEwzOC43Mzk1OTk0LDExLjI1MjA4MTggTDM1LjkyMTQ0MTksMTEuMjUyMDgxOCBDMzYuMjkxMDY3NCwxMC43NzQwNTM3IDM2LjM1NDU2NzIsMTAuNzI2ODE3OCAzNi4zNTQ1NjcyLDEwLjQwNzk3NDkgTDM2LjM1NDU2NzIsMTAuMDUyMjg4IEwzNi4zNDg0MDY4LDAuNTc1MzM0MTg3IEwzNS4xMDQwMDA5LDAuNTc1MzM0MTg3IEwzNi4zMDE0OTI4LDAgTDM4LjU4ODQzMjEsMCBDMzguMDkyNzU0OCwwLjI4NTc3NzY1NCAzNy45NDQ5MDQ2LDAuNDYwNTUwNzY1IDM3Ljg4MDkzMSwxLjAxNzkzNTI4IEwzNy44NzcxMzk5LDEwLjA1ODQyODcgTDM3Ljg3NzEzOTksMTAuMDU4NDI4NyBaIiBpZD0iU2hhcGUiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzMuNTk4ODI5OSw1LjA1ODExMzA4IEMzMy45NjU2MTIxLDUuMzU5MDA2MjUgMzQuNzMyMzQ4MSw1Ljk5NzE2NDI5IDM0LjczMjM0ODEsNy4yMDg3NjcwNyBDMzQuNzMyMzQ4MSw4LjM4OTE5NDExIDM0LjA2NDY1MjgsOC45NDU2MzM5IDMzLjM5MTI3MDksOS40NzIzMTUwMyBDMzMuMTg0NjU5Nyw5LjY3OTY4MDk3IDMyLjk0MzQ1NTQsOS45MDQ1MjQyMSAzMi45NDM0NTU0LDEwLjI1MjE4MSBDMzIuOTQzNDU1NCwxMC42MDQ1NjE0IDMzLjE4NTEzMzYsMTAuNzk1ODY3MSAzMy4zNTkwNDcyLDEwLjkzODUxOTcgTDMzLjkzNjcwNTUsMTEuMzgzMDEwMyBDMzQuNjM4OTkzOSwxMS45NzM5MzIzIDM1LjI3OTIwNDMsMTIuNTE1NzI5IDM1LjI3OTIwNDMsMTMuNjE2MzI3MiBDMzUuMjc5MjA0MywxNS4xMTYwNjk0IDMzLjgyMzQ0ODQsMTYuNjI3NjIwNyAzMS4wNzI1ODE3LDE2LjYyNzYyMDcgQzI4Ljc1NTMxNDEsMTYuNjI3NjIwNyAyNy42MzUwNjQ1LDE1LjUyNzk2NzEgMjcuNjM1MDY0NSwxNC4zNDg0ODQ4IEMyNy42MzUwNjQ1LDEzLjc3NDA5NTQgMjcuOTIxMjg3NCwxMi45NjExNjQyIDI4Ljg2NzYyMzQsMTIuNDA0NzI0NCBDMjkuODU4OTc4LDExLjgwMDU3NjMgMzEuMjAyNDI0NSwxMS43MTk4MDI4IDMxLjkyMTI5ODcsMTEuNjcyNTY2OCBDMzEuNjk2NjgwMiwxMS4zODM0ODI2IDMxLjQ0MDMxMTcsMTEuMDgwNyAzMS40NDAzMTE3LDEwLjU4NjYxMTcgQzMxLjQ0MDMxMTcsMTAuMzE2NDIxOSAzMS41MjE4MTg5LDEwLjE1NTM0NzIgMzEuNjAwNDgyOCw5Ljk2NTQ1ODYyIEMzMS40MjU2MjE1LDkuOTgxOTkxMjEgMzEuMjQ5MzM4NSw5Ljk5ODk5NjE3IDMxLjA4OTE2NzUsOS45OTg5OTYxNyBDMjkuMzkzMTU1MSw5Ljk5ODk5NjE3IDI4LjQzNDAyNDMsOC43Mzc3OTU2MSAyOC40MzQwMjQzLDcuNDk0NTQ0NzIgQzI4LjQzNDAyNDMsNi43NjE0NDIzOCAyOC43Njk1MzA1LDUuOTQ4NTExMjMgMjkuNDU4NTUwNCw1LjM1ODUzMzg5IEMzMC4zNzAyOTMzLDQuNjEwMzE2MDMgMzEuNDU3MzcxMyw0LjQ4MTM2MTgyIDMyLjMyMTI1MjUsNC40ODEzNjE4MiBMMzUuNjE2NjA2LDQuNDgxMzYxODIgTDM0LjU5MjA3OTksNS4wNTgxMTMwOCBMMzMuNTk4ODI5OSw1LjA1ODExMzA4IEwzMy41OTg4Mjk5LDUuMDU4MTEzMDggWiBNMzIuNDY1MzExNiwxMi4xMzQ1MzQ2IEMzMi4zMzQ1MjExLDEyLjExNzUyOTcgMzIuMjU1ODU3MiwxMi4xMTc1Mjk3IDMyLjA5NzU4MTcsMTIuMTE3NTI5NyBDMzEuOTUyNTc0NywxMi4xMTc1Mjk3IDMxLjA4ODY5MzYsMTIuMTQ4NzA1NCAzMC40MTk1NzY3LDEyLjM3MjYwNCBDMzAuMDY1NTg5MiwxMi41MDE1NTgyIDI5LjA0MjQ4NDcsMTIuODgyNzUyNSAyOS4wNDI0ODQ3LDE0LjAxNTQ3MTIgQzI5LjA0MjQ4NDcsMTUuMTQ1MzU1NyAzMC4xNDcwOTYzLDE1Ljk1OTcwNCAzMS44NTYzNzczLDE1Ljk1OTcwNCBDMzMuMzkxMjcwOSwxNS45NTk3MDQgMzQuMjA2ODE2NCwxNS4yMjYxMjkzIDM0LjIwNjgxNjQsMTQuMjM4NDI1IEMzNC4yMDYzNDI1LDEzLjQyNTQ5MzkgMzMuNjc4OTE1NCwxMi45OTY1OTEyIDMyLjQ2NTMxMTYsMTIuMTM0NTM0NiBMMzIuNDY1MzExNiwxMi4xMzQ1MzQ2IFogTTMyLjkyNTQ0OCw5LjEwNTc2Mzg2IEMzMy4yOTUwNzM1LDguNzM4MjY3OTcgMzMuMzI3Mjk3Myw4LjIzMDAwODg3IDMzLjMyNzI5NzMsNy45NDA5MjQ2OSBDMzMuMzI3Mjk3Myw2Ljc5NDUwNzU2IDMyLjY0MTU5NDYsNS4wMDg5ODc2NyAzMS4zMTIzNjQ0LDUuMDA4OTg3NjcgQzMwLjg5NzcyMDQsNS4wMDg5ODc2NyAzMC40NDg0ODMzLDUuMjE2ODI1OTYgMzAuMTkzNTM2NCw1LjUzNzA4NTg4IEMyOS45MjM0MjU1LDUuODY5MTU0NzkgMjkuODQyMzkyMiw2LjI5OTk0Njg5IDI5Ljg0MjM5MjIsNi43MTQyMDY0IEMyOS44NDIzOTIyLDcuNzgxNzM5NDYgMzAuNDY2NDkwNyw5LjU1MjE0MzgzIDMxLjg0MDczOTMsOS41NTIxNDM4MyBDMzIuMjQxMTY3LDkuNTUyMTQzODMgMzIuNjcyMzk2Nyw5LjM1ODAwMzk3IDMyLjkyNTQ0OCw5LjEwNTc2Mzg2IEwzMi45MjU0NDgsOS4xMDU3NjM4NiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjMuMzIxMTUzLDEyLjExNDIyMzIgQzIwLjc3OTI2NjgsMTIuMTE0MjIzMiAxOS40MTkyMzQ1LDEwLjE0MDcwNDEgMTkuNDE5MjM0NSw4LjM1NDcxMTg0IEMxOS40MTkyMzQ1LDYuMjY3MzU0MDcgMjEuMTI4OTg5NCw0LjQ4MTM2MTgyIDIzLjU2MDkzNTcsNC40ODEzNjE4MiBDMjUuOTExODQ4Nyw0LjQ4MTM2MTgyIDI3LjM4NDE5MDIsNi4zMTYwMDcxMiAyNy4zODQxOTAyLDguMjQyMjkwMjIgQzI3LjM4NDE5MDIsMTAuMTIzMjI2OCAyNS45Mjg5MDgzLDEyLjExNDIyMzIgMjMuMzIxMTUzLDEyLjExNDIyMzIgTDIzLjMyMTE1MywxMi4xMTQyMjMyIFogTTI1LjMyMDkyMTcsMTAuODI0NjgxIEMyNS43MDc2MDY5LDEwLjMxNDUzMjUgMjUuODAxNDM0OSw5LjY3Nzc5MTUzIDI1LjgwMTQzNDksOS4wNTcxMTA4MSBDMjUuODAxNDM0OSw3LjY1MzI1NzYgMjUuMTMwNDIyNCw0Ljk3NTkyMjQ5IDIzLjE0NzIzOTQsNC45NzU5MjI0OSBDMjIuNjE5ODEyMyw0Ljk3NTkyMjQ5IDIyLjA4ODU5NDEsNS4xODEzOTg5OCAyMS43MDU3LDUuNTE3MjQ2NzcgQzIxLjA4MTEyNzcsNi4wNzUxMDM2NSAyMC45Njk3NjYxLDYuNzc1NjEzMTcgMjAuOTY5NzY2MSw3LjQ2MzM2ODk4IEMyMC45Njk3NjYxLDkuMDM4MjE2NDIgMjEuNzUwMjQ0NiwxMS42MzU3MjI3IDIzLjY4ODQwOTEsMTEuNjM1NzIyNyBDMjQuMzE0NDAzMSwxMS42MzU3MjI3IDI0Ljk1MjcxNzksMTEuMzMzODg0OCAyNS4zMjA5MjE3LDEwLjgyNDY4MSBMMjUuMzIwOTIxNywxMC44MjQ2ODEgWiIgaWQ9IlNoYXBlIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1LjEwMzkwMTMsMTIuMTE0MjIzMiBDMTIuNTYxNTQxMywxMi4xMTQyMjMyIDExLjIwMzQwNDUsMTAuMTQwNzA0MSAxMS4yMDM0MDQ1LDguMzU0NzExODQgQzExLjIwMzQwNDUsNi4yNjczNTQwNyAxMi45MTM2MzMzLDQuNDgxMzYxODIgMTUuMzQ0NjMxOCw0LjQ4MTM2MTgyIEMxNy42OTQxMjMxLDQuNDgxMzYxODIgMTkuMTY1MDQzMSw2LjMxNjAwNzEyIDE5LjE2NTA0MzEsOC4yNDIyOTAyMiBDMTkuMTY1NTE3LDEwLjEyMzIyNjggMTcuNzEyMTMwNSwxMi4xMTQyMjMyIDE1LjEwMzkwMTMsMTIuMTE0MjIzMiBMMTUuMTAzOTAxMywxMi4xMTQyMjMyIFogTTE3LjEwNDE0NCwxMC44MjQ2ODEgQzE3LjQ4Nzk4NTgsMTAuMzE0NTMyNSAxNy41ODM3MDk0LDkuNjc3NzkxNTMgMTcuNTgzNzA5NCw5LjA1NzExMDgxIEMxNy41ODM3MDk0LDcuNjUzMjU3NiAxNi45MTA4MDE0LDQuOTc1OTIyNDkgMTQuOTI5NTEzOSw0Ljk3NTkyMjQ5IEMxNC40MDAxOTEzLDQuOTc1OTIyNDkgMTMuODc0NjU5Niw1LjE4MTM5ODk4IDEzLjQ5MDgxNzcsNS41MTcyNDY3NyBDMTIuODY1Mjk3Nyw2LjA3NTEwMzY1IDEyLjc1NDQxLDYuNzc1NjEzMTcgMTIuNzU0NDEsNy40NjMzNjg5OCBDMTIuNzU0NDEsOS4wMzgyMTY0MiAxMy41MzgyMDU2LDExLjYzNTcyMjcgMTUuNDczMDUzLDExLjYzNTcyMjcgQzE2LjA5NzYyNTMsMTEuNjM1NzIyNyAxNi43MzQ5OTIzLDExLjMzMzg4NDggMTcuMTA0MTQ0LDEwLjgyNDY4MSBMMTcuMTA0MTQ0LDEwLjgyNDY4MSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAuMzI5MTM3MywxMC45OTgwNDUxIEw4LjE4NTMwOTM1LDExLjQ4NjkzNzUgQzcuMzE2Njg5NDIsMTEuNjIzNDQ5NSA2LjUzNjY4NDg0LDExLjc0MzkwMTIgNS43MTA3MTQsMTEuNzQzOTAxMiBDMS41NzUxNzMyOSwxMS43NDM5MDEyIDAsOC43MDk0NjIxIDAsNi4zMzUzODE5NSBDMCwzLjQzNTA5MzAzIDIuMjMyNDQzMjYsMC43NDY4OTM2MzYgNi4wNTUyMjM5MywwLjc0Njg5MzYzNiBDNi44NjQxMzUxMiwwLjc0Njg5MzYzNiA3LjY0MjcxODA3LDAuODY1NDU1OTM2IDguMzUxNjQwODMsMS4wNTc3MDYzNiBDOS40NzUyMDc1OCwxLjM3Mjc3MDMyIDEwLjAwMDI2NTMsMS43NjAxMDUzMiAxMC4zMjkxMzczLDEuOTg3NzgyNzIgTDkuMDgzNzgzNjUsMy4xNjY3OTI2OCBMOC41NTg3MjU4OCwzLjI4MzkzNzkgTDguOTMzMDkwMTcsMi42ODg3NjQ2MSBDOC40MjYwMzk4MSwyLjE5NTE0ODY2IDcuNDkzOTIwMTEsMS4yODM5NjY2OCA1LjcyNDkzMDM3LDEuMjgzOTY2NjggQzMuMzU5ODAxMDQsMS4yODM5NjY2OCAxLjU3NTE3MzI5LDMuMDc2MDk5NjEgMS41NzUxNzMyOSw1LjY5MjUwMDMyIEMxLjU3NTE3MzI5LDguNTAyNTY4NTIgMy42MTI4NTIzNCwxMS4xNDU4OTM3IDYuODc5NzczMTIsMTEuMTQ1ODkzNyBDNy44Mzk4NTE2NywxMS4xNDU4OTM3IDguMzM0MTA3MzEsMTAuOTUzNjQzMyA4Ljc4Mjg3MDU4LDEwLjc3NDE0NjYgTDguNzgyODcwNTgsOC4zNjUxMTE4MyBMNi41MTk2MjUyLDguNDg2NTA4MjkgTDcuNzE5NDg2NDQsNy44NDQwOTkwMiBMMTAuODk1ODk2NCw3Ljg0NDA5OTAyIEwxMC41MDc3ODk2LDguMjE2NzkwODcgQzEwLjQwMjU4ODUsOC4zMDU1OTQ1IDEwLjM4ODg0Niw4LjMzNTgyNTUzIDEwLjM1OTQ2NTUsOC40NTQ4NjAxOSBDMTAuMzQzODI3NSw4LjU5MDg5OTggMTAuMzI5NjExMSw5LjAyMzU4MTM0IDEwLjMyOTYxMTEsOS4xNzU2ODExOCBMMTAuMzI5NjExMSwxMC45OTgwNDUxIEwxMC4zMjkxMzczLDEwLjk5ODA0NTEgWiIgaWQ9IlNoYXBlIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTUwLjEwMzg5MTIsMTAuOTM5NDY0NCBMNTAuMTAzODkxMiwxNC45OTk4Njg5IEw0OS4yOTQ5OCwxNC45OTk4Njg5IEw0OS4yOTQ5OCw0LjY2ODQxNjI4IEw1MC4xMDM4OTEyLDQuNjY4NDE2MjggTDUwLjEwMzg5MTIsNS44NDQ1OTIwOCBDNTAuNjMwMzcwNiw1LjA4NDU2NTIzIDUxLjU5MzI5MjQsNC40ODEzNjE4MiA1Mi43MTIxMjA0LDQuNDgxMzYxODIgQzU0LjcxNzU3NTcsNC40ODEzNjE4MiA1Ni4wNjkwNzgxLDUuOTk4MTA5MDEgNTYuMDY5MDc4MSw4LjM5OTExMzY2IEM1Ni4wNjkwNzgxLDEwLjc4NDA1ODEgNTQuNzE3NTc1NywxMi4zMzI0NTM0IDUyLjcxMjEyMDQsMTIuMzMyNDUzNCBDNTEuNjU2MzE4MywxMi4zMzI5MjU3IDUwLjcxMDQ1NjEsMTEuNzkwMTg0NCA1MC4xMDM4OTEyLDEwLjkzOTQ2NDQgTDUwLjEwMzg5MTIsMTAuOTM5NDY0NCBaIE01NS4xOTk5ODQzLDguMzk5NTg2MDIgQzU1LjE5OTk4NDMsNi41ODk5NzU3OCA1NC4yNTM2NDgzLDUuMjA5NzQwNTcgNTIuNTc1NjQzMyw1LjIwOTc0MDU3IEM1MS41MzM1ODM3LDUuMjA5NzQwNTcgNTAuNTM3MDE2NSw2LjAyNjQ1MDU5IDUwLjEwMzg5MTIsNi43Mzc4MjQzOSBMNTAuMTAzODkxMiwxMC4wNDQ4MTUxIEM1MC41MzcwMTY1LDEwLjc1ODA3ODMgNTEuNTMzNTgzNywxMS42MDQwNzQ2IDUyLjU3NTY0MzMsMTEuNjA0MDc0NiBDNTQuMjUzNjQ4MywxMS42MDQwNzQ2IDU1LjE5OTk4NDMsMTAuMjEyMDMwNCA1NS4xOTk5ODQzLDguMzk5NTg2MDIgTDU1LjE5OTk4NDMsOC4zOTk1ODYwMiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIHBvaW50cz0iNTcuNTEwODEgMTEuODI0NzY3NiA1Ny41MTA4MSAxLjQ5Mzc4NzI3IDU4LjMxOTI0NzMgMS40OTM3ODcyNyA1OC4zMTkyNDczIDExLjgyNDc2NzYgNTcuNTEwODEgMTEuODI0NzY3NiI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02NS4yMTE1MjMsMTIuMTI2NTA0NSBDNjUuMTU3NTAwOCwxMS44NjcxNzkgNjUuMTE2NzQ3MiwxMS42MzkwMjkyIDY1LjA4Njg5MjksMTEuNDQ3NzIzNSBDNjUuMDYxNzc3MywxMS4yNTczNjI2IDY1LjA0ODAzNDgsMTEuMDYyNzUwMyA2NS4wNDgwMzQ4LDEwLjg2NDgzMTYgQzY0Ljc3MDM0MTgsMTEuMjcwNTg4NiA2NC4zNzc0OTYyLDExLjYwODMyNTkgNjMuODc1NjU4NSwxMS44NzQ3MzY4IEM2My4zNzMzNDY5LDEyLjE0MjA5MjQgNjIuODk2NjI0OCwxMi4yNzM4ODA4IDYyLjI0MTcyNDMsMTIuMjczODgwOCBDNjEuNDUzNjYzNywxMi4yNzM4ODA4IDYwLjg0MjM2LDEyLjA4MDY4NTYgNjAuNDA1NDQzNywxMS42ODg2MjcgQzU5Ljk3MDQyMjksMTEuMjk3MDQwOCA1OS43NTE0OTA5LDEwLjc2NjU4MDggNTkuNzUxNDkwOSwxMC4wOTUzNTc2IEM1OS43NTE0OTA5LDkuNDI1MDc5MDYgNjAuMDY4NTE1OSw4Ljg4MDkyMDYyIDYwLjcwMDY3MDIsOC40NjQ3NzE2NyBDNjEuMzMyODI0Niw4LjA0NjczMzI4IDYyLjE1MDI2NTYsNy44MzkzNjczNSA2My4xNjEwNDkyLDcuODM5MzY3MzUgTDY1LjA0NzU2MDksNy44MzkzNjczNSBMNjUuMDQ3NTYwOSw2LjkwOTc2MzM0IEM2NS4wNDc1NjA5LDYuMzc0NTc5NzMgNjQuODY0MTY5OCw1Ljk1NDE3OTU1IDY0LjQ5OTI4MzEsNS42NDg1NjI3OCBDNjQuMTMyNTAwOSw1LjM0MzQxODM4IDYzLjYxNzg2ODQsNS4xODg0ODQzOCA2Mi45NTAxNzMxLDUuMTg4NDg0MzggQzYyLjM0MDI5MTEsNS4xODg0ODQzOCA2MS44NDU1NjE1LDUuMzI5NzE5OTUgNjEuNDY4ODI3OSw1LjYwNDYzMzMzIEM2MS4wOTU0MTEzLDUuODg1MjE1MDIgNjAuOTA3NzU1Myw2LjIzMjg3MTgxIDYwLjkwNzc1NTMsNi42NTE4NTQ5MSBMNjAuMDc5ODg5LDYuNjUxODU0OTEgTDYwLjA2MjgyOTMsNi42MTE3MDQzMyBDNjAuMDMyNTAxMSw2LjA0NzIzNDQyIDYwLjI5MjE4NjcsNS41NTEyNTY2NyA2MC44NDMzMDc4LDUuMTIzNzcxMDkgQzYxLjM5MTU4NTYsNC42OTYyODU1MSA2Mi4xMTA5MzM3LDQuNDgxMzYxODIgNjIuOTk1NjY1NSw0LjQ4MTM2MTgyIEM2My44NzcwODAyLDQuNDgxMzYxODIgNjQuNTkwNzQxNyw0LjY5Mjk3ODk5IDY1LjEyOTA2ODEsNS4xMTUyNjg2MiBDNjUuNjY2NDQ2Nyw1LjUzMzMwNyA2NS45MzYwODM4LDYuMTM3NDU1MTMgNjUuOTM2MDgzOCw2LjkyNzI0MDY1IEw2NS45MzYwODM4LDEwLjYxNjg0MjcgQzY1LjkzNjA4MzgsMTAuODgxODM2NiA2NS45NDg0MDQ2LDExLjEzNzg1NTUgNjUuOTgyMDUsMTEuMzg3MjYxNSBDNjYuMDE2MTY5MywxMS42MzcxMzk4IDY2LjA3MDY2NTQsMTEuODg2NTQ1OCA2Ni4xNDMxNjg4LDEyLjEyNzQ0OTIgTDY1LjIxMTUyMywxMi4xMjc0NDkyIEw2NS4yMTE1MjMsMTIuMTI2NTA0NSBaIE02Mi4zNDEyMzg4LDExLjUzODg4OSBDNjMuMDI4MzYzMSwxMS41Mzg4ODkgNjMuNTIyMTQ0OSwxMS4zODU4NDQ0IDY0LjAyNzI5OTgsMTEuMDgzMDYxOCBDNjQuNTI4NjYzNiwxMC43ODE2OTYzIDY0Ljg2OTM4MjUsMTAuMzg5MTY1MyA2NS4wNDg1MDg3LDkuOTEzOTcxNDEgTDY1LjA0ODUwODcsOC40Nzc5OTc3NCBMNjMuMTUyOTkzMyw4LjQ3Nzk5Nzc0IEM2Mi40Mjg5MDY0LDguNDc3OTk3NzQgNjEuODI5NDQ5Nyw4LjYzNzY1NTM0IDYxLjM1Nzk0MDIsOC45NjAyNzcwNiBDNjAuODg1NDgzLDkuMjgxNDgxNjkgNjAuNjQ1NzAwMyw5LjY3MDIzMzc3IDYwLjY0NTcwMDMsMTAuMTIyMjgyMSBDNjAuNjQ1NzAwMywxMC41NDgzNTA2IDYwLjc5NzM0MTUsMTAuODg5ODY2NyA2MS4wOTkyMDI0LDExLjE0ODI0NzUgQzYxLjQwMTA2MzIsMTEuNDA5NDYyNCA2MS44MTQyODU1LDExLjUzODg4OSA2Mi4zNDEyMzg4LDExLjUzODg4OSBMNjIuMzQxMjM4OCwxMS41Mzg4ODkgWiIgaWQ9IlNoYXBlIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY4LjI4NjI0MTQsMTQuMTQ0NDI1NCBDNjguNDU4NzMzMywxNC4yMjA5NDc3IDY4Ljc1Mzk1OTgsMTQuMjY4NjU2IDY4Ljk0MTYxNTgsMTQuMjY4NjU2IEM2OS40MzYzNDUzLDE0LjI2ODY1NiA2OS43ODA4NTUzLDE0LjA2Njk1ODQgNzAuMDkwMjk4MiwxMy4zNTQxNjc1IEw3MC42ODAyNzczLDEyLjAyMjExMyBMNjcuNDkzNDQyMSw0LjQ4MTM2MTgyIEw2OC4zOTU3MDc0LDQuNDgxMzYxODIgTDcxLjEyOTA0MDYsMTEuMDE1OTg2NyBMNzMuODM1ODM2Niw0LjQ4MTM2MTgyIEw3NC43NTA4OTY2LDQuNDgxMzYxODIgTDcwLjg2NDYxNjIsMTMuNjA0MDQ1OCBDNzAuNDYxMzQ1MywxNC41NDQwNDE4IDY5LjgyNjgyMTUsMTQuOTk2MDkwMSA2OC45NTUzNTgzLDE0Ljk5NjA5MDEgQzY4LjY5Mzc3NzIsMTQuOTk2MDkwMSA2OC4zNDkyNjczLDE0Ljk0OTMyNjQgNjguMTQ2OTIxLDE0Ljg4NzkxOTcgTDY4LjI4NjI0MTQsMTQuMTQ0NDI1NCBMNjguMjg2MjQxNCwxNC4xNDQ0MjU0IFoiIGlkPSJQYXRoIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMC40ODE1NTU5MTEsMTYuNDA1NTc0NiBDMC4xODk4NjI1MjksMTYuMzI3MDA0MyAwLDE2LjAzNzQwNDYgMCwxNS41ODkyNjIyIEwwLDAuNzk2NzQxMjczIEMwLDAuMzgxNjkzMTM1IDAuMTYwNzU5Mzg2LDAuMTAxNzczNDA3IDAuNDE1NTk0MDc1LDEuMjc4OTc2OTJlLTEzIEwwLjQxNTU5NDA3NSwxLjI3ODk3NjkyZS0xMyBMNy42ODQ5NDMzNSw4LjI0MzY2MTc0IEwwLjQ4MTU1NTkxMSwxNi40MDU1NzQ2IEwwLjQ4MTU1NTkxMSwxNi40MDU1NzQ2IFogTTEuNDgyMjM0MDgsMTYuMDkxNTc2OCBMMTAuMjMyMjM2NSwxMS4xMzIzNjkxIEw4LjEwMTA0OTAxLDguNzE1NTM4MTMgTDEuNDgyMjM0MDgsMTYuMDkxNTc2OCBMMS40ODIyMzQwOCwxNi4wOTE1NzY4IFogTTEwLjI5MjQ4OTgsNS4yODkxMzk3NSBMMS42NjQ0MjgwOSwwLjM5NzkwNzQzNyBMOC4xMTM2NjUzMyw3Ljc1Nzg5MTQ4IEwxMC4yOTI0ODk4LDUuMjg5MTM5NzUgTDEwLjI5MjQ4OTgsNS4yODkxMzk3NSBaIE0xMC44Nzc4OTY3LDUuNjIxMDA1OSBMMTQuMjU3ODk2Miw3LjUzNzEyMTM5IEMxNC44OTc4NTg3LDcuODk5OTE0OTEgMTQuOTAzNzExMSw4LjQ4NDczNDEgMTQuMjU3ODk2Miw4Ljg1MDc2MDMxIEwxMC43OTIzODYxLDEwLjgxNDg5NTEgTDguNTMxOTkxOTcsOC4yMzUyOTMyNyBMMTAuODc3ODk2Nyw1LjYyMTAwNTkgTDEwLjg3Nzg5NjcsNS42MjEwMDU5IFoiIGlkPSJnb29nbGUtcGxheSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+");
// EXTERNAL MODULE: external "react-html-parser"
var external_react_html_parser_ = __webpack_require__("gifY");
var external_react_html_parser_default = /*#__PURE__*/__webpack_require__.n(external_react_html_parser_);

// CONCATENATED MODULE: ./components/layout/Widget.js
var __jsx = external_react_default.a.createElement;



function Widget({
  data
}) {
  return __jsx("div", {
    className: "widget widget-info"
  }, __jsx("div", null, __jsx("a", {
    href: "./",
    className: "logo"
  }, __jsx("img", {
    src: "/static/images/logo-blue.svg",
    alt: ""
  }))), external_react_html_parser_default()(data.footer_brief), __jsx("div", {
    className: "call"
  }, __jsx("a", {
    href: `tel:${data.footer_address}`
  }, __jsx("i", {
    className: "icon-phone-1"
  }), " ", data.footer_address)));
}

/* harmony default export */ var layout_Widget = (Widget);
// EXTERNAL MODULE: ./components/common/index.js + 34 modules
var common = __webpack_require__("lCwK");

// CONCATENATED MODULE: ./components/layout/WidgetMb.js
var WidgetMb_jsx = external_react_default.a.createElement;




function WidgetMb_Widget({
  data,
  socialLink
}) {
  return WidgetMb_jsx("div", {
    className: "widget widget-info"
  }, WidgetMb_jsx("div", null, WidgetMb_jsx("a", {
    href: "./",
    className: "logo"
  }, WidgetMb_jsx("img", {
    src: "/static/images/logo-blue.svg",
    alt: ""
  }))), external_react_html_parser_default()(data.footer_brief), WidgetMb_jsx("div", {
    className: "call"
  }, WidgetMb_jsx("a", {
    href: `tel:${data.footer_address}`,
    className: "phone"
  }, WidgetMb_jsx("i", {
    className: "icon-phone-1"
  }), " ", data.footer_address), WidgetMb_jsx(common["g" /* Social */], {
    data: socialLink
  })));
}

/* harmony default export */ var WidgetMb = (WidgetMb_Widget);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./components/layout/ModalDrawer/submenu.js
var submenu_jsx = external_react_default.a.createElement;




function SubMenu({
  menu
}) {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(external_react_["useState"])(false);
  const {
    0: indexMenu,
    1: setIndexMenu
  } = Object(external_react_["useState"])(null);

  const nestChild = items => {
    return Object(external_lodash_["map"])(items, item => submenu_jsx("li", {
      key: item.id,
      className: external_classnames_default()({
        children: activeTab === false && indexMenu === item.id,
        'children parent-showsub': activeTab === true && indexMenu === item.id
      })
    }, item.children.length > 0 && submenu_jsx("span", {
      className: "showsubmenu icon-arrow-2 ib",
      onClick: () => {
        setActiveTab(!activeTab);
        setIndexMenu(item.id);
      }
    }), submenu_jsx("a", {
      href: `/page/${item.slugPages}`
    }, submenu_jsx("span", null, item.name)), item.children.length > 0 && submenu_jsx("ul", {
      style: {
        display: activeTab && indexMenu === item.id ? 'block' : 'none'
      }
    }, submenu_jsx(SubMenu, {
      menu: item.children
    }))));
  };

  return nestChild(menu);
}

/* harmony default export */ var submenu = (SubMenu);
// CONCATENATED MODULE: ./components/layout/ModalDrawer/index.js
var ModalDrawer_jsx = external_react_default.a.createElement;





function ModalDrawer({
  menu
}) {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(external_react_["useState"])(false);
  const {
    0: indexMenu,
    1: setIndexMenu
  } = Object(external_react_["useState"])(null);

  const nestChild = items => {
    return Object(external_lodash_["map"])(items, item => ModalDrawer_jsx("li", {
      key: item.id,
      className: external_classnames_default()({
        children: activeTab === false && indexMenu === item.id,
        'children parent-showsub': activeTab === true && indexMenu === item.id
      })
    }, item.children.length > 0 && ModalDrawer_jsx("span", {
      className: "showsubmenu icon-arrow-2 ib",
      onClick: () => {
        setActiveTab(!activeTab);
        setIndexMenu(item.id);
      }
    }), ModalDrawer_jsx("a", {
      href: `/page/${item.slugPages}`
    }, ModalDrawer_jsx("span", null, item.name)), item.children.length > 0 && ModalDrawer_jsx("ul", {
      style: {
        display: activeTab && indexMenu === item.id ? 'block' : 'none'
      }
    }, ModalDrawer_jsx(submenu, {
      menu: item.children
    }))));
  };

  return ModalDrawer_jsx("div", {
    className: "wrap-menu-mb"
  }, ModalDrawer_jsx("div", {
    className: "wrapul main"
  }, ModalDrawer_jsx("div", {
    className: "inner"
  }, ModalDrawer_jsx("ul", {
    className: "menu"
  }, nestChild(menu)))));
}

/* harmony default export */ var layout_ModalDrawer = (ModalDrawer);
// EXTERNAL MODULE: external "react-sticky"
var external_react_sticky_ = __webpack_require__("325u");

// EXTERNAL MODULE: ./store/actions.js
var actions = __webpack_require__("qzSc");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./styles/custom.css
var custom = __webpack_require__("cqJL");

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__("MQhX");

// EXTERNAL MODULE: ./utils/localStorage.js
var localStorage = __webpack_require__("8WVE");

// EXTERNAL MODULE: ./i18n.js
var i18n_0 = __webpack_require__("k7Sn");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// CONCATENATED MODULE: ./components/layout/index.js
var layout_jsx = external_react_default.a.createElement;



























function Layout({
  title,
  children,
  settingFooter,
  socialLink,
  getSettingFooter,
  getSocialLink,
  menuHeader,
  menuNav,
  menuFooterTop,
  menuFooterBottom,
  menuFooterMain,
  getMenuHeader,
  getMenuNav,
  getMenuFooterTop,
  getMenuFooterMain,
  getMenuFooterBottom
}) {
  const {
    0: activeDrawer,
    1: setActiveDrawwe
  } = Object(external_react_["useState"])(false);
  const {
    0: flag,
    1: setFlag
  } = Object(external_react_["useState"])('vn');
  Object(external_react_["useEffect"])(() => {
    getMenuHeader();
    getMenuNav();
    getMenuFooterTop();
    getMenuFooterMain();
    getMenuFooterBottom();
    getSettingFooter();
    getSocialLink();
  }, []);
  Object(external_react_["useEffect"])(() => {
    setFlag(Object(localStorage["a" /* getFlag */])());
  }, [localStorage["a" /* getFlag */]]);
  const {
    i18n,
    t
  } = Object(external_react_i18next_["useTranslation"])();

  const nestChild = items => {
    return Object(external_lodash_["map"])(items, item => layout_jsx("li", {
      key: item.id,
      className: item.children.length > 0 ? 'children parent-showsub' : 'no-children'
    }, layout_jsx("a", {
      href: `/page/${item.slugPages}`
    }, layout_jsx("span", null, item.name)), layout_jsx("div", {
      className: "wrapul"
    }, item.children.length > 0 && layout_jsx("ul", null, nestChild(item.children), " "))));
  };

  const footerItem = data => {
    return Object(external_lodash_["map"])(data, (item, index) => {
      if (item.children.length > 0) {
        return layout_jsx("div", {
          className: "widget",
          style: {
            marginTop: 20
          },
          key: index
        }, layout_jsx("h4", {
          className: "widget-title"
        }, item.name), layout_jsx("ul", {
          className: "menu"
        }, footerItem(item.children)));
      }

      return layout_jsx("li", {
        key: index
      }, layout_jsx("a", {
        className: item.children.length > 0 ? 'title' : '',
        href: `/page/${item.slugPages}`
      }, item.name));
    });
  };

  const renderFooter = items => {
    return Object(external_lodash_["map"])(items, (values, key) => {
      return layout_jsx("div", {
        className: "col-md-3 col-6 col-lg-2  efch-2 ef-img-t",
        key: key
      }, layout_jsx("div", {
        className: "widget"
      }, layout_jsx("h4", {
        className: "widget-title"
      }, values.name), layout_jsx("ul", {
        className: "menu"
      }, footerItem(values.children))), key === items.length - 1 && layout_jsx(common["g" /* Social */], {
        data: socialLink
      }));
    });
  };

  const renderFooterMobile = items => {
    return Object(external_lodash_["map"])(items, (values, key) => {
      return layout_jsx("div", {
        className: "col-md-3 col-6  efch-2 ef-img-t",
        key: key
      }, layout_jsx("div", {
        className: "widget"
      }, layout_jsx("h4", {
        className: "widget-title"
      }, values.name), layout_jsx("ul", {
        className: "menu"
      }, footerItem(values.children))));
    });
  };

  const changeLang = (lang, flags) => {
    i18n.changeLanguage(lang);
    setFlag(flags);
    Object(localStorage["c" /* setLang */])(lang, flags);
  };

  return layout_jsx("body", {
    className: external_classnames_default()({
      showMenu: activeDrawer
    })
  }, layout_jsx("div", null, layout_jsx(external_react_sticky_["StickyContainer"], null, layout_jsx("div", null, layout_jsx(head_default.a, null, layout_jsx("title", null, title || ''), layout_jsx("link", {
    rel: "icon",
    href: "https://www.mbbank.com.vn/images/icons/favicon.ico",
    type: "image/x-icon"
  }), layout_jsx("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
    integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
    crossOrigin: "anonymous"
  }), layout_jsx("script", {
    src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
    integrity: "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
    crossOrigin: "anonymous"
  }), layout_jsx("script", {
    src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
    integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
    crossOrigin: "anonymous"
  }), layout_jsx("script", {
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
    integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
    crossOrigin: "anonymous"
  })), layout_jsx("div", {
    id: "wrapper"
  }, layout_jsx("div", {
    id: "panel"
  }, layout_jsx("div", {
    className: "container"
  }, layout_jsx("div", {
    className: "row"
  }, layout_jsx("div", {
    className: "col-md-5"
  }, layout_jsx("ul", {
    className: "menu line"
  }, Object(external_lodash_["map"])(menuHeader.sort((a, b) => a.position - b.position), // eslint-disable-next-line consistent-return
  (values, key) => {
    if (key < 2) {
      return layout_jsx("li", {
        key: key
      }, layout_jsx("a", {
        href: `/page/${values.slugPages}`
      }, layout_jsx("img", {
        src: key === 0 ? pin : bieuphi,
        alt: key === 0 ? 'pin_icon' : 'bietphiIcon',
        width: "15",
        className: "mr-2"
      }), values.name));
    }
  }))), layout_jsx("div", {
    className: "col-md-7"
  }, layout_jsx("ul", {
    className: "menu line text-right"
  }, Object(external_lodash_["map"])(menuHeader.sort((a, b) => a.position - b.position), // eslint-disable-next-line consistent-return
  (values, key) => {
    if (key >= 2) {
      return layout_jsx("li", {
        key: key
      }, layout_jsx("a", {
        href: `/page/${values.slugPages}`
      }, values.name));
    }
  }), layout_jsx("li", null, layout_jsx("div", {
    className: "dropdown language"
  }, layout_jsx("div", {
    className: "title"
  }, layout_jsx("span", null, layout_jsx("img", {
    src: `/static/flags/${flag}.png`,
    alt: ""
  })), layout_jsx("i", {
    className: "icon-arrow-2 ib"
  })), layout_jsx("div", {
    className: "content"
  }, layout_jsx("div", {
    className: "inner"
  }, layout_jsx("ul", {
    className: "menu"
  }, layout_jsx("li", {
    className: flag === 'gb' ? 'lang-en active' : 'lang-en'
  }, layout_jsx("a", {
    onClick: () => changeLang('en', 'gb'),
    title: "English (en)"
  }, layout_jsx("img", {
    src: "/static/flags/gb.png",
    alt: ""
  }), " ", layout_jsx("span", null, "English"))), layout_jsx("li", {
    className: flag === 'vn' ? 'lang-vi active' : 'lang-vi'
  }, layout_jsx("a", {
    onClick: () => changeLang('vi', 'vn'),
    title: "Ti\u1EBFng Vi\u1EC7t (vi)"
  }, layout_jsx("img", {
    src: "/static/images/flags/vn.png",
    alt: ""
  }), layout_jsx("span", null, "Ti\u1EBFng Vi\u1EC7t"))))))))))))), layout_jsx(external_react_sticky_["Sticky"], {
    topOffset: 40
  }, ({
    style
  }) => layout_jsx("div", {
    className: "setzindex",
    style: style
  }, layout_jsx("header", {
    id: "header",
    role: "banner"
  }, layout_jsx("div", {
    className: "container"
  }, layout_jsx("a", {
    href: "/",
    id: "logo"
  }, layout_jsx("img", {
    src: logo,
    alt: "logo"
  })), layout_jsx("div", {
    className: "wrap-menu-header"
  }, layout_jsx("ul", {
    className: "menu-top-header",
    "data-style": "1"
  }, nestChild(menuNav))), layout_jsx("div", {
    className: "group-header"
  }, layout_jsx("div", {
    className: "item ilogin"
  }, layout_jsx("ul", {
    className: "menu line"
  }, layout_jsx("li", null, layout_jsx("a", {
    href: "#"
  }, t('registration'))), layout_jsx("li", null, layout_jsx("a", {
    href: "#"
  }, t('login'))))), layout_jsx("div", {
    className: "item ilang"
  }, layout_jsx("div", {
    className: "dropdown language"
  }, layout_jsx("div", {
    className: "title"
  }, layout_jsx("span", null, layout_jsx("img", {
    src: `/static/flags/${flag}.png`,
    alt: ""
  })), layout_jsx("i", {
    className: "icon-arrow-2 ib"
  })), layout_jsx("div", {
    className: "content"
  }, layout_jsx("div", {
    className: "inner"
  }, layout_jsx("ul", {
    className: "menu"
  }, layout_jsx("li", {
    className: flag === 'gb' ? 'lang-en active' : 'lang-en'
  }, layout_jsx("a", {
    title: "English (en)",
    onClick: () => changeLang('en', 'gb')
  }, layout_jsx("img", {
    src: "/static/images/flags/gb.png",
    alt: ""
  }), layout_jsx("span", null, "English"))), layout_jsx("li", {
    className: flag === 'vn' ? 'lang-vi active' : 'lang-vi'
  }, layout_jsx("a", {
    title: "Ti\u1EBFng Vi\u1EC7t (vi)",
    onClick: () => changeLang('vi', 'vn')
  }, layout_jsx("img", {
    src: "/static/images/flags/vn.png",
    alt: ""
  }), layout_jsx("span", null, "Ti\u1EBFng Vi\u1EC7t")))))))), layout_jsx("div", {
    className: "item imenu mobilemenu"
  }, layout_jsx("button", {
    className: "stylebuttonopen",
    onClick: () => {
      setActiveDrawwe(!activeDrawer);
    }
  }, layout_jsx("span", {
    className: "menu-btn x"
  })))))))), layout_jsx("div", null, children), layout_jsx("section", {
    className: "sec-cta"
  }, layout_jsx("div", {
    className: "container"
  }, layout_jsx("div", {
    className: "row center"
  }, Object(external_lodash_["map"])(menuFooterTop.sort((a, b) => a.position - b.position), values => layout_jsx("div", {
    className: "col-4",
    key: values.id
  }, layout_jsx("a", {
    className: "item",
    href: `/page/${values.slugPages}`
  }, layout_jsx("span", {
    className: "img"
  }, layout_jsx("img", {
    src: values.icon,
    alt: ""
  })), layout_jsx("div", {
    className: "divtext"
  }, layout_jsx("h4", {
    className: "title"
  }, values.name), layout_jsx("div", {
    className: "desc"
  }, values.description)))))))), layout_jsx("section", {
    className: "sec-download-pc group-ef loaded"
  }, layout_jsx("div", {
    className: "container"
  }, layout_jsx("div", {
    className: "row"
  }, layout_jsx("div", {
    className: "col-md-6   efch-2 ef-img-r"
  }, layout_jsx("p", {
    className: "stitle"
  }, t('sign_up_promotional')), layout_jsx("form", {
    role: "search",
    method: "get",
    className: "searchform ",
    action: ""
  }, layout_jsx("div", null, layout_jsx("input", {
    type: "text",
    placeholder: t('enter_email'),
    name: "s",
    className: "input"
  })), layout_jsx("button", {
    type: "submit",
    className: "btn btn-2"
  }, t('registration')))), layout_jsx("div", {
    className: "col-md-6   efch-3 ef-img-r"
  }, layout_jsx("div", {
    className: "wapp"
  }, layout_jsx("span", {
    className: "code"
  }, layout_jsx("img", {
    src: "/static/images/code.png",
    alt: ""
  })), layout_jsx("div", {
    className: "app"
  }, layout_jsx("p", {
    className: "stitle"
  }, t('donwload_app_today')), layout_jsx("a", {
    href: "https://apple.co/2AqB7ZM"
  }, layout_jsx("img", {
    src: "/static/images/btt-chplay.svg",
    alt: ""
  })), "\xA0", layout_jsx("a", {
    href: "https://bit.ly/2v5ZsyP"
  }, layout_jsx("img", {
    src: "/static/images/btt-google.svg",
    alt: ""
  })), ' ')))))), layout_jsx("div", {
    id: "footer-pc",
    className: "group-ef loaded"
  }, layout_jsx("div", {
    className: "container"
  }, layout_jsx("div", {
    className: "row grid-space-10"
  }, layout_jsx("div", {
    className: "col-lg-4 col-sm-12 efch-1 ef-img-t"
  }, layout_jsx(layout_Widget, {
    data: settingFooter
  })), renderFooter(menuFooterMain)), layout_jsx("div", {
    className: "line"
  }), layout_jsx("div", {
    className: "row grid-space-10"
  }, layout_jsx("div", {
    className: "col-lg-6 col-md-7 efch-5 ef-img-t"
  }, layout_jsx("ul", {
    className: "menu line"
  }, Object(external_lodash_["map"])(menuFooterBottom.sort((a, b) => a.position - b.position), (values, key) => layout_jsx("li", {
    key: key
  }, layout_jsx("a", {
    href: `/page/${values.slugPages}`
  }, values.name))))), layout_jsx("div", {
    className: "col-lg-6 col-md-5 efch-6 ef-img-t"
  }, layout_jsx("div", {
    className: "copyright"
  }, "2019 \xA9 Copyright MBbank. All rights reserved."))))), layout_jsx("section", {
    className: "sec-download-mb"
  }, layout_jsx("div", {
    className: "wform"
  }, layout_jsx("p", {
    className: "stitle"
  }, t('sign_up_promotional')), layout_jsx("form", {
    role: "search",
    method: "get",
    className: "searchform ",
    action: ""
  }, layout_jsx("div", {
    className: "aaa"
  }, layout_jsx("input", {
    type: "text",
    placeholder: t('enter_email'),
    name: "s",
    className: "input"
  })), layout_jsx("button", {
    type: "submit",
    className: "btn btn-2"
  }, "\u0110\u0103ng k\xFD"))), layout_jsx("div", {
    className: "wdownload"
  }, layout_jsx("span", {
    className: "stitle"
  }, t('donwload_app_today')), "\xA0", layout_jsx("a", {
    href: "#"
  }, layout_jsx("img", {
    src: btt_chplay_mb,
    alt: ""
  })), ' ', "\xA0", layout_jsx("a", {
    href: "#"
  }, layout_jsx("img", {
    src: btt_google_mb,
    alt: ""
  })))), layout_jsx("div", {
    id: "footer-mb",
    className: "group-ef loaded"
  }, layout_jsx("div", {
    className: "container"
  }, layout_jsx("div", {
    className: "row grid-space-10"
  }, layout_jsx("div", {
    className: "col-lg-4 col-sm-12 efch-1 ef-img-t"
  }, layout_jsx(WidgetMb, {
    data: settingFooter,
    socialLink: socialLink
  }))), layout_jsx("div", {
    className: "accodion accodion-0"
  }, layout_jsx("div", {
    className: "accodion-tab "
  }, layout_jsx("input", {
    type: "checkbox",
    id: "chck_mf"
  }), layout_jsx("label", {
    className: "accodion-title",
    htmlFor: "chck_mf"
  }, layout_jsx("span", null, " ", t('extend'), " "), ' ', layout_jsx("span", {
    className: "triangle"
  }, layout_jsx("i", {
    className: "icon-plus"
  }))), layout_jsx("div", {
    className: "accodion-content"
  }, layout_jsx("div", {
    className: "inner"
  }, layout_jsx("div", {
    className: "row grid-space-10"
  }, renderFooterMobile(menuFooterMain))))))), layout_jsx("div", {
    className: "menu-footer-mb"
  }, layout_jsx("div", {
    className: "row"
  }, layout_jsx("div", {
    className: "col-3"
  }, layout_jsx("a", {
    className: "item ",
    href: "#"
  }, layout_jsx("span", {
    className: "img"
  }, ' ', layout_jsx("img", {
    src: home,
    alt: ""
  })), layout_jsx("span", {
    className: "name"
  }, t('home')))), layout_jsx("div", {
    className: "col-3"
  }, layout_jsx("a", {
    className: "item",
    href: "#"
  }, layout_jsx("span", {
    className: "img"
  }, layout_jsx("img", {
    src: folder,
    alt: ""
  })), layout_jsx("span", {
    className: "name"
  }, t('product')))), layout_jsx("div", {
    className: "col-3"
  }, layout_jsx("a", {
    className: "item ",
    href: "#"
  }, layout_jsx("span", {
    className: "img"
  }, layout_jsx("img", {
    src: MB,
    alt: ""
  })), layout_jsx("span", {
    className: "name"
  }, "MB++"))), layout_jsx("div", {
    className: "col-3"
  }, layout_jsx("a", {
    className: "item ",
    href: "#"
  }, layout_jsx("span", {
    className: "img"
  }, layout_jsx("img", {
    src: giadinh,
    alt: ""
  })), layout_jsx("span", {
    className: "name"
  }, t('family')))), layout_jsx("div", {
    className: "col-3"
  }, layout_jsx("a", {
    className: "item ",
    href: "#"
  }, layout_jsx("span", {
    className: "img"
  }, layout_jsx("img", {
    src: tienich,
    alt: ""
  })), layout_jsx("span", {
    className: "name"
  }, t('utilities'))))))))))), layout_jsx(layout_ModalDrawer, {
    menu: menuNav
  }));
}

const mapStateToProps = state => {
  return {
    settingFooter: state.layoutReducer.settingFooter,
    socialLink: state.layoutReducer.socialLink,
    menuHeader: state.menuReducer.header,
    menuNav: state.menuReducer.nav,
    menuFooterTop: state.menuReducer.footerTop,
    menuFooterMain: state.menuReducer.footerMain,
    menuFooterBottom: state.menuReducer.footerBottom
  };
};

const mapDispatchToProps = {
  getSettingFooter: actions["b" /* LayoutActions */].getSettingFooterAction,
  getSocialLink: actions["b" /* LayoutActions */].getSocailinkAction,
  getMenuHeader: actions["d" /* MenuActions */].getMenuHeader,
  getMenuNav: actions["d" /* MenuActions */].getMenuNav,
  getMenuFooterTop: actions["d" /* MenuActions */].getMenuFooterTop,
  getMenuFooterMain: actions["d" /* MenuActions */].getMenuFooterMain,
  getMenuFooterBottom: actions["d" /* MenuActions */].getMenuFooterBottom
};

Layout.getInitialProps = async () => ({
  namespacesRequired: ['common', 'layout']
});

const withConnect = Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps);
/* harmony default export */ var layout = __webpack_exports__["a"] = (Object(external_redux_["compose"])(Object(i18n_0["b" /* withTranslation */])('common'), withConnect)(Layout));

/***/ }),

/***/ "qnP0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// CONCATENATED MODULE: ./components/common/download/Fillter.js
var __jsx = external_react_default.a.createElement;



function Filler({
  type,
  setDate,
  setType,
  center
}) {
  return __jsx("div", {
    className: center ? 'filter-category mb-5 text-center' : 'filter-category mb-5'
  }, __jsx("select", {
    className: "select mr-2",
    onChange: setDate
  }, __jsx("option", {
    value: 0
  }, "N\u0103m..."), __jsx("option", {
    value: 2020
  }, "2020"), __jsx("option", {
    value: 2021
  }, "2021")), __jsx("select", {
    className: "select",
    onChange: setType
  }, __jsx("option", {
    value: 0
  }, "Ch\u1ECDn..."), Object(external_lodash_["map"])(type, item => {
    return __jsx("option", {
      value: item.id,
      key: item.id
    }, item.name);
  })));
}

/* harmony default export */ var Fillter = (Filler);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./components/common/download/DowloadFile.js
var DowloadFile_jsx = external_react_default.a.createElement;




function DowloadFile({
  year,
  isChecked,
  fileIcon,
  data
}) {
  const {
    0: checked,
    1: setChecked
  } = Object(external_react_["useState"])(isChecked);
  return DowloadFile_jsx("div", {
    className: "accodion-tab "
  }, DowloadFile_jsx("input", {
    type: "checkbox",
    id: "chck_2",
    checked: checked
  }), DowloadFile_jsx("label", {
    className: "accodion-title h2",
    onClick: () => setChecked(!checked)
  }, DowloadFile_jsx("span", null, " ", year, " "), DowloadFile_jsx("span", {
    className: "triangle"
  }, DowloadFile_jsx("i", {
    className: "icon-plus"
  }))), DowloadFile_jsx("div", {
    className: "accodion-content"
  }, DowloadFile_jsx("div", {
    className: "inner"
  }, DowloadFile_jsx("ul", {
    className: "list-download"
  }, Object(external_lodash_["map"])(data, item => {
    return DowloadFile_jsx("li", {
      key: item.id
    }, DowloadFile_jsx("span", {
      className: "title"
    }, DowloadFile_jsx("i", {
      className: fileIcon ? 'icon-t14' : 'icon-date-2'
    }), item.name), DowloadFile_jsx("span", {
      className: "data"
    }, external_moment_default()(item.createdAt).format('DD-MM-YYYY')));
  })))));
}

/* harmony default export */ var download_DowloadFile = (DowloadFile);
// EXTERNAL MODULE: ./services/regulation.js
var regulation = __webpack_require__("HSqs");

// CONCATENATED MODULE: ./components/common/download/DowloadVideo.js
var DowloadVideo_jsx = external_react_default.a.createElement;





function DowloadVideo({
  year,
  data
}) {
  const {
    0: urlVideo,
    1: setURlVideo
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    Object(regulation["f" /* getUrlVideoService */])(year).then(res => {
      if (res !== null && res.data !== undefined) {
        setURlVideo(res.data.urlVideo);
      }
    });
  }, [year]);
  return DowloadVideo_jsx("div", {
    className: "boxwidget box-download-2"
  }, DowloadVideo_jsx("h2", {
    className: "widget-title"
  }, year), DowloadVideo_jsx("div", {
    className: "row grid-space-60"
  }, DowloadVideo_jsx("div", {
    className: "col-lg-6"
  }, DowloadVideo_jsx("div", {
    className: "single_video  tRes_16_9",
    "data-id": "2UrWPUAr68A",
    "data-video": "autoplay=1&controls=1&mute=0"
  }, DowloadVideo_jsx("iframe", {
    src: urlVideo
  }))), DowloadVideo_jsx("div", {
    className: "col-lg-6"
  }, DowloadVideo_jsx("ul", {
    className: "list-download "
  }, Object(external_lodash_["map"])(data, item => {
    return DowloadVideo_jsx("li", {
      key: item.id
    }, DowloadVideo_jsx("span", {
      className: "title"
    }, DowloadVideo_jsx("i", {
      className: "icon-date-2"
    }), item.name), DowloadVideo_jsx("span", {
      className: "data"
    }, external_moment_default()(item.createdAt).format('DD-MM-YYYY')), DowloadVideo_jsx("span", {
      className: "down"
    }, DowloadVideo_jsx("a", {
      href: item.urlFile,
      download: true
    }, DowloadVideo_jsx("i", {
      className: "icon-arrow-6 ib"
    }))));
  })))));
}

/* harmony default export */ var download_DowloadVideo = (DowloadVideo);
// EXTERNAL MODULE: ./components/common/download/DowloadFileWapper.js
var DowloadFileWapper = __webpack_require__("TPUY");

// EXTERNAL MODULE: ./components/common/download/DowloadVideoWapper.js
var DowloadVideoWapper = __webpack_require__("jSP5");

// EXTERNAL MODULE: ./components/common/index.js + 34 modules
var common = __webpack_require__("lCwK");

// EXTERNAL MODULE: ./store/actions.js
var actions = __webpack_require__("qzSc");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/common/download/ListDowloadFIle.js
var ListDowloadFIle_jsx = external_react_default.a.createElement;







function ListDowloadFIle({
  type,
  listType,
  listRegulation,
  search,
  getTypeRegulation,
  seachRegulation
}) {
  const {
    0: datatype,
    1: setDataType
  } = Object(external_react_["useState"])(0);
  const {
    0: page,
    1: setPage
  } = Object(external_react_["useState"])(0);
  const {
    0: year,
    1: setYear
  } = Object(external_react_["useState"])(0);
  Object(external_react_["useEffect"])(() => {
    getTypeRegulation(type);
    seachRegulation(type, 0, 10, 0, 0);
  }, [getTypeRegulation]);
  Object(external_react_["useEffect"])(() => {
    seachRegulation(type, datatype, 10, page, year);
  }, [page, year, datatype]);
  return ListDowloadFIle_jsx("div", {
    className: "accodion accodion-2 container sec-tb"
  }, search && ListDowloadFIle_jsx(Fillter, {
    center: true,
    type: listType,
    setDate: event => setYear(event.target.value),
    setType: event => setDataType(event.target.value)
  }), Object(external_lodash_["map"])(listRegulation, (item, index) => {
    if (item.investors.length > 0) {
      return ListDowloadFIle_jsx("div", {
        className: "sec-tb",
        key: item.year
      }, ListDowloadFIle_jsx(download_DowloadFile, {
        data: item.investors,
        year: item.year,
        isChecked: index === 0 ? true : false
      }));
    }

    return null;
  }), ListDowloadFIle_jsx(common["f" /* Pagination */], {
    page: page,
    setPage: pageNumber => setPage(pageNumber),
    next: nextNumber => setPage(nextNumber),
    previous: previousNumber => setPage(previousNumber)
  }));
}

const mapStateToProp = state => {
  return {
    listRegulation: state.regulationReducer.listDataByYear,
    listType: state.regulationReducer.listTypeByID
  };
};

const mapDispatchToProps = {
  seachRegulation: actions["h" /* RegulationActions */].getRegulationByYear,
  getTypeRegulation: actions["h" /* RegulationActions */].getTypeRegulationByIDAction
};
/* harmony default export */ var download_ListDowloadFIle = (Object(external_react_redux_["connect"])(mapStateToProp, mapDispatchToProps)(ListDowloadFIle));
// CONCATENATED MODULE: ./components/common/download/ListDowloadVideo.js
var ListDowloadVideo_jsx = external_react_default.a.createElement;







function ListDowloadVideo_ListDowloadFIle({
  type,
  listType,
  listRegulation,
  getTypeRegulation,
  seachRegulation
}) {
  const {
    0: datatype,
    1: setDataType
  } = Object(external_react_["useState"])(0);
  const {
    0: page,
    1: setPage
  } = Object(external_react_["useState"])(0);
  const {
    0: year,
    1: setYear
  } = Object(external_react_["useState"])(0);
  Object(external_react_["useEffect"])(() => {
    getTypeRegulation(type);
    seachRegulation(type, 0, 10, 0, 0);
  }, [getTypeRegulation]);
  Object(external_react_["useEffect"])(() => {
    seachRegulation(type, datatype, 10, page, year);
  }, [page, year, datatype]);
  return ListDowloadVideo_jsx("div", {
    className: "accodion accodion-2 container sec-tb"
  }, ListDowloadVideo_jsx(Fillter, {
    center: true,
    type: listType,
    setDate: event => setYear(event.target.value),
    setType: event => setDataType(event.target.value)
  }), Object(external_lodash_["map"])(listRegulation, (item, index) => {
    if (item.investors.length > 0) {
      return ListDowloadVideo_jsx("div", {
        className: "sec-tb",
        key: item.year
      }, ListDowloadVideo_jsx(download_DowloadVideo, {
        data: item.investors,
        year: item.year,
        isChecked: index === 0 ? true : false
      }));
    }

    return null;
  }), ListDowloadVideo_jsx(common["f" /* Pagination */], {
    page: page,
    setPage: pageNumber => setPage(pageNumber),
    next: nextNumber => setPage(nextNumber),
    previous: previousNumber => setPage(previousNumber)
  }));
}

const ListDowloadVideo_mapStateToProp = state => {
  return {
    listRegulation: state.regulationReducer.listDataByYear,
    listType: state.regulationReducer.listTypeByID
  };
};

const ListDowloadVideo_mapDispatchToProps = {
  seachRegulation: actions["h" /* RegulationActions */].getRegulationByYear,
  getTypeRegulation: actions["h" /* RegulationActions */].getTypeRegulationByIDAction
};
/* harmony default export */ var ListDowloadVideo = (Object(external_react_redux_["connect"])(ListDowloadVideo_mapStateToProp, ListDowloadVideo_mapDispatchToProps)(ListDowloadVideo_ListDowloadFIle));
// CONCATENATED MODULE: ./components/common/download/Question.js
var Question_jsx = external_react_default.a.createElement;


function Question({
  question,
  answer,
  isChecked
}) {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(isChecked);
  return Question_jsx("div", {
    className: "container"
  }, Question_jsx("div", {
    className: "accodion accodion-1"
  }, Question_jsx("div", {
    className: "accodion-tab",
    onClick: () => setIsOpen(!isOpen)
  }, Question_jsx("input", {
    type: "checkbox",
    checked: isOpen
  }), Question_jsx("label", {
    className: "accodion-title no-borber"
  }, Question_jsx("span", null, question), Question_jsx("span", {
    className: "triangle"
  }, Question_jsx("i", {
    className: "icon-plus"
  }))), Question_jsx("div", {
    className: "accodion-content entry-content"
  }, Question_jsx("div", {
    className: "inner"
  }, answer)))));
}

/* harmony default export */ var download_Question = (Question);
// CONCATENATED MODULE: ./components/common/download/ListDowloadQA.js
var ListDowloadQA_jsx = external_react_default.a.createElement;









function ListDowloadQA({
  type,
  listType,
  listRegulation,
  search,
  getTypeRegulation,
  seachRegulation
}) {
  const date = new Date();
  const {
    0: datatype,
    1: setDataType
  } = Object(external_react_["useState"])(0);
  const {
    0: page,
    1: setPage
  } = Object(external_react_["useState"])(0);
  const {
    0: year,
    1: setYear
  } = Object(external_react_["useState"])(external_moment_default()(date).format('YYYY'));
  Object(external_react_["useEffect"])(() => {
    seachRegulation(type, year, page);
  }, [getTypeRegulation]);
  Object(external_react_["useEffect"])(() => {
    seachRegulation(type, year, page);
  }, [page]);
  return ListDowloadQA_jsx("div", {
    className: "accodion accodion-2 container sec-tb"
  }, search && ListDowloadQA_jsx(Fillter, {
    center: true,
    type: listType,
    setDate: event => setYear(event.target.value),
    setType: event => setDataType(event.target.value)
  }), ListDowloadQA_jsx("section", {
    className: "sec-b sec-cauhoi"
  }, Object(external_lodash_["map"])(listRegulation.investors, (item, index) => {
    return ListDowloadQA_jsx(download_Question, {
      key: index,
      answer: item.description,
      question: item.name,
      isChecked: index === 0 ? true : false
    });
  })), ListDowloadQA_jsx(common["f" /* Pagination */], {
    page: page,
    setPage: pageNumber => setPage(pageNumber),
    next: nextNumber => setPage(nextNumber),
    previous: previousNumber => setPage(previousNumber)
  }));
}

const ListDowloadQA_mapStateToProp = state => {
  return {
    listRegulation: state.regulationReducer.listData,
    listType: state.regulationReducer.listTypeByID
  };
};

const ListDowloadQA_mapDispatchToProps = {
  seachRegulation: actions["h" /* RegulationActions */].getRegulation,
  getTypeRegulation: actions["h" /* RegulationActions */].getTypeRegulationByIDAction
};
/* harmony default export */ var download_ListDowloadQA = (Object(external_react_redux_["connect"])(ListDowloadQA_mapStateToProp, ListDowloadQA_mapDispatchToProps)(ListDowloadQA));
// CONCATENATED MODULE: ./components/common/download/index.js
/* concated harmony reexport Fillter */__webpack_require__.d(__webpack_exports__, "c", function() { return Fillter; });
/* concated harmony reexport DowloadFile */__webpack_require__.d(__webpack_exports__, "a", function() { return download_DowloadFile; });
/* concated harmony reexport DowloadVideo */__webpack_require__.d(__webpack_exports__, "b", function() { return download_DowloadVideo; });
/* unused concated harmony import DowloadFileWapper */
/* unused concated harmony import DowloadVideoWapper */
/* concated harmony reexport ListDowloadFIle */__webpack_require__.d(__webpack_exports__, "d", function() { return download_ListDowloadFIle; });
/* concated harmony reexport ListDowloadVideo */__webpack_require__.d(__webpack_exports__, "f", function() { return ListDowloadVideo; });
/* concated harmony reexport ListDowloadQA */__webpack_require__.d(__webpack_exports__, "e", function() { return download_ListDowloadQA; });










/***/ }),

/***/ "qzSc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _page_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hrxg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _page_actions__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _rate_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0AMe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _rate_actions__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _layout_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uPGx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _layout_actions__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _regulation_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dxtc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _regulation_actions__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _menu_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/jeJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _menu_actions__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _investors_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("rCtt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _investors_actions__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _news_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("TqPW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _news_actions__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _map_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("yA/M");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _map_actions__WEBPACK_IMPORTED_MODULE_7__["a"]; });











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

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

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