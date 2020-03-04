(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 1000:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/stats.vue?vue&type=template&id=809ceea4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/wow-classic/ui/stats.svg","alt":"Statistics"}}),_vm._v(" "),_c('h3',[_vm._v("Item Stats")])]),_vm._v(" "),_c('template',{slot:"body"},[_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("Last Updated")])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('span',[_vm._v(_vm._s(_vm.lastUpdated))])])]),_vm._v(" "),(_vm.item.stats.current)?_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("Market Value")])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('span',{staticClass:"data-price"},[_vm._v("\n          "+_vm._s(_vm.parsePrice(_vm.stats.current.marketValue))+"\n        ")]),_vm._v(" "),(_vm.diff.marketValue !== 0)?_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.marketValue < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.marketValue}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.marketValue))+"%\n        ")],1):_vm._e()])]):_vm._e(),_vm._v(" "),(_vm.item.stats.current)?_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("Historical Value")])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('span',{staticClass:"data-price"},[_vm._v("\n          "+_vm._s(_vm.parsePrice(_vm.stats.current.historicalValue))+"\n        ")]),_vm._v(" "),(_vm.diff.historicalValue !== 0)?_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.historicalValue < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.historicalValue}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.historicalValue))+"%\n        ")],1):_vm._e()])]):_vm._e(),_vm._v(" "),(_vm.item.stats.current)?_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("Minimum Buyout")])]),_vm._v(" "),(_vm.stats.current.minBuyout > 0)?_c('div',{staticClass:"col-2"},[_c('span',{staticClass:"data-price"},[_vm._v("\n          "+_vm._s(_vm.parsePrice(_vm.stats.current.minBuyout))+"\n        ")]),_vm._v(" "),(_vm.diff.minBuyout !== 0)?_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.minBuyout < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.minBuyout}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.minBuyout))+"%\n        ")],1):_vm._e()]):_c('div',{staticClass:"col-2"},[_c('span',{staticClass:"data-price neutral"},[_vm._v("Unavailable")])])]):_vm._e(),_vm._v(" "),(_vm.item.stats.current)?_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("Quantity")])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('span',{staticClass:"data-price"},[_vm._v("\n          "+_vm._s(_vm.stats.current.quantity)+"\n        ")]),_vm._v(" "),(_vm.diff.quantity !== 0)?_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.quantity < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.quantity}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.quantity))+"%\n        ")],1):_vm._e()])]):_vm._e(),_vm._v(" "),(_vm.item.vendorPrice)?_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("Vendor Price")])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('span',{staticClass:"data-price"},[_vm._v("\n          "+_vm._s(_vm.parsePrice(_vm.item.vendorPrice))+"\n        ")])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col-2 item-link-label"},[_c('span',[_vm._v("Ingame Item Link")])]),_vm._v(" "),_c('div',{staticClass:"col-3"},[_c('input',{ref:"itemLink",staticClass:"item-link",attrs:{"type":"text","readonly":""},domProps:{"value":_vm.item.itemLink},on:{"click":function($event){return _vm.copyToClipboard()}}})]),_vm._v(" "),_c('div',{staticClass:"col item-link-copied"},[_c('span',{staticClass:"item-link-copy-confirmed",class:{ active: _vm.copied }},[_vm._v("Copied!")])])])]),_vm._v(" "),_c('template',{slot:"footer"},[_c('a',{attrs:{"href":"https://www.tradeskillmaster.com/","target":"_blank"}},[_vm._v("\n      Powered by TSM\n      "),_c('img',{staticClass:"ico-20",attrs:{"src":"/img/ui/arrow-right.svg","alt":"Powered by TSM"}})])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/stats.vue?vue&type=template&id=809ceea4&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1003:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/heatmap-value.vue?vue&type=template&id=5c7a093c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',{ref:"heatmapValue"},[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/wow-classic/ui/trade.svg","alt":"Trade"}}),_vm._v(" "),_c('h3',[_vm._v("Heatmap Market Value")])]),_vm._v(" "),_c('template',{slot:"body"},[_c('heatmap',{attrs:{"data":_vm.data,"parse-num":true,"tooltip-label":'Market Value'}})],1),_vm._v(" "),_c('template',{slot:"footer"},[_c('module-time',{attrs:{"days":_vm.timerange,"fn":_vm.setTimerange}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/heatmap-value.vue?vue&type=template&id=5c7a093c&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/heatmap-quantity.vue?vue&type=template&id=6a5a2430&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',{ref:"heatmapQuantity"},[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/wow-classic/ui/trade.svg","alt":"Trade"}}),_vm._v(" "),_c('h3',[_vm._v("Heatmap Market Quantity")])]),_vm._v(" "),_c('template',{slot:"body"},[_c('heatmap',{attrs:{"data":_vm.data,"tooltip-label":'Quantity'}})],1),_vm._v(" "),_c('template',{slot:"footer"},[_c('module-time',{attrs:{"days":_vm.timerange,"fn":_vm.setTimerange}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/heatmap-quantity.vue?vue&type=template&id=6a5a2430&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/graph-value-quantity.vue?vue&type=template&id=54c05b6e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',{ref:"graphValueQuantity"},[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/wow-classic/ui/trade.svg","alt":"Trade"}}),_vm._v(" "),_c('h3',[_vm._v("Market Value / Quantity")])]),_vm._v(" "),_c('template',{slot:"body"},[_c('div',{staticClass:"graph-wrapper"},[_c('div',{staticClass:"axis y1"},[_c('div',{staticClass:"labels"},_vm._l((_vm.axisY1),function(label,i){return _c('span',{key:'axisY1' + i},[_vm._v(_vm._s(label)+"g")])}),0)]),_vm._v(" "),_c('div',{staticClass:"graph"},[_c('sparkline',{attrs:{"data":_vm.data,"secondary-label":'Quantity'}}),_vm._v(" "),_c('div',{staticClass:"axis x"},[_c('div',{staticClass:"labels"},_vm._l((_vm.axisX),function(label,i){return _c('span',{key:'axisX' + i},[_vm._v(_vm._s(label))])}),0)])],1),_vm._v(" "),_c('div',{staticClass:"axis y2"},[_c('div',{staticClass:"labels"},_vm._l((_vm.axisY2),function(label,i){return _c('span',{key:'axisY2' + i},[_vm._v(_vm._s(label))])}),0)])])]),_vm._v(" "),_c('template',{slot:"footer"},[_c('module-time',{attrs:{"days":_vm.timerange,"fn":_vm.setTimerange}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/graph-value-quantity.vue?vue&type=template&id=54c05b6e&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/graph-value-comparison.vue?vue&type=template&id=2dc03a42&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',{ref:"graphValueComparison"},[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/wow-classic/ui/trade.svg","alt":"Trade"}}),_vm._v(" "),_c('h3',[_vm._v("Market Value Server vs. Regional")])]),_vm._v(" "),_c('template',{slot:"body"},[_c('div',{staticClass:"graph-wrapper"},[_c('div',{staticClass:"axis y1"},[_c('div',{staticClass:"labels"},_vm._l((_vm.axisY1),function(label,i){return _c('span',{key:'axisY1' + i},[_vm._v(_vm._s(label)+"g")])}),0)]),_vm._v(" "),_c('div',{staticClass:"graph"},[_c('sparkline',{attrs:{"data":_vm.data,"secondary-label":'Regional',"parse-secondary":true}}),_vm._v(" "),_c('div',{staticClass:"axis x"},[_c('div',{staticClass:"labels"},_vm._l((_vm.axisX),function(label,i){return _c('span',{key:'axisX' + i},[_vm._v(_vm._s(label))])}),0)])],1)])]),_vm._v(" "),_c('template',{slot:"footer"},[_c('module-time',{attrs:{"days":_vm.timerange,"fn":_vm.setTimerange}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/graph-value-comparison.vue?vue&type=template&id=2dc03a42&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/description.vue?vue&type=template&id=d2a68c24&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-16",attrs:{"src":"/img/wow-classic/ui/description.svg","alt":"Tooltip"}}),_vm._v(" "),_c('h3',[_vm._v("Tooltip")])]),_vm._v(" "),_c('template',{slot:"body"},[_vm._l((_vm.tooltip),function(entry,i){return [(entry.format !== 'alignRight' && entry.preformat !== 'alignRight')?_c('p',{key:("" + i + (entry.label)),class:[entry.format ? 'format-' + entry.format.toLowerCase() : '', !entry.space ? 'tooltip-label' : '']},[_vm._v("\n        "+_vm._s(entry.label)+"\n      ")]):_c('span',{key:("" + i + (entry.label)),class:[entry.format ? 'format-' + entry.format.toLowerCase() : '', !entry.space ? 'tooltip-label' : '']},[_vm._v("\n        "+_vm._s(entry.label)+"\n      ")])]})],2),_vm._v(" "),_c('template',{slot:"footer"},[(_vm.wowheadUrl)?_c('a',{attrs:{"href":_vm.wowheadUrl,"target":"_blank"}},[_vm._v("\n      View on Wowhead\n      "),_c('img',{staticClass:"ico-20",attrs:{"src":"/img/ui/arrow-right.svg","alt":"View on Wowhead"}})]):_vm._e()])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/description.vue?vue&type=template&id=d2a68c24&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/charts/heatmap.vue?vue&type=template&id=ad0bae16&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_vm._l((_vm.data),function(day,i){return _c('div',{key:_vm.axisDays[i],staticClass:"day"},[_vm._l((day),function(hour,j){return _c('div',{key:hour + '' + j,staticClass:"hour-wrapper"},[_c('div',{staticClass:"hour",class:[_vm.theme.hour, { inactive: !hour }],style:({ opacity: _vm.scale(hour), transform: ("scale(" + (_vm.scale(hour)) + ")") })}),_vm._v(" "),_c('div',{staticClass:"tooltip",class:[_vm.theme.tooltip, { inactive: !hour }]},[_c('time',{attrs:{"datetime":((j * 2 + 1) + ":00")}},[_vm._v("\n          "+_vm._s(_vm.axisDays[i])+",\n          "+_vm._s(j % 12 + 1)+_vm._s(j > 11 ? 'pm' : 'am')+"\n        ")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('span',{staticClass:"num"},[_vm._v(_vm._s(_vm.parseNum ? _vm.parsePrice(hour) : hour))]),_vm._v(" "),_c('br'),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.tooltipLabel ? _vm.tooltipLabel : ''))])])])}),_vm._v(" "),_c('span',{staticClass:"label",class:_vm.theme.label},[_vm._v(_vm._s(_vm.axisDays[i]))])],2)}),_vm._v(" "),_c('div',{staticClass:"axis-hours"},_vm._l((24),function(hour,i){return _c('div',{key:hour + '' + i,staticClass:"time"},[(i % 3 === 1)?_c('span',{staticClass:"label",class:_vm.theme.label},[_vm._v("\n        "+_vm._s(i % 12 + 1)+_vm._s(i + 1 > 11 ? 'pm' : 'am')+"\n      ")]):_c('span')])}),0)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/charts/heatmap.vue?vue&type=template&id=ad0bae16&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/charts/sparkline_two.vue?vue&type=template&id=74b9b083&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sparkline"},[_c('div',{staticClass:"graph"},[_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},[_c('g',[_c('path',{staticClass:"line",attrs:{"d":_vm.paths.line1}}),_vm._v(" "),_c('path',{staticClass:"line secondary",attrs:{"d":_vm.paths.line2}})])])]),_vm._v(" "),_c('div',{staticClass:"tooltip-container"},[_c('svg',{attrs:{"width":_vm.width + 160,"height":_vm.height}},_vm._l((_vm.data),function(d,i){return _c('g',{key:("" + i + (d.x)),staticClass:"point"},[_c('rect',{staticClass:"hover",attrs:{"x":_vm.scaled.x(d.x)}}),_vm._v(" "),_c('circle',{staticClass:"circle",attrs:{"cx":_vm.scaled.x(d.x),"cy":_vm.scaled.v1(d.value1),"r":"3"}}),_vm._v(" "),_c('circle',{staticClass:"circle secondary",attrs:{"cx":_vm.scaled.x(d.x),"cy":_vm.scaled.v2(d.value2),"r":"3"}}),_vm._v(" "),_c('g',{staticClass:"tooltip"},[_c('rect',{attrs:{"x":_vm.scaled.x(d.x) + 12,"height":'87px',"width":_vm.tooltipWidth}}),_vm._v(" "),_c('text',{staticClass:"title",attrs:{"x":_vm.scaled.x(d.x) + 20,"y":"22px"}},[_vm._v("\n            "+_vm._s(_vm.parseHoursAgo(d.x))+"\n          ")]),_vm._v(" "),_c('circle',{staticClass:"circle",attrs:{"cx":_vm.scaled.x(d.x) + 23,"cy":"45px","r":"3"}}),_vm._v(" "),_c('text',{staticClass:"num",attrs:{"x":_vm.scaled.x(d.x) + 30,"y":"50px"}},[_vm._v("\n            "+_vm._s(_vm.parsePrice(d.value1))+"\n          ")]),_vm._v(" "),_c('circle',{staticClass:"circle secondary",attrs:{"cx":_vm.scaled.x(d.x) + 23,"cy":"70px","r":"3"}}),_vm._v(" "),(_vm.secondaryLabel)?_c('text',{staticClass:"sub",attrs:{"x":_vm.scaled.x(d.x) + 30,"y":"75px"}},[_vm._v("\n            "+_vm._s(_vm.secondaryLabel)+": "+_vm._s(d ? (_vm.parseSecondary ? _vm.parsePrice(d.value2) : ("" + (d.value2))) : '0')+"\n          ")]):_c('text',{staticClass:"sub",attrs:{"x":_vm.scaled.x(d.x) + 30,"y":"75px"}},[_vm._v("\n            "+_vm._s(d ? (_vm.parseSecondary ? _vm.parsePrice(d.value2) : ("" + (d.value2))) : '0')+"\n          ")])])])}),0)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/charts/sparkline_two.vue?vue&type=template&id=74b9b083&scoped=true&
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

var _theme = __webpack_require__(35);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['name', 'maxHeight', 'maxWidth'],

  data: function data() {
    return {
      blocked: false
    };
  },


  computed: {
    theme: function theme() {
      return (0, _theme2.default)(this);
    }
  },

  mounted: function mounted() {
    var nitroAds = window.nitroAds;
    if (!nitroAds) {
      this.blocked = true;
      return;
    }

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
module.exports = {"blocked":"warframe_blocked_3JQnD"};

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"blocked":"wow-classic_blocked_3Rr6k"};

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_vue_vue_type_template_id_820c27de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(176);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(209);
/* harmony import */ var _module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(210);
/* harmony import */ var _module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(211);
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

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(177);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = __webpack_require__(35);

var _theme2 = _interopRequireDefault(_theme);

var _progress = __webpack_require__(81);

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

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"module":"warframe_module_kCFyr","header":"warframe_header_2nKQS","footer":"warframe_footer_1kr-S"};

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"module":"wow-classic_module_2l8-b","header":"wow-classic_header_g9KLN","footer":"wow-classic_footer_19f0t"};

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nitroAds_vue_vue_type_template_id_76ad42ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(206);
/* harmony import */ var _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(168);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(197);
/* harmony import */ var _nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(198);
/* harmony import */ var _nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(199);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);










function injectStyles (context) {
  
  this["warframe"] = (_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"])
this["wow-classic"] = (_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"].locals || _nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"])

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(
  _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nitroAds_vue_vue_type_template_id_76ad42ac___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _nitroAds_vue_vue_type_template_id_76ad42ac___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(183);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 183:
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

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"indicator":"warframe_indicator_1spmD"};

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"indicator":"wow-classic_indicator_GhxVb"};

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ads/nitroAds.vue?vue&type=template&id=76ad42ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layout-center",class:[{ 'blocked-unit': _vm.blocked, 'ad-unit': !_vm.blocked }, _vm.blocked ? _vm.theme.blocked : ''],style:({
  'max-height': _vm.maxHeight,
  'max-width': _vm.maxWidth
}),attrs:{"id":("ad-" + _vm.name)}},[(_vm.blocked)?_c('span',[_vm._v("Advertising seems to be blocked by your browser. This is fine.")]):_vm._e(),_vm._v(" "),(_vm.blocked)?_c('span',[_vm._v("NexusHub is completely free and we want it to stay that way.\n    Advertising is currently our only income to pay for the servers and to help us to develop NexusHub even further!")]):_vm._e(),_vm._v(" "),(_vm.blocked)?_c('span',[_vm._v("Please consider adding an exception for NexusHub.co on your Adblocker.\n    If you think that any ads are intrusive or inappropriate, feel free to contact us.")]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ads/nitroAds.vue?vue&type=template&id=76ad42ac&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indicator_vue_vue_type_template_id_7c937518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(350);
/* harmony import */ var _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(182);
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

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(178);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(179);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(213);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 213:
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

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"dropdown":"warframe_dropdown_h8zz3","body":"warframe_body_2goxA"};

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"dropdown":"wow-classic_dropdown_i5aP_","body":"wow-classic_body_1naDm"};

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/module.vue?vue&type=template&id=820c27de&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"module",class:_vm.theme.module},[_c('div',{staticClass:"header",class:_vm.theme.header},[_vm._t("header")],2),_vm._v(" "),_c('div',{staticClass:"body"},[_vm._t("body")],2),_vm._v(" "),_c('div',{staticClass:"footer",class:_vm.theme.footer},[_vm._t("footer")],2),_vm._v(" "),_c('progressbar',{ref:"progress"})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/module.vue?vue&type=template&id=820c27de&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/charts/indicator.vue?vue&type=template&id=7c937518&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"indicator",class:[{ negative: _vm.diff < 0, positive: _vm.diff > 0, reverse: _vm.reverse }, _vm.theme.indicator],attrs:{"height":"10px","width":"7px","overflow":"visible"}},[_c('path',{attrs:{"transform":("translate(" + (_vm.x || 0) + ", " + (_vm.y || 0) + ")"),"d":_vm.diff < 0 ? _vm.negative : _vm.positive}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/charts/indicator.vue?vue&type=template&id=7c937518&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_time_vue_vue_type_template_id_ee2ae558_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(410);
/* harmony import */ var _module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(212);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(376);
/* harmony import */ var _module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(377);
/* harmony import */ var _module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(378);
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

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(426);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(427);

var _createClass3 = _interopRequireDefault(_createClass2);

var _tween = __webpack_require__(428);

var _tween2 = _interopRequireDefault(_tween);

var _normalize = __webpack_require__(382);

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

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(214);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(215);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 382:
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

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 218,
	"./af.js": 218,
	"./ar": 219,
	"./ar-dz": 220,
	"./ar-dz.js": 220,
	"./ar-kw": 221,
	"./ar-kw.js": 221,
	"./ar-ly": 222,
	"./ar-ly.js": 222,
	"./ar-ma": 223,
	"./ar-ma.js": 223,
	"./ar-sa": 224,
	"./ar-sa.js": 224,
	"./ar-tn": 225,
	"./ar-tn.js": 225,
	"./ar.js": 219,
	"./az": 226,
	"./az.js": 226,
	"./be": 227,
	"./be.js": 227,
	"./bg": 228,
	"./bg.js": 228,
	"./bm": 229,
	"./bm.js": 229,
	"./bn": 230,
	"./bn.js": 230,
	"./bo": 231,
	"./bo.js": 231,
	"./br": 232,
	"./br.js": 232,
	"./bs": 233,
	"./bs.js": 233,
	"./ca": 234,
	"./ca.js": 234,
	"./cs": 235,
	"./cs.js": 235,
	"./cv": 236,
	"./cv.js": 236,
	"./cy": 237,
	"./cy.js": 237,
	"./da": 238,
	"./da.js": 238,
	"./de": 239,
	"./de-at": 240,
	"./de-at.js": 240,
	"./de-ch": 241,
	"./de-ch.js": 241,
	"./de.js": 239,
	"./dv": 242,
	"./dv.js": 242,
	"./el": 243,
	"./el.js": 243,
	"./en-SG": 244,
	"./en-SG.js": 244,
	"./en-au": 245,
	"./en-au.js": 245,
	"./en-ca": 246,
	"./en-ca.js": 246,
	"./en-gb": 247,
	"./en-gb.js": 247,
	"./en-ie": 248,
	"./en-ie.js": 248,
	"./en-il": 249,
	"./en-il.js": 249,
	"./en-nz": 250,
	"./en-nz.js": 250,
	"./eo": 251,
	"./eo.js": 251,
	"./es": 252,
	"./es-do": 253,
	"./es-do.js": 253,
	"./es-us": 254,
	"./es-us.js": 254,
	"./es.js": 252,
	"./et": 255,
	"./et.js": 255,
	"./eu": 256,
	"./eu.js": 256,
	"./fa": 257,
	"./fa.js": 257,
	"./fi": 258,
	"./fi.js": 258,
	"./fo": 259,
	"./fo.js": 259,
	"./fr": 260,
	"./fr-ca": 261,
	"./fr-ca.js": 261,
	"./fr-ch": 262,
	"./fr-ch.js": 262,
	"./fr.js": 260,
	"./fy": 263,
	"./fy.js": 263,
	"./ga": 264,
	"./ga.js": 264,
	"./gd": 265,
	"./gd.js": 265,
	"./gl": 266,
	"./gl.js": 266,
	"./gom-latn": 267,
	"./gom-latn.js": 267,
	"./gu": 268,
	"./gu.js": 268,
	"./he": 269,
	"./he.js": 269,
	"./hi": 270,
	"./hi.js": 270,
	"./hr": 271,
	"./hr.js": 271,
	"./hu": 272,
	"./hu.js": 272,
	"./hy-am": 273,
	"./hy-am.js": 273,
	"./id": 274,
	"./id.js": 274,
	"./is": 275,
	"./is.js": 275,
	"./it": 276,
	"./it-ch": 277,
	"./it-ch.js": 277,
	"./it.js": 276,
	"./ja": 278,
	"./ja.js": 278,
	"./jv": 279,
	"./jv.js": 279,
	"./ka": 280,
	"./ka.js": 280,
	"./kk": 281,
	"./kk.js": 281,
	"./km": 282,
	"./km.js": 282,
	"./kn": 283,
	"./kn.js": 283,
	"./ko": 284,
	"./ko.js": 284,
	"./ku": 285,
	"./ku.js": 285,
	"./ky": 286,
	"./ky.js": 286,
	"./lb": 287,
	"./lb.js": 287,
	"./lo": 288,
	"./lo.js": 288,
	"./lt": 289,
	"./lt.js": 289,
	"./lv": 290,
	"./lv.js": 290,
	"./me": 291,
	"./me.js": 291,
	"./mi": 292,
	"./mi.js": 292,
	"./mk": 293,
	"./mk.js": 293,
	"./ml": 294,
	"./ml.js": 294,
	"./mn": 295,
	"./mn.js": 295,
	"./mr": 296,
	"./mr.js": 296,
	"./ms": 297,
	"./ms-my": 298,
	"./ms-my.js": 298,
	"./ms.js": 297,
	"./mt": 299,
	"./mt.js": 299,
	"./my": 300,
	"./my.js": 300,
	"./nb": 301,
	"./nb.js": 301,
	"./ne": 302,
	"./ne.js": 302,
	"./nl": 303,
	"./nl-be": 304,
	"./nl-be.js": 304,
	"./nl.js": 303,
	"./nn": 305,
	"./nn.js": 305,
	"./pa-in": 306,
	"./pa-in.js": 306,
	"./pl": 307,
	"./pl.js": 307,
	"./pt": 308,
	"./pt-br": 309,
	"./pt-br.js": 309,
	"./pt.js": 308,
	"./ro": 310,
	"./ro.js": 310,
	"./ru": 311,
	"./ru.js": 311,
	"./sd": 312,
	"./sd.js": 312,
	"./se": 313,
	"./se.js": 313,
	"./si": 314,
	"./si.js": 314,
	"./sk": 315,
	"./sk.js": 315,
	"./sl": 316,
	"./sl.js": 316,
	"./sq": 317,
	"./sq.js": 317,
	"./sr": 318,
	"./sr-cyrl": 319,
	"./sr-cyrl.js": 319,
	"./sr.js": 318,
	"./ss": 320,
	"./ss.js": 320,
	"./sv": 321,
	"./sv.js": 321,
	"./sw": 322,
	"./sw.js": 322,
	"./ta": 323,
	"./ta.js": 323,
	"./te": 324,
	"./te.js": 324,
	"./tet": 325,
	"./tet.js": 325,
	"./tg": 326,
	"./tg.js": 326,
	"./th": 327,
	"./th.js": 327,
	"./tl-ph": 328,
	"./tl-ph.js": 328,
	"./tlh": 329,
	"./tlh.js": 329,
	"./tr": 330,
	"./tr.js": 330,
	"./tzl": 331,
	"./tzl.js": 331,
	"./tzm": 332,
	"./tzm-latn": 333,
	"./tzm-latn.js": 333,
	"./tzm.js": 332,
	"./ug-cn": 334,
	"./ug-cn.js": 334,
	"./uk": 335,
	"./uk.js": 335,
	"./ur": 336,
	"./ur.js": 336,
	"./uz": 337,
	"./uz-latn": 338,
	"./uz-latn.js": 338,
	"./uz.js": 337,
	"./vi": 339,
	"./vi.js": 339,
	"./x-pseudo": 340,
	"./x-pseudo.js": 340,
	"./yo": 341,
	"./yo.js": 341,
	"./zh-cn": 342,
	"./zh-cn.js": 342,
	"./zh-hk": 343,
	"./zh-hk.js": 343,
	"./zh-tw": 344,
	"./zh-tw.js": 344
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
webpackContext.id = 395;

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(408);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _items = __webpack_require__(607);

var _items2 = _interopRequireDefault(_items);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  asyncData: function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
      var store = _ref.store,
          route = _ref.route;
      var item, slug, itemData;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              item = route.params.item;
              slug = route.params.slug;

              if (!(store.state.items.item.itemId !== parseInt(item) && store.state.items.item.uniqueName !== item || store.state.items.item.server !== slug)) {
                _context.next = 7;
                break;
              }

              _context.next = 5;
              return this.$cubic.get('/wow-classic/v1/items/' + slug + '/' + item);

            case 5:
              itemData = _context.sent;

              store.commit('setItem', itemData);

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

  computed: {
    item: function item() {
      return this.$store.state.items.item;
    },
    itemUrl: function itemUrl() {
      var split = this.$route.fullPath.split(this.item.uniqueName);
      var route = split.length > 1 ? split[0] : this.$route.fullPath.split(this.item.itemId)[0];
      return '' + route + this.item.uniqueName;
    }
  },

  storeModule: _items2.default
};

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/module-time.vue?vue&type=template&id=ee2ae558&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"module-time"},[_c('div',{staticClass:"interactive",on:{"click":_vm.toggle}},[_c('span',[_vm._v("Last "+_vm._s(_vm.days)+" days")]),_vm._v(" "),_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/dropdown.svg","alt":"Dropdown"}})]),_vm._v(" "),_c('div',{staticClass:"dropdown",class:[{ active: _vm.active }, _vm.theme.dropdown]},[_c('div',{staticClass:"body",class:_vm.theme.body},[_c('span',{class:{ active: _vm.days === 7 },on:{"click":function($event){_vm.fn(7); _vm.toggle()}}},[_vm._v("Last 7 days")]),_vm._v(" "),_c('span',{class:{ active: _vm.days === 30 },on:{"click":function($event){_vm.fn(30); _vm.toggle()}}},[_vm._v("Last 30 days")]),_vm._v(" "),_c('span',{class:{ active: _vm.days === 90 },on:{"click":function($event){_vm.fn(90); _vm.toggle()}}},[_vm._v("Last 90 days")])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/module-time.vue?vue&type=template&id=ee2ae558&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(418);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(167);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(419), __esModule: true };

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
__webpack_require__(77);
module.exports = __webpack_require__(420);


/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(59);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(10);
module.exports = __webpack_require__(2).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_vue_vue_type_template_id_1d47c708_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(654);
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(407);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _header_vue_vue_type_style_index_0_id_1d47c708_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_1d47c708_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _header_vue_vue_type_template_id_1d47c708_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "1d47c708",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'items',
  state: {
    item: { itemId: '', name: '', uniqueName: '' },
    timerange: 7
  },

  mutations: {
    setItem: function setItem(state, item) {
      state.item = item;
      if (!state.timerange) state.timerange = item.current.intervals.length;
    }
  },

  actions: {
    refetchItem: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref, timerange) {
        var state = _ref.state,
            commit = _ref.commit;
        var itemId, item;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                itemId = state.item.itemId;
                _context.next = 3;
                return this.$cubic.get('/wow-classic/v1/items/' + itemId + '?timerange=' + timerange);

              case 3:
                item = _context.sent;

                commit('setItem', item);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function refetchItem(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return refetchItem;
    }()
  }
};

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_1d47c708_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(409);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_1d47c708_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_1d47c708_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_1d47c708_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(611);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(36);

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = __webpack_require__(411);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nitroAds = __webpack_require__(181);

var _nitroAds2 = _interopRequireDefault(_nitroAds);

var _appContent = __webpack_require__(175);

var _appContent2 = _interopRequireDefault(_appContent);

var _description = __webpack_require__(950);

var _description2 = _interopRequireDefault(_description);

var _graphValueComparison = __webpack_require__(952);

var _graphValueComparison2 = _interopRequireDefault(_graphValueComparison);

var _graphValueQuantity = __webpack_require__(955);

var _graphValueQuantity2 = _interopRequireDefault(_graphValueQuantity);

var _heatmapQuantity = __webpack_require__(957);

var _heatmapQuantity2 = _interopRequireDefault(_heatmapQuantity);

var _heatmapValue = __webpack_require__(962);

var _heatmapValue2 = _interopRequireDefault(_heatmapValue);

var _header = __webpack_require__(606);

var _header2 = _interopRequireDefault(_header);

var _meta = __webpack_require__(173);

var _meta2 = _interopRequireDefault(_meta);

var _wowClassic = __webpack_require__(388);

var _wowClassic2 = _interopRequireDefault(_wowClassic);

var _stats = __webpack_require__(963);

var _stats2 = _interopRequireDefault(_stats);

var _graphs = __webpack_require__(965);

var _graphs2 = _interopRequireDefault(_graphs);

var _utility = __webpack_require__(208);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    ad: _nitroAds2.default,
    appContent: _appContent2.default,
    navigation: _wowClassic2.default,
    itemHeader: _header2.default,
    description: _description2.default,
    stats: _stats2.default,
    graphValueComparison: _graphValueComparison2.default,
    graphValueQuantity: _graphValueQuantity2.default,
    heatmapValue: _heatmapValue2.default,
    heatmapQuantity: _heatmapQuantity2.default
  },

  asyncData: function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
      var store = _ref.store,
          route = _ref.route;

      var item, slug, region, parallel, _ref3, _ref4, itemData, regionalData, regionalDataEdited;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              item = route.params.item;
              slug = route.params.slug;

              if (!(store.state.graphs.itemId !== parseInt(item) && store.state.graphs.uniqueName !== item || store.state.graphs.slug !== slug)) {
                _context.next = 19;
                break;
              }

              region = store.state.servers.region;
              parallel = [];

              parallel.push(this.$cubic.get('/wow-classic/v1/items/' + slug + '/' + item + '/prices'));
              parallel.push(this.$cubic.get('/wow-classic/v1/items/' + region + '/' + item + '/prices?region=true'));
              _context.next = 9;
              return _promise2.default.all(parallel);

            case 9:
              _ref3 = _context.sent;
              _ref4 = (0, _slicedToArray3.default)(_ref3, 2);
              itemData = _ref4[0];
              regionalData = _ref4[1];
              regionalDataEdited = _utility2.default.formatRegionalData(itemData, regionalData);


              store.commit('setGraphItem', { itemId: itemData.itemId, uniqueName: itemData.uniqueName, slug: slug });

              store.commit('setGraphData', { graph: 'graph-value-quantity', item: itemData });
              store.commit('setGraphData', { graph: 'graph-value-comparison', item: regionalDataEdited });
              store.commit('setGraphData', { graph: 'heatmap-quantity', item: itemData });
              store.commit('setGraphData', { graph: 'heatmap-value', item: itemData });

            case 19:
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
      console.log(this.$store.state.items.item);
      return this.$store.state.items.item;
    },
    displayGraphs: function displayGraphs() {
      return this.$store.state.graphs.storage['graph-value-quantity'].data.length;
    }
  },

  head: function head() {
    var server = this.$store.state.servers.server;
    var serverlist = this.$store.state.servers.EU.concat(this.$store.state.servers.US);

    var serverSplit = server.split('-');
    var faction = serverSplit.pop();
    var serverIndex = serverlist.map(function (x) {
      return _utility2.default.serverSlug(x);
    }).indexOf(serverSplit.join('-'));
    var serverPretty = serverlist[serverIndex] + ' (' + (faction.charAt(0).toUpperCase() + faction.slice(1)) + ')';

    return {
      title: this.item.name + ' on ' + serverPretty + ' \xB7 NexusHub',
      meta: (0, _meta2.default)({
        title: this.item.name + ' on NexusHub',
        description: this.item.name + ' prices on the World of Warcaft Classic Auction House for ' + serverPretty,
        image: '' + this.item.icon
      })
    };
  },


  storeModule: _graphs2.default
};

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(613);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module2 = __webpack_require__(174);

