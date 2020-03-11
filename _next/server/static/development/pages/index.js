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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/block/DetailPerson.js":
/*!******************************************!*\
  !*** ./components/block/DetailPerson.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/user/mb-frontend/components/block/DetailPerson.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

function DetailPerson({
  data
}) {
  return __jsx("main", {
    id: "main",
    className: "sec-tb ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "sec-b",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h2", {
    className: "text-center h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, data.title), __jsx("div", {
    className: "list-8 row list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(data.listDetail, (item, index) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-3",
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: `item efch-${index + 2} ef-img-l equal`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "img tRes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("img", {
    className: " loaded loaded",
    "data-lazy-type": "image",
    src: item.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx("div", {
    className: "divtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h4", {
    className: "title line2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, item.name), __jsx("div", {
    className: "desc line2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, item.position))))))))));
}

DetailPerson.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (DetailPerson);

/***/ }),

/***/ "./components/block/Download.js":
/*!**************************************!*\
  !*** ./components/block/Download.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/user/mb-frontend/components/block/Download.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

function Download({
  data,
  id,
  type
}) {
  if (type && type === '1') {
    return __jsx("section", {
      className: " sec-tb b-tl-3",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("h2", {
      className: "ht text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, data.title), __jsx("div", {
      className: "inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("div", {
      className: "desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, data.description), __jsx("a", {
      className: "btn lg",
      href: data.buttonUrl ? data.buttonUrl : data.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, data.buttonTitle))));
  }

  if (type && type === '2') {
    return __jsx("section", {
      className: " sec-b ",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("div", {
      className: " b-tl-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("div", {
      className: "inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("h2", {
      className: "ht",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, data.title), __jsx("div", {
      className: "desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, data.description)), __jsx("a", {
      className: "btn lg btn-2",
      href: data.buttonUrl ? data.buttonUrl : data.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, data.buttonTitle))));
  }

  if (type && type === '3') {
    return __jsx("section", {
      className: " sec-b ",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      className: " b-tl-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("h2", {
      className: "ht",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, data.title), __jsx("div", {
      className: "divtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("div", {
      className: "desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, data.description), __jsx("a", {
      className: "btn lg btn-2",
      href: data.buttonUrl ? data.buttonUrl : data.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, data.buttonTitle)))));
  }

  if (type && type === '4') {
    return __jsx("section", {
      className: " sec-tb sec-hstt",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("div", {
      className: "inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("h2", {
      className: "ht",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, data.title), __jsx("p", {
      className: "desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, data.description), __jsx("a", {
      className: "btn lg btn-2",
      href: data.buttonUrl ? data.buttonUrl : data.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, data.buttonTitle))));
  }

  return null;
}

Download.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Download);

/***/ }),

/***/ "./components/block/Form.js":
/*!**********************************!*\
  !*** ./components/block/Form.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/form */ "./services/form.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/user/mb-frontend/components/block/Form.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  getPageBlock: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function Form({
  data
}) {
  const {
    0: formdata,
    1: setFormData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: formState,
    1: setFormState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const getFormByID = async () => {
    const res = await Object(_services_form__WEBPACK_IMPORTED_MODULE_2__["getFormbuilderByIdService"])(data.formdata);

    if (res && res.status === 200) {
      setFormData(JSON.parse(res.data.list));
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getFormByID();
  }, []);

  const handleChange = event => {
    event.persist();
    setFormState(formState => _objectSpread({}, formState, {
      [event.target.name]: event.target.value
    }));
  };

  console.log(formState);
  return __jsx("section", {
    className: "sec-tb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "max750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_3__["map"])(formdata, (item, index) => {
    if (item.type === 'header') {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("div", {
        className: "max600 entry-head text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(item.label)));
    }

    if (item.type === 'paragraph') {
      return __jsx("p", {
        className: item.className,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(item.label));
    }

    if (item.type === 'radio-group') {
      return __jsx("div", {
        className: "mb-30 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, Object(lodash__WEBPACK_IMPORTED_MODULE_3__["map"])(item.values, (items, key) => __jsx("label", {
        className: "radio",
        key: key,
        style: {
          marginLeft: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("input", {
        type: "radio",
        name: "check1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), items.label)));
    }

    if (item.type === 'text') {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("label", {
        className: "block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("span", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, item.label), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        className: "input",
        name: item.name,
        type: "text",
        placeholder: item.placeholder,
        style: {
          width: '100%'
        },
        onChange: e => handleChange(e),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }))));
    }

    if (item.type === 'textarea') {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("label", {
        className: "block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("span", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, item.label, "(", __jsx("span", {
        className: "require",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "*"), ")"), __jsx("textarea", {
        className: "input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }))));
    }

    if (item.type === 'button') {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("div", {
        className: "col-12 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("button", {
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, item.label)));
    }
  }))));
}

Form.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/block/Icon.js":
/*!**********************************!*\
  !*** ./components/block/Icon.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/user/mb-frontend/components/block/Icon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};

function Icon({
  data,
  id
}) {
  const {
    0: refCarousel,
    1: setRefCarousel
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, data[0].type === '1' && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, data.length > 8 && __jsx("section", {
    className: "sec-tb sec-h-1 group-ef block-icon",
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "entry-head text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("h2", {
    className: "ht",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, data[0].title || '')), __jsx("div", {
    className: "sec-b",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "menuicon  owl-carousel   s-nav nav-2 owl-loaded owl-drag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "owl-stage-outer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "owl-stage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(data, (items, index) => __jsx("div", {
    className: "item ef-img-t item_carousel",
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("a", {
    href: items.url,
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("img", {
    src: items.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, items.note_1))))))), __jsx("div", {
    className: "owl-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("div", {
    className: "owl-prev disabled",
    onClick: () => {
      refCarousel.previous();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("i", {
    className: "icon-arrow-1 ix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), __jsx("div", {
    className: "owl-next",
    onClick: () => {
      refCarousel.next();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("i", {
    className: "icon-arrow-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }))))))), data.length <= 8 && __jsx("section", {
    className: "sec-tb sec-h-1 group-ef loaded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    className: "entry-head text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("h2", {
    className: "ht efch-1 ef-img-t",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, data[0].title || '')), __jsx("div", {
    className: "menuicon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(data, (items, index) => __jsx("div", {
    className: `item  efch-${index + 3} ef-img-t`,
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("div", {
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("img", {
    className: " loaded loaded",
    "data-lazy-type": "image",
    src: items.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  })), __jsx("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, items.note_1)))))))), data[0].type === '2' && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("section", {
    className: "sec-b sec-img-svg group-ef loaded",
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("div", {
    className: "entry-head text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("h2", {
    className: "ht",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, data[0].title || '')), __jsx("div", {
    className: "row list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(data, (items, index) => {
    return __jsx("div", {
      className: `col-sm-6 col-md-${data[0].column}`,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx("div", {
      className: "item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx("a", {
      href: items.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx("div", {
      className: "img ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, __jsx("img", {
      className: " loaded loaded",
      src: items.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    })), __jsx("div", {
      className: "divtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, __jsx("h4", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, items.note_1), __jsx("div", {
      className: "desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, items.note_2)))));
  }))))), data[0].type === '3' && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("section", {
    className: "sec-b ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("div", {
    className: "entry-head text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx("h2", {
    className: "ht efch-1 ef-img-l",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, data[0].title || '')), __jsx("div", {
    className: "owl-carousel s-nav nav-2 list-9 owl-flex owl-loaded owl-drag",
    "data-res": "4,3,2,1",
    paramowl: "margin=0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("div", {
    className: "owl-stage-outer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx("div", {
    className: "owl-stage",
    style: "transform: translate3d(-1665px, 0px, 0px); transition: all 0.25s ease 0s; width: 2775px;",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(data, (items, index) => __jsx("div", {
    className: "owl-item",
    style: "width: 277.5px;",
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx("div", {
    className: "item efch-2 ef-img-l ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx("div", {
    className: "img ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, __jsx("img", {
    className: " loaded loaded",
    "data-lazy-type": "image",
    src: items.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  })), __jsx("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, items.note_1))))))), __jsx("div", {
    className: "owl-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx("div", {
    className: "owl-prev disabled",
    onClick: () => {
      refCarousel.previous();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx("i", {
    className: "icon-arrow-1 ix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  })), __jsx("div", {
    className: "owl-next",
    onClick: () => {
      refCarousel.next();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx("i", {
    className: "icon-arrow-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }))))))));
}

Icon.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./components/block/Images.js":
/*!************************************!*\
  !*** ./components/block/Images.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Images_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Images/index */ "./components/block/Images/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/user/mb-frontend/components/block/Images.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
};

function Images({
  data,
  id
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "entry-head text-center",
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h2", {
    className: "ht  efch-1 ef-img-t",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, data[0].title)), Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(data, (items, index) => {
    if (items.type === '1') {
      return __jsx(_Images_index__WEBPACK_IMPORTED_MODULE_1__["ImageLeft"], {
        items: items,
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      });
    }

    if (items.type === '2') {
      return __jsx(_Images_index__WEBPACK_IMPORTED_MODULE_1__["ImageRight"], {
        items: items,
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      });
    }

    if (items.type === '4') {
      return __jsx(_Images_index__WEBPACK_IMPORTED_MODULE_1__["ImageLeftMB"], {
        items: items,
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      });
    }

    if (items.type === '5') {
      return __jsx(_Images_index__WEBPACK_IMPORTED_MODULE_1__["ImageRightMB"], {
        items: items,
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      });
    }

    return __jsx(_Images_index__WEBPACK_IMPORTED_MODULE_1__["ImageCenter"], {
      items: items,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    });
  }));
}

Images.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Images);

/***/ }),

/***/ "./components/block/Images/Center.js":
/*!*******************************************!*\
  !*** ./components/block/Images/Center.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/user/mb-frontend/components/block/Images/Center.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

function ImageCenter({
  items
}) {
  return __jsx("section", {
    className: "sec-tb sec-cskh block-images-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "entry-head text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h2", {
    className: "ht ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, items.note_1), __jsx("div", {
    className: "desc max555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, items.note_2), __jsx("ul", {
    className: "efch-3 ef-tx-t",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, items.note_3)), items.video_url === undefined && __jsx("div", {
    className: "single_video  tRes_16_9 max750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("img", {
    className: " loaded loaded",
    "data-lazy-type": "image",
    "data-lazy-src": items.image,
    src: items.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), items.video_url && __jsx("div", {
    className: "single_video  tRes_16_9 max750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("iframe", {
    src: items.video_url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), items.text_action !== undefined && __jsx("a", {
    className: "btn lg",
    href: items.url === undefined ? '#' : items.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, items.text_action === undefined ? 'Đăng ký ngay' : items.text_action)));
}

ImageCenter.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (ImageCenter);

/***/ }),

/***/ "./components/block/Images/Left.js":
/*!*****************************************!*\
  !*** ./components/block/Images/Left.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/user/mb-frontend/components/block/Images/Left.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

function ImageLeft({
  items
}) {
  return __jsx("section", {
    className: "sec-tb sec-img-text group-ef loaded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "row center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, items.video_url === undefined && __jsx("div", {
    className: "img tRes_66 efch-2 ef-img-r ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("img", {
    className: " loaded loaded",
    "data-lazy-type": "image",
    "data-lazy-src": items.image,
    src: items.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), items.video_url !== undefined && __jsx("div", {
    className: "single_video  tRes_16_9 max750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("iframe", {
    src: items.video_url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "divtext entry-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("h2", {
    className: "ht  efch-1 ef-tx-t ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, items.note_1), __jsx("p", {
    className: "fs16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, items.note_2)), __jsx("ul", {
    className: "efch-3 ef-tx-t",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, items.note_3), items.text_action !== undefined && __jsx("a", {
    className: "btn lg",
    href: items.url === undefined ? '#' : items.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, items.text_action === undefined ? 'Đăng ký ngay' : items.text_action))))));
}

ImageLeft.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (ImageLeft);

/***/ }),

/***/ "./components/block/Images/LeftMB.js":
/*!*******************************************!*\
  !*** ./components/block/Images/LeftMB.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/user/mb-frontend/components/block/Images/LeftMB.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

function ImageLeftMB({
  items
}) {
  return __jsx("section", {
    className: "sec-tb sec-img-text group-ef loaded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "row center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, items.video_url === undefined && __jsx("div", {
    className: "img tRes_66 efch-2 ef-img-r ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("img", {
    className: " loaded loaded",
    "data-lazy-type": "image",
    "data-lazy-src": items.image,
    src: items.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }))), __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "divtext entry-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h2", {
    className: "ht  efch-1 ef-tx-t ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, items.note_1), __jsx("p", {
    className: "fs16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, items.note_2)), __jsx("a", {
    className: "btn lg",
    href: items.url === undefined ? '#' : items.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Xem Th\xEAm"))))));
}

ImageLeftMB.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (ImageLeftMB);

/***/ }),

/***/ "./components/block/Images/Right.js":
/*!******************************************!*\
  !*** ./components/block/Images/Right.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/user/mb-frontend/components/block/Images/Right.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

function ImageRight({
  items
}) {
  return __jsx("section", {
    className: "sec-b sec-img-text group-ef loaded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "row center end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, items.video_url === undefined && __jsx("div", {
    className: "img tRes_66 efch-2 ef-img-r ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("img", {
    className: " loaded loaded",
    "data-lazy-type": "image",
    "data-lazy-src": items.image,
    src: items.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), items.video_url !== undefined && __jsx("div", {
    className: "single_video  tRes_16_9 max750",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("iframe", {
    src: items.video_url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "divtext ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("h2", {
    className: "ht ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, items.note_1), __jsx("p", {
    className: "fs16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, items.note_2)), __jsx("ul", {
    className: "efch-3 ef-tx-t",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, items.note_3), items.text_action !== undefined && __jsx("a", {
    className: "btn lg",
    href: items.url === undefined ? '#' : items.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, items.text_action === undefined ? 'Đăng ký ngay' : items.text_action))))));
}

ImageRight.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (ImageRight);

/***/ }),

/***/ "./components/block/Images/RightMB.js":
/*!********************************************!*\
  !*** ./components/block/Images/RightMB.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/user/mb-frontend/components/block/Images/RightMB.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

function ImageRightMB({
  items
}) {
  return __jsx("section", {
    className: "sec-b sec-img-text group-ef loaded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "row center end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, items.video_url === undefined && __jsx("div", {
    className: "img tRes_66 efch-2 ef-img-r ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("img", {
    className: " loaded loaded",
    "data-lazy-type": "image",
    "data-lazy-src": items.image,
    src: items.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }))), __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "divtext entry-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h2", {
    className: "ht  efch-1 ef-tx-t ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, items.note_1), __jsx("p", {
    className: "fs16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, items.note_2)), __jsx("a", {
    className: "btn lg",
    href: items.url === undefined ? '#' : items.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Xem Th\xEAm"))))));
}

ImageRightMB.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (ImageRightMB);

/***/ }),

/***/ "./components/block/Images/index.js":
/*!******************************************!*\
  !*** ./components/block/Images/index.js ***!
  \******************************************/
/*! exports provided: ImageLeft, ImageRight, ImageCenter, ImageLeftMB, ImageRightMB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Left__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Left */ "./components/block/Images/Left.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageLeft", function() { return _Left__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Right__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Right */ "./components/block/Images/Right.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageRight", function() { return _Right__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Center__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Center */ "./components/block/Images/Center.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageCenter", function() { return _Center__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _LeftMB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LeftMB */ "./components/block/Images/LeftMB.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageLeftMB", function() { return _LeftMB__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _RightMB__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RightMB */ "./components/block/Images/RightMB.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageRightMB", function() { return _RightMB__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./components/block/MenuIntro.js":
/*!***************************************!*\
  !*** ./components/block/MenuIntro.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/form */ "./services/form.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/user/mb-frontend/components/block/MenuIntro.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  getPageBlock: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function MenuIntro({
  data
}) {
  const {
    0: formdata,
    1: setFormData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const getFormByID = async () => {
    const res = await Object(_services_form__WEBPACK_IMPORTED_MODULE_2__["getFormbuilderByIdService"])(Number(data.formdata));

    if (res && res.status === 200) {
      setFormData(res.data);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getFormByID();
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("section", {
    className: " sec-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("li", {
    className: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Gi\u1EDBi thi\u1EC7u")), Object(lodash__WEBPACK_IMPORTED_MODULE_3__["map"])(data.listBlock, (values, index) => __jsx("li", {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("a", {
    href: `#${values.id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, values.title)))))), __jsx("section", {
    className: " sec-tb sec-ab-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "row list-item ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "boxwidget",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("h2", {
    className: "widget-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "GI\u1EDAI THI\u1EC6U"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "App MBBank l\xE0 \u1EE9ng d\u1EE5ng ng\xE2n h\xE0ng c\u1EE7a MB tr\xEAn \u0111i\u1EC7n tho\u1EA1i di \u0111\u1ED9ng, cho ph\xE9p kh\xE1ch h\xE0ng th\u1EF1c hi\u1EC7n h\u1EA7u h\u1EBFt giao d\u1ECBch t\xE0i ch\xEDnh, thanh to\xE1n h\xE0ng ng\xE0y v\u1EDBi thao t\xE1c \u0111\u01A1n gi\u1EA3n, th\u1EF1c hi\u1EC7n \u0111\u01B0\u1EE3c m\u1ECDi l\xFAc, m\u1ECDi n\u01A1i. L\xE0 \u1EE9ng d\u1EE5ng \u0111\u01B0\u1EE3c c\xE0i \u0111\u1EB7t tr\xEAn \u0111i\u1EC7n tho\u1EA1i th\xF4ng minh n\xEAn th\u01B0\u1EDDng xuy\xEAn \u0111\u01B0\u1EE3c n\xE2ng c\u1EA5p, mang \u0111\u1EBFn tr\u1EA3i nghi\u1EC7m v\xE0 s\u1EF1 thu\u1EADn ti\u1EC7n t\u1ED1i \u01B0u nh\u1EA5t cho kh\xE1ch h\xE0ng", ' ')), __jsx("div", {
    className: "boxwidget-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "N\u1EBFu b\u1EA1n mu\u1ED1n c\xF3 th\xEAm th\xF4ng tin v\u1EC1 s\u1EA3n ph\u1EA9m Vay si\xEAu nhanh, h\xE3y li\xEAn h\u1EC7 ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), " \u2028v\u1EDBi ch\xFAng t\xF4i qua:"), __jsx("div", {
    className: "fs16 cl1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "1900 545426 - (84-24) 3767 4050 (qu\u1ED1c t\u1EBF g\u1ECDi v\u1EC1)"))), __jsx("div", {
    className: "col-lg-4 sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    className: "widget widget-tuvan",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(formdata.embedded))))))));
}

MenuIntro.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (MenuIntro);

/***/ }),

/***/ "./components/block/MiniTab.js":
/*!*************************************!*\
  !*** ./components/block/MiniTab.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MiniTabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MiniTabItem */ "./components/block/MiniTabItem.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/user/mb-frontend/components/block/MiniTab.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};

function MiniTab({
  data,
  id
}) {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('0');
  return __jsx("div", {
    className: "container",
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("section", {
    className: "sec-tb block-minitab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h2", {
    className: "ht styleht",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, data[0].title), __jsx("div", {
    className: "cttab-v3   ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "tab-menu style-table-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(data, (value, index) => __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      active: activeTab === String(index)
    }),
    onClick: () => {
      setActiveTab(String(index));
    },
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, value.tabtitle)))), __jsx("div", {
    className: "tab-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(data, (value, index) => __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      active: activeTab === String(index)
    }),
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "tab-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "list-7  list-item row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_MiniTabItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })))))))));
}

MiniTab.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (MiniTab);

/***/ }),

/***/ "./components/block/MiniTabItem.js":
/*!*****************************************!*\
  !*** ./components/block/MiniTabItem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/page */ "./services/page.js");
var _jsxFileName = "/home/user/mb-frontend/components/block/MiniTabItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

function MiniTabItem({
  data
}) {
  const {
    0: listPage,
    1: setListPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const getPageBlock = async () => {
    const ids = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(data.pages, values => values.value);
    const res = await Object(_services_page__WEBPACK_IMPORTED_MODULE_3__["getPagesByIdService"])(ids);

    if (res && res.status === 200) {
      setListPage(res.data);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getPageBlock();
  }, []);
  return __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "list-7  list-item row style-table-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listPage, item => __jsx("div", {
    className: "col-md-6 style-colum1",
    key: item.newsId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("a", {
    href: `/page/${item.slug}`,
    className: "item item-inline-table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("img", {
    className: "lazy-hidden",
    "data-lazy-type": "image",
    src: item.baseImage,
    alt: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("div", {
    className: "divtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("h4", {
    className: "title line2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, item.name), __jsx("div", {
    className: "desc line4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, item.meta_description, "..")))))));
}

MiniTabItem.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (MiniTabItem);

/***/ }),

/***/ "./components/block/News.js":
/*!**********************************!*\
  !*** ./components/block/News.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_news__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/news */ "./services/news.js");
/* harmony import */ var _services_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/category */ "./services/category.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var react_show_more_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-show-more-text */ "react-show-more-text");
/* harmony import */ var react_show_more_text__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_show_more_text__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/home/user/mb-frontend/components/block/News.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  getCategoryPage: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
};

function News({
  data,
  type,
  id
}) {
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3);
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: listCategory,
    1: setListCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: slugCategory,
    1: setSlugCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const listNews = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["slice"])(listCategory, 0, 2);
  const listNewsTabs = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["slice"])(listCategory, 2, 5);
  const {
    0: refCarousel,
    1: setRefCarousel
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])();
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
    const res = await Object(_services_category__WEBPACK_IMPORTED_MODULE_5__["getCategoryByIdService"])(Number(data.category));

    if (res && res.status === 200) {
      setSlugCategory(res.data.slug);
    }
  };

  const getCategoryPage = async () => {
    const idItems = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(data.news, item => item.newsId);
    const res = await Object(_services_news__WEBPACK_IMPORTED_MODULE_4__["getNewByIdService"])(idItems);

    if (res && res.status === 200) {
      setListCategory(res.data);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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
    return __jsx("div", {
      className: "post_block mb-5 pt-4 mt-5",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, data === null ? '' : data.title)), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listNews, (item, index) => __jsx("div", {
      className: "col-sm-4 col-md-6 col-lg-4",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("div", {
      className: "post_content mb-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("div", {
      style: {
        height: '230px',
        width: '100%',
        overflow: 'hidden'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("img", {
      src: item.base_image,
      alt: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    })), __jsx("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx("div", {
      className: "date mt-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_2___default()(item.created_at).format('DD-MM-YYYY'))), __jsx("p", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, item.title), __jsx("p", {
      className: "show",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("a", {
      href: `/news/${item.url}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, t('viewmore')))))))), __jsx("div", {
      className: "btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("button", {
      onClick: () => showPage(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, active === false ? 'Xem thêm' : 'Thu gọn')));
  }

  if (type === '3') {
    return __jsx("section", {
      className: "sec-tb sec-h-4",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx("div", {
      className: "entry-head",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("h2", {
      className: "ht efch-1 ef-img-l",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, data.title), __jsx("p", {
      className: "cl5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, data.description), __jsx("a", {
      className: "viewall",
      href: `news/list/${slugCategory}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, t('view'), __jsx("i", {
      className: "icon-arrow-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }))), __jsx("div", {
      className: "row list-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-8 ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx("div", {
      className: "list-5 row ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listNews, (item, index) => __jsx("div", {
      className: "col-md-6",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, __jsx("a", {
      href: `/news/${item.url}`,
      className: `item efch-${index} ef-img-l equal`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx("div", {
      className: "img tRes_71",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx("img", {
      className: "lazy-hidden",
      "data-lazy-type": "image",
      src: item.base_image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    })), __jsx("div", {
      className: "divtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("div", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_2___default()(item.created_at).format('DD-MM-YYYY')), __jsx("h4", {
      className: "title line2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, item.title), __jsx("div", {
      className: "desc line2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, item.shortDescription))))))), __jsx("div", {
      className: "col-lg-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, __jsx("div", {
      className: "list-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listNewsTabs, (item, index) => __jsx("a", {
      key: index,
      href: `/news/${item.url}`,
      className: "item item-inline-table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx("div", {
      className: "img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, __jsx("img", {
      className: "lazy-hidden",
      "data-lazy-type": "image",
      src: item.base_image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    })), __jsx("div", {
      className: "divtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx("h4", {
      className: "title line4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, item.title)))))))));
  }

  if (type === '4') {
    return __jsx("section", {
      className: "sec-tb sec-h-3 ",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx("div", {
      className: "entry-head",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, __jsx("h2", {
      className: "ht efch-1 ef-img-t",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, data.title), __jsx("a", {
      className: "viewall",
      href: `news/list/${slugCategory}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, t('view'), " ", __jsx("i", {
      className: "icon-arrow-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }))), __jsx("div", {
      className: "owl-carousel equalHeight s-nav nav-2 list-5 owl-loaded owl-drag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, __jsx("div", {
      className: "owl-stage-outer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, __jsx("div", {
      className: "owl-stage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listCategory, (item, index) => __jsx("div", {
      className: "owl-item",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, __jsx("a", {
      href: `/news/${item.url}`,
      className: `item efch-${index} ef-img-l equal`,
      key: index,
      style: {
        height: '300px',
        width: '262px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, __jsx("div", {
      className: "img tRes_71",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, __jsx("img", {
      className: "lazy-hidden",
      "data-lazy-type": "image",
      src: item.base_image,
      style: {
        height: '187px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    })), __jsx("div", {
      className: "divtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, __jsx("div", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_2___default()(item.created_at).format('DD-MM-YYYY')), __jsx("h4", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, __jsx(react_show_more_text__WEBPACK_IMPORTED_MODULE_8___default.a, {
      lines: 1,
      more: "",
      expanded: false,
      width: 370,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, item.title))))))))), __jsx("div", {
      className: "owl-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, __jsx("div", {
      className: "owl-prev disabled",
      onClick: () => {
        refCarousel.previous();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, __jsx("i", {
      className: "icon-arrow-1 ix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    })), __jsx("div", {
      className: "owl-next",
      onClick: () => {
        refCarousel.next();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, __jsx("i", {
      className: "icon-arrow-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }))))));
  }

  if (type === '5') {
    return __jsx("section", {
      className: "sec-b",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, __jsx("h2", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, data.title), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, data.description), __jsx("div", {
      className: "list-5 row list-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listCategory, (item, index) => {
      // if (index < 3) {
      return __jsx("div", {
        className: data.column === undefined ? `col-md-4` : `col-md-${data.column}`,
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, __jsx("a", {
        href: `/news/${item.url}`,
        className: "item efch-2 ef-img-l ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, __jsx("div", {
        className: "img tRes_71",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, __jsx("img", {
        className: " loaded loaded",
        "data-lazy-type": "image",
        src: item.base_image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      })), __jsx("div", {
        className: "divtext",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, __jsx("div", {
        className: "date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_2___default()(item.created_at).format('DD-MM-YYYY')), __jsx("h4", {
        className: "title line2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, item.title), __jsx("div", {
        className: "desc line2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, item.shortDescription)))); // }
    }))));
  }

  if (type === '6') {
    return __jsx("section", {
      className: "sec-b sec-blog-2",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296
      },
      __self: this
    }, __jsx("h2", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297
      },
      __self: this
    }, data.title), __jsx("div", {
      className: "row list-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }, __jsx("a", {
      href: data.url,
      className: "item-banner  tRes ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300
      },
      __self: this
    }, __jsx("img", {
      className: " loaded loaded",
      "data-lazy-type": "image",
      src: data.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }))), __jsx("div", {
      className: "col-lg-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    }, __jsx("div", {
      className: "list-1-1  mb-30 ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listCategory, (item, index) => {
      if (index === 0) {
        return __jsx("a", {
          href: `/news/${item.url}`,
          className: "item  tRes_39 ",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 309
          },
          __self: this
        }, __jsx("img", {
          className: " loaded loaded",
          "data-lazy-type": "image",
          src: item.base_image,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 310
          },
          __self: this
        }), __jsx("div", {
          className: "divtext",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 315
          },
          __self: this
        }, __jsx("h4", {
          className: "title line2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 316
          },
          __self: this
        }, item.title)));
      }

      return null;
    })), __jsx("div", {
      className: "list-5 row list-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listCategory, (item, index) => {
      if (index > 0 && index < 3) {
        return __jsx("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 328
          },
          __self: this
        }, __jsx("a", {
          href: `/news/${item.url}`,
          className: `item efch-${index} ef-img-l `,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 329
          },
          __self: this
        }, __jsx("div", {
          className: "img tRes_51",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330
          },
          __self: this
        }, __jsx("img", {
          className: " loaded loaded",
          "data-lazy-type": "image",
          src: item.base_image,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331
          },
          __self: this
        })), __jsx("div", {
          className: "divtext",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 337
          },
          __self: this
        }, __jsx("h4", {
          className: "title line2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 338
          },
          __self: this
        }, item.title))));
      }

      return null;
    }))))));
  }

  if (type === '7') {
    return __jsx("section", {
      className: "sec-b",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356
      },
      __self: this
    }, __jsx("div", {
      className: "list-5 row list-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listCategory, (item, index) => __jsx("div", {
      className: "col-md-4",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359
      },
      __self: this
    }, __jsx("a", {
      href: `/news/${item.url}`,
      className: `item efch-${index} ef-img-l`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360
      },
      __self: this
    }, __jsx("div", {
      className: "img tRes_71",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361
      },
      __self: this
    }, __jsx("img", {
      className: " loaded loaded",
      "data-lazy-type": "image",
      src: item.base_image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362
      },
      __self: this
    })), __jsx("div", {
      className: "divtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364
      },
      __self: this
    }, __jsx("div", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_2___default()(item.created_at).format('DD-MM-YYYY')), __jsx("h4", {
      className: "title line2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366
      },
      __self: this
    }, item.title), __jsx("div", {
      className: "desc line2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367
      },
      __self: this
    }, item.shortDescription))))))));
  }

  if (type === '8') {
    return __jsx("section", {
      className: "sec-b sec-h-4__",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380
      },
      __self: this
    }, __jsx("h2", {
      className: "font",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381
      },
      __self: this
    }, data.title), __jsx("p", {
      className: "cl5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382
      },
      __self: this
    }, data.description), __jsx("div", {
      className: "list-5 list-5-1 row list-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listCategory, (item, index) => __jsx("div", {
      className: "col-md-4",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385
      },
      __self: this
    }, __jsx("a", {
      href: `/news/${item.url}`,
      className: `item efch-${index} ef-img-l equal`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386
      },
      __self: this
    }, __jsx("div", {
      className: "divtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387
      },
      __self: this
    }, __jsx("div", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_2___default()(item.created_at).format('DD-MM-YYYY')), __jsx("h4", {
      className: "title line2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389
      },
      __self: this
    }, item.title), __jsx("div", {
      className: "desc line2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390
      },
      __self: this
    }, item.shortDescription), __jsx("span", {
      className: "more cl1",
      style: {
        display: 'block',
        paddingTop: '30px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391
      },
      __self: this
    }, t('look_more')))))))));
  }

  if (type === '9') {
    return __jsx("section", {
      className: "sec-b sec-h-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406
      },
      __self: this
    }, __jsx("div", {
      className: "entry-head",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407
      },
      __self: this
    }, __jsx("h2", {
      className: "ht efch-1 ef-img-l",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408
      },
      __self: this
    }, data.title)), __jsx("div", {
      className: "row list-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-6 list-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listCategory, (item, index) => {
      if (index === 0) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 415
          },
          __self: this
        }, __jsx("a", {
          href: `/news/${item.url}`,
          className: "item  tRes_56 video",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 416
          },
          __self: this
        }, item.author_name === '' || item.author_name === null ? __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 418
          },
          __self: this
        }, __jsx("img", {
          className: " loaded loaded",
          "data-lazy-type": "image",
          "data-lazy-src": "https://via.placeholder.com/262x187",
          src: item.base_image,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 419
          },
          __self: this
        }), __jsx("div", {
          className: "divtext",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 425
          },
          __self: this
        }, __jsx("div", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 426
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_2___default()(item.created_at).format('DD-MM-YYYY')), __jsx("h4", {
          className: "title line2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 429
          },
          __self: this
        }, item.title))) : __jsx("iframe", {
          src: item.author_name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 433
          },
          __self: this
        })));
      }

      return null;
    })), __jsx("div", {
      className: "col-lg-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442
      },
      __self: this
    }, __jsx("div", {
      className: "list-6-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 443
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listCategory, (item, index) => {
      if (index > 0 && index < 3) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 447
          },
          __self: this
        }, __jsx("a", {
          href: `/news/${item.url}`,
          className: "item item-inline-table",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 448
          },
          __self: this
        }, item.author_name === null ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 450
          },
          __self: this
        }, __jsx("div", {
          className: "img tRes_56 video cl",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 451
          },
          __self: this
        }, __jsx("img", {
          className: " loaded loaded",
          "data-lazy-type": "image",
          src: item.base_image,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 452
          },
          __self: this
        })), __jsx("div", {
          className: "divtext",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 458
          },
          __self: this
        }, __jsx("div", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 459
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_2___default()(item.created_at).format('DD-MM-YYYY')), __jsx("h4", {
          className: "title line2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 462
          },
          __self: this
        }, item.title), __jsx("div", {
          className: "desc line3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 463
          },
          __self: this
        }, item.shortDescription))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 467
          },
          __self: this
        }, __jsx("div", {
          className: "img tRes_56 video cl",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 468
          },
          __self: this
        }, __jsx("iframe", {
          src: item.author_name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 469
          },
          __self: this
        })), __jsx("div", {
          className: "divtext",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 471
          },
          __self: this
        }, __jsx("div", {
          className: "date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 472
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_2___default()(item.created_at).format('DD-MM-YYYY')), __jsx("h4", {
          className: "title line2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 475
          },
          __self: this
        }, item.title), __jsx("div", {
          className: "desc line3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 476
          },
          __self: this
        }, item.shortDescription)))));
      }

      return null;
    }))))));
  }
}

