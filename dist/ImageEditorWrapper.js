"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ImageEditor = _interopRequireDefault(require("./ImageEditor"));

var _styledComponents = require("./styledComponents");

var _styledComponents2 = require("styled-components");

var _Modal = require("./components/Modal");

var _config2 = require("./config");

var _colorScheme = _interopRequireWildcard(require("./assets/styles/colorScheme"));

require("./assets/fonts/filerobot-font.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ImageEditorWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(ImageEditorWrapper, _Component);

  function ImageEditorWrapper(_ref) {
    var _this;

    var _ref$show = _ref.show,
        show = _ref$show === void 0 ? false : _ref$show,
        _ref$src = _ref.src,
        _src = _ref$src === void 0 ? '' : _ref$src,
        _ref$config = _ref.config,
        _config = _ref$config === void 0 ? {} : _ref$config;

    _classCallCheck(this, ImageEditorWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageEditorWrapper).call(this));

    _defineProperty(_assertThisInitialized(_this), "processConfig", function (config) {
      return _objectSpread({}, _config2.UPLOADER, {
        processWithFilerobot: !!config.filerobot,
        processWithCloudimage: !!config.cloudimage
      }, config);
    });

    _defineProperty(_assertThisInitialized(_this), "open", function (src) {
      _this.setState({
        isVisible: true,
        src: src
      });
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      var onClose = _this.props.onClose;

      _this.setState({
        isVisible: false
      }, function () {
        if (onClose) onClose();
      });
    });

    _this.state = {
      isVisible: show,
      src: _src,
      config: _this.processConfig(_config)
    };
    return _this;
  }

  _createClass(ImageEditorWrapper, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.show !== prevProps.show) {
        if (this.props.show) {
          this.open(this.props.src);
        } else this.close();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isVisible = _this$state.isVisible,
          src = _this$state.src,
          config = _this$state.config;
      var _this$props = this.props,
          _this$props$onComplet = _this$props.onComplete,
          onComplete = _this$props$onComplet === void 0 ? function () {} : _this$props$onComplet,
          showGoBackBtn = _this$props.showGoBackBtn,
          closeOnLoad = _this$props.closeOnLoad,
          _this$props$showInMod = _this$props.showInModal,
          showInModal = _this$props$showInMod === void 0 ? true : _this$props$showInMod;
      var colors = _colorScheme.colorSchemes['default'];
      if (!src || !isVisible) return null;

      var Inner = _react.default.createElement(_styledComponents.Container, null, _react.default.createElement(_ImageEditor.default, {
        src: src,
        config: config,
        onComplete: onComplete,
        onClose: this.close,
        showGoBackBtn: showGoBackBtn,
        closeOnLoad: closeOnLoad
      }));

      return _react.default.createElement(_styledComponents2.ThemeProvider, {
        theme: _objectSpread({}, _colorScheme.default, {}, colors)
      }, showInModal ? _react.default.createElement(_Modal.Modal, {
        noBorder: true,
        fullScreen: 'lg',
        isHideCloseBtn: true,
        style: {
          borderRadius: 5
        },
        onClose: this.close
      }, Inner) : Inner);
    }
  }]);

  return ImageEditorWrapper;
}(_react.Component);

var _default = ImageEditorWrapper;
var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ImageEditorWrapper, "ImageEditorWrapper", "/home/user-js/work/photoEditor/projects/react/ImageEditorWrapper.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/home/user-js/work/photoEditor/projects/react/ImageEditorWrapper.js");
}();

;