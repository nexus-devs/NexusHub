(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/nav/wow-classic.vue?vue&type=template&id=4dac20be&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"row"},[_c('div',{staticClass:"col nav-l"},[_c('router-link',{attrs:{"to":_vm.logoReturnTo,"exact":""}},[_c('img',{staticClass:"logo ico-h-20",attrs:{"src":"/img/brand/nexushub-logo-typeface-wow-classic.svg","alt":"Nexushub Logo"}})])],1),_vm._v(" "),(!_vm.landingPage)?_c('div',{staticClass:"middle-content"},[_c('search',{attrs:{"placeholder":"Search items..."}},[_c('span',{staticClass:"shortcut"},[_vm._v("SHIFT + F")])]),_vm._v(" "),_c('select-server',{attrs:{"fn":_vm.generateSwitchUrl}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col nav-r"},[_c('notifications')],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/nav/wow-classic.vue?vue&type=template&id=4dac20be&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(78);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./ui/components/ui/notifications.vue + 4 modules
var notifications = __webpack_require__(52);

// EXTERNAL MODULE: ./ui/components/search/wow-classic.vue + 4 modules
var wow_classic = __webpack_require__(113);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/select-server.vue?vue&type=template&id=07caf1d2&scoped=true&
var select_servervue_type_template_id_07caf1d2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select"},[_c('div',{staticClass:"interactive",on:{"click":_vm.toggle}},[_c('span',[_vm._v(_vm._s(_vm.activeServer.slug ? _vm.activeServer.name : 'Select Realm'))]),_vm._v(" "),(_vm.activeServer.slug)?_c('img',{staticClass:"faction-logo",attrs:{"src":("/img/wow-classic/ui/" + (_vm.activeServer.faction) + ".svg"),"alt":((_vm.activeServer.name) + " (" + _vm.activeFactionPretty + ")")}}):_vm._e(),_vm._v(" "),_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/dropdown.svg","alt":"Dropdown"}})]),_vm._v(" "),_c('div',{staticClass:"dropdown",class:{ active: _vm.active }},[_c('div',{ref:"scrollbody",staticClass:"body"},[_c('router-link',{class:{ active: !_vm.activeServer.slug },attrs:{"disabled":_vm.disableGlobal,"event":!_vm.disableGlobal ? 'click' : '',"to":_vm.fn('')},nativeOn:{"click":function($event){_vm.setCookie(''); _vm.toggle()}}},[_vm._v("\n        Global\n      ")]),_vm._v(" "),_c('span',{class:{ active: _vm.activeServer.region === 'EU' },on:{"click":function($event){return _vm.selectRegion('EU')}}},[_vm._v("Europe")]),_vm._v(" "),_vm._l((_vm.serverlist.EU),function(s){return [_c('span',{key:s.slug,staticClass:"server",class:{ active: _vm.activeServer.name === s.name, selected: _vm.selected.region === 'EU' },on:{"click":function($event){return _vm.selectServer($event, s)}}},[_vm._v(_vm._s(s.name))]),_vm._v(" "),_c('div',{key:s.slug + 'faction',staticClass:"faction",class:{ selected: _vm.selected.server === s.slug }},[_c('router-link',{staticClass:"image-wrapper",attrs:{"to":_vm.fn(s.slug + '-alliance')},nativeOn:{"click":function($event){_vm.setCookie(s.slug + '-alliance'); _vm.toggle();}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/alliance.svg","alt":((s.name) + " (Alliance)")}})]),_vm._v(" "),_c('router-link',{staticClass:"image-wrapper",attrs:{"to":_vm.fn(s.slug + '-horde')},nativeOn:{"click":function($event){_vm.setCookie(s.slug + '-horde'); _vm.toggle();}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/horde.svg","alt":((s.name) + " (Horde)")}})])],1)]}),_vm._v(" "),_c('span',{class:{ active: _vm.activeServer.region === 'US' },on:{"click":function($event){return _vm.selectRegion('US')}}},[_vm._v("United States")]),_vm._v(" "),_vm._l((_vm.serverlist.US),function(s){return [_c('span',{key:s.slug,staticClass:"server",class:{ active: _vm.activeServer.name === s.name, selected: _vm.selected.region === 'US' },on:{"click":function($event){return _vm.selectServer($event, s)}}},[_vm._v(_vm._s(s.name))]),_vm._v(" "),_c('div',{key:s.slug + 'faction',staticClass:"faction",class:{ selected: _vm.selected.server === s.slug }},[_c('router-link',{staticClass:"image-wrapper",attrs:{"to":_vm.fn(s.slug + '-alliance')},nativeOn:{"click":function($event){_vm.setCookie(s.slug + '-alliance'); _vm.toggle();}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/alliance.svg","alt":((s.name) + " (Alliance)")}})]),_vm._v(" "),_c('router-link',{staticClass:"image-wrapper",attrs:{"to":_vm.fn(s.slug + '-horde')},nativeOn:{"click":function($event){_vm.setCookie(s.slug + '-horde'); _vm.toggle();}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/horde.svg","alt":((s.name) + " (Horde)")}})])],1)]})],2)])])}
var select_servervue_type_template_id_07caf1d2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/select-server.vue?vue&type=template&id=07caf1d2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/select-server.vue?vue&type=script&lang=js&
/* harmony default export */ var select_servervue_type_script_lang_js_ = ({
  props: ['fn'],

  data() {
    return {
      active: false,
      selected: {
        region: '',
        server: ''
      }
    };
  },

  computed: {
    activeServer() {
      return this.$store.state.servers.activeServer;
    },

    activeFactionPretty() {
      return this.activeServer.faction.charAt(0).toUpperCase() + this.activeServer.faction.slice(1);
    },

    serverlist() {
      return {
        EU: this.$store.state.servers.serverlist.filter(s => s.region === 'EU'),
        US: this.$store.state.servers.serverlist.filter(s => s.region === 'US')
      };
    },

    disableGlobal() {
      const routeSplit = this.$route.fullPath.split('/');
      return routeSplit[2] === 'deals';
    }

  },
  methods: {
    toggle() {
      this.active = !this.active;
      if (!this.active) this.selectRegion('');
    },

    selectRegion(region) {
      if (region === this.selected.region) this.selected.region = '';else this.selected.region = region;
      this.selected.server = '';
    },

    selectServer(event, server) {
      if (server === this.selected.server) this.selected.server = '';else this.selected.server = server.slug;
      const body = this.$refs.scrollbody;
      if (event.target.offsetTop > body.scrollTop + body.offsetHeight - 80) body.scrollTop += 40;
    },

    setCookie(server) {
      if (server) this.$cookies.set('lastVisitedRealm', server, '7d');else this.$cookies.remove('lastVisitedRealm');
    }

  }
});
// CONCATENATED MODULE: ./ui/components/wow-classic/select-server.vue?vue&type=script&lang=js&
 /* harmony default export */ var wow_classic_select_servervue_type_script_lang_js_ = (select_servervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/wow-classic/select-server.vue?vue&type=style&index=0&id=07caf1d2&lang=scss&scoped=true&
var select_servervue_type_style_index_0_id_07caf1d2_lang_scss_scoped_true_ = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/wow-classic/select-server.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  wow_classic_select_servervue_type_script_lang_js_,
  select_servervue_type_template_id_07caf1d2_scoped_true_render,
  select_servervue_type_template_id_07caf1d2_scoped_true_staticRenderFns,
  false,
  null,
  "07caf1d2",
  null
  
)

