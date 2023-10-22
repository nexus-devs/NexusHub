(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tween.js/src/Tween.js
var src_Tween = __webpack_require__(117);
var Tween_default = /*#__PURE__*/__webpack_require__.n(src_Tween);

// CONCATENATED MODULE: ./ui/components/charts/_normalize.js
function normalize(arr, raw, skip) {
  const result = [];
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  arr.forEach((y, x) => {
    if (raw) {
      let val = y;

      if (y === null && !skip) {
        const n = findNearestNeighbours(arr, x);
        val = (n[0] + n[1]) / 2;
      }

      result.push(val);
    } else {
        const val = {
          x,
          y,
          yRaw: y,
          isMin: false,
          isMax: false
        };
        min = y < min ? y : min;
        max = y > max ? y : max;

        if (val.y === null && !skip) {
          const n = findNearestNeighbours(arr, x);
          val.y = (n[0] + n[1]) / 2;
        }

        result.push(val);
      }
  });

  if (!raw) {
    const i = result.findIndex(d => d.yRaw === min);
    const j = result.findIndex(d => d.yRaw === max);

    if (result[i]) {
      result[i].isMin = true;
      result[i].alignLeft = i / result.length > 0.66;
    }

    if (result[j]) {
      result[j].isMax = true;
      result[j].alignLeft = j / result.length > 0.66;
    }

    result.forEach(d => {
      delete d.yRaw;
    });
  }

  return result;
}

function findNearestNeighbours(arr, index) {
  const result = [null, null];
  let i = index;
  let j = index;

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

/* harmony default export */ var _normalize = (normalize);
// CONCATENATED MODULE: ./ui/components/charts/_tween.js



class _tween_Tween {
  tweenData(newData, oldData, onUpdate) {
    const tween = new Tween_default.a.Tween(oldData).easing(Tween_default.a.Easing.Quadratic.Out).to(newData, 500).onUpdate(onUpdate).onComplete(() => {
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

  adjustData(vm, newData, oldData, doNormalize) {
    const nData = doNormalize ? _normalize(newData, true) : newData;
    const oData = doNormalize ? _normalize(oldData, true) : oldData;
    this.tweenData(nData, oData, function () {
      vm.animatedData = _normalize(this, null, !doNormalize);
      vm.update();
    });
  }

}

const _tween_tween = new _tween_Tween();
/* harmony default export */ var _tween = __webpack_exports__["a"] = (_tween_tween);

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_b43cd738_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_b43cd738_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_b43cd738_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_b43cd738_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/warframe/patchlog.vue?vue&type=template&id=b43cd738&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:({
  callback: _vm.setVisibility,
  intersection: {
    rootMargin: '0px 0px 20% 0px'
  }
}),expression:"{\n  callback: setVisibility,\n  intersection: {\n    rootMargin: '0px 0px 20% 0px'\n  }\n}"}],staticClass:"patchlog",class:{ visible: _vm.visible }},[_c('template',{slot:"header"},[_c('h3',[_vm._v(_vm._s(_vm.patchlog.name))]),_vm._v(" "),_c('time',{attrs:{"datetime":_vm.patchlog.date}},[_vm._v(_vm._s(_vm.overview ? _vm.moment (new Date(_vm.patchlog.date)).fromNow() : _vm.moment(new Date(_vm.patchlog.date)).format('MMMM Do YYYY')))])]),_vm._v(" "),_c('template',{slot:"body"},[_c('div',{staticClass:"image"},[((_vm.visible || _vm.seen) && _vm.patchlog.imgUrl)?_c('img',{attrs:{"src":_vm.patchlog.imgUrl,"alt":_vm.patchlog.name,"onerror":"this.style.display='none'"}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"shade"})]),_vm._v(" "),(_vm.patchlog.additions)?_c('div',[_c('h4',[_vm._v("Additions")]),_vm._v(" "),_vm._l((_vm.additions),function(log,i){return _c('p',{key:log + i},[_vm._v("\n        "+_vm._s(log)+"\n      ")])})],2):_vm._e(),_vm._v(" "),(_vm.patchlog.changes)?_c('div',[_c('h4',[_vm._v("Changes")]),_vm._v(" "),_vm._l((_vm.changes),function(log,i){return _c('p',{key:log + i},[_vm._v("\n        "+_vm._s(log)+"\n      ")])})],2):_vm._e(),_vm._v(" "),(_vm.patchlog.fixes)?_c('div',[_c('h4',[_vm._v("Fixes")]),_vm._v(" "),_vm._l((_vm.fixes),function(log,i){return _c('p',{key:log + i},[_vm._v("\n        "+_vm._s(log)+"\n      ")])})],2):_vm._e()]),_vm._v(" "),_c('template',{slot:"footer"},[_c('a',{attrs:{"href":_vm.patchlog.url,"target":"_blank"}},[_vm._v("\n      Full Patch Notes\n      "),_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/arrow-right.svg","alt":"View full patch notes"}})])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/warframe/patchlog.vue?vue&type=template&id=b43cd738&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vue-observe-visibility/dist/vue-observe-visibility.esm.js
var vue_observe_visibility_esm = __webpack_require__(99);

// EXTERNAL MODULE: ./ui/components/ui/module.vue + 4 modules
var ui_module = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(39);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/warframe/patchlog.vue?vue&type=script&lang=js&




/* harmony default export */ var patchlogvue_type_script_lang_js_ = ({
  components: {
    module: ui_module["a" /* default */]
  },
  props: ['patchlog', 'overview'],

  data() {
    return {
      visible: false,
      seen: false,
      itemName: this.$route.params.item
    };
  },

  computed: {
    additions() {
      return this.patchlog.additions.split('\n').filter(a => a);
    },

    changes() {
      return this.patchlog.changes.split('\n').filter(a => a);
    },

    fixes() {
      return this.patchlog.fixes.split('\n').filter(a => a);
    }

  },

  beforeMount() {
    vue_runtime_esm["a" /* default */].use(vue_observe_visibility_esm["a" /* default */]);
  },

  methods: {
    moment: moment_default.a,

    setVisibility(bool, entry) {
      const buffer = -99999;
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
});
// CONCATENATED MODULE: ./ui/components/warframe/patchlog.vue?vue&type=script&lang=js&
 /* harmony default export */ var warframe_patchlogvue_type_script_lang_js_ = (patchlogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/warframe/patchlog.vue?vue&type=style&index=0&id=b43cd738&lang=scss&scoped=true&
var patchlogvue_type_style_index_0_id_b43cd738_lang_scss_scoped_true_ = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/warframe/patchlog.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  warframe_patchlogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "b43cd738",
  null
  
)

/* harmony default export */ var patchlog = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_activity_vue_vue_type_style_index_0_id_ae9d50ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_activity_vue_vue_type_style_index_0_id_ae9d50ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_activity_vue_vue_type_style_index_0_id_ae9d50ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_activity_vue_vue_type_style_index_0_id_ae9d50ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bars_vue_vue_type_style_index_0_id_84b060a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bars_vue_vue_type_style_index_0_id_84b060a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bars_vue_vue_type_style_index_0_id_84b060a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_bars_vue_vue_type_style_index_0_id_84b060a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opm_vue_vue_type_style_index_0_id_89349e74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opm_vue_vue_type_style_index_0_id_89349e74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opm_vue_vue_type_style_index_0_id_89349e74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opm_vue_vue_type_style_index_0_id_89349e74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/warframe/opm.vue?vue&type=template&id=89349e74&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.opm)?_c('module',{staticClass:"opm"},[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/warframe/ui/trade.svg","alt":"Trade"}}),_vm._v(" "),_c('h3',{staticClass:"title"},[_vm._v("\n      Traders right now\n    ")]),_vm._v(" "),_c('tween-num',{staticClass:"active-number",attrs:{"value":_vm.opm.active,"duration":1000,"formatter":function (value) { return parseInt(value); },"easing":"easeInOutQuad"}}),_vm._v(" "),_c('span',{staticClass:"offers-per-minute"},[_vm._v("Offers per 5 minutes")])],1),_vm._v(" "),_c('template',{slot:"body"},[_c('bars',{attrs:{"data":_vm.opm.intervals}})],1),_vm._v(" "),_c('template',{slot:"footer"},[_c('div',{staticClass:"distribution"},[_c('div',{staticClass:"distribution-label"},[_c('div'),_vm._v(" "),_c('span',[_vm._v("Trade Chat "+_vm._s((_vm.opm.sources.tradeChat * 100).toFixed(0))+"%")])]),_vm._v(" "),_c('div',{staticClass:"distribution-label"},[_c('div'),_vm._v(" "),_c('span',[_vm._v("WFM "+_vm._s((_vm.opm.sources.wfm * 100).toFixed(0))+"%")])]),_vm._v(" "),_c('div',{staticClass:"distribution-bar"},[_c('div',{ref:"tradechat",style:({ width: ((_vm.opm.sources.tradeChat * 100) + "%") })}),_vm._v(" "),_c('div',{ref:"wfm",style:({ width: ((_vm.opm.sources.wfm * 100) + "%") })})])])])],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/warframe/opm.vue?vue&type=template&id=89349e74&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/charts/bars.vue?vue&type=template&id=84b060a2&scoped=true&
var barsvue_type_template_id_84b060a2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bars"},[_c('svg',{ref:"bars",attrs:{"width":_vm.width + 200,"height":_vm.height + 5}},_vm._l((_vm.points),function(d,i){return _c('g',{key:("bar-" + i)},[_c('g',{staticClass:"bar-wrapper"},[_c('rect',{staticClass:"bar",attrs:{"height":d.y,"width":_vm.barWidth,"x":d.x,"y":_vm.height - d.y + 6}}),_vm._v(" "),_c('rect',{staticClass:"cap",attrs:{"height":2,"width":_vm.barWidth,"x":d.x,"y":_vm.height - d.y + 2}})]),_vm._v(" "),_c('g',{staticClass:"tooltip"},[_c('rect',{attrs:{"x":d.x + 12,"height":"60px","width":"120px"}}),_vm._v(" "),_c('text',{staticClass:"title",attrs:{"x":d.x + 20,"y":"22px"}},[_vm._v(_vm._s(_vm.data.length - i)+" mins ago")]),_vm._v(" "),_c('text',{staticClass:"num",attrs:{"x":d.x + 20,"y":"48px"}},[_vm._v(_vm._s(_vm.data[i]))])])])}),0)])}
var barsvue_type_template_id_84b060a2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/charts/bars.vue?vue&type=template&id=84b060a2&scoped=true&

// EXTERNAL MODULE: ./node_modules/d3/index.js + 518 modules
var d3 = __webpack_require__(106);

// EXTERNAL MODULE: ./ui/components/charts/_tween.js + 1 modules
var _tween = __webpack_require__(107);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/charts/bars.vue?vue&type=script&lang=js&


/* harmony default export */ var barsvue_type_script_lang_js_ = ({
  props: ['data'],

  data() {
    return {
      width: 0,
      height: 0,
      scaled: {
        x: null,
        y: null
      },
      animatedData: [],
      points: []
    };
  },

  computed: {
    barWidth() {
      return this.width / this.data.length - 1;
    }

  },
  watch: {
    data(newData, oldData) {
      _tween["a" /* default */].adjustData(this, newData, oldData);

      if (newData.length !== oldData.length) {
        this.onResize();
      }
    }

  },

  mounted() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

  methods: {
    initialize(newData) {
      this.scaled.x = d3["scaleLinear"]().range([0, this.width]);
      this.scaled.y = d3["scaleLinear"]().range([this.height, 0]);
    },

    onResize() {
      this.width = this.$el.offsetWidth;
      this.height = this.$el.offsetHeight;
      this.initialize();
      _tween["a" /* default */].adjustData(this, this.data, this.data);
    },

    update() {
      const yPane = d3["extent"](this.data, (y, x) => y).reverse();
      yPane[1] = yPane[1] / 2;

      if (yPane[0] === 0) {
        yPane[0] = 1;
      }

      this.scaled.x.domain(d3["extent"](this.data, (y, x) => x));
      this.scaled.y.domain(yPane);
      this.points = [];

      for (const data of this.animatedData) {
        const x = this.scaled.x(data.x);
        const y = this.scaled.y(data.y);
        this.points.push({
          x,
          y: y > 0 ? y : 0
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./ui/components/charts/bars.vue?vue&type=script&lang=js&
 /* harmony default export */ var charts_barsvue_type_script_lang_js_ = (barsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/charts/bars.vue?vue&type=style&index=0&id=84b060a2&lang=scss&scoped=true&
var barsvue_type_style_index_0_id_84b060a2_lang_scss_scoped_true_ = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/charts/bars.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  charts_barsvue_type_script_lang_js_,
  barsvue_type_template_id_84b060a2_scoped_true_render,
  barsvue_type_template_id_84b060a2_scoped_true_staticRenderFns,
  false,
  null,
  "84b060a2",
  null
  
)

/* harmony default export */ var bars = (component.exports);
// EXTERNAL MODULE: ./ui/components/ui/module.vue + 4 modules
var ui_module = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/vue-tween-number/index.js
var vue_tween_number = __webpack_require__(324);
var vue_tween_number_default = /*#__PURE__*/__webpack_require__.n(vue_tween_number);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/warframe/opm.vue?vue&type=script&lang=js&



/* harmony default export */ var opmvue_type_script_lang_js_ = ({
  components: {
    module: ui_module["a" /* default */],
    tweenNum: vue_tween_number_default.a,
    bars: bars
  },
  props: ['opm']
});
// CONCATENATED MODULE: ./ui/components/warframe/opm.vue?vue&type=script&lang=js&
 /* harmony default export */ var warframe_opmvue_type_script_lang_js_ = (opmvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/warframe/opm.vue?vue&type=style&index=0&id=89349e74&lang=scss&scoped=true&
var opmvue_type_style_index_0_id_89349e74_lang_scss_scoped_true_ = __webpack_require__(150);

// CONCATENATED MODULE: ./ui/components/warframe/opm.vue






/* normalize component */

var opm_component = Object(componentNormalizer["a" /* default */])(
  warframe_opmvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "89349e74",
  null
  
)

/* harmony default export */ var opm = __webpack_exports__["a"] = (opm_component.exports);

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/warframe/activity.vue?vue&type=template&id=ae9d50ca&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',{ref:"activity",staticClass:"activity"},[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/warframe/ui/trade.svg","alt":"Trade"}}),_vm._v(" "),_c('h3',{staticClass:"title"},[_vm._v("\n      Activity\n    ")])]),_vm._v(" "),_c('template',{slot:"body"},[_c('div',{staticClass:"row days"},[_vm._l((_vm.data),function(day){return _c('div',{key:day.day.name,staticClass:"day"},[_vm._l((day.hours),function(hour,i){return _c('div',{key:hour + '' + i,staticClass:"hour-wrapper"},[_c('div',{staticClass:"hour",class:{ inactive: !hour },style:({ opacity: _vm.scale(hour), transform: ("scale(" + (_vm.scale(hour)) + ")") })}),_vm._v(" "),_c('div',{staticClass:"tooltip"},[_c('time',{attrs:{"datetime":((i * 2 + 1) + ":00")}},[_vm._v("\n              "+_vm._s(day.day.name.substr(0, 3))+",\n              "+_vm._s(i * 2 % 12 + 1)+_vm._s(i * 2 > 11 ? 'pm' : 'am')+"\n            ")]),_vm._v("\n            -\n            "),_c('time',{attrs:{"datetime":((i * 2 + 3) + ":00")}},[_vm._v("\n              "+_vm._s((i * 2 + 2) % 12 + 1)+_vm._s(i * 2 + 2 > 11 ? 'pm' : 'am')+"\n            ")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('span',{staticClass:"num"},[_vm._v(_vm._s(hour))]),_vm._v(" "),_c('br'),_vm._v(" "),_c('span',[_vm._v("Orders")])])])}),_vm._v(" "),_c('span',{staticClass:"label"},[_vm._v(_vm._s(day.day.name.substr(0, 3)))])],2)}),_vm._v(" "),_c('div',{staticClass:"daytime"},_vm._l((24),function(hour,i){return _c('div',{key:hour + '' + i,staticClass:"time"},[(i % 4 === 1)?_c('span',{staticClass:"label"},[_vm._v("\n            "+_vm._s(i % 12 + 1)+_vm._s(i + 1 > 11 ? 'pm' : 'am')+"\n          ")]):_c('span')])}),0)],2)]),_vm._v(" "),_c('template',{slot:"footer"},[_c('module-time',{attrs:{"days":_vm.timerange,"fn":_vm.setTimerange}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/warframe/activity.vue?vue&type=template&id=ae9d50ca&scoped=true&

// EXTERNAL MODULE: ./ui/components/ui/module.vue + 4 modules
var ui_module = __webpack_require__(57);

// EXTERNAL MODULE: ./ui/components/ui/module-time.vue + 4 modules
var module_time = __webpack_require__(86);

// CONCATENATED MODULE: ./ui/store/activity.js
/* harmony default export */ var activity = ({
  name: 'activity',
  state: {
    data: [],
    timerange: 30
  },
  mutations: {
    setActivityData(state, data) {
      let all = [];
      const tz = new Date().getTimezoneOffset() / 60;

      for (const day of data) {
        for (const hour of day.hours) {
          all.push(hour);
        }
      }

      all = all.map((h, i) => {
        const offset = i + tz;

        if (offset > all.length) {
          return all[offset - all.length];
        } else if (offset < 0) {
          return all[all.length + offset];
        } else {
          return all[offset];
        }
      });

      for (let i = 0; i < data.length; i++) {
        data[i] = {
          day: data[i].day,
          hours: all.slice(i * 24, (i + 1) * 24)
        };
      }

      state.data = data;
    },

    setActivityTimerange(state, days) {
      state.timerange = days;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/warframe/activity.vue?vue&type=script&lang=js&




const title = str => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());

/* harmony default export */ var activityvue_type_script_lang_js_ = ({
  components: {
    module: ui_module["a" /* default */],
    moduleTime: module_time["a" /* default */]
  },
  props: ['item'],

  async asyncData({
    route
  }) {
    const item = route.params.item ? title(route.params.item.replace(/-/g, ' ')) : null;
    const data = await this.$cubic.get(`/warframe/v1/orders/activity${item ? `?item=${item}` : ''}`);
    this.$store.commit('setActivityData', data);
  },

  computed: {
    timerange() {
      return this.$store.state.activity.timerange;
    },

    data() {
      const original = this.$store.state.activity.data;
      const merged = [];

      for (const day of original) {
        const hours = [];

        for (let i = 0; i < day.hours.length; i += 2) {
          hours.push(day.hours[i] + day.hours[i + 1]);
        }

        merged.push({
          day: day.day,
          hours
        });
      }

      return merged;
    },

    min() {
      let min = Number.POSITIVE_INFINITY;

      for (const day of this.data) {
        for (const hour of day.hours) {
          min = hour < min ? hour : min;
        }
      }

      return min === Number.POSITIVE_INFINITY ? null : min;
    },

    max() {
      let max = Number.NEGATIVE_INFINITY;

      for (const day of this.data) {
        for (const hour of day.hours) {
          max = hour > max ? hour : max;
        }
      }

      return max === Number.NEGATIVE_INFINITY ? null : max;
    }

  },
  watch: {
    async timerange(to, from) {
      const item = this.$route.params.item ? title(this.$route.params.item.replace(/-/g, ' ')) : null;
      let url = '/warframe/v1/orders/activity';
      url += item ? `?item=${item}` : '';
      url += to !== 30 ? `${url.includes('?') ? '&' : '?'}timerange=${to}` : '';
      this.$refs.activity.$refs.progress.start();
      const data = await this.$cubic.get(url);
      this.$refs.activity.$refs.progress.finish();
      this.$store.commit('setActivityData', data);
    }

  },
  methods: {
    scale(num) {
      const scale = num / this.max;
      return scale < 0.45 ? 0.45 : scale;
    },

    setTimerange(days) {
      this.$store.commit('setActivityTimerange', days);
    }

  },
  storeModule: activity
});
// CONCATENATED MODULE: ./ui/components/warframe/activity.vue?vue&type=script&lang=js&
 /* harmony default export */ var warframe_activityvue_type_script_lang_js_ = (activityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/warframe/activity.vue?vue&type=style&index=0&id=ae9d50ca&lang=scss&scoped=true&
var activityvue_type_style_index_0_id_ae9d50ca_lang_scss_scoped_true_ = __webpack_require__(148);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/warframe/activity.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  warframe_activityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "ae9d50ca",
  null
  
)

/* harmony default export */ var warframe_activity = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/modules/button.vue?vue&type=template&id=1544791e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"search-button",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.search($event)}}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("\n    Search\n  ")])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('img',{staticClass:"ico-16",attrs:{"src":"/img/sidebar/search.svg","alt":"Search"}})])}]


// CONCATENATED MODULE: ./ui/components/search/modules/button.vue?vue&type=template&id=1544791e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/modules/button.vue?vue&type=script&lang=js&
/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  props: ['path'],
  methods: {
    async search() {
      const input = this.$store.state.search.input;

      if (input) {
        let path;

        if (typeof input !== 'string') {
          const route = this.$route.path;
          const item = this.$route.params.item;

          if (this.$route.fullPath.startsWith('/warframe/items/')) {
            path = `${input.webUrl}${route.split(item)[1]}`;
            path = path.endsWith('//') ? path.slice(0, -1) : path;
          } else {
            path = input.webUrl;
          }
        } else {
          path = `${this.path}?input=${input}`;
        }

        this.$router.push(path);
      }
    }

  }
});
// CONCATENATED MODULE: ./ui/components/search/modules/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var modules_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/search/modules/button.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modules_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var modules_button = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opm_global_vue_vue_type_style_index_0_id_2eda132f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(151);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opm_global_vue_vue_type_style_index_0_id_2eda132f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opm_global_vue_vue_type_style_index_0_id_2eda132f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_opm_global_vue_vue_type_style_index_0_id_2eda132f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_35b28c10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_35b28c10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_35b28c10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_35b28c10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

module.exports = {
  name: 'search',
  state: {
    input: ''
  },
  mutations: {
    setSearchInput(state, input) {
      state.input = input;
    }

  },
  actions: {
    applyInputQuery({
      commit
    }, route) {
      if (route.query.input) {
        commit('setSearchInput', route.query.input);
      }
    }

  }
};

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/warframe/index.vue?vue&type=template&id=35b28c10&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation'),_vm._v(" "),_c('app-content',[_c('header',[_c('div',{staticClass:"background-container"},[_c('div',{staticClass:"background"})]),_vm._v(" "),_c('div',{staticClass:"container search-container"},[_c('div',{staticClass:"search-logo"},[_c('img',{staticClass:"logo",attrs:{"src":"/img/brand/nexushub-logo-typeface.svg","alt":"Nexushub Logo"}}),_vm._v(" "),_c('span',[_vm._v(".co")])]),_vm._v(" "),_c('div',{staticClass:"search-bar"},[_c('search',{attrs:{"focus":true}}),_vm._v(" "),_c('search-button',{attrs:{"path":'/warframe/search'}})],1),_vm._v(" "),_c('h2',[_vm._v("Never miss out on a trade again!")])])]),_vm._v(" "),_c('section',[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row-margin overview"},[_c('div',{staticClass:"col-b-4"},[_c('h2',{staticClass:"sub"},[_vm._v("\n              Market Overview\n            ")]),_vm._v(" "),_c('div',{staticClass:"realtime"},[_c('opm'),_vm._v(" "),_c('div',{staticClass:"most-traded row"},_vm._l((_vm.opm.mostTraded),function(order){return _c('router-link',{key:order.item,staticClass:"item col interactive",attrs:{"to":("/warframe/items/" + (order.item.split(' ').join('-').toLowerCase()) + "/trading")}},[_c('module',[_c('template',{slot:"header"},[_c('div',{staticClass:"img"},[_c('object',{attrs:{"data":("/img/warframe/items/" + (order.item.split(' ').join('-').toLowerCase()) + ".png"),"type":"image/png"}},[_c('img',{attrs:{"src":("/img/warframe/items/" + (order.item.split(' ').join('-').toLowerCase()) + ".jpeg"),"alt":order.item}})])]),_vm._v(" "),_c('h3',[_vm._v(_vm._s(order.item))])]),_vm._v(" "),_c('template',{slot:"body"},[_c('span',{staticClass:"highlight"},[_vm._v(_vm._s(order.amount))]),_vm._v(" "),_c('br'),_vm._v(" "),_c('span',{staticClass:"sub"},[_vm._v(" Orders for "+_vm._s(order.item))])])],2)],1)}),1)],1)]),_vm._v(" "),_c('div',{staticClass:"col-b activity-data"},[_c('h2',{staticClass:"sub"},[_vm._v("\n              Busy Hours\n            ")]),_vm._v(" "),_c('activity')],1)]),_vm._v(" "),_c('ad',{attrs:{"name":"warframe-index-market-overview"}})],1)]),_vm._v(" "),_c('section',[_c('div',{staticClass:"container"},[_c('h2',{staticClass:"sub"},[_vm._v("\n          Latest Patchlogs\n        ")]),_vm._v(" "),_c('div',{staticClass:"row-margin patchlogs"},_vm._l((_vm.patchlogs),function(patchlog){return _c('patchlog',{key:patchlog.date,staticClass:"col-b",attrs:{"patchlog":patchlog,"overview":true}})}),1),_vm._v(" "),_c('ad',{attrs:{"name":"warframe-index-patchlogs"}})],1)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/warframe/index.vue?vue&type=template&id=35b28c10&scoped=true&

// EXTERNAL MODULE: ./ui/components/warframe/activity.vue + 5 modules
var activity = __webpack_require__(191);

// EXTERNAL MODULE: ./ui/components/ads/nitroAds.vue + 4 modules
var nitroAds = __webpack_require__(59);

// EXTERNAL MODULE: ./ui/app-content.vue + 2 modules
var app_content = __webpack_require__(46);

// EXTERNAL MODULE: ./ui/components/seo/meta.js
var meta = __webpack_require__(47);

// EXTERNAL MODULE: ./ui/components/ui/module.vue + 4 modules
var ui_module = __webpack_require__(57);

// EXTERNAL MODULE: ./ui/components/ui/nav/warframe.vue + 4 modules
var warframe = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/warframe/opm-global.vue?vue&type=template&id=2eda132f&scoped=true&
var opm_globalvue_type_template_id_2eda132f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('opm',{attrs:{"opm":_vm.opm}})}
var opm_globalvue_type_template_id_2eda132f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/warframe/opm-global.vue?vue&type=template&id=2eda132f&scoped=true&

// EXTERNAL MODULE: ./ui/components/warframe/opm.vue + 9 modules
var opm = __webpack_require__(190);

// CONCATENATED MODULE: ./ui/store/warframe/opm.js
/* harmony default export */ var warframe_opm = ({
  name: 'opm',
  state: {
    all: {
      total: 0,
      intervals: [],
      sources: {
        wfm: 0.5,
        tradeChat: 0.5
      },
      mostTraded: []
    },
    item: {
      total: 0,
      intervals: [],
      sources: {
        wfm: 0.5,
        tradeChat: 0.5
      }
    }
  },
  mutations: {
    setOpmAll(state, opm) {
      state.all = opm;
    },

    setOpmItem(state, opm) {
      state.item = opm;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/warframe/opm-global.vue?vue&type=script&lang=js&


let updateInterval;
/* harmony default export */ var opm_globalvue_type_script_lang_js_ = ({
  components: {
    opm: opm["a" /* default */]
  },

  async asyncData() {
    const opm = await this.$cubic.get('/warframe/v1/orders/opm');
    this.$store.commit('setOpmAll', opm);
  },

  computed: {
    opm() {
      return this.$store.state.opm.all;
    }

  },

  beforeMount() {
    this.$cubic.subscribe(`/warframe/v1/orders/opm`, opm => {
      this.$store.commit('setOpmAll', opm);
    });
    updateInterval = setInterval(async () => {
      const opm = await this.$cubic.get(`/warframe/v1/orders/opm`);
      this.$store.commit('setOpmAll', opm);
    }, 1000 * 60);
  },

  beforeDestroy() {
    this.$cubic.unsubscribe(`/warframe/v1/orders/opm`);
    clearInterval(updateInterval);
  },

  storeModule: warframe_opm
});
// CONCATENATED MODULE: ./ui/components/warframe/opm-global.vue?vue&type=script&lang=js&
 /* harmony default export */ var warframe_opm_globalvue_type_script_lang_js_ = (opm_globalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/warframe/opm-global.vue?vue&type=style&index=0&id=2eda132f&lang=scss&scoped=true&
var opm_globalvue_type_style_index_0_id_2eda132f_lang_scss_scoped_true_ = __webpack_require__(544);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/warframe/opm-global.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  warframe_opm_globalvue_type_script_lang_js_,
  opm_globalvue_type_template_id_2eda132f_scoped_true_render,
  opm_globalvue_type_template_id_2eda132f_scoped_true_staticRenderFns,
  false,
  null,
  "2eda132f",
  null
  
)

/* harmony default export */ var opm_global = (component.exports);
// EXTERNAL MODULE: ./ui/components/warframe/patchlog.vue + 4 modules
var patchlog = __webpack_require__(114);

// EXTERNAL MODULE: ./ui/components/search/input.vue + 4 modules
var input = __webpack_require__(63);

// EXTERNAL MODULE: ./ui/components/search/modules/button.vue + 4 modules
var modules_button = __webpack_require__(193);

// CONCATENATED MODULE: ./ui/store/warframe/warframe.js
/* harmony default export */ var warframe_warframe = ({
  name: 'warframe',
  state: {
    patchlogs: []
  },
  mutations: {
    setWarframePatchlogs(state, patchlogs) {
      state.patchlogs = patchlogs;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/warframe/index.vue?vue&type=script&lang=js&











/* harmony default export */ var warframevue_type_script_lang_js_ = ({
  components: {
    ad: nitroAds["a" /* default */],
    navigation: warframe["a" /* default */],
    appContent: app_content["a" /* default */],
    opm: opm_global,
    activity: activity["a" /* default */],
    module: ui_module["a" /* default */],
    patchlog: patchlog["a" /* default */],
    search: input["a" /* default */],
    searchButton: modules_button["a" /* default */]
  },

  async asyncData() {
    this.$store.commit('setWarframePatchlogs', await this.$cubic.get('/warframe/v1/patchlogs'));
  },

  computed: {
    opm() {
      return this.$store.state.opm.all;
    },

    activity() {
      return this.$store.state.busyhours.data;
    },

    patchlogs() {
      return this.$store.state.warframe.patchlogs;
    }

  },
  storeModule: warframe_warframe,
  head: {
    title: 'NexusHub · Never miss out on a trade again!',
    meta: Object(meta["a" /* default */])({
      title: 'NexusHub · Never miss out on a trade again!',
      description: 'Get real-time trading data and prices from more than 100,000 players in Warframe\'s Trade Chat, Warframe Market and more.'
    })
  }
});
// CONCATENATED MODULE: ./ui/sites/warframe/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var sites_warframevue_type_script_lang_js_ = (warframevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/sites/warframe/index.vue?vue&type=style&index=0&id=35b28c10&lang=scss&scoped=true&
var warframevue_type_style_index_0_id_35b28c10_lang_scss_scoped_true_ = __webpack_require__(545);

// CONCATENATED MODULE: ./ui/sites/warframe/index.vue






/* normalize component */

var warframe_component = Object(componentNormalizer["a" /* default */])(
  sites_warframevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "35b28c10",
  null
  
)

/* harmony default export */ var sites_warframe = __webpack_exports__["default"] = (warframe_component.exports);

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/input.vue?vue&type=template&id=91c25534&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search"},[_c('div',{staticClass:"field"},[_c('label',[_vm._v("Search")]),_vm._v(" "),_c('input',{ref:"input",attrs:{"placeholder":_vm.placeholder || 'Try: Frost Prime, Maiming Strike...',"type":"text"},domProps:{"value":_vm.input.name || _vm.input},on:{"input":_vm.fetch,"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }$event.preventDefault();if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.complete($event)},function($event){if(!$event.shiftKey){ return null; }$event.stopPropagation();}],"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.search($event)}}}),_vm._v(" "),_c('span',{staticClass:"autocomplete"},[_vm._v(_vm._s(_vm.autocomplete.name))]),_vm._v(" "),(_vm.autocomplete.category)?_c('span',{staticClass:"autocomplete-type"},[_vm._v("\n      "+_vm._s(_vm.autocomplete.category === 'Any' ? 'Search anywhere' : ("Found in " + (_vm.autocomplete.category)))+"\n    ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"tools"},_vm._l((_vm.suggestions),function(suggestion){return _c('div',{key:suggestion.uniqueName,staticClass:"suggestion",on:{"click":function($event){return _vm.search(suggestion)}}},[_c('div',{staticClass:"ico-36"},[_c('img',{attrs:{"src":suggestion.imgUrl,"alt":suggestion.name}}),_vm._v(" "),_c('img',{staticClass:"backdrop",attrs:{"src":suggestion.imgUrl,"alt":suggestion.name}})]),_vm._v(" "),_c('div',{staticClass:"suggestion-main"},[_c('span',{staticClass:"suggestion-name"},[_vm._v(_vm._s(suggestion.name))]),_vm._v(" "),_c('span',{staticClass:"suggestion-type"},[_vm._v(_vm._s(suggestion.type))])]),_vm._v(" "),(suggestion.keyData)?_c('span',{staticClass:"suggestion-data"},[_vm._v(_vm._s(suggestion.keyData))]):_vm._e()])}),0),_vm._v(" "),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/input.vue?vue&type=template&id=91c25534&

// EXTERNAL MODULE: ./ui/store/search.js
var search = __webpack_require__(58);
var search_default = /*#__PURE__*/__webpack_require__.n(search);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/input.vue?vue&type=script&lang=js&

/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  props: ['placeholder', 'focus'],

  data() {
    return {
      input: '',
      autocomplete: {
        name: '',
        type: ''
      },
      suggestions: []
    };
  },

  mounted() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (this.focus && !isMobile) {
      this.$refs.input.focus();
    }
  },

  methods: {
    async fetch(event) {
      this.input = event.target.value;
      this.$store.commit('setSearchInput', event.target.value);

      if (!this.autocomplete.name.startsWith(event.target.value)) {
        this.autocomplete = {
          name: '',
          category: 'Any'
        };
      }

      await this.fetchSuggestions();
    },

    async fetchSuggestions() {
      let result = [];

      if (this.input.length > 1) {
        const query = encodeURIComponent(this.input);
        result = await this.$cubic.get(`/warframe/v1/suggestions?query=${query}&limit=4`);
      }

      const regex = new RegExp(`^${this.input}`, 'i');

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
    },

    complete(suggestion = {}) {
      if (this.autocomplete.name) {
        this.input = this.autocomplete.name;
      }
    },

    search(suggestion = {}) {
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
        this.$router.push(`/warframe/search?input=${this.input}`);
      }
    },

    query(url) {
      let path;
      const route = this.$route.path;
      const item = this.$route.params.item;

      if (this.$route.fullPath.startsWith('/warframe/items/')) {
        path = `${url}${route.split(item)[1]}`;
        path = path.endsWith('//') ? path.slice(0, -1) : path;
      } else {
        path = url;
      }

      this.$router.push(path);
    }

  },
  storeModule: search_default.a
});
// CONCATENATED MODULE: ./ui/components/search/input.vue?vue&type=script&lang=js&
 /* harmony default export */ var search_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/search/input.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  search_inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var input = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/nav/warframe.vue?vue&type=template&id=320b0faa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"row"},[_c('div',{staticClass:"col nav-l"},[_c('router-link',{attrs:{"to":_vm.logoReturnTo,"exact":""}},[_c('img',{staticClass:"logo ico-h-20",attrs:{"src":"/img/brand/nexushub-logo-typeface.svg","alt":"Nexushub Logo"}})])],1),_vm._v(" "),_c('search',{attrs:{"placeholder":"Search items..."}},[_c('span',{staticClass:"shortcut"},[_vm._v("SHIFT + F")])]),_vm._v(" "),_c('div',{staticClass:"col nav-r"},[_c('notifications')],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/nav/warframe.vue?vue&type=template&id=320b0faa&scoped=true&

// EXTERNAL MODULE: ./ui/components/ui/notifications.vue + 4 modules
var notifications = __webpack_require__(52);

// EXTERNAL MODULE: ./ui/components/search/input.vue + 4 modules
var input = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/nav/warframe.vue?vue&type=script&lang=js&


let shortcut, listener;

try {
  shortcut = __webpack_require__(60);
} catch (err) {}

/* harmony default export */ var warframevue_type_script_lang_js_ = ({
  components: {
    notifications: notifications["a" /* default */],
    search: input["a" /* default */]
  },
  computed: {
    logoReturnTo() {
      const routeSplit = this.$route.fullPath.split('/');
      if (!routeSplit[routeSplit.length - 1]) routeSplit.pop();
      if (routeSplit.length > 2) return '/warframe';else return '/';
    }

  },

  mounted() {
    listener = shortcut.bind('shift + f', e => {
      e.preventDefault();
      this.$el.querySelector('input').focus();
    });
  },

  beforeDestroy() {
    shortcut.unbind('shift + f', listener);
  }

});
// CONCATENATED MODULE: ./ui/components/ui/nav/warframe.vue?vue&type=script&lang=js&
 /* harmony default export */ var nav_warframevue_type_script_lang_js_ = (warframevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/ui/nav/warframe.vue?vue&type=style&index=0&id=320b0faa&lang=scss&scoped=true&
var warframevue_type_style_index_0_id_320b0faa_lang_scss_scoped_true_ = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/ui/nav/warframe.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  nav_warframevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "320b0faa",
  null
  
)

/* harmony default export */ var warframe = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_style_index_0_id_320b0faa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_style_index_0_id_320b0faa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_style_index_0_id_320b0faa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_warframe_vue_vue_type_style_index_0_id_320b0faa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"dropdown":"warframe_dropdown_h8zz3","body":"warframe_body_2goxA"};

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"dropdown":"wow-classic_dropdown_i5aP_","body":"wow-classic_body_1naDm"};

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/module-time.vue?vue&type=template&id=ee2ae558&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"module-time"},[_c('div',{staticClass:"interactive",on:{"click":_vm.toggle}},[_c('span',[_vm._v("Last "+_vm._s(_vm.days)+" days")]),_vm._v(" "),_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/dropdown.svg","alt":"Dropdown"}})]),_vm._v(" "),_c('div',{staticClass:"dropdown",class:[{ active: _vm.active }, _vm.theme.dropdown]},[_c('div',{staticClass:"body",class:_vm.theme.body},[_c('span',{class:{ active: _vm.days === 7 },on:{"click":function($event){_vm.fn(7); _vm.toggle()}}},[_vm._v("Last 7 days")]),_vm._v(" "),_c('span',{class:{ active: _vm.days === 30 },on:{"click":function($event){_vm.fn(30); _vm.toggle()}}},[_vm._v("Last 30 days")]),_vm._v(" "),_c('span',{class:{ active: _vm.days === 90 },on:{"click":function($event){_vm.fn(90); _vm.toggle()}}},[_vm._v("Last 90 days")])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/module-time.vue?vue&type=template&id=ee2ae558&scoped=true&

// EXTERNAL MODULE: ./ui/components/_theme.js
var _theme = __webpack_require__(2);
var _theme_default = /*#__PURE__*/__webpack_require__.n(_theme);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/module-time.vue?vue&type=script&lang=js&

/* harmony default export */ var module_timevue_type_script_lang_js_ = ({
  props: ['days', 'fn'],

  data() {
    return {
      active: false
    };
  },

  computed: {
    theme() {
      return _theme_default()(this);
    }

  },
  methods: {
    toggle() {
      this.active = !this.active;
    }

  }
});
// CONCATENATED MODULE: ./ui/components/ui/module-time.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_module_timevue_type_script_lang_js_ = (module_timevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/ui/module-time.vue?vue&type=style&index=0&lang=scss&module=warframe&
var module_timevue_type_style_index_0_lang_scss_module_warframe_ = __webpack_require__(92);

// EXTERNAL MODULE: ./ui/components/ui/module-time.vue?vue&type=style&index=1&lang=scss&module=wow-classic&
var module_timevue_type_style_index_1_lang_scss_module_wow_classic_ = __webpack_require__(93);

// EXTERNAL MODULE: ./ui/components/ui/module-time.vue?vue&type=style&index=2&id=ee2ae558&lang=scss&scoped=true&
var module_timevue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true_ = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/ui/module-time.vue










function injectStyles (context) {
  
  this["warframe"] = (module_timevue_type_style_index_0_lang_scss_module_warframe_["default"].locals || module_timevue_type_style_index_0_lang_scss_module_warframe_["default"])
this["wow-classic"] = (module_timevue_type_style_index_1_lang_scss_module_wow_classic_["default"].locals || module_timevue_type_style_index_1_lang_scss_module_wow_classic_["default"])

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_module_timevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ee2ae558",
  null
  
)

/* harmony default export */ var module_time = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export ObserveVisibility */
/* unused harmony export install */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function processOptions(value) {
  var options;

  if (typeof value === 'function') {
    // Simple options (callback-only)
    options = {
      callback: value
    };
  } else {
    // Options object
    options = value;
  }

  return options;
}
function throttle(callback, delay) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var timeout;
  var lastState;
  var currentArgs;

  var throttled = function throttled(state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    currentArgs = args;
    if (timeout && state === lastState) return;
    var leading = options.leading;

    if (typeof leading === 'function') {
      leading = leading(state, lastState);
    }

    if ((!timeout || state !== lastState) && leading) {
      callback.apply(void 0, [state].concat(_toConsumableArray(currentArgs)));
    }

    lastState = state;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      callback.apply(void 0, [state].concat(_toConsumableArray(currentArgs)));
      timeout = 0;
    }, delay);
  };

  throttled._clear = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return throttled;
}
function deepEqual(val1, val2) {
  if (val1 === val2) return true;

  if (_typeof(val1) === 'object') {
    for (var key in val1) {
      if (!deepEqual(val1[key], val2[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
}

var VisibilityState =
/*#__PURE__*/
function () {
  function VisibilityState(el, options, vnode) {
    _classCallCheck(this, VisibilityState);

    this.el = el;
    this.observer = null;
    this.frozen = false;
    this.createObserver(options, vnode);
  }

  _createClass(VisibilityState, [{
    key: "createObserver",
    value: function createObserver(options, vnode) {
      var _this = this;

      if (this.observer) {
        this.destroyObserver();
      }

      if (this.frozen) return;
      this.options = processOptions(options);

      this.callback = function (result, entry) {
        _this.options.callback(result, entry);

        if (result && _this.options.once) {
          _this.frozen = true;

          _this.destroyObserver();
        }
      }; // Throttle


      if (this.callback && this.options.throttle) {
        var _ref = this.options.throttleOptions || {},
            _leading = _ref.leading;

        this.callback = throttle(this.callback, this.options.throttle, {
          leading: function leading(state) {
            return _leading === 'both' || _leading === 'visible' && state || _leading === 'hidden' && !state;
          }
        });
      }

      this.oldResult = undefined;
      this.observer = new IntersectionObserver(function (entries) {
        var entry = entries[0];

        if (entries.length > 1) {
          var intersectingEntry = entries.find(function (e) {
            return e.isIntersecting;
          });

          if (intersectingEntry) {
            entry = intersectingEntry;
          }
        }

        if (_this.callback) {
          // Use isIntersecting if possible because browsers can report isIntersecting as true, but intersectionRatio as 0, when something very slowly enters the viewport.
          var result = entry.isIntersecting && entry.intersectionRatio >= _this.threshold;
          if (result === _this.oldResult) return;
          _this.oldResult = result;

          _this.callback(result, entry);
        }
      }, this.options.intersection); // Wait for the element to be in document

      vnode.context.$nextTick(function () {
        if (_this.observer) {
          _this.observer.observe(_this.el);
        }
      });
    }
  }, {
    key: "destroyObserver",
    value: function destroyObserver() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      } // Cancel throttled call


      if (this.callback && this.callback._clear) {
        this.callback._clear();

        this.callback = null;
      }
    }
  }, {
    key: "threshold",
    get: function get() {
      return this.options.intersection && this.options.intersection.threshold || 0;
    }
  }]);

  return VisibilityState;
}();

function bind(el, _ref2, vnode) {
  var value = _ref2.value;
  if (!value) return;

  if (typeof IntersectionObserver === 'undefined') {
    console.warn('[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill');
  } else {
    var state = new VisibilityState(el, value, vnode);
    el._vue_visibilityState = state;
  }
}

function update(el, _ref3, vnode) {
  var value = _ref3.value,
      oldValue = _ref3.oldValue;
  if (deepEqual(value, oldValue)) return;
  var state = el._vue_visibilityState;

  if (!value) {
    unbind(el);
    return;
  }

  if (state) {
    state.createObserver(value, vnode);
  } else {
    bind(el, {
      value: value
    }, vnode);
  }
}

function unbind(el) {
  var state = el._vue_visibilityState;

  if (state) {
    state.destroyObserver();
    delete el._vue_visibilityState;
  }
}

var ObserveVisibility = {
  bind: bind,
  update: update,
  unbind: unbind
};

function install(Vue) {
  Vue.directive('observe-visibility', ObserveVisibility);
  /* -- Add more components here -- */
}
/* -- Plugin definition & Auto-install -- */

/* You shouldn't have to modify the code below */
// Plugin

var plugin = {
  // eslint-disable-next-line no-undef
  version: "0.4.6",
  install: install
};

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ })

}]);