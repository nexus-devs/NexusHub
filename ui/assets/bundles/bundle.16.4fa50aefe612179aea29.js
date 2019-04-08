(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _branding_vue_vue_type_template_id_30ee76aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(818);
/* harmony import */ var _branding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(253);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _branding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _branding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _branding_vue_vue_type_style_index_0_id_30ee76aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(733);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _branding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _branding_vue_vue_type_template_id_30ee76aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _branding_vue_vue_type_template_id_30ee76aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "30ee76aa",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notifications = __webpack_require__(153);

var _notifications2 = _interopRequireDefault(_notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    notifications: _notifications2.default
  },

  computed: {
    game: function game() {
      return this.$store.state.game.name;
    }
  },

  watch: {
    $route: function $route(to, from) {
      this.$store.commit('setActiveGame', to.fullPath.split('/')[1]);
    }
  },

  beforeCreate: function beforeCreate() {
    this.$store.commit('setActiveGame', this.$route.fullPath.split('/')[1]);
  },


  storeModule: {
    name: 'game',
    state: {
      name: ''
    },
    mutations: {
      setActiveGame: function setActiveGame(state, game) {
        state.name = game;
      }
    }
  }
};

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _general_vue_vue_type_template_id_7da1123c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168);
/* harmony import */ var _general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(144);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _general_vue_vue_type_style_index_0_id_7da1123c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(155);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _general_vue_vue_type_template_id_7da1123c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _general_vue_vue_type_template_id_7da1123c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "7da1123c",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_style_index_0_id_7da1123c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_style_index_0_id_7da1123c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_style_index_0_id_7da1123c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_style_index_0_id_7da1123c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/nav/warframe/general.vue?vue&type=template&id=7da1123c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"row"},[_c('div',{staticClass:"nav-l"},[_c('router-link',{attrs:{"to":"/warframe","exact":""}},[_c('img',{staticClass:"logo ico-h-20",attrs:{"src":"/img/brand/nexushub-logo-typeface.svg","alt":"Nexushub Logo"}})])],1),_vm._v(" "),_c('div',{staticClass:"nav-r"},[_c('notifications')],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/nav/warframe/general.vue?vue&type=template&id=7da1123c&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_2eba4017_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_2eba4017_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_2eba4017_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_2eba4017_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/header.vue?vue&type=template&id=2eba4017&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_c('img',{staticClass:"blobs",attrs:{"src":"/img/ui/header-blobs-outline.svg"}}),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"container"},[_vm._t("default")],2),_vm._v(" "),_vm._t("sub")],2)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"background-container"},[_c('div',{staticClass:"background"})])}]


// CONCATENATED MODULE: ./ui/components/ui/header.vue?vue&type=template&id=2eba4017&scoped=true&

// EXTERNAL MODULE: ./ui/components/ui/header.vue?vue&type=style&index=0&id=2eba4017&lang=scss&scoped=true&
var headervue_type_style_index_0_id_2eba4017_lang_scss_scoped_true_ = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./ui/components/ui/header.vue

var script = {}



/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "2eba4017",
  null
  
)

/* harmony default export */ var header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_branding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_branding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_branding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_branding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_branding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_branding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _appContent = __webpack_require__(152);

var _appContent2 = _interopRequireDefault(_appContent);

var _general = __webpack_require__(154);

var _general2 = _interopRequireDefault(_general);

var _sidebar = __webpack_require__(150);

var _sidebar2 = _interopRequireDefault(_sidebar);

var _search = __webpack_require__(151);

var _search2 = _interopRequireDefault(_search);

