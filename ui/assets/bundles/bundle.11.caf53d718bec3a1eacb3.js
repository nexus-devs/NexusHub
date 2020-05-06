(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 1000:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/graph-doubleline.vue?vue&type=template&id=59b7f9cc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',{ref:"graphDoubleline",staticClass:"graph",class:{ optionsActive: _vm.optionsActive }},[_c('template',{slot:"header"},[_c('div',{staticClass:"title"},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/wow-classic/ui/trade.svg","alt":"Trade"}}),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_c('div',{staticClass:"legend-container"},[_c('div',{staticClass:"legend"},[_c('div',{staticClass:"primary"},[_c('span',{staticClass:"dot"}),_vm._v(" "+_vm._s(_vm.options.primary.name)+"\n        ")]),_vm._v(" "),_c('div',{staticClass:"secondary"},[_c('span',{staticClass:"dot"}),_vm._v(" "+_vm._s(_vm.options.secondary.name)+"\n        ")])])])]),_vm._v(" "),_c('template',{slot:"body"},[_c('doubleline',{attrs:{"data":_vm.data,"opts":_vm.doublelineOpts}})],1),_vm._v(" "),_c('template',{staticClass:"optionsActive",slot:"footer"},[_c('module-time',{attrs:{"days":_vm.timerange,"fn":_vm.setTimerange}}),_vm._v(" "),_c('div',{staticClass:"interactive",on:{"click":function($event){return _vm.toggleOptions('optionsActive')}}},[_c('img',{staticClass:"ico-h-20",class:{ active: _vm.optionsActive },attrs:{"src":"/img/ui/settings.svg","alt":"Options"}})]),_vm._v(" "),_c('div',{staticClass:"options",class:{ active: _vm.optionsActive }},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-b"},[_c('span',[_vm._v("Primary:")]),_vm._v(" "),_c('div',{staticClass:"dropdown-container"},[_c('div',{staticClass:"interactive",on:{"click":function($event){return _vm.toggleOptions('optionsPrimaryActive')}}},[_c('span',[_vm._v(_vm._s(_vm.options.primary.name))]),_vm._v(" "),_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/dropdown.svg","alt":"Dropdown"}})]),_vm._v(" "),_c('div',{staticClass:"dropdown",class:{ active: _vm.optionsPrimaryActive }},[_c('div',{staticClass:"dropdown-body"},_vm._l((_vm.valueEntries),function(entry){return _c('span',{key:'primary' + entry.key,class:{ selected: _vm.options.primary.key === entry.key },on:{"click":function($event){_vm.selectValueEntry('primary', entry); _vm.toggleOptions('optionsPrimaryActive')}}},[_vm._v("\n                  "+_vm._s(entry.name)+"\n                ")])}),0)])])]),_vm._v(" "),_c('div',{staticClass:"col-b"},[_c('span',[_vm._v("Secondary:")]),_vm._v(" "),_c('div',{staticClass:"dropdown-container"},[_c('div',{staticClass:"interactive",on:{"click":function($event){return _vm.toggleOptions('optionsSecondaryActive')}}},[_c('span',[_vm._v(_vm._s(_vm.options.secondary.name))]),_vm._v(" "),_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/dropdown.svg","alt":"Dropdown"}})]),_vm._v(" "),_c('div',{staticClass:"dropdown",class:{ active: _vm.optionsSecondaryActive }},[_c('div',{staticClass:"dropdown-body"},_vm._l((_vm.valueEntries),function(entry){return _c('span',{key:'secondary' + entry.key,class:{ selected: _vm.options.secondary.key === entry.key },on:{"click":function($event){_vm.selectValueEntry('secondary', entry); _vm.toggleOptions('optionsSecondaryActive')}}},[_vm._v("\n                  "+_vm._s(entry.name)+"\n                ")])}),0)])])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-b"},[_c('span',[_vm._v("Remove outliers:")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.options.outlier),expression:"options.outlier"}],domProps:{"value":(_vm.options.outlier)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.options, "outlier", $event.target.value)}}}),_vm._v(" "),_c('span',[_vm._v("%")])])])])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/graph-doubleline.vue?vue&type=template&id=59b7f9cc&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1001:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/graph-heatmap.vue?vue&type=template&id=134a50c0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',{ref:"graphHeatmap",staticClass:"graph",class:{ optionsActive: _vm.optionsActive }},[_c('template',{slot:"header"},[_c('div',{staticClass:"title"},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/wow-classic/ui/trade.svg","alt":"Trade"}}),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_c('div',{staticClass:"legend-container"},[_c('div',{staticClass:"legend"},[_c('div',{staticClass:"legend-above"},[_c('span',[_vm._v(_vm._s(_vm.legendStats.min))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.legendStats.max))])]),_vm._v(" "),_c('div',{staticClass:"legend-bar"},[_c('div',{staticClass:"medium-divide"})]),_vm._v(" "),_c('div',{staticClass:"legend-below"},[_c('span',[_vm._v(_vm._s(_vm.medium.label)+" ("+_vm._s(_vm.legendStats.medium)+")")])])])])]),_vm._v(" "),_c('template',{slot:"body"},[_c('heatmap',{attrs:{"data":_vm.data,"medium":_vm.medium.value,"opts":_vm.heatmapOpts}})],1),_vm._v(" "),_c('template',{staticClass:"optionsActive",slot:"footer"},[_c('module-time',{attrs:{"days":_vm.timerange,"fn":_vm.setTimerange}}),_vm._v(" "),_c('div',{staticClass:"interactive",on:{"click":function($event){return _vm.toggleOptions('optionsActive')}}},[_c('img',{staticClass:"ico-h-20",class:{ active: _vm.optionsActive },attrs:{"src":"/img/ui/settings.svg","alt":"Options"}})]),_vm._v(" "),_c('div',{staticClass:"options",class:{ active: _vm.optionsActive }},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-b"},[_c('span',[_vm._v("Primary:")]),_vm._v(" "),_c('div',{staticClass:"dropdown-container"},[_c('div',{staticClass:"interactive",on:{"click":function($event){return _vm.toggleOptions('optionsPrimaryActive')}}},[_c('span',[_vm._v(_vm._s(_vm.options.primary.name))]),_vm._v(" "),_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/dropdown.svg","alt":"Dropdown"}})]),_vm._v(" "),_c('div',{staticClass:"dropdown",class:{ active: _vm.optionsPrimaryActive }},[_c('div',{staticClass:"dropdown-body"},_vm._l((_vm.valueEntries),function(entry){return _c('span',{key:'primary' + entry.key,class:{ selected: _vm.options.primary.key === entry.key },on:{"click":function($event){_vm.selectValueEntry(entry); _vm.toggleOptions('optionsPrimaryActive')}}},[_vm._v("\n                  "+_vm._s(entry.name)+"\n                ")])}),0)])])]),_vm._v(" "),_c('div',{staticClass:"col-b"},[_c('span',[_vm._v("Remove outliers:")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.options.outlier),expression:"options.outlier"}],domProps:{"value":(_vm.options.outlier)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.options, "outlier", $event.target.value)}}}),_vm._v(" "),_c('span',[_vm._v("%")])])])])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/graph-heatmap.vue?vue&type=template&id=134a50c0&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1002:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/stats.vue?vue&type=template&id=6821f5c9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/wow-classic/ui/stats.svg","alt":"Statistics"}}),_vm._v(" "),_c('h3',[_vm._v("Item Stats")])]),_vm._v(" "),_c('template',{slot:"body"},[(!_vm.global)?_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("Last Updated")])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('span',[_vm._v(_vm._s(_vm.lastUpdated))])])]):_vm._e(),_vm._v(" "),(_vm.global && _vm.globalStats.EU)?_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("EU Market Value")])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('span',{staticClass:"data-price"},[_vm._v("\n          "+_vm._s(_vm.parsePrice(_vm.globalStats.EU.marketValue))+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.global.EU.marketValue < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.global.EU.marketValue}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.global.EU.marketValue))+"%\n        ")],1)])]):_vm._e(),_vm._v(" "),(_vm.global && _vm.globalStats.EU)?_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("EU Quantity (Avg)")])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('span',{staticClass:"data-price"},[_vm._v("\n          "+_vm._s(_vm.globalStats.EU.quantity)+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.global.EU.quantity < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.global.EU.quantity}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.global.EU.quantity))+"%\n        ")],1)])]):_vm._e(),_vm._v(" "),(_vm.global && _vm.globalStats.US)?_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("US Market Value")])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('span',{staticClass:"data-price"},[_vm._v("\n          "+_vm._s(_vm.parsePrice(_vm.globalStats.US.marketValue))+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.global.US.marketValue < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.global.US.marketValue}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.global.US.marketValue))+"%\n        ")],1)])]):_vm._e(),_vm._v(" "),(_vm.global && _vm.globalStats.US)?_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("US Quantity (Avg)")])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('span',{staticClass:"data-price"},[_vm._v("\n          "+_vm._s(_vm.globalStats.US.quantity)+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.global.US.quantity < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.global.US.quantity}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.global.US.quantity))+"%\n        ")],1)])]):_vm._e(),_vm._v(" "),(!_vm.global && _vm.item.stats && _vm.item.stats.current)?_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("Market Value")])]),_vm._v(" "),_c('div',{staticClass:"col-2",class:{ comparison: _vm.comparison }},[_c('span',{staticClass:"data-price",class:{ col: _vm.comparison }},[_vm._v("\n          "+_vm._s(_vm.parsePrice(_vm.stats.current.marketValue))+"\n        ")]),_vm._v(" "),(_vm.diff.marketValue !== 0 && !_vm.comparison)?_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.marketValue < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.marketValue}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.marketValue))+"%\n        ")],1):_vm._e(),_vm._v(" "),(_vm.comparison)?_c('div',{staticClass:"compare-container col-2"},[(_vm.comparison.current)?_c('span',{staticClass:"data-price"},[_vm._v("\n            "+_vm._s(_vm.parsePrice(_vm.comparison.current.marketValue))+"\n          ")]):_c('span',{staticClass:"data-price neutral"},[_vm._v("Unavailable")]),_vm._v(" "),(_vm.diff.comparison.marketValue !== 0)?_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.comparison.marketValue < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.comparison.marketValue}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.comparison.marketValue))+"%\n          ")],1):_vm._e(),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.compareServerPretty))])]):_vm._e()])]):_vm._e(),_vm._v(" "),(!_vm.global && _vm.item.stats && _vm.item.stats.current)?_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("Historical Value")])]),_vm._v(" "),_c('div',{staticClass:"col-2",class:{ comparison: _vm.comparison }},[_c('span',{staticClass:"data-price",class:{ col: _vm.comparison }},[_vm._v("\n          "+_vm._s(_vm.parsePrice(_vm.stats.current.historicalValue))+"\n        ")]),_vm._v(" "),(_vm.diff.historicalValue !== 0 && !_vm.comparison)?_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.historicalValue < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.historicalValue}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.historicalValue))+"%\n        ")],1):_vm._e(),_vm._v(" "),(_vm.comparison)?_c('div',{staticClass:"compare-container col-2"},[(_vm.comparison.current)?_c('span',{staticClass:"data-price"},[_vm._v("\n            "+_vm._s(_vm.parsePrice(_vm.comparison.current.historicalValue))+"\n          ")]):_c('span',{staticClass:"data-price neutral"},[_vm._v("Unavailable")]),_vm._v(" "),(_vm.diff.comparison.historicalValue !== 0)?_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.comparison.historicalValue < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.comparison.historicalValue}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.comparison.historicalValue))+"%\n          ")],1):_vm._e(),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.compareServerPretty))])]):_vm._e()])]):_vm._e(),_vm._v(" "),(!_vm.global && _vm.item.stats && _vm.item.stats.current)?_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("Minimum Buyout")])]),_vm._v(" "),(_vm.stats.current.minBuyout > 0)?_c('div',{staticClass:"col-2",class:{ comparison: _vm.comparison }},[_c('span',{staticClass:"data-price",class:{ col: _vm.comparison }},[_vm._v("\n          "+_vm._s(_vm.parsePrice(_vm.stats.current.minBuyout))+"\n        ")]),_vm._v(" "),(_vm.diff.minBuyout !== 0 && !_vm.comparison)?_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.minBuyout < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.minBuyout}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.minBuyout))+"%\n        ")],1):_vm._e(),_vm._v(" "),(_vm.comparison)?_c('div',{staticClass:"compare-container col-2"},[(_vm.comparison.current && _vm.comparison.current.minBuyout > 0)?_c('span',{staticClass:"data-price"},[_vm._v("\n            "+_vm._s(_vm.parsePrice(_vm.comparison.current.minBuyout))+"\n          ")]):_c('span',{staticClass:"data-price neutral"},[_vm._v("Unavailable")]),_vm._v(" "),(_vm.diff.comparison.minBuyout !== 0 && _vm.comparison.current.minBuyout > 0)?_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.comparison.minBuyout < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.comparison.minBuyout}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.comparison.minBuyout))+"%\n          ")],1):_vm._e(),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.compareServerPretty))])]):_vm._e()]):_c('div',{staticClass:"col-2"},[_c('span',{staticClass:"data-price neutral"},[_vm._v("Unavailable")])])]):_vm._e(),_vm._v(" "),(!_vm.global && _vm.item.stats && _vm.item.stats.current)?_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("Quantity")])]),_vm._v(" "),_c('div',{staticClass:"col-2",class:{ comparison: _vm.comparison }},[_c('span',{staticClass:"data-price",class:{ col: _vm.comparison }},[_vm._v("\n          "+_vm._s(_vm.stats.current.quantity)+"\n        ")]),_vm._v(" "),(_vm.diff.quantity !== 0 && !_vm.comparison)?_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.quantity < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.quantity}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.quantity))+"%\n        ")],1):_vm._e(),_vm._v(" "),(_vm.comparison)?_c('div',{staticClass:"compare-container col-2"},[(_vm.comparison.current)?_c('span',{staticClass:"data-price"},[_vm._v("\n            "+_vm._s(_vm.comparison.current.quantity)+"\n          ")]):_c('span',{staticClass:"data-price neutral"},[_vm._v("Unavailable")]),_vm._v(" "),(_vm.diff.comparison.quantity !== 0)?_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.comparison.quantity < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.comparison.quantity}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.comparison.quantity))+"%\n          ")],1):_vm._e(),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.compareServerPretty))])]):_vm._e()])]):_vm._e(),_vm._v(" "),(_vm.item.contentPhase)?_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("Content Phase")])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('span',{staticClass:"data-price"},[_vm._v("\n          "+_vm._s(_vm.item.contentPhase)+"\n        ")])])]):_vm._e(),_vm._v(" "),(_vm.item.vendorPrice)?_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("Vendor Price")])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('span',{staticClass:"data-price"},[_vm._v("\n          "+_vm._s(_vm.parsePrice(_vm.item.vendorPrice))+"\n        ")])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col-2 item-link-label"},[_c('span',[_vm._v("Ingame Item Link")])]),_vm._v(" "),_c('div',{staticClass:"col-3"},[_c('input',{ref:"itemLink",staticClass:"item-link",attrs:{"type":"text","readonly":""},domProps:{"value":_vm.item.itemLink},on:{"click":function($event){return _vm.copyToClipboard()}}})]),_vm._v(" "),_c('div',{staticClass:"col item-link-copied"},[_c('span',{staticClass:"item-link-copy-confirmed",class:{ active: _vm.copied }},[_vm._v("Copied!")])])])]),_vm._v(" "),_c('template',{slot:"footer"},[(!_vm.global)?_c('compare-server',{attrs:{"fn":_vm.compareServer,"active-server":_vm.comparisonActiveServer}}):_vm._e(),_vm._v(" "),_c('a',{attrs:{"href":"https://www.tradeskillmaster.com/","target":"_blank"}},[_vm._v("\n      Powered by TSM\n      "),_c('img',{staticClass:"ico-20",attrs:{"src":"/img/ui/arrow-right.svg","alt":"Powered by TSM"}})])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/stats.vue?vue&type=template&id=6821f5c9&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/charts/overhaul/heatmap.vue?vue&type=template&id=6bef5dc3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"heatmap"},[_c('svg')])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/charts/overhaul/heatmap.vue?vue&type=template&id=6bef5dc3&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/charts/overhaul/doubleline.vue?vue&type=template&id=2135be9a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"doubleline"},[_c('svg')])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/charts/overhaul/doubleline.vue?vue&type=template&id=2135be9a&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_vue_vue_type_template_id_13c4c517_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(355);
/* harmony import */ var _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(184);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(352);
/* harmony import */ var _module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(353);
/* harmony import */ var _module_vue_vue_type_style_index_2_id_13c4c517_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(354);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);










