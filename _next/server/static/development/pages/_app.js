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

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! exports provided: default, appWithTranslation, withTranslation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appWithTranslation", function() { return appWithTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTranslation", function() { return withTranslation; });
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-i18next */ "next-i18next");
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

/* harmony default export */ __webpack_exports__["default"] = (NextI18NextInstance);
/* Optionally, export class methods as named exports */

const {
  appWithTranslation,
  withTranslation
} = NextI18NextInstance;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
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

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


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

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

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

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
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
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css":
/*!****************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _styles_block_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/block.scss */ "./styles/block.scss");
/* harmony import */ var _styles_block_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_block_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/styles.css */ "./styles/styles.css");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/custom.css */ "./styles/custom.css");
/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "F:\\MGROUP\\MBnextjs\\mb-frontend\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








 // import 'bootstrap/dist/css/bootstrap.css';





class NextApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
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
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(Component, _extends({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_store__WEBPACK_IMPORTED_MODULE_5__["default"])(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["appWithTranslation"])(NextApp))));

/***/ }),

/***/ "./services/menu.js":
/*!**************************!*\
  !*** ./services/menu.js ***!
  \**************************/
/*! exports provided: getAllMenu, getMenuItemById, getSettingFooterService, getSocialLinkService, getMenuItemByPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllMenu", function() { return getAllMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuItemById", function() { return getMenuItemById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettingFooterService", function() { return getSettingFooterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSocialLinkService", function() { return getSocialLinkService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuItemByPosition", function() { return getMenuItemByPosition; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");


const getAllMenu = () => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/menu',
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getMenuItemById = menuId => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/menu/${menuId}/menuItem`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getSettingFooterService = () => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/common/general`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getSocialLinkService = () => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/common/socialLink`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getMenuItemByPosition = data => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `menu/position/${data}`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};



/***/ }),

/***/ "./services/news.js":
/*!**************************!*\
  !*** ./services/news.js ***!
  \**************************/
/*! exports provided: getNewService, getNewByUri, getNewByIdService, getNewCategoryIdService, findAllByCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewService", function() { return getNewService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewByUri", function() { return getNewByUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewByIdService", function() { return getNewByIdService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewCategoryIdService", function() { return getNewCategoryIdService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAllByCategory", function() { return findAllByCategory; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");


const getNewService = () => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/news/isActive',
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getNewByUri = uri => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/news/url/${uri}`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getNewByIdService = data => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/news/category_is_active/${id}`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const findAllByCategory = (id, page, year) => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/news/findallbycategoryandyear/${id}?number=9&page=${page}&year=${year}`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};



/***/ }),

/***/ "./services/page.js":
/*!**************************!*\
  !*** ./services/page.js ***!
  \**************************/
