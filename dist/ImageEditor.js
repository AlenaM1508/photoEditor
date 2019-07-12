"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("./styledComponents/index");

var _index2 = require("./components/index");

var _imageType = _interopRequireDefault(require("image-type"));

require("./lib/caman");

var _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  function _default(_props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this));

    _defineProperty(_assertThisInitialized(_this), "determineImageType", function () {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', _this.props.src);
      xhr.responseType = 'arraybuffer';

      xhr.onload = function (_ref) {
        var target = _ref.target;

        _this.setState({
          imageMime: (0, _imageType.default)(new Uint8Array(target.response)).mime
        });
      };

      xhr.send();
    });

    _defineProperty(_assertThisInitialized(_this), "updateState", function (props) {
      _this.setState(props);
    });

    _defineProperty(_assertThisInitialized(_this), "onRevert", function (all) {
      var _this$state = _this.state,
          cleanTemp = _this$state.cleanTemp,
          activeTab = _this$state.activeTab,
          revert = _this$state.revert,
          applyOperations = _this$state.applyOperations,
          operations = _this$state.operations;
      var index = all ? 0 : operations.length - 1;

      if (activeTab === 'effects' || activeTab === 'filters') {
        _this.setState({
          activeTab: null,
          isShowSpinner: true,
          isHideCanvas: true
        });

        cleanTemp();
        return;
      }

      if (activeTab === 'rotate') {
        revert(function () {
          applyOperations(operations, index, function () {
            _this.setState({
              isHideCanvas: false,
              isShowSpinner: false
            });
          });
        });
      }

      _this.setState({
        activeTab: null,
        isShowSpinner: false,
        isHideCanvas: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "forceApplyOperations", function (operations, activeTab) {
      var _this$state2 = _this.state,
          revert = _this$state2.revert,
          applyOperations = _this$state2.applyOperations;

      _this.setState({
        activeTab: null,
        isShowSpinner: true,
        isHideCanvas: true
      });

      revert(function () {
        applyOperations(operations, operations.length, function () {
          _this.setState({
            isHideCanvas: false,
            isShowSpinner: false,
            activeTab: activeTab
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAdjust", function (handler, value) {
      var adjust = _this.state.adjust;
      adjust(handler, value);
    });

    _defineProperty(_assertThisInitialized(_this), "onRotate", function (value, total) {
      var rotate = _this.state.rotate;
      rotate(value, total);
    });

    _defineProperty(_assertThisInitialized(_this), "onSave", function () {
      var saveImage = _this.state.saveImage;

      _this.setState({
        isShowSpinner: true
      });

      saveImage();
    });

    _defineProperty(_assertThisInitialized(_this), "onDownloadImage", function () {
      var downloadImage = _this.state.downloadImage;
      downloadImage();

      _this.props.onComplete({
        status: 'success'
      });

      _this.props.onClose();
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function (params) {
      var resize = _this.state.resize;
      resize(params);
    });

    _defineProperty(_assertThisInitialized(_this), "onApplyEffects", function (name) {
      var addEffect = _this.state.addEffect;

      _this.setState({
        isHideCanvas: true,
        isShowSpinner: true
      });

      addEffect(name);
    });

    _defineProperty(_assertThisInitialized(_this), "apply", function () {
      var _this$state3 = _this.state,
          activeTab = _this$state3.activeTab,
          applyChanges = _this$state3.applyChanges;

      _this.setState({
        isHideCanvas: true
      });

      applyChanges(activeTab);
    });

    _defineProperty(_assertThisInitialized(_this), "redoOperation", function (operationIndex) {
      var _this$state4 = _this.state,
          applyOperations = _this$state4.applyOperations,
          operations = _this$state4.operations,
          revert = _this$state4.revert;

      _this.setState({
        activeTab: null,
        isHideCanvas: true,
        isShowSpinner: true
      });

      revert(function () {
        applyOperations(operations, operationIndex, function () {
          _this.setState({
            isHideCanvas: false,
            isShowSpinner: false
          });
        });
      });
    });

    var _props$config = _props.config,
        processWithCloudimage = _props$config.processWithCloudimage,
        processWithFilerobot = _props$config.processWithFilerobot,
        uploadWithCloudimageLink = _props$config.uploadWithCloudimageLink;
    _this.state = {
      isShowSpinner: true,
      isHideCanvas: false,
      activeTab: null,
      operations: [],
      currentOperation: null,
      original: {
        width: 300,
        height: 200
      },
      cropDetails: {
        width: 300,
        height: 200
      },
      canvasDimensions: {
        width: 300,
        height: 200,
        ratio: 1.5
      },
      processWithFilerobot: processWithFilerobot,
      processWithCloudimage: processWithCloudimage,
      uploadCloudimageImage: uploadWithCloudimageLink
    };
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.determineImageType();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state5 = this.state,
          isShowSpinner = _this$state5.isShowSpinner,
          activeTab = _this$state5.activeTab,
          operations = _this$state5.operations,
          currentOperation = _this$state5.currentOperation,
          isHideCanvas = _this$state5.isHideCanvas,
          cropDetails = _this$state5.cropDetails,
          original = _this$state5.original,
          canvasDimensions = _this$state5.canvasDimensions,
          processWithCloudimage = _this$state5.processWithCloudimage,
          processWithFilerobot = _this$state5.processWithFilerobot,
          uploadCloudimageImage = _this$state5.uploadCloudimageImage,
          imageMime = _this$state5.imageMime;
      var _this$props = this.props,
          src = _this$props.src,
          config = _this$props.config,
          onClose = _this$props.onClose,
          onComplete = _this$props.onComplete,
          _this$props$closeOnLo = _this$props.closeOnLoad,
          closeOnLoad = _this$props$closeOnLo === void 0 ? true : _this$props$closeOnLo,
          _this$props$showGoBac = _this$props.showGoBackBtn,
          showGoBackBtn = _this$props$showGoBac === void 0 ? false : _this$props$showGoBac;
      var headerProps = {
        cropDetails: cropDetails,
        original: original,
        activeTab: activeTab,
        src: src,
        onClose: onClose,
        canvasDimensions: canvasDimensions,
        processWithCloudimage: processWithCloudimage,
        processWithFilerobot: processWithFilerobot,
        operations: operations,
        isShowSpinner: isShowSpinner,
        showGoBackBtn: showGoBackBtn,
        forceApplyOperations: this.forceApplyOperations,
        updateState: this.updateState,
        onRevert: this.onRevert,
        apply: this.apply,
        onSave: this.onSave,
        onResize: this.onResize,
        onApplyEffects: this.onApplyEffects,
        onRotate: this.onRotate,
        onAdjust: this.onAdjust,
        onDownloadImage: this.onDownloadImage
      };
      var previewProps = {
        activeTab: activeTab,
        isShowSpinner: isShowSpinner,
        operations: operations,
        currentOperation: currentOperation,
        isHideCanvas: isHideCanvas,
        src: src,
        imageMime: imageMime,
        onClose: onClose,
        onComplete: onComplete,
        canvasDimensions: canvasDimensions,
        closeOnLoad: closeOnLoad,
        config: config,
        processWithCloudimage: processWithCloudimage,
        uploadCloudimageImage: uploadCloudimageImage,
        updateState: this.updateState
      };
      var footerProps = {
        operations: operations,
        currentOperation: currentOperation,
        processWithCloudimage: processWithCloudimage,
        forceApplyOperations: this.forceApplyOperations,
        updateState: this.updateState,
        redoOperation: this.redoOperation,
        config: config
      };
      return _react.default.createElement(_index.Wrapper, null, _react.default.createElement(_index2.Header, headerProps), _react.default.createElement(_index2.Preview, previewProps), _react.default.createElement(_index2.Footer, footerProps));
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

  __REACT_HOT_LOADER__.register(_default, "default", "/home/user-js/work/photoEditor/projects/react/ImageEditor.js");
}();

;