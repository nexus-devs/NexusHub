(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ 1028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results-wow-classic/results-group.vue?vue&type=template&id=5dc99db9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"results-group"},[_c('h2',[_vm._v(_vm._s(_vm.type.charAt(0).toUpperCase() + _vm.type.slice(1)))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.results.length)+" Result"+_vm._s(_vm.results.length !== 1 ? 's' : ''))]),_vm._v(" "),_c('div',{staticClass:"filter"},[_c('div',{staticClass:"filter-tags"},[_c('div',{staticClass:"filter-tag-row"},_vm._l((_vm.filters),function(filter){return _c('div',{key:filter.name,staticClass:"btn-tag",class:{ active: filter.active, descending: filter.descending },on:{"click":function($event){return _vm.selectFilterTag(filter)}}},[(filter.icon)?_c('img',{staticClass:"ico-12",attrs:{"src":filter.icon,"alt":filter.alt}}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(filter.name))]),_vm._v(" "),_c('img',{staticClass:"ico-16 asc-desc",class:{ descending: filter.descending },attrs:{"src":"/img/ui/dropdown.svg","alt":"Ascending/Descending"}})])}),0)]),_vm._v(" "),_c('div',{staticClass:"filter-view"},[_c('div',{staticClass:"interactive",class:{ active: _vm.listType === 'list' },on:{"click":function($event){return _vm.selectListView('list')}}},[_c('img',{staticClass:"ico-20",attrs:{"src":"/img/ui/list-view.svg","alt":"List"}}),_vm._v(" "),_c('span',[_vm._v("List")])]),_vm._v(" "),_c('div',{staticClass:"interactive",class:{ active: _vm.listType === 'grid' },on:{"click":function($event){return _vm.selectListView('grid')}}},[_c('img',{staticClass:"ico-20",attrs:{"src":"/img/ui/card-view.svg","alt":"Grid"}}),_vm._v(" "),_c('span',[_vm._v("Grid")])])])]),_vm._v(" "),_c('div',{staticClass:"results-container",style:({ height: (_vm.listHeight + "px") })},[_c('transition-group',{ref:"grid",staticClass:"result-grid list",class:{ active: _vm.listType === 'grid' },attrs:{"name":"list"}},_vm._l((_vm.results),function(result){return _c('item-grid',{key:result.name,attrs:{"result":result,"filters":_vm.filters,"selection":_vm.selection}})}),1),_vm._v(" "),_c('transition-group',{ref:"list",staticClass:"result-list list",class:{ active: _vm.listType === 'list' },attrs:{"name":"list"}},_vm._l((_vm.results),function(result){return _c('item-list',{key:result.name,staticClass:"result row",attrs:{"result":result,"filters":_vm.filters}})}),1)],1),_vm._v(" "),_c('div',{staticClass:"add-items"},[_vm._v("\n    Think we missed an item?\n    "),_c('router-link',{attrs:{"to":"/contact"}},[_vm._v("\n      Let us know\n    ")]),_vm._v(" or\n    "),_c('a',{attrs:{"href":"https://github.com/nexus-devs/wow-classic-items","target":"_blank"}},[_vm._v("add items yourself")]),_vm._v(" if you\n    wanna help us support the project.\n  ")],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/results-wow-classic/results-group.vue?vue&type=template&id=5dc99db9&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results-wow-classic/results-grid-snippet.vue?vue&type=template&id=2610ffc4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"result col"},[_c('router-link',{staticClass:"interactive",class:{ set: _vm.result.set },attrs:{"to":_vm.result.webUrl}},[_c('div',{staticClass:"result-img"},[_c('div',{staticClass:"result-img-shade"}),_vm._v(" "),_c('img',{class:{ mod: _vm.result.imgUrl.includes('jpeg') },attrs:{"src":_vm.result.imgUrl,"alt":_vm.result.name}}),_vm._v(" "),_c('img',{staticClass:"result-img-blur",attrs:{"src":_vm.result.imgUrl}}),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.result.description))])]),_vm._v(" "),_c('div',{staticClass:"result-info"},[_c('span',[_vm._v(_vm._s(_vm.result.name))])]),_vm._v(" "),_c('div',{staticClass:"result-data"},[(_vm.selection)?_c('div',{staticClass:"result-data-value col"},[_c('span',[_vm._v(_vm._s(_vm.result._score ? _vm.result._score + ' ' + _vm.selection : 'No data')+" ")])]):_c('div',_vm._l((_vm.correctFilters),function(filter){return _c('div',{key:filter.name,staticClass:"result-data-value col"},[(!filter.hidden && _vm.resolve(filter))?_c('div',[_c('img',{staticClass:"ico-12",attrs:{"src":filter.icon,"alt":filter.alt}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.resolve(filter))+_vm._s(filter.unit))])]):_vm._e()])}),0)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/results-wow-classic/results-grid-snippet.vue?vue&type=template&id=2610ffc4&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/results-wow-classic/results-list-snippet.vue?vue&type=template&id=66e99cb4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"result"},[_c('router-link',{staticClass:"row interactive",attrs:{"to":_vm.result.webUrl}},[_c('img',{staticClass:"result-img-blur",attrs:{"src":_vm.result.imgUrl}}),_vm._v(" "),_c('div',{staticClass:"result-title col-b"},[_c('div',{staticClass:"result-img"},[_c('img',{class:{ mod: _vm.result.imgUrl.includes('jpeg') },attrs:{"src":_vm.result.imgUrl,"alt":_vm.result.name}})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.result.name))])]),_vm._v(" "),_c('div',{staticClass:"result-data row"},_vm._l((_vm.correctFilters),function(filter){return _c('div',{key:filter.name,staticClass:"result-data-value",class:{ hidden: filter.hidden }},[(_vm.resolve(filter))?_c('div',[(filter.icon)?_c('img',{staticClass:"ico-12",attrs:{"src":filter.icon,"alt":filter.alt}}):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.resolve(filter))+_vm._s(filter.unit))])]):_vm._e()])}),0)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/results-wow-classic/results-list-snippet.vue?vue&type=template&id=66e99cb4&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(190), __esModule: true };

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = __webpack_require__(35);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['name', 'maxHeight', 'maxWidth'],

  data: function data() {
    return {
      blocked: false
    };
  },


  computed: {
    theme: function theme() {
      return (0, _theme2.default)(this);
    }
  },

  mounted: function mounted() {
    var nitroAds = window.nitroAds;
    if (!nitroAds) {
      this.blocked = true;
      return;
    }

    nitroAds.createAd('ad-' + this.name, {
      floor: 0.05,
      refreshLimit: 10,
      refreshTime: 60,
      report: {
        enabled: true,
        wording: 'Report Abuse',
        position: 'fixed-bottom-right'
      }
    });
  }
};

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"blocked":"warframe_blocked_3JQnD"};

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"blocked":"wow-classic_blocked_3Rr6k"};

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 175:
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

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nitroAds_vue_vue_type_template_id_76ad42ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(207);
/* harmony import */ var _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(169);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(198);
/* harmony import */ var _nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(199);
/* harmony import */ var _nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(200);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);










