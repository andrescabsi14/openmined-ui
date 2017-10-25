"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BackgroundGradient = function BackgroundGradient(_ref) {
  var animated = _ref.animated,
      className = _ref.className;

  var classes = (0, _classnames2.default)("background-gradient", { animated: animated }, className);
  return _react2.default.createElement("div", { className: classes });
};
exports.default = BackgroundGradient;