/*! exports provided: getPageService, getPagesByIdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageService", function() { return getPageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPagesByIdService", function() { return getPagesByIdService; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");


const getPageService = name => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/pages/name?name=${name}`,
    method: 'POST'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getPagesByIdService = data => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/pages/ids',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlcyI6IlJPTEVfQUNDRVBUIE5FV1MsUk9MRV9BQ0NFUFQgUEFHRVMsUk9MRV9BREQgQkxPQ0ssUk9MRV9BREQgRk9STSxST0xFX0FERCBHUk9VUCxST0xFX0FERCBNRURJQSxST0xFX0FERCBST0xFLFJPTEVfQUREIFRBRyxST0xFX0FERCBVU0VSLFJPTEVfQ0jhu4hOSCBT4busQSBEQU5IIE3hu6RDLFJPTEVfQ0jhu4hOSCBT4busQSBNQUlMVEVNUExBVEUsUk9MRV9DSOG7iE5IIFPhu6xBIE1FTlUsUk9MRV9DSOG7iE5IIFPhu6xBIE1FTlVJVEVNLFJPTEVfQ0jhu4hOSCBT4busQSBQQUdFLFJPTEVfQ0jhu4hOSCBT4busQSBTTElERVIsUk9MRV9DSOG7iE5IIFPhu6xBIFRJTiBU4buoQyxST0xFX0NI4buITkggU-G7rEEgVuG7iiBUUsONIERBTkggTeG7pEMsUk9MRV9DSOG7iE5IIFPhu6xBIFbhu4ogVFLDjSBNRU5VSVRFTSxST0xFX0NI4buITkggU-G7rEEgVuG7iiBUUsONIFBBR0UsUk9MRV9DUkVBVEUgQ0FURUdPUlksUk9MRV9DUkVBVEUgRVhDSEFOR0VfUkFURSxST0xFX0NSRUFURSBJTlRFUkVTVF9SQVRFLFJPTEVfQ1JFQVRFIE1BSUxURU1QTEFURSxST0xFX0NSRUFURSBNRU5VLFJPTEVfQ1JFQVRFIE1FTlVJVEVNLFJPTEVfQ1JFQVRFIE5FVFdPUktTLFJPTEVfQ1JFQVRFIE5FV1MsUk9MRV9DUkVBVEUgUEFHRSxST0xFX0NSRUFURSBTTElERVIsUk9MRV9ERUxFVEUgQkxPQ0ssUk9MRV9ERUxFVEUgQ0FURUdPUlksUk9MRV9ERUxFVEUgRVhDSEFOR0VfUkFURSxST0xFX0RFTEVURSBGT1JNLFJPTEVfREVMRVRFIEdST1VQLFJPTEVfREVMRVRFIElOVEVSRVNUX1JBVEUsUk9MRV9ERUxFVEUgTUFJTFRFTVBMQVRFLFJPTEVfREVMRVRFIE1FRElBLFJPTEVfREVMRVRFIE1FTlUsUk9MRV9ERUxFVEUgTUVOVUlURU0sUk9MRV9ERUxFVEUgTkVUV09SS1MsUk9MRV9ERUxFVEUgTkVXUyxST0xFX0RFTEVURSBQQUdFLFJPTEVfREVMRVRFIFJPTEUsUk9MRV9ERUxFVEUgU0xJREVSLFJPTEVfREVMRVRFIFRBRyxST0xFX0RFTEVURSBVU0VSLFJPTEVfRFVZ4buGVCBUSU4gVOG7qEMsUk9MRV9EVVnhu4ZUIFRSQU5HLFJPTEVfRURJVCBCTE9DSyxST0xFX0VESVQgQ0FURUdPUlksUk9MRV9FRElUIEVYQ0hBTkdFX1JBVEUsUk9MRV9FRElUIEZPUk0sUk9MRV9FRElUIEdST1VQLFJPTEVfRURJVCBJTlRFUkVTVF9SQVRFLFJPTEVfRURJVCBNQUlMVEVNUExBVEUsUk9MRV9FRElUIE1FRElBLFJPTEVfRURJVCBNRU5VLFJPTEVfRURJVCBNRU5VSVRFTSxST0xFX0VESVQgTkVUV09SS1MsUk9MRV9FRElUIE5FV1MsUk9MRV9FRElUIFBBR0UsUk9MRV9FRElUIFJPTEUsUk9MRV9FRElUIFNMSURFUixST0xFX0VESVQgU1RPUkUsUk9MRV9FRElUIFRBRyxST0xFX0VESVQgVEjGryBQSOG6ok4gSOG7kkksUk9MRV9FRElUIFVTRVIsUk9MRV9HRVQgQkxPQ0ssUk9MRV9HRVQgQ0FURUdPUlksUk9MRV9HRVQgRVhDSEFOR0VfUkFURSxST0xFX0dFVCBGT1JNLFJPTEVfR0VUIEdST1VQLFJPTEVfR0VUIElOVEVSRVNUX1JBVEUsUk9MRV9HRVQgTUFJTFRFTVBMQVRFLFJPTEVfR0VUIE1FRElBLFJPTEVfR0VUIE1FTlUsUk9MRV9HRVQgTUVOVUlURU0sUk9MRV9HRVQgTkVUV09SS1MsUk9MRV9HRVQgTkVXUyxST0xFX0dFVCBQQUdFLFJPTEVfR0VUIFJPTEUsUk9MRV9HRVQgU0VUVElORyxST0xFX0dFVCBTTElERVIsUk9MRV9HRVQgU1RPUkUsUk9MRV9HRVQgVEFHLFJPTEVfR0VUIFRIxq8gUEjhuqJOIEjhu5JJLFJPTEVfR0VUIFVTRVIsUk9MRV9T4busQSBCTE9DSyxST0xFX1Phu6xBIEZPUk0sUk9MRV9T4busQSBMw4NJIFNV4bqkVCxST0xFX1Phu6xBIE1FRElBLFJPTEVfU-G7rEEgTeG6oE5HIEzGr-G7mkksUk9MRV9T4busQSBOSMOCTiBWScOKTixST0xFX1Phu6xBIE5Iw5NNLFJPTEVfU-G7rEEgU1RPUkUsUk9MRV9T4busQSBUQUcsUk9MRV9T4busQSBUSMavIFBI4bqiTiBI4buSSSxST0xFX1Phu6xBIFThu4ggR0nDgSxST0xFX1Phu6xBIFZBSSBUUsOSLFJPTEVfVEjDik0gQkxPQ0ssUk9MRV9USMOKTSBGT1JNLFJPTEVfVEjDik0gTUVESUEsUk9MRV9USMOKTSBOSMOCTiBWScOKTixST0xFX1RIw4pNIE5Iw5NNLFJPTEVfVEjDik0gVEFHLFJPTEVfVEjDik0gVkFJIFRSw5IsUk9MRV9U4bqgTyBEQU5IIE3hu6RDLFJPTEVfVOG6oE8gTMODSSBTVeG6pFQsUk9MRV9U4bqgTyBNQUlMVEVNUExBVEUsUk9MRV9U4bqgTyBNRU5VLFJPTEVfVOG6oE8gTUVOVUlURU0sUk9MRV9U4bqgTyBN4bqgTkcgTMav4buaSSxST0xFX1ThuqBPIFBBR0UsUk9MRV9U4bqgTyBTTElERVIsUk9MRV9U4bqgTyBUSU4gVOG7qEMsUk9MRV9U4bqgTyBU4buIIEdJw4EsUk9MRV9VUERBVEUgUE9TSVRJT04gQ0FURUdPUlksUk9MRV9VUERBVEUgUE9TSVRJT04gTUVOVUlURU0sUk9MRV9VUERBVEUgUE9TSVRJT04gUEFHRSxST0xFX1hFTSBCTE9DSyxST0xFX1hFTSBDw4BJIMSQ4bq2VCxST0xFX1hFTSBEQU5IIE3hu6RDLFJPTEVfWEVNIEZPUk0sUk9MRV9YRU0gTMODSSBTVeG6pFQsUk9MRV9YRU0gTUFJTFRFTVBMQVRFLFJPTEVfWEVNIE1FRElBLFJPTEVfWEVNIE1FTlUsUk9MRV9YRU0gTUVOVUlURU0sUk9MRV9YRU0gTeG6oE5HIEzGr-G7mkksUk9MRV9YRU0gTkjDgk4gVknDik4sUk9MRV9YRU0gTkjDk00sUk9MRV9YRU0gUEFHRSxST0xFX1hFTSBTTElERVIsUk9MRV9YRU0gU1RPUkUsUk9MRV9YRU0gVEFHLFJPTEVfWEVNIFRIxq8gUEjhuqJOIEjhu5JJLFJPTEVfWEVNIFRJTiBU4buoQyxST0xFX1hFTSBU4buIIEdJw4EsUk9MRV9YRU0gVkFJIFRSw5IsUk9MRV9Yw5NBIEJMT0NLLFJPTEVfWMOTQSBEQU5IIE3hu6RDLFJPTEVfWMOTQSBGT1JNLFJPTEVfWMOTQSBMw4NJIFNV4bqkVCxST0xFX1jDk0EgTUFJTFRFTVBMQVRFLFJPTEVfWMOTQSBNRURJQSxST0xFX1jDk0EgTUVOVSxST0xFX1jDk0EgTUVOVUlURU0sUk9MRV9Yw5NBIE3huqBORyBMxq_hu5pJLFJPTEVfWMOTQSBOSMOCTiBWScOKTixST0xFX1jDk0EgTkjDk00sUk9MRV9Yw5NBIFBBR0UsUk9MRV9Yw5NBIFNMSURFUixST0xFX1jDk0EgVEFHLFJPTEVfWMOTQSBUSU4gVOG7qEMsUk9MRV9Yw5NBIFThu4ggR0nDgSxST0xFX1jDk0EgVkFJIFRSw5IscXXhuqNuIHRy4buLIiwiaWF0IjoxNTgxMzg5MzQ3LCJleHAiOjE1ODM5ODEzNDd9.AynmpmEKDmTposaWSOzEBPLARBpisJVIK5RgS4q4MMQ'
    }
  });
};



/***/ }),

