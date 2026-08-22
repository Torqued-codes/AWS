var mv=Object.defineProperty;var xv=(s,e,t)=>e in s?mv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Qu=(s,e,t)=>xv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Y0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ju={exports:{}},Ka={},ed={exports:{}},Tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function gv(){if(Am)return Tt;Am=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),M=Symbol.iterator;function g(w){return w===null||typeof w!="object"?null:(w=M&&w[M]||w["@@iterator"],typeof w=="function"?w:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function S(w,F,xe){this.props=w,this.context=F,this.refs=C,this.updater=xe||y}S.prototype.isReactComponent={},S.prototype.setState=function(w,F){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,F,"setState")},S.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function v(){}v.prototype=S.prototype;function O(w,F,xe){this.props=w,this.context=F,this.refs=C,this.updater=xe||y}var k=O.prototype=new v;k.constructor=O,E(k,S.prototype),k.isPureReactComponent=!0;var N=Array.isArray,U=Object.prototype.hasOwnProperty,I={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function T(w,F,xe){var _e,Se={},X=null,ne=null;if(F!=null)for(_e in F.ref!==void 0&&(ne=F.ref),F.key!==void 0&&(X=""+F.key),F)U.call(F,_e)&&!B.hasOwnProperty(_e)&&(Se[_e]=F[_e]);var re=arguments.length-2;if(re===1)Se.children=xe;else if(1<re){for(var ye=Array(re),Pe=0;Pe<re;Pe++)ye[Pe]=arguments[Pe+2];Se.children=ye}if(w&&w.defaultProps)for(_e in re=w.defaultProps,re)Se[_e]===void 0&&(Se[_e]=re[_e]);return{$$typeof:s,type:w,key:X,ref:ne,props:Se,_owner:I.current}}function P(w,F){return{$$typeof:s,type:w.type,key:F,ref:w.ref,props:w.props,_owner:w._owner}}function H(w){return typeof w=="object"&&w!==null&&w.$$typeof===s}function V(w){var F={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(xe){return F[xe]})}var G=/\/+/g;function te(w,F){return typeof w=="object"&&w!==null&&w.key!=null?V(""+w.key):F.toString(36)}function me(w,F,xe,_e,Se){var X=typeof w;(X==="undefined"||X==="boolean")&&(w=null);var ne=!1;if(w===null)ne=!0;else switch(X){case"string":case"number":ne=!0;break;case"object":switch(w.$$typeof){case s:case e:ne=!0}}if(ne)return ne=w,Se=Se(ne),w=_e===""?"."+te(ne,0):_e,N(Se)?(xe="",w!=null&&(xe=w.replace(G,"$&/")+"/"),me(Se,F,xe,"",function(Pe){return Pe})):Se!=null&&(H(Se)&&(Se=P(Se,xe+(!Se.key||ne&&ne.key===Se.key?"":(""+Se.key).replace(G,"$&/")+"/")+w)),F.push(Se)),1;if(ne=0,_e=_e===""?".":_e+":",N(w))for(var re=0;re<w.length;re++){X=w[re];var ye=_e+te(X,re);ne+=me(X,F,xe,ye,Se)}else if(ye=g(w),typeof ye=="function")for(w=ye.call(w),re=0;!(X=w.next()).done;)X=X.value,ye=_e+te(X,re++),ne+=me(X,F,xe,ye,Se);else if(X==="object")throw F=String(w),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return ne}function Z(w,F,xe){if(w==null)return w;var _e=[],Se=0;return me(w,_e,"","",function(X){return F.call(xe,X,Se++)}),_e}function se(w){if(w._status===-1){var F=w._result;F=F(),F.then(function(xe){(w._status===0||w._status===-1)&&(w._status=1,w._result=xe)},function(xe){(w._status===0||w._status===-1)&&(w._status=2,w._result=xe)}),w._status===-1&&(w._status=0,w._result=F)}if(w._status===1)return w._result.default;throw w._result}var Q={current:null},Y={transition:null},ae={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:Y,ReactCurrentOwner:I};function L(){throw Error("act(...) is not supported in production builds of React.")}return Tt.Children={map:Z,forEach:function(w,F,xe){Z(w,function(){F.apply(this,arguments)},xe)},count:function(w){var F=0;return Z(w,function(){F++}),F},toArray:function(w){return Z(w,function(F){return F})||[]},only:function(w){if(!H(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},Tt.Component=S,Tt.Fragment=t,Tt.Profiler=o,Tt.PureComponent=O,Tt.StrictMode=r,Tt.Suspense=m,Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,Tt.act=L,Tt.cloneElement=function(w,F,xe){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var _e=E({},w.props),Se=w.key,X=w.ref,ne=w._owner;if(F!=null){if(F.ref!==void 0&&(X=F.ref,ne=I.current),F.key!==void 0&&(Se=""+F.key),w.type&&w.type.defaultProps)var re=w.type.defaultProps;for(ye in F)U.call(F,ye)&&!B.hasOwnProperty(ye)&&(_e[ye]=F[ye]===void 0&&re!==void 0?re[ye]:F[ye])}var ye=arguments.length-2;if(ye===1)_e.children=xe;else if(1<ye){re=Array(ye);for(var Pe=0;Pe<ye;Pe++)re[Pe]=arguments[Pe+2];_e.children=re}return{$$typeof:s,type:w.type,key:Se,ref:X,props:_e,_owner:ne}},Tt.createContext=function(w){return w={$$typeof:u,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:l,_context:w},w.Consumer=w},Tt.createElement=T,Tt.createFactory=function(w){var F=T.bind(null,w);return F.type=w,F},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(w){return{$$typeof:h,render:w}},Tt.isValidElement=H,Tt.lazy=function(w){return{$$typeof:_,_payload:{_status:-1,_result:w},_init:se}},Tt.memo=function(w,F){return{$$typeof:p,type:w,compare:F===void 0?null:F}},Tt.startTransition=function(w){var F=Y.transition;Y.transition={};try{w()}finally{Y.transition=F}},Tt.unstable_act=L,Tt.useCallback=function(w,F){return Q.current.useCallback(w,F)},Tt.useContext=function(w){return Q.current.useContext(w)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(w){return Q.current.useDeferredValue(w)},Tt.useEffect=function(w,F){return Q.current.useEffect(w,F)},Tt.useId=function(){return Q.current.useId()},Tt.useImperativeHandle=function(w,F,xe){return Q.current.useImperativeHandle(w,F,xe)},Tt.useInsertionEffect=function(w,F){return Q.current.useInsertionEffect(w,F)},Tt.useLayoutEffect=function(w,F){return Q.current.useLayoutEffect(w,F)},Tt.useMemo=function(w,F){return Q.current.useMemo(w,F)},Tt.useReducer=function(w,F,xe){return Q.current.useReducer(w,F,xe)},Tt.useRef=function(w){return Q.current.useRef(w)},Tt.useState=function(w){return Q.current.useState(w)},Tt.useSyncExternalStore=function(w,F,xe){return Q.current.useSyncExternalStore(w,F,xe)},Tt.useTransition=function(){return Q.current.useTransition()},Tt.version="18.3.1",Tt}var Cm;function If(){return Cm||(Cm=1,ed.exports=gv()),ed.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function vv(){if(Rm)return Ka;Rm=1;var s=If(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(h,m,p){var _,M={},g=null,y=null;p!==void 0&&(g=""+p),m.key!==void 0&&(g=""+m.key),m.ref!==void 0&&(y=m.ref);for(_ in m)r.call(m,_)&&!l.hasOwnProperty(_)&&(M[_]=m[_]);if(h&&h.defaultProps)for(_ in m=h.defaultProps,m)M[_]===void 0&&(M[_]=m[_]);return{$$typeof:e,type:h,key:g,ref:y,props:M,_owner:o.current}}return Ka.Fragment=t,Ka.jsx=u,Ka.jsxs=u,Ka}var Nm;function _v(){return Nm||(Nm=1,Ju.exports=vv()),Ju.exports}var d=_v(),Ae=If();const yv=Y0(Ae);var wl={},td={exports:{}},jn={},nd={exports:{}},id={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function Sv(){return Pm||(Pm=1,(function(s){function e(Y,ae){var L=Y.length;Y.push(ae);e:for(;0<L;){var w=L-1>>>1,F=Y[w];if(0<o(F,ae))Y[w]=ae,Y[L]=F,L=w;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var ae=Y[0],L=Y.pop();if(L!==ae){Y[0]=L;e:for(var w=0,F=Y.length,xe=F>>>1;w<xe;){var _e=2*(w+1)-1,Se=Y[_e],X=_e+1,ne=Y[X];if(0>o(Se,L))X<F&&0>o(ne,Se)?(Y[w]=ne,Y[X]=L,w=X):(Y[w]=Se,Y[_e]=L,w=_e);else if(X<F&&0>o(ne,L))Y[w]=ne,Y[X]=L,w=X;else break e}}return ae}function o(Y,ae){var L=Y.sortIndex-ae.sortIndex;return L!==0?L:Y.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var m=[],p=[],_=1,M=null,g=3,y=!1,E=!1,C=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(Y){for(var ae=t(p);ae!==null;){if(ae.callback===null)r(p);else if(ae.startTime<=Y)r(p),ae.sortIndex=ae.expirationTime,e(m,ae);else break;ae=t(p)}}function N(Y){if(C=!1,k(Y),!E)if(t(m)!==null)E=!0,se(U);else{var ae=t(p);ae!==null&&Q(N,ae.startTime-Y)}}function U(Y,ae){E=!1,C&&(C=!1,v(T),T=-1),y=!0;var L=g;try{for(k(ae),M=t(m);M!==null&&(!(M.expirationTime>ae)||Y&&!V());){var w=M.callback;if(typeof w=="function"){M.callback=null,g=M.priorityLevel;var F=w(M.expirationTime<=ae);ae=s.unstable_now(),typeof F=="function"?M.callback=F:M===t(m)&&r(m),k(ae)}else r(m);M=t(m)}if(M!==null)var xe=!0;else{var _e=t(p);_e!==null&&Q(N,_e.startTime-ae),xe=!1}return xe}finally{M=null,g=L,y=!1}}var I=!1,B=null,T=-1,P=5,H=-1;function V(){return!(s.unstable_now()-H<P)}function G(){if(B!==null){var Y=s.unstable_now();H=Y;var ae=!0;try{ae=B(!0,Y)}finally{ae?te():(I=!1,B=null)}}else I=!1}var te;if(typeof O=="function")te=function(){O(G)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,Z=me.port2;me.port1.onmessage=G,te=function(){Z.postMessage(null)}}else te=function(){S(G,0)};function se(Y){B=Y,I||(I=!0,te())}function Q(Y,ae){T=S(function(){Y(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){E||y||(E=!0,se(U))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(m)},s.unstable_next=function(Y){switch(g){case 1:case 2:case 3:var ae=3;break;default:ae=g}var L=g;g=ae;try{return Y()}finally{g=L}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,ae){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var L=g;g=Y;try{return ae()}finally{g=L}},s.unstable_scheduleCallback=function(Y,ae,L){var w=s.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?w+L:w):L=w,Y){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=L+F,Y={id:_++,callback:ae,priorityLevel:Y,startTime:L,expirationTime:F,sortIndex:-1},L>w?(Y.sortIndex=L,e(p,Y),t(m)===null&&Y===t(p)&&(C?(v(T),T=-1):C=!0,Q(N,L-w))):(Y.sortIndex=F,e(m,Y),E||y||(E=!0,se(U))),Y},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(Y){var ae=g;return function(){var L=g;g=ae;try{return Y.apply(this,arguments)}finally{g=L}}}})(id)),id}var Dm;function Mv(){return Dm||(Dm=1,nd.exports=Sv()),nd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function bv(){if(Lm)return jn;Lm=1;var s=If(),e=Mv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},M={};function g(n){return m.call(M,n)?!0:m.call(_,n)?!1:p.test(n)?M[n]=!0:(_[n]=!0,!1)}function y(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||y(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,c,f,x,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=x,this.removeEmptyString=A}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function O(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,O);S[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,O);S[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,O);S[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function k(n,i,a,c){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,f,c)&&(a=null),c||f===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),I=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),V=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),Y=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var L=Object.assign,w;function F(n){if(w===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);w=i&&i[1]||""}return`
`+w+n}var xe=!1;function _e(n,i){if(!n||xe)return"";xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(pe){var c=pe}Reflect.construct(n,[],i)}else{try{i.call()}catch(pe){c=pe}n.call(i.prototype)}else{try{throw Error()}catch(pe){c=pe}n()}}catch(pe){if(pe&&c&&typeof pe.stack=="string"){for(var f=pe.stack.split(`
`),x=c.stack.split(`
`),A=f.length-1,z=x.length-1;1<=A&&0<=z&&f[A]!==x[z];)z--;for(;1<=A&&0<=z;A--,z--)if(f[A]!==x[z]){if(A!==1||z!==1)do if(A--,z--,0>z||f[A]!==x[z]){var j=`
`+f[A].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=A&&0<=z);break}}}finally{xe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?F(n):""}function Se(n){switch(n.tag){case 5:return F(n.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return n=_e(n.type,!1),n;case 11:return n=_e(n.type.render,!1),n;case 1:return n=_e(n.type,!0),n;default:return""}}function X(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case B:return"Fragment";case I:return"Portal";case P:return"Profiler";case T:return"StrictMode";case te:return"Suspense";case me:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case H:return(n._context.displayName||"Context")+".Provider";case G:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Z:return i=n.displayName||null,i!==null?i:X(n.type)||"Memo";case se:i=n._payload,n=n._init;try{return X(n(i))}catch{}}return null}function ne(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ye(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Pe(n){var i=ye(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,x=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(A){c=""+A,x.call(this,A)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Re(n){n._valueTracker||(n._valueTracker=Pe(n))}function lt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=ye(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function qe(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function He(n,i){var a=i.checked;return L({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ot(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=re(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(n,i){i=i.checked,i!=null&&k(n,"checked",i,!1)}function pt(n,i){ct(n,i);var a=re(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?St(n,i.type,a):i.hasOwnProperty("defaultValue")&&St(n,i.type,re(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Te(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function St(n,i,a){(i!=="number"||qe(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var bt=Array.isArray;function Rt(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+re(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Ft(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return L({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(bt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:re(a)}}function Zt(n,i){var a=re(i.value),c=re(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function st(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function D(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function b(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?D(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var q,ie=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(q=q||document.createElement("div"),q.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=q.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function fe(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(be).forEach(function(n){Ne.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),be[i]=be[n]})});function de(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||be.hasOwnProperty(n)&&be[n]?(""+i).trim():i+"px"}function ve(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=de(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var ze=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qe(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ie(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oe=null;function nt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var at=null,ft=null,W=null;function Ue(n){if(n=Ua(n)){if(typeof at!="function")throw Error(t(280));var i=n.stateNode;i&&(i=zo(i),at(n.stateNode,n.type,i))}}function ge(n){ft?W?W.push(n):W=[n]:ft=n}function ke(){if(ft){var n=ft,i=W;if(W=ft=null,Ue(n),i)for(n=0;n<i.length;n++)Ue(i[n])}}function Be(n,i){return n(i)}function Me(){}var Ke=!1;function Ye(n,i,a){if(Ke)return n(i,a);Ke=!0;try{return Be(n,i,a)}finally{Ke=!1,(ft!==null||W!==null)&&(Me(),ke())}}function Vt(n,i){var a=n.stateNode;if(a===null)return null;var c=zo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ut=!1;if(h)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){Ut=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{Ut=!1}function ii(n,i,a,c,f,x,A,z,j){var pe=Array.prototype.slice.call(arguments,3);try{i.apply(a,pe)}catch(Ee){this.onError(Ee)}}var Hr=!1,gs=null,Gr=!1,jr=null,Sc={onError:function(n){Hr=!0,gs=n}};function So(n,i,a,c,f,x,A,z,j){Hr=!1,gs=null,ii.apply(Sc,arguments)}function Mo(n,i,a,c,f,x,A,z,j){if(So.apply(this,arguments),Hr){if(Hr){var pe=gs;Hr=!1,gs=null}else throw Error(t(198));Gr||(Gr=!0,jr=pe)}}function Ln(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function vs(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ma(n){if(Ln(n)!==n)throw Error(t(188))}function bo(n){var i=n.alternate;if(!i){if(i=Ln(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var x=f.alternate;if(x===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===x.child){for(x=f.child;x;){if(x===a)return ma(f),n;if(x===c)return ma(f),i;x=x.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=x;else{for(var A=!1,z=f.child;z;){if(z===a){A=!0,a=f,c=x;break}if(z===c){A=!0,c=f,a=x;break}z=z.sibling}if(!A){for(z=x.child;z;){if(z===a){A=!0,a=x,c=f;break}if(z===c){A=!0,c=x,a=f;break}z=z.sibling}if(!A)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Wr(n){return n=bo(n),n!==null?xa(n):null}function xa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=xa(n);if(i!==null)return i;n=n.sibling}return null}var Xr=e.unstable_scheduleCallback,ga=e.unstable_cancelCallback,wo=e.unstable_shouldYield,Mc=e.unstable_requestPaint,Qt=e.unstable_now,bc=e.unstable_getCurrentPriorityLevel,va=e.unstable_ImmediatePriority,R=e.unstable_UserBlockingPriority,J=e.unstable_NormalPriority,he=e.unstable_LowPriority,ce=e.unstable_IdlePriority,le=null,Fe=null;function We(n){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(le,n,void 0,(n.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:vt,Je=Math.log,rt=Math.LN2;function vt(n){return n>>>=0,n===0?32:31-(Je(n)/rt|0)|0}var _t=64,tt=4194304;function Pt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Gt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,x=n.pingedLanes,A=a&268435455;if(A!==0){var z=A&~f;z!==0?c=Pt(z):(x&=A,x!==0&&(c=Pt(x)))}else A=a&~f,A!==0?c=Pt(A):x!==0&&(c=Pt(x));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,x=i&-i,f>=x||f===16&&(x&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Le(i),f=1<<a,c|=n[a],i&=~f;return c}function Yt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,x=n.pendingLanes;0<x;){var A=31-Le(x),z=1<<A,j=f[A];j===-1?((z&a)===0||(z&c)!==0)&&(f[A]=Yt(z,i)):j<=i&&(n.expiredLanes|=z),x&=~z}}function an(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ge(){var n=_t;return _t<<=1,(_t&4194240)===0&&(_t=64),n}function yn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function wt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Le(i),n[i]=a}function Fn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-Le(a),x=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~x}}function On(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Le(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var Et=0;function ji(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var kt,Wt,hi,zt,pi,Ti=!1,qr=[],cr=null,ur=null,dr=null,_a=new Map,ya=new Map,fr=[],Fx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uh(n,i){switch(n){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":_a.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(i.pointerId)}}function Sa(n,i,a,c,f,x){return n===null||n.nativeEvent!==x?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:x,targetContainers:[f]},i!==null&&(i=Ua(i),i!==null&&Wt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Ox(n,i,a,c,f){switch(i){case"focusin":return cr=Sa(cr,n,i,a,c,f),!0;case"dragenter":return ur=Sa(ur,n,i,a,c,f),!0;case"mouseover":return dr=Sa(dr,n,i,a,c,f),!0;case"pointerover":var x=f.pointerId;return _a.set(x,Sa(_a.get(x)||null,n,i,a,c,f)),!0;case"gotpointercapture":return x=f.pointerId,ya.set(x,Sa(ya.get(x)||null,n,i,a,c,f)),!0}return!1}function dh(n){var i=Yr(n.target);if(i!==null){var a=Ln(i);if(a!==null){if(i=a.tag,i===13){if(i=vs(a),i!==null){n.blockedOn=i,pi(n.priority,function(){hi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Eo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ec(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Oe=c,a.target.dispatchEvent(c),Oe=null}else return i=Ua(a),i!==null&&Wt(i),n.blockedOn=a,!1;i.shift()}return!0}function fh(n,i,a){Eo(n)&&a.delete(i)}function zx(){Ti=!1,cr!==null&&Eo(cr)&&(cr=null),ur!==null&&Eo(ur)&&(ur=null),dr!==null&&Eo(dr)&&(dr=null),_a.forEach(fh),ya.forEach(fh)}function Ma(n,i){n.blockedOn===i&&(n.blockedOn=null,Ti||(Ti=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,zx)))}function ba(n){function i(f){return Ma(f,n)}if(0<qr.length){Ma(qr[0],n);for(var a=1;a<qr.length;a++){var c=qr[a];c.blockedOn===n&&(c.blockedOn=null)}}for(cr!==null&&Ma(cr,n),ur!==null&&Ma(ur,n),dr!==null&&Ma(dr,n),_a.forEach(i),ya.forEach(i),a=0;a<fr.length;a++)c=fr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<fr.length&&(a=fr[0],a.blockedOn===null);)dh(a),a.blockedOn===null&&fr.shift()}var _s=N.ReactCurrentBatchConfig,To=!0;function Bx(n,i,a,c){var f=Et,x=_s.transition;_s.transition=null;try{Et=1,wc(n,i,a,c)}finally{Et=f,_s.transition=x}}function Vx(n,i,a,c){var f=Et,x=_s.transition;_s.transition=null;try{Et=4,wc(n,i,a,c)}finally{Et=f,_s.transition=x}}function wc(n,i,a,c){if(To){var f=Ec(n,i,a,c);if(f===null)Hc(n,i,c,Ao,a),uh(n,c);else if(Ox(f,n,i,a,c))c.stopPropagation();else if(uh(n,c),i&4&&-1<Fx.indexOf(n)){for(;f!==null;){var x=Ua(f);if(x!==null&&kt(x),x=Ec(n,i,a,c),x===null&&Hc(n,i,c,Ao,a),x===f)break;f=x}f!==null&&c.stopPropagation()}else Hc(n,i,c,null,a)}}var Ao=null;function Ec(n,i,a,c){if(Ao=null,n=nt(c),n=Yr(n),n!==null)if(i=Ln(n),i===null)n=null;else if(a=i.tag,a===13){if(n=vs(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ao=n,null}function hh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bc()){case va:return 1;case R:return 4;case J:case he:return 16;case ce:return 536870912;default:return 16}default:return 16}}var hr=null,Tc=null,Co=null;function ph(){if(Co)return Co;var n,i=Tc,a=i.length,c,f="value"in hr?hr.value:hr.textContent,x=f.length;for(n=0;n<a&&i[n]===f[n];n++);var A=a-n;for(c=1;c<=A&&i[a-c]===f[x-c];c++);return Co=f.slice(n,1<c?1-c:void 0)}function Ro(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function No(){return!0}function mh(){return!1}function $n(n){function i(a,c,f,x,A){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=x,this.target=A,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(a=n[z],this[z]=a?a(x):x[z]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?No:mh,this.isPropagationStopped=mh,this}return L(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),i}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ac=$n(ys),wa=L({},ys,{view:0,detail:0}),Hx=$n(wa),Cc,Rc,Ea,Po=L({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ea&&(Ea&&n.type==="mousemove"?(Cc=n.screenX-Ea.screenX,Rc=n.screenY-Ea.screenY):Rc=Cc=0,Ea=n),Cc)},movementY:function(n){return"movementY"in n?n.movementY:Rc}}),xh=$n(Po),Gx=L({},Po,{dataTransfer:0}),jx=$n(Gx),Wx=L({},wa,{relatedTarget:0}),Nc=$n(Wx),Xx=L({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),qx=$n(Xx),Yx=L({},ys,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),$x=$n(Yx),Kx=L({},ys,{data:0}),gh=$n(Kx),Zx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Jx[n])?!!i[n]:!1}function Pc(){return eg}var tg=L({},wa,{key:function(n){if(n.key){var i=Zx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ro(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Qx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pc,charCode:function(n){return n.type==="keypress"?Ro(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ro(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ng=$n(tg),ig=L({},Po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vh=$n(ig),rg=L({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pc}),sg=$n(rg),ag=L({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),og=$n(ag),lg=L({},Po,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),cg=$n(lg),ug=[9,13,27,32],Dc=h&&"CompositionEvent"in window,Ta=null;h&&"documentMode"in document&&(Ta=document.documentMode);var dg=h&&"TextEvent"in window&&!Ta,_h=h&&(!Dc||Ta&&8<Ta&&11>=Ta),yh=" ",Sh=!1;function Mh(n,i){switch(n){case"keyup":return ug.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ss=!1;function fg(n,i){switch(n){case"compositionend":return bh(i);case"keypress":return i.which!==32?null:(Sh=!0,yh);case"textInput":return n=i.data,n===yh&&Sh?null:n;default:return null}}function hg(n,i){if(Ss)return n==="compositionend"||!Dc&&Mh(n,i)?(n=ph(),Co=Tc=hr=null,Ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _h&&i.locale!=="ko"?null:i.data;default:return null}}var pg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!pg[n.type]:i==="textarea"}function Eh(n,i,a,c){ge(c),i=ko(i,"onChange"),0<i.length&&(a=new Ac("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Aa=null,Ca=null;function mg(n){Gh(n,0)}function Do(n){var i=Ts(n);if(lt(i))return n}function xg(n,i){if(n==="change")return i}var Th=!1;if(h){var Lc;if(h){var Ic="oninput"in document;if(!Ic){var Ah=document.createElement("div");Ah.setAttribute("oninput","return;"),Ic=typeof Ah.oninput=="function"}Lc=Ic}else Lc=!1;Th=Lc&&(!document.documentMode||9<document.documentMode)}function Ch(){Aa&&(Aa.detachEvent("onpropertychange",Rh),Ca=Aa=null)}function Rh(n){if(n.propertyName==="value"&&Do(Ca)){var i=[];Eh(i,Ca,n,nt(n)),Ye(mg,i)}}function gg(n,i,a){n==="focusin"?(Ch(),Aa=i,Ca=a,Aa.attachEvent("onpropertychange",Rh)):n==="focusout"&&Ch()}function vg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Do(Ca)}function _g(n,i){if(n==="click")return Do(i)}function yg(n,i){if(n==="input"||n==="change")return Do(i)}function Sg(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var mi=typeof Object.is=="function"?Object.is:Sg;function Ra(n,i){if(mi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!m.call(i,f)||!mi(n[f],i[f]))return!1}return!0}function Nh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ph(n,i){var a=Nh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nh(a)}}function Dh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Dh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Lh(){for(var n=window,i=qe();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=qe(n.document)}return i}function Uc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Mg(n){var i=Lh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Dh(a.ownerDocument.documentElement,a)){if(c!==null&&Uc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,x=Math.min(c.start,f);c=c.end===void 0?x:Math.min(c.end,f),!n.extend&&x>c&&(f=c,c=x,x=f),f=Ph(a,x);var A=Ph(a,c);f&&A&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),x>c?(n.addRange(i),n.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var bg=h&&"documentMode"in document&&11>=document.documentMode,Ms=null,kc=null,Na=null,Fc=!1;function Ih(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fc||Ms==null||Ms!==qe(c)||(c=Ms,"selectionStart"in c&&Uc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Na&&Ra(Na,c)||(Na=c,c=ko(kc,"onSelect"),0<c.length&&(i=new Ac("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ms)))}function Lo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var bs={animationend:Lo("Animation","AnimationEnd"),animationiteration:Lo("Animation","AnimationIteration"),animationstart:Lo("Animation","AnimationStart"),transitionend:Lo("Transition","TransitionEnd")},Oc={},Uh={};h&&(Uh=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Io(n){if(Oc[n])return Oc[n];if(!bs[n])return n;var i=bs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Uh)return Oc[n]=i[a];return n}var kh=Io("animationend"),Fh=Io("animationiteration"),Oh=Io("animationstart"),zh=Io("transitionend"),Bh=new Map,Vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(n,i){Bh.set(n,i),l(i,[n])}for(var zc=0;zc<Vh.length;zc++){var Bc=Vh[zc],wg=Bc.toLowerCase(),Eg=Bc[0].toUpperCase()+Bc.slice(1);pr(wg,"on"+Eg)}pr(kh,"onAnimationEnd"),pr(Fh,"onAnimationIteration"),pr(Oh,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(zh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));function Hh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Mo(c,i,void 0,n),n.currentTarget=null}function Gh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var x=void 0;if(i)for(var A=c.length-1;0<=A;A--){var z=c[A],j=z.instance,pe=z.currentTarget;if(z=z.listener,j!==x&&f.isPropagationStopped())break e;Hh(f,z,pe),x=j}else for(A=0;A<c.length;A++){if(z=c[A],j=z.instance,pe=z.currentTarget,z=z.listener,j!==x&&f.isPropagationStopped())break e;Hh(f,z,pe),x=j}}}if(Gr)throw n=jr,Gr=!1,jr=null,n}function Xt(n,i){var a=i[Yc];a===void 0&&(a=i[Yc]=new Set);var c=n+"__bubble";a.has(c)||(jh(i,n,2,!1),a.add(c))}function Vc(n,i,a){var c=0;i&&(c|=4),jh(a,n,c,i)}var Uo="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[Uo]){n[Uo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Tg.has(a)||Vc(a,!1,n),Vc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Uo]||(i[Uo]=!0,Vc("selectionchange",!1,i))}}function jh(n,i,a,c){switch(hh(i)){case 1:var f=Bx;break;case 4:f=Vx;break;default:f=wc}a=f.bind(null,i,a,n),f=void 0,!Ut||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Hc(n,i,a,c,f){var x=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var z=c.stateNode.containerInfo;if(z===f||z.nodeType===8&&z.parentNode===f)break;if(A===4)for(A=c.return;A!==null;){var j=A.tag;if((j===3||j===4)&&(j=A.stateNode.containerInfo,j===f||j.nodeType===8&&j.parentNode===f))return;A=A.return}for(;z!==null;){if(A=Yr(z),A===null)return;if(j=A.tag,j===5||j===6){c=x=A;continue e}z=z.parentNode}}c=c.return}Ye(function(){var pe=x,Ee=nt(a),Ce=[];e:{var we=Bh.get(n);if(we!==void 0){var je=Ac,Ze=n;switch(n){case"keypress":if(Ro(a)===0)break e;case"keydown":case"keyup":je=ng;break;case"focusin":Ze="focus",je=Nc;break;case"focusout":Ze="blur",je=Nc;break;case"beforeblur":case"afterblur":je=Nc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":je=xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":je=jx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":je=sg;break;case kh:case Fh:case Oh:je=qx;break;case zh:je=og;break;case"scroll":je=Hx;break;case"wheel":je=cg;break;case"copy":case"cut":case"paste":je=$x;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":je=vh}var et=(i&4)!==0,sn=!et&&n==="scroll",oe=et?we!==null?we+"Capture":null:we;et=[];for(var K=pe,ue;K!==null;){ue=K;var De=ue.stateNode;if(ue.tag===5&&De!==null&&(ue=De,oe!==null&&(De=Vt(K,oe),De!=null&&et.push(La(K,De,ue)))),sn)break;K=K.return}0<et.length&&(we=new je(we,Ze,null,a,Ee),Ce.push({event:we,listeners:et}))}}if((i&7)===0){e:{if(we=n==="mouseover"||n==="pointerover",je=n==="mouseout"||n==="pointerout",we&&a!==Oe&&(Ze=a.relatedTarget||a.fromElement)&&(Yr(Ze)||Ze[Wi]))break e;if((je||we)&&(we=Ee.window===Ee?Ee:(we=Ee.ownerDocument)?we.defaultView||we.parentWindow:window,je?(Ze=a.relatedTarget||a.toElement,je=pe,Ze=Ze?Yr(Ze):null,Ze!==null&&(sn=Ln(Ze),Ze!==sn||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(je=null,Ze=pe),je!==Ze)){if(et=xh,De="onMouseLeave",oe="onMouseEnter",K="mouse",(n==="pointerout"||n==="pointerover")&&(et=vh,De="onPointerLeave",oe="onPointerEnter",K="pointer"),sn=je==null?we:Ts(je),ue=Ze==null?we:Ts(Ze),we=new et(De,K+"leave",je,a,Ee),we.target=sn,we.relatedTarget=ue,De=null,Yr(Ee)===pe&&(et=new et(oe,K+"enter",Ze,a,Ee),et.target=ue,et.relatedTarget=sn,De=et),sn=De,je&&Ze)t:{for(et=je,oe=Ze,K=0,ue=et;ue;ue=ws(ue))K++;for(ue=0,De=oe;De;De=ws(De))ue++;for(;0<K-ue;)et=ws(et),K--;for(;0<ue-K;)oe=ws(oe),ue--;for(;K--;){if(et===oe||oe!==null&&et===oe.alternate)break t;et=ws(et),oe=ws(oe)}et=null}else et=null;je!==null&&Wh(Ce,we,je,et,!1),Ze!==null&&sn!==null&&Wh(Ce,sn,Ze,et,!0)}}e:{if(we=pe?Ts(pe):window,je=we.nodeName&&we.nodeName.toLowerCase(),je==="select"||je==="input"&&we.type==="file")var it=xg;else if(wh(we))if(Th)it=yg;else{it=vg;var ut=gg}else(je=we.nodeName)&&je.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(it=_g);if(it&&(it=it(n,pe))){Eh(Ce,it,a,Ee);break e}ut&&ut(n,we,pe),n==="focusout"&&(ut=we._wrapperState)&&ut.controlled&&we.type==="number"&&St(we,"number",we.value)}switch(ut=pe?Ts(pe):window,n){case"focusin":(wh(ut)||ut.contentEditable==="true")&&(Ms=ut,kc=pe,Na=null);break;case"focusout":Na=kc=Ms=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,Ih(Ce,a,Ee);break;case"selectionchange":if(bg)break;case"keydown":case"keyup":Ih(Ce,a,Ee)}var dt;if(Dc)e:{switch(n){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else Ss?Mh(n,a)&&(gt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(_h&&a.locale!=="ko"&&(Ss||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&Ss&&(dt=ph()):(hr=Ee,Tc="value"in hr?hr.value:hr.textContent,Ss=!0)),ut=ko(pe,gt),0<ut.length&&(gt=new gh(gt,n,null,a,Ee),Ce.push({event:gt,listeners:ut}),dt?gt.data=dt:(dt=bh(a),dt!==null&&(gt.data=dt)))),(dt=dg?fg(n,a):hg(n,a))&&(pe=ko(pe,"onBeforeInput"),0<pe.length&&(Ee=new gh("onBeforeInput","beforeinput",null,a,Ee),Ce.push({event:Ee,listeners:pe}),Ee.data=dt))}Gh(Ce,i)})}function La(n,i,a){return{instance:n,listener:i,currentTarget:a}}function ko(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,x=f.stateNode;f.tag===5&&x!==null&&(f=x,x=Vt(n,a),x!=null&&c.unshift(La(n,x,f)),x=Vt(n,i),x!=null&&c.push(La(n,x,f))),n=n.return}return c}function ws(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Wh(n,i,a,c,f){for(var x=i._reactName,A=[];a!==null&&a!==c;){var z=a,j=z.alternate,pe=z.stateNode;if(j!==null&&j===c)break;z.tag===5&&pe!==null&&(z=pe,f?(j=Vt(a,x),j!=null&&A.unshift(La(a,j,z))):f||(j=Vt(a,x),j!=null&&A.push(La(a,j,z)))),a=a.return}A.length!==0&&n.push({event:i,listeners:A})}var Ag=/\r\n?/g,Cg=/\u0000|\uFFFD/g;function Xh(n){return(typeof n=="string"?n:""+n).replace(Ag,`
`).replace(Cg,"")}function Fo(n,i,a){if(i=Xh(i),Xh(n)!==i&&a)throw Error(t(425))}function Oo(){}var Gc=null,jc=null;function Wc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Xc=typeof setTimeout=="function"?setTimeout:void 0,Rg=typeof clearTimeout=="function"?clearTimeout:void 0,qh=typeof Promise=="function"?Promise:void 0,Ng=typeof queueMicrotask=="function"?queueMicrotask:typeof qh<"u"?function(n){return qh.resolve(null).then(n).catch(Pg)}:Xc;function Pg(n){setTimeout(function(){throw n})}function qc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),ba(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);ba(i)}function mr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Yh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Es=Math.random().toString(36).slice(2),Ai="__reactFiber$"+Es,Ia="__reactProps$"+Es,Wi="__reactContainer$"+Es,Yc="__reactEvents$"+Es,Dg="__reactListeners$"+Es,Lg="__reactHandles$"+Es;function Yr(n){var i=n[Ai];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Wi]||a[Ai]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Yh(n);n!==null;){if(a=n[Ai])return a;n=Yh(n)}return i}n=a,a=n.parentNode}return null}function Ua(n){return n=n[Ai]||n[Wi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ts(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function zo(n){return n[Ia]||null}var $c=[],As=-1;function xr(n){return{current:n}}function qt(n){0>As||(n.current=$c[As],$c[As]=null,As--)}function jt(n,i){As++,$c[As]=n.current,n.current=i}var gr={},En=xr(gr),zn=xr(!1),$r=gr;function Cs(n,i){var a=n.type.contextTypes;if(!a)return gr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},x;for(x in a)f[x]=i[x];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Bn(n){return n=n.childContextTypes,n!=null}function Bo(){qt(zn),qt(En)}function $h(n,i,a){if(En.current!==gr)throw Error(t(168));jt(En,i),jt(zn,a)}function Kh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,ne(n)||"Unknown",f));return L({},a,c)}function Vo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gr,$r=En.current,jt(En,n),jt(zn,zn.current),!0}function Zh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Kh(n,i,$r),c.__reactInternalMemoizedMergedChildContext=n,qt(zn),qt(En),jt(En,n)):qt(zn),jt(zn,a)}var Xi=null,Ho=!1,Kc=!1;function Qh(n){Xi===null?Xi=[n]:Xi.push(n)}function Ig(n){Ho=!0,Qh(n)}function vr(){if(!Kc&&Xi!==null){Kc=!0;var n=0,i=Et;try{var a=Xi;for(Et=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Xi=null,Ho=!1}catch(f){throw Xi!==null&&(Xi=Xi.slice(n+1)),Xr(va,vr),f}finally{Et=i,Kc=!1}}return null}var Rs=[],Ns=0,Go=null,jo=0,ri=[],si=0,Kr=null,qi=1,Yi="";function Zr(n,i){Rs[Ns++]=jo,Rs[Ns++]=Go,Go=n,jo=i}function Jh(n,i,a){ri[si++]=qi,ri[si++]=Yi,ri[si++]=Kr,Kr=n;var c=qi;n=Yi;var f=32-Le(c)-1;c&=~(1<<f),a+=1;var x=32-Le(i)+f;if(30<x){var A=f-f%5;x=(c&(1<<A)-1).toString(32),c>>=A,f-=A,qi=1<<32-Le(i)+f|a<<f|c,Yi=x+n}else qi=1<<x|a<<f|c,Yi=n}function Zc(n){n.return!==null&&(Zr(n,1),Jh(n,1,0))}function Qc(n){for(;n===Go;)Go=Rs[--Ns],Rs[Ns]=null,jo=Rs[--Ns],Rs[Ns]=null;for(;n===Kr;)Kr=ri[--si],ri[si]=null,Yi=ri[--si],ri[si]=null,qi=ri[--si],ri[si]=null}var Kn=null,Zn=null,$t=!1,xi=null;function ep(n,i){var a=ci(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function tp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Kn=n,Zn=mr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Kn=n,Zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Kr!==null?{id:qi,overflow:Yi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ci(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Kn=n,Zn=null,!0):!1;default:return!1}}function Jc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function eu(n){if($t){var i=Zn;if(i){var a=i;if(!tp(n,i)){if(Jc(n))throw Error(t(418));i=mr(a.nextSibling);var c=Kn;i&&tp(n,i)?ep(c,a):(n.flags=n.flags&-4097|2,$t=!1,Kn=n)}}else{if(Jc(n))throw Error(t(418));n.flags=n.flags&-4097|2,$t=!1,Kn=n}}}function np(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Kn=n}function Wo(n){if(n!==Kn)return!1;if(!$t)return np(n),$t=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Wc(n.type,n.memoizedProps)),i&&(i=Zn)){if(Jc(n))throw ip(),Error(t(418));for(;i;)ep(n,i),i=mr(i.nextSibling)}if(np(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Zn=mr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Zn=null}}else Zn=Kn?mr(n.stateNode.nextSibling):null;return!0}function ip(){for(var n=Zn;n;)n=mr(n.nextSibling)}function Ps(){Zn=Kn=null,$t=!1}function tu(n){xi===null?xi=[n]:xi.push(n)}var Ug=N.ReactCurrentBatchConfig;function ka(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,x=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===x?i.ref:(i=function(A){var z=f.refs;A===null?delete z[x]:z[x]=A},i._stringRef=x,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Xo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function rp(n){var i=n._init;return i(n._payload)}function sp(n){function i(oe,K){if(n){var ue=oe.deletions;ue===null?(oe.deletions=[K],oe.flags|=16):ue.push(K)}}function a(oe,K){if(!n)return null;for(;K!==null;)i(oe,K),K=K.sibling;return null}function c(oe,K){for(oe=new Map;K!==null;)K.key!==null?oe.set(K.key,K):oe.set(K.index,K),K=K.sibling;return oe}function f(oe,K){return oe=Tr(oe,K),oe.index=0,oe.sibling=null,oe}function x(oe,K,ue){return oe.index=ue,n?(ue=oe.alternate,ue!==null?(ue=ue.index,ue<K?(oe.flags|=2,K):ue):(oe.flags|=2,K)):(oe.flags|=1048576,K)}function A(oe){return n&&oe.alternate===null&&(oe.flags|=2),oe}function z(oe,K,ue,De){return K===null||K.tag!==6?(K=Xu(ue,oe.mode,De),K.return=oe,K):(K=f(K,ue),K.return=oe,K)}function j(oe,K,ue,De){var it=ue.type;return it===B?Ee(oe,K,ue.props.children,De,ue.key):K!==null&&(K.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===se&&rp(it)===K.type)?(De=f(K,ue.props),De.ref=ka(oe,K,ue),De.return=oe,De):(De=xl(ue.type,ue.key,ue.props,null,oe.mode,De),De.ref=ka(oe,K,ue),De.return=oe,De)}function pe(oe,K,ue,De){return K===null||K.tag!==4||K.stateNode.containerInfo!==ue.containerInfo||K.stateNode.implementation!==ue.implementation?(K=qu(ue,oe.mode,De),K.return=oe,K):(K=f(K,ue.children||[]),K.return=oe,K)}function Ee(oe,K,ue,De,it){return K===null||K.tag!==7?(K=ss(ue,oe.mode,De,it),K.return=oe,K):(K=f(K,ue),K.return=oe,K)}function Ce(oe,K,ue){if(typeof K=="string"&&K!==""||typeof K=="number")return K=Xu(""+K,oe.mode,ue),K.return=oe,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case U:return ue=xl(K.type,K.key,K.props,null,oe.mode,ue),ue.ref=ka(oe,null,K),ue.return=oe,ue;case I:return K=qu(K,oe.mode,ue),K.return=oe,K;case se:var De=K._init;return Ce(oe,De(K._payload),ue)}if(bt(K)||ae(K))return K=ss(K,oe.mode,ue,null),K.return=oe,K;Xo(oe,K)}return null}function we(oe,K,ue,De){var it=K!==null?K.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return it!==null?null:z(oe,K,""+ue,De);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case U:return ue.key===it?j(oe,K,ue,De):null;case I:return ue.key===it?pe(oe,K,ue,De):null;case se:return it=ue._init,we(oe,K,it(ue._payload),De)}if(bt(ue)||ae(ue))return it!==null?null:Ee(oe,K,ue,De,null);Xo(oe,ue)}return null}function je(oe,K,ue,De,it){if(typeof De=="string"&&De!==""||typeof De=="number")return oe=oe.get(ue)||null,z(K,oe,""+De,it);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case U:return oe=oe.get(De.key===null?ue:De.key)||null,j(K,oe,De,it);case I:return oe=oe.get(De.key===null?ue:De.key)||null,pe(K,oe,De,it);case se:var ut=De._init;return je(oe,K,ue,ut(De._payload),it)}if(bt(De)||ae(De))return oe=oe.get(ue)||null,Ee(K,oe,De,it,null);Xo(K,De)}return null}function Ze(oe,K,ue,De){for(var it=null,ut=null,dt=K,gt=K=0,vn=null;dt!==null&&gt<ue.length;gt++){dt.index>gt?(vn=dt,dt=null):vn=dt.sibling;var It=we(oe,dt,ue[gt],De);if(It===null){dt===null&&(dt=vn);break}n&&dt&&It.alternate===null&&i(oe,dt),K=x(It,K,gt),ut===null?it=It:ut.sibling=It,ut=It,dt=vn}if(gt===ue.length)return a(oe,dt),$t&&Zr(oe,gt),it;if(dt===null){for(;gt<ue.length;gt++)dt=Ce(oe,ue[gt],De),dt!==null&&(K=x(dt,K,gt),ut===null?it=dt:ut.sibling=dt,ut=dt);return $t&&Zr(oe,gt),it}for(dt=c(oe,dt);gt<ue.length;gt++)vn=je(dt,oe,gt,ue[gt],De),vn!==null&&(n&&vn.alternate!==null&&dt.delete(vn.key===null?gt:vn.key),K=x(vn,K,gt),ut===null?it=vn:ut.sibling=vn,ut=vn);return n&&dt.forEach(function(Ar){return i(oe,Ar)}),$t&&Zr(oe,gt),it}function et(oe,K,ue,De){var it=ae(ue);if(typeof it!="function")throw Error(t(150));if(ue=it.call(ue),ue==null)throw Error(t(151));for(var ut=it=null,dt=K,gt=K=0,vn=null,It=ue.next();dt!==null&&!It.done;gt++,It=ue.next()){dt.index>gt?(vn=dt,dt=null):vn=dt.sibling;var Ar=we(oe,dt,It.value,De);if(Ar===null){dt===null&&(dt=vn);break}n&&dt&&Ar.alternate===null&&i(oe,dt),K=x(Ar,K,gt),ut===null?it=Ar:ut.sibling=Ar,ut=Ar,dt=vn}if(It.done)return a(oe,dt),$t&&Zr(oe,gt),it;if(dt===null){for(;!It.done;gt++,It=ue.next())It=Ce(oe,It.value,De),It!==null&&(K=x(It,K,gt),ut===null?it=It:ut.sibling=It,ut=It);return $t&&Zr(oe,gt),it}for(dt=c(oe,dt);!It.done;gt++,It=ue.next())It=je(dt,oe,gt,It.value,De),It!==null&&(n&&It.alternate!==null&&dt.delete(It.key===null?gt:It.key),K=x(It,K,gt),ut===null?it=It:ut.sibling=It,ut=It);return n&&dt.forEach(function(pv){return i(oe,pv)}),$t&&Zr(oe,gt),it}function sn(oe,K,ue,De){if(typeof ue=="object"&&ue!==null&&ue.type===B&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case U:e:{for(var it=ue.key,ut=K;ut!==null;){if(ut.key===it){if(it=ue.type,it===B){if(ut.tag===7){a(oe,ut.sibling),K=f(ut,ue.props.children),K.return=oe,oe=K;break e}}else if(ut.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===se&&rp(it)===ut.type){a(oe,ut.sibling),K=f(ut,ue.props),K.ref=ka(oe,ut,ue),K.return=oe,oe=K;break e}a(oe,ut);break}else i(oe,ut);ut=ut.sibling}ue.type===B?(K=ss(ue.props.children,oe.mode,De,ue.key),K.return=oe,oe=K):(De=xl(ue.type,ue.key,ue.props,null,oe.mode,De),De.ref=ka(oe,K,ue),De.return=oe,oe=De)}return A(oe);case I:e:{for(ut=ue.key;K!==null;){if(K.key===ut)if(K.tag===4&&K.stateNode.containerInfo===ue.containerInfo&&K.stateNode.implementation===ue.implementation){a(oe,K.sibling),K=f(K,ue.children||[]),K.return=oe,oe=K;break e}else{a(oe,K);break}else i(oe,K);K=K.sibling}K=qu(ue,oe.mode,De),K.return=oe,oe=K}return A(oe);case se:return ut=ue._init,sn(oe,K,ut(ue._payload),De)}if(bt(ue))return Ze(oe,K,ue,De);if(ae(ue))return et(oe,K,ue,De);Xo(oe,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,K!==null&&K.tag===6?(a(oe,K.sibling),K=f(K,ue),K.return=oe,oe=K):(a(oe,K),K=Xu(ue,oe.mode,De),K.return=oe,oe=K),A(oe)):a(oe,K)}return sn}var Ds=sp(!0),ap=sp(!1),qo=xr(null),Yo=null,Ls=null,nu=null;function iu(){nu=Ls=Yo=null}function ru(n){var i=qo.current;qt(qo),n._currentValue=i}function su(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Is(n,i){Yo=n,nu=Ls=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Vn=!0),n.firstContext=null)}function ai(n){var i=n._currentValue;if(nu!==n)if(n={context:n,memoizedValue:i,next:null},Ls===null){if(Yo===null)throw Error(t(308));Ls=n,Yo.dependencies={lanes:0,firstContext:n}}else Ls=Ls.next=n;return i}var Qr=null;function au(n){Qr===null?Qr=[n]:Qr.push(n)}function op(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,au(i)):(a.next=f.next,f.next=a),i.interleaved=a,$i(n,c)}function $i(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var _r=!1;function ou(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ki(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function yr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Lt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,$i(n,a)}return f=c.interleaved,f===null?(i.next=i,au(c)):(i.next=f.next,f.next=i),c.interleaved=i,$i(n,a)}function $o(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,On(n,a)}}function cp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var A={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?f=x=A:x=x.next=A,a=a.next}while(a!==null);x===null?f=x=i:x=x.next=i}else f=x=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:x,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Ko(n,i,a,c){var f=n.updateQueue;_r=!1;var x=f.firstBaseUpdate,A=f.lastBaseUpdate,z=f.shared.pending;if(z!==null){f.shared.pending=null;var j=z,pe=j.next;j.next=null,A===null?x=pe:A.next=pe,A=j;var Ee=n.alternate;Ee!==null&&(Ee=Ee.updateQueue,z=Ee.lastBaseUpdate,z!==A&&(z===null?Ee.firstBaseUpdate=pe:z.next=pe,Ee.lastBaseUpdate=j))}if(x!==null){var Ce=f.baseState;A=0,Ee=pe=j=null,z=x;do{var we=z.lane,je=z.eventTime;if((c&we)===we){Ee!==null&&(Ee=Ee.next={eventTime:je,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Ze=n,et=z;switch(we=i,je=a,et.tag){case 1:if(Ze=et.payload,typeof Ze=="function"){Ce=Ze.call(je,Ce,we);break e}Ce=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=et.payload,we=typeof Ze=="function"?Ze.call(je,Ce,we):Ze,we==null)break e;Ce=L({},Ce,we);break e;case 2:_r=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,we=f.effects,we===null?f.effects=[z]:we.push(z))}else je={eventTime:je,lane:we,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Ee===null?(pe=Ee=je,j=Ce):Ee=Ee.next=je,A|=we;if(z=z.next,z===null){if(z=f.shared.pending,z===null)break;we=z,z=we.next,we.next=null,f.lastBaseUpdate=we,f.shared.pending=null}}while(!0);if(Ee===null&&(j=Ce),f.baseState=j,f.firstBaseUpdate=pe,f.lastBaseUpdate=Ee,i=f.shared.interleaved,i!==null){f=i;do A|=f.lane,f=f.next;while(f!==i)}else x===null&&(f.shared.lanes=0);ts|=A,n.lanes=A,n.memoizedState=Ce}}function up(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Fa={},Ci=xr(Fa),Oa=xr(Fa),za=xr(Fa);function Jr(n){if(n===Fa)throw Error(t(174));return n}function lu(n,i){switch(jt(za,i),jt(Oa,n),jt(Ci,Fa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:b(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=b(i,n)}qt(Ci),jt(Ci,i)}function Us(){qt(Ci),qt(Oa),qt(za)}function dp(n){Jr(za.current);var i=Jr(Ci.current),a=b(i,n.type);i!==a&&(jt(Oa,n),jt(Ci,a))}function cu(n){Oa.current===n&&(qt(Ci),qt(Oa))}var Jt=xr(0);function Zo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var uu=[];function du(){for(var n=0;n<uu.length;n++)uu[n]._workInProgressVersionPrimary=null;uu.length=0}var Qo=N.ReactCurrentDispatcher,fu=N.ReactCurrentBatchConfig,es=0,en=null,un=null,xn=null,Jo=!1,Ba=!1,Va=0,kg=0;function Tn(){throw Error(t(321))}function hu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!mi(n[a],i[a]))return!1;return!0}function pu(n,i,a,c,f,x){if(es=x,en=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Qo.current=n===null||n.memoizedState===null?Bg:Vg,n=a(c,f),Ba){x=0;do{if(Ba=!1,Va=0,25<=x)throw Error(t(301));x+=1,xn=un=null,i.updateQueue=null,Qo.current=Hg,n=a(c,f)}while(Ba)}if(Qo.current=nl,i=un!==null&&un.next!==null,es=0,xn=un=en=null,Jo=!1,i)throw Error(t(300));return n}function mu(){var n=Va!==0;return Va=0,n}function Ri(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?en.memoizedState=xn=n:xn=xn.next=n,xn}function oi(){if(un===null){var n=en.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var i=xn===null?en.memoizedState:xn.next;if(i!==null)xn=i,un=n;else{if(n===null)throw Error(t(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},xn===null?en.memoizedState=xn=n:xn=xn.next=n}return xn}function Ha(n,i){return typeof i=="function"?i(n):i}function xu(n){var i=oi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=un,f=c.baseQueue,x=a.pending;if(x!==null){if(f!==null){var A=f.next;f.next=x.next,x.next=A}c.baseQueue=f=x,a.pending=null}if(f!==null){x=f.next,c=c.baseState;var z=A=null,j=null,pe=x;do{var Ee=pe.lane;if((es&Ee)===Ee)j!==null&&(j=j.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),c=pe.hasEagerState?pe.eagerState:n(c,pe.action);else{var Ce={lane:Ee,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};j===null?(z=j=Ce,A=c):j=j.next=Ce,en.lanes|=Ee,ts|=Ee}pe=pe.next}while(pe!==null&&pe!==x);j===null?A=c:j.next=z,mi(c,i.memoizedState)||(Vn=!0),i.memoizedState=c,i.baseState=A,i.baseQueue=j,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do x=f.lane,en.lanes|=x,ts|=x,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function gu(n){var i=oi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,x=i.memoizedState;if(f!==null){a.pending=null;var A=f=f.next;do x=n(x,A.action),A=A.next;while(A!==f);mi(x,i.memoizedState)||(Vn=!0),i.memoizedState=x,i.baseQueue===null&&(i.baseState=x),a.lastRenderedState=x}return[x,c]}function fp(){}function hp(n,i){var a=en,c=oi(),f=i(),x=!mi(c.memoizedState,f);if(x&&(c.memoizedState=f,Vn=!0),c=c.queue,vu(xp.bind(null,a,c,n),[n]),c.getSnapshot!==i||x||xn!==null&&xn.memoizedState.tag&1){if(a.flags|=2048,Ga(9,mp.bind(null,a,c,f,i),void 0,null),gn===null)throw Error(t(349));(es&30)!==0||pp(a,i,f)}return f}function pp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function mp(n,i,a,c){i.value=a,i.getSnapshot=c,gp(i)&&vp(n)}function xp(n,i,a){return a(function(){gp(i)&&vp(n)})}function gp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!mi(n,a)}catch{return!0}}function vp(n){var i=$i(n,1);i!==null&&yi(i,n,1,-1)}function _p(n){var i=Ri();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:n},i.queue=n,n=n.dispatch=zg.bind(null,en,n),[i.memoizedState,n]}function Ga(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function yp(){return oi().memoizedState}function el(n,i,a,c){var f=Ri();en.flags|=n,f.memoizedState=Ga(1|i,a,void 0,c===void 0?null:c)}function tl(n,i,a,c){var f=oi();c=c===void 0?null:c;var x=void 0;if(un!==null){var A=un.memoizedState;if(x=A.destroy,c!==null&&hu(c,A.deps)){f.memoizedState=Ga(i,a,x,c);return}}en.flags|=n,f.memoizedState=Ga(1|i,a,x,c)}function Sp(n,i){return el(8390656,8,n,i)}function vu(n,i){return tl(2048,8,n,i)}function Mp(n,i){return tl(4,2,n,i)}function bp(n,i){return tl(4,4,n,i)}function wp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Ep(n,i,a){return a=a!=null?a.concat([n]):null,tl(4,4,wp.bind(null,i,n),a)}function _u(){}function Tp(n,i){var a=oi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&hu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Ap(n,i){var a=oi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&hu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Cp(n,i,a){return(es&21)===0?(n.baseState&&(n.baseState=!1,Vn=!0),n.memoizedState=a):(mi(a,i)||(a=Ge(),en.lanes|=a,ts|=a,n.baseState=!0),i)}function Fg(n,i){var a=Et;Et=a!==0&&4>a?a:4,n(!0);var c=fu.transition;fu.transition={};try{n(!1),i()}finally{Et=a,fu.transition=c}}function Rp(){return oi().memoizedState}function Og(n,i,a){var c=wr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Np(n))Pp(i,a);else if(a=op(n,i,a,c),a!==null){var f=Un();yi(a,n,c,f),Dp(a,i,c)}}function zg(n,i,a){var c=wr(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Np(n))Pp(i,f);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=i.lastRenderedReducer,x!==null))try{var A=i.lastRenderedState,z=x(A,a);if(f.hasEagerState=!0,f.eagerState=z,mi(z,A)){var j=i.interleaved;j===null?(f.next=f,au(i)):(f.next=j.next,j.next=f),i.interleaved=f;return}}catch{}finally{}a=op(n,i,f,c),a!==null&&(f=Un(),yi(a,n,c,f),Dp(a,i,c))}}function Np(n){var i=n.alternate;return n===en||i!==null&&i===en}function Pp(n,i){Ba=Jo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Dp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,On(n,a)}}var nl={readContext:ai,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},Bg={readContext:ai,useCallback:function(n,i){return Ri().memoizedState=[n,i===void 0?null:i],n},useContext:ai,useEffect:Sp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,el(4194308,4,wp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return el(4194308,4,n,i)},useInsertionEffect:function(n,i){return el(4,2,n,i)},useMemo:function(n,i){var a=Ri();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ri();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Og.bind(null,en,n),[c.memoizedState,n]},useRef:function(n){var i=Ri();return n={current:n},i.memoizedState=n},useState:_p,useDebugValue:_u,useDeferredValue:function(n){return Ri().memoizedState=n},useTransition:function(){var n=_p(!1),i=n[0];return n=Fg.bind(null,n[1]),Ri().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=en,f=Ri();if($t){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),gn===null)throw Error(t(349));(es&30)!==0||pp(c,i,a)}f.memoizedState=a;var x={value:a,getSnapshot:i};return f.queue=x,Sp(xp.bind(null,c,x,n),[n]),c.flags|=2048,Ga(9,mp.bind(null,c,x,a,i),void 0,null),a},useId:function(){var n=Ri(),i=gn.identifierPrefix;if($t){var a=Yi,c=qi;a=(c&~(1<<32-Le(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Va++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=kg++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Vg={readContext:ai,useCallback:Tp,useContext:ai,useEffect:vu,useImperativeHandle:Ep,useInsertionEffect:Mp,useLayoutEffect:bp,useMemo:Ap,useReducer:xu,useRef:yp,useState:function(){return xu(Ha)},useDebugValue:_u,useDeferredValue:function(n){var i=oi();return Cp(i,un.memoizedState,n)},useTransition:function(){var n=xu(Ha)[0],i=oi().memoizedState;return[n,i]},useMutableSource:fp,useSyncExternalStore:hp,useId:Rp,unstable_isNewReconciler:!1},Hg={readContext:ai,useCallback:Tp,useContext:ai,useEffect:vu,useImperativeHandle:Ep,useInsertionEffect:Mp,useLayoutEffect:bp,useMemo:Ap,useReducer:gu,useRef:yp,useState:function(){return gu(Ha)},useDebugValue:_u,useDeferredValue:function(n){var i=oi();return un===null?i.memoizedState=n:Cp(i,un.memoizedState,n)},useTransition:function(){var n=gu(Ha)[0],i=oi().memoizedState;return[n,i]},useMutableSource:fp,useSyncExternalStore:hp,useId:Rp,unstable_isNewReconciler:!1};function gi(n,i){if(n&&n.defaultProps){i=L({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function yu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:L({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var il={isMounted:function(n){return(n=n._reactInternals)?Ln(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Un(),f=wr(n),x=Ki(c,f);x.payload=i,a!=null&&(x.callback=a),i=yr(n,x,f),i!==null&&(yi(i,n,f,c),$o(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Un(),f=wr(n),x=Ki(c,f);x.tag=1,x.payload=i,a!=null&&(x.callback=a),i=yr(n,x,f),i!==null&&(yi(i,n,f,c),$o(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Un(),c=wr(n),f=Ki(a,c);f.tag=2,i!=null&&(f.callback=i),i=yr(n,f,c),i!==null&&(yi(i,n,c,a),$o(i,n,c))}};function Lp(n,i,a,c,f,x,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,x,A):i.prototype&&i.prototype.isPureReactComponent?!Ra(a,c)||!Ra(f,x):!0}function Ip(n,i,a){var c=!1,f=gr,x=i.contextType;return typeof x=="object"&&x!==null?x=ai(x):(f=Bn(i)?$r:En.current,c=i.contextTypes,x=(c=c!=null)?Cs(n,f):gr),i=new i(a,x),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=il,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=x),i}function Up(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&il.enqueueReplaceState(i,i.state,null)}function Su(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},ou(n);var x=i.contextType;typeof x=="object"&&x!==null?f.context=ai(x):(x=Bn(i)?$r:En.current,f.context=Cs(n,x)),f.state=n.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(yu(n,i,x,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&il.enqueueReplaceState(f,f.state,null),Ko(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function ks(n,i){try{var a="",c=i;do a+=Se(c),c=c.return;while(c);var f=a}catch(x){f=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:i,stack:f,digest:null}}function Mu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function bu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Gg=typeof WeakMap=="function"?WeakMap:Map;function kp(n,i,a){a=Ki(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ul||(ul=!0,Ou=c),bu(n,i)},a}function Fp(n,i,a){a=Ki(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){bu(n,i)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){bu(n,i),typeof c!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),a}function Op(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Gg;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=iv.bind(null,n,i,a),i.then(n,n))}function zp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Bp(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ki(-1,1),i.tag=2,yr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var jg=N.ReactCurrentOwner,Vn=!1;function In(n,i,a,c){i.child=n===null?ap(i,null,a,c):Ds(i,n.child,a,c)}function Vp(n,i,a,c,f){a=a.render;var x=i.ref;return Is(i,f),c=pu(n,i,a,c,x,f),a=mu(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Zi(n,i,f)):($t&&a&&Zc(i),i.flags|=1,In(n,i,c,f),i.child)}function Hp(n,i,a,c,f){if(n===null){var x=a.type;return typeof x=="function"&&!Wu(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=x,Gp(n,i,x,c,f)):(n=xl(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(x=n.child,(n.lanes&f)===0){var A=x.memoizedProps;if(a=a.compare,a=a!==null?a:Ra,a(A,c)&&n.ref===i.ref)return Zi(n,i,f)}return i.flags|=1,n=Tr(x,c),n.ref=i.ref,n.return=i,i.child=n}function Gp(n,i,a,c,f){if(n!==null){var x=n.memoizedProps;if(Ra(x,c)&&n.ref===i.ref)if(Vn=!1,i.pendingProps=c=x,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Vn=!0);else return i.lanes=n.lanes,Zi(n,i,f)}return wu(n,i,a,c,f)}function jp(n,i,a){var c=i.pendingProps,f=c.children,x=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(Os,Qn),Qn|=a;else{if((a&1073741824)===0)return n=x!==null?x.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,jt(Os,Qn),Qn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:a,jt(Os,Qn),Qn|=c}else x!==null?(c=x.baseLanes|a,i.memoizedState=null):c=a,jt(Os,Qn),Qn|=c;return In(n,i,f,a),i.child}function Wp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function wu(n,i,a,c,f){var x=Bn(a)?$r:En.current;return x=Cs(i,x),Is(i,f),a=pu(n,i,a,c,x,f),c=mu(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Zi(n,i,f)):($t&&c&&Zc(i),i.flags|=1,In(n,i,a,f),i.child)}function Xp(n,i,a,c,f){if(Bn(a)){var x=!0;Vo(i)}else x=!1;if(Is(i,f),i.stateNode===null)sl(n,i),Ip(i,a,c),Su(i,a,c,f),c=!0;else if(n===null){var A=i.stateNode,z=i.memoizedProps;A.props=z;var j=A.context,pe=a.contextType;typeof pe=="object"&&pe!==null?pe=ai(pe):(pe=Bn(a)?$r:En.current,pe=Cs(i,pe));var Ee=a.getDerivedStateFromProps,Ce=typeof Ee=="function"||typeof A.getSnapshotBeforeUpdate=="function";Ce||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==c||j!==pe)&&Up(i,A,c,pe),_r=!1;var we=i.memoizedState;A.state=we,Ko(i,c,A,f),j=i.memoizedState,z!==c||we!==j||zn.current||_r?(typeof Ee=="function"&&(yu(i,a,Ee,c),j=i.memoizedState),(z=_r||Lp(i,a,z,c,we,j,pe))?(Ce||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=j),A.props=c,A.state=j,A.context=pe,c=z):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{A=i.stateNode,lp(n,i),z=i.memoizedProps,pe=i.type===i.elementType?z:gi(i.type,z),A.props=pe,Ce=i.pendingProps,we=A.context,j=a.contextType,typeof j=="object"&&j!==null?j=ai(j):(j=Bn(a)?$r:En.current,j=Cs(i,j));var je=a.getDerivedStateFromProps;(Ee=typeof je=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==Ce||we!==j)&&Up(i,A,c,j),_r=!1,we=i.memoizedState,A.state=we,Ko(i,c,A,f);var Ze=i.memoizedState;z!==Ce||we!==Ze||zn.current||_r?(typeof je=="function"&&(yu(i,a,je,c),Ze=i.memoizedState),(pe=_r||Lp(i,a,pe,c,we,Ze,j)||!1)?(Ee||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,Ze,j),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,Ze,j)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||z===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ze),A.props=c,A.state=Ze,A.context=j,c=pe):(typeof A.componentDidUpdate!="function"||z===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),c=!1)}return Eu(n,i,a,c,x,f)}function Eu(n,i,a,c,f,x){Wp(n,i);var A=(i.flags&128)!==0;if(!c&&!A)return f&&Zh(i,a,!1),Zi(n,i,x);c=i.stateNode,jg.current=i;var z=A&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&A?(i.child=Ds(i,n.child,null,x),i.child=Ds(i,null,z,x)):In(n,i,z,x),i.memoizedState=c.state,f&&Zh(i,a,!0),i.child}function qp(n){var i=n.stateNode;i.pendingContext?$h(n,i.pendingContext,i.pendingContext!==i.context):i.context&&$h(n,i.context,!1),lu(n,i.containerInfo)}function Yp(n,i,a,c,f){return Ps(),tu(f),i.flags|=256,In(n,i,a,c),i.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function Au(n){return{baseLanes:n,cachePool:null,transitions:null}}function $p(n,i,a){var c=i.pendingProps,f=Jt.current,x=!1,A=(i.flags&128)!==0,z;if((z=A)||(z=n!==null&&n.memoizedState===null?!1:(f&2)!==0),z?(x=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),jt(Jt,f&1),n===null)return eu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(A=c.children,n=c.fallback,x?(c=i.mode,x=i.child,A={mode:"hidden",children:A},(c&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=A):x=gl(A,c,0,null),n=ss(n,c,a,null),x.return=i,n.return=i,x.sibling=n,i.child=x,i.child.memoizedState=Au(a),i.memoizedState=Tu,n):Cu(i,A));if(f=n.memoizedState,f!==null&&(z=f.dehydrated,z!==null))return Wg(n,i,A,c,z,f,a);if(x){x=c.fallback,A=i.mode,f=n.child,z=f.sibling;var j={mode:"hidden",children:c.children};return(A&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=j,i.deletions=null):(c=Tr(f,j),c.subtreeFlags=f.subtreeFlags&14680064),z!==null?x=Tr(z,x):(x=ss(x,A,a,null),x.flags|=2),x.return=i,c.return=i,c.sibling=x,i.child=c,c=x,x=i.child,A=n.child.memoizedState,A=A===null?Au(a):{baseLanes:A.baseLanes|a,cachePool:null,transitions:A.transitions},x.memoizedState=A,x.childLanes=n.childLanes&~a,i.memoizedState=Tu,c}return x=n.child,n=x.sibling,c=Tr(x,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Cu(n,i){return i=gl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function rl(n,i,a,c){return c!==null&&tu(c),Ds(i,n.child,null,a),n=Cu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Wg(n,i,a,c,f,x,A){if(a)return i.flags&256?(i.flags&=-257,c=Mu(Error(t(422))),rl(n,i,A,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(x=c.fallback,f=i.mode,c=gl({mode:"visible",children:c.children},f,0,null),x=ss(x,f,A,null),x.flags|=2,c.return=i,x.return=i,c.sibling=x,i.child=c,(i.mode&1)!==0&&Ds(i,n.child,null,A),i.child.memoizedState=Au(A),i.memoizedState=Tu,x);if((i.mode&1)===0)return rl(n,i,A,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var z=c.dgst;return c=z,x=Error(t(419)),c=Mu(x,c,void 0),rl(n,i,A,c)}if(z=(A&n.childLanes)!==0,Vn||z){if(c=gn,c!==null){switch(A&-A){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|A))!==0?0:f,f!==0&&f!==x.retryLane&&(x.retryLane=f,$i(n,f),yi(c,n,f,-1))}return ju(),c=Mu(Error(t(421))),rl(n,i,A,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=rv.bind(null,n),f._reactRetry=i,null):(n=x.treeContext,Zn=mr(f.nextSibling),Kn=i,$t=!0,xi=null,n!==null&&(ri[si++]=qi,ri[si++]=Yi,ri[si++]=Kr,qi=n.id,Yi=n.overflow,Kr=i),i=Cu(i,c.children),i.flags|=4096,i)}function Kp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),su(n.return,i,a)}function Ru(n,i,a,c,f){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=a,x.tailMode=f)}function Zp(n,i,a){var c=i.pendingProps,f=c.revealOrder,x=c.tail;if(In(n,i,c.children,a),c=Jt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Kp(n,a,i);else if(n.tag===19)Kp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(jt(Jt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Zo(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Ru(i,!1,f,a,x);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Zo(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Ru(i,!0,a,null,x);break;case"together":Ru(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function sl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Zi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ts|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Tr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Tr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Xg(n,i,a){switch(i.tag){case 3:qp(i),Ps();break;case 5:dp(i);break;case 1:Bn(i.type)&&Vo(i);break;case 4:lu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;jt(qo,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(jt(Jt,Jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?$p(n,i,a):(jt(Jt,Jt.current&1),n=Zi(n,i,a),n!==null?n.sibling:null);jt(Jt,Jt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Zp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),jt(Jt,Jt.current),c)break;return null;case 22:case 23:return i.lanes=0,jp(n,i,a)}return Zi(n,i,a)}var Qp,Nu,Jp,em;Qp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Nu=function(){},Jp=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Jr(Ci.current);var x=null;switch(a){case"input":f=He(n,f),c=He(n,c),x=[];break;case"select":f=L({},f,{value:void 0}),c=L({},c,{value:void 0}),x=[];break;case"textarea":f=Ft(n,f),c=Ft(n,c),x=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Oo)}Qe(a,c);var A;a=null;for(pe in f)if(!c.hasOwnProperty(pe)&&f.hasOwnProperty(pe)&&f[pe]!=null)if(pe==="style"){var z=f[pe];for(A in z)z.hasOwnProperty(A)&&(a||(a={}),a[A]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(o.hasOwnProperty(pe)?x||(x=[]):(x=x||[]).push(pe,null));for(pe in c){var j=c[pe];if(z=f!=null?f[pe]:void 0,c.hasOwnProperty(pe)&&j!==z&&(j!=null||z!=null))if(pe==="style")if(z){for(A in z)!z.hasOwnProperty(A)||j&&j.hasOwnProperty(A)||(a||(a={}),a[A]="");for(A in j)j.hasOwnProperty(A)&&z[A]!==j[A]&&(a||(a={}),a[A]=j[A])}else a||(x||(x=[]),x.push(pe,a)),a=j;else pe==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,z=z?z.__html:void 0,j!=null&&z!==j&&(x=x||[]).push(pe,j)):pe==="children"?typeof j!="string"&&typeof j!="number"||(x=x||[]).push(pe,""+j):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(o.hasOwnProperty(pe)?(j!=null&&pe==="onScroll"&&Xt("scroll",n),x||z===j||(x=[])):(x=x||[]).push(pe,j))}a&&(x=x||[]).push("style",a);var pe=x;(i.updateQueue=pe)&&(i.flags|=4)}},em=function(n,i,a,c){a!==c&&(i.flags|=4)};function ja(n,i){if(!$t)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function An(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function qg(n,i,a){var c=i.pendingProps;switch(Qc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(i),null;case 1:return Bn(i.type)&&Bo(),An(i),null;case 3:return c=i.stateNode,Us(),qt(zn),qt(En),du(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Wo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xi!==null&&(Vu(xi),xi=null))),Nu(n,i),An(i),null;case 5:cu(i);var f=Jr(za.current);if(a=i.type,n!==null&&i.stateNode!=null)Jp(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return An(i),null}if(n=Jr(Ci.current),Wo(i)){c=i.stateNode,a=i.type;var x=i.memoizedProps;switch(c[Ai]=i,c[Ia]=x,n=(i.mode&1)!==0,a){case"dialog":Xt("cancel",c),Xt("close",c);break;case"iframe":case"object":case"embed":Xt("load",c);break;case"video":case"audio":for(f=0;f<Pa.length;f++)Xt(Pa[f],c);break;case"source":Xt("error",c);break;case"img":case"image":case"link":Xt("error",c),Xt("load",c);break;case"details":Xt("toggle",c);break;case"input":ot(c,x),Xt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},Xt("invalid",c);break;case"textarea":$(c,x),Xt("invalid",c)}Qe(a,x),f=null;for(var A in x)if(x.hasOwnProperty(A)){var z=x[A];A==="children"?typeof z=="string"?c.textContent!==z&&(x.suppressHydrationWarning!==!0&&Fo(c.textContent,z,n),f=["children",z]):typeof z=="number"&&c.textContent!==""+z&&(x.suppressHydrationWarning!==!0&&Fo(c.textContent,z,n),f=["children",""+z]):o.hasOwnProperty(A)&&z!=null&&A==="onScroll"&&Xt("scroll",c)}switch(a){case"input":Re(c),Te(c,x,!0);break;case"textarea":Re(c),st(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=Oo)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{A=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=D(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(a,{is:c.is}):(n=A.createElement(a),a==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,a),n[Ai]=i,n[Ia]=c,Qp(n,i,!1,!1),i.stateNode=n;e:{switch(A=Ie(a,c),a){case"dialog":Xt("cancel",n),Xt("close",n),f=c;break;case"iframe":case"object":case"embed":Xt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Pa.length;f++)Xt(Pa[f],n);f=c;break;case"source":Xt("error",n),f=c;break;case"img":case"image":case"link":Xt("error",n),Xt("load",n),f=c;break;case"details":Xt("toggle",n),f=c;break;case"input":ot(n,c),f=He(n,c),Xt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=L({},c,{value:void 0}),Xt("invalid",n);break;case"textarea":$(n,c),f=Ft(n,c),Xt("invalid",n);break;default:f=c}Qe(a,f),z=f;for(x in z)if(z.hasOwnProperty(x)){var j=z[x];x==="style"?ve(n,j):x==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&ie(n,j)):x==="children"?typeof j=="string"?(a!=="textarea"||j!=="")&&fe(n,j):typeof j=="number"&&fe(n,""+j):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?j!=null&&x==="onScroll"&&Xt("scroll",n):j!=null&&k(n,x,j,A))}switch(a){case"input":Re(n),Te(n,c,!1);break;case"textarea":Re(n),st(n);break;case"option":c.value!=null&&n.setAttribute("value",""+re(c.value));break;case"select":n.multiple=!!c.multiple,x=c.value,x!=null?Rt(n,!!c.multiple,x,!1):c.defaultValue!=null&&Rt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Oo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return An(i),null;case 6:if(n&&i.stateNode!=null)em(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Jr(za.current),Jr(Ci.current),Wo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ai]=i,(x=c.nodeValue!==a)&&(n=Kn,n!==null))switch(n.tag){case 3:Fo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fo(c.nodeValue,a,(n.mode&1)!==0)}x&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ai]=i,i.stateNode=c}return An(i),null;case 13:if(qt(Jt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if($t&&Zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ip(),Ps(),i.flags|=98560,x=!1;else if(x=Wo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=i.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Ai]=i}else Ps(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;An(i),x=!1}else xi!==null&&(Vu(xi),xi=null),x=!0;if(!x)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Jt.current&1)!==0?dn===0&&(dn=3):ju())),i.updateQueue!==null&&(i.flags|=4),An(i),null);case 4:return Us(),Nu(n,i),n===null&&Da(i.stateNode.containerInfo),An(i),null;case 10:return ru(i.type._context),An(i),null;case 17:return Bn(i.type)&&Bo(),An(i),null;case 19:if(qt(Jt),x=i.memoizedState,x===null)return An(i),null;if(c=(i.flags&128)!==0,A=x.rendering,A===null)if(c)ja(x,!1);else{if(dn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(A=Zo(n),A!==null){for(i.flags|=128,ja(x,!1),c=A.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)x=a,n=c,x.flags&=14680066,A=x.alternate,A===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=A.childLanes,x.lanes=A.lanes,x.child=A.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=A.memoizedProps,x.memoizedState=A.memoizedState,x.updateQueue=A.updateQueue,x.type=A.type,n=A.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return jt(Jt,Jt.current&1|2),i.child}n=n.sibling}x.tail!==null&&Qt()>zs&&(i.flags|=128,c=!0,ja(x,!1),i.lanes=4194304)}else{if(!c)if(n=Zo(A),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ja(x,!0),x.tail===null&&x.tailMode==="hidden"&&!A.alternate&&!$t)return An(i),null}else 2*Qt()-x.renderingStartTime>zs&&a!==1073741824&&(i.flags|=128,c=!0,ja(x,!1),i.lanes=4194304);x.isBackwards?(A.sibling=i.child,i.child=A):(a=x.last,a!==null?a.sibling=A:i.child=A,x.last=A)}return x.tail!==null?(i=x.tail,x.rendering=i,x.tail=i.sibling,x.renderingStartTime=Qt(),i.sibling=null,a=Jt.current,jt(Jt,c?a&1|2:a&1),i):(An(i),null);case 22:case 23:return Gu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Qn&1073741824)!==0&&(An(i),i.subtreeFlags&6&&(i.flags|=8192)):An(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Yg(n,i){switch(Qc(i),i.tag){case 1:return Bn(i.type)&&Bo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Us(),qt(zn),qt(En),du(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return cu(i),null;case 13:if(qt(Jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ps()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return qt(Jt),null;case 4:return Us(),null;case 10:return ru(i.type._context),null;case 22:case 23:return Gu(),null;case 24:return null;default:return null}}var al=!1,Cn=!1,$g=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Fs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nn(n,i,c)}else a.current=null}function Pu(n,i,a){try{a()}catch(c){nn(n,i,c)}}var tm=!1;function Kg(n,i){if(Gc=To,n=Lh(),Uc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var A=0,z=-1,j=-1,pe=0,Ee=0,Ce=n,we=null;t:for(;;){for(var je;Ce!==a||f!==0&&Ce.nodeType!==3||(z=A+f),Ce!==x||c!==0&&Ce.nodeType!==3||(j=A+c),Ce.nodeType===3&&(A+=Ce.nodeValue.length),(je=Ce.firstChild)!==null;)we=Ce,Ce=je;for(;;){if(Ce===n)break t;if(we===a&&++pe===f&&(z=A),we===x&&++Ee===c&&(j=A),(je=Ce.nextSibling)!==null)break;Ce=we,we=Ce.parentNode}Ce=je}a=z===-1||j===-1?null:{start:z,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(jc={focusedElem:n,selectionRange:a},To=!1,$e=i;$e!==null;)if(i=$e,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,$e=n;else for(;$e!==null;){i=$e;try{var Ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var et=Ze.memoizedProps,sn=Ze.memoizedState,oe=i.stateNode,K=oe.getSnapshotBeforeUpdate(i.elementType===i.type?et:gi(i.type,et),sn);oe.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var ue=i.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(De){nn(i,i.return,De)}if(n=i.sibling,n!==null){n.return=i.return,$e=n;break}$e=i.return}return Ze=tm,tm=!1,Ze}function Wa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var x=f.destroy;f.destroy=void 0,x!==void 0&&Pu(i,a,x)}f=f.next}while(f!==c)}}function ol(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Du(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function nm(n){var i=n.alternate;i!==null&&(n.alternate=null,nm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ai],delete i[Ia],delete i[Yc],delete i[Dg],delete i[Lg])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function im(n){return n.tag===5||n.tag===3||n.tag===4}function rm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||im(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Oo));else if(c!==4&&(n=n.child,n!==null))for(Lu(n,i,a),n=n.sibling;n!==null;)Lu(n,i,a),n=n.sibling}function Iu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Iu(n,i,a),n=n.sibling;n!==null;)Iu(n,i,a),n=n.sibling}var Sn=null,vi=!1;function Sr(n,i,a){for(a=a.child;a!==null;)sm(n,i,a),a=a.sibling}function sm(n,i,a){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(le,a)}catch{}switch(a.tag){case 5:Cn||Fs(a,i);case 6:var c=Sn,f=vi;Sn=null,Sr(n,i,a),Sn=c,vi=f,Sn!==null&&(vi?(n=Sn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Sn.removeChild(a.stateNode));break;case 18:Sn!==null&&(vi?(n=Sn,a=a.stateNode,n.nodeType===8?qc(n.parentNode,a):n.nodeType===1&&qc(n,a),ba(n)):qc(Sn,a.stateNode));break;case 4:c=Sn,f=vi,Sn=a.stateNode.containerInfo,vi=!0,Sr(n,i,a),Sn=c,vi=f;break;case 0:case 11:case 14:case 15:if(!Cn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var x=f,A=x.destroy;x=x.tag,A!==void 0&&((x&2)!==0||(x&4)!==0)&&Pu(a,i,A),f=f.next}while(f!==c)}Sr(n,i,a);break;case 1:if(!Cn&&(Fs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(z){nn(a,i,z)}Sr(n,i,a);break;case 21:Sr(n,i,a);break;case 22:a.mode&1?(Cn=(c=Cn)||a.memoizedState!==null,Sr(n,i,a),Cn=c):Sr(n,i,a);break;default:Sr(n,i,a)}}function am(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new $g),i.forEach(function(c){var f=sv.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function _i(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var x=n,A=i,z=A;e:for(;z!==null;){switch(z.tag){case 5:Sn=z.stateNode,vi=!1;break e;case 3:Sn=z.stateNode.containerInfo,vi=!0;break e;case 4:Sn=z.stateNode.containerInfo,vi=!0;break e}z=z.return}if(Sn===null)throw Error(t(160));sm(x,A,f),Sn=null,vi=!1;var j=f.alternate;j!==null&&(j.return=null),f.return=null}catch(pe){nn(f,i,pe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)om(i,n),i=i.sibling}function om(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(_i(i,n),Ni(n),c&4){try{Wa(3,n,n.return),ol(3,n)}catch(et){nn(n,n.return,et)}try{Wa(5,n,n.return)}catch(et){nn(n,n.return,et)}}break;case 1:_i(i,n),Ni(n),c&512&&a!==null&&Fs(a,a.return);break;case 5:if(_i(i,n),Ni(n),c&512&&a!==null&&Fs(a,a.return),n.flags&32){var f=n.stateNode;try{fe(f,"")}catch(et){nn(n,n.return,et)}}if(c&4&&(f=n.stateNode,f!=null)){var x=n.memoizedProps,A=a!==null?a.memoizedProps:x,z=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{z==="input"&&x.type==="radio"&&x.name!=null&&ct(f,x),Ie(z,A);var pe=Ie(z,x);for(A=0;A<j.length;A+=2){var Ee=j[A],Ce=j[A+1];Ee==="style"?ve(f,Ce):Ee==="dangerouslySetInnerHTML"?ie(f,Ce):Ee==="children"?fe(f,Ce):k(f,Ee,Ce,pe)}switch(z){case"input":pt(f,x);break;case"textarea":Zt(f,x);break;case"select":var we=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!x.multiple;var je=x.value;je!=null?Rt(f,!!x.multiple,je,!1):we!==!!x.multiple&&(x.defaultValue!=null?Rt(f,!!x.multiple,x.defaultValue,!0):Rt(f,!!x.multiple,x.multiple?[]:"",!1))}f[Ia]=x}catch(et){nn(n,n.return,et)}}break;case 6:if(_i(i,n),Ni(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,x=n.memoizedProps;try{f.nodeValue=x}catch(et){nn(n,n.return,et)}}break;case 3:if(_i(i,n),Ni(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ba(i.containerInfo)}catch(et){nn(n,n.return,et)}break;case 4:_i(i,n),Ni(n);break;case 13:_i(i,n),Ni(n),f=n.child,f.flags&8192&&(x=f.memoizedState!==null,f.stateNode.isHidden=x,!x||f.alternate!==null&&f.alternate.memoizedState!==null||(Fu=Qt())),c&4&&am(n);break;case 22:if(Ee=a!==null&&a.memoizedState!==null,n.mode&1?(Cn=(pe=Cn)||Ee,_i(i,n),Cn=pe):_i(i,n),Ni(n),c&8192){if(pe=n.memoizedState!==null,(n.stateNode.isHidden=pe)&&!Ee&&(n.mode&1)!==0)for($e=n,Ee=n.child;Ee!==null;){for(Ce=$e=Ee;$e!==null;){switch(we=$e,je=we.child,we.tag){case 0:case 11:case 14:case 15:Wa(4,we,we.return);break;case 1:Fs(we,we.return);var Ze=we.stateNode;if(typeof Ze.componentWillUnmount=="function"){c=we,a=we.return;try{i=c,Ze.props=i.memoizedProps,Ze.state=i.memoizedState,Ze.componentWillUnmount()}catch(et){nn(c,a,et)}}break;case 5:Fs(we,we.return);break;case 22:if(we.memoizedState!==null){um(Ce);continue}}je!==null?(je.return=we,$e=je):um(Ce)}Ee=Ee.sibling}e:for(Ee=null,Ce=n;;){if(Ce.tag===5){if(Ee===null){Ee=Ce;try{f=Ce.stateNode,pe?(x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(z=Ce.stateNode,j=Ce.memoizedProps.style,A=j!=null&&j.hasOwnProperty("display")?j.display:null,z.style.display=de("display",A))}catch(et){nn(n,n.return,et)}}}else if(Ce.tag===6){if(Ee===null)try{Ce.stateNode.nodeValue=pe?"":Ce.memoizedProps}catch(et){nn(n,n.return,et)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===n)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===n)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===n)break e;Ee===Ce&&(Ee=null),Ce=Ce.return}Ee===Ce&&(Ee=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:_i(i,n),Ni(n),c&4&&am(n);break;case 21:break;default:_i(i,n),Ni(n)}}function Ni(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(im(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(fe(f,""),c.flags&=-33);var x=rm(n);Iu(n,x,f);break;case 3:case 4:var A=c.stateNode.containerInfo,z=rm(n);Lu(n,z,A);break;default:throw Error(t(161))}}catch(j){nn(n,n.return,j)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Zg(n,i,a){$e=n,lm(n)}function lm(n,i,a){for(var c=(n.mode&1)!==0;$e!==null;){var f=$e,x=f.child;if(f.tag===22&&c){var A=f.memoizedState!==null||al;if(!A){var z=f.alternate,j=z!==null&&z.memoizedState!==null||Cn;z=al;var pe=Cn;if(al=A,(Cn=j)&&!pe)for($e=f;$e!==null;)A=$e,j=A.child,A.tag===22&&A.memoizedState!==null?dm(f):j!==null?(j.return=A,$e=j):dm(f);for(;x!==null;)$e=x,lm(x),x=x.sibling;$e=f,al=z,Cn=pe}cm(n)}else(f.subtreeFlags&8772)!==0&&x!==null?(x.return=f,$e=x):cm(n)}}function cm(n){for(;$e!==null;){var i=$e;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Cn||ol(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Cn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:gi(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=i.updateQueue;x!==null&&up(i,x,c);break;case 3:var A=i.updateQueue;if(A!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}up(i,A,a)}break;case 5:var z=i.stateNode;if(a===null&&i.flags&4){a=z;var j=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&a.focus();break;case"img":j.src&&(a.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var pe=i.alternate;if(pe!==null){var Ee=pe.memoizedState;if(Ee!==null){var Ce=Ee.dehydrated;Ce!==null&&ba(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||i.flags&512&&Du(i)}catch(we){nn(i,i.return,we)}}if(i===n){$e=null;break}if(a=i.sibling,a!==null){a.return=i.return,$e=a;break}$e=i.return}}function um(n){for(;$e!==null;){var i=$e;if(i===n){$e=null;break}var a=i.sibling;if(a!==null){a.return=i.return,$e=a;break}$e=i.return}}function dm(n){for(;$e!==null;){var i=$e;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ol(4,i)}catch(j){nn(i,a,j)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(j){nn(i,f,j)}}var x=i.return;try{Du(i)}catch(j){nn(i,x,j)}break;case 5:var A=i.return;try{Du(i)}catch(j){nn(i,A,j)}}}catch(j){nn(i,i.return,j)}if(i===n){$e=null;break}var z=i.sibling;if(z!==null){z.return=i.return,$e=z;break}$e=i.return}}var Qg=Math.ceil,ll=N.ReactCurrentDispatcher,Uu=N.ReactCurrentOwner,li=N.ReactCurrentBatchConfig,Lt=0,gn=null,on=null,Mn=0,Qn=0,Os=xr(0),dn=0,Xa=null,ts=0,cl=0,ku=0,qa=null,Hn=null,Fu=0,zs=1/0,Qi=null,ul=!1,Ou=null,Mr=null,dl=!1,br=null,fl=0,Ya=0,zu=null,hl=-1,pl=0;function Un(){return(Lt&6)!==0?Qt():hl!==-1?hl:hl=Qt()}function wr(n){return(n.mode&1)===0?1:(Lt&2)!==0&&Mn!==0?Mn&-Mn:Ug.transition!==null?(pl===0&&(pl=Ge()),pl):(n=Et,n!==0||(n=window.event,n=n===void 0?16:hh(n.type)),n)}function yi(n,i,a,c){if(50<Ya)throw Ya=0,zu=null,Error(t(185));wt(n,a,c),((Lt&2)===0||n!==gn)&&(n===gn&&((Lt&2)===0&&(cl|=a),dn===4&&Er(n,Mn)),Gn(n,c),a===1&&Lt===0&&(i.mode&1)===0&&(zs=Qt()+500,Ho&&vr()))}function Gn(n,i){var a=n.callbackNode;Ot(n,i);var c=Gt(n,n===gn?Mn:0);if(c===0)a!==null&&ga(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ga(a),i===1)n.tag===0?Ig(hm.bind(null,n)):Qh(hm.bind(null,n)),Ng(function(){(Lt&6)===0&&vr()}),a=null;else{switch(ji(c)){case 1:a=va;break;case 4:a=R;break;case 16:a=J;break;case 536870912:a=ce;break;default:a=J}a=Sm(a,fm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function fm(n,i){if(hl=-1,pl=0,(Lt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Bs()&&n.callbackNode!==a)return null;var c=Gt(n,n===gn?Mn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ml(n,c);else{i=c;var f=Lt;Lt|=2;var x=mm();(gn!==n||Mn!==i)&&(Qi=null,zs=Qt()+500,is(n,i));do try{tv();break}catch(z){pm(n,z)}while(!0);iu(),ll.current=x,Lt=f,on!==null?i=0:(gn=null,Mn=0,i=dn)}if(i!==0){if(i===2&&(f=an(n),f!==0&&(c=f,i=Bu(n,f))),i===1)throw a=Xa,is(n,0),Er(n,c),Gn(n,Qt()),a;if(i===6)Er(n,c);else{if(f=n.current.alternate,(c&30)===0&&!Jg(f)&&(i=ml(n,c),i===2&&(x=an(n),x!==0&&(c=x,i=Bu(n,x))),i===1))throw a=Xa,is(n,0),Er(n,c),Gn(n,Qt()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:rs(n,Hn,Qi);break;case 3:if(Er(n,c),(c&130023424)===c&&(i=Fu+500-Qt(),10<i)){if(Gt(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Un(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Xc(rs.bind(null,n,Hn,Qi),i);break}rs(n,Hn,Qi);break;case 4:if(Er(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var A=31-Le(c);x=1<<A,A=i[A],A>f&&(f=A),c&=~x}if(c=f,c=Qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Qg(c/1960))-c,10<c){n.timeoutHandle=Xc(rs.bind(null,n,Hn,Qi),c);break}rs(n,Hn,Qi);break;case 5:rs(n,Hn,Qi);break;default:throw Error(t(329))}}}return Gn(n,Qt()),n.callbackNode===a?fm.bind(null,n):null}function Bu(n,i){var a=qa;return n.current.memoizedState.isDehydrated&&(is(n,i).flags|=256),n=ml(n,i),n!==2&&(i=Hn,Hn=a,i!==null&&Vu(i)),n}function Vu(n){Hn===null?Hn=n:Hn.push.apply(Hn,n)}function Jg(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],x=f.getSnapshot;f=f.value;try{if(!mi(x(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Er(n,i){for(i&=~ku,i&=~cl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Le(i),c=1<<a;n[a]=-1,i&=~c}}function hm(n){if((Lt&6)!==0)throw Error(t(327));Bs();var i=Gt(n,0);if((i&1)===0)return Gn(n,Qt()),null;var a=ml(n,i);if(n.tag!==0&&a===2){var c=an(n);c!==0&&(i=c,a=Bu(n,c))}if(a===1)throw a=Xa,is(n,0),Er(n,i),Gn(n,Qt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,rs(n,Hn,Qi),Gn(n,Qt()),null}function Hu(n,i){var a=Lt;Lt|=1;try{return n(i)}finally{Lt=a,Lt===0&&(zs=Qt()+500,Ho&&vr())}}function ns(n){br!==null&&br.tag===0&&(Lt&6)===0&&Bs();var i=Lt;Lt|=1;var a=li.transition,c=Et;try{if(li.transition=null,Et=1,n)return n()}finally{Et=c,li.transition=a,Lt=i,(Lt&6)===0&&vr()}}function Gu(){Qn=Os.current,qt(Os)}function is(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Rg(a)),on!==null)for(a=on.return;a!==null;){var c=a;switch(Qc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Bo();break;case 3:Us(),qt(zn),qt(En),du();break;case 5:cu(c);break;case 4:Us();break;case 13:qt(Jt);break;case 19:qt(Jt);break;case 10:ru(c.type._context);break;case 22:case 23:Gu()}a=a.return}if(gn=n,on=n=Tr(n.current,null),Mn=Qn=i,dn=0,Xa=null,ku=cl=ts=0,Hn=qa=null,Qr!==null){for(i=0;i<Qr.length;i++)if(a=Qr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,x=a.pending;if(x!==null){var A=x.next;x.next=f,c.next=A}a.pending=c}Qr=null}return n}function pm(n,i){do{var a=on;try{if(iu(),Qo.current=nl,Jo){for(var c=en.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Jo=!1}if(es=0,xn=un=en=null,Ba=!1,Va=0,Uu.current=null,a===null||a.return===null){dn=1,Xa=i,on=null;break}e:{var x=n,A=a.return,z=a,j=i;if(i=Mn,z.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var pe=j,Ee=z,Ce=Ee.tag;if((Ee.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var we=Ee.alternate;we?(Ee.updateQueue=we.updateQueue,Ee.memoizedState=we.memoizedState,Ee.lanes=we.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var je=zp(A);if(je!==null){je.flags&=-257,Bp(je,A,z,x,i),je.mode&1&&Op(x,pe,i),i=je,j=pe;var Ze=i.updateQueue;if(Ze===null){var et=new Set;et.add(j),i.updateQueue=et}else Ze.add(j);break e}else{if((i&1)===0){Op(x,pe,i),ju();break e}j=Error(t(426))}}else if($t&&z.mode&1){var sn=zp(A);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),Bp(sn,A,z,x,i),tu(ks(j,z));break e}}x=j=ks(j,z),dn!==4&&(dn=2),qa===null?qa=[x]:qa.push(x),x=A;do{switch(x.tag){case 3:x.flags|=65536,i&=-i,x.lanes|=i;var oe=kp(x,j,i);cp(x,oe);break e;case 1:z=j;var K=x.type,ue=x.stateNode;if((x.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(Mr===null||!Mr.has(ue)))){x.flags|=65536,i&=-i,x.lanes|=i;var De=Fp(x,z,i);cp(x,De);break e}}x=x.return}while(x!==null)}gm(a)}catch(it){i=it,on===a&&a!==null&&(on=a=a.return);continue}break}while(!0)}function mm(){var n=ll.current;return ll.current=nl,n===null?nl:n}function ju(){(dn===0||dn===3||dn===2)&&(dn=4),gn===null||(ts&268435455)===0&&(cl&268435455)===0||Er(gn,Mn)}function ml(n,i){var a=Lt;Lt|=2;var c=mm();(gn!==n||Mn!==i)&&(Qi=null,is(n,i));do try{ev();break}catch(f){pm(n,f)}while(!0);if(iu(),Lt=a,ll.current=c,on!==null)throw Error(t(261));return gn=null,Mn=0,dn}function ev(){for(;on!==null;)xm(on)}function tv(){for(;on!==null&&!wo();)xm(on)}function xm(n){var i=ym(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,i===null?gm(n):on=i,Uu.current=null}function gm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=qg(a,i,Qn),a!==null){on=a;return}}else{if(a=Yg(a,i),a!==null){a.flags&=32767,on=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dn=6,on=null;return}}if(i=i.sibling,i!==null){on=i;return}on=i=n}while(i!==null);dn===0&&(dn=5)}function rs(n,i,a){var c=Et,f=li.transition;try{li.transition=null,Et=1,nv(n,i,a,c)}finally{li.transition=f,Et=c}return null}function nv(n,i,a,c){do Bs();while(br!==null);if((Lt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=a.lanes|a.childLanes;if(Fn(n,x),n===gn&&(on=gn=null,Mn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||dl||(dl=!0,Sm(J,function(){return Bs(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=li.transition,li.transition=null;var A=Et;Et=1;var z=Lt;Lt|=4,Uu.current=null,Kg(n,a),om(a,n),Mg(jc),To=!!Gc,jc=Gc=null,n.current=a,Zg(a),Mc(),Lt=z,Et=A,li.transition=x}else n.current=a;if(dl&&(dl=!1,br=n,fl=f),x=n.pendingLanes,x===0&&(Mr=null),We(a.stateNode),Gn(n,Qt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(ul)throw ul=!1,n=Ou,Ou=null,n;return(fl&1)!==0&&n.tag!==0&&Bs(),x=n.pendingLanes,(x&1)!==0?n===zu?Ya++:(Ya=0,zu=n):Ya=0,vr(),null}function Bs(){if(br!==null){var n=ji(fl),i=li.transition,a=Et;try{if(li.transition=null,Et=16>n?16:n,br===null)var c=!1;else{if(n=br,br=null,fl=0,(Lt&6)!==0)throw Error(t(331));var f=Lt;for(Lt|=4,$e=n.current;$e!==null;){var x=$e,A=x.child;if(($e.flags&16)!==0){var z=x.deletions;if(z!==null){for(var j=0;j<z.length;j++){var pe=z[j];for($e=pe;$e!==null;){var Ee=$e;switch(Ee.tag){case 0:case 11:case 15:Wa(8,Ee,x)}var Ce=Ee.child;if(Ce!==null)Ce.return=Ee,$e=Ce;else for(;$e!==null;){Ee=$e;var we=Ee.sibling,je=Ee.return;if(nm(Ee),Ee===pe){$e=null;break}if(we!==null){we.return=je,$e=we;break}$e=je}}}var Ze=x.alternate;if(Ze!==null){var et=Ze.child;if(et!==null){Ze.child=null;do{var sn=et.sibling;et.sibling=null,et=sn}while(et!==null)}}$e=x}}if((x.subtreeFlags&2064)!==0&&A!==null)A.return=x,$e=A;else e:for(;$e!==null;){if(x=$e,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Wa(9,x,x.return)}var oe=x.sibling;if(oe!==null){oe.return=x.return,$e=oe;break e}$e=x.return}}var K=n.current;for($e=K;$e!==null;){A=$e;var ue=A.child;if((A.subtreeFlags&2064)!==0&&ue!==null)ue.return=A,$e=ue;else e:for(A=K;$e!==null;){if(z=$e,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:ol(9,z)}}catch(it){nn(z,z.return,it)}if(z===A){$e=null;break e}var De=z.sibling;if(De!==null){De.return=z.return,$e=De;break e}$e=z.return}}if(Lt=f,vr(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(le,n)}catch{}c=!0}return c}finally{Et=a,li.transition=i}}return!1}function vm(n,i,a){i=ks(a,i),i=kp(n,i,1),n=yr(n,i,1),i=Un(),n!==null&&(wt(n,1,i),Gn(n,i))}function nn(n,i,a){if(n.tag===3)vm(n,n,a);else for(;i!==null;){if(i.tag===3){vm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Mr===null||!Mr.has(c))){n=ks(a,n),n=Fp(i,n,1),i=yr(i,n,1),n=Un(),i!==null&&(wt(i,1,n),Gn(i,n));break}}i=i.return}}function iv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Un(),n.pingedLanes|=n.suspendedLanes&a,gn===n&&(Mn&a)===a&&(dn===4||dn===3&&(Mn&130023424)===Mn&&500>Qt()-Fu?is(n,0):ku|=a),Gn(n,i)}function _m(n,i){i===0&&((n.mode&1)===0?i=1:(i=tt,tt<<=1,(tt&130023424)===0&&(tt=4194304)));var a=Un();n=$i(n,i),n!==null&&(wt(n,i,a),Gn(n,a))}function rv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),_m(n,a)}function sv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),_m(n,a)}var ym;ym=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||zn.current)Vn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Vn=!1,Xg(n,i,a);Vn=(n.flags&131072)!==0}else Vn=!1,$t&&(i.flags&1048576)!==0&&Jh(i,jo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;sl(n,i),n=i.pendingProps;var f=Cs(i,En.current);Is(i,a),f=pu(null,i,c,n,f,a);var x=mu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Bn(c)?(x=!0,Vo(i)):x=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,ou(i),f.updater=il,i.stateNode=f,f._reactInternals=i,Su(i,c,n,a),i=Eu(null,i,c,!0,x,a)):(i.tag=0,$t&&x&&Zc(i),In(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(sl(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=ov(c),n=gi(c,n),f){case 0:i=wu(null,i,c,n,a);break e;case 1:i=Xp(null,i,c,n,a);break e;case 11:i=Vp(null,i,c,n,a);break e;case 14:i=Hp(null,i,c,gi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:gi(c,f),wu(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:gi(c,f),Xp(n,i,c,f,a);case 3:e:{if(qp(i),n===null)throw Error(t(387));c=i.pendingProps,x=i.memoizedState,f=x.element,lp(n,i),Ko(i,c,null,a);var A=i.memoizedState;if(c=A.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=x,i.memoizedState=x,i.flags&256){f=ks(Error(t(423)),i),i=Yp(n,i,c,a,f);break e}else if(c!==f){f=ks(Error(t(424)),i),i=Yp(n,i,c,a,f);break e}else for(Zn=mr(i.stateNode.containerInfo.firstChild),Kn=i,$t=!0,xi=null,a=ap(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ps(),c===f){i=Zi(n,i,a);break e}In(n,i,c,a)}i=i.child}return i;case 5:return dp(i),n===null&&eu(i),c=i.type,f=i.pendingProps,x=n!==null?n.memoizedProps:null,A=f.children,Wc(c,f)?A=null:x!==null&&Wc(c,x)&&(i.flags|=32),Wp(n,i),In(n,i,A,a),i.child;case 6:return n===null&&eu(i),null;case 13:return $p(n,i,a);case 4:return lu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ds(i,null,c,a):In(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:gi(c,f),Vp(n,i,c,f,a);case 7:return In(n,i,i.pendingProps,a),i.child;case 8:return In(n,i,i.pendingProps.children,a),i.child;case 12:return In(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,x=i.memoizedProps,A=f.value,jt(qo,c._currentValue),c._currentValue=A,x!==null)if(mi(x.value,A)){if(x.children===f.children&&!zn.current){i=Zi(n,i,a);break e}}else for(x=i.child,x!==null&&(x.return=i);x!==null;){var z=x.dependencies;if(z!==null){A=x.child;for(var j=z.firstContext;j!==null;){if(j.context===c){if(x.tag===1){j=Ki(-1,a&-a),j.tag=2;var pe=x.updateQueue;if(pe!==null){pe=pe.shared;var Ee=pe.pending;Ee===null?j.next=j:(j.next=Ee.next,Ee.next=j),pe.pending=j}}x.lanes|=a,j=x.alternate,j!==null&&(j.lanes|=a),su(x.return,a,i),z.lanes|=a;break}j=j.next}}else if(x.tag===10)A=x.type===i.type?null:x.child;else if(x.tag===18){if(A=x.return,A===null)throw Error(t(341));A.lanes|=a,z=A.alternate,z!==null&&(z.lanes|=a),su(A,a,i),A=x.sibling}else A=x.child;if(A!==null)A.return=x;else for(A=x;A!==null;){if(A===i){A=null;break}if(x=A.sibling,x!==null){x.return=A.return,A=x;break}A=A.return}x=A}In(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Is(i,a),f=ai(f),c=c(f),i.flags|=1,In(n,i,c,a),i.child;case 14:return c=i.type,f=gi(c,i.pendingProps),f=gi(c.type,f),Hp(n,i,c,f,a);case 15:return Gp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:gi(c,f),sl(n,i),i.tag=1,Bn(c)?(n=!0,Vo(i)):n=!1,Is(i,a),Ip(i,c,f),Su(i,c,f,a),Eu(null,i,c,!0,n,a);case 19:return Zp(n,i,a);case 22:return jp(n,i,a)}throw Error(t(156,i.tag))};function Sm(n,i){return Xr(n,i)}function av(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(n,i,a,c){return new av(n,i,a,c)}function Wu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ov(n){if(typeof n=="function")return Wu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===G)return 11;if(n===Z)return 14}return 2}function Tr(n,i){var a=n.alternate;return a===null?(a=ci(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function xl(n,i,a,c,f,x){var A=2;if(c=n,typeof n=="function")Wu(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case B:return ss(a.children,f,x,i);case T:A=8,f|=8;break;case P:return n=ci(12,a,i,f|2),n.elementType=P,n.lanes=x,n;case te:return n=ci(13,a,i,f),n.elementType=te,n.lanes=x,n;case me:return n=ci(19,a,i,f),n.elementType=me,n.lanes=x,n;case Q:return gl(a,f,x,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case H:A=10;break e;case V:A=9;break e;case G:A=11;break e;case Z:A=14;break e;case se:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ci(A,a,i,f),i.elementType=n,i.type=c,i.lanes=x,i}function ss(n,i,a,c){return n=ci(7,n,c,i),n.lanes=a,n}function gl(n,i,a,c){return n=ci(22,n,c,i),n.elementType=Q,n.lanes=a,n.stateNode={isHidden:!1},n}function Xu(n,i,a){return n=ci(6,n,null,i),n.lanes=a,n}function qu(n,i,a){return i=ci(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function lv(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yn(0),this.expirationTimes=yn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Yu(n,i,a,c,f,x,A,z,j){return n=new lv(n,i,a,z,j),i===1?(i=1,x===!0&&(i|=8)):i=0,x=ci(3,null,null,i),n.current=x,x.stateNode=n,x.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ou(x),n}function cv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Mm(n){if(!n)return gr;n=n._reactInternals;e:{if(Ln(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Bn(a))return Kh(n,a,i)}return i}function bm(n,i,a,c,f,x,A,z,j){return n=Yu(a,c,!0,n,f,x,A,z,j),n.context=Mm(null),a=n.current,c=Un(),f=wr(a),x=Ki(c,f),x.callback=i??null,yr(a,x,f),n.current.lanes=f,wt(n,f,c),Gn(n,c),n}function vl(n,i,a,c){var f=i.current,x=Un(),A=wr(f);return a=Mm(a),i.context===null?i.context=a:i.pendingContext=a,i=Ki(x,A),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=yr(f,i,A),n!==null&&(yi(n,f,A,x),$o(n,f,A)),A}function _l(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function wm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function $u(n,i){wm(n,i),(n=n.alternate)&&wm(n,i)}function uv(){return null}var Em=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ku(n){this._internalRoot=n}yl.prototype.render=Ku.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));vl(n,i,null,null)},yl.prototype.unmount=Ku.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ns(function(){vl(null,n,null,null)}),i[Wi]=null}};function yl(n){this._internalRoot=n}yl.prototype.unstable_scheduleHydration=function(n){if(n){var i=zt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<fr.length&&i!==0&&i<fr[a].priority;a++);fr.splice(a,0,n),a===0&&dh(n)}};function Zu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Sl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Tm(){}function dv(n,i,a,c,f){if(f){if(typeof c=="function"){var x=c;c=function(){var pe=_l(A);x.call(pe)}}var A=bm(i,c,n,0,null,!1,!1,"",Tm);return n._reactRootContainer=A,n[Wi]=A.current,Da(n.nodeType===8?n.parentNode:n),ns(),A}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var z=c;c=function(){var pe=_l(j);z.call(pe)}}var j=Yu(n,0,!1,null,null,!1,!1,"",Tm);return n._reactRootContainer=j,n[Wi]=j.current,Da(n.nodeType===8?n.parentNode:n),ns(function(){vl(i,j,a,c)}),j}function Ml(n,i,a,c,f){var x=a._reactRootContainer;if(x){var A=x;if(typeof f=="function"){var z=f;f=function(){var j=_l(A);z.call(j)}}vl(i,A,n,f)}else A=dv(a,i,n,f,c);return _l(A)}kt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Pt(i.pendingLanes);a!==0&&(On(i,a|1),Gn(i,Qt()),(Lt&6)===0&&(zs=Qt()+500,vr()))}break;case 13:ns(function(){var c=$i(n,1);if(c!==null){var f=Un();yi(c,n,1,f)}}),$u(n,1)}},Wt=function(n){if(n.tag===13){var i=$i(n,134217728);if(i!==null){var a=Un();yi(i,n,134217728,a)}$u(n,134217728)}},hi=function(n){if(n.tag===13){var i=wr(n),a=$i(n,i);if(a!==null){var c=Un();yi(a,n,i,c)}$u(n,i)}},zt=function(){return Et},pi=function(n,i){var a=Et;try{return Et=n,i()}finally{Et=a}},at=function(n,i,a){switch(i){case"input":if(pt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=zo(c);if(!f)throw Error(t(90));lt(c),pt(c,f)}}}break;case"textarea":Zt(n,a);break;case"select":i=a.value,i!=null&&Rt(n,!!a.multiple,i,!1)}},Be=Hu,Me=ns;var fv={usingClientEntryPoint:!1,Events:[Ua,Ts,zo,ge,ke,Hu]},$a={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hv={bundleType:$a.bundleType,version:$a.version,rendererPackageName:$a.rendererPackageName,rendererConfig:$a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Wr(n),n===null?null:n.stateNode},findFiberByHostInstance:$a.findFiberByHostInstance||uv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{le=bl.inject(hv),Fe=bl}catch{}}return jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fv,jn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zu(i))throw Error(t(200));return cv(n,i,null,a)},jn.createRoot=function(n,i){if(!Zu(n))throw Error(t(299));var a=!1,c="",f=Em;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Yu(n,1,!1,null,null,a,!1,c,f),n[Wi]=i.current,Da(n.nodeType===8?n.parentNode:n),new Ku(i)},jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Wr(i),n=n===null?null:n.stateNode,n},jn.flushSync=function(n){return ns(n)},jn.hydrate=function(n,i,a){if(!Sl(i))throw Error(t(200));return Ml(null,n,i,!0,a)},jn.hydrateRoot=function(n,i,a){if(!Zu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,x="",A=Em;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(A=a.onRecoverableError)),i=bm(i,null,n,1,a??null,f,!1,x,A),n[Wi]=i.current,Da(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new yl(i)},jn.render=function(n,i,a){if(!Sl(i))throw Error(t(200));return Ml(null,n,i,!1,a)},jn.unmountComponentAtNode=function(n){if(!Sl(n))throw Error(t(40));return n._reactRootContainer?(ns(function(){Ml(null,null,n,!1,function(){n._reactRootContainer=null,n[Wi]=null})}),!0):!1},jn.unstable_batchedUpdates=Hu,jn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Sl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ml(n,i,a,!1,c)},jn.version="18.3.1-next-f1338f8080-20240426",jn}var Im;function wv(){if(Im)return td.exports;Im=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),td.exports=bv(),td.exports}var Um;function Ev(){if(Um)return wl;Um=1;var s=wv();return wl.createRoot=s.createRoot,wl.hydrateRoot=s.hydrateRoot,wl}var Tv=Ev();const Av=Y0(Tv),Cv=[{id:"badge_iam",title:"IAM Guardian",iconName:"ShieldCheck",description:"Master least-privilege security policies, roles, and MFA",domain:"IAM & Security",unlocked:!0},{id:"badge_s3",title:"S3 Alchemist",iconName:"Database",description:"Flawlessly understand bucket lifecycle rules and storage classes",domain:"Storage (S3 & EBS)",unlocked:!0},{id:"badge_vpc",title:"VPC Architect",iconName:"Network",description:"Configured subnets, route tables, and NAT Gateways with zero leaks",domain:"VPC & Networking",unlocked:!1},{id:"badge_serverless",title:"Serverless Wizard",iconName:"Zap",description:"Harnessed the power of Lambda event triggers and API Gateway",domain:"Compute (EC2 & Lambda)",unlocked:!1},{id:"badge_streak_7",title:"7-Day Cloud Streak",iconName:"Flame",description:"Participated in consecutive daily AWS challenges for an entire week",domain:"General",unlocked:!0},{id:"badge_apex",title:"Skyline Apex Monolith",iconName:"Building2",description:"Reached over 1000+ points and constructed an Apex Mega-Tower",domain:"General",unlocked:!1}],Rv=[{id:"ann_1",title:"🔥 AWS Certified Cloud Practitioner Voucher 50% Discount Available",category:"Voucher",description:"AWS has opened 50% exam discount vouchers for registered college chapter students. Valid until next month end!",linkUrl:"https://aws.amazon.com/certification/certified-cloud-practitioner/",linkText:"Claim Exam Discount",date:"Aug 20, 2026",isHot:!0},{id:"ann_2",title:"⚡ AWS Community Day Student Hackathon & Architecture Slam",category:"Hackathon",description:"Build a serverless generative AI app using AWS Bedrock & Lambda. Total prize pool ₹50,000 + AWS Swag Kits!",linkUrl:"https://aws.amazon.com/events/",linkText:"Register Team (3-4 Members)",date:"Aug 28, 2026",isHot:!0},{id:"ann_3",title:"🎓 Hands-On Workshop: VPC Peering & Security Deep Dive",category:"Workshop",description:"Join this Saturday at 6:00 PM on Google Meet. Live demo of Multi-Tier Architecture & Bastion Hosts by AWS Community Builder.",linkUrl:"#",linkText:"Add to Calendar",date:"Aug 24, 2026",isHot:!1}],Nv=[{id:"q_1",weekNumber:1,domain:"IAM & Security",difficulty:"Associate",questionText:"An application running on an EC2 instance needs to securely read objects from an Amazon S3 bucket. According to AWS Security Best Practices, what is the MOST secure approach?",options:[{key:"A",text:"Hardcode AWS Access Key ID and Secret Access Key inside the application configuration file."},{key:"B",text:"Create an IAM Role with read-only S3 permissions and attach the IAM Instance Profile to the EC2 instance."},{key:"C",text:"Store the IAM credentials in environment variables on the EC2 instance."},{key:"D",text:"Make the S3 bucket publicly readable with a permissive bucket policy."}],correctOption:"B",explanation:"Using IAM Roles with EC2 Instance Profiles eliminates the need to manage permanent AWS credentials. AWS STS automatically rotates temporary security credentials for the instance.",awsDocTopic:"IAM Roles for Amazon EC2"},{id:"q_2",weekNumber:1,domain:"Storage (S3 & EBS)",difficulty:"Beginner",questionText:"A startup needs to archive compliance logs for 7 years. These logs are rarely accessed (perhaps once a year), but when requested, a retrieval time of 12 hours is completely acceptable. Which S3 Storage Class offers the lowest cost?",options:[{key:"A",text:"Amazon S3 Standard"},{key:"B",text:"Amazon S3 Standard-Infrequent Access (S3 Standard-IA)"},{key:"C",text:"Amazon S3 Glacier Instant Retrieval"},{key:"D",text:"Amazon S3 Glacier Deep Archive"}],correctOption:"D",explanation:"S3 Glacier Deep Archive is Amazon S3’s lowest-cost storage tier for long-term retention where retrieval times of 12 to 48 hours are acceptable.",awsDocTopic:"Amazon S3 Storage Classes"},{id:"q_3",weekNumber:1,domain:"VPC & Networking",difficulty:"Associate",questionText:"You have deployed a database instance in a private subnet. The database requires occasional outbound internet access to download OS security patches, but must NOT accept inbound connections from the internet. Which component should be configured?",options:[{key:"A",text:"Attach an Internet Gateway directly to the private subnet."},{key:"B",text:"Place a NAT Gateway in a public subnet and route 0.0.0.0/0 from the private subnet to the NAT Gateway."},{key:"C",text:"Enable Public IPv4 assignment on the database instance."},{key:"D",text:"Attach a Virtual Private Gateway (VGW) and configure Direct Connect."}],correctOption:"B",explanation:"A NAT (Network Address Translation) Gateway enables instances in a private subnet to connect to external services outside the VPC while preventing the internet from initiating connections directly with those instances.",awsDocTopic:"Amazon VPC NAT Gateways"},{id:"q_4",weekNumber:1,domain:"Compute (EC2 & Lambda)",difficulty:"Associate",questionText:"A high-traffic web application receives bursty image upload requests and resizes them. The execution time for resizing is always under 30 seconds. Which architecture provides maximum elasticity with zero server management?",options:[{key:"A",text:"Amazon EC2 Auto Scaling Group with t3.micro instances running constantly."},{key:"B",text:"Amazon S3 Event Notifications triggering an AWS Lambda function with AWS Step Functions."},{key:"C",text:"Amazon ECS on EC2 with a fixed cluster size."},{key:"D",text:"An AWS Elastic Beanstalk single-instance environment."}],correctOption:"B",explanation:"AWS Lambda is an event-driven serverless compute service that scales automatically in response to S3 upload events, running code only when triggered with zero idle server costs.",awsDocTopic:"Serverless File Processing on AWS"},{id:"q_5",weekNumber:1,domain:"Databases (RDS & DynamoDB)",difficulty:"Associate",questionText:"An e-commerce gaming leaderboard needs single-digit millisecond latency for millions of read/write requests with a flexible key-value schema. Which AWS managed database service is purpose-built for this?",options:[{key:"A",text:"Amazon Aurora PostgreSQL"},{key:"B",text:"Amazon Redshift"},{key:"C",text:"Amazon DynamoDB with DynamoDB Accelerator (DAX)"},{key:"D",text:"Amazon DocumentDB (with MongoDB compatibility)"}],correctOption:"C",explanation:"Amazon DynamoDB is a fully managed NoSQL key-value and document database that delivers consistent, single-digit millisecond performance at any scale. DAX adds microsecond in-memory caching.",awsDocTopic:"Amazon DynamoDB Overview"},{id:"q_6",weekNumber:1,domain:"Cloud Architecture & Cost",difficulty:"Beginner",questionText:"Under the AWS Shared Responsibility Model, which of the following is the SOLE responsibility of the customer when using Amazon EC2?",options:[{key:"A",text:"Physical security of the data center facilities."},{key:"B",text:"Hypervisor patching and underlying hardware maintenance."},{key:"C",text:"Guest Operating System updates, firewall/security group configuration, and application data."},{key:"D",text:"Decommissioning failed hard disk drives."}],correctOption:"C",explanation:'AWS is responsible for "Security OF the Cloud" (hardware, software, networking, data centers). The customer is responsible for "Security IN the Cloud" (guest OS, security groups, patch management, customer data).',awsDocTopic:"AWS Shared Responsibility Model"},{id:"q_7",weekNumber:1,domain:"VPC & Networking",difficulty:"Associate",questionText:"What is the primary difference between an AWS Security Group and a Network Access Control List (NACL)?",options:[{key:"A",text:"Security Groups are stateless and operate at the subnet level; NACLs are stateful and operate at the instance level."},{key:"B",text:"Security Groups are stateful and operate at the instance (ENI) level; NACLs are stateless and operate at the subnet level."},{key:"C",text:"Security Groups only support DENY rules, whereas NACLs only support ALLOW rules."},{key:"D",text:"There is no functional difference; they are interchangeable."}],correctOption:"B",explanation:"Security Groups operate at the ENI/instance level and are stateful (return traffic is automatically allowed). Network ACLs operate at the subnet boundary and are stateless (inbound and outbound rules must be explicitly defined).",awsDocTopic:"Security Groups vs Network ACLs"},{id:"q_8",weekNumber:1,domain:"Compute (EC2 & Lambda)",difficulty:"Associate",questionText:"An enterprise wants to run batch video-rendering workloads that can tolerate interruptions and be resumed later. Which EC2 purchasing option provides up to 90% discount compared to On-Demand pricing?",options:[{key:"A",text:"Savings Plans (3-year term)"},{key:"B",text:"Dedicated Hosts"},{key:"C",text:"EC2 Spot Instances"},{key:"D",text:"Standard Reserved Instances"}],correctOption:"C",explanation:"Amazon EC2 Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud at up to 90% discount compared to On-Demand prices, ideal for fault-tolerant batch processing.",awsDocTopic:"Amazon EC2 Spot Instances"}],Pv=[{id:"stu_1",name:"Aarav Sharma",rollNumber:"22CS104",department:"CSE",year:3,points:1250,weeklyPoints:350,streak:14,hearts:5,lastHeartLossTime:null,unlockedBadges:["badge_iam","badge_s3","badge_vpc","badge_streak_7","badge_apex"],buildingTier:"apex_monolith",floors:26,accentColor:"#FF9900",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=Aarav",rankWeekly:1,rankMonthly:1},{id:"stu_2",name:"Sneha Reddy",rollNumber:"23IT045",department:"IT",year:2,points:1100,weeklyPoints:300,streak:11,hearts:4,lastHeartLossTime:Date.now()-1e3*60*20,unlockedBadges:["badge_iam","badge_s3","badge_serverless","badge_streak_7","badge_apex"],buildingTier:"apex_monolith",floors:23,accentColor:"#00FFA3",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=Sneha",rankWeekly:2,rankMonthly:2},{id:"stu_3",name:"Rohan Patel",rollNumber:"22AI019",department:"AI & Data Science",year:3,points:950,weeklyPoints:250,streak:9,hearts:5,lastHeartLossTime:null,unlockedBadges:["badge_iam","badge_s3","badge_streak_7"],buildingTier:"cyber_tower",floors:20,accentColor:"#8B5CF6",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=Rohan",rankWeekly:3,rankMonthly:3},{id:"stu_4",name:"Ananya Verma",rollNumber:"24CS210",department:"CSE",year:1,points:750,weeklyPoints:200,streak:6,hearts:5,lastHeartLossTime:null,unlockedBadges:["badge_iam","badge_s3"],buildingTier:"cyber_tower",floors:16,accentColor:"#06B6D4",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=Ananya",rankWeekly:4,rankMonthly:4},{id:"stu_5",name:"Karthik Raja",rollNumber:"23EC082",department:"ECE",year:2,points:620,weeklyPoints:180,streak:5,hearts:3,lastHeartLossTime:Date.now()-1e3*60*50,unlockedBadges:["badge_iam"],buildingTier:"cyber_tower",floors:13,accentColor:"#EC4899",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=Karthik",rankWeekly:5,rankMonthly:5},{id:"stu_6",name:"Pooja Nair",rollNumber:"22CY031",department:"Cyber Security",year:3,points:580,weeklyPoints:150,streak:8,hearts:5,lastHeartLossTime:null,unlockedBadges:["badge_iam","badge_streak_7"],buildingTier:"datacenter",floors:12,accentColor:"#10B981",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=Pooja",rankWeekly:6,rankMonthly:6},{id:"stu_7",name:"Vikram Joshi",rollNumber:"23AI112",department:"AI & Data Science",year:2,points:480,weeklyPoints:120,streak:4,hearts:5,lastHeartLossTime:null,unlockedBadges:["badge_s3"],buildingTier:"datacenter",floors:10,accentColor:"#F59E0B",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=Vikram",rankWeekly:7,rankMonthly:7},{id:"stu_8",name:"Divya Iyer",rollNumber:"24IT008",department:"IT",year:1,points:390,weeklyPoints:90,streak:3,hearts:2,lastHeartLossTime:Date.now()-1e3*60*15,unlockedBadges:["badge_iam"],buildingTier:"datacenter",floors:8,accentColor:"#3B82F6",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=Divya",rankWeekly:8,rankMonthly:8},{id:"stu_9",name:"Mohammed Zaid",rollNumber:"23CS099",department:"CSE",year:2,points:250,weeklyPoints:70,streak:2,hearts:5,lastHeartLossTime:null,unlockedBadges:["badge_iam"],buildingTier:"datacenter",floors:6,accentColor:"#A855F7",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=Zaid",rankWeekly:9,rankMonthly:9},{id:"stu_10",name:"Meera Menon",rollNumber:"24EC054",department:"ECE",year:1,points:140,weeklyPoints:40,streak:1,hearts:5,lastHeartLossTime:null,unlockedBadges:[],buildingTier:"shack",floors:3,accentColor:"#E11D48",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=Meera",rankWeekly:10,rankMonthly:10}],Dv={id:"current_spoc_user",name:"Dev Cadet (You)",rollNumber:"23CS001",department:"CSE",year:3,points:450,weeklyPoints:150,streak:5,hearts:5,lastHeartLossTime:null,unlockedBadges:["badge_iam","badge_s3","badge_streak_7"],buildingTier:"datacenter",floors:10,accentColor:"#FF9900",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=Cadet",rankWeekly:6,rankMonthly:7};class Lv{constructor(){Qu(this,"ctx",null);Qu(this,"isMuted",!1)}initCtx(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(e){this.isMuted=e}getIsMuted(){return this.isMuted}playTap(){if(this.isMuted||(this.initCtx(),!this.ctx))return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(800,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(300,this.ctx.currentTime+.04),t.gain.setValueAtTime(.08,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.04),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.04)}playCorrect(){if(this.isMuted||(this.initCtx(),!this.ctx))return;[523.25,659.25,783.99,1046.5].forEach((t,r)=>{if(!this.ctx)return;const o=this.ctx.createOscillator(),l=this.ctx.createGain(),u=this.ctx.currentTime+r*.07;o.type="triangle",o.frequency.setValueAtTime(t,u),l.gain.setValueAtTime(.15,u),l.gain.exponentialRampToValueAtTime(.001,u+.25),o.connect(l),l.connect(this.ctx.destination),o.start(u),o.stop(u+.25)})}playWrong(){if(this.isMuted||(this.initCtx(),!this.ctx))return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(160,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(110,this.ctx.currentTime+.25),t.gain.setValueAtTime(.18,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.25),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.25)}playFloorAdded(){if(this.isMuted||(this.initCtx(),!this.ctx))return;[{f:440,t:0},{f:554.37,t:.08},{f:659.25,t:.16},{f:880,t:.26}].forEach(({f:t,t:r})=>{if(!this.ctx)return;const o=this.ctx.createOscillator(),l=this.ctx.createGain(),u=this.ctx.currentTime+r;o.type="sine",o.frequency.setValueAtTime(t,u),l.gain.setValueAtTime(.2,u),l.gain.exponentialRampToValueAtTime(.001,u+.4),o.connect(l),l.connect(this.ctx.destination),o.start(u),o.stop(u+.4)})}playRefill(){if(this.isMuted||(this.initCtx(),!this.ctx))return;[350,440,523,700,880].forEach((t,r)=>{if(!this.ctx)return;const o=this.ctx.createOscillator(),l=this.ctx.createGain(),u=this.ctx.currentTime+r*.05;o.type="sine",o.frequency.setValueAtTime(t,u),l.gain.setValueAtTime(.12,u),l.gain.exponentialRampToValueAtTime(.001,u+.3),o.connect(l),l.connect(this.ctx.destination),o.start(u),o.stop(u+.3)})}}const Xe=new Lv,Pi={CURRENT_USER:"aws_cloud_city_user",SUBMISSIONS:"aws_cloud_city_submissions",CUSTOM_QUESTIONS:"aws_cloud_city_custom_questions",MUTED:"aws_cloud_city_muted",ACTIVE_WEEK:"aws_cloud_city_active_week"};function Vs(s,e){try{const t=localStorage.getItem(s);return t?JSON.parse(t):e}catch(t){return console.warn(`Error reading from localStorage key: ${s}`,t),e}}function Hs(s,e){try{localStorage.setItem(s,JSON.stringify(e))}catch(t){console.warn(`Error writing to localStorage key: ${s}`,t)}}const El=2700,Tl=5,$0=Ae.createContext(void 0);function Iv(s){return s>=1e3?"apex_monolith":s>=500?"cyber_tower":s>=180?"datacenter":"shack"}function Uv(s){return Math.max(1,Math.floor(s/50)+1)}const kv=({children:s})=>{const[e,t]=Ae.useState(()=>Vs(Pi.CURRENT_USER,Dv)),[r,o]=Ae.useState(()=>{const F=Vs("aws_cloud_city_students_list",[]);return F.length>0?F:Pv}),[l,u]=Ae.useState(()=>Vs(Pi.SUBMISSIONS,[])),[h,m]=Ae.useState(()=>Vs(Pi.CUSTOM_QUESTIONS,[])),[p,_]=Ae.useState([...Nv,...h]),[M,g]=Ae.useState(Rv),[y]=Ae.useState(Cv),[E,C]=Ae.useState(()=>Vs(Pi.ACTIVE_WEEK,1)),[S,v]=Ae.useState(()=>Vs(Pi.MUTED,!1)),[O,k]=Ae.useState(0),[N,U]=Ae.useState(!1),[I,B]=Ae.useState("home"),[T,P]=Ae.useState(null),[H,V]=Ae.useState(!1),[G,te]=Ae.useState(null);Ae.useEffect(()=>{Xe.setMuted(S),Hs(Pi.MUTED,S)},[S]),Ae.useEffect(()=>{Hs(Pi.CURRENT_USER,e)},[e]),Ae.useEffect(()=>{Hs(Pi.SUBMISSIONS,l)},[l]),Ae.useEffect(()=>{Hs("aws_cloud_city_students_list",r)},[r]),Ae.useEffect(()=>{const F=setInterval(()=>{if(e.hearts<Tl&&e.lastHeartLossTime){const xe=Math.floor((Date.now()-e.lastHeartLossTime)/1e3),_e=Math.floor(xe/El);if(_e>0){const X=Math.min(Tl,e.hearts+_e),ne=X>=Tl?null:e.lastHeartLossTime+_e*El*1e3;t(re=>({...re,hearts:X,lastHeartLossTime:ne})),Xe.playRefill()}const Se=El-xe%El;k(Se)}else k(0)},1e3);return()=>clearInterval(F)},[e.hearts,e.lastHeartLossTime]);const me=()=>{v(F=>!F)},Z=Ae.useCallback(()=>{t(F=>({...F,hearts:Tl,lastHeartLossTime:null})),k(0),Xe.playRefill(),V(!1)},[]),se=Ae.useCallback(F=>{Xe.playFloorAdded(),o(xe=>xe.filter(_e=>_e.id!==F))},[]),Q=Ae.useCallback((F,xe)=>{const _e=p.find(ne=>ne.id===F);if(!_e||l.some(ne=>ne.questionId===F))return!1;if(e.hearts<=0)return Xe.playWrong(),V(!0),!1;if(xe===_e.correctOption){const ye=50+Math.min(e.streak,5)*5,Pe=e.points+ye,Re=e.weeklyPoints+ye,lt=e.streak+1,qe=e.floors,He=Uv(Pe),ot=Iv(Pe),ct={questionId:F,selectedOption:xe,isCorrect:!0,timestamp:Date.now(),earnedPoints:ye};return u(pt=>[...pt,ct]),t(pt=>({...pt,points:Pe,weeklyPoints:Re,streak:lt,floors:He,buildingTier:ot})),Xe.playCorrect(),He>qe&&setTimeout(()=>Xe.playFloorAdded(),350),te({question:_e,selectedOption:xe,isCorrect:!0,earnedPoints:ye}),!0}else{const ne=Math.max(0,e.hearts-1),re={questionId:F,selectedOption:xe,isCorrect:!1,timestamp:Date.now(),earnedPoints:0};return u(ye=>[...ye,re]),t(ye=>({...ye,hearts:ne,lastHeartLossTime:ye.lastHeartLossTime||Date.now(),streak:0})),Xe.playWrong(),te({question:_e,selectedOption:xe,isCorrect:!1,earnedPoints:0}),ne===0&&setTimeout(()=>{V(!0)},600),!1}},[p,l,e]),Y=F=>{C(F),Hs(Pi.ACTIVE_WEEK,F)},ae=F=>{const xe={...F,id:`q_custom_${Date.now()}`},_e=[xe,...p];_(_e),m(Se=>{const X=[xe,...Se];return Hs(Pi.CUSTOM_QUESTIONS,X),X})},L=F=>{const xe={...F,id:`ann_${Date.now()}`};g(_e=>[xe,..._e])},w=[e,...r.filter(F=>F.id!==e.id)].sort((F,xe)=>xe.points-F.points);return d.jsx($0.Provider,{value:{currentUser:e,students:w,questions:p,submissions:l,announcements:M,badges:y,activeWeek:E,isMuted:S,cooldownRemainingSecs:O,isAdminMode:N,activeTab:I,selectedStudentModal:T,showCooldownModal:H,lastAnswerResult:G,submitAnswer:Q,refillHearts:Z,toggleMute:me,setActiveTab:B,setIsAdminMode:U,setSelectedStudentModal:P,setShowCooldownModal:V,setLastAnswerResult:te,setActiveWeek:Y,addNewQuestion:ae,addNewAnnouncement:L,removeStudent:se},children:s})},fi=()=>{const s=Ae.useContext($0);if(!s)throw new Error("useGame must be used within a GameProvider");return s};/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=s=>{const e=Ov(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},Bv=Ae.createContext({}),Vv=()=>Ae.useContext(Bv),Hv=Ae.forwardRef(({color:s,size:e,strokeWidth:t,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...h},m)=>{const{size:p=24,strokeWidth:_=2,absoluteStrokeWidth:M=!1,color:g="currentColor",className:y=""}=Vv()??{},E=r??M?Number(t??_)*24/Number(e??p):t??_;return Ae.createElement("svg",{ref:m,...rd,width:e??p??rd.width,height:e??p??rd.height,stroke:s??g,strokeWidth:E,className:K0("lucide",y,o),...!l&&!zv(h)&&{"aria-hidden":"true"},...h},[...u.map(([C,S])=>Ae.createElement(C,S)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=(s,e)=>{const t=Ae.forwardRef(({className:r,...o},l)=>Ae.createElement(Hv,{ref:l,iconNode:e,className:K0(`lucide-${Fv(km(s))}`,`lucide-${s}`,r),...o}));return t.displayName=km(s),t};/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],jv=mt("arrow-left",Gv);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Uf=mt("arrow-right",Wv);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],mo=mt("award",Xv);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]],Vd=mt("book-open",qv);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],xo=mt("building-2",Yv);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],Kv=mt("calendar",$v);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Qv=mt("check",Zv);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],e_=mt("circle-alert",Jv);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],kr=mt("circle-check",t_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],Fm=mt("circle-plus",n_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],r_=mt("circle-x",i_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],a_=mt("clock",s_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],Z0=mt("cloud",o_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]],c_=mt("compass",l_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],d_=mt("crown",u_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],h_=mt("download",f_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Om=mt("external-link",p_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],kf=mt("flame",m_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],la=mt("heart",x_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],v_=mt("house",g_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],y_=mt("key-round",__);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],M_=mt("lightbulb",S_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Q0=mt("lock",b_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],E_=mt("map-pin",w_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],A_=mt("message-square",T_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],R_=mt("moon",C_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]],P_=mt("mouse-pointer-2",N_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],L_=mt("move",D_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],U_=mt("navigation",I_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Hd=mt("radio",k_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],zm=mt("refresh-cw",F_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],z_=mt("rotate-ccw",O_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],V_=mt("save",B_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ff=mt("search",H_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],j_=mt("share-2",G_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Of=mt("shield-check",W_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],J0=mt("sparkles",X_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Y_=mt("sun",q_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]],K_=mt("sunset",$_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],ex=mt("terminal",Z_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],J_=mt("trash-2",Q_);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ty=mt("triangle-alert",ey);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]],co=mt("trophy",ny);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],ry=mt("user",iy);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],ay=mt("users",sy);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],ly=mt("volume-2",oy);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],uy=mt("volume-x",cy);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],mc=mt("x",dy);/**
 * @license lucide-react v1.33.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]],go=mt("zap",fy),hy=({onOpenProfile:s})=>{const{currentUser:e,activeTab:t,setActiveTab:r,isMuted:o,toggleMute:l,cooldownRemainingSecs:u,setShowCooldownModal:h}=fi(),[m,p]=Ae.useState(!1),_=g=>{const y=Math.floor(g/60),E=g%60;return`${y}:${E<10?"0":""}${E}`},M=[{id:"home",label:"Overview",icon:v_},{id:"city",label:"3D City",icon:xo},{id:"quiz",label:"Weekly Arena",icon:go,tag:"+50"},{id:"leaderboard",label:"Leaderboard",icon:co},{id:"announcements",label:"Certs & Events",icon:Hd}];return d.jsxs("header",{className:"sticky top-0 z-40 w-full bg-[#06080d]/95 border-b border-zinc-800/90 backdrop-blur-md",children:[d.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4",children:[d.jsxs("div",{onClick:()=>{Xe.playTap(),r("home")},className:"flex items-center gap-3 cursor-pointer group select-none",children:[d.jsx("div",{className:"flex items-center justify-center w-8 h-8 rounded-lg bg-aws-orange text-zinc-950 font-black shadow-md shadow-aws-orange/20 group-hover:scale-105 transition-transform",children:d.jsx(Z0,{className:"w-4 h-4 fill-current"})}),d.jsx("div",{children:d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsxs("span",{className:"font-heading font-normal text-base sm:text-lg tracking-tight text-white group-hover:text-aws-orange transition-colors",children:["AWS ",d.jsx("span",{className:"italic text-aws-orange",children:"Cloud City"})]}),d.jsx("span",{className:"hidden sm:inline-block px-1.5 py-0.2 text-[9px] font-mono font-bold bg-zinc-900 text-zinc-400 border border-zinc-800 rounded",children:"COLLEGE"})]})})]}),d.jsx("nav",{className:"hidden md:flex items-center gap-1 bg-zinc-900/90 p-1 rounded-xl border border-zinc-800",children:M.map(g=>{const y=g.icon,E=t===g.id;return d.jsxs("button",{onClick:()=>{Xe.playTap(),r(g.id)},className:`relative px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all ${E?"bg-zinc-800 text-aws-orange border border-zinc-700/80 shadow-sm":"text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40 border border-transparent"}`,children:[d.jsx(y,{className:`w-3.5 h-3.5 ${E?"text-aws-orange":"text-zinc-400"}`}),d.jsx("span",{children:g.label}),"tag"in g&&g.tag&&d.jsx("span",{className:`text-[9px] px-1 py-0.2 rounded font-mono font-bold ${E?"bg-aws-orange text-black":"bg-zinc-800 text-zinc-400"}`,children:g.tag})]},g.id)})}),d.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[d.jsxs("div",{className:"relative",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[d.jsxs("button",{onClick:()=>{Xe.playTap(),e.hearts===0&&h(!0)},className:"flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 px-2.5 py-1.5 rounded-xl transition-colors",children:[d.jsx(la,{className:`w-3.5 h-3.5 ${e.hearts>0?"text-rose-500 fill-rose-500":"text-zinc-600"}`}),d.jsxs("span",{className:"font-mono font-bold text-xs text-rose-300",children:[e.hearts,"/5"]}),u>0&&d.jsxs("span",{className:"hidden sm:inline-block text-[10px] font-mono text-zinc-400 ml-1",children:["(",_(u),")"]})]}),m&&d.jsxs("div",{className:"absolute top-full right-0 mt-2 w-56 p-3 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl z-50 text-xs font-mono text-zinc-300",children:[d.jsxs("p",{className:"font-bold text-white mb-1 flex items-center gap-1",children:[d.jsx(la,{className:"w-3 h-3 text-rose-500 fill-rose-500"})," Attempt Hearts"]}),d.jsx("p",{className:"text-zinc-400 text-[11px] mb-2 font-sans",children:"5 wrong attempts allowed. Refills +1 heart every 45 mins."}),u>0?d.jsxs("p",{className:"text-amber-400 font-semibold text-[11px]",children:["Next refill: ",_(u)]}):d.jsx("p",{className:"text-emerald-400 font-medium text-[11px]",children:"⚡ Ready for weekly challenge"})]})]}),d.jsxs("div",{className:"flex items-center gap-1 bg-zinc-900 border border-zinc-800 px-2.5 py-1.5 rounded-xl",children:[d.jsx(kf,{className:"w-3.5 h-3.5 text-amber-500 fill-amber-500"}),d.jsxs("span",{className:"font-mono font-bold text-xs text-amber-300",children:[e.streak,"d"]})]}),d.jsx("button",{onClick:()=>{Xe.playTap(),l()},className:"p-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors",title:o?"Unmute game sounds":"Mute game sounds",children:o?d.jsx(uy,{className:"w-3.5 h-3.5 text-rose-400"}):d.jsx(ly,{className:"w-3.5 h-3.5 text-emerald-400"})}),d.jsxs("button",{onClick:()=>{Xe.playTap(),s()},className:"flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 p-1 sm:px-2.5 sm:py-1.5 rounded-xl transition-all group",children:[d.jsx("img",{src:e.avatar,alt:e.name,className:"w-6 h-6 rounded-lg bg-zinc-800"}),d.jsxs("div",{className:"text-left hidden md:block",children:[d.jsx("div",{className:"text-xs font-mono font-bold text-white group-hover:text-aws-orange transition-colors",children:e.name}),d.jsxs("div",{className:"text-[10px] text-aws-orange font-mono font-bold",children:[e.points," PTS • ",e.floors,"F"]})]})]})]})]}),d.jsx("div",{className:"md:hidden flex items-center justify-around bg-zinc-950 border-t border-zinc-800/80 px-2 py-1.5",children:M.map(g=>{const y=g.icon,E=t===g.id;return d.jsxs("button",{onClick:()=>{Xe.playTap(),r(g.id)},className:`flex flex-col items-center py-1 px-3 rounded-lg text-[10px] font-mono font-semibold transition-colors ${E?"text-aws-orange":"text-zinc-400"}`,children:[d.jsx(y,{className:"w-4 h-4 mb-0.5"}),d.jsx("span",{children:g.label})]},g.id)})})]})},py=()=>{const{students:s,questions:e,activeWeek:t,currentUser:r,setActiveTab:o}=fi(),l=Math.max(...s.map(h=>h.floors),1),u=s.reduce((h,m)=>h+m.points,0);return d.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-zinc-100 animate-fade-in",children:[d.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 sm:mb-24",children:[d.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono font-medium text-aws-orange mb-6",children:[d.jsx(J0,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"AWS STUDENT CHAPTER • COLLEGE CHAPTER"})]}),d.jsxs("h1",{className:"text-4xl sm:text-6xl lg:text-7xl font-heading font-normal tracking-tight text-white leading-[1.08] mb-6",children:["Learn AWS in 3D. ",d.jsx("br",{}),d.jsx("span",{className:"italic text-aws-orange",children:"Construct"})," your skyline."]}),d.jsx("p",{className:"text-sm sm:text-base text-zinc-400 font-sans leading-relaxed max-w-xl mx-auto mb-8",children:"A gamified cloud computing arena for engineering students. Solve weekly certification MCQs, protect your 5 hearts, and watch your skyscraper rise on an interactive 3D metropolis."}),d.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3",children:[d.jsxs("button",{onClick:()=>{Xe.playTap(),o("city")},className:"w-full sm:w-auto px-7 py-3.5 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-aws-orange/20",children:[d.jsx(c_,{className:"w-4 h-4"}),d.jsx("span",{children:"Explore 3D City Metropolis"})]}),d.jsxs("button",{onClick:()=>{Xe.playTap(),o("quiz")},className:"w-full sm:w-auto px-7 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono font-semibold text-xs flex items-center justify-center gap-2 transition-all",children:[d.jsx(go,{className:"w-4 h-4 text-aws-orange"}),d.jsx("span",{children:"Launch Weekly Quiz Sprint"})]})]})]}),d.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 bg-zinc-950 border border-zinc-800 p-4 sm:p-6 rounded-3xl mb-16 sm:mb-24 shadow-2xl font-mono",children:[d.jsxs("div",{className:"p-3 border-r border-zinc-800/80 last:border-r-0",children:[d.jsx("div",{className:"text-[11px] text-zinc-500 font-medium",children:"REGISTERED TOWERS"}),d.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-white mt-1",children:s.length}),d.jsx("div",{className:"text-[10px] text-emerald-400 mt-0.5",children:"Active Architects"})]}),d.jsxs("div",{className:"p-3 border-r border-zinc-800/80 last:border-r-0",children:[d.jsx("div",{className:"text-[11px] text-zinc-500 font-medium",children:"TOTAL SCORE POOL"}),d.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-aws-orange mt-1",children:u.toLocaleString()}),d.jsx("div",{className:"text-[10px] text-zinc-400 mt-0.5",children:"Cumulative Pts"})]}),d.jsxs("div",{className:"p-3 border-r border-zinc-800/80 last:border-r-0",children:[d.jsx("div",{className:"text-[11px] text-zinc-500 font-medium",children:"APEX TOWER HEIGHT"}),d.jsxs("div",{className:"text-2xl sm:text-3xl font-bold text-cyan-400 mt-1",children:[l,"F"]}),d.jsx("div",{className:"text-[10px] text-zinc-400 mt-0.5",children:"Max Floors Built"})]}),d.jsxs("div",{className:"p-3",children:[d.jsx("div",{className:"text-[11px] text-zinc-500 font-medium",children:"CURRENT SPRINT"}),d.jsxs("div",{className:"text-2xl sm:text-3xl font-bold text-amber-400 mt-1",children:["Week ",t]}),d.jsxs("div",{className:"text-[10px] text-zinc-400 mt-0.5",children:[e.filter(h=>h.weekNumber===t).length," Modules Live"]})]})]}),d.jsxs("div",{className:"mb-20",children:[d.jsxs("div",{className:"text-center mb-12",children:[d.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-aws-orange font-bold",children:"ARCHITECTURE & GAME MECHANICS"}),d.jsx("h2",{className:"text-2xl sm:text-4xl font-heading text-white mt-2",children:"Engineered for real AWS Cert mastery"})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[d.jsxs("div",{className:"bg-zinc-950 border border-zinc-800/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between",children:[d.jsxs("div",{children:[d.jsx("div",{className:"w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-aws-orange mb-4",children:d.jsx(xo,{className:"w-5 h-5"})}),d.jsx("h3",{className:"text-xl font-heading text-white mb-2",children:"3D Procedural Metropolis"}),d.jsx("p",{className:"text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed",children:"Built on Three.js and WebGL. Every 50 points earned adds a physical floor to your skyscraper. Rotate 360°, pan across college department blocks, and inspect peers' stats."})]}),d.jsxs("div",{className:"mt-6 pt-4 border-t border-zinc-800/80 font-mono text-[11px] text-zinc-400 flex items-center gap-2",children:[d.jsx(kr,{className:"w-3.5 h-3.5 text-emerald-400"}),d.jsx("span",{children:"Full OrbitControls & Raycasting Inspection"})]})]}),d.jsxs("div",{className:"bg-zinc-950 border border-zinc-800/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between",children:[d.jsxs("div",{children:[d.jsx("div",{className:"w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-400 mb-4",children:d.jsx(la,{className:"w-5 h-5 fill-rose-500/20"})}),d.jsx("h3",{className:"text-xl font-heading text-white mb-2",children:"5-Heart Life Cooldown Engine"}),d.jsx("p",{className:"text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed",children:"Anti-guess mechanics: each student has 5 hearts. Wrong answers cost 1 heart. Reaching zero triggers a cooldown timer (+1 heart every 45 mins) to promote thoughtful learning."})]}),d.jsxs("div",{className:"mt-6 pt-4 border-t border-zinc-800/80 font-mono text-[11px] text-zinc-400 flex items-center gap-2",children:[d.jsx(kr,{className:"w-3.5 h-3.5 text-emerald-400"}),d.jsx("span",{children:"Timed replenishment & streak multipliers"})]})]}),d.jsxs("div",{className:"bg-zinc-950 border border-zinc-800/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between",children:[d.jsxs("div",{children:[d.jsx("div",{className:"w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 mb-4",children:d.jsx(ex,{className:"w-5 h-5"})}),d.jsx("h3",{className:"text-xl font-heading text-white mb-2",children:"Official Cert Question Banks"}),d.jsx("p",{className:"text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed",children:"Curated AWS Cloud Practitioner & Solutions Architect Associate questions covering IAM, S3 Lifecycle, VPC Subnets, EC2 Spot, DynamoDB, and the Well-Architected Framework."})]}),d.jsxs("div",{className:"mt-6 pt-4 border-t border-zinc-800/80 font-mono text-[11px] text-zinc-400 flex items-center gap-2",children:[d.jsx(kr,{className:"w-3.5 h-3.5 text-emerald-400"}),d.jsx("span",{children:"In-depth architectural explanations per question"})]})]}),d.jsxs("div",{className:"bg-zinc-950 border border-zinc-800/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between",children:[d.jsxs("div",{children:[d.jsx("div",{className:"w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-purple-400 mb-4",children:d.jsx(mo,{className:"w-5 h-5"})}),d.jsx("h3",{className:"text-xl font-heading text-white mb-2",children:"Dynamic Verifiable Certificates"}),d.jsx("p",{className:"text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed",children:"Top weekly and monthly architects unlock official AWS Student Club certificates with dynamic verification codes, custom rank titles, and 1-click high-res image export."})]}),d.jsxs("div",{className:"mt-6 pt-4 border-t border-zinc-800/80 font-mono text-[11px] text-zinc-400 flex items-center gap-2",children:[d.jsx(kr,{className:"w-3.5 h-3.5 text-emerald-400"}),d.jsx("span",{children:"Canvas 2D vector credentials with SPOC signature"})]})]})]})]}),d.jsxs("div",{className:"bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden",children:[d.jsx("h3",{className:"text-2xl sm:text-4xl font-heading text-white mb-3",children:"Ready to build your first floor?"}),d.jsxs("p",{className:"text-xs sm:text-sm text-zinc-400 font-sans max-w-md mx-auto mb-6",children:["Logged in as ",d.jsx("strong",{className:"text-white font-mono",children:r.name})," (",r.rollNumber," • ",r.department,"). Jump right into this week's challenge."]}),d.jsxs("button",{onClick:()=>{Xe.playTap(),o("quiz")},className:"px-8 py-3.5 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 font-mono font-bold text-xs inline-flex items-center gap-2 transition-all shadow-lg shadow-aws-orange/20",children:[d.jsxs("span",{children:["Begin Week ",t," Quiz Sprint"]}),d.jsx(Uf,{className:"w-4 h-4"})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zf="185",ra={ROTATE:0,DOLLY:1,PAN:2},ia={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},my=0,Bm=1,xy=2,Ql=1,tx=2,so=3,Or=0,qn=1,Ui=2,sr=0,sa=1,Vm=2,Hm=3,Gm=4,gy=5,ds=100,vy=101,_y=102,yy=103,Sy=104,My=200,by=201,wy=202,Ey=203,Gd=204,jd=205,Ty=206,Ay=207,Cy=208,Ry=209,Ny=210,Py=211,Dy=212,Ly=213,Iy=214,Wd=0,Xd=1,qd=2,ca=3,Yd=4,$d=5,Kd=6,Zd=7,nx=0,Uy=1,ky=2,zi=0,ix=1,rx=2,sx=3,Bf=4,ax=5,ox=6,lx=7,cx=300,ms=301,ua=302,sd=303,ad=304,xc=306,uo=1e3,rr=1001,Qd=1002,bn=1003,Fy=1004,Al=1005,Pn=1006,od=1007,hs=1008,ni=1009,ux=1010,dx=1011,fo=1012,Vf=1013,Hi=1014,Fi=1015,or=1016,Hf=1017,Gf=1018,ho=1020,fx=35902,hx=35899,px=1021,mx=1022,Ei=1023,lr=1026,ps=1027,xx=1028,jf=1029,xs=1030,Wf=1031,Xf=1033,Jl=33776,ec=33777,tc=33778,nc=33779,Jd=35840,ef=35841,tf=35842,nf=35843,rf=36196,sf=37492,af=37496,of=37488,lf=37489,sc=37490,cf=37491,uf=37808,df=37809,ff=37810,hf=37811,pf=37812,mf=37813,xf=37814,gf=37815,vf=37816,_f=37817,yf=37818,Sf=37819,Mf=37820,bf=37821,wf=36492,Ef=36494,Tf=36495,Af=36283,Cf=36284,ac=36285,Rf=36286,Oy=3200,Nf=0,zy=1,Ur="",di="srgb",oc="srgb-linear",lc="linear",Bt="srgb",Gs=7680,jm=519,By=512,Vy=513,Hy=514,qf=515,Gy=516,jy=517,Yf=518,Wy=519,Wm=35044,Xm="300 es",Oi=2e3,po=2001;function Xy(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function cc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qy(){const s=cc("canvas");return s.style.display="block",s}const qm={};function Ym(...s){const e="THREE."+s.shift();console.log(e,...s)}function gx(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ht(...s){s=gx(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Dt(...s){s=gx(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function aa(...s){const e=s.join(" ");e in qm||(qm[e]=!0,ht(...s))}function Yy(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const $y={[Wd]:Xd,[qd]:Kd,[Yd]:Zd,[ca]:$d,[Xd]:Wd,[Kd]:qd,[Zd]:Yd,[$d]:ca};class Vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ic=Math.PI/180,uc=180/Math.PI;function vo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function Ky(s,e){return(s%e+e)%e}function ld(s,e,t){return(1-t)*s+t*e}function Za(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Zy={DEG2RAD:ic},sh=class sh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sh.prototype.isVector2=!0;let xt=sh;class zr{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,h){let m=r[o+0],p=r[o+1],_=r[o+2],M=r[o+3],g=l[u+0],y=l[u+1],E=l[u+2],C=l[u+3];if(M!==C||m!==g||p!==y||_!==E){let S=m*g+p*y+_*E+M*C;S<0&&(g=-g,y=-y,E=-E,C=-C,S=-S);let v=1-h;if(S<.9995){const O=Math.acos(S),k=Math.sin(O);v=Math.sin(v*O)/k,h=Math.sin(h*O)/k,m=m*v+g*h,p=p*v+y*h,_=_*v+E*h,M=M*v+C*h}else{m=m*v+g*h,p=p*v+y*h,_=_*v+E*h,M=M*v+C*h;const O=1/Math.sqrt(m*m+p*p+_*_+M*M);m*=O,p*=O,_*=O,M*=O}}e[t]=m,e[t+1]=p,e[t+2]=_,e[t+3]=M}static multiplyQuaternionsFlat(e,t,r,o,l,u){const h=r[o],m=r[o+1],p=r[o+2],_=r[o+3],M=l[u],g=l[u+1],y=l[u+2],E=l[u+3];return e[t]=h*E+_*M+m*y-p*g,e[t+1]=m*E+_*g+p*M-h*y,e[t+2]=p*E+_*y+h*g-m*M,e[t+3]=_*E-h*M-m*g-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(o/2),M=h(l/2),g=m(r/2),y=m(o/2),E=m(l/2);switch(u){case"XYZ":this._x=g*_*M+p*y*E,this._y=p*y*M-g*_*E,this._z=p*_*E+g*y*M,this._w=p*_*M-g*y*E;break;case"YXZ":this._x=g*_*M+p*y*E,this._y=p*y*M-g*_*E,this._z=p*_*E-g*y*M,this._w=p*_*M+g*y*E;break;case"ZXY":this._x=g*_*M-p*y*E,this._y=p*y*M+g*_*E,this._z=p*_*E+g*y*M,this._w=p*_*M-g*y*E;break;case"ZYX":this._x=g*_*M-p*y*E,this._y=p*y*M+g*_*E,this._z=p*_*E-g*y*M,this._w=p*_*M+g*y*E;break;case"YZX":this._x=g*_*M+p*y*E,this._y=p*y*M+g*_*E,this._z=p*_*E-g*y*M,this._w=p*_*M-g*y*E;break;case"XZY":this._x=g*_*M-p*y*E,this._y=p*y*M-g*_*E,this._z=p*_*E+g*y*M,this._w=p*_*M+g*y*E;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],h=t[5],m=t[9],p=t[2],_=t[6],M=t[10],g=r+h+M;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(l-p)*y,this._z=(u-o)*y}else if(r>h&&r>M){const y=2*Math.sqrt(1+r-h-M);this._w=(_-m)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+p)/y}else if(h>M){const y=2*Math.sqrt(1+h-r-M);this._w=(l-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+M-r-h);this._w=(u-o)/y,this._x=(l+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,h=t._x,m=t._y,p=t._z,_=t._w;return this._x=r*_+u*h+o*p-l*m,this._y=o*_+u*m+l*h-r*p,this._z=l*_+u*p+r*m-o*h,this._w=u*_-r*h-o*m-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,l=-l,u=-u,h=-h);let m=1-t;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,t=Math.sin(t*p)/_,this._x=this._x*m+r*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this._onChangeCallback()}else this._x=this._x*m+r*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ah=class ah{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($m.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($m.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,h=e.z,m=e.w,p=2*(u*o-h*r),_=2*(h*t-l*o),M=2*(l*r-u*t);return this.x=t+m*p+u*M-h*_,this.y=r+m*_+h*p-l*M,this.z=o+m*M+l*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,h=t.y,m=t.z;return this.x=o*m-l*h,this.y=l*u-r*m,this.z=r*h-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return cd.copy(this).projectOnVector(e),this.sub(cd)}reflect(e){return this.sub(cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ah.prototype.isVector3=!0;let ee=ah;const cd=new ee,$m=new zr,oh=class oh{constructor(e,t,r,o,l,u,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,h,m,p)}set(e,t,r,o,l,u,h,m,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=h,_[3]=t,_[4]=l,_[5]=m,_[6]=r,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],h=r[3],m=r[6],p=r[1],_=r[4],M=r[7],g=r[2],y=r[5],E=r[8],C=o[0],S=o[3],v=o[6],O=o[1],k=o[4],N=o[7],U=o[2],I=o[5],B=o[8];return l[0]=u*C+h*O+m*U,l[3]=u*S+h*k+m*I,l[6]=u*v+h*N+m*B,l[1]=p*C+_*O+M*U,l[4]=p*S+_*k+M*I,l[7]=p*v+_*N+M*B,l[2]=g*C+y*O+E*U,l[5]=g*S+y*k+E*I,l[8]=g*v+y*N+E*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return t*u*_-t*h*p-r*l*_+r*h*m+o*l*p-o*u*m}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8],M=_*u-h*p,g=h*m-_*l,y=p*l-u*m,E=t*M+r*g+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=M*C,e[1]=(o*p-_*r)*C,e[2]=(h*r-o*u)*C,e[3]=g*C,e[4]=(_*t-o*m)*C,e[5]=(o*l-h*t)*C,e[6]=y*C,e[7]=(r*m-p*t)*C,e[8]=(u*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,h){const m=Math.cos(l),p=Math.sin(l);return this.set(r*m,r*p,-r*(m*u+p*h)+u+e,-o*p,o*m,-o*(-p*u+m*h)+h+t,0,0,1),this}scale(e,t){return aa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ud.makeScale(e,t)),this}rotate(e){return aa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ud.makeRotation(-e)),this}translate(e,t){return aa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ud.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};oh.prototype.isMatrix3=!0;let yt=oh;const ud=new yt,Km=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zm=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qy(){const s={enabled:!0,workingColorSpace:oc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Bt&&(o.r=ar(o.r),o.g=ar(o.g),o.b=ar(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Bt&&(o.r=oa(o.r),o.g=oa(o.g),o.b=oa(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ur?lc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return aa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return aa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[oc]:{primaries:e,whitePoint:r,transfer:lc,toXYZ:Km,fromXYZ:Zm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:r,transfer:Bt,toXYZ:Km,fromXYZ:Zm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),s}const Nt=Qy();function ar(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let js;class Jy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{js===void 0&&(js=cc("canvas")),js.width=e.width,js.height=e.height;const o=js.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=js}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=ar(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ar(t[r]/255)*255):t[r]=ar(t[r]);return{data:t,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eS=0;class $f{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=vo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?l.push(dd(o[u].image)):l.push(dd(o[u]))}else l=dd(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function dd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Jy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let tS=0;const fd=new ee;class Dn extends Vr{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,r=rr,o=rr,l=Pn,u=hs,h=Ei,m=ni,p=Dn.DEFAULT_ANISOTROPY,_=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=vo(),this.name="",this.source=new $f(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fd).x}get height(){return this.source.getSize(fd).y}get depth(){return this.source.getSize(fd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ht(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ht(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uo:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case Qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uo:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case Qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=cx;Dn.DEFAULT_ANISOTROPY=1;const lh=class lh{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const m=e.elements,p=m[0],_=m[4],M=m[8],g=m[1],y=m[5],E=m[9],C=m[2],S=m[6],v=m[10];if(Math.abs(_-g)<.01&&Math.abs(M-C)<.01&&Math.abs(E-S)<.01){if(Math.abs(_+g)<.1&&Math.abs(M+C)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const k=(p+1)/2,N=(y+1)/2,U=(v+1)/2,I=(_+g)/4,B=(M+C)/4,T=(E+S)/4;return k>N&&k>U?k<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(k),o=I/r,l=B/r):N>U?N<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(N),r=I/o,l=T/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=B/l,o=T/l),this.set(r,o,l,t),this}let O=Math.sqrt((S-E)*(S-E)+(M-C)*(M-C)+(g-_)*(g-_));return Math.abs(O)<.001&&(O=1),this.x=(S-E)/O,this.y=(M-C)/O,this.z=(g-_)/O,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lh.prototype.isVector4=!0;let tn=lh;class nS extends Vr{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Dn(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new $f(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends nS{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class vx extends Dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=bn,this.minFilter=bn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iS extends Dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=bn,this.minFilter=bn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pc=class pc{constructor(e,t,r,o,l,u,h,m,p,_,M,g,y,E,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,h,m,p,_,M,g,y,E,C,S)}set(e,t,r,o,l,u,h,m,p,_,M,g,y,E,C,S){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=M,v[14]=g,v[3]=y,v[7]=E,v[11]=C,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Ws.setFromMatrixColumn(e,0).length(),l=1/Ws.setFromMatrixColumn(e,1).length(),u=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),h=Math.sin(r),m=Math.cos(o),p=Math.sin(o),_=Math.cos(l),M=Math.sin(l);if(e.order==="XYZ"){const g=u*_,y=u*M,E=h*_,C=h*M;t[0]=m*_,t[4]=-m*M,t[8]=p,t[1]=y+E*p,t[5]=g-C*p,t[9]=-h*m,t[2]=C-g*p,t[6]=E+y*p,t[10]=u*m}else if(e.order==="YXZ"){const g=m*_,y=m*M,E=p*_,C=p*M;t[0]=g+C*h,t[4]=E*h-y,t[8]=u*p,t[1]=u*M,t[5]=u*_,t[9]=-h,t[2]=y*h-E,t[6]=C+g*h,t[10]=u*m}else if(e.order==="ZXY"){const g=m*_,y=m*M,E=p*_,C=p*M;t[0]=g-C*h,t[4]=-u*M,t[8]=E+y*h,t[1]=y+E*h,t[5]=u*_,t[9]=C-g*h,t[2]=-u*p,t[6]=h,t[10]=u*m}else if(e.order==="ZYX"){const g=u*_,y=u*M,E=h*_,C=h*M;t[0]=m*_,t[4]=E*p-y,t[8]=g*p+C,t[1]=m*M,t[5]=C*p+g,t[9]=y*p-E,t[2]=-p,t[6]=h*m,t[10]=u*m}else if(e.order==="YZX"){const g=u*m,y=u*p,E=h*m,C=h*p;t[0]=m*_,t[4]=C-g*M,t[8]=E*M+y,t[1]=M,t[5]=u*_,t[9]=-h*_,t[2]=-p*_,t[6]=y*M+E,t[10]=g-C*M}else if(e.order==="XZY"){const g=u*m,y=u*p,E=h*m,C=h*p;t[0]=m*_,t[4]=-M,t[8]=p*_,t[1]=g*M+C,t[5]=u*_,t[9]=y*M-E,t[2]=E*M-y,t[6]=h*_,t[10]=C*M+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rS,e,sS)}lookAt(e,t,r){const o=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Cr.crossVectors(r,Jn),Cr.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Cr.crossVectors(r,Jn)),Cr.normalize(),Cl.crossVectors(Jn,Cr),o[0]=Cr.x,o[4]=Cl.x,o[8]=Jn.x,o[1]=Cr.y,o[5]=Cl.y,o[9]=Jn.y,o[2]=Cr.z,o[6]=Cl.z,o[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],h=r[4],m=r[8],p=r[12],_=r[1],M=r[5],g=r[9],y=r[13],E=r[2],C=r[6],S=r[10],v=r[14],O=r[3],k=r[7],N=r[11],U=r[15],I=o[0],B=o[4],T=o[8],P=o[12],H=o[1],V=o[5],G=o[9],te=o[13],me=o[2],Z=o[6],se=o[10],Q=o[14],Y=o[3],ae=o[7],L=o[11],w=o[15];return l[0]=u*I+h*H+m*me+p*Y,l[4]=u*B+h*V+m*Z+p*ae,l[8]=u*T+h*G+m*se+p*L,l[12]=u*P+h*te+m*Q+p*w,l[1]=_*I+M*H+g*me+y*Y,l[5]=_*B+M*V+g*Z+y*ae,l[9]=_*T+M*G+g*se+y*L,l[13]=_*P+M*te+g*Q+y*w,l[2]=E*I+C*H+S*me+v*Y,l[6]=E*B+C*V+S*Z+v*ae,l[10]=E*T+C*G+S*se+v*L,l[14]=E*P+C*te+S*Q+v*w,l[3]=O*I+k*H+N*me+U*Y,l[7]=O*B+k*V+N*Z+U*ae,l[11]=O*T+k*G+N*se+U*L,l[15]=O*P+k*te+N*Q+U*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],h=e[5],m=e[9],p=e[13],_=e[2],M=e[6],g=e[10],y=e[14],E=e[3],C=e[7],S=e[11],v=e[15],O=m*y-p*g,k=h*y-p*M,N=h*g-m*M,U=u*y-p*_,I=u*g-m*_,B=u*M-h*_;return t*(C*O-S*k+v*N)-r*(E*O-S*U+v*I)+o*(E*k-C*U+v*B)-l*(E*N-C*I+S*B)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],h=e[9],m=e[2],p=e[6],_=e[10];return t*(u*_-h*p)-r*(l*_-h*m)+o*(l*p-u*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8],M=e[9],g=e[10],y=e[11],E=e[12],C=e[13],S=e[14],v=e[15],O=t*h-r*u,k=t*m-o*u,N=t*p-l*u,U=r*m-o*h,I=r*p-l*h,B=o*p-l*m,T=_*C-M*E,P=_*S-g*E,H=_*v-y*E,V=M*S-g*C,G=M*v-y*C,te=g*v-y*S,me=O*te-k*G+N*V+U*H-I*P+B*T;if(me===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/me;return e[0]=(h*te-m*G+p*V)*Z,e[1]=(o*G-r*te-l*V)*Z,e[2]=(C*B-S*I+v*U)*Z,e[3]=(g*I-M*B-y*U)*Z,e[4]=(m*H-u*te-p*P)*Z,e[5]=(t*te-o*H+l*P)*Z,e[6]=(S*N-E*B-v*k)*Z,e[7]=(_*B-g*N+y*k)*Z,e[8]=(u*G-h*H+p*T)*Z,e[9]=(r*H-t*G-l*T)*Z,e[10]=(E*I-C*N+v*O)*Z,e[11]=(M*N-_*I-y*O)*Z,e[12]=(h*P-u*V-m*T)*Z,e[13]=(t*V-r*P+o*T)*Z,e[14]=(C*k-E*U-S*O)*Z,e[15]=(_*U-M*k+g*O)*Z,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,h=e.y,m=e.z,p=l*u,_=l*h;return this.set(p*u+r,p*h-o*m,p*m+o*h,0,p*h+o*m,_*h+r,_*m-o*u,0,p*m-o*h,_*m+o*u,l*m*m+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,h=t._z,m=t._w,p=l+l,_=u+u,M=h+h,g=l*p,y=l*_,E=l*M,C=u*_,S=u*M,v=h*M,O=m*p,k=m*_,N=m*M,U=r.x,I=r.y,B=r.z;return o[0]=(1-(C+v))*U,o[1]=(y+N)*U,o[2]=(E-k)*U,o[3]=0,o[4]=(y-N)*I,o[5]=(1-(g+v))*I,o[6]=(S+O)*I,o[7]=0,o[8]=(E+k)*B,o[9]=(S-O)*B,o[10]=(1-(g+C))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Ws.set(o[0],o[1],o[2]).length();const h=Ws.set(o[4],o[5],o[6]).length(),m=Ws.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Si.copy(this);const p=1/u,_=1/h,M=1/m;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=_,Si.elements[5]*=_,Si.elements[6]*=_,Si.elements[8]*=M,Si.elements[9]*=M,Si.elements[10]*=M,t.setFromRotationMatrix(Si),r.x=u,r.y=h,r.z=m,this}makePerspective(e,t,r,o,l,u,h=Oi,m=!1){const p=this.elements,_=2*l/(t-e),M=2*l/(r-o),g=(t+e)/(t-e),y=(r+o)/(r-o);let E,C;if(m)E=l/(u-l),C=u*l/(u-l);else if(h===Oi)E=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(h===po)E=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=M,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,h=Oi,m=!1){const p=this.elements,_=2/(t-e),M=2/(r-o),g=-(t+e)/(t-e),y=-(r+o)/(r-o);let E,C;if(m)E=1/(u-l),C=u/(u-l);else if(h===Oi)E=-2/(u-l),C=-(u+l)/(u-l);else if(h===po)E=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=M,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};pc.prototype.isMatrix4=!0;let Kt=pc;const Ws=new ee,Si=new Kt,rS=new ee(0,0,0),sS=new ee(1,1,1),Cr=new ee,Cl=new ee,Jn=new ee,Qm=new Kt,Jm=new zr;class Br{constructor(e=0,t=0,r=0,o=Br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],h=o[8],m=o[1],p=o[5],_=o[9],M=o[2],g=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-M,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-M,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-Ct(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Ct(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-M,l)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jm.setFromEuler(this),this.setFromQuaternion(Jm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Br.DEFAULT_ORDER="XYZ";class Kf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aS=0;const e0=new ee,Xs=new zr,Ji=new Kt,Rl=new ee,Qa=new ee,oS=new ee,lS=new zr,t0=new ee(1,0,0),n0=new ee(0,1,0),i0=new ee(0,0,1),r0={type:"added"},cS={type:"removed"},qs={type:"childadded",child:null},hd={type:"childremoved",child:null};class cn extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new ee,t=new Br,r=new zr,o=new ee(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Kt},normalMatrix:{value:new yt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(t0,e)}rotateY(e){return this.rotateOnAxis(n0,e)}rotateZ(e){return this.rotateOnAxis(i0,e)}translateOnAxis(e,t){return e0.copy(e).applyQuaternion(this.quaternion),this.position.add(e0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(t0,e)}translateY(e){return this.translateOnAxis(n0,e)}translateZ(e){return this.translateOnAxis(i0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Rl.copy(e):Rl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Qa,Rl,this.up):Ji.lookAt(Rl,Qa,this.up),this.quaternion.setFromRotationMatrix(Ji),o&&(Ji.extractRotation(o.matrixWorld),Xs.setFromRotationMatrix(Ji),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(r0),qs.child=e,this.dispatchEvent(qs),qs.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cS),hd.child=e,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(r0),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,oS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,lS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const M=m[p];l(e.shapes,M)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(l(e.materials,this.material[m]));o.material=h}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(l(e.animations,m))}}if(t){const h=u(e.geometries),m=u(e.materials),p=u(e.textures),_=u(e.images),M=u(e.shapes),g=u(e.skeletons),y=u(e.animations),E=u(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),M.length>0&&(r.shapes=M),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}cn.DEFAULT_UP=new ee(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ao extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uS={type:"move"};class pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const C of e.hand.values()){const S=t.getJointPose(C,r),v=this._getHandJoint(p,C);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const _=p.joints["index-finger-tip"],M=p.joints["thumb-tip"],g=_.position.distanceTo(M.position),y=.02,E=.005;p.inputState.pinching&&g>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(uS)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ao;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const _x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function md(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class At{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Nt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Nt.workingColorSpace){if(e=Ky(e,1),t=Ct(t,0,1),r=Ct(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=md(u,l,e+1/3),this.g=md(u,l,e),this.b=md(u,l,e-1/3)}return Nt.colorSpaceToWorking(this,o),this}setStyle(e,t=di){function r(l){l!==void 0&&parseFloat(l)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ht("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=di){const r=_x[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Nt.workingToColorSpace(Nn.copy(this),e),Math.round(Ct(Nn.r*255,0,255))*65536+Math.round(Ct(Nn.g*255,0,255))*256+Math.round(Ct(Nn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.workingToColorSpace(Nn.copy(this),t);const r=Nn.r,o=Nn.g,l=Nn.b,u=Math.max(r,o,l),h=Math.min(r,o,l);let m,p;const _=(h+u)/2;if(h===u)m=0,p=0;else{const M=u-h;switch(p=_<=.5?M/(u+h):M/(2-u-h),u){case r:m=(o-l)/M+(o<l?6:0);break;case o:m=(l-r)/M+2;break;case l:m=(r-o)/M+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,t=Nt.workingColorSpace){return Nt.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=di){Nt.workingToColorSpace(Nn.copy(this),e);const t=Nn.r,r=Nn.g,o=Nn.b;return e!==di?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(Nl);const r=ld(Rr.h,Nl.h,t),o=ld(Rr.s,Nl.s,t),l=ld(Rr.l,Nl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new At;At.NAMES=_x;class Zf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(e),this.density=t}clone(){return new Zf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class dS extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Br,this.environmentIntensity=1,this.environmentRotation=new Br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mi=new ee,er=new ee,xd=new ee,tr=new ee,Ys=new ee,$s=new ee,s0=new ee,gd=new ee,vd=new ee,_d=new ee,yd=new tn,Sd=new tn,Md=new tn;class wi{constructor(e=new ee,t=new ee,r=new ee){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Mi.subVectors(e,t),o.cross(Mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Mi.subVectors(o,t),er.subVectors(r,t),xd.subVectors(e,t);const u=Mi.dot(Mi),h=Mi.dot(er),m=Mi.dot(xd),p=er.dot(er),_=er.dot(xd),M=u*p-h*h;if(M===0)return l.set(0,0,0),null;const g=1/M,y=(p*m-h*_)*g,E=(u*_-h*m)*g;return l.set(1-y-E,E,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,r,o,l,u,h,m){return this.getBarycoord(e,t,r,o,tr)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,tr.x),m.addScaledVector(u,tr.y),m.addScaledVector(h,tr.z),m)}static getInterpolatedAttribute(e,t,r,o,l,u){return yd.setScalar(0),Sd.setScalar(0),Md.setScalar(0),yd.fromBufferAttribute(e,t),Sd.fromBufferAttribute(e,r),Md.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(yd,l.x),u.addScaledVector(Sd,l.y),u.addScaledVector(Md,l.z),u}static isFrontFacing(e,t,r,o){return Mi.subVectors(r,t),er.subVectors(e,t),Mi.cross(er).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),Mi.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return wi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,h;Ys.subVectors(o,r),$s.subVectors(l,r),gd.subVectors(e,r);const m=Ys.dot(gd),p=$s.dot(gd);if(m<=0&&p<=0)return t.copy(r);vd.subVectors(e,o);const _=Ys.dot(vd),M=$s.dot(vd);if(_>=0&&M<=_)return t.copy(o);const g=m*M-_*p;if(g<=0&&m>=0&&_<=0)return u=m/(m-_),t.copy(r).addScaledVector(Ys,u);_d.subVectors(e,l);const y=Ys.dot(_d),E=$s.dot(_d);if(E>=0&&y<=E)return t.copy(l);const C=y*p-m*E;if(C<=0&&p>=0&&E<=0)return h=p/(p-E),t.copy(r).addScaledVector($s,h);const S=_*E-y*M;if(S<=0&&M-_>=0&&y-E>=0)return s0.subVectors(l,o),h=(M-_)/(M-_+(y-E)),t.copy(o).addScaledVector(s0,h);const v=1/(S+C+g);return u=C*v,h=g*v,t.copy(r).addScaledVector(Ys,u).addScaledVector($s,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _o{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=l.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,bi):bi.fromBufferAttribute(l,u),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Pl.copy(r.boundingBox)),Pl.applyMatrix4(e.matrixWorld),this.union(Pl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ja),Dl.subVectors(this.max,Ja),Ks.subVectors(e.a,Ja),Zs.subVectors(e.b,Ja),Qs.subVectors(e.c,Ja),Nr.subVectors(Zs,Ks),Pr.subVectors(Qs,Zs),as.subVectors(Ks,Qs);let t=[0,-Nr.z,Nr.y,0,-Pr.z,Pr.y,0,-as.z,as.y,Nr.z,0,-Nr.x,Pr.z,0,-Pr.x,as.z,0,-as.x,-Nr.y,Nr.x,0,-Pr.y,Pr.x,0,-as.y,as.x,0];return!bd(t,Ks,Zs,Qs,Dl)||(t=[1,0,0,0,1,0,0,0,1],!bd(t,Ks,Zs,Qs,Dl))?!1:(Ll.crossVectors(Nr,Pr),t=[Ll.x,Ll.y,Ll.z],bd(t,Ks,Zs,Qs,Dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const nr=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],bi=new ee,Pl=new _o,Ks=new ee,Zs=new ee,Qs=new ee,Nr=new ee,Pr=new ee,as=new ee,Ja=new ee,Dl=new ee,Ll=new ee,os=new ee;function bd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){os.fromArray(s,l);const h=o.x*Math.abs(os.x)+o.y*Math.abs(os.y)+o.z*Math.abs(os.z),m=e.dot(os),p=t.dot(os),_=r.dot(os);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const ln=new ee,Il=new xt;let fS=0;class Vi extends Vr{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Wm,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Il.fromBufferAttribute(this,t),Il.applyMatrix3(e),this.setXY(t,Il.x,Il.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Za(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Wn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Za(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Za(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Za(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Za(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array),o=Wn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array),o=Wn(o,this.array),l=Wn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class yx extends Vi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Sx extends Vi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class rn extends Vi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const hS=new _o,eo=new ee,wd=new ee;class gc{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):hS.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const t=eo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(eo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(wd)),this.expandByPoint(eo.copy(e.center).sub(wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pS=0;const ui=new Kt,Ed=new cn,Js=new ee,ei=new _o,to=new _o,_n=new ee;class Yn extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xy(e)?Sx:yx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new yt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,r){return ui.makeTranslation(e,t,r),this.applyMatrix4(ui),this}scale(e,t,r){return ui.makeScale(e,t,r),this.applyMatrix4(ui),this}lookAt(e){return Ed.lookAt(e),Ed.updateMatrix(),this.applyMatrix4(Ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new rn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ei.setFromBufferAttribute(l),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const h=t[l];to.setFromBufferAttribute(h),this.morphTargetsRelative?(_n.addVectors(ei.min,to.min),ei.expandByPoint(_n),_n.addVectors(ei.max,to.max),ei.expandByPoint(_n)):(ei.expandByPoint(to.min),ei.expandByPoint(to.max))}ei.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)_n.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(_n));if(t)for(let l=0,u=t.length;l<u;l++){const h=t[l],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)_n.fromBufferAttribute(h,p),m&&(Js.fromBufferAttribute(e,p),_n.add(Js)),o=Math.max(o,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Vi(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let T=0;T<r.count;T++)h[T]=new ee,m[T]=new ee;const p=new ee,_=new ee,M=new ee,g=new xt,y=new xt,E=new xt,C=new ee,S=new ee;function v(T,P,H){p.fromBufferAttribute(r,T),_.fromBufferAttribute(r,P),M.fromBufferAttribute(r,H),g.fromBufferAttribute(l,T),y.fromBufferAttribute(l,P),E.fromBufferAttribute(l,H),_.sub(p),M.sub(p),y.sub(g),E.sub(g);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(C.copy(_).multiplyScalar(E.y).addScaledVector(M,-y.y).multiplyScalar(V),S.copy(M).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(V),h[T].add(C),h[P].add(C),h[H].add(C),m[T].add(S),m[P].add(S),m[H].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let T=0,P=O.length;T<P;++T){const H=O[T],V=H.start,G=H.count;for(let te=V,me=V+G;te<me;te+=3)v(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const k=new ee,N=new ee,U=new ee,I=new ee;function B(T){U.fromBufferAttribute(o,T),I.copy(U);const P=h[T];k.copy(P),k.sub(U.multiplyScalar(U.dot(P))).normalize(),N.crossVectors(I,P);const V=N.dot(m[T])<0?-1:1;u.setXYZW(T,k.x,k.y,k.z,V)}for(let T=0,P=O.length;T<P;++T){const H=O[T],V=H.start,G=H.count;for(let te=V,me=V+G;te<me;te+=3)B(e.getX(te+0)),B(e.getX(te+1)),B(e.getX(te+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Vi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const o=new ee,l=new ee,u=new ee,h=new ee,m=new ee,p=new ee,_=new ee,M=new ee;if(e)for(let g=0,y=e.count;g<y;g+=3){const E=e.getX(g+0),C=e.getX(g+1),S=e.getX(g+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,S),_.subVectors(u,l),M.subVectors(o,l),_.cross(M),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),h.add(_),m.add(_),p.add(_),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let g=0,y=t.count;g<y;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),_.subVectors(u,l),M.subVectors(o,l),_.cross(M),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,M=h.normalized,g=new p.constructor(m.length*_);let y=0,E=0;for(let C=0,S=m.length;C<S;C++){h.isInterleavedBufferAttribute?y=m[C]*h.data.stride+h.offset:y=m[C]*_;for(let v=0;v<_;v++)g[E++]=p[y++]}return new Vi(g,_,M)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yn,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=e(m,r);t.setAttribute(h,p)}const l=this.morphAttributes;for(const h in l){const m=[],p=l[h];for(let _=0,M=p.length;_<M;_++){const g=p[_],y=e(g,r);m.push(y)}t.morphAttributes[h]=m}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let M=0,g=p.length;M<g;M++){const y=p[M];_.push(y.toJSON(e.data))}_.length>0&&(o[m]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],M=l[p];for(let g=0,y=M.length;g<y;g++)_.push(M[g].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const M=u[p];this.addGroup(M.start,M.count,M.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let mS=0;class ha extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=sa,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gd,this.blendDst=jd,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ht(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ht(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==sa&&(r.blending=this.blending),this.side!==Or&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Gd&&(r.blendSrc=this.blendSrc),this.blendDst!==jd&&(r.blendDst=this.blendDst),this.blendEquation!==ds&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ca&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const h in l){const m=l[h];delete m.metadata,u.push(m)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new At().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new xt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ir=new ee,Td=new ee,Ul=new ee,Dr=new ee,Ad=new ee,kl=new ee,Cd=new ee;class vc{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Td.copy(e).add(t).multiplyScalar(.5),Ul.copy(t).sub(e).normalize(),Dr.copy(this.origin).sub(Td);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Ul),h=Dr.dot(this.direction),m=-Dr.dot(Ul),p=Dr.lengthSq(),_=Math.abs(1-u*u);let M,g,y,E;if(_>0)if(M=u*m-h,g=u*h-m,E=l*_,M>=0)if(g>=-E)if(g<=E){const C=1/_;M*=C,g*=C,y=M*(M+u*g+2*h)+g*(u*M+g+2*m)+p}else g=l,M=Math.max(0,-(u*g+h)),y=-M*M+g*(g+2*m)+p;else g=-l,M=Math.max(0,-(u*g+h)),y=-M*M+g*(g+2*m)+p;else g<=-E?(M=Math.max(0,-(-u*l+h)),g=M>0?-l:Math.min(Math.max(-l,-m),l),y=-M*M+g*(g+2*m)+p):g<=E?(M=0,g=Math.min(Math.max(-l,-m),l),y=g*(g+2*m)+p):(M=Math.max(0,-(u*l+h)),g=M>0?l:Math.min(Math.max(-l,-m),l),y=-M*M+g*(g+2*m)+p);else g=u>0?-l:l,M=Math.max(0,-(u*g+h)),y=-M*M+g*(g+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,M),o&&o.copy(Td).addScaledVector(Ul,g),y}intersectSphere(e,t){ir.subVectors(e.center,this.origin);const r=ir.dot(this.direction),o=ir.dot(ir)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),h=r-u,m=r+u;return m<0?null:h<0?this.at(m,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,h,m;const p=1/this.direction.x,_=1/this.direction.y,M=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),_>=0?(l=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(l=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),M>=0?(h=(e.min.z-g.z)*M,m=(e.max.z-g.z)*M):(h=(e.max.z-g.z)*M,m=(e.min.z-g.z)*M),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,r,o,l){Ad.subVectors(t,e),kl.subVectors(r,e),Cd.crossVectors(Ad,kl);let u=this.direction.dot(Cd),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Dr.subVectors(this.origin,e);const m=h*this.direction.dot(kl.crossVectors(Dr,kl));if(m<0)return null;const p=h*this.direction.dot(Ad.cross(Dr));if(p<0||m+p>u)return null;const _=-h*Dr.dot(Cd);return _<0?null:this.at(_/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lo extends ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.combine=nx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const a0=new Kt,ls=new vc,Fl=new gc,o0=new ee,Ol=new ee,zl=new ee,Bl=new ee,Rd=new ee,Vl=new ee,l0=new ee,Hl=new ee;class hn extends cn{constructor(e=new Yn,t=new lo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(l&&h){Vl.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const _=h[m],M=l[m];_!==0&&(Rd.fromBufferAttribute(M,e),u?Vl.addScaledVector(Rd,_):Vl.addScaledVector(Rd.sub(t),_))}t.add(Vl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Fl.copy(r.boundingSphere),Fl.applyMatrix4(l),ls.copy(e.ray).recast(e.near),!(Fl.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Fl,o0)===null||ls.origin.distanceToSquared(o0)>(e.far-e.near)**2))&&(a0.copy(l).invert(),ls.copy(e.ray).applyMatrix4(a0),!(r.boundingBox!==null&&ls.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,h=l.index,m=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,M=l.attributes.normal,g=l.groups,y=l.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,C=g.length;E<C;E++){const S=g[E],v=u[S.materialIndex],O=Math.max(S.start,y.start),k=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let N=O,U=k;N<U;N+=3){const I=h.getX(N),B=h.getX(N+1),T=h.getX(N+2);o=Gl(this,v,e,r,p,_,M,I,B,T),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),C=Math.min(h.count,y.start+y.count);for(let S=E,v=C;S<v;S+=3){const O=h.getX(S),k=h.getX(S+1),N=h.getX(S+2);o=Gl(this,u,e,r,p,_,M,O,k,N),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,C=g.length;E<C;E++){const S=g[E],v=u[S.materialIndex],O=Math.max(S.start,y.start),k=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let N=O,U=k;N<U;N+=3){const I=N,B=N+1,T=N+2;o=Gl(this,v,e,r,p,_,M,I,B,T),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let S=E,v=C;S<v;S+=3){const O=S,k=S+1,N=S+2;o=Gl(this,u,e,r,p,_,M,O,k,N),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function xS(s,e,t,r,o,l,u,h){let m;if(e.side===qn?m=r.intersectTriangle(u,l,o,!0,h):m=r.intersectTriangle(o,l,u,e.side===Or,h),m===null)return null;Hl.copy(h),Hl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Hl);return p<t.near||p>t.far?null:{distance:p,point:Hl.clone(),object:s}}function Gl(s,e,t,r,o,l,u,h,m,p){s.getVertexPosition(h,Ol),s.getVertexPosition(m,zl),s.getVertexPosition(p,Bl);const _=xS(s,e,t,r,Ol,zl,Bl,l0);if(_){const M=new ee;wi.getBarycoord(l0,Ol,zl,Bl,M),o&&(_.uv=wi.getInterpolatedAttribute(o,h,m,p,M,new xt)),l&&(_.uv1=wi.getInterpolatedAttribute(l,h,m,p,M,new xt)),u&&(_.normal=wi.getInterpolatedAttribute(u,h,m,p,M,new ee),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new ee,materialIndex:0};wi.getNormal(Ol,zl,Bl,g.normal),_.face=g,_.barycoord=M}return _}class gS extends Dn{constructor(e=null,t=1,r=1,o,l,u,h,m,p=bn,_=bn,M,g){super(null,u,h,m,p,_,o,l,M,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nd=new ee,vS=new ee,_S=new yt;class Ir{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Nd.subVectors(r,t).cross(vS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Nd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||_S.getNormalMatrix(e),o=this.coplanarPoint(Nd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new gc,yS=new xt(.5,.5),jl=new ee;class Qf{constructor(e=new Ir,t=new Ir,r=new Ir,o=new Ir,l=new Ir,u=new Ir){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(o),h[4].copy(l),h[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Oi,r=!1){const o=this.planes,l=e.elements,u=l[0],h=l[1],m=l[2],p=l[3],_=l[4],M=l[5],g=l[6],y=l[7],E=l[8],C=l[9],S=l[10],v=l[11],O=l[12],k=l[13],N=l[14],U=l[15];if(o[0].setComponents(p-u,y-_,v-E,U-O).normalize(),o[1].setComponents(p+u,y+_,v+E,U+O).normalize(),o[2].setComponents(p+h,y+M,v+C,U+k).normalize(),o[3].setComponents(p-h,y-M,v-C,U-k).normalize(),r)o[4].setComponents(m,g,S,N).normalize(),o[5].setComponents(p-m,y-g,v-S,U-N).normalize();else if(o[4].setComponents(p-m,y-g,v-S,U-N).normalize(),t===Oi)o[5].setComponents(p+m,y+g,v+S,U+N).normalize();else if(t===po)o[5].setComponents(m,g,S,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);const t=yS.distanceTo(e.center);return cs.radius=.7071067811865476+t,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(jl.x=o.normal.x>0?e.max.x:e.min.x,jl.y=o.normal.y>0?e.max.y:e.min.y,jl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mx extends ha{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dc=new ee,fc=new ee,c0=new Kt,no=new vc,Wl=new gc,Pd=new ee,u0=new ee;class SS extends cn{constructor(e=new Yn,t=new Mx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)dc.fromBufferAttribute(t,o-1),fc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=dc.distanceTo(fc);e.setAttribute("lineDistance",new rn(r,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Wl.copy(r.boundingSphere),Wl.applyMatrix4(o),Wl.radius+=l,e.ray.intersectsSphere(Wl)===!1)return;c0.copy(o).invert(),no.copy(e.ray).applyMatrix4(c0);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=r.index,g=r.attributes.position;if(_!==null){const y=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let C=y,S=E-1;C<S;C+=p){const v=_.getX(C),O=_.getX(C+1),k=Xl(this,e,no,m,v,O,C);k&&t.push(k)}if(this.isLineLoop){const C=_.getX(E-1),S=_.getX(y),v=Xl(this,e,no,m,C,S,E-1);v&&t.push(v)}}else{const y=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let C=y,S=E-1;C<S;C+=p){const v=Xl(this,e,no,m,C,C+1,C);v&&t.push(v)}if(this.isLineLoop){const C=Xl(this,e,no,m,E-1,y,E-1);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function Xl(s,e,t,r,o,l,u){const h=s.geometry.attributes.position;if(dc.fromBufferAttribute(h,o),fc.fromBufferAttribute(h,l),t.distanceSqToSegment(dc,fc,Pd,u0)>r)return;Pd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Pd);if(!(p<e.near||p>e.far))return{distance:p,point:u0.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const d0=new ee,f0=new ee;class MS extends SS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)d0.fromBufferAttribute(t,o),f0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+d0.distanceTo(f0);e.setAttribute("lineDistance",new rn(r,1))}else ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bx extends Dn{constructor(e=[],t=ms,r,o,l,u,h,m,p,_){super(e,t,r,o,l,u,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bS extends Dn{constructor(e,t,r,o,l,u,h,m,p){super(e,t,r,o,l,u,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class da extends Dn{constructor(e,t,r=Hi,o,l,u,h=bn,m=bn,p,_=lr,M=1){if(_!==lr&&_!==ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:M};super(g,o,l,u,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $f(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wS extends da{constructor(e,t=Hi,r=ms,o,l,u=bn,h=bn,m,p=lr){const _={width:e,height:e,depth:1},M=[_,_,_,_,_,_];super(e,e,t,r,o,l,u,h,m,p),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wx extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ki extends Yn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const h=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const m=[],p=[],_=[],M=[];let g=0,y=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(m),this.setAttribute("position",new rn(p,3)),this.setAttribute("normal",new rn(_,3)),this.setAttribute("uv",new rn(M,2));function E(C,S,v,O,k,N,U,I,B,T,P){const H=N/B,V=U/T,G=N/2,te=U/2,me=I/2,Z=B+1,se=T+1;let Q=0,Y=0;const ae=new ee;for(let L=0;L<se;L++){const w=L*V-te;for(let F=0;F<Z;F++){const xe=F*H-G;ae[C]=xe*O,ae[S]=w*k,ae[v]=me,p.push(ae.x,ae.y,ae.z),ae[C]=0,ae[S]=0,ae[v]=I>0?1:-1,_.push(ae.x,ae.y,ae.z),M.push(F/B),M.push(1-L/T),Q+=1}}for(let L=0;L<T;L++)for(let w=0;w<B;w++){const F=g+w+Z*L,xe=g+w+Z*(L+1),_e=g+(w+1)+Z*(L+1),Se=g+(w+1)+Z*L;m.push(F,xe,Se),m.push(xe,_e,Se),Y+=6}h.addGroup(y,Y,P),y+=Y,g+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hc extends Yn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:h,thetaLength:m};const p=this;o=Math.floor(o),l=Math.floor(l);const _=[],M=[],g=[],y=[];let E=0;const C=[],S=r/2;let v=0;O(),u===!1&&(e>0&&k(!0),t>0&&k(!1)),this.setIndex(_),this.setAttribute("position",new rn(M,3)),this.setAttribute("normal",new rn(g,3)),this.setAttribute("uv",new rn(y,2));function O(){const N=new ee,U=new ee;let I=0;const B=(t-e)/r;for(let T=0;T<=l;T++){const P=[],H=T/l,V=H*(t-e)+e;for(let G=0;G<=o;G++){const te=G/o,me=te*m+h,Z=Math.sin(me),se=Math.cos(me);U.x=V*Z,U.y=-H*r+S,U.z=V*se,M.push(U.x,U.y,U.z),N.set(Z,B,se).normalize(),g.push(N.x,N.y,N.z),y.push(te,1-H),P.push(E++)}C.push(P)}for(let T=0;T<o;T++)for(let P=0;P<l;P++){const H=C[P][T],V=C[P+1][T],G=C[P+1][T+1],te=C[P][T+1];(e>0||P!==0)&&(_.push(H,V,te),I+=3),(t>0||P!==l-1)&&(_.push(V,G,te),I+=3)}p.addGroup(v,I,0),v+=I}function k(N){const U=E,I=new xt,B=new ee;let T=0;const P=N===!0?e:t,H=N===!0?1:-1;for(let G=1;G<=o;G++)M.push(0,S*H,0),g.push(0,H,0),y.push(.5,.5),E++;const V=E;for(let G=0;G<=o;G++){const me=G/o*m+h,Z=Math.cos(me),se=Math.sin(me);B.x=P*se,B.y=S*H,B.z=P*Z,M.push(B.x,B.y,B.z),g.push(0,H,0),I.x=Z*.5+.5,I.y=se*.5*H+.5,y.push(I.x,I.y),E++}for(let G=0;G<o;G++){const te=U+G,me=V+G;N===!0?_.push(me,me+1,te):_.push(me+1,me,te),T+=3}p.addGroup(v,T,N===!0?1:2),v+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yo extends Yn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,h=Math.floor(r),m=Math.floor(o),p=h+1,_=m+1,M=e/h,g=t/m,y=[],E=[],C=[],S=[];for(let v=0;v<_;v++){const O=v*g-u;for(let k=0;k<p;k++){const N=k*M-l;E.push(N,-O,0),C.push(0,0,1),S.push(k/h),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let O=0;O<h;O++){const k=O+p*v,N=O+p*(v+1),U=O+1+p*(v+1),I=O+1+p*v;y.push(k,N,I),y.push(N,U,I)}this.setIndex(y),this.setAttribute("position",new rn(E,3)),this.setAttribute("normal",new rn(C,3)),this.setAttribute("uv",new rn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jf extends Yn{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const h=[],m=[],p=[],_=[];let M=e;const g=(t-e)/o,y=new ee,E=new xt;for(let C=0;C<=o;C++){for(let S=0;S<=r;S++){const v=l+S/r*u;y.x=M*Math.cos(v),y.y=M*Math.sin(v),m.push(y.x,y.y,y.z),p.push(0,0,1),E.x=(y.x/t+1)/2,E.y=(y.y/t+1)/2,_.push(E.x,E.y)}M+=g}for(let C=0;C<o;C++){const S=C*(r+1);for(let v=0;v<r;v++){const O=v+S,k=O,N=O+r+1,U=O+r+2,I=O+1;h.push(k,N,I),h.push(N,U,I)}}this.setIndex(h),this.setAttribute("position",new rn(m,3)),this.setAttribute("normal",new rn(p,3)),this.setAttribute("uv",new rn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class eh extends Yn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:h},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const m=Math.min(u+h,Math.PI);let p=0;const _=[],M=new ee,g=new ee,y=[],E=[],C=[],S=[];for(let v=0;v<=r;v++){const O=[],k=v/r,N=u+k*h,U=e*Math.cos(N),I=Math.sqrt(e*e-U*U);let B=0;v===0&&u===0?B=.5/t:v===r&&m===Math.PI&&(B=-.5/t);for(let T=0;T<=t;T++){const P=T/t,H=o+P*l;M.x=-I*Math.cos(H),M.y=U,M.z=I*Math.sin(H),E.push(M.x,M.y,M.z),g.copy(M).normalize(),C.push(g.x,g.y,g.z),S.push(P+B,1-k),O.push(p++)}_.push(O)}for(let v=0;v<r;v++)for(let O=0;O<t;O++){const k=_[v][O+1],N=_[v][O],U=_[v+1][O],I=_[v+1][O+1];(v!==0||u>0)&&y.push(k,N,I),(v!==r-1||m<Math.PI)&&y.push(N,U,I)}this.setIndex(y),this.setAttribute("position",new rn(E,3)),this.setAttribute("normal",new rn(C,3)),this.setAttribute("uv",new rn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function fa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(h0(o))o.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(h0(o[0])){const l=[];for(let u=0,h=o.length;u<h;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function kn(s){const e={};for(let t=0;t<s.length;t++){const r=fa(s[t]);for(const o in r)e[o]=r[o]}return e}function h0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function ES(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ex(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const TS={clone:fa,merge:kn};var AS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AS,this.fragmentShader=CS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fa(e.uniforms),this.uniformsGroups=ES(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new At().setHex(o.value);break;case"v2":this.uniforms[r].value=new xt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ee().fromArray(o.value);break;case"v4":this.uniforms[r].value=new tn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new yt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Kt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class RS extends Gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class us extends ha{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nf,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class NS extends ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PS extends ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class th extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Dd=new Kt,p0=new ee,m0=new ee;class Tx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qf,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;p0.setFromMatrixPosition(e.matrixWorld),t.position.copy(p0),m0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(m0),t.updateMatrixWorld(),Dd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===po||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ql=new ee,Yl=new zr,Di=new ee;class Ax extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ql,Yl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,Yl,Di.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(ql,Yl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,Yl,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Lr=new ee,x0=new xt,g0=new xt;class ti extends Ax{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=uc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ic*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uc*2*Math.atan(Math.tan(ic*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,t){return this.getViewBounds(e,x0,g0),t.subVectors(g0,x0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ic*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/m,t-=u.offsetY*r/p,o*=u.width/m,r*=u.height/p}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class DS extends Tx{constructor(){super(new ti(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=uc*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class LS extends th{constructor(e,t,r=0,o=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.distance=r,this.angle=o,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new DS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class nh extends Ax{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,h=o+t,m=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class IS extends Tx{constructor(){super(new nh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class US extends th{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new IS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class kS extends th{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ea=-90,ta=1;class FS extends cn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ti(ea,ta,e,t);o.layers=this.layers,this.add(o);const l=new ti(ea,ta,e,t);l.layers=this.layers,this.add(l);const u=new ti(ea,ta,e,t);u.layers=this.layers,this.add(u);const h=new ti(ea,ta,e,t);h.layers=this.layers,this.add(h);const m=new ti(ea,ta,e,t);m.layers=this.layers,this.add(m);const p=new ti(ea,ta,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,h,m]=t;for(const p of t)this.remove(p);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===po)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,m,p,_]=this.children,M=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(M,g,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class OS extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const v0=new Kt;class zS{constructor(e,t,r=0,o=1/0){this.ray=new vc(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Kf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Dt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return v0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(v0),this}intersectObject(e,t=!0,r=[]){return Pf(e,this,r,t),r.sort(_0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Pf(e[o],this,r,t);return r.sort(_0),r}}function _0(s,e){return s.distance-e.distance}function Pf(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,h=l.length;u<h;u++)Pf(l[u],e,t,!0)}}class y0{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ch=class ch{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};ch.prototype.isMatrix2=!0;let S0=ch;class BS extends MS{constructor(e=10,t=10,r=4473924,o=8947848){r=new At(r),o=new At(o);const l=t/2,u=e/t,h=e/2,m=[],p=[];for(let g=0,y=0,E=-h;g<=t;g++,E+=u){m.push(-h,0,E,h,0,E),m.push(E,0,-h,E,0,h);const C=g===l?r:o;C.toArray(p,y),y+=3,C.toArray(p,y),y+=3,C.toArray(p,y),y+=3,C.toArray(p,y),y+=3}const _=new Yn;_.setAttribute("position",new rn(m,3)),_.setAttribute("color",new rn(p,3));const M=new Mx({vertexColors:!0,toneMapped:!1});super(_,M),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class VS extends Vr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ht("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function M0(s,e,t,r){const o=HS(r);switch(t){case px:return s*e;case xx:return s*e/o.components*o.byteLength;case jf:return s*e/o.components*o.byteLength;case xs:return s*e*2/o.components*o.byteLength;case Wf:return s*e*2/o.components*o.byteLength;case mx:return s*e*3/o.components*o.byteLength;case Ei:return s*e*4/o.components*o.byteLength;case Xf:return s*e*4/o.components*o.byteLength;case Jl:case ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case tc:case nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ef:case nf:return Math.max(s,16)*Math.max(e,8)/4;case Jd:case tf:return Math.max(s,8)*Math.max(e,8)/2;case rf:case sf:case of:case lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case af:case sc:case cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case df:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ff:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case hf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case pf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case mf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case gf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case vf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case _f:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case yf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Sf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Mf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case bf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wf:case Ef:case Tf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Af:case Cf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ac:case Rf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function HS(s){switch(s){case ni:case ux:return{byteLength:1,components:1};case fo:case dx:case or:return{byteLength:2,components:1};case Hf:case Gf:return{byteLength:2,components:4};case Hi:case Vf:case Fi:return{byteLength:4,components:1};case fx:case hx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zf}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cx(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function GS(s){const e=new WeakMap;function t(h,m){const p=h.array,_=h.usage,M=p.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,p,_),h.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:M}}function r(h,m,p){const _=m.array,M=m.updateRanges;if(s.bindBuffer(p,h),M.length===0)s.bufferSubData(p,0,_);else{M.sort((y,E)=>y.start-E.start);let g=0;for(let y=1;y<M.length;y++){const E=M[g],C=M[y];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++g,M[g]=C)}M.length=g+1;for(let y=0,E=M.length;y<E;y++){const C=M[y];s.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,t(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:o,remove:l,update:u}}var jS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$S=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,JS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,i1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,r1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,u1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,d1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,f1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,h1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,p1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,m1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,x1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",S1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,w1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,A1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,D1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,k1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,F1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,H1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,G1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,j1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,W1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_M=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,RM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,GM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ib=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ob=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,db=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_b=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mt={alphahash_fragment:jS,alphahash_pars_fragment:WS,alphamap_fragment:XS,alphamap_pars_fragment:qS,alphatest_fragment:YS,alphatest_pars_fragment:$S,aomap_fragment:KS,aomap_pars_fragment:ZS,batching_pars_vertex:QS,batching_vertex:JS,begin_vertex:e1,beginnormal_vertex:t1,bsdfs:n1,iridescence_fragment:i1,bumpmap_pars_fragment:r1,clipping_planes_fragment:s1,clipping_planes_pars_fragment:a1,clipping_planes_pars_vertex:o1,clipping_planes_vertex:l1,color_fragment:c1,color_pars_fragment:u1,color_pars_vertex:d1,color_vertex:f1,common:h1,cube_uv_reflection_fragment:p1,defaultnormal_vertex:m1,displacementmap_pars_vertex:x1,displacementmap_vertex:g1,emissivemap_fragment:v1,emissivemap_pars_fragment:_1,colorspace_fragment:y1,colorspace_pars_fragment:S1,envmap_fragment:M1,envmap_common_pars_fragment:b1,envmap_pars_fragment:w1,envmap_pars_vertex:E1,envmap_physical_pars_fragment:k1,envmap_vertex:T1,fog_vertex:A1,fog_pars_vertex:C1,fog_fragment:R1,fog_pars_fragment:N1,gradientmap_pars_fragment:P1,lightmap_pars_fragment:D1,lights_lambert_fragment:L1,lights_lambert_pars_fragment:I1,lights_pars_begin:U1,lights_toon_fragment:F1,lights_toon_pars_fragment:O1,lights_phong_fragment:z1,lights_phong_pars_fragment:B1,lights_physical_fragment:V1,lights_physical_pars_fragment:H1,lights_fragment_begin:G1,lights_fragment_maps:j1,lights_fragment_end:W1,lightprobes_pars_fragment:X1,logdepthbuf_fragment:q1,logdepthbuf_pars_fragment:Y1,logdepthbuf_pars_vertex:$1,logdepthbuf_vertex:K1,map_fragment:Z1,map_pars_fragment:Q1,map_particle_fragment:J1,map_particle_pars_fragment:eM,metalnessmap_fragment:tM,metalnessmap_pars_fragment:nM,morphinstance_vertex:iM,morphcolor_vertex:rM,morphnormal_vertex:sM,morphtarget_pars_vertex:aM,morphtarget_vertex:oM,normal_fragment_begin:lM,normal_fragment_maps:cM,normal_pars_fragment:uM,normal_pars_vertex:dM,normal_vertex:fM,normalmap_pars_fragment:hM,clearcoat_normal_fragment_begin:pM,clearcoat_normal_fragment_maps:mM,clearcoat_pars_fragment:xM,iridescence_pars_fragment:gM,opaque_fragment:vM,packing:_M,premultiplied_alpha_fragment:yM,project_vertex:SM,dithering_fragment:MM,dithering_pars_fragment:bM,roughnessmap_fragment:wM,roughnessmap_pars_fragment:EM,shadowmap_pars_fragment:TM,shadowmap_pars_vertex:AM,shadowmap_vertex:CM,shadowmask_pars_fragment:RM,skinbase_vertex:NM,skinning_pars_vertex:PM,skinning_vertex:DM,skinnormal_vertex:LM,specularmap_fragment:IM,specularmap_pars_fragment:UM,tonemapping_fragment:kM,tonemapping_pars_fragment:FM,transmission_fragment:OM,transmission_pars_fragment:zM,uv_pars_fragment:BM,uv_pars_vertex:VM,uv_vertex:HM,worldpos_vertex:GM,background_vert:jM,background_frag:WM,backgroundCube_vert:XM,backgroundCube_frag:qM,cube_vert:YM,cube_frag:$M,depth_vert:KM,depth_frag:ZM,distance_vert:QM,distance_frag:JM,equirect_vert:eb,equirect_frag:tb,linedashed_vert:nb,linedashed_frag:ib,meshbasic_vert:rb,meshbasic_frag:sb,meshlambert_vert:ab,meshlambert_frag:ob,meshmatcap_vert:lb,meshmatcap_frag:cb,meshnormal_vert:ub,meshnormal_frag:db,meshphong_vert:fb,meshphong_frag:hb,meshphysical_vert:pb,meshphysical_frag:mb,meshtoon_vert:xb,meshtoon_frag:gb,points_vert:vb,points_frag:_b,shadow_vert:yb,shadow_frag:Sb,sprite_vert:Mb,sprite_frag:bb},Ve={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},Ii={basic:{uniforms:kn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:kn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:kn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:kn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:kn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new At(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:kn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:kn([Ve.points,Ve.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:kn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:kn([Ve.common,Ve.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:kn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:kn([Ve.sprite,Ve.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:kn([Ve.common,Ve.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:kn([Ve.lights,Ve.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Ii.physical={uniforms:kn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const $l={r:0,b:0,g:0},wb=new Kt,Rx=new yt;Rx.set(-1,0,0,0,1,0,0,0,1);function Eb(s,e,t,r,o,l){const u=new At(0);let h=o===!0?0:1,m,p,_=null,M=0,g=null;function y(O){let k=O.isScene===!0?O.background:null;if(k&&k.isTexture){const N=O.backgroundBlurriness>0;k=e.get(k,N)}return k}function E(O){let k=!1;const N=y(O);N===null?S(u,h):N&&N.isColor&&(S(N,1),k=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||k)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(O,k){const N=y(k);N&&(N.isCubeTexture||N.mapping===xc)?(p===void 0&&(p=new hn(new ki(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:fa(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=N,p.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(wb.makeRotationFromEuler(k.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Rx),p.material.toneMapped=Nt.getTransfer(N.colorSpace)!==Bt,(_!==N||M!==N.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,_=N,M=N.version,g=s.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new hn(new yo(2,2),new Gi({name:"BackgroundMaterial",uniforms:fa(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,m.material.toneMapped=Nt.getTransfer(N.colorSpace)!==Bt,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||M!==N.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,_=N,M=N.version,g=s.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function S(O,k){O.getRGB($l,Ex(s)),t.buffers.color.setClear($l.r,$l.g,$l.b,k,l)}function v(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(O,k=1){u.set(O),h=k,S(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(O){h=O,S(u,h)},render:E,addToRenderList:C,dispose:v}}function Tb(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function h(V,G,te,me,Z){let se=!1;const Q=M(V,me,te,G);l!==Q&&(l=Q,p(l.object)),se=y(V,me,te,Z),se&&E(V,me,te,Z),Z!==null&&e.update(Z,s.ELEMENT_ARRAY_BUFFER),(se||u)&&(u=!1,N(V,G,te,me),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function m(){return s.createVertexArray()}function p(V){return s.bindVertexArray(V)}function _(V){return s.deleteVertexArray(V)}function M(V,G,te,me){const Z=me.wireframe===!0;let se=r[G.id];se===void 0&&(se={},r[G.id]=se);const Q=V.isInstancedMesh===!0?V.id:0;let Y=se[Q];Y===void 0&&(Y={},se[Q]=Y);let ae=Y[te.id];ae===void 0&&(ae={},Y[te.id]=ae);let L=ae[Z];return L===void 0&&(L=g(m()),ae[Z]=L),L}function g(V){const G=[],te=[],me=[];for(let Z=0;Z<t;Z++)G[Z]=0,te[Z]=0,me[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:te,attributeDivisors:me,object:V,attributes:{},index:null}}function y(V,G,te,me){const Z=l.attributes,se=G.attributes;let Q=0;const Y=te.getAttributes();for(const ae in Y)if(Y[ae].location>=0){const w=Z[ae];let F=se[ae];if(F===void 0&&(ae==="instanceMatrix"&&V.instanceMatrix&&(F=V.instanceMatrix),ae==="instanceColor"&&V.instanceColor&&(F=V.instanceColor)),w===void 0||w.attribute!==F||F&&w.data!==F.data)return!0;Q++}return l.attributesNum!==Q||l.index!==me}function E(V,G,te,me){const Z={},se=G.attributes;let Q=0;const Y=te.getAttributes();for(const ae in Y)if(Y[ae].location>=0){let w=se[ae];w===void 0&&(ae==="instanceMatrix"&&V.instanceMatrix&&(w=V.instanceMatrix),ae==="instanceColor"&&V.instanceColor&&(w=V.instanceColor));const F={};F.attribute=w,w&&w.data&&(F.data=w.data),Z[ae]=F,Q++}l.attributes=Z,l.attributesNum=Q,l.index=me}function C(){const V=l.newAttributes;for(let G=0,te=V.length;G<te;G++)V[G]=0}function S(V){v(V,0)}function v(V,G){const te=l.newAttributes,me=l.enabledAttributes,Z=l.attributeDivisors;te[V]=1,me[V]===0&&(s.enableVertexAttribArray(V),me[V]=1),Z[V]!==G&&(s.vertexAttribDivisor(V,G),Z[V]=G)}function O(){const V=l.newAttributes,G=l.enabledAttributes;for(let te=0,me=G.length;te<me;te++)G[te]!==V[te]&&(s.disableVertexAttribArray(te),G[te]=0)}function k(V,G,te,me,Z,se,Q){Q===!0?s.vertexAttribIPointer(V,G,te,Z,se):s.vertexAttribPointer(V,G,te,me,Z,se)}function N(V,G,te,me){C();const Z=me.attributes,se=te.getAttributes(),Q=G.defaultAttributeValues;for(const Y in se){const ae=se[Y];if(ae.location>=0){let L=Z[Y];if(L===void 0&&(Y==="instanceMatrix"&&V.instanceMatrix&&(L=V.instanceMatrix),Y==="instanceColor"&&V.instanceColor&&(L=V.instanceColor)),L!==void 0){const w=L.normalized,F=L.itemSize,xe=e.get(L);if(xe===void 0)continue;const _e=xe.buffer,Se=xe.type,X=xe.bytesPerElement,ne=Se===s.INT||Se===s.UNSIGNED_INT||L.gpuType===Vf;if(L.isInterleavedBufferAttribute){const re=L.data,ye=re.stride,Pe=L.offset;if(re.isInstancedInterleavedBuffer){for(let Re=0;Re<ae.locationSize;Re++)v(ae.location+Re,re.meshPerAttribute);V.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Re=0;Re<ae.locationSize;Re++)S(ae.location+Re);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Re=0;Re<ae.locationSize;Re++)k(ae.location+Re,F/ae.locationSize,Se,w,ye*X,(Pe+F/ae.locationSize*Re)*X,ne)}else{if(L.isInstancedBufferAttribute){for(let re=0;re<ae.locationSize;re++)v(ae.location+re,L.meshPerAttribute);V.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let re=0;re<ae.locationSize;re++)S(ae.location+re);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let re=0;re<ae.locationSize;re++)k(ae.location+re,F/ae.locationSize,Se,w,F*X,F/ae.locationSize*re*X,ne)}}else if(Q!==void 0){const w=Q[Y];if(w!==void 0)switch(w.length){case 2:s.vertexAttrib2fv(ae.location,w);break;case 3:s.vertexAttrib3fv(ae.location,w);break;case 4:s.vertexAttrib4fv(ae.location,w);break;default:s.vertexAttrib1fv(ae.location,w)}}}}O()}function U(){P();for(const V in r){const G=r[V];for(const te in G){const me=G[te];for(const Z in me){const se=me[Z];for(const Q in se)_(se[Q].object),delete se[Q];delete me[Z]}}delete r[V]}}function I(V){if(r[V.id]===void 0)return;const G=r[V.id];for(const te in G){const me=G[te];for(const Z in me){const se=me[Z];for(const Q in se)_(se[Q].object),delete se[Q];delete me[Z]}}delete r[V.id]}function B(V){for(const G in r){const te=r[G];for(const me in te){const Z=te[me];if(Z[V.id]===void 0)continue;const se=Z[V.id];for(const Q in se)_(se[Q].object),delete se[Q];delete Z[V.id]}}}function T(V){for(const G in r){const te=r[G],me=V.isInstancedMesh===!0?V.id:0,Z=te[me];if(Z!==void 0){for(const se in Z){const Q=Z[se];for(const Y in Q)_(Q[Y].object),delete Q[Y];delete Z[se]}delete te[me],Object.keys(te).length===0&&delete r[G]}}}function P(){H(),u=!0,l!==o&&(l=o,p(l.object))}function H(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:P,resetDefaultState:H,dispose:U,releaseStatesOfGeometry:I,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:S,disableUnusedAttributes:O}}function Ab(s,e,t){let r;function o(m){r=m}function l(m,p){s.drawArrays(r,m,p),t.update(p,r,1)}function u(m,p,_){_!==0&&(s.drawArraysInstanced(r,m,p,_),t.update(p,r,_))}function h(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,_);let g=0;for(let y=0;y<_;y++)g+=p[y];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function Cb(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==Ei&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const T=B===or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==ni&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Fi&&!T)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=m(p);_!==p&&(ht("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const M=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),k=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:M,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:O,maxVaryings:k,maxFragmentUniforms:N,maxSamples:U,samples:I}}function Rb(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Ir,h=new yt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(M,g){const y=M.length!==0||g||r!==0||o;return o=g,r=M.length,y},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(M,g){t=_(M,g,0)},this.setState=function(M,g,y){const E=M.clippingPlanes,C=M.clipIntersection,S=M.clipShadows,v=s.get(M);if(!o||E===null||E.length===0||l&&!S)l?_(null):p();else{const O=l?0:r,k=O*4;let N=v.clippingState||null;m.value=N,N=_(E,g,k,y);for(let U=0;U!==k;++U)N[U]=t[U];v.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==t&&(m.value=t,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(M,g,y,E){const C=M!==null?M.length:0;let S=null;if(C!==0){if(S=m.value,E!==!0||S===null){const v=y+C*4,O=g.matrixWorldInverse;h.getNormalMatrix(O),(S===null||S.length<v)&&(S=new Float32Array(v));for(let k=0,N=y;k!==C;++k,N+=4)u.copy(M[k]).applyMatrix4(O,h),u.normal.toArray(S,N),S[N+3]=u.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const Fr=4,b0=[.125,.215,.35,.446,.526,.582],fs=20,Nb=256,io=new nh,w0=new At;let Ld=null,Id=0,Ud=0,kd=!1;const Pb=new ee;class E0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:h=Pb}=l;Ld=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),t>0&&this._blur(m,0,0,t),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=A0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ld,Id,Ud),this._renderer.xr.enabled=kd,e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ld=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:or,format:Ei,colorSpace:oc,depthBuffer:!1},o=T0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=T0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Db(l)),this._blurMaterial=Ib(l,e,t),this._ggxMaterial=Lb(l,e,t)}return o}_compileMaterial(e){const t=new hn(new Yn,e);this._renderer.compile(t,io)}_sceneToCubeUV(e,t,r,o,l){const m=new ti(90,1,t,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],M=this._renderer,g=M.autoClear,y=M.toneMapping;M.getClearColor(w0),M.toneMapping=zi,M.autoClear=!1,M.state.buffers.depth.getReversed()&&(M.setRenderTarget(o),M.clearDepth(),M.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new hn(new ki,new lo({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let v=!1;const O=e.background;O?O.isColor&&(S.color.copy(O),e.background=null,v=!0):(S.color.copy(w0),v=!0);for(let k=0;k<6;k++){const N=k%3;N===0?(m.up.set(0,p[k],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+_[k],l.y,l.z)):N===1?(m.up.set(0,0,p[k]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+_[k],l.z)):(m.up.set(0,p[k],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+_[k]));const U=this._cubeSize;na(o,N*U,k>2?U:0,U,U),M.setRenderTarget(o),v&&M.render(C,m),M.render(e,m)}M.toneMapping=y,M.autoClear=g,e.background=O}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ms||e.mapping===ua;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=C0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=A0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const h=l.uniforms;h.envMap.value=e;const m=this._cubeSize;na(t,0,0,3*m,2*m),r.setRenderTarget(t),r.render(u,io)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const m=u.uniforms,p=r/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),M=Math.sqrt(p*p-_*_),g=0+p*1.25,y=M*g,{_lodMax:E}=this,C=this._sizeLods[r],S=3*C*(r>E-Fr?r-E+Fr:0),v=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=E-t,na(l,S,v,3*C,2*C),o.setRenderTarget(l),o.render(h,io),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=E-r,na(e,S,v,3*C,2*C),o.setRenderTarget(e),o.render(h,io)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const _=3,M=this._lodMeshes[o];M.material=p;const g=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*fs-1),C=l/E,S=isFinite(l)?1+Math.floor(_*C):fs;S>fs&&ht(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${fs}`);const v=[];let O=0;for(let B=0;B<fs;++B){const T=B/C,P=Math.exp(-T*T/2);v.push(P),B===0?O+=P:B<S&&(O+=2*P)}for(let B=0;B<v.length;B++)v[B]=v[B]/O;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=v,g.latitudinal.value=u==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:k}=this;g.dTheta.value=E,g.mipInt.value=k-r;const N=this._sizeLods[o],U=3*N*(o>k-Fr?o-k+Fr:0),I=4*(this._cubeSize-N);na(t,U,I,3*N,2*N),m.setRenderTarget(t),m.render(M,io)}}function Db(s){const e=[],t=[],r=[];let o=s;const l=s-Fr+1+b0.length;for(let u=0;u<l;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>s-Fr?m=b0[u-s+Fr-1]:u===0&&(m=0),t.push(m);const p=1/(h-2),_=-p,M=1+p,g=[_,_,M,_,M,M,_,_,M,M,_,M],y=6,E=6,C=3,S=2,v=1,O=new Float32Array(C*E*y),k=new Float32Array(S*E*y),N=new Float32Array(v*E*y);for(let I=0;I<y;I++){const B=I%3*2/3-1,T=I>2?0:-1,P=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];O.set(P,C*E*I),k.set(g,S*E*I);const H=[I,I,I,I,I,I];N.set(H,v*E*I)}const U=new Yn;U.setAttribute("position",new Vi(O,C)),U.setAttribute("uv",new Vi(k,S)),U.setAttribute("faceIndex",new Vi(N,v)),r.push(new hn(U,null)),o>Fr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function T0(s,e,t){const r=new Bi(s,e,t);return r.texture.mapping=xc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function na(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function Lb(s,e,t){return new Gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Ib(s,e,t){const r=new Float32Array(fs),o=new ee(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function A0(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function C0(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function _c(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Nx extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new bx(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ki(5,5,5),l=new Gi({name:"CubemapFromEquirect",uniforms:fa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:sr});l.uniforms.tEquirect.value=t;const u=new hn(o,l),h=t.minFilter;return t.minFilter===hs&&(t.minFilter=Pn),new FS(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function Ub(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,y=!1){return g==null?null:y?u(g):l(g)}function l(g){if(g&&g.isTexture){const y=g.mapping;if(y===sd||y===ad)if(e.has(g)){const E=e.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const C=new Nx(E.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",p),h(C.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const y=g.mapping,E=y===sd||y===ad,C=y===ms||y===ua;if(E||C){let S=t.get(g);const v=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return r===null&&(r=new E0(s)),S=E?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),S.texture;if(S!==void 0)return S.texture;{const O=g.image;return E&&O&&O.height>0||C&&O&&m(O)?(r===null&&(r=new E0(s)),S=E?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),g.addEventListener("dispose",_),S.texture):null}}}return g}function h(g,y){return y===sd?g.mapping=ms:y===ad&&(g.mapping=ua),g}function m(g){let y=0;const E=6;for(let C=0;C<E;C++)g[C]!==void 0&&y++;return y===E}function p(g){const y=g.target;y.removeEventListener("dispose",p);const E=e.get(y);E!==void 0&&(e.delete(y),E.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function M(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:M}}function kb(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&aa("WebGLRenderer: "+r+" extension not supported."),o}}}function Fb(s,e,t,r){const o={},l=new WeakMap;function u(M){const g=M.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete o[g.id];const y=l.get(g);y&&(e.remove(y),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function h(M,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function m(M){const g=M.attributes;for(const y in g)e.update(g[y],s.ARRAY_BUFFER)}function p(M){const g=[],y=M.index,E=M.attributes.position;let C=0;if(E===void 0)return;if(y!==null){const O=y.array;C=y.version;for(let k=0,N=O.length;k<N;k+=3){const U=O[k+0],I=O[k+1],B=O[k+2];g.push(U,I,I,B,B,U)}}else{const O=E.array;C=E.version;for(let k=0,N=O.length/3-1;k<N;k+=3){const U=k+0,I=k+1,B=k+2;g.push(U,I,I,B,B,U)}}const S=new(E.count>=65535?Sx:yx)(g,1);S.version=C;const v=l.get(M);v&&e.remove(v),l.set(M,S)}function _(M){const g=l.get(M);if(g){const y=M.index;y!==null&&g.version<y.version&&p(M)}else p(M);return l.get(M)}return{get:h,update:m,getWireframeAttribute:_}}function Ob(s,e,t){let r;function o(M){r=M}let l,u;function h(M){l=M.type,u=M.bytesPerElement}function m(M,g){s.drawElements(r,g,l,M*u),t.update(g,r,1)}function p(M,g,y){y!==0&&(s.drawElementsInstanced(r,g,l,M*u,y),t.update(g,r,y))}function _(M,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,M,0,y);let C=0;for(let S=0;S<y;S++)C+=g[S];t.update(C,r,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function zb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,h){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=h*(l/3);break;case s.LINES:t.lines+=h*(l/2);break;case s.LINE_STRIP:t.lines+=h*(l-1);break;case s.LINE_LOOP:t.lines+=h*l;break;case s.POINTS:t.points+=h*l;break;default:Dt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Bb(s,e,t){const r=new WeakMap,o=new tn;function l(u,h,m){const p=u.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,M=_!==void 0?_.length:0;let g=r.get(h);if(g===void 0||g.count!==M){let H=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",H)};var y=H;g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let N=0;E===!0&&(N=1),C===!0&&(N=2),S===!0&&(N=3);let U=h.attributes.position.count*N,I=1;U>e.maxTextureSize&&(I=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const B=new Float32Array(U*I*4*M),T=new vx(B,U,I,M);T.type=Fi,T.needsUpdate=!0;const P=N*4;for(let V=0;V<M;V++){const G=v[V],te=O[V],me=k[V],Z=U*I*4*V;for(let se=0;se<G.count;se++){const Q=se*P;E===!0&&(o.fromBufferAttribute(G,se),B[Z+Q+0]=o.x,B[Z+Q+1]=o.y,B[Z+Q+2]=o.z,B[Z+Q+3]=0),C===!0&&(o.fromBufferAttribute(te,se),B[Z+Q+4]=o.x,B[Z+Q+5]=o.y,B[Z+Q+6]=o.z,B[Z+Q+7]=0),S===!0&&(o.fromBufferAttribute(me,se),B[Z+Q+8]=o.x,B[Z+Q+9]=o.y,B[Z+Q+10]=o.z,B[Z+Q+11]=me.itemSize===4?o.w:1)}}g={count:M,texture:T,size:new xt(U,I)},r.set(h,g),h.addEventListener("dispose",H)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const C=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function Vb(s,e,t,r,o){let l=new WeakMap;function u(p){const _=o.render.frame,M=p.geometry,g=e.get(p,M);if(l.get(g)!==_&&(e.update(g),l.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),l.get(p)!==_&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==_&&(y.update(),l.set(y,_))}return g}function h(){l=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),r.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:u,dispose:h}}const Hb={[ix]:"LINEAR_TONE_MAPPING",[rx]:"REINHARD_TONE_MAPPING",[sx]:"CINEON_TONE_MAPPING",[Bf]:"ACES_FILMIC_TONE_MAPPING",[ox]:"AGX_TONE_MAPPING",[lx]:"NEUTRAL_TONE_MAPPING",[ax]:"CUSTOM_TONE_MAPPING"};function Gb(s,e,t,r,o,l){const u=new Bi(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,depthTexture:o?new da(e,t):void 0}),h=new Bi(e,t,{type:or,depthBuffer:!1,stencilBuffer:!1}),m=new Yn;m.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new rn([0,2,0,0,2,0],2));const p=new RS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new hn(m,p),M=new nh(-1,1,1,-1,0,1);let g=null,y=null,E=!1,C,S=null,v=[],O=!1;this.setSize=function(k,N){u.setSize(k,N),h.setSize(k,N);for(let U=0;U<v.length;U++){const I=v[U];I.setSize&&I.setSize(k,N)}},this.setEffects=function(k){v=k,O=v.length>0&&v[0].isRenderPass===!0;const N=u.width,U=u.height;for(let I=0;I<v.length;I++){const B=v[I];B.setSize&&B.setSize(N,U)}},this.begin=function(k,N){if(E||k.toneMapping===zi&&v.length===0)return!1;if(S=N,N!==null){const U=N.width,I=N.height;(u.width!==U||u.height!==I)&&this.setSize(U,I)}return O===!1&&k.setRenderTarget(u),C=k.toneMapping,k.toneMapping=zi,!0},this.hasRenderPass=function(){return O},this.end=function(k,N){k.toneMapping=C,E=!0;let U=u,I=h;for(let B=0;B<v.length;B++){const T=v[B];if(T.enabled!==!1&&(T.render(k,I,U,N),T.needsSwap!==!1)){const P=U;U=I,I=P}}if(g!==k.outputColorSpace||y!==k.toneMapping){g=k.outputColorSpace,y=k.toneMapping,p.defines={},Nt.getTransfer(g)===Bt&&(p.defines.SRGB_TRANSFER="");const B=Hb[y];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=U.texture,k.setRenderTarget(S),k.render(_,M),S=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),p.dispose()}}const Px=new Dn,Df=new da(1,1),Dx=new vx,Lx=new iS,Ix=new bx,R0=[],N0=[],P0=new Float32Array(16),D0=new Float32Array(9),L0=new Float32Array(4);function pa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=R0[o];if(l===void 0&&(l=new Float32Array(o),R0[o]=l),e!==0){r.toArray(l,0);for(let u=1,h=0;u!==e;++u)h+=t,s[u].toArray(l,h)}return l}function pn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function mn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function yc(s,e){let t=N0[e];t===void 0&&(t=new Int32Array(e),N0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function jb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Wb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2fv(this.addr,e),mn(t,e)}}function Xb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;s.uniform3fv(this.addr,e),mn(t,e)}}function qb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4fv(this.addr,e),mn(t,e)}}function Yb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;L0.set(r),s.uniformMatrix2fv(this.addr,!1,L0),mn(t,r)}}function $b(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;D0.set(r),s.uniformMatrix3fv(this.addr,!1,D0),mn(t,r)}}function Kb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;P0.set(r),s.uniformMatrix4fv(this.addr,!1,P0),mn(t,r)}}function Zb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Qb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2iv(this.addr,e),mn(t,e)}}function Jb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;s.uniform3iv(this.addr,e),mn(t,e)}}function ew(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4iv(this.addr,e),mn(t,e)}}function tw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function nw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2uiv(this.addr,e),mn(t,e)}}function iw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;s.uniform3uiv(this.addr,e),mn(t,e)}}function rw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4uiv(this.addr,e),mn(t,e)}}function sw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Df.compareFunction=t.isReversedDepthBuffer()?Yf:qf,l=Df):l=Px,t.setTexture2D(e||l,o)}function aw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Lx,o)}function ow(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Ix,o)}function lw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Dx,o)}function cw(s){switch(s){case 5126:return jb;case 35664:return Wb;case 35665:return Xb;case 35666:return qb;case 35674:return Yb;case 35675:return $b;case 35676:return Kb;case 5124:case 35670:return Zb;case 35667:case 35671:return Qb;case 35668:case 35672:return Jb;case 35669:case 35673:return ew;case 5125:return tw;case 36294:return nw;case 36295:return iw;case 36296:return rw;case 35678:case 36198:case 36298:case 36306:case 35682:return sw;case 35679:case 36299:case 36307:return aw;case 35680:case 36300:case 36308:case 36293:return ow;case 36289:case 36303:case 36311:case 36292:return lw}}function uw(s,e){s.uniform1fv(this.addr,e)}function dw(s,e){const t=pa(e,this.size,2);s.uniform2fv(this.addr,t)}function fw(s,e){const t=pa(e,this.size,3);s.uniform3fv(this.addr,t)}function hw(s,e){const t=pa(e,this.size,4);s.uniform4fv(this.addr,t)}function pw(s,e){const t=pa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mw(s,e){const t=pa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function xw(s,e){const t=pa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function gw(s,e){s.uniform1iv(this.addr,e)}function vw(s,e){s.uniform2iv(this.addr,e)}function _w(s,e){s.uniform3iv(this.addr,e)}function yw(s,e){s.uniform4iv(this.addr,e)}function Sw(s,e){s.uniform1uiv(this.addr,e)}function Mw(s,e){s.uniform2uiv(this.addr,e)}function bw(s,e){s.uniform3uiv(this.addr,e)}function ww(s,e){s.uniform4uiv(this.addr,e)}function Ew(s,e,t){const r=this.cache,o=e.length,l=yc(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Df:u=Px;for(let h=0;h!==o;++h)t.setTexture2D(e[h]||u,l[h])}function Tw(s,e,t){const r=this.cache,o=e.length,l=yc(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Lx,l[u])}function Aw(s,e,t){const r=this.cache,o=e.length,l=yc(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Ix,l[u])}function Cw(s,e,t){const r=this.cache,o=e.length,l=yc(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Dx,l[u])}function Rw(s){switch(s){case 5126:return uw;case 35664:return dw;case 35665:return fw;case 35666:return hw;case 35674:return pw;case 35675:return mw;case 35676:return xw;case 5124:case 35670:return gw;case 35667:case 35671:return vw;case 35668:case 35672:return _w;case 35669:case 35673:return yw;case 5125:return Sw;case 36294:return Mw;case 36295:return bw;case 36296:return ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return Aw;case 36289:case 36303:case 36311:case 36292:return Cw}}class Nw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=cw(t.type)}}class Pw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rw(t.type)}}class Dw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const h=o[l];h.setValue(e,t[h.id],r)}}}const Fd=/(\w+)(\])?(\[|\.)?/g;function I0(s,e){s.seq.push(e),s.map[e.id]=e}function Lw(s,e,t){const r=s.name,o=r.length;for(Fd.lastIndex=0;;){const l=Fd.exec(r),u=Fd.lastIndex;let h=l[1];const m=l[2]==="]",p=l[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===o){I0(t,p===void 0?new Nw(h,s,e):new Pw(h,s,e));break}else{let M=t.map[h];M===void 0&&(M=new Dw(h),I0(t,M)),t=M}}}class rc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(t,u),m=e.getUniformLocation(t,h.name);Lw(h,m,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const h=t[l],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function U0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Iw=37297;let Uw=0;function kw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return r.join(`
`)}const k0=new yt;function Fw(s){Nt._getMatrix(k0,Nt.workingColorSpace,s);const e=`mat3( ${k0.elements.map(t=>t.toFixed(4))} )`;switch(Nt.getTransfer(s)){case lc:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function F0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+kw(s.getShaderSource(e),h)}else return l}function Ow(s,e){const t=Fw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zw={[ix]:"Linear",[rx]:"Reinhard",[sx]:"Cineon",[Bf]:"ACESFilmic",[ox]:"AgX",[lx]:"Neutral",[ax]:"Custom"};function Bw(s,e){const t=zw[e];return t===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Kl=new ee;function Vw(){Nt.getLuminanceCoefficients(Kl);const s=Kl.x.toFixed(4),e=Kl.y.toFixed(4),t=Kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function Gw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function jw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:h}}return t}function oo(s){return s!==""}function O0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function z0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ww=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(s){return s.replace(Ww,qw)}const Xw=new Map;function qw(s,e){let t=Mt[e];if(t===void 0){const r=Xw.get(e);if(r!==void 0)t=Mt[r],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Lf(t)}const Yw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B0(s){return s.replace(Yw,$w)}function $w(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function V0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Kw={[Ql]:"SHADOWMAP_TYPE_PCF",[so]:"SHADOWMAP_TYPE_VSM"};function Zw(s){return Kw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Qw={[ms]:"ENVMAP_TYPE_CUBE",[ua]:"ENVMAP_TYPE_CUBE",[xc]:"ENVMAP_TYPE_CUBE_UV"};function Jw(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Qw[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const eE={[ua]:"ENVMAP_MODE_REFRACTION"};function tE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":eE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nE={[nx]:"ENVMAP_BLENDING_MULTIPLY",[Uy]:"ENVMAP_BLENDING_MIX",[ky]:"ENVMAP_BLENDING_ADD"};function iE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":nE[s.combine]||"ENVMAP_BLENDING_NONE"}function rE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function sE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,h=t.fragmentShader;const m=Zw(t),p=Jw(t),_=tE(t),M=iE(t),g=rE(t),y=Hw(t),E=Gw(l),C=o.createProgram();let S,v,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(oo).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(oo).join(`
`),v.length>0&&(v+=`
`)):(S=[V0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),v=[V0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+M:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?Mt.tonemapping_pars_fragment:"",t.toneMapping!==zi?Bw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,Ow("linearToOutputTexel",t.outputColorSpace),Vw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),u=Lf(u),u=O0(u,t),u=z0(u,t),h=Lf(h),h=O0(h,t),h=z0(h,t),u=B0(u),h=B0(h),t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",t.glslVersion===Xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const k=O+S+u,N=O+v+h,U=U0(o,o.VERTEX_SHADER,k),I=U0(o,o.FRAGMENT_SHADER,N);o.attachShader(C,U),o.attachShader(C,I),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function B(V){if(s.debug.checkShaderErrors){const G=o.getProgramInfoLog(C)||"",te=o.getShaderInfoLog(U)||"",me=o.getShaderInfoLog(I)||"",Z=G.trim(),se=te.trim(),Q=me.trim();let Y=!0,ae=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,U,I);else{const L=F0(o,U,"vertex"),w=F0(o,I,"fragment");Dt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Z+`
`+L+`
`+w)}else Z!==""?ht("WebGLProgram: Program Info Log:",Z):(se===""||Q==="")&&(ae=!1);ae&&(V.diagnostics={runnable:Y,programLog:Z,vertexShader:{log:se,prefix:S},fragmentShader:{log:Q,prefix:v}})}o.deleteShader(U),o.deleteShader(I),T=new rc(o,C),P=jw(o,C)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let P;this.getAttributes=function(){return P===void 0&&B(this),P};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=o.getProgramParameter(C,Iw)),H},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uw++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=U,this.fragmentShader=I,this}let aE=0;class oE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new lE(e),t.set(e,r)),r}}class lE{constructor(e){this.id=aE++,this.code=e,this.usedTimes=0}}function cE(s){return s===xs||s===sc||s===ac}function uE(s,e,t,r,o,l){const u=new Kf,h=new oE,m=new Set,p=[],_=new Map,M=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,P,H,V,G,te){const me=V.fog,Z=G.geometry,se=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,Y=e.get(T.envMap||se,Q),ae=Y&&Y.mapping===xc?Y.image.height:null,L=y[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&ht("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const w=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,F=w!==void 0?w.length:0;let xe=0;Z.morphAttributes.position!==void 0&&(xe=1),Z.morphAttributes.normal!==void 0&&(xe=2),Z.morphAttributes.color!==void 0&&(xe=3);let _e,Se,X,ne;if(L){const Ye=Ii[L];_e=Ye.vertexShader,Se=Ye.fragmentShader}else{_e=T.vertexShader,Se=T.fragmentShader;const Ye=h.getVertexShaderStage(T),Vt=h.getFragmentShaderStage(T);h.update(T,Ye,Vt),X=Ye.id,ne=Vt.id}const re=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Pe=G.isInstancedMesh===!0,Re=G.isBatchedMesh===!0,lt=!!T.map,qe=!!T.matcap,He=!!Y,ot=!!T.aoMap,ct=!!T.lightMap,pt=!!T.bumpMap&&T.wireframe===!1,Te=!!T.normalMap,St=!!T.displacementMap,bt=!!T.emissiveMap,Rt=!!T.metalnessMap,Ft=!!T.roughnessMap,$=T.anisotropy>0,Zt=T.clearcoat>0,st=T.dispersion>0,D=T.iridescence>0,b=T.sheen>0,q=T.transmission>0,ie=$&&!!T.anisotropyMap,fe=Zt&&!!T.clearcoatMap,be=Zt&&!!T.clearcoatNormalMap,Ne=Zt&&!!T.clearcoatRoughnessMap,de=D&&!!T.iridescenceMap,ve=D&&!!T.iridescenceThicknessMap,ze=b&&!!T.sheenColorMap,Qe=b&&!!T.sheenRoughnessMap,Ie=!!T.specularMap,Oe=!!T.specularColorMap,nt=!!T.specularIntensityMap,at=q&&!!T.transmissionMap,ft=q&&!!T.thicknessMap,W=!!T.gradientMap,Ue=!!T.alphaMap,ge=T.alphaTest>0,ke=!!T.alphaHash,Be=!!T.extensions;let Me=zi;T.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Me=s.toneMapping);const Ke={shaderID:L,shaderType:T.type,shaderName:T.name,vertexShader:_e,fragmentShader:Se,defines:T.defines,customVertexShaderID:X,customFragmentShaderID:ne,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Re,batchingColor:Re&&G._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&G.instanceColor!==null,instancingMorph:Pe&&G.morphTexture!==null,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:lt,matcap:qe,envMap:He,envMapMode:He&&Y.mapping,envMapCubeUVHeight:ae,aoMap:ot,lightMap:ct,bumpMap:pt,normalMap:Te,displacementMap:St,emissiveMap:bt,normalMapObjectSpace:Te&&T.normalMapType===zy,normalMapTangentSpace:Te&&T.normalMapType===Nf,packedNormalMap:Te&&T.normalMapType===Nf&&cE(T.normalMap.format),metalnessMap:Rt,roughnessMap:Ft,anisotropy:$,anisotropyMap:ie,clearcoat:Zt,clearcoatMap:fe,clearcoatNormalMap:be,clearcoatRoughnessMap:Ne,dispersion:st,iridescence:D,iridescenceMap:de,iridescenceThicknessMap:ve,sheen:b,sheenColorMap:ze,sheenRoughnessMap:Qe,specularMap:Ie,specularColorMap:Oe,specularIntensityMap:nt,transmission:q,transmissionMap:at,thicknessMap:ft,gradientMap:W,opaque:T.transparent===!1&&T.blending===sa&&T.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ge,alphaHash:ke,combine:T.combine,mapUv:lt&&E(T.map.channel),aoMapUv:ot&&E(T.aoMap.channel),lightMapUv:ct&&E(T.lightMap.channel),bumpMapUv:pt&&E(T.bumpMap.channel),normalMapUv:Te&&E(T.normalMap.channel),displacementMapUv:St&&E(T.displacementMap.channel),emissiveMapUv:bt&&E(T.emissiveMap.channel),metalnessMapUv:Rt&&E(T.metalnessMap.channel),roughnessMapUv:Ft&&E(T.roughnessMap.channel),anisotropyMapUv:ie&&E(T.anisotropyMap.channel),clearcoatMapUv:fe&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:be&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&E(T.sheenRoughnessMap.channel),specularMapUv:Ie&&E(T.specularMap.channel),specularColorMapUv:Oe&&E(T.specularColorMap.channel),specularIntensityMapUv:nt&&E(T.specularIntensityMap.channel),transmissionMapUv:at&&E(T.transmissionMap.channel),thicknessMapUv:ft&&E(T.thicknessMap.channel),alphaMapUv:Ue&&E(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Te||$),vertexNormals:!!Z.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Z.attributes.uv&&(lt||Ue),fog:!!me,useFog:T.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Z.attributes.normal===void 0&&Te===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:ye,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:xe,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Me,decodeVideoTexture:lt&&T.map.isVideoTexture===!0&&Nt.getTransfer(T.map.colorSpace)===Bt,decodeVideoTextureEmissive:bt&&T.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(T.emissiveMap.colorSpace)===Bt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ui,flipSided:T.side===qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Be&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&T.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ke.vertexUv1s=m.has(1),Ke.vertexUv2s=m.has(2),Ke.vertexUv3s=m.has(3),m.clear(),Ke}function S(T){const P=[];if(T.shaderID?P.push(T.shaderID):(P.push(T.customVertexShaderID),P.push(T.customFragmentShaderID)),T.defines!==void 0)for(const H in T.defines)P.push(H),P.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(v(P,T),O(P,T),P.push(s.outputColorSpace)),P.push(T.customProgramCacheKey),P.join()}function v(T,P){T.push(P.precision),T.push(P.outputColorSpace),T.push(P.envMapMode),T.push(P.envMapCubeUVHeight),T.push(P.mapUv),T.push(P.alphaMapUv),T.push(P.lightMapUv),T.push(P.aoMapUv),T.push(P.bumpMapUv),T.push(P.normalMapUv),T.push(P.displacementMapUv),T.push(P.emissiveMapUv),T.push(P.metalnessMapUv),T.push(P.roughnessMapUv),T.push(P.anisotropyMapUv),T.push(P.clearcoatMapUv),T.push(P.clearcoatNormalMapUv),T.push(P.clearcoatRoughnessMapUv),T.push(P.iridescenceMapUv),T.push(P.iridescenceThicknessMapUv),T.push(P.sheenColorMapUv),T.push(P.sheenRoughnessMapUv),T.push(P.specularMapUv),T.push(P.specularColorMapUv),T.push(P.specularIntensityMapUv),T.push(P.transmissionMapUv),T.push(P.thicknessMapUv),T.push(P.combine),T.push(P.fogExp2),T.push(P.sizeAttenuation),T.push(P.morphTargetsCount),T.push(P.morphAttributeCount),T.push(P.numDirLights),T.push(P.numPointLights),T.push(P.numSpotLights),T.push(P.numSpotLightMaps),T.push(P.numHemiLights),T.push(P.numRectAreaLights),T.push(P.numDirLightShadows),T.push(P.numPointLightShadows),T.push(P.numSpotLightShadows),T.push(P.numSpotLightShadowsWithMaps),T.push(P.numLightProbes),T.push(P.shadowMapType),T.push(P.toneMapping),T.push(P.numClippingPlanes),T.push(P.numClipIntersection),T.push(P.depthPacking)}function O(T,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),P.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function k(T){const P=y[T.type];let H;if(P){const V=Ii[P];H=TS.clone(V.uniforms)}else H=T.uniforms;return H}function N(T,P){let H=_.get(P);return H!==void 0?++H.usedTimes:(H=new sE(s,P,T,o),p.push(H),_.set(P,H)),H}function U(T){if(--T.usedTimes===0){const P=p.indexOf(T);p[P]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function I(T){h.remove(T)}function B(){h.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:k,acquireProgram:N,releaseProgram:U,releaseShaderCache:I,programs:p,dispose:B}}function dE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function r(u){s.delete(u)}function o(u,h,m){s.get(u)[h]=m}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function fE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function H0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function G0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function h(g,y,E,C,S,v){let O=s[e];return O===void 0?(O={id:g.id,object:g,geometry:y,material:E,materialVariant:u(g),groupOrder:C,renderOrder:g.renderOrder,z:S,group:v},s[e]=O):(O.id=g.id,O.object=g,O.geometry=y,O.material=E,O.materialVariant=u(g),O.groupOrder=C,O.renderOrder=g.renderOrder,O.z=S,O.group=v),e++,O}function m(g,y,E,C,S,v){const O=h(g,y,E,C,S,v);E.transmission>0?r.push(O):E.transparent===!0?o.push(O):t.push(O)}function p(g,y,E,C,S,v){const O=h(g,y,E,C,S,v);E.transmission>0?r.unshift(O):E.transparent===!0?o.unshift(O):t.unshift(O)}function _(g,y,E){t.length>1&&t.sort(g||fE),r.length>1&&r.sort(y||H0),o.length>1&&o.sort(y||H0),E&&(t.reverse(),r.reverse(),o.reverse())}function M(){for(let g=e,y=s.length;g<y;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:m,unshift:p,finish:M,sort:_}}function hE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new G0,s.set(r,[u])):o>=l.length?(u=new G0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function pE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new At};break;case"SpotLight":t={position:new ee,direction:new ee,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return s[e.id]=t,t}}}function mE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let xE=0;function gE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function vE(s){const e=new pE,t=mE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ee);const o=new ee,l=new Kt,u=new Kt;function h(p){let _=0,M=0,g=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let y=0,E=0,C=0,S=0,v=0,O=0,k=0,N=0,U=0,I=0,B=0;p.sort(gE);for(let P=0,H=p.length;P<H;P++){const V=p[P],G=V.color,te=V.intensity,me=V.distance;let Z=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===xs?Z=V.shadow.map.texture:Z=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=G.r*te,M+=G.g*te,g+=G.b*te;else if(V.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(V.sh.coefficients[se],te);B++}else if(V.isDirectionalLight){const se=e.get(V);if(se.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Q=V.shadow,Y=t.get(V);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=Z,r.directionalShadowMatrix[y]=V.shadow.matrix,O++}r.directional[y]=se,y++}else if(V.isSpotLight){const se=e.get(V);se.position.setFromMatrixPosition(V.matrixWorld),se.color.copy(G).multiplyScalar(te),se.distance=me,se.coneCos=Math.cos(V.angle),se.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),se.decay=V.decay,r.spot[C]=se;const Q=V.shadow;if(V.map&&(r.spotLightMap[U]=V.map,U++,Q.updateMatrices(V),V.castShadow&&I++),r.spotLightMatrix[C]=Q.matrix,V.castShadow){const Y=t.get(V);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,r.spotShadow[C]=Y,r.spotShadowMap[C]=Z,N++}C++}else if(V.isRectAreaLight){const se=e.get(V);se.color.copy(G).multiplyScalar(te),se.halfWidth.set(V.width*.5,0,0),se.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=se,S++}else if(V.isPointLight){const se=e.get(V);if(se.color.copy(V.color).multiplyScalar(V.intensity),se.distance=V.distance,se.decay=V.decay,V.castShadow){const Q=V.shadow,Y=t.get(V);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,Y.shadowCameraNear=Q.camera.near,Y.shadowCameraFar=Q.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=Z,r.pointShadowMatrix[E]=V.shadow.matrix,k++}r.point[E]=se,E++}else if(V.isHemisphereLight){const se=e.get(V);se.skyColor.copy(V.color).multiplyScalar(te),se.groundColor.copy(V.groundColor).multiplyScalar(te),r.hemi[v]=se,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=M,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==y||T.pointLength!==E||T.spotLength!==C||T.rectAreaLength!==S||T.hemiLength!==v||T.numDirectionalShadows!==O||T.numPointShadows!==k||T.numSpotShadows!==N||T.numSpotMaps!==U||T.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=S,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=k,r.pointShadowMap.length=k,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=k,r.spotLightMatrix.length=N+U-I,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=B,T.directionalLength=y,T.pointLength=E,T.spotLength=C,T.rectAreaLength=S,T.hemiLength=v,T.numDirectionalShadows=O,T.numPointShadows=k,T.numSpotShadows=N,T.numSpotMaps=U,T.numLightProbes=B,r.version=xE++)}function m(p,_){let M=0,g=0,y=0,E=0,C=0;const S=_.matrixWorldInverse;for(let v=0,O=p.length;v<O;v++){const k=p[v];if(k.isDirectionalLight){const N=r.directional[M];N.direction.setFromMatrixPosition(k.matrixWorld),o.setFromMatrixPosition(k.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(S),M++}else if(k.isSpotLight){const N=r.spot[y];N.position.setFromMatrixPosition(k.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(k.matrixWorld),o.setFromMatrixPosition(k.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(S),y++}else if(k.isRectAreaLight){const N=r.rectArea[E];N.position.setFromMatrixPosition(k.matrixWorld),N.position.applyMatrix4(S),u.identity(),l.copy(k.matrixWorld),l.premultiply(S),u.extractRotation(l),N.halfWidth.set(k.width*.5,0,0),N.halfHeight.set(0,k.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),E++}else if(k.isPointLight){const N=r.point[g];N.position.setFromMatrixPosition(k.matrixWorld),N.position.applyMatrix4(S),g++}else if(k.isHemisphereLight){const N=r.hemi[C];N.direction.setFromMatrixPosition(k.matrixWorld),N.direction.transformDirection(S),C++}}}return{setup:h,setupView:m,state:r}}function j0(s){const e=new vE(s),t=[],r=[],o=[];function l(g){M.camera=g,t.length=0,r.length=0,o.length=0}function u(g){t.push(g)}function h(g){r.push(g)}function m(g){o.push(g)}function p(){e.setup(t)}function _(g){e.setupView(t,g)}const M={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:M,setupLights:p,setupLightsView:_,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function _E(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let h;return u===void 0?(h=new j0(s),e.set(o,[h])):l>=u.length?(h=new j0(s),u.push(h)):h=u[l],h}function r(){e=new WeakMap}return{get:t,dispose:r}}const yE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ME=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],bE=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],W0=new Kt,ro=new ee,Od=new ee;function wE(s,e,t){let r=new Qf;const o=new xt,l=new xt,u=new tn,h=new NS,m=new PS,p={},_=t.maxTextureSize,M={[Or]:qn,[qn]:Or,[Ui]:Ui},g=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:yE,fragmentShader:SE}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new Yn;E.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new hn(E,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let v=this.type;this.render=function(I,B,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;this.type===tx&&(ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ql);const P=s.getRenderTarget(),H=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),G=s.state;G.setBlending(sr),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const te=v!==this.type;te&&B.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(Z=>Z.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,Z=I.length;me<Z;me++){const se=I[me],Q=se.shadow;if(Q===void 0){ht("WebGLShadowMap:",se,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;o.copy(Q.mapSize);const Y=Q.getFrameExtents();o.multiply(Y),l.copy(Q.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/Y.x),o.x=l.x*Y.x,Q.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/Y.y),o.y=l.y*Y.y,Q.mapSize.y=l.y));const ae=s.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=ae,Q.map===null||te===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===so){if(se.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new Bi(o.x,o.y,{format:xs,type:or,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),Q.map.texture.name=se.name+".shadowMap",Q.map.depthTexture=new da(o.x,o.y,Fi),Q.map.depthTexture.name=se.name+".shadowMapDepth",Q.map.depthTexture.format=lr,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=bn,Q.map.depthTexture.magFilter=bn}else se.isPointLight?(Q.map=new Nx(o.x),Q.map.depthTexture=new wS(o.x,Hi)):(Q.map=new Bi(o.x,o.y),Q.map.depthTexture=new da(o.x,o.y,Hi)),Q.map.depthTexture.name=se.name+".shadowMap",Q.map.depthTexture.format=lr,this.type===Ql?(Q.map.depthTexture.compareFunction=ae?Yf:qf,Q.map.depthTexture.minFilter=Pn,Q.map.depthTexture.magFilter=Pn):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=bn,Q.map.depthTexture.magFilter=bn);Q.camera.updateProjectionMatrix()}const L=Q.map.isWebGLCubeRenderTarget?6:1;for(let w=0;w<L;w++){if(Q.map.isWebGLCubeRenderTarget)s.setRenderTarget(Q.map,w),s.clear();else{w===0&&(s.setRenderTarget(Q.map),s.clear());const F=Q.getViewport(w);u.set(l.x*F.x,l.y*F.y,l.x*F.z,l.y*F.w),G.viewport(u)}if(se.isPointLight){const F=Q.camera,xe=Q.matrix,_e=se.distance||F.far;_e!==F.far&&(F.far=_e,F.updateProjectionMatrix()),ro.setFromMatrixPosition(se.matrixWorld),F.position.copy(ro),Od.copy(F.position),Od.add(ME[w]),F.up.copy(bE[w]),F.lookAt(Od),F.updateMatrixWorld(),xe.makeTranslation(-ro.x,-ro.y,-ro.z),W0.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(W0,F.coordinateSystem,F.reversedDepth)}else Q.updateMatrices(se);r=Q.getFrustum(),N(B,T,Q.camera,se,this.type)}Q.isPointLightShadow!==!0&&this.type===so&&O(Q,T),Q.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(P,H,V)};function O(I,B){const T=e.update(C);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Bi(o.x,o.y,{format:xs,type:or})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(B,null,T,g,C,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(B,null,T,y,C,null)}function k(I,B,T,P){let H=null;const V=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)H=V;else if(H=T.isPointLight===!0?m:h,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const G=H.uuid,te=B.uuid;let me=p[G];me===void 0&&(me={},p[G]=me);let Z=me[te];Z===void 0&&(Z=H.clone(),me[te]=Z,B.addEventListener("dispose",U)),H=Z}if(H.visible=B.visible,H.wireframe=B.wireframe,P===so?H.side=B.shadowSide!==null?B.shadowSide:B.side:H.side=B.shadowSide!==null?B.shadowSide:M[B.side],H.alphaMap=B.alphaMap,H.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,H.map=B.map,H.clipShadows=B.clipShadows,H.clippingPlanes=B.clippingPlanes,H.clipIntersection=B.clipIntersection,H.displacementMap=B.displacementMap,H.displacementScale=B.displacementScale,H.displacementBias=B.displacementBias,H.wireframeLinewidth=B.wireframeLinewidth,H.linewidth=B.linewidth,T.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const G=s.properties.get(H);G.light=T}return H}function N(I,B,T,P,H){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&H===so)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const te=e.update(I),me=I.material;if(Array.isArray(me)){const Z=te.groups;for(let se=0,Q=Z.length;se<Q;se++){const Y=Z[se],ae=me[Y.materialIndex];if(ae&&ae.visible){const L=k(I,ae,P,H);I.onBeforeShadow(s,I,B,T,te,L,Y),s.renderBufferDirect(T,null,te,L,I,Y),I.onAfterShadow(s,I,B,T,te,L,Y)}}}else if(me.visible){const Z=k(I,me,P,H);I.onBeforeShadow(s,I,B,T,te,Z,null),s.renderBufferDirect(T,null,te,Z,I,null),I.onAfterShadow(s,I,B,T,te,Z,null)}}const G=I.children;for(let te=0,me=G.length;te<me;te++)N(G[te],B,T,P,H)}function U(I){I.target.removeEventListener("dispose",U);for(const T in p){const P=p[T],H=I.target.uuid;H in P&&(P[H].dispose(),delete P[H])}}}function EE(s,e){function t(){let W=!1;const Ue=new tn;let ge=null;const ke=new tn(0,0,0,0);return{setMask:function(Be){ge!==Be&&!W&&(s.colorMask(Be,Be,Be,Be),ge=Be)},setLocked:function(Be){W=Be},setClear:function(Be,Me,Ke,Ye,Vt){Vt===!0&&(Be*=Ye,Me*=Ye,Ke*=Ye),Ue.set(Be,Me,Ke,Ye),ke.equals(Ue)===!1&&(s.clearColor(Be,Me,Ke,Ye),ke.copy(Ue))},reset:function(){W=!1,ge=null,ke.set(-1,0,0,0)}}}function r(){let W=!1,Ue=!1,ge=null,ke=null,Be=null;return{setReversed:function(Me){if(Ue!==Me){const Ke=e.get("EXT_clip_control");Me?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Ue=Me;const Ye=Be;Be=null,this.setClear(Ye)}},getReversed:function(){return Ue},setTest:function(Me){Me?re(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(Me){ge!==Me&&!W&&(s.depthMask(Me),ge=Me)},setFunc:function(Me){if(Ue&&(Me=$y[Me]),ke!==Me){switch(Me){case Wd:s.depthFunc(s.NEVER);break;case Xd:s.depthFunc(s.ALWAYS);break;case qd:s.depthFunc(s.LESS);break;case ca:s.depthFunc(s.LEQUAL);break;case Yd:s.depthFunc(s.EQUAL);break;case $d:s.depthFunc(s.GEQUAL);break;case Kd:s.depthFunc(s.GREATER);break;case Zd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ke=Me}},setLocked:function(Me){W=Me},setClear:function(Me){Be!==Me&&(Be=Me,Ue&&(Me=1-Me),s.clearDepth(Me))},reset:function(){W=!1,ge=null,ke=null,Be=null,Ue=!1}}}function o(){let W=!1,Ue=null,ge=null,ke=null,Be=null,Me=null,Ke=null,Ye=null,Vt=null;return{setTest:function(Ut){W||(Ut?re(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(Ut){Ue!==Ut&&!W&&(s.stencilMask(Ut),Ue=Ut)},setFunc:function(Ut,wn,ii){(ge!==Ut||ke!==wn||Be!==ii)&&(s.stencilFunc(Ut,wn,ii),ge=Ut,ke=wn,Be=ii)},setOp:function(Ut,wn,ii){(Me!==Ut||Ke!==wn||Ye!==ii)&&(s.stencilOp(Ut,wn,ii),Me=Ut,Ke=wn,Ye=ii)},setLocked:function(Ut){W=Ut},setClear:function(Ut){Vt!==Ut&&(s.clearStencil(Ut),Vt=Ut)},reset:function(){W=!1,Ue=null,ge=null,ke=null,Be=null,Me=null,Ke=null,Ye=null,Vt=null}}}const l=new t,u=new r,h=new o,m=new WeakMap,p=new WeakMap;let _={},M={},g={},y=new WeakMap,E=[],C=null,S=!1,v=null,O=null,k=null,N=null,U=null,I=null,B=null,T=new At(0,0,0),P=0,H=!1,V=null,G=null,te=null,me=null,Z=null;const se=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,Y=0;const ae=s.getParameter(s.VERSION);ae.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ae)[1]),Q=Y>=1):ae.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),Q=Y>=2);let L=null,w={};const F=s.getParameter(s.SCISSOR_BOX),xe=s.getParameter(s.VIEWPORT),_e=new tn().fromArray(F),Se=new tn().fromArray(xe);function X(W,Ue,ge,ke){const Be=new Uint8Array(4),Me=s.createTexture();s.bindTexture(W,Me),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ke=0;Ke<ge;Ke++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,ke,0,s.RGBA,s.UNSIGNED_BYTE,Be):s.texImage2D(Ue+Ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Be);return Me}const ne={};ne[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),re(s.DEPTH_TEST),u.setFunc(ca),pt(!1),Te(Bm),re(s.CULL_FACE),ot(sr);function re(W){_[W]!==!0&&(s.enable(W),_[W]=!0)}function ye(W){_[W]!==!1&&(s.disable(W),_[W]=!1)}function Pe(W,Ue){return g[W]!==Ue?(s.bindFramebuffer(W,Ue),g[W]=Ue,W===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ue),W===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Re(W,Ue){let ge=E,ke=!1;if(W){ge=y.get(Ue),ge===void 0&&(ge=[],y.set(Ue,ge));const Be=W.textures;if(ge.length!==Be.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,Ke=Be.length;Me<Ke;Me++)ge[Me]=s.COLOR_ATTACHMENT0+Me;ge.length=Be.length,ke=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,ke=!0);ke&&s.drawBuffers(ge)}function lt(W){return C!==W?(s.useProgram(W),C=W,!0):!1}const qe={[ds]:s.FUNC_ADD,[vy]:s.FUNC_SUBTRACT,[_y]:s.FUNC_REVERSE_SUBTRACT};qe[yy]=s.MIN,qe[Sy]=s.MAX;const He={[My]:s.ZERO,[by]:s.ONE,[wy]:s.SRC_COLOR,[Gd]:s.SRC_ALPHA,[Ny]:s.SRC_ALPHA_SATURATE,[Cy]:s.DST_COLOR,[Ty]:s.DST_ALPHA,[Ey]:s.ONE_MINUS_SRC_COLOR,[jd]:s.ONE_MINUS_SRC_ALPHA,[Ry]:s.ONE_MINUS_DST_COLOR,[Ay]:s.ONE_MINUS_DST_ALPHA,[Py]:s.CONSTANT_COLOR,[Dy]:s.ONE_MINUS_CONSTANT_COLOR,[Ly]:s.CONSTANT_ALPHA,[Iy]:s.ONE_MINUS_CONSTANT_ALPHA};function ot(W,Ue,ge,ke,Be,Me,Ke,Ye,Vt,Ut){if(W===sr){S===!0&&(ye(s.BLEND),S=!1);return}if(S===!1&&(re(s.BLEND),S=!0),W!==gy){if(W!==v||Ut!==H){if((O!==ds||U!==ds)&&(s.blendEquation(s.FUNC_ADD),O=ds,U=ds),Ut)switch(W){case sa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vm:s.blendFunc(s.ONE,s.ONE);break;case Hm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Dt("WebGLState: Invalid blending: ",W);break}else switch(W){case sa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Hm:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gm:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",W);break}k=null,N=null,I=null,B=null,T.set(0,0,0),P=0,v=W,H=Ut}return}Be=Be||Ue,Me=Me||ge,Ke=Ke||ke,(Ue!==O||Be!==U)&&(s.blendEquationSeparate(qe[Ue],qe[Be]),O=Ue,U=Be),(ge!==k||ke!==N||Me!==I||Ke!==B)&&(s.blendFuncSeparate(He[ge],He[ke],He[Me],He[Ke]),k=ge,N=ke,I=Me,B=Ke),(Ye.equals(T)===!1||Vt!==P)&&(s.blendColor(Ye.r,Ye.g,Ye.b,Vt),T.copy(Ye),P=Vt),v=W,H=!1}function ct(W,Ue){W.side===Ui?ye(s.CULL_FACE):re(s.CULL_FACE);let ge=W.side===qn;Ue&&(ge=!ge),pt(ge),W.blending===sa&&W.transparent===!1?ot(sr):ot(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const ke=W.stencilWrite;h.setTest(ke),ke&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),bt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(W){V!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),V=W)}function Te(W){W!==my?(re(s.CULL_FACE),W!==G&&(W===Bm?s.cullFace(s.BACK):W===xy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),G=W}function St(W){W!==te&&(Q&&s.lineWidth(W),te=W)}function bt(W,Ue,ge){W?(re(s.POLYGON_OFFSET_FILL),(me!==Ue||Z!==ge)&&(me=Ue,Z=ge,u.getReversed()&&(Ue=-Ue),s.polygonOffset(Ue,ge))):ye(s.POLYGON_OFFSET_FILL)}function Rt(W){W?re(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function Ft(W){W===void 0&&(W=s.TEXTURE0+se-1),L!==W&&(s.activeTexture(W),L=W)}function $(W,Ue,ge){ge===void 0&&(L===null?ge=s.TEXTURE0+se-1:ge=L);let ke=w[ge];ke===void 0&&(ke={type:void 0,texture:void 0},w[ge]=ke),(ke.type!==W||ke.texture!==Ue)&&(L!==ge&&(s.activeTexture(ge),L=ge),s.bindTexture(W,Ue||ne[W]),ke.type=W,ke.texture=Ue)}function Zt(){const W=w[L];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function st(){try{s.compressedTexImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function b(){try{s.texSubImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function q(){try{s.texSubImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function ie(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function fe(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function be(){try{s.texStorage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Ne(){try{s.texStorage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function de(){try{s.texImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function ve(){try{s.texImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function ze(W){return M[W]!==void 0?M[W]:s.getParameter(W)}function Qe(W,Ue){M[W]!==Ue&&(s.pixelStorei(W,Ue),M[W]=Ue)}function Ie(W){_e.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),_e.copy(W))}function Oe(W){Se.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Se.copy(W))}function nt(W,Ue){let ge=p.get(Ue);ge===void 0&&(ge=new WeakMap,p.set(Ue,ge));let ke=ge.get(W);ke===void 0&&(ke=s.getUniformBlockIndex(Ue,W.name),ge.set(W,ke))}function at(W,Ue){const ke=p.get(Ue).get(W);m.get(Ue)!==ke&&(s.uniformBlockBinding(Ue,ke,W.__bindingPointIndex),m.set(Ue,ke))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},M={},L=null,w={},g={},y=new WeakMap,E=[],C=null,S=!1,v=null,O=null,k=null,N=null,U=null,I=null,B=null,T=new At(0,0,0),P=0,H=!1,V=null,G=null,te=null,me=null,Z=null,_e.set(0,0,s.canvas.width,s.canvas.height),Se.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:re,disable:ye,bindFramebuffer:Pe,drawBuffers:Re,useProgram:lt,setBlending:ot,setMaterial:ct,setFlipSided:pt,setCullFace:Te,setLineWidth:St,setPolygonOffset:bt,setScissorTest:Rt,activeTexture:Ft,bindTexture:$,unbindTexture:Zt,compressedTexImage2D:st,compressedTexImage3D:D,texImage2D:de,texImage3D:ve,pixelStorei:Qe,getParameter:ze,updateUBOMapping:nt,uniformBlockBinding:at,texStorage2D:be,texStorage3D:Ne,texSubImage2D:b,texSubImage3D:q,compressedTexSubImage2D:ie,compressedTexSubImage3D:fe,scissor:Ie,viewport:Oe,reset:ft}}function TE(s,e,t,r,o,l,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new xt,_=new WeakMap,M=new Set;let g;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,b){return E?new OffscreenCanvas(D,b):cc("canvas")}function S(D,b,q){let ie=1;const fe=st(D);if((fe.width>q||fe.height>q)&&(ie=q/Math.max(fe.width,fe.height)),ie<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const be=Math.floor(ie*fe.width),Ne=Math.floor(ie*fe.height);g===void 0&&(g=C(be,Ne));const de=b?C(be,Ne):g;return de.width=be,de.height=Ne,de.getContext("2d").drawImage(D,0,0,be,Ne),ht("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+be+"x"+Ne+")."),de}else return"data"in D&&ht("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),D;return D}function v(D){return D.generateMipmaps}function O(D){s.generateMipmap(D)}function k(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(D,b,q,ie,fe,be=!1){if(D!==null){if(s[D]!==void 0)return s[D];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ne;ie&&(Ne=e.get("EXT_texture_norm16"),Ne||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=b;if(b===s.RED&&(q===s.FLOAT&&(de=s.R32F),q===s.HALF_FLOAT&&(de=s.R16F),q===s.UNSIGNED_BYTE&&(de=s.R8),q===s.UNSIGNED_SHORT&&Ne&&(de=Ne.R16_EXT),q===s.SHORT&&Ne&&(de=Ne.R16_SNORM_EXT)),b===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.R8UI),q===s.UNSIGNED_SHORT&&(de=s.R16UI),q===s.UNSIGNED_INT&&(de=s.R32UI),q===s.BYTE&&(de=s.R8I),q===s.SHORT&&(de=s.R16I),q===s.INT&&(de=s.R32I)),b===s.RG&&(q===s.FLOAT&&(de=s.RG32F),q===s.HALF_FLOAT&&(de=s.RG16F),q===s.UNSIGNED_BYTE&&(de=s.RG8),q===s.UNSIGNED_SHORT&&Ne&&(de=Ne.RG16_EXT),q===s.SHORT&&Ne&&(de=Ne.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.RG8UI),q===s.UNSIGNED_SHORT&&(de=s.RG16UI),q===s.UNSIGNED_INT&&(de=s.RG32UI),q===s.BYTE&&(de=s.RG8I),q===s.SHORT&&(de=s.RG16I),q===s.INT&&(de=s.RG32I)),b===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.RGB8UI),q===s.UNSIGNED_SHORT&&(de=s.RGB16UI),q===s.UNSIGNED_INT&&(de=s.RGB32UI),q===s.BYTE&&(de=s.RGB8I),q===s.SHORT&&(de=s.RGB16I),q===s.INT&&(de=s.RGB32I)),b===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),q===s.UNSIGNED_INT&&(de=s.RGBA32UI),q===s.BYTE&&(de=s.RGBA8I),q===s.SHORT&&(de=s.RGBA16I),q===s.INT&&(de=s.RGBA32I)),b===s.RGB&&(q===s.UNSIGNED_SHORT&&Ne&&(de=Ne.RGB16_EXT),q===s.SHORT&&Ne&&(de=Ne.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(de=s.R11F_G11F_B10F)),b===s.RGBA){const ve=be?lc:Nt.getTransfer(fe);q===s.FLOAT&&(de=s.RGBA32F),q===s.HALF_FLOAT&&(de=s.RGBA16F),q===s.UNSIGNED_BYTE&&(de=ve===Bt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&Ne&&(de=Ne.RGBA16_EXT),q===s.SHORT&&Ne&&(de=Ne.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function U(D,b){let q;return D?b===null||b===Hi||b===ho?q=s.DEPTH24_STENCIL8:b===Fi?q=s.DEPTH32F_STENCIL8:b===fo&&(q=s.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Hi||b===ho?q=s.DEPTH_COMPONENT24:b===Fi?q=s.DEPTH_COMPONENT32F:b===fo&&(q=s.DEPTH_COMPONENT16),q}function I(D,b){return v(D)===!0||D.isFramebufferTexture&&D.minFilter!==bn&&D.minFilter!==Pn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function B(D){const b=D.target;b.removeEventListener("dispose",B),P(b),b.isVideoTexture&&_.delete(b),b.isHTMLTexture&&M.delete(b)}function T(D){const b=D.target;b.removeEventListener("dispose",T),V(b)}function P(D){const b=r.get(D);if(b.__webglInit===void 0)return;const q=D.source,ie=y.get(q);if(ie){const fe=ie[b.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&H(D),Object.keys(ie).length===0&&y.delete(q)}r.remove(D)}function H(D){const b=r.get(D);s.deleteTexture(b.__webglTexture);const q=D.source,ie=y.get(q);delete ie[b.__cacheKey],u.memory.textures--}function V(D){const b=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let fe=0;fe<b.__webglFramebuffer[ie].length;fe++)s.deleteFramebuffer(b.__webglFramebuffer[ie][fe]);else s.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)s.deleteFramebuffer(b.__webglFramebuffer[ie]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=D.textures;for(let ie=0,fe=q.length;ie<fe;ie++){const be=r.get(q[ie]);be.__webglTexture&&(s.deleteTexture(be.__webglTexture),u.memory.textures--),r.remove(q[ie])}r.remove(D)}let G=0;function te(){G=0}function me(){return G}function Z(D){G=D}function se(){const D=G;return D>=o.maxTextures&&ht("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),G+=1,D}function Q(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function Y(D,b){const q=r.get(D);if(D.isVideoTexture&&$(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const ie=D.image;if(ie===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(q,D,b);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+b)}function ae(D,b){const q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){ye(q,D,b);return}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+b)}function L(D,b){const q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){ye(q,D,b);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+b)}function w(D,b){const q=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&q.__version!==D.version){Pe(q,D,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+b)}const F={[uo]:s.REPEAT,[rr]:s.CLAMP_TO_EDGE,[Qd]:s.MIRRORED_REPEAT},xe={[bn]:s.NEAREST,[Fy]:s.NEAREST_MIPMAP_NEAREST,[Al]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[od]:s.LINEAR_MIPMAP_NEAREST,[hs]:s.LINEAR_MIPMAP_LINEAR},_e={[By]:s.NEVER,[Wy]:s.ALWAYS,[Vy]:s.LESS,[qf]:s.LEQUAL,[Hy]:s.EQUAL,[Yf]:s.GEQUAL,[Gy]:s.GREATER,[jy]:s.NOTEQUAL};function Se(D,b){if(b.type===Fi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Pn||b.magFilter===od||b.magFilter===Al||b.magFilter===hs||b.minFilter===Pn||b.minFilter===od||b.minFilter===Al||b.minFilter===hs)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,F[b.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,F[b.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,F[b.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,xe[b.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,xe[b.minFilter]),b.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,_e[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===bn||b.minFilter!==Al&&b.minFilter!==hs||b.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function X(D,b){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",B));const ie=b.source;let fe=y.get(ie);fe===void 0&&(fe={},y.set(ie,fe));const be=Q(b);if(be!==D.__cacheKey){fe[be]===void 0&&(fe[be]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,q=!0),fe[be].usedTimes++;const Ne=fe[D.__cacheKey];Ne!==void 0&&(fe[D.__cacheKey].usedTimes--,Ne.usedTimes===0&&H(b)),D.__cacheKey=be,D.__webglTexture=fe[be].texture}return q}function ne(D,b,q){return Math.floor(Math.floor(D/q)/b)}function re(D,b,q,ie){const be=D.updateRanges;if(be.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,q,ie,b.data);else{be.sort((Qe,Ie)=>Qe.start-Ie.start);let Ne=0;for(let Qe=1;Qe<be.length;Qe++){const Ie=be[Ne],Oe=be[Qe],nt=Ie.start+Ie.count,at=ne(Oe.start,b.width,4),ft=ne(Ie.start,b.width,4);Oe.start<=nt+1&&at===ft&&ne(Oe.start+Oe.count-1,b.width,4)===at?Ie.count=Math.max(Ie.count,Oe.start+Oe.count-Ie.start):(++Ne,be[Ne]=Oe)}be.length=Ne+1;const de=t.getParameter(s.UNPACK_ROW_LENGTH),ve=t.getParameter(s.UNPACK_SKIP_PIXELS),ze=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Qe=0,Ie=be.length;Qe<Ie;Qe++){const Oe=be[Qe],nt=Math.floor(Oe.start/4),at=Math.ceil(Oe.count/4),ft=nt%b.width,W=Math.floor(nt/b.width),Ue=at,ge=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ft),t.pixelStorei(s.UNPACK_SKIP_ROWS,W),t.texSubImage2D(s.TEXTURE_2D,0,ft,W,Ue,ge,q,ie,b.data)}D.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,de),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(s.UNPACK_SKIP_ROWS,ze)}}function ye(D,b,q){let ie=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ie=s.TEXTURE_3D);const fe=X(D,b),be=b.source;t.bindTexture(ie,D.__webglTexture,s.TEXTURE0+q);const Ne=r.get(be);if(be.version!==Ne.__version||fe===!0){if(t.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ge=Nt.getPrimaries(Nt.workingColorSpace),ke=b.colorSpace===Ur?null:Nt.getPrimaries(b.colorSpace),Be=b.colorSpace===Ur||ge===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let ve=S(b.image,!1,o.maxTextureSize);ve=Zt(b,ve);const ze=l.convert(b.format,b.colorSpace),Qe=l.convert(b.type);let Ie=N(b.internalFormat,ze,Qe,b.normalized,b.colorSpace,b.isVideoTexture);Se(ie,b);let Oe;const nt=b.mipmaps,at=b.isVideoTexture!==!0,ft=Ne.__version===void 0||fe===!0,W=be.dataReady,Ue=I(b,ve);if(b.isDepthTexture)Ie=U(b.format===ps,b.type),ft&&(at?t.texStorage2D(s.TEXTURE_2D,1,Ie,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,Ie,ve.width,ve.height,0,ze,Qe,null));else if(b.isDataTexture)if(nt.length>0){at&&ft&&t.texStorage2D(s.TEXTURE_2D,Ue,Ie,nt[0].width,nt[0].height);for(let ge=0,ke=nt.length;ge<ke;ge++)Oe=nt[ge],at?W&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Oe.width,Oe.height,ze,Qe,Oe.data):t.texImage2D(s.TEXTURE_2D,ge,Ie,Oe.width,Oe.height,0,ze,Qe,Oe.data);b.generateMipmaps=!1}else at?(ft&&t.texStorage2D(s.TEXTURE_2D,Ue,Ie,ve.width,ve.height),W&&re(b,ve,ze,Qe)):t.texImage2D(s.TEXTURE_2D,0,Ie,ve.width,ve.height,0,ze,Qe,ve.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){at&&ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Ie,nt[0].width,nt[0].height,ve.depth);for(let ge=0,ke=nt.length;ge<ke;ge++)if(Oe=nt[ge],b.format!==Ei)if(ze!==null)if(at){if(W)if(b.layerUpdates.size>0){const Be=M0(Oe.width,Oe.height,b.format,b.type);for(const Me of b.layerUpdates){const Ke=Oe.data.subarray(Me*Be/Oe.data.BYTES_PER_ELEMENT,(Me+1)*Be/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,Me,Oe.width,Oe.height,1,ze,Ke)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Oe.width,Oe.height,ve.depth,ze,Oe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,Ie,Oe.width,Oe.height,ve.depth,0,Oe.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Oe.width,Oe.height,ve.depth,ze,Qe,Oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ge,Ie,Oe.width,Oe.height,ve.depth,0,ze,Qe,Oe.data)}else{at&&ft&&t.texStorage2D(s.TEXTURE_2D,Ue,Ie,nt[0].width,nt[0].height);for(let ge=0,ke=nt.length;ge<ke;ge++)Oe=nt[ge],b.format!==Ei?ze!==null?at?W&&t.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Oe.width,Oe.height,ze,Oe.data):t.compressedTexImage2D(s.TEXTURE_2D,ge,Ie,Oe.width,Oe.height,0,Oe.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?W&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Oe.width,Oe.height,ze,Qe,Oe.data):t.texImage2D(s.TEXTURE_2D,ge,Ie,Oe.width,Oe.height,0,ze,Qe,Oe.data)}else if(b.isDataArrayTexture)if(at){if(ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Ie,ve.width,ve.height,ve.depth),W)if(b.layerUpdates.size>0){const ge=M0(ve.width,ve.height,b.format,b.type);for(const ke of b.layerUpdates){const Be=ve.data.subarray(ke*ge/ve.data.BYTES_PER_ELEMENT,(ke+1)*ge/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ke,ve.width,ve.height,1,ze,Qe,Be)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,ze,Qe,ve.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,ve.width,ve.height,ve.depth,0,ze,Qe,ve.data);else if(b.isData3DTexture)at?(ft&&t.texStorage3D(s.TEXTURE_3D,Ue,Ie,ve.width,ve.height,ve.depth),W&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,ze,Qe,ve.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,ve.width,ve.height,ve.depth,0,ze,Qe,ve.data);else if(b.isFramebufferTexture){if(ft)if(at)t.texStorage2D(s.TEXTURE_2D,Ue,Ie,ve.width,ve.height);else{let ge=ve.width,ke=ve.height;for(let Be=0;Be<Ue;Be++)t.texImage2D(s.TEXTURE_2D,Be,Ie,ge,ke,0,ze,Qe,null),ge>>=1,ke>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const ge=s.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),ve.parentNode!==ge){ge.appendChild(ve),M.add(b),ge.onpaint=ke=>{const Be=ke.changedElements;for(const Me of M)Be.includes(Me.image)&&(Me.needsUpdate=!0)},ge.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ve);else{const Be=s.RGBA,Me=s.RGBA,Ke=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Be,Me,Ke,ve)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(nt.length>0){if(at&&ft){const ge=st(nt[0]);t.texStorage2D(s.TEXTURE_2D,Ue,Ie,ge.width,ge.height)}for(let ge=0,ke=nt.length;ge<ke;ge++)Oe=nt[ge],at?W&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,ze,Qe,Oe):t.texImage2D(s.TEXTURE_2D,ge,Ie,ze,Qe,Oe);b.generateMipmaps=!1}else if(at){if(ft){const ge=st(ve);t.texStorage2D(s.TEXTURE_2D,Ue,Ie,ge.width,ge.height)}W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,Qe,ve)}else t.texImage2D(s.TEXTURE_2D,0,Ie,ze,Qe,ve);v(b)&&O(ie),Ne.__version=be.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Pe(D,b,q){if(b.image.length!==6)return;const ie=X(D,b),fe=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+q);const be=r.get(fe);if(fe.version!==be.__version||ie===!0){t.activeTexture(s.TEXTURE0+q);const Ne=Nt.getPrimaries(Nt.workingColorSpace),de=b.colorSpace===Ur?null:Nt.getPrimaries(b.colorSpace),ve=b.colorSpace===Ur||Ne===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const ze=b.isCompressedTexture||b.image[0].isCompressedTexture,Qe=b.image[0]&&b.image[0].isDataTexture,Ie=[];for(let Me=0;Me<6;Me++)!ze&&!Qe?Ie[Me]=S(b.image[Me],!0,o.maxCubemapSize):Ie[Me]=Qe?b.image[Me].image:b.image[Me],Ie[Me]=Zt(b,Ie[Me]);const Oe=Ie[0],nt=l.convert(b.format,b.colorSpace),at=l.convert(b.type),ft=N(b.internalFormat,nt,at,b.normalized,b.colorSpace),W=b.isVideoTexture!==!0,Ue=be.__version===void 0||ie===!0,ge=fe.dataReady;let ke=I(b,Oe);Se(s.TEXTURE_CUBE_MAP,b);let Be;if(ze){W&&Ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,ft,Oe.width,Oe.height);for(let Me=0;Me<6;Me++){Be=Ie[Me].mipmaps;for(let Ke=0;Ke<Be.length;Ke++){const Ye=Be[Ke];b.format!==Ei?nt!==null?W?ge&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke,0,0,Ye.width,Ye.height,nt,Ye.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke,ft,Ye.width,Ye.height,0,Ye.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke,0,0,Ye.width,Ye.height,nt,at,Ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke,ft,Ye.width,Ye.height,0,nt,at,Ye.data)}}}else{if(Be=b.mipmaps,W&&Ue){Be.length>0&&ke++;const Me=st(Ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,ft,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Qe){W?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ie[Me].width,Ie[Me].height,nt,at,Ie[Me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ft,Ie[Me].width,Ie[Me].height,0,nt,at,Ie[Me].data);for(let Ke=0;Ke<Be.length;Ke++){const Vt=Be[Ke].image[Me].image;W?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke+1,0,0,Vt.width,Vt.height,nt,at,Vt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke+1,ft,Vt.width,Vt.height,0,nt,at,Vt.data)}}else{W?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,nt,at,Ie[Me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ft,nt,at,Ie[Me]);for(let Ke=0;Ke<Be.length;Ke++){const Ye=Be[Ke];W?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke+1,0,0,nt,at,Ye.image[Me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ke+1,ft,nt,at,Ye.image[Me])}}}v(b)&&O(s.TEXTURE_CUBE_MAP),be.__version=fe.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Re(D,b,q,ie,fe,be){const Ne=l.convert(q.format,q.colorSpace),de=l.convert(q.type),ve=N(q.internalFormat,Ne,de,q.normalized,q.colorSpace),ze=r.get(b),Qe=r.get(q);if(Qe.__renderTarget=b,!ze.__hasExternalTextures){const Ie=Math.max(1,b.width>>be),Oe=Math.max(1,b.height>>be);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?t.texImage3D(fe,be,ve,Ie,Oe,b.depth,0,Ne,de,null):t.texImage2D(fe,be,ve,Ie,Oe,0,Ne,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Ft(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,fe,Qe.__webglTexture,0,Rt(b)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,fe,Qe.__webglTexture,be),t.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(D,b,q){if(s.bindRenderbuffer(s.RENDERBUFFER,D),b.depthBuffer){const ie=b.depthTexture,fe=ie&&ie.isDepthTexture?ie.type:null,be=U(b.stencilBuffer,fe),Ne=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ft(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt(b),be,b.width,b.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt(b),be,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,be,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ne,s.RENDERBUFFER,D)}else{const ie=b.textures;for(let fe=0;fe<ie.length;fe++){const be=ie[fe],Ne=l.convert(be.format,be.colorSpace),de=l.convert(be.type),ve=N(be.internalFormat,Ne,de,be.normalized,be.colorSpace);Ft(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt(b),ve,b.width,b.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt(b),ve,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ve,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qe(D,b,q){const ie=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(b.depthTexture);if(fe.__renderTarget=b,(!fe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ie){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),fe.__webglTexture===void 0){fe.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),Se(s.TEXTURE_CUBE_MAP,b.depthTexture);const ze=l.convert(b.depthTexture.format),Qe=l.convert(b.depthTexture.type);let Ie;b.depthTexture.format===lr?Ie=s.DEPTH_COMPONENT24:b.depthTexture.format===ps&&(Ie=s.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ie,b.width,b.height,0,ze,Qe,null)}}else Y(b.depthTexture,0);const be=fe.__webglTexture,Ne=Rt(b),de=ie?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,ve=b.depthTexture.format===ps?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===lr)Ft(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,de,be,0,Ne):s.framebufferTexture2D(s.FRAMEBUFFER,ve,de,be,0);else if(b.depthTexture.format===ps)Ft(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,de,be,0,Ne):s.framebufferTexture2D(s.FRAMEBUFFER,ve,de,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(D){const b=r.get(D),q=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const ie=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ie){const fe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ie.removeEventListener("dispose",fe)};ie.addEventListener("dispose",fe),b.__depthDisposeCallback=fe}b.__boundDepthTexture=ie}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let ie=0;ie<6;ie++)qe(b.__webglFramebuffer[ie],D,ie);else{const ie=D.texture.mipmaps;ie&&ie.length>0?qe(b.__webglFramebuffer[0],D,0):qe(b.__webglFramebuffer,D,0)}else if(q){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]===void 0)b.__webglDepthbuffer[ie]=s.createRenderbuffer(),lt(b.__webglDepthbuffer[ie],D,!1);else{const fe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=b.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,be),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,be)}}else{const ie=D.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),lt(b.__webglDepthbuffer,D,!1);else{const fe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,be),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,be)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(D,b,q){const ie=r.get(D);b!==void 0&&Re(ie.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&He(D)}function ct(D){const b=D.texture,q=r.get(D),ie=r.get(b);D.addEventListener("dispose",T);const fe=D.textures,be=D.isWebGLCubeRenderTarget===!0,Ne=fe.length>1;if(Ne||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=b.version,u.memory.textures++),be){q.__webglFramebuffer=[];for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[de]=[];for(let ve=0;ve<b.mipmaps.length;ve++)q.__webglFramebuffer[de][ve]=s.createFramebuffer()}else q.__webglFramebuffer[de]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)q.__webglFramebuffer[de]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Ne)for(let de=0,ve=fe.length;de<ve;de++){const ze=r.get(fe[de]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&Ft(D)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let de=0;de<fe.length;de++){const ve=fe[de];q.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[de]);const ze=l.convert(ve.format,ve.colorSpace),Qe=l.convert(ve.type),Ie=N(ve.internalFormat,ze,Qe,ve.normalized,ve.colorSpace,D.isXRRenderTarget===!0),Oe=Rt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,Ie,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,q.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(be){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),Se(s.TEXTURE_CUBE_MAP,b);for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)Re(q.__webglFramebuffer[de][ve],D,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else Re(q.__webglFramebuffer[de],D,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);v(b)&&O(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let de=0,ve=fe.length;de<ve;de++){const ze=fe[de],Qe=r.get(ze);let Ie=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ie=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Qe.__webglTexture),Se(Ie,ze),Re(q.__webglFramebuffer,D,ze,s.COLOR_ATTACHMENT0+de,Ie,0),v(ze)&&O(Ie)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(de=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,ie.__webglTexture),Se(de,b),b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)Re(q.__webglFramebuffer[ve],D,b,s.COLOR_ATTACHMENT0,de,ve);else Re(q.__webglFramebuffer,D,b,s.COLOR_ATTACHMENT0,de,0);v(b)&&O(de),t.unbindTexture()}D.depthBuffer&&He(D)}function pt(D){const b=D.textures;for(let q=0,ie=b.length;q<ie;q++){const fe=b[q];if(v(fe)){const be=k(D),Ne=r.get(fe).__webglTexture;t.bindTexture(be,Ne),O(be),t.unbindTexture()}}}const Te=[],St=[];function bt(D){if(D.samples>0){if(Ft(D)===!1){const b=D.textures,q=D.width,ie=D.height;let fe=s.COLOR_BUFFER_BIT;const be=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=r.get(D),de=b.length>1;if(de)for(let ze=0;ze<b.length;ze++)t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const ve=D.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let ze=0;ze<b.length;ze++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[ze]);const Qe=r.get(b[ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Qe,0)}s.blitFramebuffer(0,0,q,ie,0,0,q,ie,fe,s.NEAREST),m===!0&&(Te.length=0,St.length=0,Te.push(s.COLOR_ATTACHMENT0+ze),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Te.push(be),St.push(be),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,St)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let ze=0;ze<b.length;ze++){t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[ze]);const Qe=r.get(b[ze]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,Qe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const b=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Rt(D){return Math.min(o.maxSamples,D.samples)}function Ft(D){const b=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function $(D){const b=u.render.frame;_.get(D)!==b&&(_.set(D,b),D.update())}function Zt(D,b){const q=D.colorSpace,ie=D.format,fe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==oc&&q!==Ur&&(Nt.getTransfer(q)===Bt?(ie!==Ei||fe!==ni)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",q)),b}function st(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=se,this.resetTextureUnits=te,this.getTextureUnits=me,this.setTextureUnits=Z,this.setTexture2D=Y,this.setTexture2DArray=ae,this.setTexture3D=L,this.setTextureCube=w,this.rebindTextures=ot,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function AE(s,e){function t(r,o=Ur){let l;const u=Nt.getTransfer(o);if(r===ni)return s.UNSIGNED_BYTE;if(r===Hf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Gf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===fx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===hx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===ux)return s.BYTE;if(r===dx)return s.SHORT;if(r===fo)return s.UNSIGNED_SHORT;if(r===Vf)return s.INT;if(r===Hi)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===or)return s.HALF_FLOAT;if(r===px)return s.ALPHA;if(r===mx)return s.RGB;if(r===Ei)return s.RGBA;if(r===lr)return s.DEPTH_COMPONENT;if(r===ps)return s.DEPTH_STENCIL;if(r===xx)return s.RED;if(r===jf)return s.RED_INTEGER;if(r===xs)return s.RG;if(r===Wf)return s.RG_INTEGER;if(r===Xf)return s.RGBA_INTEGER;if(r===Jl||r===ec||r===tc||r===nc)if(u===Bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Jl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ec)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Jl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ec)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jd||r===ef||r===tf||r===nf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Jd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ef)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===tf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rf||r===sf||r===af||r===of||r===lf||r===sc||r===cf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===rf||r===sf)return u===Bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===af)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===of)return l.COMPRESSED_R11_EAC;if(r===lf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===sc)return l.COMPRESSED_RG11_EAC;if(r===cf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===uf||r===df||r===ff||r===hf||r===pf||r===mf||r===xf||r===gf||r===vf||r===_f||r===yf||r===Sf||r===Mf||r===bf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===uf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===df)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ff)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_f)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wf||r===Ef||r===Tf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===wf)return u===Bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ef)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Tf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Af||r===Cf||r===ac||r===Rf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Af)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Cf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ac)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ho?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const CE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class NE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new wx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Gi({vertexShader:CE,fragmentShader:RE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new yo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PE extends Vr{constructor(e,t){super();const r=this;let o=null,l=1,u=null,h="local-floor",m=1,p=null,_=null,M=null,g=null,y=null,E=null;const C=typeof XRWebGLBinding<"u",S=new NE,v={},O=t.getContextAttributes();let k=null,N=null;const U=[],I=[],B=new xt;let T=null;const P=new ti;P.viewport=new tn;const H=new ti;H.viewport=new tn;const V=[P,H],G=new OS;let te=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=U[X];return ne===void 0&&(ne=new pd,U[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=U[X];return ne===void 0&&(ne=new pd,U[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=U[X];return ne===void 0&&(ne=new pd,U[X]=ne),ne.getHandSpace()};function Z(X){const ne=I.indexOf(X.inputSource);if(ne===-1)return;const re=U[ne];re!==void 0&&(re.update(X.inputSource,X.frame,p||u),re.dispatchEvent({type:X.type,data:X.inputSource}))}function se(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",se),o.removeEventListener("inputsourceschange",Q);for(let X=0;X<U.length;X++){const ne=I[X];ne!==null&&(I[X]=null,U[X].disconnect(ne))}te=null,me=null,S.reset();for(const X in v)delete v[X];e.setRenderTarget(k),y=null,g=null,M=null,o=null,N=null,Se.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){l=X,r.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){h=X,r.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(X){p=X},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return M===null&&C&&(M=new XRWebGLBinding(o,t)),M},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(k=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",se),o.addEventListener("inputsourceschange",Q),O.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,ye=null,Pe=null;O.depth&&(Pe=O.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=O.stencil?ps:lr,ye=O.stencil?ho:Hi);const Re={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:l};M=this.getBinding(),g=M.createProjectionLayer(Re),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new Bi(g.textureWidth,g.textureHeight,{format:Ei,type:ni,depthTexture:new da(g.textureWidth,g.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const re={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,re),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Bi(y.framebufferWidth,y.framebufferHeight,{format:Ei,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(h),Se.setContext(o),Se.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Q(X){for(let ne=0;ne<X.removed.length;ne++){const re=X.removed[ne],ye=I.indexOf(re);ye>=0&&(I[ye]=null,U[ye].disconnect(re))}for(let ne=0;ne<X.added.length;ne++){const re=X.added[ne];let ye=I.indexOf(re);if(ye===-1){for(let Re=0;Re<U.length;Re++)if(Re>=I.length){I.push(re),ye=Re;break}else if(I[Re]===null){I[Re]=re,ye=Re;break}if(ye===-1)break}const Pe=U[ye];Pe&&Pe.connect(re)}}const Y=new ee,ae=new ee;function L(X,ne,re){Y.setFromMatrixPosition(ne.matrixWorld),ae.setFromMatrixPosition(re.matrixWorld);const ye=Y.distanceTo(ae),Pe=ne.projectionMatrix.elements,Re=re.projectionMatrix.elements,lt=Pe[14]/(Pe[10]-1),qe=Pe[14]/(Pe[10]+1),He=(Pe[9]+1)/Pe[5],ot=(Pe[9]-1)/Pe[5],ct=(Pe[8]-1)/Pe[0],pt=(Re[8]+1)/Re[0],Te=lt*ct,St=lt*pt,bt=ye/(-ct+pt),Rt=bt*-ct;if(ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Rt),X.translateZ(bt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Pe[10]===-1)X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Ft=lt+bt,$=qe+bt,Zt=Te-Rt,st=St+(ye-Rt),D=He*qe/$*Ft,b=ot*qe/$*Ft;X.projectionMatrix.makePerspective(Zt,st,D,b,Ft,$),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function w(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let ne=X.near,re=X.far;S.texture!==null&&(S.depthNear>0&&(ne=S.depthNear),S.depthFar>0&&(re=S.depthFar)),G.near=H.near=P.near=ne,G.far=H.far=P.far=re,(te!==G.near||me!==G.far)&&(o.updateRenderState({depthNear:G.near,depthFar:G.far}),te=G.near,me=G.far),G.layers.mask=X.layers.mask|6,P.layers.mask=G.layers.mask&-5,H.layers.mask=G.layers.mask&-3;const ye=X.parent,Pe=G.cameras;w(G,ye);for(let Re=0;Re<Pe.length;Re++)w(Pe[Re],ye);Pe.length===2?L(G,P,H):G.projectionMatrix.copy(P.projectionMatrix),F(X,G,ye)};function F(X,ne,re){re===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(re.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=uc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(X){m=X,g!==null&&(g.fixedFoveation=X),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=X)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(G)},this.getCameraTexture=function(X){return v[X]};let xe=null;function _e(X,ne){if(_=ne.getViewerPose(p||u),E=ne,_!==null){const re=_.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let ye=!1;re.length!==G.cameras.length&&(G.cameras.length=0,ye=!0);for(let qe=0;qe<re.length;qe++){const He=re[qe];let ot=null;if(y!==null)ot=y.getViewport(He);else{const pt=M.getViewSubImage(g,He);ot=pt.viewport,qe===0&&(e.setRenderTargetTextures(N,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(N))}let ct=V[qe];ct===void 0&&(ct=new ti,ct.layers.enable(qe),ct.viewport=new tn,V[qe]=ct),ct.matrix.fromArray(He.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(He.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(ot.x,ot.y,ot.width,ot.height),qe===0&&(G.matrix.copy(ct.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ye===!0&&G.cameras.push(ct)}const Pe=o.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){M=r.getBinding();const qe=M.getDepthInformation(re[0]);qe&&qe.isValid&&qe.texture&&S.init(qe,o.renderState)}if(Pe&&Pe.includes("camera-access")&&C){e.state.unbindTexture(),M=r.getBinding();for(let qe=0;qe<re.length;qe++){const He=re[qe].camera;if(He){let ot=v[He];ot||(ot=new wx,v[He]=ot);const ct=M.getCameraImage(He);ot.sourceTexture=ct}}}}for(let re=0;re<U.length;re++){const ye=I[re],Pe=U[re];ye!==null&&Pe!==void 0&&Pe.update(ye,ne,p||u)}xe&&xe(X,ne),ne.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ne}),E=null}const Se=new Cx;Se.setAnimationLoop(_e),this.setAnimationLoop=function(X){xe=X},this.dispose=function(){}}}const DE=new Kt,Ux=new yt;Ux.set(-1,0,0,0,1,0,0,0,1);function LE(s,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,Ex(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,O,k,N){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(S,v):v.isMeshLambertMaterial?(l(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(S,v),M(S,v)):v.isMeshPhongMaterial?(l(S,v),_(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(S,v),g(S,v),v.isMeshPhysicalMaterial&&y(S,v,N)):v.isMeshMatcapMaterial?(l(S,v),E(S,v)):v.isMeshDepthMaterial?l(S,v):v.isMeshDistanceMaterial?(l(S,v),C(S,v)):v.isMeshNormalMaterial?l(S,v):v.isLineBasicMaterial?(u(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?m(S,v,O,k):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===qn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===qn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const O=e.get(v),k=O.envMap,N=O.envMapRotation;k&&(S.envMap.value=k,S.envMapRotation.value.setFromMatrix4(DE.makeRotationFromEuler(N)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Ux),S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function u(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,O,k){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*O,S.scale.value=k*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function _(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function M(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function g(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,O){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===qn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function C(S,v){const O=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function IE(s,e,t,r){let o={},l={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,U){const I=U.program;r.uniformBlockBinding(N,I)}function p(N,U){let I=o[N.id];I===void 0&&(S(N),I=_(N),o[N.id]=I,N.addEventListener("dispose",O));const B=U.program;r.updateUBOMapping(N,B);const T=e.render.frame;l[N.id]!==T&&(g(N),l[N.id]=T)}function _(N){const U=M();N.__bindingPointIndex=U;const I=s.createBuffer(),B=N.__size,T=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,I),s.bufferData(s.UNIFORM_BUFFER,B,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,I),I}function M(){for(let N=0;N<h;N++)if(u.indexOf(N)===-1)return u.push(N),N;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){const U=o[N.id],I=N.uniforms,B=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let T=0,P=I.length;T<P;T++){const H=I[T];if(Array.isArray(H))for(let V=0,G=H.length;V<G;V++)y(H[V],T,V,B);else y(H,T,0,B)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(N,U,I,B){if(C(N,U,I,B)===!0){const T=N.__offset,P=N.value;if(Array.isArray(P)){let H=0;for(let V=0;V<P.length;V++){const G=P[V],te=v(G);E(G,N.__data,H),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(H+=te.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(P,N.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,N.__data)}}function E(N,U,I){typeof N=="number"||typeof N=="boolean"?U[0]=N:N.isMatrix3?(U[0]=N.elements[0],U[1]=N.elements[1],U[2]=N.elements[2],U[3]=0,U[4]=N.elements[3],U[5]=N.elements[4],U[6]=N.elements[5],U[7]=0,U[8]=N.elements[6],U[9]=N.elements[7],U[10]=N.elements[8],U[11]=0):ArrayBuffer.isView(N)?U.set(new N.constructor(N.buffer,N.byteOffset,U.length)):N.toArray(U,I)}function C(N,U,I,B){const T=N.value,P=U+"_"+I;if(B[P]===void 0)return typeof T=="number"||typeof T=="boolean"?B[P]=T:ArrayBuffer.isView(T)?B[P]=T.slice():B[P]=T.clone(),!0;{const H=B[P];if(typeof T=="number"||typeof T=="boolean"){if(H!==T)return B[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(H.equals(T)===!1)return H.copy(T),!0}}return!1}function S(N){const U=N.uniforms;let I=0;const B=16;for(let P=0,H=U.length;P<H;P++){const V=Array.isArray(U[P])?U[P]:[U[P]];for(let G=0,te=V.length;G<te;G++){const me=V[G],Z=Array.isArray(me.value)?me.value:[me.value];for(let se=0,Q=Z.length;se<Q;se++){const Y=Z[se],ae=v(Y),L=I%B,w=L%ae.boundary,F=L+w;I+=w,F!==0&&B-F<ae.storage&&(I+=B-F),me.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),me.__offset=I,I+=ae.storage}}}const T=I%B;return T>0&&(I+=B-T),N.__size=I,N.__cache={},this}function v(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(U.boundary=16,U.storage=N.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",N),U}function O(N){const U=N.target;U.removeEventListener("dispose",O);const I=u.indexOf(U.__bindingPointIndex);u.splice(I,1),s.deleteBuffer(o[U.id]),delete o[U.id],delete l[U.id]}function k(){for(const N in o)s.deleteBuffer(o[N]);u=[],o={},l={}}return{bind:m,update:p,dispose:k}}const UE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function kE(){return Li===null&&(Li=new gS(UE,16,16,xs,or),Li.name="DFG_LUT",Li.minFilter=Pn,Li.magFilter=Pn,Li.wrapS=rr,Li.wrapT=rr,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class FE{constructor(e={}){const{canvas:t=qy(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:g=!1,outputBufferType:y=ni}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const C=y,S=new Set([Xf,Wf,jf]),v=new Set([ni,Hi,fo,ho,Hf,Gf]),O=new Uint32Array(4),k=new Int32Array(4),N=new ee;let U=null,I=null;const B=[],T=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let V=!1,G=null,te=null,me=null,Z=null;this._outputColorSpace=di;let se=0,Q=0,Y=null,ae=-1,L=null;const w=new tn,F=new tn;let xe=null;const _e=new At(0);let Se=0,X=t.width,ne=t.height,re=1,ye=null,Pe=null;const Re=new tn(0,0,X,ne),lt=new tn(0,0,X,ne);let qe=!1;const He=new Qf;let ot=!1,ct=!1;const pt=new Kt,Te=new ee,St=new tn,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function Ft(){return Y===null?re:1}let $=r;function Zt(R,J){return t.getContext(R,J)}try{const R={alpha:!0,depth:o,stencil:l,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:M};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zf}`),t.addEventListener("webglcontextlost",Vt,!1),t.addEventListener("webglcontextrestored",Ut,!1),t.addEventListener("webglcontextcreationerror",wn,!1),$===null){const J="webgl2";if($=Zt(J,R),$===null)throw Zt(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Dt("WebGLRenderer: "+R.message),R}let st,D,b,q,ie,fe,be,Ne,de,ve,ze,Qe,Ie,Oe,nt,at,ft,W,Ue,ge,ke,Be,Me;function Ke(){st=new kb($),st.init(),ke=new AE($,st),D=new Cb($,st,e,ke),b=new EE($,st),D.reversedDepthBuffer&&g&&b.buffers.depth.setReversed(!0),te=$.createFramebuffer(),me=$.createFramebuffer(),Z=$.createFramebuffer(),q=new zb($),ie=new dE,fe=new TE($,st,b,ie,D,ke,q),be=new Ub(H),Ne=new GS($),Be=new Tb($,Ne),de=new Fb($,Ne,q,Be),ve=new Vb($,de,Ne,Be,q),W=new Bb($,D,fe),nt=new Rb(ie),ze=new uE(H,be,st,D,Be,nt),Qe=new LE(H,ie),Ie=new hE,Oe=new _E(st),ft=new Eb(H,be,b,ve,E,m),at=new wE(H,ve,D),Me=new IE($,q,D,b),Ue=new Ab($,st,q),ge=new Ob($,st,q),q.programs=ze.programs,H.capabilities=D,H.extensions=st,H.properties=ie,H.renderLists=Ie,H.shadowMap=at,H.state=b,H.info=q}Ke(),C!==ni&&(P=new Gb(C,t.width,t.height,h,o,l));const Ye=new PE(H,$);this.xr=Ye,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const R=st.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=st.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(R){R!==void 0&&(re=R,this.setSize(X,ne,!1))},this.getSize=function(R){return R.set(X,ne)},this.setSize=function(R,J,he=!0){if(Ye.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,ne=J,t.width=Math.floor(R*re),t.height=Math.floor(J*re),he===!0&&(t.style.width=R+"px",t.style.height=J+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,R,J)},this.getDrawingBufferSize=function(R){return R.set(X*re,ne*re).floor()},this.setDrawingBufferSize=function(R,J,he){X=R,ne=J,re=he,t.width=Math.floor(R*he),t.height=Math.floor(J*he),this.setViewport(0,0,R,J)},this.setEffects=function(R){if(C===ni){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let J=0;J<R.length;J++)if(R[J].isOutputPass===!0){ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(Re)},this.setViewport=function(R,J,he,ce){R.isVector4?Re.set(R.x,R.y,R.z,R.w):Re.set(R,J,he,ce),b.viewport(w.copy(Re).multiplyScalar(re).round())},this.getScissor=function(R){return R.copy(lt)},this.setScissor=function(R,J,he,ce){R.isVector4?lt.set(R.x,R.y,R.z,R.w):lt.set(R,J,he,ce),b.scissor(F.copy(lt).multiplyScalar(re).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(R){b.setScissorTest(qe=R)},this.setOpaqueSort=function(R){ye=R},this.setTransparentSort=function(R){Pe=R},this.getClearColor=function(R){return R.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(R=!0,J=!0,he=!0){let ce=0;if(R){let le=!1;if(Y!==null){const Fe=Y.texture.format;le=S.has(Fe)}if(le){const Fe=Y.texture.type,We=v.has(Fe),Le=ft.getClearColor(),Je=ft.getClearAlpha(),rt=Le.r,vt=Le.g,_t=Le.b;We?(O[0]=rt,O[1]=vt,O[2]=_t,O[3]=Je,$.clearBufferuiv($.COLOR,0,O)):(k[0]=rt,k[1]=vt,k[2]=_t,k[3]=Je,$.clearBufferiv($.COLOR,0,k))}else ce|=$.COLOR_BUFFER_BIT}J&&(ce|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ce|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&$.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),G=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Vt,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",wn,!1),ft.dispose(),Ie.dispose(),Oe.dispose(),ie.dispose(),be.dispose(),ve.dispose(),Be.dispose(),Me.dispose(),ze.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",So),Ye.removeEventListener("sessionend",Mo),Ln.stop()};function Vt(R){R.preventDefault(),Ym("WebGLRenderer: Context Lost."),V=!0}function Ut(){Ym("WebGLRenderer: Context Restored."),V=!1;const R=q.autoReset,J=at.enabled,he=at.autoUpdate,ce=at.needsUpdate,le=at.type;Ke(),q.autoReset=R,at.enabled=J,at.autoUpdate=he,at.needsUpdate=ce,at.type=le}function wn(R){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ii(R){const J=R.target;J.removeEventListener("dispose",ii),Hr(J)}function Hr(R){gs(R),ie.remove(R)}function gs(R){const J=ie.get(R).programs;J!==void 0&&(J.forEach(function(he){ze.releaseProgram(he)}),R.isShaderMaterial&&ze.releaseShaderCache(R))}this.renderBufferDirect=function(R,J,he,ce,le,Fe){J===null&&(J=bt);const We=le.isMesh&&le.matrixWorld.determinantAffine()<0,Le=Qt(R,J,he,ce,le);b.setMaterial(ce,We);let Je=he.index,rt=1;if(ce.wireframe===!0){if(Je=de.getWireframeAttribute(he),Je===void 0)return;rt=2}const vt=he.drawRange,_t=he.attributes.position;let tt=vt.start*rt,Pt=(vt.start+vt.count)*rt;Fe!==null&&(tt=Math.max(tt,Fe.start*rt),Pt=Math.min(Pt,(Fe.start+Fe.count)*rt)),Je!==null?(tt=Math.max(tt,0),Pt=Math.min(Pt,Je.count)):_t!=null&&(tt=Math.max(tt,0),Pt=Math.min(Pt,_t.count));const Gt=Pt-tt;if(Gt<0||Gt===1/0)return;Be.setup(le,ce,Le,he,Je);let Yt,Ot=Ue;if(Je!==null&&(Yt=Ne.get(Je),Ot=ge,Ot.setIndex(Yt)),le.isMesh)ce.wireframe===!0?(b.setLineWidth(ce.wireframeLinewidth*Ft()),Ot.setMode($.LINES)):Ot.setMode($.TRIANGLES);else if(le.isLine){let an=ce.linewidth;an===void 0&&(an=1),b.setLineWidth(an*Ft()),le.isLineSegments?Ot.setMode($.LINES):le.isLineLoop?Ot.setMode($.LINE_LOOP):Ot.setMode($.LINE_STRIP)}else le.isPoints?Ot.setMode($.POINTS):le.isSprite&&Ot.setMode($.TRIANGLES);if(le.isBatchedMesh)if(st.get("WEBGL_multi_draw"))Ot.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const an=le._multiDrawStarts,Ge=le._multiDrawCounts,yn=le._multiDrawCount,wt=Je?Ne.get(Je).bytesPerElement:1,Fn=ie.get(ce).currentProgram.getUniforms();for(let On=0;On<yn;On++)Fn.setValue($,"_gl_DrawID",On),Ot.render(an[On]/wt,Ge[On])}else if(le.isInstancedMesh)Ot.renderInstances(tt,Gt,le.count);else if(he.isInstancedBufferGeometry){const an=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Ge=Math.min(he.instanceCount,an);Ot.renderInstances(tt,Gt,Ge)}else Ot.render(tt,Gt)};function Gr(R,J,he){R.transparent===!0&&R.side===Ui&&R.forceSinglePass===!1?(R.side=qn,R.needsUpdate=!0,Xr(R,J,he),R.side=Or,R.needsUpdate=!0,Xr(R,J,he),R.side=Ui):Xr(R,J,he)}this.compile=function(R,J,he=null){he===null&&(he=R),I=Oe.get(he),I.init(J),T.push(I),he.traverseVisible(function(le){le.isLight&&le.layers.test(J.layers)&&(I.pushLight(le),le.castShadow&&I.pushShadow(le))}),R!==he&&R.traverseVisible(function(le){le.isLight&&le.layers.test(J.layers)&&(I.pushLight(le),le.castShadow&&I.pushShadow(le))}),I.setupLights();const ce=new Set;return R.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const Fe=le.material;if(Fe)if(Array.isArray(Fe))for(let We=0;We<Fe.length;We++){const Le=Fe[We];Gr(Le,he,le),ce.add(Le)}else Gr(Fe,he,le),ce.add(Fe)}),I=T.pop(),ce},this.compileAsync=function(R,J,he=null){const ce=this.compile(R,J,he);return new Promise(le=>{function Fe(){if(ce.forEach(function(We){ie.get(We).currentProgram.isReady()&&ce.delete(We)}),ce.size===0){le(R);return}setTimeout(Fe,10)}st.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let jr=null;function Sc(R){jr&&jr(R)}function So(){Ln.stop()}function Mo(){Ln.start()}const Ln=new Cx;Ln.setAnimationLoop(Sc),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(R){jr=R,Ye.setAnimationLoop(R),R===null?Ln.stop():Ln.start()},Ye.addEventListener("sessionstart",So),Ye.addEventListener("sessionend",Mo),this.render=function(R,J){if(J!==void 0&&J.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;G!==null&&G.renderStart(R,J);const he=Ye.enabled===!0&&Ye.isPresenting===!0,ce=P!==null&&(Y===null||he)&&P.begin(H,Y);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(J),J=Ye.getCamera()),R.isScene===!0&&R.onBeforeRender(H,R,J,Y),I=Oe.get(R,T.length),I.init(J),I.state.textureUnits=fe.getTextureUnits(),T.push(I),pt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),He.setFromProjectionMatrix(pt,Oi,J.reversedDepth),ct=this.localClippingEnabled,ot=nt.init(this.clippingPlanes,ct),U=Ie.get(R,B.length),U.init(),B.push(U),Ye.enabled===!0&&Ye.isPresenting===!0){const We=H.xr.getDepthSensingMesh();We!==null&&vs(We,J,-1/0,H.sortObjects)}vs(R,J,0,H.sortObjects),U.finish(),H.sortObjects===!0&&U.sort(ye,Pe,J.reversedDepth),Rt=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,Rt&&ft.addToRenderList(U,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&nt.beginShadows();const le=I.state.shadowsArray;if(at.render(le,R,J),ot===!0&&nt.endShadows(),(ce&&P.hasRenderPass())===!1){const We=U.opaque,Le=U.transmissive;if(I.setupLights(),J.isArrayCamera){const Je=J.cameras;if(Le.length>0)for(let rt=0,vt=Je.length;rt<vt;rt++){const _t=Je[rt];bo(We,Le,R,_t)}Rt&&ft.render(R);for(let rt=0,vt=Je.length;rt<vt;rt++){const _t=Je[rt];ma(U,R,_t,_t.viewport)}}else Le.length>0&&bo(We,Le,R,J),Rt&&ft.render(R),ma(U,R,J)}Y!==null&&Q===0&&(fe.updateMultisampleRenderTarget(Y),fe.updateRenderTargetMipmap(Y)),ce&&P.end(H),R.isScene===!0&&R.onAfterRender(H,R,J),Be.resetDefaultState(),ae=-1,L=null,T.pop(),T.length>0?(I=T[T.length-1],fe.setTextureUnits(I.state.textureUnits),ot===!0&&nt.setGlobalState(H.clippingPlanes,I.state.camera)):I=null,B.pop(),B.length>0?U=B[B.length-1]:U=null,G!==null&&G.renderEnd()};function vs(R,J,he,ce){if(R.visible===!1)return;if(R.layers.test(J.layers)){if(R.isGroup)he=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(J);else if(R.isLightProbeGrid)I.pushLightProbeGrid(R);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||He.intersectsSprite(R)){ce&&St.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pt);const We=ve.update(R),Le=R.material;Le.visible&&U.push(R,We,Le,he,St.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||He.intersectsObject(R))){const We=ve.update(R),Le=R.material;if(ce&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),St.copy(R.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),St.copy(We.boundingSphere.center)),St.applyMatrix4(R.matrixWorld).applyMatrix4(pt)),Array.isArray(Le)){const Je=We.groups;for(let rt=0,vt=Je.length;rt<vt;rt++){const _t=Je[rt],tt=Le[_t.materialIndex];tt&&tt.visible&&U.push(R,We,tt,he,St.z,_t)}}else Le.visible&&U.push(R,We,Le,he,St.z,null)}}const Fe=R.children;for(let We=0,Le=Fe.length;We<Le;We++)vs(Fe[We],J,he,ce)}function ma(R,J,he,ce){const{opaque:le,transmissive:Fe,transparent:We}=R;I.setupLightsView(he),ot===!0&&nt.setGlobalState(H.clippingPlanes,he),ce&&b.viewport(w.copy(ce)),le.length>0&&Wr(le,J,he),Fe.length>0&&Wr(Fe,J,he),We.length>0&&Wr(We,J,he),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function bo(R,J,he,ce){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ce.id]===void 0){const tt=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ce.id]=new Bi(1,1,{generateMipmaps:!0,type:tt?or:ni,minFilter:hs,samples:Math.max(4,D.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const Fe=I.state.transmissionRenderTarget[ce.id],We=ce.viewport||w;Fe.setSize(We.z*H.transmissionResolutionScale,We.w*H.transmissionResolutionScale);const Le=H.getRenderTarget(),Je=H.getActiveCubeFace(),rt=H.getActiveMipmapLevel();H.setRenderTarget(Fe),H.getClearColor(_e),Se=H.getClearAlpha(),Se<1&&H.setClearColor(16777215,.5),H.clear(),Rt&&ft.render(he);const vt=H.toneMapping;H.toneMapping=zi;const _t=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),I.setupLightsView(ce),ot===!0&&nt.setGlobalState(H.clippingPlanes,ce),Wr(R,he,ce),fe.updateMultisampleRenderTarget(Fe),fe.updateRenderTargetMipmap(Fe),st.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Pt=0,Gt=J.length;Pt<Gt;Pt++){const Yt=J[Pt],{object:Ot,geometry:an,material:Ge,group:yn}=Yt;if(Ge.side===Ui&&Ot.layers.test(ce.layers)){const wt=Ge.side;Ge.side=qn,Ge.needsUpdate=!0,xa(Ot,he,ce,an,Ge,yn),Ge.side=wt,Ge.needsUpdate=!0,tt=!0}}tt===!0&&(fe.updateMultisampleRenderTarget(Fe),fe.updateRenderTargetMipmap(Fe))}H.setRenderTarget(Le,Je,rt),H.setClearColor(_e,Se),_t!==void 0&&(ce.viewport=_t),H.toneMapping=vt}function Wr(R,J,he){const ce=J.isScene===!0?J.overrideMaterial:null;for(let le=0,Fe=R.length;le<Fe;le++){const We=R[le],{object:Le,geometry:Je,group:rt}=We;let vt=We.material;vt.allowOverride===!0&&ce!==null&&(vt=ce),Le.layers.test(he.layers)&&xa(Le,J,he,Je,vt,rt)}}function xa(R,J,he,ce,le,Fe){R.onBeforeRender(H,J,he,ce,le,Fe),R.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),le.onBeforeRender(H,J,he,ce,R,Fe),le.transparent===!0&&le.side===Ui&&le.forceSinglePass===!1?(le.side=qn,le.needsUpdate=!0,H.renderBufferDirect(he,J,ce,le,R,Fe),le.side=Or,le.needsUpdate=!0,H.renderBufferDirect(he,J,ce,le,R,Fe),le.side=Ui):H.renderBufferDirect(he,J,ce,le,R,Fe),R.onAfterRender(H,J,he,ce,le,Fe)}function Xr(R,J,he){J.isScene!==!0&&(J=bt);const ce=ie.get(R),le=I.state.lights,Fe=I.state.shadowsArray,We=le.state.version,Le=ze.getParameters(R,le.state,Fe,J,he,I.state.lightProbeGridArray),Je=ze.getProgramCacheKey(Le);let rt=ce.programs;ce.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?J.environment:null,ce.fog=J.fog;const vt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ce.envMap=be.get(R.envMap||ce.environment,vt),ce.envMapRotation=ce.environment!==null&&R.envMap===null?J.environmentRotation:R.envMapRotation,rt===void 0&&(R.addEventListener("dispose",ii),rt=new Map,ce.programs=rt);let _t=rt.get(Je);if(_t!==void 0){if(ce.currentProgram===_t&&ce.lightsStateVersion===We)return wo(R,Le),_t}else Le.uniforms=ze.getUniforms(R),G!==null&&R.isNodeMaterial&&G.build(R,he,Le),R.onBeforeCompile(Le,H),_t=ze.acquireProgram(Le,Je),rt.set(Je,_t),ce.uniforms=Le.uniforms;const tt=ce.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(tt.clippingPlanes=nt.uniform),wo(R,Le),ce.needsLights=va(R),ce.lightsStateVersion=We,ce.needsLights&&(tt.ambientLightColor.value=le.state.ambient,tt.lightProbe.value=le.state.probe,tt.directionalLights.value=le.state.directional,tt.directionalLightShadows.value=le.state.directionalShadow,tt.spotLights.value=le.state.spot,tt.spotLightShadows.value=le.state.spotShadow,tt.rectAreaLights.value=le.state.rectArea,tt.ltc_1.value=le.state.rectAreaLTC1,tt.ltc_2.value=le.state.rectAreaLTC2,tt.pointLights.value=le.state.point,tt.pointLightShadows.value=le.state.pointShadow,tt.hemisphereLights.value=le.state.hemi,tt.directionalShadowMatrix.value=le.state.directionalShadowMatrix,tt.spotLightMatrix.value=le.state.spotLightMatrix,tt.spotLightMap.value=le.state.spotLightMap,tt.pointShadowMatrix.value=le.state.pointShadowMatrix),ce.lightProbeGrid=I.state.lightProbeGridArray.length>0,ce.currentProgram=_t,ce.uniformsList=null,_t}function ga(R){if(R.uniformsList===null){const J=R.currentProgram.getUniforms();R.uniformsList=rc.seqWithValue(J.seq,R.uniforms)}return R.uniformsList}function wo(R,J){const he=ie.get(R);he.outputColorSpace=J.outputColorSpace,he.batching=J.batching,he.batchingColor=J.batchingColor,he.instancing=J.instancing,he.instancingColor=J.instancingColor,he.instancingMorph=J.instancingMorph,he.skinning=J.skinning,he.morphTargets=J.morphTargets,he.morphNormals=J.morphNormals,he.morphColors=J.morphColors,he.morphTargetsCount=J.morphTargetsCount,he.numClippingPlanes=J.numClippingPlanes,he.numIntersection=J.numClipIntersection,he.vertexAlphas=J.vertexAlphas,he.vertexTangents=J.vertexTangents,he.toneMapping=J.toneMapping}function Mc(R,J){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;N.setFromMatrixPosition(J.matrixWorld);for(let he=0,ce=R.length;he<ce;he++){const le=R[he];if(le.texture!==null&&le.boundingBox.containsPoint(N))return le}return null}function Qt(R,J,he,ce,le){J.isScene!==!0&&(J=bt),fe.resetTextureUnits();const Fe=J.fog,We=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?J.environment:null,Le=Y===null?H.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Nt.workingColorSpace,Je=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,rt=be.get(ce.envMap||We,Je),vt=ce.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,_t=!!he.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),tt=!!he.morphAttributes.position,Pt=!!he.morphAttributes.normal,Gt=!!he.morphAttributes.color;let Yt=zi;ce.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Yt=H.toneMapping);const Ot=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,an=Ot!==void 0?Ot.length:0,Ge=ie.get(ce),yn=I.state.lights;if(ot===!0&&(ct===!0||R!==L)){const zt=R===L&&ce.id===ae;nt.setState(ce,R,zt)}let wt=!1;ce.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==yn.state.version||Ge.outputColorSpace!==Le||le.isBatchedMesh&&Ge.batching===!1||!le.isBatchedMesh&&Ge.batching===!0||le.isBatchedMesh&&Ge.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&Ge.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&Ge.instancing===!1||!le.isInstancedMesh&&Ge.instancing===!0||le.isSkinnedMesh&&Ge.skinning===!1||!le.isSkinnedMesh&&Ge.skinning===!0||le.isInstancedMesh&&Ge.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&Ge.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&Ge.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&Ge.instancingMorph===!1&&le.morphTexture!==null||Ge.envMap!==rt||ce.fog===!0&&Ge.fog!==Fe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==nt.numPlanes||Ge.numIntersection!==nt.numIntersection)||Ge.vertexAlphas!==vt||Ge.vertexTangents!==_t||Ge.morphTargets!==tt||Ge.morphNormals!==Pt||Ge.morphColors!==Gt||Ge.toneMapping!==Yt||Ge.morphTargetsCount!==an||!!Ge.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(wt=!0):(wt=!0,Ge.__version=ce.version);let Fn=Ge.currentProgram;wt===!0&&(Fn=Xr(ce,J,le),G&&ce.isNodeMaterial&&G.onUpdateProgram(ce,Fn,Ge));let On=!1,Et=!1,ji=!1;const kt=Fn.getUniforms(),Wt=Ge.uniforms;if(b.useProgram(Fn.program)&&(On=!0,Et=!0,ji=!0),ce.id!==ae&&(ae=ce.id,Et=!0),Ge.needsLights){const zt=Mc(I.state.lightProbeGridArray,le);Ge.lightProbeGrid!==zt&&(Ge.lightProbeGrid=zt,Et=!0)}if(On||L!==R){b.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),kt.setValue($,"projectionMatrix",R.projectionMatrix),kt.setValue($,"viewMatrix",R.matrixWorldInverse);const pi=kt.map.cameraPosition;pi!==void 0&&pi.setValue($,Te.setFromMatrixPosition(R.matrixWorld)),D.logarithmicDepthBuffer&&kt.setValue($,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&kt.setValue($,"isOrthographic",R.isOrthographicCamera===!0),L!==R&&(L=R,Et=!0,ji=!0)}if(Ge.needsLights&&(yn.state.directionalShadowMap.length>0&&kt.setValue($,"directionalShadowMap",yn.state.directionalShadowMap,fe),yn.state.spotShadowMap.length>0&&kt.setValue($,"spotShadowMap",yn.state.spotShadowMap,fe),yn.state.pointShadowMap.length>0&&kt.setValue($,"pointShadowMap",yn.state.pointShadowMap,fe)),le.isSkinnedMesh){kt.setOptional($,le,"bindMatrix"),kt.setOptional($,le,"bindMatrixInverse");const zt=le.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),kt.setValue($,"boneTexture",zt.boneTexture,fe))}le.isBatchedMesh&&(kt.setOptional($,le,"batchingTexture"),kt.setValue($,"batchingTexture",le._matricesTexture,fe),kt.setOptional($,le,"batchingIdTexture"),kt.setValue($,"batchingIdTexture",le._indirectTexture,fe),kt.setOptional($,le,"batchingColorTexture"),le._colorsTexture!==null&&kt.setValue($,"batchingColorTexture",le._colorsTexture,fe));const hi=he.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&W.update(le,he,Fn),(Et||Ge.receiveShadow!==le.receiveShadow)&&(Ge.receiveShadow=le.receiveShadow,kt.setValue($,"receiveShadow",le.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&J.environment!==null&&(Wt.envMapIntensity.value=J.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=kE()),Et){if(kt.setValue($,"toneMappingExposure",H.toneMappingExposure),Ge.needsLights&&bc(Wt,ji),Fe&&ce.fog===!0&&Qe.refreshFogUniforms(Wt,Fe),Qe.refreshMaterialUniforms(Wt,ce,re,ne,I.state.transmissionRenderTarget[R.id]),Ge.needsLights&&Ge.lightProbeGrid){const zt=Ge.lightProbeGrid;Wt.probesSH.value=zt.texture,Wt.probesMin.value.copy(zt.boundingBox.min),Wt.probesMax.value.copy(zt.boundingBox.max),Wt.probesResolution.value.copy(zt.resolution)}rc.upload($,ga(Ge),Wt,fe)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(rc.upload($,ga(Ge),Wt,fe),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&kt.setValue($,"center",le.center),kt.setValue($,"modelViewMatrix",le.modelViewMatrix),kt.setValue($,"normalMatrix",le.normalMatrix),kt.setValue($,"modelMatrix",le.matrixWorld),ce.uniformsGroups!==void 0){const zt=ce.uniformsGroups;for(let pi=0,Ti=zt.length;pi<Ti;pi++){const qr=zt[pi];Me.update(qr,Fn),Me.bind(qr,Fn)}}return Fn}function bc(R,J){R.ambientLightColor.needsUpdate=J,R.lightProbe.needsUpdate=J,R.directionalLights.needsUpdate=J,R.directionalLightShadows.needsUpdate=J,R.pointLights.needsUpdate=J,R.pointLightShadows.needsUpdate=J,R.spotLights.needsUpdate=J,R.spotLightShadows.needsUpdate=J,R.rectAreaLights.needsUpdate=J,R.hemisphereLights.needsUpdate=J}function va(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,J,he){const ce=ie.get(R);ce.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),ie.get(R.texture).__webglTexture=J,ie.get(R.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:he,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,J){const he=ie.get(R);he.__webglFramebuffer=J,he.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(R,J=0,he=0){Y=R,se=J,Q=he;let ce=null,le=!1,Fe=!1;if(R){const Le=ie.get(R);if(Le.__useDefaultFramebuffer!==void 0){b.bindFramebuffer($.FRAMEBUFFER,Le.__webglFramebuffer),w.copy(R.viewport),F.copy(R.scissor),xe=R.scissorTest,b.viewport(w),b.scissor(F),b.setScissorTest(xe),ae=-1;return}else if(Le.__webglFramebuffer===void 0)fe.setupRenderTarget(R);else if(Le.__hasExternalTextures)fe.rebindTextures(R,ie.get(R.texture).__webglTexture,ie.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const vt=R.depthTexture;if(Le.__boundDepthTexture!==vt){if(vt!==null&&ie.has(vt)&&(R.width!==vt.image.width||R.height!==vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(R)}}const Je=R.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Fe=!0);const rt=ie.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(rt[J])?ce=rt[J][he]:ce=rt[J],le=!0):R.samples>0&&fe.useMultisampledRTT(R)===!1?ce=ie.get(R).__webglMultisampledFramebuffer:Array.isArray(rt)?ce=rt[he]:ce=rt,w.copy(R.viewport),F.copy(R.scissor),xe=R.scissorTest}else w.copy(Re).multiplyScalar(re).floor(),F.copy(lt).multiplyScalar(re).floor(),xe=qe;if(he!==0&&(ce=te),b.bindFramebuffer($.FRAMEBUFFER,ce)&&b.drawBuffers(R,ce),b.viewport(w),b.scissor(F),b.setScissorTest(xe),le){const Le=ie.get(R.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+J,Le.__webglTexture,he)}else if(Fe){const Le=J;for(let Je=0;Je<R.textures.length;Je++){const rt=ie.get(R.textures[Je]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Je,rt.__webglTexture,he,Le)}}else if(R!==null&&he!==0){const Le=ie.get(R.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Le.__webglTexture,he)}ae=-1},this.readRenderTargetPixels=function(R,J,he,ce,le,Fe,We,Le=0){if(!(R&&R.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&(Je=Je[We]),Je){b.bindFramebuffer($.FRAMEBUFFER,Je);try{const rt=R.textures[Le],vt=rt.format,_t=rt.type;if(R.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Le),!D.textureFormatReadable(vt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(_t)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=R.width-ce&&he>=0&&he<=R.height-le&&$.readPixels(J,he,ce,le,ke.convert(vt),ke.convert(_t),Fe)}finally{const rt=Y!==null?ie.get(Y).__webglFramebuffer:null;b.bindFramebuffer($.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(R,J,he,ce,le,Fe,We,Le=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&(Je=Je[We]),Je)if(J>=0&&J<=R.width-ce&&he>=0&&he<=R.height-le){b.bindFramebuffer($.FRAMEBUFFER,Je);const rt=R.textures[Le],vt=rt.format,_t=rt.type;if(R.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Le),!D.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,tt),$.bufferData($.PIXEL_PACK_BUFFER,Fe.byteLength,$.STREAM_READ),$.readPixels(J,he,ce,le,ke.convert(vt),ke.convert(_t),0);const Pt=Y!==null?ie.get(Y).__webglFramebuffer:null;b.bindFramebuffer($.FRAMEBUFFER,Pt);const Gt=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await Yy($,Gt,4),$.bindBuffer($.PIXEL_PACK_BUFFER,tt),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Fe),$.deleteBuffer(tt),$.deleteSync(Gt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,J=null,he=0){const ce=Math.pow(2,-he),le=Math.floor(R.image.width*ce),Fe=Math.floor(R.image.height*ce),We=J!==null?J.x:0,Le=J!==null?J.y:0;fe.setTexture2D(R,0),$.copyTexSubImage2D($.TEXTURE_2D,he,0,0,We,Le,le,Fe),b.unbindTexture()},this.copyTextureToTexture=function(R,J,he=null,ce=null,le=0,Fe=0){let We,Le,Je,rt,vt,_t,tt,Pt,Gt;const Yt=R.isCompressedTexture?R.mipmaps[Fe]:R.image;if(he!==null)We=he.max.x-he.min.x,Le=he.max.y-he.min.y,Je=he.isBox3?he.max.z-he.min.z:1,rt=he.min.x,vt=he.min.y,_t=he.isBox3?he.min.z:0;else{const Wt=Math.pow(2,-le);We=Math.floor(Yt.width*Wt),Le=Math.floor(Yt.height*Wt),R.isDataArrayTexture?Je=Yt.depth:R.isData3DTexture?Je=Math.floor(Yt.depth*Wt):Je=1,rt=0,vt=0,_t=0}ce!==null?(tt=ce.x,Pt=ce.y,Gt=ce.z):(tt=0,Pt=0,Gt=0);const Ot=ke.convert(J.format),an=ke.convert(J.type);let Ge;J.isData3DTexture?(fe.setTexture3D(J,0),Ge=$.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(fe.setTexture2DArray(J,0),Ge=$.TEXTURE_2D_ARRAY):(fe.setTexture2D(J,0),Ge=$.TEXTURE_2D),b.activeTexture($.TEXTURE0),b.pixelStorei($.UNPACK_FLIP_Y_WEBGL,J.flipY),b.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),b.pixelStorei($.UNPACK_ALIGNMENT,J.unpackAlignment);const yn=b.getParameter($.UNPACK_ROW_LENGTH),wt=b.getParameter($.UNPACK_IMAGE_HEIGHT),Fn=b.getParameter($.UNPACK_SKIP_PIXELS),On=b.getParameter($.UNPACK_SKIP_ROWS),Et=b.getParameter($.UNPACK_SKIP_IMAGES);b.pixelStorei($.UNPACK_ROW_LENGTH,Yt.width),b.pixelStorei($.UNPACK_IMAGE_HEIGHT,Yt.height),b.pixelStorei($.UNPACK_SKIP_PIXELS,rt),b.pixelStorei($.UNPACK_SKIP_ROWS,vt),b.pixelStorei($.UNPACK_SKIP_IMAGES,_t);const ji=R.isDataArrayTexture||R.isData3DTexture,kt=J.isDataArrayTexture||J.isData3DTexture;if(R.isDepthTexture){const Wt=ie.get(R),hi=ie.get(J),zt=ie.get(Wt.__renderTarget),pi=ie.get(hi.__renderTarget);b.bindFramebuffer($.READ_FRAMEBUFFER,zt.__webglFramebuffer),b.bindFramebuffer($.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let Ti=0;Ti<Je;Ti++)ji&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ie.get(R).__webglTexture,le,_t+Ti),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ie.get(J).__webglTexture,Fe,Gt+Ti)),$.blitFramebuffer(rt,vt,We,Le,tt,Pt,We,Le,$.DEPTH_BUFFER_BIT,$.NEAREST);b.bindFramebuffer($.READ_FRAMEBUFFER,null),b.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(le!==0||R.isRenderTargetTexture||ie.has(R)){const Wt=ie.get(R),hi=ie.get(J);b.bindFramebuffer($.READ_FRAMEBUFFER,me),b.bindFramebuffer($.DRAW_FRAMEBUFFER,Z);for(let zt=0;zt<Je;zt++)ji?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Wt.__webglTexture,le,_t+zt):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Wt.__webglTexture,le),kt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,hi.__webglTexture,Fe,Gt+zt):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,hi.__webglTexture,Fe),le!==0?$.blitFramebuffer(rt,vt,We,Le,tt,Pt,We,Le,$.COLOR_BUFFER_BIT,$.NEAREST):kt?$.copyTexSubImage3D(Ge,Fe,tt,Pt,Gt+zt,rt,vt,We,Le):$.copyTexSubImage2D(Ge,Fe,tt,Pt,rt,vt,We,Le);b.bindFramebuffer($.READ_FRAMEBUFFER,null),b.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else kt?R.isDataTexture||R.isData3DTexture?$.texSubImage3D(Ge,Fe,tt,Pt,Gt,We,Le,Je,Ot,an,Yt.data):J.isCompressedArrayTexture?$.compressedTexSubImage3D(Ge,Fe,tt,Pt,Gt,We,Le,Je,Ot,Yt.data):$.texSubImage3D(Ge,Fe,tt,Pt,Gt,We,Le,Je,Ot,an,Yt):R.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Fe,tt,Pt,We,Le,Ot,an,Yt.data):R.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Fe,tt,Pt,Yt.width,Yt.height,Ot,Yt.data):$.texSubImage2D($.TEXTURE_2D,Fe,tt,Pt,We,Le,Ot,an,Yt);b.pixelStorei($.UNPACK_ROW_LENGTH,yn),b.pixelStorei($.UNPACK_IMAGE_HEIGHT,wt),b.pixelStorei($.UNPACK_SKIP_PIXELS,Fn),b.pixelStorei($.UNPACK_SKIP_ROWS,On),b.pixelStorei($.UNPACK_SKIP_IMAGES,Et),Fe===0&&J.generateMipmaps&&$.generateMipmap(Ge),b.unbindTexture()},this.initRenderTarget=function(R){ie.get(R).__webglFramebuffer===void 0&&fe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?fe.setTextureCube(R,0):R.isData3DTexture?fe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?fe.setTexture2DArray(R,0):fe.setTexture2D(R,0),b.unbindTexture()},this.resetState=function(){se=0,Q=0,Y=null,b.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}}const X0={type:"change"},ih={type:"start"},kx={type:"end"},Zl=new vc,q0=new Ir,OE=Math.cos(70*Zy.DEG2RAD),fn=new ee,Xn=2*Math.PI,Ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zd=1e-6;class zE extends VS{constructor(e,t=null){super(e,t),this.state=Ht.NONE,this.target=new ee,this.cursor=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ra.ROTATE,MIDDLE:ra.DOLLY,RIGHT:ra.PAN},this.touches={ONE:ia.ROTATE,TWO:ia.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ee,this._lastQuaternion=new zr,this._lastTargetPosition=new ee,this._quat=new zr().setFromUnitVectors(e.up,new ee(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new y0,this._sphericalDelta=new y0,this._scale=1,this._panOffset=new ee,this._rotateStart=new xt,this._rotateEnd=new xt,this._rotateDelta=new xt,this._panStart=new xt,this._panEnd=new xt,this._panDelta=new xt,this._dollyStart=new xt,this._dollyEnd=new xt,this._dollyDelta=new xt,this._dollyDirection=new ee,this._mouse=new xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=VE.bind(this),this._onPointerDown=BE.bind(this),this._onPointerUp=HE.bind(this),this._onContextMenu=$E.bind(this),this._onMouseWheel=WE.bind(this),this._onKeyDown=XE.bind(this),this._onTouchStart=qE.bind(this),this._onTouchMove=YE.bind(this),this._onMouseDown=GE.bind(this),this._onMouseMove=jE.bind(this),this._interceptControlDown=KE.bind(this),this._interceptControlUp=ZE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(X0),this.update(),this.state=Ht.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;fn.copy(t).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===Ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=Xn:r>Math.PI&&(r-=Xn),o<-Math.PI?o+=Xn:o>Math.PI&&(o-=Xn),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),t.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=fn.length();u=this._clampDistance(h*this._scale);const m=h-u;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),l=!!m}else if(this.object.isOrthographicCamera){const h=new ee(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=m!==this.object.zoom;const p=new ee(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),u=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Zl.origin.copy(this.object.position),Zl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zl.direction))<OE?this.object.lookAt(this.target):(q0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zl.intersectPlane(q0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>zd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zd||this._lastTargetPosition.distanceToSquared(this.target)>zd?(this.dispatchEvent(X0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xn/60*this.autoRotateSpeed*e:Xn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){fn.setFromMatrixColumn(t,0),fn.multiplyScalar(-e),this._panOffset.add(fn)}_panUp(e,t){this.screenSpacePanning===!0?fn.setFromMatrixColumn(t,1):(fn.setFromMatrixColumn(t,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(e),this._panOffset.add(fn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;fn.copy(o).sub(this.target);let l=fn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,h=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new xt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function BE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function VE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function HE(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kx),this.state=Ht.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function GE(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ra.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ht.DOLLY;break;case ra.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ht.ROTATE}break;case ra.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ht.PAN}break;default:this.state=Ht.NONE}this.state!==Ht.NONE&&this.dispatchEvent(ih)}function jE(s){switch(this.state){case Ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function WE(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ht.NONE||(s.preventDefault(),this.dispatchEvent(ih),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(kx))}function XE(s){this.enabled!==!1&&this._handleKeyDown(s)}function qE(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ia.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ht.TOUCH_ROTATE;break;case ia.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ht.TOUCH_PAN;break;default:this.state=Ht.NONE}break;case 2:switch(this.touches.TWO){case ia.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ht.TOUCH_DOLLY_PAN;break;case ia.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ht.TOUCH_DOLLY_ROTATE;break;default:this.state=Ht.NONE}break;default:this.state=Ht.NONE}this.state!==Ht.NONE&&this.dispatchEvent(ih)}function YE(s){switch(this._trackPointer(s),this.state){case Ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ht.NONE}}function $E(s){this.enabled!==!1&&s.preventDefault()}function KE(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ZE(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const QE=({students:s,skyTheme:e,onSelectStudent:t,targetStudentId:r})=>{const o=Ae.useRef(null),{currentUser:l}=fi(),[u,h]=Ae.useState(null),[m,p]=Ae.useState(null),[_,M]=Ae.useState(null),g=Ae.useRef(null),y=Ae.useRef(null),E=Ae.useRef(null),C=Ae.useRef(null),S=Ae.useRef(new Map),v=Ae.useRef(null),O=Ae.useRef(null),k=Ae.useRef(null),N=Ae.useRef(null),U=Ae.useRef(null),I=(P,H,V)=>{const G=document.createElement("canvas");G.width=128,G.height=256;const te=G.getContext("2d");V?te.fillStyle=H?"#dbeafe":P==="apex_monolith"?"#fef3c7":"#e2e8f0":te.fillStyle=H?"#182030":P==="apex_monolith"?"#241a10":"#141720",te.fillRect(0,0,128,256);const me=16,Z=6,se=6,Q=6,Y=(128-se*(Z+1))/Z,ae=(256-Q*(me+1))/me;for(let w=0;w<me;w++)for(let F=0;F<Z;F++)Math.random()>.35?H?te.fillStyle="#FF9900":P==="apex_monolith"?te.fillStyle=Math.random()>.5?"#F59E0B":"#D97706":P==="cyber_tower"?te.fillStyle=Math.random()>.5?"#0284C7":"#0EA5E9":te.fillStyle=V?"#059669":"#34D399":te.fillStyle=V?"#94a3b8":"#0a0d14",te.fillRect(se+F*(Y+se),Q+w*(ae+Q),Y,ae);const L=new bS(G);return L.wrapS=uo,L.wrapT=uo,L},B=Ae.useCallback(P=>{const H=S.current.get(P);if(!H||!y.current||!C.current)return;const V=H.position;U.current=new ee(V.x,V.y+8,V.z),N.current=new ee(V.x+32,V.y+40,V.z+40),v.current&&O.current&&(O.current.position.set(V.x,0,V.z),v.current.position.set(V.x,85,V.z),v.current.intensity=e==="bright"?30:80)},[e]),T=Ae.useCallback(P=>{U.current=new ee(P.x,2,P.z),N.current=new ee(P.x+35,45,P.z+45),k.current&&(k.current.position.set(P.x,.6,P.z),k.current.visible=!0),M({x:Math.round(P.x),z:Math.round(P.z)}),setTimeout(()=>M(null),2e3)},[]);return Ae.useEffect(()=>{if(!o.current)return;const P=o.current,H=P.clientWidth,V=P.clientHeight,G=e==="bright",te=new dS;g.current=te;const me={midnight:461070,sunset:1314330,bright:14870768};te.background=new At(me[e]),te.fog=new Zf(me[e],G?.0025:.0035);const Z=new ti(45,H/V,1,2e3);Z.position.set(130,110,150),y.current=Z;const se=new FE({antialias:!0,alpha:!1,powerPreference:"high-performance"});se.setSize(H,V),se.setPixelRatio(Math.min(window.devicePixelRatio,2)),se.shadowMap.enabled=!0,se.shadowMap.type=tx,se.toneMapping=Bf,se.toneMappingExposure=G?1.25:1.1,P.replaceChildren(se.domElement),E.current=se;const Q=new zE(Z,se.domElement);Q.enableDamping=!0,Q.dampingFactor=.05,Q.maxPolarAngle=Math.PI/2-.05,Q.minDistance=15,Q.maxDistance=500,Q.target.set(0,8,0),C.current=Q;const Y=new kS(16777215,G?1.3:e==="sunset"?.7:.55);te.add(Y);const ae=new US(e==="sunset"?16755302:16777215,G?1.8:1.4);ae.position.set(120,180,100),ae.castShadow=!0,ae.shadow.mapSize.width=2048,ae.shadow.mapSize.height=2048,ae.shadow.camera.near=10,ae.shadow.camera.far=500;const L=160;ae.shadow.camera.left=-L,ae.shadow.camera.right=L,ae.shadow.camera.top=L,ae.shadow.camera.bottom=-L,te.add(ae);const w=new cn;te.add(w),O.current=w;const F=new LS(16750848,0,180,Math.PI/6,.4,1);F.position.set(0,80,0),F.target=w,te.add(F),v.current=F;const xe=320,_e=new yo(xe*1.6,xe*1.6),Se=new us({color:G?13358561:592916,roughness:.9}),X=new hn(_e,Se);X.rotation.x=-Math.PI/2,X.receiveShadow=!0,X.userData={isGround:!0},te.add(X);const ne=new Jf(2,2.6,32),re=new lo({color:16750848,side:Ui}),ye=new hn(ne,re);ye.rotation.x=-Math.PI/2,ye.position.set(0,.6,0),ye.visible=!1,te.add(ye),k.current=ye;const Pe=new BS(xe,32,G?9741240:16750848,G?13751771:1712947);Pe.position.y=.1,te.add(Pe);const Re=60,lt=14,qe=4,He=-141+Re/2,ot=new us({color:G?16317180:1844019,roughness:.7}),ct=new us({color:G?8843180:926747,roughness:.9}),pt=[];for(let st=0;st<qe;st++)for(let D=0;D<qe;D++){const b=He+st*(Re+lt),q=He+D*(Re+lt),ie=new ki(Re,.8,Re),fe=new hn(ie,ot);fe.position.set(b,.4,q),fe.receiveShadow=!0,fe.userData={isGround:!0},te.add(fe);const be=new ki(Re-8,.9,Re-8),Ne=new hn(be,ct);Ne.position.set(b,.45,q),Ne.receiveShadow=!0,Ne.userData={isGround:!0},te.add(Ne);const de=16;pt.push({x:b-de,z:q-de}),pt.push({x:b+de,z:q-de}),pt.push({x:b-de,z:q+de}),pt.push({x:b+de,z:q+de})}S.current.clear(),s.forEach((st,D)=>{const b=pt[D%pt.length];if(!b)return;const q=st.id===l.id,ie=st.buildingTier==="apex_monolith",fe=st.buildingTier==="cyber_tower",be=Math.max(8,st.floors*3.2+4),Ne=ie?13:fe?11:9.5,de=new ao;de.position.set(b.x,.8,b.z);const ve=new ki(Ne,be,Ne),ze=I(st.buildingTier,q,G);ze.repeat.set(1,Math.max(1,Math.floor(st.floors/2)));const Qe=new us({map:ze,roughness:.4,metalness:G?.2:.6,color:G||q?16777215:14540253}),Ie=new hn(ve,Qe);Ie.position.y=be/2,Ie.castShadow=!0,Ie.receiveShadow=!0,Ie.userData={student:st},de.add(Ie);const Oe=new ki(Ne+.6,.6,Ne+.6),nt=new lo({color:q?16750848:ie?16096779:fe?440020:1096065}),at=new hn(Oe,nt);if(at.position.y=be+.3,de.add(at),ie){const ge=new hc(.1,.6,12,8),ke=new us({color:16096779,metalness:.8}),Be=new hn(ge,ke);Be.position.y=be+6,de.add(Be);const Me=new eh(.5,8,8),Ke=new lo({color:16711765}),Ye=new hn(Me,Ke);Ye.position.y=be+12,de.add(Ye)}else if(fe){const ge=new hc(.2,.4,6,8),ke=new us({color:440020}),Be=new hn(ge,ke);Be.position.y=be+3,de.add(Be)}const ft=new ki(Ne+1.2,1.2,Ne+1.2),W=new us({color:G?9741240:1712691,roughness:.9}),Ue=new hn(ft,W);Ue.position.y=.6,de.add(Ue),te.add(de),S.current.set(st.id,de)});const Te=new zS,St=new xt,bt=st=>{const D=se.domElement.getBoundingClientRect();St.x=(st.clientX-D.left)/D.width*2-1,St.y=-((st.clientY-D.top)/D.height)*2+1,Te.setFromCamera(St,Z);const b=Te.intersectObjects(te.children,!0);let q=null;for(const ie of b)if(ie.object.userData&&ie.object.userData.student){q=ie.object.userData.student;break}q?(h(q),p({x:st.clientX,y:st.clientY}),P.style.cursor="pointer"):(h(null),p(null),P.style.cursor="crosshair")},Rt=st=>{const D=se.domElement.getBoundingClientRect();St.x=(st.clientX-D.left)/D.width*2-1,St.y=-((st.clientY-D.top)/D.height)*2+1,Te.setFromCamera(St,Z);const b=Te.intersectObjects(te.children,!0);for(const q of b){if(q.object.userData&&q.object.userData.student){const ie=q.object.userData.student;Xe.playTap(),t(ie),B(ie.id);return}if(q.object.userData&&q.object.userData.isGround){Xe.playTap(),T(q.point);return}}};P.addEventListener("mousemove",bt),P.addEventListener("click",Rt);let Ft;const $=()=>{Ft=requestAnimationFrame($),N.current&&y.current&&C.current&&(y.current.position.lerp(N.current,.05),C.current.target.lerp(U.current,.05),y.current.position.distanceTo(N.current)<.6&&(N.current=null,U.current=null)),Q.update(),se.render(te,Z)};$();const Zt=()=>{if(!o.current||!E.current||!y.current)return;const st=o.current.clientWidth,D=o.current.clientHeight;y.current.aspect=st/D,y.current.updateProjectionMatrix(),E.current.setSize(st,D)};return window.addEventListener("resize",Zt),()=>{window.removeEventListener("resize",Zt),P.removeEventListener("mousemove",bt),P.removeEventListener("click",Rt),cancelAnimationFrame(Ft),se.dispose()}},[s,l.id,e,t,B,T]),Ae.useEffect(()=>{r&&B(r)},[r,B]),d.jsxs("div",{className:"relative w-full h-full min-h-[580px] bg-[#07090e] overflow-hidden select-none",children:[d.jsx("div",{ref:o,className:"w-full h-full"}),_&&d.jsxs("div",{className:"absolute top-20 left-1/2 transform -translate-x-1/2 bg-zinc-950/90 border border-aws-orange/60 text-aws-orange font-mono text-xs px-3.5 py-1.5 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-2 animate-bounce-subtle pointer-events-none",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-aws-orange animate-ping"}),d.jsxs("span",{children:["Navigating to Coordinates [X: ",_.x,", Z: ",_.z,"]"]})]}),u&&m&&d.jsxs("div",{className:"fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-full mb-4 px-3.5 py-2.5 rounded-xl bg-zinc-950/95 border border-zinc-700/80 shadow-2xl backdrop-blur-md text-xs text-white",style:{left:`${m.x}px`,top:`${m.y-12}px`},children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"font-mono font-bold text-aws-orange",children:u.name}),u.id===l.id&&d.jsx("span",{className:"px-1.5 py-0.2 bg-aws-orange text-black font-black text-[9px] rounded",children:"YOU"})]}),d.jsxs("div",{className:"text-[11px] text-zinc-400 font-mono mt-0.5",children:[u.department," • ",u.rollNumber]}),d.jsxs("div",{className:"flex items-center gap-3 mt-1.5 pt-1.5 border-t border-zinc-800 font-mono text-[10px]",children:[d.jsxs("span",{className:"text-emerald-400 font-bold",children:[u.points," PTS"]}),d.jsxs("span",{className:"text-cyan-400 font-bold",children:[u.floors," FLOORS"]}),d.jsxs("span",{className:"text-amber-400 font-bold",children:[u.streak,"d STREAK"]})]})]})]})},JE=({students:s,currentUser:e,selectedDistrict:t,onSelectDistrict:r,searchQuery:o,onSearchChange:l,skyTheme:u,onSkyThemeChange:h,onFlyToMyTower:m,onStartQuiz:p})=>{const _=[{id:"ALL",label:"All Districts"},{id:"CSE",label:"CSE Sector"},{id:"IT",label:"IT Cyberway"},{id:"AI & Data Science",label:"AI/DS Valley"},{id:"ECE",label:"ECE Subnet"},{id:"Cyber Security",label:"Cyber Defense"}];return d.jsxs("div",{className:"pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-4 sm:p-6",children:[d.jsxs("div",{className:"flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pointer-events-auto",children:[d.jsxs("div",{className:"flex items-center gap-3 bg-zinc-950/90 border border-zinc-800/90 rounded-2xl px-4 py-2.5 backdrop-blur-md shadow-2xl",children:[d.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"}),d.jsxs("div",{children:[d.jsxs("div",{className:"text-xs font-mono font-bold text-zinc-100 flex items-center gap-1.5",children:[d.jsx("span",{children:"AWS METROPOLIS 3D"}),d.jsx("span",{className:"text-zinc-500",children:"•"}),d.jsxs("span",{className:"text-aws-orange",children:[s.length," TOWERS"]})]}),d.jsx("div",{className:"text-[11px] text-zinc-400 font-mono",children:"Click anywhere on ground to travel • Git-City Engine"})]})]}),d.jsxs("div",{className:"flex items-center gap-2.5",children:[d.jsxs("div",{className:"relative flex-1 sm:w-64",children:[d.jsx(Ff,{className:"w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2"}),d.jsx("input",{type:"text",placeholder:"Search student or roll...",value:o,onChange:M=>l(M.target.value),className:"w-full bg-zinc-950/90 border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs font-mono text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-aws-orange/60 transition-colors shadow-2xl"})]}),d.jsxs("button",{onClick:()=>{Xe.playTap(),m()},className:"flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-mono font-semibold text-zinc-200 hover:text-white transition-all shadow-lg",children:[d.jsx(E_,{className:"w-3.5 h-3.5 text-aws-orange"}),d.jsxs("span",{className:"hidden sm:inline",children:["My Tower (",e.floors,"F)"]})]}),d.jsxs("button",{onClick:()=>{Xe.playTap(),p()},className:"flex items-center gap-1.5 px-4 py-2 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 text-xs font-mono font-bold transition-all shadow-lg shadow-aws-orange/20",children:[d.jsx(go,{className:"w-3.5 h-3.5 fill-current"}),d.jsx("span",{children:"Weekly Quiz"})]})]})]}),d.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-3 pointer-events-auto",children:[d.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto bg-zinc-950/90 border border-zinc-800/90 p-1.5 rounded-2xl backdrop-blur-md shadow-2xl",children:_.map(M=>{const g=t===M.id;return d.jsx("button",{onClick:()=>{Xe.playTap(),r(M.id)},className:`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold whitespace-nowrap transition-all ${g?"bg-aws-orange text-zinc-950 font-bold shadow-sm":"text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"}`,children:M.label},M.id)})}),d.jsxs("div",{className:"flex items-center gap-2 self-end",children:[d.jsxs("div",{className:"hidden lg:flex items-center gap-3 bg-zinc-950/90 border border-zinc-800/90 px-3.5 py-2 rounded-2xl text-[11px] font-mono text-zinc-400 backdrop-blur-md shadow-2xl",children:[d.jsxs("span",{className:"flex items-center gap-1 text-zinc-300",children:[d.jsx(U_,{className:"w-3 h-3 text-aws-orange"}),d.jsx("strong",{className:"text-zinc-200",children:"Click Ground:"})," Teleport"]}),d.jsx("span",{children:"•"}),d.jsxs("span",{className:"flex items-center gap-1 text-zinc-300",children:[d.jsx(P_,{className:"w-3 h-3 text-cyan-400"}),d.jsx("strong",{className:"text-zinc-200",children:"Left Drag:"})," Rotate"]}),d.jsx("span",{children:"•"}),d.jsxs("span",{className:"flex items-center gap-1 text-zinc-300",children:[d.jsx(L_,{className:"w-3 h-3 text-emerald-400"}),d.jsx("strong",{className:"text-zinc-200",children:"Right Drag:"})," Pan"]})]}),d.jsxs("div",{className:"flex items-center bg-zinc-950/90 border border-zinc-800/90 p-1 rounded-2xl backdrop-blur-md shadow-2xl",children:[d.jsxs("button",{onClick:()=>{Xe.playTap(),h("midnight")},className:`px-2.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-colors flex items-center gap-1.5 ${u==="midnight"?"bg-zinc-800 text-aws-orange":"text-zinc-500 hover:text-zinc-300"}`,title:"Cyber Midnight Lighting",children:[d.jsx(R_,{className:"w-3.5 h-3.5"}),d.jsx("span",{className:"hidden sm:inline",children:"Midnight"})]}),d.jsxs("button",{onClick:()=>{Xe.playTap(),h("sunset")},className:`px-2.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-colors flex items-center gap-1.5 ${u==="sunset"?"bg-zinc-800 text-amber-400":"text-zinc-500 hover:text-zinc-300"}`,title:"Golden Sunset Lighting",children:[d.jsx(K_,{className:"w-3.5 h-3.5"}),d.jsx("span",{className:"hidden sm:inline",children:"Sunset"})]}),d.jsxs("button",{onClick:()=>{Xe.playTap(),h("bright")},className:`px-2.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-colors flex items-center gap-1.5 ${u==="bright"?"bg-zinc-800 text-cyan-400":"text-zinc-500 hover:text-zinc-300"}`,title:"Bright Daylight Mode",children:[d.jsx(Y_,{className:"w-3.5 h-3.5"}),d.jsx("span",{className:"hidden sm:inline",children:"Bright Mode"})]})]})]})]})]})},eT=({student:s,onClose:e,onOpenCertificate:t})=>{const{currentUser:r,badges:o}=fi();if(!s)return null;const l=s.id===r.id,h=(p=>{switch(p){case"apex_monolith":return{label:"Apex Monolith",color:"text-amber-400",bg:"bg-amber-400/10 border-amber-400/30"};case"cyber_tower":return{label:"Cyber Skyscraper",color:"text-cyan-400",bg:"bg-cyan-400/10 border-cyan-400/30"};case"datacenter":return{label:"Cloud Data Center",color:"text-emerald-400",bg:"bg-emerald-400/10 border-emerald-400/30"};default:return{label:"EC2 Server Shack",color:"text-zinc-400",bg:"bg-zinc-800 border-zinc-700"}}})(s.buildingTier),m=Math.min(98,Math.max(20,Math.floor(s.points/1200*100)));return d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in font-sans",children:d.jsxs("div",{className:"relative w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-7 shadow-2xl overflow-hidden text-zinc-100",children:[d.jsx("button",{onClick:()=>{Xe.playTap(),e()},className:"absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors",children:d.jsx(mc,{className:"w-4 h-4"})}),d.jsxs("div",{className:"flex items-center gap-3.5 mb-6",children:[d.jsxs("div",{className:"relative",children:[d.jsx("img",{src:s.avatar,alt:s.name,className:"w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-700 p-1"}),l&&d.jsx("span",{className:"absolute -bottom-1 -right-1 px-1.5 py-0.2 rounded bg-aws-orange text-black font-mono font-black text-[9px] uppercase",children:"YOU"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("h2",{className:"text-lg font-heading text-white",children:s.name}),d.jsx("span",{className:`text-[10px] font-mono px-2 py-0.2 rounded-full font-bold border ${h.bg} ${h.color}`,children:h.label})]}),d.jsxs("p",{className:"text-xs font-mono text-zinc-400 mt-0.5",children:[d.jsx("span",{className:"text-cyan-400",children:s.rollNumber})," • ",s.department," (Year ",s.year,")"]})]})]}),d.jsxs("div",{className:"grid grid-cols-4 gap-2 mb-6 font-mono",children:[d.jsxs("div",{className:"bg-zinc-900/90 border border-zinc-800/80 rounded-xl p-2.5 text-center",children:[d.jsx("div",{className:"text-[10px] text-zinc-500 mb-0.5",children:"SCORE"}),d.jsx("div",{className:"text-sm font-bold text-aws-orange",children:s.points})]}),d.jsxs("div",{className:"bg-zinc-900/90 border border-zinc-800/80 rounded-xl p-2.5 text-center",children:[d.jsx("div",{className:"text-[10px] text-zinc-500 mb-0.5",children:"HEIGHT"}),d.jsxs("div",{className:"text-sm font-bold text-cyan-400",children:[s.floors,"F"]})]}),d.jsxs("div",{className:"bg-zinc-900/90 border border-zinc-800/80 rounded-xl p-2.5 text-center",children:[d.jsx("div",{className:"text-[10px] text-zinc-500 mb-0.5",children:"STREAK"}),d.jsxs("div",{className:"text-sm font-bold text-amber-400",children:[s.streak,"d"]})]}),d.jsxs("div",{className:"bg-zinc-900/90 border border-zinc-800/80 rounded-xl p-2.5 text-center",children:[d.jsx("div",{className:"text-[10px] text-zinc-500 mb-0.5",children:"RANK"}),d.jsxs("div",{className:"text-sm font-bold text-zinc-300",children:["#",s.rankWeekly||4]})]})]}),d.jsxs("div",{className:"bg-zinc-900/60 border border-zinc-800 rounded-2xl p-3.5 mb-6",children:[d.jsxs("div",{className:"flex items-center justify-between text-xs font-mono mb-2",children:[d.jsxs("span",{className:"text-zinc-300 flex items-center gap-1.5",children:[d.jsx(Of,{className:"w-3.5 h-3.5 text-emerald-400"}),"Cert Exam Readiness"]}),d.jsxs("span",{className:"text-emerald-400 font-bold",children:[m,"%"]})]}),d.jsx("div",{className:"w-full bg-zinc-800 rounded-full h-2 overflow-hidden",children:d.jsx("div",{className:"bg-emerald-400 h-full rounded-full transition-all duration-500",style:{width:`${m}%`}})})]}),d.jsxs("div",{className:"mb-6",children:[d.jsxs("div",{className:"text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2.5",children:["UNLOCKED BADGES (",s.unlockedBadges.length,")"]}),d.jsx("div",{className:"flex flex-wrap gap-1.5 font-mono text-[11px]",children:o.map(p=>{const _=s.unlockedBadges.includes(p.id);return d.jsxs("div",{className:`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all ${_?"bg-zinc-900 border-zinc-700 text-zinc-200":"bg-zinc-950 border-zinc-900 text-zinc-600 opacity-50"}`,children:[d.jsx("span",{children:p.title}),_&&d.jsx(kr,{className:"w-3 h-3 text-emerald-400 ml-0.5"})]},p.id)})})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("button",{onClick:()=>{Xe.playTap(),t(s)},className:"flex-1 py-3 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm",children:[d.jsx(mo,{className:"w-4 h-4"}),d.jsx("span",{children:"Generate Official Certificate"})]}),d.jsx("button",{onClick:()=>{Xe.playTap(),e()},className:"px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-xs border border-zinc-800 transition-all",children:"Close"})]})]})})},tT=({onOpenCertificate:s})=>{const{students:e,currentUser:t,selectedStudentModal:r,setSelectedStudentModal:o,setActiveTab:l}=fi(),[u,h]=Ae.useState("ALL"),[m,p]=Ae.useState(""),[_,M]=Ae.useState("midnight"),[g,y]=Ae.useState(null),E=Ae.useMemo(()=>e.filter(v=>{const O=u==="ALL"||v.department===u,k=v.name.toLowerCase().includes(m.toLowerCase())||v.rollNumber.toLowerCase().includes(m.toLowerCase());return O&&k}),[e,u,m]),C=v=>{if(p(v),v.trim()){const O=e.find(k=>k.name.toLowerCase().includes(v.toLowerCase())||k.rollNumber.toLowerCase().includes(v.toLowerCase()));O&&y(O.id)}},S=()=>{y(t.id),o(t)};return d.jsxs("div",{className:"relative w-full h-[calc(100vh-80px)] min-h-[580px] bg-[#07090e] overflow-hidden flex flex-col",children:[d.jsx(QE,{students:E,selectedDistrict:u,searchQuery:m,skyTheme:_,onSelectStudent:o,targetStudentId:g}),d.jsx(JE,{students:E,currentUser:t,selectedDistrict:u,onSelectDistrict:h,searchQuery:m,onSearchChange:C,skyTheme:_,onSkyThemeChange:M,onFlyToMyTower:S,onStartQuiz:()=>l("quiz")}),r&&d.jsx(eT,{student:r,onClose:()=>o(null),onOpenCertificate:s})]})},nT=({result:s,onNext:e,heartsRemaining:t})=>{var h,m;if(!s)return null;const{question:r,selectedOption:o,isCorrect:l,earnedPoints:u}=s;return d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in",children:d.jsxs("div",{className:"relative w-full max-w-xl bg-[#0D1322] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-slate-100",children:[d.jsx("div",{className:`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${l?"from-emerald-500 via-teal-400 to-emerald-500":"from-rose-500 via-pink-500 to-rose-500"}`}),d.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[d.jsx("div",{className:`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${l?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-glow-neon":"bg-rose-500/20 text-rose-400 border border-rose-500/40"}`,children:l?d.jsx(kr,{className:"w-8 h-8"}):d.jsx(r_,{className:"w-8 h-8"})}),d.jsxs("div",{children:[d.jsx("h2",{className:"text-2xl font-black font-display tracking-tight text-white flex items-center gap-2",children:l?"Brilliant! Correct Answer":"Incorrect Attempt"}),d.jsx("p",{className:"text-xs font-semibold mt-0.5",children:l?d.jsxs("span",{className:"text-emerald-400 flex items-center gap-1 font-mono",children:[d.jsx(go,{className:"w-3.5 h-3.5 fill-current"})," +",u," Points Awarded • Skyline Expanded!"]}):d.jsxs("span",{className:"text-rose-400 flex items-center gap-1 font-mono",children:[d.jsx(la,{className:"w-3.5 h-3.5 fill-current"})," -1 Heart Lost (",t,"/5 remaining)"]})})]})]}),d.jsxs("div",{className:"space-y-2.5 mb-6",children:[d.jsxs("div",{className:`p-3.5 rounded-xl border text-xs ${l?"bg-emerald-950/30 border-emerald-500/40 text-emerald-200":"bg-rose-950/30 border-rose-500/40 text-rose-200"}`,children:[d.jsxs("span",{className:"font-bold uppercase tracking-wider block text-[10px] mb-1 opacity-80",children:["Your Selection: Option ",o]}),d.jsx("p",{children:(h=r.options.find(p=>p.key===o))==null?void 0:h.text})]}),!l&&d.jsxs("div",{className:"p-3.5 rounded-xl border bg-emerald-950/40 border-emerald-500/50 text-emerald-100 text-xs",children:[d.jsxs("span",{className:"font-bold uppercase tracking-wider block text-[10px] text-emerald-400 mb-1",children:["✓ Correct Answer: Option ",r.correctOption]}),d.jsx("p",{children:(m=r.options.find(p=>p.key===r.correctOption))==null?void 0:m.text})]})]}),d.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-4 mb-6",children:[d.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-aws-orange uppercase tracking-wider mb-2",children:[d.jsx(Vd,{className:"w-4 h-4"}),d.jsx("span",{children:"AWS Architectural Rationale"})]}),d.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:r.explanation}),r.awsDocTopic&&d.jsxs("div",{className:"mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400",children:[d.jsxs("span",{children:["Domain Reference: ",d.jsx("strong",{className:"text-white",children:r.awsDocTopic})]}),d.jsx("span",{className:"text-cyan-400 flex items-center gap-1 font-mono text-[10px]",children:"AWS SAA-C03 / CCP Verified"})]})]}),d.jsxs("button",{onClick:()=>{Xe.playTap(),e()},className:"w-full cyber-btn-primary py-3.5 text-sm",children:[d.jsx("span",{children:"Continue Next Question"}),d.jsx(Uf,{className:"w-4 h-4"})]})]})})},iT=()=>{const{showCooldownModal:s,setShowCooldownModal:e,cooldownRemainingSecs:t,refillHearts:r,setActiveTab:o}=fi();if(!s)return null;const l=m=>{const p=Math.floor(m/60),_=m%60;return`${p<10?"0":""}${p}:${_<10?"0":""}${_}`},u=["AWS Security Best Practice: Never attach AdministratorAccess policies to EC2 instance profiles; adhere to Least Privilege.","S3 Glacier Deep Archive provides the lowest storage cost on AWS with a 12-hour standard retrieval window.","NAT Gateways are fully managed, highly available, and placed in public subnets to provide internet egress for private workloads.","DynamoDB provides single-digit millisecond latency; add DAX (DynamoDB Accelerator) for microsecond in-memory caching."],h=u[Math.floor(Math.random()*u.length)];return d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fade-in",children:d.jsxs("div",{className:"relative w-full max-w-lg bg-[#0E1526] border border-rose-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(239,68,68,0.2)] text-slate-100 text-center",children:[d.jsx("button",{onClick:()=>{Xe.playTap(),e(!1)},className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors",children:d.jsx(mc,{className:"w-5 h-5"})}),d.jsx("div",{className:"mx-auto w-20 h-20 rounded-3xl bg-rose-500/15 border-2 border-rose-500/40 flex items-center justify-center mb-5 text-rose-500 shadow-[0_0_30px_rgba(239,68,68,0.3)] animate-pulse",children:d.jsx(la,{className:"w-10 h-10 fill-rose-500/30"})}),d.jsx("h2",{className:"text-2xl font-black font-display text-white tracking-tight",children:"All 5 Hearts Exhausted!"}),d.jsx("p",{className:"text-sm text-slate-300 mt-2 max-w-sm mx-auto",children:"To encourage thoughtful learning and avoid guess-spamming, attempts are paused for a cooldown period."}),d.jsxs("div",{className:"my-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col items-center",children:[d.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-2",children:[d.jsx(a_,{className:"w-4 h-4 animate-spin",style:{animationDuration:"6s"}}),d.jsx("span",{children:"Next Heart Recharging In"})]}),d.jsx("div",{className:"text-4xl sm:text-5xl font-mono font-black text-white tracking-wider text-glow-orange",children:l(t||2700)}),d.jsx("p",{className:"text-[11px] text-slate-400 mt-2",children:"Each heart refills automatically every 45 minutes (+5 full hearts in 3.5 hrs)."})]}),d.jsxs("div",{className:"bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 mb-6 text-left",children:[d.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-1",children:[d.jsx(M_,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Study Tip while you wait:"})]}),d.jsx("p",{className:"text-xs text-slate-300",children:h})]}),d.jsxs("div",{className:"space-y-3",children:[d.jsxs("button",{onClick:()=>{Xe.playTap(),e(!1),o("city")},className:"w-full cyber-btn-secondary py-3 text-xs sm:text-sm",children:[d.jsx(xo,{className:"w-4 h-4 text-cyan-400"}),d.jsx("span",{children:"Explore The Cloud City Skyline"})]}),d.jsxs("button",{onClick:()=>{r()},className:"w-full bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-400 border border-emerald-500/40 rounded-xl py-2 text-xs font-bold transition-all flex items-center justify-center gap-1.5",children:[d.jsx(z_,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"[Instant Refill Demo Test Key]"})]})]})]})})};var rh={};(function s(e,t,r,o){var l=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",h=(function(){if(!e.OffscreenCanvas)return!1;try{var L=new OffscreenCanvas(1,1),w=L.getContext("2d");w.fillRect(0,0,1,1);var F=L.transferToImageBitmap();w.createPattern(F,"no-repeat")}catch{return!1}return!0})();function m(){}function p(L){var w=t.exports.Promise,F=w!==void 0?w:e.Promise;return typeof F=="function"?new F(L):(L(m,m),null)}var _=(function(L,w){return{transform:function(F){if(L)return F;if(w.has(F))return w.get(F);var xe=new OffscreenCanvas(F.width,F.height),_e=xe.getContext("2d");return _e.drawImage(F,0,0),w.set(F,xe),xe},clear:function(){w.clear()}}})(h,new Map),M=(function(){var L=Math.floor(16.666666666666668),w,F,xe={},_e=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(w=function(Se){var X=Math.random();return xe[X]=requestAnimationFrame(function ne(re){_e===re||_e+L-1<re?(_e=re,delete xe[X],Se()):xe[X]=requestAnimationFrame(ne)}),X},F=function(Se){xe[Se]&&cancelAnimationFrame(xe[Se])}):(w=function(Se){return setTimeout(Se,L)},F=function(Se){return clearTimeout(Se)}),{frame:w,cancel:F}})(),g=(function(){var L,w,F={};function xe(_e){function Se(X,ne){_e.postMessage({options:X||{},callback:ne})}_e.init=function(ne){var re=ne.transferControlToOffscreen();_e.postMessage({canvas:re},[re])},_e.fire=function(ne,re,ye){if(w)return Se(ne,null),w;var Pe=Math.random().toString(36).slice(2);return w=p(function(Re){function lt(qe){qe.data.callback===Pe&&(delete F[Pe],_e.removeEventListener("message",lt),w=null,_.clear(),ye(),Re())}_e.addEventListener("message",lt),Se(ne,Pe),F[Pe]=lt.bind(null,{data:{callback:Pe}})}),w},_e.reset=function(){_e.postMessage({reset:!0});for(var ne in F)F[ne](),delete F[ne]}}return function(){if(L)return L;if(!r&&l){var _e=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{L=new Worker(URL.createObjectURL(new Blob([_e])))}catch(Se){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Se),null}xe(L)}return L}})(),y={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function E(L,w){return w?w(L):L}function C(L){return L!=null}function S(L,w,F){return E(L&&C(L[w])?L[w]:y[w],F)}function v(L){return L<0?0:Math.floor(L)}function O(L,w){return Math.floor(Math.random()*(w-L))+L}function k(L){return parseInt(L,16)}function N(L){return L.map(U)}function U(L){var w=String(L).replace(/[^0-9a-f]/gi,"");return w.length<6&&(w=w[0]+w[0]+w[1]+w[1]+w[2]+w[2]),{r:k(w.substring(0,2)),g:k(w.substring(2,4)),b:k(w.substring(4,6))}}function I(L){var w=S(L,"origin",Object);return w.x=S(w,"x",Number),w.y=S(w,"y",Number),w}function B(L){L.width=document.documentElement.clientWidth,L.height=document.documentElement.clientHeight}function T(L){var w=L.getBoundingClientRect();L.width=w.width,L.height=w.height}function P(L){var w=document.createElement("canvas");return w.style.position="fixed",w.style.top="0px",w.style.left="0px",w.style.pointerEvents="none",w.style.zIndex=L,w}function H(L,w,F,xe,_e,Se,X,ne,re){L.save(),L.translate(w,F),L.rotate(Se),L.scale(xe,_e),L.arc(0,0,1,X,ne,re),L.restore()}function V(L){var w=L.angle*(Math.PI/180),F=L.spread*(Math.PI/180);return{x:L.x,y:L.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:L.startVelocity*.5+Math.random()*L.startVelocity,angle2D:-w+(.5*F-Math.random()*F),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:L.color,shape:L.shape,tick:0,totalTicks:L.ticks,decay:L.decay,drift:L.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:L.gravity*3,ovalScalar:.6,scalar:L.scalar,flat:L.flat}}function G(L,w){w.x+=Math.cos(w.angle2D)*w.velocity+w.drift,w.y+=Math.sin(w.angle2D)*w.velocity+w.gravity,w.velocity*=w.decay,w.flat?(w.wobble=0,w.wobbleX=w.x+10*w.scalar,w.wobbleY=w.y+10*w.scalar,w.tiltSin=0,w.tiltCos=0,w.random=1):(w.wobble+=w.wobbleSpeed,w.wobbleX=w.x+10*w.scalar*Math.cos(w.wobble),w.wobbleY=w.y+10*w.scalar*Math.sin(w.wobble),w.tiltAngle+=.1,w.tiltSin=Math.sin(w.tiltAngle),w.tiltCos=Math.cos(w.tiltAngle),w.random=Math.random()+2);var F=w.tick++/w.totalTicks,xe=w.x+w.random*w.tiltCos,_e=w.y+w.random*w.tiltSin,Se=w.wobbleX+w.random*w.tiltCos,X=w.wobbleY+w.random*w.tiltSin;if(L.fillStyle="rgba("+w.color.r+", "+w.color.g+", "+w.color.b+", "+(1-F)+")",L.beginPath(),u&&w.shape.type==="path"&&typeof w.shape.path=="string"&&Array.isArray(w.shape.matrix))L.fill(Q(w.shape.path,w.shape.matrix,w.x,w.y,Math.abs(Se-xe)*.1,Math.abs(X-_e)*.1,Math.PI/10*w.wobble));else if(w.shape.type==="bitmap"){var ne=Math.PI/10*w.wobble,re=Math.abs(Se-xe)*.1,ye=Math.abs(X-_e)*.1,Pe=w.shape.bitmap.width*w.scalar,Re=w.shape.bitmap.height*w.scalar,lt=new DOMMatrix([Math.cos(ne)*re,Math.sin(ne)*re,-Math.sin(ne)*ye,Math.cos(ne)*ye,w.x,w.y]);lt.multiplySelf(new DOMMatrix(w.shape.matrix));var qe=L.createPattern(_.transform(w.shape.bitmap),"no-repeat");qe.setTransform(lt),L.globalAlpha=1-F,L.fillStyle=qe,L.fillRect(w.x-Pe/2,w.y-Re/2,Pe,Re),L.globalAlpha=1}else if(w.shape==="circle")L.ellipse?L.ellipse(w.x,w.y,Math.abs(Se-xe)*w.ovalScalar,Math.abs(X-_e)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI):H(L,w.x,w.y,Math.abs(Se-xe)*w.ovalScalar,Math.abs(X-_e)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI);else if(w.shape==="star")for(var He=Math.PI/2*3,ot=4*w.scalar,ct=8*w.scalar,pt=w.x,Te=w.y,St=5,bt=Math.PI/St;St--;)pt=w.x+Math.cos(He)*ct,Te=w.y+Math.sin(He)*ct,L.lineTo(pt,Te),He+=bt,pt=w.x+Math.cos(He)*ot,Te=w.y+Math.sin(He)*ot,L.lineTo(pt,Te),He+=bt;else L.moveTo(Math.floor(w.x),Math.floor(w.y)),L.lineTo(Math.floor(w.wobbleX),Math.floor(_e)),L.lineTo(Math.floor(Se),Math.floor(X)),L.lineTo(Math.floor(xe),Math.floor(w.wobbleY));return L.closePath(),L.fill(),w.tick<w.totalTicks}function te(L,w,F,xe,_e){var Se=w.slice(),X=L.getContext("2d"),ne,re,ye=p(function(Pe){function Re(){ne=re=null,X.clearRect(0,0,xe.width,xe.height),_.clear(),_e(),Pe()}function lt(){r&&!(xe.width===o.width&&xe.height===o.height)&&(xe.width=L.width=o.width,xe.height=L.height=o.height),!xe.width&&!xe.height&&(F(L),xe.width=L.width,xe.height=L.height),X.clearRect(0,0,xe.width,xe.height),Se=Se.filter(function(qe){return G(X,qe)}),Se.length?ne=M.frame(lt):Re()}ne=M.frame(lt),re=Re});return{addFettis:function(Pe){return Se=Se.concat(Pe),ye},canvas:L,promise:ye,reset:function(){ne&&M.cancel(ne),re&&re()}}}function me(L,w){var F=!L,xe=!!S(w||{},"resize"),_e=!1,Se=S(w,"disableForReducedMotion",Boolean),X=l&&!!S(w||{},"useWorker"),ne=X?g():null,re=F?B:T,ye=L&&ne?!!L.__confetti_initialized:!1,Pe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Re;function lt(He,ot,ct){for(var pt=S(He,"particleCount",v),Te=S(He,"angle",Number),St=S(He,"spread",Number),bt=S(He,"startVelocity",Number),Rt=S(He,"decay",Number),Ft=S(He,"gravity",Number),$=S(He,"drift",Number),Zt=S(He,"colors",N),st=S(He,"ticks",Number),D=S(He,"shapes"),b=S(He,"scalar"),q=!!S(He,"flat"),ie=I(He),fe=pt,be=[],Ne=L.width*ie.x,de=L.height*ie.y;fe--;)be.push(V({x:Ne,y:de,angle:Te,spread:St,startVelocity:bt,color:Zt[fe%Zt.length],shape:D[O(0,D.length)],ticks:st,decay:Rt,gravity:Ft,drift:$,scalar:b,flat:q}));return Re?Re.addFettis(be):(Re=te(L,be,re,ot,ct),Re.promise)}function qe(He){var ot=Se||S(He,"disableForReducedMotion",Boolean),ct=S(He,"zIndex",Number);if(ot&&Pe)return p(function(bt){bt()});F&&Re?L=Re.canvas:F&&!L&&(L=P(ct),document.body.appendChild(L)),xe&&!ye&&re(L);var pt={width:L.width,height:L.height};ne&&!ye&&ne.init(L),ye=!0,ne&&(L.__confetti_initialized=!0);function Te(){if(ne){var bt={getBoundingClientRect:function(){if(!F)return L.getBoundingClientRect()}};re(bt),ne.postMessage({resize:{width:bt.width,height:bt.height}});return}pt.width=pt.height=null}function St(){Re=null,xe&&(_e=!1,e.removeEventListener("resize",Te)),F&&L&&(document.body.contains(L)&&document.body.removeChild(L),L=null,ye=!1)}return xe&&!_e&&(_e=!0,e.addEventListener("resize",Te,!1)),ne?ne.fire(He,pt,St):lt(He,pt,St)}return qe.reset=function(){ne&&ne.reset(),Re&&Re.reset()},qe}var Z;function se(){return Z||(Z=me(null,{useWorker:!0,resize:!0})),Z}function Q(L,w,F,xe,_e,Se,X){var ne=new Path2D(L),re=new Path2D;re.addPath(ne,new DOMMatrix(w));var ye=new Path2D;return ye.addPath(re,new DOMMatrix([Math.cos(X)*_e,Math.sin(X)*_e,-Math.sin(X)*Se,Math.cos(X)*Se,F,xe])),ye}function Y(L){if(!u)throw new Error("path confetti are not supported in this browser");var w,F;typeof L=="string"?w=L:(w=L.path,F=L.matrix);var xe=new Path2D(w),_e=document.createElement("canvas"),Se=_e.getContext("2d");if(!F){for(var X=1e3,ne=X,re=X,ye=0,Pe=0,Re,lt,qe=0;qe<X;qe+=2)for(var He=0;He<X;He+=2)Se.isPointInPath(xe,qe,He,"nonzero")&&(ne=Math.min(ne,qe),re=Math.min(re,He),ye=Math.max(ye,qe),Pe=Math.max(Pe,He));Re=ye-ne,lt=Pe-re;var ot=10,ct=Math.min(ot/Re,ot/lt);F=[ct,0,0,ct,-Math.round(Re/2+ne)*ct,-Math.round(lt/2+re)*ct]}return{type:"path",path:w,matrix:F}}function ae(L){var w,F=1,xe="#000000",_e='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof L=="string"?w=L:(w=L.text,F="scalar"in L?L.scalar:F,_e="fontFamily"in L?L.fontFamily:_e,xe="color"in L?L.color:xe);var Se=10*F,X=""+Se+"px "+_e,ne=new OffscreenCanvas(Se,Se),re=ne.getContext("2d");re.font=X;var ye=re.measureText(w),Pe=Math.ceil(ye.actualBoundingBoxRight+ye.actualBoundingBoxLeft),Re=Math.ceil(ye.actualBoundingBoxAscent+ye.actualBoundingBoxDescent),lt=2,qe=ye.actualBoundingBoxLeft+lt,He=ye.actualBoundingBoxAscent+lt;Pe+=lt+lt,Re+=lt+lt,ne=new OffscreenCanvas(Pe,Re),re=ne.getContext("2d"),re.font=X,re.fillStyle=xe,re.fillText(w,qe,He);var ot=1/F;return{type:"bitmap",bitmap:ne.transferToImageBitmap(),matrix:[ot,0,0,ot,-Pe*ot/2,-Re*ot/2]}}t.exports=function(){return se().apply(this,arguments)},t.exports.reset=function(){se().reset()},t.exports.create=me,t.exports.shapeFromPath=Y,t.exports.shapeFromText=ae})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),rh,!1);const rT=rh.exports;rh.exports.create;const sT=()=>{const{questions:s,activeWeek:e,submissions:t,currentUser:r,submitAnswer:o,lastAnswerResult:l,setLastAnswerResult:u,setActiveTab:h}=fi(),[m,p]=Ae.useState(null),[_,M]=Ae.useState(!1),g=Ae.useMemo(()=>s.filter(k=>k.weekNumber===e),[s,e]),y=Ae.useMemo(()=>{const k=new Set(t.map(U=>U.questionId)),N=g.findIndex(U=>!k.has(U.id));return N===-1?g.length:N},[g,t]),E=y>=g.length&&g.length>0,C=g[y],S=Ae.useMemo(()=>{const k=new Set(t.map(N=>N.questionId));return g.filter(N=>k.has(N.id)).length},[g,t]),v=k=>{Xe.playTap(),p(k)},O=()=>{if(!C||!m||_)return;M(!0),o(C.id,m)&&rT({particleCount:50,spread:60,origin:{y:.7},colors:["#FF9900","#10B981","#38BDF8"]}),M(!1),p(null)};return Ae.useEffect(()=>{const k=N=>{if(l||E||!C)return;const U=N.key.toUpperCase();U==="A"||U==="1"?v("A"):U==="B"||U==="2"?v("B"):U==="C"||U==="3"?v("C"):U==="D"||U==="4"?v("D"):N.key==="Enter"&&m&&O()};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[m,l,E,C]),d.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-zinc-100",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 bg-zinc-950 border border-zinc-800 p-4 rounded-2xl",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsxs("div",{className:"w-10 h-10 rounded-xl bg-aws-orange text-zinc-950 flex items-center justify-center font-mono font-black text-base",children:["W",e]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("h1",{className:"font-mono font-bold text-white text-base sm:text-lg",children:["AWS_CERT_SPRINT // WEEK_",e]}),d.jsx("span",{className:"text-[10px] font-mono px-2 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",children:"ACTIVE"})]}),d.jsxs("p",{className:"text-xs text-zinc-400 font-mono mt-0.5",children:["Solved: ",S,"/",g.length," Modules • +50 Pts per node"]})]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-rose-500/30 text-xs font-mono font-bold text-rose-300",children:[d.jsx(la,{className:"w-3.5 h-3.5 text-rose-500 fill-rose-500"}),d.jsxs("span",{children:[r.hearts,"/5 HEARTS"]})]}),d.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-amber-500/30 text-xs font-mono font-bold text-amber-300",children:[d.jsx(kf,{className:"w-3.5 h-3.5 text-amber-500 fill-amber-500"}),d.jsxs("span",{children:[r.streak,"d STREAK"]})]})]})]}),d.jsx("div",{className:"w-full bg-zinc-900 rounded-full h-1.5 mb-8 overflow-hidden border border-zinc-800",children:d.jsx("div",{className:"bg-aws-orange h-full rounded-full transition-all duration-300",style:{width:`${g.length?S/g.length*100:0}%`}})}),E?d.jsxs("div",{className:"bg-zinc-950 border border-zinc-800 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden",children:[d.jsx("div",{className:"mx-auto w-16 h-16 rounded-2xl bg-aws-orange/10 border border-aws-orange/40 flex items-center justify-center mb-4 text-aws-orange",children:d.jsx(co,{className:"w-8 h-8"})}),d.jsx("span",{className:"px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold uppercase",children:"Sprint Complete"}),d.jsxs("h2",{className:"text-2xl font-mono font-bold text-white mt-2 mb-1",children:["Week ",e," Mastery Achieved"]}),d.jsx("p",{className:"text-xs text-zinc-400 font-mono max-w-sm mx-auto mb-6",children:"All questions solved. Your tower in the 3D Metropolis has expanded with new floors."}),d.jsxs("div",{className:"grid grid-cols-3 gap-3 max-w-md mx-auto mb-8 text-left font-mono text-xs",children:[d.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3",children:[d.jsx("span",{className:"text-zinc-500 block text-[10px]",children:"TOTAL SCORE"}),d.jsxs("span",{className:"text-base font-bold text-aws-orange",children:[r.points," PTS"]})]}),d.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3",children:[d.jsx("span",{className:"text-zinc-500 block text-[10px]",children:"SKYLINE"}),d.jsxs("span",{className:"text-base font-bold text-cyan-400",children:[r.floors," FLOORS"]})]}),d.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3",children:[d.jsx("span",{className:"text-zinc-500 block text-[10px]",children:"STREAK"}),d.jsxs("span",{className:"text-base font-bold text-amber-400",children:[r.streak," DAYS"]})]})]}),d.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3",children:[d.jsxs("button",{onClick:()=>{Xe.playTap(),h("city")},className:"w-full sm:w-auto px-6 py-3 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all",children:[d.jsx(xo,{className:"w-4 h-4"}),d.jsx("span",{children:"Inspect 3D Tower in City"})]}),d.jsxs("button",{onClick:()=>{Xe.playTap(),h("leaderboard")},className:"w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono font-semibold text-xs flex items-center justify-center gap-2 transition-all",children:[d.jsx(co,{className:"w-4 h-4"}),d.jsx("span",{children:"View Leaderboard"})]})]})]}):C?d.jsxs("div",{className:"bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl",children:[d.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-4",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("span",{className:"px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono font-bold text-aws-orange",children:["NODE ",y+1,"/",g.length]}),d.jsx("span",{className:"px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400",children:C.domain})]}),d.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-zinc-400 font-mono",children:[d.jsx(Of,{className:"w-3.5 h-3.5 text-emerald-400"}),d.jsxs("span",{children:["Tier: ",d.jsx("strong",{children:C.difficulty})]})]})]}),d.jsx("h2",{className:"text-base sm:text-lg font-semibold text-white leading-relaxed mb-6",children:C.questionText}),d.jsx("div",{className:"space-y-2.5 mb-8",children:C.options.map((k,N)=>{const U=m===k.key;return d.jsxs("button",{onClick:()=>v(k.key),className:`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${U?"bg-zinc-900 border-aws-orange text-white ring-1 ring-aws-orange":"bg-zinc-900/50 hover:bg-zinc-900 border-zinc-800/80 text-zinc-300"}`,children:[d.jsx("div",{className:`w-7 h-7 rounded-lg font-mono font-bold text-xs flex items-center justify-center shrink-0 transition-colors ${U?"bg-aws-orange text-zinc-950":"bg-zinc-800 text-zinc-400 border border-zinc-700"}`,children:k.key}),d.jsx("div",{className:"text-xs sm:text-sm pt-0.5 leading-relaxed",children:k.text})]},k.key)})}),d.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-zinc-800/80 font-mono text-xs",children:[d.jsxs("div",{className:"text-zinc-500 hidden sm:flex items-center gap-1",children:[d.jsx(ex,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Keyboard: Press [1..4] or [A..D] to select, [Enter] to submit"})]}),d.jsxs("button",{onClick:O,disabled:!m||_,className:`px-6 py-2.5 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 font-mono font-bold text-xs flex items-center gap-2 transition-all ${!m||_?"opacity-40 cursor-not-allowed filter grayscale":""}`,children:[d.jsx("span",{children:"Submit Answer"}),d.jsx(Uf,{className:"w-3.5 h-3.5"})]})]})]}):null,l&&d.jsx(nT,{result:l,onNext:()=>u(null),heartsRemaining:r.hearts}),d.jsx(iT,{})]})},aT=({topThree:s,onSelectStudent:e})=>{if(s.length<3)return null;const[t,r,o]=s;return d.jsxs("div",{className:"grid grid-cols-3 gap-2 sm:gap-6 items-end max-w-2xl mx-auto my-8 px-2 select-none font-mono",children:[d.jsxs("div",{onClick:()=>{Xe.playTap(),e(r)},className:"flex flex-col items-center cursor-pointer group order-1",children:[d.jsxs("div",{className:"relative mb-2 flex flex-col items-center",children:[d.jsx("span",{className:"px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[10px] font-bold uppercase mb-1",children:"#2 SILVER"}),d.jsx("img",{src:r.avatar,alt:r.name,className:"w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-zinc-800 border border-zinc-500 p-1 group-hover:scale-105 transition-transform"})]}),d.jsxs("div",{className:"text-center mb-1 max-w-[90px] sm:max-w-none",children:[d.jsx("div",{className:"text-xs sm:text-sm font-bold text-white truncate",children:r.name}),d.jsxs("div",{className:"text-[10px] text-zinc-500",children:[r.rollNumber," • ",r.department]})]}),d.jsxs("div",{className:"w-full h-24 sm:h-32 bg-zinc-900 border-t-2 border-zinc-400 rounded-t-2xl flex flex-col items-center justify-center p-2 shadow-lg",children:[d.jsx("span",{className:"text-lg sm:text-xl font-bold text-zinc-400",children:"2"}),d.jsxs("span",{className:"text-xs font-bold text-zinc-200 mt-1",children:[r.points," PTS"]}),d.jsxs("span",{className:"text-[10px] text-zinc-500",children:[r.floors," Floors"]})]})]}),d.jsxs("div",{onClick:()=>{Xe.playTap(),e(t)},className:"flex flex-col items-center cursor-pointer group order-2 -mt-4",children:[d.jsxs("div",{className:"relative mb-2 flex flex-col items-center",children:[d.jsx(d_,{className:"w-5 h-5 sm:w-6 sm:h-6 text-amber-400 fill-amber-400 mb-1"}),d.jsx("span",{className:"px-2 py-0.5 rounded bg-amber-400 text-black text-[10px] font-bold uppercase mb-1",children:"#1 APEX"}),d.jsx("img",{src:t.avatar,alt:t.name,className:"w-14 h-14 sm:w-18 sm:h-18 rounded-2xl bg-zinc-800 border-2 border-amber-400 p-1 shadow-glow-orange group-hover:scale-105 transition-transform"})]}),d.jsxs("div",{className:"text-center mb-1 max-w-[100px] sm:max-w-none",children:[d.jsx("div",{className:"text-sm sm:text-base font-bold text-white truncate",children:t.name}),d.jsxs("div",{className:"text-[11px] text-amber-400 font-semibold",children:[t.rollNumber," • ",t.department]})]}),d.jsxs("div",{className:"w-full h-32 sm:h-44 bg-zinc-900 border-t-2 border-amber-400 rounded-t-3xl flex flex-col items-center justify-center p-2 shadow-2xl relative overflow-hidden",children:[d.jsx(co,{className:"w-4 h-4 text-amber-400 mb-1"}),d.jsx("span",{className:"text-xl sm:text-2xl font-bold text-amber-400",children:"1"}),d.jsxs("span",{className:"text-xs sm:text-sm font-bold text-white mt-1",children:[t.points," PTS"]}),d.jsxs("span",{className:"text-[10px] text-amber-300 font-bold",children:[t.floors," Floors"]})]})]}),d.jsxs("div",{onClick:()=>{Xe.playTap(),e(o)},className:"flex flex-col items-center cursor-pointer group order-3",children:[d.jsxs("div",{className:"relative mb-2 flex flex-col items-center",children:[d.jsx("span",{className:"px-2 py-0.5 rounded bg-zinc-800 text-amber-600 text-[10px] font-bold uppercase mb-1",children:"#3 BRONZE"}),d.jsx("img",{src:o.avatar,alt:o.name,className:"w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-zinc-800 border border-amber-800 p-1 group-hover:scale-105 transition-transform"})]}),d.jsxs("div",{className:"text-center mb-1 max-w-[90px] sm:max-w-none",children:[d.jsx("div",{className:"text-xs sm:text-sm font-bold text-white truncate",children:o.name}),d.jsxs("div",{className:"text-[10px] text-zinc-500",children:[o.rollNumber," • ",o.department]})]}),d.jsxs("div",{className:"w-full h-20 sm:h-28 bg-zinc-900 border-t-2 border-amber-800 rounded-t-2xl flex flex-col items-center justify-center p-2 shadow-lg",children:[d.jsx("span",{className:"text-lg sm:text-xl font-bold text-amber-600",children:"3"}),d.jsxs("span",{className:"text-xs font-bold text-zinc-200 mt-1",children:[o.points," PTS"]}),d.jsxs("span",{className:"text-[10px] text-zinc-500",children:[o.floors," Floors"]})]})]})]})},oT=({onOpenCertificate:s,onSelectStudent:e})=>{const{students:t,currentUser:r}=fi(),[o,l]=Ae.useState("weekly"),[u,h]=Ae.useState(""),[m,p]=Ae.useState("ALL"),_=Ae.useMemo(()=>{const y=[...t];return o==="weekly"?y.sort((E,C)=>(C.weeklyPoints||C.points)-(E.weeklyPoints||E.points)):y.sort((E,C)=>C.points-E.points)},[t,o]),M=Ae.useMemo(()=>_.filter(y=>{const E=m==="ALL"||y.department===m,C=y.name.toLowerCase().includes(u.toLowerCase())||y.rollNumber.toLowerCase().includes(u.toLowerCase());return E&&C}),[_,m,u]),g=_.slice(0,3);return d.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in text-zinc-100",children:[d.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-aws-orange mb-2",children:[d.jsx(co,{className:"w-3 h-3"}),d.jsx("span",{children:"CAMPUS RANKINGS"})]}),d.jsx("h1",{className:"text-3xl sm:text-4xl font-heading text-white",children:"Leaderboard"}),d.jsx("p",{className:"text-xs sm:text-sm text-zinc-400 font-sans mt-1",children:"Top architects receive official verifiable certification badges and custom 3D skyscraper crests."})]}),d.jsxs("div",{className:"flex items-center bg-zinc-900 border border-zinc-800 p-1 rounded-xl self-start md:self-auto font-mono text-xs",children:[d.jsxs("button",{onClick:()=>{Xe.playTap(),l("weekly")},className:`px-3.5 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${o==="weekly"?"bg-aws-orange text-black":"text-zinc-400 hover:text-white"}`,children:[d.jsx(go,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Weekly Sprint"})]}),d.jsxs("button",{onClick:()=>{Xe.playTap(),l("monthly")},className:`px-3.5 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${o==="monthly"?"bg-zinc-800 text-white":"text-zinc-400 hover:text-white"}`,children:[d.jsx(Kv,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Monthly All-Time"})]})]})]}),m==="ALL"&&u===""&&d.jsx(aT,{topThree:g,onSelectStudent:e,onOpenCertificate:s}),d.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-zinc-950 border border-zinc-800 p-3 rounded-2xl mb-6",children:[d.jsxs("div",{className:"relative flex-1",children:[d.jsx(Ff,{className:"w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2"}),d.jsx("input",{type:"text",placeholder:"Search student or roll number...",value:u,onChange:y=>h(y.target.value),className:"w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-aws-orange"})]}),d.jsxs("select",{value:m,onChange:y=>{Xe.playTap(),p(y.target.value)},className:"bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono rounded-xl px-4 py-2 focus:outline-none focus:border-aws-orange",children:[d.jsx("option",{value:"ALL",children:"All Departments"}),d.jsx("option",{value:"CSE",children:"CSE"}),d.jsx("option",{value:"IT",children:"IT"}),d.jsx("option",{value:"AI & Data Science",children:"AI & Data Science"}),d.jsx("option",{value:"ECE",children:"ECE"}),d.jsx("option",{value:"Cyber Security",children:"Cyber Security"})]})]}),d.jsx("div",{className:"bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl",children:d.jsx("div",{className:"overflow-x-auto",children:d.jsxs("table",{className:"w-full text-left text-xs font-mono",children:[d.jsx("thead",{className:"bg-zinc-900/80 text-zinc-400 text-[11px] uppercase tracking-wider border-b border-zinc-800",children:d.jsxs("tr",{children:[d.jsx("th",{className:"py-3.5 px-4 text-center w-16",children:"Rank"}),d.jsx("th",{className:"py-3.5 px-4",children:"Student"}),d.jsx("th",{className:"py-3.5 px-4 hidden md:table-cell",children:"Dept & Roll"}),d.jsx("th",{className:"py-3.5 px-4 text-center",children:"Floors"}),d.jsx("th",{className:"py-3.5 px-4 text-center",children:"Streak"}),d.jsx("th",{className:"py-3.5 px-4 text-right",children:"Points"}),d.jsx("th",{className:"py-3.5 px-4 text-center w-28",children:"Badge"})]})}),d.jsx("tbody",{className:"divide-y divide-zinc-800/60",children:M.map((y,E)=>{const C=E+1,S=y.id===r.id,v=o==="weekly"&&y.weeklyPoints||y.points;return d.jsxs("tr",{className:`transition-colors ${S?"bg-aws-orange/10 border-l-2 border-l-aws-orange":"hover:bg-zinc-900/40"}`,children:[d.jsx("td",{className:"py-3 px-4 text-center font-bold",children:C===1?d.jsx("span",{className:"w-6 h-6 rounded-lg bg-amber-400 text-black flex items-center justify-center mx-auto text-xs font-black",children:"1"}):C===2?d.jsx("span",{className:"w-6 h-6 rounded-lg bg-zinc-400 text-black flex items-center justify-center mx-auto text-xs font-black",children:"2"}):C===3?d.jsx("span",{className:"w-6 h-6 rounded-lg bg-amber-800 text-white flex items-center justify-center mx-auto text-xs font-black",children:"3"}):d.jsxs("span",{className:"text-zinc-500",children:["#",C]})}),d.jsx("td",{className:"py-3 px-4",children:d.jsxs("div",{onClick:()=>{Xe.playTap(),e(y)},className:"flex items-center gap-2.5 cursor-pointer group",children:[d.jsx("img",{src:y.avatar,alt:y.name,className:"w-8 h-8 rounded-lg bg-zinc-800"}),d.jsxs("div",{children:[d.jsxs("div",{className:"font-bold text-white group-hover:text-aws-orange transition-colors flex items-center gap-1.5",children:[d.jsx("span",{children:y.name}),S&&d.jsx("span",{className:"px-1 py-0.2 rounded bg-aws-orange text-black font-black text-[9px]",children:"YOU"})]}),d.jsxs("div",{className:"text-[10px] text-zinc-500 md:hidden",children:[y.rollNumber," • ",y.department]})]})]})}),d.jsxs("td",{className:"py-3 px-4 hidden md:table-cell text-zinc-400",children:[d.jsx("span",{className:"text-cyan-400 font-semibold",children:y.department}),d.jsx("span",{className:"text-zinc-600 mx-1.5",children:"•"}),d.jsx("span",{children:y.rollNumber})]}),d.jsx("td",{className:"py-3 px-4 text-center font-bold text-aws-orange",children:d.jsxs("span",{className:"inline-flex items-center gap-1",children:[d.jsx(xo,{className:"w-3.5 h-3.5 text-zinc-500"}),y.floors,"F"]})}),d.jsx("td",{className:"py-3 px-4 text-center font-bold text-amber-400",children:d.jsxs("span",{className:"inline-flex items-center gap-1",children:[d.jsx(kf,{className:"w-3.5 h-3.5 fill-amber-500"}),y.streak,"d"]})}),d.jsxs("td",{className:"py-3 px-4 text-right font-bold text-white",children:[v," ",d.jsx("span",{className:"text-[10px] text-zinc-500",children:"PTS"})]}),d.jsx("td",{className:"py-3 px-4 text-center",children:d.jsxs("button",{onClick:()=>{Xe.playTap(),s(y)},className:"px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-[11px] transition-all inline-flex items-center gap-1 mx-auto",children:[d.jsx(mo,{className:"w-3 h-3 text-aws-orange"}),d.jsx("span",{children:"Cert"})]})})]},y.id)})})]})})})]})},lT=()=>{const{announcements:s}=fi(),e=[{title:"AWS Certified Cloud Practitioner (CLF-C02)",level:"Foundational",badgeColor:"bg-emerald-500/15 text-emerald-400 border-emerald-500/30",description:"Ideal starting credential for all college students. Validates foundational understanding of AWS cloud services, security, architecture, pricing, and support models.",voucherStatus:"Student Exam Voucher Eligible",link:"https://aws.amazon.com/certification/certified-cloud-practitioner/"},{title:"AWS Certified Solutions Architect - Associate (SAA-C03)",level:"Associate",badgeColor:"bg-aws-orange/15 text-aws-orange border-aws-orange/30",description:"The industry standard for cloud engineering. Covers resilient architectures, high-performing compute/storage systems, secure VPC network topologies, and cost optimization.",voucherStatus:"Curriculum Covered in Arena",link:"https://aws.amazon.com/certification/certified-solutions-architect-associate/"},{title:"AWS Certified Developer - Associate (DVA-C02)",level:"Associate",badgeColor:"bg-cyan-500/15 text-cyan-400 border-cyan-500/30",description:"Focuses on developing, deploying, and debugging cloud applications using AWS Lambda, DynamoDB, API Gateway, and automated CI/CD pipelines.",voucherStatus:"Hands-on Labs Available",link:"https://aws.amazon.com/certification/certified-developer-associate/"}];return d.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in text-zinc-100 font-sans",children:[d.jsxs("div",{className:"mb-10 text-center sm:text-left",children:[d.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-aws-orange mb-2",children:[d.jsx(Vd,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"RESOURCES & COMMUNITY HUB"})]}),d.jsx("h1",{className:"text-3xl sm:text-4xl font-heading text-white",children:"Certification Tracks & Events"}),d.jsx("p",{className:"text-xs sm:text-sm text-zinc-400 font-sans mt-1 max-w-xl",children:"Official certification blueprints, study jams, and official WhatsApp group channels curated by your college SPOC."}),d.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 mt-5",children:[d.jsxs("a",{href:"https://chat.whatsapp.com/",target:"_blank",rel:"noopener noreferrer",onClick:()=>Xe.playTap(),className:"px-4 py-2 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 text-xs font-mono font-bold inline-flex items-center gap-2 transition-all shadow-sm",children:[d.jsx(A_,{className:"w-4 h-4"}),d.jsx("span",{children:"Join Official WhatsApp Group"})]}),d.jsxs("a",{href:"https://explore.skillbuilder.aws/",target:"_blank",rel:"noopener noreferrer",onClick:()=>Xe.playTap(),className:"px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-mono font-semibold inline-flex items-center gap-2 transition-all",children:[d.jsx(Vd,{className:"w-4 h-4 text-cyan-400"}),d.jsx("span",{children:"AWS Skill Builder Free Labs"})]})]})]}),s.length>0&&d.jsxs("div",{className:"mb-12",children:[d.jsx("h2",{className:"text-xl font-heading text-white mb-4",children:"Active Community Broadcasts"}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs",children:s.map(t=>d.jsxs("div",{className:"bg-zinc-950 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 text-[10px] uppercase font-bold",children:t.category}),d.jsx("span",{className:"text-[10px] text-zinc-500",children:t.date})]}),d.jsx("h3",{className:"text-sm font-bold text-white mb-1.5 font-sans",children:t.title}),d.jsx("p",{className:"text-zinc-400 text-xs font-sans leading-relaxed",children:t.description})]}),d.jsx("div",{className:"mt-4 pt-3 border-t border-zinc-800/80",children:d.jsxs("a",{href:t.linkUrl,target:"_blank",rel:"noopener noreferrer",onClick:()=>Xe.playTap(),className:"text-aws-orange hover:text-amber-300 font-bold inline-flex items-center gap-1 transition-colors",children:[d.jsx("span",{children:t.linkText}),d.jsx(Om,{className:"w-3 h-3"})]})})]},t.id))})]}),d.jsxs("div",{children:[d.jsx("h2",{className:"text-xl font-heading text-white mb-4",children:"Certification Exam Blueprints"}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:e.map((t,r)=>d.jsxs("div",{className:"bg-zinc-950 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between mb-3 font-mono text-xs",children:[d.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold border ${t.badgeColor}`,children:t.level}),d.jsx("span",{className:"text-[10px] text-zinc-400",children:"AWS Track"})]}),d.jsx("h3",{className:"text-sm font-heading font-normal text-white mb-2 leading-snug",children:t.title}),d.jsx("p",{className:"text-xs text-zinc-400 font-sans leading-relaxed mb-4",children:t.description})]}),d.jsxs("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",onClick:()=>Xe.playTap(),className:"w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all",children:[d.jsx("span",{children:"View Blueprint"}),d.jsx(Om,{className:"w-3 h-3"})]})]},r))})]})]})},cT=()=>{const{activeWeek:s,setActiveWeek:e,questions:t,addNewQuestion:r,addNewAnnouncement:o,announcements:l,students:u,removeStudent:h,refillHearts:m}=fi(),[p,_]=Ae.useState("students"),[M,g]=Ae.useState(!1),[y,E]=Ae.useState(""),[C,S]=Ae.useState(null),[v,O]=Ae.useState("IAM & Security"),[k,N]=Ae.useState("Associate"),[U,I]=Ae.useState(s),[B,T]=Ae.useState(""),[P,H]=Ae.useState(""),[V,G]=Ae.useState(""),[te,me]=Ae.useState(""),[Z,se]=Ae.useState(""),[Q,Y]=Ae.useState("A"),[ae,L]=Ae.useState(""),[w,F]=Ae.useState(""),[xe,_e]=Ae.useState(""),[Se,X]=Ae.useState("Voucher"),[ne,re]=Ae.useState(""),[ye,Pe]=Ae.useState(""),[Re,lt]=Ae.useState("Register Now"),qe=u.filter(Te=>Te.name.toLowerCase().includes(y.toLowerCase())||Te.rollNumber.toLowerCase().includes(y.toLowerCase())||Te.department.toLowerCase().includes(y.toLowerCase())),He=()=>{C&&(h(C.id),S(null),g(!0),setTimeout(()=>g(!1),3e3))},ot=Te=>{Te.preventDefault(),!(!B||!P||!V||!te||!Z||!ae)&&(Xe.playFloorAdded(),r({weekNumber:Number(U),domain:v,difficulty:k,questionText:B,options:[{key:"A",text:P},{key:"B",text:V},{key:"C",text:te},{key:"D",text:Z}],correctOption:Q,explanation:ae,awsDocTopic:w||"AWS Cloud Architecture"}),T(""),H(""),G(""),me(""),se(""),L(""),F(""),g(!0),setTimeout(()=>g(!1),3e3))},ct=Te=>{Te.preventDefault(),!(!xe||!ne)&&(Xe.playFloorAdded(),o({title:xe,category:Se,description:ne,linkUrl:ye||"#",linkText:Re,date:"Just now",isHot:!0}),_e(""),re(""),Pe(""),g(!0),setTimeout(()=>g(!1),3e3))},pt=()=>{Xe.playTap(),T("A media company needs to distribute low-latency video streaming content globally while preventing unauthorized downloads through geo-restrictions. Which AWS solution meets this requirement?"),H("Amazon CloudFront with Signed URLs and Geo-restriction enabled."),G("Amazon S3 with Cross-Region Replication to all regions."),me("AWS Direct Connect with dedicated fiber optic links."),se("Elastic Load Balancing with AWS Global Accelerator."),Y("A"),O("Cloud Architecture & Cost"),N("Associate"),L("Amazon CloudFront is a global Content Delivery Network (CDN) with built-in support for signed URLs/cookies for access control and geo-restriction to restrict viewers in specific countries."),F("Amazon CloudFront Edge Optimization")};return d.jsxs("div",{className:"text-zinc-100 font-sans",children:[d.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-zinc-950 border border-zinc-800 p-5 rounded-3xl",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("h1",{className:"text-xl font-heading text-white",children:"SPOC Administration Console"}),d.jsx("span",{className:"px-2 py-0.2 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30 text-[10px] font-mono font-bold uppercase",children:"FACULTY/SPOC ONLY"})]}),d.jsx("p",{className:"text-xs text-zinc-400 font-mono mt-1",children:"Manage registered student accounts, master question banks, and weekly challenge sprints."})]}),d.jsxs("div",{className:"flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-2 rounded-2xl",children:[d.jsx("span",{className:"text-xs font-mono font-bold text-zinc-400 pl-2",children:"ACTIVE SPRINT:"}),[1,2,3,4].map(Te=>d.jsxs("button",{onClick:()=>{Xe.playTap(),e(Te)},className:`w-8 h-8 rounded-xl text-xs font-mono font-bold transition-all ${s===Te?"bg-aws-orange text-black shadow-sm":"bg-zinc-800 text-zinc-400 hover:text-white"}`,children:["W",Te]},Te))]})]}),d.jsxs("div",{className:"flex items-center gap-2 mb-6 border-b border-zinc-800 pb-2 overflow-x-auto",children:[d.jsxs("button",{onClick:()=>{Xe.playTap(),_("students")},className:`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 whitespace-nowrap ${p==="students"?"bg-aws-orange text-black font-bold":"text-zinc-400 hover:text-white hover:bg-zinc-900"}`,children:[d.jsx(ay,{className:"w-4 h-4"}),d.jsxs("span",{children:["Student Directory (",u.length,")"]})]}),d.jsxs("button",{onClick:()=>{Xe.playTap(),_("questions")},className:`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 whitespace-nowrap ${p==="questions"?"bg-aws-orange text-black font-bold":"text-zinc-400 hover:text-white hover:bg-zinc-900"}`,children:[d.jsx(Fm,{className:"w-4 h-4"}),d.jsxs("span",{children:["Question Bank (",t.length,")"]})]}),d.jsxs("button",{onClick:()=>{Xe.playTap(),_("announcements")},className:`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 whitespace-nowrap ${p==="announcements"?"bg-aws-orange text-black font-bold":"text-zinc-400 hover:text-white hover:bg-zinc-900"}`,children:[d.jsx(Hd,{className:"w-4 h-4"}),d.jsxs("span",{children:["Broadcast Events (",l.length,")"]})]}),d.jsxs("button",{onClick:()=>{Xe.playTap(),_("settings")},className:`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 whitespace-nowrap ${p==="settings"?"bg-aws-orange text-black font-bold":"text-zinc-400 hover:text-white hover:bg-zinc-900"}`,children:[d.jsx(zm,{className:"w-4 h-4"}),d.jsx("span",{children:"Dev Controls"})]})]}),M&&d.jsxs("div",{className:"mb-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-bold flex items-center gap-2 animate-fade-in",children:[d.jsx(kr,{className:"w-4 h-4"}),d.jsx("span",{children:"Operation completed successfully! Database updated."})]}),p==="students"&&d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-zinc-950 border border-zinc-800 p-3 rounded-2xl",children:[d.jsxs("div",{className:"relative flex-1",children:[d.jsx(Ff,{className:"w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2"}),d.jsx("input",{type:"text",placeholder:"Filter by name, roll number, or department...",value:y,onChange:Te=>E(Te.target.value),className:"w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-aws-orange"})]}),d.jsxs("span",{className:"text-xs font-mono text-zinc-400 self-center",children:["Showing ",qe.length," of ",u.length," Registered Students"]})]}),d.jsx("div",{className:"bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl",children:d.jsx("div",{className:"overflow-x-auto",children:d.jsxs("table",{className:"w-full text-left text-xs font-mono",children:[d.jsx("thead",{className:"bg-zinc-900/80 text-zinc-400 text-[11px] uppercase tracking-wider border-b border-zinc-800",children:d.jsxs("tr",{children:[d.jsx("th",{className:"py-3.5 px-4",children:"Student"}),d.jsx("th",{className:"py-3.5 px-4",children:"Roll Number"}),d.jsx("th",{className:"py-3.5 px-4",children:"Department & Year"}),d.jsx("th",{className:"py-3.5 px-4 text-center",children:"Floors"}),d.jsx("th",{className:"py-3.5 px-4 text-center",children:"Streak"}),d.jsx("th",{className:"py-3.5 px-4 text-right",children:"Points"}),d.jsx("th",{className:"py-3.5 px-4 text-center w-28",children:"Action"})]})}),d.jsx("tbody",{className:"divide-y divide-zinc-800/60",children:qe.map(Te=>d.jsxs("tr",{className:"hover:bg-zinc-900/40 transition-colors",children:[d.jsx("td",{className:"py-3 px-4",children:d.jsxs("div",{className:"flex items-center gap-2.5",children:[d.jsx("img",{src:Te.avatar,alt:Te.name,className:"w-7 h-7 rounded-lg bg-zinc-800"}),d.jsx("span",{className:"font-bold text-white",children:Te.name})]})}),d.jsx("td",{className:"py-3 px-4 text-cyan-400",children:Te.rollNumber}),d.jsxs("td",{className:"py-3 px-4 text-zinc-300",children:[Te.department," • Year ",Te.year]}),d.jsxs("td",{className:"py-3 px-4 text-center text-aws-orange font-bold",children:[Te.floors,"F"]}),d.jsxs("td",{className:"py-3 px-4 text-center text-amber-400",children:[Te.streak,"d"]}),d.jsx("td",{className:"py-3 px-4 text-right font-bold text-white",children:Te.points}),d.jsx("td",{className:"py-3 px-4 text-center",children:d.jsxs("button",{onClick:()=>S(Te),className:"p-1.5 rounded-lg bg-rose-950/40 text-rose-400 hover:bg-rose-900/60 border border-rose-500/30 transition-all inline-flex items-center gap-1 text-[10px]",title:"Remove student from database",children:[d.jsx(J_,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Remove"})]})})]},Te.id))})]})})}),C&&d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in font-mono",children:d.jsxs("div",{className:"bg-zinc-950 border border-rose-500/40 rounded-3xl p-6 max-w-sm w-full text-center shadow-2xl",children:[d.jsx("div",{className:"w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto mb-3",children:d.jsx(ty,{className:"w-6 h-6"})}),d.jsx("h3",{className:"text-base font-bold text-white mb-1",children:"Remove Student Account?"}),d.jsxs("p",{className:"text-xs text-zinc-400 mb-6",children:["Are you sure you want to remove ",d.jsx("strong",{className:"text-white",children:C.name})," (",C.rollNumber,")? Their 3D tower and scores will be deleted."]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{onClick:He,className:"flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-all",children:"Yes, Remove"}),d.jsx("button",{onClick:()=>S(null),className:"flex-1 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold text-xs border border-zinc-700 transition-all",children:"Cancel"})]})]})})]}),p==="questions"&&d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[d.jsxs("div",{className:"lg:col-span-2 bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-xl",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsxs("h2",{className:"text-sm font-mono font-bold text-white flex items-center gap-2",children:[d.jsx(Fm,{className:"w-4 h-4 text-aws-orange"}),"Create AWS Certification MCQ"]}),d.jsxs("button",{type:"button",onClick:pt,className:"text-[11px] font-mono font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-1 rounded-lg flex items-center gap-1",children:[d.jsx(J0,{className:"w-3 h-3"}),d.jsx("span",{children:"Auto-Fill Cert Sample"})]})]}),d.jsxs("form",{onSubmit:ot,className:"space-y-4 text-xs font-mono",children:[d.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-zinc-400 font-semibold mb-1",children:"Week Schedule"}),d.jsxs("select",{value:U,onChange:Te=>I(Number(Te.target.value)),className:"w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-aws-orange",children:[d.jsx("option",{value:1,children:"Week 1 (Active)"}),d.jsx("option",{value:2,children:"Week 2"}),d.jsx("option",{value:3,children:"Week 3"}),d.jsx("option",{value:4,children:"Week 4"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-zinc-400 font-semibold mb-1",children:"Cert Domain"}),d.jsxs("select",{value:v,onChange:Te=>O(Te.target.value),className:"w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-aws-orange",children:[d.jsx("option",{value:"IAM & Security",children:"IAM & Security"}),d.jsx("option",{value:"Compute (EC2 & Lambda)",children:"Compute (EC2 & Lambda)"}),d.jsx("option",{value:"Storage (S3 & EBS)",children:"Storage (S3 & EBS)"}),d.jsx("option",{value:"VPC & Networking",children:"VPC & Networking"}),d.jsx("option",{value:"Databases (RDS & DynamoDB)",children:"Databases (RDS & DynamoDB)"}),d.jsx("option",{value:"Cloud Architecture & Cost",children:"Cloud Architecture & Cost"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-zinc-400 font-semibold mb-1",children:"Difficulty"}),d.jsxs("select",{value:k,onChange:Te=>N(Te.target.value),className:"w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-aws-orange",children:[d.jsx("option",{value:"Beginner",children:"Beginner (Cloud Practitioner)"}),d.jsx("option",{value:"Associate",children:"Associate (Solutions Architect)"}),d.jsx("option",{value:"Pro",children:"Pro / Specialty"})]})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-zinc-400 font-semibold mb-1",children:"Question Text"}),d.jsx("textarea",{rows:3,required:!0,placeholder:"e.g. An enterprise needs to host an application across Multi-AZ...",value:B,onChange:Te=>T(Te.target.value),className:"w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-aws-orange"})]}),d.jsxs("div",{className:"space-y-2",children:[d.jsx("label",{className:"block text-zinc-400 font-semibold",children:"Options (Select Correct Key on Left)"}),[{key:"A",val:P,setVal:H},{key:"B",val:V,setVal:G},{key:"C",val:te,setVal:me},{key:"D",val:Z,setVal:se}].map(({key:Te,val:St,setVal:bt})=>d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{type:"button",onClick:()=>Y(Te),className:`w-7 h-7 rounded-lg font-mono font-bold flex items-center justify-center transition-all ${Q===Te?"bg-emerald-500 text-black shadow-sm":"bg-zinc-800 text-zinc-400 hover:text-white"}`,children:Te}),d.jsx("input",{type:"text",required:!0,placeholder:`Option ${Te} text...`,value:St,onChange:Rt=>bt(Rt.target.value),className:"flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-1.5 text-white focus:outline-none focus:border-aws-orange"})]},Te))]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-zinc-400 font-semibold mb-1",children:"Architectural Explanation"}),d.jsx("textarea",{rows:2,required:!0,placeholder:"Explain why the answer is correct...",value:ae,onChange:Te=>L(Te.target.value),className:"w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-aws-orange"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-zinc-400 font-semibold mb-1",children:"AWS Topic Tag"}),d.jsx("input",{type:"text",placeholder:"e.g. Amazon Route 53 DNS Policies",value:w,onChange:Te=>F(Te.target.value),className:"w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-aws-orange"})]}),d.jsxs("button",{type:"submit",className:"w-full py-3 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2",children:[d.jsx(V_,{className:"w-4 h-4"}),d.jsxs("span",{children:["Save Question to Week ",U]})]})]})]}),d.jsxs("div",{className:"bg-zinc-950 border border-zinc-800 rounded-3xl p-5 shadow-xl font-mono",children:[d.jsxs("h3",{className:"text-xs font-bold text-white mb-3 flex items-center justify-between",children:[d.jsx("span",{children:"Master Question Bank"}),d.jsxs("span",{className:"text-aws-orange",children:[t.length," Items"]})]}),d.jsx("div",{className:"space-y-2.5 max-h-[560px] overflow-y-auto pr-1",children:t.map((Te,St)=>d.jsxs("div",{className:"p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-[11px]",children:[d.jsxs("div",{className:"flex items-center justify-between mb-1",children:[d.jsxs("span",{className:"text-zinc-400 font-bold",children:["W",Te.weekNumber," • Q",St+1]}),d.jsx("span",{className:"text-cyan-400 truncate max-w-[120px]",children:Te.domain})]}),d.jsx("p",{className:"text-zinc-200 line-clamp-2",children:Te.questionText}),d.jsxs("div",{className:"mt-1 text-emerald-400 font-bold",children:["Correct: Option ",Te.correctOption]})]},Te.id))})]})]}),p==="announcements"&&d.jsxs("div",{className:"bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-xl max-w-xl mx-auto font-mono text-xs",children:[d.jsxs("h2",{className:"text-sm font-bold text-white flex items-center gap-2 mb-4",children:[d.jsx(Hd,{className:"w-4 h-4 text-aws-orange"}),"Publish Community Event / Voucher Announcement"]}),d.jsxs("form",{onSubmit:ct,className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-zinc-400 font-semibold mb-1",children:"Title"}),d.jsx("input",{type:"text",required:!0,placeholder:"e.g. AWS Student Cloud Day Registrations Open",value:xe,onChange:Te=>_e(Te.target.value),className:"w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-aws-orange"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-zinc-400 font-semibold mb-1",children:"Category"}),d.jsxs("select",{value:Se,onChange:Te=>X(Te.target.value),className:"w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-aws-orange",children:[d.jsx("option",{value:"Voucher",children:"Exam Discount Voucher"}),d.jsx("option",{value:"Event",children:"Community Event"}),d.jsx("option",{value:"Workshop",children:"Technical Workshop"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-zinc-400 font-semibold mb-1",children:"Description"}),d.jsx("textarea",{rows:3,required:!0,placeholder:"Event details, date, timing, and prerequisites...",value:ne,onChange:Te=>re(Te.target.value),className:"w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-aws-orange"})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-zinc-400 font-semibold mb-1",children:"Link URL"}),d.jsx("input",{type:"url",placeholder:"https://...",value:ye,onChange:Te=>Pe(Te.target.value),className:"w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-aws-orange"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-zinc-400 font-semibold mb-1",children:"Link Label"}),d.jsx("input",{type:"text",placeholder:"Register Now",value:Re,onChange:Te=>lt(Te.target.value),className:"w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-aws-orange"})]})]}),d.jsx("button",{type:"submit",className:"w-full py-3 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 font-bold text-xs",children:"Broadcast Announcement"})]})]}),p==="settings"&&d.jsxs("div",{className:"bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-xl max-w-xl mx-auto space-y-4 font-mono text-xs",children:[d.jsxs("h2",{className:"text-sm font-bold text-white flex items-center gap-2 mb-2",children:[d.jsx(zm,{className:"w-4 h-4 text-aws-orange"}),"Developer & Demo Controls"]}),d.jsxs("div",{className:"p-4 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("div",{className:"font-bold text-white",children:"Replenish Player Hearts (5/5)"}),d.jsx("div",{className:"text-[11px] text-zinc-400",children:"Instantly bypass the 45-minute refill cooldown for testing"})]}),d.jsx("button",{onClick:()=>{m(),g(!0),setTimeout(()=>g(!1),2e3)},className:"px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold",children:"Refill Hearts"})]}),d.jsxs("div",{className:"p-4 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("div",{className:"font-bold text-white",children:"Reset Local Database"}),d.jsx("div",{className:"text-[11px] text-zinc-400",children:"Clear test storage and revert to fresh default roster"})]}),d.jsx("button",{onClick:()=>{localStorage.clear(),window.location.reload()},className:"bg-rose-950/60 hover:bg-rose-900/60 text-rose-300 border border-rose-500/40 px-3 py-1.5 rounded-xl font-bold",children:"Clear Storage"})]})]})]})},uT=({onExitAdmin:s})=>{const[e,t]=Ae.useState(""),[r,o]=Ae.useState(!1),[l,u]=Ae.useState(!1),h=m=>{m.preventDefault(),e.trim().toLowerCase()==="aws2026"||e.trim().toLowerCase()==="admin"?(Xe.playFloorAdded(),o(!0),u(!1)):(Xe.playWrong(),u(!0))};return d.jsxs("div",{className:"min-h-screen bg-[#06080d] text-zinc-100 flex flex-col justify-between selection:bg-aws-orange selection:text-black",children:[d.jsxs("header",{className:"w-full bg-zinc-950 border-b border-zinc-800 px-6 py-4 flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"w-9 h-9 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400 font-bold",children:d.jsx(Q0,{className:"w-4 h-4"})}),d.jsxs("div",{children:[d.jsxs("div",{className:"text-sm font-mono font-bold text-white flex items-center gap-2",children:[d.jsx("span",{children:"AWS SPOC PORTAL"}),d.jsx("span",{className:"text-[10px] px-2 py-0.2 bg-purple-500/20 text-purple-300 rounded border border-purple-500/30",children:"RESTRICTED ROUTE (/admin)"})]}),d.jsx("div",{className:"text-[11px] text-zinc-500 font-mono",children:"Faculty & Student Lead Administration"})]})]}),d.jsxs("button",{onClick:()=>{Xe.playTap(),s()},className:"flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-mono font-semibold text-zinc-300 hover:text-white transition-all",children:[d.jsx(jv,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Exit to Student View"})]})]}),d.jsx("main",{className:"flex-1 max-w-6xl mx-auto w-full p-4 sm:p-6 lg:p-8",children:r?d.jsx(cT,{}):d.jsxs("div",{className:"max-w-md mx-auto my-16 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl text-center",children:[d.jsx("div",{className:"w-16 h-16 rounded-2xl bg-purple-500/15 border border-purple-500/40 flex items-center justify-center mx-auto mb-4 text-purple-400",children:d.jsx(y_,{className:"w-8 h-8"})}),d.jsx("h1",{className:"text-xl font-bold font-mono text-white mb-1",children:"SPOC Authentication Required"}),d.jsx("p",{className:"text-xs text-zinc-400 font-mono mb-6",children:"Enter the master SPOC passkey to manage question banks, weekly resets, and event banners."}),d.jsxs("form",{onSubmit:h,className:"space-y-4 text-left",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-[11px] font-mono font-semibold text-zinc-400 mb-1.5",children:"SPOC PASSKEY"}),d.jsx("input",{type:"password",required:!0,autoFocus:!0,placeholder:"Enter passcode (default: aws2026)",value:e,onChange:m=>{t(m.target.value),u(!1)},className:"w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-aws-orange"})]}),l&&d.jsxs("div",{className:"flex items-center gap-1.5 text-rose-400 text-xs font-mono",children:[d.jsx(e_,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Invalid passkey. Default test key is: aws2026"})]}),d.jsxs("button",{type:"submit",className:"w-full py-3 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 font-mono font-bold text-xs transition-all shadow-lg shadow-aws-orange/20 flex items-center justify-center gap-2",children:[d.jsx(Of,{className:"w-4 h-4"}),d.jsx("span",{children:"Verify & Unlock Portal"})]})]}),d.jsx("div",{className:"mt-6 pt-6 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-400",children:"Passkey is configured by the AWS Student Community Lead."})]})}),d.jsx("footer",{className:"w-full bg-zinc-950 border-t border-zinc-800/80 py-4 px-6 text-center text-xs font-mono text-zinc-400",children:"AWS Student Community • SPOC Master Console v2.0"})]})};function dT(s,e){let t=0;const r=`AWS-CC-${s}-${e}-VERIFIED`;for(let o=0;o<r.length;o++){const l=r.charCodeAt(o);t=(t<<5)-t+l,t|=0}return`AWS-${Math.abs(t).toString(16).toUpperCase()}-2026`}function fT(s,e){const t=s.getContext("2d");if(!t)return;const r=1200,o=800;s.width=r,s.height=o;const l=t.createLinearGradient(0,0,r,o);l.addColorStop(0,"#090D16"),l.addColorStop(.5,"#111927"),l.addColorStop(1,"#080C14"),t.fillStyle=l,t.fillRect(0,0,r,o);const u=t.createRadialGradient(r/2,o/2-50,50,r/2,o/2,500);u.addColorStop(0,"rgba(255, 153, 0, 0.08)"),u.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=u,t.fillRect(0,0,r,o),t.strokeStyle="#1E293B",t.lineWidth=1,t.strokeRect(30,30,r-60,o-60);const h=t.createLinearGradient(50,50,r-50,o-50);h.addColorStop(0,"#FF9900"),h.addColorStop(.5,"#FFD700"),h.addColorStop(1,"#FF7700"),t.strokeStyle=h,t.lineWidth=3,t.strokeRect(45,45,r-90,o-90);const m=24;t.fillStyle="#FF9900",t.fillRect(40,40,m,4),t.fillRect(40,40,4,m),t.fillRect(r-40-m,40,m,4),t.fillRect(r-44,40,4,m),t.fillRect(40,o-44,m,4),t.fillRect(40,o-40-m,4,m),t.fillRect(r-40-m,o-44,m,4),t.fillRect(r-44,o-40-m,4,m),t.textAlign="center",t.font='700 18px "Space Grotesk", sans-serif',t.fillStyle="#FF9900",t.fillText("AWS STUDENT CLOUD COMMUNITY • COLLEGE CHAPTER",r/2,105),t.font='800 38px "Space Grotesk", sans-serif',t.fillStyle="#FFFFFF",t.fillText("CERTIFICATE OF ACHIEVEMENT",r/2,160),t.font='500 16px "Plus Jakarta Sans", sans-serif',t.fillStyle="#94A3B8",t.fillText("THIS PRESTIGIOUS BADGE OF EXCELLENCE IS PROUDLY PRESENTED TO",r/2,205),t.font='800 48px "Space Grotesk", sans-serif';const p=t.createLinearGradient(r/2-250,0,r/2+250,0);p.addColorStop(0,"#FFFFFF"),p.addColorStop(.5,"#FFD700"),p.addColorStop(1,"#FF9900"),t.fillStyle=p,t.fillText(e.student.name.toUpperCase(),r/2,275),t.strokeStyle="#FF9900",t.lineWidth=2,t.beginPath(),t.moveTo(r/2-180,295),t.lineTo(r/2+180,295),t.stroke(),t.font='600 16px "JetBrains Mono", monospace',t.fillStyle="#38BDF8",t.fillText(`[ ROLL: ${e.student.rollNumber} | DEPT: ${e.student.department} | ${e.student.year} YEAR ]`,r/2,335),t.font='400 18px "Plus Jakarta Sans", sans-serif',t.fillStyle="#CBD5E1",t.fillText("For outstanding demonstration of Cloud Computing expertise, active weekly participation,",r/2,390),t.fillText("and securing a top rank in the AWS Cloud City gamified architecture challenges.",r/2,420);const _=465,M=190,g=75,y=30,E=r/2-(M*3+y*2)/2;Bd(t,E,_,M,g,"TOTAL SCORE",`${e.student.points} PTS`,"#10B981"),Bd(t,E+M+y,_,M,g,"SKYLINE TOWER",`${e.student.floors} FLOORS`,"#FF9900"),Bd(t,E+(M+y)*2,_,M,g,"AWARD TIER",e.rankTitle,"#8B5CF6");const C=660;t.textAlign="center",t.font='italic 700 22px "Space Grotesk", sans-serif',t.fillStyle="#F8FAFC",t.fillText("AWS Student SPOC",240,C),t.strokeStyle="#475569",t.lineWidth=1.5,t.beginPath(),t.moveTo(140,C+12),t.lineTo(340,C+12),t.stroke(),t.font='600 13px "Plus Jakarta Sans", sans-serif',t.fillStyle="#94A3B8",t.fillText("FACULTY & STUDENT COORDINATOR",240,C+32),t.font='italic 700 22px "Space Grotesk", sans-serif',t.fillStyle="#F8FAFC",t.fillText("AWS Community Lead",r-240,C),t.beginPath(),t.moveTo(r-340,C+12),t.lineTo(r-140,C+12),t.stroke(),t.font='600 13px "Plus Jakarta Sans", sans-serif',t.fillStyle="#94A3B8",t.fillText("COLLEGE TECHNICAL CHAPTER",r-240,C+32),t.beginPath(),t.arc(r/2,C+5,42,0,Math.PI*2),t.fillStyle="rgba(255, 153, 0, 0.1)",t.fill(),t.strokeStyle="#FF9900",t.lineWidth=2,t.stroke(),t.font='800 11px "Space Grotesk", sans-serif',t.fillStyle="#FF9900",t.fillText("VERIFIED",r/2,C-5),t.fillText("AWS CLUB",r/2,C+10),t.fillText("2026",r/2,C+24),t.font='500 12px "JetBrains Mono", monospace',t.fillStyle="#64748B",t.fillText(`VERIFICATION CODE: ${e.verificationHash} • ISSUED ON: ${e.dateString}`,r/2,o-55)}function Bd(s,e,t,r,o,l,u,h){s.fillStyle="#0F172A",s.beginPath(),s.roundRect(e,t,r,o,8),s.fill(),s.strokeStyle="#1E293B",s.lineWidth=1,s.stroke(),s.fillStyle=h,s.fillRect(e+12,t,r-24,2),s.textAlign="center",s.font='600 11px "Plus Jakarta Sans", sans-serif',s.fillStyle="#94A3B8",s.fillText(l,e+r/2,t+25),s.font='700 18px "Space Grotesk", sans-serif',s.fillStyle=h,s.fillText(u,e+r/2,t+54)}function hT(s,e){const t=document.createElement("a");t.download=`${e}.png`,t.href=s.toDataURL("image/png"),t.click()}const pT=({student:s,onClose:e})=>{const t=Ae.useRef(null),[r,o]=Ae.useState(!1);if(Ae.useEffect(()=>{if(!s||!t.current)return;const h=new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),m=dT(s.rollNumber,h);let p="Cloud Practitioner Achiever";s.points>=1e3?p="Apex Cloud Champion (#1 Tier)":s.points>=500?p="Solutions Architect Elite":s.points>=250&&(p="VPC & Serverless Pioneer"),fT(t.current,{student:s,rankTitle:p,dateString:h,verificationHash:m})},[s]),!s)return null;const l=()=>{Xe.playFloorAdded(),t.current&&hT(t.current,`AWS_Certificate_${s.rollNumber}_${s.name.replace(/\s+/g,"_")}`)},u=()=>{Xe.playTap();const h=`🎓 I just earned the AWS Cloud City Certificate of Achievement with ${s.points} points and an official ${s.floors}-floor tower! Check out our college AWS community leaderboard.`;navigator.clipboard.writeText(h),o(!0),setTimeout(()=>o(!1),2500)};return d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fade-in",children:d.jsxs("div",{className:"relative w-full max-w-4xl bg-[#0B0F19] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-slate-100 flex flex-col items-center",children:[d.jsx("div",{className:"absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-aws-orange/15 blur-3xl pointer-events-none"}),d.jsx("button",{onClick:()=>{Xe.playTap(),e()},className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors z-20",children:d.jsx(mc,{className:"w-5 h-5"})}),d.jsxs("div",{className:"text-center mb-5",children:[d.jsx("div",{className:"flex items-center justify-center gap-2 mb-1",children:d.jsxs("span",{className:"px-3 py-0.5 rounded-full bg-aws-orange/15 text-aws-orange border border-aws-orange/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1",children:[d.jsx(mo,{className:"w-3.5 h-3.5"}),"OFFICIAL AWS CLUB CREDENTIAL"]})}),d.jsx("h2",{className:"text-2xl sm:text-3xl font-black font-display text-white",children:"Certificate of Achievement"}),d.jsxs("p",{className:"text-xs text-slate-400 mt-1",children:["Verified student credential for ",d.jsx("strong",{className:"text-white",children:s.name})," (",s.rollNumber,")"]})]}),d.jsx("div",{className:"relative w-full max-w-3xl aspect-[1200/800] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-950 mb-6 flex items-center justify-center",children:d.jsx("canvas",{ref:t,className:"w-full h-full object-contain"})}),d.jsxs("div",{className:"w-full max-w-xl flex flex-col sm:flex-row items-center gap-3",children:[d.jsxs("button",{onClick:l,className:"w-full sm:flex-1 cyber-btn-primary py-3 text-sm",children:[d.jsx(h_,{className:"w-4 h-4"}),d.jsx("span",{children:"Download High-Res PNG"})]}),d.jsxs("button",{onClick:u,className:"w-full sm:w-auto cyber-btn-secondary py-3 px-6 text-sm flex items-center justify-center gap-2",children:[r?d.jsx(Qv,{className:"w-4 h-4 text-emerald-400"}):d.jsx(j_,{className:"w-4 h-4 text-cyan-400"}),d.jsx("span",{children:r?"Copied Share Link!":"Share Achievement"})]})]})]})})},mT=({isOpen:s,onClose:e,onOpenCertificate:t})=>{const{currentUser:r,badges:o,submissions:l}=fi();if(!s)return null;const u=l.length,h=l.filter(p=>p.isCorrect).length,m=u>0?Math.round(h/u*100):100;return d.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden animate-fade-in font-sans",children:[d.jsx("div",{onClick:()=>{Xe.playTap(),e()},className:"absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"}),d.jsx("div",{className:"fixed inset-y-0 right-0 max-w-full flex pl-10",children:d.jsxs("div",{className:"w-screen max-w-md bg-zinc-950 border-l border-zinc-800 p-6 shadow-2xl overflow-y-auto text-zinc-100 flex flex-col justify-between",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-zinc-800 mb-6",children:[d.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono font-bold text-aws-orange uppercase tracking-wider",children:[d.jsx(ry,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Student Cloud Profile"})]}),d.jsx("button",{onClick:()=>{Xe.playTap(),e()},className:"p-1.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white transition-colors",children:d.jsx(mc,{className:"w-4 h-4"})})]}),d.jsxs("div",{className:"flex items-center gap-3.5 bg-zinc-900 border border-zinc-800 p-4 rounded-2xl mb-6",children:[d.jsx("img",{src:r.avatar,alt:r.name,className:"w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 p-1"}),d.jsxs("div",{children:[d.jsx("h2",{className:"text-lg font-heading text-white",children:r.name}),d.jsxs("div",{className:"text-xs text-cyan-400 font-mono mt-0.5",children:["Roll: ",r.rollNumber]}),d.jsxs("div",{className:"text-xs text-zinc-400 font-mono",children:[r.department," • Year ",r.year]})]})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-2.5 mb-6 font-mono",children:[d.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center",children:[d.jsx("span",{className:"text-[10px] text-zinc-500 block mb-1",children:"TOTAL POINTS"}),d.jsx("span",{className:"text-lg font-bold text-aws-orange",children:r.points})]}),d.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center",children:[d.jsx("span",{className:"text-[10px] text-zinc-500 block mb-1",children:"SKYLINE TOWER"}),d.jsxs("span",{className:"text-lg font-bold text-cyan-400",children:[r.floors," Floors"]})]}),d.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center",children:[d.jsx("span",{className:"text-[10px] text-zinc-500 block mb-1",children:"ACCURACY"}),d.jsxs("span",{className:"text-lg font-bold text-emerald-400",children:[m,"%"]})]}),d.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center",children:[d.jsx("span",{className:"text-[10px] text-zinc-500 block mb-1",children:"STREAK"}),d.jsxs("span",{className:"text-lg font-bold text-amber-400",children:[r.streak," Days"]})]})]}),d.jsxs("div",{className:"mb-6",children:[d.jsxs("div",{className:"text-xs font-mono font-bold text-zinc-400 mb-3 flex items-center justify-between",children:[d.jsx("span",{children:"Earned AWS Badges"}),d.jsxs("span",{className:"text-aws-orange",children:[r.unlockedBadges.length,"/",o.length]})]}),d.jsx("div",{className:"space-y-2 font-mono text-xs",children:o.map(p=>{const _=r.unlockedBadges.includes(p.id);return d.jsxs("div",{className:`p-3 rounded-xl border flex items-center justify-between transition-all ${_?"bg-zinc-900 border-zinc-700 text-zinc-200":"bg-zinc-950 border-zinc-900 text-zinc-600"}`,children:[d.jsxs("div",{children:[d.jsx("div",{className:"font-bold text-white",children:p.title}),d.jsx("div",{className:"text-[10px] text-zinc-400 font-sans mt-0.5",children:p.description})]}),_&&d.jsx(kr,{className:"w-4 h-4 text-emerald-400 shrink-0 ml-2"})]},p.id)})})]})]}),d.jsx("div",{className:"pt-4 border-t border-zinc-800",children:d.jsxs("button",{onClick:()=>{Xe.playTap(),t(),e()},className:"w-full py-3 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all",children:[d.jsx(mo,{className:"w-4 h-4"}),d.jsx("span",{children:"View & Download Certificate"})]})})]})})]})},xT=()=>{const{activeTab:s,setActiveTab:e,currentUser:t,setSelectedStudentModal:r}=fi(),[o,l]=Ae.useState(!1),[u,h]=Ae.useState(null),[m,p]=Ae.useState(()=>window.location.pathname.includes("/admin")||window.location.search.includes("portal=admin"));Ae.useEffect(()=>{const y=()=>{const E=window.location.pathname.includes("/admin")||window.location.search.includes("portal=admin");p(E)};return window.addEventListener("popstate",y),()=>window.removeEventListener("popstate",y)},[]);const _=y=>{h(y)},M=()=>{window.history.pushState({},"","/"),p(!1)},g=()=>{window.history.pushState({},"","/admin"),p(!0)};return m?d.jsx(uT,{onExitAdmin:M}):d.jsxs("div",{className:"min-h-screen bg-[#06080d] text-zinc-100 flex flex-col justify-between selection:bg-aws-orange selection:text-black font-sans",children:[d.jsx("div",{className:"w-full",children:d.jsx(hy,{onOpenProfile:()=>l(!0)})}),d.jsxs("main",{className:"flex-1 w-full",children:[s==="home"&&d.jsx(py,{}),s==="city"&&d.jsx(tT,{onOpenCertificate:_}),s==="quiz"&&d.jsx(sT,{}),s==="leaderboard"&&d.jsx(oT,{onOpenCertificate:_,onSelectStudent:y=>r(y)}),s==="announcements"&&d.jsx(lT,{})]}),u&&d.jsx(pT,{student:u,onClose:()=>h(null)}),d.jsx(mT,{isOpen:o,onClose:()=>l(!1),onOpenCertificate:()=>_(t)}),d.jsx("footer",{className:"w-full bg-zinc-950 border-t border-zinc-800/80 py-6 px-4 sm:px-6 lg:px-8 text-xs text-zinc-500 font-mono",children:d.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-5 h-5 rounded-md bg-aws-orange text-zinc-950 flex items-center justify-center font-bold",children:d.jsx(Z0,{className:"w-3 h-3 fill-current"})}),d.jsx("span",{className:"text-zinc-300 font-semibold",children:"AWS Student Community"}),d.jsx("span",{className:"text-zinc-700",children:"•"}),d.jsx("span",{children:"3D Metropolis Challenge Platform"})]}),d.jsxs("div",{className:"flex items-center gap-4 text-[11px]",children:[d.jsx("button",{onClick:()=>{Xe.playTap(),e("home")},className:"hover:text-white transition-colors",children:"Home"}),d.jsx("span",{children:"•"}),d.jsx("button",{onClick:()=>{Xe.playTap(),e("city")},className:"hover:text-cyan-400 transition-colors",children:"3D City"}),d.jsx("span",{children:"•"}),d.jsx("button",{onClick:()=>{Xe.playTap(),e("quiz")},className:"hover:text-aws-orange transition-colors",children:"Weekly Arena"}),d.jsx("span",{children:"•"}),d.jsx("button",{onClick:()=>{Xe.playTap(),e("leaderboard")},className:"hover:text-zinc-300 transition-colors",children:"Leaderboard"}),d.jsx("span",{children:"•"}),d.jsxs("button",{onClick:()=>{Xe.playTap(),g()},className:"text-zinc-600 hover:text-purple-400 flex items-center gap-1 transition-colors",title:"Restricted SPOC Portal",children:[d.jsx(Q0,{className:"w-3 h-3"}),d.jsx("span",{children:"SPOC Console (/admin)"})]})]})]})})]})};function gT(){return d.jsx(kv,{children:d.jsx(xT,{})})}Av.createRoot(document.getElementById("root")).render(d.jsx(yv.StrictMode,{children:d.jsx(gT,{})}));
