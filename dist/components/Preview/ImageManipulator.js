"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("../../styledComponents");

var _utils = require("../../utils");

var _config = require("../../config");

var _cropperjs = _interopRequireDefault(require("cropperjs"));

var _v = _interopRequireDefault(require("uuid/v4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ImageManipulator =
/*#__PURE__*/
function (_Component) {
  _inherits(ImageManipulator, _Component);

  function ImageManipulator(_props) {
    var _this;

    _classCallCheck(this, ImageManipulator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageManipulator).call(this));

    _defineProperty(_assertThisInitialized(_this), "saveImage", function () {
      var operations = _this.state.operations;
      var _this$props = _this.props,
          onComplete = _this$props.onComplete,
          onClose = _this$props.onClose,
          updateState = _this$props.updateState,
          closeOnLoad = _this$props.closeOnLoad,
          config = _this$props.config,
          processWithCloudimage = _this$props.processWithCloudimage,
          uploadCloudimageImage = _this$props.uploadCloudimageImage,
          imageMime = _this$props.imageMime;
      var _config$filerobot = config.filerobot,
          filerobot = _config$filerobot === void 0 ? {} : _config$filerobot;

      var src = _this.state.src.split('?')[0];

      var canvas = _this.getCanvasNode();

      var baseUrl = "//".concat(filerobot.container, ".api.airstore.io/v1/");
      var uploadParams = filerobot.uploadParams || {};
      var dir = uploadParams.dir || 'image-editor';

      var self = _assertThisInitialized(_this);

      var imageName = _this.state.imageName;

      if (!processWithCloudimage) {
        new window.Caman(canvas, function () {
          this.render(function () {
            var base64 = canvas.toDataURL(imageMime);
            var block = base64.split(";");
            var realData = block[1].split(",")[1];
            var blob = (0, _utils.b64toBlob)(realData, imageMime, null);
            var splittedName = imageName.replace(/-version-.{6}/g, '').split('.');
            var nameLength = splittedName.length;
            var name = '';

            if (nameLength <= 1) {
              name = "".concat(splittedName.join('.'), "-version-").concat(((0, _v.default)() || '').slice(0, 6));
            } else {
              name = [splittedName.slice(0, nameLength - 1).join('.'), '-version-', ((0, _v.default)() || '').slice(0, 6), '.', splittedName[nameLength - 1]].join('');
            }

            var formData = new FormData();
            var request = new XMLHttpRequest();
            request.addEventListener("load", self.onFileLoad);
            formData.append('files[]', blob, name);
            request.open("POST", [baseUrl, "upload?dir=".concat(dir)].join(''));
            request.setRequestHeader('X-Airstore-Secret-Key', filerobot.uploadKey);
            request.send(formData);
          });
        });
      } else {
        var allowedOperations = operations.filter(function (_ref) {
          var stack = _ref.stack;
          return _config.CLOUDIMAGE_OPERATIONS.indexOf(stack[0].name) > -1;
        });

        var url = _this.generateCloudimageURL(allowedOperations);

        var original = src.replace(/https?:\/\/scaleflex.ultrafast.io\//, '');
        var resultUrl = url + original;

        if (uploadCloudimageImage) {
          var request = new XMLHttpRequest();
          request.addEventListener("load", _this.onFileLoad);
          request.open("POST", [baseUrl, "upload?dir=".concat(dir)].join(''));
          request.setRequestHeader('X-Airstore-Secret-Key', filerobot.uploadKey);
          request.setRequestHeader('Content-Type', 'application/json');
          request.send(JSON.stringify({
            files_urls: [resultUrl]
          }));
        } else {
          updateState({
            isShowSpinner: false,
            isHideCanvas: false
          });
          onComplete(resultUrl, {
            url_permalink: resultUrl,
            url_public: resultUrl
          });
          closeOnLoad && onClose();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFileLoad", function (data) {
      var _this$props2 = _this.props,
          onComplete = _this$props2.onComplete,
          onClose = _this$props2.onClose,
          updateState = _this$props2.updateState,
          closeOnLoad = _this$props2.closeOnLoad;
      var _data$srcElement = data.srcElement,
          srcElement = _data$srcElement === void 0 ? {} : _data$srcElement;
      var _srcElement$response = srcElement.response,
          response = _srcElement$response === void 0 ? '{}' : _srcElement$response;
      var responseData = JSON.parse(response) || {};

      if (responseData.status === 'success') {
        var _responseData$file = responseData.file,
            file = _responseData$file === void 0 ? {} : _responseData$file;
        if (!file.url_public) return;
        updateState({
          isShowSpinner: false,
          isHideCanvas: false
        });
        onComplete(file.url_public, file);
        closeOnLoad && onClose();
      } else {
        updateState({
          isShowSpinner: false,
          isHideCanvas: false
        });
        alert(responseData);
        closeOnLoad && onClose();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "generateCloudimageURL", function (operations) {
      var config = _this.props.config;
      var _config$cloudimage = config.cloudimage,
          cloudimage = _config$cloudimage === void 0 ? {} : _config$cloudimage;
      var cloudUrl = cloudimage.token + '.cloudimg.io' + '/';

      var cropOperation = _this.isOperationExist(operations, 'crop');

      var resizeOperation = _this.isOperationExist(operations, 'resize');

      var orientationOperation = _this.isOperationExist(operations, 'rotate');

      var operationQ = _this.getOperationQuery(cropOperation, resizeOperation);

      var cropParams = null;
      var resizeParams = null;
      var orientationParams = null;
      if (cropOperation) cropParams = _this.getCropArguments(cropOperation);

      var _ref2 = cropParams || [],
          _ref3 = _slicedToArray(_ref2, 4),
          cropWidth = _ref3[0],
          cropHeight = _ref3[1],
          x = _ref3[2],
          y = _ref3[3];

      if (resizeOperation) resizeParams = _this.getResizeArguments(resizeOperation);
      if (orientationOperation) orientationParams = _this.getOrientationArguments(orientationOperation);

      var _ref4 = resizeParams || [],
          _ref5 = _slicedToArray(_ref4, 2),
          resizeWidth = _ref5[0],
          resizeHeight = _ref5[1];

      var cropQ = cropOperation ? x + ',' + y + ',' + (x + cropWidth) + ',' + (y + cropHeight) + '-' : '';
      var resizeQ = resizeWidth || cropWidth ? (resizeWidth || cropWidth) + 'x' + (resizeHeight || cropHeight) : '';
      var sizesQ = cropQ || resizeQ ? cropQ + resizeQ : 'n';
      var rotateQ = orientationParams ? orientationParams : '';
      var filtersQ = rotateQ ? "r".concat(rotateQ) : 'n';
      if (operationQ === 'cdn' && filtersQ !== 'n') operationQ = 'cdno';
      return 'https://' + cloudUrl + operationQ + '/' + sizesQ + '/' + filtersQ + '/';
    });

    _defineProperty(_assertThisInitialized(_this), "isOperationExist", function (operations, type) {
      return operations.find(function (_ref6) {
        var stack = _ref6.stack;
        return stack[0].name === type;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getOperationQuery", function (isCrop, isResize) {
      if (isCrop) return 'crop_px';else if (isResize) return 'width';else return 'cdn';
    });

    _defineProperty(_assertThisInitialized(_this), "getCropArguments", function () {
      var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _operation$stack = operation.stack,
          stack = _operation$stack === void 0 ? [] : _operation$stack;
      var params = stack[0] && stack[0].arguments;
      params = params.map(function (value) {
        return parseInt(value);
      });
      return params;
    });

    _defineProperty(_assertThisInitialized(_this), "getResizeArguments", function () {
      var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _operation$stack2 = operation.stack,
          stack = _operation$stack2 === void 0 ? [] : _operation$stack2;
      var props = stack[0] && stack[0].arguments && stack[0].arguments[0];
      return [parseInt(props.width), parseInt(props.height)];
    });

    _defineProperty(_assertThisInitialized(_this), "getOrientationArguments", function () {
      var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _operation$stack3 = operation.stack,
          stack = _operation$stack3 === void 0 ? [] : _operation$stack3;
      var rotate = stack[0] && stack[0].arguments && stack[0].arguments[0] || 0; // todo: need to find better way or ask julian to redo it on server

      switch (rotate) {
        case 90:
          return 270;

        case -90:
          return 90;

        default:
          return rotate;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "cleanTemp", function () {
      var _this$state = _this.state,
          operations = _this$state.operations,
          currentOperation = _this$state.currentOperation;

      _this.revert(function () {
        _this.applyOperations(operations, operations.findIndex(function (operation) {
          return operation === currentOperation;
        }), function () {
          _this.setState({
            tempOperation: null
          });

          _this.props.updateState({
            isHideCanvas: false,
            isShowSpinner: false
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "rotate", function (value, total) {
      var canvas = _this.getCanvasNode();

      var that = _assertThisInitialized(_this);

      new window.Caman(canvas, function () {
        this.rotate(value);
        this.render(function () {
          that.setState({
            rotate: total
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "adjust", function (handler, value) {
      var _this$state2 = _this.state,
          _this$state2$operatio = _this$state2.operations,
          operations = _this$state2$operatio === void 0 ? [] : _this$state2$operatio,
          currentOperation = _this$state2.currentOperation,
          adjust = _this$state2.adjust;

      var that = _assertThisInitialized(_this);

      _extends(adjust, _defineProperty({}, handler, value));

      _this.setState(adjust);

      _this.revert(function () {
        _this.applyOperations(operations, operations.findIndex(function (operation) {
          return operation === currentOperation;
        }), function () {
          var canvas = _this.getCanvasNode();

          new window.Caman(canvas, function () {
            this.brightness(adjust.brightness);
            this.contrast(adjust.contrast);
            this.gamma(adjust.gamma);
            this.saturation(adjust.saturation);
            this.render(function () {
              that.props.updateState({
                isHideCanvas: false,
                isShowSpinner: false
              });
            });
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "applyOrientation", function () {
      var _this$state3 = _this.state,
          currentOperation = _this$state3.currentOperation,
          operations = _this$state3.operations,
          rotate = _this$state3.rotate;
      var operation = {
        stack: [{
          name: 'rotate',
          arguments: [rotate],
          queue: 0
        }]
      };

      _this.pushOperation(operations, operation, currentOperation);

      _this.setState({
        rotate: null
      });

      _this.props.updateState({
        isHideCanvas: false,
        activeTab: null,
        operations: operations,
        currentOperation: operation
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addEffect", function (name) {
      var effectHandlerName = _this.getEffectHandlerName(name);

      var _this$state4 = _this.state,
          currentOperation = _this$state4.currentOperation,
          operations = _this$state4.operations;

      var that = _assertThisInitialized(_this);

      var operation = {
        stack: [{
          name: effectHandlerName,
          arguments: [],
          queue: 2
        }]
      };

      _this.setState({
        tempOperation: operation
      });

      _this.revert(function () {
        _this.applyOperations(operations, operations.findIndex(function (operation) {
          return operation === currentOperation;
        }), function () {
          var canvas = _this.getCanvasNode();

          new window.Caman(canvas, function () {
            this[effectHandlerName]();
            this.render(function () {
              that.props.updateState({
                isHideCanvas: false,
                isShowSpinner: false
              });
            });
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCanvasNode", function () {
      return document.getElementById('scaleflex-image-edit-box');
    });

    _defineProperty(_assertThisInitialized(_this), "initEffects", function () {});

    _defineProperty(_assertThisInitialized(_this), "initFilters", function () {});

    _defineProperty(_assertThisInitialized(_this), "initAdjust", function () {});

    _defineProperty(_assertThisInitialized(_this), "initCrop", function () {
      var originalWidth = _this.state.originalWidth;

      var canvas = _this.getCanvasNode();

      var rect = canvas.getBoundingClientRect();
      var zoom = originalWidth / rect.width;
      _this.cropper = new _cropperjs.default(canvas, {
        viewMode: 1,
        modal: false,
        background: false,
        rotatable: false,
        scalable: false,
        zoomable: false,
        movable: false,
        crop: function crop(event) {
          _this.setState({
            cropDetails: event.detail
          });

          _this.props.updateState({
            cropDetails: event.detail
          });
        }
      });
      window.scaleflexPlugins = window.scaleflexPlugins || {};
      window.scaleflexPlugins.zoom = zoom;
      window.scaleflexPlugins.cropperjs = _this.cropper;
    });

    _defineProperty(_assertThisInitialized(_this), "initResize", function () {});

    _defineProperty(_assertThisInitialized(_this), "initOrientation", function () {});

    _defineProperty(_assertThisInitialized(_this), "destroyCrop", function () {
      _this.cropper.destroy();
    });

    _defineProperty(_assertThisInitialized(_this), "destroyAll", function () {});

    _defineProperty(_assertThisInitialized(_this), "applyCanvasChanges", function () {});

    _defineProperty(_assertThisInitialized(_this), "applyCrop", function () {
      var _this$state5 = _this.state,
          cropDetails = _this$state5.cropDetails,
          currentOperation = _this$state5.currentOperation,
          operations = _this$state5.operations;
      var width = cropDetails.width,
          height = cropDetails.height,
          x = cropDetails.x,
          y = cropDetails.y;

      var canvas = _this.getCanvasNode();

      var that = _assertThisInitialized(_this);

      var operation = {
        stack: [{
          name: 'crop',
          arguments: [width, height, x, y],
          queue: 0
        }]
      };

      _this.pushOperation(operations, operation, currentOperation);

      _this.destroyCrop();

      new window.Caman(canvas, function () {
        this.crop(width, height, x, y);
        this.render(function () {
          that.props.updateState({
            isHideCanvas: false,
            activeTab: null,
            operations: operations,
            currentOperation: operation,
            canvasDimensions: {
              width: width,
              height: height,
              ratio: width / height
            }
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "applyOperations", function () {
      var operations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var operationIndex = arguments.length > 1 ? arguments[1] : undefined;
      var callback = arguments.length > 2 ? arguments[2] : undefined;
      var queue = _this.state.queue;

      var canvas = _this.getCanvasNode();

      var that = _assertThisInitialized(_this);

      new window.Caman(canvas, function () {
        var _this2 = this;

        var caman = this;
        queue.forEach(function (queueIndex) {
          operations.forEach(function (operation, index) {
            if (operationIndex < index || operationIndex === -1) return;
            operation.stack.forEach(function (handler) {
              if (handler.queue === queueIndex) caman[handler.name].apply(caman, _toConsumableArray(handler.arguments));
            });
          });
          if (operationIndex > -1) _this2.render(function () {
            that.props.updateState({
              currentOperation: operations[operationIndex]
            });
            if (callback) callback();
          });
        });

        if (!(operationIndex > -1)) {
          that.props.updateState({
            currentOperation: operations[operationIndex]
          });
          setTimeout(function () {
            if (callback) callback();
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "applyFilters", function () {
      var operations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var callback = arguments.length > 1 ? arguments[1] : undefined;

      var canvas = _this.getCanvasNode();

      new window.Caman(canvas, function () {
        var caman = this;
        operations.forEach(function (operation) {
          operation.stack.forEach(function (handler) {
            if (handler.queue === 2) caman[handler.name].apply(caman, _toConsumableArray(handler.arguments));
          });
        });
        this.render(function () {
          if (callback) callback();
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "pushOperation", function (operations, operation, currentOperation) {
      var operationIndex = operations.findIndex(function (operation) {
        return operation === currentOperation;
      });
      var operationsLength = operations.length;
      if (operationsLength && operationIndex !== operations[operationsLength]) operations.splice(operationIndex + 1, operationsLength);
      operations.push(operation);
    });

    _defineProperty(_assertThisInitialized(_this), "applyResize", function () {
      var _this$state6 = _this.state,
          currentOperation = _this$state6.currentOperation,
          operations = _this$state6.operations;
      var canvasDimensions = _this.props.canvasDimensions;
      var width = canvasDimensions.width,
          height = canvasDimensions.height;

      var canvas = _this.getCanvasNode();

      var that = _assertThisInitialized(_this);

      var operation = {
        stack: [{
          name: 'resize',
          arguments: [{
            width: width,
            height: height
          }],
          queue: 0
        }]
      };

      _this.pushOperation(operations, operation, currentOperation);

      new window.Caman(canvas, function () {
        this.resize({
          width: width,
          height: height
        });
        this.render(function () {
          that.props.updateState({
            isHideCanvas: false,
            activeTab: null,
            operations: operations,
            currentOperation: operation
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "applyEffects", function () {
      var _this$state7 = _this.state,
          currentOperation = _this$state7.currentOperation,
          operations = _this$state7.operations,
          tempOperation = _this$state7.tempOperation;

      _this.pushOperation(operations, tempOperation, currentOperation);

      _this.props.updateState({
        isHideCanvas: false,
        activeTab: null,
        operations: operations,
        currentOperation: tempOperation
      });
    });

    _defineProperty(_assertThisInitialized(_this), "revert", function (callback) {
      var oldcanv = document.getElementById('scaleflex-image-edit-box');
      var container = oldcanv.parentElement;
      container.removeChild(oldcanv);
      var canvas = document.createElement('canvas');
      canvas.id = 'scaleflex-image-edit-box'; //const canvas = this.getCanvasNode();

      var ctx = canvas.getContext('2d');
      /* Enable Cross Origin Image Editing */

      var img = new Image();
      img.crossOrigin = '';
      img.src = _this.state.src;

      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height);

        _this.props.updateState({
          original: {
            height: img.height,
            width: img.width
          },
          canvasDimensions: {
            height: img.height,
            width: img.width,
            ratio: img.width / img.height
          }
        });

        _this.setState({
          originalWidth: img.width,
          originalHeight: img.height,
          originalImage: img
        });

        container.appendChild(canvas);
        if (callback) setTimeout(function () {
          callback();
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "downloadImage", function () {
      var canvas = _this.getCanvasNode();

      var imageMime = _this.props.imageMime;
      var base64 = canvas.toDataURL(imageMime);
      console.log('base64', base64);
      var block = base64.split(";");
      var realData = block[1].split(",")[1];
      var blob = (0, _utils.b64toBlob)(realData, imageMime, null);
      return blob;
    });

    _defineProperty(_assertThisInitialized(_this), "applyChanges", function (activeTab) {
      switch (activeTab) {
        case 'effects':
        case 'filters':
          _this.applyEffects();

          break;

        case 'adjust':
          _this.applyCanvasChanges();

          break;

        case 'crop':
          _this.applyCrop();

          break;

        case 'rotate':
          _this.applyOrientation();

          break;

        case 'resize':
          _this.applyResize();

          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "changeTab", function (name) {
      switch (name) {
        case 'effects':
          _this.initEffects();

          break;

        case 'filters':
          _this.initFilters();

          break;

        case 'adjust':
          _this.initAdjust();

          break;

        case 'crop':
          _this.initCrop();

          break;

        case 'resize':
          _this.initResize();

          break;

        case 'rotate':
          _this.initOrientation();

          break;

        default:
          _this.destroyAll();

      }
    });

    _defineProperty(_assertThisInitialized(_this), "destroyMode", function (name) {
      switch (name) {
        case 'effects':
          break;

        case 'filters':
          break;

        case 'adjust':
          break;

        case 'crop':
          _this.destroyCrop();

          break;

        case 'resize':
          break;

        case 'rotate':
          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getEffectHandlerName", function (name) {
      switch (name) {
        //filters
        case 'colorize':
          return 'colorize';

        case 'contrast':
          return 'contrast';

        case 'cross_process':
          return 'crossProcess';

        case 'glow_sun':
          return 'glowingSun';

        case 'hdr_effect':
          return 'hdr';

        case 'jarques':
          return 'jarques';

        case 'love':
          return 'love';

        case 'old_boot':
          return 'oldBoot';

        case 'orange_peel':
          return 'orangePeel';

        case 'pin_hole':
          return 'pinhole';

        case 'pleasant':
          return 'pleasant';

        case 'sepia':
          return 'sepia';

        case 'sun_rise':
          return 'sunrise';

        case 'vintage':
          return 'vintage';
        //effets

        case 'clarity':
          return '';

        case 'edge_enhance':
          return 'edgeEnhance';

        case 'emboss':
          return 'emboss';

        case 'grungy':
          return 'grungy';

        case 'hazy':
          return 'hazyDays';

        case 'lomo':
          return 'lomo';

        case 'noise':
          return 'noise';

        case 'old_paper':
          return 'oldPaper';
        //?

        case 'posterize':
          return 'posterize';

        case 'radial_blur':
          return 'radialBlur';

        case 'sin_city':
          return 'sinCity';

        case 'tilt_shift':
          return 'tiltShift';

        default:
          return null;
      }
    });

    _this.state = _objectSpread({}, _props, {
      queue: Array.from(Array(3).keys()),
      tempOperation: null,
      canvas: null,
      imageBase64: '',
      adjust: {
        brightness: 0,
        contrast: 0,
        gamma: 1,
        saturation: 0
      }
    });
    return _this;
  }

  _createClass(ImageManipulator, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.activeTab !== this.state.activeTab) {
        if (this.state.activeTab) this.destroyMode(this.state.activeTab);
        this.changeTab(nextProps.activeTab);
      }

      this.setState(_objectSpread({}, nextProps));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var src = this.state.src;
      var splittedSrc = src.split('/');
      var imageName = splittedSrc[splittedSrc.length - 1];
      this.props.updateState({
        isShowSpinner: true,
        applyChanges: this.applyChanges,
        applyOperations: this.applyOperations,
        saveImage: this.saveImage,
        updateCropDetails: this.updateCropDetails,
        resize: this.resize,
        addEffect: this.addEffect,
        cleanTemp: this.cleanTemp,
        revert: this.revert,
        rotate: this.rotate,
        adjust: this.adjust,
        downloadImage: this.downloadImage
      });
      var canvas = this.getCanvasNode();
      var ctx = canvas.getContext('2d');
      /* Enable Cross Origin Image Editing */

      var img = new Image();
      img.crossOrigin = '';
      img.src = src;
      this.img = img;

      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        _this3.props.updateState({
          isShowSpinner: false,
          original: {
            height: img.height,
            width: img.width
          },
          canvasDimensions: {
            height: img.height,
            width: img.width,
            ratio: img.width / img.height
          }
        });

        _this3.setState({
          originalWidth: img.width,
          originalHeight: img.height,
          originalImage: img,
          imageName: imageName.indexOf('?') > -1 ? imageName.slice(0, imageName.indexOf('?')) : imageName,
          originalCanvas: canvas
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_styledComponents.Canvas, {
        id: "scaleflex-image-edit-box"
      });
    }
  }]);

  return ImageManipulator;
}(_react.Component);

exports.default = ImageManipulator;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ImageManipulator, "ImageManipulator", "/home/user-js/work/photoEditor/projects/react/components/Preview/ImageManipulator.js");
}();

;