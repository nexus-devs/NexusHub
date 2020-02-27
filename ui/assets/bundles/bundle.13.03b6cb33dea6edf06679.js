(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 1001:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/warframe/price.vue?vue&type=template&id=03c472ff&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',{ref:"price",staticClass:"price"},[_c('template',{slot:"header"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":_vm.component.imgUrl,"alt":((_vm.item.name) + " " + (_vm.component.name))}})]),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.component.name === 'Set' ? _vm.item.name : _vm.component.name))])]),_vm._v(" "),_c('template',{slot:"body"},[_c('span',{staticClass:"highlight"},[_vm._v(_vm._s(_vm.current)+"p")]),_vm._v(" "),_c('price-diff',{attrs:{"current":_vm.previous,"previous":_vm.current,"type":"buying","unit":"p","base":"previously"}}),_vm._v(" "),_c('div',{staticClass:"graphs"},[_c('sparkline',{attrs:{"data":_vm.data.current,"compare":_vm.data.previous,"component":_vm.component.name}}),_vm._v(" "),_c('sparkline',{staticClass:"sparkline-previous",attrs:{"data":_vm.data.previous,"ceil":_vm.ceil}})],1),_vm._v(" "),_c('div',{staticClass:"more"},[_c('div',{staticClass:"btn-subtle active",on:{"click":_vm.fetchDetailed}},[_vm._v("\n        View Full Data\n      ")])]),_vm._v(" "),_c('div',{staticClass:"economy"},[_c('div',{staticClass:"economy-data"},[_c('span',[_vm._v("Buyers")]),_vm._v(" "),_c('div',[_c('span',[_vm._v("\n            "+_vm._s(_vm.component.prices.buying.current.orders)+"\n          ")]),_vm._v(" "),_c('span',{staticClass:"diff",class:{ negative: _vm.orderDiff < 0 }},[_vm._v("\n            ( "),_c('indicator',{attrs:{"diff":_vm.orderDiff.buying}}),_vm._v(" "+_vm._s(Math.abs(_vm.orderDiff.buying))+" )\n          ")],1)])]),_vm._v(" "),_c('div',{staticClass:"economy-data"},[_c('span',[_vm._v("Sellers")]),_vm._v(" "),_c('div',[_c('span',[_vm._v("\n            "+_vm._s(_vm.component.prices.selling.current.orders)+"\n          ")]),_vm._v(" "),_c('span',{staticClass:"diff"},[_vm._v("\n            ( "),_c('indicator',{attrs:{"diff":_vm.orderDiff.selling}}),_vm._v(" "+_vm._s(Math.abs(_vm.orderDiff.selling))+" )\n          ")],1)])])])],1),_vm._v(" "),_c('template',{slot:"footer"},[_c('module-time',{attrs:{"days":_vm.timerange,"fn":_vm.setTimerange}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/warframe/price.vue?vue&type=template&id=03c472ff&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/warframe/price-detailed.vue?vue&type=template&id=6f400713&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"price-detailed",class:{ active: _vm.active }},[(_vm.active)?_c('div',{staticClass:"item"},[_c('div',{staticClass:"back interactive",on:{"click":_vm.back}},[_c('img',{staticClass:"ico-h-12",attrs:{"src":"/img/ui/back-thin.svg","alt":"Back"}}),_vm._v(" "),_c('span',[_vm._v("Back")])]),_vm._v(" "),_c('div',{staticClass:"overview"},[_c('div',{staticClass:"img-wrapper"},[_c('img',{attrs:{"src":_vm.component.imgUrl,"alt":((_vm.item.name) + " " + (_vm.component.name))}})]),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.item.name)+" "+_vm._s(_vm.component.name))]),_vm._v(" "),_c('div',{staticClass:"price"},[_c('indicator',{attrs:{"diff":_vm.current - _vm.previous}}),_vm._v(" "),_c('span',{staticClass:"num"},[_vm._v(_vm._s(_vm.current)+"p")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('span',{staticClass:"diff"},[_vm._v("\n          "+_vm._s(_vm.previous)+"p ("),_c('price-diff',{attrs:{"current":_vm.previous,"previous":_vm.current,"type":"buying","unit":"p","base":"previously"}}),_vm._v(")\n        ")],1)],1)])]):_vm._e(),_vm._v(" "),(_vm.active)?_c('div',{staticClass:"users"},[_c('user-prices',{attrs:{"data":_vm.detailed.data}})],1):_vm._e(),_vm._v(" "),(_vm.active)?_c('div',{staticClass:"selection"},[(_vm.selected.user && _vm.selected.component === _vm.detailed.component && _vm.selected.item === _vm.detailed.item)?_c('div',{staticClass:"active"},[_c('time',{attrs:{"datetime":_vm.selected.createdAt}},[_vm._v("\n        "+_vm._s(Math.floor((new Date() - new Date(_vm.selected.createdAt)) / (1000 * 60 * 60)))+" hours ago\n      ")]),_vm._v(" "),_c('div',{staticClass:"img-wrapper"},[_c('img',{attrs:{"alt":_vm.selected.user,"src":"/img/ui/placeholder.png"}})]),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.selected.user))]),_vm._v(" "),_c('p',[_vm._v("\n        "+_vm._s(_vm.selected.offer)+" "+_vm._s(_vm.item.name)+" "+_vm._s(_vm.component.name)+" for\n      ")]),_vm._v(" "),_c('span',{staticClass:"num"},[_vm._v("\n        "+_vm._s(_vm.selected.price)+"p\n      ")]),_vm._v(" "),_c('price-diff',{attrs:{"current":_vm.current,"previous":_vm.selected.price,"type":_vm.selected.offer.toLowerCase(),"unit":"p","base":"median"}})],1):_c('div',{staticClass:"inactive"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"info"},[_vm._v("\n        Click on a data point to show more details\n      ")])])]):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"circle"},[_c('div',{staticClass:"inner"})])}]


// CONCATENATED MODULE: ./ui/components/warframe/price-detailed.vue?vue&type=template&id=6f400713&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/charts/sparkline.vue?vue&type=template&id=e1bfcd76&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sparkline"},[_c('div',{staticClass:"graph"},[_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},[_c('g',[_c('path',{staticClass:"line",attrs:{"d":_vm.paths.line}})])])]),_vm._v(" "),(_vm.interactive !== false)?_c('div',{staticClass:"tooltip-container"},[_c('svg',{attrs:{"width":_vm.width + 200,"height":_vm.height}},_vm._l((_vm.animatedData),function(d,i){return _c('g',{key:d.x,staticClass:"point"},[_c('rect',{staticClass:"hover",attrs:{"x":_vm.scaled.x(d.x)}}),_vm._v(" "),_c('circle',{attrs:{"cx":_vm.scaled.x(d.x),"cy":_vm.scaled.y(d.y),"r":"4"}}),_vm._v(" "),_c('g',{staticClass:"tooltip"},[_c('rect',{attrs:{"x":_vm.scaled.x(d.x) + 12,"height":_vm.orders && _vm.data[i] ? '87px' : '65px',"width":"120px"}}),_vm._v(" "),_c('text',{staticClass:"title",attrs:{"x":_vm.scaled.x(d.x) + 20,"y":"22px"}},[_vm._v("\n            "+_vm._s(_vm.data.length - i - 1 === 0 ? 'Today' : ((_vm.data.length - i - 1) + " days ago"))+"\n          ")]),_vm._v(" "),_c('text',{staticClass:"num",attrs:{"x":_vm.scaled.x(d.x) + 20,"y":"50px"}},[_vm._v("\n            "+_vm._s(_vm.data[i] ? ((_vm.data[i]) + "p") : '')+"\n          ")]),_vm._v(" "),(_vm.diff(i) && _vm.data[i] && _vm.compare[i])?_c('g',{attrs:{"transform":("translate(" + (_vm.scaled.x(d.x)) + ", 50)")}},[_c('indicator',{attrs:{"x":73,"diff":_vm.diff(i),"y":"-9"}}),_vm._v(" "),_c('text',{staticClass:"price",class:{ negative: _vm.diff(i) < 0 },attrs:{"x":85,"y":"0px"}},[_vm._v("\n              "+_vm._s(Math.abs(_vm.diff(i)))+"p\n            ")])],1):_vm._e(),_vm._v(" "),(_vm.orders)?_c('text',{staticClass:"sub",attrs:{"x":_vm.scaled.x(d.x) + 20,"y":_vm.data[i] ? '75px' : '48px'}},[_vm._v("\n            "+_vm._s(_vm.orders[i])+" Orders\n          ")]):_vm._e()])])}),0)]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/charts/sparkline.vue?vue&type=template&id=e1bfcd76&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/charts/userprices.vue?vue&type=template&id=cf8ec250&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"userprices"},[_c('div',{staticClass:"axis"},[_c('div',{staticClass:"x"},[_c('div',{staticClass:"axis"}),_vm._v(" "),_c('div',{staticClass:"labels"},_vm._l((_vm.axis.x),function(label){return _c('span',{key:label},[_vm._v("\n          "+_vm._s(typeof label === 'number' ? (label + ":00") : 'now')+"\n        ")])}),0)]),_vm._v(" "),_c('div',{staticClass:"y"},[_c('div',{staticClass:"axis"}),_vm._v(" "),_c('div',{staticClass:"labels"},_vm._l((_vm.axis.y),function(label){return _c('span',{key:label},[_vm._v("\n          "+_vm._s(label)+"p\n        ")])}),0)])]),_vm._v(" "),_c('div',{staticClass:"graphs"},[_c('sparkline',{attrs:{"data":_vm.sparklineData,"interactive":false,"curve":"curveBasis"}}),_vm._v(" "),_c('div',{staticClass:"points",style:({ width: _vm.width, height: _vm.height })},_vm._l((_vm.userData),function(order,i){return _c('div',{key:i,staticClass:"point-wrapper",class:{ active: _vm.selected.user === order.user },style:({ left: _vm.scaled.x(Date.parse(order.createdAt)), top: _vm.scaled.y(order.price) })},[_c('div',{staticClass:"point"}),_vm._v(" "),_c('div',{staticClass:"info",on:{"click":function($event){return _vm.select(order)}}},[_c('div',{staticClass:"img-wrapper interactive"},[_c('img',{attrs:{"alt":order.user,"src":"/img/ui/placeholder.png"}})]),_vm._v(" "),_c('div',{staticClass:"data"},[_c('span',[_vm._v(_vm._s(order.user))]),_vm._v(" "),_c('span',{staticClass:"price"},[_vm._v(_vm._s(order.price)+"p")])])])])}),0)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/charts/userprices.vue?vue&type=template&id=cf8ec250&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 169:
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

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = __webpack_require__(35);

var _theme2 = _interopRequireDefault(_theme);

var _progress = __webpack_require__(80);

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    progressbar: _progress2.default
  },

  computed: {
    theme: function theme() {
      return (0, _theme2.default)(this);
    }
  }
};

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"module":"warframe_module_kCFyr","header":"warframe_header_2nKQS","footer":"warframe_footer_1kr-S"};

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"module":"wow-classic_module_2l8-b","header":"wow-classic_header_g9KLN","footer":"wow-classic_footer_19f0t"};

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(167);

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

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_vue_vue_type_template_id_820c27de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(200);
/* harmony import */ var _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(171);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(197);
/* harmony import */ var _module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(198);
/* harmony import */ var _module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(199);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);










