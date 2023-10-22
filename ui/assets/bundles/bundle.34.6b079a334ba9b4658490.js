(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_a94545ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_a94545ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_a94545ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_a94545ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/contact.vue?vue&type=template&id=a94545ac&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation'),_vm._v(" "),_c('app-content',[_c('ui-header',[_c('h1',[_vm._v("Hey "+_vm._s(_vm.user)+"!")]),_vm._v(" "),_c('p',[_vm._v("Wanna talk with us, or just feeling lonely? Hit us up on one of the channels below!")]),_vm._v(" "),_c('a',{staticClass:"interactive comm discord",attrs:{"href":"https://discord.gg/TCxe6P4","target":"_blank"}},[_c('img',{attrs:{"src":"/img/contact/discord.svg","alt":"Discord"}}),_vm._v(" "),_c('span',[_vm._v("Discord")])]),_vm._v(" "),_c('a',{staticClass:"interactive comm mail",attrs:{"href":"mailto:contact@nexus-stats.com?Subject=Regarding%20NexusHub"}},[_c('img',{attrs:{"src":"/img/contact/mail.svg","alt":"Mail"}}),_vm._v(" "),_c('span',[_vm._v("Good ol' Mail")])])]),_vm._v(" "),_c('div',{staticClass:"container"},[_c('section',[_c('img',{staticClass:"ico-h-24",attrs:{"src":"/img/ui/info.svg","alt":"Information about Discord"}}),_vm._v(" "),_c('span',[_vm._v("Please note: Discord is the superior "),_c('s',[_vm._v("siege engine")]),_vm._v(" method of communication.")])])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/contact.vue?vue&type=template&id=a94545ac&scoped=true&

// EXTERNAL MODULE: ./ui/app-content.vue + 2 modules
var app_content = __webpack_require__(46);

// EXTERNAL MODULE: ./ui/components/seo/meta.js
var meta = __webpack_require__(47);

// EXTERNAL MODULE: ./ui/components/ui/nav/warframe.vue + 4 modules
var warframe = __webpack_require__(64);

// EXTERNAL MODULE: ./ui/components/ui/header.vue + 2 modules
var header = __webpack_require__(195);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/contact.vue?vue&type=script&lang=js&




/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  components: {
    navigation: warframe["a" /* default */],
    appContent: app_content["a" /* default */],
    uiHeader: header["a" /* default */]
  },
  computed: {
    user() {
      if (this.$store.state.user) {
        return this.$store.state.user.name;
      } else {
        return 'there';
      }
    }

  },
  head: {
    title: 'NexusHub · Contact',
    meta: Object(meta["a" /* default */])({
      title: 'Contact us!',
      description: 'Get in touch with the NexusHub team. You can contact us through Mail or Discord.'
    })
  }
});
// CONCATENATED MODULE: ./ui/sites/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var sites_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/sites/contact.vue?vue&type=style&index=0&id=a94545ac&lang=scss&scoped=true&
var contactvue_type_style_index_0_id_a94545ac_lang_scss_scoped_true_ = __webpack_require__(526);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/sites/contact.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sites_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "a94545ac",
  null
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);