News.propTypes = propTypes;

News.getInitialProps = async () => ({
  namespacesRequired: ['common', 'news']
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_7__["withTranslation"])('common')(News));

/***/ }),

/***/ "./components/block/Pages.js":
/*!***********************************!*\
  !*** ./components/block/Pages.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/page */ "./services/page.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/user/mb-frontend/components/block/Pages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};

function Pages({
  data,
  type,
  id
}) {
  const {
    0: page
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3);
  const {
    0: listPage,
    1: setListPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const getPageBlock = async () => {
    const ids = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(data.pages, values => values.value);
    const res = await Object(_services_page__WEBPACK_IMPORTED_MODULE_3__["getPagesByIdService"])(ids);

    if (res && res.status === 200) {
      setListPage(res.data);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getPageBlock();
  }, []);
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
  const listNews = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["slice"])(listPage, 0, page);

  if (type && type === '1') {
    return __jsx("div", {
      className: "container sec-tb block-page",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("div", {
      className: "entry-head text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx("div", {
      className: "list-5 row list-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listNews, item => __jsx("div", {
      className: "col-md-4",
      key: item.newsId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("a", {
      href: `/page/${item.slug}`,
      className: "item ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("div", {
      className: "img tRes_71",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("img", {
      className: "lazy-hidden",
      "data-lazy-type": "image",
      src: item.baseImage,
      alt: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), __jsx("div", {
      className: "divtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("h4", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, item.name), __jsx("div", {
      className: "desc line4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, item.meta_description, "..")))))));
  }

  if (type && type === '2') {
    return __jsx("div", {
      className: "container",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("section", {
      className: "sec-tb  block-page block-type-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("h2", {
      className: "ht styleht",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, data.title), __jsx("div", {
      className: "list-7  list-item row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listNews, item => __jsx("div", {
      className: "col-md-6",
      key: item.newsId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("a", {
      href: `/page/${item.slug}`,
      className: "item item-inline-table style-colummb",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("div", {
      className: "img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("img", {
      className: "lazy-hidden",
      "data-lazy-type": "image",
      src: item.baseImage,
      alt: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })), __jsx("div", {
      className: "divtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("h4", {
      className: "title line2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, item.name), __jsx("div", {
      className: "desc line4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, item.meta_description, ".."))))))));
  }

  if (type && type === '3') {
    return __jsx("section", {
      className: "sec-tb",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("h2", {
      className: "ht text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, data.title), __jsx("div", {
      className: "list-7  list-item row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listPage, (values, index) => __jsx("div", {
      key: index,
      className: "col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("a", {
      href: values.slug,
      className: "item item-inline-table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("div", {
      className: "img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("img", {
      className: "lazy-hidden",
      "data-lazy-type": "image",
      src: values.baseImage,
      alt: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    })), __jsx("div", {
      className: "divtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, __jsx("h4", {
      className: "title line2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, values.name), __jsx("div", {
      className: "desc line4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, values.meta_description)))))), __jsx("div", {
      className: "tags",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(data.listTag, (values, index) => __jsx("a", {
      key: index,
      className: "tag",
      href: values.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, values.name)))));
  }

  if (type && type === '4') {
    return __jsx("section", {
      className: "sec-tb bg-gray",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, __jsx("div", {
      className: "max750",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }), __jsx("h2", {
      className: "ht text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, data.title), __jsx("ul", {
      className: "cols-2 link2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listPage, (values, index) => __jsx("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx("a", {
      href: values.slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, values.name)))), __jsx("div", {
      className: "tags",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(data.listTag, (values, index) => __jsx("a", {
      key: index,
      className: "tag",
      href: values.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, values.name)))));
  }
}

Pages.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Pages);

/***/ }),

/***/ "./components/block/Post.js":
/*!**********************************!*\
  !*** ./components/block/Post.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/user/mb-frontend/components/block/Post.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
};

function Post({
  data,
  type
}) {
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3);
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const listNews = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["slice"])(data.news, 0, page);
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(); //   slice(data.news, 0, page)

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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
    return __jsx("div", {
      className: "post_block mb-5 pt-4 mt-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, data.title)), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listNews, item => __jsx("div", {
      className: "col-sm-4 col-md-6 col-lg-4",
      key: item.newsId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("div", {
      className: "post_content mb-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      style: {
        height: '230px',
        width: '100%',
        overflow: 'hidden'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("img", {
      src: item.base_image,
      alt: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })), __jsx("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      className: "date mt-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_2___default()(item.created_at).format('DD-MM-YYYY'))), __jsx("p", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, item.title), __jsx("p", {
      className: "show",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("a", {
      href: `/news/${item.url}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Xem th\xEAm"))))))), __jsx("div", {
      className: "btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("button", {
      onClick: () => showPage(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, active === false ? 'Xem thêm' : 'Thu gọn')));
  }

  if (type === '3') {
    return __jsx("section", {
      className: "sec-tb sec-h-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("div", {
      className: "entry-head",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("h2", {
      className: "ht efch-1 ef-img-l",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, data.title), __jsx("a", {
      className: "viewall",
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, t('view.viewall'), " ", __jsx("i", {
      className: "icon-arrow-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }))), __jsx("div", {
      className: "row list-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-8 ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("div", {
      className: "list-5 row ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listNews, item => __jsx("div", {
      className: "col-md-6",
      key: item.newsId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "item efch-<?php echo $i+1; ?> ef-img-l equal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx("div", {
      className: "img tRes_71",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("img", {
      className: "lazy-hidden",
      "data-lazy-type": "image",
      src: item.base_image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    })), __jsx("div", {
      className: "divtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx("div", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_2___default()(item.created_at).format('DD-MM-YYYY')), __jsx("h4", {
      className: "title line2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, item.title), __jsx("div", {
      className: "desc line2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, item.description))))))), __jsx("div", {
      className: "col-lg-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listNewsTabs, item => __jsx("div", {
      className: "list-6",
      key: item.newsId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "item item-inline-table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("div", {
      className: "img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("img", {
      className: "lazy-hidden",
      "data-lazy-type": "image",
      src: item.base_image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    })), __jsx("div", {
      className: "divtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx("h4", {
      className: "title line4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, item.title)))))))));
  }

  if (type === '4') {
    return __jsx("section", {
      className: "sec-tb sec-h-3 ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx("div", {
      className: "entry-head",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("h2", {
      className: "ht efch-1 ef-img-l",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, data.title), __jsx("a", {
      className: "viewall",
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, t('view.viewall'), __jsx("i", {
      className: "icon-arrow-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }))), __jsx("div", {
      className: "owl-carousel equalHeight s-nav nav-2 list-5",
      "data-res": "4,3,2,1",
      paramowl: "margin=0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listNews, item => __jsx("a", {
      href: "#",
      className: "item efch-<?php echo $i+1; ?> ef-img-l equal",
      key: item.newsId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, __jsx("div", {
      className: "img tRes_71",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, __jsx("img", {
      className: "lazy-hidden",
      "data-lazy-type": "image",
      src: item.base_image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    })), __jsx("div", {
      className: "divtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx("div", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_2___default()(item.created_at).format('DD-MM-YYYY')), __jsx("h4", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, item.title)))))));
  }
}

Post.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./components/block/Product.js":
/*!*************************************!*\
  !*** ./components/block/Product.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/user/mb-frontend/components/block/Product.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};

function Product({
  data
}) {
  return __jsx("div", {
    className: "post_block mb-5 pt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, data.title)), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(data.page, items => {
    if (data.type === '1' || data.type === undefined) {
      return __jsx("div", {
        className: "col-sm-4",
        key: items.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("div", {
        className: "post_content mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("a", {
        href: `page/${items.slug}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("img", {
        src: items.baseImage,
        alt: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }))), __jsx("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("a", {
        href: `page/${items.slug}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("p", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, items.name)), __jsx("p", {
        className: "text_content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, items.meta_description))));
    }

    return __jsx("div", {
      className: "col-sm-4",
      key: items.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("div", {
      className: "row mb-3 mr-4 page_wapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("div", {
      className: "col-sm-5 img_wapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("a", {
      href: `page/${items.slug}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("img", {
      src: items.miniImage,
      alt: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }))), __jsx("div", {
      className: "col-sm-7 content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("a", {
      href: `page/${items.slug}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("p", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, items.name)), __jsx("p", {
      className: "text_content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, items.meta_description))));
  })));
}

Product.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./components/block/Question/Item.js":
/*!*******************************************!*\
  !*** ./components/block/Question/Item.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/user/mb-frontend/components/block/Question/Item.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const propTypes = {
  question: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  answer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

function QuestionItems({
  question,
  answer
}) {
  const {
    0: active,
    1: setAcive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx("div", {
    className: "accodion-tab ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    checked: active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("label", {
    className: "accodion-title",
    onClick: () => setAcive(!active),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, question), __jsx("span", {
    className: "triangle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("i", {
    className: "icon-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))), __jsx("div", {
    className: "accodion-content entry-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_1___default()(answer))));
}

QuestionItems.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (QuestionItems);

/***/ }),

/***/ "./components/block/Question/index.js":
/*!********************************************!*\
  !*** ./components/block/Question/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ "./components/block/Question/Item.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/user/mb-frontend/components/block/Question/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
};

function Questions({
  data,
  id
}) {
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(4);
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const list = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["slice"])(data, 0, page);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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

  return __jsx("section", {
    className: "sec-b sec-cauhoi",
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "entry-head text-center block-question-index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h2", {
    className: "ht ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, data[0].title || '')), __jsx("div", {
    className: "accodion accodion-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(list, (item, index) => __jsx(_Item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: index,
    answer: item.answer,
    question: item.question,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }))), data.length > 4 && __jsx("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("button", {
    className: "btn lg",
    onClick: () => show(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, active === false ? 'Xem thêm' : 'Thu gọn'))));
}

Questions.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Questions);

/***/ }),

/***/ "./components/block/Repeat.js":
/*!************************************!*\
  !*** ./components/block/Repeat.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/user/mb-frontend/components/block/Repeat.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};

function Repeat({
  data,
  type,
  id
}) {
  const {
    0: listTable,
    1: setListTable
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setListTable(data.listTable);
  });

  if (type === '1') {
    return __jsx("section", {
      className: " sec-tb ",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("div", {
      className: "table-responsive table table-full",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listTable, (items, index) => {
      return react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(items.description);
    }))));
  }

  if (type && type === '2') {
    return __jsx("section", {
      className: " sec-tb ",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("div", {
      className: "max950",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("div", {
      className: "row list-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listTable, (items, index) => __jsx("div", {
      key: index,
      className: "col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("div", {
      className: "widget-default widget-content entry-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(items.description))))))));
  }

  if (type && type === '3') {
    return __jsx("section", {
      className: " sec-tb ",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("div", {
      className: "max950",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("div", {
      className: "row list-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listTable, (items, index) => __jsx("div", {
      key: index,
      className: "col-md-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("div", {
      className: "widget-default table ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(items.description))))))));
  }

  if (type && type === '4') {
    return __jsx("section", {
      className: " sec-tb ",
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("div", {
      className: "max950",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("div", {
      className: "row list-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("div", {
      className: "row grid-space-20 list-item ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(listTable, (items, index) => __jsx("div", {
      key: index,
      className: "col-md-6 col-sm-6 col-lg-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("div", {
      className: "widget-default table ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(items.description)))))))));
  }
}

Repeat.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Repeat);

/***/ }),

/***/ "./components/block/SingerPost.js":
/*!****************************************!*\
  !*** ./components/block/SingerPost.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/user/mb-frontend/components/block/SingerPost.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};

function SingerPost({
  data
}) {
  return __jsx("div", {
    className: "block_imege_left mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h2", {
    className: "title mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, data.title), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("img", {
    src: data.news.base_image,
    alt: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "date mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, moment__WEBPACK_IMPORTED_MODULE_1___default()(data.news.created_at).format('DD-MM-YYYY'))), __jsx("p", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, data.news.title), __jsx("p", {
    className: "show",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("a", {
    href: `/news/${data.news.url}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Xem th\xEAm"))))));
}

SingerPost.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (SingerPost);

/***/ }),

/***/ "./components/block/TagProduct.js":
/*!****************************************!*\
  !*** ./components/block/TagProduct.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/index */ "./components/block/product/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/user/mb-frontend/components/block/TagProduct.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};

function TagProduct({
  data,
  id
}) {
  return __jsx("section", {
    className: "sec-tb sec-h-2 bg-gray group-ef loaded",
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "entry-head text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h2", {
    className: "ht efch-1 ef-img-t",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, data[0].title || '')), __jsx(_product_index__WEBPACK_IMPORTED_MODULE_1__["ItemImages"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_product_index__WEBPACK_IMPORTED_MODULE_1__["ItemIcon"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })));
}

TagProduct.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (TagProduct);

/***/ }),

/***/ "./components/block/index.js":
/*!***********************************!*\
  !*** ./components/block/index.js ***!
  \***********************************/
/*! exports provided: Images, Post, Question, Icon, SingerPost, Repeat, Product, Pages, MiniTab, MiniTabItem, News, Form, TagProduct, MenuIntro, Download, DetailPerson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./components/block/Icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Images */ "./components/block/Images.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Images", function() { return _Images__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post */ "./components/block/Post.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return _Post__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Question */ "./components/block/Question/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return _Question__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _SingerPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SingerPost */ "./components/block/SingerPost.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingerPost", function() { return _SingerPost__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Repeat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Repeat */ "./components/block/Repeat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Repeat", function() { return _Repeat__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Product */ "./components/block/Product.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _Product__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _MiniTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MiniTab */ "./components/block/MiniTab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiniTab", function() { return _MiniTab__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Pages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pages */ "./components/block/Pages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pages", function() { return _Pages__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _MiniTabItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MiniTabItem */ "./components/block/MiniTabItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiniTabItem", function() { return _MiniTabItem__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _News__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./News */ "./components/block/News.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "News", function() { return _News__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Form */ "./components/block/Form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _TagProduct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TagProduct */ "./components/block/TagProduct.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagProduct", function() { return _TagProduct__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _MenuIntro__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MenuIntro */ "./components/block/MenuIntro.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuIntro", function() { return _MenuIntro__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _Download__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Download */ "./components/block/Download.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Download", function() { return _Download__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _DetailPerson__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DetailPerson */ "./components/block/DetailPerson.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DetailPerson", function() { return _DetailPerson__WEBPACK_IMPORTED_MODULE_15__["default"]; });



















/***/ }),

/***/ "./components/block/product/ItemIcon.js":
/*!**********************************************!*\
  !*** ./components/block/product/ItemIcon.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/user/mb-frontend/components/block/product/ItemIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};

function ItemIcon({
  data
}) {
  const table = data.filter((item, index) => index >= 5);
  return __jsx("div", {
    className: "row list-item list-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(data, (item, index) => {
    if (index >= 2 && index < 5) {
      return __jsx("div", {
        className: "col-lg-3 col-6 efch-4 ef-img-t",
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx("a", {
        href: item.url === undefined ? '#' : item.url,
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("div", {
        className: "img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("img", {
        className: " loaded loaded",
        "data-lazy-type": "image",
        "data-lazy-src": item.image,
        src: item.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), __jsx("h4", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, item.note_1), __jsx("div", {
        className: "desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, item.note_2)));
    }

    return null;
  }), __jsx("div", {
    className: "col-lg-3 col-6 efch-7 ef-img-t",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "item item-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("h5", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Truy c\u1EADp nhanh"), Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(table, (item, index) => __jsx("a", {
    className: "btn btn-3 radius-8",
    style: {
      letterSpacing: '1px'
    },
    href: item.url === undefined ? '#' : item.url,
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("img", {
    className: "icon-image",
    "data-lazy-type": "image",
    "data-lazy-src": item.image,
    src: item.image,
    width: "25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), item.note_1)))));
}

ItemIcon.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (ItemIcon);

/***/ }),

/***/ "./components/block/product/ItemImages.js":
/*!************************************************!*\
  !*** ./components/block/product/ItemImages.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/user/mb-frontend/components/block/product/ItemImages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};

function ItemImages({
  data
}) {
  return __jsx("div", {
    className: "row list-item list-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(data, (item, index) => {
    if (index < 2) {
      return __jsx("div", {
        className: "col-md-6 efch-2 ef-img-t",
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx("a", {
        href: item.url === undefined ? '#' : item.url,
        className: "item tRes_66",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx("img", {
        className: " loaded loaded",
        "data-lazy-type": "image",
        "data-lazy-src": item.image,
        src: item.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), __jsx("div", {
        className: "divtext",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("div", {
        className: "desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, item.note_1), __jsx("h4", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, item.note_2))));
    }

    return null;
  }));
}

ItemImages.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (ItemImages);

/***/ }),

/***/ "./components/block/product/index.js":
/*!*******************************************!*\
  !*** ./components/block/product/index.js ***!
  \*******************************************/
/*! exports provided: ItemImages, ItemIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemImages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemImages */ "./components/block/product/ItemImages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemImages", function() { return _ItemImages__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ItemIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemIcon */ "./components/block/product/ItemIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemIcon", function() { return _ItemIcon__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/common/BlockRender.js":
/*!******************************************!*\
  !*** ./components/common/BlockRender.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block */ "./components/block/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/user/mb-frontend/components/common/BlockRender.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array
};

function BlockRender({
  data
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data !== undefined && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(data.sort((a, b) => a.position - b.position), (values, index) => {
    if (values.name === 'Block Icon' && values.content !== null) {
      return __jsx(_block__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        id: values.id,
        data: JSON.parse(values.content),
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      });
    }

    if (values.name === 'Block Images' && values.content !== null) {
      return __jsx(_block__WEBPACK_IMPORTED_MODULE_1__["Images"], {
        id: values.id,
        data: JSON.parse(values.content),
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      });
    }

    if (values.name === 'Single Post' && values.content !== null) {
      return __jsx(_block__WEBPACK_IMPORTED_MODULE_1__["SingerPost"], {
        id: values.id,
        data: JSON.parse(values.content),
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      });
    }

    if (values.name === 'Block News' && values.content !== null) {
      return __jsx(_block__WEBPACK_IMPORTED_MODULE_1__["News"], {
        type: JSON.parse(values.content).type,
        data: JSON.parse(values.content),
        key: index,
        id: values.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      });
    } // if (values.name === 'Block News') {
    //   return <Post data={JSON.parse(values.content)} key={index} />;
    // }


    if (values.name === 'Pages' && values.content !== null) {
      return __jsx(_block__WEBPACK_IMPORTED_MODULE_1__["Pages"], {
        id: values.id,
        data: JSON.parse(values.content),
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      });
    }

    if (values.name === 'Form đăng kí' && values.content !== null) {
      return __jsx(_block__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        id: values.id,
        data: JSON.parse(values.content),
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      });
    }

    if (values.name === 'Category-mini-wtithtab' && values.content !== null) {
      return __jsx(_block__WEBPACK_IMPORTED_MODULE_1__["MiniTab"], {
        id: values.id,
        data: JSON.parse(values.content),
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      });
    }

    if (values.name === 'Table' && values.content !== null) {
      return __jsx(_block__WEBPACK_IMPORTED_MODULE_1__["Repeat"], {
        data: JSON.parse(values.content),
        type: JSON.parse(values.content).type,
        key: index,
        id: values.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      });
    }

    if (values.name === 'Download' && values.content !== null) {
      return __jsx(_block__WEBPACK_IMPORTED_MODULE_1__["Download"], {
        data: JSON.parse(values.content),
        type: JSON.parse(values.content).type,
        key: index,
        id: values.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      });
    }

    if (values.name === 'Product' && values.content !== null) {
      return __jsx(_block__WEBPACK_IMPORTED_MODULE_1__["Product"], {
        data: JSON.parse(values.content),
        id: values.id,
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      });
    }

    if (values.name === 'Question' && values.content !== null) {
      return __jsx(_block__WEBPACK_IMPORTED_MODULE_1__["Question"], {
        data: JSON.parse(values.content),
        id: values.id,
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      });
    }

    if (values.name === 'Category' && values.content !== null) {
      return __jsx(_block__WEBPACK_IMPORTED_MODULE_1__["Pages"], {
        type: JSON.parse(values.content).type,
        data: JSON.parse(values.content),
        key: index,
        id: values.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      });
    }

    if (values.name === 'Sản phẩm nổi bật' && values.content !== null) {
      return __jsx(_block__WEBPACK_IMPORTED_MODULE_1__["TagProduct"], {
        data: JSON.parse(values.content),
        key: index,
        id: values.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      });
    }

    if (values.name === 'MenuIntro' && values.content !== null) {
      return __jsx(_block__WEBPACK_IMPORTED_MODULE_1__["MenuIntro"], {
        data: JSON.parse(values.content),
        key: index,
        id: values.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      });
    }

    if (values.name === 'Lãnh Đạo' && values.content !== null) {
      return __jsx(_block__WEBPACK_IMPORTED_MODULE_1__["DetailPerson"], {
        data: JSON.parse(values.content),
        key: index,
        id: values.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      });
    }

    return null;
  })));
}

BlockRender.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (BlockRender);

/***/ }),

/***/ "./components/common/Carousel.js":
/*!***************************************!*\
  !*** ./components/common/Carousel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel */ "react-responsive-carousel");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/user/mb-frontend/components/common/Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const propType = {
  silder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

function Carousels({
  silder,
  className
}) {
  const getItems = (index, item) => {
    const url = item.props.children[0].props.href;
    window.location.href = url;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(silder) && __jsx("div", {
    className: className,
    style: {
      boxShadow: '0px 2px 26px 0px rgba(0,0,0,0.09)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["Carousel"], {
    showThumbs: false,
    showStatus: false,
    infiniteLoop: true,
    onClickItem: getItems,
    emulateTouch: true,
    showIndicators: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(silder, (item, index) => __jsx("div", {
    key: index,
    className: "silder_items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("a", {
    href: item.url === undefined ? '#' : item.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("img", {
    src: item.image,
    alt: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx("div", {
    className: `silder_content ${item.options} container`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("p", {
    className: "text_content1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, item.note_1), __jsx("p", {
    className: "text_content2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, item.note_2), __jsx("p", {
    className: "text_content3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, item.note_3), item.text_action !== undefined && __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    href: item.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, item.text_action))))))));
}

Carousels.propTypes = propType;
/* harmony default export */ __webpack_exports__["default"] = (Carousels);

/***/ }),

/***/ "./components/common/Contact.js":
/*!**************************************!*\
  !*** ./components/common/Contact.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! google-map-react */ "google-map-react");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/user/mb-frontend/components/common/Contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const propTypes = {
  settingFooter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  getSettingFooter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

function Contact({
  settingFooter,
  getSettingFooter
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getSettingFooter();
  }, []);

  const AnyReactComponent = ({
    text
  }) => __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, text);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("main", {
    id: "main",
    className: "section page-lien-he",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "container ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-4 col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "widget widget-contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h1", {
    className: "widget-title  h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Li\xEAn h\u1EC7"), settingFooter.information && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "H\u1ED9i s\u1EDF ch\xEDnh MBBank:"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, settingFooter.information.place), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Th\u1EDDi gian ph\u1EE5c v\u1EE5 kh\xE1ch h\xE0ng"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, settingFooter.information.time), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Hotline"), __jsx("div", {
    className: "phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    href: `tel:${settingFooter.information.hotLine}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, settingFooter.information.hotLine)), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, settingFooter.information.international), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Email"), __jsx("a", {
    href: `mailto:${settingFooter.information.email}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, settingFooter.information.email)))), __jsx("div", {
    className: "col-lg-8 col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, !isNaN(Number(settingFooter.latitude)) && __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
    bootstrapURLKeys: {
      key: 'AIzaSyBFtaHtOcwUGvv2pDBtMoPrI5NvnUwe2GU'
    },
    center: {
      lat: Number(settingFooter.latitude),
      lng: Number(settingFooter.longitude)
    },
    zoom: 18,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(AnyReactComponent, {
    lat: Number(settingFooter.latitude),
    lng: Number(settingFooter.longitude),
    text: "H\u1ED9i s\u1EDF ch\xEDnh MBBank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })))))));
}

Contact.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    settingFooter: state.layoutReducer.settingFooter
  };
};

const mapDispatchToProps = {
  getSettingFooter: _store_actions__WEBPACK_IMPORTED_MODULE_3__["LayoutActions"].getSettingFooterAction
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Contact));

/***/ }),

/***/ "./components/common/DowloadCategory.js":
/*!**********************************************!*\
  !*** ./components/common/DowloadCategory.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download */ "./components/common/download/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/user/mb-frontend/components/common/DowloadCategory.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const propTypes = {
  listRegulation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  typeRegulation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  seachRegulation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  getTypeRegulation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(moment__WEBPACK_IMPORTED_MODULE_2___default()(date).format('YYYY'));
  const {
    0: datatype,
    1: setDataType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    seachRegulation({
      idSearch: datatype,
      year: year
    });
    getTypeRegulation();
  }, [getTypeRegulation, seachRegulation]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    seachRegulation({
      idSearch: datatype,
      year: year
    });
  }, [year, datatype]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "accodion accodion-2 container sec-tb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_download__WEBPACK_IMPORTED_MODULE_1__["Fillter"], {
    type: typeRegulation,
    setDate: event => setYear(event.target.value),
    setType: event => setDataType(event.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_download__WEBPACK_IMPORTED_MODULE_1__["DowloadFile"], {
    data: listRegulation,
    year: year,
    isChecked: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(_download__WEBPACK_IMPORTED_MODULE_1__["DowloadVideo"], {
    data: listRegulation,
    year: year,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
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
  seachRegulation: _store_actions__WEBPACK_IMPORTED_MODULE_3__["RegulationActions"].searchRegulationAction,
  getTypeRegulation: _store_actions__WEBPACK_IMPORTED_MODULE_3__["RegulationActions"].getTypeRegulationAction,
  getUrlVideo: _store_actions__WEBPACK_IMPORTED_MODULE_3__["RegulationActions"].getUrlVideo
};
DowloadCategory.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProp, mapDispatchToProps)(DowloadCategory));

/***/ }),

/***/ "./components/common/MenuMiddle.js":
/*!*****************************************!*\
  !*** ./components/common/MenuMiddle.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/user/mb-frontend/components/common/MenuMiddle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};

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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data !== null && __jsx("div", {
    className: "sec-tb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "text-center common-menumiddle",
    style: {
      marginBottom: '40px',
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("h1", {
    className: "text-center",
    style: {
      margin: '15px 0 15px 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, data.title)), __jsx("div", {
    className: "menuicon container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, data.menuItems !== undefined && data.menuItems.length >= 8 && __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
    responsive: responsive,
    draggable: true,
    minimumTouchDrag: 80,
    ssr: true // means to render carousel on server-side.
    ,
    infinite: true,
    keyBoardControl: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_3__["map"])(data.menuItems.sort((a, b) => a.position - b.position), (item, key) => {
    return __jsx("div", {
      className: query === item.slugPages ? 'item active' : 'item',
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("a", {
      href: `/page/${item.slugPages}`,
      className: "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("div", {
      className: "img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("img", {
      className: " loaded loaded",
      "data-lazy-type": "image",
      "data-lazy-src": item.icon,
      src: item.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    })), __jsx("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, item.name)));
  })), data.menuItems !== undefined && data.menuItems.length < 8 && __jsx("div", {
    className: "list-menu-middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_3__["map"])(data.menuItems.sort((a, b) => a.position - b.position), (item, key) => {
    return __jsx("div", {
      className: query === item.slugPages ? 'item active' : 'item',
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("a", {
      href: `/page/${item.slugPages}`,
      className: "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("div", {
      className: "img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("img", {
      className: " loaded loaded",
      "data-lazy-type": "image",
      "data-lazy-src": item.icon,
      src: item.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    })), __jsx("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, item.name)));
  })))));
}

MenuMiddle.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (MenuMiddle);

/***/ }),

/***/ "./components/common/Pagination.js":
/*!*****************************************!*\
  !*** ./components/common/Pagination.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/user/mb-frontend/components/common/Pagination.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const propTypes = {
  page: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  setPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  next: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  previous: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function Pagination({
  page,
  setPage,
  next,
  previous
}) {
  return __jsx("div", {
    className: "pages mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("ul", {
    className: "page-numbers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("a", {
    className: "prev page-numbers",
    onClick: () => next(page - 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("i", {
    className: "icon-arrow-2 ix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("span", {
    className: page === 1 || page === 0 ? 'page-numbers current' : 'page-numbers',
    onClick: () => setPage(1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "1")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("a", {
    className: page === 2 ? 'page-numbers current' : 'page-numbers',
    onClick: () => setPage(2),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "2")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("span", {
    className: "page-numbers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "...")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("a", {
    className: page === 8 ? 'page-numbers current' : 'page-numbers',
    onClick: () => setPage(8),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "8")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("a", {
    className: page === 9 ? 'page-numbers current' : 'page-numbers',
    onClick: () => setPage(9),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "9")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("a", {
    className: "next page-numbers",
    onClick: () => previous(page + 1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("i", {
    className: "icon-arrow-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })))));
}

Pagination.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./components/common/Social.js":
/*!*************************************!*\
  !*** ./components/common/Social.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/user/mb-frontend/components/common/Social.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

function Social({
  data
}) {
  return __jsx("ul", {
    className: "blog-item-social ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("a", {
    className: "item",
    title: "Facebook",
    href: data.facebook,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("i", {
    className: "icon-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("a", {
    className: "item",
    title: "Instagram",
    href: data.instagram,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("i", {
    className: "icon-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    className: "item",
    title: "Twitter",
    href: data.twitter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("i", {
    className: "icon-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("a", {
    className: "item",
    title: "Youtube",
    href: data.youtube,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("i", {
    className: "icon-youtube-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))));
}

Social.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Social);

/***/ }),

/***/ "./components/common/download/DowloadFile.js":
/*!***************************************************!*\
  !*** ./components/common/download/DowloadFile.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/user/mb-frontend/components/common/download/DowloadFile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const propTypes = {
  year: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  fileIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  isChecked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array
};

function DowloadFile({
  year,
  isChecked,
  fileIcon,
  data
}) {
  const {
    0: checked,
    1: setChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isChecked);
  return __jsx("div", {
    className: "accodion-tab ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    id: "chck_2",
    checked: checked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("label", {
    className: "accodion-title h2",
    onClick: () => setChecked(!checked),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, " ", year, " "), __jsx("span", {
    className: "triangle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("i", {
    className: "icon-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))), __jsx("div", {
    className: "accodion-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("ul", {
    className: "list-download",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(data, item => {
    return __jsx("li", {
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("span", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("i", {
      className: fileIcon ? 'icon-t14' : 'icon-date-2',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), item.name), __jsx("span", {
      className: "data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_2___default()(item.createdAt).format('DD-MM-YYYY')));
  })))));
}

DowloadFile.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (DowloadFile);

/***/ }),

/***/ "./components/common/download/DowloadFileWapper.js":
/*!*********************************************************!*\
  !*** ./components/common/download/DowloadFileWapper.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./components/common/download/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./components/common/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/actions */ "./store/actions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/user/mb-frontend/components/common/download/DowloadFileWapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const propTypes = {
  listRegulation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired,
  typeRegulation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired,
  seachRegulation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  getTypeRegulation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};

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
    className: "accodion accodion-2 container sec-tb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_index__WEBPACK_IMPORTED_MODULE_1__["Fillter"], {
    center: true,
    type: typeRegulation,
    setDate: event => setYear(event.target.value),
    setType: event => setDataType(event.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_index__WEBPACK_IMPORTED_MODULE_1__["DowloadFile"], {
    data: listRegulation.investors,
    year: year,
    isChecked: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {
    page: page,
    setPage: pageNumber => setPage(pageNumber),
    next: nextNumber => setPage(nextNumber),
    previous: previousNumber => setPage(previousNumber),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
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
  seachRegulation: _store_actions__WEBPACK_IMPORTED_MODULE_4__["RegulationActions"].getRegulation,
  getTypeRegulation: _store_actions__WEBPACK_IMPORTED_MODULE_4__["RegulationActions"].getTypeRegulationAction,
  getUrlVideo: _store_actions__WEBPACK_IMPORTED_MODULE_4__["RegulationActions"].getUrlVideo
};
DowloadFileWapper.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProp, mapDispatchToProps)(DowloadFileWapper));

/***/ }),

/***/ "./components/common/download/DowloadVideo.js":
/*!****************************************************!*\
  !*** ./components/common/download/DowloadVideo.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_regulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/regulation */ "./services/regulation.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/user/mb-frontend/components/common/download/DowloadVideo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const propTypes = {
  year: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  data: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array
};

function DowloadVideo({
  year,
  data
}) {
  const {
    0: urlVideo,
    1: setURlVideo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_services_regulation__WEBPACK_IMPORTED_MODULE_2__["getUrlVideoService"])(year).then(res => {
      if (res !== null && res.data !== undefined) {
        setURlVideo(res.data.urlVideo);
      }
    });
  }, [year]);
  return __jsx("div", {
    className: "boxwidget box-download-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h2", {
    className: "widget-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, year), __jsx("div", {
    className: "row grid-space-60",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "single_video  tRes_16_9",
    "data-id": "2UrWPUAr68A",
    "data-video": "autoplay=1&controls=1&mute=0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("iframe", {
    src: urlVideo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))), __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("ul", {
    className: "list-download ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(data, item => {
    return __jsx("li", {
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("span", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("i", {
      className: "icon-date-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), item.name), __jsx("span", {
      className: "data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_3___default()(item.createdAt).format('DD-MM-YYYY')), __jsx("span", {
      className: "down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("a", {
      href: item.urlFile,
      download: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("i", {
      className: "icon-arrow-6 ib",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }))));
  })))));
}

DowloadVideo.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (DowloadVideo);

/***/ }),

/***/ "./components/common/download/DowloadVideoWapper.js":
/*!**********************************************************!*\
  !*** ./components/common/download/DowloadVideoWapper.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./components/common/download/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./components/common/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/actions */ "./store/actions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/user/mb-frontend/components/common/download/DowloadVideoWapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const propTypes = {
  listRegulation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired,
  typeRegulation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired,
  seachRegulation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  getTypeRegulation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  searByYear: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};

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
    className: "accodion accodion-2 container sec-tb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_index__WEBPACK_IMPORTED_MODULE_1__["Fillter"], {
    center: true,
    type: typeRegulation,
    setDate: event => setYear(event.target.value),
    setType: event => setDataType(event.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(listRegulation, item => {
    if (item.investors.length > 0) {
      return __jsx("div", {
        className: "sec-tb",
        key: item.year,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx(_index__WEBPACK_IMPORTED_MODULE_1__["DowloadVideo"], {
        data: item.investors,
        year: item.year,
        isChecked: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }));
    }

    return null;
  }), __jsx(_index__WEBPACK_IMPORTED_MODULE_3__["Pagination"], {
    page: page,
    setPage: pageNumber => setPage(pageNumber),
    next: nextNumber => setPage(nextNumber),
    previous: previousNumber => setPage(previousNumber),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
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
  seachRegulation: _store_actions__WEBPACK_IMPORTED_MODULE_4__["RegulationActions"].getRegulationByYear,
  getTypeRegulation: _store_actions__WEBPACK_IMPORTED_MODULE_4__["RegulationActions"].getTypeRegulationAction,
  getUrlVideo: _store_actions__WEBPACK_IMPORTED_MODULE_4__["RegulationActions"].getUrlVideo
};
DowloadFileWapper.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProp, mapDispatchToProps)(DowloadFileWapper));

/***/ }),

/***/ "./components/common/download/Fillter.js":
/*!***********************************************!*\
  !*** ./components/common/download/Fillter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/user/mb-frontend/components/common/download/Fillter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  center: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  setDate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  setType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function Filler({
  type,
  setDate,
  setType,
  center
}) {
  return __jsx("div", {
    className: center ? 'filter-category mb-5 text-center' : 'filter-category mb-5',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("select", {
    className: "select mr-2",
    onChange: setDate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("option", {
    value: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "N\u0103m..."), __jsx("option", {
    value: 2020,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "2020"), __jsx("option", {
    value: 2021,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "2021")), __jsx("select", {
    className: "select",
    onChange: setType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("option", {
    value: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Ch\u1ECDn..."), Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(type, item => {
    return __jsx("option", {
      value: item.id,
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, item.name);
  })));
}

Filler.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Filler);

/***/ }),

/***/ "./components/common/download/ListDowloadFIle.js":
/*!*******************************************************!*\
  !*** ./components/common/download/ListDowloadFIle.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../download */ "./components/common/download/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./components/common/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions */ "./store/actions.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/user/mb-frontend/components/common/download/ListDowloadFIle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  search: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  listType: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  listRegulation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  getTypeRegulation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  seachRegulation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: year,
    1: setYear
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getTypeRegulation(type);
    seachRegulation(type, 0, 10, 0, 0);
  }, [getTypeRegulation]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    seachRegulation(type, datatype, 10, page, year);
  }, [page, year, datatype]);
  return __jsx("div", {
    className: "accodion accodion-2 container sec-tb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, search && __jsx(_download__WEBPACK_IMPORTED_MODULE_1__["Fillter"], {
    center: true,
    type: listType,
    setDate: event => setYear(event.target.value),
    setType: event => setDataType(event.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), Object(lodash__WEBPACK_IMPORTED_MODULE_4__["map"])(listRegulation, (item, index) => {
    if (item.investors.length > 0) {
      return __jsx("div", {
        className: "sec-tb",
        key: item.year,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx(_download__WEBPACK_IMPORTED_MODULE_1__["DowloadFile"], {
        data: item.investors,
        year: item.year,
        isChecked: index === 0 ? true : false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }));
    }

    return null;
  }), __jsx(_common__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {
    page: page,
    setPage: pageNumber => setPage(pageNumber),
    next: nextNumber => setPage(nextNumber),
    previous: previousNumber => setPage(previousNumber),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }));
}

const mapStateToProp = state => {
  return {
    listRegulation: state.regulationReducer.listDataByYear,
    listType: state.regulationReducer.listTypeByID
  };
};

const mapDispatchToProps = {
  seachRegulation: _store_actions__WEBPACK_IMPORTED_MODULE_3__["RegulationActions"].getRegulationByYear,
  getTypeRegulation: _store_actions__WEBPACK_IMPORTED_MODULE_3__["RegulationActions"].getTypeRegulationByIDAction
};
ListDowloadFIle.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProp, mapDispatchToProps)(ListDowloadFIle));

/***/ }),

/***/ "./components/common/download/ListDowloadQA.js":
/*!*****************************************************!*\
  !*** ./components/common/download/ListDowloadQA.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../download */ "./components/common/download/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Question */ "./components/common/download/Question.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common */ "./components/common/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/actions */ "./store/actions.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/home/user/mb-frontend/components/common/download/ListDowloadQA.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  search: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  listType: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  listRegulation: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  getTypeRegulation: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  seachRegulation: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: year,
    1: setYear
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(moment__WEBPACK_IMPORTED_MODULE_2___default()(date).format('YYYY'));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    seachRegulation(type, year, page);
  }, [getTypeRegulation]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    seachRegulation(type, year, page);
  }, [page]);
  return __jsx("div", {
    className: "accodion accodion-2 container sec-tb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, search && __jsx(_download__WEBPACK_IMPORTED_MODULE_1__["Fillter"], {
    center: true,
    type: listType,
    setDate: event => setYear(event.target.value),
    setType: event => setDataType(event.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("section", {
    className: "sec-b sec-cauhoi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_6__["map"])(listRegulation.investors, (item, index) => {
    return __jsx(_Question__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      answer: item.description,
      question: item.name,
      isChecked: index === 0 ? true : false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    });
  })), __jsx(_common__WEBPACK_IMPORTED_MODULE_4__["Pagination"], {
    page: page,
    setPage: pageNumber => setPage(pageNumber),
    next: nextNumber => setPage(nextNumber),
    previous: previousNumber => setPage(previousNumber),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }));
}

const mapStateToProp = state => {
  return {
    listRegulation: state.regulationReducer.listData,
    listType: state.regulationReducer.listTypeByID
  };
};

const mapDispatchToProps = {
  seachRegulation: _store_actions__WEBPACK_IMPORTED_MODULE_5__["RegulationActions"].getRegulation,
  getTypeRegulation: _store_actions__WEBPACK_IMPORTED_MODULE_5__["RegulationActions"].getTypeRegulationByIDAction
};
ListDowloadQA.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProp, mapDispatchToProps)(ListDowloadQA));

/***/ }),

/***/ "./components/common/download/ListDowloadVideo.js":
/*!********************************************************!*\
  !*** ./components/common/download/ListDowloadVideo.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../download */ "./components/common/download/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./components/common/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/actions */ "./store/actions.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/user/mb-frontend/components/common/download/ListDowloadVideo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  listType: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  listRegulation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  getTypeRegulation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  seachRegulation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};

function ListDowloadFIle({
  type,
  listType,
  listRegulation,
  getTypeRegulation,
  seachRegulation
}) {
  const {
    0: datatype,
    1: setDataType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: year,
    1: setYear
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getTypeRegulation(type);
    seachRegulation(type, 0, 10, 0, 0);
  }, [getTypeRegulation]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    seachRegulation(type, datatype, 10, page, year);
  }, [page, year, datatype]);
  return __jsx("div", {
    className: "accodion accodion-2 container sec-tb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_download__WEBPACK_IMPORTED_MODULE_1__["Fillter"], {
    center: true,
    type: listType,
    setDate: event => setYear(event.target.value),
    setType: event => setDataType(event.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), Object(lodash__WEBPACK_IMPORTED_MODULE_4__["map"])(listRegulation, (item, index) => {
    if (item.investors.length > 0) {
      return __jsx("div", {
        className: "sec-tb",
        key: item.year,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx(_download__WEBPACK_IMPORTED_MODULE_1__["DowloadVideo"], {
        data: item.investors,
        year: item.year,
        isChecked: index === 0 ? true : false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }));
    }

    return null;
  }), __jsx(_common__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {
    page: page,
    setPage: pageNumber => setPage(pageNumber),
    next: nextNumber => setPage(nextNumber),
    previous: previousNumber => setPage(previousNumber),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }));
}

const mapStateToProp = state => {
  return {
    listRegulation: state.regulationReducer.listDataByYear,
    listType: state.regulationReducer.listTypeByID
  };
};

const mapDispatchToProps = {
  seachRegulation: _store_actions__WEBPACK_IMPORTED_MODULE_3__["RegulationActions"].getRegulationByYear,
  getTypeRegulation: _store_actions__WEBPACK_IMPORTED_MODULE_3__["RegulationActions"].getTypeRegulationByIDAction
};
ListDowloadFIle.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProp, mapDispatchToProps)(ListDowloadFIle));

/***/ }),

/***/ "./components/common/download/Question.js":
/*!************************************************!*\
  !*** ./components/common/download/Question.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/user/mb-frontend/components/common/download/Question.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const propTypes = {
  question: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  answer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isChecked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function Question({
  question,
  answer,
  isChecked
}) {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isChecked);
  return __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "accodion accodion-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "accodion-tab",
    onClick: () => setIsOpen(!isOpen),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    checked: isOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("label", {
    className: "accodion-title no-borber",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, question), __jsx("span", {
    className: "triangle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("i", {
    className: "icon-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }))), __jsx("div", {
    className: "accodion-content entry-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, answer)))));
}

Question.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ }),

/***/ "./components/common/download/index.js":
/*!*********************************************!*\
  !*** ./components/common/download/index.js ***!
  \*********************************************/
/*! exports provided: Fillter, DowloadFile, DowloadVideo, DowloadFileWapper, DowloadVideoWapper, ListDowloadFIle, ListDowloadVideo, ListDowloadQA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fillter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fillter */ "./components/common/download/Fillter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fillter", function() { return _Fillter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _DowloadFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DowloadFile */ "./components/common/download/DowloadFile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DowloadFile", function() { return _DowloadFile__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _DowloadVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DowloadVideo */ "./components/common/download/DowloadVideo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DowloadVideo", function() { return _DowloadVideo__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _DowloadFileWapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DowloadFileWapper */ "./components/common/download/DowloadFileWapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DowloadFileWapper", function() { return _DowloadFileWapper__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _DowloadVideoWapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DowloadVideoWapper */ "./components/common/download/DowloadVideoWapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DowloadVideoWapper", function() { return _DowloadVideoWapper__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ListDowloadFIle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListDowloadFIle */ "./components/common/download/ListDowloadFIle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListDowloadFIle", function() { return _ListDowloadFIle__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _ListDowloadVideo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ListDowloadVideo */ "./components/common/download/ListDowloadVideo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListDowloadVideo", function() { return _ListDowloadVideo__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _ListDowloadQA__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListDowloadQA */ "./components/common/download/ListDowloadQA.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListDowloadQA", function() { return _ListDowloadQA__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),

/***/ "./components/common/index.js":
/*!************************************!*\
  !*** ./components/common/index.js ***!
  \************************************/
/*! exports provided: Carousel, MenuMiddle, BlockRender, DowloadCategory, Social, DowloadFileWapper, DowloadVideoWapper, Pagination, Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel */ "./components/common/Carousel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return _Carousel__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _MenuMiddle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuMiddle */ "./components/common/MenuMiddle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuMiddle", function() { return _MenuMiddle__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _BlockRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlockRender */ "./components/common/BlockRender.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockRender", function() { return _BlockRender__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _DowloadCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DowloadCategory */ "./components/common/DowloadCategory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DowloadCategory", function() { return _DowloadCategory__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Social */ "./components/common/Social.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Social", function() { return _Social__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pagination */ "./components/common/Pagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _Pagination__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _download_DowloadFileWapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./download/DowloadFileWapper */ "./components/common/download/DowloadFileWapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DowloadFileWapper", function() { return _download_DowloadFileWapper__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _download_DowloadVideoWapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./download/DowloadVideoWapper */ "./components/common/download/DowloadVideoWapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DowloadVideoWapper", function() { return _download_DowloadVideoWapper__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Contact */ "./components/common/Contact.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return _Contact__WEBPACK_IMPORTED_MODULE_8__["default"]; });












/***/ }),

/***/ "./components/formRate/RateSelect.js":
/*!*******************************************!*\
  !*** ./components/formRate/RateSelect.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/user/mb-frontend/components/formRate/RateSelect.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};

function RateSelect({
  data
}) {
  return __jsx("select", {
    className: "select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(data, value => __jsx("option", {
    key: value.id,
    value: value.currency,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, value.currency)));
}

RateSelect.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (RateSelect);

/***/ }),

/***/ "./components/formRate/Table.js":
/*!**************************************!*\
  !*** ./components/formRate/Table.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
var _jsxFileName = "/home/user/mb-frontend/components/formRate/Table.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};

function TableRate({
  data
}) {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
  return __jsx("table", {
    className: "table table-borderless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, t('codeNT')), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, t('buycash')), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, t('transfer')), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, t('sold_out'))), Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(data, value => {
    return __jsx("tr", {
      key: value.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("img", {
      src: "static/flags/vn.png",
      alt: "",
      style: {
        top: '-1px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), value.currency), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, value.buy_cash), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, value.buy_transfer), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, value.sell));
  })));
}

TableRate.propTypes = propTypes;

TableRate.getInitialProps = async () => ({
  namespacesRequired: ['common', 'tableRate']
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_4__["withTranslation"])('common')(TableRate));

/***/ }),

/***/ "./components/formRate/index.js":
/*!**************************************!*\
  !*** ./components/formRate/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _RateSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RateSelect */ "./components/formRate/RateSelect.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Table */ "./components/formRate/Table.js");
var _jsxFileName = "/home/user/mb-frontend/components/formRate/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

function FormRate({
  data
}) {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])();
  return __jsx("section", {
    className: "sec-b sec-tb sec-tigia",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, data !== undefined && __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "row list-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "divtigia",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, t('exchange_rate')), __jsx(_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data.exchangeRateDetail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), __jsx("div", {
    className: "col-lg-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "divquidoi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, t('change_foreign_currency')), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, t('transfer_from')), __jsx("div", {
    className: "input-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("span", {
    className: "input-group-addon none arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_RateSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data.exchangeRateDetail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("i", {
    className: "icon-arrow-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx("input", {
    className: "input",
    placeholder: t('amount'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, t('to')), __jsx("div", {
    className: "input-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("span", {
    className: "input-group-addon none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_RateSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data.exchangeRateDetail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("i", {
    className: "icon-arrow-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), __jsx("input", {
    className: "input",
    placeholder: t('amount'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, `${t('updated_at')} ${moment__WEBPACK_IMPORTED_MODULE_0___default()(data.created_at).format('HH:mm')} ${t('date')} ${moment__WEBPACK_IMPORTED_MODULE_0___default()(data.created_at).format('DD/MM/YYYY')}`))))));
}

FormRate.propTypes = propTypes;

FormRate.getInitialProps = async () => ({
  namespacesRequired: ['common', 'formRate']
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_4__["withTranslation"])('common')(FormRate));

/***/ }),

/***/ "./components/layout/ModalDrawer/index.js":
/*!************************************************!*\
  !*** ./components/layout/ModalDrawer/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _submenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./submenu */ "./components/layout/ModalDrawer/submenu.js");
var _jsxFileName = "/home/user/mb-frontend/components/layout/ModalDrawer/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const propTypes = {
  menu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

function ModalDrawer({
  menu
}) {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: indexMenu,
    1: setIndexMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const nestChild = items => {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(items, item => __jsx("li", {
      key: item.id,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        children: activeTab === false && indexMenu === item.id,
        'children parent-showsub': activeTab === true && indexMenu === item.id
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, item.children.length > 0 && __jsx("span", {
      className: "showsubmenu icon-arrow-2 ib",
      onClick: () => {
        setActiveTab(!activeTab);
        setIndexMenu(item.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("a", {
      href: `/page/${item.slugPages}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, item.name)), item.children.length > 0 && __jsx("ul", {
      style: {
        display: activeTab && indexMenu === item.id ? 'block' : 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx(_submenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
      menu: item.children,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }))));
  };

  return __jsx("div", {
    className: "wrap-menu-mb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "wrapul main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("ul", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, nestChild(menu)))));
}

ModalDrawer.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (ModalDrawer);

/***/ }),

/***/ "./components/layout/ModalDrawer/submenu.js":
/*!**************************************************!*\
  !*** ./components/layout/ModalDrawer/submenu.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/user/mb-frontend/components/layout/ModalDrawer/submenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const propTypes = {
  menu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

function SubMenu({
  menu
}) {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: indexMenu,
    1: setIndexMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const nestChild = items => {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["map"])(items, item => __jsx("li", {
      key: item.id,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        children: activeTab === false && indexMenu === item.id,
        'children parent-showsub': activeTab === true && indexMenu === item.id
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, item.children.length > 0 && __jsx("span", {
      className: "showsubmenu icon-arrow-2 ib",
      onClick: () => {
        setActiveTab(!activeTab);
        setIndexMenu(item.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx("a", {
      href: `/page/${item.slugPages}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, item.name)), item.children.length > 0 && __jsx("ul", {
      style: {
        display: activeTab && indexMenu === item.id ? 'block' : 'none'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(SubMenu, {
      menu: item.children,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }))));
  };

  return nestChild(menu);
}

SubMenu.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (SubMenu);

/***/ }),

/***/ "./components/layout/Widget.js":
/*!*************************************!*\
  !*** ./components/layout/Widget.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/user/mb-frontend/components/layout/Widget.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};

function Widget({
  data
}) {
  return __jsx("div", {
    className: "widget widget-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("a", {
    href: "./",
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("img", {
    src: "/static/images/logo-blue.svg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }))), react_html_parser__WEBPACK_IMPORTED_MODULE_1___default()(data.footer_brief), __jsx("div", {
    className: "call",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("a", {
    href: `tel:${data.footer_address}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("i", {
    className: "icon-phone-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), " ", data.footer_address)));
}

Widget.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Widget);

/***/ }),

/***/ "./components/layout/WidgetMb.js":
/*!***************************************!*\
  !*** ./components/layout/WidgetMb.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./components/common/index.js");
var _jsxFileName = "/home/user/mb-frontend/components/layout/WidgetMb.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  socialLink: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
};

function Widget({
  data,
  socialLink
}) {
  return __jsx("div", {
    className: "widget widget-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("a", {
    href: "./",
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("img", {
    src: "/static/images/logo-blue.svg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }))), react_html_parser__WEBPACK_IMPORTED_MODULE_1___default()(data.footer_brief), __jsx("div", {
    className: "call",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("a", {
    href: `tel:${data.footer_address}`,
    className: "phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("i", {
    className: "icon-phone-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), " ", data.footer_address), __jsx(_common__WEBPACK_IMPORTED_MODULE_3__["Social"], {
    data: socialLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })));
}

Widget.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Widget);

/***/ }),