/* harmony default export */ var select_server = (component.exports);
// CONCATENATED MODULE: ./ui/store/wow-classic/servers.js
/* harmony default export */ var servers = ({
  name: 'servers',
  state: {
    activeServer: {
      slug: '',
      name: '',
      region: '',
      faction: ''
    },
    serverlist: []
  },
  mutations: {
    setServerlist(state, list) {
      state.serverlist = list;
    },

    setActiveServer(state, server) {
      if (server.slug) server.slug = `${server.slug}-${server.faction}`;
      state.activeServer = server;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/nav/wow-classic.vue?vue&type=script&lang=js&


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





let shortcut, listener;

try {
  shortcut = __webpack_require__(60);
} catch (err) {}

/* harmony default export */ var wow_classicvue_type_script_lang_js_ = ({
  components: {
    notifications: notifications["a" /* default */],
    search: wow_classic["a" /* default */],
    selectServer: select_server
  },
  props: ['landingPage'],

  async asyncData({
    store,
    route
  }) {
    const serverlist = await this.$cubic.get(`/wow-classic/v1/servers/full`);
    store.commit('setServerlist', serverlist);
    const slug = route.params.slug;

    if (slug) {
      const serverQuery = slug.split('-');
      const faction = serverQuery.pop();

      const server = _objectSpread({}, serverlist.find(s => s.slug === serverQuery.join('-')));

      if (server) {
        server.faction = faction.toLowerCase();
        store.commit('setActiveServer', server);
        return;
      }
    }

    store.commit('setActiveServer', {
      slug: '',
      name: '',
      region: '',
      faction: ''
    });
  },

  computed: {
    activeServer() {
      return this.$store.state.servers.activeServer;
    },

    logoReturnTo() {
      const slug = this.activeServer.slug;
      const routeSplit = this.$route.fullPath.split('/');
      if (!routeSplit[routeSplit.length - 1]) routeSplit.pop();
      if (slug && routeSplit.length === 3) return `/wow-classic`;else if (routeSplit.length > 2) return `/wow-classic${slug ? `/${slug}` : ''}`;else return '/';
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
  },

  methods: {
    generateSwitchUrl(server) {
      const propSplit = this.$route.fullPath.split('?');
      const routeSplit = propSplit[0].split('/');
      if (!routeSplit[routeSplit.length - 1]) routeSplit.pop();

      if (this.activeServer.slug) {
        const index = routeSplit.indexOf(this.activeServer.slug);
        if (server) routeSplit[index] = server;else routeSplit.splice(index, 1);
      } else {
        if (routeSplit.length > 2 && server) routeSplit.splice(3, 0, server);else if (server) routeSplit.push(server);
      }

      propSplit[0] = routeSplit.join('/');
      return propSplit.join('?');
    }

  },
  storeModule: servers
});
// CONCATENATED MODULE: ./ui/components/ui/nav/wow-classic.vue?vue&type=script&lang=js&
 /* harmony default export */ var nav_wow_classicvue_type_script_lang_js_ = (wow_classicvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/ui/nav/wow-classic.vue?vue&type=style&index=0&id=4dac20be&lang=scss&scoped=true&
var wow_classicvue_type_style_index_0_id_4dac20be_lang_scss_scoped_true_ = __webpack_require__(171);

// CONCATENATED MODULE: ./ui/components/ui/nav/wow-classic.vue






/* normalize component */

var wow_classic_component = Object(componentNormalizer["a" /* default */])(
  nav_wow_classicvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4dac20be",
  null
  
)

/* harmony default export */ var nav_wow_classic = __webpack_exports__["a"] = (wow_classic_component.exports);

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/wow-classic.vue?vue&type=template&id=1d9ebd5e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search"},[_c('div',{staticClass:"field"},[_c('label',[_vm._v("Search")]),_vm._v(" "),_c('input',{ref:"input",attrs:{"placeholder":_vm.placeholder || 'Try: Black Lotus, Devilsaur Leather...',"type":"text"},domProps:{"value":_vm.input.name || _vm.input},on:{"input":_vm.fetch,"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }$event.preventDefault();if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.complete($event)},function($event){if(!$event.shiftKey){ return null; }$event.stopPropagation();}],"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.search($event)}}}),_vm._v(" "),_c('span',{staticClass:"autocomplete"},[_vm._v(_vm._s(_vm.autocomplete.name))]),_vm._v(" "),(_vm.autocomplete.category)?_c('span',{staticClass:"autocomplete-type"},[_vm._v("\n      "+_vm._s(_vm.autocomplete.category === 'Any' ? 'Search anywhere' : ("Found in " + (_vm.autocomplete.category)))+"\n    ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"tools"},_vm._l((_vm.suggestions),function(suggestion){return _c('div',{key:suggestion.itemId,staticClass:"suggestion",on:{"click":function($event){return _vm.search(suggestion)}}},[_c('div',{staticClass:"ico-36"},[_c('img',{attrs:{"src":suggestion.imgUrl,"alt":suggestion.name}}),_vm._v(" "),_c('img',{staticClass:"backdrop",attrs:{"src":suggestion.imgUrl,"alt":suggestion.name}})]),_vm._v(" "),_c('div',{staticClass:"suggestion-main"},[_c('span',{staticClass:"suggestion-name"},[_vm._v(_vm._s(suggestion.name))]),_vm._v(" "),_c('span',{staticClass:"suggestion-type"},[_vm._v(_vm._s(suggestion.type))])])])}),0),_vm._v(" "),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/wow-classic.vue?vue&type=template&id=1d9ebd5e&

// EXTERNAL MODULE: ./ui/store/search.js
var search = __webpack_require__(58);
var search_default = /*#__PURE__*/__webpack_require__.n(search);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/wow-classic.vue?vue&type=script&lang=js&

/* harmony default export */ var wow_classicvue_type_script_lang_js_ = ({
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

  computed: {
    activeServer() {
      return this.$store.state.servers.activeServer;
    }

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
        result = await this.$cubic.get(`/wow-classic/v1/search/suggestions?query=${query}&limit=4`);
      }

      const regex = new RegExp(`^${this.input}`, 'i');

      if (result.length && result[0].name.replace(regex, this.input).startsWith(this.input)) {
        this.autocomplete = {
          name: result[0].name.replace(regex, this.input),
          category: result[0].type
        };

        for (const r of result) r.imgUrl = r.imgUrl.replace('/large/', '/medium/');

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
        this.query(suggestion.uniqueName);
        this.suggestions = [];
      } else if (this.suggestions.length) {
        this.input = '';
        this.autocomplete = {
          name: '',
          category: ''
        };
        this.query(this.suggestions[0].uniqueName);
        this.suggestions = [];
      } else {
        this.$router.push(`/wow-classic/search/${this.activeServer.slug}?input=${this.input}`);
      }
    },

    query(itemId) {
      this.$router.push(`/wow-classic/items/${this.activeServer.slug ? `${this.activeServer.slug}/` : ''}${itemId}`);
    }

  },
  storeModule: search_default.a
});
// CONCATENATED MODULE: ./ui/components/search/wow-classic.vue?vue&type=script&lang=js&
 /* harmony default export */ var search_wow_classicvue_type_script_lang_js_ = (wow_classicvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/search/wow-classic.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  search_wow_classicvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var wow_classic = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_style_index_0_id_07caf1d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_style_index_0_id_07caf1d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_style_index_0_id_07caf1d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_style_index_0_id_07caf1d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_style_index_0_id_4dac20be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_style_index_0_id_4dac20be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_style_index_0_id_4dac20be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_style_index_0_id_4dac20be_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"indicator":"warframe_indicator_1spmD"};

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"indicator":"wow-classic_indicator_GhxVb"};

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/charts/indicator.vue?vue&type=template&id=7c937518&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"indicator",class:[{ negative: _vm.diff < 0, positive: _vm.diff > 0, reverse: _vm.reverse }, _vm.theme.indicator],attrs:{"height":"10px","width":"7px","overflow":"visible"}},[_c('path',{attrs:{"transform":("translate(" + (_vm.x || 0) + ", " + (_vm.y || 0) + ")"),"d":_vm.diff < 0 ? _vm.negative : _vm.positive}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/charts/indicator.vue?vue&type=template&id=7c937518&scoped=true&

// EXTERNAL MODULE: ./ui/components/_theme.js
var _theme = __webpack_require__(2);
var _theme_default = /*#__PURE__*/__webpack_require__.n(_theme);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/charts/indicator.vue?vue&type=script&lang=js&

/* harmony default export */ var indicatorvue_type_script_lang_js_ = ({
  props: ['x', 'y', 'diff', 'reverse'],

  data() {
    return {
      positive: 'M3.65,0l-3.15,3.265l2.363,0l-0.001,5.735l1.575,0l0,-5.735l2.363,0l-3.15,-3.265Z',
      negative: 'M3.65,9l3.15,-3.265l-2.363,0l0,-5.735l-1.575,0l0.001,5.735l-2.363,0l3.15,3.265Z'
    };
  },

  computed: {
    theme() {
      return _theme_default()(this);
    }

  }
});
// CONCATENATED MODULE: ./ui/components/charts/indicator.vue?vue&type=script&lang=js&
 /* harmony default export */ var charts_indicatorvue_type_script_lang_js_ = (indicatorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/charts/indicator.vue?vue&type=style&index=0&lang=scss&module=warframe&
var indicatorvue_type_style_index_0_lang_scss_module_warframe_ = __webpack_require__(87);

// EXTERNAL MODULE: ./ui/components/charts/indicator.vue?vue&type=style&index=1&lang=scss&module=wow-classic&
var indicatorvue_type_style_index_1_lang_scss_module_wow_classic_ = __webpack_require__(88);

// EXTERNAL MODULE: ./ui/components/charts/indicator.vue?vue&type=style&index=2&id=7c937518&lang=scss&scoped=true&
var indicatorvue_type_style_index_2_id_7c937518_lang_scss_scoped_true_ = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/charts/indicator.vue










function injectStyles (context) {
  
  this["warframe"] = (indicatorvue_type_style_index_0_lang_scss_module_warframe_["default"].locals || indicatorvue_type_style_index_0_lang_scss_module_warframe_["default"])
this["wow-classic"] = (indicatorvue_type_style_index_1_lang_scss_module_wow_classic_["default"].locals || indicatorvue_type_style_index_1_lang_scss_module_wow_classic_["default"])

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  charts_indicatorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7c937518",
  null
  
)

/* harmony default export */ var indicator = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  parsePrice(price) {
    const gold = Math.floor(price / 10000);
    const silver = Math.floor(price / 100 - gold * 100);
    const copper = price - gold * 10000 - silver * 100;
    let string = '';
    if (gold) string += `${gold}g `;
    if (silver) string += `${silver}s `;
    string += `${copper}c`;
    return string;
  },

  interpolateValues(primary, secondary, xKey) {
    if (!primary.length || !secondary.length) return [];
    const interpolated = [];
    const yKeys = Object.keys(secondary[0]).filter(k => k !== xKey);

    for (const primaryEntry of primary) {
      const primaryX = primaryEntry[xKey];
      const before = secondary.slice().reverse().find(s => s[xKey] <= primaryX);
      const after = secondary.find(s => s[xKey] >= primaryX);
      const iplElem = {};
      iplElem[xKey] = primaryX;
      if (!before && !after) continue;else if (before && after) {
          let iplPct = (primaryX - before[xKey]) / (after[xKey] - before[xKey]);
          if (isNaN(iplPct)) iplPct = 0;

          for (const yKey of yKeys) iplElem[yKey] = Math.round(before[yKey] * (1 - iplPct) + after[yKey] * iplPct);
        } else {
            const matchingElem = before || after;

            for (const yKey of yKeys) iplElem[yKey] = matchingElem[yKey];
          }
      interpolated.push(iplElem);
    }

    return interpolated;
  }

});

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);