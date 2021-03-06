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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(69);
module.exports.default = module.exports;



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Actions = exports.Actions = {
  Resize: 'Resize',
  CreateGame: 'CreateGame',
  JoinGame: 'JoinGame',
  ConfirmName: 'ConfirmName',
  SendedConfirmName: 'SendedConfirmName',
  UpdateGameList: 'UpdateGameList',
  UpdateGame: 'UpdateGame',
  StartGame: 'StartGame'
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	( false ? 'undefined' : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.Helium = global.Helium || {});
})(undefined, function (exports) {
	'use strict';

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
		return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	} : function (obj) {
		return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	};

	var classCallCheck = function classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	};

	var createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	var inherits = function inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	};

	/* eslint-disable no-console */
	var NO_OP = '$NO_OP';
	var ERROR_MSG = 'a runtime error occured! Use Helium in development enviroment to find the error.';

	var isBrowser = !!(typeof window !== 'undefined' && window.document);

	var isArray = Array.isArray;
	function toArray$$1(children) {
		var childInAnArray = children ? [children] : children;
		return isArray(children) ? children : childInAnArray;
	}

	function isUndefined(o) {
		return o === void 0;
	}

	function isNull(o) {
		return o === null;
	}

	function isStringOrNumber(o) {
		var type = typeof o === 'undefined' ? 'undefined' : _typeof(o);
		return type === 'string' || type === 'number';
	}

	function isTrue(o) {
		return o === true;
	}

	function isFunction(o) {
		return typeof o === 'function';
	}

	function isString(o) {
		return typeof o === 'string';
	}

	function isNumber(o) {
		return typeof o === 'number';
	}

	function isNullOrUndef(o) {
		return isUndefined(o) || isNull(o);
	}

	function isInvalid(o) {
		return isNull(o) || o === false || isTrue(o) || isUndefined(o);
	}

	function isObject(o) {
		return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object';
	}

	function isStatefulComponent(o) {
		return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
	}

	function throwError(message) {
		if (!message) {
			message = ERROR_MSG;
		}
		throw new Error('Helium Error: ' + message);
	}

	function warning(message) {
		console.warn(message);
	}

	function combineFrom(first, second) {
		var out = {};
		if (first) {
			for (var key in first) {
				out[key] = first[key];
			}
		}
		if (second) {
			for (var _key in second) {
				out[_key] = second[_key];
			}
		}
		return out;
	}

	function Lifecycle() {
		this.listeners = [];
	}

	Lifecycle.prototype.addListener = function addListener(callback) {
		this.listeners.push(callback);
	};
	Lifecycle.prototype.trigger = function trigger() {
		var listeners = this.listeners;
		var listener = void 0;
		listener = listeners.shift();
		while (listener) {
			listener();
			listener = listeners.shift();
		}
	};

	var Text = 1;
	var HtmlElement = 1 << 1;
	var ComponentClass = 1 << 2;
	var ComponentFunction = 1 << 3;
	var ComponentUnknown = 1 << 4;
	var HasKeyedChildren = 1 << 5;
	var HasNonKeyedChildren = 1 << 6;
	var Void = 1 << 12;
	var Element = HtmlElement;
	var Component$2 = ComponentFunction | ComponentClass | ComponentUnknown;

	var VNodeFlags = {
		Text: Text,
		HtmlElement: HtmlElement,
		ComponentClass: ComponentClass,
		ComponentFunction: ComponentFunction,
		ComponentUnknown: ComponentUnknown,
		HasKeyedChildren: HasKeyedChildren,
		HasNonKeyedChildren: HasNonKeyedChildren,
		Void: Void,
		Element: Element,
		Component: Component$2
	};

	var options = {
		afterMount: null,
		afterRender: null,
		afterUpdate: null,
		beforeRender: null,
		beforeUnmount: null,
		createVNode: null,
		findDOMNodeEnabled: false,
		recyclingEnabled: false,
		roots: []
	};

	var skipProps = new Set();
	skipProps.add('children');
	skipProps.add('childrenType');
	skipProps.add('ref');
	skipProps.add('key');

	function hydrateComponent(vNode, dom, lifecycle, context, isClass) {
		var type = vNode.type;
		var ref = vNode.ref;

		vNode.dom = dom;

		var props = vNode.props || EMPTY_OBJ;
		if (isClass) {
			var instance = createClassComponentInstance(vNode, type, props, context, lifecycle);
			var input = instance._lastInput;
			instance._vNode = vNode;
			hydrate(input, dom, lifecycle, instance._childContext);
			mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
			instance._updating = false;
			if (options.findDOMNodeEnabled) {
				componentToDOMNodeMap.set(instance, dom);
			}
		} else {
			var _input = createFunctionalComponentInput(vNode, type, props, context);
			hydrate(_input, dom, lifecycle, context);
			vNode.children = _input;
			vNode.dom = _input.dom;
			mountFunctionalComponentCallbacks(ref, dom, lifecycle);
		}
		return dom;
	}

	function hydrateElement(vNode, dom, lifecycle, context) {
		var children = vNode.children;
		var props = vNode.props;
		var ref = vNode.ref;

		vNode.dom = dom;
		if (children) {
			hydrateChildren(children, dom, lifecycle, context);
		}
		if (props) {
			for (var prop in props) {
				patchProp(prop, null, props[prop], dom);
			}
		}
		if (ref) {
			mountRef(dom, ref, lifecycle);
		}
		return dom;
	}

	function hydrateChildren(children, parentDom, lifecycle, context) {
		var dom = parentDom.firstChild;
		if (isArray(children)) {
			for (var i = 0, len = children.length; i < len; i++) {
				var child = children[i];
				if (!isNull(child) && isObject(child)) {
					if (!isNull(dom)) {
						dom = hydrate(child, dom, lifecycle, context).nextSibling;
					} else {
						mount(child, parentDom, lifecycle, context);
					}
				}
			}
		} else if (isObject(children)) {
			hydrate(children, dom, lifecycle, context);
			dom = dom.nextSibling;
		}

		while (dom) {
			var nextSibling = dom.nextSibling;
			parentDom.removeChild(dom);
			dom = nextSibling;
		}
	}

	function hydrateVoid(vNode, dom) {
		vNode.dom = dom;
		return dom;
	}

	function hydrate(vNode, dom, lifecycle, context) {
		var flags = vNode.flags;
		if (flags & VNodeFlags.Component) {
			return hydrateComponent(vNode, dom, lifecycle, context, (flags & VNodeFlags.ComponentClass) > 0);
		} else if (flags & VNodeFlags.Element) {
			return hydrateElement(vNode, dom, lifecycle, context);
		} else if (flags & VNodeFlags.Void) {
			return hydrateVoid(vNode, dom);
		} else {
			throwError();
		}
	}

	function hydrateRoot(input, parentDom, lifecycle) {
		if (!isNull(parentDom)) {
			var dom = parentDom.firstChild;

			if (!isNull(dom)) {
				hydrate(input, dom, lifecycle, EMPTY_OBJ, false);
				dom = parentDom.firstChild;
				dom = dom.nextSibling;
				while (dom) {
					parentDom.removeChild(dom);
					dom = dom.nextSibling;
				}
				return true;
			}
		}
		return false;
	}

	var componentPools = new Map();
	var elementPools = new Map();

	function recycleElement(vNode, lifecycle, context) {
		var tag = vNode.type;
		var pools = elementPools.get(tag);

		if (!isUndefined(pools)) {
			var key = vNode.key;
			var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);

			if (!isUndefined(pool)) {
				var recycledVNode = pool.pop();

				if (!isUndefined(recycledVNode)) {
					patchElement(recycledVNode, vNode, null, lifecycle, context, true);
					return vNode.dom;
				}
			}
		}
		return null;
	}

	function poolElement(vNode) {
		var tag = vNode.type;
		var key = vNode.key;
		var pools = elementPools.get(tag);

		if (isUndefined(pools)) {
			pools = {
				keyed: new Map(),
				nonKeyed: []
			};
			elementPools.set(tag, pools);
		}
		if (isNull(key)) {
			pools.nonKeyed.push(vNode);
		} else {
			var pool = pools.keyed.get(key);

			if (isUndefined(pool)) {
				pool = [];
				pools.keyed.set(key, pool);
			}
			pool.push(vNode);
		}
	}

	function recycleComponent(vNode, lifecycle, context) {
		var type = vNode.type;
		var pools = componentPools.get(type);

		if (!isUndefined(pools)) {
			var key = vNode.key;
			var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);

			if (!isUndefined(pool)) {
				var recycledVNode = pool.pop();

				if (!isUndefined(recycledVNode)) {
					var flags = vNode.flags;
					var failed = patchComponent(recycledVNode, vNode, null, lifecycle, context, flags & VNodeFlags.ComponentClass, true);

					if (!failed) {
						return vNode.dom;
					}
				}
			}
		}
		return null;
	}

	function poolComponent(vNode) {
		var hooks = vNode.ref;
		var nonRecycleHooks = hooks && (hooks.onComponentWillMount || hooks.onComponentWillUnmount || hooks.onComponentDidMount || hooks.onComponentWillUpdate || hooks.onComponentDidUpdate);
		if (nonRecycleHooks) {
			return;
		}
		var type = vNode.type;
		var key = vNode.key;
		var pools = componentPools.get(type);

		if (isUndefined(pools)) {
			pools = {
				keyed: new Map(),
				nonKeyed: []
			};
			componentPools.set(type, pools);
		}
		if (isNull(key)) {
			pools.nonKeyed.push(vNode);
		} else {
			var pool = pools.keyed.get(key);

			if (isUndefined(pool)) {
				pool = [];
				pools.keyed.set(key, pool);
			}
			pool.push(vNode);
		}
	}

	function unmount(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
		var flags = vNode.flags;

		if (flags & VNodeFlags.Component) {
			unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling);
		} else if (flags & VNodeFlags.Element) {
			unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling);
		} else if (flags & (VNodeFlags.Text | VNodeFlags.Void)) {
			unmountVoidOrText(vNode, parentDom);
		}
	}

	function unmountVoidOrText(vNode, parentDom) {
		if (!isNull(parentDom)) {
			removeChild(parentDom, vNode.dom);
		}
	}

	function unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
		var instance = vNode.children;
		var flags = vNode.flags;
		var isStatefulComponent$$1 = flags & VNodeFlags.ComponentClass;
		var ref = vNode.ref;
		var dom = vNode.dom;

		if (!isRecycling) {
			if (isStatefulComponent$$1) {
				if (!instance._unmounted) {
					instance._blockSetState = true;
					if (!isNull(options.beforeUnmount)) {
						options.beforeUnmount(vNode);
					}
					if (!isUndefined(instance.componentWillUnmount)) {
						instance.componentWillUnmount();
					}
					if (ref && !isRecycling) {
						ref(null);
					}
					instance._unmounted = true;
					if (options.findDOMNodeEnabled) {
						componentToDOMNodeMap.delete(instance);
					}

					unmount(instance._lastInput, null, instance._lifecycle, false, isRecycling);
				}
			} else {
				if (!isNullOrUndef(ref)) {
					if (!isNullOrUndef(ref.onComponentWillUnmount)) {
						ref.onComponentWillUnmount(dom);
					}
				}

				unmount(instance, null, lifecycle, false, isRecycling);
			}
		}
		if (parentDom) {
			var lastInput = instance._lastInput;

			if (isNullOrUndef(lastInput)) {
				lastInput = instance;
			}
			removeChild(parentDom, dom);
		}
		if (options.recyclingEnabled && !isStatefulComponent$$1 && (parentDom || canRecycle)) {
			poolComponent(vNode);
		}
	}

	function unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
		var dom = vNode.dom;
		var ref = vNode.ref;

		if (ref && !isRecycling) {
			unmountRef(ref);
		}
		var children = vNode.children;

		if (!isNullOrUndef(children)) {
			unmountChildren$1(children, lifecycle, isRecycling);
		}
		if (!isNull(parentDom)) {
			removeChild(parentDom, dom);
		}
		if (options.recyclingEnabled && (parentDom || canRecycle)) {
			poolElement(vNode);
		}
	}

	function unmountChildren$1(children, lifecycle, isRecycling) {
		if (isArray(children)) {
			for (var i = 0, len = children.length; i < len; i++) {
				var child = children[i];

				if (!isInvalid(child) && isObject(child)) {
					unmount(child, null, lifecycle, false, isRecycling);
				}
			}
		} else if (isObject(children)) {
			unmount(children, null, lifecycle, false, isRecycling);
		}
	}

	function unmountRef(ref) {
		if (isFunction(ref)) {
			ref(null);
		} else {
			if (isInvalid(ref)) {
				return;
			}
			throwError();
		}
	}

	var componentToDOMNodeMap = new Map();
	var roots = options.roots;

	function getRoot(dom) {
		for (var i = 0, len = roots.length; i < len; i++) {
			var root = roots[i];

			if (root.dom === dom) {
				return root;
			}
		}
		return null;
	}

	function setRoot(dom, input, lifecycle) {
		var root = {
			dom: dom,
			input: input,
			lifecycle: lifecycle
		};

		roots.push(root);
		return root;
	}

	function removeRoot(root) {
		for (var i = 0, len = roots.length; i < len; i++) {
			if (roots[i] === root) {
				roots.splice(i, 1);
				return;
			}
		}
	}

	var documentBody = document.body;
	function render(input, parentDom) {
		if (documentBody === parentDom) {
			throwError();
		}
		if (input === NO_OP) {
			return;
		}
		var root = getRoot(parentDom);

		if (isNull(root)) {
			var lifecycle = new Lifecycle();

			if (!isInvalid(input)) {
				if (input.dom) {
					input = directClone(input);
				}
				if (!hydrateRoot(input, parentDom, lifecycle)) {
					mount(input, parentDom, lifecycle, EMPTY_OBJ, false);
				}
				root = setRoot(parentDom, input, lifecycle);
				lifecycle.trigger();
			}
		} else {
			var _lifecycle = root.lifecycle;

			_lifecycle.listeners = [];
			if (isNullOrUndef(input)) {
				unmount(root.input, parentDom, _lifecycle, false, false);
				removeRoot(root);
			} else {
				if (input.dom) {
					input = directClone(input);
				}
				patch(root.input, input, parentDom, _lifecycle, EMPTY_OBJ, false, false);
			}
			root.input = input;
			_lifecycle.trigger();
		}
		if (root) {
			var rootInput = root.input;

			if (rootInput && rootInput.flags & VNodeFlags.Component) {
				return rootInput.children;
			}
		}
	}

	function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isRecycling) {
		if (lastVNode !== nextVNode) {
			var lastFlags = lastVNode.flags;
			var nextFlags = nextVNode.flags;

			if (nextFlags & VNodeFlags.Component) {
				if (lastFlags & VNodeFlags.Component) {
					patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, nextFlags & VNodeFlags.ComponentClass, isRecycling);
				} else {
					replaceVNode(parentDom, mountComponent(nextVNode, null, lifecycle, context, (nextFlags & VNodeFlags.ComponentClass) > 0), lastVNode, lifecycle, isRecycling);
				}
			} else if (nextFlags & VNodeFlags.Element) {
				if (lastFlags & VNodeFlags.Element) {
					patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isRecycling);
				} else {
					replaceVNode(parentDom, mountElement(nextVNode, null, lifecycle, context), lastVNode, lifecycle, isRecycling);
				}
			} else if (nextFlags & VNodeFlags.Void) {
				if (lastFlags & VNodeFlags.Void) {
					patchVoid(lastVNode, nextVNode);
				} else {
					replaceVNode(parentDom, mountVoid(nextVNode, null), lastVNode, lifecycle, isRecycling);
				}
			} else {
				replaceLastChildAndUnmount(lastVNode, nextVNode, parentDom, lifecycle, context, isRecycling);
			}
		}
	}

	function unmountChildren(children, dom, lifecycle, isRecycling) {
		if (isVNode(children)) {
			unmount(children, dom, lifecycle, true, isRecycling);
		} else if (isArray(children)) {
			removeAllChildren(dom, children, lifecycle, isRecycling);
		}
	}

	function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isRecycling) {
		var nextTag = nextVNode.type;
		var lastTag = lastVNode.type;

		if (lastTag !== nextTag) {
			replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isRecycling);
		} else {
			var dom = lastVNode.dom;
			var lastProps = lastVNode.props;
			var nextProps = nextVNode.props;
			var lastChildren = lastVNode.children;
			var nextChildren = nextVNode.children;
			var lastFlags = lastVNode.flags;
			var nextFlags = nextVNode.flags;
			var nextRef = nextVNode.ref;

			nextVNode.dom = dom;
			if (lastChildren !== nextChildren) {
				patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isRecycling);
			}

			// inlined patchProps  -- starts --
			if (lastProps !== nextProps) {
				var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
				var nextPropsOrEmpty = nextProps || EMPTY_OBJ;

				if (nextPropsOrEmpty !== EMPTY_OBJ) {

					for (var prop in nextPropsOrEmpty) {
						// do not add a hasOwnProperty check here, it affects performance
						var nextValue = nextPropsOrEmpty[prop];
						var lastValue = lastPropsOrEmpty[prop];
						patchProp(prop, lastValue, nextValue, dom);
					}
				}
				if (lastPropsOrEmpty !== EMPTY_OBJ) {
					for (var _prop in lastPropsOrEmpty) {
						// do not add a hasOwnProperty check here, it affects performance
						if (isNullOrUndef(nextPropsOrEmpty[_prop])) {
							removeProp(_prop, lastPropsOrEmpty[_prop], dom);
						}
					}
				}
			}
			if (nextRef) {
				if (lastVNode.ref !== nextRef || isRecycling) {
					mountRef(dom, nextRef, lifecycle);
				}
			}
		}
	}

	function patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isRecycling) {
		var patchArray = false;
		var patchKeyed = false;

		if (nextFlags & VNodeFlags.HasNonKeyedChildren) {
			patchArray = true;
		} else if ((lastFlags & VNodeFlags.HasKeyedChildren) > 0 && (nextFlags & VNodeFlags.HasKeyedChildren) > 0) {
			patchKeyed = true;
			patchArray = true;
		} else if (isInvalid(nextChildren)) {
			unmountChildren(lastChildren, dom, lifecycle, isRecycling);
		} else if (isInvalid(lastChildren)) {
			if (isArray(nextChildren)) {
				mountArrayChildren(nextChildren, dom, lifecycle, context);
			} else {
				mount(nextChildren, dom, lifecycle, context);
			}
		} else if (isArray(nextChildren)) {
			if (isArray(lastChildren)) {
				patchArray = true;
				if (isKeyed(lastChildren, nextChildren)) {
					patchKeyed = true;
				}
			} else {
				unmountChildren(lastChildren, dom, lifecycle, isRecycling);
				mountArrayChildren(nextChildren, dom, lifecycle, context);
			}
		} else if (isArray(lastChildren)) {
			removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
			mount(nextChildren, dom, lifecycle, context);
		} else if (isVNode(nextChildren)) {
			if (isVNode(lastChildren)) {
				patch(lastChildren, nextChildren, dom, lifecycle, context, isRecycling);
			} else {
				unmountChildren(lastChildren, dom, lifecycle, isRecycling);
				mount(nextChildren, dom, lifecycle, context);
			}
		}
		if (patchArray) {
			if (patchKeyed) {
				patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isRecycling);
			} else {
				patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isRecycling);
			}
		}
	}

	function patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isClass, isRecycling) {
		var lastType = lastVNode.type;
		var nextType = nextVNode.type;
		var lastKey = lastVNode.key;
		var nextKey = nextVNode.key;

		if (lastType !== nextType || lastKey !== nextKey) {
			replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isRecycling);
			return false;
		} else {
			var nextProps = nextVNode.props || EMPTY_OBJ;

			if (isClass) {
				var instance = lastVNode.children;
				instance._updating = true;

				if (instance._unmounted) {
					if (isNull(parentDom)) {
						return true;
					}
					replaceChild(parentDom, mountComponent(nextVNode, null, lifecycle, context, (nextVNode.flags & VNodeFlags.ComponentClass) > 0), lastVNode.dom);
				} else {
					var hasComponentDidUpdate = !isUndefined(instance.componentDidUpdate);
					var nextState = instance.state;
					// When component has componentDidUpdate hook, we need to clone lastState or will be modified by reference during update
					var lastState = hasComponentDidUpdate ? combineFrom(nextState, null) : nextState;
					var lastProps = instance.props;
					var childContext = void 0;
					if (!isUndefined(instance.getChildContext)) {
						childContext = instance.getChildContext();
					}

					nextVNode.children = instance;
					if (isNullOrUndef(childContext)) {
						childContext = context;
					} else {
						childContext = combineFrom(context, childContext);
					}
					var lastInput = instance._lastInput;
					var nextInput = instance._updateComponent(lastState, nextState, lastProps, nextProps, context, false, false);
					var didUpdate = true;

					instance._childContext = childContext;
					if (isInvalid(nextInput)) {
						nextInput = createVoidVNode();
					} else if (nextInput === NO_OP) {
						nextInput = lastInput;
						didUpdate = false;
					} else if (isArray(nextInput)) {
						throwError();
					} else if (isObject(nextInput)) {
						if (!isNull(nextInput.dom)) {
							nextInput = directClone(nextInput);
						}
					}
					if (nextInput.flags & VNodeFlags.Component) {
						nextInput.parentVNode = nextVNode;
					} else if (lastInput.flags & VNodeFlags.Component) {
						lastInput.parentVNode = nextVNode;
					}
					instance._lastInput = nextInput;
					instance._vNode = nextVNode;
					if (didUpdate) {
						patch(lastInput, nextInput, parentDom, lifecycle, childContext, isRecycling);
						if (hasComponentDidUpdate) {
							instance.componentDidUpdate(lastProps, lastState);
						}
						if (!isNull(options.afterUpdate)) {
							options.afterUpdate(nextVNode);
						}
						if (options.findDOMNodeEnabled) {
							componentToDOMNodeMap.set(instance, nextInput.dom);
						}
					}
					nextVNode.dom = nextInput.dom;
				}
				instance._updating = false;
			} else {
				var shouldUpdate = true;
				var _lastProps = lastVNode.props;
				var nextHooks = nextVNode.ref;
				var nextHooksDefined = !isNullOrUndef(nextHooks);
				var _lastInput = lastVNode.children;
				var _nextInput = _lastInput;

				nextVNode.dom = lastVNode.dom;
				nextVNode.children = _lastInput;
				if (lastKey !== nextKey) {
					shouldUpdate = true;
				} else {
					if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentShouldUpdate)) {
						shouldUpdate = nextHooks.onComponentShouldUpdate(_lastProps, nextProps);
					}
				}
				if (shouldUpdate !== false) {
					if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentWillUpdate)) {
						nextHooks.onComponentWillUpdate(_lastProps, nextProps);
					}
					_nextInput = nextType(nextProps, context);

					if (isInvalid(_nextInput)) {
						_nextInput = createVoidVNode();
					} else if (isArray(_nextInput)) {
						throwError();
					} else if (isObject(_nextInput)) {
						if (!isNull(_nextInput.dom)) {
							_nextInput = directClone(_nextInput);
						}
					}
					if (_nextInput !== NO_OP) {
						patch(_lastInput, _nextInput, parentDom, lifecycle, context, isRecycling);
						nextVNode.children = _nextInput;
						if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentDidUpdate)) {
							nextHooks.onComponentDidUpdate(_lastProps, nextProps);
						}
						nextVNode.dom = _nextInput.dom;
					}
				}
				if (_nextInput.flags & VNodeFlags.Component) {
					_nextInput.parentVNode = nextVNode;
				} else if (_lastInput.flags & VNodeFlags.Component) {
					_lastInput.parentVNode = nextVNode;
				}
			}
		}
		return false;
	}

	function patchVoid(lastVNode, nextVNode) {
		nextVNode.dom = lastVNode.dom;
	}

	function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isRecycling) {
		var lastChildrenLength = lastChildren.length;
		var nextChildrenLength = nextChildren.length;
		var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
		var i = 0;

		for (; i < commonLength; i++) {
			var nextChild = nextChildren[i];

			if (nextChild.dom) {
				nextChild = nextChildren[i] = directClone(nextChild);
			}
			patch(lastChildren[i], nextChild, dom, lifecycle, context, isRecycling);
		}
		if (lastChildrenLength < nextChildrenLength) {
			for (i = commonLength; i < nextChildrenLength; i++) {
				var _nextChild = nextChildren[i];

				if (_nextChild.dom) {
					_nextChild = nextChildren[i] = directClone(_nextChild);
				}
				appendChild(dom, mount(_nextChild, null, lifecycle, context));
			}
		} else if (nextChildrenLength === 0) {
			removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
		} else if (lastChildrenLength > nextChildrenLength) {
			for (i = commonLength; i < lastChildrenLength; i++) {
				unmount(lastChildren[i], dom, lifecycle, false, isRecycling);
			}
		}
	}

	function patchKeyedChildren(a, b, dom, lifecycle, context, isRecycling) {
		var aLength = a.length;
		var bLength = b.length;
		var aEnd = aLength - 1;
		var bEnd = bLength - 1;
		var aStart = 0;
		var bStart = 0;
		var i = void 0;
		var j = void 0;
		var aNode = void 0;
		var bNode = void 0;
		var nextNode = void 0;
		var nextPos = void 0;
		var node = void 0;

		if (aLength === 0) {
			if (bLength > 0) {
				mountArrayChildren(b, dom, lifecycle, context);
			}
			return;
		} else if (bLength === 0) {
			removeAllChildren(dom, a, lifecycle, isRecycling);
			return;
		}
		var aStartNode = a[aStart];
		var bStartNode = b[bStart];
		var aEndNode = a[aEnd];
		var bEndNode = b[bEnd];

		if (bStartNode.dom) {
			b[bStart] = bStartNode = directClone(bStartNode);
		}
		if (bEndNode.dom) {
			b[bEnd] = bEndNode = directClone(bEndNode);
		}
		// Step 1
		/* eslint no-constant-condition: 0 */
		outer: while (true) {
			// Sync nodes with the same key at the beginning.
			while (aStartNode.key === bStartNode.key) {
				patch(aStartNode, bStartNode, dom, lifecycle, context, isRecycling);
				aStart++;
				bStart++;
				if (aStart > aEnd || bStart > bEnd) {
					break outer;
				}
				aStartNode = a[aStart];
				bStartNode = b[bStart];
				if (bStartNode.dom) {
					b[bStart] = bStartNode = directClone(bStartNode);
				}
			}

			// Sync nodes with the same key at the end.
			while (aEndNode.key === bEndNode.key) {
				patch(aEndNode, bEndNode, dom, lifecycle, context, isRecycling);
				aEnd--;
				bEnd--;
				if (aStart > aEnd || bStart > bEnd) {
					break outer;
				}
				aEndNode = a[aEnd];
				bEndNode = b[bEnd];
				if (bEndNode.dom) {
					b[bEnd] = bEndNode = directClone(bEndNode);
				}
			}

			// Move and sync nodes from right to left.
			if (aEndNode.key === bStartNode.key) {
				patch(aEndNode, bStartNode, dom, lifecycle, context, isRecycling);
				insertOrAppend(dom, bStartNode.dom, aStartNode.dom);
				aEnd--;
				bStart++;
				aEndNode = a[aEnd];
				bStartNode = b[bStart];
				if (bStartNode.dom) {
					b[bStart] = bStartNode = directClone(bStartNode);
				}
				continue;
			}

			// Move and sync nodes from left to right.
			if (aStartNode.key === bEndNode.key) {
				patch(aStartNode, bEndNode, dom, lifecycle, context, isRecycling);
				nextPos = bEnd + 1;
				nextNode = nextPos < b.length ? b[nextPos].dom : null;
				insertOrAppend(dom, bEndNode.dom, nextNode);
				aStart++;
				bEnd--;
				aStartNode = a[aStart];
				bEndNode = b[bEnd];
				if (bEndNode.dom) {
					b[bEnd] = bEndNode = directClone(bEndNode);
				}
				continue;
			}
			break;
		}

		if (aStart > aEnd) {
			if (bStart <= bEnd) {
				nextPos = bEnd + 1;
				nextNode = nextPos < b.length ? b[nextPos].dom : null;
				while (bStart <= bEnd) {
					node = b[bStart];
					if (node.dom) {
						b[bStart] = node = directClone(node);
					}
					bStart++;
					insertOrAppend(dom, mount(node, null, lifecycle, context), nextNode);
				}
			}
		} else if (bStart > bEnd) {
			while (aStart <= aEnd) {
				unmount(a[aStart++], dom, lifecycle, false, isRecycling);
			}
		} else {
			aLength = aEnd - aStart + 1;
			bLength = bEnd - bStart + 1;
			var sources = new Array(bLength);

			// Mark all nodes as inserted.
			for (i = 0; i < bLength; i++) {
				sources[i] = -1;
			}
			var moved = false;
			var pos = 0;
			var patched = 0;

			// When sizes are small, just loop them through
			if (bLength <= 4 || aLength * bLength <= 16) {
				for (i = aStart; i <= aEnd; i++) {
					aNode = a[i];
					if (patched < bLength) {
						for (j = bStart; j <= bEnd; j++) {
							bNode = b[j];
							if (aNode.key === bNode.key) {
								sources[j - bStart] = i;

								if (pos > j) {
									moved = true;
								} else {
									pos = j;
								}
								if (bNode.dom) {
									b[j] = bNode = directClone(bNode);
								}
								patch(aNode, bNode, dom, lifecycle, context, isRecycling);
								patched++;
								a[i] = null;
								break;
							}
						}
					}
				}
			} else {
				var keyIndex = new Map();

				// Map keys by their index in array
				for (i = bStart; i <= bEnd; i++) {
					keyIndex.set(b[i].key, i);
				}

				// Try to patch same keys
				for (i = aStart; i <= aEnd; i++) {
					aNode = a[i];

					if (patched < bLength) {
						j = keyIndex.get(aNode.key);

						if (!isUndefined(j)) {
							bNode = b[j];
							sources[j - bStart] = i;
							if (pos > j) {
								moved = true;
							} else {
								pos = j;
							}
							if (bNode.dom) {
								b[j] = bNode = directClone(bNode);
							}
							patch(aNode, bNode, dom, lifecycle, context, isRecycling);
							patched++;
							a[i] = null;
						}
					}
				}
			}
			// fast-path: if nothing patched remove all old and add all new
			if (aLength === a.length && patched === 0) {
				removeAllChildren(dom, a, lifecycle, isRecycling);
				while (bStart < bLength) {
					node = b[bStart];
					if (node.dom) {
						b[bStart] = node = directClone(node);
					}
					bStart++;
					insertOrAppend(dom, mount(node, null, lifecycle, context), null);
				}
			} else {
				i = aLength - patched;
				while (i > 0) {
					aNode = a[aStart++];
					if (!isNull(aNode)) {
						unmount(aNode, dom, lifecycle, true, isRecycling);
						i--;
					}
				}
				if (moved) {
					var seq = lis_algorithm(sources);
					j = seq.length - 1;
					for (i = bLength - 1; i >= 0; i--) {
						if (sources[i] === -1) {
							pos = i + bStart;
							node = b[pos];
							if (node.dom) {
								b[pos] = node = directClone(node);
							}
							nextPos = pos + 1;
							nextNode = nextPos < b.length ? b[nextPos].dom : null;
							insertOrAppend(dom, mount(node, dom, lifecycle, context), nextNode);
						} else {
							if (j < 0 || i !== seq[j]) {
								pos = i + bStart;
								node = b[pos];
								nextPos = pos + 1;
								nextNode = nextPos < b.length ? b[nextPos].dom : null;
								insertOrAppend(dom, node.dom, nextNode);
							} else {
								j--;
							}
						}
					}
				} else if (patched !== bLength) {
					// when patched count doesn't match b length we need to insert those new ones
					// loop backwards so we can use insertBefore
					for (i = bLength - 1; i >= 0; i--) {
						if (sources[i] === -1) {
							pos = i + bStart;
							node = b[pos];
							if (node.dom) {
								b[pos] = node = directClone(node);
							}
							nextPos = pos + 1;
							nextNode = nextPos < b.length ? b[nextPos].dom : null;
							insertOrAppend(dom, mount(node, null, lifecycle, context), nextNode);
						}
					}
				}
			}
		}
	}

	// // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
	function lis_algorithm(arr) {
		var p = arr.slice(0);
		var result = [0];
		var i = void 0;
		var j = void 0;
		var u = void 0;
		var v = void 0;
		var c = void 0;
		var len = arr.length;

		for (i = 0; i < len; i++) {
			var arrI = arr[i];

			if (arrI === -1) {
				continue;
			}

			j = result[result.length - 1];
			if (arr[j] < arrI) {
				p[i] = j;
				result.push(i);
				continue;
			}

			u = 0;
			v = result.length - 1;

			while (u < v) {
				c = (u + v) / 2 | 0;
				if (arr[result[c]] < arrI) {
					u = c + 1;
				} else {
					v = c;
				}
			}

			if (arrI < arr[result[u]]) {
				if (u > 0) {
					p[i] = result[u - 1];
				}
				result[u] = i;
			}
		}

		u = result.length;
		v = result[u - 1];

		while (u-- > 0) {
			result[u] = v;
			v = p[v];
		}

		return result;
	}

	function patchProp(prop, lastValue, nextValue, dom) {
		if (lastValue !== nextValue || dom.dirtyMap[prop]) {
			if (skipProps.has(prop)) {
				return;
			} else if (isNullOrUndef(nextValue)) {
				dom.removeAttribute(prop);
			} else {
				dom.setAttribute(prop, nextValue);
			}
		}
	}

	function removeProp(prop, lastValue, dom) {
		dom.removeAttribute(prop);
	}

	function mount(vNode, parentDom, lifecycle, context) {
		var flags = vNode.flags;
		if (flags & VNodeFlags.Element) {
			return mountElement(vNode, parentDom, lifecycle, context);
		} else if (flags & VNodeFlags.Component) {
			return mountComponent(vNode, parentDom, lifecycle, context, (flags & VNodeFlags.ComponentClass) > 0);
		} else if (flags & VNodeFlags.Void) {
			return mountVoid(vNode, parentDom);
		} else {
			throwError();
		}
	}

	function mountVoid(vNode, parentDom) {
		var dom = documentCreateElement('Container');
		vNode.dom = dom;
		if (!isNull(parentDom)) {
			appendChild(parentDom, dom);
		}
		return dom;
	}

	function mountElement(vNode, parentDom, lifecycle, context) {
		if (options.recyclingEnabled) {
			var _dom = recycleElement(vNode, lifecycle, context);
			if (!isNull(_dom)) {
				if (!isNull(parentDom)) {
					appendChild(parentDom, _dom);
				}
				return _dom;
			}
		}
		var props = vNode.props;
		var dom = documentCreateElement(vNode.type, props);
		var children = vNode.children;
		var ref = vNode.ref;

		vNode.dom = dom;
		if (!isInvalid(children)) {
			if (isArray(children)) {
				mountArrayChildren(children, dom, lifecycle, context);
			} else if (isVNode(children)) {
				mount(children, dom, lifecycle, context);
			}
		}
		if (!isNull(props)) {
			for (var prop in props) {
				patchProp(prop, null, props[prop], dom);
			}
		}
		if (!isNull(ref)) {
			mountRef(dom, ref, lifecycle);
		}
		if (!isNull(parentDom)) {
			appendChild(parentDom, dom);
		}
		return dom;
	}

	function mountArrayChildren(children, dom, lifecycle, context) {
		for (var i = 0, len = children.length; i < len; i++) {
			var child = children[i];
			if (!isInvalid(child)) {
				if (child.dom) {
					children[i] = child = directClone(child);
				}
				mount(children[i], dom, lifecycle, context);
			}
		}
	}

	function mountComponent(vNode, parentDom, lifecycle, context, isClass) {
		if (options.recyclingEnabled) {
			var _dom2 = recycleComponent(vNode, lifecycle, context);

			if (!isNull(_dom2)) {
				if (!isNull(parentDom)) {
					appendChild(parentDom, _dom2);
				}
				return _dom2;
			}
		}
		var type = vNode.type;
		var props = vNode.props || EMPTY_OBJ;
		var ref = vNode.ref;
		var dom = void 0;
		if (isClass) {
			var instance = createClassComponentInstance(vNode, type, props, context, lifecycle);
			var input = instance._lastInput;
			instance._vNode = vNode;
			vNode.dom = dom = mount(input, null, lifecycle, instance._childContext);
			if (!isNull(parentDom)) {
				appendChild(parentDom, dom);
			}
			mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
			instance._updating = false;
			if (options.findDOMNodeEnabled) {
				componentToDOMNodeMap.set(instance, dom);
			}
		} else {
			var _input = createFunctionalComponentInput(vNode, type, props, context);

			vNode.dom = dom = mount(_input, null, lifecycle, context);
			vNode.children = _input;
			mountFunctionalComponentCallbacks(ref, dom, lifecycle);
			if (!isNull(parentDom)) {
				appendChild(parentDom, dom);
			}
		}
		return dom;
	}

	function mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
		if (ref) {
			if (isFunction(ref)) {
				ref(instance);
			} else {
				throwError();
			}
		}
		var hasDidMount = !isUndefined(instance.componentDidMount);
		var afterMount = options.afterMount;
		if (hasDidMount || !isNull(afterMount)) {
			lifecycle.addListener(function () {
				instance._updating = true;
				if (afterMount) {
					afterMount(vNode);
				}
				if (hasDidMount) {
					instance.componentDidMount();
				}
				instance._updating = false;
			});
		}
	}

	function mountFunctionalComponentCallbacks(ref, dom, lifecycle) {
		if (ref) {
			if (!isNullOrUndef(ref.onComponentWillMount)) {
				ref.onComponentWillMount();
			}
			if (!isNullOrUndef(ref.onComponentDidMount)) {
				lifecycle.addListener(function () {
					return ref.onComponentDidMount(dom);
				});
			}
		}
	}

	function mountRef(dom, value, lifecycle) {
		if (isFunction(value)) {
			lifecycle.addListener(function () {
				return value(dom);
			});
		} else {
			if (isInvalid(value)) {
				return;
			}
			throwError();
		}
	}

	var ANIMATION_KEY = '_hAnimation';

	var animationQueue = [];

	function registerAnimationDOM(dom) {
		var index = animationQueue.indexOf(dom);
		if (index === -1) {
			animationQueue.push(dom);
		}
	}

	function removeAnimationDOM(dom) {
		var index = animationQueue.indexOf(dom);
		if (index > -1) {
			animationQueue.splice(index, 1);
		}
	}

	function patchTween(dom, animationConfig, currentTime) {
		var key = animationConfig.key,
		    _animationConfig$star = animationConfig.startValue,
		    startValue = _animationConfig$star === undefined ? 0 : _animationConfig$star,
		    _animationConfig$endV = animationConfig.endValue,
		    endValue = _animationConfig$endV === undefined ? 0 : _animationConfig$endV,
		    _animationConfig$star2 = animationConfig.startTime,
		    startTime = _animationConfig$star2 === undefined ? 0 : _animationConfig$star2,
		    _animationConfig$dura = animationConfig.duration,
		    duration = _animationConfig$dura === undefined ? 0 : _animationConfig$dura,
		    _animationConfig$repe = animationConfig.repeat,
		    repeat = _animationConfig$repe === undefined ? 0 : _animationConfig$repe,
		    _animationConfig$dela = animationConfig.delay,
		    delay = _animationConfig$dela === undefined ? 0 : _animationConfig$dela,
		    _animationConfig$repe2 = animationConfig.repeatDelay,
		    repeatDelay = _animationConfig$repe2 === undefined ? 0 : _animationConfig$repe2,
		    _animationConfig$ease = animationConfig.ease,
		    ease = _animationConfig$ease === undefined ? null : _animationConfig$ease,
		    _animationConfig$map = animationConfig.map,
		    map = _animationConfig$map === undefined ? null : _animationConfig$map,
		    _animationConfig$yoyo = animationConfig.yoyo,
		    yoyo = _animationConfig$yoyo === undefined ? false : _animationConfig$yoyo,
		    _animationConfig$isAp = animationConfig.isApplyStart,
		    isApplyStart = _animationConfig$isAp === undefined ? false : _animationConfig$isAp;

		var diff = currentTime - (startTime + delay);
		var progress = void 0;
		if (diff >= 0) {
			if (duration === 0) {
				progress = 1;
			} else {
				if (repeat === 0) {
					progress = Math.min(diff / duration, 1);
				} else if (!yoyo) {
					var frame = Math.floor(diff / (duration + repeatDelay));
					if (repeat === -1 || repeat >= frame) {
						progress = Math.min(diff % (duration + repeatDelay) / duration, 1);
					} else {
						progress = 1;
					}
				} else {
					var _frame = Math.floor(diff / (duration + repeatDelay));
					var isYoyoBack = _frame % 2 === 1;
					if (repeat === -1 || repeat >= _frame) {
						progress = Math.min(diff % (duration + repeatDelay) / duration, 1);
						if (isYoyoBack) {
							progress = 1 - progress;
						}
					} else {
						progress = repeat % 2 === 0 ? 1 : 0;
					}
				}
			}
			if (isFunction(ease)) {
				progress = ease(progress);
			}
			var finalValue = startValue + (endValue - startValue) * progress;
			if (isFunction(map)) {
				finalValue = map(finalValue);
			}
			if (isFunction(key)) {
				key(dom, finalValue, currentTime);
			} else {
				dom.setAttribute(key, finalValue, true);
			}
		} else if (isApplyStart) {
			var _finalValue = startValue;
			if (isFunction(map)) {
				_finalValue = map(_finalValue);
			}
			if (isFunction(key)) {
				key(dom, _finalValue, currentTime);
			} else {
				dom.setAttribute(key, _finalValue, true);
			}
		}
	}

	function patchAnimation(currentTime) {
		for (var i = 0, len = animationQueue.length; i < len; i++) {
			var dom = animationQueue[i];
			var _hAnimation = dom._hAnimation;
			for (var j = 0, tweenLen = _hAnimation.length; j < tweenLen; j++) {
				patchTween(dom, _hAnimation[j], currentTime);
			}
		}
	}

	var baseView = new Map();

	function registerBaseView(name, view) {
		baseView.set(name, view);
	}

	var HOM = function () {
		function HOM(tagName, props) {
			classCallCheck(this, HOM);

			this.parentNode = null;
			this.tagName = tagName;
			if (baseView.has(tagName)) {
				var View = baseView.get(tagName);
				this.tagInstance = new View(props);
			} else {
				throwError(tagName + ' is not a base view');
			}
			this.dirtyMap = {};
			this.children = [];
			this._hAnimation = [];
		}

		createClass(HOM, [{
			key: 'appendChild',
			value: function appendChild(newNode) {
				this.children.push(newNode);
				newNode.parentNode = this;
				this.updateChildren();
			}
		}, {
			key: 'insertBefore',
			value: function insertBefore(newNode, nextNode) {
				var index = this.children.indexOf(nextNode);
				if (index > -1) {
					this.children.splice(index, 0, newNode);
				} else {
					this.children.push(newNode);
				}
				newNode.parentNode = this;
				this.updateChildren();
			}
		}, {
			key: 'replaceChild',
			value: function replaceChild(nextDom, lastDom) {
				var index = this.children.indexOf(lastDom);
				if (index > -1) {
					this.children.splice(index, 1, nextDom);
				} else {
					this.children.push(nextDom);
				}
				nextDom.parentNode = this;
				this.updateChildren();
			}
		}, {
			key: 'removeChild',
			value: function removeChild(dom) {
				var index = this.children.indexOf(dom);
				if (index > -1) {
					this.children.splice(index, 1);
				}
				dom.parentNode = null;
				this.updateChildren();
			}
		}, {
			key: 'updateChildren',
			value: function updateChildren() {
				this.tagInstance.updateChildren(this.children);
			}
		}, {
			key: 'setAttribute',
			value: function setAttribute(key, value) {
				var isDirty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

				if (isDirty) {
					this.dirtyMap[key] = true;
				} else {
					this.dirtyMap[key] = false;
				}
				if (key === ANIMATION_KEY) {
					if (value) {
						this._hAnimation = value;
						registerAnimationDOM(this);
					} else {
						this._hAnimation = [];
					}
				} else {
					this.tagInstance.setAttribute(key, value);
				}
			}
		}, {
			key: 'removeAttribute',
			value: function removeAttribute(key) {
				if (key === ANIMATION_KEY) {
					this._hAnimation = [];
					removeAnimationDOM(this);
				} else {
					this.tagInstance.removeAttribute(key);
				}
			}
		}, {
			key: 'nextSibling',
			get: function get$$1() {
				var dom = null;
				if (this.parentNode) {
					var index = this.parentNode.children.indexOf(this);
					if (index > -1) {
						dom = this.parentNode.children[index + 1];
					}
				}
				return dom;
			}
		}, {
			key: 'firstChild',
			get: function get$$1() {
				return this.children[0] || null;
			}
		}]);
		return HOM;
	}();

	var EMPTY_OBJ = {};

	Object.freeze(EMPTY_OBJ);

	function createClassComponentInstance(vNode, Component, props, context, lifecycle) {
		if (isUndefined(context)) {
			context = EMPTY_OBJ;
		}
		var instance = new Component(props, context);
		vNode.children = instance;
		instance._blockSetState = false;
		instance.context = context;
		if (instance.props === EMPTY_OBJ) {
			instance.props = props;
		}
		instance._lifecycle = lifecycle;
		instance._unmounted = false;
		instance._pendingSetState = true;
		if (!isUndefined(instance.componentWillMount)) {
			instance._blockRender = true;
			instance.componentWillMount();
			instance._blockRender = false;
		}
		var childContext = void 0;
		if (!isUndefined(instance.getChildContext)) {
			childContext = instance.getChildContext();
		}
		if (isNullOrUndef(childContext)) {
			instance._childContext = context;
		} else {
			instance._childContext = combineFrom(context, childContext);
		}

		if (!isNull(options.beforeRender)) {
			options.beforeRender(instance);
		}

		var input = instance.render(props, instance.state, context);

		if (!isNull(options.afterRender)) {
			options.afterRender(instance);
		}
		if (isArray(input)) {
			throwError();
		} else if (isInvalid(input)) {
			input = createVoidVNode();
		} else {
			if (input.dom) {
				input = directClone(input);
			}
			if (input.flags & VNodeFlags.Component) {
				input.parentVNode = vNode;
			}
		}
		instance._pendingSetState = false;
		instance._lastInput = input;
		return instance;
	}

	function replaceLastChildAndUnmount(lastInput, nextInput, parentDom, lifecycle, context, isRecycling) {
		replaceVNode(parentDom, mount(nextInput, null, lifecycle, context), lastInput, lifecycle, isRecycling);
	}

	function replaceVNode(parentDom, dom, vNode, lifecycle, isRecycling) {
		unmount(vNode, null, lifecycle, false, isRecycling);
		replaceChild(parentDom, dom, vNode.dom);
	}

	function createFunctionalComponentInput(vNode, component, props, context) {
		var input = component(props, context);

		if (isArray(input)) {
			throwError();
		} else if (isInvalid(input)) {
			input = createVoidVNode();
		} else {
			if (input.dom) {
				input = directClone(input);
			}
			if (input.flags & VNodeFlags.Component) {
				input.parentVNode = vNode;
			}
		}
		return input;
	}

	function appendChild(parentDom, dom) {
		parentDom.appendChild(dom);
	}

	function insertOrAppend(parentDom, newNode, nextNode) {
		if (isNullOrUndef(nextNode)) {
			appendChild(parentDom, newNode);
		} else {
			parentDom.insertBefore(newNode, nextNode);
		}
	}

	function documentCreateElement(tag, props) {
		return new HOM(tag, props);
	}

	function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isRecycling) {
		unmount(lastNode, null, lifecycle, false, isRecycling);
		var dom = mount(nextNode, null, lifecycle, context);
		nextNode.dom = dom;
		replaceChild(parentDom, dom, lastNode.dom);
	}

	function replaceChild(parentDom, nextDom, lastDom) {
		if (!parentDom) {
			parentDom = lastDom.parentNode;
		}
		parentDom.replaceChild(nextDom, lastDom);
	}

	function removeChild(parentDom, dom) {
		parentDom.removeChild(dom);
	}

	function removeAllChildren(dom, children, lifecycle, isRecycling) {
		if (!options.recyclingEnabled || options.recyclingEnabled && !isRecycling) {
			removeChildren(null, children, lifecycle, isRecycling);
		}
	}

	function removeChildren(dom, children, lifecycle, isRecycling) {
		for (var i = 0, len = children.length; i < len; i++) {
			var child = children[i];
			if (!isInvalid(child)) {
				unmount(child, dom, lifecycle, true, isRecycling);
			}
		}
	}

	function isKeyed(lastChildren, nextChildren) {
		return nextChildren.length > 0 && !isNullOrUndef(nextChildren[0]) && !isNullOrUndef(nextChildren[0].key) && lastChildren.length > 0 && !isNullOrUndef(lastChildren[0]) && !isNullOrUndef(lastChildren[0].key);
	}

	function applyKey(key, vNode) {
		vNode.key = key;
		return vNode;
	}

	function applyKeyIfMissing(key, vNode) {
		if (isNumber(key)) {
			key = '.' + key;
		}
		if (isNull(vNode.key) || vNode.key[0] === '.') {
			return applyKey(key, vNode);
		}
		return vNode;
	}

	function applyKeyPrefix(key, vNode) {
		vNode.key = key + vNode.key;
		return vNode;
	}

	function _normalizeVNodes(nodes, result, index, currentKey) {
		for (var len = nodes.length; index < len; index++) {
			var n = nodes[index];
			var key = currentKey + '.' + index;
			if (!isInvalid(n)) {
				if (isArray(n)) {
					_normalizeVNodes(n, result, 0, key);
				} else {
					if (isVNode(n) && n.dom || n.key && n.key[0] === '.') {
						n = directClone(n);
					}
					if (isNull(n.key) || n.key[0] === '.') {
						n = applyKey(key, n);
					} else {
						n = applyKeyPrefix(currentKey, n);
					}

					result.push(n);
				}
			}
		}
	}

	function normalizeVNodes(nodes) {
		var newNodes = void 0;

		if (nodes['$'] === 'true') {
			nodes = nodes.slice();
		} else {
			nodes['$'] = true;
		}
		for (var i = 0, len = nodes.length; i < len; i++) {
			var n = nodes[i];

			if (isInvalid(n) || isArray(n)) {
				var result = (newNodes || nodes).slice(0, i);
				_normalizeVNodes(nodes, result, i, '');
				return result;
			} else if (isVNode(n) && n.dom !== null || isNull(n.key) && (n.flags & VNodeFlags.HasNonKeyedChildren) === 0) {
				if (!newNodes) {
					newNodes = nodes.slice(0, i);
				}
				newNodes.push(applyKeyIfMissing(i, directClone(n)));
			} else if (newNodes) {
				newNodes.push(applyKeyIfMissing(i, directClone(n)));
			}
		}
		return newNodes || nodes;
	}

	function normalizeChildren(children) {
		if (isArray(children)) {
			return normalizeVNodes(children);
		} else if (isVNode(children) && children.dom !== null) {
			return directClone(children);
		}
		return children;
	}

	function normalizeProps(vNode, props, children) {
		if (vNode.flags & VNodeFlags.Element) {
			if (isNullOrUndef(children) && !isNullOrUndef(props.children)) {
				vNode.children = props.children;
			}
		}
		if (props.ref) {
			vNode.ref = props.ref;
			delete props.ref;
		}
		if (!isNullOrUndef(props.key)) {
			vNode.key = props.key;
			delete props.key;
		}
	}

	function normalize(vNode) {
		var props = vNode.props;
		var children = vNode.children;

		if (vNode.flags & VNodeFlags.Component) {
			var type = vNode.type;
			var defaultProps = type.defaultProps;
			if (!isNullOrUndef(defaultProps)) {
				if (!props) {
					props = vNode.props = defaultProps;
				} else {
					for (var prop in defaultProps) {
						if (isUndefined(props[prop])) {
							props[prop] = defaultProps[prop];
						}
					}
				}
			}

			if (isString(type)) {
				vNode.flags = VNodeFlags.HtmlElement;
				if (props && props.children) {
					vNode.children = props.children;
					children = props.children;
				}
			}
		}

		if (props) {
			normalizeProps(vNode, props, children);
			if (!isInvalid(props.children)) {
				props.children = normalizeChildren(props.children);
			}
		}
		if (!isInvalid(children)) {
			vNode.children = normalizeChildren(children);
		}
	}

	function VNode(children, flags, key, props, ref, type) {
		this.children = children;
		this.dom = null;
		this.flags = flags;
		this.key = key;
		this.props = props;
		this.ref = ref;
		this.type = type;
	}

	function createVNode(flags, type, children, props, key, ref, noNormalize) {
		if (flags & VNodeFlags.ComponentUnknown) {
			flags = isStatefulComponent(type) ? VNodeFlags.ComponentClass : VNodeFlags.ComponentFunction;
		}
		var vNode = new VNode(children === void 0 ? null : children, flags, key === void 0 ? null : key, props === void 0 ? null : props, ref === void 0 ? null : ref, type);
		if (noNormalize !== true) {
			normalize(vNode);
		}
		if (options.createVNode !== null) {
			options.createVNode(vNode);
		}

		return vNode;
	}

	function createVoidVNode() {
		return createVNode(VNodeFlags.Void, null);
	}

	function isVNode(o) {
		return !!o.flags;
	}

	function directClone(vNodeToClone) {
		var newVNode = void 0;
		var flags = vNodeToClone.flags;
		if (flags & VNodeFlags.Component) {
			var props = void 0;
			var propsToClone = vNodeToClone.props;

			if (isNull(propsToClone)) {
				props = EMPTY_OBJ;
			} else {
				props = {};
				for (var key in propsToClone) {
					props[key] = propsToClone[key];
				}
			}
			newVNode = createVNode(flags, vNodeToClone.type, null, props, vNodeToClone.key, vNodeToClone.ref, true);
			var newProps = newVNode.props;
			var newChildren = newProps.children;
			if (newChildren) {
				if (isArray(newChildren)) {
					var len = newChildren.length;
					if (len > 0) {
						var tmpArray = [];
						for (var i = 0; i < len; i++) {
							var child = newChildren[i];
							if (!isInvalid(child) && isVNode(child)) {
								tmpArray.push(directClone(child));
							}
						}
						newProps.children = tmpArray;
					}
				} else if (isVNode(newChildren)) {
					newProps.children = directClone(newChildren);
				}
			}
			newVNode.children = null;
		} else if (flags & VNodeFlags.Element) {
			var children = vNodeToClone.children;
			var _props = void 0;
			var _propsToClone = vNodeToClone.props;
			if (_propsToClone === null) {
				_props = EMPTY_OBJ;
			} else {
				_props = {};
				for (var _key in _propsToClone) {
					_props[_key] = _propsToClone[_key];
				}
			}
			newVNode = createVNode(flags, vNodeToClone.type, children, _props, vNodeToClone.key, vNodeToClone.ref, !children);
		}
		return newVNode;
	}

	var componentCallbackQueue = new Map();

	// when a components root VNode is also a component, we can run into issues
	// this will recursively look for vNode.parentNode if the VNode is a component
	function updateParentComponentVNodes(vNode, dom) {
		if (vNode.flags & VNodeFlags.Component) {
			var parentVNode = vNode.parentVNode;

			if (parentVNode) {
				parentVNode.dom = dom;
				updateParentComponentVNodes(parentVNode, dom);
			}
		}
	}

	var resolvedPromise = Promise.resolve();

	function addToQueue(component, force, callback) {
		var queue = componentCallbackQueue.get(component);

		if (queue === void 0) {
			queue = [];
			componentCallbackQueue.set(component, queue);
			resolvedPromise.then(function () {
				componentCallbackQueue.delete(component);
				component._updating = true;
				applyState(component, force, function () {
					for (var i = 0, len = queue.length; i < len; i++) {
						queue[i].call(component);
					}
				});
				component._updating = false;
			});
		}
		if (!isNullOrUndef(callback)) {
			queue.push(callback);
		}
	}

	function queueStateChanges(component, newState, callback) {
		if (isFunction(newState)) {
			newState = newState(component.state, component.props, component.context);
		}
		var pending = component._pendingState;

		if (pending === null) {
			component._pendingState = pending = newState;
		} else {
			for (var stateKey in newState) {
				pending[stateKey] = newState[stateKey];
			}
		}

		if (!component._pendingSetState && !component._blockRender) {
			if (!component._updating) {
				component._pendingSetState = true;
				component._updating = true;
				applyState(component, false, callback);
				component._updating = false;
			} else {
				addToQueue(component, false, callback);
			}
		} else {
			var state = component.state;

			if (state === null) {
				component.state = pending;
			} else {
				for (var key in pending) {
					state[key] = pending[key];
				}
			}

			component._pendingState = null;
			if (!isNullOrUndef(callback) && component._blockRender) {
				component._lifecycle.addListener(callback.bind(component));
			}
		}
	}

	function applyState(component, force, callback) {
		if (component._unmounted) {
			return;
		}
		if (force || !component._blockRender) {
			component._pendingSetState = false;
			var pendingState = component._pendingState;
			var prevState = component.state;
			var nextState = combineFrom(prevState, pendingState);
			var props = component.props;
			var context = component.context;

			component._pendingState = null;
			var nextInput = component._updateComponent(prevState, nextState, props, props, context, force, true);
			var didUpdate = true;

			if (isInvalid(nextInput)) {
				nextInput = createVNode(VNodeFlags.Void, null);
			} else if (nextInput === NO_OP) {
				nextInput = component._lastInput;
				didUpdate = false;
			} else if (isStringOrNumber(nextInput)) {
				nextInput = createVNode(VNodeFlags.Text, null, null, nextInput);
			} else if (isArray(nextInput)) {
				throwError();
			}

			var lastInput = component._lastInput;
			var vNode = component._vNode;
			var parentDom = lastInput.dom && lastInput.dom.parentNode || (lastInput.dom = vNode.dom);

			component._lastInput = nextInput;
			if (didUpdate) {
				var childContext = void 0;

				if (!isUndefined(component.getChildContext)) {
					childContext = component.getChildContext();
				}

				if (isNullOrUndef(childContext)) {
					childContext = component._childContext;
				} else {
					childContext = combineFrom(context, childContext);
				}

				var lifeCycle = component._lifecycle;
				patch(lastInput, nextInput, parentDom, lifeCycle, childContext, false);
				lifeCycle.trigger();

				if (!isUndefined(component.componentDidUpdate)) {
					component.componentDidUpdate(props, prevState, context);
				}
				if (!isNull(options.afterUpdate)) {
					options.afterUpdate(vNode);
				}
			}
			var dom = vNode.dom = nextInput.dom;
			if (options.findDOMNodeEnabled) {
				componentToDOMNodeMap.set(component, nextInput.dom);
			}

			updateParentComponentVNodes(vNode, dom);
		} else {
			component.state = component._pendingState;
			component._pendingState = null;
		}
		if (!isNullOrUndef(callback)) {
			callback.call(component);
		}
	}

	var Component = function () {
		function Component(props, context) {
			classCallCheck(this, Component);

			this.state = null;
			this._blockRender = false;
			this._blockSetState = true;
			this._pendingSetState = false;
			this._pendingState = null;
			this._lastInput = null;
			this._vNode = null;
			this._unmounted = false;
			this._lifecycle = null;
			this._childContext = null;
			this._updating = true;
			this.props = props || EMPTY_OBJ;
			this.context = context || EMPTY_OBJ;
		}

		createClass(Component, [{
			key: 'forceUpdate',
			value: function forceUpdate(callback) {
				if (this._unmounted) {
					return;
				}

				applyState(this, true, callback);
			}
		}, {
			key: 'setState',
			value: function setState(newState, callback) {
				if (this._unmounted) {
					return;
				}
				if (!this._blockSetState) {
					queueStateChanges(this, newState, callback);
				} else {
					throwError();
				}
			}
		}, {
			key: 'setStateSync',
			value: function setStateSync(newState) {
				this.setState(newState);
			}
		}, {
			key: '_updateComponent',
			value: function _updateComponent(prevState, nextState, prevProps, nextProps, context, force, fromSetState) {
				if (this._unmounted === true) {
					throwError();
				}
				if (prevProps !== nextProps || nextProps === EMPTY_OBJ || prevState !== nextState || force) {
					if (prevProps !== nextProps || nextProps === EMPTY_OBJ) {
						if (!isUndefined(this.componentWillReceiveProps) && !fromSetState) {
							this._blockRender = true;
							this.componentWillReceiveProps(nextProps, context);
							this._blockRender = false;
						}
						if (this._pendingSetState) {
							nextState = combineFrom(nextState, this._pendingState);
							this._pendingSetState = false;
							this._pendingState = null;
						}
					}

					/* Update if scu is not defined, or it returns truthy value or force */
					if (isUndefined(this.shouldComponentUpdate) || this.shouldComponentUpdate(nextProps, nextState, context) || force) {
						if (!isUndefined(this.componentWillUpdate)) {
							this._blockSetState = true;
							this.componentWillUpdate(nextProps, nextState, context);
							this._blockSetState = false;
						}

						this.props = nextProps;
						this.state = nextState;
						this.context = context;

						if (options.beforeRender) {
							options.beforeRender(this);
						}
						var render$$1 = this.render(nextProps, nextState, context);

						if (options.afterRender) {
							options.afterRender(this);
						}

						return render$$1;
					} else {
						this.props = nextProps;
						this.state = nextState;
						this.context = context;
					}
				}
				return NO_OP;
			}
		}]);
		return Component;
	}();

	var componentHooks = new Set();
	componentHooks.add('onComponentWillMount');
	componentHooks.add('onComponentDidMount');
	componentHooks.add('onComponentWillUnmount');
	componentHooks.add('onComponentShouldUpdate');
	componentHooks.add('onComponentWillUpdate');
	componentHooks.add('onComponentDidUpdate');

	function createElement(type, props) {
		if (isInvalid(type) || isObject(type)) {
			throw new Error('Helium Error: createElement() name parameter cannot be undefined, null, false or true, It must be a string, class or function.');
		}

		for (var _len = arguments.length, _children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
			_children[_key - 2] = arguments[_key];
		}

		var children = _children;
		var ref = null;
		var key = null;
		var flags = 0;
		var newProps = void 0;

		if (_children) {
			if (_children.length === 1) {
				children = _children[0];
			} else if (_children.length === 0) {
				children = void 0;
			}
		}
		if (isString(type)) {
			flags = VNodeFlags.HtmlElement;

			if (!isNullOrUndef(props)) {
				newProps = {};

				for (var prop in props) {
					if (prop === 'key') {
						key = props.key;
					} else if (prop === 'children' && isUndefined(children)) {
						children = props.children; // always favour children args, default to props
					} else if (prop === 'ref') {
						ref = props.ref;
					} else {
						newProps[prop] = props[prop];
					}
				}
			}
		} else {
			flags = VNodeFlags.ComponentUnknown;
			if (!isUndefined(children)) {
				if (!props) {
					props = {};
				}
				props.children = children;
				children = null;
			}

			if (!isNullOrUndef(props)) {
				newProps = {};

				for (var _prop in props) {
					if (componentHooks.has(_prop)) {
						if (!ref) {
							ref = {};
						}
						ref[_prop] = props[_prop];
					} else if (_prop === 'key') {
						key = props.key;
					} else {
						newProps[_prop] = props[_prop];
					}
				}
			}
		}
		return createVNode(flags, type, children, newProps, key, ref);
	}

	var Container = function () {
		function Container() {
			classCallCheck(this, Container);

			this.el = new PIXI.Container();
		}

		createClass(Container, [{
			key: 'setAttribute',
			value: function setAttribute(key, value) {
				if (key !== 'width' && key !== 'height') {
					this.el[key] = value;
				}
			}
		}, {
			key: 'removeAttribute',
			value: function removeAttribute() {}
		}, {
			key: 'updateChildren',
			value: function updateChildren(children) {
				this.el.children = [];
				for (var i = 0, len = children.length; i < len; i++) {
					this.el.addChild(children[i].tagInstance.el);
				}
			}
		}]);
		return Container;
	}();

	var Sprite = function () {
		function Sprite() {
			classCallCheck(this, Sprite);

			this.el = new PIXI.Sprite();
		}

		createClass(Sprite, [{
			key: "setAttribute",
			value: function setAttribute(key, value) {
				this.el[key] = value;
			}
		}, {
			key: "removeAttribute",
			value: function removeAttribute() {}
		}, {
			key: "updateChildren",
			value: function updateChildren(children) {
				this.el.children = [];
				for (var i = 0, len = children.length; i < len; i++) {
					this.el.addChild(children[i].tagInstance.el);
				}
			}
		}]);
		return Sprite;
	}();

	var Graphics = function () {
		function Graphics() {
			classCallCheck(this, Graphics);

			this.el = new PIXI.Graphics();
		}

		createClass(Graphics, [{
			key: 'setAttribute',
			value: function setAttribute(key, value) {
				if (key !== 'draw') {
					this.el[key] = value;
				} else if (value) {
					value(this.el);
				}
			}
		}, {
			key: 'removeAttribute',
			value: function removeAttribute() {}
		}, {
			key: 'updateChildren',
			value: function updateChildren(children) {
				this.el.children = [];
				for (var i = 0, len = children.length; i < len; i++) {
					this.el.addChild(children[i].tagInstance.el);
				}
			}
		}]);
		return Graphics;
	}();

	var Text$1 = function () {
		function Text() {
			classCallCheck(this, Text);

			this.el = new PIXI.Text();
		}

		createClass(Text, [{
			key: "setAttribute",
			value: function setAttribute(key, value) {
				this.el[key] = value;
			}
		}, {
			key: "removeAttribute",
			value: function removeAttribute() {}
		}, {
			key: "updateChildren",
			value: function updateChildren(children) {
				this.el.children = [];
				for (var i = 0, len = children.length; i < len; i++) {
					this.el.addChild(children[i].tagInstance.el);
				}
			}
		}]);
		return Text;
	}();

	function importPixiBaseView() {
		registerBaseView('Container', Container);
		registerBaseView('Sprite', Sprite);
		registerBaseView('Graphics', Graphics);
		registerBaseView('Text', Text$1);
	}

	var HELIUM_STATICS = {
		childContextTypes: true,
		contextTypes: true,
		defaultProps: true,
		displayName: true,
		getDefaultProps: true,
		propTypes: true,
		type: true
	};

	var KNOWN_STATICS = {
		name: true,
		length: true,
		prototype: true,
		caller: true,
		arguments: true,
		arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
		if (typeof sourceComponent !== 'string') {
			// don't hoist over string (html) components
			var keys = Object.getOwnPropertyNames(sourceComponent);

			/* istanbul ignore else */
			if (isGetOwnPropertySymbolsAvailable) {
				keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
			}

			for (var i = 0; i < keys.length; ++i) {
				if (!HELIUM_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
					try {
						targetComponent[keys[i]] = sourceComponent[keys[i]];
					} catch (error) {
						console.error(error); // eslint-disable-line
					}
				}
			}
		}

		return targetComponent;
	}

	// From https://github.com/lodash/lodash/blob/es
	function overArg(func, transform) {
		return function (arg) {
			return func(transform(arg));
		};
	}

	var getPrototype = overArg(Object.getPrototypeOf, Object);

	function isObjectLike(value) {
		return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
	}

	var objectTag = '[object Object]';
	var funcProto = Function.prototype;
	var objectProto = Object.prototype;

	var funcToString = funcProto.toString;
	var hasOwnProperty = objectProto.hasOwnProperty;
	var objectCtorString = funcToString.call(Object);
	var objectToString = objectProto.toString;

	function isPlainObject(value) {
		if (!isObjectLike(value) || objectToString.call(value) !== objectTag) {
			return false;
		}
		var proto = getPrototype(value);
		if (proto === null) {
			return true;
		}
		var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
		return typeof Ctor === 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) === objectCtorString;
	}

	var bindActionCreators = Redux.bindActionCreators;

	/**
  * Prints a warning in the console if it exists.
  *
  * @param {String} message The warning message.
  * @returns {void}
  */
	function warning$1(message) {
		/* eslint-disable no-console */
		if (typeof console !== 'undefined' && typeof console.error === 'function') {
			// tslint:disable-next-line:no-console
			console.error(message);
		}

		try {
			// This error was thrown as a convenience so that if you enable
			// "break on all exceptions" in your console,
			// it would pause the execution at this line.
			throw new Error(message);

			// tslint:disable-next-line:no-empty
		} catch (e) {} // eslint-disable-line
	}

	function shallowEqual(objA, objB) {
		if (objA === objB) {
			return true;
		}
		var keysA = Object.keys(objA);
		var keysB = Object.keys(objB);

		if (keysA.length !== keysB.length) {
			return false;
		}
		// Test for A's keys different from B.
		var hasOwn = Object.prototype.hasOwnProperty;
		for (var i = 0, len = keysA.length; i < len; i++) {
			var key = keysA[i];

			if (!hasOwn.call(objB, key) || objA[key] !== objB[key]) {
				return false;
			}
		}
		return true;
	}

	function wrapActionCreators(actionCreators) {
		return function (dispatch) {
			return bindActionCreators(actionCreators, dispatch);
		};
	}

	var errorObject = { value: null };
	var defaultMapStateToProps = function defaultMapStateToProps(state) {
		return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
		return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
		var obj = {};

		if (parentProps) {
			for (var key in parentProps) {
				obj[key] = parentProps[key];
			}
		}

		if (stateProps) {
			for (var _key in stateProps) {
				obj[_key] = stateProps[_key];
			}
		}

		if (dispatchProps) {
			for (var _key2 in dispatchProps) {
				obj[_key2] = dispatchProps[_key2];
			}
		}

		return obj;
	};

	function tryCatch(fn, ctx) {
		try {
			return fn.apply(ctx);
		} catch (e) {
			errorObject.value = e;
			return errorObject;
		}
	}

	function getDisplayName(WrappedComponent) {
		return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
		var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

		var shouldSubscribe = Boolean(mapStateToProps);
		var mapState = mapStateToProps || defaultMapStateToProps;
		var mapDispatch = void 0;

		if (isFunction(mapDispatchToProps)) {
			mapDispatch = mapDispatchToProps;
		} else if (!mapDispatchToProps) {
			mapDispatch = defaultMapDispatchToProps;
		} else {
			mapDispatch = wrapActionCreators(mapDispatchToProps);
		}
		var finalMergeProps = mergeProps || defaultMergeProps;
		var _options$pure = options.pure,
		    pure = _options$pure === undefined ? true : _options$pure,
		    _options$withRef = options.withRef,
		    withRef = _options$withRef === undefined ? false : _options$withRef;

		var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;
		// Helps track hot reloading.
		var version = nextVersion++;

		return function wrapWithConnect(WrappedComponent) {
			var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

			function checkStateShape(props, methodName) {
				if (!isPlainObject(props)) {
					warning$1(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
				}
			}

			function computeMergedProps(stateProps, dispatchProps, parentProps) {
				var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
				if (process.env.NODE_ENV !== 'production') {
					checkStateShape(mergedProps, 'mergeProps');
				}
				return mergedProps;
			}

			var Connect = function (_Component) {
				inherits(Connect, _Component);

				function Connect(props, context) {
					classCallCheck(this, Connect);

					var _this = possibleConstructorReturn(this, (Connect.__proto__ || Object.getPrototypeOf(Connect)).call(this, props, context));

					_this.version = version;
					_this.wrappedInstance = null;
					_this.store = props && props.store || context && context.store;

					if (!_this.store) {
						throwError('Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));
					}

					var storeState = _this.store.getState();
					_this.state = { storeState: storeState };
					_this.clearCache();
					return _this;
				}

				createClass(Connect, [{
					key: 'componentDidMount',
					value: function componentDidMount() {
						this.trySubscribe();
					}
				}, {
					key: 'shouldComponentUpdate',
					value: function shouldComponentUpdate() {
						return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
					}
				}, {
					key: 'computeStateProps',
					value: function computeStateProps(store, props) {
						if (!this.finalMapStateToProps) {
							return this.configureFinalMapState(store, props);
						}
						var state = store.getState();
						var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

						return stateProps;
					}
				}, {
					key: 'configureFinalMapState',
					value: function configureFinalMapState(store, props) {
						var mappedState = mapState(store.getState(), props);
						var isFactory = isFunction(mappedState);

						this.finalMapStateToProps = isFactory ? mappedState : mapState;
						this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;
						if (isFactory) {
							return this.computeStateProps(store, props);
						}
						return mappedState;
					}
				}, {
					key: 'computeDispatchProps',
					value: function computeDispatchProps(store, props) {
						if (!this.finalMapDispatchToProps) {
							return this.configureFinalMapDispatch(store, props);
						}
						var dispatch = store.dispatch;

						return this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);
					}
				}, {
					key: 'configureFinalMapDispatch',
					value: function configureFinalMapDispatch(store, props) {
						var mappedDispatch = mapDispatch(store.dispatch, props);
						var isFactory = isFunction(mappedDispatch);

						this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
						this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

						if (isFactory) {
							return this.computeDispatchProps(store, props);
						}
						return mappedDispatch;
					}
				}, {
					key: 'updateStatePropsIfNeeded',
					value: function updateStatePropsIfNeeded() {
						var nextStateProps = this.computeStateProps(this.store, this.props);

						if (this.stateProps && shallowEqual(nextStateProps, this.stateProps)) {
							return false;
						}
						this.stateProps = nextStateProps;
						return true;
					}
				}, {
					key: 'updateDispatchPropsIfNeeded',
					value: function updateDispatchPropsIfNeeded() {
						var nextDispatchProps = this.computeDispatchProps(this.store, this.props);

						if (this.dispatchProps && shallowEqual(nextDispatchProps, this.dispatchProps)) {
							return false;
						}
						this.dispatchProps = nextDispatchProps;
						return true;
					}
				}, {
					key: 'updateMergedPropsIfNeeded',
					value: function updateMergedPropsIfNeeded() {
						var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);

						if (this.mergedProps && checkMergedEquals && shallowEqual(nextMergedProps, this.mergedProps)) {
							return false;
						}
						this.mergedProps = nextMergedProps;
						return true;
					}
				}, {
					key: 'isSubscribed',
					value: function isSubscribed() {
						return isFunction(this.unsubscribe);
					}
				}, {
					key: 'trySubscribe',
					value: function trySubscribe() {
						if (shouldSubscribe && !this.unsubscribe) {
							this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
							this.handleChange();
						}
					}
				}, {
					key: 'tryUnsubscribe',
					value: function tryUnsubscribe() {
						if (this.unsubscribe) {
							this.unsubscribe();
							this.unsubscribe = null;
						}
					}
				}, {
					key: 'componentWillReceiveProps',
					value: function componentWillReceiveProps(nextProps) {
						if (!pure || !shallowEqual(nextProps, this.props)) {
							this.haveOwnPropsChanged = true;
						}
					}
				}, {
					key: 'componentWillUnmount',
					value: function componentWillUnmount() {
						this.tryUnsubscribe();
						this.clearCache();
					}
				}, {
					key: 'clearCache',
					value: function clearCache() {
						this.dispatchProps = null;
						this.stateProps = null;
						this.mergedProps = null;
						this.haveOwnPropsChanged = true;
						this.hasStoreStateChanged = true;
						this.haveStatePropsBeenPrecalculated = false;
						this.statePropsPrecalculationError = null;
						this.renderedElement = null;
						this.finalMapDispatchToProps = null;
						this.finalMapStateToProps = null;
					}
				}, {
					key: 'handleChange',
					value: function handleChange() {
						if (!this.unsubscribe) {
							return;
						}
						var storeState = this.store.getState();
						var prevStoreState = this.state.storeState;

						if (pure && prevStoreState === storeState) {
							return;
						}
						if (pure && !this.doStatePropsDependOnOwnProps) {
							var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
							if (!haveStatePropsChanged) {
								return;
							}
							if (haveStatePropsChanged === errorObject) {
								this.statePropsPrecalculationError = errorObject.value;
							}
							this.haveStatePropsBeenPrecalculated = true;
						}
						this.hasStoreStateChanged = true;
						this.setState({ storeState: storeState });
					}
				}, {
					key: 'getWrappedInstance',
					value: function getWrappedInstance() {
						return this.wrappedInstance;
					}
				}, {
					key: 'render',
					value: function render() {
						var _this2 = this;

						var haveOwnPropsChanged = this.haveOwnPropsChanged,
						    hasStoreStateChanged = this.hasStoreStateChanged,
						    haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated,
						    statePropsPrecalculationError = this.statePropsPrecalculationError,
						    renderedElement = this.renderedElement;

						this.haveOwnPropsChanged = false;
						this.hasStoreStateChanged = false;
						this.haveStatePropsBeenPrecalculated = false;
						this.statePropsPrecalculationError = null;

						if (statePropsPrecalculationError) {
							throw statePropsPrecalculationError;
						}
						var shouldUpdateStateProps = true;
						var shouldUpdateDispatchProps = true;

						if (pure && renderedElement) {
							shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
							shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
						}
						var haveStatePropsChanged = false;
						var haveDispatchPropsChanged = false;

						if (haveStatePropsBeenPrecalculated) {
							haveStatePropsChanged = true;
						} else if (shouldUpdateStateProps) {
							haveStatePropsChanged = this.updateStatePropsIfNeeded();
						}
						if (shouldUpdateDispatchProps) {
							haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
						}
						var haveMergedPropsChanged = true;

						if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
							haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
						} else {
							haveMergedPropsChanged = false;
						}

						if (!haveMergedPropsChanged && renderedElement) {
							return renderedElement;
						}
						if (withRef) {
							this.renderedElement = createElement(WrappedComponent, combineFrom(this.mergedProps, { ref: function ref(instance) {
									return _this2.wrappedInstance = instance;
								} }));
						} else {
							this.renderedElement = createElement(WrappedComponent, this.mergedProps);
						}
						return this.renderedElement;
					}
				}]);
				return Connect;
			}(Component);

			Connect.displayName = connectDisplayName;
			Connect.WrappedComponent = WrappedComponent;
			return hoistNonReactStatics(Connect, WrappedComponent);
		};
	}

	var Provider = function (_Component) {
		inherits(Provider, _Component);

		function Provider(props, context) {
			classCallCheck(this, Provider);

			var _this = possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).call(this, props, context));

			_this.store = props.store;
			return _this;
		}

		createClass(Provider, [{
			key: 'getChildContext',
			value: function getChildContext() {
				return { store: this.store };
			}
		}, {
			key: 'render',
			value: function render(props) {
				if (isNullOrUndef(this.props.children) || toArray$$1(this.props.children).length !== 1) {
					throw Error('Inferno Error: Only one child is allowed within the `Provider` component');
				}

				return props.children;
			}
		}]);
		return Provider;
	}(Component);

	exports.VNodeFlags = VNodeFlags;
	exports.createElement = createElement;
	exports.Component = Component;
	exports.registerBaseView = registerBaseView;
	exports.HOM = HOM;
	exports.render = render;
	exports.createVNode = createVNode;
	exports.directClone = directClone;
	exports.options = options;
	exports.importPixiBaseView = importPixiBaseView;
	exports.NO_OP = NO_OP;
	exports.ERROR_MSG = ERROR_MSG;
	exports.isBrowser = isBrowser;
	exports.isArray = isArray;
	exports.toArray = toArray$$1;
	exports.isUndefined = isUndefined;
	exports.isNull = isNull;
	exports.isStringOrNumber = isStringOrNumber;
	exports.isTrue = isTrue;
	exports.isFunction = isFunction;
	exports.isString = isString;
	exports.isNumber = isNumber;
	exports.isNullOrUndef = isNullOrUndef;
	exports.isInvalid = isInvalid;
	exports.isObject = isObject;
	exports.isStatefulComponent = isStatefulComponent;
	exports.throwError = throwError;
	exports.warning = warning;
	exports.combineFrom = combineFrom;
	exports.Lifecycle = Lifecycle;
	exports.ANIMATION_KEY = ANIMATION_KEY;
	exports.registerAnimationDOM = registerAnimationDOM;
	exports.removeAnimationDOM = removeAnimationDOM;
	exports.patchAnimation = patchAnimation;
	exports.Provider = Provider;
	exports.connect = connect;

	Object.defineProperty(exports, '__esModule', { value: true });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = __webpack_require__(0);
