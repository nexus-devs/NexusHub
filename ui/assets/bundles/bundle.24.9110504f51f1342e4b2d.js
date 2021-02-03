(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"unread-bubble":"warframe_unread-bubble_3a5aL","notification-header":"warframe_notification-header_1ejVz","notification-body":"warframe_notification-body_n9BTg","notification":"warframe_notification_2Xqvq","footer":"warframe_footer_1YKJU"};

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"unread-bubble":"wow-classic_unread-bubble_3Fi-7","notification-header":"wow-classic_notification-header_1QwD6","notification-body":"wow-classic_notification-body_3a5tH","notification":"wow-classic_notification_O8uYh","footer":"wow-classic_footer_2uhST"};

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/app-content.vue?vue&type=template&id=3ce135d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container"},[_c('transition',{attrs:{"appear":"","name":"zoom"}},[_c('div',[_c('main',{staticClass:"app-content"},[_vm._t("default")],2)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/app-content.vue?vue&type=template&id=3ce135d2&

// EXTERNAL MODULE: ./ui/app-content.vue?vue&type=style&index=0&lang=scss&
var app_contentvue_type_style_index_0_lang_scss_ = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

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

/* harmony default export */ var app_content = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function meta(options) {
  const required = ['description', 'title'];

  for (const key of required) {
    if (!options[key]) {
      throw new Error(`Missing ${key} option in meta function.`);
    }
  }

  return [{
    name: 'description',
    property: 'og:description',
    itemprop: 'description',
    content: options.description
  }, {
    property: 'og:title',
    itemprop: 'name',
    content: options.title
  }, {
    property: 'og:type',
    content: options.type || 'website'
  }, {
    property: 'og:image',
    itemprop: 'image primaryImageOfPage',
    content: options.image || 'https://nexushub.co/img/brand/og-banner.jpg'
  }, {
    property: 'og:site_name',
    content: 'NexusHub'
  }];
}