/***/ "./components/layout/index.js":
/*!************************************!*\
  !*** ./components/layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_images_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/images/logo.svg */ "./public/images/logo.svg");
/* harmony import */ var _public_images_svg_pin_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/svg/pin.svg */ "./public/images/svg/pin.svg");
/* harmony import */ var _public_images_svg_bieuphi_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/svg/bieuphi.svg */ "./public/images/svg/bieuphi.svg");
/* harmony import */ var _public_images_svg_folder_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/svg/folder.svg */ "./public/images/svg/folder.svg");
/* harmony import */ var _public_images_svg_giadinh_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/images/svg/giadinh.svg */ "./public/images/svg/giadinh.svg");
/* harmony import */ var _public_images_svg_MB_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/images/svg/MB.svg */ "./public/images/svg/MB.svg");
/* harmony import */ var _public_images_svg_tienich_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/images/svg/tienich.svg */ "./public/images/svg/tienich.svg");
/* harmony import */ var _public_images_svg_home_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/images/svg/home.svg */ "./public/images/svg/home.svg");
/* harmony import */ var _public_images_svg_btt_chplay_mb_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/images/svg/btt-chplay-mb.svg */ "./public/images/svg/btt-chplay-mb.svg");
/* harmony import */ var _public_images_svg_btt_google_mb_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/images/svg/btt-google-mb.svg */ "./public/images/svg/btt-google-mb.svg");
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Widget */ "./components/layout/Widget.js");
/* harmony import */ var _WidgetMb__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./WidgetMb */ "./components/layout/WidgetMb.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common */ "./components/common/index.js");
/* harmony import */ var _ModalDrawer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ModalDrawer */ "./components/layout/ModalDrawer/index.js");
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-sticky */ "react-sticky");
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_sticky__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../styles/custom.css */ "./styles/custom.css");
/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../utils/localStorage */ "./utils/localStorage.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_26__);
var _jsxFileName = "/home/user/mb-frontend/components/layout/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



























const propTypes = {
  settingFooter: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.object,
  socialLink: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.node,
  getSettingFooter: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.func,
  getSocialLink: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.func,
  title: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.any,
  menuHeader: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.array,
  menuNav: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.array,
  menuFooterTop: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.array,
  menuFooterBottom: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.array,
  menuFooterMain: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.array,
  getMenuHeader: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.func,
  getMenuNav: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.func,
  getMenuFooterTop: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.func,
  getMenuFooterMain: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.func,
  getMenuFooterBottom: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.func
};

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: flag,
    1: setFlag
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('vn');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getMenuHeader();
    getMenuNav();
    getMenuFooterTop();
    getMenuFooterMain();
    getMenuFooterBottom();
    getSettingFooter();
    getSocialLink();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setFlag(Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_24__["getFlag"])());
  }, [_utils_localStorage__WEBPACK_IMPORTED_MODULE_24__["getFlag"]]);
  const {
    i18n,
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_23__["useTranslation"])();

  const nestChild = items => {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_16__["map"])(items, item => __jsx("li", {
      key: item.id,
      className: item.children.length > 0 ? 'children parent-showsub' : 'no-children',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("a", {
      href: `/page/${item.slugPages}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, item.name)), __jsx("div", {
      className: "wrapul",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, item.children.length > 0 && __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, nestChild(item.children), " "))));
  };

  const footerItem = data => {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_16__["map"])(data, (item, index) => {
      if (item.children.length > 0) {
        return __jsx("div", {
          className: "widget",
          style: {
            marginTop: 20
          },
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, __jsx("h4", {
          className: "widget-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, item.name), __jsx("ul", {
          className: "menu",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, footerItem(item.children)));
      }

      return __jsx("li", {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("a", {
        className: item.children.length > 0 ? 'title' : '',
        href: `/page/${item.slugPages}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, item.name));
    });
  };

  const renderFooter = items => {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_16__["map"])(items, (values, key) => {
      return __jsx("div", {
        className: "col-md-3 col-6 col-lg-2  efch-2 ef-img-t",
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("div", {
        className: "widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx("h4", {
        className: "widget-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, values.name), __jsx("ul", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, footerItem(values.children))), key === items.length - 1 && __jsx(_common__WEBPACK_IMPORTED_MODULE_13__["Social"], {
        data: socialLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }));
    });
  };

  const renderFooterMobile = items => {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_16__["map"])(items, (values, key) => {
      return __jsx("div", {
        className: "col-md-3 col-6  efch-2 ef-img-t",
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx("div", {
        className: "widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, __jsx("h4", {
        className: "widget-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, values.name), __jsx("ul", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, footerItem(values.children))));
    });
  };

  const changeLang = (lang, flags) => {
    i18n.changeLanguage(lang);
    setFlag(flags);
    Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_24__["setLang"])(lang, flags);
  };

  return __jsx("body", {
    className: classnames__WEBPACK_IMPORTED_MODULE_22___default()({
      showMenu: activeDrawer
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(react_sticky__WEBPACK_IMPORTED_MODULE_15__["StickyContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_20___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, title || ''), __jsx("link", {
    rel: "icon",
    href: "https://www.mbbank.com.vn/images/icons/favicon.ico",
    type: "image/x-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
    integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), __jsx("script", {
    src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
    integrity: "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }), __jsx("script", {
    src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
    integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }), __jsx("script", {
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
    integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  })), __jsx("div", {
    id: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx("div", {
    id: "panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx("ul", {
    className: "menu line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_16__["map"])(menuHeader.sort((a, b) => a.position - b.position), // eslint-disable-next-line consistent-return
  (values, key) => {
    if (key < 2) {
      return __jsx("li", {
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, __jsx("a", {
        href: `/page/${values.slugPages}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, __jsx("img", {
        src: key === 0 ? _public_images_svg_pin_svg__WEBPACK_IMPORTED_MODULE_2__["default"] : _public_images_svg_bieuphi_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
        alt: key === 0 ? 'pin_icon' : 'bietphiIcon',
        width: "15",
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }), values.name));
    }
  }))), __jsx("div", {
    className: "col-md-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, __jsx("ul", {
    className: "menu line text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_16__["map"])(menuHeader.sort((a, b) => a.position - b.position), // eslint-disable-next-line consistent-return
  (values, key) => {
    if (key >= 2) {
      return __jsx("li", {
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, __jsx("a", {
        href: `/page/${values.slugPages}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, values.name));
    }
  }), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, __jsx("div", {
    className: "dropdown language",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, __jsx("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, __jsx("img", {
    src: `/static/flags/${flag}.png`,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  })), __jsx("i", {
    className: "icon-arrow-2 ib",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  })), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, __jsx("div", {
    className: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, __jsx("ul", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, __jsx("li", {
    className: flag === 'gb' ? 'lang-en active' : 'lang-en',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx("a", {
    onClick: () => changeLang('en', 'gb'),
    title: "English (en)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, __jsx("img", {
    src: "/static/flags/gb.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }), " ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, "English"))), __jsx("li", {
    className: flag === 'vn' ? 'lang-vi active' : 'lang-vi',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, __jsx("a", {
    onClick: () => changeLang('vi', 'vn'),
    title: "Ti\u1EBFng Vi\u1EC7t (vi)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, __jsx("img", {
    src: "/static/images/flags/vn.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, "Ti\u1EBFng Vi\u1EC7t"))))))))))))), __jsx(react_sticky__WEBPACK_IMPORTED_MODULE_15__["Sticky"], {
    topOffset: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, ({
    style
  }) => __jsx("div", {
    className: "setzindex",
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, __jsx("header", {
    id: "header",
    role: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    id: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, __jsx("img", {
    src: _public_images_logo_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  })), __jsx("div", {
    className: "wrap-menu-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, __jsx("ul", {
    className: "menu-top-header",
    "data-style": "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, nestChild(menuNav))), __jsx("div", {
    className: "group-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, __jsx("div", {
    className: "item ilogin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, __jsx("ul", {
    className: "menu line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, t('registration'))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, t('login'))))), __jsx("div", {
    className: "item ilang",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, __jsx("div", {
    className: "dropdown language",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, __jsx("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, __jsx("img", {
    src: `/static/flags/${flag}.png`,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  })), __jsx("i", {
    className: "icon-arrow-2 ib",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  })), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, __jsx("div", {
    className: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, __jsx("ul", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, __jsx("li", {
    className: flag === 'gb' ? 'lang-en active' : 'lang-en',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, __jsx("a", {
    title: "English (en)",
    onClick: () => changeLang('en', 'gb'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, __jsx("img", {
    src: "/static/images/flags/gb.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, "English"))), __jsx("li", {
    className: flag === 'vn' ? 'lang-vi active' : 'lang-vi',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, __jsx("a", {
    title: "Ti\u1EBFng Vi\u1EC7t (vi)",
    onClick: () => changeLang('vi', 'vn'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, __jsx("img", {
    src: "/static/images/flags/vn.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, "Ti\u1EBFng Vi\u1EC7t")))))))), __jsx("div", {
    className: "item imenu mobilemenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, __jsx("button", {
    className: "stylebuttonopen",
    onClick: () => {
      setActiveDrawwe(!activeDrawer);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, __jsx("span", {
    className: "menu-btn x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  })))))))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, children), __jsx("section", {
    className: "sec-cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, __jsx("div", {
    className: "row center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_16__["map"])(menuFooterTop.sort((a, b) => a.position - b.position), values => __jsx("div", {
    className: "col-4",
    key: values.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  }, __jsx("a", {
    className: "item",
    href: `/page/${values.slugPages}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, __jsx("span", {
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, __jsx("img", {
    src: values.icon,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  })), __jsx("div", {
    className: "divtext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, __jsx("h4", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, values.name), __jsx("div", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }, values.description)))))))), __jsx("section", {
    className: "sec-download-pc group-ef loaded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-6   efch-2 ef-img-r",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }, __jsx("p", {
    className: "stitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  }, t('sign_up_promotional')), __jsx("form", {
    role: "search",
    method: "get",
    className: "searchform ",
    action: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: t('enter_email'),
    name: "s",
    className: "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  })), __jsx("button", {
    type: "submit",
    className: "btn btn-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, t('registration')))), __jsx("div", {
    className: "col-md-6   efch-3 ef-img-r",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, __jsx("div", {
    className: "wapp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }, __jsx("span", {
    className: "code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, __jsx("img", {
    src: "/static/images/code.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  })), __jsx("div", {
    className: "app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }, __jsx("p", {
    className: "stitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, t('donwload_app_today')), __jsx("a", {
    href: "https://apple.co/2AqB7ZM",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, __jsx("img", {
    src: "/static/images/btt-chplay.svg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  })), "\xA0", __jsx("a", {
    href: "https://bit.ly/2v5ZsyP",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: this
  }, __jsx("img", {
    src: "/static/images/btt-google.svg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: this
  })), ' ')))))), __jsx("div", {
    id: "footer-pc",
    className: "group-ef loaded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }, __jsx("div", {
    className: "row grid-space-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-4 col-sm-12 efch-1 ef-img-t",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }, __jsx(_Widget__WEBPACK_IMPORTED_MODULE_11__["default"], {
    data: settingFooter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  })), renderFooter(menuFooterMain)), __jsx("div", {
    className: "line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: this
  }), __jsx("div", {
    className: "row grid-space-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-6 col-md-7 efch-5 ef-img-t",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
    },
    __self: this
  }, __jsx("ul", {
    className: "menu line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_16__["map"])(menuFooterBottom.sort((a, b) => a.position - b.position), (values, key) => __jsx("li", {
    key: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: this
  }, __jsx("a", {
    href: `/page/${values.slugPages}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: this
  }, values.name))))), __jsx("div", {
    className: "col-lg-6 col-md-5 efch-6 ef-img-t",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: this
  }, __jsx("div", {
    className: "copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }, "2019 \xA9 Copyright MBbank. All rights reserved."))))), __jsx("section", {
    className: "sec-download-mb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }, __jsx("div", {
    className: "wform",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: this
  }, __jsx("p", {
    className: "stitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: this
  }, t('sign_up_promotional')), __jsx("form", {
    role: "search",
    method: "get",
    className: "searchform ",
    action: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: this
  }, __jsx("div", {
    className: "aaa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: t('enter_email'),
    name: "s",
    className: "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  })), __jsx("button", {
    type: "submit",
    className: "btn btn-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: this
  }, "\u0110\u0103ng k\xFD"))), __jsx("div", {
    className: "wdownload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: this
  }, __jsx("span", {
    className: "stitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453
    },
    __self: this
  }, t('donwload_app_today')), "\xA0", __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: this
  }, __jsx("img", {
    src: _public_images_svg_btt_chplay_mb_svg__WEBPACK_IMPORTED_MODULE_9__["default"],
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: this
  })), ' ', "\xA0", __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }, __jsx("img", {
    src: _public_images_svg_btt_google_mb_svg__WEBPACK_IMPORTED_MODULE_10__["default"],
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
    },
    __self: this
  })))), __jsx("div", {
    id: "footer-mb",
    className: "group-ef loaded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: this
  }, __jsx("div", {
    className: "row grid-space-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-4 col-sm-12 efch-1 ef-img-t",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466
    },
    __self: this
  }, __jsx(_WidgetMb__WEBPACK_IMPORTED_MODULE_12__["default"], {
    data: settingFooter,
    socialLink: socialLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: this
  }))), __jsx("div", {
    className: "accodion accodion-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470
    },
    __self: this
  }, __jsx("div", {
    className: "accodion-tab ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    id: "chck_mf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: this
  }), __jsx("label", {
    className: "accodion-title",
    htmlFor: "chck_mf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474
    },
    __self: this
  }, " ", t('extend'), " "), ' ', __jsx("span", {
    className: "triangle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475
    },
    __self: this
  }, __jsx("i", {
    className: "icon-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: this
  }))), __jsx("div", {
    className: "accodion-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: this
  }, __jsx("div", {
    className: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: this
  }, __jsx("div", {
    className: "row grid-space-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481
    },
    __self: this
  }, renderFooterMobile(menuFooterMain))))))), __jsx("div", {
    className: "menu-footer-mb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490
    },
    __self: this
  }, __jsx("div", {
    className: "col-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491
    },
    __self: this
  }, __jsx("a", {
    className: "item ",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492
    },
    __self: this
  }, __jsx("span", {
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: this
  }, ' ', __jsx("img", {
    src: _public_images_svg_home_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495
    },
    __self: this
  })), __jsx("span", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: this
  }, t('home')))), __jsx("div", {
    className: "col-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: this
  }, __jsx("a", {
    className: "item",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501
    },
    __self: this
  }, __jsx("span", {
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502
    },
    __self: this
  }, __jsx("img", {
    src: _public_images_svg_folder_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    },
    __self: this
  })), __jsx("span", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
    },
    __self: this
  }, t('product')))), __jsx("div", {
    className: "col-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
    },
    __self: this
  }, __jsx("a", {
    className: "item ",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509
    },
    __self: this
  }, __jsx("span", {
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510
    },
    __self: this
  }, __jsx("img", {
    src: _public_images_svg_MB_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511
    },
    __self: this
  })), __jsx("span", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513
    },
    __self: this
  }, "MB++"))), __jsx("div", {
    className: "col-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516
    },
    __self: this
  }, __jsx("a", {
    className: "item ",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517
    },
    __self: this
  }, __jsx("span", {
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    },
    __self: this
  }, __jsx("img", {
    src: _public_images_svg_giadinh_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519
    },
    __self: this
  })), __jsx("span", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    },
    __self: this
  }, t('family')))), __jsx("div", {
    className: "col-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: this
  }, __jsx("a", {
    className: "item ",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525
    },
    __self: this
  }, __jsx("span", {
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526
    },
    __self: this
  }, __jsx("img", {
    src: _public_images_svg_tienich_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527
    },
    __self: this
  })), __jsx("span", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529
    },
    __self: this
  }, t('utilities'))))))))))), __jsx(_ModalDrawer__WEBPACK_IMPORTED_MODULE_14__["default"], {
    menu: menuNav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539
    },
    __self: this
  }));
}

