(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ 1002:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/wow-classic/deals.vue?vue&type=template&id=4f7257f6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"deals"},[_c('navigation'),_vm._v(" "),_c('app-content',[_c('div',{staticClass:"results"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"deals-headline"},[_c('h1',[_vm._v("Most Profitable Deals on "+_vm._s(_vm.serverPretty))])]),_vm._v(" "),_c('ad',{attrs:{"name":"wow-classic-deals"}}),_vm._v(" "),_c('deals',{attrs:{"compare-fn":_vm.compareServer}})],1)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/wow-classic/deals.vue?vue&type=template&id=4f7257f6&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(599);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = __webpack_require__(167);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nitroAds = __webpack_require__(182);

var _nitroAds2 = _interopRequireDefault(_nitroAds);

var _appContent = __webpack_require__(176);

var _appContent2 = _interopRequireDefault(_appContent);

var _deals = __webpack_require__(673);

var _deals2 = _interopRequireDefault(_deals);

var _meta = __webpack_require__(173);

var _meta2 = _interopRequireDefault(_meta);

var _wowClassic = __webpack_require__(423);

var _wowClassic2 = _interopRequireDefault(_wowClassic);

var _deals3 = __webpack_require__(674);

var _deals4 = _interopRequireDefault(_deals3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    ad: _nitroAds2.default,
    navigation: _wowClassic2.default,
    appContent: _appContent2.default,
    deals: _deals2.default
  },

  asyncData: function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
      var store = _ref.store,
          route = _ref.route;

      var slug, fetchUrl, deals, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, deal;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              slug = route.params.slug;
              fetchUrl = '/wow-classic/v1/items/' + slug + '/deals?limit=15';
              _context.next = 4;
              return this.$cubic.get(fetchUrl);

            case 4:
              deals = _context.sent;
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 8;

              for (_iterator = (0, _getIterator3.default)(deals); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                deal = _step.value;
                deal.icon = 'https://render-classic-us.worldofwarcraft.com/icons/56/' + deal.icon + '.jpg';
              }_context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](8);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 16:
              _context.prev = 16;
              _context.prev = 17;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 19:
              _context.prev = 19;

              if (!_didIteratorError) {
                _context.next = 22;
                break;
              }

              throw _iteratorError;

            case 22:
              return _context.finish(19);

            case 23:
              return _context.finish(16);

            case 24:
              store.commit('setFetchUrl', fetchUrl);
              store.commit('setDeals', deals);
              store.commit('setFilters', [{ name: 'Absolute Profit', unique: true, active: true, icon: '/img/warframe/ui/platinum.svg', fetchUrl: fetchUrl }, { name: 'Relative Profit', unique: true, active: false, icon: '/img/warframe/ui/platinum.svg', fetchUrl: fetchUrl + '&relative=true' }]);

            case 27:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[8, 12, 16, 24], [17,, 19, 23]]);
    }));

    function asyncData(_x) {
      return _ref2.apply(this, arguments);
    }

    return asyncData;
  }(),


  computed: {
    serverPretty: function serverPretty() {
      var server = this.$store.state.servers.activeServer;
      return server.name + ' (' + (server.faction.charAt(0).toUpperCase() + server.faction.slice(1)) + ')';
    }
  },

  methods: {
    compareServer: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(server) {
        var fetchUrlSplit, fetchUrl, deals, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, deal;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fetchUrlSplit = this.$store.state.deals.fetchUrl.split('&');
                fetchUrl = fetchUrlSplit[0] + '&compare_with=' + server;


                this.$store.commit('setFetchUrl', fetchUrl);
                this.$store.commit('setFilters', [{ name: 'Absolute Profit', unique: true, active: true, icon: '/img/warframe/ui/platinum.svg', fetchUrl: fetchUrl }, { name: 'Relative Profit', unique: true, active: false, icon: '/img/warframe/ui/platinum.svg', fetchUrl: fetchUrl + '&relative=true' }]);

                _context2.next = 6;
                return this.$cubic.get(fetchUrl);

              case 6:
                deals = _context2.sent;
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 10;

                for (_iterator2 = (0, _getIterator3.default)(deals); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  deal = _step2.value;
                  deal.icon = 'https://render-classic-us.worldofwarcraft.com/icons/56/' + deal.icon + '.jpg';
                }_context2.next = 18;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2['catch'](10);
                _didIteratorError2 = true;
                _iteratorError2 = _context2.t0;

              case 18:
                _context2.prev = 18;
                _context2.prev = 19;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 21:
                _context2.prev = 21;

                if (!_didIteratorError2) {
                  _context2.next = 24;
                  break;
                }

                throw _iteratorError2;

              case 24:
                return _context2.finish(21);

              case 25:
                return _context2.finish(18);

              case 26:
                this.$store.commit('setDeals', deals);

              case 27:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[10, 14, 18, 26], [19,, 21, 25]]);
      }));

      function compareServer(_x2) {
        return _ref3.apply(this, arguments);
      }

      return compareServer;
    }()
  },

  storeModule: _deals4.default,

  head: function head() {
    return {
      title: 'Most Profitable Deals on ' + this.serverPretty + ' \xB7 NexusHub',
      meta: (0, _meta2.default)({
        title: 'Most Profitable Deals for ' + this.serverPretty + ' on NexusHub',
        description: 'Get the most profitable deals on the World of Warcraft Classic Auction House for ' + this.serverPretty + ' on NexusHub',
        image: 'https://nexushub.co/img/brand/og-banner-wow-classic.jpg'
      })
    };
  }
};

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_4f7257f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(600);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_4f7257f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_4f7257f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_4f7257f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deals_vue_vue_type_template_id_4f7257f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1002);
/* harmony import */ var _deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(598);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _deals_vue_vue_type_style_index_0_id_4f7257f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(946);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deals_vue_vue_type_template_id_4f7257f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _deals_vue_vue_type_template_id_4f7257f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "4f7257f6",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

}]);