function injectStyles (context) {
  
  this["warframe"] = (_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"])
this["wow-classic"] = (_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"].locals || _module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"])

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(
  _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _module_vue_vue_type_template_id_820c27de_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _module_vue_vue_type_template_id_820c27de_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "820c27de",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(181);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 181:
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

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"indicator":"warframe_indicator_1spmD"};

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"indicator":"wow-classic_indicator_GhxVb"};

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nitroAds_vue_vue_type_template_id_b107c58a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(193);
/* harmony import */ var _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(168);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(192);
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

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 193:
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

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(173);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/module.vue?vue&type=template&id=820c27de&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"module",class:_vm.theme.module},[_c('div',{staticClass:"header",class:_vm.theme.header},[_vm._t("header")],2),_vm._v(" "),_c('div',{staticClass:"body"},[_vm._t("body")],2),_vm._v(" "),_c('div',{staticClass:"footer",class:_vm.theme.footer},[_vm._t("footer")],2),_vm._v(" "),_c('progressbar',{ref:"progress"})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/module.vue?vue&type=template&id=820c27de&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indicator_vue_vue_type_template_id_7c937518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(349);
/* harmony import */ var _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(180);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(340);
/* harmony import */ var _indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(341);
/* harmony import */ var _indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(342);
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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(204);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _items = __webpack_require__(363);

var _items2 = _interopRequireDefault(_items);

var _tooltip = __webpack_require__(359);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = function title(str) {
  return str.toLowerCase().replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  });
};