var _module3 = _interopRequireDefault(_module2);

var _utility = __webpack_require__(208);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    module: _module3.default
  },

  computed: {
    item: function item() {
      return this.$store.state.items.item;
    },
    wowheadUrl: function wowheadUrl() {
      return 'https://classic.wowhead.com/item=' + this.item.itemId;
    },
    tooltip: function tooltip() {
      var tooltip = this.item.tooltip.slice(1).filter(function (t) {
        return !t.label.includes('Dropped by:') && !t.label.includes('Drop Chance:');
      });

      for (var i = 0; i < tooltip.length; i++) {
        tooltip[i].label = tooltip[i].label.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

        if (tooltip[i].format === 'alignRight' && i > 0) tooltip[i - 1].preformat = 'alignRight';

        if (tooltip[i].label === 'Sell Price:') {
          tooltip[i].label += ' ' + this.parsePrice(this.item.sellPrice);
          if (i < tooltip.length - 1) tooltip[i + 1].space = true;
        }

        if (tooltip[i].format === 'indent') {
          if (i > 0 && tooltip[i - 1].format !== 'indent') tooltip[i - 1].space = true;
          if (i < tooltip.length - 1 && tooltip[i + 1].format !== 'indent') tooltip[i + 1].space = true;
        }
      }

      return tooltip;
    }
  },

  created: function created() {
    this.parsePrice = _utility2.default.parsePrice;
  }
};

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _module2 = __webpack_require__(174);

