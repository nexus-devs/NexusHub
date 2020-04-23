(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18,21],{

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(391);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(385);

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getIterator2 = __webpack_require__(167);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _vue = __webpack_require__(6);

var _vue2 = _interopRequireDefault(_vue);

var _vueHighlightjs = __webpack_require__(386);

var _vueHighlightjs2 = _interopRequireDefault(_vueHighlightjs);

var _nitroAds = __webpack_require__(182);

var _nitroAds2 = _interopRequireDefault(_nitroAds);

var _appContent = __webpack_require__(169);

var _appContent2 = _interopRequireDefault(_appContent);

var _meta = __webpack_require__(168);

var _meta2 = _interopRequireDefault(_meta);

var _developers = __webpack_require__(364);

var _developers2 = _interopRequireDefault(_developers);

var _sidebar = __webpack_require__(493);

var _sidebar2 = _interopRequireDefault(_sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = function title(str) {
  return str.toLowerCase().replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  });
};
var replacer = function replacer(key, value) {
  if (typeof value === 'string' && value.startsWith('function ')) {
    return value.split(' ')[1].replace('()', '');
  }
  return value;
};

exports.default = {
  components: {
    ad: _nitroAds2.default,
    navigation: _developers2.default,
    appContent: _appContent2.default,
    sidebarNav: _sidebar2.default
  },

  data: function data() {
    return {
      example: undefined
    };
  },


  computed: {
    endpoints: function endpoints() {
      return this.$store.state.docs.endpoints;
    },
    groups: function groups() {
      var groups = [{ group: 'general', name: 'General', endpoints: [] }];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this.endpoints), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var endpoint = _step.value;

          var split = endpoint.route.split('/');

          if (split.length > 2) {
            (function () {
              var group = split[1];
              var name = title('' + split[1] + (split.length > 3 ? ' / ' + split[3] : ''));
              var saved = groups.find(function (g) {
                return g.name === name;
              });

              endpoint.name = endpoint.name === 'index' ? name.split(' / ')[1].toLowerCase() : endpoint.name;
              endpoint.group = name;

              if (saved) {
                saved.endpoints.push(endpoint);
              } else {
                groups.push({
                  group: group,
                  name: name,
                  endpoints: [endpoint]
                });
              }
            })();
          } else {
              groups.find(function (g) {
                return g.group === 'general';
              }).endpoints.push(endpoint);
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

      this.$store.commit('setDocsGroups', groups);
      return groups;
    },
    endpoint: function endpoint() {
      var group = this.$route.params.group;
      var name = this.$route.params.name;
      var groups = this.groups;

      this.example = undefined;

      if (group && groups) {
        return groups.find(function (g) {
          return g.name === group.replace(/\-/g, ' / ');
        }).endpoints.find(function (e) {
          return e.name === name;
        });
      }
      return {};
    }
  },

  watch: {
    $route: function $route() {
      if (this.endpoint && !this.endpoint.response) {
        this.toggleExample();
      }
    }
  },

  beforeMount: function beforeMount() {
    _vue2.default.use(_vueHighlightjs2.default);
  },
  created: function created() {
    if (this.endpoint && !this.endpoint.response) {
      this.toggleExample();
    }
  },


  methods: {
    toggleExample: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var e, res, _res;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e = this.endpoint;

                if (!this.example) {
                  _context.next = 5;
                  break;
                }

                this.example = undefined;
                _context.next = 16;
                break;

              case 5:
                if (!(e.method === 'GET')) {
                  _context.next = 12;
                  break;
                }

                _context.next = 8;
                return this.$cubic.get(e.request ? e.request.url : e.route);

              case 8:
                res = _context.sent;

                this.example = Array.isArray(res) ? res.slice(0, 1).concat(['// Truncated response']) : res;
                _context.next = 16;
                break;

              case 12:
                _context.next = 14;
                return this.$cubic[e.method.toLowerCase()](e.request.url || e.route, e.request.body);

              case 14:
                _res = _context.sent;

                this.example = Array.isArray(_res) ? _res.slice(0, 1).concat(['// Truncated response']) : _res;

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function toggleExample() {
        return _ref.apply(this, arguments);
      }

      return toggleExample;
    }(),
    stringify: function stringify(obj) {
      var stringified = (0, _stringify2.default)(obj, replacer, 2);
      return stringified ? stringified.replace(/"Number"/g, 'Number').replace(/"String"/g, 'String').replace(/"Boolean"/g, 'Boolean') : stringified;
    }
  },

  head: {
    title: 'NexusHub · Discord Bot Documentation',
    meta: (0, _meta2.default)({
      title: 'NexusHub Discord Bot Documentation',
      description: 'Find all resources and commands for the NexusHub Discord Bot.'
    })
  }
};

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(393);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(167);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nitroAds = __webpack_require__(182);

