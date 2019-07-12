"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switcher = exports.NextBtn = exports.PreviousBtn = exports.Footer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styleUtils = require("./styleUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 8px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #aaaaaa;\n  margin-bottom: 3px;\n  cursor: pointer;\n  cursor: pointer;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: calc(100% - 280px);\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    display: block; \n    width: 10px;\n    height: 10px;\n    margin: 5.5px;\n    background: ", ";\n    position: absolute; top: 0; bottom: 0;\n    right:  ", ";\n    border: 2px solid #36464d; \n    border-radius: 12px;\n    transition: all 0.3s ease-in 0s;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: block; \n  width: 200%; \n  margin-left: ", ";\n  transition: margin 0.3s ease-in 0s;\n  \n  &:before, &:after {\n    display: block; float: left; width: 50%; height: 19px; padding: 0; line-height: 19px;\n    font-size: 10px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;\n    box-sizing: border-box;\n  }\n  \n  &:before {\n    content: \"ON\";\n    padding-left: 10px !important;\n    background-color: #01717d; \n    color: #FFFFFF;\n  }\n  \n  &:after {\n    content: \"OFF\";\n    padding-right: 10px !important;\n    background-color: #1e262c; \n    color: #aaaaaa;\n    text-align: right;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: block; \n  overflow: hidden; \n  cursor: pointer;\n  border: 2px solid #36464d; \n  border-radius: 12px;\n  margin: 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  \n  :checked + .onoffswitch-label .onoffswitch-inner {\n    margin-left: 0;\n}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: relative; \n  display: inline-block;\n  vertical-align: middle;\n  width: 60px;\n  margin-bottom: 2px;\n  -webkit-user-select: none; \n  -moz-user-select: none; \n  -ms-user-select: none;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  \n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  \n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  height: 34px;\n  position: relative;\n  z-index: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Footer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.primary.light;
});

exports.Footer = Footer;

var PreviousBtn = _styledComponents.default.div(_templateObject2(), function (props) {
  return (0, _styleUtils.getIconStyles)(props);
}, (0, _styleUtils.getIconByName)('previous'), function (props) {
  return getActionIconStyle(props);
});

exports.PreviousBtn = PreviousBtn;

var NextBtn = _styledComponents.default.div(_templateObject3(), function (props) {
  return (0, _styleUtils.getIconStyles)(props);
}, (0, _styleUtils.getIconByName)('next'), function (props) {
  return getActionIconStyle(props);
});

exports.NextBtn = NextBtn;

var SwitcherWrapper = _styledComponents.default.div(_templateObject4());

var SwitcherInput = _styledComponents.default.input(_templateObject5());

var SwitcherLabel = _styledComponents.default.label(_templateObject6());

var SwitcherInner = _styledComponents.default.span(_templateObject7(), function (props) {
  return props.checked ? '0' : '-100%';
});

var SwitcherSwitch = _styledComponents.default.span(_templateObject8(), function (props) {
  return props.checked ? '#36464d' : '#36464d';
}, function (props) {
  return props.checked ? '0' : '37px';
});

var SwitcherBlock = _styledComponents.default.div(_templateObject9());

var SwitcherText = _styledComponents.default.div(_templateObject10());

var Switcher = function Switcher(_ref) {
  var id = _ref.id,
      handleChange = _ref.handleChange,
      text = _ref.text,
      checked = _ref.checked,
      otherProps = _objectWithoutProperties(_ref, ["id", "handleChange", "text", "checked"]);

  return _react.default.createElement(SwitcherBlock, null, _react.default.createElement(SwitcherWrapper, null, _react.default.createElement(SwitcherInput, {
    type: "checkbox",
    name: id,
    id: id,
    onChange: function onChange() {
      handleChange(!checked);
    },
    checked: checked
  }), _react.default.createElement(SwitcherLabel, {
    htmlFor: id
  }, _react.default.createElement(SwitcherInner, {
    checked: checked
  }), _react.default.createElement(SwitcherSwitch, {
    checked: checked
  }))), text && _react.default.createElement(SwitcherText, {
    onClick: function onClick() {
      handleChange(!checked);
    }
  }, text));
};

exports.Switcher = Switcher;

function getActionIconStyle(props) {
  return "\n    display: inline-block;\n    height: 34px;\n    width: 34px;\n    cursor: ".concat(props.muted ? 'not-allowed' : 'pointer', ";\n    text-align: center;\n    line-height: 34px;\n    border-right: 1px solid ").concat(props.theme.borderDarkColor, ";\n    \n    :hover {\n      background: ").concat(props.muted ? 'inherit' : props.theme.colors.primary.lighter, ";\n    }\n  ");
}

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Footer, "Footer", "/home/user-js/work/photoEditor/projects/react/styledComponents/Footer.ui.js");

  __REACT_HOT_LOADER__.register(PreviousBtn, "PreviousBtn", "/home/user-js/work/photoEditor/projects/react/styledComponents/Footer.ui.js");

  __REACT_HOT_LOADER__.register(NextBtn, "NextBtn", "/home/user-js/work/photoEditor/projects/react/styledComponents/Footer.ui.js");

  __REACT_HOT_LOADER__.register(SwitcherWrapper, "SwitcherWrapper", "/home/user-js/work/photoEditor/projects/react/styledComponents/Footer.ui.js");

  __REACT_HOT_LOADER__.register(SwitcherInput, "SwitcherInput", "/home/user-js/work/photoEditor/projects/react/styledComponents/Footer.ui.js");

  __REACT_HOT_LOADER__.register(SwitcherLabel, "SwitcherLabel", "/home/user-js/work/photoEditor/projects/react/styledComponents/Footer.ui.js");

  __REACT_HOT_LOADER__.register(SwitcherInner, "SwitcherInner", "/home/user-js/work/photoEditor/projects/react/styledComponents/Footer.ui.js");

  __REACT_HOT_LOADER__.register(SwitcherSwitch, "SwitcherSwitch", "/home/user-js/work/photoEditor/projects/react/styledComponents/Footer.ui.js");

  __REACT_HOT_LOADER__.register(SwitcherBlock, "SwitcherBlock", "/home/user-js/work/photoEditor/projects/react/styledComponents/Footer.ui.js");

  __REACT_HOT_LOADER__.register(SwitcherText, "SwitcherText", "/home/user-js/work/photoEditor/projects/react/styledComponents/Footer.ui.js");

  __REACT_HOT_LOADER__.register(Switcher, "Switcher", "/home/user-js/work/photoEditor/projects/react/styledComponents/Footer.ui.js");

  __REACT_HOT_LOADER__.register(getActionIconStyle, "getActionIconStyle", "/home/user-js/work/photoEditor/projects/react/styledComponents/Footer.ui.js");
}();

;