var options_1 = __webpack_require__(6);
var VNodes_1 = __webpack_require__(7);
var constants_1 = __webpack_require__(15);
var mounting_1 = __webpack_require__(16);
var unmounting_1 = __webpack_require__(17);
// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
exports.EMPTY_OBJ = {};
if (process.env.NODE_ENV !== 'production') {
    Object.freeze(exports.EMPTY_OBJ);
}
function createClassComponentInstance(vNode, Component, props, context, isSVG, lifecycle) {
    if (inferno_shared_1.isUndefined(context)) {
        context = exports.EMPTY_OBJ; // Context should not be mutable
    }
    var instance = new Component(props, context);
    vNode.children = instance;
    instance._blockSetState = false;
    instance.context = context;
    if (instance.props === exports.EMPTY_OBJ) {
        instance.props = props;
    }
    // setState callbacks must fire after render is done when called from componentWillReceiveProps or componentWillMount
    instance._lifecycle = lifecycle;
    instance._unmounted = false;
    instance._pendingSetState = true;
    instance._isSVG = isSVG;
    if (!inferno_shared_1.isUndefined(instance.componentWillMount)) {
        instance._blockRender = true;
        instance.componentWillMount();
        instance._blockRender = false;
    }
    var childContext;
    if (!inferno_shared_1.isUndefined(instance.getChildContext)) {
        childContext = instance.getChildContext();
    }
    if (inferno_shared_1.isNullOrUndef(childContext)) {
        instance._childContext = context;
    }
    else {
        instance._childContext = inferno_shared_1.combineFrom(context, childContext);
    }
    if (!inferno_shared_1.isNull(options_1.options.beforeRender)) {
        options_1.options.beforeRender(instance);
    }
    var input = instance.render(props, instance.state, context);
    if (!inferno_shared_1.isNull(options_1.options.afterRender)) {
        options_1.options.afterRender(instance);
    }
    if (inferno_shared_1.isArray(input)) {
        if (process.env.NODE_ENV !== 'production') {
            inferno_shared_1.throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
        }
        inferno_shared_1.throwError();
    }
    else if (inferno_shared_1.isInvalid(input)) {
        input = VNodes_1.createVoidVNode();
    }
    else if (inferno_shared_1.isStringOrNumber(input)) {
        input = VNodes_1.createTextVNode(input, null);
    }
    else {
        if (input.dom) {
            input = VNodes_1.directClone(input);
        }
        if (input.flags & 28 /* Component */) {
            // if we have an input that is also a component, we run into a tricky situation
            // where the root vNode needs to always have the correct DOM entry
            // so we break monomorphism on our input and supply it our vNode as parentVNode
            // we can optimise this in the future, but this gets us out of a lot of issues
            input.parentVNode = vNode;
        }
    }
    instance._pendingSetState = false;
    instance._lastInput = input;
    return instance;
}
exports.createClassComponentInstance = createClassComponentInstance;
function replaceLastChildAndUnmount(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling) {
    replaceVNode(parentDom, mounting_1.mount(nextInput, null, lifecycle, context, isSVG), lastInput, lifecycle, isRecycling);
}
exports.replaceLastChildAndUnmount = replaceLastChildAndUnmount;
function replaceVNode(parentDom, dom, vNode, lifecycle, isRecycling) {
    unmounting_1.unmount(vNode, null, lifecycle, false, isRecycling);
    replaceChild(parentDom, dom, vNode.dom);
}
exports.replaceVNode = replaceVNode;
function createFunctionalComponentInput(vNode, component, props, context) {
    var input = component(props, context);
    if (inferno_shared_1.isArray(input)) {
        if (process.env.NODE_ENV !== 'production') {
            inferno_shared_1.throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
        }
        inferno_shared_1.throwError();
    }
    else if (inferno_shared_1.isInvalid(input)) {
        input = VNodes_1.createVoidVNode();
    }
    else if (inferno_shared_1.isStringOrNumber(input)) {
        input = VNodes_1.createTextVNode(input, null);
    }
    else {
        if (input.dom) {
            input = VNodes_1.directClone(input);
        }
        if (input.flags & 28 /* Component */) {
            // if we have an input that is also a component, we run into a tricky situation
            // where the root vNode needs to always have the correct DOM entry
            // so we break monomorphism on our input and supply it our vNode as parentVNode
            // we can optimise this in the future, but this gets us out of a lot of issues
            input.parentVNode = vNode;
        }
    }
    return input;
}
exports.createFunctionalComponentInput = createFunctionalComponentInput;
function setTextContent(dom, text) {
    if (text !== '') {
        dom.textContent = text;
    }
    else {
        dom.appendChild(document.createTextNode(''));
    }
}
exports.setTextContent = setTextContent;
function updateTextContent(dom, text) {
    dom.firstChild.nodeValue = text;
}
exports.updateTextContent = updateTextContent;
function appendChild(parentDom, dom) {
    parentDom.appendChild(dom);
}
exports.appendChild = appendChild;
function insertOrAppend(parentDom, newNode, nextNode) {
    if (inferno_shared_1.isNullOrUndef(nextNode)) {
        appendChild(parentDom, newNode);
    }
    else {
        parentDom.insertBefore(newNode, nextNode);
    }
}
exports.insertOrAppend = insertOrAppend;
function documentCreateElement(tag, isSVG) {
    if (isSVG === true) {
        return document.createElementNS(constants_1.svgNS, tag);
    }
    else {
        return document.createElement(tag);
    }
}
exports.documentCreateElement = documentCreateElement;
function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    unmounting_1.unmount(lastNode, null, lifecycle, false, isRecycling);
    var dom = mounting_1.mount(nextNode, null, lifecycle, context, isSVG);
    nextNode.dom = dom;
    replaceChild(parentDom, dom, lastNode.dom);
}
exports.replaceWithNewNode = replaceWithNewNode;
function replaceChild(parentDom, nextDom, lastDom) {
    if (!parentDom) {
        parentDom = lastDom.parentNode;
    }
    parentDom.replaceChild(nextDom, lastDom);
}
exports.replaceChild = replaceChild;
function removeChild(parentDom, dom) {
    parentDom.removeChild(dom);
}
exports.removeChild = removeChild;
function removeAllChildren(dom, children, lifecycle, isRecycling) {
    if (!options_1.options.recyclingEnabled || (options_1.options.recyclingEnabled && !isRecycling)) {
        removeChildren(null, children, lifecycle, isRecycling);
    }
    dom.textContent = '';
}
exports.removeAllChildren = removeAllChildren;
function removeChildren(dom, children, lifecycle, isRecycling) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        if (!inferno_shared_1.isInvalid(child)) {
            unmounting_1.unmount(child, dom, lifecycle, true, isRecycling);
        }
    }
}
exports.removeChildren = removeChildren;
function isKeyed(lastChildren, nextChildren) {
    return nextChildren.length > 0 && !inferno_shared_1.isNullOrUndef(nextChildren[0]) && !inferno_shared_1.isNullOrUndef(nextChildren[0].key)
        && lastChildren.length > 0 && !inferno_shared_1.isNullOrUndef(lastChildren[0]) && !inferno_shared_1.isNullOrUndef(lastChildren[0].key);
}
exports.isKeyed = isKeyed;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValue = getValue;
exports.getTextWidth = getTextWidth;
exports.getValueText = getValueText;
exports.getSuitImagePath = getSuitImagePath;

