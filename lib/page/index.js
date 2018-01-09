'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRouter = require('react-router');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://openmined.org';
var defaultTitle = 'OpenMined';
var defaultDescription = 'OpenMined is a community focused on building technology which facilitates the decentralized ownership of data and intelligence.';
var defaultImage = defaultUrl + '/images/logo.png';
var defaultTwitter = '@openminedorg';
var defaultSep = ' | ';

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'getMetaTags',
    value: function getMetaTags(_ref, pathname) {
      var title = _ref.title,
          description = _ref.description,
          image = _ref.image,
          contentType = _ref.contentType,
          twitter = _ref.twitter,
          noCrawl = _ref.noCrawl,
          published = _ref.published,
          updated = _ref.updated,
          category = _ref.category,
          tags = _ref.tags;

      var theTitle = title ? (title + defaultSep + defaultTitle).substring(0, 60) : defaultTitle;
      var theDescription = description ? description.substring(0, 155) : defaultDescription;
      var theImage = image ? image : defaultImage;

      var metaTags = [{ itemprop: 'name', content: theTitle }, { itemprop: 'description', content: theDescription }, { itemprop: 'image', content: theImage }, { name: 'description', content: theDescription }, { name: 'twitter:card', content: 'summary_large_image' }, { name: 'twitter:site', content: defaultTwitter }, { name: 'twitter:title', content: theTitle }, { name: 'twitter:description', content: theDescription }, { name: 'twitter:creator', content: twitter || defaultTwitter }, { name: 'twitter:image:src', content: theImage }, { property: 'og:title', content: theTitle }, { property: 'og:type', content: contentType || 'website' }, { property: 'og:url', content: defaultUrl + pathname }, { property: 'og:image', content: theImage }, { property: 'og:description', content: theDescription }, { property: 'og:site_name', content: defaultTitle }, { property: 'fb:app_id', content: '308339039653695' }];

      if (noCrawl) {
        metaTags.push({ name: 'robots', content: 'noindex, nofollow' });
      }

      if (published) {
        metaTags.push({ name: 'article:published_time', content: published });
      }
      if (updated) {
        metaTags.push({ name: 'article:modified_time', content: updated });
      }
      if (category) {
        metaTags.push({ name: 'article:section', content: category });
      }
      if (tags) {
        metaTags.push({ name: 'article:tag', content: tags });
      }

      return metaTags;
    }
  }, {
    key: 'render',
    value: function render() {
      // $FlowFixMe: Unknown error
      var _props = this.props,
          children = _props.children,
          id = _props.id,
          className = _props.className,
          rest = _objectWithoutProperties(_props, ['children', 'id', 'className']);

      return React.createElement(
        'div',
        { id: id, className: className },
        React.createElement(_reactHelmet2.default, {
          htmlAttributes: {
            lang: 'en',
            itemscope: undefined,
            itemtype: 'http://schema.org/' + (rest.schema || 'WebPage')
          },
          title: rest.title ? rest.title + defaultSep + defaultTitle : defaultTitle,
          link: [{
            rel: 'canonical',
            href: defaultUrl + this.props.location.pathname
          }],
          meta: this.getMetaTags(rest, this.props.location.pathname)
        }),
        children
      );
    }
  }]);

  return Page;
}(React.Component);

exports.default = (0, _reactRouter.withRouter)(Page);