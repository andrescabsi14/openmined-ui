'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _logomark = require('../../assets/logomark.svg');

var _logomark2 = _interopRequireDefault(_logomark);

var _links = require('./links');

var _links2 = _interopRequireDefault(_links);

require('./header.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validLink = function validLink(authenticated, link) {
  return authenticated && link.authRequired || !authenticated && link.unauthRequired || !link.authRequired && !link.unauthRequired;
};

var activeLink = function activeLink(to, current) {
  return to === current ? 'active ' : '';
};

var Title = function Title(props) {
  return _react2.default.createElement(
    'div',
    { className: 'title' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: props.authenticated ? '/mine' : '/' },
      _react2.default.createElement('img', { src: _logomark2.default, id: 'logo', alt: 'OpenMined' })
    )
  );
};

var Hamburger = function Hamburger(props) {
  return _react2.default.createElement(
    'div',
    {
      className: 'nav-icon' + (props.isToggled ? ' open' : ''),
      onClick: props.toggleMenu
    },
    _react2.default.createElement('span', null),
    _react2.default.createElement('span', null),
    _react2.default.createElement('span', null),
    _react2.default.createElement('span', null)
  );
};

var Navigation = function Navigation(props) {
  return _react2.default.createElement(
    'div',
    { className: 'navigation ' + (props.isToggled ? 'open' : '') },
    ['left', 'right'].map(function (key) {
      return _react2.default.createElement(
        'div',
        { className: key + '-menu', key: key + '-menu' },
        _links2.default[key].map(function (link) {
          var classes = activeLink(link.to, props.currentPage);

          if (link.button) {
            classes += ' button';
          }

          if (typeof link.to === 'string') {
            return validLink(props.isAuthenticated, link) && _react2.default.createElement(
              _reactRouterDom.Link,
              { to: link.to, key: link.name, className: classes },
              link.name
            );
          } else {
            return validLink(props.isAuthenticated, link) && _react2.default.createElement(
              'a',
              { onClick: link.to, key: link.name, className: classes },
              link.name
            );
          }
        })
      );
    })
  );
};

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {
      mobileToggled: false,
      isScrolled: false
    };

    _this.toggleMenu = _this.toggleMenu.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.setState({
        mobileToggled: !this.state.mobileToggled
      });
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      if (window.scrollY > 0 && !this.state.isScrolled) {
        this.setState({
          isScrolled: true
        });
      } else if (window.scrollY === 0 && this.state.isScrolled) {
        this.setState({
          isScrolled: false
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'header' },
        _react2.default.createElement(Title, { authenticated: this.props.isAuthenticated }),
        _react2.default.createElement(Hamburger, {
          isToggled: this.state.mobileToggled,
          toggleMenu: this.toggleMenu
        }),
        _react2.default.createElement(Navigation, _extends({
          isToggled: this.state.mobileToggled,
          isScrolled: this.state.isScrolled
        }, this.props))
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;