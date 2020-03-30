(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ 1000:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/index.vue?vue&type=template&id=2efe97ba&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation',{attrs:{"page-elements":this.$refs}}),_vm._v(" "),_c('app-content',[_c('header',[_c('div',{staticClass:"background-container"},[_c('div',{staticClass:"background"})]),_vm._v(" "),_c('div',{staticClass:"container game-container"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"nexushub-logo"},[_c('img',{staticClass:"logo",attrs:{"src":"/img/brand/nexushub-logo-typeface.svg","alt":"Nexushub Logo"}}),_vm._v(" "),_c('span',[_vm._v(".co")])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('h2',{staticClass:"subtitle"},[_vm._v("\n              Providing you with the data for your daily grind!\n            ")]),_vm._v(" "),_c('div',{staticClass:"row games"},[_c('router-link',{attrs:{"to":"/warframe"}},[_c('module',{staticClass:"game-module"},[_c('template',{slot:"body"},[_c('div',{staticClass:"image"},[_c('img',{attrs:{"src":"/img/ui/thumbnail-warframe-small.png","alt":"Warframe Thumbnail"}}),_vm._v(" "),_c('div',{staticClass:"shade"})])]),_vm._v(" "),_c('template',{slot:"footer"},[_c('h3',[_vm._v("Warframe")]),_vm._v(" "),_c('div',{staticClass:"footer-shade"})])],2)],1),_vm._v(" "),_c('router-link',{attrs:{"to":"/wow-classic"}},[_c('module',{staticClass:"game-module"},[_c('template',{slot:"body"},[_c('div',{staticClass:"image"},[_c('img',{attrs:{"src":"/img/ui/thumbnail-wow-classic-small.png","alt":"World of Warcraft: Classic Thumbnail"}}),_vm._v(" "),_c('div',{staticClass:"shade"})])]),_vm._v(" "),_c('template',{slot:"footer"},[_c('h3',[_vm._v("World of Warcraft: Classic")]),_vm._v(" "),_c('div',{staticClass:"footer-shade"})])],2)],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"row scrolldown"},[_c('img',{staticClass:"ico-h-32 interactive",attrs:{"src":"/img/ui/arrow-right.svg","alt":"Scroll down"},on:{"click":function($event){return _vm.scrollDown()}}})])])]),_vm._v(" "),_c('section',{ref:"blog"},[_c('div',{staticClass:"container blog"},[_c('div',{staticClass:"row-margin"},[_c('div',{staticClass:"col-b-4"},[_c('h2',{staticClass:"sub"},[_vm._v("\n              News\n            ")]),_vm._v(" "),_c('blog-preview',{attrs:{"blogpost":_vm.wowClassicAnnouncement}})],1)])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/index.vue?vue&type=template&id=2efe97ba&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/blog/blog-preview.vue?vue&type=template&id=6ab1d8b2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',{staticClass:"blog-preview"},[_c('template',{slot:"header"},[_c('h3',[_vm._v(_vm._s(_vm.blogpost.title))]),_vm._v(" "),_c('time',{attrs:{"datetime":_vm.blogpost.date}},[_vm._v(_vm._s(_vm.moment(new Date(_vm.blogpost.date)).format('MMMM Do YYYY')))])]),_vm._v(" "),_c('template',{slot:"body"},[_c('div',_vm._l((_vm.blogpost.content),function(line,i){return _c('p',{key:line + i,domProps:{"innerHTML":_vm._s(line)}})}),0)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/blog/blog-preview.vue?vue&type=template&id=6ab1d8b2&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/nav/index.vue?vue&type=template&id=181e5cb0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"row"},[_c('div',{staticClass:"col nav-l"},[_c('router-link',{attrs:{"to":"/","exact":""}},[_c('img',{staticClass:"logo ico-h-20",attrs:{"src":"/img/brand/nexushub-logo-typeface.svg","alt":"Nexushub Logo"}})])],1),_vm._v(" "),_c('div',{staticClass:"subnav"},[_c('p',{staticClass:"interactive",class:{ 'router-link-active': _vm.activePage === 'Start' },on:{"click":function($event){return _vm.scrollToPage('Start')}}},[_vm._v("\n      Start\n    ")]),_vm._v(" "),_c('p',{staticClass:"interactive",class:{ 'router-link-active': _vm.activePage === 'Blog' },on:{"click":function($event){return _vm.scrollToPage('Blog')}}},[_vm._v("\n      Blog\n    ")])]),_vm._v(" "),_c('div',{staticClass:"col nav-r"},[_c('notifications')],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/nav/index.vue?vue&type=template&id=181e5cb0&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2efe97ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1000);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(516);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_2efe97ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(906);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2efe97ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_2efe97ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "2efe97ba",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 173:
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

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_vue_vue_type_template_id_820c27de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(224);
/* harmony import */ var _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(177);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(216);
/* harmony import */ var _module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(217);
/* harmony import */ var _module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(218);
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/app-content.vue?vue&type=template&id=3ce135d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container"},[_c('transition',{attrs:{"appear":"","name":"zoom"}},[_c('div',[_c('main',{staticClass:"app-content"},[_vm._t("default")],2)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/app-content.vue?vue&type=template&id=3ce135d2&

// EXTERNAL MODULE: ./ui/app-content.vue?vue&type=style&index=0&lang=scss&
var app_contentvue_type_style_index_0_lang_scss_ = __webpack_require__(364);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

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

/* harmony default export */ var app_content = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(178);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 178:
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

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"module":"warframe_module_kCFyr","header":"warframe_header_2nKQS","footer":"warframe_footer_1kr-S"};

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"module":"wow-classic_module_2l8-b","header":"wow-classic_header_g9KLN","footer":"wow-classic_footer_19f0t"};

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 199:
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

var _theme = __webpack_require__(35);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      visible: false
    };
  },


  computed: {
    theme: function theme() {
      return (0, _theme2.default)(this);
    },
    notifications: function notifications() {
      var notifications = this.$store.state.notifications.all;
      var res = { hasread: [], unread: [] };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(notifications), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var notification = _step.value;

          if (!this.isValidGame(notification)) continue;
          var id = notification.message.title + '-l' + notification.message.body.length;
          if (localStorage.getItem('notification_' + id) === 'removed') continue;

          if (localStorage.getItem('notification_' + id) !== 'seen') {
            res.unread.push(notification);
          } else {
            res.hasread.push(notification);
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

      return res;
    }
  },

  mounted: function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var notifications, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, notification;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.listen();
              _context.next = 3;
              return this.$cubic.get('/notifications/v1');

            case 3:
              notifications = _context.sent;
              _iteratorNormalCompletion2 = true;
              _didIteratorError2 = false;
              _iteratorError2 = undefined;
              _context.prev = 7;

              for (_iterator2 = (0, _getIterator3.default)(notifications); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                notification = _step2.value;

                this.$store.commit('addNotification', notification);
              }
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](7);
              _didIteratorError2 = true;
              _iteratorError2 = _context.t0;

            case 15:
              _context.prev = 15;
              _context.prev = 16;

              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }

            case 18:
              _context.prev = 18;

              if (!_didIteratorError2) {
                _context.next = 21;
                break;
              }

              throw _iteratorError2;

            case 21:
              return _context.finish(18);

            case 22:
              return _context.finish(15);

            case 23:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[7, 11, 15, 23], [16,, 18, 22]]);
    }));

    function mounted() {
      return _ref.apply(this, arguments);
    }

    return mounted;
  }(),


  methods: {
    listen: function listen() {
      var _this = this;

      this.$cubic.subscribe('/notifications/v1', function (notification) {
        if (_this.isValidGame(notification)) {
          _this.visible = true;
          _this.$store.commit('addNotification', notification);
        }
      });
    },
    toggle: function toggle() {
      this.visible = !this.visible;

      if (!this.visible) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = (0, _getIterator3.default)(this.notifications.unread), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var notification = _step3.value;

            var id = notification.message.title + '-l' + notification.message.body.length;
            if (!localStorage.getItem('notification_' + id)) localStorage.setItem('notification_' + id, 'seen');
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

        this.$store.commit('forceUpdateNotifications');
      }
    },
    dismiss: function dismiss(notification) {
      this.$store.commit('removeNotification', notification);
    },
    isValidGame: function isValidGame(notification) {
      var game = this.$store.state.game.name;
      return notification.game === 'global' || notification.game === '' || notification.game === game;
    }
  },

  storeModule: {
    name: 'notifications',
    state: {
      all: []
    },
    mutations: {
      addNotification: function addNotification(state, notification) {
        var id = notification.message.title + '-l' + notification.message.body.length;

        if (!(localStorage.getItem('notification_' + id) === 'removed') && !state.all.find(function (n) {
          return n.message.title === notification.message.title && n.message.body === notification.message.body;
        })) {
          state.all.push(notification);
        }
      },
      removeNotification: function removeNotification(state, notification) {
        var id = notification.message.title + '-l' + notification.message.body.length;

        localStorage.setItem('notification_' + id, 'removed');
        state.all.splice(state.all.findIndex(function (n) {
          return n.message.title === notification.message.title;
        }), 1);
      },
      forceUpdateNotifications: function forceUpdateNotifications(state) {
        state.all.push({});
        state.all.pop();
      }
    }
  }
};

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"notification-header":"warframe_notification-header_1ejVz","notification-body":"warframe_notification-body_n9BTg","notification":"warframe_notification_2Xqvq","footer":"warframe_footer_1YKJU","unread-bubble":"warframe_unread-bubble_3a5aL"};

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"notification-header":"wow-classic_notification-header_1QwD6","notification-body":"wow-classic_notification-body_3a5tH","notification":"wow-classic_notification_O8uYh","footer":"wow-classic_footer_2uhST","unread-bubble":"wow-classic_unread-bubble_3Fi-7"};

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notifications_vue_vue_type_template_id_7165d32e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(376);
/* harmony import */ var _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(198);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(365);
/* harmony import */ var _notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(366);
/* harmony import */ var _notifications_vue_vue_type_style_index_2_id_7165d32e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(367);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);










