"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Switch = function Switch(_ref) {
  var label = _ref.label,
      className = _ref.className,
      inputClassName = _ref.inputClassName,
      otherProps = _objectWithoutProperties(_ref, ["label", "className", "inputClassName"]);

  var classes = (0, _classnames2.default)(className, "switch-container");
  return React.createElement(
    "div",
    { className: classes },
    label && React.createElement(
      "p",
      { className: "switch-label" },
      label
    ),
    React.createElement(
      "label",
      { className: "switch" },
      React.createElement("input", _extends({ type: "checkbox", className: inputClassName }, otherProps)),
      React.createElement("span", { className: "slider" })
    )
  );
};

exports.default = Switch;