var _module3 = _interopRequireDefault(_module2);

var _moduleTime = __webpack_require__(361);

var _moduleTime2 = _interopRequireDefault(_moduleTime);

var _moment = __webpack_require__(166);

var _moment2 = _interopRequireDefault(_moment);

var _sparkline_two = __webpack_require__(666);

var _sparkline_two2 = _interopRequireDefault(_sparkline_two);

var _utility = __webpack_require__(208);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    sparkline: _sparkline_two2.default,
    module: _module3.default,
    moduleTime: _moduleTime2.default
  },

  computed: {
    timerange: function timerange() {
      return this.$store.state.graphs.storage['graph-value-comparison'].timerange;
    },
    region: function region() {
      return this.$store.state.servers.region;
    },
    data: function data() {
      var data = this.$store.state.graphs.storage['graph-value-comparison'].data.map(function (d) {
        return {
          x: d.scannedAt,
          value1: d.value2,
          value2: d.marketValue
        };
      });

      return _utility2.default.mergeValuesAndInterpolateLowerUpper(data, this.timerange);
    },
    axisY1: function axisY1() {
      var totalData = this.data.concat(this.data.map(function (x) {
        return { value1: x.value2 };
      }));

      var _utility$generateGrap = _utility2.default.generateGraphScala(totalData, 4, 'value1'),
          tickRange = _utility$generateGrap.tickRange,
          lowerBound = _utility$generateGrap.lowerBound,
          upperBound = _utility$generateGrap.upperBound;

      var scala = [];
      for (var tick = upperBound; tick >= lowerBound; tick -= tickRange) {
        scala.push((tick / 10000).toFixed(2));
      }
      return scala;
    },
    axisX: function axisX() {
      var now = (0, _moment2.default)();
      var stepSize = Math.floor(this.timerange / 6);
      var scala = [];
      for (var i = this.timerange; i > 0; i -= stepSize) {
        scala.push(now.clone().subtract(i, 'days').format('DD. MMM'));
      }return scala.concat(['Today']);
    }
  },

  methods: {
    setTimerange: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(timerange) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(timerange === this.timerange)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                this.$refs.graphValueComparison.$refs.progress.start();
                _context.next = 5;
                return this.$store.dispatch('refetchGraphData', { graph: 'graph-value-comparison', timerange: timerange, regional: this.region });

              case 5:
                this.$refs.graphValueComparison.$refs.progress.finish();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setTimerange(_x) {
        return _ref.apply(this, arguments);
      }

      return setTimerange;
    }()
  }
};

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(618);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d = __webpack_require__(421);