/* harmony default export */ __webpack_exports__["a"] = (meta);

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"blocked":"warframe_blocked_3JQnD"};

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"blocked":"wow-classic_blocked_3Rr6k"};

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/notifications.vue?vue&type=template&id=ecd7c010&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"notifications"},[_c('div',{staticClass:"nav-ico interactive",on:{"click":_vm.toggle}},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/notifications.svg","alt":"Notifications"}})]),_vm._v(" "),_c('div',{staticClass:"unread-bubble",class:[{ unread: _vm.notifications.unread.length }, _vm.theme['unread-bubble']]}),_vm._v(" "),_c('div',{staticClass:"notification-container",class:{ visible: _vm.visible }},[_c('div',{staticClass:"notification-header",class:_vm.theme['notification-header']},[_c('span',[_vm._v("Notifications")])]),_vm._v(" "),_c('div',{staticClass:"notification-body",class:_vm.theme['notification-body']},[(_vm.notifications.unread.length || _vm.notifications.hasread.length)?_c('div',{staticClass:"notification-wrapper"},[_vm._l((_vm.notifications.unread),function(notification){return _c('div',{key:notification.message.title + notification.message.body.length,staticClass:"notification",class:_vm.theme.notification},[_c('h4',[_vm._v(_vm._s(notification.message.title))]),_vm._v(" "),_c('p',{domProps:{"innerHTML":_vm._s(notification.message.body)}}),_vm._v(" "),(notification.buttons)?_c('div',{staticClass:"footer",class:_vm.theme.footer},_vm._l((notification.buttons),function(button){return _c('button',{key:button.text,on:{"click":button.fn}},[_vm._v("\n                "+_vm._s(button.text)+"\n              ")])}),0):_vm._e(),_vm._v(" "),_c('img',{staticClass:"dismiss ico-h-20 interactive",attrs:{"src":"/img/ui/close.svg","alt":"Dismiss"},on:{"click":function($event){return _vm.dismiss(notification)}}})])}),_vm._v(" "),_vm._l((_vm.notifications.hasread),function(notification){return _c('div',{key:notification.message.title + notification.message.body.length,staticClass:"notification",class:_vm.theme.notification},[_c('h4',[_vm._v(_vm._s(notification.message.title))]),_vm._v(" "),_c('p',{domProps:{"innerHTML":_vm._s(notification.message.body)}}),_vm._v(" "),(notification.buttons)?_c('div',{staticClass:"footer",class:_vm.theme.footer},_vm._l((notification.buttons),function(button){return _c('button',{key:button.text,on:{"click":button.fn}},[_vm._v("\n                "+_vm._s(button.text)+"\n              ")])}),0):_vm._e(),_vm._v(" "),_c('img',{staticClass:"dismiss ico-h-20 interactive",attrs:{"src":"/img/ui/close.svg","alt":"Dismiss"},on:{"click":function($event){return _vm.dismiss(notification)}}})])})],2):_c('div',{staticClass:"no-notifcations"},[_vm._v("\n          No notifications. We have dispatched a pigeon to deliver the latest news soon 🕊️\n        ")])])])]),_vm._v(" "),_c('div',{staticClass:"hide",class:{ visible: _vm.visible },on:{"click":_vm.toggle}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/notifications.vue?vue&type=template&id=ecd7c010&scoped=true&

// EXTERNAL MODULE: ./ui/components/_theme.js
var _theme = __webpack_require__(2);
var _theme_default = /*#__PURE__*/__webpack_require__.n(_theme);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/notifications.vue?vue&type=script&lang=js&

/* harmony default export */ var notificationsvue_type_script_lang_js_ = ({
  data() {
    return {
      visible: false
    };
  },

  computed: {
    theme() {
      return _theme_default()(this);
    },

    notifications() {
      const notifications = this.$store.state.notifications.all;
      const res = {
        hasread: [],
        unread: []
      };

      for (const notification of notifications) {
        if (!this.isValidGame(notification)) continue;
        const id = `${notification.message.title}-l${notification.message.body.length}`;
        if (localStorage.getItem(`notification_${id}`) === 'removed') continue;

        if (localStorage.getItem(`notification_${id}`) !== 'seen') {
          res.unread.push(notification);
        } else {
          res.hasread.push(notification);
        }
      }

      return res;
    }

  },

  async mounted() {
    this.listen();
    const notifications = await this.$cubic.get('/notifications/v1');

    for (const notification of notifications) {
      this.$store.commit('addNotification', notification);
    }
  },

  methods: {
    listen() {
      this.$cubic.subscribe('/notifications/v1', notification => {
        if (this.isValidGame(notification)) {
          this.visible = true;
          this.$store.commit('addNotification', notification);
        }
      });
    },

    toggle() {
      this.visible = !this.visible;

      if (!this.visible) {
        for (const notification of this.notifications.unread) {
          const id = `${notification.message.title}-l${notification.message.body.length}`;
          if (!localStorage.getItem(`notification_${id}`)) localStorage.setItem(`notification_${id}`, 'seen');
        }

        this.$store.commit('forceUpdateNotifications');
      }
    },

    dismiss(notification) {
      this.$store.commit('removeNotification', notification);
    },

    isValidGame(notification) {
      const game = this.$store.state.game.name;
      return notification.game === 'global' || notification.game === '' || notification.game === game;
    }

  },
  storeModule: {
    name: 'notifications',
    state: {
      all: []
    },
    mutations: {
      addNotification(state, notification) {
        const id = `${notification.message.title}-l${notification.message.body.length}`;

        if (!(localStorage.getItem(`notification_${id}`) === 'removed') && !state.all.find(n => n.message.title === notification.message.title && n.message.body === notification.message.body)) {
          state.all.push(notification);
        }
      },

      removeNotification(state, notification) {
        const id = `${notification.message.title}-l${notification.message.body.length}`;
        localStorage.setItem(`notification_${id}`, 'removed');
        state.all.splice(state.all.findIndex(n => n.message.title === notification.message.title), 1);
      },

      forceUpdateNotifications(state) {
        state.all.push({});
        state.all.pop();
      }

    }
  }
});
// CONCATENATED MODULE: ./ui/components/ui/notifications.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_notificationsvue_type_script_lang_js_ = (notificationsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/ui/notifications.vue?vue&type=style&index=0&lang=scss&module=warframe&
var notificationsvue_type_style_index_0_lang_scss_module_warframe_ = __webpack_require__(55);

// EXTERNAL MODULE: ./ui/components/ui/notifications.vue?vue&type=style&index=1&lang=scss&module=wow-classic&
var notificationsvue_type_style_index_1_lang_scss_module_wow_classic_ = __webpack_require__(56);

// EXTERNAL MODULE: ./ui/components/ui/notifications.vue?vue&type=style&index=2&id=ecd7c010&lang=scss&scoped=true&
var notificationsvue_type_style_index_2_id_ecd7c010_lang_scss_scoped_true_ = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/ui/notifications.vue










function injectStyles (context) {
  
  this["warframe"] = (notificationsvue_type_style_index_0_lang_scss_module_warframe_["default"].locals || notificationsvue_type_style_index_0_lang_scss_module_warframe_["default"])
this["wow-classic"] = (notificationsvue_type_style_index_1_lang_scss_module_wow_classic_["default"].locals || notificationsvue_type_style_index_1_lang_scss_module_wow_classic_["default"])

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_notificationsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ecd7c010",
  null
  
)

/* harmony default export */ var notifications = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_style_index_0_id_717433ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(164);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_style_index_0_id_717433ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_style_index_0_id_717433ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_style_index_0_id_717433ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_0ed3be62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_0ed3be62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_0ed3be62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_0ed3be62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_5f2debd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(166);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_5f2debd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_5f2debd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_5f2debd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_1ed440db_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_1ed440db_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_1ed440db_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_1ed440db_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_7015b5e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_7015b5e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_7015b5e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_7015b5e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_ecd7c010_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_ecd7c010_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_ecd7c010_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_ecd7c010_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/warframe/search.vue?vue&type=template&id=7015b5e6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search"},[_c('navigation'),_vm._v(" "),_c('app-content',[_c('div',{staticClass:"search-input"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"search"},[_c('div',{staticClass:"field"},[_c('input',{ref:"input",attrs:{"type":"text","placeholder":"Try: Soma Prime, Maim..."},on:{"input":_vm.search}}),_vm._v(" "),_c('img',{staticClass:"search-ico ico-h-16",attrs:{"src":"/img/ui/search.svg","alt":"Search"}})])]),_vm._v(" "),_c('div',{staticClass:"search-filters"},[_c('div',{staticClass:"search-filters-label interactive",on:{"click":_vm.toggleFilters}},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/filter.svg","alt":"Filter"}}),_vm._v(" "),_c('span',[_vm._v("Filters")])])])]),_vm._v(" "),_c('ad',{attrs:{"name":"warframe-serp-filter"}})],1),_vm._v(" "),_c('div',{ref:"filters",staticClass:"search-filters-options",class:{ expanded: _vm.filtersExpanded }},[_c('div',{staticClass:"container"},[_vm._v("\n        Sorry, no filters here yet. Look around again soon™!\n      ")])]),_vm._v(" "),_c('section',{staticClass:"results",class:{ expanded: _vm.filtersExpanded }},[_c('div',{staticClass:"results-background-fix"}),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"results-headline"},[_c('span',[_vm._v("Results for")]),_vm._v(" "),_c('h1',[_vm._v(_vm._s(_vm.input))])]),_vm._v(" "),_c('results-group',{attrs:{"type":'items'}})],1),_vm._v(" "),_c('ad',{attrs:{"name":"warframe-serp-results"}})],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/warframe/search.vue?vue&type=template&id=7015b5e6&scoped=true&