var _constants = __webpack_require__(9);

var SuitMap = new Map();
SuitMap.set(_constants.Suit.Spade, 'assets/image/sym-spade.png');
SuitMap.set(_constants.Suit.Heart, 'assets/image/sym-heart.png');
SuitMap.set(_constants.Suit.Club, 'assets/image/sym-club.png');
SuitMap.set(_constants.Suit.Diamond, 'assets/image/sym-diamond.png');

function getValue(valueInDefault, currentValue, defaultValue) {
  var ratio = currentValue / defaultValue;
  return Math.floor(valueInDefault * ratio);
}

var textEl = new PIXI.Text();

function getTextWidth(text, style) {
  textEl.style = style;
  textEl.text = text;
  return textEl.width;
}

function getValueText(value) {
  if (value === 1) {
    return 'A';
  } else if (value === 11) {
    return 'J';
  } else if (value === 12) {
    return 'Q';
  } else if (value === 13) {
    return 'K';
  }
  return value;
}

function getSuitImagePath(suit) {
  return SuitMap.get(suit);
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.options = {
    afterMount: null,
    afterRender: null,
    afterUpdate: null,
    beforeRender: null,
    beforeUnmount: null,
    createVNode: null,
    findDOMNodeEnabled: false,
    recyclingEnabled: false,
    roots: []
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(4);
var normalization_1 = __webpack_require__(23);
var options_1 = __webpack_require__(6);
function VNode(children, className, flags, key, props, ref, type) {
    this.children = children;
    this.className = className;
    this.dom = null;
    this.flags = flags;
    this.key = key;
    this.props = props;
    this.ref = ref;
    this.type = type;
}
/**
 * Creates virtual node
 * @param {number} flags
 * @param {string|Function|null} type
 * @param {string|null=} className
 * @param {object=} children
 * @param {object=} props
 * @param {*=} key
 * @param {object|Function=} ref
 * @param {boolean=} noNormalise
 * @returns {VNode} returns new virtual node
 */
function createVNode(flags, type, className, children, props, key, ref, noNormalise) {
    if (flags & 16 /* ComponentUnknown */) {
        flags = inferno_shared_1.isStatefulComponent(type) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
    }
    var vNode = new VNode(children === void 0 ? null : children, className === void 0 ? null : className, flags, key === void 0 ? null : key, props === void 0 ? null : props, ref === void 0 ? null : ref, type);
    if (noNormalise !== true) {
        normalization_1.normalize(vNode);
    }
    if (options_1.options.createVNode !== null) {
        options_1.options.createVNode(vNode);
    }
    return vNode;
}
exports.createVNode = createVNode;
function directClone(vNodeToClone) {
    var newVNode;
    var flags = vNodeToClone.flags;
    if (flags & 28 /* Component */) {
        var props = void 0;
        var propsToClone = vNodeToClone.props;
        if (inferno_shared_1.isNull(propsToClone)) {
            props = utils_1.EMPTY_OBJ;
        }
        else {
            props = {};
            for (var key in propsToClone) {
                props[key] = propsToClone[key];
            }
        }
        newVNode = createVNode(flags, vNodeToClone.type, null, null, props, vNodeToClone.key, vNodeToClone.ref, true);
        var newProps = newVNode.props;
        var newChildren = newProps.children;
        // we need to also clone component children that are in props
        // as the children may also have been hoisted
        if (newChildren) {
            if (inferno_shared_1.isArray(newChildren)) {
                var len = newChildren.length;
                if (len > 0) {
                    var tmpArray = [];
                    for (var i = 0; i < len; i++) {
                        var child = newChildren[i];
                        if (inferno_shared_1.isStringOrNumber(child)) {
                            tmpArray.push(child);
                        }
                        else if (!inferno_shared_1.isInvalid(child) && isVNode(child)) {
                            tmpArray.push(directClone(child));
                        }
                    }
                    newProps.children = tmpArray;
                }
            }
            else if (isVNode(newChildren)) {
                newProps.children = directClone(newChildren);
            }
        }
        newVNode.children = null;
    }
    else if (flags & 3970 /* Element */) {
        var children = vNodeToClone.children;
        var props = void 0;
        var propsToClone = vNodeToClone.props;
        if (propsToClone === null) {
            props = utils_1.EMPTY_OBJ;
        }
        else {
            props = {};
            for (var key in propsToClone) {
                props[key] = propsToClone[key];
            }
        }
        newVNode = createVNode(flags, vNodeToClone.type, vNodeToClone.className, children, props, vNodeToClone.key, vNodeToClone.ref, !children);
    }
    else if (flags & 1 /* Text */) {
        newVNode = createTextVNode(vNodeToClone.children, vNodeToClone.key);
    }
    return newVNode;
}
exports.directClone = directClone;
/*
 directClone is preferred over cloneVNode and used internally also.
 This function makes Inferno backwards compatible.
 And can be tree-shaked by modern bundlers

 Would be nice to combine this with directClone but could not do it without breaking change
 */
/**
 * Clones given virtual node by creating new instance of it
 * @param {VNode} vNodeToClone virtual node to be cloned
 * @param {Props=} props additional props for new virtual node
 * @param {...*} _children new children for new virtual node
 * @returns {VNode} new virtual node
 */
function cloneVNode(vNodeToClone, props) {
    var _children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _children[_i - 2] = arguments[_i];
    }
    var children = _children;
    var childrenLen = _children.length;
    if (childrenLen > 0 && !inferno_shared_1.isUndefined(_children[0])) {
        if (!props) {
            props = {};
        }
        if (childrenLen === 1) {
            children = _children[0];
        }
        if (!inferno_shared_1.isUndefined(children)) {
            props.children = children;
        }
    }
    var newVNode;
    if (inferno_shared_1.isArray(vNodeToClone)) {
        var tmpArray = [];
        for (var i = 0, len = vNodeToClone.length; i < len; i++) {
            tmpArray.push(directClone(vNodeToClone[i]));
        }
        newVNode = tmpArray;
    }
    else {
        var flags = vNodeToClone.flags;
        var className = vNodeToClone.className || (props && props.className);
        var key = !inferno_shared_1.isNullOrUndef(vNodeToClone.key) ? vNodeToClone.key : (props ? props.key : null);
        var ref = vNodeToClone.ref || (props ? props.ref : null);
        if (flags & 28 /* Component */) {
            newVNode = createVNode(flags, vNodeToClone.type, className, null, (!vNodeToClone.props && !props) ? utils_1.EMPTY_OBJ : inferno_shared_1.combineFrom(vNodeToClone.props, props), key, ref, true);
            var newProps = newVNode.props;
            if (newProps) {
                var newChildren = newProps.children;
                // we need to also clone component children that are in props
                // as the children may also have been hoisted
                if (newChildren) {
                    if (inferno_shared_1.isArray(newChildren)) {
                        var len = newChildren.length;
                        if (len > 0) {
                            var tmpArray = [];
                            for (var i = 0; i < len; i++) {
                                var child = newChildren[i];
                                if (inferno_shared_1.isStringOrNumber(child)) {
                                    tmpArray.push(child);
                                }
                                else if (!inferno_shared_1.isInvalid(child) && isVNode(child)) {
                                    tmpArray.push(directClone(child));
                                }
                            }
                            newProps.children = tmpArray;
                        }
                    }
                    else if (isVNode(newChildren)) {
                        newProps.children = directClone(newChildren);
                    }
                }
            }
            newVNode.children = null;
        }
        else if (flags & 3970 /* Element */) {
            children = (props && !inferno_shared_1.isUndefined(props.children)) ? props.children : vNodeToClone.children;
            newVNode = createVNode(flags, vNodeToClone.type, className, children, (!vNodeToClone.props && !props) ? utils_1.EMPTY_OBJ : inferno_shared_1.combineFrom(vNodeToClone.props, props), key, ref, !children);
        }
        else if (flags & 1 /* Text */) {
            newVNode = createTextVNode(vNodeToClone.children, key);
        }
    }
    return newVNode;
}
exports.cloneVNode = cloneVNode;
function createVoidVNode() {
    return createVNode(4096 /* Void */, null);
}
exports.createVoidVNode = createVoidVNode;
function createTextVNode(text, key) {
    return createVNode(1 /* Text */, null, null, text, null, key);
}
exports.createTextVNode = createTextVNode;
function isVNode(o) {
    return !!o.flags;
}
exports.isVNode = isVNode;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = __webpack_require__(0);
var options_1 = __webpack_require__(6);
var VNodes_1 = __webpack_require__(7);
var constants_1 = __webpack_require__(15);
var delegation_1 = __webpack_require__(70);
var mounting_1 = __webpack_require__(16);
var rendering_1 = __webpack_require__(12);
var unmounting_1 = __webpack_require__(17);
var utils_1 = __webpack_require__(4);
var processElement_1 = __webpack_require__(18);
function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    if (lastVNode !== nextVNode) {
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        if (nextFlags & 28 /* Component */) {
            var isClass = (nextFlags & 4 /* ComponentClass */) > 0;
            if (lastFlags & 28 /* Component */) {
                patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling);
            }
            else {
                utils_1.replaceVNode(parentDom, mounting_1.mountComponent(nextVNode, null, lifecycle, context, isSVG, isClass), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 3970 /* Element */) {
            if (lastFlags & 3970 /* Element */) {
                patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
            }
            else {
                utils_1.replaceVNode(parentDom, mounting_1.mountElement(nextVNode, null, lifecycle, context, isSVG), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 1 /* Text */) {
            if (lastFlags & 1 /* Text */) {
                patchText(lastVNode, nextVNode);
            }
            else {
                utils_1.replaceVNode(parentDom, mounting_1.mountText(nextVNode, null), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 4096 /* Void */) {
            if (lastFlags & 4096 /* Void */) {
                patchVoid(lastVNode, nextVNode);
            }
            else {
                utils_1.replaceVNode(parentDom, mounting_1.mountVoid(nextVNode, null), lastVNode, lifecycle, isRecycling);
            }
        }
        else {
            // Error case: mount new one replacing old one
            utils_1.replaceLastChildAndUnmount(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
exports.patch = patch;
function unmountChildren(children, dom, lifecycle, isRecycling) {
    if (VNodes_1.isVNode(children)) {
        unmounting_1.unmount(children, dom, lifecycle, true, isRecycling);
    }
    else if (inferno_shared_1.isArray(children)) {
        utils_1.removeAllChildren(dom, children, lifecycle, isRecycling);
    }
    else {
        dom.textContent = '';
    }
}
function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    var nextTag = nextVNode.type;
    var lastTag = lastVNode.type;
    if (lastTag !== nextTag) {
        utils_1.replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
    }
    else {
        var dom = lastVNode.dom;
        var lastProps = lastVNode.props;
        var nextProps = nextVNode.props;
        var lastChildren = lastVNode.children;
        var nextChildren = nextVNode.children;
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        var nextRef = nextVNode.ref;
        var lastClassName = lastVNode.className;
        var nextClassName = nextVNode.className;
        nextVNode.dom = dom;
        isSVG = isSVG || (nextFlags & 128 /* SvgElement */) > 0;
        if (lastChildren !== nextChildren) {
            patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
        // inlined patchProps  -- starts --
        if (lastProps !== nextProps) {
            var lastPropsOrEmpty = lastProps || utils_1.EMPTY_OBJ;
            var nextPropsOrEmpty = nextProps || utils_1.EMPTY_OBJ;
            var hasControlledValue = false;
            if (nextPropsOrEmpty !== utils_1.EMPTY_OBJ) {
                var isFormElement = (nextFlags & 3584 /* FormElement */) > 0;
                if (isFormElement) {
                    hasControlledValue = processElement_1.isControlledFormElement(nextPropsOrEmpty);
                }
                for (var prop in nextPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    var nextValue = nextPropsOrEmpty[prop];
                    var lastValue = lastPropsOrEmpty[prop];
                    patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue);
                }
                if (isFormElement) {
                    // When inferno is recycling form element, we need to process it like it would be mounting
                    processElement_1.processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, isRecycling, hasControlledValue);
                }
            }
            if (lastPropsOrEmpty !== utils_1.EMPTY_OBJ) {
                for (var prop in lastPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    if (inferno_shared_1.isNullOrUndef(nextPropsOrEmpty[prop]) && !inferno_shared_1.isNullOrUndef(lastPropsOrEmpty[prop])) {
                        removeProp(prop, lastPropsOrEmpty[prop], dom);
                    }
                }
            }
        }
        // inlined patchProps  -- ends --
        if (lastClassName !== nextClassName) {
            if (inferno_shared_1.isNullOrUndef(nextClassName)) {
                dom.removeAttribute('class');
            }
            else {
                if (isSVG) {
                    dom.setAttribute('class', nextClassName);
                }
                else {
                    dom.className = nextClassName;
                }
            }
        }
        if (nextRef) {
            if (lastVNode.ref !== nextRef || isRecycling) {
                mounting_1.mountRef(dom, nextRef, lifecycle);
            }
        }
    }
}
exports.patchElement = patchElement;
function patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var patchArray = false;
    var patchKeyed = false;
    if (nextFlags & 64 /* HasNonKeyedChildren */) {
        patchArray = true;
    }
    else if ((lastFlags & 32 /* HasKeyedChildren */) > 0 && (nextFlags & 32 /* HasKeyedChildren */) > 0) {
        patchKeyed = true;
        patchArray = true;
    }
    else if (inferno_shared_1.isInvalid(nextChildren)) {
        unmountChildren(lastChildren, dom, lifecycle, isRecycling);
    }
    else if (inferno_shared_1.isInvalid(lastChildren)) {
        if (inferno_shared_1.isStringOrNumber(nextChildren)) {
            utils_1.setTextContent(dom, nextChildren);
        }
        else {
            if (inferno_shared_1.isArray(nextChildren)) {
                mounting_1.mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
            }
            else {
                mounting_1.mount(nextChildren, dom, lifecycle, context, isSVG);
            }
        }
    }
    else if (inferno_shared_1.isStringOrNumber(nextChildren)) {
        if (inferno_shared_1.isStringOrNumber(lastChildren)) {
            utils_1.updateTextContent(dom, nextChildren);
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            utils_1.setTextContent(dom, nextChildren);
        }
    }
    else if (inferno_shared_1.isArray(nextChildren)) {
        if (inferno_shared_1.isArray(lastChildren)) {
            patchArray = true;
            if (utils_1.isKeyed(lastChildren, nextChildren)) {
                patchKeyed = true;
            }
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            mounting_1.mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    else if (inferno_shared_1.isArray(lastChildren)) {
        utils_1.removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
        mounting_1.mount(nextChildren, dom, lifecycle, context, isSVG);
    }
    else if (VNodes_1.isVNode(nextChildren)) {
        if (VNodes_1.isVNode(lastChildren)) {
            patch(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            mounting_1.mount(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    if (patchArray) {
        if (patchKeyed) {
            patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
        else {
            patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling) {
    var lastType = lastVNode.type;
    var nextType = nextVNode.type;
    var lastKey = lastVNode.key;
    var nextKey = nextVNode.key;
    if (lastType !== nextType || lastKey !== nextKey) {
        utils_1.replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        return false;
    }
    else {
        var nextProps = nextVNode.props || utils_1.EMPTY_OBJ;
        if (isClass) {
            var instance = lastVNode.children;
            instance._updating = true;
            if (instance._unmounted) {
                if (inferno_shared_1.isNull(parentDom)) {
                    return true;
                }
                utils_1.replaceChild(parentDom, mounting_1.mountComponent(nextVNode, null, lifecycle, context, isSVG, (nextVNode.flags & 4 /* ComponentClass */) > 0), lastVNode.dom);
            }
            else {
                var hasComponentDidUpdate = !inferno_shared_1.isUndefined(instance.componentDidUpdate);
                var nextState = instance.state;
                // When component has componentDidUpdate hook, we need to clone lastState or will be modified by reference during update
                var lastState = hasComponentDidUpdate ? inferno_shared_1.combineFrom(nextState, null) : nextState;
                var lastProps = instance.props;
                var childContext = void 0;
                if (!inferno_shared_1.isUndefined(instance.getChildContext)) {
                    childContext = instance.getChildContext();
                }
                nextVNode.children = instance;
                instance._isSVG = isSVG;
                if (inferno_shared_1.isNullOrUndef(childContext)) {
                    childContext = context;
                }
                else {
                    childContext = inferno_shared_1.combineFrom(context, childContext);
                }
                var lastInput = instance._lastInput;
                var nextInput = instance._updateComponent(lastState, nextState, lastProps, nextProps, context, false, false);
                var didUpdate = true;
                instance._childContext = childContext;
                if (inferno_shared_1.isInvalid(nextInput)) {
                    nextInput = VNodes_1.createVoidVNode();
                }
                else if (nextInput === inferno_shared_1.NO_OP) {
                    nextInput = lastInput;
                    didUpdate = false;
                }
                else if (inferno_shared_1.isStringOrNumber(nextInput)) {
                    nextInput = VNodes_1.createTextVNode(nextInput, null);
                }
                else if (inferno_shared_1.isArray(nextInput)) {
                    if (process.env.NODE_ENV !== 'production') {
                        inferno_shared_1.throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
                    }
                    inferno_shared_1.throwError();
                }
                else if (inferno_shared_1.isObject(nextInput)) {
                    if (!inferno_shared_1.isNull(nextInput.dom)) {
                        nextInput = VNodes_1.directClone(nextInput);
                    }
                }
                if (nextInput.flags & 28 /* Component */) {
                    nextInput.parentVNode = nextVNode;
                }
                else if (lastInput.flags & 28 /* Component */) {
                    lastInput.parentVNode = nextVNode;
                }
                instance._lastInput = nextInput;
                instance._vNode = nextVNode;
                if (didUpdate) {
                    patch(lastInput, nextInput, parentDom, lifecycle, childContext, isSVG, isRecycling);
                    if (hasComponentDidUpdate) {
                        instance.componentDidUpdate(lastProps, lastState);
                    }
                    if (!inferno_shared_1.isNull(options_1.options.afterUpdate)) {
                        options_1.options.afterUpdate(nextVNode);
                    }
                    if (options_1.options.findDOMNodeEnabled) {
                        rendering_1.componentToDOMNodeMap.set(instance, nextInput.dom);
                    }
                }
                nextVNode.dom = nextInput.dom;
            }
            instance._updating = false;
        }
        else {
            var shouldUpdate = true;
            var lastProps = lastVNode.props;
            var nextHooks = nextVNode.ref;
            var nextHooksDefined = !inferno_shared_1.isNullOrUndef(nextHooks);
            var lastInput = lastVNode.children;
            var nextInput = lastInput;
            nextVNode.dom = lastVNode.dom;
            nextVNode.children = lastInput;
            if (lastKey !== nextKey) {
                shouldUpdate = true;
            }
            else {
                if (nextHooksDefined && !inferno_shared_1.isNullOrUndef(nextHooks.onComponentShouldUpdate)) {
                    shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps, nextProps);
                }
            }
            if (shouldUpdate !== false) {
                if (nextHooksDefined && !inferno_shared_1.isNullOrUndef(nextHooks.onComponentWillUpdate)) {
                    nextHooks.onComponentWillUpdate(lastProps, nextProps);
                }
                nextInput = nextType(nextProps, context);
                if (inferno_shared_1.isInvalid(nextInput)) {
                    nextInput = VNodes_1.createVoidVNode();
                }
                else if (inferno_shared_1.isStringOrNumber(nextInput) && nextInput !== inferno_shared_1.NO_OP) {
                    nextInput = VNodes_1.createTextVNode(nextInput, null);
                }
                else if (inferno_shared_1.isArray(nextInput)) {
                    if (process.env.NODE_ENV !== 'production') {
                        inferno_shared_1.throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
                    }
                    inferno_shared_1.throwError();
                }
                else if (inferno_shared_1.isObject(nextInput)) {
                    if (!inferno_shared_1.isNull(nextInput.dom)) {
                        nextInput = VNodes_1.directClone(nextInput);
                    }
                }
                if (nextInput !== inferno_shared_1.NO_OP) {
                    patch(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling);
                    nextVNode.children = nextInput;
                    if (nextHooksDefined && !inferno_shared_1.isNullOrUndef(nextHooks.onComponentDidUpdate)) {
                        nextHooks.onComponentDidUpdate(lastProps, nextProps);
                    }
                    nextVNode.dom = nextInput.dom;
                }
            }
            if (nextInput.flags & 28 /* Component */) {
                nextInput.parentVNode = nextVNode;
            }
            else if (lastInput.flags & 28 /* Component */) {
                lastInput.parentVNode = nextVNode;
            }
        }
    }
    return false;
}
exports.patchComponent = patchComponent;
function patchText(lastVNode, nextVNode) {
    var nextText = nextVNode.children;
    var dom = lastVNode.dom;
    nextVNode.dom = dom;
    if (lastVNode.children !== nextText) {
        dom.nodeValue = nextText;
    }
}
exports.patchText = patchText;
function patchVoid(lastVNode, nextVNode) {
    nextVNode.dom = lastVNode.dom;
}
exports.patchVoid = patchVoid;
function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var lastChildrenLength = lastChildren.length;
    var nextChildrenLength = nextChildren.length;
    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    var i = 0;
    for (; i < commonLength; i++) {
        var nextChild = nextChildren[i];
        if (nextChild.dom) {
            nextChild = nextChildren[i] = VNodes_1.directClone(nextChild);
        }
        patch(lastChildren[i], nextChild, dom, lifecycle, context, isSVG, isRecycling);
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; i++) {
            var nextChild = nextChildren[i];
            if (nextChild.dom) {
                nextChild = nextChildren[i] = VNodes_1.directClone(nextChild);
            }
            utils_1.appendChild(dom, mounting_1.mount(nextChild, null, lifecycle, context, isSVG));
        }
    }
    else if (nextChildrenLength === 0) {
        utils_1.removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
    }
    else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; i++) {
            unmounting_1.unmount(lastChildren[i], dom, lifecycle, false, isRecycling);
        }
    }
}
exports.patchNonKeyedChildren = patchNonKeyedChildren;
function patchKeyedChildren(a, b, dom, lifecycle, context, isSVG, isRecycling) {
    var aLength = a.length;
    var bLength = b.length;
    var aEnd = aLength - 1;
    var bEnd = bLength - 1;
    var aStart = 0;
    var bStart = 0;
    var i;
    var j;
    var aNode;
    var bNode;
    var nextNode;
    var nextPos;
    var node;
    if (aLength === 0) {
        if (bLength > 0) {
            mounting_1.mountArrayChildren(b, dom, lifecycle, context, isSVG);
        }
        return;
    }
    else if (bLength === 0) {
        utils_1.removeAllChildren(dom, a, lifecycle, isRecycling);
        return;
    }
    var aStartNode = a[aStart];
    var bStartNode = b[bStart];
    var aEndNode = a[aEnd];
    var bEndNode = b[bEnd];
    if (bStartNode.dom) {
        b[bStart] = bStartNode = VNodes_1.directClone(bStartNode);
    }
    if (bEndNode.dom) {
        b[bEnd] = bEndNode = VNodes_1.directClone(bEndNode);
    }
    // Step 1
    /* eslint no-constant-condition: 0 */
    outer: while (true) {
        // Sync nodes with the same key at the beginning.
        while (aStartNode.key === bStartNode.key) {
            patch(aStartNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            aStart++;
            bStart++;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aStartNode = a[aStart];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = VNodes_1.directClone(bStartNode);
            }
        }
        // Sync nodes with the same key at the end.
        while (aEndNode.key === bEndNode.key) {
            patch(aEndNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            aEnd--;
            bEnd--;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aEndNode = a[aEnd];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = VNodes_1.directClone(bEndNode);
            }
        }
        // Move and sync nodes from right to left.
        if (aEndNode.key === bStartNode.key) {
            patch(aEndNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            utils_1.insertOrAppend(dom, bStartNode.dom, aStartNode.dom);
            aEnd--;
            bStart++;
            aEndNode = a[aEnd];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = VNodes_1.directClone(bStartNode);
            }
            continue;
        }
        // Move and sync nodes from left to right.
        if (aStartNode.key === bEndNode.key) {
            patch(aStartNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            utils_1.insertOrAppend(dom, bEndNode.dom, nextNode);
            aStart++;
            bEnd--;
            aStartNode = a[aStart];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = VNodes_1.directClone(bEndNode);
            }
            continue;
        }
        break;
    }
    if (aStart > aEnd) {
        if (bStart <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            while (bStart <= bEnd) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = VNodes_1.directClone(node);
                }
                bStart++;
                utils_1.insertOrAppend(dom, mounting_1.mount(node, null, lifecycle, context, isSVG), nextNode);
            }
        }
    }
    else if (bStart > bEnd) {
        while (aStart <= aEnd) {
            unmounting_1.unmount(a[aStart++], dom, lifecycle, false, isRecycling);
        }
    }
    else {
        aLength = aEnd - aStart + 1;
        bLength = bEnd - bStart + 1;
        var sources = new Array(bLength);
        // Mark all nodes as inserted.
        for (i = 0; i < bLength; i++) {
            sources[i] = -1;
        }
        var moved = false;
        var pos = 0;
        var patched = 0;
        // When sizes are small, just loop them through
        if ((bLength <= 4) || (aLength * bLength <= 16)) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i;
                            if (pos > j) {
                                moved = true;
                            }
                            else {
                                pos = j;
                            }
                            if (bNode.dom) {
                                b[j] = bNode = VNodes_1.directClone(bNode);
                            }
                            patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                            patched++;
                            a[i] = null;
                            break;
                        }
                    }
                }
            }
        }
        else {
            var keyIndex = new Map();
            // Map keys by their index in array
            for (i = bStart; i <= bEnd; i++) {
                keyIndex.set(b[i].key, i);
            }
            // Try to patch same keys
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    j = keyIndex.get(aNode.key);
                    if (!inferno_shared_1.isUndefined(j)) {
                        bNode = b[j];
                        sources[j - bStart] = i;
                        if (pos > j) {
                            moved = true;
                        }
                        else {
                            pos = j;
                        }
                        if (bNode.dom) {
                            b[j] = bNode = VNodes_1.directClone(bNode);
                        }
                        patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                        patched++;
                        a[i] = null;
                    }
                }
            }
        }
        // fast-path: if nothing patched remove all old and add all new
        if (aLength === a.length && patched === 0) {
            utils_1.removeAllChildren(dom, a, lifecycle, isRecycling);
            while (bStart < bLength) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = VNodes_1.directClone(node);
                }
                bStart++;
                utils_1.insertOrAppend(dom, mounting_1.mount(node, null, lifecycle, context, isSVG), null);
            }
        }
        else {
            i = aLength - patched;
            while (i > 0) {
                aNode = a[aStart++];
                if (!inferno_shared_1.isNull(aNode)) {
                    unmounting_1.unmount(aNode, dom, lifecycle, true, isRecycling);
                    i--;
                }
            }
            if (moved) {
                var seq = lis_algorithm(sources);
                j = seq.length - 1;
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = VNodes_1.directClone(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        utils_1.insertOrAppend(dom, mounting_1.mount(node, dom, lifecycle, context, isSVG), nextNode);
                    }
                    else {
                        if (j < 0 || i !== seq[j]) {
                            pos = i + bStart;
                            node = b[pos];
                            nextPos = pos + 1;
                            nextNode = nextPos < b.length ? b[nextPos].dom : null;
                            utils_1.insertOrAppend(dom, node.dom, nextNode);
                        }
                        else {
                            j--;
                        }
                    }
                }
            }
            else if (patched !== bLength) {
                // when patched count doesn't match b length we need to insert those new ones
                // loop backwards so we can use insertBefore
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = VNodes_1.directClone(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        utils_1.insertOrAppend(dom, mounting_1.mount(node, null, lifecycle, context, isSVG), nextNode);
                    }
                }
            }
        }
    }
}
exports.patchKeyedChildren = patchKeyedChildren;
// // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
    var p = arr.slice(0);
    var result = [0];
    var i;
    var j;
    var u;
    var v;
    var c;
    var len = arr.length;
    for (i = 0; i < len; i++) {
        var arrI = arr[i];
        if (arrI === -1) {
            continue;
        }
        j = result[result.length - 1];
        if (arr[j] < arrI) {
            p[i] = j;
            result.push(i);
            continue;
        }
        u = 0;
        v = result.length - 1;
        while (u < v) {
            c = ((u + v) / 2) | 0;
            if (arr[result[c]] < arrI) {
                u = c + 1;
            }
            else {
                v = c;
            }
        }
        if (arrI < arr[result[u]]) {
            if (u > 0) {
                p[i] = result[u - 1];
            }
            result[u] = i;
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}
function isAttrAnEvent(attr) {
    return attr[0] === 'o' && attr[1] === 'n';
}
exports.isAttrAnEvent = isAttrAnEvent;
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue) {
    if (lastValue !== nextValue) {
        if (constants_1.skipProps.has(prop) || (hasControlledValue && prop === 'value')) {
            return;
        }
        else if (constants_1.booleanProps.has(prop)) {
            prop = prop === 'autoFocus' ? prop.toLowerCase() : prop;
            dom[prop] = !!nextValue;
        }
        else if (constants_1.strictProps.has(prop)) {
            var value = inferno_shared_1.isNullOrUndef(nextValue) ? '' : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
        }
        else if (isAttrAnEvent(prop)) {
            patchEvent(prop, lastValue, nextValue, dom);
        }
        else if (inferno_shared_1.isNullOrUndef(nextValue)) {
            dom.removeAttribute(prop);
        }
        else if (prop === 'style') {
            patchStyle(lastValue, nextValue, dom);
        }
        else if (prop === 'dangerouslySetInnerHTML') {
            var lastHtml = lastValue && lastValue.__html;
            var nextHtml = nextValue && nextValue.__html;
            if (lastHtml !== nextHtml) {
                if (!inferno_shared_1.isNullOrUndef(nextHtml)) {
                    dom.innerHTML = nextHtml;
                }
            }
        }
        else {
            // We optimize for NS being boolean. Its 99.9% time false
            if (isSVG && constants_1.namespaces.has(prop)) {
                // If we end up in this path we can read property again
                dom.setAttributeNS(constants_1.namespaces.get(prop), prop, nextValue);
            }
            else {
                dom.setAttribute(prop, nextValue);
            }
        }
    }
}
exports.patchProp = patchProp;
function patchEvent(name, lastValue, nextValue, dom) {
    if (lastValue !== nextValue) {
        if (constants_1.delegatedEvents.has(name)) {
            delegation_1.handleEvent(name, lastValue, nextValue, dom);
        }
        else {
            var nameLowerCase = name.toLowerCase();
            var domEvent = dom[nameLowerCase];
            // if the function is wrapped, that means it's been controlled by a wrapper
            if (domEvent && domEvent.wrapped) {
                return;
            }
            if (!inferno_shared_1.isFunction(nextValue) && !inferno_shared_1.isNullOrUndef(nextValue)) {
                var linkEvent_1 = nextValue.event;
                if (linkEvent_1 && inferno_shared_1.isFunction(linkEvent_1)) {
                    dom[nameLowerCase] = function (e) {
                        linkEvent_1(nextValue.data, e);
                    };
                }
                else {
                    if (process.env.NODE_ENV !== 'production') {
                        inferno_shared_1.throwError("an event on a VNode \"" + name + "\". was not a function or a valid linkEvent.");
                    }
                    inferno_shared_1.throwError();
                }
            }
            else {
                dom[nameLowerCase] = nextValue;
            }
        }
    }
}
exports.patchEvent = patchEvent;
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function patchStyle(lastAttrValue, nextAttrValue, dom) {
    var domStyle = dom.style;
    if (inferno_shared_1.isString(nextAttrValue)) {
        domStyle.cssText = nextAttrValue;
        return;
    }
    for (var style in nextAttrValue) {
        // do not add a hasOwnProperty check here, it affects performance
        var value = nextAttrValue[style];
        if (!inferno_shared_1.isNumber(value) || constants_1.isUnitlessNumber.has(style)) {
            domStyle[style] = value;
        }
        else {
            domStyle[style] = value + 'px';
        }
    }
    if (!inferno_shared_1.isNullOrUndef(lastAttrValue)) {
        for (var style in lastAttrValue) {
            if (inferno_shared_1.isNullOrUndef(nextAttrValue[style])) {
                domStyle[style] = '';
            }
        }
    }
}
exports.patchStyle = patchStyle;
function removeProp(prop, lastValue, dom) {
    if (prop === 'value') {
        dom.value = '';
    }
    else if (prop === 'style') {
        dom.removeAttribute('style');
    }
    else if (isAttrAnEvent(prop)) {
        delegation_1.handleEvent(prop, lastValue, null, dom);
    }
    else {
        dom.removeAttribute(prop);
    }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Suit = exports.Suit = {
  Spade: 0,
  Heart: 1,
  Club: 2,
  Diamond: 3
};

var CardType = exports.CardType = {
  Basic: 0,
  Functional: 1,
  Equipment: 2
};

var BasicType = exports.BasicType = {
  Attack: 0,
  Dodge: 1,
  Peach: 2,
  Wine: 3,
  LightningAttack: 4,
  FireAttack: 5
};

var FunctionalType = exports.FunctionalType = {
  Steal: 0, // 順手
  Dismantle: 1, // 拆橋
  Duress: 2, // 借刀
  Duel: 3, // 決鬥
  RainingArrows: 4, // 萬箭
  Barbarians: 5, // 南蠻
  PeachGarden: 6, // 桃園
  Harvest: 7, // 五谷
  Draw2: 8, // 無中
  Negate: 9, // 無懈
  NegateKingdom: 10, // 國無懈
  Blaze: 11, // 火攻
  IronChain: 12, // 鐵索
  Amass: 13, // 以逸待勞
  Ascertain: 14, // 知己知彼
  Alliance: 15, // 遠交近攻
  Exile: 16, // 調虎離山
  OneMoreRound: 17, // 挾天子
  ChainTogether: 18, // 勠力同心
  Disarm: 19, // 水掩七軍
  BlazeTogether: 20, // 火燒連營
  ShowYourself: 21, // 敕令
  Banquet: 22, // 聯軍盛宴
  Acedia: 23, // 樂不
  RationsDepleted: 24, // 兵糧
  Lightning: 25 // 閃電
};

var EquipmentType = exports.EquipmentType = {
  CrossBow: 0, // 連弩
  BlueBlade: 1, // 青紅劍
  Double: 2, // 雌雄雙股劍
  Axe: 3, // 貫石
  Halberd: 4, // 丈八
  Bow: 5, // 麒麟弓
  FrostBlade: 6, // 寒兵
  Fan: 7, // 朱雀
  SixBlade: 8, // 吳六劍
  Trident: 9, // 三尖
  Dragon: 10, // 青龍
  Sky: 11, // 方天
  EightTrigrams: 12, // 八掛
  RenWangShield: 13, // 仁王
  RattanArmour: 14, // 滕甲
  SliverLionHelmet: 15, // 白銀
  FireArmor: 16, // 明光
  HeartShield: 17, // 護心
  WoodHorse: 18, // 木牛
  JadeSeal: 19, // 玉璽
  DefenseHorse: 20,
  OffenseHorse: 21
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FullDeck = exports.PotentialExpansionDeck = exports.BasicDeck = undefined;

var _constants = __webpack_require__(9);

var id = 0;

function addId(_ref) {
  var suit = _ref.suit,
      value = _ref.value,
      type = _ref.type,
      effectType = _ref.effectType,
      isGiveable = _ref.isGiveable;

  return {
    id: id++,
    suit: suit,
    value: value,
    type: type,
    effectType: effectType,
    isGiveable: isGiveable
  };
}

var BasicDeck = exports.BasicDeck = [{
  suit: _constants.Suit.Spade,
  value: 1,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Lightning,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 1,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Duel,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 2,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.Double,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 2,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.EightTrigrams,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 2,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.FrostBlade,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 3,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Steal,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 3,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Dismantle,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 4,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Steal,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 4,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Dismantle,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 5,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 5,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.DefenseHorse,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 6,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.LightningAttack,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 6,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.BlueBlade,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 7,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.LightningAttack,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 7,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 8,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 8,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 9,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 9,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Wine,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 10,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.RationsDepleted,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 10,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 11,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Negate,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 11,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 12,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.Halberd,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 12,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.IronChain,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 13,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.OffenseHorse,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 13,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Barbarians,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 1,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.RainingArrows,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 1,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.PeachGarden,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 2,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Blaze,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 2,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 3,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Blaze,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 3,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Harvest,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 4,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.FireAttack,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 4,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Peach,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 5,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.Bow,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 5,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.OffenseHorse,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 6,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Acedia,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 6,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Peach,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 7,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Draw2,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 7,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Peach,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 8,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Draw2,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 8,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Peach,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 9,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Alliance,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 9,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Peach,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 10,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 10,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Peach,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 11,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Amass,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 11,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 12,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Dismantle,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 12,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 12,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Peach,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 13,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 13,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.DefenseHorse,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 1,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.SliverLionHelmet,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 1,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Duel,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 2,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 2,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.RattanArmour,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 2,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.RenWangShield,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 3,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Ascertain,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 3,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 4,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Ascertain,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 4,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 5,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.DefenseHorse,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 5,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 6,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.LightningAttack,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 6,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Acedia,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 7,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.LightningAttack,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 7,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Barbarians,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 8,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.LightningAttack,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 8,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 9,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Wine,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 9,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 10,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.RationsDepleted,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 10,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 11,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 11,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 12,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Duress,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 12,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.IronChain,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 13,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.NegateKingdom,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 13,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.IronChain,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 1,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.Fan,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 1,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.CrossBow,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 2,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 2,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Peach,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 3,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 3,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Steal,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 4,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.FireAttack,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 4,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Amass,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 5,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.FireAttack,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 5,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.Axe,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 6,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 6,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.SixBlade,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 7,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 7,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 8,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 8,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 9,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 9,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Wine,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 10,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 10,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 11,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 11,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 12,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.Trident,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 12,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 12,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.NegateKingdom,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 13,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.OffenseHorse,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 13,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}].map(addId);

var PotentialExpansionDeck = exports.PotentialExpansionDeck = [{
  suit: _constants.Suit.Spade,
  value: 1,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.OneMoreRound,
  isGiveable: true
}, {
  suit: _constants.Suit.Spade,
  value: 2,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.FireArmor,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 3,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.BlazeTogether,
  isGiveable: true
}, {
  suit: _constants.Suit.Spade,
  value: 4,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 5,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.Dragon,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 6,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Wine,
  isGiveable: true
}, {
  suit: _constants.Suit.Spade,
  value: 7,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 8,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 9,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.LightningAttack,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 10,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.LightningAttack,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 11,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.LightningAttack,
  isGiveable: true
}, {
  suit: _constants.Suit.Spade,
  value: 12,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.ChainTogether,
  isGiveable: false
}, {
  suit: _constants.Suit.Spade,
  value: 13,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Negate,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 1,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Banquet,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 2,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Exile,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 3,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.OffenseHorse,
  isGiveable: true
}, {
  suit: _constants.Suit.Heart,
  value: 4,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 5,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 6,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 7,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 8,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Peach,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 9,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Peach,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 10,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 11,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Heart,
  value: 12,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.BlazeTogether,
  isGiveable: true
}, {
  suit: _constants.Suit.Heart,
  value: 13,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Disarm,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 1,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.JadeSeal,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 2,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.HeartShield,
  isGiveable: true
}, {
  suit: _constants.Suit.Club,
  value: 3,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.ShowYourself,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 4,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 5,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.LightningAttack,
  isGiveable: true
}, {
  suit: _constants.Suit.Club,
  value: 6,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 7,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 8,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Attack,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 9,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Wine,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 10,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.ChainTogether,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 11,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.BlazeTogether,
  isGiveable: true
}, {
  suit: _constants.Suit.Club,
  value: 12,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Disarm,
  isGiveable: false
}, {
  suit: _constants.Suit.Club,
  value: 13,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.NegateKingdom,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 1,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.OneMoreRound,
  isGiveable: true
}, {
  suit: _constants.Suit.Diamond,
  value: 2,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Peach,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 3,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Peach,
  isGiveable: true
}, {
  suit: _constants.Suit.Diamond,
  value: 4,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.OneMoreRound,
  isGiveable: true
}, {
  suit: _constants.Suit.Diamond,
  value: 5,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.WoodHorse,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 6,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 7,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 8,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.FireAttack,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 9,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.FireAttack,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 10,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.Exile,
  isGiveable: true
}, {
  suit: _constants.Suit.Diamond,
  value: 11,
  type: _constants.CardType.Functional,
  effectType: _constants.FunctionalType.NegateKingdom,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 12,
  type: _constants.CardType.Equipment,
  effectType: _constants.EquipmentType.Sky,
  isGiveable: false
}, {
  suit: _constants.Suit.Diamond,
  value: 13,
  type: _constants.CardType.Basic,
  effectType: _constants.BasicType.Dodge,
  isGiveable: false
}].map(addId);

var FullDeck = exports.FullDeck = BasicDeck.concat(PotentialExpansionDeck);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(64).default;
module.exports.default = module.exports;



/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = __webpack_require__(0);
var options_1 = __webpack_require__(6);
var VNodes_1 = __webpack_require__(7);
var hydration_1 = __webpack_require__(72);
var mounting_1 = __webpack_require__(16);
var patching_1 = __webpack_require__(8);
var unmounting_1 = __webpack_require__(17);
var utils_1 = __webpack_require__(4);
// rather than use a Map, like we did before, we can use an array here
// given there shouldn't be THAT many roots on the page, the difference
// in performance is huge: https://esbench.com/bench/5802a691330ab09900a1a2da
exports.componentToDOMNodeMap = new Map();
var roots = options_1.options.roots;
/**
 * When inferno.options.findDOMNOdeEnabled is true, this function will return DOM Node by component instance
 * @param ref Component instance
 * @returns {*|null} returns dom node
 */
function findDOMNode(ref) {
    if (!options_1.options.findDOMNodeEnabled) {
        if (process.env.NODE_ENV !== 'production') {
            inferno_shared_1.throwError('findDOMNode() has been disabled, use Inferno.options.findDOMNodeEnabled = true; enabled findDOMNode(). Warning this can significantly impact performance!');
        }
        inferno_shared_1.throwError();
    }
    var dom = ref && ref.nodeType ? ref : null;
    return exports.componentToDOMNodeMap.get(ref) || dom;
}
exports.findDOMNode = findDOMNode;
function getRoot(dom) {
    for (var i = 0, len = roots.length; i < len; i++) {
        var root = roots[i];
        if (root.dom === dom) {
            return root;
        }
    }
    return null;
}
function setRoot(dom, input, lifecycle) {
    var root = {
        dom: dom,
        input: input,
        lifecycle: lifecycle
    };
    roots.push(root);
    return root;
}
function removeRoot(root) {
    for (var i = 0, len = roots.length; i < len; i++) {
        if (roots[i] === root) {
            roots.splice(i, 1);
            return;
        }
    }
}
if (process.env.NODE_ENV !== 'production') {
    if (inferno_shared_1.isBrowser && document.body === null) {
        inferno_shared_1.warning('Inferno warning: you cannot initialize inferno without "document.body". Wait on "DOMContentLoaded" event, add script to bottom of body, or use async/defer attributes on script tag.');
    }
}
var documentBody = inferno_shared_1.isBrowser ? document.body : null;
/**
 * Renders virtual node tree into parent node.
 * @param {VNode | null | string | number} input vNode to be rendered
 * @param parentDom DOM node which content will be replaced by virtual node
 * @returns {InfernoChildren} rendered virtual node
 */
function render(input, parentDom) {
    if (documentBody === parentDom) {
        if (process.env.NODE_ENV !== 'production') {
            inferno_shared_1.throwError('you cannot render() to the "document.body". Use an empty element as a container instead.');
        }
        inferno_shared_1.throwError();
    }
    if (input === inferno_shared_1.NO_OP) {
        return;
    }
    var root = getRoot(parentDom);
    if (inferno_shared_1.isNull(root)) {
        var lifecycle = new inferno_shared_1.Lifecycle();
        if (!inferno_shared_1.isInvalid(input)) {
            if (input.dom) {
                input = VNodes_1.directClone(input);
            }
            if (!hydration_1.hydrateRoot(input, parentDom, lifecycle)) {
                mounting_1.mount(input, parentDom, lifecycle, utils_1.EMPTY_OBJ, false);
            }
            root = setRoot(parentDom, input, lifecycle);
            lifecycle.trigger();
        }
    }
    else {
        var lifecycle = root.lifecycle;
        lifecycle.listeners = [];
        if (inferno_shared_1.isNullOrUndef(input)) {
            unmounting_1.unmount(root.input, parentDom, lifecycle, false, false);
            removeRoot(root);
        }
        else {
            if (input.dom) {
                input = VNodes_1.directClone(input);
            }
            patching_1.patch(root.input, input, parentDom, lifecycle, utils_1.EMPTY_OBJ, false, false);
        }
        root.input = input;
        lifecycle.trigger();
    }
    if (root) {
        var rootInput = root.input;
        if (rootInput && (rootInput.flags & 28 /* Component */)) {
            return rootInput.children;
        }
    }
}
exports.render = render;
function createRenderer(parentDom) {
    return function renderer(lastInput, nextInput) {
        if (!parentDom) {
            parentDom = lastInput;
        }
        render(nextInput, parentDom);
    };
}
exports.createRenderer = createRenderer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GameScene = exports.GameScene = {
  Naming: 0,
  ChoosingAction: 1,
  Room: 2,
  Gaming: 3
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(68).default;
module.exports.default = module.exports;



/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.xlinkNS = 'http://www.w3.org/1999/xlink';
exports.xmlNS = 'http://www.w3.org/XML/1998/namespace';
exports.svgNS = 'http://www.w3.org/2000/svg';
exports.strictProps = new Set();
exports.strictProps.add('volume');
exports.strictProps.add('defaultChecked');
exports.booleanProps = new Set();
exports.booleanProps.add('muted');
exports.booleanProps.add('scoped');
exports.booleanProps.add('loop');
exports.booleanProps.add('open');
exports.booleanProps.add('checked');
exports.booleanProps.add('default');
exports.booleanProps.add('capture');
exports.booleanProps.add('disabled');
exports.booleanProps.add('readOnly');
exports.booleanProps.add('required');
exports.booleanProps.add('autoplay');
exports.booleanProps.add('controls');
exports.booleanProps.add('seamless');
exports.booleanProps.add('reversed');
exports.booleanProps.add('allowfullscreen');
exports.booleanProps.add('novalidate');
exports.booleanProps.add('hidden');
exports.booleanProps.add('autoFocus');
exports.booleanProps.add('selected');
exports.namespaces = new Map();
exports.namespaces.set('xlink:href', exports.xlinkNS);
exports.namespaces.set('xlink:arcrole', exports.xlinkNS);
exports.namespaces.set('xlink:actuate', exports.xlinkNS);
exports.namespaces.set('xlink:show', exports.xlinkNS);
exports.namespaces.set('xlink:role', exports.xlinkNS);
exports.namespaces.set('xlink:title', exports.xlinkNS);
exports.namespaces.set('xlink:type', exports.xlinkNS);
exports.namespaces.set('xml:base', exports.xmlNS);
exports.namespaces.set('xml:lang', exports.xmlNS);
exports.namespaces.set('xml:space', exports.xmlNS);
exports.isUnitlessNumber = new Set();
exports.isUnitlessNumber.add('animationIterationCount');
exports.isUnitlessNumber.add('borderImageOutset');
exports.isUnitlessNumber.add('borderImageSlice');
exports.isUnitlessNumber.add('borderImageWidth');
exports.isUnitlessNumber.add('boxFlex');
exports.isUnitlessNumber.add('boxFlexGroup');
exports.isUnitlessNumber.add('boxOrdinalGroup');
exports.isUnitlessNumber.add('columnCount');
exports.isUnitlessNumber.add('flex');
exports.isUnitlessNumber.add('flexGrow');
exports.isUnitlessNumber.add('flexPositive');
exports.isUnitlessNumber.add('flexShrink');
exports.isUnitlessNumber.add('flexNegative');
exports.isUnitlessNumber.add('flexOrder');
exports.isUnitlessNumber.add('gridRow');
exports.isUnitlessNumber.add('gridColumn');
exports.isUnitlessNumber.add('fontWeight');
exports.isUnitlessNumber.add('lineClamp');
exports.isUnitlessNumber.add('lineHeight');
exports.isUnitlessNumber.add('opacity');
exports.isUnitlessNumber.add('order');
exports.isUnitlessNumber.add('orphans');
exports.isUnitlessNumber.add('tabSize');
exports.isUnitlessNumber.add('widows');
exports.isUnitlessNumber.add('zIndex');
exports.isUnitlessNumber.add('zoom');
exports.isUnitlessNumber.add('fillOpacity');
exports.isUnitlessNumber.add('floodOpacity');
exports.isUnitlessNumber.add('stopOpacity');
exports.isUnitlessNumber.add('strokeDasharray');
exports.isUnitlessNumber.add('strokeDashoffset');
exports.isUnitlessNumber.add('strokeMiterlimit');
exports.isUnitlessNumber.add('strokeOpacity');
exports.isUnitlessNumber.add('strokeWidth');
exports.skipProps = new Set();
exports.skipProps.add('children');
exports.skipProps.add('childrenType');
exports.skipProps.add('defaultValue');
exports.skipProps.add('ref');
exports.skipProps.add('key');
exports.skipProps.add('checked');
exports.skipProps.add('multiple');
exports.delegatedEvents = new Set();
exports.delegatedEvents.add('onClick');
exports.delegatedEvents.add('onMouseDown');
exports.delegatedEvents.add('onMouseUp');
exports.delegatedEvents.add('onMouseMove');
exports.delegatedEvents.add('onSubmit');
exports.delegatedEvents.add('onDblClick');
exports.delegatedEvents.add('onKeyDown');
exports.delegatedEvents.add('onKeyUp');
exports.delegatedEvents.add('onKeyPress');


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = __webpack_require__(0);
var options_1 = __webpack_require__(6);
var VNodes_1 = __webpack_require__(7);
var patching_1 = __webpack_require__(8);
var recycling_1 = __webpack_require__(22);
var rendering_1 = __webpack_require__(12);
var utils_1 = __webpack_require__(4);
var processElement_1 = __webpack_require__(18);
function mount(vNode, parentDom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 3970 /* Element */) {
        return mountElement(vNode, parentDom, lifecycle, context, isSVG);
    }
    else if (flags & 28 /* Component */) {
        return mountComponent(vNode, parentDom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
    }
    else if (flags & 4096 /* Void */) {
        return mountVoid(vNode, parentDom);
    }
    else if (flags & 1 /* Text */) {
        return mountText(vNode, parentDom);
    }
    else {
        if (process.env.NODE_ENV !== 'production') {
            if (typeof vNode === 'object') {
                inferno_shared_1.throwError("mount() received an object that's not a valid VNode, you should stringify it first. Object: \"" + JSON.stringify(vNode) + "\".");
            }
            else {
                inferno_shared_1.throwError("mount() expects a valid VNode, instead it received an object with the type \"" + typeof vNode + "\".");
            }
        }
        inferno_shared_1.throwError();
    }
}
exports.mount = mount;
function mountText(vNode, parentDom) {
    var dom = document.createTextNode(vNode.children);
    vNode.dom = dom;
    if (!inferno_shared_1.isNull(parentDom)) {
        utils_1.appendChild(parentDom, dom);
    }
    return dom;
}
exports.mountText = mountText;
function mountVoid(vNode, parentDom) {
    var dom = document.createTextNode('');
    vNode.dom = dom;
    if (!inferno_shared_1.isNull(parentDom)) {
        utils_1.appendChild(parentDom, dom);
    }
    return dom;
}
exports.mountVoid = mountVoid;
function mountElement(vNode, parentDom, lifecycle, context, isSVG) {
    if (options_1.options.recyclingEnabled) {
        var dom_1 = recycling_1.recycleElement(vNode, lifecycle, context, isSVG);
        if (!inferno_shared_1.isNull(dom_1)) {
            if (!inferno_shared_1.isNull(parentDom)) {
                utils_1.appendChild(parentDom, dom_1);
            }
            return dom_1;
        }
    }
    var flags = vNode.flags;
    isSVG = isSVG || (flags & 128 /* SvgElement */) > 0;
    var dom = utils_1.documentCreateElement(vNode.type, isSVG);
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var ref = vNode.ref;
    vNode.dom = dom;
    if (!inferno_shared_1.isInvalid(children)) {
        if (inferno_shared_1.isStringOrNumber(children)) {
            utils_1.setTextContent(dom, children);
        }
        else if (inferno_shared_1.isArray(children)) {
            mountArrayChildren(children, dom, lifecycle, context, isSVG);
        }
        else if (VNodes_1.isVNode(children)) {
            mount(children, dom, lifecycle, context, isSVG);
        }
    }
    if (!inferno_shared_1.isNull(props)) {
        var hasControlledValue = false;
        var isFormElement = (flags & 3584 /* FormElement */) > 0;
        if (isFormElement) {
            hasControlledValue = processElement_1.isControlledFormElement(props);
        }
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            patching_1.patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
        if (isFormElement) {
            processElement_1.processElement(flags, vNode, dom, props, true, hasControlledValue);
        }
    }
    if (className !== null) {
        if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
    }
    if (!inferno_shared_1.isNull(ref)) {
        mountRef(dom, ref, lifecycle);
    }
    if (!inferno_shared_1.isNull(parentDom)) {
        utils_1.appendChild(parentDom, dom);
    }
    return dom;
}
exports.mountElement = mountElement;
function mountArrayChildren(children, dom, lifecycle, context, isSVG) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        // Verify can string/number be here. might cause de-opt. - Normalization takes care of it.
        if (!inferno_shared_1.isInvalid(child)) {
            if (child.dom) {
                children[i] = child = VNodes_1.directClone(child);
            }
            mount(children[i], dom, lifecycle, context, isSVG);
        }
    }
}
exports.mountArrayChildren = mountArrayChildren;
function mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
    if (options_1.options.recyclingEnabled) {
        var dom_2 = recycling_1.recycleComponent(vNode, lifecycle, context, isSVG);
        if (!inferno_shared_1.isNull(dom_2)) {
            if (!inferno_shared_1.isNull(parentDom)) {
                utils_1.appendChild(parentDom, dom_2);
            }
            return dom_2;
        }
    }
    var type = vNode.type;
    var props = vNode.props || utils_1.EMPTY_OBJ;
    var ref = vNode.ref;
    var dom;
    if (isClass) {
        var instance = utils_1.createClassComponentInstance(vNode, type, props, context, isSVG, lifecycle);
        var input = instance._lastInput;
        instance._vNode = vNode;
        vNode.dom = dom = mount(input, null, lifecycle, instance._childContext, isSVG);
        if (!inferno_shared_1.isNull(parentDom)) {
            utils_1.appendChild(parentDom, dom);
        }
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance._updating = false;
        if (options_1.options.findDOMNodeEnabled) {
            rendering_1.componentToDOMNodeMap.set(instance, dom);
        }
    }
    else {
        var input = utils_1.createFunctionalComponentInput(vNode, type, props, context);
        vNode.dom = dom = mount(input, null, lifecycle, context, isSVG);
        vNode.children = input;
        mountFunctionalComponentCallbacks(ref, dom, lifecycle);
        if (!inferno_shared_1.isNull(parentDom)) {
            utils_1.appendChild(parentDom, dom);
        }
    }
    return dom;
}
exports.mountComponent = mountComponent;
function mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
    if (ref) {
        if (inferno_shared_1.isFunction(ref)) {
            ref(instance);
        }
        else {
            if (process.env.NODE_ENV !== 'production') {
                if (inferno_shared_1.isStringOrNumber(ref)) {
                    inferno_shared_1.throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
                }
                else if (inferno_shared_1.isObject(ref) && (vNode.flags & 4 /* ComponentClass */)) {
                    inferno_shared_1.throwError('functional component lifecycle events are not supported on ES2015 class components.');
                }
                else {
                    inferno_shared_1.throwError("a bad value for \"ref\" was used on component: \"" + JSON.stringify(ref) + "\"");
                }
            }
            inferno_shared_1.throwError();
        }
    }
    var hasDidMount = !inferno_shared_1.isUndefined(instance.componentDidMount);
    var afterMount = options_1.options.afterMount;
    if (hasDidMount || !inferno_shared_1.isNull(afterMount)) {
        lifecycle.addListener(function () {
            instance._updating = true;
            if (afterMount) {
                afterMount(vNode);
            }
            if (hasDidMount) {
                instance.componentDidMount();
            }
            instance._updating = false;
        });
    }
}
exports.mountClassComponentCallbacks = mountClassComponentCallbacks;
function mountFunctionalComponentCallbacks(ref, dom, lifecycle) {
    if (ref) {
        if (!inferno_shared_1.isNullOrUndef(ref.onComponentWillMount)) {
            ref.onComponentWillMount();
        }
        if (!inferno_shared_1.isNullOrUndef(ref.onComponentDidMount)) {
            lifecycle.addListener(function () { return ref.onComponentDidMount(dom); });
        }
    }
}
exports.mountFunctionalComponentCallbacks = mountFunctionalComponentCallbacks;
function mountRef(dom, value, lifecycle) {
    if (inferno_shared_1.isFunction(value)) {
        lifecycle.addListener(function () { return value(dom); });
    }
    else {
        if (inferno_shared_1.isInvalid(value)) {
            return;
        }
        if (process.env.NODE_ENV !== 'production') {
            inferno_shared_1.throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        inferno_shared_1.throwError();
    }
}
exports.mountRef = mountRef;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = __webpack_require__(0);
var options_1 = __webpack_require__(6);
var patching_1 = __webpack_require__(8);
var recycling_1 = __webpack_require__(22);
var rendering_1 = __webpack_require__(12);
var utils_1 = __webpack_require__(4);
function unmount(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
        unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling);
    }
    else if (flags & 3970 /* Element */) {
        unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling);
    }
    else if (flags & (1 /* Text */ | 4096 /* Void */)) {
        unmountVoidOrText(vNode, parentDom);
    }
}
exports.unmount = unmount;
function unmountVoidOrText(vNode, parentDom) {
    if (!inferno_shared_1.isNull(parentDom)) {
        utils_1.removeChild(parentDom, vNode.dom);
    }
}
function unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var instance = vNode.children;
    var flags = vNode.flags;
    var isStatefulComponent = flags & 4 /* ComponentClass */;
    var ref = vNode.ref;
    var dom = vNode.dom;
    if (!isRecycling) {
        if (isStatefulComponent) {
            if (!instance._unmounted) {
                instance._blockSetState = true;
                if (!inferno_shared_1.isNull(options_1.options.beforeUnmount)) {
                    options_1.options.beforeUnmount(vNode);
                }
                if (!inferno_shared_1.isUndefined(instance.componentWillUnmount)) {
                    instance.componentWillUnmount();
                }
                if (ref && !isRecycling) {
                    ref(null);
                }
                instance._unmounted = true;
                if (options_1.options.findDOMNodeEnabled) {
                    rendering_1.componentToDOMNodeMap.delete(instance);
                }
                unmount(instance._lastInput, null, instance._lifecycle, false, isRecycling);
            }
        }
        else {
            if (!inferno_shared_1.isNullOrUndef(ref)) {
                if (!inferno_shared_1.isNullOrUndef(ref.onComponentWillUnmount)) {
                    ref.onComponentWillUnmount(dom);
                }
            }
            unmount(instance, null, lifecycle, false, isRecycling);
        }
    }
    if (parentDom) {
        var lastInput = instance._lastInput;
        if (inferno_shared_1.isNullOrUndef(lastInput)) {
            lastInput = instance;
        }
        utils_1.removeChild(parentDom, dom);
    }
    if (options_1.options.recyclingEnabled && !isStatefulComponent && (parentDom || canRecycle)) {
        recycling_1.poolComponent(vNode);
    }
}
exports.unmountComponent = unmountComponent;
function unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var dom = vNode.dom;
    var ref = vNode.ref;
    var props = vNode.props;
    if (ref && !isRecycling) {
        unmountRef(ref);
    }
    var children = vNode.children;
    if (!inferno_shared_1.isNullOrUndef(children)) {
        unmountChildren(children, lifecycle, isRecycling);
    }
    if (!inferno_shared_1.isNull(props)) {
        for (var name_1 in props) {
            // do not add a hasOwnProperty check here, it affects performance
            if (props[name_1] !== null && patching_1.isAttrAnEvent(name_1)) {
                patching_1.patchEvent(name_1, props[name_1], null, dom);
                // We need to set this null, because same props otherwise come back if SCU returns false and we are recyling
                props[name_1] = null;
            }
        }
    }
    if (!inferno_shared_1.isNull(parentDom)) {
        utils_1.removeChild(parentDom, dom);
    }
    if (options_1.options.recyclingEnabled && (parentDom || canRecycle)) {
        recycling_1.poolElement(vNode);
    }
}
exports.unmountElement = unmountElement;
function unmountChildren(children, lifecycle, isRecycling) {
    if (inferno_shared_1.isArray(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!inferno_shared_1.isInvalid(child) && inferno_shared_1.isObject(child)) {
                unmount(child, null, lifecycle, false, isRecycling);
            }
        }
    }
    else if (inferno_shared_1.isObject(children)) {
        unmount(children, null, lifecycle, false, isRecycling);
    }
}
function unmountRef(ref) {
    if (inferno_shared_1.isFunction(ref)) {
        ref(null);
    }
    else {
        if (inferno_shared_1.isInvalid(ref)) {
            return;
        }
        if (process.env.NODE_ENV !== 'production') {
            inferno_shared_1.throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        inferno_shared_1.throwError();
    }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = __webpack_require__(0);
var InputWrapper_1 = __webpack_require__(73);
var SelectWrapper_1 = __webpack_require__(74);
var TextareaWrapper_1 = __webpack_require__(75);
/**
 * There is currently no support for switching same input between controlled and nonControlled
 * If that ever becomes a real issue, then re design controlled elements
 * Currently user must choose either controlled or non-controlled and stick with that
 */
function processElement(flags, vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    if (flags & 512 /* InputElement */) {
        InputWrapper_1.processInput(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
    }
    if (flags & 2048 /* SelectElement */) {
        SelectWrapper_1.processSelect(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
    }
    if (flags & 1024 /* TextareaElement */) {
        TextareaWrapper_1.processTextarea(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
    }
}
exports.processElement = processElement;
function isControlledFormElement(nextPropsOrEmpty) {
    return (nextPropsOrEmpty.type && InputWrapper_1.isCheckedType(nextPropsOrEmpty.type)) ? !inferno_shared_1.isNullOrUndef(nextPropsOrEmpty.checked) : !inferno_shared_1.isNullOrUndef(nextPropsOrEmpty.value);
}
exports.isControlledFormElement = isControlledFormElement;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(76).default;
module.exports.default = module.exports;



/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(63).default;
module.exports.default = module.exports;



/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(88);
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
    /* eslint-disable no-console */
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
        // tslint:disable-next-line:no-console
        console.error(message);
    }
    try {
        // This error was thrown as a convenience so that if you enable
        // "break on all exceptions" in your console,
        // it would pause the execution at this line.
        throw new Error(message);
        // tslint:disable-next-line:no-empty
    }
    catch (e) { }
}
exports.warning = warning;
function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    // Test for A's keys different from B.
    var hasOwn = Object.prototype.hasOwnProperty;
    for (var i = 0, len = keysA.length; i < len; i++) {
        var key = keysA[i];
        if (!hasOwn.call(objB, key) ||
            objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
}
exports.shallowEqual = shallowEqual;
function wrapActionCreators(actionCreators) {
    return function (dispatch) { return redux_1.bindActionCreators(actionCreators, dispatch); };
}
exports.wrapActionCreators = wrapActionCreators;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = __webpack_require__(0);
var patching_1 = __webpack_require__(8);
var componentPools = new Map();
var elementPools = new Map();
function recycleElement(vNode, lifecycle, context, isSVG) {
    var tag = vNode.type;
    var pools = elementPools.get(tag);
    if (!inferno_shared_1.isUndefined(pools)) {
        var key = vNode.key;
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!inferno_shared_1.isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!inferno_shared_1.isUndefined(recycledVNode)) {
                patching_1.patchElement(recycledVNode, vNode, null, lifecycle, context, isSVG, true);
                return vNode.dom;
            }
        }
    }
    return null;
}
exports.recycleElement = recycleElement;
function poolElement(vNode) {
    var tag = vNode.type;
    var key = vNode.key;
    var pools = elementPools.get(tag);
    if (inferno_shared_1.isUndefined(pools)) {
        pools = {
            keyed: new Map(),
            nonKeyed: []
        };
        elementPools.set(tag, pools);
    }
    if (inferno_shared_1.isNull(key)) {
        pools.nonKeyed.push(vNode);
    }
    else {
        var pool = pools.keyed.get(key);
        if (inferno_shared_1.isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}
exports.poolElement = poolElement;
function recycleComponent(vNode, lifecycle, context, isSVG) {
    var type = vNode.type;
    var pools = componentPools.get(type);
    if (!inferno_shared_1.isUndefined(pools)) {
        var key = vNode.key;
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!inferno_shared_1.isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!inferno_shared_1.isUndefined(recycledVNode)) {
                var flags = vNode.flags;
                var failed = patching_1.patchComponent(recycledVNode, vNode, null, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0, true);
                if (!failed) {
                    return vNode.dom;
                }
            }
        }
    }
    return null;
}
exports.recycleComponent = recycleComponent;
function poolComponent(vNode) {
    var hooks = vNode.ref;
    var nonRecycleHooks = hooks && (hooks.onComponentWillMount ||
        hooks.onComponentWillUnmount ||
        hooks.onComponentDidMount ||
        hooks.onComponentWillUpdate ||
        hooks.onComponentDidUpdate);
    if (nonRecycleHooks) {
        return;
    }
    var type = vNode.type;
    var key = vNode.key;
    var pools = componentPools.get(type);
    if (inferno_shared_1.isUndefined(pools)) {
        pools = {
            keyed: new Map(),
            nonKeyed: []
        };
        componentPools.set(type, pools);
    }
    if (inferno_shared_1.isNull(key)) {
        pools.nonKeyed.push(vNode);
    }
    else {
        var pool = pools.keyed.get(key);
        if (inferno_shared_1.isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}
exports.poolComponent = poolComponent;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = __webpack_require__(0);
var VNodes_1 = __webpack_require__(7);
function applyKey(key, vNode) {
    vNode.key = key;
    return vNode;
}
function applyKeyIfMissing(key, vNode) {
    if (inferno_shared_1.isNumber(key)) {
        key = "." + key;
    }
    if (inferno_shared_1.isNull(vNode.key) || vNode.key[0] === '.') {
        return applyKey(key, vNode);
    }
    return vNode;
}
function applyKeyPrefix(key, vNode) {
    vNode.key = key + vNode.key;
    return vNode;
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (var len = nodes.length; index < len; index++) {
        var n = nodes[index];
        var key = currentKey + "." + index;
        if (!inferno_shared_1.isInvalid(n)) {
            if (inferno_shared_1.isArray(n)) {
                _normalizeVNodes(n, result, 0, key);
            }
            else {
                if (inferno_shared_1.isStringOrNumber(n)) {
                    n = VNodes_1.createTextVNode(n, null);
                }
                else if (VNodes_1.isVNode(n) && n.dom || (n.key && n.key[0] === '.')) {
                    n = VNodes_1.directClone(n);
                }
                if (inferno_shared_1.isNull(n.key) || n.key[0] === '.') {
                    n = applyKey(key, n);
                }
                else {
                    n = applyKeyPrefix(currentKey, n);
                }
                result.push(n);
            }
        }
    }
}
function normalizeVNodes(nodes) {
    var newNodes;
    // we assign $ which basically means we've flagged this array for future note
    // if it comes back again, we need to clone it, as people are using it
    // in an immutable way
    // tslint:disable
    if (nodes['$'] === true) {
        nodes = nodes.slice();
    }
    else {
        nodes['$'] = true;
    }
    // tslint:enable
    for (var i = 0, len = nodes.length; i < len; i++) {
        var n = nodes[i];
        if (inferno_shared_1.isInvalid(n) || inferno_shared_1.isArray(n)) {
            var result = (newNodes || nodes).slice(0, i);
            _normalizeVNodes(nodes, result, i, "");
            return result;
        }
        else if (inferno_shared_1.isStringOrNumber(n)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, VNodes_1.createTextVNode(n, null)));
        }
        else if ((VNodes_1.isVNode(n) && n.dom !== null) || (inferno_shared_1.isNull(n.key) && (n.flags & 64 /* HasNonKeyedChildren */) === 0)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, VNodes_1.directClone(n)));
        }
        else if (newNodes) {
            newNodes.push(applyKeyIfMissing(i, VNodes_1.directClone(n)));
        }
    }
    return newNodes || nodes;
}
exports.normalizeVNodes = normalizeVNodes;
function normalizeChildren(children) {
    if (inferno_shared_1.isArray(children)) {
        return normalizeVNodes(children);
    }
    else if (VNodes_1.isVNode(children) && children.dom !== null) {
        return VNodes_1.directClone(children);
    }
    return children;
}
function normalizeProps(vNode, props, children) {
    if (vNode.flags & 3970 /* Element */) {
        if (inferno_shared_1.isNullOrUndef(children) && !inferno_shared_1.isNullOrUndef(props.children)) {
            vNode.children = props.children;
        }
        if (!inferno_shared_1.isNullOrUndef(props.className)) {
            vNode.className = props.className;
            delete props.className;
        }
    }
    if (props.ref) {
        vNode.ref = props.ref;
        delete props.ref;
    }
    if (!inferno_shared_1.isNullOrUndef(props.key)) {
        vNode.key = props.key;
        delete props.key;
    }
}
function getFlagsForElementVnode(type) {
    if (type === 'svg') {
        return 128 /* SvgElement */;
    }
    else if (type === 'input') {
        return 512 /* InputElement */;
    }
    else if (type === 'select') {
        return 2048 /* SelectElement */;
    }
    else if (type === 'textarea') {
        return 1024 /* TextareaElement */;
    }
    else if (type === 'media') {
        return 256 /* MediaElement */;
    }
    return 2 /* HtmlElement */;
}
exports.getFlagsForElementVnode = getFlagsForElementVnode;
function normalize(vNode) {
    var props = vNode.props;
    var children = vNode.children;
    // convert a wrongly created type back to element
    // Primitive node doesn't have defaultProps, only Component
    if (vNode.flags & 28 /* Component */) {
        // set default props
        var type = vNode.type;
        var defaultProps = type.defaultProps;
        if (!inferno_shared_1.isNullOrUndef(defaultProps)) {
            if (!props) {
                props = vNode.props = defaultProps; // Create new object if only defaultProps given
            }
            else {
                for (var prop in defaultProps) {
                    if (inferno_shared_1.isUndefined(props[prop])) {
                        props[prop] = defaultProps[prop];
                    }
                }
            }
        }
        if (inferno_shared_1.isString(type)) {
            vNode.flags = getFlagsForElementVnode(type);
            if (props && props.children) {
                vNode.children = props.children;
                children = props.children;
            }
        }
    }
    if (props) {
        normalizeProps(vNode, props, children);
        if (!inferno_shared_1.isInvalid(props.children)) {
            props.children = normalizeChildren(props.children);
        }
    }
    if (!inferno_shared_1.isInvalid(children)) {
        vNode.children = normalizeChildren(children);
    }
    if (process.env.NODE_ENV !== 'production') {
        // This code will be stripped out from production CODE
        // It helps users to track errors in their applications.
        var verifyKeys = function (vNodes) {
            var keyValues = vNodes.map(function (vnode) {
                return vnode.key;
            });
            keyValues.some(function (item, idx) {
                var hasDuplicate = keyValues.indexOf(item) !== idx;
                if (hasDuplicate) {
                    inferno_shared_1.warning('Inferno normalisation(...): Encountered two children with same key, all keys must be unique within its siblings. Duplicated key is:' + item);
                }
                return hasDuplicate;
            });
        };
        if (vNode.children && Array.isArray(vNode.children)) {
            verifyKeys(vNode.children);
        }
    }
}
exports.normalize = normalize;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(83);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(84);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  var last = funcs[funcs.length - 1];
  var rest = funcs.slice(0, -1);
  return function () {
    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined, arguments));
  };
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["a"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(41);

var _viewportController = __webpack_require__(36);

var _rendererController = __webpack_require__(34);

var _socketController = __webpack_require__(35);

var _helium = __webpack_require__(3);

var _textField = __webpack_require__(33);

var _inject = __webpack_require__(31);

var _nineSlicePlane = __webpack_require__(32);

var _mainScene = __webpack_require__(54);

var _infernoMainScene = __webpack_require__(52);

var _inferno = __webpack_require__(19);

var _infernoCreateElement = __webpack_require__(11);

var _infernoCreateElement2 = _interopRequireDefault(_infernoCreateElement);

var _infernoRedux = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = exports.Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    var store = Redux.createStore(_index.game);

    this.store = store;
  }

  _createClass(Game, [{
    key: 'start',
    value: function start() {
      (0, _helium.importPixiBaseView)();
      (0, _helium.registerBaseView)('TextField', _textField.TextField);
      (0, _helium.registerBaseView)('Inject', _inject.Inject);
      (0, _helium.registerBaseView)('NineSlicePlane', _nineSlicePlane.NineSlicePlane);
      var store = this.store;
      var viewportController = (0, _viewportController.ViewportController)(store);
      viewportController.start(); // ensure the viewport has been initialize
      var state = store.getState();
      var viewport = state.viewport;
      var infernoStage = document.getElementById('inferno-stage');
      var heliumStage = document.getElementById('helium-stage');
      var width = viewport.width,
          height = viewport.height,
          resolution = viewport.resolution;

      var renderer = PIXI.autoDetectRenderer(width / resolution, height / resolution, {
        autoResize: true,
        transparent: true,
        resolution: resolution
      });
      heliumStage.appendChild(renderer.view);
      var rendererController = (0, _rendererController.RendererController)(store, renderer);
      var socketController = (0, _socketController.SocketController)(store);
      rendererController.start();
      var input = (0, _helium.createElement)(_helium.Provider, {
        store: store
      }, (0, _helium.createElement)(_mainScene.ConnectMainScene));
      var root = new _helium.HOM('Container');
      var draw = function draw() {
        (0, _helium.patchAnimation)(Date.now());
        renderer.render(root.tagInstance.el);
        requestAnimationFrame(draw);
      };
      (0, _helium.render)(input, root);
      (0, _inferno.render)((0, _infernoCreateElement2.default)(_infernoRedux.Provider, {
        store: store
      }, (0, _helium.createElement)(_infernoMainScene.ConnectInfernoMainScene)), infernoStage);
      draw();
      socketController.start();
      this.renderer = renderer;
    }
  }]);

  return Game;
}();

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Inject = exports.Inject = function () {
  function Inject() {
    _classCallCheck(this, Inject);

    var el = new PIXI.Container();
    this.el = el;
  }

  _createClass(Inject, [{
    key: 'setAttribute',
    value: function setAttribute(key, value) {
      if (key === 'el') {
        this.el.addChild(value);
      }
    }
  }, {
    key: 'removeAttribute',
    value: function removeAttribute() {}
  }, {
    key: 'updateChildren',
    value: function updateChildren() {}
  }]);

  return Inject;
}();

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NineSlicePlane = exports.NineSlicePlane = function () {
  function NineSlicePlane(_ref) {
    var texture = _ref.texture,
        leftWidth = _ref.leftWidth,
        topHeight = _ref.topHeight,
        rightWidth = _ref.rightWidth,
        bottomHeight = _ref.bottomHeight;

    _classCallCheck(this, NineSlicePlane);

    var el = new PIXI.mesh.NineSlicePlane(texture, leftWidth, topHeight, rightWidth, bottomHeight);

    this.el = el;
  }

  _createClass(NineSlicePlane, [{
    key: "setAttribute",
    value: function setAttribute(key, value) {
      this.el[key] = value;
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute() {}
  }, {
    key: "updateChildren",
    value: function updateChildren(children) {
      this.el.children = [];
      for (var i = 0, len = children.length; i < len; i++) {
        this.el.addChild(children[i].tagInstance.el);
      }
    }
  }]);

  return NineSlicePlane;
}();

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextField = exports.TextField = function () {
  function TextField() {
    var _this = this;

    _classCallCheck(this, TextField);

    var el = new PIXI.Sprite();
    var input = document.createElement('input');
    this.isFocus = false;
    input.style.position = 'fixed';
    input.style.display = 'none';
    input.style.zIndex = 2;
    document.body.appendChild(input);

    input.addEventListener('blur', function () {
      input.style.display = 'none';
      _this.isFocus = false;
      if (el.blur) {
        el.blur();
      }
    });
    input.addEventListener('change', function () {
      if (el.change) {
        el.change(input.value);
      }
    });
    el.interactive = true;
    el.fontSize = 16;
    el.color = '#000';
    el.pointertap = function () {
      _this.isFocus = true;
      _this.updateInput();
      input.style.display = 'block';
      input.focus();
      if (el.focus) {
        el.focus();
      }
    };

    this.el = el;
    this.input = input;
  }

  _createClass(TextField, [{
    key: 'updateInput',
    value: function updateInput() {
      var el = this.el;
      var input = this.input;
      el.updateTransform();
      input.style.width = el.worldTransform.a + 'px';
      input.style.height = el.worldTransform.d + 'px';
      input.style.top = el.worldTransform.ty + 'px';
      input.style.left = el.worldTransform.tx + 'px';
      input.style.fontSize = el.fontSize + 'px';
      input.style.color = el.color;
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute(key, value) {
      this.el[key] = value;
      if (this.isFocus) {
        this.updateInput();
      }
    }
  }, {
    key: 'removeAttribute',
    value: function removeAttribute() {}
  }, {
    key: 'updateChildren',
    value: function updateChildren(children) {
      this.el.children = [];
      for (var i = 0, len = children.length; i < len; i++) {
        this.el.addChild(children[i].tagInstance.el);
      }
    }
  }]);

  return TextField;
}();

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RendererController = RendererController;
function RendererController(store, renderer) {

  var unsubscribe = void 0;
  function resize() {
    var state = store.getState();
    var viewport = state.viewport;
    var width = viewport.width,
        height = viewport.height,
        resolution = viewport.resolution;

    renderer.resize(width / resolution, height / resolution);
  }

  return {
    start: function start() {
      if (unsubscribe) {
        unsubscribe();
      }
      unsubscribe = store.subscribe(resize);
    },
    stop: function stop() {
      if (unsubscribe) {
        unsubscribe();
        unsubscribe = null;
      }
    }
  };
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocketController = SocketController;

var _constants = __webpack_require__(13);

var _actions = __webpack_require__(1);

function SocketController(store) {

  var socket = window.io();
  var unsubscribe = void 0;

  socket.on('connect', function onConnect() {
    setTimeout(function () {
      socket.emit('syncGameList');
    }, 1000);
  });

  socket.on('gameList', function onGameListUpdate(gameList) {
    store.dispatch({
      type: _actions.Actions.UpdateGameList,
      gameList: gameList
    });
  });

  socket.on('gameUpdate', function onGameUpdate(gameInstance) {
    var state = store.getState();
    store.dispatch({
      type: _actions.Actions.UpdateGame,
      name: state.name,
      gameInstance: gameInstance
    });
  });

  function enterRoomMessage(state) {
    if (!state.isEnteredRoom && state.gameScene !== _constants.GameScene.Naming && state.gameScene !== _constants.GameScene.ChoosingAction) {
      if (state.isHost) {
        socket.emit('createGame', state.name);
      } else {
        socket.emit('joinGame', state.name, state.gameId);
      }
      store.dispatch({
        type: _actions.Actions.SendedConfirmName
      });
    }
  }

  function fireMessage() {
    var state = store.getState();
    enterRoomMessage(state);
  }

  return {
    start: function start() {
      if (unsubscribe) {
        unsubscribe();
      }
      unsubscribe = store.subscribe(fireMessage);
    },
    stop: function stop() {
      if (unsubscribe) {
        unsubscribe();
        unsubscribe = null;
      }
    }
  };
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewportController = ViewportController;

var _actions = __webpack_require__(1);

function ViewportController(store) {
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

  var intervalTimer = void 0;
  var _innerHeight = void 0;
  var _innerWidth = void 0;
  var _resolution = void 0;

  function resize() {
    var innerWidth = window.innerWidth;
    var innerHeight = window.innerHeight;
    var resolution = Math.round(window.devicePixelRatio);
    if (innerWidth !== _innerWidth || innerHeight !== _innerHeight || _resolution !== resolution) {
      _innerWidth = innerWidth;
      _innerHeight = innerHeight;
      _resolution = resolution;
      store.dispatch({
        type: _actions.Actions.Resize,
        width: innerWidth,
        height: innerHeight,
        resolution: resolution
      });
    }
  }

  return {
    start: function start() {
      window.addEventListener('resize', resize);
      if (intervalTimer) {
        clearInterval(intervalTimer);
      }
      intervalTimer = setInterval(resize, interval);
      resize();
    },
    stop: function stop() {
      window.removeEventListener('resize', resize);
      if (intervalTimer) {
        clearInterval(intervalTimer);
        intervalTimer = null;
      }
    }
  };
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(30);

var game = new _game.Game();
game.start();

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameId = gameId;

var _actions = __webpack_require__(1);

function gameId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
  var action = arguments[1];

  switch (action.type) {
    case _actions.Actions.JoinGame:
      return action.gameId;
    default:
      return state;
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameList = gameList;

var _actions = __webpack_require__(1);

function gameList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.Actions.UpdateGameList:
      return action.gameList;
    default:
      return state;
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameScene = gameScene;

var _constants = __webpack_require__(13);

var _actions = __webpack_require__(1);

function gameScene() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.GameScene.Naming;
  var action = arguments[1];

  switch (action.type) {
    case _actions.Actions.ConfirmName:
      if (state === _constants.GameScene.Naming) {
        return _constants.GameScene.ChoosingAction;
      }
      return state;
    case _actions.Actions.JoinGame:
    case _actions.Actions.CreateGame:
      return _constants.GameScene.Room;
    default:
      return state;
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.game = undefined;

var _gameScene = __webpack_require__(40);

var _viewport = __webpack_require__(47);

var _name = __webpack_require__(44);

var _isEnteredRoom = __webpack_require__(42);

var _gameId = __webpack_require__(38);

var _isHost = __webpack_require__(43);

var _gameList = __webpack_require__(39);

var _users = __webpack_require__(46);

var _players = __webpack_require__(45);

var game = Redux.combineReducers({
  gameScene: _gameScene.gameScene,
  viewport: _viewport.viewport,
  name: _name.name,
  isEnteredRoom: _isEnteredRoom.isEnteredRoom,
  gameId: _gameId.gameId,
  isHost: _isHost.isHost,
  gameList: _gameList.gameList,
  users: _users.users,
  players: _players.players
});

exports.game = game;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEnteredRoom = isEnteredRoom;

var _actions = __webpack_require__(1);

function isEnteredRoom() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _actions.Actions.SendedConfirmName:
      return true;
    default:
      return state;
  }
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHost = isHost;

var _actions = __webpack_require__(1);

function isHost() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _actions.Actions.CreateGame:
      return true;
    case _actions.Actions.UpdateGame:
      {
        var gameInstance = action.gameInstance;
        var users = gameInstance.users;
        var name = action.name;
        var me = users.find(function (user) {
          return user.name === name;
        });
        if (me) {
          return me.isHost;
        }
        return state;
      }
    default:
      return state;
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = name;

var _actions = __webpack_require__(1);

function name() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case _actions.Actions.ConfirmName:
      return action.name;
    default:
      return state;
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.players = players;

var _actions = __webpack_require__(1);

function players() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.Actions.UpdateGame:
      {
        var gameInstance = action.gameInstance;
        return gameInstance.players;
      }
    default:
      return state;
  }
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.users = users;

var _actions = __webpack_require__(1);

function users() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.Actions.UpdateGame:
      {
        var gameInstance = action.gameInstance;
        return gameInstance.users;
      }
    default:
      return state;
  }
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewport = viewport;

var _actions = __webpack_require__(1);

function viewport() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    width: 0,
    height: 0,
    resolution: 1
  };
  var action = arguments[1];

  switch (action.type) {
    case _actions.Actions.Resize:
      {
        var _action$width = action.width,
            width = _action$width === undefined ? 0 : _action$width,
            _action$height = action.height,
            height = _action$height === undefined ? 0 : _action$height,
            _action$resolution = action.resolution,
            resolution = _action$resolution === undefined ? 1 : _action$resolution;

        return {
          width: width * resolution,
          height: height * resolution,
          resolution: resolution
        };
      }
    default:
      return state;
  }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Armor = Armor;

var _helium = __webpack_require__(3);

var _helpers = __webpack_require__(5);

var _constants = __webpack_require__(9);

var _deck = __webpack_require__(10);

var DefaultHeight = 24;
var ArmorName = new Map();
ArmorName.set(_constants.EquipmentType.EightTrigrams, '八卦陣');
ArmorName.set(_constants.EquipmentType.RenWangShield, '仁王盾');
ArmorName.set(_constants.EquipmentType.RattanArmour, '藤甲');
ArmorName.set(_constants.EquipmentType.SliverLionHelmet, '白銀獅子');
ArmorName.set(_constants.EquipmentType.FireArmor, '明光鎧');
ArmorName.set(_constants.EquipmentType.HeartShield, '護心鏡');

function Armor(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 0 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 0 : _ref$height,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      _ref$cardId = _ref.cardId,
      cardId = _ref$cardId === undefined ? -1 : _ref$cardId;

  var fontFamily = '\"微軟正黑體\", Arial, Helvetica, sans-serif';
  var fontSize = (0, _helpers.getValue)(9, height, DefaultHeight);
  var textY = (0, _helpers.getValue)(6, height, DefaultHeight);
  var style = {
    fontSize: fontSize,
    fontFamily: fontFamily,
    fill: 'white',
    fontWeight: 'bold'
  };
  var children = [];
  if (cardId !== -1) {
    var card = _deck.FullDeck.find(function (cardInDeck) {
      return cardInDeck.id === cardId;
    });
    if (card) {
      var suitWidth = (0, _helpers.getValue)(14.4, height, DefaultHeight);
      var numberText = (0, _helpers.getValueText)(card.value);
      var numberWidth = (0, _helpers.getTextWidth)(numberText, style);
      var armorText = ArmorName.get(card.effectType);
      var iconY = (0, _helpers.getValue)(4, height, DefaultHeight);
      if (armorText) {
        var armorTextWidth = (0, _helpers.getTextWidth)(armorText, style);
        var numberPadding = (0, _helpers.getValue)(2, height, DefaultHeight);
        var armorTextPadding = (0, _helpers.getValue)(4, height, DefaultHeight);
        var wholeWidth = suitWidth + numberWidth + numberPadding + armorTextPadding + armorTextWidth;
        var margin = (width - wholeWidth) / 2 - (0, _helpers.getValue)(3, height, DefaultHeight);
        children.push((0, _helium.createElement)('Sprite', {
          width: suitWidth,
          height: suitWidth,
          y: iconY,
          x: margin,
          texture: PIXI.Texture.fromImage((0, _helpers.getSuitImagePath)(card.suit))
        }), (0, _helium.createElement)('Text', {
          text: numberText,
          style: style,
          y: textY,
          x: margin + suitWidth + numberPadding
        }), (0, _helium.createElement)('Text', {
          text: armorText,
          style: style,
          y: textY,
          x: margin + suitWidth + numberPadding + numberWidth + armorTextPadding
        }));
      }
    }
  } else {
    children.push((0, _helium.createElement)('Text', {
      text: '防具',
      style: {
        fill: '#BF5C19',
        fontWeight: 'bold',
        fontSize: fontSize
      },
      anchor: {
        x: 0.5,
        y: 0
      },
      x: width / 2,
      y: textY
    }));
  }
  return (0, _helium.createElement)('Container', {
    x: x,
    y: y
  }, children);
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectChoosingActionScene = undefined;
exports.ChoosingActionScene = ChoosingActionScene;

var _infernoRedux = __webpack_require__(14);

var _infernoCreateElement = __webpack_require__(11);

var _infernoCreateElement2 = _interopRequireDefault(_infernoCreateElement);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ChoosingActionScene(_ref) {
  var gameList = _ref.gameList,
      onCreateGame = _ref.onCreateGame,
      onJoinGame = _ref.onJoinGame;

  return (0, _infernoCreateElement2.default)('div', {
    className: 'inferno-form'
  }, (0, _infernoCreateElement2.default)('form', {
    name: 'joinGame',
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      if (gameList.indexOf(document.forms.joinGame.gameId.value) !== -1) {
        onJoinGame(e);
      }
      return false;
    }
  }, (0, _infernoCreateElement2.default)('input', {
    type: 'text',
    name: 'gameId',
    placeholder: 'Join Game ID',
    defaultValue: name,
    required: 'required',
    className: 'helium-input'
  }), (0, _infernoCreateElement2.default)('button', {
    type: 'submit',
    className: 'helium-button'
  }, 'Join Game'), (0, _infernoCreateElement2.default)('div', {
    className: 'split-line-container'
  }, (0, _infernoCreateElement2.default)('span', {
    className: 'split-line'
  }), (0, _infernoCreateElement2.default)('span', {
    className: 'or'
  }, 'OR'), (0, _infernoCreateElement2.default)('span', {
    className: 'split-line'
  })), (0, _infernoCreateElement2.default)('button', {
    onClick: onCreateGame,
    className: 'helium-button',
    type: 'button'
  }, 'Create Game')));
}

var ConnectChoosingActionScene = (0, _infernoRedux.connect)(function mapStateToProps(state) {
  return {
    gameList: state.gameList
  };
}, function mapDispatchToProps(dispatch) {
  return {
    onCreateGame: function onCreateGame() {
      dispatch({
        type: _actions.Actions.CreateGame
      });
    },
    onJoinGame: function onJoinGame() {
      dispatch({
        type: _actions.Actions.JoinGame,
        gameId: document.forms.joinGame.gameId.value
      });
      return false;
    }
  };
})(ChoosingActionScene);

exports.ConnectChoosingActionScene = ConnectChoosingActionScene;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefenseHorse = DefenseHorse;

var _helium = __webpack_require__(3);

var _helpers = __webpack_require__(5);

var _deck = __webpack_require__(10);

var DefaultHeight = 24;

function DefenseHorse(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 0 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 0 : _ref$height,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      _ref$cardId = _ref.cardId,
      cardId = _ref$cardId === undefined ? -1 : _ref$cardId;

  var fontFamily = '\"微軟正黑體\", Arial, Helvetica, sans-serif';
  var fontSize = (0, _helpers.getValue)(9, height, DefaultHeight);
  var textY = (0, _helpers.getValue)(5, height, DefaultHeight);
  var style = {
    fontSize: fontSize,
    fontFamily: fontFamily,
    fill: 'white',
    fontWeight: 'bold'
  };
  var children = [];
  if (cardId !== -1) {
    var card = _deck.FullDeck.find(function (cardInDeck) {
      return cardInDeck.id === cardId;
    });
    if (card) {
      var suitWidth = (0, _helpers.getValue)(14.4, height, DefaultHeight);
      var imageWidth = (0, _helpers.getValue)(16.2, height, DefaultHeight);
      var numberText = (0, _helpers.getValueText)(card.value);
      var numberWidth = (0, _helpers.getTextWidth)(numberText, style);
      var iconY = (0, _helpers.getValue)(3, height, DefaultHeight);
      var imageY = (0, _helpers.getValue)(3, height, DefaultHeight);
      var numberPadding = (0, _helpers.getValue)(2, height, DefaultHeight);
      var imagePadding = (0, _helpers.getValue)(4, height, DefaultHeight);
      var wholeWidth = suitWidth + numberWidth + numberPadding + imageWidth + imagePadding;
      var margin = (width - wholeWidth) / 2 - (0, _helpers.getValue)(3, height, DefaultHeight);
      children.push((0, _helium.createElement)('Sprite', {
        width: suitWidth,
        height: suitWidth,
        y: iconY,
        x: margin,
        texture: PIXI.Texture.fromImage((0, _helpers.getSuitImagePath)(card.suit))
      }), (0, _helium.createElement)('Text', {
        text: numberText,
        style: style,
        y: textY,
        x: margin + suitWidth + numberPadding
      }), (0, _helium.createElement)('Sprite', {
        x: margin + suitWidth + numberPadding + numberWidth + imagePadding,
        y: imageY,
        width: imageWidth,
        height: imageWidth,
        texture: PIXI.Texture.fromImage('assets/image/horse-plus-one.png')
      }));
    }
  } else {
    children.push((0, _helium.createElement)('Text', {
      text: '坐騎',
      style: {
        fill: '#BF5C19',
        fontWeight: 'bold',
        fontSize: fontSize
      },
      anchor: {
        x: 0.5,
        y: 0
      },
      x: width / 2,
      y: textY
    }));
  }
  return (0, _helium.createElement)('Container', {
    x: x,
    y: y
  }, children);
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.General = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helium = __webpack_require__(3);

var _helpers = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultWidth = 81;

var General = exports.General = function (_Component) {
  _inherits(General, _Component);

  function General() {
    _classCallCheck(this, General);

    return _possibleConstructorReturn(this, (General.__proto__ || Object.getPrototypeOf(General)).apply(this, arguments));
  }

  _createClass(General, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.graphics = new PIXI.Graphics();
    }
  }, {
    key: 'render',
    value: function render(_ref) {
      var _ref$x = _ref.x,
          x = _ref$x === undefined ? 0 : _ref$x,
          _ref$y = _ref.y,
          y = _ref$y === undefined ? 0 : _ref$y,
          _ref$width = _ref.width,
          width = _ref$width === undefined ? 0 : _ref$width,
          _ref$name = _ref.name,
          name = _ref$name === undefined ? '暗將' : _ref$name;

      var graphics = this.graphics;
      graphics.clear();
      graphics.beginFill();
      graphics.drawRect(0, 0, (0, _helpers.getValue)(81, width, DefaultWidth), (0, _helpers.getValue)(108, width, DefaultWidth));
      graphics.endFill();
      var texture = void 0;
      if (name !== '') {
        texture = PIXI.Texture.fromImage('assets/image/generals/' + name + '.jpg');
      }
      return (0, _helium.createElement)('Container', {
        x: x,
        y: y,
        mask: graphics
      }, [(0, _helium.createElement)('Inject', {
        el: graphics
      }), (0, _helium.createElement)('Sprite', {
        x: (0, _helpers.getValue)(40.5, width, DefaultWidth),
        y: (0, _helpers.getValue)(-10, width, DefaultWidth),
        anchor: {
          x: 0.5,
          y: 0
        },
        width: (0, _helpers.getValue)(131, width, DefaultWidth),
        height: (0, _helpers.getValue)(190, width, DefaultWidth),
        texture: texture
      })]);
    }
  }]);

  return General;
}(_helium.Component);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectInfernoMainScene = undefined;
exports.InfernoMainScene = InfernoMainScene;

var _infernoRedux = __webpack_require__(14);

var _infernoCreateElement = __webpack_require__(11);

var _infernoCreateElement2 = _interopRequireDefault(_infernoCreateElement);

var _constants = __webpack_require__(13);

var _namingScene = __webpack_require__(55);

var _choosingActionScene = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InfernoMainScene(_ref) {
  var _ref$gameScene = _ref.gameScene,
      gameScene = _ref$gameScene === undefined ? _constants.GameScene.Naming : _ref$gameScene;

  var child = void 0;
  var display = 'none';
  switch (gameScene) {
    case _constants.GameScene.Naming:
      child = (0, _infernoCreateElement2.default)(_namingScene.ConnectNamingScene);
      display = 'block';
      break;
    case _constants.GameScene.ChoosingAction:
      child = (0, _infernoCreateElement2.default)(_choosingActionScene.ConnectChoosingActionScene);
      display = 'block';
      break;
  }
  return (0, _infernoCreateElement2.default)('div', {
    style: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 2,
      display: display
    }
  }, child);
}

