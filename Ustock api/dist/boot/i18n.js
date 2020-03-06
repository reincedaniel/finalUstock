"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.i18n = exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueI18n = _interopRequireDefault(require("vue-i18n"));

var _i18n = _interopRequireDefault(require("src/i18n"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueI18n["default"]);

var i18n = new _vueI18n["default"]({
  locale: 'en-us',
  fallbackLocale: 'en-us',
  messages: _i18n["default"]
});
exports.i18n = i18n;

var _default = function _default(_ref) {
  var app = _ref.app;
  // Set i18n instance on app
  app.i18n = i18n;
};

exports["default"] = _default;