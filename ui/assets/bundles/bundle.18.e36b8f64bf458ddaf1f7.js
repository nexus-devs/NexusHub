(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/warframe/items/patchlogs.vue?vue&type=template&id=367e3633&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation'),_vm._v(" "),_c('item-header'),_vm._v(" "),_c('app-content',[_c('section',{staticClass:"patchlogs"},[_c('div',{staticClass:"container",attrs:{"id":"patchlogs-container"}},[(_vm.item.patchlogs)?_c('div',{staticClass:"patchlogs",attrs:{"id":"patchlogs"}},[_c('h2',{staticClass:"sub"},[_vm._v("\n            Patchlog History\n          ")]),_vm._v(" "),_vm._l((_vm.item.patchlogs),function(patchlog,i){return _c('div',{key:patchlog.name + patchlog.date},[_c('patchlog',{attrs:{"patchlog":patchlog}}),_vm._v(" "),(i === 0 || i % 3 === 0)?_c('ad',{attrs:{"name":"warframe-patchlogs-mid"}}):_vm._e()],1)})],2):_c('div',{staticClass:"no-data"},[_vm._v("\n          No patchlogs found :(\n        ")]),_vm._v(" "),_c('no-ssr',[(_vm.item.patchlogs[_vm.patchlogs.current])?_c('affix',{staticClass:"timeline-wrapper",attrs:{"offset":{ top: 150, bottom: 80 },"relative-element-selector":"#patchlogs-container"}},[_c('span',[_vm._v(_vm._s(_vm.moment(new Date(_vm.item.patchlogs[_vm.patchlogs.current].date)).fromNow()))]),_vm._v(" "),_c('div',{staticClass:"timeline"},[_c('div',{staticClass:"timeline-slider",style:({ transform: [_vm.progress] })}),_vm._v(" "),_c('span',{style:({ transform: [_vm.progress] })},[_vm._v(_vm._s(_vm.patchlogs.current)+" / "+_vm._s(_vm.item.patchlogs.length))])]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.moment(new Date(_vm.item.patchlogs[_vm.item.patchlogs.length - 1].date)).fromNow()))])]):_vm._e()],1),_vm._v(" "),_c('ad',{attrs:{"name":"warframe-patchlogs-end"}})],1)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/warframe/items/patchlogs.vue?vue&type=template&id=367e3633&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

var _vueObserveVisibility = __webpack_require__(389);

var _vueObserveVisibility2 = _interopRequireDefault(_vueObserveVisibility);

var _module2 = __webpack_require__(176);

var _module3 = _interopRequireDefault(_module2);

var _moment = __webpack_require__(165);

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

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 216,
	"./af.js": 216,
	"./ar": 217,
	"./ar-dz": 218,
	"./ar-dz.js": 218,
	"./ar-kw": 219,
	"./ar-kw.js": 219,
	"./ar-ly": 220,
	"./ar-ly.js": 220,
	"./ar-ma": 221,
	"./ar-ma.js": 221,
	"./ar-sa": 222,
	"./ar-sa.js": 222,
	"./ar-tn": 223,
	"./ar-tn.js": 223,
	"./ar.js": 217,
	"./az": 224,
	"./az.js": 224,
	"./be": 225,
	"./be.js": 225,
	"./bg": 226,
	"./bg.js": 226,
	"./bm": 227,
	"./bm.js": 227,
	"./bn": 228,
	"./bn.js": 228,
	"./bo": 229,
	"./bo.js": 229,
	"./br": 230,
	"./br.js": 230,
	"./bs": 231,
	"./bs.js": 231,
	"./ca": 232,
	"./ca.js": 232,
	"./cs": 233,
	"./cs.js": 233,
	"./cv": 234,
	"./cv.js": 234,
	"./cy": 235,
	"./cy.js": 235,
	"./da": 236,
	"./da.js": 236,
	"./de": 237,
	"./de-at": 238,
	"./de-at.js": 238,
	"./de-ch": 239,
	"./de-ch.js": 239,
	"./de.js": 237,
	"./dv": 240,
	"./dv.js": 240,
	"./el": 241,
	"./el.js": 241,
	"./en-SG": 242,
	"./en-SG.js": 242,
	"./en-au": 243,
	"./en-au.js": 243,
	"./en-ca": 244,
	"./en-ca.js": 244,
	"./en-gb": 245,
	"./en-gb.js": 245,
	"./en-ie": 246,
	"./en-ie.js": 246,
	"./en-il": 247,
	"./en-il.js": 247,
	"./en-nz": 248,
	"./en-nz.js": 248,
	"./eo": 249,
	"./eo.js": 249,
	"./es": 250,
	"./es-do": 251,
	"./es-do.js": 251,
	"./es-us": 252,
	"./es-us.js": 252,
	"./es.js": 250,
	"./et": 253,
	"./et.js": 253,
	"./eu": 254,
	"./eu.js": 254,
	"./fa": 255,
	"./fa.js": 255,
	"./fi": 256,
	"./fi.js": 256,
	"./fo": 257,
	"./fo.js": 257,
	"./fr": 258,
	"./fr-ca": 259,
	"./fr-ca.js": 259,
	"./fr-ch": 260,
	"./fr-ch.js": 260,
	"./fr.js": 258,
	"./fy": 261,
	"./fy.js": 261,
	"./ga": 262,
	"./ga.js": 262,
	"./gd": 263,
	"./gd.js": 263,
	"./gl": 264,
	"./gl.js": 264,
	"./gom-latn": 265,
	"./gom-latn.js": 265,
	"./gu": 266,
	"./gu.js": 266,
	"./he": 267,
	"./he.js": 267,
	"./hi": 268,
	"./hi.js": 268,
	"./hr": 269,
	"./hr.js": 269,
	"./hu": 270,
	"./hu.js": 270,
	"./hy-am": 271,
	"./hy-am.js": 271,
	"./id": 272,
	"./id.js": 272,
	"./is": 273,
	"./is.js": 273,
	"./it": 274,
	"./it-ch": 275,
	"./it-ch.js": 275,
	"./it.js": 274,
	"./ja": 276,
	"./ja.js": 276,
	"./jv": 277,
	"./jv.js": 277,
	"./ka": 278,
	"./ka.js": 278,
	"./kk": 279,
	"./kk.js": 279,
	"./km": 280,
	"./km.js": 280,
	"./kn": 281,
	"./kn.js": 281,
	"./ko": 282,
	"./ko.js": 282,
	"./ku": 283,
	"./ku.js": 283,
	"./ky": 284,
	"./ky.js": 284,
	"./lb": 285,
	"./lb.js": 285,
	"./lo": 286,
	"./lo.js": 286,
	"./lt": 287,
	"./lt.js": 287,
	"./lv": 288,
	"./lv.js": 288,
	"./me": 289,
	"./me.js": 289,
	"./mi": 290,
	"./mi.js": 290,
	"./mk": 291,
	"./mk.js": 291,
	"./ml": 292,
	"./ml.js": 292,
	"./mn": 293,
	"./mn.js": 293,
	"./mr": 294,
	"./mr.js": 294,
	"./ms": 295,
	"./ms-my": 296,
	"./ms-my.js": 296,
	"./ms.js": 295,
	"./mt": 297,
	"./mt.js": 297,
	"./my": 298,
	"./my.js": 298,
	"./nb": 299,
	"./nb.js": 299,
	"./ne": 300,
	"./ne.js": 300,
	"./nl": 301,
	"./nl-be": 302,
	"./nl-be.js": 302,
	"./nl.js": 301,
	"./nn": 303,
	"./nn.js": 303,
	"./pa-in": 304,
	"./pa-in.js": 304,
	"./pl": 305,
	"./pl.js": 305,
	"./pt": 306,
	"./pt-br": 307,
	"./pt-br.js": 307,
	"./pt.js": 306,
	"./ro": 308,
	"./ro.js": 308,
	"./ru": 309,
	"./ru.js": 309,
	"./sd": 310,
	"./sd.js": 310,
	"./se": 311,
	"./se.js": 311,
	"./si": 312,
	"./si.js": 312,
	"./sk": 313,
	"./sk.js": 313,
	"./sl": 314,
	"./sl.js": 314,
	"./sq": 315,
	"./sq.js": 315,
	"./sr": 316,
	"./sr-cyrl": 317,
	"./sr-cyrl.js": 317,
	"./sr.js": 316,
	"./ss": 318,
	"./ss.js": 318,
	"./sv": 319,
	"./sv.js": 319,
	"./sw": 320,
	"./sw.js": 320,
	"./ta": 321,
	"./ta.js": 321,
	"./te": 322,
	"./te.js": 322,
	"./tet": 323,
	"./tet.js": 323,
	"./tg": 324,
	"./tg.js": 324,
	"./th": 325,
	"./th.js": 325,
	"./tl-ph": 326,
	"./tl-ph.js": 326,
	"./tlh": 327,
	"./tlh.js": 327,
	"./tr": 328,
	"./tr.js": 328,
	"./tzl": 329,
	"./tzl.js": 329,
	"./tzm": 330,
	"./tzm-latn": 331,
	"./tzm-latn.js": 331,
	"./tzm.js": 330,
	"./ug-cn": 332,
	"./ug-cn.js": 332,
	"./uk": 333,
	"./uk.js": 333,
	"./ur": 334,
	"./ur.js": 334,
	"./uz": 335,
	"./uz-latn": 336,
	"./uz-latn.js": 336,
	"./uz.js": 335,
	"./vi": 337,
	"./vi.js": 337,
	"./x-pseudo": 338,
	"./x-pseudo.js": 338,
	"./yo": 339,
	"./yo.js": 339,
	"./zh-cn": 340,
	"./zh-cn.js": 340,
	"./zh-hk": 341,
	"./zh-hk.js": 341,
	"./zh-tw": 342,
	"./zh-tw.js": 342
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
webpackContext.id = 366;

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patchlog_vue_vue_type_template_id_b43cd738_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(398);
/* harmony import */ var _patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(353);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _patchlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _patchlog_vue_vue_type_style_index_0_id_b43cd738_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(391);
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

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_b43cd738_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(355);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_b43cd738_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_b43cd738_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlog_vue_vue_type_style_index_0_id_b43cd738_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 398:
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

/***/ 495:
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

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(517);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 517:
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

var _vueAffix = __webpack_require__(886);

var _vueAffix2 = _interopRequireDefault(_vueAffix);

var _vueObserveVisibility = __webpack_require__(389);

var _vueObserveVisibility2 = _interopRequireDefault(_vueObserveVisibility);

var _nitroAds = __webpack_require__(201);

var _nitroAds2 = _interopRequireDefault(_nitroAds);

var _appContent = __webpack_require__(177);

var _appContent2 = _interopRequireDefault(_appContent);

var _header = __webpack_require__(399);

var _header2 = _interopRequireDefault(_header);

var _meta = __webpack_require__(178);

var _meta2 = _interopRequireDefault(_meta);

var _moment = __webpack_require__(165);

var _moment2 = _interopRequireDefault(_moment);

var _warframe = __webpack_require__(207);

var _warframe2 = _interopRequireDefault(_warframe);

var _vueNoSsr = __webpack_require__(495);

var _vueNoSsr2 = _interopRequireDefault(_vueNoSsr);

var _patchlog = __webpack_require__(390);

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

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function i(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,function(e){return t[e]}.bind(null,s));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=3)}([function(t,e,i){var o=i(6);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i(2).default)("da410cd4",o,!1,{})},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=function(t,e){var i=t[1]||"",o=t[3];if(!o)return i;if(e&&"function"==typeof btoa){var s=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(o),n=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[i].concat(n).concat([s]).join("\n")}return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},s=0;s<this.length;s++){var n=this[s][0];"number"==typeof n&&(o[n]=!0)}for(s=0;s<t.length;s++){var r=t[s];"number"==typeof r[0]&&o[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),e.push(r))}},e}},function(t,e,i){"use strict";function o(t,e){for(var i=[],o={},s=0;s<e.length;s++){var n=e[s],r=n[0],f={id:t+":"+s,css:n[1],media:n[2],sourceMap:n[3]};o[r]?o[r].parts.push(f):i.push(o[r]={id:r,parts:[f]})}return i}i.r(e),i.d(e,"default",function(){return d});var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n={},r=s&&(document.head||document.getElementsByTagName("head")[0]),f=null,l=0,a=!1,c=function(){},u=null,h="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(t,e,i,s){a=i,u=s||{};var r=o(t,e);return m(r),function(e){for(var i=[],s=0;s<r.length;s++){var f=r[s];(l=n[f.id]).refs--,i.push(l)}e?m(r=o(t,e)):r=[];for(s=0;s<i.length;s++){var l;if(0===(l=i[s]).refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete n[l.id]}}}}function m(t){for(var e=0;e<t.length;e++){var i=t[e],o=n[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(v(i.parts[s]));o.parts.length>i.parts.length&&(o.parts.length=i.parts.length)}else{var r=[];for(s=0;s<i.parts.length;s++)r.push(v(i.parts[s]));n[i.id]={id:i.id,refs:1,parts:r}}}}function x(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function v(t){var e,i,o=document.querySelector("style["+h+'~="'+t.id+'"]');if(o){if(a)return c;o.parentNode.removeChild(o)}if(p){var s=l++;o=f||(f=x()),e=g.bind(null,o,s,!1),i=g.bind(null,o,s,!0)}else o=x(),e=function(t,e){var i=e.css,o=e.media,s=e.sourceMap;o&&t.setAttribute("media",o);u.ssrId&&t.setAttribute(h,e.id);s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,o),i=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else i()}}var S=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}();function g(t,e,i,o){var s=i?"":o.css;if(t.styleSheet)t.styleSheet.cssText=S(e,s);else{var n=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(n,r[e]):t.appendChild(n)}}},function(t,e,i){"use strict";i.r(e);var o=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)};function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}o._withStripped=!0;var n={props:{relativeElementSelector:{type:String,required:!0},offset:{type:Object,default:function(){return{top:40,bottom:40}},validator:function(t){if("object"!==s(t))return!1;var e=Object.keys(t);return e.includes("top")&&e.includes("bottom")}},enabled:{type:Boolean,default:!0},scrollAffix:{type:Boolean,default:!1},scrollContainerSelector:{type:String,default:null}},computed:{relativeElement:function(){return document.querySelector(this.relativeElementSelector)},scrollContainer:function(){return this.scrollContainerSelector?document.querySelector(this.scrollContainerSelector):window},affixTopPos:function(){return this.affixRect.top+this.topOfScreen-this.offset.top-this.topPadding},affixBottomPos:function(){return this.affixRect.bottom+this.topOfScreen+this.offset.bottom},bottomOfScreen:function(){return this.topOfScreen+this.scrollContainer.innerHeight},relativeElmTopPos:function(){return this.topOfScreen+this.relativeElement.getBoundingClientRect().top},relativeElmBottomPos:function(){return this.topOfScreen+this.relativeElement.getBoundingClientRect().bottom},screenIsPastAffix:function(){return this.bottomOfScreen>=this.affixBottomPos},screenIsBeforeAffix:function(){return this.topOfScreen<=this.affixTopPos},screenIsBeforeRelativeElm:function(){return this.topOfScreen<=this.relativeElmTopPos-this.offset.top},screenIsPastRelativeElm:function(){return this.bottomOfScreen>=this.relativeElmBottomPos+this.offset.bottom},screenIsInsideRelativeElm:function(){return!this.screenIsBeforeRelativeElm&&!this.screenIsPastRelativeElm}},data:function(){return{frameId:null,affixHeight:null,affixRect:null,affixInitialTop:null,relativeElmOffsetTop:null,topPadding:null,lastState:null,currentState:null,currentScrollAffix:null,topOfScreen:null,lastDistanceFromTop:null,scrollingUp:null,scrollingDown:null}},watch:{offset:function(t,e){t.top===e.top&&t.bottom===e.bottom||this.onScroll()}},methods:{updateData:function(){this.topOfScreen=this.scrollContainer.scrollTop||window.pageYOffset,this.affixRect=this.$el.getBoundingClientRect(),this.affixHeight=this.$el.offsetHeight,this.relativeElmOffsetTop=this.getOffsetTop(this.relativeElement)},handleScroll:function(){var t=this;this.frameId||(this.frameId=window.requestAnimationFrame(function(){t.onScroll(),t.frameId=null}))},onScroll:function(){if(this.enabled)if(this.updateData(),this.affixHeight+this.offset.top>=this.relativeElement.offsetHeight)this.scrollAffix&&"scrollaffix-top"!==this.currentScrollAffix?this.setScrollAffixTop():"affix-top"!==this.currentState&&this.setAffixTop();else{var t=this.affixHeight+this.offset.bottom+this.offset.top;this.scrollAffix&&t>this.scrollContainer.innerHeight?this.handleScrollAffix():this.handleAffix()}else this.removeClasses()},handleAffix:function(){this.topOfScreen<this.relativeElmOffsetTop-this.offset.top&&this.setAffixTop(),this.topOfScreen>=this.relativeElmOffsetTop-this.offset.top&&this.relativeElmBottomPos-this.offset.bottom>=this.topOfScreen+this.topPadding+this.affixHeight+this.offset.top&&this.setAffix(),this.relativeElmBottomPos-this.offset.bottom<this.topOfScreen+this.topPadding+this.affixHeight+this.offset.top&&this.setAffixBottom(),this.lastState=this.currentState},handleScrollAffix:function(){if(this.setScrollingDirection(),this.screenIsBeforeRelativeElm)this.setScrollAffixTop();else if(this.screenIsPastRelativeElm)this.setScrollAffixBottom();else if(this.screenIsInsideRelativeElm){var t="scrollaffix-top"===this.currentScrollAffix||"scrollaffix-bottom"===this.currentScrollAffix||"scrollaffix-up"===this.currentScrollAffix&&this.scrollingDown||"scrollaffix-down"===this.currentScrollAffix&&this.scrollingUp;this.screenIsBeforeAffix&&this.scrollingUp?this.setScrollAffixUp():this.screenIsPastAffix&&this.scrollingDown?this.setScrollAffixDown():t&&this.setScrollAffixScrolling()}this.lastScrollAffixState=this.currentScrollAffix,this.lastDistanceFromTop=this.topOfScreen},initScrollAffix:function(){this.bottomOfScreen<this.affixBottomPos?this.setScrollAffixTop():this.screenIsInsideRelativeElm?this.setScrollAffixDown():this.screenIsPastRelativeElm?this.setScrollAffixBottom():this.setScrollAffixScrolling()},setScrollAffixScrolling:function(){this.currentScrollAffix="scrollaffix-scrolling",this.$el.style.top="".concat(Math.floor(this.affixRect.top)+this.topOfScreen-this.affixInitialTop,"px"),this.$el.style.bottom="auto",this.removeClasses(),this.emitEvent()},setScrollAffixUp:function(){this.currentScrollAffix="scrollaffix-up",this.currentScrollAffix!==this.lastScrollAffixState&&(this.$el.style.top="".concat(this.topPadding+this.offset.top,"px"),this.$el.style.bottom="auto",this.removeClasses(),this.emitEvent(),this.$el.classList.add("affix"))},setScrollAffixDown:function(){this.currentScrollAffix="scrollaffix-down",this.currentScrollAffix!==this.lastScrollAffixState&&(this.$el.style.bottom="".concat(this.offset.bottom,"px"),this.$el.style.top="auto",this.removeClasses(),this.emitEvent(),this.$el.classList.add("affix"))},setScrollAffixTop:function(){this.currentScrollAffix="scrollaffix-top",this.$el.style.top=0,this.$el.style.bottom="auto",this.removeClasses(),this.emitEvent()},setScrollAffixBottom:function(){this.currentScrollAffix="scrollaffix-bottom",this.$el.style.top="".concat(this.relativeElmBottomPos-this.affixInitialTop-this.affixHeight,"px"),this.$el.style.bottom="auto",this.removeClasses(),this.emitEvent()},setScrollingDirection:function(){this.topOfScreen>this.lastDistanceFromTop?(this.scrollingDown=!0,this.scrollingUp=!1):(this.scrollingUp=!0,this.scrollingDown=!1)},setAffixTop:function(){this.currentState="affix-top",this.currentState!==this.lastState&&(this.emitEvent(),this.removeClasses(),this.$el.classList.remove("affix"),this.$el.classList.add("affix-top"),this.$el.style.top=null)},setAffix:function(){this.currentState="affix",this.$el.style.top="".concat(this.topPadding+this.offset.top,"px"),this.currentState!==this.lastState&&(this.emitEvent(),this.removeClasses(),this.$el.classList.add("affix"))},setAffixBottom:function(){this.currentState="affix-bottom",this.$el.style.top="".concat(this.relativeElement.offsetHeight-this.affixHeight-this.offset.bottom-this.topPadding,"px"),this.currentState!==this.lastState&&(this.emitEvent(),this.removeClasses(),this.$el.classList.add("affix-bottom"))},removeClasses:function(){this.$el.classList.remove("affix-top"),this.$el.classList.remove("affix"),this.$el.classList.remove("affix-bottom")},emitEvent:function(){this.scrollAffix&&this.lastScrollAffixState&&this.currentScrollAffix!==this.lastScrollAffixState&&this.$emit(this.currentScrollAffix.replace("-","")),this.lastState&&this.$emit(this.currentState.replace("-",""))},getOffsetTop:function(t){for(var e=0,i=t;i;)e+=i.offsetTop,i=i.offsetParent;return e}},mounted:function(){this.$el.classList.add("vue-affix"),this.affixInitialTop=this.getOffsetTop(this.$el),this.topPadding=this.affixInitialTop-this.getOffsetTop(this.relativeElement),this.updateData(),this.scrollAffix&&this.initScrollAffix(),this.onScroll(),this.scrollContainer.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){this.scrollContainer.removeEventListener("scroll",this.handleScroll)}};i(5);var r=function(t,e,i,o,s,n,r,f){var l,a="function"==typeof t?t.options:t;if(e&&(a.render=e,a.staticRenderFns=i,a._compiled=!0),o&&(a.functional=!0),n&&(a._scopeId="data-v-"+n),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},a._ssrRegister=l):s&&(l=f?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(a.functional){a._injectStyles=l;var c=a.render;a.render=function(t,e){return l.call(e),c(t,e)}}else{var u=a.beforeCreate;a.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:a}}(n,o,[],!1,null,null,null);r.options.__file="affix.vue";var f=r.exports;i.d(e,"Affix",function(){return f});var l={install:function(t){l.install.installed||t.component("affix",f)}};"undefined"!=typeof window&&window.Vue&&l.install(window.Vue);e.default=l},,function(t,e,i){"use strict";var o=i(0);i.n(o).a},function(t,e,i){(t.exports=i(1)(!1)).push([t.i,"\n.vue-affix {\n  position: relative;\n}\n.affix {\n  position: fixed;\n}\n.affix-bottom {\n  position: relative;\n}\n",""])}])});

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_style_index_0_id_367e3633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_style_index_0_id_367e3633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_style_index_0_id_367e3633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_patchlogs_vue_vue_type_style_index_0_id_367e3633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patchlogs_vue_vue_type_template_id_367e3633_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1016);
/* harmony import */ var _patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(516);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _patchlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _patchlogs_vue_vue_type_style_index_0_id_367e3633_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(887);
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