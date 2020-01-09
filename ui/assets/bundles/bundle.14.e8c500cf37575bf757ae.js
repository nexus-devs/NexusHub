(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

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

    this.display = 'inline-block';
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

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nitroAds_vue_vue_type_template_id_34ebc225___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(175);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(211);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nitroAds_vue_vue_type_template_id_34ebc225___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _nitroAds_vue_vue_type_template_id_34ebc225___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(177);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ads/nitroAds.vue?vue&type=template&id=34ebc225&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ad-unit layout-center",style:({
  display: _vm.display,
  'max-height': _vm.maxHeight,
  'max-width': _vm.maxWidth
}),attrs:{"id":("ad-" + _vm.name)}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ads/nitroAds.vue?vue&type=template&id=34ebc225&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(600);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nitroAds = __webpack_require__(201);

var _nitroAds2 = _interopRequireDefault(_nitroAds);

var _appContent = __webpack_require__(173);

var _appContent2 = _interopRequireDefault(_appContent);

var _meta = __webpack_require__(174);

var _meta2 = _interopRequireDefault(_meta);

var _wowClassic = __webpack_require__(389);

var _wowClassic2 = _interopRequireDefault(_wowClassic);

var _resultsGroup = __webpack_require__(920);

var _resultsGroup2 = _interopRequireDefault(_resultsGroup);

var _wowClassic3 = __webpack_require__(423);

var _wowClassic4 = _interopRequireDefault(_wowClassic3);

var _serp = __webpack_require__(926);

var _serp2 = _interopRequireDefault(_serp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ongoing = setTimeout(function () {});

exports.default = {
  components: {
    ad: _nitroAds2.default,
    navigation: _wowClassic2.default,
    appContent: _appContent2.default,

    search: _wowClassic4.default,
    resultsGroup: _resultsGroup2.default
  },

  asyncData: function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
      var store = _ref.store,
          route = _ref.route;
      var slug, input;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              slug = route.params.slug;
              input = route.query.input;
              _context.next = 4;
              return store.dispatch('fetchSerpResults', { input: input, slug: slug });

            case 4:
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
                  window.history.pushState({}, null, '/wow-classic/search?input=' + event.target.value);
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
        description: this.results.length ? 'Find ' + this.results.length + ' matches for ' + this.input + '. ' + this.results[0].name : 'No search results :(',
        image: this.results.length ? '' + this.results[0].imgUrl : 'https://nexushub.co/img/brand/og-banner-wow-classic.jpg'
      })
    };
  }
};

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(602);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(165);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _resultsGridSnippet = __webpack_require__(921);

var _resultsGridSnippet2 = _interopRequireDefault(_resultsGridSnippet);

