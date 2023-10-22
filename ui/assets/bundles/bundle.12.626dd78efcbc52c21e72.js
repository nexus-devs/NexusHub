(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"unread-bubble":"warframe_unread-bubble_3a5aL","notification-header":"warframe_notification-header_1ejVz","notification-body":"warframe_notification-body_n9BTg","notification":"warframe_notification_2Xqvq","footer":"warframe_footer_1YKJU"};

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"unread-bubble":"wow-classic_unread-bubble_3Fi-7","notification-header":"wow-classic_notification-header_1QwD6","notification-body":"wow-classic_notification-body_3a5tH","notification":"wow-classic_notification_O8uYh","footer":"wow-classic_footer_2uhST"};

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 44:
/***/ (function(module, exports) {


function KeyCombo(keyComboStr) {
  this.sourceStr = keyComboStr;
  this.subCombos = KeyCombo.parseComboStr(keyComboStr);
  this.keyNames  = this.subCombos.reduce(function(memo, nextSubCombo) {
    return memo.concat(nextSubCombo);
  }, []);
}

// TODO: Add support for key combo sequences
KeyCombo.sequenceDeliminator = '>>';
KeyCombo.comboDeliminator    = '>';
KeyCombo.keyDeliminator      = '+';

KeyCombo.parseComboStr = function(keyComboStr) {
  var subComboStrs = KeyCombo._splitStr(keyComboStr, KeyCombo.comboDeliminator);
  var combo        = [];

  for (var i = 0 ; i < subComboStrs.length; i += 1) {
    combo.push(KeyCombo._splitStr(subComboStrs[i], KeyCombo.keyDeliminator));
  }
  return combo;
};

KeyCombo.prototype.check = function(pressedKeyNames) {
  var startingKeyNameIndex = 0;
  for (var i = 0; i < this.subCombos.length; i += 1) {
    startingKeyNameIndex = this._checkSubCombo(
      this.subCombos[i],
      startingKeyNameIndex,
      pressedKeyNames
    );
    if (startingKeyNameIndex === -1) { return false; }
  }
  return true;
};

KeyCombo.prototype.isEqual = function(otherKeyCombo) {
  if (
    !otherKeyCombo ||
    typeof otherKeyCombo !== 'string' &&
    typeof otherKeyCombo !== 'object'
  ) { return false; }

  if (typeof otherKeyCombo === 'string') {
    otherKeyCombo = new KeyCombo(otherKeyCombo);
  }

  if (this.subCombos.length !== otherKeyCombo.subCombos.length) {
    return false;
  }
  for (var i = 0; i < this.subCombos.length; i += 1) {
    if (this.subCombos[i].length !== otherKeyCombo.subCombos[i].length) {
      return false;
    }
  }

  for (var i = 0; i < this.subCombos.length; i += 1) {
    var subCombo      = this.subCombos[i];
    var otherSubCombo = otherKeyCombo.subCombos[i].slice(0);

    for (var j = 0; j < subCombo.length; j += 1) {
      var keyName = subCombo[j];
      var index   = otherSubCombo.indexOf(keyName);

      if (index > -1) {
        otherSubCombo.splice(index, 1);
      }
    }
    if (otherSubCombo.length !== 0) {
      return false;
    }
  }

  return true;
};

KeyCombo._splitStr = function(str, deliminator) {
  var s  = str;
  var d  = deliminator;
  var c  = '';
  var ca = [];

  for (var ci = 0; ci < s.length; ci += 1) {
    if (ci > 0 && s[ci] === d && s[ci - 1] !== '\\') {
      ca.push(c.trim());
      c = '';
      ci += 1;
    }
    c += s[ci];
  }
  if (c) { ca.push(c.trim()); }

  return ca;
};

KeyCombo.prototype._checkSubCombo = function(subCombo, startingKeyNameIndex, pressedKeyNames) {
  subCombo = subCombo.slice(0);
  pressedKeyNames = pressedKeyNames.slice(startingKeyNameIndex);

  var endIndex = startingKeyNameIndex;
  for (var i = 0; i < subCombo.length; i += 1) {

    var keyName = subCombo[i];
    if (keyName[0] === '\\') {
      var escapedKeyName = keyName.slice(1);
      if (
        escapedKeyName === KeyCombo.comboDeliminator ||
        escapedKeyName === KeyCombo.keyDeliminator
      ) {
        keyName = escapedKeyName;
      }
    }

    var index = pressedKeyNames.indexOf(keyName);
    if (index > -1) {
      subCombo.splice(i, 1);
      i -= 1;
      if (index > endIndex) {
        endIndex = index;
      }
      if (subCombo.length === 0) {
        return endIndex;
      }
    }
  }
  return -1;
};


module.exports = KeyCombo;


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/app-content.vue?vue&type=template&id=3ce135d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container"},[_c('transition',{attrs:{"appear":"","name":"zoom"}},[_c('div',[_c('main',{staticClass:"app-content"},[_vm._t("default")],2)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/app-content.vue?vue&type=template&id=3ce135d2&

// EXTERNAL MODULE: ./ui/app-content.vue?vue&type=style&index=0&lang=scss&
var app_contentvue_type_style_index_0_lang_scss_ = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/app-content.vue

var script = {}



/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var app_content = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function meta(options) {
  const required = ['description', 'title'];

  for (const key of required) {
    if (!options[key]) {
      throw new Error(`Missing ${key} option in meta function.`);
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

/* harmony default export */ __webpack_exports__["a"] = (meta);

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {


var KeyCombo = __webpack_require__(44);


function Locale(name) {
  this.localeName     = name;
  this.pressedKeys    = [];
  this._appliedMacros = [];
  this._keyMap        = {};
  this._killKeyCodes  = [];
  this._macros        = [];
}

Locale.prototype.bindKeyCode = function(keyCode, keyNames) {
  if (typeof keyNames === 'string') {
    keyNames = [keyNames];
  }

  this._keyMap[keyCode] = keyNames;
};

Locale.prototype.bindMacro = function(keyComboStr, keyNames) {
  if (typeof keyNames === 'string') {
    keyNames = [ keyNames ];
  }

  var handler = null;
  if (typeof keyNames === 'function') {
    handler = keyNames;
    keyNames = null;
  }

  var macro = {
    keyCombo : new KeyCombo(keyComboStr),
    keyNames : keyNames,
    handler  : handler
  };

  this._macros.push(macro);
};

Locale.prototype.getKeyCodes = function(keyName) {
  var keyCodes = [];
  for (var keyCode in this._keyMap) {
    var index = this._keyMap[keyCode].indexOf(keyName);
    if (index > -1) { keyCodes.push(keyCode|0); }
  }
  return keyCodes;
};

Locale.prototype.getKeyNames = function(keyCode) {
  return this._keyMap[keyCode] || [];
};

Locale.prototype.setKillKey = function(keyCode) {
  if (typeof keyCode === 'string') {
    var keyCodes = this.getKeyCodes(keyCode);
    for (var i = 0; i < keyCodes.length; i += 1) {
      this.setKillKey(keyCodes[i]);
    }
    return;
  }

  this._killKeyCodes.push(keyCode);
};

Locale.prototype.pressKey = function(keyCode) {
  if (typeof keyCode === 'string') {
    var keyCodes = this.getKeyCodes(keyCode);
    for (var i = 0; i < keyCodes.length; i += 1) {
      this.pressKey(keyCodes[i]);
    }
    return;
  }

  var keyNames = this.getKeyNames(keyCode);
  for (var i = 0; i < keyNames.length; i += 1) {
    if (this.pressedKeys.indexOf(keyNames[i]) === -1) {
      this.pressedKeys.push(keyNames[i]);
    }
  }

  this._applyMacros();
};

Locale.prototype.releaseKey = function(keyCode) {
  if (typeof keyCode === 'string') {
    var keyCodes = this.getKeyCodes(keyCode);
    for (var i = 0; i < keyCodes.length; i += 1) {
      this.releaseKey(keyCodes[i]);
    }
  }

  else {
    var keyNames         = this.getKeyNames(keyCode);
    var killKeyCodeIndex = this._killKeyCodes.indexOf(keyCode);
    
    if (killKeyCodeIndex > -1) {
      this.pressedKeys.length = 0;
    } else {
      for (var i = 0; i < keyNames.length; i += 1) {
        var index = this.pressedKeys.indexOf(keyNames[i]);
        if (index > -1) {
          this.pressedKeys.splice(index, 1);
        }
      }
    }

    this._clearMacros();
  }
};

Locale.prototype._applyMacros = function() {
  var macros = this._macros.slice(0);
  for (var i = 0; i < macros.length; i += 1) {
    var macro = macros[i];
    if (macro.keyCombo.check(this.pressedKeys)) {
      if (macro.handler) {
        macro.keyNames = macro.handler(this.pressedKeys);
      }
      for (var j = 0; j < macro.keyNames.length; j += 1) {
        if (this.pressedKeys.indexOf(macro.keyNames[j]) === -1) {
          this.pressedKeys.push(macro.keyNames[j]);
        }
      }
      this._appliedMacros.push(macro);
    }
  }
};

Locale.prototype._clearMacros = function() {
  for (var i = 0; i < this._appliedMacros.length; i += 1) {
    var macro = this._appliedMacros[i];
    if (!macro.keyCombo.check(this.pressedKeys)) {
      for (var j = 0; j < macro.keyNames.length; j += 1) {
        var index = this.pressedKeys.indexOf(macro.keyNames[j]);
        if (index > -1) {
          this.pressedKeys.splice(index, 1);
        }
      }
      if (macro.handler) {
        macro.keyNames = null;
      }
      this._appliedMacros.splice(i, 1);
      i -= 1;
    }
  }
};


module.exports = Locale;


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"blocked":"warframe_blocked_3JQnD"};

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"blocked":"wow-classic_blocked_3Rr6k"};

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/notifications.vue?vue&type=template&id=ecd7c010&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"notifications"},[_c('div',{staticClass:"nav-ico interactive",on:{"click":_vm.toggle}},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/notifications.svg","alt":"Notifications"}})]),_vm._v(" "),_c('div',{staticClass:"unread-bubble",class:[{ unread: _vm.notifications.unread.length }, _vm.theme['unread-bubble']]}),_vm._v(" "),_c('div',{staticClass:"notification-container",class:{ visible: _vm.visible }},[_c('div',{staticClass:"notification-header",class:_vm.theme['notification-header']},[_c('span',[_vm._v("Notifications")])]),_vm._v(" "),_c('div',{staticClass:"notification-body",class:_vm.theme['notification-body']},[(_vm.notifications.unread.length || _vm.notifications.hasread.length)?_c('div',{staticClass:"notification-wrapper"},[_vm._l((_vm.notifications.unread),function(notification){return _c('div',{key:notification.message.title + notification.message.body.length,staticClass:"notification",class:_vm.theme.notification},[_c('h4',[_vm._v(_vm._s(notification.message.title))]),_vm._v(" "),_c('p',{domProps:{"innerHTML":_vm._s(notification.message.body)}}),_vm._v(" "),(notification.buttons)?_c('div',{staticClass:"footer",class:_vm.theme.footer},_vm._l((notification.buttons),function(button){return _c('button',{key:button.text,on:{"click":button.fn}},[_vm._v("\n                "+_vm._s(button.text)+"\n              ")])}),0):_vm._e(),_vm._v(" "),_c('img',{staticClass:"dismiss ico-h-20 interactive",attrs:{"src":"/img/ui/close.svg","alt":"Dismiss"},on:{"click":function($event){return _vm.dismiss(notification)}}})])}),_vm._v(" "),_vm._l((_vm.notifications.hasread),function(notification){return _c('div',{key:notification.message.title + notification.message.body.length,staticClass:"notification",class:_vm.theme.notification},[_c('h4',[_vm._v(_vm._s(notification.message.title))]),_vm._v(" "),_c('p',{domProps:{"innerHTML":_vm._s(notification.message.body)}}),_vm._v(" "),(notification.buttons)?_c('div',{staticClass:"footer",class:_vm.theme.footer},_vm._l((notification.buttons),function(button){return _c('button',{key:button.text,on:{"click":button.fn}},[_vm._v("\n                "+_vm._s(button.text)+"\n              ")])}),0):_vm._e(),_vm._v(" "),_c('img',{staticClass:"dismiss ico-h-20 interactive",attrs:{"src":"/img/ui/close.svg","alt":"Dismiss"},on:{"click":function($event){return _vm.dismiss(notification)}}})])})],2):_c('div',{staticClass:"no-notifcations"},[_vm._v("\n          No notifications. We have dispatched a pigeon to deliver the latest news soon 🕊️\n        ")])])])]),_vm._v(" "),_c('div',{staticClass:"hide",class:{ visible: _vm.visible },on:{"click":_vm.toggle}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/notifications.vue?vue&type=template&id=ecd7c010&scoped=true&

// EXTERNAL MODULE: ./ui/components/_theme.js
var _theme = __webpack_require__(2);
var _theme_default = /*#__PURE__*/__webpack_require__.n(_theme);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/notifications.vue?vue&type=script&lang=js&

/* harmony default export */ var notificationsvue_type_script_lang_js_ = ({
  data() {
    return {
      visible: false
    };
  },

  computed: {
    theme() {
      return _theme_default()(this);
    },

    notifications() {
      const notifications = this.$store.state.notifications.all;
      const res = {
        hasread: [],
        unread: []
      };

      for (const notification of notifications) {
        if (!this.isValidGame(notification)) continue;
        const id = `${notification.message.title}-l${notification.message.body.length}`;
        if (localStorage.getItem(`notification_${id}`) === 'removed') continue;

        if (localStorage.getItem(`notification_${id}`) !== 'seen') {
          res.unread.push(notification);
        } else {
          res.hasread.push(notification);
        }
      }

      return res;
    }

  },

  async mounted() {
    this.listen();
    const notifications = await this.$cubic.get('/notifications/v1');

    for (const notification of notifications) {
      this.$store.commit('addNotification', notification);
    }
  },

  methods: {
    listen() {
      this.$cubic.subscribe('/notifications/v1', notification => {
        if (this.isValidGame(notification)) {
          this.visible = true;
          this.$store.commit('addNotification', notification);
        }
      });
    },

    toggle() {
      this.visible = !this.visible;

      if (!this.visible) {
        for (const notification of this.notifications.unread) {
          const id = `${notification.message.title}-l${notification.message.body.length}`;
          if (!localStorage.getItem(`notification_${id}`)) localStorage.setItem(`notification_${id}`, 'seen');
        }

        this.$store.commit('forceUpdateNotifications');
      }
    },

    dismiss(notification) {
      this.$store.commit('removeNotification', notification);
    },

    isValidGame(notification) {
      const game = this.$store.state.game.name;
      return notification.game === 'global' || notification.game === '' || notification.game === game;
    }

  },
  storeModule: {
    name: 'notifications',
    state: {
      all: []
    },
    mutations: {
      addNotification(state, notification) {
        const id = `${notification.message.title}-l${notification.message.body.length}`;

        if (!(localStorage.getItem(`notification_${id}`) === 'removed') && !state.all.find(n => n.message.title === notification.message.title && n.message.body === notification.message.body)) {
          state.all.push(notification);
        }
      },

      removeNotification(state, notification) {
        const id = `${notification.message.title}-l${notification.message.body.length}`;
        localStorage.setItem(`notification_${id}`, 'removed');
        state.all.splice(state.all.findIndex(n => n.message.title === notification.message.title), 1);
      },

      forceUpdateNotifications(state) {
        state.all.push({});
        state.all.pop();
      }

    }
  }
});
// CONCATENATED MODULE: ./ui/components/ui/notifications.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_notificationsvue_type_script_lang_js_ = (notificationsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/ui/notifications.vue?vue&type=style&index=0&lang=scss&module=warframe&
var notificationsvue_type_style_index_0_lang_scss_module_warframe_ = __webpack_require__(54);

// EXTERNAL MODULE: ./ui/components/ui/notifications.vue?vue&type=style&index=1&lang=scss&module=wow-classic&
var notificationsvue_type_style_index_1_lang_scss_module_wow_classic_ = __webpack_require__(55);

// EXTERNAL MODULE: ./ui/components/ui/notifications.vue?vue&type=style&index=2&id=ecd7c010&lang=scss&scoped=true&
var notificationsvue_type_style_index_2_id_ecd7c010_lang_scss_scoped_true_ = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/ui/notifications.vue










function injectStyles (context) {
  
  this["warframe"] = (notificationsvue_type_style_index_0_lang_scss_module_warframe_["default"].locals || notificationsvue_type_style_index_0_lang_scss_module_warframe_["default"])
this["wow-classic"] = (notificationsvue_type_style_index_1_lang_scss_module_wow_classic_["default"].locals || notificationsvue_type_style_index_1_lang_scss_module_wow_classic_["default"])

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_notificationsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ecd7c010",
  null
  
)

/* harmony default export */ var notifications = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_ecd7c010_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_ecd7c010_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_ecd7c010_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_ecd7c010_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_2610ffc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_2610ffc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_2610ffc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_2610ffc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_66e99cb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_66e99cb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_66e99cb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_66e99cb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_5dc99db9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_5dc99db9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_5dc99db9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_5dc99db9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_be8c9e9a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(187);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_be8c9e9a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_be8c9e9a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_be8c9e9a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/wow-classic/search.vue?vue&type=template&id=be8c9e9a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search"},[_c('navigation'),_vm._v(" "),_c('app-content',[_c('div',{staticClass:"search-input"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"search"},[_c('div',{staticClass:"field"},[_c('input',{ref:"input",attrs:{"type":"text","placeholder":"Try: Black Lotus, Devils..."},on:{"input":_vm.search}}),_vm._v(" "),_c('img',{staticClass:"search-ico ico-h-16",attrs:{"src":"/img/ui/search.svg","alt":"Search"}})])]),_vm._v(" "),_c('div',{staticClass:"search-filters"},[_c('div',{staticClass:"search-filters-label interactive",on:{"click":_vm.toggleFilters}},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/filter.svg","alt":"Filter"}}),_vm._v(" "),_c('span',[_vm._v("Filters")])])])])]),_vm._v(" "),_c('div',{ref:"filters",staticClass:"search-filters-options",class:{ expanded: _vm.filtersExpanded }},[_c('div',{staticClass:"container"},[_vm._v("\n        Sorry, no filters here yet. Look around again soon™!\n      ")])]),_vm._v(" "),_c('section',{staticClass:"results",class:{ expanded: _vm.filtersExpanded }},[_c('div',{staticClass:"results-background-fix"}),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"results-headline"},[_c('span',[_vm._v("Results for")]),_vm._v(" "),_c('h1',[_vm._v(_vm._s(_vm.input))])]),_vm._v(" "),_c('ad',{attrs:{"name":"wow-classic-serp-filter"}}),_vm._v(" "),_c('results-group',{attrs:{"type":'items'}}),_vm._v(" "),_c('ad',{attrs:{"name":"wow-classic-serp-results"}})],1)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/wow-classic/search.vue?vue&type=template&id=be8c9e9a&scoped=true&