function injectStyles (context) {
  
  this["warframe"] = (_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"])
this["wow-classic"] = (_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"].locals || _nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"])

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(
  _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nitroAds_vue_vue_type_template_id_76ad42ac___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _nitroAds_vue_vue_type_template_id_76ad42ac___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {


var KeyCombo = __webpack_require__(175);


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

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
__webpack_require__(77);
module.exports = __webpack_require__(191);


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var get = __webpack_require__(79);
module.exports = __webpack_require__(2).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(173);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ads/nitroAds.vue?vue&type=template&id=76ad42ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layout-center",class:[{ 'blocked-unit': _vm.blocked, 'ad-unit': !_vm.blocked }, _vm.blocked ? _vm.theme.blocked : ''],style:({
  'max-height': _vm.maxHeight,
  'max-width': _vm.maxWidth
}),attrs:{"id":("ad-" + _vm.name)}},[(_vm.blocked)?_c('span',[_vm._v("Advertising seems to be blocked by your browser. This is fine.")]):_vm._e(),_vm._v(" "),(_vm.blocked)?_c('span',[_vm._v("NexusHub is completely free and we want it to stay that way.\n    Advertising is currently our only income to pay for the servers and to help us to develop NexusHub even further!")]):_vm._e(),_vm._v(" "),(_vm.blocked)?_c('span',[_vm._v("Please consider adding an exception for NexusHub.co on your Adblocker.\n    If you think that any ads are intrusive or inappropriate, feel free to contact us.")]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ads/nitroAds.vue?vue&type=template&id=76ad42ac&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
var Locale = __webpack_require__(189);
var KeyCombo = __webpack_require__(175);


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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)))