var d3 = _interopRequireWildcard(_d);

var _tween = __webpack_require__(369);

var _tween2 = _interopRequireDefault(_tween);

var _utility = __webpack_require__(208);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  props: ['data', 'secondaryLabel', 'parseSecondary'],

  data: function data() {
    return {
      width: 0,
      height: 0,
      tooltipWidth: 0,
      paths: {
        line1: '',
        line2: ''
      },
      scaled: {
        x: function x(_x) {
          return _x;
        },
        v1: function v1(x) {
          return x;
        },
        v2: function v2(x) {
          return x;
        }
      }
    };
  },


  watch: {
    data: function data(newData, oldData) {
      _tween2.default.adjustData(this, newData, oldData);
      if (newData.length !== oldData.length) {
        this.onResize();
      }
    }
  },

  created: function created() {
    this.parsePrice = _utility2.default.parsePrice;
  },
  mounted: function mounted() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },


  methods: {
    initialize: function initialize() {
      this.scaled.x = d3.scaleLinear().range([0, this.width]);

      this.scaled.v1 = d3.scaleLinear().range([this.height - 9, 9]);
      this.scaled.v2 = d3.scaleLinear().range([this.height - 9, 9]);
    },
    onResize: function onResize() {
      this.width = this.$el.offsetWidth;
      this.height = this.$el.offsetHeight;
      this.initialize();
      _tween2.default.adjustData(this, this.data, this.data);
    },
    update: function update() {
      var _this = this;

      this.scaled.x.domain(d3.extent(this.data, function (d) {
        return d.x;
      }));
      if (!this.parseSecondary) {
        this.scaleDomain('v1', 'value1');
        this.scaleDomain('v2', 'value2');
      } else {
        var totalData = this.data.concat(this.data.map(function (x) {
          return { value1: x.value2 };
        }));

        var _utility$generateGrap = _utility2.default.generateGraphScala(totalData, 4, 'value1'),
            lowerBound = _utility$generateGrap.lowerBound,
            upperBound = _utility$generateGrap.upperBound;

        this.scaled.v1.domain([lowerBound, upperBound]);
        this.scaled.v2.domain([lowerBound, upperBound]);
      }

      var lineValue1 = d3.line().x(function (d) {
        return _this.scaled.x(d.x);
      }).y(function (d) {
        return _this.scaled.v1(d.value1);
      }).curve(d3.curveMonotoneX);
      var lineValue2 = d3.line().x(function (d) {
        return _this.scaled.x(d.x);
      }).y(function (d) {
        return _this.scaled.v2(d.value2);
      }).curve(d3.curveMonotoneX);
      this.paths.line1 = lineValue1(this.data);
      this.paths.line2 = lineValue2(this.data);

      this.updateTooltipSize();
    },
    scaleDomain: function scaleDomain(axis, dataValue) {
      var _utility$generateGrap2 = _utility2.default.generateGraphScala(this.data, 4, dataValue),
          lowerBound = _utility$generateGrap2.lowerBound,
          upperBound = _utility$generateGrap2.upperBound;

      this.scaled[axis].domain([lowerBound, upperBound]);
    },
    updateTooltipSize: function updateTooltipSize() {
      var getMaxWidth = function getMaxWidth(selection) {
        return d3.max(selection.nodes(), function (n) {
          return n.getComputedTextLength();
        });
      };
      var titles = d3.select(this.$el).selectAll('.title');
      var primaryLables = d3.select(this.$el).selectAll('.num');
      var secondaryLables = d3.select(this.$el).selectAll('.sub');

      var widths = [getMaxWidth(titles), getMaxWidth(primaryLables), getMaxWidth(secondaryLables)];
      this.tooltipWidth = Math.round(d3.max(widths)) + 12 + 12;
    },
    parseHoursAgo: function parseHoursAgo(timestamp) {
      var rawHours = Math.round((new Date().getTime() - timestamp) / 1000 / 60 / 60);

      var days = Math.floor(rawHours / 24);
      var hours = rawHours - days * 24;

      var str = '';
      if (days > 0) str += days + ' day';
      if (days > 1) str += 's';
      if (days > 0 && hours > 0) str += ', ';
      if (hours > 0) str += hours + ' hour';
      if (hours > 1) str += 's';

      if (days > 0 || hours > 0) str += ' ago';else str = 'Today';

      return str;
    }
  }
};

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(622);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _module2 = __webpack_require__(174);