var ConnectInfernoMainScene = (0, _infernoRedux.connect)(function mapStateToProps(state) {
  return {
    gameScene: state.gameScene
  };
})(InfernoMainScene);

exports.ConnectInfernoMainScene = ConnectInfernoMainScene;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectLobbyScene = undefined;
exports.LobbyScene = LobbyScene;

var _helium = __webpack_require__(3);

var _actions = __webpack_require__(1);

var _playerPanel = __webpack_require__(57);

var _helpers = __webpack_require__(5);

var DefaultWidth = 1152;
var PanelPosition = [{
  x: 927,
  y: 308
}, {
  x: 927,
  y: 55
}, {
  x: 694,
  y: 5
}, {
  x: 463,
  y: 5
}, {
  x: 234,
  y: 5
}, {
  x: 2,
  y: 55
}, {
  x: 2,
  y: 308
}];

function LobbyScene(_ref) {
  var width = _ref.width,
      x = _ref.x,
      y = _ref.y,
      users = _ref.users,
      userName = _ref.userName,
      isHost = _ref.isHost,
      onStartGame = _ref.onStartGame;

  var maxUser = 7;
  var children = [];
  var playerPanelWidth = (0, _helpers.getValue)(234, width, DefaultWidth);
  var playerPanelHeight = (0, _helpers.getValue)(259.976, width, DefaultWidth);
  var currentUser = users.find(function (user) {
    return user.name === userName;
  });
  var selfIndex = 0;
  if (currentUser) {
    selfIndex = users.indexOf(currentUser);
  }
  for (var i = selfIndex + 1; i <= selfIndex + maxUser; i++) {
    var index = i % (maxUser + 1);
    var seatIndex = i - selfIndex - 1;
    if (selfIndex < 0) {
      selfIndex += maxUser;
    }
    var _x = (0, _helpers.getValue)(PanelPosition[seatIndex].x, width, DefaultWidth);
    var _y = (0, _helpers.getValue)(PanelPosition[seatIndex].y, width, DefaultWidth);
    var name = '';
    if (users[index]) {
      name = users[index].name;
    }
    children.push((0, _helium.createElement)(_playerPanel.ConnectPlayerPanel, {
      name: name,
      x: _x,
      y: _y,
      position: index + 1,
      width: playerPanelWidth,
      height: playerPanelHeight
    }));
  }
  return (0, _helium.createElement)('Container', {
    x: x,
    y: y
  }, children);
}

