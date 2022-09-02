(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_082fa77e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_082fa77e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_082fa77e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_deals_vue_vue_type_style_index_0_id_082fa77e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/wow-classic/deals.vue?vue&type=template&id=082fa77e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"deals"},[_c('navigation'),_vm._v(" "),_c('app-content',[_c('div',{staticClass:"results"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"deals-headline"},[_c('h1',[_vm._v("Most Profitable Deals on "+_vm._s(_vm.serverPretty))])]),_vm._v(" "),_c('ad',{attrs:{"name":"wow-classic-deals"}}),_vm._v(" "),_c('deals',{attrs:{"compare-fn":_vm.compareServer}})],1)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/wow-classic/deals.vue?vue&type=template&id=082fa77e&scoped=true&

// EXTERNAL MODULE: ./ui/components/ads/nitroAds.vue + 4 modules
var nitroAds = __webpack_require__(60);

// EXTERNAL MODULE: ./ui/app-content.vue + 2 modules
var app_content = __webpack_require__(47);

// EXTERNAL MODULE: ./ui/components/wow-classic/deals.vue + 4 modules
var deals = __webpack_require__(327);

// EXTERNAL MODULE: ./ui/components/seo/meta.js
var meta = __webpack_require__(48);

// EXTERNAL MODULE: ./ui/components/ui/nav/wow-classic.vue + 10 modules
var wow_classic = __webpack_require__(105);

// EXTERNAL MODULE: ./ui/store/wow-classic/deals.js
var wow_classic_deals = __webpack_require__(326);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/wow-classic/deals.vue?vue&type=script&lang=js&






/* harmony default export */ var dealsvue_type_script_lang_js_ = ({
  components: {
    ad: nitroAds["a" /* default */],
    navigation: wow_classic["a" /* default */],
    appContent: app_content["a" /* default */],
    deals: deals["a" /* default */]
  },

  async asyncData({
    store,
    route
  }) {
    const slug = route.params.slug;
    const fetchUrl = `/wow-classic/v1/items/${slug}/deals?limit=15`;
    const deals = await this.$cubic.get(fetchUrl);

    for (const deal of deals) deal.icon = `https://render-classic-us.worldofwarcraft.com/icons/56/${deal.icon}.jpg`;

    store.commit('setFetchUrl', fetchUrl);
    store.commit('setDeals', deals);
    store.commit('setFilters', [{
      name: 'Absolute Profit',
      unique: true,
      active: true,
      icon: '/img/warframe/ui/platinum.svg',
      fetchUrl
    }, {
      name: 'Relative Profit',
      unique: true,
      active: false,
      icon: '/img/warframe/ui/platinum.svg',
      fetchUrl: `${fetchUrl}&relative=true`
    }]);
  },

  computed: {
    serverPretty() {
      const server = this.$store.state.servers.activeServer;
      return `${server.name} (${server.faction.charAt(0).toUpperCase() + server.faction.slice(1)})`;
    }

  },
  methods: {
    async compareServer(server) {
      const fetchUrlSplit = this.$store.state.deals.fetchUrl.split('&');
      const fetchUrl = `${fetchUrlSplit[0]}&compare_with=${server}`;
      this.$store.commit('setFetchUrl', fetchUrl);
      this.$store.commit('setFilters', [{
        name: 'Absolute Profit',
        unique: true,
        active: true,
        icon: '/img/warframe/ui/platinum.svg',
        fetchUrl
      }, {
        name: 'Relative Profit',
        unique: true,
        active: false,
        icon: '/img/warframe/ui/platinum.svg',
        fetchUrl: `${fetchUrl}&relative=true`
      }]);
      const deals = await this.$cubic.get(fetchUrl);

      for (const deal of deals) deal.icon = `https://render-classic-us.worldofwarcraft.com/icons/56/${deal.icon}.jpg`;

      this.$store.commit('setDeals', deals);
    }

  },
  storeModule: wow_classic_deals["a" /* default */],

  head() {
    return {
      title: `Most Profitable Deals on ${this.serverPretty} · NexusHub`,
      meta: Object(meta["a" /* default */])({
        title: `Most Profitable Deals for ${this.serverPretty} on NexusHub`,
        description: `Get the most profitable deals on the WoW WotLK Classic Auction House for ${this.serverPretty} on NexusHub`,
        image: 'https://nexushub.co/img/brand/og-banner-wow-classic.jpg'
      })
    };
  }

});
// CONCATENATED MODULE: ./ui/sites/wow-classic/deals.vue?vue&type=script&lang=js&
 /* harmony default export */ var wow_classic_dealsvue_type_script_lang_js_ = (dealsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/sites/wow-classic/deals.vue?vue&type=style&index=0&id=082fa77e&lang=scss&scoped=true&
var dealsvue_type_style_index_0_id_082fa77e_lang_scss_scoped_true_ = __webpack_require__(565);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/sites/wow-classic/deals.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  wow_classic_dealsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "082fa77e",
  null
  
)

/* harmony default export */ var sites_wow_classic_deals = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);