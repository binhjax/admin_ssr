module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+n12":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export formatTimestamp */
/* unused harmony export parseTimestamp */
/* unused harmony export parseDate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return md5Hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return newUUID; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Na7r");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xg6E");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_2__);


 // 格式化时间戳

function formatTimestamp(val, format) {
  let f = 'YYYY-MM-DD HH:mm:ss';

  if (format) {
    f = format;
  }

  return moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(val).format(f);
} // 解析时间戳

function parseTimestamp(val) {
  return moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(val);
} // 解析日期

function parseDate(val) {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(val);
} // 格式化日期

function formatDate(val, format) {
  let f = 'YYYY-MM-DD HH:mm:ss';

  if (format) {
    f = format;
  }

  return moment__WEBPACK_IMPORTED_MODULE_0___default()(val).format(f);
} // md5加密

function md5Hash(value) {
  return md5__WEBPACK_IMPORTED_MODULE_1___default()(value);
} // 创建UUID

function newUUID() {
  return uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()();
}

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "03io":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return querySelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return enable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return disable; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("t3Un");

const router = 'roles';
async function query(params) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/${router}`, {
    params
  });
}
async function querySelect(params = {}) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/${router}.select`, {
    params
  });
}
async function get(id, params = {}) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/${router}/${id}`, {
    params
  });
}
async function create(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/${router}`, {
    method: _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* methods */ "d"].POST,
    data
  });
}
async function update(id, data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/${router}/${id}`, {
    method: _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* methods */ "d"].PUT,
    data
  });
}
async function del(id, params = {}) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/${router}/${id}`, {
    method: _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* methods */ "d"].DELETE,
    params
  });
}
async function enable(id, params = {}) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/${router}/${id}/enable`, {
    method: _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* methods */ "d"].PATCH,
    params
  });
}
async function disable(id, params = {}) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/${router}/${id}/disable`, {
    method: _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* methods */ "d"].PATCH,
    params
  });
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "2m8j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ withDva; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "invariant"
var external_invariant_ = __webpack_require__("oI3S");
var external_invariant_default = /*#__PURE__*/__webpack_require__.n(external_invariant_);

