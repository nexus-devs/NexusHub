(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _company_vue_vue_type_template_id_78b80dfa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(821);
/* harmony import */ var _company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(256);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _company_vue_vue_type_style_index_0_id_78b80dfa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(735);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _company_vue_vue_type_template_id_78b80dfa_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _company_vue_vue_type_template_id_78b80dfa_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "78b80dfa",
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

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(257);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(43);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(30);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(44);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _appContent = __webpack_require__(152);

var _appContent2 = _interopRequireDefault(_appContent);

var _general = __webpack_require__(154);

var _general2 = _interopRequireDefault(_general);

var _sidebar = __webpack_require__(150);

var _sidebar2 = _interopRequireDefault(_sidebar);

var _search = __webpack_require__(151);

var _search2 = _interopRequireDefault(_search);

var _analytics = __webpack_require__(734);

var _analytics2 = _interopRequireDefault(_analytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseNum = function parseNum(num) {
  return (Math.round(num / 1000) * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

exports.default = {
  components: {
    navigation: _general2.default,
    appContent: _appContent2.default,
    sidebar: _sidebar2.default,
    sidebarSearch: _search2.default
  },

  computed: {
    users: function users() {
      return parseNum(this.$store.state.analytics.users);
    },
    views: function views() {
      return parseNum(this.$store.state.analytics.views);
    },
    offers: function offers() {
      return parseNum(this.$store.state.analytics.offers);
    }
  },

  asyncData: function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var users, views, offers;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              users = void 0, views = void 0, offers = void 0;
              _context.next = 3;
              return _promise2.default.all([this.$cubic.get('/analytics/v1/ga/users').then(function (data) {
                users = data;
              }), this.$cubic.get('/analytics/v1/ga/views').then(function (data) {
                views = data;
              }), this.$cubic.get('/warframe/v1/analytics/orders').then(function (data) {
                offers = data;
              })]);

            case 3:
              this.$store.commit('setAnalyticsUsers', users);
              this.$store.commit('setAnalyticsViews', views);
              this.$store.commit('setAnalyticsOffers', offers);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function asyncData() {
      return _ref.apply(this, arguments);
    }

    return asyncData;
  }(),


  storeModule: _analytics2.default
};

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'analytics',

  state: {
    users: null,
    views: null
  },

  mutations: {
    setAnalyticsUsers: function setAnalyticsUsers(state, users) {
      state.users = users;
    },
    setAnalyticsViews: function setAnalyticsViews(state, views) {
      state.views = views;
    },
    setAnalyticsOffers: function setAnalyticsOffers(state, offers) {
      state.offers = offers;
    }
  }
};

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_style_index_0_id_78b80dfa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(258);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_style_index_0_id_78b80dfa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_style_index_0_id_78b80dfa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_style_index_0_id_78b80dfa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/company.vue?vue&type=template&id=78b80dfa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation'),_vm._v(" "),_c('sidebar',[_c('sidebar-search')],1),_vm._v(" "),_c('app-content',[_c('div',{staticClass:"company"},[_c('div',{staticClass:"container"},[_c('img',{staticClass:"header-blobs",attrs:{"src":"/img/company/header-blobs.svg"}}),_vm._v(" "),_c('div',{staticClass:"box-top"},[_c('h1',[_vm._v("Making Games more transparent with NexusHub.")])]),_vm._v(" "),_c('div',{staticClass:"box-top-sub"}),_vm._v(" "),_c('div',{staticClass:"box-sub"},[_c('h2',[_vm._v("The best decisions in gaming are made on data")]),_vm._v(" "),_c('p',[_vm._v("\n            Whether it's about buying\n            that item we always wanted, or finding ways to improve our playstyle.\n            NexusHub is about bringing that data to you, regardless if you're a\n            mighty pro gamer or a casual in it for the fun.\n          ")])])])]),_vm._v(" "),_c('div',{staticClass:"who-we-are-container container"},[_c('section',{staticClass:"who-we-are"},[_c('div',[_c('h2',[_vm._v("Who we are")]),_vm._v(" "),_c('p',[_vm._v("\n            We're a small group of gamers from all over the world,\n            building NexusHub in our spare time. Starting out as\n            casual players who made a bot to monitor\n            Warframe's trade chat, we have grown into a diverse community of open source\n            developers, persisting in our mission to simply make games more\n            accessible for everyone.\n          ")])])])]),_vm._v(" "),_c('div',{staticClass:"stats-container"},[_c('section',[_c('div',{staticClass:"stats container"},[_c('h2',[_vm._v("People ❤️ NexusHub")]),_vm._v(" "),_c('p',[_vm._v("\n            Our platform has been growing continously since day one, so it seems we're doing\n            things right.\n          ")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-b"},[_c('div',{staticClass:"number"},[_vm._v("\n                "+_vm._s(_vm.users)+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"label"},[_vm._v("\n                Monthly Users\n              ")])]),_vm._v(" "),_c('div',{staticClass:"col-b"},[_c('div',{staticClass:"number"},[_vm._v("\n                "+_vm._s(_vm.views)+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"label"},[_vm._v("\n                Monthly Page Views\n              ")])]),_vm._v(" "),_c('div',{staticClass:"col-b"},[_c('div',{staticClass:"number"},[_vm._v("\n                "+_vm._s(_vm.offers)+"\n              ")]),_vm._v(" "),_c('div',{staticClass:"label"},[_vm._v("\n                Processed orders each month\n              ")])])])])])]),_vm._v(" "),_c('section',{staticClass:"join"},[_c('div',{staticClass:"container"},[_c('h2',[_vm._v("Wanna help us build NexusHub?")]),_vm._v(" "),_c('p',[_vm._v("\n          NexusHub is entirely developed by community members of the games\n          we support, so if you wanna make some awesome feature for the\n          platform, we'd happily have you join our team.\n        ")]),_vm._v(" "),_c('span',[_vm._v("Sounds fun to you? Hit us up on Discord!")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('a',{staticClass:"btn",attrs:{"href":"https://discord.gg/TCxe6P4","target":"_blank"}},[_vm._v("Join us on Discord")])])]),_vm._v(" "),_c('div',{staticClass:"cute-fluff"},[_c('img',{staticClass:"bottom-blob",attrs:{"src":"/img/ui/header-blobs.svg"}}),_vm._v(" "),_c('img',{staticClass:"blobot",attrs:{"src":"/img/company/blobot.svg","alt":"Blobot"}})])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/company.vue?vue&type=template&id=78b80dfa&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);