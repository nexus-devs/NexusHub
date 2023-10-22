(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/warframe/header.vue?vue&type=template&id=24f6182a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_c('div',{staticClass:"container"},[_c('div',{staticClass:"item-profile-img"},[_c('img',{attrs:{"src":_vm.item.imgUrl,"alt":_vm.item.name,"draggable":"false","onerror":"this.style.display='none'"}}),_vm._v(" "),_c('img',{staticClass:"item-profile-img-blur",attrs:{"src":_vm.item.imgUrl,"alt":_vm.item.name,"draggable":"false","onerror":"this.style.display='none'"}})])]),_vm._v(" "),_c('div',{staticClass:"item-img-shade"}),_vm._v(" "),_c('div',{staticClass:"item-img-shade-2"}),_vm._v(" "),_c('div',{staticClass:"background"}),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"item-profile"},[_c('div',{staticClass:"item-profile-data-info"},[_c('h1',[_vm._v(_vm._s(_vm.item.name))]),_vm._v(" "),(_vm.item.vaulted)?_c('div',{staticClass:"vaulted"},[_c('img',{staticClass:"ico-h-24 interactive",attrs:{"src":"/img/warframe/ui/vaulted.svg","alt":"Vaulted"}}),_vm._v(" "),_c('tooltip',[_vm._v("Vaulted")])],1):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.item.components.length > 1)?_c('div',_vm._l((_vm.filteredComponents),function(comp){return _c('span',{key:comp.name,staticClass:"interactive",class:{ selected: _vm.selectedComponent === comp.name },on:{"click":_vm.selectComponent}},[_vm._v("\n            "+_vm._s(_vm.component.name)+"\n          ")])}),0):_vm._l((_vm.item.tags),function(tag,i){return _c('span',{key:tag + i,staticClass:"selected interactive"},[_vm._v("\n          "+_vm._s(tag)+"\n        ")])})],2)])]),_vm._v(" "),_c('nav',{ref:"subnav",staticClass:"subnav"},[_c('div',{staticClass:"container"},[_c('router-link',{staticClass:"interactive",attrs:{"to":_vm.itemUrl,"exact":""}},[_vm._v("\n        Overview\n      ")]),_vm._v(" "),(_vm.item.tradable)?_c('router-link',{staticClass:"interactive",attrs:{"to":(_vm.itemUrl + "/prices")}},[_vm._v("\n        Prices\n      ")]):_vm._e(),_vm._v(" "),(_vm.item.tradable)?_c('router-link',{staticClass:"interactive",attrs:{"to":(_vm.itemUrl + "/trading")}},[_vm._v("\n        Trade\n        "),_c('span',{staticClass:"btn-counter"},[_vm._v(_vm._s(_vm.item.activeOrders))])]):_vm._e(),_vm._v(" "),(_vm.item.patchlogs && _vm.item.patchlogs.length)?_c('router-link',{staticClass:"interactive",attrs:{"to":(_vm.itemUrl + "/patchlogs")}},[_vm._v("\n        Patchlogs\n      ")]):_vm._e()],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/warframe/header.vue?vue&type=template&id=24f6182a&scoped=true&

// CONCATENATED MODULE: ./ui/store/warframe/items.js
/* harmony default export */ var items = ({
  name: 'items',
  state: {
    item: {
      name: '',
      patchlogs: []
    },
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
    setItem(state, item) {
      item.tags = [];
      item.tags.push(item.category);
      item.tags.push(item.name.includes(' Prime') ? 'Prime' : item.type);
      state.item = item;
    },

    setItemComponent(state, component) {
      state.selected.component = component.trim();
    },

    setItemOfferType(state, type) {
      state.selected.offerType = type.toLowerCase();
    },

    setItemPatchlogs(state, patchlogs) {
      state.item.patchlogs = patchlogs;
    },

    addItemPatchlog(state, patchlog) {
      state.patchlogs.current = state.item.patchlogs.findIndex(p => p.name === patchlog.name);
    },

    removeItemPatchlog(state, patchlog) {
      const i = state.patchlogs.active.find(p => p.name === patchlog.name);

      if (i) {
        state.patchlogs.active.slice(i, 1);
        state.patchlogs.current = state.item.patchlogs.findIndex(p => p.name === patchlog.name);
      }
    }

  }
});
// EXTERNAL MODULE: ./ui/components/ui/tooltip.vue + 2 modules
var tooltip = __webpack_require__(84);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/warframe/header.vue?vue&type=script&lang=js&



const title = str => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());

/* harmony default export */ var headervue_type_script_lang_js_ = ({
  components: {
    tooltip: tooltip["a" /* default */]
  },

  async asyncData({
    store,
    route
  }) {
    const item = encodeURIComponent(title(route.params.item.replace(/(?:(\-)(?!\1))+/g, ' ').replace(/- /g, '-')));

    if (title(store.state.items.item.name) !== item) {
      const itemData = await this.$cubic.get(`/warframe/v1/items/${item}`);
      itemData.patchlogs = await this.$cubic.get(`/warframe/v1/patchlogs?item=${item}`);

      if (itemData.tradable) {
        itemData.activeOrders = (await this.$cubic.get(`/warframe/v1/orders?item=${item}`)).length;
      }

      store.commit('setItem', itemData);
    }
  },

  computed: {
    item() {
      return this.$store.state.items.item;
    },

    itemUrl() {
      const item = this.item.name.replace(/ /g, '-').toLowerCase();
      return `/warframe/items/${item}`;
    },

    component() {
      const item = this.$store.state.items.item;
      const selected = this.$store.state.items.selected.component;
      const component = item.components.find(c => c.name === selected);
      return component;
    },

    selectedComponent() {
      return this.$store.state.items.selected.component;
    },

    filteredComponents() {
      return this.item.components.filter(c => c.tradable || c.name === 'Set');
    }

  },
  methods: {
    selectComponent(e) {
      const tag = e.srcElement.outerText;
      this.$store.commit('setItemComponent', tag);
    }

  },
  storeModule: items
});
// CONCATENATED MODULE: ./ui/components/warframe/header.vue?vue&type=script&lang=js&
 /* harmony default export */ var warframe_headervue_type_script_lang_js_ = (headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/warframe/header.vue?vue&type=style&index=0&id=24f6182a&lang=scss&scoped=true&
var headervue_type_style_index_0_id_24f6182a_lang_scss_scoped_true_ = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/warframe/header.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  warframe_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "24f6182a",
  null
  
)

/* harmony default export */ var header = __webpack_exports__["a"] = (component.exports);

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

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_style_index_0_id_367e3633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(157);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_style_index_0_id_367e3633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_style_index_0_id_367e3633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_style_index_0_id_367e3633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/warframe/items/patchlogs.vue?vue&type=template&id=367e3633&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation'),_vm._v(" "),_c('item-header'),_vm._v(" "),_c('app-content',[_c('section',{staticClass:"patchlogs"},[_c('div',{staticClass:"container",attrs:{"id":"patchlogs-container"}},[(_vm.item.patchlogs)?_c('div',{staticClass:"patchlogs",attrs:{"id":"patchlogs"}},[_c('h2',{staticClass:"sub"},[_vm._v("\n            Patchlog History\n          ")]),_vm._v(" "),_vm._l((_vm.item.patchlogs),function(patchlog,i){return _c('div',{key:patchlog.name + patchlog.date},[_c('patchlog',{attrs:{"patchlog":patchlog}}),_vm._v(" "),(i === 0 || i % 3 === 0)?_c('ad',{attrs:{"name":"warframe-patchlogs-mid"}}):_vm._e()],1)})],2):_c('div',{staticClass:"no-data"},[_vm._v("\n          No patchlogs found :(\n        ")]),_vm._v(" "),_c('no-ssr',[(_vm.item.patchlogs[_vm.patchlogs.current])?_c('affix',{staticClass:"timeline-wrapper",attrs:{"offset":{ top: 150, bottom: 80 },"relative-element-selector":"#patchlogs-container"}},[_c('span',[_vm._v(_vm._s(_vm.moment(new Date(_vm.item.patchlogs[_vm.patchlogs.current].date)).fromNow()))]),_vm._v(" "),_c('div',{staticClass:"timeline"},[_c('div',{staticClass:"timeline-slider",style:({ transform: [_vm.progress] })}),_vm._v(" "),_c('span',{style:({ transform: [_vm.progress] })},[_vm._v(_vm._s(_vm.patchlogs.current)+" / "+_vm._s(_vm.item.patchlogs.length))])]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.moment(new Date(_vm.item.patchlogs[_vm.item.patchlogs.length - 1].date)).fromNow()))])]):_vm._e()],1),_vm._v(" "),_c('ad',{attrs:{"name":"warframe-patchlogs-end"}})],1)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/warframe/items/patchlogs.vue?vue&type=template&id=367e3633&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vue-affix/dist/vue-affix.min.js
var vue_affix_min = __webpack_require__(550);
var vue_affix_min_default = /*#__PURE__*/__webpack_require__.n(vue_affix_min);

// EXTERNAL MODULE: ./node_modules/vue-observe-visibility/dist/vue-observe-visibility.esm.js
var vue_observe_visibility_esm = __webpack_require__(99);

// EXTERNAL MODULE: ./ui/components/ads/nitroAds.vue + 4 modules
var nitroAds = __webpack_require__(59);

// EXTERNAL MODULE: ./ui/app-content.vue + 2 modules
var app_content = __webpack_require__(46);

// EXTERNAL MODULE: ./ui/components/warframe/header.vue + 5 modules
var header = __webpack_require__(105);

// EXTERNAL MODULE: ./ui/components/seo/meta.js
var meta = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(39);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./ui/components/ui/nav/warframe.vue + 4 modules
var warframe = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vue-no-ssr/dist/vue-no-ssr.common.js
var vue_no_ssr_common = __webpack_require__(145);
var vue_no_ssr_common_default = /*#__PURE__*/__webpack_require__.n(vue_no_ssr_common);

// EXTERNAL MODULE: ./ui/components/warframe/patchlog.vue + 4 modules
var patchlog = __webpack_require__(114);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/warframe/items/patchlogs.vue?vue&type=script&lang=js&











/* harmony default export */ var patchlogsvue_type_script_lang_js_ = ({
  components: {
    ad: nitroAds["a" /* default */],
    navigation: warframe["a" /* default */],
    appContent: app_content["a" /* default */],
    itemHeader: header["a" /* default */],
    patchlog: patchlog["a" /* default */],
    noSsr: vue_no_ssr_common_default.a
  },

  async asyncData() {
    const item = encodeURIComponent(this.$store.state.items.item.name);
    this.$store.commit('setItemPatchlogs', await this.$cubic.get(`/warframe/v1/patchlogs?item=${item}&limit=0`));
  },

  computed: {
    item() {
      return this.$store.state.items.item;
    },

    patchlogs() {
      return this.$store.state.items.patchlogs;
    },

    progress() {
      return `translateY(${120 * (this.$store.state.items.patchlogs.current || 0.0001) / this.item.patchlogs.length}px)`;
    }

  },

  created() {
    if (!this.item.patchlogs || this.item.patchlogs && !this.item.patchlogs.length) {
      this.$router.replace(this.$route.fullPath.replace('/patchlogs', '/'));
    }
  },

  beforeMount() {
    vue_runtime_esm["a" /* default */].use(vue_affix_min_default.a);
    vue_runtime_esm["a" /* default */].use(vue_observe_visibility_esm["a" /* default */]);
  },

  methods: {
    moment: moment_default.a
  },

  head() {
    return {
      title: `${this.item.name} Patchlogs · NexusHub`,
      meta: Object(meta["a" /* default */])({
        title: `${this.item.name} Patchlogs on NexusHub`,
        description: `Check out all ${this.item.patchlogs ? this.item.patchlogs.length : 0} patchlogs affecting ${this.item.name} on NexusHub.`,
        image: `https://nexushub.co${this.item.imgUrl}`
      })
    };
  }

});
// CONCATENATED MODULE: ./ui/sites/warframe/items/patchlogs.vue?vue&type=script&lang=js&
 /* harmony default export */ var items_patchlogsvue_type_script_lang_js_ = (patchlogsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/sites/warframe/items/patchlogs.vue?vue&type=style&index=0&id=367e3633&lang=scss&scoped=true&
var patchlogsvue_type_style_index_0_id_367e3633_lang_scss_scoped_true_ = __webpack_require__(551);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/sites/warframe/items/patchlogs.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  items_patchlogsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "367e3633",
  null
  
)

/* harmony default export */ var patchlogs = __webpack_exports__["default"] = (component.exports);

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

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/tooltip.vue?vue&type=template&id=2733e75f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tooltip"},[_c('div',{staticClass:"tooltip-pointer"}),_vm._v(" "),_c('span',[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/tooltip.vue?vue&type=template&id=2733e75f&scoped=true&

// EXTERNAL MODULE: ./ui/components/ui/tooltip.vue?vue&type=style&index=0&id=2733e75f&lang=scss&scoped=true&
var tooltipvue_type_style_index_0_id_2733e75f_lang_scss_scoped_true_ = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

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

/* harmony default export */ var tooltip = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_id_2733e75f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_id_2733e75f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_id_2733e75f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_id_2733e75f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_24f6182a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_24f6182a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_24f6182a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_24f6182a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);