exports.default = {
  components: {
    tooltip: _tooltip2.default
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
    },
    filteredComponents: function filteredComponents() {
      return this.item.components.filter(function (c) {
        return c.tradable || c.name === 'Set';
      });
    }
  },

  methods: {
    selectComponent: function selectComponent(e) {
      var tag = e.srcElement.outerText;
      this.$store.commit('setItemComponent', tag);
    }
  },

  storeModule: _items2.default
};

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(208);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = __webpack_require__(35);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['days', 'fn'],

  data: function data() {
    return {
      active: false
    };
  },


  computed: {
    theme: function theme() {
      return (0, _theme2.default)(this);
    }
  },

  methods: {
    toggle: function toggle() {
      this.active = !this.active;
    }
  }
};

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"dropdown":"warframe_dropdown_h8zz3","body":"warframe_body_2goxA"};

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"dropdown":"wow-classic_dropdown_i5aP_","body":"wow-classic_body_1naDm"};

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(182);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(183);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/charts/indicator.vue?vue&type=template&id=7c937518&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"indicator",class:[{ negative: _vm.diff < 0, positive: _vm.diff > 0, reverse: _vm.reverse }, _vm.theme.indicator],attrs:{"height":"10px","width":"7px","overflow":"visible"}},[_c('path',{attrs:{"transform":("translate(" + (_vm.x || 0) + ", " + (_vm.y || 0) + ")"),"d":_vm.diff < 0 ? _vm.negative : _vm.positive}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/charts/indicator.vue?vue&type=template&id=7c937518&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_time_vue_vue_type_template_id_ee2ae558_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(392);
/* harmony import */ var _module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(207);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(368);
/* harmony import */ var _module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(369);
/* harmony import */ var _module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(370);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);










function injectStyles (context) {
  
  this["warframe"] = (_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"])
this["wow-classic"] = (_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"].locals || _module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"])

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(
  _module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _module_time_vue_vue_type_template_id_ee2ae558_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _module_time_vue_vue_type_template_id_ee2ae558_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "ee2ae558",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/tooltip.vue?vue&type=template&id=2733e75f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tooltip"},[_c('div',{staticClass:"tooltip-pointer"}),_vm._v(" "),_c('span',[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/tooltip.vue?vue&type=template&id=2733e75f&scoped=true&

// EXTERNAL MODULE: ./ui/components/ui/tooltip.vue?vue&type=style&index=0&id=2733e75f&lang=scss&scoped=true&
var tooltipvue_type_style_index_0_id_2733e75f_lang_scss_scoped_true_ = __webpack_require__(364);

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
  "2733e75f",
  null
  
)

/* harmony default export */ var tooltip = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(409);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(410);

var _createClass3 = _interopRequireDefault(_createClass2);

var _tween = __webpack_require__(411);

var _tween2 = _interopRequireDefault(_tween);

var _normalize = __webpack_require__(374);

var _normalize2 = _interopRequireDefault(_normalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tween = function () {
  function Tween() {
    (0, _classCallCheck3.default)(this, Tween);
  }

  (0, _createClass3.default)(Tween, [{
    key: 'tweenData',
    value: function tweenData(newData, oldData, onUpdate) {
      var tween = new _tween2.default.Tween(oldData).easing(_tween2.default.Easing.Quadratic.Out).to(newData, 500).onUpdate(onUpdate).onComplete(function () {
        tween.done = true;
      }).start();

      function animate(time) {
        tween.update(time);

        if (!tween.done) {
          requestAnimationFrame(animate);
        }
      }
      animate(window.performance.now());
    }
  }, {
    key: 'adjustData',
    value: function adjustData(vm, newData, oldData, doNormalize) {
      var nData = doNormalize ? (0, _normalize2.default)(newData, true) : newData;
      var oData = doNormalize ? (0, _normalize2.default)(oldData, true) : oldData;

      this.tweenData(nData, oData, function () {
        vm.animatedData = (0, _normalize2.default)(this, null, !doNormalize);
        vm.update();
      });
    }
  }]);
  return Tween;
}();

var tween = new Tween();
exports.default = tween;

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_vue_vue_type_template_id_24f6182a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(391);
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(203);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _header_vue_vue_type_style_index_0_id_24f6182a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(365);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_24f6182a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _header_vue_vue_type_template_id_24f6182a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "24f6182a",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 363:
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

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_id_2733e75f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(205);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_id_2733e75f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_id_2733e75f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_id_2733e75f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_24f6182a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(206);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_24f6182a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_24f6182a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_24f6182a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(209);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(210);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(211);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_diff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(372);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_diff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_diff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_diff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_diff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_diff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indicator = __webpack_require__(201);

var _indicator2 = _interopRequireDefault(_indicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    indicator: _indicator2.default
  },

  props: ['type', 'current', 'previous', 'unit', 'base'],

  computed: {
    diff: function diff() {
      if (this.current && this.previous) {
        return this.previous - this.current;
      } else {
        return null;
      }
    }
  }
};

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function normalize(arr, raw, skip) {
  var result = [];
  var min = Number.POSITIVE_INFINITY;
  var max = Number.NEGATIVE_INFINITY;

  arr.forEach(function (y, x) {
    if (raw) {
      var val = y;

      if (y === null && !skip) {
        var n = findNearestNeighbours(arr, x);
        val = (n[0] + n[1]) / 2;
      }
      result.push(val);
    } else {
        var _val = {
          x: x,
          y: y,
          yRaw: y,
          isMin: false,
          isMax: false
        };
        min = y < min ? y : min;
        max = y > max ? y : max;

        if (_val.y === null && !skip) {
          var _n = findNearestNeighbours(arr, x);
          _val.y = (_n[0] + _n[1]) / 2;
        }
        result.push(_val);
      }
  });

  if (!raw) {
    var i = result.findIndex(function (d) {
      return d.yRaw === min;
    });
    var j = result.findIndex(function (d) {
      return d.yRaw === max;
    });
    if (result[i]) {
      result[i].isMin = true;
      result[i].alignLeft = i / result.length > 0.66;
    }
    if (result[j]) {
      result[j].isMax = true;
      result[j].alignLeft = j / result.length > 0.66;
    }

    result.forEach(function (d) {
      delete d.yRaw;
    });
  }

  return result;
}

function findNearestNeighbours(arr, index) {
  var result = [null, null];
  var i = index;
  var j = index;

  for (null; i >= 0; i--) {
    if (arr[i]) {
      result[0] = arr[i];
      break;
    }
  }

  for (null; j < arr.length; j++) {
    if (arr[j]) {
      result[1] = arr[j];
      break;
    }
  }

  if (!result[0]) {
    result[0] = result[1];
  }
  if (!result[1]) {
    result[1] = result[0];
  }
  return result;
}

exports.default = normalize;

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/warframe/header.vue?vue&type=template&id=24f6182a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_c('div',{staticClass:"container"},[_c('div',{staticClass:"item-profile-img"},[_c('img',{attrs:{"src":_vm.item.imgUrl,"alt":_vm.item.name,"draggable":"false","onerror":"this.style.display='none'"}}),_vm._v(" "),_c('img',{staticClass:"item-profile-img-blur",attrs:{"src":_vm.item.imgUrl,"alt":_vm.item.name,"draggable":"false","onerror":"this.style.display='none'"}})])]),_vm._v(" "),_c('div',{staticClass:"item-img-shade"}),_vm._v(" "),_c('div',{staticClass:"item-img-shade-2"}),_vm._v(" "),_c('div',{staticClass:"background"}),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"item-profile"},[_c('div',{staticClass:"item-profile-data-info"},[_c('h1',[_vm._v(_vm._s(_vm.item.name))]),_vm._v(" "),(_vm.item.vaulted)?_c('div',{staticClass:"vaulted"},[_c('img',{staticClass:"ico-h-24 interactive",attrs:{"src":"/img/warframe/ui/vaulted.svg","alt":"Vaulted"}}),_vm._v(" "),_c('tooltip',[_vm._v("Vaulted")])],1):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.item.components.length > 1)?_c('div',_vm._l((_vm.filteredComponents),function(comp){return _c('span',{key:comp.name,staticClass:"interactive",class:{ selected: _vm.selectedComponent === comp.name },on:{"click":_vm.selectComponent}},[_vm._v("\n            "+_vm._s(_vm.component.name)+"\n          ")])}),0):_vm._l((_vm.item.tags),function(tag,i){return _c('span',{key:tag + i,staticClass:"selected interactive"},[_vm._v("\n          "+_vm._s(tag)+"\n        ")])})],2)])]),_vm._v(" "),_c('nav',{ref:"subnav",staticClass:"subnav"},[_c('div',{staticClass:"container"},[_c('router-link',{staticClass:"interactive",attrs:{"to":_vm.itemUrl,"exact":""}},[_vm._v("\n        Overview\n      ")]),_vm._v(" "),(_vm.item.tradable)?_c('router-link',{staticClass:"interactive",attrs:{"to":(_vm.itemUrl + "/prices")}},[_vm._v("\n        Prices\n      ")]):_vm._e(),_vm._v(" "),(_vm.item.tradable)?_c('router-link',{staticClass:"interactive",attrs:{"to":(_vm.itemUrl + "/trading")}},[_vm._v("\n        Trade\n        "),_c('span',{staticClass:"btn-counter"},[_vm._v(_vm._s(_vm.item.activeOrders))])]):_vm._e(),_vm._v(" "),(_vm.item.patchlogs && _vm.item.patchlogs.length)?_c('router-link',{staticClass:"interactive",attrs:{"to":(_vm.itemUrl + "/patchlogs")}},[_vm._v("\n        Patchlogs\n      ")]):_vm._e()],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/warframe/header.vue?vue&type=template&id=24f6182a&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/module-time.vue?vue&type=template&id=ee2ae558&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"module-time"},[_c('div',{staticClass:"interactive",on:{"click":_vm.toggle}},[_c('span',[_vm._v("Last "+_vm._s(_vm.days)+" days")]),_vm._v(" "),_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/dropdown.svg","alt":"Dropdown"}})]),_vm._v(" "),_c('div',{staticClass:"dropdown",class:[{ active: _vm.active }, _vm.theme.dropdown]},[_c('div',{staticClass:"body",class:_vm.theme.body},[_c('span',{class:{ active: _vm.days === 7 },on:{"click":function($event){_vm.fn(7); _vm.toggle()}}},[_vm._v("Last 7 days")]),_vm._v(" "),_c('span',{class:{ active: _vm.days === 30 },on:{"click":function($event){_vm.fn(30); _vm.toggle()}}},[_vm._v("Last 30 days")]),_vm._v(" "),_c('span',{class:{ active: _vm.days === 90 },on:{"click":function($event){_vm.fn(90); _vm.toggle()}}},[_vm._v("Last 90 days")])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/module-time.vue?vue&type=template&id=ee2ae558&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _price_diff_vue_vue_type_template_id_42f8abc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(644);
/* harmony import */ var _price_diff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(371);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _price_diff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _price_diff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _price_diff_vue_vue_type_style_index_0_id_42f8abc5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(429);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _price_diff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _price_diff_vue_vue_type_template_id_42f8abc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _price_diff_vue_vue_type_template_id_42f8abc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "42f8abc5",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_prices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(414);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_prices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_prices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_prices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_prices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_prices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(647);

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nitroAds = __webpack_require__(191);

var _nitroAds2 = _interopRequireDefault(_nitroAds);

var _appContent = __webpack_require__(178);

var _appContent2 = _interopRequireDefault(_appContent);

var _priceFilters = __webpack_require__(654);

var _priceFilters2 = _interopRequireDefault(_priceFilters);

var _header = __webpack_require__(362);

var _header2 = _interopRequireDefault(_header);

var _meta = __webpack_require__(176);

var _meta2 = _interopRequireDefault(_meta);

var _warframe = __webpack_require__(351);

var _warframe2 = _interopRequireDefault(_warframe);

var _price = __webpack_require__(657);

var _price2 = _interopRequireDefault(_price);

var _priceDetailed = __webpack_require__(667);

var _priceDetailed2 = _interopRequireDefault(_priceDetailed);

var _prices = __webpack_require__(671);

var _prices2 = _interopRequireDefault(_prices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = function title(str) {
  return str.toLowerCase().replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  });
};

exports.default = {
  components: {
    ad: _nitroAds2.default,
    navigation: _warframe2.default,
    appContent: _appContent2.default,
    itemHeader: _header2.default,
    filters: _priceFilters2.default,
    price: _price2.default,
    priceDetailed: _priceDetailed2.default
  },

  asyncData: function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
      var route = _ref.route;
      var item;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              item = encodeURIComponent(title(route.params.item.replace(/(?:(\-)(?!\1))+/g, ' ').replace(/- /g, '-')));

              this.$store.commit('setPricesItem', item);
              _context.t0 = this.$store;
              _context.next = 5;
              return this.$cubic.get('/warframe/v1/items/' + item + '/prices');

            case 5:
              _context.t1 = _context.sent;

              _context.t0.commit.call(_context.t0, 'setPrices', _context.t1);

            case 7:
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
      height: 0
    };
  },


  computed: {
    item: function item() {
      return this.$store.state.items.item;
    },
    components: function components() {
      var base = this.item.components;
      var prices = this.$store.state.prices.components;
      var components = [];

      for (var i = 0; i < base.length; i++) {
        components.push((0, _extends3.default)({}, base[i], prices[i]));
      }
      return components;
    },
    detailed: function detailed() {
      return this.$store.state.prices.detailed;
    },
    selected: function selected() {
      return this.$store.state.prices.selected;
    },
    tradableComponents: function tradableComponents() {
      return this.components.filter(function (c) {
        return c.tradable;
      });
    }
  },

  watch: {
    detailed: function detailed() {
      var _this = this;

      setTimeout(function () {
        return _this.onResize();
      }, 1);
    },
    selected: function selected() {
      this.onResize();
    }
  },

  mounted: function mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  created: function created() {
    if (!this.item.tradable) {
      this.$router.replace(this.$route.fullPath.replace('/prices', '/'));
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },


  methods: {
    setTimerange: function setTimerange(days) {
      this.$store.commit('setActivityTimerange', days);
    },
    onResize: function onResize() {
      if (this.detailed.data.length && this.detailed.item === this.item.name) {
        this.height = this.$refs.detailed.$el.offsetHeight;
      } else {
        this.height = this.$refs.prices.offsetHeight;
      }
    }
  },

  storeModule: _prices2.default,

  head: function head() {
    var item = this.item;
    var components = '';

    item.components.forEach(function (component, i) {
      var price = (component.prices.buying.current.median + component.prices.selling.current.median) / 2;

      if (component.tradable && price) {
        components += component.name + ': ' + price + 'p';
      } else {
        components += component.name + ': No data';
      }

      if (i !== item.components.length) components += ', ';
    });

    return {
      title: item.name + ' Prices \xB7 NexusHub',
      meta: (0, _meta2.default)({
        title: this.item.name + ' Prices on NexusHub',
        description: this.item.name + ' Prices from the Trade Chat and Warframe Market. ' + components + '.',
        image: 'https://nexushub.co' + this.item.imgUrl
      })
    };
  }
};

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_filters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(421);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_filters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_filters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_filters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_filters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_filters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(167);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _indicator = __webpack_require__(201);

var _indicator2 = _interopRequireDefault(_indicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOrders(type, store) {
  var current = 0;
  var previous = 0;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(store.state.prices.components), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var component = _step.value;

      current += component.prices[type].current.orders;
      previous += component.prices[type].previous.orders;
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

  var diff = ((current - previous) / previous * 100).toFixed(2);

  return {
    count: current > 999 ? (current / 1000).toFixed(1) + 'K' : current,
    diff: diff
  };
}

function fetchPrices(data, attr, store) {
  if (data.filter(function (d) {
    return !d.inactive;
  }).length === 1) {
    var value = data.find(function (d) {
      return !d.inactive;
    }).name;

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = (0, _getIterator3.default)(store.state.prices.components), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var component = _step2.value;

        var attributes = {};
        attributes[attr] = value;
        store.commit('setPricesAttributes', {
          component: component.name,
          attributes: attributes
        });
        store.dispatch('fetchPricesComponent', component.name);
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
  } else {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = (0, _getIterator3.default)(store.state.prices.components), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _component = _step3.value;

          var _attributes = {};
          _attributes[attr] = false;
          store.commit('setPricesAttributes', {
            component: _component.name,
            attributes: _attributes
          });
          store.dispatch('fetchPricesComponent', _component.name);
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
    }

  var detailed = store.state.prices.detailed;
  if (detailed.data.length) {
    store.dispatch('fetchPricesDetailed', {
      item: detailed.item,
      component: detailed.component
    });
  }
}

exports.default = {
  components: {
    indicator: _indicator2.default
  },

  data: function data() {
    return {
      types: [{
        name: 'Selling'
      }, {
        name: 'Buying'
      }],

      platform: [{
        name: 'PC'
      }, {
        name: 'PS4'
      }, {
        name: 'XB1'
      }],

      source: [{
        name: 'Trade Chat'
      }, {
        name: 'Warframe Market'
      }]
    };
  },


  computed: {
    supply: function supply() {
      return getOrders('selling', this.$store);
    },
    demand: function demand() {
      return getOrders('buying', this.$store);
    }
  },

  watch: {
    types: function types(oldData, newData) {
      var selling = newData.find(function (d) {
        return d.name === 'Selling';
      });
      var buying = newData.find(function (d) {
        return d.name === 'Buying';
      });

      if (selling.inactive && buying.inactive || !selling.inactive && !buying.inactive) {
        return this.$store.commit('setItemOfferType', 'combined');
      }
      if (selling.inactive) {
        this.$store.commit('setItemOfferType', 'buying');
      }
      if (buying.inactive) {
        this.$store.commit('setItemOfferType', 'selling');
      }
    },
    source: function source(oldData, newData) {
      fetchPrices(newData, 'source', this.$store);
    },
    platform: function platform(oldData, newData) {
      fetchPrices(newData, 'platform', this.$store);
    }
  },

  methods: {
    select: function select(data, d) {
      var target = [].concat(this[data]);
      var i = target.findIndex(function (e) {
        return e.name === d.name;
      });
      var allActive = true;
      var allInactive = true;

      this[data].forEach(function (el) {
        if (el.inactive && !el.disabled) {
          allActive = false;
        }
        if ((!el.inactive || el.disabled) && el.name !== target[i].name) {
          allInactive = false;
        }
      });

      if (data === 'platform') {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = (0, _getIterator3.default)(target), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var filter = _step4.value;

            filter.inactive = true;
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        allActive = false;
      }

      if (allActive) {
        for (var j = 0; j < target.length; j++) {
          target[j].inactive = i === j;
        }
      } else if (allInactive) {
          for (var _j = 0; _j < target.length; _j++) {
            target[_j].inactive = false;
          }
        } else {
            target[i].inactive = !target[i].inactive;
          }

      this[data] = target;
    }
  }
};

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(427);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = __webpack_require__(428);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _indicator = __webpack_require__(201);

var _indicator2 = _interopRequireDefault(_indicator);

var _module2 = __webpack_require__(177);

var _module3 = _interopRequireDefault(_module2);

var _moduleTime = __webpack_require__(358);

var _moduleTime2 = _interopRequireDefault(_moduleTime);

var _priceDiff = __webpack_require__(395);

var _priceDiff2 = _interopRequireDefault(_priceDiff);

var _sparkline = __webpack_require__(648);

var _sparkline2 = _interopRequireDefault(_sparkline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    module: _module3.default,
    moduleTime: _moduleTime2.default,
    priceDiff: _priceDiff2.default,
    sparkline: _sparkline2.default,
    indicator: _indicator2.default
  },

  props: ['component'],

  computed: {
    item: function item() {
      return this.$store.state.items.item;
    },
    priceComponent: function priceComponent() {
      var _this = this;

      var components = this.$store.state.prices.components;
      return components.find(function (c) {
        return c.name === _this.component.name;
      });
    },
    current: function current() {
      var prices = this.priceComponent.prices;

      if (this.offerType === 'combined') {
        var s = prices.selling.current.median;
        var b = prices.buying.current.median;
        return Math.round((s + b) / (s && b ? 2 : 1));
      }
      return prices[this.offerType].current.median;
    },
    previous: function previous() {
      var prices = this.priceComponent.prices;

      if (this.offerType === 'combined') {
        var s = prices.selling.previous.median;
        var b = prices.buying.previous.median;
        return Math.round((s + b) / (s && b ? 2 : 1));
      }
      return prices[this.offerType].previous.median;
    },
    offerType: function offerType() {
      return this.$store.state.items.selected.offerType;
    },
    orderDiff: function orderDiff() {
      var prices = this.priceComponent.prices;
      return {
        buying: prices.buying.current.orders - prices.buying.previous.orders,
        selling: prices.selling.current.orders - prices.selling.previous.orders
      };
    },
    data: function data() {
      if (this.offerType === 'combined') {
        var buying = this.priceComponent.prices.buying;
        var selling = this.priceComponent.prices.selling;
        var merge = function merge(b, i, period) {
          var s = selling[period].days[i];
          return Math.round((b.median + s.median) / (b.median && s.median ? 2 : 1));
        };
        return {
          current: buying.current.days ? buying.current.days.map(function (b, i) {
            return merge(b, i, 'current');
          }) : [],
          previous: buying.previous.days ? buying.previous.days.map(function (b, i) {
            return merge(b, i, 'previous');
          }) : []
        };
      } else {
        return {
          current: this.component.prices[this.offerType].current.days.map(function (d) {
            return Math.round(d.median);
          }),
          previous: this.component.prices[this.offerType].previous.days.map(function (d) {
            return Math.round(d.median);
          })
        };
      }
    },
    ceil: function ceil() {
      return Math.max.apply(Math, (0, _toConsumableArray3.default)(this.data.current));
    },
    timerange: function timerange() {
      return this.priceComponent.timerange;
    }
  },

  watch: {
    timerange: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(to, from) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.$refs.price.$refs.progress.start();
                _context.next = 3;
                return this.$store.dispatch('fetchPricesComponent', this.component.name);

              case 3:
                this.$refs.price.$refs.progress.finish();

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function timerange(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return timerange;
    }()
  },

  methods: {
    setTimerange: function setTimerange(timerange) {
      this.$store.commit('setPricesAttributes', {
        component: this.component.name,
        attributes: {
          timerange: timerange
        }
      });
    },
    fetchDetailed: function fetchDetailed() {
      this.$store.dispatch('fetchPricesDetailed', {
        item: this.item.name,
        component: this.component.name
      });
    }
  }
};

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_diff_vue_vue_type_style_index_0_id_42f8abc5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(373);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_diff_vue_vue_type_style_index_0_id_42f8abc5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_diff_vue_vue_type_style_index_0_id_42f8abc5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_diff_vue_vue_type_style_index_0_id_42f8abc5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(431);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(167);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _d = __webpack_require__(404);

var d3 = _interopRequireWildcard(_d);

var _tween = __webpack_require__(361);

var _tween2 = _interopRequireDefault(_tween);

var _indicator = __webpack_require__(201);

var _indicator2 = _interopRequireDefault(_indicator);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    indicator: _indicator2.default
  },

  props: ['data', 'ceil', 'compare', 'component', 'interactive', 'curve'],

  data: function data() {
    return {
      width: 0,
      height: 0,
      min: 0,
      max: 0,
      paths: {
        line: '',
        pointer: []
      },
      lastHoverPoint: {},
      scaled: {
        x: null,
        y: null
      },
      animatedData: [],
      points: []
    };
  },


  computed: {
    offerType: function offerType() {
      return this.$store.state.items.selected.offerType;
    },
    orders: function orders() {
      var _this = this;

      if (!this.component) return;
      var component = this.$store.state.prices.components.find(function (c) {
        return c.name === _this.component;
      });

      if (this.offerType === 'combined') {
        var buying = component.prices.buying;
        var selling = component.prices.selling;
        var merge = function merge(b, i, period) {
          var s = selling[period].days[i];
          return b.orders + s.orders;
        };
        return buying.current.days ? buying.current.days.map(function (b, i) {
          return merge(b, i, 'current');
        }) : [];
      } else {
        return component.prices[this.offerType.toLowerCase()].current.days.map(function (d) {
          return d.orders;
        });
      }
    }
  },

  watch: {
    data: function data(newData, oldData) {
      _tween2.default.adjustData(this, newData, oldData);
      if (newData.length !== oldData.length) {
        this.onResize();
      }
    }
  },

  mounted: function mounted() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },


  methods: {
    initialize: function initialize(newData) {
      this.scaled.x = d3.scaleLinear().range([0, this.width]);
      this.scaled.y = d3.scaleLinear().range([this.height - 40, 40]);
    },
    onResize: function onResize() {
      this.width = this.$el.offsetWidth;
      this.height = this.$el.offsetHeight;
      this.initialize();
      _tween2.default.adjustData(this, this.data, this.data, true);
    },
    createLine: function createLine(points) {
      return d3.line().x(function (d) {
        return d.x;
      }).y(function (d) {
        return d.y;
      }).curve(d3[this.curve || 'curveMonotoneX'])(points);
    },
    update: function update() {
      var yPane = d3.extent(this.data, function (y, x) {
        return y;
      });
      this.scaled.x.domain(d3.extent(this.data, function (y, x) {
        return x;
      }));
      this.scaled.y.domain(this.ceil ? [yPane[0], this.ceil] : yPane);
      this.points = [];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this.animatedData), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var data = _step.value;

          var x = this.scaled.x(data.x);
          var y = this.scaled.y(data.y);
          this.points.push({ x: x, y: y });
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

      this.paths.line = this.createLine(this.points);
    },
    diff: function diff(i) {
      if (!this.compare) return;
      return this.data[i] - this.compare[i];
    }
  }
};

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_detailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(435);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_detailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_detailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_detailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_detailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_detailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indicator = __webpack_require__(201);

