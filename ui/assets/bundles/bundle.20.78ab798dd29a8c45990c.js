(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_3ef45bc3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(140);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_3ef45bc3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_3ef45bc3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_3ef45bc3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/discord-bot/overview.vue?vue&type=template&id=3ef45bc3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('docs',[_c('h1',[_vm._v("Overview")]),_vm._v(" "),_c('h2',[_vm._v("Setup - Node.js")]),_vm._v(" "),_c('h4',[_vm._v("Installing")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("npm i nexushub-client")]),_vm._v("\n    ")]),_vm._v(" "),_c('h4',[_vm._v("Setting up the Client")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("const Nexus = require('nexushub-client')\nconst nexus = new Nexus({\n  user_key,\n  user_secret\n})\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('p',[_vm._v("\n      user_key can be found in your profile, while user_secret is your password.\n      User accounts are not required at this point, but will give access to\n      certain endpoints concerning your own user data at a later date.\n    ")]),_vm._v(" "),_c('h2',[_vm._v("Basic Usage")]),_vm._v(" "),_c('h4',[_vm._v("GET example")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("const res = await nexus.get('/foo') // Returns 'bar'")]),_vm._v("\n    ")]),_vm._v(" "),_c('h4',[_vm._v("POST, DELETE, etc example")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("const res = await nexus.post('/post', someObject) // Returns the object")]),_vm._v("\n    ")]),_vm._v(" "),_c('h4',[_vm._v("Pub/Sub example")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("nexus.subscribe('/warframe/v1/orders/opm', opm => {\n  console.log(opm) // Logs orders per minute every time a new order comes in.\n})\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('h2',[_vm._v("Advanced usage")]),_vm._v(" "),_c('p',[_vm._v("For full docs, check out the official "),_c('a',{attrs:{"href":"https://github.com/nexus-devs/nexus-stats-api"}},[_vm._v("Github repo")]),_vm._v(".")])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/discord-bot/overview.vue?vue&type=template&id=3ef45bc3&scoped=true&

// EXTERNAL MODULE: ./ui/sites/discord-bot/index.vue + 9 modules
var discord_bot = __webpack_require__(581);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/discord-bot/overview.vue?vue&type=script&lang=js&

/* harmony default export */ var overviewvue_type_script_lang_js_ = ({
  components: {
    docs: discord_bot["default"]
  }
});
// CONCATENATED MODULE: ./ui/sites/discord-bot/overview.vue?vue&type=script&lang=js&
 /* harmony default export */ var discord_bot_overviewvue_type_script_lang_js_ = (overviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/sites/discord-bot/overview.vue?vue&type=style&index=0&id=3ef45bc3&lang=scss&scoped=true&
var overviewvue_type_style_index_0_id_3ef45bc3_lang_scss_scoped_true_ = __webpack_require__(534);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/sites/discord-bot/overview.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  discord_bot_overviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "3ef45bc3",
  null
  
)

/* harmony default export */ var overview = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);