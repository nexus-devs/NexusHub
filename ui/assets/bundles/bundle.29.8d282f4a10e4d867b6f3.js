(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_style_index_0_id_570f7f8d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_style_index_0_id_570f7f8d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_style_index_0_id_570f7f8d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_developers_vue_vue_type_style_index_0_id_570f7f8d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/nav/developers.vue?vue&type=template&id=570f7f8d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"row"},[_c('div',{staticClass:"col nav-l"},[_c('router-link',{attrs:{"to":"/","exact":""}},[_c('img',{staticClass:"logo ico-h-20",attrs:{"src":"/img/brand/nexushub-logo-typeface.svg","alt":"Nexushub Logo"}})]),_vm._v(" "),_c('router-link',{staticClass:"sub",attrs:{"to":"/developers"}},[_vm._v("\n      Developers\n    ")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/developers/api"}},[_vm._v("\n      API Docs\n    ")])],1),_vm._v(" "),_c('div',{staticClass:"col nav-r"},[_c('notifications')],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/nav/developers.vue?vue&type=template&id=570f7f8d&scoped=true&

// EXTERNAL MODULE: ./ui/components/ui/notifications.vue + 4 modules
var notifications = __webpack_require__(52);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/nav/developers.vue?vue&type=script&lang=js&

/* harmony default export */ var developersvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./ui/components/ui/nav/developers.vue?vue&type=script&lang=js&
 /* harmony default export */ var nav_developersvue_type_script_lang_js_ = (developersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/ui/nav/developers.vue?vue&type=style&index=0&id=570f7f8d&lang=scss&scoped=true&
var developersvue_type_style_index_0_id_570f7f8d_lang_scss_scoped_true_ = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/ui/nav/developers.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  nav_developersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "570f7f8d",
  null
  
)

/* harmony default export */ var developers = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"unread-bubble":"warframe_unread-bubble_3a5aL","notification-header":"warframe_notification-header_1ejVz","notification-body":"warframe_notification-body_n9BTg","notification":"warframe_notification_2Xqvq","footer":"warframe_footer_1YKJU"};

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"unread-bubble":"wow-classic_unread-bubble_3Fi-7","notification-header":"wow-classic_notification-header_1QwD6","notification-body":"wow-classic_notification-body_3a5tH","notification":"wow-classic_notification_O8uYh","footer":"wow-classic_footer_2uhST"};

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/app-content.vue?vue&type=template&id=3ce135d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container"},[_c('transition',{attrs:{"appear":"","name":"zoom"}},[_c('div',[_c('main',{staticClass:"app-content"},[_vm._t("default")],2)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/app-content.vue?vue&type=template&id=3ce135d2&

// EXTERNAL MODULE: ./ui/app-content.vue?vue&type=style&index=0&lang=scss&
var app_contentvue_type_style_index_0_lang_scss_ = __webpack_require__(53);

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

/***/ 47:
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

/***/ 52:
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
var notificationsvue_type_style_index_0_lang_scss_module_warframe_ = __webpack_require__(54);

// EXTERNAL MODULE: ./ui/components/ui/notifications.vue?vue&type=style&index=1&lang=scss&module=wow-classic&
var notificationsvue_type_style_index_1_lang_scss_module_wow_classic_ = __webpack_require__(55);

// EXTERNAL MODULE: ./ui/components/ui/notifications.vue?vue&type=style&index=2&id=ecd7c010&lang=scss&scoped=true&
var notificationsvue_type_style_index_2_id_ecd7c010_lang_scss_scoped_true_ = __webpack_require__(56);

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

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_17c7765c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_17c7765c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_17c7765c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_17c7765c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_ecd7c010_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_ecd7c010_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_ecd7c010_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_ecd7c010_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/developers/index.vue?vue&type=template&id=17c7765c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation'),_vm._v(" "),_c('app-content',[_c('section',[_c('div',{staticClass:"container"},[_c('h1',[_vm._v("\n          Build awesome tools that reach thousands of gamers with\n          "),_c('router-link',{attrs:{"to":"/developers/api/Warframe-Orders/orders"}},[_vm._v("\n            trading data\n          ")]),_vm._v(",\n          "),_c('router-link',{attrs:{"to":"/developers/api/Warframe-Items/base"}},[_vm._v("\n            item data\n          ")]),_vm._v(", and\n          "),_c('router-link',{attrs:{"to":"/developers/api/General/foo"}},[_vm._v("\n            anything else on this platform\n          ")]),_vm._v(".\n        ")],1),_vm._v(" "),_c('p',[_vm._v("\n          These pages are made to help you build up your tools with data from NexusHub.\n        ")]),_vm._v(" "),_c('router-link',{staticClass:"btn-outline",attrs:{"to":"/developers/api/General/foo"}},[_vm._v("\n          API Docs\n        ")])],1)]),_vm._v(" "),_c('section',[_c('div',{staticClass:"container sign-deal-with-the-devil-kappa123"},[_c('h2',[_vm._v("Feeling especially awesome?")]),_vm._v(" "),_c('p',[_vm._v("\n          If you think your tool would be a good fit as an addition to NexusHub,\n          "),_c('router-link',{attrs:{"to":"/contact"}},[_vm._v("\n            let us know!\n          ")]),_vm._v(" We'd love to help you\n          integrate and maintain your idea on this site and serve it to millions of people,\n          while "),_c('b',[_vm._v("you")]),_vm._v(" get the revenue in return.\n        ")],1),_vm._v(" "),_c('a',{staticClass:"btn-outline",attrs:{"href":"https://discord.gg/TCxe6P4","target":"_blank"}},[_vm._v("\n          Join us on Discord\n        ")])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/developers/index.vue?vue&type=template&id=17c7765c&scoped=true&

// EXTERNAL MODULE: ./ui/app-content.vue + 2 modules
var app_content = __webpack_require__(46);

// EXTERNAL MODULE: ./ui/components/seo/meta.js
var meta = __webpack_require__(47);

// EXTERNAL MODULE: ./ui/components/ui/nav/developers.vue + 4 modules
var developers = __webpack_require__(116);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/developers/index.vue?vue&type=script&lang=js&



/* harmony default export */ var developersvue_type_script_lang_js_ = ({
  components: {
    navigation: developers["a" /* default */],
    appContent: app_content["a" /* default */]
  },
  head: {
    title: 'NexusHub · Developers',
    meta: Object(meta["a" /* default */])({
      title: 'NexusHub for Developers',
      description: 'Find all resources required to build your own application with data from NexusHub.'
    })
  }
});
// CONCATENATED MODULE: ./ui/sites/developers/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var sites_developersvue_type_script_lang_js_ = (developersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/sites/developers/index.vue?vue&type=style&index=0&id=17c7765c&lang=scss&scoped=true&
var developersvue_type_style_index_0_id_17c7765c_lang_scss_scoped_true_ = __webpack_require__(530);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/sites/developers/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sites_developersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "17c7765c",
  null
  
)

/* harmony default export */ var sites_developers = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);