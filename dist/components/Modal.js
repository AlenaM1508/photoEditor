"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CloseBtn = require("./CloseBtn");

var _styleUtils = require("../styledComponents/styleUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  azimuth: center;\n  border-collapse: separate;\n  border-spacing: 0;\n  caption-side: top;\n  cursor: auto;\n  direction: ltr;\n  elevation: level;\n  empty-cells: show;\n  font-size: medium;\n  font-style: medium;\n  font-variant: medium;\n  font-weight: medium;\n  letter-spacing: normal;\n  line-height: medium;\n  list-style-image: none;\n  list-style-position: outside;\n  list-style-type: disc;\n  list-style: disc outside none;\n  orphans: 2;\n  pitch-range: 50;\n  pitch: medium;\n  quotes: '\"' '\"';\n  richness: 50;\n  speak-header: once;\n  speak-numeral: continuous;\n  speak-punctuation: none;\n  speak: normal;\n  speech-rate: medium;\n  stress: 50;\n  text-align: left;\n  text-indent: 0;\n  text-transform: none;\n  visibility: visible;\n  voice-family: none;\n  volume: medium;\n  white-space: normal;\n  widows: 2;\n  word-spacing: 0;\n  position: fixed;\n  padding: ", ";\n  top: 5%;\n  left: 15%;\n  right: 15%;\n  bottom: 5%;\n  color: ", ";\n  overflow: hidden;\n  z-index: ", ";\n  display: block;\n  animation: scaleflexFadeInAnimation 350ms ease-in-out both;\n  font-family: 'Roboto', 'Arial', sans-serif;\n  \n  ", ";\n  \n  @keyframes scaleflexFadeInAnimation {\n    from {opacity: 0;}\n    to {opacity: 1;}\n  }\n  \n  @media (max-width: 1000px) {\n    top: 20px;\n    left: 20px;\n    bottom: 20px;\n    right: 20px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  border: ", " solid ", ";\n  border-radius: ", ";\n  overflow: hidden;\n  outline: 0;\n  height: ", ";\n  background: ", ";\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: fixed;\n  background: ", ";\n  opacity: .4;\n  z-index: 999999992;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ModalOverlay = _styledComponents.default.div(_templateObject(), function (props) {
  return _styleUtils.variables.colors.background.base || '#000';
});

var ModalContent = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.noBorder ? 0 : '1px';
}, function (props) {
  return props.noBorder ? 'transparent' : _styleUtils.variables.colors.border.base || '#B0B0B0';
}, function (props) {
  return props.noBorder ? 0 : _styleUtils.variables.radii[3];
}, function (props) {
  return props.h || props.height || 'auto';
}, function (props) {
  return _styleUtils.variables.colors.background.base || '#fff';
}, function (props) {
  return _styleUtils.variables.colors.text.base || '#3d3d3d';
});

var ModalFullScreen = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.p || props.padding || '0';
}, function (props) {
  return _styleUtils.variables.colors.text.base || '#3d3d3d';
}, function (props) {
  return props.zIndex || '999999995';
}, function (props) {
  return props.isTooSmall ? getSmallModalStyle() : '';
});

function getSmallModalStyle() {
  return "\n    top: 20% !important;\n    left: 15px !important;\n    right: 15px !important;\n    bottom: auto !important;\n    color: black !important;\n    text-align: center !important;\n    font-size: 18px;\n    \n    > div {\n      padding: 40px !important;\n    }\n    \n    * {\n      color: black !important;\n    }\n  ";
}

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleOutsideMouseClick", function (event) {
      var _this$props$onClose = _this.props.onClose,
          onClose = _this$props$onClose === void 0 ? function () {} : _this$props$onClose;

      if (event.keyCode === 27) {
        event.stopPropagation();
        onClose();
      }
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props$closeOnOu = this.props.closeOnOutsideClick,
          closeOnOutsideClick = _this$props$closeOnOu === void 0 ? true : _this$props$closeOnOu;
      this.root = document.createElement('div');
      document.body.appendChild(this.root);

      if (closeOnOutsideClick) {
        document.addEventListener('keydown', this.handleOutsideMouseClick);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props$closeOnOu2 = this.props.closeOnOutsideClick,
          closeOnOutsideClick = _this$props$closeOnOu2 === void 0 ? true : _this$props$closeOnOu2;
      document.body.removeChild(this.root);

      if (closeOnOutsideClick) {
        document.removeEventListener('keydown', this.handleOutsideMouseClick);
      }
    } //todo add keycode to config

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$onClose2 = _this$props.onClose,
          onClose = _this$props$onClose2 === void 0 ? function () {} : _this$props$onClose2,
          isHideCloseBtn = _this$props.isHideCloseBtn,
          otherProps = _objectWithoutProperties(_this$props, ["onClose", "isHideCloseBtn"]);

      return (0, _reactDom.createPortal)(_react.default.createElement(_react.Fragment, null, _react.default.createElement(ModalOverlay, {
        onClick: onClose
      }), _react.default.createElement(ModalFullScreen, this.props, !isHideCloseBtn && _react.default.createElement(_CloseBtn.CloseBtn, {
        onClick: onClose
      }), _react.default.createElement(ModalContent, _extends({
        h: "100%"
      }, otherProps), this.props.children))), this.root);
    }
  }]);

  return Modal;
}(_react.Component);

exports.Modal = Modal;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ModalOverlay, "ModalOverlay", "/home/user-js/work/photoEditor/projects/react/components/Modal.js");

  __REACT_HOT_LOADER__.register(ModalContent, "ModalContent", "/home/user-js/work/photoEditor/projects/react/components/Modal.js");

  __REACT_HOT_LOADER__.register(ModalFullScreen, "ModalFullScreen", "/home/user-js/work/photoEditor/projects/react/components/Modal.js");

  __REACT_HOT_LOADER__.register(getSmallModalStyle, "getSmallModalStyle", "/home/user-js/work/photoEditor/projects/react/components/Modal.js");

  __REACT_HOT_LOADER__.register(Modal, "Modal", "/home/user-js/work/photoEditor/projects/react/components/Modal.js");
}();

;