"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("../../styledComponents");

var _config = require("../../config");

var _Tool = _interopRequireDefault(require("./Tool"));

var _Effects = _interopRequireDefault(require("./Effects"));

var _Filters = _interopRequireDefault(require("./Filters"));

var _Crop = _interopRequireDefault(require("./Crop"));

var _Resize = _interopRequireDefault(require("./Resize"));

var _Orientation = _interopRequireDefault(require("./Orientation"));

var _Adjust = _interopRequireDefault(require("./Adjust"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          activeTab = _this$props.activeTab,
          processWithCloudimage = _this$props.processWithCloudimage,
          isShowSpinner = _this$props.isShowSpinner,
          operations = _this$props.operations;
      var resizeOperationIndex = operations.findIndex(function (_ref) {
        var stack = _ref.stack;
        return stack[0].name === 'resize';
      });
      var allowedTools = _config.TOOLS;
      if (processWithCloudimage) allowedTools = _config.TOOLS.filter(function (tool) {
        return _config.CLOUDIMAGE_OPERATIONS.indexOf(tool) > -1;
      });
      if (processWithCloudimage && resizeOperationIndex > -1) allowedTools = allowedTools.filter(function (tool) {
        return tool !== 'crop';
      });
      return _react.default.createElement(_styledComponents.Toolbar, null, !activeTab && allowedTools.map(function (name) {
        return _react.default.createElement(_Tool.default, _extends({
          name: name,
          key: name
        }, _this.props));
      }), activeTab === 'effects' && _react.default.createElement(_Effects.default, this.props), activeTab === 'filters' && _react.default.createElement(_Filters.default, this.props), activeTab === 'crop' && _react.default.createElement(_Crop.default, this.props), activeTab === 'resize' && _react.default.createElement(_Resize.default, this.props), activeTab === 'rotate' && _react.default.createElement(_Orientation.default, this.props), activeTab === 'adjust' && _react.default.createElement(_Adjust.default, this.props), isShowSpinner && _react.default.createElement(_styledComponents.NoClickOverlay, null));
    }
  }]);

  return _default;
}(_react.Component);

var _default2 = _default;
exports.default = _default2;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "/home/user-js/work/photoEditor/projects/react/components/Toolbar/Toolbar.js");
}();

;