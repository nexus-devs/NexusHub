(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_7015b5e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(942);
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(423);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _search_vue_vue_type_style_index_0_id_7015b5e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(903);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_7015b5e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _search_vue_vue_type_template_id_7015b5e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "7015b5e6",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(196), __esModule: true };

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = __webpack_require__(35);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      visible: false
    };
  },


  computed: {
    theme: function theme() {
      return (0, _theme2.default)(this);
    },
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

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"notification-header":"warframe_notification-header_1ejVz","notification-body":"warframe_notification-body_n9BTg","footer":"warframe_footer_1YKJU","unread-bubble":"warframe_unread-bubble_3a5aL"};

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"notification-header":"wow-classic_notification-header_1QwD6","notification-body":"wow-classic_notification-body_3a5tH","footer":"wow-classic_footer_2uhST","unread-bubble":"wow-classic_unread-bubble_3Fi-7"};

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/app-content.vue?vue&type=template&id=3ce135d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container"},[_c('transition',{attrs:{"appear":"","name":"zoom"}},[_c('div',[_c('main',{staticClass:"app-content"},[_vm._t("default")],2)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/app-content.vue?vue&type=template&id=3ce135d2&

// EXTERNAL MODULE: ./ui/app-content.vue?vue&type=style&index=0&lang=scss&
var app_contentvue_type_style_index_0_lang_scss_ = __webpack_require__(182);

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

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(165);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function meta(options) {
  var required = ['description', 'title'];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(required), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (!options[key]) {
        throw new Error('Missing ' + key + ' option in meta function.');
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
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

exports.default = meta;

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(176);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ['name', 'maxHeight', 'maxWidth'],

  data: function data() {
    return {
      display: 'none'
    };
  },
  mounted: function mounted() {
    var nitroAds = window.nitroAds;
    if (!nitroAds) return;

    this.display = 'block';
    nitroAds.createAd('ad-' + this.name, {
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
};

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(179);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _search = __webpack_require__(199);

var _search2 = _interopRequireDefault(_search);

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


  methods: {
    fetch: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(event) {
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
        return _ref.apply(this, arguments);
      }

      return fetch;
    }(),
    fetchSuggestions: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var result, query, regex;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                result = [];

                if (!(this.input.length > 1)) {
                  _context2.next = 6;
                  break;
                }

                query = encodeURIComponent(this.input);
                _context2.next = 5;
                return this.$cubic.get('/warframe/v1/search/suggestions?query=' + query + '&limit=4');

              case 5:
                result = _context2.sent;

              case 6:
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

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchSuggestions() {
        return _ref2.apply(this, arguments);
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
  },

  storeModule: _search2.default
};

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(166);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_4d1e7bb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_4d1e7bb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_4d1e7bb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_4d1e7bb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/notifications.vue?vue&type=template&id=4d1e7bb0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"notifications"},[_c('div',{staticClass:"nav-ico interactive",on:{"click":_vm.toggle}},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/notifications.svg","alt":"Notifications"}})]),_vm._v(" "),_c('div',{staticClass:"unread-bubble",class:[{ unread: _vm.unread.length }, _vm.theme['unread-bubble']]}),_vm._v(" "),_c('div',{staticClass:"notification-container",class:{ visible: _vm.visible }},[_c('div',{staticClass:"notification-header",class:_vm.theme['notification-header']},[_c('span',[_vm._v("Notifications")])]),_vm._v(" "),_c('div',{staticClass:"notification-body",class:_vm.theme['notification-body']},[(_vm.unread.length)?_c('div',{staticClass:"notification-wrapper"},_vm._l((_vm.unread),function(notification){return _c('div',{key:notification.title,staticClass:"notification"},[_c('h4',[_vm._v(_vm._s(notification.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(notification.body))]),_vm._v(" "),(notification.buttons)?_c('div',{staticClass:"footer",class:_vm.theme.footer},_vm._l((notification.buttons),function(button){return _c('button',{key:button.text,on:{"click":button.fn}},[_vm._v("\n                "+_vm._s(button.text)+"\n              ")])}),0):_vm._e(),_vm._v(" "),_c('img',{staticClass:"dismiss ico-h-20 interactive",attrs:{"src":"/img/ui/close.svg","alt":"Dismiss"},on:{"click":function($event){return _vm.dismiss(notification)}}})])}),0):_c('div',{staticClass:"no-notifcations"},[_vm._v("\n          No notifications. We have dispatched a pigeon to deliver the latest news soon 🕊️\n        ")])])])]),_vm._v(" "),_c('div',{staticClass:"hide",class:{ visible: _vm.visible },on:{"click":_vm.toggle}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/notifications.vue?vue&type=template&id=4d1e7bb0&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notifications_vue_vue_type_template_id_4d1e7bb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(167);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(183);
/* harmony import */ var _notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(184);
/* harmony import */ var _notifications_vue_vue_type_style_index_2_id_4d1e7bb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(185);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);










function injectStyles (context) {
  
  this["warframe"] = (_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"])
this["wow-classic"] = (_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"].locals || _notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"])

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(
  _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notifications_vue_vue_type_template_id_4d1e7bb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _notifications_vue_vue_type_template_id_4d1e7bb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "4d1e7bb0",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(79);
__webpack_require__(77);
module.exports = __webpack_require__(197);


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var get = __webpack_require__(78);
module.exports = __webpack_require__(2).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nitroAds_vue_vue_type_template_id_b107c58a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(224);
/* harmony import */ var _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(175);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(218);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nitroAds_vue_vue_type_template_id_b107c58a___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _nitroAds_vue_vue_type_template_id_b107c58a___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
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
};

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_vue_vue_type_template_id_5f330c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(225);
/* harmony import */ var _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(178);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _input_vue_vue_type_template_id_5f330c0a___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _input_vue_vue_type_template_id_5f330c0a___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(219), __esModule: true };

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(177);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(220);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(6);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(221) });


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(8);
var getKeys = __webpack_require__(59);
var gOPS = __webpack_require__(222);
var pIE = __webpack_require__(223);
var toObject = __webpack_require__(58);
var IObject = __webpack_require__(80);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(36)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 222:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 223:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ads/nitroAds.vue?vue&type=template&id=b107c58a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ad-unit layout-center",style:({
  display: _vm.display,
  'max-height': _vm.maxHeight,
  'max-width': _vm.maxWidth
}),attrs:{"id":("ad-" + _vm.name)}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ads/nitroAds.vue?vue&type=template&id=b107c58a&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/input.vue?vue&type=template&id=5f330c0a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search"},[_c('div',{staticClass:"field"},[_c('label',[_vm._v("Search")]),_vm._v(" "),_c('input',{ref:"input",attrs:{"placeholder":_vm.placeholder || 'Try: Frost Prime, Maiming Strike...',"type":"text"},domProps:{"value":_vm.input.name || _vm.input},on:{"input":_vm.fetch,"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }$event.preventDefault();if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.complete($event)},function($event){if(!$event.shiftKey){ return null; }$event.stopPropagation();}],"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.search($event)}}}),_vm._v(" "),_c('span',{staticClass:"autocomplete"},[_vm._v(_vm._s(_vm.autocomplete.name))]),_vm._v(" "),(_vm.autocomplete.category)?_c('span',{staticClass:"autocomplete-type"},[_vm._v("\n      "+_vm._s(_vm.autocomplete.category === 'Any' ? 'Search anywhere' : ("Found in " + (_vm.autocomplete.category)))+"\n    ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"tools"},_vm._l((_vm.suggestions),function(suggestion){return _c('div',{key:suggestion.uniqueName,staticClass:"suggestion",on:{"click":function($event){return _vm.search(suggestion)}}},[_c('div',{staticClass:"ico-36"},[_c('img',{attrs:{"src":suggestion.imgUrl,"alt":suggestion.name}}),_vm._v(" "),_c('img',{staticClass:"backdrop",attrs:{"src":suggestion.imgUrl,"alt":suggestion.name}})]),_vm._v(" "),_c('div',{staticClass:"suggestion-main"},[_c('span',{staticClass:"suggestion-name"},[_vm._v(_vm._s(suggestion.name))]),_vm._v(" "),_c('span',{staticClass:"suggestion-type"},[_vm._v(_vm._s(suggestion.type))])]),_vm._v(" "),(suggestion.keyData)?_c('span',{staticClass:"suggestion-data"},[_vm._v(_vm._s(suggestion.keyData))]):_vm._e()])}),0),_vm._v(" "),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/input.vue?vue&type=template&id=5f330c0a&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(424);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nitroAds = __webpack_require__(198);

