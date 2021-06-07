(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_authentication_vue_vue_type_style_index_0_id_6ad2876d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_authentication_vue_vue_type_style_index_0_id_6ad2876d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_authentication_vue_vue_type_style_index_0_id_6ad2876d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_authentication_vue_vue_type_style_index_0_id_6ad2876d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/developers/api/authentication.vue?vue&type=template&id=6ad2876d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('docs',[_c('h1',[_vm._v("Authentication")]),_vm._v(" "),_c('p',[_vm._v("\n      In order to access protected endpoints, you'll need an "),_c('b',[_vm._v("access token")]),_vm._v("\n      which contains data on your user identity and permissions. Our\n      "),_c('router-link',{attrs:{"to":"/developers/api/clients"}},[_vm._v("\n        client packages\n      ")]),_vm._v("\n      handle authentication automatically, so we strongly recommend using those if\n      you can.\n      "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('b',[_vm._v("All endpoints on this page refer to auth.nexushub.co")])],1),_vm._v(" "),_c('h2',[_vm._v("Registration")]),_vm._v(" "),_c('p',[_vm._v("\n      Registration currently requires raw POST requests as we don't have any\n      UI built for it yet. In the future, registered users will be limited to\n      actual user accounts.\n    ")]),_vm._v(" "),_c('a',{staticClass:"btn-subtle active route",attrs:{"href":"https://auth.nexushub.co/register","target":"_blank"}},[_c('div',{staticClass:"verb"},[_vm._v("POST")]),_vm._v("\n      /register\n    ")]),_vm._v(" "),_c('h4',[_vm._v("Payload")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("{\n  user_id: <username>,\n  user_secret: <password>\n}\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('h4',[_vm._v("Response")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("{\n  user_key: <key>\n}\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('p',[_vm._v("\n      The "),_c('code',[_vm._v("user_key")]),_vm._v(" and "),_c('code',[_vm._v("user_secret")]),_vm._v(" is what you'll need\n      to get your access/refresh token, so make sure to save them somewhere safe.\n    ")]),_vm._v(" "),_c('h2',[_vm._v("Getting the access token")]),_vm._v(" "),_c('p',[_vm._v("\n      The access token is like a passport. It tells us who you are and what\n      you're allowed access. And just like a real passport, they expire way too\n      quickly. For us, this means they expire within "),_c('b',[_vm._v("1 hour")]),_vm._v(". Don't worry\n      though, you'll also be given a long-lived "),_c('code',[_vm._v("refresh_token")]),_vm._v(" on\n      your first authentication request.\n      "),_c('br'),_vm._v(" "),_c('br'),_vm._v("\n      This setup helps us mitigate the risk of an attacker abusing leaked access tokens\n      when accessing resource servers.\n    ")]),_vm._v(" "),_c('a',{staticClass:"btn-subtle active route",attrs:{"href":"https://auth.nexushub.co/authenticate","target":"_blank"}},[_c('div',{staticClass:"verb"},[_vm._v("POST")]),_vm._v("\n      /authenticate\n    ")]),_vm._v(" "),_c('h4',[_vm._v("Payload")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("{\n  user_key: <key>,\n  user_secret: <password>,\n}\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('h4',[_vm._v("Response")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("{\n  access_token: <access_token>,\n  refresh_token: <refresh_token>\n}\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('h2',[_vm._v("Refreshing your access token")]),_vm._v(" "),_c('p',[_vm._v("\n      If you've read everything before (I salute you sir, if you did), you'll\n      know that "),_c('b',[_vm._v("access tokens expire within 1 hour")]),_vm._v(". To refresh them, we\n      urge you to use the /refresh endpoint instead of authenticating directly again. If\n      the refresh token leaks, we can easily change it, but if your user\n      credentials leak, you might also have trouble on other services where you\n      use the same password.\n    ")]),_vm._v(" "),_c('a',{staticClass:"btn-subtle active route",attrs:{"href":"https://auth.nexushub.co/refresh","target":"_blank"}},[_c('div',{staticClass:"verb"},[_vm._v("POST")]),_vm._v("\n      /refresh\n    ")]),_vm._v(" "),_c('h4',[_vm._v("Payload")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("{\n refresh_token: <refresh_token>\n}\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('h4',[_vm._v("Response")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("{\n access_token: <access_token>\n}\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('h2',[_vm._v("Further documentation")]),_vm._v(" "),_c('p',[_vm._v("\n      For detailed docs, including some fancy visualized model, check out the\n      "),_c('a',{attrs:{"href":"https://github.com/cubic-js/cubic/tree/development/packages/auth"}},[_vm._v("official Github repo")]),_vm._v(".\n    ")])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/developers/api/authentication.vue?vue&type=template&id=6ad2876d&scoped=true&

// EXTERNAL MODULE: ./ui/sites/developers/api/index.vue + 9 modules
var api = __webpack_require__(119);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/developers/api/authentication.vue?vue&type=script&lang=js&

/* harmony default export */ var authenticationvue_type_script_lang_js_ = ({
  components: {
    docs: api["default"]
  }
});
// CONCATENATED MODULE: ./ui/sites/developers/api/authentication.vue?vue&type=script&lang=js&
 /* harmony default export */ var api_authenticationvue_type_script_lang_js_ = (authenticationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/sites/developers/api/authentication.vue?vue&type=style&index=0&id=6ad2876d&lang=scss&scoped=true&
var authenticationvue_type_style_index_0_id_6ad2876d_lang_scss_scoped_true_ = __webpack_require__(528);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/sites/developers/api/authentication.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  api_authenticationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6ad2876d",
  null
  
)

/* harmony default export */ var authentication = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);