Layout.propTypes = propTypes;

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
  getSettingFooter: _store_actions__WEBPACK_IMPORTED_MODULE_17__["LayoutActions"].getSettingFooterAction,
  getSocialLink: _store_actions__WEBPACK_IMPORTED_MODULE_17__["LayoutActions"].getSocailinkAction,
  getMenuHeader: _store_actions__WEBPACK_IMPORTED_MODULE_17__["MenuActions"].getMenuHeader,
  getMenuNav: _store_actions__WEBPACK_IMPORTED_MODULE_17__["MenuActions"].getMenuNav,
  getMenuFooterTop: _store_actions__WEBPACK_IMPORTED_MODULE_17__["MenuActions"].getMenuFooterTop,
  getMenuFooterMain: _store_actions__WEBPACK_IMPORTED_MODULE_17__["MenuActions"].getMenuFooterMain,
  getMenuFooterBottom: _store_actions__WEBPACK_IMPORTED_MODULE_17__["MenuActions"].getMenuFooterBottom
};

Layout.getInitialProps = async () => ({
  namespacesRequired: ['common', 'layout']
});

const withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_19__["connect"])(mapStateToProps, mapDispatchToProps);
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_26__["compose"])(Object(_i18n__WEBPACK_IMPORTED_MODULE_25__["withTranslation"])('common'), withConnect)(Layout));

/***/ }),

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

/***/ "./node_modules/react-multi-carousel/lib/styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/styles.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/common */ "./components/common/index.js");
/* harmony import */ var _components_formRate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/formRate */ "./components/formRate/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions */ "./store/actions.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/user/mb-frontend/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const propTypes = {
  list: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  silder: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired,
  menuMiddle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  listRate: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  getHome: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  getRate: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};

function Home({
  list,
  silder,
  menuMiddle,
  listRate,
  getHome,
  getRate
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getHome('homepage');
    getRate();
  }, [getHome, getRate]);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: list.meta_title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "main_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_components_common__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
    silder: silder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(_components_common__WEBPACK_IMPORTED_MODULE_1__["MenuMiddle"], {
    data: menuMiddle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_components_common__WEBPACK_IMPORTED_MODULE_1__["BlockRender"], {
    data: list.pageBlocks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_components_formRate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: listRate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), list.template === 4 && __jsx(_components_common__WEBPACK_IMPORTED_MODULE_1__["DowloadCategory"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })));
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
  getHome: _store_actions__WEBPACK_IMPORTED_MODULE_4__["PageActions"].getHomeAction,
  getRate: _store_actions__WEBPACK_IMPORTED_MODULE_4__["RateActions"].getRateAction
};
Home.propTypes = propTypes;

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'common']
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProp, mapDispatchToProps)(Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["withTranslation"])('common')(Home)));

/***/ }),

