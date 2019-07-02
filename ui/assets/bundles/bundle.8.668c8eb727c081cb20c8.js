(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(157);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 157:
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
    var nitroAds = window['nitroAds'];
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

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_vue_vue_type_template_id_51c25491_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(338);
/* harmony import */ var _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(170);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _module_vue_vue_type_style_index_0_id_51c25491_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(322);
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

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _progress = __webpack_require__(67);

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    progressbar: _progress2.default
  }
};

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nitroAds_vue_vue_type_template_id_00902068___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(187);
/* harmony import */ var _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(156);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(185);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nitroAds_vue_vue_type_template_id_00902068___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _nitroAds_vue_vue_type_template_id_00902068___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(182);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

var _vueObserveVisibility = __webpack_require__(330);

var _vueObserveVisibility2 = _interopRequireDefault(_vueObserveVisibility);

var _module2 = __webpack_require__(163);

var _module3 = _interopRequireDefault(_module2);

var _moment = __webpack_require__(143);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    module: _module3.default
  },

  props: ['patchlog', 'overview'],

  data: function data() {
    return {
      visible: false,
      seen: false,
      itemName: this.$route.params.item
    };
  },
  beforeMount: function beforeMount() {
    _vue2.default.use(_vueObserveVisibility2.default);
  },


  methods: {
    moment: _moment2.default,
    setVisibility: function setVisibility(bool, entry) {
      var buffer = -99999;
      if (!this.$store.state.items) return;

      if (bool || entry.boundingClientRect.top < entry.rootBounds.bottom + buffer || entry.boundingClientRect.bottom < entry.rootBounds.top + buffer) {
        this.visible = true;
        this.seen = true;
        this.$store.commit('addItemPatchlog', this.patchlog);
      } else {
        this.visible = false;
        this.$store.commit('removeItemPatchlog', this.patchlog);
      }
    }
  }
};

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ads/nitroAds.vue?vue&type=template&id=00902068&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ad-unit layout-center",style:({
  display: _vm.display,
  'max-height': _vm.maxHeight,
  'max-width': _vm.maxWidth
}),attrs:{"id":("ad-" + _vm.name)}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ads/nitroAds.vue?vue&type=template&id=00902068&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_id_51c25491_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_id_51c25491_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_id_51c25491_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_id_51c25491_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(333);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(43);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(44);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _items = __webpack_require__(428);

var _items2 = _interopRequireDefault(_items);

var _tooltip = __webpack_require__(348);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _header = __webpack_require__(347);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = function title(str) {
  return str.toLowerCase().replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  });
};

exports.default = {
  components: {
    uiHeader: _header2.default,
    tooltip: _tooltip2.default
  },

  computed: {
    item: function item() {
      return this.$store.state.items.item;
    },
    itemUrl: function itemUrl() {
      var item = this.item.name.replace(/ /g, '-').toLowerCase();
      return '/warframe/items/' + item;
    },
    component: function component() {
      var item = this.$store.state.items.item;
      var selected = this.$store.state.items.selected.component;
      var component = item.components.find(function (c) {
        return c.name === selected;
      });
      return component;
    },
    selectedComponent: function selectedComponent() {
      return this.$store.state.items.selected.component;
    }
  },

  asyncData: function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
      var store = _ref.store,
          route = _ref.route;
      var item, itemData;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              item = encodeURIComponent(title(route.params.item.replace(/(?:(\-)(?!\1))+/g, ' ').replace(/- /g, '-')));

              if (!(title(store.state.items.item.name) !== item)) {
                _context.next = 13;
                break;
              }

              _context.next = 4;
              return this.$cubic.get('/warframe/v1/items/' + item);

            case 4:
              itemData = _context.sent;
              _context.next = 7;
              return this.$cubic.get('/warframe/v1/patchlogs?item=' + item);

            case 7:
              itemData.patchlogs = _context.sent;

              if (!itemData.tradable) {
                _context.next = 12;
                break;
              }

              _context.next = 11;
              return this.$cubic.get('/warframe/v1/orders?item=' + item);

            case 11:
              itemData.activeOrders = _context.sent.length;

            case 12:
              store.commit('setItem', itemData);

            case 13:
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


  methods: {
    selectComponent: function selectComponent(e) {
      var tag = e.srcElement.outerText;
      this.$store.commit('setItemComponent', tag);
    }
  },

  storeModule: _items2.default
};

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/module.vue?vue&type=template&id=51c25491&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"module"},[_c('div',{staticClass:"header"},[_vm._t("header")],2),_vm._v(" "),_c('div',{staticClass:"body"},[_vm._t("body")],2),_vm._v(" "),_c('div',{staticClass:"footer"},[_vm._t("footer")],2),_vm._v(" "),_c('progressbar',{ref:"progress"})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/module.vue?vue&type=template&id=51c25491&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patchlog_vue_vue_type_template_id_e39ef420_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(349);
/* harmony import */ var _patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(181);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _patchlog_vue_vue_type_style_index_0_id_e39ef420_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(344);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _patchlog_vue_vue_type_template_id_e39ef420_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _patchlog_vue_vue_type_template_id_e39ef420_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "e39ef420",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_e39ef420_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(183);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_e39ef420_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_e39ef420_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_e39ef420_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_vue_vue_type_template_id_074848a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(495);
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(332);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _header_vue_vue_type_style_index_0_id_074848a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(429);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_074848a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _header_vue_vue_type_template_id_074848a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "074848a7",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/tooltip.vue?vue&type=template&id=2dcfade2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tooltip"},[_c('div',{staticClass:"tooltip-pointer"}),_vm._v(" "),_c('span',[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/tooltip.vue?vue&type=template&id=2dcfade2&scoped=true&

// EXTERNAL MODULE: ./ui/components/ui/tooltip.vue?vue&type=style&index=0&id=2dcfade2&lang=scss&scoped=true&
var tooltipvue_type_style_index_0_id_2dcfade2_lang_scss_scoped_true_ = __webpack_require__(421);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./ui/components/ui/tooltip.vue

var script = {}



/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "2dcfade2",
  null
  
)

