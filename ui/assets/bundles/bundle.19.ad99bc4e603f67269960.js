(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(192), __esModule: true };

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = __webpack_require__(35);

var _theme2 = _interopRequireDefault(_theme);

var _progress = __webpack_require__(80);

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    progressbar: _progress2.default
  },

  computed: {
    theme: function theme() {
      return (0, _theme2.default)(this);
    }
  }
};

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"module":"warframe_module_kCFyr","header":"warframe_header_2nKQS","footer":"warframe_footer_1kr-S"};

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"module":"wow-classic_module_2l8-b","header":"wow-classic_header_g9KLN","footer":"wow-classic_footer_19f0t"};

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_vue_vue_type_template_id_820c27de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(170);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(196);
/* harmony import */ var _module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(197);
/* harmony import */ var _module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(198);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);










function injectStyles (context) {
  
  this["warframe"] = (_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"])
this["wow-classic"] = (_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"].locals || _module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"])

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(
  _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _module_vue_vue_type_template_id_820c27de_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _module_vue_vue_type_template_id_820c27de_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "820c27de",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
__webpack_require__(77);
module.exports = __webpack_require__(193);


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var get = __webpack_require__(79);
module.exports = __webpack_require__(2).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(173);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/module.vue?vue&type=template&id=820c27de&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"module",class:_vm.theme.module},[_c('div',{staticClass:"header",class:_vm.theme.header},[_vm._t("header")],2),_vm._v(" "),_c('div',{staticClass:"body"},[_vm._t("body")],2),_vm._v(" "),_c('div',{staticClass:"footer",class:_vm.theme.footer},[_vm._t("footer")],2),_vm._v(" "),_c('progressbar',{ref:"progress"})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/module.vue?vue&type=template&id=820c27de&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(425);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _appContent = __webpack_require__(177);

var _appContent2 = _interopRequireDefault(_appContent);

var _meta = __webpack_require__(176);

var _meta2 = _interopRequireDefault(_meta);

var _module2 = __webpack_require__(175);

var _module3 = _interopRequireDefault(_module2);

var _wowClassic = __webpack_require__(391);

var _wowClassic2 = _interopRequireDefault(_wowClassic);

var _utility = __webpack_require__(201);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    appContent: _appContent2.default,
    module: _module3.default,
    navigation: _wowClassic2.default
  },

  computed: {
    serverlist: function serverlist() {
      return { EU: this.$store.state.servers.EU, US: this.$store.state.servers.US };
    }
  },

  created: function created() {
    this.serverSlug = _utility2.default.serverSlug;
  },


  head: {
    title: 'NexusHub · All WoW Classic Auction House data in one place!',
    meta: (0, _meta2.default)({
      title: 'NexusHub · All WoW Classic Auction House data in one place!',
      description: 'Get up-to-date data and prices from all World of Warcraft: Classic servers and auction houses!',
      image: 'https://nexushub.co/img/brand/og-banner-wow-classic.jpg'
    })
  }
};

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_page_vue_vue_type_style_index_0_id_315dd20a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(441);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_page_vue_vue_type_style_index_0_id_315dd20a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_page_vue_vue_type_style_index_0_id_315dd20a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_page_vue_vue_type_style_index_0_id_315dd20a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _landing_page_vue_vue_type_template_id_315dd20a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(986);
/* harmony import */ var _landing_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(424);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _landing_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _landing_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _landing_page_vue_vue_type_style_index_0_id_315dd20a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(856);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _landing_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _landing_page_vue_vue_type_template_id_315dd20a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _landing_page_vue_vue_type_template_id_315dd20a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "315dd20a",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/wow-classic/landing-page.vue?vue&type=template&id=315dd20a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation',{attrs:{"landing-page":true}}),_vm._v(" "),_c('app-content',[_c('div',{staticClass:"landing-page"},[_c('div',{staticClass:"background-container"},[_c('div',{staticClass:"background"})]),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"nexushub-logo"},[_c('div',{staticClass:"search-logo"},[_c('img',{staticClass:"logo",attrs:{"src":"/img/brand/nexushub-logo-typeface-wow-classic.svg","alt":"Nexushub Logo"}}),_vm._v(" "),_c('span',[_vm._v(".co")])]),_vm._v(" "),_c('div',{staticClass:"tsm-logo"},[_c('span',[_vm._v("Powered by")]),_vm._v(" "),_c('img',{staticClass:"logo",attrs:{"src":"/img/wow-classic/tsm-logo.svg","alt":"TradeSkillMaster Logo"}})])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('h2',{staticClass:"subtitle"},[_vm._v("\n            Select your WoW Classic server\n          ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"server-box"},[_c('module',[_c('template',{slot:"header"},[_c('h2',[_vm._v("Europe")])]),_vm._v(" "),_c('template',{slot:"body"},[_c('div',{staticClass:"server-list"},_vm._l((_vm.serverlist.EU),function(s){return _c('div',{key:s,staticClass:"server"},[_c('span',[_vm._v(_vm._s(s))]),_vm._v(" "),_c('div',{staticClass:"logo-wrapper"},[_c('router-link',{attrs:{"to":("/wow-classic/" + (_vm.serverSlug(s)) + "-alliance")}},[_c('img',{staticClass:"logo",attrs:{"src":"/img/wow-classic/ui/alliance.svg","alt":"Alliance Logo"}})]),_vm._v(" "),_c('router-link',{attrs:{"to":("/wow-classic/" + (_vm.serverSlug(s)) + "-horde")}},[_c('img',{staticClass:"logo",attrs:{"src":"/img/wow-classic/ui/horde.svg","alt":"Horde Logo"}})])],1)])}),0)])],2)],1),_vm._v(" "),_c('div',{staticClass:"server-box"},[_c('module',[_c('template',{slot:"header"},[_c('h2',[_vm._v("United States")])]),_vm._v(" "),_c('template',{slot:"body"},[_c('div',{staticClass:"server-list"},_vm._l((_vm.serverlist.US),function(s){return _c('div',{key:s,staticClass:"server"},[_c('span',[_vm._v(_vm._s(s))]),_vm._v(" "),_c('div',{staticClass:"logo-wrapper"},[_c('router-link',{attrs:{"to":("/wow-classic/" + (_vm.serverSlug(s)) + "-alliance")}},[_c('img',{staticClass:"logo",attrs:{"src":"/img/wow-classic/ui/alliance.svg","alt":"Alliance Logo"}})]),_vm._v(" "),_c('router-link',{attrs:{"to":("/wow-classic/" + (_vm.serverSlug(s)) + "-horde")}},[_c('img',{staticClass:"logo",attrs:{"src":"/img/wow-classic/ui/horde.svg","alt":"Horde Logo"}})])],1)])}),0)])],2)],1)])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/wow-classic/landing-page.vue?vue&type=template&id=315dd20a&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);