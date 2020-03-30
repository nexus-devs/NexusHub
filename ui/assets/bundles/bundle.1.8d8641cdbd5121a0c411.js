(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/nav/wow-classic.vue?vue&type=template&id=68a545c6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"row"},[_c('div',{staticClass:"col nav-l"},[_c('router-link',{attrs:{"to":("/wow-classic/" + (_vm.activeServer.slug)),"exact":""}},[_c('img',{staticClass:"logo ico-h-20",attrs:{"src":"/img/brand/nexushub-logo-typeface-wow-classic.svg","alt":"Nexushub Logo"}})])],1),_vm._v(" "),(!_vm.landingPage)?_c('div',{staticClass:"middle-content"},[_c('search',{attrs:{"placeholder":"Search items..."}},[_c('span',{staticClass:"shortcut"},[_vm._v("SHIFT + F")])]),_vm._v(" "),_c('select-server',{attrs:{"fn":_vm.generateSwitchUrl}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col nav-r"},[_c('notifications')],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/nav/wow-classic.vue?vue&type=template&id=68a545c6&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/wow-classic.vue?vue&type=template&id=7d868b9e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search"},[_c('div',{staticClass:"field"},[_c('label',[_vm._v("Search")]),_vm._v(" "),_c('input',{ref:"input",attrs:{"placeholder":_vm.placeholder || 'Try: Black Lotus, Devilsaur Leather...',"type":"text"},domProps:{"value":_vm.input.name || _vm.input},on:{"input":_vm.fetch,"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }$event.preventDefault();if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.complete($event)},function($event){if(!$event.shiftKey){ return null; }$event.stopPropagation();}],"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.search($event)}}}),_vm._v(" "),_c('span',{staticClass:"autocomplete"},[_vm._v(_vm._s(_vm.autocomplete.name))]),_vm._v(" "),(_vm.autocomplete.category)?_c('span',{staticClass:"autocomplete-type"},[_vm._v("\n      "+_vm._s(_vm.autocomplete.category === 'Any' ? 'Search anywhere' : ("Found in " + (_vm.autocomplete.category)))+"\n    ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"tools"},_vm._l((_vm.suggestions),function(suggestion){return _c('div',{key:suggestion.itemId,staticClass:"suggestion",on:{"click":function($event){return _vm.search(suggestion)}}},[_c('div',{staticClass:"ico-36"},[_c('img',{attrs:{"src":suggestion.imgUrl,"alt":suggestion.name}}),_vm._v(" "),_c('img',{staticClass:"backdrop",attrs:{"src":suggestion.imgUrl,"alt":suggestion.name}})]),_vm._v(" "),_c('div',{staticClass:"suggestion-main"},[_c('span',{staticClass:"suggestion-name"},[_vm._v(_vm._s(suggestion.name))]),_vm._v(" "),_c('span',{staticClass:"suggestion-type"},[_vm._v(_vm._s(suggestion.type))])])])}),0),_vm._v(" "),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/wow-classic.vue?vue&type=template&id=7d868b9e&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1038:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/select-server.vue?vue&type=template&id=c0afa1ea&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select"},[_c('div',{staticClass:"interactive",on:{"click":_vm.toggle}},[_c('span',[_vm._v(_vm._s(_vm.activeServer.name))]),_vm._v(" "),_c('img',{staticClass:"faction-logo",attrs:{"src":("/img/wow-classic/ui/" + (_vm.activeServer.faction) + ".svg"),"alt":(_vm.activeFactionPretty + " Logo")}}),_vm._v(" "),_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/dropdown.svg","alt":"Dropdown"}})]),_vm._v(" "),_c('div',{staticClass:"dropdown",class:{ active: _vm.active }},[_c('div',{staticClass:"body"},[_c('span',{class:{ active: _vm.activeServer.slug === '' },on:{"click":function($event){return _vm.toggle()}}},[_vm._v("Select Server")]),_vm._v(" "),_c('span',{class:{ active: _vm.activeServer.region === 'EU' },on:{"click":function($event){return _vm.selectRegion('EU')}}},[_vm._v("Europe")]),_vm._v(" "),_vm._l((_vm.serverlist.EU),function(s){return [_c('span',{key:s.slug,staticClass:"server",class:{ active: _vm.activeServer.name === s.name, selected: _vm.selected.region === 'EU' },on:{"click":function($event){return _vm.selectServer(s)}}},[_vm._v(_vm._s(s.name))]),_vm._v(" "),_c('div',{key:s.slug + 'faction',staticClass:"faction",class:{ selected: _vm.selected.server === s.slug }},[_c('router-link',{staticClass:"image-wrapper",attrs:{"to":_vm.fn(s.slug + '-alliance')},nativeOn:{"click":function($event){return _vm.toggle();}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/alliance.svg","alt":"Alliance Logo"}})]),_vm._v(" "),_c('router-link',{staticClass:"image-wrapper",attrs:{"to":_vm.fn(s.slug + '-horde')},nativeOn:{"click":function($event){return _vm.toggle();}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/horde.svg","alt":"Horde Logo"}})])],1)]}),_vm._v(" "),_c('span',{class:{ active: _vm.activeServer.region === 'US' },on:{"click":function($event){return _vm.selectRegion('US')}}},[_vm._v("United States")]),_vm._v(" "),_vm._l((_vm.serverlist.US),function(s){return [_c('span',{key:s.slug,staticClass:"server",class:{ active: _vm.activeServer.name === s.name, selected: _vm.selected.region === 'US' },on:{"click":function($event){return _vm.selectServer(s)}}},[_vm._v(_vm._s(s.name))]),_vm._v(" "),_c('div',{key:s.slug + 'faction',staticClass:"faction",class:{ selected: _vm.selected.server === s.slug }},[_c('router-link',{staticClass:"image-wrapper",attrs:{"to":_vm.fn(s.slug + '-alliance')},nativeOn:{"click":function($event){return _vm.toggle();}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/alliance.svg","alt":"Alliance Logo"}})]),_vm._v(" "),_c('router-link',{staticClass:"image-wrapper",attrs:{"to":_vm.fn(s.slug + '-horde')},nativeOn:{"click":function($event){return _vm.toggle();}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/horde.svg","alt":"Horde Logo"}})])],1)]})],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/select-server.vue?vue&type=template&id=c0afa1ea&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


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

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wow_classic_vue_vue_type_template_id_68a545c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1011);
/* harmony import */ var _wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(475);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _wow_classic_vue_vue_type_style_index_0_id_68a545c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(888);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wow_classic_vue_vue_type_template_id_68a545c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _wow_classic_vue_vue_type_template_id_68a545c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "68a545c6",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: 'search',
  state: {
    input: ''
  },
  mutations: {
    setSearchInput: function setSearchInput(state, input) {
      state.input = input;
    }
  },
  actions: {
    applyInputQuery: function applyInputQuery(_ref, route) {
      var commit = _ref.commit;

      if (route.query.input) {
        commit('setSearchInput', route.query.input);
      }
    }
  }
};

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(476);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(362);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _notifications = __webpack_require__(214);

var _notifications2 = _interopRequireDefault(_notifications);

var _wowClassic = __webpack_require__(477);

var _wowClassic2 = _interopRequireDefault(_wowClassic);

var _selectServer = __webpack_require__(885);

var _selectServer2 = _interopRequireDefault(_selectServer);

var _servers = __webpack_require__(887);

var _servers2 = _interopRequireDefault(_servers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shortcut = void 0,
    listener = void 0;
try {
  shortcut = __webpack_require__(215);
} catch (err) {}

exports.default = {
  components: {
    notifications: _notifications2.default,
    search: _wowClassic2.default,
    selectServer: _selectServer2.default
  },

  props: ['landingPage'],

  asyncData: function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
      var store = _ref.store,
          route = _ref.route;
      var serverlist, slug, serverQuery, faction, server;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$cubic.get('/wow-classic/v1/servers/full');

            case 2:
              serverlist = _context.sent;

              store.commit('setServerlist', serverlist);

              slug = route.params.slug;

              if (slug) {
                serverQuery = slug.split('-');
                faction = serverQuery.pop();
                server = (0, _extends3.default)({}, serverlist.find(function (s) {
                  return s.slug === serverQuery.join('-');
                }));

                if (server) {
                  server.faction = faction.toLowerCase();
                  store.commit('setActiveServer', server);
                }
              }

            case 6:
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
    activeServer: function activeServer() {
      return this.$store.state.servers.activeServer;
    }
  },

  mounted: function mounted() {
    var _this = this;

    listener = shortcut.bind('shift + f', function (e) {
      e.preventDefault();
      _this.$el.querySelector('input').focus();
    });
  },
  beforeDestroy: function beforeDestroy() {
    shortcut.unbind('shift + f', listener);
  },


  methods: {
    generateSwitchUrl: function generateSwitchUrl(server) {
      return this.$route.fullPath.replace(this.activeServer.slug, server);
    }
  },

  storeModule: _servers2.default
};

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wow_classic_vue_vue_type_template_id_7d868b9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1016);
/* harmony import */ var _wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(478);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wow_classic_vue_vue_type_template_id_7d868b9e___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _wow_classic_vue_vue_type_template_id_7d868b9e___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(479);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(167);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _search = __webpack_require__(454);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['placeholder', 'focus'],

  data: function data() {
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
    activeServer: function activeServer() {
      return this.$store.state.servers.activeServer;
    }
  },

  mounted: function mounted() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (this.focus && !isMobile) {
      this.$refs.input.focus();
    }
  },


  methods: {
    fetch: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(event) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.input = event.target.value;
                this.$store.commit('setSearchInput', event.target.value);

                if (!this.autocomplete.name.startsWith(event.target.value)) {
                  this.autocomplete = {
                    name: '',
                    category: 'Any'
                  };
                }
                _context.next = 5;
                return this.fetchSuggestions();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetch(_x) {
        return _ref.apply(this, arguments);
      }

      return fetch;
    }(),
    fetchSuggestions: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var result, query, regex, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, r;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                result = [];

                if (!(this.input.length > 1)) {
                  _context2.next = 6;
                  break;
                }

                query = encodeURIComponent(this.input);
                _context2.next = 5;
                return this.$cubic.get('/wow-classic/v1/search/suggestions?query=' + query + '&limit=4');

              case 5:
                result = _context2.sent;

              case 6:
                regex = new RegExp('^' + this.input, 'i');

                if (!(result.length && result[0].name.replace(regex, this.input).startsWith(this.input))) {
                  _context2.next = 31;
                  break;
                }

                this.autocomplete = {
                  name: result[0].name.replace(regex, this.input),
                  category: result[0].type
                };
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 12;
                for (_iterator = (0, _getIterator3.default)(result); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  r = _step.value;
                  r.imgUrl = r.imgUrl.replace('/large/', '/medium/');
                }_context2.next = 20;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2['catch'](12);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 20:
                _context2.prev = 20;
                _context2.prev = 21;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 23:
                _context2.prev = 23;

                if (!_didIteratorError) {
                  _context2.next = 26;
                  break;
                }

                throw _iteratorError;

              case 26:
                return _context2.finish(23);

              case 27:
                return _context2.finish(20);

              case 28:
                this.suggestions = result;
                _context2.next = 33;
                break;

              case 31:
                this.autocomplete = {
                  name: '',
                  category: 'Any'
                };
                this.suggestions = [];

              case 33:
                if (this.input.length < 1) {
                  this.autocomplete = {
                    name: '',
                    category: ''
                  };
                }

              case 34:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[12, 16, 20, 28], [21,, 23, 27]]);
      }));

      function fetchSuggestions() {
        return _ref2.apply(this, arguments);
      }

      return fetchSuggestions;
    }(),
    complete: function complete() {
      var suggestion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.autocomplete.name) {
        this.input = this.autocomplete.name;
      }
    },
    search: function search() {
      var suggestion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

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
        this.$router.push('/wow-classic/search/' + this.activeServer.slug + '?input=' + this.input);
      }
    },
    query: function query(itemId) {
      this.$router.push('/wow-classic/items/' + this.activeServer.slug + '/' + itemId);
    }
  },

  storeModule: _search2.default
};

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(481);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ['fn'],

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
    activeServer: function activeServer() {
      return this.$store.state.servers.activeServer;
    },
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
    },
    generateSwitchUrl: function generateSwitchUrl(server) {
      return this.$route.fullPath.replace(this.activeServer.slug, server);
    }
  }
};

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_server_vue_vue_type_template_id_c0afa1ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1038);
/* harmony import */ var _select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(480);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _select_server_vue_vue_type_style_index_0_id_c0afa1ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(886);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _select_server_vue_vue_type_template_id_c0afa1ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _select_server_vue_vue_type_template_id_c0afa1ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "c0afa1ea",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_style_index_0_id_c0afa1ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(482);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_style_index_0_id_c0afa1ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_style_index_0_id_c0afa1ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_style_index_0_id_c0afa1ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
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
    setServerlist: function setServerlist(state, list) {
      state.serverlist = list;
    },
    setActiveServer: function setActiveServer(state, server) {
      server.slug = server.slug + '-' + server.faction;
      state.activeServer = server;
    }
  }
};

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_style_index_0_id_68a545c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(483);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_style_index_0_id_68a545c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_style_index_0_id_68a545c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_style_index_0_id_68a545c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);