function injectStyles (context) {
  
  this["warframe"] = (_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"])
this["wow-classic"] = (_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"].locals || _module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"])

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(
  _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _module_vue_vue_type_template_id_13c4c517_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _module_vue_vue_type_template_id_13c4c517_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "13c4c517",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 180:
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

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"indicator":"warframe_indicator_1spmD"};

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"indicator":"wow-classic_indicator_GhxVb"};

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = __webpack_require__(35);

var _theme2 = _interopRequireDefault(_theme);

var _progress = __webpack_require__(82);

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

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"module":"warframe_module_kCFyr","header":"warframe_header_2nKQS","footer":"warframe_footer_1kr-S"};

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"module":"wow-classic_module_2l8-b","header":"wow-classic_header_g9KLN","footer":"wow-classic_footer_19f0t"};

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indicator_vue_vue_type_template_id_7c937518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(356);
/* harmony import */ var _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(179);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(348);
/* harmony import */ var _indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(349);
/* harmony import */ var _indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(350);
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

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(208), __esModule: true };

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(206);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(209);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(7);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(210) });


/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(9);
var getKeys = __webpack_require__(59);
var gOPS = __webpack_require__(211);
var pIE = __webpack_require__(212);
var toObject = __webpack_require__(58);
var IObject = __webpack_require__(81);
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

