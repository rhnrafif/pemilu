function Hv(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Vv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var I={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hs=Symbol.for("react.element"),$v=Symbol.for("react.portal"),Kv=Symbol.for("react.fragment"),Gv=Symbol.for("react.strict_mode"),qv=Symbol.for("react.profiler"),Qv=Symbol.for("react.provider"),Yv=Symbol.for("react.context"),Jv=Symbol.for("react.forward_ref"),Xv=Symbol.for("react.suspense"),Zv=Symbol.for("react.memo"),e0=Symbol.for("react.lazy"),hh=Symbol.iterator;function t0(t){return t===null||typeof t!="object"?null:(t=hh&&t[hh]||t["@@iterator"],typeof t=="function"?t:null)}var Qp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yp=Object.assign,Jp={};function $r(t,e,n){this.props=t,this.context=e,this.refs=Jp,this.updater=n||Qp}$r.prototype.isReactComponent={};$r.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$r.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xp(){}Xp.prototype=$r.prototype;function fc(t,e,n){this.props=t,this.context=e,this.refs=Jp,this.updater=n||Qp}var pc=fc.prototype=new Xp;pc.constructor=fc;Yp(pc,$r.prototype);pc.isPureReactComponent=!0;var fh=Array.isArray,Zp=Object.prototype.hasOwnProperty,mc={current:null},em={key:!0,ref:!0,__self:!0,__source:!0};function tm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Zp.call(e,r)&&!em.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:hs,type:t,key:s,ref:o,props:i,_owner:mc.current}}function n0(t,e){return{$$typeof:hs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gc(t){return typeof t=="object"&&t!==null&&t.$$typeof===hs}function r0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ph=/\/+/g;function Xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?r0(""+t.key):e.toString(36)}function eo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case hs:case $v:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Xl(o,0):r,fh(i)?(n="",t!=null&&(n=t.replace(ph,"$&/")+"/"),eo(i,e,n,"",function(u){return u})):i!=null&&(gc(i)&&(i=n0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ph,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",fh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Xl(s,l);o+=eo(s,e,n,a,i)}else if(a=t0(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Xl(s,l++),o+=eo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ds(t,e,n){if(t==null)return t;var r=[],i=0;return eo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function i0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ae={current:null},to={transition:null},s0={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:to,ReactCurrentOwner:mc};j.Children={map:Ds,forEach:function(t,e,n){Ds(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ds(t,function(){e++}),e},toArray:function(t){return Ds(t,function(e){return e})||[]},only:function(t){if(!gc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=$r;j.Fragment=Kv;j.Profiler=qv;j.PureComponent=fc;j.StrictMode=Gv;j.Suspense=Xv;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s0;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Yp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Zp.call(e,a)&&!em.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:hs,type:t.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(t){return t={$$typeof:Yv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Qv,_context:t},t.Consumer=t};j.createElement=tm;j.createFactory=function(t){var e=tm.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:Jv,render:t}};j.isValidElement=gc;j.lazy=function(t){return{$$typeof:e0,_payload:{_status:-1,_result:t},_init:i0}};j.memo=function(t,e){return{$$typeof:Zv,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=to.transition;to.transition={};try{t()}finally{to.transition=e}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(t,e){return Ae.current.useCallback(t,e)};j.useContext=function(t){return Ae.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return Ae.current.useDeferredValue(t)};j.useEffect=function(t,e){return Ae.current.useEffect(t,e)};j.useId=function(){return Ae.current.useId()};j.useImperativeHandle=function(t,e,n){return Ae.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return Ae.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return Ae.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return Ae.current.useMemo(t,e)};j.useReducer=function(t,e,n){return Ae.current.useReducer(t,e,n)};j.useRef=function(t){return Ae.current.useRef(t)};j.useState=function(t){return Ae.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return Ae.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return Ae.current.useTransition()};j.version="18.2.0";(function(t){t.exports=j})(I);const o0=Vv(I.exports),Ha=Hv({__proto__:null,default:o0},[I.exports]);var Va={},nm={exports:{}},qe={},rm={exports:{}},im={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,L){var M=x.length;x.push(L);e:for(;0<M;){var oe=M-1>>>1,he=x[oe];if(0<i(he,L))x[oe]=L,x[M]=he,M=oe;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var L=x[0],M=x.pop();if(M!==L){x[0]=M;e:for(var oe=0,he=x.length,Os=he>>>1;oe<Os;){var Tn=2*(oe+1)-1,Jl=x[Tn],xn=Tn+1,As=x[xn];if(0>i(Jl,M))xn<he&&0>i(As,Jl)?(x[oe]=As,x[xn]=M,oe=xn):(x[oe]=Jl,x[Tn]=M,oe=Tn);else if(xn<he&&0>i(As,M))x[oe]=As,x[xn]=M,oe=xn;else break e}}return L}function i(x,L){var M=x.sortIndex-L.sortIndex;return M!==0?M:x.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,m=!1,g=!1,y=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(x){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=x)r(u),L.sortIndex=L.expirationTime,e(a,L);else break;L=n(u)}}function E(x){if(y=!1,_(x),!g)if(n(a)!==null)g=!0,Ql(k);else{var L=n(u);L!==null&&Yl(E,L.startTime-x)}}function k(x,L){g=!1,y&&(y=!1,f(O),O=-1),m=!0;var M=h;try{for(_(L),d=n(a);d!==null&&(!(d.expirationTime>L)||x&&!rt());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,h=d.priorityLevel;var he=oe(d.expirationTime<=L);L=t.unstable_now(),typeof he=="function"?d.callback=he:d===n(a)&&r(a),_(L)}else r(a);d=n(a)}if(d!==null)var Os=!0;else{var Tn=n(u);Tn!==null&&Yl(E,Tn.startTime-L),Os=!1}return Os}finally{d=null,h=M,m=!1}}var R=!1,P=null,O=-1,Y=5,U=-1;function rt(){return!(t.unstable_now()-U<Y)}function ni(){if(P!==null){var x=t.unstable_now();U=x;var L=!0;try{L=P(!0,x)}finally{L?ri():(R=!1,P=null)}}else R=!1}var ri;if(typeof p=="function")ri=function(){p(ni)};else if(typeof MessageChannel<"u"){var dh=new MessageChannel,Wv=dh.port2;dh.port1.onmessage=ni,ri=function(){Wv.postMessage(null)}}else ri=function(){N(ni,0)};function Ql(x){P=x,R||(R=!0,ri())}function Yl(x,L){O=N(function(){x(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,Ql(k))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(x){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var M=h;h=L;try{return x()}finally{h=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,L){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var M=h;h=x;try{return L()}finally{h=M}},t.unstable_scheduleCallback=function(x,L,M){var oe=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?oe+M:oe):M=oe,x){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=M+he,x={id:c++,callback:L,priorityLevel:x,startTime:M,expirationTime:he,sortIndex:-1},M>oe?(x.sortIndex=M,e(u,x),n(a)===null&&x===n(u)&&(y?(f(O),O=-1):y=!0,Yl(E,M-oe))):(x.sortIndex=he,e(a,x),g||m||(g=!0,Ql(k))),x},t.unstable_shouldYield=rt,t.unstable_wrapCallback=function(x){var L=h;return function(){var M=h;h=L;try{return x.apply(this,arguments)}finally{h=M}}}})(im);(function(t){t.exports=im})(rm);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm=I.exports,Ke=rm.exports;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var om=new Set,bi={};function er(t,e){Ar(t,e),Ar(t+"Capture",e)}function Ar(t,e){for(bi[t]=e,t=0;t<e.length;t++)om.add(e[t])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$a=Object.prototype.hasOwnProperty,l0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mh={},gh={};function a0(t){return $a.call(gh,t)?!0:$a.call(mh,t)?!1:l0.test(t)?gh[t]=!0:(mh[t]=!0,!1)}function u0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function c0(t,e,n,r){if(e===null||typeof e>"u"||u0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function De(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Se[t]=new De(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Se[e]=new De(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Se[t]=new De(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Se[t]=new De(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Se[t]=new De(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Se[t]=new De(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Se[t]=new De(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Se[t]=new De(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Se[t]=new De(t,5,!1,t.toLowerCase(),null,!1,!1)});var _c=/[\-:]([a-z])/g;function yc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_c,yc);Se[e]=new De(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_c,yc);Se[e]=new De(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_c,yc);Se[e]=new De(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Se[t]=new De(t,1,!1,t.toLowerCase(),null,!1,!1)});Se.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Se[t]=new De(t,1,!1,t.toLowerCase(),null,!0,!0)});function vc(t,e,n,r){var i=Se.hasOwnProperty(e)?Se[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(c0(e,n,i,r)&&(n=null),r||i===null?a0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Bt=sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ls=Symbol.for("react.element"),or=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),wc=Symbol.for("react.strict_mode"),Ka=Symbol.for("react.profiler"),lm=Symbol.for("react.provider"),am=Symbol.for("react.context"),Ec=Symbol.for("react.forward_ref"),Ga=Symbol.for("react.suspense"),qa=Symbol.for("react.suspense_list"),Sc=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),um=Symbol.for("react.offscreen"),_h=Symbol.iterator;function ii(t){return t===null||typeof t!="object"?null:(t=_h&&t[_h]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,Zl;function _i(t){if(Zl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zl=e&&e[1]||""}return`
`+Zl+t}var ea=!1;function ta(t,e){if(!t||ea)return"";ea=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ea=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_i(t):""}function d0(t){switch(t.tag){case 5:return _i(t.type);case 16:return _i("Lazy");case 13:return _i("Suspense");case 19:return _i("SuspenseList");case 0:case 2:case 15:return t=ta(t.type,!1),t;case 11:return t=ta(t.type.render,!1),t;case 1:return t=ta(t.type,!0),t;default:return""}}function Qa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case lr:return"Fragment";case or:return"Portal";case Ka:return"Profiler";case wc:return"StrictMode";case Ga:return"Suspense";case qa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case am:return(t.displayName||"Context")+".Consumer";case lm:return(t._context.displayName||"Context")+".Provider";case Ec:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sc:return e=t.displayName||null,e!==null?e:Qa(t.type)||"Memo";case Gt:e=t._payload,t=t._init;try{return Qa(t(e))}catch{}}return null}function h0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(e);case 8:return e===wc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function f0(t){var e=cm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ms(t){t._valueTracker||(t._valueTracker=f0(t))}function dm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=cm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ya(t,e){var n=e.checked;return re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function yh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hm(t,e){e=e.checked,e!=null&&vc(t,"checked",e,!1)}function Ja(t,e){hm(t,e);var n=yn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xa(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xa(t,e.type,yn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xa(t,e,n){(e!=="number"||yo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var yi=Array.isArray;function wr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Za(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(yi(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yn(n)}}function fm(t,e){var n=yn(e.value),r=yn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Eh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var bs,mm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(bs=bs||document.createElement("div"),bs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=bs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},p0=["Webkit","ms","Moz","O"];Object.keys(Si).forEach(function(t){p0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Si[e]=Si[t]})});function gm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Si.hasOwnProperty(t)&&Si[t]?(""+e).trim():e+"px"}function _m(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var m0=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tu(t,e){if(e){if(m0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function nu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ru=null;function Cc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var iu=null,Er=null,Sr=null;function Sh(t){if(t=ms(t)){if(typeof iu!="function")throw Error(S(280));var e=t.stateNode;e&&(e=gl(e),iu(t.stateNode,t.type,e))}}function ym(t){Er?Sr?Sr.push(t):Sr=[t]:Er=t}function vm(){if(Er){var t=Er,e=Sr;if(Sr=Er=null,Sh(t),e)for(t=0;t<e.length;t++)Sh(e[t])}}function wm(t,e){return t(e)}function Em(){}var na=!1;function Sm(t,e,n){if(na)return t(e,n);na=!0;try{return wm(t,e,n)}finally{na=!1,(Er!==null||Sr!==null)&&(Em(),vm())}}function Ui(t,e){var n=t.stateNode;if(n===null)return null;var r=gl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var su=!1;if(Dt)try{var si={};Object.defineProperty(si,"passive",{get:function(){su=!0}}),window.addEventListener("test",si,si),window.removeEventListener("test",si,si)}catch{su=!1}function g0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ci=!1,vo=null,wo=!1,ou=null,_0={onError:function(t){Ci=!0,vo=t}};function y0(t,e,n,r,i,s,o,l,a){Ci=!1,vo=null,g0.apply(_0,arguments)}function v0(t,e,n,r,i,s,o,l,a){if(y0.apply(this,arguments),Ci){if(Ci){var u=vo;Ci=!1,vo=null}else throw Error(S(198));wo||(wo=!0,ou=u)}}function tr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ch(t){if(tr(t)!==t)throw Error(S(188))}function w0(t){var e=t.alternate;if(!e){if(e=tr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ch(i),t;if(s===r)return Ch(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Im(t){return t=w0(t),t!==null?km(t):null}function km(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=km(t);if(e!==null)return e;t=t.sibling}return null}var Tm=Ke.unstable_scheduleCallback,Ih=Ke.unstable_cancelCallback,E0=Ke.unstable_shouldYield,S0=Ke.unstable_requestPaint,le=Ke.unstable_now,C0=Ke.unstable_getCurrentPriorityLevel,Ic=Ke.unstable_ImmediatePriority,xm=Ke.unstable_UserBlockingPriority,Eo=Ke.unstable_NormalPriority,I0=Ke.unstable_LowPriority,Nm=Ke.unstable_IdlePriority,hl=null,vt=null;function k0(t){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(hl,t,void 0,(t.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:N0,T0=Math.log,x0=Math.LN2;function N0(t){return t>>>=0,t===0?32:31-(T0(t)/x0|0)|0}var Fs=64,Us=4194304;function vi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function So(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=vi(l):(s&=o,s!==0&&(r=vi(s)))}else o=n&~i,o!==0?r=vi(o):s!==0&&(r=vi(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dt(e),i=1<<n,r|=t[n],e&=~i;return r}function R0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dt(s),l=1<<o,a=i[o];a===-1?((l&n)===0||(l&r)!==0)&&(i[o]=R0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function lu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rm(){var t=Fs;return Fs<<=1,(Fs&4194240)===0&&(Fs=64),t}function ra(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dt(e),t[e]=n}function O0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function kc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var V=0;function Pm(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Om,Tc,Am,Dm,Lm,au=!1,zs=[],sn=null,on=null,ln=null,zi=new Map,ji=new Map,Qt=[],A0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kh(t,e){switch(t){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":zi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(e.pointerId)}}function oi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ms(e),e!==null&&Tc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function D0(t,e,n,r,i){switch(e){case"focusin":return sn=oi(sn,t,e,n,r,i),!0;case"dragenter":return on=oi(on,t,e,n,r,i),!0;case"mouseover":return ln=oi(ln,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return zi.set(s,oi(zi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ji.set(s,oi(ji.get(s)||null,t,e,n,r,i)),!0}return!1}function Mm(t){var e=An(t.target);if(e!==null){var n=tr(e);if(n!==null){if(e=n.tag,e===13){if(e=Cm(n),e!==null){t.blockedOn=e,Lm(t.priority,function(){Am(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function no(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=uu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ru=r,n.target.dispatchEvent(r),ru=null}else return e=ms(n),e!==null&&Tc(e),t.blockedOn=n,!1;e.shift()}return!0}function Th(t,e,n){no(t)&&n.delete(e)}function L0(){au=!1,sn!==null&&no(sn)&&(sn=null),on!==null&&no(on)&&(on=null),ln!==null&&no(ln)&&(ln=null),zi.forEach(Th),ji.forEach(Th)}function li(t,e){t.blockedOn===e&&(t.blockedOn=null,au||(au=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,L0)))}function Bi(t){function e(i){return li(i,t)}if(0<zs.length){li(zs[0],t);for(var n=1;n<zs.length;n++){var r=zs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(sn!==null&&li(sn,t),on!==null&&li(on,t),ln!==null&&li(ln,t),zi.forEach(e),ji.forEach(e),n=0;n<Qt.length;n++)r=Qt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)Mm(n),n.blockedOn===null&&Qt.shift()}var Cr=Bt.ReactCurrentBatchConfig,Co=!0;function M0(t,e,n,r){var i=V,s=Cr.transition;Cr.transition=null;try{V=1,xc(t,e,n,r)}finally{V=i,Cr.transition=s}}function b0(t,e,n,r){var i=V,s=Cr.transition;Cr.transition=null;try{V=4,xc(t,e,n,r)}finally{V=i,Cr.transition=s}}function xc(t,e,n,r){if(Co){var i=uu(t,e,n,r);if(i===null)fa(t,e,r,Io,n),kh(t,r);else if(D0(i,t,e,n,r))r.stopPropagation();else if(kh(t,r),e&4&&-1<A0.indexOf(t)){for(;i!==null;){var s=ms(i);if(s!==null&&Om(s),s=uu(t,e,n,r),s===null&&fa(t,e,r,Io,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fa(t,e,r,null,n)}}var Io=null;function uu(t,e,n,r){if(Io=null,t=Cc(r),t=An(t),t!==null)if(e=tr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Io=t,null}function bm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C0()){case Ic:return 1;case xm:return 4;case Eo:case I0:return 16;case Nm:return 536870912;default:return 16}default:return 16}}var tn=null,Nc=null,ro=null;function Fm(){if(ro)return ro;var t,e=Nc,n=e.length,r,i="value"in tn?tn.value:tn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ro=i.slice(t,1<r?1-r:void 0)}function io(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function js(){return!0}function xh(){return!1}function Qe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?js:xh,this.isPropagationStopped=xh,this}return re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=js)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=js)},persist:function(){},isPersistent:js}),e}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rc=Qe(Kr),ps=re({},Kr,{view:0,detail:0}),F0=Qe(ps),ia,sa,ai,fl=re({},ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ai&&(ai&&t.type==="mousemove"?(ia=t.screenX-ai.screenX,sa=t.screenY-ai.screenY):sa=ia=0,ai=t),ia)},movementY:function(t){return"movementY"in t?t.movementY:sa}}),Nh=Qe(fl),U0=re({},fl,{dataTransfer:0}),z0=Qe(U0),j0=re({},ps,{relatedTarget:0}),oa=Qe(j0),B0=re({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),W0=Qe(B0),H0=re({},Kr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),V0=Qe(H0),$0=re({},Kr,{data:0}),Rh=Qe($0),K0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=q0[t])?!!e[t]:!1}function Pc(){return Q0}var Y0=re({},ps,{key:function(t){if(t.key){var e=K0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?G0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pc,charCode:function(t){return t.type==="keypress"?io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),J0=Qe(Y0),X0=re({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ph=Qe(X0),Z0=re({},ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pc}),ew=Qe(Z0),tw=re({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),nw=Qe(tw),rw=re({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iw=Qe(rw),sw=[9,13,27,32],Oc=Dt&&"CompositionEvent"in window,Ii=null;Dt&&"documentMode"in document&&(Ii=document.documentMode);var ow=Dt&&"TextEvent"in window&&!Ii,Um=Dt&&(!Oc||Ii&&8<Ii&&11>=Ii),Oh=String.fromCharCode(32),Ah=!1;function zm(t,e){switch(t){case"keyup":return sw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function lw(t,e){switch(t){case"compositionend":return jm(e);case"keypress":return e.which!==32?null:(Ah=!0,Oh);case"textInput":return t=e.data,t===Oh&&Ah?null:t;default:return null}}function aw(t,e){if(ar)return t==="compositionend"||!Oc&&zm(t,e)?(t=Fm(),ro=Nc=tn=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Um&&e.locale!=="ko"?null:e.data;default:return null}}var uw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uw[t.type]:e==="textarea"}function Bm(t,e,n,r){ym(r),e=ko(e,"onChange"),0<e.length&&(n=new Rc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ki=null,Wi=null;function cw(t){Xm(t,0)}function pl(t){var e=dr(t);if(dm(e))return t}function dw(t,e){if(t==="change")return e}var Wm=!1;if(Dt){var la;if(Dt){var aa="oninput"in document;if(!aa){var Lh=document.createElement("div");Lh.setAttribute("oninput","return;"),aa=typeof Lh.oninput=="function"}la=aa}else la=!1;Wm=la&&(!document.documentMode||9<document.documentMode)}function Mh(){ki&&(ki.detachEvent("onpropertychange",Hm),Wi=ki=null)}function Hm(t){if(t.propertyName==="value"&&pl(Wi)){var e=[];Bm(e,Wi,t,Cc(t)),Sm(cw,e)}}function hw(t,e,n){t==="focusin"?(Mh(),ki=e,Wi=n,ki.attachEvent("onpropertychange",Hm)):t==="focusout"&&Mh()}function fw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pl(Wi)}function pw(t,e){if(t==="click")return pl(e)}function mw(t,e){if(t==="input"||t==="change")return pl(e)}function gw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pt=typeof Object.is=="function"?Object.is:gw;function Hi(t,e){if(pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$a.call(e,i)||!pt(t[i],e[i]))return!1}return!0}function bh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fh(t,e){var n=bh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bh(n)}}function Vm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $m(){for(var t=window,e=yo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yo(t.document)}return e}function Ac(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _w(t){var e=$m(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vm(n.ownerDocument.documentElement,n)){if(r!==null&&Ac(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Fh(n,s);var o=Fh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yw=Dt&&"documentMode"in document&&11>=document.documentMode,ur=null,cu=null,Ti=null,du=!1;function Uh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;du||ur==null||ur!==yo(r)||(r=ur,"selectionStart"in r&&Ac(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ti&&Hi(Ti,r)||(Ti=r,r=ko(cu,"onSelect"),0<r.length&&(e=new Rc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ur)))}function Bs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cr={animationend:Bs("Animation","AnimationEnd"),animationiteration:Bs("Animation","AnimationIteration"),animationstart:Bs("Animation","AnimationStart"),transitionend:Bs("Transition","TransitionEnd")},ua={},Km={};Dt&&(Km=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function ml(t){if(ua[t])return ua[t];if(!cr[t])return t;var e=cr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Km)return ua[t]=e[n];return t}var Gm=ml("animationend"),qm=ml("animationiteration"),Qm=ml("animationstart"),Ym=ml("transitionend"),Jm=new Map,zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(t,e){Jm.set(t,e),er(e,[t])}for(var ca=0;ca<zh.length;ca++){var da=zh[ca],vw=da.toLowerCase(),ww=da[0].toUpperCase()+da.slice(1);Sn(vw,"on"+ww)}Sn(Gm,"onAnimationEnd");Sn(qm,"onAnimationIteration");Sn(Qm,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(Ym,"onTransitionEnd");Ar("onMouseEnter",["mouseout","mouseover"]);Ar("onMouseLeave",["mouseout","mouseover"]);Ar("onPointerEnter",["pointerout","pointerover"]);Ar("onPointerLeave",["pointerout","pointerover"]);er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));er("onBeforeInput",["compositionend","keypress","textInput","paste"]);er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ew=new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));function jh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,v0(r,e,void 0,t),t.currentTarget=null}function Xm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;jh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;jh(i,l,u),s=a}}}if(wo)throw t=ou,wo=!1,ou=null,t}function J(t,e){var n=e[gu];n===void 0&&(n=e[gu]=new Set);var r=t+"__bubble";n.has(r)||(Zm(e,t,2,!1),n.add(r))}function ha(t,e,n){var r=0;e&&(r|=4),Zm(n,t,r,e)}var Ws="_reactListening"+Math.random().toString(36).slice(2);function Vi(t){if(!t[Ws]){t[Ws]=!0,om.forEach(function(n){n!=="selectionchange"&&(Ew.has(n)||ha(n,!1,t),ha(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ws]||(e[Ws]=!0,ha("selectionchange",!1,e))}}function Zm(t,e,n,r){switch(bm(e)){case 1:var i=M0;break;case 4:i=b0;break;default:i=xc}n=i.bind(null,e,n,t),i=void 0,!su||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fa(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=An(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Sm(function(){var u=s,c=Cc(n),d=[];e:{var h=Jm.get(t);if(h!==void 0){var m=Rc,g=t;switch(t){case"keypress":if(io(n)===0)break e;case"keydown":case"keyup":m=J0;break;case"focusin":g="focus",m=oa;break;case"focusout":g="blur",m=oa;break;case"beforeblur":case"afterblur":m=oa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Nh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ew;break;case Gm:case qm:case Qm:m=W0;break;case Ym:m=nw;break;case"scroll":m=F0;break;case"wheel":m=iw;break;case"copy":case"cut":case"paste":m=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ph}var y=(e&4)!==0,N=!y&&t==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var p=u,_;p!==null;){_=p;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,f!==null&&(E=Ui(p,f),E!=null&&y.push($i(p,E,_)))),N)break;p=p.return}0<y.length&&(h=new m(h,g,null,n,c),d.push({event:h,listeners:y}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==ru&&(g=n.relatedTarget||n.fromElement)&&(An(g)||g[Lt]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?An(g):null,g!==null&&(N=tr(g),g!==N||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(y=Nh,E="onMouseLeave",f="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=Ph,E="onPointerLeave",f="onPointerEnter",p="pointer"),N=m==null?h:dr(m),_=g==null?h:dr(g),h=new y(E,p+"leave",m,n,c),h.target=N,h.relatedTarget=_,E=null,An(c)===u&&(y=new y(f,p+"enter",g,n,c),y.target=_,y.relatedTarget=N,E=y),N=E,m&&g)t:{for(y=m,f=g,p=0,_=y;_;_=rr(_))p++;for(_=0,E=f;E;E=rr(E))_++;for(;0<p-_;)y=rr(y),p--;for(;0<_-p;)f=rr(f),_--;for(;p--;){if(y===f||f!==null&&y===f.alternate)break t;y=rr(y),f=rr(f)}y=null}else y=null;m!==null&&Bh(d,h,m,y,!1),g!==null&&N!==null&&Bh(d,N,g,y,!0)}}e:{if(h=u?dr(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var k=dw;else if(Dh(h))if(Wm)k=mw;else{k=fw;var R=hw}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=pw);if(k&&(k=k(t,u))){Bm(d,k,n,c);break e}R&&R(t,h,u),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Xa(h,"number",h.value)}switch(R=u?dr(u):window,t){case"focusin":(Dh(R)||R.contentEditable==="true")&&(ur=R,cu=u,Ti=null);break;case"focusout":Ti=cu=ur=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,Uh(d,n,c);break;case"selectionchange":if(yw)break;case"keydown":case"keyup":Uh(d,n,c)}var P;if(Oc)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ar?zm(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Um&&n.locale!=="ko"&&(ar||O!=="onCompositionStart"?O==="onCompositionEnd"&&ar&&(P=Fm()):(tn=c,Nc="value"in tn?tn.value:tn.textContent,ar=!0)),R=ko(u,O),0<R.length&&(O=new Rh(O,t,null,n,c),d.push({event:O,listeners:R}),P?O.data=P:(P=jm(n),P!==null&&(O.data=P)))),(P=ow?lw(t,n):aw(t,n))&&(u=ko(u,"onBeforeInput"),0<u.length&&(c=new Rh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=P))}Xm(d,e)})}function $i(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ko(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ui(t,n),s!=null&&r.unshift($i(t,s,i)),s=Ui(t,e),s!=null&&r.push($i(t,s,i))),t=t.return}return r}function rr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ui(n,s),a!=null&&o.unshift($i(n,a,l))):i||(a=Ui(n,s),a!=null&&o.push($i(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Sw=/\r\n?/g,Cw=/\u0000|\uFFFD/g;function Wh(t){return(typeof t=="string"?t:""+t).replace(Sw,`
`).replace(Cw,"")}function Hs(t,e,n){if(e=Wh(e),Wh(t)!==e&&n)throw Error(S(425))}function To(){}var hu=null,fu=null;function pu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,Iw=typeof clearTimeout=="function"?clearTimeout:void 0,Hh=typeof Promise=="function"?Promise:void 0,kw=typeof queueMicrotask=="function"?queueMicrotask:typeof Hh<"u"?function(t){return Hh.resolve(null).then(t).catch(Tw)}:mu;function Tw(t){setTimeout(function(){throw t})}function pa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Bi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bi(e)}function an(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),yt="__reactFiber$"+Gr,Ki="__reactProps$"+Gr,Lt="__reactContainer$"+Gr,gu="__reactEvents$"+Gr,xw="__reactListeners$"+Gr,Nw="__reactHandles$"+Gr;function An(t){var e=t[yt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Lt]||n[yt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vh(t);t!==null;){if(n=t[yt])return n;t=Vh(t)}return e}t=n,n=t.parentNode}return null}function ms(t){return t=t[yt]||t[Lt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function dr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function gl(t){return t[Ki]||null}var _u=[],hr=-1;function Cn(t){return{current:t}}function Z(t){0>hr||(t.current=_u[hr],_u[hr]=null,hr--)}function Q(t,e){hr++,_u[hr]=t.current,t.current=e}var vn={},Ne=Cn(vn),Ue=Cn(!1),Wn=vn;function Dr(t,e){var n=t.type.contextTypes;if(!n)return vn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ze(t){return t=t.childContextTypes,t!=null}function xo(){Z(Ue),Z(Ne)}function $h(t,e,n){if(Ne.current!==vn)throw Error(S(168));Q(Ne,e),Q(Ue,n)}function eg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,h0(t)||"Unknown",i));return re({},n,r)}function No(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vn,Wn=Ne.current,Q(Ne,t),Q(Ue,Ue.current),!0}function Kh(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=eg(t,e,Wn),r.__reactInternalMemoizedMergedChildContext=t,Z(Ue),Z(Ne),Q(Ne,t)):Z(Ue),Q(Ue,n)}var It=null,_l=!1,ma=!1;function tg(t){It===null?It=[t]:It.push(t)}function Rw(t){_l=!0,tg(t)}function In(){if(!ma&&It!==null){ma=!0;var t=0,e=V;try{var n=It;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}It=null,_l=!1}catch(i){throw It!==null&&(It=It.slice(t+1)),Tm(Ic,In),i}finally{V=e,ma=!1}}return null}var fr=[],pr=0,Ro=null,Po=0,Ye=[],Je=0,Hn=null,kt=1,Tt="";function Nn(t,e){fr[pr++]=Po,fr[pr++]=Ro,Ro=t,Po=e}function ng(t,e,n){Ye[Je++]=kt,Ye[Je++]=Tt,Ye[Je++]=Hn,Hn=t;var r=kt;t=Tt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var s=32-dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kt=1<<32-dt(e)+i|n<<i|r,Tt=s+t}else kt=1<<s|n<<i|r,Tt=t}function Dc(t){t.return!==null&&(Nn(t,1),ng(t,1,0))}function Lc(t){for(;t===Ro;)Ro=fr[--pr],fr[pr]=null,Po=fr[--pr],fr[pr]=null;for(;t===Hn;)Hn=Ye[--Je],Ye[Je]=null,Tt=Ye[--Je],Ye[Je]=null,kt=Ye[--Je],Ye[Je]=null}var $e=null,Ve=null,ee=!1,lt=null;function rg(t,e){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$e=t,Ve=an(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$e=t,Ve=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hn!==null?{id:kt,overflow:Tt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$e=t,Ve=null,!0):!1;default:return!1}}function yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vu(t){if(ee){var e=Ve;if(e){var n=e;if(!Gh(t,e)){if(yu(t))throw Error(S(418));e=an(n.nextSibling);var r=$e;e&&Gh(t,e)?rg(r,n):(t.flags=t.flags&-4097|2,ee=!1,$e=t)}}else{if(yu(t))throw Error(S(418));t.flags=t.flags&-4097|2,ee=!1,$e=t}}}function qh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$e=t}function Vs(t){if(t!==$e)return!1;if(!ee)return qh(t),ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pu(t.type,t.memoizedProps)),e&&(e=Ve)){if(yu(t))throw ig(),Error(S(418));for(;e;)rg(t,e),e=an(e.nextSibling)}if(qh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ve=an(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ve=null}}else Ve=$e?an(t.stateNode.nextSibling):null;return!0}function ig(){for(var t=Ve;t;)t=an(t.nextSibling)}function Lr(){Ve=$e=null,ee=!1}function Mc(t){lt===null?lt=[t]:lt.push(t)}var Pw=Bt.ReactCurrentBatchConfig;function st(t,e){if(t&&t.defaultProps){e=re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Oo=Cn(null),Ao=null,mr=null,bc=null;function Fc(){bc=mr=Ao=null}function Uc(t){var e=Oo.current;Z(Oo),t._currentValue=e}function wu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ir(t,e){Ao=t,bc=mr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Me=!0),t.firstContext=null)}function tt(t){var e=t._currentValue;if(bc!==t)if(t={context:t,memoizedValue:e,next:null},mr===null){if(Ao===null)throw Error(S(308));mr=t,Ao.dependencies={lanes:0,firstContext:t}}else mr=mr.next=t;return e}var Dn=null;function zc(t){Dn===null?Dn=[t]:Dn.push(t)}function sg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,zc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mt(t,r)}function Mt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qt=!1;function jc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function og(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function un(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(B&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mt(t,n)}return i=r.interleaved,i===null?(e.next=e,zc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mt(t,n)}function so(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kc(t,n)}}function Qh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Do(t,e,n,r){var i=t.updateQueue;qt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,m=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=t,y=l;switch(h=e,m=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(m,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(m,d,h):g,h==null)break e;d=re({},d,h);break e;case 2:qt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else m={eventTime:m,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=m,a=d):c=c.next=m,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);$n|=o,t.lanes=o,t.memoizedState=d}}function Yh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var lg=new sm.Component().refs;function Eu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yl={isMounted:function(t){return(t=t._reactInternals)?tr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Oe(),i=dn(t),s=Pt(r,i);s.payload=e,n!=null&&(s.callback=n),e=un(t,s,i),e!==null&&(ht(e,t,i,r),so(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Oe(),i=dn(t),s=Pt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=un(t,s,i),e!==null&&(ht(e,t,i,r),so(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Oe(),r=dn(t),i=Pt(n,r);i.tag=2,e!=null&&(i.callback=e),e=un(t,i,r),e!==null&&(ht(e,t,r,n),so(e,t,r))}};function Jh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Hi(n,r)||!Hi(i,s):!0}function ag(t,e,n){var r=!1,i=vn,s=e.contextType;return typeof s=="object"&&s!==null?s=tt(s):(i=ze(e)?Wn:Ne.current,r=e.contextTypes,s=(r=r!=null)?Dr(t,i):vn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&yl.enqueueReplaceState(e,e.state,null)}function Su(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=lg,jc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tt(s):(s=ze(e)?Wn:Ne.current,i.context=Dr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Eu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&yl.enqueueReplaceState(i,i.state,null),Do(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ui(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===lg&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function $s(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zh(t){var e=t._init;return e(t._payload)}function ug(t){function e(f,p){if(t){var _=f.deletions;_===null?(f.deletions=[p],f.flags|=16):_.push(p)}}function n(f,p){if(!t)return null;for(;p!==null;)e(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function i(f,p){return f=hn(f,p),f.index=0,f.sibling=null,f}function s(f,p,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<p?(f.flags|=2,p):_):(f.flags|=2,p)):(f.flags|=1048576,p)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function l(f,p,_,E){return p===null||p.tag!==6?(p=Sa(_,f.mode,E),p.return=f,p):(p=i(p,_),p.return=f,p)}function a(f,p,_,E){var k=_.type;return k===lr?c(f,p,_.props.children,E,_.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Gt&&Zh(k)===p.type)?(E=i(p,_.props),E.ref=ui(f,p,_),E.return=f,E):(E=ho(_.type,_.key,_.props,null,f.mode,E),E.ref=ui(f,p,_),E.return=f,E)}function u(f,p,_,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=Ca(_,f.mode,E),p.return=f,p):(p=i(p,_.children||[]),p.return=f,p)}function c(f,p,_,E,k){return p===null||p.tag!==7?(p=Un(_,f.mode,E,k),p.return=f,p):(p=i(p,_),p.return=f,p)}function d(f,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Sa(""+p,f.mode,_),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ls:return _=ho(p.type,p.key,p.props,null,f.mode,_),_.ref=ui(f,null,p),_.return=f,_;case or:return p=Ca(p,f.mode,_),p.return=f,p;case Gt:var E=p._init;return d(f,E(p._payload),_)}if(yi(p)||ii(p))return p=Un(p,f.mode,_,null),p.return=f,p;$s(f,p)}return null}function h(f,p,_,E){var k=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return k!==null?null:l(f,p,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ls:return _.key===k?a(f,p,_,E):null;case or:return _.key===k?u(f,p,_,E):null;case Gt:return k=_._init,h(f,p,k(_._payload),E)}if(yi(_)||ii(_))return k!==null?null:c(f,p,_,E,null);$s(f,_)}return null}function m(f,p,_,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(_)||null,l(p,f,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ls:return f=f.get(E.key===null?_:E.key)||null,a(p,f,E,k);case or:return f=f.get(E.key===null?_:E.key)||null,u(p,f,E,k);case Gt:var R=E._init;return m(f,p,_,R(E._payload),k)}if(yi(E)||ii(E))return f=f.get(_)||null,c(p,f,E,k,null);$s(p,E)}return null}function g(f,p,_,E){for(var k=null,R=null,P=p,O=p=0,Y=null;P!==null&&O<_.length;O++){P.index>O?(Y=P,P=null):Y=P.sibling;var U=h(f,P,_[O],E);if(U===null){P===null&&(P=Y);break}t&&P&&U.alternate===null&&e(f,P),p=s(U,p,O),R===null?k=U:R.sibling=U,R=U,P=Y}if(O===_.length)return n(f,P),ee&&Nn(f,O),k;if(P===null){for(;O<_.length;O++)P=d(f,_[O],E),P!==null&&(p=s(P,p,O),R===null?k=P:R.sibling=P,R=P);return ee&&Nn(f,O),k}for(P=r(f,P);O<_.length;O++)Y=m(P,f,O,_[O],E),Y!==null&&(t&&Y.alternate!==null&&P.delete(Y.key===null?O:Y.key),p=s(Y,p,O),R===null?k=Y:R.sibling=Y,R=Y);return t&&P.forEach(function(rt){return e(f,rt)}),ee&&Nn(f,O),k}function y(f,p,_,E){var k=ii(_);if(typeof k!="function")throw Error(S(150));if(_=k.call(_),_==null)throw Error(S(151));for(var R=k=null,P=p,O=p=0,Y=null,U=_.next();P!==null&&!U.done;O++,U=_.next()){P.index>O?(Y=P,P=null):Y=P.sibling;var rt=h(f,P,U.value,E);if(rt===null){P===null&&(P=Y);break}t&&P&&rt.alternate===null&&e(f,P),p=s(rt,p,O),R===null?k=rt:R.sibling=rt,R=rt,P=Y}if(U.done)return n(f,P),ee&&Nn(f,O),k;if(P===null){for(;!U.done;O++,U=_.next())U=d(f,U.value,E),U!==null&&(p=s(U,p,O),R===null?k=U:R.sibling=U,R=U);return ee&&Nn(f,O),k}for(P=r(f,P);!U.done;O++,U=_.next())U=m(P,f,O,U.value,E),U!==null&&(t&&U.alternate!==null&&P.delete(U.key===null?O:U.key),p=s(U,p,O),R===null?k=U:R.sibling=U,R=U);return t&&P.forEach(function(ni){return e(f,ni)}),ee&&Nn(f,O),k}function N(f,p,_,E){if(typeof _=="object"&&_!==null&&_.type===lr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ls:e:{for(var k=_.key,R=p;R!==null;){if(R.key===k){if(k=_.type,k===lr){if(R.tag===7){n(f,R.sibling),p=i(R,_.props.children),p.return=f,f=p;break e}}else if(R.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Gt&&Zh(k)===R.type){n(f,R.sibling),p=i(R,_.props),p.ref=ui(f,R,_),p.return=f,f=p;break e}n(f,R);break}else e(f,R);R=R.sibling}_.type===lr?(p=Un(_.props.children,f.mode,E,_.key),p.return=f,f=p):(E=ho(_.type,_.key,_.props,null,f.mode,E),E.ref=ui(f,p,_),E.return=f,f=E)}return o(f);case or:e:{for(R=_.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(f,p.sibling),p=i(p,_.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else e(f,p);p=p.sibling}p=Ca(_,f.mode,E),p.return=f,f=p}return o(f);case Gt:return R=_._init,N(f,p,R(_._payload),E)}if(yi(_))return g(f,p,_,E);if(ii(_))return y(f,p,_,E);$s(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(f,p.sibling),p=i(p,_),p.return=f,f=p):(n(f,p),p=Sa(_,f.mode,E),p.return=f,f=p),o(f)):n(f,p)}return N}var Mr=ug(!0),cg=ug(!1),gs={},wt=Cn(gs),Gi=Cn(gs),qi=Cn(gs);function Ln(t){if(t===gs)throw Error(S(174));return t}function Bc(t,e){switch(Q(qi,e),Q(Gi,t),Q(wt,gs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:eu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=eu(e,t)}Z(wt),Q(wt,e)}function br(){Z(wt),Z(Gi),Z(qi)}function dg(t){Ln(qi.current);var e=Ln(wt.current),n=eu(e,t.type);e!==n&&(Q(Gi,t),Q(wt,n))}function Wc(t){Gi.current===t&&(Z(wt),Z(Gi))}var te=Cn(0);function Lo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ga=[];function Hc(){for(var t=0;t<ga.length;t++)ga[t]._workInProgressVersionPrimary=null;ga.length=0}var oo=Bt.ReactCurrentDispatcher,_a=Bt.ReactCurrentBatchConfig,Vn=0,ne=null,ue=null,pe=null,Mo=!1,xi=!1,Qi=0,Ow=0;function Ce(){throw Error(S(321))}function Vc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pt(t[n],e[n]))return!1;return!0}function $c(t,e,n,r,i,s){if(Vn=s,ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,oo.current=t===null||t.memoizedState===null?Mw:bw,t=n(r,i),xi){s=0;do{if(xi=!1,Qi=0,25<=s)throw Error(S(301));s+=1,pe=ue=null,e.updateQueue=null,oo.current=Fw,t=n(r,i)}while(xi)}if(oo.current=bo,e=ue!==null&&ue.next!==null,Vn=0,pe=ue=ne=null,Mo=!1,e)throw Error(S(300));return t}function Kc(){var t=Qi!==0;return Qi=0,t}function _t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ne.memoizedState=pe=t:pe=pe.next=t,pe}function nt(){if(ue===null){var t=ne.alternate;t=t!==null?t.memoizedState:null}else t=ue.next;var e=pe===null?ne.memoizedState:pe.next;if(e!==null)pe=e,ue=t;else{if(t===null)throw Error(S(310));ue=t,t={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},pe===null?ne.memoizedState=pe=t:pe=pe.next=t}return pe}function Yi(t,e){return typeof e=="function"?e(t):e}function ya(t){var e=nt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Vn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,ne.lanes|=c,$n|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,pt(r,e.memoizedState)||(Me=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ne.lanes|=s,$n|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function va(t){var e=nt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);pt(s,e.memoizedState)||(Me=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function hg(){}function fg(t,e){var n=ne,r=nt(),i=e(),s=!pt(r.memoizedState,i);if(s&&(r.memoizedState=i,Me=!0),r=r.queue,Gc(gg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Ji(9,mg.bind(null,n,r,i,e),void 0,null),_e===null)throw Error(S(349));(Vn&30)!==0||pg(n,e,i)}return i}function pg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mg(t,e,n,r){e.value=n,e.getSnapshot=r,_g(e)&&yg(t)}function gg(t,e,n){return n(function(){_g(e)&&yg(t)})}function _g(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pt(t,n)}catch{return!0}}function yg(t){var e=Mt(t,1);e!==null&&ht(e,t,1,-1)}function ef(t){var e=_t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:t},e.queue=t,t=t.dispatch=Lw.bind(null,ne,t),[e.memoizedState,t]}function Ji(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function vg(){return nt().memoizedState}function lo(t,e,n,r){var i=_t();ne.flags|=t,i.memoizedState=Ji(1|e,n,void 0,r===void 0?null:r)}function vl(t,e,n,r){var i=nt();r=r===void 0?null:r;var s=void 0;if(ue!==null){var o=ue.memoizedState;if(s=o.destroy,r!==null&&Vc(r,o.deps)){i.memoizedState=Ji(e,n,s,r);return}}ne.flags|=t,i.memoizedState=Ji(1|e,n,s,r)}function tf(t,e){return lo(8390656,8,t,e)}function Gc(t,e){return vl(2048,8,t,e)}function wg(t,e){return vl(4,2,t,e)}function Eg(t,e){return vl(4,4,t,e)}function Sg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cg(t,e,n){return n=n!=null?n.concat([t]):null,vl(4,4,Sg.bind(null,e,t),n)}function qc(){}function Ig(t,e){var n=nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function kg(t,e){var n=nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Tg(t,e,n){return(Vn&21)===0?(t.baseState&&(t.baseState=!1,Me=!0),t.memoizedState=n):(pt(n,e)||(n=Rm(),ne.lanes|=n,$n|=n,t.baseState=!0),e)}function Aw(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=_a.transition;_a.transition={};try{t(!1),e()}finally{V=n,_a.transition=r}}function xg(){return nt().memoizedState}function Dw(t,e,n){var r=dn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ng(t))Rg(e,n);else if(n=sg(t,e,n,r),n!==null){var i=Oe();ht(n,t,r,i),Pg(n,e,r)}}function Lw(t,e,n){var r=dn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ng(t))Rg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,pt(l,o)){var a=e.interleaved;a===null?(i.next=i,zc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=sg(t,e,i,r),n!==null&&(i=Oe(),ht(n,t,r,i),Pg(n,e,r))}}function Ng(t){var e=t.alternate;return t===ne||e!==null&&e===ne}function Rg(t,e){xi=Mo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pg(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kc(t,n)}}var bo={readContext:tt,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},Mw={readContext:tt,useCallback:function(t,e){return _t().memoizedState=[t,e===void 0?null:e],t},useContext:tt,useEffect:tf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,lo(4194308,4,Sg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return lo(4194308,4,t,e)},useInsertionEffect:function(t,e){return lo(4,2,t,e)},useMemo:function(t,e){var n=_t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Dw.bind(null,ne,t),[r.memoizedState,t]},useRef:function(t){var e=_t();return t={current:t},e.memoizedState=t},useState:ef,useDebugValue:qc,useDeferredValue:function(t){return _t().memoizedState=t},useTransition:function(){var t=ef(!1),e=t[0];return t=Aw.bind(null,t[1]),_t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ne,i=_t();if(ee){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),_e===null)throw Error(S(349));(Vn&30)!==0||pg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,tf(gg.bind(null,r,s,t),[t]),r.flags|=2048,Ji(9,mg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=_t(),e=_e.identifierPrefix;if(ee){var n=Tt,r=kt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ow++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bw={readContext:tt,useCallback:Ig,useContext:tt,useEffect:Gc,useImperativeHandle:Cg,useInsertionEffect:wg,useLayoutEffect:Eg,useMemo:kg,useReducer:ya,useRef:vg,useState:function(){return ya(Yi)},useDebugValue:qc,useDeferredValue:function(t){var e=nt();return Tg(e,ue.memoizedState,t)},useTransition:function(){var t=ya(Yi)[0],e=nt().memoizedState;return[t,e]},useMutableSource:hg,useSyncExternalStore:fg,useId:xg,unstable_isNewReconciler:!1},Fw={readContext:tt,useCallback:Ig,useContext:tt,useEffect:Gc,useImperativeHandle:Cg,useInsertionEffect:wg,useLayoutEffect:Eg,useMemo:kg,useReducer:va,useRef:vg,useState:function(){return va(Yi)},useDebugValue:qc,useDeferredValue:function(t){var e=nt();return ue===null?e.memoizedState=t:Tg(e,ue.memoizedState,t)},useTransition:function(){var t=va(Yi)[0],e=nt().memoizedState;return[t,e]},useMutableSource:hg,useSyncExternalStore:fg,useId:xg,unstable_isNewReconciler:!1};function Fr(t,e){try{var n="",r=e;do n+=d0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function wa(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Cu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Uw=typeof WeakMap=="function"?WeakMap:Map;function Og(t,e,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Uo||(Uo=!0,Du=r),Cu(t,e)},n}function Ag(t,e,n){n=Pt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Cu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cu(t,e),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function nf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Uw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Xw.bind(null,t,e,n),e.then(t,t))}function rf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sf(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pt(-1,1),e.tag=2,un(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var zw=Bt.ReactCurrentOwner,Me=!1;function Pe(t,e,n,r){e.child=t===null?cg(e,null,n,r):Mr(e,t.child,n,r)}function of(t,e,n,r,i){n=n.render;var s=e.ref;return Ir(e,i),r=$c(t,e,n,r,s,i),n=Kc(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bt(t,e,i)):(ee&&n&&Dc(e),e.flags|=1,Pe(t,e,r,i),e.child)}function lf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!nd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Dg(t,e,s,r,i)):(t=ho(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Hi,n(o,r)&&t.ref===e.ref)return bt(t,e,i)}return e.flags|=1,t=hn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Dg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Hi(s,r)&&t.ref===e.ref)if(Me=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Me=!0);else return e.lanes=t.lanes,bt(t,e,i)}return Iu(t,e,n,r,i)}function Lg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(_r,He),He|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(_r,He),He|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(_r,He),He|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(_r,He),He|=r;return Pe(t,e,i,n),e.child}function Mg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Iu(t,e,n,r,i){var s=ze(n)?Wn:Ne.current;return s=Dr(e,s),Ir(e,i),n=$c(t,e,n,r,s,i),r=Kc(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bt(t,e,i)):(ee&&r&&Dc(e),e.flags|=1,Pe(t,e,n,i),e.child)}function af(t,e,n,r,i){if(ze(n)){var s=!0;No(e)}else s=!1;if(Ir(e,i),e.stateNode===null)ao(t,e),ag(e,n,r),Su(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=ze(n)?Wn:Ne.current,u=Dr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Xh(e,o,r,u),qt=!1;var h=e.memoizedState;o.state=h,Do(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Ue.current||qt?(typeof c=="function"&&(Eu(e,n,c,r),a=e.memoizedState),(l=qt||Jh(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,og(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:st(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=tt(a):(a=ze(n)?Wn:Ne.current,a=Dr(e,a));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&Xh(e,o,r,a),qt=!1,h=e.memoizedState,o.state=h,Do(e,r,o,i);var g=e.memoizedState;l!==d||h!==g||Ue.current||qt?(typeof m=="function"&&(Eu(e,n,m,r),g=e.memoizedState),(u=qt||Jh(e,n,u,r,h,g,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return ku(t,e,n,r,s,i)}function ku(t,e,n,r,i,s){Mg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Kh(e,n,!1),bt(t,e,s);r=e.stateNode,zw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Mr(e,t.child,null,s),e.child=Mr(e,null,l,s)):Pe(t,e,l,s),e.memoizedState=r.state,i&&Kh(e,n,!0),e.child}function bg(t){var e=t.stateNode;e.pendingContext?$h(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$h(t,e.context,!1),Bc(t,e.containerInfo)}function uf(t,e,n,r,i){return Lr(),Mc(i),e.flags|=256,Pe(t,e,n,r),e.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function xu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fg(t,e,n){var r=e.pendingProps,i=te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(te,i&1),t===null)return vu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sl(o,r,0,null),t=Un(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xu(n),e.memoizedState=Tu,t):Qc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return jw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=hn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=hn(l,s):(s=Un(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?xu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Tu,r}return s=t.child,t=s.sibling,r=hn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Qc(t,e){return e=Sl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ks(t,e,n,r){return r!==null&&Mc(r),Mr(e,t.child,null,n),t=Qc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=wa(Error(S(422))),Ks(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Sl({mode:"visible",children:r.children},i,0,null),s=Un(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Mr(e,t.child,null,o),e.child.memoizedState=xu(o),e.memoizedState=Tu,s);if((e.mode&1)===0)return Ks(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(S(419)),r=wa(s,r,void 0),Ks(t,e,o,r)}if(l=(o&t.childLanes)!==0,Me||l){if(r=_e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mt(t,i),ht(r,t,i,-1))}return td(),r=wa(Error(S(421))),Ks(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Zw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ve=an(i.nextSibling),$e=e,ee=!0,lt=null,t!==null&&(Ye[Je++]=kt,Ye[Je++]=Tt,Ye[Je++]=Hn,kt=t.id,Tt=t.overflow,Hn=e),e=Qc(e,r.children),e.flags|=4096,e)}function cf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),wu(t.return,e,n)}function Ea(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ug(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pe(t,e,r.children,n),r=te.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cf(t,n,e);else if(t.tag===19)cf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(te,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Lo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ea(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Lo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ea(e,!0,n,null,s);break;case"together":Ea(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ao(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$n|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=hn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Bw(t,e,n){switch(e.tag){case 3:bg(e),Lr();break;case 5:dg(e);break;case 1:ze(e.type)&&No(e);break;case 4:Bc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(Oo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(te,te.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Fg(t,e,n):(Q(te,te.current&1),t=bt(t,e,n),t!==null?t.sibling:null);Q(te,te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return Ug(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(te,te.current),r)break;return null;case 22:case 23:return e.lanes=0,Lg(t,e,n)}return bt(t,e,n)}var zg,Nu,jg,Bg;zg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nu=function(){};jg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ln(wt.current);var s=null;switch(n){case"input":i=Ya(t,i),r=Ya(t,r),s=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),s=[];break;case"textarea":i=Za(t,i),r=Za(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=To)}tu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&J("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Bg=function(t,e,n,r){n!==r&&(e.flags|=4)};function ci(t,e){if(!ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ie(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ww(t,e,n){var r=e.pendingProps;switch(Lc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(e),null;case 1:return ze(e.type)&&xo(),Ie(e),null;case 3:return r=e.stateNode,br(),Z(Ue),Z(Ne),Hc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Vs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,lt!==null&&(bu(lt),lt=null))),Nu(t,e),Ie(e),null;case 5:Wc(e);var i=Ln(qi.current);if(n=e.type,t!==null&&e.stateNode!=null)jg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Ie(e),null}if(t=Ln(wt.current),Vs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[yt]=e,r[Ki]=s,t=(e.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<wi.length;i++)J(wi[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":yh(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":wh(r,s),J("invalid",r)}tu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Hs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Hs(r.textContent,l,t),i=["children",""+l]):bi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":Ms(r),vh(r,s,!0);break;case"textarea":Ms(r),Eh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=To)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[yt]=e,t[Ki]=r,zg(t,e,!1,!1),e.stateNode=t;e:{switch(o=nu(n,r),n){case"dialog":J("cancel",t),J("close",t),i=r;break;case"iframe":case"object":case"embed":J("load",t),i=r;break;case"video":case"audio":for(i=0;i<wi.length;i++)J(wi[i],t);i=r;break;case"source":J("error",t),i=r;break;case"img":case"image":case"link":J("error",t),J("load",t),i=r;break;case"details":J("toggle",t),i=r;break;case"input":yh(t,r),i=Ya(t,r),J("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),J("invalid",t);break;case"textarea":wh(t,r),i=Za(t,r),J("invalid",t);break;default:i=r}tu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?_m(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&mm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Fi(t,a):typeof a=="number"&&Fi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&J("scroll",t):a!=null&&vc(t,s,a,o))}switch(n){case"input":Ms(t),vh(t,r,!1);break;case"textarea":Ms(t),Eh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?wr(t,!!r.multiple,s,!1):r.defaultValue!=null&&wr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=To)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ie(e),null;case 6:if(t&&e.stateNode!=null)Bg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Ln(qi.current),Ln(wt.current),Vs(e)){if(r=e.stateNode,n=e.memoizedProps,r[yt]=e,(s=r.nodeValue!==n)&&(t=$e,t!==null))switch(t.tag){case 3:Hs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=e,e.stateNode=r}return Ie(e),null;case 13:if(Z(te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ee&&Ve!==null&&(e.mode&1)!==0&&(e.flags&128)===0)ig(),Lr(),e.flags|=98560,s=!1;else if(s=Vs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[yt]=e}else Lr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ie(e),s=!1}else lt!==null&&(bu(lt),lt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(te.current&1)!==0?de===0&&(de=3):td())),e.updateQueue!==null&&(e.flags|=4),Ie(e),null);case 4:return br(),Nu(t,e),t===null&&Vi(e.stateNode.containerInfo),Ie(e),null;case 10:return Uc(e.type._context),Ie(e),null;case 17:return ze(e.type)&&xo(),Ie(e),null;case 19:if(Z(te),s=e.memoizedState,s===null)return Ie(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ci(s,!1);else{if(de!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Lo(t),o!==null){for(e.flags|=128,ci(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(te,te.current&1|2),e.child}t=t.sibling}s.tail!==null&&le()>Ur&&(e.flags|=128,r=!0,ci(s,!1),e.lanes=4194304)}else{if(!r)if(t=Lo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ci(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ee)return Ie(e),null}else 2*le()-s.renderingStartTime>Ur&&n!==1073741824&&(e.flags|=128,r=!0,ci(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=le(),e.sibling=null,n=te.current,Q(te,r?n&1|2:n&1),e):(Ie(e),null);case 22:case 23:return ed(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(He&1073741824)!==0&&(Ie(e),e.subtreeFlags&6&&(e.flags|=8192)):Ie(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function Hw(t,e){switch(Lc(e),e.tag){case 1:return ze(e.type)&&xo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return br(),Z(Ue),Z(Ne),Hc(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Wc(e),null;case 13:if(Z(te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Lr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(te),null;case 4:return br(),null;case 10:return Uc(e.type._context),null;case 22:case 23:return ed(),null;case 24:return null;default:return null}}var Gs=!1,ke=!1,Vw=typeof WeakSet=="function"?WeakSet:Set,T=null;function gr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(t,e,r)}else n.current=null}function Ru(t,e,n){try{n()}catch(r){ie(t,e,r)}}var df=!1;function $w(t,e){if(hu=Co,t=$m(),Ac(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(fu={focusedElem:t,selectionRange:n},Co=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,N=g.memoizedState,f=e.stateNode,p=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:st(e.type,y),N);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(E){ie(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return g=df,df=!1,g}function Ni(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ru(e,n,s)}i=i.next}while(i!==r)}}function wl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Pu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wg(t){var e=t.alternate;e!==null&&(t.alternate=null,Wg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yt],delete e[Ki],delete e[gu],delete e[xw],delete e[Nw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hg(t){return t.tag===5||t.tag===3||t.tag===4}function hf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ou(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=To));else if(r!==4&&(t=t.child,t!==null))for(Ou(t,e,n),t=t.sibling;t!==null;)Ou(t,e,n),t=t.sibling}function Au(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Au(t,e,n),t=t.sibling;t!==null;)Au(t,e,n),t=t.sibling}var ve=null,ot=!1;function $t(t,e,n){for(n=n.child;n!==null;)Vg(t,e,n),n=n.sibling}function Vg(t,e,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:ke||gr(n,e);case 6:var r=ve,i=ot;ve=null,$t(t,e,n),ve=r,ot=i,ve!==null&&(ot?(t=ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(ot?(t=ve,n=n.stateNode,t.nodeType===8?pa(t.parentNode,n):t.nodeType===1&&pa(t,n),Bi(t)):pa(ve,n.stateNode));break;case 4:r=ve,i=ot,ve=n.stateNode.containerInfo,ot=!0,$t(t,e,n),ve=r,ot=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Ru(n,e,o),i=i.next}while(i!==r)}$t(t,e,n);break;case 1:if(!ke&&(gr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ie(n,e,l)}$t(t,e,n);break;case 21:$t(t,e,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,$t(t,e,n),ke=r):$t(t,e,n);break;default:$t(t,e,n)}}function ff(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Vw),e.forEach(function(r){var i=eE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ve=l.stateNode,ot=!1;break e;case 3:ve=l.stateNode.containerInfo,ot=!0;break e;case 4:ve=l.stateNode.containerInfo,ot=!0;break e}l=l.return}if(ve===null)throw Error(S(160));Vg(s,o,i),ve=null,ot=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ie(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$g(e,t),e=e.sibling}function $g(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(it(e,t),gt(t),r&4){try{Ni(3,t,t.return),wl(3,t)}catch(y){ie(t,t.return,y)}try{Ni(5,t,t.return)}catch(y){ie(t,t.return,y)}}break;case 1:it(e,t),gt(t),r&512&&n!==null&&gr(n,n.return);break;case 5:if(it(e,t),gt(t),r&512&&n!==null&&gr(n,n.return),t.flags&32){var i=t.stateNode;try{Fi(i,"")}catch(y){ie(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&hm(i,s),nu(l,o);var u=nu(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?_m(i,d):c==="dangerouslySetInnerHTML"?mm(i,d):c==="children"?Fi(i,d):vc(i,c,d,u)}switch(l){case"input":Ja(i,s);break;case"textarea":fm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?wr(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?wr(i,!!s.multiple,s.defaultValue,!0):wr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ki]=s}catch(y){ie(t,t.return,y)}}break;case 6:if(it(e,t),gt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ie(t,t.return,y)}}break;case 3:if(it(e,t),gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bi(e.containerInfo)}catch(y){ie(t,t.return,y)}break;case 4:it(e,t),gt(t);break;case 13:it(e,t),gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Xc=le())),r&4&&ff(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ke=(u=ke)||c,it(e,t),ke=u):it(e,t),gt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(T=t,c=t.child;c!==null;){for(d=T=c;T!==null;){switch(h=T,m=h.child,h.tag){case 0:case 11:case 14:case 15:Ni(4,h,h.return);break;case 1:gr(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){ie(r,n,y)}}break;case 5:gr(h,h.return);break;case 22:if(h.memoizedState!==null){mf(d);continue}}m!==null?(m.return=h,T=m):mf(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=gm("display",o))}catch(y){ie(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){ie(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:it(e,t),gt(t),r&4&&ff(t);break;case 21:break;default:it(e,t),gt(t)}}function gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Hg(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fi(i,""),r.flags&=-33);var s=hf(t);Au(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=hf(t);Ou(t,l,o);break;default:throw Error(S(161))}}catch(a){ie(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Kw(t,e,n){T=t,Kg(t)}function Kg(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Gs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ke;l=Gs;var u=ke;if(Gs=o,(ke=a)&&!u)for(T=i;T!==null;)o=T,a=o.child,o.tag===22&&o.memoizedState!==null?gf(i):a!==null?(a.return=o,T=a):gf(i);for(;s!==null;)T=s,Kg(s),s=s.sibling;T=i,Gs=l,ke=u}pf(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,T=s):pf(t)}}function pf(t){for(;T!==null;){var e=T;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:ke||wl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:st(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Yh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Yh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Bi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ke||e.flags&512&&Pu(e)}catch(h){ie(e,e.return,h)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function mf(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function gf(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wl(4,e)}catch(a){ie(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ie(e,i,a)}}var s=e.return;try{Pu(e)}catch(a){ie(e,s,a)}break;case 5:var o=e.return;try{Pu(e)}catch(a){ie(e,o,a)}}}catch(a){ie(e,e.return,a)}if(e===t){T=null;break}var l=e.sibling;if(l!==null){l.return=e.return,T=l;break}T=e.return}}var Gw=Math.ceil,Fo=Bt.ReactCurrentDispatcher,Yc=Bt.ReactCurrentOwner,Ze=Bt.ReactCurrentBatchConfig,B=0,_e=null,ae=null,Ee=0,He=0,_r=Cn(0),de=0,Xi=null,$n=0,El=0,Jc=0,Ri=null,Le=null,Xc=0,Ur=1/0,Ct=null,Uo=!1,Du=null,cn=null,qs=!1,nn=null,zo=0,Pi=0,Lu=null,uo=-1,co=0;function Oe(){return(B&6)!==0?le():uo!==-1?uo:uo=le()}function dn(t){return(t.mode&1)===0?1:(B&2)!==0&&Ee!==0?Ee&-Ee:Pw.transition!==null?(co===0&&(co=Rm()),co):(t=V,t!==0||(t=window.event,t=t===void 0?16:bm(t.type)),t)}function ht(t,e,n,r){if(50<Pi)throw Pi=0,Lu=null,Error(S(185));fs(t,n,r),((B&2)===0||t!==_e)&&(t===_e&&((B&2)===0&&(El|=n),de===4&&Yt(t,Ee)),je(t,r),n===1&&B===0&&(e.mode&1)===0&&(Ur=le()+500,_l&&In()))}function je(t,e){var n=t.callbackNode;P0(t,e);var r=So(t,t===_e?Ee:0);if(r===0)n!==null&&Ih(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ih(n),e===1)t.tag===0?Rw(_f.bind(null,t)):tg(_f.bind(null,t)),kw(function(){(B&6)===0&&In()}),n=null;else{switch(Pm(r)){case 1:n=Ic;break;case 4:n=xm;break;case 16:n=Eo;break;case 536870912:n=Nm;break;default:n=Eo}n=e_(n,Gg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Gg(t,e){if(uo=-1,co=0,(B&6)!==0)throw Error(S(327));var n=t.callbackNode;if(kr()&&t.callbackNode!==n)return null;var r=So(t,t===_e?Ee:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=jo(t,r);else{e=r;var i=B;B|=2;var s=Qg();(_e!==t||Ee!==e)&&(Ct=null,Ur=le()+500,Fn(t,e));do try{Yw();break}catch(l){qg(t,l)}while(1);Fc(),Fo.current=s,B=i,ae!==null?e=0:(_e=null,Ee=0,e=de)}if(e!==0){if(e===2&&(i=lu(t),i!==0&&(r=i,e=Mu(t,i))),e===1)throw n=Xi,Fn(t,0),Yt(t,r),je(t,le()),n;if(e===6)Yt(t,r);else{if(i=t.current.alternate,(r&30)===0&&!qw(i)&&(e=jo(t,r),e===2&&(s=lu(t),s!==0&&(r=s,e=Mu(t,s))),e===1))throw n=Xi,Fn(t,0),Yt(t,r),je(t,le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Rn(t,Le,Ct);break;case 3:if(Yt(t,r),(r&130023424)===r&&(e=Xc+500-le(),10<e)){if(So(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Oe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=mu(Rn.bind(null,t,Le,Ct),e);break}Rn(t,Le,Ct);break;case 4:if(Yt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gw(r/1960))-r,10<r){t.timeoutHandle=mu(Rn.bind(null,t,Le,Ct),r);break}Rn(t,Le,Ct);break;case 5:Rn(t,Le,Ct);break;default:throw Error(S(329))}}}return je(t,le()),t.callbackNode===n?Gg.bind(null,t):null}function Mu(t,e){var n=Ri;return t.current.memoizedState.isDehydrated&&(Fn(t,e).flags|=256),t=jo(t,e),t!==2&&(e=Le,Le=n,e!==null&&bu(e)),t}function bu(t){Le===null?Le=t:Le.push.apply(Le,t)}function qw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yt(t,e){for(e&=~Jc,e&=~El,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dt(e),r=1<<n;t[n]=-1,e&=~r}}function _f(t){if((B&6)!==0)throw Error(S(327));kr();var e=So(t,0);if((e&1)===0)return je(t,le()),null;var n=jo(t,e);if(t.tag!==0&&n===2){var r=lu(t);r!==0&&(e=r,n=Mu(t,r))}if(n===1)throw n=Xi,Fn(t,0),Yt(t,e),je(t,le()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rn(t,Le,Ct),je(t,le()),null}function Zc(t,e){var n=B;B|=1;try{return t(e)}finally{B=n,B===0&&(Ur=le()+500,_l&&In())}}function Kn(t){nn!==null&&nn.tag===0&&(B&6)===0&&kr();var e=B;B|=1;var n=Ze.transition,r=V;try{if(Ze.transition=null,V=1,t)return t()}finally{V=r,Ze.transition=n,B=e,(B&6)===0&&In()}}function ed(){He=_r.current,Z(_r)}function Fn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Iw(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(Lc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xo();break;case 3:br(),Z(Ue),Z(Ne),Hc();break;case 5:Wc(r);break;case 4:br();break;case 13:Z(te);break;case 19:Z(te);break;case 10:Uc(r.type._context);break;case 22:case 23:ed()}n=n.return}if(_e=t,ae=t=hn(t.current,null),Ee=He=e,de=0,Xi=null,Jc=El=$n=0,Le=Ri=null,Dn!==null){for(e=0;e<Dn.length;e++)if(n=Dn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Dn=null}return t}function qg(t,e){do{var n=ae;try{if(Fc(),oo.current=bo,Mo){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Mo=!1}if(Vn=0,pe=ue=ne=null,xi=!1,Qi=0,Yc.current=null,n===null||n.return===null){de=1,Xi=e,ae=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ee,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=rf(o);if(m!==null){m.flags&=-257,sf(m,o,l,s,e),m.mode&1&&nf(s,u,e),e=m,a=u;var g=e.updateQueue;if(g===null){var y=new Set;y.add(a),e.updateQueue=y}else g.add(a);break e}else{if((e&1)===0){nf(s,u,e),td();break e}a=Error(S(426))}}else if(ee&&l.mode&1){var N=rf(o);if(N!==null){(N.flags&65536)===0&&(N.flags|=256),sf(N,o,l,s,e),Mc(Fr(a,l));break e}}s=a=Fr(a,l),de!==4&&(de=2),Ri===null?Ri=[s]:Ri.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Og(s,a,e);Qh(s,f);break e;case 1:l=a;var p=s.type,_=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(cn===null||!cn.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Ag(s,l,e);Qh(s,E);break e}}s=s.return}while(s!==null)}Jg(n)}catch(k){e=k,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(1)}function Qg(){var t=Fo.current;return Fo.current=bo,t===null?bo:t}function td(){(de===0||de===3||de===2)&&(de=4),_e===null||($n&268435455)===0&&(El&268435455)===0||Yt(_e,Ee)}function jo(t,e){var n=B;B|=2;var r=Qg();(_e!==t||Ee!==e)&&(Ct=null,Fn(t,e));do try{Qw();break}catch(i){qg(t,i)}while(1);if(Fc(),B=n,Fo.current=r,ae!==null)throw Error(S(261));return _e=null,Ee=0,de}function Qw(){for(;ae!==null;)Yg(ae)}function Yw(){for(;ae!==null&&!E0();)Yg(ae)}function Yg(t){var e=Zg(t.alternate,t,He);t.memoizedProps=t.pendingProps,e===null?Jg(t):ae=e,Yc.current=null}function Jg(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=Ww(n,e,He),n!==null){ae=n;return}}else{if(n=Hw(n,e),n!==null){n.flags&=32767,ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{de=6,ae=null;return}}if(e=e.sibling,e!==null){ae=e;return}ae=e=t}while(e!==null);de===0&&(de=5)}function Rn(t,e,n){var r=V,i=Ze.transition;try{Ze.transition=null,V=1,Jw(t,e,n,r)}finally{Ze.transition=i,V=r}return null}function Jw(t,e,n,r){do kr();while(nn!==null);if((B&6)!==0)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(O0(t,s),t===_e&&(ae=_e=null,Ee=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||qs||(qs=!0,e_(Eo,function(){return kr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Ze.transition,Ze.transition=null;var o=V;V=1;var l=B;B|=4,Yc.current=null,$w(t,n),$g(n,t),_w(fu),Co=!!hu,fu=hu=null,t.current=n,Kw(n),S0(),B=l,V=o,Ze.transition=s}else t.current=n;if(qs&&(qs=!1,nn=t,zo=i),s=t.pendingLanes,s===0&&(cn=null),k0(n.stateNode),je(t,le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Uo)throw Uo=!1,t=Du,Du=null,t;return(zo&1)!==0&&t.tag!==0&&kr(),s=t.pendingLanes,(s&1)!==0?t===Lu?Pi++:(Pi=0,Lu=t):Pi=0,In(),null}function kr(){if(nn!==null){var t=Pm(zo),e=Ze.transition,n=V;try{if(Ze.transition=null,V=16>t?16:t,nn===null)var r=!1;else{if(t=nn,nn=null,zo=0,(B&6)!==0)throw Error(S(331));var i=B;for(B|=4,T=t.current;T!==null;){var s=T,o=s.child;if((T.flags&16)!==0){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:Ni(8,c,s)}var d=c.child;if(d!==null)d.return=c,T=d;else for(;T!==null;){c=T;var h=c.sibling,m=c.return;if(Wg(c),c===u){T=null;break}if(h!==null){h.return=m,T=h;break}T=m}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var N=y.sibling;y.sibling=null,y=N}while(y!==null)}}T=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ni(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,T=f;break e}T=s.return}}var p=t.current;for(T=p;T!==null;){o=T;var _=o.child;if((o.subtreeFlags&2064)!==0&&_!==null)_.return=o,T=_;else e:for(o=p;T!==null;){if(l=T,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:wl(9,l)}}catch(k){ie(l,l.return,k)}if(l===o){T=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,T=E;break e}T=l.return}}if(B=i,In(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(hl,t)}catch{}r=!0}return r}finally{V=n,Ze.transition=e}}return!1}function yf(t,e,n){e=Fr(n,e),e=Og(t,e,1),t=un(t,e,1),e=Oe(),t!==null&&(fs(t,1,e),je(t,e))}function ie(t,e,n){if(t.tag===3)yf(t,t,n);else for(;e!==null;){if(e.tag===3){yf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){t=Fr(n,t),t=Ag(e,t,1),e=un(e,t,1),t=Oe(),e!==null&&(fs(e,1,t),je(e,t));break}}e=e.return}}function Xw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Oe(),t.pingedLanes|=t.suspendedLanes&n,_e===t&&(Ee&n)===n&&(de===4||de===3&&(Ee&130023424)===Ee&&500>le()-Xc?Fn(t,0):Jc|=n),je(t,e)}function Xg(t,e){e===0&&((t.mode&1)===0?e=1:(e=Us,Us<<=1,(Us&130023424)===0&&(Us=4194304)));var n=Oe();t=Mt(t,e),t!==null&&(fs(t,e,n),je(t,n))}function Zw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xg(t,n)}function eE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Xg(t,n)}var Zg;Zg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ue.current)Me=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Me=!1,Bw(t,e,n);Me=(t.flags&131072)!==0}else Me=!1,ee&&(e.flags&1048576)!==0&&ng(e,Po,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ao(t,e),t=e.pendingProps;var i=Dr(e,Ne.current);Ir(e,n),i=$c(null,e,r,t,i,n);var s=Kc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ze(r)?(s=!0,No(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jc(e),i.updater=yl,e.stateNode=i,i._reactInternals=e,Su(e,r,t,n),e=ku(null,e,r,!0,s,n)):(e.tag=0,ee&&s&&Dc(e),Pe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ao(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=nE(r),t=st(r,t),i){case 0:e=Iu(null,e,r,t,n);break e;case 1:e=af(null,e,r,t,n);break e;case 11:e=of(null,e,r,t,n);break e;case 14:e=lf(null,e,r,st(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Iu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),af(t,e,r,i,n);case 3:e:{if(bg(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,og(t,e),Do(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Fr(Error(S(423)),e),e=uf(t,e,r,n,i);break e}else if(r!==i){i=Fr(Error(S(424)),e),e=uf(t,e,r,n,i);break e}else for(Ve=an(e.stateNode.containerInfo.firstChild),$e=e,ee=!0,lt=null,n=cg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Lr(),r===i){e=bt(t,e,n);break e}Pe(t,e,r,n)}e=e.child}return e;case 5:return dg(e),t===null&&vu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,pu(r,i)?o=null:s!==null&&pu(r,s)&&(e.flags|=32),Mg(t,e),Pe(t,e,o,n),e.child;case 6:return t===null&&vu(e),null;case 13:return Fg(t,e,n);case 4:return Bc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Mr(e,null,r,n):Pe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),of(t,e,r,i,n);case 7:return Pe(t,e,e.pendingProps,n),e.child;case 8:return Pe(t,e,e.pendingProps.children,n),e.child;case 12:return Pe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(Oo,r._currentValue),r._currentValue=o,s!==null)if(pt(s.value,o)){if(s.children===i.children&&!Ue.current){e=bt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Pt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),wu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),wu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ir(e,n),i=tt(i),r=r(i),e.flags|=1,Pe(t,e,r,n),e.child;case 14:return r=e.type,i=st(r,e.pendingProps),i=st(r.type,i),lf(t,e,r,i,n);case 15:return Dg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),ao(t,e),e.tag=1,ze(r)?(t=!0,No(e)):t=!1,Ir(e,n),ag(e,r,i),Su(e,r,i,n),ku(null,e,r,!0,t,n);case 19:return Ug(t,e,n);case 22:return Lg(t,e,n)}throw Error(S(156,e.tag))};function e_(t,e){return Tm(t,e)}function tE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(t,e,n,r){return new tE(t,e,n,r)}function nd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nE(t){if(typeof t=="function")return nd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ec)return 11;if(t===Sc)return 14}return 2}function hn(t,e){var n=t.alternate;return n===null?(n=Xe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ho(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")nd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case lr:return Un(n.children,i,s,e);case wc:o=8,i|=8;break;case Ka:return t=Xe(12,n,e,i|2),t.elementType=Ka,t.lanes=s,t;case Ga:return t=Xe(13,n,e,i),t.elementType=Ga,t.lanes=s,t;case qa:return t=Xe(19,n,e,i),t.elementType=qa,t.lanes=s,t;case um:return Sl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lm:o=10;break e;case am:o=9;break e;case Ec:o=11;break e;case Sc:o=14;break e;case Gt:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=Xe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Un(t,e,n,r){return t=Xe(7,t,r,e),t.lanes=n,t}function Sl(t,e,n,r){return t=Xe(22,t,r,e),t.elementType=um,t.lanes=n,t.stateNode={isHidden:!1},t}function Sa(t,e,n){return t=Xe(6,t,null,e),t.lanes=n,t}function Ca(t,e,n){return e=Xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ra(0),this.expirationTimes=ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rd(t,e,n,r,i,s,o,l,a){return t=new rE(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jc(s),t}function iE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:or,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function t_(t){if(!t)return vn;t=t._reactInternals;e:{if(tr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ze(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(ze(n))return eg(t,n,e)}return e}function n_(t,e,n,r,i,s,o,l,a){return t=rd(n,r,!0,t,i,s,o,l,a),t.context=t_(null),n=t.current,r=Oe(),i=dn(n),s=Pt(r,i),s.callback=e!=null?e:null,un(n,s,i),t.current.lanes=i,fs(t,i,r),je(t,r),t}function Cl(t,e,n,r){var i=e.current,s=Oe(),o=dn(i);return n=t_(n),e.context===null?e.context=n:e.pendingContext=n,e=Pt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=un(i,e,o),t!==null&&(ht(t,i,o,s),so(t,i,o)),o}function Bo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function id(t,e){vf(t,e),(t=t.alternate)&&vf(t,e)}function sE(){return null}var r_=typeof reportError=="function"?reportError:function(t){console.error(t)};function sd(t){this._internalRoot=t}Il.prototype.render=sd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Cl(t,e,null,null)};Il.prototype.unmount=sd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kn(function(){Cl(null,t,null,null)}),e[Lt]=null}};function Il(t){this._internalRoot=t}Il.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qt.length&&e!==0&&e<Qt[n].priority;n++);Qt.splice(n,0,t),n===0&&Mm(t)}};function od(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wf(){}function oE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Bo(o);s.call(u)}}var o=n_(e,r,t,0,null,!1,!1,"",wf);return t._reactRootContainer=o,t[Lt]=o.current,Vi(t.nodeType===8?t.parentNode:t),Kn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Bo(a);l.call(u)}}var a=rd(t,0,!1,null,null,!1,!1,"",wf);return t._reactRootContainer=a,t[Lt]=a.current,Vi(t.nodeType===8?t.parentNode:t),Kn(function(){Cl(e,a,n,r)}),a}function Tl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Bo(o);l.call(a)}}Cl(e,o,t,i)}else o=oE(n,e,t,i,r);return Bo(o)}Om=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vi(e.pendingLanes);n!==0&&(kc(e,n|1),je(e,le()),(B&6)===0&&(Ur=le()+500,In()))}break;case 13:Kn(function(){var r=Mt(t,1);if(r!==null){var i=Oe();ht(r,t,1,i)}}),id(t,1)}};Tc=function(t){if(t.tag===13){var e=Mt(t,134217728);if(e!==null){var n=Oe();ht(e,t,134217728,n)}id(t,134217728)}};Am=function(t){if(t.tag===13){var e=dn(t),n=Mt(t,e);if(n!==null){var r=Oe();ht(n,t,e,r)}id(t,e)}};Dm=function(){return V};Lm=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};iu=function(t,e,n){switch(e){case"input":if(Ja(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=gl(r);if(!i)throw Error(S(90));dm(r),Ja(r,i)}}}break;case"textarea":fm(t,n);break;case"select":e=n.value,e!=null&&wr(t,!!n.multiple,e,!1)}};wm=Zc;Em=Kn;var lE={usingClientEntryPoint:!1,Events:[ms,dr,gl,ym,vm,Zc]},di={findFiberByHostInstance:An,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},aE={bundleType:di.bundleType,version:di.version,rendererPackageName:di.rendererPackageName,rendererConfig:di.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Im(t),t===null?null:t.stateNode},findFiberByHostInstance:di.findFiberByHostInstance||sE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qs.isDisabled&&Qs.supportsFiber)try{hl=Qs.inject(aE),vt=Qs}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lE;qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!od(e))throw Error(S(200));return iE(t,e,null,n)};qe.createRoot=function(t,e){if(!od(t))throw Error(S(299));var n=!1,r="",i=r_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=rd(t,1,!1,null,null,n,!1,r,i),t[Lt]=e.current,Vi(t.nodeType===8?t.parentNode:t),new sd(e)};qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Im(e),t=t===null?null:t.stateNode,t};qe.flushSync=function(t){return Kn(t)};qe.hydrate=function(t,e,n){if(!kl(e))throw Error(S(200));return Tl(null,t,e,!0,n)};qe.hydrateRoot=function(t,e,n){if(!od(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=r_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=n_(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Lt]=e.current,Vi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Il(e)};qe.render=function(t,e,n){if(!kl(e))throw Error(S(200));return Tl(null,t,e,!1,n)};qe.unmountComponentAtNode=function(t){if(!kl(t))throw Error(S(40));return t._reactRootContainer?(Kn(function(){Tl(null,null,t,!1,function(){t._reactRootContainer=null,t[Lt]=null})}),!0):!1};qe.unstable_batchedUpdates=Zc;qe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!kl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Tl(t,e,n,!1,r)};qe.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=qe})(nm);var Ef=nm.exports;Va.createRoot=Ef.createRoot,Va.hydrateRoot=Ef.hydrateRoot;/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wo(){return Wo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wo.apply(this,arguments)}var rn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rn||(rn={}));const Sf="popstate";function uE(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Fu("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Uu(i)}return dE(e,n,null,t)}function cE(){return Math.random().toString(36).substr(2,8)}function Cf(t){return{usr:t.state,key:t.key}}function Fu(t,e,n,r){return n===void 0&&(n=null),Wo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?qr(e):e,{state:n,key:e&&e.key||r||cE()})}function Uu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function qr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function dE(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=rn.Pop,a=null;function u(){l=rn.Pop,a&&a({action:l,location:h.location})}function c(m,g){l=rn.Push;let y=Fu(h.location,m,g);n&&n(y,m);let N=Cf(y),f=h.createHref(y);try{o.pushState(N,"",f)}catch{i.location.assign(f)}s&&a&&a({action:l,location:y})}function d(m,g){l=rn.Replace;let y=Fu(h.location,m,g);n&&n(y,m);let N=Cf(y),f=h.createHref(y);o.replaceState(N,"",f),s&&a&&a({action:l,location:y})}let h={get action(){return l},get location(){return t(i,o)},listen(m){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Sf,u),a=m,()=>{i.removeEventListener(Sf,u),a=null}},createHref(m){return e(i,m)},push:c,replace:d,go(m){return o.go(m)}};return h}var If;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(If||(If={}));function hE(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?qr(e):e,i=s_(r.pathname||"/",n);if(i==null)return null;let s=i_(t);fE(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=SE(s[l],i);return o}function i_(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(ye(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let l=fn([r,o.relativePath]),a=n.concat(o);i.children&&i.children.length>0&&(ye(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),i_(i.children,e,a,l)),!(i.path==null&&!i.index)&&e.push({path:l,score:wE(l,i.index),routesMeta:a})}),e}function fE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:EE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pE=/^:\w+$/,mE=3,gE=2,_E=1,yE=10,vE=-2,kf=t=>t==="*";function wE(t,e){let n=t.split("/"),r=n.length;return n.some(kf)&&(r+=vE),e&&(r+=gE),n.filter(i=>!kf(i)).reduce((i,s)=>i+(pE.test(s)?mE:s===""?_E:yE),r)}function EE(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function SE(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=CE({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;s.push({params:r,pathname:fn([i,c.pathname]),pathnameBase:NE(fn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=fn([i,c.pathnameBase]))}return s}function CE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=IE(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=l[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=kE(l[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function IE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),o_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,l)=>(r.push(l),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function kE(t,e){try{return decodeURIComponent(t)}catch(n){return o_(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function s_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function o_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function TE(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?qr(t):t;return{pathname:n?n.startsWith("/")?n:xE(n,e):e,search:RE(r),hash:PE(i)}}function xE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ia(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function l_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=qr(t):(i=Wo({},t),ye(!i.pathname||!i.pathname.includes("?"),Ia("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),Ia("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),Ia("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?e[d]:"/"}let a=TE(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const fn=t=>t.join("/").replace(/\/\/+/g,"/"),NE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),RE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,PE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class OE{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function AE(t){return t instanceof OE}var xl={exports:{}},Nl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DE=I.exports,LE=Symbol.for("react.element"),ME=Symbol.for("react.fragment"),bE=Object.prototype.hasOwnProperty,FE=DE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,UE={key:!0,ref:!0,__self:!0,__source:!0};function a_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)bE.call(e,r)&&!UE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:LE,type:t,key:s,ref:o,props:i,_owner:FE.current}}Nl.Fragment=ME;Nl.jsx=a_;Nl.jsxs=a_;(function(t){t.exports=Nl})(xl);const Te=xl.exports.Fragment,v=xl.exports.jsx,$=xl.exports.jsxs;/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zu(){return zu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zu.apply(this,arguments)}function zE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const jE=typeof Object.is=="function"?Object.is:zE,{useState:BE,useEffect:WE,useLayoutEffect:HE,useDebugValue:VE}=Ha;function $E(t,e,n){const r=e(),[{inst:i},s]=BE({inst:{value:r,getSnapshot:e}});return HE(()=>{i.value=r,i.getSnapshot=e,ka(i)&&s({inst:i})},[t,r,e]),WE(()=>(ka(i)&&s({inst:i}),t(()=>{ka(i)&&s({inst:i})})),[t]),VE(r),r}function ka(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!jE(n,r)}catch{return!0}}function KE(t,e,n){return e()}const GE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qE=!GE,QE=qE?KE:$E;"useSyncExternalStore"in Ha&&(t=>t.useSyncExternalStore)(Ha);const YE=I.exports.createContext(null),JE=I.exports.createContext(null),u_=I.exports.createContext(null),ld=I.exports.createContext(null),Rl=I.exports.createContext(null),_s=I.exports.createContext({outlet:null,matches:[]}),c_=I.exports.createContext(null);function XE(t,e){let{relative:n}=e===void 0?{}:e;ys()||ye(!1);let{basename:r,navigator:i}=I.exports.useContext(ld),{hash:s,pathname:o,search:l}=h_(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:fn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function ys(){return I.exports.useContext(Rl)!=null}function Pl(){return ys()||ye(!1),I.exports.useContext(Rl).location}function d_(t){return t.filter((e,n)=>n===0||!e.route.index&&e.pathnameBase!==t[n-1].pathnameBase)}function ad(){ys()||ye(!1);let{basename:t,navigator:e}=I.exports.useContext(ld),{matches:n}=I.exports.useContext(_s),{pathname:r}=Pl(),i=JSON.stringify(d_(n).map(l=>l.pathnameBase)),s=I.exports.useRef(!1);return I.exports.useEffect(()=>{s.current=!0}),I.exports.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){e.go(l);return}let u=l_(l,JSON.parse(i),r,a.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:fn([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state,a)},[t,e,i,r])}function h_(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.exports.useContext(_s),{pathname:i}=Pl(),s=JSON.stringify(d_(r).map(o=>o.pathnameBase));return I.exports.useMemo(()=>l_(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function ZE(t,e){ys()||ye(!1);let n=I.exports.useContext(u_),{matches:r}=I.exports.useContext(_s),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let l=Pl(),a;if(e){var u;let g=typeof e=="string"?qr(e):e;o==="/"||((u=g.pathname)==null?void 0:u.startsWith(o))||ye(!1),a=g}else a=l;let c=a.pathname||"/",d=o==="/"?c:c.slice(o.length)||"/",h=hE(t,{pathname:d}),m=rS(h&&h.map(g=>Object.assign({},g,{params:Object.assign({},s,g.params),pathname:fn([o,g.pathname]),pathnameBase:g.pathnameBase==="/"?o:fn([o,g.pathnameBase])})),r,n||void 0);return e?v(Rl.Provider,{value:{location:zu({pathname:"/",search:"",hash:"",state:null,key:"default"},a),navigationType:rn.Pop},children:m}):m}function eS(){let t=sS(),e=AE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return $(Te,{children:[v("h2",{children:"Unhandled Thrown Error!"}),v("h3",{style:{fontStyle:"italic"},children:e}),n?v("pre",{style:i,children:n}):null,v("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),$("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",v("code",{style:s,children:"errorElement"})," props on\xA0",v("code",{style:s,children:"<Route>"})]})]})}class tS extends I.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?v(c_.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function nS(t){let{routeContext:e,match:n,children:r}=t,i=I.exports.useContext(YE);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),v(_s.Provider,{value:e,children:r})}function rS(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||ye(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||v(eS,{}):null,c=()=>v(nS,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,l+1))},children:a?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||l===0)?v(tS,{location:n.location,component:u,error:a,children:c()}):c()},null)}var Tf;(function(t){t.UseRevalidator="useRevalidator"})(Tf||(Tf={}));var ju;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(ju||(ju={}));function iS(t){let e=I.exports.useContext(u_);return e||ye(!1),e}function sS(){var t;let e=I.exports.useContext(c_),n=iS(ju.UseRouteError),r=I.exports.useContext(_s),i=r.matches[r.matches.length-1];return e||(r||ye(!1),i.route.id||ye(!1),(t=n.errors)==null?void 0:t[i.route.id])}function Bu(t){ye(!1)}function oS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=rn.Pop,navigator:s,static:o=!1}=t;ys()&&ye(!1);let l=e.replace(/^\/*/,"/"),a=I.exports.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=qr(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:m="default"}=r,g=I.exports.useMemo(()=>{let y=s_(u,l);return y==null?null:{pathname:y,search:c,hash:d,state:h,key:m}},[l,u,c,d,h,m]);return g==null?null:v(ld.Provider,{value:a,children:v(Rl.Provider,{children:n,value:{location:g,navigationType:i}})})}function xf(t){let{children:e,location:n}=t,r=I.exports.useContext(JE),i=r&&!e?r.router.routes:Wu(e);return ZE(i,n)}var Nf;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Nf||(Nf={}));new Promise(()=>{});function Wu(t,e){e===void 0&&(e=[]);let n=[];return I.exports.Children.forEach(t,(r,i)=>{if(!I.exports.isValidElement(r))return;if(r.type===I.exports.Fragment){n.push.apply(n,Wu(r.props.children,e));return}r.type!==Bu&&ye(!1),!r.props.index||!r.props.children||ye(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Wu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function aS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function uS(t,e){return t.button===0&&(!e||e==="_self")&&!aS(t)}const cS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function dS(t){let{basename:e,children:n,window:r}=t,i=I.exports.useRef();i.current==null&&(i.current=uE({window:r,v5Compat:!0}));let s=i.current,[o,l]=I.exports.useState({action:s.action,location:s.location});return I.exports.useLayoutEffect(()=>s.listen(l),[s]),v(oS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const hS=I.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c}=e,d=lS(e,cS),h=XE(u,{relative:i}),m=fS(u,{replace:o,state:l,target:a,preventScrollReset:c,relative:i});function g(y){r&&r(y),y.defaultPrevented||m(y)}return v("a",{...d,href:h,onClick:s?r:g,ref:n,target:a})});var Rf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Rf||(Rf={}));var Pf;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Pf||(Pf={}));function fS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,l=ad(),a=Pl(),u=h_(t,{relative:o});return I.exports.useCallback(c=>{if(uS(c,n)){c.preventDefault();let d=r!==void 0?r:Uu(a)===Uu(u);l(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,t,s,o])}function pS(){return v(Te,{children:v("h1",{className:"text-xl font-semibold text-[#202121] text-center my-5 md:text-2xl md:mb-6",children:" PEMILIHAN KETUA OSIS TAHUN 2023 "})})}function mS({namaKetua:t,namaWakil:e,onClick:n,succes:r}){return v(Te,{children:$("div",{className:"w-[280px] h-[180px] py-4 bg-slate-300 flex flex-col gap-4 justify-center items-center rounded-md",children:[v("h1",{className:"text-lg font-semibold text-[#212121]",children:r}),$("div",{className:"w-[80%] h-[120px] flex flex-col justify-center items-center outline outline-sky-700 rounded  py-2",children:[v("p",{className:"text-[#212121] font-semibold mx-auto ",children:t}),v("p",{className:"text-[#212121] font-semibold text-xs mx-auto ",children:"&"}),v("p",{className:"text-[#212121] font-semibold mx-auto ",children:e})]}),v("div",{className:"w-full h-10 flex justify-center items-center rounded-md text-black cursor-pointer animate-pulse",children:"Loading.."})]})})}function gS({onClick:t,name:e}){return v(Te,{children:v("button",{type:"button",className:"w-[65px] h-8 flex justify-center items-center font-semibold bg-[#202121] text-white rounded-lg \r ",onClick:t,children:e})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw Qr(e)},Qr=function(t){return new Error("Firebase Database ("+f_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_S=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ud={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,m=u&63;a||(m=64,o||(h=64)),r.push(n[c],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(p_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_S(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw Error();const h=s<<2|l>>4;if(r.push(h),u!==64){const m=l<<4&240|u>>2;if(r.push(m),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},m_=function(t){const e=p_(t);return ud.encodeByteArray(e,!0)},Ho=function(t){return m_(t).replace(/\./g,"")},Vo=function(t){try{return ud.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(t){return g_(void 0,t)}function g_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!vS(n)||(t[n]=g_(t[n],e[n]));return t}function vS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function wS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function __(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ES(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function y_(){return f_.NODE_ADMIN===!0}function SS(){return typeof indexedDB=="object"}function CS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function IS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=()=>IS().__FIREBASE_DEFAULTS__,TS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vo(t[1]);return e&&JSON.parse(e)},dd=()=>{try{return kS()||TS()||xS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},v_=t=>{var e,n;return(n=(e=dd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},NS=t=>{const e=v_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},RS=()=>{var t;return(t=dd())===null||t===void 0?void 0:t.config},w_=t=>{var e;return(e=dd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Ho(JSON.stringify(n)),Ho(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OS,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vs.prototype.create)}}class vs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?AS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new kn(i,l,r)}}function AS(t,e){return t.replace(DS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const DS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){return JSON.parse(t)}function ge(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Zi(Vo(s[0])||""),n=Zi(Vo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},LS=function(t){const e=E_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},MS=function(t){const e=E_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function zr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Hu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $o(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ko(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Of(s)&&Of(o)){if(!Ko(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Of(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function FS(t,e){const n=new US(t,e);return n.subscribe.bind(n)}class US{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ta),i.error===void 0&&(i.error=Ta),i.complete===void 0&&(i.complete=Ta);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ta(){}function hd(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Al=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){return t&&t._delegate?t._delegate:t}class Gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ol;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HS(e))try{this.getOrInitializeService({instanceIdentifier:Pn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pn){return this.instances.has(e)}getOptions(e=Pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pn){return this.component?this.component.multipleInstances?e:Pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WS(t){return t===Pn?void 0:t}function HS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const $S={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},KS=K.INFO,GS={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},qS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=GS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fd{constructor(e){this.name=e,this._logLevel=KS,this._logHandler=qS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$S[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const QS=(t,e)=>e.some(n=>t instanceof n);let Af,Df;function YS(){return Af||(Af=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JS(){return Df||(Df=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const S_=new WeakMap,Vu=new WeakMap,C_=new WeakMap,xa=new WeakMap,pd=new WeakMap;function XS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&S_.set(n,t)}).catch(()=>{}),pd.set(e,t),e}function ZS(t){if(Vu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Vu.set(t,e)}let $u={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||C_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eC(t){$u=t($u)}function tC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Na(this),e,...n);return C_.set(r,e.sort?e.sort():[e]),pn(r)}:JS().includes(t)?function(...e){return t.apply(Na(this),e),pn(S_.get(this))}:function(...e){return pn(t.apply(Na(this),e))}}function nC(t){return typeof t=="function"?tC(t):(t instanceof IDBTransaction&&ZS(t),QS(t,YS())?new Proxy(t,$u):t)}function pn(t){if(t instanceof IDBRequest)return XS(t);if(xa.has(t))return xa.get(t);const e=nC(t);return e!==t&&(xa.set(t,e),pd.set(e,t)),e}const Na=t=>pd.get(t);function rC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=pn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(pn(o.result),a.oldVersion,a.newVersion,pn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const iC=["get","getKey","getAll","getAllKeys","count"],sC=["put","add","delete","clear"],Ra=new Map;function Lf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ra.get(e))return Ra.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=sC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||iC.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Ra.set(e,s),s}eC(t=>({...t,get:(e,n,r)=>Lf(e,n)||t.get(e,n,r),has:(e,n)=>!!Lf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ku="@firebase/app",Mf="0.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new fd("@firebase/app"),aC="@firebase/app-compat",uC="@firebase/analytics-compat",cC="@firebase/analytics",dC="@firebase/app-check-compat",hC="@firebase/app-check",fC="@firebase/auth",pC="@firebase/auth-compat",mC="@firebase/database",gC="@firebase/database-compat",_C="@firebase/functions",yC="@firebase/functions-compat",vC="@firebase/installations",wC="@firebase/installations-compat",EC="@firebase/messaging",SC="@firebase/messaging-compat",CC="@firebase/performance",IC="@firebase/performance-compat",kC="@firebase/remote-config",TC="@firebase/remote-config-compat",xC="@firebase/storage",NC="@firebase/storage-compat",RC="@firebase/firestore",PC="@firebase/firestore-compat",OC="firebase",AC="9.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="[DEFAULT]",DC={[Ku]:"fire-core",[aC]:"fire-core-compat",[cC]:"fire-analytics",[uC]:"fire-analytics-compat",[hC]:"fire-app-check",[dC]:"fire-app-check-compat",[fC]:"fire-auth",[pC]:"fire-auth-compat",[mC]:"fire-rtdb",[gC]:"fire-rtdb-compat",[_C]:"fire-fn",[yC]:"fire-fn-compat",[vC]:"fire-iid",[wC]:"fire-iid-compat",[EC]:"fire-fcm",[SC]:"fire-fcm-compat",[CC]:"fire-perf",[IC]:"fire-perf-compat",[kC]:"fire-rc",[TC]:"fire-rc-compat",[xC]:"fire-gcs",[NC]:"fire-gcs-compat",[RC]:"fire-fst",[PC]:"fire-fst-compat","fire-js":"fire-js",[OC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=new Map,qu=new Map;function LC(t,e){try{t.container.addComponent(e)}catch(n){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jr(t){const e=t.name;if(qu.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;qu.set(e,t);for(const n of Go.values())LC(n,t);return!0}function md(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mn=new vs("app","Firebase",MC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=AC;function I_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(n||(n=RS()),!n)throw mn.create("no-options");const s=Go.get(i);if(s){if(Ko(n,s.options)&&Ko(r,s.config))return s;throw mn.create("duplicate-app",{appName:i})}const o=new VS(i);for(const a of qu.values())o.addComponent(a);const l=new bC(n,r,o);return Go.set(i,l),l}function k_(t=Gu){const e=Go.get(t);if(!e&&t===Gu)return I_();if(!e)throw mn.create("no-app",{appName:t});return e}function gn(t,e,n){var r;let i=(r=DC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(l.join(" "));return}jr(new Gn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC="firebase-heartbeat-database",UC=1,es="firebase-heartbeat-store";let Pa=null;function T_(){return Pa||(Pa=rC(FC,UC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(es)}}}).catch(t=>{throw mn.create("idb-open",{originalErrorMessage:t.message})})),Pa}async function zC(t){var e;try{return(await T_()).transaction(es).objectStore(es).get(x_(t))}catch(n){if(n instanceof kn)qn.warn(n.message);else{const r=mn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});qn.warn(r.message)}}}async function bf(t,e){var n;try{const i=(await T_()).transaction(es,"readwrite");return await i.objectStore(es).put(e,x_(t)),i.done}catch(r){if(r instanceof kn)qn.warn(r.message);else{const i=mn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});qn.warn(i.message)}}}function x_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=1024,BC=30*24*60*60*1e3;class WC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ff();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=BC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ff(),{heartbeatsToSend:n,unsentEntries:r}=HC(this._heartbeatsCache.heartbeats),i=Ho(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ff(){return new Date().toISOString().substring(0,10)}function HC(t,e=jC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Uf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Uf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return SS()?CS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Uf(t){return Ho(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(t){jr(new Gn("platform-logger",e=>new oC(e),"PRIVATE")),jr(new Gn("heartbeat",e=>new WC(e),"PRIVATE")),gn(Ku,Mf,t),gn(Ku,Mf,"esm2017"),gn("fire-js","")}$C("");const zf="@firebase/database",jf="0.13.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let N_="";function KC(t){N_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Zi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Wt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new GC(e)}}catch{}return new qC},Mn=R_("localStorage"),Qu=R_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new fd("@firebase/database"),QC=function(){let t=1;return function(){return t++}}(),P_=function(t){const e=jS(t),n=new bS;n.update(e);const r=n.digest();return ud.encodeByteArray(r)},Es=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Es.apply(null,r):typeof r=="object"?e+=ge(r):e+=r,e+=" "}return e};let zn=null,Bf=!0;const YC=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Tr.logLevel=K.VERBOSE,zn=Tr.log.bind(Tr),e&&Qu.set("logging_enabled",!0)):typeof t=="function"?zn=t:(zn=null,Qu.remove("logging_enabled"))},xe=function(...t){if(Bf===!0&&(Bf=!1,zn===null&&Qu.get("logging_enabled")===!0&&YC(!0)),zn){const e=Es.apply(null,t);zn(e)}},Ss=function(t){return function(...e){xe(t,...e)}},Yu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Es(...t);Tr.error(e)},Ft=function(...t){const e=`FIREBASE FATAL ERROR: ${Es(...t)}`;throw Tr.error(e),new Error(e)},Be=function(...t){const e="FIREBASE WARNING: "+Es(...t);Tr.warn(e)},JC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},O_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},XC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Br="[MIN_NAME]",Qn="[MAX_NAME]",Jr=function(t,e){if(t===e)return 0;if(t===Br||e===Qn)return-1;if(e===Br||t===Qn)return 1;{const n=Wf(t),r=Wf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},ZC=function(t,e){return t===e?0:t<e?-1:1},hi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ge(e))},gd=function(t){if(typeof t!="object"||t===null)return ge(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ge(e[r]),n+=":",n+=gd(t[e[r]]);return n+="}",n},A_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function We(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const D_=function(t){C(!O_(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},eI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function nI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const rI=new RegExp("^-?(0*)\\d{1,10}$"),iI=-2147483648,sI=2147483647,Wf=function(t){if(rI.test(t)){const e=Number(t);if(e>=iI&&e<=sI)return e}return null},Xr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Be("Exception was thrown by user callback.",n),e},Math.floor(0))}},oI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Oi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Be(e)}}class xr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="5",L_="v",M_="s",b_="r",F_="f",U_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,z_="ls",j_="p",Ju="ac",B_="websocket",W_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Mn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Mn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function uI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function V_(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===B_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===W_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);uI(t)&&(n.ns=t.namespace);const i=[];return We(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(){this.counters_={}}incrementCounter(e,n=1){Wt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return yS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa={},Aa={};function yd(t){const e=t.toString();return Oa[e]||(Oa[e]=new cI),Oa[e]}function dI(t,e){const n=t.toString();return Aa[n]||(Aa[n]=e()),Aa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Xr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf="start",fI="close",pI="pLPCommand",mI="pRTLPCB",$_="id",K_="pw",G_="ser",gI="cb",_I="seg",yI="ts",vI="d",wI="dframe",q_=1870,Q_=30,EI=q_-Q_,SI=25e3,CI=3e4;class yr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ss(e),this.stats_=yd(n),this.urlFn=a=>(this.appCheckToken&&(a[Ju]=this.appCheckToken),V_(n,W_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new hI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(CI)),XC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new vd((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Hf)this.id=l,this.password=a;else if(o===fI)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Hf]="t",r[G_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[gI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[L_]=_d,this.transportSessionId&&(r[M_]=this.transportSessionId),this.lastSessionId&&(r[z_]=this.lastSessionId),this.applicationId&&(r[j_]=this.applicationId),this.appCheckToken&&(r[Ju]=this.appCheckToken),typeof location<"u"&&location.hostname&&U_.test(location.hostname)&&(r[b_]=F_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){yr.forceAllow_=!0}static forceDisallow(){yr.forceDisallow_=!0}static isAvailable(){return yr.forceAllow_?!0:!yr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!eI()&&!tI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=m_(n),i=A_(r,EI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[wI]="t",r[$_]=e,r[K_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class vd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=QC(),window[pI+this.uniqueCallbackIdentifier]=e,window[mI+this.uniqueCallbackIdentifier]=n,this.myIFrame=vd.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;s='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){xe("frame writing exception"),l.stack&&xe(l.stack),xe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$_]=this.myID,e[K_]=this.myPW,e[G_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Q_+r.length<=q_;){const o=this.pendingSegs.shift();r=r+"&"+_I+i+"="+o.seg+"&"+yI+i+"="+o.ts+"&"+vI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(SI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=16384,kI=45e3;let qo=null;typeof MozWebSocket<"u"?qo=MozWebSocket:typeof WebSocket<"u"&&(qo=WebSocket);class at{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ss(this.connId),this.stats_=yd(n),this.connURL=at.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[L_]=_d,typeof location<"u"&&location.hostname&&U_.test(location.hostname)&&(o[b_]=F_),n&&(o[M_]=n),r&&(o[z_]=r),i&&(o[Ju]=i),s&&(o[j_]=s),V_(e,B_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Mn.set("previous_websocket_failure",!0);try{let r;y_(),this.mySock=new qo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&qo!==null&&!at.forceDisallow_}static previouslyFailed(){return Mn.isInMemoryStorage||Mn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Mn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Zi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=A_(n,II);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(kI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2;at.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[yr,at]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=at&&at.isAvailable();let r=n&&!at.previouslyFailed();if(e.webSocketOnly&&(n||Be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[at];else{const i=this.transports_=[];for(const s of ts.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ts.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ts.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=6e4,xI=5e3,NI=10*1024,RI=100*1024,Da="t",Vf="d",PI="s",$f="r",OI="e",Kf="o",Gf="a",qf="n",Qf="p",AI="h";class DI{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ss("c:"+this.id+":"),this.transportManager_=new ts(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Oi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>RI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>NI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Da in e){const n=e[Da];n===Gf?this.upgradeIfSecondaryHealthy_():n===$f?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Kf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=hi("t",e),r=hi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=hi("t",e),r=hi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=hi(Da,e);if(Vf in e){const r=e[Vf];if(n===AI)this.onHandshake_(r);else if(n===qf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===PI?this.onConnectionShutdown_(r):n===$f?this.onReset_(r):n===OI?Yu("Server Error: "+r):n===Kf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),_d!==r&&Be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Oi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(TI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Oi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(xI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Mn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends J_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!cd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Qo}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=32,Jf=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new G("")}function b(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function wn(t){return t.pieces_.length-t.pieceNum_}function q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function X_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function LI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Z_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ey(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function ce(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new G(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function be(t,e){const n=b(t),r=b(e);if(n===null)return e;if(n===r)return be(q(t),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function wd(t,e){if(wn(t)!==wn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(wn(t)>wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class MI{constructor(e,n){this.errorPrefix_=n,this.parts_=Z_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Al(this.parts_[r]);ty(this)}}function bI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Al(e),ty(t)}function FI(t){const e=t.parts_.pop();t.byteLength_-=Al(e),t.parts_.length>0&&(t.byteLength_-=1)}function ty(t){if(t.byteLength_>Jf)throw new Error(t.errorPrefix_+"has a key path longer than "+Jf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Yf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Yf+") or object contains a cycle "+On(t))}function On(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed extends J_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Ed}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=1e3,UI=60*5*1e3,Xf=30*1e3,zI=1.3,jI=3e4,BI="server_kill",Zf=3;class Ot extends Y_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ot.nextPersistentConnectionId_++,this.log_=Ss("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fi,this.maxReconnectDelay_=UI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!y_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ed.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ge(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ol,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Ot.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Wt(e,"w")){const r=zr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||MS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=LS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Yu("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=fi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jI&&(this.reconnectDelay_=fi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ot.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?xe("getToken() completed but was canceled"):(xe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new DI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Be(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(BI)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Be(d),a())}}}interrupt(e){xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hu(this.interruptReasons_)&&(this.reconnectDelay_=fi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>gd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zf&&(this.reconnectDelay_=Xf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+N_.replace(/\./g,"-")]=1,cd()?e["framework.cordova"]=1:__()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qo.getInstance().currentlyOnline();return Hu(this.interruptReasons_)&&e}}Ot.nextPersistentConnectionId_=0;Ot.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(Br,e),i=new F(Br,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys;class ny extends Dl{static get __EMPTY_NODE(){return Ys}static set __EMPTY_NODE(e){Ys=e}compare(e,n){return Jr(e.name,n.name)}isDefinedOn(e){throw Qr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Qn,Ys)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,Ys)}toString(){return".key"}}const Nr=new ny;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:me.RED,this.left=i!=null?i:Fe.EMPTY_NODE,this.right=s!=null?s:Fe.EMPTY_NODE}copy(e,n,r,i,s){return new me(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Fe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class WI{copy(e,n,r,i,s){return this}insert(e,n,r){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Fe{constructor(e,n=Fe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Fe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new Fe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Js(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Js(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Js(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Js(this.root_,null,this.comparator_,!0,e)}}Fe.EMPTY_NODE=new WI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t,e){return Jr(t.name,e.name)}function Sd(t,e){return Jr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xu;function VI(t){Xu=t}const ry=function(t){return typeof t=="number"?"number:"+D_(t):"string:"+t},iy=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Wt(e,".sv"),"Priority must be a string or number.")}else C(t===Xu||t.isEmpty(),"priority of unexpected type.");C(t===Xu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ep;class fe{constructor(e,n=fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),iy(this.priorityNode_)}static set __childrenNodeConstructor(e){ep=e}static get __childrenNodeConstructor(){return ep}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:b(e)===".priority"?this.priorityNode_:fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=b(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ry(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=D_(this.value_):e+=this.value_,this.lazyHash_=P_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof fe.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=fe.VALUE_TYPE_ORDER.indexOf(n),s=fe.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sy,oy;function $I(t){sy=t}function KI(t){oy=t}class GI extends Dl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Jr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Qn,new fe("[PRIORITY-POST]",oy))}makePost(e,n){const r=sy(e);return new F(n,new fe("[PRIORITY-POST]",r))}toString(){return".priority"}}const se=new GI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=Math.log(2);class QI{constructor(e){const n=s=>parseInt(Math.log(s)/qI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Yo=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new me(h,d.node,me.BLACK,null,null);{const m=parseInt(c/2,10)+a,g=i(a,m),y=i(m+1,u);return d=t[m],h=n?n(d):d,new me(h,d.node,me.BLACK,g,y)}},s=function(a){let u=null,c=null,d=t.length;const h=function(g,y){const N=d-g,f=d;d-=g;const p=i(N+1,f),_=t[N],E=n?n(_):_;m(new me(E,_.node,y,null,p))},m=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<a.count;++g){const y=a.nextBitIsOne(),N=Math.pow(2,a.count-(g+1));y?h(N,me.BLACK):(h(N,me.BLACK),h(N,me.RED))}return c},o=new QI(t.length),l=s(o);return new Fe(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La;const ir={};class xt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(ir&&se,"ChildrenNode.ts has not been loaded"),La=La||new xt({".priority":ir},{".priority":se}),La}get(e){const n=zr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Fe?n:null}hasIndex(e){return Wt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==Nr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Yo(r,e.getCompare()):l=ir;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new xt(c,u)}addToIndexes(e,n){const r=$o(this.indexes_,(i,s)=>{const o=zr(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===ir)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Yo(l,o.getCompare())}else return ir;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new xt(r,this.indexSet_)}removeFromIndexes(e,n){const r=$o(this.indexes_,i=>{if(i===ir)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new xt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&iy(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pi||(pi=new A(new Fe(Sd),null,xt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pi}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?pi:n}}getChild(e){const n=b(e);return n===null?this:this.getImmediateChild(n).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?pi:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=b(e);if(r===null)return n;{C(b(e)!==".priority"||wn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(se,(o,l)=>{n[o]=l.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ry(this.getPriority().val())+":"),this.forEachChild(se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":P_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Cs?-1:0}withIndex(e){if(e===Nr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Nr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(se),i=n.getIterator(se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Nr?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class YI extends A{constructor(){super(new Fe(Sd),A.EMPTY_NODE,xt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Cs=new YI;Object.defineProperties(F,{MIN:{value:new F(Br,A.EMPTY_NODE)},MAX:{value:new F(Qn,Cs)}});ny.__EMPTY_NODE=A.EMPTY_NODE;fe.__childrenNodeConstructor=A;VI(Cs);KI(Cs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=!0;function we(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new fe(n,we(e))}if(!(t instanceof Array)&&JI){const n=[];let r=!1;if(We(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=we(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=Yo(n,HI,o=>o.name,Sd);if(r){const o=Yo(n,se.getCompare());return new A(s,we(e),new xt({".priority":o},{".priority":se}))}else return new A(s,we(e),xt.Default)}else{let n=A.EMPTY_NODE;return We(t,(r,i)=>{if(Wt(t,r)&&r.substring(0,1)!=="."){const s=we(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(we(e))}}$I(we);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI extends Dl{constructor(e){super(),this.indexPath_=e,C(!z(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Jr(e.name,n.name):s}makePost(e,n){const r=we(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Cs);return new F(Qn,e)}toString(){return Z_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI extends Dl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Jr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=we(e);return new F(n,r)}toString(){return".value"}}const e1=new ZI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t){return{type:"value",snapshotNode:t}}function Wr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ns(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function rs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function t1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ns(n,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Wr(n,r)):o.trackChildChange(rs(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(se,(i,s)=>{n.hasChild(i)||r.trackChildChange(ns(i,s))}),n.isLeafNode()||n.forEachChild(se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(rs(i,s,o))}else r.trackChildChange(Wr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.indexedFilter_=new Cd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=is.getStartPost_(e),this.endPost_=is.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new F(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(se,(o,l)=>{s.matches(new F(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e){this.rangedFilter_=new is(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();l=(h,m)=>d(m,h)}else a=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let u=0,c=!1;for(;a.hasNext();){const d=a.getNext();!c&&l(s,d)<=0&&(c=!0),c&&u<this.limit_&&l(d,o)<=0?u++:i=i.updateImmediateChild(d.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const a=new F(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,a);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(rs(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ns(n,d));const y=l.updateImmediateChild(n,A.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Wr(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(ns(u.name,u.node)),s.trackChildChange(Wr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=se}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Br}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===se}copy(){const e=new Id;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function r1(t){return t.loadsAllData()?new Cd(t.getIndex()):t.hasLimit()?new n1(t):new is(t)}function tp(t){const e={};if(t.isDefault())return e;let n;return t.index_===se?n="$priority":t.index_===e1?n="$value":t.index_===Nr?n="$key":(C(t.index_ instanceof XI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ge(n),t.startSet_&&(e.startAt=ge(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+ge(t.indexStartName_))),t.endSet_&&(e.endAt=ge(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+ge(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function np(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==se&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends Y_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ss("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Jo.getListenId_(e,r),l={};this.listens_[o]=l;const a=tp(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),zr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Jo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=tp(e._queryParams),r=e._path.toString(),i=new Ol;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Yr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Zi(l.responseText)}catch{Be("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Be("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(){return{value:null,children:new Map}}function ay(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=b(e);t.children.has(r)||t.children.set(r,Xo());const i=t.children.get(r);e=q(e),ay(i,e,n)}}function Zu(t,e,n){t.value!==null?n(e,t.value):s1(t,(r,i)=>{const s=new G(e.toString()+"/"+r);Zu(i,s,n)})}function s1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&We(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=10*1e3,l1=30*1e3,a1=5*60*1e3;class u1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new o1(e);const r=rp+(l1-rp)*Math.random();Oi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;We(e,(i,s)=>{s>0&&Wt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Oi(this.reportStats_.bind(this),Math.floor(Math.random()*2*a1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ct||(ct={}));function uy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Td(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ct.ACK_USER_WRITE,this.source=uy()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new Zo(H(),n,this.revert)}}else return C(b(this.path)===e,"operationForChild called for unrelated child."),new Zo(q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){this.source=e,this.path=n,this.type=ct.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new ss(this.source,H()):new ss(this.source,q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ct.OVERWRITE}operationForChild(e){return z(this.path)?new Yn(this.source,H(),this.snap.getImmediateChild(e)):new Yn(this.source,q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ct.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new Yn(this.source,H(),n.value):new os(this.source,H(),n)}else return C(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new os(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=b(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function d1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(t1(o.childName,o.snapshotNode))}),mi(t,i,"child_removed",e,r,n),mi(t,i,"child_added",e,r,n),mi(t,i,"child_moved",s,r,n),mi(t,i,"child_changed",e,r,n),mi(t,i,"value",e,r,n),i}function mi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>f1(t,l,a)),o.forEach(l=>{const a=h1(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function h1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function f1(t,e,n){if(e.childName==null||n.childName==null)throw Qr("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t,e){return{eventCache:t,serverCache:e}}function Ai(t,e,n,r){return Ll(new Jn(e,n,r),t.serverCache)}function cy(t,e,n,r){return Ll(t.eventCache,new Jn(e,n,r))}function ec(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Xn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ma;const p1=()=>(Ma||(Ma=new Fe(ZC)),Ma);class X{constructor(e,n=p1()){this.value=e,this.children=n}static fromObject(e){let n=new X(null);return We(e,(r,i)=>{n=n.set(new G(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(z(e))return null;{const r=b(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(q(e),n);return s!=null?{path:ce(new G(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=b(e),r=this.children.get(n);return r!==null?r.subtree(q(e)):new X(null)}}set(e,n){if(z(e))return new X(n,this.children);{const r=b(e),s=(this.children.get(r)||new X(null)).set(q(e),n),o=this.children.insert(r,s);return new X(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new X(null):new X(null,this.children);{const n=b(e),r=this.children.get(n);if(r){const i=r.remove(q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new X(null):new X(this.value,s)}else return this}}get(e){if(z(e))return this.value;{const n=b(e),r=this.children.get(n);return r?r.get(q(e)):null}}setTree(e,n){if(z(e))return n;{const r=b(e),s=(this.children.get(r)||new X(null)).setTree(q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new X(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ce(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(z(e))return null;{const s=b(e),o=this.children.get(s);return o?o.findOnPath_(q(e),ce(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if(z(e))return this;{this.value&&r(n,this.value);const i=b(e),s=this.children.get(i);return s?s.foreachOnPath_(q(e),ce(n,i),r):new X(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ce(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.writeTree_=e}static empty(){return new ft(new X(null))}}function Di(t,e,n){if(z(e))return new ft(new X(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=be(i,e);return s=s.updateChild(o,n),new ft(t.writeTree_.set(i,s))}else{const i=new X(n),s=t.writeTree_.setTree(e,i);return new ft(s)}}}function ip(t,e,n){let r=t;return We(n,(i,s)=>{r=Di(r,ce(e,i),s)}),r}function sp(t,e){if(z(e))return ft.empty();{const n=t.writeTree_.setTree(e,new X(null));return new ft(n)}}function tc(t,e){return nr(t,e)!=null}function nr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(be(n.path,e)):null}function op(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(se,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function _n(t,e){if(z(e))return t;{const n=nr(t,e);return n!=null?new ft(new X(n)):new ft(t.writeTree_.subtree(e))}}function nc(t){return t.writeTree_.isEmpty()}function Hr(t,e){return dy(H(),t.writeTree_,e)}function dy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=dy(ce(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ce(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t,e){return my(e,t)}function m1(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Di(t.visibleWrites,e,n)),t.lastWriteId=r}function g1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function _1(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&y1(l,r.path)?i=!1:ut(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return v1(t),!0;if(r.snap)t.visibleWrites=sp(t.visibleWrites,r.path);else{const l=r.children;We(l,a=>{t.visibleWrites=sp(t.visibleWrites,ce(r.path,a))})}return!0}else return!1}function y1(t,e){if(t.snap)return ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ut(ce(t.path,n),e))return!0;return!1}function v1(t){t.visibleWrites=hy(t.allWrites,w1,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function w1(t){return t.visible}function hy(t,e,n){let r=ft.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ut(n,o)?(l=be(n,o),r=Di(r,l,s.snap)):ut(o,n)&&(l=be(o,n),r=Di(r,H(),s.snap.getChild(l)));else if(s.children){if(ut(n,o))l=be(n,o),r=ip(r,l,s.children);else if(ut(o,n))if(l=be(o,n),z(l))r=ip(r,H(),s.children);else{const a=zr(s.children,b(l));if(a){const u=a.getChild(q(l));r=Di(r,H(),u)}}}else throw Qr("WriteRecord should have .snap or .children")}}return r}function fy(t,e,n,r,i){if(!r&&!i){const s=nr(t.visibleWrites,e);if(s!=null)return s;{const o=_n(t.visibleWrites,e);if(nc(o))return n;if(n==null&&!tc(o,H()))return null;{const l=n||A.EMPTY_NODE;return Hr(o,l)}}}else{const s=_n(t.visibleWrites,e);if(!i&&nc(s))return n;if(!i&&n==null&&!tc(s,H()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ut(u.path,e)||ut(e,u.path))},l=hy(t.allWrites,o,e),a=n||A.EMPTY_NODE;return Hr(l,a)}}}function E1(t,e,n){let r=A.EMPTY_NODE;const i=nr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=_n(t.visibleWrites,e);return n.forEachChild(se,(o,l)=>{const a=Hr(_n(s,new G(o)),l);r=r.updateImmediateChild(o,a)}),op(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=_n(t.visibleWrites,e);return op(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function S1(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ce(e,n);if(tc(t.visibleWrites,s))return null;{const o=_n(t.visibleWrites,s);return nc(o)?i.getChild(n):Hr(o,i.getChild(n))}}function C1(t,e,n,r){const i=ce(e,n),s=nr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=_n(t.visibleWrites,i);return Hr(o,r.getNode().getImmediateChild(n))}else return null}function I1(t,e){return nr(t.visibleWrites,e)}function k1(t,e,n,r,i,s,o){let l;const a=_n(t.visibleWrites,e),u=nr(a,H());if(u!=null)l=u;else if(n!=null)l=Hr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let m=h.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=h.getNext();return c}else return[]}function T1(){return{visibleWrites:ft.empty(),allWrites:[],lastWriteId:-1}}function el(t,e,n,r){return fy(t.writeTree,t.treePath,e,n,r)}function Nd(t,e){return E1(t.writeTree,t.treePath,e)}function lp(t,e,n,r){return S1(t.writeTree,t.treePath,e,n,r)}function tl(t,e){return I1(t.writeTree,ce(t.treePath,e))}function x1(t,e,n,r,i,s){return k1(t.writeTree,t.treePath,e,n,r,i,s)}function Rd(t,e,n){return C1(t.writeTree,t.treePath,e,n)}function py(t,e){return my(ce(t.treePath,e),t.writeTree)}function my(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,rs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ns(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Wr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,rs(r,e.snapshotNode,i.oldSnap));else throw Qr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const gy=new R1;class Pd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Jn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Rd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xn(this.viewCache_),s=x1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(t){return{filter:t}}function O1(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function A1(t,e,n,r,i){const s=new N1;let o,l;if(n.type===ct.OVERWRITE){const u=n;u.source.fromUser?o=rc(t,e,u.path,u.snap,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!z(u.path),o=nl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ct.MERGE){const u=n;u.source.fromUser?o=L1(t,e,u.path,u.children,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=ic(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ct.ACK_USER_WRITE){const u=n;u.revert?o=F1(t,e,u.path,r,i,s):o=M1(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ct.LISTEN_COMPLETE)o=b1(t,e,n.path,r,s);else throw Qr("Unknown operation type: "+n.type);const a=s.getChanges();return D1(e,o,a),{viewCache:o,changes:a}}function D1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ec(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(ly(ec(e)))}}function _y(t,e,n,r,i,s){const o=e.eventCache;if(tl(r,n)!=null)return e;{let l,a;if(z(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Xn(e),c=u instanceof A?u:A.EMPTY_NODE,d=Nd(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=el(r,Xn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=b(n);if(u===".priority"){C(wn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=lp(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=q(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=lp(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=Rd(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return Ai(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function nl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(z(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),m,null)}else{const m=b(n);if(!a.isCompleteForPath(n)&&wn(n)>1)return e;const g=q(n),N=a.getNode().getImmediateChild(m).updateChild(g,r);m===".priority"?u=c.updatePriority(a.getNode(),N):u=c.updateChild(a.getNode(),m,N,g,gy,null)}const d=cy(e,u,a.isFullyInitialized()||z(n),c.filtersNodes()),h=new Pd(i,d,s);return _y(t,d,n,i,h,l)}function rc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Pd(i,e,s);if(z(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ai(e,u,!0,t.filter.filtersNodes());else{const d=b(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ai(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=q(n),m=l.getNode().getImmediateChild(d);let g;if(z(h))g=r;else{const y=c.getCompleteChild(d);y!=null?X_(h)===".priority"&&y.getChild(ey(h)).isEmpty()?g=y:g=y.updateChild(h,r):g=A.EMPTY_NODE}if(m.equals(g))a=e;else{const y=t.filter.updateChild(l.getNode(),d,g,h,c,o);a=Ai(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function ap(t,e){return t.eventCache.isCompleteForChild(e)}function L1(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=ce(n,a);ap(e,b(c))&&(l=rc(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=ce(n,a);ap(e,b(c))||(l=rc(t,l,c,u,i,s,o))}),l}function up(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ic(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;z(n)?u=r:u=new X(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),g=up(t,m,h);a=nl(t,a,new G(d),g,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!m){const g=e.serverCache.getNode().getImmediateChild(d),y=up(t,g,h);a=nl(t,a,new G(d),y,i,s,o,l)}}),a}function M1(t,e,n,r,i,s,o){if(tl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(z(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return nl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(z(n)){let u=new X(null);return a.getNode().forEachChild(Nr,(c,d)=>{u=u.set(new G(c),d)}),ic(t,e,n,u,i,s,l,o)}else return e}else{let u=new X(null);return r.foreach((c,d)=>{const h=ce(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),ic(t,e,n,u,i,s,l,o)}}function b1(t,e,n,r,i){const s=e.serverCache,o=cy(e,s.getNode(),s.isFullyInitialized()||z(n),s.isFiltered());return _y(t,o,n,r,gy,i)}function F1(t,e,n,r,i,s){let o;if(tl(r,n)!=null)return e;{const l=new Pd(r,e,i),a=e.eventCache.getNode();let u;if(z(n)||b(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=el(r,Xn(e));else{const d=e.serverCache.getNode();C(d instanceof A,"serverChildren would be complete if leaf node"),c=Nd(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=b(n);let d=Rd(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,q(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,A.EMPTY_NODE,q(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=el(r,Xn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||tl(r,H())!=null,Ai(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Cd(r.getIndex()),s=r1(r);this.processor_=P1(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),c=new Jn(a,o.isFullyInitialized(),i.filtersNodes()),d=new Jn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ll(d,c),this.eventGenerator_=new c1(this.query_)}get query(){return this.query_}}function z1(t){return t.viewCache_.serverCache.getNode()}function j1(t,e){const n=Xn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(b(e)).isEmpty())?n.getChild(e):null}function cp(t){return t.eventRegistrations_.length===0}function B1(t,e){t.eventRegistrations_.push(e)}function dp(t,e,n){const r=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function hp(t,e,n,r){e.type===ct.MERGE&&e.source.queryId!==null&&(C(Xn(t.viewCache_),"We should always have a full cache before handling merges"),C(ec(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=A1(t.processor_,i,e,n,r);return O1(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,yy(t,s.changes,s.viewCache.eventCache.getNode(),null)}function W1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(se,(s,o)=>{r.push(Wr(s,o))}),n.isFullyInitialized()&&r.push(ly(n.getNode())),yy(t,r,n.getNode(),e)}function yy(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return d1(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rl;class H1{constructor(){this.views=new Map}}function V1(t){C(!rl,"__referenceConstructor has already been defined"),rl=t}function $1(){return C(rl,"Reference.ts has not been loaded"),rl}function K1(t){return t.views.size===0}function Od(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),hp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(hp(o,e,n,r));return s}}function G1(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=el(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=Nd(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=Ll(new Jn(l,a,!1),new Jn(r,i,!1));return new U1(e,u)}return o}function q1(t,e,n,r,i,s){const o=G1(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),B1(o,n),W1(o,n)}function Q1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=En(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(dp(u,n,r)),cp(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(dp(a,n,r)),cp(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!En(t)&&s.push(new($1())(e._repo,e._path)),{removed:s,events:o}}function vy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Rr(t,e){let n=null;for(const r of t.views.values())n=n||j1(r,e);return n}function wy(t,e){if(e._queryParams.loadsAllData())return Ml(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Ey(t,e){return wy(t,e)!=null}function En(t){return Ml(t)!=null}function Ml(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il;function Y1(t){C(!il,"__referenceConstructor has already been defined"),il=t}function J1(){return C(il,"Reference.ts has not been loaded"),il}let X1=1;class fp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new X(null),this.pendingWriteTree_=T1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Sy(t,e,n,r,i){return m1(t.pendingWriteTree_,e,n,r,i),i?Is(t,new Yn(uy(),e,n)):[]}function bn(t,e,n=!1){const r=g1(t.pendingWriteTree_,e);if(_1(t.pendingWriteTree_,e)){let s=new X(null);return r.snap!=null?s=s.set(H(),!0):We(r.children,o=>{s=s.set(new G(o),!0)}),Is(t,new Zo(r.path,s,n))}else return[]}function bl(t,e,n){return Is(t,new Yn(kd(),e,n))}function Z1(t,e,n){const r=X.fromObject(n);return Is(t,new os(kd(),e,r))}function ek(t,e){return Is(t,new ss(kd(),e))}function tk(t,e,n){const r=Dd(t,n);if(r){const i=Ld(r),s=i.path,o=i.queryId,l=be(s,e),a=new ss(Td(o),l);return Md(t,s,a)}else return[]}function sc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Ey(o,e))){const a=Q1(o,e,n,r);K1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,m)=>En(m));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const m=ik(h);for(let g=0;g<m.length;++g){const y=m[g],N=y.query,f=ky(t,y);t.listenProvider_.startListening(Li(N),sl(t,N),f.hashFn,f.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Li(e),null):u.forEach(h=>{const m=t.queryToTagMap.get(Fl(h));t.listenProvider_.stopListening(Li(h),m)}))}sk(t,u)}return l}function nk(t,e,n,r){const i=Dd(t,r);if(i!=null){const s=Ld(i),o=s.path,l=s.queryId,a=be(o,e),u=new Yn(Td(l),a,n);return Md(t,o,u)}else return[]}function rk(t,e,n,r){const i=Dd(t,r);if(i){const s=Ld(i),o=s.path,l=s.queryId,a=be(o,e),u=X.fromObject(n),c=new os(Td(l),a,u);return Md(t,o,c)}else return[]}function pp(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const g=be(h,i);s=s||Rr(m,g),o=o||En(m)});let l=t.syncPointTree_.get(i);l?(o=o||En(l),s=s||Rr(l,H())):(l=new H1,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,g)=>{const y=Rr(g,H());y&&(s=s.updateImmediateChild(m,y))}));const u=Ey(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Fl(e);C(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=ok();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const c=xd(t.pendingWriteTree_,i);let d=q1(l,e,n,c,s,a);if(!u&&!o&&!r){const h=wy(l,e);d=d.concat(lk(t,e,h))}return d}function Ad(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=be(o,e),u=Rr(l,a);if(u)return u});return fy(i,e,s,n,!0)}function Is(t,e){return Cy(e,t.syncPointTree_,null,xd(t.pendingWriteTree_,H()))}function Cy(t,e,n,r){if(z(t.path))return Iy(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=Rr(i,H()));let s=[];const o=b(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=py(r,o);s=s.concat(Cy(l,a,u,c))}return i&&(s=s.concat(Od(i,t,r,n))),s}}function Iy(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=Rr(i,H()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=py(r,o),c=t.operationForChild(o);c&&(s=s.concat(Iy(c,l,a,u)))}),i&&(s=s.concat(Od(i,t,r,n))),s}function ky(t,e){const n=e.query,r=sl(t,n);return{hashFn:()=>(z1(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?tk(t,n._path,r):ek(t,n._path);{const s=nI(i,n);return sc(t,n,null,s)}}}}function sl(t,e){const n=Fl(e);return t.queryToTagMap.get(n)}function Fl(t){return t._path.toString()+"$"+t._queryIdentifier}function Dd(t,e){return t.tagToQueryMap.get(e)}function Ld(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function Md(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=xd(t.pendingWriteTree_,e);return Od(r,n,i,null)}function ik(t){return t.fold((e,n,r)=>{if(n&&En(n))return[Ml(n)];{let i=[];return n&&(i=vy(n)),We(r,(s,o)=>{i=i.concat(o)}),i}})}function Li(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(J1())(t._repo,t._path):t}function sk(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Fl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function ok(){return X1++}function lk(t,e,n){const r=e._path,i=sl(t,e),s=ky(t,n),o=t.listenProvider_.startListening(Li(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)C(!En(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!z(u)&&c&&En(c))return[Ml(c).query];{let h=[];return c&&(h=h.concat(vy(c).map(m=>m.query))),We(d,(m,g)=>{h=h.concat(g)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(Li(c),sl(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new bd(n)}node(){return this.node_}}class Fd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ce(this.path_,e);return new Fd(this.syncTree_,n)}node(){return Ad(this.syncTree_,this.path_)}}const ak=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},mp=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return uk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ck(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},uk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},ck=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},dk=function(t,e,n,r){return Ud(e,new Fd(n,t),r)},Ty=function(t,e,n){return Ud(t,new bd(e),n)};function Ud(t,e,n){const r=t.getPriority().val(),i=mp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=mp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new fe(l,we(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new fe(i))),o.forEachChild(se,(l,a)=>{const u=Ud(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function jd(t,e){let n=e instanceof G?e:new G(e),r=t,i=b(n);for(;i!==null;){const s=zr(r.node.children,i)||{children:{},childCount:0};r=new zd(i,r,s),n=q(n),i=b(n)}return r}function Zr(t){return t.node.value}function xy(t,e){t.node.value=e,oc(t)}function Ny(t){return t.node.childCount>0}function hk(t){return Zr(t)===void 0&&!Ny(t)}function Ul(t,e){We(t.node.children,(n,r)=>{e(new zd(n,t,r))})}function Ry(t,e,n,r){n&&!r&&e(t),Ul(t,i=>{Ry(i,e,!0,r)}),n&&r&&e(t)}function fk(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ks(t){return new G(t.parent===null?t.name:ks(t.parent)+"/"+t.name)}function oc(t){t.parent!==null&&pk(t.parent,t.name,t)}function pk(t,e,n){const r=hk(n),i=Wt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,oc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,oc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=/[\[\].#$\/\u0000-\u001F\u007F]/,gk=/[\[\].#$\u0000-\u001F\u007F]/,ba=10*1024*1024,Py=function(t){return typeof t=="string"&&t.length!==0&&!mk.test(t)},Oy=function(t){return typeof t=="string"&&t.length!==0&&!gk.test(t)},_k=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Oy(t)},yk=function(t,e,n,r){r&&e===void 0||Bd(hd(t,"value"),e,n)},Bd=function(t,e,n){const r=n instanceof G?new MI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+On(r));if(typeof e=="function")throw new Error(t+"contains a function "+On(r)+" with contents = "+e.toString());if(O_(e))throw new Error(t+"contains "+e.toString()+" "+On(r));if(typeof e=="string"&&e.length>ba/3&&Al(e)>ba)throw new Error(t+"contains a string greater than "+ba+" utf8 bytes "+On(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(We(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Py(o)))throw new Error(t+" contains an invalid key ("+o+") "+On(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);bI(r,o),Bd(t,l,r),FI(r)}),i&&s)throw new Error(t+' contains ".value" child '+On(r)+" in addition to actual children.")}},Ay=function(t,e,n,r){if(!(r&&n===void 0)&&!Oy(n))throw new Error(hd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},vk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ay(t,e,n,r)},wk=function(t,e){if(b(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Ek=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Py(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!_k(n))throw new Error(hd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!wd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Dy(t,e,n){Wd(t,n),Ly(t,r=>wd(r,e))}function Ut(t,e,n){Wd(t,n),Ly(t,r=>ut(r,e)||ut(e,r))}function Ly(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Ck(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Ck(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();zn&&xe("event: "+n.toString()),Xr(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik="repo_interrupt",kk=25;class Tk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Sk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xo(),this.transactionQueueTree_=new zd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xk(t,e,n){if(t.stats_=yd(t.repoInfo_),t.forceRestClient_||oI())t.server_=new Jo(t.repoInfo_,(r,i,s,o)=>{gp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>_p(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ot(t.repoInfo_,e,(r,i,s,o)=>{gp(t,r,i,s,o)},r=>{_p(t,r)},r=>{Rk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=dI(t.repoInfo_,()=>new u1(t.stats_,t.server_)),t.infoData_=new i1,t.infoSyncTree_=new fp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=bl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Vd(t,"connected",!1),t.serverSyncTree_=new fp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Ut(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Nk(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Hd(t){return ak({timestamp:Nk(t)})}function gp(t,e,n,r,i){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=$o(n,u=>we(u));o=rk(t.serverSyncTree_,s,a,i)}else{const a=we(n);o=nk(t.serverSyncTree_,s,a,i)}else if(r){const a=$o(n,u=>we(u));o=Z1(t.serverSyncTree_,s,a)}else{const a=we(n);o=bl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=zl(t,s)),Ut(t.eventQueue_,l,o)}function _p(t,e){Vd(t,"connected",e),e===!1&&Ok(t)}function Rk(t,e){We(e,(n,r)=>{Vd(t,n,r)})}function Vd(t,e,n){const r=new G("/.info/"+e),i=we(n);t.infoData_.updateSnapshot(r,i);const s=bl(t.infoSyncTree_,r,i);Ut(t.eventQueue_,r,s)}function My(t){return t.nextWriteId_++}function Pk(t,e,n,r,i){$d(t,"set",{path:e.toString(),value:n,priority:r});const s=Hd(t),o=we(n,r),l=Ad(t.serverSyncTree_,e),a=Ty(o,l,s),u=My(t),c=Sy(t.serverSyncTree_,e,a,u,!0);Wd(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const g=h==="ok";g||Be("set at "+e+" failed: "+h);const y=bn(t.serverSyncTree_,u,!g);Ut(t.eventQueue_,e,y),Lk(t,i,h,m)});const d=jy(t,e);zl(t,d),Ut(t.eventQueue_,d,[])}function Ok(t){$d(t,"onDisconnectEvents");const e=Hd(t),n=Xo();Zu(t.onDisconnect_,H(),(i,s)=>{const o=dk(i,s,t.serverSyncTree_,e);ay(n,i,o)});let r=[];Zu(n,H(),(i,s)=>{r=r.concat(bl(t.serverSyncTree_,i,s));const o=jy(t,i);zl(t,o)}),t.onDisconnect_=Xo(),Ut(t.eventQueue_,H(),r)}function Ak(t,e,n){let r;b(e._path)===".info"?r=pp(t.infoSyncTree_,e,n):r=pp(t.serverSyncTree_,e,n),Dy(t.eventQueue_,e._path,r)}function yp(t,e,n){let r;b(e._path)===".info"?r=sc(t.infoSyncTree_,e,n):r=sc(t.serverSyncTree_,e,n),Dy(t.eventQueue_,e._path,r)}function Dk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Ik)}function $d(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),xe(n,...e)}function Lk(t,e,n,r){e&&Xr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function by(t,e,n){return Ad(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function Kd(t,e=t.transactionQueueTree_){if(e||jl(t,e),Zr(e)){const n=Uy(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Mk(t,ks(e),n)}else Ny(e)&&Ul(e,n=>{Kd(t,n)})}function Mk(t,e,n){const r=n.map(u=>u.currentWriteId),i=by(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];C(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=be(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{$d(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(bn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();jl(t,jd(t.transactionQueueTree_,e)),Kd(t,t.transactionQueueTree_),Ut(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)Xr(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Be("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}zl(t,e)}},o)}function zl(t,e){const n=Fy(t,e),r=ks(n),i=Uy(t,n);return bk(t,i,r),r}function bk(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=be(n,a.path);let c=!1,d;if(C(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(bn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=kk)c=!0,d="maxretry",i=i.concat(bn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=by(t,a.path,o);a.currentInputSnapshot=h;const m=e[l].update(h.val());if(m!==void 0){Bd("transaction failed: Data returned ",m,a.path);let g=we(m);typeof m=="object"&&m!=null&&Wt(m,".priority")||(g=g.updatePriority(h.getPriority()));const N=a.currentWriteId,f=Hd(t),p=Ty(g,h,f);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=p,a.currentWriteId=My(t),o.splice(o.indexOf(N),1),i=i.concat(Sy(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(bn(t.serverSyncTree_,N,!0))}else c=!0,d="nodata",i=i.concat(bn(t.serverSyncTree_,a.currentWriteId,!0))}Ut(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}jl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Xr(r[l]);Kd(t,t.transactionQueueTree_)}function Fy(t,e){let n,r=t.transactionQueueTree_;for(n=b(e);n!==null&&Zr(r)===void 0;)r=jd(r,n),e=q(e),n=b(e);return r}function Uy(t,e){const n=[];return zy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function zy(t,e,n){const r=Zr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ul(e,i=>{zy(t,i,n)})}function jl(t,e){const n=Zr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,xy(e,n.length>0?n:void 0)}Ul(e,r=>{jl(t,r)})}function jy(t,e){const n=ks(Fy(t,e)),r=jd(t.transactionQueueTree_,e);return fk(r,i=>{Fa(t,i)}),Fa(t,r),Ry(r,i=>{Fa(t,i)}),n}function Fa(t,e){const n=Zr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(bn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?xy(e,void 0):n.length=s+1,Ut(t.eventQueue_,ks(e),i);for(let o=0;o<r.length;o++)Xr(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Uk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Be(`Invalid query segment '${n}' in query '${t}'`)}return e}const vp=function(t,e){const n=zk(t),r=n.namespace;n.domain==="firebase.com"&&Ft(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||JC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new H_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new G(n.pathString)}},zk=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=Fk(t.substring(c,d)));const h=Uk(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ge(this.snapshot.exportVal())}}class Wy{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return z(this._path)?null:X_(this._path)}get ref(){return new Ht(this._repo,this._path)}get _queryIdentifier(){const e=np(this._queryParams),n=gd(e);return n==="{}"?"default":n}get _queryObject(){return np(this._queryParams)}isEqual(e){if(e=mt(e),!(e instanceof Gd))return!1;const n=this._repo===e._repo,r=wd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+LI(this._path)}}class Ht extends Gd{constructor(e,n){super(e,n,new Id,!1)}get parent(){const e=ey(this._path);return e===null?null:new Ht(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ls{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=ll(this.ref,e);return new ls(this._node.getChild(n),r,se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ls(i,ll(this.ref,r),se)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ol(t,e){return t=mt(t),t._checkNotDeleted("ref"),e!==void 0?ll(t._root,e):t._root}function ll(t,e){return t=mt(t),b(t._path)===null?vk("child","path",e,!1):Ay("child","path",e,!1),new Ht(t._repo,ce(t._path,e))}function Hy(t,e){t=mt(t),wk("set",t._path),yk("set",e,t._path,!1);const n=new Ol;return Pk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class qd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new By("value",this,new ls(e.snapshotNode,new Ht(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Wy(this,e,n):null}matches(e){return e instanceof qd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Qd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Wy(this,e,n):null}createEvent(e,n){C(e.childName!=null,"Child events should have a childName.");const r=ll(new Ht(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new By(e.type,this,new ls(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Qd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Bk(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,d)=>{yp(t._repo,t,l),a(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new jk(n,s||void 0),l=e==="value"?new qd(o):new Qd(e,o);return Ak(t._repo,t,l),()=>yp(t._repo,t,l)}function Vy(t,e,n,r){return Bk(t,"value",e,n,r)}V1(Ht);Y1(Ht);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk="FIREBASE_DATABASE_EMULATOR_HOST",lc={};let Hk=!1;function Vk(t,e,n,r){t.repoInfo_=new H_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function $k(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=vp(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[Wk]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=vp(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new xr(xr.OWNER):new aI(t.name,t.options,e);Ek("Invalid Firebase Database URL",o),z(o.path)||Ft("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Gk(l,t,c,new lI(t.name,n));return new qk(d,t)}function Kk(t,e){const n=lc[e];(!n||n[t.key]!==t)&&Ft(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Dk(t),delete n[t.key]}function Gk(t,e,n,r){let i=lc[e.name];i||(i={},lc[e.name]=i);let s=i[t.toURLString()];return s&&Ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Tk(t,Hk,n,r),i[t.toURLString()]=s,s}class qk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ht(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Kk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ft("Cannot call "+e+" on a deleted database.")}}function as(t=k_(),e){const n=md(t,"database").getImmediate({identifier:e}),r=NS("database");return r&&Qk(n,...r),n}function Qk(t,e,n,r={}){t=mt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ft("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Ft('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new xr(xr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:PS(r.mockUserToken,t.app.options.projectId);s=new xr(o)}Vk(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t){KC(ws),jr(new Gn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return $k(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),gn(zf,jf,t),gn(zf,jf,"esm2017")}Ot.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ot.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Yk();const Yd=I.exports.createContext();function Jk(t){const[e,n]=I.exports.useState(!1);return v(Yd.Provider,{value:[e,n],children:t.children})}const $y=I.exports.createContext();function Xk(t){const[e,n]=I.exports.useState(!1);return v($y.Provider,{value:[e,n],children:t.children})}const Ky=I.exports.createContext();function Zk(t){const[e,n]=I.exports.useState(!1);return v(Ky.Provider,{value:[e,n],children:t.children})}const Bl=I.exports.createContext();function eT(t){const[e,n]=I.exports.useState(!1);return v(Bl.Provider,{value:[e,n],children:t.children})}function tT({namaKetua:t,fotoKetua:e,namaWakil:n,fotoWakil:r,onClick:i}){return $("div",{className:"w-[95%] h-full py-5 flex gap-3 bg-slate-300 rounded-md justify-center items-start",onClick:i,children:[$("div",{className:"w-[50%] flex flex-col gap-2 justify-center items-center  text-[#202121] rounded-lg",children:[v("h1",{className:"font-medium",children:"Ketua"}),v("div",{className:"w-full h-full flex justify-center items-center",children:v("img",{src:e,className:"max-w-[80%] rounded",alt:""})}),v("p",{className:"max-w-[80%] text-base font-semibold text-ellipsis text-center",children:t})]}),$("div",{className:"w-[50%] flex flex-col gap-2 justify-center items-center  text-[#202121] rounded-lg",children:[v("h1",{className:"font-medium",children:"Wakil Ketua"}),v("div",{className:"w-full h-full flex justify-center items-center",children:v("img",{src:r,className:"max-w-[80%] rounded",alt:""})}),v("p",{className:"max-w-[90%] text-base font-semibold text-ellipsis text-center",children:n})]})]})}function nT(){return $("div",{className:"w-[320px] h-[150px] bg-[#dbdbdb] rounded-md gap-2 mx-auto shadow-lg flex justify-center items-center p-2",children:[v("div",{className:"w-[70%] h-[90%] bg-[#959595] rounded-md animate-pulse"}),v("div",{className:"w-[25%] h-[90%] bg-[#959595] rounded-md animate-pulse"})]})}function Ua(){return $("div",{className:"w-[280px] h-[200px] bg-[#202121] rounded-md gap-2 mx-auto shadow-lg flex justify-center items-center p-2",children:[v("div",{className:"w-[70%] h-[90%] bg-[#3a3a3a] rounded-md animate-pulse"}),v("div",{className:"w-[25%] h-[90%] bg-[#3a3a3a] rounded-md animate-pulse"})]})}function rT({confirmasi:t,namaKetua:e,namaWakil:n,onClickYes:r,onClickNo:i}){return v(Te,{children:$("div",{className:"w-[280px] h-[200px] py-5 bg-slate-300 flex flex-col gap-2 justify-center items-center rounded-md",children:[v("h1",{className:"text-lg my-2 font-semibold text-[#212121]",children:t}),$("div",{className:"w-[80%] h-[100px] flex flex-col justify-center items-center outline outline-sky-700 rounded  py-2",children:[v("p",{className:"text-[#212121] font-semibold mx-auto ",children:e}),v("p",{className:"text-[#212121] font-semibold text-xs mx-auto ",children:"&"}),v("p",{className:"text-[#212121] font-semibold mx-auto ",children:n})]}),$("div",{className:"w-[75%] mx-2 mb-4 flex justify-center gap-2 items-center",children:[v("div",{className:"w-[64%] h-10 flex justify-center items-center rounded-md bg-sky-600 text-white cursor-pointer mt-4",onClick:r,children:"Yakin"}),v("div",{className:"w-[35%] h-10 flex justify-center items-center rounded-md bg-red-600 text-white cursor-pointer mt-4",onClick:i,children:"Tidak"})]})]})})}function iT(){const[t,e]=I.exports.useState(),[n,r]=I.exports.useState(!1),[i,s]=I.exports.useState(""),[o,l]=I.exports.useState(!1),[a,u]=I.exports.useState({}),[c,d]=I.exports.useState(!0);I.exports.useState(0),I.exports.useContext(Yd);const[h,m]=I.exports.useContext(Bl),g=ad();I.exports.useEffect(()=>{const f=as(),p=ol(f,"jayabuana");Vy(p,_=>{const E=_.val();e(Object.values(E)),d(!1)})},[]);const y=(f,p,_,E,k,R)=>{r(!n),l(!0);const P=as();Hy(ol(P,"jayabuana/"+f),{nomor:f,namaKetua:p,namaWakil:_,fotoKetua:E,fotoWakil:k,score:R+1}).then(O=>{s("Terimakasih telah memilih"),setTimeout(()=>{l(!1)},2500)}).catch(O=>{console.error(O)})};return $(Te,{children:[$(Te,{children:[v("div",{className:"flex justify-center items-center mt-5 md:absolute md:bottom-2 md:right-4 ",children:v(gS,{onClick:()=>{if(h){g("/"),m(!0);return}let f=prompt("Mohon tulis Identitas Anda ?");if(f!=="AlvinHan76"){alert("Maaf, akses hanya bisa untuk Panitia");return}localStorage.setItem("user",JSON.stringify(f)),m(!0),g("/")},name:"ADMIN"})}),$("div",{className:"container max-w-6xl mx-auto pb-8 py-2 px-5 flex flex-col items-center justify-center",children:[$("div",{className:"flex flex-col justify-center gap-1 items-center mt-2 md:flex-row md:gap-2",children:[v("div",{className:"h-[30px] bg-red-700 px-1 rounded flex justify-center items-center",children:v("h1",{className:"font-semibold text-base text-white",children:"Note !"})}),v("div",{className:"p-2 rounded",children:$("p",{className:"text-sm text-center",children:["Cukup klik ",v("span",{className:"font-semibold",children:" SEKALI SAJA "}),"  pada foto/nomor/bingkai calon untuk memilih kandidat"]})})]}),v(pS,{}),$("div",{className:"w-full h-full flex flex-col justify-center items-center gap-4 md:flex-row md:items-start",children:[c&&$(Te,{children:[v(Ua,{}),v(Ua,{}),v(Ua,{})]}),!c&&v(Te,{children:t==null?void 0:t.map(f=>v("div",{className:"w-[280px] h-full bg-[#202121] flex flex-col items-center py-4 rounded-md gap-2 mx-auto cursor-pointer md:w-[300px]",onClick:()=>{r(!n),u({nomor:f.nomor,namaKetua:f.namaKetua,namaWakil:f.namaWakil,fotoKetua:f.fotoKetua,fotoWakil:f.fotoWakil,score:f.score})},children:$(Te,{children:[v("div",{className:"text-white rounded-full flex justify-center items-center mx-auto",children:v("p",{className:"text-white text-5xl font-bold ",children:f.nomor})}),v(tT,{fotoKetua:f.fotoKetua,namaKetua:f.namaKetua,fotoWakil:f.fotoWakil,namaWakil:f.namaWakil})]})},f.nomor))})]})]})]}),o&&v("div",{className:"w-screen h-full fixed top-0 left-0 z-10 bg-[#00000097] text-white mx-auto flex justify-center items-center",children:v("div",{className:"h-[200px]",children:v(mS,{namaKetua:a.namaKetua,namaWakil:a.namaWakil,succes:i})})}),n&&v(Te,{children:v("div",{className:"w-screen h-full fixed top-0 left-0 z-10 bg-[#00000097] text-white mx-auto flex justify-center items-center",children:v("div",{className:"h-[200px]",children:v(rT,{confirmasi:"Sudah yakin pilih ?",namaKetua:a==null?void 0:a.namaKetua,namaWakil:a==null?void 0:a.namaWakil,onClickYes:()=>{y(a.nomor,a.namaKetua,a.namaWakil,a.fotoKetua,a.fotoWakil,a.score)},onClickNo:()=>{r(!n)}})})})})]})}function sT({name:t,link:e,click:n}){return v(Te,{children:v(hS,{className:"w-[120px] h-10 flex justify-center items-center bg-red-600 text-white rounded-lg hover:outline-[2px] hover:outline-[#212121] hover:outline hover:font-semibold\r ",to:e,onClick:n,children:t})})}function Jd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Gy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oT=Gy,qy=new vs("auth","Firebase",Gy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=new fd("@firebase/auth");function fo(t,...e){wp.logLevel<=K.ERROR&&wp.error(`Auth (${ws}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,...e){throw Xd(t,...e)}function Et(t,...e){return Xd(t,...e)}function lT(t,e,n){const r=Object.assign(Object.assign({},oT()),{[e]:n});return new vs("auth","Firebase",r).create(e,{appName:t.name})}function Xd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qy.create(t,...e)}function D(t,e,...n){if(!t)throw Xd(e,...n)}function Nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fo(e),new Error(e)}function jt(t,e){t||Nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=new Map;function Rt(t){jt(t instanceof Function,"Expected a class definition");let e=Ep.get(t);return e?(jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ep.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t,e){const n=md(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ko(s,e!=null?e:{}))return i;zt(i,"already-initialized")}return n.initialize({options:e})}function uT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cT(){return Sp()==="http:"||Sp()==="https:"}function Sp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cT()||wS()||"connection"in navigator)?navigator.onLine:!0}function hT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n){this.shortDelay=e,this.longDelay=n,jt(n>e,"Short delay should be less than long delay!"),this.isMobile=cd()||__()}get(){return dT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t,e){jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=new Ts(3e4,6e4);function mT(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wl(t,e,n,r,i={}){return Yy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Yr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Qy.fetch()(Jy(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Yy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fT),e);try{const i=new _T(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xs(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Xs(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Xs(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw lT(t,c,u);zt(t,c)}}catch(i){if(i instanceof kn)throw i;zt(t,"network-request-failed")}}async function gT(t,e,n,r,i={}){const s=await Wl(t,e,n,r,i);return"mfaPendingCredential"in s&&zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Jy(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Zd(t.config,i):`${t.config.apiScheme}://${i}`}class _T{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Et(this.auth,"network-request-failed")),pT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Et(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yT(t,e){return Wl(t,"POST","/v1/accounts:delete",e)}async function vT(t,e){return Wl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wT(t,e=!1){const n=mt(t),r=await n.getIdToken(e),i=eh(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Mi(za(i.auth_time)),issuedAtTime:Mi(za(i.iat)),expirationTime:Mi(za(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function za(t){return Number(t)*1e3}function eh(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return fo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vo(r);return s?JSON.parse(s):(fo("Failed to decode base64 JWT payload"),null)}catch(s){return fo("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function ET(t){const e=eh(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&ST(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ST({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function al(t){var e;const n=t.auth,r=await t.getIdToken(),i=await us(t,vT(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?TT(s.providerUserInfo):[],l=kT(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Xy(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function IT(t){const e=mt(t);await al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function TT(t){return t.map(e=>{var{providerId:n}=e,r=Jd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT(t,e){const n=await Yy(t,{},async()=>{const r=Yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Jy(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Qy.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ET(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await xT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new cs;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cs,this.toJSON())}_performRefresh(){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Jd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xy(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await us(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wT(this,e)}reload(){return IT(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await al(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await us(this,yT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:_,emailVerified:E,isAnonymous:k,providerData:R,stsTokenManager:P}=n;D(_&&P,e,"internal-error");const O=cs.fromJSON(this.name,P);D(typeof _=="string",e,"internal-error"),Kt(d,e.name),Kt(h,e.name),D(typeof E=="boolean",e,"internal-error"),D(typeof k=="boolean",e,"internal-error"),Kt(m,e.name),Kt(g,e.name),Kt(y,e.name),Kt(N,e.name),Kt(f,e.name),Kt(p,e.name);const Y=new jn({uid:_,auth:e,email:h,emailVerified:E,displayName:d,isAnonymous:k,photoURL:g,phoneNumber:m,tenantId:y,stsTokenManager:O,createdAt:f,lastLoginAt:p});return R&&Array.isArray(R)&&(Y.providerData=R.map(U=>Object.assign({},U))),N&&(Y._redirectEventId=N),Y}static async _fromIdTokenResponse(e,n,r=!1){const i=new cs;i.updateFromServerResponse(n);const s=new jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await al(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zy.type="NONE";const Cp=Zy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t,e,n){return`firebase:${t}:${e}:${n}`}class Pr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=po(this.userKey,i.apiKey,s),this.fullPersistenceKey=po("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Pr(Rt(Cp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Rt(Cp);const o=po(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=jn._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Pr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Pr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ev(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iv(e))return"Blackberry";if(sv(e))return"Webos";if(th(e))return"Safari";if((e.includes("chrome/")||tv(e))&&!e.includes("edge/"))return"Chrome";if(rv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ev(t=Re()){return/firefox\//i.test(t)}function th(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tv(t=Re()){return/crios\//i.test(t)}function nv(t=Re()){return/iemobile/i.test(t)}function rv(t=Re()){return/android/i.test(t)}function iv(t=Re()){return/blackberry/i.test(t)}function sv(t=Re()){return/webos/i.test(t)}function Hl(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NT(t=Re()){var e;return Hl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function RT(){return ES()&&document.documentMode===10}function ov(t=Re()){return Hl(t)||rv(t)||sv(t)||iv(t)||/windows phone/i.test(t)||nv(t)}function PT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(t,e=[]){let n;switch(t){case"Browser":n=Ip(Re());break;case"Worker":n=`${Ip(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ws}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kp(this),this.idTokenSubscription=new kp(this),this.beforeStateQueue=new OT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qy,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Pr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a==null?void 0:a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await al(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?mt(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rt(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Pr.create(this,[Rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function nh(t){return mt(t)}class kp{constructor(e){this.auth=e,this.observer=null,this.addObserver=FS(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function DT(t,e,n){const r=nh(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=av(e),{host:o,port:l}=LT(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||MT()}function av(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LT(t){const e=av(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Tp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Tp(o)}}}function Tp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function MT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nt("not implemented")}_getIdTokenResponse(e){return Nt("not implemented")}_linkToIdToken(e,n){return Nt("not implemented")}_getReauthenticationResolver(e){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(t,e){return gT(t,"POST","/v1/accounts:signInWithIdp",mT(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="http://localhost";class Zn extends uv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Jd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Zn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Or(e,n)}buildRequest(){const e={requestUri:bT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends cv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends xs{constructor(){super("facebook.com")}static credential(e){return Zn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends xs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com";Xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends xs{constructor(){super("github.com")}static credential(e){return Zn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.GITHUB_SIGN_IN_METHOD="github.com";Zt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends xs{constructor(){super("twitter.com")}static credential(e,n){return Zn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return en.credential(n,r)}catch{return null}}}en.TWITTER_SIGN_IN_METHOD="twitter.com";en.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jn._fromIdTokenResponse(e,r,i),o=xp(r);return new Vr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xp(r);return new Vr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends kn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ul.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ul(e,n,r,i)}}function dv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ul._fromErrorAndOperation(t,s,e,r):s})}async function FT(t,e,n=!1){const r=await us(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await us(t,dv(i,s,e,t),n);D(o.idToken,i,"internal-error");const l=eh(o.idToken);D(l,i,"internal-error");const{sub:a}=l;return D(t.uid===a,i,"user-mismatch"),Vr._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&zt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zT(t,e,n=!1){const r="signIn",i=await dv(t,r,e),s=await Vr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function jT(t,e,n,r){return mt(t).onIdTokenChanged(e,n,r)}function BT(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}const cl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cl,"1"),this.storage.removeItem(cl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(){const t=Re();return th(t)||Hl(t)}const HT=1e3,VT=10;class fv extends hv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=WT()&&PT(),this.fallbackToPolling=ov(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);RT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,VT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},HT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fv.type="LOCAL";const $T=fv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv extends hv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pv.type="SESSION";const mv=pv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Vl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await KT(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=rh("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return window}function qT(t){St().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function QT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function JT(){return gv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="firebaseLocalStorageDb",XT=1,dl="firebaseLocalStorage",yv="fbase_key";class Ns{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $l(t,e){return t.transaction([dl],e?"readwrite":"readonly").objectStore(dl)}function ZT(){const t=indexedDB.deleteDatabase(_v);return new Ns(t).toPromise()}function uc(){const t=indexedDB.open(_v,XT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dl,{keyPath:yv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dl)?e(r):(r.close(),await ZT(),e(await uc()))})})}async function Np(t,e,n){const r=$l(t,!0).put({[yv]:e,value:n});return new Ns(r).toPromise()}async function ex(t,e){const n=$l(t,!1).get(e),r=await new Ns(n).toPromise();return r===void 0?null:r.value}function Rp(t,e){const n=$l(t,!0).delete(e);return new Ns(n).toPromise()}const tx=800,nx=3;class vv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vl._getInstance(JT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QT(),!this.activeServiceWorker)return;this.sender=new GT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uc();return await Np(e,cl,"1"),await Rp(e,cl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Np(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ex(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$l(i,!1).getAll();return new Ns(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vv.type="LOCAL";const rx=vv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function sx(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Et("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ix().appendChild(r)})}function ox(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ts(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(t,e){return e?Rt(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih extends uv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ax(t){return zT(t.auth,new ih(t),t.bypassAuthState)}function ux(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),UT(n,new ih(t),t.bypassAuthState)}async function cx(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),FT(n,new ih(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ax;case"linkViaPopup":case"linkViaRedirect":return cx;case"reauthViaPopup":case"reauthViaRedirect":return ux;default:zt(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=new Ts(2e3,1e4);class vr extends wv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vr.currentPopupAction&&vr.currentPopupAction.cancel(),vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=rh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,dx.get())};e()}}vr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx="pendingRedirect",mo=new Map;class fx extends wv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=mo.get(this.auth._key());if(!e){try{const r=await px(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}mo.set(this.auth._key(),e)}return this.bypassAuthState||mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function px(t,e){const n=_x(e),r=gx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mx(t,e){mo.set(t._key(),e)}function gx(t){return Rt(t._redirectPersistence)}function _x(t){return po(hx,t.config.apiKey,t.name)}async function yx(t,e,n=!1){const r=nh(t),i=lx(r,e),o=await new fx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx=10*60*1e3;class wx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ex(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ev(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pp(e))}saveEventToCache(e){this.cachedEventUids.add(Pp(e)),this.lastProcessedEventTime=Date.now()}}function Pp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ev({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ex(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ev(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sx(t,e={}){return Wl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ix=/^https?/;async function kx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Sx(t);for(const n of e)try{if(Tx(n))return}catch{}zt(t,"unauthorized-domain")}function Tx(t){const e=ac(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ix.test(n))return!1;if(Cx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=new Ts(3e4,6e4);function Op(){const t=St().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Nx(t){return new Promise((e,n)=>{var r,i,s;function o(){Op(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Op(),n(Et(t,"network-request-failed"))},timeout:xx.get()})}if(!((i=(r=St().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=St().gapi)===null||s===void 0)&&s.load)o();else{const l=ox("iframefcb");return St()[l]=()=>{gapi.load?o():n(Et(t,"network-request-failed"))},sx(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw go=null,e})}let go=null;function Rx(t){return go=go||Nx(t),go}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=new Ts(5e3,15e3),Ox="__/auth/iframe",Ax="emulator/auth/iframe",Dx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mx(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zd(e,Ax):`https://${t.config.authDomain}/${Ox}`,r={apiKey:e.apiKey,appName:t.name,v:ws},i=Lx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Yr(r).slice(1)}`}async function bx(t){const e=await Rx(t),n=St().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:Mx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Et(t,"network-request-failed"),l=St().setTimeout(()=>{s(o)},Px.get());function a(){St().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ux=500,zx=600,jx="_blank",Bx="http://localhost";class Ap{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wx(t,e,n,r=Ux,i=zx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},Fx),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Re().toLowerCase();n&&(l=tv(u)?jx:n),ev(u)&&(e=e||Bx,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[m,g])=>`${h}${m}=${g},`,"");if(NT(u)&&l!=="_self")return Hx(e||"",l),new Ap(null);const d=window.open(e||"",l,c);D(d,t,"popup-blocked");try{d.focus()}catch{}return new Ap(d)}function Hx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx="__/auth/handler",$x="emulator/auth/handler";function Dp(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ws,eventId:i};if(e instanceof cv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof xs){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${Kx(t)}?${Yr(l).slice(1)}`}function Kx({config:t}){return t.emulator?Zd(t,$x):`https://${t.authDomain}/${Vx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="webStorageSupport";class Gx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mv,this._completeRedirectFn=yx,this._overrideRedirectResult=mx}async _openPopup(e,n,r,i){var s;jt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Dp(e,n,r,ac(),i);return Wx(e,o,rh())}async _openRedirect(e,n,r,i){return await this._originValidation(e),qT(Dp(e,n,r,ac(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bx(e),r=new wx(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ja,{type:ja},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ja];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ov()||th()||Hl()}}const qx=Gx;var Lp="@firebase/auth",Mp="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Jx(t){jr(new Gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{D(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),D(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lv(t)},c=new AT(l,a,u);return uT(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jr(new Gn("auth-internal",e=>{const n=nh(e.getProvider("auth").getImmediate());return(r=>new Qx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(Lp,Mp,Yx(t)),gn(Lp,Mp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx=5*60,Zx=w_("authIdTokenMaxAge")||Xx;let bp=null;const eN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Zx)return;const i=n==null?void 0:n.token;bp!==i&&(bp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tN(t=k_()){const e=md(t,"auth");if(e.isInitialized())return e.getImmediate();const n=aT(t,{popupRedirectResolver:qx,persistence:[rx,$T,mv]}),r=w_("authTokenSyncURL");if(r){const s=eN(r);BT(n,s,()=>s(n.currentUser)),jT(n,o=>s(o))}const i=v_("auth");return i&&DT(n,`http://${i}`),n}Jx("Browser");const sh=I.exports.createContext();function nN(t){const[e,n]=I.exports.useState(!1);return v(sh.Provider,{value:[e,n],children:t.children})}function rN({namaKetua:t,fotoKetua:e,namaWakil:n,fotoWakil:r,score:i,onclick:s}){return $("div",{className:"w-[95%] h-full py-3 px-3 flex gap-1 bg-slate-300 rounded-md justify-center items-start relative",children:[$("div",{className:"w-[40%] flex flex-col gap-2 justify-center items-center  text-[#202121] rounded-lg",children:[v("h1",{className:"font-medium",children:"Ketua"}),v("div",{className:"w-full h-full flex justify-center items-center",children:v("img",{src:e,className:"max-w-[80%] rounded",alt:""})}),v("p",{className:"max-w-[80%] text-lg font-semibold text-ellipsis text-center",children:t})]}),$("div",{className:"w-[40%] flex flex-col gap-2 justify-center items-center  text-[#202121] rounded-lg",children:[v("h1",{className:"font-medium",children:"Wakil Ketua"}),v("div",{className:"w-full h-full flex justify-center items-center",children:v("img",{src:r,className:"max-w-[80%] rounded",alt:""})}),v("p",{className:"max-w-[90%] text-lg font-semibold text-ellipsis text-center",children:n})]}),$("div",{className:"w-[20%] h-full flex flex-col gap-2 justify-center items-center bg-[#212121] my-auto  text-[#202121] p-2 rounded-md",children:[v("h1",{className:"text-white",children:"Total"}),v("p",{className:"max-w-[90%] text-xl font-bold text-white text-ellipsis",children:i})]}),v("button",{className:"absolute bottom-2 right-3 bg-red-600 rounded px-2",onClick:s,children:v("p",{className:"text-white",children:"Delete"})})]})}function iN(){const[t,e]=I.exports.useState();I.exports.useState([]);const[n,r]=I.exports.useState(!0),[i,s]=I.exports.useState(0),o=ad();I.exports.useContext(sh);const[l,a]=I.exports.useContext(Bl);I.exports.useEffect(()=>{a(JSON.parse(localStorage.getItem("user")));const c=as(),d=ol(c,"jayabuana");Vy(d,h=>{const m=h.val();let y=Object.values(m).slice(0);y.sort((f,p)=>p.score-f.score),e(y),r(!1);let N=0;y.map(f=>{N+=f.score}),s(N)})},[]);const u=(c,d,h,m,g,y)=>{const N=as();Hy(ol(N,"jayabuana/"+c),{nomor:c,namaKetua:d,namaWakil:h,fotoKetua:m,fotoWakil:g,score:y<=0?0:y-1}).then(f=>{}).catch(f=>{console.error(f)})};return $("div",{className:"container max-w-md mx-auto pt-8 px-8",children:[v("div",{className:"flex justify-center gap-4 mt-4 mb-5",children:v("h1",{className:"text-2xl font-semibold text-black text-center",children:"Hasil Pemilihan Ketua OSIS 2023"})}),n&&v(nT,{}),!n&&v("div",{className:"w-full  max-w-[400px] bg-slate-100  flex flex-col items-center mx-auto rounded-lg pb-4 pt-3 gap-3 ",children:$(Te,{children:[t==null?void 0:t.map(c=>v(rN,{namaKetua:c.namaKetua,namaWakil:c.namaWakil,fotoKetua:c.fotoKetua,fotoWakil:c.fotoWakil,score:c.score,onclick:()=>{u(c.nomor,c.namaKetua,c.namaWakil,c.fotoKetua,c.fotoWakil,c.score)}},c.nomor)),v("div",{className:"mt-4",children:$("h1",{className:"text-lg",children:["Total Suara Terkumpul : ",$("span",{className:"font-semibold",children:[" ",i]})]})})]})}),v("div",{className:"flex justify-center items-center my-5",children:v(sT,{name:"LOGOUT",click:()=>{localStorage.clear(),o("/"),window.location.reload()}})})]})}var sN="firebase",oN="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn(sN,oN,"app");const lN={apiKey:"AIzaSyDW9nnnPzbcUVF7a7D_VLwMoMvo71FryiI",authDomain:"jayabuana-cc7d9.firebaseapp.com",databaseURL:"https://jayabuana-cc7d9-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"jayabuana-cc7d9",storageBucket:"jayabuana-cc7d9.appspot.com",messagingSenderId:"219975896737",appId:"1:219975896737:web:86581b10fdd79ba3972ae0"},Sv=I_(lN);tN(Sv);as(Sv);function Cv(t,e){return function(){return t.apply(e,arguments)}}const{toString:Iv}=Object.prototype,{getPrototypeOf:oh}=Object,lh=(t=>e=>{const n=Iv.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Vt=t=>(t=t.toLowerCase(),e=>lh(e)===t),Kl=t=>e=>typeof e===t,{isArray:Rs}=Array,cc=Kl("undefined");function aN(t){return t!==null&&!cc(t)&&t.constructor!==null&&!cc(t.constructor)&&ei(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const kv=Vt("ArrayBuffer");function uN(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&kv(t.buffer),e}const cN=Kl("string"),ei=Kl("function"),Tv=Kl("number"),xv=t=>t!==null&&typeof t=="object",dN=t=>t===!0||t===!1,_o=t=>{if(lh(t)!=="object")return!1;const e=oh(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},hN=Vt("Date"),fN=Vt("File"),pN=Vt("Blob"),mN=Vt("FileList"),gN=t=>xv(t)&&ei(t.pipe),_N=t=>{const e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||Iv.call(t)===e||ei(t.toString)&&t.toString()===e)},yN=Vt("URLSearchParams"),vN=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Gl(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Rs(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let l;for(r=0;r<o;r++)l=s[r],e.call(null,t[l],l,t)}}function dc(){const t={},e=(n,r)=>{_o(t[r])&&_o(n)?t[r]=dc(t[r],n):_o(n)?t[r]=dc({},n):Rs(n)?t[r]=n.slice():t[r]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&Gl(arguments[n],e);return t}const wN=(t,e,n,{allOwnKeys:r}={})=>(Gl(e,(i,s)=>{n&&ei(i)?t[s]=Cv(i,n):t[s]=i},{allOwnKeys:r}),t),EN=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),SN=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},CN=(t,e,n,r)=>{let i,s,o;const l={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!l[o]&&(e[o]=t[o],l[o]=!0);t=n!==!1&&oh(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},IN=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},kN=t=>{if(!t)return null;if(Rs(t))return t;let e=t.length;if(!Tv(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},TN=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&oh(Uint8Array)),xN=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},NN=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},RN=Vt("HTMLFormElement"),PN=t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Fp=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),ON=Vt("RegExp"),Nv=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Gl(n,(i,s)=>{e(i,s,t)!==!1&&(r[s]=i)}),Object.defineProperties(t,r)},AN=t=>{Nv(t,(e,n)=>{const r=t[n];if(!!ei(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},DN=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Rs(t)?r(t):r(String(t).split(e)),n},LN=()=>{},MN=(t,e)=>(t=+t,Number.isFinite(t)?t:e),w={isArray:Rs,isArrayBuffer:kv,isBuffer:aN,isFormData:_N,isArrayBufferView:uN,isString:cN,isNumber:Tv,isBoolean:dN,isObject:xv,isPlainObject:_o,isUndefined:cc,isDate:hN,isFile:fN,isBlob:pN,isRegExp:ON,isFunction:ei,isStream:gN,isURLSearchParams:yN,isTypedArray:TN,isFileList:mN,forEach:Gl,merge:dc,extend:wN,trim:vN,stripBOM:EN,inherits:SN,toFlatObject:CN,kindOf:lh,kindOfTest:Vt,endsWith:IN,toArray:kN,forEachEntry:xN,matchAll:NN,isHTMLForm:RN,hasOwnProperty:Fp,hasOwnProp:Fp,reduceDescriptors:Nv,freezeMethods:AN,toObjectSet:DN,toCamelCase:PN,noop:LN,toFiniteNumber:MN};function W(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}w.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Rv=W.prototype,Pv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Pv[t]={value:t}});Object.defineProperties(W,Pv);Object.defineProperty(Rv,"isAxiosError",{value:!0});W.from=(t,e,n,r,i,s)=>{const o=Object.create(Rv);return w.toFlatObject(t,o,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),W.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var bN=typeof self=="object"?self.FormData:window.FormData;function hc(t){return w.isPlainObject(t)||w.isArray(t)}function Ov(t){return w.endsWith(t,"[]")?t.slice(0,-2):t}function Up(t,e,n){return t?t.concat(e).map(function(i,s){return i=Ov(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function FN(t){return w.isArray(t)&&!t.some(hc)}const UN=w.toFlatObject(w,{},null,function(e){return/^is[A-Z]/.test(e)});function zN(t){return t&&w.isFunction(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator]}function ql(t,e,n){if(!w.isObject(t))throw new TypeError("target must be an object");e=e||new(bN||FormData),n=w.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,N){return!w.isUndefined(N[y])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&zN(e);if(!w.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(w.isDate(g))return g.toISOString();if(!a&&w.isBlob(g))throw new W("Blob is not supported. Use a Buffer instead.");return w.isArrayBuffer(g)||w.isTypedArray(g)?a&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,y,N){let f=g;if(g&&!N&&typeof g=="object"){if(w.endsWith(y,"{}"))y=r?y:y.slice(0,-2),g=JSON.stringify(g);else if(w.isArray(g)&&FN(g)||w.isFileList(g)||w.endsWith(y,"[]")&&(f=w.toArray(g)))return y=Ov(y),f.forEach(function(_,E){!w.isUndefined(_)&&e.append(o===!0?Up([y],E,s):o===null?y:y+"[]",u(_))}),!1}return hc(g)?!0:(e.append(Up(N,y,s),u(g)),!1)}const d=[],h=Object.assign(UN,{defaultVisitor:c,convertValue:u,isVisitable:hc});function m(g,y){if(!w.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(g),w.forEach(g,function(f,p){(!w.isUndefined(f)&&i.call(e,f,w.isString(p)?p.trim():p,y,h))===!0&&m(f,y?y.concat(p):[p])}),d.pop()}}if(!w.isObject(t))throw new TypeError("data must be an object");return m(t),e}function zp(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function ah(t,e){this._pairs=[],t&&ql(t,this,e)}const Av=ah.prototype;Av.append=function(e,n){this._pairs.push([e,n])};Av.toString=function(e){const n=e?function(r){return e.call(this,r,zp)}:zp;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function jN(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Dv(t,e,n){if(!e)return t;const r=t.indexOf("#");r!==-1&&(t=t.slice(0,r));const i=n&&n.encode||jN,s=w.isURLSearchParams(e)?e.toString():new ah(e,n).toString(i);return s&&(t+=(t.indexOf("?")===-1?"?":"&")+s),t}class jp{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){w.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Lv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},BN=typeof URLSearchParams<"u"?URLSearchParams:ah,WN=FormData,HN=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),At={isBrowser:!0,classes:{URLSearchParams:BN,FormData:WN,Blob},isStandardBrowserEnv:HN,protocols:["http","https","file","blob","url","data"]};function VN(t,e){return ql(t,new At.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return At.isNode&&w.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function $N(t){return w.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function KN(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function Mv(t){function e(n,r,i,s){let o=n[s++];const l=Number.isFinite(+o),a=s>=n.length;return o=!o&&w.isArray(i)?i.length:o,a?(w.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!w.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&w.isArray(i[o])&&(i[o]=KN(i[o])),!l)}if(w.isFormData(t)&&w.isFunction(t.entries)){const n={};return w.forEachEntry(t,(r,i)=>{e($N(r),i,n,0)}),n}return null}function GN(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new W("Request failed with status code "+n.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const qN=At.isStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,l){const a=[];a.push(n+"="+encodeURIComponent(r)),w.isNumber(i)&&a.push("expires="+new Date(i).toGMTString()),w.isString(s)&&a.push("path="+s),w.isString(o)&&a.push("domain="+o),l===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function QN(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function YN(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function bv(t,e){return t&&!QN(e)?YN(t,e):e}const JN=At.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const l=w.isString(o)?i(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Ps(t,e,n){W.call(this,t==null?"canceled":t,W.ERR_CANCELED,e,n),this.name="CanceledError"}w.inherits(Ps,W,{__CANCEL__:!0});function XN(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}const ZN=w.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),eR=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&ZN[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Bp=Symbol("internals"),Fv=Symbol("defaults");function Ei(t){return t&&String(t).trim().toLowerCase()}function Zs(t){return t===!1||t==null?t:String(t)}function tR(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}function Wp(t,e,n,r){if(w.isFunction(r))return r.call(this,e,n);if(!!w.isString(e)){if(w.isString(r))return e.indexOf(r)!==-1;if(w.isRegExp(r))return r.test(e)}}function nR(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function rR(t,e){const n=w.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}function gi(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}function et(t,e){t&&this.set(t),this[Fv]=e||null}Object.assign(et.prototype,{set:function(t,e,n){const r=this;function i(s,o,l){const a=Ei(o);if(!a)throw new Error("header name must be a non-empty string");const u=gi(r,a);u&&l!==!0&&(r[u]===!1||l===!1)||(w.isArray(s)?s=s.map(Zs):s=Zs(s),r[u||o]=s)}return w.isPlainObject(t)?w.forEach(t,(s,o)=>{i(s,o,e)}):i(e,t,n),this},get:function(t,e){if(t=Ei(t),!t)return;const n=gi(this,t);if(n){const r=this[n];if(!e)return r;if(e===!0)return tR(r);if(w.isFunction(e))return e.call(this,r,n);if(w.isRegExp(e))return e.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(t,e){if(t=Ei(t),t){const n=gi(this,t);return!!(n&&(!e||Wp(this,this[n],n,e)))}return!1},delete:function(t,e){const n=this;let r=!1;function i(s){if(s=Ei(s),s){const o=gi(n,s);o&&(!e||Wp(n,n[o],o,e))&&(delete n[o],r=!0)}}return w.isArray(t)?t.forEach(i):i(t),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(t){const e=this,n={};return w.forEach(this,(r,i)=>{const s=gi(n,i);if(s){e[s]=Zs(r),delete e[i];return}const o=t?nR(i):String(i).trim();o!==i&&delete e[i],e[o]=Zs(r),n[o]=!0}),this},toJSON:function(){const t=Object.create(null);return w.forEach(Object.assign({},this[Fv]||null,this),(e,n)=>{e==null||e===!1||(t[n]=w.isArray(e)?e.join(", "):e)}),t}});Object.assign(et,{from:function(t){return w.isString(t)?new this(eR(t)):t instanceof this?t:new this(t)},accessor:function(t){const n=(this[Bp]=this[Bp]={accessors:{}}).accessors,r=this.prototype;function i(s){const o=Ei(s);n[o]||(rR(r,s),n[o]=!0)}return w.isArray(t)?t.forEach(i):i(t),this}});et.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);w.freezeMethods(et.prototype);w.freezeMethods(et);function iR(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(a){const u=Date.now(),c=r[s];o||(o=u),n[i]=a,r[i]=u;let d=s,h=0;for(;d!==i;)h+=n[d++],d=d%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),u-o<e)return;const m=c&&u-c;return m?Math.round(h*1e3/m):void 0}}function Hp(t,e){let n=0;const r=iR(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,l=s-n,a=r(l),u=s<=o;n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:l,rate:a||void 0,estimated:a&&o&&u?(o-s)/a:void 0};c[e?"download":"upload"]=!0,t(c)}}function Vp(t){return new Promise(function(n,r){let i=t.data;const s=et.from(t.headers).normalize(),o=t.responseType;let l;function a(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}w.isFormData(i)&&At.isStandardBrowserEnv&&s.setContentType(!1);let u=new XMLHttpRequest;if(t.auth){const m=t.auth.username||"",g=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(m+":"+g))}const c=bv(t.baseURL,t.url);u.open(t.method.toUpperCase(),Dv(c,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function d(){if(!u)return;const m=et.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),y={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:m,config:t,request:u};GN(function(f){n(f),a()},function(f){r(f),a()},y),u=null}if("onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(d)},u.onabort=function(){!u||(r(new W("Request aborted",W.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new W("Network Error",W.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let g=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const y=t.transitional||Lv;t.timeoutErrorMessage&&(g=t.timeoutErrorMessage),r(new W(g,y.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,t,u)),u=null},At.isStandardBrowserEnv){const m=(t.withCredentials||JN(c))&&t.xsrfCookieName&&qN.read(t.xsrfCookieName);m&&s.set(t.xsrfHeaderName,m)}i===void 0&&s.setContentType(null),"setRequestHeader"in u&&w.forEach(s.toJSON(),function(g,y){u.setRequestHeader(y,g)}),w.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",Hp(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Hp(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=m=>{!u||(r(!m||m.type?new Ps(null,t,u):m),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const h=XN(c);if(h&&At.protocols.indexOf(h)===-1){r(new W("Unsupported protocol "+h+":",W.ERR_BAD_REQUEST,t));return}u.send(i||null)})}const $p={http:Vp,xhr:Vp},Kp={getAdapter:t=>{if(w.isString(t)){const e=$p[t];if(!t)throw Error(w.hasOwnProp(t)?`Adapter '${t}' is not available in the build`:`Can not resolve adapter '${t}'`);return e}if(!w.isFunction(t))throw new TypeError("adapter is not a function");return t},adapters:$p},sR={"Content-Type":"application/x-www-form-urlencoded"};function oR(){let t;return typeof XMLHttpRequest<"u"?t=Kp.getAdapter("xhr"):typeof process<"u"&&w.kindOf(process)==="process"&&(t=Kp.getAdapter("http")),t}function lR(t,e,n){if(w.isString(t))try{return(e||JSON.parse)(t),w.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const ti={transitional:Lv,adapter:oR(),transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=w.isObject(e);if(s&&w.isHTMLForm(e)&&(e=new FormData(e)),w.isFormData(e))return i&&i?JSON.stringify(Mv(e)):e;if(w.isArrayBuffer(e)||w.isBuffer(e)||w.isStream(e)||w.isFile(e)||w.isBlob(e))return e;if(w.isArrayBufferView(e))return e.buffer;if(w.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return VN(e,this.formSerializer).toString();if((l=w.isFileList(e))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return ql(l?{"files[]":e}:e,a&&new a,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),lR(e)):e}],transformResponse:[function(e){const n=this.transitional||ti.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&w.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(l){if(o)throw l.name==="SyntaxError"?W.from(l,W.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:At.classes.FormData,Blob:At.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};w.forEach(["delete","get","head"],function(e){ti.headers[e]={}});w.forEach(["post","put","patch"],function(e){ti.headers[e]=w.merge(sR)});function Ba(t,e){const n=this||ti,r=e||n,i=et.from(r.headers);let s=r.data;return w.forEach(t,function(l){s=l.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Uv(t){return!!(t&&t.__CANCEL__)}function Wa(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ps}function Gp(t){return Wa(t),t.headers=et.from(t.headers),t.data=Ba.call(t,t.transformRequest),(t.adapter||ti.adapter)(t).then(function(r){return Wa(t),r.data=Ba.call(t,t.transformResponse,r),r.headers=et.from(r.headers),r},function(r){return Uv(r)||(Wa(t),r&&r.response&&(r.response.data=Ba.call(t,t.transformResponse,r.response),r.response.headers=et.from(r.response.headers))),Promise.reject(r)})}function ds(t,e){e=e||{};const n={};function r(u,c){return w.isPlainObject(u)&&w.isPlainObject(c)?w.merge(u,c):w.isPlainObject(c)?w.merge({},c):w.isArray(c)?c.slice():c}function i(u){if(w.isUndefined(e[u])){if(!w.isUndefined(t[u]))return r(void 0,t[u])}else return r(t[u],e[u])}function s(u){if(!w.isUndefined(e[u]))return r(void 0,e[u])}function o(u){if(w.isUndefined(e[u])){if(!w.isUndefined(t[u]))return r(void 0,t[u])}else return r(void 0,e[u])}function l(u){if(u in e)return r(t[u],e[u]);if(u in t)return r(void 0,t[u])}const a={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l};return w.forEach(Object.keys(t).concat(Object.keys(e)),function(c){const d=a[c]||i,h=d(c);w.isUndefined(h)&&d!==l||(n[c]=h)}),n}const zv="1.1.2",uh={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{uh[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const qp={};uh.transitional=function(e,n,r){function i(s,o){return"[Axios v"+zv+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,l)=>{if(e===!1)throw new W(i(o," has been removed"+(n?" in "+n:"")),W.ERR_DEPRECATED);return n&&!qp[o]&&(qp[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,l):!0}};function aR(t,e,n){if(typeof t!="object")throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const l=t[s],a=l===void 0||o(l,s,t);if(a!==!0)throw new W("option "+s+" must be "+a,W.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new W("Unknown option "+s,W.ERR_BAD_OPTION)}}const jv={assertOptions:aR,validators:uh},sr=jv.validators;class Bn{constructor(e){this.defaults=e,this.interceptors={request:new jp,response:new jp}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ds(this.defaults,n);const r=n.transitional;r!==void 0&&jv.assertOptions(r,{silentJSONParsing:sr.transitional(sr.boolean),forcedJSONParsing:sr.transitional(sr.boolean),clarifyTimeoutError:sr.transitional(sr.boolean)},!1),n.method=(n.method||this.defaults.method||"get").toLowerCase();const i=n.headers&&w.merge(n.headers.common,n.headers[n.method]);i&&w.forEach(["delete","get","head","post","put","patch","common"],function(m){delete n.headers[m]}),n.headers=new et(n.headers,i);const s=[];let o=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(o=o&&m.synchronous,s.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let a,u=0,c;if(!o){const h=[Gp.bind(this),void 0];for(h.unshift.apply(h,s),h.push.apply(h,l),c=h.length,a=Promise.resolve(n);u<c;)a=a.then(h[u++],h[u++]);return a}c=s.length;let d=n;for(u=0;u<c;){const h=s[u++],m=s[u++];try{d=h(d)}catch(g){m.call(this,g);break}}try{a=Gp.call(this,d)}catch(h){return Promise.reject(h)}for(u=0,c=l.length;u<c;)a=a.then(l[u++],l[u++]);return a}getUri(e){e=ds(this.defaults,e);const n=bv(e.baseURL,e.url);return Dv(n,e.params,e.paramsSerializer)}}w.forEach(["delete","get","head","options"],function(e){Bn.prototype[e]=function(n,r){return this.request(ds(r||{},{method:e,url:n,data:(r||{}).data}))}});w.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,l){return this.request(ds(l||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Bn.prototype[e]=n(),Bn.prototype[e+"Form"]=n(!0)});class ch{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{r.subscribe(l),s=l}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,l){r.reason||(r.reason=new Ps(s,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new ch(function(i){e=i}),cancel:e}}}function uR(t){return function(n){return t.apply(null,n)}}function cR(t){return w.isObject(t)&&t.isAxiosError===!0}function Bv(t){const e=new Bn(t),n=Cv(Bn.prototype.request,e);return w.extend(n,Bn.prototype,e,{allOwnKeys:!0}),w.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return Bv(ds(t,i))},n}const Ge=Bv(ti);Ge.Axios=Bn;Ge.CanceledError=Ps;Ge.CancelToken=ch;Ge.isCancel=Uv;Ge.VERSION=zv;Ge.toFormData=ql;Ge.AxiosError=W;Ge.Cancel=Ge.CanceledError;Ge.all=function(e){return Promise.all(e)};Ge.spread=uR;Ge.isAxiosError=cR;Ge.formToJSON=t=>Mv(w.isHTMLForm(t)?new FormData(t):t);function dR(){I.exports.useContext(sh),I.exports.useContext(Yd),I.exports.useContext($y),I.exports.useContext(Ky);const[t,e]=I.exports.useContext(Bl);return I.exports.useEffect(()=>{e(JSON.parse(localStorage.getItem("user")))},[]),v(Te,{children:t?v(Te,{children:v(xf,{children:v(Bu,{path:"/",element:v(iN,{})})})}):v(Te,{children:v(xf,{children:v(Bu,{path:"/",element:v(iT,{})})})})})}Va.createRoot(document.getElementById("root")).render(v(dS,{children:v(eT,{children:v(nN,{children:v(Jk,{children:v(Xk,{children:v(Zk,{children:v(dR,{})})})})})})}));
