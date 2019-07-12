"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("../../styledComponents");

var _ = require("../");

var _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleSave", function () {
      var _this$props = _this.props,
          onDownloadImage = _this$props.onDownloadImage,
          processWithFilerobot = _this$props.processWithFilerobot,
          processWithCloudimage = _this$props.processWithCloudimage,
          onSave = _this$props.onSave;

      if (!processWithFilerobot && !processWithCloudimage) {
        onDownloadImage();
      } else {
        onSave();
      }
    });

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          activeTab = _this$props2.activeTab,
          onRevert = _this$props2.onRevert,
          apply = _this$props2.apply,
          onClose = _this$props2.onClose,
          showGoBackBtn = _this$props2.showGoBackBtn,
          operations = _this$props2.operations;
      var filteredName = activeTab === 'rotate' ? 'orientation' : activeTab;
      var atLeastOneOperationApplied = !!operations.length;
      var onFinishButtonLabel = 'SAVE';
      return _react.default.createElement(_styledComponents.HeaderWrapper, null, _react.default.createElement(_styledComponents.HeaderTop, null, _react.default.createElement(_styledComponents.Title, null, filteredName || 'Filerobot Image Editor'), _react.default.createElement(_styledComponents.CloseBtn, {
        onClick: onClose
      })), _react.default.createElement(_styledComponents.ToolbarWrapper, null, _react.default.createElement(_styledComponents.LeftActions, null, _react.default.createElement(_styledComponents.CancelBtn, {
        hide: !activeTab,
        onClick: onRevert,
        sm: true,
        default: true,
        fullSize: true
      }, "Cancel"), showGoBackBtn && _react.default.createElement(_styledComponents.CancelBtn, {
        hide: activeTab,
        onClick: onClose,
        sm: true,
        default: true,
        fullSize: true
      }, "Go back")), _react.default.createElement(_.Toolbar, this.props), _react.default.createElement(_styledComponents.RightActions, null, _react.default.createElement(_styledComponents.Button, {
        themeColor: true,
        sm: true,
        disabled: !atLeastOneOperationApplied && !activeTab,
        success: !activeTab,
        themeBtn: activeTab,
        fullSize: true,
        onClick: function onClick() {
          !activeTab ? _this2.handleSave() : apply();
        }
      }, !activeTab ? onFinishButtonLabel : 'APPLY'))));
    }
  }]);

  return _default;
}(_react.Component), _temp);

var _default2 = _default;
exports.default = _default2;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "/home/user-js/work/photoEditor/projects/react/components/Header/Header.js");
}();

;