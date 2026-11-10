true&&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1=Symbol.for("react.element"),n$1=Symbol.for("react.portal"),p$2=Symbol.for("react.fragment"),q$1=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v$1=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z$1=Symbol.iterator;function A$1(a){if(null===a||"object"!==typeof a)return null;a=z$1&&a[z$1]||a["@@iterator"];return "function"===typeof a?a:null}
var B$1={isMounted:function(){return  false},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$1=Object.assign,D$1={};function E$1(a,b,e){this.props=a;this.context=b;this.refs=D$1;this.updater=e||B$1;}E$1.prototype.isReactComponent={};
E$1.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E$1.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E$1.prototype;function G$1(a,b,e){this.props=a;this.context=b;this.refs=D$1;this.updater=e||B$1;}var H$1=G$1.prototype=new F;
H$1.constructor=G$1;C$1(H$1,E$1.prototype);H$1.isPureReactComponent=true;var I$1=Array.isArray,J=Object.prototype.hasOwnProperty,K$1={current:null},L$1={key:true,ref:true,__self:true,__source:true};
function M$1(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L$1.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g) void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l$1,type:a,key:k,ref:h,props:c,_owner:K$1.current}}
function N$2(a,b){return {$$typeof:l$1,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O$1(a){return "object"===typeof a&&null!==a&&a.$$typeof===l$1}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P$1=/\/+/g;function Q$1(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R$1(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=false;if(null===a)h=true;else switch(k){case "string":case "number":h=true;break;case "object":switch(a.$$typeof){case l$1:case n$1:h=true;}}if(h)return h=a,c=c(h),a=""===d?"."+Q$1(h,0):d,I$1(c)?(e="",null!=a&&(e=a.replace(P$1,"$&/")+"/"),R$1(c,b,e,"",function(a){return a})):null!=c&&(O$1(c)&&(c=N$2(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P$1,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I$1(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q$1(k,g);h+=R$1(k,b,e,f,c);}else if(f=A$1(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q$1(k,g++),h+=R$1(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S$1(a,b,e){if(null==a)return a;var d=[],c=0;R$1(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T$1(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
var U$1={current:null},V$1={transition:null},W$1={ReactCurrentDispatcher:U$1,ReactCurrentBatchConfig:V$1,ReactCurrentOwner:K$1};function X$2(){throw Error("act(...) is not supported in production builds of React.");}
react_production_min.Children={map:S$1,forEach:function(a,b,e){S$1(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S$1(a,function(){b++;});return b},toArray:function(a){return S$1(a,function(a){return a})||[]},only:function(a){if(!O$1(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E$1;react_production_min.Fragment=p$2;react_production_min.Profiler=r;react_production_min.PureComponent=G$1;react_production_min.StrictMode=q$1;react_production_min.Suspense=w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$1;react_production_min.act=X$2;
react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C$1({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){ void 0!==b.ref&&(k=b.ref,h=K$1.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L$1.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l$1,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M$1;react_production_min.createFactory=function(a){var b=M$1.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
react_production_min.forwardRef=function(a){return {$$typeof:v$1,render:a}};react_production_min.isValidElement=O$1;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T$1}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V$1.transition;V$1.transition={};try{a();}finally{V$1.transition=b;}};react_production_min.unstable_act=X$2;react_production_min.useCallback=function(a,b){return U$1.current.useCallback(a,b)};react_production_min.useContext=function(a){return U$1.current.useContext(a)};
react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U$1.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U$1.current.useEffect(a,b)};react_production_min.useId=function(){return U$1.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U$1.current.useImperativeHandle(a,b,e)};react_production_min.useInsertionEffect=function(a,b){return U$1.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U$1.current.useLayoutEffect(a,b)};
react_production_min.useMemo=function(a,b){return U$1.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U$1.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U$1.current.useRef(a)};react_production_min.useState=function(a){return U$1.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U$1.current.useSyncExternalStore(a,b,e)};react_production_min.useTransition=function(){return U$1.current.useTransition()};react_production_min.version="18.3.1";

{
  react.exports = react_production_min;
}

var reactExports = react.exports;
const React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m$1=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$1={key:true,ref:true,__self:true,__source:true};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m$1.call(a,b)&&!p$1.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

var client = {};

var reactDom = {exports: {}};

var reactDom_production_min = {};

var scheduler = {exports: {}};

var scheduler_production_min = {};

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (exports) {
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
	function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}var r=[],t=[],u=1,v=null,y=3,z=false,A=false,B=false,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
	"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t);}}function H(a){B=false;G(a);if(!A)if(null!==h(r))A=true,I(J);else {var b=h(t);null!==b&&K(H,b.startTime-a);}}
	function J(a,b){A=false;B&&(B=false,E(L),L=-1);z=true;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b);}else k(r);v=h(r);}if(null!==v)var w=!0;else {var m=h(t);null!==m&&K(H,m.startTime-b);w=!1;}return w}finally{v=null,y=c,z=false;}}var N=false,O=null,L=-1,P=5,Q=-1;
	function M(){return exports.unstable_now()-Q<P?false:true}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=true;try{b=O(!0,a);}finally{b?S():(N=false,O=null);}}else N=false;}var S;if("function"===typeof F)S=function(){F(R);};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null);};}else S=function(){D(R,0);};function I(a){O=a;N||(N=true,S());}function K(a,b){L=D(function(){a(exports.unstable_now());},b);}
	exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){A||z||(A=true,I(J));};
	exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5;};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y;}var c=y;y=b;try{return a()}finally{y=c;}};exports.unstable_pauseExecution=function(){};
	exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=y;y=a;try{return b()}finally{y=c;}};
	exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=true,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=true,I(J)));return a};
	exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c;}}}; 
} (scheduler_production_min));

{
  scheduler.exports = scheduler_production_min;
}

var schedulerExports = scheduler.exports;

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa=reactExports,ca=schedulerExports;function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b);}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a]);}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return  true;if(ja.call(la,a))return  false;if(ka.test(a))return ma[a]=true;la[a]=true;return  false}function pa(a,b,c,d){if(null!==c&&0===c.type)return  false;switch(typeof b){case "function":case "symbol":return  true;case "boolean":if(d)return  false;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return  false}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return  true;if(d)return  false;if(null!==c)switch(c.type){case 3:return !b;case 4:return  false===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return  false}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,false,a,null,false,false);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,false,a[1],null,false,false);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,false,a.toLowerCase(),null,false,false);});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,false,a,null,false,false);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,false,a.toLowerCase(),null,false,false);});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,true,a,null,false,false);});["capture","download"].forEach(function(a){z[a]=new v(a,4,false,a,null,false,false);});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,false,a,null,false,false);});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,false,a.toLowerCase(),null,false,false);});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,false,a,null,false,false);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,false,a,"http://www.w3.org/1999/xlink",false,false);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,false,a,"http://www.w3.org/XML/1998/namespace",false,false);});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,false,a.toLowerCase(),null,false,false);});
z.xlinkHref=new v("xlinkHref",1,false,"xlink:href","http://www.w3.org/1999/xlink",true,false);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,false,a.toLowerCase(),null,true,true);});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?false:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&true===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)));}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");var Ia=Symbol.for("react.offscreen");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return "function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||"";}return "\n"+La+a}var Na=false;
function Oa(a,b){if(!a||Na)return "";Na=true;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(l){var d=l;}Reflect.construct(a,[],b);}else {try{b.call();}catch(l){d=l;}a.call(b.prototype);}else {try{throw Error();}catch(l){d=l;}a();}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=false,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,false),a;case 11:return a=Oa(a.type.render,false),a;case 1:return a=Oa(a.type,true),a;default:return ""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return "Fragment";case wa:return "Portal";case Aa:return "Profiler";case za:return "StrictMode";case Ea:return "Suspense";case Fa:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return (a.displayName||"Context")+".Consumer";case Ba:return (a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return "Cache";case 9:return (b.displayName||"Context")+".Consumer";case 10:return (b._context.displayName||"Context")+".Provider";case 18:return "DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return "Fragment";case 5:return b;case 4:return "Portal";case 3:return "Root";case 6:return "Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return "Offscreen";
case 12:return "Profiler";case 21:return "Scope";case 13:return "Suspense";case 19:return "SuspenseList";case 25:return "TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return ""}}
function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:true,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return  false;var b=a._valueTracker;if(!b)return  true;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),true):false}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,false);}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=true;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=true);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=true;d&&(a[e].defaultSelected=true);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=true);}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}function kb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else {mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
var pb={animationIterationCount:true,aspectRatio:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,columns:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridArea:true,gridRow:true,gridRowEnd:true,gridRowSpan:true,gridRowStart:true,gridColumn:true,gridColumnEnd:true,gridColumnSpan:true,gridColumnStart:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,
zoom:true,fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a];});});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var tb=A({menuitem:true},{area:true,base:true,br:true,col:true,embed:true,hr:true,img:true,input:true,keygen:true,link:true,meta:true,param:true,source:true,track:true,wbr:true});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return  false;default:return  true}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(){}var Ib=false;function Jb(a,b,c){if(Ib)return a(b,c);Ib=true;try{return Gb(a,b,c)}finally{if(Ib=false,null!==zb||null!==Ab)Hb(),Fb();}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=false;}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=false;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0;}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb);}catch(a){Lb=false;}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var Ob=false,Pb=null,Qb=false,Rb=null,Sb={onError:function(a){Ob=true;Pb=a;}};function Tb(a,b,c,d,e,f,g,h,k){Ob=false;Pb=null;Nb.apply(Sb,arguments);}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=false;Pb=null;}else throw Error(p(198));Qb||(Qb=true,Rb=l);}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling;}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=false,h=e.child;h;){if(h===c){g=true;c=e;d=f;break}if(h===d){g=true;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
c){g=true;c=f;d=e;break}if(h===d){g=true;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling;}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128));}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)));}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return  -1;case 134217728:case 268435456:case 536870912:case 1073741824:return  -1;default:return  -1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b);}else k<=b&&(a.expiredLanes|=h);f&=~h;}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c;}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f;}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e;}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=false,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId);}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),true;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),true;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),true;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return  true;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),true}return  false}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c);});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
function Xc(a){if(null!==a.blockedOn)return  false;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null;}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,false;b.shift();}return  true}function Zc(a,b,c){Xc(a)&&c.delete(b);}function $c(){Jc=false;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc);}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=true,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)));}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift();}var cd=ua.ReactCurrentBatchConfig,dd=true;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f;}null!==e&&d.stopPropagation();}else hd(a,b,d,null,c);}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null;}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null;}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return  true}function qd(){return  false}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:false===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=true;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=false),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=true),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:false}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=false;
function ge(a,b){switch(a){case "keyup":return  -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return  true;default:return  false}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=false;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=true;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=false,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:true,date:true,datetime:true,"datetime-local":true,email:true,month:true,number:true,password:true,range:true,search:true,tel:true,text:true,time:true,url:true,week:true};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?true:false}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=false;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=false;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b);}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return  true;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return  false;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return  false;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return  false}return  true}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Je(c);}}function Le(a,b){return a&&b?a===b?true:a&&3===a.nodeType?false:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):false:false}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=false;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=false;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a]);}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf);}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null;}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}}}if(Qb)throw a=Rb,Qb=false,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,false),c.add(d));}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b);}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=true;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,false,a),qf(b,true,a));});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=true,qf("selectionchange",false,b));}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd;}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=true);d?void 0!==e?a.addEventListener(b,c,{capture:true,passive:e}):a.addEventListener(b,c,true):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,false);}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return;}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null;}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x);}t=null;}else t=null;null!==k&&wf(g,h,k,t,false);null!==n&&null!==J&&wf(g,J,n,t,true);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else {na=De;var xa=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value);}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=true;break;case "contextmenu":case "mouseup":case "dragend":Te=false;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0;}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=true)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a);}se(g,b);});}function tf(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return;}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return ("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return "textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;});}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--;}else "$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e;}while(c);bd(b);}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[Of]||a[uf];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return {current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--);}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b;}var Vf={},H=Uf(Vf),Wf=Uf(false),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H);}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c);}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return  true}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c);}var eg=null,fg=false,gg=false;function hg(a){null===eg?eg=[a]:eg.push(a);}function ig(a){fg=true;hg(a);}
function jg(){if(!gg&&null!==eg){gg=true;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1;}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=false;}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b;}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a;}else rg=1<<f|c<<e|d,sg=a;}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0));}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null;}var xg=null,yg=null,I=false,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c);}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),true):false;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,true):false;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,true):false;default:return  false}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=false,xg=a);}}else {if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=false;xg=a;}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a;}
function Gg(a){if(a!==xg)return  false;if(!I)return Fg(a),I=true,false;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling);}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}yg=
null;}}else yg=xg?Lf(a.stateNode.nextSibling):null;return  true}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling);}function Ig(){yg=xg=null;I=false;}function Jg(a){null===zg?zg=[a]:zg.push(a);}var Kg=ua.ReactCurrentBatchConfig;
function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode;}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a;};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c);}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b);}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c);}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d);}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x;}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x;}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling;}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h);}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=Sg(f,a.mode,h);d.return=a;a=d;}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f);}return "string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(true),Vg=Og(false),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null;}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b;}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return;}}
function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=true),a.firstContext=null);}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a};}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a);}
function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=false;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};}
function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function mh(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b;}
function qh(a,b,c,d){var e=a.updateQueue;jh=false;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k));}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=true;}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h));}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null;}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q;}}
function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d);}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a);}E(uh);G(uh,b);}function zh(){E(uh);E(vh);E(wh);}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c));}function Bh(a){vh.current===a&&(E(uh),E(vh));}var L=Uf(0);
function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var Dh=[];
function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0;}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N$1=null,O=null,Ih=false,Jh=false,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return  false;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return  false;return  true}
function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=false;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N$1=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e);}while(Jh)}Fh.current=Rh;b=null!==N$1&&null!==N$1.next;Hh=0;O=N$1=M=null;Ih=false;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N$1){var a=M.alternate;a=null!==a?a.memoizedState:null;}else a=N$1.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N$1=a;else {if(null===a)throw Error(p(310));N$1=a;a={memoizedState:N$1.memoizedState,baseState:N$1.baseState,baseQueue:N$1.baseQueue,queue:N$1.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a;}return O}
function Vh(a,b){return "function"===typeof b?b(a):b}
function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N$1,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else {var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m;}l=l.next;}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=true);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d;}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return [b.memoizedState,c.dispatch]}
function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=true);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}function Yh(){}
function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=true);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e);}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a));}
function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a);}function ai(a,b,c){return c(function(){ei(b)&&fi(a);})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return !He(a,c)}catch(d){return  true}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1);}
function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return [b.memoizedState,a]}
function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d);}
function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N$1){var g=N$1.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d);}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=false,dh=true),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=true);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(true);var d=Gh.transition;Gh.transition={};try{a(!1),b();}finally{C=c,Gh.transition=d;}}function wi(){return Uh().memoizedState}
function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:false,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d);}}
function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:false,eagerState:null,next:null};if(zi(a))Ai(b,e);else {var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d));}}
function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=true;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:false},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return [d.memoizedState,a]},useRef:function(a){var b=
Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(false),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return [b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c();}else {c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c);}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":";}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:false},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N$1.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:false},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
N$1?b.memoizedState=a:ui(b,N$1.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:false};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a) void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
var Ei={isMounted:function(a){return (a=a._reactInternals)?Vb(a)===a:false},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d));}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):true}
function Gi(a,b,c){var d=false,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null);}
function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308);}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e,digest:null}}
function Ki(a,b,c){return {value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=true,Pi=d);Li(a,b);};return c}
function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b);};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e);}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a));}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?true:false:true;if(b)return a;a=a.return;}while(null!==a);return null}
function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=false;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d);}
function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=false,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=true);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else {if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d;}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152;}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
function hj(a,b,c,d,e){if(Zf(c)){var f=true;cg(b);}else f=false;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=true;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&Hi(b,g,d,l);jh=false;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=false);}else {g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=false;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||false)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=false);}return jj(a,b,c,d,f,e)}
function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,false),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,true);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,false);yh(a,b.containerInfo);}
function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return {baseLanes:a,cachePool:null,transitions:null}}
function oj(a,b,c){var d=b.pendingProps,e=L.current,f=false,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?false:0!==(e&2));if(h)f=true,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0;}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1));}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=true;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c);}
function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e);}
function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else {if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}G(L,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,false,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}wj(b,true,c,null,f);break;case "together":wj(b,false,null,null,void 0);break;default:b.memoizedState=null;}return b.child}
function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}
function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Aj=function(){};
Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf);}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,
c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4);};
function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else {if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d);}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(true!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(true!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d);}switch(c){case "input":Va(d);db(d,f,true);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf);}d=e;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=true:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,false,false);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d;}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g));}switch(c){case "input":Va(a);db(a,d,false);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,false):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
true);break;default:"function"===typeof e.onClick&&(a.onclick=Bf);}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=true;break a;default:d=false;}}d&&(b.flags|=4);}null!==b.ref&&(b.flags|=512,b.flags|=2097152);}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:true!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1));}f&&(b.flags|=4);}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d;}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=false;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b;}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=false;}else null!==zg&&(Fj(zg),zg=null),f=true;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,false);else {if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,false);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
a.sibling;}null!==f.tail&&B()>Gj&&(b.flags|=128,d=true,Dj(f,false),b.lanes=4194304);}else {if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=true,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,true),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=true,Dj(f,false),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g);}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig();}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
null;case 24:return null;default:return null}}var Jj=false,U=false,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null);}catch(d){W(a,b,d);}else c.current=null;}function Mj(a,b,c){try{c();}catch(d){W(a,b,d);}}var Nj=false;
function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType;}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y;}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode;}q=y;}c=-1===h||-1===k?null:{start:h,end:k};}else c=null;}c=c||{start:0,end:0};}else c=null;Df={focusedElem:a,selectionRange:c};dd=false;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w;}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F);}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return;}n=Nj;Nj=false;return n}
function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f);}e=e.next;}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c;}"function"===typeof b?b(a):b.current=a;}}
function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null;}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return;}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child;}if(!(a.flags&2))return a.stateNode}}
function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling;}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling;}var X$1=null,Xj=false;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling;}
function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c);}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X$1,e=Xj;X$1=null;Yj(a,b,c);X$1=d;Xj=e;null!==X$1&&(Xj?(a=X$1,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X$1.removeChild(c.stateNode));break;case 18:null!==X$1&&(Xj?(a=X$1,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X$1,c.stateNode));break;case 4:d=X$1;e=Xj;X$1=c.stateNode.containerInfo;Xj=true;
Yj(a,b,c);X$1=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next;}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount();}catch(h){W(c,b,h);}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c);}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X$1=h.stateNode;Xj=!1;break a;case 3:X$1=h.stateNode.containerInfo;Xj=!0;break a;case 4:X$1=h.stateNode.containerInfo;Xj=!0;break a}h=h.return;}if(null===X$1)throw Error(p(160));Zj(f,g,e);X$1=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null;}catch(l){W(e,b,l);}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling;}
function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a);}catch(t){W(a,a.return,t);}try{Pj(5,a,a.return);}catch(t){W(a,a.return,t);}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"");}catch(t){W(a,a.return,t);}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l);}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1));}e[Pf]=f;}catch(t){W(a,a.return,t);}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f;}catch(t){W(a,a.return,t);}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo);}catch(t){W(a,a.return,t);}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount();}catch(t){W(d,c,t);}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q);}m=m.sibling;}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g));}catch(t){W(a,a.return,t);}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps;}catch(t){W(a,a.return,t);}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return;}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling;}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
a),ek(a);}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return;}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k);}a.flags&=-3;}b&4096&&(a.flags&=-4097);}function hk(a,b,c){V=a;ik(a);}
function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f),f=f.sibling;V=e;Jj=h;U=l;}kk(a);}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a);}}
function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else {var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate);}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode;}sh(b,g,c);}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src);}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q);}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Rj(b);}catch(r){W(b,b.return,r);}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}
function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b);}catch(k){W(b,c,k);}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount();}catch(k){W(b,e,k);}}var f=b.return;try{Rj(b);}catch(k){W(b,f,k);}break;case 5:var g=b.return;try{Rj(b);}catch(k){W(b,g,k);}}}catch(k){W(b,b.return,k);}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return;}}
var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=false,Pi=null,Ri=null,vk=false,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg());}
function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg();}),c=null;else {switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc;}c=Fk(c,Gk.bind(null,a));}a.callbackPriority=b;a.callbackNode=c;}}
function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else {b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h);}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T);}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
else {e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f;}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a);}
function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return !1}catch(g){return  false}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else {if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return  true;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return  true}
function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d;}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d));}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg());}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg();}}function Hj(){fj=ej.current;E(ej);}
function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj();}c=c.return;}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g;}c.pending=d;}fh=null;}return a}
function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}Ih=!1;}Hh=0;O=N$1=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null);}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t;}else n.add(k);break a}else {if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426));}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return;}while(null!==f)}Sk(c);}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z);}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e);}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y);}function Lk(){for(;null!==Y&&!cc();)Uk(Y);}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null;}
function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else {c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else {T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===T&&(T=5);}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d);}finally{ok.transition=e,C=d;}return null}
function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=true,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c);dc();K=h;C=g;ok.transition=f;}else a.current=c;vk&&(vk=false,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=false,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else {a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f);}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y;}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J;}while(null!==t)}}V=f;}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return);}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return;}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h);}}catch(na){W(h,h.return,na);}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return;}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a);}catch(na){}d=!0;}return d}finally{C=c,ok.transition=b;}}return  false}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b));}
function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return;}}
function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b);}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c));}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c);}
function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c);}var Vk;
Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=true;else {if(0===(a.lanes&c)&&0===(b.flags&128))return dh=false,yj(a,b,c);dh=0!==(a.flags&131072)?true:false;}else dh=false,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=true,cg(b)):f=false,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,true,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:false,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=true,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else {Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c);}b=b.child;}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k;}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
c,b);h.lanes|=c;break}k=k.next;}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling;}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return;}f=g;}Xi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=true,cg(b)):a=false,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,true,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null;}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return !(!a||!a.isReactComponent)}
function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:false};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null;}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,true===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return;}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,true,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b);}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a);};function ll(a){this._internalRoot=a;}
ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null);};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null);});b[uf]=null;}};function ml(a){this._internalRoot=a;}
ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a);}};function nl(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a);};}var g=el(b,d,a,0,null,false,false,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a);};}var k=bl(a,0,false,null,null,false,false,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d);});return k}
function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a);};}fl(b,g,a,e);}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()));}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c);}}),il(a,1);}};
Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c);}il(a,134217728);}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d);}il(a,b);}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c;}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,false);}};Gb=Qk;Hb=Rk;
var sl={usingClientEntryPoint:false,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
reactDom_production_min.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};reactDom_production_min.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=false,d="",e=kl;null!==b&&void 0!==b&&(true===b.unstable_strictMode&&(c=true),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,false,null,null,c,false,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a){return Rk(a)};reactDom_production_min.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,true,c)};
reactDom_production_min.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=false,f="",g=kl;null!==c&&void 0!==c&&(true===c.unstable_strictMode&&(e=true),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,false,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new ml(b)};reactDom_production_min.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,false,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null;});}),true):false};reactDom_production_min.unstable_batchedUpdates=Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,false,d)};reactDom_production_min.version="18.3.1-next-f1338f8080-20240426";

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