var _module3 = _interopRequireDefault(_module2);

var _moduleTime = __webpack_require__(361);

var _moduleTime2 = _interopRequireDefault(_moduleTime);

var _moment = __webpack_require__(166);

var _moment2 = _interopRequireDefault(_moment);

var _sparkline_two = __webpack_require__(666);

var _sparkline_two2 = _interopRequireDefault(_sparkline_two);

var _utility = __webpack_require__(208);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    sparkline: _sparkline_two2.default,
    module: _module3.default,
    moduleTime: _moduleTime2.default
  },

  computed: {
    timerange: function timerange() {
      return this.$store.state.graphs.storage['graph-value-quantity'].timerange;
    },
    data: function data() {
      var data = this.$store.state.graphs.storage['graph-value-quantity'].data.map(function (d) {
        return {
          x: d.scannedAt,
          value1: d.marketValue,
          value2: d.quantity
        };
      });

      return _utility2.default.mergeValuesAndInterpolateLowerUpper(data, this.timerange);
    },
    axisY1: function axisY1() {
      var _utility$generateGrap = _utility2.default.generateGraphScala(this.data, 4, 'value1'),
          tickRange = _utility$generateGrap.tickRange,
          lowerBound = _utility$generateGrap.lowerBound,
          upperBound = _utility$generateGrap.upperBound;

      var scala = [];
      for (var tick = upperBound; tick >= lowerBound; tick -= tickRange) {
        scala.push((tick / 10000).toFixed(2));
      }
      return scala;
    },
    axisY2: function axisY2() {
      var _utility$generateGrap2 = _utility2.default.generateGraphScala(this.data, 4, 'value2'),
          tickRange = _utility$generateGrap2.tickRange,
          lowerBound = _utility$generateGrap2.lowerBound,
          upperBound = _utility$generateGrap2.upperBound;

      var scala = [];
      for (var tick = upperBound; tick >= lowerBound; tick -= tickRange) {
        scala.push(tick);
      }return scala;
    },
    axisX: function axisX() {
      var now = (0, _moment2.default)();
      var stepSize = Math.floor(this.timerange / 6);
      var scala = [];
      for (var i = this.timerange; i > 0; i -= stepSize) {
        scala.push(now.clone().subtract(i, 'days').format('DD. MMM'));
      }return scala.concat(['Today']);
    }
  },

  methods: {
    setTimerange: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(timerange) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(timerange === this.timerange)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                this.$refs.graphValueQuantity.$refs.progress.start();
                _context.next = 5;
                return this.$store.dispatch('refetchGraphData', { graph: 'graph-value-quantity', timerange: timerange });

              case 5:
                this.$refs.graphValueQuantity.$refs.progress.finish();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setTimerange(_x) {
        return _ref.apply(this, arguments);
      }

      return setTimerange;
    }()
  }
};

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(625);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getIterator2 = __webpack_require__(167);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _heatmap = __webpack_require__(667);

