"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreviewImgBox = exports.Canvas = exports.PreviewWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n  max-height: 100%;\n  max-width: 100%;\n  vertical-align: middle;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  max-height: 100%;\n  max-width: 100%;\n  /*width: 100%;*/\n  height: 100%;\n  vertical-align: middle;\n  \n  ", "\n  \n  /* Limit image width to avoid overflow the container */\n  img {\n    max-width: 100% !important; /* This rule is very important, please do not ignore this! */\n  }\n  \n  #scaleflex-image-edit-box {\n    display: ", ";\n    max-height: 100%;\n    max-width: 100%;\n    vertical-align: middle;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: calc(100% - 170px);\n  text-align: center;\n  line-height: calc(100% - 170px);\n  padding: 20px;\n  position: relative;\n  \n  :before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PreviewWrapper = _styledComponents.default.div(_templateObject());

exports.PreviewWrapper = PreviewWrapper;

var PreviewImgBox = _styledComponents.default.div(_templateObject2(), function (props) {
  return !props.hideCanvas ? "\n  :before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n  }" : "\n  canvas {\n    position: relative;\n    left: -9999px;\n  }\n  ";
}, function (props) {
  return props.hide ? 'none' : 'inline-block';
});

exports.PreviewImgBox = PreviewImgBox;

var Canvas = _styledComponents.default.canvas.attrs(function () {
  return {
    id: 'scaleflex-image-edit-box'
  };
})(_templateObject3(), function (props) {
  return props.hide ? 'none' : 'inline-block';
});

exports.Canvas = Canvas;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PreviewWrapper, "PreviewWrapper", "/home/user-js/work/photoEditor/projects/react/styledComponents/Preview.ui.js");

  __REACT_HOT_LOADER__.register(PreviewImgBox, "PreviewImgBox", "/home/user-js/work/photoEditor/projects/react/styledComponents/Preview.ui.js");

  __REACT_HOT_LOADER__.register(Canvas, "Canvas", "/home/user-js/work/photoEditor/projects/react/styledComponents/Preview.ui.js");
}();

;