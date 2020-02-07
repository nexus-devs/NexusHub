(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/warframe/items/patchlogs.vue?vue&type=template&id=367e3633&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation'),_vm._v(" "),_c('item-header'),_vm._v(" "),_c('app-content',[_c('section',{staticClass:"patchlogs"},[_c('div',{staticClass:"container",attrs:{"id":"patchlogs-container"}},[(_vm.item.patchlogs)?_c('div',{staticClass:"patchlogs",attrs:{"id":"patchlogs"}},[_c('h2',{staticClass:"sub"},[_vm._v("\n            Patchlog History\n          ")]),_vm._v(" "),_vm._l((_vm.item.patchlogs),function(patchlog,i){return _c('div',{key:patchlog.name + patchlog.date},[_c('patchlog',{attrs:{"patchlog":patchlog}}),_vm._v(" "),(i === 0 || i % 3 === 0)?_c('ad',{attrs:{"name":"warframe-patchlogs-mid"}}):_vm._e()],1)})],2):_c('div',{staticClass:"no-data"},[_vm._v("\n          No patchlogs found :(\n        ")]),_vm._v(" "),_c('no-ssr',[(_vm.item.patchlogs[_vm.patchlogs.current])?_c('affix',{staticClass:"timeline-wrapper",attrs:{"offset":{ top: 150, bottom: 80 },"relative-element-selector":"#patchlogs-container"}},[_c('span',[_vm._v(_vm._s(_vm.moment(new Date(_vm.item.patchlogs[_vm.patchlogs.current].date)).fromNow()))]),_vm._v(" "),_c('div',{staticClass:"timeline"},[_c('div',{staticClass:"timeline-slider",style:({ transform: [_vm.progress] })}),_vm._v(" "),_c('span',{style:({ transform: [_vm.progress] })},[_vm._v(_vm._s(_vm.patchlogs.current)+" / "+_vm._s(_vm.item.patchlogs.length))])]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.moment(new Date(_vm.item.patchlogs[_vm.item.patchlogs.length - 1].date)).fromNow()))])]):_vm._e()],1),_vm._v(" "),_c('ad',{attrs:{"name":"warframe-patchlogs-end"}})],1)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/warframe/items/patchlogs.vue?vue&type=template&id=367e3633&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(353);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

var _vueObserveVisibility = __webpack_require__(388);

var _vueObserveVisibility2 = _interopRequireDefault(_vueObserveVisibility);

var _module2 = __webpack_require__(175);

var _module3 = _interopRequireDefault(_module2);

var _moment = __webpack_require__(164);

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


  computed: {
    additions: function additions() {
      return this.patchlog.additions.split('\n').filter(function (a) {
        return a;
      });
    },
    changes: function changes() {
      return this.patchlog.changes.split('\n').filter(function (a) {
        return a;
      });
    },
    fixes: function fixes() {
      return this.patchlog.fixes.split('\n').filter(function (a) {
        return a;
      });
    }
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

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 215,
	"./af.js": 215,
	"./ar": 216,
	"./ar-dz": 217,
	"./ar-dz.js": 217,
	"./ar-kw": 218,
	"./ar-kw.js": 218,
	"./ar-ly": 219,
	"./ar-ly.js": 219,
	"./ar-ma": 220,
	"./ar-ma.js": 220,
	"./ar-sa": 221,
	"./ar-sa.js": 221,
	"./ar-tn": 222,
	"./ar-tn.js": 222,
	"./ar.js": 216,
	"./az": 223,
	"./az.js": 223,
	"./be": 224,
	"./be.js": 224,
	"./bg": 225,
	"./bg.js": 225,
	"./bm": 226,
	"./bm.js": 226,
	"./bn": 227,
	"./bn.js": 227,
	"./bo": 228,
	"./bo.js": 228,
	"./br": 229,
	"./br.js": 229,
	"./bs": 230,
	"./bs.js": 230,
	"./ca": 231,
	"./ca.js": 231,
	"./cs": 232,
	"./cs.js": 232,
	"./cv": 233,
	"./cv.js": 233,
	"./cy": 234,
	"./cy.js": 234,
	"./da": 235,
	"./da.js": 235,
	"./de": 236,
	"./de-at": 237,
	"./de-at.js": 237,
	"./de-ch": 238,
	"./de-ch.js": 238,
	"./de.js": 236,
	"./dv": 239,
	"./dv.js": 239,
	"./el": 240,
	"./el.js": 240,
	"./en-SG": 241,
	"./en-SG.js": 241,
	"./en-au": 242,
	"./en-au.js": 242,
	"./en-ca": 243,
	"./en-ca.js": 243,
	"./en-gb": 244,
	"./en-gb.js": 244,
	"./en-ie": 245,
	"./en-ie.js": 245,
	"./en-il": 246,
	"./en-il.js": 246,
	"./en-nz": 247,
	"./en-nz.js": 247,
	"./eo": 248,
	"./eo.js": 248,
	"./es": 249,
	"./es-do": 250,
	"./es-do.js": 250,
	"./es-us": 251,
	"./es-us.js": 251,
	"./es.js": 249,
	"./et": 252,
	"./et.js": 252,
	"./eu": 253,
	"./eu.js": 253,
	"./fa": 254,
	"./fa.js": 254,
	"./fi": 255,
	"./fi.js": 255,
	"./fo": 256,
	"./fo.js": 256,
	"./fr": 257,
	"./fr-ca": 258,
	"./fr-ca.js": 258,
	"./fr-ch": 259,
	"./fr-ch.js": 259,
	"./fr.js": 257,
	"./fy": 260,
	"./fy.js": 260,
	"./ga": 261,
	"./ga.js": 261,
	"./gd": 262,
	"./gd.js": 262,
	"./gl": 263,
	"./gl.js": 263,
	"./gom-latn": 264,
	"./gom-latn.js": 264,
	"./gu": 265,
	"./gu.js": 265,
	"./he": 266,
	"./he.js": 266,
	"./hi": 267,
	"./hi.js": 267,
	"./hr": 268,
	"./hr.js": 268,
	"./hu": 269,
	"./hu.js": 269,
	"./hy-am": 270,
	"./hy-am.js": 270,
	"./id": 271,
	"./id.js": 271,
	"./is": 272,
	"./is.js": 272,
	"./it": 273,
	"./it-ch": 274,
	"./it-ch.js": 274,
	"./it.js": 273,
	"./ja": 275,
	"./ja.js": 275,
	"./jv": 276,
	"./jv.js": 276,
	"./ka": 277,
	"./ka.js": 277,
	"./kk": 278,
	"./kk.js": 278,
	"./km": 279,
	"./km.js": 279,
	"./kn": 280,
	"./kn.js": 280,
	"./ko": 281,
	"./ko.js": 281,
	"./ku": 282,
	"./ku.js": 282,
	"./ky": 283,
	"./ky.js": 283,
	"./lb": 284,
	"./lb.js": 284,
	"./lo": 285,
	"./lo.js": 285,
	"./lt": 286,
	"./lt.js": 286,
	"./lv": 287,
	"./lv.js": 287,
	"./me": 288,
	"./me.js": 288,
	"./mi": 289,
	"./mi.js": 289,
	"./mk": 290,
	"./mk.js": 290,
	"./ml": 291,
	"./ml.js": 291,
	"./mn": 292,
	"./mn.js": 292,
	"./mr": 293,
	"./mr.js": 293,
	"./ms": 294,
	"./ms-my": 295,
	"./ms-my.js": 295,
	"./ms.js": 294,
	"./mt": 296,
	"./mt.js": 296,
	"./my": 297,
	"./my.js": 297,
	"./nb": 298,
	"./nb.js": 298,
	"./ne": 299,
	"./ne.js": 299,
	"./nl": 300,
	"./nl-be": 301,
	"./nl-be.js": 301,
	"./nl.js": 300,
	"./nn": 302,
	"./nn.js": 302,
	"./pa-in": 303,
	"./pa-in.js": 303,
	"./pl": 304,
	"./pl.js": 304,
	"./pt": 305,
	"./pt-br": 306,
	"./pt-br.js": 306,
	"./pt.js": 305,
	"./ro": 307,
	"./ro.js": 307,
	"./ru": 308,
	"./ru.js": 308,
	"./sd": 309,
	"./sd.js": 309,
	"./se": 310,
	"./se.js": 310,
	"./si": 311,
	"./si.js": 311,
	"./sk": 312,
	"./sk.js": 312,
	"./sl": 313,
	"./sl.js": 313,
	"./sq": 314,
	"./sq.js": 314,
	"./sr": 315,
	"./sr-cyrl": 316,
	"./sr-cyrl.js": 316,
	"./sr.js": 315,
	"./ss": 317,
	"./ss.js": 317,
	"./sv": 318,
	"./sv.js": 318,
	"./sw": 319,
	"./sw.js": 319,
	"./ta": 320,
	"./ta.js": 320,
	"./te": 321,
	"./te.js": 321,
	"./tet": 322,
	"./tet.js": 322,
	"./tg": 323,
	"./tg.js": 323,
	"./th": 324,
	"./th.js": 324,
	"./tl-ph": 325,
	"./tl-ph.js": 325,
	"./tlh": 326,
	"./tlh.js": 326,
	"./tr": 327,
	"./tr.js": 327,
	"./tzl": 328,
	"./tzl.js": 328,
	"./tzm": 329,
	"./tzm-latn": 330,
	"./tzm-latn.js": 330,
	"./tzm.js": 329,
	"./ug-cn": 331,
	"./ug-cn.js": 331,
	"./uk": 332,
	"./uk.js": 332,
	"./ur": 333,
	"./ur.js": 333,
	"./uz": 334,
	"./uz-latn": 335,
	"./uz-latn.js": 335,
	"./uz.js": 334,
	"./vi": 336,
	"./vi.js": 336,
	"./x-pseudo": 337,
	"./x-pseudo.js": 337,
	"./yo": 338,
	"./yo.js": 338,
	"./zh-cn": 339,
	"./zh-cn.js": 339,
	"./zh-hk": 340,
	"./zh-hk.js": 340,
	"./zh-tw": 341,
	"./zh-tw.js": 341
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
webpackContext.id = 365;

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patchlog_vue_vue_type_template_id_b43cd738_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(397);
/* harmony import */ var _patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _patchlog_vue_vue_type_style_index_0_id_b43cd738_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(390);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _patchlog_vue_vue_type_template_id_b43cd738_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _patchlog_vue_vue_type_template_id_b43cd738_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "b43cd738",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_b43cd738_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_b43cd738_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_b43cd738_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_b43cd738_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 397:
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
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * vue-no-ssr v1.1.1
 * (c) 2018-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */


var index = {
  name: 'NoSsr',
  functional: true,
  props: {
    placeholder: String,
    placeholderTag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h, ref) {
    var parent = ref.parent;
    var slots = ref.slots;
    var props = ref.props;

    var ref$1 = slots();
    var defaultSlot = ref$1.default; if ( defaultSlot === void 0 ) defaultSlot = [];
    var placeholderSlot = ref$1.placeholder;

    if (parent._isMounted) {
      return defaultSlot
    }

    parent.$once('hook:mounted', function () {
      parent.$forceUpdate();
    });

    if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
      return h(
        props.placeholderTag,
        {
          class: ['no-ssr-placeholder']
        },
        props.placeholder || placeholderSlot
      )
    }

    // Return a placeholder element for each child in the default slot
    // Or if no children return a single placeholder
    return defaultSlot.length > 0 ? defaultSlot.map(function () { return h(false); }) : h(false)
  }
};

module.exports = index;


/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(516);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

var _vueAffix = __webpack_require__(885);

var _vueAffix2 = _interopRequireDefault(_vueAffix);

var _vueObserveVisibility = __webpack_require__(388);

var _vueObserveVisibility2 = _interopRequireDefault(_vueObserveVisibility);

var _nitroAds = __webpack_require__(200);

var _nitroAds2 = _interopRequireDefault(_nitroAds);

var _appContent = __webpack_require__(176);

var _appContent2 = _interopRequireDefault(_appContent);

var _header = __webpack_require__(398);

var _header2 = _interopRequireDefault(_header);

var _meta = __webpack_require__(177);

var _meta2 = _interopRequireDefault(_meta);

var _moment = __webpack_require__(164);

var _moment2 = _interopRequireDefault(_moment);

var _warframe = __webpack_require__(206);

var _warframe2 = _interopRequireDefault(_warframe);

var _vueNoSsr = __webpack_require__(494);

var _vueNoSsr2 = _interopRequireDefault(_vueNoSsr);

var _patchlog = __webpack_require__(389);

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

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function i(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,function(e){return t[e]}.bind(null,s));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=3)}([function(t,e,i){var o=i(6);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i(2).default)("da410cd4",o,!1,{})},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=function(t,e){var i=t[1]||"",o=t[3];if(!o)return i;if(e&&"function"==typeof btoa){var s=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(o),n=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[i].concat(n).concat([s]).join("\n")}return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},s=0;s<this.length;s++){var n=this[s][0];"number"==typeof n&&(o[n]=!0)}for(s=0;s<t.length;s++){var r=t[s];"number"==typeof r[0]&&o[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),e.push(r))}},e}},function(t,e,i){"use strict";function o(t,e){for(var i=[],o={},s=0;s<e.length;s++){var n=e[s],r=n[0],f={id:t+":"+s,css:n[1],media:n[2],sourceMap:n[3]};o[r]?o[r].parts.push(f):i.push(o[r]={id:r,parts:[f]})}return i}i.r(e),i.d(e,"default",function(){return d});var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n={},r=s&&(document.head||document.getElementsByTagName("head")[0]),f=null,l=0,a=!1,c=function(){},u=null,h="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(t,e,i,s){a=i,u=s||{};var r=o(t,e);return m(r),function(e){for(var i=[],s=0;s<r.length;s++){var f=r[s];(l=n[f.id]).refs--,i.push(l)}e?m(r=o(t,e)):r=[];for(s=0;s<i.length;s++){var l;if(0===(l=i[s]).refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete n[l.id]}}}}function m(t){for(var e=0;e<t.length;e++){var i=t[e],o=n[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(v(i.parts[s]));o.parts.length>i.parts.length&&(o.parts.length=i.parts.length)}else{var r=[];for(s=0;s<i.parts.length;s++)r.push(v(i.parts[s]));n[i.id]={id:i.id,refs:1,parts:r}}}}function x(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function v(t){var e,i,o=document.querySelector("style["+h+'~="'+t.id+'"]');if(o){if(a)return c;o.parentNode.removeChild(o)}if(p){var s=l++;o=f||(f=x()),e=g.bind(null,o,s,!1),i=g.bind(null,o,s,!0)}else o=x(),e=function(t,e){var i=e.css,o=e.media,s=e.sourceMap;o&&t.setAttribute("media",o);u.ssrId&&t.setAttribute(h,e.id);s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,o),i=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else i()}}var S=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}();function g(t,e,i,o){var s=i?"":o.css;if(t.styleSheet)t.styleSheet.cssText=S(e,s);else{var n=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(n,r[e]):t.appendChild(n)}}},function(t,e,i){"use strict";i.r(e);var o=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)};function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}o._withStripped=!0;var n={props:{relativeElementSelector:{type:String,required:!0},offset:{type:Object,default:function(){return{top:40,bottom:40}},validator:function(t){if("object"!==s(t))return!1;var e=Object.keys(t);return e.includes("top")&&e.includes("bottom")}},enabled:{type:Boolean,default:!0},scrollAffix:{type:Boolean,default:!1},scrollContainerSelector:{type:String,default:null}},computed:{relativeElement:function(){return document.querySelector(this.relativeElementSelector)},scrollContainer:function(){return this.scrollContainerSelector?document.querySelector(this.scrollContainerSelector):window},affixTopPos:function(){return this.affixRect.top+this.topOfScreen-this.offset.top-this.topPadding},affixBottomPos:function(){return this.affixRect.bottom+this.topOfScreen+this.offset.bottom},bottomOfScreen:function(){return this.topOfScreen+this.scrollContainer.innerHeight},relativeElmTopPos:function(){return this.topOfScreen+this.relativeElement.getBoundingClientRect().top},relativeElmBottomPos:function(){return this.topOfScreen+this.relativeElement.getBoundingClientRect().bottom},screenIsPastAffix:function(){return this.bottomOfScreen>=this.affixBottomPos},screenIsBeforeAffix:function(){return this.topOfScreen<=this.affixTopPos},screenIsBeforeRelativeElm:function(){return this.topOfScreen<=this.relativeElmTopPos-this.offset.top},screenIsPastRelativeElm:function(){return this.bottomOfScreen>=this.relativeElmBottomPos+this.offset.bottom},screenIsInsideRelativeElm:function(){return!this.screenIsBeforeRelativeElm&&!this.screenIsPastRelativeElm}},data:function(){return{frameId:null,affixHeight:null,affixRect:null,affixInitialTop:null,relativeElmOffsetTop:null,topPadding:null,lastState:null,currentState:null,currentScrollAffix:null,topOfScreen:null,lastDistanceFromTop:null,scrollingUp:null,scrollingDown:null}},watch:{offset:function(t,e){t.top===e.top&&t.bottom===e.bottom||this.onScroll()}},methods:{updateData:function(){this.topOfScreen=this.scrollContainer.scrollTop||window.pageYOffset,this.affixRect=this.$el.getBoundingClientRect(),this.affixHeight=this.$el.offsetHeight,this.relativeElmOffsetTop=this.getOffsetTop(this.relativeElement)},handleScroll:function(){var t=this;this.frameId||(this.frameId=window.requestAnimationFrame(function(){t.onScroll(),t.frameId=null}))},onScroll:function(){if(this.enabled)if(this.updateData(),this.affixHeight+this.offset.top>=this.relativeElement.offsetHeight)this.scrollAffix&&"scrollaffix-top"!==this.currentScrollAffix?this.setScrollAffixTop():"affix-top"!==this.currentState&&this.setAffixTop();else{var t=this.affixHeight+this.offset.bottom+this.offset.top;this.scrollAffix&&t>this.scrollContainer.innerHeight?this.handleScrollAffix():this.handleAffix()}else this.removeClasses()},handleAffix:function(){this.topOfScreen<this.relativeElmOffsetTop-this.offset.top&&this.setAffixTop(),this.topOfScreen>=this.relativeElmOffsetTop-this.offset.top&&this.relativeElmBottomPos-this.offset.bottom>=this.topOfScreen+this.topPadding+this.affixHeight+this.offset.top&&this.setAffix(),this.relativeElmBottomPos-this.offset.bottom<this.topOfScreen+this.topPadding+this.affixHeight+this.offset.top&&this.setAffixBottom(),this.lastState=this.currentState},handleScrollAffix:function(){if(this.setScrollingDirection(),this.screenIsBeforeRelativeElm)this.setScrollAffixTop();else if(this.screenIsPastRelativeElm)this.setScrollAffixBottom();else if(this.screenIsInsideRelativeElm){var t="scrollaffix-top"===this.currentScrollAffix||"scrollaffix-bottom"===this.currentScrollAffix||"scrollaffix-up"===this.currentScrollAffix&&this.scrollingDown||"scrollaffix-down"===this.currentScrollAffix&&this.scrollingUp;this.screenIsBeforeAffix&&this.scrollingUp?this.setScrollAffixUp():this.screenIsPastAffix&&this.scrollingDown?this.setScrollAffixDown():t&&this.setScrollAffixScrolling()}this.lastScrollAffixState=this.currentScrollAffix,this.lastDistanceFromTop=this.topOfScreen},initScrollAffix:function(){this.bottomOfScreen<this.affixBottomPos?this.setScrollAffixTop():this.screenIsInsideRelativeElm?this.setScrollAffixDown():this.screenIsPastRelativeElm?this.setScrollAffixBottom():this.setScrollAffixScrolling()},setScrollAffixScrolling:function(){this.currentScrollAffix="scrollaffix-scrolling",this.$el.style.top="".concat(Math.floor(this.affixRect.top)+this.topOfScreen-this.affixInitialTop,"px"),this.$el.style.bottom="auto",this.removeClasses(),this.emitEvent()},setScrollAffixUp:function(){this.currentScrollAffix="scrollaffix-up",this.currentScrollAffix!==this.lastScrollAffixState&&(this.$el.style.top="".concat(this.topPadding+this.offset.top,"px"),this.$el.style.bottom="auto",this.removeClasses(),this.emitEvent(),this.$el.classList.add("affix"))},setScrollAffixDown:function(){this.currentScrollAffix="scrollaffix-down",this.currentScrollAffix!==this.lastScrollAffixState&&(this.$el.style.bottom="".concat(this.offset.bottom,"px"),this.$el.style.top="auto",this.removeClasses(),this.emitEvent(),this.$el.classList.add("affix"))},setScrollAffixTop:function(){this.currentScrollAffix="scrollaffix-top",this.$el.style.top=0,this.$el.style.bottom="auto",this.removeClasses(),this.emitEvent()},setScrollAffixBottom:function(){this.currentScrollAffix="scrollaffix-bottom",this.$el.style.top="".concat(this.relativeElmBottomPos-this.affixInitialTop-this.affixHeight,"px"),this.$el.style.bottom="auto",this.removeClasses(),this.emitEvent()},setScrollingDirection:function(){this.topOfScreen>this.lastDistanceFromTop?(this.scrollingDown=!0,this.scrollingUp=!1):(this.scrollingUp=!0,this.scrollingDown=!1)},setAffixTop:function(){this.currentState="affix-top",this.currentState!==this.lastState&&(this.emitEvent(),this.removeClasses(),this.$el.classList.remove("affix"),this.$el.classList.add("affix-top"),this.$el.style.top=null)},setAffix:function(){this.currentState="affix",this.$el.style.top="".concat(this.topPadding+this.offset.top,"px"),this.currentState!==this.lastState&&(this.emitEvent(),this.removeClasses(),this.$el.classList.add("affix"))},setAffixBottom:function(){this.currentState="affix-bottom",this.$el.style.top="".concat(this.relativeElement.offsetHeight-this.affixHeight-this.offset.bottom-this.topPadding,"px"),this.currentState!==this.lastState&&(this.emitEvent(),this.removeClasses(),this.$el.classList.add("affix-bottom"))},removeClasses:function(){this.$el.classList.remove("affix-top"),this.$el.classList.remove("affix"),this.$el.classList.remove("affix-bottom")},emitEvent:function(){this.scrollAffix&&this.lastScrollAffixState&&this.currentScrollAffix!==this.lastScrollAffixState&&this.$emit(this.currentScrollAffix.replace("-","")),this.lastState&&this.$emit(this.currentState.replace("-",""))},getOffsetTop:function(t){for(var e=0,i=t;i;)e+=i.offsetTop,i=i.offsetParent;return e}},mounted:function(){this.$el.classList.add("vue-affix"),this.affixInitialTop=this.getOffsetTop(this.$el),this.topPadding=this.affixInitialTop-this.getOffsetTop(this.relativeElement),this.updateData(),this.scrollAffix&&this.initScrollAffix(),this.onScroll(),this.scrollContainer.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){this.scrollContainer.removeEventListener("scroll",this.handleScroll)}};i(5);var r=function(t,e,i,o,s,n,r,f){var l,a="function"==typeof t?t.options:t;if(e&&(a.render=e,a.staticRenderFns=i,a._compiled=!0),o&&(a.functional=!0),n&&(a._scopeId="data-v-"+n),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},a._ssrRegister=l):s&&(l=f?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(a.functional){a._injectStyles=l;var c=a.render;a.render=function(t,e){return l.call(e),c(t,e)}}else{var u=a.beforeCreate;a.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:a}}(n,o,[],!1,null,null,null);r.options.__file="affix.vue";var f=r.exports;i.d(e,"Affix",function(){return f});var l={install:function(t){l.install.installed||t.component("affix",f)}};"undefined"!=typeof window&&window.Vue&&l.install(window.Vue);e.default=l},,function(t,e,i){"use strict";var o=i(0);i.n(o).a},function(t,e,i){(t.exports=i(1)(!1)).push([t.i,"\n.vue-affix {\n  position: relative;\n}\n.affix {\n  position: fixed;\n}\n.affix-bottom {\n  position: relative;\n}\n",""])}])});

/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_style_index_0_id_367e3633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(517);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_style_index_0_id_367e3633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_style_index_0_id_367e3633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_style_index_0_id_367e3633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patchlogs_vue_vue_type_template_id_367e3633_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1015);
/* harmony import */ var _patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(515);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _patchlogs_vue_vue_type_style_index_0_id_367e3633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(886);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _patchlogs_vue_vue_type_template_id_367e3633_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _patchlogs_vue_vue_type_template_id_367e3633_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "367e3633",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

}]);