var _indicator2 = _interopRequireDefault(_indicator);

var _priceDiff = __webpack_require__(395);

var _priceDiff2 = _interopRequireDefault(_priceDiff);

var _userprices = __webpack_require__(668);

var _userprices2 = _interopRequireDefault(_userprices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    priceDiff: _priceDiff2.default,
    indicator: _indicator2.default,
    userPrices: _userprices2.default
  },

  data: function data() {
    return {
      data: []
    };
  },


  computed: {
    active: function active() {
      return this.detailed.data.length && this.detailed.item === this.item.name;
    },
    item: function item() {
      return this.$store.state.items.item;
    },
    component: function component() {
      var _this = this;

      return this.$store.state.items.item.components.find(function (c) {
        return c.name === _this.detailed.component;
      });
    },
    detailed: function detailed() {
      return this.$store.state.prices.detailed;
    },
    priceComponent: function priceComponent() {
      var _this2 = this;

      return this.$store.state.prices.components.find(function (c) {
        return c.name === _this2.detailed.component;
      });
    },
    current: function current() {
      var prices = this.priceComponent.prices;

      if (this.offerType === 'combined') {
        return Math.round((prices.selling.current.median + prices.buying.current.median) / 2);
      }
      return prices[this.offerType].current.median;
    },
    previous: function previous() {
      var prices = this.priceComponent.prices;

      if (this.offerType === 'combined') {
        return Math.round((prices.selling.previous.median + prices.buying.previous.median) / 2);
      }
      return prices[this.offerType].previous.median;
    },
    offerType: function offerType() {
      return this.$store.state.items.selected.offerType;
    },
    selected: function selected() {
      return this.$store.state.prices.selected;
    }
  },

  methods: {
    back: function back() {
      this.$store.commit('setPricesDetailed', {
        data: []
      });
    }
  }
};

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_userprices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(437);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_userprices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_userprices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_userprices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_userprices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_userprices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d = __webpack_require__(404);

