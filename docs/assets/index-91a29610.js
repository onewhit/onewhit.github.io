function xE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function NE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gs={},PE={get exports(){return Gs},set exports(t){Gs=t}},eu={},k={},LE={get exports(){return k},set exports(t){k=t}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Do=Symbol.for("react.element"),ME=Symbol.for("react.portal"),bE=Symbol.for("react.fragment"),OE=Symbol.for("react.strict_mode"),FE=Symbol.for("react.profiler"),$E=Symbol.for("react.provider"),UE=Symbol.for("react.context"),BE=Symbol.for("react.forward_ref"),VE=Symbol.for("react.suspense"),jE=Symbol.for("react.memo"),zE=Symbol.for("react.lazy"),jp=Symbol.iterator;function HE(t){return t===null||typeof t!="object"?null:(t=jp&&t[jp]||t["@@iterator"],typeof t=="function"?t:null)}var $y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uy=Object.assign,By={};function Gi(t,e,n){this.props=t,this.context=e,this.refs=By,this.updater=n||$y}Gi.prototype.isReactComponent={};Gi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vy(){}Vy.prototype=Gi.prototype;function Rd(t,e,n){this.props=t,this.context=e,this.refs=By,this.updater=n||$y}var Dd=Rd.prototype=new Vy;Dd.constructor=Rd;Uy(Dd,Gi.prototype);Dd.isPureReactComponent=!0;var zp=Array.isArray,jy=Object.prototype.hasOwnProperty,xd={current:null},zy={key:!0,ref:!0,__self:!0,__source:!0};function Hy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jy.call(e,r)&&!zy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Do,type:t,key:s,ref:o,props:i,_owner:xd.current}}function WE(t,e){return{$$typeof:Do,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Do}function GE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hp=/\/+/g;function oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?GE(""+t.key):e.toString(36)}function $a(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Do:case ME:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+oc(o,0):r,zp(i)?(n="",t!=null&&(n=t.replace(Hp,"$&/")+"/"),$a(i,e,n,"",function(u){return u})):i!=null&&(Nd(i)&&(i=WE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Hp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",zp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+oc(s,a);o+=$a(s,e,n,l,i)}else if(l=HE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+oc(s,a++),o+=$a(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function da(t,e,n){if(t==null)return t;var r=[],i=0;return $a(t,r,"","",function(s){return e.call(n,s,i++)}),r}function KE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},Ua={transition:null},qE={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:xd};te.Children={map:da,forEach:function(t,e,n){da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return da(t,function(){e++}),e},toArray:function(t){return da(t,function(e){return e})||[]},only:function(t){if(!Nd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Gi;te.Fragment=bE;te.Profiler=FE;te.PureComponent=Rd;te.StrictMode=OE;te.Suspense=VE;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qE;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Uy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jy.call(e,l)&&!zy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Do,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:UE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$E,_context:t},t.Consumer=t};te.createElement=Hy;te.createFactory=function(t){var e=Hy.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:BE,render:t}};te.isValidElement=Nd;te.lazy=function(t){return{$$typeof:zE,_payload:{_status:-1,_result:t},_init:KE}};te.memo=function(t,e){return{$$typeof:jE,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Ua.transition;Ua.transition={};try{t()}finally{Ua.transition=e}};te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};te.useCallback=function(t,e){return ft.current.useCallback(t,e)};te.useContext=function(t){return ft.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};te.useEffect=function(t,e){return ft.current.useEffect(t,e)};te.useId=function(){return ft.current.useId()};te.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return ft.current.useMemo(t,e)};te.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};te.useRef=function(t){return ft.current.useRef(t)};te.useState=function(t){return ft.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return ft.current.useTransition()};te.version="18.2.0";(function(t){t.exports=te})(LE);const Pd=NE(k),Zc=xE({__proto__:null,default:Pd},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QE=k,YE=Symbol.for("react.element"),JE=Symbol.for("react.fragment"),XE=Object.prototype.hasOwnProperty,ZE=QE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eS={key:!0,ref:!0,__self:!0,__source:!0};function Wy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)XE.call(e,r)&&!eS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:YE,type:t,key:s,ref:o,props:i,_owner:ZE.current}}eu.Fragment=JE;eu.jsx=Wy;eu.jsxs=Wy;(function(t){t.exports=eu})(PE);const Lt=Gs.Fragment,S=Gs.jsx,he=Gs.jsxs;var eh={},th={},tS={get exports(){return th},set exports(t){th=t}},At={},nh={},nS={get exports(){return nh},set exports(t){nh=t}},Gy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,K){var X=P.length;P.push(K);e:for(;0<X;){var ue=X-1>>>1,Re=P[ue];if(0<i(Re,K))P[ue]=K,P[X]=Re,X=ue;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var K=P[0],X=P.pop();if(X!==K){P[0]=X;e:for(var ue=0,Re=P.length,Yr=Re>>>1;ue<Yr;){var Yt=2*(ue+1)-1,is=P[Yt],dn=Yt+1,Jr=P[dn];if(0>i(is,X))dn<Re&&0>i(Jr,is)?(P[ue]=Jr,P[dn]=X,ue=dn):(P[ue]=is,P[Yt]=X,ue=Yt);else if(dn<Re&&0>i(Jr,X))P[ue]=Jr,P[dn]=X,ue=dn;else break e}}return K}function i(P,K){var X=P.sortIndex-K.sortIndex;return X!==0?X:P.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,g=!1,y=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var K=n(u);K!==null;){if(K.callback===null)r(u);else if(K.startTime<=P)r(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function w(P){if(v=!1,m(P),!y)if(n(l)!==null)y=!0,rs(I);else{var K=n(u);K!==null&&Ae(w,K.startTime-P)}}function I(P,K){y=!1,v&&(v=!1,p(M),M=-1),g=!0;var X=h;try{for(m(K),d=n(l);d!==null&&(!(d.expirationTime>K)||P&&!Se());){var ue=d.callback;if(typeof ue=="function"){d.callback=null,h=d.priorityLevel;var Re=ue(d.expirationTime<=K);K=t.unstable_now(),typeof Re=="function"?d.callback=Re:d===n(l)&&r(l),m(K)}else r(l);d=n(l)}if(d!==null)var Yr=!0;else{var Yt=n(u);Yt!==null&&Ae(w,Yt.startTime-K),Yr=!1}return Yr}finally{d=null,h=X,g=!1}}var x=!1,N=null,M=-1,Z=5,H=-1;function Se(){return!(t.unstable_now()-H<Z)}function Ft(){if(N!==null){var P=t.unstable_now();H=P;var K=!0;try{K=N(!0,P)}finally{K?hn():(x=!1,N=null)}}else x=!1}var hn;if(typeof f=="function")hn=function(){f(Ft)};else if(typeof MessageChannel<"u"){var oa=new MessageChannel,Xu=oa.port2;oa.port1.onmessage=Ft,hn=function(){Xu.postMessage(null)}}else hn=function(){C(Ft,0)};function rs(P){N=P,x||(x=!0,hn())}function Ae(P,K){M=C(function(){P(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,rs(I))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var X=h;h=K;try{return P()}finally{h=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,K){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var X=h;h=P;try{return K()}finally{h=X}},t.unstable_scheduleCallback=function(P,K,X){var ue=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ue+X:ue):X=ue,P){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=X+Re,P={id:c++,callback:K,priorityLevel:P,startTime:X,expirationTime:Re,sortIndex:-1},X>ue?(P.sortIndex=X,e(u,P),n(l)===null&&P===n(u)&&(v?(p(M),M=-1):v=!0,Ae(w,X-ue))):(P.sortIndex=Re,e(l,P),y||g||(y=!0,rs(I))),P},t.unstable_shouldYield=Se,t.unstable_wrapCallback=function(P){var K=h;return function(){var X=h;h=K;try{return P.apply(this,arguments)}finally{h=X}}}})(Gy);(function(t){t.exports=Gy})(nS);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ky=k,kt=nh;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qy=new Set,Ks={};function Hr(t,e){Ri(t,e),Ri(t+"Capture",e)}function Ri(t,e){for(Ks[t]=e,t=0;t<e.length;t++)qy.add(e[t])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rh=Object.prototype.hasOwnProperty,rS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wp={},Gp={};function iS(t){return rh.call(Gp,t)?!0:rh.call(Wp,t)?!1:rS.test(t)?Gp[t]=!0:(Wp[t]=!0,!1)}function sS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function oS(t,e,n,r){if(e===null||typeof e>"u"||sS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ld=/[\-:]([a-z])/g;function Md(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ld,Md);qe[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ld,Md);qe[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ld,Md);qe[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function bd(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oS(e,n,i,r)&&(n=null),r||i===null?iS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ln=Ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),ni=Symbol.for("react.portal"),ri=Symbol.for("react.fragment"),Od=Symbol.for("react.strict_mode"),ih=Symbol.for("react.profiler"),Qy=Symbol.for("react.provider"),Yy=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),sh=Symbol.for("react.suspense"),oh=Symbol.for("react.suspense_list"),$d=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),Jy=Symbol.for("react.offscreen"),Kp=Symbol.iterator;function ls(t){return t===null||typeof t!="object"?null:(t=Kp&&t[Kp]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,ac;function _s(t){if(ac===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ac=e&&e[1]||""}return`
`+ac+t}var lc=!1;function uc(t,e){if(!t||lc)return"";lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{lc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_s(t):""}function aS(t){switch(t.tag){case 5:return _s(t.type);case 16:return _s("Lazy");case 13:return _s("Suspense");case 19:return _s("SuspenseList");case 0:case 2:case 15:return t=uc(t.type,!1),t;case 11:return t=uc(t.type.render,!1),t;case 1:return t=uc(t.type,!0),t;default:return""}}function ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ri:return"Fragment";case ni:return"Portal";case ih:return"Profiler";case Od:return"StrictMode";case sh:return"Suspense";case oh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yy:return(t.displayName||"Context")+".Consumer";case Qy:return(t._context.displayName||"Context")+".Provider";case Fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $d:return e=t.displayName||null,e!==null?e:ah(t.type)||"Memo";case Un:e=t._payload,t=t._init;try{return ah(t(e))}catch{}}return null}function lS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ah(e);case 8:return e===Od?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uS(t){var e=Xy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pa(t){t._valueTracker||(t._valueTracker=uS(t))}function Zy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lh(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ev(t,e){e=e.checked,e!=null&&bd(t,"checked",e,!1)}function uh(t,e){ev(t,e);var n=lr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ch(t,e.type,n):e.hasOwnProperty("defaultValue")&&ch(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ch(t,e,n){(e!=="number"||sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Es=Array.isArray;function yi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(Es(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function tv(t,e){var n=lr(e.value),r=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Jp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function nv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?nv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ma,rv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cS=["Webkit","ms","Moz","O"];Object.keys(xs).forEach(function(t){cS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xs[e]=xs[t]})});function iv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xs.hasOwnProperty(t)&&xs[t]?(""+e).trim():e+"px"}function sv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=iv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var hS=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fh(t,e){if(e){if(hS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function ph(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mh=null;function Ud(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gh=null,vi=null,wi=null;function Xp(t){if(t=Po(t)){if(typeof gh!="function")throw Error(R(280));var e=t.stateNode;e&&(e=su(e),gh(t.stateNode,t.type,e))}}function ov(t){vi?wi?wi.push(t):wi=[t]:vi=t}function av(){if(vi){var t=vi,e=wi;if(wi=vi=null,Xp(t),e)for(t=0;t<e.length;t++)Xp(e[t])}}function lv(t,e){return t(e)}function uv(){}var cc=!1;function cv(t,e,n){if(cc)return t(e,n);cc=!0;try{return lv(t,e,n)}finally{cc=!1,(vi!==null||wi!==null)&&(uv(),av())}}function Qs(t,e){var n=t.stateNode;if(n===null)return null;var r=su(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var yh=!1;if(kn)try{var us={};Object.defineProperty(us,"passive",{get:function(){yh=!0}}),window.addEventListener("test",us,us),window.removeEventListener("test",us,us)}catch{yh=!1}function dS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ns=!1,ol=null,al=!1,vh=null,fS={onError:function(t){Ns=!0,ol=t}};function pS(t,e,n,r,i,s,o,a,l){Ns=!1,ol=null,dS.apply(fS,arguments)}function mS(t,e,n,r,i,s,o,a,l){if(pS.apply(this,arguments),Ns){if(Ns){var u=ol;Ns=!1,ol=null}else throw Error(R(198));al||(al=!0,vh=u)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zp(t){if(Wr(t)!==t)throw Error(R(188))}function gS(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Zp(i),t;if(s===r)return Zp(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function dv(t){return t=gS(t),t!==null?fv(t):null}function fv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=fv(t);if(e!==null)return e;t=t.sibling}return null}var pv=kt.unstable_scheduleCallback,em=kt.unstable_cancelCallback,yS=kt.unstable_shouldYield,vS=kt.unstable_requestPaint,Ie=kt.unstable_now,wS=kt.unstable_getCurrentPriorityLevel,Bd=kt.unstable_ImmediatePriority,mv=kt.unstable_UserBlockingPriority,ll=kt.unstable_NormalPriority,_S=kt.unstable_LowPriority,gv=kt.unstable_IdlePriority,tu=null,nn=null;function ES(t){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(tu,t,void 0,(t.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:kS,SS=Math.log,CS=Math.LN2;function kS(t){return t>>>=0,t===0?32:31-(SS(t)/CS|0)|0}var ga=64,ya=4194304;function Ss(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ul(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ss(a):(s&=o,s!==0&&(r=Ss(s)))}else o=n&~i,o!==0?r=Ss(o):s!==0&&(r=Ss(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Wt(e),i=1<<n,r|=t[n],e&=~i;return r}function TS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=TS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function wh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yv(){var t=ga;return ga<<=1,!(ga&4194240)&&(ga=64),t}function hc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wt(e),t[e]=n}function AS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Wt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Vd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Wt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function vv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wv,jd,_v,Ev,Sv,_h=!1,va=[],Qn=null,Yn=null,Jn=null,Ys=new Map,Js=new Map,Vn=[],RS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tm(t,e){switch(t){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":Ys.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(e.pointerId)}}function cs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Po(e),e!==null&&jd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function DS(t,e,n,r,i){switch(e){case"focusin":return Qn=cs(Qn,t,e,n,r,i),!0;case"dragenter":return Yn=cs(Yn,t,e,n,r,i),!0;case"mouseover":return Jn=cs(Jn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ys.set(s,cs(Ys.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Js.set(s,cs(Js.get(s)||null,t,e,n,r,i)),!0}return!1}function Cv(t){var e=Sr(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=hv(n),e!==null){t.blockedOn=e,Sv(t.priority,function(){_v(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ba(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Eh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);mh=r,n.target.dispatchEvent(r),mh=null}else return e=Po(n),e!==null&&jd(e),t.blockedOn=n,!1;e.shift()}return!0}function nm(t,e,n){Ba(t)&&n.delete(e)}function xS(){_h=!1,Qn!==null&&Ba(Qn)&&(Qn=null),Yn!==null&&Ba(Yn)&&(Yn=null),Jn!==null&&Ba(Jn)&&(Jn=null),Ys.forEach(nm),Js.forEach(nm)}function hs(t,e){t.blockedOn===e&&(t.blockedOn=null,_h||(_h=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,xS)))}function Xs(t){function e(i){return hs(i,t)}if(0<va.length){hs(va[0],t);for(var n=1;n<va.length;n++){var r=va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qn!==null&&hs(Qn,t),Yn!==null&&hs(Yn,t),Jn!==null&&hs(Jn,t),Ys.forEach(e),Js.forEach(e),n=0;n<Vn.length;n++)r=Vn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vn.length&&(n=Vn[0],n.blockedOn===null);)Cv(n),n.blockedOn===null&&Vn.shift()}var _i=Ln.ReactCurrentBatchConfig,cl=!0;function NS(t,e,n,r){var i=ce,s=_i.transition;_i.transition=null;try{ce=1,zd(t,e,n,r)}finally{ce=i,_i.transition=s}}function PS(t,e,n,r){var i=ce,s=_i.transition;_i.transition=null;try{ce=4,zd(t,e,n,r)}finally{ce=i,_i.transition=s}}function zd(t,e,n,r){if(cl){var i=Eh(t,e,n,r);if(i===null)Ec(t,e,r,hl,n),tm(t,r);else if(DS(i,t,e,n,r))r.stopPropagation();else if(tm(t,r),e&4&&-1<RS.indexOf(t)){for(;i!==null;){var s=Po(i);if(s!==null&&wv(s),s=Eh(t,e,n,r),s===null&&Ec(t,e,r,hl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ec(t,e,r,null,n)}}var hl=null;function Eh(t,e,n,r){if(hl=null,t=Ud(r),t=Sr(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function kv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wS()){case Bd:return 1;case mv:return 4;case ll:case _S:return 16;case gv:return 536870912;default:return 16}default:return 16}}var Kn=null,Hd=null,Va=null;function Tv(){if(Va)return Va;var t,e=Hd,n=e.length,r,i="value"in Kn?Kn.value:Kn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Va=i.slice(t,1<r?1-r:void 0)}function ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wa(){return!0}function rm(){return!1}function Rt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wa:rm,this.isPropagationStopped=rm,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),e}var Ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wd=Rt(Ki),No=Ee({},Ki,{view:0,detail:0}),LS=Rt(No),dc,fc,ds,nu=Ee({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ds&&(ds&&t.type==="mousemove"?(dc=t.screenX-ds.screenX,fc=t.screenY-ds.screenY):fc=dc=0,ds=t),dc)},movementY:function(t){return"movementY"in t?t.movementY:fc}}),im=Rt(nu),MS=Ee({},nu,{dataTransfer:0}),bS=Rt(MS),OS=Ee({},No,{relatedTarget:0}),pc=Rt(OS),FS=Ee({},Ki,{animationName:0,elapsedTime:0,pseudoElement:0}),$S=Rt(FS),US=Ee({},Ki,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),BS=Rt(US),VS=Ee({},Ki,{data:0}),sm=Rt(VS),jS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function WS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=HS[t])?!!e[t]:!1}function Gd(){return WS}var GS=Ee({},No,{key:function(t){if(t.key){var e=jS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gd,charCode:function(t){return t.type==="keypress"?ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),KS=Rt(GS),qS=Ee({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),om=Rt(qS),QS=Ee({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gd}),YS=Rt(QS),JS=Ee({},Ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),XS=Rt(JS),ZS=Ee({},nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eC=Rt(ZS),tC=[9,13,27,32],Kd=kn&&"CompositionEvent"in window,Ps=null;kn&&"documentMode"in document&&(Ps=document.documentMode);var nC=kn&&"TextEvent"in window&&!Ps,Iv=kn&&(!Kd||Ps&&8<Ps&&11>=Ps),am=String.fromCharCode(32),lm=!1;function Av(t,e){switch(t){case"keyup":return tC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ii=!1;function rC(t,e){switch(t){case"compositionend":return Rv(e);case"keypress":return e.which!==32?null:(lm=!0,am);case"textInput":return t=e.data,t===am&&lm?null:t;default:return null}}function iC(t,e){if(ii)return t==="compositionend"||!Kd&&Av(t,e)?(t=Tv(),Va=Hd=Kn=null,ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Iv&&e.locale!=="ko"?null:e.data;default:return null}}var sC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function um(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sC[t.type]:e==="textarea"}function Dv(t,e,n,r){ov(r),e=dl(e,"onChange"),0<e.length&&(n=new Wd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ls=null,Zs=null;function oC(t){Bv(t,0)}function ru(t){var e=ai(t);if(Zy(e))return t}function aC(t,e){if(t==="change")return e}var xv=!1;if(kn){var mc;if(kn){var gc="oninput"in document;if(!gc){var cm=document.createElement("div");cm.setAttribute("oninput","return;"),gc=typeof cm.oninput=="function"}mc=gc}else mc=!1;xv=mc&&(!document.documentMode||9<document.documentMode)}function hm(){Ls&&(Ls.detachEvent("onpropertychange",Nv),Zs=Ls=null)}function Nv(t){if(t.propertyName==="value"&&ru(Zs)){var e=[];Dv(e,Zs,t,Ud(t)),cv(oC,e)}}function lC(t,e,n){t==="focusin"?(hm(),Ls=e,Zs=n,Ls.attachEvent("onpropertychange",Nv)):t==="focusout"&&hm()}function uC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ru(Zs)}function cC(t,e){if(t==="click")return ru(e)}function hC(t,e){if(t==="input"||t==="change")return ru(e)}function dC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kt=typeof Object.is=="function"?Object.is:dC;function eo(t,e){if(Kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rh.call(e,i)||!Kt(t[i],e[i]))return!1}return!0}function dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fm(t,e){var n=dm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dm(n)}}function Pv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lv(){for(var t=window,e=sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sl(t.document)}return e}function qd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fC(t){var e=Lv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pv(n.ownerDocument.documentElement,n)){if(r!==null&&qd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=fm(n,s);var o=fm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pC=kn&&"documentMode"in document&&11>=document.documentMode,si=null,Sh=null,Ms=null,Ch=!1;function pm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ch||si==null||si!==sl(r)||(r=si,"selectionStart"in r&&qd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ms&&eo(Ms,r)||(Ms=r,r=dl(Sh,"onSelect"),0<r.length&&(e=new Wd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=si)))}function _a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var oi={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},yc={},Mv={};kn&&(Mv=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function iu(t){if(yc[t])return yc[t];if(!oi[t])return t;var e=oi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mv)return yc[t]=e[n];return t}var bv=iu("animationend"),Ov=iu("animationiteration"),Fv=iu("animationstart"),$v=iu("transitionend"),Uv=new Map,mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){Uv.set(t,e),Hr(e,[t])}for(var vc=0;vc<mm.length;vc++){var wc=mm[vc],mC=wc.toLowerCase(),gC=wc[0].toUpperCase()+wc.slice(1);fr(mC,"on"+gC)}fr(bv,"onAnimationEnd");fr(Ov,"onAnimationIteration");fr(Fv,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr($v,"onTransitionEnd");Ri("onMouseEnter",["mouseout","mouseover"]);Ri("onMouseLeave",["mouseout","mouseover"]);Ri("onPointerEnter",["pointerout","pointerover"]);Ri("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cs));function gm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,mS(r,e,void 0,t),t.currentTarget=null}function Bv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;gm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;gm(i,a,u),s=l}}}if(al)throw t=vh,al=!1,vh=null,t}function pe(t,e){var n=e[Rh];n===void 0&&(n=e[Rh]=new Set);var r=t+"__bubble";n.has(r)||(Vv(e,t,2,!1),n.add(r))}function _c(t,e,n){var r=0;e&&(r|=4),Vv(n,t,r,e)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function to(t){if(!t[Ea]){t[Ea]=!0,qy.forEach(function(n){n!=="selectionchange"&&(yC.has(n)||_c(n,!1,t),_c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ea]||(e[Ea]=!0,_c("selectionchange",!1,e))}}function Vv(t,e,n,r){switch(kv(e)){case 1:var i=NS;break;case 4:i=PS;break;default:i=zd}n=i.bind(null,e,n,t),i=void 0,!yh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ec(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Sr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}cv(function(){var u=s,c=Ud(n),d=[];e:{var h=Uv.get(t);if(h!==void 0){var g=Wd,y=t;switch(t){case"keypress":if(ja(n)===0)break e;case"keydown":case"keyup":g=KS;break;case"focusin":y="focus",g=pc;break;case"focusout":y="blur",g=pc;break;case"beforeblur":case"afterblur":g=pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=bS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=YS;break;case bv:case Ov:case Fv:g=$S;break;case $v:g=XS;break;case"scroll":g=LS;break;case"wheel":g=eC;break;case"copy":case"cut":case"paste":g=BS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=om}var v=(e&4)!==0,C=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Qs(f,p),w!=null&&v.push(no(f,w,m)))),C)break;f=f.return}0<v.length&&(h=new g(h,y,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==mh&&(y=n.relatedTarget||n.fromElement)&&(Sr(y)||y[Tn]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Sr(y):null,y!==null&&(C=Wr(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=im,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=om,w="onPointerLeave",p="onPointerEnter",f="pointer"),C=g==null?h:ai(g),m=y==null?h:ai(y),h=new v(w,f+"leave",g,n,c),h.target=C,h.relatedTarget=m,w=null,Sr(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=m,v.relatedTarget=C,w=v),C=w,g&&y)t:{for(v=g,p=y,f=0,m=v;m;m=Zr(m))f++;for(m=0,w=p;w;w=Zr(w))m++;for(;0<f-m;)v=Zr(v),f--;for(;0<m-f;)p=Zr(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Zr(v),p=Zr(p)}v=null}else v=null;g!==null&&ym(d,h,g,v,!1),y!==null&&C!==null&&ym(d,C,y,v,!0)}}e:{if(h=u?ai(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var I=aC;else if(um(h))if(xv)I=hC;else{I=uC;var x=lC}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=cC);if(I&&(I=I(t,u))){Dv(d,I,n,c);break e}x&&x(t,h,u),t==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&ch(h,"number",h.value)}switch(x=u?ai(u):window,t){case"focusin":(um(x)||x.contentEditable==="true")&&(si=x,Sh=u,Ms=null);break;case"focusout":Ms=Sh=si=null;break;case"mousedown":Ch=!0;break;case"contextmenu":case"mouseup":case"dragend":Ch=!1,pm(d,n,c);break;case"selectionchange":if(pC)break;case"keydown":case"keyup":pm(d,n,c)}var N;if(Kd)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else ii?Av(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(Iv&&n.locale!=="ko"&&(ii||M!=="onCompositionStart"?M==="onCompositionEnd"&&ii&&(N=Tv()):(Kn=c,Hd="value"in Kn?Kn.value:Kn.textContent,ii=!0)),x=dl(u,M),0<x.length&&(M=new sm(M,t,null,n,c),d.push({event:M,listeners:x}),N?M.data=N:(N=Rv(n),N!==null&&(M.data=N)))),(N=nC?rC(t,n):iC(t,n))&&(u=dl(u,"onBeforeInput"),0<u.length&&(c=new sm("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=N))}Bv(d,e)})}function no(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qs(t,n),s!=null&&r.unshift(no(t,s,i)),s=Qs(t,e),s!=null&&r.push(no(t,s,i))),t=t.return}return r}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ym(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Qs(n,s),l!=null&&o.unshift(no(n,l,a))):i||(l=Qs(n,s),l!=null&&o.push(no(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vC=/\r\n?/g,wC=/\u0000|\uFFFD/g;function vm(t){return(typeof t=="string"?t:""+t).replace(vC,`
`).replace(wC,"")}function Sa(t,e,n){if(e=vm(e),vm(t)!==e&&n)throw Error(R(425))}function fl(){}var kh=null,Th=null;function Ih(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ah=typeof setTimeout=="function"?setTimeout:void 0,_C=typeof clearTimeout=="function"?clearTimeout:void 0,wm=typeof Promise=="function"?Promise:void 0,EC=typeof queueMicrotask=="function"?queueMicrotask:typeof wm<"u"?function(t){return wm.resolve(null).then(t).catch(SC)}:Ah;function SC(t){setTimeout(function(){throw t})}function Sc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Xs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xs(e)}function Xn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _m(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qi=Math.random().toString(36).slice(2),en="__reactFiber$"+qi,ro="__reactProps$"+qi,Tn="__reactContainer$"+qi,Rh="__reactEvents$"+qi,CC="__reactListeners$"+qi,kC="__reactHandles$"+qi;function Sr(t){var e=t[en];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tn]||n[en]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_m(t);t!==null;){if(n=t[en])return n;t=_m(t)}return e}t=n,n=t.parentNode}return null}function Po(t){return t=t[en]||t[Tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function su(t){return t[ro]||null}var Dh=[],li=-1;function pr(t){return{current:t}}function ge(t){0>li||(t.current=Dh[li],Dh[li]=null,li--)}function de(t,e){li++,Dh[li]=t.current,t.current=e}var ur={},st=pr(ur),yt=pr(!1),Mr=ur;function Di(t,e){var n=t.type.contextTypes;if(!n)return ur;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function pl(){ge(yt),ge(st)}function Em(t,e,n){if(st.current!==ur)throw Error(R(168));de(st,e),de(yt,n)}function jv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,lS(t)||"Unknown",i));return Ee({},n,r)}function ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Mr=st.current,de(st,t),de(yt,yt.current),!0}function Sm(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=jv(t,e,Mr),r.__reactInternalMemoizedMergedChildContext=t,ge(yt),ge(st),de(st,t)):ge(yt),de(yt,n)}var gn=null,ou=!1,Cc=!1;function zv(t){gn===null?gn=[t]:gn.push(t)}function TC(t){ou=!0,zv(t)}function mr(){if(!Cc&&gn!==null){Cc=!0;var t=0,e=ce;try{var n=gn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gn=null,ou=!1}catch(i){throw gn!==null&&(gn=gn.slice(t+1)),pv(Bd,mr),i}finally{ce=e,Cc=!1}}return null}var ui=[],ci=0,gl=null,yl=0,Dt=[],xt=0,br=null,yn=1,vn="";function wr(t,e){ui[ci++]=yl,ui[ci++]=gl,gl=t,yl=e}function Hv(t,e,n){Dt[xt++]=yn,Dt[xt++]=vn,Dt[xt++]=br,br=t;var r=yn;t=vn;var i=32-Wt(r)-1;r&=~(1<<i),n+=1;var s=32-Wt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yn=1<<32-Wt(e)+i|n<<i|r,vn=s+t}else yn=1<<s|n<<i|r,vn=t}function Qd(t){t.return!==null&&(wr(t,1),Hv(t,1,0))}function Yd(t){for(;t===gl;)gl=ui[--ci],ui[ci]=null,yl=ui[--ci],ui[ci]=null;for(;t===br;)br=Dt[--xt],Dt[xt]=null,vn=Dt[--xt],Dt[xt]=null,yn=Dt[--xt],Dt[xt]=null}var St=null,Et=null,ye=!1,zt=null;function Wv(t,e){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Cm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,St=t,Et=Xn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,St=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=br!==null?{id:yn,overflow:vn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,St=t,Et=null,!0):!1;default:return!1}}function xh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nh(t){if(ye){var e=Et;if(e){var n=e;if(!Cm(t,e)){if(xh(t))throw Error(R(418));e=Xn(n.nextSibling);var r=St;e&&Cm(t,e)?Wv(r,n):(t.flags=t.flags&-4097|2,ye=!1,St=t)}}else{if(xh(t))throw Error(R(418));t.flags=t.flags&-4097|2,ye=!1,St=t}}}function km(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function Ca(t){if(t!==St)return!1;if(!ye)return km(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ih(t.type,t.memoizedProps)),e&&(e=Et)){if(xh(t))throw Gv(),Error(R(418));for(;e;)Wv(t,e),e=Xn(e.nextSibling)}if(km(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=Xn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=St?Xn(t.stateNode.nextSibling):null;return!0}function Gv(){for(var t=Et;t;)t=Xn(t.nextSibling)}function xi(){Et=St=null,ye=!1}function Jd(t){zt===null?zt=[t]:zt.push(t)}var IC=Ln.ReactCurrentBatchConfig;function Vt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var vl=pr(null),wl=null,hi=null,Xd=null;function Zd(){Xd=hi=wl=null}function ef(t){var e=vl.current;ge(vl),t._currentValue=e}function Ph(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ei(t,e){wl=t,Xd=hi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function bt(t){var e=t._currentValue;if(Xd!==t)if(t={context:t,memoizedValue:e,next:null},hi===null){if(wl===null)throw Error(R(308));hi=t,wl.dependencies={lanes:0,firstContext:t}}else hi=hi.next=t;return e}var Cr=null;function tf(t){Cr===null?Cr=[t]:Cr.push(t)}function Kv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,tf(e)):(n.next=i.next,i.next=n),e.interleaved=n,In(t,r)}function In(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bn=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,In(t,n)}return i=r.interleaved,i===null?(e.next=e,tf(r)):(e.next=i.next,i.next=e),r.interleaved=e,In(t,n)}function za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vd(t,n)}}function Tm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _l(t,e,n,r){var i=t.updateQueue;Bn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(h=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(g,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(g,d,h):y,h==null)break e;d=Ee({},d,h);break e;case 2:Bn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Fr|=o,t.lanes=o,t.memoizedState=d}}function Im(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var Qv=new Ky.Component().refs;function Lh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var au={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=tr(t),s=Sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Zn(t,s,i),e!==null&&(Gt(e,t,i,r),za(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=tr(t),s=Sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zn(t,s,i),e!==null&&(Gt(e,t,i,r),za(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=tr(t),i=Sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zn(t,i,r),e!==null&&(Gt(e,t,r,n),za(e,t,r))}};function Am(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!eo(n,r)||!eo(i,s):!0}function Yv(t,e,n){var r=!1,i=ur,s=e.contextType;return typeof s=="object"&&s!==null?s=bt(s):(i=vt(e)?Mr:st.current,r=e.contextTypes,s=(r=r!=null)?Di(t,i):ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=au,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&au.enqueueReplaceState(e,e.state,null)}function Mh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Qv,nf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=bt(s):(s=vt(e)?Mr:st.current,i.context=Di(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&au.enqueueReplaceState(i,i.state,null),_l(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Qv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function ka(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dm(t){var e=t._init;return e(t._payload)}function Jv(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=nr(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=xc(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var I=m.type;return I===ri?c(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Un&&Dm(I)===f.type)?(w=i(f,m.props),w.ref=fs(p,f,m),w.return=p,w):(w=Qa(m.type,m.key,m.props,null,p.mode,w),w.ref=fs(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Nc(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,w,I){return f===null||f.tag!==7?(f=xr(m,p.mode,w,I),f.return=p,f):(f=i(f,m),f.return=p,f)}function d(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=xc(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case fa:return m=Qa(f.type,f.key,f.props,null,p.mode,m),m.ref=fs(p,null,f),m.return=p,m;case ni:return f=Nc(f,p.mode,m),f.return=p,f;case Un:var w=f._init;return d(p,w(f._payload),m)}if(Es(f)||ls(f))return f=xr(f,p.mode,m,null),f.return=p,f;ka(p,f)}return null}function h(p,f,m,w){var I=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case fa:return m.key===I?l(p,f,m,w):null;case ni:return m.key===I?u(p,f,m,w):null;case Un:return I=m._init,h(p,f,I(m._payload),w)}if(Es(m)||ls(m))return I!==null?null:c(p,f,m,w,null);ka(p,m)}return null}function g(p,f,m,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fa:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,I);case ni:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,I);case Un:var x=w._init;return g(p,f,m,x(w._payload),I)}if(Es(w)||ls(w))return p=p.get(m)||null,c(f,p,w,I,null);ka(f,w)}return null}function y(p,f,m,w){for(var I=null,x=null,N=f,M=f=0,Z=null;N!==null&&M<m.length;M++){N.index>M?(Z=N,N=null):Z=N.sibling;var H=h(p,N,m[M],w);if(H===null){N===null&&(N=Z);break}t&&N&&H.alternate===null&&e(p,N),f=s(H,f,M),x===null?I=H:x.sibling=H,x=H,N=Z}if(M===m.length)return n(p,N),ye&&wr(p,M),I;if(N===null){for(;M<m.length;M++)N=d(p,m[M],w),N!==null&&(f=s(N,f,M),x===null?I=N:x.sibling=N,x=N);return ye&&wr(p,M),I}for(N=r(p,N);M<m.length;M++)Z=g(N,p,M,m[M],w),Z!==null&&(t&&Z.alternate!==null&&N.delete(Z.key===null?M:Z.key),f=s(Z,f,M),x===null?I=Z:x.sibling=Z,x=Z);return t&&N.forEach(function(Se){return e(p,Se)}),ye&&wr(p,M),I}function v(p,f,m,w){var I=ls(m);if(typeof I!="function")throw Error(R(150));if(m=I.call(m),m==null)throw Error(R(151));for(var x=I=null,N=f,M=f=0,Z=null,H=m.next();N!==null&&!H.done;M++,H=m.next()){N.index>M?(Z=N,N=null):Z=N.sibling;var Se=h(p,N,H.value,w);if(Se===null){N===null&&(N=Z);break}t&&N&&Se.alternate===null&&e(p,N),f=s(Se,f,M),x===null?I=Se:x.sibling=Se,x=Se,N=Z}if(H.done)return n(p,N),ye&&wr(p,M),I;if(N===null){for(;!H.done;M++,H=m.next())H=d(p,H.value,w),H!==null&&(f=s(H,f,M),x===null?I=H:x.sibling=H,x=H);return ye&&wr(p,M),I}for(N=r(p,N);!H.done;M++,H=m.next())H=g(N,p,M,H.value,w),H!==null&&(t&&H.alternate!==null&&N.delete(H.key===null?M:H.key),f=s(H,f,M),x===null?I=H:x.sibling=H,x=H);return t&&N.forEach(function(Ft){return e(p,Ft)}),ye&&wr(p,M),I}function C(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===ri&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case fa:e:{for(var I=m.key,x=f;x!==null;){if(x.key===I){if(I=m.type,I===ri){if(x.tag===7){n(p,x.sibling),f=i(x,m.props.children),f.return=p,p=f;break e}}else if(x.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Un&&Dm(I)===x.type){n(p,x.sibling),f=i(x,m.props),f.ref=fs(p,x,m),f.return=p,p=f;break e}n(p,x);break}else e(p,x);x=x.sibling}m.type===ri?(f=xr(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=Qa(m.type,m.key,m.props,null,p.mode,w),w.ref=fs(p,f,m),w.return=p,p=w)}return o(p);case ni:e:{for(x=m.key;f!==null;){if(f.key===x)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Nc(m,p.mode,w),f.return=p,p=f}return o(p);case Un:return x=m._init,C(p,f,x(m._payload),w)}if(Es(m))return y(p,f,m,w);if(ls(m))return v(p,f,m,w);ka(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=xc(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return C}var Ni=Jv(!0),Xv=Jv(!1),Lo={},rn=pr(Lo),io=pr(Lo),so=pr(Lo);function kr(t){if(t===Lo)throw Error(R(174));return t}function rf(t,e){switch(de(so,e),de(io,t),de(rn,Lo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dh(e,t)}ge(rn),de(rn,e)}function Pi(){ge(rn),ge(io),ge(so)}function Zv(t){kr(so.current);var e=kr(rn.current),n=dh(e,t.type);e!==n&&(de(io,t),de(rn,n))}function sf(t){io.current===t&&(ge(rn),ge(io))}var we=pr(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kc=[];function of(){for(var t=0;t<kc.length;t++)kc[t]._workInProgressVersionPrimary=null;kc.length=0}var Ha=Ln.ReactCurrentDispatcher,Tc=Ln.ReactCurrentBatchConfig,Or=0,_e=null,Me=null,Be=null,Sl=!1,bs=!1,oo=0,AC=0;function Je(){throw Error(R(321))}function af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kt(t[n],e[n]))return!1;return!0}function lf(t,e,n,r,i,s){if(Or=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ha.current=t===null||t.memoizedState===null?NC:PC,t=n(r,i),bs){s=0;do{if(bs=!1,oo=0,25<=s)throw Error(R(301));s+=1,Be=Me=null,e.updateQueue=null,Ha.current=LC,t=n(r,i)}while(bs)}if(Ha.current=Cl,e=Me!==null&&Me.next!==null,Or=0,Be=Me=_e=null,Sl=!1,e)throw Error(R(300));return t}function uf(){var t=oo!==0;return oo=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?_e.memoizedState=Be=t:Be=Be.next=t,Be}function Ot(){if(Me===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=Be===null?_e.memoizedState:Be.next;if(e!==null)Be=e,Me=t;else{if(t===null)throw Error(R(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Be===null?_e.memoizedState=Be=t:Be=Be.next=t}return Be}function ao(t,e){return typeof e=="function"?e(t):e}function Ic(t){var e=Ot(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Or&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,_e.lanes|=c,Fr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Kt(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,Fr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ac(t){var e=Ot(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Kt(s,e.memoizedState)||(gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function e0(){}function t0(t,e){var n=_e,r=Ot(),i=e(),s=!Kt(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,cf(i0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,lo(9,r0.bind(null,n,r,i,e),void 0,null),Ve===null)throw Error(R(349));Or&30||n0(n,e,i)}return i}function n0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function r0(t,e,n,r){e.value=n,e.getSnapshot=r,s0(e)&&o0(t)}function i0(t,e,n){return n(function(){s0(e)&&o0(t)})}function s0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kt(t,n)}catch{return!0}}function o0(t){var e=In(t,1);e!==null&&Gt(e,t,1,-1)}function xm(t){var e=Zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ao,lastRenderedState:t},e.queue=t,t=t.dispatch=xC.bind(null,_e,t),[e.memoizedState,t]}function lo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function a0(){return Ot().memoizedState}function Wa(t,e,n,r){var i=Zt();_e.flags|=t,i.memoizedState=lo(1|e,n,void 0,r===void 0?null:r)}function lu(t,e,n,r){var i=Ot();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&af(r,o.deps)){i.memoizedState=lo(e,n,s,r);return}}_e.flags|=t,i.memoizedState=lo(1|e,n,s,r)}function Nm(t,e){return Wa(8390656,8,t,e)}function cf(t,e){return lu(2048,8,t,e)}function l0(t,e){return lu(4,2,t,e)}function u0(t,e){return lu(4,4,t,e)}function c0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function h0(t,e,n){return n=n!=null?n.concat([t]):null,lu(4,4,c0.bind(null,e,t),n)}function hf(){}function d0(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&af(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function f0(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&af(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function p0(t,e,n){return Or&21?(Kt(n,e)||(n=yv(),_e.lanes|=n,Fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function RC(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Tc.transition;Tc.transition={};try{t(!1),e()}finally{ce=n,Tc.transition=r}}function m0(){return Ot().memoizedState}function DC(t,e,n){var r=tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},g0(t))y0(e,n);else if(n=Kv(t,e,n,r),n!==null){var i=ht();Gt(n,t,r,i),v0(n,e,r)}}function xC(t,e,n){var r=tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(g0(t))y0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Kt(a,o)){var l=e.interleaved;l===null?(i.next=i,tf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Kv(t,e,i,r),n!==null&&(i=ht(),Gt(n,t,r,i),v0(n,e,r))}}function g0(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function y0(t,e){bs=Sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function v0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vd(t,n)}}var Cl={readContext:bt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},NC={readContext:bt,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:bt,useEffect:Nm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wa(4194308,4,c0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wa(4,2,t,e)},useMemo:function(t,e){var n=Zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=DC.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:xm,useDebugValue:hf,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=xm(!1),e=t[0];return t=RC.bind(null,t[1]),Zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=Zt();if(ye){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),Ve===null)throw Error(R(349));Or&30||n0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Nm(i0.bind(null,r,s,t),[t]),r.flags|=2048,lo(9,r0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zt(),e=Ve.identifierPrefix;if(ye){var n=vn,r=yn;n=(r&~(1<<32-Wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=oo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=AC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},PC={readContext:bt,useCallback:d0,useContext:bt,useEffect:cf,useImperativeHandle:h0,useInsertionEffect:l0,useLayoutEffect:u0,useMemo:f0,useReducer:Ic,useRef:a0,useState:function(){return Ic(ao)},useDebugValue:hf,useDeferredValue:function(t){var e=Ot();return p0(e,Me.memoizedState,t)},useTransition:function(){var t=Ic(ao)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:e0,useSyncExternalStore:t0,useId:m0,unstable_isNewReconciler:!1},LC={readContext:bt,useCallback:d0,useContext:bt,useEffect:cf,useImperativeHandle:h0,useInsertionEffect:l0,useLayoutEffect:u0,useMemo:f0,useReducer:Ac,useRef:a0,useState:function(){return Ac(ao)},useDebugValue:hf,useDeferredValue:function(t){var e=Ot();return Me===null?e.memoizedState=t:p0(e,Me.memoizedState,t)},useTransition:function(){var t=Ac(ao)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:e0,useSyncExternalStore:t0,useId:m0,unstable_isNewReconciler:!1};function Li(t,e){try{var n="",r=e;do n+=aS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Rc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var MC=typeof WeakMap=="function"?WeakMap:Map;function w0(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Tl||(Tl=!0,Wh=r),bh(t,e)},n}function _0(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){bh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bh(t,e),typeof r!="function"&&(er===null?er=new Set([this]):er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new MC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=qC.bind(null,t,e,n),e.then(t,t))}function Lm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,Zn(n,e,1))),n.lanes|=1),t)}var bC=Ln.ReactCurrentOwner,gt=!1;function ut(t,e,n,r){e.child=t===null?Xv(e,null,n,r):Ni(e,t.child,n,r)}function bm(t,e,n,r,i){n=n.render;var s=e.ref;return Ei(e,i),r=lf(t,e,n,r,s,i),n=uf(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(ye&&n&&Qd(e),e.flags|=1,ut(t,e,r,i),e.child)}function Om(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!wf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,E0(t,e,s,r,i)):(t=Qa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:eo,n(o,r)&&t.ref===e.ref)return An(t,e,i)}return e.flags|=1,t=nr(s,r),t.ref=e.ref,t.return=e,e.child=t}function E0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(eo(s,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,An(t,e,i)}return Oh(t,e,n,r,i)}function S0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(fi,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(fi,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(fi,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(fi,_t),_t|=r;return ut(t,e,i,n),e.child}function C0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Oh(t,e,n,r,i){var s=vt(n)?Mr:st.current;return s=Di(e,s),Ei(e,i),n=lf(t,e,n,r,s,i),r=uf(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(ye&&r&&Qd(e),e.flags|=1,ut(t,e,n,i),e.child)}function Fm(t,e,n,r,i){if(vt(n)){var s=!0;ml(e)}else s=!1;if(Ei(e,i),e.stateNode===null)Ga(t,e),Yv(e,n,r),Mh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=bt(u):(u=vt(n)?Mr:st.current,u=Di(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Rm(e,o,r,u),Bn=!1;var h=e.memoizedState;o.state=h,_l(e,r,o,i),l=e.memoizedState,a!==r||h!==l||yt.current||Bn?(typeof c=="function"&&(Lh(e,n,c,r),l=e.memoizedState),(a=Bn||Am(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,qv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Vt(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=bt(l):(l=vt(n)?Mr:st.current,l=Di(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Rm(e,o,r,l),Bn=!1,h=e.memoizedState,o.state=h,_l(e,r,o,i);var y=e.memoizedState;a!==d||h!==y||yt.current||Bn?(typeof g=="function"&&(Lh(e,n,g,r),y=e.memoizedState),(u=Bn||Am(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Fh(t,e,n,r,s,i)}function Fh(t,e,n,r,i,s){C0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Sm(e,n,!1),An(t,e,s);r=e.stateNode,bC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ni(e,t.child,null,s),e.child=Ni(e,null,a,s)):ut(t,e,a,s),e.memoizedState=r.state,i&&Sm(e,n,!0),e.child}function k0(t){var e=t.stateNode;e.pendingContext?Em(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Em(t,e.context,!1),rf(t,e.containerInfo)}function $m(t,e,n,r,i){return xi(),Jd(i),e.flags|=256,ut(t,e,n,r),e.child}var $h={dehydrated:null,treeContext:null,retryLane:0};function Uh(t){return{baseLanes:t,cachePool:null,transitions:null}}function T0(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(we,i&1),t===null)return Nh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=hu(o,r,0,null),t=xr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uh(n),e.memoizedState=$h,t):df(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return OC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=nr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=nr(a,s):(s=xr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Uh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$h,r}return s=t.child,t=s.sibling,r=nr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function df(t,e){return e=hu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ta(t,e,n,r){return r!==null&&Jd(r),Ni(e,t.child,null,n),t=df(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function OC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Rc(Error(R(422))),Ta(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=hu({mode:"visible",children:r.children},i,0,null),s=xr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ni(e,t.child,null,o),e.child.memoizedState=Uh(o),e.memoizedState=$h,s);if(!(e.mode&1))return Ta(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=Rc(s,r,void 0),Ta(t,e,o,r)}if(a=(o&t.childLanes)!==0,gt||a){if(r=Ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,In(t,i),Gt(r,t,i,-1))}return vf(),r=Rc(Error(R(421))),Ta(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=QC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Et=Xn(i.nextSibling),St=e,ye=!0,zt=null,t!==null&&(Dt[xt++]=yn,Dt[xt++]=vn,Dt[xt++]=br,yn=t.id,vn=t.overflow,br=e),e=df(e,r.children),e.flags|=4096,e)}function Um(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ph(t.return,e,n)}function Dc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function I0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Um(t,n,e);else if(t.tag===19)Um(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Dc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&El(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Dc(e,!0,n,null,s);break;case"together":Dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ga(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function An(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function FC(t,e,n){switch(e.tag){case 3:k0(e),xi();break;case 5:Zv(e);break;case 1:vt(e.type)&&ml(e);break;case 4:rf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(vl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?T0(t,e,n):(de(we,we.current&1),t=An(t,e,n),t!==null?t.sibling:null);de(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return I0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,S0(t,e,n)}return An(t,e,n)}var A0,Bh,R0,D0;A0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bh=function(){};R0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,kr(rn.current);var s=null;switch(n){case"input":i=lh(t,i),r=lh(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=hh(t,i),r=hh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fl)}fh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ks.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ks.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&pe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};D0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ps(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $C(t,e,n){var r=e.pendingProps;switch(Yd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return vt(e.type)&&pl(),Xe(e),null;case 3:return r=e.stateNode,Pi(),ge(yt),ge(st),of(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zt!==null&&(qh(zt),zt=null))),Bh(t,e),Xe(e),null;case 5:sf(e);var i=kr(so.current);if(n=e.type,t!==null&&e.stateNode!=null)R0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return Xe(e),null}if(t=kr(rn.current),Ca(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[en]=e,r[ro]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<Cs.length;i++)pe(Cs[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":qp(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":Yp(r,s),pe("invalid",r)}fh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sa(r.textContent,a,t),i=["children",""+a]):Ks.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":pa(r),Qp(r,s,!0);break;case"textarea":pa(r),Jp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=fl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=nv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[en]=e,t[ro]=r,A0(t,e,!1,!1),e.stateNode=t;e:{switch(o=ph(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Cs.length;i++)pe(Cs[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":qp(t,r),i=lh(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),pe("invalid",t);break;case"textarea":Yp(t,r),i=hh(t,r),pe("invalid",t);break;default:i=r}fh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?sv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qs(t,l):typeof l=="number"&&qs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ks.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pe("scroll",t):l!=null&&bd(t,s,l,o))}switch(n){case"input":pa(t),Qp(t,r,!1);break;case"textarea":pa(t),Jp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+lr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?yi(t,!!r.multiple,s,!1):r.defaultValue!=null&&yi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)D0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=kr(so.current),kr(rn.current),Ca(e)){if(r=e.stateNode,n=e.memoizedProps,r[en]=e,(s=r.nodeValue!==n)&&(t=St,t!==null))switch(t.tag){case 3:Sa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=e,e.stateNode=r}return Xe(e),null;case 13:if(ge(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&Et!==null&&e.mode&1&&!(e.flags&128))Gv(),xi(),e.flags|=98560,s=!1;else if(s=Ca(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[en]=e}else xi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else zt!==null&&(qh(zt),zt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?be===0&&(be=3):vf())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return Pi(),Bh(t,e),t===null&&to(e.stateNode.containerInfo),Xe(e),null;case 10:return ef(e.type._context),Xe(e),null;case 17:return vt(e.type)&&pl(),Xe(e),null;case 19:if(ge(we),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ps(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=El(t),o!==null){for(e.flags|=128,ps(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ie()>Mi&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304)}else{if(!r)if(t=El(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Xe(e),null}else 2*Ie()-s.renderingStartTime>Mi&&n!==1073741824&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ie(),e.sibling=null,n=we.current,de(we,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return yf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function UC(t,e){switch(Yd(e),e.tag){case 1:return vt(e.type)&&pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Pi(),ge(yt),ge(st),of(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sf(e),null;case 13:if(ge(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(we),null;case 4:return Pi(),null;case 10:return ef(e.type._context),null;case 22:case 23:return yf(),null;case 24:return null;default:return null}}var Ia=!1,et=!1,BC=typeof WeakSet=="function"?WeakSet:Set,L=null;function di(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function Vh(t,e,n){try{n()}catch(r){ke(t,e,r)}}var Bm=!1;function VC(t,e){if(kh=cl,t=Lv(),qd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Th={focusedElem:t,selectionRange:n},cl=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,C=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Vt(e.type,v),C);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){ke(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return y=Bm,Bm=!1,y}function Os(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Vh(e,n,s)}i=i.next}while(i!==r)}}function uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function x0(t){var e=t.alternate;e!==null&&(t.alternate=null,x0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[en],delete e[ro],delete e[Rh],delete e[CC],delete e[kC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function N0(t){return t.tag===5||t.tag===3||t.tag===4}function Vm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||N0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fl));else if(r!==4&&(t=t.child,t!==null))for(zh(t,e,n),t=t.sibling;t!==null;)zh(t,e,n),t=t.sibling}function Hh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Hh(t,e,n),t=t.sibling;t!==null;)Hh(t,e,n),t=t.sibling}var ze=null,jt=!1;function On(t,e,n){for(n=n.child;n!==null;)P0(t,e,n),n=n.sibling}function P0(t,e,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(tu,n)}catch{}switch(n.tag){case 5:et||di(n,e);case 6:var r=ze,i=jt;ze=null,On(t,e,n),ze=r,jt=i,ze!==null&&(jt?(t=ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(jt?(t=ze,n=n.stateNode,t.nodeType===8?Sc(t.parentNode,n):t.nodeType===1&&Sc(t,n),Xs(t)):Sc(ze,n.stateNode));break;case 4:r=ze,i=jt,ze=n.stateNode.containerInfo,jt=!0,On(t,e,n),ze=r,jt=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vh(n,e,o),i=i.next}while(i!==r)}On(t,e,n);break;case 1:if(!et&&(di(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ke(n,e,a)}On(t,e,n);break;case 21:On(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,On(t,e,n),et=r):On(t,e,n);break;default:On(t,e,n)}}function jm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BC),e.forEach(function(r){var i=YC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ze=a.stateNode,jt=!1;break e;case 3:ze=a.stateNode.containerInfo,jt=!0;break e;case 4:ze=a.stateNode.containerInfo,jt=!0;break e}a=a.return}if(ze===null)throw Error(R(160));P0(s,o,i),ze=null,jt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ke(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)L0(e,t),e=e.sibling}function L0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bt(e,t),Xt(t),r&4){try{Os(3,t,t.return),uu(3,t)}catch(v){ke(t,t.return,v)}try{Os(5,t,t.return)}catch(v){ke(t,t.return,v)}}break;case 1:Bt(e,t),Xt(t),r&512&&n!==null&&di(n,n.return);break;case 5:if(Bt(e,t),Xt(t),r&512&&n!==null&&di(n,n.return),t.flags&32){var i=t.stateNode;try{qs(i,"")}catch(v){ke(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ev(i,s),ph(a,o);var u=ph(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?sv(i,d):c==="dangerouslySetInnerHTML"?rv(i,d):c==="children"?qs(i,d):bd(i,c,d,u)}switch(a){case"input":uh(i,s);break;case"textarea":tv(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?yi(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?yi(i,!!s.multiple,s.defaultValue,!0):yi(i,!!s.multiple,s.multiple?[]:"",!1))}i[ro]=s}catch(v){ke(t,t.return,v)}}break;case 6:if(Bt(e,t),Xt(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ke(t,t.return,v)}}break;case 3:if(Bt(e,t),Xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xs(e.containerInfo)}catch(v){ke(t,t.return,v)}break;case 4:Bt(e,t),Xt(t);break;case 13:Bt(e,t),Xt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(mf=Ie())),r&4&&jm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(et=(u=et)||c,Bt(e,t),et=u):Bt(e,t),Xt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(L=t,c=t.child;c!==null;){for(d=L=c;L!==null;){switch(h=L,g=h.child,h.tag){case 0:case 11:case 14:case 15:Os(4,h,h.return);break;case 1:di(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ke(r,n,v)}}break;case 5:di(h,h.return);break;case 22:if(h.memoizedState!==null){Hm(d);continue}}g!==null?(g.return=h,L=g):Hm(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=iv("display",o))}catch(v){ke(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){ke(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Bt(e,t),Xt(t),r&4&&jm(t);break;case 21:break;default:Bt(e,t),Xt(t)}}function Xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(N0(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qs(i,""),r.flags&=-33);var s=Vm(t);Hh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Vm(t);zh(t,a,o);break;default:throw Error(R(161))}}catch(l){ke(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jC(t,e,n){L=t,M0(t)}function M0(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ia;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||et;a=Ia;var u=et;if(Ia=o,(et=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?Wm(i):l!==null?(l.return=o,L=l):Wm(i);for(;s!==null;)L=s,M0(s),s=s.sibling;L=i,Ia=a,et=u}zm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):zm(t)}}function zm(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||uu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Im(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Im(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Xs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}et||e.flags&512&&jh(e)}catch(h){ke(e,e.return,h)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function Hm(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function Wm(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uu(4,e)}catch(l){ke(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ke(e,i,l)}}var s=e.return;try{jh(e)}catch(l){ke(e,s,l)}break;case 5:var o=e.return;try{jh(e)}catch(l){ke(e,o,l)}}}catch(l){ke(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var zC=Math.ceil,kl=Ln.ReactCurrentDispatcher,ff=Ln.ReactCurrentOwner,Mt=Ln.ReactCurrentBatchConfig,se=0,Ve=null,Pe=null,Ge=0,_t=0,fi=pr(0),be=0,uo=null,Fr=0,cu=0,pf=0,Fs=null,mt=null,mf=0,Mi=1/0,pn=null,Tl=!1,Wh=null,er=null,Aa=!1,qn=null,Il=0,$s=0,Gh=null,Ka=-1,qa=0;function ht(){return se&6?Ie():Ka!==-1?Ka:Ka=Ie()}function tr(t){return t.mode&1?se&2&&Ge!==0?Ge&-Ge:IC.transition!==null?(qa===0&&(qa=yv()),qa):(t=ce,t!==0||(t=window.event,t=t===void 0?16:kv(t.type)),t):1}function Gt(t,e,n,r){if(50<$s)throw $s=0,Gh=null,Error(R(185));xo(t,n,r),(!(se&2)||t!==Ve)&&(t===Ve&&(!(se&2)&&(cu|=n),be===4&&jn(t,Ge)),wt(t,r),n===1&&se===0&&!(e.mode&1)&&(Mi=Ie()+500,ou&&mr()))}function wt(t,e){var n=t.callbackNode;IS(t,e);var r=ul(t,t===Ve?Ge:0);if(r===0)n!==null&&em(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&em(n),e===1)t.tag===0?TC(Gm.bind(null,t)):zv(Gm.bind(null,t)),EC(function(){!(se&6)&&mr()}),n=null;else{switch(vv(r)){case 1:n=Bd;break;case 4:n=mv;break;case 16:n=ll;break;case 536870912:n=gv;break;default:n=ll}n=j0(n,b0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function b0(t,e){if(Ka=-1,qa=0,se&6)throw Error(R(327));var n=t.callbackNode;if(Si()&&t.callbackNode!==n)return null;var r=ul(t,t===Ve?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Al(t,r);else{e=r;var i=se;se|=2;var s=F0();(Ve!==t||Ge!==e)&&(pn=null,Mi=Ie()+500,Dr(t,e));do try{GC();break}catch(a){O0(t,a)}while(1);Zd(),kl.current=s,se=i,Pe!==null?e=0:(Ve=null,Ge=0,e=be)}if(e!==0){if(e===2&&(i=wh(t),i!==0&&(r=i,e=Kh(t,i))),e===1)throw n=uo,Dr(t,0),jn(t,r),wt(t,Ie()),n;if(e===6)jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!HC(i)&&(e=Al(t,r),e===2&&(s=wh(t),s!==0&&(r=s,e=Kh(t,s))),e===1))throw n=uo,Dr(t,0),jn(t,r),wt(t,Ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:_r(t,mt,pn);break;case 3:if(jn(t,r),(r&130023424)===r&&(e=mf+500-Ie(),10<e)){if(ul(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ah(_r.bind(null,t,mt,pn),e);break}_r(t,mt,pn);break;case 4:if(jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Wt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zC(r/1960))-r,10<r){t.timeoutHandle=Ah(_r.bind(null,t,mt,pn),r);break}_r(t,mt,pn);break;case 5:_r(t,mt,pn);break;default:throw Error(R(329))}}}return wt(t,Ie()),t.callbackNode===n?b0.bind(null,t):null}function Kh(t,e){var n=Fs;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=Al(t,e),t!==2&&(e=mt,mt=n,e!==null&&qh(e)),t}function qh(t){mt===null?mt=t:mt.push.apply(mt,t)}function HC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jn(t,e){for(e&=~pf,e&=~cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wt(e),r=1<<n;t[n]=-1,e&=~r}}function Gm(t){if(se&6)throw Error(R(327));Si();var e=ul(t,0);if(!(e&1))return wt(t,Ie()),null;var n=Al(t,e);if(t.tag!==0&&n===2){var r=wh(t);r!==0&&(e=r,n=Kh(t,r))}if(n===1)throw n=uo,Dr(t,0),jn(t,e),wt(t,Ie()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,mt,pn),wt(t,Ie()),null}function gf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Mi=Ie()+500,ou&&mr())}}function $r(t){qn!==null&&qn.tag===0&&!(se&6)&&Si();var e=se;se|=1;var n=Mt.transition,r=ce;try{if(Mt.transition=null,ce=1,t)return t()}finally{ce=r,Mt.transition=n,se=e,!(se&6)&&mr()}}function yf(){_t=fi.current,ge(fi)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_C(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Yd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pl();break;case 3:Pi(),ge(yt),ge(st),of();break;case 5:sf(r);break;case 4:Pi();break;case 13:ge(we);break;case 19:ge(we);break;case 10:ef(r.type._context);break;case 22:case 23:yf()}n=n.return}if(Ve=t,Pe=t=nr(t.current,null),Ge=_t=e,be=0,uo=null,pf=cu=Fr=0,mt=Fs=null,Cr!==null){for(e=0;e<Cr.length;e++)if(n=Cr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Cr=null}return t}function O0(t,e){do{var n=Pe;try{if(Zd(),Ha.current=Cl,Sl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Sl=!1}if(Or=0,Be=Me=_e=null,bs=!1,oo=0,ff.current=null,n===null||n.return===null){be=1,uo=e,Pe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ge,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Lm(o);if(g!==null){g.flags&=-257,Mm(g,o,a,s,e),g.mode&1&&Pm(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Pm(s,u,e),vf();break e}l=Error(R(426))}}else if(ye&&a.mode&1){var C=Lm(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Mm(C,o,a,s,e),Jd(Li(l,a));break e}}s=l=Li(l,a),be!==4&&(be=2),Fs===null?Fs=[s]:Fs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=w0(s,l,e);Tm(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(er===null||!er.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=_0(s,a,e);Tm(s,w);break e}}s=s.return}while(s!==null)}U0(n)}catch(I){e=I,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(1)}function F0(){var t=kl.current;return kl.current=Cl,t===null?Cl:t}function vf(){(be===0||be===3||be===2)&&(be=4),Ve===null||!(Fr&268435455)&&!(cu&268435455)||jn(Ve,Ge)}function Al(t,e){var n=se;se|=2;var r=F0();(Ve!==t||Ge!==e)&&(pn=null,Dr(t,e));do try{WC();break}catch(i){O0(t,i)}while(1);if(Zd(),se=n,kl.current=r,Pe!==null)throw Error(R(261));return Ve=null,Ge=0,be}function WC(){for(;Pe!==null;)$0(Pe)}function GC(){for(;Pe!==null&&!yS();)$0(Pe)}function $0(t){var e=V0(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?U0(t):Pe=e,ff.current=null}function U0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=UC(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,Pe=null;return}}else if(n=$C(n,e,_t),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);be===0&&(be=5)}function _r(t,e,n){var r=ce,i=Mt.transition;try{Mt.transition=null,ce=1,KC(t,e,n,r)}finally{Mt.transition=i,ce=r}return null}function KC(t,e,n,r){do Si();while(qn!==null);if(se&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(AS(t,s),t===Ve&&(Pe=Ve=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Aa||(Aa=!0,j0(ll,function(){return Si(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mt.transition,Mt.transition=null;var o=ce;ce=1;var a=se;se|=4,ff.current=null,VC(t,n),L0(n,t),fC(Th),cl=!!kh,Th=kh=null,t.current=n,jC(n),vS(),se=a,ce=o,Mt.transition=s}else t.current=n;if(Aa&&(Aa=!1,qn=t,Il=i),s=t.pendingLanes,s===0&&(er=null),ES(n.stateNode),wt(t,Ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Tl)throw Tl=!1,t=Wh,Wh=null,t;return Il&1&&t.tag!==0&&Si(),s=t.pendingLanes,s&1?t===Gh?$s++:($s=0,Gh=t):$s=0,mr(),null}function Si(){if(qn!==null){var t=vv(Il),e=Mt.transition,n=ce;try{if(Mt.transition=null,ce=16>t?16:t,qn===null)var r=!1;else{if(t=qn,qn=null,Il=0,se&6)throw Error(R(331));var i=se;for(se|=4,L=t.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:Os(8,c,s)}var d=c.child;if(d!==null)d.return=c,L=d;else for(;L!==null;){c=L;var h=c.sibling,g=c.return;if(x0(c),c===u){L=null;break}if(h!==null){h.return=g,L=h;break}L=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Os(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,L=p;break e}L=s.return}}var f=t.current;for(L=f;L!==null;){o=L;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,L=m;else e:for(o=f;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:uu(9,a)}}catch(I){ke(a,a.return,I)}if(a===o){L=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,L=w;break e}L=a.return}}if(se=i,mr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(tu,t)}catch{}r=!0}return r}finally{ce=n,Mt.transition=e}}return!1}function Km(t,e,n){e=Li(n,e),e=w0(t,e,1),t=Zn(t,e,1),e=ht(),t!==null&&(xo(t,1,e),wt(t,e))}function ke(t,e,n){if(t.tag===3)Km(t,t,n);else for(;e!==null;){if(e.tag===3){Km(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){t=Li(n,t),t=_0(e,t,1),e=Zn(e,t,1),t=ht(),e!==null&&(xo(e,1,t),wt(e,t));break}}e=e.return}}function qC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,Ve===t&&(Ge&n)===n&&(be===4||be===3&&(Ge&130023424)===Ge&&500>Ie()-mf?Dr(t,0):pf|=n),wt(t,e)}function B0(t,e){e===0&&(t.mode&1?(e=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):e=1);var n=ht();t=In(t,e),t!==null&&(xo(t,e,n),wt(t,n))}function QC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),B0(t,n)}function YC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),B0(t,n)}var V0;V0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,FC(t,e,n);gt=!!(t.flags&131072)}else gt=!1,ye&&e.flags&1048576&&Hv(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ga(t,e),t=e.pendingProps;var i=Di(e,st.current);Ei(e,n),i=lf(null,e,r,t,i,n);var s=uf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,ml(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nf(e),i.updater=au,e.stateNode=i,i._reactInternals=e,Mh(e,r,t,n),e=Fh(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&Qd(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ga(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=XC(r),t=Vt(r,t),i){case 0:e=Oh(null,e,r,t,n);break e;case 1:e=Fm(null,e,r,t,n);break e;case 11:e=bm(null,e,r,t,n);break e;case 14:e=Om(null,e,r,Vt(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Oh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Fm(t,e,r,i,n);case 3:e:{if(k0(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,qv(t,e),_l(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Li(Error(R(423)),e),e=$m(t,e,r,n,i);break e}else if(r!==i){i=Li(Error(R(424)),e),e=$m(t,e,r,n,i);break e}else for(Et=Xn(e.stateNode.containerInfo.firstChild),St=e,ye=!0,zt=null,n=Xv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xi(),r===i){e=An(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return Zv(e),t===null&&Nh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ih(r,i)?o=null:s!==null&&Ih(r,s)&&(e.flags|=32),C0(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&Nh(e),null;case 13:return T0(t,e,n);case 4:return rf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ni(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),bm(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(vl,r._currentValue),r._currentValue=o,s!==null)if(Kt(s.value,o)){if(s.children===i.children&&!yt.current){e=An(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Sn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ph(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ph(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ei(e,n),i=bt(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=Vt(r,e.pendingProps),i=Vt(r.type,i),Om(t,e,r,i,n);case 15:return E0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Ga(t,e),e.tag=1,vt(r)?(t=!0,ml(e)):t=!1,Ei(e,n),Yv(e,r,i),Mh(e,r,i,n),Fh(null,e,r,!0,t,n);case 19:return I0(t,e,n);case 22:return S0(t,e,n)}throw Error(R(156,e.tag))};function j0(t,e){return pv(t,e)}function JC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,n,r){return new JC(t,e,n,r)}function wf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function XC(t){if(typeof t=="function")return wf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fd)return 11;if(t===$d)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=Pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")wf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ri:return xr(n.children,i,s,e);case Od:o=8,i|=8;break;case ih:return t=Pt(12,n,e,i|2),t.elementType=ih,t.lanes=s,t;case sh:return t=Pt(13,n,e,i),t.elementType=sh,t.lanes=s,t;case oh:return t=Pt(19,n,e,i),t.elementType=oh,t.lanes=s,t;case Jy:return hu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qy:o=10;break e;case Yy:o=9;break e;case Fd:o=11;break e;case $d:o=14;break e;case Un:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=Pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function xr(t,e,n,r){return t=Pt(7,t,r,e),t.lanes=n,t}function hu(t,e,n,r){return t=Pt(22,t,r,e),t.elementType=Jy,t.lanes=n,t.stateNode={isHidden:!1},t}function xc(t,e,n){return t=Pt(6,t,null,e),t.lanes=n,t}function Nc(t,e,n){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hc(0),this.expirationTimes=hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _f(t,e,n,r,i,s,o,a,l){return t=new ZC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nf(s),t}function ek(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ni,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function z0(t){if(!t)return ur;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(vt(n))return jv(t,n,e)}return e}function H0(t,e,n,r,i,s,o,a,l){return t=_f(n,r,!0,t,i,s,o,a,l),t.context=z0(null),n=t.current,r=ht(),i=tr(n),s=Sn(r,i),s.callback=e??null,Zn(n,s,i),t.current.lanes=i,xo(t,i,r),wt(t,r),t}function du(t,e,n,r){var i=e.current,s=ht(),o=tr(i);return n=z0(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zn(i,e,o),t!==null&&(Gt(t,i,o,s),za(t,i,o)),o}function Rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ef(t,e){qm(t,e),(t=t.alternate)&&qm(t,e)}function tk(){return null}var W0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sf(t){this._internalRoot=t}fu.prototype.render=Sf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));du(t,e,null,null)};fu.prototype.unmount=Sf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$r(function(){du(null,t,null,null)}),e[Tn]=null}};function fu(t){this._internalRoot=t}fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ev();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vn.length&&e!==0&&e<Vn[n].priority;n++);Vn.splice(n,0,t),n===0&&Cv(t)}};function Cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qm(){}function nk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Rl(o);s.call(u)}}var o=H0(e,r,t,0,null,!1,!1,"",Qm);return t._reactRootContainer=o,t[Tn]=o.current,to(t.nodeType===8?t.parentNode:t),$r(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Rl(l);a.call(u)}}var l=_f(t,0,!1,null,null,!1,!1,"",Qm);return t._reactRootContainer=l,t[Tn]=l.current,to(t.nodeType===8?t.parentNode:t),$r(function(){du(e,l,n,r)}),l}function mu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Rl(o);a.call(l)}}du(e,o,t,i)}else o=nk(n,e,t,i,r);return Rl(o)}wv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ss(e.pendingLanes);n!==0&&(Vd(e,n|1),wt(e,Ie()),!(se&6)&&(Mi=Ie()+500,mr()))}break;case 13:$r(function(){var r=In(t,1);if(r!==null){var i=ht();Gt(r,t,1,i)}}),Ef(t,1)}};jd=function(t){if(t.tag===13){var e=In(t,134217728);if(e!==null){var n=ht();Gt(e,t,134217728,n)}Ef(t,134217728)}};_v=function(t){if(t.tag===13){var e=tr(t),n=In(t,e);if(n!==null){var r=ht();Gt(n,t,e,r)}Ef(t,e)}};Ev=function(){return ce};Sv=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};gh=function(t,e,n){switch(e){case"input":if(uh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=su(r);if(!i)throw Error(R(90));Zy(r),uh(r,i)}}}break;case"textarea":tv(t,n);break;case"select":e=n.value,e!=null&&yi(t,!!n.multiple,e,!1)}};lv=gf;uv=$r;var rk={usingClientEntryPoint:!1,Events:[Po,ai,su,ov,av,gf]},ms={findFiberByHostInstance:Sr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ik={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dv(t),t===null?null:t.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||tk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ra.isDisabled&&Ra.supportsFiber)try{tu=Ra.inject(ik),nn=Ra}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rk;At.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cf(e))throw Error(R(200));return ek(t,e,null,n)};At.createRoot=function(t,e){if(!Cf(t))throw Error(R(299));var n=!1,r="",i=W0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_f(t,1,!1,null,null,n,!1,r,i),t[Tn]=e.current,to(t.nodeType===8?t.parentNode:t),new Sf(e)};At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=dv(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t){return $r(t)};At.hydrate=function(t,e,n){if(!pu(e))throw Error(R(200));return mu(null,t,e,!0,n)};At.hydrateRoot=function(t,e,n){if(!Cf(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=W0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=H0(e,null,t,1,n??null,i,!1,s,o),t[Tn]=e.current,to(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new fu(e)};At.render=function(t,e,n){if(!pu(e))throw Error(R(200));return mu(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!pu(t))throw Error(R(40));return t._reactRootContainer?($r(function(){mu(null,null,t,!1,function(){t._reactRootContainer=null,t[Tn]=null})}),!0):!1};At.unstable_batchedUpdates=gf;At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!pu(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return mu(t,e,n,!1,r)};At.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=At})(tS);var Ym=th;eh.createRoot=Ym.createRoot,eh.hydrateRoot=Ym.hydrateRoot;const sk={user:null,is_auth_checked:!1,window_width:null,window_height:null,is_mobile_view:null,banner:[],set_global_context:null,site_title:"RPG Assistant",is_show_sidebar:!1},Tt=k.createContext(sk);function gs({page_title:t,children:e}){return he(Lt,{children:[S("div",{style:{fontSize:"1.5em",marginBottom:"1em"},children:t}),S(ok,{}),e]})}function ok(){const t=k.useContext(Tt),[e,n]=k.useState([]);function r(c){return n([c])}function i(c){return n(d=>[...d,c])}function s(c,d=1){return i("----".repeat(d)+"> "+c)}function o(c){return n(d=>{const h=[...d],g=h.length-1;return h[g]=h[g]+c,[...h]})}function a(){return n([])}k.useEffect(()=>{t.set_global_context(c=>({...c,replace_banner:r,append_banner:i,clear_banner:a,append_indent_banner:s,append_inline_banner:o}))},[]);const l={backgroundColor:"lightgreen",paddingLeft:".5em",paddingRight:".5em",position:"relative"},u={position:"absolute",padding:".5em",right:"0",top:"0"};return S(Lt,{children:e.length>0&&he("div",{style:l,children:[e.map(c=>S("p",{children:c},c)),S("div",{onClick:a,className:"hover-element",style:u,children:"x"})]})})}/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oe(){return oe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oe.apply(this,arguments)}var xe;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(xe||(xe={}));const Jm="popstate";function ak(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return co("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:un(i)}return uk(e,n,null,t)}function J(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function lk(){return Math.random().toString(36).substr(2,8)}function Xm(t,e){return{usr:t.state,key:t.key,idx:e}}function co(t,e,n,r){return n===void 0&&(n=null),oe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Mn(e):e,{state:n,key:e&&e.key||r||lk()})}function un(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Mn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function uk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=xe.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(oe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=xe.Pop;let C=c(),p=C==null?null:C-u;u=C,l&&l({action:a,location:v.location,delta:p})}function h(C,p){a=xe.Push;let f=co(v.location,C,p);n&&n(f,C),u=c()+1;let m=Xm(f,u),w=v.createHref(f);try{o.pushState(m,"",w)}catch{i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function g(C,p){a=xe.Replace;let f=co(v.location,C,p);n&&n(f,C),u=c();let m=Xm(f,u),w=v.createHref(f);o.replaceState(m,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function y(C){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof C=="string"?C:un(C);return J(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return a},get location(){return t(i,o)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Jm,d),l=C,()=>{i.removeEventListener(Jm,d),l=null}},createHref(C){return e(i,C)},createURL:y,encodeLocation(C){let p=y(C);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(C){return o.go(C)}};return v}var He;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(He||(He={}));function ck(t){return t.index===!0}function G0(t,e,n){return e===void 0&&(e=[]),n===void 0&&(n=new Set),t.map((r,i)=>{let s=[...e,i],o=typeof r.id=="string"?r.id:s.join("-");return J(r.index!==!0||!r.children,"Cannot specify children on an index route"),J(!n.has(o),'Found a route id collision on id "'+o+`".  Route id's must be globally unique within Data Router usages`),n.add(o),ck(r)?oe({},r,{id:o}):oe({},r,{id:o,children:r.children?G0(r.children,s,n):void 0})})}function ks(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Mn(e):e,i=Q0(r.pathname||"/",n);if(i==null)return null;let s=K0(t);hk(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=_k(s[a],Ck(i));return o}function K0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(J(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Cn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(J(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),K0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:vk(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of q0(s.path))i(s,o,l)}),e}function q0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=q0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function hk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:wk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const dk=/^:\w+$/,fk=3,pk=2,mk=1,gk=10,yk=-2,Zm=t=>t==="*";function vk(t,e){let n=t.split("/"),r=n.length;return n.some(Zm)&&(r+=yk),e&&(r+=pk),n.filter(i=>!Zm(i)).reduce((i,s)=>i+(dk.test(s)?fk:s===""?mk:gk),r)}function wk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function _k(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Ek({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Cn([i,c.pathname]),pathnameBase:Ak(Cn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Cn([i,c.pathnameBase]))}return s}function Ek(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Sk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=kk(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Sk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ho(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ck(t){try{return decodeURI(t)}catch(e){return ho(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function kk(t,e){try{return decodeURIComponent(t)}catch(n){return ho(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Q0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ho(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Tk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Mn(t):t;return{pathname:n?n.startsWith("/")?n:Ik(n,e):e,search:Rk(r),hash:Dk(i)}}function Ik(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Pc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gu(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function kf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Mn(t):(i=oe({},t),J(!i.pathname||!i.pathname.includes("?"),Pc("?","pathname","search",i)),J(!i.pathname||!i.pathname.includes("#"),Pc("#","pathname","hash",i)),J(!i.search||!i.search.includes("#"),Pc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=Tk(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Cn=t=>t.join("/").replace(/\/\/+/g,"/"),Ak=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Rk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Dk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class eg extends Error{}class xk{constructor(e,n){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],J(e&&typeof e=="object"&&!Array.isArray(e),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((s,o)=>r=o),this.controller=new AbortController;let i=()=>r(new eg("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",i),this.controller.signal.addEventListener("abort",i),this.data=Object.entries(e).reduce((s,o)=>{let[a,l]=o;return Object.assign(s,{[a]:this.trackPromise(a,l)})},{}),this.done&&this.unlistenAbortSignal(),this.init=n}trackPromise(e,n){if(!(n instanceof Promise))return n;this.deferredKeys.push(e),this.pendingKeysSet.add(e);let r=Promise.race([n,this.abortPromise]).then(i=>this.onSettle(r,e,null,i),i=>this.onSettle(r,e,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(e,n,r,i){return this.controller.signal.aborted&&r instanceof eg?(this.unlistenAbortSignal(),Object.defineProperty(e,"_error",{get:()=>r}),Promise.reject(r)):(this.pendingKeysSet.delete(n),this.done&&this.unlistenAbortSignal(),r?(Object.defineProperty(e,"_error",{get:()=>r}),this.emit(!1,n),Promise.reject(r)):(Object.defineProperty(e,"_data",{get:()=>i}),this.emit(!1,n),i))}emit(e,n){this.subscribers.forEach(r=>r(e,n))}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((e,n)=>this.pendingKeysSet.delete(n)),this.emit(!0)}async resolveData(e){let n=!1;if(!this.done){let r=()=>this.cancel();e.addEventListener("abort",r),n=await new Promise(i=>{this.subscribe(s=>{e.removeEventListener("abort",r),(s||this.done)&&i(s)})})}return n}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return J(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((e,n)=>{let[r,i]=n;return Object.assign(e,{[r]:Pk(i)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function Nk(t){return t instanceof Promise&&t._tracked===!0}function Pk(t){if(!Nk(t))return t;if(t._error)throw t._error;return t._data}class Tf{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Y0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const J0=["post","put","patch","delete"],Lk=new Set(J0),Mk=["get",...J0],bk=new Set(Mk),Ok=new Set([301,302,303,307,308]),Fk=new Set([307,308]),Lc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},$k={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},tg={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},X0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Uk=!X0;function Bk(t){J(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let e=G0(t.routes),n=null,r=new Set,i=null,s=null,o=null,a=t.hydrationData!=null,l=ks(e,t.history.location,t.basename),u=null;if(l==null){let _=$n(404,{pathname:t.history.location.pathname}),{matches:E,route:A}=ag(e);l=E,u={[A.id]:_}}let c=!l.some(_=>_.route.loader)||t.hydrationData!=null,d,h={historyAction:t.history.action,location:t.history.location,matches:l,initialized:c,navigation:Lc,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||u,fetchers:new Map,blockers:new Map},g=xe.Pop,y=!1,v,C=!1,p=!1,f=[],m=[],w=new Map,I=0,x=-1,N=new Map,M=new Set,Z=new Map,H=new Map,Se=null,Ft=new Map,hn=!1;function oa(){return n=t.history.listen(_=>{let{action:E,location:A,delta:$}=_;if(hn){hn=!1;return}ho(Se!=null&&$===null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let b=Up({currentLocation:h.location,nextLocation:A,historyAction:E});if(b&&$!=null){hn=!0,t.history.go($*-1),la(b,{state:"blocked",location:A,proceed(){la(b,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),t.history.go($)},reset(){os(b),Ae({blockers:new Map(d.state.blockers)})}});return}return ue(E,A)}),h.initialized||ue(xe.Pop,h.location),d}function Xu(){n&&n(),r.clear(),v&&v.abort(),h.fetchers.forEach((_,E)=>tc(E)),h.blockers.forEach((_,E)=>os(E))}function rs(_){return r.add(_),()=>r.delete(_)}function Ae(_){h=oe({},h,_),r.forEach(E=>E(h))}function P(_,E){var A,$;let b=h.actionData!=null&&h.navigation.formMethod!=null&&mn(h.navigation.formMethod)&&h.navigation.state==="loading"&&((A=_.state)==null?void 0:A._isRedirect)!==!0,q;E.actionData?Object.keys(E.actionData).length>0?q=E.actionData:q=null:b?q=h.actionData:q=null;let W=E.loaderData?og(h.loaderData,E.loaderData,E.matches||[],E.errors):h.loaderData;for(let[V]of Ft)os(V);let re=y===!0||h.navigation.formMethod!=null&&mn(h.navigation.formMethod)&&(($=_.state)==null?void 0:$._isRedirect)!==!0;Ae(oe({},E,{actionData:q,loaderData:W,historyAction:g,location:_,initialized:!0,navigation:Lc,revalidation:"idle",restoreScrollPosition:Bp(_,E.matches||h.matches),preventScrollReset:re,blockers:new Map(h.blockers)})),C||g===xe.Pop||(g===xe.Push?t.history.push(_,_.state):g===xe.Replace&&t.history.replace(_,_.state)),g=xe.Pop,y=!1,C=!1,p=!1,f=[],m=[]}async function K(_,E){if(typeof _=="number"){t.history.go(_);return}let{path:A,submission:$,error:b}=ng(_,E),q=h.location,W=co(h.location,A,E&&E.state);W=oe({},W,t.history.encodeLocation(W));let re=E&&E.replace!=null?E.replace:void 0,V=xe.Push;re===!0?V=xe.Replace:re===!1||$!=null&&mn($.formMethod)&&$.formAction===h.location.pathname+h.location.search&&(V=xe.Replace);let lt=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0,ne=Up({currentLocation:q,nextLocation:W,historyAction:V});if(ne){la(ne,{state:"blocked",location:W,proceed(){la(ne,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),K(_,E)},reset(){os(ne),Ae({blockers:new Map(h.blockers)})}});return}return await ue(V,W,{submission:$,pendingError:b,preventScrollReset:lt,replace:E&&E.replace})}function X(){if(Zu(),Ae({revalidation:"loading"}),h.navigation.state!=="submitting"){if(h.navigation.state==="idle"){ue(h.historyAction,h.location,{startUninterruptedRevalidation:!0});return}ue(g||h.historyAction,h.navigation.location,{overrideNavigation:h.navigation})}}async function ue(_,E,A){v&&v.abort(),v=null,g=_,C=(A&&A.startUninterruptedRevalidation)===!0,IE(h.location,h.matches),y=(A&&A.preventScrollReset)===!0;let $=A&&A.overrideNavigation,b=ks(e,E,t.basename);if(!b){let Ce=$n(404,{pathname:E.pathname}),{matches:$t,route:Ut}=ag(e);nc(),P(E,{matches:$t,loaderData:{},errors:{[Ut.id]:Ce}});return}if(Wk(h.location,E)&&!(A&&A.submission&&mn(A.submission.formMethod))){P(E,{matches:b});return}v=new AbortController;let q=vs(t.history,E,v.signal,A&&A.submission),W,re;if(A&&A.pendingError)re={[pi(b).route.id]:A.pendingError};else if(A&&A.submission&&mn(A.submission.formMethod)){let Ce=await Re(q,E,A.submission,b,{replace:A.replace});if(Ce.shortCircuited)return;W=Ce.pendingActionData,re=Ce.pendingActionError,$=oe({state:"loading",location:E},A.submission),q=new Request(q.url,{signal:q.signal})}let{shortCircuited:V,loaderData:lt,errors:ne}=await Yr(q,E,b,$,A&&A.submission,A&&A.replace,W,re);V||(v=null,P(E,oe({matches:b},W?{actionData:W}:{},{loaderData:lt,errors:ne})))}async function Re(_,E,A,$,b){Zu();let q=oe({state:"submitting",location:E},A);Ae({navigation:q});let W,re=hg($,E);if(!re.route.action)W={type:He.error,error:$n(405,{method:_.method,pathname:E.pathname,routeId:re.route.id})};else if(W=await ys("action",_,re,$,d.basename),_.signal.aborted)return{shortCircuited:!0};if(Ci(W)){let V;return b&&b.replace!=null?V=b.replace:V=W.location===h.location.pathname+h.location.search,await ss(h,W,{submission:A,replace:V}),{shortCircuited:!0}}if(Us(W)){let V=pi($,re.route.id);return(b&&b.replace)!==!0&&(g=xe.Push),{pendingActionData:{},pendingActionError:{[V.route.id]:W.error}}}if(Tr(W))throw $n(400,{type:"defer-action"});return{pendingActionData:{[re.route.id]:W.data}}}async function Yr(_,E,A,$,b,q,W,re){let V=$;V||(V=oe({state:"loading",location:E,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},b));let lt=b||(V.formMethod&&V.formAction&&V.formData&&V.formEncType?{formMethod:V.formMethod,formAction:V.formAction,formData:V.formData,formEncType:V.formEncType}:void 0),[ne,Ce]=rg(t.history,h,A,lt,E,p,f,m,W,re,Z);if(nc(Ye=>!(A&&A.some(Jt=>Jt.route.id===Ye))||ne&&ne.some(Jt=>Jt.route.id===Ye)),ne.length===0&&Ce.length===0)return P(E,oe({matches:A,loaderData:{},errors:re||null},W?{actionData:W}:{})),{shortCircuited:!0};if(!C){Ce.forEach(Jt=>{let vr=h.fetchers.get(Jt.key),ha={state:"loading",data:vr&&vr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(Jt.key,ha)});let Ye=W||h.actionData;Ae(oe({navigation:V},Ye?Object.keys(Ye).length===0?{actionData:null}:{actionData:Ye}:{},Ce.length>0?{fetchers:new Map(h.fetchers)}:{}))}x=++I,Ce.forEach(Ye=>w.set(Ye.key,v));let{results:$t,loaderResults:Ut,fetcherResults:as}=await Op(h.matches,A,ne,Ce,_);if(_.signal.aborted)return{shortCircuited:!0};Ce.forEach(Ye=>w.delete(Ye.key));let ua=lg($t);if(ua)return await ss(h,ua,{replace:q}),{shortCircuited:!0};let{loaderData:ca,errors:Xr}=sg(h,A,ne,Ut,re,Ce,as,H);H.forEach((Ye,Jt)=>{Ye.subscribe(vr=>{(vr||Ye.done)&&H.delete(Jt)})}),CE();let rc=$p(x);return oe({loaderData:ca,errors:Xr},rc||Ce.length>0?{fetchers:new Map(h.fetchers)}:{})}function Yt(_){return h.fetchers.get(_)||$k}function is(_,E,A,$){if(Uk)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");w.has(_)&&aa(_);let b=ks(e,A,t.basename);if(!b){ec(_,E,$n(404,{pathname:A}));return}let{path:q,submission:W}=ng(A,$,!0),re=hg(b,q);if(y=($&&$.preventScrollReset)===!0,W&&mn(W.formMethod)){dn(_,E,q,re,b,W);return}Z.set(_,{routeId:E,path:q,match:re,matches:b}),Jr(_,E,q,re,b,W)}async function dn(_,E,A,$,b,q){if(Zu(),Z.delete(_),!$.route.action){let fn=$n(405,{method:q.formMethod,pathname:A,routeId:E});ec(_,E,fn);return}let W=h.fetchers.get(_),re=oe({state:"submitting"},q,{data:W&&W.data," _hasFetcherDoneAnything ":!0});h.fetchers.set(_,re),Ae({fetchers:new Map(h.fetchers)});let V=new AbortController,lt=vs(t.history,A,V.signal,q);w.set(_,V);let ne=await ys("action",lt,$,b,d.basename);if(lt.signal.aborted){w.get(_)===V&&w.delete(_);return}if(Ci(ne)){w.delete(_),M.add(_);let fn=oe({state:"loading"},q,{data:void 0," _hasFetcherDoneAnything ":!0});return h.fetchers.set(_,fn),Ae({fetchers:new Map(h.fetchers)}),ss(h,ne,{isFetchActionRedirect:!0})}if(Us(ne)){ec(_,E,ne.error);return}if(Tr(ne))throw $n(400,{type:"defer-action"});let Ce=h.navigation.location||h.location,$t=vs(t.history,Ce,V.signal),Ut=h.navigation.state!=="idle"?ks(e,h.navigation.location,t.basename):h.matches;J(Ut,"Didn't find any matches after fetcher action");let as=++I;N.set(_,as);let ua=oe({state:"loading",data:ne.data},q,{" _hasFetcherDoneAnything ":!0});h.fetchers.set(_,ua);let[ca,Xr]=rg(t.history,h,Ut,q,Ce,p,f,m,{[$.route.id]:ne.data},void 0,Z);Xr.filter(fn=>fn.key!==_).forEach(fn=>{let sc=fn.key,Vp=h.fetchers.get(sc),DE={state:"loading",data:Vp&&Vp.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(sc,DE),w.set(sc,V)}),Ae({fetchers:new Map(h.fetchers)});let{results:rc,loaderResults:Ye,fetcherResults:Jt}=await Op(h.matches,Ut,ca,Xr,$t);if(V.signal.aborted)return;N.delete(_),w.delete(_),Xr.forEach(fn=>w.delete(fn.key));let vr=lg(rc);if(vr)return ss(h,vr);let{loaderData:ha,errors:ic}=sg(h,h.matches,ca,Ye,void 0,Xr,Jt,H),AE={state:"idle",data:ne.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(_,AE);let RE=$p(as);h.navigation.state==="loading"&&as>x?(J(g,"Expected pending action"),v&&v.abort(),P(h.navigation.location,{matches:Ut,loaderData:ha,errors:ic,fetchers:new Map(h.fetchers)})):(Ae(oe({errors:ic,loaderData:og(h.loaderData,ha,Ut,ic)},RE?{fetchers:new Map(h.fetchers)}:{})),p=!1)}async function Jr(_,E,A,$,b,q){let W=h.fetchers.get(_),re=oe({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},q,{data:W&&W.data," _hasFetcherDoneAnything ":!0});h.fetchers.set(_,re),Ae({fetchers:new Map(h.fetchers)});let V=new AbortController,lt=vs(t.history,A,V.signal);w.set(_,V);let ne=await ys("loader",lt,$,b,d.basename);if(Tr(ne)&&(ne=await nw(ne,lt.signal,!0)||ne),w.get(_)===V&&w.delete(_),lt.signal.aborted)return;if(Ci(ne)){await ss(h,ne);return}if(Us(ne)){let $t=pi(h.matches,E);h.fetchers.delete(_),Ae({fetchers:new Map(h.fetchers),errors:{[$t.route.id]:ne.error}});return}J(!Tr(ne),"Unhandled fetcher deferred data");let Ce={state:"idle",data:ne.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(_,Ce),Ae({fetchers:new Map(h.fetchers)})}async function ss(_,E,A){var $;let{submission:b,replace:q,isFetchActionRedirect:W}=A===void 0?{}:A;E.revalidate&&(p=!0);let re=co(_.location,E.location,oe({_isRedirect:!0},W?{_isFetchActionRedirect:!0}:{}));if(J(re,"Expected a location on the redirect navigation"),X0&&typeof(($=window)==null?void 0:$.location)<"u"){let Ut=t.history.createURL(E.location).origin;if(window.location.origin!==Ut){q?window.location.replace(E.location):window.location.assign(E.location);return}}v=null;let V=q===!0?xe.Replace:xe.Push,{formMethod:lt,formAction:ne,formEncType:Ce,formData:$t}=_.navigation;!b&&lt&&ne&&$t&&Ce&&(b={formMethod:lt,formAction:ne,formEncType:Ce,formData:$t}),Fk.has(E.status)&&b&&mn(b.formMethod)?await ue(V,re,{submission:oe({},b,{formAction:E.location}),preventScrollReset:y}):await ue(V,re,{overrideNavigation:{state:"loading",location:re,formMethod:b?b.formMethod:void 0,formAction:b?b.formAction:void 0,formEncType:b?b.formEncType:void 0,formData:b?b.formData:void 0},preventScrollReset:y})}async function Op(_,E,A,$,b){let q=await Promise.all([...A.map(V=>ys("loader",b,V,E,d.basename)),...$.map(V=>ys("loader",vs(t.history,V.path,b.signal),V.match,V.matches,d.basename))]),W=q.slice(0,A.length),re=q.slice(A.length);return await Promise.all([ug(_,A,W,b.signal,!1,h.loaderData),ug(_,$.map(V=>V.match),re,b.signal,!0)]),{results:q,loaderResults:W,fetcherResults:re}}function Zu(){p=!0,f.push(...nc()),Z.forEach((_,E)=>{w.has(E)&&(m.push(E),aa(E))})}function ec(_,E,A){let $=pi(h.matches,E);tc(_),Ae({errors:{[$.route.id]:A},fetchers:new Map(h.fetchers)})}function tc(_){w.has(_)&&aa(_),Z.delete(_),N.delete(_),M.delete(_),h.fetchers.delete(_)}function aa(_){let E=w.get(_);J(E,"Expected fetch controller: "+_),E.abort(),w.delete(_)}function Fp(_){for(let E of _){let $={state:"idle",data:Yt(E).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(E,$)}}function CE(){let _=[];for(let E of M){let A=h.fetchers.get(E);J(A,"Expected fetcher: "+E),A.state==="loading"&&(M.delete(E),_.push(E))}Fp(_)}function $p(_){let E=[];for(let[A,$]of N)if($<_){let b=h.fetchers.get(A);J(b,"Expected fetcher: "+A),b.state==="loading"&&(aa(A),N.delete(A),E.push(A))}return Fp(E),E.length>0}function kE(_,E){let A=h.blockers.get(_)||tg;return Ft.get(_)!==E&&(Ft.set(_,E),Se==null?Se=_:_!==Se&&ho(!1,"A router only supports one blocker at a time")),A}function os(_){h.blockers.delete(_),Ft.delete(_),Se===_&&(Se=null)}function la(_,E){let A=h.blockers.get(_)||tg;J(A.state==="unblocked"&&E.state==="blocked"||A.state==="blocked"&&E.state==="blocked"||A.state==="blocked"&&E.state==="proceeding"||A.state==="blocked"&&E.state==="unblocked"||A.state==="proceeding"&&E.state==="unblocked","Invalid blocker state transition: "+A.state+" -> "+E.state),h.blockers.set(_,E),Ae({blockers:new Map(h.blockers)})}function Up(_){let{currentLocation:E,nextLocation:A,historyAction:$}=_;if(Se==null)return;let b=Ft.get(Se);J(b,"Could not find a function for the active blocker");let q=h.blockers.get(Se);if(!(q&&q.state==="proceeding")&&b({currentLocation:E,nextLocation:A,historyAction:$}))return Se}function nc(_){let E=[];return H.forEach((A,$)=>{(!_||_($))&&(A.cancel(),E.push($),H.delete($))}),E}function TE(_,E,A){if(i=_,o=E,s=A||($=>$.key),!a&&h.navigation===Lc){a=!0;let $=Bp(h.location,h.matches);$!=null&&Ae({restoreScrollPosition:$})}return()=>{i=null,o=null,s=null}}function IE(_,E){if(i&&s&&o){let A=E.map(b=>cg(b,h.loaderData)),$=s(_,A)||_.key;i[$]=o()}}function Bp(_,E){if(i&&s&&o){let A=E.map(q=>cg(q,h.loaderData)),$=s(_,A)||_.key,b=i[$];if(typeof b=="number")return b}return null}return d={get basename(){return t.basename},get state(){return h},get routes(){return e},initialize:oa,subscribe:rs,enableScrollRestoration:TE,navigate:K,fetch:is,revalidate:X,createHref:_=>t.history.createHref(_),encodeLocation:_=>t.history.encodeLocation(_),getFetcher:Yt,deleteFetcher:tc,dispose:Xu,getBlocker:kE,deleteBlocker:os,_internalFetchControllers:w,_internalActiveDeferreds:H},d}function Vk(t){return t!=null&&"formData"in t}function ng(t,e,n){n===void 0&&(n=!1);let r=typeof t=="string"?t:un(t);if(!e||!Vk(e))return{path:r};if(e.formMethod&&!Kk(e.formMethod))return{path:r,error:$n(405,{method:e.formMethod})};let i;if(e.formData&&(i={formMethod:e.formMethod||"get",formAction:tw(r),formEncType:e&&e.formEncType||"application/x-www-form-urlencoded",formData:e.formData},mn(i.formMethod)))return{path:r,submission:i};let s=Mn(r),o=ew(e.formData);return n&&s.search&&rw(s.search)&&o.append("index",""),s.search="?"+o,{path:un(s),submission:i}}function jk(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function rg(t,e,n,r,i,s,o,a,l,u,c){let d=u?Object.values(u)[0]:l?Object.values(l)[0]:void 0,h=t.createURL(e.location),g=t.createURL(i),y=s||h.toString()===g.toString()||h.search!==g.search,v=u?Object.keys(u)[0]:void 0,p=jk(n,v).filter((m,w)=>{if(m.route.loader==null)return!1;if(zk(e.loaderData,e.matches[w],m)||o.some(N=>N===m.route.id))return!0;let I=e.matches[w],x=m;return ig(m,oe({currentUrl:h,currentParams:I.params,nextUrl:g,nextParams:x.params},r,{actionResult:d,defaultShouldRevalidate:y||Z0(I,x)}))}),f=[];return c&&c.forEach((m,w)=>{if(n.some(I=>I.route.id===m.routeId))a.includes(w)?f.push(oe({key:w},m)):ig(m.match,oe({currentUrl:h,currentParams:e.matches[e.matches.length-1].params,nextUrl:g,nextParams:n[n.length-1].params},r,{actionResult:d,defaultShouldRevalidate:y}))&&f.push(oe({key:w},m));else return}),[p,f]}function zk(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function Z0(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function ig(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function ys(t,e,n,r,i,s,o,a){i===void 0&&(i="/"),s===void 0&&(s=!1),o===void 0&&(o=!1);let l,u,c,d=new Promise((g,y)=>c=y),h=()=>c();e.signal.addEventListener("abort",h);try{let g=n.route[t];J(g,"Could not find the "+t+' to run on the "'+n.route.id+'" route'),u=await Promise.race([g({request:e,params:n.params,context:a}),d]),J(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(g){l=He.error,u=g}finally{e.signal.removeEventListener("abort",h)}if(Gk(u)){let g=u.status;if(Ok.has(g)){let C=u.headers.get("Location");if(J(C,"Redirects returned/thrown from loaders/actions must have a Location header"),/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(C)){if(!s){let f=new URL(e.url),m=C.startsWith("//")?new URL(f.protocol+C):new URL(C);m.origin===f.origin&&(C=m.pathname+m.search+m.hash)}}else{let f=r.slice(0,r.indexOf(n)+1),m=gu(f).map(I=>I.pathnameBase),w=kf(C,m,new URL(e.url).pathname);if(J(un(w),"Unable to resolve redirect location: "+C),i){let I=w.pathname;w.pathname=I==="/"?i:Cn([i,I])}C=un(w)}if(s)throw u.headers.set("Location",C),u;return{type:He.redirect,status:g,location:C,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(o)throw{type:l||He.data,response:u};let y,v=u.headers.get("Content-Type");return v&&/\bapplication\/json\b/.test(v)?y=await u.json():y=await u.text(),l===He.error?{type:l,error:new Tf(g,u.statusText,y),headers:u.headers}:{type:He.data,data:y,statusCode:u.status,headers:u.headers}}return l===He.error?{type:l,error:u}:u instanceof xk?{type:He.deferred,deferredData:u}:{type:He.data,data:u}}function vs(t,e,n,r){let i=t.createURL(tw(e)).toString(),s={signal:n};if(r&&mn(r.formMethod)){let{formMethod:o,formEncType:a,formData:l}=r;s.method=o.toUpperCase(),s.body=a==="application/x-www-form-urlencoded"?ew(l):l}return new Request(i,s)}function ew(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,r instanceof File?r.name:r);return e}function Hk(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let h=e[d].route.id;if(J(!Ci(c),"Cannot handle redirect results in processLoaderData"),Us(c)){let g=pi(t,h),y=c.error;r&&(y=Object.values(r)[0],r=void 0),o=o||{},o[g.route.id]==null&&(o[g.route.id]=y),s[h]=void 0,l||(l=!0,a=Y0(c.error)?c.error.status:500),c.headers&&(u[h]=c.headers)}else Tr(c)?(i.set(h,c.deferredData),s[h]=c.deferredData.data):s[h]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[h]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function sg(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=Hk(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:h}=s[c];J(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let g=o[c];if(Us(g)){let y=pi(t.matches,h.route.id);u&&u[y.route.id]||(u=oe({},u,{[y.route.id]:g.error})),t.fetchers.delete(d)}else if(Ci(g))J(!1,"Unhandled fetcher revalidation redirect");else if(Tr(g))J(!1,"Unhandled fetcher deferred data");else{let y={state:"idle",data:g.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};t.fetchers.set(d,y)}}return{loaderData:l,errors:u}}function og(t,e,n,r){let i=oe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function pi(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function ag(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function $n(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"&&(a="defer() is not supported in actions")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Tf(t||500,o,new Error(a),!0)}function lg(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Ci(n))return n}}function tw(t){let e=typeof t=="string"?Mn(t):t;return un(oe({},e,{hash:""}))}function Wk(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash!==e.hash}function Tr(t){return t.type===He.deferred}function Us(t){return t.type===He.error}function Ci(t){return(t&&t.type)===He.redirect}function Gk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function Kk(t){return bk.has(t)}function mn(t){return Lk.has(t)}async function ug(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o],u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!Z0(u,l)&&(s&&s[l.route.id])!==void 0;Tr(a)&&(i||c)&&await nw(a,r,i).then(d=>{d&&(n[o]=d||n[o])})}}async function nw(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:He.data,data:t.deferredData.unwrappedData}}catch(i){return{type:He.error,error:i}}return{type:He.data,data:t.deferredData.data}}}function rw(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function cg(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function hg(t,e){let n=typeof e=="string"?Mn(e).search:e.search;if(t[t.length-1].route.index&&rw(n||""))return t[t.length-1];let r=gu(t);return r[r.length-1]}/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dl(){return Dl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Dl.apply(this,arguments)}function qk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const Qk=typeof Object.is=="function"?Object.is:qk,{useState:Yk,useEffect:Jk,useLayoutEffect:Xk,useDebugValue:Zk}=Zc;function eT(t,e,n){const r=e(),[{inst:i},s]=Yk({inst:{value:r,getSnapshot:e}});return Xk(()=>{i.value=r,i.getSnapshot=e,Mc(i)&&s({inst:i})},[t,r,e]),Jk(()=>(Mc(i)&&s({inst:i}),t(()=>{Mc(i)&&s({inst:i})})),[t]),Zk(r),r}function Mc(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!Qk(n,r)}catch{return!0}}function tT(t,e,n){return e()}const nT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rT=!nT,iT=rT?tT:eT,sT="useSyncExternalStore"in Zc?(t=>t.useSyncExternalStore)(Zc):iT,If=k.createContext(null),yu=k.createContext(null),Mo=k.createContext(null),vu=k.createContext(null),Gr=k.createContext({outlet:null,matches:[]}),iw=k.createContext(null);function oT(t,e){let{relative:n}=e===void 0?{}:e;bo()||J(!1);let{basename:r,navigator:i}=k.useContext(Mo),{hash:s,pathname:o,search:a}=Af(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Cn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function bo(){return k.useContext(vu)!=null}function Oo(){return bo()||J(!1),k.useContext(vu).location}function aT(){bo()||J(!1);let{basename:t,navigator:e}=k.useContext(Mo),{matches:n}=k.useContext(Gr),{pathname:r}=Oo(),i=JSON.stringify(gu(n).map(a=>a.pathnameBase)),s=k.useRef(!1);return k.useEffect(()=>{s.current=!0}),k.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=kf(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Cn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}const lT=k.createContext(null);function uT(t){let e=k.useContext(Gr).outlet;return e&&k.createElement(lT.Provider,{value:t},e)}function Af(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=k.useContext(Gr),{pathname:i}=Oo(),s=JSON.stringify(gu(r).map(o=>o.pathnameBase));return k.useMemo(()=>kf(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function cT(t,e){bo()||J(!1);let{navigator:n}=k.useContext(Mo),r=k.useContext(yu),{matches:i}=k.useContext(Gr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Oo(),u;if(e){var c;let v=typeof e=="string"?Mn(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||J(!1),u=v}else u=l;let d=u.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",g=ks(t,{pathname:h}),y=pT(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Cn([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Cn([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return e&&y?k.createElement(vu.Provider,{value:{location:Dl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:xe.Pop}},y):y}function hT(){let t=sw(),e=Y0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,s)}class dT extends k.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?k.createElement(Gr.Provider,{value:this.props.routeContext},k.createElement(iw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fT(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(If);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Gr.Provider,{value:e},r)}function pT(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||J(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||k.createElement(hT,null):null,c=e.concat(r.slice(0,a+1)),d=()=>k.createElement(fT,{match:o,routeContext:{outlet:s,matches:c}},l?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||a===0)?k.createElement(dT,{location:n.location,component:u,error:l,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var dg;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(dg||(dg={}));var xl;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(xl||(xl={}));function mT(t){let e=k.useContext(yu);return e||J(!1),e}function gT(t){let e=k.useContext(Gr);return e||J(!1),e}function yT(t){let e=gT(),n=e.matches[e.matches.length-1];return n.route.id||J(!1),n.route.id}function sw(){var t;let e=k.useContext(iw),n=mT(xl.UseRouteError),r=yT(xl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function vT(t){let{fallbackElement:e,router:n}=t,r=sT(n.subscribe,()=>n.state,()=>n.state),i=k.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:o=>n.navigate(o),push:(o,a,l)=>n.navigate(o,{state:a,preventScrollReset:l==null?void 0:l.preventScrollReset}),replace:(o,a,l)=>n.navigate(o,{replace:!0,state:a,preventScrollReset:l==null?void 0:l.preventScrollReset})}),[n]),s=n.basename||"/";return k.createElement(k.Fragment,null,k.createElement(If.Provider,{value:{router:n,navigator:i,static:!1,basename:s}},k.createElement(yu.Provider,{value:r},k.createElement(ET,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:i},n.state.initialized?k.createElement(ST,null):e))),null)}function wT(t){return uT(t.context)}function _T(t){J(!1)}function ET(t){let{basename:e="/",children:n=null,location:r,navigationType:i=xe.Pop,navigator:s,static:o=!1}=t;bo()&&J(!1);let a=e.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Mn(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:g="default"}=r,y=k.useMemo(()=>{let v=Q0(u,a);return v==null?null:{pathname:v,search:c,hash:d,state:h,key:g}},[a,u,c,d,h,g]);return y==null?null:k.createElement(Mo.Provider,{value:l},k.createElement(vu.Provider,{children:n,value:{location:y,navigationType:i}}))}function ST(t){let{children:e,location:n}=t,r=k.useContext(If),i=r&&!e?r.router.routes:Qh(e);return cT(i,n)}var fg;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(fg||(fg={}));new Promise(()=>{});function Qh(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;if(r.type===k.Fragment){n.push.apply(n,Qh(r.props.children,e));return}r.type!==_T&&J(!1),!r.props.index||!r.props.children||J(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Qh(r.props.children,s)),n.push(o)}),n}function ow(t){return t.map(e=>{let n=Dl({},e);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=ow(n.children)),n})}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fo(){return fo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fo.apply(this,arguments)}function aw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function CT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function kT(t,e){return t.button===0&&(!e||e==="_self")&&!CT(t)}const TT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],IT=["aria-current","caseSensitive","className","end","style","to","children"];function AT(t,e){return Bk({basename:e==null?void 0:e.basename,history:ak({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||RT(),routes:ow(t)}).initialize()}function RT(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=fo({},e,{errors:DT(e.errors)})),e}function DT(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Tf(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}const xT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lw=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=aw(e,TT),h=typeof u=="string"?u:un(u),g=/^[a-z+]+:\/\//i.test(h)||h.startsWith("//"),y=h,v=!1;if(xT&&g){let m=new URL(window.location.href),w=h.startsWith("//")?new URL(m.protocol+h):new URL(h);w.origin===m.origin?y=w.pathname+w.search+w.hash:v=!0}let C=oT(y,{relative:i}),p=NT(y,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function f(m){r&&r(m),m.defaultPrevented||p(m)}return k.createElement("a",fo({},d,{href:g?h:C,onClick:v||s?r:f,ref:n,target:l}))}),bc=k.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=aw(e,IT),d=Af(l,{relative:c.relative}),h=Oo(),g=k.useContext(yu),{navigator:y}=k.useContext(Mo),v=y.encodeLocation?y.encodeLocation(d).pathname:d.pathname,C=h.pathname,p=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(C=C.toLowerCase(),p=p?p.toLowerCase():null,v=v.toLowerCase());let f=C===v||!o&&C.startsWith(v)&&C.charAt(v.length)==="/",m=p!=null&&(p===v||!o&&p.startsWith(v)&&p.charAt(v.length)==="/"),w=f?r:void 0,I;typeof s=="function"?I=s({isActive:f,isPending:m}):I=[s,f?"active":null,m?"pending":null].filter(Boolean).join(" ");let x=typeof a=="function"?a({isActive:f,isPending:m}):a;return k.createElement(lw,fo({},c,{"aria-current":w,className:I,ref:n,style:x,to:l}),typeof u=="function"?u({isActive:f,isPending:m}):u)});var pg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(pg||(pg={}));var mg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(mg||(mg={}));function NT(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=aT(),l=Oo(),u=Af(t,{relative:o});return k.useCallback(c=>{if(kT(c,n)){c.preventDefault();let d=r!==void 0?r:un(l)===un(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
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
 *//**
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
 */const uw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},PT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[c],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):PT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw Error();const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},LT=function(t){const e=uw(t);return cw.encodeByteArray(e,!0)},Nl=function(t){return LT(t).replace(/\./g,"")},hw=function(t){try{return cw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function MT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bT=()=>MT().__FIREBASE_DEFAULTS__,OT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hw(t[1]);return e&&JSON.parse(e)},Rf=()=>{try{return bT()||OT()||FT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dw=t=>{var e,n;return(n=(e=Rf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$T=t=>{const e=dw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},UT=()=>{var t;return(t=Rf())===null||t===void 0?void 0:t.config},fw=t=>{var e;return(e=Rf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class BT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function VT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Nl(JSON.stringify(n)),Nl(JSON.stringify(o)),a].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function zT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function HT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WT(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function GT(){try{return typeof indexedDB=="object"}catch{return!1}}function KT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const qT="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qT,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fo.prototype.create)}}class Fo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new bn(i,a,r)}}function QT(t,e){return t.replace(YT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const YT=/\{\$([^}]+)}/g;function JT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(gg(s)&&gg(o)){if(!Pl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gg(t){return t!==null&&typeof t=="object"}/**
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
 */function $o(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ts(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Is(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function XT(t,e){const n=new ZT(t,e);return n.subscribe.bind(n)}class ZT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Oc),i.error===void 0&&(i.error=Oc),i.complete===void 0&&(i.complete=Oc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oc(){}/**
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
 */function dt(t){return t&&t._delegate?t._delegate:t}class Ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Er="[DEFAULT]";/**
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
 */class tI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new BT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rI(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nI(t){return t===Er?void 0:t}function rI(t){return t.instantiationMode==="EAGER"}/**
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
 */class iI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const sI={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},oI=ae.INFO,aI={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},lI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=aI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Df{constructor(e){this.name=e,this._logLevel=oI,this._logHandler=lI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const uI=(t,e)=>e.some(n=>t instanceof n);let yg,vg;function cI(){return yg||(yg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hI(){return vg||(vg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pw=new WeakMap,Yh=new WeakMap,mw=new WeakMap,Fc=new WeakMap,xf=new WeakMap;function dI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(rr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pw.set(n,t)}).catch(()=>{}),xf.set(e,t),e}function fI(t){if(Yh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Yh.set(t,e)}let Jh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pI(t){Jh=t(Jh)}function mI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($c(this),e,...n);return mw.set(r,e.sort?e.sort():[e]),rr(r)}:hI().includes(t)?function(...e){return t.apply($c(this),e),rr(pw.get(this))}:function(...e){return rr(t.apply($c(this),e))}}function gI(t){return typeof t=="function"?mI(t):(t instanceof IDBTransaction&&fI(t),uI(t,cI())?new Proxy(t,Jh):t)}function rr(t){if(t instanceof IDBRequest)return dI(t);if(Fc.has(t))return Fc.get(t);const e=gI(t);return e!==t&&(Fc.set(t,e),xf.set(e,t)),e}const $c=t=>xf.get(t);function yI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=rr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(rr(o.result),l.oldVersion,l.newVersion,rr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const vI=["get","getKey","getAll","getAllKeys","count"],wI=["put","add","delete","clear"],Uc=new Map;function wg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uc.get(e))return Uc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=wI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Uc.set(e,s),s}pI(t=>({...t,get:(e,n,r)=>wg(e,n)||t.get(e,n,r),has:(e,n)=>!!wg(e,n)||t.has(e,n)}));/**
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
 */class _I{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(EI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function EI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xh="@firebase/app",_g="0.9.1";/**
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
 */const Br=new Df("@firebase/app"),SI="@firebase/app-compat",CI="@firebase/analytics-compat",kI="@firebase/analytics",TI="@firebase/app-check-compat",II="@firebase/app-check",AI="@firebase/auth",RI="@firebase/auth-compat",DI="@firebase/database",xI="@firebase/database-compat",NI="@firebase/functions",PI="@firebase/functions-compat",LI="@firebase/installations",MI="@firebase/installations-compat",bI="@firebase/messaging",OI="@firebase/messaging-compat",FI="@firebase/performance",$I="@firebase/performance-compat",UI="@firebase/remote-config",BI="@firebase/remote-config-compat",VI="@firebase/storage",jI="@firebase/storage-compat",zI="@firebase/firestore",HI="@firebase/firestore-compat",WI="firebase",GI="9.16.0";/**
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
 */const Zh="[DEFAULT]",KI={[Xh]:"fire-core",[SI]:"fire-core-compat",[kI]:"fire-analytics",[CI]:"fire-analytics-compat",[II]:"fire-app-check",[TI]:"fire-app-check-compat",[AI]:"fire-auth",[RI]:"fire-auth-compat",[DI]:"fire-rtdb",[xI]:"fire-rtdb-compat",[NI]:"fire-fn",[PI]:"fire-fn-compat",[LI]:"fire-iid",[MI]:"fire-iid-compat",[bI]:"fire-fcm",[OI]:"fire-fcm-compat",[FI]:"fire-perf",[$I]:"fire-perf-compat",[UI]:"fire-rc",[BI]:"fire-rc-compat",[VI]:"fire-gcs",[jI]:"fire-gcs-compat",[zI]:"fire-fst",[HI]:"fire-fst-compat","fire-js":"fire-js",[WI]:"fire-js-all"};/**
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
 */const Ll=new Map,ed=new Map;function qI(t,e){try{t.container.addComponent(e)}catch(n){Br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bi(t){const e=t.name;if(ed.has(e))return Br.debug(`There were multiple attempts to register component ${e}.`),!1;ed.set(e,t);for(const n of Ll.values())qI(n,t);return!0}function Nf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const QI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ir=new Fo("app","Firebase",QI);/**
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
 */class YI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
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
 */const Uo=GI;function gw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ir.create("bad-app-name",{appName:String(i)});if(n||(n=UT()),!n)throw ir.create("no-options");const s=Ll.get(i);if(s){if(Pl(n,s.options)&&Pl(r,s.config))return s;throw ir.create("duplicate-app",{appName:i})}const o=new iI(i);for(const l of ed.values())o.addComponent(l);const a=new YI(n,r,o);return Ll.set(i,a),a}function yw(t=Zh){const e=Ll.get(t);if(!e&&t===Zh)return gw();if(!e)throw ir.create("no-app",{appName:t});return e}function sr(t,e,n){var r;let i=(r=KI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Br.warn(a.join(" "));return}bi(new Ur(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const JI="firebase-heartbeat-database",XI=1,po="firebase-heartbeat-store";let Bc=null;function vw(){return Bc||(Bc=yI(JI,XI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(po)}}}).catch(t=>{throw ir.create("idb-open",{originalErrorMessage:t.message})})),Bc}async function ZI(t){try{return(await vw()).transaction(po).objectStore(po).get(ww(t))}catch(e){if(e instanceof bn)Br.warn(e.message);else{const n=ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Br.warn(n.message)}}}async function Eg(t,e){try{const r=(await vw()).transaction(po,"readwrite");return await r.objectStore(po).put(e,ww(t)),r.done}catch(n){if(n instanceof bn)Br.warn(n.message);else{const r=ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Br.warn(r.message)}}}function ww(t){return`${t.name}!${t.options.appId}`}/**
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
 */const eA=1024,tA=30*24*60*60*1e3;class nA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Sg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=tA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Sg(),{heartbeatsToSend:n,unsentEntries:r}=rA(this._heartbeatsCache.heartbeats),i=Nl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Sg(){return new Date().toISOString().substring(0,10)}function rA(t,e=eA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Cg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GT()?KT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ZI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cg(t){return Nl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function sA(t){bi(new Ur("platform-logger",e=>new _I(e),"PRIVATE")),bi(new Ur("heartbeat",e=>new nA(e),"PRIVATE")),sr(Xh,_g,t),sr(Xh,_g,"esm2017"),sr("fire-js","")}sA("");function Pf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function _w(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oA=_w,Ew=new Fo("auth","Firebase",_w());/**
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
 */const kg=new Df("@firebase/auth");function Ya(t,...e){kg.logLevel<=ae.ERROR&&kg.error(`Auth (${Uo}): ${t}`,...e)}/**
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
 */function qt(t,...e){throw Lf(t,...e)}function sn(t,...e){return Lf(t,...e)}function aA(t,e,n){const r=Object.assign(Object.assign({},oA()),{[e]:n});return new Fo("auth","Firebase",r).create(e,{appName:t.name})}function Lf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ew.create(t,...e)}function j(t,e,...n){if(!t)throw Lf(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ya(e),new Error(e)}function Rn(t,e){t||wn(e)}/**
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
 */const Tg=new Map;function _n(t){Rn(t instanceof Function,"Expected a class definition");let e=Tg.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tg.set(t,e),e)}/**
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
 */function lA(t,e){const n=Nf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Pl(s,e??{}))return i;qt(i,"already-initialized")}return n.initialize({options:e})}function uA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function td(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cA(){return Ig()==="http:"||Ig()==="https:"}function Ig(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function hA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cA()||zT()||"connection"in navigator)?navigator.onLine:!0}function dA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=jT()||HT()}get(){return hA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mf(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Sw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const pA=new Bo(3e4,6e4);function wu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vo(t,e,n,r,i={}){return Cw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=$o(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Sw.fetch()(kw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Cw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fA),e);try{const i=new mA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Da(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Da(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Da(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Da(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw aA(t,c,u);qt(t,c)}}catch(i){if(i instanceof bn)throw i;qt(t,"network-request-failed")}}async function _u(t,e,n,r,i={}){const s=await Vo(t,e,n,r,i);return"mfaPendingCredential"in s&&qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function kw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Mf(t.config,i):`${t.config.apiScheme}://${i}`}class mA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),pA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Da(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function gA(t,e){return Vo(t,"POST","/v1/accounts:delete",e)}async function yA(t,e){return Vo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vA(t,e=!1){const n=dt(t),r=await n.getIdToken(e),i=bf(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Bs(Vc(i.auth_time)),issuedAtTime:Bs(Vc(i.iat)),expirationTime:Bs(Vc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Vc(t){return Number(t)*1e3}function bf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ya("JWT malformed, contained fewer than 3 sections"),null;try{const i=hw(n);return i?JSON.parse(i):(Ya("Failed to decode base64 JWT payload"),null)}catch(i){return Ya("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wA(t){const e=bf(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&_A(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _A({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class EA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Tw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bs(this.lastLoginAt),this.creationTime=Bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ml(t){var e;const n=t.auth,r=await t.getIdToken(),i=await mo(t,yA(n,{idToken:r}));j(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?kA(s.providerUserInfo):[],a=CA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Tw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function SA(t){const e=dt(t);await Ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function kA(t){return t.map(e=>{var{providerId:n}=e,r=Pf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function TA(t,e){const n=await Cw(t,{},async()=>{const r=$o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=kw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await TA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new go;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new go,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
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
 */function Fn(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Pf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new EA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Tw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await mo(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vA(this,e)}reload(){return SA(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ml(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mo(this,gA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:I,providerData:x,stsTokenManager:N}=n;j(m&&N,e,"internal-error");const M=go.fromJSON(this.name,N);j(typeof m=="string",e,"internal-error"),Fn(d,e.name),Fn(h,e.name),j(typeof w=="boolean",e,"internal-error"),j(typeof I=="boolean",e,"internal-error"),Fn(g,e.name),Fn(y,e.name),Fn(v,e.name),Fn(C,e.name),Fn(p,e.name),Fn(f,e.name);const Z=new Nr({uid:m,auth:e,email:h,emailVerified:w,displayName:d,isAnonymous:I,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:M,createdAt:p,lastLoginAt:f});return x&&Array.isArray(x)&&(Z.providerData=x.map(H=>Object.assign({},H))),C&&(Z._redirectEventId=C),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new go;i.updateFromServerResponse(n);const s=new Nr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ml(s),s}}/**
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
 */class Iw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Iw.type="NONE";const Ag=Iw;/**
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
 */function Ja(t,e,n){return`firebase:${t}:${e}:${n}`}class ki{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ja(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ja("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ki(_n(Ag),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||_n(Ag);const o=Ja(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Nr._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ki(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ki(s,e,r))}}/**
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
 */function Rg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Aw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nw(e))return"Blackberry";if(Pw(e))return"Webos";if(Of(e))return"Safari";if((e.includes("chrome/")||Rw(e))&&!e.includes("edge/"))return"Chrome";if(xw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Aw(t=ot()){return/firefox\//i.test(t)}function Of(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rw(t=ot()){return/crios\//i.test(t)}function Dw(t=ot()){return/iemobile/i.test(t)}function xw(t=ot()){return/android/i.test(t)}function Nw(t=ot()){return/blackberry/i.test(t)}function Pw(t=ot()){return/webos/i.test(t)}function Eu(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IA(t=ot()){var e;return Eu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function AA(){return WT()&&document.documentMode===10}function Lw(t=ot()){return Eu(t)||xw(t)||Pw(t)||Nw(t)||/windows phone/i.test(t)||Dw(t)}function RA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Mw(t,e=[]){let n;switch(t){case"Browser":n=Rg(ot());break;case"Worker":n=`${Rg(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Uo}/${r}`}/**
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
 */class DA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class xA{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dg(this),this.idTokenSubscription=new Dg(this),this.beforeStateQueue=new DA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ew,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ki.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ml(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?dt(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await ki.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Su(t){return dt(t)}class Dg{constructor(e){this.auth=e,this.observer=null,this.addObserver=XT(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function NA(t,e,n){const r=Su(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=bw(e),{host:o,port:a}=PA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||LA()}function bw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function PA(t){const e=bw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:xg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:xg(o)}}}function xg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ff{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}async function MA(t,e){return Vo(t,"POST","/v1/accounts:update",e)}/**
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
 */async function bA(t,e){return _u(t,"POST","/v1/accounts:signInWithPassword",wu(t,e))}/**
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
 */async function OA(t,e){return _u(t,"POST","/v1/accounts:signInWithEmailLink",wu(t,e))}async function FA(t,e){return _u(t,"POST","/v1/accounts:signInWithEmailLink",wu(t,e))}/**
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
 */class yo extends Ff{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new yo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new yo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return bA(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return OA(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return MA(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return FA(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ti(t,e){return _u(t,"POST","/v1/accounts:signInWithIdp",wu(t,e))}/**
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
 */const $A="http://localhost";class Vr extends Ff{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Pf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Vr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ti(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ti(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ti(e,n)}buildRequest(){const e={requestUri:$A,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$o(n)}return e}}/**
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
 */function UA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BA(t){const e=Ts(Is(t)).link,n=e?Ts(Is(e)).deep_link_id:null,r=Ts(Is(t)).deep_link_id;return(r?Ts(Is(r)).link:null)||r||n||e||t}class $f{constructor(e){var n,r,i,s,o,a;const l=Ts(Is(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=UA((i=l.mode)!==null&&i!==void 0?i:null);j(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=BA(e);try{return new $f(n)}catch{return null}}}/**
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
 */class Qi{constructor(){this.providerId=Qi.PROVIDER_ID}static credential(e,n){return yo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$f.parseLink(n);return j(r,"argument-error"),yo._fromEmailAndCode(e,r.code,r.tenantId)}}Qi.PROVIDER_ID="password";Qi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ow{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jo extends Ow{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zn extends jo{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
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
 */class Hn extends jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
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
 */class Wn extends jo{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
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
 */class Gn extends jo{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
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
 */class Oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Nr._fromIdTokenResponse(e,r,i),o=Ng(r);return new Oi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ng(r);return new Oi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ng(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class bl extends bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new bl(e,n,r,i)}}function Fw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?bl._fromErrorAndOperation(t,s,e,r):s})}async function VA(t,e,n=!1){const r=await mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Oi._forOperation(t,"link",r)}/**
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
 */async function jA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await mo(t,Fw(r,i,e,t),n);j(s.idToken,r,"internal-error");const o=bf(s.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(t.uid===a,r,"user-mismatch"),Oi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),s}}/**
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
 */async function $w(t,e,n=!1){const r="signIn",i=await Fw(t,r,e),s=await Oi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function zA(t,e){return $w(Su(t),e)}function HA(t,e,n){return zA(dt(t),Qi.credential(e,n))}function WA(t,e,n,r){return dt(t).onIdTokenChanged(e,n,r)}function GA(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function KA(t,e,n,r){return dt(t).onAuthStateChanged(e,n,r)}function qA(t){return dt(t).signOut()}const Ol="__sak";/**
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
 */class Uw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ol,"1"),this.storage.removeItem(Ol),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function QA(){const t=ot();return Of(t)||Eu(t)}const YA=1e3,JA=10;class Bw extends Uw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=QA()&&RA(),this.fallbackToPolling=Lw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);AA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bw.type="LOCAL";const XA=Bw;/**
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
 */class Vw extends Uw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vw.type="SESSION";const jw=Vw;/**
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
 */function ZA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Cu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await ZA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cu.receivers=[];/**
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
 */function Uf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class eR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Uf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function on(){return window}function tR(t){on().location.href=t}/**
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
 */function zw(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function nR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iR(){return zw()?self:null}/**
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
 */const Hw="firebaseLocalStorageDb",sR=1,Fl="firebaseLocalStorage",Ww="fbase_key";class zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ku(t,e){return t.transaction([Fl],e?"readwrite":"readonly").objectStore(Fl)}function oR(){const t=indexedDB.deleteDatabase(Hw);return new zo(t).toPromise()}function nd(){const t=indexedDB.open(Hw,sR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fl,{keyPath:Ww})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fl)?e(r):(r.close(),await oR(),e(await nd()))})})}async function Pg(t,e,n){const r=ku(t,!0).put({[Ww]:e,value:n});return new zo(r).toPromise()}async function aR(t,e){const n=ku(t,!1).get(e),r=await new zo(n).toPromise();return r===void 0?null:r.value}function Lg(t,e){const n=ku(t,!0).delete(e);return new zo(n).toPromise()}const lR=800,uR=3;class Gw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cu._getInstance(iR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nR(),!this.activeServiceWorker)return;this.sender=new eR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nd();return await Pg(e,Ol,"1"),await Lg(e,Ol),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ku(i,!1).getAll();return new zo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gw.type="LOCAL";const cR=Gw;/**
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
 */function hR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function dR(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",hR().appendChild(r)})}function fR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Bo(3e4,6e4);/**
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
 */function pR(t,e){return e?_n(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bf extends Ff{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ti(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ti(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ti(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mR(t){return $w(t.auth,new Bf(t),t.bypassAuthState)}function gR(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),jA(n,new Bf(t),t.bypassAuthState)}async function yR(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),VA(n,new Bf(t),t.bypassAuthState)}/**
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
 */class Kw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mR;case"linkViaPopup":case"linkViaRedirect":return yR;case"reauthViaPopup":case"reauthViaRedirect":return gR;default:qt(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vR=new Bo(2e3,1e4);class mi extends Kw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,mi.currentPopupAction&&mi.currentPopupAction.cancel(),mi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=Uf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,vR.get())};e()}}mi.currentPopupAction=null;/**
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
 */const wR="pendingRedirect",Xa=new Map;class _R extends Kw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xa.get(this.auth._key());if(!e){try{const r=await ER(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xa.set(this.auth._key(),e)}return this.bypassAuthState||Xa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ER(t,e){const n=kR(e),r=CR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function SR(t,e){Xa.set(t._key(),e)}function CR(t){return _n(t._redirectPersistence)}function kR(t){return Ja(wR,t.config.apiKey,t.name)}async function TR(t,e,n=!1){const r=Su(t),i=pR(r,e),o=await new _R(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const IR=10*60*1e3;class AR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mg(e))}saveEventToCache(e){this.cachedEventUids.add(Mg(e)),this.lastProcessedEventTime=Date.now()}}function Mg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qw(t);default:return!1}}/**
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
 */async function DR(t,e={}){return Vo(t,"GET","/v1/projects",e)}/**
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
 */const xR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NR=/^https?/;async function PR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DR(t);for(const n of e)try{if(LR(n))return}catch{}qt(t,"unauthorized-domain")}function LR(t){const e=td(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!NR.test(n))return!1;if(xR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const MR=new Bo(3e4,6e4);function bg(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bR(t){return new Promise((e,n)=>{var r,i,s;function o(){bg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bg(),n(sn(t,"network-request-failed"))},timeout:MR.get()})}if(!((i=(r=on().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=on().gapi)===null||s===void 0)&&s.load)o();else{const a=fR("iframefcb");return on()[a]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},dR(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Za=null,e})}let Za=null;function OR(t){return Za=Za||bR(t),Za}/**
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
 */const FR=new Bo(5e3,15e3),$R="__/auth/iframe",UR="emulator/auth/iframe",BR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jR(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mf(e,UR):`https://${t.config.authDomain}/${$R}`,r={apiKey:e.apiKey,appName:t.name,v:Uo},i=VR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$o(r).slice(1)}`}async function zR(t){const e=await OR(t),n=on().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:jR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),a=on().setTimeout(()=>{s(o)},FR.get());function l(){on().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const HR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WR=500,GR=600,KR="_blank",qR="http://localhost";class Og{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QR(t,e,n,r=WR,i=GR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},HR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ot().toLowerCase();n&&(a=Rw(u)?KR:n),Aw(u)&&(e=e||qR,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,y])=>`${h}${g}=${y},`,"");if(IA(u)&&a!=="_self")return YR(e||"",a),new Og(null);const d=window.open(e||"",a,c);j(d,t,"popup-blocked");try{d.focus()}catch{}return new Og(d)}function YR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const JR="__/auth/handler",XR="emulator/auth/handler";function Fg(t,e,n,r,i,s){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Uo,eventId:i};if(e instanceof Ow){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",JT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof jo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${ZR(t)}?${$o(a).slice(1)}`}function ZR({config:t}){return t.emulator?Mf(t,XR):`https://${t.authDomain}/${JR}`}/**
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
 */const jc="webStorageSupport";class eD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jw,this._completeRedirectFn=TR,this._overrideRedirectResult=SR}async _openPopup(e,n,r,i){var s;Rn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Fg(e,n,r,td(),i);return QR(e,o,Uf())}async _openRedirect(e,n,r,i){return await this._originValidation(e),tR(Fg(e,n,r,td(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zR(e),r=new AR(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jc,{type:jc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jc];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lw()||Of()||Eu()}}const tD=eD;var $g="@firebase/auth",Ug="0.21.1";/**
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
 */class nD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function iD(t){bi(new Ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{j(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),j(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mw(t)},c=new xA(a,l,u);return uA(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bi(new Ur("auth-internal",e=>{const n=Su(e.getProvider("auth").getImmediate());return(r=>new nD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr($g,Ug,rD(t)),sr($g,Ug,"esm2017")}/**
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
 */const sD=5*60,oD=fw("authIdTokenMaxAge")||sD;let Bg=null;const aD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oD)return;const i=n==null?void 0:n.token;Bg!==i&&(Bg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Qw(t=yw()){const e=Nf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lA(t,{popupRedirectResolver:tD,persistence:[cR,XA,jw]}),r=fw("authTokenSyncURL");if(r){const s=aD(r);GA(n,s,()=>s(n.currentUser)),WA(n,o=>s(o))}const i=dw("auth");return i&&NA(n,`http://${i}`),n}iD("Browser");const Yw="data:image/gif;base64,R0lGODlhEAAQAPIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==",lD={sidebar_grey:"#f7f7f7"},Vg={mobile_collapse_point:650},uD="/assets/ham_menu_black-94593ee5.svg",cD="/assets/back_arrow-9339be02.svg";function hD(){const t=k.useContext(Tt),e={textDecoration:"none",paddingTop:"1rem",paddingBottom:"1rem",display:"block",textAlign:"center",borderTop:"solid 1px #e3e3e3",padding:"1rem"},n=[];function r(i){t.clear_banner(),t.toggle_is_show_sidebar()}return n.push(S(bc,{className:"main_nav_link",style:e,onClick:r,to:"/",children:"Generator"},"/")),n.push(S(bc,{className:"main_nav_link",style:e,onClick:r,to:"data_manager",children:"Data Manager"},"data_manager")),n.push(S(bc,{className:"main_nav_link",style:e,onClick:r,to:"account_info",children:"Account Info"},"account_info")),S(Lt,{children:n})}var dD="firebase",fD="9.16.0";/**
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
 */sr(dD,fD,"app");var pD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,Vf=Vf||{},G=pD||self;function $l(){}function Tu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ho(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function mD(t){return Object.prototype.hasOwnProperty.call(t,zc)&&t[zc]||(t[zc]=++gD)}var zc="closure_uid_"+(1e9*Math.random()>>>0),gD=0;function yD(t,e,n){return t.call.apply(t.bind,arguments)}function vD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=yD:rt=vD,rt.apply(null,arguments)}function xa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Qe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function gr(){this.s=this.s,this.o=this.o}var wD=0;gr.prototype.s=!1;gr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),wD!=0)&&mD(this)};gr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Jw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function jf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function jg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Tu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var _D=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",$l,e),G.removeEventListener("test",$l,e)}catch{}return t}();function Ul(t){return/^[\s\xa0]*$/.test(t)}var zg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Hc(t,e){return t<e?-1:t>e?1:0}function Iu(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function tn(t){return Iu().indexOf(t)!=-1}function zf(t){return zf[" "](t),t}zf[" "]=$l;function ED(t){var e=kD;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var SD=tn("Opera"),Fi=tn("Trident")||tn("MSIE"),Xw=tn("Edge"),rd=Xw||Fi,Zw=tn("Gecko")&&!(Iu().toLowerCase().indexOf("webkit")!=-1&&!tn("Edge"))&&!(tn("Trident")||tn("MSIE"))&&!tn("Edge"),CD=Iu().toLowerCase().indexOf("webkit")!=-1&&!tn("Edge");function e_(){var t=G.document;return t?t.documentMode:void 0}var Bl;e:{var Wc="",Gc=function(){var t=Iu();if(Zw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Xw)return/Edge\/([\d\.]+)/.exec(t);if(Fi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(CD)return/WebKit\/(\S+)/.exec(t);if(SD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Gc&&(Wc=Gc?Gc[1]:""),Fi){var Kc=e_();if(Kc!=null&&Kc>parseFloat(Wc)){Bl=String(Kc);break e}}Bl=Wc}var kD={};function TD(){return ED(function(){let t=0;const e=zg(String(Bl)).split("."),n=zg("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Hc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Hc(i[2].length==0,s[2].length==0)||Hc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var id;if(G.document&&Fi){var Hg=e_();id=Hg||parseInt(Bl,10)||void 0}else id=void 0;var ID=id;function vo(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Zw){e:{try{zf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:AD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&vo.X.h.call(this)}}Qe(vo,it);var AD={2:"touch",3:"pen",4:"mouse"};vo.prototype.h=function(){vo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wo="closure_listenable_"+(1e6*Math.random()|0),RD=0;function DD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++RD,this.ba=this.ea=!1}function Au(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Hf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function t_(t){const e={};for(const n in t)e[n]=t[n];return e}const Wg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function n_(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Wg.length;s++)n=Wg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ru(t){this.src=t,this.g={},this.h=0}Ru.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=od(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new DD(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function sd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Jw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Au(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function od(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Wf="closure_lm_"+(1e6*Math.random()|0),qc={};function r_(t,e,n,r,i){if(r&&r.once)return s_(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)r_(t,e[s],n,r,i);return null}return n=qf(n),t&&t[Wo]?t.N(e,n,Ho(r)?!!r.capture:!!r,i):i_(t,e,n,!1,r,i)}function i_(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ho(i)?!!i.capture:!!i,a=Kf(t);if(a||(t[Wf]=a=new Ru(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=xD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)_D||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(a_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xD(){function t(n){return e.call(t.src,t.listener,n)}const e=ND;return t}function s_(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)s_(t,e[s],n,r,i);return null}return n=qf(n),t&&t[Wo]?t.O(e,n,Ho(r)?!!r.capture:!!r,i):i_(t,e,n,!0,r,i)}function o_(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)o_(t,e[s],n,r,i);else r=Ho(r)?!!r.capture:!!r,n=qf(n),t&&t[Wo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=od(s,n,r,i),-1<n&&(Au(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Kf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=od(e,n,r,i)),(n=-1<t?e[t]:null)&&Gf(n))}function Gf(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Wo])sd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(a_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Kf(e))?(sd(n,t),n.h==0&&(n.src=null,e[Wf]=null)):Au(t)}}}function a_(t){return t in qc?qc[t]:qc[t]="on"+t}function ND(t,e){if(t.ba)t=!0;else{e=new vo(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Gf(t),t=n.call(r,e)}return t}function Kf(t){return t=t[Wf],t instanceof Ru?t:null}var Qc="__closure_events_fn_"+(1e9*Math.random()>>>0);function qf(t){return typeof t=="function"?t:(t[Qc]||(t[Qc]=function(e){return t.handleEvent(e)}),t[Qc])}function je(){gr.call(this),this.i=new Ru(this),this.P=this,this.I=null}Qe(je,gr);je.prototype[Wo]=!0;je.prototype.removeEventListener=function(t,e,n,r){o_(this,t,e,n,r)};function Ke(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var i=e;e=new it(r,t),n_(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Na(o,r,!0,e)&&i}if(o=e.g=t,i=Na(o,r,!0,e)&&i,i=Na(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Na(o,r,!1,e)&&i}je.prototype.M=function(){if(je.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Au(n[r]);delete t.g[e],t.h--}}this.I=null};je.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Na(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&sd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Qf=G.JSON.stringify;function PD(){var t=c_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class LD{constructor(){this.h=this.g=null}add(e,n){const r=l_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var l_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new MD,t=>t.reset());class MD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function bD(t){G.setTimeout(()=>{throw t},0)}function u_(t,e){ad||OD(),ld||(ad(),ld=!0),c_.add(t,e)}var ad;function OD(){var t=G.Promise.resolve(void 0);ad=function(){t.then(FD)}}var ld=!1,c_=new LD;function FD(){for(var t;t=PD();){try{t.h.call(t.g)}catch(n){bD(n)}var e=l_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ld=!1}function Du(t,e){je.call(this),this.h=t||1,this.g=e||G,this.j=rt(this.lb,this),this.l=Date.now()}Qe(Du,je);F=Du.prototype;F.ca=!1;F.R=null;F.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ke(this,"tick"),this.ca&&(Yf(this),this.start()))}};F.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Yf(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}F.M=function(){Du.X.M.call(this),Yf(this),delete this.g};function Jf(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function h_(t){t.g=Jf(()=>{t.g=null,t.i&&(t.i=!1,h_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class $D extends gr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:h_(this)}M(){super.M(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wo(t){gr.call(this),this.h=t,this.g={}}Qe(wo,gr);var Gg=[];function d_(t,e,n,r){Array.isArray(n)||(n&&(Gg[0]=n.toString()),n=Gg);for(var i=0;i<n.length;i++){var s=r_(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function f_(t){Hf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Gf(e)},t),t.g={}}wo.prototype.M=function(){wo.X.M.call(this),f_(this)};wo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xu(){this.g=!0}xu.prototype.Aa=function(){this.g=!1};function UD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function BD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function gi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+jD(t,n)+(r?" "+r:"")})}function VD(t,e){t.info(function(){return"TIMEOUT: "+e})}xu.prototype.info=function(){};function jD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Qf(n)}catch{return e}}var Kr={},Kg=null;function Nu(){return Kg=Kg||new je}Kr.Pa="serverreachability";function p_(t){it.call(this,Kr.Pa,t)}Qe(p_,it);function _o(t){const e=Nu();Ke(e,new p_(e))}Kr.STAT_EVENT="statevent";function m_(t,e){it.call(this,Kr.STAT_EVENT,t),this.stat=e}Qe(m_,it);function ct(t){const e=Nu();Ke(e,new m_(e,t))}Kr.Qa="timingevent";function g_(t,e){it.call(this,Kr.Qa,t),this.size=e}Qe(g_,it);function Go(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var Pu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},y_={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Xf(){}Xf.prototype.h=null;function qg(t){return t.h||(t.h=t.i())}function v_(){}var Ko={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Zf(){it.call(this,"d")}Qe(Zf,it);function ep(){it.call(this,"c")}Qe(ep,it);var ud;function Lu(){}Qe(Lu,Xf);Lu.prototype.g=function(){return new XMLHttpRequest};Lu.prototype.i=function(){return{}};ud=new Lu;function qo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new wo(this),this.O=zD,t=rd?125:void 0,this.T=new Du(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new w_}function w_(){this.i=null,this.g="",this.h=!1}var zD=45e3,cd={},Vl={};F=qo.prototype;F.setTimeout=function(t){this.O=t};function hd(t,e,n){t.K=1,t.v=bu(Dn(e)),t.s=n,t.P=!0,__(t,null)}function __(t,e){t.F=Date.now(),Qo(t),t.A=Dn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),R_(n.i,"t",r),t.C=0,n=t.l.H,t.h=new w_,t.g=Q_(t.l,n?e:null,!t.s),0<t.N&&(t.L=new $D(rt(t.La,t,t.g),t.N)),d_(t.S,t.g,"readystatechange",t.ib),e=t.H?t_(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),_o(),UD(t.j,t.u,t.A,t.m,t.U,t.s)}F.ib=function(t){t=t.target;const e=this.L;e&&En(t)==3?e.l():this.La(t)};F.La=function(t){try{if(t==this.g)e:{const c=En(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>c)&&(c!=3||rd||this.g&&(this.h.h||this.g.fa()||Xg(this.g)))){this.I||c!=4||e==7||(e==8||0>=d?_o(3):_o(2)),Mu(this);var n=this.g.aa();this.Y=n;t:if(E_(this)){var r=Xg(this.g);t="";var i=r.length,s=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ir(this),Vs(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,BD(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ul(a)){var u=a;break t}}u=null}if(n=u)gi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,dd(this,n);else{this.i=!1,this.o=3,ct(12),Ir(this),Vs(this);break e}}this.P?(S_(this,c,o),rd&&this.i&&c==3&&(d_(this.S,this.T,"tick",this.hb),this.T.start())):(gi(this.j,this.m,o,null),dd(this,o)),c==4&&Ir(this),this.i&&!this.I&&(c==4?W_(this.l,this):(this.i=!1,Qo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Ir(this),Vs(this)}}}catch{}finally{}};function E_(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function S_(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=HD(t,n),i==Vl){e==4&&(t.o=4,ct(14),r=!1),gi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==cd){t.o=4,ct(15),gi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else gi(t.j,t.m,i,null),dd(t,i);E_(t)&&i!=Vl&&i!=cd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ct(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ap(e),e.K=!0,ct(11))):(gi(t.j,t.m,n,"[Invalid Chunked Response]"),Ir(t),Vs(t))}F.hb=function(){if(this.g){var t=En(this.g),e=this.g.fa();this.C<e.length&&(Mu(this),S_(this,t,e),this.i&&t!=4&&Qo(this))}};function HD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Vl:(n=Number(e.substring(n,r)),isNaN(n)?cd:(r+=1,r+n>e.length?Vl:(e=e.substr(r,n),t.C=r+n,e)))}F.cancel=function(){this.I=!0,Ir(this)};function Qo(t){t.V=Date.now()+t.O,C_(t,t.O)}function C_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Go(rt(t.gb,t),e)}function Mu(t){t.B&&(G.clearTimeout(t.B),t.B=null)}F.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(VD(this.j,this.A),this.K!=2&&(_o(),ct(17)),Ir(this),this.o=2,Vs(this)):C_(this,this.V-t)};function Vs(t){t.l.G==0||t.I||W_(t.l,t)}function Ir(t){Mu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Yf(t.T),f_(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function dd(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||fd(n.h,t))){if(!t.J&&fd(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Hl(n),$u(n);else break e;op(n),ct(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Go(rt(n.cb,n),6e3));if(1>=N_(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ar(n,11)}else if((t.J||n.g==t)&&Hl(n),!Ul(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const d=u[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(tp(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,ve(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=q_(r,r.H?r.ka:null,r.V),o.J){P_(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Mu(a),Qo(a)),r.g=o}else z_(r);0<n.i.length&&Uu(n)}else u[0]!="stop"&&u[0]!="close"||Ar(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ar(n,7):sp(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}_o(4)}catch{}}function WD(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Tu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function GD(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Tu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function k_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Tu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=GD(t),r=WD(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var T_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function KD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Pr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Pr){this.h=e!==void 0?e:t.h,jl(this,t.j),this.s=t.s,this.g=t.g,zl(this,t.m),this.l=t.l,e=t.i;var n=new Eo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Qg(this,n),this.o=t.o}else t&&(n=String(t).match(T_))?(this.h=!!e,jl(this,n[1]||"",!0),this.s=As(n[2]||""),this.g=As(n[3]||"",!0),zl(this,n[4]),this.l=As(n[5]||"",!0),Qg(this,n[6]||"",!0),this.o=As(n[7]||"")):(this.h=!!e,this.i=new Eo(null,this.h))}Pr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Rs(e,Yg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Rs(e,Yg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Rs(n,n.charAt(0)=="/"?YD:QD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Rs(n,XD)),t.join("")};function Dn(t){return new Pr(t)}function jl(t,e,n){t.j=n?As(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function zl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qg(t,e,n){e instanceof Eo?(t.i=e,ZD(t.i,t.h)):(n||(e=Rs(e,JD)),t.i=new Eo(e,t.h))}function ve(t,e,n){t.i.set(e,n)}function bu(t){return ve(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function As(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Rs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,qD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Yg=/[#\/\?@]/g,QD=/[#\?:]/g,YD=/[#\?]/g,JD=/[#\?@]/g,XD=/#/g;function Eo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function yr(t){t.g||(t.g=new Map,t.h=0,t.i&&KD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=Eo.prototype;F.add=function(t,e){yr(this),this.i=null,t=Yi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function I_(t,e){yr(t),e=Yi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function A_(t,e){return yr(t),e=Yi(t,e),t.g.has(e)}F.forEach=function(t,e){yr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};F.oa=function(){yr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};F.W=function(t){yr(this);let e=[];if(typeof t=="string")A_(this,t)&&(e=e.concat(this.g.get(Yi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return yr(this),this.i=null,t=Yi(this,t),A_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function R_(t,e,n){I_(t,e),0<n.length&&(t.i=null,t.g.set(Yi(t,e),jf(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Yi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ZD(t,e){e&&!t.j&&(yr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(I_(this,r),R_(this,i,n))},t)),t.j=e}var ex=class{constructor(e,n){this.h=e,this.g=n}};function D_(t){this.l=t||tx,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ga&&G.g.Ga()&&G.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tx=10;function x_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function N_(t){return t.h?1:t.g?t.g.size:0}function fd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function tp(t,e){t.g?t.g.add(e):t.h=e}function P_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}D_.prototype.cancel=function(){if(this.i=L_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function L_(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return jf(t.i)}function np(){}np.prototype.stringify=function(t){return G.JSON.stringify(t,void 0)};np.prototype.parse=function(t){return G.JSON.parse(t,void 0)};function nx(){this.g=new np}function rx(t,e,n){const r=n||"";try{k_(t,function(i,s){let o=i;Ho(i)&&(o=Qf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function ix(t,e){const n=new xu;if(G.Image){const r=new Image;r.onload=xa(Pa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=xa(Pa,n,r,"TestLoadImage: error",!1,e),r.onabort=xa(Pa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=xa(Pa,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Pa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Yo(t){this.l=t.ac||null,this.j=t.jb||!1}Qe(Yo,Xf);Yo.prototype.g=function(){return new Ou(this.l,this.j)};Yo.prototype.i=function(t){return function(){return t}}({});function Ou(t,e){je.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=rp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qe(Ou,je);var rp=0;F=Ou.prototype;F.open=function(t,e){if(this.readyState!=rp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,So(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||G).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jo(this)),this.readyState=rp};F.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,So(this)),this.g&&(this.readyState=3,So(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;M_(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function M_(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}F.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Jo(this):So(this),this.readyState==3&&M_(this)}};F.Va=function(t){this.g&&(this.response=this.responseText=t,Jo(this))};F.Ua=function(t){this.g&&(this.response=t,Jo(this))};F.ga=function(){this.g&&Jo(this)};function Jo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,So(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function So(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ou.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var sx=G.JSON.parse;function Te(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=b_,this.K=this.L=!1}Qe(Te,je);var b_="",ox=/^https?$/i,ax=["POST","PUT"];F=Te.prototype;F.Ka=function(t){this.L=t};F.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ud.g(),this.C=this.u?qg(this.u):qg(ud),this.g.onreadystatechange=rt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Jg(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=G.FormData&&t instanceof G.FormData,!(0<=Jw(ax,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$_(this),0<this.B&&((this.K=lx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.qa,this)):this.A=Jf(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Jg(this,s)}};function lx(t){return Fi&&TD()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.qa=function(){typeof Vf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ke(this,"timeout"),this.abort(8))};function Jg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,O_(t),Fu(t)}function O_(t){t.D||(t.D=!0,Ke(t,"complete"),Ke(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ke(this,"complete"),Ke(this,"abort"),Fu(this))};F.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fu(this,!0)),Te.X.M.call(this)};F.Ha=function(){this.s||(this.F||this.v||this.l?F_(this):this.fb())};F.fb=function(){F_(this)};function F_(t){if(t.h&&typeof Vf<"u"&&(!t.C[1]||En(t)!=4||t.aa()!=2)){if(t.v&&En(t)==4)Jf(t.Ha,0,t);else if(Ke(t,"readystatechange"),En(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(T_)[1]||null;if(!i&&G.self&&G.self.location){var s=G.self.location.protocol;i=s.substr(0,s.length-1)}r=!ox.test(i?i.toLowerCase():"")}n=r}if(n)Ke(t,"complete"),Ke(t,"success");else{t.m=6;try{var o=2<En(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",O_(t)}}finally{Fu(t)}}}}function Fu(t,e){if(t.g){$_(t);const n=t.g,r=t.C[0]?$l:null;t.g=null,t.C=null,e||Ke(t,"ready");try{n.onreadystatechange=r}catch{}}}function $_(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}function En(t){return t.g?t.g.readyState:0}F.aa=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}};F.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),sx(e)}};function Xg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case b_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ea=function(){return this.m};F.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function U_(t){let e="";return Hf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ip(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=U_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ve(t,e,n))}function ws(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function B_(t){this.Ca=0,this.i=[],this.j=new xu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ws("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ws("baseRetryDelayMs",5e3,t),this.bb=ws("retryDelaySeedMs",1e4,t),this.$a=ws("forwardChannelMaxRetries",2,t),this.ta=ws("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new D_(t&&t.concurrentRequestLimit),this.Fa=new nx,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}F=B_.prototype;F.ma=8;F.G=1;function sp(t){if(V_(t),t.G==3){var e=t.U++,n=Dn(t.F);ve(n,"SID",t.I),ve(n,"RID",e),ve(n,"TYPE","terminate"),Xo(t,n),e=new qo(t,t.j,e,void 0),e.K=2,e.v=bu(Dn(n)),n=!1,G.navigator&&G.navigator.sendBeacon&&(n=G.navigator.sendBeacon(e.v.toString(),"")),!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=Q_(e.l,null),e.g.da(e.v)),e.F=Date.now(),Qo(e)}K_(t)}function $u(t){t.g&&(ap(t),t.g.cancel(),t.g=null)}function V_(t){$u(t),t.u&&(G.clearTimeout(t.u),t.u=null),Hl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function Uu(t){x_(t.h)||t.m||(t.m=!0,u_(t.Ja,t),t.C=0)}function ux(t,e){return N_(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Go(rt(t.Ja,t,e),G_(t,t.C)),t.C++,!0)}F.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new qo(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=t_(s),n_(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=j_(this,i,e),n=Dn(this.F),ve(n,"RID",t),ve(n,"CVER",22),this.D&&ve(n,"X-HTTP-Session-Id",this.D),Xo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(U_(s)))+"&"+e:this.o&&ip(n,this.o,s)),tp(this.h,i),this.Ya&&ve(n,"TYPE","init"),this.O?(ve(n,"$req",e),ve(n,"SID","null"),i.Z=!0,hd(i,n,null)):hd(i,n,e),this.G=2}}else this.G==3&&(t?Zg(this,t):this.i.length==0||x_(this.h)||Zg(this))};function Zg(t,e){var n;e?n=e.m:n=t.U++;const r=Dn(t.F);ve(r,"SID",t.I),ve(r,"RID",n),ve(r,"AID",t.T),Xo(t,r),t.o&&t.s&&ip(r,t.o,t.s),n=new qo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=j_(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),tp(t.h,n),hd(n,r,e)}function Xo(t,e){t.ia&&Hf(t.ia,function(n,r){ve(e,r,n)}),t.l&&k_({},function(n,r){ve(e,r,n)})}function j_(t,e,n){n=Math.min(t.i.length,n);var r=t.l?rt(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{rx(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function z_(t){t.g||t.u||(t.Z=1,u_(t.Ia,t),t.A=0)}function op(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Go(rt(t.Ia,t),G_(t,t.A)),t.A++,!0)}F.Ia=function(){if(this.u=null,H_(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Go(rt(this.eb,this),t)}};F.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ct(10),$u(this),H_(this))};function ap(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function H_(t){t.g=new qo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Dn(t.sa);ve(e,"RID","rpc"),ve(e,"SID",t.I),ve(e,"CI",t.L?"0":"1"),ve(e,"AID",t.T),ve(e,"TYPE","xmlhttp"),Xo(t,e),t.o&&t.s&&ip(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=bu(Dn(e)),n.s=null,n.P=!0,__(n,t)}F.cb=function(){this.v!=null&&(this.v=null,$u(this),op(this),ct(19))};function Hl(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function W_(t,e){var n=null;if(t.g==e){Hl(t),ap(t),t.g=null;var r=2}else if(fd(t.h,e))n=e.D,P_(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Nu(),Ke(r,new g_(r,n)),Uu(t)}else z_(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&ux(t,e)||r==2&&op(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ar(t,5);break;case 4:Ar(t,10);break;case 3:Ar(t,6);break;default:Ar(t,2)}}}function G_(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ar(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=rt(t.kb,t);n||(n=new Pr("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||jl(n,"https"),bu(n)),ix(n.toString(),r)}else ct(2);t.G=0,t.l&&t.l.va(e),K_(t),V_(t)}F.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function K_(t){if(t.G=0,t.la=[],t.l){const e=L_(t.h);(e.length!=0||t.i.length!=0)&&(jg(t.la,e),jg(t.la,t.i),t.h.i.length=0,jf(t.i),t.i.length=0),t.l.ua()}}function q_(t,e,n){var r=n instanceof Pr?Dn(n):new Pr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),zl(r,r.m);else{var i=G.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Pr(null,void 0);r&&jl(s,r),e&&(s.g=e),i&&zl(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ve(r,n,e),ve(r,"VER",t.ma),Xo(t,r),r}function Q_(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Te(new Yo({jb:!0})):new Te(t.ra),e.Ka(t.H),e}function Y_(){}F=Y_.prototype;F.xa=function(){};F.wa=function(){};F.va=function(){};F.ua=function(){};F.Ra=function(){};function Wl(){if(Fi&&!(10<=Number(ID)))throw Error("Environmental error: no available transport.")}Wl.prototype.g=function(t,e){return new It(t,e)};function It(t,e){je.call(this),this.g=new B_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ul(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ul(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ji(this)}Qe(It,je);It.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ct(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=q_(t,null,t.V),Uu(t)};It.prototype.close=function(){sp(this.g)};It.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Qf(t),t=n);e.i.push(new ex(e.ab++,t)),e.G==3&&Uu(e)};It.prototype.M=function(){this.g.l=null,delete this.j,sp(this.g),delete this.g,It.X.M.call(this)};function J_(t){Zf.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Qe(J_,Zf);function X_(){ep.call(this),this.status=1}Qe(X_,ep);function Ji(t){this.g=t}Qe(Ji,Y_);Ji.prototype.xa=function(){Ke(this.g,"a")};Ji.prototype.wa=function(t){Ke(this.g,new J_(t))};Ji.prototype.va=function(t){Ke(this.g,new X_)};Ji.prototype.ua=function(){Ke(this.g,"b")};Wl.prototype.createWebChannel=Wl.prototype.g;It.prototype.send=It.prototype.u;It.prototype.open=It.prototype.m;It.prototype.close=It.prototype.close;Pu.NO_ERROR=0;Pu.TIMEOUT=8;Pu.HTTP_ERROR=6;y_.COMPLETE="complete";v_.EventType=Ko;Ko.OPEN="a";Ko.CLOSE="b";Ko.ERROR="c";Ko.MESSAGE="d";je.prototype.listen=je.prototype.N;Te.prototype.listenOnce=Te.prototype.O;Te.prototype.getLastError=Te.prototype.Oa;Te.prototype.getLastErrorCode=Te.prototype.Ea;Te.prototype.getStatus=Te.prototype.aa;Te.prototype.getResponseJson=Te.prototype.Sa;Te.prototype.getResponseText=Te.prototype.fa;Te.prototype.send=Te.prototype.da;Te.prototype.setWithCredentials=Te.prototype.Ka;var cx=function(){return new Wl},hx=function(){return Nu()},Yc=Pu,dx=y_,fx=Kr,ey={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},px=Yo,La=v_,mx=Te;const ty="@firebase/firestore";/**
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
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
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
 */let Xi="9.16.0";/**
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
 */const jr=new Df("@firebase/firestore");function ny(){return jr.logLevel}function U(t,...e){if(jr.logLevel<=ae.DEBUG){const n=e.map(lp);jr.debug(`Firestore (${Xi}): ${t}`,...n)}}function xn(t,...e){if(jr.logLevel<=ae.ERROR){const n=e.map(lp);jr.error(`Firestore (${Xi}): ${t}`,...n)}}function pd(t,...e){if(jr.logLevel<=ae.WARN){const n=e.map(lp);jr.warn(`Firestore (${Xi}): ${t}`,...n)}}function lp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function z(t="Unexpected state"){const e=`FIRESTORE (${Xi}) INTERNAL ASSERTION FAILED: `+t;throw xn(e),new Error(e)}function fe(t,e){t||z()}function Y(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Z_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class yx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vx{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new or;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new or,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new Z_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new Ze(e)}}class wx{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(fe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class _x{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new wx(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ex{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sx{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.A=n.token,new Ex(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Cx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class e1{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Cx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function $i(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Oe(0,0))}static max(){return new Q(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Co{constructor(e,n,r){n===void 0?n=0:n>e.length&&z(),r===void 0?r=e.length-n:r>e.length-n&&z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Co.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Co?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends Co{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const kx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Co{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return kx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new O(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new O(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(me.fromString(e))}static fromName(e){return new B(me.fromString(e).popFirst(5))}static empty(){return new B(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new me(e.slice()))}}function Tx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new cr(i,B.empty(),e)}function Ix(t){return new cr(t.readTime,t.key,-1)}class cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new cr(Q.min(),B.empty(),-1)}static max(){return new cr(Q.max(),B.empty(),-1)}}function Ax(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
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
 */const Rx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Dx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Zo(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==Rx)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,r)=>{n(e)})}static reject(e){return new D((n,r)=>{r(e)})}static waitFor(e){return new D((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next(i=>i?D.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new D((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new D((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ea(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class up{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}up.at=-1;/**
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
 */class xx{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ko{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ko("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ko&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function ry(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function t1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function Bu(t){return t==null}function Gl(t){return t===0&&1/t==-1/0}function Nx(t){return typeof t=="number"&&Number.isInteger(t)&&!Gl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new at(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const Px=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(fe(!!t),typeof t=="string"){let e=0;const n=Px.exec(t);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ui(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
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
 */function n1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function r1(t){const e=t.mapValue.fields.__previous_value__;return n1(e)?r1(e):e}function To(t){const e=hr(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
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
 */const Ma={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?n1(t)?4:Lx(t)?9007199254740991:10:z()}function cn(t,e){if(t===e)return!0;const n=zr(t);if(n!==zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return To(t).isEqual(To(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=hr(r.timestampValue),o=hr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ui(r.bytesValue).isEqual(Ui(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ne(r.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(r.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ne(r.integerValue)===Ne(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ne(r.doubleValue),o=Ne(i.doubleValue);return s===o?Gl(s)===Gl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return $i(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(ry(s)!==ry(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!cn(s[a],o[a])))return!1;return!0}(t,e);default:return z()}}function Io(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function Bi(t,e){if(t===e)return 0;const n=zr(t),r=zr(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ne(i.integerValue||i.doubleValue),a=Ne(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return iy(t.timestampValue,e.timestampValue);case 4:return iy(To(t),To(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ui(i),a=Ui(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=le(o[l],a[l]);if(u!==0)return u}return le(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=le(Ne(i.latitude),Ne(s.latitude));return o!==0?o:le(Ne(i.longitude),Ne(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Bi(o[l],a[l]);if(u)return u}return le(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ma.mapValue&&s===Ma.mapValue)return 0;if(i===Ma.mapValue)return 1;if(s===Ma.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=le(a[c],u[c]);if(d!==0)return d;const h=Bi(o[a[c]],l[u[c]]);if(h!==0)return h}return le(a.length,u.length)}(t.mapValue,e.mapValue);default:throw z()}}function iy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=hr(t),r=hr(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function Vi(t){return md(t)}function md(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=hr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ui(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=md(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${md(r.fields[a])}`;return s+"}"}(t.mapValue):z();var e,n}function sy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gd(t){return!!t&&"integerValue"in t}function cp(t){return!!t&&"arrayValue"in t}function oy(t){return!!t&&"nullValue"in t}function ay(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function el(t){return!!t&&"mapValue"in t}function js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Zi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=js(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Lx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Kl{constructor(e,n){this.position=e,this.inclusive=n}}function ly(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=Bi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function uy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class i1{}class Le extends i1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bx(e,n,r):n==="array-contains"?new $x(e,r):n==="in"?new Ux(e,r):n==="not-in"?new Bx(e,r):n==="array-contains-any"?new Vx(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ox(e,r):new Fx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Bi(n,this.value)):n!==null&&zr(this.value)===zr(n)&&this.matchesComparison(Bi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Qt extends i1{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Qt(e,n)}matches(e){return s1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function s1(t){return t.op==="and"}function o1(t){return Mx(t)&&s1(t)}function Mx(t){for(const e of t.filters)if(e instanceof Qt)return!1;return!0}function yd(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+Vi(t.value);if(o1(t))return t.filters.map(e=>yd(e)).join(",");{const e=t.filters.map(n=>yd(n)).join(",");return`${t.op}(${e})`}}function a1(t,e){return t instanceof Le?function(n,r){return r instanceof Le&&n.op===r.op&&n.field.isEqual(r.field)&&cn(n.value,r.value)}(t,e):t instanceof Qt?function(n,r){return r instanceof Qt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&a1(s,r.filters[o]),!0):!1}(t,e):void z()}function l1(t){return t instanceof Le?function(e){return`${e.field.canonicalString()} ${e.op} ${Vi(e.value)}`}(t):t instanceof Qt?function(e){return e.op.toString()+" {"+e.getFilters().map(l1).join(" ,")+"}"}(t):"Filter"}class bx extends Le{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ox extends Le{constructor(e,n){super(e,"in",n),this.keys=u1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Fx extends Le{constructor(e,n){super(e,"not-in",n),this.keys=u1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function u1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class $x extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cp(n)&&Io(n.arrayValue,this.value)}}class Ux extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Io(this.value.arrayValue,n)}}class Bx extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(Io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Io(this.value.arrayValue,n)}}class Vx extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Io(this.value.arrayValue,r))}}/**
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
 */class zs{constructor(e,n="asc"){this.field=e,this.dir=n}}function jx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $e{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ba(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ba(this.root,e,this.comparator,!1)}getReverseIterator(){return new ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ba(this.root,e,this.comparator,!0)}}class ba{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,r,i){return this}insert(t,e,n){return new We(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Fe{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cy(this.data.getIterator())}getIteratorFrom(e){return new cy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class cy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ht{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new Fe(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $i(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!el(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=js(n)}setAll(e){let n=nt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=js(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());el(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];el(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Zi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nt(js(this.value))}}function c1(t){const e=[];return Zi(t.fields,(n,r)=>{const i=new nt([n]);if(el(r)){const s=c1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ht(e)}/**
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
 */class tt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,Q.min(),Q.min(),Q.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,i){return new tt(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new tt(e,2,n,Q.min(),Q.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,Q.min(),Q.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class zx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function hy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new zx(t,e,n,r,i,s,o)}function hp(t){const e=Y(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Bu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vi(r)).join(",")),e.ft=n}return e.ft}function dp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!a1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uy(t.startAt,e.startAt)&&uy(t.endAt,e.endAt)}function vd(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ta{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function Hx(t,e,n,r,i,s,o,a){return new ta(t,e,n,r,i,s,o,a)}function h1(t){return new ta(t)}function dy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function d1(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function fp(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function f1(t){return t.collectionGroup!==null}function Ii(t){const e=Y(t);if(e.dt===null){e.dt=[];const n=fp(e),r=d1(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new zs(n)),e.dt.push(new zs(nt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new zs(nt.keyField(),s))}}}return e.dt}function Nn(t){const e=Y(t);if(!e._t)if(e.limitType==="F")e._t=hy(e.path,e.collectionGroup,Ii(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ii(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new zs(s.field,o))}const r=e.endAt?new Kl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Kl(e.startAt.position,e.startAt.inclusive):null;e._t=hy(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function wd(t,e){e.getFirstInequalityField(),fp(t);const n=t.filters.concat([e]);return new ta(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _d(t,e,n){return new ta(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Vu(t,e){return dp(Nn(t),Nn(e))&&t.limitType===e.limitType}function p1(t){return`${hp(Nn(t))}|lt:${t.limitType}`}function Ed(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>l1(r)).join(", ")}]`),Bu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vi(r)).join(",")),`Target(${n})`}(Nn(t))}; limitType=${t.limitType})`}function pp(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):B.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Ii(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=ly(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ii(n),r)||n.endAt&&!function(i,s,o){const a=ly(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ii(n),r))}(t,e)}function Wx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function m1(t){return(e,n)=>{let r=!1;for(const i of Ii(t)){const s=Gx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Gx(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Bi(a,l):z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
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
 */function g1(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gl(e)?"-0":e}}function y1(t){return{integerValue:""+t}}function Kx(t,e){return Nx(e)?y1(e):g1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ju{constructor(){this._=void 0}}function qx(t,e,n){return t instanceof ql?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ao?w1(t,e):t instanceof Ro?_1(t,e):function(r,i){const s=v1(r,i),o=fy(s)+fy(r.gt);return gd(s)&&gd(r.gt)?y1(o):g1(r.yt,o)}(t,e)}function Qx(t,e,n){return t instanceof Ao?w1(t,e):t instanceof Ro?_1(t,e):n}function v1(t,e){return t instanceof Ql?gd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ql extends ju{}class Ao extends ju{constructor(e){super(),this.elements=e}}function w1(t,e){const n=E1(e);for(const r of t.elements)n.some(i=>cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ro extends ju{constructor(e){super(),this.elements=e}}function _1(t,e){let n=E1(e);for(const r of t.elements)n=n.filter(i=>!cn(i,r));return{arrayValue:{values:n}}}class Ql extends ju{constructor(e,n){super(),this.yt=e,this.gt=n}}function fy(t){return Ne(t.integerValue||t.doubleValue)}function E1(t){return cp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Yx(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ao&&r instanceof Ao||n instanceof Ro&&r instanceof Ro?$i(n.elements,r.elements,cn):n instanceof Ql&&r instanceof Ql?cn(n.gt,r.gt):n instanceof ql&&r instanceof ql}(t.transform,e.transform)}class Jx{constructor(e,n){this.version=e,this.transformResults=n}}class an{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zu{}function S1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mp(t.key,an.none()):new na(t.key,t.data,an.none());{const n=t.data,r=Nt.empty();let i=new Fe(nt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new qr(t.key,r,new Ht(i.toArray()),an.none())}}function Xx(t,e,n){t instanceof na?function(r,i,s){const o=r.value.clone(),a=my(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof qr?function(r,i,s){if(!tl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=my(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(C1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Hs(t,e,n,r){return t instanceof na?function(i,s,o,a){if(!tl(i.precondition,s))return o;const l=i.value.clone(),u=gy(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof qr?function(i,s,o,a){if(!tl(i.precondition,s))return o;const l=gy(i.fieldTransforms,a,s),u=s.data;return u.setAll(C1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return tl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Zx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=v1(r.transform,i||null);s!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,s))}return n||null}function py(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&$i(n,r,(i,s)=>Yx(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class na extends zu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class qr extends zu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function C1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function my(t,e,n){const r=new Map;fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Qx(o,a,n[i]))}return r}function gy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,qx(s,o,e))}return r}class mp extends zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eN extends zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tN{constructor(e){this.count=e}}/**
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
 */var De,ie;function nN(t){switch(t){default:return z();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function k1(t){if(t===void 0)return xn("GRPC error has no .code"),T.UNKNOWN;switch(t){case De.OK:return T.OK;case De.CANCELLED:return T.CANCELLED;case De.UNKNOWN:return T.UNKNOWN;case De.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case De.INTERNAL:return T.INTERNAL;case De.UNAVAILABLE:return T.UNAVAILABLE;case De.UNAUTHENTICATED:return T.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case De.NOT_FOUND:return T.NOT_FOUND;case De.ALREADY_EXISTS:return T.ALREADY_EXISTS;case De.PERMISSION_DENIED:return T.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case De.ABORTED:return T.ABORTED;case De.OUT_OF_RANGE:return T.OUT_OF_RANGE;case De.UNIMPLEMENTED:return T.UNIMPLEMENTED;case De.DATA_LOSS:return T.DATA_LOSS;default:return z()}}(ie=De||(De={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return t1(this.inner)}size(){return this.innerSize}}/**
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
 */const rN=new $e(B.comparator);function Pn(){return rN}const T1=new $e(B.comparator);function Ds(...t){let e=T1;for(const n of t)e=e.insert(n.key,n);return e}function I1(t){let e=T1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Rr(){return Ws()}function A1(){return Ws()}function Ws(){return new es(t=>t.toString(),(t,e)=>t.isEqual(e))}const iN=new $e(B.comparator),sN=new Fe(B.comparator);function ee(...t){let e=sN;for(const n of t)e=e.add(n);return e}const oN=new Fe(le);function R1(){return oN}/**
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
 */class Hu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ra.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Hu(Q.min(),i,R1(),Pn(),ee())}}class ra{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ra(r,n,ee(),ee(),ee())}}/**
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
 */class nl{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class D1{constructor(e,n){this.targetId=e,this.Et=n}}class x1{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class yy{constructor(){this.At=0,this.Rt=wy(),this.bt=at.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ee(),n=ee(),r=ee();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:z()}}),new ra(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=wy()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class aN{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Pn(),this.qt=vy(),this.Ut=new Fe(le)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(vd(s))if(r===0){const o=new B(s.path);this.Qt(n,o,tt.newNoDocument(o,Q.min()))}else fe(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&vd(a.target)){const l=new B(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,tt.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=ee();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Hu(e,n,this.Ut,this.Lt,r);return this.Lt=Pn(),this.qt=vy(),this.Ut=new Fe(le),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new yy,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Fe(le),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new yy),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function vy(){return new $e(B.comparator)}function wy(){return new $e(B.comparator)}/**
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
 */const lN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),uN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),cN=(()=>({and:"AND",or:"OR"}))();class hN{constructor(e,n){this.databaseId=e,this.wt=n}}function Yl(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function N1(t,e){return t.wt?e.toBase64():e.toUint8Array()}function dN(t,e){return Yl(t,e.toTimestamp())}function ln(t){return fe(!!t),Q.fromTimestamp(function(e){const n=hr(e);return new Oe(n.seconds,n.nanos)}(t))}function gp(t,e){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function P1(t){const e=me.fromString(t);return fe(O1(e)),e}function Sd(t,e){return gp(t.databaseId,e.path)}function Jc(t,e){const n=P1(e);if(n.get(1)!==t.databaseId.projectId)throw new O(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(L1(n))}function Cd(t,e){return gp(t.databaseId,e)}function fN(t){const e=P1(t);return e.length===4?me.emptyPath():L1(e)}function kd(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function L1(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _y(t,e,n){return{name:Sd(t,e),fields:n.value.mapValue.fields}}function pN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.wt?(fe(u===void 0||typeof u=="string"),at.fromBase64String(u||"")):(fe(u===void 0||u instanceof Uint8Array),at.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:k1(l.code);return new O(u,l.message||"")}(o);n=new x1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Jc(t,r.document.name),s=ln(r.document.updateTime),o=r.document.createTime?ln(r.document.createTime):Q.min(),a=new Nt({mapValue:{fields:r.document.fields}}),l=tt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new nl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Jc(t,r.document),s=r.readTime?ln(r.readTime):Q.min(),o=tt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new nl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Jc(t,r.document),s=r.removedTargetIds||[];n=new nl([],s,i,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new tN(i),o=r.targetId;n=new D1(o,s)}}return n}function mN(t,e){let n;if(e instanceof na)n={update:_y(t,e.key,e.value)};else if(e instanceof mp)n={delete:Sd(t,e.key)};else if(e instanceof qr)n={update:_y(t,e.key,e.data),updateMask:kN(e.fieldMask)};else{if(!(e instanceof eN))return z();n={verify:Sd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ql)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ao)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ro)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ql)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:dN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(t,e.precondition)),n}function gN(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?ln(r.updateTime):ln(i);return s.isEqual(Q.min())&&(s=ln(i)),new Jx(s,r.transformResults||[])}(n,e))):[]}function yN(t,e){return{documents:[Cd(t,e.path)]}}function vN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Cd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Cd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return b1(Qt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ei(c.field),direction:EN(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.wt||Bu(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function wN(t){let e=fN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const d=M1(c);return d instanceof Qt&&o1(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new zs(ti(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,Bu(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,h=c.values||[];return new Kl(h,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,h=c.values||[];return new Kl(h,d)}(n.endAt)),Hx(e,i,o,s,a,"F",l,u)}function _N(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function M1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ti(e.unaryFilter.field);return Le.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ti(e.unaryFilter.field);return Le.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ti(e.unaryFilter.field);return Le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ti(e.unaryFilter.field);return Le.create(s,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(e){return Le.create(ti(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Qt.create(e.compositeFilter.filters.map(n=>M1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return z()}}(e.compositeFilter.op))}(t):z()}function EN(t){return lN[t]}function SN(t){return uN[t]}function CN(t){return cN[t]}function ei(t){return{fieldPath:t.canonicalString()}}function ti(t){return nt.fromServerFormat(t.fieldPath)}function b1(t){return t instanceof Le?function(e){if(e.op==="=="){if(ay(e.value))return{unaryFilter:{field:ei(e.field),op:"IS_NAN"}};if(oy(e.value))return{unaryFilter:{field:ei(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ay(e.value))return{unaryFilter:{field:ei(e.field),op:"IS_NOT_NAN"}};if(oy(e.value))return{unaryFilter:{field:ei(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ei(e.field),op:SN(e.op),value:e.value}}}(t):t instanceof Qt?function(e){const n=e.getFilters().map(r=>b1(r));return n.length===1?n[0]:{compositeFilter:{op:CN(e.op),filters:n}}}(t):z()}function kN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function O1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class TN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Xx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=A1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=S1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&$i(this.mutations,e.mutations,(n,r)=>py(n,r))&&$i(this.baseMutations,e.baseMutations,(n,r)=>py(n,r))}}class yp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length);let i=iN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yp(e,n,r,i)}}/**
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
 */class IN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Lr{constructor(e,n,r,i,s=Q.min(),o=Q.min(),a=at.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class AN{constructor(e){this.ie=e}}function RN(t){const e=wN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_d(e,e.limit,"L"):e}/**
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
 */class DN{constructor(){this.Je=new xN}addToCollectionParentIndex(e,n){return this.Je.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(cr.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(cr.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class xN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Fe(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Fe(me.comparator)).toArray()}}/**
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
 */class ji{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ji(0)}static vn(){return new ji(-1)}}/**
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
 */class NN{constructor(){this.changes=new es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class PN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class LN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Hs(r.mutation,i,Ht.empty(),Oe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Rr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ds();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Rr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Pn();const o=Ws(),a=Ws();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof qr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Hs(c.mutation,u,c.mutation.getFieldMask(),Oe.now())):o.set(u.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new PN(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ws();let i=new $e((o,a)=>o-a),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Ht.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||ee()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=A1();c.forEach(h=>{if(!s.has(h)){const g=S1(n.get(h),r.get(h));g!==null&&d.set(h,g),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return B.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):f1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):D.resolve(Rr());let a=-1,l=s;return o.next(u=>D.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?D.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ee())).next(c=>({batchId:a,changes:I1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let i=Ds();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ds();return this.indexManager.getCollectionParents(e,i).next(o=>D.forEach(o,a=>{const l=function(u,c){return new ta(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,tt.newInvalidDocument(u)))});let o=Ds();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&Hs(u.mutation,l,Ht.empty(),Oe.now()),pp(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class MN{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return D.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:ln(r.createTime)}),D.resolve()}getNamedQuery(e,n){return D.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:RN(r.bundledQuery),readTime:ln(r.readTime)}}(n)),D.resolve()}}/**
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
 */class bN{constructor(){this.overlays=new $e(B.comparator),this.es=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Rr();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const i=Rr(),s=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new $e((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Rr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Rr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return D.resolve(a)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new IN(n,r));let s=this.es.get(n);s===void 0&&(s=ee(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class vp{constructor(){this.ns=new Fe(Ue.ss),this.rs=new Fe(Ue.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Ue(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new B(new me([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new B(new me([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=ee();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return B.comparator(e.key,n.key)||le(e._s,n._s)}static os(e,n){return le(e._s,n._s)||B.comparator(e.key,n.key)}}/**
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
 */class ON{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Fe(Ue.ss)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Ue(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(le);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),D.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new B(s),0);let a=new Fe(le);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),D.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return D.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Ue(n,0),i=this.gs.firstAfterOrEqual(r);return D.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class FN{constructor(e){this.Es=e,this.docs=new $e(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=Pn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),D.resolve(r)}getAllFromCollection(e,n,r){let i=Pn();const s=new B(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Ax(Ix(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,n,r,i){z()}As(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new $N(this)}getSize(e){return D.resolve(this.size)}}class $N extends NN{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class UN{constructor(e){this.persistence=e,this.Rs=new es(n=>hp(n),dp),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.bs=0,this.Ps=new vp,this.targetCount=0,this.vs=ji.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),D.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ji(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.Dn(n),D.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.Ps.containsKey(n))}}/**
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
 */class BN{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new up(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new UN(this),this.indexManager=new DN,this.remoteDocumentCache=function(r){return new FN(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new AN(n),this.Ns=new MN(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new ON(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new VN(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return D.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class VN extends Dx{constructor(e){super(),this.currentSequenceNumber=e}}class wp{constructor(e){this.persistence=e,this.Fs=new vp,this.$s=null}static Bs(e){return new wp(e)}get Ls(){if(this.$s)return this.$s;throw z()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),D.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Ls,r=>{const i=B.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return D.or([()=>D.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class _p{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _p(e,n.fromCache,r,i)}}/**
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
 */class jN{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(dy(n))return D.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=_d(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,_d(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return dy(n)||i.isEqual(Q.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(ny()<=ae.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ed(n)),this.Bi(e,o,n,Tx(i,-1)))})}Fi(e,n){let r=new Fe(m1(e));return n.forEach((i,s)=>{pp(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return ny()<=ae.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Ed(n)),this.Ni.getDocumentsMatchingQuery(e,n,cr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class zN{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new $e(le),this.Ui=new es(s=>hp(s),dp),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LN(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function HN(t,e,n,r){return new zN(t,e,n,r)}async function F1(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ee();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function WN(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let h=D.resolve();return d.forEach(g=>{h=h.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);fe(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ee();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function $1(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function GN(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,d)));let g=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(d)?g=g.withResumeToken(at.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(d,g),function(y,v,C){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(h,g,c)&&a.push(n.Cs.updateTargetData(s,g))});let l=Pn(),u=ee();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(KN(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(Q.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(d=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.qi=i,s))}function KN(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Pn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function qN(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function QN(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Lr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function Td(t,e,n){const r=Y(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ea(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function Ey(t,e,n){const r=Y(t);let i=Q.min(),s=ee();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=Y(a),d=c.Ui.get(u);return d!==void 0?D.resolve(c.qi.get(d)):c.Cs.getTargetData(l,u)}(r,o,Nn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:ee())).next(a=>(YN(r,Wx(e),a),{documents:a,Hi:s})))}function YN(t,e,n){let r=t.Ki.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class Sy{constructor(){this.activeTargetIds=R1()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JN{constructor(){this.Lr=new Sy,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Sy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XN{Ur(e){}shutdown(){}}/**
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
 */class Cy{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const ZN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class eP{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class tP extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);U("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(U("RestConnection","Received: ",l),l),l=>{throw pd("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Xi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=ZN[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new mx;a.setWithCredentials(!0),a.listenOnce(dx.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Yc.NO_ERROR:const u=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Yc.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new O(T.DEADLINE_EXCEEDED,"Request time out"));break;case Yc.HTTP_ERROR:const c=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const h=d==null?void 0:d.error;if(h&&h.status&&h.message){const g=function(y){const v=y.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(v)>=0?v:T.UNKNOWN}(h.status);o(new O(g,h.message))}else o(new O(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new O(T.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=cx(),o=hx(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new px({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");U("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,d=!1;const h=new eP({Hr:y=>{d?U("Connection","Not sending because WebChannel is closed:",y):(c||(U("Connection","Opening WebChannel transport."),u.open(),c=!0),U("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),g=(y,v,C)=>{y.listen(v,p=>{try{C(p)}catch(f){setTimeout(()=>{throw f},0)}})};return g(u,La.EventType.OPEN,()=>{d||U("Connection","WebChannel transport opened.")}),g(u,La.EventType.CLOSE,()=>{d||(d=!0,U("Connection","WebChannel transport closed"),h.io())}),g(u,La.EventType.ERROR,y=>{d||(d=!0,pd("Connection","WebChannel transport errored:",y),h.io(new O(T.UNAVAILABLE,"The operation could not be completed")))}),g(u,La.EventType.MESSAGE,y=>{var v;if(!d){const C=y.data[0];fe(!!C);const p=C,f=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(f){U("Connection","WebChannel received error:",f);const m=f.status;let w=function(x){const N=De[x];if(N!==void 0)return k1(N)}(m),I=f.message;w===void 0&&(w=T.INTERNAL,I="Unknown error status: "+m+" with message "+f.message),d=!0,h.io(new O(w,I)),u.close()}else U("Connection","WebChannel received:",C),h.ro(C)}}),g(o,fx.STAT_EVENT,y=>{y.stat===ey.PROXY?U("Connection","Detected buffering proxy"):y.stat===ey.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.so()},0),h}}function Xc(){return typeof document<"u"?document:null}/**
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
 */function Wu(t){return new hN(t,!0)}class U1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class B1{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new U1(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new O(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nP extends B1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=pN(this.yt,e),r=function(i){if(!("targetChange"in i))return Q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Q.min():s.readTime?ln(s.readTime):Q.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=kd(this.yt),n.addTarget=function(i,s){let o;const a=s.target;return o=vd(a)?{documents:yN(i,a)}:{query:vN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=N1(i,s.resumeToken):s.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=Yl(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=_N(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=kd(this.yt),n.removeTarget=e,this.Bo(n)}}class rP extends B1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=gN(e.writeResults,e.commitTime),r=ln(e.commitTime);return this.listener.Zo(r,n)}return fe(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=kd(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mN(this.yt,r))};this.Bo(n)}}/**
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
 */class iP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new O(T.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(T.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(T.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class sP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(xn(n),this.ou=!1):U("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class oP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{Qr(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Y(a);l._u.add(4),await ia(l),l.gu.set("Unknown"),l._u.delete(4),await Gu(l)}(this))})}),this.gu=new sP(r,i)}}async function Gu(t){if(Qr(t))for(const e of t.wu)await e(!0)}async function ia(t){for(const e of t.wu)await e(!1)}function V1(t,e){const n=Y(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Cp(n)?Sp(n):ts(n).ko()&&Ep(n,e))}function j1(t,e){const n=Y(t),r=ts(n);n.du.delete(e),r.ko()&&z1(n,e),n.du.size===0&&(r.ko()?r.Fo():Qr(n)&&n.gu.set("Unknown"))}function Ep(t,e){t.yu.Ot(e.targetId),ts(t).zo(e)}function z1(t,e){t.yu.Ot(e),ts(t).Ho(e)}function Sp(t){t.yu=new aN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),ts(t).start(),t.gu.uu()}function Cp(t){return Qr(t)&&!ts(t).No()&&t.du.size>0}function Qr(t){return Y(t)._u.size===0}function H1(t){t.yu=void 0}async function aP(t){t.du.forEach((e,n)=>{Ep(t,e)})}async function lP(t,e){H1(t),Cp(t)?(t.gu.hu(e),Sp(t)):t.gu.set("Unknown")}async function uP(t,e,n){if(t.gu.set("Online"),e instanceof x1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jl(t,r)}else if(e instanceof nl?t.yu.Kt(e):e instanceof D1?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(Q.min()))try{const r=await $1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(at.EMPTY_BYTE_STRING,l.snapshotVersion)),z1(i,a);const u=new Lr(l.target,a,1,l.sequenceNumber);Ep(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Jl(t,r)}}async function Jl(t,e,n){if(!ea(e))throw e;t._u.add(1),await ia(t),t.gu.set("Offline"),n||(n=()=>$1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Gu(t)})}function W1(t,e){return e().catch(n=>Jl(t,n,e))}async function Ku(t){const e=Y(t),n=dr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;cP(e);)try{const i=await qN(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,hP(e,i)}catch(i){await Jl(e,i)}G1(e)&&K1(e)}function cP(t){return Qr(t)&&t.fu.length<10}function hP(t,e){t.fu.push(e);const n=dr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function G1(t){return Qr(t)&&!dr(t).No()&&t.fu.length>0}function K1(t){dr(t).start()}async function dP(t){dr(t).eu()}async function fP(t){const e=dr(t);for(const n of t.fu)e.Xo(n.mutations)}async function pP(t,e,n){const r=t.fu.shift(),i=yp.from(r,e,n);await W1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ku(t)}async function mP(t,e){e&&dr(t).Yo&&await async function(n,r){if(i=r.code,nN(i)&&i!==T.ABORTED){const s=n.fu.shift();dr(n).Mo(),await W1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ku(n)}var i}(t,e),G1(t)&&K1(t)}async function ky(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Qr(n);n._u.add(3),await ia(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Gu(n)}async function gP(t,e){const n=Y(t);e?(n._u.delete(2),await Gu(n)):e||(n._u.add(2),await ia(n),n.gu.set("Unknown"))}function ts(t){return t.pu||(t.pu=function(e,n,r){const i=Y(e);return i.su(),new nP(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:aP.bind(null,t),Zr:lP.bind(null,t),Wo:uP.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Cp(t)?Sp(t):t.gu.set("Unknown")):(await t.pu.stop(),H1(t))})),t.pu}function dr(t){return t.Iu||(t.Iu=function(e,n,r){const i=Y(e);return i.su(),new rP(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:dP.bind(null,t),Zr:mP.bind(null,t),tu:fP.bind(null,t),Zo:pP.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Ku(t)):(await t.Iu.stop(),t.fu.length>0&&(U("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class kp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new kp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tp(t,e){if(xn("AsyncQueue",`${e}: ${t}`),ea(t))return new O(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ai{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=Ds(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new Ai(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ai)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ai;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ty{constructor(){this.Tu=new $e(B.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):z():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class zi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new zi(e,n,Ai.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class yP{constructor(){this.Au=void 0,this.listeners=[]}}class vP{constructor(){this.queries=new es(e=>p1(e),Vu),this.onlineState="Unknown",this.Ru=new Set}}async function wP(t,e){const n=Y(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new yP),i)try{s.Au=await n.onListen(r)}catch(o){const a=Tp(o,`Initialization of query '${Ed(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Ip(n)}async function _P(t,e){const n=Y(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function EP(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Ip(n)}function SP(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Ip(t){t.Ru.forEach(e=>{e.next()})}class CP{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new zi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=zi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class q1{constructor(e){this.key=e}}class Q1{constructor(e){this.key=e}}class kP{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ee(),this.mutatedKeys=ee(),this.Gu=m1(e),this.Qu=new Ai(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new Ty,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),g=pp(this.query,d)?d:null,y=!!h&&this.mutatedKeys.has(h.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;h&&g?h.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),C=!0):this.Hu(h,g)||(r.track({type:2,doc:g}),C=!0,(l&&this.Gu(g,l)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!h&&g?(r.track({type:0,doc:g}),C=!0):h&&!g&&(r.track({type:1,doc:h}),C=!0,(l||u)&&(a=!0)),C&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,c)=>function(d,h){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return g(d)-g(h)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new zi(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Ty,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ee(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new Q1(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new q1(r))}),n}tc(e){this.qu=e.Hi,this.Ku=ee();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return zi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class TP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class IP{constructor(e){this.key=e,this.nc=!1}}class AP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new es(a=>p1(a),Vu),this.rc=new Map,this.oc=new Set,this.uc=new $e(B.comparator),this.cc=new Map,this.ac=new vp,this.hc={},this.lc=new Map,this.fc=ji.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function RP(t,e){const n=$P(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await QN(n.localStore,Nn(e));n.isPrimaryClient&&V1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await DP(n,e,r,a==="current",o.resumeToken)}return i}async function DP(t,e,n,r,i){t._c=(d,h,g)=>async function(y,v,C,p){let f=v.view.Wu(C);f.$i&&(f=await Ey(y.localStore,v.query,!1).then(({documents:I})=>v.view.Wu(I,f)));const m=p&&p.targetChanges.get(v.targetId),w=v.view.applyChanges(f,y.isPrimaryClient,m);return Ay(y,v.targetId,w.Xu),w.snapshot}(t,d,h,g);const s=await Ey(t.localStore,e,!0),o=new kP(e,s.Hi),a=o.Wu(s.documents),l=ra.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Ay(t,n,u.Xu);const c=new TP(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function xP(t,e){const n=Y(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Vu(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Td(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),j1(n.remoteStore,r.targetId),Id(n,r.targetId)}).catch(Zo)):(Id(n,r.targetId),await Td(n.localStore,r.targetId,!0))}async function NP(t,e,n){const r=UP(t);try{const i=await function(s,o){const a=Y(s),l=Oe.now(),u=o.reduce((h,g)=>h.add(g.key),ee());let c,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let g=Pn(),y=ee();return a.Gi.getEntries(h,u).next(v=>{g=v,g.forEach((C,p)=>{p.isValidDocument()||(y=y.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,g)).next(v=>{c=v;const C=[];for(const p of o){const f=Zx(p,c.get(p.key).overlayedDocument);f!=null&&C.push(new qr(p.key,f,c1(f.value.mapValue),an.exists(!0)))}return a.mutationQueue.addMutationBatch(h,l,C,o)}).next(v=>{d=v;const C=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(h,v.batchId,C)})}).then(()=>({batchId:d.batchId,changes:I1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new $e(le)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await sa(r,i.changes),await Ku(r.remoteStore)}catch(i){const s=Tp(i,"Failed to persist write");n.reject(s)}}async function Y1(t,e){const n=Y(t);try{const r=await GN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?fe(o.nc):i.removedDocuments.size>0&&(fe(o.nc),o.nc=!1))}),await sa(n,r,e)}catch(r){await Zo(r)}}function Iy(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=Y(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.bu(o)&&(l=!0)}),l&&Ip(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function PP(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new $e(B.comparator);o=o.insert(s,tt.newNoDocument(s,Q.min()));const a=ee().add(s),l=new Hu(Q.min(),new Map,new Fe(le),o,a);await Y1(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),Ap(r)}else await Td(r.localStore,e,!1).then(()=>Id(r,e,n)).catch(Zo)}async function LP(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await WN(n.localStore,e);X1(n,r,null),J1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await sa(n,i)}catch(i){await Zo(i)}}async function MP(t,e,n){const r=Y(t);try{const i=await function(s,o){const a=Y(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(fe(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);X1(r,e,n),J1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await sa(r,i)}catch(i){await Zo(i)}}function J1(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function X1(t,e,n){const r=Y(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Id(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||Z1(t,r)})}function Z1(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(j1(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Ap(t))}function Ay(t,e,n){for(const r of n)r instanceof q1?(t.ac.addReference(r.key,e),bP(t,r)):r instanceof Q1?(U("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||Z1(t,r.key)):z()}function bP(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(U("SyncEngine","New document in limbo: "+n),t.oc.add(r),Ap(t))}function Ap(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new B(me.fromString(e)),r=t.fc.next();t.cc.set(r,new IP(n)),t.uc=t.uc.insert(n,r),V1(t.remoteStore,new Lr(Nn(h1(n.path)),r,2,up.at))}}async function sa(t,e,n){const r=Y(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=_p.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,l){const u=Y(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>D.forEach(l,d=>D.forEach(d.Si,h=>u.persistence.referenceDelegate.addReference(c,d.targetId,h)).next(()=>D.forEach(d.Di,h=>u.persistence.referenceDelegate.removeReference(c,d.targetId,h)))))}catch(c){if(!ea(c))throw c;U("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const h=u.qi.get(d),g=h.snapshotVersion,y=h.withLastLimboFreeSnapshotVersion(g);u.qi=u.qi.insert(d,y)}}}(r.localStore,s))}async function OP(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await F1(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new O(T.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await sa(n,r.ji)}}function FP(t,e){const n=Y(t),r=n.cc.get(e);if(r&&r.nc)return ee().add(r.key);{let i=ee();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function $P(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Y1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PP.bind(null,e),e.sc.Wo=EP.bind(null,e.eventManager),e.sc.wc=SP.bind(null,e.eventManager),e}function UP(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MP.bind(null,e),e}class BP{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Wu(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return HN(this.persistence,new jN,e.initialUser,this.yt)}yc(e){return new BN(wp.Bs,this.yt)}gc(e){return new JN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Iy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OP.bind(null,this.syncEngine),await gP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new vP}createDatastore(e){const n=Wu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new tP(i));var i;return function(s,o,a,l){return new iP(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Iy(this.syncEngine,a,0),o=Cy.C()?new Cy:new XN,new oP(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new AP(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);U("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ia(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function eE(t,e,n){if(!n)throw new O(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jP(t,e,n,r){if(e===!0&&r===!0)throw new O(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ry(t){if(!B.isDocumentKey(t))throw new O(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dy(t){if(B.isDocumentKey(t))throw new O(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function Hi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qu(t);throw new O(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const xy=new Map;class Ny{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new O(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,jP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Qu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ny({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ny(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new gx;switch(n.type){case"gapi":const r=n.client;return new _x(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=xy.get(e);n&&(U("ComponentProvider","Removing Datastore"),xy.delete(e),n.terminate())}(this),Promise.resolve()}}function zP(t,e,n,r={}){var i;const s=(t=Hi(t,Qu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&pd("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Ze.MOCK_USER;else{o=VT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new O(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ze(l)}t._authCredentials=new yx(new Z_(o,a))}}/**
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
 */class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class ns{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ns(this.firestore,e,this._query)}}class ar extends ns{constructor(e,n,r){super(e,n,h1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new B(e))}withConverter(e){return new ar(this.firestore,e,this._path)}}function tE(t,e,...n){if(t=dt(t),eE("collection","path",e),t instanceof Qu){const r=me.fromString(e,...n);return Dy(r),new ar(t,null,r)}{if(!(t instanceof Ct||t instanceof ar))throw new O(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Dy(r),new ar(t.firestore,null,r)}}function nE(t,e,...n){if(t=dt(t),arguments.length===1&&(e=e1.R()),eE("doc","path",e),t instanceof Qu){const r=me.fromString(e,...n);return Ry(r),new Ct(t,null,new B(r))}{if(!(t instanceof Ct||t instanceof ar))throw new O(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Ry(r),new Ct(t.firestore,t instanceof ar?t.converter:null,new B(r))}}/**
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
 *//**
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
 */class HP{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class WP{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=e1.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Tp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function GP(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await F1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function KP(t,e){t.asyncQueue.verifyOperationInProgress();const n=await qP(t);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>ky(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>ky(e.remoteStore,s)),t.onlineComponents=e}async function qP(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await GP(t,new BP)),t.offlineComponents}async function rE(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await KP(t,new VP)),t.onlineComponents}function QP(t){return rE(t).then(e=>e.syncEngine)}async function YP(t){const e=await rE(t),n=e.eventManager;return n.onListen=RP.bind(null,e.syncEngine),n.onUnlisten=xP.bind(null,e.syncEngine),n}function JP(t,e,n={}){const r=new or;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new HP({next:d=>{s.enqueueAndForget(()=>_P(i,c)),d.fromCache&&a.source==="server"?l.reject(new O(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new CP(o,u,{includeMetadataChanges:!0,Nu:!0});return wP(i,c)}(await YP(t),t.asyncQueue,e,n,r)),r.promise}class XP{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new U1(this,"async_queue_retry"),this.Wc=()=>{const n=Xc();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Xc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Xc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new or;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!ea(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw xn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=kp.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&z()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Yu extends Qu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new XP,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sE(this),this._firestoreClient.terminate()}}function ZP(t,e){const n=typeof t=="object"?t:yw(),r=typeof t=="string"?t:e||"(default)",i=Nf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$T("firestore");s&&zP(i,...s)}return i}function iE(t){return t._firestoreClient||sE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function sE(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new xx(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new WP(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 *//**
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
 */class Wi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wi(at.fromBase64String(e))}catch(n){throw new O(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Wi(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Rp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class oE{constructor(e){this._methodName=e}}/**
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
 */class Dp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
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
 */const eL=/^__.*__$/;class tL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new qr(e,this.data,this.fieldMask,n,this.fieldTransforms):new na(e,this.data,n,this.fieldTransforms)}}function aE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class xp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new xp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Xl(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(aE(this.sa)&&eL.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class nL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||Wu(e)}da(e,n,r,i=!1){return new xp({sa:e,methodName:n,fa:r,path:nt.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function lE(t){const e=t._freezeSettings(),n=Wu(t._databaseId);return new nL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rL(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);hE("Data must be an object, but it was:",o,r);const a=uE(r,o);let l,u;if(s.merge)l=new Ht(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=sL(e,d,n);if(!o.contains(h))throw new O(T.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);aL(c,h)||c.push(h)}l=new Ht(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new tL(new Nt(a),l,u)}function iL(t,e,n,r=!1){return Np(n,t.da(r?4:3,e))}function Np(t,e){if(cE(t=dt(t)))return hE("Unsupported field value:",e,t),uE(t,e);if(t instanceof oE)return function(n,r){if(!aE(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Np(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=dt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Kx(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Oe.fromDate(n);return{timestampValue:Yl(r.yt,i)}}if(n instanceof Oe){const i=new Oe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Yl(r.yt,i)}}if(n instanceof Dp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Wi)return{bytesValue:N1(r.yt,n._byteString)};if(n instanceof Ct){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:gp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${qu(n)}`)}(t,e)}function uE(t,e){const n={};return t1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zi(t,(r,i)=>{const s=Np(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function cE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof Dp||t instanceof Wi||t instanceof Ct||t instanceof oE)}function hE(t,e,n){if(!cE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=qu(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function sL(t,e,n){if((e=dt(e))instanceof Rp)return e._internalPath;if(typeof e=="string")return dE(t,e);throw Xl("Field path arguments must be of type string or ",t,!1,void 0,n)}const oL=new RegExp("[~\\*/\\[\\]]");function dE(t,e,n){if(e.search(oL)>=0)throw Xl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Rp(...e.split("."))._internalPath}catch{throw Xl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new O(T.INVALID_ARGUMENT,a+t+l)}function aL(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class fE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lL extends fE{data(){return super.data()}}function pE(t,e){return typeof e=="string"?dE(t,e):e instanceof Rp?e._internalPath:e._delegate._internalPath}/**
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
 */function uL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new O(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pp{}class cL extends Pp{}function hL(t,e,...n){let r=[];e instanceof Pp&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Mp).length,o=i.filter(a=>a instanceof Lp).length;if(s>1||s>0&&o>0)throw new O(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Lp extends cL{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Lp(e,n,r)}_apply(e){const n=this._parse(e);return mE(e._query,n),new ns(e.firestore,e.converter,wd(e._query,n))}_parse(e){const n=lE(e.firestore);return function(i,s,o,a,l,u,c){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new O(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Ly(c,u);const h=[];for(const g of c)h.push(Py(a,i,g));d={arrayValue:{values:h}}}else d=Py(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Ly(c,u),d=iL(o,s,c,u==="in"||u==="not-in");return Le.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Mp extends Pp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Mp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)mE(s,a),s=wd(s,a)}(e._query,n),new ns(e.firestore,e.converter,wd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Py(t,e,n){if(typeof(n=dt(n))=="string"){if(n==="")throw new O(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!f1(e)&&n.indexOf("/")!==-1)throw new O(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!B.isDocumentKey(r))throw new O(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sy(t,new B(r))}if(n instanceof Ct)return sy(t,n._key);throw new O(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qu(n)}.`)}function Ly(t,e){if(!Array.isArray(t)||t.length===0)throw new O(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new O(T.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function mE(t,e){if(e.isInequality()){const r=fp(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new O(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=d1(t);s!==null&&dL(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new O(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function dL(t,e,n){if(!n.isEqual(e))throw new O(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class fL{convertValue(e,n="none"){switch(zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){const r={};return Zi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Dp(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=r1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(To(e));default:return null}}convertTimestamp(e){const n=hr(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);fe(O1(r));const i=new ko(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(n)||xn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function pL(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Oa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mL extends fE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new rl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(pE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class rl extends mL{data(e={}){return super.data(e)}}class gL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Oa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new rl(this._firestore,this._userDataWriter,r.key,r,new Oa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new O(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new rl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Oa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new rl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Oa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:yL(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function yL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}class vL extends fL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function gE(t){t=Hi(t,ns);const e=Hi(t.firestore,Yu),n=iE(e),r=new vL(e);return uL(t._query),JP(n,t._query).then(i=>new gL(e,r,t,i))}function wL(t,e,n){t=Hi(t,Ct);const r=Hi(t.firestore,Yu),i=pL(t.converter,e,n);return yE(r,[rL(lE(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,an.none())])}function _L(t){return yE(Hi(t.firestore,Yu),[new mp(t._key,an.none())])}function yE(t,e){return function(n,r){const i=new or;return n.asyncQueue.enqueueAndForget(async()=>NP(await QP(n),r,i)),i.promise}(iE(t),e)}(function(t,e=!0){(function(n){Xi=n})(Uo),bi(new Ur("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Yu(new vx(n.getProvider("auth-internal")),new Sx(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new O(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ko(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),sr(ty,"3.8.1",t),sr(ty,"3.8.1","esm2017")})();const EL={apiKey:"AIzaSyB7KcGLNztLk0KmjJ7CCyIQmwvchLaRbCw",authDomain:"rpg-gen.firebaseapp.com",projectId:"rpg-gen",storageBucket:"rpg-gen.appspot.com",messagingSenderId:"167071727845",appId:"1:167071727845:web:59a5ff82df16db1c0b940c"},vE=gw(EL),wE=Qw(vE),Zl=ZP(vE);function SL(t,e,n){return HA(wE,t,e).then(r=>n(" Login Successful!")).catch(r=>n(" Failed. Error Code ["+r.code+"]. Error Message ["+r.message+"]"))}async function CL(t){return qA(wE).then(e=>t("Success!"))}async function kL(t){const e=hL(tE(Zl,t));return await gE(e)}async function Ad(t,e,n,r=!0){const i=nE(Zl,t,e);await wL(i,n,{merge:r})}async function TL(t,e){const n=await gE(tE(Zl,t));if(n.docs.length==0){e("No existing items to delete.");return}n.forEach(r=>{e('Deleting item with key"'+r.id+'"...'),_L(nE(Zl,t,r.id))})}function IL(){const t=k.useContext(Tt);return he(Pd.Fragment,{children:[he("p",{children:["Current User: ",t.user!=null?t.user.email:"Not logged in"]}),S("div",{children:S(bp,{})})]})}function bp(){const t=k.useContext(Tt),e=t.user;t.is_auth_checked;const n=e!=null&&e.email!=null,[r,i]=k.useState(""),[s,o]=k.useState("");function a(u){return u.preventDefault(),t.replace_banner("Logging in..."),SL(r,s,t.append_inline_banner)}function l(u){return u.preventDefault(),t.replace_banner("Logging out..."),CL(t.append_banner)}return n?S("button",{onClick:l,children:"Log out"}):he("form",{onSubmit:a,children:[S("label",{htmlFor:"username_field",children:"Username: "}),S("input",{label:"Username",type:"text",id:"username_field",name:"username",defaultValue:r,onChange:u=>i(u.target.value)}),S("br",{}),S("label",{htmlFor:"password_field",children:"Password: "}),S("input",{label:"Password",type:"password",id:"password_field",name:"password",defaultValue:s,onChange:u=>o(u.target.value)}),S("br",{}),S("button",{type:"submit",children:"Log in"})]})}function AL(){const[t,e]=k.useState(k.useContext(Tt));k.useState(null);const[n,r]=k.useState(window.innerWidth),[i,s]=k.useState(window.innerHeight),[o,a]=k.useState(window.innerWidth<Vg.mobile_collapse_point);function l(){return e(d=>({...d,is_show_sidebar:!d.is_show_sidebar}))}function u(){const d=window.innerWidth<Vg.mobile_collapse_point;r(window.innerWidth),s(window.innerHeight),a(d),e(h=>({...h,window_width:window.innerWidth,window_height:window.innerHeight,is_mobile_view:d}))}k.useEffect(()=>{e(d=>({...d,set_global_context:e,toggle_is_show_sidebar:l}))},[]),k.useEffect(()=>(u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)),[]),k.useEffect(()=>{KA(Qw(),d=>{e(h=>({...h,user:d,is_auth_checked:!0}))})},[]);const c={display:"flex",flexGrow:"1",fontFamily:"sans-serif"};return t.is_mobile_view,S(Tt.Provider,{value:t,children:he("div",{style:c,children:[(t.is_show_sidebar||!t.is_mobile_view)&&S(RL,{}),t.is_auth_checked?S(DL,{}):S(EE,{})]})})}function _E(){const t=k.useContext(Tt);function e(o){o.preventDefault(),t.toggle_is_show_sidebar()}const n={display:"flex",justifyContent:"center",position:"relative",marginBottom:"1em"},r={textDecoration:"none",color:"#121212",display:"inline",paddingLeft:"1.5em",paddingRight:"1.5em",fontSize:"1.5em",fontWeight:"bold"},i={height:"1em",width:"auto",marginRight:"1em",position:"absolute",left:"0"},s=t.is_show_sidebar?cD:uD;return he("div",{style:n,children:[t.is_mobile_view&&S("img",{className:"hover-element",src:s,style:i,onClick:e}),S(lw,{style:r,to:"/",children:t.site_title})]})}function RL(){const t=k.useContext(Tt);let e={backgroundColor:lD.sidebar_grey,borderRight:"solid 1px #e3e3e3",display:"flex",flexDirection:"column",alignItems:"stretch",textAlign:"center",paddingTop:"1rem",paddingLeft:"1rem",paddingRight:"1rem",width:"15em",flexShrink:"0"};return t.is_mobile_view&&(e={...e,position:"fixed",top:"0",left:"0",bottom:"0",right:"15%",zIndex:"10"}),he("div",{style:e,children:[S(_E,{}),t.is_auth_checked?S(hD,{}):S(EE,{})]})}function EE(){return S("img",{height:"25rem",width:"25rem",src:Yw})}function DL(){const t=k.useContext(Tt);return he("div",{id:"detail",style:{padding:"1rem",flexGrow:"1",flexShrink:"1",display:"flex",flexDirection:"column",alignItems:"stretch"},children:[t.is_mobile_view&&S(_E,{}),S(wT,{})]})}function xL(){const t=sw();return console.error(t),he("div",{id:"error-page",children:[S("h1",{children:"Oops!"}),S("p",{children:"Sorry, an unexpected error has occurred."}),S("p",{children:S("i",{children:t.statusText||t.message})})]})}function SE(t){t=t.split(" ");for(var e=0,n=t.length;e<n;e++)t[e]=t[e][0].toUpperCase()+t[e].substr(1);return t.join(" ")}const NL=()=>{const[t,e]=k.useState(null),n=k.useContext(Tt),r=[{id:"text",display_name:"Text"},{id:"json",display_name:"Json"}],i=[{id:"merge",display_name:"Merge to Existing"},{id:"drop",display_name:"Drop and Recreate"}],s=[{id:"item",display_name:"Items"},{id:"attribute",display_name:"Attributes"}],[o,a]=k.useState(r[0].id),[l,u]=k.useState(i[0].id),[c,d]=k.useState(s[0].id),h=p=>{e(p.target.files[0])},g=async p=>{if(p.preventDefault(),l!="merge"){const m="This will remove all documents from the "+c+" collection, and replace them with the lines in the specified file. Do you want to proceed?";if(!confirm(m)){n.replace_banner("Cancelled collection overwrite.");return}await TL(c,n.append_indent_banner),n.append_indent_banner("Done deleting existing documents.")}n.replace_banner("Starting collection update...");const f=new FileReader;f.onload=m=>{const w=m.target.result;o=="text"?y(w):o=="json"&&v(w),n.append_inline_banner("Success.")},f.readAsText(t)};function y(p){const f=p.split(`
`);[...new Set(f.map(w=>w.toLowerCase().replace(/^\s+|\s+$/g,"")))].forEach(w=>{if(w==null||w==null||w=="")return;const I=w.replaceAll(" ","_"),x=SE(w);Ad(c,I,{display_name:x})})}function v(p){const f=JSON.parse(p);Object.entries(f).forEach(m=>Ad(c,m[0],m[1]))}return S(Lt,{children:he("form",{style:{paddingBottom:"2em"},onSubmit:g,children:[he("div",{className:"gapdiv",children:[S("label",{children:"Collection to Update: "}),S("select",{value:c,onChange:p=>d(p.target.value),children:s.map(p=>S("option",{value:p.id,children:p.display_name},p.id))})]}),he("div",{className:"gapdiv",children:[S("label",{children:"File: "}),S("input",{id:"id_file_upload",type:"file",onChange:h,required:!0})]}),he("div",{className:"gapdiv",children:[S("label",{children:"File Format: "}),S("select",{value:o,onChange:p=>a(p.target.value),children:r.map(p=>S("option",{value:p.id,children:p.display_name},p.id))})]}),he("div",{className:"gapdiv",children:[S("label",{children:"Merge Type: "}),S("select",{value:l,onChange:p=>u(p.target.value),children:i.map(p=>S("option",{value:p.id,children:p.display_name},p.id))})]}),S("button",{type:"submit",children:"Upload"})]})})};function Fa({collection_name:t,download_format:e="json"}){async function n(r){r.preventDefault();const i=await kL(t);let s={},o="";i.forEach(g=>{s[g.id]=g.data(),o+=g.data().display_name+`
`});let l=JSON.stringify(s),u="json";e=="text"&&(l=o,u="txt");const c=new Blob([l],{type:"text/plain"}),d=URL.createObjectURL(c),h=document.createElement("a");h.download="rpg_assistant_"+t+"."+u,h.href=d,h.click()}return he("button",{type:"submit",onClick:n,children:["Download ",SE(t)]})}function PL(){const t=k.useContext(Tt);return S(Lt,{children:t.user==null?he(Lt,{children:[S("p",{children:"Log in to view this content"}),S(bp,{})]}):he(Lt,{children:[S("p",{children:"File Uploads to Merge to Lists"}),S("br",{}),S(NL,{}),he("p",{children:[S("span",{style:{fontWeight:"bold"},children:"NOTE: "}),'Single value text file uploads will treat each line of a file as a document. The document key will be the line cast to lowercase and with spaces replaced with underscores. The document will get one attribute called "display_name" which will be each word of the line capitalized.']}),S("p",{children:"Download collection as JSON file"}),he("div",{children:[S(Fa,{collection_name:"item",download_format:"json"})," ",S(Fa,{collection_name:"attribute",download_format:"json"})]}),S("p",{children:"Download collection as Text file"}),he("div",{children:[S(Fa,{collection_name:"item",download_format:"text"})," ",S(Fa,{collection_name:"attribute",download_format:"text"})]})]})})}function LL(){return S("div",{children:"Here is the npc generator content"})}function ML(){const t=k.useContext(Tt);return S(Lt,{children:t.user!=null?S(bL,{}):he(Lt,{children:[S("p",{children:"Log in to view this page"}),S(bp,{})]})})}function bL(){const[t,e]=k.useState(""),[n,r]=k.useState(""),[i,s]=k.useState("");function o(a){a.preventDefault();const l=t.toLowerCase().replaceAll(" ","_")+"_"+n.toLowerCase().replaceAll(" ","_");Ad("character",l,{short_name:t,rest_of_name:n,role:i})}return S(Lt,{children:he("form",{children:[S("h3",{children:"Create New Character"}),S("label",{htmlFor:"short_name_id",children:"First Name: "}),S("input",{id:"short_name_id",name:"short_name",onChange:a=>e(a.target.value)}),S("br",{}),S("label",{htmlFor:"rest_of_name_id",children:"Last Name: "}),S("input",{id:"rest_of_name_id",name:"rest_of_name",onChange:a=>r(a.target.value)}),S("br",{}),S("label",{htmlFor:"role_id",children:"Story Role: "}),S("input",{id:"role_id",name:"role",onChange:a=>s(a.target.value)}),S("br",{}),S("button",{type:"submit",onClick:o,children:"Create"})]})})}const OL=`item_name\r
Alarm Bell\r
Amulet\r
Animal Lead\r
Arrow\r
Atlas\r
Backpack\r
Badge\r
Bagpipe\r
Ballista\r
Band\r
Bandage\r
Belt\r
Bit\r
Bolo Gun\r
Bolt\r
Booby Trap\r
Book\r
Boots\r
Bowl\r
Box\r
Bracelet\r
Bracers\r
Brand\r
Breastplate\r
Brick\r
Brooch\r
Broom\r
Bucket\r
Buckler\r
Candle\r
Cane\r
Canteen\r
Canvas\r
Cape\r
Carpet\r
Chain\r
Chalice\r
Chalk\r
Charm\r
Chest\r
Chimes\r
Cloak\r
Cloth\r
Club\r
Coin\r
Collar\r
Comb\r
Compass\r
Crossbow\r
Crown\r
Crutch\r
Crystal\r
Cube\r
Cudgel\r
Dagger\r
Dart\r
Diary\r
Doll\r
Drums\r
Dulcimer\r
Dust\r
Dye\r
Figurine\r
Fishing Pole\r
Flail\r
Flask\r
Flute\r
Gauntlet\r
Gauze\r
Gem\r
Ghost\r
Glaive\r
Gloves\r
Goggles\r
Gong\r
Greatsword\r
Halberg\r
Hammer\r
Hand Axe\r
Handle\r
Harness\r
Harp\r
Helmet\r
Herbal Tea Pouch\r
Hook\r
Horn\r
Instruments\r
Jar\r
Javelin\r
Journal\r
Key\r
Lamp\r
Leash\r
Ledger\r
Leggings\r
Letter\r
Lever\r
Lock\r
Long Bow\r
Lure\r
Lute\r
Lyre\r
Mace\r
Mandolin\r
Mantle\r
Map\r
Marble\r
Mask\r
Maul\r
Mining Charge\r
Mirror\r
Monster Part\r
Morning Star\r
Music Box\r
Necklace\r
Needle\r
Net\r
Orb\r
Paddle\r
Panting\r
Pearl\r
Pelt\r
Pendant\r
Pet\r
Pick\r
Pike\r
Pin\r
Plant\r
Pot\r
Potion\r
Pouch\r
Powder\r
Quill\r
Quiver\r
Ram\r
Rapier\r
Ring\r
Robes\r
Rod\r
Rope\r
Ruby\r
Rucksack\r
Rune\r
Sack\r
Saddle\r
Saddlebag\r
Salt\r
Salve\r
Sandal\r
Scepter\r
Scroll\r
Seal\r
Shackles\r
Shield\r
Shirt\r
Short Bow\r
Shovel\r
Shroud\r
Sickle\r
Sleeve\r
Sling\r
Slippers\r
Soil\r
Spear\r
Spectacles\r
Spur\r
Staff\r
Stake\r
Stick\r
Stone\r
Sword\r
Talisman\r
Tambourine\r
Telescope\r
Thread\r
Throwing Knife\r
Tome\r
Tool Knife\r
Torch\r
Toy\r
Trident\r
Trinket\r
Trip Wire\r
Trumpet\r
Two Handed Axe\r
Vase\r
Vest\r
Vial\r
Wand\r
War Pick\r
Wet Stone\r
Whip\r
Whistle\r
Statue`,FL=`rarity,prefix,prefix_variation,suffix,suffix_variation\r
rare,Absent,,Absence,Absences\r
rare,Absolving,Absolved,Absolution,Absolving\r
rare,Absorbing,Absorbed,Absorption,Absorbing\r
rare,Abstracting,Abstracted,Abstraction,Abstracting\r
rare,Abundant,Abundance,Abundance,Abounding\r
rare,Accurate,Accuracy,Accuracy,\r
rare,Adapting,Adapted,Adaptation,Adapting\r
rare,Addictive,Addicted,Addicting,Addiction\r
rare,Adorned,Adorning,Adorning,\r
rare,Adultered,Adulterers,Adulteration,Adulterers\r
rare,Agile,,Agility,\r
rare,Aged,Old,Aging,\r
rare,Agonizing,Agonized,Agony,Agonizing\r
rare,Air,Aired,Air,Airs\r
rare,Alliance,Allied,Alliance,Alliances\r
rare,Altruistic,,Altruism,\r
rare,Amphibious,Amphibian,Amphibians,\r
rare,Ancestral,Ancestor,Ancestry,Ancestors\r
rare,Anchoring,Anchored,Anchoring,Anchors\r
rare,Ancient,,Ancients,\r
rare,Atiquated,,Antiquity,\r
rare,Annihilation,Annihilated,Annihilation,Annihilations\r
rare,Annoying,Annoyed,Annoyance,Annoying\r
rare,Anxious,Anxiety,Anxiety,Anxiousness\r
rare,Armageddon,,Armageddon,Armageddons\r
rare,Artistic,Art,Art,Artistry\r
rare,Ashen,Ash,Ash,\r
rare,Aspiring,,Aspiration,Aspiring\r
rare,Assasination,Assasin,Assassination,Assassins\r
rare,Atheist,Atheists,Atheism,Atheists\r
rare,Attack,,Attack,Attacks\r
rare,Authentic,,Authenticity,\r
rare,Bandit,Bandits,Banditry,Bandits\r
rare,Barbarous,Barbarian,Barbarity,Barbarians\r
rare,Bards,Bard,Bards,Barding\r
rare,Bare,Baren,Baren,Baring\r
rare,Bathing,Bath,Bathing,Baths\r
rare,Bestial,Beast,Beasts,\r
rare,Beautiful,,Beauty,Beauties\r
rare,Beckoning,Beckoned,Beckoning,Beautification\r
rare,Bejeweled,Jewel,Jewelry,Jewels\r
rare,Bent,,Bending,Bends\r
rare,Betrayed,Betraying,Betrayal,Betraying\r
rare,Binding,Bound,Binding,Bindings\r
rare,Bitter,,Bitterness,\r
rare,Blazing,Blaze,Blazes,Blezing\r
rare,Bleak,,Bleakness,\r
rare,Blending,Blended,Blending,Blends\r
rare,Blessed,Blessing,Blessings,Blessing\r
rare,Blind,,Blinding,\r
rare,Blocking,Blocked,Blocking,Blocks\r
rare,Blood,Bloody,Blood,Bloods\r
rare,Blossom,Blossoming,Blossoming,Blossoms\r
rare,Boiling,Boiled,Boiling,Boils\r
rare,Bondage,Bonded,Bonds,Bondage\r
rare,Bone,,Bones,\r
rare,Boring,Bored,Boredom,\r
rare,Borrowed,,Borrowing,\r
rare,Bounty,,Bounties,\r
rare,Bouyant,,Bouyancy,\r
rare,Bovine,,Bovines,\r
rare,Porcine,,Swine,Porcines\r
rare,Branded,,Branding,Brands\r
rare,Brass,,Brass,\r
rare,Brazen,,,\r
rare,Bold,,Boldness,\r
rare,Broken,,Breaking,\r
rare,Breath,Breathing,Breaths,Breathing\r
rare,Brief,,Brevity,\r
rare,Bridge,Bridging,Bridges,Bridging\r
rare,Brine,,Brine,Brines\r
rare,Brittle,,,\r
rare,Crumbling,,Crumbling,Crumbles\r
rare,Broad,,,\r
rare,Expansive,Expanse,Expanses,Expanding\r
rare,Brothers,,Brotherhood,Brothers\r
rare,Burdensome,Burdened,Burdens,Burdening\r
rare,Burglars,Burglar,Burglary,Burglars\r
rare,Burrowing,Burrowed,Burrowing,Burrows\r
rare,Bursted,Bursting,Bursting,Bursts\r
rare,Butcher,Butchering,Butchering,Butchers\r
rare,calamitous,Calamity,Calamity,Calamities\r
rare,Calculated,,Calculation,Calculations\r
rare,Calm,Calmed,Calm,Calming\r
rare,Camping,Camp,Camps,Camping\r
rare,Campfire,,Campfires,\r
rare,Canine,,Canines,\r
rare,Cannibalistic,Cannibal,Cannibalism,Cannibals\r
rare,Careless,,Carelessness,\r
rare,Carnivorous,Carnivore,Carnivores,\r
rare,Cartographers,Cartographer,Cartography,Cartographers\r
rare,Carved,Carving,Carving,Carvings\r
rare,Catasrophic,Catastrophy,Catastrophe,Catastrophies\r
rare,Cautious,,Caution,Cautions\r
rare,Centaur,Centaurs,Centaurs,the Centair\r
rare,Chakra,,Chakras,\r
rare,Chance,,Chance,Chances\r
rare,Change,Changed,Change,Changes\r
rare,Chaos,Chaotic,Chaos,\r
rare,Charismatic,,Charisma,\r
rare,Charity,,Charity,\r
rare,Charlatan,Charlatans,Charlatans,the Charlatan\r
rare,Charm,Charming,Charms,Charming\r
rare,Cheating,,Cheating,Cheats\r
rare,Cheerful,Cheery,Cheer,Cheering\r
rare,Chipped,Chipping,Chipping,Chips\r
rare,Chivalrous,,Chivalry,\r
rare,Chore,,Chores,\r
rare,Churning,Churned,Churn,Churning\r
rare,Singed,,Cinders,Singeing\r
rare,Clamorous,,Clamor,Clamors\r
rare,Clan,,Clans,\r
rare,Claw,,Claws,\r
rare,Clean,Cleaned,Cleaning,\r
rare,Cleansed,,Cleansing,Cleanses\r
rare,Cleaved,,Cleaving,\r
rare,Climbing,,Climbing,Climbs\r
rare,Cloning,Clone,Cloning,Clones\r
rare,Clue,,Clues,\r
rare,Cohesive,,Cohesion,\r
rare,Cold,,Cold,Colds\r
rare,Collection,Collections,Collection,Collections\r
rare,Comedic,Comedy,Comedy,Comedies\r
rare,Comet,,the Comet,Comets\r
rare,Comfort,Comforting,Comfort,Comforting\r
rare,Command,,Command,Commanding\r
rare,Commencement,Commencing,Commencement,Commencing\r
rare,Communication,Communications,Communication,Communications\r
rare,Compact,Compacted,Compacting,\r
rare,Complaining,Complaint,Complaint,Complaints\r
rare,Complicated,Complex,Complication,Complications\r
rare,Compression,Compressed,Compression,Compression\r
rare,Compulsion,,Compulsion,Compulsions\r
rare,Comrade,Comrades,Comraderie,Comrades\r
rare,Conceited,Conceit,Conceit,Conceits\r
rare,Concentration,Concentrated,Concentration,Concentrations\r
rare,Confidence,Confident,Confidence,\r
rare,Confidant,Confidants,Confidants,Confiding\r
rare,Connection,Connected,Connection,Connecting\r
rare,Conquering,Conquest,Conquering,Conquest\r
rare,Constitution,Constituted,Constitution,Constitutions\r
rare,Construction,Constructed,Construction,Constructions\r
rare,Contagion,Contagious,Contagion,\r
rare,Containment,Contained,Containment,Containing\r
rare,Contradiction,Contradicted,Contradiction,Contradicting\r
rare,Convenience,Convenient,,\r
rare,Conversion,,Conversion,\r
rare,Costly,,Costly,\r
rare,Courage,,Courage,\r
rare,Crafting,,Crafting,\r
rare,Creatures,,Creatures,\r
rare,Creeping,,Creeping,\r
rare,Crime,,Crime,\r
rare,Crossing,,Crossing,\r
rare,Crowding,,Crowding,\r
rare,Cruelty,,Cruelty,\r
rare,Crusty,,Crusty,\r
rare,Crystals,,Crystals,\r
rare,Cumbersome,,Cumbersome,\r
rare,Cunning,,Cunning,\r
rare,Cursed,,Cursed,\r
rare,Cursing,,Cursing,\r
rare,Curved,,Curved,\r
rare,Damning,,Damning,\r
rare,Dark,,Dark,\r
rare,Death,,Death,\r
rare,Deception,,Deception,\r
rare,Decomposition,,Decomposition,\r
rare,Defence,,Defence,\r
rare,Defiance,,Defiance,\r
rare,Delay,,Delay,\r
rare,Delicate,,Delicate,\r
rare,Democratic,,Democratic,\r
rare,Demolition,,Demolition,\r
rare,Dented,,Dented,\r
rare,Depression,,Depression,\r
rare,Derangement,,Derangement,\r
rare,Desert,,Desert,\r
rare,Desire,,Desire,\r
rare,Desired,,Desired,\r
rare,Despair,,Despair,\r
rare,Desperation,,Desperation,\r
rare,Details,,Details,\r
rare,Deterioration,,Deterioration,\r
rare,Devils,,Devils,\r
rare,Diligence,,Diligence,\r
rare,Diminishing,,Diminishing,\r
rare,Direction,,Direction,\r
rare,Directions,,Directions,\r
rare,Discernment,,Discernment,\r
rare,Discresion,,Discresion,\r
rare,Disease,,Disease,\r
rare,Disection,,Disection,\r
rare,Disposal,,Disposal,\r
rare,Disruption,,Disruption,\r
rare,Dissent,,Dissent,\r
rare,Distraction,,Distraction,\r
rare,Divergence,,Divergence,\r
rare,Dividing,,Dividing,\r
rare,Divorce,,Divorce,\r
rare,Dligience,,Dligience,\r
rare,Dominance,,Dominance,\r
rare,Doppelganger,,Doppelganger,\r
rare,Doubt,,Doubt,\r
rare,Dragon,,Dragon,\r
rare,Draining,,Draining,\r
rare,Dreams,,Dreams,\r
rare,Dreary,,Dreary,\r
rare,Drunkards,,Drunkards,\r
rare,Dryness,,Dryness,\r
rare,Dueling,,Dueling,\r
rare,Dull,,Dull,\r
rare,Durable,,Durable,\r
rare,Dwarven,,Dwarven,\r
rare,Ears,,Ears,\r
rare,Earth,,Earth,\r
rare,Echos,,Echos,\r
rare,Education,,Education,\r
rare,Electric,,Electric,\r
rare,Elemental,,Elemental,\r
rare,Elevation,,Elevation,\r
rare,Elfish,,Elfish,\r
rare,Elusive,,Elusive,\r
rare,Emotions,,Emotions,\r
rare,Empowerment,,Empowerment,\r
rare,Enchanting,,Enchanting,\r
rare,Enclosure,,Enclosure,\r
rare,Endurance,,Endurance,\r
rare,Enhancement,,Enhancement,\r
rare,Enlightening,,Enlightening,\r
rare,Entanglement,,Entanglement,\r
rare,Entertainment,,Entertainment,\r
rare,Entrancing,,Entrancing,\r
rare,Erasure,,Erasure,\r
rare,Erosion,,Erosion,\r
rare,Escape,,Escape,\r
rare,Etching,,Etching,\r
rare,Ethereal,,Ethereal,\r
rare,Evaporation,,Evaporation,\r
rare,Exercise,,Exercise,\r
rare,Exhaustion,,Exhaustion,\r
rare,Exotic,,Exotic,\r
rare,Expanse,,Expanse,\r
rare,Expansive,,Expansive,\r
rare,Explosion,,Explosion,\r
rare,Expulsion,,Expulsion,\r
rare,Extraction,,Extraction,\r
rare,Eyes,,Eyes,\r
rare,Failure,,Failure,\r
rare,Faith,,Faith,\r
rare,Fake,,Fake,\r
rare,Faking,,Faking,\r
rare,Falling,,Falling,\r
rare,Fame,,Fame,\r
rare,Fangs,,Fangs,\r
rare,Fatality,,Fatality,\r
rare,Fateful,,Fateful,\r
rare,Fear,,Fear,\r
rare,Feasting,,Feasting,\r
rare,Feet,,Feet,\r
rare,Fertility,,Fertility,\r
rare,Festivities,,Festivities,\r
rare,Fickleness,,Fickleness,\r
rare,Fighters,,Fighters,\r
rare,Finding,,Finding,\r
rare,Fine,,Fine,\r
rare,Finicky,,Finicky,\r
rare,Fire,,Fire,\r
rare,Flaming,,Flaming,\r
rare,Flawed,,Flawed,\r
rare,Flaying,,Flaying,\r
rare,Fleeting,,Fleeting,\r
rare,Flicker,,Flicker,\r
rare,Flight,,Flight,\r
rare,Floating,,Floating,\r
rare,Flood,,Flood,\r
rare,Flowers,,Flowers,\r
rare,Fog,,,\r
rare,Force,,Force,\r
rare,Foresight,,Foresight,\r
rare,Forgery,,Forgery,\r
rare,Forgotten,,Forgotten,\r
rare,Fortification,,Fortification,\r
rare,Fortune,,Fortune,\r
rare,Found,,Found,\r
rare,Fragile,,Fragile,\r
rare,Framing,,Framing,\r
rare,Frankenstein,,Frankenstein,\r
rare,Frankness,,Frankness,\r
rare,Fraternity,,Fraternity,\r
rare,Frayed,,Frayed,\r
rare,Frivolity,,Frivolity,\r
rare,Frown,,Frown,\r
rare,Frustration,,Frustration,\r
rare,Fullness,,Fullness,\r
rare,Fungal,,Fungal,\r
rare,Gaining,,Gaining,\r
rare,Games,,Games,\r
rare,Gardens,,Gardens,\r
rare,Gas,,,\r
rare,Gathering,,Gathering,\r
rare,Ghostly,,Ghostly,\r
rare,Gladiator,,Gladiator,\r
rare,Glinting,,Glinting,\r
rare,Glitter,,Glitter,\r
rare,Glory,,Glory,\r
rare,Glowing,,Glowing,\r
rare,Gluttony,,Gluttony,\r
rare,Goblin,,Goblin,\r
rare,Gods,,Gods,\r
rare,Gold,,Gold,\r
rare,Grandeur,,Grandeur,\r
rare,Grappling,,Grappling,\r
rare,Greed,,Greed,\r
rare,Grim,,Grim,\r
rare,Grimy,,Grimy,\r
rare,Grins,,Grins,\r
rare,Gripes,,Gripes,\r
rare,Growth,,Growth,\r
rare,Guidance,,Guidance,\r
rare,Guided,,Guided,\r
rare,Guile,,Guile,\r
rare,Guilt,,Guilt,\r
rare,Hafling,,Hafling,\r
rare,Haggling,,Haggling,\r
rare,Hallucination,,Hallucination,\r
rare,Hands,,Hands,\r
rare,Harrowing,,Harrowing,\r
rare,Headache,,Headache,\r
rare,Healing,,Healing,\r
rare,Heartache,,Heartache,\r
rare,Heat,,Heat,\r
rare,Heaven,,Heaven,\r
rare,Hell,,Hell,\r
rare,Hiding,,Hiding,\r
rare,Hilarity,,Hilarity,\r
rare,History,,History,\r
rare,Holiday,,Holiday,\r
rare,Hollowness,,Hollowness,\r
rare,Homing,,Homing,\r
rare,Honesty,,Honesty,\r
rare,Hope,,Hope,\r
rare,Horror,,Horror,\r
rare,Humidity,,Humidity,\r
rare,Humility,,Humility,\r
rare,Hunger,,Hunger,\r
rare,Ice,,,\r
rare,Icicles,,Icicles,\r
rare,Ignition,,Ignition,\r
rare,Illumination,,Illumination,\r
rare,Illusion,,Illusion,\r
rare,Immolation,,Immolation,\r
rare,Impediment,,Impediment,\r
rare,Imperial,,Imperial,\r
rare,Impossibility,,Impossibility,\r
rare,Imposter,,Imposter,\r
rare,Industry,,Industry,\r
rare,Inebriation,,Inebriation,\r
rare,Infection,,Infection,\r
rare,Infinite,,Infinite,\r
rare,Innocence,,Innocence,\r
rare,Insipious,,Insipious,\r
rare,Inspection,,Inspection,\r
rare,Integrity,,Integrity,\r
rare,Intelligence,,Intelligence,\r
rare,Interesting,,Interesting,\r
rare,Intoxicating,,Intoxicating,\r
rare,Intoxication,,Intoxication,\r
rare,Intricate,,Intricate,\r
rare,Intrusion,,Intrusion,\r
rare,Invasive,,Invasive,\r
rare,Investigation,,Investigation,\r
rare,Invokers,,Invokers,\r
rare,Isolation,,Isolation,\r
rare,Jabbing,,Jabbing,\r
rare,Jagged,,Jagged,\r
rare,Jailing,,Jailing,\r
rare,Joining,,Joining,\r
rare,Judgement,,Judgement,\r
rare,Juggling,,Juggling,\r
rare,Justice,,Justice,\r
rare,Kickback,,Kickback,\r
rare,Kindness,,Kindness,\r
rare,King,,King,\r
rare,Knobby,,Knobby,\r
rare,Large,,Large,\r
rare,Lava,,Lava,\r
rare,Lavishness,,Lavishness,\r
rare,Laziness,,Laziness,\r
rare,Leadership,,Leadership,\r
rare,Learning,,Learning,\r
rare,Leeching,,Leeching,\r
rare,Legion,,Legion,\r
rare,Leverage,,Leverage,\r
rare,Liberation,,Liberation,\r
rare,Lies,,Lies,\r
rare,Life,,Life,\r
rare,Light,,Light,\r
rare,Limited Charges,,,\r
rare,Literature,,Literature,\r
rare,Living,,Living,\r
rare,Logic,,Logic,\r
rare,Longing,,Longing,\r
rare,Lore,,Lore,\r
rare,Losing,,Losing,\r
rare,Lost,,Lost,\r
rare,Lucidity,,Lucidity,\r
rare,Luck,,Luck,\r
rare,Luminous,,Luminous,\r
rare,Madness,,Madness,\r
rare,Magicians,,Magicians,\r
rare,Malice,,Malice,\r
rare,Mapping,,Mapping,\r
rare,Masking,,Masking,\r
rare,Massacre,,Massacre,\r
rare,Masterful,,Masterful,\r
rare,Mastery,,Mastery,\r
rare,Maternity,,Maternity,\r
rare,Mathematics,,Mathematics,\r
rare,Matrimony,,Matrimony,\r
rare,Medication,,Medication,\r
rare,Melting,,Melting,\r
rare,Memorable,,Memorable,\r
rare,Memory,,Memory,\r
rare,Mending,,Mending,\r
rare,Mercy,,Mercy,\r
rare,Metallic,,Metallic,\r
rare,Mirage,,Mirage,\r
rare,Mire,,Mire,\r
rare,Misdirection,,Misdirection,\r
rare,Misfortune,,Misfortune,\r
rare,Misguidance,,Misguidance,\r
rare,Mist,,Mist,\r
rare,Misty,,Misty,\r
rare,Moderation,,Moderation,\r
rare,Moldable,,Moldable,\r
rare,Monarchal,,Monarchal,\r
rare,Monitoring,,Monitoring,\r
rare,Monster,,Monster,\r
rare,Moonlight,,Moonlight,\r
rare,Morbidity,,Morbidity,\r
rare,Morphing,,Morphing,\r
rare,Moss,,Moss,\r
rare,Movement,,Movement,\r
rare,Mud,,,\r
rare,Murder,,Murder,\r
rare,Murkiness,,Murkiness,\r
rare,Musical,,Musical,\r
rare,Mutation,,Mutation,\r
rare,Mutilation,,Mutilation,\r
rare,Mutiny,,Mutiny,\r
rare,Mutual DMutualestruction,,,\r
rare,Mystery,,Mystery,\r
rare,Names,,Names,\r
rare,Narration,,Narration,\r
rare,Narrow,,Narrow,\r
rare,Natural,,Natural,\r
rare,Naturalists,,Naturalists,\r
rare,Nature,,Nature,\r
rare,Nausea,,Nausea,\r
rare,Necromantic,,Necromantic,\r
rare,Neutrality,,Neutrality,\r
rare,New,,,\r
rare,Nightmares,,Nightmares,\r
rare,Nimble,,Nimble,\r
rare,Nobility,,Nobility,\r
rare,Nocturnal,,Nocturnal,\r
rare,Nudging,,Nudging,\r
rare,Nutrition,,Nutrition,\r
rare,Obedience,,Obedience,\r
rare,Obscuring,,Obscuring,\r
rare,Oily,,Oily,\r
rare,Omnivorious,,Omnivorious,\r
rare,One UOnese,,,\r
rare,Overflow,,Overflow,\r
rare,Overgrown,,Overgrown,\r
rare,Overload,,Overload,\r
rare,Pacifism,,Pacifism,\r
rare,Padding,,Padding,\r
rare,Paint,,Paint,\r
rare,Paired,,Paired,\r
rare,Pandemonium,,Pandemonium,\r
rare,Paradox,,Paradox,\r
rare,Passion,,Passion,\r
rare,Paternity,,Paternity,\r
rare,Patterns,,Patterns,\r
rare,Peace,,Peace,\r
rare,Performance,,Performance,\r
rare,Permanence,,Permanence,\r
rare,Persistence,,Persistence,\r
rare,Persuasion,,Persuasion,\r
rare,Playfulness,,Playfulness,\r
rare,Poetic,,Poetic,\r
rare,Pointed,,Pointed,\r
rare,Poison,,Poison,\r
rare,Polarizing,,Polarizing,\r
rare,Portals,,Portals,\r
rare,Portrayal,,Portrayal,\r
rare,Poverty,,Poverty,\r
rare,Prank,,Prank,\r
rare,Preparation,,Preparation,\r
rare,Presence,,Presence,\r
rare,Preservation,,Preservation,\r
rare,Prince,,Prince,\r
rare,Princess,,Princess,\r
rare,Prismatic,,Prismatic,\r
rare,Privilege,,Privilege,\r
rare,Procrastination,,Procrastination,\r
rare,Progress,,Progress,\r
rare,Propellant,,Propellant,\r
rare,Prophecy,,Prophecy,\r
rare,Pulverizing,,Pulverizing,\r
rare,Puppeteering,,Puppeteering,\r
rare,Pure,,Pure,\r
rare,Puree,,Puree,\r
rare,Putrid,,Putrid,\r
rare,Quality,,Quality,\r
rare,Quantum,,Quantum,\r
rare,Queasiness,,Queasiness,\r
rare,Queen,,Queen,\r
rare,Quenching,,Quenching,\r
rare,Questing,,Questing,\r
rare,Quick,,Quick,\r
rare,Quiet,,Quiet,\r
rare,Race,,Race,\r
rare,Radiance,,Radiance,\r
rare,Radiant,,Radiant,\r
rare,Radiation,,Radiation,\r
rare,Rage,,Rage,\r
rare,Raiment,,Raiment,\r
rare,Rallying,,Rallying,\r
rare,Randomization,,Randomization,\r
rare,Rare,,Rare,\r
rare,Rays,,Rays,\r
rare,Reaching,,Reaching,\r
rare,Readiness,,Readiness,\r
rare,Reaper,,Reaper,\r
rare,Rearguard,,Rearguard,\r
rare,Reason,,Reason,\r
rare,Rebellion,,Rebellion,\r
rare,Recharge,,Recharge,\r
rare,Reciprocity,,Reciprocity,\r
rare,Recklessness,,Recklessness,\r
rare,Reckoning,,Reckoning,\r
rare,Reclamation,,Reclamation,\r
rare,Reconciliation,,Reconciliation,\r
rare,Recording,,Recording,\r
rare,Recovery,,Recovery,\r
rare,Recruiting,,Recruiting,\r
rare,Rediction,,Rediction,\r
rare,Redo,,Redo,\r
rare,Redoing,,Redoing,\r
rare,Refill,,Refill,\r
rare,Reflection,,Reflection,\r
rare,Refrigeration,,Refrigeration,\r
rare,Regal,,Regal,\r
rare,Rehabilitation,,Rehabilitation,\r
rare,Reinforcing,,Reinforcing,\r
rare,Rejuvination,,Rejuvination,\r
rare,Relaxation,,Relaxation,\r
rare,Relief,,Relief,\r
rare,Religion,,Religion,\r
rare,Remembrance,,Remembrance,\r
rare,Remorse,,Remorse,\r
rare,Rending,,Rending,\r
rare,Repair,,Repair,\r
rare,Repentance,,Repentance,\r
rare,Replay,,Replay,\r
rare,Republic,,Republic,\r
rare,Resolve,,Resolve,\r
rare,Restitution,,Restitution,\r
rare,Restoration,,Restoration,\r
rare,Retraction,,Retraction,\r
rare,Retreat,,Retreat,\r
rare,Returning,,Returning,\r
rare,Revealing,,,\r
rare,Revelation,,Revelation,\r
rare,Revenge,,Revenge,\r
rare,Revision,,Revision,\r
rare,Reviving,,Reviving,\r
rare,Revolution,,Revolution,\r
rare,Risk,,Risk,\r
rare,Robustness,,Robustness,\r
rare,Romance,,Romance,\r
rare,Rough,,Rough,\r
rare,Rounded,,Rounded,\r
rare,Royal,,Royal,\r
rare,Royalty,,Royalty,\r
rare,Ruin,,Ruin,\r
rare,Rusty,,Rusty,\r
rare,Sabotage,,Sabotage,\r
rare,Sacrificial,,Sacrificial,\r
rare,Salvation,,Salvation,\r
rare,Savage,,Savage,\r
rare,Savant,,Savant,\r
rare,Scarcity,,Scarcity,\r
rare,Scars,,Scars,\r
rare,Scents,,Scents,\r
rare,Scrying,,Scrying,\r
rare,Sealed,,Sealed,\r
rare,Searing,,Searing,\r
rare,Secrecy,,Secrecy,Secrets\r
rare,Self Destruction,,,\r
rare,Selfishness,,Selfishness,\r
rare,Serenity,,Serenity,\r
rare,Serpent,,Serpent,\r
rare,Serpentine,,Serpentine,\r
rare,Service,,Service,\r
rare,Shade,,Shade,\r
rare,Shadow,,Shadow,\r
rare,Shame,,Shame,\r
rare,Sharp,,Sharp,\r
rare,Shattered,,Shattered,\r
rare,Shelter,,Shelter,\r
rare,Shield,,Shield,\r
rare,Shimmering,,Shimmering,\r
rare,Shocking,,Shocking,\r
rare,Short,,Short,\r
rare,Shrieks,,Shrieks,\r
rare,Shrinking,,Shrinking,\r
rare,Sickness,,Sickness,\r
rare,Sight,,Sight,\r
rare,Silence,,Silence,\r
rare,Silvery,,Silvery,\r
rare,Sisterhood,,Sisterhood,\r
rare,Sleek,,Sleek,\r
rare,Sleep,,Sleep,\r
rare,Slime,,Slime,\r
rare,Slimy,,Slimy,\r
rare,Sloth,,Sloth,\r
rare,Small,,Small,\r
rare,Smashing,,Smashing,\r
rare,Smoke,,Smoke,\r
rare,Smoking,,Smoking,\r
rare,Sneaking,,Sneaking,\r
rare,Soaring,,Soaring,\r
rare,Soberness,,Soberness,\r
rare,Solidarity,,Solidarity,\r
rare,Solidification,,Solidification,\r
rare,Song,,Song,\r
rare,Sorrow,,Sorrow,\r
rare,Space,,Space,\r
rare,Spanning,,Spanning,\r
rare,Sparing,,Sparing,\r
rare,Sparkles,,Sparkles,\r
rare,Speed,,Speed,\r
rare,Spiders,,Spiders,\r
rare,Spirit,,Spirit,\r
rare,Spreading,,Spreading,\r
rare,Squeazing,,Squeazing,\r
rare,Stalling,,Stalling,\r
rare,Stamina,,Stamina,\r
rare,Stasis,,Stasis,\r
rare,Stealth,,Stealth,\r
rare,Stifling,,Stifling,\r
rare,Storage,,Storage,\r
rare,Storms,,Storms,\r
rare,Strength,,Strength,\r
rare,Stress,,Stress,\r
rare,Stunning,,Stunning,\r
rare,Sublimation,,Sublimation,\r
rare,Submersion,,Submersion,\r
rare,Subservience,,Subservience,\r
rare,Subtle,,Subtle,\r
rare,Success,,Success,\r
rare,Suffocation,,Suffocation,\r
rare,Summoning,,Summoning,\r
rare,Sundering,,Sundering,\r
rare,Sunlight,,Sunlight,\r
rare,Surgery,,Surgery,\r
rare,Surprise,,Surprise,\r
rare,Survival,,Survival,\r
rare,Suspicion,,Suspicion,\r
rare,Sustenance,,Sustenance,\r
rare,Swamps,,Swamps,\r
rare,Sweetness,,Sweetness,\r
rare,Swimming,,Swimming,\r
rare,Synchronization,,Synchronization,\r
rare,Tall,,Tall,\r
rare,Taming,,Taming,\r
rare,Targeted,,Targeted,\r
rare,Tarnished,,Tarnished,\r
rare,Tears,,Tears,\r
rare,Tedium,,Tedium,\r
rare,Teleportation,,Teleportation,\r
rare,Temptation,,Temptation,\r
rare,Tending,,Tending,\r
rare,Testing,,Testing,\r
rare,Thirst,,Thirst,\r
rare,Thrift,,Thrift,\r
rare,Timing,,Timing,\r
rare,Torture,,Torture,\r
rare,Toxic,,Toxic,\r
rare,Toying,,Toying,\r
rare,Tragedy,,Tragedy,\r
rare,Tranquillity,,Tranquillity,\r
rare,Transfiguration,,Transfiguration,\r
rare,Transmutation,,Transmutation,\r
rare,Transportation,,Transportation,\r
rare,Trapping,,Trapping,\r
rare,Travel,,Travel,\r
rare,Treason,,Treason,\r
rare,Tremors,,Tremors,\r
rare,Trials,,Trials,\r
rare,Trickery,,Trickery,\r
rare,Triumph,,Triumph,\r
rare,Trust,,Trust,\r
rare,Truth,,Truth,\r
rare,Tunneling,,Tunneling,\r
rare,Twins,,Twins,\r
rare,Twisted,,Twisted,\r
rare,Tying,,Tying,\r
rare,Understanding,,Understanding,\r
rare,Undoing,,Undoing,\r
rare,Unexpected,,Unexpected,\r
rare,Vagabond,,Vagabond,\r
rare,Vagabonds,,Vagabonds,\r
rare,Validation,,Validation,\r
rare,Valuable,,Valuable,\r
rare,Vampiric,,Vampiric,\r
rare,Vanguard,,Vanguard,\r
rare,Vanity,,Vanity,\r
rare,Vapor,,Vapor,\r
rare,Veils,,Veils,\r
rare,Veracity,,Veracity,\r
rare,Vestiture,,Vestiture,\r
rare,Victimization,,Victimization,\r
rare,Vile,,Vile,\r
rare,Vines,,Vines,\r
rare,Violence,,Violence,\r
rare,Vision,,Vision,\r
rare,Vitality,,Vitality,\r
rare,Voyage,,Voyage,\r
rare,Wading,,Wading,\r
rare,Wails,,Wails,\r
rare,Wakening,,Wakening,\r
rare,Wandering,,Wandering,\r
rare,Warmth,,Warmth,\r
rare,Warped,,Warped,\r
rare,Waste,,Waste,\r
rare,Water,,Water,\r
rare,Weather,,Weather,\r
rare,Weeds,,Weeds,\r
rare,Weighty,,Weighty,\r
rare,Welding,,Welding,\r
rare,Wellness,,Wellness,\r
rare,Werebeast,,Werebeast,\r
rare,Werewolf,,Werewolf,\r
rare,Whimsy,,Whimsy,\r
rare,Wide,,Wide,\r
rare,Wild,,Wild,\r
rare,Wilderness,,Wilderness,\r
rare,Wind,,Wind,\r
rare,Wisdom,,Wisdom,\r
rare,undefined,,undefined,\r
rare,Wishes,,Wishes,\r
rare,Withering,,Withering,\r
rare,Wizards,,Wizards,\r
rare,Worship,,Worship,\r
rare,Wrestling,,Wrestling,\r
rare,Xenophobia,,Xenophobia,\r
rare,Youth,,Youth,\r
rare,Adoring,,Adoring,`,$L={width:"20em"};function UL(){k.useContext(Tt);const[t,e]=k.useState(""),[n,r]=k.useState(!1);async function i(s){s.preventDefault(),r(!0);const o=by(OL),a=by(FL),l={item:il(o)[1],prefix:null,suffix:null},[u,c]=il(a),d=My(c);console.log("First picked attribute is "+String(d));const h=Oy(d);if(h.type=="prefix"?l.prefix=h.value:h.type=="suffix"&&(l.suffix=h.value),VL()){const C=l.prefix!=null,p=l.suffix!=null,f=a.filter(N=>{const M=BL(N);let Z=!0;return C&&(Z=M.suffix_1!=""||M.suffix_2!=null),p&&(Z=M.prefix_1!=""||M.prefix_2!=null),Z});console.log(C),console.log(p);const[m,w]=il(f,[u]),I=My(w);console.log("First picked attribute is "+String(d)),console.log("Second picked attribute is "+String(I));const x=Oy(I,C,p);x.type=="prefix"?l.prefix=x.value:x.type=="suffix"&&(l.suffix=x.value)}const y=l.prefix!=null?l.prefix+" ":"",v=l.suffix!=null?" of "+l.suffix:"";e("The "+y+l.item+v),r(!1)}return he("form",{children:[S("div",{className:"gapdiv",children:S("button",{type:"submit",onClick:i,children:"Generate an item"})}),n?S("img",{height:"25rem",width:"25rem",src:Yw}):S("div",{className:"gapdiv",children:S("input",{style:$L,type:"text",value:t,readOnly:!0})})]})}function My(t){return t.split(",").map(e=>e.replace("\r",""))}function BL(t){const e=t.split(",").map(n=>n.replace("\r",""));return{rarity:e[0],prefix_1:e[1],prefix_2:e[2],suffix_1:e[3],suffix_2:e[4]}}function by(t){const e=t.split(`
`);return e.shift(),e}function VL(t){const e=[...Array(9).fill(!1),!0];return e[Ju(0,e.length-1)]}function Oy(t,e=!1,n=!1){const r={rarity:t[0].replace("\r",""),prefix_1:t[1].replace("\r",""),prefix_2:t[2].replace("\r",""),suffix_1:t[3].replace("\r",""),suffix_2:t[4].replace("\r","")},i=[];return e||(r.prefix_1!=""&&i.push({type:"prefix",value:r.prefix_1}),r.prefix_2!=""&&i.push({type:"prefix",value:r.prefix_2})),n||(r.suffix_1!=""&&i.push({type:"suffix",value:r.suffix_1}),r.suffix_2!=""&&i.push({type:"suffix",value:r.suffix_2})),il(i)[1]}function jL(){return he(Lt,{children:[S(zL,{}),S("br",{}),S(HL,{}),S("br",{}),S(UL,{})]})}function zL(){const[t,e]=k.useState(""),[n,r]=k.useState(20);function i(a){a.preventDefault();const l=Ju(1,n);e(l)}const s={width:"2em",textAlign:"center"},o=GL(2,20);return S(Lt,{children:he("form",{children:[S("label",{htmlFor:"die_size_selector",children:"Die Size:"})," ",S("select",{id:"die_size_selector",name:"die_size",value:n,onChange:a=>r(a.target.value),children:o.map(a=>S("option",{value:a,children:a},a))})," ",S("button",{type:"submit",onClick:i,children:"Roll the Die"})," ",S("input",{type:"text",style:s,value:t,readOnly:!0})]})})}function HL(){const[t,e]=k.useState("");function n(i){i.preventDefault(),e(WL())}return he("form",{children:[S("button",{type:"submit",onClick:n,children:"Pick a Card"}),S("input",{type:"text",style:{textAlign:"center",marginLeft:"1em",width:"8em"},value:t,readOnly:!0})]})}function WL(){const t=["Spades","Hearts","Clubs","Diamonds"],e=["Ace",...Array.from({length:9},(r,i)=>i+2),"Jack","Queen","King"],n=[];return t.forEach(r=>{e.forEach(i=>{n.push(i+" of "+r)})}),n.push("Black Joker"),n.push("Red Joker"),n[Ju(0,n.length-1)]}function Ju(t,e){return Math.floor(Math.random()*(e-t+1))+t}function il(t,e=[]){let n=Fy(t);for(;e.includes(n);)n=Fy(t);return[n,t[n]]}function Fy(t){return Ju(0,t.length-1)}function GL(t,e){return Array.from({length:e-t+1},(n,r)=>t+r*1)}const KL=AT([{path:"/",element:S(AL,{}),errorElement:S(xL,{}),children:[{path:"/",element:S(gs,{page_title:"Generator",children:S(jL,{})})},{path:"data_manager",element:S(gs,{page_title:"Data Manager",children:S(PL,{})})},{path:"npc_generator",element:S(gs,{page_title:"NPC Generator",children:S(LL,{})})},{path:"character_tracker",element:S(gs,{page_title:"Character Tracker",children:S(ML,{})})},{path:"account_info",element:S(gs,{page_title:"Account Info",children:S(IL,{})})}]}]);eh.createRoot(document.getElementById("root")).render(S(Pd.StrictMode,{children:S(vT,{router:KL})}));