/***/ 211:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 212:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(214);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 214:
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

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"dropdown":"warframe_dropdown_h8zz3","body":"warframe_body_2goxA"};

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"dropdown":"wow-classic_dropdown_i5aP_","body":"wow-classic_body_1naDm"};

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(181);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(182);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(183);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(187);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_13c4c517_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(188);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_13c4c517_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_13c4c517_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_13c4c517_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/module.vue?vue&type=template&id=13c4c517&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"module",class:_vm.theme.module},[_c('div',{staticClass:"header",class:_vm.theme.header},[_vm._t("header")],2),_vm._v(" "),_c('div',{staticClass:"body"},[_vm._t("body")],2),_vm._v(" "),_c('div',{staticClass:"footer",class:_vm.theme.footer},[_vm._t("footer")],2),_vm._v(" "),_c('progressbar',{ref:"progress"})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/module.vue?vue&type=template&id=13c4c517&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/charts/indicator.vue?vue&type=template&id=7c937518&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"indicator",class:[{ negative: _vm.diff < 0, positive: _vm.diff > 0, reverse: _vm.reverse }, _vm.theme.indicator],attrs:{"height":"10px","width":"7px","overflow":"visible"}},[_c('path',{attrs:{"transform":("translate(" + (_vm.x || 0) + ", " + (_vm.y || 0) + ")"),"d":_vm.diff < 0 ? _vm.negative : _vm.positive}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/charts/indicator.vue?vue&type=template&id=7c937518&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(167);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = __webpack_require__(61);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  parsePrice: function parsePrice(price) {
    var gold = Math.floor(price / 10000);
    var silver = Math.floor(price / 100 - gold * 100);
    var copper = price - gold * 10000 - silver * 100;

    var string = '';
    if (gold) string += gold + 'g ';
    if (silver) string += silver + 's ';
    string += copper + 'c';
    return string;
  },
  interpolateValues: function interpolateValues(primary, secondary, xKey) {
    if (!primary.length || !secondary.length) return [];

    var interpolated = [];
    var yKeys = (0, _keys2.default)(secondary[0]).filter(function (k) {
      return k !== xKey;
    });

    var _loop = function _loop(primaryEntry) {
      var primaryX = primaryEntry[xKey];
      var before = secondary.slice().reverse().find(function (s) {
        return s[xKey] <= primaryX;
      });
      var after = secondary.find(function (s) {
        return s[xKey] >= primaryX;
      });

      var iplElem = {};
      iplElem[xKey] = primaryX;

      if (!before && !after) return 'continue';else if (before && after) {
          var iplPct = (primaryX - before[xKey]) / (after[xKey] - before[xKey]);
          if (isNaN(iplPct)) iplPct = 0;var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = (0, _getIterator3.default)(yKeys), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var yKey = _step2.value;
              iplElem[yKey] = Math.round(before[yKey] * (1 - iplPct) + after[yKey] * iplPct);
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
            var matchingElem = before || after;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = (0, _getIterator3.default)(yKeys), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _yKey = _step3.value;
                iplElem[_yKey] = matchingElem[_yKey];
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

      interpolated.push(iplElem);
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(primary), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var primaryEntry = _step.value;

        var _ret = _loop(primaryEntry);

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

    return interpolated;
  }
};

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_time_vue_vue_type_template_id_ee2ae558_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(422);
/* harmony import */ var _module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(213);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(383);
/* harmony import */ var _module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(384);
/* harmony import */ var _module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(385);
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

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(413);

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

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(215);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 400:
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
webpackContext.id = 400;

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(414), __esModule: true };

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
__webpack_require__(77);
module.exports = __webpack_require__(415);


/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(60);
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

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ['fn', 'activeServer'],

  data: function data() {
    return {
      active: false,
      selected: {
        region: '',
        server: ''
      }
    };
  },


  computed: {
    activeFactionPretty: function activeFactionPretty() {
      return this.activeServer.faction.charAt(0).toUpperCase() + this.activeServer.faction.slice(1);
    },
    serverlist: function serverlist() {
      return {
        EU: this.$store.state.servers.serverlist.filter(function (s) {
          return s.region === 'EU';
        }),
        US: this.$store.state.servers.serverlist.filter(function (s) {
          return s.region === 'US';
        })
      };
    }
  },

  methods: {
    toggle: function toggle() {
      this.active = !this.active;
      if (!this.active) this.selectRegion('');
    },
    selectRegion: function selectRegion(region) {
      if (region === this.selected.region) this.selected.region = '';else this.selected.region = region;
      this.selected.server = '';
    },
    selectServer: function selectServer(server) {
      if (server === this.selected.server) this.selected.server = '';else this.selected.server = server.slug;
    }
  }
};

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(37);

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = __webpack_require__(376);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _items = __webpack_require__(609);

var _items2 = _interopRequireDefault(_items);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  asyncData: function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
      var store = _ref.store,
          route = _ref.route;

      var item, slug, parallel, _ref3, _ref4, itemData, comparisonData;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              item = route.params.item;
              slug = route.params.slug;

              if (!(store.state.items.item.uniqueName !== item || store.state.items.item.server !== slug)) {
                _context.next = 14;
                break;
              }

              parallel = [];

              parallel.push(this.$cubic.get('/wow-classic/v1' + (slug ? '/items/' + slug + '/' : '/item/') + item));

              if (slug && store.state.items.itemComparison.server.slug && store.state.items.item.server === slug) {
                parallel.push(this.$cubic.get('/wow-classic/v1/items/' + store.state.items.itemComparison.server.slug + '/' + item));
              }

              _context.next = 8;
              return _promise2.default.all(parallel);

            case 8:
              _ref3 = _context.sent;
              _ref4 = (0, _slicedToArray3.default)(_ref3, 2);
              itemData = _ref4[0];
              comparisonData = _ref4[1];

              store.commit('setItem', itemData);
              if (comparisonData) store.commit('setItemComparison', { item: comparisonData, server: false });

            case 14:
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

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/module-time.vue?vue&type=template&id=ee2ae558&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"module-time"},[_c('div',{staticClass:"interactive",on:{"click":_vm.toggle}},[_c('span',[_vm._v("Last "+_vm._s(_vm.days)+" days")]),_vm._v(" "),_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/dropdown.svg","alt":"Dropdown"}})]),_vm._v(" "),_c('div',{staticClass:"dropdown",class:[{ active: _vm.active }, _vm.theme.dropdown]},[_c('div',{staticClass:"body",class:_vm.theme.body},[_c('span',{class:{ active: _vm.days === 7 },on:{"click":function($event){_vm.fn(7); _vm.toggle()}}},[_vm._v("Last 7 days")]),_vm._v(" "),_c('span',{class:{ active: _vm.days === 30 },on:{"click":function($event){_vm.fn(30); _vm.toggle()}}},[_vm._v("Last 30 days")]),_vm._v(" "),_c('span',{class:{ active: _vm.days === 90 },on:{"click":function($event){_vm.fn(90); _vm.toggle()}}},[_vm._v("Last 90 days")])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/module-time.vue?vue&type=template&id=ee2ae558&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(452);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(453), __esModule: true };

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
__webpack_require__(454);
module.exports = __webpack_require__(2).Array.from;


/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(13);
var $export = __webpack_require__(7);
var toObject = __webpack_require__(58);
var call = __webpack_require__(85);
var isArrayIter = __webpack_require__(86);
var toLength = __webpack_require__(63);
var createProperty = __webpack_require__(455);
var getIterFn = __webpack_require__(79);

$export($export.S + $export.F * !__webpack_require__(87)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(12);
var createDesc = __webpack_require__(62);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compare_server_vue_vue_type_template_id_1d38d786_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(661);
/* harmony import */ var _compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(416);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _compare_server_vue_vue_type_style_index_0_id_1d38d786_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(588);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _compare_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _compare_server_vue_vue_type_template_id_1d38d786_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _compare_server_vue_vue_type_template_id_1d38d786_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "1d38d786",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_style_index_0_id_1d38d786_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(418);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_style_index_0_id_1d38d786_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_style_index_0_id_1d38d786_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_compare_server_vue_vue_type_style_index_0_id_1d38d786_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_vue_vue_type_template_id_50ff381a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(655);
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(419);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _header_vue_vue_type_style_index_0_id_50ff381a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(610);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_50ff381a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _header_vue_vue_type_template_id_50ff381a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "50ff381a",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 609:
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
    itemComparison: {
      server: {
        slug: '',
        name: '',
        region: '',
        faction: ''
      },
      current: null,
      previous: null
    },
    graphs: {
      'marketValue-quantity': {},
      'regional-comparison': {},
      'heatmap-primary': {},
      'heatmap-secondary': {},
      'overview-eu': {},
      'overview-us': {}
    }
  },

  mutations: {
    setItem: function setItem(state, item) {
      state.item = item;
    },
    setItemComparison: function setItemComparison(state, _ref) {
      var item = _ref.item,
          server = _ref.server;

      state.itemComparison.current = item.stats.current;
      state.itemComparison.previous = item.stats.previous;
      if (server) state.itemComparison.server = server;
    },
    setGraph: function setGraph(state, _ref2) {
      var graph = _ref2.graph,
          data = _ref2.data,
          timerange = _ref2.timerange;

      state.graphs[graph] = { timerange: timerange, data: data };
    }
  },

  actions: {
    fetchItemComparison: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref3, server) {
        var state = _ref3.state,
            commit = _ref3.commit;
        var itemId, item;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                itemId = state.item.itemId;
                _context.next = 3;
                return this.$cubic.get('/wow-classic/v1/items/' + server.slug + '/' + itemId);

              case 3:
                item = _context.sent;

                commit('setItemComparison', { item: item, server: server });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchItemComparison(_x, _x2) {
        return _ref4.apply(this, arguments);
      }

      return fetchItemComparison;
    }()
  }
};

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_50ff381a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(421);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_50ff381a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_50ff381a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_50ff381a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(613);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(167);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(207);

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__(37);

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = __webpack_require__(376);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nitroAds = __webpack_require__(173);

var _nitroAds2 = _interopRequireDefault(_nitroAds);

var _appContent = __webpack_require__(171);

var _appContent2 = _interopRequireDefault(_appContent);

var _description = __webpack_require__(936);

var _description2 = _interopRequireDefault(_description);

var _graphDoubleline = __webpack_require__(938);

var _graphDoubleline2 = _interopRequireDefault(_graphDoubleline);

var _graphHeatmap = __webpack_require__(942);

var _graphHeatmap2 = _interopRequireDefault(_graphHeatmap);

var _header = __webpack_require__(608);

var _header2 = _interopRequireDefault(_header);

var _meta = __webpack_require__(169);

var _meta2 = _interopRequireDefault(_meta);

var _wowClassic = __webpack_require__(424);

var _wowClassic2 = _interopRequireDefault(_wowClassic);

var _stats = __webpack_require__(946);

var _stats2 = _interopRequireDefault(_stats);

var _utility = __webpack_require__(367);

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
    graphDoubleline: _graphDoubleline2.default,
    graphHeatmap: _graphHeatmap2.default
  },

  asyncData: function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
      var store = _ref.store,
          route = _ref.route;

      var item, slug, _ref3, _ref4, euPrices, usPrices, _ref5, _ref6, priceData, regionalPrices, localPrices, interpolatedRegional;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              item = route.params.item;
              slug = route.params.slug;

              if (slug) {
                _context.next = 13;
                break;
              }

              _context.next = 5;
              return _promise2.default.all([this.$cubic.get('/wow-classic/v1/items/eu/' + item + '/prices?region=true'), this.$cubic.get('/wow-classic/v1/items/us/' + item + '/prices?region=true')]);

            case 5:
              _ref3 = _context.sent;
              _ref4 = (0, _slicedToArray3.default)(_ref3, 2);
              euPrices = _ref4[0];
              usPrices = _ref4[1];


              store.commit('setGraph', {
                graph: 'overview-eu',
                data: euPrices.data,
                timerange: 7
              });
              store.commit('setGraph', {
                graph: 'overview-us',
                data: usPrices.data,
                timerange: 7
              });

              _context.next = 25;
              break;

            case 13:
              _context.next = 15;
              return _promise2.default.all([this.$cubic.get('/wow-classic/v1/items/' + slug + '/' + item + '/prices?timerange=30'), this.$cubic.get('/wow-classic/v1/items/' + store.state.servers.activeServer.region + '/' + item + '/prices?region=true')]);

            case 15:
              _ref5 = _context.sent;
              _ref6 = (0, _slicedToArray3.default)(_ref5, 2);
              priceData = _ref6[0];
              regionalPrices = _ref6[1];
              localPrices = priceData.data.filter(function (d) {
                return new Date(d.scannedAt) >= new Date(Date.now() - 1000 * 60 * 60 * 24 * 7);
              });
              interpolatedRegional = _utility2.default.interpolateValues(localPrices.map(function (p) {
                return (0, _extends3.default)({}, p, { scannedAt: new Date(p.scannedAt).getTime() });
              }), regionalPrices.data.map(function (p) {
                return (0, _extends3.default)({}, p, { scannedAt: new Date(p.scannedAt).getTime() });
              }), 'scannedAt');


              store.commit('setGraph', {
                graph: 'marketValue-quantity',
                data: localPrices,
                timerange: 7
              });
              store.commit('setGraph', {
                graph: 'regional-comparison',
                data: localPrices.map(function (d, i) {
                  return (0, _extends3.default)({}, d, {
                    regionalMarketValue: interpolatedRegional[i].marketValue,
                    regionalMinBuyout: interpolatedRegional[i].minBuyout,
                    regionalQuantity: interpolatedRegional[i].quantity
                  });
                }),
                timerange: 7
              });
              store.commit('setGraph', {
                graph: 'heatmap-primary',
                data: priceData.data,
                timerange: 30
              });
              store.commit('setGraph', {
                graph: 'heatmap-secondary',
                data: priceData.data,
                timerange: 30
              });

            case 25:
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
    global: function global() {
      return !this.server.slug;
    },
    item: function item() {
      return this.$store.state.items.item;
    },
    server: function server() {
      return this.$store.state.servers.activeServer;
    },
    serverPretty: function serverPretty() {
      return this.server.name + ' ' + (this.server.faction.charAt(0).toUpperCase() + this.server.faction.slice(1));
    },
    regionPretty: function regionPretty() {
      return this.server.region.toUpperCase();
    },
    showGraph: function showGraph() {
      var hideCounter = 0;
      var storages = ['marketValue-quantity', 'regional-comparison', 'heatmap-primary', 'heatmap-secondary'];
      var returnObj = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(storages), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var storage = _step.value;

          returnObj[storage] = this.$store.state.items.graphs[storage].data && this.$store.state.items.graphs[storage].data.length;
          if (!returnObj[storage]) hideCounter++;
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

      return (0, _extends3.default)({ hideAll: hideCounter === storages.length }, returnObj);
    },
    valueEntriesLocal: function valueEntriesLocal() {
      return [{
        name: 'Market Value',
        key: 'marketValue',
        area: false,
        price: true
      }, {
        name: 'Quantity',
        key: 'quantity',
        area: true,
        price: false
      }, {
        name: 'Min Buyout',
        key: 'minBuyout',
        area: false,
        price: true
      }];
    },
    valueEntriesRegional: function valueEntriesRegional() {
      var localEntries = this.valueEntriesLocal.slice();
      return [localEntries[0], {
        name: this.regionPretty + ' Market Value',
        key: 'regionalMarketValue',
        area: false,
        price: true
      }, localEntries[1], {
        name: this.regionPretty + ' Quantity',
        key: 'regionalQuantity',
        area: true,
        price: false
      }, localEntries[2], {
        name: this.regionPretty + ' Min Buyout',
        key: 'regionalMinBuyout',
        area: false,
        price: true
      }];
    },
    valueEntriesGlobal: function valueEntriesGlobal() {
      return ['EU', 'US'].map(function (region) {
        return [{
          name: region + ' Market Value',
          key: 'marketValue',
          area: false,
          price: true
        }, {
          name: region + ' Quantity',
          key: 'quantity',
          area: true,
          price: false
        }, {
          name: region + ' Min Buyout',
          key: 'minBuyout',
          area: false,
          price: true
        }];
      });
    }
  },

  methods: {
    refetchLocalGraph: function () {
      var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(timerange) {
        var slug, itemId, item;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                slug = this.$store.state.servers.activeServer.slug;
                itemId = this.$store.state.items.item.itemId;
                _context2.next = 4;
                return this.$cubic.get('/wow-classic/v1/items/' + slug + '/' + itemId + '/prices?timerange=' + timerange);

              case 4:
                item = _context2.sent;
                _context2.next = 7;
                return this.$store.commit('setGraph', {
                  graph: 'marketValue-quantity',
                  data: item.data,
                  timerange: timerange
                });

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function refetchLocalGraph(_x2) {
        return _ref7.apply(this, arguments);
      }

      return refetchLocalGraph;
    }(),
    refetchRegionalGraph: function () {
      var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(timerange) {
        var slug, itemId, region, _ref9, _ref10, localPrices, regionalPrices, interpolatedRegional;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                slug = this.$store.state.servers.activeServer.slug;
                itemId = this.$store.state.items.item.itemId;
                region = this.$store.state.servers.activeServer.region.toLowerCase();
                _context3.next = 5;
                return _promise2.default.all([this.$cubic.get('/wow-classic/v1/items/' + slug + '/' + itemId + '/prices?timerange=' + timerange), this.$cubic.get('/wow-classic/v1/items/' + region + '/' + itemId + '/prices?region=true&timerange=' + timerange)]);

              case 5:
                _ref9 = _context3.sent;
                _ref10 = (0, _slicedToArray3.default)(_ref9, 2);
                localPrices = _ref10[0];
                regionalPrices = _ref10[1];
                interpolatedRegional = _utility2.default.interpolateValues(localPrices.data.map(function (p) {
                  return (0, _extends3.default)({}, p, { scannedAt: new Date(p.scannedAt).getTime() });
                }), regionalPrices.data.map(function (p) {
                  return (0, _extends3.default)({}, p, { scannedAt: new Date(p.scannedAt).getTime() });
                }), 'scannedAt');
                _context3.next = 12;
                return this.$store.commit('setGraph', {
                  graph: 'regional-comparison',
                  data: localPrices.data.map(function (d, i) {
                    return (0, _extends3.default)({}, d, {
                      regionalMarketValue: interpolatedRegional[i].marketValue,
                      regionalMinBuyout: interpolatedRegional[i].minBuyout,
                      regionalQuantity: interpolatedRegional[i].quantity
                    });
                  }),
                  timerange: timerange
                });

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function refetchRegionalGraph(_x3) {
        return _ref8.apply(this, arguments);
      }

      return refetchRegionalGraph;
    }(),
    refetchGlobalGraph: function refetchGlobalGraph(region) {
      var _this = this;

      return function () {
        var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(timerange) {
          var itemId, itemData;
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  itemId = _this.$store.state.items.item.itemId;
                  _context4.next = 3;
                  return _this.$cubic.get('/wow-classic/v1/items/' + region + '/' + itemId + '/prices?region=true&timerange=' + timerange);

                case 3:
                  itemData = _context4.sent;

                  _this.$store.commit('setGraph', {
                    graph: 'overview-' + region,
                    data: itemData.data,
                    timerange: timerange
                  });

                case 5:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this);
        }));

        return function (_x4) {
          return _ref11.apply(this, arguments);
        };
      }();
    }
  },

  head: function head() {
    var serverPretty = this.server.name + ' (' + (this.server.faction.charAt(0).toUpperCase() + this.server.faction.slice(1)) + ')';

    return {
      title: this.server.slug ? this.item.name + ' Prices on ' + serverPretty + ' \xB7 NexusHub' : this.item.name + ' Prices on the WoW Classic Auction House \xB7 NexusHub',
      link: this.server.slug ? [{ rel: 'canonical', href: 'https://nexushub.co/wow-classic/items/' + this.item.uniqueName }] : undefined,
      meta: (0, _meta2.default)({
        title: this.item.name + ' Prices on NexusHub',
        description: this.server.slug ? this.item.name + ' Prices on the World of Warcaft Classic Auction House for ' + serverPretty : this.item.name + ' Prices on the World of Warcaft Classic Auction House.',
        image: '' + this.item.icon
      })
    };
  }
};

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(615);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module2 = __webpack_require__(172);