/***/ "./services/rate.js":
/*!**************************!*\
  !*** ./services/rate.js ***!
  \**************************/
/*! exports provided: getRateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRateService", function() { return getRateService; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");


const getRateService = () => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
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



/***/ }),

/***/ "./services/regulation.js":
/*!********************************!*\
  !*** ./services/regulation.js ***!
  \********************************/
/*! exports provided: fillRegulationServices, getTypeRegulationServices, getUrlVideoService, getRegulationPagation, getRegulationListYear, getTypeRegulationByIDServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillRegulationServices", function() { return fillRegulationServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeRegulationServices", function() { return getTypeRegulationServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlVideoService", function() { return getUrlVideoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegulationPagation", function() { return getRegulationPagation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegulationListYear", function() { return getRegulationListYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeRegulationByIDServices", function() { return getTypeRegulationByIDServices; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");


const getTypeRegulationServices = () => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/regulation/type`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getTypeRegulationByIDServices = id => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/regulation/type/${id}`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const fillRegulationServices = data => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/regulation/url/${data}`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getRegulationPagation = (type, year, page) => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/regulation/pagination/${type}/${year}?number=10&page=${page}`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};

const getRegulationListYear = (type, detailTypeId, number, page, year) => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: `/regulation/investors/${type}?detailTypeId=${detailTypeId}&number=${number}&page=${page}&year=${year}`,
    method: 'GET'
  }).then(res => {
    return res;
  }).catch(error => {
    return error.response.data;
  });
};



/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./store/reducers.js");
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saga */ "./store/saga.js");