var d3 = _interopRequireWildcard(_d);

var _tween = __webpack_require__(361);

var _tween2 = _interopRequireDefault(_tween);

var _sparkline = __webpack_require__(648);

var _sparkline2 = _interopRequireDefault(_sparkline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function simplify(data) {
  if (data.length <= 20) return data;

  var merge = Math.floor(data.length / 20);
  var simplified = [];

  for (var i = 0; i < 20; i++) {
    var sum = 0;

    for (var j = 0; j < merge; j++) {
      sum += data[i + j];
    }
    simplified.push(sum / merge);
  }
  return simplified;
}

exports.default = {
  components: {
    sparkline: _sparkline2.default
  },

  props: ['data'],

  data: function data() {
    return {
      width: 0,
      height: 0,
      scaled: {
        x: function x() {},
        y: function y() {}
      }
    };
  },


  computed: {
    offerType: function offerType() {
      return this.$store.state.items.selected.offerType;
    },
    sparklineData: function sparklineData() {
      var _this = this;

      if (this.offerType === 'combined') {
        var data = this.data.map(function (o) {
          return o.price;
        });
        return simplify(data);
      } else {
        var _data = this.data.map(function (o) {
          return o.offer.toLowerCase() === _this.offerType.toLowerCase() ? o.price : null;
        });
        return simplify(_data);
      }
    },
    userData: function userData() {
      var _this2 = this;

      return this.data.filter(function (o) {
        return _this2.offerType === 'combined' ? true : o.offer.toLowerCase() === _this2.offerType.toLowerCase();
      });
    },
    selected: function selected() {
      return this.$store.state.prices.selected;
    },
    axis: function axis() {
      var yPane = d3.extent(this.data.map(function (o) {
        return o.price;
      }), function (y) {
        return y;
      });
      var y = [];
      y.push(yPane[1]);
      y.push(Math.round(yPane[0] + (yPane[1] - yPane[0]) / 2));
      y.push(yPane[0]);

      var now = new Date().getHours();
      var hour = function hour(h) {
        return now - h;
      };
      var hoursAgo = function hoursAgo(h) {
        return h < 0 ? 24 + h : h;
      };
      var start = hoursAgo(hour(22));
      var x = [start];
      x.push(hoursAgo(hour(15)));
      x.push(hoursAgo(hour(8)));
      x.push('now');

      return { x: x, y: y };
    }
  },

  watch: {
    data: function data(newData, oldData) {
      this.onResize();
    }
  },

  mounted: function mounted() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },


  methods: {
    initialize: function initialize(newData) {
      this.scaled.x = d3.scaleLinear().range([0, this.width]);
      this.scaled.y = d3.scaleLinear().range([this.height - 40, 40]);
    },
    onResize: function onResize() {
      this.width = this.$el.offsetWidth - 50;
      this.height = this.$el.offsetHeight;
      this.initialize();
      _tween2.default.adjustData(this, this.data, this.data);
    },
    createLine: function createLine() {
      return d3.line().x(function (d) {
        return d.x;
      }).y(function (d) {
        return d.y;
      }).curve(d3[this.curve || 'curveMonotoneX']);
    },
    update: function update() {
      var data = this.data.map(function (o) {
        return o.price;
      });
      var yPane = d3.extent(data, function (y, x) {
        return y;
      });
      this.scaled.x.domain([new Date() - 1000 * 60 * 60 * 24, new Date().getTime()]);
      this.scaled.y.domain(this.ceil ? [yPane[0], this.ceil] : yPane);
    },
    diff: function diff(i) {
      if (!this.compare) return;
      return this.data[i] - this.compare[i];
    },
    select: function select(order) {
      if (this.$store.state.prices.selected.user !== order.user) {
        this.$store.commit('setPricesDetailedOrder', order);
      } else {
        this.$store.commit('setPricesDetailedOrder', {});
      }
    }
  }
};

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/warframe/price-diff.vue?vue&type=template&id=42f8abc5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.previous)?_c('div',{staticClass:"price-diff"},[_c('div',{staticClass:"value",class:{ negative: _vm.type.toLowerCase() === 'selling' ? _vm.diff > 0 : _vm.diff < 0, positive: _vm.type.toLowerCase() === 'selling' ? _vm.diff < 0 : _vm.diff > 0 }},[_c('indicator',{attrs:{"diff":_vm.diff,"reverse":_vm.type.toLowerCase() === 'selling'}}),_vm._v("\n    "+_vm._s(Math.abs(_vm.diff))+_vm._s(_vm.unit)+"\n  ")],1),_vm._v(" "),(_vm.current)?_c('div',{staticClass:"tooltip"},[_vm._v("\n    "+_vm._s(_vm.base || 'median')+" "+_vm._s(_vm.current)+_vm._s(_vm.unit)+"\n  ")]):_vm._e()]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/warframe/price-diff.vue?vue&type=template&id=42f8abc5&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sparkline_vue_vue_type_template_id_e1bfcd76_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1024);
/* harmony import */ var _sparkline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(430);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sparkline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sparkline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _sparkline_vue_vue_type_style_index_0_id_e1bfcd76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(665);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _sparkline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sparkline_vue_vue_type_template_id_e1bfcd76_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _sparkline_vue_vue_type_template_id_e1bfcd76_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "e1bfcd76",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _price_filters_vue_vue_type_template_id_5ae28f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(996);
/* harmony import */ var _price_filters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(420);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _price_filters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _price_filters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _price_filters_vue_vue_type_style_index_0_id_5ae28f94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(655);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _price_filters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _price_filters_vue_vue_type_template_id_5ae28f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _price_filters_vue_vue_type_template_id_5ae28f94_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "5ae28f94",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_filters_vue_vue_type_style_index_0_id_5ae28f94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(422);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_filters_vue_vue_type_style_index_0_id_5ae28f94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_filters_vue_vue_type_style_index_0_id_5ae28f94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_filters_vue_vue_type_style_index_0_id_5ae28f94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _price_vue_vue_type_template_id_03c472ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1001);
/* harmony import */ var _price_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(426);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _price_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _price_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _price_vue_vue_type_style_index_0_id_03c472ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(666);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _price_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _price_vue_vue_type_template_id_03c472ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _price_vue_vue_type_template_id_03c472ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "03c472ff",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_vue_vue_type_style_index_0_id_e1bfcd76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(432);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_vue_vue_type_style_index_0_id_e1bfcd76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_vue_vue_type_style_index_0_id_e1bfcd76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_vue_vue_type_style_index_0_id_e1bfcd76_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_vue_vue_type_style_index_0_id_03c472ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(433);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_vue_vue_type_style_index_0_id_03c472ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_vue_vue_type_style_index_0_id_03c472ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_vue_vue_type_style_index_0_id_03c472ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _price_detailed_vue_vue_type_template_id_6f400713_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1007);
/* harmony import */ var _price_detailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(434);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _price_detailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _price_detailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _price_detailed_vue_vue_type_style_index_0_id_6f400713_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(670);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _price_detailed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _price_detailed_vue_vue_type_template_id_6f400713_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _price_detailed_vue_vue_type_template_id_6f400713_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "6f400713",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userprices_vue_vue_type_template_id_cf8ec250_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1030);
/* harmony import */ var _userprices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(436);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _userprices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _userprices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _userprices_vue_vue_type_style_index_0_id_cf8ec250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(669);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _userprices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _userprices_vue_vue_type_template_id_cf8ec250_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _userprices_vue_vue_type_template_id_cf8ec250_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "cf8ec250",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_userprices_vue_vue_type_style_index_0_id_cf8ec250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(438);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_userprices_vue_vue_type_style_index_0_id_cf8ec250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_userprices_vue_vue_type_style_index_0_id_cf8ec250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_userprices_vue_vue_type_style_index_0_id_cf8ec250_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_detailed_vue_vue_type_style_index_0_id_6f400713_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(439);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_detailed_vue_vue_type_style_index_0_id_6f400713_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_detailed_vue_vue_type_style_index_0_id_6f400713_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_price_detailed_vue_vue_type_style_index_0_id_6f400713_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = __webpack_require__(407);