function injectStyles (context) {
  
  this["warframe"] = (_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"])
this["wow-classic"] = (_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"].locals || _notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"])

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(
  _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notifications_vue_vue_type_template_id_7165d32e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _notifications_vue_vue_type_template_id_7165d32e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "7165d32e",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(179);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(181);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/module.vue?vue&type=template&id=820c27de&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"module",class:_vm.theme.module},[_c('div',{staticClass:"header",class:_vm.theme.header},[_vm._t("header")],2),_vm._v(" "),_c('div',{staticClass:"body"},[_vm._t("body")],2),_vm._v(" "),_c('div',{staticClass:"footer",class:_vm.theme.footer},[_vm._t("footer")],2),_vm._v(" "),_c('progressbar',{ref:"progress"})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/module.vue?vue&type=template&id=820c27de&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(197);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_content_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(200);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(201);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_7165d32e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(202);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_7165d32e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_7165d32e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_style_index_2_id_7165d32e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/notifications.vue?vue&type=template&id=7165d32e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"notifications"},[_c('div',{staticClass:"nav-ico interactive",on:{"click":_vm.toggle}},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/notifications.svg","alt":"Notifications"}})]),_vm._v(" "),_c('div',{staticClass:"unread-bubble",class:[{ unread: _vm.notifications.unread.length }, _vm.theme['unread-bubble']]}),_vm._v(" "),_c('div',{staticClass:"notification-container",class:{ visible: _vm.visible }},[_c('div',{staticClass:"notification-header",class:_vm.theme['notification-header']},[_c('span',[_vm._v("Notifications")])]),_vm._v(" "),_c('div',{staticClass:"notification-body",class:_vm.theme['notification-body']},[(_vm.notifications.unread.length || _vm.notifications.hasread.length)?_c('div',{staticClass:"notification-wrapper"},[_vm._l((_vm.notifications.unread),function(notification){return _c('div',{key:notification.message.title + notification.message.body.length,staticClass:"notification",class:_vm.theme.notification},[_c('h4',[_vm._v(_vm._s(notification.message.title))]),_vm._v(" "),_c('p',{domProps:{"innerHTML":_vm._s(notification.message.body)}}),_vm._v(" "),(notification.buttons)?_c('div',{staticClass:"footer",class:_vm.theme.footer},_vm._l((notification.buttons),function(button){return _c('button',{key:button.text,on:{"click":button.fn}},[_vm._v("\n                "+_vm._s(button.text)+"\n              ")])}),0):_vm._e(),_vm._v(" "),_c('img',{staticClass:"dismiss ico-h-20 interactive",attrs:{"src":"/img/ui/close.svg","alt":"Dismiss"},on:{"click":function($event){return _vm.dismiss(notification)}}})])}),_vm._v(" "),_vm._l((_vm.notifications.hasread),function(notification){return _c('div',{key:notification.message.title + notification.message.body.length,staticClass:"notification",class:_vm.theme.notification},[_c('h4',[_vm._v(_vm._s(notification.message.title))]),_vm._v(" "),_c('p',{domProps:{"innerHTML":_vm._s(notification.message.body)}}),_vm._v(" "),(notification.buttons)?_c('div',{staticClass:"footer",class:_vm.theme.footer},_vm._l((notification.buttons),function(button){return _c('button',{key:button.text,on:{"click":button.fn}},[_vm._v("\n                "+_vm._s(button.text)+"\n              ")])}),0):_vm._e(),_vm._v(" "),_c('img',{staticClass:"dismiss ico-h-20 interactive",attrs:{"src":"/img/ui/close.svg","alt":"Dismiss"},on:{"click":function($event){return _vm.dismiss(notification)}}})])})],2):_c('div',{staticClass:"no-notifcations"},[_vm._v("\n          No notifications. We have dispatched a pigeon to deliver the latest news soon 🕊️\n        ")])])])]),_vm._v(" "),_c('div',{staticClass:"hide",class:{ visible: _vm.visible },on:{"click":_vm.toggle}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/notifications.vue?vue&type=template&id=7165d32e&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 225,
	"./af.js": 225,
	"./ar": 226,
	"./ar-dz": 227,
	"./ar-dz.js": 227,
	"./ar-kw": 228,
	"./ar-kw.js": 228,
	"./ar-ly": 229,
	"./ar-ly.js": 229,
	"./ar-ma": 230,
	"./ar-ma.js": 230,
	"./ar-sa": 231,
	"./ar-sa.js": 231,
	"./ar-tn": 232,
	"./ar-tn.js": 232,
	"./ar.js": 226,
	"./az": 233,
	"./az.js": 233,
	"./be": 234,
	"./be.js": 234,
	"./bg": 235,
	"./bg.js": 235,
	"./bm": 236,
	"./bm.js": 236,
	"./bn": 237,
	"./bn.js": 237,
	"./bo": 238,
	"./bo.js": 238,
	"./br": 239,
	"./br.js": 239,
	"./bs": 240,
	"./bs.js": 240,
	"./ca": 241,
	"./ca.js": 241,
	"./cs": 242,
	"./cs.js": 242,
	"./cv": 243,
	"./cv.js": 243,
	"./cy": 244,
	"./cy.js": 244,
	"./da": 245,
	"./da.js": 245,
	"./de": 246,
	"./de-at": 247,
	"./de-at.js": 247,
	"./de-ch": 248,
	"./de-ch.js": 248,
	"./de.js": 246,
	"./dv": 249,
	"./dv.js": 249,
	"./el": 250,
	"./el.js": 250,
	"./en-SG": 251,
	"./en-SG.js": 251,
	"./en-au": 252,
	"./en-au.js": 252,
	"./en-ca": 253,
	"./en-ca.js": 253,
	"./en-gb": 254,
	"./en-gb.js": 254,
	"./en-ie": 255,
	"./en-ie.js": 255,
	"./en-il": 256,
	"./en-il.js": 256,
	"./en-nz": 257,
	"./en-nz.js": 257,
	"./eo": 258,
	"./eo.js": 258,
	"./es": 259,
	"./es-do": 260,
	"./es-do.js": 260,
	"./es-us": 261,
	"./es-us.js": 261,
	"./es.js": 259,
	"./et": 262,
	"./et.js": 262,
	"./eu": 263,
	"./eu.js": 263,
	"./fa": 264,
	"./fa.js": 264,
	"./fi": 265,
	"./fi.js": 265,
	"./fo": 266,
	"./fo.js": 266,
	"./fr": 267,
	"./fr-ca": 268,
	"./fr-ca.js": 268,
	"./fr-ch": 269,
	"./fr-ch.js": 269,
	"./fr.js": 267,
	"./fy": 270,
	"./fy.js": 270,
	"./ga": 271,
	"./ga.js": 271,
	"./gd": 272,
	"./gd.js": 272,
	"./gl": 273,
	"./gl.js": 273,
	"./gom-latn": 274,
	"./gom-latn.js": 274,
	"./gu": 275,
	"./gu.js": 275,
	"./he": 276,
	"./he.js": 276,
	"./hi": 277,
	"./hi.js": 277,
	"./hr": 278,
	"./hr.js": 278,
	"./hu": 279,
	"./hu.js": 279,
	"./hy-am": 280,
	"./hy-am.js": 280,
	"./id": 281,
	"./id.js": 281,
	"./is": 282,
	"./is.js": 282,
	"./it": 283,
	"./it-ch": 284,
	"./it-ch.js": 284,
	"./it.js": 283,
	"./ja": 285,
	"./ja.js": 285,
	"./jv": 286,
	"./jv.js": 286,
	"./ka": 287,
	"./ka.js": 287,
	"./kk": 288,
	"./kk.js": 288,
	"./km": 289,
	"./km.js": 289,
	"./kn": 290,
	"./kn.js": 290,
	"./ko": 291,
	"./ko.js": 291,
	"./ku": 292,
	"./ku.js": 292,
	"./ky": 293,
	"./ky.js": 293,
	"./lb": 294,
	"./lb.js": 294,
	"./lo": 295,
	"./lo.js": 295,
	"./lt": 296,
	"./lt.js": 296,
	"./lv": 297,
	"./lv.js": 297,
	"./me": 298,
	"./me.js": 298,
	"./mi": 299,
	"./mi.js": 299,
	"./mk": 300,
	"./mk.js": 300,
	"./ml": 301,
	"./ml.js": 301,
	"./mn": 302,
	"./mn.js": 302,
	"./mr": 303,
	"./mr.js": 303,
	"./ms": 304,
	"./ms-my": 305,
	"./ms-my.js": 305,
	"./ms.js": 304,
	"./mt": 306,
	"./mt.js": 306,
	"./my": 307,
	"./my.js": 307,
	"./nb": 308,
	"./nb.js": 308,
	"./ne": 309,
	"./ne.js": 309,
	"./nl": 310,
	"./nl-be": 311,
	"./nl-be.js": 311,
	"./nl.js": 310,
	"./nn": 312,
	"./nn.js": 312,
	"./pa-in": 313,
	"./pa-in.js": 313,
	"./pl": 314,
	"./pl.js": 314,
	"./pt": 315,
	"./pt-br": 316,
	"./pt-br.js": 316,
	"./pt.js": 315,
	"./ro": 317,
	"./ro.js": 317,
	"./ru": 318,
	"./ru.js": 318,
	"./sd": 319,
	"./sd.js": 319,
	"./se": 320,
	"./se.js": 320,
	"./si": 321,
	"./si.js": 321,
	"./sk": 322,
	"./sk.js": 322,
	"./sl": 323,
	"./sl.js": 323,
	"./sq": 324,
	"./sq.js": 324,
	"./sr": 325,
	"./sr-cyrl": 326,
	"./sr-cyrl.js": 326,
	"./sr.js": 325,
	"./ss": 327,
	"./ss.js": 327,
	"./sv": 328,
	"./sv.js": 328,
	"./sw": 329,
	"./sw.js": 329,
	"./ta": 330,
	"./ta.js": 330,
	"./te": 331,
	"./te.js": 331,
	"./tet": 332,
	"./tet.js": 332,
	"./tg": 333,
	"./tg.js": 333,
	"./th": 334,
	"./th.js": 334,
	"./tl-ph": 335,
	"./tl-ph.js": 335,
	"./tlh": 336,
	"./tlh.js": 336,
	"./tr": 337,
	"./tr.js": 337,
	"./tzl": 338,
	"./tzl.js": 338,
	"./tzm": 339,
	"./tzm-latn": 340,
	"./tzm-latn.js": 340,
	"./tzm.js": 339,
	"./ug-cn": 341,
	"./ug-cn.js": 341,
	"./uk": 342,
	"./uk.js": 342,
	"./ur": 343,
	"./ur.js": 343,
	"./uz": 344,
	"./uz-latn": 345,
	"./uz-latn.js": 345,
	"./uz.js": 344,
	"./vi": 346,
	"./vi.js": 346,
	"./x-pseudo": 347,
	"./x-pseudo.js": 347,
	"./yo": 348,
	"./yo.js": 348,
	"./zh-cn": 349,
	"./zh-cn.js": 349,
	"./zh-hk": 350,
	"./zh-hk.js": 350,
	"./zh-tw": 351,
	"./zh-tw.js": 351
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
webpackContext.id = 407;

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(517);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _appContent = __webpack_require__(176);

var _appContent2 = _interopRequireDefault(_appContent);

var _blogPreview = __webpack_require__(901);

var _blogPreview2 = _interopRequireDefault(_blogPreview);

var _meta = __webpack_require__(173);

var _meta2 = _interopRequireDefault(_meta);

var _module2 = __webpack_require__(175);

var _module3 = _interopRequireDefault(_module2);

var _index = __webpack_require__(904);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    appContent: _appContent2.default,
    blogPreview: _blogPreview2.default,
    module: _module3.default,
    navigation: _index2.default
  },

  data: function data() {
    return {
      wowClassicAnnouncement: {
        title: 'World of Warcraft: Classic announced!',
        date: '2020-01-30 17:00',
        content: ['We\'re very happy to announce the launch of a Classic WoW Auction House database and website that we\'ve spent the last few months working on together with TradeSkillMaster!', 'Through NexusHub, you can monitor and report on current item prices on the Classic WoW Auction House as well as dive in to pricing history for all realms and factions in both regions, completely free. With this data we\'re also able to offer estimated Crafting profits and material price information for your convenience.', 'In addition, the entire database is available in a fully open and free <a href="https://nexushub.co/developers/api/General/foo">API</a> to integrate in your gold-making spreadsheets, apps or services.', 'We\'re keen to continue working with TSM and integrating related or requested features on to the site (think having the website notice you when an item hits your sniper price without having to monitor the AH in-game).', 'You can access the site on desktop and mobile via <a href="https://wow-classic.nexushub.co/">wow-classic.nexushub.co</a> or <a href="https://nexushub.co/wow-classic">nexushub.co/wow-classic</a>', 'Please share your feedback and questions, we are very excited to hear how you make use of this new tool!']
      }
    };
  },
  mounted: function mounted() {
    window.addEventListener('scroll', this.updateOnScroll);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.updateOnScroll);
  },


  methods: {
    scrollDown: function scrollDown() {
      var el = this.$refs.blog;
      var position = el.getBoundingClientRect().top + window.pageYOffset - 56;
      window.scrollTo({ top: position, behavior: 'smooth' });
    },
    updateOnScroll: function updateOnScroll() {
      var blogEl = this.$refs.blog;
      var blogPosition = blogEl.getBoundingClientRect().top + window.pageYOffset - 56;
      var viewportHeight = window.innerHeight;

      var page = 'Start';
      if (window.scrollY >= blogPosition - viewportHeight / 2) page = 'Blog';
      this.$store.commit('setActivePage', page);
    }
  },

  head: {
    title: 'NexusHub · Providing you with the data for your daily grind!',
    meta: (0, _meta2.default)({
      title: 'NexusHub · Providing you with the data for your daily grind!',
      description: 'Get up-to-date trading data and prices for Warframe and World of Warcraft: Classic.'
    })
  }
};

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(519);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module2 = __webpack_require__(175);