const bindMiddleware = middleware => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(_saga__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./store/investors/actions.js":
/*!************************************!*\
  !*** ./store/investors/actions.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (Actions);

/***/ }),

/***/ "./store/investors/reducer.js":
/*!************************************!*\
  !*** ./store/investors/reducer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store/investors/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const intialState = {
  listNewInvestor: [],
  listNewNotification: []
};

const investorsReducer = (state = intialState, action) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_NEW_INVESTOR_RESPONSE:
      return _objectSpread({}, state, {
        listNewInvestor: action.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_NEW_INVESTOR_NOTIFICATION_RESPONSE:
      return _objectSpread({}, state, {
        listNewNotification: action.data
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (investorsReducer);

/***/ }),

/***/ "./store/investors/saga.js":
/*!*********************************!*\
  !*** ./store/investors/saga.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store/investors/actions.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/news */ "./services/news.js");




function* getNewSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_NEW_INVESTOR_REQUEST, function* (params) {
    const {
      id
    } = params;

    try {
      const res = yield Object(_services_news__WEBPACK_IMPORTED_MODULE_2__["getNewCategoryIdService"])(id);

      if (res.status === 200) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_NEW_INVESTOR_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getNotifiactionSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_NEW_INVESTOR_NOTIFICATION_REQUEST, function* (params) {
    const {
      id
    } = params;

    try {
      const res = yield Object(_services_news__WEBPACK_IMPORTED_MODULE_2__["getNewCategoryIdService"])(id);

      if (res.status === 200) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_NEW_INVESTOR_NOTIFICATION_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getNewSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getNotifiactionSaga)]);
}

