// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/admin/Desktop/github/WanAndroid-Weex/src/activity/Login.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-29ba82f1"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "login-bg": {
    "flex": 1
  },
  "login-wrapper": {
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "180"
  },
  "logo": {
    "width": "600",
    "height": "300"
  },
  "title-text": {
    "height": "80",
    "width": "550",
    "textAlign": "center",
    "color": "rgb(235,223,223)",
    "marginTop": "35",
    "fontSize": "55"
  },
  "button": {
    "fontSize": "50",
    "width": "500",
    "textAlign": "center",
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "borderWidth": "2",
    "borderStyle": "solid",
    "color": "#008000",
    "borderColor": "#ffffff",
    "backgroundColor": "#ffffff",
    "borderRadius": "50",
    "marginTop": "40"
  },
  "input": {
    "fontSize": "35",
    "height": "80",
    "width": "550",
    "paddingLeft": "90",
    "color": "#ffffff",
    "paddingTop": "50",
    "marginBottom": "15",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "input-img": {
    "position": "absolute",
    "top": "10",
    "left": "15",
    "width": "50",
    "height": "50"
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
  data: function data() {
    return {
      userNumber: '',
      userPassword: '',
      imageStyle: {
        position: 'absolute',
        width: '750px',
        height: weex.config.env.deviceHeight * 750 / weex.config.env.deviceWidth + 'px'
      }
    };
  },

  methods: {
    changeUserNumber: function changeUserNumber(event) {
      this.userNumber = event.value;
    },
    changeUserPassword: function changeUserPassword(event) {
      this.userPassword = event.value;
    },
    // 登录
    login: function login() {
      if (this.userNumber.length < 1) {
        modal.toast({
          message: '请输入手机号。'
        });
      } else if (this.userPassword.length < 1) {
        modal.toast({
          message: '请输入密码。'
        });
      } else if (this.userNumber === 'weihao' && this.userPassword === '123') {
        modal.toast({ message: '登录成功' });
      } else {
        modal.toast({ message: '用户名或密码不正确，请重新输入！' });
      }
    },
    // 注册
    register: function register() {
      modal.toast({
        message: 'Hello，注册暂时未开发，后续我会进行完善。'
      });
      // navigator.push({
      //     url: "http://192.168.12.75:8081/dist/Register.js"
      // })
    }
    // //找回密码
    // fingPassword: function() {
    //     modal.toast({
    //         message: "Hello，找回密码暂时未开发，后续我们会进行完善。"
    //     })
    // },
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["login-bg"]
  }, [_c('image', {
    style: _vm.imageStyle,
    attrs: {
      "src": "local:///login_bg"
    }
  }), _c('div', {
    staticClass: ["login-wrapper"]
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": "local:///logo"
    }
  }), _c('text', {
    staticClass: ["title-text"]
  }, [_vm._v("玩Android")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "用户名",
      "autofocus": "true",
      "value": "",
      "value": (_vm.userNumber)
    },
    on: {
      "change": _vm.changeUserNumber,
      "input": function($event) {
        _vm.userNumber = $event.target.attr.value
      }
    }
  }), _c('div', {
    staticStyle: {
      width: "500px",
      height: "1px",
      backgroundColor: "rgb(235, 223, 223)"
    }
  }), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "password",
      "placeholder": "密码",
      "value": "",
      "value": (_vm.userPassword)
    },
    on: {
      "change": _vm.changeUserPassword,
      "input": function($event) {
        _vm.userPassword = $event.target.attr.value
      }
    }
  }), _c('div', {
    staticStyle: {
      width: "500px",
      height: "1px",
      backgroundColor: "rgb(235, 223, 223)"
    }
  }), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.login
    }
  }, [_vm._v("登录")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.register
    }
  }, [_vm._v("注册")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(26);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(29)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/admin/Desktop/github/WanAndroid-Weex/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-340493da"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Login = __webpack_require__(0);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Register from "./activity/Register.vue";
// import Home from "./activity/Home.vue";
// import BottomTab from './activity/BottomTab.vue'
exports.default = {
  name: 'App',
  components: {
    // 第三步 ：写下页面名，并注释掉其他页面名。
    Login: _Login2.default
    //    Register
    // Home
    // BottomTab
  }
}; //
//
//
//
//
//
//
//
//
//
//

// 第二步: 使用import xxx form "./activity/xxx.vue" 方式注入页面。

// import HelloWorld from "./components/HelloWorld.vue";

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Login')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);