var _module3 = _interopRequireDefault(_module2);

var _utility = __webpack_require__(367);

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

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(618);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _doubleline = __webpack_require__(939);

var _doubleline2 = _interopRequireDefault(_doubleline);

var _module2 = __webpack_require__(172);

var _module3 = _interopRequireDefault(_module2);

var _moduleTime = __webpack_require__(375);

var _moduleTime2 = _interopRequireDefault(_moduleTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    module: _module3.default,
    doubleline: _doubleline2.default,
    moduleTime: _moduleTime2.default
  },

  props: ['valueEntries', 'title', 'storage', 'refetchFn'],

  data: function data() {
    return {
      optionsActive: false,
      optionsPrimaryActive: false,
      optionsSecondaryActive: false,
      options: {
        outlier: 10,
        primary: this.valueEntries[0],
        secondary: this.valueEntries[1]
      }
    };
  },


  computed: {
    timerange: function timerange() {
      return this.$store.state.items.graphs[this.storage].timerange;
    },
    data: function data() {
      var _this = this;

      if (!this.$store.state.items.graphs[this.storage].data) return [];
      var data = this.$store.state.items.graphs[this.storage].data.map(function (d) {
        return {
          x: new Date(d.scannedAt),
          y1: d[_this.options.primary.key],
          y2: d[_this.options.secondary.key]
        };
      });

      var medianArr = data.slice(0).sort(function (a, b) {
        return a.y1 - b.y1;
      });
      var len = medianArr.length;
      var median = len ? len % 2 ? medianArr[Math.floor(len / 2)].y1 : (medianArr[len / 2].y1 + medianArr[len / 2 - 1].y1) / 2 : 0;

      return data.filter(function (d) {
        return median / d.y1 > _this.options.outlier / 100 && d.y1 > median * (_this.options.outlier / 100);
      });
    },
    doublelineOpts: function doublelineOpts() {
      return {
        secondaryLabel: this.options.secondary.name,
        secondaryScale: this.options.primary.price !== this.options.secondary.price,
        parsePrice: { primary: this.options.primary.price, secondary: this.options.secondary.price },
        areaChart: { primary: this.options.primary.area, secondary: this.options.secondary.area }
      };
    }
  },

  methods: {
    selectValueEntry: function selectValueEntry(value, entry) {
      if (this.options[value].key === entry.key) return;
      this.options[value] = entry;
    },
    toggleOptions: function toggleOptions(dropdown) {
      this[dropdown] = !this[dropdown];
    },
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

                this.$refs.graphDoubleline.$refs.progress.start();
                _context.next = 5;
                return this.refetchFn(timerange);

              case 5:
                this.$refs.graphDoubleline.$refs.progress.finish();

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

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(620);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(207);

var _extends3 = _interopRequireDefault(_extends2);

var _d = __webpack_require__(425);

var d3 = _interopRequireWildcard(_d);

var _utility = __webpack_require__(367);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['data', 'opts'],
  data: function data() {
    return {
      svg: '',
      tooltip: '',
      chart: '',
      bisect: null,
      padding: {
        top: 20,
        bottom: 20 + 16,
        left: 25,
        right: 25
      },
      breakpointSmall: 640
    };
  },


  computed: {
    options: function options() {
      var defaultOptions = {
        secondaryLabel: '',
        secondaryScale: true,
        parsePrice: { primary: true, secondary: false },
        areaChart: { primary: false, secondary: true }
      };
      return (0, _extends3.default)({}, defaultOptions, this.opts);
    }
  },

  watch: {
    data: function data(newData, oldData) {
      this.onResize(false);
    }
  },

  mounted: function mounted() {
    this.svg = d3.select(this.$el).select('svg');
    this.tooltip = d3.select(this.$el).append('div').attr('class', 'tooltip').style('display', 'none');
    this.tooltip.append('div').attr('class', 'tooltip-date');
    this.tooltip.append('div').attr('class', 'tooltip-value');
    this.tooltip.append('div').attr('class', 'tooltip-value tooltip-value-2');
    this.bisect = d3.bisector(function (d) {
      return d.x.getTime();
    }).left;

    window.addEventListener('resize', this.onResize);
    this.createChart();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },


  methods: {
    onResize: function onResize() {
      var _this = this;

      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      setTimeout(function () {
        _this.svg.selectAll('*').remove();
        _this.createChart();
      }, delay ? 100 : 0);
    },
    createChart: function createChart() {
      var options = this.options;
      var data = this.data;
      var tooltip = this.tooltip;
      var bisect = this.bisect;
      var padding = (0, _extends3.default)({}, this.padding);
      var smallDevice = window.innerWidth <= this.breakpointSmall;

      var yExtents1 = d3.extent(data, function (d) {
        return d.y1;
      });
      var yExtents2 = d3.extent(data, function (d) {
        return d.y2;
      });
      if (!this.options.secondaryScale) {
        if (yExtents2[0] < yExtents1[0]) yExtents1[0] = yExtents2[0];
        if (yExtents2[1] > yExtents1[1]) yExtents1[1] = yExtents2[1];
      }
      var yPadding1 = Math.round((yExtents1[1] - yExtents1[0]) / 6);
      var yScale1Min = this.options.areaChart.primary || yExtents1[0] - yPadding1 < 0 ? 0 : yExtents1[0] - yPadding1;
      var yScale1 = d3.scaleLinear().range([200, 0]).domain([yScale1Min, yExtents1[1] + yPadding1]);
      var yPadding2 = Math.round((yExtents2[1] - yExtents2[0]) / 6);
      var yScale2Min = this.options.areaChart.secondary || yExtents2[0] - yPadding2 < 0 ? 0 : yExtents2[0] - yPadding2;
      var yScale2 = this.options.secondaryScale ? d3.scaleLinear().range([200, 0]).domain([yScale2Min, yExtents2[1] + yPadding2]) : yScale1;

      if (!smallDevice) {
        var fakeAxis1 = this.createAxisY1(this.svg, yScale1);
        var fakeAxis2 = this.createAxisY2(this.svg, yScale2, 200);
        padding.left += d3.max(fakeAxis1.selectAll('.tick > text').nodes(), function (t) {
          return t.getBoundingClientRect().width;
        });
        padding.right += this.options.secondaryScale ? d3.max(fakeAxis2.selectAll('.tick > text').nodes(), function (t) {
          return t.getBoundingClientRect().width;
        }) : 0;
        fakeAxis1.remove();
        fakeAxis2.remove();
      } else {
        padding.left = 10;
        padding.right = 10;
      }

      var boundingBox = this.svg.node().getBoundingClientRect();
      var height = boundingBox.height - padding.top - padding.bottom;
      var width = boundingBox.width - padding.left - padding.right;

      this.chart = this.svg.append('g').attr('transform', 'translate(' + padding.left + ', ' + padding.top + ')');

      yScale1.range([height, 0]);
      yScale2.range([height, 0]);
      var xScale = d3.scaleTime().range([0, width]).domain(d3.extent(data, function (d) {
        return d.x;
      }));

      this.chart.append('path').datum(data).attr('class', 'line-2 ' + (this.options.areaChart.secondary ? 'area-2' : '')).attr('fill', this.options.areaChart.secondary ? undefined : 'none').attr('stroke-width', 1.5).attr('d', this.options.areaChart.secondary ? d3.area().x(function (d) {
        return xScale(d.x);
      }).y0(yScale2(yScale2.domain()[0])).y1(function (d) {
        return yScale2(d.y2);
      }) : d3.line().x(function (d) {
        return xScale(d.x);
      }).y(function (d) {
        return yScale2(d.y2);
      }));
      this.chart.append('path').datum(data).attr('class', 'line-1 ' + (this.options.areaChart.primary ? 'area-1' : '')).attr('fill', this.options.areaChart.primary ? undefined : 'none').attr('stroke-width', 1.5).attr('d', this.options.areaChart.primary ? d3.area().x(function (d) {
        return xScale(d.x);
      }).y0(yScale1(yScale1.domain()[0])).y1(function (d) {
        return yScale1(d.y1);
      }) : d3.line().x(function (d) {
        return xScale(d.x);
      }).y(function (d) {
        return yScale1(d.y1);
      }));

      this.createAxisY1(this.chart, yScale1, smallDevice);
      if (this.options.secondaryScale) this.createAxisY2(this.chart, yScale2, width, smallDevice);
      this.chart.append('g').attr('transform', 'translate(0, ' + height + ')').attr('class', 'axis').call(d3.axisBottom(xScale).ticks(6).tickFormat(d3.timeFormat('%d. %b')).tickSize(4).tickSizeOuter(0));

      var focusBar = this.chart.append('g').style('display', 'none');
      focusBar.append('line').attr('class', 'focus-bar').attr('x1', 0).attr('y1', 0).attr('x2', 0).attr('y2', height).attr('fill', 'none').attr('stroke-width', 1);
      var focusValue1 = this.chart.append('g').style('display', 'none');
      focusValue1.append('circle').attr('r', 3).attr('class', 'focus-value-1');
      var focusValue2 = this.chart.append('g').style('display', 'none');
      focusValue2.append('circle').attr('r', 3).attr('class', 'focus-value-2');

      var tooltipDate = this.tooltip.select('.tooltip-date');
      var tooltipValue1 = this.tooltip.select('.tooltip-value');
      var tooltipValue2 = this.tooltip.select('.tooltip-value-2');

      this.chart.append('rect').attr('class', 'overlay').attr('width', width).attr('height', height).on('mouseover touchstart', function () {
        focusBar.style('display', null);
        focusValue1.style('display', null);
        focusValue2.style('display', null);
        tooltip.style('display', null);
      }).on('mouseout touchend', function () {
        focusBar.style('display', 'none');
        focusValue1.style('display', 'none');
        focusValue2.style('display', 'none');
        tooltip.style('display', 'none');
      }).on('mousemove', function () {
        var x0 = xScale.invert(d3.mouse(this)[0]);
        tooltipMove(x0);
      }).on('touchmove', function () {
        var x0 = xScale.invert(d3.touches(this)[0][0]);
        tooltipMove(x0);
      });

      var tooltipMove = function tooltipMove(x0) {
        var i = bisect(data, x0, 1);
        var d0 = data[i - 1];
        var d1 = i > data.length - 1 ? data[i - 1] : data[i];
        var d = x0 - d0.x > d1.x - x0 ? d1 : d0;

        focusBar.attr('transform', 'translate(' + xScale(d.x) + ', 0)');
        focusValue1.attr('transform', 'translate(' + xScale(d.x) + ', ' + yScale1(d.y1) + ')');
        focusValue2.attr('transform', 'translate(' + xScale(d.x) + ', ' + yScale2(d.y2) + ')');
        if (!smallDevice) tooltip.attr('style', 'left: ' + (xScale(d.x) + 96) + 'px; top: ' + (yScale1(d.y1) - 32) + 'px;');else tooltip.attr('style', 'left: ' + width / 4 + 'px; top: ' + -64 + 'px;');
        tooltipDate.text(d3.timeFormat('%a %d. %B, %H:%M UTC')(d.x));
        tooltipValue1.text(options.parsePrice.primary ? _utility2.default.parsePrice(d.y1) : d.y1);
        tooltipValue2.text(options.secondaryLabel + ': ' + (options.parsePrice.secondary ? _utility2.default.parsePrice(d.y2) : d.y2));
      };
    },
    createAxisY1: function createAxisY1(node, yScale) {
      var smallDevice = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var axis = smallDevice ? d3.axisRight(yScale) : d3.axisLeft(yScale);
      return node.append('g').attr('class', 'axis').call(axis.tickFormat(this.options.parsePrice.primary ? function (d) {
        return (d / 10000).toFixed(2) + 'g';
      } : undefined).tickSize(3).ticks(5).tickSizeOuter(0));
    },
    createAxisY2: function createAxisY2(node, yScale, width) {
      var smallDevice = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var axis = smallDevice ? d3.axisLeft(yScale) : d3.axisRight(yScale);
      return node.append('g').attr('transform', 'translate(' + width + ', 0)').attr('class', 'axis').call(axis.tickFormat(this.options.parsePrice.secondary ? function (d) {
        return (d / 10000).toFixed(2) + 'g';
      } : undefined).tickSize(3).ticks(5).tickSizeOuter(0));
    }
  }
};

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(624);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = __webpack_require__(451);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getIterator2 = __webpack_require__(167);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _extends2 = __webpack_require__(207);