// EXTERNAL MODULE: ./ui/components/ads/nitroAds.vue + 4 modules
var nitroAds = __webpack_require__(59);

// EXTERNAL MODULE: ./ui/app-content.vue + 2 modules
var app_content = __webpack_require__(46);

// EXTERNAL MODULE: ./ui/components/seo/meta.js
var meta = __webpack_require__(47);

// EXTERNAL MODULE: ./ui/components/ui/nav/wow-classic.vue + 10 modules
var wow_classic = __webpack_require__(104);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results-wow-classic/results-group.vue?vue&type=template&id=5dc99db9&scoped=true&
var results_groupvue_type_template_id_5dc99db9_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"results-group"},[_c('h2',[_vm._v(_vm._s(_vm.type.charAt(0).toUpperCase() + _vm.type.slice(1)))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.results.length)+" Result"+_vm._s(_vm.results.length !== 1 ? 's' : ''))]),_vm._v(" "),_c('div',{staticClass:"filter"},[_c('div',{staticClass:"filter-tags"},[_c('div',{staticClass:"filter-tag-row"},_vm._l((_vm.filters),function(filter){return _c('div',{key:filter.name,staticClass:"btn-tag",class:{ active: filter.active, descending: filter.descending },on:{"click":function($event){return _vm.selectFilterTag(filter)}}},[(filter.icon)?_c('img',{staticClass:"ico-12",attrs:{"src":filter.icon,"alt":filter.alt}}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(filter.name))]),_vm._v(" "),_c('img',{staticClass:"ico-16 asc-desc",class:{ descending: filter.descending },attrs:{"src":"/img/ui/dropdown.svg","alt":"Ascending/Descending"}})])}),0)]),_vm._v(" "),_c('div',{staticClass:"filter-view"},[_c('div',{staticClass:"interactive",class:{ active: _vm.listType === 'list' },on:{"click":function($event){return _vm.selectListView('list')}}},[_c('img',{staticClass:"ico-20",attrs:{"src":"/img/ui/list-view.svg","alt":"List"}}),_vm._v(" "),_c('span',[_vm._v("List")])]),_vm._v(" "),_c('div',{staticClass:"interactive",class:{ active: _vm.listType === 'grid' },on:{"click":function($event){return _vm.selectListView('grid')}}},[_c('img',{staticClass:"ico-20",attrs:{"src":"/img/ui/card-view.svg","alt":"Grid"}}),_vm._v(" "),_c('span',[_vm._v("Grid")])])])]),_vm._v(" "),_c('div',{staticClass:"results-container",style:({ height: (_vm.listHeight + "px") })},[_c('transition-group',{ref:"grid",staticClass:"result-grid list",class:{ active: _vm.listType === 'grid' },attrs:{"name":"list"}},_vm._l((_vm.results),function(result){return _c('item-grid',{key:result.name,attrs:{"result":result,"filters":_vm.filters,"selection":_vm.selection}})}),1),_vm._v(" "),_c('transition-group',{ref:"list",staticClass:"result-list list",class:{ active: _vm.listType === 'list' },attrs:{"name":"list"}},_vm._l((_vm.results),function(result){return _c('item-list',{key:result.name,staticClass:"result row",attrs:{"result":result,"filters":_vm.filters}})}),1)],1),_vm._v(" "),_c('div',{staticClass:"add-items"},[_vm._v("\n    Think we missed an item?\n    "),_c('router-link',{attrs:{"to":"/contact"}},[_vm._v("\n      Let us know\n    ")]),_vm._v(" or\n    "),_c('a',{attrs:{"href":"https://github.com/nexus-devs/wow-classic-items","target":"_blank"}},[_vm._v("add items yourself")]),_vm._v(" if you\n    wanna help us support the project.\n  ")],1)])}
var results_groupvue_type_template_id_5dc99db9_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/results-wow-classic/results-group.vue?vue&type=template&id=5dc99db9&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results-wow-classic/results-grid-snippet.vue?vue&type=template&id=2610ffc4&scoped=true&
var results_grid_snippetvue_type_template_id_2610ffc4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"result col"},[_c('router-link',{staticClass:"interactive",class:{ set: _vm.result.set },attrs:{"to":_vm.result.webUrl}},[_c('div',{staticClass:"result-img"},[_c('div',{staticClass:"result-img-shade"}),_vm._v(" "),_c('img',{class:{ mod: _vm.result.imgUrl.includes('jpeg') },attrs:{"src":_vm.result.imgUrl,"alt":_vm.result.name}}),_vm._v(" "),_c('img',{staticClass:"result-img-blur",attrs:{"src":_vm.result.imgUrl}}),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.result.description))])]),_vm._v(" "),_c('div',{staticClass:"result-info"},[_c('span',[_vm._v(_vm._s(_vm.result.name))])]),_vm._v(" "),_c('div',{staticClass:"result-data"},[(_vm.selection)?_c('div',{staticClass:"result-data-value col"},[_c('span',[_vm._v(_vm._s(_vm.result._score ? _vm.result._score + ' ' + _vm.selection : 'No data')+" ")])]):_c('div',_vm._l((_vm.correctFilters),function(filter){return _c('div',{key:filter.name,staticClass:"result-data-value col"},[(!filter.hidden && _vm.resolve(filter))?_c('div',[_c('img',{staticClass:"ico-12",attrs:{"src":filter.icon,"alt":filter.alt}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.resolve(filter))+_vm._s(filter.unit))])]):_vm._e()])}),0)])])],1)}
var results_grid_snippetvue_type_template_id_2610ffc4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/results-wow-classic/results-grid-snippet.vue?vue&type=template&id=2610ffc4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results-wow-classic/results-grid-snippet.vue?vue&type=script&lang=js&
/* harmony default export */ var results_grid_snippetvue_type_script_lang_js_ = ({
  props: ['result', 'filters', 'selection'],
  computed: {
    correctFilters() {
      return this.filters.filter(f => f.category === this.result.results);
    }

  },
  methods: {
    resolve(filter) {
      let result = this.result;
      const keys = filter.path.split('.');

      try {
        keys.forEach(key => {
          result = result[key];
        });
        return result;
      } catch (err) {}
    }

  }
});
// CONCATENATED MODULE: ./ui/components/search/results-wow-classic/results-grid-snippet.vue?vue&type=script&lang=js&
 /* harmony default export */ var results_wow_classic_results_grid_snippetvue_type_script_lang_js_ = (results_grid_snippetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/search/results-wow-classic/results-grid-snippet.vue?vue&type=style&index=0&id=2610ffc4&lang=scss&scoped=true&
var results_grid_snippetvue_type_style_index_0_id_2610ffc4_lang_scss_scoped_true_ = __webpack_require__(574);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/search/results-wow-classic/results-grid-snippet.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  results_wow_classic_results_grid_snippetvue_type_script_lang_js_,
  results_grid_snippetvue_type_template_id_2610ffc4_scoped_true_render,
  results_grid_snippetvue_type_template_id_2610ffc4_scoped_true_staticRenderFns,
  false,
  null,
  "2610ffc4",
  null
  
)