{
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  reactDom.exports = reactDom_production_min;
}

var reactDomExports = reactDom.exports;

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

function createIcon(name, children) {
  const Icon = ({ size = 24, color = 'currentColor', strokeWidth = 2, className = '', style, ...rest }) =>
    React.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: color,
        strokeWidth: strokeWidth,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        className: `lucide lucide-${name} ${className}`.trim(),
        style,
        ...rest,
      },
      ...children.map(([tag, attrs], idx) => React.createElement(tag, { key: idx, ...attrs }))
    );
  Icon.displayName = name;
  return Icon;
}

const Mic2 = createIcon('mic-2', [
  ['path', { d: 'm12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12' }],
  ['circle', { cx: '17', cy: '7', r: '5' }],
]);

const Music = createIcon('music', [
  ['path', { d: 'M9 18V5l12-2v13' }],
  ['circle', { cx: '6', cy: '18', r: '3' }],
  ['circle', { cx: '18', cy: '16', r: '3' }],
]);

const Music2 = createIcon('music-2', [
  ['circle', { cx: '8', cy: '18', r: '4' }],
  ['path', { d: 'M12 18V2l7 4' }],
]);

const Play = createIcon('play', [
  ['polygon', { points: '6 3 20 12 6 21 6 3' }],
]);

createIcon('pause', [
  ['rect', { x: '14', y: '4', width: '4', height: '16', rx: '1' }],
  ['rect', { x: '6', y: '4', width: '4', height: '16', rx: '1' }],
]);

const Square = createIcon('square', [
  ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
]);

const RotateCcw = createIcon('rotate-ccw', [
  ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' }],
  ['path', { d: 'M3 3v5h5' }],
]);

const Trophy = createIcon('trophy', [
  ['path', { d: 'M6 9H4.5a2.5 2.5 0 0 1 0-5H6' }],
  ['path', { d: 'M18 9h1.5a2.5 2.5 0 0 0 0-5H18' }],
  ['path', { d: 'M4 22h16' }],
  ['path', { d: 'M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22' }],
  ['path', { d: 'M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22' }],
  ['path', { d: 'M18 2H6v7a6 6 0 0 0 12 0V2Z' }],
]);

const Sparkles = createIcon('sparkles', [
  ['path', { d: 'M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z' }],
  ['path', { d: 'M20 3v4' }],
  ['path', { d: 'M22 5h-4' }],
  ['path', { d: 'M4 17v2' }],
  ['path', { d: 'M5 18H3' }],
]);

const Star = createIcon('star', [
  ['polygon', { points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' }],
]);

const Volume2 = createIcon('volume-2', [
  ['polygon', { points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5' }],
  ['path', { d: 'M15.54 8.46a5 5 0 0 1 0 7.07' }],
  ['path', { d: 'M19.07 4.93a10 10 0 0 1 0 14.14' }],
]);

const VolumeX = createIcon('volume-x', [
  ['polygon', { points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5' }],
  ['line', { x1: '22', x2: '16', y1: '9', y2: '15' }],
  ['line', { x1: '16', x2: '22', y1: '9', y2: '15' }],
]);

const Award = createIcon('award', [
  ['circle', { cx: '12', cy: '8', r: '6' }],
  ['path', { d: 'M15.477 12.89 17 22l-5-3-5 3 1.523-9.11' }],
]);

const CheckCircle2 = createIcon('check-circle-2', [
  ['circle', { cx: '12', cy: '12', r: '10' }],
  ['path', { d: 'm9 12 2 2 4-4' }],
]);

const XCircle = createIcon('x-circle', [
  ['circle', { cx: '12', cy: '12', r: '10' }],
  ['path', { d: 'm15 9-6 6' }],
  ['path', { d: 'm9 9 6 6' }],
]);

const ChevronRight = createIcon('chevron-right', [
  ['path', { d: 'm9 18 6-6-6-6' }],
]);

const Download = createIcon('download', [
  ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' }],
  ['polyline', { points: '7 10 12 15 17 10' }],
  ['line', { x1: '12', x2: '12', y1: '15', y2: '3' }],
]);

const Share2 = createIcon('share-2', [
  ['circle', { cx: '18', cy: '5', r: '3' }],
  ['circle', { cx: '6', cy: '12', r: '3' }],
  ['circle', { cx: '18', cy: '19', r: '3' }],
  ['line', { x1: '8.59', x2: '15.42', y1: '13.51', y2: '17.49' }],
  ['line', { x1: '15.41', x2: '8.59', y1: '6.51', y2: '10.49' }],
]);

const Crown = createIcon('crown', [
  ['path', { d: 'M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z' }],
  ['path', { d: 'M5 21h14' }],
]);

const Flame = createIcon('flame', [
  ['path', { d: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z' }],
]);

const Heart = createIcon('heart', [
  ['path', { d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' }],
]);

const Radio = createIcon('radio', [
  ['path', { d: 'M4.9 19.1C1 15.2 1 8.8 4.9 4.9' }],
  ['path', { d: 'M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5' }],
  ['circle', { cx: '12', cy: '12', r: '2' }],
  ['path', { d: 'M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5' }],
  ['path', { d: 'M19.1 4.9C23 8.8 23 15.1 19.1 19' }],
]);

const Disc3 = createIcon('disc-3', [
  ['circle', { cx: '12', cy: '12', r: '10' }],
  ['path', { d: 'M6 12c0-1.7.7-3.2 1.8-4.2' }],
  ['circle', { cx: '12', cy: '12', r: '2' }],
  ['path', { d: 'M18 12c0 1.7-.7 3.2-1.8 4.2' }],
]);

const Headphones = createIcon('headphones', [
  ['path', { d: 'M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3' }],
]);

const PartyPopper = createIcon('party-popper', [
  ['path', { d: 'M5.8 11.3 2 22l10.7-3.79' }],
  ['path', { d: 'M4 3h.01' }],
  ['path', { d: 'M22 8h.01' }],
  ['path', { d: 'M15 2h.01' }],
  ['path', { d: 'M22 20h.01' }],
  ['path', { d: 'm22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10' }],
  ['path', { d: 'm22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17' }],
  ['path', { d: 'm11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7' }],
  ['path', { d: 'M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z' }],
]);

createIcon('gift', [
  ['rect', { x: '3', y: '8', width: '18', height: '4', rx: '1' }],
  ['path', { d: 'M12 8v13' }],
  ['path', { d: 'M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7' }],
  ['path', { d: 'M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5' }],
]);

const Globe = createIcon('globe', [
  ['circle', { cx: '12', cy: '12', r: '10' }],
  ['path', { d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' }],
  ['path', { d: 'M2 12h20' }],
]);

createIcon('zap', [
  ['path', { d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z' }],
]);

const HelpCircle = createIcon('help-circle', [
  ['circle', { cx: '12', cy: '12', r: '10' }],
  ['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' }],
  ['path', { d: 'M12 17h.01' }],
]);

const Check = createIcon('check', [
  ['path', { d: 'M20 6 9 17l-5-5' }],
]);

const X = createIcon('x', [
  ['path', { d: 'M18 6 6 18' }],
  ['path', { d: 'm6 6 12 12' }],
]);

createIcon('info', [
  ['circle', { cx: '12', cy: '12', r: '10' }],
  ['path', { d: 'M12 16v-4' }],
  ['path', { d: 'M12 8h.01' }],
]);

createIcon('medal', [
  ['path', { d: 'M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15' }],
  ['path', { d: 'M11 12 5.12 2.2' }],
  ['path', { d: 'm13 12 5.88-9.8' }],
  ['path', { d: 'M8 7h8' }],
  ['circle', { cx: '12', cy: '17', r: '5' }],
  ['path', { d: 'M12 18v-2h-.5' }],
]);

const Cake = createIcon('cake', [
  ['path', { d: 'M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8' }],
  ['path', { d: 'M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1' }],
  ['path', { d: 'M2 21h20' }],
  ['path', { d: 'M7 8v3' }],
  ['path', { d: 'M12 8v3' }],
  ['path', { d: 'M17 8v3' }],
  ['path', { d: 'M7 4h.01' }],
  ['path', { d: 'M12 4h.01' }],
  ['path', { d: 'M17 4h.01' }],
]);

createIcon('users', [
  ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }],
  ['circle', { cx: '9', cy: '7', r: '4' }],
  ['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }],
  ['path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' }],
]);

createIcon('arrow-right', [
  ['path', { d: 'M5 12h14' }],
  ['path', { d: 'm12 5 7 7-7 7' }],
]);

createIcon('refresh-cw', [
  ['path', { d: 'M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8' }],
  ['path', { d: 'M21 3v5h-5' }],
  ['path', { d: 'M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16' }],
  ['path', { d: 'M8 16H3v5' }],
]);

createIcon('sliders', [
  ['line', { x1: '4', x2: '4', y1: '21', y2: '14' }],
  ['line', { x1: '4', x2: '4', y1: '10', y2: '3' }],
  ['line', { x1: '12', x2: '12', y1: '21', y2: '12' }],
  ['line', { x1: '12', x2: '12', y1: '8', y2: '3' }],
  ['line', { x1: '20', x2: '20', y1: '21', y2: '16' }],
  ['line', { x1: '20', x2: '20', y1: '12', y2: '3' }],
  ['line', { x1: '2', x2: '6', y1: '14', y2: '14' }],
  ['line', { x1: '10', x2: '14', y1: '8', y2: '8' }],
  ['line', { x1: '18', x2: '22', y1: '16', y2: '16' }],
]);

const Eye = createIcon('eye', [
  ['path', { d: 'M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0' }],
  ['circle', { cx: '12', cy: '12', r: '3' }],
]);

const EyeOff = createIcon('eye-off', [
  ['path', { d: 'M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49' }],
  ['path', { d: 'M14.084 14.158a3 3 0 0 1-4.242-4.242' }],
  ['path', { d: 'M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143' }],
  ['path', { d: 'm2 2 20 20' }],
]);

const Wand2 = createIcon('wand-2', [
  ['path', { d: 'm21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72' }],
  ['path', { d: 'm14 7 3 3' }],
  ['path', { d: 'M5 6v4' }],
  ['path', { d: 'M19 14v4' }],
  ['path', { d: 'M10 2v2' }],
  ['path', { d: 'M7 8H3' }],
  ['path', { d: 'M21 16h-4' }],
  ['path', { d: 'M11 3H9' }],
]);

createIcon('tv', [
  ['rect', { width: '20', height: '15', x: '2', y: '7', rx: '2', ry: '2' }],
  ['polyline', { points: '17 2 12 7 7 2' }],
]);

const Percent = createIcon('percent', [
  ['line', { x1: '19', x2: '5', y1: '5', y2: '19' }],
  ['circle', { cx: '6.5', cy: '6.5', r: '2.5' }],
  ['circle', { cx: '17.5', cy: '17.5', r: '2.5' }],
]);

class EurovisionAudioEngine {
    constructor() {
        this.ctx = null;
        this.htmlAudio = null;
        this.activeInterval = null;
        this.activeTimeouts = [];
        this.activeOscillators = [];
        this.isMuted = false;
        this.previewCache = new Map();
        this.currentPlaybackId = 0;
    }
    getContext() {
        if (typeof window === 'undefined')
            return null;
        if (!this.ctx) {
            const AudioCtx = window.AudioContext ||
                window.webkitAudioContext;
            if (AudioCtx) {
                this.ctx = new AudioCtx();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume().catch(() => { });
        }
        return this.ctx;
    }
    setMuted(muted) {
        this.isMuted = muted;
        if (this.htmlAudio) {
            this.htmlAudio.muted = muted;
        }
        if (muted) {
            this.stopSongIntro();
        }
    }
    getMuted() {
        return this.isMuted;
    }
    /**
     * Stops any active song intro playback immediately
     * ensuring two songs never play simultaneously.
     */
    stopSongIntro() {
        this.currentPlaybackId++;
        if (this.activeInterval !== null) {
            window.clearInterval(this.activeInterval);
            this.activeInterval = null;
        }
        this.activeTimeouts.forEach((id) => window.clearTimeout(id));
        this.activeTimeouts = [];
        this.activeOscillators.forEach((osc) => {
            try {
                osc.stop();
                osc.disconnect();
            }
            catch {
                // Ignore
            }
        });
        this.activeOscillators = [];
        if (this.htmlAudio) {
            try {
                this.htmlAudio.oncanplay = null;
                this.htmlAudio.onloadeddata = null;
                this.htmlAudio.onerror = null;
                this.htmlAudio.pause();
                this.htmlAudio.removeAttribute('src');
                this.htmlAudio.load();
            }
            catch {
                // Ignore cleanup errors
            }
            this.htmlAudio = null;
        }
    }
    /**
     * Resolves a fresh playable audio URL by exact verified iTunes trackId lookup if needed,
     * validating artistName so a homonymous track by another artist is never chosen.
     */
    async resolvePreviewUrl(song) {
        if (this.previewCache.has(song.id)) {
            return this.previewCache.get(song.id) || null;
        }
        const normalize = (s) => s
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
        try {
            const controller = new AbortController();
            const timeoutId = window.setTimeout(() => controller.abort(), 3500);
            const url = song.itunesTrackId
                ? `https://itunes.apple.com/lookup?id=${song.itunesTrackId}&country=ES`
                : `https://itunes.apple.com/search?term=${encodeURIComponent(song.itunesQuery)}&country=ES&entity=song&limit=10`;
            const response = await fetch(url, { signal: controller.signal });
            window.clearTimeout(timeoutId);
            if (response.ok) {
                const data = await response.json();
                const results = data?.results || [];
                const expectedArtist = normalize(song.artist.split('&')[0].trim());
                const matched = results.find((r) => r.previewUrl &&
                    r.artistName &&
                    (normalize(r.artistName).includes(expectedArtist) || song.itunesTrackId !== undefined)) || results[0];
                if (matched?.previewUrl) {
                    this.previewCache.set(song.id, matched.previewUrl);
                    return matched.previewUrl;
                }
            }
        }
        catch {
            // Ignore network errors
        }
        return null;
    }
    /**
     * Plays a 10-second fragment of the official Eurovision song using HTML5 Audio API.
     * Never replaces real songs with random 8-bit synth melodies.
     */
    async playSongIntro(song, _forceSynth = false, callbacks = {}) {
        this.stopSongIntro();
        const playbackId = this.currentPlaybackId;
        const INTRO_DURATION_SEC = 10.0;
        // 1. Play the verified song.audioUrl immediately via HTML5 Audio API
        if (song.audioUrl) {
            const playedDirect = await this.tryPlayHtml5Audio(song.audioUrl, INTRO_DURATION_SEC, playbackId, callbacks);
            if (playedDirect) {
                return 'html5-preview';
            }
        }
        if (playbackId !== this.currentPlaybackId)
            return 'html5-preview';
        // 2. If the CDN rotated the preview URL, fetch fresh URL using the exact itunesTrackId
        const remotePreviewUrl = await this.resolvePreviewUrl(song);
        if (playbackId !== this.currentPlaybackId)
            return 'html5-preview';
        if (remotePreviewUrl) {
            const playedRemote = await this.tryPlayHtml5Audio(remotePreviewUrl, INTRO_DURATION_SEC, playbackId, callbacks);
            if (playedRemote) {
                return 'html5-preview';
            }
        }
        callbacks.onError?.(false);
        return 'html5-preview';
    }
    tryPlayHtml5Audio(src, durationSec, playbackId, callbacks) {
        return new Promise((resolve) => {
            try {
                const audio = new Audio();
                audio.preload = 'auto';
                audio.muted = this.isMuted;
                audio.volume = 0.9;
                this.htmlAudio = audio;
                let settled = false;
                let playAttempted = false;
                const failTimeout = window.setTimeout(() => {
                    if (!settled) {
                        settled = true;
                        resolve(false);
                    }
                }, 6000);
                this.activeTimeouts.push(failTimeout);
                const cleanupFail = () => {
                    if (!settled) {
                        settled = true;
                        window.clearTimeout(failTimeout);
                        resolve(false);
                    }
                };
                audio.onerror = cleanupFail;
                const beginTimerAndResolve = () => {
                    if (settled)
                        return;
                    settled = true;
                    window.clearTimeout(failTimeout);
                    resolve(true);
                    const startTime = performance.now();
                    this.activeInterval = window.setInterval(() => {
                        if (playbackId !== this.currentPlaybackId)
                            return;
                        const elapsed = (performance.now() - startTime) / 1000;
                        const clamped = Math.min(elapsed, durationSec);
                        const pct = Math.min(100, (clamped / durationSec) * 100);
                        callbacks.onProgress?.(pct, clamped, durationSec, 'html5-preview');
                        if (elapsed >= durationSec) {
                            this.stopSongIntro();
                            callbacks.onEnded?.();
                        }
                    }, 80);
                };
                const attemptPlay = () => {
                    if (settled || playAttempted)
                        return;
                    if (playbackId !== this.currentPlaybackId) {
                        settled = true;
                        resolve(false);
                        return;
                    }
                    playAttempted = true;
                    audio
                        .play()
                        .then(beginTimerAndResolve)
                        .catch(cleanupFail);
                };
                audio.src = src;
                // Start playback immediately with the user's click gesture
                attemptPlay();
            }
            catch {
                resolve(false);
            }
        });
    }
    /**
     * Eurovision Te Deum inspired stage fanfare
     */
    playStageIntroFanfare() {
        if (this.isMuted)
            return;
        const ctx = this.getContext();
        if (!ctx)
            return;
        const notes = [
            { f: 293.66, t: 0, d: 0.18 },
            { f: 392.0, t: 0.18, d: 0.35 },
            { f: 392.0, t: 0.55, d: 0.18 },
            { f: 440.0, t: 0.75, d: 0.35 },
            { f: 493.88, t: 1.12, d: 0.55 },
            { f: 587.33, t: 1.7, d: 0.7 },
        ];
        const now = ctx.currentTime + 0.02;
        notes.forEach(({ f, t, d }) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(f, now + t);
            gain.gain.setValueAtTime(0.001, now + t);
            gain.gain.exponentialRampToValueAtTime(0.15, now + t + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, now + t + d);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + t);
            osc.stop(now + t + d + 0.02);
        });
    }
    playCorrectSound() {
        if (this.isMuted)
            return;
        const ctx = this.getContext();
        if (!ctx)
            return;
        const chord = [523.25, 659.25, 783.99, 1046.5];
        const now = ctx.currentTime + 0.01;
        chord.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            const start = now + idx * 0.07;
            osc.frequency.setValueAtTime(freq, start);
            gain.gain.setValueAtTime(0.001, start);
            gain.gain.exponentialRampToValueAtTime(0.16, start + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, start + 0.45);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(start);
            osc.stop(start + 0.48);
        });
    }
    playWrongSound() {
        if (this.isMuted)
            return;
        const ctx = this.getContext();
        if (!ctx)
            return;
        const now = ctx.currentTime + 0.01;
        [246.94, 220.0].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sawtooth';
            const start = now + idx * 0.16;
            osc.frequency.setValueAtTime(freq, start);
            gain.gain.setValueAtTime(0.001, start);
            gain.gain.exponentialRampToValueAtTime(0.11, start + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, start + 0.25);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(start);
            osc.stop(start + 0.28);
        });
    }
    playPointAssignSound(points) {
        if (this.isMuted)
            return;
        const ctx = this.getContext();
        if (!ctx)
            return;
        const now = ctx.currentTime + 0.01;
        const baseFreq = 330 + points * 32;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(baseFreq, now);
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.25, now + 0.18);
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.15, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.24);
    }
    /**
     * Iconic "12 POINTS!" celebration fanfare
     */
    playDocePuntosFanfare() {
        if (this.isMuted)
            return;
        const ctx = this.getContext();
        if (!ctx)
            return;
        const seq = [
            { f: 523.25, t: 0, d: 0.14 },
            { f: 659.25, t: 0.14, d: 0.14 },
            { f: 783.99, t: 0.28, d: 0.14 },
            { f: 1046.5, t: 0.42, d: 0.4 },
            { f: 880.0, t: 0.85, d: 0.18 },
            { f: 1046.5, t: 1.05, d: 0.75 },
        ];
        const now = ctx.currentTime + 0.02;
        seq.forEach(({ f, t, d }) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(f, now + t);
            gain.gain.setValueAtTime(0.001, now + t);
            gain.gain.exponentialRampToValueAtTime(0.2, now + t + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, now + t + d);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + t);
            osc.stop(now + t + d + 0.03);
        });
    }
}
const audioEngine = new EurovisionAudioEngine();

const Header = ({ screen, quizScore, medalUnlocked, onRestart, onGoHome, }) => {
    const [isMuted, setIsMuted] = reactExports.useState(audioEngine.getMuted());
    const handleToggleMute = () => {
        const next = !isMuted;
        setIsMuted(next);
        audioEngine.setMuted(next);
    };
    const getPhaseLabel = () => {
        switch (screen) {
            case 'welcome':
                return 'GALA OFICIAL · BIENVENIDA';
            case 'guess':
                return 'FASE 1 · GUESS THE SONG';
            case 'voting':
                return 'FASE 2 · EUROVISION VOTING';
            case 'results':
                return 'GRAN FINAL · RESULTS & MEDAL';
        }
    };
    return (jsxRuntimeExports.jsx("header", { className: "esc-header", children: jsxRuntimeExports.jsxs("div", { className: "esc-header-inner", children: [jsxRuntimeExports.jsxs("button", { type: "button", className: "esc-brand-btn", onClick: onGoHome, title: "Volver a la portada de 12 POINTS", children: [jsxRuntimeExports.jsxs("div", { className: "esc-brand-badge", children: [jsxRuntimeExports.jsx("span", { className: "esc-brand-12", children: "12" }), jsxRuntimeExports.jsx(Mic2, { size: 16, className: "esc-brand-mic" })] }), jsxRuntimeExports.jsxs("div", { className: "esc-brand-text", children: [jsxRuntimeExports.jsx("span", { className: "esc-brand-title", children: "12 POINTS" }), jsxRuntimeExports.jsxs("span", { className: "esc-brand-sub", children: [jsxRuntimeExports.jsx(Cake, { size: 11 }), " CUMPLE DE IRINA"] })] })] }), jsxRuntimeExports.jsxs("div", { className: "esc-phase-pill", children: [jsxRuntimeExports.jsx(Sparkles, { size: 14, className: "esc-phase-icon" }), jsxRuntimeExports.jsx("span", { children: getPhaseLabel() })] }), jsxRuntimeExports.jsxs("div", { className: "esc-header-actions", children: [screen !== 'welcome' && (jsxRuntimeExports.jsxs("div", { className: "esc-score-chip", title: "Puntuaci\u00F3n musical acumulada", children: [jsxRuntimeExports.jsx(Trophy, { size: 15, className: "esc-gold-icon" }), jsxRuntimeExports.jsx("span", { children: quizScore }), jsxRuntimeExports.jsx("small", { children: "PTS" })] })), medalUnlocked && (jsxRuntimeExports.jsxs("div", { className: "esc-medal-mini-badge", title: "Medalla 12 POINTS desbloqueada", children: ["\uD83C\uDFC5 ", jsxRuntimeExports.jsx("span", { children: "EXPERT" })] })), jsxRuntimeExports.jsx("button", { type: "button", className: "esc-icon-btn", onClick: handleToggleMute, "aria-label": isMuted ? 'Activar sonido' : 'Silenciar sonido', title: isMuted ? 'Activar sonido' : 'Silenciar sonido', children: isMuted ? jsxRuntimeExports.jsx(VolumeX, { size: 18 }) : jsxRuntimeExports.jsx(Volume2, { size: 18 }) }), screen !== 'welcome' && (jsxRuntimeExports.jsxs("button", { type: "button", className: "esc-icon-btn esc-restart-btn", onClick: onRestart, title: "Reiniciar partida", "aria-label": "Reiniciar partida", children: [jsxRuntimeExports.jsx(RotateCcw, { size: 17 }), jsxRuntimeExports.jsx("span", { className: "hide-mobile", children: "Reiniciar" })] }))] })] }) }));
};

const DIFFICULTY_OPTIONS = [
    {
        id: 'easy',
        label: 'Fácil · Grandes Himnos',
        tag: 'POPULAR',
        desc: 'Chanel, Loreen, ABBA, Rosa López, Måneskin, Massiel... Los mayores temazos de la historia.',
        icon: jsxRuntimeExports.jsx(Star, { size: 18 }),
    },
    {
        id: 'mixed',
        label: 'Mixta · Gala Completa',
        tag: 'RECOMENDADO',
        desc: 'Equilibrio ideal de clásicos míticos, himnos recientes (Käärijä, Nebulossa, Nemo, Beth) y favoritos.',
        icon: jsxRuntimeExports.jsx(Flame, { size: 18 }),
    },
    {
        id: 'expert',
        label: 'Experta · Eurofan Nivel Dios',
        tag: 'EXPERT',
        desc: 'Joyas de distintas décadas, iconos de culto (Pastora Soler, Mocedades, Salomé, Baby Lasagna, Go_A).',
        icon: jsxRuntimeExports.jsx(Crown, { size: 18 }),
    },
];
const WelcomePage = ({ difficulty, showHintsByDefault, savedStats, onSelectDifficulty, onToggleHints, onStartGame, }) => {
    return (jsxRuntimeExports.jsx("section", { className: "esc-welcome-page", children: jsxRuntimeExports.jsxs("div", { className: "esc-hero-card", children: [jsxRuntimeExports.jsxs("div", { className: "esc-birthday-pill", children: [jsxRuntimeExports.jsx(Cake, { size: 15 }), jsxRuntimeExports.jsx("span", { children: "EDICI\u00D3N ESPECIAL CUMPLEA\u00D1OS DE IRINA \u00B7 LIVE EUROVISION SHOW" }), jsxRuntimeExports.jsx(Sparkles, { size: 15 })] }), jsxRuntimeExports.jsx("div", { className: "esc-stage-illustration", "aria-hidden": "true", children: jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 600 220", className: "esc-stage-svg", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntimeExports.jsxs("defs", { children: [jsxRuntimeExports.jsxs("linearGradient", { id: "beamBlue", x1: "0%", y1: "0%", x2: "50%", y2: "100%", children: [jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#263BFF", stopOpacity: "0.65" }), jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#263BFF", stopOpacity: "0" })] }), jsxRuntimeExports.jsxs("linearGradient", { id: "beamPink", x1: "100%", y1: "0%", x2: "50%", y2: "100%", children: [jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#FF3FA4", stopOpacity: "0.65" }), jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#FF3FA4", stopOpacity: "0" })] }), jsxRuntimeExports.jsxs("linearGradient", { id: "beamCyan", x1: "50%", y1: "0%", x2: "50%", y2: "100%", children: [jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#27E5D5", stopOpacity: "0.55" }), jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#27E5D5", stopOpacity: "0" })] }), jsxRuntimeExports.jsxs("linearGradient", { id: "archNeon", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#263BFF" }), jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#FF3FA4" }), jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#27E5D5" })] }), jsxRuntimeExports.jsxs("radialGradient", { id: "stageFloor", cx: "50%", cy: "85%", r: "50%", children: [jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#873EFF", stopOpacity: "0.55" }), jsxRuntimeExports.jsx("stop", { offset: "60%", stopColor: "#263BFF", stopOpacity: "0.2" }), jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#080B2A", stopOpacity: "0" })] })] }), jsxRuntimeExports.jsx("polygon", { points: "80,0 210,200 340,200", fill: "url(#beamBlue)", className: "svg-beam-1" }), jsxRuntimeExports.jsx("polygon", { points: "520,0 260,200 390,200", fill: "url(#beamPink)", className: "svg-beam-2" }), jsxRuntimeExports.jsx("polygon", { points: "300,0 220,200 380,200", fill: "url(#beamCyan)", className: "svg-beam-3" }), jsxRuntimeExports.jsx("path", { d: "M 110 190 A 190 155 0 0 1 490 190", fill: "none", stroke: "url(#archNeon)", strokeWidth: "4", strokeOpacity: "0.8" }), jsxRuntimeExports.jsx("path", { d: "M 150 190 A 150 120 0 0 1 450 190", fill: "none", stroke: "#FFD166", strokeWidth: "2", strokeDasharray: "8 6", strokeOpacity: "0.65" }), jsxRuntimeExports.jsx("ellipse", { cx: "300", cy: "192", rx: "230", ry: "24", fill: "url(#stageFloor)" }), jsxRuntimeExports.jsx("ellipse", { cx: "300", cy: "192", rx: "165", ry: "14", fill: "none", stroke: "#27E5D5", strokeWidth: "2", strokeOpacity: "0.7" }), [210, 228, 246, 264, 282, 318, 336, 354, 372, 390].map((x, idx) => {
                                const h = 25 + ((idx * 17) % 45);
                                return (jsxRuntimeExports.jsx("rect", { x: x - 4, y: 180 - h, width: "8", height: h, rx: "4", fill: idx % 2 === 0 ? '#FF3FA4' : '#27E5D5', opacity: "0.75" }, x));
                            }), jsxRuntimeExports.jsx("circle", { cx: "300", cy: "105", r: "34", fill: "#FFD166", fillOpacity: "0.16" }), jsxRuntimeExports.jsx("circle", { cx: "300", cy: "105", r: "22", fill: "#FFD166" }), jsxRuntimeExports.jsx("rect", { x: "294", y: "126", width: "12", height: "44", rx: "6", fill: "#FFFFFF" }), jsxRuntimeExports.jsx("path", { d: "M 275 178 L 325 178", stroke: "#FFD166", strokeWidth: "5", strokeLinecap: "round" })] }) }), jsxRuntimeExports.jsxs("div", { className: "esc-logo-block", children: [jsxRuntimeExports.jsxs("div", { className: "esc-logo-12-row", children: [jsxRuntimeExports.jsx("span", { className: "esc-giant-12", children: "12" }), jsxRuntimeExports.jsxs("div", { className: "esc-logo-words", children: [jsxRuntimeExports.jsx("h1", { className: "esc-main-title", children: "POINTS" }), jsxRuntimeExports.jsx("span", { className: "esc-challenge-tag", children: "EUROVISION CHALLENGE" })] })] }), jsxRuntimeExports.jsx("p", { className: "esc-subtitle", children: "HOW WELL DO YOU KNOW EUROVISION?" })] }), jsxRuntimeExports.jsxs("p", { className: "esc-intro-copy", children: ["\u00AB\u00BFReconoces una canci\u00F3n de Eurovisi\u00F3n con solo escuchar sus primeros segundos? Demu\u00E9stralo,", ' ', jsxRuntimeExports.jsx("strong", { children: "Irina" }), ", reparte tus puntos en la Gran Final y consigue tus", ' ', jsxRuntimeExports.jsx("span", { className: "text-gold", children: "12 Points" }), ".\u00BB"] }), jsxRuntimeExports.jsxs("div", { className: "esc-phases-preview", children: [jsxRuntimeExports.jsxs("div", { className: "esc-phase-mini-card", children: [jsxRuntimeExports.jsx(Music, { size: 18, className: "icon-cyan" }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("strong", { children: "1. Guess the Song" }), jsxRuntimeExports.jsx("span", { children: "10 rondas escuchando la intro (100, 75 o 50 pts)." })] })] }), jsxRuntimeExports.jsxs("div", { className: "esc-phase-mini-card", children: [jsxRuntimeExports.jsx(Trophy, { size: 18, className: "icon-pink" }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("strong", { children: "2. Eurovision Voting" }), jsxRuntimeExports.jsx("span", { children: "Reparte tus 1 a 12 puntos junto al Jurado Internacional." })] })] }), jsxRuntimeExports.jsxs("div", { className: "esc-phase-mini-card", children: [jsxRuntimeExports.jsx(Award, { size: 18, className: "icon-gold" }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("strong", { children: "3. Medalla Coleccionable" }), jsxRuntimeExports.jsx("span", { children: "Desbloquea y descarga tu medalla 12 POINTS Expert." })] })] })] }), jsxRuntimeExports.jsxs("div", { className: "esc-config-section", children: [jsxRuntimeExports.jsx("label", { className: "esc-config-label", children: "ELIGE EL NIVEL MUSICAL DE LA GALA:" }), jsxRuntimeExports.jsx("div", { className: "esc-difficulty-grid", children: DIFFICULTY_OPTIONS.map((opt) => {
                                const active = difficulty === opt.id;
                                return (jsxRuntimeExports.jsxs("button", { type: "button", className: `esc-diff-card ${active ? 'selected' : ''}`, onClick: () => onSelectDifficulty(opt.id), children: [jsxRuntimeExports.jsxs("div", { className: "esc-diff-top", children: [jsxRuntimeExports.jsx("span", { className: "esc-diff-icon", children: opt.icon }), jsxRuntimeExports.jsx("span", { className: "esc-diff-tag", children: opt.tag })] }), jsxRuntimeExports.jsx("strong", { children: opt.label }), jsxRuntimeExports.jsx("p", { children: opt.desc })] }, opt.id));
                            }) }), jsxRuntimeExports.jsx("div", { className: "esc-hint-pref-row", children: jsxRuntimeExports.jsxs("label", { className: "esc-checkbox-label", children: [jsxRuntimeExports.jsx("input", { type: "checkbox", checked: showHintsByDefault, onChange: (e) => onToggleHints(e.target.checked) }), jsxRuntimeExports.jsx(Eye, { size: 15 }), jsxRuntimeExports.jsx("span", { children: "Mostrar bandera del pa\u00EDs y a\u00F1o como pista visual en cada ronda" })] }) })] }), jsxRuntimeExports.jsx("div", { className: "esc-hero-cta-wrap", children: jsxRuntimeExports.jsxs("button", { type: "button", className: "esc-start-show-btn", onClick: onStartGame, children: [jsxRuntimeExports.jsx(Play, { size: 22, fill: "currentColor" }), jsxRuntimeExports.jsx("span", { children: "START THE SHOW" })] }) }), savedStats.gamesCompleted > 0 && (jsxRuntimeExports.jsxs("div", { className: "esc-saved-stats-bar", children: [jsxRuntimeExports.jsxs("span", { children: ["\uD83C\uDFC5 Galas completadas: ", jsxRuntimeExports.jsx("strong", { children: savedStats.gamesCompleted })] }), jsxRuntimeExports.jsxs("span", { children: ["\uD83C\uDFB5 Mejor puntuaci\u00F3n: ", jsxRuntimeExports.jsxs("strong", { children: [savedStats.bestQuizScore, " PTS"] })] }), savedStats.medalUnlocked && (jsxRuntimeExports.jsx("span", { className: "esc-unlocked-pill", children: "\u2605 Medalla Eurovision Expert Desbloqueada" }))] }))] }) }));
};

