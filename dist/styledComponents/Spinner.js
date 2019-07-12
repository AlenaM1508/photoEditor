"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = exports.InlineSpinner = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  animation: ", " 2s infinite linear;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n    100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: ", ";\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  font-size: 25px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  text-indent: -9999em;\n  z-index: 1042;\n  -webkit-animation: scale-flex-loader", " 1.1s infinite ease;\n  animation: scale-flex-loader", " 1.1s infinite ease;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  \n  @-webkit-keyframes scale-flex-loader {\n    0%,\n    100% {\n      box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n    }\n    12.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n    }\n    25% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    37.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    50% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    62.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    75% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    87.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n    }\n  }\n  @keyframes scale-flex-loader {\n    0%,\n    100% {\n      box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n    }\n    12.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n    }\n    25% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    37.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    50% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    62.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    75% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    87.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n    }\n  }\n\n  @-webkit-keyframes scale-flex-loader-black {\n    0%,\n    100% {\n      box-shadow: 0em -2.6em 0em 0em #000000, 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.5), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.7);\n    }\n    12.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.7), 1.8em -1.8em 0 0em #000000, 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.5);\n    }\n    25% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.5), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.7), 2.5em 0em 0 0em #000000, 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    37.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.5), 2.5em 0em 0 0em rgba(0, 0, 0, 0.7), 1.75em 1.75em 0 0em #000000, 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    50% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.5), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.7), 0em 2.5em 0 0em #000000, -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    62.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.5), 0em 2.5em 0 0em rgba(0, 0, 0, 0.7), -1.8em 1.8em 0 0em #000000, -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    75% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.5), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.7), -2.6em 0em 0 0em #000000, -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    87.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.5), -2.6em 0em 0 0em rgba(0, 0, 0, 0.7), -1.8em -1.8em 0 0em #000000;\n    }\n  }\n  @keyframes scale-flex-loader-black {\n    0%,\n    100% {\n      box-shadow: 0em -2.6em 0em 0em #000000, 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.5), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.7);\n    }\n    12.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.7), 1.8em -1.8em 0 0em #000000, 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.5);\n    }\n    25% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.5), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.7), 2.5em 0em 0 0em #000000, 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    37.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.5), 2.5em 0em 0 0em rgba(0, 0, 0, 0.7), 1.75em 1.75em 0 0em #000000, 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    50% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.5), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.7), 0em 2.5em 0 0em #000000, -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    62.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.5), 0em 2.5em 0 0em rgba(0, 0, 0, 0.7), -1.8em 1.8em 0 0em #000000, -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    75% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.5), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.7), -2.6em 0em 0 0em #000000, -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    87.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.5), -2.6em 0em 0 0em rgba(0, 0, 0, 0.7), -1.8em -1.8em 0 0em #000000;\n    }\n  }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: ", ";\n  background: ", " !important;\n  //opacity: ", " !important;\n  z-index: 1042;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SpinnerOverlay = _styledComponents.default.div(_templateObject(), function (props) {
  return props.fullScreen ? 'fixed' : 'absolute';
}, function (props) {
  return props.overlay ? 'rgba(10,10,10,0.26)' : 'transparent';
}, function (props) {
  return props.overlay ? '0.25' : '0';
});

var SpinnerInner = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.fullScreen ? 'fixed' : 'absolute';
}, function (props) {
  return props.black ? '-black' : '';
}, function (props) {
  return props.black ? '-black' : '';
});

var faSpin = (0, _styledComponents.keyframes)(_templateObject3());

var InlineSpinner = _styledComponents.default.span.attrs(function () {
  return {
    className: 'fa fa-spinner'
  };
})(_templateObject4(), faSpin);

exports.InlineSpinner = InlineSpinner;

var Spinner = function Spinner(props) {
  if (!props.show) return null;
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(SpinnerOverlay, {
    fullScreen: props.fullScreen,
    overlay: props.overlay
  }), _react.default.createElement(SpinnerInner, _extends({
    fullScreen: props.fullScreen
  }, props), "Loading..."));
};

exports.Spinner = Spinner;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SpinnerOverlay, "SpinnerOverlay", "/home/user-js/work/photoEditor/projects/react/styledComponents/Spinner.js");

  __REACT_HOT_LOADER__.register(SpinnerInner, "SpinnerInner", "/home/user-js/work/photoEditor/projects/react/styledComponents/Spinner.js");

  __REACT_HOT_LOADER__.register(faSpin, "faSpin", "/home/user-js/work/photoEditor/projects/react/styledComponents/Spinner.js");

  __REACT_HOT_LOADER__.register(InlineSpinner, "InlineSpinner", "/home/user-js/work/photoEditor/projects/react/styledComponents/Spinner.js");

  __REACT_HOT_LOADER__.register(Spinner, "Spinner", "/home/user-js/work/photoEditor/projects/react/styledComponents/Spinner.js");
}();

;