var _heatmap2 = _interopRequireDefault(_heatmap);

var _module2 = __webpack_require__(174);

var _module3 = _interopRequireDefault(_module2);

var _moduleTime = __webpack_require__(361);

var _moduleTime2 = _interopRequireDefault(_moduleTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    module: _module3.default,
    moduleTime: _moduleTime2.default,
    heatmap: _heatmap2.default
  },

  computed: {
    timerange: function timerange() {
      return this.$store.state.graphs.storage['heatmap-quantity'].timerange;
    },
    data: function data() {
      var item = this.$store.state.graphs.storage['heatmap-quantity'].data;
      var data = [];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(item), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var d = _step.value;

          var timestamp = new Date(d.scannedAt);

          var day = ((timestamp.getDay() - 1) % 7 + 7) % 7;
          if (!data[day]) data[day] = [];

          var hour = timestamp.getHours();
          if (!data[day][hour]) data[day][hour] = [];
          data[day][hour].push(d.quantity);
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

      for (var i = 0; i < 7; i++) {
        if (!data[i]) {
          data[i] = new Array(24).fill(null);
          continue;
        }
        for (var j = 0; j < 24; j++) {
          if (!data[i][j]) {
            data[i][j] = null;
            continue;
          }
          var hNum = data[i][j].length;
          var hSum = data[i][j].reduce(function (acc, cV) {
            return acc + cV;
          });
          data[i][j] = Math.round(hSum / hNum);
        }
      }

      return data;
    }
  },

  methods: {
    setTimerange: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(timerange) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(timerange === this.timerange)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                this.$refs.heatmapQuantity.$refs.progress.start();
                _context.next = 5;
                return this.$store.dispatch('refetchGraphData', { graph: 'heatmap-quantity', timerange: timerange });

              case 5:
                this.$refs.heatmapQuantity.$refs.progress.finish();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setTimerange(_x) {
        return _ref.apply(this, arguments);
      }

      return setTimerange;
    }()
  }
};

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(627);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(447);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _theme = __webpack_require__(35);