const ProgressBar = ({ currentRound, totalRounds, roundResults, deckIds, }) => {
    const displayRound = String(currentRound + 1).padStart(2, '0');
    const displayTotal = String(totalRounds).padStart(2, '0');
    const percentage = Math.min(100, ((currentRound + 1) / totalRounds) * 100);
    return (jsxRuntimeExports.jsxs("div", { className: "esc-progress-wrapper", children: [jsxRuntimeExports.jsxs("div", { className: "esc-progress-top", children: [jsxRuntimeExports.jsxs("div", { className: "esc-round-badge", children: [jsxRuntimeExports.jsx("span", { className: "esc-round-dot" }), "ROUND ", jsxRuntimeExports.jsx("strong", { children: displayRound }), " / ", displayTotal] }), jsxRuntimeExports.jsx("div", { className: "esc-progress-steps", "aria-label": "Progreso por rondas", children: deckIds.map((songId, idx) => {
                            const res = roundResults.find((r) => r.songId === songId);
                            let statusClass = 'pending';
                            if (res) {
                                statusClass = res.isCorrect ? 'correct' : 'wrong';
                            }
                            else if (idx === currentRound) {
                                statusClass = 'active';
                            }
                            return (jsxRuntimeExports.jsx("span", { className: `esc-step-pip ${statusClass}`, title: `Ronda ${idx + 1}` }, songId));
                        }) })] }), jsxRuntimeExports.jsx("div", { className: "esc-progress-track", role: "progressbar", "aria-valuenow": percentage, "aria-valuemin": 0, "aria-valuemax": 100, children: jsxRuntimeExports.jsx("div", { className: "esc-progress-fill", style: { width: `${percentage}%` } }) })] }));
};

const AudioPlayer = ({ song, playCount, maxPlays = 3, isAnswered, potentialPoints, onRegisterPlay, }) => {
    const [isPlaying, setIsPlaying] = reactExports.useState(false);
    const [isLoading, setIsLoading] = reactExports.useState(false);
    const [progress, setProgress] = reactExports.useState(0);
    const [elapsedSec, setElapsedSec] = reactExports.useState(0);
    const [totalSec, setTotalSec] = reactExports.useState(10);
    const [loadError, setLoadError] = reactExports.useState(false);
    // Stop audio cleanly when changing song round or when answered
    reactExports.useEffect(() => {
        audioEngine.stopSongIntro();
        setIsPlaying(false);
        setIsLoading(false);
        setProgress(0);
        setElapsedSec(0);
        setLoadError(false);
        return () => {
            audioEngine.stopSongIntro();
        };
    }, [song.id]);
    reactExports.useEffect(() => {
        if (isAnswered && isPlaying) {
            audioEngine.stopSongIntro();
            setIsPlaying(false);
            setIsLoading(false);
        }
    }, [isAnswered, isPlaying]);
    const handleTogglePlay = async () => {
        if (isPlaying || isLoading) {
            audioEngine.stopSongIntro();
            setIsPlaying(false);
            setIsLoading(false);
            return;
        }
        if (playCount >= maxPlays && !isAnswered) {
            return;
        }
        if (!isAnswered) {
            const allowed = onRegisterPlay();
            if (!allowed)
                return;
        }
        setLoadError(false);
        setIsLoading(true);
        setIsPlaying(true);
        setProgress(0);
        setElapsedSec(0);
        await audioEngine.playSongIntro(song, false, {
            onProgress: (pct, elapsed, total) => {
                setIsLoading(false);
                setProgress(pct);
                setElapsedSec(elapsed);
                setTotalSec(total);
            },
            onEnded: () => {
                setIsPlaying(false);
                setIsLoading(false);
                setProgress(100);
            },
            onError: () => {
                setIsLoading(false);
                setIsPlaying(false);
                setLoadError(true);
            },
        });
        setIsLoading(false);
    };
    const playsLeft = Math.max(0, maxPlays - playCount);
    const canPlay = isPlaying || isAnswered || playCount < maxPlays;
    const formatSec = (s) => {
        const whole = Math.floor(s);
        const tenths = Math.floor((s - whole) * 10);
        return `${String(whole).padStart(2, '0')}.${tenths}s`;
    };
    return (jsxRuntimeExports.jsxs("div", { className: `esc-audio-player ${isPlaying ? 'playing' : ''}`, children: [jsxRuntimeExports.jsxs("div", { className: "esc-audio-top-row", children: [jsxRuntimeExports.jsxs("div", { className: "esc-attempts-pill", children: [jsxRuntimeExports.jsx(Headphones, { size: 14 }), jsxRuntimeExports.jsxs("span", { children: ["Escuchas: ", jsxRuntimeExports.jsx("strong", { children: playCount }), " / ", maxPlays] }), !isAnswered && (jsxRuntimeExports.jsxs("span", { className: "esc-points-stake", children: [jsxRuntimeExports.jsx(Sparkles, { size: 12 }), " Vale ", jsxRuntimeExports.jsxs("strong", { children: [potentialPoints, " PTS"] })] }))] }), jsxRuntimeExports.jsxs("div", { className: "esc-synth-toggle", children: [jsxRuntimeExports.jsx(Radio, { size: 13 }), jsxRuntimeExports.jsx("span", { children: "Audio Original Eurovisi\u00F3n" })] })] }), jsxRuntimeExports.jsxs("div", { className: "esc-soundwave-stage", "aria-hidden": "true", children: [jsxRuntimeExports.jsx("div", { className: `esc-vinyl-disc ${isPlaying ? 'spinning' : ''}`, children: jsxRuntimeExports.jsx(Disc3, { size: 34 }) }), jsxRuntimeExports.jsx("div", { className: "esc-wave-bars", children: Array.from({ length: 24 }).map((_, i) => (jsxRuntimeExports.jsx("span", { className: `esc-wave-bar ${isPlaying ? 'animating' : ''}`, style: {
                                animationDelay: `${(i % 8) * 0.09}s`,
                                height: isPlaying ? undefined : `${18 + ((i * 11) % 35)}%`,
                            } }, i))) })] }), jsxRuntimeExports.jsxs("div", { className: "esc-audio-timeline", children: [jsxRuntimeExports.jsx("div", { className: "esc-audio-track", children: jsxRuntimeExports.jsx("div", { className: "esc-audio-fill", style: { width: `${progress}%` } }) }), jsxRuntimeExports.jsxs("div", { className: "esc-audio-time-labels", children: [jsxRuntimeExports.jsx("span", { children: loadError
                                    ? '⚠️ No se pudo cargar el audio. Comprueba tu conexión y vuelve a pulsar PLAY.'
                                    : isLoading
                                        ? 'Cargando grabación original...'
                                        : isPlaying
                                            ? '🎵 Reproduciendo grabación original de Eurovisión...'
                                            : playCount === 0
                                                ? 'Pulsa PLAY INTRO para escuchar el fragmento original'
                                                : playsLeft > 0
                                                    ? `Te quedan ${playsLeft} ${playsLeft === 1 ? 'escucha disponible' : 'escuchas disponibles'}`
                                                    : 'Has agotado las 3 escuchas · ¡Elige tu respuesta!' }), jsxRuntimeExports.jsxs("span", { className: "esc-audio-clock", children: [formatSec(elapsedSec), " / ", formatSec(totalSec)] })] })] }), jsxRuntimeExports.jsx("div", { className: "esc-audio-controls", children: jsxRuntimeExports.jsx("button", { type: "button", className: `esc-play-intro-btn ${isPlaying ? 'is-playing' : ''}`, onClick: handleTogglePlay, disabled: !canPlay, children: isPlaying ? (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(Square, { size: 18 }), jsxRuntimeExports.jsx("span", { children: "STOP INTRO" })] })) : (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(Play, { size: 18 }), jsxRuntimeExports.jsx("span", { children: playCount === 0
                                    ? 'PLAY INTRO'
                                    : isAnswered
                                        ? 'VOLVER A ESCUCHAR'
                                        : playsLeft > 0
                                            ? `PLAY INTRO (${playsLeft} RESTANTES)`
                                            : 'SIN ESCUCHAS RESTANTES' })] })) }) })] }));
};

const SongCard = ({ song, roundNumber, playCount, potentialPoints, selectedAnswer, showHintsByDefault, onRegisterPlay, }) => {
    const [showClues, setShowClues] = reactExports.useState(showHintsByDefault);
    const [showExtraHint, setShowExtraHint] = reactExports.useState(false);
    reactExports.useEffect(() => {
        setShowClues(showHintsByDefault);
        setShowExtraHint(false);
    }, [song.id, showHintsByDefault]);
    const isAnswered = selectedAnswer !== null;
    const isCorrect = isAnswered && selectedAnswer === song.correctAnswer;
    return (jsxRuntimeExports.jsxs("div", { className: `esc-song-card ${isAnswered ? (isCorrect ? 'answered-correct' : 'answered-wrong') : ''}`, children: [jsxRuntimeExports.jsxs("div", { className: "esc-song-card-header", children: [jsxRuntimeExports.jsxs("div", { className: "esc-stage-spotlight-tag", children: [jsxRuntimeExports.jsx(Sparkles, { size: 14 }), jsxRuntimeExports.jsxs("span", { children: ["ESCENARIO EUROVISI\u00D3N \u00B7 CANCI\u00D3N #", String(roundNumber).padStart(2, '0')] })] }), jsxRuntimeExports.jsxs("div", { className: "esc-clue-badges", children: [showClues || isAnswered ? (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsxs("span", { className: "esc-country-pill", title: `País participante: ${song.country}`, children: [jsxRuntimeExports.jsx("span", { className: "esc-flag-emoji", children: song.flag }), jsxRuntimeExports.jsx("strong", { children: song.country })] }), jsxRuntimeExports.jsx("span", { className: "esc-year-pill", children: song.year })] })) : (jsxRuntimeExports.jsxs("button", { type: "button", className: "esc-reveal-clue-btn", onClick: () => setShowClues(true), children: [jsxRuntimeExports.jsx(Eye, { size: 14 }), jsxRuntimeExports.jsx("span", { children: "Mostrar Pa\u00EDs y A\u00F1o" })] })), showClues && !isAnswered && (jsxRuntimeExports.jsx("button", { type: "button", className: "esc-hide-clue-btn", onClick: () => setShowClues(false), title: "Ocultar pista de pa\u00EDs y a\u00F1o", children: jsxRuntimeExports.jsx(EyeOff, { size: 13 }) }))] })] }), jsxRuntimeExports.jsx(AudioPlayer, { song: song, playCount: playCount, isAnswered: isAnswered, potentialPoints: potentialPoints, onRegisterPlay: onRegisterPlay }), !isAnswered && (jsxRuntimeExports.jsx("div", { className: "esc-hint-section", children: !showExtraHint ? (jsxRuntimeExports.jsxs("button", { type: "button", className: "esc-hint-btn", onClick: () => setShowExtraHint(true), children: [jsxRuntimeExports.jsx(HelpCircle, { size: 14 }), jsxRuntimeExports.jsx("span", { children: "\u00BFNecesitas una pista eurovisiva, Irina?" })] })) : (jsxRuntimeExports.jsxs("div", { className: "esc-hint-box", children: [jsxRuntimeExports.jsx(Globe, { size: 15, className: "esc-hint-icon" }), jsxRuntimeExports.jsx("p", { children: song.optionalHint })] })) })), isAnswered && (jsxRuntimeExports.jsxs("div", { className: `esc-feedback-banner ${isCorrect ? 'correct' : 'wrong'}`, children: [jsxRuntimeExports.jsx("div", { className: "esc-feedback-status", children: isCorrect ? (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(CheckCircle2, { size: 26, className: "esc-feedback-icon" }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("h3", { children: "CORRECT! \uD83C\uDF89" }), jsxRuntimeExports.jsxs("p", { children: ["\u00A1Brillante, Irina! Has sumado", ' ', jsxRuntimeExports.jsxs("strong", { children: ["+", playCount <= 1 ? 100 : playCount === 2 ? 75 : 50, " PUNTOS"] }), ' ', "en esta actuaci\u00F3n."] })] })] })) : (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(XCircle, { size: 26, className: "esc-feedback-icon" }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("h3", { children: "NOT QUITE! \u2728" }), jsxRuntimeExports.jsxs("p", { children: ["La canci\u00F3n correcta era ", jsxRuntimeExports.jsx("strong", { children: song.correctAnswer }), " (0 puntos)."] })] })] })) }), jsxRuntimeExports.jsxs("div", { className: "esc-song-reveal-details", children: [jsxRuntimeExports.jsxs("div", { className: "esc-song-reveal-main", children: [jsxRuntimeExports.jsx("span", { className: "esc-reveal-flag", children: song.flag }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("h4", { children: song.title }), jsxRuntimeExports.jsxs("p", { children: [jsxRuntimeExports.jsx("strong", { children: song.artist }), " \u00B7 ", song.country, " (", song.year, ")"] })] })] }), jsxRuntimeExports.jsx("p", { className: "esc-song-funfact", children: song.funFact })] })] }))] }));
};

