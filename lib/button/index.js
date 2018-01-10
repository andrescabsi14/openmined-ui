'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 'medium' : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'teal' : _ref$color,
      status = _ref.status,
      _ref$expanded = _ref.expanded,
      expanded = _ref$expanded === undefined ? false : _ref$expanded,
      _ref$centered = _ref.centered,
      centered = _ref$centered === undefined ? false : _ref$centered,
      className = _ref.className,
      otherProps = _objectWithoutProperties(_ref, ['children', 'size', 'color', 'status', 'expanded', 'centered', 'className']);

  var classes = (0, _classnames2.default)('button', className, size, color, status, {
    expanded: expanded,
    centered: centered
  });
  return React.createElement(
    'button',
    _extends({ className: classes }, otherProps),
    children
  );
};

exports.default = Button;