"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CropLabel = exports.CropShape = exports.CropBoxInner = exports.CropBox = exports.BlockRatioIcon = exports.BlockRatioBtn = exports.BlockRatioWrapper = exports.FieldInput = exports.FieldLabel = exports.FieldSet = exports.CustomLabel = exports.CropWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = require("./Button");

var _styleUtils = require("./styleUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  height: 20px;\n  line-height: 20px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  height: 50px;\n  border: 1px solid ", ";\n  width: ", "px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  padding: 15px 0;\n  height: 90px;\n  line-height: 100px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: top;\n  text-align: center;\n  padding: 0 20px;\n  cursor: pointer;\n  background: ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  position: relative;\n  font-weight: bold;\n  font-size: ", ";\n\n  ", "\n  ", "\n  \n  color: ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n  \n  > span {\n    color: ", " !important;\n   }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  padding: 0 5px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: ", ";\n  height: 30px;\n  padding: 6px 12px;\n  font-size: 12px;\n  line-height: 30px;\n  color: rgb(242, 242, 242);\n  background: ", ";\n  border-radius: 3px;\n  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 1px inset, rgba(82, 104, 109, 0.4) 0px 1px 0px;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  vertical-align: middle;\n  border: 0px solid transparent;\n  font-family: Roboto, sans-serif;\n  \n  :hover {\n    outline: none;\n  }\n  \n  :focus {\n    border: 1px solid ", ";\n    outline: none;\n    box-shadow: rgba(0, 112, 124, 0.5) 0px 1px 1px inset, rgba(0, 112, 124, 0.4) 0px 1px 0px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  margin-bottom: 5px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 100px;\n  padding-top: 10px;\n  text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  color: ", ";\n  height: 30px;\n  line-height: 30px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  overflow-x: auto;\n  overflow-y: hidden;\n  white-space: nowrap;\n  \n  ::-webkit-scrollbar {\n    height: 10px !important;\n  }\n   \n  ::-webkit-scrollbar-thumb {\n    background: #3b4d54;\n    border-radius: 5px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CropWrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.text.base;
});

exports.CropWrapper = CropWrapper;

var CustomLabel = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.theme.colors.text.base;
});

exports.CustomLabel = CustomLabel;

var FieldSet = _styledComponents.default.div(_templateObject3());

exports.FieldSet = FieldSet;

var FieldLabel = _styledComponents.default.label(_templateObject4());

exports.FieldLabel = FieldLabel;

var FieldInput = _styledComponents.default.input.attrs(function (props) {
  return {
    type: props.type ? props.type : 'text'
  };
})(_templateObject5(), function (props) {
  return props.fullSize ? '100%' : props.theme.fieldWidth;
}, function (props) {
  return props.dark ? props.theme.colors.dark.base : props.theme.colors.primary.lighter;
}, function (props) {
  return props.theme.colors.secondary.base;
});

exports.FieldInput = FieldInput;

var BlockRatioWrapper = _styledComponents.default.div(_templateObject6());

exports.BlockRatioWrapper = BlockRatioWrapper;
var BlockRatioBtn = (0, _styledComponents.default)(_Button.Button)(_templateObject7(), function (props) {
  return props.active ? props.theme.colors.text.light : props.theme.colors.text.mute;
});
exports.BlockRatioBtn = BlockRatioBtn;

var BlockRatioIcon = _styledComponents.default.span(_templateObject8(), function (props) {
  return props.fz || '28px';
}, function (props) {
  return (0, _styleUtils.getIconStyles)(props);
}, function (props) {
  return (0, _styleUtils.getIconByName)(props.active ? 'ratio' : 'no-ratio');
}, function (props) {
  return props.theme.textMuted;
});

exports.BlockRatioIcon = BlockRatioIcon;

var CropBox = _styledComponents.default.div(_templateObject9(), function (props) {
  return props.active ? props.theme.colors.primary.lighter : 'transparent';
});

exports.CropBox = CropBox;

var CropBoxInner = _styledComponents.default.div(_templateObject10());

exports.CropBoxInner = CropBoxInner;

var CropShape = _styledComponents.default.div(_templateObject11(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return 50 * props.ratio;
});

exports.CropShape = CropShape;

var CropLabel = _styledComponents.default.div(_templateObject12());

exports.CropLabel = CropLabel;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CropWrapper, "CropWrapper", "/home/user-js/work/photoEditor/projects/react/styledComponents/Crop.ui.js");

  __REACT_HOT_LOADER__.register(CustomLabel, "CustomLabel", "/home/user-js/work/photoEditor/projects/react/styledComponents/Crop.ui.js");

  __REACT_HOT_LOADER__.register(FieldSet, "FieldSet", "/home/user-js/work/photoEditor/projects/react/styledComponents/Crop.ui.js");

  __REACT_HOT_LOADER__.register(FieldLabel, "FieldLabel", "/home/user-js/work/photoEditor/projects/react/styledComponents/Crop.ui.js");

  __REACT_HOT_LOADER__.register(FieldInput, "FieldInput", "/home/user-js/work/photoEditor/projects/react/styledComponents/Crop.ui.js");

  __REACT_HOT_LOADER__.register(BlockRatioWrapper, "BlockRatioWrapper", "/home/user-js/work/photoEditor/projects/react/styledComponents/Crop.ui.js");

  __REACT_HOT_LOADER__.register(BlockRatioBtn, "BlockRatioBtn", "/home/user-js/work/photoEditor/projects/react/styledComponents/Crop.ui.js");

  __REACT_HOT_LOADER__.register(BlockRatioIcon, "BlockRatioIcon", "/home/user-js/work/photoEditor/projects/react/styledComponents/Crop.ui.js");

  __REACT_HOT_LOADER__.register(CropBox, "CropBox", "/home/user-js/work/photoEditor/projects/react/styledComponents/Crop.ui.js");

  __REACT_HOT_LOADER__.register(CropBoxInner, "CropBoxInner", "/home/user-js/work/photoEditor/projects/react/styledComponents/Crop.ui.js");

  __REACT_HOT_LOADER__.register(CropShape, "CropShape", "/home/user-js/work/photoEditor/projects/react/styledComponents/Crop.ui.js");

  __REACT_HOT_LOADER__.register(CropLabel, "CropLabel", "/home/user-js/work/photoEditor/projects/react/styledComponents/Crop.ui.js");
}();

;