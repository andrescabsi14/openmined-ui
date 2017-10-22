"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ExternalLink = function ExternalLink(props) {
  var to = props.to,
      children = props.children,
      other = _objectWithoutProperties(props, ["to", "children"]);

  return _react2.default.createElement(
    "a",
    _extends({}, other, { href: props.to, target: "_blank", rel: "noopener noreferrer" }),
    props.children
  );
};

exports.default = ExternalLink;