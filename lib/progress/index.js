"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Progress = function Progress(_ref) {
  var percent = _ref.percent;
  return _react2.default.createElement(
    "div",
    { className: "progress" },
    _react2.default.createElement(
      "span",
      { className: "marker", style: { width: percent + "%" } },
      percent,
      "%"
    )
  );
};

exports.default = Progress;