/* harmony default export */ var tooltip = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/warframe/patchlog.vue?vue&type=template&id=e39ef420&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:({
  callback: _vm.setVisibility,
  intersection: {
    rootMargin: '0px 0px 20% 0px'
  }
}),expression:"{\n  callback: setVisibility,\n  intersection: {\n    rootMargin: '0px 0px 20% 0px'\n  }\n}"}],staticClass:"patchlog",class:{ visible: _vm.visible }},[_c('template',{slot:"header"},[_c('h3',[_vm._v(_vm._s(_vm.patchlog.name))]),_vm._v(" "),_c('time',{attrs:{"datetime":_vm.patchlog.date}},[_vm._v(_vm._s(_vm.overview ? _vm.moment (new Date(_vm.patchlog.date)).fromNow() : _vm.moment(new Date(_vm.patchlog.date)).format('MMMM Do YYYY')))])]),_vm._v(" "),_c('template',{slot:"body"},[_c('div',{staticClass:"image"},[((_vm.visible || _vm.seen) && _vm.patchlog.imgUrl)?_c('img',{attrs:{"src":_vm.patchlog.imgUrl,"alt":_vm.patchlog.name,"onerror":"this.style.display='none'"}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"shade"})]),_vm._v(" "),(_vm.patchlog.additions)?_c('div',[_c('h4',[_vm._v("Additions")]),_vm._v(" "),_vm._l((_vm.patchlog.additions.split('\n')),function(log,i){return (log)?_c('p',{key:log + i},[_vm._v("\n        "+_vm._s(log)+"\n      ")]):_vm._e()})],2):_vm._e(),_vm._v(" "),(_vm.patchlog.changes)?_c('div',[_c('h4',[_vm._v("Changes")]),_vm._v(" "),_vm._l((_vm.patchlog.changes.split('\n')),function(log,i){return (log)?_c('p',{key:log + i},[_vm._v("\n        "+_vm._s(log)+"\n      ")]):_vm._e()})],2):_vm._e(),_vm._v(" "),(_vm.patchlog.fixes)?_c('div',[_c('h4',[_vm._v("Fixes")]),_vm._v(" "),_vm._l((_vm.patchlog.fixes.split('\n')),function(log,i){return (log)?_c('p',{key:log + i},[_vm._v("\n        "+_vm._s(log)+"\n      ")]):_vm._e()})],2):_vm._e()]),_vm._v(" "),_c('template',{slot:"footer"},[_c('a',{attrs:{"href":_vm.patchlog.url,"target":"_blank"}},[_vm._v("\n      Full Patch Notes\n      "),_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/arrow-right.svg","alt":"View full patch notes"}})])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/warframe/patchlog.vue?vue&type=template&id=e39ef420&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 189,
	"./af.js": 189,
	"./ar": 190,
	"./ar-dz": 191,
	"./ar-dz.js": 191,
	"./ar-kw": 192,
	"./ar-kw.js": 192,
	"./ar-ly": 193,
	"./ar-ly.js": 193,
	"./ar-ma": 194,
	"./ar-ma.js": 194,
	"./ar-sa": 195,
	"./ar-sa.js": 195,
	"./ar-tn": 196,
	"./ar-tn.js": 196,
	"./ar.js": 190,
	"./az": 197,
	"./az.js": 197,
	"./be": 198,
	"./be.js": 198,
	"./bg": 199,
	"./bg.js": 199,
	"./bm": 200,
	"./bm.js": 200,
	"./bn": 201,
	"./bn.js": 201,
	"./bo": 202,
	"./bo.js": 202,
	"./br": 203,
	"./br.js": 203,
	"./bs": 204,
	"./bs.js": 204,
	"./ca": 205,
	"./ca.js": 205,
	"./cs": 206,
	"./cs.js": 206,
	"./cv": 207,
	"./cv.js": 207,
	"./cy": 208,
	"./cy.js": 208,
	"./da": 209,
	"./da.js": 209,
	"./de": 210,
	"./de-at": 211,
	"./de-at.js": 211,
	"./de-ch": 212,
	"./de-ch.js": 212,
	"./de.js": 210,
	"./dv": 213,
	"./dv.js": 213,
	"./el": 214,
	"./el.js": 214,
	"./en-SG": 215,
	"./en-SG.js": 215,
	"./en-au": 216,
	"./en-au.js": 216,
	"./en-ca": 217,
	"./en-ca.js": 217,
	"./en-gb": 218,
	"./en-gb.js": 218,
	"./en-ie": 219,
	"./en-ie.js": 219,
	"./en-il": 220,
	"./en-il.js": 220,
	"./en-nz": 221,
	"./en-nz.js": 221,
	"./eo": 222,
	"./eo.js": 222,
	"./es": 223,
	"./es-do": 224,
	"./es-do.js": 224,
	"./es-us": 225,
	"./es-us.js": 225,
	"./es.js": 223,
	"./et": 226,
	"./et.js": 226,
	"./eu": 227,
	"./eu.js": 227,
	"./fa": 228,
	"./fa.js": 228,
	"./fi": 229,
	"./fi.js": 229,
	"./fo": 230,
	"./fo.js": 230,
	"./fr": 231,
	"./fr-ca": 232,
	"./fr-ca.js": 232,
	"./fr-ch": 233,
	"./fr-ch.js": 233,
	"./fr.js": 231,
	"./fy": 234,
	"./fy.js": 234,
	"./ga": 235,
	"./ga.js": 235,
	"./gd": 236,
	"./gd.js": 236,
	"./gl": 237,
	"./gl.js": 237,
	"./gom-latn": 238,
	"./gom-latn.js": 238,
	"./gu": 239,
	"./gu.js": 239,
	"./he": 240,
	"./he.js": 240,
	"./hi": 241,
	"./hi.js": 241,
	"./hr": 242,
	"./hr.js": 242,
	"./hu": 243,
	"./hu.js": 243,
	"./hy-am": 244,
	"./hy-am.js": 244,
	"./id": 245,
	"./id.js": 245,
	"./is": 246,
	"./is.js": 246,
	"./it": 247,
	"./it-ch": 248,
	"./it-ch.js": 248,
	"./it.js": 247,
	"./ja": 249,
	"./ja.js": 249,
	"./jv": 250,
	"./jv.js": 250,
	"./ka": 251,
	"./ka.js": 251,
	"./kk": 252,
	"./kk.js": 252,
	"./km": 253,
	"./km.js": 253,
	"./kn": 254,
	"./kn.js": 254,
	"./ko": 255,
	"./ko.js": 255,
	"./ku": 256,
	"./ku.js": 256,
	"./ky": 257,
	"./ky.js": 257,
	"./lb": 258,
	"./lb.js": 258,
	"./lo": 259,
	"./lo.js": 259,
	"./lt": 260,
	"./lt.js": 260,
	"./lv": 261,
	"./lv.js": 261,
	"./me": 262,
	"./me.js": 262,
	"./mi": 263,
	"./mi.js": 263,
	"./mk": 264,
	"./mk.js": 264,
	"./ml": 265,
	"./ml.js": 265,
	"./mn": 266,
	"./mn.js": 266,
	"./mr": 267,
	"./mr.js": 267,
	"./ms": 268,
	"./ms-my": 269,
	"./ms-my.js": 269,
	"./ms.js": 268,
	"./mt": 270,
	"./mt.js": 270,
	"./my": 271,
	"./my.js": 271,
	"./nb": 272,
	"./nb.js": 272,
	"./ne": 273,
	"./ne.js": 273,
	"./nl": 274,
	"./nl-be": 275,
	"./nl-be.js": 275,
	"./nl.js": 274,
	"./nn": 276,
	"./nn.js": 276,
	"./pa-in": 277,
	"./pa-in.js": 277,
	"./pl": 278,
	"./pl.js": 278,
	"./pt": 279,
	"./pt-br": 280,
	"./pt-br.js": 280,
	"./pt.js": 279,
	"./ro": 281,
	"./ro.js": 281,
	"./ru": 282,
	"./ru.js": 282,
	"./sd": 283,
	"./sd.js": 283,
	"./se": 284,
	"./se.js": 284,
	"./si": 285,
	"./si.js": 285,
	"./sk": 286,
	"./sk.js": 286,
	"./sl": 287,
	"./sl.js": 287,
	"./sq": 288,
	"./sq.js": 288,
	"./sr": 289,
	"./sr-cyrl": 290,
	"./sr-cyrl.js": 290,
	"./sr.js": 289,
	"./ss": 291,
	"./ss.js": 291,
	"./sv": 292,
	"./sv.js": 292,
	"./sw": 293,
	"./sw.js": 293,
	"./ta": 294,
	"./ta.js": 294,
	"./te": 295,
	"./te.js": 295,
	"./tet": 296,
	"./tet.js": 296,
	"./tg": 297,
	"./tg.js": 297,
	"./th": 298,
	"./th.js": 298,
	"./tl-ph": 299,
	"./tl-ph.js": 299,
	"./tlh": 300,
	"./tlh.js": 300,
	"./tr": 301,
	"./tr.js": 301,
	"./tzl": 302,
	"./tzl.js": 302,
	"./tzm": 303,
	"./tzm-latn": 304,
	"./tzm-latn.js": 304,
	"./tzm.js": 303,
	"./ug-cn": 305,
	"./ug-cn.js": 305,
	"./uk": 306,
	"./uk.js": 306,
	"./ur": 307,
	"./ur.js": 307,
	"./uz": 308,
	"./uz-latn": 309,
	"./uz-latn.js": 309,
	"./uz.js": 308,
	"./vi": 310,
	"./vi.js": 310,
	"./x-pseudo": 311,
	"./x-pseudo.js": 311,
	"./yo": 312,
	"./yo.js": 312,
	"./zh-cn": 313,
	"./zh-cn.js": 313,
	"./zh-hk": 314,
	"./zh-hk.js": 314,
	"./zh-tw": 315,
	"./zh-tw.js": 315
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 351;

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_id_2dcfade2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(331);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_id_2dcfade2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_id_2dcfade2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_id_2dcfade2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'items',
  state: {
    item: { name: '', patchlogs: [] },
    selected: {
      component: 'Set',
      offerType: 'combined',
      regions: []
    },
    patchlogs: {
      current: 0,
      active: []
    }
  },

  mutations: {
    setItem: function setItem(state, item) {
      item.tags = [];
      item.tags.push(item.category);
      item.tags.push(item.name.includes(' Prime') ? 'Prime' : item.type);
      state.item = item;
    },
    setItemComponent: function setItemComponent(state, component) {
      state.selected.component = component.trim();
    },
    setItemOfferType: function setItemOfferType(state, type) {
      state.selected.offerType = type.toLowerCase();
    },
    setItemPatchlogs: function setItemPatchlogs(state, patchlogs) {
      state.item.patchlogs = patchlogs;
    },
    addItemPatchlog: function addItemPatchlog(state, patchlog) {
      state.patchlogs.current = state.item.patchlogs.findIndex(function (p) {
        return p.name === patchlog.name;
      });
    },
    removeItemPatchlog: function removeItemPatchlog(state, patchlog) {
      var i = state.patchlogs.active.find(function (p) {
        return p.name === patchlog.name;
      });

      if (i) {
        state.patchlogs.active.slice(i, 1);
        state.patchlogs.current = state.item.patchlogs.findIndex(function (p) {
          return p.name === patchlog.name;
        });
      }
    }
  }
};

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_074848a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(334);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_074848a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_074848a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_074848a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(438);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(43);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(44);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

var _vueAffix = __webpack_require__(727);

var _vueAffix2 = _interopRequireDefault(_vueAffix);

var _vueObserveVisibility = __webpack_require__(330);

var _vueObserveVisibility2 = _interopRequireDefault(_vueObserveVisibility);

var _nitroAds = __webpack_require__(174);

var _nitroAds2 = _interopRequireDefault(_nitroAds);

var _appContent = __webpack_require__(153);

var _appContent2 = _interopRequireDefault(_appContent);

var _header = __webpack_require__(345);

var _header2 = _interopRequireDefault(_header);

var _meta = __webpack_require__(159);

var _meta2 = _interopRequireDefault(_meta);

var _moment = __webpack_require__(143);

var _moment2 = _interopRequireDefault(_moment);

var _warframe = __webpack_require__(167);

var _warframe2 = _interopRequireDefault(_warframe);

var _vueNoSsr = __webpack_require__(412);

var _vueNoSsr2 = _interopRequireDefault(_vueNoSsr);

var _patchlog = __webpack_require__(343);

var _patchlog2 = _interopRequireDefault(_patchlog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    ad: _nitroAds2.default,
    navigation: _warframe2.default,
    appContent: _appContent2.default,
    itemHeader: _header2.default,
    patchlog: _patchlog2.default,
    noSsr: _vueNoSsr2.default
  },

  computed: {
    item: function item() {
      return this.$store.state.items.item;
    },
    patchlogs: function patchlogs() {
      return this.$store.state.items.patchlogs;
    },
    progress: function progress() {
      return 'translateY(' + 120 * (this.$store.state.items.patchlogs.current || 0.0001) / this.item.patchlogs.length + 'px)';
    }
  },

  asyncData: function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var item;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              item = encodeURIComponent(this.$store.state.items.item.name);
              _context.t0 = this.$store;
              _context.next = 4;
              return this.$cubic.get('/warframe/v1/patchlogs?item=' + item + '&limit=0');

            case 4:
              _context.t1 = _context.sent;

              _context.t0.commit.call(_context.t0, 'setItemPatchlogs', _context.t1);

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
  created: function created() {
    if (!this.item.patchlogs || this.item.patchlogs && !this.item.patchlogs.length) {
      this.$router.replace(this.$route.fullPath.replace('/patchlogs', '/'));
    }
  },
  beforeMount: function beforeMount() {
    _vue2.default.use(_vueAffix2.default);
    _vue2.default.use(_vueObserveVisibility2.default);
  },


  methods: {
    moment: _moment2.default
  },

  head: function head() {
    return {
      title: this.item.name + ' Patchlogs \xB7 NexusHub',
      meta: (0, _meta2.default)({
        title: this.item.name + ' Patchlogs on NexusHub',
        description: 'Check out all ' + (this.item.patchlogs ? this.item.patchlogs.length : 0) + ' patchlogs affecting ' + this.item.name + ' on NexusHub.',
        image: 'https://nexushub.co' + this.item.imgUrl
      })
    };
  }
};

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/warframe/header.vue?vue&type=template&id=074848a7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_c('div',{staticClass:"container"},[_c('div',{staticClass:"item-profile-img"},[_c('img',{attrs:{"src":_vm.item.imgUrl,"alt":_vm.item.name,"draggable":"false","onerror":"this.style.display='none'"}}),_vm._v(" "),_c('img',{staticClass:"item-profile-img-blur",attrs:{"src":_vm.item.imgUrl,"alt":_vm.item.name,"draggable":"false","onerror":"this.style.display='none'"}})])]),_vm._v(" "),_c('div',{staticClass:"item-img-shade"}),_vm._v(" "),_c('div',{staticClass:"item-img-shade-2"}),_vm._v(" "),_c('div',{staticClass:"background"}),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"item-profile"},[_c('div',{staticClass:"item-profile-data-info"},[_c('h1',[_vm._v(_vm._s(_vm.item.name))]),_vm._v(" "),(_vm.item.vaulted)?_c('div',{staticClass:"vaulted"},[_c('img',{staticClass:"ico-h-24 interactive",attrs:{"src":"/img/warframe/ui/vaulted.svg","alt":"Vaulted"}}),_vm._v(" "),_c('tooltip',[_vm._v("Vaulted")])],1):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.item.components.length > 1)?_c('div',_vm._l((_vm.item.components),function(component){return (component.tradable || component.name === 'Set')?_c('span',{key:component.name,staticClass:"interactive",class:{ selected: _vm.selectedComponent === component.name },on:{"click":_vm.selectComponent}},[_vm._v("\n            "+_vm._s(component.name)+"\n          ")]):_vm._e()}),0):_vm._l((_vm.item.tags),function(tag,i){return _c('span',{key:tag + i,staticClass:"selected interactive"},[_vm._v("\n          "+_vm._s(tag)+"\n        ")])})],2)])]),_vm._v(" "),_c('nav',{ref:"subnav",staticClass:"subnav"},[_c('div',{staticClass:"container"},[_c('router-link',{staticClass:"interactive",attrs:{"to":_vm.itemUrl,"exact":""}},[_vm._v("Overview")]),_vm._v(" "),(_vm.item.tradable)?_c('router-link',{staticClass:"interactive",attrs:{"to":(_vm.itemUrl + "/prices")}},[_vm._v("Prices")]):_vm._e(),_vm._v(" "),(_vm.item.tradable)?_c('router-link',{staticClass:"interactive",attrs:{"to":(_vm.itemUrl + "/trading")}},[_vm._v("\n        Trade\n        "),_c('span',{staticClass:"btn-counter"},[_vm._v(_vm._s(_vm.item.activeOrders))])]):_vm._e(),_vm._v(" "),(_vm.item.patchlogs && _vm.item.patchlogs.length)?_c('router-link',{staticClass:"interactive",attrs:{"to":(_vm.itemUrl + "/patchlogs")}},[_vm._v("Patchlogs")]):_vm._e()],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/warframe/header.vue?vue&type=template&id=074848a7&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_style_index_0_id_21794a57_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(439);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_style_index_0_id_21794a57_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_style_index_0_id_21794a57_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_style_index_0_id_21794a57_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patchlogs_vue_vue_type_template_id_21794a57_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(780);
/* harmony import */ var _patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(437);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _patchlogs_vue_vue_type_style_index_0_id_21794a57_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(728);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _patchlogs_vue_vue_type_template_id_21794a57_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _patchlogs_vue_vue_type_template_id_21794a57_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "21794a57",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/warframe/items/patchlogs.vue?vue&type=template&id=21794a57&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation'),_vm._v(" "),_c('item-header'),_vm._v(" "),_c('app-content',[_c('section',{staticClass:"patchlogs"},[_c('div',{staticClass:"container",attrs:{"id":"patchlogs-container"}},[(_vm.item.patchlogs)?_c('div',{staticClass:"patchlogs",attrs:{"id":"patchlogs"}},[_c('h2',{staticClass:"sub"},[_vm._v("Patchlog History")]),_vm._v(" "),_vm._l((_vm.item.patchlogs),function(patchlog,i){return _c('div',{key:patchlog.name + patchlog.date},[_c('patchlog',{attrs:{"patchlog":patchlog}}),_vm._v(" "),(i === 0 || i % 3 === 0)?_c('ad',{attrs:{"name":"warframe-patchlogs-mid"}}):_vm._e()],1)})],2):_c('div',{staticClass:"no-data"},[_vm._v("\n          No patchlogs found :(\n        ")]),_vm._v(" "),_c('no-ssr',[(_vm.item.patchlogs[_vm.patchlogs.current])?_c('affix',{staticClass:"timeline-wrapper",attrs:{"offset":{ top: 150, bottom: 80 },"relative-element-selector":"#patchlogs-container"}},[_c('span',[_vm._v(_vm._s(_vm.moment(new Date(_vm.item.patchlogs[_vm.patchlogs.current].date)).fromNow()))]),_vm._v(" "),_c('div',{staticClass:"timeline"},[_c('div',{staticClass:"timeline-slider",style:({ transform: [_vm.progress] })}),_vm._v(" "),_c('span',{style:({ transform: [_vm.progress] })},[_vm._v(_vm._s(_vm.patchlogs.current)+" / "+_vm._s(_vm.item.patchlogs.length))])]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.moment(new Date(_vm.item.patchlogs[_vm.item.patchlogs.length - 1].date)).fromNow()))])]):_vm._e()],1),_vm._v(" "),_c('ad',{attrs:{"name":"warframe-patchlogs-end"}})],1)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/warframe/items/patchlogs.vue?vue&type=template&id=21794a57&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);