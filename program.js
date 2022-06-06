(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["qcloud_shell"] = factory();
	else
		root["qcloud_shell"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/presentation/all/impls/treeview.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/presentation/all/impls/treeview.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".qcloud-tree-root{\n    height: 100%;\n    overflow: hidden;\n    user-select: none;\n}\n.qcloud-tree-items-root{\n    overflow-x: hidden;\n    height: calc(100% - 23px);\n}\n\n  .qcloud-tree-items-root::-webkit-scrollbar {\n    width: 12px;               /* width of the entire scrollbar */\n  }\n  .qcloud-tree-items-root::-webkit-scrollbar-track {\n    background: transparent;        /* color of the tracking area */\n  }\n  .qcloud-tree-items-root::-webkit-scrollbar-thumb {\n    background-color: blue;    /* color of the scroll thumb */\n    border-radius: 20px;       /* roundness of the scroll thumb */\n    border: 2px solid orange;  /* creates padding around scroll thumb */\n  }\n\n.qcloud-tree-row-container{\n    border: 1px solid transparent;\n    cursor: pointer;\n}\n.qcloud-tree-row-container:hover{\n    background-color: #D5D5D5;\n}\n\n.qcloud-tree-row-container.selected{\n    background-color: #094771;\n    border-color: #007FD4;\n    color:white\n}\n.qcloud-tree-row{\n    position: relative;\n}\n.qcloud-tree-content{\n    font-family: Segoe WPC,Segoe UI,sans-serif;\n    font-size: 14px;\n}\n.qcloud-tree-header-text{\n    min-width: 10px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n.qcloud-tree-indent{\n    display: flex;\n    position: absolute;\n    margin-left: 2px;\n}\n.qcloud-tree-indent-guide{\n    width: 5px;\n    border-left: 1px dotted green;\n    height: 19px;\n}\n.qcloud-tree-actions{\n    display: flex;\n    font-size: 10px;\n}\n.qcloud-tree-action{\n    padding: 0px 2px;\n}\n.qcloud-tree-action:hover{\n    background-color: #50505a;\n}\n.qcloud-tree-action:active{\n    background-color: blue;\n}\n.qcloud-tree-dropdown-item {\n    display: block;\n    width: 100%;\n    padding: .25rem 1rem;\n    clear: both;\n    font-weight: 400;\n    color: #fff;\n    text-align: inherit;\n    text-decoration: none;\n    white-space: nowrap;\n    background-color: transparent;\n    border: 0;\n}\n.qcloud-tree-dropdown-menu {\n    position: absolute;\n    inset: 0px auto auto 0px;\n    margin: 0px;\n    background-color: #2F3160;\n    padding: .5rem 0;\n}", "",{"version":3,"sources":["webpack://./src/presentation/all/impls/treeview.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;;EAEE;IACE,WAAW,gBAAgB,kCAAkC;EAC/D;EACA;IACE,uBAAuB,SAAS,+BAA+B;EACjE;EACA;IACE,sBAAsB,KAAK,8BAA8B;IACzD,mBAAmB,QAAQ,kCAAkC;IAC7D,wBAAwB,GAAG,wCAAwC;EACrE;;AAEF;IACI,6BAA6B;IAC7B,eAAe;AACnB;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;IACrB;AACJ;AACA;IACI,kBAAkB;AACtB;AACA;IACI,0CAA0C;IAC1C,eAAe;AACnB;AACA;IACI,eAAe;IACf,uBAAuB;IACvB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,UAAU;IACV,6BAA6B;IAC7B,YAAY;AAChB;AACA;IACI,aAAa;IACb,eAAe;AACnB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,cAAc;IACd,WAAW;IACX,oBAAoB;IACpB,WAAW;IACX,gBAAgB;IAChB,WAAW;IACX,mBAAmB;IACnB,qBAAqB;IACrB,mBAAmB;IACnB,6BAA6B;IAC7B,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,wBAAwB;IACxB,WAAW;IACX,yBAAyB;IACzB,gBAAgB;AACpB","sourcesContent":[".qcloud-tree-root{\n    height: 100%;\n    overflow: hidden;\n    user-select: none;\n}\n.qcloud-tree-items-root{\n    overflow-x: hidden;\n    height: calc(100% - 23px);\n}\n\n  .qcloud-tree-items-root::-webkit-scrollbar {\n    width: 12px;               /* width of the entire scrollbar */\n  }\n  .qcloud-tree-items-root::-webkit-scrollbar-track {\n    background: transparent;        /* color of the tracking area */\n  }\n  .qcloud-tree-items-root::-webkit-scrollbar-thumb {\n    background-color: blue;    /* color of the scroll thumb */\n    border-radius: 20px;       /* roundness of the scroll thumb */\n    border: 2px solid orange;  /* creates padding around scroll thumb */\n  }\n\n.qcloud-tree-row-container{\n    border: 1px solid transparent;\n    cursor: pointer;\n}\n.qcloud-tree-row-container:hover{\n    background-color: #D5D5D5;\n}\n\n.qcloud-tree-row-container.selected{\n    background-color: #094771;\n    border-color: #007FD4;\n    color:white\n}\n.qcloud-tree-row{\n    position: relative;\n}\n.qcloud-tree-content{\n    font-family: Segoe WPC,Segoe UI,sans-serif;\n    font-size: 14px;\n}\n.qcloud-tree-header-text{\n    min-width: 10px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n.qcloud-tree-indent{\n    display: flex;\n    position: absolute;\n    margin-left: 2px;\n}\n.qcloud-tree-indent-guide{\n    width: 5px;\n    border-left: 1px dotted green;\n    height: 19px;\n}\n.qcloud-tree-actions{\n    display: flex;\n    font-size: 10px;\n}\n.qcloud-tree-action{\n    padding: 0px 2px;\n}\n.qcloud-tree-action:hover{\n    background-color: #50505a;\n}\n.qcloud-tree-action:active{\n    background-color: blue;\n}\n.qcloud-tree-dropdown-item {\n    display: block;\n    width: 100%;\n    padding: .25rem 1rem;\n    clear: both;\n    font-weight: 400;\n    color: #fff;\n    text-align: inherit;\n    text-decoration: none;\n    white-space: nowrap;\n    background-color: transparent;\n    border: 0;\n}\n.qcloud-tree-dropdown-menu {\n    position: absolute;\n    inset: 0px auto auto 0px;\n    margin: 0px;\n    background-color: #2F3160;\n    padding: .5rem 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/@stechquick/plateau-comm/dist/PlateauMessaging.js":
/*!************************************************************************!*\
  !*** ./node_modules/@stechquick/plateau-comm/dist/PlateauMessaging.js ***!
  \************************************************************************/
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_547__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_547__);
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
/******/ 	__nested_webpack_require_547__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_547__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_547__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_547__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_547__.r = function(exports) {
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
/******/ 	__nested_webpack_require_547__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_547__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_547__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_547__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_547__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_547__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_547__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_547__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_547__(__nested_webpack_require_547__.s = "./src/PlateauMessaging.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../common/shrimp/helpers/arrayHelper.ts":
/*!**************************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/arrayHelper.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayHelper = void 0;
var ArrayHelper = /** @class */ (function () {
    function ArrayHelper() {
    }
    ArrayHelper.findAndRet = function (array, predicate) {
        var len = array.length;
        for (var i = 0; i < len; i++) {
            var retVal = predicate(array[i], i, array);
            if (retVal !== undefined) {
                return retVal;
            }
        }
        return undefined;
    };
    ArrayHelper.InitArray = function (size) {
        var arr = [];
        for (var i = 0; i < size; i++) {
            arr.push(i);
        }
        return arr;
    };
    ArrayHelper.InitEmptyArray = function (size) {
        return Array.from(new Array(size));
    };
    /**
     * Fast way to find last object in a given array
     * @param array to be search in
     * @param key to be last searched  object key
     */
    ArrayHelper.lastIndexOf = function (array, key, value) {
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i][key] === (value ? value : key))
                return i;
        }
        return -1;
    };
    ;
    /**
     * Change object of index
     * First index can move to the end of the array
     * Last index can move to first index
     * @param array Array to be moved
     * @param oldIndex Old index of object
     * @param newIndex New index of object
     */
    ArrayHelper.arrayMove = function (array, oldIndex, newIndex) {
        if (newIndex < 0) {
            array.splice(array.length - 1, 0, array.splice(oldIndex, 1)[0]);
        }
        else if (newIndex == array.length) {
            array.splice(0, 0, array.splice(oldIndex, 1)[0]);
        }
        else {
            array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
        }
    };
    ;
    return ArrayHelper;
}());
exports.ArrayHelper = ArrayHelper;


/***/ }),

/***/ "../../common/shrimp/helpers/bulkManager.ts":
/*!**************************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/bulkManager.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkManager = void 0;
var BulkManager = /** @class */ (function () {
    function BulkManager() {
    }
    /**
     * Vomit the bulk messages into callback function of the shell
     * @param message Log message that to be added
     */
    BulkManager.prototype.writeMessage = function (message) {
        var _a;
        (_a = this.logHandler) === null || _a === void 0 ? void 0 : _a.call(this, message);
    };
    return BulkManager;
}());
exports.BulkManager = BulkManager;


/***/ }),

/***/ "../../common/shrimp/helpers/catcher.ts":
/*!**********************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/catcher.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_7594__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.catcher = void 0;
var logger_1 = __nested_webpack_require_7594__(/*! ./logger */ "../../common/shrimp/helpers/logger.ts");
var catcher = /** @class */ (function () {
    function catcher() {
    }
    catcher.tryLog = function (_a) {
        var cb = _a.cb, catchLog = _a.catchLog;
        try {
            cb();
        }
        catch (error) {
            var logMessage = catchLog ? catchLog(error) : "tryLog error happened";
            new logger_1.Logger().Log({ logMessage: logMessage, error: error, logType: logger_1.LogType.Error });
        }
    };
    return catcher;
}());
exports.catcher = catcher;


/***/ }),

/***/ "../../common/shrimp/helpers/cryptoHelper.ts":
/*!***************************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/cryptoHelper.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoHelper = void 0;
var CryptoHelper = /** @class */ (function () {
    function CryptoHelper() {
    }
    /**
     *
     * @param base number layout (number of distinct digits) (10'luk sayı düzeni, 16'lık sayı düzeni)
     * @param length length of word. Max value: 16
     */
    CryptoHelper.GetRandomWord = function (base, length) {
        return Math.random().toString(base).substring(2, length + 2);
    };
    /**
     * Ex: be945482-jf10-40d1-a50d-rzxa2c41fdcu
     */
    CryptoHelper.CreateGuid = function () {
        var _this = this;
        return [8, 4, 4, 4, 6].map(function (length) { return _this.GetRandomWord(36, length); }).join("-") + ((++CryptoHelper.guidCounter) % 2150000000).toString(36);
    };
    CryptoHelper.guidCounter = 0;
    return CryptoHelper;
}());
exports.CryptoHelper = CryptoHelper;


/***/ }),

/***/ "../../common/shrimp/helpers/eventBus.ts":
/*!***********************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/eventBus.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_9975__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBus = void 0;
var hook_1 = __nested_webpack_require_9975__(/*! ./hook */ "../../common/shrimp/helpers/hook.ts");
var EventBus = /** @class */ (function () {
    function EventBus() {
        this.subsDict = {};
    }
    EventBus.prototype.obtainSubsList = function (eventName) {
        return this.subsDict[eventName] || (this.subsDict[eventName] = new hook_1.Hook("EventBus_" + eventName));
    };
    EventBus.prototype.Subscribe = function (eventName, cb) {
        if (eventName == EventBus.AllEvents) {
            throw new Error(eventName + " is a registered key. If you want to subscribe all events, use SubsribeAll().");
        }
        this.obtainSubsList(eventName).subscribe(cb);
    };
    EventBus.prototype.Unsubscribe = function (eventName, cb) {
        var _a;
        if (eventName == EventBus.AllEvents) {
            throw new Error(eventName + " is a registered key. If you want to subscribe all events, use SubsribeAll().");
        }
        (_a = this.subsDict[eventName]) === null || _a === void 0 ? void 0 : _a.unsubscribe(cb);
    };
    EventBus.prototype.SubscribeAll = function (cb) {
        this.obtainSubsList(EventBus.AllEvents).subscribe(cb);
    };
    EventBus.prototype.UnsubscribeAll = function (cb) {
        var _a;
        (_a = this.subsDict[EventBus.AllEvents]) === null || _a === void 0 ? void 0 : _a.unsubscribe(cb);
    };
    EventBus.prototype.Trigger = function (eventName) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var allEventsHook = this.subsDict[EventBus.AllEvents];
        allEventsHook === null || allEventsHook === void 0 ? void 0 : allEventsHook.triggerer.apply(allEventsHook, params);
        if (eventName == EventBus.AllEvents) {
            return;
        }
        var hook = this.subsDict[eventName];
        hook === null || hook === void 0 ? void 0 : hook.triggerer.apply(hook, params);
    };
    EventBus.prototype.TriggerJustAllSubs = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var allEventsHook = this.subsDict[EventBus.AllEvents];
        allEventsHook === null || allEventsHook === void 0 ? void 0 : allEventsHook.triggerer.apply(allEventsHook, params);
    };
    EventBus.AllEvents = "AllEvents";
    return EventBus;
}());
exports.EventBus = EventBus;


/***/ }),

/***/ "../../common/shrimp/helpers/frameCommunicator.ts":
/*!********************************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/frameCommunicator.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_12917__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameCommunicator = void 0;
var structuredSocket_1 = __nested_webpack_require_12917__(/*! ./webSocket/structuredSocket */ "../../common/shrimp/helpers/webSocket/structuredSocket.ts");
var WindowSocket = /** @class */ (function () {
    function WindowSocket(targetWindow) {
        var _this = this;
        this.OnMessageWithDirectObject = true;
        this.targetWindow = targetWindow;
        window.addEventListener("message", function (ev) {
            var _a;
            if (ev.source != targetWindow) {
                return;
            }
            (_a = _this.OnMessage) === null || _a === void 0 ? void 0 : _a.call(_this, ev.data);
        });
    }
    WindowSocket.prototype.Send = function (packet) {
        this.targetWindow.postMessage(packet, "*");
    };
    return WindowSocket;
}());
var FrameCommunicator = /** @class */ (function () {
    function FrameCommunicator(targetWindow) {
        this.windowSocket = new WindowSocket(targetWindow);
        this.structuredSocket = new structuredSocket_1.StructuredSocket(this.windowSocket);
    }
    FrameCommunicator.prototype.Send = function (target, messageType, message, options) {
        var structuredSocket = this.structuredSocket;
        return structuredSocket.Send(message, options);
    };
    FrameCommunicator.prototype.Subscribe = function (target, messageType, cb) {
        var structuredSocket = this.structuredSocket;
        structuredSocket.Subscribe(messageType, cb);
    };
    FrameCommunicator.prototype.SubscribeAll = function (cb) {
        this.structuredSocket.SubscribeAll(function (data) { return cb(data); });
    };
    FrameCommunicator.prototype.UnsubscribeAll = function (cb) {
        this.structuredSocket.UnsubscribeAll(function (data) { return cb(data); });
    };
    return FrameCommunicator;
}());
exports.FrameCommunicator = FrameCommunicator;


/***/ }),

/***/ "../../common/shrimp/helpers/hook.ts":
/*!*******************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/hook.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_15215__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Hook = void 0;
var catcher_1 = __nested_webpack_require_15215__(/*! ./catcher */ "../../common/shrimp/helpers/catcher.ts");
var stringHelper_1 = __nested_webpack_require_15215__(/*! ./stringHelper */ "../../common/shrimp/helpers/stringHelper.ts");
var Hook = /** @class */ (function () {
    function Hook(hookName, options) {
        if (options === void 0) { options = {}; }
        this.subscribers = [];
        this.hookStateListeners = [];
        this.hookName = hookName;
        this.triggerPostSubscribersWithCb = options.triggerPostSubscribersWithCb || false;
        options.manageState = options.manageState || false;
        this.hookState = { triggered: false, triggerArgs: [], active: options.manageState };
    }
    Object.defineProperty(Hook.prototype, "TriggerPostSubscribersWithCb", {
        get: function () {
            return this.triggerPostSubscribersWithCb;
        },
        set: function (v) {
            this.triggerPostSubscribersWithCb = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hook.prototype, "subscriberCount", {
        get: function () {
            return this.subscribers.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hook.prototype, "hasSubscribers", {
        get: function () {
            return this.subscriberCount > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hook.prototype, "hasPostSubscribers", {
        get: function () {
            var _a, _b;
            return (((_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.hasPostSubscribers) || ((_b = this.postSubscribers) === null || _b === void 0 ? void 0 : _b.hasSubscribers)) === true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hook.prototype, "triggerer", {
        get: function () {
            return this.trigger;
        },
        enumerable: false,
        configurable: true
    });
    Hook.prototype.trigger = function () {
        var _this = this;
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.hookState.active) {
            this.hookState.triggered = true;
            this.hookState.triggerArgs = args;
        }
        this.subscribers.forEach(function (sub) { return _this.tryTriggerSubscriber(sub, args); });
        if (!this.triggerPostSubscribersWithCb)
            (_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.triggerer.apply(this.postSubscribers, args);
    };
    Hook.prototype.tryTriggerSubscriber = function (sub, args) {
        var _this = this;
        catcher_1.catcher.tryLog({ cb: function () { return sub.apply(null, args); }, catchLog: function () { return _this.getHookName() + " subscriber failed"; } });
    };
    Hook.prototype.getHookName = function () {
        var retVal = this.hookName;
        if (!stringHelper_1.StringHelper.endsWith(retVal.toLowerCase(), "hook")) {
            retVal += " hook";
        }
        return retVal;
    };
    Hook.prototype.ResetAndStartState = function () {
        this.hookState.triggerArgs = [];
        this.hookState.active = true;
        this.hookState.triggered = false;
        this.hookStateListeners.forEach(function (cb) { return cb.apply(null); });
    };
    Hook.prototype.DisableState = function () {
        this.hookState.triggerArgs = [];
        this.hookState.active = false;
        this.hookState.triggered = false;
    };
    Hook.prototype.IsTriggered = function () {
        if (!this.hookState.active) {
            throw new Error("IsTriggered can not be checked on a non manageState Hook: " + this.hookName);
        }
        return this.hookState.triggered;
    };
    Hook.prototype.triggerPostSubscribers = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.triggerer.apply(this.postSubscribers, args);
    };
    //#region subscribers
    Hook.prototype.subscribe = function (cb) {
        this.subscribers.push(cb);
        this.hookState.active && this.hookState.triggered && this.tryTriggerSubscriber(cb, this.hookState.triggerArgs);
    };
    Hook.prototype.unsubscribe = function (cb) {
        this.subscribers = this.subscribers.filter(function (sub) { return sub != cb; }); // splice is fastest but this is safest, because of immutability, because of forEach traversals
    };
    Hook.prototype.clearSubscribers = function () {
        this.subscribers = [];
    };
    //#endregion
    //#region postSubscribers
    Hook.prototype.postSubscribe = function (cb) {
        if (!this.postSubscribers) {
            this.postSubscribers = new Hook(this.hookName + "_Post", { manageState: this.hookState.active });
            this.postSubscribers.hookState = this.hookState;
        }
        this.postSubscribers.subscribe(cb);
    };
    Hook.prototype.postUnsubscribe = function (cb) {
        var _a;
        (_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.unsubscribe(cb);
    };
    Hook.prototype.clearPostSubscribers = function (forced) {
        var _a;
        if (forced === void 0) { forced = false; }
        (_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.clearSubscribers();
        if (forced || !this.hasPostSubscribers) {
            this.postSubscribers = undefined;
        }
    };
    //#endregion
    Hook.prototype.listenHookState = function (cb) {
        this.hookStateListeners.push(cb);
    };
    Hook.prototype.forceClearAllSubscibers = function () {
        this.clearPostSubscribers(true);
        this.clearSubscribers();
    };
    return Hook;
}());
exports.Hook = Hook;


/***/ }),

/***/ "../../common/shrimp/helpers/logger.ts":
/*!*********************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/logger.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_21597__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.LogType = void 0;
var bulkManager_1 = __nested_webpack_require_21597__(/*! ./bulkManager */ "../../common/shrimp/helpers/bulkManager.ts");
var windowHelper_1 = __nested_webpack_require_21597__(/*! ./windowHelper */ "../../common/shrimp/helpers/windowHelper.ts");
var ILogger_1 = __nested_webpack_require_21597__(/*! ../interfaces/ComponentInterfaces/ILogger */ "../../common/shrimp/interfaces/ComponentInterfaces/ILogger.ts");
Object.defineProperty(exports, "LogType", { enumerable: true, get: function () { return ILogger_1.LogType; } });
var Singularizer = /** @class */ (function () {
    function Singularizer() {
    }
    Singularizer.trySingularize = function (name, instance) {
        if (!this.singularized(name)) {
            windowHelper_1.WindowHelper.Instance.Window[name] = instance;
            return true;
        }
        return false;
    };
    Singularizer.singularized = function (name) {
        return windowHelper_1.WindowHelper.Instance.Window[name];
    };
    Singularizer.getFreeName = function (name) {
        var win = windowHelper_1.WindowHelper.Instance.Window;
        var counter = 0;
        while (win[name + "_" + ++counter])
            ;
        return name + "_" + counter;
    };
    return Singularizer;
}());
var Logger = /** @class */ (function () {
    function Logger() {
        // i know this functions are static but in rallyshell we have shrimp not quick_shrimp.
        // and the first caller of the functions are throws 'not implemented exception' because of lazy load.
        return { Log: this.Log };
    }
    Object.defineProperty(Logger, "LogBulkManager", {
        get: function () {
            if (!Logger.logBulkManager) {
                Logger.logBulkManager = Singularizer.singularized(Logger.windowName);
            }
            return Logger.logBulkManager;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Whenever the shell initiates its callback, this handling also will be initiated as well
     * ? Static may change? Will see
     * @param timer Seconds of writing down the messages
     * @param callBack Function that handles the messages, comes from shell.
     */
    Logger.Init = function (_a) {
        var callBack = _a.callBack, clear = _a.clear;
        this.logBulkManager = new bulkManager_1.BulkManager();
        this.logBulkManager.logHandler = callBack;
        Singularizer.trySingularize(this.windowName, this.logBulkManager);
    };
    /**
     * Console log function
     * @param logMessage Message that to be written to the console
     * @param logType console type(Debug, Trace, Warning, Error)
     * @param backgroundColor message background color
     * @param color message text color
     * @param additional additional info for logging
     * @param yamlLogType
     * @returns void
     */
    Logger.Log = function (_a) {
        var logMessage = _a.logMessage, _b = _a.logType, logType = _b === void 0 ? ILogger_1.LogType.Trace : _b, error = _a.error, _c = _a.backgroundColor, backgroundColor = _c === void 0 ? null : _c, _d = _a.textColor, textColor = _d === void 0 ? null : _d, _e = _a.additional, additional = _e === void 0 ? null : _e, _f = _a.writeToConsole, writeToConsole = _f === void 0 ? true : _f, source = _a.source, _g = _a.writeToClient, writeToClient = _g === void 0 ? false : _g, yamlLogType = _a.yamlLogType;
        var colorOptions = backgroundColor || textColor ? "background: " + backgroundColor + "; color: " + textColor : null;
        var targetLog;
        switch (true) {
            case logType == ILogger_1.LogType.MobilDebug && this.logLevel.indexOf(ILogger_1.LogType.MobilDebug) > -1:
                targetLog = console.log;
                break;
            case (logType == ILogger_1.LogType.Debug && this.logLevel.indexOf(ILogger_1.LogType.Debug) > -1):
            case (logType == ILogger_1.LogType.Trace && this.logLevel.indexOf(ILogger_1.LogType.Trace) > -1):
                targetLog = console.log;
                break;
            case (logType == ILogger_1.LogType.Error && this.logLevel.indexOf(ILogger_1.LogType.Error) > -1):
                targetLog = console.error;
                break;
            case (logType == ILogger_1.LogType.Warning && this.logLevel.indexOf(ILogger_1.LogType.Warning) > -1):
                targetLog = console.warn;
                break;
            case true:
                break;
        }
        var params = [logMessage];
        if (colorOptions && typeof logMessage === "string") {
            params[0] = '%c' + logMessage;
            params.push(colorOptions);
        }
        if (error) {
            params.push(error);
        }
        if (additional) {
            params.push(additional);
        }
        if (writeToConsole) {
            if (source) { // MUST BE LAST!!!! (used in mobile sim. -> editor logging)
                params.push({ source: source });
            }
            targetLog === null || targetLog === void 0 ? void 0 : targetLog.apply(console, params);
        }
        if (writeToClient && yamlLogType == logType) {
            this.prepareClientLog(logMessage, logType);
        }
    };
    /**
     * Log messages are controlled by their size and add them to the bulk array with type, date and caller function name
     * @param logMessage Message that will be written to the server
     * @param logType Type of log message
     */
    Logger.prepareClientLog = function (logMessage, logType) {
        var _a;
        var currentDateFormat = new Date(Date.now());
        var clientDate = currentDateFormat.getFullYear() + "." + ("0" + (currentDateFormat.getMonth() + 1)).slice(-2) + "." + ("0" + currentDateFormat.getDate()).slice(-2) + " " +
            currentDateFormat.getHours() + ':' + ("0" + currentDateFormat.getMinutes()).slice(-2) + ':' + ("0" + currentDateFormat.getSeconds()).slice(-2) + ':' + currentDateFormat.getMilliseconds();
        ;
        var message;
        var whoCallMe = this.getCalleFunctionName();
        if (typeof logMessage !== "string" && logType > 0) {
            try {
                message = this.shorten(JSON.stringify(logMessage), logType);
            }
            catch (error) {
                message = "Can not stringfy the given log. Type of log data is: " + Object.prototype.toString.call(logMessage);
            }
        }
        else {
            message = this.shorten(logMessage, logType);
        }
        (_a = Logger.LogBulkManager) === null || _a === void 0 ? void 0 : _a.writeMessage({ message: message, type: ILogger_1.LogType[logType], time: clientDate, caller: whoCallMe });
    };
    /**
     * Can't call Log.calle.caller beacuse of the TypeScript classes are on "strict mode"
     * JS doesn't allow to arguments.callee.caller on strict mode
     * So just throw an simple Error and get the latest function name
     * returns String
     */
    Logger.getCalleFunctionName = function () {
        // try {
        //     throw new Error();
        // }
        // catch (e) {
        //     try {
        //         return e.stack.split('at ')[4].split(' ')[0];
        //     } catch (e) {
        //         return '';
        //     }
        // }
        return '';
    };
    /**
     * Clears the bulk of messages
     */
    Logger.clearLogs = function () {
        var _a, _b;
        (_b = (_a = Logger.LogBulkManager) === null || _a === void 0 ? void 0 : _a.clear) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    /**
     * Trim the message with size of the log type
     * @param logMessage log message
     * @param logType Log type that will be controlled
     */
    Logger.shorten = function (logMessage, logType) {
        if (logType > logMessage.length) {
            return logMessage;
        }
        else {
            return "Non trimmed message size is: " + logMessage.length;
        }
    };
    ;
    /**
     * @deprecated do not use. Use Logger.Log(...)
     */
    Logger.prototype.Log = function (options) {
        return Logger.Log(options);
    };
    Logger.windowName = Singularizer.getFreeName("shrimp_shelldorynemo_pulsar_lbm");
    Logger.logLevel = [ILogger_1.LogType.MobilDebug, ILogger_1.LogType.Trace, ILogger_1.LogType.Debug, ILogger_1.LogType.Warning, ILogger_1.LogType.Error];
    return Logger;
}());
exports.Logger = Logger;


/***/ }),

/***/ "../../common/shrimp/helpers/stringHelper.ts":
/*!***************************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/stringHelper.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_30404__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StringHelper = void 0;
var arrayHelper_1 = __nested_webpack_require_30404__(/*! ./arrayHelper */ "../../common/shrimp/helpers/arrayHelper.ts");
var StringHelper = /** @class */ (function () {
    function StringHelper() {
    }
    /** Function that count occurrences of a substring in a string;
     * @author Vitim.us https://gist.github.com/victornpb/7736865
     * @see http://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string/7924240#7924240
     */
    StringHelper.OccurenceCount = function (value, searchString, allowOverlapping) {
        value += "";
        searchString += "";
        if (searchString.length <= 0)
            return (value.length + 1);
        var n = 0, pos = 0, step = allowOverlapping ? 1 : searchString.length;
        while (true) {
            pos = value.indexOf(searchString, pos);
            if (pos >= 0) {
                ++n;
                pos += step;
            }
            else
                break;
        }
        return n;
    };
    StringHelper.RepeatString = function (value, repeatCount) {
        return arrayHelper_1.ArrayHelper.InitEmptyArray(repeatCount + 1).join(value);
    };
    StringHelper.TrimStart = function (str, removeString) {
        if (!str || !removeString) {
            return str;
        }
        while (true) {
            var index = str.indexOf(removeString);
            if (index != 0) {
                return str;
            }
            str = str.substring(removeString.length);
        }
    };
    StringHelper.endsWith = function (self, search, this_len) {
        if (this_len === undefined || this_len > self.length) {
            this_len = self.length;
        }
        return self.substring(this_len - search.length, this_len) === search;
    };
    /**
     * Returns a random string
     * @param length Length of generated random string
     */
    StringHelper.randomStringGenerator = function (length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    StringHelper.capitalizeString = function (input) {
        ///<summary>Capitialize first letter of a string</summary>
        return input.charAt(0).toUpperCase() + input.slice(1);
    };
    ;
    /**
     * Change char in string
     * @param str String that to be changed
     * @param index Index of string
     * @param chr Char
     */
    StringHelper.setCharAt = function (str, index, chr) {
        if (index < 0) {
            return str;
        }
        if (index > str.length) {
            index = str.length - 1;
        }
        return str.substr(0, index) + chr + str.substr(index + 1);
    };
    return StringHelper;
}());
exports.StringHelper = StringHelper;


/***/ }),

/***/ "../../common/shrimp/helpers/webSocket/structuredSocket.ts":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/webSocket/structuredSocket.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_33891__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StructuredSocket = void 0;
var IPromiseData_1 = __nested_webpack_require_33891__(/*! ../../interfaces/IPromiseData */ "../../common/shrimp/interfaces/IPromiseData.ts");
var cryptoHelper_1 = __nested_webpack_require_33891__(/*! ../cryptoHelper */ "../../common/shrimp/helpers/cryptoHelper.ts");
var eventBus_1 = __nested_webpack_require_33891__(/*! ../eventBus */ "../../common/shrimp/helpers/eventBus.ts");
var StructuredSocket = /** @class */ (function () {
    function StructuredSocket(socket) {
        this.socket = socket;
        this.awaitMsgList = {};
        this.eventBus = new eventBus_1.EventBus();
        socket.OnMessage = this.listen.bind(this);
    }
    StructuredSocket.prototype.CreatePackage = function (msg, options) {
        var packet = { msg: msg, id: cryptoHelper_1.CryptoHelper.CreateGuid(), replyId: options.replyId };
        return packet;
    };
    StructuredSocket.prototype.Send = function (msg, options) {
        var packet = this.CreatePackage(msg, options);
        this.socket.Send(packet);
        var promData;
        if (options.awaitResponse) {
            promData = (0, IPromiseData_1.CreatePromiseData)(options.awaitTime);
            this.awaitMsgList[packet.id] = { promData: promData };
        }
        return promData === null || promData === void 0 ? void 0 : promData.promise;
    };
    StructuredSocket.prototype.Subscribe = function (key, cb) {
        this.eventBus.Subscribe(key, cb);
    };
    StructuredSocket.prototype.Unsubscribe = function (key, cb) {
        this.eventBus.Unsubscribe(key, cb);
    };
    StructuredSocket.prototype.SubscribeAll = function (cb) {
        this.eventBus.SubscribeAll(cb);
    };
    StructuredSocket.prototype.UnsubscribeAll = function (cb) {
        this.eventBus.UnsubscribeAll(cb);
    };
    StructuredSocket.prototype.ConvertBufferToStructure = function (data) {
        var packet = (this.socket.OnMessageWithDirectObject ? data : JSON.parse(data.toString()));
        if (!packet.msg || !packet.msg.type) {
            return undefined;
        }
        return packet;
    };
    StructuredSocket.prototype.listen = function (data) {
        var packet;
        try {
            packet = this.ConvertBufferToStructure(data);
        }
        catch (ex) { }
        if (!packet) {
            console.log("unexpected message format");
            return undefined;
        }
        if (packet.replyId) {
            var awaiter = this.awaitMsgList[packet.replyId];
            if (awaiter) {
                delete this.awaitMsgList[packet.replyId];
                awaiter.promData.resolver(packet);
            }
            this.eventBus.TriggerJustAllSubs(packet);
            return;
        }
        this.eventBus.Trigger(packet.msg.type, packet);
    };
    return StructuredSocket;
}());
exports.StructuredSocket = StructuredSocket;


/***/ }),

/***/ "../../common/shrimp/helpers/windowHelper.ts":
/*!***************************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/helpers/windowHelper.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_37187__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowHelper = void 0;
var logger_1 = __nested_webpack_require_37187__(/*! ./logger */ "../../common/shrimp/helpers/logger.ts");
var undefinedType = "undefined";
var WindowHelper = /** @class */ (function () {
    function WindowHelper() {
        this.doc = typeof (document) !== undefinedType ? document : {
            addEventListener: function (type, listener, options) {
                //might simulate this in future...
                new logger_1.Logger().Log({ logMessage: "Enviroment does not support document. Triggering document.addEventListener now, type is: " + type, logType: logger_1.LogType.Warning });
                listener({ target: { readyState: this.readyState } });
            },
            createElement: function (tagName, options) {
                return { tagName: tagName, options: options };
            },
            readyState: "complete"
        };
        this.hist = typeof (history) !== undefinedType ? history : {
            pushState: function (data, title, url) {
                //might log data and url with additional data in logging
                new logger_1.Logger().Log({ logMessage: "history.pushState not supported on Node. title: " + title, logType: logger_1.LogType.Debug });
            }
        };
        this.win = typeof (window) !== undefinedType ? window : {
            setInterval: setInterval,
            clearInterval: clearInterval,
            setTimeout: setTimeout,
            clearTimeout: clearTimeout
        };
    }
    Object.defineProperty(WindowHelper.prototype, "onPopState", {
        set: function (value) {
            if (typeof (window) !== undefinedType) {
                window.onpopstate = value;
            }
            else {
                new logger_1.Logger().Log({ logMessage: "onPopState not supported on Node.", logType: logger_1.LogType.Debug });
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowHelper.prototype, "document", {
        get: function () {
            return this.doc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowHelper.prototype, "history", {
        get: function () {
            return this.hist;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WindowHelper.prototype, "Window", {
        get: function () {
            return this.win;
        },
        enumerable: false,
        configurable: true
    });
    WindowHelper.Instance = new WindowHelper();
    return WindowHelper;
}());
exports.WindowHelper = WindowHelper;


/***/ }),

/***/ "../../common/shrimp/interfaces/ComponentInterfaces/ILogger.ts":
/*!*********************************************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/interfaces/ComponentInterfaces/ILogger.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LogType = void 0;
var LogType;
(function (LogType) {
    LogType[LogType["Debug"] = 0] = "Debug";
    LogType[LogType["MobilDebug"] = 1000] = "MobilDebug";
    LogType[LogType["Trace"] = 200000] = "Trace";
    LogType[LogType["Warning"] = 500000] = "Warning";
    LogType[LogType["Error"] = 1000000] = "Error"; // 500Kb
})(LogType = exports.LogType || (exports.LogType = {}));


/***/ }),

/***/ "../../common/shrimp/interfaces/IPromiseData.ts":
/*!******************************************************************************!*\
  !*** /home/runner/work/quick/quick/common/shrimp/interfaces/IPromiseData.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseAllSettled = exports.CreatePromiseData = void 0;
var syncResolved = false;
new Promise(function (res) { return res(); }).then(function () { return syncResolved = true; });
typeof (doNothing) != "undefined" && doNothing();
var syncResolveProblem = syncResolved === true; // platform has sync resolve problem or not
/**
 * @param timeout timeout time in ms, undefined if infinite
 */
function CreatePromiseData(timeout, opt) {
    if (opt === void 0) { opt = {}; }
    var syncResolveFixer = function (cb) { return syncResolveProblem && opt.fixSyncResolve ? function (value) { return setTimeout(function () { return cb(value); }); } : cb; };
    var resolver = undefined, reject = undefined;
    var timer;
    var startTimer = function (timeout) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () { reject(new Error("The operation has timed out. timeoutValue  : " + timeout)); }, timeout);
    };
    if (timeout) {
        startTimer(timeout);
    }
    return {
        startTimer: startTimer,
        promise: new Promise(function (res, rej) { resolver = syncResolveFixer(res); reject = rej; }),
        resolver: resolver,
        reject: reject
    };
}
exports.CreatePromiseData = CreatePromiseData;
function PromiseAllSettled(proms) {
    var _this = this;
    var retProm = CreatePromiseData();
    var left = proms.length;
    proms.forEach(function (prom) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, , 2, 3]);
                    return [4 /*yield*/, prom];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    if (--left <= 0) {
                        retProm.resolver(prom);
                    }
                    return [7 /*endfinally*/];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    return retProm.promise;
}
exports.PromiseAllSettled = PromiseAllSettled;


/***/ }),

/***/ "./src/PlateauMessaging.ts":
/*!*********************************!*\
  !*** ./src/PlateauMessaging.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_46168__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PlateauMessaging = exports.FrameCommunicator = void 0;
var frameCommunicator_1 = __nested_webpack_require_46168__(/*! ../../../common/shrimp/helpers/frameCommunicator */ "../../common/shrimp/helpers/frameCommunicator.ts");
Object.defineProperty(exports, "FrameCommunicator", { enumerable: true, get: function () { return frameCommunicator_1.FrameCommunicator; } });
var PlateauMessaging = /** @class */ (function () {
    function PlateauMessaging() {
    }
    PlateauMessaging.CreatePlateauMessaging = function (targetWindow) {
        var mes = new frameCommunicator_1.FrameCommunicator(targetWindow);
        return mes;
    };
    return PlateauMessaging;
}());
exports.PlateauMessaging = PlateauMessaging;


/***/ })

/******/ });
});


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var Cancel = __webpack_require__(/*! ../cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || defaults.transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
axios.VERSION = (__webpack_require__(/*! ./env/data */ "./node_modules/axios/lib/env/data.js").version);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var validator = __webpack_require__(/*! ../helpers/validator */ "./node_modules/axios/lib/helpers/validator.js");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  if (!config.url) {
    throw new Error('Provided config url is not valid');
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  if (!config.url) {
    throw new Error('Provided config url is not valid');
  }
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var Cancel = __webpack_require__(/*! ../cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");
var enhanceError = __webpack_require__(/*! ./core/enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = {
  "version": "0.25.0"
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var VERSION = (__webpack_require__(/*! ../env/data */ "./node_modules/axios/lib/env/data.js").version);

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return toString.call(val) === '[object FormData]';
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return toString.call(val) === '[object URLSearchParams]';
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/reflect-metadata/Reflect.js":
/*!**************************************************!*\
  !*** ./node_modules/reflect-metadata/Reflect.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof __webpack_require__.g === "object" ? __webpack_require__.g :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/decorators/auto-injectable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/decorators/auto-injectable.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _reflection_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reflection-helpers */ "./node_modules/tsyringe/dist/esm5/reflection-helpers.js");
/* harmony import */ var _dependency_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dependency-container */ "./node_modules/tsyringe/dist/esm5/dependency-container.js");
/* harmony import */ var _providers_injection_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/injection-token */ "./node_modules/tsyringe/dist/esm5/providers/injection-token.js");
/* harmony import */ var _error_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error-helpers */ "./node_modules/tsyringe/dist/esm5/error-helpers.js");





function autoInjectable() {
    return function (target) {
        var paramInfo = (0,_reflection_helpers__WEBPACK_IMPORTED_MODULE_0__.getParamInfo)(target);
        return (function (_super) {
            (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spread)(args.concat(paramInfo.slice(args.length).map(function (type, index) {
                    var _a, _b, _c;
                    try {
                        if ((0,_providers_injection_token__WEBPACK_IMPORTED_MODULE_2__.isTokenDescriptor)(type)) {
                            if ((0,_providers_injection_token__WEBPACK_IMPORTED_MODULE_2__.isTransformDescriptor)(type)) {
                                return type.multiple
                                    ? (_a = _dependency_container__WEBPACK_IMPORTED_MODULE_1__.instance.resolve(type.transform)).transform.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spread)([_dependency_container__WEBPACK_IMPORTED_MODULE_1__.instance.resolveAll(type.token)], type.transformArgs)) : (_b = _dependency_container__WEBPACK_IMPORTED_MODULE_1__.instance.resolve(type.transform)).transform.apply(_b, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spread)([_dependency_container__WEBPACK_IMPORTED_MODULE_1__.instance.resolve(type.token)], type.transformArgs));
                            }
                            else {
                                return type.multiple
                                    ? _dependency_container__WEBPACK_IMPORTED_MODULE_1__.instance.resolveAll(type.token)
                                    : _dependency_container__WEBPACK_IMPORTED_MODULE_1__.instance.resolve(type.token);
                            }
                        }
                        else if ((0,_providers_injection_token__WEBPACK_IMPORTED_MODULE_2__.isTransformDescriptor)(type)) {
                            return (_c = _dependency_container__WEBPACK_IMPORTED_MODULE_1__.instance.resolve(type.transform)).transform.apply(_c, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spread)([_dependency_container__WEBPACK_IMPORTED_MODULE_1__.instance.resolve(type.token)], type.transformArgs));
                        }
                        return _dependency_container__WEBPACK_IMPORTED_MODULE_1__.instance.resolve(type);
                    }
                    catch (e) {
                        var argIndex = index + args.length;
                        throw new Error((0,_error_helpers__WEBPACK_IMPORTED_MODULE_3__.formatErrorCtor)(target, argIndex, e));
                    }
                })))) || this;
            }
            return class_1;
        }(target));
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (autoInjectable);


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/decorators/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/decorators/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "autoInjectable": () => (/* reexport safe */ _auto_injectable__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "inject": () => (/* reexport safe */ _inject__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "injectAll": () => (/* reexport safe */ _inject_all__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "injectAllWithTransform": () => (/* reexport safe */ _inject_all_with_transform__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "injectWithTransform": () => (/* reexport safe */ _inject_with_transform__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "injectable": () => (/* reexport safe */ _injectable__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "registry": () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "scoped": () => (/* reexport safe */ _scoped__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "singleton": () => (/* reexport safe */ _singleton__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _auto_injectable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auto-injectable */ "./node_modules/tsyringe/dist/esm5/decorators/auto-injectable.js");
/* harmony import */ var _inject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inject */ "./node_modules/tsyringe/dist/esm5/decorators/inject.js");
/* harmony import */ var _injectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./injectable */ "./node_modules/tsyringe/dist/esm5/decorators/injectable.js");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registry */ "./node_modules/tsyringe/dist/esm5/decorators/registry.js");
/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./singleton */ "./node_modules/tsyringe/dist/esm5/decorators/singleton.js");
/* harmony import */ var _inject_all__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inject-all */ "./node_modules/tsyringe/dist/esm5/decorators/inject-all.js");
/* harmony import */ var _inject_all_with_transform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inject-all-with-transform */ "./node_modules/tsyringe/dist/esm5/decorators/inject-all-with-transform.js");
/* harmony import */ var _inject_with_transform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inject-with-transform */ "./node_modules/tsyringe/dist/esm5/decorators/inject-with-transform.js");
/* harmony import */ var _scoped__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scoped */ "./node_modules/tsyringe/dist/esm5/decorators/scoped.js");











/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/decorators/inject-all-with-transform.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/decorators/inject-all-with-transform.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reflection_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reflection-helpers */ "./node_modules/tsyringe/dist/esm5/reflection-helpers.js");

function injectAllWithTransform(token, transformer) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var data = {
        token: token,
        multiple: true,
        transform: transformer,
        transformArgs: args
    };
    return (0,_reflection_helpers__WEBPACK_IMPORTED_MODULE_0__.defineInjectionTokenMetadata)(data);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (injectAllWithTransform);


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/decorators/inject-all.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/decorators/inject-all.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reflection_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reflection-helpers */ "./node_modules/tsyringe/dist/esm5/reflection-helpers.js");

function injectAll(token) {
    var data = { token: token, multiple: true };
    return (0,_reflection_helpers__WEBPACK_IMPORTED_MODULE_0__.defineInjectionTokenMetadata)(data);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (injectAll);


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/decorators/inject-with-transform.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/decorators/inject-with-transform.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reflection_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reflection-helpers */ "./node_modules/tsyringe/dist/esm5/reflection-helpers.js");

function injectWithTransform(token, transformer) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return (0,_reflection_helpers__WEBPACK_IMPORTED_MODULE_0__.defineInjectionTokenMetadata)(token, {
        transformToken: transformer,
        args: args
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (injectWithTransform);


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/decorators/inject.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/decorators/inject.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reflection_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reflection-helpers */ "./node_modules/tsyringe/dist/esm5/reflection-helpers.js");

function inject(token) {
    return (0,_reflection_helpers__WEBPACK_IMPORTED_MODULE_0__.defineInjectionTokenMetadata)(token);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inject);


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/decorators/injectable.js":
/*!******************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/decorators/injectable.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reflection_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reflection-helpers */ "./node_modules/tsyringe/dist/esm5/reflection-helpers.js");
/* harmony import */ var _dependency_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dependency-container */ "./node_modules/tsyringe/dist/esm5/dependency-container.js");


function injectable() {
    return function (target) {
        _dependency_container__WEBPACK_IMPORTED_MODULE_1__.typeInfo.set(target, (0,_reflection_helpers__WEBPACK_IMPORTED_MODULE_0__.getParamInfo)(target));
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (injectable);


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/decorators/registry.js":
/*!****************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/decorators/registry.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dependency_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dependency-container */ "./node_modules/tsyringe/dist/esm5/dependency-container.js");


function registry(registrations) {
    if (registrations === void 0) { registrations = []; }
    return function (target) {
        registrations.forEach(function (_a) {
            var token = _a.token, options = _a.options, provider = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["token", "options"]);
            return _dependency_container__WEBPACK_IMPORTED_MODULE_0__.instance.register(token, provider, options);
        });
        return target;
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registry);


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/decorators/scoped.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/decorators/scoped.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scoped)
/* harmony export */ });
/* harmony import */ var _injectable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./injectable */ "./node_modules/tsyringe/dist/esm5/decorators/injectable.js");
/* harmony import */ var _dependency_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dependency-container */ "./node_modules/tsyringe/dist/esm5/dependency-container.js");


function scoped(lifecycle, token) {
    return function (target) {
        (0,_injectable__WEBPACK_IMPORTED_MODULE_0__["default"])()(target);
        _dependency_container__WEBPACK_IMPORTED_MODULE_1__.instance.register(token || target, target, {
            lifecycle: lifecycle
        });
    };
}


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/decorators/singleton.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/decorators/singleton.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _injectable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./injectable */ "./node_modules/tsyringe/dist/esm5/decorators/injectable.js");
/* harmony import */ var _dependency_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dependency-container */ "./node_modules/tsyringe/dist/esm5/dependency-container.js");


function singleton() {
    return function (target) {
        (0,_injectable__WEBPACK_IMPORTED_MODULE_0__["default"])()(target);
        _dependency_container__WEBPACK_IMPORTED_MODULE_1__.instance.registerSingleton(target);
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (singleton);


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/dependency-container.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/dependency-container.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "instance": () => (/* binding */ instance),
/* harmony export */   "typeInfo": () => (/* binding */ typeInfo)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers */ "./node_modules/tsyringe/dist/esm5/providers/index.js");
/* harmony import */ var _providers_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./providers/provider */ "./node_modules/tsyringe/dist/esm5/providers/provider.js");
/* harmony import */ var _providers_injection_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers/injection-token */ "./node_modules/tsyringe/dist/esm5/providers/injection-token.js");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registry */ "./node_modules/tsyringe/dist/esm5/registry.js");
/* harmony import */ var _types_lifecycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/lifecycle */ "./node_modules/tsyringe/dist/esm5/types/lifecycle.js");
/* harmony import */ var _resolution_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolution-context */ "./node_modules/tsyringe/dist/esm5/resolution-context.js");
/* harmony import */ var _error_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-helpers */ "./node_modules/tsyringe/dist/esm5/error-helpers.js");
/* harmony import */ var _lazy_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lazy-helpers */ "./node_modules/tsyringe/dist/esm5/lazy-helpers.js");
/* harmony import */ var _types_disposable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types/disposable */ "./node_modules/tsyringe/dist/esm5/types/disposable.js");
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptors */ "./node_modules/tsyringe/dist/esm5/interceptors.js");











var typeInfo = new Map();
var InternalDependencyContainer = (function () {
    function InternalDependencyContainer(parent) {
        this.parent = parent;
        this._registry = new _registry__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.interceptors = new _interceptors__WEBPACK_IMPORTED_MODULE_9__["default"]();
        this.disposed = false;
        this.disposables = new Set();
    }
    InternalDependencyContainer.prototype.register = function (token, providerOrConstructor, options) {
        if (options === void 0) { options = { lifecycle: _types_lifecycle__WEBPACK_IMPORTED_MODULE_4__["default"].Transient }; }
        this.ensureNotDisposed();
        var provider;
        if (!(0,_providers_provider__WEBPACK_IMPORTED_MODULE_1__.isProvider)(providerOrConstructor)) {
            provider = { useClass: providerOrConstructor };
        }
        else {
            provider = providerOrConstructor;
        }
        if ((0,_providers__WEBPACK_IMPORTED_MODULE_0__.isTokenProvider)(provider)) {
            var path = [token];
            var tokenProvider = provider;
            while (tokenProvider != null) {
                var currentToken = tokenProvider.useToken;
                if (path.includes(currentToken)) {
                    throw new Error("Token registration cycle detected! " + (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__spread)(path, [currentToken]).join(" -> "));
                }
                path.push(currentToken);
                var registration = this._registry.get(currentToken);
                if (registration && (0,_providers__WEBPACK_IMPORTED_MODULE_0__.isTokenProvider)(registration.provider)) {
                    tokenProvider = registration.provider;
                }
                else {
                    tokenProvider = null;
                }
            }
        }
        if (options.lifecycle === _types_lifecycle__WEBPACK_IMPORTED_MODULE_4__["default"].Singleton ||
            options.lifecycle == _types_lifecycle__WEBPACK_IMPORTED_MODULE_4__["default"].ContainerScoped ||
            options.lifecycle == _types_lifecycle__WEBPACK_IMPORTED_MODULE_4__["default"].ResolutionScoped) {
            if ((0,_providers__WEBPACK_IMPORTED_MODULE_0__.isValueProvider)(provider) || (0,_providers__WEBPACK_IMPORTED_MODULE_0__.isFactoryProvider)(provider)) {
                throw new Error("Cannot use lifecycle \"" + _types_lifecycle__WEBPACK_IMPORTED_MODULE_4__["default"][options.lifecycle] + "\" with ValueProviders or FactoryProviders");
            }
        }
        this._registry.set(token, { provider: provider, options: options });
        return this;
    };
    InternalDependencyContainer.prototype.registerType = function (from, to) {
        this.ensureNotDisposed();
        if ((0,_providers__WEBPACK_IMPORTED_MODULE_0__.isNormalToken)(to)) {
            return this.register(from, {
                useToken: to
            });
        }
        return this.register(from, {
            useClass: to
        });
    };
    InternalDependencyContainer.prototype.registerInstance = function (token, instance) {
        this.ensureNotDisposed();
        return this.register(token, {
            useValue: instance
        });
    };
    InternalDependencyContainer.prototype.registerSingleton = function (from, to) {
        this.ensureNotDisposed();
        if ((0,_providers__WEBPACK_IMPORTED_MODULE_0__.isNormalToken)(from)) {
            if ((0,_providers__WEBPACK_IMPORTED_MODULE_0__.isNormalToken)(to)) {
                return this.register(from, {
                    useToken: to
                }, { lifecycle: _types_lifecycle__WEBPACK_IMPORTED_MODULE_4__["default"].Singleton });
            }
            else if (to) {
                return this.register(from, {
                    useClass: to
                }, { lifecycle: _types_lifecycle__WEBPACK_IMPORTED_MODULE_4__["default"].Singleton });
            }
            throw new Error('Cannot register a type name as a singleton without a "to" token');
        }
        var useClass = from;
        if (to && !(0,_providers__WEBPACK_IMPORTED_MODULE_0__.isNormalToken)(to)) {
            useClass = to;
        }
        return this.register(from, {
            useClass: useClass
        }, { lifecycle: _types_lifecycle__WEBPACK_IMPORTED_MODULE_4__["default"].Singleton });
    };
    InternalDependencyContainer.prototype.resolve = function (token, context) {
        if (context === void 0) { context = new _resolution_context__WEBPACK_IMPORTED_MODULE_5__["default"](); }
        this.ensureNotDisposed();
        var registration = this.getRegistration(token);
        if (!registration && (0,_providers__WEBPACK_IMPORTED_MODULE_0__.isNormalToken)(token)) {
            throw new Error("Attempted to resolve unregistered dependency token: \"" + token.toString() + "\"");
        }
        this.executePreResolutionInterceptor(token, "Single");
        if (registration) {
            var result = this.resolveRegistration(registration, context);
            this.executePostResolutionInterceptor(token, result, "Single");
            return result;
        }
        if ((0,_providers_injection_token__WEBPACK_IMPORTED_MODULE_2__.isConstructorToken)(token)) {
            var result = this.construct(token, context);
            this.executePostResolutionInterceptor(token, result, "Single");
            return result;
        }
        throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
    };
    InternalDependencyContainer.prototype.executePreResolutionInterceptor = function (token, resolutionType) {
        var e_1, _a;
        if (this.interceptors.preResolution.has(token)) {
            var remainingInterceptors = [];
            try {
                for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__values)(this.interceptors.preResolution.getAll(token)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var interceptor = _c.value;
                    if (interceptor.options.frequency != "Once") {
                        remainingInterceptors.push(interceptor);
                    }
                    interceptor.callback(token, resolutionType);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.interceptors.preResolution.setAll(token, remainingInterceptors);
        }
    };
    InternalDependencyContainer.prototype.executePostResolutionInterceptor = function (token, result, resolutionType) {
        var e_2, _a;
        if (this.interceptors.postResolution.has(token)) {
            var remainingInterceptors = [];
            try {
                for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__values)(this.interceptors.postResolution.getAll(token)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var interceptor = _c.value;
                    if (interceptor.options.frequency != "Once") {
                        remainingInterceptors.push(interceptor);
                    }
                    interceptor.callback(token, result, resolutionType);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this.interceptors.postResolution.setAll(token, remainingInterceptors);
        }
    };
    InternalDependencyContainer.prototype.resolveRegistration = function (registration, context) {
        this.ensureNotDisposed();
        if (registration.options.lifecycle === _types_lifecycle__WEBPACK_IMPORTED_MODULE_4__["default"].ResolutionScoped &&
            context.scopedResolutions.has(registration)) {
            return context.scopedResolutions.get(registration);
        }
        var isSingleton = registration.options.lifecycle === _types_lifecycle__WEBPACK_IMPORTED_MODULE_4__["default"].Singleton;
        var isContainerScoped = registration.options.lifecycle === _types_lifecycle__WEBPACK_IMPORTED_MODULE_4__["default"].ContainerScoped;
        var returnInstance = isSingleton || isContainerScoped;
        var resolved;
        if ((0,_providers__WEBPACK_IMPORTED_MODULE_0__.isValueProvider)(registration.provider)) {
            resolved = registration.provider.useValue;
        }
        else if ((0,_providers__WEBPACK_IMPORTED_MODULE_0__.isTokenProvider)(registration.provider)) {
            resolved = returnInstance
                ? registration.instance ||
                    (registration.instance = this.resolve(registration.provider.useToken, context))
                : this.resolve(registration.provider.useToken, context);
        }
        else if ((0,_providers__WEBPACK_IMPORTED_MODULE_0__.isClassProvider)(registration.provider)) {
            resolved = returnInstance
                ? registration.instance ||
                    (registration.instance = this.construct(registration.provider.useClass, context))
                : this.construct(registration.provider.useClass, context);
        }
        else if ((0,_providers__WEBPACK_IMPORTED_MODULE_0__.isFactoryProvider)(registration.provider)) {
            resolved = registration.provider.useFactory(this);
        }
        else {
            resolved = this.construct(registration.provider, context);
        }
        if (registration.options.lifecycle === _types_lifecycle__WEBPACK_IMPORTED_MODULE_4__["default"].ResolutionScoped) {
            context.scopedResolutions.set(registration, resolved);
        }
        return resolved;
    };
    InternalDependencyContainer.prototype.resolveAll = function (token, context) {
        var _this = this;
        if (context === void 0) { context = new _resolution_context__WEBPACK_IMPORTED_MODULE_5__["default"](); }
        this.ensureNotDisposed();
        var registrations = this.getAllRegistrations(token);
        if (!registrations && (0,_providers__WEBPACK_IMPORTED_MODULE_0__.isNormalToken)(token)) {
            throw new Error("Attempted to resolve unregistered dependency token: \"" + token.toString() + "\"");
        }
        this.executePreResolutionInterceptor(token, "All");
        if (registrations) {
            var result_1 = registrations.map(function (item) {
                return _this.resolveRegistration(item, context);
            });
            this.executePostResolutionInterceptor(token, result_1, "All");
            return result_1;
        }
        var result = [this.construct(token, context)];
        this.executePostResolutionInterceptor(token, result, "All");
        return result;
    };
    InternalDependencyContainer.prototype.isRegistered = function (token, recursive) {
        if (recursive === void 0) { recursive = false; }
        this.ensureNotDisposed();
        return (this._registry.has(token) ||
            (recursive &&
                (this.parent || false) &&
                this.parent.isRegistered(token, true)));
    };
    InternalDependencyContainer.prototype.reset = function () {
        this.ensureNotDisposed();
        this._registry.clear();
        this.interceptors.preResolution.clear();
        this.interceptors.postResolution.clear();
    };
    InternalDependencyContainer.prototype.clearInstances = function () {
        var e_3, _a;
        this.ensureNotDisposed();
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__values)(this._registry.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__read)(_c.value, 2), token = _d[0], registrations = _d[1];
                this._registry.setAll(token, registrations
                    .filter(function (registration) { return !(0,_providers__WEBPACK_IMPORTED_MODULE_0__.isValueProvider)(registration.provider); })
                    .map(function (registration) {
                    registration.instance = undefined;
                    return registration;
                }));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    InternalDependencyContainer.prototype.createChildContainer = function () {
        var e_4, _a;
        this.ensureNotDisposed();
        var childContainer = new InternalDependencyContainer(this);
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__values)(this._registry.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__read)(_c.value, 2), token = _d[0], registrations = _d[1];
                if (registrations.some(function (_a) {
                    var options = _a.options;
                    return options.lifecycle === _types_lifecycle__WEBPACK_IMPORTED_MODULE_4__["default"].ContainerScoped;
                })) {
                    childContainer._registry.setAll(token, registrations.map(function (registration) {
                        if (registration.options.lifecycle === _types_lifecycle__WEBPACK_IMPORTED_MODULE_4__["default"].ContainerScoped) {
                            return {
                                provider: registration.provider,
                                options: registration.options
                            };
                        }
                        return registration;
                    }));
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return childContainer;
    };
    InternalDependencyContainer.prototype.beforeResolution = function (token, callback, options) {
        if (options === void 0) { options = { frequency: "Always" }; }
        this.interceptors.preResolution.set(token, {
            callback: callback,
            options: options
        });
    };
    InternalDependencyContainer.prototype.afterResolution = function (token, callback, options) {
        if (options === void 0) { options = { frequency: "Always" }; }
        this.interceptors.postResolution.set(token, {
            callback: callback,
            options: options
        });
    };
    InternalDependencyContainer.prototype.dispose = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function () {
            var promises;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disposed = true;
                        promises = [];
                        this.disposables.forEach(function (disposable) {
                            var maybePromise = disposable.dispose();
                            if (maybePromise) {
                                promises.push(maybePromise);
                            }
                        });
                        return [4, Promise.all(promises)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    InternalDependencyContainer.prototype.getRegistration = function (token) {
        if (this.isRegistered(token)) {
            return this._registry.get(token);
        }
        if (this.parent) {
            return this.parent.getRegistration(token);
        }
        return null;
    };
    InternalDependencyContainer.prototype.getAllRegistrations = function (token) {
        if (this.isRegistered(token)) {
            return this._registry.getAll(token);
        }
        if (this.parent) {
            return this.parent.getAllRegistrations(token);
        }
        return null;
    };
    InternalDependencyContainer.prototype.construct = function (ctor, context) {
        var _this = this;
        if (ctor instanceof _lazy_helpers__WEBPACK_IMPORTED_MODULE_7__.DelayedConstructor) {
            return ctor.createProxy(function (target) {
                return _this.resolve(target, context);
            });
        }
        var instance = (function () {
            var paramInfo = typeInfo.get(ctor);
            if (!paramInfo || paramInfo.length === 0) {
                if (ctor.length === 0) {
                    return new ctor();
                }
                else {
                    throw new Error("TypeInfo not known for \"" + ctor.name + "\"");
                }
            }
            var params = paramInfo.map(_this.resolveParams(context, ctor));
            return new (ctor.bind.apply(ctor, (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__spread)([void 0], params)))();
        })();
        if ((0,_types_disposable__WEBPACK_IMPORTED_MODULE_8__.isDisposable)(instance)) {
            this.disposables.add(instance);
        }
        return instance;
    };
    InternalDependencyContainer.prototype.resolveParams = function (context, ctor) {
        var _this = this;
        return function (param, idx) {
            var _a, _b, _c;
            try {
                if ((0,_providers_injection_token__WEBPACK_IMPORTED_MODULE_2__.isTokenDescriptor)(param)) {
                    if ((0,_providers_injection_token__WEBPACK_IMPORTED_MODULE_2__.isTransformDescriptor)(param)) {
                        return param.multiple
                            ? (_a = _this.resolve(param.transform)).transform.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__spread)([_this.resolveAll(param.token)], param.transformArgs)) : (_b = _this.resolve(param.transform)).transform.apply(_b, (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__spread)([_this.resolve(param.token, context)], param.transformArgs));
                    }
                    else {
                        return param.multiple
                            ? _this.resolveAll(param.token)
                            : _this.resolve(param.token, context);
                    }
                }
                else if ((0,_providers_injection_token__WEBPACK_IMPORTED_MODULE_2__.isTransformDescriptor)(param)) {
                    return (_c = _this.resolve(param.transform, context)).transform.apply(_c, (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__spread)([_this.resolve(param.token, context)], param.transformArgs));
                }
                return _this.resolve(param, context);
            }
            catch (e) {
                throw new Error((0,_error_helpers__WEBPACK_IMPORTED_MODULE_6__.formatErrorCtor)(ctor, idx, e));
            }
        };
    };
    InternalDependencyContainer.prototype.ensureNotDisposed = function () {
        if (this.disposed) {
            throw new Error("This container has been disposed, you cannot interact with a disposed container");
        }
    };
    return InternalDependencyContainer;
}());
var instance = new InternalDependencyContainer();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/error-helpers.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/error-helpers.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatErrorCtor": () => (/* binding */ formatErrorCtor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function formatDependency(params, idx) {
    if (params === null) {
        return "at position #" + idx;
    }
    var argName = params.split(",")[idx].trim();
    return "\"" + argName + "\" at position #" + idx;
}
function composeErrorMessage(msg, e, indent) {
    if (indent === void 0) { indent = "    "; }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)([msg], e.message.split("\n").map(function (l) { return indent + l; })).join("\n");
}
function formatErrorCtor(ctor, paramIdx, error) {
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(ctor.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), _b = _a[1], params = _b === void 0 ? null : _b;
    var dep = formatDependency(params, paramIdx);
    return composeErrorMessage("Cannot inject the dependency " + dep + " of \"" + ctor.name + "\" constructor. Reason:", error);
}


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/factories/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/factories/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instanceCachingFactory": () => (/* reexport safe */ _instance_caching_factory__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "instancePerContainerCachingFactory": () => (/* reexport safe */ _instance_per_container_caching_factory__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "predicateAwareClassFactory": () => (/* reexport safe */ _predicate_aware_class_factory__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _instance_caching_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance-caching-factory */ "./node_modules/tsyringe/dist/esm5/factories/instance-caching-factory.js");
/* harmony import */ var _instance_per_container_caching_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instance-per-container-caching-factory */ "./node_modules/tsyringe/dist/esm5/factories/instance-per-container-caching-factory.js");
/* harmony import */ var _predicate_aware_class_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./predicate-aware-class-factory */ "./node_modules/tsyringe/dist/esm5/factories/predicate-aware-class-factory.js");





/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/factories/instance-caching-factory.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/factories/instance-caching-factory.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ instanceCachingFactory)
/* harmony export */ });
function instanceCachingFactory(factoryFunc) {
    var instance;
    return function (dependencyContainer) {
        if (instance == undefined) {
            instance = factoryFunc(dependencyContainer);
        }
        return instance;
    };
}


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/factories/instance-per-container-caching-factory.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/factories/instance-per-container-caching-factory.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ instancePerContainerCachingFactory)
/* harmony export */ });
function instancePerContainerCachingFactory(factoryFunc) {
    var cache = new WeakMap();
    return function (dependencyContainer) {
        var instance = cache.get(dependencyContainer);
        if (instance == undefined) {
            instance = factoryFunc(dependencyContainer);
            cache.set(dependencyContainer, instance);
        }
        return instance;
    };
}


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/factories/predicate-aware-class-factory.js":
/*!************************************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/factories/predicate-aware-class-factory.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ predicateAwareClassFactory)
/* harmony export */ });
function predicateAwareClassFactory(predicate, trueConstructor, falseConstructor, useCaching) {
    if (useCaching === void 0) { useCaching = true; }
    var instance;
    var previousPredicate;
    return function (dependencyContainer) {
        var currentPredicate = predicate(dependencyContainer);
        if (!useCaching || previousPredicate !== currentPredicate) {
            if ((previousPredicate = currentPredicate)) {
                instance = dependencyContainer.resolve(trueConstructor);
            }
            else {
                instance = dependencyContainer.resolve(falseConstructor);
            }
        }
        return instance;
    };
}


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/index.js":
/*!**************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lifecycle": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.Lifecycle),
/* harmony export */   "autoInjectable": () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.autoInjectable),
/* harmony export */   "container": () => (/* reexport safe */ _dependency_container__WEBPACK_IMPORTED_MODULE_5__.instance),
/* harmony export */   "delay": () => (/* reexport safe */ _lazy_helpers__WEBPACK_IMPORTED_MODULE_4__.delay),
/* harmony export */   "inject": () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.inject),
/* harmony export */   "injectAll": () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.injectAll),
/* harmony export */   "injectAllWithTransform": () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.injectAllWithTransform),
/* harmony export */   "injectWithTransform": () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.injectWithTransform),
/* harmony export */   "injectable": () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.injectable),
/* harmony export */   "instanceCachingFactory": () => (/* reexport safe */ _factories__WEBPACK_IMPORTED_MODULE_2__.instanceCachingFactory),
/* harmony export */   "instancePerContainerCachingFactory": () => (/* reexport safe */ _factories__WEBPACK_IMPORTED_MODULE_2__.instancePerContainerCachingFactory),
/* harmony export */   "isClassProvider": () => (/* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_3__.isClassProvider),
/* harmony export */   "isFactoryProvider": () => (/* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_3__.isFactoryProvider),
/* harmony export */   "isNormalToken": () => (/* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_3__.isNormalToken),
/* harmony export */   "isTokenProvider": () => (/* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_3__.isTokenProvider),
/* harmony export */   "isValueProvider": () => (/* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_3__.isValueProvider),
/* harmony export */   "predicateAwareClassFactory": () => (/* reexport safe */ _factories__WEBPACK_IMPORTED_MODULE_2__.predicateAwareClassFactory),
/* harmony export */   "registry": () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.registry),
/* harmony export */   "scoped": () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.scoped),
/* harmony export */   "singleton": () => (/* reexport safe */ _decorators__WEBPACK_IMPORTED_MODULE_1__.singleton)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/tsyringe/dist/esm5/types/index.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators */ "./node_modules/tsyringe/dist/esm5/decorators/index.js");
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories */ "./node_modules/tsyringe/dist/esm5/factories/index.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers */ "./node_modules/tsyringe/dist/esm5/providers/index.js");
/* harmony import */ var _lazy_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lazy-helpers */ "./node_modules/tsyringe/dist/esm5/lazy-helpers.js");
/* harmony import */ var _dependency_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dependency-container */ "./node_modules/tsyringe/dist/esm5/dependency-container.js");
if (typeof Reflect === "undefined" || !Reflect.getMetadata) {
    throw new Error("tsyringe requires a reflect polyfill. Please add 'import \"reflect-metadata\"' to the top of your entry point.");
}








/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/interceptors.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/interceptors.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostResolutionInterceptors": () => (/* binding */ PostResolutionInterceptors),
/* harmony export */   "PreResolutionInterceptors": () => (/* binding */ PreResolutionInterceptors),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _registry_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registry-base */ "./node_modules/tsyringe/dist/esm5/registry-base.js");


var PreResolutionInterceptors = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(PreResolutionInterceptors, _super);
    function PreResolutionInterceptors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PreResolutionInterceptors;
}(_registry_base__WEBPACK_IMPORTED_MODULE_0__["default"]));

var PostResolutionInterceptors = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(PostResolutionInterceptors, _super);
    function PostResolutionInterceptors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PostResolutionInterceptors;
}(_registry_base__WEBPACK_IMPORTED_MODULE_0__["default"]));

var Interceptors = (function () {
    function Interceptors() {
        this.preResolution = new PreResolutionInterceptors();
        this.postResolution = new PostResolutionInterceptors();
    }
    return Interceptors;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Interceptors);


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/lazy-helpers.js":
/*!*********************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/lazy-helpers.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DelayedConstructor": () => (/* binding */ DelayedConstructor),
/* harmony export */   "delay": () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var DelayedConstructor = (function () {
    function DelayedConstructor(wrap) {
        this.wrap = wrap;
        this.reflectMethods = [
            "get",
            "getPrototypeOf",
            "setPrototypeOf",
            "getOwnPropertyDescriptor",
            "defineProperty",
            "has",
            "set",
            "deleteProperty",
            "apply",
            "construct",
            "ownKeys"
        ];
    }
    DelayedConstructor.prototype.createProxy = function (createObject) {
        var _this = this;
        var target = {};
        var init = false;
        var value;
        var delayedObject = function () {
            if (!init) {
                value = createObject(_this.wrap());
                init = true;
            }
            return value;
        };
        return new Proxy(target, this.createHandler(delayedObject));
    };
    DelayedConstructor.prototype.createHandler = function (delayedObject) {
        var handler = {};
        var install = function (name) {
            handler[name] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                args[0] = delayedObject();
                var method = Reflect[name];
                return method.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(args));
            };
        };
        this.reflectMethods.forEach(install);
        return handler;
    };
    return DelayedConstructor;
}());

function delay(wrappedConstructor) {
    if (typeof wrappedConstructor === "undefined") {
        throw new Error("Attempt to `delay` undefined. Constructor must be wrapped in a callback");
    }
    return new DelayedConstructor(wrappedConstructor);
}


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/providers/class-provider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/providers/class-provider.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isClassProvider": () => (/* binding */ isClassProvider)
/* harmony export */ });
function isClassProvider(provider) {
    return !!provider.useClass;
}


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/providers/factory-provider.js":
/*!***********************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/providers/factory-provider.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFactoryProvider": () => (/* binding */ isFactoryProvider)
/* harmony export */ });
function isFactoryProvider(provider) {
    return !!provider.useFactory;
}


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/providers/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/providers/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isClassProvider": () => (/* reexport safe */ _class_provider__WEBPACK_IMPORTED_MODULE_0__.isClassProvider),
/* harmony export */   "isFactoryProvider": () => (/* reexport safe */ _factory_provider__WEBPACK_IMPORTED_MODULE_1__.isFactoryProvider),
/* harmony export */   "isNormalToken": () => (/* reexport safe */ _injection_token__WEBPACK_IMPORTED_MODULE_2__.isNormalToken),
/* harmony export */   "isTokenProvider": () => (/* reexport safe */ _token_provider__WEBPACK_IMPORTED_MODULE_3__.isTokenProvider),
/* harmony export */   "isValueProvider": () => (/* reexport safe */ _value_provider__WEBPACK_IMPORTED_MODULE_4__.isValueProvider)
/* harmony export */ });
/* harmony import */ var _class_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-provider */ "./node_modules/tsyringe/dist/esm5/providers/class-provider.js");
/* harmony import */ var _factory_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory-provider */ "./node_modules/tsyringe/dist/esm5/providers/factory-provider.js");
/* harmony import */ var _injection_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./injection-token */ "./node_modules/tsyringe/dist/esm5/providers/injection-token.js");
/* harmony import */ var _token_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-provider */ "./node_modules/tsyringe/dist/esm5/providers/token-provider.js");
/* harmony import */ var _value_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./value-provider */ "./node_modules/tsyringe/dist/esm5/providers/value-provider.js");







/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/providers/injection-token.js":
/*!**********************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/providers/injection-token.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isConstructorToken": () => (/* binding */ isConstructorToken),
/* harmony export */   "isNormalToken": () => (/* binding */ isNormalToken),
/* harmony export */   "isTokenDescriptor": () => (/* binding */ isTokenDescriptor),
/* harmony export */   "isTransformDescriptor": () => (/* binding */ isTransformDescriptor)
/* harmony export */ });
/* harmony import */ var _lazy_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lazy-helpers */ "./node_modules/tsyringe/dist/esm5/lazy-helpers.js");

function isNormalToken(token) {
    return typeof token === "string" || typeof token === "symbol";
}
function isTokenDescriptor(descriptor) {
    return (typeof descriptor === "object" &&
        "token" in descriptor &&
        "multiple" in descriptor);
}
function isTransformDescriptor(descriptor) {
    return (typeof descriptor === "object" &&
        "token" in descriptor &&
        "transform" in descriptor);
}
function isConstructorToken(token) {
    return typeof token === "function" || token instanceof _lazy_helpers__WEBPACK_IMPORTED_MODULE_0__.DelayedConstructor;
}


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/providers/provider.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/providers/provider.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProvider": () => (/* binding */ isProvider)
/* harmony export */ });
/* harmony import */ var _class_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-provider */ "./node_modules/tsyringe/dist/esm5/providers/class-provider.js");
/* harmony import */ var _value_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./value-provider */ "./node_modules/tsyringe/dist/esm5/providers/value-provider.js");
/* harmony import */ var _token_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token-provider */ "./node_modules/tsyringe/dist/esm5/providers/token-provider.js");
/* harmony import */ var _factory_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory-provider */ "./node_modules/tsyringe/dist/esm5/providers/factory-provider.js");




function isProvider(provider) {
    return ((0,_class_provider__WEBPACK_IMPORTED_MODULE_0__.isClassProvider)(provider) ||
        (0,_value_provider__WEBPACK_IMPORTED_MODULE_1__.isValueProvider)(provider) ||
        (0,_token_provider__WEBPACK_IMPORTED_MODULE_2__.isTokenProvider)(provider) ||
        (0,_factory_provider__WEBPACK_IMPORTED_MODULE_3__.isFactoryProvider)(provider));
}


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/providers/token-provider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/providers/token-provider.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTokenProvider": () => (/* binding */ isTokenProvider)
/* harmony export */ });
function isTokenProvider(provider) {
    return !!provider.useToken;
}


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/providers/value-provider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/providers/value-provider.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValueProvider": () => (/* binding */ isValueProvider)
/* harmony export */ });
function isValueProvider(provider) {
    return provider.useValue != undefined;
}


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/reflection-helpers.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/reflection-helpers.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INJECTION_TOKEN_METADATA_KEY": () => (/* binding */ INJECTION_TOKEN_METADATA_KEY),
/* harmony export */   "defineInjectionTokenMetadata": () => (/* binding */ defineInjectionTokenMetadata),
/* harmony export */   "getParamInfo": () => (/* binding */ getParamInfo)
/* harmony export */ });
var INJECTION_TOKEN_METADATA_KEY = "injectionTokens";
function getParamInfo(target) {
    var params = Reflect.getMetadata("design:paramtypes", target) || [];
    var injectionTokens = Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY, target) || {};
    Object.keys(injectionTokens).forEach(function (key) {
        params[+key] = injectionTokens[key];
    });
    return params;
}
function defineInjectionTokenMetadata(data, transform) {
    return function (target, _propertyKey, parameterIndex) {
        var descriptors = Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY, target) || {};
        descriptors[parameterIndex] = transform
            ? {
                token: data,
                transform: transform.transformToken,
                transformArgs: transform.args || []
            }
            : data;
        Reflect.defineMetadata(INJECTION_TOKEN_METADATA_KEY, descriptors, target);
    };
}


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/registry-base.js":
/*!**********************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/registry-base.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var RegistryBase = (function () {
    function RegistryBase() {
        this._registryMap = new Map();
    }
    RegistryBase.prototype.entries = function () {
        return this._registryMap.entries();
    };
    RegistryBase.prototype.getAll = function (key) {
        this.ensure(key);
        return this._registryMap.get(key);
    };
    RegistryBase.prototype.get = function (key) {
        this.ensure(key);
        var value = this._registryMap.get(key);
        return value[value.length - 1] || null;
    };
    RegistryBase.prototype.set = function (key, value) {
        this.ensure(key);
        this._registryMap.get(key).push(value);
    };
    RegistryBase.prototype.setAll = function (key, value) {
        this._registryMap.set(key, value);
    };
    RegistryBase.prototype.has = function (key) {
        this.ensure(key);
        return this._registryMap.get(key).length > 0;
    };
    RegistryBase.prototype.clear = function () {
        this._registryMap.clear();
    };
    RegistryBase.prototype.ensure = function (key) {
        if (!this._registryMap.has(key)) {
            this._registryMap.set(key, []);
        }
    };
    return RegistryBase;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistryBase);


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/registry.js":
/*!*****************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/registry.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _registry_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registry-base */ "./node_modules/tsyringe/dist/esm5/registry-base.js");


var Registry = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Registry, _super);
    function Registry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Registry;
}(_registry_base__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Registry);


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/resolution-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/resolution-context.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ResolutionContext = (function () {
    function ResolutionContext() {
        this.scopedResolutions = new Map();
    }
    return ResolutionContext;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResolutionContext);


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/types/disposable.js":
/*!*************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/types/disposable.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDisposable": () => (/* binding */ isDisposable)
/* harmony export */ });
function isDisposable(value) {
    if (typeof value.dispose !== "function")
        return false;
    var disposeFun = value.dispose;
    if (disposeFun.length > 0) {
        return false;
    }
    return true;
}


/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/types/index.js":
/*!********************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/types/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lifecycle": () => (/* reexport safe */ _lifecycle__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lifecycle */ "./node_modules/tsyringe/dist/esm5/types/lifecycle.js");



/***/ }),

/***/ "./node_modules/tsyringe/dist/esm5/types/lifecycle.js":
/*!************************************************************!*\
  !*** ./node_modules/tsyringe/dist/esm5/types/lifecycle.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Lifecycle;
(function (Lifecycle) {
    Lifecycle[Lifecycle["Transient"] = 0] = "Transient";
    Lifecycle[Lifecycle["Singleton"] = 1] = "Singleton";
    Lifecycle[Lifecycle["ResolutionScoped"] = 2] = "ResolutionScoped";
    Lifecycle[Lifecycle["ContainerScoped"] = 3] = "ContainerScoped";
})(Lifecycle || (Lifecycle = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lifecycle);


/***/ }),

/***/ "./src/presentation/all/impls/treeview.css":
/*!*************************************************!*\
  !*** ./src/presentation/all/impls/treeview.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_treeview_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./treeview.css */ "./node_modules/css-loader/dist/cjs.js!./src/presentation/all/impls/treeview.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_treeview_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_treeview_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_treeview_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_treeview_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/application/objects/editorManager.ts":
/*!**************************************************!*\
  !*** ./src/application/objects/editorManager.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorManager": () => (/* binding */ EditorManager)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_objects_editors_IEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/objects/editors/IEditor */ "./src/domain/objects/editors/IEditor.ts");
/* harmony import */ var _domain_objects_editors_IEntityDesignerEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/objects/editors/IEntityDesignerEditor */ "./src/domain/objects/editors/IEntityDesignerEditor.ts");
/* harmony import */ var _domain_objects_editors_IProcessDesignEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/objects/editors/IProcessDesignEditor */ "./src/domain/objects/editors/IProcessDesignEditor.ts");
/* harmony import */ var _domain_objects_editors_processEditor_IProcessEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/objects/editors/processEditor/IProcessEditor */ "./src/domain/objects/editors/processEditor/IProcessEditor.ts");
/* harmony import */ var _domain_objects_editors_IQuickEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../domain/objects/editors/IQuickEditor */ "./src/domain/objects/editors/IQuickEditor.ts");






class EditorManager {
    constructor(editors = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolveAll(_domain_objects_editors_IEditor__WEBPACK_IMPORTED_MODULE_1__.IEditor)) {
        this.editors = editors;
    }
    attach(element) {
        this.editors.forEach(editor => editor.attach(element));
        this.reset();
    }
    detach() {
        this.editors.forEach(editor => editor.detach());
    }
    reset() {
        this.editors.forEach(editor => editor.show(false));
    }
    show(editor, show) {
        if (show) {
            this.editors.forEach(curEditor => curEditor.show(editor == curEditor));
        }
        else {
            editor.show(false);
        }
    }
    getEditor(item) {
        switch (item.modelType) {
            case "entityDesigner":
                return _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_objects_editors_IEntityDesignerEditor__WEBPACK_IMPORTED_MODULE_2__.IEntityDesignerEditor);
            case "js":
                return undefined;
            case "namedComponent":
                return undefined;
            case "bpmn":
                return _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_objects_editors_IProcessDesignEditor__WEBPACK_IMPORTED_MODULE_3__.IProcessDesignEditor);
            case "process":
                return _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_objects_editors_processEditor_IProcessEditor__WEBPACK_IMPORTED_MODULE_4__.IProcessEditor);
            case "qjson":
                return _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_objects_editors_IQuickEditor__WEBPACK_IMPORTED_MODULE_5__.IQuickEditor);
            case "yaml":
                return undefined;
        }
    }
}
// interface IFrameMessagingDictItem {
//     name: keyof MessagingDict;
//     url: string;
//     messanger: IFrameMessanger;
//     preInit: boolean;
// }
// type MessagingDict = {
//     quick: IFrameMessagingDictItem;
//     entity: IFrameMessagingDictItem;
//     process: IFrameMessagingDictItem;
// };
// interface IFrameConfig {
//     url: string;
//     init?: boolean;
// }
// @injectable()
// export class EditorManager implements IEditorManager {
//     private messagings: MessagingDict;
//     private connected: boolean = false;
//     constructor(
//         @inject(IViewModel) private readonly viewModel = container.resolve<IViewModel>(IViewModel),
//         @inject(IConfig) config = container.resolve<IConfig>(IConfig),
//     ) {
//         const editors = config.getValue("studio").editors;
//         const messanger = () => container.resolve<IFrameMessanger>(IFrameMessanger);
//         this.messagings = {
//             quick: { name: "quick", preInit: true, url: editors.quick, messanger: messanger() },
//             entity: { name: "entity", preInit: false, url: editors.entity, messanger: messanger() },
//             process: { name: "process", preInit: false, messanger: messanger() },
//         };
//         this.reset();
//     }
//     public reset() {
//         this.iterate().forEach(module => module.messanger.show(false));
//     }
//     public connect() {
//         if (this.connected) { return; }
//         this.iterate().forEach(module => module.messanger.connect(module.url, message => {
//             const source = module;
//             switch (message.msg.type) {
//                 case "IAmReady": this.iamReady(source, { id: message.id, msg: message.msg }); break;
//                 case "modifiedRequest": this.modifiedRequest(source); break;
//             }
//         }, { init: module.preInit }));
//         this.connected = true;
//     }
//     public show(messaging: TargetMessaging, show: boolean) {
//         if (show) {
//             TargetMessagings.forEach(target => this[target].show(target == messaging));
//         } else {
//             this[messaging].show(false);
//         }
//     }
//     public attach(element: HTMLElement) {
//         this.connect();
//         this.iterate().forEach(module => module.messanger.attach(element));
//     }
//     public detach() {
//         this.iterate().forEach(module => module.messanger.detach());
//     }
//     public get quick() {
//         return this.messagings.quick.messanger;
//     }
//     public get entity() {
//         return this.messagings.entity.messanger;
//     }
//     public get process() {
//         return this.messagings.process.messanger;
//     }
//     private iterate() {
//         return Object.keys(this.messagings).map(curKey => this.messagings[curKey as keyof MessagingDict]);
//     }
//     private modifiedRequest(from: IFrameMessagingDictItem) {
//         const currentItem = this.viewModel.studio.currentItem;
//         if (!currentItem) { return; }
//         currentItem.modified = true;
//     }
//     private iamReady(from: IFrameMessagingDictItem, message: ISocketPackage<PModules["Quick"]["IAmReady"]>) {
//         console.log("iam ready came");
//         if (from.name == "quick") {
//             from.messanger.sendMessage("Quick", "IAmReadyResponse", {
//                 type: "IAmReadyResponse",
//                 editorButtons: {
//                     file: true,
//                     createNamedComponent: true,
//                     //pageWizard: true
//                 },
//                 qjsonHandling: {
//                     value: "<<qjson:",
//                     type: "prefix" // regex maybe..
//                 }
//             }, {});
//         } else {
//             from.messanger.sendMessage("Quick", "IAmReadyResponse", {
//                 type: "IAmReadyResponse",
//                 editorButtons: {}, qjsonHandling: { value: "<<qjson:", type: "prefix" /* regex maybe..*/ }
//             }, { replyId: message.id });
//         }
//     }
// }


/***/ }),

/***/ "./src/application/objects/editors/entityDesignerEditorImpl.ts":
/*!*********************************************************************!*\
  !*** ./src/application/objects/editors/entityDesignerEditorImpl.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityDesignerEditorImpl": () => (/* binding */ EntityDesignerEditorImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../domain/infrastructure/IConfig */ "./src/domain/infrastructure/IConfig.ts");
/* harmony import */ var _domain_infrastructure_IFrameMessanger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domain/infrastructure/IFrameMessanger */ "./src/domain/infrastructure/IFrameMessanger.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let EntityDesignerEditorImpl = class EntityDesignerEditorImpl {
    constructor(
    //@inject(IViewModel) private readonly viewModel = container.resolve<IViewModel>(IViewModel),
    frameMessanger = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_infrastructure_IFrameMessanger__WEBPACK_IMPORTED_MODULE_2__.IFrameMessanger), config = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_infrastructure_IConfig__WEBPACK_IMPORTED_MODULE_1__.IConfig)) {
        this.frameMessanger = frameMessanger;
        this.config = config;
        this.name = "entityDesigner";
        this.connected = false;
        this.connect();
    }
    connect() {
        if (this.connected) {
            return;
        }
        this.frameMessanger.connect(this.config.getValue("studio").editors.entity, message => {
            switch (message.msg.type) {
                case "IAmReady":
                    this.iamReady({ id: message.id, msg: message.msg });
                    break;
                case "modifiedRequest":
                    this.modifiedRequest();
                    break;
            }
        }, { init: true });
        this.connected = true;
    }
    attach(element) {
        this.connect();
        this.frameMessanger.attach(element);
    }
    detach() {
        this.frameMessanger.detach();
    }
    show(show) {
        this.frameMessanger.show(show);
    }
    getModel() {
        throw new Error("Method not implemented.");
    }
    async setModel(item) {
        var _a;
        this.frameMessanger.sendMessage("Quick", "setModel", {
            content: (_a = item.modelBody) === null || _a === void 0 ? void 0 : _a[0].model,
            fileName: item.name, type: "setModel", state: item.state,
        }, {});
    }
    iamReady(message) {
        console.log("iam ready came from entity designer");
        this.frameMessanger.sendMessage("EntityDesigner", "IAmReadyResponse", {
            type: "IAmReadyResponse",
        }, {});
    }
    modifiedRequest() {
    }
};
EntityDesignerEditorImpl = __decorate([
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IFrameMessanger__WEBPACK_IMPORTED_MODULE_2__.IFrameMessanger)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IConfig__WEBPACK_IMPORTED_MODULE_1__.IConfig))
], EntityDesignerEditorImpl);



/***/ }),

/***/ "./src/application/objects/editors/processDesignEditorImpl.ts":
/*!********************************************************************!*\
  !*** ./src/application/objects/editors/processDesignEditorImpl.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessDesignEditorImpl": () => (/* binding */ ProcessDesignEditorImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IInlineEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../domain/infrastructure/IInlineEditor */ "./src/domain/infrastructure/IInlineEditor.ts");
/* harmony import */ var _domain_presentation_IAsyncComponentCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domain/presentation/IAsyncComponentCreator */ "./src/domain/presentation/IAsyncComponentCreator.ts");
/* harmony import */ var _domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../domain/viewModel/IViewModel */ "./src/domain/viewModel/IViewModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ProcessDesignEditorImpl = class ProcessDesignEditorImpl {
    constructor(compCreator = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_presentation_IAsyncComponentCreator__WEBPACK_IMPORTED_MODULE_2__.IAsyncComponentCreator), inlineEditor = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_infrastructure_IInlineEditor__WEBPACK_IMPORTED_MODULE_1__.IInlineEditor), viewModel = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_3__.IViewModel)) {
        this.compCreator = compCreator;
        this.inlineEditor = inlineEditor;
        this.viewModel = viewModel;
        this.name = "processDesign";
    }
    connect() { }
    attach(element) {
        this.inlineEditor.attach(this.name, element);
        const props = { name: "", functions: {}, callbacks: { modified: () => this.modified() } };
        const editor = this.compCreator.instantiateComponent(this.compCreator.createProcessDesignEditor(), props, this.inlineEditor.Root);
        this.editorData = { editor, props };
    }
    detach() {
        if (!this.editorData) {
            return;
        }
        this.compCreator.destroyComponent(this.editorData.editor);
        delete this.editorData;
    }
    show(show) {
        this.inlineEditor.show(show);
    }
    async getModel() {
        const model = await this.editorData.props.functions.getModel();
        return {
            model: [
                { key: "bpmn", model: model.model.bpmn }
            ],
            state: model.state
        };
    }
    async setModel(item) {
        const state = undefined;
        const model = item.modelBody.reduce((model, curModel) => {
            if (curModel.key == "bpmn") {
                model.bpmn = curModel.model;
            }
            return model;
        }, { bpmn: "" });
        await this.editorData.props.functions.setModel(model, state);
    }
    modified() {
        const currentItem = this.viewModel.studio.currentItem;
        if (!currentItem) {
            return;
        }
        currentItem.modified = true;
    }
};
ProcessDesignEditorImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)()
], ProcessDesignEditorImpl);



/***/ }),

/***/ "./src/application/objects/editors/processEditorImpl.ts":
/*!**************************************************************!*\
  !*** ./src/application/objects/editors/processEditorImpl.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessEditorImpl": () => (/* binding */ ProcessEditorImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IInlineEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../domain/infrastructure/IInlineEditor */ "./src/domain/infrastructure/IInlineEditor.ts");
/* harmony import */ var _domain_presentation_IAsyncComponentCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domain/presentation/IAsyncComponentCreator */ "./src/domain/presentation/IAsyncComponentCreator.ts");
/* harmony import */ var _domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../domain/viewModel/IViewModel */ "./src/domain/viewModel/IViewModel.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ProcessEditorImpl = class ProcessEditorImpl {
    constructor(compCreator = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_presentation_IAsyncComponentCreator__WEBPACK_IMPORTED_MODULE_2__.IAsyncComponentCreator), inlineEditor = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_infrastructure_IInlineEditor__WEBPACK_IMPORTED_MODULE_1__.IInlineEditor), viewModel = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_3__.IViewModel), qCloudApi = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_4__.IQCloudApi)) {
        this.compCreator = compCreator;
        this.inlineEditor = inlineEditor;
        this.viewModel = viewModel;
        this.qCloudApi = qCloudApi;
        this.name = "process";
    }
    connect() { }
    attach(element) {
        this.inlineEditor.attach(this.name, element);
        const props = {
            name: "",
            functions: {},
            callbacks: { modified: () => this.modified(), getBpmnModel: (id) => this.getBpmnModel(id) },
        };
        const editor = this.compCreator.instantiateComponent(this.compCreator.createProcessEditor(), props, this.inlineEditor.Root);
        this.editorData = { editor, props };
    }
    detach() {
        if (!this.editorData) {
            return;
        }
        this.compCreator.destroyComponent(this.editorData.editor);
        delete this.editorData;
    }
    show(show) {
        this.inlineEditor.show(show);
    }
    async getModel() {
        const model = await this.editorData.props.functions.getModel();
        return {
            model: [{ key: "process", model: model.model }],
            state: model.state,
        };
    }
    async setModel(item) {
        var _a;
        const module = this.getModule(item);
        const state = {
            stepper: ((_a = item.state) === null || _a === void 0 ? void 0 : _a.stepper) || {
                currentStep: 0,
                totalStep: 0,
                isTabValid: false,
                isApproveTab: false,
            },
        };
        const model = item.modelBody.reduce((model, curModel) => {
            if (curModel.key == "process") {
                model = curModel.model;
            }
            return model;
        }, {});
        await this.editorData.props.functions.setModel(model, module, state);
    }
    modified() {
        const currentItem = this.viewModel.studio.currentItem;
        if (!currentItem) {
            return;
        }
        currentItem.modified = true;
    }
    async getBpmnModel(id) {
        const modelBody = await this.qCloudApi.getModelBody(id);
        const model = modelBody.model[0].model;
        return model;
    }
    getModule(item) {
        const currentModule = this.viewModel.studio.items.find((i) => i.children.some((children) => children.ID == item.ID));
        return currentModule;
    }
};
ProcessEditorImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)()
], ProcessEditorImpl);



/***/ }),

/***/ "./src/application/objects/editors/quickEditorImpl.ts":
/*!************************************************************!*\
  !*** ./src/application/objects/editors/quickEditorImpl.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickEditorImpl": () => (/* binding */ QuickEditorImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../domain/infrastructure/IConfig */ "./src/domain/infrastructure/IConfig.ts");
/* harmony import */ var _domain_infrastructure_IFrameMessanger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domain/infrastructure/IFrameMessanger */ "./src/domain/infrastructure/IFrameMessanger.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../domain/viewModel/IViewModel */ "./src/domain/viewModel/IViewModel.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






let QuickEditorImpl = class QuickEditorImpl {
    constructor(viewModel = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_4__.IViewModel), viewModelManager = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_5__.IViewModelManager), frameMessanger = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_infrastructure_IFrameMessanger__WEBPACK_IMPORTED_MODULE_2__.IFrameMessanger), config = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_infrastructure_IConfig__WEBPACK_IMPORTED_MODULE_1__.IConfig), qcloudApi = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_3__.IQCloudApi)) {
        this.viewModel = viewModel;
        this.viewModelManager = viewModelManager;
        this.frameMessanger = frameMessanger;
        this.config = config;
        this.qcloudApi = qcloudApi;
        this.name = "quick";
        this.connected = false;
        this.connect();
    }
    connect() {
        if (this.connected) {
            return;
        }
        this.frameMessanger.connect(this.config.getValue("studio").editors.quick, message => {
            switch (message.msg.type) {
                case "addComponentToScreen": /*şimdilik geç*/ break;
                case "addOrUpdateNamedComp":
                    this.addOrUpdateNamedComp({ id: message.id, msg: message.msg });
                    break; // TODO: namedComponent'in kendi editörü olmalı. quick -> IDE
                case "createGoAction": /* burada da quick içinde de silinecek. openPageWizard'ın reply'ı bu */ break;
                case "generatePageEntityModel": /*şimdilik geç*/ break;
                case "getNamedComp":
                    this.getNamedComponent({ id: message.id, msg: message.msg });
                    break; // TODO: namedComponent'in kendi editörü olmalı. quick -> IDE
                case "getQuickComp":
                    this.getQuickComp({ id: message.id, msg: message.msg });
                    break; // çek dön
                case "IAmReady":
                    this.iamReady({ id: message.id, msg: message.msg });
                    break;
                case "modifiedRequest":
                    this.modifiedRequest();
                    break;
                case "openPageWizard": break; // sayfa listesi seç ve dön. //quick içinde çağıran yer await'le çözülecek. createGoAction yerine
            }
        }, { init: true });
        this.connected = true;
    }
    attach(element) {
        this.connect();
        this.frameMessanger.attach(element);
    }
    detach() {
        this.frameMessanger.detach();
    }
    show(show) {
        this.frameMessanger.show(show);
    }
    async getModel() {
        const resp = await this.frameMessanger.sendMessage("Quick", "getModel", { type: "getModel" }, { awaitResponse: true });
        const getModelResponse = resp === null || resp === void 0 ? void 0 : resp.msg;
        return {
            model: [{ key: "qjson", model: getModelResponse.content }],
            state: getModelResponse.state,
        };
    }
    async setModel(item) {
        var _a;
        await this.frameMessanger.sendMessage("Quick", "setModel", {
            content: (_a = item.modelBody) === null || _a === void 0 ? void 0 : _a[0].model,
            fileName: item.name, type: "setModel", state: item.state,
        }, { awaitResponse: true });
        //TODO: cache this.
        const params = this.viewModel.studio.items.filter((item) => {
            if (item.objectType != "model" || item.modelType != "qjson" || !item.additionals) {
                return false;
            }
            const qjsonAdd = item.additionals;
            if (qjsonAdd.qjsonType != "quickComponent") {
                return false;
            }
            return true;
        }).map((item) => {
            const qjsonAdd = item.additionals;
            const retVal = {
                name: item.name, id: item.ID, qJsonPath: `'<<qjson:${item.ID}>>'`, qJsonOptions: { qJsonType: qjsonAdd.qjsonType },
            };
            return retVal;
        });
        this.frameMessanger.sendMessage("Quick", "setQuickComps", { removeOlds: true, type: "setQuickComps", params }, {});
        const namedComps = this.viewModel.studio.items
            .filter((item) => item.objectType == "model" && item.modelType == "namedComponent")
            .map(item => {
            const retVal = item.modelBody[0].model;
            retVal.pim.Component.CompPath = `<<named:${item.ID}>>`;
            return retVal;
        });
        this.frameMessanger.sendMessage("Quick", "setNamedCompList", { type: "setNamedCompList", compModelList: namedComps }, {});
        //TODO: setProperties
    }
    async addOrUpdateNamedComp(message) {
        const sendReply = (success, replyId, compPath, message) => this.frameMessanger.sendMessage("Quick", "addOrUpdateNamedCompResponse", { type: "addOrUpdateNamedCompResponse", success, compPath, message }, { replyId });
        const createModel = model => [{ key: "pim", model: model.pim }, { key: "files", model: model.files }];
        const parentObject = this.viewModelManager.findObject(this.viewModel.studio.appId);
        let compPath = message.msg.compPath;
        try {
            if (compPath) {
                const regExp = new RegExp('<<named:(\\w(?![/]).*)>>');
                const id = regExp.exec(compPath)[1];
                await this.qcloudApi.updateModel(id, { model: createModel(message.msg.compModel) });
            }
            else {
                const resp = await this.qcloudApi.createModel({
                    name: message.msg.compName, modelType: "namedComponent", parentObject, modelBody: createModel(message.msg.compModel)
                });
                compPath = `<<named:${resp.ID}>>`;
            }
            sendReply(true, message.id, compPath);
        }
        catch (ex) {
            sendReply(false, message.id, compPath, ex.message);
            throw ex;
        }
    }
    async getNamedComponent(message) {
        let compPath = message.msg.compPath;
        const regExp = new RegExp('<<named:(\\w(?![/]).*)>>');
        const id = regExp.exec(compPath)[1];
        const resp = await this.qcloudApi.getModelBody(id);
        const compModel = resp.model.reduce((prev, item) => {
            if (item.key == "pim") {
                prev.pim = item.model;
            }
            else if (item.key == "files") {
                prev.files = item.model;
            }
            return prev;
        }, {});
        this.frameMessanger.sendMessage("Quick", "getNamedCompResponse", { type: "getNamedCompResponse", compModel }, { replyId: message.id });
    }
    async getQuickComp(message) {
        let qjsonPath = message.msg.qjsonPath;
        const regExp = new RegExp('<<qjson:(\\w(?![/]).*)>>');
        const id = regExp.exec(qjsonPath)[1];
        const object = this.viewModelManager.findObject(id);
        let modelBody;
        if ((object === null || object === void 0 ? void 0 : object.objectType) == "model" && object.modelBody) {
            modelBody = object.modelBody;
        }
        else {
            const resp = await this.qcloudApi.getModelBody(id);
            modelBody = resp.model;
        }
        const qjson = modelBody === null || modelBody === void 0 ? void 0 : modelBody[0].model; // will change when quick compiled and source is seperated
        this.frameMessanger.sendMessage("Quick", "getQuickCompResponse", { type: "getQuickCompResponse", qjson }, { replyId: message.id });
    }
    modifiedRequest() {
        const currentItem = this.viewModel.studio.currentItem;
        if (!currentItem) {
            return;
        }
        currentItem.modified = true;
    }
    iamReady(message) {
        console.log("iam ready came from quick");
        this.frameMessanger.sendMessage("Quick", "IAmReadyResponse", {
            type: "IAmReadyResponse",
            editorButtons: {
                file: false,
                createNamedComponent: true,
                //pageWizard: true,
                addStyle: false
            },
            qjsonHandling: {
                value: "<<qjson:",
                type: "prefix" // regex maybe..
            }
        }, {});
    }
};
QuickEditorImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_4__.IViewModel)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_5__.IViewModelManager)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IFrameMessanger__WEBPACK_IMPORTED_MODULE_2__.IFrameMessanger)),
    __param(3, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IConfig__WEBPACK_IMPORTED_MODULE_1__.IConfig)),
    __param(4, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_3__.IQCloudApi))
], QuickEditorImpl);



/***/ }),

/***/ "./src/application/objects/sessionManager.ts":
/*!***************************************************!*\
  !*** ./src/application/objects/sessionManager.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionManager": () => (/* binding */ SessionManager)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IDomHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IDomHelper */ "./src/domain/infrastructure/IDomHelper.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_infrastructure_IThrotler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/infrastructure/IThrotler */ "./src/domain/infrastructure/IThrotler.ts");
/* harmony import */ var _domain_infrastructure_ITimer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/infrastructure/ITimer */ "./src/domain/infrastructure/ITimer.ts");
/* harmony import */ var _domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../domain/presentation/INotification */ "./src/domain/presentation/INotification.ts");
/* harmony import */ var _domain_useCase_ILogout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../domain/useCase/ILogout */ "./src/domain/useCase/ILogout.ts");
/* harmony import */ var _domain_useCase_ITimedOut__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../domain/useCase/ITimedOut */ "./src/domain/useCase/ITimedOut.ts");
/* harmony import */ var _domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../domain/useCase/IUseCaseExecutor */ "./src/domain/useCase/IUseCaseExecutor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









const sessionTimeout = 3 * 60 * 1000; //3 * 60 * 1000;
const interactionSessionRenewThrottle = 2 * 60 * 1000; //2 * 60 * 1000
const countdownTimeout = 30 * 1000; //30 * 1000
let SessionManager = class SessionManager {
    constructor(qcloudApi = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_2__.IQCloudApi), notification = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_5__.INotification), sessionTimer = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_infrastructure_ITimer__WEBPACK_IMPORTED_MODULE_4__.ITimer), countdownTimer = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_infrastructure_ITimer__WEBPACK_IMPORTED_MODULE_4__.ITimer), executor = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_8__.IUseCaseExecutor), domHelper = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_infrastructure_IDomHelper__WEBPACK_IMPORTED_MODULE_1__.IDomHelper), throttler = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_infrastructure_IThrotler__WEBPACK_IMPORTED_MODULE_3__.IThrottler)) {
        this.qcloudApi = qcloudApi;
        this.notification = notification;
        this.sessionTimer = sessionTimer;
        this.countdownTimer = countdownTimer;
        this.executor = executor;
        this.domHelper = domHelper;
        this.throttler = throttler;
        this.interraction = () => this.throttler.trigger();
        this.throttler.setup(this.OnResumeInteract, interactionSessionRenewThrottle, this);
    }
    start() {
        this.sessionTimer.setUp({ time: sessionTimeout, callback: () => this.onSessionEnding() });
        this.domHelper.subscribeInteraction(this.interraction);
        this.throttler.block();
    }
    stop() {
        this.sessionTimer.reset();
        this.countdownTimer.reset();
        this.domHelper.unSubscribeInteraction(this.interraction);
    }
    async OnResumeInteract() {
        console.log("devam diyorrrr");
        this.stop();
        await this.executor.execute(async () => {
            await this.qcloudApi.getUserInfobyToken();
            this.start();
        }, { loading: false });
    }
    OnLogoutInteract() {
        console.log("yokum diyorrrr");
        this.stop();
        this.executor.execute(async () => {
            await this.executor.executeUseCase(_domain_useCase_ILogout__WEBPACK_IMPORTED_MODULE_6__.ILogout);
        }, { loading: true });
    }
    OnCountdownEnd() {
        this.executor.execute(async () => {
            await this.executor.executeUseCase(_domain_useCase_ITimedOut__WEBPACK_IMPORTED_MODULE_7__.ITimedOut);
        }, { loading: true });
    }
    async onSessionEnding() {
        this.domHelper.unSubscribeInteraction(this.interraction);
        this.countdownTimer.setUp({ time: countdownTimeout, callback: () => this.OnCountdownEnd() });
        const result = await this.notification.showConfirm({
            title: "Your session is expiring...",
            text: "What would you like to do?",
            type: "warning",
            timeout: countdownTimeout,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            approveText: "Resume",
            rejectText: "Logout",
        });
        result.approved ? this.OnResumeInteract() : this.OnLogoutInteract();
    }
};
SessionManager = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_2__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_5__.INotification)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_ITimer__WEBPACK_IMPORTED_MODULE_4__.ITimer)),
    __param(3, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_ITimer__WEBPACK_IMPORTED_MODULE_4__.ITimer)),
    __param(4, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_8__.IUseCaseExecutor)),
    __param(5, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IDomHelper__WEBPACK_IMPORTED_MODULE_1__.IDomHelper)),
    __param(6, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IThrotler__WEBPACK_IMPORTED_MODULE_3__.IThrottler))
], SessionManager);



/***/ }),

/***/ "./src/application/objects/sidebarManager.ts":
/*!***************************************************!*\
  !*** ./src/application/objects/sidebarManager.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarManager": () => (/* binding */ SidebarManager)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_presentation_IAsyncComponentCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/presentation/IAsyncComponentCreator */ "./src/domain/presentation/IAsyncComponentCreator.ts");
/* harmony import */ var _domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/viewModel/IViewModel */ "./src/domain/viewModel/IViewModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let SidebarManager = class SidebarManager {
    constructor(viewModel = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_2__.IViewModel), asyncCompCreator = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_presentation_IAsyncComponentCreator__WEBPACK_IMPORTED_MODULE_1__.IAsyncComponentCreator)) {
        this.viewModel = viewModel;
        this.asyncCompCreator = asyncCompCreator;
        this.components = {};
    }
    getui() {
        return this.viewModel.studio.ui;
    }
    show(sidebarComponent) {
        let sidebar = this.getui().sidebar;
        sidebar.componentPath = sidebarComponent;
        let sidebarComp = this.components[sidebarComponent];
        if (!sidebarComp) {
            sidebarComp = this.components[sidebarComponent] = this.asyncCompCreator.createSidebarComponent(sidebarComponent);
        }
        sidebar.component = sidebarComp;
    }
    hide() {
        const ui = this.getui();
        ui.sidebar = { left: ui.sidebar.left };
    }
    reset() {
        this.components = {};
    }
};
SidebarManager = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_2__.IViewModel)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_IAsyncComponentCreator__WEBPACK_IMPORTED_MODULE_1__.IAsyncComponentCreator))
], SidebarManager);



/***/ }),

/***/ "./src/application/startUp.ts":
/*!************************************!*\
  !*** ./src/application/startUp.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appStartUp": () => (/* binding */ appStartUp)
/* harmony export */ });
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
/* harmony import */ var _viewModel_viewModelManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewModel/viewModelManager */ "./src/application/viewModel/viewModelManager.ts");
/* harmony import */ var _domain_useCase_ICreateModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/useCase/ICreateModule */ "./src/domain/useCase/ICreateModule.ts");
/* harmony import */ var _useCases_createModuleImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useCases/createModuleImpl */ "./src/application/useCases/createModuleImpl.ts");
/* harmony import */ var _useCases_useCaseExecutorImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useCases/useCaseExecutorImpl */ "./src/application/useCases/useCaseExecutorImpl.ts");
/* harmony import */ var _domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domain/useCase/IUseCaseExecutor */ "./src/domain/useCase/IUseCaseExecutor.ts");
/* harmony import */ var _useCases_createModelImpl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useCases/createModelImpl */ "./src/application/useCases/createModelImpl.ts");
/* harmony import */ var _domain_useCase_ICreateModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../domain/useCase/ICreateModel */ "./src/domain/useCase/ICreateModel.ts");
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_useCase_IGetUserDomains__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../domain/useCase/IGetUserDomains */ "./src/domain/useCase/IGetUserDomains.ts");
/* harmony import */ var _domain_useCase_ILogin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../domain/useCase/ILogin */ "./src/domain/useCase/ILogin.ts");
/* harmony import */ var _useCases_getUserDomainsImpl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useCases/getUserDomainsImpl */ "./src/application/useCases/getUserDomainsImpl.ts");
/* harmony import */ var _useCases_loginImpl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useCases/loginImpl */ "./src/application/useCases/loginImpl.ts");
/* harmony import */ var _domain_useCase_IListApplications__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../domain/useCase/IListApplications */ "./src/domain/useCase/IListApplications.ts");
/* harmony import */ var _useCases_ListApplicationsImpl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./useCases/ListApplicationsImpl */ "./src/application/useCases/ListApplicationsImpl.ts");
/* harmony import */ var _domain_useCase_IGetApplicationDetails__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../domain/useCase/IGetApplicationDetails */ "./src/domain/useCase/IGetApplicationDetails.ts");
/* harmony import */ var _useCases_GetApplicationDetailsImpl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./useCases/GetApplicationDetailsImpl */ "./src/application/useCases/GetApplicationDetailsImpl.ts");
/* harmony import */ var _domain_infrastructure_IConfig__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../domain/infrastructure/IConfig */ "./src/domain/infrastructure/IConfig.ts");
/* harmony import */ var _domain_useCase_ILogout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../domain/useCase/ILogout */ "./src/domain/useCase/ILogout.ts");
/* harmony import */ var _useCases_logoutImpl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./useCases/logoutImpl */ "./src/application/useCases/logoutImpl.ts");
/* harmony import */ var _useCases_timedOutImpl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./useCases/timedOutImpl */ "./src/application/useCases/timedOutImpl.ts");
/* harmony import */ var _domain_useCase_ITimedOut__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../domain/useCase/ITimedOut */ "./src/domain/useCase/ITimedOut.ts");
/* harmony import */ var _domain_useCase_ICheckLogin__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../domain/useCase/ICheckLogin */ "./src/domain/useCase/ICheckLogin.ts");
/* harmony import */ var _useCases_checkLoginImpl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./useCases/checkLoginImpl */ "./src/application/useCases/checkLoginImpl.ts");
/* harmony import */ var _domain_useCase_IInitStudio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../domain/useCase/IInitStudio */ "./src/domain/useCase/IInitStudio.ts");
/* harmony import */ var _useCases_initStudioImpl__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./useCases/initStudioImpl */ "./src/application/useCases/initStudioImpl.ts");
/* harmony import */ var _domain_useCase_IRestoreUser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../domain/useCase/IRestoreUser */ "./src/domain/useCase/IRestoreUser.ts");
/* harmony import */ var _useCases_restoreUserImpl__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./useCases/restoreUserImpl */ "./src/application/useCases/restoreUserImpl.ts");
/* harmony import */ var _domain_objects_IEditorManager__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../domain/objects/IEditorManager */ "./src/domain/objects/IEditorManager.ts");
/* harmony import */ var _objects_editorManager__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./objects/editorManager */ "./src/application/objects/editorManager.ts");
/* harmony import */ var _domain_useCase_ICreateApplication__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../domain/useCase/ICreateApplication */ "./src/domain/useCase/ICreateApplication.ts");
/* harmony import */ var _useCases_createApplicationImpl__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./useCases/createApplicationImpl */ "./src/application/useCases/createApplicationImpl.ts");
/* harmony import */ var _domain_useCase_IDeleteApplication__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../domain/useCase/IDeleteApplication */ "./src/domain/useCase/IDeleteApplication.ts");
/* harmony import */ var _useCases_deleteApplicationImpl__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./useCases/deleteApplicationImpl */ "./src/application/useCases/deleteApplicationImpl.ts");
/* harmony import */ var _domain_useCase_IUpdateApplication__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../domain/useCase/IUpdateApplication */ "./src/domain/useCase/IUpdateApplication.ts");
/* harmony import */ var _useCases_updateApplicationImpl__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./useCases/updateApplicationImpl */ "./src/application/useCases/updateApplicationImpl.ts");
/* harmony import */ var _domain_useCase_IDeleteModule__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../domain/useCase/IDeleteModule */ "./src/domain/useCase/IDeleteModule.ts");
/* harmony import */ var _useCases_deleteModuleImpl__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./useCases/deleteModuleImpl */ "./src/application/useCases/deleteModuleImpl.ts");
/* harmony import */ var _domain_useCase_IDeleteModel__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../domain/useCase/IDeleteModel */ "./src/domain/useCase/IDeleteModel.ts");
/* harmony import */ var _useCases_deleteModelImpl__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./useCases/deleteModelImpl */ "./src/application/useCases/deleteModelImpl.ts");
/* harmony import */ var _domain_useCase_IUpdateModule__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../domain/useCase/IUpdateModule */ "./src/domain/useCase/IUpdateModule.ts");
/* harmony import */ var _useCases_updateModuleImpl__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./useCases/updateModuleImpl */ "./src/application/useCases/updateModuleImpl.ts");
/* harmony import */ var _domain_useCase_IGetExportTypes__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../domain/useCase/IGetExportTypes */ "./src/domain/useCase/IGetExportTypes.ts");
/* harmony import */ var _useCases_getExportTypesImpl__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./useCases/getExportTypesImpl */ "./src/application/useCases/getExportTypesImpl.ts");
/* harmony import */ var _domain_useCase_IGetExportSelectionData__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../domain/useCase/IGetExportSelectionData */ "./src/domain/useCase/IGetExportSelectionData.ts");
/* harmony import */ var _useCases_getExportSelectionDataImpl__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./useCases/getExportSelectionDataImpl */ "./src/application/useCases/getExportSelectionDataImpl.ts");
/* harmony import */ var _domain_useCase_ICreateExportJob__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../domain/useCase/ICreateExportJob */ "./src/domain/useCase/ICreateExportJob.ts");
/* harmony import */ var _useCases_createExportJobImpl__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./useCases/createExportJobImpl */ "./src/application/useCases/createExportJobImpl.ts");
/* harmony import */ var _domain_useCase_IListModelVersions__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../domain/useCase/IListModelVersions */ "./src/domain/useCase/IListModelVersions.ts");
/* harmony import */ var _useCases_listModelVersionsImpl__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./useCases/listModelVersionsImpl */ "./src/application/useCases/listModelVersionsImpl.ts");
/* harmony import */ var _domain_objects_ISidebarManager__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../domain/objects/ISidebarManager */ "./src/domain/objects/ISidebarManager.ts");
/* harmony import */ var _objects_sidebarManager__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./objects/sidebarManager */ "./src/application/objects/sidebarManager.ts");
/* harmony import */ var _domain_presentation_IViewModelProxifier__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../domain/presentation/IViewModelProxifier */ "./src/domain/presentation/IViewModelProxifier.ts");
/* harmony import */ var _domain_useCase_IListExportJobs__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../domain/useCase/IListExportJobs */ "./src/domain/useCase/IListExportJobs.ts");
/* harmony import */ var _useCases_listExportJobsImpl__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./useCases/listExportJobsImpl */ "./src/application/useCases/listExportJobsImpl.ts");
/* harmony import */ var _domain_useCase_IListExportJobSteps__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../domain/useCase/IListExportJobSteps */ "./src/domain/useCase/IListExportJobSteps.ts");
/* harmony import */ var _useCases_listExportJobStepsImpl__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./useCases/listExportJobStepsImpl */ "./src/application/useCases/listExportJobStepsImpl.ts");
/* harmony import */ var _domain_useCase_IListExportJobStepLogs__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../domain/useCase/IListExportJobStepLogs */ "./src/domain/useCase/IListExportJobStepLogs.ts");
/* harmony import */ var _useCases_listExportJobStepLogsImpl__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./useCases/listExportJobStepLogsImpl */ "./src/application/useCases/listExportJobStepLogsImpl.ts");
/* harmony import */ var _domain_useCase_IListExportJobArtifacts__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../domain/useCase/IListExportJobArtifacts */ "./src/domain/useCase/IListExportJobArtifacts.ts");
/* harmony import */ var _useCases_listExportJobArtifactsImpl__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./useCases/listExportJobArtifactsImpl */ "./src/application/useCases/listExportJobArtifactsImpl.ts");
/* harmony import */ var _domain_useCase_IGetExportJobArtifact__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../domain/useCase/IGetExportJobArtifact */ "./src/domain/useCase/IGetExportJobArtifact.ts");
/* harmony import */ var _useCases_getExportJobArtifactImpl__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./useCases/getExportJobArtifactImpl */ "./src/application/useCases/getExportJobArtifactImpl.ts");
/* harmony import */ var _domain_useCase_IFileExplorer__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../domain/useCase/IFileExplorer */ "./src/domain/useCase/IFileExplorer.ts");
/* harmony import */ var _useCases_fileExplorer__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./useCases/fileExplorer */ "./src/application/useCases/fileExplorer.ts");
/* harmony import */ var _domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../domain/useCase/IStudio */ "./src/domain/useCase/IStudio.ts");
/* harmony import */ var _useCases_studio__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./useCases/studio */ "./src/application/useCases/studio.ts");
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! tsyringe */ "./node_modules/tsyringe/dist/esm5/index.js");
/* harmony import */ var _domain_objects_ISesionManager__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../domain/objects/ISesionManager */ "./src/domain/objects/ISesionManager.ts");
/* harmony import */ var _objects_sessionManager__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./objects/sessionManager */ "./src/application/objects/sessionManager.ts");
/* harmony import */ var _domain_useCase_IListModelHistories__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../domain/useCase/IListModelHistories */ "./src/domain/useCase/IListModelHistories.ts");
/* harmony import */ var _useCases_listModelHistoriesImpl__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./useCases/listModelHistoriesImpl */ "./src/application/useCases/listModelHistoriesImpl.ts");
/* harmony import */ var _domain_objects_editors_IQuickEditor__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ../domain/objects/editors/IQuickEditor */ "./src/domain/objects/editors/IQuickEditor.ts");
/* harmony import */ var _objects_editors_quickEditorImpl__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./objects/editors/quickEditorImpl */ "./src/application/objects/editors/quickEditorImpl.ts");
/* harmony import */ var _domain_objects_editors_processEditor_IProcessEditor__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ../domain/objects/editors/processEditor/IProcessEditor */ "./src/domain/objects/editors/processEditor/IProcessEditor.ts");
/* harmony import */ var _objects_editors_processEditorImpl__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./objects/editors/processEditorImpl */ "./src/application/objects/editors/processEditorImpl.ts");
/* harmony import */ var _domain_objects_editors_IEditor__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ../domain/objects/editors/IEditor */ "./src/domain/objects/editors/IEditor.ts");
/* harmony import */ var _domain_useCase_IAutoLogin__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ../domain/useCase/IAutoLogin */ "./src/domain/useCase/IAutoLogin.ts");
/* harmony import */ var _useCases_autoLogin__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./useCases/autoLogin */ "./src/application/useCases/autoLogin.ts");
/* harmony import */ var _objects_editors_processDesignEditorImpl__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./objects/editors/processDesignEditorImpl */ "./src/application/objects/editors/processDesignEditorImpl.ts");
/* harmony import */ var _domain_objects_editors_IProcessDesignEditor__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ../domain/objects/editors/IProcessDesignEditor */ "./src/domain/objects/editors/IProcessDesignEditor.ts");
/* harmony import */ var _objects_editors_entityDesignerEditorImpl__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./objects/editors/entityDesignerEditorImpl */ "./src/application/objects/editors/entityDesignerEditorImpl.ts");
/* harmony import */ var _domain_objects_editors_IEntityDesignerEditor__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ../domain/objects/editors/IEntityDesignerEditor */ "./src/domain/objects/editors/IEntityDesignerEditor.ts");
/* harmony import */ var _domain_useCase_IProcessEditorUtil__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ../domain/useCase/IProcessEditorUtil */ "./src/domain/useCase/IProcessEditorUtil.ts");
/* harmony import */ var _useCases_processEditorUtilImpl__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./useCases/processEditorUtilImpl */ "./src/application/useCases/processEditorUtilImpl.ts");
/* harmony import */ var _domain_useCase_IObjectUseCase__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ../domain/useCase/IObjectUseCase */ "./src/domain/useCase/IObjectUseCase.ts");
/* harmony import */ var _useCases_objectUseCaseImpl__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./useCases/objectUseCaseImpl */ "./src/application/useCases/objectUseCaseImpl.ts");























































































const appStartUp = {
    async register(container) {
        container.register(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_0__.IViewModelManager, _viewModel_viewModelManager__WEBPACK_IMPORTED_MODULE_1__.ViewModelManager);
        //useCases
        container.register(_domain_useCase_ICreateModule__WEBPACK_IMPORTED_MODULE_2__.ICreateModule, _useCases_createModuleImpl__WEBPACK_IMPORTED_MODULE_3__.CreateModuleImpl);
        container.register(_domain_useCase_ICreateModel__WEBPACK_IMPORTED_MODULE_7__.ICreateModel, _useCases_createModelImpl__WEBPACK_IMPORTED_MODULE_6__.CreateModelImpl);
        container.register(_domain_useCase_IGetUserDomains__WEBPACK_IMPORTED_MODULE_9__.IGetUserDomains, _useCases_getUserDomainsImpl__WEBPACK_IMPORTED_MODULE_11__.GetUserDomainsImpl);
        container.register(_domain_useCase_ILogin__WEBPACK_IMPORTED_MODULE_10__.ILogin, _useCases_loginImpl__WEBPACK_IMPORTED_MODULE_12__.LoginImpl);
        container.register(_domain_useCase_IListApplications__WEBPACK_IMPORTED_MODULE_13__.IListApplications, _useCases_ListApplicationsImpl__WEBPACK_IMPORTED_MODULE_14__.ListApplicationsImpl);
        container.register(_domain_useCase_IGetApplicationDetails__WEBPACK_IMPORTED_MODULE_15__.IGetApplicationDetails, _useCases_GetApplicationDetailsImpl__WEBPACK_IMPORTED_MODULE_16__.GetApplicationDetailsImpl);
        container.register(_domain_useCase_ILogout__WEBPACK_IMPORTED_MODULE_18__.ILogout, _useCases_logoutImpl__WEBPACK_IMPORTED_MODULE_19__.LogoutImpl);
        container.register(_domain_useCase_ITimedOut__WEBPACK_IMPORTED_MODULE_21__.ITimedOut, _useCases_timedOutImpl__WEBPACK_IMPORTED_MODULE_20__.TimedOutImpl);
        container.register(_domain_useCase_ICheckLogin__WEBPACK_IMPORTED_MODULE_22__.ICheckLogin, _useCases_checkLoginImpl__WEBPACK_IMPORTED_MODULE_23__.CheckLoginImpl);
        container.register(_domain_useCase_IInitStudio__WEBPACK_IMPORTED_MODULE_24__.IInitStudio, _useCases_initStudioImpl__WEBPACK_IMPORTED_MODULE_25__.InitStudioImpl);
        container.register(_domain_useCase_IRestoreUser__WEBPACK_IMPORTED_MODULE_26__.IRestoreUser, _useCases_restoreUserImpl__WEBPACK_IMPORTED_MODULE_27__.RestoreUserImpl);
        container.register(_domain_useCase_ICreateApplication__WEBPACK_IMPORTED_MODULE_30__.ICreateApplication, _useCases_createApplicationImpl__WEBPACK_IMPORTED_MODULE_31__.CreateApplicationImpl);
        container.register(_domain_useCase_IDeleteApplication__WEBPACK_IMPORTED_MODULE_32__.IDeleteApplication, _useCases_deleteApplicationImpl__WEBPACK_IMPORTED_MODULE_33__.DeleteApplicationImpl);
        container.register(_domain_useCase_IUpdateApplication__WEBPACK_IMPORTED_MODULE_34__.IUpdateApplication, _useCases_updateApplicationImpl__WEBPACK_IMPORTED_MODULE_35__.UpdateApplicationImpl);
        container.register(_domain_useCase_IDeleteModule__WEBPACK_IMPORTED_MODULE_36__.IDeleteModule, _useCases_deleteModuleImpl__WEBPACK_IMPORTED_MODULE_37__.DeleteModuleImpl);
        container.register(_domain_useCase_IDeleteModel__WEBPACK_IMPORTED_MODULE_38__.IDeleteModel, _useCases_deleteModelImpl__WEBPACK_IMPORTED_MODULE_39__.DeleteModelImpl);
        container.register(_domain_useCase_IObjectUseCase__WEBPACK_IMPORTED_MODULE_85__.IObjectUseCase, _useCases_objectUseCaseImpl__WEBPACK_IMPORTED_MODULE_86__.ObjectUseCaseImpl);
        container.register(_domain_useCase_IUpdateModule__WEBPACK_IMPORTED_MODULE_40__.IUpdateModule, _useCases_updateModuleImpl__WEBPACK_IMPORTED_MODULE_41__.UpdateModuleImpl);
        container.register(_domain_useCase_IGetExportTypes__WEBPACK_IMPORTED_MODULE_42__.IGetExportTypes, _useCases_getExportTypesImpl__WEBPACK_IMPORTED_MODULE_43__.GetExportTypesImpl);
        container.register(_domain_useCase_IGetExportSelectionData__WEBPACK_IMPORTED_MODULE_44__.IGetExportSelectionData, _useCases_getExportSelectionDataImpl__WEBPACK_IMPORTED_MODULE_45__.GetExportSelectionDataImpl);
        container.register(_domain_useCase_ICreateExportJob__WEBPACK_IMPORTED_MODULE_46__.ICreateExportJob, _useCases_createExportJobImpl__WEBPACK_IMPORTED_MODULE_47__.CreateExportJobImpl);
        container.register(_domain_useCase_IListModelVersions__WEBPACK_IMPORTED_MODULE_48__.IListModelVersions, _useCases_listModelVersionsImpl__WEBPACK_IMPORTED_MODULE_49__.ListModelVersionsImpl);
        container.register(_domain_useCase_IListExportJobs__WEBPACK_IMPORTED_MODULE_53__.IListExportJobs, _useCases_listExportJobsImpl__WEBPACK_IMPORTED_MODULE_54__.ListExportJobsImpl);
        container.register(_domain_useCase_IListExportJobSteps__WEBPACK_IMPORTED_MODULE_55__.IListExportJobSteps, _useCases_listExportJobStepsImpl__WEBPACK_IMPORTED_MODULE_56__.ListExportJobStepsImpl);
        container.register(_domain_useCase_IListExportJobStepLogs__WEBPACK_IMPORTED_MODULE_57__.IListExportJobStepLogs, _useCases_listExportJobStepLogsImpl__WEBPACK_IMPORTED_MODULE_58__.ListExportJobStepLogsImpl);
        container.register(_domain_useCase_IListExportJobArtifacts__WEBPACK_IMPORTED_MODULE_59__.IListExportJobArtifacts, _useCases_listExportJobArtifactsImpl__WEBPACK_IMPORTED_MODULE_60__.ListExportJobArtifactsImpl);
        container.register(_domain_useCase_IGetExportJobArtifact__WEBPACK_IMPORTED_MODULE_61__.IGetExportJobArtifact, _useCases_getExportJobArtifactImpl__WEBPACK_IMPORTED_MODULE_62__.GetExportJobArtifactImpl);
        container.register(_domain_useCase_IFileExplorer__WEBPACK_IMPORTED_MODULE_63__.IFileExplorer, { useToken: (0,tsyringe__WEBPACK_IMPORTED_MODULE_67__.delay)(() => _useCases_fileExplorer__WEBPACK_IMPORTED_MODULE_64__.FileExplorer) });
        container.register(_domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_65__.IStudio, _useCases_studio__WEBPACK_IMPORTED_MODULE_66__.Studio);
        container.register(_domain_useCase_IListModelHistories__WEBPACK_IMPORTED_MODULE_70__.IListModelHistories, _useCases_listModelHistoriesImpl__WEBPACK_IMPORTED_MODULE_71__.ListModelHistoriesImpl);
        container.register(_domain_useCase_IAutoLogin__WEBPACK_IMPORTED_MODULE_77__.IAutoLogin, _useCases_autoLogin__WEBPACK_IMPORTED_MODULE_78__.AutoLogin);
        //!!!DO_NOT_DELETE:THIS_LINE_FOR_AUTO_GENERATION:ADD_USECASE!!!
        //UseCase Executor
        container.register(_domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_5__.IUseCaseExecutor, _useCases_useCaseExecutorImpl__WEBPACK_IMPORTED_MODULE_4__.UseCaseExecutorImpl);
        //Objects
        await (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_8__.delayTillResolve)([_domain_presentation_IViewModelProxifier__WEBPACK_IMPORTED_MODULE_52__.IViewModelProxifier], () => {
            _viewModel_viewModelManager__WEBPACK_IMPORTED_MODULE_1__.ViewModelManager.reset();
            const quickEditor = new _objects_editors_quickEditorImpl__WEBPACK_IMPORTED_MODULE_73__.QuickEditorImpl();
            const processEditor = new _objects_editors_processEditorImpl__WEBPACK_IMPORTED_MODULE_75__.ProcessEditorImpl();
            const processDesignEditor = new _objects_editors_processDesignEditorImpl__WEBPACK_IMPORTED_MODULE_79__.ProcessDesignEditorImpl();
            const entityDesignerEditor = new _objects_editors_entityDesignerEditorImpl__WEBPACK_IMPORTED_MODULE_81__.EntityDesignerEditorImpl();
            container.registerInstance(_domain_objects_editors_IQuickEditor__WEBPACK_IMPORTED_MODULE_72__.IQuickEditor, quickEditor);
            container.registerInstance(_domain_objects_editors_processEditor_IProcessEditor__WEBPACK_IMPORTED_MODULE_74__.IProcessEditor, processEditor);
            container.registerInstance(_domain_objects_editors_IProcessDesignEditor__WEBPACK_IMPORTED_MODULE_80__.IProcessDesignEditor, processDesignEditor);
            container.registerInstance(_domain_objects_editors_IEntityDesignerEditor__WEBPACK_IMPORTED_MODULE_82__.IEntityDesignerEditor, entityDesignerEditor);
            container.registerInstance(_domain_objects_editors_IEditor__WEBPACK_IMPORTED_MODULE_76__.IEditor, quickEditor);
            container.registerInstance(_domain_objects_editors_IEditor__WEBPACK_IMPORTED_MODULE_76__.IEditor, processEditor);
            container.registerInstance(_domain_objects_editors_IEditor__WEBPACK_IMPORTED_MODULE_76__.IEditor, processDesignEditor);
            container.registerInstance(_domain_objects_editors_IEditor__WEBPACK_IMPORTED_MODULE_76__.IEditor, entityDesignerEditor);
            container.registerInstance(_domain_objects_IEditorManager__WEBPACK_IMPORTED_MODULE_28__.IEditorManager, new _objects_editorManager__WEBPACK_IMPORTED_MODULE_29__.EditorManager());
            container.registerInstance(_domain_objects_ISidebarManager__WEBPACK_IMPORTED_MODULE_50__.ISidebarManager, new _objects_sidebarManager__WEBPACK_IMPORTED_MODULE_51__.SidebarManager());
            container.registerInstance(_domain_objects_ISesionManager__WEBPACK_IMPORTED_MODULE_68__.ISessionManager, new _objects_sessionManager__WEBPACK_IMPORTED_MODULE_69__.SessionManager());
            container.registerInstance(_domain_useCase_IProcessEditorUtil__WEBPACK_IMPORTED_MODULE_83__.IProcessEditorUtil, new _useCases_processEditorUtilImpl__WEBPACK_IMPORTED_MODULE_84__.ProcessEditorUtil());
        });
        await (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_8__.delayWithResolve)(_domain_infrastructure_IConfig__WEBPACK_IMPORTED_MODULE_17__.IConfig, config => {
            if (config.getValue("debugging")) {
                const vmm = container.resolve(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_0__.IViewModelManager);
                const managers = {
                    mm: container.resolve(_domain_objects_IEditorManager__WEBPACK_IMPORTED_MODULE_28__.IEditorManager),
                    sbm: container.resolve(_domain_objects_ISidebarManager__WEBPACK_IMPORTED_MODULE_50__.ISidebarManager),
                    sm: container.resolve(_domain_objects_ISesionManager__WEBPACK_IMPORTED_MODULE_68__.ISessionManager),
                };
                window._dev_22_0_22_0_22 = { container, vmm, managers }; // 18.02.2022 -> 22.02.2022 -> 22 0 22 0 22 :)
            }
        });
    }
};


/***/ }),

/***/ "./src/application/useCases/GetApplicationDetailsImpl.ts":
/*!***************************************************************!*\
  !*** ./src/application/useCases/GetApplicationDetailsImpl.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetApplicationDetailsImpl": () => (/* binding */ GetApplicationDetailsImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let GetApplicationDetailsImpl = class GetApplicationDetailsImpl {
    constructor(qcloudApi, viewModelManager) {
        this.qcloudApi = qcloudApi;
        this.viewModelManager = viewModelManager;
    }
    async execute(param) {
        const details = await this.qcloudApi.getApplicationDetails(param.appID);
        this.viewModelManager.setApplicationDetails(param.appID, details);
    }
};
GetApplicationDetailsImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_2__.IViewModelManager))
], GetApplicationDetailsImpl);



/***/ }),

/***/ "./src/application/useCases/ListApplicationsImpl.ts":
/*!**********************************************************!*\
  !*** ./src/application/useCases/ListApplicationsImpl.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListApplicationsImpl": () => (/* binding */ ListApplicationsImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let ListApplicationsImpl = class ListApplicationsImpl {
    constructor(qcloudApi, viewModelManager) {
        this.qcloudApi = qcloudApi;
        this.viewModelManager = viewModelManager;
    }
    async execute(param) {
        const apps = await this.qcloudApi.listApplications(param.getDetails);
        this.viewModelManager.setApplicationList(apps);
        return apps;
    }
};
ListApplicationsImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_2__.IViewModelManager))
], ListApplicationsImpl);



/***/ }),

/***/ "./src/application/useCases/autoLogin.ts":
/*!***********************************************!*\
  !*** ./src/application/useCases/autoLogin.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoLogin": () => (/* binding */ AutoLogin)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/viewModel/IViewModel */ "./src/domain/viewModel/IViewModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let AutoLogin = class AutoLogin {
    constructor(viewModel) {
        this.viewModel = viewModel;
    }
    gatherAutoLoginData() {
        return location.search.replace(/\?/g, "&").split("&")
            .map(item => { const dat = item.split("="); return { key: dat[0], value: dat[1] }; })
            .reduce((prev, item) => { prev[item.key] = item.value; return prev; }, {});
    }
    trySetDomain(autologinData) {
        var _a;
        if (!autologinData.domain) {
            return;
        }
        const autoDomain = (_a = this.viewModel.user) === null || _a === void 0 ? void 0 : _a.domains.find(domain => domain.name == autologinData.domain);
        if (autoDomain) {
            this.viewModel.user.selectedDomain = autoDomain;
        }
    }
    allSystemsGo(autoLoginData) {
        return autoLoginData.domain && autoLoginData.email && autoLoginData.pass ? true : false;
    }
};
AutoLogin = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_1__.IViewModel))
], AutoLogin);



/***/ }),

/***/ "./src/application/useCases/checkLoginImpl.ts":
/*!****************************************************!*\
  !*** ./src/application/useCases/checkLoginImpl.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckLoginImpl": () => (/* binding */ CheckLoginImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_model_shellError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/model/shellError */ "./src/domain/model/shellError.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let CheckLoginImpl = class CheckLoginImpl {
    constructor(viewModelManager) {
        this.viewModelManager = viewModelManager;
    }
    async execute(param) {
        switch (param.via) {
            case "client": return this.viewModelManager.userLoggedIn;
            case "server": throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_1__.notImplementedError)("CheckLogin via server");
        }
    }
};
CheckLoginImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_2__.IViewModelManager))
], CheckLoginImpl);



/***/ }),

/***/ "./src/application/useCases/createApplicationImpl.ts":
/*!***********************************************************!*\
  !*** ./src/application/useCases/createApplicationImpl.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateApplicationImpl": () => (/* binding */ CreateApplicationImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/model/shellError */ "./src/domain/model/shellError.ts");
/* harmony import */ var _domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/presentation/INotification */ "./src/domain/presentation/INotification.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





let CreateApplicationImpl = class CreateApplicationImpl {
    constructor(qcloudApi, viewModelManager, notification) {
        this.qcloudApi = qcloudApi;
        this.viewModelManager = viewModelManager;
        this.notification = notification;
    }
    async execute(param) {
        const name = param.name;
        if (this.viewModelManager.findApplication(name)) {
            throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__.createError)({ message: `application: ${name} already exists`, type: "business" });
        }
        this.application = {
            ID: "",
            synced: false,
            objectType: "application",
            name,
            description: param.description,
            color: param.color,
            logo: param.logo,
            deployParameters: param.deployParameters,
            details: { entityCount: 0, moduleCount: 0, pageCount: 0, pageTemplateCount: 0, processCount: 0, templateCount: 0 },
        };
        this.application = this.viewModelManager.applicationCreated(this.application);
        const appToCreate = { name, description: param.description, color: param.color, logo: param.logo, deployParameters: param.deployParameters };
        const createdApplication = await this.qcloudApi.createApplication(appToCreate);
        this.notification.showNotification({ text: `Application '${name}' created successfully`, type: "success" });
        this.application.ID = createdApplication.ID;
        this.application.synced = true;
        return this.application;
    }
    async fail(err) {
        if (!this.application) {
            return;
        }
        this.viewModelManager.removeApplication(this.application);
    }
};
CreateApplicationImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_4__.IViewModelManager)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_3__.INotification))
], CreateApplicationImpl);



/***/ }),

/***/ "./src/application/useCases/createExportJobImpl.ts":
/*!*********************************************************!*\
  !*** ./src/application/useCases/createExportJobImpl.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateExportJobImpl": () => (/* binding */ CreateExportJobImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/model/shellError */ "./src/domain/model/shellError.ts");
/* harmony import */ var _domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/presentation/INotification */ "./src/domain/presentation/INotification.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





let CreateExportJobImpl = class CreateExportJobImpl {
    constructor(qcloudApi, viewModelManager, notification) {
        this.qcloudApi = qcloudApi;
        this.viewModelManager = viewModelManager;
        this.notification = notification;
    }
    async execute(param) {
        if (!(param.app && param.exportType && param.selectionData)) {
            throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__.createError)({ message: "'app', 'exportType', and 'selectionData' information required!", type: "business" });
        }
        const job = await this.qcloudApi.createExportJob(param.app, param.exportType, param.selectionData);
        this.viewModelManager.exportJobCreated(job);
        this.notification.showNotification({ text: `Export job created successfully. ID: ${job.jobID}`, type: "success" });
    }
};
CreateExportJobImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_4__.IViewModelManager)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_3__.INotification))
], CreateExportJobImpl);



/***/ }),

/***/ "./src/application/useCases/createModelImpl.ts":
/*!*****************************************************!*\
  !*** ./src/application/useCases/createModelImpl.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateModelImpl": () => (/* binding */ CreateModelImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/model/shellError */ "./src/domain/model/shellError.ts");
/* harmony import */ var _domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/presentation/INotification */ "./src/domain/presentation/INotification.ts");
/* harmony import */ var _domain_useCase_IFileExplorer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/useCase/IFileExplorer */ "./src/domain/useCase/IFileExplorer.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






let CreateModelImpl = class CreateModelImpl {
    constructor(qcloudApi, viewModelManager, fileExplorer, notification) {
        this.qcloudApi = qcloudApi;
        this.viewModelManager = viewModelManager;
        this.fileExplorer = fileExplorer;
        this.notification = notification;
    }
    async execute(param) {
        const parentObject = this.viewModelManager.findObject(param.parentObjectId);
        if (!parentObject) {
            throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__.createError)({ message: `parent object can't be found: ${param.parentObjectId}`, type: "technical" });
        }
        switch (parentObject.objectType) {
            default: throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__.createError)({ message: `${parentObject.objectType} can not be parent`, type: "technical" });
            case "application":
            case "folder":
            case "module": break;
        }
        this.model = {
            name: param.name, ID: "", parent: parentObject, objectType: "model", synced: false,
            modelType: param.modelType, modelBody: param.modelBody, additionals: param.modelAdditionals,
        };
        this.viewModelManager.modelCreated(this.model);
        const executeRetval = await this.qcloudApi.createModel({
            name: this.model.name,
            parentObject: this.model.parent,
            modelBody: this.model.modelBody,
            modelType: param.modelType,
            modelAdditionals: param.modelAdditionals
        });
        this.model.ID = executeRetval.ID;
        this.model.synced = true;
        //This line should be here while the "synced" feature doesn't work on "fileExplorer".
        //Then move it before the "this.qcloudApi.createModel" line.
        this.fileExplorer.addNewItem(this.model, parentObject.ID);
        this.notification.showNotification({ text: `${this.model.name} created successfully`, type: "success" });
        return this.model;
    }
    async fail(err) {
        if (!this.model) {
            return;
        }
        this.viewModelManager.removeModel(this.model);
    }
};
CreateModelImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_5__.IViewModelManager)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_useCase_IFileExplorer__WEBPACK_IMPORTED_MODULE_4__.IFileExplorer)),
    __param(3, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_3__.INotification))
], CreateModelImpl);



/***/ }),

/***/ "./src/application/useCases/createModuleImpl.ts":
/*!******************************************************!*\
  !*** ./src/application/useCases/createModuleImpl.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateModuleImpl": () => (/* binding */ CreateModuleImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/presentation/INotification */ "./src/domain/presentation/INotification.ts");
/* harmony import */ var _domain_useCase_IFileExplorer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/useCase/IFileExplorer */ "./src/domain/useCase/IFileExplorer.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





let CreateModuleImpl = class CreateModuleImpl {
    constructor(qcloudApi, viewModelManager, notification, fileExplorer) {
        this.qcloudApi = qcloudApi;
        this.viewModelManager = viewModelManager;
        this.notification = notification;
        this.fileExplorer = fileExplorer;
    }
    async execute(param) {
        const name = param.name;
        this.module = { ID: "", synced: false, objectType: "module", name, children: [] };
        this.viewModelManager.moduleCreated(this.module);
        const createdModule = await this.qcloudApi.createModule(name, param.ownerProjects);
        this.module.ID = createdModule.ID;
        this.module.synced = true;
        this.fileExplorer.addNewItem(this.module);
        this.notification.showNotification({ text: `Module '${name}' created successfully`, type: "success" });
        return this.module;
    }
    async fail(err) {
        if (!this.module) {
            return;
        }
        this.viewModelManager.removeModule(this.module);
    }
};
CreateModuleImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_4__.IViewModelManager)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_2__.INotification)),
    __param(3, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_useCase_IFileExplorer__WEBPACK_IMPORTED_MODULE_3__.IFileExplorer))
], CreateModuleImpl);



/***/ }),

/***/ "./src/application/useCases/deleteApplicationImpl.ts":
/*!***********************************************************!*\
  !*** ./src/application/useCases/deleteApplicationImpl.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteApplicationImpl": () => (/* binding */ DeleteApplicationImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/presentation/INotification */ "./src/domain/presentation/INotification.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




let DeleteApplicationImpl = class DeleteApplicationImpl {
    constructor(qcloudApi, viewModelManager, notification) {
        this.qcloudApi = qcloudApi;
        this.viewModelManager = viewModelManager;
        this.notification = notification;
    }
    async execute(param) {
        const confirm = await this.notification.showConfirm({
            title: "Are you sure?", text: `The app '${param.name}' will be deleted permanently!`,
            type: "warning", approveText: "Delete", rejectText: "Cancel"
        });
        if (!confirm.approved) {
            return;
        }
        await this.qcloudApi.deleteApplication(param.ID, true);
        const application = this.viewModelManager.findObject(param.ID);
        this.viewModelManager.removeApplication(application);
        this.notification.showNotification({ text: `Application '${application.name}' deleted successfully`, type: "success" });
    }
};
DeleteApplicationImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_3__.IViewModelManager)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_2__.INotification))
], DeleteApplicationImpl);



/***/ }),

/***/ "./src/application/useCases/deleteModelImpl.ts":
/*!*****************************************************!*\
  !*** ./src/application/useCases/deleteModelImpl.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteModelImpl": () => (/* binding */ DeleteModelImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/presentation/INotification */ "./src/domain/presentation/INotification.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




let DeleteModelImpl = class DeleteModelImpl {
    constructor(qcloudApi, viewModelManager, notification) {
        this.qcloudApi = qcloudApi;
        this.viewModelManager = viewModelManager;
        this.notification = notification;
    }
    async execute(param) {
        const confirm = await this.notification.showConfirm({
            title: "Are you sure?", text: `'${param.name}' will be deleted permanently!`,
            type: "warning", approveText: "Delete", rejectText: "Cancel"
        });
        if (!confirm.approved) {
            return;
        }
        await this.qcloudApi.deleteModel(param.ID, true);
        const model = this.viewModelManager.findObject(param.ID);
        this.viewModelManager.removeModel(model);
        this.notification.showNotification({ text: `'${model.name}' deleted successfully`, type: "success" });
    }
};
DeleteModelImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_3__.IViewModelManager)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_2__.INotification))
], DeleteModelImpl);



/***/ }),

/***/ "./src/application/useCases/deleteModuleImpl.ts":
/*!******************************************************!*\
  !*** ./src/application/useCases/deleteModuleImpl.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteModuleImpl": () => (/* binding */ DeleteModuleImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/presentation/INotification */ "./src/domain/presentation/INotification.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




let DeleteModuleImpl = class DeleteModuleImpl {
    constructor(qcloudApi, viewModelManager, notification) {
        this.qcloudApi = qcloudApi;
        this.viewModelManager = viewModelManager;
        this.notification = notification;
    }
    async execute(param) {
        const confirm = await this.notification.showConfirm({
            title: "Are you sure?", text: `The module '${param.name}' will be deleted permanently!`,
            type: "warning", approveText: "Delete", rejectText: "Cancel"
        });
        if (!confirm.approved) {
            return;
        }
        await this.qcloudApi.deleteModule(param.ID, true);
        const module = this.viewModelManager.findObject(param.ID);
        this.viewModelManager.removeModule(module);
        this.notification.showNotification({ text: `Module '${module.name}' deleted successfully`, type: "success" });
    }
};
DeleteModuleImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_3__.IViewModelManager)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_2__.INotification))
], DeleteModuleImpl);



/***/ }),

/***/ "./src/application/useCases/fileExplorer.ts":
/*!**************************************************!*\
  !*** ./src/application/useCases/fileExplorer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileExplorer": () => (/* binding */ FileExplorer)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_presentation_IAsyncComponentCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/presentation/IAsyncComponentCreator */ "./src/domain/presentation/IAsyncComponentCreator.ts");
/* harmony import */ var _domain_presentation_IDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/presentation/IDialog */ "./src/domain/presentation/IDialog.ts");
/* harmony import */ var _domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/presentation/INotification */ "./src/domain/presentation/INotification.ts");
/* harmony import */ var _domain_presentation_ITreeView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../domain/presentation/ITreeView */ "./src/domain/presentation/ITreeView.ts");
/* harmony import */ var _domain_useCase_IObjectUseCase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../domain/useCase/IObjectUseCase */ "./src/domain/useCase/IObjectUseCase.ts");
/* harmony import */ var _domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../domain/useCase/IStudio */ "./src/domain/useCase/IStudio.ts");
/* harmony import */ var _domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../domain/useCase/IUseCaseExecutor */ "./src/domain/useCase/IUseCaseExecutor.ts");
/* harmony import */ var _domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../domain/viewModel/IViewModel */ "./src/domain/viewModel/IViewModel.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











let FileExplorer = class FileExplorer {
    constructor(qcloudApi, notification, viewModelManager, viewModel, executor, studio, dialog, compCreator, objectUseCase) {
        this.qcloudApi = qcloudApi;
        this.notification = notification;
        this.viewModelManager = viewModelManager;
        this.viewModel = viewModel;
        this.executor = executor;
        this.studio = studio;
        this.dialog = dialog;
        this.compCreator = compCreator;
        this.objectUseCase = objectUseCase;
    }
    get feTreeview() {
        if (!this._feTreeview) {
            this._feTreeview = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_presentation_ITreeView__WEBPACK_IMPORTED_MODULE_5__.ITreeViewInstances.FileExplorer);
        }
        return this._feTreeview;
    }
    convertToTreeItems(items, namedCompTreeItem, settingsTreeItem) {
        const converter = (items) => items.map(item => {
            const delAction = { type: "IActionSingleItem", name: "Del", selectCb: this.executor.wrap(() => this.onItemDelete(item), { loading: true }) };
            const treeItem = {
                id: item.ID, name: item.name,
                actions: [delAction],
            };
            switch (item.objectType) {
                case "folder":
                case "module":
                    treeItem.children = converter(item.children);
                    treeItem.actions.unshift({ type: "IActionSingleItem", name: "+Add", selectCb: this.executor.wrap(() => this.onNewItemSelect(item.ID, item.name, item.objectType), { loading: true }) });
                    treeItem.actions.unshift({ type: "IActionSingleItem", name: "Edit", selectCb: this.executor.wrap(() => this.onEditModule(item.name, item.ID), { loading: true }) });
                    return treeItem;
                case "model":
                    if (item.modelType == "namedComponent") {
                        namedCompTreeItem.children.push(treeItem);
                        return undefined;
                    } // until namedComp editor is moved, inside quick -> IDE
                    if (item.usageType == "appSettings") {
                        settingsTreeItem.children.push(treeItem);
                        return undefined;
                    } // until namedComp editor is moved, inside quick -> IDE
                    treeItem.cb = {
                        select: this.executor.wrap(() => this.onItemSelect(item), { loading: true }),
                    };
                    treeItem.actions.unshift({ type: "IActionSingleItem", name: "His", selectCb: this.executor.wrap(() => this.onShowHistories(item.name, item.ID), { loading: true }) });
                    treeItem.actions.push({
                        type: "IActionMenuItem", name: "...", children: [
                            { name: "aaa", selectCb: () => console.log("a click") },
                            { name: "b", selectCb: () => console.log("b click") },
                        ]
                    });
                    return treeItem;
            }
        }).filter((item) => item != undefined);
        const retVal = converter(items);
        return retVal;
    }
    addNewItem(item, parentId) {
        let namedCompTreeItem = this.feTreeview.getItem("001");
        let settingsTreeItem = this.feTreeview.getItem("002");
        const convertedItem = this.convertToTreeItems([item], namedCompTreeItem, settingsTreeItem);
        this.feTreeview.addItem(convertedItem, parentId);
    }
    createFileExplorerTreeView(rootDiv) {
        //TODO: Treeview.reset çağrılmalı. instance registration komple değişmeli.
        const feTreeview = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_presentation_ITreeView__WEBPACK_IMPORTED_MODULE_5__.ITreeView);
        _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container._registry._registryMap["delete"](_domain_presentation_ITreeView__WEBPACK_IMPORTED_MODULE_5__.ITreeViewInstances.FileExplorer);
        feTreeview.setup(rootDiv);
        _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.registerInstance(_domain_presentation_ITreeView__WEBPACK_IMPORTED_MODULE_5__.ITreeViewInstances.FileExplorer, feTreeview);
    }
    loadFileExplorer(rootDiv) {
        this.createFileExplorerTreeView(rootDiv);
        const namedCompTreeItem = { id: "001", name: "Named Components", children: [] };
        const settingsTreeItem = { id: "002", name: "Settings", children: [] };
        const frontItems = this.convertToTreeItems(this.viewModel.studio.items, namedCompTreeItem, settingsTreeItem);
        frontItems.unshift(namedCompTreeItem);
        frontItems.unshift(settingsTreeItem);
        this.feTreeview.addItem(frontItems);
        // this.feTreeview.setHeader({
        //     text: this.viewModel.studio.appName, actions: [
        //         { name: "+Add", selectCb: () => this.onNewItemSelect(this.viewModel.studio.appId, "application") },
        //         { name: "Coll", selectCb: () => { this.feTreeview.collapseAll() } },
        //     ], actionsWithRoot: true
        // });
    }
    async onNewItemSelect(parentId, parentName, parentType) {
        this.dialog.showDialog(this.compCreator.createNewItemComponent(), { closable: true, title: "Create New Item", closeOnOutClick: true }, { parentId, parentName, parentType });
    }
    selectItem(itemID) {
        this.feTreeview.selectItem(itemID);
    }
    unselectItem(itemID) {
        this.feTreeview.unselectItem(itemID);
    }
    async onItemSelect(item) {
        await this.studio.openItem(item);
    }
    async onShowHistories(modelName, modelID) {
        console.log('Parameters :\n' + modelName + '\n' + modelID);
        this.dialog.showDialog(this.compCreator.createModelHistoriesComponent(), { closable: true, title: modelName, closeOnOutClick: true }, { modelID });
    }
    async onEditModule(moduleName, moduleID) {
        console.log('Edit : ' + moduleID);
        this.dialog.showDialog(this.compCreator.createEditModuleComponent(), { closable: true, title: moduleName, closeOnOutClick: true }, { moduleID });
    }
    //This method has an usacase:DeleteModelImpl and we may need to delete it!..
    async onItemDelete(item) {
        await this.objectUseCase.deleteObject(item.ID);
    }
};
FileExplorer = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_4__.INotification)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_10__.IViewModelManager)),
    __param(3, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_9__.IViewModel)),
    __param(4, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_8__.IUseCaseExecutor)),
    __param(5, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_7__.IStudio)),
    __param(6, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_IDialog__WEBPACK_IMPORTED_MODULE_3__.IDialog)),
    __param(7, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_IAsyncComponentCreator__WEBPACK_IMPORTED_MODULE_2__.IAsyncComponentCreator)),
    __param(8, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_useCase_IObjectUseCase__WEBPACK_IMPORTED_MODULE_6__.IObjectUseCase))
], FileExplorer);



/***/ }),

/***/ "./src/application/useCases/getExportJobArtifactImpl.ts":
/*!**************************************************************!*\
  !*** ./src/application/useCases/getExportJobArtifactImpl.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetExportJobArtifactImpl": () => (/* binding */ GetExportJobArtifactImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let GetExportJobArtifactImpl = class GetExportJobArtifactImpl {
    constructor(qcloudApi) {
        this.qcloudApi = qcloudApi;
    }
    downloadInner(data, strFileName, strMimeType) {
        const _self = this;
        const Blob = window.Blob;
        const XMLHttpRequest = window.XMLHttpRequest;
        var self = window; // this script is only for browsers anyway...
        var defaultMime = 'application/octet-stream'; // this default mime also triggers iframe downloads
        var mimeType = strMimeType || defaultMime;
        var payload = data;
        var url = !strFileName && !strMimeType && payload;
        var anchor = document.createElement('a');
        var toString = function (a) {
            return String(a);
        };
        var MyBlob = self.Blob || self.MozBlob || self.WebKitBlob || toString;
        var fileName = strFileName || 'download';
        var blob;
        var reader;
        MyBlob = MyBlob.call ? MyBlob.bind(self) : Blob;
        if (String(this) === 'true') {
            // reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
            payload = [payload, mimeType];
            mimeType = payload[0];
            payload = payload[1];
        }
        if (url && url.length < 2048) {
            // if no filename and no mime, assume a url was passed as the only argument
            fileName = url
                .split('/')
                .pop()
                .split('?')[0];
            anchor.href = url; // assign href prop to temp anchor
            if (anchor.href.indexOf(url) !== -1) {
                // if the browser determines that it's a potentially valid url path:
                var ajax = new XMLHttpRequest();
                ajax.open('GET', url, true);
                ajax.responseType = 'blob';
                ajax.onload = function (e) {
                    _self.downloadInner(e.target.response, fileName, defaultMime);
                };
                setTimeout(function () {
                    ajax.send();
                }, 0); // allows setting custom ajax headers using the return:
                return ajax;
            } // end if valid url?
        } // end if url?
        // go ahead and download dataURLs right away
        if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)) {
            if (payload.length > 1024 * 1024 * 1.999 && MyBlob !== toString) {
                payload = dataUrlToBlob(payload);
                mimeType = payload.type || defaultMime;
            }
            else {
                return navigator.msSaveBlob // IE10 can't do a[download], only Blobs:
                    ? navigator.msSaveBlob(dataUrlToBlob(payload), fileName)
                    : saver(payload, null); // everyone else can save dataURLs un-processed
            }
        }
        else {
            // not data url, is it a string with special needs?
            if (/([\x80-\xff])/.test(payload)) {
                var i = 0;
                var tempUiArr = new Uint8Array(payload.length);
                var mx = tempUiArr.length;
                for (i; i < mx; ++i)
                    tempUiArr[i] = payload.charCodeAt(i);
                payload = new MyBlob([tempUiArr], { type: mimeType });
            }
        }
        blob = payload instanceof MyBlob ? payload : new MyBlob([payload], { type: mimeType });
        function dataUrlToBlob(strUrl) {
            var parts = strUrl.split(/[:;,]/);
            var type = parts[1];
            var indexDecoder = strUrl.indexOf('charset') > 0 ? 3 : 2;
            var decoder = parts[indexDecoder] === 'base64' ? window.atob : decodeURIComponent;
            var binData = decoder(parts.pop());
            var mx = binData.length;
            var i = 0;
            var uiArr = new Uint8Array(mx);
            for (i; i < mx; ++i)
                uiArr[i] = binData.charCodeAt(i);
            return new MyBlob([uiArr], { type: type });
        }
        function saver(url, winMode) {
            if ('download' in anchor) {
                // html5 A[download]
                anchor.href = url;
                anchor.setAttribute('download', fileName);
                anchor.className = 'download-js-link';
                anchor.innerHTML = 'downloading...';
                anchor.style.display = 'none';
                var listener = anchor.addEventListener('click', function (e) {
                    e.stopPropagation();
                    this.removeEventListener('click', listener);
                });
                document.body.appendChild(anchor);
                setTimeout(function () {
                    anchor.click();
                    document.body.removeChild(anchor);
                    if (winMode === true) {
                        setTimeout(function () {
                            self.URL.revokeObjectURL(anchor.href);
                        }, 250);
                    }
                }, 66);
                return true;
            }
            // handle non-a[download] safari as best we can:
            if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
                if (/^data:/.test(url))
                    url = 'data:' + url.replace(/^data:([\w/\-+]+)/, defaultMime);
                if (!window.open(url)) {
                    // popup blocked, offer direct download:
                    if (window.confirm('Displaying New Document\n\nUse Save As... to download, then click back to return to this page.')) {
                        window.location.href = url;
                    }
                }
                return true;
            }
            // do iframe dataURL download (old ch+FF):
            var f = document.createElement('iframe');
            document.body.appendChild(f);
            if (!winMode && /^data:/.test(url)) {
                // force a mime that will download:
                url = 'data:' + url.replace(/^data:([\w/\-+]+)/, defaultMime);
            }
            f.src = url;
            setTimeout(function () {
                document.body.removeChild(f);
            }, 333);
        } // end saver
        if (navigator.msSaveBlob) {
            // IE10+ : (has Blob, but not a[download] or URL)
            return navigator.msSaveBlob(blob, fileName);
        }
        if (self.URL) {
            // simple fast and modern way using Blob and URL:
            saver(self.URL.createObjectURL(blob), true);
        }
        else {
            // handle non-Blob()+non-URL browsers:
            if (typeof blob === 'string' || blob.constructor === toString) {
                try {
                    return saver('data:' + mimeType + ';base64,' + self.btoa(blob), null);
                }
                catch (y) {
                    return saver('data:' + mimeType + ',' + encodeURIComponent(blob), null);
                }
            }
            // Blob but not URL support:
            reader = new window.FileReader();
            reader.onload = function (e) {
                saver(this.result, null);
            };
            reader.readAsDataURL(blob);
        }
        return true;
    }
    async execute(param) {
        const data = await this.qcloudApi.getExportJobArtifact(param.artifactID);
        this.downloadInner(data, param.artifactName, "application/octet-stream");
    }
};
GetExportJobArtifactImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi))
], GetExportJobArtifactImpl);



/***/ }),

/***/ "./src/application/useCases/getExportSelectionDataImpl.ts":
/*!****************************************************************!*\
  !*** ./src/application/useCases/getExportSelectionDataImpl.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetExportSelectionDataImpl": () => (/* binding */ GetExportSelectionDataImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/model/shellError */ "./src/domain/model/shellError.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




let GetExportSelectionDataImpl = class GetExportSelectionDataImpl {
    constructor(qcloudApi, viewModelManager) {
        this.qcloudApi = qcloudApi;
        this.viewModelManager = viewModelManager;
    }
    async execute(param) {
        if (!(param.applicationID && param.exportType)) {
            throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__.createError)({ message: "'applicationID' && 'exportType' are required", type: "business" });
        }
        const data = await this.qcloudApi.getExportSelectionData(param.applicationID, param.exportType);
        return data;
    }
};
GetExportSelectionDataImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_3__.IViewModelManager))
], GetExportSelectionDataImpl);



/***/ }),

/***/ "./src/application/useCases/getExportTypesImpl.ts":
/*!********************************************************!*\
  !*** ./src/application/useCases/getExportTypesImpl.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetExportTypesImpl": () => (/* binding */ GetExportTypesImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let GetExportTypesImpl = class GetExportTypesImpl {
    constructor(qcloudApi) {
        this.qcloudApi = qcloudApi;
    }
    async execute(param) {
        switch (param.objectType) {
            default:
            case "application": return await this.qcloudApi.getExportTypes();
        }
    }
};
GetExportTypesImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi))
], GetExportTypesImpl);



/***/ }),

/***/ "./src/application/useCases/getUserDomainsImpl.ts":
/*!********************************************************!*\
  !*** ./src/application/useCases/getUserDomainsImpl.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetUserDomainsImpl": () => (/* binding */ GetUserDomainsImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let GetUserDomainsImpl = class GetUserDomainsImpl {
    constructor(viewModelManager, qcloudApi) {
        this.viewModelManager = viewModelManager;
        this.qcloudApi = qcloudApi;
    }
    async execute(param) {
        const domains = await this.qcloudApi.getUserDomains(param.email);
        this.viewModelManager.initSessionUser(param.email, domains);
        return domains;
    }
    async fail(err) {
    }
};
GetUserDomainsImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_2__.IViewModelManager)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi))
], GetUserDomainsImpl);



/***/ }),

/***/ "./src/application/useCases/initStudioImpl.ts":
/*!****************************************************!*\
  !*** ./src/application/useCases/initStudioImpl.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitStudioImpl": () => (/* binding */ InitStudioImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let InitStudioImpl = class InitStudioImpl {
    constructor(
    // @inject(IQCloudApi) private readonly qcloudApi: IQCloudApi,
    // @inject(IViewModelManager) private readonly viewModelManager: IViewModelManager,
    ) { }
    async execute(param) {
        // Write your use case here...  
    }
};
InitStudioImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)()
], InitStudioImpl);



/***/ }),

/***/ "./src/application/useCases/listExportJobArtifactsImpl.ts":
/*!****************************************************************!*\
  !*** ./src/application/useCases/listExportJobArtifactsImpl.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListExportJobArtifactsImpl": () => (/* binding */ ListExportJobArtifactsImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/model/shellError */ "./src/domain/model/shellError.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




let ListExportJobArtifactsImpl = class ListExportJobArtifactsImpl {
    constructor(qcloudApi, viewModelManager) {
        this.qcloudApi = qcloudApi;
        this.viewModelManager = viewModelManager;
    }
    async execute(param) {
        if (!param.jobID) {
            throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__.createError)({ message: "'jobID' is required", type: "business" });
        }
        const artifacts = await this.qcloudApi.listExportJobArtifacts(param.jobID);
        this.viewModelManager.setExportJobArtifacts(param.jobID, artifacts);
    }
};
ListExportJobArtifactsImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_3__.IViewModelManager))
], ListExportJobArtifactsImpl);



/***/ }),

/***/ "./src/application/useCases/listExportJobStepLogsImpl.ts":
/*!***************************************************************!*\
  !*** ./src/application/useCases/listExportJobStepLogsImpl.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListExportJobStepLogsImpl": () => (/* binding */ ListExportJobStepLogsImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/model/shellError */ "./src/domain/model/shellError.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




let ListExportJobStepLogsImpl = class ListExportJobStepLogsImpl {
    constructor(qcloudApi, viewModelManager) {
        this.qcloudApi = qcloudApi;
        this.viewModelManager = viewModelManager;
    }
    async execute(param) {
        if (!param.stepID) {
            throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__.createError)({ message: "'stepID' is required", type: "business" });
        }
        const logs = await this.qcloudApi.listExportJobStepLogs(param.stepID);
        this.viewModelManager.setExportJobStepLogs(param.stepID, logs);
    }
};
ListExportJobStepLogsImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_3__.IViewModelManager))
], ListExportJobStepLogsImpl);



/***/ }),

/***/ "./src/application/useCases/listExportJobStepsImpl.ts":
/*!************************************************************!*\
  !*** ./src/application/useCases/listExportJobStepsImpl.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListExportJobStepsImpl": () => (/* binding */ ListExportJobStepsImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/model/shellError */ "./src/domain/model/shellError.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




let ListExportJobStepsImpl = class ListExportJobStepsImpl {
    constructor(qcloudApi, viewModelManager) {
        this.qcloudApi = qcloudApi;
        this.viewModelManager = viewModelManager;
    }
    async execute(param) {
        if (!param.jobID) {
            throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__.createError)({ message: "'jobID' is required", type: "business" });
        }
        const steps = await this.qcloudApi.listExportJobSteps(param.jobID);
        this.viewModelManager.setExportJobSteps(param.jobID, steps);
    }
};
ListExportJobStepsImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_3__.IViewModelManager))
], ListExportJobStepsImpl);



/***/ }),

/***/ "./src/application/useCases/listExportJobsImpl.ts":
/*!********************************************************!*\
  !*** ./src/application/useCases/listExportJobsImpl.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListExportJobsImpl": () => (/* binding */ ListExportJobsImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let ListExportJobsImpl = class ListExportJobsImpl {
    constructor(qcloudApi, viewModelManager) {
        this.qcloudApi = qcloudApi;
        this.viewModelManager = viewModelManager;
    }
    async execute(param) {
        const jobs = await this.qcloudApi.listExportJobs();
        jobs.forEach(job => {
            const createDate = new Date(job.createDate);
            job.createDate = createDate.toLocaleString();
        });
        this.viewModelManager.setExportJobItemList(jobs);
    }
};
ListExportJobsImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_2__.IViewModelManager))
], ListExportJobsImpl);



/***/ }),

/***/ "./src/application/useCases/listModelHistoriesImpl.ts":
/*!************************************************************!*\
  !*** ./src/application/useCases/listModelHistoriesImpl.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListModelHistoriesImpl": () => (/* binding */ ListModelHistoriesImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let ListModelHistoriesImpl = class ListModelHistoriesImpl {
    constructor(qcloudApi) {
        this.qcloudApi = qcloudApi;
    }
    async execute(param) {
        const histories = await this.qcloudApi.listModelHistories(param.modelId);
        return histories;
    }
};
ListModelHistoriesImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi))
], ListModelHistoriesImpl);



/***/ }),

/***/ "./src/application/useCases/listModelVersionsImpl.ts":
/*!***********************************************************!*\
  !*** ./src/application/useCases/listModelVersionsImpl.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListModelVersionsImpl": () => (/* binding */ ListModelVersionsImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/model/shellError */ "./src/domain/model/shellError.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let ListModelVersionsImpl = class ListModelVersionsImpl {
    constructor(qcloudApi) {
        this.qcloudApi = qcloudApi;
    }
    async execute(param) {
        if (!(param.modelID && param.versionType)) {
            throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__.createError)({ message: "'modelID' and '' are required!", type: "business" });
        }
        const histories = await this.qcloudApi.listModelHistories(param.modelID, param.versionType == "major" ? "publish" : "checkin");
        return histories;
    }
};
ListModelVersionsImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi))
], ListModelVersionsImpl);



/***/ }),

/***/ "./src/application/useCases/loginImpl.ts":
/*!***********************************************!*\
  !*** ./src/application/useCases/loginImpl.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginImpl": () => (/* binding */ LoginImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_objects_ISesionManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/objects/ISesionManager */ "./src/domain/objects/ISesionManager.ts");
/* harmony import */ var _domain_presentation_IRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/presentation/IRouter */ "./src/domain/presentation/IRouter.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





let LoginImpl = class LoginImpl {
    constructor(qcloudApi, viewModelManager, sessionManager, router) {
        this.qcloudApi = qcloudApi;
        this.viewModelManager = viewModelManager;
        this.sessionManager = sessionManager;
        this.router = router;
    }
    async execute(param) {
        await this.qcloudApi.login(param.username, param.password, param.tenantID);
        this.viewModelManager.userLoggedIn = true;
        this.sessionManager.start();
        if (param.redirectToMain) {
            this.router.push("/main/applicationList");
        }
    }
};
LoginImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_4__.IViewModelManager)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_objects_ISesionManager__WEBPACK_IMPORTED_MODULE_2__.ISessionManager)),
    __param(3, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_IRouter__WEBPACK_IMPORTED_MODULE_3__.IRouter))
], LoginImpl);



/***/ }),

/***/ "./src/application/useCases/logoutImpl.ts":
/*!************************************************!*\
  !*** ./src/application/useCases/logoutImpl.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutImpl": () => (/* binding */ LogoutImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_objects_IEditorManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/objects/IEditorManager */ "./src/domain/objects/IEditorManager.ts");
/* harmony import */ var _domain_objects_ISesionManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/objects/ISesionManager */ "./src/domain/objects/ISesionManager.ts");
/* harmony import */ var _domain_objects_ISidebarManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/objects/ISidebarManager */ "./src/domain/objects/ISidebarManager.ts");
/* harmony import */ var _domain_presentation_IRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../domain/presentation/IRouter */ "./src/domain/presentation/IRouter.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







let LogoutImpl = class LogoutImpl {
    constructor(qcloudApi, viewModelManager, sessionManager, router, sidebarManager, editorManager) {
        this.qcloudApi = qcloudApi;
        this.viewModelManager = viewModelManager;
        this.sessionManager = sessionManager;
        this.router = router;
        this.sidebarManager = sidebarManager;
        this.editorManager = editorManager;
    }
    async execute() {
        await this.qcloudApi.logout();
        this.viewModelManager.reset();
        this.sessionManager.stop();
        this.sidebarManager.reset();
        this.editorManager.reset();
        this.router.push("/");
    }
};
LogoutImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_6__.IViewModelManager)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_objects_ISesionManager__WEBPACK_IMPORTED_MODULE_3__.ISessionManager)),
    __param(3, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_IRouter__WEBPACK_IMPORTED_MODULE_5__.IRouter)),
    __param(4, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_objects_ISidebarManager__WEBPACK_IMPORTED_MODULE_4__.ISidebarManager)),
    __param(5, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_objects_IEditorManager__WEBPACK_IMPORTED_MODULE_2__.IEditorManager))
], LogoutImpl);



/***/ }),

/***/ "./src/application/useCases/objectUseCaseImpl.ts":
/*!*******************************************************!*\
  !*** ./src/application/useCases/objectUseCaseImpl.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectUseCaseImpl": () => (/* binding */ ObjectUseCaseImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/model/shellError */ "./src/domain/model/shellError.ts");
/* harmony import */ var _domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/presentation/INotification */ "./src/domain/presentation/INotification.ts");
/* harmony import */ var _domain_presentation_ITreeView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/presentation/ITreeView */ "./src/domain/presentation/ITreeView.ts");
/* harmony import */ var _domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../domain/useCase/IStudio */ "./src/domain/useCase/IStudio.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







let ObjectUseCaseImpl = class ObjectUseCaseImpl {
    constructor(notification, viewModelManager, qcloudApi, studio) {
        this.notification = notification;
        this.viewModelManager = viewModelManager;
        this.qcloudApi = qcloudApi;
        this.studio = studio;
    }
    async deleteObject(objectID) {
        const object = this.viewModelManager.findObject(objectID);
        if (!object) {
            throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__.createError)({ message: "object not found: " + objectID, type: "technical" });
        }
        switch (object.objectType) {
            case "application":
            case "module":
            case "folder":
            case "model": break;
            default: throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__.createError)({ message: "can not delete " + (object === null || object === void 0 ? void 0 : object.objectType) + " with this use case ", type: "technical" });
        }
        const item = object;
        const confirm = await this.notification.showConfirm({
            title: "Are you sure?", text: `The ${item.objectType} '${item.name}' will be deleted permanently!`,
            type: "warning", approveText: "Delete", rejectText: "Cancel"
        });
        if (!confirm.approved) {
            return;
        }
        if (item.objectType == "model") {
            this.studio.closeItem(item, { silent: true });
        }
        const targetDict = {
            model: this.qcloudApi.deleteModel,
            module: this.qcloudApi.deleteModule,
            folder: this.qcloudApi.deleteFolder,
            application: this.qcloudApi.deleteApplication,
        };
        await targetDict[item.objectType].call(this.qcloudApi, item.ID, true);
        const feTreeview = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(_domain_presentation_ITreeView__WEBPACK_IMPORTED_MODULE_4__.ITreeViewInstances.FileExplorer);
        feTreeview.removeItem(item.ID);
        this.viewModelManager.removeObject(item);
        this.notification.showNotification({ text: `'${item.name}' deleted successfully`, type: "success" });
    }
};
ObjectUseCaseImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_3__.INotification)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_6__.IViewModelManager)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(3, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_useCase_IStudio__WEBPACK_IMPORTED_MODULE_5__.IStudio))
], ObjectUseCaseImpl);



/***/ }),

/***/ "./src/application/useCases/processEditorUtilImpl.ts":
/*!***********************************************************!*\
  !*** ./src/application/useCases/processEditorUtilImpl.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessEditorUtil": () => (/* binding */ ProcessEditorUtil)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/dist/js-yaml.mjs");
/* harmony import */ var _domain_objects_editors_processEditor_constants_processTemplates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/objects/editors/processEditor/constants/processTemplates */ "./src/domain/objects/editors/processEditor/constants/processTemplates.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ProcessEditorUtil = class ProcessEditorUtil {
    constructor(pathPrefix = "/microui/modul_name/qjson/", screenFileExtension = ".qjson") {
        this.pathPrefix = pathPrefix;
        this.screenFileExtension = screenFileExtension;
    }
    getEmptyProcessWizardModel(moduleName) {
        return {
            processType: "",
            createNewBpmnFile: true,
            selectedExistingBpmnFile: {
                ID: "",
                name: "",
                variables: [],
            },
            processDefinition: {
                processName: "",
                processFileName: "",
            },
            processMakerDefinition: {
                makerScreen: "",
                useHierarchicalProcess: false,
                instUnitHierarchy: "SAME",
                ignoreLevelForDiffInstUnit: false,
            },
            processCheckerDefinition: {
                firstApproverScreen: "",
                secondApproverScreen: "",
                thirdApproverScreen: "",
                fourthApproverScreen: "",
                fifthApproverScreen: "",
            },
            runAfterApprovalDefinition: {
                isRunAfterApprovalEnable: false,
                runAfterApprovalApi: `http://${moduleName}/api/runAfterApprovalApi`,
                runAfterApprovalMethod: "POST",
            },
            runAfterRejectedDefinition: {
                isRunAfterRejectedEnable: false,
                runAfterRejectedApi: `http://${moduleName}/api/runAfterRejectedApi`,
                runAfterRejectedMethod: "POST",
            },
            runAfterChangeAdvisedDefinition: {
                isRunAfterChangeAdvisedEnable: false,
                runAfterChangeAdvisedApi: `http://${moduleName}/api/runAfterChangeAdvisedApi`,
                runAfterChangeAdvisedMethod: "POST",
            },
            reviewScreen: "",
        };
    }
    getEmptyProcessEditorState() {
        return {
            stepper: {
                currentStep: 0,
                totalStep: 0,
                isTabValid: false,
                isApproveTab: false,
            },
        };
    }
    generateBpmnFile(processModel) {
        var _a;
        const processFile = (_a = _domain_objects_editors_processEditor_constants_processTemplates__WEBPACK_IMPORTED_MODULE_2__.processTypes.find((type) => type.value === processModel.processType)) === null || _a === void 0 ? void 0 : _a.bpmnFile;
        return processFile
            .replace(/PROCESS_ID_/gm, processModel.processDefinition.processFileName)
            .replace(/PROCESS_NAME_/gm, processModel.processDefinition.processFileName);
    }
    generateProcessConfigFile(processModel) {
        var _a;
        if (processModel.createNewBpmnFile) {
            const processFileName = processModel.processDefinition.processFileName;
            const configFile = js_yaml__WEBPACK_IMPORTED_MODULE_1__["default"].load(_domain_objects_editors_processEditor_constants_processTemplates__WEBPACK_IMPORTED_MODULE_2__.BASE_CONFIG_FILE);
            const approvalConfigFile = js_yaml__WEBPACK_IMPORTED_MODULE_1__["default"].load((_a = _domain_objects_editors_processEditor_constants_processTemplates__WEBPACK_IMPORTED_MODULE_2__.processTypes.find((type) => type.value === processModel.processType)) === null || _a === void 0 ? void 0 : _a.configFile);
            const approvalConfigFileVariables = approvalConfigFile.rally.process["auto-deploy"].metadata.processMetadata[0]
                .variables;
            if (configFile.rally.process["auto-deploy"]) {
                const processDefinition = configFile.rally.process["auto-deploy"].processes[0];
                const processMetadata = configFile.rally.process["auto-deploy"].metadata.processMetadata[0];
                let processVariables = configFile.rally.process["auto-deploy"].metadata.processMetadata[0].variables;
                processDefinition.path = processDefinition.path.replace("BPMN___FILE___NAME", processFileName);
                processDefinition.key = processFileName;
                processMetadata.identifierName = processFileName;
                processMetadata.processName = processFileName;
                processMetadata.resourceCode = processFileName;
                processVariables.map((variable) => (variable.value = this.handleProcessVariables(processModel, variable.key)));
                approvalConfigFileVariables.map((variable) => (variable.value = this.handleSupportingFormAndSysRoleNames(processModel, variable.key)));
                configFile.rally.process["auto-deploy"].metadata.processMetadata[0].variables =
                    processVariables.concat(approvalConfigFileVariables);
                configFile.rally.process["auto-deploy"].metadata.makerCheckerRoles =
                    this.getMakerCheckerRoles(processModel);
            }
            console.log(js_yaml__WEBPACK_IMPORTED_MODULE_1__["default"].dump(configFile));
            return js_yaml__WEBPACK_IMPORTED_MODULE_1__["default"].dump(configFile);
        }
        else {
            const processFileName = processModel.processDefinition.processFileName;
            const configFile = js_yaml__WEBPACK_IMPORTED_MODULE_1__["default"].load(_domain_objects_editors_processEditor_constants_processTemplates__WEBPACK_IMPORTED_MODULE_2__.EMPTY_CONFIG_FILE);
            const processDefinition = configFile.rally.process["auto-deploy"].processes[0];
            const processMetadata = configFile.rally.process["auto-deploy"].metadata.processMetadata[0];
            processDefinition.path = processDefinition.path.replace("BPMN___FILE___NAME", processFileName);
            processDefinition.key = processFileName;
            processMetadata.identifierName = processFileName;
            processMetadata.processName = processFileName;
            processMetadata.resourceCode = processFileName;
            configFile.rally.process["auto-deploy"].metadata.processMetadata[0].variables =
                processModel.selectedExistingBpmnFile.variables.map((variable) => ({
                    key: variable.key,
                    type: variable.type === "BOOLEAN" ? "BOOLEAN" : "STRING",
                    value: variable.type === "STRING"
                        ? `${variable.value}`
                        : variable.type === "BOOLEAN"
                            ? (variable.value === "true" ? true : false)
                            : variable.type === "SCREEN"
                                ? `${this.pathPrefix}${variable.value}${this.screenFileExtension}`
                                : `${variable.value}`,
                }));
            console.log(js_yaml__WEBPACK_IMPORTED_MODULE_1__["default"].dump(configFile));
            return js_yaml__WEBPACK_IMPORTED_MODULE_1__["default"].dump(configFile);
        }
    }
    extractEditableProcessVariables(processVariables, ignoredVariables) {
        const scopes = [];
        const flowElements = [];
        const variables = [];
        processVariables
            .map((variable) => variable.scope)
            .forEach((scope) => {
            if (!scopes.some((scope1) => JSON.stringify(scope) === JSON.stringify(scope1))) {
                scopes.push(scope);
            }
        });
        scopes.forEach((scope) => scope.flowElements.forEach((flowElement) => {
            if (flowElement.$type === "bpmn:CallActivity" ||
                flowElement.$type === "bpmn:UserTask") {
                flowElements.push(flowElement);
            }
        }));
        flowElements.forEach((flowElement) => {
            var _a;
            if (flowElement.$type === "bpmn:CallActivity") {
                (_a = flowElement.extensionElements) === null || _a === void 0 ? void 0 : _a.values.forEach((value) => {
                    if (value.source &&
                        value.$type === "camunda:In" &&
                        !ignoredVariables.includes(value.source)) {
                        const variable = variables.find((variable) => variable.target === value.target && variable.source === value.source);
                        if (variable) {
                            variable.elements.push(flowElement.id);
                        }
                        else {
                            variables.push({ ...value, value: "", elements: [flowElement.id] });
                        }
                    }
                });
            }
            else if (flowElement.$type === "bpmn:UserTask") {
                variables.push({
                    $type: flowElement.$type,
                    source: flowElement.formKey.replace("$", "").replace("{", "").replace("}", ""),
                    target: flowElement.assignee.replace("$", "").replace("{", "").replace("}", ""),
                    value: "",
                    elements: [flowElement.id],
                });
            }
        });
        return variables;
    }
    handleProcessVariables(processModel, key) {
        switch (key) {
            case "runAfterApprovalApi":
                return processModel.runAfterApprovalDefinition.runAfterApprovalApi;
            case "runAfterApprovalMethod":
                return processModel.runAfterApprovalDefinition.runAfterApprovalMethod;
            case "isRunAfterApprovalEnable":
                return processModel.runAfterApprovalDefinition.isRunAfterApprovalEnable;
            case "runAfterRejectedApi":
                return processModel.runAfterRejectedDefinition.runAfterRejectedApi;
            case "runAfterRejectedMethod":
                return processModel.runAfterRejectedDefinition.runAfterRejectedMethod;
            case "isRunAfterRejectedEnable":
                return processModel.runAfterRejectedDefinition.isRunAfterRejectedEnable;
            case "runAfterChangeAdvisedApi":
                return processModel.runAfterChangeAdvisedDefinition.runAfterChangeAdvisedApi;
            case "runAfterChangeAdvisedMethod":
                return processModel.runAfterChangeAdvisedDefinition.runAfterChangeAdvisedMethod;
            case "isRunAfterChangeAdvisedEnable":
                return processModel.runAfterChangeAdvisedDefinition.isRunAfterChangeAdvisedEnable;
            case "detailedForm":
                return processModel.processMakerDefinition.makerScreen;
            case "startForm":
                return (this.pathPrefix +
                    processModel.processMakerDefinition.makerScreen +
                    this.screenFileExtension);
            case "reviewForm":
                return this.pathPrefix + processModel.reviewScreen + this.screenFileExtension;
            case "useHierarchicalProcess":
                return processModel.processMakerDefinition.useHierarchicalProcess;
            case "instUnitHierarchy":
                return processModel.processMakerDefinition.instUnitHierarchy;
            case "ignoreLevelForDiffInstUnit":
                return processModel.processMakerDefinition.ignoreLevelForDiffInstUnit;
            default:
                break;
        }
    }
    handleSupportingFormAndSysRoleNames(processModel, key) {
        const processCheckerDefinition = processModel.processCheckerDefinition;
        switch (key) {
            case "supportingForm":
                return (this.pathPrefix +
                    processCheckerDefinition.firstApproverScreen +
                    this.screenFileExtension);
            case "supportingForm2":
                return (this.pathPrefix +
                    processCheckerDefinition.secondApproverScreen +
                    this.screenFileExtension);
            case "supportingForm3":
                return (this.pathPrefix +
                    processCheckerDefinition.thirdApproverScreen +
                    this.screenFileExtension);
            case "supportingForm4":
                return (this.pathPrefix +
                    processCheckerDefinition.fourthApproverScreen +
                    this.screenFileExtension);
            case "supportingForm5":
                return (this.pathPrefix +
                    processCheckerDefinition.fifthApproverScreen +
                    this.screenFileExtension);
            case "checkerRoles2":
                return processModel.processDefinition.processName + ".secondChecker";
            case "checkerRoles3":
                return processModel.processDefinition.processName + ".thirdChecker";
            case "checkerRoles4":
                return processModel.processDefinition.processName + ".fourthChecker";
            case "checkerRoles5":
                return processModel.processDefinition.processName + ".fifthChecker";
            default:
                return "undefined";
        }
    }
    getMakerCheckerRoles(processModel) {
        const processDefinition = processModel.processDefinition;
        return [
            {
                processId: processDefinition.processFileName,
                makerRole: processDefinition.processName + ".maker",
                checkerRoles: processDefinition.processName + ".firstChecker",
                domainType: "ALL",
            },
        ];
    }
};
ProcessEditorUtil = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)()
], ProcessEditorUtil);



/***/ }),

/***/ "./src/application/useCases/restoreUserImpl.ts":
/*!*****************************************************!*\
  !*** ./src/application/useCases/restoreUserImpl.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestoreUserImpl": () => (/* binding */ RestoreUserImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let RestoreUserImpl = class RestoreUserImpl {
    constructor(qcloudApi, viewModelManager) {
        this.qcloudApi = qcloudApi;
        this.viewModelManager = viewModelManager;
    }
    async execute(param) {
        const userInfo = await this.qcloudApi.getUserInfobyToken();
        this.viewModelManager.initSessionUser(userInfo.email, userInfo.domains);
        this.viewModelManager.userLoggedIn = userInfo.loggedIn;
    }
};
RestoreUserImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_2__.IViewModelManager))
], RestoreUserImpl);



/***/ }),

/***/ "./src/application/useCases/studio.ts":
/*!********************************************!*\
  !*** ./src/application/useCases/studio.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Studio": () => (/* binding */ Studio)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/ILogger */ "./src/domain/infrastructure/ILogger.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_objects_IEditorManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/objects/IEditorManager */ "./src/domain/objects/IEditorManager.ts");
/* harmony import */ var _domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/presentation/INotification */ "./src/domain/presentation/INotification.ts");
/* harmony import */ var _domain_presentation_IViewModelProxifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../domain/presentation/IViewModelProxifier */ "./src/domain/presentation/IViewModelProxifier.ts");
/* harmony import */ var _domain_useCase_IFileExplorer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../domain/useCase/IFileExplorer */ "./src/domain/useCase/IFileExplorer.ts");
/* harmony import */ var _domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../domain/viewModel/IViewModel */ "./src/domain/viewModel/IViewModel.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









let Studio = class Studio {
    constructor(viewModel, viewModelManager, fileExplorer, qcloudApi, editorManager, logger, notification, proxifier) {
        this.viewModel = viewModel;
        this.viewModelManager = viewModelManager;
        this.fileExplorer = fileExplorer;
        this.qcloudApi = qcloudApi;
        this.editorManager = editorManager;
        this.logger = logger;
        this.notification = notification;
        this.proxifier = proxifier;
    }
    async openItem(item, options = {}) {
        var _a, _b, _c;
        const studio = this.viewModel.studio;
        if (!options.fromHistory && ((_a = studio === null || studio === void 0 ? void 0 : studio.currentItem) === null || _a === void 0 ? void 0 : _a.ID) == item.ID) {
            return;
        }
        if ((_b = studio.currentItem) === null || _b === void 0 ? void 0 : _b.modified) {
            const targetEditor = this.editorManager.getEditor(studio.currentItem);
            const model = await targetEditor.getModel();
            studio.currentItem.modelBody = this.proxifier.markRaw(model.model);
            studio.currentItem.state = this.proxifier.markRaw(model.state);
        }
        let itemOpen = false;
        if (!studio.openItems) {
            studio.openItems = [];
        }
        else {
            itemOpen = !!studio.openItems.find((openItem) => openItem.ID == item.ID);
        }
        if (!item.modelBody || (!itemOpen && !item.checkedOut)) {
            let model;
            if (options.fromHistory) {
                model = await this.qcloudApi.getModelInfo(item.ID);
                //item.modelBody already comes by history selection.
            }
            else {
                model = await this.qcloudApi.getModel(item.ID);
                item.modelBody = this.proxifier.markRaw(model.model);
            }
            item.checkedOut = (_c = model.checkouts) === null || _c === void 0 ? void 0 : _c.some((owner) => { var _a; return owner.user == ((_a = this.viewModel.user) === null || _a === void 0 ? void 0 : _a.email); });
        }
        if (!studio.tabOrder) {
            studio.tabOrder = [];
        }
        if (itemOpen) {
            const orderIndex = studio.tabOrder.findIndex((itemID) => item.ID == itemID);
            studio.tabOrder.unshift(studio.tabOrder.splice(orderIndex, 1)[0]);
        }
        else {
            item.modified = false;
            studio.openItems.push(item);
            if (options.noFocus) {
                studio.tabOrder.splice(1, 0, item.ID);
            }
            else {
                studio.tabOrder.unshift(item.ID);
            }
        }
        if (options.noFocus) {
            return;
        }
        studio.currentItem = item;
        this.fileExplorer.selectItem(item.ID);
        const targetEditor = this.editorManager.getEditor(item);
        await targetEditor.setModel(item);
        this.editorManager.show(targetEditor, true);
    }
    async openHistoryItem(historyID) {
        const historyItem = await this.qcloudApi.getModelHistory(historyID);
        const modelItem = {
            ID: historyItem.modelID,
            name: historyItem.name,
            modelBody: historyItem.model,
            modelType: historyItem.modelType,
            objectType: "model",
            parent: this.viewModelManager.findObject(historyItem.ownerItem),
            synced: true,
            additionals: historyItem.modelAdditionals,
        };
        await this.openItem(modelItem, { fromHistory: true });
    }
    async closeItem(item, options = {}) {
        if (item.modified && !options.silent) {
            const result = await this.notification.showConfirm({
                type: "warning",
                title: `Do you want to save changes made on ${item.name} ?`,
                text: "All unsaved changes will be lost",
                approveText: "Save",
                cancelText: "Cancel",
                rejectText: "Discard",
            });
            if (result.result == "cancel") {
                return;
            }
            if (result.result == "approve") {
                try {
                    item.synced = false;
                    await this.save(item);
                }
                finally {
                    item.synced = true;
                }
            }
        }
        item.modelBody = undefined;
        item.state = undefined;
        const studio = this.viewModel.studio;
        studio.currentItem = undefined;
        if (studio.openItems) {
            const removeIndex = studio.openItems.findIndex((openItem) => openItem.ID == item.ID);
            studio.openItems.splice(removeIndex, 1);
        }
        let nextItemID;
        if (studio.tabOrder) {
            const removeTabOrder = studio.tabOrder.findIndex((itemID) => itemID == item.ID);
            studio.tabOrder.splice(removeTabOrder, 1);
            nextItemID = studio.tabOrder[0];
        }
        if (nextItemID) {
            const newItem = studio.openItems.find((openItem) => openItem.ID == nextItemID);
            this.openItem(newItem);
        }
        else {
            this.fileExplorer.unselectItem(item.ID);
            const targetEditor = this.editorManager.getEditor(item);
            targetEditor.show(false);
        }
    }
    attach(element) {
        this.editorManager.attach(element);
    }
    detach() {
        this.editorManager.detach();
    }
    async openApp(appId) {
        const backendItemsProm = this.qcloudApi.listTreeviewItems(appId);
        const currentAppProm = this.qcloudApi.getApplication(appId);
        const [backendItems, currentApp] = await Promise.all([backendItemsProm, currentAppProm]);
        const appItems = this.convertBackendItems(backendItems, currentApp);
        this.viewModel.studio = {
            appId,
            ui: this.defaultUI(),
            items: appItems,
            appName: currentApp.name,
        };
        this.logger.log({ level: "log", message: `App ${appId} opened` });
    }
    async checkout(item) {
        if (item.modified) {
            const result = await this.notification.showConfirm({
                text: "Your changes on ReadOnly Mode will be discarded",
                approveText: "Discard",
                cancelText: "Cancel",
                type: "warning",
            });
            if (!result.approved) {
                return;
            }
        }
        const info = await this.qcloudApi.getModel(item.ID, {
            createCheckout: true,
            checkoutControl: true,
        });
        item.modelBody = info.model;
        item.modified = false;
        item.checkedOut = true;
        const targetEditor = this.editorManager.getEditor(item);
        await targetEditor.setModel(item);
    }
    async save(item) {
        const targetEditor = this.editorManager.getEditor(item);
        const model = await targetEditor.getModel();
        item.modelBody = this.proxifier.markRaw(model.model);
        item.state = this.proxifier.markRaw(model.state);
        await this.qcloudApi.updateModel(item.ID, { model: item.modelBody });
        item.modified = false;
        this.notification.showNotification({ text: `${item.name} saved successfully`, type: "success" });
    }
    async checkin(item, options) {
        const targetEditor = this.editorManager.getEditor(item);
        const model = await targetEditor.getModel();
        item.modelBody = this.proxifier.markRaw(model.model);
        item.state = this.proxifier.markRaw(model.state);
        const checkin = options.version == "minor";
        const publish = options.version == "major";
        const shortComment = options.shortComment;
        const comment = options.longComment;
        await this.qcloudApi.updateModel(item.ID, {
            checkin,
            publish,
            shortComment,
            comment,
            model: item.modelBody,
        });
        item.modified = false;
        item.checkedOut = false;
    }
    async release(item) {
        var _a;
        if (item.modified) {
            const result = await this.notification.showConfirm({
                text: "Your changes will be discarded",
                approveText: "Discard",
                cancelText: "Cancel",
                type: "warning",
            });
            if (!result.approved) {
                return;
            }
        }
        const revertedItemProm = this.qcloudApi.getModelBody(item.ID);
        await this.qcloudApi.updateModel(item.ID, { release: true });
        item.modelBody = (await revertedItemProm).model;
        item.modified = false;
        item.checkedOut = false;
        if (((_a = this.viewModel.studio.currentItem) === null || _a === void 0 ? void 0 : _a.ID) != item.ID) {
            return;
        }
        const targetEditor = this.editorManager.getEditor(item);
        await targetEditor.setModel(item);
    }
    nav_addNavItems(addItems) {
        this.viewModel.studio.ui = this.defaultUI();
        const navItems = (this.viewModel.studio.ui.navItems =
            this.viewModel.studio.ui.navItems || []);
        addItems.forEach((item) => navItems.push(item));
    }
    async nav_unselect() {
        var _a;
        (_a = this.viewModel.studio.ui.navItems) === null || _a === void 0 ? void 0 : _a.forEach((item) => (item.selected = false));
    }
    async nav_selectItem(navItem) {
        var _a, _b;
        (_a = this.viewModel.studio.ui.navItems) === null || _a === void 0 ? void 0 : _a.forEach((item) => (item.selected = false));
        navItem.selected = true;
        await ((_b = navItem.onSelect) === null || _b === void 0 ? void 0 : _b.call(navItem));
    }
    nav_removeNavItems(removeItems) {
        let navItems = this.viewModel.studio.ui.navItems;
        if (!navItems) {
            return;
        }
        //these are menu items, max 6-7. No need for indexes, just search.
        this.viewModel.studio.ui.navItems = navItems.filter((navItem) => !removeItems.find((removeItem) => navItem.name == removeItem.name));
    }
    defaultUI() {
        return this.viewModel.studio.ui || { sidebar: { left: 293 } };
    }
    convertBackendItems(backendItems, app) {
        const converter = (items, itemParent) => items.map((item) => {
            const parent = itemParent;
            if (item.type == "module") {
                const module = {
                    ID: item.id,
                    name: item.name,
                    objectType: "module",
                    synced: true,
                    parent,
                    children: [],
                };
                this.viewModelManager.moduleCreated(module);
                module.children = item.children ? converter(item.children, module) : [];
                return module;
            }
            else if (item.type == "folder") {
                const parent = itemParent;
                const folder = {
                    ID: item.id,
                    name: item.name,
                    objectType: "folder",
                    synced: true,
                    parent,
                    children: [],
                };
                this.viewModelManager.folderCreated(folder);
                folder.children = item.children ? converter(item.children, folder) : [];
                return folder;
            }
            else {
                const parent = itemParent;
                const model = {
                    ID: item.id,
                    modelType: item.type,
                    usageType: item.usageType,
                    additionals: item.modelAdditionals,
                    name: item.name,
                    objectType: "model",
                    synced: true,
                    parent,
                };
                this.viewModelManager.modelCreated(model);
                return model;
            }
        });
        return converter(backendItems, app);
    }
};
Studio = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_7__.IViewModel)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_8__.IViewModelManager)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_useCase_IFileExplorer__WEBPACK_IMPORTED_MODULE_6__.IFileExplorer)),
    __param(3, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_2__.IQCloudApi)),
    __param(4, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_objects_IEditorManager__WEBPACK_IMPORTED_MODULE_3__.IEditorManager)),
    __param(5, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_ILogger__WEBPACK_IMPORTED_MODULE_1__.ILogger)),
    __param(6, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_4__.INotification)),
    __param(7, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_IViewModelProxifier__WEBPACK_IMPORTED_MODULE_5__.IViewModelProxifier))
], Studio);



/***/ }),

/***/ "./src/application/useCases/timedOutImpl.ts":
/*!**************************************************!*\
  !*** ./src/application/useCases/timedOutImpl.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimedOutImpl": () => (/* binding */ TimedOutImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_presentation_IAsyncComponentCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/presentation/IAsyncComponentCreator */ "./src/domain/presentation/IAsyncComponentCreator.ts");
/* harmony import */ var _domain_presentation_IDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/presentation/IDialog */ "./src/domain/presentation/IDialog.ts");
/* harmony import */ var _domain_presentation_IRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/presentation/IRouter */ "./src/domain/presentation/IRouter.ts");
/* harmony import */ var _domain_useCase_ILogout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/useCase/ILogout */ "./src/domain/useCase/ILogout.ts");
/* harmony import */ var _domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../domain/useCase/IUseCaseExecutor */ "./src/domain/useCase/IUseCaseExecutor.ts");
/* harmony import */ var _domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../domain/viewModel/IViewModel */ "./src/domain/viewModel/IViewModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







let TimedOutImpl = class TimedOutImpl {
    constructor(router, dialog, viewModel, executor, compCreator) {
        this.router = router;
        this.dialog = dialog;
        this.viewModel = viewModel;
        this.executor = executor;
        this.compCreator = compCreator;
    }
    async execute() {
        var _a;
        if (!((_a = this.viewModel.user) === null || _a === void 0 ? void 0 : _a.loggedIn)) {
            this.executor.execute(async () => {
                this.executor.executeUseCase(_domain_useCase_ILogout__WEBPACK_IMPORTED_MODULE_4__.ILogout);
            }, { loading: true });
            return;
        }
        this.dialog.showDialog(this.compCreator.createLoginDialogComponent(), { closable: false, title: "Timed out. Please login" });
        //TODO: adamın şu anki sayfasına bak proje sayfasındaysa login popup çıkar, sıfır giren adamı aşağı devam
    }
};
TimedOutImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_IRouter__WEBPACK_IMPORTED_MODULE_3__.IRouter)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_IDialog__WEBPACK_IMPORTED_MODULE_2__.IDialog)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_6__.IViewModel)),
    __param(3, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_5__.IUseCaseExecutor)),
    __param(4, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_IAsyncComponentCreator__WEBPACK_IMPORTED_MODULE_1__.IAsyncComponentCreator))
], TimedOutImpl);



/***/ }),

/***/ "./src/application/useCases/updateApplicationImpl.ts":
/*!***********************************************************!*\
  !*** ./src/application/useCases/updateApplicationImpl.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateApplicationImpl": () => (/* binding */ UpdateApplicationImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/model/shellError */ "./src/domain/model/shellError.ts");
/* harmony import */ var _domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/presentation/INotification */ "./src/domain/presentation/INotification.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





let UpdateApplicationImpl = class UpdateApplicationImpl {
    constructor(qcloudApi, viewModelManager, notification) {
        this.qcloudApi = qcloudApi;
        this.viewModelManager = viewModelManager;
        this.notification = notification;
    }
    async execute(param) {
        if (!param.ID) {
            throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__.createError)({ message: `'ID' field is required!`, type: "business" });
        }
        this.oldApplication = this.viewModelManager.findObject(param.ID);
        const updatedApp = this.viewModelManager.objectUpdated({ ...this.oldApplication, ...param });
        updatedApp.synced = false;
        await this.qcloudApi.updateApplication(param.ID, param);
        this.notification.showNotification({ text: "Application updated successfully", type: "success" });
        updatedApp.synced = true;
    }
    async fail(err) {
        if (!this.oldApplication) {
            return;
        }
        this.oldApplication = this.viewModelManager.objectUpdated(this.oldApplication);
        this.oldApplication.synced = true;
    }
};
UpdateApplicationImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_4__.IViewModelManager)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_3__.INotification))
], UpdateApplicationImpl);



/***/ }),

/***/ "./src/application/useCases/updateModuleImpl.ts":
/*!******************************************************!*\
  !*** ./src/application/useCases/updateModuleImpl.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateModuleImpl": () => (/* binding */ UpdateModuleImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/model/shellError */ "./src/domain/model/shellError.ts");
/* harmony import */ var _domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/presentation/INotification */ "./src/domain/presentation/INotification.ts");
/* harmony import */ var _domain_presentation_ITreeView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/presentation/ITreeView */ "./src/domain/presentation/ITreeView.ts");
/* harmony import */ var _domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../domain/viewModel/IViewModelManager */ "./src/domain/viewModel/IViewModelManager.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






let UpdateModuleImpl = class UpdateModuleImpl {
    constructor(qcloudApi, viewModelManager, notification, feTreeview) {
        this.qcloudApi = qcloudApi;
        this.viewModelManager = viewModelManager;
        this.notification = notification;
        this.feTreeview = feTreeview;
    }
    async execute(param) {
        if (!param.ID) {
            throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__.createError)({ message: `'ID' field is required!`, type: "business" });
        }
        this.oldModule = this.viewModelManager.findObject(param.ID);
        const updatedModule = { ...this.oldModule, ...param };
        this.viewModelManager.objectUpdated(updatedModule);
        await this.qcloudApi.updateModule(param.ID, param);
        if (param.name) {
            this.feTreeview.updateItemName(param.ID, param.name);
        }
        this.notification.showNotification({ text: "Module updated successfully", type: "success" });
    }
    async fail(err) {
        if (!this.oldModule) {
            return;
        }
        this.viewModelManager.objectUpdated(this.oldModule);
    }
};
UpdateModuleImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_1__.IQCloudApi)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_viewModel_IViewModelManager__WEBPACK_IMPORTED_MODULE_5__.IViewModelManager)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_3__.INotification)),
    __param(3, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_ITreeView__WEBPACK_IMPORTED_MODULE_4__.ITreeViewInstances.FileExplorer))
], UpdateModuleImpl);



/***/ }),

/***/ "./src/application/useCases/useCaseExecutorImpl.ts":
/*!*********************************************************!*\
  !*** ./src/application/useCases/useCaseExecutorImpl.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UseCaseExecutorImpl": () => (/* binding */ UseCaseExecutorImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/infrastructure/ILogger */ "./src/domain/infrastructure/ILogger.ts");
/* harmony import */ var _domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/model/shellError */ "./src/domain/model/shellError.ts");
/* harmony import */ var _domain_presentation_ILoading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/presentation/ILoading */ "./src/domain/presentation/ILoading.ts");
/* harmony import */ var _domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/presentation/INotification */ "./src/domain/presentation/INotification.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





/**
 * <DOCS>
 * Use Case execution system (*A) is chosen instead of VM manuplation from presentation being watched by application (*B),
 * (*A) Use Case execution Ex: UI Code -> executor.executeUseCase<ICreateModule>(ICreateModule, module)
 * (*B) VM Manuplation Ex: UI Code -> viewModel.modules.push(module)
 * because;
 * 1) Presentation would not be able to receive a return value from a data (VM) manuplation. (Result of create module (*B))
 * 2) backend manuplation of VM would cause infinite triggers (backend (CreateModule) -> client -> VM -(trigger watch)-> App(CM) -> backend(CreateModule) 😁)
 */
let UseCaseExecutorImpl = class UseCaseExecutorImpl {
    constructor(logger, notification, loading) {
        this.logger = logger;
        this.notification = notification;
        this.loading = loading;
    }
    async executeUseCase(useCaseInjectionToken, ...params) {
        var _a;
        const useCase = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(useCaseInjectionToken);
        try {
            const constructParam = params[0];
            const retVal = await useCase.execute(constructParam);
            return retVal;
        }
        catch (error) {
            let retVal;
            try {
                retVal = await ((_a = useCase.fail) === null || _a === void 0 ? void 0 : _a.call(useCase, error)) || undefined;
            }
            catch (error) {
                this.handleError(error, undefined);
            }
            this.handleError(error, retVal);
            throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__.createHandledError)();
        }
    }
    async resolveUseCase(useCaseInjectionToken) {
        const useCase = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.container.resolve(useCaseInjectionToken);
        const proxyUseCase = new Proxy(useCase, {
            get: (obj, prop) => {
                const retVal = obj[prop];
                if (retVal instanceof Function) {
                    return function () {
                        const args = Array.prototype.slice.call(arguments);
                        return retVal.apply(obj, args);
                    };
                }
                return retVal;
            },
        });
        return proxyUseCase;
    }
    async execute(cb, options) {
        try {
            if (options.loading) {
                this.loading.showLoading();
            }
            const retVal = await cb();
            return retVal;
        }
        catch (error) {
            this.handleError(error, undefined);
        }
        finally {
            if (options.loading) {
                this.loading.hideLoading();
            }
        }
    }
    wrap(cb, options) {
        return async () => {
            return await this.execute(cb, options);
        };
    }
    handleError(error, retVal) {
        if (error instanceof _domain_model_shellError__WEBPACK_IMPORTED_MODULE_2__.ShellError) {
            const title = error.shellError.title || error.shellError.type + " error";
            if (!(retVal === null || retVal === void 0 ? void 0 : retVal.preventLog) && !error.shellError.preventLog) {
                if (error.shellError.type == "business") {
                    this.logger.log({ level: "log", message: error.message });
                }
                else {
                    this.logger.log({ level: "error", message: error.message, error });
                }
            }
            if (!(retVal === null || retVal === void 0 ? void 0 : retVal.preventNotification) && !error.shellError.preventNotification) {
                this.notification.showNotification({
                    text: error.message, title, type: error.shellError.type == "business" ? "warning" : "error", copy: true
                });
            }
        }
        else {
            this.handleUnknownError(error, retVal);
        }
    }
    handleUnknownError(error, retVal) {
        if (!(retVal === null || retVal === void 0 ? void 0 : retVal.preventLog)) {
            this.logger.log({ level: "error", message: "unhandled error", error });
        }
        if (!(retVal === null || retVal === void 0 ? void 0 : retVal.preventNotification)) {
            const text = error.message;
            this.notification.showNotification({ text, title: "Error", type: "error", copy: true });
        }
    }
};
UseCaseExecutorImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_ILogger__WEBPACK_IMPORTED_MODULE_1__.ILogger)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_INotification__WEBPACK_IMPORTED_MODULE_4__.INotification)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_presentation_ILoading__WEBPACK_IMPORTED_MODULE_3__.ILoading))
], UseCaseExecutorImpl);



/***/ }),

/***/ "./src/application/viewModel/viewModelManager.ts":
/*!*******************************************************!*\
  !*** ./src/application/viewModel/viewModelManager.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewModelManager": () => (/* binding */ ViewModelManager)
/* harmony export */ });
/* harmony import */ var _common_watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/watcher */ "./src/common/watcher.ts");
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../domain/viewModel/IViewModel */ "./src/domain/viewModel/IViewModel.ts");
/* harmony import */ var _domain_model_IState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/model/IState */ "./src/domain/model/IState.ts");
/* harmony import */ var _domain_presentation_IViewModelProxifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/presentation/IViewModelProxifier */ "./src/domain/presentation/IViewModelProxifier.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ViewModelManager_1;





/**
 * <DOCS>
 * new Objects placed on viewModel are proxified however their handles are not!
 *      //THIS IS OK
 *      this.viewModel.blabla = param
 *      this.viewModel.blabla.xyz // this is ok
 *
 *      //THIS IS NOT!!
 *      this.viewModel.blabla = param
 *      blabla.xyz // this is not!! -->> blabla = proxify(blabla)  \n  this.viewModel.blabla = param  \n  blabla.xyz
 */
function vmCreator() {
    return { apps: [], exportJobs: [], studio: { appId: "", appName: "", items: [] } }; // VM 
    //TODO: studio'nun nullable olması lazım.
}
let ViewModelManager = ViewModelManager_1 = class ViewModelManager {
    constructor(viewModel, state, proxifier) {
        this.viewModel = viewModel;
        this.state = state;
        this.proxifier = proxifier;
    }
    static reset() {
        const proxifier = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_presentation_IViewModelProxifier__WEBPACK_IMPORTED_MODULE_4__.IViewModelProxifier);
        _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container._registry._registryMap["delete"](_domain_model_IState__WEBPACK_IMPORTED_MODULE_3__.IState);
        if (!_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.isRegistered(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_2__.IViewModel)) {
            const vm = vmCreator();
            _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.registerInstance(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_2__.IViewModel, proxifier.proxify(vm));
        }
        else {
            const vm = _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_2__.IViewModel);
            const newVm = vmCreator();
            const newKeys = Object.keys(newVm).reduce((prev, key) => { prev.add(key); return prev; }, new Set());
            Object.keys(newVm).forEach(key => vm[key] = newVm[key]);
            Object.keys(vm).filter(key => !newKeys.has(key)).forEach(key => vm[key] = undefined);
        }
        _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.registerInstance(_domain_model_IState__WEBPACK_IMPORTED_MODULE_3__.IState, { objectDict: {} });
    }
    reset() {
        ViewModelManager_1.reset();
    }
    get userLoggedIn() {
        var _a;
        return ((_a = this.viewModel.user) === null || _a === void 0 ? void 0 : _a.loggedIn) || false;
    }
    set userLoggedIn(value) {
        this.viewModel.user.loggedIn = value; // no user should crash
    }
    initSessionUser(email, domains) {
        this.viewModel.user = { email, loggedIn: false, domains };
        if (domains.length == 1) { // #54 => Single tenant auto select
            this.viewModel.user.selectedDomain = domains[0];
        }
    }
    setApplicationList(apps) {
        this.viewModel.apps = apps;
        this.viewModel.apps.forEach(app => {
            app.synced = true;
            this.state.objectDict[app.ID] = app;
        });
    }
    setApplicationDetails(appID, details) {
        const app = this.state.objectDict[appID];
        app.details = details;
    }
    setExportJobItemList(jobs) {
        this.viewModel.exportJobs = jobs;
        this.viewModel.exportJobs.forEach(job => {
            this.state.objectDict[job.jobID] = job;
        });
    }
    setExportJobSteps(jobID, steps) {
        const job = this.viewModel.exportJobs.find(i => i.jobID == jobID);
        job.steps = steps;
        job.steps.forEach(step => {
            this.state.objectDict[step.ID] = step;
        });
    }
    setExportJobStepLogs(stepID, logs) {
        const step = this.state.objectDict[stepID];
        step.logs = logs;
    }
    setExportJobArtifacts(jobID, artifacts) {
        const job = this.viewModel.exportJobs.find(i => i.jobID == jobID);
        job.artifacts = artifacts;
        job.artifacts.forEach(artifact => {
            this.state.objectDict[artifact.ID] = artifact;
        });
    }
    modelCreated(model) {
        this.watchObjectID(model);
        this.addToParentChildren(model);
        this.state.objectDict[model.ID] = model;
    }
    moduleCreated(module) {
        module = this.proxifier.proxify(module);
        this.watchObjectID(module);
        this.addToParentChildren(module);
        this.state.objectDict[module.ID] = module;
    }
    folderCreated(folder) {
        folder = this.proxifier.proxify(folder);
        this.watchObjectID(folder);
        this.addToParentChildren(folder);
        this.state.objectDict[folder.ID] = folder;
    }
    applicationCreated(app) {
        app = this.proxifier.proxify(app);
        this.watchObjectID(app);
        this.viewModel.apps.push(app);
        this.state.objectDict[app.ID] = app;
        return app;
    }
    exportJobCreated(job) {
        var _a;
        (_a = this.viewModel.exportJobs) === null || _a === void 0 ? void 0 : _a.unshift(job);
    }
    watchObjectID(object) {
        new _common_watcher__WEBPACK_IMPORTED_MODULE_0__.Watcher(object, "ID").onChange((newId, oldId) => {
            this.state.objectDict[newId] = this.state.objectDict[oldId];
            delete this.state.objectDict[oldId];
        });
    }
    addToParentChildren(object) {
        if (!object.parent || object.parent.objectType == "application" || object.objectType == "module") {
            this.viewModel.studio.items.push(object);
            return;
        }
        object.parent.children = object.parent.children || [];
        if (!object.parent.children.find(item => item == object)) {
            object.parent.children.push(object);
        }
    }
    removeFromParentChildren(object) {
        var _a;
        if (!object.parent || object.parent.objectType == "application") {
            const objectIndex = this.viewModel.studio.items.findIndex(item => item.ID == object.ID);
            this.viewModel.studio.items.splice(objectIndex, 1);
            return;
        }
        object.parent.children = (_a = object.parent.children) === null || _a === void 0 ? void 0 : _a.filter(child => child.ID != object.ID);
    }
    findApplication(name) {
        return this.viewModel.apps.find(app => app.name == name);
    }
    findObject(objectId) {
        return this.state.objectDict[objectId];
    }
    objectUpdated(object) {
        const curObj = this.state.objectDict[object.ID];
        const newObj = this.proxifier.proxify({ ...curObj, ...object });
        this.state.objectDict[object.ID] = newObj;
        if (newObj.objectType == "application") {
            const appIndex = this.viewModel.apps.findIndex(app => app.ID == newObj.ID);
            this.viewModel.apps[appIndex] = newObj;
        }
        return newObj;
    }
    removeExportJob(jobID) {
        var _a;
        this.viewModel.exportJobs = (_a = this.viewModel.exportJobs) === null || _a === void 0 ? void 0 : _a.filter(item => item.jobID != jobID);
    }
    removeModel(model) {
        this.removeFromParentChildren(model);
        delete this.state.objectDict[model.ID];
    }
    removeFolder(folder) {
        this.removeFromParentChildren(folder);
        delete this.state.objectDict[folder.ID];
    }
    removeModule(module) {
        this.removeFromParentChildren(module);
        delete this.state.objectDict[module.ID];
    }
    removeApplication(app) {
        this.viewModel.apps = this.viewModel.apps.filter(item => item.ID != app.ID);
        delete this.state.objectDict[app.ID];
    }
    removeObject(object) {
        switch (object.objectType) {
            case "model":
                this.removeModel(object);
                break;
            case "folder":
                this.removeFolder(object);
                break;
            case "module":
                this.removeModule(object);
                break;
            case "application":
                this.removeApplication(object);
                break;
        }
    }
};
ViewModelManager = ViewModelManager_1 = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.inject)(_domain_viewModel_IViewModel__WEBPACK_IMPORTED_MODULE_2__.IViewModel)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.inject)(_domain_model_IState__WEBPACK_IMPORTED_MODULE_3__.IState)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.inject)(_domain_presentation_IViewModelProxifier__WEBPACK_IMPORTED_MODULE_4__.IViewModelProxifier))
], ViewModelManager);



/***/ }),

/***/ "./src/appsetting.ts":
/*!***************************!*\
  !*** ./src/appsetting.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appSettings": () => (/* binding */ appSettings),
/* harmony export */   "appSettingsDict": () => (/* binding */ appSettingsDict)
/* harmony export */ });
let appSettingsDict;
const appSettings = appSettingsDict = {
    default: {
        qcloudApiUrl: "https://localhost:5006/sym/",
        // qcloudApiUrl: "https://studio.onplateau.com/sym/",
        networkTimeout: 60000,
        debugging: true,
        studio: {
            commentMaxLength: 50,
            editors: {
                quick: "https://studio.onplateau.com/quick/",
                // entity: "https://localhost:8080/entity-designer/",
                entity: "https://studio.onplateau.com/entity-designer/",
            }
        },
    },
    production: {
        qcloudApiUrl: "https://studio.onplateau.com/sym/",
        networkTimeout: 60000,
        studio: {
            commentMaxLength: 50,
            editors: {
                quick: "https://studio.onplateau.com/quick/",
                entity: "https://studio.onplateau.com/entity-designer/",
            }
        },
    }
};


/***/ }),

/***/ "./src/common/promiseHelper.ts":
/*!*************************************!*\
  !*** ./src/common/promiseHelper.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPromiseData": () => (/* binding */ createPromiseData)
/* harmony export */ });
let syncResolved = false;
new Promise(res => res()).then(() => syncResolved = true);
typeof (doNothing) != "undefined" && doNothing();
const syncResolveProblem = syncResolved === true; // platform has sync resolve problem or not
/**
 * @param timeout timeout time in ms, undefined if infinite
 */
function createPromiseData(timeout, opt = {}) {
    const syncResolveFixer = (cb) => syncResolveProblem && opt.fixSyncResolve ? (value) => setTimeout(() => cb(value)) : cb;
    let resolver = undefined, reject = undefined;
    let timer;
    const startTimer = (timeout) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => { reject(new Error(`The operation has timed out. timeoutValue  : ${timeout}`)); }, timeout);
    };
    if (timeout) {
        startTimer(timeout);
    }
    return {
        startTimer,
        promise: new Promise((res, rej) => { resolver = syncResolveFixer(res); reject = rej; }),
        resolver,
        reject
    };
}


/***/ }),

/***/ "./src/common/watcher.ts":
/*!*******************************!*\
  !*** ./src/common/watcher.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Watcher": () => (/* binding */ Watcher)
/* harmony export */ });
class Watcher {
    constructor(obj, field) {
        let val = obj[field];
        Object.defineProperty(obj, field, {
            set: v => {
                if (!this.changeWatchers) {
                    val = v;
                    return;
                }
                const old = val;
                val = v;
                this.changeWatchers.forEach(watcher => watcher(val, old));
            },
            get: () => {
                if (!this.getWatchers) {
                    return val;
                }
                this.getWatchers.reduce((prev, curGetter) => curGetter(prev), val);
            }
        });
    }
    onChange(cb) {
        this.changeWatchers = this.changeWatchers || [];
        this.changeWatchers.push(cb);
    }
    onGet(cb) {
        this.getWatchers = this.getWatchers || [];
        this.getWatchers.push(cb);
    }
}


/***/ }),

/***/ "./src/domain/core/diContainer.ts":
/*!****************************************!*\
  !*** ./src/domain/core/diContainer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "container": () => (/* reexport safe */ tsyringe__WEBPACK_IMPORTED_MODULE_0__.container),
/* harmony export */   "delayTillResolve": () => (/* binding */ delayTillResolve),
/* harmony export */   "delayWithResolve": () => (/* binding */ delayWithResolve),
/* harmony export */   "inject": () => (/* reexport safe */ tsyringe__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   "injectable": () => (/* reexport safe */ tsyringe__WEBPACK_IMPORTED_MODULE_0__.injectable),
/* harmony export */   "singleton": () => (/* reexport safe */ tsyringe__WEBPACK_IMPORTED_MODULE_0__.singleton)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsyringe */ "./node_modules/tsyringe/dist/esm5/index.js");
/* harmony import */ var _common_promiseHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/promiseHelper */ "./src/common/promiseHelper.ts");


; // for vite vs webpack :( remember
function sleep() {
    const prom = (0,_common_promiseHelper__WEBPACK_IMPORTED_MODULE_1__.createPromiseData)();
    setTimeout(() => { prom.resolver(); }, 100);
    return prom.promise;
}
async function delayWithResolve(dependency, cb) {
    await delayTillResolve([dependency]);
    const dep = tsyringe__WEBPACK_IMPORTED_MODULE_0__.container.resolve(dependency);
    await cb(dep);
}
async function delayTillResolve(dependencies, cb) {
    let run = false;
    while (!run) {
        try {
            dependencies.forEach(dependency => tsyringe__WEBPACK_IMPORTED_MODULE_0__.container.resolve(dependency));
            run = true;
        }
        catch (err) {
            await sleep();
        }
    }
    await (cb === null || cb === void 0 ? void 0 : cb());
}



/***/ }),

/***/ "./src/domain/infrastructure/IConfig.ts":
/*!**********************************************!*\
  !*** ./src/domain/infrastructure/IConfig.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IConfig": () => (/* binding */ IConfig)
/* harmony export */ });
const IConfig = Symbol.for("IConfig");


/***/ }),

/***/ "./src/domain/infrastructure/IDomHelper.ts":
/*!*************************************************!*\
  !*** ./src/domain/infrastructure/IDomHelper.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IDomHelper": () => (/* binding */ IDomHelper)
/* harmony export */ });
const IDomHelper = Symbol.for("IDomHelper");


/***/ }),

/***/ "./src/domain/infrastructure/IFrameMessanger.ts":
/*!******************************************************!*\
  !*** ./src/domain/infrastructure/IFrameMessanger.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IFrameMessanger": () => (/* binding */ IFrameMessanger)
/* harmony export */ });
const IFrameMessanger = Symbol.for("IFrameMessanger");


/***/ }),

/***/ "./src/domain/infrastructure/IHook.ts":
/*!********************************************!*\
  !*** ./src/domain/infrastructure/IHook.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IHook": () => (/* binding */ IHook)
/* harmony export */ });
;
const IHook = Symbol.for("IHook");


/***/ }),

/***/ "./src/domain/infrastructure/IInlineEditor.ts":
/*!****************************************************!*\
  !*** ./src/domain/infrastructure/IInlineEditor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IInlineEditor": () => (/* binding */ IInlineEditor)
/* harmony export */ });
const IInlineEditor = Symbol.for("IInlineEditor");


/***/ }),

/***/ "./src/domain/infrastructure/ILocalization.ts":
/*!****************************************************!*\
  !*** ./src/domain/infrastructure/ILocalization.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ILocalization": () => (/* binding */ ILocalization)
/* harmony export */ });
const ILocalization = Symbol.for("ILocalization");


/***/ }),

/***/ "./src/domain/infrastructure/ILogger.ts":
/*!**********************************************!*\
  !*** ./src/domain/infrastructure/ILogger.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ILogger": () => (/* binding */ ILogger)
/* harmony export */ });
const ILogger = Symbol.for("ILogger");


/***/ }),

/***/ "./src/domain/infrastructure/INetwork.ts":
/*!***********************************************!*\
  !*** ./src/domain/infrastructure/INetwork.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INetwork": () => (/* binding */ INetwork)
/* harmony export */ });
const INetwork = Symbol.for("INetwork");


/***/ }),

/***/ "./src/domain/infrastructure/IQCloudApi.ts":
/*!*************************************************!*\
  !*** ./src/domain/infrastructure/IQCloudApi.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IQCloudApi": () => (/* binding */ IQCloudApi)
/* harmony export */ });
const IQCloudApi = Symbol.for("IQCloudApi");


/***/ }),

/***/ "./src/domain/infrastructure/IThrotler.ts":
/*!************************************************!*\
  !*** ./src/domain/infrastructure/IThrotler.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IThrottler": () => (/* binding */ IThrottler)
/* harmony export */ });
const IThrottler = Symbol.for("IThrottler");


/***/ }),

/***/ "./src/domain/infrastructure/ITimer.ts":
/*!*********************************************!*\
  !*** ./src/domain/infrastructure/ITimer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITimer": () => (/* binding */ ITimer)
/* harmony export */ });
const ITimer = Symbol.for("ITimer");


/***/ }),

/***/ "./src/domain/model/IState.ts":
/*!************************************!*\
  !*** ./src/domain/model/IState.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IState": () => (/* binding */ IState)
/* harmony export */ });
const IState = Symbol.for("IState");


/***/ }),

/***/ "./src/domain/model/shellError.ts":
/*!****************************************!*\
  !*** ./src/domain/model/shellError.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShellError": () => (/* binding */ ShellError),
/* harmony export */   "createError": () => (/* binding */ createError),
/* harmony export */   "createHandledError": () => (/* binding */ createHandledError),
/* harmony export */   "notImplementedError": () => (/* binding */ notImplementedError)
/* harmony export */ });
class ShellError extends Error {
    constructor(error) {
        super(error.message);
        this.shellError = error;
    }
}
function createError(error) {
    return new ShellError(error);
}
function createHandledError() {
    return new ShellError({ message: "", type: "technical", preventLog: true, preventNotification: true });
}
function notImplementedError(name) {
    return new ShellError({ type: "technical", title: "Not Implemented", message: `${name} not implemented.` });
}


/***/ }),

/***/ "./src/domain/objects/IEditorManager.ts":
/*!**********************************************!*\
  !*** ./src/domain/objects/IEditorManager.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IEditorManager": () => (/* binding */ IEditorManager)
/* harmony export */ });
const IEditorManager = Symbol.for("IEditorManager");


/***/ }),

/***/ "./src/domain/objects/ISesionManager.ts":
/*!**********************************************!*\
  !*** ./src/domain/objects/ISesionManager.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ISessionManager": () => (/* binding */ ISessionManager)
/* harmony export */ });
const ISessionManager = Symbol.for("ISessionManager");


/***/ }),

/***/ "./src/domain/objects/ISidebarManager.ts":
/*!***********************************************!*\
  !*** ./src/domain/objects/ISidebarManager.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ISidebarManager": () => (/* binding */ ISidebarManager)
/* harmony export */ });
const ISidebarManager = Symbol.for("ISidebarManager");


/***/ }),

/***/ "./src/domain/objects/editors/IEditor.ts":
/*!***********************************************!*\
  !*** ./src/domain/objects/editors/IEditor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IEditor": () => (/* binding */ IEditor)
/* harmony export */ });
const IEditor = Symbol.for("IEditor");


/***/ }),

/***/ "./src/domain/objects/editors/IEntityDesignerEditor.ts":
/*!*************************************************************!*\
  !*** ./src/domain/objects/editors/IEntityDesignerEditor.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IEntityDesignerEditor": () => (/* binding */ IEntityDesignerEditor)
/* harmony export */ });
const IEntityDesignerEditor = Symbol.for("IEntityDesignerEditor");


/***/ }),

/***/ "./src/domain/objects/editors/IProcessDesignEditor.ts":
/*!************************************************************!*\
  !*** ./src/domain/objects/editors/IProcessDesignEditor.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IProcessDesignEditor": () => (/* binding */ IProcessDesignEditor)
/* harmony export */ });
const IProcessDesignEditor = Symbol.for("IProcessDesignEditor");


/***/ }),

/***/ "./src/domain/objects/editors/IQuickEditor.ts":
/*!****************************************************!*\
  !*** ./src/domain/objects/editors/IQuickEditor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IQuickEditor": () => (/* binding */ IQuickEditor)
/* harmony export */ });
const IQuickEditor = Symbol.for("IQuickEditor");


/***/ }),

/***/ "./src/domain/objects/editors/processEditor/IProcessEditor.ts":
/*!********************************************************************!*\
  !*** ./src/domain/objects/editors/processEditor/IProcessEditor.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IProcessEditor": () => (/* binding */ IProcessEditor)
/* harmony export */ });
const IProcessEditor = Symbol.for("IProcessEditor");


/***/ }),

/***/ "./src/domain/objects/editors/processEditor/constants/processTemplates.ts":
/*!********************************************************************************!*\
  !*** ./src/domain/objects/editors/processEditor/constants/processTemplates.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_CONFIG_FILE": () => (/* binding */ BASE_CONFIG_FILE),
/* harmony export */   "DOUBLE_APPROVAL": () => (/* binding */ DOUBLE_APPROVAL),
/* harmony export */   "EMPTY_CONFIG_FILE": () => (/* binding */ EMPTY_CONFIG_FILE),
/* harmony export */   "QUADRUPLE_APPROVAL": () => (/* binding */ QUADRUPLE_APPROVAL),
/* harmony export */   "QUINTUPLE_APPROVAL": () => (/* binding */ QUINTUPLE_APPROVAL),
/* harmony export */   "SINGLE_APPROVAL": () => (/* binding */ SINGLE_APPROVAL),
/* harmony export */   "TRIPLE_APPROVAL": () => (/* binding */ TRIPLE_APPROVAL),
/* harmony export */   "extraProcessConfigVariables": () => (/* binding */ extraProcessConfigVariables),
/* harmony export */   "processTypes": () => (/* binding */ processTypes)
/* harmony export */ });
const BASE_CONFIG_FILE = (__webpack_require__(/*! ../data/baseConfigTemplate */ "./src/domain/objects/editors/processEditor/data/baseConfigTemplate.ts")["default"]);
const EMPTY_CONFIG_FILE = (__webpack_require__(/*! ../data/emptyConfigTemplate */ "./src/domain/objects/editors/processEditor/data/emptyConfigTemplate.ts")["default"]);
const SINGLE_APPROVAL = {
    value: "single_approval",
    name: "Single Approval",
    bpmnFile: (__webpack_require__(/*! ../data/singleApprovalBpmn */ "./src/domain/objects/editors/processEditor/data/singleApprovalBpmn.ts")["default"]),
    configFile: (__webpack_require__(/*! ../data/singleApprovalConfigTemplate */ "./src/domain/objects/editors/processEditor/data/singleApprovalConfigTemplate.ts")["default"]),
};
const DOUBLE_APPROVAL = {
    value: "double_approval",
    name: "Double Approval",
    bpmnFile: (__webpack_require__(/*! ../data/doubleApprovalBpmn */ "./src/domain/objects/editors/processEditor/data/doubleApprovalBpmn.ts")["default"]),
    configFile: (__webpack_require__(/*! ../data/doubleApprovalConfigTemplate */ "./src/domain/objects/editors/processEditor/data/doubleApprovalConfigTemplate.ts")["default"]),
};
const TRIPLE_APPROVAL = {
    value: "triple_approval",
    name: "Triple Approval",
    bpmnFile: (__webpack_require__(/*! ../data/tripleApprovalBpmn */ "./src/domain/objects/editors/processEditor/data/tripleApprovalBpmn.ts")["default"]),
    configFile: (__webpack_require__(/*! ../data/tripleApprovalConfigTemplate */ "./src/domain/objects/editors/processEditor/data/tripleApprovalConfigTemplate.ts")["default"]),
};
const QUADRUPLE_APPROVAL = {
    value: "quadruple_approval",
    name: "Quadruple Approval",
    bpmnFile: (__webpack_require__(/*! ../data/quadrupleApprovalBpmn */ "./src/domain/objects/editors/processEditor/data/quadrupleApprovalBpmn.ts")["default"]),
    configFile: (__webpack_require__(/*! ../data/quadrupleApprovalConfigTemplate */ "./src/domain/objects/editors/processEditor/data/quadrupleApprovalConfigTemplate.ts")["default"]),
};
const QUINTUPLE_APPROVAL = {
    value: "quintuple_approval",
    name: "Quintuple Approval",
    bpmnFile: (__webpack_require__(/*! ../data/quintupleApprovalBpmn */ "./src/domain/objects/editors/processEditor/data/quintupleApprovalBpmn.ts")["default"]),
    configFile: (__webpack_require__(/*! ../data/quintupleApprovalConfigTemplate */ "./src/domain/objects/editors/processEditor/data/quintupleApprovalConfigTemplate.ts")["default"]),
};
const processTypes = [
    SINGLE_APPROVAL,
    DOUBLE_APPROVAL,
    TRIPLE_APPROVAL,
    QUADRUPLE_APPROVAL,
    QUINTUPLE_APPROVAL,
];
const extraProcessConfigVariables = [
    {
        key: "isAutoAssign",
        type: "BOOLEAN",
        value: true,
        valueType: "BOOLEAN",
        isAddedVariable: true,
    },
    {
        key: "businessKey",
        type: "STRING",
        value: "",
        valueType: "STRING",
        isAddedVariable: true,
    },
    {
        key: "entityId",
        type: "STRING",
        value: "",
        valueType: "STRING",
        isAddedVariable: true,
    },
    {
        key: "tenantId",
        type: "STRING",
        value: "rally-micro",
        valueType: "STRING",
        isAddedVariable: true,
    },
    {
        key: "reviewStep",
        type: "BOOLEAN",
        value: false,
        valueType: "BOOLEAN",
        isAddedVariable: true,
    },
];


/***/ }),

/***/ "./src/domain/objects/editors/processEditor/data/baseConfigTemplate.ts":
/*!*****************************************************************************!*\
  !*** ./src/domain/objects/editors/processEditor/data/baseConfigTemplate.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`rally:
    process:
        auto-deploy:
            enabled: true
            processes:
                - path: classpath:/processes/BPMN___FILE___NAME.bpmn
                  key: BPMN___FILE___NAME
                  suspend-definition: true
                  suspend-include-instances: true
                  delete-definition: false
                  delete-include-instances: true
                  version: v1
            metadata:
                processMetadata:
                    - identifierName: BPMN___FILE___NAME
                      keyword:
                      processName: BPMN___FILE___NAME
                      resourceCode: BPMN___FILE___NAME
                      variables:
                          - key: isAutoAssign
                            type: BOOLEAN
                            value: true
                          - key: runAfterApprovalApi
                            type: STRING
                            value: RUN___AFTER___APPROVAL___API
                          - key: runAfterApprovalMethod
                            type: STRING
                            value: RUN___AFTER___APPROVAL___METHOD
                          - key: isRunAfterApprovalEnable
                            type: boolean
                            value: IS___RUN___AFTER___APPROVAL___ENABLE
                          - key: runAfterRejectedApi
                            type: STRING
                            value: RUN___AFTER___REJECTED___API
                          - key: runAfterRejectedMethod
                            type: STRING
                            value: RUN___AFTER___REJECTED___METHOD
                          - key: isRunAfterRejectedEnable
                            type: boolean
                            value: IS___RUN___AFTER___REJECTED___ENABLE
                          - key: runAfterChangeAdvisedApi
                            type: STRING
                            value: RUN___AFTER___CHANGEADVISED___API
                          - key: runAfterChangeAdvisedMethod
                            type: STRING
                            value: RUN___AFTER___CHANGEADVISED___METHOD
                          - key: isRunAfterChangeAdvisedEnable
                            type: boolean
                            value: IS___RUN___AFTER___CHANGEADVISED___ENABLE
                          - key: selectApproverForm
                            type: STRING
                            value: selectapprover
                          - key: businessKey
                            type: STRING
                            value:
                          - key: entityId
                            type: STRING
                            value:
                          - key: tenantId
                            type: STRING
                            value: rally-micro
                          - key: reviewStep
                            type: BOOLEAN
                            value: false
                          - key: detailedForm
                            type: STRING
                            value: START___PAGE___NAME
                          - key: startForm
                            type: STRING
                            value: START___FORM___NAME
                          - key: reviewForm
                            type: STRING
                            value: REVIEW___FORM___NAME
                          - key: useHierarchicalProcess
                            type: BOOLEAN
                            value: USE___HIERARCHICAL___PROCESS
                          - key: instUnitHierarchy
                            type: STRING
                            value: INST___UNIT___HIERARCHY
                          - key: ignoreLevelForDiffInstUnit
                            type: BOOLEAN
                            value: IGNORE___LEVEL___FOR___DIFF___INST___UNIT
                makerCheckerRoles: MAKER__CHECKER__ROLES`);


/***/ }),

/***/ "./src/domain/objects/editors/processEditor/data/doubleApprovalBpmn.ts":
/*!*****************************************************************************!*\
  !*** ./src/domain/objects/editors/processEditor/data/doubleApprovalBpmn.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('<?xml version="1.0" encoding="UTF-8"?>' +
    '<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1yo3az1" targetNamespace="generic" exporter="Camunda Modeler" exporterVersion="4.3.0">' +
    '  <bpmn:process id="PROCESS_ID_" name="PROCESS_NAME_" isExecutable="true">' +
    '    <bpmn:startEvent id="StartEvent_1">' +
    '      <bpmn:outgoing>Flow_Start</bpmn:outgoing>' +
    '    </bpmn:startEvent>' +
    '    <bpmn:sequenceFlow id="Flow_Start" sourceRef="StartEvent_1" targetRef="SubProcess_firstApproval" />' +
    '    <bpmn:callActivity id="SubProcess_firstApproval" name="First Approval Subprocess Call" calledElement="rally-approval-subprocess">' +
    '      <bpmn:extensionElements>' +
    '        <camunda:in variables="all" />' +
    '        <camunda:in source="initiator" target="initiator" />' +
    '        <camunda:in source="selectApproverForm" target="selectApproverForm" />' +
    '        <camunda:in source="formJson" target="formJson" />' +
    '        <camunda:in source="supportingForm" target="supportingForm" />' +
    '        <camunda:in source="isAutoAssign" target="isAutoAssign" />' +
    '        <camunda:out source="evaluationResult" target="evaluationResult" />' +
    '        <camunda:in source="userId" target="userId" />' +
    '        <camunda:in source="tenantId" target="tenantId" />' +
    '        <camunda:in source="resourceCode" target="resourceCode" />' +
    '        <camunda:properties>' +
    '          <camunda:property />' +
    '        </camunda:properties>' +
    '        <camunda:in source="refreshAfterSendToApproval" target="refreshAfterSendToApproval" />' +
    '        <camunda:out source="formJson" target="formJson" />' +
    '        <camunda:out source="entityId" target="entityId" />' +
    '        <camunda:in source="isChange" target="isChange" />' +
    '        <camunda:in sourceExpression="[&#34;APPROVED&#34;,&#34;REJECTED&#34;,&#34;CHANGES_ADVISED&#34;]" target="evaluationResultList" />' +
    '        <camunda:out source="identifierFilterName" target="identifierFilterName" />' +
    '        <camunda:out source="detailLable" target="detailLable" />' +
    '        <camunda:in source="useHierarchicalProcess" target="useHierarchicalProcess" />' +
    '        <camunda:in source="instUnitHierarchy" target="instUnitHierarchy" />' +
    '        <camunda:in source="ignoreLevelForDiffInstUnit" target="ignoreLevelForDiffInstUnit" />' +
    '      </bpmn:extensionElements>' +
    '      <bpmn:incoming>Flow_Start</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_makerReview</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_firstApproval</bpmn:outgoing>' +
    '    </bpmn:callActivity>' +
    '    <bpmn:sequenceFlow id="Flow_firstApproval" sourceRef="SubProcess_firstApproval" targetRef="ExclusiveGateway_firstEval" />' +
    '    <bpmn:exclusiveGateway id="ExclusiveGateway_firstEval" name="First eval approved ?">' +
    '      <bpmn:incoming>Flow_firstApproval</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_firstEvalChangeAdvisedWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalChangeAdvisedWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalRejectWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalApprove</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalRejectWithoutAPICall</bpmn:outgoing>' +
    '    </bpmn:exclusiveGateway>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalApprove" name="Approve" sourceRef="ExclusiveGateway_firstEval" targetRef="SubProcess_secondApproval">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED" }</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalChangeAdvisedWithAPICall" name="Changes Advised With API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="ServiceTask_changeAdvisedServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalChangeAdvisedWithoutAPICall" name="Changes Advised Without API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="UserTask_makerReview"> ' +
    '       <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalRejectWithAPICall" name="Reject With API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="ServiceTask_rejectServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '   <bpmn:sequenceFlow id="Flow_firstEvalRejectWithoutAPICall" name="Reject Without API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="the_end">' +
    '     <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == false}</bpmn:conditionExpression>' +
    '   </bpmn:sequenceFlow>' +
    '    <bpmn:callActivity id="SubProcess_secondApproval" name="Second Approval Subprocess Call" calledElement="rally-approval-subprocess">' +
    '      <bpmn:extensionElements>' +
    '        <camunda:in variables="all" />' +
    '        <camunda:in source="initiator" target="initiator" />' +
    '        <camunda:in source="selectApproverForm" target="selectApproverForm" />' +
    '        <camunda:in source="formJson" target="formJson" />' +
    '        <camunda:in source="supportingForm2" target="supportingForm" />' +
    '        <camunda:in source="isAutoAssign" target="isAutoAssign" />' +
    '        <camunda:out source="evaluationResult" target="evaluationResult" />' +
    '        <camunda:in source="userId" target="userId" />' +
    '        <camunda:in source="tenantId" target="tenantId" />' +
    '        <camunda:in source="resourceCode" target="resourceCode" />' +
    '        <camunda:properties>' +
    '          <camunda:property />' +
    '        </camunda:properties>' +
    '        <camunda:in source="refreshAfterSendToApproval" target="refreshAfterSendToApproval" />' +
    '        <camunda:out source="formJson" target="formJson" />' +
    '        <camunda:out source="entityId" target="entityId" />' +
    '        <camunda:in source="isChange" target="isChange" />' +
    '        <camunda:in sourceExpression="[&#34;APPROVED&#34;,&#34;REJECTED&#34;,&#34;CHANGES_ADVISED&#34;]" target="evaluationResultList" />' +
    '        <camunda:in source="checkerRoles2" target="sys_roleNames" />' +
    '        <camunda:out source="identifierFilterName" target="identifierFilterName" />' +
    '        <camunda:out source="detailLable" target="detailLable" />' +
    '        <camunda:in source="useHierarchicalProcess" target="useHierarchicalProcess" />' +
    '        <camunda:in source="instUnitHierarchy" target="instUnitHierarchy" />' +
    '        <camunda:in source="ignoreLevelForDiffInstUnit" target="ignoreLevelForDiffInstUnit" />' +
    '      </bpmn:extensionElements>' +
    '      <bpmn:incoming>Flow_firstEvalApprove</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_secondApproval</bpmn:outgoing>' +
    '    </bpmn:callActivity>' +
    '    <bpmn:sequenceFlow id="Flow_secondApproval" sourceRef="SubProcess_secondApproval" targetRef="ExclusiveGateway_secondEval" />' +
    '    <bpmn:exclusiveGateway id="ExclusiveGateway_secondEval" name="Second eval approved ?">' +
    '      <bpmn:incoming>Flow_secondApproval</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_secondEvalRejectWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_secondEvalChangeAdvisedWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_secondEvalApproveWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_secondEvalApproveWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_secondEvalRejectWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_secondEvalChangeAdvisedWithAPICall</bpmn:outgoing>' +
    '    </bpmn:exclusiveGateway>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalApproveWithAPICall" name="Approve With API Call" sourceRef="ExclusiveGateway_secondEval" targetRef="ServiceTask_approveServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED" &amp;&amp; isRunAfterApprovalEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalApproveWithoutAPICall" name="Approve Without API Call" sourceRef="ExclusiveGateway_secondEval" targetRef="the_end">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED" &amp;&amp; isRunAfterApprovalEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalRejectWithAPICall" name="Reject With API Call" sourceRef="ExclusiveGateway_secondEval" targetRef="ServiceTask_rejectServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalRejectWithoutAPICall" name="Reject Without API Call" sourceRef="ExclusiveGateway_secondEval" targetRef="the_end">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalChangeAdvisedWithAPICall" name="Changes Advised With API Call" sourceRef="ExclusiveGateway_secondEval" targetRef="ServiceTask_changeAdvisedServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalChangeAdvisedWithoutAPICall" name="Changes Advised Without API Call" sourceRef="ExclusiveGateway_secondEval" targetRef="UserTask_makerReview">' +
    '       <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:serviceTask id="ServiceTask_approveServiceCall" name="After Approve Service Call" camunda:expression="$' + '{' + 'flowRestCallComponent.init(execution).execute(runAfterApprovalApi, runAfterApprovalMethod, formJson)}">' +
    '      <bpmn:incoming>Flow_secondEvalApproveWithAPICall</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_afterApproveServiceCalled</bpmn:outgoing>' +
    '    </bpmn:serviceTask>' +
    '    <bpmn:sequenceFlow id="Flow_afterApproveServiceCalled" sourceRef="ServiceTask_approveServiceCall" targetRef="the_end" />' +
    '    <bpmn:serviceTask id="ServiceTask_rejectServiceCall" name="After Reject Service Call" camunda:expression="$' + '{' + 'flowRestCallComponent.init(execution).execute(runAfterRejectedApi, runAfterRejectedMethod, formJson)}">' +
    '      <bpmn:incoming>Flow_firstEvalRejectWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_secondEvalRejectWithAPICall</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_afterRejectServiceCalled</bpmn:outgoing>' +
    '    </bpmn:serviceTask>' +
    '    <bpmn:sequenceFlow id="Flow_afterRejectServiceCalled" sourceRef="ServiceTask_rejectServiceCall" targetRef="the_end" />' +
    '    <bpmn:serviceTask id="ServiceTask_changeAdvisedServiceCall" name="After Change AdvisedService Call" camunda:expression="$' + '{' + 'flowRestCallComponent.init(execution).execute(runAfterChangeAdvisedApi, runAfterChangeAdvisedMethod, formJson)}">' +
    '      <bpmn:incoming>Flow_firstEvalChangeAdvisedWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_secondEvalChangeAdvisedWithAPICall</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_afterChangeAdvisedServiceCalled</bpmn:outgoing>' +
    '    </bpmn:serviceTask>' +
    '    <bpmn:sequenceFlow id="Flow_afterChangeAdvisedServiceCalled" sourceRef="ServiceTask_changeAdvisedServiceCall" targetRef="UserTask_makerReview" />' +
    '    <bpmn:userTask id="UserTask_makerReview" name="Maker Review" camunda:formKey="$' + '{' + 'reviewForm}" camunda:assignee="$' + '{' + 'initiator}">' +
    '       <bpmn:incoming>Flow_secondEvalChangeAdvisedWithoutAPICall</bpmn:incoming>' +
    '       <bpmn:incoming>Flow_firstEvalChangeAdvisedWithoutAPICall</bpmn:incoming>' +
    '       <bpmn:incoming>Flow_afterChangeAdvisedServiceCalled</bpmn:incoming>' +
    '       <bpmn:outgoing>Flow_makerReview</bpmn:outgoing>' +
    '    </bpmn:userTask>' +
    '    <bpmn:sequenceFlow id="Flow_makerReview" sourceRef="UserTask_makerReview" targetRef="SubProcess_firstApproval" />' +
    '    <bpmn:endEvent id="the_end">' +
    '      <bpmn:incoming>Flow_secondEvalApproveWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_afterApproveServiceCalled</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_secondEvalRejectWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_afterRejectServiceCalled</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_firstEvalRejectWithoutAPICall</bpmn:incoming>' +
    '    </bpmn:endEvent>' +
    '  </bpmn:process>' +
    '  <bpmndi:BPMNDiagram id="BPMNDiagram_1">' +
    '    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="PROCESS_ID_">' +
    '      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">' +
    '        <dc:Bounds x="152" y="315" width="36" height="36" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="SequenceFlow_1buh9jb_di" bpmnElement="Flow_Start">' +
    '        <di:waypoint x="188" y="333" />' +
    '        <di:waypoint x="245" y="334" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_0blirif_di" bpmnElement="SubProcess_firstApproval">' +
    '        <dc:Bounds x="245" y="284" width="169" height="99" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_1sftvt9_di" bpmnElement="Flow_firstApproval">' +
    '        <di:waypoint x="414" y="327" />' +
    '        <di:waypoint x="545" y="327" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Gateway_01wcpgn_di" bpmnElement="ExclusiveGateway_firstEval" isMarkerVisible="true">' +
    '        <dc:Bounds x="545" y="302" width="50" height="50" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="512" y="273" width="56" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_0krjt2c_di" bpmnElement="Flow_firstEvalApprove">' +
    '        <di:waypoint x="593" y="329" />' +
    '        <di:waypoint x="715" y="330" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="636" y="312" width="40" height="14" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0avecud_di" bpmnElement="Flow_firstEvalRejectWithAPICall">' +
    '        <di:waypoint x="576" y="308" />' +
    '        <di:waypoint x="620" y="180" />' +
    '        <di:waypoint x="1140" y="180" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="624" y="186" width="78" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_082bj54_di" bpmnElement="Flow_firstEvalRejectWithoutAPICall">' +
    '        <di:waypoint x="570" y="302" />' +
    '        <di:waypoint x="570" y="120" />' +
    '        <di:waypoint x="1380" y="120" />' +
    '        <di:waypoint x="1380" y="310" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="583" y="86" width="73" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1g2o010_di" bpmnElement="Flow_firstEvalChangeAdvisedWithoutAPICall">' +
    '          <di:waypoint x="566" y="348" />' +
    '          <di:waypoint x="540" y="470" />' +
    '          <di:waypoint x="380" y="470" />' +
    '           <bpmndi:BPMNLabel>' +
    '               <dc:Bounds x="416" y="436" width="87" height="27" />' +
    '           </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1njia0o_di" bpmnElement="Flow_firstEvalChangeAdvisedWithAPICall">' +
    '        <di:waypoint x="570" y="352" />' +
    '        <di:waypoint x="570" y="590" />' +
    '        <di:waypoint x="380" y="590" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="476" y="552" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1l1ioqa_di" bpmnElement="Flow_secondApproval">' +
    '        <di:waypoint x="884" y="328" />' +
    '        <di:waypoint x="1005" y="328" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_0kr41px_di" bpmnElement="SubProcess_secondApproval">' +
    '        <dc:Bounds x="715" y="284" width="169" height="99" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNShape id="Gateway_1odidjw_di" bpmnElement="ExclusiveGateway_secondEval" isMarkerVisible="true">' +
    '        <dc:Bounds x="1005" y="303" width="50" height="50" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="959" y="286" width="62" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_1we0opa_di" bpmnElement="Flow_secondEvalApproveWithAPICall">' +
    '        <di:waypoint x="1030" y="353" />' +
    '        <di:waypoint x="1030" y="490" />' +
    '        <di:waypoint x="1160" y="490" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1038" y="456" width="86" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_19wrz3c_di" bpmnElement="Flow_secondEvalApproveWithoutAPICall">' +
    '        <di:waypoint x="1047" y="336" />' +
    '        <di:waypoint x="1060" y="350" />' +
    '        <di:waypoint x="1340" y="350" />' +
    '        <di:waypoint x="1357" y="337" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1149" y="356" width="82" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1d1pjnx_di" bpmnElement="Flow_secondEvalRejectWithAPICall">' +
    '        <di:waypoint x="1030" y="303" />' +
    '        <di:waypoint x="1030" y="200" />' +
    '        <di:waypoint x="1140" y="200" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1037" y="207" width="78" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_07i3a7a_di" bpmnElement="Flow_secondEvalRejectWithoutAPICall">' +
    '        <di:waypoint x="1043" y="316" />' +
    '        <di:waypoint x="1060" y="300" />' +
    '        <di:waypoint x="1340" y="300" />' +
    '        <di:waypoint x="1356" y="315" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1163" y="273" width="73" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1suewxz_di" bpmnElement="Flow_secondEvalChangeAdvisedWithAPICall">' +
    '        <di:waypoint x="1027" y="350" />' +
    '        <di:waypoint x="990" y="610" />' +
    '        <di:waypoint x="380" y="610" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="896" y="576" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_13q6m0d_di" bpmnElement="Flow_secondEvalChangeAdvisedWithoutAPICall">' +
    '          <di:waypoint x="1023" y="346" />' +
    '          <di:waypoint x="970" y="490" />' +
    '          <di:waypoint x="380" y="490" />' +
    '          <bpmndi:BPMNLabel>' +
    '               <dc:Bounds x="876" y="456" width="87" height="27" />' +
    '          </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0g0mvga_di" bpmnElement="Flow_makerReview">' +
    '          <di:waypoint x="330" y="450" />' +
    '          <di:waypoint x="330" y="383" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_17wtmwp_di" bpmnElement="Flow_afterApproveServiceCalled">' +
    '        <di:waypoint x="1260" y="490" />' +
    '        <di:waypoint x="1370" y="490" />' +
    '        <di:waypoint x="1370" y="343" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1yw8dpc_di" bpmnElement="Flow_afterRejectServiceCalled">' +
    '        <di:waypoint x="1240" y="190" />' +
    '        <di:waypoint x="1370" y="190" />' +
    '        <di:waypoint x="1370" y="307" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0m4949e_di" bpmnElement="Flow_afterChangeAdvisedServiceCalled">' +
    '        <di:waypoint x="330" y="570" />' +
    '        <di:waypoint x="330" y="530" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_01pjydm_di" bpmnElement="ServiceTask_approveServiceCall">' +
    '        <dc:Bounds x="1160" y="450" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNShape id="Activity_04bgg06_di" bpmnElement="ServiceTask_changeAdvisedServiceCall">' +
    '        <dc:Bounds x="280" y="570" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNShape id="Activity_07ilzo8_di" bpmnElement="ServiceTask_rejectServiceCall">' +
    '        <dc:Bounds x="1140" y="150" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNShape id="Activity_0h8lnkn_di" bpmnElement="UserTask_makerReview">' +
    '        <dc:Bounds x="280" y="450" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNShape id="Event_10qkdoc_di" bpmnElement="the_end">' +
    '        <dc:Bounds x="1352" y="307" width="36" height="36" />' +
    '      </bpmndi:BPMNShape>' +
    '    </bpmndi:BPMNPlane>' +
    '  </bpmndi:BPMNDiagram>' +
    '</bpmn:definitions>');


/***/ }),

/***/ "./src/domain/objects/editors/processEditor/data/doubleApprovalConfigTemplate.ts":
/*!***************************************************************************************!*\
  !*** ./src/domain/objects/editors/processEditor/data/doubleApprovalConfigTemplate.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`rally:
    process:
        auto-deploy:
            metadata:
                processMetadata:
                    - variables:
                          - key: supportingForm
                            type: STRING
                            value: supportingForm
                          - key: supportingForm2
                            type: STRING
                            value: supportingForm2
                          - key: checkerRoles2
                            type: STRING
                            value: checkerRoles2`);


/***/ }),

/***/ "./src/domain/objects/editors/processEditor/data/emptyConfigTemplate.ts":
/*!******************************************************************************!*\
  !*** ./src/domain/objects/editors/processEditor/data/emptyConfigTemplate.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`rally:
    process:
        auto-deploy:
            enabled: true
            processes:
                - path: classpath:/processes/BPMN___FILE___NAME.bpmn
                  key: BPMN___FILE___NAME
                  suspend-definition: true
                  suspend-include-instances: true
                  delete-definition: false
                  delete-include-instances: true
                  version: v1
            metadata:
                processMetadata:
                    - identifierName: BPMN___FILE___NAME
                      keyword:
                      processName: BPMN___FILE___NAME
                      resourceCode: BPMN___FILE___NAME
                      variables:
                makerCheckerRoles: MAKER__CHECKER__ROLES`);


/***/ }),

/***/ "./src/domain/objects/editors/processEditor/data/quadrupleApprovalBpmn.ts":
/*!********************************************************************************!*\
  !*** ./src/domain/objects/editors/processEditor/data/quadrupleApprovalBpmn.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('<?xml version="1.0" encoding="UTF-8"?>' +
    '<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1yo3az1" targetNamespace="generic" exporter="Camunda Modeler" exporterVersion="4.3.0">' +
    '  <bpmn:process id="PROCESS_ID_" name="PROCESS_NAME_" isExecutable="true">' +
    '    <bpmn:startEvent id="StartEvent_1">' +
    '      <bpmn:outgoing>Flow_Start</bpmn:outgoing>' +
    '    </bpmn:startEvent>' +
    '    <bpmn:sequenceFlow id="Flow_Start" sourceRef="StartEvent_1" targetRef="SubProcess_firstApproval" />' +
    '    <bpmn:callActivity id="SubProcess_firstApproval" name="First Approval Subprocess Call" calledElement="rally-approval-subprocess">' +
    '      <bpmn:extensionElements>' +
    '        <camunda:in variables="all" />' +
    '        <camunda:in source="initiator" target="initiator" />' +
    '        <camunda:in source="selectApproverForm" target="selectApproverForm" />' +
    '        <camunda:in source="formJson" target="formJson" />' +
    '        <camunda:in source="supportingForm" target="supportingForm" />' +
    '        <camunda:in source="isAutoAssign" target="isAutoAssign" />' +
    '        <camunda:out source="evaluationResult" target="evaluationResult" />' +
    '        <camunda:in source="userId" target="userId" />' +
    '        <camunda:in source="tenantId" target="tenantId" />' +
    '        <camunda:in source="resourceCode" target="resourceCode" />' +
    '        <camunda:properties>' +
    '          <camunda:property />' +
    '        </camunda:properties>' +
    '        <camunda:in source="refreshAfterSendToApproval" target="refreshAfterSendToApproval" />' +
    '        <camunda:out source="formJson" target="formJson" />' +
    '        <camunda:out source="entityId" target="entityId" />' +
    '        <camunda:in source="isChange" target="isChange" />' +
    '        <camunda:in sourceExpression="[&#34;APPROVED&#34;,&#34;REJECTED&#34;,&#34;CHANGES_ADVISED&#34;]" target="evaluationResultList" />' +
    '        <camunda:out source="identifierFilterName" target="identifierFilterName" />' +
    '        <camunda:out source="detailLable" target="detailLable" />' +
    '        <camunda:in source="useHierarchicalProcess" target="useHierarchicalProcess" />' +
    '        <camunda:in source="instUnitHierarchy" target="instUnitHierarchy" />' +
    '        <camunda:in source="ignoreLevelForDiffInstUnit" target="ignoreLevelForDiffInstUnit" />' +
    '      </bpmn:extensionElements>' +
    '      <bpmn:incoming>Flow_Start</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_makerReview</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_firstApproval</bpmn:outgoing>' +
    '    </bpmn:callActivity>' +
    '    <bpmn:sequenceFlow id="Flow_firstApproval" sourceRef="SubProcess_firstApproval" targetRef="ExclusiveGateway_firstEval" />' +
    '    <bpmn:exclusiveGateway id="ExclusiveGateway_firstEval" name="First eval approved ?">' +
    '      <bpmn:incoming>Flow_firstApproval</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_firstEvalRejectWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalApprove</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalChangeAdvisedWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalRejectWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalChangeAdvisedWithAPICall</bpmn:outgoing>' +
    '    </bpmn:exclusiveGateway>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalApprove" name="Approve" sourceRef="ExclusiveGateway_firstEval" targetRef="SubProcess_secondApproval">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED"}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalRejectWithAPICall" name="Reject With API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="ServiceTask_rejectServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalRejectWithoutAPICall" name="Reject Without API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="the_end">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalChangeAdvisedWithAPICall" name="Changes Advised With API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="ServiceTask_changeAdvisedServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalChangeAdvisedWithoutAPICall" name="Changes Advised Without API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="UserTask_makerReview">' +
    '        <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:callActivity id="SubProcess_secondApproval" name="Second Approval Subprocess Call" calledElement="rally-approval-subprocess">' +
    '      <bpmn:extensionElements>' +
    '        <camunda:in variables="all" />' +
    '        <camunda:in source="initiator" target="initiator" />' +
    '        <camunda:in source="selectApproverForm" target="selectApproverForm" />' +
    '        <camunda:in source="formJson" target="formJson" />' +
    '        <camunda:in source="supportingForm2" target="supportingForm" />' +
    '        <camunda:in source="isAutoAssign" target="isAutoAssign" />' +
    '        <camunda:out source="evaluationResult" target="evaluationResult" />' +
    '        <camunda:in source="userId" target="userId" />' +
    '        <camunda:in source="tenantId" target="tenantId" />' +
    '        <camunda:in source="resourceCode" target="resourceCode" />' +
    '        <camunda:properties>' +
    '          <camunda:property />' +
    '        </camunda:properties>' +
    '        <camunda:in source="refreshAfterSendToApproval" target="refreshAfterSendToApproval" />' +
    '        <camunda:out source="formJson" target="formJson" />' +
    '        <camunda:out source="entityId" target="entityId" />' +
    '        <camunda:in source="isChange" target="isChange" />' +
    '        <camunda:in sourceExpression="[&#34;APPROVED&#34;,&#34;REJECTED&#34;,&#34;CHANGES_ADVISED&#34;]" target="evaluationResultList" />' +
    '        <camunda:in source="checkerRoles2" target="sys_roleNames" />' +
    '        <camunda:out source="identifierFilterName" target="identifierFilterName" />' +
    '        <camunda:out source="detailLable" target="detailLable" />' +
    '        <camunda:in source="useHierarchicalProcess" target="useHierarchicalProcess" />' +
    '        <camunda:in source="instUnitHierarchy" target="instUnitHierarchy" />' +
    '        <camunda:in source="ignoreLevelForDiffInstUnit" target="ignoreLevelForDiffInstUnit" />' +
    '      </bpmn:extensionElements>' +
    '      <bpmn:incoming>Flow_firstEvalApprove</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_secondApproval</bpmn:outgoing>' +
    '    </bpmn:callActivity>' +
    '    <bpmn:sequenceFlow id="Flow_secondApproval" sourceRef="SubProcess_secondApproval" targetRef="ExclusiveGateway_secondEval" />' +
    '    <bpmn:exclusiveGateway id="ExclusiveGateway_secondEval" name="Second eval approved ?">' +
    '      <bpmn:incoming>Flow_secondApproval</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_secondEvalApprove</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_secondEvalRejectWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_secondEvalChangeAdvisedWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_secondEvalRejectWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_secondEvalChangeAdvisedWithAPICall</bpmn:outgoing>' +
    '    </bpmn:exclusiveGateway>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalApprove" name="Approve" sourceRef="ExclusiveGateway_secondEval" targetRef="SubProcess_thirdApproval">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED"}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalRejectWithAPICall" name="Reject With API Call" sourceRef="ExclusiveGateway_secondEval" targetRef="ServiceTask_rejectServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalRejectWithoutAPICall" name="Reject Without API Call" sourceRef="ExclusiveGateway_secondEval" targetRef="the_end">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalChangeAdvisedWithAPICall" name="Changes Advised With API Call" sourceRef="ExclusiveGateway_secondEval" targetRef="ServiceTask_changeAdvisedServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalChangeAdvisedWithoutAPICall" name="Changes Advised Without API Call" sourceRef="ExclusiveGateway_secondEval" targetRef="UserTask_makerReview">' +
    '        <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:callActivity id="SubProcess_thirdApproval" name="Third Approval Subprocess Call" calledElement="rally-approval-subprocess">' +
    '      <bpmn:extensionElements>' +
    '        <camunda:in variables="all" />' +
    '        <camunda:in source="initiator" target="initiator" />' +
    '        <camunda:in source="selectApproverForm" target="selectApproverForm" />' +
    '        <camunda:in source="formJson" target="formJson" />' +
    '        <camunda:in source="supportingForm3" target="supportingForm" />' +
    '        <camunda:in source="isAutoAssign" target="isAutoAssign" />' +
    '        <camunda:out source="evaluationResult" target="evaluationResult" />' +
    '        <camunda:in source="userId" target="userId" />' +
    '        <camunda:in source="tenantId" target="tenantId" />' +
    '        <camunda:in source="resourceCode" target="resourceCode" />' +
    '        <camunda:properties>' +
    '          <camunda:property />' +
    '        </camunda:properties>' +
    '        <camunda:in source="refreshAfterSendToApproval" target="refreshAfterSendToApproval" />' +
    '        <camunda:out source="formJson" target="formJson" />' +
    '        <camunda:out source="entityId" target="entityId" />' +
    '        <camunda:in source="isChange" target="isChange" />' +
    '        <camunda:in sourceExpression="[&#34;APPROVED&#34;,&#34;REJECTED&#34;,&#34;CHANGES_ADVISED&#34;]" target="evaluationResultList" />' +
    '        <camunda:in source="checkerRoles3" target="sys_roleNames" />' +
    '        <camunda:out source="identifierFilterName" target="identifierFilterName" />' +
    '        <camunda:out source="detailLable" target="detailLable" />' +
    '        <camunda:in source="useHierarchicalProcess" target="useHierarchicalProcess" />' +
    '        <camunda:in source="instUnitHierarchy" target="instUnitHierarchy" />' +
    '        <camunda:in source="ignoreLevelForDiffInstUnit" target="ignoreLevelForDiffInstUnit" />' +
    '      </bpmn:extensionElements>' +
    '      <bpmn:incoming>Flow_secondEvalApprove</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_thirdApproval</bpmn:outgoing>' +
    '    </bpmn:callActivity>' +
    '    <bpmn:sequenceFlow id="Flow_thirdApproval" sourceRef="SubProcess_thirdApproval" targetRef="ExclusiveGateway_thirdEval" />' +
    '    <bpmn:exclusiveGateway id="ExclusiveGateway_thirdEval" name="Third eval approved ?">' +
    '      <bpmn:incoming>Flow_thirdApproval</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_thirdEvalApprove</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_thirdEvalRejectWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_thirdEvalChangeAdvisedWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_thirdEvalRejectWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_thirdEvalChangeAdvisedWithAPICall</bpmn:outgoing>' +
    '    </bpmn:exclusiveGateway>' +
    '    <bpmn:sequenceFlow id="Flow_thirdEvalApprove" name="Approve" sourceRef="ExclusiveGateway_thirdEval" targetRef="SubProcess_fourthApproval">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED"}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_thirdEvalRejectWithAPICall" name="Reject With API Call" sourceRef="ExclusiveGateway_thirdEval" targetRef="ServiceTask_rejectServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_thirdEvalRejectWithoutAPICall" name="Reject Without API Call" sourceRef="ExclusiveGateway_thirdEval" targetRef="the_end">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_thirdEvalChangeAdvisedWithAPICall" name="Changes Advised With API Call" sourceRef="ExclusiveGateway_thirdEval" targetRef="ServiceTask_changeAdvisedServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_thirdEvalChangeAdvisedWithoutAPICall" name="Changes Advised Without API Call" sourceRef="ExclusiveGateway_thirdEval" targetRef="UserTask_makerReview">' +
    '        <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:callActivity id="SubProcess_fourthApproval" name="Fourth Approval Subprocess Call" calledElement="rally-approval-subprocess">' +
    '      <bpmn:extensionElements>' +
    '        <camunda:in variables="all" />' +
    '        <camunda:in source="initiator" target="initiator" />' +
    '        <camunda:in source="selectApproverForm" target="selectApproverForm" />' +
    '        <camunda:in source="formJson" target="formJson" />' +
    '        <camunda:in source="supportingForm4" target="supportingForm" />' +
    '        <camunda:in source="isAutoAssign" target="isAutoAssign" />' +
    '        <camunda:out source="evaluationResult" target="evaluationResult" />' +
    '        <camunda:in source="userId" target="userId" />' +
    '        <camunda:in source="tenantId" target="tenantId" />' +
    '        <camunda:in source="resourceCode" target="resourceCode" />' +
    '        <camunda:properties>' +
    '          <camunda:property />' +
    '        </camunda:properties>' +
    '        <camunda:in source="refreshAfterSendToApproval" target="refreshAfterSendToApproval" />' +
    '        <camunda:out source="formJson" target="formJson" />' +
    '        <camunda:out source="entityId" target="entityId" />' +
    '        <camunda:in source="isChange" target="isChange" />' +
    '        <camunda:in sourceExpression="[&#34;APPROVED&#34;,&#34;REJECTED&#34;,&#34;CHANGES_ADVISED&#34;]" target="evaluationResultList" />' +
    '        <camunda:in source="checkerRoles4" target="sys_roleNames" />' +
    '        <camunda:out source="identifierFilterName" target="identifierFilterName" />' +
    '        <camunda:out source="detailLable" target="detailLable" />' +
    '        <camunda:in source="useHierarchicalProcess" target="useHierarchicalProcess" />' +
    '        <camunda:in source="instUnitHierarchy" target="instUnitHierarchy" />' +
    '        <camunda:in source="ignoreLevelForDiffInstUnit" target="ignoreLevelForDiffInstUnit" />' +
    '      </bpmn:extensionElements>' +
    '      <bpmn:incoming>Flow_thirdEvalApprove</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_fourthApproval</bpmn:outgoing>' +
    '    </bpmn:callActivity>' +
    '    <bpmn:sequenceFlow id="Flow_fourthApproval" sourceRef="SubProcess_fourthApproval" targetRef="ExclusiveGateway_fourthEval" />' +
    '    <bpmn:exclusiveGateway id="ExclusiveGateway_fourthEval" name="Fourth eval approved ?">' +
    '      <bpmn:incoming>Flow_fourthApproval</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_fourthEvalRejectWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_fourthEvalChangeAdvisedWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_fourthEvalApproveWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_fourthEvalApproveWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_fourthEvalRejectWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_fourthEvalChangeAdvisedWithAPICall</bpmn:outgoing>' +
    '    </bpmn:exclusiveGateway>' +
    '    <bpmn:sequenceFlow id="Flow_fourthEvalApproveWithAPICall" name="Approve With API Call" sourceRef="ExclusiveGateway_fourthEval" targetRef="ServiceTask_approveServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED" &amp;&amp; isRunAfterApprovalEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_fourthEvalApproveWithoutAPICall" name="Approve Without API Call" sourceRef="ExclusiveGateway_fourthEval" targetRef="the_end">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED" &amp;&amp; isRunAfterApprovalEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_fourthEvalRejectWithAPICall" name="Reject With API Call" sourceRef="ExclusiveGateway_fourthEval" targetRef="ServiceTask_rejectServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_fourthEvalRejectWithoutAPICall" name="Reject Without API Call" sourceRef="ExclusiveGateway_fourthEval" targetRef="the_end">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_fourthEvalChangeAdvisedWithAPICall" name="Changes Advised With API Call" sourceRef="ExclusiveGateway_fourthEval" targetRef="ServiceTask_changeAdvisedServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_fourthEvalChangeAdvisedWithoutAPICall" name="Changes Advised Without API Call" sourceRef="ExclusiveGateway_fourthEval" targetRef="UserTask_makerReview">' +
    '        <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:serviceTask id="ServiceTask_approveServiceCall" name="After Approve Service Call" camunda:expression="$' + '{' + 'flowRestCallComponent.init(execution).execute(runAfterApprovalApi, runAfterApprovalMethod, formJson)}">' +
    '      <bpmn:incoming>Flow_fourthEvalApproveWithAPICall</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_afterApproveServiceCalled</bpmn:outgoing>' +
    '    </bpmn:serviceTask>' +
    '    <bpmn:sequenceFlow id="Flow_afterApproveServiceCalled" sourceRef="ServiceTask_approveServiceCall" targetRef="the_end" />' +
    '    <bpmn:serviceTask id="ServiceTask_rejectServiceCall" name="After Reject Service Call" camunda:expression="$' + '{' + 'flowRestCallComponent.init(execution).execute(runAfterRejectedApi, runAfterRejectedMethod, formJson)}">' +
    '      <bpmn:incoming>Flow_fourthEvalRejectWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_thirdEvalRejectWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_secondEvalRejectWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_firstEvalRejectWithAPICall</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_afterRejectServiceCalled</bpmn:outgoing>' +
    '    </bpmn:serviceTask>' +
    '    <bpmn:sequenceFlow id="Flow_afterRejectServiceCalled" sourceRef="ServiceTask_rejectServiceCall" targetRef="the_end" />' +
    '    <bpmn:serviceTask id="ServiceTask_changeAdvisedServiceCall" name="After Change AdvisedService Call" camunda:expression="$' + '{' + 'flowRestCallComponent.init(execution).execute(runAfterChangeAdvisedApi, runAfterChangeAdvisedMethod, formJson)}">' +
    '      <bpmn:incoming>Flow_firstEvalChangeAdvisedWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_secondEvalChangeAdvisedWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_thirdEvalChangeAdvisedWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_fourthEvalChangeAdvisedWithAPICall</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_afterChangeAdvisedServiceCalled</bpmn:outgoing>' +
    '    </bpmn:serviceTask>' +
    '    <bpmn:sequenceFlow id="Flow_afterChangeAdvisedServiceCalled" sourceRef="ServiceTask_changeAdvisedServiceCall" targetRef="UserTask_makerReview" />' +
    '    <bpmn:userTask id="UserTask_makerReview" name="Maker Review" camunda:formKey="$' + '{' + 'reviewForm}" camunda:assignee="$' + '{' + 'initiator}">' +
    '      <bpmn:incoming>Flow_firstEvalChangeAdvisedWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_secondEvalChangeAdvisedWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_thirdEvalChangeAdvisedWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_fourthEvalChangeAdvisedWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_afterChangeAdvisedServiceCalled</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_makerReview</bpmn:outgoing>' +
    '    </bpmn:userTask>' +
    '    <bpmn:sequenceFlow id="Flow_makerReview" sourceRef="UserTask_makerReview" targetRef="SubProcess_firstApproval" />' +
    '    <bpmn:endEvent id="the_end">' +
    '      <bpmn:incoming>Flow_firstEvalRejectWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_secondEvalRejectWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_thirdEvalRejectWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_fourthEvalRejectWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_fourthEvalApproveWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_afterApproveServiceCalled</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_afterRejectServiceCalled</bpmn:incoming>' +
    '    </bpmn:endEvent>' +
    '  </bpmn:process>' +
    '  <bpmndi:BPMNDiagram id="BPMNDiagram_1">' +
    '    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="PROCESS_ID_">' +
    '      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">' +
    '        <dc:Bounds x="157" y="378" width="36" height="36" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="SequenceFlow_1buh9jb_di" bpmnElement="Flow_Start">' +
    '        <di:waypoint x="193" y="396" />' +
    '        <di:waypoint x="255" y="396" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_0blirif_di" bpmnElement="SubProcess_firstApproval">' +
    '        <dc:Bounds x="255" y="347" width="169" height="99" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_1sftvt9_di" bpmnElement="Flow_firstApproval">' +
    '        <di:waypoint x="424" y="390" />' +
    '        <di:waypoint x="505" y="390" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Gateway_01wcpgn_di" bpmnElement="ExclusiveGateway_firstEval" isMarkerVisible="true">' +
    '        <dc:Bounds x="505" y="365" width="50" height="50" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="472" y="336" width="56" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_1h3ertx_di" bpmnElement="Flow_firstEvalApprove">' +
    '        <di:waypoint x="555" y="390" />' +
    '        <di:waypoint x="625" y="390" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="571" y="372" width="40" height="14" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1lkhxzv_di" bpmnElement="Flow_firstEvalRejectWithAPICall">' +
    '        <di:waypoint x="533" y="368" />' +
    '        <di:waypoint x="550" y="220" />' +
    '        <di:waypoint x="1910" y="220" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="552" y="236" width="78" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1yt7aeo_di" bpmnElement="Flow_firstEvalRejectWithoutAPICall">' +
    '        <di:waypoint x="530" y="365" />' +
    '        <di:waypoint x="530" y="110" />' +
    '        <di:waypoint x="2200" y="110" />' +
    '        <di:waypoint x="2200" y="389" />' +
    '        <di:waypoint x="2190" y="389" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="523" y="83" width="73" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1clmf9z_di" bpmnElement="Flow_firstEvalChangeAdvisedWithAPICall">' +
    '        <di:waypoint x="530" y="415" />' +
    '        <di:waypoint x="530" y="620" />' +
    '        <di:waypoint x="390" y="620" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="436" y="586" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0jve4gp_di" bpmnElement="Flow_firstEvalChangeAdvisedWithoutAPICall">' +
    '        <di:waypoint x="526" y="411" />' +
    '        <di:waypoint x="510" y="510" />' +
    '        <di:waypoint x="390" y="510" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="415" y="476" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_0kr41px_di" bpmnElement="SubProcess_secondApproval">' +
    '        <dc:Bounds x="625" y="340" width="169" height="99" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_0uf0l1p_di" bpmnElement="Flow_secondApproval">' +
    '        <di:waypoint x="794" y="390" />' +
    '        <di:waypoint x="875" y="390" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Gateway_0nnssau_di" bpmnElement="ExclusiveGateway_secondEval" isMarkerVisible="true">' +
    '        <dc:Bounds x="875" y="365" width="50" height="50" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="829" y="345" width="62" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_19oxyny_di" bpmnElement="Flow_secondEvalApprove">' +
    '        <di:waypoint x="925" y="390" />' +
    '        <di:waypoint x="985" y="390" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="930" y="363" width="40" height="14" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0u7pzv9_di" bpmnElement="Flow_secondEvalRejectWithAPICall">' +
    '        <di:waypoint x="904" y="369" />' +
    '        <di:waypoint x="930" y="230" />' +
    '        <di:waypoint x="1910" y="230" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="931" y="246" width="78" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_049ub2l_di" bpmnElement="Flow_secondEvalRejectWithoutAPICall">' +
    '        <di:waypoint x="900" y="365" />' +
    '        <di:waypoint x="900" y="160" />' +
    '        <di:waypoint x="2180" y="160" />' +
    '        <di:waypoint x="2180" y="374" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="893" y="126" width="73" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1vkkdvx_di" bpmnElement="Flow_secondEvalChangeAdvisedWithAPICall">' +
    '        <di:waypoint x="900" y="415" />' +
    '        <di:waypoint x="900" y="630" />' +
    '        <di:waypoint x="390" y="630" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="806" y="596" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '        </bpmndi:BPMNEdge>' +
    '        <bpmndi:BPMNEdge id="Flow_1ewh8ji_di" bpmnElement="Flow_secondEvalChangeAdvisedWithoutAPICall">' +
    '          <di:waypoint x="897" y="412" />' +
    '          <di:waypoint x="880" y="520" />' +
    '          <di:waypoint x="390" y="520" />' +
    '          <bpmndi:BPMNLabel>' +
    '            <dc:Bounds x="789" y="486" width="87" height="27" />' +
    '          </bpmndi:BPMNLabel>' +
    '        </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_1wpq19k_di" bpmnElement="SubProcess_thirdApproval">' +
    '        <dc:Bounds x="985" y="340" width="169" height="99" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_0u3503e_di" bpmnElement="Flow_thirdApproval">' +
    '        <di:waypoint x="1154" y="390" />' +
    '        <di:waypoint x="1215" y="390" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Gateway_0lpou2j_di" bpmnElement="ExclusiveGateway_thirdEval" isMarkerVisible="true">' +
    '        <dc:Bounds x="1215" y="365" width="50" height="50" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1182" y="336" width="56" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_1abryr8_di" bpmnElement="Flow_thirdEvalApprove">' +
    '        <di:waypoint x="1265" y="390" />' +
    '        <di:waypoint x="1355" y="390" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1290" y="363" width="40" height="14" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '        <bpmndi:BPMNEdge id="Flow_1i6ebre_di" bpmnElement="Flow_thirdEvalRejectWithAPICall">' +
    '        <di:waypoint x="1244" y="369" />' +
    '        <di:waypoint x="1270" y="250" />' +
    '        <di:waypoint x="1910" y="250" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1271" y="266" width="78" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0l8oj5u_di" bpmnElement="Flow_thirdEvalRejectWithoutAPICall">' +
    '        <di:waypoint x="1240" y="365" />' +
    '        <di:waypoint x="1240" y="190" />' +
    '        <di:waypoint x="2170" y="190" />' +
    '        <di:waypoint x="2170" y="370" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1233" y="163" width="73" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '       <bpmndi:BPMNEdge id="Flow_05r6l1b_di" bpmnElement="Flow_thirdEvalChangeAdvisedWithAPICall">' +
    '         <di:waypoint x="1240" y="415" />' +
    '         <di:waypoint x="1240" y="640" />' +
    '         <di:waypoint x="390" y="640" />' +
    '         <bpmndi:BPMNLabel>' +
    '           <dc:Bounds x="1146" y="606" width="87" height="27" />' +
    '         </bpmndi:BPMNLabel>' +
    '         </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_011gkmv_di" bpmnElement="Flow_thirdEvalChangeAdvisedWithoutAPICall">' +
    '        <di:waypoint x="1236" y="411" />' +
    '        <di:waypoint x="1210" y="530" />' +
    '        <di:waypoint x="390" y="530" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1108" y="496" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_1beersy_di" bpmnElement="SubProcess_fourthApproval">' +
    '        <dc:Bounds x="1355" y="340" width="169" height="99" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_161kkps_di" bpmnElement="Flow_fourthApproval">' +
    '        <di:waypoint x="1524" y="389" />' +
    '        <di:waypoint x="1625" y="389" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Gateway_1odidjw_di" bpmnElement="ExclusiveGateway_fourthEval" isMarkerVisible="true">' +
    '        <dc:Bounds x="1625" y="364" width="50" height="50" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1563" y="345" width="56" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_196syn4_di" bpmnElement="Flow_fourthEvalApproveWithAPICall">' +
    '        <di:waypoint x="1650" y="414" />' +
    '        <di:waypoint x="1650" y="540" />' +
    '        <di:waypoint x="1910" y="540" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1668" y="495" width="86" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1qbju14_di" bpmnElement="Flow_fourthEvalApproveWithoutAPICall">' +
    '        <di:waypoint x="1657" y="407" />' +
    '        <di:waypoint x="1670" y="420" />' +
    '        <di:waypoint x="2130" y="420" />' +
    '        <di:waypoint x="2156" y="400" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1851" y="426" width="82" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_11usyhz_di" bpmnElement="Flow_fourthEvalRejectWithAPICall">' +
    '        <di:waypoint x="1650" y="364" />' +
    '        <di:waypoint x="1650" y="260" />' +
    '        <di:waypoint x="1910" y="260" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1661" y="276" width="78" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_07i3a7a_di" bpmnElement="Flow_fourthEvalRejectWithoutAPICall">' +
    '        <di:waypoint x="1660" y="374" />' +
    '        <di:waypoint x="1670" y="360" />' +
    '        <di:waypoint x="2130" y="360" />' +
    '        <di:waypoint x="2156" y="379" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1855" y="326" width="73" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1jj6a1w_di" bpmnElement="Flow_fourthEvalChangeAdvisedWithAPICall">' +
    '        <di:waypoint x="1647" y="411" />' +
    '        <di:waypoint x="1610" y="660" />' +
    '        <di:waypoint x="390" y="660" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1516" y="626" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1a5w1vl_di" bpmnElement="Flow_fourthEvalChangeAdvisedWithoutAPICall">' +
    '        <di:waypoint x="1643" y="407" />' +
    '        <di:waypoint x="1590" y="540" />' +
    '        <di:waypoint x="390" y="540" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1496" y="506" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_1ycyeue_di" bpmnElement="ServiceTask_approveServiceCall">' +
    '        <dc:Bounds x="1910" y="500" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNShape id="Activity_0zkmk0d_di" bpmnElement="ServiceTask_rejectServiceCall">' +
    '        <dc:Bounds x="1910" y="200" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNShape id="Activity_09vfsi6_di" bpmnElement="ServiceTask_changeAdvisedServiceCall">' +
    '        <dc:Bounds x="290" y="600" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_0p4ns3c_di" bpmnElement="Flow_afterApproveServiceCalled">' +
    '        <di:waypoint x="2010" y="540" />' +
    '        <di:waypoint x="2170" y="540" />' +
    '        <di:waypoint x="2170" y="407" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1b2hr4y_di" bpmnElement="Flow_afterRejectServiceCalled">' +
    '        <di:waypoint x="2010" y="240" />' +
    '        <di:waypoint x="2160" y="240" />' +
    '        <di:waypoint x="2160" y="370" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0g2hyn3_di" bpmnElement="Flow_afterChangeAdvisedServiceCalled">' +
    '        <di:waypoint x="340" y="600" />' +
    '        <di:waypoint x="340" y="560" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_040wd92_di" bpmnElement="UserTask_makerReview">' +
    '          <dc:Bounds x="290" y="480" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_03asels_di" bpmnElement="Flow_makerReview">' +
    '          <di:waypoint x="340" y="480" />' +
    '          <di:waypoint x="340" y="446" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Event_10qkdoc_di" bpmnElement="the_end">' +
    '        <dc:Bounds x="2152" y="371" width="36" height="36" />' +
    '      </bpmndi:BPMNShape>' +
    '    </bpmndi:BPMNPlane>' +
    '  </bpmndi:BPMNDiagram>' +
    '</bpmn:definitions>');


/***/ }),

/***/ "./src/domain/objects/editors/processEditor/data/quadrupleApprovalConfigTemplate.ts":
/*!******************************************************************************************!*\
  !*** ./src/domain/objects/editors/processEditor/data/quadrupleApprovalConfigTemplate.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`rally:
    process:
        auto-deploy:
            metadata:
                processMetadata:
                    - variables:
                          - key: supportingForm
                            type: STRING
                            value: supportingForm
                          - key: supportingForm2
                            type: STRING
                            value: supportingForm2
                          - key: checkerRoles2
                            type: STRING
                            value: checkerRoles2
                          - key: supportingForm3
                            type: STRING
                            value: supportingForm3
                          - key: checkerRoles3
                            type: STRING
                            value: checkerRoles3
                          - key: supportingForm4
                            type: STRING
                            value: supportingForm4
                          - key: checkerRoles4
                            type: STRING
                            value: checkerRoles4`);


/***/ }),

/***/ "./src/domain/objects/editors/processEditor/data/quintupleApprovalBpmn.ts":
/*!********************************************************************************!*\
  !*** ./src/domain/objects/editors/processEditor/data/quintupleApprovalBpmn.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('<?xml version="1.0" encoding="UTF-8"?>' +
    '<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"' +
    '  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"' +
    '  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"' +
    '  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"' +
    '  xmlns:camunda="http://camunda.org/schema/1.0/bpmn"' +
    '  xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1yo3az1" targetNamespace="generic" exporter="Camunda Modeler" exporterVersion="4.10.0">' +
    '  <bpmn:process id="PROCESS_ID_" name="PROCESS_NAME_" isExecutable="true">' +
    '    <bpmn:startEvent id="StartEvent_1">' +
    '      <bpmn:outgoing>Flow_Start</bpmn:outgoing>' +
    '    </bpmn:startEvent>' +
    '    <bpmn:sequenceFlow id="Flow_Start" sourceRef="StartEvent_1" targetRef="SubProcess_firstApproval" />' +
    '    <bpmn:callActivity id="SubProcess_firstApproval" name="First Approval Subprocess Call" calledElement="rally-approval-subprocess">' +
    '      <bpmn:extensionElements>' +
    '        <camunda:in variables="all" />' +
    '        <camunda:in source="initiator" target="initiator" />' +
    '        <camunda:in source="selectApproverForm" target="selectApproverForm" />' +
    '        <camunda:in source="formJson" target="formJson" />' +
    '        <camunda:in source="supportingForm" target="supportingForm" />' +
    '        <camunda:in source="isAutoAssign" target="isAutoAssign" />' +
    '        <camunda:out source="evaluationResult" target="evaluationResult" />' +
    '        <camunda:in source="userId" target="userId" />' +
    '        <camunda:in source="tenantId" target="tenantId" />' +
    '        <camunda:in source="resourceCode" target="resourceCode" />' +
    '        <camunda:properties>' +
    '          <camunda:property />' +
    '        </camunda:properties>' +
    '        <camunda:in source="refreshAfterSendToApproval" target="refreshAfterSendToApproval" />' +
    '        <camunda:out source="formJson" target="formJson" />' +
    '        <camunda:out source="entityId" target="entityId" />' +
    '        <camunda:in source="isChange" target="isChange" />' +
    '        <camunda:in sourceExpression="[&#34;APPROVED&#34;,&#34;REJECTED&#34;,&#34;CHANGES_ADVISED&#34;]" target="evaluationResultList" />' +
    '        <camunda:out source="identifierFilterName" target="identifierFilterName" />' +
    '        <camunda:out source="detailLable" target="detailLable" />' +
    '        <camunda:in source="useHierarchicalProcess" target="useHierarchicalProcess" />' +
    '        <camunda:in source="instUnitHierarchy" target="instUnitHierarchy" />' +
    '        <camunda:in source="ignoreLevelForDiffInstUnit" target="ignoreLevelForDiffInstUnit" />' +
    '      </bpmn:extensionElements>' +
    '      <bpmn:incoming>Flow_Start</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_makerReview</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_firstApproval</bpmn:outgoing>' +
    '    </bpmn:callActivity>' +
    '    <bpmn:sequenceFlow id="Flow_firstApproval" sourceRef="SubProcess_firstApproval" targetRef="ExclusiveGateway_firstEval" />' +
    '    <bpmn:exclusiveGateway id="ExclusiveGateway_firstEval" name="First eval approved ?">' +
    '      <bpmn:incoming>Flow_firstApproval</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_firstEvalRejectWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalApprove</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalChangesAdvisedWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalRejectWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalChangeAdvisedWithAPICall</bpmn:outgoing>' +
    '    </bpmn:exclusiveGateway>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalApprove" name="Approve" sourceRef="ExclusiveGateway_firstEval" targetRef="SubProcess_secondApproval">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED"}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalRejectWithAPICall" name="Reject With API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="ServiceTask_rejectServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalRejectWithoutAPICall" name="Reject Without API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="the_end">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalChangeAdvisedWithAPICall" name="Changes Advised With API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="ServiceTask_changeAdvisedServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalChangesAdvisedWithoutAPICall" name="Changes Advised Without API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="UserTask_makerReview">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:callActivity id="SubProcess_secondApproval" name="Second Approval Subprocess Call" calledElement="rally-approval-subprocess">' +
    '      <bpmn:extensionElements>' +
    '        <camunda:in variables="all" />' +
    '        <camunda:in source="initiator" target="initiator" />' +
    '        <camunda:in source="selectApproverForm" target="selectApproverForm" />' +
    '        <camunda:in source="formJson" target="formJson" />' +
    '        <camunda:in source="supportingForm2" target="supportingForm" />' +
    '        <camunda:in source="isAutoAssign" target="isAutoAssign" />' +
    '        <camunda:out source="evaluationResult" target="evaluationResult" />' +
    '        <camunda:in source="userId" target="userId" />' +
    '        <camunda:in source="tenantId" target="tenantId" />' +
    '        <camunda:in source="resourceCode" target="resourceCode" />' +
    '        <camunda:properties>' +
    '          <camunda:property />' +
    '        </camunda:properties>' +
    '        <camunda:in source="refreshAfterSendToApproval" target="refreshAfterSendToApproval" />' +
    '        <camunda:out source="formJson" target="formJson" />' +
    '        <camunda:out source="entityId" target="entityId" />' +
    '        <camunda:in source="isChange" target="isChange" />' +
    '        <camunda:in sourceExpression="[&#34;APPROVED&#34;,&#34;REJECTED&#34;,&#34;CHANGES_ADVISED&#34;]" target="evaluationResultList" />' +
    '        <camunda:in source="checkerRoles2" target="sys_roleNames" />' +
    '        <camunda:out source="identifierFilterName" target="identifierFilterName" />' +
    '        <camunda:out source="detailLable" target="detailLable" />' +
    '        <camunda:in source="useHierarchicalProcess" target="useHierarchicalProcess" />' +
    '        <camunda:in source="instUnitHierarchy" target="instUnitHierarchy" />' +
    '        <camunda:in source="ignoreLevelForDiffInstUnit" target="ignoreLevelForDiffInstUnit" />' +
    '      </bpmn:extensionElements>' +
    '      <bpmn:incoming>Flow_firstEvalApprove</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_secondApproval</bpmn:outgoing>' +
    '    </bpmn:callActivity>' +
    '    <bpmn:sequenceFlow id="Flow_secondApproval" sourceRef="SubProcess_secondApproval" targetRef="ExclusiveGateway_secondEval" />' +
    '    <bpmn:exclusiveGateway id="ExclusiveGateway_secondEval" name="Second eval approved ?">' +
    '      <bpmn:incoming>Flow_secondApproval</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_secondEvalApprove</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_secondEvalRejectWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_secondEvalChangesAdvisedWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_secondEvalRejectWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_secondEvalChangeAdvisedWithAPICall</bpmn:outgoing>' +
    '    </bpmn:exclusiveGateway>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalApprove" name="Approve" sourceRef="ExclusiveGateway_secondEval" targetRef="SubProcess_thirdApproval">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED"}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalRejectWithAPICall" name="Reject With API Call" sourceRef="ExclusiveGateway_secondEval" targetRef="ServiceTask_rejectServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalRejectWithoutAPICall" name="Reject Without API Call" sourceRef="ExclusiveGateway_secondEval" targetRef="the_end">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalChangeAdvisedWithAPICall" name="Changes Advised With API Call" sourceRef="ExclusiveGateway_secondEval" targetRef="ServiceTask_changeAdvisedServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalChangesAdvisedWithoutAPICall" name="Changes Advised Without API Call" sourceRef="ExclusiveGateway_secondEval" targetRef="UserTask_makerReview">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:callActivity id="SubProcess_thirdApproval" name="Third Approval Subprocess Call" calledElement="rally-approval-subprocess">' +
    '      <bpmn:extensionElements>' +
    '        <camunda:in variables="all" />' +
    '        <camunda:in source="initiator" target="initiator" />' +
    '        <camunda:in source="selectApproverForm" target="selectApproverForm" />' +
    '        <camunda:in source="formJson" target="formJson" />' +
    '        <camunda:in source="supportingForm3" target="supportingForm" />' +
    '        <camunda:in source="isAutoAssign" target="isAutoAssign" />' +
    '        <camunda:out source="evaluationResult" target="evaluationResult" />' +
    '        <camunda:in source="userId" target="userId" />' +
    '        <camunda:in source="tenantId" target="tenantId" />' +
    '        <camunda:in source="resourceCode" target="resourceCode" />' +
    '        <camunda:properties>' +
    '          <camunda:property />' +
    '        </camunda:properties>' +
    '        <camunda:in source="refreshAfterSendToApproval" target="refreshAfterSendToApproval" />' +
    '        <camunda:out source="formJson" target="formJson" />' +
    '        <camunda:out source="entityId" target="entityId" />' +
    '        <camunda:in source="isChange" target="isChange" />' +
    '        <camunda:in sourceExpression="[&#34;APPROVED&#34;,&#34;REJECTED&#34;,&#34;CHANGES_ADVISED&#34;]" target="evaluationResultList" />' +
    '        <camunda:in source="checkerRoles3" target="sys_roleNames" />' +
    '        <camunda:out source="identifierFilterName" target="identifierFilterName" />' +
    '        <camunda:out source="detailLable" target="detailLable" />' +
    '        <camunda:in source="useHierarchicalProcess" target="useHierarchicalProcess" />' +
    '        <camunda:in source="instUnitHierarchy" target="instUnitHierarchy" />' +
    '        <camunda:in source="ignoreLevelForDiffInstUnit" target="ignoreLevelForDiffInstUnit" />' +
    '      </bpmn:extensionElements>' +
    '      <bpmn:incoming>Flow_secondEvalApprove</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_thirdApproval</bpmn:outgoing>' +
    '    </bpmn:callActivity>' +
    '    <bpmn:sequenceFlow id="Flow_thirdApproval" sourceRef="SubProcess_thirdApproval" targetRef="ExclusiveGateway_thirdEval" />' +
    '    <bpmn:exclusiveGateway id="ExclusiveGateway_thirdEval" name="Third eval approved ?">' +
    '      <bpmn:incoming>Flow_thirdApproval</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_thirdEvalApprove</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_thirdEvalRejectWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_thirdEvalChangesAdvisedWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_thirdEvalRejectWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_thirdEvalChangeAdvisedWithAPICall</bpmn:outgoing>' +
    '    </bpmn:exclusiveGateway>' +
    '    <bpmn:sequenceFlow id="Flow_thirdEvalApprove" name="Approve" sourceRef="ExclusiveGateway_thirdEval" targetRef="SubProcess_fourthApproval">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED"}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_thirdEvalRejectWithAPICall" name="Reject With API Call" sourceRef="ExclusiveGateway_thirdEval" targetRef="ServiceTask_rejectServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_thirdEvalRejectWithoutAPICall" name="Reject Without API Call" sourceRef="ExclusiveGateway_thirdEval" targetRef="the_end">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_thirdEvalChangeAdvisedWithAPICall" name="Changes Advised With API Call" sourceRef="ExclusiveGateway_thirdEval" targetRef="ServiceTask_changeAdvisedServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_thirdEvalChangesAdvisedWithoutAPICall" name="Changes Advised Without API Call" sourceRef="ExclusiveGateway_thirdEval" targetRef="UserTask_makerReview">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:callActivity id="SubProcess_fourthApproval" name="Fourth Approval Subprocess Call" calledElement="rally-approval-subprocess">' +
    '      <bpmn:extensionElements>' +
    '        <camunda:in variables="all" />' +
    '        <camunda:in source="initiator" target="initiator" />' +
    '        <camunda:in source="selectApproverForm" target="selectApproverForm" />' +
    '        <camunda:in source="formJson" target="formJson" />' +
    '        <camunda:in source="supportingForm4" target="supportingForm" />' +
    '        <camunda:in source="isAutoAssign" target="isAutoAssign" />' +
    '        <camunda:out source="evaluationResult" target="evaluationResult" />' +
    '        <camunda:in source="userId" target="userId" />' +
    '        <camunda:in source="tenantId" target="tenantId" />' +
    '        <camunda:in source="resourceCode" target="resourceCode" />' +
    '        <camunda:properties>' +
    '          <camunda:property />' +
    '        </camunda:properties>' +
    '        <camunda:in source="refreshAfterSendToApproval" target="refreshAfterSendToApproval" />' +
    '        <camunda:out source="formJson" target="formJson" />' +
    '        <camunda:out source="entityId" target="entityId" />' +
    '        <camunda:in source="isChange" target="isChange" />' +
    '        <camunda:in sourceExpression="[&#34;APPROVED&#34;,&#34;REJECTED&#34;,&#34;CHANGES_ADVISED&#34;]" target="evaluationResultList" />' +
    '        <camunda:in source="checkerRoles4" target="sys_roleNames" />' +
    '        <camunda:out source="identifierFilterName" target="identifierFilterName" />' +
    '        <camunda:out source="detailLable" target="detailLable" />' +
    '        <camunda:in source="useHierarchicalProcess" target="useHierarchicalProcess" />' +
    '        <camunda:in source="instUnitHierarchy" target="instUnitHierarchy" />' +
    '        <camunda:in source="ignoreLevelForDiffInstUnit" target="ignoreLevelForDiffInstUnit" />' +
    '      </bpmn:extensionElements>' +
    '      <bpmn:incoming>Flow_thirdEvalApprove</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_fourthApproval</bpmn:outgoing>' +
    '    </bpmn:callActivity>' +
    '    <bpmn:sequenceFlow id="Flow_fourthApproval" sourceRef="SubProcess_fourthApproval" targetRef="ExclusiveGateway_fourthEval" />' +
    '    <bpmn:exclusiveGateway id="ExclusiveGateway_fourthEval" name="Fourth eval approved ?">' +
    '      <bpmn:incoming>Flow_fourthApproval</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_fourthEvalApprove</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_fourthEvalRejectWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_fourthEvalChangesAdvisedWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_fourthEvalRejectWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_fourthEvalChangeAdvisedWithAPICall</bpmn:outgoing>' +
    '    </bpmn:exclusiveGateway>' +
    '    <bpmn:sequenceFlow id="Flow_fourthEvalApprove" name="Approve" sourceRef="ExclusiveGateway_fourthEval" targetRef="SubProcess_fifthApproval">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED"}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_fourthEvalRejectWithAPICall" name="Reject With API Call" sourceRef="ExclusiveGateway_fourthEval" targetRef="ServiceTask_rejectServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_fourthEvalRejectWithoutAPICall" name="Reject Without API Call" sourceRef="ExclusiveGateway_fourthEval" targetRef="the_end">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_fourthEvalChangeAdvisedWithAPICall" name="Changes Advised With API Call" sourceRef="ExclusiveGateway_fourthEval" targetRef="ServiceTask_changeAdvisedServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_fourthEvalChangesAdvisedWithoutAPICall" name="Changes Advised Without API Call" sourceRef="ExclusiveGateway_fourthEval" targetRef="UserTask_makerReview">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:callActivity id="SubProcess_fifthApproval" name="Fifth Approval Subprocess Call" calledElement="rally-approval-subprocess">' +
    '      <bpmn:extensionElements>' +
    '        <camunda:in variables="all" />' +
    '        <camunda:in source="initiator" target="initiator" />' +
    '        <camunda:in source="selectApproverForm" target="selectApproverForm" />' +
    '        <camunda:in source="formJson" target="formJson" />' +
    '        <camunda:in source="supportingForm5" target="supportingForm" />' +
    '        <camunda:in source="isAutoAssign" target="isAutoAssign" />' +
    '        <camunda:out source="evaluationResult" target="evaluationResult" />' +
    '        <camunda:in source="userId" target="userId" />' +
    '        <camunda:in source="tenantId" target="tenantId" />' +
    '        <camunda:in source="resourceCode" target="resourceCode" />' +
    '        <camunda:properties>' +
    '          <camunda:property />' +
    '        </camunda:properties>' +
    '        <camunda:in source="refreshAfterSendToApproval" target="refreshAfterSendToApproval" />' +
    '        <camunda:out source="formJson" target="formJson" />' +
    '        <camunda:out source="entityId" target="entityId" />' +
    '        <camunda:in source="isChange" target="isChange" />' +
    '        <camunda:in sourceExpression="[&#34;APPROVED&#34;,&#34;REJECTED&#34;,&#34;CHANGES_ADVISED&#34;]" target="evaluationResultList" />' +
    '        <camunda:in source="checkerRoles5" target="sys_roleNames" />' +
    '        <camunda:out source="identifierFilterName" target="identifierFilterName" />' +
    '        <camunda:out source="detailLable" target="detailLable" />' +
    '        <camunda:in source="useHierarchicalProcess" target="useHierarchicalProcess" />' +
    '        <camunda:in source="instUnitHierarchy" target="instUnitHierarchy" />' +
    '        <camunda:in source="ignoreLevelForDiffInstUnit" target="ignoreLevelForDiffInstUnit" />' +
    '      </bpmn:extensionElements>' +
    '      <bpmn:incoming>Flow_fourthEvalApprove</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_fifthApproval</bpmn:outgoing>' +
    '    </bpmn:callActivity>' +
    '    <bpmn:sequenceFlow id="Flow_fifthApproval" sourceRef="SubProcess_fifthApproval" targetRef="ExclusiveGateway_fifthEval" />' +
    '    <bpmn:exclusiveGateway id="ExclusiveGateway_fifthEval" name="Fifth eval approved ?">' +
    '      <bpmn:incoming>Flow_fifthApproval</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_fifthEvalRejectWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_fifthEvalChangesAdvisedWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_fifthEvalApproveWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_fifthEvalApproveWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_fifthEvalRejectWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_fifthEvalChangeAdvisedWithAPICall</bpmn:outgoing>' +
    '    </bpmn:exclusiveGateway>' +
    '    <bpmn:sequenceFlow id="Flow_fifthEvalApproveWithAPICall" name="Approve With API Call" sourceRef="ExclusiveGateway_fifthEval" targetRef="ServiceTask_approveServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED" &amp;&amp; isRunAfterApprovalEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_fifthEvalApproveWithoutAPICall" name="Approve Without API Call" sourceRef="ExclusiveGateway_fifthEval" targetRef="the_end">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED" &amp;&amp; isRunAfterApprovalEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_fifthEvalRejectWithAPICall" name="Reject With API Call" sourceRef="ExclusiveGateway_fifthEval" targetRef="ServiceTask_rejectServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_fifthEvalRejectWithoutAPICall" name="Reject Without API Call" sourceRef="ExclusiveGateway_fifthEval" targetRef="the_end">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_fifthEvalChangeAdvisedWithAPICall" name="Changes Advised With API Call" sourceRef="ExclusiveGateway_fifthEval" targetRef="ServiceTask_changeAdvisedServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_fifthEvalChangesAdvisedWithoutAPICall" name="Changes Advised Without API Call" sourceRef="ExclusiveGateway_fifthEval" targetRef="UserTask_makerReview">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:serviceTask id="ServiceTask_approveServiceCall" name="After Approve Service Call" camunda:expression="$' + '{' + 'flowRestCallComponent.init(execution).execute(runAfterApprovalApi, runAfterApprovalMethod, formJson)}">' +
    '      <bpmn:incoming>Flow_fifthEvalApproveWithAPICall</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_afterApproveServiceCalled</bpmn:outgoing>' +
    '    </bpmn:serviceTask>' +
    '    <bpmn:sequenceFlow id="Flow_afterApproveServiceCalled" sourceRef="ServiceTask_approveServiceCall" targetRef="the_end" />' +
    '    <bpmn:serviceTask id="ServiceTask_rejectServiceCall" name="After Reject Service Call" camunda:expression="$' + '{' + 'flowRestCallComponent.init(execution).execute(runAfterRejectedApi, runAfterRejectedMethod, formJson)}">' +
    '      <bpmn:incoming>Flow_fifthEvalRejectWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_fourthEvalRejectWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_thirdEvalRejectWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_secondEvalRejectWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_firstEvalRejectWithAPICall</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_afterRejectServiceCalled</bpmn:outgoing>' +
    '    </bpmn:serviceTask>' +
    '    <bpmn:sequenceFlow id="Flow_afterRejectServiceCalled" sourceRef="ServiceTask_rejectServiceCall" targetRef="the_end" />' +
    '    <bpmn:serviceTask id="ServiceTask_changeAdvisedServiceCall" name="After Change AdvisedService Call" camunda:expression="$' + '{' + 'flowRestCallComponent.init(execution).execute(runAfterChangeAdvisedApi, runAfterChangeAdvisedMethod, formJson)}">' +
    '      <bpmn:incoming>Flow_firstEvalChangeAdvisedWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_secondEvalChangeAdvisedWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_thirdEvalChangeAdvisedWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_fourthEvalChangeAdvisedWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_fifthEvalChangeAdvisedWithAPICall</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_afterChangeAdvisedServiceCalled</bpmn:outgoing>' +
    '    </bpmn:serviceTask>' +
    '    <bpmn:sequenceFlow id="Flow_afterChangeAdvisedServiceCalled" sourceRef="ServiceTask_changeAdvisedServiceCall" targetRef="UserTask_makerReview" />' +
    '    <bpmn:userTask id="UserTask_makerReview" name="Maker Review" camunda:formKey="$' + '{' + 'reviewForm}" camunda:assignee="$' + '{' + 'initiator}">' +
    '      <bpmn:incoming>Flow_firstEvalChangesAdvisedWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_secondEvalChangesAdvisedWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_thirdEvalChangesAdvisedWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_fourthEvalChangesAdvisedWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_fifthEvalChangesAdvisedWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_afterChangeAdvisedServiceCalled</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_makerReview</bpmn:outgoing>' +
    '    </bpmn:userTask>' +
    '    <bpmn:sequenceFlow id="Flow_makerReview" sourceRef="UserTask_makerReview" targetRef="SubProcess_firstApproval" />' +
    '    <bpmn:endEvent id="the_end">' +
    '      <bpmn:incoming>Flow_fifthEvalRejectWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_fifthEvalApproveWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_afterApproveServiceCalled</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_afterRejectServiceCalled</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_fourthEvalRejectWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_thirdEvalRejectWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_secondEvalRejectWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_firstEvalRejectWithoutAPICall</bpmn:incoming>' +
    '    </bpmn:endEvent>' +
    '  </bpmn:process>' +
    '  <bpmndi:BPMNDiagram id="BPMNDiagram_1">' +
    '    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="PROCESS_ID_">' +
    '      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">' +
    '        <dc:Bounds x="156" y="318" width="36" height="36" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="SequenceFlow_1buh9jb_di" bpmnElement="Flow_Start">' +
    '        <di:waypoint x="192" y="336" />' +
    '        <di:waypoint x="255" y="336" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_0blirif_di" bpmnElement="SubProcess_firstApproval">' +
    '        <dc:Bounds x="255" y="287" width="169" height="99" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_1sftvt9_di" bpmnElement="Flow_firstApproval">' +
    '        <di:waypoint x="424" y="330" />' +
    '        <di:waypoint x="505" y="330" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Gateway_01wcpgn_di" bpmnElement="ExclusiveGateway_firstEval" isMarkerVisible="true">' +
    '        <dc:Bounds x="505" y="305" width="50" height="50" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="472" y="276" width="56" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_1h3ertx_di" bpmnElement="Flow_firstEvalApprove">' +
    '        <di:waypoint x="555" y="330" />' +
    '        <di:waypoint x="625" y="330" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="571" y="312" width="40" height="14" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_16ifmau_di" bpmnElement="Flow_firstEvalRejectWithAPICall">' +
    '        <di:waypoint x="533" y="308" />' +
    '        <di:waypoint x="550" y="180" />' +
    '        <di:waypoint x="2200" y="180" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="552" y="196" width="78" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1yt7aeo_di" bpmnElement="Flow_firstEvalRejectWithoutAPICall">' +
    '        <di:waypoint x="530" y="305" />' +
    '        <di:waypoint x="530" y="90" />' +
    '        <di:waypoint x="2440" y="90" />' +
    '        <di:waypoint x="2440" y="329" />' +
    '        <di:waypoint x="2418" y="329" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="544" y="106" width="73" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_19a7vjd_di" bpmnElement="Flow_firstEvalChangeAdvisedWithAPICall">' +
    '        <di:waypoint x="530" y="355" />' +
    '        <di:waypoint x="530" y="570" />' +
    '        <di:waypoint x="390" y="570" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="436" y="536" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0cls7hc_di" bpmnElement="Flow_firstEvalChangesAdvisedWithoutAPICall">' +
    '        <di:waypoint x="527" y="352" />' +
    '        <di:waypoint x="510" y="460" />' +
    '        <di:waypoint x="390" y="460" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="403" y="426" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_0kr41px_di" bpmnElement="SubProcess_secondApproval">' +
    '        <dc:Bounds x="625" y="280" width="169" height="99" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_0uf0l1p_di" bpmnElement="Flow_secondApproval">' +
    '        <di:waypoint x="794" y="330" />' +
    '        <di:waypoint x="875" y="330" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Gateway_0nnssau_di" bpmnElement="ExclusiveGateway_secondEval" isMarkerVisible="true">' +
    '        <dc:Bounds x="875" y="305" width="50" height="50" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="840" y="276" width="62" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_19oxyny_di" bpmnElement="Flow_secondEvalApprove">' +
    '        <di:waypoint x="925" y="330" />' +
    '        <di:waypoint x="985" y="330" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="930" y="303" width="40" height="14" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0120qtq_di" bpmnElement="Flow_secondEvalRejectWithAPICall">' +
    '        <di:waypoint x="903" y="308" />' +
    '        <di:waypoint x="920" y="190" />' +
    '        <di:waypoint x="2200" y="190" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="931" y="206" width="78" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_049ub2l_di" bpmnElement="Flow_secondEvalRejectWithoutAPICall">' +
    '        <di:waypoint x="900" y="305" />' +
    '        <di:waypoint x="900" y="110" />' +
    '        <di:waypoint x="2430" y="110" />' +
    '        <di:waypoint x="2430" y="310" />' +
    '        <di:waypoint x="2415" y="319" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="914" y="126" width="73" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1vx3e0f_di" bpmnElement="Flow_secondEvalChangeAdvisedWithAPICall">' +
    '        <di:waypoint x="900" y="355" />' +
    '        <di:waypoint x="900" y="580" />' +
    '        <di:waypoint x="390" y="580" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="806" y="546" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1amp1fx_di" bpmnElement="Flow_secondEvalChangesAdvisedWithoutAPICall">' +
    '        <di:waypoint x="896" y="351" />' +
    '        <di:waypoint x="870" y="470" />' +
    '        <di:waypoint x="390" y="470" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="767" y="436" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_1wpq19k_di" bpmnElement="SubProcess_thirdApproval">' +
    '        <dc:Bounds x="985" y="280" width="169" height="99" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_0u3503e_di" bpmnElement="Flow_thirdApproval">' +
    '        <di:waypoint x="1154" y="330" />' +
    '        <di:waypoint x="1215" y="330" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Gateway_0lpou2j_di" bpmnElement="ExclusiveGateway_thirdEval" isMarkerVisible="true">' +
    '        <dc:Bounds x="1215" y="305" width="50" height="50" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1182" y="276" width="56" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_1abryr8_di" bpmnElement="Flow_thirdEvalApprove">' +
    '        <di:waypoint x="1265" y="330" />' +
    '        <di:waypoint x="1355" y="330" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1290" y="303" width="40" height="14" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_13hdzyc_di" bpmnElement="Flow_thirdEvalRejectWithAPICall">' +
    '        <di:waypoint x="1243" y="308" />' +
    '        <di:waypoint x="1260" y="200" />' +
    '        <di:waypoint x="2200" y="200" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1271" y="206" width="78" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0l8oj5u_di" bpmnElement="Flow_thirdEvalRejectWithoutAPICall">' +
    '        <di:waypoint x="1240" y="305" />' +
    '        <di:waypoint x="1240" y="130" />' +
    '        <di:waypoint x="2410" y="130" />' +
    '        <di:waypoint x="2410" y="314" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1254" y="146" width="73" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0sgtsqp_di" bpmnElement="Flow_thirdEvalChangeAdvisedWithAPICall">' +
    '        <di:waypoint x="1240" y="355" />' +
    '        <di:waypoint x="1240" y="600" />' +
    '        <di:waypoint x="390" y="600" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1146" y="566" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1fua6i1_di" bpmnElement="Flow_thirdEvalChangesAdvisedWithoutAPICall">' +
    '        <di:waypoint x="1236" y="351" />' +
    '        <di:waypoint x="1210" y="480" />' +
    '        <di:waypoint x="390" y="480" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1116" y="446" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_1beersy_di" bpmnElement="SubProcess_fourthApproval">' +
    '        <dc:Bounds x="1355" y="280" width="169" height="99" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_161kkps_di" bpmnElement="Flow_fourthApproval">' +
    '        <di:waypoint x="1524" y="329" />' +
    '        <di:waypoint x="1625" y="329" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Gateway_1odidjw_di" bpmnElement="ExclusiveGateway_fourthEval" isMarkerVisible="true">' +
    '        <dc:Bounds x="1625" y="304" width="50" height="50" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1563" y="285" width="56" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_0sqlbdg_di" bpmnElement="Flow_fourthEvalApprove">' +
    '        <di:waypoint x="1675" y="329" />' +
    '        <di:waypoint x="1735" y="329" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1680" y="303" width="40" height="14" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1jp7wk7_di" bpmnElement="Flow_fourthEvalRejectWithAPICall">' +
    '        <di:waypoint x="1654" y="308" />' +
    '        <di:waypoint x="1670" y="210" />' +
    '        <di:waypoint x="2200" y="210" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1681" y="216" width="78" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_07i3a7a_di" bpmnElement="Flow_fourthEvalRejectWithoutAPICall">' +
    '        <di:waypoint x="1650" y="304" />' +
    '        <di:waypoint x="1650" y="140" />' +
    '        <di:waypoint x="2400" y="140" />' +
    '        <di:waypoint x="2400" y="310" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1653" y="146" width="73" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_05bcexh_di" bpmnElement="Flow_fourthEvalChangeAdvisedWithAPICall">' +
    '        <di:waypoint x="1650" y="354" />' +
    '        <di:waypoint x="1650" y="610" />' +
    '        <di:waypoint x="390" y="610" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1556" y="576" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0h1zelp_di" bpmnElement="Flow_fourthEvalChangesAdvisedWithoutAPICall">' +
    '        <di:waypoint x="1646" y="350" />' +
    '        <di:waypoint x="1620" y="490" />' +
    '        <di:waypoint x="390" y="490" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1504" y="456" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_01u3syw_di" bpmnElement="SubProcess_fifthApproval">' +
    '        <dc:Bounds x="1735" y="279" width="169" height="99" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_02nxa2g_di" bpmnElement="Flow_fifthApproval">' +
    '        <di:waypoint x="1904" y="329" />' +
    '        <di:waypoint x="1975" y="329" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Gateway_0r1o7j7_di" bpmnElement="ExclusiveGateway_fifthEval" isMarkerVisible="true">' +
    '        <dc:Bounds x="1975" y="304" width="50" height="50" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1914" y="285" width="56" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_1gpjp7m_di" bpmnElement="Flow_fifthEvalApproveWithAPICall">' +
    '        <di:waypoint x="2000" y="354" />' +
    '        <di:waypoint x="2000" y="450" />' +
    '        <di:waypoint x="2200" y="450" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="2011" y="405" width="86" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0c23nd0_di" bpmnElement="Flow_fifthEvalApproveWithoutAPICall">' +
    '        <di:waypoint x="2015" y="339" />' +
    '        <di:waypoint x="2030" y="350" />' +
    '        <di:waypoint x="2360" y="350" />' +
    '        <di:waypoint x="2383" y="334" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="2159" y="356" width="82" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0v086je_di" bpmnElement="Flow_fifthEvalRejectWithAPICall">' +
    '        <di:waypoint x="2000" y="304" />' +
    '        <di:waypoint x="2000" y="220" />' +
    '        <di:waypoint x="2200" y="220" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="2011" y="226" width="78" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1e1os47_di" bpmnElement="Flow_fifthEvalRejectWithoutAPICall">' +
    '        <di:waypoint x="2015" y="319" />' +
    '        <di:waypoint x="2030" y="310" />' +
    '        <di:waypoint x="2360" y="310" />' +
    '        <di:waypoint x="2384" y="322" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="2163" y="276" width="73" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0719dx9_di" bpmnElement="Flow_fifthEvalChangeAdvisedWithAPICall">' +
    '        <di:waypoint x="1997" y="351" />' +
    '        <di:waypoint x="1960" y="620" />' +
    '        <di:waypoint x="390" y="620" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1866" y="586" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0wem99l_di" bpmnElement="Flow_fifthEvalChangesAdvisedWithoutAPICall">' +
    '        <di:waypoint x="1994" y="348" />' +
    '        <di:waypoint x="1940" y="500" />' +
    '        <di:waypoint x="390" y="500" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1846" y="466" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_0fcbh4h_di" bpmnElement="ServiceTask_approveServiceCall">' +
    '        <dc:Bounds x="2200" y="410" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_0xk6r94_di" bpmnElement="Flow_afterApproveServiceCalled">' +
    '        <di:waypoint x="2300" y="450" />' +
    '        <di:waypoint x="2400" y="450" />' +
    '        <di:waypoint x="2400" y="347" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_09i82tf_di" bpmnElement="ServiceTask_rejectServiceCall">' +
    '        <dc:Bounds x="2200" y="160" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_0ur1ugl_di" bpmnElement="Flow_afterRejectServiceCalled">' +
    '        <di:waypoint x="2300" y="200" />' +
    '        <di:waypoint x="2330" y="200" />' +
    '        <di:waypoint x="2390" y="314" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_16zwqso_di" bpmnElement="ServiceTask_changeAdvisedServiceCall">' +
    '        <dc:Bounds x="290" y="560" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_0w3qiyg_di" bpmnElement="Flow_afterChangeAdvisedServiceCalled">' +
    '        <di:waypoint x="340" y="560" />' +
    '        <di:waypoint x="340" y="520" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_1o3b9s7_di" bpmnElement="UserTask_makerReview">' +
    '        <dc:Bounds x="290" y="440" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_0yrmbcn_di" bpmnElement="Flow_makerReview">' +
    '        <di:waypoint x="340" y="440" />' +
    '        <di:waypoint x="340" y="386" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Event_10qkdoc_di" bpmnElement="the_end">' +
    '        <dc:Bounds x="2382" y="311" width="36" height="36" />' +
    '      </bpmndi:BPMNShape>' +
    '    </bpmndi:BPMNPlane>' +
    '  </bpmndi:BPMNDiagram>' +
    '</bpmn:definitions>');


/***/ }),

/***/ "./src/domain/objects/editors/processEditor/data/quintupleApprovalConfigTemplate.ts":
/*!******************************************************************************************!*\
  !*** ./src/domain/objects/editors/processEditor/data/quintupleApprovalConfigTemplate.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`rally:
    process:
        auto-deploy:
            metadata:
                processMetadata:
                    - variables:
                          - key: supportingForm
                            type: STRING
                            value: supportingForm
                          - key: supportingForm2
                            type: STRING
                            value: supportingForm2
                          - key: checkerRoles2
                            type: STRING
                            value: checkerRoles2
                          - key: supportingForm3
                            type: STRING
                            value: supportingForm3
                          - key: checkerRoles3
                            type: STRING
                            value: checkerRoles3
                          - key: supportingForm4
                            type: STRING
                            value: supportingForm4
                          - key: checkerRoles4
                            type: STRING
                            value: checkerRoles4
                          - key: supportingForm5
                            type: STRING
                            value: supportingForm5
                          - key: checkerRoles5
                            type: STRING
                            value: checkerRoles5`);


/***/ }),

/***/ "./src/domain/objects/editors/processEditor/data/singleApprovalBpmn.ts":
/*!*****************************************************************************!*\
  !*** ./src/domain/objects/editors/processEditor/data/singleApprovalBpmn.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('<?xml version="1.0" encoding="UTF-8"?>' +
    '<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1yo3az1" targetNamespace="generic" exporter="Camunda Modeler" exporterVersion="4.3.0">' +
    '  <bpmn:process id="PROCESS_ID_" name="PROCESS_NAME_" isExecutable="true">' +
    '    <bpmn:startEvent id="StartEvent_1">' +
    '      <bpmn:outgoing>Flow_Start</bpmn:outgoing>' +
    '    </bpmn:startEvent>' +
    '    <bpmn:sequenceFlow id="Flow_Start" sourceRef="StartEvent_1" targetRef="SubProcess_firstApproval" />' +
    '    <bpmn:callActivity id="SubProcess_firstApproval" name="First Approval Subprocess Call" calledElement="rally-approval-subprocess">' +
    '      <bpmn:extensionElements>' +
    '        <camunda:in variables="all" />' +
    '        <camunda:in source="initiator" target="initiator" />' +
    '        <camunda:in source="selectApproverForm" target="selectApproverForm" />' +
    '        <camunda:in source="formJson" target="formJson" />' +
    '        <camunda:in source="supportingForm" target="supportingForm" />' +
    '        <camunda:in source="isAutoAssign" target="isAutoAssign" />' +
    '        <camunda:out source="evaluationResult" target="evaluationResult" />' +
    '        <camunda:in source="userId" target="userId" />' +
    '        <camunda:in source="tenantId" target="tenantId" />' +
    '        <camunda:in source="resourceCode" target="resourceCode" />' +
    '        <camunda:properties>' +
    '          <camunda:property />' +
    '        </camunda:properties>' +
    '        <camunda:in source="refreshAfterSendToApproval" target="refreshAfterSendToApproval" />' +
    '        <camunda:out source="formJson" target="formJson" />' +
    '        <camunda:out source="entityId" target="entityId" />' +
    '        <camunda:in source="isChange" target="isChange" />' +
    '        <camunda:out source="isChange" target="isChange" />' +
    '        <camunda:in sourceExpression="[&#34;APPROVED&#34;,&#34;REJECTED&#34;,&#34;CHANGES_ADVISED&#34;]" target="evaluationResultList" />' +
    '        <camunda:in source="useHierarchicalProcess" target="useHierarchicalProcess" />' +
    '        <camunda:in source="instUnitHierarchy" target="instUnitHierarchy" />' +
    '        <camunda:in source="ignoreLevelForDiffInstUnit" target="ignoreLevelForDiffInstUnit" />' +
    '      </bpmn:extensionElements>' +
    '      <bpmn:incoming>Flow_Start</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_makerReview</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_firstApproval</bpmn:outgoing>' +
    '    </bpmn:callActivity>' +
    '    <bpmn:sequenceFlow id="Flow_firstApproval" sourceRef="SubProcess_firstApproval" targetRef="ExclusiveGateway_firstEval" />' +
    '    <bpmn:exclusiveGateway id="ExclusiveGateway_firstEval" name="First eval approved ?">' +
    '      <bpmn:incoming>Flow_firstApproval</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_firstEvalApproveWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalApproveWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalRejectWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalRejectWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalChangeAdvisedWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalChangeAdvisedWithoutAPICall</bpmn:outgoing>' +
    '    </bpmn:exclusiveGateway>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalApproveWithAPICall" name="Approve With API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="ServiceTask_approveServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED" &amp;&amp; isRunAfterApprovalEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalApproveWithoutAPICall" name="Approve Without API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="the_end">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED" &amp;&amp; isRunAfterApprovalEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalRejectWithAPICall" name="Reject With API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="ServiceTask_rejectServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalRejectWithoutAPICall" name="Reject Without API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="the_end">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalChangeAdvisedWithAPICall" name="Changes Advised With API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="ServiceTask_changeAdvisedServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalChangeAdvisedWithoutAPICall" name="Changes Advised Without API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="UserTask_makerReview">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:serviceTask id="ServiceTask_approveServiceCall" name="After Approve Service Call" camunda:expression="$' + '{' + 'flowRestCallComponent.init(execution).execute(runAfterApprovalApi, runAfterApprovalMethod, formJson)}">' +
    '      <bpmn:incoming>Flow_firstEvalApproveWithAPICall</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_afterApproveServiceCalled</bpmn:outgoing>' +
    '    </bpmn:serviceTask>' +
    '    <bpmn:serviceTask id="ServiceTask_rejectServiceCall" name="After Reject Service Call" camunda:expression="$' + '{' + 'flowRestCallComponent.init(execution).execute(runAfterRejectedApi, runAfterRejectedMethod, formJson)}">' +
    '      <bpmn:incoming>Flow_firstEvalRejectWithAPICall</bpmn:incoming>' +
    '     <bpmn:outgoing>Flow_afterRejectServiceCalled</bpmn:outgoing>' +
    '    </bpmn:serviceTask>' +
    '    <bpmn:serviceTask id="ServiceTask_changeAdvisedServiceCall" name="After Change AdvisedService Call" camunda:expression="$' + '{' + 'flowRestCallComponent.init(execution).execute(runAfterChangeAdvisedApi, runAfterChangeAdvisedMethod, formJson)}">' +
    '      <bpmn:incoming>Flow_firstEvalChangeAdvisedWithAPICall</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_afterChangeAdvisedServiceCalled</bpmn:outgoing>' +
    '    </bpmn:serviceTask>' +
    '    <bpmn:sequenceFlow id="Flow_afterApproveServiceCalled" sourceRef="ServiceTask_approveServiceCall" targetRef="the_end" />' +
    '    <bpmn:sequenceFlow id="Flow_afterRejectServiceCalled" sourceRef="ServiceTask_rejectServiceCall" targetRef="the_end" />' +
    '    <bpmn:sequenceFlow id="Flow_afterChangeAdvisedServiceCalled" sourceRef="ServiceTask_changeAdvisedServiceCall" targetRef="UserTask_makerReview" />' +
    '    <bpmn:userTask id="UserTask_makerReview" name="Maker Review" camunda:formKey="$' + '{' + 'reviewForm}" camunda:assignee="$' + '{' + 'initiator}">' +
    '        <bpmn:incoming>Flow_firstEvalChangeAdvisedWithoutAPICall</bpmn:incoming>' +
    '        <bpmn:incoming>Flow_afterChangeAdvisedServiceCalled</bpmn:incoming>' +
    '        <bpmn:outgoing>Flow_makerReview</bpmn:outgoing>' +
    '    </bpmn:userTask>' +
    '    <bpmn:sequenceFlow id="Flow_makerReview" sourceRef="UserTask_makerReview" targetRef="SubProcess_firstApproval" />' +
    '    <bpmn:endEvent id="the_end">' +
    '      <bpmn:incoming>Flow_firstEvalApproveWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_afterApproveServiceCalled</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_firstEvalRejectWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_afterRejectServiceCalled</bpmn:incoming>' +
    '    </bpmn:endEvent>' +
    '  </bpmn:process>' +
    '  <bpmndi:BPMNDiagram id="BPMNDiagram_1">' +
    '    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="PROCESS_ID_">' +
    '      <bpmndi:BPMNEdge id="SequenceFlow_1ynvtld_di" bpmnElement="Flow_Start">' +
    '        <di:waypoint x="218" y="240" />' +
    '        <di:waypoint x="285" y="240" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">' +
    '        <dc:Bounds x="182" y="220" width="36" height="36" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNShape id="Activity_0kr41px_di" bpmnElement="SubProcess_firstApproval">' +
    '        <dc:Bounds x="285" y="194" width="169" height="99" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_1l1ioqa_di" bpmnElement="Flow_firstApproval">' +
    '        <di:waypoint x="454" y="238" />' +
    '        <di:waypoint x="645" y="238" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Gateway_1odidjw_di" bpmnElement="ExclusiveGateway_firstEval" isMarkerVisible="true" bioc:stroke="#000" bioc:fill="#fff">' +
    '        <dc:Bounds x="645" y="213" width="50" height="50" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="612" y="186" width="56" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_01dlro3_di" bpmnElement="Flow_firstEvalApproveWithAPICall" bioc:stroke="#000" bioc:fill="#fff">' +
    '        <di:waypoint x="670" y="263" />' +
    '        <di:waypoint x="670" y="360" />' +
    '        <di:waypoint x="850" y="360" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="692" y="326" width="86" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_18umj5b_di" bpmnElement="Flow_firstEvalApproveWithoutAPICall" bioc:stroke="#000" bioc:fill="#fff">' +
    '        <di:waypoint x="684" y="249" />' +
    '        <di:waypoint x="700" y="260" />' +
    '        <di:waypoint x="1010" y="260" />' +
    '        <di:waypoint x="1034" y="247" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="815" y="266" width="82" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_07i3a7a_di" bpmnElement="Flow_firstEvalRejectWithAPICall" bioc:stroke="#000" bioc:fill="#fff">' +
    '        <di:waypoint x="670" y="213" />' +
    '        <di:waypoint x="670" y="120" />' +
    '        <di:waypoint x="850" y="120" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="696" y="93" width="78" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0nzh0vv_di" bpmnElement="Flow_firstEvalRejectWithoutAPICall" bioc:stroke="#000" bioc:fill="#fff">' +
    '        <di:waypoint x="686" y="229" />' +
    '        <di:waypoint x="700" y="220" />' +
    '        <di:waypoint x="1010" y="220" />' +
    '        <di:waypoint x="1034" y="231" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="819" y="186" width="73" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0cludg9_di" bpmnElement="Flow_firstEvalChangeAdvisedWithAPICall" bioc:stroke="#000" bioc:fill="#fff">' +
    '        <di:waypoint x="666" y="259" />' +
    '        <di:waypoint x="630" y="480" />' +
    '        <di:waypoint x="580" y="480" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="596" y="486" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_042ns1z_di" bpmnElement="Flow_firstEvalChangeAdvisedWithoutAPICall" bioc:stroke="#000" bioc:fill="#fff">' +
    '        <di:waypoint x="662" y="255" />' +
    '        <di:waypoint x="610" y="370" />' +
    '        <di:waypoint x="420" y="370" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="467" y="343" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_1pz6kmd_di" bpmnElement="ServiceTask_approveServiceCall">' +
    '        <dc:Bounds x="850" y="320" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNShape id="Activity_0d2dthq_di" bpmnElement="ServiceTask_rejectServiceCall">' +
    '        <dc:Bounds x="850" y="80" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNShape id="Activity_1ucbi2s_di" bpmnElement="ServiceTask_changeAdvisedServiceCall">' +
    '        <dc:Bounds x="480" y="440" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_0qd8vyp_di" bpmnElement="Flow_afterApproveServiceCalled">' +
    '        <di:waypoint x="950" y="360" />' +
    '        <di:waypoint x="1050" y="360" />' +
    '        <di:waypoint x="1050" y="256" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_15qmo1y_di" bpmnElement="Flow_afterRejectServiceCalled">' +
    '        <di:waypoint x="950" y="120" />' +
    '        <di:waypoint x="1050" y="120" />' +
    '        <di:waypoint x="1050" y="220" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1mwier3_di" bpmnElement="Flow_afterChangeAdvisedServiceCalled">' +
    '        <di:waypoint x="480" y="480" />' +
    '        <di:waypoint x="370" y="480" />' +
    '        <di:waypoint x="370" y="410" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1dztmvc_di" bpmnElement="Flow_makerReview">' +
    '          <di:waypoint x="370" y="330" />' +
    '          <di:waypoint x="370" y="293" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_1g9wg02_di" bpmnElement="UserTask_makerReview">' +
    '        <dc:Bounds x="320" y="330" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNShape id="Event_10qkdoc_di" bpmnElement="the_end">' +
    '        <dc:Bounds x="1032" y="220" width="36" height="36" />' +
    '      </bpmndi:BPMNShape>' +
    '    </bpmndi:BPMNPlane>' +
    '  </bpmndi:BPMNDiagram>' +
    '</bpmn:definitions>');


/***/ }),

/***/ "./src/domain/objects/editors/processEditor/data/singleApprovalConfigTemplate.ts":
/*!***************************************************************************************!*\
  !*** ./src/domain/objects/editors/processEditor/data/singleApprovalConfigTemplate.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`rally:
    process:
        auto-deploy:
            metadata:
                processMetadata:
                    - variables:
                          - key: supportingForm
                            type: STRING
                            value: supportingForm`);


/***/ }),

/***/ "./src/domain/objects/editors/processEditor/data/tripleApprovalBpmn.ts":
/*!*****************************************************************************!*\
  !*** ./src/domain/objects/editors/processEditor/data/tripleApprovalBpmn.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('<?xml version="1.0" encoding="UTF-8"?>' +
    '<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1yo3az1" targetNamespace="generic" exporter="Camunda Modeler" exporterVersion="4.3.0">' +
    '  <bpmn:process id="PROCESS_ID_" name="PROCESS_NAME_" isExecutable="true">' +
    '    <bpmn:startEvent id="StartEvent_1">' +
    '      <bpmn:outgoing>Flow_Start</bpmn:outgoing>' +
    '    </bpmn:startEvent>' +
    '    <bpmn:sequenceFlow id="Flow_Start" sourceRef="StartEvent_1" targetRef="SubProcess_firstApproval" />' +
    '    <bpmn:callActivity id="SubProcess_firstApproval" name="First Approval Subprocess Call" calledElement="rally-approval-subprocess">' +
    '      <bpmn:extensionElements>' +
    '        <camunda:in variables="all" />' +
    '        <camunda:in source="initiator" target="initiator" />' +
    '        <camunda:in source="selectApproverForm" target="selectApproverForm" />' +
    '        <camunda:in source="formJson" target="formJson" />' +
    '        <camunda:in source="supportingForm" target="supportingForm" />' +
    '        <camunda:in source="isAutoAssign" target="isAutoAssign" />' +
    '        <camunda:out source="evaluationResult" target="evaluationResult" />' +
    '        <camunda:in source="userId" target="userId" />' +
    '        <camunda:in source="tenantId" target="tenantId" />' +
    '        <camunda:in source="resourceCode" target="resourceCode" />' +
    '        <camunda:properties>' +
    '          <camunda:property />' +
    '        </camunda:properties>' +
    '        <camunda:in source="refreshAfterSendToApproval" target="refreshAfterSendToApproval" />' +
    '        <camunda:out source="formJson" target="formJson" />' +
    '        <camunda:out source="entityId" target="entityId" />' +
    '        <camunda:in source="isChange" target="isChange" />' +
    '        <camunda:in sourceExpression="[&#34;APPROVED&#34;,&#34;REJECTED&#34;,&#34;CHANGES_ADVISED&#34;]" target="evaluationResultList" />' +
    '        <camunda:out source="identifierFilterName" target="identifierFilterName" />' +
    '        <camunda:out source="detailLable" target="detailLable" />' +
    '        <camunda:in source="useHierarchicalProcess" target="useHierarchicalProcess" />' +
    '        <camunda:in source="instUnitHierarchy" target="instUnitHierarchy" />' +
    '        <camunda:in source="ignoreLevelForDiffInstUnit" target="ignoreLevelForDiffInstUnit" />' +
    '      </bpmn:extensionElements>' +
    '      <bpmn:incoming>Flow_Start</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_makerReview</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_firstApproval</bpmn:outgoing>' +
    '    </bpmn:callActivity>' +
    '    <bpmn:sequenceFlow id="Flow_firstApproval" sourceRef="SubProcess_firstApproval" targetRef="ExclusiveGateway_firstEval" />' +
    '    <bpmn:exclusiveGateway id="ExclusiveGateway_firstEval" name="First eval approved ?">' +
    '      <bpmn:incoming>Flow_firstApproval</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_firstEvalRejectWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalApprove</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalChangeAdvisedWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalRejectWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_firstEvalChangeAdvisedWithAPICall</bpmn:outgoing>' +
    '    </bpmn:exclusiveGateway>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalApprove" name="Approve" sourceRef="ExclusiveGateway_firstEval" targetRef="SubProcess_secondApproval">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED"}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalRejectWithAPICall" name="Reject With API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="ServiceTask_rejectServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED"  &amp;&amp; isRunAfterRejectedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalRejectWithoutAPICall" name="Reject Without API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="the_end">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalChangeAdvisedWithAPICall" name="Changes Advised With API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="ServiceTask_changeAdvisedServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_firstEvalChangeAdvisedWithoutAPICall" name="Changes Advised Without API Call" sourceRef="ExclusiveGateway_firstEval" targetRef="UserTask_makerReview">' +
    '       <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:callActivity id="SubProcess_secondApproval" name="Second Approval Subprocess Call" calledElement="rally-approval-subprocess">' +
    '      <bpmn:extensionElements>' +
    '        <camunda:in variables="all" />' +
    '        <camunda:in source="initiator" target="initiator" />' +
    '        <camunda:in source="selectApproverForm" target="selectApproverForm" />' +
    '        <camunda:in source="formJson" target="formJson" />' +
    '        <camunda:in source="supportingForm2" target="supportingForm" />' +
    '        <camunda:in source="isAutoAssign" target="isAutoAssign" />' +
    '        <camunda:out source="evaluationResult" target="evaluationResult" />' +
    '        <camunda:in source="userId" target="userId" />' +
    '        <camunda:in source="tenantId" target="tenantId" />' +
    '        <camunda:in source="resourceCode" target="resourceCode" />' +
    '        <camunda:properties>' +
    '          <camunda:property />' +
    '        </camunda:properties>' +
    '        <camunda:in source="refreshAfterSendToApproval" target="refreshAfterSendToApproval" />' +
    '        <camunda:out source="formJson" target="formJson" />' +
    '        <camunda:out source="entityId" target="entityId" />' +
    '        <camunda:in source="isChange" target="isChange" />' +
    '        <camunda:in sourceExpression="[&#34;APPROVED&#34;,&#34;REJECTED&#34;,&#34;CHANGES_ADVISED&#34;]" target="evaluationResultList" />' +
    '        <camunda:in source="checkerRoles2" target="sys_roleNames" />' +
    '        <camunda:out source="identifierFilterName" target="identifierFilterName" />' +
    '        <camunda:out source="detailLable" target="detailLable" />' +
    '        <camunda:in source="useHierarchicalProcess" target="useHierarchicalProcess" />' +
    '        <camunda:in source="instUnitHierarchy" target="instUnitHierarchy" />' +
    '        <camunda:in source="ignoreLevelForDiffInstUnit" target="ignoreLevelForDiffInstUnit" />' +
    '      </bpmn:extensionElements>' +
    '      <bpmn:incoming>Flow_firstEvalApprove</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_secondApproval</bpmn:outgoing>' +
    '    </bpmn:callActivity>' +
    '    <bpmn:sequenceFlow id="Flow_secondApproval" sourceRef="SubProcess_secondApproval" targetRef="ExclusiveGateway_secondEval" />' +
    '    <bpmn:exclusiveGateway id="ExclusiveGateway_secondEval" name="Second eval approved ?">' +
    '      <bpmn:incoming>Flow_secondApproval</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_secondEvalApprove</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_secondEvalRejectWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_secondEvalChangeAdvisedWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_secondEvalRejectWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_secondEvalChangeAdvisedWithAPICall</bpmn:outgoing>' +
    '    </bpmn:exclusiveGateway>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalApprove" name="Approve" sourceRef="ExclusiveGateway_secondEval" targetRef="SubProcess_thirdApproval">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED"}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalRejectWithAPICall" name="Reject With API Call" sourceRef="ExclusiveGateway_secondEval" targetRef="ServiceTask_rejectServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalRejectWithoutAPICall" name="Reject Without API Call" sourceRef="ExclusiveGateway_secondEval" targetRef="the_end">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalChangeAdvisedWithAPICall" name="Changes Advised With API Call" sourceRef="ExclusiveGateway_secondEval" targetRef="ServiceTask_changeAdvisedServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_secondEvalChangeAdvisedWithoutAPICall" name="Changes Advised Without API Call" sourceRef="ExclusiveGateway_secondEval" targetRef="UserTask_makerReview">' +
    '       <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:callActivity id="SubProcess_thirdApproval" name="Third Approval Subprocess Call" calledElement="rally-approval-subprocess">' +
    '      <bpmn:extensionElements>' +
    '        <camunda:in variables="all" />' +
    '        <camunda:in source="initiator" target="initiator" />' +
    '        <camunda:in source="selectApproverForm" target="selectApproverForm" />' +
    '        <camunda:in source="formJson" target="formJson" />' +
    '        <camunda:in source="supportingForm3" target="supportingForm" />' +
    '        <camunda:in source="isAutoAssign" target="isAutoAssign" />' +
    '        <camunda:out source="evaluationResult" target="evaluationResult" />' +
    '        <camunda:in source="userId" target="userId" />' +
    '        <camunda:in source="tenantId" target="tenantId" />' +
    '        <camunda:in source="resourceCode" target="resourceCode" />' +
    '        <camunda:properties>' +
    '          <camunda:property />' +
    '        </camunda:properties>' +
    '        <camunda:in source="refreshAfterSendToApproval" target="refreshAfterSendToApproval" />' +
    '        <camunda:out source="formJson" target="formJson" />' +
    '        <camunda:out source="entityId" target="entityId" />' +
    '        <camunda:in source="isChange" target="isChange" />' +
    '        <camunda:in sourceExpression="[&#34;APPROVED&#34;,&#34;REJECTED&#34;,&#34;CHANGES_ADVISED&#34;]" target="evaluationResultList" />' +
    '        <camunda:in source="checkerRoles3" target="sys_roleNames" />' +
    '        <camunda:out source="identifierFilterName" target="identifierFilterName" />' +
    '        <camunda:out source="detailLable" target="detailLable" />' +
    '        <camunda:in source="useHierarchicalProcess" target="useHierarchicalProcess" />' +
    '        <camunda:in source="instUnitHierarchy" target="instUnitHierarchy" />' +
    '        <camunda:in source="ignoreLevelForDiffInstUnit" target="ignoreLevelForDiffInstUnit" />' +
    '      </bpmn:extensionElements>' +
    '      <bpmn:incoming>Flow_secondEvalApprove</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_thirdApproval</bpmn:outgoing>' +
    '    </bpmn:callActivity>' +
    '    <bpmn:sequenceFlow id="Flow_thirdApproval" sourceRef="SubProcess_thirdApproval" targetRef="ExclusiveGateway_thirdEval" />' +
    '    <bpmn:exclusiveGateway id="ExclusiveGateway_thirdEval" name="Third eval approved ?">' +
    '      <bpmn:incoming>Flow_thirdApproval</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_thirdEvalRejectWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_thirdEvalApproveWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_thirdEvalChangeAdvisedWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_thirdEvalApproveWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_thirdEvalApproveWithoutAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_thirdEvalRejectWithAPICall</bpmn:outgoing>' +
    '      <bpmn:outgoing>Flow_thirdEvalChangeAdvisedWithAPICall</bpmn:outgoing>' +
    '    </bpmn:exclusiveGateway>' +
    '    <bpmn:sequenceFlow id="Flow_thirdEvalApproveWithAPICall" name="Approve With API Call" sourceRef="ExclusiveGateway_thirdEval" targetRef="ServiceTask_approveServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED" &amp;&amp; isRunAfterApprovalEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_thirdEvalApproveWithoutAPICall" name="Approve Without API Call" sourceRef="ExclusiveGateway_thirdEval" targetRef="the_end">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "APPROVED" &amp;&amp; isRunAfterApprovalEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_thirdEvalRejectWithAPICall" name="Reject With API Call" sourceRef="ExclusiveGateway_thirdEval" targetRef="ServiceTask_rejectServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED" &amp;&amp; isRunAfterRejectedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_thirdEvalRejectWithoutAPICall" name="Reject Without API Call" sourceRef="ExclusiveGateway_thirdEval" targetRef="the_end">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "REJECTED"  &amp;&amp; isRunAfterRejectedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_thirdEvalChangeAdvisedWithAPICall" name="Changes Advised With API Call" sourceRef="ExclusiveGateway_thirdEval" targetRef="ServiceTask_changeAdvisedServiceCall">' +
    '      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == true}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:sequenceFlow id="Flow_thirdEvalChangeAdvisedWithoutAPICall" name="Changes Advised Without API Call" sourceRef="ExclusiveGateway_thirdEval" targetRef="UserTask_makerReview">' +
    '       <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">$' + '{' + 'evaluationResult == "CHANGES_ADVISED" &amp;&amp; isRunAfterChangeAdvisedEnable == false}</bpmn:conditionExpression>' +
    '    </bpmn:sequenceFlow>' +
    '    <bpmn:serviceTask id="ServiceTask_approveServiceCall" name="After Approve Service Call" camunda:expression="$' + '{' + 'flowRestCallComponent.init(execution).execute(runAfterApprovalApi, runAfterApprovalMethod, formJson)}">' +
    '      <bpmn:incoming>Flow_thirdEvalApproveWithAPICall</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_afterApproveServiceCalled</bpmn:outgoing>' +
    '    </bpmn:serviceTask>' +
    '    <bpmn:sequenceFlow id="Flow_afterApproveServiceCalled" sourceRef="ServiceTask_approveServiceCall" targetRef="the_end" />' +
    '    <bpmn:serviceTask id="ServiceTask_rejectServiceCall" name="After Reject Service Call" camunda:expression="$' + '{' + 'flowRestCallComponent.init(execution).execute(runAfterRejectedApi, runAfterRejectedMethod, formJson)}">' +
    '      <bpmn:incoming>Flow_secondEvalRejectWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_firstEvalRejectWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_thirdEvalRejectWithAPICall</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_afterRejectServiceCalled</bpmn:outgoing>' +
    '    </bpmn:serviceTask>' +
    '    <bpmn:sequenceFlow id="Flow_afterRejectServiceCalled" sourceRef="ServiceTask_rejectServiceCall" targetRef="the_end" />' +
    '    <bpmn:serviceTask id="ServiceTask_changeAdvisedServiceCall" name="After Change AdvisedService Call" camunda:expression="$' + '{' + 'flowRestCallComponent.init(execution).execute(runAfterChangeAdvisedApi, runAfterChangeAdvisedMethod, formJson)}">' +
    '      <bpmn:incoming>Flow_firstEvalChangeAdvisedWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_secondEvalChangeAdvisedWithAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_thirdEvalChangeAdvisedWithAPICall</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_afterChangeAdvisedServiceCalled</bpmn:outgoing>' +
    '    </bpmn:serviceTask>' +
    '    <bpmn:sequenceFlow id="Flow_afterChangeAdvisedServiceCalled" sourceRef="ServiceTask_changeAdvisedServiceCall" targetRef="UserTask_makerReview" />' +
    '    <bpmn:userTask id="UserTask_makerReview" name="Maker Review" camunda:formKey="$' + '{' + 'reviewForm}" camunda:assignee="$' + '{' + 'initiator}">' +
    '      <bpmn:incoming>Flow_firstEvalChangeAdvisedWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_secondEvalChangeAdvisedWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_thirdEvalChangeAdvisedWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_afterChangeAdvisedServiceCalled</bpmn:incoming>' +
    '      <bpmn:outgoing>Flow_makerReview</bpmn:outgoing>' +
    '    </bpmn:userTask>' +
    '    <bpmn:sequenceFlow id="Flow_makerReview" sourceRef="UserTask_makerReview" targetRef="SubProcess_firstApproval" />' +
    '    <bpmn:endEvent id="the_end">' +
    '      <bpmn:incoming>Flow_thirdEvalRejectWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_afterApproveServiceCalled</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_thirdEvalApproveWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_afterRejectServiceCalled</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_secondEvalRejectWithoutAPICall</bpmn:incoming>' +
    '      <bpmn:incoming>Flow_firstEvalRejectWithoutAPICall</bpmn:incoming>' +
    '    </bpmn:endEvent>' +
    '  </bpmn:process>' +
    '  <bpmndi:BPMNDiagram id="BPMNDiagram_1">' +
    '    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="PROCESS_ID_">' +
    '      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">' +
    '        <dc:Bounds x="152" y="305" width="36" height="36" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="SequenceFlow_1buh9jb_di" bpmnElement="Flow_Start">' +
    '        <di:waypoint x="188" y="323" />' +
    '        <di:waypoint x="295" y="323" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_0blirif_di" bpmnElement="SubProcess_firstApproval">' +
    '        <dc:Bounds x="295" y="274" width="169" height="99" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNShape id="Gateway_01wcpgn_di" bpmnElement="ExclusiveGateway_firstEval" isMarkerVisible="true">' +
    '        <dc:Bounds x="545" y="292" width="50" height="50" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="482" y="286" width="56" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_1sftvt9_di" bpmnElement="Flow_firstApproval">' +
    '        <di:waypoint x="464" y="317" />' +
    '        <di:waypoint x="545" y="317" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0krjt2c_di" bpmnElement="Flow_firstEvalApprove">' +
    '        <di:waypoint x="593" y="319" />' +
    '        <di:waypoint x="715" y="320" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="636" y="302" width="40" height="14" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0avecud_di" bpmnElement="Flow_firstEvalRejectWithAPICall">' +
    '        <di:waypoint x="577" y="299" />' +
    '        <di:waypoint x="630" y="160" />' +
    '        <di:waypoint x="1660" y="160" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="631" y="173" width="78" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_11t7c5c_di" bpmnElement="Flow_firstEvalRejectWithoutAPICall">' +
    '        <di:waypoint x="570" y="292" />' +
    '        <di:waypoint x="570" y="80" />' +
    '        <di:waypoint x="1940" y="80" />' +
    '        <di:waypoint x="1940" y="305" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="573" y="86" width="73" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_17oajmd_di" bpmnElement="Flow_firstEvalChangeAdvisedWithAPICall">' +
    '        <di:waypoint x="570" y="342" />' +
    '        <di:waypoint x="570" y="580" />' +
    '        <di:waypoint x="430" y="580" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="476" y="546" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1sy3i0i_di" bpmnElement="Flow_firstEvalChangeAdvisedWithoutAPICall">' +
    '         <di:waypoint x="567" y="339" />' +
    '         <di:waypoint x="550" y="460" />' +
    '         <di:waypoint x="430" y="460" />' +
    '         <bpmndi:BPMNLabel>' +
    '            <dc:Bounds x="446" y="426" width="87" height="27" />' +
    '         </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1l1ioqa_di" bpmnElement="Flow_secondApproval">' +
    '        <di:waypoint x="884" y="318" />' +
    '        <di:waypoint x="995" y="318" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_0kr41px_di" bpmnElement="SubProcess_secondApproval">' +
    '        <dc:Bounds x="715" y="274" width="169" height="99" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNShape id="Gateway_1odidjw_di" bpmnElement="ExclusiveGateway_secondEval" isMarkerVisible="true">' +
    '        <dc:Bounds x="995" y="293" width="50" height="50" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="929" y="274" width="62" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_0sqlbdg_di" bpmnElement="Flow_secondEvalApprove">' +
    '        <di:waypoint x="1044" y="319" />' +
    '        <di:waypoint x="1175" y="319" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1080" y="302" width="40" height="14" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_07i3a7a_di" bpmnElement="Flow_secondEvalRejectWithAPICall">' +
    '        <di:waypoint x="1027" y="300" />' +
    '        <di:waypoint x="1070" y="180" />' +
    '        <di:waypoint x="1660" y="180" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1071" y="193" width="78" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0dz6oou_di" bpmnElement="Flow_secondEvalRejectWithoutAPICall">' +
    '        <di:waypoint x="1020" y="293" />' +
    '        <di:waypoint x="1020" y="90" />' +
    '        <di:waypoint x="1930" y="90" />' +
    '        <di:waypoint x="1930" y="302" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1023" y="96" width="73" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_02zhgni_di" bpmnElement="Flow_secondEvalChangeAdvisedWithAPICall">' +
    '        <di:waypoint x="1020" y="343" />' +
    '        <di:waypoint x="1020" y="590" />' +
    '        <di:waypoint x="430" y="590" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="926" y="556" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1trpdr6_di" bpmnElement="Flow_secondEvalChangeAdvisedWithoutAPICall">' +
    '         <di:waypoint x="1015" y="338" />' +
    '         <di:waypoint x="980" y="470" />' +
    '         <di:waypoint x="430" y="470" />' +
    '         <bpmndi:BPMNLabel>' +
    '            <dc:Bounds x="887" y="436" width="87" height="27" />' +
    '         </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_06rr3fa_di" bpmnElement="Flow_thirdApproval">' +
    '        <di:waypoint x="1344" y="320" />' +
    '        <di:waypoint x="1435" y="320" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_1jy4iub_di" bpmnElement="SubProcess_thirdApproval">' +
    '        <dc:Bounds x="1175" y="270" width="169" height="99" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNShape id="Gateway_1lfyejj_di" bpmnElement="ExclusiveGateway_thirdEval" isMarkerVisible="true">' +
    '        <dc:Bounds x="1435" y="295" width="50" height="50" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1372" y="276" width="56" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_04n7ohs_di" bpmnElement="Flow_thirdEvalApproveWithAPICall">' +
    '        <di:waypoint x="1460" y="345" />' +
    '        <di:waypoint x="1460" y="470" />' +
    '        <di:waypoint x="1650" y="470" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1474" y="436" width="86" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0mo4obv_di" bpmnElement="Flow_thirdEvalApproveWithoutAPICall">' +
    '        <di:waypoint x="1474" y="331" />' +
    '        <di:waypoint x="1500" y="350" />' +
    '        <di:waypoint x="1890" y="350" />' +
    '        <di:waypoint x="1915" y="330" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1669" y="356" width="82" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1mvgz36_di" bpmnElement="Flow_thirdEvalRejectWithAPICall">' +
    '        <di:waypoint x="1460" y="295" />' +
    '        <di:waypoint x="1460" y="200" />' +
    '        <di:waypoint x="1660" y="200" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1471" y="206" width="78" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0vbau8r_di" bpmnElement="Flow_thirdEvalRejectWithoutAPICall">' +
    '        <di:waypoint x="1474" y="309" />' +
    '        <di:waypoint x="1500" y="290" />' +
    '        <di:waypoint x="1890" y="290" />' +
    '        <di:waypoint x="1916" y="309" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1673" y="256" width="73" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_0vpbfkb_di" bpmnElement="Flow_thirdEvalChangeAdvisedWithAPICall">' +
    '        <di:waypoint x="1457" y="342" />' +
    '        <di:waypoint x="1420" y="600" />' +
    '        <di:waypoint x="430" y="600" />' +
    '        <bpmndi:BPMNLabel>' +
    '          <dc:Bounds x="1326" y="566" width="87" height="27" />' +
    '        </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1lsaqsg_di" bpmnElement="Flow_thirdEvalChangeAdvisedWithoutAPICall">' +
    '         <di:waypoint x="1453" y="338" />' +
    '         <di:waypoint x="1400" y="480" />' +
    '         <di:waypoint x="430" y="480" />' +
    '         <bpmndi:BPMNLabel>' +
    '            <dc:Bounds x="1306" y="446" width="87" height="27" />' +
    '         </bpmndi:BPMNLabel>' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_012c1mi_di" bpmnElement="ServiceTask_approveServiceCall">' +
    '        <dc:Bounds x="1650" y="430" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_0fuggo4_di" bpmnElement="Flow_afterApproveServiceCalled">' +
    '        <di:waypoint x="1750" y="470" />' +
    '        <di:waypoint x="1930" y="470" />' +
    '        <di:waypoint x="1930" y="338" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_0il4zfo_di" bpmnElement="ServiceTask_rejectServiceCall">' +
    '        <dc:Bounds x="1660" y="140" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_14zu2rj_di" bpmnElement="Flow_afterRejectServiceCalled">' +
    '        <di:waypoint x="1760" y="180" />' +
    '        <di:waypoint x="1920" y="180" />' +
    '        <di:waypoint x="1920" y="305" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_0hrlwv5_di" bpmnElement="ServiceTask_changeAdvisedServiceCall">' +
    '        <dc:Bounds x="330" y="550" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNEdge id="Flow_05007ij_di" bpmnElement="Flow_afterChangeAdvisedServiceCalled">' +
    '        <di:waypoint x="380" y="550" />' +
    '        <di:waypoint x="380" y="510" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNEdge id="Flow_1yybr3h_di" bpmnElement="Flow_makerReview">' +
    '         <di:waypoint x="380" y="430" />' +
    '         <di:waypoint x="380" y="373" />' +
    '      </bpmndi:BPMNEdge>' +
    '      <bpmndi:BPMNShape id="Activity_1myttgz_di" bpmnElement="UserTask_makerReview">' +
    '         <dc:Bounds x="330" y="430" width="100" height="80" />' +
    '      </bpmndi:BPMNShape>' +
    '      <bpmndi:BPMNShape id="Event_10qkdoc_di" bpmnElement="the_end">' +
    '        <dc:Bounds x="1912" y="302" width="36" height="36" />' +
    '      </bpmndi:BPMNShape>' +
    '    </bpmndi:BPMNPlane>' +
    '  </bpmndi:BPMNDiagram>' +
    '</bpmn:definitions>');


/***/ }),

/***/ "./src/domain/objects/editors/processEditor/data/tripleApprovalConfigTemplate.ts":
/*!***************************************************************************************!*\
  !*** ./src/domain/objects/editors/processEditor/data/tripleApprovalConfigTemplate.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`rally:
    process:
        auto-deploy:
            metadata:
                processMetadata:
                    - variables:
                          - key: supportingForm
                            type: STRING
                            value: supportingForm
                          - key: supportingForm2
                            type: STRING
                            value: supportingForm2
                          - key: checkerRoles2
                            type: STRING
                            value: checkerRoles2
                          - key: supportingForm3
                            type: STRING
                            value: supportingForm3
                          - key: checkerRoles3
                            type: STRING
                            value: checkerRoles3`);


/***/ }),

/***/ "./src/domain/presentation/IAsyncComponentCreator.ts":
/*!***********************************************************!*\
  !*** ./src/domain/presentation/IAsyncComponentCreator.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IAsyncComponentCreator": () => (/* binding */ IAsyncComponentCreator)
/* harmony export */ });
const IAsyncComponentCreator = Symbol.for("IAsyncComponentCreator");


/***/ }),

/***/ "./src/domain/presentation/IDialog.ts":
/*!********************************************!*\
  !*** ./src/domain/presentation/IDialog.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IDialog": () => (/* binding */ IDialog)
/* harmony export */ });
const IDialog = Symbol.for("IDialog");


/***/ }),

/***/ "./src/domain/presentation/ILoading.ts":
/*!*********************************************!*\
  !*** ./src/domain/presentation/ILoading.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ILoading": () => (/* binding */ ILoading)
/* harmony export */ });
const ILoading = Symbol.for("ILoading");


/***/ }),

/***/ "./src/domain/presentation/INotification.ts":
/*!**************************************************!*\
  !*** ./src/domain/presentation/INotification.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INotification": () => (/* binding */ INotification)
/* harmony export */ });
const INotification = Symbol.for("INotification");


/***/ }),

/***/ "./src/domain/presentation/IPresentation.ts":
/*!**************************************************!*\
  !*** ./src/domain/presentation/IPresentation.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IPresentation": () => (/* binding */ IPresentation)
/* harmony export */ });
const IPresentation = Symbol.for("IPresentation");


/***/ }),

/***/ "./src/domain/presentation/IRouter.ts":
/*!********************************************!*\
  !*** ./src/domain/presentation/IRouter.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IRouter": () => (/* binding */ IRouter),
/* harmony export */   "routeDefinition": () => (/* binding */ routeDefinition)
/* harmony export */ });
const IRouter = Symbol.for("IRouter");
function routeDefinition(definition) {
    // Nothing to do, this is for extract-routes
}


/***/ }),

/***/ "./src/domain/presentation/ITreeView.ts":
/*!**********************************************!*\
  !*** ./src/domain/presentation/ITreeView.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITreeView": () => (/* binding */ ITreeView),
/* harmony export */   "ITreeViewInstances": () => (/* binding */ ITreeViewInstances)
/* harmony export */ });
const ITreeView = Symbol.for("ITreeView");
const ITreeViewInstances = {
    FileExplorer: Symbol.for("FileExplorer"),
};


/***/ }),

/***/ "./src/domain/presentation/IViewModelProxifier.ts":
/*!********************************************************!*\
  !*** ./src/domain/presentation/IViewModelProxifier.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IViewModelProxifier": () => (/* binding */ IViewModelProxifier)
/* harmony export */ });
const IViewModelProxifier = Symbol.for("IViewModelProxifier");


/***/ }),

/***/ "./src/domain/presentation/IZindex.ts":
/*!********************************************!*\
  !*** ./src/domain/presentation/IZindex.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IZindex": () => (/* binding */ IZindex)
/* harmony export */ });
const IZindex = Symbol.for("IZindex");


/***/ }),

/***/ "./src/domain/useCase/IAutoLogin.ts":
/*!******************************************!*\
  !*** ./src/domain/useCase/IAutoLogin.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IAutoLogin": () => (/* binding */ IAutoLogin)
/* harmony export */ });
const IAutoLogin = Symbol.for("IAutoLogin");


/***/ }),

/***/ "./src/domain/useCase/ICheckLogin.ts":
/*!*******************************************!*\
  !*** ./src/domain/useCase/ICheckLogin.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ICheckLogin": () => (/* binding */ ICheckLogin)
/* harmony export */ });
const ICheckLogin = Symbol.for("ICheckLogin");


/***/ }),

/***/ "./src/domain/useCase/ICreateApplication.ts":
/*!**************************************************!*\
  !*** ./src/domain/useCase/ICreateApplication.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ICreateApplication": () => (/* binding */ ICreateApplication)
/* harmony export */ });
const ICreateApplication = Symbol.for("ICreateApplication");


/***/ }),

/***/ "./src/domain/useCase/ICreateExportJob.ts":
/*!************************************************!*\
  !*** ./src/domain/useCase/ICreateExportJob.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ICreateExportJob": () => (/* binding */ ICreateExportJob)
/* harmony export */ });
const ICreateExportJob = Symbol.for("ICreateExportJob");


/***/ }),

/***/ "./src/domain/useCase/ICreateModel.ts":
/*!********************************************!*\
  !*** ./src/domain/useCase/ICreateModel.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ICreateModel": () => (/* binding */ ICreateModel)
/* harmony export */ });
const ICreateModel = Symbol.for("ICreateModel");


/***/ }),

/***/ "./src/domain/useCase/ICreateModule.ts":
/*!*********************************************!*\
  !*** ./src/domain/useCase/ICreateModule.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ICreateModule": () => (/* binding */ ICreateModule)
/* harmony export */ });
const ICreateModule = Symbol.for("ICreateModule");


/***/ }),

/***/ "./src/domain/useCase/IDeleteApplication.ts":
/*!**************************************************!*\
  !*** ./src/domain/useCase/IDeleteApplication.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IDeleteApplication": () => (/* binding */ IDeleteApplication)
/* harmony export */ });
const IDeleteApplication = Symbol.for("IDeleteApplication");


/***/ }),

/***/ "./src/domain/useCase/IDeleteModel.ts":
/*!********************************************!*\
  !*** ./src/domain/useCase/IDeleteModel.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IDeleteModel": () => (/* binding */ IDeleteModel)
/* harmony export */ });
const IDeleteModel = Symbol.for("IDeleteModel");


/***/ }),

/***/ "./src/domain/useCase/IDeleteModule.ts":
/*!*********************************************!*\
  !*** ./src/domain/useCase/IDeleteModule.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IDeleteModule": () => (/* binding */ IDeleteModule)
/* harmony export */ });
const IDeleteModule = Symbol.for("IDeleteModule");


/***/ }),

/***/ "./src/domain/useCase/IFileExplorer.ts":
/*!*********************************************!*\
  !*** ./src/domain/useCase/IFileExplorer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IFileExplorer": () => (/* binding */ IFileExplorer)
/* harmony export */ });
const IFileExplorer = Symbol.for("IFileExplorer");


/***/ }),

/***/ "./src/domain/useCase/IGetApplicationDetails.ts":
/*!******************************************************!*\
  !*** ./src/domain/useCase/IGetApplicationDetails.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IGetApplicationDetails": () => (/* binding */ IGetApplicationDetails)
/* harmony export */ });
const IGetApplicationDetails = Symbol.for("IGetApplicationDetails");


/***/ }),

/***/ "./src/domain/useCase/IGetExportJobArtifact.ts":
/*!*****************************************************!*\
  !*** ./src/domain/useCase/IGetExportJobArtifact.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IGetExportJobArtifact": () => (/* binding */ IGetExportJobArtifact)
/* harmony export */ });
const IGetExportJobArtifact = Symbol.for("IGetExportJobArtifact");


/***/ }),

/***/ "./src/domain/useCase/IGetExportSelectionData.ts":
/*!*******************************************************!*\
  !*** ./src/domain/useCase/IGetExportSelectionData.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IGetExportSelectionData": () => (/* binding */ IGetExportSelectionData)
/* harmony export */ });
const IGetExportSelectionData = Symbol.for("IGetExportSelectionData");


/***/ }),

/***/ "./src/domain/useCase/IGetExportTypes.ts":
/*!***********************************************!*\
  !*** ./src/domain/useCase/IGetExportTypes.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IGetExportTypes": () => (/* binding */ IGetExportTypes)
/* harmony export */ });
const IGetExportTypes = Symbol.for("IGetExportTypes");


/***/ }),

/***/ "./src/domain/useCase/IGetUserDomains.ts":
/*!***********************************************!*\
  !*** ./src/domain/useCase/IGetUserDomains.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IGetUserDomains": () => (/* binding */ IGetUserDomains)
/* harmony export */ });
const IGetUserDomains = Symbol.for("IGetUserDomains");


/***/ }),

/***/ "./src/domain/useCase/IInitStudio.ts":
/*!*******************************************!*\
  !*** ./src/domain/useCase/IInitStudio.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IInitStudio": () => (/* binding */ IInitStudio)
/* harmony export */ });
const IInitStudio = Symbol.for("IInitStudio");


/***/ }),

/***/ "./src/domain/useCase/IListApplications.ts":
/*!*************************************************!*\
  !*** ./src/domain/useCase/IListApplications.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IListApplications": () => (/* binding */ IListApplications)
/* harmony export */ });
const IListApplications = Symbol.for("IListApplications");


/***/ }),

/***/ "./src/domain/useCase/IListExportJobArtifacts.ts":
/*!*******************************************************!*\
  !*** ./src/domain/useCase/IListExportJobArtifacts.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IListExportJobArtifacts": () => (/* binding */ IListExportJobArtifacts)
/* harmony export */ });
const IListExportJobArtifacts = Symbol.for("IListExportJobArtifacts");


/***/ }),

/***/ "./src/domain/useCase/IListExportJobStepLogs.ts":
/*!******************************************************!*\
  !*** ./src/domain/useCase/IListExportJobStepLogs.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IListExportJobStepLogs": () => (/* binding */ IListExportJobStepLogs)
/* harmony export */ });
const IListExportJobStepLogs = Symbol.for("IListExportJobStepLogs");


/***/ }),

/***/ "./src/domain/useCase/IListExportJobSteps.ts":
/*!***************************************************!*\
  !*** ./src/domain/useCase/IListExportJobSteps.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IListExportJobSteps": () => (/* binding */ IListExportJobSteps)
/* harmony export */ });
const IListExportJobSteps = Symbol.for("IListExportJobSteps");


/***/ }),

/***/ "./src/domain/useCase/IListExportJobs.ts":
/*!***********************************************!*\
  !*** ./src/domain/useCase/IListExportJobs.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IListExportJobs": () => (/* binding */ IListExportJobs)
/* harmony export */ });
const IListExportJobs = Symbol.for("IListExportJobs");


/***/ }),

/***/ "./src/domain/useCase/IListModelHistories.ts":
/*!***************************************************!*\
  !*** ./src/domain/useCase/IListModelHistories.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IListModelHistories": () => (/* binding */ IListModelHistories)
/* harmony export */ });
const IListModelHistories = Symbol.for("IListModelHistories");


/***/ }),

/***/ "./src/domain/useCase/IListModelVersions.ts":
/*!**************************************************!*\
  !*** ./src/domain/useCase/IListModelVersions.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IListModelVersions": () => (/* binding */ IListModelVersions)
/* harmony export */ });
const IListModelVersions = Symbol.for("IListModelVersions");


/***/ }),

/***/ "./src/domain/useCase/ILogin.ts":
/*!**************************************!*\
  !*** ./src/domain/useCase/ILogin.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ILogin": () => (/* binding */ ILogin)
/* harmony export */ });
const ILogin = Symbol.for("ILogin");


/***/ }),

/***/ "./src/domain/useCase/ILogout.ts":
/*!***************************************!*\
  !*** ./src/domain/useCase/ILogout.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ILogout": () => (/* binding */ ILogout)
/* harmony export */ });
const ILogout = Symbol.for("ILogout");


/***/ }),

/***/ "./src/domain/useCase/IObjectUseCase.ts":
/*!**********************************************!*\
  !*** ./src/domain/useCase/IObjectUseCase.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IObjectUseCase": () => (/* binding */ IObjectUseCase)
/* harmony export */ });
const IObjectUseCase = Symbol.for("IObjectUseCase");


/***/ }),

/***/ "./src/domain/useCase/IProcessEditorUtil.ts":
/*!**************************************************!*\
  !*** ./src/domain/useCase/IProcessEditorUtil.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IProcessEditorUtil": () => (/* binding */ IProcessEditorUtil)
/* harmony export */ });
const IProcessEditorUtil = Symbol.for("IProcessEditorUtil");


/***/ }),

/***/ "./src/domain/useCase/IRestoreUser.ts":
/*!********************************************!*\
  !*** ./src/domain/useCase/IRestoreUser.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IRestoreUser": () => (/* binding */ IRestoreUser)
/* harmony export */ });
const IRestoreUser = Symbol.for("IRestoreUser");


/***/ }),

/***/ "./src/domain/useCase/IStudio.ts":
/*!***************************************!*\
  !*** ./src/domain/useCase/IStudio.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IStudio": () => (/* binding */ IStudio)
/* harmony export */ });
const IStudio = Symbol.for("IStudio");


/***/ }),

/***/ "./src/domain/useCase/ITimedOut.ts":
/*!*****************************************!*\
  !*** ./src/domain/useCase/ITimedOut.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITimedOut": () => (/* binding */ ITimedOut)
/* harmony export */ });
const ITimedOut = Symbol.for("ITimedOut");


/***/ }),

/***/ "./src/domain/useCase/IUpdateApplication.ts":
/*!**************************************************!*\
  !*** ./src/domain/useCase/IUpdateApplication.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IUpdateApplication": () => (/* binding */ IUpdateApplication)
/* harmony export */ });
const IUpdateApplication = Symbol.for("IUpdateApplication");


/***/ }),

/***/ "./src/domain/useCase/IUpdateModule.ts":
/*!*********************************************!*\
  !*** ./src/domain/useCase/IUpdateModule.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IUpdateModule": () => (/* binding */ IUpdateModule)
/* harmony export */ });
const IUpdateModule = Symbol.for("IUpdateModule");


/***/ }),

/***/ "./src/domain/useCase/IUseCaseExecutor.ts":
/*!************************************************!*\
  !*** ./src/domain/useCase/IUseCaseExecutor.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IUseCaseExecutor": () => (/* binding */ IUseCaseExecutor)
/* harmony export */ });
const IUseCaseExecutor = Symbol.for("IUseCaseExecutor");


/***/ }),

/***/ "./src/domain/viewModel/IViewModel.ts":
/*!********************************************!*\
  !*** ./src/domain/viewModel/IViewModel.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IViewModel": () => (/* binding */ IViewModel)
/* harmony export */ });
const IViewModel = Symbol.for("IViewModel");


/***/ }),

/***/ "./src/domain/viewModel/IViewModelManager.ts":
/*!***************************************************!*\
  !*** ./src/domain/viewModel/IViewModelManager.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IViewModelManager": () => (/* binding */ IViewModelManager)
/* harmony export */ });
const IViewModelManager = Symbol.for("IViewModelManager");


/***/ }),

/***/ "./src/environment.ts":
/*!****************************!*\
  !*** ./src/environment.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "presentationLayer": () => (/* binding */ presentationLayer),
/* harmony export */   "startupEnvironment": () => (/* binding */ startupEnvironment),
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
const startupEnvironment = "production"; //DO NOT MODIFY!! THIS LINE IS AUTOMATED!!!
const presentationLayer /* | "react" | "vue" */ = "vue3";
const version = "0.0.4"; //DO NOT MODIFY!! THIS LINE IS AUTOMATED!!!


/***/ }),

/***/ "./src/infrastructure/configImpl.ts":
/*!******************************************!*\
  !*** ./src/infrastructure/configImpl.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigImpl": () => (/* binding */ ConfigImpl)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsyringe */ "./node_modules/tsyringe/dist/esm5/index.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environment */ "./src/environment.ts");
/* harmony import */ var _appsetting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appsetting */ "./src/appsetting.ts");
/* harmony import */ var _domain_model_shellError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/model/shellError */ "./src/domain/model/shellError.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ConfigImpl = class ConfigImpl {
    constructor(environment = "") {
        this.environment = environment;
        this.environment = environment || _environment__WEBPACK_IMPORTED_MODULE_1__.startupEnvironment;
        this.settings = _appsetting__WEBPACK_IMPORTED_MODULE_2__.appSettingsDict[this.environment];
        if (!this.settings) {
            throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_3__.createError)({ message: "unexpected environment: " + this.environment, type: "technical" });
        }
    }
    getValue(key) {
        return this.settings[key];
    }
    getVersion() {
        return _environment__WEBPACK_IMPORTED_MODULE_1__.version;
    }
    getPresentationLayer() {
        return _environment__WEBPACK_IMPORTED_MODULE_1__.presentationLayer;
    }
};
ConfigImpl = __decorate([
    (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__.injectable)()
], ConfigImpl);



/***/ }),

/***/ "./src/infrastructure/domHelperImpl.ts":
/*!*********************************************!*\
  !*** ./src/infrastructure/domHelperImpl.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomHelperImpl": () => (/* binding */ DomHelperImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let DomHelperImpl = class DomHelperImpl {
    subscribeInteraction(cb) {
        document.body.addEventListener("mousemove", cb);
        document.body.addEventListener("mouseup", cb);
    }
    unSubscribeInteraction(cb) {
        document.body.removeEventListener("mousemove", cb);
        document.body.removeEventListener("mouseup", cb);
    }
};
DomHelperImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)()
], DomHelperImpl);



/***/ }),

/***/ "./src/infrastructure/frameMessanger.ts":
/*!**********************************************!*\
  !*** ./src/infrastructure/frameMessanger.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrameMessanger": () => (/* binding */ FrameMessanger)
/* harmony export */ });
/* harmony import */ var _stechquick_plateau_comm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stechquick/plateau-comm */ "./node_modules/@stechquick/plateau-comm/dist/PlateauMessaging.js");
/* harmony import */ var _stechquick_plateau_comm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stechquick_plateau_comm__WEBPACK_IMPORTED_MODULE_0__);

class FrameMessanger {
    constructor() {
        this.frame = document.createElement("iframe");
    }
    connect(url, messageHandler, options = {}) {
        this.url = url;
        this.messageHandler = messageHandler;
        document.body.appendChild(this.frame);
        if (options.init) {
            this.initFrame();
        }
    }
    attach(element) {
        const fStyle = this.frame.style;
        fStyle.position = "absolute";
        fStyle.margin = "0px";
        fStyle.border = "0px";
        this.detach();
        this.attachedElement = element;
        this.resizeObserver = new ResizeObserver(entries => {
            if (fStyle.display == "none") {
                return;
            }
            this.resizeTo(element);
        });
        this.resizeObserver.observe(element);
        this.resizeTo(element);
    }
    detach() {
        var _a;
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.show(false);
    }
    show(show) {
        if (show) {
            this.initFrame();
            this.resizeTo(this.attachedElement);
        }
        this.frame.style.display = show ? "block" : "none";
    }
    sendMessage(module, messageType, message, options) {
        var _a;
        return (_a = this.pm) === null || _a === void 0 ? void 0 : _a.Send(module, messageType, message, options);
    }
    initFrame() {
        if (this.frame.src) {
            return;
        }
        this.frame.src = this.url;
        this.pm = _stechquick_plateau_comm__WEBPACK_IMPORTED_MODULE_0__.PlateauMessaging.CreatePlateauMessaging(this.frame.contentWindow);
        if (this.messageHandler) {
            this.pm.SubscribeAll(this.messageHandler);
        }
    }
    resizeTo(element) {
        const fStyle = this.frame.style;
        const rect = element.getBoundingClientRect();
        fStyle.left = rect.left + "px";
        fStyle.top = rect.top + "px";
        fStyle.width = rect.width + "px";
        fStyle.height = rect.height + "px";
    }
}


/***/ }),

/***/ "./src/infrastructure/hookImpl.ts":
/*!****************************************!*\
  !*** ./src/infrastructure/hookImpl.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HookImpl": () => (/* binding */ HookImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/infrastructure/ILogger */ "./src/domain/infrastructure/ILogger.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var HookImpl_1;


let HookImpl = HookImpl_1 = class HookImpl {
    constructor(logger) {
        this.logger = logger;
        this.subscribers = [];
        this.hookName = "";
        this.hookState = { triggered: false, triggerArgs: [], active: false }; //having a hookState states this hook manages state
        this._autoTriggerPostSubscribers = true;
    }
    get autoTriggerPostSubscribers() {
        return this._autoTriggerPostSubscribers;
    }
    set autoTriggerPostSubscribers(v) {
        this._autoTriggerPostSubscribers = v;
    }
    setUp(options) {
        this.hookName = options.name;
        this.errorHandler = options.errorHandler;
        if (options.autoTriggerPostSubscribers === false) {
            this._autoTriggerPostSubscribers = false;
        }
        if (options.manageState) {
            this.hookState.active = options.manageState;
        }
    }
    ResetAndStartState() {
        this.hookState.triggerArgs = [];
        this.hookState.active = true;
        this.hookState.triggered = false;
    }
    DisableState() {
        this.hookState.triggerArgs = [];
        this.hookState.active = false;
        this.hookState.triggered = false;
    }
    IsTriggered() {
        if (!this.hookState.active) {
            throw new Error("IsTriggered can not be checked on a non manageState Hook: " + this.hookName);
        }
        return this.hookState.triggered;
    }
    getHookName() {
        let retVal = this.hookName;
        if (!retVal.toLowerCase().endsWith("hook")) {
            retVal += " hook";
        }
        return retVal;
    }
    get hasSubscribers() {
        return this.subscriberCount > 0;
    }
    get subscriberCount() {
        return this.subscribers.length;
    }
    get hasPostSubscribers() {
        var _a, _b;
        return (((_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.hasPostSubscribers) || ((_b = this.postSubscribers) === null || _b === void 0 ? void 0 : _b.hasSubscribers)) === true;
    }
    get triggerer() {
        return this.trigger;
    }
    trigger(...args) {
        var _a;
        if (this.hookState.active) {
            this.hookState.triggered = true;
            this.hookState.triggerArgs = args;
        }
        this.subscribers.forEach(sub => this.tryTriggerSubscriber(sub, args));
        if (!this._autoTriggerPostSubscribers)
            (_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.triggerer.apply(this.postSubscribers, args);
    }
    tryTriggerSubscriber(sub, args) {
        var _a;
        try {
            sub.apply(null, args);
        }
        catch (error) {
            this.logger.log({ message: `Hook: ${this.getHookName()} subcriber failed`, error: error, level: "error" });
            (_a = this.errorHandler) === null || _a === void 0 ? void 0 : _a.call(this, error, this.getHookName());
        }
    }
    triggerPostSubscribers(...args) {
        var _a;
        (_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.triggerer.apply(this.postSubscribers, args);
    }
    postSubscribe(cb) {
        if (!this.postSubscribers) {
            this.postSubscribers = new HookImpl_1(this.logger);
            this.postSubscribers.setUp({ name: this.hookName + "_Post", manageState: this.hookState.active });
            this.postSubscribers.hookState = this.hookState;
        }
        this.postSubscribers.subscribe(cb);
    }
    postUnsubscribe(cb) {
        var _a;
        (_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.unsubscribe(cb);
    }
    clearPostSubscribers(forced = false) {
        var _a;
        (_a = this.postSubscribers) === null || _a === void 0 ? void 0 : _a.clearSubscribers();
        if (forced || !this.hasPostSubscribers) {
            this.postSubscribers = undefined;
        }
    }
    forceClearAllSubscibers() {
        this.clearPostSubscribers(true);
        this.clearSubscribers();
    }
    subscribe(cb) {
        this.subscribers.push(cb);
        this.hookState.active && this.hookState.triggered && this.tryTriggerSubscriber(cb, this.hookState.triggerArgs);
    }
    clearSubscribers() {
        this.subscribers = [];
    }
    unsubscribe(cb) {
        this.subscribers = this.subscribers.filter(sub => sub != cb); // splice is fastest but this is safest, because of immutability, because of forEach traversals
    }
};
HookImpl = HookImpl_1 = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_ILogger__WEBPACK_IMPORTED_MODULE_1__.ILogger))
], HookImpl);



/***/ }),

/***/ "./src/infrastructure/inlineEditorImpl.ts":
/*!************************************************!*\
  !*** ./src/infrastructure/inlineEditorImpl.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InlineEditorImpl": () => (/* binding */ InlineEditorImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let InlineEditorImpl = class InlineEditorImpl {
    constructor() {
        this.root = document.createElement("div");
        this.connected = false;
    }
    get Root() { return this.root; }
    connect(editorName) {
        if (this.connected) {
            return;
        }
        this.root.classList.add(editorName + "-editor-root");
        document.body.appendChild(this.root);
        this.connected = true;
    }
    attach(editorName, element) {
        this.connect(editorName);
        const fStyle = this.root.style;
        fStyle.position = "absolute";
        fStyle.margin = "0px";
        fStyle.border = "0px";
        fStyle.background = "white"; // Furkan: Tasarim sirasinda degisebilir.
        fStyle.overflowY = "scroll"; // Furkan: Tum editor divlerine ekliyor. Ileride degisebilir.
        this.detach();
        this.attachedElement = element;
        this.resizeObserver = new ResizeObserver(entries => {
            if (fStyle.display == "none") {
                return;
            }
            this.resizeTo(element);
        });
        this.resizeObserver.observe(element);
        this.resizeTo(element);
    }
    detach() {
        var _a;
        if (!this.attachedElement) {
            return;
        }
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.show(false);
    }
    show(show) {
        if (!this.attachedElement) {
            return;
        }
        if (show) {
            this.resizeTo(this.attachedElement);
        }
        this.root.style.display = show ? "block" : "none";
    }
    resizeTo(element) {
        const fStyle = this.root.style;
        const rect = element.getBoundingClientRect();
        fStyle.left = rect.left + "px";
        fStyle.top = rect.top + "px";
        fStyle.width = rect.width + "px";
        fStyle.height = rect.height + "px";
    }
};
InlineEditorImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)()
], InlineEditorImpl);



/***/ }),

/***/ "./src/infrastructure/localizationImpl.ts":
/*!************************************************!*\
  !*** ./src/infrastructure/localizationImpl.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalizationImpl": () => (/* binding */ LocalizationImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _settings_localization_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/localization/en */ "./src/settings/localization/en.ts");
/* harmony import */ var _settings_localization_tr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/localization/tr */ "./src/settings/localization/tr.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const langs = { en: _settings_localization_en__WEBPACK_IMPORTED_MODULE_1__.langData, tr: _settings_localization_tr__WEBPACK_IMPORTED_MODULE_2__.langData };
let LocalizationImpl = class LocalizationImpl {
    constructor() {
        this.curLang = "en";
    }
    get(lrid) {
        return langs[this.curLang][lrid];
    }
};
LocalizationImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)()
], LocalizationImpl);



/***/ }),

/***/ "./src/infrastructure/loggerImpl.ts":
/*!******************************************!*\
  !*** ./src/infrastructure/loggerImpl.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggerImpl": () => (/* binding */ LoggerImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const targetDict = {
    "debug": console.log, "info": console.log, "log": console.log,
    "warning": console.warn,
    "error": console.error,
};
let LoggerImpl = class LoggerImpl {
    log(item) {
        let currentDateFormat = new Date(Date.now());
        let clientDate = currentDateFormat.getFullYear() + "." + ("0" + (currentDateFormat.getMonth() + 1)).slice(-2) + "." + ("0" + currentDateFormat.getDate()).slice(-2) + " " +
            currentDateFormat.getHours() + ':' + ("0" + currentDateFormat.getMinutes()).slice(-2) + ':' + ("0" + currentDateFormat.getSeconds()).slice(-2) + ':' + currentDateFormat.getMilliseconds();
        const target = targetDict[item.level];
        const params = [`[${clientDate}]`, { msg: item.message }];
        // if (item.additional) {
        //     params.push(item.additional);
        // }
        if (item.additionals) {
            item.additionals.forEach(additional => params.push(additional));
        }
        if (item.error) {
            const err = item.error;
            if (typeof err.message == "string") {
                try {
                    err.message = err.message.replace(/\n    at /g, "\n    @ "); // this breaks error stacks source map on console ex: "\n    at (node:)"
                }
                catch { } // some err.message can not be set :(
            }
            params.push(item.error);
        }
        target.apply(console, params);
    }
};
LoggerImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)()
], LoggerImpl);



/***/ }),

/***/ "./src/infrastructure/networkImpl.ts":
/*!*******************************************!*\
  !*** ./src/infrastructure/networkImpl.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkImpl": () => (/* binding */ NetworkImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/infrastructure/ILogger */ "./src/domain/infrastructure/ILogger.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _domain_infrastructure_IConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/infrastructure/IConfig */ "./src/domain/infrastructure/IConfig.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




let networkCounter = 0;
let NetworkImpl = class NetworkImpl {
    constructor(logger, config) {
        this.logger = logger;
        this.config = config;
    }
    async post(request) {
        const req = request;
        req.method = "POST";
        return await this.request(req);
    }
    async get(request) {
        const req = request;
        req.method = "GET";
        return await this.request(req);
    }
    async request(request) {
        let { url, timeout, headers, body, method, withCredentials } = request;
        timeout = timeout !== null && timeout !== void 0 ? timeout : this.config.getValue("networkTimeout");
        const counter = networkCounter++;
        this.logger.log({ level: "debug", message: `request [${counter}] --> ${url}` });
        const resp = await axios__WEBPACK_IMPORTED_MODULE_2___default().request({ url, data: body, headers, timeout, method, withCredentials });
        this.logger.log({ level: "debug", message: `response [${counter}] <-- ${url}` });
        const retVal = {
            body: resp.data,
            headers: resp.headers,
            status: resp.status,
            statusText: resp.statusText,
        };
        return retVal;
    }
};
NetworkImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_ILogger__WEBPACK_IMPORTED_MODULE_1__.ILogger)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IConfig__WEBPACK_IMPORTED_MODULE_3__.IConfig))
], NetworkImpl);



/***/ }),

/***/ "./src/infrastructure/qCloudApiImpl.ts":
/*!*********************************************!*\
  !*** ./src/infrastructure/qCloudApiImpl.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QCloudApiImpl": () => (/* binding */ QCloudApiImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/infrastructure/IConfig */ "./src/domain/infrastructure/IConfig.ts");
/* harmony import */ var _domain_infrastructure_ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/infrastructure/ILogger */ "./src/domain/infrastructure/ILogger.ts");
/* harmony import */ var _domain_infrastructure_INetwork__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/infrastructure/INetwork */ "./src/domain/infrastructure/INetwork.ts");
/* harmony import */ var _domain_model_shellError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/model/shellError */ "./src/domain/model/shellError.ts");
/* harmony import */ var _domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domain/useCase/IUseCaseExecutor */ "./src/domain/useCase/IUseCaseExecutor.ts");
/* harmony import */ var _domain_useCase_ITimedOut__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../domain/useCase/ITimedOut */ "./src/domain/useCase/ITimedOut.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







let counter = 0;
let QCloudApiImpl = class QCloudApiImpl {
    constructor(config, logger, network, executor) {
        this.config = config;
        this.logger = logger;
        this.network = network;
        this.executor = executor;
        this.qcloudApiUrl = this.config.getValue("qcloudApiUrl");
    }
    async request(path, data, options) {
        var _a, _b;
        const url = this.join(this.qcloudApiUrl, path);
        let resp;
        try {
            resp = await this.network.post({ url, body: data, withCredentials: true, timeout: options === null || options === void 0 ? void 0 : options.timeout });
        }
        catch (ex) {
            const err = ex;
            const resp = err.response;
            ;
            if (!resp || resp.status == 200) {
                throw ex;
            }
            const message = "qcloud returned status: " + resp.status + " " + resp.statusText;
            this.logger.log({ level: "error", message });
            if (resp.status == 401) {
                this.executor.executeUseCase(_domain_useCase_ITimedOut__WEBPACK_IMPORTED_MODULE_6__.ITimedOut);
                throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_4__.createHandledError)();
            }
            throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_4__.createError)({ message, type: "technical", title: "QCloud unavailable" });
        }
        if (resp.body.status != "success") {
            const message = "qcloud returned: " + ((_a = resp.body.error) === null || _a === void 0 ? void 0 : _a.message);
            throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_4__.createError)({ message, type: resp.body.status == "customerror" ? "business" : "technical", title: (_b = resp.body.error) === null || _b === void 0 ? void 0 : _b.title });
        }
        return resp.body.data;
    }
    join(...urlParts) {
        return urlParts.map(urlPart => {
            let start = 0, end = urlPart.length, doOp = false;
            if (urlPart[0] == "/") {
                start++;
                doOp = true;
            }
            if (urlPart[urlPart.length - 1] == "/") {
                end--;
                doOp = true;
            }
            return doOp ? urlPart.substring(start, end) : urlPart;
        }).join("/");
    }
    async createModel(params) {
        const reqData = {
            name: params.name,
            ownerItem: params.parentObject.ID,
            ownerType: params.parentObject.objectType,
            model: params.modelBody,
            modelType: params.modelType,
            modelAdditionals: params.modelAdditionals
        };
        const model = await this.request("/addmodel", reqData);
        const retVal = {
            ID: model.ID,
            name: params.name,
            modelBody: params.modelBody,
            modelType: params.modelType,
            parent: params.parentObject,
            synced: true,
            objectType: "model",
            additionals: params.modelAdditionals
        };
        return retVal;
    }
    async createModule(name, ownerProjects) {
        const module = await this.request("/addmodule", { name, ownerProjects });
        const retVal = { ID: module.ID, name, objectType: "module", children: [], synced: true };
        return retVal;
    }
    async createApplication(params) {
        const reqData = {
            name: params.name,
            description: params.description,
            logo: params.logo,
            color: params.color,
            deployParameters: params.deployParameters
        };
        const app = await this.request("/addapplication", reqData);
        const retVal = {
            ID: app.ID,
            name: params.name,
            description: params.description,
            synced: true,
            objectType: "application",
            logo: params.logo,
            color: params.color,
            deployParameters: params.deployParameters,
        };
        return retVal;
    }
    async getModelInfo(ID, { checkoutControl = false, createCheckout = false } = {}) {
        const info = await this.getModel(ID, { checkoutControl, createCheckout, retrieveBody: false });
        return info;
    }
    async getModel(ID, { checkoutControl = false, createCheckout = false, retrieveBody = true } = {}) {
        const info = await this.request("/getmodel", { ID, modelResponseType: retrieveBody ? undefined : "info", checkoutControl, createCheckout });
        return info;
    }
    async getModelBody(ID) {
        const modelResponse = await this.request("/getmodel", { ID, modelResponseType: "body", checkoutControl: false });
        return modelResponse;
    }
    async updateModel(ID, params) {
        var _a, _b, _c;
        await this.request("/updatemodel", { ID, ...params, ownerItem: (_a = params.parentObject) === null || _a === void 0 ? void 0 : _a.ID, ownerType: (_b = params.parentObject) === null || _b === void 0 ? void 0 : _b.objectType, ownerUser: (_c = params.ownerUser) === null || _c === void 0 ? void 0 : _c.email });
    }
    async updateModule(ID, params) {
        var _a;
        await this.request("/updatemodule", { ID, name: params.name, ownerUser: (_a = params.ownerUser) === null || _a === void 0 ? void 0 : _a.email });
    }
    async updateApplication(ID, params) {
        const ownerUser = params.ownerUser;
        delete params.ownerUser;
        await this.request("/updateapplication", { ID, ownerUser: ownerUser === null || ownerUser === void 0 ? void 0 : ownerUser.email, ...params });
    }
    async deleteModel(ID, addHistory) {
        await this.request("/deletemodel", { ID, addHistory });
    }
    async deleteModule(ID, addHistory) {
        await this.request("/deletemodule", { ID, addHistory });
    }
    async deleteFolder(ID, addHistory) {
        await this.request("/deletefolder", { ID, addHistory });
    }
    async deleteApplication(ID, addHistory) {
        await this.request("/deleteapplication", { ID, addHistory });
    }
    async getUserDomains(customerEmail) {
        const response = await this.request("/gettenantuserbytenantid", { customerEmail });
        const domains = response.tenants;
        return domains;
    }
    async login(username, password, tenantID) {
        await this.request("/login", { username, password, tenantID });
    }
    async listApplications(getDetails) {
        const apps = await this.request("/listapps", { getDetails });
        return apps;
    }
    async getApplicationDetails(appID) {
        const details = await this.request("/getappdetails", { appID });
        return details;
    }
    async getApplication(appID) {
        const application = await this.request("/getapplication", { ID: appID });
        return application;
    }
    async logout() {
        await this.request("/logout", undefined);
    }
    async getUserInfobyToken() {
        const userInfo = await this.request("/requesttoken", undefined);
        const retVal = {
            domains: userInfo.UserTenants,
            email: userInfo.UserEmail,
            loggedIn: true,
            selectedDomain: userInfo.tenantInfo
        };
        return retVal;
    }
    async getExportTypes() {
        return [
            { name: "qui", text: "Create QUI Package" },
            { name: "sdk", text: "Create WebSDK Package" },
            { name: "model", text: "Export QJson Models" },
            { name: "git", text: "Push Models to Git" }
        ];
    }
    async getExportSelectionData(applicationID, exportType) {
        const data = await this.request("/getexportselectiondata", { applicationID, exportType });
        return data;
    }
    async listModelHistories(modelID, historyType) {
        const data = await this.request("/listmodelhistories", { modelID, historyType });
        return data;
    }
    async getModelHistory(historyID) {
        const getModelHistoryType = "full";
        const data = await this.request("/getmodelhistory", { ID: historyID, getModelHistoryType });
        return data;
    }
    async createExportJob(app, exportType, exportItems) {
        const job = await this.request("/addexportjob", { app, exportType, exportItems });
        return job;
    }
    async listExportJobs() {
        const jobs = await this.request("/listexportjobsstatus", undefined);
        return jobs;
    }
    async listExportJobSteps(jobID) {
        const steps = await this.request("/listexportjobsteps", { jobID });
        return steps;
    }
    async listExportJobStepLogs(stepID) {
        const logs = await this.request("/listexportjobsteplogs", { stepID });
        return logs;
    }
    async listExportJobArtifacts(jobID) {
        const artifacts = await this.request("/listexportjobartifacts", { jobID });
        return artifacts;
    }
    async getExportJobArtifact(artifactID) {
        const artifacts = await this.request("/getexportjobartifact", { ID: artifactID, encoding: "latin1" }, { timeout: 3 * 60 * 1000 });
        return artifacts;
    }
    async listTreeviewItems(applicationID) {
        const items = await this.request("/listtreeviewitems", { applicationID });
        return items;
    }
};
QCloudApiImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_IConfig__WEBPACK_IMPORTED_MODULE_1__.IConfig)),
    __param(1, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_ILogger__WEBPACK_IMPORTED_MODULE_2__.ILogger)),
    __param(2, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_INetwork__WEBPACK_IMPORTED_MODULE_3__.INetwork)),
    __param(3, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_useCase_IUseCaseExecutor__WEBPACK_IMPORTED_MODULE_5__.IUseCaseExecutor))
], QCloudApiImpl);



/***/ }),

/***/ "./src/infrastructure/startUp.ts":
/*!***************************************!*\
  !*** ./src/infrastructure/startUp.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "infraStartUp": () => (/* binding */ infraStartUp)
/* harmony export */ });
/* harmony import */ var _domain_infrastructure_IConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/infrastructure/IConfig */ "./src/domain/infrastructure/IConfig.ts");
/* harmony import */ var _domain_infrastructure_IDomHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/infrastructure/IDomHelper */ "./src/domain/infrastructure/IDomHelper.ts");
/* harmony import */ var _domain_infrastructure_IFrameMessanger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/infrastructure/IFrameMessanger */ "./src/domain/infrastructure/IFrameMessanger.ts");
/* harmony import */ var _domain_infrastructure_IHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/infrastructure/IHook */ "./src/domain/infrastructure/IHook.ts");
/* harmony import */ var _domain_infrastructure_IInlineEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/infrastructure/IInlineEditor */ "./src/domain/infrastructure/IInlineEditor.ts");
/* harmony import */ var _domain_infrastructure_ILocalization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domain/infrastructure/ILocalization */ "./src/domain/infrastructure/ILocalization.ts");
/* harmony import */ var _domain_infrastructure_ILogger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../domain/infrastructure/ILogger */ "./src/domain/infrastructure/ILogger.ts");
/* harmony import */ var _domain_infrastructure_INetwork__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../domain/infrastructure/INetwork */ "./src/domain/infrastructure/INetwork.ts");
/* harmony import */ var _domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../domain/infrastructure/IQCloudApi */ "./src/domain/infrastructure/IQCloudApi.ts");
/* harmony import */ var _domain_infrastructure_IThrotler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../domain/infrastructure/IThrotler */ "./src/domain/infrastructure/IThrotler.ts");
/* harmony import */ var _domain_infrastructure_ITimer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../domain/infrastructure/ITimer */ "./src/domain/infrastructure/ITimer.ts");
/* harmony import */ var _configImpl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./configImpl */ "./src/infrastructure/configImpl.ts");
/* harmony import */ var _domHelperImpl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./domHelperImpl */ "./src/infrastructure/domHelperImpl.ts");
/* harmony import */ var _frameMessanger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./frameMessanger */ "./src/infrastructure/frameMessanger.ts");
/* harmony import */ var _hookImpl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hookImpl */ "./src/infrastructure/hookImpl.ts");
/* harmony import */ var _inlineEditorImpl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inlineEditorImpl */ "./src/infrastructure/inlineEditorImpl.ts");
/* harmony import */ var _localizationImpl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./localizationImpl */ "./src/infrastructure/localizationImpl.ts");
/* harmony import */ var _loggerImpl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./loggerImpl */ "./src/infrastructure/loggerImpl.ts");
/* harmony import */ var _networkImpl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./networkImpl */ "./src/infrastructure/networkImpl.ts");
/* harmony import */ var _qCloudApiImpl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./qCloudApiImpl */ "./src/infrastructure/qCloudApiImpl.ts");
/* harmony import */ var _throttlerImpl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./throttlerImpl */ "./src/infrastructure/throttlerImpl.ts");
/* harmony import */ var _timerImpl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./timerImpl */ "./src/infrastructure/timerImpl.ts");






















const infraStartUp = {
    register(container) {
        container.register(_domain_infrastructure_ILogger__WEBPACK_IMPORTED_MODULE_6__.ILogger, _loggerImpl__WEBPACK_IMPORTED_MODULE_17__.LoggerImpl);
        container.register(_domain_infrastructure_IConfig__WEBPACK_IMPORTED_MODULE_0__.IConfig, _configImpl__WEBPACK_IMPORTED_MODULE_11__.ConfigImpl);
        container.register(_domain_infrastructure_IQCloudApi__WEBPACK_IMPORTED_MODULE_8__.IQCloudApi, _qCloudApiImpl__WEBPACK_IMPORTED_MODULE_19__.QCloudApiImpl);
        container.register(_domain_infrastructure_IHook__WEBPACK_IMPORTED_MODULE_3__.IHook, _hookImpl__WEBPACK_IMPORTED_MODULE_14__.HookImpl);
        container.register(_domain_infrastructure_INetwork__WEBPACK_IMPORTED_MODULE_7__.INetwork, _networkImpl__WEBPACK_IMPORTED_MODULE_18__.NetworkImpl);
        container.register(_domain_infrastructure_IFrameMessanger__WEBPACK_IMPORTED_MODULE_2__.IFrameMessanger, _frameMessanger__WEBPACK_IMPORTED_MODULE_13__.FrameMessanger);
        container.register(_domain_infrastructure_ITimer__WEBPACK_IMPORTED_MODULE_10__.ITimer, _timerImpl__WEBPACK_IMPORTED_MODULE_21__.TimerImpl);
        container.register(_domain_infrastructure_IDomHelper__WEBPACK_IMPORTED_MODULE_1__.IDomHelper, _domHelperImpl__WEBPACK_IMPORTED_MODULE_12__.DomHelperImpl);
        container.register(_domain_infrastructure_IThrotler__WEBPACK_IMPORTED_MODULE_9__.IThrottler, _throttlerImpl__WEBPACK_IMPORTED_MODULE_20__.ThrottlerImpl);
        container.register(_domain_infrastructure_IInlineEditor__WEBPACK_IMPORTED_MODULE_4__.IInlineEditor, _inlineEditorImpl__WEBPACK_IMPORTED_MODULE_15__.InlineEditorImpl);
        container.registerInstance(_domain_infrastructure_ILocalization__WEBPACK_IMPORTED_MODULE_5__.ILocalization, new _localizationImpl__WEBPACK_IMPORTED_MODULE_16__.LocalizationImpl());
    }
};


/***/ }),

/***/ "./src/infrastructure/throttlerImpl.ts":
/*!*********************************************!*\
  !*** ./src/infrastructure/throttlerImpl.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThrottlerImpl": () => (/* binding */ ThrottlerImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ThrottlerImpl = class ThrottlerImpl {
    constructor() {
        this.blocking = false;
        this.waiting = false;
    }
    setup(cb, interval, context) {
        this.cb = cb;
        this.context = context;
        this.interval = interval;
    }
    trigger(...params) {
        if (!this.cb) {
            throw new Error("must setup throttler before trigger");
        }
        this.params = params;
        this.waiting = true;
        if (this.blocking) {
            return;
        }
        this.blocking = true;
        this.call();
    }
    block() {
        this.timer && clearTimeout(this.timer);
        this.blocking = true;
        this.startTimer();
    }
    startTimer() {
        if (!this.blocking) {
            return;
        }
        this.waiting = false;
        this.params = undefined;
        this.timer = setTimeout(() => this.call(), this.interval);
    }
    call() {
        try {
            if (this.waiting) {
                this.cb.call(this.context, ...this.params);
            }
            else {
                this.blocking = false;
            }
        }
        finally {
            this.startTimer();
        }
    }
};
ThrottlerImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)()
], ThrottlerImpl);



/***/ }),

/***/ "./src/infrastructure/timerImpl.ts":
/*!*****************************************!*\
  !*** ./src/infrastructure/timerImpl.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerImpl": () => (/* binding */ TimerImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/infrastructure/ILogger */ "./src/domain/infrastructure/ILogger.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let TimerImpl = class TimerImpl {
    constructor(logger) {
        this.logger = logger;
        this.lastIntervalCall = Date.now();
    }
    reset() {
        if (!this.mainInterval) {
            return;
        }
        window.clearInterval(this.mainInterval);
    }
    setUp(options) {
        this.options = options;
        const now = Date.now();
        this.targetTime = now + this.options.time;
        this.lastIntervalCall = now;
        this.mainInterval = window.setInterval(() => {
            const now = Date.now();
            if (options.interval && now - this.lastIntervalCall >= options.interval.time) {
                try {
                    options.interval.callback();
                }
                catch (error) {
                    this.logger.log({ level: "error", error, message: "timer interval error" });
                }
                this.lastIntervalCall = now;
            }
            if (now >= this.targetTime) {
                this.reset();
                options.callback();
            }
        }, 1000);
    }
    restart() {
        this.reset();
        if (!this.options) {
            return;
        }
        this.setUp(this.options);
    }
};
TimerImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.inject)(_domain_infrastructure_ILogger__WEBPACK_IMPORTED_MODULE_1__.ILogger))
], TimerImpl);



/***/ }),

/***/ "./src/presentation/all/impls/treeview.ts":
/*!************************************************!*\
  !*** ./src/presentation/all/impls/treeview.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeView": () => (/* binding */ TreeView)
/* harmony export */ });
/* harmony import */ var _treeview_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treeview.css */ "./src/presentation/all/impls/treeview.css");

class TreeView {
    constructor() {
        this.root = createDiv({ class: "root" });
        this.itemsRoot = createDiv({ class: "items-root" });
        this.itemDict = {};
        this.itemDomDict = new Map();
        this.itemList = [];
    }
    setup(parent, options = {}) {
        parent.appendChild(this.root);
        this.root.appendChild(this.itemsRoot);
        this.setHeader(options.header);
        this.itemsRoot.addEventListener("click", mouseEvent => {
            const targetContainer = findEventTargetWithClass(mouseEvent, "row-container");
            if (!targetContainer) {
                return;
            }
            const targetItem = this.itemDomDict.get(targetContainer);
            if (!targetItem) {
                return;
            }
            this.itemSelection(targetItem, true);
        });
        this.documentClickListener = () => {
            if (!this.contextMenuCloser) {
                return;
            }
            this.contextMenuCloser();
        };
        document.addEventListener("click", this.documentClickListener);
    }
    setHeader(header) {
        if (header) {
            this.headerItem = this.arangeHeader(header);
            this.root.insertBefore(this.headerItem.rowContainer, this.itemsRoot);
        }
        else {
            if (!this.headerItem) {
                return;
            }
            this.root.removeChild(this.headerItem.rowContainer);
        }
    }
    addItem(items, parentId) {
        if (!(items instanceof Array)) {
            items = [items];
        }
        items.forEach(item => {
            const newItem = this.convertTreeItemToInternal(item, false);
            this.importItem(newItem, parentId);
            if (item.children) {
                item.children.forEach(child => this.addItem(child, item.id));
            }
            setIcon(newItem);
        });
    }
    getItem(itemId) {
        return this.itemDict[itemId];
    }
    updateItemName(itemId, itemName) {
        const item = this.getItem(itemId);
        item.name = itemName;
        item.contents.text.textContent = itemName;
    }
    reset() {
        this.setHeader(undefined);
        this.itemList.forEach(item => this.removeItem(item.id));
        if (this.documentClickListener) {
            document.removeEventListener("click", this.documentClickListener);
        }
    }
    removeItem(itemId) {
        const item = this.itemDict[itemId];
        if (!item) {
            return;
        }
        if (item.children) {
            item.children.forEach(child => this.removeItem(child.id));
        }
        if (item.parent) {
            item.parent.children = item.parent.children.filter(child => child.id != itemId);
            setIcon(item.parent);
        }
        this.itemsRoot.removeChild(item.rowContainer);
        this.itemDomDict.delete(item.rowContainer);
        if (this.curSelected == item) {
            this.curSelected = undefined;
        }
        delete this.itemDict[itemId];
    }
    addAction(itemId, actions) {
        const item = this.itemDict[itemId];
        if (!item) {
            return;
        }
        actions = actions instanceof Array ? actions : [actions];
        this.createActions(item, actions);
    }
    removeAction(itemId, actionName) {
        var _a, _b;
        const item = this.itemDict[itemId];
        if (!item || !item.actions) {
            return;
        }
        const actionIndex = (_a = item.actions) === null || _a === void 0 ? void 0 : _a.findIndex(action => action.name == actionName);
        const action = item.actions[actionIndex];
        if (!action) {
            return;
        }
        (_b = action.actionDiv.parentElement) === null || _b === void 0 ? void 0 : _b.removeChild(action.actionDiv);
        item.actions.splice(actionIndex, 1);
    }
    collapseAll() {
        Object.keys(this.itemDict).forEach(itemId => this.toggleCollapse(this.itemDict[itemId], true));
    }
    selectItem(itemId) {
        const targetItem = this.itemDict[itemId];
        if (!targetItem) {
            return;
        }
        this.itemSelection(targetItem, true);
    }
    unselectItem(itemId) {
        const targetItem = this.itemDict[itemId];
        if (!targetItem) {
            return;
        }
        this.itemSelection(targetItem, false);
    }
    importItem(newItem, parentId) {
        const parent = parentId ? this.itemDict[parentId] : undefined;
        if (parent) {
            newItem.parent = parent;
            newItem.level = parent.level + 1;
        }
        else {
            newItem.level = 0;
        }
        newItem.twistie.style.paddingLeft = 6 * newItem.level + "px";
        createIndent(newItem);
        this.attachParent(newItem);
        if (parent) {
            setIcon(parent);
        }
        this.itemDict[newItem.id] = newItem;
        this.itemDomDict.set(newItem.rowContainer, newItem);
    }
    attachParent(item) {
        if (item.parent && !item.parent.children) {
            item.parent.children = [];
        }
        const parentChildrenList = item.parent ? item.parent.children : this.itemList;
        let targetIndex = parentChildrenList.findIndex(child => child.name > item.name);
        if (targetIndex == -1) {
            const parentLastChild = parentChildrenList[parentChildrenList.length - 1];
            if (!parentLastChild) {
                if (item.parent) {
                    this.itemsRoot.insertBefore(item.rowContainer, item.parent.rowContainer.nextElementSibling);
                }
                else {
                    this.itemsRoot.appendChild(item.rowContainer);
                }
            }
            else {
                const lastLeaf = findLastLeaf(parentLastChild);
                this.itemsRoot.insertBefore(item.rowContainer, lastLeaf.rowContainer.nextElementSibling);
            }
            parentChildrenList.push(item);
        }
        else {
            this.itemsRoot.insertBefore(item.rowContainer, parentChildrenList[targetIndex].rowContainer);
            parentChildrenList.splice(targetIndex, 0, item);
        }
    }
    toggleCollapse(item, override) {
        var _a;
        if (!item.children) {
            return;
        }
        item.collapsed = override === undefined ? !item.collapsed : override;
        setIcon(item);
        (_a = item.children) === null || _a === void 0 ? void 0 : _a.forEach(child => this.toggleVisibility(child, override));
    }
    toggleVisibility(item, override) {
        var _a;
        item.hidden = override === undefined ? !item.hidden : override;
        item.rowContainer.style.display = item.hidden ? "none" : "block";
        if (item.collapsed) {
            return;
        }
        (_a = item.children) === null || _a === void 0 ? void 0 : _a.forEach(child => this.toggleVisibility(child));
    }
    itemSelection(item, selected) {
        var _a, _b;
        const itemSelected = item.rowContainer.classList.contains("selected");
        if (selected) {
            this.toggleCollapse(item);
            if (itemSelected) {
                return;
            }
            item.rowContainer.classList.add("selected");
            (_b = (_a = item.cb) === null || _a === void 0 ? void 0 : _a.select) === null || _b === void 0 ? void 0 : _b.call(_a);
            this.curSelected && this.itemSelection(this.curSelected, false);
            this.curSelected = item;
        }
        else {
            if (!itemSelected) {
                return;
            }
            item.rowContainer.classList.remove("selected");
            this.curSelected = undefined;
        }
    }
    convertTreeItemToInternal(item, header) {
        const retVal = {
            id: item.id,
            name: item.name,
            menu: item.menu,
            cb: item.cb,
            rowContainer: createDiv({ class: "row-container" }),
            row: createDiv({ style: { display: "flex", flexDirection: "row" }, class: "row" }),
            contentDiv: createDiv({ style: { display: "flex", flexDirection: "row", width: "100%" }, class: "content" }),
            contents: {
                text: createDiv({ text: item.name, style: { flex: "1", whiteSpace: "nowrap" }, class: header ? "header-text" : undefined }),
                icon: createDiv({ style: { minWidth: "10px" } }),
                actions: createDiv({ class: "actions" }),
            },
            indent: createDiv({ style: "", class: "indent" }),
            twistie: createDiv({ class: "twistie" }),
            level: 0,
            actionsWithRoot: item.actionsWithRoot,
        };
        retVal.rowContainer.appendChild(retVal.row);
        retVal.row.appendChild(retVal.indent);
        retVal.row.appendChild(retVal.twistie);
        retVal.row.appendChild(retVal.contentDiv);
        if (item.actions) {
            this.createActions(retVal, item.actions);
        }
        appendChildren(retVal.contentDiv, [retVal.contents.icon, retVal.contents.text, retVal.contents.actions]);
        return retVal;
    }
    createActions(item, actions) {
        const actionsDiv = item.contents.actions;
        item.actions = item.actions || [];
        actions.forEach(action => {
            var _a, _b;
            const actionDiv = createDiv({ text: action.name, class: "action" });
            let clickCB;
            if (action.type == "IActionMenuItem") {
                const actionUL = createElement("ul", { parent: document.body, class: "dropdown-menu", style: { display: "none" } });
                (_a = item.actions) === null || _a === void 0 ? void 0 : _a.push({ type: "IActionMenuItem", name: action.name, children: action.children, actionDiv: actionDiv, actionUL });
                action.children.forEach(child => {
                    const li = createElement("li", { parent: actionUL, events: { click: () => { var _a; (_a = this.contextMenuCloser) === null || _a === void 0 ? void 0 : _a.call(this); child.selectCb(); } } });
                    const a = createElement("a", { parent: li, class: "dropdown-item", text: child.name });
                    a.href = "#";
                });
                clickCB = () => {
                    var _a;
                    (_a = this.contextMenuCloser) === null || _a === void 0 ? void 0 : _a.call(this);
                    this.contextMenuCloser = () => { actionUL.style.display = "none"; this.contextMenuCloser = undefined; };
                    actionUL.style.display = "block";
                    const divRect = actionDiv.getBoundingClientRect();
                    actionUL.style.top = divRect.top + divRect.height + "px";
                    actionUL.style.left = divRect.left + "px";
                };
            }
            else {
                (_b = item.actions) === null || _b === void 0 ? void 0 : _b.push({ type: "IActionSingleItem", name: action.name, selectCb: action.selectCb, actionDiv: actionDiv });
                clickCB = () => { var _a; return (_a = action.selectCb) === null || _a === void 0 ? void 0 : _a.call(action); };
            }
            actionDiv.addEventListener("click", mouseEvent => {
                mouseEvent.stopPropagation();
                clickCB();
            });
            actionsDiv.appendChild(actionDiv);
        });
        actionsDiv.style.display = "none";
        item.actionHandlers = {};
        item.actionHandlers.mouseover = () => actionsDiv.style.removeProperty("display");
        item.actionHandlers.mouseleave = () => actionsDiv.style.display = "none";
        item.rowContainer.addEventListener("mouseover", item.actionHandlers.mouseover);
        item.rowContainer.addEventListener("mouseleave", item.actionHandlers.mouseleave);
        if (item.actionsWithRoot) {
            this.itemsRoot.addEventListener("mouseover", item.actionHandlers.mouseover);
            this.itemsRoot.addEventListener("mouseleave", item.actionHandlers.mouseleave);
        }
    }
    arangeHeader(headerOptions) {
        const header = this.convertTreeItemToInternal({
            id: "",
            name: headerOptions.text,
            actions: headerOptions.actions,
            actionsWithRoot: headerOptions.actionsWithRoot,
        }, true);
        header.rowContainer.style.height = "23px";
        return header;
    }
}
function createIndent(newItem) {
    Array.from(new Array(newItem.level)).forEach(each => newItem.indent.appendChild(createDiv({ class: "indent-guide" })));
}
function setIcon(item) {
    item.contents.icon.textContent = getIconText(item);
}
function getIconText(item) {
    var _a;
    const hasChildren = ((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) || 0 > 0;
    if (!hasChildren) {
        return "";
    }
    return item.collapsed ? "+" : "-";
}
function findLastLeaf(item) {
    const children = item.children;
    if (children && children.length > 0) {
        return findLastLeaf(children[children.length - 1]);
    }
    return item;
}
function findEventTargetWithClass(event, searchClass) {
    const realSearch = "qcloud-tree-" + searchClass;
    let target = event.target;
    while (target) {
        if (target.classList.contains(realSearch)) {
            return target;
        }
        target = target.parentElement;
    }
    return undefined;
}
function appendChildren(parent, elements) {
    elements.forEach(element => element && parent.appendChild(element));
}
function createDiv(options = {}) {
    const div = document.createElement("div");
    if (options.text) {
        div.textContent = options.text;
    }
    if (options.style) {
        Object.keys(options.style).forEach(style => div.style[style] = options.style[style]);
    }
    if (options.class) {
        if (options.class instanceof Array) {
            options.class.forEach(eachClass => div.classList.add("qcloud-tree-" + eachClass));
        }
        else {
            div.classList.add("qcloud-tree-" + options.class);
        }
    }
    return div;
}
function createElement(tagName, options = {}) {
    const element = document.createElement(tagName);
    if (options.text) {
        element.textContent = options.text;
    }
    if (options.style) {
        Object.keys(options.style).forEach(style => element.style[style] = options.style[style]);
    }
    if (options.events) {
        if (options.events.click) {
            element.addEventListener("click", options.events.click);
        }
    }
    if (options.class) {
        if (options.class instanceof Array) {
            options.class.forEach(eachClass => element.classList.add("qcloud-tree-" + eachClass));
        }
        else {
            element.classList.add("qcloud-tree-" + options.class);
        }
    }
    if (options.parent) {
        options.parent.appendChild(element);
    }
    return element;
}


/***/ }),

/***/ "./src/presentation/all/impls/zindexImpl.ts":
/*!**************************************************!*\
  !*** ./src/presentation/all/impls/zindexImpl.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZIndexImpl": () => (/* binding */ ZIndexImpl)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_model_shellError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../domain/model/shellError */ "./src/domain/model/shellError.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let ZIndexImpl = class ZIndexImpl {
    constructor() {
        this.indexDict = {};
        this.optionsDict = {};
    }
    register(key, options) {
        if (this.optionsDict[key]) {
            throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_1__.createError)({ message: `ZIndex already registered for: ${key.toString()}`, type: "technical" });
        }
        this.assertFromGaps(key, options);
        this.optionsDict[key] = options;
    }
    getZIndex(key) {
        const options = this.getOptions(key);
        let curItems = this.retrieveCurItems(key);
        let zindex = options.from;
        if (!curItems.length) {
            curItems.push(zindex);
        }
        else {
            const last = curItems[curItems.length - 1];
            zindex = last > zindex ? last : zindex;
            zindex++;
            curItems.push(zindex);
        }
        return zindex;
    }
    removeZIndex(key, zindex) {
        let curItems = this.retrieveCurItems(key);
        if (!curItems.length) {
            return;
        }
        if (zindex) {
            const index = curItems.findIndex(index => index == zindex);
            curItems.splice(index, 1);
        }
        else {
            curItems.splice(curItems.length - 1, 1);
        }
    }
    retrieveCurItems(key) {
        let curItems = this.indexDict[key];
        if (!curItems) {
            curItems = this.indexDict[key] = [];
        }
        return curItems;
    }
    getOptions(key) {
        const options = this.optionsDict[key];
        if (!options) {
            throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_1__.createError)({ message: `ZIndex not registered for: ${key.toString()}`, type: "technical" });
        }
        ;
        return options;
    }
    assertFromGaps(key, options) {
        Reflect.ownKeys(this.optionsDict).forEach(optionsKey => {
            const curOptions = this.optionsDict[optionsKey];
            if (Math.abs(curOptions.from - options.from) < 30) {
                throw (0,_domain_model_shellError__WEBPACK_IMPORTED_MODULE_1__.createError)({ message: `ZIndex registration error for: ${key.toString()}. From value too close: ${options.from}. Gap between from(s) should be > 30. ${optionsKey.toString()} from: ${curOptions.from}`, type: "technical" });
            }
        });
    }
};
ZIndexImpl = __decorate([
    (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.injectable)()
], ZIndexImpl);



/***/ }),

/***/ "./src/presentation/startUp.ts":
/*!*************************************!*\
  !*** ./src/presentation/startUp.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "presentationStartUp": () => (/* binding */ presentationStartUp)
/* harmony export */ });
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _domain_infrastructure_IConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/infrastructure/IConfig */ "./src/domain/infrastructure/IConfig.ts");
/* harmony import */ var _domain_infrastructure_ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/infrastructure/ILogger */ "./src/domain/infrastructure/ILogger.ts");
/* harmony import */ var _domain_presentation_IPresentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/presentation/IPresentation */ "./src/domain/presentation/IPresentation.ts");
/* harmony import */ var _domain_presentation_ITreeView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/presentation/ITreeView */ "./src/domain/presentation/ITreeView.ts");
/* harmony import */ var _domain_presentation_IZindex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domain/presentation/IZindex */ "./src/domain/presentation/IZindex.ts");
/* harmony import */ var _all_impls_treeview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all/impls/treeview */ "./src/presentation/all/impls/treeview.ts");
/* harmony import */ var _all_impls_zindexImpl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all/impls/zindexImpl */ "./src/presentation/all/impls/zindexImpl.ts");








const presentationStartUp = {
    async register(container) {
        container.register(_domain_presentation_ITreeView__WEBPACK_IMPORTED_MODULE_4__.ITreeView, _all_impls_treeview__WEBPACK_IMPORTED_MODULE_6__.TreeView);
        container.registerInstance(_domain_presentation_IZindex__WEBPACK_IMPORTED_MODULE_5__.IZindex, new _all_impls_zindexImpl__WEBPACK_IMPORTED_MODULE_7__.ZIndexImpl());
        await (0,_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_0__.delayTillResolve)([_domain_infrastructure_IConfig__WEBPACK_IMPORTED_MODULE_1__.IConfig, _domain_infrastructure_ILogger__WEBPACK_IMPORTED_MODULE_2__.ILogger]);
        const config = container.resolve(_domain_infrastructure_IConfig__WEBPACK_IMPORTED_MODULE_1__.IConfig);
        const type = config.getPresentationLayer();
        switch (type) {
            case "html":
                container.register(_domain_presentation_IPresentation__WEBPACK_IMPORTED_MODULE_3__.IPresentation, (await __webpack_require__.e(/*! import() */ "src_presentation_html_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./html/index */ "./src/presentation/html/index.ts"))).HtmlPresentation);
                break;
            case "vue3":
                container.register(_domain_presentation_IPresentation__WEBPACK_IMPORTED_MODULE_3__.IPresentation, (await Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_v-tables-3_compiled_index_js-node_modules_vue-loader_dist_exportHelper_j-e8a45c"), __webpack_require__.e("src_presentation_vue3_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./vue3 */ "./src/presentation/vue3/index.ts"))).Vue3Presentation);
                break;
        }
    }
};


/***/ }),

/***/ "./src/settings/localization/en.ts":
/*!*****************************************!*\
  !*** ./src/settings/localization/en.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "langData": () => (/* binding */ langData)
/* harmony export */ });
const langData = {
    processDiagram: "Process Diagram",
    login_hailText: "Write your e-mail to select domain.",
    applicationListNameHeader: "Name",
    applicationListDescriptionHeader: "Description",
    applicationListcreatedByHeader: "CreatedBy",
    applicationListcreatedDateHeader: "CreatedDate",
    applicationListmodulesHeader: "Modules",
    applicationListpagesHeader: "Pages",
    applicationListtemplatesHeader: "Templates",
    applicationListactionsHeader: "Actions",
    exportName: 'Name',
    exportcreateDate: 'CreateDate',
    exportcreatedBy: 'CreatedBy',
    exportupdateDate: "UpdateDate",
    exportupdatedBy: "UpdatedBy",
    exportshortComment: "ShortComment",
    exportversion: "Version"
};


/***/ }),

/***/ "./src/settings/localization/tr.ts":
/*!*****************************************!*\
  !*** ./src/settings/localization/tr.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "langData": () => (/* binding */ langData)
/* harmony export */ });
const langData = {};


/***/ }),

/***/ "./node_modules/js-yaml/dist/js-yaml.mjs":
/*!***********************************************!*\
  !*** ./node_modules/js-yaml/dist/js-yaml.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CORE_SCHEMA": () => (/* binding */ CORE_SCHEMA),
/* harmony export */   "DEFAULT_SCHEMA": () => (/* binding */ DEFAULT_SCHEMA),
/* harmony export */   "FAILSAFE_SCHEMA": () => (/* binding */ FAILSAFE_SCHEMA),
/* harmony export */   "JSON_SCHEMA": () => (/* binding */ JSON_SCHEMA),
/* harmony export */   "Schema": () => (/* binding */ Schema),
/* harmony export */   "Type": () => (/* binding */ Type),
/* harmony export */   "YAMLException": () => (/* binding */ YAMLException),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dump": () => (/* binding */ dump),
/* harmony export */   "load": () => (/* binding */ load),
/* harmony export */   "loadAll": () => (/* binding */ loadAll),
/* harmony export */   "safeDump": () => (/* binding */ safeDump),
/* harmony export */   "safeLoad": () => (/* binding */ safeLoad),
/* harmony export */   "safeLoadAll": () => (/* binding */ safeLoadAll),
/* harmony export */   "types": () => (/* binding */ types)
/* harmony export */ });

/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function isNothing(subject) {
  return (typeof subject === 'undefined') || (subject === null);
}


function isObject(subject) {
  return (typeof subject === 'object') && (subject !== null);
}


function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];

  return [ sequence ];
}


function extend(target, source) {
  var index, length, key, sourceKeys;

  if (source) {
    sourceKeys = Object.keys(source);

    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }

  return target;
}


function repeat(string, count) {
  var result = '', cycle;

  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }

  return result;
}


function isNegativeZero(number) {
  return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
}


var isNothing_1      = isNothing;
var isObject_1       = isObject;
var toArray_1        = toArray;
var repeat_1         = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1         = extend;

var common = {
	isNothing: isNothing_1,
	isObject: isObject_1,
	toArray: toArray_1,
	repeat: repeat_1,
	isNegativeZero: isNegativeZero_1,
	extend: extend_1
};

// YAML error class. http://stackoverflow.com/questions/8458984


function formatError(exception, compact) {
  var where = '', message = exception.reason || '(unknown reason)';

  if (!exception.mark) return message;

  if (exception.mark.name) {
    where += 'in "' + exception.mark.name + '" ';
  }

  where += '(' + (exception.mark.line + 1) + ':' + (exception.mark.column + 1) + ')';

  if (!compact && exception.mark.snippet) {
    where += '\n\n' + exception.mark.snippet;
  }

  return message + ' ' + where;
}


function YAMLException$1(reason, mark) {
  // Super constructor
  Error.call(this);

  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);

  // Include stack trace in error object
  if (Error.captureStackTrace) {
    // Chrome and NodeJS
    Error.captureStackTrace(this, this.constructor);
  } else {
    // FF, IE 10+ and Safari 6+. Fallback for others
    this.stack = (new Error()).stack || '';
  }
}


// Inherit from Error
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;


YAMLException$1.prototype.toString = function toString(compact) {
  return this.name + ': ' + formatError(this, compact);
};


var exception = YAMLException$1;

// get snippet for a single line, respecting maxLength
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = '';
  var tail = '';
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;

  if (position - lineStart > maxHalfLength) {
    head = ' ... ';
    lineStart = position - maxHalfLength + head.length;
  }

  if (lineEnd - position > maxHalfLength) {
    tail = ' ...';
    lineEnd = position + maxHalfLength - tail.length;
  }

  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, '→') + tail,
    pos: position - lineStart + head.length // relative position
  };
}


function padStart(string, max) {
  return common.repeat(' ', max - string.length) + string;
}


function makeSnippet(mark, options) {
  options = Object.create(options || null);

  if (!mark.buffer) return null;

  if (!options.maxLength) options.maxLength = 79;
  if (typeof options.indent      !== 'number') options.indent      = 1;
  if (typeof options.linesBefore !== 'number') options.linesBefore = 3;
  if (typeof options.linesAfter  !== 'number') options.linesAfter  = 2;

  var re = /\r?\n|\r|\0/g;
  var lineStarts = [ 0 ];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;

  while ((match = re.exec(mark.buffer))) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);

    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }

  if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;

  var result = '', i, line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);

  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    );
    result = common.repeat(' ', options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n' + result;
  }

  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(' ', options.indent) + padStart((mark.line + 1).toString(), lineNoLength) +
    ' | ' + line.str + '\n';
  result += common.repeat('-', options.indent + lineNoLength + 3 + line.pos) + '^' + '\n';

  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    );
    result += common.repeat(' ', options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n';
  }

  return result.replace(/\n$/, '');
}


var snippet = makeSnippet;

var TYPE_CONSTRUCTOR_OPTIONS = [
  'kind',
  'multi',
  'resolve',
  'construct',
  'instanceOf',
  'predicate',
  'represent',
  'representName',
  'defaultStyle',
  'styleAliases'
];

var YAML_NODE_KINDS = [
  'scalar',
  'sequence',
  'mapping'
];

function compileStyleAliases(map) {
  var result = {};

  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }

  return result;
}

function Type$1(tag, options) {
  options = options || {};

  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });

  // TODO: Add tag format check.
  this.options       = options; // keep original options in case user wants to extend this type later
  this.tag           = tag;
  this.kind          = options['kind']          || null;
  this.resolve       = options['resolve']       || function () { return true; };
  this.construct     = options['construct']     || function (data) { return data; };
  this.instanceOf    = options['instanceOf']    || null;
  this.predicate     = options['predicate']     || null;
  this.represent     = options['represent']     || null;
  this.representName = options['representName'] || null;
  this.defaultStyle  = options['defaultStyle']  || null;
  this.multi         = options['multi']         || false;
  this.styleAliases  = compileStyleAliases(options['styleAliases'] || null);

  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}

var type = Type$1;

/*eslint-disable max-len*/





function compileList(schema, name) {
  var result = [];

  schema[name].forEach(function (currentType) {
    var newIndex = result.length;

    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag &&
          previousType.kind === currentType.kind &&
          previousType.multi === currentType.multi) {

        newIndex = previousIndex;
      }
    });

    result[newIndex] = currentType;
  });

  return result;
}


function compileMap(/* lists... */) {
  var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
          scalar: [],
          sequence: [],
          mapping: [],
          fallback: []
        }
      }, index, length;

  function collectType(type) {
    if (type.multi) {
      result.multi[type.kind].push(type);
      result.multi['fallback'].push(type);
    } else {
      result[type.kind][type.tag] = result['fallback'][type.tag] = type;
    }
  }

  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}


function Schema$1(definition) {
  return this.extend(definition);
}


Schema$1.prototype.extend = function extend(definition) {
  var implicit = [];
  var explicit = [];

  if (definition instanceof type) {
    // Schema.extend(type)
    explicit.push(definition);

  } else if (Array.isArray(definition)) {
    // Schema.extend([ type1, type2, ... ])
    explicit = explicit.concat(definition);

  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    // Schema.extend({ explicit: [ type1, type2, ... ], implicit: [ type1, type2, ... ] })
    if (definition.implicit) implicit = implicit.concat(definition.implicit);
    if (definition.explicit) explicit = explicit.concat(definition.explicit);

  } else {
    throw new exception('Schema.extend argument should be a Type, [ Type ], ' +
      'or a schema definition ({ implicit: [...], explicit: [...] })');
  }

  implicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }

    if (type$1.loadKind && type$1.loadKind !== 'scalar') {
      throw new exception('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }

    if (type$1.multi) {
      throw new exception('There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.');
    }
  });

  explicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }
  });

  var result = Object.create(Schema$1.prototype);

  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);

  result.compiledImplicit = compileList(result, 'implicit');
  result.compiledExplicit = compileList(result, 'explicit');
  result.compiledTypeMap  = compileMap(result.compiledImplicit, result.compiledExplicit);

  return result;
};


var schema = Schema$1;

var str = new type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function (data) { return data !== null ? data : ''; }
});

var seq = new type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function (data) { return data !== null ? data : []; }
});

var map = new type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function (data) { return data !== null ? data : {}; }
});

var failsafe = new schema({
  explicit: [
    str,
    seq,
    map
  ]
});

function resolveYamlNull(data) {
  if (data === null) return true;

  var max = data.length;

  return (max === 1 && data === '~') ||
         (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
}

function constructYamlNull() {
  return null;
}

function isNull(object) {
  return object === null;
}

var _null = new type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function () { return '~';    },
    lowercase: function () { return 'null'; },
    uppercase: function () { return 'NULL'; },
    camelcase: function () { return 'Null'; },
    empty:     function () { return '';     }
  },
  defaultStyle: 'lowercase'
});

function resolveYamlBoolean(data) {
  if (data === null) return false;

  var max = data.length;

  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
         (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
}

function constructYamlBoolean(data) {
  return data === 'true' ||
         data === 'True' ||
         data === 'TRUE';
}

function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

var bool = new type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function (object) { return object ? 'true' : 'false'; },
    uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
    camelcase: function (object) { return object ? 'True' : 'False'; }
  },
  defaultStyle: 'lowercase'
});

function isHexCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
         ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
         ((0x61/* a */ <= c) && (c <= 0x66/* f */));
}

function isOctCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
}

function isDecCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
}

function resolveYamlInteger(data) {
  if (data === null) return false;

  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;

  if (!max) return false;

  ch = data[index];

  // sign
  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    // 0
    if (index + 1 === max) return true;
    ch = data[++index];

    // base 2, base 8, base 16

    if (ch === 'b') {
      // base 2
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'x') {
      // base 16
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'o') {
      // base 8
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isOctCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }
  }

  // base 10 (except 0)

  // value should not start with `_`;
  if (ch === '_') return false;

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

  // Should have digits and should not end with `_`
  if (!hasDigits || ch === '_') return false;

  return true;
}

function constructYamlInteger(data) {
  var value = data, sign = 1, ch;

  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }

  ch = value[0];

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }

  if (value === '0') return 0;

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value.slice(2), 16);
    if (value[1] === 'o') return sign * parseInt(value.slice(2), 8);
  }

  return sign * parseInt(value, 10);
}

function isInteger(object) {
  return (Object.prototype.toString.call(object)) === '[object Number]' &&
         (object % 1 === 0 && !common.isNegativeZero(object));
}

var int = new type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary:      function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
    octal:       function (obj) { return obj >= 0 ? '0o'  + obj.toString(8) : '-0o'  + obj.toString(8).slice(1); },
    decimal:     function (obj) { return obj.toString(10); },
    /* eslint-disable max-len */
    hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() :  '-0x' + obj.toString(16).toUpperCase().slice(1); }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary:      [ 2,  'bin' ],
    octal:       [ 8,  'oct' ],
    decimal:     [ 10, 'dec' ],
    hexadecimal: [ 16, 'hex' ]
  }
});

var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  '^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
  // .2e4, .2
  // special case, seems not from spec
  '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
  // .inf
  '|[-+]?\\.(?:inf|Inf|INF)' +
  // .nan
  '|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data) ||
      // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === '_') {
    return false;
  }

  return true;
}

function constructYamlFloat(data) {
  var value, sign;

  value  = data.replace(/_/g, '').toLowerCase();
  sign   = value[0] === '-' ? -1 : 1;

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }

  if (value === '.inf') {
    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

  } else if (value === '.nan') {
    return NaN;
  }
  return sign * parseFloat(value, 10);
}


var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

function representYamlFloat(object, style) {
  var res;

  if (isNaN(object)) {
    switch (style) {
      case 'lowercase': return '.nan';
      case 'uppercase': return '.NAN';
      case 'camelcase': return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '.inf';
      case 'uppercase': return '.INF';
      case 'camelcase': return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '-.inf';
      case 'uppercase': return '-.INF';
      case 'camelcase': return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }

  res = object.toString(10);

  // JS stringifier can build scientific format without dots: 5e-100,
  // while YAML requres dot: 5.e-100. Fix it with simple hack

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return (Object.prototype.toString.call(object) === '[object Number]') &&
         (object % 1 !== 0 || common.isNegativeZero(object));
}

var float = new type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});

var json = failsafe.extend({
  implicit: [
    _null,
    bool,
    int,
    float
  ]
});

var core = json;

var YAML_DATE_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9])'                    + // [2] month
  '-([0-9][0-9])$');                   // [3] day

var YAML_TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9]?)'                   + // [2] month
  '-([0-9][0-9]?)'                   + // [3] day
  '(?:[Tt]|[ \\t]+)'                 + // ...
  '([0-9][0-9]?)'                    + // [4] hour
  ':([0-9][0-9])'                    + // [5] minute
  ':([0-9][0-9])'                    + // [6] second
  '(?:\\.([0-9]*))?'                 + // [7] fraction
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
  '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}

function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0,
      delta = null, tz_hour, tz_minute, date;

  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

  if (match === null) throw new Error('Date resolve error');

  // match: [1] year [2] month [3] day

  year = +(match[1]);
  month = +(match[2]) - 1; // JS month starts with 0
  day = +(match[3]);

  if (!match[4]) { // no hour
    return new Date(Date.UTC(year, month, day));
  }

  // match: [4] hour [5] minute [6] second [7] fraction

  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);

  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) { // milli-seconds
      fraction += '0';
    }
    fraction = +fraction;
  }

  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

  if (match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (delta) date.setTime(date.getTime() - delta);

  return date;
}

function representYamlTimestamp(object /*, style*/) {
  return object.toISOString();
}

var timestamp = new type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

var merge = new type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});

/*eslint-disable no-bitwise*/





// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


function resolveYamlBinary(data) {
  if (data === null) return false;

  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

  // Convert one by one.
  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    // Skip CR/LF
    if (code > 64) continue;

    // Fail on illegal characters
    if (code < 0) return false;

    bitlen += 6;
  }

  // If there are any bits left, source was corrupted
  return (bitlen % 8) === 0;
}

function constructYamlBinary(data) {
  var idx, tailbits,
      input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
      max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = [];

  // Collect by 6*4 bits (3 bytes)

  for (idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = (bits << 6) | map.indexOf(input.charAt(idx));
  }

  // Dump tail

  tailbits = (max % 4) * 6;

  if (tailbits === 0) {
    result.push((bits >> 16) & 0xFF);
    result.push((bits >> 8) & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push((bits >> 10) & 0xFF);
    result.push((bits >> 2) & 0xFF);
  } else if (tailbits === 12) {
    result.push((bits >> 4) & 0xFF);
  }

  return new Uint8Array(result);
}

function representYamlBinary(object /*, style*/) {
  var result = '', bits = 0, idx, tail,
      max = object.length,
      map = BASE64_MAP;

  // Convert every three bytes to 4 ASCII characters.

  for (idx = 0; idx < max; idx++) {
    if ((idx % 3 === 0) && idx) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  }

  // Dump tail

  tail = max % 3;

  if (tail === 0) {
    result += map[(bits >> 18) & 0x3F];
    result += map[(bits >> 12) & 0x3F];
    result += map[(bits >> 6) & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[(bits >> 10) & 0x3F];
    result += map[(bits >> 4) & 0x3F];
    result += map[(bits << 2) & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[(bits >> 2) & 0x3F];
    result += map[(bits << 4) & 0x3F];
    result += map[64];
    result += map[64];
  }

  return result;
}

function isBinary(obj) {
  return Object.prototype.toString.call(obj) ===  '[object Uint8Array]';
}

var binary = new type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});

var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2       = Object.prototype.toString;

function resolveYamlOmap(data) {
  if (data === null) return true;

  var objectKeys = [], index, length, pair, pairKey, pairHasKey,
      object = data;

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;

    if (_toString$2.call(pair) !== '[object Object]') return false;

    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }

    if (!pairHasKey) return false;

    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }

  return true;
}

function constructYamlOmap(data) {
  return data !== null ? data : [];
}

var omap = new type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});

var _toString$1 = Object.prototype.toString;

function resolveYamlPairs(data) {
  if (data === null) return true;

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    if (_toString$1.call(pair) !== '[object Object]') return false;

    keys = Object.keys(pair);

    if (keys.length !== 1) return false;

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return true;
}

function constructYamlPairs(data) {
  if (data === null) return [];

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    keys = Object.keys(pair);

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return result;
}

var pairs = new type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});

var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  if (data === null) return true;

  var key, object = data;

  for (key in object) {
    if (_hasOwnProperty$2.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }

  return true;
}

function constructYamlSet(data) {
  return data !== null ? data : {};
}

var set = new type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});

var _default = core.extend({
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});

/*eslint-disable max-len,no-use-before-define*/







var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;


var CONTEXT_FLOW_IN   = 1;
var CONTEXT_FLOW_OUT  = 2;
var CONTEXT_BLOCK_IN  = 3;
var CONTEXT_BLOCK_OUT = 4;


var CHOMPING_CLIP  = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP  = 3;


var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


function _class(obj) { return Object.prototype.toString.call(obj); }

function is_EOL(c) {
  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
}

function is_WHITE_SPACE(c) {
  return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
}

function is_WS_OR_EOL(c) {
  return (c === 0x09/* Tab */) ||
         (c === 0x20/* Space */) ||
         (c === 0x0A/* LF */) ||
         (c === 0x0D/* CR */);
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C/* , */ ||
         c === 0x5B/* [ */ ||
         c === 0x5D/* ] */ ||
         c === 0x7B/* { */ ||
         c === 0x7D/* } */;
}

function fromHexCode(c) {
  var lc;

  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  /*eslint-disable no-bitwise*/
  lc = c | 0x20;

  if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78/* x */) { return 2; }
  if (c === 0x75/* u */) { return 4; }
  if (c === 0x55/* U */) { return 8; }
  return 0;
}

function fromDecimalCode(c) {
  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  /* eslint-disable indent */
  return (c === 0x30/* 0 */) ? '\x00' :
        (c === 0x61/* a */) ? '\x07' :
        (c === 0x62/* b */) ? '\x08' :
        (c === 0x74/* t */) ? '\x09' :
        (c === 0x09/* Tab */) ? '\x09' :
        (c === 0x6E/* n */) ? '\x0A' :
        (c === 0x76/* v */) ? '\x0B' :
        (c === 0x66/* f */) ? '\x0C' :
        (c === 0x72/* r */) ? '\x0D' :
        (c === 0x65/* e */) ? '\x1B' :
        (c === 0x20/* Space */) ? ' ' :
        (c === 0x22/* " */) ? '\x22' :
        (c === 0x2F/* / */) ? '/' :
        (c === 0x5C/* \ */) ? '\x5C' :
        (c === 0x4E/* N */) ? '\x85' :
        (c === 0x5F/* _ */) ? '\xA0' :
        (c === 0x4C/* L */) ? '\u2028' :
        (c === 0x50/* P */) ? '\u2029' : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }
  // Encode UTF-16 surrogate pair
  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
  return String.fromCharCode(
    ((c - 0x010000) >> 10) + 0xD800,
    ((c - 0x010000) & 0x03FF) + 0xDC00
  );
}

var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}


function State$1(input, options) {
  this.input = input;

  this.filename  = options['filename']  || null;
  this.schema    = options['schema']    || _default;
  this.onWarning = options['onWarning'] || null;
  // (Hidden) Remove? makes the loader to expect YAML 1.1 documents
  // if such documents have no explicit %YAML directive
  this.legacy    = options['legacy']    || false;

  this.json      = options['json']      || false;
  this.listener  = options['listener']  || null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap       = this.schema.compiledTypeMap;

  this.length     = input.length;
  this.position   = 0;
  this.line       = 0;
  this.lineStart  = 0;
  this.lineIndent = 0;

  // position of first leading tab in the current line,
  // used to make sure there are no tabs in the indentation
  this.firstTabInLine = -1;

  this.documents = [];

  /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/

}


function generateError(state, message) {
  var mark = {
    name:     state.filename,
    buffer:   state.input.slice(0, -1), // omit trailing \0
    position: state.position,
    line:     state.line,
    column:   state.position - state.lineStart
  };

  mark.snippet = snippet(mark);

  return new exception(message, mark);
}

function throwError(state, message) {
  throw generateError(state, message);
}

function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}


var directiveHandlers = {

  YAML: function handleYamlDirective(state, name, args) {

    var match, major, minor;

    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }

    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }

    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }

    state.version = args[0];
    state.checkLineBreaks = (minor < 2);

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },

  TAG: function handleTagDirective(state, name, args) {

    var handle, prefix;

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }

    handle = args[0];
    prefix = args[1];

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }

    if (_hasOwnProperty$1.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }

    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state, 'tag prefix is malformed: ' + prefix);
    }

    state.tagMap[handle] = prefix;
  }
};


function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;

  if (start < end) {
    _result = state.input.slice(start, end);

    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 0x09 ||
              (0x20 <= _character && _character <= 0x10FFFF))) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }

    state.result += _result;
  }
}

function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;

  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }

  sourceKeys = Object.keys(source);

  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];

    if (!_hasOwnProperty$1.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode,
  startLine, startLineStart, startPos) {

  var index, quantity;

  // The output is a plain object here, so keys can only be strings.
  // We need to convert keyNode to a string, but doing so can hang the process
  // (deeply nested arrays that explode exponentially using aliases).
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);

    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, 'nested arrays are not supported inside keys');
      }

      if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
        keyNode[index] = '[object Object]';
      }
    }
  }

  // Avoid code execution in load() via toString property
  // (still use its own toString for arrays, timestamps,
  // and whatever user schema extensions happen to have @@toStringTag)
  if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
    keyNode = '[object Object]';
  }


  keyNode = String(keyNode);

  if (_result === null) {
    _result = {};
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json &&
        !_hasOwnProperty$1.call(overridableKeys, keyNode) &&
        _hasOwnProperty$1.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError(state, 'duplicated mapping key');
    }

    // used for this specific key only because Object.defineProperty is slow
    if (keyNode === '__proto__') {
      Object.defineProperty(_result, keyNode, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: valueNode
      });
    } else {
      _result[keyNode] = valueNode;
    }
    delete overridableKeys[keyNode];
  }

  return _result;
}

function readLineBreak(state) {
  var ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x0A/* LF */) {
    state.position++;
  } else if (ch === 0x0D/* CR */) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
      state.position++;
    }
  } else {
    throwError(state, 'a line break is expected');
  }

  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 0x09/* Tab */ && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23/* # */) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
    }

    if (is_EOL(ch)) {
      readLineBreak(state);

      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20/* Space */) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }

  return lineBreaks;
}

function testDocumentSeparator(state) {
  var _position = state.position,
      ch;

  ch = state.input.charCodeAt(_position);

  // Condition state.position === state.lineStart is tested
  // in parent on each call, for efficiency. No needs to test here again.
  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
      ch === state.input.charCodeAt(_position + 1) &&
      ch === state.input.charCodeAt(_position + 2)) {

    _position += 3;

    ch = state.input.charCodeAt(_position);

    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }

  return false;
}

function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}


function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (is_WS_OR_EOL(ch)      ||
      is_FLOW_INDICATOR(ch) ||
      ch === 0x23/* # */    ||
      ch === 0x26/* & */    ||
      ch === 0x2A/* * */    ||
      ch === 0x21/* ! */    ||
      ch === 0x7C/* | */    ||
      ch === 0x3E/* > */    ||
      ch === 0x27/* ' */    ||
      ch === 0x22/* " */    ||
      ch === 0x25/* % */    ||
      ch === 0x40/* @ */    ||
      ch === 0x60/* ` */) {
    return false;
  }

  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
    following = state.input.charCodeAt(state.position + 1);

    if (is_WS_OR_EOL(following) ||
        withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }

  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;

  while (ch !== 0) {
    if (ch === 0x3A/* : */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) ||
          withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }

    } else if (ch === 0x23/* # */) {
      preceding = state.input.charCodeAt(state.position - 1);

      if (is_WS_OR_EOL(preceding)) {
        break;
      }

    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
               withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;

    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }

    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }

    ch = state.input.charCodeAt(++state.position);
  }

  captureSegment(state, captureStart, captureEnd, false);

  if (state.result) {
    return true;
  }

  state.kind = _kind;
  state.result = _result;
  return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
  var ch,
      captureStart, captureEnd;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x27/* ' */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27/* ' */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x27/* ' */) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart,
      captureEnd,
      hexLength,
      hexResult,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x22/* " */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22/* " */) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;

    } else if (ch === 0x5C/* \ */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);

        // TODO: rework to inline fn with no type cast?
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;

      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;

        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);

          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;

          } else {
            throwError(state, 'expected hexadecimal character');
          }
        }

        state.result += charFromCodepoint(hexResult);

        state.position++;

      } else {
        throwError(state, 'unknown escape sequence');
      }

      captureStart = captureEnd = state.position;

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _lineStart,
      _pos,
      _tag     = state.tag,
      _result,
      _anchor  = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      overridableKeys = Object.create(null),
      keyNode,
      keyTag,
      valueNode,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x5B/* [ */) {
    terminator = 0x5D;/* ] */
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B/* { */) {
    terminator = 0x7D;/* } */
    isMapping = true;
    _result = {};
  } else {
    return false;
  }

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(++state.position);

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    } else if (ch === 0x2C/* , */) {
      // "flow collection entries can never be completely empty", as per YAML 1.2, section 7.4
      throwError(state, "expected the node content, but found ','");
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F/* ? */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }

    _line = state.line; // Save the current line.
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }

    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x2C/* , */) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping       = CHOMPING_CLIP,
      didReadContent = false,
      detectedIndent = false,
      textIndent     = nodeIndent,
      emptyLines     = 0,
      atMoreIndented = false,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x7C/* | */) {
    folding = false;
  } else if (ch === 0x3E/* > */) {
    folding = true;
  } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, 'repeat of a chomping mode identifier');
      }

    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }

    } else {
      break;
    }
  }

  if (is_WHITE_SPACE(ch)) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (is_WHITE_SPACE(ch));

    if (ch === 0x23/* # */) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (!is_EOL(ch) && (ch !== 0));
    }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;

    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) &&
           (ch === 0x20/* Space */)) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }

    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }

    // End of the scalar.
    if (state.lineIndent < textIndent) {

      // Perform the chomping.
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) { // i.e. only if the scalar is not empty.
          state.result += '\n';
        }
      }

      // Break this `while` cycle and go to the funciton's epilogue.
      break;
    }

    // Folded style: use fancy rules to handle line breaks.
    if (folding) {

      // Lines starting with white space characters (more-indented lines) are not folded.
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        // except for the first content line (cf. Example 8.1)
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

      // End of more-indented block.
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);

      // Just one line break - perceive as the same line.
      } else if (emptyLines === 0) {
        if (didReadContent) { // i.e. only if we have already read some scalar content.
          state.result += ' ';
        }

      // Several line breaks - perceive as different lines.
      } else {
        state.result += common.repeat('\n', emptyLines);
      }

    // Literal style: just add exact number of line breaks between content lines.
    } else {
      // Keep all line breaks except the header line break.
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
    }

    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;

    while (!is_EOL(ch) && (ch !== 0)) {
      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, state.position, false);
  }

  return true;
}

function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag      = state.tag,
      _anchor   = state.anchor,
      _result   = [],
      following,
      detected  = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    if (ch !== 0x2D/* - */) {
      break;
    }

    following = state.input.charCodeAt(state.position + 1);

    if (!is_WS_OR_EOL(following)) {
      break;
    }

    detected = true;
    state.position++;

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }
  return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _keyLine,
      _keyLineStart,
      _keyPos,
      _tag          = state.tag,
      _anchor       = state.anchor,
      _result       = {},
      overridableKeys = Object.create(null),
      keyTag        = null,
      keyNode       = null,
      valueNode     = null,
      atExplicitKey = false,
      detected      = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    following = state.input.charCodeAt(state.position + 1);
    _line = state.line; // Save the current line.

    //
    // Explicit notation case. There are two separate blocks:
    // first for the key (denoted by "?") and second for the value (denoted by ":")
    //
    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

      if (ch === 0x3F/* ? */) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }

        detected = true;
        atExplicitKey = true;
        allowCompact = true;

      } else if (atExplicitKey) {
        // i.e. 0x3A/* : */ === character after the explicit key.
        atExplicitKey = false;
        allowCompact = true;

      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
      }

      state.position += 1;
      ch = following;

    //
    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
    //
    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;

      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        // Neither implicit nor explicit notation.
        // Reading is done. Go to the epilogue.
        break;
      }

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A/* : */) {
          ch = state.input.charCodeAt(++state.position);

          if (!is_WS_OR_EOL(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
          }

          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;

        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');

        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true; // Keep the result of `composeNode`.
        }

      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true; // Keep the result of `composeNode`.
      }
    }

    //
    // Common reading code for both explicit and implicit notations.
    //
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }

      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }

      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  //
  // Epilogue.
  //

  // Special case: last mapping's node contains only the key in explicit notation.
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }

  // Expose the resulting mapping.
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }

  return detected;
}

function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed    = false,
      tagHandle,
      tagName,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x21/* ! */) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C/* < */) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);

  } else if (ch === 0x21/* ! */) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);

  } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (ch !== 0 && ch !== 0x3E/* > */);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

      if (ch === 0x21/* ! */) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);

          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters');
          }

          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks');
        }
      }

      ch = state.input.charCodeAt(++state.position);
    }

    tagName = state.input.slice(_position, state.position);

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }

  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state, 'tag name is malformed: ' + tagName);
  }

  if (isVerbatim) {
    state.tag = tagName;

  } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;

  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;

  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;

  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }

  return true;
}

function readAnchorProperty(state) {
  var _position,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x26/* & */) return false;

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }

  state.anchor = state.input.slice(_position, state.position);
  return true;
}

function readAlias(state) {
  var _position, alias,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x2A/* * */) return false;

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }

  alias = state.input.slice(_position, state.position);

  if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }

  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
      atNewLine  = false,
      hasContent = false,
      typeIndex,
      typeQuantity,
      typeList,
      type,
      flowIndent,
      blockIndent;

  if (state.listener !== null) {
    state.listener('open', state);
  }

  state.tag    = null;
  state.anchor = null;
  state.kind   = null;
  state.result = null;

  allowBlockStyles = allowBlockScalars = allowBlockCollections =
    CONTEXT_BLOCK_OUT === nodeContext ||
    CONTEXT_BLOCK_IN  === nodeContext;

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;

      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }

  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }

    blockIndent = state.position - state.lineStart;

    if (indentStatus === 1) {
      if (allowBlockCollections &&
          (readBlockSequence(state, blockIndent) ||
           readBlockMapping(state, blockIndent, flowIndent)) ||
          readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
            readSingleQuotedScalar(state, flowIndent) ||
            readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;

        } else if (readAlias(state)) {
          hasContent = true;

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }

        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;

          if (state.tag === null) {
            state.tag = '?';
          }
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      // Special case: block sequences are allowed to have same indentation level as the parent.
      // http://www.yaml.org/spec/1.2/spec.html#id2799784
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }

  } else if (state.tag === '?') {
    // Implicit resolving is not allowed for non-scalar types, and '?'
    // non-specific tag is only automatically assigned to plain scalars.
    //
    // We only need to check kind conformity in case user explicitly assigns '?'
    // tag, for example like this: "!<?> [0]"
    //
    if (state.result !== null && state.kind !== 'scalar') {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }

    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type = state.implicitTypes[typeIndex];

      if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
        state.result = type.construct(state.result);
        state.tag = type.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== '!') {
    if (_hasOwnProperty$1.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
      type = state.typeMap[state.kind || 'fallback'][state.tag];
    } else {
      // looking for multi type
      type = null;
      typeList = state.typeMap.multi[state.kind || 'fallback'];

      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type = typeList[typeIndex];
          break;
        }
      }
    }

    if (!type) {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }

    if (state.result !== null && type.kind !== state.kind) {
      throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
    }

    if (!type.resolve(state.result, state.tag)) { // `state.result` updated in resolver if matched
      throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
    } else {
      state.result = type.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }

  if (state.listener !== null) {
    state.listener('close', state);
  }
  return state.tag !== null ||  state.anchor !== null || hasContent;
}

function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;

  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = Object.create(null);
  state.anchorMap = Object.create(null);

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
      break;
    }

    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (ch === 0x23/* # */) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (ch !== 0 && !is_EOL(ch));
        break;
      }

      if (is_EOL(ch)) break;

      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveArgs.push(state.input.slice(_position, state.position));
    }

    if (ch !== 0) readLineBreak(state);

    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }

  skipSeparationSpace(state, true, -1);

  if (state.lineIndent === 0 &&
      state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);

  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);

  if (state.checkLineBreaks &&
      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }

  state.documents.push(state.result);

  if (state.position === state.lineStart && testDocumentSeparator(state)) {

    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }

  if (state.position < (state.length - 1)) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}


function loadDocuments(input, options) {
  input = String(input);
  options = options || {};

  if (input.length !== 0) {

    // Add tailing `\n` if not exists
    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
      input += '\n';
    }

    // Strip BOM
    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }

  var state = new State$1(input, options);

  var nullpos = input.indexOf('\0');

  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, 'null byte is not allowed in input');
  }

  // Use 0 as string terminator. That significantly simplifies bounds check.
  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
    state.lineIndent += 1;
    state.position += 1;
  }

  while (state.position < (state.length - 1)) {
    readDocument(state);
  }

  return state.documents;
}


function loadAll$1(input, iterator, options) {
  if (iterator !== null && typeof iterator === 'object' && typeof options === 'undefined') {
    options = iterator;
    iterator = null;
  }

  var documents = loadDocuments(input, options);

  if (typeof iterator !== 'function') {
    return documents;
  }

  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}


function load$1(input, options) {
  var documents = loadDocuments(input, options);

  if (documents.length === 0) {
    /*eslint-disable no-undefined*/
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception('expected a single document in the stream, but found more');
}


var loadAll_1 = loadAll$1;
var load_1    = load$1;

var loader = {
	loadAll: loadAll_1,
	load: load_1
};

/*eslint-disable no-use-before-define*/





var _toString       = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;

var CHAR_BOM                  = 0xFEFF;
var CHAR_TAB                  = 0x09; /* Tab */
var CHAR_LINE_FEED            = 0x0A; /* LF */
var CHAR_CARRIAGE_RETURN      = 0x0D; /* CR */
var CHAR_SPACE                = 0x20; /* Space */
var CHAR_EXCLAMATION          = 0x21; /* ! */
var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
var CHAR_SHARP                = 0x23; /* # */
var CHAR_PERCENT              = 0x25; /* % */
var CHAR_AMPERSAND            = 0x26; /* & */
var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
var CHAR_ASTERISK             = 0x2A; /* * */
var CHAR_COMMA                = 0x2C; /* , */
var CHAR_MINUS                = 0x2D; /* - */
var CHAR_COLON                = 0x3A; /* : */
var CHAR_EQUALS               = 0x3D; /* = */
var CHAR_GREATER_THAN         = 0x3E; /* > */
var CHAR_QUESTION             = 0x3F; /* ? */
var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
var CHAR_VERTICAL_LINE        = 0x7C; /* | */
var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

var ESCAPE_SEQUENCES = {};

ESCAPE_SEQUENCES[0x00]   = '\\0';
ESCAPE_SEQUENCES[0x07]   = '\\a';
ESCAPE_SEQUENCES[0x08]   = '\\b';
ESCAPE_SEQUENCES[0x09]   = '\\t';
ESCAPE_SEQUENCES[0x0A]   = '\\n';
ESCAPE_SEQUENCES[0x0B]   = '\\v';
ESCAPE_SEQUENCES[0x0C]   = '\\f';
ESCAPE_SEQUENCES[0x0D]   = '\\r';
ESCAPE_SEQUENCES[0x1B]   = '\\e';
ESCAPE_SEQUENCES[0x22]   = '\\"';
ESCAPE_SEQUENCES[0x5C]   = '\\\\';
ESCAPE_SEQUENCES[0x85]   = '\\N';
ESCAPE_SEQUENCES[0xA0]   = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';

var DEPRECATED_BOOLEANS_SYNTAX = [
  'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
  'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
];

var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;

function compileStyleMap(schema, map) {
  var result, keys, index, length, tag, style, type;

  if (map === null) return {};

  result = {};
  keys = Object.keys(map);

  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);

    if (tag.slice(0, 2) === '!!') {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }
    type = schema.compiledTypeMap['fallback'][tag];

    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }

    result[tag] = style;
  }

  return result;
}

function encodeHex(character) {
  var string, handle, length;

  string = character.toString(16).toUpperCase();

  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new exception('code point within a string may not be greater than 0xFFFFFFFF');
  }

  return '\\' + handle + common.repeat('0', length - string.length) + string;
}


var QUOTING_TYPE_SINGLE = 1,
    QUOTING_TYPE_DOUBLE = 2;

function State(options) {
  this.schema        = options['schema'] || _default;
  this.indent        = Math.max(1, (options['indent'] || 2));
  this.noArrayIndent = options['noArrayIndent'] || false;
  this.skipInvalid   = options['skipInvalid'] || false;
  this.flowLevel     = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
  this.styleMap      = compileStyleMap(this.schema, options['styles'] || null);
  this.sortKeys      = options['sortKeys'] || false;
  this.lineWidth     = options['lineWidth'] || 80;
  this.noRefs        = options['noRefs'] || false;
  this.noCompatMode  = options['noCompatMode'] || false;
  this.condenseFlow  = options['condenseFlow'] || false;
  this.quotingType   = options['quotingType'] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
  this.forceQuotes   = options['forceQuotes'] || false;
  this.replacer      = typeof options['replacer'] === 'function' ? options['replacer'] : null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;

  this.tag = null;
  this.result = '';

  this.duplicates = [];
  this.usedDuplicates = null;
}

// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
  var ind = common.repeat(' ', spaces),
      position = 0,
      next = -1,
      result = '',
      line,
      length = string.length;

  while (position < length) {
    next = string.indexOf('\n', position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }

    if (line.length && line !== '\n') result += ind;

    result += line;
  }

  return result;
}

function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}

function testImplicitResolving(state, str) {
  var index, length, type;

  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];

    if (type.resolve(str)) {
      return true;
    }
  }

  return false;
}

// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}

// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
  return  (0x00020 <= c && c <= 0x00007E)
      || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
      || ((0x0E000 <= c && c <= 0x00FFFD) && c !== CHAR_BOM)
      ||  (0x10000 <= c && c <= 0x10FFFF);
}

// [34] ns-char ::= nb-char - s-white
// [27] nb-char ::= c-printable - b-char - c-byte-order-mark
// [26] b-char  ::= b-line-feed | b-carriage-return
// Including s-white (for some reason, examples doesn't match specs in this aspect)
// ns-char ::= c-printable - b-line-feed - b-carriage-return - c-byte-order-mark
function isNsCharOrWhitespace(c) {
  return isPrintable(c)
    && c !== CHAR_BOM
    // - b-char
    && c !== CHAR_CARRIAGE_RETURN
    && c !== CHAR_LINE_FEED;
}

// [127]  ns-plain-safe(c) ::= c = flow-out  ⇒ ns-plain-safe-out
//                             c = flow-in   ⇒ ns-plain-safe-in
//                             c = block-key ⇒ ns-plain-safe-out
//                             c = flow-key  ⇒ ns-plain-safe-in
// [128] ns-plain-safe-out ::= ns-char
// [129]  ns-plain-safe-in ::= ns-char - c-flow-indicator
// [130]  ns-plain-char(c) ::=  ( ns-plain-safe(c) - “:” - “#” )
//                            | ( /* An ns-char preceding */ “#” )
//                            | ( “:” /* Followed by an ns-plain-safe(c) */ )
function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
  return (
    // ns-plain-safe
    inblock ? // c = flow-in
      cIsNsCharOrWhitespace
      : cIsNsCharOrWhitespace
        // - c-flow-indicator
        && c !== CHAR_COMMA
        && c !== CHAR_LEFT_SQUARE_BRACKET
        && c !== CHAR_RIGHT_SQUARE_BRACKET
        && c !== CHAR_LEFT_CURLY_BRACKET
        && c !== CHAR_RIGHT_CURLY_BRACKET
  )
    // ns-plain-char
    && c !== CHAR_SHARP // false on '#'
    && !(prev === CHAR_COLON && !cIsNsChar) // false on ': '
    || (isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP) // change to true on '[^ ]#'
    || (prev === CHAR_COLON && cIsNsChar); // change to true on ':[^ ]'
}

// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
  // Uses a subset of ns-char - c-indicator
  // where ns-char = nb-char - s-white.
  // No support of ( ( “?” | “:” | “-” ) /* Followed by an ns-plain-safe(c)) */ ) part
  return isPrintable(c) && c !== CHAR_BOM
    && !isWhitespace(c) // - s-white
    // - (c-indicator ::=
    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
    && c !== CHAR_MINUS
    && c !== CHAR_QUESTION
    && c !== CHAR_COLON
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // | “#” | “&” | “*” | “!” | “|” | “=” | “>” | “'” | “"”
    && c !== CHAR_SHARP
    && c !== CHAR_AMPERSAND
    && c !== CHAR_ASTERISK
    && c !== CHAR_EXCLAMATION
    && c !== CHAR_VERTICAL_LINE
    && c !== CHAR_EQUALS
    && c !== CHAR_GREATER_THAN
    && c !== CHAR_SINGLE_QUOTE
    && c !== CHAR_DOUBLE_QUOTE
    // | “%” | “@” | “`”)
    && c !== CHAR_PERCENT
    && c !== CHAR_COMMERCIAL_AT
    && c !== CHAR_GRAVE_ACCENT;
}

// Simplified test for values allowed as the last character in plain style.
function isPlainSafeLast(c) {
  // just not whitespace or colon, it will be checked to be plain character later
  return !isWhitespace(c) && c !== CHAR_COLON;
}

// Same as 'string'.codePointAt(pos), but works in older browsers.
function codePointAt(string, pos) {
  var first = string.charCodeAt(pos), second;
  if (first >= 0xD800 && first <= 0xDBFF && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 0xDC00 && second <= 0xDFFF) {
      // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }
  return first;
}

// Determines whether block indentation indicator is required.
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}

var STYLE_PLAIN   = 1,
    STYLE_SINGLE  = 2,
    STYLE_LITERAL = 3,
    STYLE_FOLDED  = 4,
    STYLE_DOUBLE  = 5;

// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth,
  testAmbiguousType, quotingType, forceQuotes, inblock) {

  var i;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false; // only checked if shouldTrackWidth
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1; // count the first line correctly
  var plain = isPlainSafeFirst(codePointAt(string, 0))
          && isPlainSafeLast(codePointAt(string, string.length - 1));

  if (singleLineOnly || forceQuotes) {
    // Case: no block styles.
    // Check for disallowed characters to rule out plain and single.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    // Case: block styles permitted.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        // Check if any line can be folded.
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine ||
            // Foldable line = too long, and not more-indented.
            (i - previousLineBreak - 1 > lineWidth &&
             string[previousLineBreak + 1] !== ' ');
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
    // in case the end is missing a \n
    hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
      (i - previousLineBreak - 1 > lineWidth &&
       string[previousLineBreak + 1] !== ' '));
  }
  // Although every style can represent \n without escaping, prefer block styles
  // for multiline, since they're more readable and they don't add empty lines.
  // Also prefer folding a super-long line.
  if (!hasLineBreak && !hasFoldableLine) {
    // Strings interpretable as another type have to be quoted;
    // e.g. the string 'true' vs. the boolean true.
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  // Edge case: block indentation indicator can only have one digit.
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  // At this point we know block styles are valid.
  // Prefer literal style unless we want to fold.
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}

// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey, inblock) {
  state.dump = (function () {
    if (string.length === 0) {
      return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
    }
    if (!state.noCompatMode) {
      if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? ('"' + string + '"') : ("'" + string + "'");
      }
    }

    var indent = state.indent * Math.max(1, level); // no 0-indent scalars
    // As indentation gets deeper, let the width decrease monotonically
    // to the lower bound min(state.lineWidth, 40).
    // Note that this implies
    //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
    //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
    // This behaves better than a constant minimum width which disallows narrower options,
    // or an indent threshold which causes the width to suddenly increase.
    var lineWidth = state.lineWidth === -1
      ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

    // Without knowing if keys are implicit/explicit, assume implicit for safety.
    var singleLineOnly = iskey
      // No block styles in flow mode.
      || (state.flowLevel > -1 && level >= state.flowLevel);
    function testAmbiguity(string) {
      return testImplicitResolving(state, string);
    }

    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth,
      testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)) {

      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return '|' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return '>' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string) + '"';
      default:
        throw new exception('impossible error: invalid scalar style');
    }
  }());
}

// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

  // note the special case: the string '\n' counts as a "trailing" empty line.
  var clip =          string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : (clip ? '' : '-');

  return indentIndicator + chomp + '\n';
}

// (See the note for writeScalar.)
function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
  // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
  // unless they're before or after a more-indented line, or at the very
  // beginning or end, in which case $k$ maps to $k$.
  // Therefore, parse each chunk as newline(s) followed by a content line.
  var lineRe = /(\n+)([^\n]*)/g;

  // first line (possibly an empty line)
  var result = (function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }());
  // If we haven't reached the first content line yet, don't add an extra \n.
  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented;

  // rest of the lines
  var match;
  while ((match = lineRe.exec(string))) {
    var prefix = match[1], line = match[2];
    moreIndented = (line[0] === ' ');
    result += prefix
      + (!prevMoreIndented && !moreIndented && line !== ''
        ? '\n' : '')
      + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }

  return result;
}

// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line;

  // Since a more-indented line adds a \n, breaks can't be followed by a space.
  var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
  var match;
  // start is an inclusive index. end, curr, and next are exclusive.
  var start = 0, end, curr = 0, next = 0;
  var result = '';

  // Invariants: 0 <= start <= length-1.
  //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
  // Inside the loop:
  //   A match implies length >= 2, so curr and next are <= length-2.
  while ((match = breakRe.exec(line))) {
    next = match.index;
    // maintain invariant: curr - start <= width
    if (next - start > width) {
      end = (curr > start) ? curr : next; // derive end <= length-2
      result += '\n' + line.slice(start, end);
      // skip the space that was output as \n
      start = end + 1;                    // derive start <= length-1
    }
    curr = next;
  }

  // By the invariants, start <= length-1, so there is something left over.
  // It is either the whole string or a part starting from non-whitespace.
  result += '\n';
  // Insert a break if the remainder is too long and there is a break available.
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }

  return result.slice(1); // drop extra \n joiner
}

// Escapes a double-quoted string.
function escapeString(string) {
  var result = '';
  var char = 0;
  var escapeSeq;

  for (var i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
    char = codePointAt(string, i);
    escapeSeq = ESCAPE_SEQUENCES[char];

    if (!escapeSeq && isPrintable(char)) {
      result += string[i];
      if (char >= 0x10000) result += string[i + 1];
    } else {
      result += escapeSeq || encodeHex(char);
    }
  }

  return result;
}

function writeFlowSequence(state, level, object) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level, value, false, false) ||
        (typeof value === 'undefined' &&
         writeNode(state, level, null, false, false))) {

      if (_result !== '') _result += ',' + (!state.condenseFlow ? ' ' : '');
      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = '[' + _result + ']';
}

function writeBlockSequence(state, level, object, compact) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level + 1, value, true, true, false, true) ||
        (typeof value === 'undefined' &&
         writeNode(state, level + 1, null, true, true, false, true))) {

      if (!compact || _result !== '') {
        _result += generateNextLine(state, level);
      }

      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += '-';
      } else {
        _result += '- ';
      }

      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = _result || '[]'; // Empty sequence if no valid values.
}

function writeFlowMapping(state, level, object) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      pairBuffer;

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {

    pairBuffer = '';
    if (_result !== '') pairBuffer += ', ';

    if (state.condenseFlow) pairBuffer += '"';

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level, objectKey, false, false)) {
      continue; // Skip this pair because of invalid key;
    }

    if (state.dump.length > 1024) pairBuffer += '? ';

    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

    if (!writeNode(state, level, objectValue, false, false)) {
      continue; // Skip this pair because of invalid value.
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = '{' + _result + '}';
}

function writeBlockMapping(state, level, object, compact) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      explicitPair,
      pairBuffer;

  // Allow sorting keys so that the output file is deterministic
  if (state.sortKeys === true) {
    // Default sorting
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    // Custom sort function
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    // Something is wrong
    throw new exception('sortKeys must be a boolean or a function');
  }

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';

    if (!compact || _result !== '') {
      pairBuffer += generateNextLine(state, level);
    }

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue; // Skip this pair because of invalid key.
    }

    explicitPair = (state.tag !== null && state.tag !== '?') ||
                   (state.dump && state.dump.length > 1024);

    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }

    pairBuffer += state.dump;

    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }

    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue; // Skip this pair because of invalid value.
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = _result || '{}'; // Empty mapping if no valid pairs.
}

function detectType(state, object, explicit) {
  var _result, typeList, index, length, type, style;

  typeList = explicit ? state.explicitTypes : state.implicitTypes;

  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];

    if ((type.instanceOf  || type.predicate) &&
        (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
        (!type.predicate  || type.predicate(object))) {

      if (explicit) {
        if (type.multi && type.representName) {
          state.tag = type.representName(object);
        } else {
          state.tag = type.tag;
        }
      } else {
        state.tag = '?';
      }

      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;

        if (_toString.call(type.represent) === '[object Function]') {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new exception('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }

        state.dump = _result;
      }

      return true;
    }
  }

  return false;
}

// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
  state.tag = null;
  state.dump = object;

  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }

  var type = _toString.call(state.dump);
  var inblock = block;
  var tagStr;

  if (block) {
    block = (state.flowLevel < 0 || state.flowLevel > level);
  }

  var objectOrArray = type === '[object Object]' || type === '[object Array]',
      duplicateIndex,
      duplicate;

  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }

  if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
    compact = false;
  }

  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type === '[object Object]') {
      if (block && (Object.keys(state.dump).length !== 0)) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object Array]') {
      if (block && (state.dump.length !== 0)) {
        if (state.noArrayIndent && !isblockseq && level > 0) {
          writeBlockSequence(state, level - 1, state.dump, compact);
        } else {
          writeBlockSequence(state, level, state.dump, compact);
        }
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object String]') {
      if (state.tag !== '?') {
        writeScalar(state, state.dump, level, iskey, inblock);
      }
    } else if (type === '[object Undefined]') {
      return false;
    } else {
      if (state.skipInvalid) return false;
      throw new exception('unacceptable kind of an object to dump ' + type);
    }

    if (state.tag !== null && state.tag !== '?') {
      // Need to encode all characters except those allowed by the spec:
      //
      // [35] ns-dec-digit    ::=  [#x30-#x39] /* 0-9 */
      // [36] ns-hex-digit    ::=  ns-dec-digit
      //                         | [#x41-#x46] /* A-F */ | [#x61-#x66] /* a-f */
      // [37] ns-ascii-letter ::=  [#x41-#x5A] /* A-Z */ | [#x61-#x7A] /* a-z */
      // [38] ns-word-char    ::=  ns-dec-digit | ns-ascii-letter | “-”
      // [39] ns-uri-char     ::=  “%” ns-hex-digit ns-hex-digit | ns-word-char | “#”
      //                         | “;” | “/” | “?” | “:” | “@” | “&” | “=” | “+” | “$” | “,”
      //                         | “_” | “.” | “!” | “~” | “*” | “'” | “(” | “)” | “[” | “]”
      //
      // Also need to encode '!' because it has special meaning (end of tag prefix).
      //
      tagStr = encodeURI(
        state.tag[0] === '!' ? state.tag.slice(1) : state.tag
      ).replace(/!/g, '%21');

      if (state.tag[0] === '!') {
        tagStr = '!' + tagStr;
      } else if (tagStr.slice(0, 18) === 'tag:yaml.org,2002:') {
        tagStr = '!!' + tagStr.slice(18);
      } else {
        tagStr = '!<' + tagStr + '>';
      }

      state.dump = tagStr + ' ' + state.dump;
    }
  }

  return true;
}

function getDuplicateReferences(object, state) {
  var objects = [],
      duplicatesIndexes = [],
      index,
      length;

  inspectNode(object, objects, duplicatesIndexes);

  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}

function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList,
      index,
      length;

  if (object !== null && typeof object === 'object') {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);

      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}

function dump$1(input, options) {
  options = options || {};

  var state = new State(options);

  if (!state.noRefs) getDuplicateReferences(input, state);

  var value = input;

  if (state.replacer) {
    value = state.replacer.call({ '': value }, '', value);
  }

  if (writeNode(state, 0, value, true, true)) return state.dump + '\n';

  return '';
}

var dump_1 = dump$1;

var dumper = {
	dump: dump_1
};

function renamed(from, to) {
  return function () {
    throw new Error('Function yaml.' + from + ' is removed in js-yaml 4. ' +
      'Use yaml.' + to + ' instead, which is now safe by default.');
  };
}


var Type                = type;
var Schema              = schema;
var FAILSAFE_SCHEMA     = failsafe;
var JSON_SCHEMA         = json;
var CORE_SCHEMA         = core;
var DEFAULT_SCHEMA      = _default;
var load                = loader.load;
var loadAll             = loader.loadAll;
var dump                = dumper.dump;
var YAMLException       = exception;

// Re-export all types in case user wants to create custom schema
var types = {
  binary:    binary,
  float:     float,
  map:       map,
  null:      _null,
  pairs:     pairs,
  set:       set,
  timestamp: timestamp,
  bool:      bool,
  int:       int,
  merge:     merge,
  omap:      omap,
  seq:       seq,
  str:       str
};

// Removed functions from JS-YAML 3.0.x
var safeLoad            = renamed('safeLoad', 'load');
var safeLoadAll         = renamed('safeLoadAll', 'loadAll');
var safeDump            = renamed('safeDump', 'dump');

var jsYaml = {
	Type: Type,
	Schema: Schema,
	FAILSAFE_SCHEMA: FAILSAFE_SCHEMA,
	JSON_SCHEMA: JSON_SCHEMA,
	CORE_SCHEMA: CORE_SCHEMA,
	DEFAULT_SCHEMA: DEFAULT_SCHEMA,
	load: load,
	loadAll: loadAll,
	dump: dump,
	YAMLException: YAMLException,
	types: types,
	safeLoad: safeLoad,
	safeLoadAll: safeLoadAll,
	safeDump: safeDump
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jsYaml);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "qcloud_shell:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"program": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkqcloud_shell"] = self["webpackChunkqcloud_shell"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/program.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain/core/diContainer */ "./src/domain/core/diContainer.ts");
/* harmony import */ var _application_startUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application/startUp */ "./src/application/startUp.ts");
/* harmony import */ var _domain_presentation_IPresentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domain/presentation/IPresentation */ "./src/domain/presentation/IPresentation.ts");
/* harmony import */ var _infrastructure_startUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./infrastructure/startUp */ "./src/infrastructure/startUp.ts");
/* harmony import */ var _presentation_startUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presentation/startUp */ "./src/presentation/startUp.ts");






async function main() {
    //startups
    await Promise.all([_application_startUp__WEBPACK_IMPORTED_MODULE_2__.appStartUp, _infrastructure_startUp__WEBPACK_IMPORTED_MODULE_4__.infraStartUp, _presentation_startUp__WEBPACK_IMPORTED_MODULE_5__.presentationStartUp].map(startup => startup.register(_domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container)));
    //start
    _domain_core_diContainer__WEBPACK_IMPORTED_MODULE_1__.container.resolve(_domain_presentation_IPresentation__WEBPACK_IMPORTED_MODULE_3__.IPresentation).start();
}
main();

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=program.js.map