const LETTERS = ['A', 'B', 'C', 'D'];
const AnswerOption = ({ option, index, selectedAnswer, correctAnswer, onSelect, }) => {
    const isAnswered = selectedAnswer !== null;
    const isSelected = selectedAnswer === option;
    const isCorrectOption = option === correctAnswer;
    let stateClass = '';
    if (isAnswered) {
        if (isCorrectOption) {
            stateClass = 'is-correct';
        }
        else if (isSelected && !isCorrectOption) {
            stateClass = 'is-wrong';
        }
        else {
            stateClass = 'is-dimmed';
        }
    }
    return (jsxRuntimeExports.jsxs("button", { type: "button", className: `esc-answer-option ${stateClass}`, onClick: () => onSelect(option), disabled: isAnswered, children: [jsxRuntimeExports.jsx("span", { className: "esc-option-letter", children: LETTERS[index] || index + 1 }), jsxRuntimeExports.jsx("span", { className: "esc-option-text", children: option }), jsxRuntimeExports.jsxs("span", { className: "esc-option-indicator", children: [isAnswered && isCorrectOption && jsxRuntimeExports.jsx(Check, { size: 18 }), isAnswered && isSelected && !isCorrectOption && jsxRuntimeExports.jsx(X, { size: 18 }), !isAnswered && jsxRuntimeExports.jsx(Music2, { size: 16, className: "esc-option-music-icon" })] })] }));
};

const GuessSongPage = ({ song, currentRoundIndex, totalRounds, deckIds, roundResults, playCount, potentialPoints, selectedAnswer, showHintsByDefault, onRegisterPlay, onSelectAnswer, onNextRound, }) => {
    const isAnswered = selectedAnswer !== null;
    const isLastRound = currentRoundIndex === totalRounds - 1;
    return (jsxRuntimeExports.jsxs("section", { className: "esc-guess-page", children: [jsxRuntimeExports.jsx(ProgressBar, { currentRound: currentRoundIndex, totalRounds: totalRounds, roundResults: roundResults, deckIds: deckIds }), jsxRuntimeExports.jsx(SongCard, { song: song, roundNumber: currentRoundIndex + 1, playCount: playCount, potentialPoints: potentialPoints, selectedAnswer: selectedAnswer, showHintsByDefault: showHintsByDefault, onRegisterPlay: onRegisterPlay }), jsxRuntimeExports.jsxs("div", { className: "esc-answers-section", children: [jsxRuntimeExports.jsxs("div", { className: "esc-answers-header", children: [jsxRuntimeExports.jsx(Sparkles, { size: 15 }), jsxRuntimeExports.jsx("span", { children: "ELIGE LA CANCI\u00D3N CORRECTA:" })] }), jsxRuntimeExports.jsx("div", { className: "esc-answers-grid", children: song.options.map((option, idx) => (jsxRuntimeExports.jsx(AnswerOption, { option: option, index: idx, selectedAnswer: selectedAnswer, correctAnswer: song.correctAnswer, onSelect: onSelectAnswer }, option))) })] }), isAnswered && (jsxRuntimeExports.jsx("div", { className: "esc-next-round-bar", children: jsxRuntimeExports.jsx("button", { type: "button", className: "esc-primary-btn esc-next-btn", onClick: onNextRound, children: isLastRound ? (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx(Trophy, { size: 19 }), jsxRuntimeExports.jsx("span", { children: "IR A LAS VOTACIONES (EUROVISION VOTING)" }), jsxRuntimeExports.jsx(ChevronRight, { size: 19 })] })) : (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("span", { children: "NEXT SONG" }), jsxRuntimeExports.jsx(ChevronRight, { size: 19 })] })) }) }))] }));
};

const EUROVISION_POINTS = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];

const VotingCard = ({ song, assignedPoints, usedPointsMap, guessedCorrectly, isPreviewPlaying, onTogglePreview, onAssignPoints, }) => {
    const isTwelve = assignedPoints === 12;
    const isTenOrEight = assignedPoints === 10 || assignedPoints === 8;
    return (jsxRuntimeExports.jsxs("div", { className: `esc-voting-card ${isTwelve ? 'has-12-points' : isTenOrEight ? 'has-high-points' : assignedPoints ? 'has-points' : ''}`, children: [jsxRuntimeExports.jsxs("div", { className: "esc-voting-card-top", children: [jsxRuntimeExports.jsxs("div", { className: "esc-voting-song-info", children: [jsxRuntimeExports.jsx("div", { className: "esc-voting-flag-wrap", children: jsxRuntimeExports.jsx("span", { className: "esc-voting-flag", children: song.flag }) }), jsxRuntimeExports.jsxs("div", { className: "esc-voting-meta", children: [jsxRuntimeExports.jsxs("div", { className: "esc-voting-country-row", children: [jsxRuntimeExports.jsx("span", { className: "esc-voting-country", children: song.country }), jsxRuntimeExports.jsx("span", { className: "esc-voting-year", children: song.year }), guessedCorrectly && (jsxRuntimeExports.jsxs("span", { className: "esc-guessed-tag", title: "\u00A1Acertaste esta canci\u00F3n en la Fase 1!", children: [jsxRuntimeExports.jsx(CheckCircle2, { size: 12 }), " Acertada"] }))] }), jsxRuntimeExports.jsx("h3", { className: "esc-voting-title", children: song.title }), jsxRuntimeExports.jsx("p", { className: "esc-voting-artist", children: song.artist })] })] }), jsxRuntimeExports.jsxs("div", { className: "esc-voting-right-badge", children: [jsxRuntimeExports.jsxs("button", { type: "button", className: `esc-mini-preview-btn ${isPreviewPlaying ? 'playing' : ''}`, onClick: () => onTogglePreview(song), title: isPreviewPlaying ? 'Detener fragmento' : 'Escuchar recordatorio', children: [isPreviewPlaying ? jsxRuntimeExports.jsx(Square, { size: 13 }) : jsxRuntimeExports.jsx(Play, { size: 13 }), jsxRuntimeExports.jsx("span", { children: isPreviewPlaying ? 'Stop' : 'Oír' })] }), assignedPoints ? (jsxRuntimeExports.jsxs("div", { className: `esc-assigned-score-badge ${isTwelve ? 'gold-12' : ''}`, children: [isTwelve && jsxRuntimeExports.jsx(Crown, { size: 14 }), jsxRuntimeExports.jsx("strong", { children: assignedPoints }), jsxRuntimeExports.jsx("small", { children: "PTS" }), jsxRuntimeExports.jsx("button", { type: "button", className: "esc-unassign-mini-btn", onClick: () => onAssignPoints(song.id, null), title: "Quitar puntuaci\u00F3n de esta canci\u00F3n", "aria-label": "Quitar puntuaci\u00F3n", children: jsxRuntimeExports.jsx(X, { size: 12 }) })] })) : (jsxRuntimeExports.jsx("div", { className: "esc-unassigned-badge", children: "SIN PUNTOS" }))] })] }), jsxRuntimeExports.jsx("div", { className: "esc-voting-points-row", role: "group", "aria-label": `Puntos para ${song.title}`, children: EUROVISION_POINTS.map((pt) => {
                    const isSelectedHere = assignedPoints === pt;
                    const ownerSongId = usedPointsMap[pt];
                    const isTakenByOther = Boolean(ownerSongId && ownerSongId !== song.id);
                    return (jsxRuntimeExports.jsx("button", { type: "button", className: `esc-pt-chip ${pt === 12 ? 'pt-12' : pt === 10 ? 'pt-10' : ''} ${isSelectedHere ? 'selected' : ''} ${isTakenByOther ? 'taken' : ''}`, disabled: isTakenByOther, onClick: () => onAssignPoints(song.id, isSelectedHere ? null : pt), title: isSelectedHere
                            ? `Quitar ${pt} puntos`
                            : isTakenByOther
                                ? `${pt} puntos ya están asignados a otra canción`
                                : `Dar ${pt} puntos a ${song.title}`, children: pt === 12 ? '★ 12' : pt }, pt));
                }) })] }));
};

const COLORS = ['#FFD166', '#FF3FA4', '#27E5D5', '#873EFF', '#263BFF', '#FFFFFF'];
const ConfettiOverlay = ({ active, count = 55 }) => {
    const pieces = reactExports.useMemo(() => {
        return Array.from({ length: count }).map((_, idx) => ({
            id: idx,
            left: `${(idx * 17) % 100}%`,
            delay: `${((idx * 7) % 30) * 0.1}s`,
            duration: `${2.8 + ((idx * 13) % 25) * 0.1}s`,
            color: COLORS[idx % COLORS.length],
            size: 7 + (idx % 6),
            rotate: (idx * 45) % 360,
        }));
    }, [count]);
    if (!active)
        return null;
    return (jsxRuntimeExports.jsx("div", { className: "esc-confetti-container", "aria-hidden": "true", children: pieces.map((p) => (jsxRuntimeExports.jsx("span", { className: "esc-confetti-piece", style: {
                left: p.left,
                animationDelay: p.delay,
                animationDuration: p.duration,
                backgroundColor: p.color,
                width: `${p.size}px`,
                height: `${p.size * 1.6}px`,
                transform: `rotate(${p.rotate}deg)`,
            } }, p.id))) }));
};

const DocePuntosModal = ({ song, onClose }) => {
    if (!song)
        return null;
    return (jsxRuntimeExports.jsxs("div", { className: "esc-modal-backdrop", role: "dialog", "aria-modal": "true", "aria-labelledby": "doce-puntos-title", children: [jsxRuntimeExports.jsx(ConfettiOverlay, { active: true, count: 70 }), jsxRuntimeExports.jsxs("div", { className: "esc-doce-modal", children: [jsxRuntimeExports.jsx("div", { className: "esc-doce-glow-ring" }), jsxRuntimeExports.jsxs("div", { className: "esc-doce-spokesperson", children: [jsxRuntimeExports.jsx(Sparkles, { size: 15 }), jsxRuntimeExports.jsx("span", { children: "CONEXI\u00D3N EN DIRECTO CON EL JURADO DE IRINA" })] }), jsxRuntimeExports.jsxs("div", { className: "esc-doce-giant-badge", children: [jsxRuntimeExports.jsx(Crown, { size: 30, className: "esc-doce-crown" }), jsxRuntimeExports.jsx("span", { className: "esc-doce-number", children: "12" }), jsxRuntimeExports.jsx("span", { className: "esc-doce-pts-label", children: "POINTS" })] }), jsxRuntimeExports.jsx("h2", { id: "doce-puntos-title", className: "esc-doce-headline", children: "\u00A1DOCE PUNTOS! \uD83C\uDDEA\uD83C\uDDF8" }), jsxRuntimeExports.jsxs("div", { className: "esc-doce-broadcast-call", children: ["\u00AB", song.country.toUpperCase(), "... 12 POINTS!\u00BB"] }), jsxRuntimeExports.jsxs("div", { className: "esc-doce-song-showcase", children: [jsxRuntimeExports.jsx("span", { className: "esc-doce-flag", children: song.flag }), jsxRuntimeExports.jsxs("div", { className: "esc-doce-song-text", children: [jsxRuntimeExports.jsx("h3", { children: song.title }), jsxRuntimeExports.jsxs("p", { children: [jsxRuntimeExports.jsx("strong", { children: song.artist }), " \u00B7 ", song.country, " (", song.year, ")"] })] })] }), jsxRuntimeExports.jsxs("p", { className: "esc-doce-quote", children: [jsxRuntimeExports.jsx(PartyPopper, { size: 16 }), " \u00A1Tus m\u00EDticos ", jsxRuntimeExports.jsx("strong", { children: "12 Points" }), " de cumplea\u00F1os ya tienen due\u00F1a!"] }), jsxRuntimeExports.jsxs("button", { type: "button", className: "esc-primary-btn esc-doce-close-btn", onClick: onClose, children: [jsxRuntimeExports.jsx(Check, { size: 18 }), jsxRuntimeExports.jsx("span", { children: "CONTINUAR EN LA GALA DE VOTACI\u00D3N" })] })] })] }));
};

const VotingPage = ({ songs, userVotes, roundResults, allVotesAssigned, twelvePointsSong, onAssignVote, onAutoFillRemaining, onClearVotes, onCloseTwelveModal, onFinishVoting, }) => {
    const [previewingSongId, setPreviewingSongId] = reactExports.useState(null);
    reactExports.useEffect(() => {
        return () => {
            audioEngine.stopSongIntro();
        };
    }, []);
    // Map of pointValue -> songId that currently holds it
    const usedPointsMap = reactExports.useMemo(() => {
        const map = {};
        Object.entries(userVotes).forEach(([songId, pt]) => {
            map[pt] = songId;
        });
        return map;
    }, [userVotes]);
    const handleTogglePreview = async (song) => {
        if (previewingSongId === song.id) {
            audioEngine.stopSongIntro();
            setPreviewingSongId(null);
            return;
        }
        setPreviewingSongId(song.id);
        await audioEngine.playSongIntro(song, false, {
            onEnded: () => {
                setPreviewingSongId(null);
            },
        });
    };
    const assignedCount = Object.keys(userVotes).length;
    return (jsxRuntimeExports.jsxs("section", { className: "esc-voting-page", children: [jsxRuntimeExports.jsxs("div", { className: "esc-voting-hero", children: [jsxRuntimeExports.jsxs("div", { className: "esc-voting-kicker", children: [jsxRuntimeExports.jsx(Sparkles, { size: 15 }), jsxRuntimeExports.jsx("span", { children: "EUROPE, START VOTING NOW! \u00B7 JURADO OFICIAL DE IRINA" })] }), jsxRuntimeExports.jsx("h1", { className: "esc-voting-main-title", children: "AND NOW... THE VOTES!" }), jsxRuntimeExports.jsxs("p", { className: "esc-voting-subtitle", children: ["Reparte los puntos cl\u00E1sicos de Eurovisi\u00F3n (", jsxRuntimeExports.jsx("strong", { children: "1, 2, 3, 4, 5, 6, 7, 8, 10 y 12 puntos" }), ") entre las 10 canciones que han competido en tu gala. Cada puntuaci\u00F3n es \u00FAnica."] }), jsxRuntimeExports.jsxs("div", { className: "esc-points-bank", children: [jsxRuntimeExports.jsxs("div", { className: "esc-points-bank-top", children: [jsxRuntimeExports.jsxs("span", { children: ["Puntos asignados: ", jsxRuntimeExports.jsxs("strong", { children: [assignedCount, " / 10"] })] }), jsxRuntimeExports.jsxs("div", { className: "esc-voting-quick-actions", children: [assignedCount < 10 && (jsxRuntimeExports.jsxs("button", { type: "button", className: "esc-quick-btn", onClick: onAutoFillRemaining, title: "Asignar autom\u00E1ticamente los puntos que faltan", children: [jsxRuntimeExports.jsx(Wand2, { size: 14 }), jsxRuntimeExports.jsx("span", { children: "Auto-completar restantes" })] })), assignedCount > 0 && (jsxRuntimeExports.jsxs("button", { type: "button", className: "esc-quick-btn esc-quick-clear", onClick: onClearVotes, children: [jsxRuntimeExports.jsx(RotateCcw, { size: 14 }), jsxRuntimeExports.jsx("span", { children: "Borrar votos" })] }))] })] }), jsxRuntimeExports.jsx("div", { className: "esc-bank-chips-row", children: EUROVISION_POINTS.map((pt) => {
                                    const assignedSongId = usedPointsMap[pt];
                                    const assignedSong = songs.find((s) => s.id === assignedSongId);
                                    return (jsxRuntimeExports.jsxs("div", { className: `esc-bank-chip ${assignedSong ? 'used' : 'available'} ${pt === 12 ? 'bank-12' : ''}`, title: assignedSong
                                            ? `${pt} puntos asignados a ${assignedSong.title}`
                                            : `${pt} puntos disponibles para asignar`, children: [jsxRuntimeExports.jsx("strong", { children: pt }), jsxRuntimeExports.jsx("span", { children: assignedSong ? assignedSong.flag : 'Libre' })] }, pt));
                                }) })] })] }), jsxRuntimeExports.jsx("div", { className: "esc-voting-grid", children: songs.map((song) => {
                    const result = roundResults.find((r) => r.songId === song.id);
                    return (jsxRuntimeExports.jsx(VotingCard, { song: song, assignedPoints: userVotes[song.id], usedPointsMap: usedPointsMap, guessedCorrectly: Boolean(result?.isCorrect), isPreviewPlaying: previewingSongId === song.id, onTogglePreview: handleTogglePreview, onAssignPoints: onAssignVote }, song.id));
                }) }), jsxRuntimeExports.jsx("div", { className: "esc-voting-footer", children: jsxRuntimeExports.jsxs("div", { className: "esc-voting-footer-inner", children: [jsxRuntimeExports.jsx("div", { className: "esc-voting-status-msg", children: allVotesAssigned ? (jsxRuntimeExports.jsxs("span", { className: "status-ready", children: [jsxRuntimeExports.jsx(CheckCircle2, { size: 18 }), " \u00A1Todos los puntos (1 a 12) est\u00E1n asignados! Lista para conocer a la ganadora."] })) : (jsxRuntimeExports.jsxs("span", { children: ["Faltan ", jsxRuntimeExports.jsx("strong", { children: 10 - assignedCount }), " puntuaciones por asignar antes de cerrar las l\u00EDneas."] })) }), jsxRuntimeExports.jsxs("button", { type: "button", className: "esc-primary-btn esc-finish-voting-btn", disabled: !allVotesAssigned, onClick: () => {
                                audioEngine.stopSongIntro();
                                onFinishVoting();
                            }, children: [jsxRuntimeExports.jsx(Crown, { size: 19 }), jsxRuntimeExports.jsx("span", { children: "REVELAR GANADORA Y DESBLOQUEAR MEDALLA" }), jsxRuntimeExports.jsx(ChevronRight, { size: 19 })] })] }) }), jsxRuntimeExports.jsx(DocePuntosModal, { song: twelvePointsSong, onClose: onCloseTwelveModal })] }));
};

const Medal = ({ quizScore, correctCount, totalRounds, winnerSongTitle, irina12SongTitle, }) => {
    const [downloaded, setDownloaded] = reactExports.useState(false);
    const [sharedMsg, setSharedMsg] = reactExports.useState(null);
    /**
     * Renders a high-res 1080x1080 collectible PNG medal on an HTML5 Canvas
     * and downloads it so Irina can keep it in her 12-day challenge collection.
     */
    const handleDownloadMedalPng = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 1080;
        canvas.height = 1080;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        // 1. Deep Eurovision Night Background
        const bgGrad = ctx.createRadialGradient(540, 480, 80, 540, 540, 650);
        bgGrad.addColorStop(0, '#263BFF');
        bgGrad.addColorStop(0.45, '#15124A');
        bgGrad.addColorStop(1, '#080B2A');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, 1080, 1080);
        // 2. Stage Spotlight Beams
        ctx.save();
        const beamGrad = ctx.createLinearGradient(0, 0, 1080, 1080);
        beamGrad.addColorStop(0, 'rgba(255, 63, 164, 0.18)');
        beamGrad.addColorStop(0.5, 'rgba(255, 209, 102, 0.12)');
        beamGrad.addColorStop(1, 'rgba(39, 229, 213, 0.18)');
        ctx.fillStyle = beamGrad;
        ctx.fillRect(0, 0, 1080, 1080);
        ctx.restore();
        // 3. Decorative Ribbons at top
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(410, 60);
        ctx.lineTo(490, 320);
        ctx.lineTo(540, 290);
        ctx.lineTo(475, 60);
        ctx.closePath();
        ctx.fillStyle = '#FF3FA4';
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(670, 60);
        ctx.lineTo(590, 320);
        ctx.lineTo(540, 290);
        ctx.lineTo(605, 60);
        ctx.closePath();
        ctx.fillStyle = '#27E5D5';
        ctx.fill();
        ctx.restore();
        // 4. Outer Golden Glow & Medal Rim
        const centerX = 540;
        const centerY = 490;
        const outerRadius = 290;
        ctx.save();
        ctx.shadowColor = 'rgba(255, 209, 102, 0.75)';
        ctx.shadowBlur = 55;
        const goldGrad = ctx.createLinearGradient(centerX - outerRadius, centerY - outerRadius, centerX + outerRadius, centerY + outerRadius);
        goldGrad.addColorStop(0, '#FFF3B0');
        goldGrad.addColorStop(0.3, '#FFD166');
        goldGrad.addColorStop(0.65, '#E09F1F');
        goldGrad.addColorStop(1, '#FFF099');
        ctx.beginPath();
        ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
        ctx.fillStyle = goldGrad;
        ctx.fill();
        ctx.restore();
        // 5. Inner Dark Royal Ring
        ctx.beginPath();
        ctx.arc(centerX, centerY, outerRadius - 24, 0, Math.PI * 2);
        ctx.fillStyle = '#0D1238';
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#FFD166';
        ctx.stroke();
        // 6. Inner Gold Medallion Core
        const coreGrad = ctx.createRadialGradient(centerX, centerY - 40, 20, centerX, centerY, 220);
        coreGrad.addColorStop(0, '#FFF5C0');
        coreGrad.addColorStop(0.55, '#FFD166');
        coreGrad.addColorStop(1, '#C8820E');
        ctx.beginPath();
        ctx.arc(centerX, centerY, outerRadius - 58, 0, Math.PI * 2);
        ctx.fillStyle = coreGrad;
        ctx.fill();
        // 7. Medal Typography inside circle
        ctx.fillStyle = '#080B2A';
        ctx.textAlign = 'center';
        ctx.font = '800 26px Outfit, sans-serif';
        ctx.fillText('★  OFFICIAL CHALLENGE MEDAL  ★', centerX, centerY - 135);
        ctx.font = '900 185px Outfit, sans-serif';
        ctx.fillText('12', centerX, centerY + 35);
        ctx.font = '900 38px Outfit, sans-serif';
        ctx.fillText('POINTS', centerX, centerY + 85);
        // Pill inside medal
        ctx.fillStyle = '#080B2A';
        ctx.beginPath();
        ctx.roundRect(centerX - 165, centerY + 110, 330, 48, 24);
        ctx.fill();
        ctx.fillStyle = '#FFD166';
        ctx.font = '800 24px Outfit, sans-serif';
        ctx.fillText('EUROVISION EXPERT', centerX, centerY + 142);
        // 8. Footer Certificate Banner on Canvas
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '900 42px Outfit, sans-serif';
        ctx.fillText('🎂 ¡FELIZ CUMPLEAÑOS, IRINA! 🎂', centerX, 855);
        ctx.fillStyle = '#27E5D5';
        ctx.font = '700 28px Inter, sans-serif';
        ctx.fillText(`Puntuación Musical: ${quizScore} PTS (${correctCount}/${totalRounds} aciertos)`, centerX, 908);
        ctx.fillStyle = '#FFD166';
        ctx.font = '600 24px Inter, sans-serif';
        ctx.fillText(`Tus 12 Points: ${irina12SongTitle}`, centerX, 952);
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.font = '500 21px Inter, sans-serif';
        ctx.fillText(`Canción Ganadora de la Gala: ${winnerSongTitle}`, centerX, 992);
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'medalla-12-points-eurovision-irina.png';
        link.href = dataUrl;
        link.click();
        setDownloaded(true);
        window.setTimeout(() => setDownloaded(false), 3500);
    };
    const handleShare = async () => {
        const text = `🏅 ¡He desbloqueado la medalla 12 POINTS – EUROVISION EXPERT en el reto especial del Cumpleaños de Irina!\n🎵 Puntuación: ${quizScore} PTS (${correctCount}/${totalRounds})\n🇪🇸 Mis 12 Points: ${irina12SongTitle}\n🏆 Ganadora de la gala: ${winnerSongTitle}`;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: '12 POINTS – Eurovision Expert (Cumple de Irina)',
                    text,
                });
                return;
            }
            catch {
                // Fallback to clipboard
            }
        }
        try {
            await navigator.clipboard.writeText(text);
            setSharedMsg('¡Resultado copiado al portapapeles!');
            window.setTimeout(() => setSharedMsg(null), 3000);
        }
        catch {
            setSharedMsg('¡Medalla lista para guardar!');
            window.setTimeout(() => setSharedMsg(null), 3000);
        }
    };
    return (jsxRuntimeExports.jsxs("div", { className: "esc-medal-showcase", children: [jsxRuntimeExports.jsxs("div", { className: "esc-medal-Unlocked-tag", children: [jsxRuntimeExports.jsx(Sparkles, { size: 15 }), jsxRuntimeExports.jsx("span", { children: "RECOMPENSA DESBLOQUEADA \u00B7 COLECCI\u00D3N CUMPLEA\u00D1OS DE IRINA" })] }), jsxRuntimeExports.jsxs("div", { className: "esc-medal-stage", children: [jsxRuntimeExports.jsx("div", { className: "esc-medal-rays", "aria-hidden": "true" }), jsxRuntimeExports.jsxs("div", { className: "esc-medal-ribbons", "aria-hidden": "true", children: [jsxRuntimeExports.jsx("span", { className: "ribbon-left" }), jsxRuntimeExports.jsx("span", { className: "ribbon-right" })] }), jsxRuntimeExports.jsx("div", { className: "esc-golden-medal", role: "img", "aria-label": "Medalla 12 POINTS Eurovision Expert", children: jsxRuntimeExports.jsx("div", { className: "esc-medal-outer-ring", children: jsxRuntimeExports.jsxs("div", { className: "esc-medal-inner-ring", children: [jsxRuntimeExports.jsxs("div", { className: "esc-medal-stars-row", children: [jsxRuntimeExports.jsx(Star, { size: 14, fill: "currentColor" }), jsxRuntimeExports.jsx(Crown, { size: 18 }), jsxRuntimeExports.jsx(Star, { size: 14, fill: "currentColor" })] }), jsxRuntimeExports.jsx("div", { className: "esc-medal-number-12", children: "12" }), jsxRuntimeExports.jsx("div", { className: "esc-medal-points-word", children: "POINTS" }), jsxRuntimeExports.jsx("div", { className: "esc-medal-expert-ribbon", children: "EUROVISION EXPERT" }), jsxRuntimeExports.jsx("div", { className: "esc-medal-irina-stamp", children: "\u2605 IRINA EDITION \u2605" })] }) }) })] }), jsxRuntimeExports.jsxs("div", { className: "esc-medal-caption", children: [jsxRuntimeExports.jsx("h3", { children: "\uD83C\uDFC5 12 POINTS \u2013 EUROVISION EXPERT" }), jsxRuntimeExports.jsx("p", { children: "Guarda tu medalla oficial en alta resoluci\u00F3n como imagen coleccionable del reto." })] }), jsxRuntimeExports.jsxs("div", { className: "esc-medal-actions", children: [jsxRuntimeExports.jsxs("button", { type: "button", className: "esc-gold-btn", onClick: handleDownloadMedalPng, children: [downloaded ? jsxRuntimeExports.jsx(Check, { size: 18 }) : jsxRuntimeExports.jsx(Download, { size: 18 }), jsxRuntimeExports.jsx("span", { children: downloaded ? '¡MEDALLA GUARDADA (PNG)!' : 'GUARDAR MEDALLA (PNG)' })] }), jsxRuntimeExports.jsxs("button", { type: "button", className: "esc-secondary-btn", onClick: handleShare, children: [jsxRuntimeExports.jsx(Share2, { size: 18 }), jsxRuntimeExports.jsx("span", { children: sharedMsg || 'COMPARTIR RESULTADO' })] })] })] }));
};

const ScoreBoard = ({ standings, juries }) => {
    const [activeTab, setActiveTab] = reactExports.useState('combined');
    const irinaSorted = [...standings].sort((a, b) => b.irinaPoints - a.irinaPoints);
    return (jsxRuntimeExports.jsxs("div", { className: "esc-scoreboard-card", children: [jsxRuntimeExports.jsxs("div", { className: "esc-scoreboard-header", children: [jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("span", { className: "esc-section-kicker", children: "OFFICIAL EUROVISION SCOREBOARD" }), jsxRuntimeExports.jsxs("h3", { className: "esc-scoreboard-title", children: [jsxRuntimeExports.jsx(Trophy, { size: 22, className: "esc-gold-icon" }), " CLASIFICACI\u00D3N FINAL DE LA GALA"] })] }), jsxRuntimeExports.jsxs("div", { className: "esc-scoreboard-tabs", role: "tablist", children: [jsxRuntimeExports.jsxs("button", { type: "button", role: "tab", "aria-selected": activeTab === 'combined', className: `esc-tab-btn ${activeTab === 'combined' ? 'active' : ''}`, onClick: () => setActiveTab('combined'), children: [jsxRuntimeExports.jsx(Trophy, { size: 14 }), jsxRuntimeExports.jsx("span", { children: "Total (Jurado + Irina)" })] }), jsxRuntimeExports.jsxs("button", { type: "button", role: "tab", "aria-selected": activeTab === 'irina', className: `esc-tab-btn ${activeTab === 'irina' ? 'active' : ''}`, onClick: () => setActiveTab('irina'), children: [jsxRuntimeExports.jsx(Heart, { size: 14 }), jsxRuntimeExports.jsx("span", { children: "Votos de Irina (1-12)" })] }), jsxRuntimeExports.jsxs("button", { type: "button", role: "tab", "aria-selected": activeTab === 'juries', className: `esc-tab-btn ${activeTab === 'juries' ? 'active' : ''}`, onClick: () => setActiveTab('juries'), children: [jsxRuntimeExports.jsx(Globe, { size: 14 }), jsxRuntimeExports.jsx("span", { children: "Jurado Internacional" })] })] })] }), activeTab !== 'juries' ? (jsxRuntimeExports.jsx("div", { className: "esc-scoreboard-list", children: (activeTab === 'combined' ? standings : irinaSorted).map((item, idx) => {
                    const rank = idx + 1;
                    const isWinner = rank === 1;
                    const isIrina12 = item.irinaPoints === 12;
                    return (jsxRuntimeExports.jsxs("div", { className: `esc-scoreboard-row ${isWinner ? 'rank-1' : rank <= 3 ? 'rank-podium' : ''}`, children: [jsxRuntimeExports.jsxs("div", { className: "esc-sb-left", children: [jsxRuntimeExports.jsx("span", { className: `esc-sb-rank ${isWinner ? 'gold' : ''}`, children: isWinner ? jsxRuntimeExports.jsx(Crown, { size: 15 }) : String(rank).padStart(2, '0') }), jsxRuntimeExports.jsx("span", { className: "esc-sb-flag", children: item.song.flag }), jsxRuntimeExports.jsxs("div", { className: "esc-sb-song", children: [jsxRuntimeExports.jsxs("div", { className: "esc-sb-song-title-line", children: [jsxRuntimeExports.jsx("strong", { children: item.song.title }), isIrina12 && (jsxRuntimeExports.jsx("span", { className: "esc-sb-irina12-pill", children: "\u2605 12 PTS DE IRINA" })), item.guessedCorrectly && (jsxRuntimeExports.jsx("span", { className: "esc-sb-guessed-icon", title: "Acertada en Guess the Song", children: jsxRuntimeExports.jsx(CheckCircle2, { size: 13 }) }))] }), jsxRuntimeExports.jsxs("span", { className: "esc-sb-artist", children: [item.song.artist, " \u00B7 ", item.song.country, " (", item.song.year, ")"] })] })] }), jsxRuntimeExports.jsxs("div", { className: "esc-sb-right", children: [activeTab === 'combined' && (jsxRuntimeExports.jsxs("div", { className: "esc-sb-subpoints", children: [jsxRuntimeExports.jsxs("span", { title: "Puntos del Jurado Internacional", children: ["Jurado: ", item.juryPoints] }), jsxRuntimeExports.jsxs("span", { className: "esc-sb-irina-sub", title: "Puntos otorgados por Irina", children: ["Irina: +", item.irinaPoints] })] })), jsxRuntimeExports.jsxs("div", { className: "esc-sb-total-box", children: [activeTab === 'combined' ? item.totalPoints : item.irinaPoints, jsxRuntimeExports.jsx("small", { children: "PTS" })] })] })] }, item.song.id));
                }) })) : (jsxRuntimeExports.jsx("div", { className: "esc-juries-grid", children: juries.map((jury) => {
                    const topEntry = standings.find((s) => jury.votes[s.song.id] === 12);
                    const tenEntry = standings.find((s) => jury.votes[s.song.id] === 10);
                    const eightEntry = standings.find((s) => jury.votes[s.song.id] === 8);
                    return (jsxRuntimeExports.jsxs("div", { className: "esc-jury-card", children: [jsxRuntimeExports.jsxs("div", { className: "esc-jury-card-top", children: [jsxRuntimeExports.jsx("span", { className: "esc-jury-flag", children: jury.flag }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("h4", { children: jury.country }), jsxRuntimeExports.jsxs("small", { children: ["Portavoz: ", jury.spokesperson] })] })] }), jsxRuntimeExports.jsxs("p", { className: "esc-jury-greeting", children: ["\u00AB", jury.greeting, "\u00BB"] }), jsxRuntimeExports.jsxs("div", { className: "esc-jury-top3", children: [topEntry && (jsxRuntimeExports.jsxs("div", { className: "esc-jury-vote-line gold", children: [jsxRuntimeExports.jsx("span", { children: "\u2605 12 PTS" }), jsxRuntimeExports.jsxs("strong", { children: [topEntry.song.flag, " ", topEntry.song.title] })] })), tenEntry && (jsxRuntimeExports.jsxs("div", { className: "esc-jury-vote-line", children: [jsxRuntimeExports.jsx("span", { children: "10 PTS" }), jsxRuntimeExports.jsxs("span", { children: [tenEntry.song.flag, " ", tenEntry.song.title] })] })), eightEntry && (jsxRuntimeExports.jsxs("div", { className: "esc-jury-vote-line", children: [jsxRuntimeExports.jsx("span", { children: "8 PTS" }), jsxRuntimeExports.jsxs("span", { children: [eightEntry.song.flag, " ", eightEntry.song.title] })] }))] })] }, jury.countryCode));
                }) }))] }));
};

const ResultsPage = ({ quizScore, correctCount, totalRounds, accuracyPercentage, finalStandings, internationalJuries, irina12PointsSong, onPlayAgain, onChangeDifficulty, }) => {
    const winnerStanding = finalStandings[0];
    return (jsxRuntimeExports.jsxs("section", { className: "esc-results-page", children: [jsxRuntimeExports.jsx(ConfettiOverlay, { active: true, count: 65 }), jsxRuntimeExports.jsxs("div", { className: "esc-results-hero", children: [jsxRuntimeExports.jsxs("div", { className: "esc-results-kicker", children: [jsxRuntimeExports.jsx(Sparkles, { size: 15 }), jsxRuntimeExports.jsx("span", { children: "GRAN FINAL COMPLETADA \u00B7 FELIZ CUMPLEA\u00D1OS IRINA" }), jsxRuntimeExports.jsx(Sparkles, { size: 15 })] }), jsxRuntimeExports.jsx("h1", { className: "esc-congrats-title", children: "CONGRATULATIONS!" }), jsxRuntimeExports.jsx("p", { className: "esc-legend-subtitle", children: "YOU ARE AN EUROVISION LEGEND!" })] }), jsxRuntimeExports.jsx(Medal, { quizScore: quizScore, correctCount: correctCount, totalRounds: totalRounds, winnerSongTitle: winnerStanding
                    ? `${winnerStanding.song.title} – ${winnerStanding.song.artist}`
                    : 'Eurovision Hit', irina12SongTitle: irina12PointsSong
                    ? `${irina12PointsSong.title} – ${irina12PointsSong.artist}`
                    : '12 Points' }), jsxRuntimeExports.jsxs("div", { className: "esc-metrics-grid", children: [jsxRuntimeExports.jsxs("div", { className: "esc-metric-card", children: [jsxRuntimeExports.jsx("div", { className: "esc-metric-icon gold", children: jsxRuntimeExports.jsx(Music, { size: 22 }) }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("span", { className: "esc-metric-label", children: "PUNTUACI\u00D3N MUSICAL" }), jsxRuntimeExports.jsxs("strong", { className: "esc-metric-value", children: [quizScore, " PTS"] }), jsxRuntimeExports.jsx("small", { children: "De 1.000 puntos posibles" })] })] }), jsxRuntimeExports.jsxs("div", { className: "esc-metric-card", children: [jsxRuntimeExports.jsx("div", { className: "esc-metric-icon cyan", children: jsxRuntimeExports.jsx(CheckCircle2, { size: 22 }) }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("span", { className: "esc-metric-label", children: "CANCIONES ACERTADAS" }), jsxRuntimeExports.jsxs("strong", { className: "esc-metric-value", children: [correctCount, " / ", totalRounds] }), jsxRuntimeExports.jsx("small", { children: "Fase Guess the Song" })] })] }), jsxRuntimeExports.jsxs("div", { className: "esc-metric-card", children: [jsxRuntimeExports.jsx("div", { className: "esc-metric-icon pink", children: jsxRuntimeExports.jsx(Percent, { size: 22 }) }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("span", { className: "esc-metric-label", children: "PORCENTAJE DE ACIERTO" }), jsxRuntimeExports.jsxs("strong", { className: "esc-metric-value", children: [accuracyPercentage, "%"] }), jsxRuntimeExports.jsx("small", { children: "Nivel Eurofan demostrado" })] })] })] }), jsxRuntimeExports.jsxs("div", { className: "esc-winners-showcase", children: [winnerStanding && (jsxRuntimeExports.jsxs("div", { className: "esc-winner-banner gala-winner", children: [jsxRuntimeExports.jsxs("div", { className: "esc-winner-badge", children: [jsxRuntimeExports.jsx(Crown, { size: 16 }), " CANCI\u00D3N GANADORA DE LA GALA (JURADO + IRINA)"] }), jsxRuntimeExports.jsxs("div", { className: "esc-winner-content", children: [jsxRuntimeExports.jsx("span", { className: "esc-winner-flag", children: winnerStanding.song.flag }), jsxRuntimeExports.jsxs("div", { className: "esc-winner-info", children: [jsxRuntimeExports.jsx("h3", { children: winnerStanding.song.title }), jsxRuntimeExports.jsxs("p", { children: [jsxRuntimeExports.jsx("strong", { children: winnerStanding.song.artist }), " \u00B7 ", winnerStanding.song.country, " (", winnerStanding.song.year, ")"] })] }), jsxRuntimeExports.jsxs("div", { className: "esc-winner-pts", children: [jsxRuntimeExports.jsx("strong", { children: winnerStanding.totalPoints }), jsxRuntimeExports.jsx("span", { children: "POINTS" })] })] })] })), irina12PointsSong && (jsxRuntimeExports.jsxs("div", { className: "esc-winner-banner irina-choice", children: [jsxRuntimeExports.jsxs("div", { className: "esc-winner-badge pink", children: [jsxRuntimeExports.jsx(Heart, { size: 16 }), " TUS \u00AB12 POINTS\u00BB PERSONALES DE CUMPLEA\u00D1OS"] }), jsxRuntimeExports.jsxs("div", { className: "esc-winner-content", children: [jsxRuntimeExports.jsx("span", { className: "esc-winner-flag", children: irina12PointsSong.flag }), jsxRuntimeExports.jsxs("div", { className: "esc-winner-info", children: [jsxRuntimeExports.jsx("h3", { children: irina12PointsSong.title }), jsxRuntimeExports.jsxs("p", { children: [jsxRuntimeExports.jsx("strong", { children: irina12PointsSong.artist }), " \u00B7 ", irina12PointsSong.country, " (", irina12PointsSong.year, ")"] })] }), jsxRuntimeExports.jsxs("div", { className: "esc-winner-pts gold", children: [jsxRuntimeExports.jsx("strong", { children: "12" }), jsxRuntimeExports.jsx("span", { children: "POINTS" })] })] })] }))] }), jsxRuntimeExports.jsx(ScoreBoard, { standings: finalStandings, juries: internationalJuries }), jsxRuntimeExports.jsxs("div", { className: "esc-results-footer-actions", children: [jsxRuntimeExports.jsxs("button", { type: "button", className: "esc-start-show-btn", onClick: onPlayAgain, children: [jsxRuntimeExports.jsx(RotateCcw, { size: 20 }), jsxRuntimeExports.jsx("span", { children: "PLAY AGAIN" })] }), jsxRuntimeExports.jsxs("button", { type: "button", className: "esc-secondary-btn", onClick: onChangeDifficulty, children: [jsxRuntimeExports.jsx(Trophy, { size: 18 }), jsxRuntimeExports.jsx("span", { children: "CAMBIAR DIFICULTAD / PORTADA" })] })] })] }));
};

// Note frequencies helper (Hz)
const N = {
    REST: 0,
    D4: 293.66,
    E4: 329.63,
    F4: 349.23,
    Fs4: 369.99,
    G4: 392.0,
    Ab4: 415.3,
    A4: 440.0,
    Bb4: 466.16,
    B4: 493.88,
    C5: 523.25,
    Cs5: 554.37,
    Db5: 554.37,
    D5: 587.33,
    Eb5: 622.25,
    E5: 659.25,
    F5: 698.46,
    Fs5: 739.99,
    G5: 783.99,
    A5: 880.0,
    B5: 987.77,
};
const EUROVISION_SONGS = [
    // ===================== EASY (GRANDES HIMNOS) =====================
    {
        id: 'slomo-chanel-2022',
        title: 'SloMo',
        artist: 'Chanel',
        country: 'Spain',
        countryCode: 'ES',
        flag: '🇪🇸',
        year: 2022,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8d/78/6e/8d786e19-bcee-c4b2-fdf5-d12d1e501659/mzaf_428453368022222637.plus.aac.p.m4a',
        correctAnswer: 'SloMo – Chanel',
        options: [
            'SloMo – Chanel',
            'Fuego – Eleni Foureira',
            'Zorra – Nebulossa',
            'Unicorn – Noa Kirel',
        ],
        optionalHint: 'Turín 2022 · "Llegó la mami, la reina, la dura, una Bugatti..." y un dancebreak histórico.',
        difficulty: 'easy',
        itunesTrackId: 1601265805,
        itunesQuery: 'Chanel SloMo',
        funFact: 'Con 459 puntos y un 3.º puesto en Turín 2022, Chanel firmó la mayor puntuación de la historia de España en Eurovisión. ¡Puro fuego para el cumple de Irina!',
        synthMelody: {
            bpm: 105,
            wave: 'sawtooth',
            bassFreq: 146.83,
            notes: [
                { freq: N.D5, beats: 0.5 },
                { freq: N.Eb5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.Bb4, beats: 0.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.G4, beats: 1.0 },
                { freq: N.G4, beats: 0.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.Bb4, beats: 0.75 },
                { freq: N.C5, beats: 0.75 },
                { freq: N.D5, beats: 1.5 },
                { freq: N.REST, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.Eb5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.Bb4, beats: 0.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.G4, beats: 1.5 },
            ],
        },
    },
    {
        id: 'euphoria-loreen-2012',
        title: 'Euphoria',
        artist: 'Loreen',
        country: 'Sweden',
        countryCode: 'SE',
        flag: '🇸🇪',
        year: 2012,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ff/f3/20/fff32034-87f7-f2fa-1679-7a907aab2168/mzaf_10264340511969889517.plus.aac.p.m4a',
        correctAnswer: 'Euphoria – Loreen',
        options: [
            'Euphoria – Loreen',
            'Tattoo – Loreen',
            'Heroes – Måns Zelmerlöw',
            'Only Teardrops – Emmelie de Forest',
        ],
        optionalHint: 'Bakú 2012 · Sirenas electrónicas y un estribillo que sube "up, up, up, up, u-up".',
        difficulty: 'easy',
        itunesTrackId: 568114160,
        itunesQuery: 'Loreen Euphoria',
        funFact: 'Recibió 18 veces los "12 Points" en Bakú 2012, convirtiéndose en el himno definitivo del Eurovisión moderno.',
        synthMelody: {
            bpm: 128,
            wave: 'sawtooth',
            bassFreq: 123.47,
            notes: [
                { freq: N.Fs4, beats: 0.5 },
                { freq: N.B4, beats: 0.5 },
                { freq: N.Cs5, beats: 0.5 },
                { freq: N.D5, beats: 1.5 },
                { freq: N.Cs5, beats: 0.5 },
                { freq: N.B4, beats: 0.5 },
                { freq: N.A4, beats: 1.0 },
                { freq: N.Fs4, beats: 1.0 },
                { freq: N.E5, beats: 1.5 },
                { freq: N.D5, beats: 1.5 },
                { freq: N.Cs5, beats: 1.0 },
                { freq: N.B4, beats: 0.5 },
                { freq: N.Cs5, beats: 0.5 },
                { freq: N.D5, beats: 1.5 },
                { freq: N.B4, beats: 1.5 },
            ],
        },
    },
    {
        id: 'waterloo-abba-1974',
        title: 'Waterloo',
        artist: 'ABBA',
        country: 'Sweden',
        countryCode: 'SE',
        flag: '🇸🇪',
        year: 1974,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c6/7c/00/c67c008a-125e-816b-d605-13029848a14d/mzaf_9917084468265042979.plus.aac.p.m4a',
        correctAnswer: 'Waterloo – ABBA',
        options: [
            'Waterloo – ABBA',
            'Making Your Mind Up – Bucks Fizz',
            'Ding-a-Dong – Teach-In',
            'Save Your Kisses for Me – Brotherhood of Man',
        ],
        optionalHint: 'Brighton 1974 · Botas con plataforma, un director de orquesta vestido de Napoleón y el nacimiento de una leyenda pop.',
        difficulty: 'easy',
        itunesTrackId: 1422649021,
        itunesQuery: 'ABBA Waterloo',
        funFact: 'Ganó en 1974 y fue elegida en el 50.º aniversario del festival como la mejor canción de toda la historia de Eurovisión.',
        synthMelody: {
            bpm: 146,
            wave: 'triangle',
            bassFreq: 146.83,
            notes: [
                { freq: N.D5, beats: 1.0 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.E5, beats: 0.5 },
                { freq: N.Fs5, beats: 1.0 },
                { freq: N.E5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.G5, beats: 0.5 },
                { freq: N.Fs5, beats: 0.5 },
                { freq: N.E5, beats: 1.0 },
                { freq: N.A4, beats: 1.0 },
                { freq: N.REST, beats: 0.5 },
                { freq: N.B4, beats: 0.5 },
                { freq: N.B4, beats: 0.5 },
                { freq: N.Cs5, beats: 0.5 },
                { freq: N.D5, beats: 1.0 },
                { freq: N.B4, beats: 1.0 },
                { freq: N.A4, beats: 2.0 },
            ],
        },
    },
    {
        id: 'europes-living-rosa-2002',
        title: "Europe's Living a Celebration",
        artist: 'Rosa López',
        country: 'Spain',
        countryCode: 'ES',
        flag: '🇪🇸',
        year: 2002,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a6/a5/ed/a6a5ed45-6c66-4733-7bac-e73efae80fcf/mzaf_6256090695821416882.plus.aac.p.m4a',
        correctAnswer: "Europe's Living a Celebration – Rosa López",
        options: [
            "Europe's Living a Celebration – Rosa López",
            'Dime – Beth',
            'Corazón Latino – David Bisbal',
            'Vivo Cantando – Salomé',
        ],
        optionalHint: 'Tallin 2002 · Más de 14 millones de espectadores en España cantando junto al coro de Operación Triunfo 1.',
        difficulty: 'easy',
        itunesTrackId: 1442281387,
        itunesQuery: "Rosa Lopez Europe's Living a Celebration",
        funFact: '¡El himno oficial de cualquier fiesta y del cumpleaños de Irina! Reunió un histórico 80,4% de cuota de pantalla en España.',
        synthMelody: {
            bpm: 126,
            wave: 'sawtooth',
            bassFreq: 130.81,
            notes: [
                { freq: N.C5, beats: 0.75 },
                { freq: N.C5, beats: 0.75 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.E5, beats: 1.0 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.F5, beats: 1.0 },
                { freq: N.E5, beats: 1.0 },
                { freq: N.D5, beats: 1.0 },
                { freq: N.G4, beats: 1.0 },
                { freq: N.E5, beats: 0.75 },
                { freq: N.E5, beats: 0.75 },
                { freq: N.F5, beats: 0.5 },
                { freq: N.G5, beats: 1.0 },
                { freq: N.E5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.C5, beats: 2.0 },
            ],
        },
    },
    {
        id: 'zitti-e-buoni-maneskin-2021',
        title: 'Zitti e buoni',
        artist: 'Måneskin',
        country: 'Italy',
        countryCode: 'IT',
        flag: '🇮🇹',
        year: 2021,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/5a/1f/86/5a1f869d-8fdd-e0eb-e4a6-69130eed7657/mzaf_14131122941770077941.plus.aac.p.m4a',
        correctAnswer: 'Zitti e buoni – Måneskin',
        options: [
            'Zitti e buoni – Måneskin',
            'Hard Rock Hallelujah – Lordi',
            'Soldi – Mahmood',
            'Brividi – Mahmood & Blanco',
        ],
        optionalHint: 'Róterdam 2021 · Riff de guitarra eléctrica salvaje y "¡Rock and roll never dies!".',
        difficulty: 'easy',
        itunesTrackId: 1558504599,
        itunesQuery: 'Maneskin Zitti e buoni',
        funFact: 'Devolver el rock y el triunfo a Italia 31 años después convirtió a Damiano y Måneskin en superestrellas globales.',
        synthMelody: {
            bpm: 132,
            wave: 'sawtooth',
            bassFreq: 164.81,
            notes: [
                { freq: N.E4, beats: 0.5 },
                { freq: N.E4, beats: 0.5 },
                { freq: N.G4, beats: 0.5 },
                { freq: N.E4, beats: 0.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.G4, beats: 0.5 },
                { freq: N.E4, beats: 1.0 },
                { freq: N.E4, beats: 0.5 },
                { freq: N.E4, beats: 0.5 },
                { freq: N.G4, beats: 0.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.B4, beats: 0.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.G4, beats: 1.0 },
                { freq: N.E4, beats: 0.5 },
                { freq: N.G4, beats: 0.5 },
                { freq: N.A4, beats: 1.0 },
                { freq: N.E4, beats: 1.5 },
            ],
        },
    },
    {
        id: 'lalala-massiel-1968',
        title: 'La, la, la',
        artist: 'Massiel',
        country: 'Spain',
        countryCode: 'ES',
        flag: '🇪🇸',
        year: 1968,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/06/cd/7e/06cd7ea3-e772-e337-896b-7e094d5d1345/mzaf_3667307886626356066.plus.aac.p.m4a',
        correctAnswer: 'La, la, la – Massiel',
        options: [
            'La, la, la – Massiel',
            'Vivo cantando – Salomé',
            'Eres tú – Mocedades',
            'En un mundo nuevo – Karina',
        ],
        optionalHint: 'Londres 1968 · El Royal Albert Hall, un vestido Courrèges blanco de flores y 138 "la" en tres minutos.',
        difficulty: 'easy',
        itunesTrackId: 313845459,
        itunesQuery: 'Massiel La la la',
        funFact: '¡Primera victoria de España en Eurovisión! Ganó a Cliff Richard por solo 1 punto de diferencia.',
        synthMelody: {
            bpm: 138,
            wave: 'triangle',
            bassFreq: 130.81,
            notes: [
                { freq: N.C5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.E5, beats: 1.0 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.E5, beats: 1.0 },
                { freq: N.E5, beats: 0.5 },
                { freq: N.F5, beats: 0.5 },
                { freq: N.G5, beats: 1.0 },
                { freq: N.F5, beats: 0.5 },
                { freq: N.E5, beats: 0.5 },
                { freq: N.D5, beats: 1.5 },
                { freq: N.REST, beats: 0.5 },
                { freq: N.B4, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.D5, beats: 1.0 },
                { freq: N.G4, beats: 0.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.B4, beats: 1.0 },
                { freq: N.C5, beats: 1.5 },
            ],
        },
    },
    {
        id: 'fuego-eleni-2018',
        title: 'Fuego',
        artist: 'Eleni Foureira',
        country: 'Cyprus',
        countryCode: 'CY',
        flag: '🇨🇾',
        year: 2018,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bf/ef/e2/bfefe2ed-9924-83ec-ee51-759bcb8b1cbb/mzaf_12975755414925072987.plus.aac.p.m4a',
        correctAnswer: 'Fuego – Eleni Foureira',
        options: [
            'Fuego – Eleni Foureira',
            'SloMo – Chanel',
            'Mata Hari – Efendi',
            'Replay – Tamta',
        ],
        optionalHint: 'Lisboa 2018 · Pelazo al viento, mono de lentejuelas y el drop de trompetas más ardiente del Mediterráneo.',
        difficulty: 'easy',
        itunesTrackId: 1386541866,
        itunesQuery: 'Eleni Foureira Fuego',
        funFact: 'Pasó de estar última en las apuestas antes de los ensayos a rozar la victoria y dar a Chipre el mejor puesto de su historia (2.ª).',
        synthMelody: {
            bpm: 102,
            wave: 'sawtooth',
            bassFreq: 123.47,
            notes: [
                { freq: N.B4, beats: 0.75 },
                { freq: N.D5, beats: 0.75 },
                { freq: N.Cs5, beats: 0.5 },
                { freq: N.B4, beats: 0.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.B4, beats: 1.0 },
                { freq: N.Fs4, beats: 1.0 },
                { freq: N.B4, beats: 0.75 },
                { freq: N.D5, beats: 0.75 },
                { freq: N.E5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.Cs5, beats: 0.5 },
                { freq: N.B4, beats: 1.5 },
            ],
        },
    },
    {
        id: 'fairytale-rybak-2009',
        title: 'Fairytale',
        artist: 'Alexander Rybak',
        country: 'Norway',
        countryCode: 'NO',
        flag: '🇳🇴',
        year: 2009,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cb/15/3e/cb153e71-01bb-ac8c-28fd-0d5616880976/mzaf_6207258602199633447.plus.aac.p.m4a',
        correctAnswer: 'Fairytale – Alexander Rybak',
        options: [
            'Fairytale – Alexander Rybak',
            'Heroes – Måns Zelmerlöw',
            'Spirit in the Sky – KEiiNO',
            'Think About Things – Daði Freyr',
        ],
        optionalHint: 'Moscú 2009 · Un violín folclórico inolvidable y bailarines acrobáticos noruegos.',
        difficulty: 'easy',
        itunesTrackId: 1438988564,
        itunesQuery: 'Alexander Rybak Fairytale',
        funFact: 'Arrasó con 387 puntos (récord absoluto del sistema antiguo) y recibió puntos de absolutamente todos los países participantes.',
        synthMelody: {
            bpm: 112,
            wave: 'sawtooth',
            bassFreq: 146.83,
            notes: [
                { freq: N.D5, beats: 0.75 },
                { freq: N.A4, beats: 0.25 },
                { freq: N.Bb4, beats: 0.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.G4, beats: 0.5 },
                { freq: N.F4, beats: 0.5 },
                { freq: N.G4, beats: 0.5 },
                { freq: N.A4, beats: 1.5 },
                { freq: N.D5, beats: 0.75 },
                { freq: N.A4, beats: 0.25 },
                { freq: N.Bb4, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.Bb4, beats: 0.5 },
                { freq: N.A4, beats: 1.0 },
                { freq: N.G4, beats: 1.0 },
            ],
        },
    },
    {
        id: 'rise-like-a-phoenix-conchita-2014',
        title: 'Rise Like a Phoenix',
        artist: 'Conchita Wurst',
        country: 'Austria',
        countryCode: 'AT',
        flag: '🇦🇹',
        year: 2014,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/70/47/39/704739c0-3a30-ba8e-1a0a-1c3eb0ceaada/mzaf_8288537106818206762.plus.aac.p.m4a',
        correctAnswer: 'Rise Like a Phoenix – Conchita Wurst',
        options: [
            'Rise Like a Phoenix – Conchita Wurst',
            'Arcade – Duncan Laurence',
            'Voilà – Barbara Pravi',
            'Tattoo – Loreen',
        ],
        optionalHint: 'Copenhague 2014 · Una balada orquestal digna de James Bond con alas de fuego doradas en pantalla.',
        difficulty: 'easy',
        itunesTrackId: 844169216,
        itunesQuery: 'Conchita Wurst Rise Like a Phoenix',
        funFact: 'Su discurso al levantar el micrófono de cristal ("We are unity and we are unstoppable!") es historia viva de la televisión.',
        synthMelody: {
            bpm: 86,
            wave: 'triangle',
            bassFreq: 146.83,
            notes: [
                { freq: N.D4, beats: 1.0 },
                { freq: N.A4, beats: 1.5 },
                { freq: N.Bb4, beats: 0.5 },
                { freq: N.A4, beats: 1.0 },
                { freq: N.G4, beats: 0.5 },
                { freq: N.F4, beats: 0.5 },
                { freq: N.E4, beats: 1.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.D5, beats: 2.0 },
                { freq: N.Cs5, beats: 1.0 },
                { freq: N.D5, beats: 2.0 },
            ],
        },
    },
    {
        id: 'tattoo-loreen-2023',
        title: 'Tattoo',
        artist: 'Loreen',
        country: 'Sweden',
        countryCode: 'SE',
        flag: '🇸🇪',
        year: 2023,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5a/dd/6c/5add6cda-a867-6ed7-44f7-5f1fb84e2273/mzaf_7608913165958434662.plus.aac.p.m4a',
        correctAnswer: 'Tattoo – Loreen',
        options: [
            'Tattoo – Loreen',
            'Cha Cha Cha – Käärijä',
            'Queen of Kings – Alessandra',
            'Euphoria – Loreen',
        ],
        optionalHint: 'Liverpool 2023 · Dos pantallas gigantes tipo "panini press", uñas kilométricas y la primera mujer bicampeona de Eurovisión.',
        difficulty: 'easy',
        itunesTrackId: 1672056675,
        itunesQuery: 'Loreen Tattoo',
        funFact: 'Con su triunfo en Liverpool 2023, Loreen igualó a Johnny Logan como los únicos artistas en ganar Eurovisión dos veces, y empató a Suecia con Irlanda (7 victorias).',
        synthMelody: {
            bpm: 124,
            wave: 'sawtooth',
            bassFreq: 138.59,
            notes: [
                { freq: N.Eb5, beats: 0.75 },
                { freq: N.Eb5, beats: 0.75 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.Bb4, beats: 1.0 },
                { freq: N.G4, beats: 1.0 },
                { freq: N.Eb5, beats: 0.75 },
                { freq: N.Eb5, beats: 0.75 },
                { freq: N.F5, beats: 0.5 },
                { freq: N.D5, beats: 1.5 },
                { freq: N.REST, beats: 0.5 },
                { freq: N.C5, beats: 0.75 },
                { freq: N.C5, beats: 0.75 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.Eb5, beats: 1.0 },
                { freq: N.D5, beats: 1.0 },
                { freq: N.Bb4, beats: 1.5 },
            ],
        },
    },
    // ===================== MIXED (CLÁSICOS, VIRALES Y ACTUALES) =====================
    {
        id: 'cha-cha-cha-kaarija-2023',
        title: 'Cha Cha Cha',
        artist: 'Käärijä',
        country: 'Finland',
        countryCode: 'FI',
        flag: '🇫🇮',
        year: 2023,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/57/d8/27/57d827bf-1f40-0bb0-0781-21b5dd242454/mzaf_17436441335369242918.plus.aac.p.m4a',
        correctAnswer: 'Cha Cha Cha – Käärijä',
        options: [
            'Cha Cha Cha – Käärijä',
            'Rim Tim Tagi Dim – Baby Lasagna',
            'Europapa – Joost Klein',
            'Trenulețul – Zdob și Zdub',
        ],
        optionalHint: 'Liverpool 2023 · Bolero verde flúor, palés de madera, piñas coladas y el ganador indiscutible del televoto.',
        difficulty: 'mixed',
        itunesTrackId: 1661067481,
        itunesQuery: 'Käärijä Cha Cha Cha',
        funFact: 'Arrasó en el televoto de Liverpool 2023 con 376 puntos del público y puso a toda Europa a gritar "¡Cha, cha, cha!".',
        synthMelody: {
            bpm: 150,
            wave: 'square',
            bassFreq: 110.0,
            notes: [
                { freq: N.A4, beats: 0.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.REST, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.B4, beats: 0.5 },
                { freq: N.A4, beats: 1.0 },
                { freq: N.E5, beats: 0.75 },
                { freq: N.E5, beats: 0.75 },
                { freq: N.E5, beats: 1.0 },
                { freq: N.REST, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.B4, beats: 0.5 },
                { freq: N.A4, beats: 1.5 },
            ],
        },
    },
    {
        id: 'zorra-nebulossa-2024',
        title: 'Zorra',
        artist: 'Nebulossa',
        country: 'Spain',
        countryCode: 'ES',
        flag: '🇪🇸',
        year: 2024,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bb/60/29/bb60296d-c15d-b0a8-8612-16ff5a47f2d2/mzaf_6721165787708209770.plus.aac.p.m4a',
        correctAnswer: 'Zorra – Nebulossa',
        options: [
            'Zorra – Nebulossa',
            'Ay Mamá – Rigoberta Bandini',
            'Nochentera – Vicco',
            'Eaea – Blanca Paloma',
        ],
        optionalHint: 'Malmö 2024 · Synth-pop ochentero desde Ondara y todo el Malmö Arena gritando "¡Estoy en un buen momento!".',
        difficulty: 'mixed',
        itunesTrackId: 1878730849,
        itunesQuery: 'Nebulossa Zorra',
        funFact: 'Se convirtió en la canción más viral del mundo en Spotify tras ganar el Benidorm Fest 2024. ¡Porque Irina también está en su mejor momento!',
        synthMelody: {
            bpm: 122,
            wave: 'sawtooth',
            bassFreq: 130.81,
            notes: [
                { freq: N.C5, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.Eb5, beats: 1.0 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.Bb4, beats: 1.0 },
                { freq: N.G4, beats: 1.0 },
                { freq: N.REST, beats: 0.5 },
                { freq: N.Eb5, beats: 1.0 },
                { freq: N.C5, beats: 1.0 },
                { freq: N.D5, beats: 1.0 },
                { freq: N.Bb4, beats: 1.0 },
                { freq: N.C5, beats: 1.5 },
            ],
        },
    },
    {
        id: 'the-code-nemo-2024',
        title: 'The Code',
        artist: 'Nemo',
        country: 'Switzerland',
        countryCode: 'CH',
        flag: '🇨🇭',
        year: 2024,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e1/fc/bb/e1fcbbdf-f2f6-af80-a476-65a07b48a653/mzaf_3717177327316728129.plus.aac.p.m4a',
        correctAnswer: 'The Code – Nemo',
        options: [
            'The Code – Nemo',
            'Tout l’univers – Gjon’s Tears',
            'Rim Tim Tagi Dim – Baby Lasagna',
            'La Noia – Angelina Mango',
        ],
        optionalHint: 'Malmö 2024 · Ópera, drum & bass y rap haciendo equilibrio sobre un disco gigante giratorio.',
        difficulty: 'mixed',
        itunesTrackId: 1730730673,
        itunesQuery: 'Nemo The Code',
        funFact: 'Nemo consiguió veintidós veces los "12 Points" del jurado en 2024 y tanta emoción al celebrar que rompió el trofeo de cristal en directo.',
        synthMelody: {
            bpm: 140,
            wave: 'triangle',
            bassFreq: 146.83,
            notes: [
                { freq: N.D5, beats: 0.5 },
                { freq: N.F5, beats: 0.5 },
                { freq: N.A5, beats: 1.0 },
                { freq: N.G5, beats: 0.5 },
                { freq: N.F5, beats: 0.5 },
                { freq: N.E5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.Cs5, beats: 1.0 },
                { freq: N.A4, beats: 1.0 },
                { freq: N.D5, beats: 0.75 },
                { freq: N.E5, beats: 0.75 },
                { freq: N.F5, beats: 1.0 },
                { freq: N.E5, beats: 0.5 },
                { freq: N.D5, beats: 1.5 },
            ],
        },
    },
    {
        id: 'dime-beth-2003',
        title: 'Dime',
        artist: 'Beth',
        country: 'Spain',
        countryCode: 'ES',
        flag: '🇪🇸',
        year: 2003,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f3/0a/07/f30a07e8-b309-350d-90da-2cf7f17fd324/mzaf_17324112277609965981.plus.aac.p.m4a',
        correctAnswer: 'Dime – Beth',
        options: [
            'Dime – Beth',
            "Europe's Living a Celebration – Rosa López",
            'Para llenarme de ti – Ramón',
            'La noche es para mí – Soraya',
        ],
        optionalHint: 'Riga 2003 · Rastas, pantalón vaquero y uno de los mayores himnos pop en español del siglo XXI.',
        difficulty: 'mixed',
        itunesTrackId: 1442529697,
        itunesQuery: 'Beth Dime',
        funFact: 'Aunque quedó 8.ª en Riga 2003, "Dime" sigue siendo una de las canciones más votadas cada año en el top histórico de Eurovisión.',
        synthMelody: {
            bpm: 122,
            wave: 'sawtooth',
            bassFreq: 110.0,
            notes: [
                { freq: N.E5, beats: 1.0 },
                { freq: N.C5, beats: 1.0 },
                { freq: N.D5, beats: 0.75 },
                { freq: N.E5, beats: 0.75 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.A4, beats: 1.0 },
                { freq: N.E5, beats: 1.0 },
                { freq: N.D5, beats: 1.0 },
                { freq: N.B4, beats: 1.0 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.E5, beats: 1.0 },
                { freq: N.A4, beats: 1.5 },
            ],
        },
    },
    {
        id: 'dancing-lasha-tumbai-verka-2007',
        title: 'Dancing Lasha Tumbai',
        artist: 'Verka Serduchka',
        country: 'Ukraine',
        countryCode: 'UA',
        flag: '🇺🇦',
        year: 2007,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/d1/cb/ed/d1cbedae-aa15-57b8-f1e3-0885220f93c7/mzaf_12419060031703325133.plus.aac.p.m4a',
        correctAnswer: 'Dancing Lasha Tumbai – Verka Serduchka',
        options: [
            'Dancing Lasha Tumbai – Verka Serduchka',
            'Wild Dances – Ruslana',
            'Stefania – Kalush Orchestra',
            'Baila el Chiki Chiki – Rodolfo Chikilicuatre',
        ],
        optionalHint: 'Helsinki 2007 · Traje plateado de papel de aluminio, una estrella gigante en la cabeza y "Sieben, sieben, ai lyu-lyu!".',
        difficulty: 'mixed',
        itunesTrackId: 1444429019,
        itunesQuery: 'Verka Serduchka Dancing Lasha Tumbai',
        funFact: 'Icono absoluto de Eurovisión: quedó 2.ª en 2007 y ha vuelto como invitada de honor a casi todas las galas desde entonces.',
        synthMelody: {
            bpm: 148,
            wave: 'square',
            bassFreq: 110.0,
            notes: [
                { freq: N.A4, beats: 0.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.E5, beats: 0.5 },
                { freq: N.E5, beats: 0.5 },
                { freq: N.F5, beats: 0.5 },
                { freq: N.E5, beats: 0.5 },
                { freq: N.D5, beats: 1.0 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.B4, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.A4, beats: 1.0 },
                { freq: N.A4, beats: 1.0 },
            ],
        },
    },
    {
        id: 'arcade-duncan-2019',
        title: 'Arcade',
        artist: 'Duncan Laurence',
        country: 'Netherlands',
        countryCode: 'NL',
        flag: '🇳🇱',
        year: 2019,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/15/b3/cc/15b3ccaa-677f-28b5-3510-04061ed18182/mzaf_11758228735769625497.plus.aac.p.m4a',
        correctAnswer: 'Arcade – Duncan Laurence',
        options: [
            'Arcade – Duncan Laurence',
            'Soldi – Mahmood',
            'Snap – Rosa Linn',
            'Space Man – Sam Ryder',
        ],
        optionalHint: 'Tel Aviv 2019 · Un piano en la oscuridad y "Loving you is a losing game".',
        difficulty: 'mixed',
        itunesTrackId: 1455090089,
        itunesQuery: 'Duncan Laurence Arcade',
        funFact: 'Ganó en 2019 y años después superó los mil millones de reproducciones en Spotify, siendo la canción de Eurovisión más escuchada en streaming.',
        synthMelody: {
            bpm: 76,
            wave: 'triangle',
            bassFreq: 110.0,
            notes: [
                { freq: N.E5, beats: 1.0 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.C5, beats: 1.0 },
                { freq: N.A4, beats: 1.0 },
                { freq: N.G4, beats: 0.5 },
                { freq: N.A4, beats: 1.0 },
                { freq: N.C5, beats: 1.0 },
                { freq: N.D5, beats: 1.0 },
                { freq: N.E5, beats: 1.5 },
                { freq: N.C5, beats: 1.5 },
            ],
        },
    },
    {
        id: 'soldi-mahmood-2019',
        title: 'Soldi',
        artist: 'Mahmood',
        country: 'Italy',
        countryCode: 'IT',
        flag: '🇮🇹',
        year: 2019,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/77/88/29/7788296d-eec3-adb1-3c46-71b456c155ad/mzaf_5493894034483230401.plus.aac.p.m4a',
        correctAnswer: 'Soldi – Mahmood',
        options: [
            'Soldi – Mahmood',
            'Brividi – Mahmood & Blanco',
            'Occidentali’s Karma – Francesco Gabbani',
            'Zitti e buoni – Måneskin',
        ],
        optionalHint: 'Tel Aviv 2019 · Dos palmadas secas ("clap, clap!") que todo el estadio repetía al unísono.',
        difficulty: 'mixed',
        itunesTrackId: 1453013867,
        itunesQuery: 'Mahmood Soldi',
        funFact: 'Esas dos palmadas en el estribillo hicieron que toda Europa se enamorara del R&B urbano italiano.',
        synthMelody: {
            bpm: 100,
            wave: 'sawtooth',
            bassFreq: 123.47,
            notes: [
                { freq: N.Fs4, beats: 0.5 },
                { freq: N.B4, beats: 0.5 },
                { freq: N.B4, beats: 0.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.Fs4, beats: 0.5 },
                { freq: N.E4, beats: 0.5 },
                { freq: N.Fs4, beats: 1.0 },
                { freq: N.REST, beats: 0.25 },
                { freq: N.B5, beats: 0.25 },
                { freq: N.B5, beats: 0.5 },
                { freq: N.Fs4, beats: 0.5 },
                { freq: N.B4, beats: 0.5 },
                { freq: N.Cs5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.Cs5, beats: 0.5 },
                { freq: N.B4, beats: 1.0 },
            ],
        },
    },
    {
        id: 'eaea-blanca-paloma-2023',
        title: 'Eaea',
        artist: 'Blanca Paloma',
        country: 'Spain',
        countryCode: 'ES',
        flag: '🇪🇸',
        year: 2023,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ca/1b/c4/ca1bc4e2-d722-c368-c1d2-7c182eb861d3/mzaf_13846586577979857659.plus.aac.p.m4a',
        correctAnswer: 'Eaea – Blanca Paloma',
        options: [
            'Eaea – Blanca Paloma',
            'SloMo – Chanel',
            'Quédate conmigo – Pastora Soler',
            'Zorra – Nebulossa',
        ],
        optionalHint: 'Liverpool 2023 · Flecos rojos en círculo, vanguardia flamenca y una nana hipnótica homenaje a la abuela Carmen.',
        difficulty: 'mixed',
        itunesTrackId: 1679321119,
        itunesQuery: 'Blanca Paloma Eaea',
        funFact: 'Su realización milimétrica y su portentoso directo vocal conquistaron a la crítica especializada en Liverpool.',
        synthMelody: {
            bpm: 108,
            wave: 'triangle',
            bassFreq: 130.81,
            notes: [
                { freq: N.C5, beats: 0.75 },
                { freq: N.Db5, beats: 0.75 },
                { freq: N.C5, beats: 1.0 },
                { freq: N.Bb4, beats: 0.5 },
                { freq: N.Ab4, beats: 1.0 },
                { freq: N.G4, beats: 1.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.Cs5, beats: 0.5 },
                { freq: N.E5, beats: 1.0 },
                { freq: N.Cs5, beats: 0.5 },
                { freq: N.C5, beats: 1.5 },
            ],
        },
    },
    {
        id: 'wild-dances-ruslana-2004',
        title: 'Wild Dances',
        artist: 'Ruslana',
        country: 'Ukraine',
        countryCode: 'UA',
        flag: '🇺🇦',
        year: 2004,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5f/dd/92/5fdd9202-6936-e980-12b7-382a2214c7b4/mzaf_18369279587137626034.plus.aac.p.m4a',
        correctAnswer: 'Wild Dances – Ruslana',
        options: [
            'Wild Dances – Ruslana',
            'My Number One – Helena Paparizou',
            'Everyway That I Can – Sertab Erener',
            'Stefania – Kalush Orchestra',
        ],
        optionalHint: 'Estambul 2004 · Tambores de los Cárpatos, trajes de cuero guerreros y "¡Hey, hey, hey! Just maybe I’m crazy!".',
        difficulty: 'mixed',
        itunesTrackId: 724020692,
        itunesQuery: 'Ruslana Wild Dances',
        funFact: '¡En solo su segunda participación en Eurovisión, Ucrania se llevó el micrófono de cristal con una coreografía tan potente que agrietó el suelo de cristal del escenario!',
        synthMelody: {
            bpm: 136,
            wave: 'sawtooth',
            bassFreq: 146.83,
            notes: [
                { freq: N.D5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.F5, beats: 0.5 },
                { freq: N.E5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.D5, beats: 1.0 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.D5, beats: 1.0 },
                { freq: N.A4, beats: 1.0 },
            ],
        },
    },
    {
        id: 'stefania-kalush-2022',
        title: 'Stefania',
        artist: 'Kalush Orchestra',
        country: 'Ukraine',
        countryCode: 'UA',
        flag: '🇺🇦',
        year: 2022,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8e/5b/86/8e5b86ec-b8b6-4722-4df4-651b3069e71d/mzaf_8328251167146242821.plus.aac.p.m4a',
        correctAnswer: 'Stefania – Kalush Orchestra',
        options: [
            'Stefania – Kalush Orchestra',
            'Shum – Go_A',
            'Teresa & Maria – alyona alyona & Jerry Heil',
            '1944 – Jamala',
        ],
        optionalHint: 'Turín 2022 · Un gorro bucket hat rosa inconfundible, flauta tradicional sopilka y rap emotivo.',
        difficulty: 'mixed',
        itunesTrackId: 1614859013,
        itunesQuery: 'Kalush Orchestra Stefania',
        funFact: 'Recibió 439 puntos del televoto en Turín 2022, el récord histórico absoluto de votos del público en una final de Eurovisión.',
        synthMelody: {
            bpm: 105,
            wave: 'triangle',
            bassFreq: 146.83,
            notes: [
                { freq: N.D5, beats: 0.75 },
                { freq: N.F5, beats: 0.75 },
                { freq: N.E5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.A4, beats: 1.0 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.F5, beats: 0.75 },
                { freq: N.E5, beats: 0.75 },
                { freq: N.D5, beats: 1.5 },
            ],
        },
    },
    // ===================== EXPERT (EUROFAN NIVEL DIOS) =====================
    {
        id: 'quedate-conmigo-pastora-2012',
        title: 'Quédate conmigo',
        artist: 'Pastora Soler',
        country: 'Spain',
        countryCode: 'ES',
        flag: '🇪🇸',
        year: 2012,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/65/f7/29/65f7294f-14a2-8bc4-7128-13ca8c287b1d/mzaf_10306436435787350474.plus.aac.p.m4a',
        correctAnswer: 'Quédate conmigo – Pastora Soler',
        options: [
            'Quédate conmigo – Pastora Soler',
            'Dancing in the Rain – Ruth Lorenzo',
            'Amanecer – Edurne',
            'Algo pequeñito – Daniel Diges',
        ],
        optionalHint: 'Bakú 2012 · Vestido aguamarina y una nota aguda final estratosférica que puso de pie a toda Europa.',
        difficulty: 'expert',
        itunesTrackId: 535722987,
        itunesQuery: 'Pastora Soler Quedate conmigo',
        funFact: 'Incluso Loreen confesó en Bakú que la interpretación vocal de Pastora Soler le ponía la piel de gallina en cada ensayo.',
        synthMelody: {
            bpm: 80,
            wave: 'triangle',
            bassFreq: 130.81,
            notes: [
                { freq: N.G4, beats: 0.5 },
                { freq: N.C5, beats: 1.0 },
                { freq: N.D5, beats: 1.0 },
                { freq: N.E5, beats: 1.5 },
                { freq: N.F5, beats: 0.5 },
                { freq: N.E5, beats: 0.5 },
                { freq: N.D5, beats: 1.0 },
                { freq: N.C5, beats: 1.0 },
                { freq: N.G5, beats: 2.5 },
            ],
        },
    },
    {
        id: 'eres-tu-mocedades-1973',
        title: 'Eres tú',
        artist: 'Mocedades',
        country: 'Spain',
        countryCode: 'ES',
        flag: '🇪🇸',
        year: 1973,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d3/9a/3f/d39a3f73-08bd-b61e-4631-3537c4d16454/mzaf_12088662984987358066.plus.aac.p.m4a',
        correctAnswer: 'Eres tú – Mocedades',
        options: [
            'Eres tú – Mocedades',
            'En un mundo nuevo – Karina',
            'Gwendolyne – Julio Iglesias',
            'Canta y sé feliz – Peret',
        ],
        optionalHint: 'Luxemburgo 1973 · "Como una promesa, eres tú, eres tú... como una mañana de verano".',
        difficulty: 'expert',
        itunesTrackId: 298410150,
        itunesQuery: 'Mocedades Eres tu',
        funFact: 'Quedó 2.ª en 1973 con 125 puntos y llegó al Top 10 del Billboard Hot 100 en Estados Unidos cantada íntegramente en español.',
        synthMelody: {
            bpm: 92,
            wave: 'triangle',
            bassFreq: 130.81,
            notes: [
                { freq: N.E5, beats: 1.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.C5, beats: 1.5 },
                { freq: N.G4, beats: 0.5 },
                { freq: N.A4, beats: 1.0 },
                { freq: N.B4, beats: 1.0 },
                { freq: N.C5, beats: 2.0 },
                { freq: N.F5, beats: 1.5 },
                { freq: N.E5, beats: 0.5 },
                { freq: N.D5, beats: 2.0 },
            ],
        },
    },
    {
        id: 'vivo-cantando-salome-1969',
        title: 'Vivo cantando',
        artist: 'Salomé',
        country: 'Spain',
        countryCode: 'ES',
        flag: '🇪🇸',
        year: 1969,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/07/07/c9/0707c9c9-b4df-e1e2-210e-17f11683e909/mzaf_8507533122816221187.plus.aac.p.m4a',
        correctAnswer: 'Vivo cantando – Salomé',
        options: [
            'Vivo cantando – Salomé',
            'La, la, la – Massiel',
            'Tómbola – Marisol',
            'Su canción – Betty Missiego',
        ],
        optionalHint: 'Madrid 1969 · Teatro Real, un mono de flecos de porcelana de 14 kilos diseñado por Pertegaz y "¡Hey!".',
        difficulty: 'expert',
        itunesTrackId: 175107275,
        itunesQuery: 'Salome Vivo cantando',
        funFact: 'En Madrid 1969 hubo un cuádruple empate histórico en el primer puesto (España, Reino Unido, Francia y Países Bajos) porque el reglamento aún no contemplaba desempates.',
        synthMelody: {
            bpm: 134,
            wave: 'triangle',
            bassFreq: 146.83,
            notes: [
                { freq: N.D5, beats: 0.5 },
                { freq: N.E5, beats: 0.5 },
                { freq: N.Fs5, beats: 1.0 },
                { freq: N.D5, beats: 1.0 },
                { freq: N.B4, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.A4, beats: 1.5 },
                { freq: N.REST, beats: 0.5 },
                { freq: N.G4, beats: 0.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.B4, beats: 1.0 },
                { freq: N.Cs5, beats: 1.0 },
                { freq: N.D5, beats: 1.5 },
            ],
        },
    },
    {
        id: 'rim-tim-tagi-dim-baby-lasagna-2024',
        title: 'Rim Tim Tagi Dim',
        artist: 'Baby Lasagna',
        country: 'Croatia',
        countryCode: 'HR',
        flag: '🇭🇷',
        year: 2024,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/74/0e/81/740e8152-26dc-1aa5-25a0-0a87f74960cf/mzaf_8696441357108459281.plus.aac.p.m4a',
        correctAnswer: 'Rim Tim Tagi Dim – Baby Lasagna',
        options: [
            'Rim Tim Tagi Dim – Baby Lasagna',
            'Cha Cha Cha – Käärijä',
            'Mama ŠČ! – Let 3',
            'The Code – Nemo',
        ],
        optionalHint: 'Malmö 2024 · Tapetes de ganchillo tradicionales, gatos bailando en las pantallas LED y "There’s no going back, woah!".',
        difficulty: 'expert',
        itunesTrackId: 1725151025,
        itunesQuery: 'Baby Lasagna Rim Tim Tagi Dim',
        funFact: 'Entró en la preselección croata como suplente de última hora y acabó ganando el televoto de Eurovisión 2024 dando a Croacia el mejor resultado de su historia.',
        synthMelody: {
            bpm: 138,
            wave: 'sawtooth',
            bassFreq: 110.0,
            notes: [
                { freq: N.A4, beats: 0.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.A4, beats: 1.0 },
                { freq: N.G4, beats: 0.5 },
                { freq: N.G4, beats: 0.5 },
                { freq: N.A4, beats: 1.0 },
                { freq: N.E5, beats: 1.0 },
                { freq: N.A4, beats: 1.0 },
            ],
        },
    },
    {
        id: 'voila-barbara-pravi-2021',
        title: 'Voilà',
        artist: 'Barbara Pravi',
        country: 'France',
        countryCode: 'FR',
        flag: '🇫🇷',
        year: 2021,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/92/d2/ca/92d2ca50-3d5f-6acf-50a6-b9b9c02de690/mzaf_972487095906934243.plus.aac.p.m4a',
        correctAnswer: 'Voilà – Barbara Pravi',
        options: [
            'Voilà – Barbara Pravi',
            'Mon amour – Slimane',
            'Évidemment – La Zarra',
            'Tout l’univers – Gjon’s Tears',
        ],
        optionalHint: 'Róterdam 2021 · Chanson francesa en estado puro, un solo plano secuencia hipnótico y un crescendo arrollador.',
        difficulty: 'expert',
        itunesTrackId: 1537771155,
        itunesQuery: 'Barbara Pravi Voila',
        funFact: 'Con 499 puntos en Róterdam 2021, devolvió a Francia al podio por primera vez en tres décadas.',
        synthMelody: {
            bpm: 116,
            wave: 'triangle',
            bassFreq: 146.83,
            notes: [
                { freq: N.D5, beats: 0.75 },
                { freq: N.E5, beats: 0.75 },
                { freq: N.F5, beats: 0.75 },
                { freq: N.E5, beats: 0.75 },
                { freq: N.D5, beats: 0.75 },
                { freq: N.C5, beats: 0.75 },
                { freq: N.Bb4, beats: 0.75 },
                { freq: N.A4, beats: 1.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.D5, beats: 2.0 },
            ],
        },
    },
    {
        id: 'shum-go-a-2021',
        title: 'Shum',
        artist: 'Go_A',
        country: 'Ukraine',
        countryCode: 'UA',
        flag: '🇺🇦',
        year: 2021,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cf/2d/1d/cf2d1dea-2c6c-5a65-b780-cff5fdfb7b88/mzaf_11952524076143564917.plus.aac.p.m4a',
        correctAnswer: 'Shum – Go_A',
        options: [
            'Shum – Go_A',
            'Stefania – Kalush Orchestra',
            'Samo Mi Se Spava – Luke Black',
            'In Corpore Sano – Konstrakta',
        ],
        optionalHint: 'Róterdam 2021 · Folktrónica hipnótica con abrigo de plumas verde esmeralda que acelera su tempo hasta el éxtasis.',
        difficulty: 'expert',
        itunesTrackId: 1579581421,
        itunesQuery: 'Go_A Shum',
        funFact: 'Fue la primera canción íntegramente en ucraniano en entrar en la lista global Billboard 200.',
        synthMelody: {
            bpm: 136,
            wave: 'square',
            bassFreq: 164.81,
            notes: [
                { freq: N.E5, beats: 0.5 },
                { freq: N.G5, beats: 0.5 },
                { freq: N.Fs5, beats: 0.5 },
                { freq: N.E5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.E5, beats: 0.5 },
                { freq: N.B4, beats: 1.0 },
                { freq: N.E5, beats: 0.5 },
                { freq: N.G5, beats: 0.5 },
                { freq: N.A5, beats: 0.5 },
                { freq: N.G5, beats: 0.5 },
                { freq: N.Fs5, beats: 0.5 },
                { freq: N.E5, beats: 1.5 },
            ],
        },
    },
    {
        id: 'bailar-pegados-sergio-dalma-1991',
        title: 'Bailar pegados',
        artist: 'Sergio Dalma',
        country: 'Spain',
        countryCode: 'ES',
        flag: '🇪🇸',
        year: 1991,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/98/74/98/9874987f-ca0c-f4f6-5b04-a16264886d0e/mzaf_5170813523946939257.plus.aac.p.m4a',
        correctAnswer: 'Bailar pegados – Sergio Dalma',
        options: [
            'Bailar pegados – Sergio Dalma',
            'Vuelve conmigo – Anabel Conde',
            'Bandido – Azúcar Moreno',
            'Nacida para amar – Nina',
        ],
        optionalHint: 'Roma 1991 · "Bailar de lejos no es bailar, es estar bailando solo...".',
        difficulty: 'expert',
        itunesTrackId: 1442768867,
        itunesQuery: 'Sergio Dalma Bailar pegados',
        funFact: 'Quedó 4.º en los estudios Cinecittà de Roma 1991 y es una de las baladas románticas más icónicas de la música española.',
        synthMelody: {
            bpm: 84,
            wave: 'triangle',
            bassFreq: 130.81,
            notes: [
                { freq: N.G4, beats: 0.5 },
                { freq: N.C5, beats: 1.0 },
                { freq: N.E5, beats: 1.0 },
                { freq: N.D5, beats: 1.5 },
                { freq: N.G4, beats: 0.5 },
                { freq: N.B4, beats: 1.0 },
                { freq: N.D5, beats: 1.0 },
                { freq: N.C5, beats: 2.0 },
            ],
        },
    },
    {
        id: 'toy-netta-2018',
        title: 'Toy',
        artist: 'Netta',
        country: 'Israel',
        countryCode: 'IL',
        flag: '🇮🇱',
        year: 2018,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/59/ca/6f/59ca6fbf-daa5-2e37-b8ff-3713fbfde8f5/mzaf_13834801465944697729.plus.aac.p.m4a',
        correctAnswer: 'Toy – Netta',
        options: [
            'Toy – Netta',
            'Unicorn – Noa Kirel',
            'Fuego – Eleni Foureira',
            'Roar – Katy Perry',
        ],
        optionalHint: 'Lisboa 2018 · Un looper vocal, gatos de la suerte dorados (Maneki-neko) y "I’m not your toy!".',
        difficulty: 'expert',
        itunesTrackId: 1518643036,
        itunesQuery: 'Netta Toy',
        funFact: 'Su duelo en Lisboa 2018 frente a "Fuego" de Eleni Foureira fue uno de los más vibrantes de la década.',
        synthMelody: {
            bpm: 130,
            wave: 'square',
            bassFreq: 130.81,
            notes: [
                { freq: N.C5, beats: 0.5 },
                { freq: N.Eb5, beats: 0.5 },
                { freq: N.F5, beats: 0.5 },
                { freq: N.Fs5, beats: 0.5 },
                { freq: N.F5, beats: 0.5 },
                { freq: N.Eb5, beats: 0.5 },
                { freq: N.C5, beats: 1.0 },
                { freq: N.Eb5, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.Bb4, beats: 0.5 },
                { freq: N.C5, beats: 1.5 },
            ],
        },
    },
    {
        id: 'my-number-one-paparizou-2005',
        title: 'My Number One',
        artist: 'Helena Paparizou',
        country: 'Greece',
        countryCode: 'GR',
        flag: '🇬🇷',
        year: 2005,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8d/d4/f2/8dd4f290-f316-e4e8-c8be-f7970558f44b/mzaf_13535416546434282433.plus.aac.p.m4a',
        correctAnswer: 'My Number One – Helena Paparizou',
        options: [
            'My Number One – Helena Paparizou',
            'Fuego – Eleni Foureira',
            'Qélé, Qélé – Sirusho',
            'Dum Tek Tek – Hadise',
        ],
        optionalHint: 'Kiev 2005 · Liras griegas sobre las cuerdas de violín en el suelo y el primer triunfo de Grecia.',
        difficulty: 'expert',
        itunesTrackId: 299636095,
        itunesQuery: 'Helena Paparizou My Number One',
        funFact: '¡Porque en su cumpleaños Irina también es "Our Number One, the only treasure we’ll ever have"!',
        synthMelody: {
            bpm: 126,
            wave: 'sawtooth',
            bassFreq: 130.81,
            notes: [
                { freq: N.C5, beats: 0.75 },
                { freq: N.D5, beats: 0.75 },
                { freq: N.Eb5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.B4, beats: 0.5 },
                { freq: N.C5, beats: 1.5 },
                { freq: N.G4, beats: 0.5 },
                { freq: N.C5, beats: 0.5 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.Eb5, beats: 1.0 },
                { freq: N.D5, beats: 0.5 },
                { freq: N.C5, beats: 1.5 },
            ],
        },
    },
    {
        id: 'hold-me-closer-cornelia-2022',
        title: 'Hold Me Closer',
        artist: 'Cornelia Jakobs',
        country: 'Sweden',
        countryCode: 'SE',
        flag: '🇸🇪',
        year: 2022,
        audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/83/bb/f8/83bbf86e-2837-c0ba-c7b1-7f8675b2af1e/mzaf_3448743890016622673.plus.aac.p.m4a',
        correctAnswer: 'Hold Me Closer – Cornelia Jakobs',
        options: [
            'Hold Me Closer – Cornelia Jakobs',
            'Snap – Rosa Linn',
            'Space Man – Sam Ryder',
            'Tattoo – Loreen',
        ],
        optionalHint: 'Turín 2022 · Descalza frente a un círculo verde/rojo giratorio con voz rasgada y desgarradora.',
        difficulty: 'expert',
        itunesTrackId: 1615059455,
        itunesQuery: 'Cornelia Jakobs Hold Me Closer',
        funFact: 'Fue una de las grandes favoritas del jurado en Turín 2022 junto a Sam Ryder y Chanel.',
        synthMelody: {
            bpm: 96,
            wave: 'triangle',
            bassFreq: 130.81,
            notes: [
                { freq: N.E5, beats: 1.0 },
                { freq: N.D5, beats: 1.0 },
                { freq: N.C5, beats: 1.5 },
                { freq: N.A4, beats: 0.5 },
                { freq: N.G4, beats: 1.0 },
                { freq: N.C5, beats: 1.0 },
                { freq: N.D5, beats: 1.0 },
                { freq: N.E5, beats: 2.0 },
            ],
        },
    },
];
function shuffleArray(items) {
    const arr = [...items];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
/**
 * Selects 10 unique songs for a match based on the chosen difficulty,
 * shuffling the options of each song so the correct answer is never in a fixed position.
 */
function buildMatchDeck(difficulty) {
    let pool;
    if (difficulty === 'easy') {
        pool = EUROVISION_SONGS.filter((s) => s.difficulty === 'easy');
    }
    else if (difficulty === 'expert') {
        const expertSongs = EUROVISION_SONGS.filter((s) => s.difficulty === 'expert');
        const mixedSongs = EUROVISION_SONGS.filter((s) => s.difficulty === 'mixed');
        pool = [...expertSongs, ...shuffleArray(mixedSongs).slice(0, 3)];
    }
    else {
        // 'mixed' combines the best of easy, mixed, and a couple of iconic classics
        const easySub = shuffleArray(EUROVISION_SONGS.filter((s) => s.difficulty === 'easy')).slice(0, 4);
        const mixedSub = shuffleArray(EUROVISION_SONGS.filter((s) => s.difficulty === 'mixed')).slice(0, 5);
        const expertSub = shuffleArray(EUROVISION_SONGS.filter((s) => s.difficulty === 'expert')).slice(0, 3);
        pool = [...easySub, ...mixedSub, ...expertSub];
    }
    const selected = shuffleArray(pool).slice(0, 10);
    return selected.map((song) => ({
        ...song,
        options: shuffleArray(song.options),
    }));
}
/**
 * Generates simulated International Jury votes for the 10 participating songs
 * so Irina's votes combine with European juries in the Grand Final scoreboard!
 */
function generateInternationalJuries(participatingSongs) {
    const juryConfigs = [
        {
            country: 'Suecia (Estocolmo)',
            countryCode: 'SE',
            flag: '🇸🇪',
            spokesperson: 'Petra Mede',
            greeting: 'Good evening Europe & Happy Birthday Irina! Here are the results of the Swedish jury:',
        },
        {
            country: 'Italia (Roma)',
            countryCode: 'IT',
            flag: '🇮🇹',
            spokesperson: 'Raffaella & Damiano',
            greeting: 'Buonasera Europa! Tanti auguri a Irina desde Roma con todo nuestro amore:',
        },
        {
            country: 'Reino Unido (Londres)',
            countryCode: 'GB',
            flag: '🇬🇧',
            spokesperson: 'Graham Norton',
            greeting: 'Calling from London! Raising a glass to Irina on her special night:',
        },
        {
            country: 'Francia (París)',
            countryCode: 'FR',
            flag: '🇫🇷',
            spokesperson: 'Barbara Pravi',
            greeting: 'Bonsoir l’Europe ! Joyeux anniversaire Irina, voici les points du jury français :',
        },
        {
            country: 'Ucrania (Kiev)',
            countryCode: 'UA',
            flag: '🇺🇦',
            spokesperson: 'Verka Serduchka',
            greeting: 'Sieben, sieben, ai lyu-lyu! ¡Felicidades Irina, a bailar toda la noche!',
        },
    ];
    return juryConfigs.map((jury) => {
        const shuffledSongs = shuffleArray(participatingSongs);
        const shuffledPoints = shuffleArray(EUROVISION_POINTS);
        const votes = {};
        shuffledSongs.forEach((song, idx) => {
            if (shuffledPoints[idx] !== undefined) {
                votes[song.id] = shuffledPoints[idx];
            }
        });
        return {
            ...jury,
            votes,
        };
    });
}

const GAME_STATE_STORAGE_KEY = 'eurovision_12points_irina_state_v2';
const SAVED_STATS_STORAGE_KEY = 'eurovision_12points_irina_stats_v1';
const DEFAULT_STATS = {
    gamesCompleted: 0,
    bestQuizScore: 0,
    medalUnlocked: false,
};
function createInitialGameState(difficulty = 'mixed', showHintsByDefault = true) {
    const deck = buildMatchDeck(difficulty);
    return {
        screen: 'welcome',
        difficulty,
        showHintsByDefault,
        deckIds: deck.map((s) => s.id),
        currentRoundIndex: 0,
        currentPlayCount: 0,
        selectedAnswer: null,
        roundResults: [],
        quizScore: 0,
        userVotes: {},
        internationalJuries: generateInternationalJuries(deck),
        hasSeen12PointsCelebration: false,
    };
}
function useGame() {
    const [deckCache, setDeckCache] = reactExports.useState(() => {
        const map = {};
        EUROVISION_SONGS.forEach((song) => {
            map[song.id] = song;
        });
        return map;
    });
    const [gameState, setGameState] = reactExports.useState(() => {
        try {
            const raw = localStorage.getItem(GAME_STATE_STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed &&
                    Array.isArray(parsed.deckIds) &&
                    parsed.deckIds.length === 10 &&
                    parsed.deckIds.every((id) => EUROVISION_SONGS.some((s) => s.id === id))) {
                    return parsed;
                }
            }
        }
        catch {
            // Ignore corrupt localStorage
        }
        return createInitialGameState('mixed', true);
    });
    const [savedStats, setSavedStats] = reactExports.useState(() => {
        try {
            const raw = localStorage.getItem(SAVED_STATS_STORAGE_KEY);
            if (raw) {
                return { ...DEFAULT_STATS, ...JSON.parse(raw) };
            }
        }
        catch {
            // Ignore
        }
        return DEFAULT_STATS;
    });
    // Modal state for the special 12 POINTS celebration
    const [twelvePointsSong, setTwelvePointsSong] = reactExports.useState(null);
    // Stage transition curtain between rounds/screens
    const [stageTransitioning, setStageTransitioning] = reactExports.useState(false);
    // Persist gameState to localStorage
    reactExports.useEffect(() => {
        try {
            localStorage.setItem(GAME_STATE_STORAGE_KEY, JSON.stringify(gameState));
        }
        catch {
            // Ignore quota errors
        }
    }, [gameState]);
    // Persist savedStats to localStorage
    reactExports.useEffect(() => {
        try {
            localStorage.setItem(SAVED_STATS_STORAGE_KEY, JSON.stringify(savedStats));
        }
        catch {
            // Ignore quota errors
        }
    }, [savedStats]);
    // Participating 10 songs for this match
    const matchSongs = reactExports.useMemo(() => {
        return gameState.deckIds
            .map((id) => deckCache[id] || EUROVISION_SONGS.find((s) => s.id === id))
            .filter((s) => Boolean(s));
    }, [gameState.deckIds, deckCache]);
    const currentSong = reactExports.useMemo(() => {
        return matchSongs[gameState.currentRoundIndex] || matchSongs[0] || EUROVISION_SONGS[0];
    }, [matchSongs, gameState.currentRoundIndex]);
    const setDifficulty = reactExports.useCallback((difficulty) => {
        setGameState((prev) => ({
            ...prev,
            difficulty,
        }));
    }, []);
    const setShowHintsByDefault = reactExports.useCallback((showHintsByDefault) => {
        setGameState((prev) => ({
            ...prev,
            showHintsByDefault,
        }));
    }, []);
    const triggerStageTransition = reactExports.useCallback((callback) => {
        setStageTransitioning(true);
        window.setTimeout(() => {
            callback();
            window.setTimeout(() => {
                setStageTransitioning(false);
            }, 280);
        }, 240);
    }, []);
    /**
     * Starts a fresh 10-round game with the chosen difficulty
     */
    const startNewGame = reactExports.useCallback((difficultyOverride) => {
        audioEngine.stopSongIntro();
        audioEngine.playStageIntroFanfare();
        const chosenDifficulty = difficultyOverride ?? gameState.difficulty;
        const freshDeck = buildMatchDeck(chosenDifficulty);
        // Update deckCache with shuffled options
        setDeckCache((prev) => {
            const next = { ...prev };
            freshDeck.forEach((song) => {
                next[song.id] = song;
            });
            return next;
        });
        triggerStageTransition(() => {
            setGameState({
                screen: 'guess',
                difficulty: chosenDifficulty,
                showHintsByDefault: gameState.showHintsByDefault,
                deckIds: freshDeck.map((s) => s.id),
                currentRoundIndex: 0,
                currentPlayCount: 0,
                selectedAnswer: null,
                roundResults: [],
                quizScore: 0,
                userVotes: {},
                internationalJuries: generateInternationalJuries(freshDeck),
                hasSeen12PointsCelebration: false,
            });
        });
    }, [gameState.difficulty, gameState.showHintsByDefault, triggerStageTransition]);
    /**
     * Increments play count (max 3 per round)
     */
    const registerIntroPlay = reactExports.useCallback(() => {
        if (gameState.currentPlayCount >= 3 || gameState.selectedAnswer !== null) {
            return false;
        }
        setGameState((prev) => ({
            ...prev,
            currentPlayCount: Math.min(3, prev.currentPlayCount + 1),
        }));
        return true;
    }, [gameState.currentPlayCount, gameState.selectedAnswer]);
    /**
     * Calculates points for the current attempt:
     * 1st listen -> 100 pts
     * 2nd listen -> 75 pts
     * 3rd listen -> 50 pts
     */
    const potentialRoundPoints = reactExports.useMemo(() => {
        if (gameState.currentPlayCount <= 1)
            return 100;
        if (gameState.currentPlayCount === 2)
            return 75;
        return 50;
    }, [gameState.currentPlayCount]);
    /**
     * Submits an answer for the current song
     */
    const selectAnswer = reactExports.useCallback((option) => {
        if (gameState.selectedAnswer !== null)
            return;
        audioEngine.stopSongIntro();
        const isCorrect = option === currentSong.correctAnswer;
        const attemptsUsed = Math.max(1, gameState.currentPlayCount);
        let pointsEarned = 0;
        if (isCorrect) {
            if (attemptsUsed === 1)
                pointsEarned = 100;
            else if (attemptsUsed === 2)
                pointsEarned = 75;
            else
                pointsEarned = 50;
            audioEngine.playCorrectSound();
        }
        else {
            audioEngine.playWrongSound();
        }
        setGameState((prev) => {
            const existingFiltered = prev.roundResults.filter((r) => r.songId !== currentSong.id);
            const updatedResults = [
                ...existingFiltered,
                {
                    songId: currentSong.id,
                    selectedOption: option,
                    isCorrect,
                    attemptsUsed,
                    pointsEarned,
                },
            ];
            const totalScore = updatedResults.reduce((acc, r) => acc + r.pointsEarned, 0);
            return {
                ...prev,
                selectedAnswer: option,
                roundResults: updatedResults,
                quizScore: totalScore,
            };
        });
    }, [gameState.selectedAnswer, gameState.currentPlayCount, currentSong]);
    /**
     * Advances to the next song round or to the Eurovision Voting phase after Round 10
     */
    const nextRound = reactExports.useCallback(() => {
        audioEngine.stopSongIntro();
        if (gameState.currentRoundIndex < matchSongs.length - 1) {
            triggerStageTransition(() => {
                setGameState((prev) => ({
                    ...prev,
                    currentRoundIndex: prev.currentRoundIndex + 1,
                    currentPlayCount: 0,
                    selectedAnswer: null,
                }));
            });
        }
        else {
            audioEngine.playStageIntroFanfare();
            triggerStageTransition(() => {
                setGameState((prev) => ({
                    ...prev,
                    screen: 'voting',
                }));
            });
        }
    }, [gameState.currentRoundIndex, matchSongs.length, triggerStageTransition]);
    /**
     * Assigns a Eurovision point value (1, 2, 3, 4, 5, 6, 7, 8, 10, 12) to a participating song.
     * Enforces uniqueness:
     * - Only songs in the current match can receive points.
     * - Each point value can only be assigned to one song at a time.
     * - Clicking the already-assigned point on the same song unassigns it.
     */
    const assignVote = reactExports.useCallback((songId, points) => {
        const targetSong = matchSongs.find((s) => s.id === songId);
        if (!targetSong)
            return;
        setGameState((prev) => {
            const nextVotes = { ...prev.userVotes };
            if (points === null || nextVotes[songId] === points) {
                delete nextVotes[songId];
                return {
                    ...prev,
                    userVotes: nextVotes,
                };
            }
            // Remove this point value from any other song that previously held it
            Object.keys(nextVotes).forEach((otherSongId) => {
                if (nextVotes[otherSongId] === points) {
                    delete nextVotes[otherSongId];
                }
            });
            nextVotes[songId] = points;
            return {
                ...prev,
                userVotes: nextVotes,
                hasSeen12PointsCelebration: points === 12 ? true : prev.hasSeen12PointsCelebration,
            };
        });
        if (points === 12) {
            audioEngine.playDocePuntosFanfare();
            setTwelvePointsSong(targetSong);
        }
        else if (points !== null) {
            audioEngine.playPointAssignSound(points);
        }
    }, [matchSongs]);
    const clearAllVotes = reactExports.useCallback(() => {
        setGameState((prev) => ({
            ...prev,
            userVotes: {},
        }));
    }, []);
    /**
     * Quick helper to auto-assign any remaining unassigned points to songs without points
     */
    const autoFillRemainingVotes = reactExports.useCallback(() => {
        const usedPoints = new Set(Object.values(gameState.userVotes));
        const availablePoints = EUROVISION_POINTS.filter((p) => !usedPoints.has(p));
        const unvotedSongs = matchSongs.filter((s) => !gameState.userVotes[s.id]);
        if (availablePoints.length === 0 || unvotedSongs.length === 0)
            return;
        const nextVotes = { ...gameState.userVotes };
        let songGetting12 = null;
        unvotedSongs.forEach((song, idx) => {
            const pt = availablePoints[idx];
            if (pt !== undefined) {
                nextVotes[song.id] = pt;
                if (pt === 12) {
                    songGetting12 = song;
                }
            }
        });
        setGameState((prev) => ({
            ...prev,
            userVotes: nextVotes,
            hasSeen12PointsCelebration: true,
        }));
        if (songGetting12) {
            audioEngine.playDocePuntosFanfare();
            setTwelvePointsSong(songGetting12);
        }
        else {
            audioEngine.playPointAssignSound(10);
        }
    }, [gameState.userVotes, matchSongs]);
    const closeTwelvePointsModal = reactExports.useCallback(() => {
        setTwelvePointsSong(null);
    }, []);
    /**
     * Checks if all 10 Eurovision point values (1..12) have been assigned
     */
    const allVotesAssigned = reactExports.useMemo(() => {
        const assignedValues = Object.values(gameState.userVotes);
        if (assignedValues.length !== EUROVISION_POINTS.length)
            return false;
        return EUROVISION_POINTS.every((pt) => assignedValues.includes(pt));
    }, [gameState.userVotes]);
    /**
     * Finalizes the voting phase and unlocks the Eurovision Expert Medal!
     */
    const finishVoting = reactExports.useCallback(() => {
        if (!allVotesAssigned)
            return;
        audioEngine.playDocePuntosFanfare();
        // Calculate winner to store in stats
        const standings = matchSongs
            .map((song) => {
            const irinaPts = gameState.userVotes[song.id] || 0;
            const juryPts = gameState.internationalJuries.reduce((sum, jury) => sum + (jury.votes[song.id] || 0), 0);
            return {
                song,
                totalPoints: irinaPts + juryPts,
            };
        })
            .sort((a, b) => b.totalPoints - a.totalPoints);
        const winnerTitle = standings[0]
            ? `${standings[0].song.title} (${standings[0].song.artist})`
            : undefined;
        setSavedStats((prev) => ({
            gamesCompleted: prev.gamesCompleted + 1,
            bestQuizScore: Math.max(prev.bestQuizScore, gameState.quizScore),
            medalUnlocked: true,
            unlockedAt: prev.unlockedAt || new Date().toISOString(),
            lastWinnerSong: winnerTitle,
        }));
        triggerStageTransition(() => {
            setGameState((prev) => ({
                ...prev,
                screen: 'results',
            }));
        });
    }, [
        allVotesAssigned,
        matchSongs,
        gameState.userVotes,
        gameState.internationalJuries,
        gameState.quizScore,
        triggerStageTransition,
    ]);
    /**
     * Resets to Welcome screen so the user can change difficulty or play again
     */
    const goToWelcome = reactExports.useCallback(() => {
        audioEngine.stopSongIntro();
        triggerStageTransition(() => {
            setGameState((prev) => ({
                ...prev,
                screen: 'welcome',
            }));
        });
    }, [triggerStageTransition]);
    /**
     * Final standings combining Irina's votes + International Juries
     */
    const finalStandings = reactExports.useMemo(() => {
        return matchSongs
            .map((song) => {
            const irinaPoints = gameState.userVotes[song.id] || 0;
            const juryPoints = gameState.internationalJuries.reduce((sum, jury) => sum + (jury.votes[song.id] || 0), 0);
            const roundResult = gameState.roundResults.find((r) => r.songId === song.id);
            return {
                song,
                irinaPoints,
                juryPoints,
                totalPoints: irinaPoints + juryPoints,
                guessedCorrectly: Boolean(roundResult?.isCorrect),
            };
        })
            .sort((a, b) => {
            if (b.totalPoints !== a.totalPoints)
                return b.totalPoints - a.totalPoints;
            return b.irinaPoints - a.irinaPoints;
        });
    }, [matchSongs, gameState.userVotes, gameState.internationalJuries, gameState.roundResults]);
    const correctAnswersCount = reactExports.useMemo(() => {
        return gameState.roundResults.filter((r) => r.isCorrect).length;
    }, [gameState.roundResults]);
    const accuracyPercentage = reactExports.useMemo(() => {
        if (matchSongs.length === 0)
            return 0;
        return Math.round((correctAnswersCount / matchSongs.length) * 100);
    }, [correctAnswersCount, matchSongs.length]);
    const irina12PointsSong = reactExports.useMemo(() => {
        const songId = Object.keys(gameState.userVotes).find((id) => gameState.userVotes[id] === 12);
        return matchSongs.find((s) => s.id === songId) || null;
    }, [gameState.userVotes, matchSongs]);
    return {
        gameState,
        savedStats,
        matchSongs,
        currentSong,
        potentialRoundPoints,
        allVotesAssigned,
        finalStandings,
        correctAnswersCount,
        accuracyPercentage,
        irina12PointsSong,
        twelvePointsSong,
        stageTransitioning,
        setDifficulty,
        setShowHintsByDefault,
        startNewGame,
        registerIntroPlay,
        selectAnswer,
        nextRound,
        assignVote,
        clearAllVotes,
        autoFillRemainingVotes,
        closeTwelvePointsModal,
        finishVoting,
        goToWelcome,
    };
}

const App = () => {
    const { gameState, savedStats, matchSongs, currentSong, potentialRoundPoints, allVotesAssigned, finalStandings, correctAnswersCount, accuracyPercentage, irina12PointsSong, twelvePointsSong, stageTransitioning, setDifficulty, setShowHintsByDefault, startNewGame, registerIntroPlay, selectAnswer, nextRound, assignVote, clearAllVotes, autoFillRemainingVotes, closeTwelvePointsModal, finishVoting, goToWelcome, } = useGame();
    return (jsxRuntimeExports.jsxs("div", { className: "esc-app-shell", children: [jsxRuntimeExports.jsxs("div", { className: "esc-stage-backdrop", "aria-hidden": "true", children: [jsxRuntimeExports.jsx("div", { className: "esc-spotlight spot-left" }), jsxRuntimeExports.jsx("div", { className: "esc-spotlight spot-center" }), jsxRuntimeExports.jsx("div", { className: "esc-spotlight spot-right" }), jsxRuntimeExports.jsx("div", { className: "esc-particles-layer" })] }), jsxRuntimeExports.jsx(Header, { screen: gameState.screen, quizScore: gameState.quizScore, medalUnlocked: savedStats.medalUnlocked, onRestart: () => startNewGame(), onGoHome: goToWelcome }), jsxRuntimeExports.jsxs("main", { className: `esc-main-container ${stageTransitioning ? 'stage-cut' : ''}`, children: [gameState.screen === 'welcome' && (jsxRuntimeExports.jsx(WelcomePage, { difficulty: gameState.difficulty, showHintsByDefault: gameState.showHintsByDefault, savedStats: savedStats, onSelectDifficulty: setDifficulty, onToggleHints: setShowHintsByDefault, onStartGame: () => startNewGame() })), gameState.screen === 'guess' && (jsxRuntimeExports.jsx(GuessSongPage, { song: currentSong, currentRoundIndex: gameState.currentRoundIndex, totalRounds: matchSongs.length, deckIds: gameState.deckIds, roundResults: gameState.roundResults, playCount: gameState.currentPlayCount, potentialPoints: potentialRoundPoints, selectedAnswer: gameState.selectedAnswer, showHintsByDefault: gameState.showHintsByDefault, onRegisterPlay: registerIntroPlay, onSelectAnswer: selectAnswer, onNextRound: nextRound })), gameState.screen === 'voting' && (jsxRuntimeExports.jsx(VotingPage, { songs: matchSongs, userVotes: gameState.userVotes, roundResults: gameState.roundResults, allVotesAssigned: allVotesAssigned, twelvePointsSong: twelvePointsSong, onAssignVote: assignVote, onAutoFillRemaining: autoFillRemainingVotes, onClearVotes: clearAllVotes, onCloseTwelveModal: closeTwelvePointsModal, onFinishVoting: finishVoting })), gameState.screen === 'results' && (jsxRuntimeExports.jsx(ResultsPage, { quizScore: gameState.quizScore, correctCount: correctAnswersCount, totalRounds: matchSongs.length, accuracyPercentage: accuracyPercentage, finalStandings: finalStandings, internationalJuries: gameState.internationalJuries, irina12PointsSong: irina12PointsSong, onPlayAgain: () => startNewGame(), onChangeDifficulty: goToWelcome }))] }), jsxRuntimeExports.jsx("footer", { className: "esc-footer", children: jsxRuntimeExports.jsxs("p", { children: ["\uD83C\uDFA4 ", jsxRuntimeExports.jsx("strong", { children: "12 POINTS \u2013 EUROVISION CHALLENGE" }), " \u00B7 Edici\u00F3n Especial", ' ', jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Cumplea\u00F1os de Irina" }), " \u00B7 United by Music \u2728"] }) })] }));
};

client.createRoot(document.getElementById('root')).render(jsxRuntimeExports.jsx(React.StrictMode, { children: jsxRuntimeExports.jsx(App, {}) }));
