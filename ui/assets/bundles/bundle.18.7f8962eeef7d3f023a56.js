(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/deals.vue?vue&type=template&id=160fd141&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"deal-group"},[_c('div',{staticClass:"filter"},[_c('div',{staticClass:"filter-tags"},[_c('div',{staticClass:"filter-tag-row"},_vm._l((_vm.filters),function(filter){return _c('div',{key:filter.name,staticClass:"btn-tag",class:{ active: filter.active },on:{"click":function($event){return _vm.selectFilter(filter)}}},[(filter.icon)?_c('img',{staticClass:"ico-12",attrs:{"src":filter.icon,"alt":filter.name}}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(filter.name))])])}),0)])]),_vm._v(" "),_c('div',{staticClass:"deal-container"},[_c('transition-group',{ref:"deals",staticClass:"deal-list"},_vm._l((_vm.deals),function(deal){return _c('div',{key:deal.itemId,staticClass:"deal"},[_c('router-link',{staticClass:"row interactive",attrs:{"to":("/wow-classic/items/" + _vm.server + "/" + (deal.itemId))}},[_c('img',{staticClass:"deal-img-blur",attrs:{"src":deal.icon,"alt":deal.name}}),_vm._v(" "),_c('div',{staticClass:"deal-title col-b"},[_c('div',{staticClass:"deal-img"},[_c('img',{class:{ mod: deal.icon.includes('jpeg') },attrs:{"src":deal.icon,"alt":deal.name}})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(deal.name))])]),_vm._v(" "),_c('div',{staticClass:"deal-data row"},[_c('div',{staticClass:"deal-data-value"},[_c('img',{staticClass:"ico-12",attrs:{"src":"/img/warframe/ui/platinum.svg","alt":"Gold"}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.parsePrice(deal.dealDiff)))])]),_vm._v(" "),_c('div',{staticClass:"deal-data-value"},[_c('span',{staticClass:"price-diff",class:{ negative: deal.dealPercentage < 0 }},[_c('indicator',{attrs:{"diff":deal.dealPercentage}}),_vm._v(" "+_vm._s(+Math.abs(deal.dealPercentage * 100).toFixed(2))+"%\n              ")],1)]),_vm._v(" "),_c('div',{staticClass:"deal-data-value whitespace"})])])],1)}),0)],1),_vm._v(" "),_vm._m(0)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"deal-status"},[_c('img',{staticClass:"ico-h-24",attrs:{"src":"/img/ui/status-loading-wow-classic.svg","alt":"loading"}}),_vm._v(" "),_c('p',[_vm._v("Loading deals...")])])}]


// CONCATENATED MODULE: ./ui/components/wow-classic/deals.vue?vue&type=template&id=160fd141&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(192), __esModule: true };

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 168:
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

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = __webpack_require__(35);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['x', 'y', 'diff', 'reverse'],

  data: function data() {
    return {
      positive: 'M3.65,0l-3.15,3.265l2.363,0l-0.001,5.735l1.575,0l0,-5.735l2.363,0l-3.15,-3.265Z',
      negative: 'M3.65,9l3.15,-3.265l-2.363,0l0,-5.735l-1.575,0l0.001,5.735l-2.363,0l3.15,3.265Z'
    };
  },


  computed: {
    theme: function theme() {
      return (0, _theme2.default)(this);
    }
  }
};

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"indicator":"warframe_indicator_1spmD"};

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"indicator":"wow-classic_indicator_GhxVb"};

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nitroAds_vue_vue_type_template_id_b107c58a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);
/* harmony import */ var _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(167);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(191);
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

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
__webpack_require__(77);
module.exports = __webpack_require__(193);


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var get = __webpack_require__(79);
module.exports = __webpack_require__(2).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ 194:
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

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indicator_vue_vue_type_template_id_7c937518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(348);
/* harmony import */ var _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(185);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(345);
/* harmony import */ var _indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(346);
/* harmony import */ var _indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(347);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);