/***/ }),

/***/ 210:
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

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(372);

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

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {


var Keyboard = __webpack_require__(209);
var Locale   = __webpack_require__(189);
var KeyCombo = __webpack_require__(175);

var keyboard = new Keyboard();

keyboard.setLocale('us', __webpack_require__(210));

exports          = module.exports = keyboard;
exports.Keyboard = Keyboard;
exports.Locale   = Locale;
exports.KeyCombo = KeyCombo;


/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(374), __esModule: true };

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(375);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(7);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(376) });


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(9);
var getKeys = __webpack_require__(59);
var gOPS = __webpack_require__(377);
var pIE = __webpack_require__(378);
var toObject = __webpack_require__(58);
var IObject = __webpack_require__(82);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(37)(function () {
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

/***/ 377:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 378:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(643);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nitroAds = __webpack_require__(183);

var _nitroAds2 = _interopRequireDefault(_nitroAds);

var _appContent = __webpack_require__(177);

var _appContent2 = _interopRequireDefault(_appContent);

var _meta = __webpack_require__(174);

var _meta2 = _interopRequireDefault(_meta);

var _wowClassic = __webpack_require__(424);

var _wowClassic2 = _interopRequireDefault(_wowClassic);

var _resultsGroup = __webpack_require__(970);

var _resultsGroup2 = _interopRequireDefault(_resultsGroup);

var _wowClassic3 = __webpack_require__(591);

var _wowClassic4 = _interopRequireDefault(_wowClassic3);

var _serp = __webpack_require__(976);

var _serp2 = _interopRequireDefault(_serp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ongoing = setTimeout(function () {});

exports.default = {
  components: {
    ad: _nitroAds2.default,
    navigation: _wowClassic2.default,
    appContent: _appContent2.default,

    search: _wowClassic4.default,
    resultsGroup: _resultsGroup2.default
  },

  asyncData: function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
      var store = _ref.store,
          route = _ref.route;
      var slug, input;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              slug = route.params.slug;
              input = route.query.input;
              _context.next = 4;
              return store.dispatch('fetchSerpResults', { input: input, slug: slug });

            case 4:
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
  data: function data() {
    return {
      filtersExpanded: false
    };
  },


  computed: {
    results: function results() {
      return this.$store.state.serp.results;
    },
    input: function input() {
      return this.$store.state.search.input;
    }
  },

  mounted: function mounted() {
    this.filtersHeight = this.$refs.filters.offsetHeight;
    this.$refs.input.focus();
    for (var i = 0; i < this.$store.state.serp.activeFilters.length; i++) {
      this.$store.commit('popSerpActiveFilter');
    }
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch('applyInputQuery', this.$route);
  },
  beforeDestroy: function beforeDestroy() {
    for (var i = 0; i < this.$store.state.serp.activeFilters.length; i++) {
      this.$store.commit('popSerpActiveFilter');
    }
  },


  methods: {
    search: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(event) {
        var _this = this;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.$store.commit('setSearchInput', event.target.value);

                clearTimeout(ongoing);
                ongoing = setTimeout(function () {
                  _this.$store.dispatch('fetchSerpResults', event.target.value);
                  window.history.pushState({}, null, '/wow-classic/search?input=' + event.target.value);
                }, 200);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function search(_x2) {
        return _ref3.apply(this, arguments);
      }

      return search;
    }(),
    toggleFilters: function toggleFilters() {
      this.filtersExpanded = !this.filtersExpanded;
    }
  },

  storeModule: _serp2.default,

  head: function head() {
    return {
      title: this.input + ' \xB7 NexusHub Search',
      meta: (0, _meta2.default)({
        title: this.input + ' Search Results on NexusHub',
        description: this.results.length ? 'Find ' + this.results.length + ' matches for ' + this.input + '. ' + this.results[0].name : 'No search results :(',
        image: this.results.length ? '' + this.results[0].imgUrl : 'https://nexushub.co/img/brand/og-banner-wow-classic.jpg'
      })
    };
  }
};

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(168);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _resultsGridSnippet = __webpack_require__(971);

var _resultsGridSnippet2 = _interopRequireDefault(_resultsGridSnippet);

var _resultsListSnippet = __webpack_require__(973);

var _resultsListSnippet2 = _interopRequireDefault(_resultsListSnippet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    'item-grid': _resultsGridSnippet2.default,
    'item-list': _resultsListSnippet2.default
  },

  props: ['type'],

  data: function data() {
    return {
      listHeight: 0,
      listType: 'list',
      selection: ''
    };
  },


  computed: {
    filters: function filters() {
      return this.$store.state.serp.filters;
    },
    results: function results() {
      return this.$store.state.serp.results;
    }
  },

  watch: {
    results: function results() {
      var _this = this;

      setTimeout(function () {
        return _this.onResize();
      }, 75);
    }
  },

  mounted: function mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },


  methods: {
    onResize: function onResize() {
      if (this.listType === 'grid') {
        this.listHeight = this.$refs.grid.$el.offsetHeight;
      } else {
        this.listHeight = this.$refs.list.$el.offsetHeight;
      }
      this.listHeight += 40;
    },
    selectListView: function selectListView(type) {
      this.listType = type;
      this.onResize();
    },
    selectFilterTag: function selectFilterTag(filter) {
      var newFilters = [].concat(this.$store.state.serp.filters);
      var target = newFilters.find(function (f) {
        return f.name === filter.name;
      });

      var activeFilters = this.$store.state.serp.activeFilters;
      var isActive = activeFilters.find(function (f) {
        return f.name === filter.name;
      });

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

      if (newFilters.reduce(function (a, f) {
        return a + (f.active ? 1 : 0);
      }, 0)) {
        this.$store.dispatch('applySerpFilters');
      } else {
        this.$store.commit('resetSerpResults');
      }

      this.setSelection();
    },
    setSelection: function setSelection() {
      var filters = this.$store.state.serp.activeFilters;
      var selection = '';

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(filters), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var filter = _step.value;

          if (selection) {
            selection += filter.active ? ' per ' + filter.name : '';
          } else {
            selection += filter.active ? filter.name : '';
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

      this.selection = selection;
    }
  }
};

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(647);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ['result', 'filters', 'selection'],

  computed: {
    correctFilters: function correctFilters() {
      var _this = this;

      return this.filters.filter(function (f) {
        return f.category === _this.result.results;
      });
    }
  },

  methods: {
    resolve: function resolve(filter) {
      var result = this.result;
      var keys = filter.path.split('.');

      try {
        keys.forEach(function (key) {
          result = result[key];
        });
        return result;
      } catch (err) {}
    }
  }
};

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(650);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ['result', 'filters'],

  computed: {
    correctFilters: function correctFilters() {
      var _this = this;

      return this.filters.filter(function (f) {
        return f.category === _this.result.results;
      });
    }
  },

  methods: {
    resolve: function resolve(filter) {
      var result = this.result;
      var keys = filter.path.split('.');

      try {
        keys.forEach(function (key) {
          result = result[key];
        });
        return result;
      } catch (err) {}
    }
  }
};

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _results_group_vue_vue_type_template_id_5dc99db9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1028);
/* harmony import */ var _results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(644);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _results_group_vue_vue_type_style_index_0_id_5dc99db9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(975);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _results_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _results_group_vue_vue_type_template_id_5dc99db9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _results_group_vue_vue_type_template_id_5dc99db9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "5dc99db9",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 971:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _results_grid_snippet_vue_vue_type_template_id_2610ffc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1037);
/* harmony import */ var _results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(646);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _results_grid_snippet_vue_vue_type_style_index_0_id_2610ffc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(972);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _results_grid_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _results_grid_snippet_vue_vue_type_template_id_2610ffc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _results_grid_snippet_vue_vue_type_template_id_2610ffc4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "2610ffc4",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 972:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_2610ffc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(648);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_2610ffc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_2610ffc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_grid_snippet_vue_vue_type_style_index_0_id_2610ffc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _results_list_snippet_vue_vue_type_template_id_66e99cb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1039);
/* harmony import */ var _results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(649);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _results_list_snippet_vue_vue_type_style_index_0_id_66e99cb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(974);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _results_list_snippet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _results_list_snippet_vue_vue_type_template_id_66e99cb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _results_list_snippet_vue_vue_type_template_id_66e99cb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "66e99cb4",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 974:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_66e99cb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(651);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_66e99cb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_66e99cb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_list_snippet_vue_vue_type_style_index_0_id_66e99cb4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_5dc99db9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(652);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_5dc99db9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_5dc99db9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_results_group_vue_vue_type_style_index_0_id_5dc99db9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(168);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
    setSerpResults: function setSerpResults(state, results) {
      state.results = results;
    },
    setSerpFilters: function setSerpFilters(state, filters) {
      state.filters = filters;
    },
    addSerpActiveFilter: function addSerpActiveFilter(state, name) {
      if (!state.activeFilters.find(function (f) {
        return f.name === name;
      })) {
        state.activeFilters.push(state.filters.find(function (f) {
          return f.name === name;
        }));
      }
    },
    removeSerpActiveFilter: function removeSerpActiveFilter(state, name) {
      var i = state.activeFilters.findIndex(function (f) {
        return f.name === name;
      });
      state.activeFilters.splice(i, 1);
    },
    popSerpActiveFilter: function popSerpActiveFilter(state) {
      var removed = state.activeFilters.pop();
      state.filters.find(function (f) {
        return f.name === removed.name;
      }).active = false;
    },
    setSerpOriginalResults: function setSerpOriginalResults(state, filters) {
      state.originalResults = filters;
    },
    resetSerpResults: function resetSerpResults(state, filters) {
      state.results = state.originalResults;
    }
  },
  actions: {
    fetchSerpResults: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref, _ref2) {
        var commit = _ref.commit,
            dispatch = _ref.dispatch;
        var input = _ref2.input,
            slug = _ref2.slug;
        var B, itemData, items, players, results;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(input.length < 2)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                B = input.includes('🅱');
                _context.next = 5;
                return this.$cubic.get('/wow-classic/v1/search?query=' + input.replace(/🅱️/g, 'b'));

              case 5:
                itemData = _context.sent;
                _context.next = 8;
                return dispatch('sanitizeSerpResults', { itemData: itemData, B: B, slug: slug });

              case 8:
                items = _context.sent;
                players = [];
                results = items.concat(players);

                commit('setSerpResults', results);
                commit('setSerpOriginalResults', results);
                dispatch('applySerpFilters');

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchSerpResults(_x, _x2) {
        return _ref3.apply(this, arguments);
      }

      return fetchSerpResults;
    }(),
    sanitizeSerpResults: function sanitizeSerpResults(context, _ref4) {
      var itemData = _ref4.itemData,
          B = _ref4.B,
          slug = _ref4.slug;

      var items = [];

      var _loop = function _loop(item) {
        if (items.find(function (i) {
          return i.name === item.name;
        })) {
          return 'continue';
        }

        var name = B ? item.name.toLowerCase().replace(/\b\w/g, function (l) {
          return '🅱';
        }) : item.name;

        items.push({
          name: name,
          imgUrl: item.imgUrl,
          webUrl: slug ? '/wow-classic/items/' + slug + '/' + item.uniqueName : '/wow-classic/items/' + item.uniqueName,
          results: 'items',
          description: name
        });
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(itemData), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          var _ret = _loop(item);

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

      return items;
    },
    applySerpFilters: function applySerpFilters(_ref5) {
      var commit = _ref5.commit,
          dispatch = _ref5.dispatch,
          state = _ref5.state;

      var filters = state.activeFilters;
      var results = [].concat(state.results);
      var resolve = function resolve(filter, result) {
        try {
          filter.path.split('.').forEach(function (key) {
            result = result[key];
          });
          return result;
        } catch (err) {}
      };
      var getSortingValue = function getSortingValue(result) {
        var ascending = void 0,
            res = void 0,
            missing = void 0;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(filters), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var filter = _step2.value;

            if (!filter.descending) ascending = true;
            if (!resolve(filter, result)) missing = true;
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

      var getUiScore = function getUiScore(x) {
        if (x === null) {
          return null;
        } else {
          return x % 1 === 0 ? Math.abs(x) : Math.abs(x).toFixed(2);
        }
      };

      if (!filters.length) {
        return;
      }

      results.sort(function (a, b) {
        var aVal = getSortingValue(a);
        var bVal = getSortingValue(b);
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
};

/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_dc71603e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(653);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_dc71603e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_dc71603e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_dc71603e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_dc71603e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(988);
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(642);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _search_vue_vue_type_style_index_0_id_dc71603e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(977);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_dc71603e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _search_vue_vue_type_template_id_dc71603e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "dc71603e",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/wow-classic/search.vue?vue&type=template&id=dc71603e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search"},[_c('navigation'),_vm._v(" "),_c('app-content',[_c('div',{staticClass:"search-input"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"search"},[_c('div',{staticClass:"field"},[_c('input',{ref:"input",attrs:{"type":"text","placeholder":"Try: Black Lotus, Devils..."},on:{"input":_vm.search}}),_vm._v(" "),_c('img',{staticClass:"search-ico ico-h-16",attrs:{"src":"/img/ui/search.svg","alt":"Search"}})])]),_vm._v(" "),_c('div',{staticClass:"search-filters"},[_c('div',{staticClass:"search-filters-label interactive",on:{"click":_vm.toggleFilters}},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/filter.svg","alt":"Filter"}}),_vm._v(" "),_c('span',[_vm._v("Filters")])])])])]),_vm._v(" "),_c('div',{ref:"filters",staticClass:"search-filters-options",class:{ expanded: _vm.filtersExpanded }},[_c('div',{staticClass:"container"},[_vm._v("\n        Sorry, no filters here yet. Look around again soon™!\n      ")])]),_vm._v(" "),_c('section',{staticClass:"results",class:{ expanded: _vm.filtersExpanded }},[_c('div',{staticClass:"results-background-fix"}),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"results-headline"},[_c('span',[_vm._v("Results for")]),_vm._v(" "),_c('h1',[_vm._v(_vm._s(_vm.input))])]),_vm._v(" "),_c('results-group',{attrs:{"type":'items'}})],1),_vm._v(" "),_c('ad',{attrs:{"name":"wow-classic-serp-results"}})],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/wow-classic/search.vue?vue&type=template&id=dc71603e&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);