/* harmony default export */ var results_grid_snippet = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results-wow-classic/results-list-snippet.vue?vue&type=template&id=66e99cb4&scoped=true&
var results_list_snippetvue_type_template_id_66e99cb4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"result"},[_c('router-link',{staticClass:"row interactive",attrs:{"to":_vm.result.webUrl}},[_c('img',{staticClass:"result-img-blur",attrs:{"src":_vm.result.imgUrl}}),_vm._v(" "),_c('div',{staticClass:"result-title col-b"},[_c('div',{staticClass:"result-img"},[_c('img',{class:{ mod: _vm.result.imgUrl.includes('jpeg') },attrs:{"src":_vm.result.imgUrl,"alt":_vm.result.name}})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.result.name))])]),_vm._v(" "),_c('div',{staticClass:"result-data row"},_vm._l((_vm.correctFilters),function(filter){return _c('div',{key:filter.name,staticClass:"result-data-value",class:{ hidden: filter.hidden }},[(_vm.resolve(filter))?_c('div',[(filter.icon)?_c('img',{staticClass:"ico-12",attrs:{"src":filter.icon,"alt":filter.alt}}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.resolve(filter))+_vm._s(filter.unit))])]):_vm._e()])}),0)])],1)}
var results_list_snippetvue_type_template_id_66e99cb4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/results-wow-classic/results-list-snippet.vue?vue&type=template&id=66e99cb4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results-wow-classic/results-list-snippet.vue?vue&type=script&lang=js&
/* harmony default export */ var results_list_snippetvue_type_script_lang_js_ = ({
  props: ['result', 'filters'],
  computed: {
    correctFilters() {
      return this.filters.filter(f => f.category === this.result.results);
    }

  },
  methods: {
    resolve(filter) {
      let result = this.result;
      const keys = filter.path.split('.');

      try {
        keys.forEach(key => {
          result = result[key];
        });
        return result;
      } catch (err) {}
    }

  }
});
// CONCATENATED MODULE: ./ui/components/search/results-wow-classic/results-list-snippet.vue?vue&type=script&lang=js&
 /* harmony default export */ var results_wow_classic_results_list_snippetvue_type_script_lang_js_ = (results_list_snippetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/search/results-wow-classic/results-list-snippet.vue?vue&type=style&index=0&id=66e99cb4&lang=scss&scoped=true&
var results_list_snippetvue_type_style_index_0_id_66e99cb4_lang_scss_scoped_true_ = __webpack_require__(575);

// CONCATENATED MODULE: ./ui/components/search/results-wow-classic/results-list-snippet.vue






/* normalize component */

var results_list_snippet_component = Object(componentNormalizer["a" /* default */])(
  results_wow_classic_results_list_snippetvue_type_script_lang_js_,
  results_list_snippetvue_type_template_id_66e99cb4_scoped_true_render,
  results_list_snippetvue_type_template_id_66e99cb4_scoped_true_staticRenderFns,
  false,
  null,
  "66e99cb4",
  null
  
)

/* harmony default export */ var results_list_snippet = (results_list_snippet_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results-wow-classic/results-group.vue?vue&type=script&lang=js&


/* harmony default export */ var results_groupvue_type_script_lang_js_ = ({
  components: {
    'item-grid': results_grid_snippet,
    'item-list': results_list_snippet
  },
  props: ['type'],

  data() {
    return {
      listHeight: 0,
      listType: 'list',
      selection: ''
    };
  },

  computed: {
    filters() {
      return this.$store.state.serp.filters;
    },

    results() {
      return this.$store.state.serp.results;
    }

  },
  watch: {
    results() {
      setTimeout(() => this.onResize(), 75);
    }

  },

  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

  methods: {
    onResize() {
      if (this.listType === 'grid') {
        this.listHeight = this.$refs.grid.$el.offsetHeight;
      } else {
        this.listHeight = this.$refs.list.$el.offsetHeight;
      }

      this.listHeight += 40;
    },

    selectListView(type) {
      this.listType = type;
      this.onResize();
    },

    selectFilterTag(filter) {
      const newFilters = [].concat(this.$store.state.serp.filters);
      const target = newFilters.find(f => f.name === filter.name);
      const activeFilters = this.$store.state.serp.activeFilters;
      const isActive = activeFilters.find(f => f.name === filter.name);

      if (this.$store.state.serp.activeFilters.length >= 2 && !isActive) {
        this.$store.commit('popSerpActiveFilter');
      }

      if (target.descending) {
        target.active = false;
        target.descending = false;
        this.$store.commit('removeSerpActiveFilter', target.name);
      } else {
        target.descending = target.active;
        target.active = true;
        this.$store.commit('addSerpActiveFilter', target.name);
      }

      this.$store.commit('setSerpFilters', newFilters);

      if (newFilters.reduce((a, f) => a + (f.active ? 1 : 0), 0)) {
        this.$store.dispatch('applySerpFilters');
      } else {
        this.$store.commit('resetSerpResults');
      }

      this.setSelection();
    },

    setSelection() {
      const filters = this.$store.state.serp.activeFilters;
      let selection = '';

      for (const filter of filters) {
        if (selection) {
          selection += filter.active ? ` per ${filter.name}` : '';
        } else {
          selection += filter.active ? filter.name : '';
        }
      }

      this.selection = selection;
    }

  }
});
// CONCATENATED MODULE: ./ui/components/search/results-wow-classic/results-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var results_wow_classic_results_groupvue_type_script_lang_js_ = (results_groupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/search/results-wow-classic/results-group.vue?vue&type=style&index=0&id=5dc99db9&lang=scss&scoped=true&
var results_groupvue_type_style_index_0_id_5dc99db9_lang_scss_scoped_true_ = __webpack_require__(576);

// CONCATENATED MODULE: ./ui/components/search/results-wow-classic/results-group.vue






/* normalize component */

var results_group_component = Object(componentNormalizer["a" /* default */])(
  results_wow_classic_results_groupvue_type_script_lang_js_,
  results_groupvue_type_template_id_5dc99db9_scoped_true_render,
  results_groupvue_type_template_id_5dc99db9_scoped_true_staticRenderFns,
  false,
  null,
  "5dc99db9",
  null
  
)

/* harmony default export */ var results_group = (results_group_component.exports);
// EXTERNAL MODULE: ./ui/components/search/wow-classic.vue + 4 modules
var search_wow_classic = __webpack_require__(113);

// CONCATENATED MODULE: ./ui/store/wow-classic/serp.js
/* harmony default export */ var serp = ({
  name: 'serp',
  state: {
    results: [],
    originalResults: [],
    filters: [{
      name: 'Platinum',
      category: 'items',
      icon: '/img/warframe/ui/platinum.svg',
      alt: 'Platinum',
      unit: 'p',
      path: 'price'
    }, {
      name: 'Ducats',
      category: 'items',
      icon: '/img/warframe/ui/ducats.svg',
      alt: 'Ducats',
      unit: ' Ducats',
      path: 'ducats'
    }, {
      name: 'Supply',
      category: 'items',
      unit: ' Sellers',
      hidden: true,
      path: 'prices.selling.current.orders'
    }, {
      name: 'Demand',
      category: 'items',
      unit: ' Buyers',
      hidden: true,
      path: 'prices.buying.current.orders'
    }],
    activeFilters: []
  },
  mutations: {
    setSerpResults(state, results) {
      state.results = results;
    },

    setSerpFilters(state, filters) {
      state.filters = filters;
    },

    addSerpActiveFilter(state, name) {
      if (!state.activeFilters.find(f => f.name === name)) {
        state.activeFilters.push(state.filters.find(f => f.name === name));
      }
    },

    removeSerpActiveFilter(state, name) {
      const i = state.activeFilters.findIndex(f => f.name === name);
      state.activeFilters.splice(i, 1);
    },

    popSerpActiveFilter(state) {
      const removed = state.activeFilters.pop();
      state.filters.find(f => f.name === removed.name).active = false;
    },

    setSerpOriginalResults(state, filters) {
      state.originalResults = filters;
    },

    resetSerpResults(state, filters) {
      state.results = state.originalResults;
    }

  },
  actions: {
    async fetchSerpResults({
      commit,
      dispatch
    }, {
      input,
      slug
    }) {
      if (input.length < 2) {
        return;
      }

      const B = input.includes('🅱');
      const itemData = await this.$cubic.get(`/wow-classic/v1/search?query=${input.replace(/🅱️/g, 'b')}`);
      const items = await dispatch('sanitizeSerpResults', {
        itemData,
        B,
        slug
      });
      const players = [];
      const results = items.concat(players);
      commit('setSerpResults', results);
      commit('setSerpOriginalResults', results);
      dispatch('applySerpFilters');
    },

    sanitizeSerpResults(context, {
      itemData,
      B,
      slug
    }) {
      const items = [];

      for (const item of itemData) {
        if (items.find(i => i.name === item.name)) {
          continue;
        }

        const name = B ? item.name.toLowerCase().replace(/\b\w/g, l => '🅱') : item.name;
        items.push({
          name,
          imgUrl: item.imgUrl,
          webUrl: slug ? `/wow-classic/items/${slug}/${item.uniqueName}` : `/wow-classic/items/${item.uniqueName}`,
          results: 'items',
          description: name
        });
      }

      return items;
    },

    applySerpFilters({
      commit,
      dispatch,
      state
    }) {
      const filters = state.activeFilters;
      const results = [].concat(state.results);

      const resolve = (filter, result) => {
        try {
          filter.path.split('.').forEach(key => {
            result = result[key];
          });
          return result;
        } catch (err) {}
      };

      const getSortingValue = result => {
        let ascending, res, missing;

        for (const filter of filters) {
          if (!filter.descending) ascending = true;
          if (!resolve(filter, result)) missing = true;
        }

        if (missing) {
          return null;
        }

        if (filters.length > 1) {
          res = resolve(filters[0], result) / resolve(filters[1], result);
        } else {
          res = resolve(filters[0], result);
        }

        return ascending ? -1 * res : res;
      };

      const getUiScore = x => {
        if (x === null) {
          return null;
        } else {
          return x % 1 === 0 ? Math.abs(x) : Math.abs(x).toFixed(2);
        }
      };

      if (!filters.length) {
        return;
      }

      results.sort((a, b) => {
        const aVal = getSortingValue(a);
        const bVal = getSortingValue(b);
        a._score = getUiScore(aVal);
        b._score = getUiScore(bVal);

        if (bVal === null) {
          return -1;
        }

        if (aVal > bVal) {
          return 1;
        }

        if (aVal < bVal) {
          return -1;
        }

        return 0;
      });
      commit('setSerpResults', results);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/wow-classic/search.vue?vue&type=script&lang=js&







let ongoing = setTimeout(() => {});
/* harmony default export */ var searchvue_type_script_lang_js_ = ({
  components: {
    ad: nitroAds["a" /* default */],
    navigation: wow_classic["a" /* default */],
    appContent: app_content["a" /* default */],
    search: search_wow_classic["a" /* default */],
    resultsGroup: results_group
  },

  async asyncData({
    store,
    route
  }) {
    const slug = route.params.slug;
    const input = route.query.input;
    await store.dispatch('fetchSerpResults', {
      input,
      slug
    });
  },

  data() {
    return {
      filtersExpanded: false
    };
  },

  computed: {
    results() {
      return this.$store.state.serp.results;
    },

    input() {
      return this.$store.state.search.input;
    }

  },

  mounted() {
    this.filtersHeight = this.$refs.filters.offsetHeight;
    this.$refs.input.focus();

    for (let i = 0; i < this.$store.state.serp.activeFilters.length; i++) {
      this.$store.commit('popSerpActiveFilter');
    }
  },

  beforeCreate() {
    this.$store.dispatch('applyInputQuery', this.$route);
  },

  beforeDestroy() {
    for (let i = 0; i < this.$store.state.serp.activeFilters.length; i++) {
      this.$store.commit('popSerpActiveFilter');
    }
  },

  methods: {
    async search(event) {
      this.$store.commit('setSearchInput', event.target.value);
      clearTimeout(ongoing);
      ongoing = setTimeout(() => {
        this.$store.dispatch('fetchSerpResults', event.target.value);
        window.history.pushState({}, null, `/wow-classic/search?input=${event.target.value}`);
      }, 200);
    },

    toggleFilters() {
      this.filtersExpanded = !this.filtersExpanded;
    }

  },
  storeModule: serp,

  head() {
    return {
      title: `${this.input} · NexusHub Search`,
      meta: Object(meta["a" /* default */])({
        title: `${this.input} Search Results on NexusHub`,
        description: this.results.length ? `Find ${this.results.length} matches for ${this.input}. ${this.results[0].name}` : 'No search results :(',
        image: this.results.length ? `${this.results[0].imgUrl}` : 'https://nexushub.co/img/brand/og-banner-wow-classic.jpg'
      })
    };
  }

});
// CONCATENATED MODULE: ./ui/sites/wow-classic/search.vue?vue&type=script&lang=js&
 /* harmony default export */ var wow_classic_searchvue_type_script_lang_js_ = (searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/sites/wow-classic/search.vue?vue&type=style&index=0&id=be8c9e9a&lang=scss&scoped=true&
var searchvue_type_style_index_0_id_be8c9e9a_lang_scss_scoped_true_ = __webpack_require__(577);

// CONCATENATED MODULE: ./ui/sites/wow-classic/search.vue






/* normalize component */

var search_component = Object(componentNormalizer["a" /* default */])(
  wow_classic_searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "be8c9e9a",
  null
  
)

/* harmony default export */ var search = __webpack_exports__["default"] = (search_component.exports);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ads/nitroAds.vue?vue&type=template&id=218ff609&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"venatusAd",staticClass:"layout-center vm-placement",class:[{ 'blocked-unit': _vm.blocked, 'ad-unit': !_vm.blocked }, _vm.blocked ? _vm.theme.blocked : ''],style:({ display: _vm.richMedia ? 'none' : undefined }),attrs:{"data-id":_vm.richMedia ? '60197c513e135f1f211a3afb' : '601a74e94b1a0874cf35a794'}},[(_vm.blocked)?_c('span',[_vm._v("Advertising seems to be blocked by your browser. This is fine.")]):_vm._e(),_vm._v(" "),(_vm.blocked)?_c('span',[_vm._v("NexusHub is completely free and we want it to stay that way.\n    Advertising is currently our only income to pay for the servers and to help us to develop NexusHub even further!")]):_vm._e(),_vm._v(" "),(_vm.blocked)?_c('span',[_vm._v("Please consider adding an exception for NexusHub.co on your Adblocker.\n    If you think that any ads are intrusive or inappropriate, feel free to contact us.")]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ads/nitroAds.vue?vue&type=template&id=218ff609&

// EXTERNAL MODULE: ./ui/components/_theme.js
var _theme = __webpack_require__(2);
var _theme_default = /*#__PURE__*/__webpack_require__.n(_theme);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ads/nitroAds.vue?vue&type=script&lang=js&

/* harmony default export */ var nitroAdsvue_type_script_lang_js_ = ({
  props: ['name', 'maxHeight', 'maxWidth', 'richMedia'],

  data() {
    return {
      blocked: false
    };
  },

  computed: {
    theme() {
      return _theme_default()(this);
    }

  },

  mounted() {
    this.$nextTick(() => {
      window.top.__vm_add = window.top.__vm_add || [];

      window.top.__vm_add.push(this.$refs.venatusAd);
    });
  },

  beforeDestroy() {
    window.top.__vm_remove = window.top.__vm_remove || [];

    window.top.__vm_remove.push(this.$refs.venatusAd);
  }

});
// CONCATENATED MODULE: ./ui/components/ads/nitroAds.vue?vue&type=script&lang=js&
 /* harmony default export */ var ads_nitroAdsvue_type_script_lang_js_ = (nitroAdsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/components/ads/nitroAds.vue?vue&type=style&index=0&lang=scss&module=warframe&
var nitroAdsvue_type_style_index_0_lang_scss_module_warframe_ = __webpack_require__(66);

// EXTERNAL MODULE: ./ui/components/ads/nitroAds.vue?vue&type=style&index=1&lang=scss&module=wow-classic&
var nitroAdsvue_type_style_index_1_lang_scss_module_wow_classic_ = __webpack_require__(67);

// EXTERNAL MODULE: ./ui/components/ads/nitroAds.vue?vue&type=style&index=2&lang=scss&
var nitroAdsvue_type_style_index_2_lang_scss_ = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/components/ads/nitroAds.vue










function injectStyles (context) {
  
  this["warframe"] = (nitroAdsvue_type_style_index_0_lang_scss_module_warframe_["default"].locals || nitroAdsvue_type_style_index_0_lang_scss_module_warframe_["default"])
this["wow-classic"] = (nitroAdsvue_type_style_index_1_lang_scss_module_wow_classic_["default"].locals || nitroAdsvue_type_style_index_1_lang_scss_module_wow_classic_["default"])

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ads_nitroAdsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  
)

/* harmony default export */ var nitroAds = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {


var Keyboard = __webpack_require__(61);
var Locale   = __webpack_require__(48);
var KeyCombo = __webpack_require__(44);

var keyboard = new Keyboard();

keyboard.setLocale('us', __webpack_require__(62));

exports          = module.exports = keyboard;
exports.Keyboard = Keyboard;
exports.Locale   = Locale;
exports.KeyCombo = KeyCombo;


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
var Locale = __webpack_require__(48);
var KeyCombo = __webpack_require__(44);


function Keyboard(targetWindow, targetElement, platform, userAgent) {
  this._locale               = null;
  this._currentContext       = null;
  this._contexts             = {};
  this._listeners            = [];
  this._appliedListeners     = [];
  this._locales              = {};
  this._targetElement        = null;
  this._targetWindow         = null;
  this._targetPlatform       = '';
  this._targetUserAgent      = '';
  this._isModernBrowser      = false;
  this._targetKeyDownBinding = null;
  this._targetKeyUpBinding   = null;
  this._targetResetBinding   = null;
  this._paused               = false;
  this._callerHandler        = null;

  this.setContext('global');
  this.watch(targetWindow, targetElement, platform, userAgent);
}

Keyboard.prototype.setLocale = function(localeName, localeBuilder) {
  var locale = null;
  if (typeof localeName === 'string') {

    if (localeBuilder) {
      locale = new Locale(localeName);
      localeBuilder(locale, this._targetPlatform, this._targetUserAgent);
    } else {
      locale = this._locales[localeName] || null;
    }
  } else {
    locale     = localeName;
    localeName = locale._localeName;
  }

  this._locale              = locale;
  this._locales[localeName] = locale;
  if (locale) {
    this._locale.pressedKeys = locale.pressedKeys;
  }
};

Keyboard.prototype.getLocale = function(localName) {
  localName || (localName = this._locale.localeName);
  return this._locales[localName] || null;
};

Keyboard.prototype.bind = function(keyComboStr, pressHandler, releaseHandler, preventRepeatByDefault) {
  if (keyComboStr === null || typeof keyComboStr === 'function') {
    preventRepeatByDefault = releaseHandler;
    releaseHandler         = pressHandler;
    pressHandler           = keyComboStr;
    keyComboStr            = null;
  }

  if (
    keyComboStr &&
    typeof keyComboStr === 'object' &&
    typeof keyComboStr.length === 'number'
  ) {
    for (var i = 0; i < keyComboStr.length; i += 1) {
      this.bind(keyComboStr[i], pressHandler, releaseHandler);
    }
    return;
  }

  this._listeners.push({
    keyCombo               : keyComboStr ? new KeyCombo(keyComboStr) : null,
    pressHandler           : pressHandler           || null,
    releaseHandler         : releaseHandler         || null,
    preventRepeat          : preventRepeatByDefault || false,
    preventRepeatByDefault : preventRepeatByDefault || false
  });
};
Keyboard.prototype.addListener = Keyboard.prototype.bind;
Keyboard.prototype.on          = Keyboard.prototype.bind;

Keyboard.prototype.unbind = function(keyComboStr, pressHandler, releaseHandler) {
  if (keyComboStr === null || typeof keyComboStr === 'function') {
    releaseHandler = pressHandler;
    pressHandler   = keyComboStr;
    keyComboStr = null;
  }

  if (
    keyComboStr &&
    typeof keyComboStr === 'object' &&
    typeof keyComboStr.length === 'number'
  ) {
    for (var i = 0; i < keyComboStr.length; i += 1) {
      this.unbind(keyComboStr[i], pressHandler, releaseHandler);
    }
    return;
  }

  for (var i = 0; i < this._listeners.length; i += 1) {
    var listener = this._listeners[i];

    var comboMatches          = !keyComboStr && !listener.keyCombo ||
                                listener.keyCombo && listener.keyCombo.isEqual(keyComboStr);
    var pressHandlerMatches   = !pressHandler && !releaseHandler ||
                                !pressHandler && !listener.pressHandler ||
                                pressHandler === listener.pressHandler;
    var releaseHandlerMatches = !pressHandler && !releaseHandler ||
                                !releaseHandler && !listener.releaseHandler ||
                                releaseHandler === listener.releaseHandler;

    if (comboMatches && pressHandlerMatches && releaseHandlerMatches) {
      this._listeners.splice(i, 1);
      i -= 1;
    }
  }
};
Keyboard.prototype.removeListener = Keyboard.prototype.unbind;
Keyboard.prototype.off            = Keyboard.prototype.unbind;

Keyboard.prototype.setContext = function(contextName) {
  if(this._locale) { this.releaseAllKeys(); }

  if (!this._contexts[contextName]) {
    this._contexts[contextName] = [];
  }
  this._listeners      = this._contexts[contextName];
  this._currentContext = contextName;
};

Keyboard.prototype.getContext = function() {
  return this._currentContext;
};

Keyboard.prototype.withContext = function(contextName, callback) {
  var previousContextName = this.getContext();
  this.setContext(contextName);

  callback();

  this.setContext(previousContextName);
};

Keyboard.prototype.watch = function(targetWindow, targetElement, targetPlatform, targetUserAgent) {
  var _this = this;

  this.stop();

  if (!targetWindow) {
    if (!global.addEventListener && !global.attachEvent) {
      throw new Error('Cannot find global functions addEventListener or attachEvent.');
    }
    targetWindow = global;
  }

  if (typeof targetWindow.nodeType === 'number') {
    targetUserAgent = targetPlatform;
    targetPlatform  = targetElement;
    targetElement   = targetWindow;
    targetWindow    = global;
  }

  if (!targetWindow.addEventListener && !targetWindow.attachEvent) {
    throw new Error('Cannot find addEventListener or attachEvent methods on targetWindow.');
  }

  this._isModernBrowser = !!targetWindow.addEventListener;

  var userAgent = targetWindow.navigator && targetWindow.navigator.userAgent || '';
  var platform  = targetWindow.navigator && targetWindow.navigator.platform  || '';

  targetElement   && targetElement   !== null || (targetElement   = targetWindow.document);
  targetPlatform  && targetPlatform  !== null || (targetPlatform  = platform);
  targetUserAgent && targetUserAgent !== null || (targetUserAgent = userAgent);

  this._targetKeyDownBinding = function(event) {
    _this.pressKey(event.keyCode, event);
    _this._handleCommandBug(event, platform);
  };
  this._targetKeyUpBinding = function(event) {
    _this.releaseKey(event.keyCode, event);
  };
  this._targetResetBinding = function(event) {
    _this.releaseAllKeys(event)
  };

  this._bindEvent(targetElement, 'keydown', this._targetKeyDownBinding);
  this._bindEvent(targetElement, 'keyup',   this._targetKeyUpBinding);
  this._bindEvent(targetWindow,  'focus',   this._targetResetBinding);
  this._bindEvent(targetWindow,  'blur',    this._targetResetBinding);

  this._targetElement   = targetElement;
  this._targetWindow    = targetWindow;
  this._targetPlatform  = targetPlatform;
  this._targetUserAgent = targetUserAgent;
};

Keyboard.prototype.stop = function() {
  var _this = this;

  if (!this._targetElement || !this._targetWindow) { return; }

  this._unbindEvent(this._targetElement, 'keydown', this._targetKeyDownBinding);
  this._unbindEvent(this._targetElement, 'keyup',   this._targetKeyUpBinding);
  this._unbindEvent(this._targetWindow,  'focus',   this._targetResetBinding);
  this._unbindEvent(this._targetWindow,  'blur',    this._targetResetBinding);

  this._targetWindow  = null;
  this._targetElement = null;
};

Keyboard.prototype.pressKey = function(keyCode, event) {
  if (this._paused) { return; }
  if (!this._locale) { throw new Error('Locale not set'); }

  this._locale.pressKey(keyCode);
  this._applyBindings(event);
};

Keyboard.prototype.releaseKey = function(keyCode, event) {
  if (this._paused) { return; }
  if (!this._locale) { throw new Error('Locale not set'); }

  this._locale.releaseKey(keyCode);
  this._clearBindings(event);
};

Keyboard.prototype.releaseAllKeys = function(event) {
  if (this._paused) { return; }
  if (!this._locale) { throw new Error('Locale not set'); }

  this._locale.pressedKeys.length = 0;
  this._clearBindings(event);
};

Keyboard.prototype.pause = function() {
  if (this._paused) { return; }
  if (this._locale) { this.releaseAllKeys(); }
  this._paused = true;
};

Keyboard.prototype.resume = function() {
  this._paused = false;
};

Keyboard.prototype.reset = function() {
  this.releaseAllKeys();
  this._listeners.length = 0;
};

Keyboard.prototype._bindEvent = function(targetElement, eventName, handler) {
  return this._isModernBrowser ?
    targetElement.addEventListener(eventName, handler, false) :
    targetElement.attachEvent('on' + eventName, handler);
};

Keyboard.prototype._unbindEvent = function(targetElement, eventName, handler) {
  return this._isModernBrowser ?
    targetElement.removeEventListener(eventName, handler, false) :
    targetElement.detachEvent('on' + eventName, handler);
};

Keyboard.prototype._getGroupedListeners = function() {
  var listenerGroups   = [];
  var listenerGroupMap = [];

  var listeners = this._listeners;
  if (this._currentContext !== 'global') {
    listeners = [].concat(listeners, this._contexts.global);
  }

  listeners.sort(function(a, b) {
    return (b.keyCombo ? b.keyCombo.keyNames.length : 0) - (a.keyCombo ? a.keyCombo.keyNames.length : 0);
  }).forEach(function(l) {
    var mapIndex = -1;
    for (var i = 0; i < listenerGroupMap.length; i += 1) {
      if (listenerGroupMap[i] === null && l.keyCombo === null ||
          listenerGroupMap[i] !== null && listenerGroupMap[i].isEqual(l.keyCombo)) {
        mapIndex = i;
      }
    }
    if (mapIndex === -1) {
      mapIndex = listenerGroupMap.length;
      listenerGroupMap.push(l.keyCombo);
    }
    if (!listenerGroups[mapIndex]) {
      listenerGroups[mapIndex] = [];
    }
    listenerGroups[mapIndex].push(l);
  });
  return listenerGroups;
};

Keyboard.prototype._applyBindings = function(event) {
  var preventRepeat = false;

  event || (event = {});
  event.preventRepeat = function() { preventRepeat = true; };
  event.pressedKeys   = this._locale.pressedKeys.slice(0);

  var pressedKeys    = this._locale.pressedKeys.slice(0);
  var listenerGroups = this._getGroupedListeners();


  for (var i = 0; i < listenerGroups.length; i += 1) {
    var listeners = listenerGroups[i];
    var keyCombo  = listeners[0].keyCombo;

    if (keyCombo === null || keyCombo.check(pressedKeys)) {
      for (var j = 0; j < listeners.length; j += 1) {
        var listener = listeners[j];

        if (keyCombo === null) {
          listener = {
            keyCombo               : new KeyCombo(pressedKeys.join('+')),
            pressHandler           : listener.pressHandler,
            releaseHandler         : listener.releaseHandler,
            preventRepeat          : listener.preventRepeat,
            preventRepeatByDefault : listener.preventRepeatByDefault
          };
        }

        if (listener.pressHandler && !listener.preventRepeat) {
          listener.pressHandler.call(this, event);
          if (preventRepeat) {
            listener.preventRepeat = preventRepeat;
            preventRepeat          = false;
          }
        }

        if (listener.releaseHandler && this._appliedListeners.indexOf(listener) === -1) {
          this._appliedListeners.push(listener);
        }
      }

      if (keyCombo) {
        for (var j = 0; j < keyCombo.keyNames.length; j += 1) {
          var index = pressedKeys.indexOf(keyCombo.keyNames[j]);
          if (index !== -1) {
            pressedKeys.splice(index, 1);
            j -= 1;
          }
        }
      }
    }
  }
};

Keyboard.prototype._clearBindings = function(event) {
  event || (event = {});

  for (var i = 0; i < this._appliedListeners.length; i += 1) {
    var listener = this._appliedListeners[i];
    var keyCombo = listener.keyCombo;
    if (keyCombo === null || !keyCombo.check(this._locale.pressedKeys)) {
      if (this._callerHandler !== listener.releaseHandler) {
        var oldCaller = this._callerHandler;
        this._callerHandler = listener.releaseHandler;
        listener.preventRepeat = listener.preventRepeatByDefault;
        listener.releaseHandler.call(this, event);
        this._callerHandler = oldCaller;
      }
      this._appliedListeners.splice(i, 1);
      i -= 1;
    }
  }
};

Keyboard.prototype._handleCommandBug = function(event, platform) {
  // On Mac when the command key is kept pressed, keyup is not triggered for any other key.
  // In this case force a keyup for non-modifier keys directly after the keypress.
  var modifierKeys = ["shift", "ctrl", "alt", "capslock", "tab", "command"];
  if (platform.match("Mac") && this._locale.pressedKeys.includes("command") &&
      !modifierKeys.includes(this._locale.getKeyNames(event.keyCode)[0])) {
    this._targetKeyUpBinding(event);
  }
};

module.exports = Keyboard;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 62:
/***/ (function(module, exports) {


module.exports = function(locale, platform, userAgent) {

  // general
  locale.bindKeyCode(3,   ['cancel']);
  locale.bindKeyCode(8,   ['backspace']);
  locale.bindKeyCode(9,   ['tab']);
  locale.bindKeyCode(12,  ['clear']);
  locale.bindKeyCode(13,  ['enter']);
  locale.bindKeyCode(16,  ['shift']);
  locale.bindKeyCode(17,  ['ctrl']);
  locale.bindKeyCode(18,  ['alt', 'menu']);
  locale.bindKeyCode(19,  ['pause', 'break']);
  locale.bindKeyCode(20,  ['capslock']);
  locale.bindKeyCode(27,  ['escape', 'esc']);
  locale.bindKeyCode(32,  ['space', 'spacebar']);
  locale.bindKeyCode(33,  ['pageup']);
  locale.bindKeyCode(34,  ['pagedown']);
  locale.bindKeyCode(35,  ['end']);
  locale.bindKeyCode(36,  ['home']);
  locale.bindKeyCode(37,  ['left']);
  locale.bindKeyCode(38,  ['up']);
  locale.bindKeyCode(39,  ['right']);
  locale.bindKeyCode(40,  ['down']);
  locale.bindKeyCode(41,  ['select']);
  locale.bindKeyCode(42,  ['printscreen']);
  locale.bindKeyCode(43,  ['execute']);
  locale.bindKeyCode(44,  ['snapshot']);
  locale.bindKeyCode(45,  ['insert', 'ins']);
  locale.bindKeyCode(46,  ['delete', 'del']);
  locale.bindKeyCode(47,  ['help']);
  locale.bindKeyCode(145, ['scrolllock', 'scroll']);
  locale.bindKeyCode(188, ['comma', ',']);
  locale.bindKeyCode(190, ['period', '.']);
  locale.bindKeyCode(191, ['slash', 'forwardslash', '/']);
  locale.bindKeyCode(192, ['graveaccent', '`']);
  locale.bindKeyCode(219, ['openbracket', '[']);
  locale.bindKeyCode(220, ['backslash', '\\']);
  locale.bindKeyCode(221, ['closebracket', ']']);
  locale.bindKeyCode(222, ['apostrophe', '\'']);

  // 0-9
  locale.bindKeyCode(48, ['zero', '0']);
  locale.bindKeyCode(49, ['one', '1']);
  locale.bindKeyCode(50, ['two', '2']);
  locale.bindKeyCode(51, ['three', '3']);
  locale.bindKeyCode(52, ['four', '4']);
  locale.bindKeyCode(53, ['five', '5']);
  locale.bindKeyCode(54, ['six', '6']);
  locale.bindKeyCode(55, ['seven', '7']);
  locale.bindKeyCode(56, ['eight', '8']);
  locale.bindKeyCode(57, ['nine', '9']);

  // numpad
  locale.bindKeyCode(96, ['numzero', 'num0']);
  locale.bindKeyCode(97, ['numone', 'num1']);
  locale.bindKeyCode(98, ['numtwo', 'num2']);
  locale.bindKeyCode(99, ['numthree', 'num3']);
  locale.bindKeyCode(100, ['numfour', 'num4']);
  locale.bindKeyCode(101, ['numfive', 'num5']);
  locale.bindKeyCode(102, ['numsix', 'num6']);
  locale.bindKeyCode(103, ['numseven', 'num7']);
  locale.bindKeyCode(104, ['numeight', 'num8']);
  locale.bindKeyCode(105, ['numnine', 'num9']);
  locale.bindKeyCode(106, ['nummultiply', 'num*']);
  locale.bindKeyCode(107, ['numadd', 'num+']);
  locale.bindKeyCode(108, ['numenter']);
  locale.bindKeyCode(109, ['numsubtract', 'num-']);
  locale.bindKeyCode(110, ['numdecimal', 'num.']);
  locale.bindKeyCode(111, ['numdivide', 'num/']);
  locale.bindKeyCode(144, ['numlock', 'num']);

  // function keys
  locale.bindKeyCode(112, ['f1']);
  locale.bindKeyCode(113, ['f2']);
  locale.bindKeyCode(114, ['f3']);
  locale.bindKeyCode(115, ['f4']);
  locale.bindKeyCode(116, ['f5']);
  locale.bindKeyCode(117, ['f6']);
  locale.bindKeyCode(118, ['f7']);
  locale.bindKeyCode(119, ['f8']);
  locale.bindKeyCode(120, ['f9']);
  locale.bindKeyCode(121, ['f10']);
  locale.bindKeyCode(122, ['f11']);
  locale.bindKeyCode(123, ['f12']);

  // secondary key symbols
  locale.bindMacro('shift + `', ['tilde', '~']);
  locale.bindMacro('shift + 1', ['exclamation', 'exclamationpoint', '!']);
  locale.bindMacro('shift + 2', ['at', '@']);
  locale.bindMacro('shift + 3', ['number', '#']);
  locale.bindMacro('shift + 4', ['dollar', 'dollars', 'dollarsign', '$']);
  locale.bindMacro('shift + 5', ['percent', '%']);
  locale.bindMacro('shift + 6', ['caret', '^']);
  locale.bindMacro('shift + 7', ['ampersand', 'and', '&']);
  locale.bindMacro('shift + 8', ['asterisk', '*']);
  locale.bindMacro('shift + 9', ['openparen', '(']);
  locale.bindMacro('shift + 0', ['closeparen', ')']);
  locale.bindMacro('shift + -', ['underscore', '_']);
  locale.bindMacro('shift + =', ['plus', '+']);
  locale.bindMacro('shift + [', ['opencurlybrace', 'opencurlybracket', '{']);
  locale.bindMacro('shift + ]', ['closecurlybrace', 'closecurlybracket', '}']);
  locale.bindMacro('shift + \\', ['verticalbar', '|']);
  locale.bindMacro('shift + ;', ['colon', ':']);
  locale.bindMacro('shift + \'', ['quotationmark', '\'']);
  locale.bindMacro('shift + !,', ['openanglebracket', '<']);
  locale.bindMacro('shift + .', ['closeanglebracket', '>']);
  locale.bindMacro('shift + /', ['questionmark', '?']);
  
  if (platform.match('Mac')) {
    locale.bindMacro('command', ['mod', 'modifier']);
  } else {
    locale.bindMacro('ctrl', ['mod', 'modifier']);
  }

  //a-z and A-Z
  for (var keyCode = 65; keyCode <= 90; keyCode += 1) {
    var keyName = String.fromCharCode(keyCode + 32);
    var capitalKeyName = String.fromCharCode(keyCode);
  	locale.bindKeyCode(keyCode, keyName);
  	locale.bindMacro('shift + ' + keyName, capitalKeyName);
  	locale.bindMacro('capslock + ' + keyName, capitalKeyName);
  }

  // browser caveats
  var semicolonKeyCode = userAgent.match('Firefox') ? 59  : 186;
  var dashKeyCode      = userAgent.match('Firefox') ? 173 : 189;
  var equalKeyCode     = userAgent.match('Firefox') ? 61  : 187;
  var leftCommandKeyCode;
  var rightCommandKeyCode;
  if (platform.match('Mac') && (userAgent.match('Safari') || userAgent.match('Chrome'))) {
    leftCommandKeyCode  = 91;
    rightCommandKeyCode = 93;
  } else if(platform.match('Mac') && userAgent.match('Opera')) {
    leftCommandKeyCode  = 17;
    rightCommandKeyCode = 17;
  } else if(platform.match('Mac') && userAgent.match('Firefox')) {
    leftCommandKeyCode  = 224;
    rightCommandKeyCode = 224;
  }
  locale.bindKeyCode(semicolonKeyCode,    ['semicolon', ';']);
  locale.bindKeyCode(dashKeyCode,         ['dash', '-']);
  locale.bindKeyCode(equalKeyCode,        ['equal', 'equalsign', '=']);
  locale.bindKeyCode(leftCommandKeyCode,  ['command', 'windows', 'win', 'super', 'leftcommand', 'leftwindows', 'leftwin', 'leftsuper']);
  locale.bindKeyCode(rightCommandKeyCode, ['command', 'windows', 'win', 'super', 'rightcommand', 'rightwindows', 'rightwin', 'rightsuper']);

  // kill keys
  locale.setKillKey('command');
};


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ })

}]);