function injectStyles (context) {
  
  this["warframe"] = (_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"])
this["wow-classic"] = (_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"].locals || _indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"])

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(
  _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _indicator_vue_vue_type_template_id_7c937518_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _indicator_vue_vue_type_template_id_7c937518_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "7c937518",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(187);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(188);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(189);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/charts/indicator.vue?vue&type=template&id=7c937518&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"indicator",class:[{ negative: _vm.diff < 0, positive: _vm.diff > 0, reverse: _vm.reverse }, _vm.theme.indicator],attrs:{"height":"10px","width":"7px","overflow":"visible"}},[_c('path',{attrs:{"transform":("translate(" + (_vm.x || 0) + ", " + (_vm.y || 0) + ")"),"d":_vm.diff < 0 ? _vm.negative : _vm.positive}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/charts/indicator.vue?vue&type=template&id=7c937518&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(571);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = __webpack_require__(166);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nitroAds = __webpack_require__(190);

var _nitroAds2 = _interopRequireDefault(_nitroAds);

var _appContent = __webpack_require__(177);

var _appContent2 = _interopRequireDefault(_appContent);

var _deals = __webpack_require__(926);

var _deals2 = _interopRequireDefault(_deals);

var _meta = __webpack_require__(176);

var _meta2 = _interopRequireDefault(_meta);

var _wowClassic = __webpack_require__(391);

var _wowClassic2 = _interopRequireDefault(_wowClassic);

var _wowclassic = __webpack_require__(575);

var _wowclassic2 = _interopRequireDefault(_wowclassic);

var _utility = __webpack_require__(201);

var _utility2 = _interopRequireDefault(_utility);

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
    server: function server() {
      return this.$store.state.servers.server;
    },
    serverPretty: function serverPretty() {
      var serverlist = this.$store.state.servers.EU.concat(this.$store.state.servers.US);
      var serverSplit = this.server.split('-');
      var faction = serverSplit.pop();
      var serverIndex = serverlist.map(function (x) {
        return _utility2.default.serverSlug(x);
      }).indexOf(serverSplit.join('-'));
      return serverlist[serverIndex] + ' (' + (faction.charAt(0).toUpperCase() + faction.slice(1)) + ')';
    }
  },

  storeModule: _wowclassic2.default,

  head: function head() {
    return {
      title: 'Profitable Deals on ' + this.serverPretty + ' \xB7 NexusHub',
      meta: (0, _meta2.default)({
        title: 'Profitable Deals for ' + this.serverPretty + ' on NexusHub',
        description: 'Get the most profitable deals on the World of Warcraft Classic Auction House for ' + this.serverPretty + ' on NexusHub',
        image: 'https://nexushub.co/img/brand/og-banner-wow-classic.jpg'
      })
    };
  }
};

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(573);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(166);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _indicator = __webpack_require__(200);

var _indicator2 = _interopRequireDefault(_indicator);

var _utility = __webpack_require__(201);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    indicator: _indicator2.default
  },

  data: function data() {
    return {
      fetchingDeals: false
    };
  },


  computed: {
    deals: function deals() {
      return this.$store.state.wowclassic.deals;
    },
    filters: function filters() {
      return this.$store.state.wowclassic.filters;
    },
    fetchUrl: function fetchUrl() {
      return this.$store.state.wowclassic.fetchUrl;
    },
    server: function server() {
      return this.$store.state.servers.server;
    },
    serverPretty: function serverPretty() {
      var serverlist = this.$store.state.servers.EU.concat(this.$store.state.servers.US);
      var serverSplit = this.server.split('-');
      var faction = serverSplit.pop();
      var serverIndex = serverlist.map(function (x) {
        return _utility2.default.serverSlug(x);
      }).indexOf(serverSplit.join('-'));
      return serverlist[serverIndex] + ' (' + (faction.charAt(0).toUpperCase() + faction.slice(1)) + ')';
    }
  },

  created: function created() {
    this.parsePrice = _utility2.default.parsePrice;
  },
  mounted: function mounted() {
    window.addEventListener('scroll', this.updateOnScroll);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.updateOnScroll);
  },


  methods: {
    updateOnScroll: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var lastDeal, lastDealPosition, viewportHeight;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                lastDeal = this.$refs.deals.$children[this.$refs.deals.$children.length - 1].$el;
                lastDealPosition = lastDeal.getBoundingClientRect().top + window.pageYOffset;
                viewportHeight = window.innerHeight;

                if (!(window.scrollY >= lastDealPosition - viewportHeight && !this.fetchingDeals)) {
                  _context.next = 8;
                  break;
                }

                this.fetchingDeals = true;
                _context.next = 7;
                return this.$store.dispatch('addDeals', this.server);

              case 7:
                this.fetchingDeals = false;

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateOnScroll() {
        return _ref.apply(this, arguments);
      }

      return updateOnScroll;
    }(),
    selectFilter: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(filter) {
        var newFilters, selectedFilter, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, newFilter, deals, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, deal;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                newFilters = this.filters;
                selectedFilter = newFilters.find(function (f) {
                  return f.name === filter.name;
                });

                if (!(!selectedFilter || selectedFilter.active)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt('return');

              case 4:
                if (!filter.unique) {
                  _context2.next = 24;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 8;

                for (_iterator = (0, _getIterator3.default)(newFilters); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  newFilter = _step.value;

                  if (newFilter.unique) newFilter.active = false;
                }
                _context2.next = 16;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2['catch'](8);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 16:
                _context2.prev = 16;
                _context2.prev = 17;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 19:
                _context2.prev = 19;

                if (!_didIteratorError) {
                  _context2.next = 22;
                  break;
                }

                throw _iteratorError;

              case 22:
                return _context2.finish(19);

              case 23:
                return _context2.finish(16);

              case 24:
                if (!(filter.fetchUrl && filter.fetchUrl !== this.fetchUrl)) {
                  _context2.next = 49;
                  break;
                }

                this.$store.commit('setFetchUrl', filter.fetchUrl);
                _context2.next = 28;
                return this.$cubic.get(filter.fetchUrl);

              case 28:
                deals = _context2.sent;
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context2.prev = 32;

                for (_iterator2 = (0, _getIterator3.default)(deals); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  deal = _step2.value;
                  deal.icon = 'https://render-classic-us.worldofwarcraft.com/icons/56/' + deal.icon + '.jpg';
                }_context2.next = 40;
                break;

              case 36:
                _context2.prev = 36;
                _context2.t1 = _context2['catch'](32);
                _didIteratorError2 = true;
                _iteratorError2 = _context2.t1;

              case 40:
                _context2.prev = 40;
                _context2.prev = 41;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 43:
                _context2.prev = 43;

                if (!_didIteratorError2) {
                  _context2.next = 46;
                  break;
                }

                throw _iteratorError2;

              case 46:
                return _context2.finish(43);

              case 47:
                return _context2.finish(40);

              case 48:
                this.$store.commit('setDeals', deals);

              case 49:
                selectedFilter.active = true;

                this.$store.commit('setFilters', newFilters);

              case 51:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[8, 12, 16, 24], [17,, 19, 23], [32, 36, 40, 48], [41,, 43, 47]]);
      }));

      function selectFilter(_x) {
        return _ref2.apply(this, arguments);
      }

      return selectFilter;
    }()
  }
};

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = __webpack_require__(166);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'wowclassic',

  state: {
    news: [],
    deals: [],
    craftingDeals: [],
    filters: [],
    fetchUrl: ''
  },

  mutations: {
    setNews: function setNews(state, news) {
      state.news = news;
    },
    setDeals: function setDeals(state, deals) {
      state.deals = deals;
    },
    setCraftingDeals: function setCraftingDeals(state, deals) {
      state.craftingDeals = deals;
    },
    setFilters: function setFilters(state, filters) {
      state.filters = filters;
    },
    setFetchUrl: function setFetchUrl(state, fetchUrl) {
      state.fetchUrl = fetchUrl;
    }
  },

  actions: {
    addDeals: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref, server) {
        var state = _ref.state,
            commit = _ref.commit;

        var newDeals, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, deal;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$cubic.get(state.fetchUrl + '&skip=' + state.deals.length);

              case 2:
                newDeals = _context.sent;
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 6;

                for (_iterator = (0, _getIterator3.default)(newDeals); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  deal = _step.value;
                  deal.icon = 'https://render-classic-us.worldofwarcraft.com/icons/56/' + deal.icon + '.jpg';
                }_context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](6);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 14:
                _context.prev = 14;
                _context.prev = 15;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 17:
                _context.prev = 17;

                if (!_didIteratorError) {
                  _context.next = 20;
                  break;
                }

                throw _iteratorError;

              case 20:
                return _context.finish(17);

              case 21:
                return _context.finish(14);

              case 22:
                commit('setDeals', state.deals.concat(newDeals.filter(function (nD) {
                  return !state.deals.find(function (d) {
                    return nD.itemId === d.itemId;
                  });
                })));

              case 23:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 10, 14, 22], [15,, 17, 21]]);
      }));

      function addDeals(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return addDeals;
    }()
  }
};

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deals_vue_vue_type_template_id_160fd141_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1016);
/* harmony import */ var _deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(572);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _deals_vue_vue_type_style_index_0_id_160fd141_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(927);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deals_vue_vue_type_template_id_160fd141_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _deals_vue_vue_type_template_id_160fd141_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "160fd141",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_160fd141_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(574);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_160fd141_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_160fd141_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_160fd141_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_7392e58d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(576);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_7392e58d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_7392e58d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_7392e58d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deals_vue_vue_type_template_id_7392e58d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(964);
/* harmony import */ var _deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(570);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _deals_vue_vue_type_style_index_0_id_7392e58d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(928);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _deals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deals_vue_vue_type_template_id_7392e58d_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _deals_vue_vue_type_template_id_7392e58d_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "7392e58d",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/wow-classic/deals.vue?vue&type=template&id=7392e58d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"deals"},[_c('navigation'),_vm._v(" "),_c('app-content',[_c('section',{staticClass:"results"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"deals-headline"},[_c('h1',[_vm._v("Most Profitable Deals on "+_vm._s(_vm.serverPretty))])]),_vm._v(" "),_c('deals')],1),_vm._v(" "),_c('ad',{attrs:{"name":"wow-classic-profitable-deals"}})],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/wow-classic/deals.vue?vue&type=template&id=7392e58d&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);