var _assign2 = _interopRequireDefault(_assign);

var _getIterator2 = __webpack_require__(167);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'prices',
  state: {
    item: '',
    components: [],
    detailed: {
      item: '',
      component: '',
      data: []
    },
    selected: {}
  },

  mutations: {
    setPrices: function setPrices(state, prices) {
      var components = prices.components;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(components), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var component = _step.value;

          component.timerange = 30;
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

      state.components = components;
    },
    setPricesItem: function setPricesItem(state, item) {
      state.item = item;
    },
    setPricesAttributes: function setPricesAttributes(state, data) {
      var component = state.components.find(function (c) {
        return c.name === data.component;
      });
      (0, _assign2.default)(component, data.attributes);
    },
    setPricesDetailed: function setPricesDetailed(state, data) {
      state.detailed = data;
    },
    setPricesDetailedOrder: function setPricesDetailedOrder(state, order) {
      state.selected = order;
    }
  },

  actions: {
    fetchPricesComponent: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref, component) {
        var state = _ref.state,
            commit = _ref.commit;

        var params, stored, _arr, _i, param, decoded, prices;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = new URLSearchParams('component=' + component);
                stored = state.components.find(function (c) {
                  return c.name === component;
                });
                _arr = ['timerange', 'source', 'platform'];
                _i = 0;

              case 4:
                if (!(_i < _arr.length)) {
                  _context.next = 13;
                  break;
                }

                param = _arr[_i];

                if (!stored[param]) {
                  _context.next = 10;
                  break;
                }

                if (!(param === 'timerange' && stored[param] === 30)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt('continue', 10);

              case 9:
                params.append(param, stored[param]);

              case 10:
                _i++;
                _context.next = 4;
                break;

              case 13:
                decoded = params.toString().replace(/\+/g, ' ');
                _context.next = 16;
                return this.$cubic.get('/warframe/v1/items/' + state.item + '/prices?' + decoded);

              case 16:
                prices = _context.sent;

                commit('setPricesAttributes', {
                  component: stored.name,
                  attributes: { prices: prices.components[0].prices }
                });

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchPricesComponent(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return fetchPricesComponent;
    }(),
    fetchPricesDetailed: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_ref3, _ref4) {
        var state = _ref3.state,
            commit = _ref3.commit;
        var item = _ref4.item,
            component = _ref4.component;

        var params, stored, _arr2, _i2, param, decoded, data;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                params = new URLSearchParams('item=' + item + '&component=' + component);
                stored = state.components.find(function (c) {
                  return c.name === component;
                });
                _arr2 = ['timerange', 'source', 'platform'];
                _i2 = 0;

              case 4:
                if (!(_i2 < _arr2.length)) {
                  _context2.next = 13;
                  break;
                }

                param = _arr2[_i2];

                if (!stored[param]) {
                  _context2.next = 10;
                  break;
                }

                if (!(param === 'timerange' && stored[param] === 7)) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt('continue', 10);

              case 9:
                params.append(param, stored[param]);

              case 10:
                _i2++;
                _context2.next = 4;
                break;

              case 13:
                decoded = params.toString().replace(/\+/g, ' ');
                _context2.next = 16;
                return this.$cubic.get('/warframe/v1/orders/history?' + decoded);

              case 16:
                data = _context2.sent;

                commit('setPricesDetailed', { item: item, component: component, data: data });

              case 18:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchPricesDetailed(_x3, _x4) {
        return _ref5.apply(this, arguments);
      }

      return fetchPricesDetailed;
    }()
  }
};

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_prices_vue_vue_type_style_index_0_id_2fd99e74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(440);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_prices_vue_vue_type_style_index_0_id_2fd99e74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_prices_vue_vue_type_style_index_0_id_2fd99e74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_prices_vue_vue_type_style_index_0_id_2fd99e74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prices_vue_vue_type_template_id_2fd99e74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(979);
/* harmony import */ var _prices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(413);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _prices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _prices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _prices_vue_vue_type_style_index_0_id_2fd99e74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(672);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _prices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _prices_vue_vue_type_template_id_2fd99e74_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _prices_vue_vue_type_template_id_2fd99e74_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "2fd99e74",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/warframe/items/prices.vue?vue&type=template&id=2fd99e74&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation'),_vm._v(" "),_c('item-header'),_vm._v(" "),_c('app-content',[_c('section',[_c('div',{staticClass:"container"},[_c('h2',{staticClass:"sub"},[_vm._v("\n          "+_vm._s(_vm.item.name)+" Prices\n        ")]),_vm._v(" "),_c('filters'),_vm._v(" "),_c('div',{staticClass:"prices-wrapper",style:({ height: (_vm.height + "px") })},[_c('price-detailed',{ref:"detailed"}),_vm._v(" "),_c('div',{ref:"prices",staticClass:"prices row-margin"},_vm._l((_vm.tradableComponents),function(component){return _c('price',{key:component.name,staticClass:"col",attrs:{"component":component}})}),1)],1),_vm._v(" "),_c('ad',{attrs:{"name":"warframe-item-prices-main"}})],1)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/warframe/items/prices.vue?vue&type=template&id=2fd99e74&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 996:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/warframe/price-filters.vue?vue&type=template&id=5ae28f94&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"filters"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-b row"},[_c('div',{staticClass:"col inline-data interactive",class:{ inactive: _vm.types[0].inactive },on:{"click":function($event){return _vm.select('types', _vm.types[0])}}},[_c('label',[_vm._v("Selling")]),_vm._v(" "),_c('span',{staticClass:"data"},[_vm._v("\n          "+_vm._s(_vm.supply.count)+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"diff",class:{ 'inline-data-increase': _vm.supply.diff > 0 }},[_c('indicator',{attrs:{"diff":_vm.supply.diff}}),_vm._v("\n          "+_vm._s(_vm.supply.diff)+"%\n        ")],1)]),_vm._v(" "),_c('div',{staticClass:"col inline-data interactive",class:{ inactive: _vm.types[1].inactive },on:{"click":function($event){return _vm.select('types', _vm.types[1])}}},[_c('label',[_vm._v("Buying")]),_vm._v(" "),_c('span',{staticClass:"data"},[_vm._v("\n          "+_vm._s(_vm.demand.count)+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"diff",class:{ 'inline-data-increase': _vm.demand.diff > 0 }},[_c('indicator',{attrs:{"diff":_vm.demand.diff}}),_vm._v("\n          "+_vm._s(_vm.demand.diff)+"%\n        ")],1)]),_vm._v(" "),_c('div',{staticClass:"col"})]),_vm._v(" "),_c('div',{staticClass:"col-b disabled"},[_c('label',[_vm._v("Platform")]),_vm._v(" "),_vm._l((_vm.platform),function(d){return _c('div',{key:d.name,staticClass:"btn-subtle",class:{ active: !d.inactive, disabled: d.disabled },attrs:{"type":"button"},on:{"click":function($event){return _vm.select('platform', d)}}},[_c('span',[_vm._v(_vm._s(d.name))])])})],2),_vm._v(" "),_c('div',{staticClass:"col-b disabled"},[_c('label',[_vm._v("Data Source")]),_vm._v(" "),_vm._l((_vm.source),function(d){return _c('div',{key:d.name,staticClass:"btn-subtle",class:{ active: !d.inactive, disabled: d.disabled },attrs:{"type":"button"},on:{"click":function($event){return _vm.select('source', d)}}},[_c('span',[_vm._v(_vm._s(d.name))])])})],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/warframe/price-filters.vue?vue&type=template&id=5ae28f94&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);