var _theme2 = _interopRequireDefault(_theme);

var _utility = __webpack_require__(208);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['data', 'parseNum', 'tooltipLabel'],

  computed: {
    theme: function theme() {
      return (0, _theme2.default)(this);
    },
    axisDays: function axisDays() {
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    },
    min: function min() {
      var minRow = this.data.map(function (row) {
        return Math.min.apply(Math, (0, _toConsumableArray3.default)(row.filter(function (v) {
          return v;
        })));
      });
      return Math.min.apply(Math, (0, _toConsumableArray3.default)(minRow));
    },
    max: function max() {
      var maxRow = this.data.map(function (row) {
        return Math.max.apply(Math, (0, _toConsumableArray3.default)(row.filter(function (v) {
          return v;
        })));
      });
      return Math.max.apply(Math, (0, _toConsumableArray3.default)(maxRow));
    }
  },

  created: function created() {
    this.parsePrice = _utility2.default.parsePrice;
  },


  methods: {
    scale: function scale(num) {
      var scale = (num - this.min) / (this.max - this.min);
      return scale * (1 - 0.45) + 0.45;
    }
  }
};

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"hour":"warframe_hour_1Pvdk","tooltip":"warframe_tooltip_3y16W","label":"warframe_label_3_svF"};

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"hour":"wow-classic_hour_GDn2k","tooltip":"wow-classic_tooltip_13OLY","label":"wow-classic_label_1Go4q"};

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(633);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getIterator2 = __webpack_require__(167);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _heatmap = __webpack_require__(667);

var _heatmap2 = _interopRequireDefault(_heatmap);

var _module2 = __webpack_require__(174);

var _module3 = _interopRequireDefault(_module2);

var _moduleTime = __webpack_require__(361);

var _moduleTime2 = _interopRequireDefault(_moduleTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    module: _module3.default,
    moduleTime: _moduleTime2.default,
    heatmap: _heatmap2.default
  },

  computed: {
    timerange: function timerange() {
      return this.$store.state.graphs.storage['heatmap-value'].timerange;
    },
    data: function data() {
      var item = this.$store.state.graphs.storage['heatmap-value'].data;
      var data = [];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(item), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var d = _step.value;

          var timestamp = new Date(d.scannedAt);

          var day = ((timestamp.getDay() - 1) % 7 + 7) % 7;
          if (!data[day]) data[day] = [];

          var hour = timestamp.getHours();
          if (!data[day][hour]) data[day][hour] = [];
          data[day][hour].push(d.marketValue);
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

      for (var i = 0; i < 7; i++) {
        if (!data[i]) {
          data[i] = new Array(24).fill(null);
          continue;
        }
        for (var j = 0; j < 24; j++) {
          if (!data[i][j]) {
            data[i][j] = null;
            continue;
          }
          var hNum = data[i][j].length;
          var hSum = data[i][j].reduce(function (acc, cV) {
            return acc + cV;
          });
          data[i][j] = Math.round(hSum / hNum);
        }
      }

      return data;
    }
  },

  methods: {
    setTimerange: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(timerange) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(timerange === this.timerange)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                this.$refs.heatmapValue.$refs.progress.start();
                _context.next = 5;
                return this.$store.dispatch('refetchGraphData', { graph: 'heatmap-value', timerange: timerange });

              case 5:
                this.$refs.heatmapValue.$refs.progress.finish();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setTimerange(_x) {
        return _ref.apply(this, arguments);
      }

      return setTimerange;
    }()
  }
};

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(635);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indicator = __webpack_require__(207);

var _indicator2 = _interopRequireDefault(_indicator);

var _module2 = __webpack_require__(174);

var _module3 = _interopRequireDefault(_module2);

var _moment = __webpack_require__(166);

var _moment2 = _interopRequireDefault(_moment);

var _utility = __webpack_require__(208);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    module: _module3.default,
    indicator: _indicator2.default
  },

  data: function data() {
    return {
      copied: false
    };
  },


  computed: {
    item: function item() {
      return this.$store.state.items.item;
    },
    stats: function stats() {
      return this.item.stats;
    },
    diff: function diff() {
      var _this = this;

      var percentage = function percentage(property) {
        if (!_this.stats.previous || !_this.stats.previous[property]) return 0;
        var value = _this.stats.current[property] - _this.stats.previous[property];
        return Math.round(value / _this.stats.previous[property] * 100 * 1e2) / 1e2;
      };
      return {
        marketValue: percentage('marketValue'),
        minBuyout: percentage('minBuyout'),
        quantity: percentage('quantity'),
        historicalValue: percentage('historicalValue')
      };
    },
    lastUpdated: function lastUpdated() {
      var lastUpdated = this.stats.lastUpdated;
      return lastUpdated ? _moment2.default.utc(lastUpdated).fromNow() : 'Unknown';
    }
  },

  created: function created() {
    this.parsePrice = _utility2.default.parsePrice;
  },


  methods: {
    copyToClipboard: function copyToClipboard() {
      var _this2 = this;

      var itemLink = this.$refs.itemLink;
      itemLink.select();
      itemLink.setSelectionRange(0, 99999);
      document.execCommand('copy');

      this.copied = true;
      setTimeout(function () {
        _this2.copied = false;
      }, 1000);
    }
  }
};

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/header.vue?vue&type=template&id=1d47c708&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_c('div',{staticClass:"item-img-shade"}),_vm._v(" "),_c('div',{staticClass:"item-img-shade-2"}),_vm._v(" "),_c('div',{staticClass:"background"}),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"item-profile"},[_c('div',{staticClass:"icon"},[_c('img',{attrs:{"src":_vm.item.icon}})]),_vm._v(" "),_c('div',{staticClass:"item-profile-data-info"},[_c('h1',[_vm._v(_vm._s(_vm.item.name))]),_vm._v(" "),_c('br'),_vm._v(" "),_vm._l((_vm.item.tags),function(tag,i){return _c('span',{key:tag + i},[_vm._v("\n          "+_vm._s(tag)+"\n        ")])})],2)])]),_vm._v(" "),_c('nav',{ref:"subnav",staticClass:"subnav"},[_c('div',{staticClass:"container"},[_c('router-link',{staticClass:"interactive",attrs:{"to":("" + _vm.itemUrl),"exact":""}},[_vm._v("\n        Overview\n      ")]),_vm._v(" "),_c('router-link',{staticClass:"interactive",attrs:{"to":(_vm.itemUrl + "/crafting")}},[_vm._v("\n        Crafting\n      ")])],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/header.vue?vue&type=template&id=1d47c708&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sparkline_two_vue_vue_type_template_id_74b9b083_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1033);
/* harmony import */ var _sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(617);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _sparkline_two_vue_vue_type_style_index_0_id_74b9b083_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(953);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sparkline_two_vue_vue_type_template_id_74b9b083_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _sparkline_two_vue_vue_type_template_id_74b9b083_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "74b9b083",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heatmap_vue_vue_type_template_id_ad0bae16_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1032);
/* harmony import */ var _heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(626);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _heatmap_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(958);
/* harmony import */ var _heatmap_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(959);
/* harmony import */ var _heatmap_vue_vue_type_style_index_2_id_ad0bae16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(960);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);










