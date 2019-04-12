(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_c03a9420_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(771);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(365);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_c03a9420_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(688);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_c03a9420_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_c03a9420_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "c03a9420",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      visible: false
    };
  },


  computed: {
    unread: function unread() {
      return this.$store.state.notifications.unread;
    }
  },

  watch: {
    unread: function unread() {
      if (this.unread.length) {
        this.visible = true;
      }
    }
  },

  mounted: function mounted() {
    this.listen();
  },


  methods: {
    listen: function listen() {
      var _this = this;

      this.$cubic.subscribe('/notifications', function (notification) {
        if (notification.game === _this.$store.state.game.name || notification.game === 'global') {
          _this.$store.commit('addNotification', notification.message);
        }
      });
    },
    toggle: function toggle() {
      this.visible = !this.visible;
    },
    dismiss: function dismiss(notification) {
      this.$store.commit('removeNotification', notification);
    }
  },

  storeModule: {
    name: 'notifications',
    state: {
      unread: []
    },
    mutations: {
      addNotification: function addNotification(state, notification) {
        state.unread.push(notification);
      },
      removeNotification: function removeNotification(state, notification) {
        state.unread.splice(state.unread.findIndex(function (n) {
          return n.title === notification.title;
        }), 1);
      }
    }
  }
};

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/app-content.vue?vue&type=template&id=7d4a4eee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container"},[_c('transition',{attrs:{"appear":"","name":"zoom"}},[_c('div',[_c('div',{staticClass:"app-content"},[_vm._t("default")],2)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/app-content.vue?vue&type=template&id=7d4a4eee&

// EXTERNAL MODULE: ./ui/app-content.vue?vue&type=style&index=0&lang=scss&
var app_contentvue_type_style_index_0_lang_scss_ = __webpack_require__(164);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./ui/app-content.vue

var script = {}



/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var app_content = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notifications_vue_vue_type_template_id_3d0f2c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(145);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _notifications_vue_vue_type_style_index_0_id_3d0f2c28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(166);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notifications_vue_vue_type_template_id_3d0f2c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _notifications_vue_vue_type_template_id_3d0f2c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "3d0f2c28",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_id_3d0f2c28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_id_3d0f2c28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_id_3d0f2c28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_id_3d0f2c28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/notifications.vue?vue&type=template&id=3d0f2c28&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"notifications"},[_c('div',{staticClass:"nav-ico interactive",on:{"click":_vm.toggle}},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/notifications.svg","alt":"Notifications"}})]),_vm._v(" "),_c('div',{staticClass:"unread-bubble",class:{ unread: _vm.unread.length }}),_vm._v(" "),_c('div',{staticClass:"notification-container",class:{ visible: _vm.visible }},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"notification-body"},[(_vm.unread.length)?_c('div',{staticClass:"notification-wrapper"},_vm._l((_vm.unread),function(notification){return _c('div',{key:notification.title,staticClass:"notification"},[_c('h4',[_vm._v(_vm._s(notification.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(notification.body))]),_vm._v(" "),(notification.buttons)?_c('div',{staticClass:"footer"},_vm._l((notification.buttons),function(button){return _c('button',{key:button.text,on:{"click":button.fn}},[_vm._v(_vm._s(button.text))])}),0):_vm._e(),_vm._v(" "),_c('img',{staticClass:"dismiss ico-h-20 interactive",attrs:{"src":"/img/ui/close.svg","alt":"Dismiss"},on:{"click":function($event){return _vm.dismiss(notification)}}})])}),0):_c('div',{staticClass:"no-notifcations"},[_vm._v("\n          No notifications. We have dispatched a pigeon to deliver the latest news soon 🕊️\n        ")])])])]),_vm._v(" "),_c('div',{staticClass:"hide",class:{ visible: _vm.visible },on:{"click":_vm.toggle}})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"notification-header"},[_c('span',[_vm._v("Notifications")])])}]


// CONCATENATED MODULE: ./ui/components/ui/notifications.vue?vue&type=template&id=3d0f2c28&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notifications = __webpack_require__(165);

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

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _developers_vue_vue_type_template_id_a22b075a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(476);
/* harmony import */ var _developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(185);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _developers_vue_vue_type_style_index_0_id_a22b075a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(340);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _developers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _developers_vue_vue_type_template_id_a22b075a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _developers_vue_vue_type_template_id_a22b075a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "a22b075a",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_style_index_0_id_a22b075a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(187);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_style_index_0_id_a22b075a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_style_index_0_id_a22b075a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_style_index_0_id_a22b075a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(366);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _appContent = __webpack_require__(148);

var _appContent2 = _interopRequireDefault(_appContent);

var _developers = __webpack_require__(339);

var _developers2 = _interopRequireDefault(_developers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    navigation: _developers2.default,
    appContent: _appContent2.default
  }
};

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/nav/developers.vue?vue&type=template&id=a22b075a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"row"},[_c('div',{staticClass:"col nav-l"},[_c('router-link',{attrs:{"to":"/warframe","exact":""}},[_c('img',{staticClass:"logo ico-h-20",attrs:{"src":"/img/brand/nexushub-logo-typeface.svg","alt":"Nexushub Logo"}})]),_vm._v(" "),_c('router-link',{staticClass:"sub",attrs:{"to":"/developers"}},[_vm._v("Developers")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/developers/api"}},[_vm._v("API Docs")])],1),_vm._v(" "),_c('div',{staticClass:"col nav-r"},[_c('notifications')],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/nav/developers.vue?vue&type=template&id=a22b075a&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c03a9420_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(367);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c03a9420_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c03a9420_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c03a9420_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/developers/index.vue?vue&type=template&id=c03a9420&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation'),_vm._v(" "),_c('app-content',[_c('section',[_c('div',{staticClass:"container"},[_c('h1',[_vm._v("\n          Build awesome tools that reach thousands of gamers with\n          "),_c('router-link',{attrs:{"to":"/developers/api/Warframe-Orders/orders"}},[_vm._v("trading data")]),_vm._v(",\n          "),_c('router-link',{attrs:{"to":"/developers/api/Warframe-Items/base"}},[_vm._v("item data")]),_vm._v(", and\n          "),_c('router-link',{attrs:{"to":"/developers/api/General/foo"}},[_vm._v("anything else on this platform")]),_vm._v(".\n        ")],1),_vm._v(" "),_c('p',[_vm._v("\n          These pages are made to help you build up your tools with data from NexusHub.\n        ")]),_vm._v(" "),_c('router-link',{staticClass:"btn-outline",attrs:{"to":"/developers/api/General/foo"}},[_vm._v("\n          API Docs\n        ")])],1)]),_vm._v(" "),_c('section',[_c('div',{staticClass:"container sign-deal-with-the-devil-kappa123"},[_c('h2',[_vm._v("Feeling especially awesome?")]),_vm._v(" "),_c('p',[_vm._v("\n          If you think your tool would be a good fit as an addition to NexusHub,\n          "),_c('router-link',{attrs:{"to":"/contact"}},[_vm._v("let us know!")]),_vm._v(" We'd love to help you\n          integrate and maintain your idea on this site and serve it to millions of people,\n          while "),_c('b',[_vm._v("you")]),_vm._v(" get the revenue in return.\n        ")],1),_vm._v(" "),_c('a',{staticClass:"btn-outline",attrs:{"href":"https://discord.gg/TCxe6P4","target":"_blank"}},[_vm._v("\n          Join us on Discord\n        ")])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/developers/index.vue?vue&type=template&id=c03a9420&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);