var _extends3 = _interopRequireDefault(_extends2);

var _heatmap = __webpack_require__(943);

var _heatmap2 = _interopRequireDefault(_heatmap);

var _module2 = __webpack_require__(172);

var _module3 = _interopRequireDefault(_module2);

var _moduleTime = __webpack_require__(375);

var _moduleTime2 = _interopRequireDefault(_moduleTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    module: _module3.default,
    heatmap: _heatmap2.default,
    moduleTime: _moduleTime2.default
  },

  props: ['valueEntries', 'title', 'storage'],

  data: function data() {
    return {
      optionsActive: false,
      optionsPrimaryActive: false,
      options: {
        outlier: 10,
        primary: this.valueEntries[0]
      }
    };
  },


  computed: {
    item: function item() {
      return this.$store.state.items.item;
    },
    timerange: function timerange() {
      return this.$store.state.items.graphs[this.storage].timerange;
    },
    medium: function medium() {
      if (this.options.primary.key === 'marketValue') return { label: 'Market Value', value: this.item.stats && this.item.stats.current ? this.item.stats.current.marketValue : null };
      return { label: 'Avg. ' + this.options.primary.name, value: Math.round(this.data.reduce(function (total, next) {
          return total + next.value;
        }, 0) / this.data.length) };
    },
    data: function data() {
      var _this = this;

      if (!this.$store.state.items.graphs[this.storage].data) return [];

      var data = [];
      var bracketSize = 2;
      var rawData = this.$store.state.items.graphs[this.storage].data.slice();

      rawData.sort(function (a, b) {
        return a[_this.options.primary.key] - b[_this.options.primary.key];
      });
      var len = rawData.length;
      var median = len ? len % 2 ? rawData[Math.floor(len / 2)][this.options.primary.key] : (rawData[len / 2][this.options.primary.key] + rawData[len / 2 - 1][this.options.primary.key]) / 2 : 0;

      var _loop = function _loop(entry) {
        var value = entry[_this.options.primary.key];
        if (median / value <= _this.options.outlier / 100 || value <= median * (_this.options.outlier / 100)) return 'continue';

        var scannedAt = new Date(entry.scannedAt);
        var day = ((scannedAt.getDay() - 1) % 7 + 7) % 7;
        var hour = Math.floor(scannedAt.getHours() / bracketSize);

        var storedData = data.find(function (d) {
          return d.day === day && d.hour === hour;
        });
        if (!storedData) data.push({ value: value, count: 1, day: day, hour: hour });else {
          storedData.value += value;
          storedData.count++;
        }
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(rawData), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var entry = _step.value;

          var _ret = _loop(entry);

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

      return data.map(function (d) {
        return (0, _extends3.default)({}, d, { value: Math.round(d.value / d.count) });
      });
    },
    legendStats: function legendStats() {
      var mappedValues = this.data.map(function (d) {
        return d.value;
      });
      var min = Math.min.apply(Math, (0, _toConsumableArray3.default)(mappedValues));
      var max = Math.max.apply(Math, (0, _toConsumableArray3.default)(mappedValues));

      var toGold = function toGold(p) {
        return (p / 10000).toFixed(2) + 'g';
      };
      return this.heatmapOpts.parsePrice ? { min: toGold(min), max: toGold(max), medium: toGold(this.medium.value) } : { min: min, max: max, medium: this.medium.value };
    },
    heatmapOpts: function heatmapOpts() {
      return {
        parsePrice: this.options.primary.price
      };
    }
  },

  methods: {
    selectValueEntry: function selectValueEntry(entry) {
      if (this.options.primary.key === entry.key) return;
      this.options.primary = entry;
    },
    toggleOptions: function toggleOptions(dropdown) {
      this[dropdown] = !this[dropdown];
    },
    setTimerange: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(timerange) {
        var itemId, server, itemData;
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

                this.$refs.graphHeatmap.$refs.progress.start();

                itemId = this.$store.state.items.item.itemId;
                server = this.$store.state.servers.activeServer.slug;
                _context.next = 7;
                return this.$cubic.get('/wow-classic/v1/items/' + server + '/' + itemId + '/prices?timerange=' + timerange);

              case 7:
                itemData = _context.sent;

                this.$store.commit('setGraph', {
                  graph: this.storage,
                  data: itemData.data,
                  timerange: timerange
                });

                this.$refs.graphHeatmap.$refs.progress.finish();

              case 10:
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

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(626);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(207);

var _extends3 = _interopRequireDefault(_extends2);

var _d = __webpack_require__(425);

var d3 = _interopRequireWildcard(_d);

var _utility = __webpack_require__(367);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['data', 'medium', 'opts'],
  data: function data() {
    return {
      svg: '',
      tooltip: '',
      chart: '',
      padding: {
        top: 20 - 8,
        bottom: 20 + 16,
        left: 25 + 20,
        right: 25
      },
      breakpointSmall: 640
    };
  },


  computed: {
    options: function options() {
      var defaultOptions = {
        parsePrice: true
      };
      return (0, _extends3.default)({}, defaultOptions, this.opts);
    }
  },

  watch: {
    data: function data(newData, oldData) {
      this.onResize(false);
    }
  },

  mounted: function mounted() {
    this.svg = d3.select(this.$el).select('svg');
    this.tooltip = d3.select(this.$el).append('div').attr('class', 'tooltip').style('display', 'none');
    this.tooltip.append('div').attr('class', 'tooltip-date');
    this.tooltip.append('div').attr('class', 'tooltip-value');

    window.addEventListener('resize', this.onResize);
    this.createChart();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },


  methods: {
    onResize: function onResize() {
      var _this = this;

      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      setTimeout(function () {
        _this.svg.selectAll('*').remove();
        _this.createChart();
      }, delay ? 100 : 0);
    },
    createChart: function createChart() {
      var options = this.options;
      var tooltip = this.tooltip;
      var padding = (0, _extends3.default)({}, this.padding);
      var smallDevice = window.innerWidth <= this.breakpointSmall;

      if (smallDevice) {
        padding.left = 10 + 20;
        padding.right = 10;
      }

      var boundingBox = this.svg.node().getBoundingClientRect();
      var height = boundingBox.height - padding.top - padding.bottom;
      var width = boundingBox.width - padding.left - padding.right;

      this.chart = this.svg.append('g').attr('transform', 'translate(' + padding.left + ', ' + padding.top + ')');
      var xTicks = ['12am', '2am', '4am', '6am', '8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm', '10pm', '12pm'];
      var yTicks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

      var xScale = d3.scaleBand().range([0, width]).padding(0.15).domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
      var yScale = d3.scaleBand().range([0, height]).padding(0.25).domain([0, 1, 2, 3, 4, 5, 6]);
      var colorScale = d3.scaleLinear().range(['#00c0ff', 'transparent', '#e6ad02']).domain([d3.min(this.data, function (d) {
        return d.value;
      }), this.medium, d3.max(this.data, function (d) {
        return d.value;
      })]);

      this.chart.append('g').attr('transform', 'translate(0, ' + height + ')').attr('class', 'axis').call(d3.axisBottom(xScale).tickSize(0).tickFormat(function (d) {
        return xTicks[d];
      }));
      this.chart.append('g').attr('class', 'axis').call(d3.axisLeft(yScale).tickSize(0).tickFormat(function (d) {
        return yTicks[d].slice(0, 3);
      }));

      var tooltipDate = this.tooltip.select('.tooltip-date');
      var tooltipValue = this.tooltip.select('.tooltip-value');

      this.chart.selectAll().data(this.data, function (d) {
        return d.hour + ':' + d.day;
      }).enter().append('rect').attr('x', function (d) {
        return xScale(d.hour);
      }).attr('y', function (d) {
        return yScale(d.day);
      }).attr('rx', 1).attr('width', xScale.bandwidth()).attr('height', yScale.bandwidth()).style('fill', function (d) {
        return colorScale(d.value);
      }).on('mouseover', function () {
        d3.select(this).attr('class', 'rect-hover');
        tooltip.style('display', null);
      }).on('mouseout', function () {
        d3.select(this).attr('class', null);
        tooltip.style('display', 'none');
      }).on('mousemove', function (d) {
        if (!smallDevice) tooltip.attr('style', 'left: ' + (xScale(d.hour) + 96) + 'px; top: ' + yScale(d.day) + 'px;');else tooltip.attr('style', 'left: ' + width / 3 + 'px; top: -48px;');
        tooltipDate.text(yTicks[d.day] + ', ' + xTicks[d.hour] + ' - ' + xTicks[(d.hour + 1) % 12]);
        tooltipValue.text(options.parsePrice ? _utility2.default.parsePrice(d.value) : d.value);
      });
    }
  }
};

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(630);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(207);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _compareServer = __webpack_require__(587);

var _compareServer2 = _interopRequireDefault(_compareServer);

var _indicator = __webpack_require__(205);

var _indicator2 = _interopRequireDefault(_indicator);

var _module2 = __webpack_require__(172);

var _module3 = _interopRequireDefault(_module2);

var _moment = __webpack_require__(166);

var _moment2 = _interopRequireDefault(_moment);

var _utility = __webpack_require__(367);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    module: _module3.default,
    indicator: _indicator2.default,
    compareServer: _compareServer2.default
  },

  data: function data() {
    return {
      copied: false
    };
  },


  computed: {
    global: function global() {
      return !this.$store.state.servers.activeServer.slug;
    },
    item: function item() {
      return this.$store.state.items.item;
    },
    comparison: function comparison() {
      if (!this.$store.state.items.itemComparison.server.slug) return null;
      return this.$store.state.items.itemComparison;
    },
    comparisonActiveServer: function comparisonActiveServer() {
      return this.$store.state.items.itemComparison.server;
    },
    compareServerPretty: function compareServerPretty() {
      if (!this.comparison) return null;
      var factionPretty = this.comparison.server.faction.charAt(0).toUpperCase() + this.comparison.server.faction.slice(1);
      return this.comparison.server.name + ' ' + factionPretty;
    },
    stats: function stats() {
      return this.item.stats;
    },
    globalGraphData: function globalGraphData() {
      var EU = this.$store.state.items.graphs['overview-eu'].data;
      var US = this.$store.state.items.graphs['overview-us'].data;
      return { EU: EU, US: US };
    },
    globalStatsPrevious: function globalStatsPrevious() {
      return {
        EU: this.globalGraphData.EU ? this.globalGraphData.EU.slice(-2, -1)[0] : undefined,
        US: this.globalGraphData.US ? this.globalGraphData.US.slice(-2, -1)[0] : undefined
      };
    },
    globalStats: function globalStats() {
      return {
        EU: this.globalGraphData.EU ? this.globalGraphData.EU.slice(-1)[0] : undefined,
        US: this.globalGraphData.US ? this.globalGraphData.US.slice(-1)[0] : undefined
      };
    },
    diff: function diff() {
      var _this = this;

      var percentage = function percentage(property, main, secondary) {
        if (!main) main = _this.stats ? _this.stats.current : null;
        if (!secondary) secondary = _this.stats ? _this.stats.previous : null;

        if (!main || !secondary || !secondary[property]) return 0;
        var value = main[property] - secondary[property];
        return Math.round(value / secondary[property] * 100 * 1e2) / 1e2;
      };
      return {
        marketValue: percentage('marketValue'),
        minBuyout: percentage('minBuyout'),
        quantity: percentage('quantity'),
        historicalValue: percentage('historicalValue'),
        comparison: this.comparison ? {
          marketValue: percentage('marketValue', this.comparison.current, this.stats.current),
          minBuyout: percentage('minBuyout', this.comparison.current, this.stats.current),
          quantity: percentage('quantity', this.comparison.current, this.stats.current),
          historicalValue: percentage('historicalValue', this.comparison.current, this.stats.current)
        } : null,
        global: this.global ? {
          EU: {
            marketValue: percentage('marketValue', this.globalStats.EU, this.globalStatsPrevious.EU),
            quantity: percentage('quantity', this.globalStats.EU, this.globalStatsPrevious.EU)
          },
          US: {
            marketValue: percentage('marketValue', this.globalStats.US, this.globalStatsPrevious.US),
            quantity: percentage('quantity', this.globalStats.US, this.globalStatsPrevious.US)
          }
        } : null
      };
    },
    lastUpdated: function lastUpdated() {
      var lastUpdated = this.stats ? this.stats.lastUpdated : null;
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
    },
    compareServer: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(server) {
        var serverSplit, faction, serverObj;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                serverSplit = server.split('-');
                faction = serverSplit.pop();
                serverObj = (0, _extends3.default)({}, this.$store.state.servers.serverlist.find(function (s) {
                  return s.slug === serverSplit.join('-');
                }));

                serverObj.slug = server;
                serverObj.faction = faction;
                _context.next = 7;
                return this.$store.dispatch('fetchItemComparison', serverObj);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function compareServer(_x) {
        return _ref.apply(this, arguments);
      }

      return compareServer;
    }()
  }
};

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/header.vue?vue&type=template&id=50ff381a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_c('div',{staticClass:"item-img-shade"}),_vm._v(" "),_c('div',{staticClass:"item-img-shade-2"}),_vm._v(" "),_c('div',{staticClass:"background"}),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"item-profile"},[_c('div',{staticClass:"icon"},[_c('img',{attrs:{"src":_vm.item.icon}})]),_vm._v(" "),_c('div',{staticClass:"item-profile-data-info"},[_c('h1',[_vm._v(_vm._s(_vm.item.name))]),_vm._v(" "),_c('br'),_vm._v(" "),_vm._l((_vm.item.tags),function(tag,i){return _c('span',{key:tag + i},[_vm._v("\n          "+_vm._s(tag)+"\n        ")])})],2)])]),_vm._v(" "),_c('nav',{ref:"subnav",staticClass:"subnav"},[_c('div',{staticClass:"container"},[_c('router-link',{staticClass:"interactive",attrs:{"to":("" + _vm.itemUrl),"exact":""}},[_vm._v("\n        Overview\n      ")]),_vm._v(" "),_c('router-link',{staticClass:"interactive",attrs:{"to":(_vm.itemUrl + "/crafting")}},[_vm._v("\n        Crafting\n      ")])],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/header.vue?vue&type=template&id=50ff381a&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/compare-server.vue?vue&type=template&id=1d38d786&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select"},[_c('div',{staticClass:"interactive",on:{"click":_vm.toggle}},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/compare.svg","alt":"Compare"}}),_vm._v(" "),_c('span',[_vm._v("Compare "+_vm._s(_vm.activeServer.slug ? _vm.activeServer.name : 'Realm'))]),_vm._v(" "),(_vm.activeServer.slug)?_c('img',{staticClass:"faction-logo",attrs:{"src":("/img/wow-classic/ui/" + (_vm.activeServer.faction) + ".svg"),"alt":(_vm.activeFactionPretty + " Logo")}}):_vm._e(),_vm._v(" "),_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/dropdown.svg","alt":"Dropdown"}})]),_vm._v(" "),_c('div',{staticClass:"dropdown",class:{ active: _vm.active }},[_c('div',{staticClass:"body"},[_c('span',{class:{ active: !_vm.activeServer.slug },on:{"click":function($event){return _vm.toggle()}}},[_vm._v("Compare Realm")]),_vm._v(" "),_c('span',{class:{ active: _vm.activeServer.region === 'EU' },on:{"click":function($event){return _vm.selectRegion('EU')}}},[_vm._v("Europe")]),_vm._v(" "),_vm._l((_vm.serverlist.EU),function(s){return [_c('span',{key:s.slug,staticClass:"server",class:{ active: _vm.activeServer.name === s.name, selected: _vm.selected.region === 'EU' },on:{"click":function($event){return _vm.selectServer(s)}}},[_vm._v(_vm._s(s.name))]),_vm._v(" "),_c('div',{key:s.slug + 'faction',staticClass:"faction",class:{ selected: _vm.selected.server === s.slug }},[_c('div',{staticClass:"image-wrapper",on:{"click":function($event){_vm.toggle(); _vm.fn(s.slug + '-alliance');}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/alliance.svg","alt":"Alliance Logo"}})]),_vm._v(" "),_c('div',{staticClass:"image-wrapper",on:{"click":function($event){_vm.toggle(); _vm.fn(s.slug + '-horde');}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/horde.svg","alt":"Horde Logo"}})])])]}),_vm._v(" "),_c('span',{class:{ active: _vm.activeServer.region === 'US' },on:{"click":function($event){return _vm.selectRegion('US')}}},[_vm._v("United States")]),_vm._v(" "),_vm._l((_vm.serverlist.US),function(s){return [_c('span',{key:s.slug,staticClass:"server",class:{ active: _vm.activeServer.name === s.name, selected: _vm.selected.region === 'US' },on:{"click":function($event){return _vm.selectServer(s)}}},[_vm._v(_vm._s(s.name))]),_vm._v(" "),_c('div',{key:s.slug + 'faction',staticClass:"faction",class:{ selected: _vm.selected.server === s.slug }},[_c('div',{staticClass:"image-wrapper",on:{"click":function($event){_vm.toggle(); _vm.fn(s.slug + '-alliance');}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/alliance.svg","alt":"Alliance Logo"}})]),_vm._v(" "),_c('div',{staticClass:"image-wrapper",on:{"click":function($event){_vm.toggle(); _vm.fn(s.slug + '-horde');}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/horde.svg","alt":"Horde Logo"}})])])]})],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/compare-server.vue?vue&type=template&id=1d38d786&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _description_vue_vue_type_template_id_d2a68c24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(985);
/* harmony import */ var _description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(614);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _description_vue_vue_type_style_index_0_id_d2a68c24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(937);
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

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_style_index_0_id_d2a68c24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(616);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_style_index_0_id_d2a68c24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_style_index_0_id_d2a68c24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_style_index_0_id_d2a68c24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graph_doubleline_vue_vue_type_template_id_59b7f9cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1000);
/* harmony import */ var _graph_doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(617);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _graph_doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _graph_doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _graph_doubleline_vue_vue_type_style_index_0_id_59b7f9cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(941);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _graph_doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _graph_doubleline_vue_vue_type_template_id_59b7f9cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _graph_doubleline_vue_vue_type_template_id_59b7f9cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "59b7f9cc",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _doubleline_vue_vue_type_template_id_2135be9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1016);
/* harmony import */ var _doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(619);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _doubleline_vue_vue_type_style_index_0_id_2135be9a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(940);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _doubleline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _doubleline_vue_vue_type_template_id_2135be9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _doubleline_vue_vue_type_template_id_2135be9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "2135be9a",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_doubleline_vue_vue_type_style_index_0_id_2135be9a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(621);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_doubleline_vue_vue_type_style_index_0_id_2135be9a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_doubleline_vue_vue_type_style_index_0_id_2135be9a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_doubleline_vue_vue_type_style_index_0_id_2135be9a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_doubleline_vue_vue_type_style_index_0_id_59b7f9cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(622);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_doubleline_vue_vue_type_style_index_0_id_59b7f9cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_doubleline_vue_vue_type_style_index_0_id_59b7f9cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_doubleline_vue_vue_type_style_index_0_id_59b7f9cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graph_heatmap_vue_vue_type_template_id_134a50c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1001);
/* harmony import */ var _graph_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(623);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _graph_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _graph_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _graph_heatmap_vue_vue_type_style_index_0_id_134a50c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(945);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _graph_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _graph_heatmap_vue_vue_type_template_id_134a50c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _graph_heatmap_vue_vue_type_template_id_134a50c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "134a50c0",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 943:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heatmap_vue_vue_type_template_id_6bef5dc3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1013);
/* harmony import */ var _heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(625);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _heatmap_vue_vue_type_style_index_0_id_6bef5dc3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(944);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _heatmap_vue_vue_type_template_id_6bef5dc3_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _heatmap_vue_vue_type_template_id_6bef5dc3_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "6bef5dc3",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_0_id_6bef5dc3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(627);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_0_id_6bef5dc3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_0_id_6bef5dc3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_0_id_6bef5dc3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 945:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_heatmap_vue_vue_type_style_index_0_id_134a50c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(628);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_heatmap_vue_vue_type_style_index_0_id_134a50c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_heatmap_vue_vue_type_style_index_0_id_134a50c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_heatmap_vue_vue_type_style_index_0_id_134a50c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stats_vue_vue_type_template_id_6821f5c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1002);
/* harmony import */ var _stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(629);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _stats_vue_vue_type_style_index_0_id_6821f5c9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(947);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _stats_vue_vue_type_template_id_6821f5c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _stats_vue_vue_type_template_id_6821f5c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "6821f5c9",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_style_index_0_id_6821f5c9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(631);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_style_index_0_id_6821f5c9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_style_index_0_id_6821f5c9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_style_index_0_id_6821f5c9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_3d63c4ae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(632);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_3d63c4ae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_3d63c4ae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_3d63c4ae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overview_vue_vue_type_template_id_3d63c4ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(970);
/* harmony import */ var _overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(612);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _overview_vue_vue_type_style_index_0_id_3d63c4ae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(948);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _overview_vue_vue_type_template_id_3d63c4ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _overview_vue_vue_type_template_id_3d63c4ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "3d63c4ae",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/wow-classic/items/overview.vue?vue&type=template&id=3d63c4ae&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation'),_vm._v(" "),_c('item-header'),_vm._v(" "),_c('app-content',[_c('section',[_c('div',{staticClass:"container"},[_c('ad',{attrs:{"name":"wow-classic-item-overview-main"}}),_vm._v(" "),_c('h2',{staticClass:"sub"},[_vm._v("\n          Item Overview\n        ")]),_vm._v(" "),_c('div',{staticClass:"row-margin"},[_c('div',{staticClass:"col-b column"},[_c('description')],1),_vm._v(" "),_c('stats',{staticClass:"col-b stats"})],1),_vm._v(" "),_c('ad',{attrs:{"name":"wow-classic-item-overview-statistics"}})],1)]),_vm._v(" "),(_vm.global || !_vm.showGraph.hideAll)?_c('section',[_c('div',{staticClass:"container"},[_c('h2',{staticClass:"sub"},[_vm._v("\n          Statistics\n        ")]),_vm._v(" "),_c('div',{staticClass:"mobile-hover-info"},[_c('span',[_vm._v("Tap on the graphs to see more detailed information.")])]),_vm._v(" "),(!_vm.global)?_c('div',{staticClass:"row-margin"},[(_vm.showGraph['marketValue-quantity'])?_c('graph-doubleline',{staticClass:"col-b graph",attrs:{"title":_vm.serverPretty,"storage":"marketValue-quantity","value-entries":_vm.valueEntriesLocal,"refetch-fn":_vm.refetchLocalGraph}}):_vm._e(),_vm._v(" "),(_vm.showGraph['regional-comparison'])?_c('graph-doubleline',{staticClass:"col-b graph",attrs:{"title":(_vm.serverPretty + " / " + _vm.regionPretty),"storage":"regional-comparison","value-entries":_vm.valueEntriesRegional,"refetch-fn":_vm.refetchRegionalGraph}}):_vm._e()],1):_vm._e(),_vm._v(" "),(!_vm.global)?_c('div',{staticClass:"row-margin"},[(_vm.showGraph['heatmap-primary'])?_c('graph-heatmap',{staticClass:"col-b graph",attrs:{"title":"Market Value Heatmap","storage":"heatmap-primary","value-entries":_vm.valueEntriesLocal}}):_vm._e(),_vm._v(" "),(_vm.showGraph['heatmap-secondary'])?_c('graph-heatmap',{staticClass:"col-b graph",attrs:{"title":"Quantity Heatmap","storage":"heatmap-secondary","value-entries":_vm.valueEntriesLocal.slice(1).concat(_vm.valueEntriesLocal.slice(0, 1))}}):_vm._e()],1):_vm._e(),_vm._v(" "),(_vm.global)?_c('div',{staticClass:"row-margin"},[_c('graph-doubleline',{staticClass:"col-b graph",attrs:{"title":"Overview Europe","storage":"overview-eu","value-entries":_vm.valueEntriesGlobal[0],"refetch-fn":_vm.refetchGlobalGraph('eu')}}),_vm._v(" "),_c('graph-doubleline',{staticClass:"col-b graph",attrs:{"title":"Overview United States","storage":"overview-us","value-entries":_vm.valueEntriesGlobal[1],"refetch-fn":_vm.refetchGlobalGraph('us')}})],1):_vm._e()])]):_vm._e()])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/wow-classic/items/overview.vue?vue&type=template&id=3d63c4ae&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/description.vue?vue&type=template&id=d2a68c24&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-16",attrs:{"src":"/img/wow-classic/ui/description.svg","alt":"Tooltip"}}),_vm._v(" "),_c('h3',[_vm._v("Tooltip")])]),_vm._v(" "),_c('template',{slot:"body"},[_vm._l((_vm.tooltip),function(entry,i){return [(entry.format !== 'alignRight' && entry.preformat !== 'alignRight')?_c('p',{key:("" + i + (entry.label)),class:[entry.format ? 'format-' + entry.format.toLowerCase() : '', !entry.space ? 'tooltip-label' : '']},[_vm._v("\n        "+_vm._s(entry.label)+"\n      ")]):_c('span',{key:("" + i + (entry.label)),class:[entry.format ? 'format-' + entry.format.toLowerCase() : '', !entry.space ? 'tooltip-label' : '']},[_vm._v("\n        "+_vm._s(entry.label)+"\n      ")])]})],2),_vm._v(" "),_c('template',{slot:"footer"},[(_vm.wowheadUrl)?_c('a',{attrs:{"href":_vm.wowheadUrl,"target":"_blank"}},[_vm._v("\n      View on Wowhead\n      "),_c('img',{staticClass:"ico-20",attrs:{"src":"/img/ui/arrow-right.svg","alt":"View on Wowhead"}})]):_vm._e()])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/description.vue?vue&type=template&id=d2a68c24&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);