/***/ "./public/images/logo.svg":
/*!********************************!*\
  !*** ./public/images/logo.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTQ2cHgiIGhlaWdodD0iNjZweCIgdmlld0JveD0iMCAwIDE0NiA2NiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjEuMiAoODk2NTMpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPkxPR08gLSBXaGl0ZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxmaWx0ZXIgeD0iLTAuOCUiIHk9Ii0xMC4wJSIgd2lkdGg9IjEwMS43JSIgaGVpZ2h0PSIxMjAuMCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci0xIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSI+PC9mZU9mZnNldD4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlR2F1c3NpYW5CbHVyPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4yNTYwMzY5MzIgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiPjwvZmVDb2xvck1hdHJpeD4KICAgICAgICAgICAgPGZlTWVyZ2U+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSI+PC9mZU1lcmdlTm9kZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyI+PC9mZU1lcmdlTm9kZT4KICAgICAgICAgICAgPC9mZU1lcmdlPgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTIiIHBvaW50cz0iMC4xNzE0NDE0NjYgMC4wNjMzMzMzMzMzIDExLjYzOTI1MzQgMC4wNjMzMzMzMzMzIDExLjYzOTI1MzQgMTMuNjcwMDYxMiAwLjE3MTQ0MTQ2NiAxMy42NzAwNjEyIj48L3BvbHlnb24+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IiNIZWFkZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDcuMDAwMDAwLCAtNDkuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJjYS1uaGFuIiBmaWx0ZXI9InVybCgjZmlsdGVyLTEpIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJMT0dPLS0tV2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1MS4wMDAwMDAsIDUxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02NCw0NiBDNjQuMTc0OTkyOCw0MC4wMTEwNTE5IDY0LjU0MDcwMDUsMzQuMjU4NTU1MyA2NC45NTQ5NDE0LDI4LjUxMDkxMjUgQzY1LjI3NzU4NDQsMjQuMDM0OTc2NSA2NS43MjM5NTI4LDE5LjU2ODA1NDcgNjYuMTM1NDU5NCwxNS4wOTkwNTI3IEM2Ni4yNjI2MDI2LDEzLjcyMDU2MTUgNjYuNDY0MjU0NSwxMi4zNDkwMDQzIDY2LjYxNTMyMjYsMTAuOTcyNTkzMyBDNjYuNjg0MzYyNywxMC4zMzk1MTM1IDY2LjkwMTA1MzEsOS45OTgzNTc3NiA2Ny42MzMxNTIsMTAuMDEzNjEyNyBDNjkuODE4NTExNywxMC4wNTkzNzc1IDcyLjAwNzI4OTMsMTAuMDc2NzEyNiA3NC4xOTEyODE4LDEwLjAwNzM3MiBDNzUuMDkyMjIxNSw5Ljk3ODk0MjQgNzUuMjc4MTUxNCwxMC41Nzg3Mzg2IDc1LjU1NzA0NjIsMTEuMTY5NTIwNiBDNzguMDc1OTg2LDE2LjUxNjM3NDcgODAuNTY3NTgzMiwyMS44NzU3MSA4Mi44MDYyNjExLDI3LjM1MTUzNzYgQzgyLjk4NjcyMjQsMjcuNzkzOTMwNyA4My4wODAzNzA5LDI4LjI4NDg2MjIgODMuNDQ1Mzk1LDI4LjYzNDMzODggQzgzLjk1MzI4NDQsMjguNTE0Mzc5NiA4My45MzY4Nzg4LDI4LjA0MDA4OTggODQuMDY0NzA1NiwyNy43MjA0Mjk2IEM4Ni4zMDc0ODQ5LDIyLjEyNDY0MjggODguODk1NDY0OCwxNi42ODgzMzk0IDkxLjQxMDMwMzIsMTEuMjE3MzY1NiBDOTEuODEwMTg5MiwxMC4zNDcxNDEgOTIuMjYzMzkzMyw5Ljk1NjA2IDkzLjI1NDU2MzYsMTAuMDAzOTA1IEM5NS4xMDkwNzc1LDEwLjA5MjY2MSA5Ni45NzA0MjcxLDEwLjAxNzA3OTcgOTguODI5MDQyNCwxMC4wMzMwMjgxIEMxMDAuMzYyMjgsMTAuMDQ2MjAyOCAxMDAuMjExODk2LDkuNzYyNTk5NzEgMTAwLjQ3NjQzNiwxMS41NjYxNDg4IEMxMDAuNzgyNjczLDEzLjY0NzA2MDQgMTAwLjk5NDU3OSwxNS43NDQ2MTM3IDEwMS4xODM5MjYsMTcuODQxNDczNiBDMTAxLjk3NDEyOCwyNi42MTg2MDc0IDEwMi42MTEyMTIsMzUuNDA2ODM1NyAxMDIuOTQ2MTU5LDQ0LjIxNTg2NjIgQzEwMi45NjExOTcsNDQuNjA0MTczNiAxMDIuOTg3ODU2LDQ0Ljk5MTA5NDIgMTAyLjk5OTQ3Nyw0NS4zNzk0MDE2IEMxMDMuMDExNzgxLDQ1Ljc4Mjk2MzkgMTAyLjgwNjcxMSw0NS45ODgyMTIxIDEwMi40MTE2MSw0NS45ODgyMTIxIEMxMDAuMDYxNTExLDQ1Ljk5MDI5MjMgOTcuNzExNDEyMyw0NS45OTMwNjU5IDk1LjM2MTMxMzMsNDUuOTg2MTMxOSBDOTQuOTYxNDI3Myw0NS45ODQ3NDUxIDk0Ljc5MjU4NjYsNDUuNzI4MTg0OCA5NC43ODA5NjYsNDUuMzQxOTU3NyBDOTQuNzY1OTI3NSw0NC44NDMzOTg3IDk0LjczODU4NDksNDQuMzQ0ODM5OCA5NC43MjY5NjQzLDQzLjg0NjI4MDggQzk0LjU4OTU2NzUsMzcuODYwNzk5OCA5NC4zMTQ3NzQxLDMxLjg4MDE3MjYgOTMuOTg2NjYyNSwyNS45MDMwMTI0IEM5My45NjM0MjEzLDI1LjQ4MjExNDkgOTQuMDU4NDM3LDI1LjAyNDQ2NjkgOTMuNzQxMjYyNCwyNC41ODQxNTQxIEM5My4yNTc5ODE1LDI0Ljc2Mzc0NjIgOTMuMjEwODE1NCwyNS4yNDQ5NyA5My4wNjA0MzEsMjUuNjA1NTQxMiBDOTEuMDU3NTgzMywzMC4zOTY5NzcgODkuMDcxMTQxMiwzNS4xOTYwNDAzIDg3LjA4MTk2NDksMzkuOTkzNzE2OCBDODYuNTE2NjU2LDQxLjM1OTAzMzMgODYuNTE5MzkwMiw0MS4zNjMxOTM3IDg1LjA4NTI2OTMsNDEuMzY5NDM0NCBDODQuMDQ2OTMyOSw0MS4zNzM1OTQ4IDgzLjAwNzkxMyw0MS4zNzI5MDE0IDgxLjk2OTU3NjYsNDEuMzY5NDM0NCBDODAuNDk2NDkyNCw0MS4zNjQ1ODA1IDgwLjQ5NzE3NTksNDEuMzYyNTAwMyA3OS45NDc1ODkxLDQwLjAzNDYyNzcgQzc4LjA2NjQxNjEsMzUuNDkwNzM3OSA3Ni4xODcyOTM4LDMwLjk0NjE1NDYgNzQuMzAyMDE5NSwyNi40MDQzNDUgQzc0LjA1MTgzNDQsMjUuODAwMzg4MyA3My43NzA4ODg5LDI1LjIwOTYwNjMgNzMuNDU1MDgxNSwyNC41MDM3MTkgQzcyLjg0ODc1ODcsMjQuOTYzNDQ3MiA3My4wNjMzOTgzLDI1LjU1MTQ1NTUgNzMuMDM1MzcyMiwyNi4wMjE1ODQ4IEM3Mi42OTE1Mzg2LDMxLjgzMjMyNzUgNzIuNDM1ODg1LDM3LjY0NjUzNzMgNzIuMzA2MDA3NSw0My40NjYyOTQzIEM3Mi4yNDkyNzE1LDQ2IDcyLjIzNDkxNjcsNDYgNjkuNzA1NzIzNCw0NiBDNjcuODU1MzEwOSw0NiA2Ni4wMDU1ODE5LDQ2IDY0LDQ2IiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LDI2LjY1Njg2NTggQzE3Ljk4NzMyMjcsMjcuMzM0NDIzOCAxNy42NTU3MTA5LDI4LjEzMDMyOTYgMTcuMDcxODg3MiwyOC44MTU1MDA2IEMxNC43NDE5MzA1LDMxLjU0OTk1NTkgMTIuNDI1MzE4MywzNC4yOTU0ODQ3IDEwLjA2OTMzOTgsMzcuMDA1MDI0NyBDOS4wOTE4NTIyMSwzOC4xMjg5ODIxIDcuOTQyODg3MywzOC4yODQwMTA3IDYuOTM3Mzc2MTksMzcuNTU0NTQ1OCBDNS45NjM4OTE5OSwzNi44NDc5MTk5IDUuNjk0MzMyMjgsMzUuNTU5MjQ0NiA2LjM4NjkxMzkxLDM0LjMxNzYzMTcgQzguMjAxMTA0MTUsMzEuMDY2ODc1NyAxMC4wMzQ2NDQsMjcuODI2NTAxMiAxMS45MjQyMzA5LDI0LjYyMjExNTQgQzEyLjc0OTU5MDcsMjMuMjIyNzA1NSAxNC4yNzg4NzUsMjIuNzA1MDIwNyAxNS42NzgwNSwyMy4xNjE4MDE0IEMxNy4wMTkxNzYzLDIzLjU5OTIwMzUgMTcuOTg1MzIxLDI0Ljk1MTU1MTIgMTgsMjYuNjU2ODY1OCIgaWQ9IkZpbGwtMyIgZmlsbD0iI0UzMDYxMyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMy40Mzk2ODIxLDQxIEMzMS43NTQ2MTcsNDAuOTc5Njg5NCAzMC4zMjk1NTc3LDM5LjczMzIxOTkgMzAuMDYxNzM3NSwzOC4wNDQ0MzA2IEMyOS43MzkyMTY2LDM2LjAxMTg2NTQgMzAuNjk1NDEyOSwzNC4yODY5NjgzIDMyLjU3NzI1ODQsMzMuNzQ4MzYxMSBDMzQuMzgwOTYwMSwzMy4yMzIzMjEyIDM2LjIxNzM0MDEsMzIuODQ2NDE5NyAzOC4wNDIzNTM3LDMyLjQxNzY0MDIgQzM5Ljk3ODE4OTUsMzEuOTYyNTMyMiA0MS45MTI2MDQ1LDMxLjQ5NjE0MDUgNDMuODU2OTY1MSwzMS4wODc2NzE2IEM0NS4zOTg1Mjk3LDMwLjc2MzQ1NDEgNDYuNDMyMTU5NCwzMS4zNDc5NDgzIDQ2Ljg1NDg0NjUsMzIuNjgzOTM0OCBDNDcuMjc3NTMzNiwzNC4wMjE0MjU5IDQ2Ljc3NTI4MTksMzUuMjE4OTk5NSA0NS4zNzE1MzQ2LDM1Ljg4MDIyMjYgQzQxLjkwMjY1ODksMzcuNTE0MDk4MSAzOC40MDc0OTg1LDM5LjA4NjI4OTUgMzQuOTI5Mzg3Nyw0MC42OTgzNDk5IEMzNC40NDU2MDY0LDQwLjkyMjUxODggMzMuOTUxODc5NCw0MC45ODcyMTE4IDMzLjQzOTY4MjEsNDEiIGlkPSJGaWxsLTUiIGZpbGw9IiNFMzA2MTMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzUuOTk3Nzg1MywyMy4yODUwOTE5IEMzNi4wNTk5MDE3LDI1LjQ2NDEyMzYgMzQuODA5NjU1NywyNy4wMTg0MTI0IDMyLjk2OTkxMjQsMjcgQzMxLjE5NzE1NzMsMjYuOTgyNjM0MiAyOS44NTc5OTk1LDI1LjM5NjAwNzQgMzAuMDEyMDcyNywyMy4zMjkxMjY2IEMzMC4yODQ4OTgsMTkuNjY1Mjk4NSAzMC42NDcyNDQsMTYuMDA5NzI2OCAzMC45NTUzOTAzLDEyLjM0OTMzODggQzMxLjA0NjczODEsMTEuMjY2MzU5NCAzMS40MzEwMDc1LDEwLjQ0MzQ2MDIgMzIuMzkyNTk0NywxMC4xMTQ1NzU3IEMzMy42NjU5ODIxLDkuNjc4MzU2NTEgMzQuODE5Mzk5NSwxMC41MTk4MzI5IDM1LjA1MjY0MDcsMTIuMDkyNjk4OSBDMzUuMTg5MDUzMywxMy4wMTA1NDggMzUuMjA4NTQwOCwxMy45NDk3MjY1IDM1LjI4NjQ5MDksMTQuODc4NTg0NCBDMzUuNTIwMzQxMSwxNy42NjU4NDU5IDM1Ljc1Nzg0NTIsMjAuNDUxNzMxNCAzNS45OTc3ODUzLDIzLjI4NTA5MTkiIGlkPSJGaWxsLTciIGZpbGw9IiNFMzA2MTMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuODg4Nzc2MywxNC4wMDcwNTcxIEMxMy43MDQ3MDg1LDE0LjIwMTY0ODEgMTQuNzUzMDUzNCwxNC40NTgzNTg1IDE1LjgwMzUzMDUsMTQuNzAxNTk3MiBDMTguNTE1NzIzMSwxNS4zMzAyNzU3IDIxLjIyODYyNjQsMTUuOTUxNDcgMjMuOTQxNTI5NywxNi41Nzg2NTE3IEMyNS4zNzE1NDMyLDE2LjkwOTQ1NjQgMjYuNDU4OTc4OSwxNy42ODYzMjM0IDI2Ljg0OTg4NzEsMTkuMjQ2MDQ0OSBDMjcuMTkwMzMyNywyMC42MDY2ODQ5IDI2Ljk3MjEzNDgsMjEuODgzNTAxMSAyNS45ODQ5MTM4LDIyLjg4NzE0MTUgQzI0Ljk2OTk3MzgsMjMuOTE5MjIyMSAyMy43NTM4OTM3LDI0LjI5MDQ0MTggMjIuMzg0MjkzMywyMy43NTgzMTAzIEMyMS42NDA4NTY5LDIzLjQ3MDE2NiAyMC45MTU4OTk4LDIzLjEyNzM4NjUgMjAuMTg4MDk5NywyMi43OTY1ODE4IEMxNy41ODY3ODI5LDIxLjYxMTgyMjIgMTQuOTg3NTk4MywyMC40MjI1NzE5IDEyLjM4ODQxMzgsMTkuMjMzMzIxNyBDMTIuMDI0NTEzNywxOS4wNjcxNzA5IDExLjY0OTI0MTgsMTguOTE5NzMwOCAxMS4zMDczNzQ4LDE4LjcxMTY2ODIgQzEwLjE5MjIyMDEsMTguMDMzNTkzNSA5Ljc2MjIyMTAyLDE2Ljg5NjczMzEgMTAuMTI2ODMxOCwxNS42NjQ4MjI1IEMxMC40NTQ0ODQsMTQuNTU1NjU0IDExLjQwNTQ1NzIsMTMuOTI1NDc4NiAxMi44ODg3NzYzLDE0LjAwNzA1NzEiIGlkPSJGaWxsLTkiIGZpbGw9IiNFMzA2MTMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTkuMDAzNzQ0NywzOS4zNTI5OTAzIEMxOC45ODM2NDU0LDM3Ljg4NTA0NCAxOS43NzgyMzcyLDM2LjcxNDgzODQgMjEuMDYzMjUxNywzNi4yMzIyMjU5IEMyMi4zODUxMTQ5LDM1LjczNTk5MTIgMjMuNzYzOTI2LDM2LjA0NDExMDggMjQuNzIwNjUyMSwzNy4wNjk2NjIzIEMyNC45MzM3MDQ2LDM3LjI5Nzk5NTEgMjUuMTE2NjA4MSwzNy41NTg3NjE2IDI1LjI3OTQxMjQsMzcuODI0NzE3NCBDMjcuMDIwNjgwNyw0MC42NzMwMzk0IDI4Ljc1NTkxOTIsNDMuNTI0NjA0NyAzMC40OTA0ODc4LDQ2LjM3NjgxODcgQzMwLjYyNTE1Myw0Ni41OTkzMTM0IDMwLjc2OTg2NzksNDYuODIzNzU0MiAzMC44NTc2MzQ3LDQ3LjA2NDQxMTcgQzMxLjIwMjY3MjUsNDguMDEwODI1MyAzMC45MDUyMDMxLDQ5LjAwNzgzNTIgMzAuMTMxMzgwNSw0OS41NzQ3NzUyIEMyOS4zMzAwODg5LDUwLjE2MTgyNCAyOC4xMTg3NzE4LDUwLjE0MzAxMjUgMjcuMzA0MDgwNiw0OS41MDYwMTU5IEMyNy4wNTY4NTk0LDQ5LjMxMzM2MDEgMjYuODUzODU2Niw0OS4wNjYyMTU4IDI2LjY0MTQ3NDEsNDguODMzOTkwOSBDMjQuNDgwMTMwNyw0Ni40NzAyMjc1IDIyLjMyNDE0Nyw0NC4xMDE5MjM0IDIwLjE1ODc4MzcsNDEuNzQwNzU0NyBDMTkuNTA2MjI2OSw0MS4wMjkxNjA3IDE4Ljk0ODgwNjYsNDAuMjg0NDg0NCAxOS4wMDM3NDQ3LDM5LjM1Mjk5MDMiIGlkPSJGaWxsLTExIiBmaWxsPSIjRTMwNjEzIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjk5NzU5MzIsMjIuMDMyNjE5NCBDMTIuMDAzMTY3NywyMy4yNTY5OTMzIDExLjU4ODU2NTgsMjQuMDU2MTA0NyAxMC43NjkxMTc0LDI0LjU4MTI1NiBDOS44ODk3NDMzMywyNS4xNDUzMzQ3IDguOTY5MjU3NDYsMjUuMTI3NzA3MiA4LjA3NDU1MzU2LDI0LjU5OTYxOCBDNy44MzYyNDQ1NywyNC40NTkzMzI4IDcuNjExMTc0OTgsMjQuMjYzOTYxOCA3LjQzMjA5NDg0LDI0LjA0NjU1NjUgQzUuMjA3ODc3NjYsMjEuMzQyOTQ1MSAyLjk0NjcyOTU2LDE4LjY3MDkxNjMgMC43OTM1ODY5OTMsMTUuOTA1NjA4OSBDLTAuNDk4Mjk4NTQ3LDE0LjI0NDk1NTQgLTAuMTU1NDY4MDgsMTIuMDAwMzkyNSAxLjQwNTM4NjA4LDEwLjc1OTEyNTcgQzIuOTU2NDg0OSw5LjUyNDQ2OTE0IDUuMTMzMzE5LDkuNzkwMzQ5OTcgNi4yNTE2OTg4OCwxMS41OTcxNjQ0IEM4LjE2NDQ0MjAzLDE0LjY4ODU3OTggOS45MTQ4Mjg0OCwxNy44OTE2MzU4IDExLjczMDcxNTEsMjEuMDQ5MTU0MiBDMTEuOTM5MDYxMiwyMS40MTEyNTE1IDEyLjAxNTAxMzUsMjEuODEwODA3MiAxMS45OTc1OTMyLDIyLjAzMjYxOTQiIGlkPSJGaWxsLTEzIiBmaWxsPSIjRTMwNjEzIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNS4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTMiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMTYiPjwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTguMjMxMDY2NjcsMC4wNjM2IEMxMC43OTA0LDAuMDE2OTMzMzMzMyAxMi41NTk3MzMzLDIuNzI4MjY2NjcgMTEuMTI3NzMzMyw0Ljg0NzYgQzkuMTA1NzMzMzMsNy44NDA5MzMzMyA2LjU5MTA2NjY3LDEwLjQ3MjI2NjcgNC4xMDY0LDEzLjA5NjI2NjcgQzMuMzk5NzMzMzMsMTMuODQyOTMzMyAyLjM1ODQsMTMuODA1NiAxLjQyNjQsMTMuMzAxNiBDMC40OTkwNjY2NjcsMTIuNzk5NiAwLjA0NzA2NjY2NjcsMTEuODIwOTMzMyAwLjIwMTA2NjY2NywxMC43NDM2IEMwLjI2MjQsMTAuMzEzNiAwLjQyOTczMzMzMyw5LjkyOTYgMC42NTM3MzMzMzMsOS41NjIyNjY2NyBDMi4yMzA0LDYuOTczNiAzLjgwNzA2NjY3LDQuMzg2MjY2NjcgNS4zNzUwNjY2NywxLjc5MjI2NjY3IEM2LjAyODQsMC43MTE2IDYuOTM4NCwwLjA3NjkzMzMzMzMgOC4yMzEwNjY2NywwLjA2MzYiIGlkPSJGaWxsLTE1IiBmaWxsPSIjRTMwNjEzIiBtYXNrPSJ1cmwoI21hc2stMykiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMwLjA3OTgyMzIsNTIuNjg3OTEyMiBDMzAuMjg1OTI2OCw0OS45OTY0OTg5IDMwLjQ4MTYwMjUsNDcuMzA0Mzk0OCAzMC43MDI0Mjc4LDQ0LjYxNDM2MzIgQzMwLjgyODc4ODksNDMuMDY0ODY2MiAzMS42ODkzOTQyLDQyLjA2OTQwMjYgMzIuOTAzOTMzMiw0Mi4wMDMwODQ0IEMzNC4wODM1MDgzLDQxLjkzODgzODYgMzUuMDU1NzUzLDQyLjg4MjQ5MTIgMzUuMjQ4MzYxNyw0NC40MzY4MjM4IEMzNS40MzcyOSw0NS45NjQyMTQ3IDM1LjUyMDcxMjksNDcuNTA4MTg1MSAzNS42MzU0MTk0LDQ5LjA0NTkzODIgQzM1Ljc3MDM2ODEsNTAuODU4NjM1NCAzNS45NTI1NDksNTIuNjcxMzMyNiAzNS45OTg1NTQzLDU0LjQ4ODE3NDggQzM2LjA1MTMwNyw1Ni41ODM0MTUxIDM0LjY1Mzk3MzYsNTguMDc4MzM3NyAzMi44NjAzODE2LDU3Ljk5NjgyMTYgQzMxLjM5NTU3MzgsNTcuOTMxMTk0MiAzMC4yODIyNDY0LDU2LjgwMjQwMzMgMzAuMDQ1NDcyNiw1NS4xNjQ0ODIxIEMyOS45MjUyNDU1LDU0LjMzMzQzMjMgMzAuMDgxNjYzNCw1My41MTQ4MTcxIDMwLjA3OTgyMzIsNTIuNjg3OTEyMiIgaWQ9IkZpbGwtMTgiIGZpbGw9IiNFMzA2MTMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMSw0NS4yMzE1NTI0IEMwLjk5NjI1OTQ1Nyw0My4zMTY4ODU1IDEuOTI5MjEwNyw0MS45NTk0MjExIDMuNzAwNjkyNTMsNDEuNDMxMjYzNSBDNS45NzY3OTM0Myw0MC43NTMyOTU2IDguMjY0Nzc1MDcsNDAuMTMxMTI0NCAxMC41NDc3NTQzLDM5LjQ4ODMxNjEgQzExLjEzMDUzNjIsMzkuMzIzOTgzNCAxMS43MTA4MTY4LDM5LjExNDU1NDggMTIuMzAxNzI3NiwzOS4wMjgxODQ2IEMxMy41NzkyMjA1LDM4Ljg0MjQ1MDQgMTQuNTUxNTY1OCwzOS41ODYxNTE0IDE0Ljg3Nzk3MzcsNDAuOTIwNjg1NiBDMTUuMjM2MjcyLDQyLjM4Mjg2NDQgMTQuODA1NDM4Niw0My43NTE3OTM5IDEzLjU4NjcyNDIsNDQuNDAzNzc0MyBDMTAuNzU2NjA1Myw0NS45MTk0NTY3IDcuOTEzOTgwNCw0Ny40MTI5NzMzIDUuMDI2OTU5MDEsNDguNzU1OTE1MyBDMy4wMjA5ODg3Nyw0OS42ODg0MDc4IDEuMDA1MDEzNjksNDcuODI4MDA4OSAxLDQ1LjIzMTU1MjQiIGlkPSJGaWxsLTIwIiBmaWxsPSIjRTMwNjEzIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTUxLjg5MDAzMTMsMzEuOTk3OTM5NyBDNTEuNDUzOTM5NywzMi4wMjAxOTg0IDUwLjkyOTAwMywzMS44NjA1NTAyIDUwLjQxNDA3NzEsMzEuNTk0MjE0IEM0Ny44Mzg4MjE3LDMwLjI2MzMwMDYgNDUuMjYzNTY2MiwyOC45MzM5MjIzIDQyLjY3OTU1MTUsMjcuNjI5MTA1MiBDNDEuODM5OTAzMSwyNy4yMDU0MjM0IDQxLjIxNzM2MiwyNi41NzY4MDg2IDQxLjA0NzE3OTksMjUuNDM0NzEgQzQwLjczMjQ2ODIsMjMuMzIzMjA4OSA0Mi4wMzAxMDY2LDIxLjY4NTI3OTggNDMuODA5NTEwNSwyMi4wNTEzOTYxIEM0NS4wODY1MDE4LDIyLjMxNDY2MjEgNDYuMzM5MDkyLDIyLjc1MjkyNzEgNDcuNjAyMzE4NiwyMy4xMTU5NzMzIEM0OS4zNTEwNjQ3LDIzLjYxNzk0NDEgNTEuMTE0ODI2OCwyNC4wNTYyMDkxIDUyLjg0MzU1MTUsMjQuNjQ3OTgyIEM1NC4zOTcwODg3LDI1LjE4MDY1NDQgNTUuMjI0MjIzNywyNi45OTUxMTc2IDU0Ljk0NzA1MjIsMjguOTUwMDQwNiBDNTQuNjkxMTUzNCwzMC43NTE0NTU3IDUzLjUxOTI3NDUsMzEuOTY4MDA1NyA1MS44OTAwMzEzLDMxLjk5NzkzOTciIGlkPSJGaWxsLTIyIiBmaWxsPSIjRTMwNjEzIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEyNi43NjE3NDIsMzguNjQ4MDgzMiBDMTI1Ljg3MjcwNywzOS4xOTc4NjU0IDEyNC44NzA2NjQsMzkuNDMzMTg2MiAxMjMuODQ2NDUsMzkuNTEwOTI2MSBDMTIxLjc5OTQ1MiwzOS42NjU3MDU2IDExOS43NDc0NDcsMzkuNTc2MDU5NiAxMTcuNjk2ODczLDM5LjU0MDM0MTIgQzExNi45Nzg3NzksMzkuNTI3NzM0OCAxMTYuNjcxMjI4LDM5LjI3NzcwNjQgMTE2LjY5ODQwNywzOC41NDkzMzI1IEMxMTYuNzM5MTc1LDM3LjQzNTA2MDUgMTE2LjcwOTEzNiwzNi4zMTg2ODc1IDExNi43MDk4NTEsMzUuMjAzMDE0NyBDMTE2LjcwOTg1MSwzNC4wODY2NDE3IDExNi43MzEzMDgsMzIuOTcwMjY4NiAxMTYuNzAxMjY4LDMxLjg1NTI5NjMgQzExNi42ODYyNDgsMzEuMjg4MDA1MSAxMTYuOTUxNiwzMS4wNDQyNzk5IDExNy40ODUxNjQsMzEuMDAwMTU3MyBDMTIwLjI3MTcxMywzMC43NzE4NDAxIDEyMy4wNjY4NDYsMzAuNTY3MzM1MSAxMjUuODA4MzM2LDMxLjI4MjQwMjIgQzEyNy41Njc4MSwzMS43NDE4MzggMTI4LjY0NzgxMiwzMi45MDMwMzQxIDEyOC44MzM3NzMsMzQuNzE5NzY2NyBDMTI5LjAxMTE1MSwzNi40NDc1NTM2IDEyOC4yMzU4MzgsMzcuNzM2OTE1NSAxMjYuNzYxNzQyLDM4LjY0ODA4MzIgTTExNi43MDg0MiwyMC44OTA0Njc3IEMxMTYuNzA4NDIsMTkuODEyNjE0NCAxMTYuNzI1NTg2LDE4LjkxNjE1NDIgMTE2LjcwMjY5OSwxOC4wMjEwOTQ3IEMxMTYuNjg3Njc5LDE3LjQzMzQ5MzEgMTE2LjgzNzE2MiwxNy4wNTI0OTc1IDExNy41MzQ1MTUsMTcuMDM1Njg4OSBDMTE5LjcwNTk2NCwxNi45ODE3NjEyIDEyMS44Nzg4NDMsMTYuODc0NjA2MiAxMjQuMDQxNzA5LDE3LjE0MTQ0MzIgQzEyNC42MDAzMDYsMTcuMjEwMDc4NCAxMjUuMTU2MDQzLDE3LjM5NDI3MyAxMjUuNjgzMTcsMTcuNjAwODc5IEMxMjcuMjgxMDAxLDE4LjIyNzAwMDQgMTI4LjEwNzgxMSwxOS40MzMwMTk1IDEyOC4wMjg0MiwyMC45NDU3OTYxIEMxMjcuOTUxMTc1LDIyLjQyMzU1NDcgMTI2Ljk2NTU4MywyMy41ODQwNTA0IDEyNS4yOTYyMjgsMjMuOTk1MTYxNCBDMTI0LjQxNTc3NiwyNC4yMTIyNzI5IDEyMy40OTQ1NTUsMjQuMjkwMDEyOCAxMjIuNTg2OTI0LDI0LjM3MTk1NDggQzEyMS45MDYwMjIsMjQuNDMzNTg2NSAxMjEuMjE0MzkxLDI0LjQzNzc4ODYgMTIwLjUzMDYyOCwyNC40MDIwNzAzIEMxMTkuMjg5Njk4LDI0LjMzNzYzNzIgMTE3LjczMzM1LDI0Ljg0NjA5ODIgMTE2LjkwNzk3MSwyMy45NzA2NDg4IEMxMTYuMjI5MjE0LDIzLjI1MjA4IDExNi43ODQ5NSwyMS44MjA1NDUxIDExNi43MDg0MiwyMC44OTA0Njc3IE0xMzIuODg3MDAxLDI2LjU3NTk4NjIgQzEzMy4xOTE2OSwyNi4yOTA5Mzk5IDEzMy4zODQwODgsMjYuMDg1NzM0NiAxMzMuNjAxNTE5LDI1LjkxMDY0NDcgQzEzNy43NzcwNTIsMjIuNTQ0MDE2NSAxMzcuNDIzMDEyLDE2LjAxODA2NjUgMTMyLjc2ODk4NywxMi42Nzg3NTI0IEMxMzEuMzEzNDg3LDExLjYzNDUxNjMgMTI5LjY2NjMwNSwxMS4wMTExOTYzIDEyNy45MTMyNjgsMTAuNjY1MjE4NyBDMTI1LjYwODc4NSwxMC4yMDk5ODUxIDEyMy4yNzI4MzMsMTAuMDQxODk4OCAxMjAuOTI0NzIyLDEwLjAwODI4MTUgQzExNy4xNDgyODksOS45NTM2NTM0OCAxMTMuMzc5NzI0LDEwLjE4MzM3MTQgMTA5LjYwODI5OCwxMC4yODQ5MjM1IEMxMDguMDE2MTg4LDEwLjMyNzY0NTUgMTA4LjAwMzMxNCwxMC4zMzc0NTA1IDEwOC4wMDI1OTksMTEuODQxMTIyNCBDMTA3Ljk5OTAyMywyMi45ODU5NDM0IDEwNy45OTkwMjMsMzQuMTMwNzY0MyAxMDguMDAzMzE0LDQ1LjI3NTU4NTMgQzEwOC4wMDMzMTQsNDYuNjM4NDg0OSAxMDguMDE3NjE5LDQ2LjY2MjI5NzEgMTA5LjM1NzI1MSw0Ni43NDIxMzgxIEMxMTQuMzg0NjI3LDQ3LjA0MzI5MjcgMTE5LjQxNzcyNSw0Ny4wNjkyMDYgMTI0LjQ0NzI0Niw0Ni44Nzk0MDg2IEMxMjYuMzgyNjY4LDQ2LjgwNjU3MTIgMTI4LjMxNTIyOSw0Ni41NDY3Mzc4IDEzMC4xODk4NTYsNDUuOTg2NDUwMiBDMTM0LjU0MDYyMSw0NC42ODY1ODMgMTM3LjI4MjExMSw0MS45Mjk5Njc5IDEzNy44NjI4OCwzNy40NjUxNzYgQzEzOC40NDcyMjYsMzIuOTc1MTcxMSAxMzcuMjMyNzU5LDI5LjEzNDM5OTUgMTMyLjg4NzAwMSwyNi41NzU5ODYyIiBpZD0iRmlsbC0yNCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./public/images/svg/MB.svg":
/*!**********************************!*\
  !*** ./public/images/svg/MB.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjhweCIgaGVpZ2h0PSIyOXB4IiB2aWV3Qm94PSIwIDAgMjggMjkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYxLjIgKDg5NjUzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT4wMy1NQisrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPHJlY3QgaWQ9InBhdGgtMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjMxLjY3MSIgaGVpZ2h0PSIzMS42NzEiPjwvcmVjdD4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0zIiBwb2ludHM9IjAgMy40MTIwMzU0ZS0wNSAyNy41MzEzMjM3IDMuNDEyMDM1NGUtMDUgMjcuNTMxMzIzNyAyOC4wMTIxNjIzIDAgMjguMDEyMTYyMyI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IjAyLi1IZWFkZXItLS1Gb290ZXItLS1CYW5uZXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSIjLUZvb3RlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3NC4wMDAwMDAsIC0yMDUzLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iIy1GT09URVItTWItMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDk1NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSIjLUJvdHRvbS1iYXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxMDg1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xNC1Db3B5LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1MC4wMDAwMDAsIDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMS4wMDAwMDAsIDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMDMtTUIrKyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iUmVjdGFuZ2xlIj48L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiIG1hc2s9InVybCgjbWFzay0yKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDY1NTAwLCAyLjA2NTUwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stNCIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMyI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ2xpcC0yIiBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiPjwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLjkzNTE3OTA4LDI0Ljk2NzM1OTQgTDIuOTM1MTc5MDgsMTIuNDg5Nzg5NyBMMjQuNjUyNTQwNywxMi40ODk3ODk3IEwyNC42NTI1NDA3LDI1LjA0MDEzMzMgQzI0LjY1MjU0MDcsMjYuMDA4OTA3NiAyMy44NjcyMzY0LDI2Ljc5NDIxMTkgMjIuODk4NDEzMywyNi43OTQyMTE5IEw0Ljc2MjA4MDMyLDI2Ljc5NDIxMTkgQzMuNzU0NDU3NTIsMjYuNzkxMzg0OCAyLjkzODIwMTE3LDI1Ljk3NTAzMSAyLjkzNTE3OTA4LDI0Ljk2NzM1OTQgTDIuOTM1MTc5MDgsMjQuOTY3MzU5NCBaIE0xLjIxNzk1MDQxLDguNDgyNzkyODEgQzEuMjIwNzc3NTIsNy40NzQ5NzUwNCAyLjAzNzE4MDExLDYuNjU4NzY3NDMgMy4wNDQ4MDI5LDYuNjU1OTQwMzIgTDI0LjQ1OTkwNjksNi42NTU5NDAzMiBDMjUuNDg4MzkxOSw2LjY1NTk0MDMyIDI2LjMyMjA5ODMsNy40ODk2NDY3OSAyNi4zMjIwOTgzLDguNTE4MTMxNzUgTDI2LjMyMjA5ODMsMTEuMjcxODM5MyBMMS4yMTc5NTA0MSwxMS4yNzE4MzkzIEwxLjIxNzk1MDQxLDguNDgyNzkyODEgWiBNNy40MzU2MDUwMyw1LjE4ODMyNjQgQzYuNzg3ODA1NzMsNC41MzUwMTkxMSA2Ljc5MDI5MTY1LDMuNDgwOTQzODkgNy40NDA1NzY4NSwyLjgzMDcwNzQzIEM4LjA5MTIwMzI2LDIuMTgwMDMyMjggOS4xNDQ4ODg1MywyLjE3NzkzNjMyIDkuNzk4MTk1ODIsMi44MjUzNDU2NiBMMTIuNDEwNzkxMyw1LjQzNzk4OTkxIEw3LjY4NTA3MzU2LDUuNDM3OTg5OTEgTDcuNDM1NjA1MDMsNS4xODgzMjY0IFogTTE4Ljk4NzU4NywxLjcwNTA3Njk1IEMxOS4zMDAyNzU3LDEuMzkxMjY3MTggMTkuNzI1OTUxNSwxLjIxNTk4NjA1IDIwLjE2ODc4NSwxLjIxNzg3MTc0IEMyMC44NDQ1MTQyLDEuMjE2NzY1OTQgMjEuNDU0NDM5OSwxLjYyMzIzNjg1IDIxLjcxMzI2NzIsMi4yNDc0NDQzNSBDMjEuOTcyMDQ1NywyLjg3MTc5ODA4IDIxLjgyODc4ODksMy41OTA3NjI2OSAyMS4zNTAzMjQxLDQuMDY3ODEzOTggTDIxLjM0NDAzNjIsNC4wNzM3MTE5MyBMMjAuMDE2NTU5NCw1LjQzMTg5Njk5IEwxNS4yNTQ0NzkxLDUuNDMxODk2OTkgTDE4Ljk4NzU4NywxLjcwNTA3Njk1IFogTTI0LjQ5MjQxODcsNS40Mzc5ODk5MSBMMjEuNzIxNjUxLDUuNDM3OTg5OTEgTDIyLjIxNTEyODgsNC45MzI1Njk5OCBDMjMuMzM1Mzk3NSwzLjgwMTA0MTU1IDIzLjMzNTM5NzUsMS45NzgxMzcyNyAyMi4yMTUxMjg4LDAuODQ2MjY3NjQyIEMyMS4wODY3Njg3LC0wLjI4MjA0MzcyIDE5LjI1NzA0MDQsLTAuMjgyMDQzNzIgMTguMTI4Nzc3NywwLjg0NjI2NzY0MiBMMTMuODM1NTU5OCw1LjEzMzUzODg2IEwxMC42NjMwOTgxLDEuOTYwODMzMzggQzkuNjM5NjMzNjYsMC45MzY2Mzc4MzcgOC4wMTYxODcyMiwwLjgyODUyNTA1OCA2Ljg2NjAzODgzLDEuNzA3NzA5MDkgQzUuNzE2MDM2NjcsMi41ODY5NDE4NyA1LjM5NDQyNzk2LDQuMTgxODI0NyA2LjExMzk3NzQ5LDUuNDM3OTg5OTEgTDMuMDQ0ODAyOSw1LjQzNzk4OTkxIEMxLjM2MzQ5ODA5LDUuNDM4NTc0ODMgMC4wMDA3Nzk4OTM4MDUsNi44MDE0ODggMCw4LjQ4Mjc5MjgxIEwwLDExLjg4MDc5MDEgQzAuMDAwOTc0ODY3MjU3LDEyLjIxNjY4MDYgMC4yNzMwNjAzMTksMTIuNDg4ODE0OCAwLjYwODk1MDgzMiwxMi40ODk3ODk3IEwxLjcxNzI3NzQyLDEyLjQ4OTc4OTcgTDEuNzE3Mjc3NDIsMjQuOTY3MzU5NCBDMS43MTgwMDg1NywyNi42NDg2NjQyIDMuMDgwNzc1NSwyOC4wMTE0MzEyIDQuNzYyMDgwMzIsMjguMDEyMTYyMyBMMjIuNzY5MDQ4NCwyOC4wMTIxNjIzIEMyNC40NTA1NDgyLDI4LjAxMTQzMTIgMjUuODEzMjY2NCwyNi42NDg2NjQyIDI1LjgxMzg1MTMsMjQuOTY3MzU5NCBMMjUuODEzODUxMywxMi40ODk3ODk3IEwyNi45MjIzNzI4LDEyLjQ4OTc4OTcgQzI3LjI1ODIxNDYsMTIuNDg4ODE0OCAyNy41MzAzNDg4LDEyLjIxNjY4MDYgMjcuNTMxMzMzOSwxMS44ODA3OTAxIEwyNy41MzEzMzM5LDguNDgyNzkyODEgQzI3LjUzMzQxOTYsNy42NzU3NDg5NSAyNy4yMTM4NTgyLDYuOTAxMDIxOTQgMjYuNjQzNzU1OCw2LjMyOTU1NDc2IEMyNi4wNzM3OTk2LDUuNzU4MjgyNTUgMjUuMjk5NDYyNiw1LjQzNzU5OTk2IDI0LjQ5MjQxODcsNS40Mzc5ODk5MSBMMjQuNDkyNDE4Nyw1LjQzNzk4OTkxIFoiIGlkPSJGaWxsLTEiIHN0cm9rZT0ibm9uZSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBtYXNrPSJ1cmwoI21hc2stNCkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./public/images/svg/bieuphi.svg":
/*!***************************************!*\
  !*** ./public/images/svg/bieuphi.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjNweCIgaGVpZ2h0PSIyOHB4IiB2aWV3Qm94PSIwIDAgMjMgMjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYxLjIgKDg5NjUzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5Hcm91cCAyMDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxmaWx0ZXIgeD0iLTAuOCUiIHk9Ii0xMC4wJSIgd2lkdGg9IjEwMS43JSIgaGVpZ2h0PSIxMjAuMCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci0xIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSI+PC9mZU9mZnNldD4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlR2F1c3NpYW5CbHVyPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4yNTYwMzY5MzIgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiPjwvZmVDb2xvck1hdHJpeD4KICAgICAgICAgICAgPGZlTWVyZ2U+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSI+PC9mZU1lcmdlTm9kZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyI+PC9mZU1lcmdlTm9kZT4KICAgICAgICAgICAgPC9mZU1lcmdlPgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTIiIHBvaW50cz0iMCAwIDE0LjYwOTk3NDkgMCAxNC42MDk5NzQ5IDE5Ljc2OTYwMDQgMCAxOS43Njk2MDA0Ij48L3BvbHlnb24+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iIy1Ib21lIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iI1BDLS0tSG9tZS0tLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMDAuMDAwMDAwLCAtOS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSIjLUhFQURFUiI+CiAgICAgICAgICAgICAgICAgICAgPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlci0xKSIgaWQ9ImJpZXVwaGkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOTkuMDAwMDAwLCA3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Imljby1kaWVtZ2RpY2giPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi4wMDAwMDAsIDQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik04LjAzMTk1MzE1LDguMjU5NjQ3MzQgTDIuMzEwNjU4MzQsOC4yNTk2NDczNCBDMi4xNTA2ODY2Niw4LjI1OTY0NzM0IDIuMDIxMDY0NDIsOC4zODkzMDgxOSAyLjAyMTA2NDQyLDguNTQ5MjQxMjYgQzIuMDIxMDY0NDIsOC43MDkyMTI5NSAyLjE1MDcyNTI3LDguODM4ODM1MTkgMi4zMTA2NTgzNCw4LjgzODgzNTE5IEw4LjAzMTk1MzE1LDguODM4ODM1MTkgQzguMTkxODg2MjIsOC44Mzg4MzUxOSA4LjMyMTU0NzA4LDguNzA5MjEyOTUgOC4zMjE1NDcwOCw4LjU0OTI0MTI2IEM4LjMyMTU0NzA4LDguMzg5MzA4MTkgOC4xOTE4ODYyMiw4LjI1OTY0NzM0IDguMDMxOTUzMTUsOC4yNTk2NDczNCIgaWQ9IkZpbGwtMSIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuMjIxMDMzNSw3LjcwNTgyMDE5IEwxMC44NjU1MDIzLDguNDg1MzI5ODIgTDEwLjk4OTk4OTEsOC4wMzM5MTA4MSBDMTEuMDMyNTQwMSw3Ljg3OTczMSAxMC45NDIwMzIzLDcuNzIwMjYxMjggMTAuNzg3ODUyNSw3LjY3Nzc0ODg5IEMxMC42MzM1NTY5LDcuNjM1MTk3ODkgMTAuNDc0MjAzLDcuNzI1NzQ0MjYgMTAuNDMxNjkwNiw3Ljg3OTkyNDA2IEwxMC4yNzMyMjQ4LDguNDU0MzYyNTcgQzEwLjIxNjE5NDEsOC42NjEwOTQwMiAxMC4yODg5MDE1LDguODc5NTI1MDcgMTAuNDU4NDEwNSw5LjAxMDg0NjI2IEMxMC42MTk0MjQ3LDkuMTM1NTY0NzEgMTAuODU3MzkzNyw5LjE1ODE1MzAzIDExLjA0MzU4MzIsOS4wNTEwNDE4OSBMMTIuNTA5NzM5NCw4LjIwNzkzNzQ1IEMxMi42NDgzNTgzLDguMTI4MjAyNTkgMTIuNjk2MTYwNiw3Ljk1MTE2NDE3IDEyLjYxNjM4NzIsNy44MTI1MDY2IEMxMi41MzY3Mjk1LDcuNjczODg3NjQgMTIuMzU5NjkxMSw3LjYyNjEyMzk1IDEyLjIyMTAzMzUsNy43MDU4MjAxOSIgaWQ9IkZpbGwtMyIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC4wMzE5NTMxNSwxMC40NjczODc5IEwyLjMxMDY1ODM0LDEwLjQ2NzM4NzkgQzIuMTUwNzI1MjcsMTAuNDY3Mzg3OSAyLjAyMTA2NDQyLDEwLjU5NzA0ODcgMi4wMjEwNjQ0MiwxMC43NTY5ODE4IEMyLjAyMTA2NDQyLDEwLjkxNjk1MzUgMi4xNTA2ODY2NiwxMS4wNDY1NzU3IDIuMzEwNjU4MzQsMTEuMDQ2NTc1NyBMOC4wMzE5NTMxNSwxMS4wNDY1NzU3IEM4LjE5MTg4NjIyLDExLjA0NjU3NTcgOC4zMjE1NDcwOCwxMC45MTY5OTIxIDguMzIxNTQ3MDgsMTAuNzU2OTgxOCBDOC4zMjE1NDcwOCwxMC41OTcwNDg3IDguMTkxODg2MjIsMTAuNDY3Mzg3OSA4LjAzMTk1MzE1LDEwLjQ2NzM4NzkiIGlkPSJGaWxsLTUiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEyLjIyMTAzMzUsOS45MTM2MTQ3OCBMMTAuODY1NTAyMywxMC42OTMwODU4IEwxMC45ODk5ODkxLDEwLjI0MTcwNTQgQzExLjAzMjU3ODcsMTAuMDg3NTI1NiAxMC45NDIwMzIzLDkuOTI4MDU1ODYgMTAuNzg3ODUyNSw5Ljg4NTU0MzQ3IEMxMC42MzM1NTY5LDkuODQyOTkyNDcgMTAuNDc0MjAzLDkuOTMzNTM4ODQgMTAuNDMxNjkwNiwxMC4wODc3MTg2IEwxMC4yNzMyMjQ4LDEwLjY2MjE1NzIgQzEwLjIxNjE5NDEsMTAuODY4ODg4NiAxMC4yODg5MDE1LDExLjA4NzI4MSAxMC40NTg0NDkxLDExLjIxODY0MDggQzEwLjYxOTkyNjYsMTEuMzQzNzQ1NCAxMC44NTY4NTMxLDExLjM2NjIxNzkgMTEuMDQzNjIxOSwxMS4yNTg4MzY1IEwxMi41MDk3NzgsMTAuNDE1NzMyIEMxMi42NDgzNTgzLDEwLjMzNTk1ODYgMTIuNjk2MTYwNiwxMC4xNTg5NTg3IDEyLjYxNjM4NzIsMTAuMDIwMzAxMiBDMTIuNTM2NzI5NSw5Ljg4MTY0MzYxIDEyLjM1OTY5MTEsOS44MzM4Nzk5MiAxMi4yMjEwMzM1LDkuOTEzNjE0NzgiIGlkPSJGaWxsLTciIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTguMDMxOTUzMTUsMTIuNjc1MTI0NSBMMi4zMTA2NTgzNCwxMi42NzUxMjQ1IEMyLjE1MDcyNTI3LDEyLjY3NTEyNDUgMi4wMjEwNjQ0MiwxMi44MDQ3ODU0IDIuMDIxMDY0NDIsMTIuOTY0NzE4NSBDMi4wMjEwNjQ0MiwxMy4xMjQ2OTAxIDIuMTUwNjg2NjYsMTMuMjU0MzEyNCAyLjMxMDY1ODM0LDEzLjI1NDMxMjQgTDguMDMxOTUzMTUsMTMuMjU0MzEyNCBDOC4xOTE4ODYyMiwxMy4yNTQzMTI0IDguMzIxNTQ3MDgsMTMuMTI0NjkwMSA4LjMyMTU0NzA4LDEyLjk2NDcxODUgQzguMzIxNTQ3MDgsMTIuODA0Nzg1NCA4LjE5MTg4NjIyLDEyLjY3NTEyNDUgOC4wMzE5NTMxNSwxMi42NzUxMjQ1IiBpZD0iRmlsbC05IiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMi4yMjEwMzM1LDEyLjEyMTM1NTMgTDEwLjg2NTUwMjMsMTIuOTAwODY0OSBMMTAuOTg5OTg5MSwxMi40NDk0MDczIEMxMS4wMzI1Nzg3LDEyLjI5NTIyNzUgMTAuOTQyMDMyMywxMi4xMzU3NTc4IDEwLjc4Nzg1MjUsMTIuMDkzMjQ1NCBDMTAuNjMzNTU2OSwxMi4wNTA2OTQ0IDEwLjQ3NDIwMywxMi4xNDEyNDA3IDEwLjQzMTY5MDYsMTIuMjk1NDIwNiBMMTAuMjczMjI0OCwxMi44Njk4NTkxIEMxMC4yMTYxOTQxLDEzLjA3NjU5MDUgMTAuMjg4OTAxNSwxMy4yOTUwMjE2IDEwLjQ1ODQ0OTEsMTMuNDI2MzgxNCBDMTAuNjI2NjA2NiwxMy41NTY2MjE0IDEwLjg1OTI0NzEsMTMuNTcyNTI5OCAxMS4wNDM1ODMyLDEzLjQ2NjU3NyBMMTIuNTA5NzM5NCwxMi42MjM0NzI2IEMxMi42NDgzNTgzLDEyLjU0MzczNzcgMTIuNjk2MTYwNiwxMi4zNjY2OTkzIDEyLjYxNjM4NzIsMTIuMjI4MDQxNyBDMTIuNTM2NzI5NSwxMi4wODk0MjI3IDEyLjM1OTY5MTEsMTIuMDQxNjU5MSAxMi4yMjEwMzM1LDEyLjEyMTM1NTMiIGlkPSJGaWxsLTExIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik04LjAzMTk1MzE1LDE0Ljg4MjkwMzcgTDIuMzEwNjU4MzQsMTQuODgyOTAzNyBDMi4xNTA3MjUyNywxNC44ODI5MDM3IDIuMDIxMDY0NDIsMTUuMDEyNTI1OSAyLjAyMTA2NDQyLDE1LjE3MjQ5NzYgQzIuMDIxMDY0NDIsMTUuMzMyNDMwNyAyLjE1MDY4NjY2LDE1LjQ2MjA5MTUgMi4zMTA2NTgzNCwxNS40NjIwOTE1IEw4LjAzMTk1MzE1LDE1LjQ2MjA5MTUgQzguMTkxODg2MjIsMTUuNDYyMDkxNSA4LjMyMTU0NzA4LDE1LjMzMjQzMDcgOC4zMjE1NDcwOCwxNS4xNzI0OTc2IEM4LjMyMTU0NzA4LDE1LjAxMjUyNTkgOC4xOTE4ODYyMiwxNC44ODI5MDM3IDguMDMxOTUzMTUsMTQuODgyOTAzNyIgaWQ9IkZpbGwtMTMiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEyLjIyMTAzMzUsMTQuMzI5MDkyIEwxMC44NjU1MDIzLDE1LjEwODYwMTYgTDEwLjk4OTk4OTEsMTQuNjU3MTQ0IEMxMS4wMzI1NDAxLDE0LjUwMjk2NDIgMTAuOTQyMDMyMywxNC4zNDM0OTQ0IDEwLjc4Nzg1MjUsMTQuMzAwOTgyIEMxMC42MzM1NTY5LDE0LjI1ODQzMSAxMC40NzQyMDMsMTQuMzQ4OTc3NCAxMC40MzE2OTA2LDE0LjUwMzE1NzIgTDEwLjI3MzIyNDgsMTUuMDc3NTk1NyBDMTAuMjE2MTk0MSwxNS4yODQyODg2IDEwLjI4ODkwMTUsMTUuNTAyNzU4MiAxMC40NTg0NDkxLDE1LjYzNDA3OTQgQzEwLjYyNjU2OCwxNS43NjQzMTk1IDEwLjg1OTE2OTgsMTUuNzgwMzA1IDExLjA0MzU4MzIsMTUuNjc0Mjc1IEwxMi41MDk3Mzk0LDE0LjgzMTE3MDYgQzEyLjY0ODM1ODMsMTQuNzUxNDM1NyAxMi42OTYxNjA2LDE0LjU3NDQzNTkgMTIuNjE2Mzg3MiwxNC40MzU4MTcgQzEyLjUzNjcyOTUsMTQuMjk3MTIwOCAxMi4zNTk2OTExLDE0LjI0OTM5NTcgMTIuMjIxMDMzNSwxNC4zMjkwOTIiIGlkPSJGaWxsLTE1IiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xOSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay0zIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDbGlwLTE4Ij48L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQuMDMwODEwMiwxOC41MjY1MDg4IEMxNC4wMzA4MTAyLDE4Ljg5MjU5NDEgMTMuNzMyOTE0NiwxOS4xOTA0MTI1IDEzLjM2Njg2NzksMTkuMTkwNDEyNSBMMS4yNDMxMTQ3NCwxOS4xOTA0MTI1IEMwLjg3NzAyOTQxLDE5LjE5MDQxMjUgMC41NzkxNzI0MDUsMTguODkyNTk0MSAwLjU3OTE3MjQwNSwxOC41MjY1MDg4IEwwLjU3OTE3MjQwNSwxNy4yMTM3OTg4IEMwLjU3OTE3MjQwNSwxNy4yMTM1Mjg1IDAuNTc5MTcyNDA1LDE3LjIxMzI5NjkgMC41NzkxNzI0MDUsMTcuMjEzMDI2NiBMMC41NzkxNzI0MDUsNS42NzcwMzMyNyBMNC4yNTA0ODk3NCw1LjY3NzAzMzI3IEM0Ljg4OTYwNDIyLDUuNjc3MDMzMjcgNS40MzE5NTU3Miw1LjI1NDUzNTA0IDUuNjEyODE2NzgsNC42NzQxNTAyIEM1LjY1NTUyMjIzLDQuNTM3MjY4ODEgNS42NzcwNjgwMiw0LjM5Mzc0NjA2IDUuNjc3MDY4MDIsNC4yNTAzNzc3NiBMNS42NzcwNjgwMiwwLjU3OTE3NjI2NiBMMTMuMzY2OTA2NSwwLjU3OTE3NjI2NiBDMTMuNzMyOTUzMiwwLjU3OTE3NjI2NiAxNC4wMzA4MTAyLDAuODc3MTg3NzIxIDE0LjAzMDgxMDIsMS4yNDM0NjYxMiBMMTQuMDMwODEwMiw2LjMyNDMzMzYxIEMxNC4wMzA4MTAyLDYuMzI0NjAzOSAxNC4wMzA4MTAyLDYuMzI0ODM1NTggMTQuMDMwODEwMiw2LjMyNTA2NzI1IEwxNC4wMzA4MTAyLDE4LjUyNjUwODggWiBNNS4wOTc4ODAxNywwLjk4ODcwMDY4OSBMNS4wOTc4ODAxNyw0LjI1MDQxNjM3IEM1LjA5Nzg4MDE3LDQuNzA5OTA1NCA0LjcxMjk1MTkzLDUuMDk3ODQ1NDIgNC4yNTA0ODk3NCw1LjA5Nzg0NTQyIEwwLjk4ODczNTQ0LDUuMDk3ODQ1NDIgTDUuMDk3ODgwMTcsMC45ODg3MDA2ODkgWiBNMTQuNjA5OTk4MSwxLjI0MzQ2NjEyIEMxNC42MDk5OTgxLDAuNTU3ODYyMTUzIDE0LjA1MjMxNzQsLTEuMTU4Mzc1N2UtMDUgMTMuMzY2ODY3OSwtMS4xNTgzNzU3ZS0wNSBMNS4zODc0MzU0OCwtMS4xNTgzNzU3ZS0wNSBDNS4zMTE2MzkxLC0xLjE1ODM3NTdlLTA1IDUuMjM2MzgzMjksMC4wMzEyNjQ1NjAxIDUuMTgyNzExODksMC4wODQ3ODE1MTc1IEM1LjE4MjcxMTg5LDAuMDg0NzgxNTE3NSAwLjA4NTc4MTU4MTgsNS4xODE3NTA0MyAwLjA4NDY2MTgxODYsNS4xODI4MzE1OSBDMC4wMzE5MTcxMTE4LDUuMjM2NTQxNiAtMS41NDQ1MDA5M2UtMDUsNS4zMTIyMjIxNSAtMS41NDQ1MDA5M2UtMDUsNS4zODc0MzkzNSBMLTEuNTQ0NTAwOTNlLTA1LDE3LjIxMzc5ODggTC0xLjU0NDUwMDkzZS0wNSwxNy41OTk4ODU0IEwtMS41NDQ1MDA5M2UtMDUsMTguNTI2NTA4OCBDLTEuNTQ0NTAwOTNlLTA1LDE5LjIxMTk1ODMgMC41NTc2MjY2MTcsMTkuNzY5NjAwNCAxLjI0MzA3NjEzLDE5Ljc2OTYwMDQgTDEzLjM2Njg2NzksMTkuNzY5NjAwNCBDMTQuMDUyMzE3NCwxOS43Njk2MDA0IDE0LjYwOTk5ODEsMTkuMjExOTU4MyAxNC42MDk5OTgxLDE4LjUyNjUwODggTDE0LjYwOTk5ODEsNi4zMjU3NjIyOCBDMTQuNjA5OTk4MSw2LjMyNTUzMDYgMTQuNjA5OTk4MSw2LjMyNTI5ODkzIDE0LjYwOTk5ODEsNi4zMjUwMjg2NCBMMTQuNjA5OTk4MSwxLjI0MzQ2NjEyIFoiIGlkPSJGaWxsLTE3IiBmaWxsPSIjMDAwMDAwIiBtYXNrPSJ1cmwoI21hc2stMykiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./public/images/svg/btt-chplay-mb.svg":
/*!*********************************************!*\
  !*** ./public/images/svg/btt-chplay-mb.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTE4cHgiIGhlaWdodD0iNDJweCIgdmlld0JveD0iMCAwIDExOCA0MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjIgKDkxMzkwKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5Hcm91cCAyOTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iIy1GT09URVItTWItMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNi4wMDAwMDAsIC0yMDkuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjAwMDAwMCwgMC4wMDAwMDApIiBpZD0iR3JvdXAtMzUiPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTM0Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ii0tLURvd25sb2FkLWFwcCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wMDAwMDAsIDE5NC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0zMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUuMDAwMDAwLCAxNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMi4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDAuODI5ODgyKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTMiIHN0cm9rZT0iIzE0MUVEMiIgc3Ryb2tlLXdpZHRoPSIwLjU3MTIwOTQwOCIgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMCIgd2lkdGg9IjExNiIgaGVpZ2h0PSI0MCIgcng9IjE5LjA4NzI4MTgiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMDAwMDAwLCA3LjAwMDAwMCkiIGZpbGw9IiMxNDFFRDIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjU3NjAzMTgsMC4xNzAxMTgxODIgQzAuNzA1NjEzNDczLDAuMTcwMTE4MTgyIDAsMS4wMDIyODgyMyAwLDIuMDMyODIyMjkgTDAsMjEuMzA3NDE0MSBDMCwyMi4zMzYxNTcxIDAuNzA0ODMyOTU2LDIzLjE3MDExODIgMS41NzYwMzE4LDIzLjE3MDExODIgTDkuNDIzOTY4MiwyMy4xNzAxMTgyIEMxMC4yOTQzODY1LDIzLjE3MDExODIgMTEsMjIuMzM3OTQ4MSAxMSwyMS4zMDc0MTQxIEwxMSwyLjAzMjgyMjI5IEMxMSwxLjAwNDA3OTIyIDEwLjI5NTE2NywwLjE3MDExODE4MiA5LjQyMzk2ODIsMC4xNzAxMTgxODIgTDEuNTc2MDMxOCwwLjE3MDExODE4MiBMMS41NzYwMzE4LDAuMTcwMTE4MTgyIFogTTEuMDMxMjUsMy4xODY1MTE2MiBMMS4wMzEyNSwyMC4xNTM3MjQ3IEw5Ljk2ODc1LDIwLjE1MzcyNDcgTDkuOTY4NzUsMy4xODY1MTE2MiBMMS4wMzEyNSwzLjE4NjUxMTYyIEwxLjAzMTI1LDMuMTg2NTExNjIgWiBNNS41LDIyLjQxNjAxOTggQzUuODc5Njk1NzcsMjIuNDE2MDE5OCA2LjE4NzUsMjIuMDc4Mzk4NSA2LjE4NzUsMjEuNjYxOTIxNSBDNi4xODc1LDIxLjI0NTQ0NDQgNS44Nzk2OTU3NywyMC45MDc4MjMxIDUuNSwyMC45MDc4MjMxIEM1LjEyMDMwNDIzLDIwLjkwNzgyMzEgNC44MTI1LDIxLjI0NTQ0NDQgNC44MTI1LDIxLjY2MTkyMTUgQzQuODEyNSwyMi4wNzgzOTg1IDUuMTIwMzA0MjMsMjIuNDE2MDE5OCA1LjUsMjIuNDE2MDE5OCBMNS41LDIyLjQxNjAxOTggWiBNNC4xMjUsMS42NzgzMTQ5IEM0LjEyNSwxLjg4NjU1MzQyIDQuMjQzMTY0MDYsMi4wNTUzNjQwOCA0LjM5ODczNDMzLDIuMDU1MzY0MDggTDYuNjAxMjY1NjcsMi4wNTUzNjQwOCBDNi43NTI0NDQ5NywyLjA1NTM2NDA4IDYuODc1LDEuODgwNDYzMzQgNi44NzUsMS42NzgzMTQ5IEM2Ljg3NSwxLjQ3MDA3NjM5IDYuNzU2ODM1OTQsMS4zMDEyNjU3MiA2LjYwMTI2NTY3LDEuMzAxMjY1NzIgTDQuMzk4NzM0MzMsMS4zMDEyNjU3MiBDNC4yNDc1NTUwMywxLjMwMTI2NTcyIDQuMTI1LDEuNDc2MTY2NDcgNC4xMjUsMS42NzgzMTQ5IFoiIGlkPSJpUGhvbmUtVmVjdG9yIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3Ljg5NDI0LDYuMTcwMTE4MTggTDE4LjQzODU2LDQuNTIxNjA2MTggTDIwLjI5NzAyNCw0LjUyMTYwNjE4IEwyMC44NTY4OTYsNi4xNzAxMTgxOCBMMjEuNTgwMDY0LDYuMTcwMTE4MTggTDE5Ljc5MTU4NCwwLjkyOTA5NDE4MiBMMTguOTc1MTA0LDAuOTI5MDk0MTgyIEwxNy4xOTQ0LDYuMTcwMTE4MTggTDE3Ljg5NDI0LDYuMTcwMTE4MTggWiBNMjAuMTU3MDU2LDMuOTkyODM4MTggTDE4LjU3ODUyOCwzLjk5MjgzODE4IEwxOS4wOTE3NDQsMi40NzY1MTgxOCBDMTkuMTkyODMyLDIuMTU3NzAyMTggMTkuMjc4MzY4LDEuODM4ODg2MTggMTkuMzU2MTI4LDEuNTI3ODQ2MTggTDE5LjM3MTY4LDEuNTI3ODQ2MTggQzE5LjQ0OTQ0LDEuODMxMTEwMTggMTkuNTI3MiwyLjE0MjE1MDE4IDE5LjY0Mzg0LDIuNDg0Mjk0MTggTDIwLjE1NzA1NiwzLjk5MjgzODE4IFogTTIzLjkzNjE5Miw2LjE3MDExODE4IEwyNS40MTM2MzIsMi40MDY1MzQxOCBMMjQuNjk4MjQsMi40MDY1MzQxOCBMMjMuOTY3Mjk2LDQuNTIxNjA2MTggQzIzLjg0Mjg4LDQuODYzNzUwMTggMjMuNzM0MDE2LDUuMTc0NzkwMTggMjMuNjQ4NDgsNS40ODU4MzAxOCBMMjMuNjI1MTUyLDUuNDg1ODMwMTggQzIzLjU0NzM5Miw1LjE3NDc5MDE4IDIzLjQ0NjMwNCw0Ljg2Mzc1MDE4IDIzLjMyMTg4OCw0LjUyMTYwNjE4IEwyMi41ODMxNjgsMi40MDY1MzQxOCBMMjEuODUyMjI0LDIuNDA2NTM0MTggTDIzLjI4MzAwOCw2LjE3MDExODE4IEwyMy45MzYxOTIsNi4xNzAxMTgxOCBaIE0yNy4wMzg4MTYsNi4yNTU2NTQxOCBDMjcuNTc1MzYsNi4yNTU2NTQxOCAyNy45Nzk3MTIsNS45OTEyNzAxOCAyOC4xODk2NjQsNS42OTU3ODIxOCBMMjguMjEyOTkyLDUuNjk1NzgyMTggTDI4LjI2NzQyNCw2LjE3MDExODE4IEwyOC44ODk1MDQsNi4xNzAxMTgxOCBDMjguODQyODQ4LDUuOTEzNTEwMTggMjguODI3Mjk2LDUuNTk0Njk0MTggMjguODI3Mjk2LDUuMjY4MTAyMTggTDI4LjgyNzI5NiwzLjg2MDY0NjE4IEMyOC44MjcyOTYsMy4xMDYzNzQxOCAyOC41NDczNiwyLjMyMDk5ODE4IDI3LjM5NjUxMiwyLjMyMDk5ODE4IEMyNi45MjIxNzYsMi4zMjA5OTgxOCAyNi40NzExNjgsMi40NTMxOTAxOCAyNi4xNjAxMjgsMi42NTUzNjYxOCBMMjYuMzE1NjQ4LDMuMTA2Mzc0MTggQzI2LjU4MDAzMiwyLjkzNTMwMjE4IDI2Ljk0NTUwNCwyLjgyNjQzODE4IDI3LjI5NTQyNCwyLjgyNjQzODE4IEMyOC4wNjUyNDgsMi44MjY0MzgxOCAyOC4xNTA3ODQsMy4zODYzMTAxOCAyOC4xNTA3ODQsMy42OTczNTAxOCBMMjguMTUwNzg0LDMuNzc1MTEwMTggQzI2LjY5NjY3MiwzLjc2NzMzNDE4IDI1Ljg4Nzk2OCw0LjI2NDk5ODE4IDI1Ljg4Nzk2OCw1LjE3NDc5MDE4IEMyNS44ODc5NjgsNS43MTkxMTAxOCAyNi4yNzY3NjgsNi4yNTU2NTQxOCAyNy4wMzg4MTYsNi4yNTU2NTQxOCBaIE0yNy4yMTc2NjQsNS43NTAyMTQxOCBDMjYuODY3NzQ0LDUuNzUwMjE0MTggMjYuNTcyMjU2LDUuNTQwMjYyMTggMjYuNTcyMjU2LDUuMDk3MDMwMTggQzI2LjU3MjI1Niw0LjM2NjA4NjE4IDI3LjQxOTg0LDQuMjMzODk0MTggMjguMTY2MzM2LDQuMjQ5NDQ2MTggTDI4LjE2NjMzNiw0LjkwMjYzMDE4IEMyOC4xNjYzMzYsNC45NzI2MTQxOCAyOC4xNTA3ODQsNS4wNTAzNzQxOCAyOC4xMjc0NTYsNS4xMjAzNTgxOCBDMjguMDE4NTkyLDUuNDM5MTc0MTggMjcuNzA3NTUyLDUuNzUwMjE0MTggMjcuMjE3NjY0LDUuNzUwMjE0MTggWiBNMzAuNDEzNiwxLjc2ODkwMjE4IEMzMC42ODU3NiwxLjc2ODkwMjE4IDMwLjg1NjgzMiwxLjU4MjI3ODE4IDMwLjg0OTA1NiwxLjM0ODk5ODE4IEMzMC44NDkwNTYsMS4xMDc5NDIxOCAzMC42ODU3NiwwLjkyMTMxODE4MiAzMC40MjkxNTIsMC45MjEzMTgxODIgQzMwLjE4MDMyLDAuOTIxMzE4MTgyIDMwLjAwMTQ3MiwxLjEwNzk0MjE4IDMwLjAwMTQ3MiwxLjM0ODk5ODE4IEMzMC4wMDE0NzIsMS41ODIyNzgxOCAzMC4xNzI1NDQsMS43Njg5MDIxOCAzMC40MTM2LDEuNzY4OTAyMTggWiBNMzAuNzcxMjk2LDYuMTcwMTE4MTggTDMwLjc3MTI5NiwyLjQwNjUzNDE4IEwzMC4wODcwMDgsMi40MDY1MzQxOCBMMzAuMDg3MDA4LDYuMTcwMTE4MTggTDMwLjc3MTI5Niw2LjE3MDExODE4IFogTTMyLjc0NjQsNi4xNzAxMTgxOCBMMzIuNzQ2NCwwLjY0OTE1ODE4MiBMMzIuMDYyMTEyLDAuNjQ5MTU4MTgyIEwzMi4wNjIxMTIsNi4xNzAxMTgxOCBMMzIuNzQ2NCw2LjE3MDExODE4IFogTTM0LjkwODEyOCw2LjI1NTY1NDE4IEMzNS40NDQ2NzIsNi4yNTU2NTQxOCAzNS44NDkwMjQsNS45OTEyNzAxOCAzNi4wNTg5NzYsNS42OTU3ODIxOCBMMzYuMDgyMzA0LDUuNjk1NzgyMTggTDM2LjEzNjczNiw2LjE3MDExODE4IEwzNi43NTg4MTYsNi4xNzAxMTgxOCBDMzYuNzEyMTYsNS45MTM1MTAxOCAzNi42OTY2MDgsNS41OTQ2OTQxOCAzNi42OTY2MDgsNS4yNjgxMDIxOCBMMzYuNjk2NjA4LDMuODYwNjQ2MTggQzM2LjY5NjYwOCwzLjEwNjM3NDE4IDM2LjQxNjY3MiwyLjMyMDk5ODE4IDM1LjI2NTgyNCwyLjMyMDk5ODE4IEMzNC43OTE0ODgsMi4zMjA5OTgxOCAzNC4zNDA0OCwyLjQ1MzE5MDE4IDM0LjAyOTQ0LDIuNjU1MzY2MTggTDM0LjE4NDk2LDMuMTA2Mzc0MTggQzM0LjQ0OTM0NCwyLjkzNTMwMjE4IDM0LjgxNDgxNiwyLjgyNjQzODE4IDM1LjE2NDczNiwyLjgyNjQzODE4IEMzNS45MzQ1NiwyLjgyNjQzODE4IDM2LjAyMDA5NiwzLjM4NjMxMDE4IDM2LjAyMDA5NiwzLjY5NzM1MDE4IEwzNi4wMjAwOTYsMy43NzUxMTAxOCBDMzQuNTY1OTg0LDMuNzY3MzM0MTggMzMuNzU3MjgsNC4yNjQ5OTgxOCAzMy43NTcyOCw1LjE3NDc5MDE4IEMzMy43NTcyOCw1LjcxOTExMDE4IDM0LjE0NjA4LDYuMjU1NjU0MTggMzQuOTA4MTI4LDYuMjU1NjU0MTggWiBNMzUuMDg2OTc2LDUuNzUwMjE0MTggQzM0LjczNzA1Niw1Ljc1MDIxNDE4IDM0LjQ0MTU2OCw1LjU0MDI2MjE4IDM0LjQ0MTU2OCw1LjA5NzAzMDE4IEMzNC40NDE1NjgsNC4zNjYwODYxOCAzNS4yODkxNTIsNC4yMzM4OTQxOCAzNi4wMzU2NDgsNC4yNDk0NDYxOCBMMzYuMDM1NjQ4LDQuOTAyNjMwMTggQzM2LjAzNTY0OCw0Ljk3MjYxNDE4IDM2LjAyMDA5Niw1LjA1MDM3NDE4IDM1Ljk5Njc2OCw1LjEyMDM1ODE4IEMzNS44ODc5MDQsNS40MzkxNzQxOCAzNS41NzY4NjQsNS43NTAyMTQxOCAzNS4wODY5NzYsNS43NTAyMTQxOCBaIE0zOS44MzAzMzU5LDYuMjU1NjU0MTggQzQwLjY3MDE0MzksNi4yNTU2NTQxOCA0MS41MTc3Mjc5LDUuNTg2OTE4MTggNDEuNTE3NzI3OSw0LjI0MTY3MDE4IEM0MS41MjU1MDM5LDMuMDk4NTk4MTggNDAuODY0NTQzOSwyLjMyMDk5ODE4IDM5LjkzMTQyMzksMi4zMjA5OTgxOCBDMzkuMzI0ODk1OSwyLjMyMDk5ODE4IDM4Ljg4OTQzOTksMi41OTMxNTgxOCAzOC42NDgzODM5LDMuMDEzMDYyMTggTDM4LjYzMjgzMTksMy4wMTMwNjIxOCBMMzguNjMyODMxOSwwLjY0OTE1ODE4MiBMMzcuOTU2MzE5OSwwLjY0OTE1ODE4MiBMMzcuOTU2MzE5OSw1LjE5ODExODE4IEMzNy45NTYzMTk5LDUuNTMyNDg2MTggMzcuOTQwNzY3OSw1LjkxMzUxMDE4IDM3LjkyNTIxNTksNi4xNzAxMTgxOCBMMzguNTE2MTkxOSw2LjE3MDExODE4IEwzOC41NDcyOTU5LDUuNTQ4MDM4MTggTDM4LjU3MDYyMzksNS41NDgwMzgxOCBDMzguODUwNTU5OSw2LjA0NTcwMjE4IDM5LjI4NjAxNTksNi4yNTU2NTQxOCAzOS44MzAzMzU5LDYuMjU1NjU0MTggWiBNMzkuNjkwMzY3OSw1LjcxMTMzNDE4IEMzOS4xOTI3MDM5LDUuNzExMzM0MTggMzguNzk2MTI3OSw1LjM4NDc0MjE4IDM4LjY2MzkzNTksNC45MTA0MDYxOCBDMzguNjQ4MzgzOSw0LjgzMjY0NjE4IDM4LjYzMjgzMTksNC43NDcxMTAxOCAzOC42MzI4MzE5LDQuNjYxNTc0MTggTDM4LjYzMjgzMTksMy45ODUwNjIxOCBDMzguNjMyODMxOSwzLjg3NjE5ODE4IDM4LjY1NjE1OTksMy43ODI4ODYxOCAzOC42NzE3MTE5LDMuNzA1MTI2MTggQzM4LjgxMTY3OTksMy4xODQxMzQxOCAzOS4yNDcxMzU5LDIuODY1MzE4MTggMzkuNzEzNjk1OSwyLjg2NTMxODE4IEM0MC40NDQ2Mzk5LDIuODY1MzE4MTggNDAuODMzNDM5OSwzLjUxMDcyNjE4IDQwLjgzMzQzOTksNC4yNjQ5OTgxOCBDNDAuODMzNDM5OSw1LjEyODEzNDE4IDQwLjQwNTc1OTksNS43MTEzMzQxOCAzOS42OTAzNjc5LDUuNzExMzM0MTggWiBNNDMuMjIwNjcxOSw2LjE3MDExODE4IEw0My4yMjA2NzE5LDAuNjQ5MTU4MTgyIEw0Mi41MzYzODM5LDAuNjQ5MTU4MTgyIEw0Mi41MzYzODM5LDYuMTcwMTE4MTggTDQzLjIyMDY3MTksNi4xNzAxMTgxOCBaIE00Ni4xMDU1Njc5LDYuMjQ3ODc4MTggQzQ2LjcwNDMxOTksNi4yNDc4NzgxOCA0Ny4xMTY0NDc5LDYuMTIzNDYyMTggNDcuMzU3NTAzOSw2LjAxNDU5ODE4IEw0Ny4yNDA4NjM5LDUuNTI0NzEwMTggQzQ2Ljk4NDI1NTksNS42MzM1NzQxOCA0Ni42ODg3Njc5LDUuNzE5MTEwMTggNDYuMTk4ODc5OSw1LjcxOTExMDE4IEM0NS41MTQ1OTE5LDUuNzE5MTEwMTggNDQuOTIzNjE1OSw1LjMzODA4NjE4IDQ0LjkwODA2MzksNC40MTI3NDIxOCBMNDcuNTUxOTAzOSw0LjQxMjc0MjE4IEM0Ny41NTk2Nzk5LDQuMzQyNzU4MTggNDcuNTc1MjMxOSw0LjIzMzg5NDE4IDQ3LjU3NTIzMTksNC4wOTM5MjYxOCBDNDcuNTc1MjMxOSwzLjQwMTg2MjE4IDQ3LjI0ODYzOTksMi4zMjA5OTgxOCA0Ni4wMjAwMzE5LDIuMzIwOTk4MTggQzQ0LjkyMzYxNTksMi4zMjA5OTgxOCA0NC4yNTQ4Nzk5LDMuMjE1MjM4MTggNDQuMjU0ODc5OSw0LjM1MDUzNDE4IEM0NC4yNTQ4Nzk5LDUuNDg1ODMwMTggNDQuOTQ2OTQzOSw2LjI0Nzg3ODE4IDQ2LjEwNTU2NzksNi4yNDc4NzgxOCBaIE00Ni45MTQyNzE5LDMuOTIyODU0MTggTDQ0LjkxNTgzOTksMy45MjI4NTQxOCBDNDQuOTcwMjcxOSwzLjQ0ODUxODE4IDQ1LjI3MzUzNTksMi44MTA4ODYxOCA0NS45NjU1OTk5LDIuODEwODg2MTggQzQ2LjczNTQyMzksMi44MTA4ODYxOCA0Ni45MjIwNDc5LDMuNDg3Mzk4MTggNDYuOTE0MjcxOSwzLjkyMjg1NDE4IFogTTUxLjkxNDIzOTksNi4yNTU2NTQxOCBDNTIuODI0MDMxOSw2LjI1NTY1NDE4IDUzLjc4ODI1NTksNS42NDkxMjYxOCA1My43ODgyNTU5LDQuMjU3MjIyMTggQzUzLjc4ODI1NTksMy4xMDYzNzQxOCA1My4wNTczMTE5LDIuMzIwOTk4MTggNTEuOTc2NDQ3OSwyLjMyMDk5ODE4IEM1MC45MzQ0NjM5LDIuMzIwOTk4MTggNTAuMTEwMjA3OSwzLjA1OTcxODE4IDUwLjExMDIwNzksNC4zMTk0MzAxOCBDNTAuMTEwMjA3OSw1LjUwOTE1ODE4IDUwLjg5NTU4MzksNi4yNTU2NTQxOCA1MS45MTQyMzk5LDYuMjU1NjU0MTggWiBNNTEuOTQ1MzQzOSw1Ljc0MjQzODE4IEM1MS4yNzY2MDc5LDUuNzQyNDM4MTggNTAuODAyMjcxOSw1LjEyMDM1ODE4IDUwLjgwMjI3MTksNC4yOTYxMDIxOCBDNTAuODAyMjcxOSwzLjU4MDcxMDE4IDUxLjE1MjE5MTksMi44MzQyMTQxOCA1MS45NjA4OTU5LDIuODM0MjE0MTggQzUyLjc2OTU5OTksMi44MzQyMTQxOCA1My4wODg0MTU5LDMuNjQyOTE4MTggNTMuMDg4NDE1OSw0LjI4MDU1MDE4IEM1My4wODg0MTU5LDUuMTI4MTM0MTggNTIuNTk4NTI3OSw1Ljc0MjQzODE4IDUxLjk0NTM0MzksNS43NDI0MzgxOCBaIE01NS40OTExOTk5LDYuMTcwMTE4MTggTDU1LjQ5MTE5OTksMy45MDczMDIxOCBDNTUuNDkxMTk5OSwzLjc5MDY2MjE4IDU1LjUwNjc1MTksMy42NzQwMjIxOCA1NS41Mzc4NTU5LDMuNTg4NDg2MTggQzU1LjY1NDQ5NTksMy4yMDc0NjIxOCA1Ni4wMDQ0MTU5LDIuODg4NjQ2MTggNTYuNDU1NDIzOSwyLjg4ODY0NjE4IEM1Ny4xMDA4MzE5LDIuODg4NjQ2MTggNTcuMzI2MzM1OSwzLjM5NDA4NjE4IDU3LjMyNjMzNTksNC4wMDA2MTQxOCBMNTcuMzI2MzM1OSw2LjE3MDExODE4IEw1OC4wMTA2MjM5LDYuMTcwMTE4MTggTDU4LjAxMDYyMzksMy45MjI4NTQxOCBDNTguMDEwNjIzOSwyLjYzMjAzODE4IDU3LjIwMTkxOTksMi4zMjA5OTgxOCA1Ni42ODA5Mjc5LDIuMzIwOTk4MTggQzU2LjA1ODg0NzksMi4zMjA5OTgxOCA1NS42MjMzOTE5LDIuNjcwOTE4MTggNTUuNDM2NzY3OSwzLjAyODYxNDE4IEw1NS40MjEyMTU5LDMuMDI4NjE0MTggTDU1LjM4MjMzNTksMi40MDY1MzQxOCBMNTQuNzc1ODA3OSwyLjQwNjUzNDE4IEM1NC43OTkxMzU5LDIuNzE3NTc0MTggNTQuODA2OTExOSwzLjAzNjM5MDE4IDU0LjgwNjkxMTksMy40MjUxOTAxOCBMNTQuODA2OTExOSw2LjE3MDExODE4IEw1NS40OTExOTk5LDYuMTcwMTE4MTggWiBNNjIuMjQwNzY3OSw2LjI0Nzg3ODE4IEM2Mi41MDUxNTE5LDYuMjQ3ODc4MTggNjIuNzE1MTAzOSw2LjIwODk5ODE4IDYyLjg0NzI5NTksNi4xNTQ1NjYxOCBMNjIuODE2MTkxOSw1LjY0MTM1MDE4IEM2Mi43MzA2NTU5LDUuNjY0Njc4MTggNjIuNTk4NDYzOSw1LjY4ODAwNjE4IDYyLjQxOTYxNTksNS42ODgwMDYxOCBDNjIuMDM4NTkxOSw1LjY4ODAwNjE4IDYxLjkwNjM5OTksNS40MjM2MjIxOCA2MS45MDYzOTk5LDQuOTU3MDYyMTggTDYxLjkwNjM5OTksMi45Mjc1MjYxOCBMNjIuODg2MTc1OSwyLjkyNzUyNjE4IEw2Mi44ODYxNzU5LDIuNDA2NTM0MTggTDYxLjkwNjM5OTksMi40MDY1MzQxOCBMNjEuOTA2Mzk5OSwxLjMyNTY3MDE4IEw2MS4yMzc2NjM5LDEuNTA0NTE4MTggTDYxLjIzNzY2MzksMi40MDY1MzQxOCBMNjAuNjU0NDYzOSwyLjQwNjUzNDE4IEw2MC42NTQ0NjM5LDIuOTI3NTI2MTggTDYxLjIzNzY2MzksMi45Mjc1MjYxOCBMNjEuMjM3NjYzOSw0Ljk4MDM5MDE4IEM2MS4yMzc2NjM5LDUuNDIzNjIyMTggNjEuMzA3NjQ3OSw1Ljc1Nzk5MDE4IDYxLjUwMjA0NzksNS45NjAxNjYxOCBDNjEuNjY1MzQzOSw2LjE0Njc5MDE4IDYxLjkyMTk1MTksNi4yNDc4NzgxOCA2Mi4yNDA3Njc5LDYuMjQ3ODc4MTggWiBNNjQuNDk1ODA3OSw2LjE3MDExODE4IEw2NC40OTU4MDc5LDMuODk5NTI2MTggQzY0LjQ5NTgwNzksMy43NjczMzQxOCA2NC41MDM1ODM5LDMuNjY2MjQ2MTggNjQuNTQyNDYzOSwzLjU3MjkzNDE4IEM2NC42NjY4Nzk5LDMuMTk5Njg2MTggNjUuMDE2Nzk5OSwyLjg4ODY0NjE4IDY1LjQ2MDAzMTksMi44ODg2NDYxOCBDNjYuMTA1NDM5OSwyLjg4ODY0NjE4IDY2LjMzMDk0MzksMy40MDE4NjIxOCA2Ni4zMzA5NDM5LDQuMDA4MzkwMTggTDY2LjMzMDk0MzksNi4xNzAxMTgxOCBMNjcuMDE1MjMxOSw2LjE3MDExODE4IEw2Ny4wMTUyMzE5LDMuOTMwNjMwMTggQzY3LjAxNTIzMTksMi42MzIwMzgxOCA2Ni4yMDY1Mjc5LDIuMzIwOTk4MTggNjUuNzAxMDg3OSwyLjMyMDk5ODE4IEM2NS40NDQ0Nzk5LDIuMzIwOTk4MTggNjUuMjAzNDIzOSwyLjM5ODc1ODE4IDY1LjAwMTI0NzksMi41MTUzOTgxOCBDNjQuNzkxMjk1OSwyLjYzMjAzODE4IDY0LjYyMDIyMzksMi44MDMxMTAxOCA2NC41MTEzNTk5LDIuOTk3NTEwMTggTDY0LjQ5NTgwNzksMi45OTc1MTAxOCBMNjQuNDk1ODA3OSwwLjY0OTE1ODE4MiBMNjMuODExNTE5OSwwLjY0OTE1ODE4MiBMNjMuODExNTE5OSw2LjE3MDExODE4IEw2NC40OTU4MDc5LDYuMTcwMTE4MTggWiBNNjkuODYxMjQ3OSw2LjI0Nzg3ODE4IEM3MC40NTk5OTk5LDYuMjQ3ODc4MTggNzAuODcyMTI3OSw2LjEyMzQ2MjE4IDcxLjExMzE4MzksNi4wMTQ1OTgxOCBMNzAuOTk2NTQzOSw1LjUyNDcxMDE4IEM3MC43Mzk5MzU5LDUuNjMzNTc0MTggNzAuNDQ0NDQ3OSw1LjcxOTExMDE4IDY5Ljk1NDU1OTksNS43MTkxMTAxOCBDNjkuMjcwMjcxOSw1LjcxOTExMDE4IDY4LjY3OTI5NTksNS4zMzgwODYxOCA2OC42NjM3NDM5LDQuNDEyNzQyMTggTDcxLjMwNzU4MzksNC40MTI3NDIxOCBDNzEuMzE1MzU5OSw0LjM0Mjc1ODE4IDcxLjMzMDkxMTksNC4yMzM4OTQxOCA3MS4zMzA5MTE5LDQuMDkzOTI2MTggQzcxLjMzMDkxMTksMy40MDE4NjIxOCA3MS4wMDQzMTk5LDIuMzIwOTk4MTggNjkuNzc1NzExOSwyLjMyMDk5ODE4IEM2OC42NzkyOTU5LDIuMzIwOTk4MTggNjguMDEwNTU5OSwzLjIxNTIzODE4IDY4LjAxMDU1OTksNC4zNTA1MzQxOCBDNjguMDEwNTU5OSw1LjQ4NTgzMDE4IDY4LjcwMjYyMzksNi4yNDc4NzgxOCA2OS44NjEyNDc5LDYuMjQ3ODc4MTggWiBNNzAuNjY5OTUxOSwzLjkyMjg1NDE4IEw2OC42NzE1MTk5LDMuOTIyODU0MTggQzY4LjcyNTk1MTksMy40NDg1MTgxOCA2OS4wMjkyMTU5LDIuODEwODg2MTggNjkuNzIxMjc5OSwyLjgxMDg4NjE4IEM3MC40OTExMDM5LDIuODEwODg2MTggNzAuNjc3NzI3OSwzLjQ4NzM5ODE4IDcwLjY2OTk1MTksMy45MjI4NTQxOCBaIiBpZD0iQXZhaWxhYmxlb250aGUiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC43ODg0OCwxOS4xNzAxMTgyIEwxOS44NzcxMiwxNS44NzMwOTQyIEwyMy41OTQwNDgsMTUuODczMDk0MiBMMjQuNzEzNzkyLDE5LjE3MDExODIgTDI2LjE2MDEyOCwxOS4xNzAxMTgyIEwyMi41ODMxNjgsOC42ODgwNzAxOCBMMjAuOTUwMjA4LDguNjg4MDcwMTggTDE3LjM4ODgsMTkuMTcwMTE4MiBMMTguNzg4NDgsMTkuMTcwMTE4MiBaIE0yMy4zMTQxMTIsMTQuODE1NTU4MiBMMjAuMTU3MDU2LDE0LjgxNTU1ODIgTDIxLjE4MzQ4OCwxMS43ODI5MTgyIEMyMS4zODU2NjQsMTEuMTQ1Mjg2MiAyMS41NTY3MzYsMTAuNTA3NjU0MiAyMS43MTIyNTYsOS44ODU1NzQxOCBMMjEuNzQzMzYsOS44ODU1NzQxOCBDMjEuODk4ODgsMTAuNDkyMTAyMiAyMi4wNTQ0LDExLjExNDE4MjIgMjIuMjg3NjgsMTEuNzk4NDcwMiBMMjMuMzE0MTEyLDE0LjgxNTU1ODIgWiBNMjguNDA4ODMyNywyMi4yNDk0MTQyIEwyOC40MDg4MzI3LDE4LjE1OTIzODIgTDI4LjQzOTkzNjcsMTguMTU5MjM4MiBDMjguODkwOTQ0NywxOC45MDU3MzQyIDI5Ljc2MTg1NjcsMTkuMzQxMTkwMiAzMC43NTcxODQ3LDE5LjM0MTE5MDIgQzMyLjUzMDExMjcsMTkuMzQxMTkwMiAzNC4xNzg2MjQ3LDE4LjAwMzcxODIgMzQuMTc4NjI0NywxNS4yOTc2NzAyIEMzNC4xNzg2MjQ3LDEzLjAxMTUyNjIgMzIuODEwMDQ4NywxMS40NzE4NzgyIDMwLjk5MDQ2NDcsMTEuNDcxODc4MiBDMjkuNzYxODU2NywxMS40NzE4NzgyIDI4Ljg3NTM5MjcsMTIuMDE2MTk4MiAyOC4zMTU1MjA3LDEyLjkzMzc2NjIgTDI4LjI4NDQxNjcsMTIuOTMzNzY2MiBMMjguMjIyMjA4NywxMS42NDI5NTAyIEwyNi45OTM2MDA3LDExLjY0Mjk1MDIgQzI3LjAyNDcwNDcsMTIuMzU4MzQyMiAyNy4wNTU4MDg3LDEzLjEzNTk0MjIgMjcuMDU1ODA4NywxNC4xMDAxNjYyIEwyNy4wNTU4MDg3LDIyLjI0OTQxNDIgTDI4LjQwODgzMjcsMjIuMjQ5NDE0MiBaIE0zMC41MjM5MDQ3LDE4LjI2ODEwMjIgQzI5LjU0NDEyODcsMTguMjY4MTAyMiAyOC43MTk4NzI3LDE3LjYxNDkxODIgMjguNDcxMDQwNywxNi42NjYyNDYyIEMyOC40Mzk5MzY3LDE2LjQ5NTE3NDIgMjguNDA4ODMyNywxNi4zMDg1NTAyIDI4LjQwODgzMjcsMTYuMTA2Mzc0MiBMMjguNDA4ODMyNywxNC44MTU1NTgyIEMyOC40MDg4MzI3LDE0LjYyODkzNDIgMjguNDU1NDg4NywxNC40MjY3NTgyIDI4LjUwMjE0NDcsMTQuMjU1Njg2MiBDMjguNzY2NTI4NywxMy4yMjkyNTQyIDI5LjYzNzQ0MDcsMTIuNTYwNTE4MiAzMC41NzA1NjA3LDEyLjU2MDUxODIgQzMyLjAxNjg5NjcsMTIuNTYwNTE4MiAzMi44MTAwNDg3LDEzLjg1MTMzNDIgMzIuODEwMDQ4NywxNS4zNTk4NzgyIEMzMi44MTAwNDg3LDE3LjA4NjE1MDIgMzEuOTcwMjQwNywxOC4yNjgxMDIyIDMwLjUyMzkwNDcsMTguMjY4MTAyMiBaIE0zNi43MDcyNjU1LDIyLjI0OTQxNDIgTDM2LjcwNzI2NTUsMTguMTU5MjM4MiBMMzYuNzM4MzY5NSwxOC4xNTkyMzgyIEMzNy4xODkzNzc1LDE4LjkwNTczNDIgMzguMDYwMjg5NSwxOS4zNDExOTAyIDM5LjA1NTYxNzUsMTkuMzQxMTkwMiBDNDAuODI4NTQ1NSwxOS4zNDExOTAyIDQyLjQ3NzA1NzUsMTguMDAzNzE4MiA0Mi40NzcwNTc1LDE1LjI5NzY3MDIgQzQyLjQ3NzA1NzUsMTMuMDExNTI2MiA0MS4xMDg0ODE1LDExLjQ3MTg3ODIgMzkuMjg4ODk3NSwxMS40NzE4NzgyIEMzOC4wNjAyODk1LDExLjQ3MTg3ODIgMzcuMTczODI1NSwxMi4wMTYxOTgyIDM2LjYxMzk1MzUsMTIuOTMzNzY2MiBMMzYuNTgyODQ5NSwxMi45MzM3NjYyIEwzNi41MjA2NDE1LDExLjY0Mjk1MDIgTDM1LjI5MjAzMzUsMTEuNjQyOTUwMiBDMzUuMzIzMTM3NSwxMi4zNTgzNDIyIDM1LjM1NDI0MTUsMTMuMTM1OTQyMiAzNS4zNTQyNDE1LDE0LjEwMDE2NjIgTDM1LjM1NDI0MTUsMjIuMjQ5NDE0MiBMMzYuNzA3MjY1NSwyMi4yNDk0MTQyIFogTTM4LjgyMjMzNzUsMTguMjY4MTAyMiBDMzcuODQyNTYxNSwxOC4yNjgxMDIyIDM3LjAxODMwNTUsMTcuNjE0OTE4MiAzNi43Njk0NzM1LDE2LjY2NjI0NjIgQzM2LjczODM2OTUsMTYuNDk1MTc0MiAzNi43MDcyNjU1LDE2LjMwODU1MDIgMzYuNzA3MjY1NSwxNi4xMDYzNzQyIEwzNi43MDcyNjU1LDE0LjgxNTU1ODIgQzM2LjcwNzI2NTUsMTQuNjI4OTM0MiAzNi43NTM5MjE1LDE0LjQyNjc1ODIgMzYuODAwNTc3NSwxNC4yNTU2ODYyIEMzNy4wNjQ5NjE1LDEzLjIyOTI1NDIgMzcuOTM1ODczNSwxMi41NjA1MTgyIDM4Ljg2ODk5MzUsMTIuNTYwNTE4MiBDNDAuMzE1MzI5NSwxMi41NjA1MTgyIDQxLjEwODQ4MTUsMTMuODUxMzM0MiA0MS4xMDg0ODE1LDE1LjM1OTg3ODIgQzQxLjEwODQ4MTUsMTcuMDg2MTUwMiA0MC4yNjg2NzM1LDE4LjI2ODEwMjIgMzguODIyMzM3NSwxOC4yNjgxMDIyIFogTTQ4LjU5MTg3NSwxOS4zMjU2MzgyIEM1MS4wNjQ2NDMsMTkuMzI1NjM4MiA1Mi4yNjIxNDcsMTcuOTI1OTU4MiA1Mi4yNjIxNDcsMTYuMzA4NTUwMiBDNTIuMjYyMTQ3LDE0Ljc2ODkwMjIgNTEuMzYwMTMxLDEzLjkxMzU0MjIgNDkuNTg3MjAzLDEzLjIyOTI1NDIgQzQ4LjE0MDg2NywxMi42NjkzODIyIDQ3LjUwMzIzNSwxMi4xODcyNzAyIDQ3LjUwMzIzNSwxMS4yMDc0OTQyIEM0Ny41MDMyMzUsMTAuNDkyMTAyMiA0OC4wNDc1NTUsOS42MzY3NDIxOCA0OS40NzgzMzksOS42MzY3NDIxOCBDNTAuNDI3MDExLDkuNjM2NzQyMTggNTEuMTI2ODUxLDkuOTQ3NzgyMTggNTEuNDY4OTk1LDEwLjEzNDQwNjIgTDUxLjg0MjI0Myw5LjAzMDIxNDE4IEM1MS4zNzU2ODMsOC43NjU4MzAxOCA1MC41OTgwODMsOC41MTY5OTgxOCA0OS41MjQ5OTUsOC41MTY5OTgxOCBDNDcuNDg3NjgzLDguNTE2OTk4MTggNDYuMTM0NjU5LDkuNzMwMDU0MTggNDYuMTM0NjU5LDExLjM2MzAxNDIgQzQ2LjEzNDY1OSwxMi44NDA0NTQyIDQ3LjE5MjE5NSwxMy43MjY5MTgyIDQ4LjkwMjkxNSwxNC4zMzM0NDYyIEM1MC4zMTgxNDcsMTQuODc3NzY2MiA1MC44NzgwMTksMTUuNDM3NjM4MiA1MC44NzgwMTksMTYuNDE3NDE0MiBDNTAuODc4MDE5LDE3LjQ3NDk1MDIgNTAuMDY5MzE1LDE4LjIwNTg5NDIgNDguNjg1MTg3LDE4LjIwNTg5NDIgQzQ3Ljc1MjA2NywxOC4yMDU4OTQyIDQ2Ljg2NTYwMywxNy44OTQ4NTQyIDQ2LjI1OTA3NSwxNy41MjE2MDYyIEw0NS45MTY5MzEsMTguNjU2OTAyMiBDNDYuNDc2ODAzLDE5LjAzMDE1MDIgNDcuNTgwOTk1LDE5LjMyNTYzODIgNDguNTkxODc1LDE5LjMyNTYzODIgWiBNNTUuNzg2MTE1NywxOS4zMjU2MzgyIEM1Ni4zMTQ4ODM3LDE5LjMyNTYzODIgNTYuNzM0Nzg3NywxOS4yNDc4NzgyIDU2Ljk5OTE3MTcsMTkuMTM5MDE0MiBMNTYuOTM2OTYzNywxOC4xMTI1ODIyIEM1Ni43NjU4OTE3LDE4LjE1OTIzODIgNTYuNTAxNTA3NywxOC4yMDU4OTQyIDU2LjE0MzgxMTcsMTguMjA1ODk0MiBDNTUuMzgxNzYzNywxOC4yMDU4OTQyIDU1LjExNzM3OTcsMTcuNjc3MTI2MiA1NS4xMTczNzk3LDE2Ljc0NDAwNjIgTDU1LjExNzM3OTcsMTIuNjg0OTM0MiBMNTcuMDc2OTMxNywxMi42ODQ5MzQyIEw1Ny4wNzY5MzE3LDExLjY0Mjk1MDIgTDU1LjExNzM3OTcsMTEuNjQyOTUwMiBMNTUuMTE3Mzc5Nyw5LjQ4MTIyMjE4IEw1My43Nzk5MDc3LDkuODM4OTE4MTggTDUzLjc3OTkwNzcsMTEuNjQyOTUwMiBMNTIuNjEzNTA3NywxMS42NDI5NTAyIEw1Mi42MTM1MDc3LDEyLjY4NDkzNDIgTDUzLjc3OTkwNzcsMTIuNjg0OTM0MiBMNTMuNzc5OTA3NywxNi43OTA2NjIyIEM1My43Nzk5MDc3LDE3LjY3NzEyNjIgNTMuOTE5ODc1NywxOC4zNDU4NjIyIDU0LjMwODY3NTcsMTguNzUwMjE0MiBDNTQuNjM1MjY3NywxOS4xMjM0NjIyIDU1LjE0ODQ4MzcsMTkuMzI1NjM4MiA1NS43ODYxMTU3LDE5LjMyNTYzODIgWiBNNjEuMDM2MzU2NSwxOS4zNDExOTAyIEM2Mi44NTU5NDA1LDE5LjM0MTE5MDIgNjQuNzg0Mzg4NSwxOC4xMjgxMzQyIDY0Ljc4NDM4ODUsMTUuMzQ0MzI2MiBDNjQuNzg0Mzg4NSwxMy4wNDI2MzAyIDYzLjMyMjUwMDUsMTEuNDcxODc4MiA2MS4xNjA3NzI1LDExLjQ3MTg3ODIgQzU5LjA3NjgwNDUsMTEuNDcxODc4MiA1Ny40MjgyOTI1LDEyLjk0OTMxODIgNTcuNDI4MjkyNSwxNS40Njg3NDIyIEM1Ny40MjgyOTI1LDE3Ljg0ODE5ODIgNTguOTk5MDQ0NSwxOS4zNDExOTAyIDYxLjAzNjM1NjUsMTkuMzQxMTkwMiBaIE02MS4wOTg1NjQ1LDE4LjMxNDc1ODIgQzU5Ljc2MTA5MjUsMTguMzE0NzU4MiA1OC44MTI0MjA1LDE3LjA3MDU5ODIgNTguODEyNDIwNSwxNS40MjIwODYyIEM1OC44MTI0MjA1LDEzLjk5MTMwMjIgNTkuNTEyMjYwNSwxMi40OTgzMTAyIDYxLjEyOTY2ODUsMTIuNDk4MzEwMiBDNjIuNzQ3MDc2NSwxMi40OTgzMTAyIDYzLjM4NDcwODUsMTQuMTE1NzE4MiA2My4zODQ3MDg1LDE1LjM5MDk4MjIgQzYzLjM4NDcwODUsMTcuMDg2MTUwMiA2Mi40MDQ5MzI1LDE4LjMxNDc1ODIgNjEuMDk4NTY0NSwxOC4zMTQ3NTgyIFogTTY3LjMxMzAyOTIsMTkuMTcwMTE4MiBMNjcuMzEzMDI5MiwxNS4xNTc3MDIyIEM2Ny4zMTMwMjkyLDE0LjkyNDQyMjIgNjcuMzQ0MTMzMiwxNC43MDY2OTQyIDY3LjM3NTIzNzIsMTQuNTIwMDcwMiBDNjcuNTYxODYxMiwxMy40OTM2MzgyIDY4LjI0NjE0OTIsMTIuNzYyNjk0MiA2OS4yMTAzNzMyLDEyLjc2MjY5NDIgQzY5LjM5Njk5NzIsMTIuNzYyNjk0MiA2OS41MzY5NjUyLDEyLjc3ODI0NjIgNjkuNjc2OTMzMiwxMi44MDkzNTAyIEw2OS42NzY5MzMyLDExLjUxODUzNDIgQzY5LjU1MjUxNzIsMTEuNDg3NDMwMiA2OS40NDM2NTMyLDExLjQ3MTg3ODIgNjkuMjg4MTMzMiwxMS40NzE4NzgyIEM2OC4zNzA1NjUyLDExLjQ3MTg3ODIgNjcuNTQ2MzA5MiwxMi4xMDk1MTAyIDY3LjIwNDE2NTIsMTMuMTIwMzkwMiBMNjcuMTQxOTU3MiwxMy4xMjAzOTAyIEw2Ny4wOTUzMDEyLDExLjY0Mjk1MDIgTDY1Ljg5Nzc5NzIsMTEuNjQyOTUwMiBDNjUuOTQ0NDUzMiwxMi4zNDI3OTAyIDY1Ljk2MDAwNTIsMTMuMTA0ODM4MiA2NS45NjAwMDUyLDEzLjk5MTMwMjIgTDY1Ljk2MDAwNTIsMTkuMTcwMTE4MiBMNjcuMzEzMDI5MiwxOS4xNzAxMTgyIFogTTczLjQ5NjM4OTksMTkuMzI1NjM4MiBDNzQuNjkzODkzOSwxOS4zMjU2MzgyIDc1LjUxODE0OTksMTkuMDc2ODA2MiA3Ni4wMDAyNjE5LDE4Ljg1OTA3ODIgTDc1Ljc2Njk4MTksMTcuODc5MzAyMiBDNzUuMjUzNzY1OSwxOC4wOTcwMzAyIDc0LjY2Mjc4OTksMTguMjY4MTAyMiA3My42ODMwMTM5LDE4LjI2ODEwMjIgQzcyLjMxNDQzNzksMTguMjY4MTAyMiA3MS4xMzI0ODU5LDE3LjUwNjA1NDIgNzEuMTAxMzgxOSwxNS42NTUzNjYyIEw3Ni4zODkwNjE5LDE1LjY1NTM2NjIgQzc2LjQwNDYxMzksMTUuNTE1Mzk4MiA3Ni40MzU3MTc5LDE1LjI5NzY3MDIgNzYuNDM1NzE3OSwxNS4wMTc3MzQyIEM3Ni40MzU3MTc5LDEzLjYzMzYwNjIgNzUuNzgyNTMzOSwxMS40NzE4NzgyIDczLjMyNTMxNzksMTEuNDcxODc4MiBDNzEuMTMyNDg1OSwxMS40NzE4NzgyIDY5Ljc5NTAxMzksMTMuMjYwMzU4MiA2OS43OTUwMTM5LDE1LjUzMDk1MDIgQzY5Ljc5NTAxMzksMTcuODAxNTQyMiA3MS4xNzkxNDE5LDE5LjMyNTYzODIgNzMuNDk2Mzg5OSwxOS4zMjU2MzgyIFogTTc1LjExMzc5NzksMTQuNjc1NTkwMiBMNzEuMTE2OTMzOSwxNC42NzU1OTAyIEM3MS4yMjU3OTc5LDEzLjcyNjkxODIgNzEuODMyMzI1OSwxMi40NTE2NTQyIDczLjIxNjQ1MzksMTIuNDUxNjU0MiBDNzQuNzU2MTAxOSwxMi40NTE2NTQyIDc1LjEyOTM0OTksMTMuODA0Njc4MiA3NS4xMTM3OTc5LDE0LjY3NTU5MDIgWiIgaWQ9IkFwcFN0b3JlIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./public/images/svg/btt-google-mb.svg":
/*!*********************************************!*\
  !*** ./public/images/svg/btt-google-mb.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTE4cHgiIGhlaWdodD0iNDJweCIgdmlld0JveD0iMCAwIDExOCA0MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjIgKDkxMzkwKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5Hcm91cCAyNzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iIy1GT09URVItTWItMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0Mi4wMDAwMDAsIC0yMDguMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjAwMDAwMCwgMC4wMDAwMDApIiBpZD0iR3JvdXAtMzUiPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTM0Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ii0tLURvd25sb2FkLWFwcCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wMDAwMDAsIDE5NC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0zMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUuMDAwMDAwLCAxNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMi4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI2LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtNCIgc3Ryb2tlPSIjMTQxRUQyIiBzdHJva2Utd2lkdGg9IjAuNTcxMjA5NDA4IiBmaWxsPSIjRkZGRkZGIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTE2IiBoZWlnaHQ9IjQwIiByeD0iMTkuMDg3MjgxOCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC4wMDAwMDAsIDcuMDAwMDAwKSIgZmlsbD0iIzE0MUVEMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4xNjYxMjgsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDIuNjA4MzcwNTkgQzAsMS4wMjA3Njk0NCAxLjE4MzI3NTQ4LDAgMi42NTUxNDMxOSwwIEMzLjY0MTI4NTA3LDAgNC4yODU3NjAzMSwwLjQ2ODU4MDg4MSA0LjY4ODA4MzQ1LDEuMDQzNDQyNzEgTDMuOTY3MzEzNzIsMS40NTk1OTE2NiBDMy42OTQzNTk1LDEuMDgxMjMxNDkgMy4yMTYyMTU3NSwwLjc4NjQ3ODk5OSAyLjY1NTE0MzE5LDAuNzg2NDc4OTk5IEMxLjY1NDMxMTA2LDAuNzg2NDc4OTk5IDAuOTEwMzIxMjY4LDEuNTQyNzI2OTcgMC45MTAzMjEyNjgsMi42MDgzNzA1OSBDMC45MTAzMjEyNjgsMy42NTkzNzEwNSAxLjY1MzgzNzE4LDQuNDMwMjYyMTggMi42NTUxNDMxOSw0LjQzMDI2MjE4IEMzLjE3MTE5NzI1LDQuNDMwMjYyMTggMy42MjYxMjA5NSw0LjE5NTk3MTc0IDMuODUzNTgyOCwzLjk3Njc5NjgxIEwzLjg1MzU4MjgsMy4xOTc4NzU1NyBMMi4zMzY2OTY2LDMuMTk3ODc1NTcgTDIuMzM2Njk2NiwyLjQxOTQyNjY5IEw0LjczMzU3NTgyLDIuNDE5NDI2NjkgTDQuNzMzNTc1ODIsNC4zMDE3ODAzMyBDNC4yNDA3NDE4Miw0Ljg1Mzk2ODg5IDMuNTI3NTU0MTUsNS4yMjQyOTg5NCAyLjY1NTE0MzE5LDUuMjI0Mjk4OTQgQzEuMTgzMjc1NDgsNS4yMjQyOTg5NCAwLDQuMTg4ODg2MzQgMCwyLjYwODM3MDU5IEwwLDIuNjA4MzcwNTkgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgcG9pbnRzPSI1Ljk3NTE0OTA5IDUuMDQzMzg1MTUgNS45NzUxNDkwOSAwIDkuNDQxMDk4OTkgMCA5LjQ0MTA5ODk5IDAuNzc4OTIxMjQzIDYuODYyMjUwMyAwLjc3ODkyMTI0MyA2Ljg2MjI1MDMgMi4wNzkzMjc2NiA5LjM4ODQ5ODQ0IDIuMDc5MzI3NjYgOS4zODg0OTg0NCAyLjg1ODI0ODkgNi44NjIyNTAzIDIuODU4MjQ4OSA2Ljg2MjI1MDMgNC4yNjQ5MzYyNyA5LjQ0MTA5ODk5IDQuMjY0OTM2MjcgOS40NDEwOTg5OSA1LjA0MzM4NTE1IDUuOTc1MTQ5MDkgNS4wNDMzODUxNSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIHBvaW50cz0iMTEuOTg4NTYxMiA1LjA0MjkxMjc5IDExLjk4ODU2MTIgMC43Nzg5MjEyNDMgMTAuNDU2NTEwOSAwLjc3ODkyMTI0MyAxMC40NTY1MTA5IDAgMTQuNDA4MTg2NiAwIDE0LjQwODE4NjYgMC43Nzg5MjEyNDMgMTIuODc2NjEwMiAwLjc3ODkyMTI0MyAxMi44NzY2MTAyIDUuMDQyOTEyNzkiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBwb2ludHM9IjE3LjE3ODU1MzYgNS4wNDMzODUxNSAxNy4xNzg1NTM2IDAgMTguMDY1NjU0OCAwIDE4LjA2NTY1NDggNS4wNDMzODUxNSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIHBvaW50cz0iMjAuMjA0MzkxMiA1LjA0MjkxMjc5IDIwLjIwNDM5MTIgMC43Nzg5MjEyNDMgMTguNjcyMzQwOSAwLjc3ODkyMTI0MyAxOC42NzIzNDA5IDAgMjIuNjI0MDE2NiAwIDIyLjYyNDAxNjYgMC43Nzg5MjEyNDMgMjEuMDkxOTY2MyAwLjc3ODkyMTI0MyAyMS4wOTE5NjYzIDUuMDQyOTEyNzkiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI2LjE0MTI3NzMsMi42MDgzNzA1OSBDMjYuMTQxMjc3MywxLjEwMzQzMjQgMjcuMjEwODIxOCwwIDI4LjcyODE4MTksMCBDMzAuMjM3MDEyMiwwIDMxLjMxNDYxMjcsMS4xMDM5MDQ3NiAzMS4zMTQ2MTI3LDIuNjA4MzcwNTkgQzMxLjMxNDYxMjcsNC4xMTI4MzY0MiAzMC4yMzcwMTIyLDUuMjE2NzQxMTggMjguNzI4MTgxOSw1LjIxNjc0MTE4IEMyNy4yMTAzNDgsNS4yMTY3NDExOCAyNi4xNDEyNzczLDQuMTEyODM2NDIgMjYuMTQxMjc3MywyLjYwODM3MDU5IEwyNi4xNDEyNzczLDIuNjA4MzcwNTkgWiBNMzAuNDA0MjkxNCwyLjYwODM3MDU5IEMzMC40MDQyOTE0LDEuNTY0OTI3ODggMjkuNzQ0MTc4MiwwLjc4NjQ3ODk5OSAyOC43MjgxODE5LDAuNzg2NDc4OTk5IEMyNy43MDQxMjk3LDAuNzg2NDc4OTk5IDI3LjA1MTU5ODUsMS41NjQ5Mjc4OCAyNy4wNTE1OTg1LDIuNjA4MzcwNTkgQzI3LjA1MTU5ODUsMy42NDM3ODMxOCAyNy43MDQxMjk3LDQuNDMwMjYyMTggMjguNzI4MTgxOSw0LjQzMDI2MjE4IEMyOS43NDQxNzgyLDQuNDMwMjYyMTggMzAuNDA0MjkxNCwzLjY0Mzc4MzE4IDMwLjQwNDI5MTQsMi42MDgzNzA1OSBMMzAuNDA0MjkxNCwyLjYwODM3MDU5IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIHBvaW50cz0iMzUuNjQzMDMyOCA1LjA0MzM4NTE1IDMzLjAwMzUyNzYgMS40MzY5MTgzOSAzMy4wMDM1Mjc2IDUuMDQzMzg1MTUgMzIuMTE2NDI2NCA1LjA0MzM4NTE1IDMyLjExNjQyNjQgMCAzMy4wMjY3NDc2IDAgMzUuNjEzMTc4NCAzLjQ5MzU3Mjc4IDM1LjYxMzE3ODQgMCAzNi41MDA3NTM1IDAgMzYuNTAwNzUzNSA1LjA0MzM4NTE1Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDguOTYyNzI0KSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAuMTY2MTI4LCAwLjc0Njg5NCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ1LjQ0MTQ5NywxMC44Mzc5MDcxIEw0NC42NzY2NTY1LDExLjU1NjgzODcgQzQ0LjUwMDM3MzYsMTEuNjUzNjcyNCA0NC4zMjQ1NjQ1LDExLjc2NjA5NCA0NC4xNDkyMjkzLDExLjg0NTkyMjggQzQzLjYxODAxMTIsMTIuMDg2MzUzOSA0My4wNzc3ODkzLDEyLjE0NjgxNiA0Mi41OTc3NSwxMi4xNDY4MTYgQzQyLjA4NjkwODYsMTIuMTQ2ODE2IDQxLjI4NjA1MzMsMTIuMTE0MjIzMiA0MC40Njk1NjAxLDExLjUyNTE5MDUgQzM5LjMzNDYyMDIsMTAuNzI3ODQ3MyAzOC44Mzg0NjkxLDkuMzU4NDc2MzMgMzguODM4NDY5MSw4LjE2NDgyMzIyIEMzOC44Mzg0NjkxLDUuNjkzNDM2OTYgNDAuODU2NzE5MSw0LjQ4MTM2MTgyIDQyLjUwMjUwMDMsNC40ODEzNjE4MiBDNDMuMDc4MjYzMSw0LjQ4MTM2MTgyIDQzLjY2OTE5MDEsNC42MjQ5NTkxOCA0NC4xNDk3MDMyLDQuOTI3NzQxNzkgQzQ0Ljk0ODY2Myw1LjQ1Mzk1MDU2IDQ1LjE1NTI3NDEsNi4xMzgzOTk4NSA0NS4yNjk5NTI4LDYuNTA1NDIzMzkgTDQxLjUxMDE5OCw4LjAxOTMzNjQxIEw0MC4yNzkwNjA4LDguMTE0NzUzMDkgQzQwLjY3NzU5MjksMTAuMTQwNzA0MSA0Mi4wNTI3ODkzLDExLjMxOTI0MTcgNDMuNTcyNTE4OCwxMS4zMTkyNDE3IEM0NC4zMzE2NzI3LDExLjMxOTI0MTcgNDQuODk1MTE0NywxMS4wNzI2Njk5IDQ1LjQxMjExNjUsMTAuODE3NTk1NiBDNDUuNDExNjQyNiwxMC44MTgwNjggNDUuNTE1NDIyMSwxMC43NjQyMTkgNDUuNDQxNDk3LDEwLjgzNzkwNzEgTDQ1LjQ0MTQ5NywxMC44Mzc5MDcxIFogTTQzLjE3MzUxMjgsNi44MDcyNjEyNyBDNDMuNDc5MTY0Nyw2LjY5NjcyOTA5IDQzLjYzNzQ0MDIsNi42MDA4NDAwNiA0My42Mzc0NDAyLDYuMzc5MzAzMzMgQzQzLjYzNzQ0MDIsNS43NDI1NjIzOCA0Mi45MTQ3NzQ5LDUuMDA3NTcwNTkgNDIuMDUyMzE1NCw1LjAwNzU3MDU5IEM0MS40MTMwNTI5LDUuMDA3NTcwNTkgNDAuMjE0MTM5NCw1LjUwMzU0ODM0IDQwLjIxNDEzOTQsNy4yMjUyOTk2NiBDNDAuMjE0MTM5NCw3LjQ5NDA3MjM2IDQwLjI0NTg4OTMsNy43ODAzMjIzOCA0MC4yNjI0NzUsOC4wNjY1NzIzOSBMNDMuMTczNTEyOCw2LjgwNzI2MTI3IEw0My4xNzM1MTI4LDYuODA3MjYxMjcgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzcuODc3MTM5OSwxMC4wNTg0Mjg3IEMzNy44NzcxMzk5LDEwLjY3ODE2NDcgMzcuOTg4MDI3NiwxMC43NzQ1MjYxIDM4LjUxMzU1OTIsMTAuODIyNzA2OCBDMzguNzg3NDYxMiwxMC44NTQ4MjczIDM5LjA2MDQxNTQsMTAuODY5NDcwNCAzOS4zMzEwMDAyLDEwLjkwMTExODUgTDM4LjczOTU5OTQsMTEuMjUyMDgxOCBMMzUuOTIxNDQxOSwxMS4yNTIwODE4IEMzNi4yOTEwNjc0LDEwLjc3NDA1MzcgMzYuMzU0NTY3MiwxMC43MjY4MTc4IDM2LjM1NDU2NzIsMTAuNDA3OTc0OSBMMzYuMzU0NTY3MiwxMC4wNTIyODggTDM2LjM0ODQwNjgsMC41NzUzMzQxODcgTDM1LjEwNDAwMDksMC41NzUzMzQxODcgTDM2LjMwMTQ5MjgsMCBMMzguNTg4NDMyMSwwIEMzOC4wOTI3NTQ4LDAuMjg1Nzc3NjU0IDM3Ljk0NDkwNDYsMC40NjA1NTA3NjUgMzcuODgwOTMxLDEuMDE3OTM1MjggTDM3Ljg3NzEzOTksMTAuMDU4NDI4NyBMMzcuODc3MTM5OSwxMC4wNTg0Mjg3IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMzLjU5ODgyOTksNS4wNTgxMTMwOCBDMzMuOTY1NjEyMSw1LjM1OTAwNjI1IDM0LjczMjM0ODEsNS45OTcxNjQyOSAzNC43MzIzNDgxLDcuMjA4NzY3MDcgQzM0LjczMjM0ODEsOC4zODkxOTQxMSAzNC4wNjQ2NTI4LDguOTQ1NjMzOSAzMy4zOTEyNzA5LDkuNDcyMzE1MDMgQzMzLjE4NDY1OTcsOS42Nzk2ODA5NyAzMi45NDM0NTU0LDkuOTA0NTI0MjEgMzIuOTQzNDU1NCwxMC4yNTIxODEgQzMyLjk0MzQ1NTQsMTAuNjA0NTYxNCAzMy4xODUxMzM2LDEwLjc5NTg2NzEgMzMuMzU5MDQ3MiwxMC45Mzg1MTk3IEwzMy45MzY3MDU1LDExLjM4MzAxMDMgQzM0LjYzODk5MzksMTEuOTczOTMyMyAzNS4yNzkyMDQzLDEyLjUxNTcyOSAzNS4yNzkyMDQzLDEzLjYxNjMyNzIgQzM1LjI3OTIwNDMsMTUuMTE2MDY5NCAzMy44MjM0NDg0LDE2LjYyNzYyMDcgMzEuMDcyNTgxNywxNi42Mjc2MjA3IEMyOC43NTUzMTQxLDE2LjYyNzYyMDcgMjcuNjM1MDY0NSwxNS41Mjc5NjcxIDI3LjYzNTA2NDUsMTQuMzQ4NDg0OCBDMjcuNjM1MDY0NSwxMy43NzQwOTU0IDI3LjkyMTI4NzQsMTIuOTYxMTY0MiAyOC44Njc2MjM0LDEyLjQwNDcyNDQgQzI5Ljg1ODk3OCwxMS44MDA1NzYzIDMxLjIwMjQyNDUsMTEuNzE5ODAyOCAzMS45MjEyOTg3LDExLjY3MjU2NjggQzMxLjY5NjY4MDIsMTEuMzgzNDgyNiAzMS40NDAzMTE3LDExLjA4MDcgMzEuNDQwMzExNywxMC41ODY2MTE3IEMzMS40NDAzMTE3LDEwLjMxNjQyMTkgMzEuNTIxODE4OSwxMC4xNTUzNDcyIDMxLjYwMDQ4MjgsOS45NjU0NTg2MiBDMzEuNDI1NjIxNSw5Ljk4MTk5MTIxIDMxLjI0OTMzODUsOS45OTg5OTYxNyAzMS4wODkxNjc1LDkuOTk4OTk2MTcgQzI5LjM5MzE1NTEsOS45OTg5OTYxNyAyOC40MzQwMjQzLDguNzM3Nzk1NjEgMjguNDM0MDI0Myw3LjQ5NDU0NDcyIEMyOC40MzQwMjQzLDYuNzYxNDQyMzggMjguNzY5NTMwNSw1Ljk0ODUxMTIzIDI5LjQ1ODU1MDQsNS4zNTg1MzM4OSBDMzAuMzcwMjkzMyw0LjYxMDMxNjAzIDMxLjQ1NzM3MTMsNC40ODEzNjE4MiAzMi4zMjEyNTI1LDQuNDgxMzYxODIgTDM1LjYxNjYwNiw0LjQ4MTM2MTgyIEwzNC41OTIwNzk5LDUuMDU4MTEzMDggTDMzLjU5ODgyOTksNS4wNTgxMTMwOCBMMzMuNTk4ODI5OSw1LjA1ODExMzA4IFogTTMyLjQ2NTMxMTYsMTIuMTM0NTM0NiBDMzIuMzM0NTIxMSwxMi4xMTc1Mjk3IDMyLjI1NTg1NzIsMTIuMTE3NTI5NyAzMi4wOTc1ODE3LDEyLjExNzUyOTcgQzMxLjk1MjU3NDcsMTIuMTE3NTI5NyAzMS4wODg2OTM2LDEyLjE0ODcwNTQgMzAuNDE5NTc2NywxMi4zNzI2MDQgQzMwLjA2NTU4OTIsMTIuNTAxNTU4MiAyOS4wNDI0ODQ3LDEyLjg4Mjc1MjUgMjkuMDQyNDg0NywxNC4wMTU0NzEyIEMyOS4wNDI0ODQ3LDE1LjE0NTM1NTcgMzAuMTQ3MDk2MywxNS45NTk3MDQgMzEuODU2Mzc3MywxNS45NTk3MDQgQzMzLjM5MTI3MDksMTUuOTU5NzA0IDM0LjIwNjgxNjQsMTUuMjI2MTI5MyAzNC4yMDY4MTY0LDE0LjIzODQyNSBDMzQuMjA2MzQyNSwxMy40MjU0OTM5IDMzLjY3ODkxNTQsMTIuOTk2NTkxMiAzMi40NjUzMTE2LDEyLjEzNDUzNDYgTDMyLjQ2NTMxMTYsMTIuMTM0NTM0NiBaIE0zMi45MjU0NDgsOS4xMDU3NjM4NiBDMzMuMjk1MDczNSw4LjczODI2Nzk3IDMzLjMyNzI5NzMsOC4yMzAwMDg4NyAzMy4zMjcyOTczLDcuOTQwOTI0NjkgQzMzLjMyNzI5NzMsNi43OTQ1MDc1NiAzMi42NDE1OTQ2LDUuMDA4OTg3NjcgMzEuMzEyMzY0NCw1LjAwODk4NzY3IEMzMC44OTc3MjA0LDUuMDA4OTg3NjcgMzAuNDQ4NDgzMyw1LjIxNjgyNTk2IDMwLjE5MzUzNjQsNS41MzcwODU4OCBDMjkuOTIzNDI1NSw1Ljg2OTE1NDc5IDI5Ljg0MjM5MjIsNi4yOTk5NDY4OSAyOS44NDIzOTIyLDYuNzE0MjA2NCBDMjkuODQyMzkyMiw3Ljc4MTczOTQ2IDMwLjQ2NjQ5MDcsOS41NTIxNDM4MyAzMS44NDA3MzkzLDkuNTUyMTQzODMgQzMyLjI0MTE2Nyw5LjU1MjE0MzgzIDMyLjY3MjM5NjcsOS4zNTgwMDM5NyAzMi45MjU0NDgsOS4xMDU3NjM4NiBMMzIuOTI1NDQ4LDkuMTA1NzYzODYgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjMuMzIxMTUzLDEyLjExNDIyMzIgQzIwLjc3OTI2NjgsMTIuMTE0MjIzMiAxOS40MTkyMzQ1LDEwLjE0MDcwNDEgMTkuNDE5MjM0NSw4LjM1NDcxMTg0IEMxOS40MTkyMzQ1LDYuMjY3MzU0MDcgMjEuMTI4OTg5NCw0LjQ4MTM2MTgyIDIzLjU2MDkzNTcsNC40ODEzNjE4MiBDMjUuOTExODQ4Nyw0LjQ4MTM2MTgyIDI3LjM4NDE5MDIsNi4zMTYwMDcxMiAyNy4zODQxOTAyLDguMjQyMjkwMjIgQzI3LjM4NDE5MDIsMTAuMTIzMjI2OCAyNS45Mjg5MDgzLDEyLjExNDIyMzIgMjMuMzIxMTUzLDEyLjExNDIyMzIgTDIzLjMyMTE1MywxMi4xMTQyMjMyIFogTTI1LjMyMDkyMTcsMTAuODI0NjgxIEMyNS43MDc2MDY5LDEwLjMxNDUzMjUgMjUuODAxNDM0OSw5LjY3Nzc5MTUzIDI1LjgwMTQzNDksOS4wNTcxMTA4MSBDMjUuODAxNDM0OSw3LjY1MzI1NzYgMjUuMTMwNDIyNCw0Ljk3NTkyMjQ5IDIzLjE0NzIzOTQsNC45NzU5MjI0OSBDMjIuNjE5ODEyMyw0Ljk3NTkyMjQ5IDIyLjA4ODU5NDEsNS4xODEzOTg5OCAyMS43MDU3LDUuNTE3MjQ2NzcgQzIxLjA4MTEyNzcsNi4wNzUxMDM2NSAyMC45Njk3NjYxLDYuNzc1NjEzMTcgMjAuOTY5NzY2MSw3LjQ2MzM2ODk4IEMyMC45Njk3NjYxLDkuMDM4MjE2NDIgMjEuNzUwMjQ0NiwxMS42MzU3MjI3IDIzLjY4ODQwOTEsMTEuNjM1NzIyNyBDMjQuMzE0NDAzMSwxMS42MzU3MjI3IDI0Ljk1MjcxNzksMTEuMzMzODg0OCAyNS4zMjA5MjE3LDEwLjgyNDY4MSBMMjUuMzIwOTIxNywxMC44MjQ2ODEgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUuMTAzOTAxMywxMi4xMTQyMjMyIEMxMi41NjE1NDEzLDEyLjExNDIyMzIgMTEuMjAzNDA0NSwxMC4xNDA3MDQxIDExLjIwMzQwNDUsOC4zNTQ3MTE4NCBDMTEuMjAzNDA0NSw2LjI2NzM1NDA3IDEyLjkxMzYzMzMsNC40ODEzNjE4MiAxNS4zNDQ2MzE4LDQuNDgxMzYxODIgQzE3LjY5NDEyMzEsNC40ODEzNjE4MiAxOS4xNjUwNDMxLDYuMzE2MDA3MTIgMTkuMTY1MDQzMSw4LjI0MjI5MDIyIEMxOS4xNjU1MTcsMTAuMTIzMjI2OCAxNy43MTIxMzA1LDEyLjExNDIyMzIgMTUuMTAzOTAxMywxMi4xMTQyMjMyIEwxNS4xMDM5MDEzLDEyLjExNDIyMzIgWiBNMTcuMTA0MTQ0LDEwLjgyNDY4MSBDMTcuNDg3OTg1OCwxMC4zMTQ1MzI1IDE3LjU4MzcwOTQsOS42Nzc3OTE1MyAxNy41ODM3MDk0LDkuMDU3MTEwODEgQzE3LjU4MzcwOTQsNy42NTMyNTc2IDE2LjkxMDgwMTQsNC45NzU5MjI0OSAxNC45Mjk1MTM5LDQuOTc1OTIyNDkgQzE0LjQwMDE5MTMsNC45NzU5MjI0OSAxMy44NzQ2NTk2LDUuMTgxMzk4OTggMTMuNDkwODE3Nyw1LjUxNzI0Njc3IEMxMi44NjUyOTc3LDYuMDc1MTAzNjUgMTIuNzU0NDEsNi43NzU2MTMxNyAxMi43NTQ0MSw3LjQ2MzM2ODk4IEMxMi43NTQ0MSw5LjAzODIxNjQyIDEzLjUzODIwNTYsMTEuNjM1NzIyNyAxNS40NzMwNTMsMTEuNjM1NzIyNyBDMTYuMDk3NjI1MywxMS42MzU3MjI3IDE2LjczNDk5MjMsMTEuMzMzODg0OCAxNy4xMDQxNDQsMTAuODI0NjgxIEwxNy4xMDQxNDQsMTAuODI0NjgxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLjMyOTEzNzMsMTAuOTk4MDQ1MSBMOC4xODUzMDkzNSwxMS40ODY5Mzc1IEM3LjMxNjY4OTQyLDExLjYyMzQ0OTUgNi41MzY2ODQ4NCwxMS43NDM5MDEyIDUuNzEwNzE0LDExLjc0MzkwMTIgQzEuNTc1MTczMjksMTEuNzQzOTAxMiAwLDguNzA5NDYyMSAwLDYuMzM1MzgxOTUgQzAsMy40MzUwOTMwMyAyLjIzMjQ0MzI2LDAuNzQ2ODkzNjM2IDYuMDU1MjIzOTMsMC43NDY4OTM2MzYgQzYuODY0MTM1MTIsMC43NDY4OTM2MzYgNy42NDI3MTgwNywwLjg2NTQ1NTkzNiA4LjM1MTY0MDgzLDEuMDU3NzA2MzYgQzkuNDc1MjA3NTgsMS4zNzI3NzAzMiAxMC4wMDAyNjUzLDEuNzYwMTA1MzIgMTAuMzI5MTM3MywxLjk4Nzc4MjcyIEw5LjA4Mzc4MzY1LDMuMTY2NzkyNjggTDguNTU4NzI1ODgsMy4yODM5Mzc5IEw4LjkzMzA5MDE3LDIuNjg4NzY0NjEgQzguNDI2MDM5ODEsMi4xOTUxNDg2NiA3LjQ5MzkyMDExLDEuMjgzOTY2NjggNS43MjQ5MzAzNywxLjI4Mzk2NjY4IEMzLjM1OTgwMTA0LDEuMjgzOTY2NjggMS41NzUxNzMyOSwzLjA3NjA5OTYxIDEuNTc1MTczMjksNS42OTI1MDAzMiBDMS41NzUxNzMyOSw4LjUwMjU2ODUyIDMuNjEyODUyMzQsMTEuMTQ1ODkzNyA2Ljg3OTc3MzEyLDExLjE0NTg5MzcgQzcuODM5ODUxNjcsMTEuMTQ1ODkzNyA4LjMzNDEwNzMxLDEwLjk1MzY0MzMgOC43ODI4NzA1OCwxMC43NzQxNDY2IEw4Ljc4Mjg3MDU4LDguMzY1MTExODMgTDYuNTE5NjI1Miw4LjQ4NjUwODI5IEw3LjcxOTQ4NjQ0LDcuODQ0MDk5MDIgTDEwLjg5NTg5NjQsNy44NDQwOTkwMiBMMTAuNTA3Nzg5Niw4LjIxNjc5MDg3IEMxMC40MDI1ODg1LDguMzA1NTk0NSAxMC4zODg4NDYsOC4zMzU4MjU1MyAxMC4zNTk0NjU1LDguNDU0ODYwMTkgQzEwLjM0MzgyNzUsOC41OTA4OTk4IDEwLjMyOTYxMTEsOS4wMjM1ODEzNCAxMC4zMjk2MTExLDkuMTc1NjgxMTggTDEwLjMyOTYxMTEsMTAuOTk4MDQ1MSBMMTAuMzI5MTM3MywxMC45OTgwNDUxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTUwLjEwMzg5MTIsMTAuOTM5NDY0NCBMNTAuMTAzODkxMiwxNC45OTk4Njg5IEw0OS4yOTQ5OCwxNC45OTk4Njg5IEw0OS4yOTQ5OCw0LjY2ODQxNjI4IEw1MC4xMDM4OTEyLDQuNjY4NDE2MjggTDUwLjEwMzg5MTIsNS44NDQ1OTIwOCBDNTAuNjMwMzcwNiw1LjA4NDU2NTIzIDUxLjU5MzI5MjQsNC40ODEzNjE4MiA1Mi43MTIxMjA0LDQuNDgxMzYxODIgQzU0LjcxNzU3NTcsNC40ODEzNjE4MiA1Ni4wNjkwNzgxLDUuOTk4MTA5MDEgNTYuMDY5MDc4MSw4LjM5OTExMzY2IEM1Ni4wNjkwNzgxLDEwLjc4NDA1ODEgNTQuNzE3NTc1NywxMi4zMzI0NTM0IDUyLjcxMjEyMDQsMTIuMzMyNDUzNCBDNTEuNjU2MzE4MywxMi4zMzI5MjU3IDUwLjcxMDQ1NjEsMTEuNzkwMTg0NCA1MC4xMDM4OTEyLDEwLjkzOTQ2NDQgTDUwLjEwMzg5MTIsMTAuOTM5NDY0NCBaIE01NS4xOTk5ODQzLDguMzk5NTg2MDIgQzU1LjE5OTk4NDMsNi41ODk5NzU3OCA1NC4yNTM2NDgzLDUuMjA5NzQwNTcgNTIuNTc1NjQzMyw1LjIwOTc0MDU3IEM1MS41MzM1ODM3LDUuMjA5NzQwNTcgNTAuNTM3MDE2NSw2LjAyNjQ1MDU5IDUwLjEwMzg5MTIsNi43Mzc4MjQzOSBMNTAuMTAzODkxMiwxMC4wNDQ4MTUxIEM1MC41MzcwMTY1LDEwLjc1ODA3ODMgNTEuNTMzNTgzNywxMS42MDQwNzQ2IDUyLjU3NTY0MzMsMTEuNjA0MDc0NiBDNTQuMjUzNjQ4MywxMS42MDQwNzQ2IDU1LjE5OTk4NDMsMTAuMjEyMDMwNCA1NS4xOTk5ODQzLDguMzk5NTg2MDIgTDU1LjE5OTk4NDMsOC4zOTk1ODYwMiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgcG9pbnRzPSI1Ny41MTA4MSAxMS44MjQ3Njc2IDU3LjUxMDgxIDEuNDkzNzg3MjcgNTguMzE5MjQ3MyAxLjQ5Mzc4NzI3IDU4LjMxOTI0NzMgMTEuODI0NzY3NiA1Ny41MTA4MSAxMS44MjQ3Njc2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNjUuMjExNTIzLDEyLjEyNjUwNDUgQzY1LjE1NzUwMDgsMTEuODY3MTc5IDY1LjExNjc0NzIsMTEuNjM5MDI5MiA2NS4wODY4OTI5LDExLjQ0NzcyMzUgQzY1LjA2MTc3NzMsMTEuMjU3MzYyNiA2NS4wNDgwMzQ4LDExLjA2Mjc1MDMgNjUuMDQ4MDM0OCwxMC44NjQ4MzE2IEM2NC43NzAzNDE4LDExLjI3MDU4ODYgNjQuMzc3NDk2MiwxMS42MDgzMjU5IDYzLjg3NTY1ODUsMTEuODc0NzM2OCBDNjMuMzczMzQ2OSwxMi4xNDIwOTI0IDYyLjg5NjYyNDgsMTIuMjczODgwOCA2Mi4yNDE3MjQzLDEyLjI3Mzg4MDggQzYxLjQ1MzY2MzcsMTIuMjczODgwOCA2MC44NDIzNiwxMi4wODA2ODU2IDYwLjQwNTQ0MzcsMTEuNjg4NjI3IEM1OS45NzA0MjI5LDExLjI5NzA0MDggNTkuNzUxNDkwOSwxMC43NjY1ODA4IDU5Ljc1MTQ5MDksMTAuMDk1MzU3NiBDNTkuNzUxNDkwOSw5LjQyNTA3OTA2IDYwLjA2ODUxNTksOC44ODA5MjA2MiA2MC43MDA2NzAyLDguNDY0NzcxNjcgQzYxLjMzMjgyNDYsOC4wNDY3MzMyOCA2Mi4xNTAyNjU2LDcuODM5MzY3MzUgNjMuMTYxMDQ5Miw3LjgzOTM2NzM1IEw2NS4wNDc1NjA5LDcuODM5MzY3MzUgTDY1LjA0NzU2MDksNi45MDk3NjMzNCBDNjUuMDQ3NTYwOSw2LjM3NDU3OTczIDY0Ljg2NDE2OTgsNS45NTQxNzk1NSA2NC40OTkyODMxLDUuNjQ4NTYyNzggQzY0LjEzMjUwMDksNS4zNDM0MTgzOCA2My42MTc4Njg0LDUuMTg4NDg0MzggNjIuOTUwMTczMSw1LjE4ODQ4NDM4IEM2Mi4zNDAyOTExLDUuMTg4NDg0MzggNjEuODQ1NTYxNSw1LjMyOTcxOTk1IDYxLjQ2ODgyNzksNS42MDQ2MzMzMyBDNjEuMDk1NDExMyw1Ljg4NTIxNTAyIDYwLjkwNzc1NTMsNi4yMzI4NzE4MSA2MC45MDc3NTUzLDYuNjUxODU0OTEgTDYwLjA3OTg4OSw2LjY1MTg1NDkxIEw2MC4wNjI4MjkzLDYuNjExNzA0MzMgQzYwLjAzMjUwMTEsNi4wNDcyMzQ0MiA2MC4yOTIxODY3LDUuNTUxMjU2NjcgNjAuODQzMzA3OCw1LjEyMzc3MTA5IEM2MS4zOTE1ODU2LDQuNjk2Mjg1NTEgNjIuMTEwOTMzNyw0LjQ4MTM2MTgyIDYyLjk5NTY2NTUsNC40ODEzNjE4MiBDNjMuODc3MDgwMiw0LjQ4MTM2MTgyIDY0LjU5MDc0MTcsNC42OTI5Nzg5OSA2NS4xMjkwNjgxLDUuMTE1MjY4NjIgQzY1LjY2NjQ0NjcsNS41MzMzMDcgNjUuOTM2MDgzOCw2LjEzNzQ1NTEzIDY1LjkzNjA4MzgsNi45MjcyNDA2NSBMNjUuOTM2MDgzOCwxMC42MTY4NDI3IEM2NS45MzYwODM4LDEwLjg4MTgzNjYgNjUuOTQ4NDA0NiwxMS4xMzc4NTU1IDY1Ljk4MjA1LDExLjM4NzI2MTUgQzY2LjAxNjE2OTMsMTEuNjM3MTM5OCA2Ni4wNzA2NjU0LDExLjg4NjU0NTggNjYuMTQzMTY4OCwxMi4xMjc0NDkyIEw2NS4yMTE1MjMsMTIuMTI3NDQ5MiBMNjUuMjExNTIzLDEyLjEyNjUwNDUgWiBNNjIuMzQxMjM4OCwxMS41Mzg4ODkgQzYzLjAyODM2MzEsMTEuNTM4ODg5IDYzLjUyMjE0NDksMTEuMzg1ODQ0NCA2NC4wMjcyOTk4LDExLjA4MzA2MTggQzY0LjUyODY2MzYsMTAuNzgxNjk2MyA2NC44NjkzODI1LDEwLjM4OTE2NTMgNjUuMDQ4NTA4Nyw5LjkxMzk3MTQxIEw2NS4wNDg1MDg3LDguNDc3OTk3NzQgTDYzLjE1Mjk5MzMsOC40Nzc5OTc3NCBDNjIuNDI4OTA2NCw4LjQ3Nzk5Nzc0IDYxLjgyOTQ0OTcsOC42Mzc2NTUzNCA2MS4zNTc5NDAyLDguOTYwMjc3MDYgQzYwLjg4NTQ4Myw5LjI4MTQ4MTY5IDYwLjY0NTcwMDMsOS42NzAyMzM3NyA2MC42NDU3MDAzLDEwLjEyMjI4MjEgQzYwLjY0NTcwMDMsMTAuNTQ4MzUwNiA2MC43OTczNDE1LDEwLjg4OTg2NjcgNjEuMDk5MjAyNCwxMS4xNDgyNDc1IEM2MS40MDEwNjMyLDExLjQwOTQ2MjQgNjEuODE0Mjg1NSwxMS41Mzg4ODkgNjIuMzQxMjM4OCwxMS41Mzg4ODkgTDYyLjM0MTIzODgsMTEuNTM4ODg5IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY4LjI4NjI0MTQsMTQuMTQ0NDI1NCBDNjguNDU4NzMzMywxNC4yMjA5NDc3IDY4Ljc1Mzk1OTgsMTQuMjY4NjU2IDY4Ljk0MTYxNTgsMTQuMjY4NjU2IEM2OS40MzYzNDUzLDE0LjI2ODY1NiA2OS43ODA4NTUzLDE0LjA2Njk1ODQgNzAuMDkwMjk4MiwxMy4zNTQxNjc1IEw3MC42ODAyNzczLDEyLjAyMjExMyBMNjcuNDkzNDQyMSw0LjQ4MTM2MTgyIEw2OC4zOTU3MDc0LDQuNDgxMzYxODIgTDcxLjEyOTA0MDYsMTEuMDE1OTg2NyBMNzMuODM1ODM2Niw0LjQ4MTM2MTgyIEw3NC43NTA4OTY2LDQuNDgxMzYxODIgTDcwLjg2NDYxNjIsMTMuNjA0MDQ1OCBDNzAuNDYxMzQ1MywxNC41NDQwNDE4IDY5LjgyNjgyMTUsMTQuOTk2MDkwMSA2OC45NTUzNTgzLDE0Ljk5NjA5MDEgQzY4LjY5Mzc3NzIsMTQuOTk2MDkwMSA2OC4zNDkyNjczLDE0Ljk0OTMyNjQgNjguMTQ2OTIxLDE0Ljg4NzkxOTcgTDY4LjI4NjI0MTQsMTQuMTQ0NDI1NCBMNjguMjg2MjQxNCwxNC4xNDQ0MjU0IFoiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTAuNDgxNTU1OTExLDE2LjQwNTU3NDYgQzAuMTg5ODYyNTI5LDE2LjMyNzAwNDMgMCwxNi4wMzc0MDQ2IDAsMTUuNTg5MjYyMiBMMCwwLjc5Njc0MTI3MyBDMCwwLjM4MTY5MzEzNSAwLjE2MDc1OTM4NiwwLjEwMTc3MzQwNyAwLjQxNTU5NDA3NSwxLjI3ODk3NjkyZS0xMyBMMC40MTU1OTQwNzUsMS4yNzg5NzY5MmUtMTMgTDcuNjg0OTQzMzUsOC4yNDM2NjE3NCBMMC40ODE1NTU5MTEsMTYuNDA1NTc0NiBMMC40ODE1NTU5MTEsMTYuNDA1NTc0NiBaIE0xLjQ4MjIzNDA4LDE2LjA5MTU3NjggTDEwLjIzMjIzNjUsMTEuMTMyMzY5MSBMOC4xMDEwNDkwMSw4LjcxNTUzODEzIEwxLjQ4MjIzNDA4LDE2LjA5MTU3NjggTDEuNDgyMjM0MDgsMTYuMDkxNTc2OCBaIE0xMC4yOTI0ODk4LDUuMjg5MTM5NzUgTDEuNjY0NDI4MDksMC4zOTc5MDc0MzcgTDguMTEzNjY1MzMsNy43NTc4OTE0OCBMMTAuMjkyNDg5OCw1LjI4OTEzOTc1IEwxMC4yOTI0ODk4LDUuMjg5MTM5NzUgWiBNMTAuODc3ODk2Nyw1LjYyMTAwNTkgTDE0LjI1Nzg5NjIsNy41MzcxMjEzOSBDMTQuODk3ODU4Nyw3Ljg5OTkxNDkxIDE0LjkwMzcxMTEsOC40ODQ3MzQxIDE0LjI1Nzg5NjIsOC44NTA3NjAzMSBMMTAuNzkyMzg2MSwxMC44MTQ4OTUxIEw4LjUzMTk5MTk3LDguMjM1MjkzMjcgTDEwLjg3Nzg5NjcsNS42MjEwMDU5IEwxMC44Nzc4OTY3LDUuNjIxMDA1OSBaIiBpZD0iZ29vZ2xlLXBsYXkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./public/images/svg/folder.svg":
/*!**************************************!*\
  !*** ./public/images/svg/folder.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzFweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMzEgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYxLjIgKDg5NjUzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5mb2xkZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iMDIuLUhlYWRlci0tLUZvb3Rlci0tLUJhbm5lciIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICA8ZyBpZD0iIy1Gb290ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05Ny4wMDAwMDAsIC0yMDU4LjAwMDAwMCkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIxLjM3NyI+CiAgICAgICAgICAgIDxnIGlkPSIjLUZPT1RFUi1NYi0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgOTU1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IiMtQm90dG9tLWJhciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDEwODUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE0LUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc1LjAwMDAwMCwgNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5LjAwMDAwMCwgNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSIwMi1zYW5waGFtIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMy4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImZvbGRlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4zNzcwMDAsIDguMjYyMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjAgMCA5LjYzOSAwIDExLjI0NTUgMy4xNDMxNTIxNyAyOC45MTcgMy4xNDMxNTIxNyAyOC45MTcgMjIuMDAyMDY1MiAwIDIyLjAwMjA2NTIiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./public/images/svg/giadinh.svg":
/*!***************************************!*\
  !*** ./public/images/svg/giadinh.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIyN3B4IiB2aWV3Qm94PSIwIDAgMzIgMjciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYxLjIgKDg5NjUzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT4wNC1naWFkaW5oPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPHJlY3QgaWQ9InBhdGgtMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjMxLjY3MSIgaGVpZ2h0PSIzMS42NzEiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSIwMi4tSGVhZGVyLS0tRm9vdGVyLS0tQmFubmVyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iIy1Gb290ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNDcuMDAwMDAwLCAtMjA1NC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IiMtRk9PVEVSLU1iLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA5NTUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iIy1Cb3R0b20tYmFyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTA4NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTQtQ29weS0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjUuMDAwMDAwLCA2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQuMDAwMDAwLCA1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IjA0LWdpYWRpbmgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZSI+PC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xNiIgbWFzaz0idXJsKCNtYXNrLTIpIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjM3NzAwMCwgNC4xMzEwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJwZW9wbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA4LjA3NDIyNykiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDE2LjE0ODQ1NDUgQzAsMTMuMTIwNjE5MyA0LjAzNzExMzY0LDEzLjEyMDYxOTMgNi4wNTU2NzA0NSwxMS4xMDIwNjI1IEM3LjA2NDk0ODg2LDEwLjA5Mjc4NDEgNC4wMzcxMTM2NCwxMC4wOTI3ODQxIDQuMDM3MTEzNjQsNS4wNDYzOTIwNSBDNC4wMzcxMTM2NCwxLjY4MjQ2NzExIDUuMzgyNDgxNzYsMCA4LjA3NDIyNzI3LDAgQzEwLjc2NTk3MjgsMCAxMi4xMTEzNDA5LDEuNjgyNDY3MTEgMTIuMTExMzQwOSw1LjA0NjM5MjA1IEMxMi4xMTEzNDA5LDEwLjA5Mjc4NDEgOS4wODM1MDU2OCwxMC4wOTI3ODQxIDEwLjA5Mjc4NDEsMTEuMTAyMDYyNSBDMTIuMTExMzQwOSwxMy4xMjA2MTkzIDE2LjE0ODQ1NDUsMTMuMTIwNjE5MyAxNi4xNDg0NTQ1LDE2LjE0ODQ1NDUgTTE1Ljg2ODI5NDIsMTMuMDg5MjIxOSBDMTYuNTMwNzA4OCwxMi44NDkxNDUgMTcuMDczNjA3OCwxMi42MjcxNDg3IDE3LjQ5Njk5MTEsMTIuNDIzMjMyOCBDMTguMjM4MDMyMywxMi4wNjYzMjIxIDE4Ljk1Mjk4MDEsMTEuNjYxNzk4MyAxOS41MTI3MTU5LDExLjEwMjA2MjUgQzIwLjUyMTk5NDMsMTAuMDkyNzg0MSAxNy40OTQxNTkxLDEwLjA5Mjc4NDEgMTcuNDk0MTU5MSw1LjA0NjM5MjA1IEMxNy40OTQxNTkxLDEuNjgyNDY3MTEgMTguODM5NTI3MiwwIDIxLjUzMTI3MjcsMCBDMjQuMjIzMDE4MiwwIDI1LjU2ODM4NjQsMS42ODI0NjcxMSAyNS41NjgzODY0LDUuMDQ2MzkyMDUgQzI1LjU2ODM4NjQsMTAuMDkyNzg0MSAyMi41NDA1NTExLDEwLjA5Mjc4NDEgMjMuNTQ5ODI5NSwxMS4xMDIwNjI1IEMyNS41NjgzODY0LDEzLjEyMDYxOTMgMjkuNjA1NSwxMy4xMjA2MTkzIDI5LjYwNTUsMTYuMTQ4NDU0NSIgaWQ9IlNoYXBlIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMS4zNzciPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQuODAyNzUsMTMuNDU3MDQ1NSBDMTUuMjk1NjQ2NywxMy4yOTA2NDUzIDE1LjY1MDgyODEsMTMuMTY4MDM3NCAxNS44NjgyOTQyLDEzLjA4OTIyMTkiIGlkPSJQYXRoIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMS4zNzciPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJob21lLWFsdDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDE4NTU3LCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iU2hhcGUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIxLjE3MDQ1IiBwb2ludHM9IjI1LjE2NDY3NSA3LjQzNTAxNzYxIDEyLjU4MjMzNzUgMCAwIDcuNDM1MDE3NjEiPjwvcG9seWxpbmU+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./public/images/svg/home.svg":
/*!************************************!*\
  !*** ./public/images/svg/home.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyOXB4IiB2aWV3Qm94PSIwIDAgMjYgMjkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYxLjIgKDg5NjUzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5ob21lLWFsdDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSIwMi4tSGVhZGVyLS0tRm9vdGVyLS0tQmFubmVyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxnIGlkPSIjLUZvb3RlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1LjAwMDAwMCwgLTIwNTMuMDAwMDAwKSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjEuMzc3Ij4KICAgICAgICAgICAgPGcgaWQ9IiMtRk9PVEVSLU1iLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA5NTUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iIy1Cb3R0b20tYmFyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTA4NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMDAwMDAwLCA1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IjAxLXRyYW5nY2h1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMy4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImhvbWUtYWx0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjEzMTAwMCwgMy40NDI1MDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMCAxMC45NTM2NTI1IDAgMjYuNzc1IDI0LjA5NzUgMjYuNzc1IDI0LjA5NzUgMTAuOTUzNjUyNSAxMi4wNDg3NSAwIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjguMDMyNSIgeT0iMTYuMDY1IiB3aWR0aD0iOC4wMzI1IiBoZWlnaHQ9IjEwLjcxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./public/images/svg/pin.svg":
/*!***********************************!*\
  !*** ./public/images/svg/pin.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIGNsYXNzPSIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTI1NiwwQzE1Ni43NDgsMCw3Niw4MC43NDgsNzYsMTgwYzAsMzMuNTM0LDkuMjg5LDY2LjI2LDI2Ljg2OSw5NC42NTJsMTQyLjg4NSwyMzAuMjU3ICAgIGMyLjczNyw0LjQxMSw3LjU1OSw3LjA5MSwxMi43NDUsNy4wOTFjMC4wNCwwLDAuMDc5LDAsMC4xMTksMGM1LjIzMS0wLjA0MSwxMC4wNjMtMi44MDQsMTIuNzUtNy4yOTJMNDEwLjYxMSwyNzIuMjIgICAgQzQyNy4yMjEsMjQ0LjQyOCw0MzYsMjEyLjUzOSw0MzYsMTgwQzQzNiw4MC43NDgsMzU1LjI1MiwwLDI1NiwweiBNMzg0Ljg2NiwyNTYuODE4TDI1OC4yNzIsNDY4LjE4NmwtMTI5LjkwNS0yMDkuMzQgICAgQzExMy43MzQsMjM1LjIxNCwxMDUuOCwyMDcuOTUsMTA1LjgsMTgwYzAtODIuNzEsNjcuNDktMTUwLjIsMTUwLjItMTUwLjJTNDA2LjEsOTcuMjksNDA2LjEsMTgwICAgIEM0MDYuMSwyMDcuMTIxLDM5OC42ODksMjMzLjY4OCwzODQuODY2LDI1Ni44MTh6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBmaWxsPSIjMzMzMzMzIi8+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yNTYsOTBjLTQ5LjYyNiwwLTkwLDQwLjM3NC05MCw5MGMwLDQ5LjMwOSwzOS43MTcsOTAsOTAsOTBjNTAuOTAzLDAsOTAtNDEuMjMzLDkwLTkwQzM0NiwxMzAuMzc0LDMwNS42MjYsOTAsMjU2LDkweiAgICAgTTI1NiwyNDAuMmMtMzMuMjU3LDAtNjAuMi0yNy4wMzMtNjAuMi02MC4yYzAtMzMuMDg0LDI3LjExNi02MC4yLDYwLjItNjAuMnM2MC4xLDI3LjExNiw2MC4xLDYwLjIgICAgQzMxNi4xLDIxMi42ODMsMjg5Ljc4NCwyNDAuMiwyNTYsMjQwLjJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBmaWxsPSIjMzMzMzMzIi8+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPgo=");

/***/ }),

