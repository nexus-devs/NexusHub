(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _opensource_vue_vue_type_template_id_605d9c4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(773);
/* harmony import */ var _opensource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(371);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _opensource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _opensource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _opensource_vue_vue_type_style_index_0_id_605d9c4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(691);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _opensource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _opensource_vue_vue_type_template_id_605d9c4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _opensource_vue_vue_type_template_id_605d9c4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "605d9c4e",
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

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notifications = __webpack_require__(165);

var _notifications2 = _interopRequireDefault(_notifications);

var _input = __webpack_require__(174);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    notifications: _notifications2.default,
    search: _input2.default
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

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(43);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(44);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['placeholder', 'focus'],

  data: function data() {
    return {
      input: '',
      autocomplete: {
        name: '',
        type: ''
      },
      suggestions: []
    };
  },
  mounted: function mounted() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (this.focus && !isMobile) {
      this.$refs.input.focus();
    }
  },


  storeModule: {
    name: 'search',
    state: {
      input: ''
    },
    mutations: {
      setSearchInput: function setSearchInput(state, input) {
        state.input = input;
      }
    },
    actions: {
      applyInputQuery: function applyInputQuery(_ref, route) {
        var commit = _ref.commit;

        if (route.query.input) {
          commit('setSearchInput', route.query.input);
        }
      }
    }
  },

  methods: {
    fetch: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(event) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.input = event.target.value;
                this.$store.commit('setSearchInput', event.target.value);

                if (!this.autocomplete.name.startsWith(event.target.value)) {
                  this.autocomplete = {
                    name: '',
                    category: 'Any'
                  };
                }
                _context.next = 5;
                return this.fetchSuggestions();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetch(_x) {
        return _ref2.apply(this, arguments);
      }

      return fetch;
    }(),
    fetchSuggestions: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var result, regex;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                result = [];

                if (!(this.input.length > 1)) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 4;
                return this.$cubic.get('/warframe/v1/suggestions?query=' + this.input + '&limit=3');

              case 4:
                result = _context2.sent;

              case 5:
                regex = new RegExp('^' + this.input, 'i');

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

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchSuggestions() {
        return _ref3.apply(this, arguments);
      }

      return fetchSuggestions;
    }(),
    complete: function complete() {
      var suggestion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.autocomplete.name) {
        this.input = this.autocomplete.name;
      }
    },
    search: function search() {
      var suggestion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (suggestion.name) {
        this.input = '';
        this.autocomplete = {
          name: '',
          category: ''
        };
        this.query(suggestion.webUrl);
      }
      if (this.suggestions.length) {
        this.input = '';
        this.autocomplete = {
          name: '',
          category: ''
        };
        this.query(this.suggestions[0].webUrl);
        this.suggestions = [];
      } else {
        this.$router.push('/warframe/search?input=' + this.input);
      }
    },
    query: function query(url) {
      var path = void 0;
      var route = this.$route.path;
      var item = this.$route.params.item;

      if (this.$route.fullPath.startsWith('/warframe/items/')) {
        path = '' + url + route.split(item)[1];
        path = path.endsWith('//') ? path.slice(0, -1) : path;
      } else {
        path = url;
      }

      this.$router.push(path);
    }
  }
};

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _progress = __webpack_require__(65);

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    progressbar: _progress2.default
  }
};

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_vue_vue_type_template_id_51c25491_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(179);
/* harmony import */ var _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(154);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _module_vue_vue_type_style_index_0_id_51c25491_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(178);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _module_vue_vue_type_template_id_51c25491_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _module_vue_vue_type_template_id_51c25491_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "51c25491",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _warframe_vue_vue_type_template_id_59266df3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(181);
/* harmony import */ var _warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(149);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _warframe_vue_vue_type_style_index_0_id_59266df3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(177);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _warframe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _warframe_vue_vue_type_template_id_59266df3_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _warframe_vue_vue_type_template_id_59266df3_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "59266df3",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

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

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_vue_vue_type_template_id_6cfa2cb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
/* harmony import */ var _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(151);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _input_vue_vue_type_template_id_6cfa2cb2___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _input_vue_vue_type_template_id_6cfa2cb2___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_style_index_0_id_59266df3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(153);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_style_index_0_id_59266df3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_style_index_0_id_59266df3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_style_index_0_id_59266df3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_id_51c25491_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_id_51c25491_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_id_51c25491_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_id_51c25491_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/module.vue?vue&type=template&id=51c25491&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"module"},[_c('div',{staticClass:"header"},[_vm._t("header")],2),_vm._v(" "),_c('div',{staticClass:"body"},[_vm._t("body")],2),_vm._v(" "),_c('div',{staticClass:"footer"},[_vm._t("footer")],2),_vm._v(" "),_c('progressbar',{ref:"progress"})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/module.vue?vue&type=template&id=51c25491&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/input.vue?vue&type=template&id=6cfa2cb2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search"},[_c('div',{staticClass:"field"},[_c('label',[_vm._v("Search")]),_vm._v(" "),_c('input',{ref:"input",attrs:{"placeholder":_vm.placeholder || 'Try: Frost Prime, Maiming Strike...',"type":"text"},domProps:{"value":_vm.input.name || _vm.input},on:{"input":_vm.fetch,"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }$event.preventDefault();return _vm.complete($event)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.search($event)}}}),_vm._v(" "),_c('span',{staticClass:"autocomplete"},[_vm._v(_vm._s(_vm.autocomplete.name))]),_vm._v(" "),_c('span',{staticClass:"autocomplete-type"},[_vm._v(_vm._s(_vm.autocomplete.category))])]),_vm._v(" "),_c('div',{staticClass:"tools"},_vm._l((_vm.suggestions),function(suggestion){return _c('div',{key:suggestion.uniqueName,staticClass:"suggestion",on:{"click":function($event){return _vm.search(suggestion)}}},[_c('div',{staticClass:"ico-36"},[_c('img',{attrs:{"src":suggestion.imgUrl,"alt":suggestion.name}}),_vm._v(" "),_c('img',{staticClass:"backdrop",attrs:{"src":suggestion.imgUrl,"alt":suggestion.name}})]),_vm._v(" "),_c('div',{staticClass:"suggestion-main"},[_c('span',{staticClass:"suggestion-name"},[_vm._v(_vm._s(suggestion.name))]),_vm._v(" "),_c('span',{staticClass:"suggestion-type"},[_vm._v(_vm._s(suggestion.type))])]),_vm._v(" "),_c('span',{staticClass:"suggestion-data"},[_vm._v(_vm._s(suggestion.keyData))])])}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/input.vue?vue&type=template&id=6cfa2cb2&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/nav/warframe.vue?vue&type=template&id=59266df3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"row"},[_c('div',{staticClass:"col nav-l"},[_c('router-link',{attrs:{"to":"/warframe","exact":""}},[_c('img',{staticClass:"logo ico-h-20",attrs:{"src":"/img/brand/nexushub-logo-typeface.svg","alt":"Nexushub Logo"}})])],1),_vm._v(" "),_c('search',{attrs:{"placeholder":"Search items..."}}),_vm._v(" "),_c('div',{staticClass:"col nav-r"},[_c('notifications')],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/nav/warframe.vue?vue&type=template&id=59266df3&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opensource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(372);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opensource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opensource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opensource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opensource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opensource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _appContent = __webpack_require__(148);

var _appContent2 = _interopRequireDefault(_appContent);

var _module2 = __webpack_require__(158);

var _module3 = _interopRequireDefault(_module2);

var _warframe = __webpack_require__(159);

var _warframe2 = _interopRequireDefault(_warframe);

var _vueNoSsr = __webpack_require__(373);

var _vueNoSsr2 = _interopRequireDefault(_vueNoSsr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.browser) {
  var vueTyper = __webpack_require__(690).VueTyper;
} else {
  vueTyper = {};
}

exports.default = {
  components: {
    navigation: _warframe2.default,
    appContent: _appContent2.default,
    vueTyper: vueTyper,
    noSsr: _vueNoSsr2.default,
    module: _module3.default
  },

  methods: {
    demoNotifications: function demoNotifications() {
      this.$store.commit('addNotification', {
        title: 'This notification box..',
        body: '..to be precise.'
      });
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(69)))

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * vue-no-ssr v1.1.1
 * (c) 2018-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */


var index = {
  name: 'NoSsr',
  functional: true,
  props: {
    placeholder: String,
    placeholderTag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h, ref) {
    var parent = ref.parent;
    var slots = ref.slots;
    var props = ref.props;

    var ref$1 = slots();
    var defaultSlot = ref$1.default; if ( defaultSlot === void 0 ) defaultSlot = [];
    var placeholderSlot = ref$1.placeholder;

    if (parent._isMounted) {
      return defaultSlot
    }

    parent.$once('hook:mounted', function () {
      parent.$forceUpdate();
    });

    if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
      return h(
        props.placeholderTag,
        {
          class: ['no-ssr-placeholder']
        },
        props.placeholder || placeholderSlot
      )
    }

    // Return a placeholder element for each child in the default slot
    // Or if no children return a single placeholder
    return defaultSlot.length > 0 ? defaultSlot.map(function () { return h(false); }) : h(false)
  }
};

module.exports = index;


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vue-typer v1.2.0
 * Copyright 2016-2017 Chris Nguyen
 * Released under the MIT license.
 */
!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=13)}([function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(1),i=n(0),o=n(30),u=n(34),a=function(t,e,n){var s,c,f,l=t&a.F,p=t&a.G,d=t&a.S,h=t&a.P,y=t&a.B,v=t&a.W,x=p?i:i[e]||(i[e]={}),m=x.prototype,g=p?r:d?r[e]:(r[e]||{}).prototype;p&&(n=e);for(s in n)(c=!l&&g&&void 0!==g[s])&&s in x||(f=c?g[s]:n[s],x[s]=p&&"function"!=typeof g[s]?n[s]:y&&c?o(f,r):v&&g[s]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):h&&"function"==typeof f?o(Function.call,f):f,h&&((x.virtual||(x.virtual={}))[s]=f,t&a.R&&m&&!m[s]&&u(m,s,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var u=e[i];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(t,e){t.exports=function(t,e,n,r){var i,o=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(i=t,o=t.default);var a="function"==typeof o?o.options:o;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var s=a.computed||(a.computed={});Object.keys(r).forEach(function(t){var e=r[t];s[t]=function(){return e}})}return{esModule:i,exports:o,options:a}}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=f[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var u=[],i=0;i<n.parts.length;i++)u.push(o(n.parts[i]));f[n.id]={id:n.id,refs:1,parts:u}}}}function i(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function o(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return y;r.parentNode.removeChild(r)}if(v){var o=d++;r=p||(p=i()),e=u.bind(null,r,o,!1),n=u.bind(null,r,o,!0)}else r=i(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function u(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var o=document.createTextNode(i),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(o,u[e]):t.appendChild(o)}}function a(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(64),f={},l=s&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,y=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var i=c(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var u=i[o],a=f[u.id];a.refs--,n.push(a)}e?(i=c(t,e),r(i)):i=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete f[a.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(36),i=n(9);t.exports=function(t){return r(i(t))}},function(t,e,n){n(63);var r=n(7)(n(19),n(60),"data-v-c41bac74",null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VueTyper=void 0;var r=n(12),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.VueTyper=i.default;e.default={install:function(t){t.component("vue-typer",i.default)}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t){return"number"==typeof t&&!(0,c.default)(t)&&(0,a.default)(t)}function o(t,e){return i(t)&&i(e)&&t<=e}Object.defineProperty(e,"__esModule",{value:!0});var u=n(20),a=r(u),s=n(21),c=r(s);e.default=function(t,e){return o(t,e)?(t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t):-1}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(!Array.isArray(t)||!Array.isArray(e))return!1;if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}},function(t,e,n){"use strict";function r(t,e,n){if(e!==n){var r=t[e];t[e]=t[n],t[n]=r}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(14),o=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=function(t){if(t instanceof Array)for(var e=t.length-1;e>0;e--){var n=(0,o.default)(0,e);r(t,e,n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={props:{animation:{type:String,default:"blink",validator:function(t){return/^solid$|^blink$|^smooth$|^phase$|^expand$/.test(t)}}},computed:{animationClass:function(){return"vue-typer-caret-"+this.animation}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{val:{type:String,default:""}},computed:{classes:function(){return{newline:0===this.val.indexOf("\n")}}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(22),o=r(i),u=n(56),a=r(u),s=n(57),c=r(s),f=n(15),l=r(f),p=n(16),d=r(p),h=n(55),y=r(h),v={IDLE:"idle",TYPING:"typing",ERASING:"erasing",COMPLETE:"complete"},x={BACKSPACE:"backspace",SELECT_BACK:"select-back",SELECT_ALL:"select-all",CLEAR:"clear"};e.default={name:"VueTyper",components:{Caret:a.default,Char:c.default},props:{text:{type:[String,Array],required:!0,validator:function(t){return"string"==typeof t?t.length>0:t.every(function(t){return"string"==typeof t&&t.length>0})}},repeat:{type:Number,default:1/0,validator:function(t){return t>=0}},shuffle:{type:Boolean,default:!1},initialAction:{type:String,default:v.TYPING,validator:function(t){return!!t.match("^"+v.TYPING+"|"+v.ERASING+"$")}},preTypeDelay:{type:Number,default:70,validator:function(t){return t>=0}},typeDelay:{type:Number,default:70,validator:function(t){return t>=0}},preEraseDelay:{type:Number,default:2e3,validator:function(t){return t>=0}},eraseDelay:{type:Number,default:250,validator:function(t){return t>=0}},eraseStyle:{type:String,default:x.SELECT_ALL,validator:function(t){return(0,o.default)(x).some(function(e){return x[e]===t})}},eraseOnComplete:{type:Boolean,default:!1},caretAnimation:String},data:function(){return{state:v.IDLE,nextState:null,spool:[],spoolIndex:-1,previousTextIndex:-1,currentTextIndex:-1,repeatCounter:0,actionTimeout:0,actionInterval:0}},computed:{caretClasses:function(){var t=this.state===v.IDLE;return{idle:t,"pre-type":t&&this.nextState===v.TYPING,"pre-erase":t&&this.nextState===v.ERASING,typing:this.state===v.TYPING,selecting:this.state===v.ERASING&&this.isSelectionBasedEraseStyle,erasing:this.state===v.ERASING&&!this.isSelectionBasedEraseStyle,complete:this.state===v.COMPLETE}},rightCharClasses:function(){return{selected:this.state===v.ERASING&&this.isSelectionBasedEraseStyle,erased:this.state!==v.ERASING||this.state===v.ERASING&&!this.isSelectionBasedEraseStyle}},isSelectionBasedEraseStyle:function(){return!!this.eraseStyle.match("^"+x.SELECT_BACK+"|"+x.SELECT_ALL+"$")},isEraseAllStyle:function(){return!!this.eraseStyle.match("^"+x.CLEAR+"|"+x.SELECT_ALL+"$")},isDoneTyping:function(){return this.currentTextIndex>=this.currentTextLength},isDoneErasing:function(){return this.isSelectionBasedEraseStyle?this.currentTextIndex<=0&&this.previousTextIndex<=0:this.currentTextIndex<=0},onLastWord:function(){return this.spoolIndex===this.spool.length-1},shouldRepeat:function(){return this.repeatCounter<this.repeat},currentText:function(){return this.spoolIndex>=0&&this.spoolIndex<this.spool.length?this.spool[this.spoolIndex]:""},currentTextArray:function(){return(0,y.default)(this.currentText,"")},currentTextLength:function(){return this.currentTextArray.length},numLeftChars:function(){return this.currentTextIndex<0?0:this.currentTextIndex},numRightChars:function(){return this.currentTextLength-this.numLeftChars}},mounted:function(){this.init()},beforeDestroy:function(){this.cancelCurrentAction()},methods:{init:function(){if("string"==typeof this.text)this.spool=[this.text];else{var t=this.text.slice();t=t.filter(function(t){return t.length>0}),this.spool=t}this.repeatCounter=0,this.resetSpool(),this.initialAction===v.TYPING?this.startTyping():this.initialAction===v.ERASING&&(this.moveCaretToEnd(),this.onTyped())},reset:function(){this.cancelCurrentAction(),this.init()},resetSpool:function(){this.spoolIndex=0,this.shuffle&&this.spool.length>1&&(0,d.default)(this.spool)},cancelCurrentAction:function(){this.actionInterval&&(clearInterval(this.actionInterval),this.actionInterval=0),this.actionTimeout&&(clearTimeout(this.actionTimeout),this.actionTimeout=0)},shiftCaret:function(t){this.previousTextIndex=this.currentTextIndex;var e=this.currentTextIndex+t;this.currentTextIndex=Math.min(Math.max(e,0),this.currentTextLength)},moveCaretToStart:function(){this.previousTextIndex=this.currentTextIndex,this.currentTextIndex=0},moveCaretToEnd:function(){this.previousTextIndex=this.currentTextIndex,this.currentTextIndex=this.currentTextLength},typeStep:function(){if(!this.isDoneTyping){this.shiftCaret(1);var t=this.previousTextIndex,e=this.currentTextArray[t];this.$emit("typed-char",e,t)}this.isDoneTyping&&(this.cancelCurrentAction(),this.$nextTick(this.onTyped))},eraseStep:function(){this.isDoneErasing||(this.isEraseAllStyle?this.moveCaretToStart():this.shiftCaret(-1)),this.isDoneErasing&&(this.cancelCurrentAction(),this.$nextTick(this.onErased))},startTyping:function(){var t=this;this.actionTimeout||this.actionInterval||(this.moveCaretToStart(),this.state=v.IDLE,this.nextState=v.TYPING,this.actionTimeout=setTimeout(function(){t.state=v.TYPING,t.typeStep(),t.isDoneTyping||(t.actionInterval=setInterval(t.typeStep,t.typeDelay))},this.preTypeDelay))},startErasing:function(){var t=this;this.actionTimeout||this.actionInterval||(this.moveCaretToEnd(),this.state=v.IDLE,this.nextState=v.ERASING,this.actionTimeout=setTimeout(function(){t.state=v.ERASING,t.eraseStep(),t.isDoneErasing||(t.actionInterval=setInterval(t.eraseStep,t.eraseDelay))},this.preEraseDelay))},onTyped:function(){this.$emit("typed",this.currentText),this.onLastWord?this.eraseOnComplete||this.shouldRepeat?this.startErasing():this.onComplete():this.startErasing()},onErased:function(){this.$emit("erased",this.currentText),this.onLastWord?this.shouldRepeat?(this.repeatCounter++,this.resetSpool(),this.startTyping()):this.onComplete():(this.spoolIndex++,this.startTyping())},onComplete:function(){this.state=v.COMPLETE,this.nextState=null,this.$emit("completed")}},watch:{text:function(t,e){t===e||(0,l.default)(t,e)||this.reset()},repeat:function(){this.reset()},shuffle:function(){this.reset()}}}},function(t,e,n){t.exports={default:n(23),__esModule:!0}},function(t,e,n){t.exports={default:n(24),__esModule:!0}},function(t,e,n){t.exports={default:n(25),__esModule:!0}},function(t,e,n){n(49),t.exports=n(0).Number.isFinite},function(t,e,n){n(50),t.exports=n(0).Number.isNaN},function(t,e,n){n(51),t.exports=n(0).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(11),i=n(45),o=n(44);t.exports=function(t){return function(e,n,u){var a,s=r(e),c=i(s.length),f=o(u,c);if(t&&n!=n){for(;c>f;)if((a=s[f++])!=a)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(26);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(5),i=n(1).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(37),i=n(41);t.exports=n(2)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(2)&&!n(4)(function(){return 7!=Object.defineProperty(n(31)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(29);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(27),i=n(35),o=n(47),u=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(33),i=n(11),o=n(28)(!1),u=n(42)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),s=0,c=[];for(n in a)n!=u&&r(a,n)&&c.push(n);for(;e.length>s;)r(a,n=e[s++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var r=n(38),i=n(32);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(3),i=n(0),o=n(4);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",u)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(43)("keys"),i=n(48);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(1),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var r=n(10),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(10),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(9);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(3),i=n(1).isFinite;r(r.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},function(t,e,n){var r=n(3);r(r.S,"Number",{isNaN:function(t){return t!=t}})},function(t,e,n){var r=n(46),i=n(39);n(40)("keys",function(){return function(t){return i(r(t))}})},function(t,e,n){e=t.exports=n(6)(),e.push([t.i,".char[data-v-302772ec]{display:inline-block;white-space:pre-wrap}.newline[data-v-302772ec]{display:inline}.typed[data-v-302772ec]{color:#000;background-color:transparent}.selected[data-v-302772ec]{color:#000;background-color:#accef7}.erased[data-v-302772ec]{display:none}",""])},function(t,e,n){e=t.exports=n(6)(),e.push([t.i,'@keyframes vue-typer-caret-blink{50%{opacity:0}to{opacity:1}}@keyframes vue-typer-caret-smooth{0%,20%{opacity:1}60%,to{opacity:0}}@keyframes vue-typer-caret-phase{0%,20%{opacity:1}90%,to{opacity:0}}@keyframes vue-typer-caret-expand{0%,20%{transform:scaleY(1)}80%,to{transform:scaleY(0)}}.vue-typer-caret-blink[data-v-a16e0f02]{animation:vue-typer-caret-blink 1s step-start 0s infinite}.vue-typer-caret-smooth[data-v-a16e0f02]{animation:vue-typer-caret-smooth .5s ease-in-out 0s infinite alternate}.vue-typer-caret-phase[data-v-a16e0f02]{animation:vue-typer-caret-phase .5s ease-in-out 0s infinite alternate}.vue-typer-caret-expand[data-v-a16e0f02]{animation:vue-typer-caret-expand .5s ease-in-out 0s infinite alternate}span.caret[data-v-a16e0f02]:empty:before{content:"\\200B"}span[data-v-a16e0f02]{display:inline-block;width:1px}.idle[data-v-a16e0f02],.typing[data-v-a16e0f02]{background-color:#000}.selecting[data-v-a16e0f02]{display:none;background-color:#000}.erasing[data-v-a16e0f02]{background-color:#000}.complete[data-v-a16e0f02]{display:none;background-color:#000}',""])},function(t,e,n){e=t.exports=n(6)(),e.push([t.i,"span.vue-typer[data-v-c41bac74]{cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}span.vue-typer span.left[data-v-c41bac74],span.vue-typer span.right[data-v-c41bac74]{display:inline}",""])},function(t,e,n){(function(t,n){function r(t){return t.split("")}function i(t){return B.test(t)}function o(t){return i(t)?u(t):r(t)}function u(t){return t.match(G)||[]}function a(t){return x(t)&&H.call(t)==j}function s(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var o=Array(i);++r<i;)o[r]=t[r+e];return o}function c(t){if("string"==typeof t)return t;if(g(t))return Z?Z.call(t):"";var e=t+"";return"0"==e&&1/t==-S?"-0":e}function f(t,e,n){var r=t.length;return n=void 0===n?r:n,!e&&n>=r?t:s(t,e,n)}function l(t,e){return!!(e=null==e?E:e)&&("number"==typeof t||O.test(t))&&t>-1&&t%1==0&&t<e}function p(t,e,n){if(!x(n))return!1;var r=typeof e;return!!("number"==r?h(n)&&l(e,n.length):"string"==r&&e in n)&&d(n[e],t)}function d(t,e){return t===e||t!==t&&e!==e}function h(t){return null!=t&&v(t.length)&&!y(t)}function y(t){var e=x(t)?H.call(t):"";return e==_||e==I}function v(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=E}function x(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){return!!t&&"object"==typeof t}function g(t){return"symbol"==typeof t||m(t)&&H.call(t)==A}function b(t){return null==t?"":c(t)}function T(t,e,n){return n&&"number"!=typeof n&&p(t,e,n)&&(e=n=void 0),(n=void 0===n?C:n>>>0)?(t=b(t),t&&("string"==typeof e||null!=e&&!tt(e))&&!(e=c(e))&&i(t)?f(o(t),0,n):t.split(e,n)):[]}var S=1/0,E=9007199254740991,C=4294967295,_="[object Function]",I="[object GeneratorFunction]",j="[object RegExp]",A="[object Symbol]",O=/^(?:0|[1-9]\d*)$/,N="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",L="\\ud83c[\\udffb-\\udfff]",M="(?:\\ud83c[\\udde6-\\uddff]){2}",w="[\\ud800-\\udbff][\\udc00-\\udfff]",P="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",R="(?:\\u200d(?:"+["[^\\ud800-\\udfff]",M,w].join("|")+")[\\ufe0e\\ufe0f]?"+P+")*",k="[\\ufe0e\\ufe0f]?"+P+R,D="(?:"+["[^\\ud800-\\udfff]"+N+"?",N,M,w,"[\\ud800-\\udfff]"].join("|")+")",G=RegExp(L+"(?="+L+")|"+D+k,"g"),B=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),$="object"==typeof t&&t&&t.Object===Object&&t,F="object"==typeof self&&self&&self.Object===Object&&self,Y=$||F||Function("return this")(),U="object"==typeof e&&e&&!e.nodeType&&e,W=U&&"object"==typeof n&&n&&!n.nodeType&&n,V=W&&W.exports===U,K=V&&$.process,q=function(){try{return K&&K.binding("util")}catch(t){}}(),z=q&&q.isRegExp,J=Object.prototype,H=J.toString,Q=Y.Symbol,X=Q?Q.prototype:void 0,Z=X?X.toString:void 0,tt=z?function(t){return function(e){return t(e)}}(z):a;n.exports=T}).call(e,n(65),n(66)(t))},function(t,e,n){n(62);var r=n(7)(n(17),n(59),"data-v-a16e0f02",null);t.exports=r.exports},function(t,e,n){n(61);var r=n(7)(n(18),n(58),"data-v-302772ec",null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"char",class:t.classes},[t._v(t._s(t.val))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"caret custom",class:t.animationClass})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"vue-typer"},[n("span",{staticClass:"left"},t._l(t.numLeftChars,function(e){return n("char",{staticClass:"custom typed",attrs:{val:t.currentTextArray[e-1]}})})),n("caret",{class:t.caretClasses,attrs:{animation:t.caretAnimation}}),n("span",{staticClass:"right"},t._l(t.numRightChars,function(e){return n("char",{staticClass:"custom",class:t.rightCharClasses,attrs:{val:t.currentTextArray[t.numLeftChars+e-1]}})}))],1)},staticRenderFns:[]}},function(t,e,n){var r=n(52);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(8)("3bfdc45b",r,!0)},function(t,e,n){var r=n(53);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(8)("0dba035c",r,!0)},function(t,e,n){var r=n(54);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(8)("0f4cea8e",r,!0)},function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],u=o[0],a=o[1],s=o[2],c=o[3],f={id:t+":"+i,css:a,media:s,sourceMap:c};r[u]?r[u].parts.push(f):n.push(r[u]={id:u,parts:[f]})}return n}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}}])});

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opensource_vue_vue_type_style_index_0_id_605d9c4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(374);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opensource_vue_vue_type_style_index_0_id_605d9c4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opensource_vue_vue_type_style_index_0_id_605d9c4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opensource_vue_vue_type_style_index_0_id_605d9c4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/opensource.vue?vue&type=template&id=605d9c4e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation'),_vm._v(" "),_c('app-content',[_c('section',[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col"},[_c('h1',[_vm._v("\n              Building a platform "),_c('br'),_vm._v("that matters\n            ")]),_vm._v(" "),_c('p',[_vm._v("\n              NexusHub is an open source project completely\n              powered by its community, so anyone is welcome to\n              build their own vision of this platform for any game they like.\n              All while getting the full revenue for what you've built in return!\n            ")]),_vm._v(" "),_c('p',{staticClass:"typer"},[_c('span',[_vm._v("Want to")]),_vm._v(" "),_c('no-ssr',[_c('vue-typer',{attrs:{"text":['join a family of developers?', 'create awesome tools for the game you love?', 'make a living with your passion for games?']}})],1)],1),_vm._v(" "),_c('a',{staticClass:"btn",attrs:{"href":"https://discord.gg/TCxe6P4","target":"_blank"}},[_vm._v("\n              Join us on Discord\n            ")])]),_vm._v(" "),_c('div',{staticClass:"col img-col"},[_c('img',{staticClass:"codez",attrs:{"src":"/img/open-source/coding.svg","alt":""}})])])])]),_vm._v(" "),_c('section',[_c('div',{staticClass:"container repos"},[_c('h2',[_vm._v("Here's some stuff that we've built so far.")]),_vm._v(" "),_c('div',{staticClass:"row-margin"},[_c('a',{staticClass:"col-b",attrs:{"href":"https://github.com/nexus-devs/NexusHub","target":"_blank"}},[_c('module',{staticClass:"interactive"},[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-32",attrs:{"src":"/img/brand/nexushub-logo-bw.svg","alt":"NexusHub"}}),_vm._v(" "),_c('h3',[_vm._v("NexusHub")])]),_vm._v(" "),_c('template',{slot:"body"},[_c('p',[_vm._v("Economy Analytics and Game Data for Warframe.")])])],2)],1),_vm._v(" "),_c('a',{staticClass:"col-b",attrs:{"href":"https://github.com/cubic-js/cubic","target":"_blank"}},[_c('module',{staticClass:"interactive"},[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-32",attrs:{"src":"/img/open-source/cubic.svg","alt":"Cubic"}}),_vm._v(" "),_c('h3',[_vm._v("Cubic")])]),_vm._v(" "),_c('template',{slot:"body"},[_c('p',[_vm._v("Fully Modular Javascript App Platform.")])])],2)],1),_vm._v(" "),_c('a',{staticClass:"col-b",attrs:{"href":"https://github.com/nexus-devs/beholder","target":"_blank"}},[_c('module',{staticClass:"interactive"},[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-32",attrs:{"src":"/img/open-source/beholder.svg","alt":"Beholder"}}),_vm._v(" "),_c('h3',[_vm._v("Beholder")])]),_vm._v(" "),_c('template',{slot:"body"},[_c('p',[_vm._v("Layout detection framework for DirectX11 applications.")])])],2)],1),_vm._v(" "),_c('a',{staticClass:"col-b",attrs:{"href":"https://github.com/WFCD/warframe-items","target":"_blank"}},[_c('module',{staticClass:"interactive"},[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-32",attrs:{"src":"/img/open-source/warframe-items.svg","alt":"warframe-items"}}),_vm._v(" "),_c('h3',[_vm._v("warframe-items")])]),_vm._v(" "),_c('template',{slot:"body"},[_c('p',[_vm._v("Complete collection of data for every item in Warframe.")])])],2)],1),_vm._v(" "),_c('a',{staticClass:"col-b",attrs:{"href":"https://github.com/WFCD/warframe-items","target":"_blank"}},[_c('module',{staticClass:"interactive"},[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-32",attrs:{"src":"/img/open-source/warframe-items.svg","alt":"warframe-items"}}),_vm._v(" "),_c('h3',[_vm._v("warframe-patchlogs")])]),_vm._v(" "),_c('template',{slot:"body"},[_c('p',[_vm._v("All patchlogs in Warframe parsed to more usable JSON format.")])])],2)],1),_vm._v(" "),_c('div',{staticClass:"col-b"}),_vm._v(" "),_c('div',{staticClass:"col-b"}),_vm._v(" "),_c('div',{staticClass:"col-b"})])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/opensource.vue?vue&type=template&id=605d9c4e&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);