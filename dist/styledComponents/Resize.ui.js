"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResizeBox = exports.ResizeWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 300px;\n  padding: 20px;\n  height: 100px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ResizeWrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.text.base;
});

exports.ResizeWrapper = ResizeWrapper;

var ResizeBox = _styledComponents.default.div(_templateObject2());

exports.ResizeBox = ResizeBox;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ResizeWrapper, "ResizeWrapper", "/home/user-js/work/photoEditor/projects/react/styledComponents/Resize.ui.js");

  __REACT_HOT_LOADER__.register(ResizeBox, "ResizeBox", "/home/user-js/work/photoEditor/projects/react/styledComponents/Resize.ui.js");
}();

;