/***/ "./public/images/svg/tienich.svg":
/*!***************************************!*\
  !*** ./public/images/svg/tienich.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMjYgMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYxLjIgKDg5NjUzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT4wNS10aWVuaWNoPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPHJlY3QgaWQ9InBhdGgtMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjMxLjY3MSIgaGVpZ2h0PSIzMS42NzEiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSIwMi4tSGVhZGVyLS0tRm9vdGVyLS0tQmFubmVyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iIy1Gb290ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMjUuMDAwMDAwLCAtMjA1NS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IiMtRk9PVEVSLU1iLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA5NTUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iIy1Cb3R0b20tYmFyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTA4NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTQtQ29weS00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDAuMDAwMDAwLCA2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuMDAwMDAwLCA1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IjA1LXRpZW5pY2giIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZSI+PC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJncmlkIiBtYXNrPSJ1cmwoI21hc2stMikiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMzc3Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC4xMzEwMDAsIDQuODE5NTAwKSIgaWQ9IlJlY3RhbmdsZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iOS4zNzEyNSIgaGVpZ2h0PSI5LjM3MTI1Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PSIxNC43MjYyNSIgeT0iMCIgd2lkdGg9IjkuMzcxMjUiIGhlaWdodD0iOS4zNzEyNSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0iMCIgeT0iMTQuNzI2MjUiIHdpZHRoPSI5LjM3MTI1IiBoZWlnaHQ9IjkuMzcxMjUiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjE0LjcyNjI1IiB5PSIxNC43MjYyNSIgd2lkdGg9IjkuMzcxMjUiIGhlaWdodD0iOS4zNzEyNSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./services/category.js":
/*!******************************!*\
  !*** ./services/category.js ***!
  \******************************/