var ConnectLobbyScene = (0, _helium.connect)(function mapStateToProps(state) {
  return {
    isHost: state.isHost,
    users: state.users,
    userName: state.name
  };
}, function mapDispatchToProp(dispatch) {
  return {
    onStartGame: function onStartGame() {
      dispatch({
        type: _actions.Actions.StartGame
      });
    }
  };
})(LobbyScene);

exports.ConnectLobbyScene = ConnectLobbyScene;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectMainScene = undefined;
exports.MainScene = MainScene;

var _helium = __webpack_require__(3);

var _constants = __webpack_require__(13);

var _lobbyScene = __webpack_require__(53);

var DefaultWidth = 1152;
var DefaultHeight = 768;

function MainScene(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 0 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 0 : _ref$height,
      _ref$resolution = _ref.resolution,
      resolution = _ref$resolution === undefined ? 1 : _ref$resolution,
      _ref$gameScene = _ref.gameScene,
      gameScene = _ref$gameScene === undefined ? _constants.GameScene.Naming : _ref$gameScene;

  var child = void 0;
  var ratio = Math.min(width / DefaultWidth, height / DefaultHeight);
  var sceneHeight = DefaultHeight * ratio;
  var sceneWidth = DefaultWidth * ratio;
  var sceneX = (width - sceneWidth) / 2;
  var sceneY = (height - sceneHeight) / 2;

  switch (gameScene) {
    case _constants.GameScene.Room:
      child = (0, _helium.createElement)(_lobbyScene.ConnectLobbyScene, {
        width: sceneWidth,
        height: sceneHeight,
        x: sceneX,
        y: sceneY
      });
      break;
  }

  return (0, _helium.createElement)('Container', {
    scale: {
      x: 1 / resolution,
      y: 1 / resolution
    }
  }, child);
}

