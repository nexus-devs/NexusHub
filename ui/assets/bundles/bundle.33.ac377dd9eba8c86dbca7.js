(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33,20],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ws_vue_vue_type_template_id_636795b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(985);
/* harmony import */ var _ws_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(487);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ws_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ws_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ws_vue_vue_type_style_index_0_id_636795b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(889);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _ws_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ws_vue_vue_type_template_id_636795b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ws_vue_vue_type_template_id_636795b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "636795b0",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(198);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 198:
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

var _sidebar = __webpack_require__(365);

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

              endpoint.name = endpoint.name === 'index' ? name.split(' / ').pop().toLowerCase() : endpoint.name;
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
          return g.name.replace(/\-/g, ' / ') === group.replace(/\-/g, ' / ');
        }).endpoints.find(function (e) {
          return e.name === name;
        });
      }

      return undefined;
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
    title: 'NexusHub · API Documentation',
    meta: (0, _meta2.default)({
      title: 'NexusHub API Documentation',
      description: 'Find all resources required to build your own application with data from NexusHub.'
    })
  }
};

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(200);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 200:
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

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_vue_vue_type_template_id_32695e3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(370);
/* harmony import */ var _sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _sidebar_vue_vue_type_style_index_0_id_32695e3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(366);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sidebar_vue_vue_type_template_id_32695e3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _sidebar_vue_vue_type_template_id_32695e3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "32695e3e",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_32695e3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(201);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_32695e3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_32695e3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_32695e3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4ff9d7da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(202);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4ff9d7da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4ff9d7da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4ff9d7da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/developers/api/index.vue?vue&type=template&id=4ff9d7da&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation'),_vm._v(" "),_c('app-content',[_c('div',{staticClass:"content-wrapper"},[_c('sidebar-nav'),_vm._v(" "),_c('section',[(!_vm.endpoint)?_vm._t("default"):_c('div',[_c('div',{staticClass:"flex"},[_c('h1',[_vm._v("\n              "+_vm._s(_vm.endpoint.group || 'General')+" -\n              "+_vm._s(_vm.endpoint.name.toLowerCase().replace(/\b\w/g, function (l) { return l.toUpperCase(); }))+"\n            ")]),_vm._v(" "),_c('a',{staticClass:"source",attrs:{"href":_vm.endpoint.sourceUrl,"target":"_blank"}},[_c('img',{staticClass:"ico-20",attrs:{"src":"/img/developers/github.svg","alt":"Source Code on Github"}}),_vm._v(" "),_c('span',[_vm._v("View source code.")])])]),_vm._v(" "),_c('a',{staticClass:"btn-subtle active route",attrs:{"href":("https://api.nexushub.co" + (_vm.endpoint.route)),"target":"_blank"}},[_c('div',{staticClass:"verb"},[_vm._v(_vm._s(_vm.endpoint.method))]),_vm._v("\n            "+_vm._s(_vm.endpoint.route)+"\n          ")]),_vm._v(" "),(_vm.endpoint.pubsub)?_c('div',{staticClass:"btn-subtle active"},[_vm._v("\n            Pub/Sub ✔\n          ")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"btn-subtle active"},[_vm._v("\n            Cache: "+_vm._s(_vm.endpoint.cache ? _vm.endpoint.cache.duration : 60)+"s\n          ")]),_vm._v(" "),_c('div',{staticClass:"btn-subtle active"},[_vm._v("\n            Rate Limit: "+_vm._s(_vm.endpoint.limit ? _vm.endpoint.limit.maxInInterval : 20)+"\n            requests per\n            "+_vm._s(_vm.endpoint.limit ? _vm.endpoint.limit.interval / 1000 : 5)+"s\n          ")]),_vm._v(" "),_c('div',{staticClass:"btn-subtle active"},[_vm._v("\n            Authorization: "+_vm._s(_vm.endpoint.scope || 'none')+"\n          ")]),_vm._v(" "),(_vm.endpoint.description)?_c('p',{staticClass:"description"},[_vm._v("\n            "+_vm._s(_vm.endpoint.description)+"\n          ")]):_vm._e(),_vm._v(" "),(_vm.endpoint.method !== 'GET')?_c('div',{staticClass:"sub-section"},[_c('h2',[_vm._v("Request Format")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:(_vm.stringify(_vm.endpoint.request.body)),expression:"stringify(endpoint.request.body)"}]},[_vm._v("              "),_c('code',{staticClass:"javascript"}),_vm._v("\n            ")])]):_vm._e(),_vm._v(" "),(_vm.endpoint.response || _vm.example)?_c('div',{staticClass:"sub-section"},[_c('div',{staticClass:"flex"},[_c('h2',[_vm._v("Response Format")]),_vm._v(" "),(!_vm.endpoint.scope && _vm.endpoint.response)?_c('div',{staticClass:"btn-outline",on:{"click":_vm.toggleExample}},[_vm._v("\n                Live Example\n              ")]):_vm._e()]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:(_vm.stringify(_vm.example) || _vm.stringify(_vm.endpoint.response)),expression:"stringify(example) || stringify(endpoint.response)"}]},[_vm._v("              "),_c('code',{staticClass:"javascript"}),_vm._v("\n            ")])]):_vm._e(),_vm._v(" "),(_vm.endpoint.query.length)?_c('div',{staticClass:"sub-section"},[_c('h2',[_vm._v("Query Params")]),_vm._v(" "),_vm._l((_vm.endpoint.query),function(query){return _c('div',{key:query.name},[_c('h3',[_vm._v(_vm._s(query.name)+_vm._s(query.required ? ' (required)' : ''))]),_vm._v(" "),(query.description)?_c('p',[_vm._v("\n                "+_vm._s(query.description)+"\n              ")]):_vm._e(),_vm._v(" "),(query.default !== undefined)?_c('div',[_c('h4',[_vm._v("Default")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:(typeof query.default === 'string' && (query.default.startsWith('function') || query.default.startsWith('() => '))
                  ? query.default : _vm.stringify(query.default)),expression:"typeof query.default === 'string' && (query.default.startsWith('function') || query.default.startsWith('() => '))\n                  ? query.default : stringify(query.default)"}]},[_vm._v("                  "),_c('code',{staticClass:"javascript"}),_vm._v("\n                ")])]):_vm._e()])})],2):_vm._e(),_vm._v(" "),_c('ad',{attrs:{"name":"developers-api-article"}})],1)],2)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/developers/api/index.vue?vue&type=template&id=4ff9d7da&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/developers/sidebar.vue?vue&type=template&id=32695e3e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',[_c('div',{staticClass:"links"},[_c('h3',[_vm._v("Connecting")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/developers/api","exact":""}},[_vm._v("\n      Client packages\n    ")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/developers/api/http","exact":""}},[_vm._v("\n      HTTP\n    ")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/developers/api/ws","exact":""}},[_vm._v("\n      WebSockets\n    ")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/developers/api/authentication","exact":""}},[_vm._v("\n      Authentication\n    ")]),_vm._v(" "),_vm._l((_vm.groups),function(group){return _c('div',{key:group.name},[_c('h3',[_vm._v(_vm._s(group.name))]),_vm._v(" "),_vm._l((group.endpoints),function(endpoint){return _c('router-link',{key:endpoint.route + endpoint.method,attrs:{"to":("/developers/api/" + (group.name.replace(/ \/ /g, '-')) + "/" + (endpoint.name)),"exact":""}},[_vm._v("\n        "+_vm._s(endpoint.name)+"\n      ")])})],2)})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/developers/sidebar.vue?vue&type=template&id=32695e3e&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ws_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(488);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ws_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ws_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ws_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ws_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ws_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(80);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    docs: _index2.default
  }
};

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4ff9d7da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(369);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(197);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_4ff9d7da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(367);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4ff9d7da_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_4ff9d7da_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "4ff9d7da",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ws_vue_vue_type_style_index_0_id_636795b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(489);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ws_vue_vue_type_style_index_0_id_636795b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ws_vue_vue_type_style_index_0_id_636795b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ws_vue_vue_type_style_index_0_id_636795b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/developers/api/ws.vue?vue&type=template&id=636795b0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('docs',[_c('h1',[_vm._v("WebSockets")]),_vm._v(" "),_c('p',[_vm._v("\n      If you want to use real-time features, WebSockets are the way to go. We\n      generally recommend using this instead of HTTP connections if you plan to\n      make frequent requests or want to use our pub/sub endpoints.\n      "),_c('br'),_vm._v(" "),_c('br'),_vm._v("\n      Please keep in mind that every payload from the server and client is\n      expected to be JSON encoded.\n    ")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('h4',[_vm._v("Authenticated connection (Node.js)")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("const WebSocket = require('ws')\nconst ws = new WebSocket('wss://api.nexushub.co/ws', {\n  headers: {\n    authorization: `bearer ${access_token}`\n  }\n})\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('p',[_vm._v("\n      For more information on how to get an access token, check out the\n      "),_c('router-link',{attrs:{"to":"/developers/api/authentication"}},[_vm._v("\n        authentication guide\n      ")]),_vm._v(".\n    ")],1),_vm._v(" "),_c('h2',[_vm._v("Ping/Pong")]),_vm._v(" "),_c('p',[_vm._v("\n      In order to keep your client alive, it has to respond to pings from the\n      server. If no pong has been sent as a response within 45 seconds, the\n      connection is terminated.\n    ")]),_vm._v(" "),_c('h4',[_vm._v("Ping handler")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("ws.on('message', payload => {\n  payload = JSON.parse(payload)\n\n  if (typeof payload === 'string' && payload.startsWith('primus::ping::')) {\n    ws.send(JSON.stringify(payload.replace('ping', 'pong')))\n  }\n})\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('h2',[_vm._v("RESTful requests")]),_vm._v(" "),_c('p',[_vm._v("\n      Making RESTful requests is fairly straightforward. Set a request id counter\n      and send it alongside the request object. The response will then have the\n      same id.\n      "),_c('br'),_vm._v(" "),_c('br'),_vm._v("\n      Depending on your WebSocket implementation, we recommend tracking\n      all requests in an array that is checked in a "),_c('b',[_vm._v("single message event listener")]),_vm._v(".\n      The examples below create a listener for every request, which is not how\n      you'd want to do things. We merely demonstrate things this way for the sake\n      of clarity.\n    ")]),_vm._v(" "),_c('h4',[_vm._v("GET")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("let requestIds = 1\n\n// Request\nconst id = requestIds++\nws.send(JSON.stringify({\n  action: 'GET',\n  url: '/foo',\n  id\n}))\n\n// Response\nws.on('message', payload => {\n  payload = JSON.parse(payload)\n  if (payload.id === id) {\n    console.log(payload.body) // 'foo'\n  }\n})\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('h4',[_vm._v("POST")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("let requestIds = 1\n\n// Request\nconst id = requestIds++\nws.send(JSON.stringify({\n  action: 'POST',\n  url: '/post',\n  body: { foo: 'bar' },\n  id\n}))\n\n// Response\nws.on('message', payload => {\n  payload = JSON.parse(payload)\n  if (payload.id === id) {\n    console.log(payload.body) // { foo: 'bar' }\n  }\n})\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('h2',[_vm._v("Pub/Sub")]),_vm._v(" "),_c('p',[_vm._v("\n      For real-time data, you'll want to subscribe to Pub/Sub endpoints. Their\n      response format is usually the same as on a normal GET request.\n    ")]),_vm._v(" "),_c('h4',[_vm._v("Subscribe")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("ws.send(JSON.stringify({\n  action: 'SUBSCRIBE',\n  room: '/warframe/v1/orders/opm'\n}))\n\nws.on('message', payload => {\n  payload = JSON.parse(payload)\n  if (payload.room === '/warframe/v1/orders/opm') {\n    console.log(payload.data) // Logs orders per minute every time a new order comes in.\n  }\n})\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('h4',[_vm._v("Unsubscribe")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("ws.send(JSON.stringify({\n  action: 'UNSUBSCRIBE',\n  room: '/warframe/v1/orders/opm'\n}))\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('h2',[_vm._v("Full setup")]),_vm._v(" "),_c('p',[_vm._v("\n      If you need an overview for a full setup with automated authentication and\n      error handling, check out our implementation for\n      "),_c('a',{attrs:{"href":"https://github.com/cubic-js/cubic/tree/development/packages/client"}},[_vm._v("cubic-client")]),_vm._v(".\n    ")])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/developers/api/ws.vue?vue&type=template&id=636795b0&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);