/***/ }),

/***/ "./store/layout/actions.js":
/*!*********************************!*\
  !*** ./store/layout/actions.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (Actions);

/***/ }),

/***/ "./store/layout/reducers.js":
/*!**********************************!*\
  !*** ./store/layout/reducers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store/layout/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  settingFooter: {},
  socialLink: {}
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_SETTING_FOOTER_RESPONSE:
      return _objectSpread({}, state, {
        settingFooter: action.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_SOCIALINK_RESPONSE:
      return _objectSpread({}, state, {
        socialLink: action.data
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (layoutReducer);

/***/ }),

/***/ "./store/layout/saga.js":
/*!******************************!*\
  !*** ./store/layout/saga.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store/layout/actions.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/menu */ "./services/menu.js");




function* getSettingFooterSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_SETTING_FOOTER_REQUEST, function* () {
    try {
      const res = yield Object(_services_menu__WEBPACK_IMPORTED_MODULE_2__["getSettingFooterService"])();

      if (res.status === 200) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_SETTING_FOOTER_RESPONSE,
          data: res.data.general
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getSocialLinkSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_SOCIALINK_REQUEST, function* () {
    try {
      const res = yield Object(_services_menu__WEBPACK_IMPORTED_MODULE_2__["getSocialLinkService"])();

      if (res.status === 200) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_SOCIALINK_RESPONSE,
          data: res.data.socialLink
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getSettingFooterSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getSocialLinkSaga)]);
}

/***/ }),

/***/ "./store/menu/actions.js":
/*!*******************************!*\
  !*** ./store/menu/actions.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (Actions);

/***/ }),

/***/ "./store/menu/reducers.js":
/*!********************************!*\
  !*** ./store/menu/reducers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store/menu/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  header: [],
  nav: [],
  footerTop: [],
  footerMain: [],
  footerBottom: []
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_MENU_HEADER_RESPONSE:
      return _objectSpread({}, state, {
        header: action.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_MENU_NAV_RESPONSE:
      return _objectSpread({}, state, {
        nav: action.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_MENU_FOOTER_TOP_RESPONSE:
      return _objectSpread({}, state, {
        footerTop: action.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_MENU_FOOTER_MAIN_RESPONSE:
      return _objectSpread({}, state, {
        footerMain: action.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_MENU_FOOTER_BOTTOM_RESPONSE:
      return _objectSpread({}, state, {
        footerBottom: action.data
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (menuReducer);

/***/ }),

/***/ "./store/menu/saga.js":
/*!****************************!*\
  !*** ./store/menu/saga.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store/menu/actions.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/menu */ "./services/menu.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const nest = (items, id = null, link = 'parentId') => {
  return items.filter(item => item[link] === id).map(item => _objectSpread({}, item, {
    title: `${item.name}`,
    children: nest(items.sort((a, b) => a.position - b.position), item.id),
    expanded: true
  }));
};

function* getMenuHeaderSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_MENU_HEADER_REQUEST, function* () {
    try {
      const res = yield Object(_services_menu__WEBPACK_IMPORTED_MODULE_2__["getMenuItemByPosition"])('top_top');

      if (res.status === 200) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_MENU_HEADER_RESPONSE,
          data: nest(res.data.menuItems)
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getMenuNavSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_MENU_NAV_REQUEST, function* () {
    try {
      const res = yield Object(_services_menu__WEBPACK_IMPORTED_MODULE_2__["getMenuItemByPosition"])('top2');

      if (res.status === 200) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_MENU_NAV_RESPONSE,
          data: nest(res.data.menuItems)
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getMenuFooterTopSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_MENU_FOOTER_TOP_REQUEST, function* () {
    try {
      const res = yield Object(_services_menu__WEBPACK_IMPORTED_MODULE_2__["getMenuItemByPosition"])('Menu footer top');

      if (res.status === 200) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_MENU_FOOTER_TOP_RESPONSE,
          data: nest(res.data.menuItems)
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getMenuFooterMainSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_MENU_FOOTER_MAIN_REQUEST, function* () {
    try {
      const res = yield Object(_services_menu__WEBPACK_IMPORTED_MODULE_2__["getMenuItemByPosition"])('Menu footer main');

      if (res.status === 200) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_MENU_FOOTER_MAIN_RESPONSE,
          data: nest(res.data.menuItems)
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getMenuFooterBottomSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_MENU_FOOTER_BOTTOM_REQUEST, function* () {
    try {
      const res = yield Object(_services_menu__WEBPACK_IMPORTED_MODULE_2__["getMenuItemByPosition"])('menu footer bottom');

      if (res.status === 200) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_MENU_FOOTER_BOTTOM_RESPONSE,
          data: nest(res.data.menuItems)
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getMenuHeaderSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getMenuNavSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getMenuFooterTopSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getMenuFooterMainSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getMenuFooterBottomSaga)]);
}

/***/ }),

/***/ "./store/news/actions.js":
/*!*******************************!*\
  !*** ./store/news/actions.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (Actions);

/***/ }),

/***/ "./store/news/reducers.js":
/*!********************************!*\
  !*** ./store/news/reducers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store/news/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  listNewsByCategory: {}
};

const newReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].FILL_NEWS_BY_CATEGORY_RESPONSE:
      return _objectSpread({}, state, {
        listNewsByCategory: action.data
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (newReducer);

/***/ }),

/***/ "./store/news/saga.js":
/*!****************************!*\
  !*** ./store/news/saga.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store/news/actions.js");
/* harmony import */ var _services_news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/news */ "./services/news.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);




function* getNewByCategorySaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].FILL_NEWS_BY_CATEGORY_REQUEST, function* (params) {
    const {
      id,
      page,
      year
    } = params;

    try {
      const res = yield Object(_services_news__WEBPACK_IMPORTED_MODULE_1__["findAllByCategory"])(id, page, year);

      if (res.status === 200) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_0__["default"].FILL_NEWS_BY_CATEGORY_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(getNewByCategorySaga)]);
}

/***/ }),

/***/ "./store/page/actions.js":
/*!*******************************!*\
  !*** ./store/page/actions.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (Actions);

/***/ }),

/***/ "./store/page/reducers.js":
/*!********************************!*\
  !*** ./store/page/reducers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store/page/actions.js");
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
    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_HOME_RESPONSE:
      return _objectSpread({}, state, {
        homedata: action.data,
        silder: action.silder,
        menuMiddle: action.data.menuMiddle,
        router: action.router
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_PAGES_BY_ID_RESPONSE:
      return _objectSpread({}, state, {
        listPages: [...state.listPages, action.data]
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (pageReducer);

/***/ }),

/***/ "./store/page/saga.js":
/*!****************************!*\
  !*** ./store/page/saga.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store/page/actions.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/page */ "./services/page.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);





function* pageSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_HOME_REQUEST, function* (params) {
    const {
      name
    } = params;

    try {
      const res = yield Object(_services_page__WEBPACK_IMPORTED_MODULE_2__["getPageService"])(name);

      if (res.status === 200) {
        let silder = [];
        const silderData = yield Object(lodash__WEBPACK_IMPORTED_MODULE_3__["filter"])(res.data.pageBlocks, item => item.name === 'Silder');

        for (let i = 0; i < silderData.length; i++) {
          silder = [...silder, ...JSON.parse(silderData[i].content)];
        }

        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_HOME_RESPONSE,
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_PAGES_BY_ID_REQUEST, function* (params) {
    const {
      data
    } = params;

    try {
      const res = yield Object(_services_page__WEBPACK_IMPORTED_MODULE_2__["getPagesByIdService"])(data);

      if (res.status === 200) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_PAGES_BY_ID_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(pageSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(pagesBySaga)]);
}

/***/ }),

/***/ "./store/rate/actions.js":
/*!*******************************!*\
  !*** ./store/rate/actions.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Actions = {
  GET_RATE_REQUEST: 'GET_RATE_REQUEST',
  GET_RATE_RESPONSE: 'GET_RATE_RESPONSE',
  getRateAction: () => ({
    type: Actions.GET_RATE_REQUEST
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Actions);

/***/ }),

