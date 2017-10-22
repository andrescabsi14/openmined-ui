'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = exports.Row = exports.Container = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./grid.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var classLoop = function classLoop(obj) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';

  var tempClasses = [];

  if (obj) {
    for (var key in obj) {
      tempClasses.push(key + separator + obj[key]);
    }
  }

  return tempClasses.join(' ');
};

var Container = function Container(props) {
  var full = props.full,
      other = _objectWithoutProperties(props, ['full']);

  var classes = props.hasOwnProperty('className') ? props.className + ' container' : 'container';

  classes += full ? ' full' : '';

  return _react2.default.createElement(
    'div',
    _extends({}, other, { className: classes }),
    props.children
  );
};

exports.Container = Container;
var Row = function Row(props) {
  var isReversed = props.isReversed,
      justify = props.justify,
      align = props.align,
      other = _objectWithoutProperties(props, ['isReversed', 'justify', 'align']);

  var classes = [isReversed ? 'row reverse' : 'row', classLoop(justify), classLoop(align)].join(' ').replace(/\s+/g, ' ').trim();

  if (props.hasOwnProperty('className')) {
    classes = props.className + ' ' + classes;
  }

  return _react2.default.createElement(
    'div',
    _extends({}, other, { className: classes }),
    props.children
  );
};

exports.Row = Row;
var Column = function Column(props) {
  var sizes = props.sizes,
      offsets = props.offsets,
      orders = props.orders,
      other = _objectWithoutProperties(props, ['sizes', 'offsets', 'orders']);

  var classes = ['column', classLoop(sizes), classLoop(offsets, '-offset-'), classLoop(orders)].join(' ').replace(/\s+/g, ' ').trim();

  if (props.hasOwnProperty('className')) {
    classes = props.className + ' ' + classes;
  }

  return _react2.default.createElement(
    'div',
    _extends({}, other, { className: classes }),
    props.children
  );
};
exports.Column = Column;