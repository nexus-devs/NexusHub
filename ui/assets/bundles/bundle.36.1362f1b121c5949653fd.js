(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_http_vue_vue_type_style_index_0_id_08fb4b5d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_http_vue_vue_type_style_index_0_id_08fb4b5d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_http_vue_vue_type_style_index_0_id_08fb4b5d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_http_vue_vue_type_style_index_0_id_08fb4b5d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/developers/api/http.vue?vue&type=template&id=08fb4b5d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('docs',[_c('h1',[_vm._v("HTTP connection")]),_vm._v(" "),_c('p',[_vm._v("\n      HTTP connections are pretty straight forward. Just use the http client\n      of your choice and GET, POST, PATCH, etc any URL you want. If you send\n      a payload, it's alsways gonna be in JSON.\n    ")]),_vm._v(" "),_c('h2',[_vm._v("Authentication")]),_vm._v(" "),_c('p',[_vm._v("\n      For requests that require authentication, put your access token in the\n      "),_c('code',[_vm._v("Authorization")]),_vm._v(" header as "),_c('code',[_vm._v("\"Bearer <your_token>\"")]),_vm._v(".\n    ")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('h4',[_vm._v("Authenticated request example (Node.js)")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("const request = require('request-promise')\n\n// Set it as default, so we don't have to do it on every single request.\nrequest.defaults({\n  baseUrl: 'https://api.nexushub.co'\n  headers: {\n    Authorization: 'Bearer <access_token>'\n  }\n})\n\nconst secretUserData = await request.get('/super/secret/userdata')\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('p',[_vm._v("\n      For more information on how to get an access token, check out the\n      "),_c('router-link',{attrs:{"to":"/developers/api/authentication"}},[_vm._v("\n        authentication guide\n      ")]),_vm._v(".\n    ")],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/developers/api/http.vue?vue&type=template&id=08fb4b5d&scoped=true&

// EXTERNAL MODULE: ./ui/sites/developers/api/index.vue + 9 modules
var api = __webpack_require__(118);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/developers/api/http.vue?vue&type=script&lang=js&

/* harmony default export */ var httpvue_type_script_lang_js_ = ({
  components: {
    docs: api["default"]
  }
});
// CONCATENATED MODULE: ./ui/sites/developers/api/http.vue?vue&type=script&lang=js&
 /* harmony default export */ var api_httpvue_type_script_lang_js_ = (httpvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/sites/developers/api/http.vue?vue&type=style&index=0&id=08fb4b5d&lang=scss&scoped=true&
var httpvue_type_style_index_0_id_08fb4b5d_lang_scss_scoped_true_ = __webpack_require__(528);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/sites/developers/api/http.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  api_httpvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "08fb4b5d",
  null
  
)

/* harmony default export */ var http = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);