var _nitroAds2 = _interopRequireDefault(_nitroAds);

var _appContent = __webpack_require__(173);

var _appContent2 = _interopRequireDefault(_appContent);

var _meta = __webpack_require__(174);

var _meta2 = _interopRequireDefault(_meta);

var _general = __webpack_require__(894);

var _general2 = _interopRequireDefault(_general);

var _resultsGroup = __webpack_require__(896);

var _resultsGroup2 = _interopRequireDefault(_resultsGroup);

var _input = __webpack_require__(215);

var _input2 = _interopRequireDefault(_input);

var _serp = __webpack_require__(902);

var _serp2 = _interopRequireDefault(_serp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ongoing = setTimeout(function () {});

exports.default = {
  components: {
    ad: _nitroAds2.default,
    navigation: _general2.default,
    appContent: _appContent2.default,

    search: _input2.default,
    resultsGroup: _resultsGroup2.default
  },

  asyncData: function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
      var store = _ref.store,
          input = _ref.route.query.input;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return store.dispatch('fetchSerpResults', input);

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function asyncData(_x) {
      return _ref2.apply(this, arguments);
    }

    return asyncData;
  }(),
  data: function data() {
    return {
      filtersExpanded: false
    };
  },


  computed: {
    results: function results() {
      return this.$store.state.serp.results;
    },
    input: function input() {
      return this.$store.state.search.input;
    }
  },

  mounted: function mounted() {
    this.filtersHeight = this.$refs.filters.offsetHeight;
    this.$refs.input.focus();
    for (var i = 0; i < this.$store.state.serp.activeFilters.length; i++) {
      this.$store.commit('popSerpActiveFilter');
    }
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch('applyInputQuery', this.$route);
  },
  beforeDestroy: function beforeDestroy() {
    for (var i = 0; i < this.$store.state.serp.activeFilters.length; i++) {
      this.$store.commit('popSerpActiveFilter');
    }
  },


  methods: {
    search: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(event) {
        var _this = this;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.$store.commit('setSearchInput', event.target.value);

                clearTimeout(ongoing);
                ongoing = setTimeout(function () {
                  _this.$store.dispatch('fetchSerpResults', event.target.value);
                  window.history.pushState({}, null, '/warframe/search?input=' + event.target.value);
                }, 200);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function search(_x2) {
        return _ref3.apply(this, arguments);
      }

      return search;
    }(),
    toggleFilters: function toggleFilters() {
      this.filtersExpanded = !this.filtersExpanded;
    }
  },

  storeModule: _serp2.default,

  head: function head() {
    return {
      title: this.input + ' \xB7 NexusHub Search',
      meta: (0, _meta2.default)({
        title: this.input + ' Search Results on NexusHub',
        description: this.results.length ? 'Find ' + this.results.length + ' matches for ' + this.input + '. ' + this.results[0].description : 'No search results :(',
        image: this.results.length ? 'https://nexushub.co' + this.results[0].imgUrl : undefined
      })
    };
  }
};

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(426);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notifications = __webpack_require__(189);

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

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(429);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(165);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _resultsGridSnippet = __webpack_require__(897);

