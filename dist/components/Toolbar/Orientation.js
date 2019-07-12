"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("../../styledComponents");

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

    _defineProperty(_assertThisInitialized(_this), "state", {
      rotate: 0
    });

    _defineProperty(_assertThisInitialized(_this), "leftRotate", function () {
      var onRotate = _this.props.onRotate;
      var rotate = _this.state.rotate;
      onRotate(-90, rotate - 90);

      _this.setState({
        rotate: rotate - 90
      });
    });

    _defineProperty(_assertThisInitialized(_this), "rightRotate", function () {
      var onRotate = _this.props.onRotate;
      var rotate = _this.state.rotate;
      onRotate(90, rotate + 90);

      _this.setState({
        rotate: rotate + 90
      });
    });

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          operations = _this$props.operations,
          processWithCloudimage = _this$props.processWithCloudimage,
          updateState = _this$props.updateState,
          forceApplyOperations = _this$props.forceApplyOperations;
      var operationIndex = operations.findIndex(function (_ref) {
        var stack = _ref.stack;
        return stack[0].name === 'rotate';
      });

      if (operationIndex > -1 && processWithCloudimage) {
        operations.splice(operationIndex, 1);
        updateState({
          operations: operations
        });
        forceApplyOperations(operations, 'rotate');
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_styledComponents.OrientationWrapper, null, _react.default.createElement(_styledComponents.RotateWrapper, null, _react.default.createElement(_styledComponents.RotateLabel, null, "Rotate"), _react.default.createElement(_styledComponents.RotateButton, null, _react.default.createElement(_styledComponents.DarkBtn, {
        onClick: this.leftRotate
      }, _react.default.createElement(_styledComponents.RotateIcon, {
        name: "left-rotate"
      })), _react.default.createElement(_styledComponents.DarkBtn, {
        onClick: this.rightRotate
      }, _react.default.createElement(_styledComponents.RotateIcon, {
        name: "right-rotate"
      })))));
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

  __REACT_HOT_LOADER__.register(_default, "default", "/home/user-js/work/photoEditor/projects/react/components/Toolbar/Orientation.js");
}();

;