/***/ "./store/rate/reducers.js":
/*!********************************!*\
  !*** ./store/rate/reducers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store/rate/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialstate = {
  data: {}
};

const rateReducer = (state = initialstate, action) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_RATE_RESPONSE:
      return _objectSpread({}, state, {
        data: action.data
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rateReducer);

/***/ }),

/***/ "./store/rate/saga.js":
/*!****************************!*\
  !*** ./store/rate/saga.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store/rate/actions.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_rate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rate */ "./services/rate.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function* getRateSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_RATE_REQUEST, function* () {
    try {
      const res = yield Object(_services_rate__WEBPACK_IMPORTED_MODULE_2__["getRateService"])();

      if (res.status === 200) {
        let list = {};
        const sortData = yield res.data.sort((date_1, date_2) => date_2.created_at - date_1.created_at);

        for (let i = 0; i < 1; i++) {
          list = _objectSpread({}, list, {}, sortData[i]);
        }

        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_RATE_RESPONSE,
          data: list
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getRateSaga)]);
}

/***/ }),

/***/ "./store/reducers.js":
/*!***************************!*\
  !*** ./store/reducers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/reducers */ "./store/page/reducers.js");
/* harmony import */ var _rate_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rate/reducers */ "./store/rate/reducers.js");
/* harmony import */ var _layout_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/reducers */ "./store/layout/reducers.js");
/* harmony import */ var _regulation_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./regulation/reducers */ "./store/regulation/reducers.js");
/* harmony import */ var _menu_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/reducers */ "./store/menu/reducers.js");
/* harmony import */ var _investors_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./investors/reducer */ "./store/investors/reducer.js");
/* harmony import */ var _news_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./news/reducers */ "./store/news/reducers.js");








const reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  pageReducer: _page_reducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  rateReducer: _rate_reducers__WEBPACK_IMPORTED_MODULE_2__["default"],
  layoutReducer: _layout_reducers__WEBPACK_IMPORTED_MODULE_3__["default"],
  regulationReducer: _regulation_reducers__WEBPACK_IMPORTED_MODULE_4__["default"],
  menuReducer: _menu_reducers__WEBPACK_IMPORTED_MODULE_5__["default"],
  investorsReducer: _investors_reducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  newsReducer: _news_reducers__WEBPACK_IMPORTED_MODULE_7__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducers);

/***/ }),

/***/ "./store/regulation/actions.js":
/*!*************************************!*\
  !*** ./store/regulation/actions.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (Actions);

/***/ }),

/***/ "./store/regulation/reducers.js":
/*!**************************************!*\
  !*** ./store/regulation/reducers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store/regulation/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  listData: [],
  data: [],
  type: [],
  listTypeByID: [],
  urlVideo: {},
  listDataByYear: []
};

const regulationReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_REGULATION_PAGINATION_RESPONSE:
      return _objectSpread({}, state, {
        listData: action.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_REGULATION_RESPONSE:
      return _objectSpread({}, state, {
        data: action.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_TYPE_REGULATION_RESPONSE:
      return _objectSpread({}, state, {
        type: action.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_URL_VIDEO_RESPONSE:
      return _objectSpread({}, state, {
        urlVideo: action.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_REGULATION_BY_YEAR_RESPONSE:
      return _objectSpread({}, state, {
        listDataByYear: action.data
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_TYPE_REGULATION_BY_ID_RESPONSE:
      {
        return _objectSpread({}, state, {
          listTypeByID: action.data
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (regulationReducer);

/***/ }),

/***/ "./store/regulation/saga.js":
/*!**********************************!*\
  !*** ./store/regulation/saga.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./store/regulation/actions.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_regulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/regulation */ "./services/regulation.js");




function* getRegulationSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_REGULATION_PAGINATION_REQUEST, function* (params) {
    const {
      types,
      year,
      page
    } = params;

    try {
      const res = yield Object(_services_regulation__WEBPACK_IMPORTED_MODULE_2__["getRegulationPagation"])(types, year, page);

      if (res.status === 200) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_REGULATION_PAGINATION_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* searchRegulationSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_REGULATION_REQUEST, function* (params) {
    const {
      data
    } = params;

    try {
      const res = yield Object(_services_regulation__WEBPACK_IMPORTED_MODULE_2__["fillRegulationServices"])(data);

      if (res.status === 200) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_0__["default"].SEARCH_REGULATION_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getTypeRegulationSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_TYPE_REGULATION_REQUEST, function* () {
    try {
      const res = yield Object(_services_regulation__WEBPACK_IMPORTED_MODULE_2__["getTypeRegulationServices"])();

      if (res.status === 200) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_TYPE_REGULATION_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getTypeRegulationByIDSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_TYPE_REGULATION_BY_ID_REQUEST, function* (params) {
    const {
      id
    } = params;

    try {
      const res = yield Object(_services_regulation__WEBPACK_IMPORTED_MODULE_2__["getTypeRegulationByIDServices"])(id);

      if (res.status === 200) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_TYPE_REGULATION_BY_ID_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getUrlVideoSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_URL_VIDEO_REQUEST, function* (params) {
    const {
      data
    } = params;

    try {
      const res = yield Object(_services_regulation__WEBPACK_IMPORTED_MODULE_2__["getUrlVideoService"])(data);

      if (res.status === 200) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_URL_VIDEO_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* getRegulationByYearSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_REGULATION_BY_YEAR_REQUEST, function* (params) {
    const {
      types,
      detailTypeId,
      number,
      page,
      year
    } = params;

    try {
      const res = yield Object(_services_regulation__WEBPACK_IMPORTED_MODULE_2__["getRegulationListYear"])(types, detailTypeId, number, page, year);

      if (res.status === 200) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_REGULATION_BY_YEAR_RESPONSE,
          data: res.data
        });
      } else {// console.log(res);
      }
    } catch (error) {// console.log(error);
    }
  });
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(searchRegulationSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getTypeRegulationSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getUrlVideoSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getRegulationSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getRegulationByYearSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(getTypeRegulationByIDSaga)]);
}

/***/ }),

/***/ "./store/saga.js":
/*!***********************!*\
  !*** ./store/saga.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/saga */ "./store/page/saga.js");
/* harmony import */ var _rate_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rate/saga */ "./store/rate/saga.js");
/* harmony import */ var _layout_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/saga */ "./store/layout/saga.js");
/* harmony import */ var _regulation_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./regulation/saga */ "./store/regulation/saga.js");
/* harmony import */ var _menu_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/saga */ "./store/menu/saga.js");
/* harmony import */ var _investors_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./investors/saga */ "./store/investors/saga.js");
/* harmony import */ var _news_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./news/saga */ "./store/news/saga.js");








function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_page_saga__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(_rate_saga__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(_layout_saga__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_regulation_saga__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(_menu_saga__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(_investors_saga__WEBPACK_IMPORTED_MODULE_6__["default"])(), Object(_news_saga__WEBPACK_IMPORTED_MODULE_7__["default"])()]);
}

/***/ }),

/***/ "./styles/block.scss":
/*!***************************!*\
  !*** ./styles/block.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/custom.css":
/*!***************************!*\
  !*** ./styles/custom.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/localStorage.js":
/*!*******************************!*\
  !*** ./utils/localStorage.js ***!
  \*******************************/
/*! exports provided: getToken, setLang, getFlag, getLang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLang", function() { return setLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlag", function() { return getFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLang", function() { return getLang; });
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

/***/ "./utils/request.js":
/*!**************************!*\
  !*** ./utils/request.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./utils/localStorage.js");


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
  config.baseURL = `https://sapotacorp.com:8443/${Object(_localStorage__WEBPACK_IMPORTED_MODULE_1__["getLang"])()}/api`;
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
/* harmony default export */ __webpack_exports__["default"] = (request);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map