var _resultsGridSnippet2 = _interopRequireDefault(_resultsGridSnippet);

var _resultsListSnippet = __webpack_require__(899);

var _resultsListSnippet2 = _interopRequireDefault(_resultsListSnippet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    'item-grid': _resultsGridSnippet2.default,
    'item-list': _resultsListSnippet2.default
  },

  props: ['type'],

  data: function data() {
    return {
      listHeight: 0,
      listType: 'grid',
      selection: ''
    };
  },


  computed: {
    filters: function filters() {
      return this.$store.state.serp.filters;
    },
    results: function results() {
      return this.$store.state.serp.results;
    }
  },

  watch: {
    results: function results() {
      var _this = this;

      setTimeout(function () {
        return _this.onResize();
      }, 75);
    }
  },

  mounted: function mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },


  methods: {
    onResize: function onResize() {
      if (this.listType === 'grid') {
        this.listHeight = this.$refs.grid.$el.offsetHeight;
      } else {
        this.listHeight = this.$refs.list.$el.offsetHeight;
      }
      this.listHeight += 40;
    },
    selectListView: function selectListView(type) {
      this.listType = type;
      this.onResize();
    },
    selectFilterTag: function selectFilterTag(filter) {
      var newFilters = [].concat(this.$store.state.serp.filters);
      var target = newFilters.find(function (f) {
        return f.name === filter.name;
      });

      var activeFilters = this.$store.state.serp.activeFilters;
      var isActive = activeFilters.find(function (f) {
        return f.name === filter.name;
      });

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

      if (newFilters.reduce(function (a, f) {
        return a + (f.active ? 1 : 0);
      }, 0)) {
        this.$store.dispatch('applySerpFilters');
      } else {
        this.$store.commit('resetSerpResults');
      }

      this.setSelection();
    },
    setSelection: function setSelection() {
      var filters = this.$store.state.serp.activeFilters;
      var selection = '';

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(filters), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var filter = _step.value;

          if (selection) {
            selection += filter.active ? ' per ' + filter.name : '';
          } else {
            selection += filter.active ? filter.name : '';
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.selection = selection;
    }
  }
};

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(431);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ['result', 'filters', 'selection'],

  computed: {
    correctFilters: function correctFilters() {
      var _this = this;

      return this.filters.filter(function (f) {
        return f.category === _this.result.results;
      });
    }
  },

  methods: {
    resolve: function resolve(filter) {
      var result = this.result;
      var keys = filter.path.split('.');

      try {
        keys.forEach(function (key) {
          result = result[key];
        });
        return result;
      } catch (err) {}
    }
  }
};

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(434);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ['result', 'filters'],

  computed: {
    correctFilters: function correctFilters() {
      var _this = this;

      return this.filters.filter(function (f) {
        return f.category === _this.result.results;
      });
    }
  },

  methods: {
    resolve: function resolve(filter) {
      var result = this.result;
      var keys = filter.path.split('.');

      try {
        keys.forEach(function (key) {
          result = result[key];
        });
        return result;
      } catch (err) {}
    }
  }
};

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _general_vue_vue_type_template_id_717433ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(976);
/* harmony import */ var _general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(425);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _general_vue_vue_type_style_index_0_id_717433ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(895);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _general_vue_vue_type_template_id_717433ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _general_vue_vue_type_template_id_717433ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "717433ac",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_style_index_0_id_717433ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(427);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_style_index_0_id_717433ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_style_index_0_id_717433ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_style_index_0_id_717433ac_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _results_group_vue_vue_type_template_id_1ed440db_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(975);
/* harmony import */ var _results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(428);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _results_group_vue_vue_type_style_index_0_id_1ed440db_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(901);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _results_group_vue_vue_type_template_id_1ed440db_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _results_group_vue_vue_type_template_id_1ed440db_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "1ed440db",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _results_grid_snippet_vue_vue_type_template_id_0ed3be62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(992);
/* harmony import */ var _results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(430);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _results_grid_snippet_vue_vue_type_style_index_0_id_0ed3be62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(898);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _results_grid_snippet_vue_vue_type_template_id_0ed3be62_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _results_grid_snippet_vue_vue_type_template_id_0ed3be62_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "0ed3be62",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_0ed3be62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(432);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_0ed3be62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_0ed3be62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_0ed3be62_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _results_list_snippet_vue_vue_type_template_id_5f2debd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var _results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(433);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _results_list_snippet_vue_vue_type_style_index_0_id_5f2debd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(900);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _results_list_snippet_vue_vue_type_template_id_5f2debd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _results_list_snippet_vue_vue_type_template_id_5f2debd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "5f2debd2",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_5f2debd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(435);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_5f2debd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_5f2debd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_5f2debd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_1ed440db_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(436);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_1ed440db_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_1ed440db_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_1ed440db_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(217);

var _assign2 = _interopRequireDefault(_assign);

var _getIterator2 = __webpack_require__(165);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
    setSerpResults: function setSerpResults(state, results) {
      state.results = results;
    },
    setSerpFilters: function setSerpFilters(state, filters) {
      state.filters = filters;
    },
    addSerpActiveFilter: function addSerpActiveFilter(state, name) {
      if (!state.activeFilters.find(function (f) {
        return f.name === name;
      })) {
        state.activeFilters.push(state.filters.find(function (f) {
          return f.name === name;
        }));
      }
    },
    removeSerpActiveFilter: function removeSerpActiveFilter(state, name) {
      var i = state.activeFilters.findIndex(function (f) {
        return f.name === name;
      });
      state.activeFilters.splice(i, 1);
    },
    popSerpActiveFilter: function popSerpActiveFilter(state) {
      var removed = state.activeFilters.pop();
      state.filters.find(function (f) {
        return f.name === removed.name;
      }).active = false;
    },
    setSerpOriginalResults: function setSerpOriginalResults(state, filters) {
      state.originalResults = filters;
    },
    resetSerpResults: function resetSerpResults(state, filters) {
      state.results = state.originalResults;
    }
  },
  actions: {
    fetchSerpResults: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref, input) {
        var commit = _ref.commit,
            dispatch = _ref.dispatch;
        var B, itemData, items, players, results;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(input.length < 2)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                B = input.includes('🅱');
                _context.next = 5;
                return this.$cubic.get('/warframe/v1/search?query=' + input.replace(/🅱️/g, 'b'));

              case 5:
                itemData = _context.sent;
                _context.next = 8;
                return dispatch('sanitizeSerpResults', { itemData: itemData, B: B });

              case 8:
                items = _context.sent;
                players = [];
                results = items.concat(players);

                commit('setSerpResults', results);
                commit('setSerpOriginalResults', results);
                dispatch('applySerpFilters');

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchSerpResults(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return fetchSerpResults;
    }(),
    sanitizeSerpResults: function sanitizeSerpResults(context, _ref3) {
      var itemData = _ref3.itemData,
          B = _ref3.B;

      var items = [];

      var _loop = function _loop(item) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(item.components), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var component = _step2.value;

            if (!item.description) continue;

            var description = item.description.split(' ');
            for (var i = 0; i < description.length; i++) {
              var word = description[i];

              if (word.includes('<DT_')) {
                word = word.match(/\_(.*?)\>/)[1].toLowerCase();
                if (word === 'freeze') word = 'cold';
                if (word === 'fire') word = 'heat';
                if (word === 'explosion') word = 'blast';
                word = '<img src="/img/warframe/ui/' + word + '.png" class="ico-h-16" style="margin-top: -3px;"/>';
              }
              description[i] = word;
            }

            if (items.find(function (i) {
              return i.name === item.name;
            })) {
              continue;
            }

            var name = item.name.replace('Set', '');

            name = B ? item.name.toLowerCase().replace(/\b\w/g, function (l) {
              return '🅱';
            }) : name;

            items.push((0, _assign2.default)(component, {
              name: name,
              webUrl: item.webUrl,
              category: item.category,
              rarity: item.rarity,
              price: component.prices ? Math.round((component.prices.selling.current.median + component.prices.buying.current.median) / 2) : undefined,
              results: 'items',
              description: description.join(' ')
            }));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(itemData), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          _loop(item);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return items;
    },
    applySerpFilters: function applySerpFilters(_ref4) {
      var commit = _ref4.commit,
          dispatch = _ref4.dispatch,
          state = _ref4.state;

      var filters = state.activeFilters;
      var results = [].concat(state.results);
      var resolve = function resolve(filter, result) {
        try {
          filter.path.split('.').forEach(function (key) {
            result = result[key];
          });
          return result;
        } catch (err) {}
      };
      var getSortingValue = function getSortingValue(result) {
        var ascending = void 0,
            res = void 0,
            missing = void 0;

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = (0, _getIterator3.default)(filters), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var filter = _step3.value;

            if (!filter.descending) ascending = true;
            if (!resolve(filter, result)) missing = true;
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
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

      var getUiScore = function getUiScore(x) {
        if (x === null) {
          return null;
        } else {
          return x % 1 === 0 ? Math.abs(x) : Math.abs(x).toFixed(2);
        }
      };

      if (!filters.length) {
        return;
      }

      results.sort(function (a, b) {
        var aVal = getSortingValue(a);
        var bVal = getSortingValue(b);
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
};

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_7015b5e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(437);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_7015b5e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_7015b5e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_7015b5e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/warframe/search.vue?vue&type=template&id=7015b5e6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search"},[_c('navigation'),_vm._v(" "),_c('app-content',[_c('div',{staticClass:"search-input"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"search"},[_c('div',{staticClass:"field"},[_c('input',{ref:"input",attrs:{"type":"text","placeholder":"Try: Soma Prime, Maim..."},on:{"input":_vm.search}}),_vm._v(" "),_c('img',{staticClass:"search-ico ico-h-16",attrs:{"src":"/img/ui/search.svg","alt":"Search"}})])]),_vm._v(" "),_c('div',{staticClass:"search-filters"},[_c('div',{staticClass:"search-filters-label interactive",on:{"click":_vm.toggleFilters}},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/filter.svg","alt":"Filter"}}),_vm._v(" "),_c('span',[_vm._v("Filters")])])])]),_vm._v(" "),_c('ad',{attrs:{"name":"warframe-serp-filter"}})],1),_vm._v(" "),_c('div',{ref:"filters",staticClass:"search-filters-options",class:{ expanded: _vm.filtersExpanded }},[_c('div',{staticClass:"container"},[_vm._v("\n        Sorry, no filters here yet. Look around again soon™!\n      ")])]),_vm._v(" "),_c('section',{staticClass:"results",class:{ expanded: _vm.filtersExpanded }},[_c('div',{staticClass:"results-background-fix"}),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"results-headline"},[_c('span',[_vm._v("Results for")]),_vm._v(" "),_c('h1',[_vm._v(_vm._s(_vm.input))])]),_vm._v(" "),_c('results-group',{attrs:{"type":'items'}})],1),_vm._v(" "),_c('ad',{attrs:{"name":"warframe-serp-results"}})],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/warframe/search.vue?vue&type=template&id=7015b5e6&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results/results-group.vue?vue&type=template&id=1ed440db&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"results-group"},[_c('h2',[_vm._v(_vm._s(_vm.type.charAt(0).toUpperCase() + _vm.type.slice(1)))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.results.length)+" Result"+_vm._s(_vm.results.length !== 1 ? 's' : ''))]),_vm._v(" "),_c('div',{staticClass:"filter"},[_c('div',{staticClass:"filter-tags"},[_c('div',{staticClass:"filter-tag-row"},_vm._l((_vm.filters),function(filter){return _c('div',{key:filter.name,staticClass:"btn-tag",class:{ active: filter.active, descending: filter.descending },on:{"click":function($event){return _vm.selectFilterTag(filter)}}},[(filter.icon)?_c('img',{staticClass:"ico-12",attrs:{"src":filter.icon,"alt":filter.alt}}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(filter.name))]),_vm._v(" "),_c('img',{staticClass:"ico-16 asc-desc",class:{ descending: filter.descending },attrs:{"src":"/img/ui/dropdown.svg","alt":"Ascending/Descending"}})])}),0)]),_vm._v(" "),_c('div',{staticClass:"filter-view"},[_c('div',{staticClass:"interactive",class:{ active: _vm.listType === 'list' },on:{"click":function($event){return _vm.selectListView('list')}}},[_c('img',{staticClass:"ico-20",attrs:{"src":"/img/ui/list-view.svg","alt":"List"}}),_vm._v(" "),_c('span',[_vm._v("List")])]),_vm._v(" "),_c('div',{staticClass:"interactive",class:{ active: _vm.listType === 'grid' },on:{"click":function($event){return _vm.selectListView('grid')}}},[_c('img',{staticClass:"ico-20",attrs:{"src":"/img/ui/card-view.svg","alt":"Grid"}}),_vm._v(" "),_c('span',[_vm._v("Grid")])])])]),_vm._v(" "),_c('div',{staticClass:"results-container",style:({ height: (_vm.listHeight + "px") })},[_c('transition-group',{ref:"grid",staticClass:"result-grid list",class:{ active: _vm.listType === 'grid' },attrs:{"name":"list"}},_vm._l((_vm.results),function(result){return _c('item-grid',{key:result.name,attrs:{"result":result,"filters":_vm.filters,"selection":_vm.selection}})}),1),_vm._v(" "),_c('transition-group',{ref:"list",staticClass:"result-list list",class:{ active: _vm.listType === 'list' },attrs:{"name":"list"}},_vm._l((_vm.results),function(result){return _c('item-list',{key:result.name,staticClass:"result row",attrs:{"result":result,"filters":_vm.filters}})}),1)],1),_vm._v(" "),_c('div',{staticClass:"add-items"},[_vm._v("\n    Think we missed an item?\n    "),_c('router-link',{attrs:{"to":"/contact"}},[_vm._v("\n      Let us know\n    ")]),_vm._v(" or\n    "),_c('a',{attrs:{"href":"https://github.com/nexus-devs/warframe-items","target":"_blank"}},[_vm._v("add items yourself")]),_vm._v(" if you\n    wanna help us support the project.\n  ")],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/results/results-group.vue?vue&type=template&id=1ed440db&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/nav/general.vue?vue&type=template&id=717433ac&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"row"},[_c('div',{staticClass:"col nav-l"},[_c('router-link',{attrs:{"to":"/","exact":""}},[_c('img',{staticClass:"logo ico-h-20",attrs:{"src":"/img/brand/nexushub-logo-typeface.svg","alt":"Nexushub Logo"}})])],1),_vm._v(" "),_c('div',{staticClass:"col nav-r"},[_c('notifications')],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/nav/general.vue?vue&type=template&id=717433ac&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results/results-grid-snippet.vue?vue&type=template&id=0ed3be62&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"result col"},[_c('router-link',{staticClass:"interactive",class:{ set: _vm.result.set },attrs:{"to":_vm.result.webUrl}},[_c('div',{staticClass:"result-img"},[_c('div',{staticClass:"result-img-shade"}),_vm._v(" "),_c('img',{class:{ mod: _vm.result.imgUrl.includes('jpeg') },attrs:{"src":_vm.result.imgUrl,"alt":_vm.result.name}}),_vm._v(" "),_c('img',{staticClass:"result-img-blur",attrs:{"src":_vm.result.imgUrl}}),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.result.description))])]),_vm._v(" "),_c('div',{staticClass:"result-info"},[_c('span',[_vm._v(_vm._s(_vm.result.name))])]),_vm._v(" "),_c('div',{staticClass:"result-data"},[(_vm.selection)?_c('div',{staticClass:"result-data-value col"},[_c('span',[_vm._v(_vm._s(_vm.result._score ? _vm.result._score + ' ' + _vm.selection : 'No data')+" ")])]):_c('div',_vm._l((_vm.correctFilters),function(filter){return _c('div',{key:filter.name,staticClass:"result-data-value col"},[(!filter.hidden && _vm.resolve(filter))?_c('div',[_c('img',{staticClass:"ico-12",attrs:{"src":filter.icon,"alt":filter.alt}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.resolve(filter))+_vm._s(filter.unit))])]):_vm._e()])}),0)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/results/results-grid-snippet.vue?vue&type=template&id=0ed3be62&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results/results-list-snippet.vue?vue&type=template&id=5f2debd2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"result"},[_c('router-link',{staticClass:"row interactive",attrs:{"to":_vm.result.webUrl}},[_c('img',{staticClass:"result-img-blur",attrs:{"src":_vm.result.imgUrl}}),_vm._v(" "),_c('div',{staticClass:"result-title col-b"},[_c('div',{staticClass:"result-img"},[_c('img',{class:{ mod: _vm.result.imgUrl.includes('jpeg') },attrs:{"src":_vm.result.imgUrl,"alt":_vm.result.name}})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.result.name))])]),_vm._v(" "),_c('div',{staticClass:"result-data row"},_vm._l((_vm.correctFilters),function(filter){return _c('div',{key:filter.name,staticClass:"result-data-value",class:{ hidden: filter.hidden }},[(_vm.resolve(filter))?_c('div',[(filter.icon)?_c('img',{staticClass:"ico-12",attrs:{"src":filter.icon,"alt":filter.alt}}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.resolve(filter))+_vm._s(filter.unit))])]):_vm._e()])}),0)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/results/results-list-snippet.vue?vue&type=template&id=5f2debd2&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);