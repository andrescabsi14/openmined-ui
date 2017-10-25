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

var Heading = function Heading(_ref) {
  var _ref$level = _ref.level,
      level = _ref$level === undefined ? 3 : _ref$level,
      className = _ref.className,
      children = _ref.children,
      notCapped = _ref.notCapped,
      otherProps = _objectWithoutProperties(_ref, ["level", "className", "children", "notCapped"]);

  var classes = (0, _classnames2.default)(className, "heading", { "not-capped": notCapped });
  var Tag = "h" + level;
  return React.createElement(
    Tag,
    _extends({ className: classes }, otherProps),
    children
  );
};

exports.default = Heading;