// EXTERNAL MODULE: external "global/document"
var document_ = __webpack_require__("QMzh");
var document_default = /*#__PURE__*/__webpack_require__.n(document_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "dva-core"
var external_dva_core_ = __webpack_require__("8w+2");

// CONCATENATED MODULE: ./src/utils/dva-no-router.js
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const isFunction = o => typeof o === 'function';
/* harmony default export */ var dva_no_router = (function (opts = {}) {
  const app = external_dva_core_["create"](opts);
  const oldAppStart = app.start;
  app.router = router;
  app.start = start;
  return app;

  function router(router) {
    external_invariant_default()(isFunction(router), `[app.router] router should be function, but got ${typeof router}`);
    app._router = router;
  }

  function start(container) {
    // 允许 container 是字符串，然后用 querySelector 找元素
    if (isString(container)) {
      container = document_default.a.querySelector(container);
      external_invariant_default()(container, `[app.start] container ${container} not found`);
    } // 并且是 HTMLElement


    external_invariant_default()(!container || isHTMLElement(container), `[app.start] container should be HTMLElement`); // 路由必须提前注册

    external_invariant_default()(app._router, `[app.start] router must be registered before app.start()`);

    if (!app._store) {
      oldAppStart.call(app);
    }

    const store = app._store; // export _getProvider for HMR
    // ref: https://github.com/dvajs/dva/issues/469

    app._getProvider = getProvider.bind(null, store, app); // If has container, render; else, return react component

    if (container) {
      render(container, store, app, app._router);

      app._plugin.apply('onHmr')(render.bind(null, container, store, app));
    } else {
      return getProvider(store, this, this._router);
    }
  }
});

function isHTMLElement(node) {
  return typeof node === 'object' && node !== null && node.nodeType && node.nodeName;
}

function isString(str) {
  return typeof str === 'string';
}

function getProvider(store, app, router) {
  return extraProps => __jsx(external_react_redux_["Provider"], {
    store: store
  }, router(_objectSpread({
    app
  }, extraProps)));
}

function render(container, store, app, router) {
  const ReactDOM = __webpack_require__("faye"); // eslint-disable-line


  ReactDOM.render( /*#__PURE__*/external_react_default.a.createElement(getProvider(store, app, router)), container);
}
// EXTERNAL MODULE: ./src/services/login.js
var login = __webpack_require__("anxO");

// CONCATENATED MODULE: ./src/models/global.js
function global_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function global_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { global_ownKeys(Object(source), true).forEach(function (key) { global_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { global_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function global_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var models_global = ({
  namespace: 'global',
  state: {
    title: 'Teko landing admin',
    copyRight: '2020 Vnpay',
    defaultURL: '/dashboard',
    collapsed: false,
    openKeys: [],
    selectedKeys: [],
    user: {
      user_name: 'admin',
      real_name: 'Administrator',
      role_names: []
    },
    menuPaths: {},
    menuMap: {},
    menus: []
  },
  effects: {
    *menuEvent({
      pathname
    }, {
      put,
      select
    }) {
      let p = pathname;

      if (p === '/') {
        p = yield select(state => state.global.defaultURL);
      }

      const menuPaths = yield select(state => state.global.menuPaths);
      const item = menuPaths[p];

      if (!item) {
        return;
      }

      if (item.parent_path && item.parent_path !== '') {
        yield put({
          type: 'changeOpenKeys',
          payload: item.parent_path.split('/')
        });
      }

      yield put({
        type: 'changeSelectedKeys',
        payload: [item.id]
      });
    },

    *fetchUser(_, {
      call,
      put
    }) {
      const response = yield call(login["c" /* getCurrentUser */]);
      yield put({
        type: 'saveUser',
        payload: response
      });
    },

    *fetchMenuTree({
      pathname
    }, {
      call,
      put
    }) {
      const response = yield call(login["e" /* queryMenuTree */]);
      const menuData = response.list || [];
      yield put({
        type: 'saveMenus',
        payload: menuData
      });
      const menuPaths = {};
      const menuMap = {};

      function fillData(data) {
        for (let i = 0; i < data.length; i += 1) {
          menuMap[data[i].id] = data[i];

          if (data[i].router !== '') {
            menuPaths[data[i].router] = data[i];
          }

          if (data[i].children && data[i].children.length > 0) {
            fillData(data[i].children);
          }
        }
      }

      fillData(menuData);
      yield [put({
        type: 'saveMenuPaths',
        payload: menuPaths
      }), put({
        type: 'saveMenuMap',
        payload: menuMap
      }), put({
        type: 'menuEvent',
        pathname
      })];
    }

  },
  reducers: {
    changeLayoutCollapsed(state, {
      payload
    }) {
      return global_objectSpread(global_objectSpread({}, state), {}, {
        collapsed: payload
      });
    },

    changeOpenKeys(state, {
      payload
    }) {
      return global_objectSpread(global_objectSpread({}, state), {}, {
        openKeys: payload
      });
    },

    changeSelectedKeys(state, {
      payload
    }) {
      return global_objectSpread(global_objectSpread({}, state), {}, {
        selectedKeys: payload
      });
    },

    saveUser(state, {
      payload
    }) {
      return global_objectSpread(global_objectSpread({}, state), {}, {
        user: payload
      });
    },

    saveMenuPaths(state, {
      payload
    }) {
      return global_objectSpread(global_objectSpread({}, state), {}, {
        menuPaths: payload
      });
    },

    saveMenuMap(state, {
      payload
    }) {
      return global_objectSpread(global_objectSpread({}, state), {}, {
        menuMap: payload
      });
    },

    saveMenus(state, {
      payload
    }) {
      return global_objectSpread(global_objectSpread({}, state), {}, {
        menus: payload
      });
    }

  },
  subscriptions: {
    setup({
      dispatch,
      history
    }) {
      if (typeof history !== 'undefined') {
        history.listen(({
          pathname
        }) => {
          dispatch({
            type: 'menuEvent',
            pathname
          });
        });
      }
    }

  }
});
// EXTERNAL MODULE: ./node_modules/antd/lib/message/style/index.js
var style = __webpack_require__("tL+A");

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__("t3Un");

// CONCATENATED MODULE: ./src/services/demo.js

const demo_router = 'demos';
async function demo_query(params = {}) {
  return Object(request["b" /* default */])(`/v1/${demo_router}`, {
    params
  });
}
async function get(id, params = {}) {
  return Object(request["b" /* default */])(`/v1/${demo_router}/${id}`, {
    params
  });
}
async function create(data) {
  return Object(request["b" /* default */])(`/v1/${demo_router}`, {
    method: request["d" /* methods */].POST,
    data
  });
}
async function update(id, data) {
  return Object(request["b" /* default */])(`/v1/${demo_router}/${id}`, {
    method: request["d" /* methods */].PUT,
    data
  });
}
async function del(id, params = {}) {
  return Object(request["b" /* default */])(`/v1/${demo_router}/${id}`, {
    method: request["d" /* methods */].DELETE,
    params
  });
}
async function enable(id, params = {}) {
  return Object(request["b" /* default */])(`/v1/${demo_router}/${id}/enable`, {
    method: request["d" /* methods */].PATCH,
    params
  });
}
async function disable(id, params = {}) {
  return Object(request["b" /* default */])(`/v1/${demo_router}/${id}/disable`, {
    method: request["d" /* methods */].PATCH,
    params
  });
}
// CONCATENATED MODULE: ./src/models/demo.js



function demo_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function demo_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { demo_ownKeys(Object(source), true).forEach(function (key) { demo_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { demo_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function demo_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var demo = ({
  namespace: 'demo',
  state: {
    search: {},
    pagination: {},
    data: {
      list: [],
      pagination: {}
    },
    submitting: false,
    formTitle: '',
    formID: '',
    formVisible: false,
    formData: {}
  },
  effects: {
    *fetch({
      search,
      pagination
    }, {
      call,
      put,
      select
    }) {
      let params = {};

      if (search) {
        params = demo_objectSpread(demo_objectSpread({}, params), search);
        yield put({
          type: 'saveSearch',
          payload: search
        });
      } else {
        const s = yield select(state => state.demo.search);

        if (s) {
          params = demo_objectSpread(demo_objectSpread({}, params), s);
        }
      }

      if (pagination) {
        params = demo_objectSpread(demo_objectSpread({}, params), pagination);
        yield put({
          type: 'savePagination',
          payload: pagination
        });
      } else {
        const p = yield select(state => state.demo.pagination);

        if (p) {
          params = demo_objectSpread(demo_objectSpread({}, params), p);
        }
      }

      const response = yield call(demo_query, params);
      yield put({
        type: 'saveData',
        payload: response
      });
    },

    *loadForm({
      payload
    }, {
      put
    }) {
      yield put({
        type: 'changeFormVisible',
        payload: true
      });
      yield [put({
        type: 'saveFormType',
        payload: payload.type
      }), put({
        type: 'saveFormTitle',
        payload: 'New Basic Example'
      }), put({
        type: 'saveFormID',
        payload: ''
      }), put({
        type: 'saveFormData',
        payload: {}
      })];

      if (payload.type === 'E') {
        yield [put({
          type: 'saveFormTitle',
          payload: 'Edit Basic Example'
        }), put({
          type: 'saveFormID',
          payload: payload.id
        }), put({
          type: 'fetchForm',
          payload: {
            id: payload.id
          }
        })];
      }
    },

    *fetchForm({
      payload
    }, {
      call,
      put
    }) {
      const response = yield call(get, payload.id);
      yield [put({
        type: 'saveFormData',
        payload: response
      })];
    },

    *submit({
      payload
    }, {
      call,
      put,
      select
    }) {
      yield put({
        type: 'changeSubmitting',
        payload: true
      });

      const params = demo_objectSpread({}, payload);

      const formType = yield select(state => state.demo.formType);
      let success = false;

      if (formType === 'E') {
        const id = yield select(state => state.demo.formID);
        const response = yield call(update, id, params);

        if (response.status === 'OK') {
          success = true;
        }
      } else {
        const response = yield call(create, params);

        if (response.id && response.id !== '') {
          success = true;
        }
      }

      yield put({
        type: 'changeSubmitting',
        payload: false
      });

      if (success) {
        message_default.a.success('保存成功');

        yield put({
          type: 'changeFormVisible',
          payload: false
        });
        yield put({
          type: 'fetch'
        });
      }
    },

    *del({
      payload
    }, {
      call,
      put
    }) {
      const response = yield call(del, payload.id);

      if (response.status === 'OK') {
        message_default.a.success('Delete successfully');

        yield put({
          type: 'fetch'
        });
      }
    },

    *changeStatus({
      payload
    }, {
      call,
      put,
      select
    }) {
      let response;

      if (payload.status === 1) {
        response = yield call(enable, payload.id);
      } else {
        response = yield call(disable, payload.id);
      }

      if (response.status === 'OK') {
        let msg = 'Enable successfully';

        if (payload.status === 2) {
          msg = 'Deactivated successfully';
        }

        message_default.a.success(msg);

        const data = yield select(state => state.demo.data);
        const newData = {
          list: [],
          pagination: data.pagination
        };

        for (let i = 0; i < data.list.length; i += 1) {
          const item = data.list[i];

          if (item.id === payload.id) {
            item.status = payload.status;
          }

          newData.list.push(item);
        }

        yield put({
          type: 'saveData',
          payload: newData
        });
      }
    }

  },
  reducers: {
    saveData(state, {
      payload
    }) {
      return demo_objectSpread(demo_objectSpread({}, state), {}, {
        data: payload
      });
    },

    saveSearch(state, {
      payload
    }) {
      return demo_objectSpread(demo_objectSpread({}, state), {}, {
        search: payload
      });
    },

    savePagination(state, {
      payload
    }) {
      return demo_objectSpread(demo_objectSpread({}, state), {}, {
        pagination: payload
      });
    },

    changeFormVisible(state, {
      payload
    }) {
      return demo_objectSpread(demo_objectSpread({}, state), {}, {
        formVisible: payload
      });
    },

    saveFormTitle(state, {
      payload
    }) {
      return demo_objectSpread(demo_objectSpread({}, state), {}, {
        formTitle: payload
      });
    },

    saveFormType(state, {
      payload
    }) {
      return demo_objectSpread(demo_objectSpread({}, state), {}, {
        formType: payload
      });
    },

    saveFormID(state, {
      payload
    }) {
      return demo_objectSpread(demo_objectSpread({}, state), {}, {
        formID: payload
      });
    },

    saveFormData(state, {
      payload
    }) {
      return demo_objectSpread(demo_objectSpread({}, state), {}, {
        formData: payload
      });
    },

    changeSubmitting(state, {
      payload
    }) {
      return demo_objectSpread(demo_objectSpread({}, state), {}, {
        submitting: payload
      });
    }

  }
});
// EXTERNAL MODULE: external "qs"
var external_qs_ = __webpack_require__("eW3l");

// CONCATENATED MODULE: ./src/models/login.js
function login_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function login_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { login_ownKeys(Object(source), true).forEach(function (key) { login_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { login_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function login_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { history } from 'umi';



/* harmony default export */ var models_login = ({
  namespace: 'login',
  state: {
    status: '',
    tip: '',
    submitting: false,
    captchaID: '',
    captcha: ''
  },
  effects: {
    *loadCaptcha(_, {
      call,
      put
    }) {
      const response = yield call(login["b" /* captchaID */]);
      const {
        captcha_id: captchaID
      } = response;
      yield put({
        type: 'saveCaptchaID',
        payload: captchaID
      });
      yield put({
        type: 'saveCaptcha',
        payload: login["a" /* captcha */](captchaID)
      });
    },

    *reloadCaptcha(_, {
      put,
      select
    }) {
      const captchaID = yield select(state => state.login.captchaID);
      yield put({
        type: 'saveCaptcha',
        payload: `${login["a" /* captcha */](captchaID)}&reload=${Math.random()}`
      });
    },

    *submit({
      payload
    }, {
      call,
      put
    }) {
      //binhnt: Change button
      yield put({
        type: 'changeSubmitting',
        payload: true
      }); //binhnt: Call service to submit login

      const response = yield call(login["d" /* login */], payload);

      if (response.data && response.data.error) {
        const {
          data: {
            error: {
              message
            }
          },
          status
        } = response;
        yield [put({
          type: 'saveTip',
          payload: message
        }), put({
          type: 'saveStatus',
          payload: status >= 500 ? 'ERROR' : 'FAIL'
        }), put({
          type: 'changeSubmitting',
          payload: false
        }), put({
          type: 'loadCaptcha'
        })];
        return;
      } // Save the access token


      Object(request["e" /* setToken */])(response);
      yield [put({
        type: 'saveTip',
        payload: ''
      }), put({
        type: 'saveStatus',
        payload: ''
      }), put({
        type: 'changeSubmitting',
        payload: false
      })];
      const params = Object(external_qs_["parse"])(window.location.href.split('?')[1]);
      const {
        redirect
      } = params;

      if (redirect) {
        window.location.href = redirect;
        return;
      }

      history.replace('/');
    },

    *logout(_, {
      call
    }) {
      console.log('Model process logout');
      Object(request["c" /* logout */])(); // const response = yield call(loginService.logout);
      // if (response.status === 'OK') {
      // logout();
      // }
    }

  },
  reducers: {
    saveCaptchaID(state, {
      payload
    }) {
      return login_objectSpread(login_objectSpread({}, state), {}, {
        captchaID: payload
      });
    },

    saveCaptcha(state, {
      payload
    }) {
      return login_objectSpread(login_objectSpread({}, state), {}, {
        captcha: payload
      });
    },

    saveStatus(state, {
      payload
    }) {
      return login_objectSpread(login_objectSpread({}, state), {}, {
        status: payload
      });
    },

    saveTip(state, {
      payload
    }) {
      return login_objectSpread(login_objectSpread({}, state), {}, {
        tip: payload
      });
    },

    changeSubmitting(state, {
      payload
    }) {
      return login_objectSpread(login_objectSpread({}, state), {}, {
        submitting: payload
      });
    }

  }
});
// EXTERNAL MODULE: ./src/services/menu.js
var menu = __webpack_require__("SEfv");

// CONCATENATED MODULE: ./src/models/menu.js



function menu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function menu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { menu_ownKeys(Object(source), true).forEach(function (key) { menu_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { menu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function menu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var models_menu = ({
  namespace: 'menu',
  state: {
    search: {},
    pagination: {},
    data: {
      list: [],
      pagination: {}
    },
    submitting: false,
    formType: '',
    formTitle: '',
    formID: '',
    formVisible: false,
    formData: {},
    treeData: [],
    expandedKeys: []
  },
  effects: {
    *fetch({
      search,
      pagination
    }, {
      call,
      put,
      select
    }) {
      let params = {
        parentID: ''
      };

      if (search) {
        params = menu_objectSpread(menu_objectSpread({}, params), search);
        yield put({
          type: 'saveSearch',
          payload: search
        });
      } else {
        const s = yield select(state => state.menu.search);

        if (s) {
          params = menu_objectSpread(menu_objectSpread({}, params), s);
        }
      }

      if (pagination) {
        params = menu_objectSpread(menu_objectSpread({}, params), pagination);
        yield put({
          type: 'savePagination',
          payload: pagination
        });
      } else {
        const p = yield select(state => state.menu.pagination);

        if (p) {
          params = menu_objectSpread(menu_objectSpread({}, params), p);
        }
      }

      const response = yield call(menu["f" /* query */], params);
      yield put({
        type: 'saveData',
        payload: response
      });
    },

    *loadForm({
      payload
    }, {
      put,
      select
    }) {
      yield put({
        type: 'changeFormVisible',
        payload: true
      });
      yield [put({
        type: 'saveFormType',
        payload: payload.type
      }), put({
        type: 'saveFormTitle',
        payload: 'New menu'
      }), put({
        type: 'saveFormID',
        payload: ''
      }), put({
        type: 'saveFormData',
        payload: {}
      }), put({
        type: 'fetchTree'
      })];

      if (payload.type === 'E') {
        yield [put({
          type: 'saveFormTitle',
          payload: 'Edit menu'
        }), put({
          type: 'saveFormID',
          payload: payload.id
        }), put({
          type: 'fetchForm',
          payload: {
            id: payload.id
          }
        })];
      } else {
        const search = yield select(state => state.menu.search);
        yield put({
          type: 'saveFormData',
          payload: {
            parent_id: search.parentID ? search.parentID : ''
          }
        });
      }
    },

    *fetchForm({
      payload
    }, {
      call,
      put
    }) {
      const response = yield call(menu["e" /* get */], payload.id);
      yield put({
        type: 'saveFormData',
        payload: response
      });
    },

    *submit({
      payload
    }, {
      call,
      put,
      select
    }) {
      yield put({
        type: 'changeSubmitting',
        payload: true
      });

      const params = menu_objectSpread({}, payload);

      const formType = yield select(state => state.menu.formType);
      let success = false;

      if (formType === 'E') {
        const id = yield select(state => state.menu.formID);
        const response = yield call(menu["h" /* update */], id, params);

        if (response.status === 'OK') {
          success = true;
        }
      } else {
        const response = yield call(menu["a" /* create */], params);

        if (response.id && response.id !== '') {
          success = true;
        }
      }

      yield put({
        type: 'changeSubmitting',
        payload: false
      });

      if (success) {
        message_default.a.success('Saved successfully');

        yield put({
          type: 'changeFormVisible',
          payload: false
        });
        yield put({
          type: 'fetchTree'
        });
        yield put({
          type: 'fetch'
        });
      }
    },

    *del({
      payload
    }, {
      call,
      put
    }) {
      const response = yield call(menu["b" /* del */], payload.id);

      if (response.status === 'OK') {
        message_default.a.success('successfully deleted');

        yield put({
          type: 'fetchTree'
        });
        yield put({
          type: 'fetch'
        });
      }
    },

    *fetchTree({
      payload
    }, {
      call,
      put
    }) {
      let params = {};

      if (payload) {
        params = menu_objectSpread(menu_objectSpread({}, params), payload);
      }

      const response = yield call(menu["g" /* queryTree */], params);
      yield put({
        type: 'saveTreeData',
        payload: response.list || []
      });
    },

    *changeStatus({
      payload
    }, {
      call,
      put,
      select
    }) {
      let response;

      if (payload.status === 1) {
        response = yield call(menu["d" /* enable */], payload.id);
      } else {
        response = yield call(menu["c" /* disable */], payload.id);
      }

      if (response.status === 'OK') {
        let msg = 'Successfully activated';

        if (payload.status === 2) {
          msg = 'Deactivated successfully';
        }

        message_default.a.success(msg);

        const data = yield select(state => state.menu.data);
        const newData = {
          list: [],
          pagination: data.pagination
        };

        for (let i = 0; i < data.list.length; i += 1) {
          const item = data.list[i];

          if (item.id === payload.id) {
            item.status = payload.status;
          }

          newData.list.push(item);
        }

        yield put({
          type: 'saveData',
          payload: newData
        });
      }
    }

  },
  reducers: {
    saveData(state, {
      payload
    }) {
      return menu_objectSpread(menu_objectSpread({}, state), {}, {
        data: payload
      });
    },

    saveSearch(state, {
      payload
    }) {
      return menu_objectSpread(menu_objectSpread({}, state), {}, {
        search: payload
      });
    },

    savePagination(state, {
      payload
    }) {
      return menu_objectSpread(menu_objectSpread({}, state), {}, {
        pagination: payload
      });
    },

    changeFormVisible(state, {
      payload
    }) {
      return menu_objectSpread(menu_objectSpread({}, state), {}, {
        formVisible: payload
      });
    },

    saveFormType(state, {
      payload
    }) {
      return menu_objectSpread(menu_objectSpread({}, state), {}, {
        formType: payload
      });
    },

    saveFormTitle(state, {
      payload
    }) {
      return menu_objectSpread(menu_objectSpread({}, state), {}, {
        formTitle: payload
      });
    },

    saveFormID(state, {
      payload
    }) {
      return menu_objectSpread(menu_objectSpread({}, state), {}, {
        formID: payload
      });
    },

    saveFormData(state, {
      payload
    }) {
      return menu_objectSpread(menu_objectSpread({}, state), {}, {
        formData: payload
      });
    },

    changeSubmitting(state, {
      payload
    }) {
      return menu_objectSpread(menu_objectSpread({}, state), {}, {
        submitting: payload
      });
    },

    saveTreeData(state, {
      payload
    }) {
      return menu_objectSpread(menu_objectSpread({}, state), {}, {
        treeData: payload
      });
    },

    saveExpandedKeys(state, {
      payload
    }) {
      return menu_objectSpread(menu_objectSpread({}, state), {}, {
        expandedKeys: payload
      });
    }

  }
});
// EXTERNAL MODULE: ./src/services/role.js
var role = __webpack_require__("03io");

// CONCATENATED MODULE: ./src/models/role.js



function role_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function role_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { role_ownKeys(Object(source), true).forEach(function (key) { role_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { role_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function role_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var models_role = ({
  namespace: 'role',
  state: {
    search: {},
    pagination: {},
    data: {
      list: [],
      pagination: {}
    },
    submitting: false,
    formTitle: '',
    formID: '',
    formVisible: false,
    formData: {},
    selectData: []
  },
  effects: {
    *fetch({
      search,
      pagination
    }, {
      call,
      put,
      select
    }) {
      let params = {};

      if (search) {
        params = role_objectSpread(role_objectSpread({}, params), search);
        yield put({
          type: 'saveSearch',
          payload: search
        });
      } else {
        const s = yield select(state => state.role.search);

        if (s) {
          params = role_objectSpread(role_objectSpread({}, params), s);
        }
      }

      if (pagination) {
        params = role_objectSpread(role_objectSpread({}, params), pagination);
        yield put({
          type: 'savePagination',
          payload: pagination
        });
      } else {
        const p = yield select(state => state.role.pagination);

        if (p) {
          params = role_objectSpread(role_objectSpread({}, params), p);
        }
      }

      const response = yield call(role["f" /* query */], params);
      yield put({
        type: 'saveData',
        payload: response
      });
    },

    *loadForm({
      payload
    }, {
      put
    }) {
      yield put({
        type: 'changeFormVisible',
        payload: true
      });
      yield [put({
        type: 'saveFormType',
        payload: payload.type
      }), put({
        type: 'saveFormTitle',
        payload: 'New role'
      }), put({
        type: 'saveFormID',
        payload: ''
      }), put({
        type: 'saveFormData',
        payload: {}
      })];

      if (payload.type === 'E') {
        yield [put({
          type: 'saveFormTitle',
          payload: 'Edit role'
        }), put({
          type: 'saveFormID',
          payload: payload.id
        }), put({
          type: 'fetchForm',
          payload: {
            id: payload.id
          }
        })];
      }
    },

    *fetchForm({
      payload
    }, {
      call,
      put
    }) {
      const response = yield call(role["e" /* get */], payload.id);
      const {
        role_menus: roleMenus
      } = response;

      if (roleMenus) {
        const mRoleMenus = {};
        const nRoleMenus = [];
        roleMenus.forEach(item => {
          if (mRoleMenus[item.menu_id]) {
            mRoleMenus[item.menu_id] = [...mRoleMenus[item.menu_id], item.action_id];
          } else {
            mRoleMenus[item.menu_id] = [item.action_id];
          }
        });
        Object.keys(mRoleMenus).forEach(key => {
          nRoleMenus.push({
            menu_id: key,
            actions: mRoleMenus[key]
          });
        });
        response.role_menus = nRoleMenus;
      }

      yield [put({
        type: 'saveFormData',
        payload: response
      })];
    },

    *submit({
      payload
    }, {
      call,
      put,
      select
    }) {
      yield put({
        type: 'changeSubmitting',
        payload: true
      });

      const params = role_objectSpread({}, payload);

      const formType = yield select(state => state.role.formType);
      let success = false;

      if (formType === 'E') {
        const id = yield select(state => state.role.formID);
        const response = yield call(role["h" /* update */], id, params);

        if (response.status === 'OK') {
          success = true;
        }
      } else {
        const response = yield call(role["a" /* create */], params);

        if (response.id && response.id !== '') {
          success = true;
        }
      }

      yield put({
        type: 'changeSubmitting',
        payload: false
      });

      if (success) {
        message_default.a.success('Saved successfully');

        yield put({
          type: 'changeFormVisible',
          payload: false
        });
        yield put({
          type: 'fetch'
        });
      }
    },

    *del({
      payload
    }, {
      call,
      put
    }) {
      const response = yield call(role["b" /* del */], payload.id);

      if (response.status === 'OK') {
        message_default.a.success('successfully deleted');

        yield put({
          type: 'fetch'
        });
      }
    },

    *fetchSelect(_, {
      call,
      put
    }) {
      const response = yield call(role["g" /* querySelect */]);
      yield put({
        type: 'saveSelectData',
        payload: response.list || []
      });
    },

    *changeStatus({
      payload
    }, {
      call,
      put,
      select
    }) {
      let response;

      if (payload.status === 1) {
        response = yield call(role["d" /* enable */], payload.id);
      } else {
        response = yield call(role["c" /* disable */], payload.id);
      }

      if (response.status === 'OK') {
        let msg = 'Successfully activated';

        if (payload.status === 2) {
          msg = 'Deactivated successfully';
        }

        message_default.a.success(msg);

        const data = yield select(state => state.role.data);
        const newData = {
          list: [],
          pagination: data.pagination
        };

        for (let i = 0; i < data.list.length; i += 1) {
          const item = data.list[i];

          if (item.id === payload.id) {
            item.status = payload.status;
          }

          newData.list.push(item);
        }

        yield put({
          type: 'saveData',
          payload: newData
        });
      }
    }

  },
  reducers: {
    saveData(state, {
      payload
    }) {
      return role_objectSpread(role_objectSpread({}, state), {}, {
        data: payload
      });
    },

    saveSearch(state, {
      payload
    }) {
      return role_objectSpread(role_objectSpread({}, state), {}, {
        search: payload
      });
    },

    savePagination(state, {
      payload
    }) {
      return role_objectSpread(role_objectSpread({}, state), {}, {
        pagination: payload
      });
    },

    changeFormVisible(state, {
      payload
    }) {
      return role_objectSpread(role_objectSpread({}, state), {}, {
        formVisible: payload
      });
    },

    saveFormTitle(state, {
      payload
    }) {
      return role_objectSpread(role_objectSpread({}, state), {}, {
        formTitle: payload
      });
    },

    saveFormType(state, {
      payload
    }) {
      return role_objectSpread(role_objectSpread({}, state), {}, {
        formType: payload
      });
    },

    saveFormID(state, {
      payload
    }) {
      return role_objectSpread(role_objectSpread({}, state), {}, {
        formID: payload
      });
    },

    saveFormData(state, {
      payload
    }) {
      return role_objectSpread(role_objectSpread({}, state), {}, {
        formData: payload
      });
    },

    changeSubmitting(state, {
      payload
    }) {
      return role_objectSpread(role_objectSpread({}, state), {}, {
        submitting: payload
      });
    },

    saveSelectData(state, {
      payload
    }) {
      return role_objectSpread(role_objectSpread({}, state), {}, {
        selectData: payload
      });
    }

  }
});
// CONCATENATED MODULE: ./src/services/user.js

const user_router = 'users';
async function user_query(params) {
  return Object(request["b" /* default */])(`/v1/${user_router}`, {
    params
  });
}
async function user_get(id, params = {}) {
  return Object(request["b" /* default */])(`/v1/${user_router}/${id}`, {
    params
  });
}
async function user_create(data) {
  return Object(request["b" /* default */])(`/v1/${user_router}`, {
    method: request["d" /* methods */].POST,
    data
  });
}
async function user_update(id, data) {
  return Object(request["b" /* default */])(`/v1/${user_router}/${id}`, {
    method: request["d" /* methods */].PUT,
    data
  });
}
async function user_del(id, params = {}) {
  return Object(request["b" /* default */])(`/v1/${user_router}/${id}`, {
    method: request["d" /* methods */].DELETE,
    params
  });
}
async function user_enable(id, params = {}) {
  return Object(request["b" /* default */])(`/v1/${user_router}/${id}/enable`, {
    method: request["d" /* methods */].PATCH,
    params
  });
}
async function user_disable(id, params = {}) {
  return Object(request["b" /* default */])(`/v1/${user_router}/${id}/disable`, {
    method: request["d" /* methods */].PATCH,
    params
  });
}
// CONCATENATED MODULE: ./src/models/user.js



function user_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function user_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { user_ownKeys(Object(source), true).forEach(function (key) { user_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { user_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function user_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var user = ({
  namespace: 'user',
  state: {
    search: {},
    data: {
      list: [],
      pagination: {}
    },
    submitting: false,
    formTitle: '',
    formID: '',
    formVisible: false,
    formData: {}
  },
  effects: {
    *fetch({
      search,
      pagination
    }, {
      call,
      put,
      select
    }) {
      let params = {};

      if (search) {
        params = user_objectSpread(user_objectSpread({}, params), search);
        yield put({
          type: 'saveSearch',
          payload: search
        });
      } else {
        const s = yield select(state => state.user.search);

        if (s) {
          params = user_objectSpread(user_objectSpread({}, params), s);
        }
      }

      if (pagination) {
        params = user_objectSpread(user_objectSpread({}, params), pagination);
        yield put({
          type: 'savePagination',
          payload: pagination
        });
      } else {
        const p = yield select(state => state.user.pagination);

        if (p) {
          params = user_objectSpread(user_objectSpread({}, params), p);
        }
      }

      const response = yield call(user_query, params);
      yield put({
        type: 'saveData',
        payload: response
      });
    },

    *loadForm({
      payload
    }, {
      put
    }) {
      yield put({
        type: 'changeFormVisible',
        payload: true
      });
      yield [put({
        type: 'saveFormType',
        payload: payload.type
      }), put({
        type: 'saveFormTitle',
        payload: 'New User'
      }), put({
        type: 'saveFormID',
        payload: ''
      }), put({
        type: 'saveFormData',
        payload: {}
      })];

      if (payload.type === 'E') {
        yield [put({
          type: 'saveFormTitle',
          payload: 'Edit user'
        }), put({
          type: 'saveFormID',
          payload: payload.id
        }), put({
          type: 'fetchForm',
          payload: {
            id: payload.id
          }
        })];
      }
    },

    *fetchForm({
      payload
    }, {
      call,
      put
    }) {
      const response = yield call(user_get, payload.id);
      yield put({
        type: 'saveFormData',
        payload: response
      });
    },

    *submit({
      payload
    }, {
      call,
      put,
      select
    }) {
      yield put({
        type: 'changeSubmitting',
        payload: true
      });

      const params = user_objectSpread({}, payload);

      const formType = yield select(state => state.user.formType);
      let success = false;

      if (formType === 'E') {
        const id = yield select(state => state.user.formID);
        const response = yield call(user_update, id, params);

        if (response.status === 'OK') {
          success = true;
        }
      } else {
        const response = yield call(user_create, params);

        if (response.id && response.id !== '') {
          success = true;
        }
      }

      yield put({
        type: 'changeSubmitting',
        payload: false
      });

      if (success) {
        message_default.a.success('Saved successfully');

        yield put({
          type: 'changeFormVisible',
          payload: false
        });
        yield put({
          type: 'fetch'
        });
      }
    },

    *del({
      payload
    }, {
      call,
      put
    }) {
      const response = yield call(user_del, payload.id);

      if (response.status === 'OK') {
        message_default.a.success('successfully deleted');

        yield put({
          type: 'fetch'
        });
      }
    },

    *changeStatus({
      payload
    }, {
      call,
      put,
      select
    }) {
      let response;

      if (payload.status === 1) {
        response = yield call(user_enable, payload.id);
      } else {
        response = yield call(user_disable, payload.id);
      }

      if (response.status === 'OK') {
        let msg = 'Successfully activated';

        if (payload.status === 2) {
          msg = 'Deactivated successfully';
        }

        message_default.a.success(msg);

        const data = yield select(state => state.user.data);
        const newData = {
          list: [],
          pagination: data.pagination
        };

        for (let i = 0; i < data.list.length; i += 1) {
          const item = data.list[i];

          if (item.id === payload.id) {
            item.status = payload.status;
          }

          newData.list.push(item);
        }

        yield put({
          type: 'saveData',
          payload: newData
        });
      }
    }

  },
  reducers: {
    saveData(state, {
      payload
    }) {
      return user_objectSpread(user_objectSpread({}, state), {}, {
        data: payload
      });
    },

    saveSearch(state, {
      payload
    }) {
      return user_objectSpread(user_objectSpread({}, state), {}, {
        search: payload
      });
    },

    changeFormVisible(state, {
      payload
    }) {
      return user_objectSpread(user_objectSpread({}, state), {}, {
        formVisible: payload
      });
    },

    saveFormTitle(state, {
      payload
    }) {
      return user_objectSpread(user_objectSpread({}, state), {}, {
        formTitle: payload
      });
    },

    saveFormType(state, {
      payload
    }) {
      return user_objectSpread(user_objectSpread({}, state), {}, {
        formType: payload
      });
    },

    saveFormID(state, {
      payload
    }) {
      return user_objectSpread(user_objectSpread({}, state), {}, {
        formID: payload
      });
    },

    saveFormData(state, {
      payload
    }) {
      return user_objectSpread(user_objectSpread({}, state), {}, {
        formData: payload
      });
    },

    changeSubmitting(state, {
      payload
    }) {
      return user_objectSpread(user_objectSpread({}, state), {}, {
        submitting: payload
      });
    }

  }
});
// EXTERNAL MODULE: ./node_modules/antd/lib/notification/style/index.js
var notification_style = __webpack_require__("pjuD");

// EXTERNAL MODULE: external "antd/lib/notification"
var notification_ = __webpack_require__("Gss8");
var notification_default = /*#__PURE__*/__webpack_require__.n(notification_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// EXTERNAL MODULE: ./src/utils/persistent-store.js
var persistent_store = __webpack_require__("oyVS");

// CONCATENATED MODULE: ./src/utils/request_cms.js



function request_cms_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function request_cms_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { request_cms_ownKeys(Object(source), true).forEach(function (key) { request_cms_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { request_cms_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function request_cms_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






let refreshTimeout;
let lastAccessTime;
const baseURL = '/cms';
const contentType = {
  form: 'application/x-www-form-urlencoded',
  json: 'application/json'
};
const headerKeys = {
  ContentType: 'Content-Type',
  Authorization: 'Authorization'
};
const methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
  HEAD: 'HEAD',
  OPTIONS: 'OPTIONS'
}; // Get access token

function getAccessToken() {
  const token = persistent_store["a" /* default */].get(persistent_store["b" /* storeKeys */].AccessToken);

  if (!token) {
    return '';
  }

  return token.access_token;
  return '';
} // Wrap the URL with the token

function wrapURLWithToken(url) {
  const ss = url.split('?');
  const query = Object(external_qs_["parse"])(ss[1]);
  query.accessToken = getAccessToken();
  return `${ss[0]}?${Object(external_qs_["stringify"])(query)}`;
} // Sign out

function logout() {
  if (refreshTimeout) {
    clearTimeout(refreshTimeout);
  }

  persistent_store["a" /* default */].remove(persistent_store["b" /* storeKeys */].AccessToken);
  const {
    redirect
  } = Object(external_qs_["parse"])(window.location.href.split('?')[1]);

  if (window.location.pathname !== '/login' && !redirect) {
    window.location = '/login'; // window.history.replace({
    //   pathname: '/user/login',
    //   search: stringify({
    //     redirect: window.location.href,
    //   }),
    // });
  }
} // request Interceptor

function requestInterceptors(c) {
  const config = request_cms_objectSpread({}, c);

  const token = persistent_store["a" /* default */].get(persistent_store["b" /* storeKeys */].AccessToken);

  if (token) {
    config.headers[headerKeys.Authorization] = `${token.token_type} ${token.access_token}`;
  }

  return config;
} // ajax request


function request_cms_request(url, options = {}) {
  // console.log('request_cms.request: AccessToken: ', storeKeys.AccessToken);
  const oldToken = persistent_store["a" /* default */].get(persistent_store["b" /* storeKeys */].AccessToken); // console.log("oldToken: ", oldToken);

  if (oldToken && oldToken.expires_at - lastAccessTime <= 0) {
    if (refreshTimeout) {
      clearTimeout(refreshTimeout);
    }

    logout(); // eslint-disable-next-line compat/compat

    return Promise.reject(new Error('The token has expired'));
  }

  lastAccessTime = external_moment_default()().unix();

  const opts = request_cms_objectSpread({}, options);

  let showNotify = true;

  if (opts.hideNotify) {
    showNotify = false;
    delete opts.hideNotify;
  }

  const config = request_cms_objectSpread({
    method: methods.GET,
    baseURL,
    headers: {},
    transformRequest: (data, headers) => {
      switch (headers[headerKeys.ContentType]) {
        case contentType.json:
          return JSON.stringify(data);

        case contentType.form:
          return Object(external_qs_["stringify"])(data);

        default:
          return data;
      }
    },
    paramsSerializer: params => {
      return Object(external_qs_["stringify"])(params);
    },
    timeout: 60000
  }, opts);

  if (!(config.headers && config.headers[headerKeys.ContentType]) && [methods.POST, methods.PUT, methods.PATCH].indexOf(config.method) > -1) {
    config.headers[headerKeys.ContentType] = contentType.json;
  }

  const instance = external_axios_default.a.create(config);
  instance.interceptors.request.use(requestInterceptors);
  return instance.request({
    url
  }).then(res => {
    const {
      data
    } = res; // console.log('request_cms.request: Data', data);

    return data;
  }).catch(error => {
    const {
      response
    } = error;
    const {
      status,
      data
    } = response;

    if (status === 401 && data.error && data.error.code === 9999) {
      logout();
      return response;
    }

    if (showNotify) {
      let msg = 'Request error';

      if (status === 504) {
        msg = 'Not connected to server';
      } else if (data && data.error) {
        msg = data.error.message;
      }

      notification_default.a.error({
        message: `${config.baseURL}${url}`,
        description: msg
      });
    }

    return response;
  });
} // Put in the access token

function setToken(token) {
  lastAccessTime = token.expires_at;
  persistent_store["a" /* default */].set(persistent_store["b" /* storeKeys */].AccessToken, token);

  if (refreshTimeout) {
    clearTimeout(refreshTimeout);
  } // Renew the token 10 minutes in advance


  const timeout = token.expires_at - external_moment_default()().unix() - 10;

  if (timeout > 0) {
    refreshTimeout = setTimeout(() => {
      const oldToken = persistent_store["a" /* default */].get(persistent_store["b" /* storeKeys */].AccessToken);

      if (oldToken && oldToken.expires_at - lastAccessTime <= 0) {
        if (refreshTimeout) {
          clearTimeout(refreshTimeout);
        }

        return;
      }

      request_cms_request('/v1/pub/refresh-token', {
        method: methods.POST
      }).then(res => {
        setToken(res);
      });
    }, timeout * 1000);
  }
}
// CONCATENATED MODULE: ./src/services/restaurant.js

const restaurant_router = 'restaurants';
async function restaurant_query(params = {}) {
  return request_cms_request(`/${restaurant_router}`, {
    params
  });
}
async function queryTree(params = {}) {
  return request_cms_request(`/${restaurant_router}.tree`, {
    params
  });
}
async function restaurant_get(id, params = {}) {
  return request_cms_request(`/${restaurant_router}/${id}`, {
    params
  });
}
async function restaurant_create(data) {
  return request_cms_request(`/${restaurant_router}`, {
    method: methods.POST,
    data
  });
}
async function restaurant_update(id, data) {
  return request_cms_request(`/${restaurant_router}/${id}`, {
    method: methods.PUT,
    data
  });
}
async function restaurant_del(id, params = {}) {
  return request_cms_request(`/${restaurant_router}/${id}`, {
    method: methods.DELETE,
    params
  });
}
async function restaurant_enable(id, params = {}) {
  return request_cms_request(`/${restaurant_router}/${id}/enable`, {
    method: methods.PATCH,
    params
  });
}
async function restaurant_disable(id, params = {}) {
  return request_cms_request(`/${restaurant_router}/${id}/disable`, {
    method: methods.PATCH,
    params
  });
}
// CONCATENATED MODULE: ./src/models/restaurant.js



function restaurant_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function restaurant_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { restaurant_ownKeys(Object(source), true).forEach(function (key) { restaurant_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { restaurant_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function restaurant_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var restaurant = ({
  namespace: 'restaurant',
  state: {
    search: {},
    pagination: {},
    data: {
      list: [],
      pagination: {}
    },
    submitting: false,
    formType: '',
    formTitle: '',
    formID: '',
    formVisible: false,
    formData: {},
    treeData: [],
    expandedKeys: []
  },
  effects: {
    *fetch({
      search,
      pagination
    }, {
      call,
      put,
      select
    }) {
      console.log('restarant.model.fetch: is triggered');
      let params = {};

      if (search) {
        params = restaurant_objectSpread(restaurant_objectSpread({}, params), search);
        yield put({
          type: 'saveSearch',
          payload: search
        });
      } else {
        const s = yield select(state => state.menu.search);

        if (s) {
          params = restaurant_objectSpread(restaurant_objectSpread({}, params), s);
        }
      }

      if (pagination) {
        params = restaurant_objectSpread(restaurant_objectSpread({}, params), pagination);
        yield put({
          type: 'savePagination',
          payload: pagination
        });
      } else {
        const p = yield select(state => state.menu.pagination);

        if (p) {
          params = restaurant_objectSpread(restaurant_objectSpread({}, params), p);
        }
      }

      const response = yield call(restaurant_query, params);
      console.log('model.fetch: return value, ', response); //binhnt edit

      var data = {
        list: response,
        pagination: 0
      };
      yield put({
        type: 'saveData',
        payload: data
      });
    },

    *loadForm({
      payload
    }, {
      put,
      select
    }) {
      yield put({
        type: 'changeFormVisible',
        payload: true
      });
      yield [put({
        type: 'saveFormType',
        payload: payload.type
      }), put({
        type: 'saveFormTitle',
        payload: 'New menu'
      }), put({
        type: 'saveFormID',
        payload: ''
      }), put({
        type: 'saveFormData',
        payload: {}
      }), put({
        type: 'fetchTree'
      })];

      if (payload.type === 'E') {
        yield [put({
          type: 'saveFormTitle',
          payload: 'Edit menu'
        }), put({
          type: 'saveFormID',
          payload: payload.id
        }), put({
          type: 'fetchForm',
          payload: {
            id: payload.id
          }
        })];
      } else {
        const search = yield select(state => state.menu.search);
        yield put({
          type: 'saveFormData',
          payload: {
            parent_id: search.parentID ? search.parentID : ''
          }
        });
      }
    },

    *fetchForm({
      payload
    }, {
      call,
      put
    }) {
      const response = yield call(restaurant_get, payload.id);
      yield put({
        type: 'saveFormData',
        payload: response
      });
    },

    *submit({
      payload
    }, {
      call,
      put,
      select
    }) {
      yield put({
        type: 'changeSubmitting',
        payload: true
      });

      const params = restaurant_objectSpread({}, payload);

      const formType = yield select(state => state.menu.formType);
      let success = false;

      if (formType === 'E') {
        const id = yield select(state => state.menu.formID);
        const response = yield call(restaurant_update, id, params);

        if (response.status === 'OK') {
          success = true;
        }
      } else {
        const response = yield call(restaurant_create, params);

        if (response.id && response.id !== '') {
          success = true;
        }
      }

      yield put({
        type: 'changeSubmitting',
        payload: false
      });

      if (success) {
        message_default.a.success('Saved successfully');

        yield put({
          type: 'changeFormVisible',
          payload: false
        });
        yield put({
          type: 'fetchTree'
        });
        yield put({
          type: 'fetch'
        });
      }
    },

    *del({
      payload
    }, {
      call,
      put
    }) {
      const response = yield call(restaurant_del, payload.id);

      if (response.status === 'OK') {
        message_default.a.success('successfully deleted');

        yield put({
          type: 'fetchTree'
        });
        yield put({
          type: 'fetch'
        });
      }
    },

    *fetchTree({
      payload
    }, {
      call,
      put
    }) {
      let params = {};

      if (payload) {
        params = restaurant_objectSpread(restaurant_objectSpread({}, params), payload);
      }

      const response = yield call(queryTree, params);
      yield put({
        type: 'saveTreeData',
        payload: response.list || []
      });
    },

    *changeStatus({
      payload
    }, {
      call,
      put,
      select
    }) {
      let response;

      if (payload.status === 1) {
        response = yield call(restaurant_enable, payload.id);
      } else {
        response = yield call(restaurant_disable, payload.id);
      }

      if (response.status === 'OK') {
        let msg = 'Successfully activated';

        if (payload.status === 2) {
          msg = 'Deactivated successfully';
        }

        message_default.a.success(msg);

        const data = yield select(state => state.menu.data);
        const newData = {
          list: [],
          pagination: data.pagination
        };

        for (let i = 0; i < data.list.length; i += 1) {
          const item = data.list[i];

          if (item.id === payload.id) {
            item.status = payload.status;
          }

          newData.list.push(item);
        }

        yield put({
          type: 'saveData',
          payload: newData
        });
      }
    }

  },
  reducers: {
    saveData(state, {
      payload
    }) {
      return restaurant_objectSpread(restaurant_objectSpread({}, state), {}, {
        data: payload
      });
    },

    saveSearch(state, {
      payload
    }) {
      return restaurant_objectSpread(restaurant_objectSpread({}, state), {}, {
        search: payload
      });
    },

    savePagination(state, {
      payload
    }) {
      return restaurant_objectSpread(restaurant_objectSpread({}, state), {}, {
        pagination: payload
      });
    },

    changeFormVisible(state, {
      payload
    }) {
      return restaurant_objectSpread(restaurant_objectSpread({}, state), {}, {
        formVisible: payload
      });
    },

    saveFormType(state, {
      payload
    }) {
      return restaurant_objectSpread(restaurant_objectSpread({}, state), {}, {
        formType: payload
      });
    },

    saveFormTitle(state, {
      payload
    }) {
      return restaurant_objectSpread(restaurant_objectSpread({}, state), {}, {
        formTitle: payload
      });
    },

    saveFormID(state, {
      payload
    }) {
      return restaurant_objectSpread(restaurant_objectSpread({}, state), {}, {
        formID: payload
      });
    },

    saveFormData(state, {
      payload
    }) {
      return restaurant_objectSpread(restaurant_objectSpread({}, state), {}, {
        formData: payload
      });
    },

    changeSubmitting(state, {
      payload
    }) {
      return restaurant_objectSpread(restaurant_objectSpread({}, state), {}, {
        submitting: payload
      });
    },

    saveTreeData(state, {
      payload
    }) {
      return restaurant_objectSpread(restaurant_objectSpread({}, state), {}, {
        treeData: payload
      });
    },

    saveExpandedKeys(state, {
      payload
    }) {
      return restaurant_objectSpread(restaurant_objectSpread({}, state), {}, {
        expandedKeys: payload
      });
    }

  }
});
// CONCATENATED MODULE: ./src/models/index.js







const model = [models_global, user, demo, models_login, models_menu, models_role, restaurant];
/* harmony default export */ var models = (model);
// EXTERNAL MODULE: external "dva-loading"
var external_dva_loading_ = __webpack_require__("uPL1");
var external_dva_loading_default = /*#__PURE__*/__webpack_require__.n(external_dva_loading_);

// CONCATENATED MODULE: ./src/utils/store.js
function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const checkServer = () => Object.prototype.toString.call(global.process) === '[object process]'; // eslint-disable-next-line


const __NEXT_DVA_STORE__ = '__NEXT_DVA_STORE__';

function createDvaStore(initialState) {
  let app;

  if (initialState) {
    app = dva_no_router({
      initialState
    });
  } else {
    app = dva_no_router({});
  }

  const isArray = Array.isArray(models);

  if (isArray) {
    models.forEach(m => {
      app.model(m);
    });
  } else {
    app.model(models);
  }

  app.router(() => {});
  app.use(external_dva_loading_default()({}));
  app.start(); // console.log(app);
  // eslint-disable-next-line

  const store = app._store;
  return store;
}

function getOrCreateStore(initialState) {
  const isServer = checkServer();

  if (isServer) {
    // run in server
    // console.log('server');
    return createDvaStore(initialState);
  } // eslint-disable-next-line


  if (!window[__NEXT_DVA_STORE__]) {
    // console.log('client');
    // eslint-disable-next-line
    window[__NEXT_DVA_STORE__] = createDvaStore(initialState);
  } // eslint-disable-next-line


  return window[__NEXT_DVA_STORE__];
}

function withDva(...args) {
  return function CreateNextPage(Component) {
    const ComponentWithDva = (props = {}) => {
      const {
        store,
        initialState
      } = props,
            rest = _objectWithoutProperties(props, ["store", "initialState"]);

      const ConnectedComponent = Object(external_react_redux_["connect"])(...args)(Component);
      return /*#__PURE__*/external_react_default.a.createElement(external_react_redux_["Provider"], // in client side, it will init store with the initial state tranfer from server side
      {
        store: store && store.dispatch ? store : getOrCreateStore(initialState)
      },
      /*#__PURE__*/
      // transfer next.js's props to the page
      external_react_default.a.createElement(ConnectedComponent, rest));
    };

    ComponentWithDva.getInitialProps = async (props = {}) => {
      // console.log('get......');
      const isServer = checkServer();
      const store = getOrCreateStore(props.req); // call children's getInitialProps
      // get initProps and transfer in to the page

      const initialProps = Component.getInitialProps ? await Component.getInitialProps(store_objectSpread(store_objectSpread({}, props), {}, {
        isServer,
        store
      })) : {}; // console.log("WithDva: ", initialProps)

      return {
        store,
        initialProps,
        initialState: store.getState()
      };
    };

    return ComponentWithDva;
  };
}

/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "8w+2":
/***/ (function(module, exports) {

module.exports = require("dva-core");

/***/ }),

/***/ "9ubE":
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "Aquf":
/***/ (function(module, exports) {

module.exports = require("lodash-decorators/debounce");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "BOD2":
/***/ (function(module, exports) {



/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "G851":
/***/ (function(module, exports) {



/***/ }),

/***/ "Gss8":
/***/ (function(module, exports) {

module.exports = require("antd/lib/notification");

/***/ }),

/***/ "HgHO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "redirectUser", function() { return /* binding */ redirectUser; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "dva"
var external_dva_ = __webpack_require__("kJSe");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./src/components/GlobalFooter/index.less
var GlobalFooter = __webpack_require__("wNoj");
var GlobalFooter_default = /*#__PURE__*/__webpack_require__.n(GlobalFooter);

// CONCATENATED MODULE: ./src/components/GlobalFooter/index.js
var __jsx = external_react_default.a.createElement;



/* harmony default export */ var components_GlobalFooter = (({
  className,
  links,
  copyright
}) => {
  const clsString = external_classnames_default()(GlobalFooter_default.a.globalFooter, className);
  return __jsx("div", {
    className: clsString
  }, links && __jsx("div", {
    className: GlobalFooter_default.a.links
  }, links.map(link => __jsx("a", {
    key: link.title,
    target: link.blankTarget ? '_blank' : '_self',
    href: link.href
  }, link.title))), copyright && __jsx("div", {
    className: GlobalFooter_default.a.copyright
  }, copyright));
});
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// CONCATENATED MODULE: ./src/components/CopyRight/index.js
var CopyRight_jsx = external_react_default.a.createElement;


/* harmony default export */ var CopyRight = (({
  title
}) => CopyRight_jsx("div", null, "Copyright ", CopyRight_jsx(icons_["CopyrightOutlined"], null), " ", title));
// EXTERNAL MODULE: ./src/layouts/UserLayout.less
var layouts_UserLayout = __webpack_require__("BOD2");
var UserLayout_default = /*#__PURE__*/__webpack_require__.n(layouts_UserLayout);

// EXTERNAL MODULE: ./src/assets/logo.svg
var logo = __webpack_require__("mxmt");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: ./src/utils/store.js + 13 modules
var store = __webpack_require__("2m8j");

// CONCATENATED MODULE: ./src/layouts/UserLayout.js
var UserLayout_jsx = external_react_default.a.createElement;








class UserLayout_UserLayout extends external_react_default.a.PureComponent {
  render() {
    const {
      children,
      global: {
        title,
        copyRight
      }
    } = this.props;
    return UserLayout_jsx("div", {
      className: UserLayout_default.a.container
    }, UserLayout_jsx("div", {
      className: UserLayout_default.a.top
    }, UserLayout_jsx("div", {
      className: UserLayout_default.a.header
    }, UserLayout_jsx("img", {
      alt: "",
      className: UserLayout_default.a.logo,
      src: logo_default.a
    }), UserLayout_jsx("span", {
      className: UserLayout_default.a.title
    }, title)), UserLayout_jsx("div", {
      className: UserLayout_default.a.desc
    })), children, UserLayout_jsx(components_GlobalFooter, {
      className: UserLayout_default.a.footer,
      copyright: UserLayout_jsx(CopyRight, {
        title: copyRight
      })
    }));
  }

} // export default UserLayout;


/* harmony default export */ var src_layouts_UserLayout = (Object(store["a" /* default */])(state => ({
  global: state.global
}))(UserLayout_UserLayout));
// EXTERNAL MODULE: ./node_modules/antd/lib/spin/style/index.js
var style = __webpack_require__("nT0F");

// EXTERNAL MODULE: external "antd/lib/spin"
var spin_ = __webpack_require__("vEvA");
var spin_default = /*#__PURE__*/__webpack_require__.n(spin_);

// EXTERNAL MODULE: ./node_modules/antd/lib/dropdown/style/index.js
var dropdown_style = __webpack_require__("G851");

// EXTERNAL MODULE: external "antd/lib/dropdown"
var dropdown_ = __webpack_require__("HgHO");
var dropdown_default = /*#__PURE__*/__webpack_require__.n(dropdown_);

// EXTERNAL MODULE: ./node_modules/antd/lib/avatar/style/index.js
var avatar_style = __webpack_require__("W93S");

// EXTERNAL MODULE: external "antd/lib/avatar"
var avatar_ = __webpack_require__("9ubE");
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar_);

// EXTERNAL MODULE: ./node_modules/antd/lib/menu/style/index.js
var menu_style = __webpack_require__("PFYH");

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__("a5Fm");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: ./node_modules/antd/lib/layout/style/index.js
var layout_style = __webpack_require__("ppZR");

// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__("VzA1");
var layout_default = /*#__PURE__*/__webpack_require__.n(layout_);

// EXTERNAL MODULE: external "react-document-title"
var external_react_document_title_ = __webpack_require__("tiT0");
var external_react_document_title_default = /*#__PURE__*/__webpack_require__.n(external_react_document_title_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-container-query"
var external_react_container_query_ = __webpack_require__("Pa8B");

// EXTERNAL MODULE: external "lodash-decorators/debounce"
var debounce_ = __webpack_require__("Aquf");
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// EXTERNAL MODULE: ./node_modules/antd/lib/modal/style/index.js
var modal_style = __webpack_require__("fwXI");

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__("xKsY");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: ./node_modules/antd/lib/input/style/index.js
var input_style = __webpack_require__("cUip");

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: ./node_modules/antd/lib/message/style/index.js
var message_style = __webpack_require__("tL+A");

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: external "@ant-design/compatible"
var compatible_ = __webpack_require__("abI1");

// EXTERNAL MODULE: ./src/services/login.js
var login = __webpack_require__("anxO");

// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__("+n12");

// CONCATENATED MODULE: ./src/components/UpdatePasswordDialog/index.js







var _dec, _class, _temp;

var UpdatePasswordDialog_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import '../../pages/menu/MenuAction/index.css';



let UpdatePasswordDialog_UpdatePasswordDialog = (_dec = compatible_["Form"].create(), _dec(_class = (_temp = class UpdatePasswordDialog extends external_react_["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      submitting: false
    });

    _defineProperty(this, "onOKClick", () => {
      const {
        form
      } = this.props;
      form.validateFieldsAndScroll((err, values) => {
        if (err) {
          return;
        }

        if (values.new_password !== values.confirm_new_password) {
          message_default.a.warning('新密码与确认新密码不一致！');

          return;
        }

        this.setState({
          submitting: true
        });
        const formData = {
          old_password: Object(utils["b" /* md5Hash */])(values.old_password),
          new_password: Object(utils["b" /* md5Hash */])(values.new_password)
        };
        Object(login["f" /* updatePwd */])(formData).then(res => {
          if (res.status === 'OK') {
            message_default.a.success('密码更新成功！');

            this.handleCancel();
          }

          this.setState({
            submitting: false
          });
        });
      });
    });

    _defineProperty(this, "handleCancel", () => {
      const {
        onCancel
      } = this.props;

      if (onCancel) {
        onCancel();
      }
    });

    _defineProperty(this, "dispatch", action => {
      const {
        dispatch
      } = this.props;
      dispatch(action);
    });
  }

  render() {
    const {
      visible,
      form: {
        getFieldDecorator
      }
    } = this.props;
    const {
      submitting
    } = this.state;
    const formItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 16
      }
    };
    return UpdatePasswordDialog_jsx(modal_default.a, {
      title: "Change personal password",
      width: 450,
      visible: visible,
      maskClosable: false,
      confirmLoading: submitting,
      destroyOnClose: true,
      onOk: this.onOKClick,
      onCancel: this.handleCancel,
      style: {
        top: 20
      },
      bodyStyle: {
        maxHeight: 'calc( 100vh - 158px )',
        overflowY: 'auto'
      }
    }, UpdatePasswordDialog_jsx(compatible_["Form"], null, UpdatePasswordDialog_jsx(compatible_["Form"].Item, _extends({}, formItemLayout, {
      label: "Old Password"
    }), getFieldDecorator('old_password', {
      rules: [{
        required: true,
        message: 'Please enter the old password'
      }]
    })(UpdatePasswordDialog_jsx(input_default.a, {
      type: "password",
      placeholder: "Please enter the old password"
    }))), UpdatePasswordDialog_jsx(compatible_["Form"].Item, _extends({}, formItemLayout, {
      label: "New Password"
    }), getFieldDecorator('new_password', {
      rules: [{
        required: true,
        message: 'Please enter a new password'
      }]
    })(UpdatePasswordDialog_jsx(input_default.a, {
      type: "password",
      placeholder: "Please"
    }))), UpdatePasswordDialog_jsx(compatible_["Form"].Item, _extends({}, formItemLayout, {
      label: "Confirm the new password"
    }), getFieldDecorator('confirm_new_password', {
      rules: [{
        required: true,
        message: 'Please enter confirm new password'
      }]
    })(UpdatePasswordDialog_jsx(input_default.a, {
      type: "password",
      placeholder: "Please enter confirm new password"
    })))));
  }

}, _temp)) || _class);
/* harmony default export */ var components_UpdatePasswordDialog = (UpdatePasswordDialog_UpdatePasswordDialog);
// EXTERNAL MODULE: ./src/utils/context.js
var context = __webpack_require__("PrlS");

// EXTERNAL MODULE: ./src/layouts/AdminLayout.less
var layouts_AdminLayout = __webpack_require__("JU6p");

// EXTERNAL MODULE: ./src/config/constant.js
var constant = __webpack_require__("NYxa");

// CONCATENATED MODULE: ./src/layouts/AdminLayout.js











var AdminLayout_dec, AdminLayout_class, _descriptor, AdminLayout_temp;

var AdminLayout_jsx = external_react_default.a.createElement;

function AdminLayout_extends() { AdminLayout_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AdminLayout_extends.apply(this, arguments); }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function AdminLayout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

 // import { Icon as LegacyIcon } from '@ant-design/compatible';


 // import { connect } from 'dva';


 // import { useRouter } from 'next/router'
// eslint-disable-next-line import/no-extraneous-dependencies












const {
  Header,
  Sider,
  Content
} = layout_default.a;
const {
  SubMenu
} = menu_default.a;
const query = {
  'screen-xs': {
    maxWidth: 575
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199
  },
  'screen-xl': {
    minWidth: 1200
  }
};
let AdminLayout_AdminLayout = (AdminLayout_dec = debounce_default()(600), (AdminLayout_class = (AdminLayout_temp = class AdminLayout extends external_react_default.a.PureComponent {
  constructor(...args) {
    super(...args);

    AdminLayout_defineProperty(this, "state", {
      updatePwdVisible: false
    });

    AdminLayout_defineProperty(this, "dispatch", action => {
      const {
        dispatch
      } = this.props;
      dispatch(action);
    });

    AdminLayout_defineProperty(this, "onCollapse", () => {
      const {
        collapsed
      } = this.props;
      this.dispatch({
        type: 'global/changeLayoutCollapsed',
        payload: !collapsed
      });
    });

    AdminLayout_defineProperty(this, "onMenuClick", ({
      key
    }) => {
      if (key === 'logout') {
        this.dispatch({
          type: 'login/logout'
        });
      } else if (key === 'updatepwd') {
        this.setState({
          updatePwdVisible: true
        });
      }
    });

    AdminLayout_defineProperty(this, "onMenuOpenChange", openKeys => {
      // console.log("AdminLayout.onMenuOpenChange: Open menu ")
      const {
        menuMap
      } = this.props;

      if (openKeys.length > 1) {
        const lastKey = openKeys[openKeys.length - 1];
        const lastItem = menuMap[lastKey];

        if (!lastItem) {
          this.dispatch({
            type: 'global/changeOpenKeys',
            payload: []
          });
          return;
        }

        let isParent = false;

        for (let i = 0; i < openKeys.length - 1; i += 1) {
          const item = menuMap[openKeys[i]] || {};
          let path = item.id;

          if (item.parent_path !== '') {
            path = `${item.parent_path}/${path}`;
          }

          if (lastItem.parent_path === path) {
            isParent = true;
            break;
          }
        }

        if (!isParent) {
          // console.log("AdminLayout.onMenuOpenChange: not isParent => call global/changeOpenKeys ")
          this.dispatch({
            type: 'global/changeOpenKeys',
            payload: [lastKey]
          });
          return;
        }
      }

      this.dispatch({
        type: 'global/changeOpenKeys',
        payload: [...openKeys]
      });
    });

    AdminLayout_defineProperty(this, "onToggleClick", () => {
      const {
        collapsed
      } = this.props;
      this.dispatch({
        type: 'global/changeLayoutCollapsed',
        payload: !collapsed
      });
      this.onTriggerResizeEvent();
    });

    _initializerDefineProperty(this, "onTriggerResizeEvent", _descriptor, this);

    AdminLayout_defineProperty(this, "handleUpdatePwdCancel", () => {
      this.setState({
        updatePwdVisible: false
      });
    });
  }

  static async getInitialProps(props) {
    // first time run in server side
    // other times run in client side ( client side init with default props
    // console.log('get init props', props);
    const {
      pathname,
      query,
      isServer,
      store
    } = props; // dispatch effects to fetch data here

    return {
      // dont use store as property name, it will confilct with initial store
      pathname,
      query,
      isServer,
      dvaStore: store
    };
  }

  componentDidMount() {
    // console.log('componentDidMount: ', this.props);
    const {
      router: {
        pathname
      }
    } = this.props;
    this.dispatch({
      type: 'global/fetchUser'
    });
    this.dispatch({
      type: 'global/fetchMenuTree',
      pathname
    });
  }

  renderNavMenuItems(menusData) {
    if (!menusData) {
      return [];
    }

    return menusData.map(item => {
      if (!item.name || item.show_status !== 1) {
        return null;
      }

      if (item.children && item.children.some(child => child.name && child.show_status === 1)) {
        return AdminLayout_jsx(SubMenu, {
          title: item.icon ? AdminLayout_jsx("span", null, AdminLayout_jsx("span", null, item.name)) : item.name,
          key: item.id
        }, this.renderNavMenuItems(item.children));
      }

      const {
        router
      } = item; // const icon = item.icon && <LegacyIcon type={item.icon} />;
      // console.log("AdminLayout.renderNavMenuItems:  router = ", router);

      const {
        router: {
          pathname
        }
      } = this.props;
      return AdminLayout_jsx(menu_default.a.Item, {
        key: item.id
      }, router.startsWith('http') ? AdminLayout_jsx("a", {
        href: router,
        target: "_blank",
        rel: "noopener noreferrer"
      }, icon, AdminLayout_jsx("span", null, item.name)) : AdminLayout_jsx(link_default.a, {
        href: constant["a" /* startURL */] + router,
        replace: router === pathname
      }, AdminLayout_jsx("div", null, AdminLayout_jsx("span", null, item.name))));
    });
  }

  renderPageTitle() {
    const {
      router: {
        pathname
      },
      menuPaths,
      title
    } = this.props; // console.log('AdminLayout: => renderPageTitle: pathname', pathname);

    let ptitle = title;
    const item = menuPaths[pathname];

    if (item) {
      ptitle = `${item.name} - ${title}`;
    }

    return ptitle;
  }

  render() {
    const {
      children,
      user,
      collapsed,
      menus,
      copyRight,
      openKeys,
      title,
      selectedKeys,
      global
    } = this.props; // console.log("AdminLayout.render: menus = ", menus);

    const {
      updatePwdVisible
    } = this.state;

    const menu = AdminLayout_jsx(menu_default.a, {
      className: "menu",
      selectedKeys: [],
      onClick: this.onMenuClick
    }, AdminLayout_jsx(menu_default.a.Item, {
      key: "updatepwd"
    }, AdminLayout_jsx(icons_["LockOutlined"], null), "Change Password"), AdminLayout_jsx(menu_default.a.Divider, null), AdminLayout_jsx(menu_default.a.Item, {
      key: "logout"
    }, AdminLayout_jsx(icons_["LogoutOutlined"], null), "Sign Out")); // Don't show popup menu when it is been collapsed


    const menuProps = collapsed ? {} : {
      openKeys
    };
    const siderWidth = 256;
    const homePage = constant["a" /* startURL */];

    const layout = AdminLayout_jsx(layout_default.a, null, AdminLayout_jsx(Sider, {
      trigger: null,
      collapsible: true,
      collapsed: collapsed,
      breakpoint: "lg",
      onCollapse: this.onCollapse,
      width: siderWidth,
      className: "sider"
    }, AdminLayout_jsx("div", {
      className: "logo"
    }, AdminLayout_jsx(link_default.a, {
      href: homePage
    }, AdminLayout_jsx("div", null, AdminLayout_jsx("img", {
      src: logo_default.a,
      alt: "logo"
    }), AdminLayout_jsx("h1", null, title)))), AdminLayout_jsx(menu_default.a, AdminLayout_extends({
      theme: "dark",
      mode: "inline"
    }, menuProps, {
      onOpenChange: this.onMenuOpenChange,
      selectedKeys: selectedKeys,
      style: {
        margin: '16px 0',
        width: '100%'
      }
    }), this.renderNavMenuItems(menus))), AdminLayout_jsx(layout_default.a, null, AdminLayout_jsx(Header, {
      className: external_classnames_default()('header'),
      style: {
        paddingLeft: 12,
        paddingRight: 12
      }
    }, AdminLayout_jsx("div", {
      className: external_classnames_default()('foldout'),
      onClick: () => this.onCollapse()
    }, collapsed ? AdminLayout_jsx(icons_["MenuUnfoldOutlined"], null) : AdminLayout_jsx(icons_["MenuFoldOutlined"], null)), AdminLayout_jsx("div", {
      className: external_classnames_default()('right')
    }, user.user_name ? AdminLayout_jsx(dropdown_default.a, {
      overlay: menu
    }, AdminLayout_jsx("span", {
      className: external_classnames_default()(['action', 'account'])
    }, AdminLayout_jsx(avatar_default.a, {
      size: "small",
      className: external_classnames_default()('avatar'),
      icon: AdminLayout_jsx(icons_["UserOutlined"], null)
    }), // user.real_name !== ''
    // ? `${user.user_name}(${user.real_name})`
    // : user.user_name
    user.user_name)) : AdminLayout_jsx(spin_default.a, {
      size: "small",
      style: {
        marginLeft: 8
      }
    }))), AdminLayout_jsx(Content, {
      className: external_classnames_default()('content')
    }, AdminLayout_jsx("div", {
      style: {
        minHeight: 'calc(100vh - 150px)'
      }
    }, AdminLayout_jsx(context["a" /* default */].GlobalContext.Provider, {
      value: global
    }, children)), AdminLayout_jsx(components_GlobalFooter, {
      copyright: AdminLayout_jsx(CopyRight, {
        title: copyRight
      })
    }))), AdminLayout_jsx(components_UpdatePasswordDialog, {
      visible: updatePwdVisible,
      onCancel: this.handleUpdatePwdCancel
    }));

    return AdminLayout_jsx(external_react_document_title_default.a, {
      title: this.renderPageTitle()
    }, AdminLayout_jsx(external_react_container_query_["ContainerQuery"], {
      query: query
    }, params => AdminLayout_jsx("div", {
      className: external_classnames_default()(params)
    }, layout)));
  }

}, AdminLayout_temp), (_descriptor = _applyDecoratedDescriptor(AdminLayout_class.prototype, "onTriggerResizeEvent", [AdminLayout_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return () => {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('resize', true, false);
      window.dispatchEvent(event);
    };
  }
})), AdminLayout_class)); // export default AdminLayout;

/* harmony default export */ var src_layouts_AdminLayout = (Object(store["a" /* default */])(state => ({
  title: state.global.title,
  copyRight: state.global.copyRight,
  collapsed: state.global.collapsed,
  openKeys: state.global.openKeys,
  selectedKeys: state.global.selectedKeys,
  user: state.global.user,
  menuPaths: state.global.menuPaths,
  menuMap: state.global.menuMap,
  menus: state.global.menus,
  global: state.global
}))(Object(router_["withRouter"])(AdminLayout_AdminLayout)));
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__("rlPI");
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);

// EXTERNAL MODULE: ./src/pages/styles.css
var styles = __webpack_require__("gqNJ");

// CONCATENATED MODULE: ./src/pages/_app.js
var _app_jsx = external_react_default.a.createElement;

function _app_extends() { _app_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _app_extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 //Check development environment or production to change baseUrl
// const baseUrl = '/admin'

const enableRedirect = false;
function redirectUser(ctx, location) {
  if (ctx.req) {
    console.log('app.redirectUser: redirectUser from server: ', location);
    ctx.res.writeHead(302, {
      Location: constant["a" /* startURL */] + location
    });
    ctx.res.end();
  } else {
    console.log('app.redirectUser: redirectUser from client');
    router_default.a.push(constant["a" /* startURL */] + location);
  }
}

class _app_MyApp extends app_default.a {
  constructor(...args) {
    super(...args);

    _app_defineProperty(this, "checkLogin", ctx => {
      const {
        req
      } = ctx;
      const isServer = !!req;
      const isBrowser = !req;
      console.log('app.getInitialProps: Query pathname: ', ctx.pathname);

      if (isServer) {
        console.log('app.getInitialProps:  From server');

        if (req == undefined) {
          console.log('app.getInitialProps: req is undefined ', ctx);
        }

        if (req && req.headers) {
          const cookies = req.headers.cookie;

          if (typeof cookies === 'string') {
            console.log('app.getInitialProps: cookies = ', cookies);
            const cookiesJSON = external_cookie_default.a.parse(cookies);
            console.log('app.getInitialProps: cookiesJSON = ', cookiesJSON);
            initProps.token = cookiesJSON.token;
          } else if (cookies == undefined) {
            console.log('app.getInitialProps: No find cookies');
          } else {
            console.log('app.getInitialProps: cookies is not string ');
          }
        } else {
          console.log('app.getInitialProps: req.headers: ', req);
        } // Redirect route


        if (initProps.token === undefined) {
          console.log('app.getInitialProps: initProps.token  not found  => redirect to login if not /login');

          if (!ctx.pathname.startsWith('/login') || !ctx.pathname.startsWith('/test')) {
            console.log(' app.getInitialProps: Redirect to signin from ', ctx.pathname);
            redirectUser(ctx, '/login');
          } else {
            console.log(' app.getInitialProps: Current ', ctx.pathname, ' keep pathname. ');
          }
        } else {
          console.log('app.getInitialProps: initProps.token  = ', initProps.token);

          if (ctx.pathname == '/login') {
            redirectUser(ctx, '/dashboard');
          }
        }
      } else {
        console.log('app.getInitialProps: In client');
      }
    });
  }

  static async getInitialProps({
    Component,
    ctx
  }) {
    let initProps = {};

    if (enableRedirect) {
      checkLogin(ctx);
    } //Init component


    if (Component.getInitialProps) {
      initProps = await Component.getInitialProps(ctx);
    }

    console.log('app.getInitialProps: Loggin to ', ctx.pathname);
    return _objectSpread({}, initProps);
  }

  render() {
    const _this$props = this.props,
          {
      Component,
      pageProps,
      router
    } = _this$props,
          arg = _objectWithoutProperties(_this$props, ["Component", "pageProps", "router"]);

    if (router.pathname.startsWith('/user')) {
      return _app_jsx(src_layouts_UserLayout, null, _app_jsx(Component, _app_extends({}, pageProps, arg)));
    }

    if (router.pathname.startsWith('/login') || router.pathname.startsWith('/404')) {
      return _app_jsx(Component, _app_extends({}, pageProps, arg));
    }

    return _app_jsx(src_layouts_AdminLayout, null, _app_jsx(Component, pageProps));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_MyApp);

/***/ }),

/***/ "JU6p":
/***/ (function(module, exports) {



/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "NYxa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startURL; });
const isPro = true;
const startURL = isPro ? '/admin' : '';

/***/ }),

/***/ "Na7r":
/***/ (function(module, exports) {

module.exports = require("md5");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PFYH":
/***/ (function(module, exports) {



/***/ }),

/***/ "Pa8B":
/***/ (function(module, exports) {

module.exports = require("react-container-query");

/***/ }),

/***/ "PrlS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // 创建全局上下文

const GlobalContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
/* harmony default export */ __webpack_exports__["a"] = ({
  GlobalContext
});

/***/ }),

/***/ "QMzh":
/***/ (function(module, exports) {

module.exports = require("global/document");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "SEfv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return queryTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return enable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return disable; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("t3Un");

const router = 'menus';
async function query(params = {}) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/${router}`, {
    params
  });
}
async function queryTree(params = {}) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/${router}.tree`, {
    params
  });
}
async function get(id, params = {}) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/${router}/${id}`, {
    params
  });
}
async function create(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/${router}`, {
    method: _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* methods */ "d"].POST,
    data
  });
}
async function update(id, data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/${router}/${id}`, {
    method: _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* methods */ "d"].PUT,
    data
  });
}
async function del(id, params = {}) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/${router}/${id}`, {
    method: _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* methods */ "d"].DELETE,
    params
  });
}
async function enable(id, params = {}) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/${router}/${id}/enable`, {
    method: _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* methods */ "d"].PATCH,
    params
  });
}
async function disable(id, params = {}) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/${router}/${id}/disable`, {
    method: _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* methods */ "d"].PATCH,
    params
  });
}

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "VzA1":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "W93S":
/***/ (function(module, exports) {



/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "a5Fm":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "abI1":
/***/ (function(module, exports) {

module.exports = require("@ant-design/compatible");

/***/ }),

/***/ "anxO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return captchaID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return captcha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return login; });
/* unused harmony export logout */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return updatePwd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return queryMenuTree; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("t3Un");
 // 验证码ID

async function captchaID() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/pub/login/captchaid`);
} // 图形验证码

function captcha(id) {
  return `${_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* baseURL */ "a"]}/v1/pub/login/captcha?id=${id}`;
}
async function login(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/pub/login`, {
    method: _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* methods */ "d"].POST,
    data,
    hideNotify: true
  });
}
async function logout() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/pub/login/exit`, {
    method: _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* methods */ "d"].POST
  });
}
async function updatePwd(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/pub/current/password`, {
    method: _utils_request__WEBPACK_IMPORTED_MODULE_0__[/* methods */ "d"].PUT,
    data
  });
}
async function getCurrentUser() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/pub/current/user`);
}
async function queryMenuTree() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"])(`/v1/pub/current/menutree`);
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cUip":
/***/ (function(module, exports) {



/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eW3l":
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, addBasePath(addLocale(resolvedAs, this.locale)), routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (options.scroll ? {
        x: 0,
        y: 0
      } : null)).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fwXI":
/***/ (function(module, exports) {



/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "gqNJ":
/***/ (function(module, exports) {



/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "kJSe":
/***/ (function(module, exports) {

module.exports = require("dva");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "mxmt":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQ0NTM4MjE2MzIxIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY0NDUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AZm9udC1mYWNlIHsgZm9udC13ZWlnaHQ6IDQwMDsgZm9udC1zdHlsZTogbm9ybWFsOyBmb250LWZhbWlseTogSW50ZXItTG9vbTsgc3JjOiB1cmwoImh0dHBzOi8vY2RuLnVzZWxvb20uY29tL2Fzc2V0cy9mb250cy9pbnRlci9JbnRlci1VSS1SZWd1bGFyLndvZmYyIikgZm9ybWF0KCJ3b2ZmMiIpOyB9DQpAZm9udC1mYWNlIHsgZm9udC13ZWlnaHQ6IDQwMDsgZm9udC1zdHlsZTogaXRhbGljOyBmb250LWZhbWlseTogSW50ZXItTG9vbTsgc3JjOiB1cmwoImh0dHBzOi8vY2RuLnVzZWxvb20uY29tL2Fzc2V0cy9mb250cy9pbnRlci9JbnRlci1VSS1JdGFsaWMud29mZjIiKSBmb3JtYXQoIndvZmYyIik7IH0NCkBmb250LWZhY2UgeyBmb250LXdlaWdodDogNTAwOyBmb250LXN0eWxlOiBub3JtYWw7IGZvbnQtZmFtaWx5OiBJbnRlci1Mb29tOyBzcmM6IHVybCgiaHR0cHM6Ly9jZG4udXNlbG9vbS5jb20vYXNzZXRzL2ZvbnRzL2ludGVyL0ludGVyLVVJLU1lZGl1bS53b2ZmMiIpIGZvcm1hdCgid29mZjIiKTsgfQ0KQGZvbnQtZmFjZSB7IGZvbnQtd2VpZ2h0OiA1MDA7IGZvbnQtc3R5bGU6IGl0YWxpYzsgZm9udC1mYW1pbHk6IEludGVyLUxvb207IHNyYzogdXJsKCJodHRwczovL2Nkbi51c2Vsb29tLmNvbS9hc3NldHMvZm9udHMvaW50ZXIvSW50ZXItVUktTWVkaXVtSXRhbGljLndvZmYyIikgZm9ybWF0KCJ3b2ZmMiIpOyB9DQpAZm9udC1mYWNlIHsgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1zdHlsZTogbm9ybWFsOyBmb250LWZhbWlseTogSW50ZXItTG9vbTsgc3JjOiB1cmwoImh0dHBzOi8vY2RuLnVzZWxvb20uY29tL2Fzc2V0cy9mb250cy9pbnRlci9JbnRlci1VSS1Cb2xkLndvZmYyIikgZm9ybWF0KCJ3b2ZmMiIpOyB9DQpAZm9udC1mYWNlIHsgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1zdHlsZTogaXRhbGljOyBmb250LWZhbWlseTogSW50ZXItTG9vbTsgc3JjOiB1cmwoImh0dHBzOi8vY2RuLnVzZWxvb20uY29tL2Fzc2V0cy9mb250cy9pbnRlci9JbnRlci1VSS1Cb2xkSXRhbGljLndvZmYyIikgZm9ybWF0KCJ3b2ZmMiIpOyB9DQpAZm9udC1mYWNlIHsgZm9udC13ZWlnaHQ6IDkwMDsgZm9udC1zdHlsZTogbm9ybWFsOyBmb250LWZhbWlseTogSW50ZXItTG9vbTsgc3JjOiB1cmwoImh0dHBzOi8vY2RuLnVzZWxvb20uY29tL2Fzc2V0cy9mb250cy9pbnRlci9JbnRlci1VSS1CbGFjay53b2ZmMiIpIGZvcm1hdCgid29mZjIiKTsgfQ0KQGZvbnQtZmFjZSB7IGZvbnQtd2VpZ2h0OiA5MDA7IGZvbnQtc3R5bGU6IGl0YWxpYzsgZm9udC1mYW1pbHk6IEludGVyLUxvb207IHNyYzogdXJsKCJodHRwczovL2Nkbi51c2Vsb29tLmNvbS9hc3NldHMvZm9udHMvaW50ZXIvSW50ZXItVUktQmxhY2tJdGFsaWMud29mZjIiKSBmb3JtYXQoIndvZmYyIik7IH0NCjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01MTIgNjRDMjY0LjU3NiA2NCA2NCAyNjQuNTc3IDY0IDUxMnMyMDAuNTc2IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNTc2IDQ0OC00NDhTNzU5LjQyNCA2NCA1MTIgNjR6TTUxMiA4OTZjLTIxMi4wNzggMC0zODQtMTcxLjkyMy0zODQtMzg0IDAtMjEyLjA3NyAxNzEuOTIyLTM4NCAzODQtMzg0IDIxMi4wNzcgMCAzODQgMTcxLjkyMyAzODQgMzg0Qzg5NiA3MjQuMDc3IDcyNC4wNzcgODk2IDUxMiA4OTZ6IiBwLWlkPSI2NDQ2IiBmaWxsPSIjMUI3M0ZCIj48L3BhdGg+PHBhdGggZD0iTTcwMy4wMDEgNzE3IDU5Mi4wMTMgNTY4LjQxMmwxLjE2NC0wLjEyNEM2NTcuNDc5IDU0Ny41MzkgNzA0IDQ4Ny4yMDcgNzA0IDQxNmMwLTg4LjM2Ni03MS42MzQtMTYwLTE2MC0xNjBMNDE2IDI1NmMtMTcuNjczIDAtMzIgMTQuMzI3LTMyIDMybDAgNDQ4YzAgMTcuNjczIDE0LjMyNyAzMiAzMiAzMnMzMi0xNC4zMjcgMzItMzJMNDQ4IDU3Nmw2OC44ODkgMCAxMzQuOTEyIDE3OS4zOTljMTAuNjA0IDE0LjEzOSAzMC42NjEgMTcuMDA0IDQ0Ljc5OSA2LjRDNzEwLjczOSA3NTEuMTk2IDcxMy42MDQgNzMxLjEzOCA3MDMuMDAxIDcxN3pNNDQ4IDUxMiA0NDggMzIwbDk2IDBjNTMuMDIgMCA5NiA0Mi45OCA5NiA5NnMtNDIuOTggOTYtOTYgOTZMNDQ4IDUxMnoiIHAtaWQ9IjY0NDciIGZpbGw9IiMxQjczRkIiPjwvcGF0aD48L3N2Zz4="

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nT0F":
/***/ (function(module, exports) {



/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "oI3S":
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ }),

/***/ "oyVS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return storeKeys; });
/* unused harmony export storeType */
const storeKeys = {
  AccessToken: 'Access-Token'
};
var localStorage;
var sessionStorage;

if (false) {}

const storeType = {
  localStorage,
  sessionStorage
};
const defaultStorage = storeType.localStorage;

function set(key, value, ...options) {
  const storage = options.storeType || defaultStorage;
  storage.setItem(key, JSON.stringify(value));
}

function get(key, ...options) {
  const storage = options.storeType || defaultStorage; // console.log(storage)

  const value = storage.getItem(key);
  return value ? JSON.parse(value) : null;
}

function remove(key, ...options) {
  const storage = options.storeType || defaultStorage;
  storage.removeItem(key);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  set,
  get,
  remove
});

/***/ }),

/***/ "pjuD":
/***/ (function(module, exports) {



/***/ }),

/***/ "ppZR":
/***/ (function(module, exports) {



/***/ }),

/***/ "rlPI":
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "t3Un":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseURL; });
/* unused harmony export contentType */
/* unused harmony export headerKeys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return methods; });
/* unused harmony export getAccessToken */
/* unused harmony export wrapURLWithToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setToken; });
/* harmony import */ var antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pjuD");
/* harmony import */ var antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Gss8");
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("eW3l");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("NYxa");
/* harmony import */ var _persistent_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("oyVS");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








let refreshTimeout;
let lastAccessTime;
const baseURL = '/api';
const contentType = {
  form: 'application/x-www-form-urlencoded',
  json: 'application/json'
};
const headerKeys = {
  ContentType: 'Content-Type',
  Authorization: 'Authorization'
};
const methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
  HEAD: 'HEAD',
  OPTIONS: 'OPTIONS'
}; // Get access token

function getAccessToken() {
  const token = _persistent_store__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].get(_persistent_store__WEBPACK_IMPORTED_MODULE_8__[/* storeKeys */ "b"].AccessToken);

  if (!token) {
    return '';
  }

  return token.access_token;
  return '';
} // Wrap the URL with the token

function wrapURLWithToken(url) {
  const ss = url.split('?');
  const query = Object(qs__WEBPACK_IMPORTED_MODULE_5__["parse"])(ss[1]);
  query.accessToken = getAccessToken();
  return `${ss[0]}?${Object(qs__WEBPACK_IMPORTED_MODULE_5__["stringify"])(query)}`;
} // 登出

function logout() {
  console.log('Logout event');

  if (refreshTimeout) {
    clearTimeout(refreshTimeout);
  } //binhnt: Remove cookie


  js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.remove('token'); //Remove AccessToken

  _persistent_store__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].remove(_persistent_store__WEBPACK_IMPORTED_MODULE_8__[/* storeKeys */ "b"].AccessToken);
  const {
    redirect
  } = Object(qs__WEBPACK_IMPORTED_MODULE_5__["parse"])(window.location.href.split('?')[1]);

  if (window.location.pathname !== _config_constant__WEBPACK_IMPORTED_MODULE_7__[/* startURL */ "a"] + '/login' && !redirect) {
    window.location = _config_constant__WEBPACK_IMPORTED_MODULE_7__[/* startURL */ "a"] + '/login'; // window.history.replace({
    //   pathname: '/user/login',
    //   search: stringify({
    //     redirect: window.location.href,
    //   }),
    // });
  }
} // request 拦截器

function requestInterceptors(c) {
  const config = _objectSpread({}, c);

  const token = _persistent_store__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].get(_persistent_store__WEBPACK_IMPORTED_MODULE_8__[/* storeKeys */ "b"].AccessToken);

  if (token) {
    // console.log(
    //   'binhnt.requestInterceptors: Token = ',
    //   token.access_token,
    //   headerKeys.Authorization
    // );
    config.headers[headerKeys.Authorization] = `${token.token_type} ${token.access_token}`;
  }

  return config;
} // ajax请求


function request(url, options = {}) {
  // console.log('AccessToken: ', storeKeys.AccessToken);
  const oldToken = _persistent_store__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].get(_persistent_store__WEBPACK_IMPORTED_MODULE_8__[/* storeKeys */ "b"].AccessToken); // console.log("oldToken: ", oldToken);

  if (oldToken && oldToken.expires_at - lastAccessTime <= 0) {
    if (refreshTimeout) {
      clearTimeout(refreshTimeout);
    }

    logout(); // eslint-disable-next-line compat/compat

    return Promise.reject(new Error('The token has expired'));
  }

  lastAccessTime = moment__WEBPACK_IMPORTED_MODULE_3___default()().unix();

  const opts = _objectSpread({}, options);

  let showNotify = true;

  if (opts.hideNotify) {
    showNotify = false;
    delete opts.hideNotify;
  }

  const config = _objectSpread({
    method: methods.GET,
    baseURL,
    headers: {},
    transformRequest: (data, headers) => {
      switch (headers[headerKeys.ContentType]) {
        case contentType.json:
          return JSON.stringify(data);

        case contentType.form:
          return Object(qs__WEBPACK_IMPORTED_MODULE_5__["stringify"])(data);

        default:
          return data;
      }
    },
    paramsSerializer: params => {
      return Object(qs__WEBPACK_IMPORTED_MODULE_5__["stringify"])(params);
    },
    timeout: 60000
  }, opts);

  if (!(config.headers && config.headers[headerKeys.ContentType]) && [methods.POST, methods.PUT, methods.PATCH].indexOf(config.method) > -1) {
    config.headers[headerKeys.ContentType] = contentType.json;
  }

  const instance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create(config);
  instance.interceptors.request.use(requestInterceptors);
  return instance.request({
    url
  }).then(res => {
    const {
      data
    } = res; // console.log('request.request: Data: ', data, 'url', url);

    return data;
  }).catch(error => {
    const {
      response
    } = error;
    const {
      status,
      data
    } = response;

    if (status === 401 && data.error && data.error.code === 9999) {
      logout();
      return response;
    }

    if (showNotify) {
      let msg = 'Request error';

      if (status === 504) {
        msg = 'Not connected to server';
      } else if (data && data.error) {
        msg = data.error.message;
      }

      antd_lib_notification__WEBPACK_IMPORTED_MODULE_1___default.a.error({
        message: `${config.baseURL}${url}`,
        description: msg
      });
    }

    return response;
  });
} // Put in the access token

function setToken(token) {
  //binhnt: 1. Add cookies to access nextjs
  js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('token', token.access_token); //binhnt: 2. Add Token to access Backend

  lastAccessTime = token.expires_at;
  _persistent_store__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].set(_persistent_store__WEBPACK_IMPORTED_MODULE_8__[/* storeKeys */ "b"].AccessToken, token);

  if (refreshTimeout) {
    clearTimeout(refreshTimeout);
  } // Renew the token 10 minutes in advance


  const timeout = token.expires_at - moment__WEBPACK_IMPORTED_MODULE_3___default()().unix() - 10;

  if (timeout > 0) {
    refreshTimeout = setTimeout(() => {
      const oldToken = _persistent_store__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].get(_persistent_store__WEBPACK_IMPORTED_MODULE_8__[/* storeKeys */ "b"].AccessToken);

      if (oldToken && oldToken.expires_at - lastAccessTime <= 0) {
        if (refreshTimeout) {
          clearTimeout(refreshTimeout);
        }

        return;
      }

      request('/v1/pub/refresh-token', {
        method: methods.POST
      }).then(res => {
        setToken(res);
      });
    }, timeout * 1000);
  }
}

/***/ }),

/***/ "tL+A":
/***/ (function(module, exports) {



/***/ }),

/***/ "tiT0":
/***/ (function(module, exports) {

module.exports = require("react-document-title");

/***/ }),

/***/ "uPL1":
/***/ (function(module, exports) {

module.exports = require("dva-loading");

/***/ }),

/***/ "vEvA":
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "wNoj":
/***/ (function(module, exports) {



/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xKsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "xg6E":
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });