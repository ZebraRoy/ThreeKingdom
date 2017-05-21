(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.Helium = global.Helium || {})));
}(this, (function (exports) { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
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
  var dom = documentCreateElement(vNode.type);
  var children = vNode.children;
  var props = vNode.props;
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
  function HOM(tagName) {
    classCallCheck(this, HOM);

    this.parentNode = null;
    this.tagName = tagName;
    if (baseView.has(tagName)) {
      var View = baseView.get(tagName);
      this.tagInstance = new View();
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

function documentCreateElement(tag) {
  return new HOM(tag);
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

Object.defineProperty(exports, '__esModule', { value: true });

})));
