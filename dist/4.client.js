(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/css-loader/index.js!./src/components/WorkHistory/WorkHistory.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/WorkHistory/WorkHistory.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \".jumbotron{\\r\\n    width:100%;\\r\\n}\\r\\n\\r\\n.wh-div-positioning {\\r\\n    text-align:center;\\r\\n    padding: 10px 0px 0px 0px;\\r\\n}\\r\\n\\r\\n.footer-placeholder {\\r\\n    height:70px;\\r\\n}\\r\\nh1 {\\r\\n    font-size: 32px !important; \\r\\n}\\r\\n\\r\\n.jumbotron .lead {\\r\\n    font-size:16px;\\r\\n}\\r\\n\\r\\n.jumbotron .description {\\r\\n    font-size:14px;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 640px) {\\r\\n    h1 {\\r\\n        font-size: 40px !important; \\r\\n    }\\r\\n    .jumbotron .lead {\\r\\n        font-size:18px;\\r\\n    }\\r\\n    .jumbotron .description {\\r\\n        font-size:16px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 960px) {\\r\\n    h1 {\\r\\n        font-size: 48px !important; \\r\\n    }\\r\\n    .jumbotron .lead {\\r\\n        font-size:20px;\\r\\n    }\\r\\n    .jumbotron .description {\\r\\n        font-size:18px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 1280px) {\\r\\n    h1 {\\r\\n        font-size: 56px !important; \\r\\n    }\\r\\n    .jumbotron .lead {\\r\\n        font-size:22px;\\r\\n    }\\r\\n    .jumbotron .description {\\r\\n        font-size:20px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 1600px) {\\r\\n    h1 {\\r\\n        font-size: 64px !important; \\r\\n    }\\r\\n    .jumbotron .lead {\\r\\n        font-size:24px;\\r\\n    }\\r\\n    .jumbotron .description{\\r\\n        font-size:22px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 1920px) {\\r\\n    h1 {\\r\\n        font-size: 72px !important; \\r\\n    }\\r\\n    .jumbotron .lead {\\r\\n        font-size:26px;\\r\\n    }\\r\\n    .jumbotron .description {\\r\\n        font-size:24px;\\r\\n    }\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/WorkHistory/WorkHistory.css?./node_modules/css-loader");

/***/ }),

/***/ "./src/components/WorkHistory/WorkHistory.css":
/*!****************************************************!*\
  !*** ./src/components/WorkHistory/WorkHistory.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./WorkHistory.css */ \"./node_modules/css-loader/index.js!./src/components/WorkHistory/WorkHistory.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {\"hmr\":true}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/WorkHistory/WorkHistory.css?");

/***/ }),

/***/ "./src/components/WorkHistory/WorkHistory.js":
/*!***************************************************!*\
  !*** ./src/components/WorkHistory/WorkHistory.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.es.js\");\n/* harmony import */ var _WorkHistory_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkHistory.css */ \"./src/components/WorkHistory/WorkHistory.css\");\n/* harmony import */ var _WorkHistory_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_WorkHistory_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar WorkHistory =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(WorkHistory, _Component);\n\n  function WorkHistory() {\n    _classCallCheck(this, WorkHistory);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(WorkHistory).apply(this, arguments));\n  }\n\n  _createClass(WorkHistory, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"wh-div-positioning\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Jumbotron\"], {\n        fluid: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n        fluid: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n        className: \"display-3\"\n      }, \"LG CNS America Inc.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"lead\"\n      }, \"LG.COM Technical Account Manager, 08/16/16 to Current\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", {\n        className: \"my-2\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"description\"\n      }, \"Analyze daily requests from clients on LG.COM, communicate with development team regarding development scope, and monitor website traffics & issues.\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"Coding with Javascript when implementing or modifying API between 3rd party systems.\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Jumbotron\"], {\n        fluid: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n        fluid: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n        className: \"display-3\"\n      }, \"LG CNS America Inc.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"lead\"\n      }, \"eCommerce Analyst, 05/16/16 to 08/16/16\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", {\n        className: \"my-2\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"description\"\n      }, \"Managed product stock levels, submitted purchase orders, handled customer services, and \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"worked on monthly account closings for LG.COM\\u2019s Online Brand Shop and LG Employees\\u2019 Online Shop.\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"After 3 months, transitioned to a Technical Account Manager role within the same team.\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Jumbotron\"], {\n        fluid: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n        fluid: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n        className: \"display-3\"\n      }, \"Fordham University\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"lead\"\n      }, \"News Archive Data Entry, 10/02/2015 to 05/10/16\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", {\n        className: \"my-2\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"description\"\n      }, \"Moved Fordham University\\u2019s old news articles to a new database through WordPress CMS.\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Jumbotron\"], {\n        fluid: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n        fluid: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n        className: \"display-3\"\n      }, \"Mont Fashion Inc.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"lead\"\n      }, \"Accountant, 02/2014 to 10/01/2015\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", {\n        className: \"my-2\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"description\"\n      }, \"Managed invoices by using Microsoft Access, reported sales analysis, handled customer & vendor services, received orders & sent statements.\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"footer-placeholder\"\n      }));\n    }\n  }]);\n\n  return WorkHistory;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkHistory);\n\n//# sourceURL=webpack:///./src/components/WorkHistory/WorkHistory.js?");

/***/ })

}]);