var _resultsListSnippet = __webpack_require__(923);

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
      listType: 'list',
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

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(604);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 604:
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

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(607);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 607:
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

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _results_group_vue_vue_type_template_id_2760cbf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(957);
/* harmony import */ var _results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _results_group_vue_vue_type_style_index_0_id_2760cbf4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(925);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _results_group_vue_vue_type_template_id_2760cbf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _results_group_vue_vue_type_template_id_2760cbf4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "2760cbf4",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _results_grid_snippet_vue_vue_type_template_id_2610ffc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(981);
/* harmony import */ var _results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(603);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _results_grid_snippet_vue_vue_type_style_index_0_id_2610ffc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(922);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _results_grid_snippet_vue_vue_type_template_id_2610ffc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _results_grid_snippet_vue_vue_type_template_id_2610ffc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "2610ffc4",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_2610ffc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(605);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_2610ffc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_2610ffc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_2610ffc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _results_list_snippet_vue_vue_type_template_id_66e99cb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(987);
/* harmony import */ var _results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(606);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _results_list_snippet_vue_vue_type_style_index_0_id_66e99cb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(924);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _results_list_snippet_vue_vue_type_template_id_66e99cb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _results_list_snippet_vue_vue_type_template_id_66e99cb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "66e99cb4",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_66e99cb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(608);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_66e99cb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_66e99cb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_66e99cb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_2760cbf4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(609);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_2760cbf4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_2760cbf4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_2760cbf4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref, _ref2) {
        var commit = _ref.commit,
            dispatch = _ref.dispatch;
        var input = _ref2.input,
            slug = _ref2.slug;
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
                return this.$cubic.get('/wow-classic/v1/search?query=' + input.replace(/🅱️/g, 'b'));

              case 5:
                itemData = _context.sent;
                _context.next = 8;
                return dispatch('sanitizeSerpResults', { itemData: itemData, B: B, slug: slug });

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
        return _ref3.apply(this, arguments);
      }

      return fetchSerpResults;
    }(),
    sanitizeSerpResults: function sanitizeSerpResults(context, _ref4) {
      var itemData = _ref4.itemData,
          B = _ref4.B,
          slug = _ref4.slug;

      var items = [];

      var _loop = function _loop(item) {
        if (items.find(function (i) {
          return i.name === item.name;
        })) {
          return 'continue';
        }

        var name = B ? item.name.toLowerCase().replace(/\b\w/g, function (l) {
          return '🅱';
        }) : item.name;

        items.push({
          name: name,
          imgUrl: item.imgUrl,
          webUrl: '/wow-classic/items/' + slug + '/' + item.itemId,
          results: 'items',
          description: name
        });
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(itemData), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          var _ret = _loop(item);

          if (_ret === 'continue') continue;
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
    applySerpFilters: function applySerpFilters(_ref5) {
      var commit = _ref5.commit,
          dispatch = _ref5.dispatch,
          state = _ref5.state;

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

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(filters), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var filter = _step2.value;

            if (!filter.descending) ascending = true;
            if (!resolve(filter, result)) missing = true;
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

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_0998af1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(610);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_0998af1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_0998af1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_0998af1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/wow-classic/search.vue?vue&type=template&id=0998af1e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search"},[_c('navigation'),_vm._v(" "),_c('app-content',[_c('div',{staticClass:"search-input"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"search"},[_c('div',{staticClass:"field"},[_c('input',{ref:"input",attrs:{"type":"text","placeholder":"Try: Black Lotus, Devils..."},on:{"input":_vm.search}}),_vm._v(" "),_c('img',{staticClass:"search-ico ico-h-16",attrs:{"src":"/img/ui/search.svg","alt":"Search"}})])]),_vm._v(" "),_c('div',{staticClass:"search-filters"},[_c('div',{staticClass:"search-filters-label interactive",on:{"click":_vm.toggleFilters}},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/filter.svg","alt":"Filter"}}),_vm._v(" "),_c('span',[_vm._v("Filters")])])])]),_vm._v(" "),_c('ad',{attrs:{"name":"warframe-serp-filter"}})],1),_vm._v(" "),_c('div',{ref:"filters",staticClass:"search-filters-options",class:{ expanded: _vm.filtersExpanded }},[_c('div',{staticClass:"container"},[_vm._v("\n        Sorry, no filters here yet. Look around again soon™!\n      ")])]),_vm._v(" "),_c('section',{staticClass:"results",class:{ expanded: _vm.filtersExpanded }},[_c('div',{staticClass:"results-background-fix"}),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"results-headline"},[_c('span',[_vm._v("Results for")]),_vm._v(" "),_c('h1',[_vm._v(_vm._s(_vm.input))])]),_vm._v(" "),_c('results-group',{attrs:{"type":'items'}})],1),_vm._v(" "),_c('ad',{attrs:{"name":"warframe-serp-results"}})],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/wow-classic/search.vue?vue&type=template&id=0998af1e&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results-wow-classic/results-group.vue?vue&type=template&id=2760cbf4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"results-group"},[_c('h2',[_vm._v(_vm._s(_vm.type.charAt(0).toUpperCase() + _vm.type.slice(1)))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.results.length)+" Result"+_vm._s(_vm.results.length !== 1 ? 's' : ''))]),_vm._v(" "),_c('div',{staticClass:"filter"},[_c('div',{staticClass:"filter-tags"},[_c('div',{staticClass:"filter-tag-row"},_vm._l((_vm.filters),function(filter){return _c('div',{key:filter.name,staticClass:"btn-tag",class:{ active: filter.active, descending: filter.descending },on:{"click":function($event){return _vm.selectFilterTag(filter)}}},[(filter.icon)?_c('img',{staticClass:"ico-12",attrs:{"src":filter.icon,"alt":filter.alt}}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(filter.name))]),_vm._v(" "),_c('img',{staticClass:"ico-16 asc-desc",class:{ descending: filter.descending },attrs:{"src":"/img/ui/dropdown.svg","alt":"Ascending/Descending"}})])}),0)]),_vm._v(" "),_c('div',{staticClass:"filter-view"},[_c('div',{staticClass:"interactive",class:{ active: _vm.listType === 'list' },on:{"click":function($event){return _vm.selectListView('list')}}},[_c('img',{staticClass:"ico-20",attrs:{"src":"/img/ui/list-view.svg","alt":"List"}}),_vm._v(" "),_c('span',[_vm._v("List")])]),_vm._v(" "),_c('div',{staticClass:"interactive",class:{ active: _vm.listType === 'grid' },on:{"click":function($event){return _vm.selectListView('grid')}}},[_c('img',{staticClass:"ico-20",attrs:{"src":"/img/ui/card-view.svg","alt":"Grid"}}),_vm._v(" "),_c('span',[_vm._v("Grid")])])])]),_vm._v(" "),_c('div',{staticClass:"results-container",style:({ height: (_vm.listHeight + "px") })},[_c('transition-group',{ref:"grid",staticClass:"result-grid list",class:{ active: _vm.listType === 'grid' },attrs:{"name":"list"}},_vm._l((_vm.results),function(result){return _c('item-grid',{key:result.name,attrs:{"result":result,"filters":_vm.filters,"selection":_vm.selection}})}),1),_vm._v(" "),_c('transition-group',{ref:"list",staticClass:"result-list list",class:{ active: _vm.listType === 'list' },attrs:{"name":"list"}},_vm._l((_vm.results),function(result){return _c('item-list',{key:result.name,staticClass:"result row",attrs:{"result":result,"filters":_vm.filters}})}),1)],1),_vm._v(" "),_c('div',{staticClass:"add-items"},[_vm._v("\n    Think we missed an item?\n    "),_c('router-link',{attrs:{"to":"/contact"}},[_vm._v("\n      Let us know\n    ")]),_vm._v(" or\n    "),_c('a',{attrs:{"href":"https://github.com/nexus-devs/warframe-items","target":"_blank"}},[_vm._v("add items yourself")]),_vm._v(" if you\n    wanna help us support the project.\n  ")],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/results-wow-classic/results-group.vue?vue&type=template&id=2760cbf4&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_0998af1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(939);
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(599);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _search_vue_vue_type_style_index_0_id_0998af1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(927);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_0998af1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _search_vue_vue_type_template_id_0998af1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "0998af1e",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 981:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results-wow-classic/results-grid-snippet.vue?vue&type=template&id=2610ffc4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"result col"},[_c('router-link',{staticClass:"interactive",class:{ set: _vm.result.set },attrs:{"to":_vm.result.webUrl}},[_c('div',{staticClass:"result-img"},[_c('div',{staticClass:"result-img-shade"}),_vm._v(" "),_c('img',{class:{ mod: _vm.result.imgUrl.includes('jpeg') },attrs:{"src":_vm.result.imgUrl,"alt":_vm.result.name}}),_vm._v(" "),_c('img',{staticClass:"result-img-blur",attrs:{"src":_vm.result.imgUrl}}),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.result.description))])]),_vm._v(" "),_c('div',{staticClass:"result-info"},[_c('span',[_vm._v(_vm._s(_vm.result.name))])]),_vm._v(" "),_c('div',{staticClass:"result-data"},[(_vm.selection)?_c('div',{staticClass:"result-data-value col"},[_c('span',[_vm._v(_vm._s(_vm.result._score ? _vm.result._score + ' ' + _vm.selection : 'No data')+" ")])]):_c('div',_vm._l((_vm.correctFilters),function(filter){return _c('div',{key:filter.name,staticClass:"result-data-value col"},[(!filter.hidden && _vm.resolve(filter))?_c('div',[_c('img',{staticClass:"ico-12",attrs:{"src":filter.icon,"alt":filter.alt}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.resolve(filter))+_vm._s(filter.unit))])]):_vm._e()])}),0)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/results-wow-classic/results-grid-snippet.vue?vue&type=template&id=2610ffc4&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results-wow-classic/results-list-snippet.vue?vue&type=template&id=66e99cb4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"result"},[_c('router-link',{staticClass:"row interactive",attrs:{"to":_vm.result.webUrl}},[_c('img',{staticClass:"result-img-blur",attrs:{"src":_vm.result.imgUrl}}),_vm._v(" "),_c('div',{staticClass:"result-title col-b"},[_c('div',{staticClass:"result-img"},[_c('img',{class:{ mod: _vm.result.imgUrl.includes('jpeg') },attrs:{"src":_vm.result.imgUrl,"alt":_vm.result.name}})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.result.name))])]),_vm._v(" "),_c('div',{staticClass:"result-data row"},_vm._l((_vm.correctFilters),function(filter){return _c('div',{key:filter.name,staticClass:"result-data-value",class:{ hidden: filter.hidden }},[(_vm.resolve(filter))?_c('div',[(filter.icon)?_c('img',{staticClass:"ico-12",attrs:{"src":filter.icon,"alt":filter.alt}}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.resolve(filter))+_vm._s(filter.unit))])]):_vm._e()])}),0)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/results-wow-classic/results-list-snippet.vue?vue&type=template&id=66e99cb4&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);