var _nitroAds2 = _interopRequireDefault(_nitroAds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = function title(str) {
  return str.toLowerCase().replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  });
};
var reviver = function reviver(key, value) {
  if (typeof key === 'string' && key.indexOf('function ') === 0) {
    var functionTemplate = '(' + value + ')';
    return functionTemplate;
  }
  return value;
};

exports.default = {
  components: {
    ad: _nitroAds2.default
  },

  asyncData: function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var endpoints;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$cubic.get('/docs/endpoints');

            case 2:
              endpoints = _context.sent;


              this.$store.commit('setDocsEndpoints', JSON.parse(endpoints, reviver));

            case 4:
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


  computed: {
    endpoints: function endpoints() {
      return this.$store.state.docs.endpoints;
    },
    groups: function groups() {
      if (this.$store.state.docs.groups.length) {
        return this.$store.state.docs.groups;
      }
      var groups = [{ group: 'general', name: 'General', endpoints: [] }];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this.endpoints), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var endpoint = _step.value;

          var split = endpoint.route.split('/');

          if (split.length > 2) {
            (function () {
              var group = split[1];
              var name = title('' + split[1] + (split.length > 3 ? ' / ' + split[3] : ''));
              var saved = groups.find(function (g) {
                return g.name === name;
              });

              endpoint.name = endpoint.name === 'index' ? name.split(' / ')[1].toLowerCase() : endpoint.name;
              endpoint.group = name;

              if (saved) {
                saved.endpoints.push(endpoint);
              } else {
                groups.push({
                  group: group,
                  name: name,
                  endpoints: [endpoint]
                });
              }
            })();
          } else {
              groups.find(function (g) {
                return g.group === 'general';
              }).endpoints.push(endpoint);
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

      this.$store.commit('setDocsGroups', groups);
      return groups;
    }
  },

  storeModule: {
    name: 'docs',
    state: {
      endpoints: [],
      groups: []
    },
    mutations: {
      setDocsEndpoints: function setDocsEndpoints(state, endpoints) {
        state.endpoints = endpoints;
      },
      setDocsGroups: function setDocsGroups(state, groups) {
        state.groups = groups;
      }
    }
  }
};

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_vue_vue_type_template_id_8f548846_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(659);
/* harmony import */ var _sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(392);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _sidebar_vue_vue_type_style_index_0_id_8f548846_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(494);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sidebar_vue_vue_type_template_id_8f548846_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _sidebar_vue_vue_type_template_id_8f548846_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "8f548846",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_8f548846_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(394);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_8f548846_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_8f548846_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_8f548846_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b36b2ee2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(395);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b36b2ee2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b36b2ee2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b36b2ee2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(497);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(83);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    docs: _index2.default
  }
};

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/discord-bot/index.vue?vue&type=template&id=b36b2ee2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation'),_vm._v(" "),_c('app-content',[_c('div',{staticClass:"content-wrapper"},[_c('sidebar-nav'),_vm._v(" "),_c('section',[(!_vm.endpoint)?_vm._t("default"):_c('div',[_c('div',{staticClass:"flex"},[_c('h1',[_vm._v("\n              "+_vm._s(_vm.endpoint.group || 'General')+" -\n              "+_vm._s(_vm.endpoint.name.toLowerCase().replace(/\b\w/g, function (l) { return l.toUpperCase(); }))+"\n            ")]),_vm._v(" "),_c('a',{staticClass:"source",attrs:{"href":_vm.endpoint.sourceUrl,"target":"_blank"}},[_c('img',{staticClass:"ico-20",attrs:{"src":"/img/developers/github.svg","alt":"Source Code on Github"}}),_vm._v(" "),_c('span',[_vm._v("View source code.")])])]),_vm._v(" "),_c('a',{staticClass:"btn-subtle active route",attrs:{"href":("https://api.nexushub.co" + (_vm.endpoint.route)),"target":"_blank"}},[_c('div',{staticClass:"verb"},[_vm._v(_vm._s(_vm.endpoint.method))]),_vm._v("\n            "+_vm._s(_vm.endpoint.route)+"\n          ")]),_vm._v(" "),(_vm.endpoint.pubsub)?_c('div',{staticClass:"btn-subtle active"},[_vm._v("\n            Pub/Sub ✔\n          ")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"btn-subtle active"},[_vm._v("\n            Cache: "+_vm._s(_vm.endpoint.cache ? _vm.endpoint.cache.duration : 60)+"s\n          ")]),_vm._v(" "),_c('div',{staticClass:"btn-subtle active"},[_vm._v("\n            Rate Limit: "+_vm._s(_vm.endpoint.limit ? _vm.endpoint.limit.maxInInterval : 20)+"\n            requests per\n            "+_vm._s(_vm.endpoint.limit ? _vm.endpoint.limit.interval / 1000 : 5)+"s\n          ")]),_vm._v(" "),_c('div',{staticClass:"btn-subtle active"},[_vm._v("\n            Authorization: "+_vm._s(_vm.endpoint.scope || 'none')+"\n          ")]),_vm._v(" "),(_vm.endpoint.description)?_c('p',{staticClass:"description"},[_vm._v("\n            "+_vm._s(_vm.endpoint.description)+"\n          ")]):_vm._e(),_vm._v(" "),(_vm.endpoint.method !== 'GET')?_c('div',{staticClass:"sub-section"},[_c('h2',[_vm._v("Request Format")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:(_vm.stringify(_vm.endpoint.request.body)),expression:"stringify(endpoint.request.body)"}]},[_vm._v("              "),_c('code',{staticClass:"javascript"}),_vm._v("\n            ")])]):_vm._e(),_vm._v(" "),(_vm.endpoint.response || _vm.example)?_c('div',{staticClass:"sub-section"},[_c('div',{staticClass:"flex"},[_c('h2',[_vm._v("Response Format")]),_vm._v(" "),(!_vm.endpoint.scope && _vm.endpoint.response)?_c('div',{staticClass:"btn-outline",on:{"click":_vm.toggleExample}},[_vm._v("\n                Live Example\n              ")]):_vm._e()]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:(_vm.stringify(_vm.example) || _vm.stringify(_vm.endpoint.response)),expression:"stringify(example) || stringify(endpoint.response)"}]},[_vm._v("              "),_c('code',{staticClass:"javascript"}),_vm._v("\n            ")])]):_vm._e(),_vm._v(" "),(_vm.endpoint.query.length)?_c('div',{staticClass:"sub-section"},[_c('h2',[_vm._v("Query Params")]),_vm._v(" "),_vm._l((_vm.endpoint.query),function(query){return _c('div',{key:query.name},[_c('h3',[_vm._v(_vm._s(query.name)+_vm._s(query.required ? ' (required)' : ''))]),_vm._v(" "),(query.description)?_c('p',[_vm._v("\n                "+_vm._s(query.description)+"\n              ")]):_vm._e(),_vm._v(" "),(query.default !== undefined)?_c('div',[_c('h4',[_vm._v("Default")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:(typeof query.default === 'string' && (query.default.startsWith('function') || query.default.startsWith('() => '))
                  ? query.default : _vm.stringify(query.default)),expression:"typeof query.default === 'string' && (query.default.startsWith('function') || query.default.startsWith('() => '))\n                  ? query.default : stringify(query.default)"}]},[_vm._v("                  "),_c('code',{staticClass:"javascript"}),_vm._v("\n                ")])]):_vm._e()])})],2):_vm._e(),_vm._v(" "),_c('ad',{attrs:{"name":"developers-api-article"}})],1)],2)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/discord-bot/index.vue?vue&type=template&id=b36b2ee2&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/discord-bot/sidebar.vue?vue&type=template&id=8f548846&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',[_c('div',{staticClass:"links"},[_c('ad',{attrs:{"name":"developers-api-article"}}),_vm._v(" "),_c('h3',[_vm._v("General")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/discord-bot/overview","exact":""}},[_vm._v("\n      Overview\n    ")]),_vm._v(" "),_vm._l((_vm.groups),function(group){return _c('div',{key:group.name},[_c('h3',[_vm._v(_vm._s(group.name))]),_vm._v(" "),_vm._l((group.endpoints),function(endpoint){return _c('router-link',{key:endpoint.route + endpoint.method,attrs:{"to":("/developers/api/" + (group.name.replace(/ \/ /g, '-')) + "/" + (endpoint.name)),"exact":""}},[_vm._v("\n        "+_vm._s(endpoint.name)+"\n      ")])})],2)})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/discord-bot/sidebar.vue?vue&type=template&id=8f548846&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_b36b2ee2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(657);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(390);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_b36b2ee2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(495);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_b36b2ee2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_b36b2ee2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "b36b2ee2",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_3ef45bc3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(498);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_3ef45bc3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_3ef45bc3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_3ef45bc3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overview_vue_vue_type_template_id_3ef45bc3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(991);