var ConnectMainScene = (0, _helium.connect)(function mapStateToProps(state) {
  var _state$viewport = state.viewport,
      _state$viewport$width = _state$viewport.width,
      width = _state$viewport$width === undefined ? 0 : _state$viewport$width,
      _state$viewport$heigh = _state$viewport.height,
      height = _state$viewport$heigh === undefined ? 0 : _state$viewport$heigh,
      _state$viewport$resol = _state$viewport.resolution,
      resolution = _state$viewport$resol === undefined ? 1 : _state$viewport$resol;

  return {
    width: width,
    height: height,
    resolution: resolution,
    gameScene: state.gameScene
  };
})(MainScene);

exports.ConnectMainScene = ConnectMainScene;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectNamingScene = undefined;
exports.NamingScene = NamingScene;

var _infernoRedux = __webpack_require__(14);

var _infernoCreateElement = __webpack_require__(11);

var _infernoCreateElement2 = _interopRequireDefault(_infernoCreateElement);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NamingScene(_ref) {
  var name = _ref.name,
      onSubmit = _ref.onSubmit;

  return (0, _infernoCreateElement2.default)('div', {
    className: 'inferno-form'
  }, (0, _infernoCreateElement2.default)('form', {
    name: 'naming',
    onSubmit: onSubmit
  }, (0, _infernoCreateElement2.default)('input', {
    type: 'text',
    name: 'name',
    className: 'helium-input',
    required: 'required',
    placeholder: 'Name',
    defaultValue: name
  }), (0, _infernoCreateElement2.default)('button', {
    type: 'submit',
    className: 'helium-button'
  }, 'Confirm')));
}

var ConnectNamingScene = (0, _infernoRedux.connect)(function mapStateToProps(state) {
  return {
    name: state.name
  };
}, function mapDispatchToProps(dispatch) {
  return {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      dispatch({
        type: _actions.Actions.ConfirmName,
        name: document.forms.naming.name.value
      });
      return false;
    }
  };
})(NamingScene);

exports.ConnectNamingScene = ConnectNamingScene;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OffenseHorse = OffenseHorse;

var _helium = __webpack_require__(3);

var _helpers = __webpack_require__(5);

var _deck = __webpack_require__(10);

var DefaultHeight = 24;