function injectStyles (context) {
  
  this["warframe"] = (_heatmap_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _heatmap_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"])
this["wow-classic"] = (_heatmap_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"].locals || _heatmap_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"])

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(
  _heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _heatmap_vue_vue_type_template_id_ad0bae16_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _heatmap_vue_vue_type_template_id_ad0bae16_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "ad0bae16",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _description_vue_vue_type_template_id_d2a68c24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1014);
/* harmony import */ var _description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(612);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _description_vue_vue_type_style_index_0_id_d2a68c24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(951);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _description_vue_vue_type_template_id_d2a68c24_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _description_vue_vue_type_template_id_d2a68c24_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "d2a68c24",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_style_index_0_id_d2a68c24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(614);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_style_index_0_id_d2a68c24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_style_index_0_id_d2a68c24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_style_index_0_id_d2a68c24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graph_value_comparison_vue_vue_type_template_id_2dc03a42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1011);
/* harmony import */ var _graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(615);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _graph_value_comparison_vue_vue_type_style_index_0_id_2dc03a42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(954);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _graph_value_comparison_vue_vue_type_template_id_2dc03a42_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _graph_value_comparison_vue_vue_type_template_id_2dc03a42_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "2dc03a42",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 953:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_style_index_0_id_74b9b083_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(619);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_style_index_0_id_74b9b083_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_style_index_0_id_74b9b083_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_style_index_0_id_74b9b083_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_style_index_0_id_2dc03a42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(620);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_style_index_0_id_2dc03a42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_style_index_0_id_2dc03a42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_style_index_0_id_2dc03a42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graph_value_quantity_vue_vue_type_template_id_54c05b6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1008);
/* harmony import */ var _graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(621);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _graph_value_quantity_vue_vue_type_style_index_0_id_54c05b6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(956);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _graph_value_quantity_vue_vue_type_template_id_54c05b6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _graph_value_quantity_vue_vue_type_template_id_54c05b6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "54c05b6e",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_style_index_0_id_54c05b6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(623);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_style_index_0_id_54c05b6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_style_index_0_id_54c05b6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_style_index_0_id_54c05b6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heatmap_quantity_vue_vue_type_template_id_6a5a2430_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1005);
/* harmony import */ var _heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(624);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _heatmap_quantity_vue_vue_type_style_index_0_id_6a5a2430_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(961);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _heatmap_quantity_vue_vue_type_template_id_6a5a2430_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _heatmap_quantity_vue_vue_type_template_id_6a5a2430_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "6a5a2430",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(628);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(629);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 960:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_2_id_ad0bae16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(630);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_2_id_ad0bae16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_2_id_ad0bae16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_2_id_ad0bae16_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_style_index_0_id_6a5a2430_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(631);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_style_index_0_id_6a5a2430_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_style_index_0_id_6a5a2430_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_style_index_0_id_6a5a2430_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heatmap_value_vue_vue_type_template_id_5c7a093c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1003);
/* harmony import */ var _heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(632);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _heatmap_value_vue_vue_type_template_id_5c7a093c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _heatmap_value_vue_vue_type_template_id_5c7a093c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "5c7a093c",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stats_vue_vue_type_template_id_809ceea4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1000);
/* harmony import */ var _stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(634);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _stats_vue_vue_type_style_index_0_id_809ceea4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(964);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _stats_vue_vue_type_template_id_809ceea4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _stats_vue_vue_type_template_id_809ceea4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "809ceea4",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_style_index_0_id_809ceea4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(636);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_style_index_0_id_809ceea4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_style_index_0_id_809ceea4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_style_index_0_id_809ceea4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(36);

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = __webpack_require__(411);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _utility = __webpack_require__(208);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'graphs',
  state: {
    itemId: '',
    uniqueName: '',
    slug: '',
    storage: {
      'graph-value-quantity': {},
      'graph-value-comparison': {},
      'heatmap-value': {},
      'heapmap-quantity': {}
    }
  },

  mutations: {
    setGraphItem: function setGraphItem(state, item) {
      state.itemId = item.itemId;
      state.uniqueName = item.uniqueName;
      state.slug = item.slug;
    },
    setGraphData: function setGraphData(state, _ref) {
      var graph = _ref.graph,
          item = _ref.item;

      item.data = item.data.map(function (x) {
        x.scannedAt = new Date(x.scannedAt).getTime();
        return x;
      });

      state.storage[graph] = { timerange: item.timerange, data: item.data };
    }
  },

  actions: {
    refetchGraphData: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2, _ref3) {
        var state = _ref2.state,
            commit = _ref2.commit;
        var graph = _ref3.graph,
            timerange = _ref3.timerange,
            regional = _ref3.regional;

        var itemId, slug, parallel, _ref5, _ref6, itemData, regionalData;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                itemId = state.itemId;
                slug = state.slug;
                parallel = [];

                parallel.push(this.$cubic.get('/wow-classic/v1/items/' + slug + '/' + itemId + '/prices?timerange=' + timerange));
                if (regional) parallel.push(this.$cubic.get('/wow-classic/v1/items/' + regional + '/' + itemId + '/prices?region=true&timerange=' + timerange));
                _context.next = 7;
                return _promise2.default.all(parallel);

              case 7:
                _ref5 = _context.sent;
                _ref6 = (0, _slicedToArray3.default)(_ref5, 2);
                itemData = _ref6[0];
                regionalData = _ref6[1];


                if (regional) itemData = _utility2.default.formatRegionalData(itemData, regionalData);
                commit('setGraphData', { graph: graph, item: itemData });

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function refetchGraphData(_x, _x2) {
        return _ref4.apply(this, arguments);
      }

      return refetchGraphData;
    }()
  }
};

/***/ }),

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_aaf8ccaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(637);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_aaf8ccaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_aaf8ccaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_aaf8ccaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/wow-classic/items/overview.vue?vue&type=template&id=aaf8ccaa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation'),_vm._v(" "),_c('item-header'),_vm._v(" "),_c('app-content',[_c('section',[_c('div',{staticClass:"container"},[_c('h2',{staticClass:"sub"},[_vm._v("\n          Item Overview\n        ")]),_vm._v(" "),_c('div',{staticClass:"row-margin"},[_c('div',{staticClass:"col-b column"},[_c('description')],1),_vm._v(" "),_c('stats',{staticClass:"col-b stats"})],1),_vm._v(" "),_c('ad',{attrs:{"name":"wow-classic-item-overview-main"}})],1)]),_vm._v(" "),(_vm.displayGraphs)?_c('section',[_c('div',{staticClass:"container"},[_c('h2',{staticClass:"sub"},[_vm._v("\n          Statistics\n        ")]),_vm._v(" "),_c('div',{staticClass:"mobile-hover-info"},[_c('span',[_vm._v("Click on the graphs to see more detailed information.")])]),_vm._v(" "),_c('div',{staticClass:"row-margin"},[_c('graph-value-quantity',{staticClass:"col-b graph"}),_vm._v(" "),_c('graph-value-comparison',{staticClass:"col-b graph"})],1),_vm._v(" "),_c('div',{staticClass:"row-margin"},[_c('heatmap-value',{staticClass:"col-b graph"}),_vm._v(" "),_c('heatmap-quantity',{staticClass:"col-b graph"})],1),_vm._v(" "),_c('ad',{attrs:{"name":"wow-classic-item-overview-statistics"}})],1)]):_vm._e()])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/wow-classic/items/overview.vue?vue&type=template&id=aaf8ccaa&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overview_vue_vue_type_template_id_aaf8ccaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(986);
/* harmony import */ var _overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(610);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _overview_vue_vue_type_style_index_0_id_aaf8ccaa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(966);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _overview_vue_vue_type_template_id_aaf8ccaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _overview_vue_vue_type_template_id_aaf8ccaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "aaf8ccaa",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

}]);