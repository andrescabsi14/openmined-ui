'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./background-gradient.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BackgroundGradient = function BackgroundGradient(props) {
  return _react2.default.createElement('div', {
    className: props.animated ? 'background-gradient animated' : 'background-gradient'
  });
};

exports.default = BackgroundGradient;