var _module3 = _interopRequireDefault(_module2);

var _moment = __webpack_require__(166);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    module: _module3.default
  },

  props: ['blogpost'],

  methods: {
    moment: _moment2.default
  }
};

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(522);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notifications = __webpack_require__(214);

var _notifications2 = _interopRequireDefault(_notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    notifications: _notifications2.default
  },

  props: ['pageElements'],

  computed: {
    activePage: function activePage() {
      return this.$store.state.index.activePage;
    }
  },

  methods: {
    scrollToPage: function scrollToPage(page) {
      var position = 0;
      if (page !== 'Start') {
        var el = this.pageElements[page.toLowerCase()];
        position = el.getBoundingClientRect().top + window.pageYOffset - 56;
      }
      window.scrollTo({ top: position, behavior: 'smooth' });
    }
  },

  storeModule: {
    name: 'index',
    state: {
      activePage: 'Start'
    },
    mutations: {
      setActivePage: function setActivePage(state, page) {
        state.activePage = page;
      }
    }
  }
};

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blog_preview_vue_vue_type_template_id_6ab1d8b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1021);
/* harmony import */ var _blog_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(518);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _blog_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _blog_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _blog_preview_vue_vue_type_style_index_0_id_6ab1d8b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(903);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _blog_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _blog_preview_vue_vue_type_template_id_6ab1d8b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _blog_preview_vue_vue_type_template_id_6ab1d8b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "6ab1d8b2",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_preview_vue_vue_type_style_index_0_id_6ab1d8b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(520);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_preview_vue_vue_type_style_index_0_id_6ab1d8b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_preview_vue_vue_type_style_index_0_id_6ab1d8b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_preview_vue_vue_type_style_index_0_id_6ab1d8b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_181e5cb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1023);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(521);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_181e5cb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(905);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_181e5cb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_181e5cb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "181e5cb0",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_181e5cb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(523);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_181e5cb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_181e5cb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_181e5cb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2efe97ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(524);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2efe97ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2efe97ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2efe97ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);