function OffenseHorse(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 0 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 0 : _ref$height,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      _ref$cardId = _ref.cardId,
      cardId = _ref$cardId === undefined ? -1 : _ref$cardId;

  var fontFamily = '\"微軟正黑體\", Arial, Helvetica, sans-serif';
  var fontSize = (0, _helpers.getValue)(9, height, DefaultHeight);
  var textY = (0, _helpers.getValue)(5, height, DefaultHeight);
  var style = {
    fontSize: fontSize,
    fontFamily: fontFamily,
    fill: 'white',
    fontWeight: 'bold'
  };
  var children = [];
  if (cardId !== -1) {
    var card = _deck.FullDeck.find(function (cardInDeck) {
      return cardInDeck.id === cardId;
    });
    if (card) {
      var suitWidth = (0, _helpers.getValue)(14.4, height, DefaultHeight);
      var imageWidth = (0, _helpers.getValue)(16.2, height, DefaultHeight);
      var numberText = (0, _helpers.getValueText)(card.value);
      var numberWidth = (0, _helpers.getTextWidth)(numberText, style);
      var iconY = (0, _helpers.getValue)(3, height, DefaultHeight);
      var imageY = (0, _helpers.getValue)(3, height, DefaultHeight);
      var numberPadding = (0, _helpers.getValue)(2, height, DefaultHeight);
      var imagePadding = (0, _helpers.getValue)(4, height, DefaultHeight);
      var wholeWidth = suitWidth + numberWidth + numberPadding + imageWidth + imagePadding;
      var margin = (width - wholeWidth) / 2 - (0, _helpers.getValue)(2, height, DefaultHeight);
      children.push((0, _helium.createElement)('Sprite', {
        width: suitWidth,
        height: suitWidth,
        y: iconY,
        x: margin,
        texture: PIXI.Texture.fromImage((0, _helpers.getSuitImagePath)(card.suit))
      }), (0, _helium.createElement)('Text', {
        text: numberText,
        style: style,
        y: textY,
        x: margin + suitWidth + numberPadding
      }), (0, _helium.createElement)('Sprite', {
        x: margin + suitWidth + numberPadding + numberWidth + imagePadding,
        y: imageY,
        width: imageWidth,
        height: imageWidth,
        texture: PIXI.Texture.fromImage('assets/image/horse-minus-one.png')
      }));
    }
  } else {
    children.push((0, _helium.createElement)('Text', {
      text: '坐騎',
      style: {
        fill: '#BF5C19',
        fontWeight: 'bold',
        fontSize: fontSize
      },
      anchor: {
        x: 0.5,
        y: 0
      },
      x: width / 2,
      y: textY
    }));
  }
  return (0, _helium.createElement)('Container', {
    x: x,
    y: y
  }, children);
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectPlayerPanel = undefined;
exports.PlayerPanel = PlayerPanel;

var _helium = __webpack_require__(3);

var _constants = __webpack_require__(61);

var _helpers = __webpack_require__(5);

var _rectangle = __webpack_require__(58);

var _weapon = __webpack_require__(60);

var _armor = __webpack_require__(48);

var _defenseHorse = __webpack_require__(50);

var _offenseHorse = __webpack_require__(56);

var _general = __webpack_require__(51);

var _treasure = __webpack_require__(59);

var DefaultWidth = 234;

function PlayerPanel(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 0 : _ref$width,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      _ref$name = _ref.name,
      name = _ref$name === undefined ? '' : _ref$name,
      _ref$maxHp = _ref.maxHp,
      maxHp = _ref$maxHp === undefined ? 0 : _ref$maxHp,
      _ref$hp = _ref.hp,
      hp = _ref$hp === undefined ? 0 : _ref$hp,
      _ref$position = _ref.position,
      position = _ref$position === undefined ? 1 : _ref$position,
      _ref$generals = _ref.generals,
      generals = _ref$generals === undefined ? ['暗將', '暗將'] : _ref$generals;

  var fontFamily = '\"微軟正黑體\", Arial, Helvetica, sans-serif';
  var mainGeneralText = '主 | ' + (generals[0] !== '暗將' ? generals[0] : '');
  var viceGeneralText = '副 | ' + (generals[1] !== '暗將' ? generals[0] : '');
  var generalTextStyle = {
    fill: 'white',
    fontFamily: fontFamily,
    fontWeight: 'bold',
    fontSize: (0, _helpers.getValue)(8, width, DefaultWidth)
  };

  return (0, _helium.createElement)('Container', {
    x: x,
    y: y
  }, [(0, _helium.createElement)('Sprite', {
    texture: PIXI.Texture.fromImage('assets/image/panel-enemy.png'),
    width: width,
    height: width
  }), (0, _helium.createElement)('Sprite', {
    texture: PIXI.Texture.fromImage('assets/image/region-purple.png'),
    width: (0, _helpers.getValue)(54, width, DefaultWidth),
    height: (0, _helpers.getValue)(54, width, DefaultWidth)
  }), (0, _helium.createElement)(_general.General, {
    x: (0, _helpers.getValue)(36.5, width, DefaultWidth),
    y: (0, _helpers.getValue)(51, width, DefaultWidth),
    width: (0, _helpers.getValue)(80, width, DefaultWidth)
  }), (0, _helium.createElement)(_general.General, {
    x: (0, _helpers.getValue)(119.5, width, DefaultWidth),
    y: (0, _helpers.getValue)(51, width, DefaultWidth),
    width: (0, _helpers.getValue)(80, width, DefaultWidth)
  }), (0, _helium.createElement)('Sprite', {
    texture: PIXI.Texture.fromImage('assets/image/chain.png'),
    anchor: {
      x: 0.5,
      y: 0
    },
    x: width / 2,
    y: (0, _helpers.getValue)(102.43, width, DefaultWidth),
    width: (0, _helpers.getValue)(203.1, width, DefaultWidth),
    height: (0, _helpers.getValue)(41.4, width, DefaultWidth)
  }), (0, _helium.createElement)(_rectangle.Rectangle, {
    color: 0x000000,
    alpha: 0.5,
    x: (0, _helpers.getValue)(36, width, DefaultWidth),
    y: (0, _helpers.getValue)(54.5, width, DefaultWidth),
    width: (0, _helpers.getValue)(70, width, DefaultWidth),
    height: (0, _helpers.getValue)(15, width, DefaultWidth)
  }), (0, _helium.createElement)(_rectangle.Rectangle, {
    color: 0x000000,
    alpha: 0.5,
    x: (0, _helpers.getValue)(119, width, DefaultWidth),
    y: (0, _helpers.getValue)(54.5, width, DefaultWidth),
    width: (0, _helpers.getValue)(70, width, DefaultWidth),
    height: (0, _helpers.getValue)(15, width, DefaultWidth)
  }), (0, _helium.createElement)(_rectangle.Rectangle, {
    color: 0xffffff,
    alpha: 0.5,
    x: (0, _helpers.getValue)(36.5, width, DefaultWidth),
    y: (0, _helpers.getValue)(140, width, DefaultWidth),
    anchor: {
      x: 0,
      y: 1
    },
    width: (0, _helpers.getValue)(80, width, DefaultWidth),
    height: (0, _helpers.getValue)(16, width, DefaultWidth)
  }), (0, _helium.createElement)(_rectangle.Rectangle, {
    color: 0xffffff,
    alpha: 0.5,
    x: (0, _helpers.getValue)(119.5, width, DefaultWidth),
    y: (0, _helpers.getValue)(140, width, DefaultWidth),
    anchor: {
      x: 0,
      y: 1
    },
    width: (0, _helpers.getValue)(80.5, width, DefaultWidth),
    height: (0, _helpers.getValue)(16, width, DefaultWidth)
  }), (0, _helium.createElement)('Text', {
    text: position + ' | ' + name,
    x: (0, _helpers.getValue)(43, width, DefaultWidth),
    y: (0, _helpers.getValue)(31, width, DefaultWidth),
    style: {
      fill: 'white',
      fontFamily: fontFamily,
      fontWeight: 'bold',
      fontSize: (0, _helpers.getValue)(11, width, DefaultWidth)
    }
  }), (0, _helium.createElement)('Text', {
    text: mainGeneralText,
    x: (0, _helpers.getValue)(38, width, DefaultWidth),
    y: (0, _helpers.getValue)(57, width, DefaultWidth),
    style: generalTextStyle
  }), (0, _helium.createElement)('Text', {
    text: viceGeneralText,
    x: (0, _helpers.getValue)(122, width, DefaultWidth),
    y: (0, _helpers.getValue)(57, width, DefaultWidth),
    style: generalTextStyle
  }), (0, _helium.createElement)('Text', {
    text: '0',
    x: (0, _helpers.getValue)(151, width, DefaultWidth),
    y: (0, _helpers.getValue)(32, width, DefaultWidth),
    anchor: {
      x: 0.5,
      y: 0
    },
    style: {
      fill: 'white',
      fontFamily: fontFamily,
      fontWeight: 'bold',
      fontSize: (0, _helpers.getValue)(9, width, DefaultWidth)
    }
  }), (0, _helium.createElement)('Text', {
    text: hp + '/' + maxHp,
    x: (0, _helpers.getValue)(197, width, DefaultWidth),
    y: (0, _helpers.getValue)(32, width, DefaultWidth),
    anchor: {
      x: 1,
      y: 0
    },
    style: {
      fill: 'white',
      fontFamily: fontFamily,
      fontWeight: 'bold',
      fontSize: (0, _helpers.getValue)(9, width, DefaultWidth)
    }
  }), (0, _helium.createElement)(_weapon.Weapon, {
    x: (0, _helpers.getValue)(36.5, width, DefaultWidth),
    y: (0, _helpers.getValue)(158.5, width, DefaultWidth),
    width: (0, _helpers.getValue)(80.5, width, DefaultWidth),
    height: (0, _helpers.getValue)(24, width, DefaultWidth)
  }), (0, _helium.createElement)(_armor.Armor, {
    x: (0, _helpers.getValue)(120, width, DefaultWidth),
    y: (0, _helpers.getValue)(158.5, width, DefaultWidth),
    width: (0, _helpers.getValue)(80.5, width, DefaultWidth),
    height: (0, _helpers.getValue)(24, width, DefaultWidth)
  }), (0, _helium.createElement)(_defenseHorse.DefenseHorse, {
    x: (0, _helpers.getValue)(36.5, width, DefaultWidth),
    y: (0, _helpers.getValue)(184.5, width, DefaultWidth),
    width: (0, _helpers.getValue)(49.5, width, DefaultWidth),
    height: (0, _helpers.getValue)(24, width, DefaultWidth)
  }), (0, _helium.createElement)(_offenseHorse.OffenseHorse, {
    x: (0, _helpers.getValue)(87.5, width, DefaultWidth),
    y: (0, _helpers.getValue)(184.5, width, DefaultWidth),
    width: (0, _helpers.getValue)(49.5, width, DefaultWidth),
    height: (0, _helpers.getValue)(24, width, DefaultWidth)
  }), (0, _helium.createElement)(_treasure.Treasure, {
    x: (0, _helpers.getValue)(137.5, width, DefaultWidth),
    y: (0, _helpers.getValue)(184.5, width, DefaultWidth),
    width: (0, _helpers.getValue)(63.5, width, DefaultWidth),
    height: (0, _helpers.getValue)(24, width, DefaultWidth)
  })]);
}

var ConnectPlayerPanel = (0, _helium.connect)(function mapStateToProps(state, _ref2) {
  var _ref2$name = _ref2.name,
      name = _ref2$name === undefined ? '' : _ref2$name;

  var player = state.players.find(function (item) {
    return item.name === name;
  });
  if (player) {
    var _player$hp = player.hp,
        hp = _player$hp === undefined ? 0 : _player$hp,
        _player$maxHp = player.maxHp,
        maxHp = _player$maxHp === undefined ? 0 : _player$maxHp,
        _player$generals = player.generals,
        generals = _player$generals === undefined ? ['暗將', '暗將'] : _player$generals,
        _player$gender = player.gender,
        gender = _player$gender === undefined ? _constants.Gender.Undef : _player$gender,
        _player$region = player.region,
        region = _player$region === undefined ? _constants.Region.Undef : _player$region;

    return {
      hp: hp,
      maxHp: maxHp,
      generals: generals,
      gender: gender,
      region: region
    };
  }
  return null;
})(PlayerPanel);

exports.ConnectPlayerPanel = ConnectPlayerPanel;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rectangle = Rectangle;

var _helium = __webpack_require__(3);

var canvas = document.createElement('canvas');
canvas.width = 8;
canvas.height = 8;
var ctx = canvas.getContext('2d');
ctx.fillStyle = '#fff';
ctx.lineWidth = 0;
ctx.fillRect(0, 0, 8, 8);
var texture = PIXI.Texture.fromCanvas(canvas);

function Rectangle(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 0 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 0 : _ref$height,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 1 : _ref$alpha,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 0xffffff : _ref$color;

  return (0, _helium.createElement)('Sprite', {
    x: x,
    y: y,
    width: width,
    height: height,
    alpha: alpha,
    tint: color,
    texture: texture
  });
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Treasure = Treasure;

var _helium = __webpack_require__(3);

var _helpers = __webpack_require__(5);

var _deck = __webpack_require__(10);

var _constants = __webpack_require__(9);

var DefaultHeight = 24;
var TreasureName = new Map();
TreasureName.set(_constants.EquipmentType.WoodHorse, '木牛');
TreasureName.set(_constants.EquipmentType.JadeSeal, '玉璽');

function Treasure(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 0 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 0 : _ref$height,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      _ref$cardId = _ref.cardId,
      cardId = _ref$cardId === undefined ? -1 : _ref$cardId,
      _ref$cardInTreasure = _ref.cardInTreasure,
      cardInTreasure = _ref$cardInTreasure === undefined ? [] : _ref$cardInTreasure;

  var fontFamily = '\"微軟正黑體\", Arial, Helvetica, sans-serif';
  var fontSize = (0, _helpers.getValue)(9, height, DefaultHeight);
  var textY = (0, _helpers.getValue)(5, height, DefaultHeight);
  var style = {
    fontSize: fontSize,
    fontFamily: fontFamily,
    fill: 'white',
    fontWeight: 'bold'
  };
  var children = [];
  var cardInTreasureLength = cardInTreasure.length;
  var isHasCard = cardInTreasure.length > 0;
  if (cardId !== -1) {
    var card = _deck.FullDeck.find(function (cardInDeck) {
      return cardInDeck.id === cardId;
    });
    if (card) {
      var suitWidth = (0, _helpers.getValue)(14.4, height, DefaultHeight);
      var imageWidth = isHasCard ? 45 : 31.25;
      var imageHeight = (0, _helpers.getValue)(14.4, height, DefaultHeight);
      var realImageWidth = imageWidth * imageHeight / 18;
      var numberText = (0, _helpers.getValueText)(card.value);
      var numberWidth = (0, _helpers.getTextWidth)(numberText, style);
      var iconY = (0, _helpers.getValue)(3, height, DefaultHeight);
      var imageY = (0, _helpers.getValue)(4, height, DefaultHeight);
      var numberPadding = (0, _helpers.getValue)(2, height, DefaultHeight);
      var imagePadding = (0, _helpers.getValue)(4, height, DefaultHeight);
      var wholeWidth = suitWidth + numberWidth + numberPadding + realImageWidth + imagePadding;
      var margin = (width - wholeWidth) / 2 - (0, _helpers.getValue)(2, height, DefaultHeight);
      var treasureName = TreasureName.get(card.effectType);
      var _textY = (0, _helpers.getValue)(5, height, DefaultHeight);
      var textX = margin + suitWidth + numberPadding + numberWidth + imagePadding + (0, _helpers.getValue)(3, height, DefaultHeight);
      var circleWidth = (0, _helpers.getValue)(10.8, height, DefaultHeight);
      children.push((0, _helium.createElement)('Sprite', {
        width: suitWidth,
        height: suitWidth,
        y: iconY,
        x: margin,
        texture: PIXI.Texture.fromImage((0, _helpers.getSuitImagePath)(card.suit))
      }), (0, _helium.createElement)('Text', {
        text: numberText,
        style: style,
        y: _textY,
        x: margin + suitWidth + numberPadding
      }), (0, _helium.createElement)('NineSlicePlane', {
        x: margin + suitWidth + numberPadding + numberWidth + imagePadding,
        y: imageY,
        width: imageWidth,
        height: 18,
        scale: {
          x: imageHeight / 18,
          y: imageHeight / 18
        },
        texture: PIXI.Texture.fromImage('assets/image/treasure-bg.png'),
        leftWidth: 9,
        rightWidth: 9,
        topHeight: 9,
        bottomHeight: 9
      }), (0, _helium.createElement)('Text', {
        text: treasureName,
        y: _textY,
        x: textX,
        style: style
      }), (0, _helium.createElement)('Sprite', {
        width: circleWidth,
        height: circleWidth,
        visible: isHasCard,
        y: (0, _helpers.getValue)(6, height, DefaultHeight),
        x: margin + suitWidth + numberPadding + numberWidth + imagePadding + (0, _helpers.getValue)(22, height, DefaultHeight),
        texture: PIXI.Texture.fromImage('assets/image/treasure-card-no.png')
      }), (0, _helium.createElement)('Text', {
        text: cardInTreasureLength,
        visible: isHasCard,
        style: {
          fill: 'black',
          fontSize: fontSize,
          fontFamily: fontFamily,
          fontWeight: 'bold'
        },
        y: (0, _helpers.getValue)(5, height, DefaultHeight),
        x: margin + suitWidth + numberPadding + numberWidth + imagePadding + (0, _helpers.getValue)(22, height, DefaultHeight) + circleWidth / 2,
        anchor: {
          x: 0.5,
          y: 0
        }
      }));
    }
  } else {
    children.push((0, _helium.createElement)('Text', {
      text: '寶物',
      style: {
        fill: '#BF5C19',
        fontWeight: 'bold',
        fontSize: fontSize
      },
      anchor: {
        x: 0.5,
        y: 0
      },
      x: width / 2,
      y: textY
    }));
  }
  return (0, _helium.createElement)('Container', {
    x: x,
    y: y
  }, children);
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Weapon = Weapon;

var _helium = __webpack_require__(3);

var _helpers = __webpack_require__(5);

var _constants = __webpack_require__(9);

var _deck = __webpack_require__(10);

var DefaultHeight = 24;
var WeaponName = new Map();
WeaponName.set(_constants.EquipmentType.CrossBow, '諸葛連弩');
WeaponName.set(_constants.EquipmentType.BlueBlade, '青紅劍');
WeaponName.set(_constants.EquipmentType.Double, '雌雄雙股劍');
WeaponName.set(_constants.EquipmentType.Axe, '貫石斧');
WeaponName.set(_constants.EquipmentType.Halberd, '丈八蛇矛');
WeaponName.set(_constants.EquipmentType.Bow, '麒麟弓');
WeaponName.set(_constants.EquipmentType.FrostBlade, '寒冰劍');
WeaponName.set(_constants.EquipmentType.Fan, '朱雀羽扇');
WeaponName.set(_constants.EquipmentType.SixBlade, '吳六劍');
WeaponName.set(_constants.EquipmentType.Trident, '三尖兩刃刀');
WeaponName.set(_constants.EquipmentType.Dragon, '青龍偃月刀');
WeaponName.set(_constants.EquipmentType.Sky, '方天畫戟');

//const DefaultId = FullDeck.find((card) => (card.effectType === EquipmentType.Sky && card.type === CardType.Equipment)).id;

function Weapon(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 0 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 0 : _ref$height,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      _ref$cardId = _ref.cardId,
      cardId = _ref$cardId === undefined ? -1 : _ref$cardId;

  var fontFamily = '\"微軟正黑體\", Arial, Helvetica, sans-serif';
  var fontSize = (0, _helpers.getValue)(9, height, DefaultHeight);
  var textY = (0, _helpers.getValue)(6, height, DefaultHeight);
  var style = {
    fontSize: fontSize,
    fontFamily: fontFamily,
    fill: 'white',
    fontWeight: 'bold'
  };
  var children = [];
  if (cardId !== -1) {
    var card = _deck.FullDeck.find(function (cardInDeck) {
      return cardInDeck.id === cardId;
    });
    if (card) {
      var suitWidth = (0, _helpers.getValue)(14.4, height, DefaultHeight);
      var numberText = (0, _helpers.getValueText)(card.value);
      var numberWidth = (0, _helpers.getTextWidth)(numberText, style);
      var weaponText = WeaponName.get(card.effectType);
      var iconY = (0, _helpers.getValue)(4, height, DefaultHeight);
      if (weaponText) {
        var weaponTextWidth = (0, _helpers.getTextWidth)(weaponText, style);
        var numberPadding = (0, _helpers.getValue)(2, height, DefaultHeight);
        var weaponTextPadding = (0, _helpers.getValue)(4, height, DefaultHeight);
        var wholeWidth = suitWidth + numberWidth + numberPadding + weaponTextPadding + weaponTextWidth;
        var margin = (width - wholeWidth) / 2 - (0, _helpers.getValue)(3, height, DefaultHeight);
        children.push((0, _helium.createElement)('Sprite', {
          width: suitWidth,
          height: suitWidth,
          y: iconY,
          x: margin,
          texture: PIXI.Texture.fromImage((0, _helpers.getSuitImagePath)(card.suit))
        }), (0, _helium.createElement)('Text', {
          text: numberText,
          style: style,
          y: textY,
          x: margin + suitWidth + numberPadding
        }), (0, _helium.createElement)('Text', {
          text: weaponText,
          style: style,
          y: textY,
          x: margin + suitWidth + numberPadding + numberWidth + weaponTextPadding
        }));
      }
    }
  } else {
    children.push((0, _helium.createElement)('Text', {
      text: '武器',
      style: {
        fill: '#BF5C19',
        fontWeight: 'bold',
        fontSize: fontSize
      },
      anchor: {
        x: 0.5,
        y: 0
      },
      x: width / 2,
      y: textY
    }));
  }
  return (0, _helium.createElement)('Container', {
    x: x,
    y: y
  }, children);
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GameState = exports.GameState = {
  WaitingPlayer: 0,
  Prepare: 1,
  Gaming: 2,
  EndGame: 3
};

var Region = exports.Region = {
  Undef: -1,
  Red: 0,
  Green: 1,
  Blue: 3,
  Grey: 4,
  Independent: 5
};

var Gender = exports.Gender = {
  Undef: -1,
  Male: 0,
  Female: 1
};

var FlowState = exports.FlowState = {
  Starting: 'starting',
  Preparing: 'preparing',
  Judging: 'judging',
  Drawing: 'drawing',
  Dealing: 'dealing',
  Folding: 'folding',
  Ending: 'ending'
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var INFERNO_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!INFERNO_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};

module.exports = hoistNonReactStatics;
module.exports.default = module.exports;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
// Make sure u use EMPTY_OBJ from 'inferno', otherwise it'll be a different reference
var inferno_1 = __webpack_require__(19);
var inferno_shared_1 = __webpack_require__(0);
var noOp = inferno_shared_1.ERROR_MSG;
if (process.env.NODE_ENV !== 'production') {
    noOp = 'Inferno Error: Can only update a mounted or mounting component. This usually means you called setState() or forceUpdate() on an unmounted component. This is a no-op.';
}
var componentCallbackQueue = new Map();
// when a components root VNode is also a component, we can run into issues
// this will recursively look for vNode.parentNode if the VNode is a component
function updateParentComponentVNodes(vNode, dom) {
    if (vNode.flags & 28 /* Component */) {
        var parentVNode = vNode.parentVNode;
        if (parentVNode) {
            parentVNode.dom = dom;
            updateParentComponentVNodes(parentVNode, dom);
        }
    }
}
var resolvedPromise = Promise.resolve();
function addToQueue(component, force, callback) {
    var queue = componentCallbackQueue.get(component);
    if (queue === void 0) {
        queue = [];
        componentCallbackQueue.set(component, queue);
        resolvedPromise.then(function () {
            componentCallbackQueue.delete(component);
            component._updating = true;
            applyState(component, force, function () {
                for (var i = 0, len = queue.length; i < len; i++) {
                    queue[i].call(component);
                }
            });
            component._updating = false;
        });
    }
    if (!inferno_shared_1.isNullOrUndef(callback)) {
        queue.push(callback);
    }
}
function queueStateChanges(component, newState, callback) {
    if (inferno_shared_1.isFunction(newState)) {
        newState = newState(component.state, component.props, component.context);
    }
    var pending = component._pendingState;
    if (pending === null) {
        component._pendingState = pending = newState;
    }
    else {
        for (var stateKey in newState) {
            pending[stateKey] = newState[stateKey];
        }
    }
    if (inferno_shared_1.isBrowser && !component._pendingSetState && !component._blockRender) {
        if (!component._updating) {
            component._pendingSetState = true;
            component._updating = true;
            applyState(component, false, callback);
            component._updating = false;
        }
        else {
            addToQueue(component, false, callback);
        }
    }
    else {
        var state = component.state;
        if (state === null) {
            component.state = pending;
        }
        else {
            for (var key in pending) {
                state[key] = pending[key];
            }
        }
        component._pendingState = null;
        if (!inferno_shared_1.isNullOrUndef(callback) && component._blockRender) {
            component._lifecycle.addListener(callback.bind(component));
        }
    }
}
function applyState(component, force, callback) {
    if (component._unmounted) {
        return;
    }
    if (force || !component._blockRender) {
        component._pendingSetState = false;
        var pendingState = component._pendingState;
        var prevState = component.state;
        var nextState = inferno_shared_1.combineFrom(prevState, pendingState);
        var props = component.props;
        var context_1 = component.context;
        component._pendingState = null;
        var nextInput = component._updateComponent(prevState, nextState, props, props, context_1, force, true);
        var didUpdate = true;
        if (inferno_shared_1.isInvalid(nextInput)) {
            nextInput = inferno_1.createVNode(4096 /* Void */, null);
        }
        else if (nextInput === inferno_shared_1.NO_OP) {
            nextInput = component._lastInput;
            didUpdate = false;
        }
        else if (inferno_shared_1.isStringOrNumber(nextInput)) {
            nextInput = inferno_1.createVNode(1 /* Text */, null, null, nextInput);
        }
        else if (inferno_shared_1.isArray(nextInput)) {
            if (process.env.NODE_ENV !== 'production') {
                inferno_shared_1.throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
            }
            inferno_shared_1.throwError();
        }
        var lastInput = component._lastInput;
        var vNode = component._vNode;
        var parentDom = (lastInput.dom && lastInput.dom.parentNode) || (lastInput.dom = vNode.dom);
        component._lastInput = nextInput;
        if (didUpdate) {
            var childContext = void 0;
            if (!inferno_shared_1.isUndefined(component.getChildContext)) {
                childContext = component.getChildContext();
            }
            if (inferno_shared_1.isNullOrUndef(childContext)) {
                childContext = component._childContext;
            }
            else {
                childContext = inferno_shared_1.combineFrom(context_1, childContext);
            }
            var lifeCycle = component._lifecycle;
            inferno_1.internal_patch(lastInput, nextInput, parentDom, lifeCycle, childContext, component._isSVG, false);
            lifeCycle.trigger();
            if (!inferno_shared_1.isUndefined(component.componentDidUpdate)) {
                component.componentDidUpdate(props, prevState, context_1);
            }
            if (!inferno_shared_1.isNull(inferno_1.options.afterUpdate)) {
                inferno_1.options.afterUpdate(vNode);
            }
        }
        var dom = vNode.dom = nextInput.dom;
        if (inferno_1.options.findDOMNodeEnabled) {
            inferno_1.internal_DOMNodeMap.set(component, nextInput.dom);
        }
        updateParentComponentVNodes(vNode, dom);
    }
    else {
        component.state = component._pendingState;
        component._pendingState = null;
    }
    if (!inferno_shared_1.isNullOrUndef(callback)) {
        callback.call(component);
    }
}
var alreadyWarned = false;
var Component = (function () {
    function Component(props, context) {
        this.state = null;
        this._blockRender = false;
        this._blockSetState = true;
        this._pendingSetState = false;
        this._pendingState = null;
        this._lastInput = null;
        this._vNode = null;
        this._unmounted = false;
        this._lifecycle = null;
        this._childContext = null;
        this._isSVG = false;
        this._updating = true;
        /** @type {object} */
        this.props = props || inferno_1.EMPTY_OBJ;
        /** @type {object} */
        this.context = context || inferno_1.EMPTY_OBJ; // context should not be mutable
    }
    Component.prototype.forceUpdate = function (callback) {
        if (this._unmounted || !inferno_shared_1.isBrowser) {
            return;
        }
        applyState(this, true, callback);
    };
    Component.prototype.setState = function (newState, callback) {
        if (this._unmounted) {
            return;
        }
        if (!this._blockSetState) {
            queueStateChanges(this, newState, callback);
        }
        else {
            if (process.env.NODE_ENV !== 'production') {
                inferno_shared_1.throwError('cannot update state via setState() in componentWillUpdate() or constructor.');
            }
            inferno_shared_1.throwError();
        }
    };
    Component.prototype.setStateSync = function (newState) {
        if (process.env.NODE_ENV !== 'production') {
            if (!alreadyWarned) {
                alreadyWarned = true;
                // tslint:disable-next-line:no-console
                console.warn('Inferno WARNING: setStateSync has been deprecated and will be removed in next release. Use setState instead.');
            }
        }
        this.setState(newState);
    };
    Component.prototype._updateComponent = function (prevState, nextState, prevProps, nextProps, context, force, fromSetState) {
        if (this._unmounted === true) {
            if (process.env.NODE_ENV !== 'production') {
                inferno_shared_1.throwError(noOp);
            }
            inferno_shared_1.throwError();
        }
        if ((prevProps !== nextProps || nextProps === inferno_1.EMPTY_OBJ) || prevState !== nextState || force) {
            if (prevProps !== nextProps || nextProps === inferno_1.EMPTY_OBJ) {
                if (!inferno_shared_1.isUndefined(this.componentWillReceiveProps) && !fromSetState) {
                    // keep a copy of state before componentWillReceiveProps
                    var beforeState = inferno_shared_1.combineFrom(this.state);
                    this._blockRender = true;
                    this.componentWillReceiveProps(nextProps, context);
                    this._blockRender = false;
                    var afterState = this.state;
                    if (beforeState !== afterState) {
                        // if state changed in componentWillReceiveProps, reassign the beforeState
                        this.state = beforeState;
                        // set the afterState as pending state so the change gets picked up below
                        this._pendingSetState = true;
                        this._pendingState = afterState;
                    }
                }
                if (this._pendingSetState) {
                    nextState = inferno_shared_1.combineFrom(nextState, this._pendingState);
                    this._pendingSetState = false;
                    this._pendingState = null;
                }
            }
            /* Update if scu is not defined, or it returns truthy value or force */
            if (inferno_shared_1.isUndefined(this.shouldComponentUpdate) || this.shouldComponentUpdate(nextProps, nextState, context) || force) {
                if (!inferno_shared_1.isUndefined(this.componentWillUpdate)) {
                    this._blockSetState = true;
                    this.componentWillUpdate(nextProps, nextState, context);
                    this._blockSetState = false;
                }
                this.props = nextProps;
                this.state = nextState;
                this.context = context;
                if (inferno_1.options.beforeRender) {
                    inferno_1.options.beforeRender(this);
                }
                var render = this.render(nextProps, nextState, context);
                if (inferno_1.options.afterRender) {
                    inferno_1.options.afterRender(this);
                }
                return render;
            }
            else {
                this.props = nextProps;
                this.state = nextState;
                this.context = context;
            }
        }
        return inferno_shared_1.NO_OP;
    };
    // tslint:disable-next-line:no-empty
    Component.prototype.render = function (nextProps, nextState, nextContext) { };
    return Component;
}());
exports.default = Component;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inferno_1 = __webpack_require__(19);
var inferno_shared_1 = __webpack_require__(0);
var componentHooks = new Set();
componentHooks.add('onComponentWillMount');
componentHooks.add('onComponentDidMount');
componentHooks.add('onComponentWillUnmount');
componentHooks.add('onComponentShouldUpdate');
componentHooks.add('onComponentWillUpdate');
componentHooks.add('onComponentDidUpdate');
/**
 * Creates virtual node
 * @param {string|Function|Component<any, any>} type Type of node
 * @param {object=} props Optional props for virtual node
 * @param {...{object}=} _children Optional children for virtual node
 * @returns {VNode} new virtual ndoe
 */
function createElement(type, props) {
    var _children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _children[_i - 2] = arguments[_i];
    }
    if (inferno_shared_1.isInvalid(type) || inferno_shared_1.isObject(type)) {
        throw new Error('Inferno Error: createElement() name parameter cannot be undefined, null, false or true, It must be a string, class or function.');
    }
    var children = _children;
    var ref = null;
    var key = null;
    var className = null;
    var flags = 0;
    var newProps;
    if (_children) {
        if (_children.length === 1) {
            children = _children[0];
        }
        else if (_children.length === 0) {
            children = void 0;
        }
    }
    if (inferno_shared_1.isString(type)) {
        flags = inferno_1.getFlagsForElementVnode(type);
        if (!inferno_shared_1.isNullOrUndef(props)) {
            newProps = {};
            for (var prop in props) {
                if (prop === 'className' || prop === 'class') {
                    className = props[prop];
                }
                else if (prop === 'key') {
                    key = props.key;
                }
                else if (prop === 'children' && inferno_shared_1.isUndefined(children)) {
                    children = props.children; // always favour children args, default to props
                }
                else if (prop === 'ref') {
                    ref = props.ref;
                }
                else {
                    newProps[prop] = props[prop];
                }
            }
        }
    }
    else {
        flags = 16 /* ComponentUnknown */;
        if (!inferno_shared_1.isUndefined(children)) {
            if (!props) {
                props = {};
            }
            props.children = children;
            children = null;
        }
        if (!inferno_shared_1.isNullOrUndef(props)) {
            newProps = {};
            for (var prop in props) {
                if (componentHooks.has(prop)) {
                    if (!ref) {
                        ref = {};
                    }
                    ref[prop] = props[prop];
                }
                else if (prop === 'key') {
                    key = props.key;
                }
                else {
                    newProps[prop] = props[prop];
                }
            }
        }
    }
    return inferno_1.createVNode(flags, type, className, children, newProps, key, ref);
}
exports.default = createElement;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_component_1 = __webpack_require__(20);
var inferno_shared_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(21);
var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
    if (didWarnAboutReceivingStore) {
        return;
    }
    didWarnAboutReceivingStore = true;
    utils_1.warning('<Provider> does not support changing `store` on the fly.');
}
var Provider = (function (_super) {
    __extends(Provider, _super);
    function Provider(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.store = props.store;
        return _this;
    }
    Provider.prototype.getChildContext = function () {
        return { store: this.store };
    };
    Provider.prototype.render = function (props) {
        if (inferno_shared_1.isNullOrUndef(this.props.children) || inferno_shared_1.toArray(this.props.children).length !== 1) {
            throw Error('Inferno Error: Only one child is allowed within the `Provider` component');
        }
        return props.children;
    };
    return Provider;
}(inferno_component_1.default));
exports.default = Provider;
if (process.env.NODE_ENV !== 'production') {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
        var store = this.store;
        var nextStore = nextProps.store;
        if (store !== nextStore) {
            warnAboutReceivingStore();
        }
    };
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var hoist_non_inferno_statics_1 = __webpack_require__(62);
var inferno_component_1 = __webpack_require__(20);
var inferno_create_element_1 = __webpack_require__(11);
var inferno_shared_1 = __webpack_require__(0);
var helpers_1 = __webpack_require__(67);
var utils_1 = __webpack_require__(21);
var errorObject = { value: null };
var defaultMapStateToProps = function (state) { return ({}); }; // eslint-disable-line no-unused-vars
var defaultMapDispatchToProps = function (dispatch) { return ({ dispatch: dispatch }); };
var defaultMergeProps = function (stateProps, dispatchProps, parentProps) {
    var obj = {};
    if (parentProps) {
        for (var key in parentProps) {
            obj[key] = parentProps[key];
        }
    }
    if (stateProps) {
        for (var key in stateProps) {
            obj[key] = stateProps[key];
        }
    }
    if (dispatchProps) {
        for (var key in dispatchProps) {
            obj[key] = dispatchProps[key];
        }
    }
    return obj;
};
function tryCatch(fn, ctx) {
    try {
        return fn.apply(ctx);
    }
    catch (e) {
        errorObject.value = e;
        return errorObject;
    }
}
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
// Helps track hot reloading.
var nextVersion = 0;
function connect(mapStateToProps, mapDispatchToProps, mergeProps, options) {
    if (options === void 0) { options = {}; }
    var shouldSubscribe = Boolean(mapStateToProps);
    var mapState = mapStateToProps || defaultMapStateToProps;
    var mapDispatch;
    if (inferno_shared_1.isFunction(mapDispatchToProps)) {
        mapDispatch = mapDispatchToProps;
    }
    else if (!mapDispatchToProps) {
        mapDispatch = defaultMapDispatchToProps;
    }
    else {
        mapDispatch = utils_1.wrapActionCreators(mapDispatchToProps);
    }
    var finalMergeProps = mergeProps || defaultMergeProps;
    var _a = options.pure, pure = _a === void 0 ? true : _a, _b = options.withRef, withRef = _b === void 0 ? false : _b;
    var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;
    // Helps track hot reloading.
    var version = nextVersion++;
    return function wrapWithConnect(WrappedComponent) {
        var connectDisplayName = "Connect(" + getDisplayName(WrappedComponent) + ")";
        function checkStateShape(props, methodName) {
            if (!helpers_1.isPlainObject(props)) {
                utils_1.warning(methodName + "() in " + connectDisplayName + " must return a plain object. " +
                    ("Instead received " + props + "."));
            }
        }
        function computeMergedProps(stateProps, dispatchProps, parentProps) {
            var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
            if (process.env.NODE_ENV !== 'production') {
                checkStateShape(mergedProps, 'mergeProps');
            }
            return mergedProps;
        }
        var Connect = (function (_super) {
            __extends(Connect, _super);
            function Connect(props, context) {
                var _this = _super.call(this, props, context) || this;
                _this.version = version;
                _this.wrappedInstance = null;
                _this.store = (props && props.store) || (context && context.store);
                if (!_this.store) {
                    inferno_shared_1.throwError('Could not find "store" in either the context or ' +
                        ("props of \"" + connectDisplayName + "\". ") +
                        'Either wrap the root component in a <Provider>, ' +
                        ("or explicitly pass \"store\" as a prop to \"" + connectDisplayName + "\"."));
                }
                var storeState = _this.store.getState();
                _this.state = { storeState: storeState };
                _this.clearCache();
                return _this;
            }
            Connect.prototype.componentDidMount = function () {
                this.trySubscribe();
            };
            Connect.prototype.shouldComponentUpdate = function () {
                return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
            };
            Connect.prototype.computeStateProps = function (store, props) {
                if (!this.finalMapStateToProps) {
                    return this.configureFinalMapState(store, props);
                }
                var state = store.getState();
                var stateProps = this.doStatePropsDependOnOwnProps ?
                    this.finalMapStateToProps(state, props) :
                    this.finalMapStateToProps(state);
                return stateProps;
            };
            Connect.prototype.configureFinalMapState = function (store, props) {
                var mappedState = mapState(store.getState(), props);
                var isFactory = inferno_shared_1.isFunction(mappedState);
                this.finalMapStateToProps = isFactory ? mappedState : mapState;
                this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;
                if (isFactory) {
                    return this.computeStateProps(store, props);
                }
                return mappedState;
            };
            Connect.prototype.computeDispatchProps = function (store, props) {
                if (!this.finalMapDispatchToProps) {
                    return this.configureFinalMapDispatch(store, props);
                }
                var dispatch = store.dispatch;
                return this.doDispatchPropsDependOnOwnProps ?
                    this.finalMapDispatchToProps(dispatch, props) :
                    this.finalMapDispatchToProps(dispatch);
            };
            Connect.prototype.configureFinalMapDispatch = function (store, props) {
                var mappedDispatch = mapDispatch(store.dispatch, props);
                var isFactory = inferno_shared_1.isFunction(mappedDispatch);
                this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
                this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;
                if (isFactory) {
                    return this.computeDispatchProps(store, props);
                }
                return mappedDispatch;
            };
            Connect.prototype.updateStatePropsIfNeeded = function () {
                var nextStateProps = this.computeStateProps(this.store, this.props);
                if (this.stateProps && utils_1.shallowEqual(nextStateProps, this.stateProps)) {
                    return false;
                }
                this.stateProps = nextStateProps;
                return true;
            };
            Connect.prototype.updateDispatchPropsIfNeeded = function () {
                var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
                if (this.dispatchProps && utils_1.shallowEqual(nextDispatchProps, this.dispatchProps)) {
                    return false;
                }
                this.dispatchProps = nextDispatchProps;
                return true;
            };
            Connect.prototype.updateMergedPropsIfNeeded = function () {
                var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
                if (this.mergedProps && checkMergedEquals && utils_1.shallowEqual(nextMergedProps, this.mergedProps)) {
                    return false;
                }
                this.mergedProps = nextMergedProps;
                return true;
            };
            Connect.prototype.isSubscribed = function () {
                return inferno_shared_1.isFunction(this.unsubscribe);
            };
            Connect.prototype.trySubscribe = function () {
                if (shouldSubscribe && !this.unsubscribe) {
                    this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
                    this.handleChange();
                }
            };
            Connect.prototype.tryUnsubscribe = function () {
                if (this.unsubscribe) {
                    this.unsubscribe();
                    this.unsubscribe = null;
                }
            };
            Connect.prototype.componentWillReceiveProps = function (nextProps) {
                if (!pure || !utils_1.shallowEqual(nextProps, this.props)) {
                    this.haveOwnPropsChanged = true;
                }
            };
            Connect.prototype.componentWillUnmount = function () {
                this.tryUnsubscribe();
                this.clearCache();
            };
            Connect.prototype.clearCache = function () {
                this.dispatchProps = null;
                this.stateProps = null;
                this.mergedProps = null;
                this.haveOwnPropsChanged = true;
                this.hasStoreStateChanged = true;
                this.haveStatePropsBeenPrecalculated = false;
                this.statePropsPrecalculationError = null;
                this.renderedElement = null;
                this.finalMapDispatchToProps = null;
                this.finalMapStateToProps = null;
            };
            Connect.prototype.handleChange = function () {
                if (!this.unsubscribe) {
                    return;
                }
                var storeState = this.store.getState();
                var prevStoreState = this.state.storeState;
                if (pure && prevStoreState === storeState) {
                    return;
                }
                if (pure && !this.doStatePropsDependOnOwnProps) {
                    var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
                    if (!haveStatePropsChanged) {
                        return;
                    }
                    if (haveStatePropsChanged === errorObject) {
                        this.statePropsPrecalculationError = errorObject.value;
                    }
                    this.haveStatePropsBeenPrecalculated = true;
                }
                this.hasStoreStateChanged = true;
                this.setState({ storeState: storeState });
            };
            Connect.prototype.getWrappedInstance = function () {
                return this.wrappedInstance;
            };
            Connect.prototype.render = function () {
                var _this = this;
                var _a = this, haveOwnPropsChanged = _a.haveOwnPropsChanged, hasStoreStateChanged = _a.hasStoreStateChanged, haveStatePropsBeenPrecalculated = _a.haveStatePropsBeenPrecalculated, statePropsPrecalculationError = _a.statePropsPrecalculationError, renderedElement = _a.renderedElement;
                this.haveOwnPropsChanged = false;
                this.hasStoreStateChanged = false;
                this.haveStatePropsBeenPrecalculated = false;
                this.statePropsPrecalculationError = null;
                if (statePropsPrecalculationError) {
                    throw statePropsPrecalculationError;
                }
                var shouldUpdateStateProps = true;
                var shouldUpdateDispatchProps = true;
                if (pure && renderedElement) {
                    shouldUpdateStateProps = hasStoreStateChanged || (haveOwnPropsChanged && this.doStatePropsDependOnOwnProps);
                    shouldUpdateDispatchProps =
                        haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
                }
                var haveStatePropsChanged = false;
                var haveDispatchPropsChanged = false;
                if (haveStatePropsBeenPrecalculated) {
                    haveStatePropsChanged = true;
                }
                else if (shouldUpdateStateProps) {
                    haveStatePropsChanged = this.updateStatePropsIfNeeded();
                }
                if (shouldUpdateDispatchProps) {
                    haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
                }
                var haveMergedPropsChanged = true;
                if (haveStatePropsChanged ||
                    haveDispatchPropsChanged ||
                    haveOwnPropsChanged) {
                    haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
                }
                else {
                    haveMergedPropsChanged = false;
                }
                if (!haveMergedPropsChanged && renderedElement) {
                    return renderedElement;
                }
                if (withRef) {
                    this.renderedElement = inferno_create_element_1.default(WrappedComponent, inferno_shared_1.combineFrom(this.mergedProps, { ref: function (instance) { return _this.wrappedInstance = instance; } }));
                }
                else {
                    this.renderedElement = inferno_create_element_1.default(WrappedComponent, this.mergedProps);
                }
                return this.renderedElement;
            };
            return Connect;
        }(inferno_component_1.default));
        Connect.displayName = connectDisplayName;
        Connect.WrappedComponent = WrappedComponent;
        if (process.env.NODE_ENV !== 'production') {
            Connect.prototype.componentWillUpdate = function componentWillUpdate() {
                if (this.version === version) {
                    return;
                }
                // We are hot reloading!
                this.version = version;
                this.trySubscribe();
                this.clearCache();
            };
        }
        return hoist_non_inferno_statics_1.default(Connect, WrappedComponent);
    };
}
exports.default = connect;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// From https://github.com/lodash/lodash/blob/es
function overArg(func, transform) {
    return function (arg) {
        return func(transform(arg));
    };
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
function isObjectLike(value) {
    return value != null && typeof value === 'object';
}
var objectTag = '[object Object]';
var funcProto = Function.prototype;
var objectProto = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
var objectToString = objectProto.toString;
function isPlainObject(value) {
    if (!isObjectLike(value) || objectToString.call(value) !== objectTag) {
        return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
        return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return (typeof Ctor === 'function' &&
        Ctor instanceof Ctor && funcToString.call(Ctor) === objectCtorString);
}
exports.isPlainObject = isPlainObject;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var connect_1 = __webpack_require__(66);
exports.connect = connect_1.default;
var Provider_1 = __webpack_require__(65);
exports.Provider = Provider_1.default;
exports.default = {
    Provider: Provider_1.default,
    connect: connect_1.default
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NO_OP = '$NO_OP';
exports.ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
// This should be boolean and not reference to window.document
exports.isBrowser = !!(typeof window !== 'undefined' && window.document);
function toArray(children) {
    return exports.isArray(children) ? children : (children ? [children] : children);
}
exports.toArray = toArray;
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
exports.isArray = Array.isArray;
function isStatefulComponent(o) {
    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
}
exports.isStatefulComponent = isStatefulComponent;
function isStringOrNumber(o) {
    var type = typeof o;
    return type === 'string' || type === 'number';
}
exports.isStringOrNumber = isStringOrNumber;
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
exports.isNullOrUndef = isNullOrUndef;
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}
exports.isInvalid = isInvalid;
function isFunction(o) {
    return typeof o === 'function';
}
exports.isFunction = isFunction;
function isString(o) {
    return typeof o === 'string';
}
exports.isString = isString;
function isNumber(o) {
    return typeof o === 'number';
}
exports.isNumber = isNumber;
function isNull(o) {
    return o === null;
}
exports.isNull = isNull;
function isTrue(o) {
    return o === true;
}
exports.isTrue = isTrue;
function isUndefined(o) {
    return o === void 0;
}
exports.isUndefined = isUndefined;
function isObject(o) {
    return typeof o === 'object';
}
exports.isObject = isObject;
function throwError(message) {
    if (!message) {
        message = exports.ERROR_MSG;
    }
    throw new Error("Inferno Error: " + message);
}
exports.throwError = throwError;
function warning(message) {
    // tslint:disable-next-line:no-console
    console.warn(message);
}
exports.warning = warning;
function combineFrom(first, second) {
    var out = {};
    if (first) {
        for (var key in first) {
            out[key] = first[key];
        }
    }
    if (second) {
        for (var key in second) {
            out[key] = second[key];
        }
    }
    return out;
}
exports.combineFrom = combineFrom;
function Lifecycle() {
    this.listeners = [];
}
exports.Lifecycle = Lifecycle;
Lifecycle.prototype.addListener = function addListener(callback) {
    this.listeners.push(callback);
};
Lifecycle.prototype.trigger = function trigger() {
    var listeners = this.listeners;
    var listener;
    // We need to remove current listener from array when calling it, because more listeners might be added
    while (listener = listeners.shift()) {
        listener();
    }
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = __webpack_require__(0);
var isiOS = inferno_shared_1.isBrowser && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var delegatedEvents = new Map();
function handleEvent(name, lastEvent, nextEvent, dom) {
    var delegatedRoots = delegatedEvents.get(name);
    if (nextEvent) {
        if (!delegatedRoots) {
            delegatedRoots = { items: new Map(), docEvent: null };
            delegatedRoots.docEvent = attachEventToDocument(name, delegatedRoots);
            delegatedEvents.set(name, delegatedRoots);
        }
        if (!lastEvent) {
            if (isiOS && name === 'onClick') {
                trapClickOnNonInteractiveElement(dom);
            }
        }
        delegatedRoots.items.set(dom, nextEvent);
    }
    else if (delegatedRoots) {
        var items = delegatedRoots.items;
        if (items.delete(dom)) {
            // If any items were deleted, check if listener need to be removed
            if (items.size === 0) {
                document.removeEventListener(normalizeEventName(name), delegatedRoots.docEvent);
                delegatedEvents.delete(name);
            }
        }
    }
}
exports.handleEvent = handleEvent;
function dispatchEvent(event, target, items, count, isClick, eventData) {
    var eventsToTrigger = items.get(target);
    if (eventsToTrigger) {
        count--;
        // linkEvent object
        eventData.dom = target;
        if (eventsToTrigger.event) {
            eventsToTrigger.event(eventsToTrigger.data, event);
        }
        else {
            eventsToTrigger(event);
        }
        if (event.cancelBubble) {
            return;
        }
    }
    if (count > 0) {
        var parentDom = target.parentNode;
        // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,
        // because the event listener is on document.body
        // Don't process clicks on disabled elements
        if (parentDom === null || (isClick && parentDom.nodeType === 1 && parentDom.disabled)) {
            return;
        }
        dispatchEvent(event, parentDom, items, count, isClick, eventData);
    }
}
function normalizeEventName(name) {
    return name.substr(2).toLowerCase();
}
function stopPropagation() {
    this.cancelBubble = true;
    this.stopImmediatePropagation();
}
function attachEventToDocument(name, delegatedRoots) {
    var docEvent = function (event) {
        var count = delegatedRoots.items.size;
        if (count > 0) {
            event.stopPropagation = stopPropagation;
            // Event data needs to be object to save reference to currentTarget getter
            var eventData_1 = {
                dom: document
            };
            try {
                Object.defineProperty(event, 'currentTarget', {
                    configurable: true,
                    get: function get() {
                        return eventData_1.dom;
                    }
                });
            }
            catch (e) { }
            dispatchEvent(event, event.target, delegatedRoots.items, count, event.type === 'click', eventData_1);
        }
    };
    document.addEventListener(normalizeEventName(name), docEvent);
    return docEvent;
}
// tslint:disable-next-line:no-empty
function emptyFn() { }
function trapClickOnNonInteractiveElement(dom) {
    // Mobile Safari does not fire properly bubble click events on
    // non-interactive elements, which means delegated click listeners do not
    // fire. The workaround for this bug involves attaching an empty click
    // listener on the target node.
    // http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
    // Just set it using the onclick property so that we don't have to manage any
    // bookkeeping for it. Not sure if we need to clear it when the listener is
    // removed.
    // TODO: Only do this for the relevant Safaris maybe?
    dom.onclick = emptyFn;
}


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = __webpack_require__(0);
/**
 * Links given data to event as first parameter
 * @param {*} data data to be linked, it will be available in function as first parameter
 * @param {Function} event Function to be called when event occurs
 * @returns {{data: *, event: Function}}
 */
function linkEvent(data, event) {
    if (inferno_shared_1.isFunction(event)) {
        return { data: data, event: event };
    }
    return null; // Return null when event is invalid, to avoid creating unnecessary event handlers
}
exports.linkEvent = linkEvent;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = __webpack_require__(0);
var options_1 = __webpack_require__(6);
var constants_1 = __webpack_require__(15);
var mounting_1 = __webpack_require__(16);
var patching_1 = __webpack_require__(8);
var rendering_1 = __webpack_require__(12);
var utils_1 = __webpack_require__(4);
var processElement_1 = __webpack_require__(18);
function normalizeChildNodes(parentDom) {
    var dom = parentDom.firstChild;
    while (dom) {
        if (dom.nodeType === 8) {
            if (dom.data === '!') {
                var placeholder = document.createTextNode('');
                parentDom.replaceChild(placeholder, dom);
                dom = dom.nextSibling;
            }
            else {
                var lastDom = dom.previousSibling;
                parentDom.removeChild(dom);
                dom = lastDom || parentDom.firstChild;
            }
        }
        else {
            dom = dom.nextSibling;
        }
    }
}
function hydrateComponent(vNode, dom, lifecycle, context, isSVG, isClass) {
    var type = vNode.type;
    var ref = vNode.ref;
    vNode.dom = dom;
    var props = vNode.props || utils_1.EMPTY_OBJ;
    if (isClass) {
        var _isSVG = dom.namespaceURI === constants_1.svgNS;
        var instance = utils_1.createClassComponentInstance(vNode, type, props, context, _isSVG, lifecycle);
        var input = instance._lastInput;
        instance._vNode = vNode;
        hydrate(input, dom, lifecycle, instance._childContext, _isSVG);
        mounting_1.mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance._updating = false; // Mount finished allow going sync
        if (options_1.options.findDOMNodeEnabled) {
            rendering_1.componentToDOMNodeMap.set(instance, dom);
        }
    }
    else {
        var input = utils_1.createFunctionalComponentInput(vNode, type, props, context);
        hydrate(input, dom, lifecycle, context, isSVG);
        vNode.children = input;
        vNode.dom = input.dom;
        mounting_1.mountFunctionalComponentCallbacks(ref, dom, lifecycle);
    }
    return dom;
}
function hydrateElement(vNode, dom, lifecycle, context, isSVG) {
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var flags = vNode.flags;
    var ref = vNode.ref;
    isSVG = isSVG || (flags & 128 /* SvgElement */) > 0;
    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== vNode.type) {
        if (process.env.NODE_ENV !== 'production') {
            inferno_shared_1.warning('Inferno hydration: Server-side markup doesn\'t match client-side markup or Initial render target is not empty');
        }
        var newDom = mounting_1.mountElement(vNode, null, lifecycle, context, isSVG);
        vNode.dom = newDom;
        utils_1.replaceChild(dom.parentNode, newDom, dom);
        return newDom;
    }
    vNode.dom = dom;
    if (children) {
        hydrateChildren(children, dom, lifecycle, context, isSVG);
    }
    if (props) {
        var hasControlledValue = false;
        var isFormElement = (flags & 3584 /* FormElement */) > 0;
        if (isFormElement) {
            hasControlledValue = processElement_1.isControlledFormElement(props);
        }
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            patching_1.patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
        if (isFormElement) {
            processElement_1.processElement(flags, vNode, dom, props, true, hasControlledValue);
        }
    }
    if (!inferno_shared_1.isNullOrUndef(className)) {
        if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
    }
    if (ref) {
        mounting_1.mountRef(dom, ref, lifecycle);
    }
    return dom;
}
function hydrateChildren(children, parentDom, lifecycle, context, isSVG) {
    normalizeChildNodes(parentDom);
    var dom = parentDom.firstChild;
    if (inferno_shared_1.isArray(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!inferno_shared_1.isNull(child) && inferno_shared_1.isObject(child)) {
                if (!inferno_shared_1.isNull(dom)) {
                    hydrate(child, dom, lifecycle, context, isSVG);
                    dom = dom.nextSibling;
                }
                else {
                    mounting_1.mount(child, parentDom, lifecycle, context, isSVG);
                }
            }
        }
    }
    else if (inferno_shared_1.isStringOrNumber(children)) {
        if (dom && dom.nodeType === 3) {
            if (dom.nodeValue !== children) {
                dom.nodeValue = children;
            }
        }
        else if (children) {
            parentDom.textContent = children;
        }
        dom = dom.nextSibling;
    }
    else if (inferno_shared_1.isObject(children)) {
        hydrate(children, dom, lifecycle, context, isSVG);
        dom = dom.nextSibling;
    }
    // clear any other DOM nodes, there should be only a single entry for the root
    while (dom) {
        var nextSibling = dom.nextSibling;
        parentDom.removeChild(dom);
        dom = nextSibling;
    }
}
function hydrateText(vNode, dom) {
    if (dom.nodeType !== 3) {
        var newDom = mounting_1.mountText(vNode, null);
        vNode.dom = newDom;
        utils_1.replaceChild(dom.parentNode, newDom, dom);
        return newDom;
    }
    var text = vNode.children;
    if (dom.nodeValue !== text) {
        dom.nodeValue = text;
    }
    vNode.dom = dom;
    return dom;
}
function hydrateVoid(vNode, dom) {
    vNode.dom = dom;
    return dom;
}
function hydrate(vNode, dom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
        hydrateComponent(vNode, dom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
    }
    else if (flags & 3970 /* Element */) {
        hydrateElement(vNode, dom, lifecycle, context, isSVG);
    }
    else if (flags & 1 /* Text */) {
        hydrateText(vNode, dom);
    }
    else if (flags & 4096 /* Void */) {
        hydrateVoid(vNode, dom);
    }
    else {
        if (process.env.NODE_ENV !== 'production') {
            inferno_shared_1.throwError("hydrate() expects a valid VNode, instead it received an object with the type \"" + typeof vNode + "\".");
        }
        inferno_shared_1.throwError();
    }
}
function hydrateRoot(input, parentDom, lifecycle) {
    if (!inferno_shared_1.isNull(parentDom)) {
        var dom = parentDom.firstChild;
        if (!inferno_shared_1.isNull(dom)) {
            hydrate(input, dom, lifecycle, utils_1.EMPTY_OBJ, false);
            dom = parentDom.firstChild;
            // clear any other DOM nodes, there should be only a single entry for the root
            while (dom = dom.nextSibling) {
                parentDom.removeChild(dom);
            }
            return true;
        }
    }
    return false;
}
exports.hydrateRoot = hydrateRoot;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(4);
function isCheckedType(type) {
    return type === 'checkbox' || type === 'radio';
}
exports.isCheckedType = isCheckedType;
function onTextInputChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || utils_1.EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onInput) {
        var event_1 = props.onInput;
        if (event_1.event) {
            event_1.event(event_1.data, e);
        }
        else {
            event_1(e);
        }
    }
    else if (props.oninput) {
        props.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || utils_1.EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue(newProps, dom);
    }
}
function wrappedOnChange(e) {
    var props = this.vNode.props || utils_1.EMPTY_OBJ;
    var event = props.onChange;
    if (event.event) {
        event.event(event.data, e);
    }
    else {
        event(e);
    }
}
function onCheckboxChange(e) {
    e.stopPropagation(); // This click should not propagate its for internal use
    var vNode = this.vNode;
    var props = vNode.props || utils_1.EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onClick) {
        var event_2 = props.onClick;
        if (event_2.event) {
            event_2.event(event_2.data, e);
        }
        else {
            event_2(e);
        }
    }
    else if (props.onclick) {
        props.onclick(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || utils_1.EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue(newProps, dom);
    }
}
function processInput(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue(nextPropsOrEmpty, dom);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            if (isCheckedType(nextPropsOrEmpty.type)) {
                dom.onclick = onCheckboxChange;
                dom.onclick.wrapped = true;
            }
            else {
                dom.oninput = onTextInputChange;
                dom.oninput.wrapped = true;
            }
            if (nextPropsOrEmpty.onChange) {
                dom.onchange = wrappedOnChange;
                dom.onchange.wrapped = true;
            }
        }
    }
}
exports.processInput = processInput;
function applyValue(nextPropsOrEmpty, dom) {
    var type = nextPropsOrEmpty.type;
    var value = nextPropsOrEmpty.value;
    var checked = nextPropsOrEmpty.checked;
    var multiple = nextPropsOrEmpty.multiple;
    var defaultValue = nextPropsOrEmpty.defaultValue;
    var hasValue = !inferno_shared_1.isNullOrUndef(value);
    if (type && type !== dom.type) {
        dom.setAttribute('type', type);
    }
    if (multiple && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (!inferno_shared_1.isNullOrUndef(defaultValue) && !hasValue) {
        dom.defaultValue = defaultValue + '';
    }
    if (isCheckedType(type)) {
        if (hasValue) {
            dom.value = value;
        }
        if (!inferno_shared_1.isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
    else {
        if (hasValue && dom.value !== value) {
            dom.value = value;
        }
        else if (!inferno_shared_1.isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
}
exports.applyValue = applyValue;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = __webpack_require__(0);
var VNodes_1 = __webpack_require__(7);
var utils_1 = __webpack_require__(4);
function updateChildOptionGroup(vNode, value) {
    var type = vNode.type;
    if (type === 'optgroup') {
        var children = vNode.children;
        if (inferno_shared_1.isArray(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOption(children[i], value);
            }
        }
        else if (VNodes_1.isVNode(children)) {
            updateChildOption(children, value);
        }
    }
    else {
        updateChildOption(vNode, value);
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || utils_1.EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if ((inferno_shared_1.isArray(value) && value.indexOf(props.value) !== -1) || props.value === value) {
        dom.selected = true;
    }
    else if (!inferno_shared_1.isNullOrUndef(value) || !inferno_shared_1.isNullOrUndef(props.selected)) {
        dom.selected = props.selected || false;
    }
}
function onSelectChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || utils_1.EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onChange) {
        var event_1 = props.onChange;
        if (event_1.event) {
            event_1.event(event_1.data, e);
        }
        else {
            event_1(e);
        }
    }
    else if (props.onchange) {
        props.onchange(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || utils_1.EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue(newVNode, dom, newProps, false);
    }
}
function processSelect(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue(vNode, dom, nextPropsOrEmpty, mounting);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            dom.onchange = onSelectChange;
            dom.onchange.wrapped = true;
        }
    }
}
exports.processSelect = processSelect;
function applyValue(vNode, dom, nextPropsOrEmpty, mounting) {
    if (nextPropsOrEmpty.multiple !== dom.multiple) {
        dom.multiple = nextPropsOrEmpty.multiple;
    }
    var children = vNode.children;
    if (!inferno_shared_1.isInvalid(children)) {
        var value = nextPropsOrEmpty.value;
        if (mounting && inferno_shared_1.isNullOrUndef(value)) {
            value = nextPropsOrEmpty.defaultValue;
        }
        if (inferno_shared_1.isArray(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOptionGroup(children[i], value);
            }
        }
        else if (VNodes_1.isVNode(children)) {
            updateChildOptionGroup(children, value);
        }
    }
}
exports.applyValue = applyValue;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inferno_shared_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(4);
function wrappedOnChange(e) {
    var props = this.vNode.props || utils_1.EMPTY_OBJ;
    var event = props.onChange;
    if (event.event) {
        event.event(event.data, e);
    }
    else {
        event(e);
    }
}
function onTextareaInputChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || utils_1.EMPTY_OBJ;
    var previousValue = props.value;
    if (props.onInput) {
        var event_1 = props.onInput;
        if (event_1.event) {
            event_1.event(event_1.data, e);
        }
        else {
            event_1(e);
        }
    }
    else if (props.oninput) {
        props.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || utils_1.EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue(newVNode, vNode.dom, false);
    }
}
function processTextarea(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue(nextPropsOrEmpty, dom, mounting);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            dom.oninput = onTextareaInputChange;
            dom.oninput.wrapped = true;
            if (nextPropsOrEmpty.onChange) {
                dom.onchange = wrappedOnChange;
                dom.onchange.wrapped = true;
            }
        }
    }
}
exports.processTextarea = processTextarea;
function applyValue(nextPropsOrEmpty, dom, mounting) {
    var value = nextPropsOrEmpty.value;
    var domValue = dom.value;
    if (inferno_shared_1.isNullOrUndef(value)) {
        if (mounting) {
            var defaultValue = nextPropsOrEmpty.defaultValue;
            if (!inferno_shared_1.isNullOrUndef(defaultValue)) {
                if (defaultValue !== domValue) {
                    dom.value = defaultValue;
                }
            }
            else if (domValue !== '') {
                dom.value = '';
            }
        }
    }
    else {
        /* There is value so keep it controlled */
        if (domValue !== value) {
            dom.value = value;
        }
    }
}
exports.applyValue = applyValue;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:object-literal-sort-keys */
var inferno_shared_1 = __webpack_require__(0);
exports.NO_OP = inferno_shared_1.NO_OP;
var normalization_1 = __webpack_require__(23);
exports.getFlagsForElementVnode = normalization_1.getFlagsForElementVnode;
exports.internal_normalize = normalization_1.normalize;
var options_1 = __webpack_require__(6);
exports.options = options_1.options;
var VNodes_1 = __webpack_require__(7);
exports.cloneVNode = VNodes_1.cloneVNode;
exports.createVNode = VNodes_1.createVNode;
var constants_1 = __webpack_require__(15);
exports.internal_isUnitlessNumber = constants_1.isUnitlessNumber;
var linkEvent_1 = __webpack_require__(71);
exports.linkEvent = linkEvent_1.linkEvent;
var patching_1 = __webpack_require__(8);
exports.internal_patch = patching_1.patch;
var rendering_1 = __webpack_require__(12);
exports.internal_DOMNodeMap = rendering_1.componentToDOMNodeMap;
exports.createRenderer = rendering_1.createRenderer;
exports.findDOMNode = rendering_1.findDOMNode;
exports.render = rendering_1.render;
var utils_1 = __webpack_require__(4);
exports.EMPTY_OBJ = utils_1.EMPTY_OBJ;
if (process.env.NODE_ENV !== 'production') {
    /* tslint:disable-next-line:no-empty */
    var testFunc = function testFn() { };
    if ((testFunc.name || testFunc.toString()).indexOf('testFn') === -1) {
        inferno_shared_1.warning(('It looks like you\'re using a minified copy of the development build ' +
            'of Inferno. When deploying Inferno apps to production, make sure to use ' +
            'the production build which skips development warnings and is faster. ' +
            'See http://infernojs.org for more details.'));
    }
}
var version = '3.3.1';
exports.version = version;
// we duplicate it so it plays nicely with different module loading systems
exports.default = {
    EMPTY_OBJ: utils_1.EMPTY_OBJ,
    NO_OP: inferno_shared_1.NO_OP,
    cloneVNode: VNodes_1.cloneVNode,
    createRenderer: rendering_1.createRenderer,
    createVNode: VNodes_1.createVNode,
    findDOMNode: rendering_1.findDOMNode,
    getFlagsForElementVnode: normalization_1.getFlagsForElementVnode,
    internal_DOMNodeMap: rendering_1.componentToDOMNodeMap,
    internal_isUnitlessNumber: constants_1.isUnitlessNumber,
    internal_normalize: normalization_1.normalize,
    internal_patch: patching_1.patch,
    linkEvent: linkEvent_1.linkEvent,
    options: options_1.options,
    render: rendering_1.render,
    version: version // DOM
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(81);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(29)))

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(82);


/** Built-in value references. */
var getPrototype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(24);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(78);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(26);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(28);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  if (process.env.NODE_ENV !== 'production') {
    var unexpectedKeyCache = {};
  }

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(91);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29), __webpack_require__(92)(module)))

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);