/* harmony import */ var _overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(496);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _overview_vue_vue_type_style_index_0_id_3ef45bc3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(891);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _overview_vue_vue_type_template_id_3ef45bc3_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _overview_vue_vue_type_template_id_3ef45bc3_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "3ef45bc3",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/discord-bot/overview.vue?vue&type=template&id=3ef45bc3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('docs',[_c('h1',[_vm._v("Overview")]),_vm._v(" "),_c('h2',[_vm._v("Setup - Node.js")]),_vm._v(" "),_c('h4',[_vm._v("Installing")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("npm i nexushub-client")]),_vm._v("\n    ")]),_vm._v(" "),_c('h4',[_vm._v("Setting up the Client")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("const Nexus = require('nexushub-client')\nconst nexus = new Nexus({\n  user_key,\n  user_secret\n})\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('p',[_vm._v("\n      user_key can be found in your profile, while user_secret is your password.\n      User accounts are not required at this point, but will give access to\n      certain endpoints concerning your own user data at a later date.\n    ")]),_vm._v(" "),_c('h2',[_vm._v("Basic Usage")]),_vm._v(" "),_c('h4',[_vm._v("GET example")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("const res = await nexus.get('/foo') // Returns 'bar'")]),_vm._v("\n    ")]),_vm._v(" "),_c('h4',[_vm._v("POST, DELETE, etc example")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("const res = await nexus.post('/post', someObject) // Returns the object")]),_vm._v("\n    ")]),_vm._v(" "),_c('h4',[_vm._v("Pub/Sub example")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("nexus.subscribe('/warframe/v1/orders/opm', opm => {\n  console.log(opm) // Logs orders per minute every time a new order comes in.\n})\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('h2',[_vm._v("Advanced usage")]),_vm._v(" "),_c('p',[_vm._v("For full docs, check out the official "),_c('a',{attrs:{"href":"https://github.com/nexus-devs/nexus-stats-api"}},[_vm._v("Github repo")]),_vm._v(".")])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/discord-bot/overview.vue?vue&type=template&id=3ef45bc3&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);