"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CLOUDIMAGE_OPERATIONS = exports.UPLOADER = exports.FILTERS = exports.EFFECTS = exports.TOOLS = void 0;
// 'effects', 'filters', 'adjust', 'crop', 'resize', 'rotate'
var TOOLS = ['effects', 'filters', 'crop', 'resize', 'rotate']; // 'clarity', 'edge_enhance', 'emboss', 'grungy', 'hazy', 'lomo', 'noise', 'old_paper', 'posterize', 'radial_blur',
//   'sin_city', 'tilt_shift'

exports.TOOLS = TOOLS;
var EFFECTS = ['edge_enhance', 'emboss', 'grungy', 'hazy', 'lomo', 'radial_blur', 'sin_city', 'tilt_shift']; // 'colorize', 'contrast', 'cross_process', 'glow_sun', 'hdr_effect', 'jarques', 'love', 'old_boot',
//   'orange_peel', 'pin_hole', 'pleasant', 'sepia', 'sun_rise', 'vintage'

exports.EFFECTS = EFFECTS;
var FILTERS = ['cross_process', 'glow_sun', 'jarques', 'love', 'old_boot', 'orange_peel', 'pin_hole', 'sepia', 'sun_rise', 'vintage'];
exports.FILTERS = FILTERS;
var CLOUDIMAGE_OPERATIONS = ['crop', 'resize', 'rotate'];
exports.CLOUDIMAGE_OPERATIONS = CLOUDIMAGE_OPERATIONS;
var UPLOADER = {
  hideCloudimageSwitcher: true,
  processWithCloudimage: false,
  uploadWithCloudimageLink: false,
  elementId: null
};
exports.UPLOADER = UPLOADER;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TOOLS, "TOOLS", "/home/user-js/work/photoEditor/projects/react/config.js");

  __REACT_HOT_LOADER__.register(EFFECTS, "EFFECTS", "/home/user-js/work/photoEditor/projects/react/config.js");

  __REACT_HOT_LOADER__.register(FILTERS, "FILTERS", "/home/user-js/work/photoEditor/projects/react/config.js");

  __REACT_HOT_LOADER__.register(CLOUDIMAGE_OPERATIONS, "CLOUDIMAGE_OPERATIONS", "/home/user-js/work/photoEditor/projects/react/config.js");

  __REACT_HOT_LOADER__.register(UPLOADER, "UPLOADER", "/home/user-js/work/photoEditor/projects/react/config.js");
}();

;