/*! exports provided: getCategoryByIdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoryByIdService", function() { return getCategoryByIdService; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");


const getCategoryByIdService = id => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
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



/***/ }),

/***/ "./services/form.js":
/*!**************************!*\
  !*** ./services/form.js ***!
  \**************************/
/*! exports provided: getFormbuilderByIdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormbuilderByIdService", function() { return getFormbuilderByIdService; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");


const getFormbuilderByIdService = id => {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
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

/***/ "./store/actions.js":
/*!**************************!*\
  !*** ./store/actions.js ***!
  \**************************/
/*! exports provided: PageActions, RateActions, LayoutActions, RegulationActions, MenuActions, InvestorsActions, NewsActions, MapActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/actions */ "./store/page/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageActions", function() { return _page_actions__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _rate_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rate/actions */ "./store/rate/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RateActions", function() { return _rate_actions__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _layout_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/actions */ "./store/layout/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutActions", function() { return _layout_actions__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _regulation_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./regulation/actions */ "./store/regulation/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegulationActions", function() { return _regulation_actions__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _menu_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/actions */ "./store/menu/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuActions", function() { return _menu_actions__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _investors_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./investors/actions */ "./store/investors/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvestorsActions", function() { return _investors_actions__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _news_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news/actions */ "./store/news/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsActions", function() { return _news_actions__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _map_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map/actions */ "./store/map/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapActions", function() { return _map_actions__WEBPACK_IMPORTED_MODULE_7__["default"]; });











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

/***/ "./store/map/actions.js":
/*!******************************!*\
  !*** ./store/map/actions.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (Actions);

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

/***/ "./styles/custom.css":
/*!***************************!*\
  !*** ./styles/custom.css ***!
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

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user/mb-frontend/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "google-map-react":
/*!***********************************!*\
  !*** external "google-map-react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-html-parser":
/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-responsive-carousel":
/*!********************************************!*\
  !*** external "react-responsive-carousel" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive-carousel");

/***/ }),

/***/ "react-show-more-text":
/*!***************************************!*\
  !*** external "react-show-more-text" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-show-more-text");

/***/ }),

/***/ "react-sticky":
/*!*******************************!*\
  !*** external "react-sticky" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sticky");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map