// EXTERNAL MODULE: ./ui/components/ads/nitroAds.vue + 4 modules
var nitroAds = __webpack_require__(60);

// EXTERNAL MODULE: ./ui/app-content.vue + 2 modules
var app_content = __webpack_require__(47);

// EXTERNAL MODULE: ./ui/components/seo/meta.js
var meta = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/nav/general.vue?vue&type=template&id=717433ac&scoped=true&
var generalvue_type_template_id_717433ac_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"row"},[_c('div',{staticClass:"col nav-l"},[_c('router-link',{attrs:{"to":"/","exact":""}},[_c('img',{staticClass:"logo ico-h-20",attrs:{"src":"/img/brand/nexushub-logo-typeface.svg","alt":"Nexushub Logo"}})])],1),_vm._v(" "),_c('div',{staticClass:"col nav-r"},[_c('notifications')],1)])}
var generalvue_type_template_id_717433ac_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/nav/general.vue?vue&type=template&id=717433ac&scoped=true&

// EXTERNAL MODULE: ./ui/components/ui/notifications.vue + 4 modules
var notifications = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/nav/general.vue?vue&type=script&lang=js&

/* harmony default export */ var generalvue_type_script_lang_js_ = ({
  components: {
    notifications: notifications["a" /* default */]
  },
  computed: {
    game() {
      return this.$store.state.game.name;
    }

  },
  watch: {
    $route(to, from) {
      this.$store.commit('setActiveGame', to.fullPath.split('/')[1]);
    }

  },

  beforeCreate() {
    this.$store.commit('setActiveGame', this.$route.fullPath.split('/')[1]);
  },

  storeModule: {
    name: 'game',
    state: {
      name: ''
    },
    mutations: {
      setActiveGame(state, game) {
        state.name = game;
      }

    }
  }
});
// CONCATENATED MODULE: ./ui/components/ui/nav/general.vue?vue&type=script&lang=js&
 /* harmony default export */ var nav_generalvue_type_script_lang_js_ = (generalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/ui/nav/general.vue?vue&type=style&index=0&id=717433ac&lang=scss&scoped=true&
var generalvue_type_style_index_0_id_717433ac_lang_scss_scoped_true_ = __webpack_require__(558);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/ui/nav/general.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  nav_generalvue_type_script_lang_js_,
  generalvue_type_template_id_717433ac_scoped_true_render,
  generalvue_type_template_id_717433ac_scoped_true_staticRenderFns,
  false,
  null,
  "717433ac",
  null
  
)