var _header = __webpack_require__(171);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    appContent: _appContent2.default,
    navigation: _general2.default,
    sidebar: _sidebar2.default,
    sidebarSearch: _search2.default,
    uiHeader: _header2.default
  }
};

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_branding_vue_vue_type_style_index_0_id_30ee76aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(255);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_branding_vue_vue_type_style_index_0_id_30ee76aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_branding_vue_vue_type_style_index_0_id_30ee76aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_branding_vue_vue_type_style_index_0_id_30ee76aa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/branding.vue?vue&type=template&id=30ee76aa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation'),_vm._v(" "),_c('sidebar',[_c('sidebar-search')],1),_vm._v(" "),_c('app-content',[_c('ui-header',[_c('img',{attrs:{"src":"/img/brand/nexushub-typeface-bw.svg","alt":"NexusHub"}}),_vm._v(" "),_c('h1',[_vm._v("BRAND")]),_vm._v(" "),_c('p',[_vm._v("\n        NexusHub is an agile, reactive brand that is always in motion, like\n        the real-time data that we're serving to gamers worldwide.\n        Feel free to use the assets below when you need to reference our service.\n      ")])]),_vm._v(" "),_c('div',{staticClass:"container"},[_c('section',[_c('h2',[_vm._v("NexusHub Logo")]),_vm._v(" "),_c('p',[_vm._v("\n          Please do not edit, distort, recolor, or otherwise repurpose the NexusHub logo.\n        ")]),_vm._v(" "),_c('div',{staticClass:"row-margin"},[_c('div',{staticClass:"col logo"},[_c('img',{attrs:{"src":"/img/brand/nexushub-logo-typeface-color.svg","alt":"Full Color NexusHub Logo"}}),_vm._v(" "),_c('div',{staticClass:"logo-download"},[_c('a',{attrs:{"href":"/img/brand/nexushub-logo-typeface-color.svg","download":""}},[_vm._v(".svg")]),_vm._v(" "),_c('a',{attrs:{"href":"/img/brand/nexushub-logo-typeface-color.png","download":""}},[_vm._v(".png")])])]),_vm._v(" "),_c('div',{staticClass:"col logo"},[_c('img',{attrs:{"src":"/img/brand/nexushub-logo-typeface-bw.svg","alt":"Black/White NexusHub Logo"}}),_vm._v(" "),_c('div',{staticClass:"logo-download"},[_c('a',{attrs:{"href":"/img/brand/nexushub-logo-typeface-bw.svg","download":""}},[_vm._v(".svg")]),_vm._v(" "),_c('a',{attrs:{"href":"/img/brand/nexushub-logo-typeface-bw.png","download":""}},[_vm._v(".png")])])]),_vm._v(" "),_c('div',{staticClass:"col logo"},[_c('img',{attrs:{"src":"/img/brand/nexushub-logo-typeface-b.svg","alt":"Full Color NexusHub Logo"}}),_vm._v(" "),_c('div',{staticClass:"logo-download"},[_c('a',{attrs:{"href":"/img/brand/nexushub-logo-typeface-b.svg","download":""}},[_vm._v(".svg")]),_vm._v(" "),_c('a',{attrs:{"href":"/img/brand/nexushub-logo-typeface-b.png","download":""}},[_vm._v(".png")])])])]),_vm._v(" "),_c('div',{staticClass:"row row-margin"},[_c('div',{staticClass:"col logo-alt"},[_c('img',{attrs:{"src":"/img/brand/nexushub-logo-color.svg","alt":"Full Color NexusHub Logo"}}),_vm._v(" "),_c('div',{staticClass:"logo-download"},[_c('a',{attrs:{"href":"/img/brand/nexushub-logo-color.svg","download":""}},[_vm._v(".svg")]),_vm._v(" "),_c('a',{attrs:{"href":"/img/brand/nexushub-logo-color.png","download":""}},[_vm._v(".png")])])]),_vm._v(" "),_c('div',{staticClass:"col logo-alt"},[_c('img',{attrs:{"src":"/img/brand/nexushub-logo-typeface-v-color.svg","alt":"Full Color NexusHub Logo"}}),_vm._v(" "),_c('div',{staticClass:"logo-download"},[_c('a',{attrs:{"href":"/img/brand/nexushub-logo-typeface-v-color.svg","download":""}},[_vm._v(".svg")]),_vm._v(" "),_c('a',{attrs:{"href":"/img/brand/nexushub-logo-typeface-v-color.png","download":""}},[_vm._v(".png")])])]),_vm._v(" "),_c('div',{staticClass:"col logo-alt"},[_c('img',{attrs:{"src":"/img/brand/nexushub-logo-bw.svg","alt":"Black/White NexusHub Logo"}}),_vm._v(" "),_c('div',{staticClass:"logo-download"},[_c('a',{attrs:{"href":"/img/brand/nexushub-logo-bw.svg","download":""}},[_vm._v(".svg")]),_vm._v(" "),_c('a',{attrs:{"href":"/img/brand/nexushub-logo-bw.png","download":""}},[_vm._v(".png")])])]),_vm._v(" "),_c('div',{staticClass:"col logo-alt"},[_c('img',{attrs:{"src":"/img/brand/nexushub-logo-typeface-v-bw.svg","alt":"Black/White NexusHub Logo"}}),_vm._v(" "),_c('div',{staticClass:"logo-download"},[_c('a',{attrs:{"href":"/img/brand/nexushub-logo-typeface-v-bw.svg","download":""}},[_vm._v(".svg")]),_vm._v(" "),_c('a',{attrs:{"href":"/img/brand/nexushub-logo-typeface-v-bw.png","download":""}},[_vm._v(".png")])])]),_vm._v(" "),_c('div',{staticClass:"col logo-alt"},[_c('img',{attrs:{"src":"/img/brand/nexushub-logo-b.svg","alt":"Full Color NexusHub Logo"}}),_vm._v(" "),_c('div',{staticClass:"logo-download"},[_c('a',{attrs:{"href":"/img/brand/nexushub-logo-b.svg","download":""}},[_vm._v(".svg")]),_vm._v(" "),_c('a',{attrs:{"href":"/img/brand/nexushub-logo-b.png","download":""}},[_vm._v(".png")])])]),_vm._v(" "),_c('div',{staticClass:"col logo-alt"},[_c('img',{attrs:{"src":"/img/brand/nexushub-logo-typeface-v-b.svg","alt":"Full Color NexusHub Logo"}}),_vm._v(" "),_c('div',{staticClass:"logo-download"},[_c('a',{attrs:{"href":"/img/brand/nexushub-logo-typeface-v-b.svg","download":""}},[_vm._v(".svg")]),_vm._v(" "),_c('a',{attrs:{"href":"/img/brand/nexushub-logo-typeface-v-b.png","download":""}},[_vm._v(".png")])])])])]),_vm._v(" "),_c('section',[_c('h2',[_vm._v("NexusHub Colors")]),_vm._v(" "),_c('p',[_vm._v("\n          Keep in mind that each color in our palette comes in two shades for\n          different situations.\n        ")]),_vm._v(" "),_c('div',{staticClass:"row-margin"},[_c('div',{staticClass:"col-b color"},[_c('div',{staticClass:"primary-shade green"},[_c('span'),_vm._v(" "),_c('span',[_vm._v("#39e56f")])]),_vm._v(" "),_c('div',{staticClass:"sub-shade green-shade"},[_c('span',[_vm._v("#68d891")])])]),_vm._v(" "),_c('div',{staticClass:"col-b color"},[_c('div',{staticClass:"primary-shade blue"},[_c('span'),_vm._v(" "),_c('span',[_vm._v("#15ced6")])]),_vm._v(" "),_c('div',{staticClass:"sub-shade blue-shade"},[_c('span',[_vm._v("#11acb2")])])]),_vm._v(" "),_c('div',{staticClass:"col-b color"},[_c('div',{staticClass:"primary-shade grey"},[_c('span'),_vm._v(" "),_c('span',[_vm._v("#8b97a8")])]),_vm._v(" "),_c('div',{staticClass:"sub-shade grey-shade"},[_c('span',[_vm._v("#2d323b")])])]),_vm._v(" "),_c('div',{staticClass:"col-b color"},[_c('div',{staticClass:"primary-shade dark"},[_c('span'),_vm._v(" "),_c('span',[_vm._v("#21232a")])]),_vm._v(" "),_c('div',{staticClass:"sub-shade dark-shade"},[_c('span',[_vm._v("#101115")])])])])])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/branding.vue?vue&type=template&id=30ee76aa&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);