/* harmony default export */ var general = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results/results-group.vue?vue&type=template&id=1ed440db&scoped=true&
var results_groupvue_type_template_id_1ed440db_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"results-group"},[_c('h2',[_vm._v(_vm._s(_vm.type.charAt(0).toUpperCase() + _vm.type.slice(1)))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.results.length)+" Result"+_vm._s(_vm.results.length !== 1 ? 's' : ''))]),_vm._v(" "),_c('div',{staticClass:"filter"},[_c('div',{staticClass:"filter-tags"},[_c('div',{staticClass:"filter-tag-row"},_vm._l((_vm.filters),function(filter){return _c('div',{key:filter.name,staticClass:"btn-tag",class:{ active: filter.active, descending: filter.descending },on:{"click":function($event){return _vm.selectFilterTag(filter)}}},[(filter.icon)?_c('img',{staticClass:"ico-12",attrs:{"src":filter.icon,"alt":filter.alt}}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(filter.name))]),_vm._v(" "),_c('img',{staticClass:"ico-16 asc-desc",class:{ descending: filter.descending },attrs:{"src":"/img/ui/dropdown.svg","alt":"Ascending/Descending"}})])}),0)]),_vm._v(" "),_c('div',{staticClass:"filter-view"},[_c('div',{staticClass:"interactive",class:{ active: _vm.listType === 'list' },on:{"click":function($event){return _vm.selectListView('list')}}},[_c('img',{staticClass:"ico-20",attrs:{"src":"/img/ui/list-view.svg","alt":"List"}}),_vm._v(" "),_c('span',[_vm._v("List")])]),_vm._v(" "),_c('div',{staticClass:"interactive",class:{ active: _vm.listType === 'grid' },on:{"click":function($event){return _vm.selectListView('grid')}}},[_c('img',{staticClass:"ico-20",attrs:{"src":"/img/ui/card-view.svg","alt":"Grid"}}),_vm._v(" "),_c('span',[_vm._v("Grid")])])])]),_vm._v(" "),_c('div',{staticClass:"results-container",style:({ height: (_vm.listHeight + "px") })},[_c('transition-group',{ref:"grid",staticClass:"result-grid list",class:{ active: _vm.listType === 'grid' },attrs:{"name":"list"}},_vm._l((_vm.results),function(result){return _c('item-grid',{key:result.name,attrs:{"result":result,"filters":_vm.filters,"selection":_vm.selection}})}),1),_vm._v(" "),_c('transition-group',{ref:"list",staticClass:"result-list list",class:{ active: _vm.listType === 'list' },attrs:{"name":"list"}},_vm._l((_vm.results),function(result){return _c('item-list',{key:result.name,staticClass:"result row",attrs:{"result":result,"filters":_vm.filters}})}),1)],1),_vm._v(" "),_c('div',{staticClass:"add-items"},[_vm._v("\n    Think we missed an item?\n    "),_c('router-link',{attrs:{"to":"/contact"}},[_vm._v("\n      Let us know\n    ")]),_vm._v(" or\n    "),_c('a',{attrs:{"href":"https://github.com/nexus-devs/warframe-items","target":"_blank"}},[_vm._v("add items yourself")]),_vm._v(" if you\n    wanna help us support the project.\n  ")],1)])}
var results_groupvue_type_template_id_1ed440db_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/results/results-group.vue?vue&type=template&id=1ed440db&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results/results-grid-snippet.vue?vue&type=template&id=0ed3be62&scoped=true&
var results_grid_snippetvue_type_template_id_0ed3be62_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"result col"},[_c('router-link',{staticClass:"interactive",class:{ set: _vm.result.set },attrs:{"to":_vm.result.webUrl}},[_c('div',{staticClass:"result-img"},[_c('div',{staticClass:"result-img-shade"}),_vm._v(" "),_c('img',{class:{ mod: _vm.result.imgUrl.includes('jpeg') },attrs:{"src":_vm.result.imgUrl,"alt":_vm.result.name}}),_vm._v(" "),_c('img',{staticClass:"result-img-blur",attrs:{"src":_vm.result.imgUrl}}),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.result.description))])]),_vm._v(" "),_c('div',{staticClass:"result-info"},[_c('span',[_vm._v(_vm._s(_vm.result.name))])]),_vm._v(" "),_c('div',{staticClass:"result-data"},[(_vm.selection)?_c('div',{staticClass:"result-data-value col"},[_c('span',[_vm._v(_vm._s(_vm.result._score ? _vm.result._score + ' ' + _vm.selection : 'No data')+" ")])]):_c('div',_vm._l((_vm.correctFilters),function(filter){return _c('div',{key:filter.name,staticClass:"result-data-value col"},[(!filter.hidden && _vm.resolve(filter))?_c('div',[_c('img',{staticClass:"ico-12",attrs:{"src":filter.icon,"alt":filter.alt}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.resolve(filter))+_vm._s(filter.unit))])]):_vm._e()])}),0)])])],1)}
var results_grid_snippetvue_type_template_id_0ed3be62_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/results/results-grid-snippet.vue?vue&type=template&id=0ed3be62&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results/results-grid-snippet.vue?vue&type=script&lang=js&
/* harmony default export */ var results_grid_snippetvue_type_script_lang_js_ = ({
  props: ['result', 'filters', 'selection'],
  computed: {
    correctFilters() {
      return this.filters.filter(f => f.category === this.result.results);
    }

  },
  methods: {
    resolve(filter) {
      let result = this.result;
      const keys = filter.path.split('.');

      try {
        keys.forEach(key => {
          result = result[key];
        });
        return result;
      } catch (err) {}
    }

  }
});
// CONCATENATED MODULE: ./ui/components/search/results/results-grid-snippet.vue?vue&type=script&lang=js&
 /* harmony default export */ var results_results_grid_snippetvue_type_script_lang_js_ = (results_grid_snippetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/search/results/results-grid-snippet.vue?vue&type=style&index=0&id=0ed3be62&lang=scss&scoped=true&
var results_grid_snippetvue_type_style_index_0_id_0ed3be62_lang_scss_scoped_true_ = __webpack_require__(559);

// CONCATENATED MODULE: ./ui/components/search/results/results-grid-snippet.vue






/* normalize component */

var results_grid_snippet_component = Object(componentNormalizer["a" /* default */])(
  results_results_grid_snippetvue_type_script_lang_js_,
  results_grid_snippetvue_type_template_id_0ed3be62_scoped_true_render,
  results_grid_snippetvue_type_template_id_0ed3be62_scoped_true_staticRenderFns,
  false,
  null,
  "0ed3be62",
  null
  
)

/* harmony default export */ var results_grid_snippet = (results_grid_snippet_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results/results-list-snippet.vue?vue&type=template&id=5f2debd2&scoped=true&
var results_list_snippetvue_type_template_id_5f2debd2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"result"},[_c('router-link',{staticClass:"row interactive",attrs:{"to":_vm.result.webUrl}},[_c('img',{staticClass:"result-img-blur",attrs:{"src":_vm.result.imgUrl}}),_vm._v(" "),_c('div',{staticClass:"result-title col-b"},[_c('div',{staticClass:"result-img"},[_c('img',{class:{ mod: _vm.result.imgUrl.includes('jpeg') },attrs:{"src":_vm.result.imgUrl,"alt":_vm.result.name}})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.result.name))])]),_vm._v(" "),_c('div',{staticClass:"result-data row"},_vm._l((_vm.correctFilters),function(filter){return _c('div',{key:filter.name,staticClass:"result-data-value",class:{ hidden: filter.hidden }},[(_vm.resolve(filter))?_c('div',[(filter.icon)?_c('img',{staticClass:"ico-12",attrs:{"src":filter.icon,"alt":filter.alt}}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.resolve(filter))+_vm._s(filter.unit))])]):_vm._e()])}),0)])],1)}
var results_list_snippetvue_type_template_id_5f2debd2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/results/results-list-snippet.vue?vue&type=template&id=5f2debd2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results/results-list-snippet.vue?vue&type=script&lang=js&
/* harmony default export */ var results_list_snippetvue_type_script_lang_js_ = ({
  props: ['result', 'filters'],
  computed: {
    correctFilters() {
      return this.filters.filter(f => f.category === this.result.results);
    }

  },
  methods: {
    resolve(filter) {
      let result = this.result;
      const keys = filter.path.split('.');

      try {
        keys.forEach(key => {
          result = result[key];
        });
        return result;
      } catch (err) {}
    }

  }
});
// CONCATENATED MODULE: ./ui/components/search/results/results-list-snippet.vue?vue&type=script&lang=js&
 /* harmony default export */ var results_results_list_snippetvue_type_script_lang_js_ = (results_list_snippetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/search/results/results-list-snippet.vue?vue&type=style&index=0&id=5f2debd2&lang=scss&scoped=true&
var results_list_snippetvue_type_style_index_0_id_5f2debd2_lang_scss_scoped_true_ = __webpack_require__(560);

// CONCATENATED MODULE: ./ui/components/search/results/results-list-snippet.vue






/* normalize component */

var results_list_snippet_component = Object(componentNormalizer["a" /* default */])(
  results_results_list_snippetvue_type_script_lang_js_,
  results_list_snippetvue_type_template_id_5f2debd2_scoped_true_render,
  results_list_snippetvue_type_template_id_5f2debd2_scoped_true_staticRenderFns,
  false,
  null,
  "5f2debd2",
  null
  
)

/* harmony default export */ var results_list_snippet = (results_list_snippet_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results/results-group.vue?vue&type=script&lang=js&


/* harmony default export */ var results_groupvue_type_script_lang_js_ = ({
  components: {
    'item-grid': results_grid_snippet,
    'item-list': results_list_snippet
  },
  props: ['type'],

  data() {
    return {
      listHeight: 0,
      listType: 'grid',
      selection: ''
    };
  },

  computed: {
    filters() {
      return this.$store.state.serp.filters;
    },

    results() {
      return this.$store.state.serp.results;
    }

  },
  watch: {
    results() {
      setTimeout(() => this.onResize(), 75);
    }

  },

  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

  methods: {
    onResize() {
      if (this.listType === 'grid') {
        this.listHeight = this.$refs.grid.$el.offsetHeight;
      } else {
        this.listHeight = this.$refs.list.$el.offsetHeight;
      }

      this.listHeight += 40;
    },

    selectListView(type) {
      this.listType = type;
      this.onResize();
    },

    selectFilterTag(filter) {
      const newFilters = [].concat(this.$store.state.serp.filters);
      const target = newFilters.find(f => f.name === filter.name);
      const activeFilters = this.$store.state.serp.activeFilters;
      const isActive = activeFilters.find(f => f.name === filter.name);

      if (this.$store.state.serp.activeFilters.length >= 2 && !isActive) {
        this.$store.commit('popSerpActiveFilter');
      }

      if (target.descending) {
        target.active = false;
        target.descending = false;
        this.$store.commit('removeSerpActiveFilter', target.name);
      } else {
        target.descending = target.active;
        target.active = true;
        this.$store.commit('addSerpActiveFilter', target.name);
      }

      this.$store.commit('setSerpFilters', newFilters);

      if (newFilters.reduce((a, f) => a + (f.active ? 1 : 0), 0)) {
        this.$store.dispatch('applySerpFilters');
      } else {
        this.$store.commit('resetSerpResults');
      }

      this.setSelection();
    },

    setSelection() {
      const filters = this.$store.state.serp.activeFilters;
      let selection = '';

      for (const filter of filters) {
        if (selection) {
          selection += filter.active ? ` per ${filter.name}` : '';
        } else {
          selection += filter.active ? filter.name : '';
        }
      }

      this.selection = selection;
    }

  }
});
// CONCATENATED MODULE: ./ui/components/search/results/results-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var results_results_groupvue_type_script_lang_js_ = (results_groupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/search/results/results-group.vue?vue&type=style&index=0&id=1ed440db&lang=scss&scoped=true&
var results_groupvue_type_style_index_0_id_1ed440db_lang_scss_scoped_true_ = __webpack_require__(561);

// CONCATENATED MODULE: ./ui/components/search/results/results-group.vue






/* normalize component */

var results_group_component = Object(componentNormalizer["a" /* default */])(
  results_results_groupvue_type_script_lang_js_,
  results_groupvue_type_template_id_1ed440db_scoped_true_render,
  results_groupvue_type_template_id_1ed440db_scoped_true_staticRenderFns,
  false,
  null,
  "1ed440db",
  null
  
)

/* harmony default export */ var results_group = (results_group_component.exports);
// EXTERNAL MODULE: ./ui/components/search/input.vue + 4 modules
var input = __webpack_require__(64);

// CONCATENATED MODULE: ./ui/store/serp.js
/* harmony default export */ var serp = ({
  name: 'serp',
  state: {
    results: [],
    originalResults: [],
    filters: [{
      name: 'Platinum',
      category: 'items',
      icon: '/img/warframe/ui/platinum.svg',
      alt: 'Platinum',
      unit: 'p',
      path: 'price'
    }, {
      name: 'Ducats',
      category: 'items',
      icon: '/img/warframe/ui/ducats.svg',
      alt: 'Ducats',
      unit: ' Ducats',
      path: 'ducats'
    }, {
      name: 'Supply',
      category: 'items',
      unit: ' Sellers',
      hidden: true,
      path: 'prices.selling.current.orders'
    }, {
      name: 'Demand',
      category: 'items',
      unit: ' Buyers',
      hidden: true,
      path: 'prices.buying.current.orders'
    }],
    activeFilters: []
  },
  mutations: {
    setSerpResults(state, results) {
      state.results = results;
    },

    setSerpFilters(state, filters) {
      state.filters = filters;
    },

    addSerpActiveFilter(state, name) {
      if (!state.activeFilters.find(f => f.name === name)) {
        state.activeFilters.push(state.filters.find(f => f.name === name));
      }
    },

    removeSerpActiveFilter(state, name) {
      const i = state.activeFilters.findIndex(f => f.name === name);
      state.activeFilters.splice(i, 1);
    },

    popSerpActiveFilter(state) {
      const removed = state.activeFilters.pop();
      state.filters.find(f => f.name === removed.name).active = false;
    },

    setSerpOriginalResults(state, filters) {
      state.originalResults = filters;
    },

    resetSerpResults(state, filters) {
      state.results = state.originalResults;
    }

  },
  actions: {
    async fetchSerpResults({
      commit,
      dispatch
    }, input) {
      if (input.length < 2) {
        return;
      }

      const B = input.includes('🅱');
      const itemData = await this.$cubic.get(`/warframe/v1/search?query=${input.replace(/🅱️/g, 'b')}`);
      const items = await dispatch('sanitizeSerpResults', {
        itemData,
        B
      });
      const players = [];
      const results = items.concat(players);
      commit('setSerpResults', results);
      commit('setSerpOriginalResults', results);
      dispatch('applySerpFilters');
    },

    sanitizeSerpResults(context, {
      itemData,
      B
    }) {
      const items = [];

      for (const item of itemData) {
        for (const component of item.components) {
          if (!item.description) continue;
          const description = item.description.split(' ');

          for (let i = 0; i < description.length; i++) {
            let word = description[i];

            if (word.includes('<DT_')) {
              word = word.match(/\_(.*?)\>/)[1].toLowerCase();
              if (word === 'freeze') word = 'cold';
              if (word === 'fire') word = 'heat';
              if (word === 'explosion') word = 'blast';
              word = `<img src="/img/warframe/ui/${word}.png" class="ico-h-16" style="margin-top: -3px;"/>`;
            }

            description[i] = word;
          }

          if (items.find(i => i.name === item.name)) {
            continue;
          }

          let name = item.name.replace('Set', '');
          name = B ? item.name.toLowerCase().replace(/\b\w/g, l => '🅱') : name;
          items.push(Object.assign(component, {
            name,
            webUrl: item.webUrl,
            category: item.category,
            rarity: item.rarity,
            price: component.prices ? Math.round((component.prices.selling.current.median + component.prices.buying.current.median) / 2) : undefined,
            results: 'items',
            description: description.join(' ')
          }));
        }
      }

      return items;
    },

    applySerpFilters({
      commit,
      dispatch,
      state
    }) {
      const filters = state.activeFilters;
      const results = [].concat(state.results);

      const resolve = (filter, result) => {
        try {
          filter.path.split('.').forEach(key => {
            result = result[key];
          });
          return result;
        } catch (err) {}
      };

      const getSortingValue = result => {
        let ascending, res, missing;

        for (const filter of filters) {
          if (!filter.descending) ascending = true;
          if (!resolve(filter, result)) missing = true;
        }

        if (missing) {
          return null;
        }

        if (filters.length > 1) {
          res = resolve(filters[0], result) / resolve(filters[1], result);
        } else {
          res = resolve(filters[0], result);
        }

        return ascending ? -1 * res : res;
      };

      const getUiScore = x => {
        if (x === null) {
          return null;
        } else {
          return x % 1 === 0 ? Math.abs(x) : Math.abs(x).toFixed(2);
        }
      };

      if (!filters.length) {
        return;
      }

      results.sort((a, b) => {
        const aVal = getSortingValue(a);
        const bVal = getSortingValue(b);
        a._score = getUiScore(aVal);
        b._score = getUiScore(bVal);

        if (bVal === null) {
          return -1;
        }

        if (aVal > bVal) {
          return 1;
        }

        if (aVal < bVal) {
          return -1;
        }

        return 0;
      });
      commit('setSerpResults', results);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/warframe/search.vue?vue&type=script&lang=js&







let ongoing = setTimeout(() => {});
/* harmony default export */ var searchvue_type_script_lang_js_ = ({
  components: {
    ad: nitroAds["a" /* default */],
    navigation: general,
    appContent: app_content["a" /* default */],
    search: input["a" /* default */],
    resultsGroup: results_group
  },

  async asyncData({
    store,
    route: {
      query: {
        input
      }
    }
  }) {
    await store.dispatch('fetchSerpResults', input);
  },

  data() {
    return {
      filtersExpanded: false
    };
  },

  computed: {
    results() {
      return this.$store.state.serp.results;
    },

    input() {
      return this.$store.state.search.input;
    }

  },

  mounted() {
    this.filtersHeight = this.$refs.filters.offsetHeight;
    this.$refs.input.focus();

    for (let i = 0; i < this.$store.state.serp.activeFilters.length; i++) {
      this.$store.commit('popSerpActiveFilter');
    }
  },

  beforeCreate() {
    this.$store.dispatch('applyInputQuery', this.$route);
  },

  beforeDestroy() {
    for (let i = 0; i < this.$store.state.serp.activeFilters.length; i++) {
      this.$store.commit('popSerpActiveFilter');
    }
  },

  methods: {
    async search(event) {
      this.$store.commit('setSearchInput', event.target.value);
      clearTimeout(ongoing);
      ongoing = setTimeout(() => {
        this.$store.dispatch('fetchSerpResults', event.target.value);
        window.history.pushState({}, null, `/warframe/search?input=${event.target.value}`);
      }, 200);
    },

    toggleFilters() {
      this.filtersExpanded = !this.filtersExpanded;
    }

  },
  storeModule: serp,

  head() {
    return {
      title: `${this.input} · NexusHub Search`,
      meta: Object(meta["a" /* default */])({
        title: `${this.input} Search Results on NexusHub`,
        description: this.results.length ? `Find ${this.results.length} matches for ${this.input}. ${this.results[0].description}` : 'No search results :(',
        image: this.results.length ? `https://nexushub.co${this.results[0].imgUrl}` : undefined
      })
    };
  }

});
// CONCATENATED MODULE: ./ui/sites/warframe/search.vue?vue&type=script&lang=js&
 /* harmony default export */ var warframe_searchvue_type_script_lang_js_ = (searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/sites/warframe/search.vue?vue&type=style&index=0&id=7015b5e6&lang=scss&scoped=true&
var searchvue_type_style_index_0_id_7015b5e6_lang_scss_scoped_true_ = __webpack_require__(562);

// CONCATENATED MODULE: ./ui/sites/warframe/search.vue






/* normalize component */

var search_component = Object(componentNormalizer["a" /* default */])(
  warframe_searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7015b5e6",
  null
  
)

/* harmony default export */ var search = __webpack_exports__["default"] = (search_component.exports);

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

module.exports = {
  name: 'search',
  state: {
    input: ''
  },
  mutations: {
    setSearchInput(state, input) {
      state.input = input;
    }

  },
  actions: {
    applyInputQuery({
      commit
    }, route) {
      if (route.query.input) {
        commit('setSearchInput', route.query.input);
      }
    }

  }
};

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ads/nitroAds.vue?vue&type=template&id=a73ae636&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layout-center vm-placement",class:[{ 'blocked-unit': _vm.blocked, 'ad-unit': !_vm.blocked }, _vm.blocked ? _vm.theme.blocked : ''],attrs:{"data-id":"601a74e94b1a0874cf35a794"}},[(_vm.blocked)?_c('span',[_vm._v("Advertising seems to be blocked by your browser. This is fine.")]):_vm._e(),_vm._v(" "),(_vm.blocked)?_c('span',[_vm._v("NexusHub is completely free and we want it to stay that way.\n    Advertising is currently our only income to pay for the servers and to help us to develop NexusHub even further!")]):_vm._e(),_vm._v(" "),(_vm.blocked)?_c('span',[_vm._v("Please consider adding an exception for NexusHub.co on your Adblocker.\n    If you think that any ads are intrusive or inappropriate, feel free to contact us.")]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ads/nitroAds.vue?vue&type=template&id=a73ae636&

// EXTERNAL MODULE: ./ui/components/_theme.js
var _theme = __webpack_require__(2);
var _theme_default = /*#__PURE__*/__webpack_require__.n(_theme);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ads/nitroAds.vue?vue&type=script&lang=js&

/* harmony default export */ var nitroAdsvue_type_script_lang_js_ = ({
  props: ['name', 'maxHeight', 'maxWidth'],

  data() {
    return {
      blocked: false
    };
  },

  computed: {
    theme() {
      return _theme_default()(this);
    }

  },

  mounted() {
    const nitroAds = window.nitroAds;

    if (!nitroAds) {
      return;
    }

    nitroAds.createAd(`ad-${this.name}`, {
      demo: !true,
      floor: 0.05,
      refreshLimit: 10,
      refreshTime: 60,
      report: {
        enabled: true,
        wording: 'Report Abuse',
        position: 'fixed-bottom-right'
      }
    });
  }

});
// CONCATENATED MODULE: ./ui/components/ads/nitroAds.vue?vue&type=script&lang=js&
 /* harmony default export */ var ads_nitroAdsvue_type_script_lang_js_ = (nitroAdsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/ads/nitroAds.vue?vue&type=style&index=0&lang=scss&module=warframe&
var nitroAdsvue_type_style_index_0_lang_scss_module_warframe_ = __webpack_require__(67);

// EXTERNAL MODULE: ./ui/components/ads/nitroAds.vue?vue&type=style&index=1&lang=scss&module=wow-classic&
var nitroAdsvue_type_style_index_1_lang_scss_module_wow_classic_ = __webpack_require__(68);

// EXTERNAL MODULE: ./ui/components/ads/nitroAds.vue?vue&type=style&index=2&lang=scss&
var nitroAdsvue_type_style_index_2_lang_scss_ = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/ads/nitroAds.vue










function injectStyles (context) {
  
  this["warframe"] = (nitroAdsvue_type_style_index_0_lang_scss_module_warframe_["default"].locals || nitroAdsvue_type_style_index_0_lang_scss_module_warframe_["default"])
this["wow-classic"] = (nitroAdsvue_type_style_index_1_lang_scss_module_wow_classic_["default"].locals || nitroAdsvue_type_style_index_1_lang_scss_module_wow_classic_["default"])

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ads_nitroAdsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  
)

/* harmony default export */ var nitroAds = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/input.vue?vue&type=template&id=91c25534&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search"},[_c('div',{staticClass:"field"},[_c('label',[_vm._v("Search")]),_vm._v(" "),_c('input',{ref:"input",attrs:{"placeholder":_vm.placeholder || 'Try: Frost Prime, Maiming Strike...',"type":"text"},domProps:{"value":_vm.input.name || _vm.input},on:{"input":_vm.fetch,"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }$event.preventDefault();if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.complete($event)},function($event){if(!$event.shiftKey){ return null; }$event.stopPropagation();}],"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.search($event)}}}),_vm._v(" "),_c('span',{staticClass:"autocomplete"},[_vm._v(_vm._s(_vm.autocomplete.name))]),_vm._v(" "),(_vm.autocomplete.category)?_c('span',{staticClass:"autocomplete-type"},[_vm._v("\n      "+_vm._s(_vm.autocomplete.category === 'Any' ? 'Search anywhere' : ("Found in " + (_vm.autocomplete.category)))+"\n    ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"tools"},_vm._l((_vm.suggestions),function(suggestion){return _c('div',{key:suggestion.uniqueName,staticClass:"suggestion",on:{"click":function($event){return _vm.search(suggestion)}}},[_c('div',{staticClass:"ico-36"},[_c('img',{attrs:{"src":suggestion.imgUrl,"alt":suggestion.name}}),_vm._v(" "),_c('img',{staticClass:"backdrop",attrs:{"src":suggestion.imgUrl,"alt":suggestion.name}})]),_vm._v(" "),_c('div',{staticClass:"suggestion-main"},[_c('span',{staticClass:"suggestion-name"},[_vm._v(_vm._s(suggestion.name))]),_vm._v(" "),_c('span',{staticClass:"suggestion-type"},[_vm._v(_vm._s(suggestion.type))])]),_vm._v(" "),(suggestion.keyData)?_c('span',{staticClass:"suggestion-data"},[_vm._v(_vm._s(suggestion.keyData))]):_vm._e()])}),0),_vm._v(" "),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/input.vue?vue&type=template&id=91c25534&

// EXTERNAL MODULE: ./ui/store/search.js
var search = __webpack_require__(59);
var search_default = /*#__PURE__*/__webpack_require__.n(search);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/input.vue?vue&type=script&lang=js&

/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  props: ['placeholder', 'focus'],

  data() {
    return {
      input: '',
      autocomplete: {
        name: '',
        type: ''
      },
      suggestions: []
    };
  },

  mounted() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (this.focus && !isMobile) {
      this.$refs.input.focus();
    }
  },

  methods: {
    async fetch(event) {
      this.input = event.target.value;
      this.$store.commit('setSearchInput', event.target.value);

      if (!this.autocomplete.name.startsWith(event.target.value)) {
        this.autocomplete = {
          name: '',
          category: 'Any'
        };
      }

      await this.fetchSuggestions();
    },

    async fetchSuggestions() {
      let result = [];

      if (this.input.length > 1) {
        const query = encodeURIComponent(this.input);
        result = await this.$cubic.get(`/warframe/v1/suggestions?query=${query}&limit=4`);
      }

      const regex = new RegExp(`^${this.input}`, 'i');

      if (result.length && result[0].name.replace(regex, this.input).startsWith(this.input)) {
        this.autocomplete = {
          name: result[0].name.replace(regex, this.input),
          category: result[0].category
        };
        this.suggestions = result;
      } else {
          this.autocomplete = {
            name: '',
            category: 'Any'
          };
          this.suggestions = [];
        }

      if (this.input.length < 1) {
        this.autocomplete = {
          name: '',
          category: ''
        };
      }
    },

    complete(suggestion = {}) {
      if (this.autocomplete.name) {
        this.input = this.autocomplete.name;
      }
    },

    search(suggestion = {}) {
      if (suggestion.name) {
        this.input = '';
        this.autocomplete = {
          name: '',
          category: ''
        };
        this.query(suggestion.webUrl);
        this.suggestions = [];
      } else if (this.suggestions.length) {
        this.input = '';
        this.autocomplete = {
          name: '',
          category: ''
        };
        this.query(this.suggestions[0].webUrl);
        this.suggestions = [];
      } else {
        this.$router.push(`/warframe/search?input=${this.input}`);
      }
    },

    query(url) {
      let path;
      const route = this.$route.path;
      const item = this.$route.params.item;

      if (this.$route.fullPath.startsWith('/warframe/items/')) {
        path = `${url}${route.split(item)[1]}`;
        path = path.endsWith('//') ? path.slice(0, -1) : path;
      } else {
        path = url;
      }

      this.$router.push(path);
    }

  },
  storeModule: search_default.a
});
// CONCATENATED MODULE: ./ui/components/search/input.vue?vue&type=script&lang=js&
 /* harmony default export */ var search_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/search/input.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  search_inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var input = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);