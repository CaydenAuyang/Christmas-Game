(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Kg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function S_(s){if(Object.prototype.hasOwnProperty.call(s,"__esModule"))return s;var e=s.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(s).forEach(function(i){var o=Object.getOwnPropertyDescriptor(s,i);Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:function(){return s[i]}})}),t}var Xu={exports:{}},Zo={},qu={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function M_(){if(Gp)return At;Gp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),d=Symbol.iterator;function _(z){return z===null||typeof z!="object"?null:(z=d&&z[d]||z["@@iterator"],typeof z=="function"?z:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function x(z,le,Ve){this.props=z,this.context=le,this.refs=E,this.updater=Ve||y}x.prototype.isReactComponent={},x.prototype.setState=function(z,le){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,le,"setState")},x.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function S(){}S.prototype=x.prototype;function C(z,le,Ve){this.props=z,this.context=le,this.refs=E,this.updater=Ve||y}var P=C.prototype=new S;P.constructor=C,w(P,x.prototype),P.isPureReactComponent=!0;var D=Array.isArray,V=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function q(z,le,Ve){var re,ye={},Re=null,Ee=null;if(le!=null)for(re in le.ref!==void 0&&(Ee=le.ref),le.key!==void 0&&(Re=""+le.key),le)V.call(le,re)&&!F.hasOwnProperty(re)&&(ye[re]=le[re]);var $e=arguments.length-2;if($e===1)ye.children=Ve;else if(1<$e){for(var Ye=Array($e),ee=0;ee<$e;ee++)Ye[ee]=arguments[ee+2];ye.children=Ye}if(z&&z.defaultProps)for(re in $e=z.defaultProps,$e)ye[re]===void 0&&(ye[re]=$e[re]);return{$$typeof:s,type:z,key:Re,ref:Ee,props:ye,_owner:O.current}}function U(z,le){return{$$typeof:s,type:z.type,key:le,ref:z.ref,props:z.props,_owner:z._owner}}function L(z){return typeof z=="object"&&z!==null&&z.$$typeof===s}function ne(z){var le={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Ve){return le[Ve]})}var ae=/\/+/g;function j(z,le){return typeof z=="object"&&z!==null&&z.key!=null?ne(""+z.key):le.toString(36)}function oe(z,le,Ve,re,ye){var Re=typeof z;(Re==="undefined"||Re==="boolean")&&(z=null);var Ee=!1;if(z===null)Ee=!0;else switch(Re){case"string":case"number":Ee=!0;break;case"object":switch(z.$$typeof){case s:case e:Ee=!0}}if(Ee)return Ee=z,ye=ye(Ee),z=re===""?"."+j(Ee,0):re,D(ye)?(Ve="",z!=null&&(Ve=z.replace(ae,"$&/")+"/"),oe(ye,le,Ve,"",function(ee){return ee})):ye!=null&&(L(ye)&&(ye=U(ye,Ve+(!ye.key||Ee&&Ee.key===ye.key?"":(""+ye.key).replace(ae,"$&/")+"/")+z)),le.push(ye)),1;if(Ee=0,re=re===""?".":re+":",D(z))for(var $e=0;$e<z.length;$e++){Re=z[$e];var Ye=re+j(Re,$e);Ee+=oe(Re,le,Ve,Ye,ye)}else if(Ye=_(z),typeof Ye=="function")for(z=Ye.call(z),$e=0;!(Re=z.next()).done;)Re=Re.value,Ye=re+j(Re,$e++),Ee+=oe(Re,le,Ve,Ye,ye);else if(Re==="object")throw le=String(z),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return Ee}function he(z,le,Ve){if(z==null)return z;var re=[],ye=0;return oe(z,re,"","",function(Re){return le.call(Ve,Re,ye++)}),re}function _e(z){if(z._status===-1){var le=z._result;le=le(),le.then(function(Ve){(z._status===0||z._status===-1)&&(z._status=1,z._result=Ve)},function(Ve){(z._status===0||z._status===-1)&&(z._status=2,z._result=Ve)}),z._status===-1&&(z._status=0,z._result=le)}if(z._status===1)return z._result.default;throw z._result}var de={current:null},G={transition:null},ue={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:G,ReactCurrentOwner:O};function te(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:he,forEach:function(z,le,Ve){he(z,function(){le.apply(this,arguments)},Ve)},count:function(z){var le=0;return he(z,function(){le++}),le},toArray:function(z){return he(z,function(le){return le})||[]},only:function(z){if(!L(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},At.Component=x,At.Fragment=t,At.Profiler=o,At.PureComponent=C,At.StrictMode=i,At.Suspense=p,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,At.act=te,At.cloneElement=function(z,le,Ve){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var re=w({},z.props),ye=z.key,Re=z.ref,Ee=z._owner;if(le!=null){if(le.ref!==void 0&&(Re=le.ref,Ee=O.current),le.key!==void 0&&(ye=""+le.key),z.type&&z.type.defaultProps)var $e=z.type.defaultProps;for(Ye in le)V.call(le,Ye)&&!F.hasOwnProperty(Ye)&&(re[Ye]=le[Ye]===void 0&&$e!==void 0?$e[Ye]:le[Ye])}var Ye=arguments.length-2;if(Ye===1)re.children=Ve;else if(1<Ye){$e=Array(Ye);for(var ee=0;ee<Ye;ee++)$e[ee]=arguments[ee+2];re.children=$e}return{$$typeof:s,type:z.type,key:ye,ref:Re,props:re,_owner:Ee}},At.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:l,_context:z},z.Consumer=z},At.createElement=q,At.createFactory=function(z){var le=q.bind(null,z);return le.type=z,le},At.createRef=function(){return{current:null}},At.forwardRef=function(z){return{$$typeof:f,render:z}},At.isValidElement=L,At.lazy=function(z){return{$$typeof:m,_payload:{_status:-1,_result:z},_init:_e}},At.memo=function(z,le){return{$$typeof:h,type:z,compare:le===void 0?null:le}},At.startTransition=function(z){var le=G.transition;G.transition={};try{z()}finally{G.transition=le}},At.unstable_act=te,At.useCallback=function(z,le){return de.current.useCallback(z,le)},At.useContext=function(z){return de.current.useContext(z)},At.useDebugValue=function(){},At.useDeferredValue=function(z){return de.current.useDeferredValue(z)},At.useEffect=function(z,le){return de.current.useEffect(z,le)},At.useId=function(){return de.current.useId()},At.useImperativeHandle=function(z,le,Ve){return de.current.useImperativeHandle(z,le,Ve)},At.useInsertionEffect=function(z,le){return de.current.useInsertionEffect(z,le)},At.useLayoutEffect=function(z,le){return de.current.useLayoutEffect(z,le)},At.useMemo=function(z,le){return de.current.useMemo(z,le)},At.useReducer=function(z,le,Ve){return de.current.useReducer(z,le,Ve)},At.useRef=function(z){return de.current.useRef(z)},At.useState=function(z){return de.current.useState(z)},At.useSyncExternalStore=function(z,le,Ve){return de.current.useSyncExternalStore(z,le,Ve)},At.useTransition=function(){return de.current.useTransition()},At.version="18.3.1",At}var Wp;function nh(){return Wp||(Wp=1,qu.exports=M_()),qu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function w_(){if($p)return Zo;$p=1;var s=nh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,h){var m,d={},_=null,y=null;h!==void 0&&(_=""+h),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(y=p.ref);for(m in p)i.call(p,m)&&!l.hasOwnProperty(m)&&(d[m]=p[m]);if(f&&f.defaultProps)for(m in p=f.defaultProps,p)d[m]===void 0&&(d[m]=p[m]);return{$$typeof:e,type:f,key:_,ref:y,props:d,_owner:o.current}}return Zo.Fragment=t,Zo.jsx=u,Zo.jsxs=u,Zo}var Xp;function E_(){return Xp||(Xp=1,Xu.exports=w_()),Xu.exports}var He=E_(),hi=nh();const T_=Kg(hi);var wl={},ju={exports:{}},Wn={},Yu={exports:{}},Ku={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function A_(){return qp||(qp=1,(function(s){function e(G,ue){var te=G.length;G.push(ue);e:for(;0<te;){var z=te-1>>>1,le=G[z];if(0<o(le,ue))G[z]=ue,G[te]=le,te=z;else break e}}function t(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var ue=G[0],te=G.pop();if(te!==ue){G[0]=te;e:for(var z=0,le=G.length,Ve=le>>>1;z<Ve;){var re=2*(z+1)-1,ye=G[re],Re=re+1,Ee=G[Re];if(0>o(ye,te))Re<le&&0>o(Ee,ye)?(G[z]=Ee,G[Re]=te,z=Re):(G[z]=ye,G[re]=te,z=re);else if(Re<le&&0>o(Ee,te))G[z]=Ee,G[Re]=te,z=Re;else break e}}return ue}function o(G,ue){var te=G.sortIndex-ue.sortIndex;return te!==0?te:G.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var p=[],h=[],m=1,d=null,_=3,y=!1,w=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(G){for(var ue=t(h);ue!==null;){if(ue.callback===null)i(h);else if(ue.startTime<=G)i(h),ue.sortIndex=ue.expirationTime,e(p,ue);else break;ue=t(h)}}function D(G){if(E=!1,P(G),!w)if(t(p)!==null)w=!0,_e(V);else{var ue=t(h);ue!==null&&de(D,ue.startTime-G)}}function V(G,ue){w=!1,E&&(E=!1,S(q),q=-1),y=!0;var te=_;try{for(P(ue),d=t(p);d!==null&&(!(d.expirationTime>ue)||G&&!ne());){var z=d.callback;if(typeof z=="function"){d.callback=null,_=d.priorityLevel;var le=z(d.expirationTime<=ue);ue=s.unstable_now(),typeof le=="function"?d.callback=le:d===t(p)&&i(p),P(ue)}else i(p);d=t(p)}if(d!==null)var Ve=!0;else{var re=t(h);re!==null&&de(D,re.startTime-ue),Ve=!1}return Ve}finally{d=null,_=te,y=!1}}var O=!1,F=null,q=-1,U=5,L=-1;function ne(){return!(s.unstable_now()-L<U)}function ae(){if(F!==null){var G=s.unstable_now();L=G;var ue=!0;try{ue=F(!0,G)}finally{ue?j():(O=!1,F=null)}}else O=!1}var j;if(typeof C=="function")j=function(){C(ae)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,he=oe.port2;oe.port1.onmessage=ae,j=function(){he.postMessage(null)}}else j=function(){x(ae,0)};function _e(G){F=G,O||(O=!0,j())}function de(G,ue){q=x(function(){G(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){w||y||(w=!0,_e(V))},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(G){switch(_){case 1:case 2:case 3:var ue=3;break;default:ue=_}var te=_;_=ue;try{return G()}finally{_=te}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,ue){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var te=_;_=G;try{return ue()}finally{_=te}},s.unstable_scheduleCallback=function(G,ue,te){var z=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?z+te:z):te=z,G){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=te+le,G={id:m++,callback:ue,priorityLevel:G,startTime:te,expirationTime:le,sortIndex:-1},te>z?(G.sortIndex=te,e(h,G),t(p)===null&&G===t(h)&&(E?(S(q),q=-1):E=!0,de(D,te-z))):(G.sortIndex=le,e(p,G),w||y||(w=!0,_e(V))),G},s.unstable_shouldYield=ne,s.unstable_wrapCallback=function(G){var ue=_;return function(){var te=_;_=ue;try{return G.apply(this,arguments)}finally{_=te}}}})(Ku)),Ku}var jp;function C_(){return jp||(jp=1,Yu.exports=A_()),Yu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function R_(){if(Yp)return Wn;Yp=1;var s=nh(),e=C_();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(o[n]=r,n=0;n<r.length;n++)i.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},d={};function _(n){return p.call(d,n)?!0:p.call(m,n)?!1:h.test(n)?d[n]=!0:(m[n]=!0,!1)}function y(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,r,a,c){if(r===null||typeof r>"u"||y(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,a,c,g,M,R){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=g,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=M,this.removeEmptyString=R}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];x[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,C);x[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,C);x[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,C);x[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,r,a,c){var g=x.hasOwnProperty(r)?x[r]:null;(g!==null?g.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(w(r,a,g,c)&&(a=null),c||g===null?_(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):g.mustUseProperty?n[g.propertyName]=a===null?g.type===3?!1:"":a:(r=g.attributeName,c=g.attributeNamespace,a===null?n.removeAttribute(r):(g=g.type,a=g===3||g===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),ne=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),G=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,z;function le(n){if(z===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);z=r&&r[1]||""}return`
`+z+n}var Ve=!1;function re(n,r){if(!n||Ve)return"";Ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ce){var c=ce}Reflect.construct(n,[],r)}else{try{r.call()}catch(ce){c=ce}n.call(r.prototype)}else{try{throw Error()}catch(ce){c=ce}n()}}catch(ce){if(ce&&c&&typeof ce.stack=="string"){for(var g=ce.stack.split(`
`),M=c.stack.split(`
`),R=g.length-1,k=M.length-1;1<=R&&0<=k&&g[R]!==M[k];)k--;for(;1<=R&&0<=k;R--,k--)if(g[R]!==M[k]){if(R!==1||k!==1)do if(R--,k--,0>k||g[R]!==M[k]){var W=`
`+g[R].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=R&&0<=k);break}}}finally{Ve=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?le(n):""}function ye(n){switch(n.tag){case 5:return le(n.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return n=re(n.type,!1),n;case 11:return n=re(n.type.render,!1),n;case 1:return n=re(n.type,!0),n;default:return""}}function Re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case O:return"Portal";case U:return"Profiler";case q:return"StrictMode";case j:return"Suspense";case oe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ne:return(n.displayName||"Context")+".Consumer";case L:return(n._context.displayName||"Context")+".Provider";case ae:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return r=n.displayName||null,r!==null?r:Re(n.type)||"Memo";case _e:r=n._payload,n=n._init;try{return Re(n(r))}catch{}}return null}function Ee(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(r);case 8:return r===q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function $e(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ye(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ee(n){var r=Ye(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var g=a.get,M=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return g.call(this)},set:function(R){c=""+R,M.call(this,R)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(R){c=""+R},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Lt(n){n._valueTracker||(n._valueTracker=ee(n))}function it(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Ye(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function ht(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function st(n,r){var a=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function wt(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=$e(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function vt(n,r){r=r.checked,r!=null&&P(n,"checked",r,!1)}function _t(n,r){vt(n,r);var a=$e(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?B(n,r.type,a):r.hasOwnProperty("defaultValue")&&B(n,r.type,$e(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ot(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function B(n,r,a){(r!=="number"||ht(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var N=Array.isArray;function fe(n,r,a,c){if(n=n.options,r){r={};for(var g=0;g<a.length;g++)r["$"+a[g]]=!0;for(a=0;a<n.length;a++)g=r.hasOwnProperty("$"+n[a].value),n[a].selected!==g&&(n[a].selected=g),g&&c&&(n[a].defaultSelected=!0)}else{for(a=""+$e(a),r=null,g=0;g<n.length;g++){if(n[g].value===a){n[g].selected=!0,c&&(n[g].defaultSelected=!0);return}r!==null||n[g].disabled||(r=n[g])}r!==null&&(r.selected=!0)}}function xe(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ce(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(N(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:$e(a)}}function Pe(n,r){var a=$e(r.value),c=$e(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function tt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ke(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Fe(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var dt,Ne=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,g){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,g)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(dt=dt||document.createElement("div"),dt.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=dt.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ke(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var xt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ot=["Webkit","ms","Moz","O"];Object.keys(xt).forEach(function(n){ot.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),xt[r]=xt[n]})});function We(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||xt.hasOwnProperty(n)&&xt[n]?(""+r).trim():r+"px"}function ut(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,g=We(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,g):n[a]=g}}var Et=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zt(n,r){if(r){if(Et[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function pt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var J=null;function Se(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ge=null,Ue=null,ze=null;function Tt(n){if(n=Fo(n)){if(typeof ge!="function")throw Error(t(280));var r=n.stateNode;r&&(r=ka(r),ge(n.stateNode,n.type,r))}}function It(n){Ue?ze?ze.push(n):ze=[n]:Ue=n}function Ft(){if(Ue){var n=Ue,r=ze;if(ze=Ue=null,Tt(n),r)for(n=0;n<r.length;n++)Tt(r[n])}}function rn(n,r){return n(r)}function Rt(){}var Bt=!1;function on(n,r,a){if(Bt)return n(r,a);Bt=!0;try{return rn(n,r,a)}finally{Bt=!1,(Ue!==null||ze!==null)&&(Rt(),Ft())}}function wn(n,r){var a=n.stateNode;if(a===null)return null;var c=ka(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var Pi=!1;if(f)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){Pi=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{Pi=!1}function lr(n,r,a,c,g,M,R,k,W){var ce=Array.prototype.slice.call(arguments,3);try{r.apply(a,ce)}catch(Te){this.onError(Te)}}var T=!1,v=null,A=!1,I=null,Z={onError:function(n){T=!0,v=n}};function ve(n,r,a,c,g,M,R,k,W){T=!1,v=null,lr.apply(Z,arguments)}function Qe(n,r,a,c,g,M,R,k,W){if(ve.apply(this,arguments),T){if(T){var ce=v;T=!1,v=null}else throw Error(t(198));A||(A=!0,I=ce)}}function b(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function $(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Q(n){if(b(n)!==n)throw Error(t(188))}function X(n){var r=n.alternate;if(!r){if(r=b(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var g=a.return;if(g===null)break;var M=g.alternate;if(M===null){if(c=g.return,c!==null){a=c;continue}break}if(g.child===M.child){for(M=g.child;M;){if(M===a)return Q(g),n;if(M===c)return Q(g),r;M=M.sibling}throw Error(t(188))}if(a.return!==c.return)a=g,c=M;else{for(var R=!1,k=g.child;k;){if(k===a){R=!0,a=g,c=M;break}if(k===c){R=!0,c=g,a=M;break}k=k.sibling}if(!R){for(k=M.child;k;){if(k===a){R=!0,a=M,c=g;break}if(k===c){R=!0,c=M,a=g;break}k=k.sibling}if(!R)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function K(n){return n=X(n),n!==null?pe(n):null}function pe(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=pe(n);if(r!==null)return r;n=n.sibling}return null}var Ae=e.unstable_scheduleCallback,Me=e.unstable_cancelCallback,De=e.unstable_shouldYield,me=e.unstable_requestPaint,be=e.unstable_now,rt=e.unstable_getCurrentPriorityLevel,mt=e.unstable_ImmediatePriority,nt=e.unstable_UserBlockingPriority,at=e.unstable_NormalPriority,an=e.unstable_LowPriority,yt=e.unstable_IdlePriority,et=null,Pt=null;function gt(n){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(et,n,void 0,(n.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:kn,Fn=Math.log,pi=Math.LN2;function kn(n){return n>>>=0,n===0?32:31-(Fn(n)/pi|0)|0}var Ht=64,Xn=4194304;function Vi(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function xn(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,g=n.suspendedLanes,M=n.pingedLanes,R=a&268435455;if(R!==0){var k=R&~g;k!==0?c=Vi(k):(M&=R,M!==0&&(c=Vi(M)))}else R=a&~g,R!==0?c=Vi(R):M!==0&&(c=Vi(M));if(c===0)return 0;if(r!==0&&r!==c&&(r&g)===0&&(g=c&-c,M=r&-r,g>=M||g===16&&(M&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-jt(r),g=1<<a,c|=n[a],r&=~g;return c}function yo(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dc(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,g=n.expirationTimes,M=n.pendingLanes;0<M;){var R=31-jt(M),k=1<<R,W=g[R];W===-1?((k&a)===0||(k&c)!==0)&&(g[R]=yo(k,r)):W<=r&&(n.expiredLanes|=k),M&=~k}}function _s(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function xh(){var n=Ht;return Ht<<=1,(Ht&4194240)===0&&(Ht=64),n}function pc(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function xo(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-jt(r),n[r]=a}function V0(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var g=31-jt(a),M=1<<g;r[g]=0,c[g]=-1,n[g]=-1,a&=~M}}function mc(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-jt(a),g=1<<c;g&r|n[c]&r&&(n[c]|=r),a&=~g}}var Ut=0;function Sh(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Mh,gc,wh,Eh,Th,vc=!1,wa=[],cr=null,ur=null,fr=null,So=new Map,Mo=new Map,hr=[],G0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ah(n,r){switch(n){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":So.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(r.pointerId)}}function wo(n,r,a,c,g,M){return n===null||n.nativeEvent!==M?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:M,targetContainers:[g]},r!==null&&(r=Fo(r),r!==null&&gc(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,g!==null&&r.indexOf(g)===-1&&r.push(g),n)}function W0(n,r,a,c,g){switch(r){case"focusin":return cr=wo(cr,n,r,a,c,g),!0;case"dragenter":return ur=wo(ur,n,r,a,c,g),!0;case"mouseover":return fr=wo(fr,n,r,a,c,g),!0;case"pointerover":var M=g.pointerId;return So.set(M,wo(So.get(M)||null,n,r,a,c,g)),!0;case"gotpointercapture":return M=g.pointerId,Mo.set(M,wo(Mo.get(M)||null,n,r,a,c,g)),!0}return!1}function Ch(n){var r=Vr(n.target);if(r!==null){var a=b(r);if(a!==null){if(r=a.tag,r===13){if(r=$(a),r!==null){n.blockedOn=r,Th(n.priority,function(){wh(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ea(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=yc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);J=c,a.target.dispatchEvent(c),J=null}else return r=Fo(a),r!==null&&gc(r),n.blockedOn=a,!1;r.shift()}return!0}function Rh(n,r,a){Ea(n)&&a.delete(r)}function $0(){vc=!1,cr!==null&&Ea(cr)&&(cr=null),ur!==null&&Ea(ur)&&(ur=null),fr!==null&&Ea(fr)&&(fr=null),So.forEach(Rh),Mo.forEach(Rh)}function Eo(n,r){n.blockedOn===r&&(n.blockedOn=null,vc||(vc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$0)))}function To(n){function r(g){return Eo(g,n)}if(0<wa.length){Eo(wa[0],n);for(var a=1;a<wa.length;a++){var c=wa[a];c.blockedOn===n&&(c.blockedOn=null)}}for(cr!==null&&Eo(cr,n),ur!==null&&Eo(ur,n),fr!==null&&Eo(fr,n),So.forEach(r),Mo.forEach(r),a=0;a<hr.length;a++)c=hr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<hr.length&&(a=hr[0],a.blockedOn===null);)Ch(a),a.blockedOn===null&&hr.shift()}var ys=D.ReactCurrentBatchConfig,Ta=!0;function X0(n,r,a,c){var g=Ut,M=ys.transition;ys.transition=null;try{Ut=1,_c(n,r,a,c)}finally{Ut=g,ys.transition=M}}function q0(n,r,a,c){var g=Ut,M=ys.transition;ys.transition=null;try{Ut=4,_c(n,r,a,c)}finally{Ut=g,ys.transition=M}}function _c(n,r,a,c){if(Ta){var g=yc(n,r,a,c);if(g===null)Oc(n,r,c,Aa,a),Ah(n,c);else if(W0(g,n,r,a,c))c.stopPropagation();else if(Ah(n,c),r&4&&-1<G0.indexOf(n)){for(;g!==null;){var M=Fo(g);if(M!==null&&Mh(M),M=yc(n,r,a,c),M===null&&Oc(n,r,c,Aa,a),M===g)break;g=M}g!==null&&c.stopPropagation()}else Oc(n,r,c,null,a)}}var Aa=null;function yc(n,r,a,c){if(Aa=null,n=Se(c),n=Vr(n),n!==null)if(r=b(n),r===null)n=null;else if(a=r.tag,a===13){if(n=$(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Aa=n,null}function Ph(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rt()){case mt:return 1;case nt:return 4;case at:case an:return 16;case yt:return 536870912;default:return 16}default:return 16}}var dr=null,xc=null,Ca=null;function bh(){if(Ca)return Ca;var n,r=xc,a=r.length,c,g="value"in dr?dr.value:dr.textContent,M=g.length;for(n=0;n<a&&r[n]===g[n];n++);var R=a-n;for(c=1;c<=R&&r[a-c]===g[M-c];c++);return Ca=g.slice(n,1<c?1-c:void 0)}function Ra(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Pa(){return!0}function Lh(){return!1}function qn(n){function r(a,c,g,M,R){this._reactName=a,this._targetInst=g,this.type=c,this.nativeEvent=M,this.target=R,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(a=n[k],this[k]=a?a(M):M[k]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Pa:Lh,this.isPropagationStopped=Lh,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),r}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sc=qn(xs),Ao=te({},xs,{view:0,detail:0}),j0=qn(Ao),Mc,wc,Co,ba=te({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Co&&(Co&&n.type==="mousemove"?(Mc=n.screenX-Co.screenX,wc=n.screenY-Co.screenY):wc=Mc=0,Co=n),Mc)},movementY:function(n){return"movementY"in n?n.movementY:wc}}),Dh=qn(ba),Y0=te({},ba,{dataTransfer:0}),K0=qn(Y0),J0=te({},Ao,{relatedTarget:0}),Ec=qn(J0),Z0=te({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),Q0=qn(Z0),ev=te({},xs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),tv=qn(ev),nv=te({},xs,{data:0}),Ih=qn(nv),iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ov(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=sv[n])?!!r[n]:!1}function Tc(){return ov}var av=te({},Ao,{key:function(n){if(n.key){var r=iv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ra(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?rv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(n){return n.type==="keypress"?Ra(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ra(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),lv=qn(av),cv=te({},ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nh=qn(cv),uv=te({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),fv=qn(uv),hv=te({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),dv=qn(hv),pv=te({},ba,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),mv=qn(pv),gv=[9,13,27,32],Ac=f&&"CompositionEvent"in window,Ro=null;f&&"documentMode"in document&&(Ro=document.documentMode);var vv=f&&"TextEvent"in window&&!Ro,Uh=f&&(!Ac||Ro&&8<Ro&&11>=Ro),Oh=" ",Fh=!1;function kh(n,r){switch(n){case"keyup":return gv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ss=!1;function _v(n,r){switch(n){case"compositionend":return zh(r);case"keypress":return r.which!==32?null:(Fh=!0,Oh);case"textInput":return n=r.data,n===Oh&&Fh?null:n;default:return null}}function yv(n,r){if(Ss)return n==="compositionend"||!Ac&&kh(n,r)?(n=bh(),Ca=xc=dr=null,Ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Uh&&r.locale!=="ko"?null:r.data;default:return null}}var xv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!xv[n.type]:r==="textarea"}function Hh(n,r,a,c){It(c),r=Ua(r,"onChange"),0<r.length&&(a=new Sc("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Po=null,bo=null;function Sv(n){sd(n,0)}function La(n){var r=As(n);if(it(r))return n}function Mv(n,r){if(n==="change")return r}var Vh=!1;if(f){var Cc;if(f){var Rc="oninput"in document;if(!Rc){var Gh=document.createElement("div");Gh.setAttribute("oninput","return;"),Rc=typeof Gh.oninput=="function"}Cc=Rc}else Cc=!1;Vh=Cc&&(!document.documentMode||9<document.documentMode)}function Wh(){Po&&(Po.detachEvent("onpropertychange",$h),bo=Po=null)}function $h(n){if(n.propertyName==="value"&&La(bo)){var r=[];Hh(r,bo,n,Se(n)),on(Sv,r)}}function wv(n,r,a){n==="focusin"?(Wh(),Po=r,bo=a,Po.attachEvent("onpropertychange",$h)):n==="focusout"&&Wh()}function Ev(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return La(bo)}function Tv(n,r){if(n==="click")return La(r)}function Av(n,r){if(n==="input"||n==="change")return La(r)}function Cv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var mi=typeof Object.is=="function"?Object.is:Cv;function Lo(n,r){if(mi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var g=a[c];if(!p.call(r,g)||!mi(n[g],r[g]))return!1}return!0}function Xh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function qh(n,r){var a=Xh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xh(a)}}function jh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?jh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Yh(){for(var n=window,r=ht();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=ht(n.document)}return r}function Pc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Rv(n){var r=Yh(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&jh(a.ownerDocument.documentElement,a)){if(c!==null&&Pc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var g=a.textContent.length,M=Math.min(c.start,g);c=c.end===void 0?M:Math.min(c.end,g),!n.extend&&M>c&&(g=c,c=M,M=g),g=qh(a,M);var R=qh(a,c);g&&R&&(n.rangeCount!==1||n.anchorNode!==g.node||n.anchorOffset!==g.offset||n.focusNode!==R.node||n.focusOffset!==R.offset)&&(r=r.createRange(),r.setStart(g.node,g.offset),n.removeAllRanges(),M>c?(n.addRange(r),n.extend(R.node,R.offset)):(r.setEnd(R.node,R.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Pv=f&&"documentMode"in document&&11>=document.documentMode,Ms=null,bc=null,Do=null,Lc=!1;function Kh(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lc||Ms==null||Ms!==ht(c)||(c=Ms,"selectionStart"in c&&Pc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Do&&Lo(Do,c)||(Do=c,c=Ua(bc,"onSelect"),0<c.length&&(r=new Sc("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Ms)))}function Da(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var ws={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},Dc={},Jh={};f&&(Jh=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Ia(n){if(Dc[n])return Dc[n];if(!ws[n])return n;var r=ws[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Jh)return Dc[n]=r[a];return n}var Zh=Ia("animationend"),Qh=Ia("animationiteration"),ed=Ia("animationstart"),td=Ia("transitionend"),nd=new Map,id="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(n,r){nd.set(n,r),l(r,[n])}for(var Ic=0;Ic<id.length;Ic++){var Nc=id[Ic],bv=Nc.toLowerCase(),Lv=Nc[0].toUpperCase()+Nc.slice(1);pr(bv,"on"+Lv)}pr(Zh,"onAnimationEnd"),pr(Qh,"onAnimationIteration"),pr(ed,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(td,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function rd(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Qe(c,r,void 0,n),n.currentTarget=null}function sd(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],g=c.event;c=c.listeners;e:{var M=void 0;if(r)for(var R=c.length-1;0<=R;R--){var k=c[R],W=k.instance,ce=k.currentTarget;if(k=k.listener,W!==M&&g.isPropagationStopped())break e;rd(g,k,ce),M=W}else for(R=0;R<c.length;R++){if(k=c[R],W=k.instance,ce=k.currentTarget,k=k.listener,W!==M&&g.isPropagationStopped())break e;rd(g,k,ce),M=W}}}if(A)throw n=I,A=!1,I=null,n}function Wt(n,r){var a=r[Vc];a===void 0&&(a=r[Vc]=new Set);var c=n+"__bubble";a.has(c)||(od(r,n,2,!1),a.add(c))}function Uc(n,r,a){var c=0;r&&(c|=4),od(a,n,c,r)}var Na="_reactListening"+Math.random().toString(36).slice(2);function No(n){if(!n[Na]){n[Na]=!0,i.forEach(function(a){a!=="selectionchange"&&(Dv.has(a)||Uc(a,!1,n),Uc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Na]||(r[Na]=!0,Uc("selectionchange",!1,r))}}function od(n,r,a,c){switch(Ph(r)){case 1:var g=X0;break;case 4:g=q0;break;default:g=_c}a=g.bind(null,r,a,n),g=void 0,!Pi||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(g=!0),c?g!==void 0?n.addEventListener(r,a,{capture:!0,passive:g}):n.addEventListener(r,a,!0):g!==void 0?n.addEventListener(r,a,{passive:g}):n.addEventListener(r,a,!1)}function Oc(n,r,a,c,g){var M=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var R=c.tag;if(R===3||R===4){var k=c.stateNode.containerInfo;if(k===g||k.nodeType===8&&k.parentNode===g)break;if(R===4)for(R=c.return;R!==null;){var W=R.tag;if((W===3||W===4)&&(W=R.stateNode.containerInfo,W===g||W.nodeType===8&&W.parentNode===g))return;R=R.return}for(;k!==null;){if(R=Vr(k),R===null)return;if(W=R.tag,W===5||W===6){c=M=R;continue e}k=k.parentNode}}c=c.return}on(function(){var ce=M,Te=Se(a),Le=[];e:{var we=nd.get(n);if(we!==void 0){var Ge=Sc,je=n;switch(n){case"keypress":if(Ra(a)===0)break e;case"keydown":case"keyup":Ge=lv;break;case"focusin":je="focus",Ge=Ec;break;case"focusout":je="blur",Ge=Ec;break;case"beforeblur":case"afterblur":Ge=Ec;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ge=Dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ge=K0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ge=fv;break;case Zh:case Qh:case ed:Ge=Q0;break;case td:Ge=dv;break;case"scroll":Ge=j0;break;case"wheel":Ge=mv;break;case"copy":case"cut":case"paste":Ge=tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ge=Nh}var Je=(r&4)!==0,sn=!Je&&n==="scroll",ie=Je?we!==null?we+"Capture":null:we;Je=[];for(var Y=ce,se;Y!==null;){se=Y;var Ie=se.stateNode;if(se.tag===5&&Ie!==null&&(se=Ie,ie!==null&&(Ie=wn(Y,ie),Ie!=null&&Je.push(Uo(Y,Ie,se)))),sn)break;Y=Y.return}0<Je.length&&(we=new Ge(we,je,null,a,Te),Le.push({event:we,listeners:Je}))}}if((r&7)===0){e:{if(we=n==="mouseover"||n==="pointerover",Ge=n==="mouseout"||n==="pointerout",we&&a!==J&&(je=a.relatedTarget||a.fromElement)&&(Vr(je)||je[Gi]))break e;if((Ge||we)&&(we=Te.window===Te?Te:(we=Te.ownerDocument)?we.defaultView||we.parentWindow:window,Ge?(je=a.relatedTarget||a.toElement,Ge=ce,je=je?Vr(je):null,je!==null&&(sn=b(je),je!==sn||je.tag!==5&&je.tag!==6)&&(je=null)):(Ge=null,je=ce),Ge!==je)){if(Je=Dh,Ie="onMouseLeave",ie="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(Je=Nh,Ie="onPointerLeave",ie="onPointerEnter",Y="pointer"),sn=Ge==null?we:As(Ge),se=je==null?we:As(je),we=new Je(Ie,Y+"leave",Ge,a,Te),we.target=sn,we.relatedTarget=se,Ie=null,Vr(Te)===ce&&(Je=new Je(ie,Y+"enter",je,a,Te),Je.target=se,Je.relatedTarget=sn,Ie=Je),sn=Ie,Ge&&je)t:{for(Je=Ge,ie=je,Y=0,se=Je;se;se=Es(se))Y++;for(se=0,Ie=ie;Ie;Ie=Es(Ie))se++;for(;0<Y-se;)Je=Es(Je),Y--;for(;0<se-Y;)ie=Es(ie),se--;for(;Y--;){if(Je===ie||ie!==null&&Je===ie.alternate)break t;Je=Es(Je),ie=Es(ie)}Je=null}else Je=null;Ge!==null&&ad(Le,we,Ge,Je,!1),je!==null&&sn!==null&&ad(Le,sn,je,Je,!0)}}e:{if(we=ce?As(ce):window,Ge=we.nodeName&&we.nodeName.toLowerCase(),Ge==="select"||Ge==="input"&&we.type==="file")var Ze=Mv;else if(Bh(we))if(Vh)Ze=Av;else{Ze=Ev;var lt=wv}else(Ge=we.nodeName)&&Ge.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(Ze=Tv);if(Ze&&(Ze=Ze(n,ce))){Hh(Le,Ze,a,Te);break e}lt&&lt(n,we,ce),n==="focusout"&&(lt=we._wrapperState)&&lt.controlled&&we.type==="number"&&B(we,"number",we.value)}switch(lt=ce?As(ce):window,n){case"focusin":(Bh(lt)||lt.contentEditable==="true")&&(Ms=lt,bc=ce,Do=null);break;case"focusout":Do=bc=Ms=null;break;case"mousedown":Lc=!0;break;case"contextmenu":case"mouseup":case"dragend":Lc=!1,Kh(Le,a,Te);break;case"selectionchange":if(Pv)break;case"keydown":case"keyup":Kh(Le,a,Te)}var ct;if(Ac)e:{switch(n){case"compositionstart":var ft="onCompositionStart";break e;case"compositionend":ft="onCompositionEnd";break e;case"compositionupdate":ft="onCompositionUpdate";break e}ft=void 0}else Ss?kh(n,a)&&(ft="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ft="onCompositionStart");ft&&(Uh&&a.locale!=="ko"&&(Ss||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&Ss&&(ct=bh()):(dr=Te,xc="value"in dr?dr.value:dr.textContent,Ss=!0)),lt=Ua(ce,ft),0<lt.length&&(ft=new Ih(ft,n,null,a,Te),Le.push({event:ft,listeners:lt}),ct?ft.data=ct:(ct=zh(a),ct!==null&&(ft.data=ct)))),(ct=vv?_v(n,a):yv(n,a))&&(ce=Ua(ce,"onBeforeInput"),0<ce.length&&(Te=new Ih("onBeforeInput","beforeinput",null,a,Te),Le.push({event:Te,listeners:ce}),Te.data=ct))}sd(Le,r)})}function Uo(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Ua(n,r){for(var a=r+"Capture",c=[];n!==null;){var g=n,M=g.stateNode;g.tag===5&&M!==null&&(g=M,M=wn(n,a),M!=null&&c.unshift(Uo(n,M,g)),M=wn(n,r),M!=null&&c.push(Uo(n,M,g))),n=n.return}return c}function Es(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ad(n,r,a,c,g){for(var M=r._reactName,R=[];a!==null&&a!==c;){var k=a,W=k.alternate,ce=k.stateNode;if(W!==null&&W===c)break;k.tag===5&&ce!==null&&(k=ce,g?(W=wn(a,M),W!=null&&R.unshift(Uo(a,W,k))):g||(W=wn(a,M),W!=null&&R.push(Uo(a,W,k)))),a=a.return}R.length!==0&&n.push({event:r,listeners:R})}var Iv=/\r\n?/g,Nv=/\u0000|\uFFFD/g;function ld(n){return(typeof n=="string"?n:""+n).replace(Iv,`
`).replace(Nv,"")}function Oa(n,r,a){if(r=ld(r),ld(n)!==r&&a)throw Error(t(425))}function Fa(){}var Fc=null,kc=null;function zc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Bc=typeof setTimeout=="function"?setTimeout:void 0,Uv=typeof clearTimeout=="function"?clearTimeout:void 0,cd=typeof Promise=="function"?Promise:void 0,Ov=typeof queueMicrotask=="function"?queueMicrotask:typeof cd<"u"?function(n){return cd.resolve(null).then(n).catch(Fv)}:Bc;function Fv(n){setTimeout(function(){throw n})}function Hc(n,r){var a=r,c=0;do{var g=a.nextSibling;if(n.removeChild(a),g&&g.nodeType===8)if(a=g.data,a==="/$"){if(c===0){n.removeChild(g),To(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=g}while(a);To(r)}function mr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function ud(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),bi="__reactFiber$"+Ts,Oo="__reactProps$"+Ts,Gi="__reactContainer$"+Ts,Vc="__reactEvents$"+Ts,kv="__reactListeners$"+Ts,zv="__reactHandles$"+Ts;function Vr(n){var r=n[bi];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Gi]||a[bi]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=ud(n);n!==null;){if(a=n[bi])return a;n=ud(n)}return r}n=a,a=n.parentNode}return null}function Fo(n){return n=n[bi]||n[Gi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function As(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ka(n){return n[Oo]||null}var Gc=[],Cs=-1;function gr(n){return{current:n}}function $t(n){0>Cs||(n.current=Gc[Cs],Gc[Cs]=null,Cs--)}function Vt(n,r){Cs++,Gc[Cs]=n.current,n.current=r}var vr={},En=gr(vr),zn=gr(!1),Gr=vr;function Rs(n,r){var a=n.type.contextTypes;if(!a)return vr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var g={},M;for(M in a)g[M]=r[M];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=g),g}function Bn(n){return n=n.childContextTypes,n!=null}function za(){$t(zn),$t(En)}function fd(n,r,a){if(En.current!==vr)throw Error(t(168));Vt(En,r),Vt(zn,a)}function hd(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var g in c)if(!(g in r))throw Error(t(108,Ee(n)||"Unknown",g));return te({},a,c)}function Ba(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||vr,Gr=En.current,Vt(En,n),Vt(zn,zn.current),!0}function dd(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=hd(n,r,Gr),c.__reactInternalMemoizedMergedChildContext=n,$t(zn),$t(En),Vt(En,n)):$t(zn),Vt(zn,a)}var Wi=null,Ha=!1,Wc=!1;function pd(n){Wi===null?Wi=[n]:Wi.push(n)}function Bv(n){Ha=!0,pd(n)}function _r(){if(!Wc&&Wi!==null){Wc=!0;var n=0,r=Ut;try{var a=Wi;for(Ut=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Wi=null,Ha=!1}catch(g){throw Wi!==null&&(Wi=Wi.slice(n+1)),Ae(mt,_r),g}finally{Ut=r,Wc=!1}}return null}var Ps=[],bs=0,Va=null,Ga=0,si=[],oi=0,Wr=null,$i=1,Xi="";function $r(n,r){Ps[bs++]=Ga,Ps[bs++]=Va,Va=n,Ga=r}function md(n,r,a){si[oi++]=$i,si[oi++]=Xi,si[oi++]=Wr,Wr=n;var c=$i;n=Xi;var g=32-jt(c)-1;c&=~(1<<g),a+=1;var M=32-jt(r)+g;if(30<M){var R=g-g%5;M=(c&(1<<R)-1).toString(32),c>>=R,g-=R,$i=1<<32-jt(r)+g|a<<g|c,Xi=M+n}else $i=1<<M|a<<g|c,Xi=n}function $c(n){n.return!==null&&($r(n,1),md(n,1,0))}function Xc(n){for(;n===Va;)Va=Ps[--bs],Ps[bs]=null,Ga=Ps[--bs],Ps[bs]=null;for(;n===Wr;)Wr=si[--oi],si[oi]=null,Xi=si[--oi],si[oi]=null,$i=si[--oi],si[oi]=null}var jn=null,Yn=null,Yt=!1,gi=null;function gd(n,r){var a=ui(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function vd(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,jn=n,Yn=mr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,jn=n,Yn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Wr!==null?{id:$i,overflow:Xi}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=ui(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,jn=n,Yn=null,!0):!1;default:return!1}}function qc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function jc(n){if(Yt){var r=Yn;if(r){var a=r;if(!vd(n,r)){if(qc(n))throw Error(t(418));r=mr(a.nextSibling);var c=jn;r&&vd(n,r)?gd(c,a):(n.flags=n.flags&-4097|2,Yt=!1,jn=n)}}else{if(qc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Yt=!1,jn=n}}}function _d(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;jn=n}function Wa(n){if(n!==jn)return!1;if(!Yt)return _d(n),Yt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!zc(n.type,n.memoizedProps)),r&&(r=Yn)){if(qc(n))throw yd(),Error(t(418));for(;r;)gd(n,r),r=mr(r.nextSibling)}if(_d(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){Yn=mr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}Yn=null}}else Yn=jn?mr(n.stateNode.nextSibling):null;return!0}function yd(){for(var n=Yn;n;)n=mr(n.nextSibling)}function Ls(){Yn=jn=null,Yt=!1}function Yc(n){gi===null?gi=[n]:gi.push(n)}var Hv=D.ReactCurrentBatchConfig;function ko(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var g=c,M=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===M?r.ref:(r=function(R){var k=g.refs;R===null?delete k[M]:k[M]=R},r._stringRef=M,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function $a(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function xd(n){var r=n._init;return r(n._payload)}function Sd(n){function r(ie,Y){if(n){var se=ie.deletions;se===null?(ie.deletions=[Y],ie.flags|=16):se.push(Y)}}function a(ie,Y){if(!n)return null;for(;Y!==null;)r(ie,Y),Y=Y.sibling;return null}function c(ie,Y){for(ie=new Map;Y!==null;)Y.key!==null?ie.set(Y.key,Y):ie.set(Y.index,Y),Y=Y.sibling;return ie}function g(ie,Y){return ie=Ar(ie,Y),ie.index=0,ie.sibling=null,ie}function M(ie,Y,se){return ie.index=se,n?(se=ie.alternate,se!==null?(se=se.index,se<Y?(ie.flags|=2,Y):se):(ie.flags|=2,Y)):(ie.flags|=1048576,Y)}function R(ie){return n&&ie.alternate===null&&(ie.flags|=2),ie}function k(ie,Y,se,Ie){return Y===null||Y.tag!==6?(Y=Bu(se,ie.mode,Ie),Y.return=ie,Y):(Y=g(Y,se),Y.return=ie,Y)}function W(ie,Y,se,Ie){var Ze=se.type;return Ze===F?Te(ie,Y,se.props.children,Ie,se.key):Y!==null&&(Y.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===_e&&xd(Ze)===Y.type)?(Ie=g(Y,se.props),Ie.ref=ko(ie,Y,se),Ie.return=ie,Ie):(Ie=ml(se.type,se.key,se.props,null,ie.mode,Ie),Ie.ref=ko(ie,Y,se),Ie.return=ie,Ie)}function ce(ie,Y,se,Ie){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==se.containerInfo||Y.stateNode.implementation!==se.implementation?(Y=Hu(se,ie.mode,Ie),Y.return=ie,Y):(Y=g(Y,se.children||[]),Y.return=ie,Y)}function Te(ie,Y,se,Ie,Ze){return Y===null||Y.tag!==7?(Y=Qr(se,ie.mode,Ie,Ze),Y.return=ie,Y):(Y=g(Y,se),Y.return=ie,Y)}function Le(ie,Y,se){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=Bu(""+Y,ie.mode,se),Y.return=ie,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case V:return se=ml(Y.type,Y.key,Y.props,null,ie.mode,se),se.ref=ko(ie,null,Y),se.return=ie,se;case O:return Y=Hu(Y,ie.mode,se),Y.return=ie,Y;case _e:var Ie=Y._init;return Le(ie,Ie(Y._payload),se)}if(N(Y)||ue(Y))return Y=Qr(Y,ie.mode,se,null),Y.return=ie,Y;$a(ie,Y)}return null}function we(ie,Y,se,Ie){var Ze=Y!==null?Y.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Ze!==null?null:k(ie,Y,""+se,Ie);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case V:return se.key===Ze?W(ie,Y,se,Ie):null;case O:return se.key===Ze?ce(ie,Y,se,Ie):null;case _e:return Ze=se._init,we(ie,Y,Ze(se._payload),Ie)}if(N(se)||ue(se))return Ze!==null?null:Te(ie,Y,se,Ie,null);$a(ie,se)}return null}function Ge(ie,Y,se,Ie,Ze){if(typeof Ie=="string"&&Ie!==""||typeof Ie=="number")return ie=ie.get(se)||null,k(Y,ie,""+Ie,Ze);if(typeof Ie=="object"&&Ie!==null){switch(Ie.$$typeof){case V:return ie=ie.get(Ie.key===null?se:Ie.key)||null,W(Y,ie,Ie,Ze);case O:return ie=ie.get(Ie.key===null?se:Ie.key)||null,ce(Y,ie,Ie,Ze);case _e:var lt=Ie._init;return Ge(ie,Y,se,lt(Ie._payload),Ze)}if(N(Ie)||ue(Ie))return ie=ie.get(se)||null,Te(Y,ie,Ie,Ze,null);$a(Y,Ie)}return null}function je(ie,Y,se,Ie){for(var Ze=null,lt=null,ct=Y,ft=Y=0,vn=null;ct!==null&&ft<se.length;ft++){ct.index>ft?(vn=ct,ct=null):vn=ct.sibling;var Dt=we(ie,ct,se[ft],Ie);if(Dt===null){ct===null&&(ct=vn);break}n&&ct&&Dt.alternate===null&&r(ie,ct),Y=M(Dt,Y,ft),lt===null?Ze=Dt:lt.sibling=Dt,lt=Dt,ct=vn}if(ft===se.length)return a(ie,ct),Yt&&$r(ie,ft),Ze;if(ct===null){for(;ft<se.length;ft++)ct=Le(ie,se[ft],Ie),ct!==null&&(Y=M(ct,Y,ft),lt===null?Ze=ct:lt.sibling=ct,lt=ct);return Yt&&$r(ie,ft),Ze}for(ct=c(ie,ct);ft<se.length;ft++)vn=Ge(ct,ie,ft,se[ft],Ie),vn!==null&&(n&&vn.alternate!==null&&ct.delete(vn.key===null?ft:vn.key),Y=M(vn,Y,ft),lt===null?Ze=vn:lt.sibling=vn,lt=vn);return n&&ct.forEach(function(Cr){return r(ie,Cr)}),Yt&&$r(ie,ft),Ze}function Je(ie,Y,se,Ie){var Ze=ue(se);if(typeof Ze!="function")throw Error(t(150));if(se=Ze.call(se),se==null)throw Error(t(151));for(var lt=Ze=null,ct=Y,ft=Y=0,vn=null,Dt=se.next();ct!==null&&!Dt.done;ft++,Dt=se.next()){ct.index>ft?(vn=ct,ct=null):vn=ct.sibling;var Cr=we(ie,ct,Dt.value,Ie);if(Cr===null){ct===null&&(ct=vn);break}n&&ct&&Cr.alternate===null&&r(ie,ct),Y=M(Cr,Y,ft),lt===null?Ze=Cr:lt.sibling=Cr,lt=Cr,ct=vn}if(Dt.done)return a(ie,ct),Yt&&$r(ie,ft),Ze;if(ct===null){for(;!Dt.done;ft++,Dt=se.next())Dt=Le(ie,Dt.value,Ie),Dt!==null&&(Y=M(Dt,Y,ft),lt===null?Ze=Dt:lt.sibling=Dt,lt=Dt);return Yt&&$r(ie,ft),Ze}for(ct=c(ie,ct);!Dt.done;ft++,Dt=se.next())Dt=Ge(ct,ie,ft,Dt.value,Ie),Dt!==null&&(n&&Dt.alternate!==null&&ct.delete(Dt.key===null?ft:Dt.key),Y=M(Dt,Y,ft),lt===null?Ze=Dt:lt.sibling=Dt,lt=Dt);return n&&ct.forEach(function(x_){return r(ie,x_)}),Yt&&$r(ie,ft),Ze}function sn(ie,Y,se,Ie){if(typeof se=="object"&&se!==null&&se.type===F&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case V:e:{for(var Ze=se.key,lt=Y;lt!==null;){if(lt.key===Ze){if(Ze=se.type,Ze===F){if(lt.tag===7){a(ie,lt.sibling),Y=g(lt,se.props.children),Y.return=ie,ie=Y;break e}}else if(lt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===_e&&xd(Ze)===lt.type){a(ie,lt.sibling),Y=g(lt,se.props),Y.ref=ko(ie,lt,se),Y.return=ie,ie=Y;break e}a(ie,lt);break}else r(ie,lt);lt=lt.sibling}se.type===F?(Y=Qr(se.props.children,ie.mode,Ie,se.key),Y.return=ie,ie=Y):(Ie=ml(se.type,se.key,se.props,null,ie.mode,Ie),Ie.ref=ko(ie,Y,se),Ie.return=ie,ie=Ie)}return R(ie);case O:e:{for(lt=se.key;Y!==null;){if(Y.key===lt)if(Y.tag===4&&Y.stateNode.containerInfo===se.containerInfo&&Y.stateNode.implementation===se.implementation){a(ie,Y.sibling),Y=g(Y,se.children||[]),Y.return=ie,ie=Y;break e}else{a(ie,Y);break}else r(ie,Y);Y=Y.sibling}Y=Hu(se,ie.mode,Ie),Y.return=ie,ie=Y}return R(ie);case _e:return lt=se._init,sn(ie,Y,lt(se._payload),Ie)}if(N(se))return je(ie,Y,se,Ie);if(ue(se))return Je(ie,Y,se,Ie);$a(ie,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,Y!==null&&Y.tag===6?(a(ie,Y.sibling),Y=g(Y,se),Y.return=ie,ie=Y):(a(ie,Y),Y=Bu(se,ie.mode,Ie),Y.return=ie,ie=Y),R(ie)):a(ie,Y)}return sn}var Ds=Sd(!0),Md=Sd(!1),Xa=gr(null),qa=null,Is=null,Kc=null;function Jc(){Kc=Is=qa=null}function Zc(n){var r=Xa.current;$t(Xa),n._currentValue=r}function Qc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Ns(n,r){qa=n,Kc=Is=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Hn=!0),n.firstContext=null)}function ai(n){var r=n._currentValue;if(Kc!==n)if(n={context:n,memoizedValue:r,next:null},Is===null){if(qa===null)throw Error(t(308));Is=n,qa.dependencies={lanes:0,firstContext:n}}else Is=Is.next=n;return r}var Xr=null;function eu(n){Xr===null?Xr=[n]:Xr.push(n)}function wd(n,r,a,c){var g=r.interleaved;return g===null?(a.next=a,eu(r)):(a.next=g.next,g.next=a),r.interleaved=a,qi(n,c)}function qi(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var yr=!1;function tu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ed(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ji(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function xr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(bt&2)!==0){var g=c.pending;return g===null?r.next=r:(r.next=g.next,g.next=r),c.pending=r,qi(n,a)}return g=c.interleaved,g===null?(r.next=r,eu(c)):(r.next=g.next,g.next=r),c.interleaved=r,qi(n,a)}function ja(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,mc(n,a)}}function Td(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var g=null,M=null;if(a=a.firstBaseUpdate,a!==null){do{var R={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};M===null?g=M=R:M=M.next=R,a=a.next}while(a!==null);M===null?g=M=r:M=M.next=r}else g=M=r;a={baseState:c.baseState,firstBaseUpdate:g,lastBaseUpdate:M,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Ya(n,r,a,c){var g=n.updateQueue;yr=!1;var M=g.firstBaseUpdate,R=g.lastBaseUpdate,k=g.shared.pending;if(k!==null){g.shared.pending=null;var W=k,ce=W.next;W.next=null,R===null?M=ce:R.next=ce,R=W;var Te=n.alternate;Te!==null&&(Te=Te.updateQueue,k=Te.lastBaseUpdate,k!==R&&(k===null?Te.firstBaseUpdate=ce:k.next=ce,Te.lastBaseUpdate=W))}if(M!==null){var Le=g.baseState;R=0,Te=ce=W=null,k=M;do{var we=k.lane,Ge=k.eventTime;if((c&we)===we){Te!==null&&(Te=Te.next={eventTime:Ge,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var je=n,Je=k;switch(we=r,Ge=a,Je.tag){case 1:if(je=Je.payload,typeof je=="function"){Le=je.call(Ge,Le,we);break e}Le=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Je.payload,we=typeof je=="function"?je.call(Ge,Le,we):je,we==null)break e;Le=te({},Le,we);break e;case 2:yr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,we=g.effects,we===null?g.effects=[k]:we.push(k))}else Ge={eventTime:Ge,lane:we,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Te===null?(ce=Te=Ge,W=Le):Te=Te.next=Ge,R|=we;if(k=k.next,k===null){if(k=g.shared.pending,k===null)break;we=k,k=we.next,we.next=null,g.lastBaseUpdate=we,g.shared.pending=null}}while(!0);if(Te===null&&(W=Le),g.baseState=W,g.firstBaseUpdate=ce,g.lastBaseUpdate=Te,r=g.shared.interleaved,r!==null){g=r;do R|=g.lane,g=g.next;while(g!==r)}else M===null&&(g.shared.lanes=0);Yr|=R,n.lanes=R,n.memoizedState=Le}}function Ad(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],g=c.callback;if(g!==null){if(c.callback=null,c=a,typeof g!="function")throw Error(t(191,g));g.call(c)}}}var zo={},Li=gr(zo),Bo=gr(zo),Ho=gr(zo);function qr(n){if(n===zo)throw Error(t(174));return n}function nu(n,r){switch(Vt(Ho,r),Vt(Bo,n),Vt(Li,zo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ke(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ke(r,n)}$t(Li),Vt(Li,r)}function Us(){$t(Li),$t(Bo),$t(Ho)}function Cd(n){qr(Ho.current);var r=qr(Li.current),a=ke(r,n.type);r!==a&&(Vt(Bo,n),Vt(Li,a))}function iu(n){Bo.current===n&&($t(Li),$t(Bo))}var Zt=gr(0);function Ka(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ru=[];function su(){for(var n=0;n<ru.length;n++)ru[n]._workInProgressVersionPrimary=null;ru.length=0}var Ja=D.ReactCurrentDispatcher,ou=D.ReactCurrentBatchConfig,jr=0,Qt=null,un=null,mn=null,Za=!1,Vo=!1,Go=0,Vv=0;function Tn(){throw Error(t(321))}function au(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!mi(n[a],r[a]))return!1;return!0}function lu(n,r,a,c,g,M){if(jr=M,Qt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ja.current=n===null||n.memoizedState===null?Xv:qv,n=a(c,g),Vo){M=0;do{if(Vo=!1,Go=0,25<=M)throw Error(t(301));M+=1,mn=un=null,r.updateQueue=null,Ja.current=jv,n=a(c,g)}while(Vo)}if(Ja.current=tl,r=un!==null&&un.next!==null,jr=0,mn=un=Qt=null,Za=!1,r)throw Error(t(300));return n}function cu(){var n=Go!==0;return Go=0,n}function Di(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Qt.memoizedState=mn=n:mn=mn.next=n,mn}function li(){if(un===null){var n=Qt.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var r=mn===null?Qt.memoizedState:mn.next;if(r!==null)mn=r,un=n;else{if(n===null)throw Error(t(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},mn===null?Qt.memoizedState=mn=n:mn=mn.next=n}return mn}function Wo(n,r){return typeof r=="function"?r(n):r}function uu(n){var r=li(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=un,g=c.baseQueue,M=a.pending;if(M!==null){if(g!==null){var R=g.next;g.next=M.next,M.next=R}c.baseQueue=g=M,a.pending=null}if(g!==null){M=g.next,c=c.baseState;var k=R=null,W=null,ce=M;do{var Te=ce.lane;if((jr&Te)===Te)W!==null&&(W=W.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),c=ce.hasEagerState?ce.eagerState:n(c,ce.action);else{var Le={lane:Te,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};W===null?(k=W=Le,R=c):W=W.next=Le,Qt.lanes|=Te,Yr|=Te}ce=ce.next}while(ce!==null&&ce!==M);W===null?R=c:W.next=k,mi(c,r.memoizedState)||(Hn=!0),r.memoizedState=c,r.baseState=R,r.baseQueue=W,a.lastRenderedState=c}if(n=a.interleaved,n!==null){g=n;do M=g.lane,Qt.lanes|=M,Yr|=M,g=g.next;while(g!==n)}else g===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function fu(n){var r=li(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,g=a.pending,M=r.memoizedState;if(g!==null){a.pending=null;var R=g=g.next;do M=n(M,R.action),R=R.next;while(R!==g);mi(M,r.memoizedState)||(Hn=!0),r.memoizedState=M,r.baseQueue===null&&(r.baseState=M),a.lastRenderedState=M}return[M,c]}function Rd(){}function Pd(n,r){var a=Qt,c=li(),g=r(),M=!mi(c.memoizedState,g);if(M&&(c.memoizedState=g,Hn=!0),c=c.queue,hu(Dd.bind(null,a,c,n),[n]),c.getSnapshot!==r||M||mn!==null&&mn.memoizedState.tag&1){if(a.flags|=2048,$o(9,Ld.bind(null,a,c,g,r),void 0,null),gn===null)throw Error(t(349));(jr&30)!==0||bd(a,r,g)}return g}function bd(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Qt.updateQueue,r===null?(r={lastEffect:null,stores:null},Qt.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Ld(n,r,a,c){r.value=a,r.getSnapshot=c,Id(r)&&Nd(n)}function Dd(n,r,a){return a(function(){Id(r)&&Nd(n)})}function Id(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!mi(n,a)}catch{return!0}}function Nd(n){var r=qi(n,1);r!==null&&xi(r,n,1,-1)}function Ud(n){var r=Di();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:n},r.queue=n,n=n.dispatch=$v.bind(null,Qt,n),[r.memoizedState,n]}function $o(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Qt.updateQueue,r===null?(r={lastEffect:null,stores:null},Qt.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Od(){return li().memoizedState}function Qa(n,r,a,c){var g=Di();Qt.flags|=n,g.memoizedState=$o(1|r,a,void 0,c===void 0?null:c)}function el(n,r,a,c){var g=li();c=c===void 0?null:c;var M=void 0;if(un!==null){var R=un.memoizedState;if(M=R.destroy,c!==null&&au(c,R.deps)){g.memoizedState=$o(r,a,M,c);return}}Qt.flags|=n,g.memoizedState=$o(1|r,a,M,c)}function Fd(n,r){return Qa(8390656,8,n,r)}function hu(n,r){return el(2048,8,n,r)}function kd(n,r){return el(4,2,n,r)}function zd(n,r){return el(4,4,n,r)}function Bd(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Hd(n,r,a){return a=a!=null?a.concat([n]):null,el(4,4,Bd.bind(null,r,n),a)}function du(){}function Vd(n,r){var a=li();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&au(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Gd(n,r){var a=li();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&au(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Wd(n,r,a){return(jr&21)===0?(n.baseState&&(n.baseState=!1,Hn=!0),n.memoizedState=a):(mi(a,r)||(a=xh(),Qt.lanes|=a,Yr|=a,n.baseState=!0),r)}function Gv(n,r){var a=Ut;Ut=a!==0&&4>a?a:4,n(!0);var c=ou.transition;ou.transition={};try{n(!1),r()}finally{Ut=a,ou.transition=c}}function $d(){return li().memoizedState}function Wv(n,r,a){var c=Er(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Xd(n))qd(r,a);else if(a=wd(n,r,a,c),a!==null){var g=Dn();xi(a,n,c,g),jd(a,r,c)}}function $v(n,r,a){var c=Er(n),g={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xd(n))qd(r,g);else{var M=n.alternate;if(n.lanes===0&&(M===null||M.lanes===0)&&(M=r.lastRenderedReducer,M!==null))try{var R=r.lastRenderedState,k=M(R,a);if(g.hasEagerState=!0,g.eagerState=k,mi(k,R)){var W=r.interleaved;W===null?(g.next=g,eu(r)):(g.next=W.next,W.next=g),r.interleaved=g;return}}catch{}finally{}a=wd(n,r,g,c),a!==null&&(g=Dn(),xi(a,n,c,g),jd(a,r,c))}}function Xd(n){var r=n.alternate;return n===Qt||r!==null&&r===Qt}function qd(n,r){Vo=Za=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function jd(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,mc(n,a)}}var tl={readContext:ai,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},Xv={readContext:ai,useCallback:function(n,r){return Di().memoizedState=[n,r===void 0?null:r],n},useContext:ai,useEffect:Fd,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Qa(4194308,4,Bd.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Qa(4194308,4,n,r)},useInsertionEffect:function(n,r){return Qa(4,2,n,r)},useMemo:function(n,r){var a=Di();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Di();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=Wv.bind(null,Qt,n),[c.memoizedState,n]},useRef:function(n){var r=Di();return n={current:n},r.memoizedState=n},useState:Ud,useDebugValue:du,useDeferredValue:function(n){return Di().memoizedState=n},useTransition:function(){var n=Ud(!1),r=n[0];return n=Gv.bind(null,n[1]),Di().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Qt,g=Di();if(Yt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),gn===null)throw Error(t(349));(jr&30)!==0||bd(c,r,a)}g.memoizedState=a;var M={value:a,getSnapshot:r};return g.queue=M,Fd(Dd.bind(null,c,M,n),[n]),c.flags|=2048,$o(9,Ld.bind(null,c,M,a,r),void 0,null),a},useId:function(){var n=Di(),r=gn.identifierPrefix;if(Yt){var a=Xi,c=$i;a=(c&~(1<<32-jt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=Go++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Vv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},qv={readContext:ai,useCallback:Vd,useContext:ai,useEffect:hu,useImperativeHandle:Hd,useInsertionEffect:kd,useLayoutEffect:zd,useMemo:Gd,useReducer:uu,useRef:Od,useState:function(){return uu(Wo)},useDebugValue:du,useDeferredValue:function(n){var r=li();return Wd(r,un.memoizedState,n)},useTransition:function(){var n=uu(Wo)[0],r=li().memoizedState;return[n,r]},useMutableSource:Rd,useSyncExternalStore:Pd,useId:$d,unstable_isNewReconciler:!1},jv={readContext:ai,useCallback:Vd,useContext:ai,useEffect:hu,useImperativeHandle:Hd,useInsertionEffect:kd,useLayoutEffect:zd,useMemo:Gd,useReducer:fu,useRef:Od,useState:function(){return fu(Wo)},useDebugValue:du,useDeferredValue:function(n){var r=li();return un===null?r.memoizedState=n:Wd(r,un.memoizedState,n)},useTransition:function(){var n=fu(Wo)[0],r=li().memoizedState;return[n,r]},useMutableSource:Rd,useSyncExternalStore:Pd,useId:$d,unstable_isNewReconciler:!1};function vi(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function pu(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:te({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var nl={isMounted:function(n){return(n=n._reactInternals)?b(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Dn(),g=Er(n),M=ji(c,g);M.payload=r,a!=null&&(M.callback=a),r=xr(n,M,g),r!==null&&(xi(r,n,g,c),ja(r,n,g))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Dn(),g=Er(n),M=ji(c,g);M.tag=1,M.payload=r,a!=null&&(M.callback=a),r=xr(n,M,g),r!==null&&(xi(r,n,g,c),ja(r,n,g))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Dn(),c=Er(n),g=ji(a,c);g.tag=2,r!=null&&(g.callback=r),r=xr(n,g,c),r!==null&&(xi(r,n,c,a),ja(r,n,c))}};function Yd(n,r,a,c,g,M,R){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,M,R):r.prototype&&r.prototype.isPureReactComponent?!Lo(a,c)||!Lo(g,M):!0}function Kd(n,r,a){var c=!1,g=vr,M=r.contextType;return typeof M=="object"&&M!==null?M=ai(M):(g=Bn(r)?Gr:En.current,c=r.contextTypes,M=(c=c!=null)?Rs(n,g):vr),r=new r(a,M),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=nl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=g,n.__reactInternalMemoizedMaskedChildContext=M),r}function Jd(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&nl.enqueueReplaceState(r,r.state,null)}function mu(n,r,a,c){var g=n.stateNode;g.props=a,g.state=n.memoizedState,g.refs={},tu(n);var M=r.contextType;typeof M=="object"&&M!==null?g.context=ai(M):(M=Bn(r)?Gr:En.current,g.context=Rs(n,M)),g.state=n.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(pu(n,r,M,a),g.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(r=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),r!==g.state&&nl.enqueueReplaceState(g,g.state,null),Ya(n,a,g,c),g.state=n.memoizedState),typeof g.componentDidMount=="function"&&(n.flags|=4194308)}function Os(n,r){try{var a="",c=r;do a+=ye(c),c=c.return;while(c);var g=a}catch(M){g=`
Error generating stack: `+M.message+`
`+M.stack}return{value:n,source:r,stack:g,digest:null}}function gu(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function vu(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Yv=typeof WeakMap=="function"?WeakMap:Map;function Zd(n,r,a){a=ji(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){cl||(cl=!0,Du=c),vu(n,r)},a}function Qd(n,r,a){a=ji(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var g=r.value;a.payload=function(){return c(g)},a.callback=function(){vu(n,r)}}var M=n.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(a.callback=function(){vu(n,r),typeof c!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})}),a}function ep(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Yv;var g=new Set;c.set(r,g)}else g=c.get(r),g===void 0&&(g=new Set,c.set(r,g));g.has(a)||(g.add(a),n=c_.bind(null,n,r,a),r.then(n,n))}function tp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function np(n,r,a,c,g){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=ji(-1,1),r.tag=2,xr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=g,n)}var Kv=D.ReactCurrentOwner,Hn=!1;function Ln(n,r,a,c){r.child=n===null?Md(r,null,a,c):Ds(r,n.child,a,c)}function ip(n,r,a,c,g){a=a.render;var M=r.ref;return Ns(r,g),c=lu(n,r,a,c,M,g),a=cu(),n!==null&&!Hn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~g,Yi(n,r,g)):(Yt&&a&&$c(r),r.flags|=1,Ln(n,r,c,g),r.child)}function rp(n,r,a,c,g){if(n===null){var M=a.type;return typeof M=="function"&&!zu(M)&&M.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=M,sp(n,r,M,c,g)):(n=ml(a.type,null,c,r,r.mode,g),n.ref=r.ref,n.return=r,r.child=n)}if(M=n.child,(n.lanes&g)===0){var R=M.memoizedProps;if(a=a.compare,a=a!==null?a:Lo,a(R,c)&&n.ref===r.ref)return Yi(n,r,g)}return r.flags|=1,n=Ar(M,c),n.ref=r.ref,n.return=r,r.child=n}function sp(n,r,a,c,g){if(n!==null){var M=n.memoizedProps;if(Lo(M,c)&&n.ref===r.ref)if(Hn=!1,r.pendingProps=c=M,(n.lanes&g)!==0)(n.flags&131072)!==0&&(Hn=!0);else return r.lanes=n.lanes,Yi(n,r,g)}return _u(n,r,a,c,g)}function op(n,r,a){var c=r.pendingProps,g=c.children,M=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(ks,Kn),Kn|=a;else{if((a&1073741824)===0)return n=M!==null?M.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Vt(ks,Kn),Kn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=M!==null?M.baseLanes:a,Vt(ks,Kn),Kn|=c}else M!==null?(c=M.baseLanes|a,r.memoizedState=null):c=a,Vt(ks,Kn),Kn|=c;return Ln(n,r,g,a),r.child}function ap(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function _u(n,r,a,c,g){var M=Bn(a)?Gr:En.current;return M=Rs(r,M),Ns(r,g),a=lu(n,r,a,c,M,g),c=cu(),n!==null&&!Hn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~g,Yi(n,r,g)):(Yt&&c&&$c(r),r.flags|=1,Ln(n,r,a,g),r.child)}function lp(n,r,a,c,g){if(Bn(a)){var M=!0;Ba(r)}else M=!1;if(Ns(r,g),r.stateNode===null)rl(n,r),Kd(r,a,c),mu(r,a,c,g),c=!0;else if(n===null){var R=r.stateNode,k=r.memoizedProps;R.props=k;var W=R.context,ce=a.contextType;typeof ce=="object"&&ce!==null?ce=ai(ce):(ce=Bn(a)?Gr:En.current,ce=Rs(r,ce));var Te=a.getDerivedStateFromProps,Le=typeof Te=="function"||typeof R.getSnapshotBeforeUpdate=="function";Le||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(k!==c||W!==ce)&&Jd(r,R,c,ce),yr=!1;var we=r.memoizedState;R.state=we,Ya(r,c,R,g),W=r.memoizedState,k!==c||we!==W||zn.current||yr?(typeof Te=="function"&&(pu(r,a,Te,c),W=r.memoizedState),(k=yr||Yd(r,a,k,c,we,W,ce))?(Le||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(r.flags|=4194308)):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=W),R.props=c,R.state=W,R.context=ce,c=k):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{R=r.stateNode,Ed(n,r),k=r.memoizedProps,ce=r.type===r.elementType?k:vi(r.type,k),R.props=ce,Le=r.pendingProps,we=R.context,W=a.contextType,typeof W=="object"&&W!==null?W=ai(W):(W=Bn(a)?Gr:En.current,W=Rs(r,W));var Ge=a.getDerivedStateFromProps;(Te=typeof Ge=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(k!==Le||we!==W)&&Jd(r,R,c,W),yr=!1,we=r.memoizedState,R.state=we,Ya(r,c,R,g);var je=r.memoizedState;k!==Le||we!==je||zn.current||yr?(typeof Ge=="function"&&(pu(r,a,Ge,c),je=r.memoizedState),(ce=yr||Yd(r,a,ce,c,we,je,W)||!1)?(Te||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(c,je,W),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(c,je,W)),typeof R.componentDidUpdate=="function"&&(r.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof R.componentDidUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=je),R.props=c,R.state=je,R.context=W,c=ce):(typeof R.componentDidUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(r.flags|=1024),c=!1)}return yu(n,r,a,c,M,g)}function yu(n,r,a,c,g,M){ap(n,r);var R=(r.flags&128)!==0;if(!c&&!R)return g&&dd(r,a,!1),Yi(n,r,M);c=r.stateNode,Kv.current=r;var k=R&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&R?(r.child=Ds(r,n.child,null,M),r.child=Ds(r,null,k,M)):Ln(n,r,k,M),r.memoizedState=c.state,g&&dd(r,a,!0),r.child}function cp(n){var r=n.stateNode;r.pendingContext?fd(n,r.pendingContext,r.pendingContext!==r.context):r.context&&fd(n,r.context,!1),nu(n,r.containerInfo)}function up(n,r,a,c,g){return Ls(),Yc(g),r.flags|=256,Ln(n,r,a,c),r.child}var xu={dehydrated:null,treeContext:null,retryLane:0};function Su(n){return{baseLanes:n,cachePool:null,transitions:null}}function fp(n,r,a){var c=r.pendingProps,g=Zt.current,M=!1,R=(r.flags&128)!==0,k;if((k=R)||(k=n!==null&&n.memoizedState===null?!1:(g&2)!==0),k?(M=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(g|=1),Vt(Zt,g&1),n===null)return jc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(R=c.children,n=c.fallback,M?(c=r.mode,M=r.child,R={mode:"hidden",children:R},(c&1)===0&&M!==null?(M.childLanes=0,M.pendingProps=R):M=gl(R,c,0,null),n=Qr(n,c,a,null),M.return=r,n.return=r,M.sibling=n,r.child=M,r.child.memoizedState=Su(a),r.memoizedState=xu,n):Mu(r,R));if(g=n.memoizedState,g!==null&&(k=g.dehydrated,k!==null))return Jv(n,r,R,c,k,g,a);if(M){M=c.fallback,R=r.mode,g=n.child,k=g.sibling;var W={mode:"hidden",children:c.children};return(R&1)===0&&r.child!==g?(c=r.child,c.childLanes=0,c.pendingProps=W,r.deletions=null):(c=Ar(g,W),c.subtreeFlags=g.subtreeFlags&14680064),k!==null?M=Ar(k,M):(M=Qr(M,R,a,null),M.flags|=2),M.return=r,c.return=r,c.sibling=M,r.child=c,c=M,M=r.child,R=n.child.memoizedState,R=R===null?Su(a):{baseLanes:R.baseLanes|a,cachePool:null,transitions:R.transitions},M.memoizedState=R,M.childLanes=n.childLanes&~a,r.memoizedState=xu,c}return M=n.child,n=M.sibling,c=Ar(M,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Mu(n,r){return r=gl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function il(n,r,a,c){return c!==null&&Yc(c),Ds(r,n.child,null,a),n=Mu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Jv(n,r,a,c,g,M,R){if(a)return r.flags&256?(r.flags&=-257,c=gu(Error(t(422))),il(n,r,R,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(M=c.fallback,g=r.mode,c=gl({mode:"visible",children:c.children},g,0,null),M=Qr(M,g,R,null),M.flags|=2,c.return=r,M.return=r,c.sibling=M,r.child=c,(r.mode&1)!==0&&Ds(r,n.child,null,R),r.child.memoizedState=Su(R),r.memoizedState=xu,M);if((r.mode&1)===0)return il(n,r,R,null);if(g.data==="$!"){if(c=g.nextSibling&&g.nextSibling.dataset,c)var k=c.dgst;return c=k,M=Error(t(419)),c=gu(M,c,void 0),il(n,r,R,c)}if(k=(R&n.childLanes)!==0,Hn||k){if(c=gn,c!==null){switch(R&-R){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(c.suspendedLanes|R))!==0?0:g,g!==0&&g!==M.retryLane&&(M.retryLane=g,qi(n,g),xi(c,n,g,-1))}return ku(),c=gu(Error(t(421))),il(n,r,R,c)}return g.data==="$?"?(r.flags|=128,r.child=n.child,r=u_.bind(null,n),g._reactRetry=r,null):(n=M.treeContext,Yn=mr(g.nextSibling),jn=r,Yt=!0,gi=null,n!==null&&(si[oi++]=$i,si[oi++]=Xi,si[oi++]=Wr,$i=n.id,Xi=n.overflow,Wr=r),r=Mu(r,c.children),r.flags|=4096,r)}function hp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Qc(n.return,r,a)}function wu(n,r,a,c,g){var M=n.memoizedState;M===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:g}:(M.isBackwards=r,M.rendering=null,M.renderingStartTime=0,M.last=c,M.tail=a,M.tailMode=g)}function dp(n,r,a){var c=r.pendingProps,g=c.revealOrder,M=c.tail;if(Ln(n,r,c.children,a),c=Zt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&hp(n,a,r);else if(n.tag===19)hp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Vt(Zt,c),(r.mode&1)===0)r.memoizedState=null;else switch(g){case"forwards":for(a=r.child,g=null;a!==null;)n=a.alternate,n!==null&&Ka(n)===null&&(g=a),a=a.sibling;a=g,a===null?(g=r.child,r.child=null):(g=a.sibling,a.sibling=null),wu(r,!1,g,a,M);break;case"backwards":for(a=null,g=r.child,r.child=null;g!==null;){if(n=g.alternate,n!==null&&Ka(n)===null){r.child=g;break}n=g.sibling,g.sibling=a,a=g,g=n}wu(r,!0,a,null,M);break;case"together":wu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function rl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Yi(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Yr|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Ar(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Ar(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Zv(n,r,a){switch(r.tag){case 3:cp(r),Ls();break;case 5:Cd(r);break;case 1:Bn(r.type)&&Ba(r);break;case 4:nu(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,g=r.memoizedProps.value;Vt(Xa,c._currentValue),c._currentValue=g;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Vt(Zt,Zt.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?fp(n,r,a):(Vt(Zt,Zt.current&1),n=Yi(n,r,a),n!==null?n.sibling:null);Vt(Zt,Zt.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return dp(n,r,a);r.flags|=128}if(g=r.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Vt(Zt,Zt.current),c)break;return null;case 22:case 23:return r.lanes=0,op(n,r,a)}return Yi(n,r,a)}var pp,Eu,mp,gp;pp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Eu=function(){},mp=function(n,r,a,c){var g=n.memoizedProps;if(g!==c){n=r.stateNode,qr(Li.current);var M=null;switch(a){case"input":g=st(n,g),c=st(n,c),M=[];break;case"select":g=te({},g,{value:void 0}),c=te({},c,{value:void 0}),M=[];break;case"textarea":g=xe(n,g),c=xe(n,c),M=[];break;default:typeof g.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Fa)}zt(a,c);var R;a=null;for(ce in g)if(!c.hasOwnProperty(ce)&&g.hasOwnProperty(ce)&&g[ce]!=null)if(ce==="style"){var k=g[ce];for(R in k)k.hasOwnProperty(R)&&(a||(a={}),a[R]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(o.hasOwnProperty(ce)?M||(M=[]):(M=M||[]).push(ce,null));for(ce in c){var W=c[ce];if(k=g!=null?g[ce]:void 0,c.hasOwnProperty(ce)&&W!==k&&(W!=null||k!=null))if(ce==="style")if(k){for(R in k)!k.hasOwnProperty(R)||W&&W.hasOwnProperty(R)||(a||(a={}),a[R]="");for(R in W)W.hasOwnProperty(R)&&k[R]!==W[R]&&(a||(a={}),a[R]=W[R])}else a||(M||(M=[]),M.push(ce,a)),a=W;else ce==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,k=k?k.__html:void 0,W!=null&&k!==W&&(M=M||[]).push(ce,W)):ce==="children"?typeof W!="string"&&typeof W!="number"||(M=M||[]).push(ce,""+W):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(o.hasOwnProperty(ce)?(W!=null&&ce==="onScroll"&&Wt("scroll",n),M||k===W||(M=[])):(M=M||[]).push(ce,W))}a&&(M=M||[]).push("style",a);var ce=M;(r.updateQueue=ce)&&(r.flags|=4)}},gp=function(n,r,a,c){a!==c&&(r.flags|=4)};function Xo(n,r){if(!Yt)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function An(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var g=n.child;g!==null;)a|=g.lanes|g.childLanes,c|=g.subtreeFlags&14680064,c|=g.flags&14680064,g.return=n,g=g.sibling;else for(g=n.child;g!==null;)a|=g.lanes|g.childLanes,c|=g.subtreeFlags,c|=g.flags,g.return=n,g=g.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function Qv(n,r,a){var c=r.pendingProps;switch(Xc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(r),null;case 1:return Bn(r.type)&&za(),An(r),null;case 3:return c=r.stateNode,Us(),$t(zn),$t(En),su(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Wa(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,gi!==null&&(Uu(gi),gi=null))),Eu(n,r),An(r),null;case 5:iu(r);var g=qr(Ho.current);if(a=r.type,n!==null&&r.stateNode!=null)mp(n,r,a,c,g),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return An(r),null}if(n=qr(Li.current),Wa(r)){c=r.stateNode,a=r.type;var M=r.memoizedProps;switch(c[bi]=r,c[Oo]=M,n=(r.mode&1)!==0,a){case"dialog":Wt("cancel",c),Wt("close",c);break;case"iframe":case"object":case"embed":Wt("load",c);break;case"video":case"audio":for(g=0;g<Io.length;g++)Wt(Io[g],c);break;case"source":Wt("error",c);break;case"img":case"image":case"link":Wt("error",c),Wt("load",c);break;case"details":Wt("toggle",c);break;case"input":wt(c,M),Wt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!M.multiple},Wt("invalid",c);break;case"textarea":Ce(c,M),Wt("invalid",c)}zt(a,M),g=null;for(var R in M)if(M.hasOwnProperty(R)){var k=M[R];R==="children"?typeof k=="string"?c.textContent!==k&&(M.suppressHydrationWarning!==!0&&Oa(c.textContent,k,n),g=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(M.suppressHydrationWarning!==!0&&Oa(c.textContent,k,n),g=["children",""+k]):o.hasOwnProperty(R)&&k!=null&&R==="onScroll"&&Wt("scroll",c)}switch(a){case"input":Lt(c),Ot(c,M,!0);break;case"textarea":Lt(c),tt(c);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(c.onclick=Fa)}c=g,r.updateQueue=c,c!==null&&(r.flags|=4)}else{R=g.nodeType===9?g:g.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Fe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=R.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=R.createElement(a,{is:c.is}):(n=R.createElement(a),a==="select"&&(R=n,c.multiple?R.multiple=!0:c.size&&(R.size=c.size))):n=R.createElementNS(n,a),n[bi]=r,n[Oo]=c,pp(n,r,!1,!1),r.stateNode=n;e:{switch(R=pt(a,c),a){case"dialog":Wt("cancel",n),Wt("close",n),g=c;break;case"iframe":case"object":case"embed":Wt("load",n),g=c;break;case"video":case"audio":for(g=0;g<Io.length;g++)Wt(Io[g],n);g=c;break;case"source":Wt("error",n),g=c;break;case"img":case"image":case"link":Wt("error",n),Wt("load",n),g=c;break;case"details":Wt("toggle",n),g=c;break;case"input":wt(n,c),g=st(n,c),Wt("invalid",n);break;case"option":g=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},g=te({},c,{value:void 0}),Wt("invalid",n);break;case"textarea":Ce(n,c),g=xe(n,c),Wt("invalid",n);break;default:g=c}zt(a,g),k=g;for(M in k)if(k.hasOwnProperty(M)){var W=k[M];M==="style"?ut(n,W):M==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&Ne(n,W)):M==="children"?typeof W=="string"?(a!=="textarea"||W!=="")&&Ke(n,W):typeof W=="number"&&Ke(n,""+W):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(o.hasOwnProperty(M)?W!=null&&M==="onScroll"&&Wt("scroll",n):W!=null&&P(n,M,W,R))}switch(a){case"input":Lt(n),Ot(n,c,!1);break;case"textarea":Lt(n),tt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+$e(c.value));break;case"select":n.multiple=!!c.multiple,M=c.value,M!=null?fe(n,!!c.multiple,M,!1):c.defaultValue!=null&&fe(n,!!c.multiple,c.defaultValue,!0);break;default:typeof g.onClick=="function"&&(n.onclick=Fa)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return An(r),null;case 6:if(n&&r.stateNode!=null)gp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=qr(Ho.current),qr(Li.current),Wa(r)){if(c=r.stateNode,a=r.memoizedProps,c[bi]=r,(M=c.nodeValue!==a)&&(n=jn,n!==null))switch(n.tag){case 3:Oa(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Oa(c.nodeValue,a,(n.mode&1)!==0)}M&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[bi]=r,r.stateNode=c}return An(r),null;case 13:if($t(Zt),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Yt&&Yn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)yd(),Ls(),r.flags|=98560,M=!1;else if(M=Wa(r),c!==null&&c.dehydrated!==null){if(n===null){if(!M)throw Error(t(318));if(M=r.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(t(317));M[bi]=r}else Ls(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;An(r),M=!1}else gi!==null&&(Uu(gi),gi=null),M=!0;if(!M)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Zt.current&1)!==0?fn===0&&(fn=3):ku())),r.updateQueue!==null&&(r.flags|=4),An(r),null);case 4:return Us(),Eu(n,r),n===null&&No(r.stateNode.containerInfo),An(r),null;case 10:return Zc(r.type._context),An(r),null;case 17:return Bn(r.type)&&za(),An(r),null;case 19:if($t(Zt),M=r.memoizedState,M===null)return An(r),null;if(c=(r.flags&128)!==0,R=M.rendering,R===null)if(c)Xo(M,!1);else{if(fn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(R=Ka(n),R!==null){for(r.flags|=128,Xo(M,!1),c=R.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)M=a,n=c,M.flags&=14680066,R=M.alternate,R===null?(M.childLanes=0,M.lanes=n,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=R.childLanes,M.lanes=R.lanes,M.child=R.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=R.memoizedProps,M.memoizedState=R.memoizedState,M.updateQueue=R.updateQueue,M.type=R.type,n=R.dependencies,M.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Vt(Zt,Zt.current&1|2),r.child}n=n.sibling}M.tail!==null&&be()>zs&&(r.flags|=128,c=!0,Xo(M,!1),r.lanes=4194304)}else{if(!c)if(n=Ka(R),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Xo(M,!0),M.tail===null&&M.tailMode==="hidden"&&!R.alternate&&!Yt)return An(r),null}else 2*be()-M.renderingStartTime>zs&&a!==1073741824&&(r.flags|=128,c=!0,Xo(M,!1),r.lanes=4194304);M.isBackwards?(R.sibling=r.child,r.child=R):(a=M.last,a!==null?a.sibling=R:r.child=R,M.last=R)}return M.tail!==null?(r=M.tail,M.rendering=r,M.tail=r.sibling,M.renderingStartTime=be(),r.sibling=null,a=Zt.current,Vt(Zt,c?a&1|2:a&1),r):(An(r),null);case 22:case 23:return Fu(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(Kn&1073741824)!==0&&(An(r),r.subtreeFlags&6&&(r.flags|=8192)):An(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function e_(n,r){switch(Xc(r),r.tag){case 1:return Bn(r.type)&&za(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Us(),$t(zn),$t(En),su(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return iu(r),null;case 13:if($t(Zt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ls()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return $t(Zt),null;case 4:return Us(),null;case 10:return Zc(r.type._context),null;case 22:case 23:return Fu(),null;case 24:return null;default:return null}}var sl=!1,Cn=!1,t_=typeof WeakSet=="function"?WeakSet:Set,qe=null;function Fs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tn(n,r,c)}else a.current=null}function Tu(n,r,a){try{a()}catch(c){tn(n,r,c)}}var vp=!1;function n_(n,r){if(Fc=Ta,n=Yh(),Pc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var g=c.anchorOffset,M=c.focusNode;c=c.focusOffset;try{a.nodeType,M.nodeType}catch{a=null;break e}var R=0,k=-1,W=-1,ce=0,Te=0,Le=n,we=null;t:for(;;){for(var Ge;Le!==a||g!==0&&Le.nodeType!==3||(k=R+g),Le!==M||c!==0&&Le.nodeType!==3||(W=R+c),Le.nodeType===3&&(R+=Le.nodeValue.length),(Ge=Le.firstChild)!==null;)we=Le,Le=Ge;for(;;){if(Le===n)break t;if(we===a&&++ce===g&&(k=R),we===M&&++Te===c&&(W=R),(Ge=Le.nextSibling)!==null)break;Le=we,we=Le.parentNode}Le=Ge}a=k===-1||W===-1?null:{start:k,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(kc={focusedElem:n,selectionRange:a},Ta=!1,qe=r;qe!==null;)if(r=qe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,qe=n;else for(;qe!==null;){r=qe;try{var je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Je=je.memoizedProps,sn=je.memoizedState,ie=r.stateNode,Y=ie.getSnapshotBeforeUpdate(r.elementType===r.type?Je:vi(r.type,Je),sn);ie.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var se=r.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ie){tn(r,r.return,Ie)}if(n=r.sibling,n!==null){n.return=r.return,qe=n;break}qe=r.return}return je=vp,vp=!1,je}function qo(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var g=c=c.next;do{if((g.tag&n)===n){var M=g.destroy;g.destroy=void 0,M!==void 0&&Tu(r,a,M)}g=g.next}while(g!==c)}}function ol(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Au(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function _p(n){var r=n.alternate;r!==null&&(n.alternate=null,_p(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[bi],delete r[Oo],delete r[Vc],delete r[kv],delete r[zv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function yp(n){return n.tag===5||n.tag===3||n.tag===4}function xp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||yp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Cu(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Fa));else if(c!==4&&(n=n.child,n!==null))for(Cu(n,r,a),n=n.sibling;n!==null;)Cu(n,r,a),n=n.sibling}function Ru(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Ru(n,r,a),n=n.sibling;n!==null;)Ru(n,r,a),n=n.sibling}var Sn=null,_i=!1;function Sr(n,r,a){for(a=a.child;a!==null;)Sp(n,r,a),a=a.sibling}function Sp(n,r,a){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(et,a)}catch{}switch(a.tag){case 5:Cn||Fs(a,r);case 6:var c=Sn,g=_i;Sn=null,Sr(n,r,a),Sn=c,_i=g,Sn!==null&&(_i?(n=Sn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Sn.removeChild(a.stateNode));break;case 18:Sn!==null&&(_i?(n=Sn,a=a.stateNode,n.nodeType===8?Hc(n.parentNode,a):n.nodeType===1&&Hc(n,a),To(n)):Hc(Sn,a.stateNode));break;case 4:c=Sn,g=_i,Sn=a.stateNode.containerInfo,_i=!0,Sr(n,r,a),Sn=c,_i=g;break;case 0:case 11:case 14:case 15:if(!Cn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){g=c=c.next;do{var M=g,R=M.destroy;M=M.tag,R!==void 0&&((M&2)!==0||(M&4)!==0)&&Tu(a,r,R),g=g.next}while(g!==c)}Sr(n,r,a);break;case 1:if(!Cn&&(Fs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(k){tn(a,r,k)}Sr(n,r,a);break;case 21:Sr(n,r,a);break;case 22:a.mode&1?(Cn=(c=Cn)||a.memoizedState!==null,Sr(n,r,a),Cn=c):Sr(n,r,a);break;default:Sr(n,r,a)}}function Mp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new t_),r.forEach(function(c){var g=f_.bind(null,n,c);a.has(c)||(a.add(c),c.then(g,g))})}}function yi(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var g=a[c];try{var M=n,R=r,k=R;e:for(;k!==null;){switch(k.tag){case 5:Sn=k.stateNode,_i=!1;break e;case 3:Sn=k.stateNode.containerInfo,_i=!0;break e;case 4:Sn=k.stateNode.containerInfo,_i=!0;break e}k=k.return}if(Sn===null)throw Error(t(160));Sp(M,R,g),Sn=null,_i=!1;var W=g.alternate;W!==null&&(W.return=null),g.return=null}catch(ce){tn(g,r,ce)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)wp(r,n),r=r.sibling}function wp(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(yi(r,n),Ii(n),c&4){try{qo(3,n,n.return),ol(3,n)}catch(Je){tn(n,n.return,Je)}try{qo(5,n,n.return)}catch(Je){tn(n,n.return,Je)}}break;case 1:yi(r,n),Ii(n),c&512&&a!==null&&Fs(a,a.return);break;case 5:if(yi(r,n),Ii(n),c&512&&a!==null&&Fs(a,a.return),n.flags&32){var g=n.stateNode;try{Ke(g,"")}catch(Je){tn(n,n.return,Je)}}if(c&4&&(g=n.stateNode,g!=null)){var M=n.memoizedProps,R=a!==null?a.memoizedProps:M,k=n.type,W=n.updateQueue;if(n.updateQueue=null,W!==null)try{k==="input"&&M.type==="radio"&&M.name!=null&&vt(g,M),pt(k,R);var ce=pt(k,M);for(R=0;R<W.length;R+=2){var Te=W[R],Le=W[R+1];Te==="style"?ut(g,Le):Te==="dangerouslySetInnerHTML"?Ne(g,Le):Te==="children"?Ke(g,Le):P(g,Te,Le,ce)}switch(k){case"input":_t(g,M);break;case"textarea":Pe(g,M);break;case"select":var we=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!M.multiple;var Ge=M.value;Ge!=null?fe(g,!!M.multiple,Ge,!1):we!==!!M.multiple&&(M.defaultValue!=null?fe(g,!!M.multiple,M.defaultValue,!0):fe(g,!!M.multiple,M.multiple?[]:"",!1))}g[Oo]=M}catch(Je){tn(n,n.return,Je)}}break;case 6:if(yi(r,n),Ii(n),c&4){if(n.stateNode===null)throw Error(t(162));g=n.stateNode,M=n.memoizedProps;try{g.nodeValue=M}catch(Je){tn(n,n.return,Je)}}break;case 3:if(yi(r,n),Ii(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{To(r.containerInfo)}catch(Je){tn(n,n.return,Je)}break;case 4:yi(r,n),Ii(n);break;case 13:yi(r,n),Ii(n),g=n.child,g.flags&8192&&(M=g.memoizedState!==null,g.stateNode.isHidden=M,!M||g.alternate!==null&&g.alternate.memoizedState!==null||(Lu=be())),c&4&&Mp(n);break;case 22:if(Te=a!==null&&a.memoizedState!==null,n.mode&1?(Cn=(ce=Cn)||Te,yi(r,n),Cn=ce):yi(r,n),Ii(n),c&8192){if(ce=n.memoizedState!==null,(n.stateNode.isHidden=ce)&&!Te&&(n.mode&1)!==0)for(qe=n,Te=n.child;Te!==null;){for(Le=qe=Te;qe!==null;){switch(we=qe,Ge=we.child,we.tag){case 0:case 11:case 14:case 15:qo(4,we,we.return);break;case 1:Fs(we,we.return);var je=we.stateNode;if(typeof je.componentWillUnmount=="function"){c=we,a=we.return;try{r=c,je.props=r.memoizedProps,je.state=r.memoizedState,je.componentWillUnmount()}catch(Je){tn(c,a,Je)}}break;case 5:Fs(we,we.return);break;case 22:if(we.memoizedState!==null){Ap(Le);continue}}Ge!==null?(Ge.return=we,qe=Ge):Ap(Le)}Te=Te.sibling}e:for(Te=null,Le=n;;){if(Le.tag===5){if(Te===null){Te=Le;try{g=Le.stateNode,ce?(M=g.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(k=Le.stateNode,W=Le.memoizedProps.style,R=W!=null&&W.hasOwnProperty("display")?W.display:null,k.style.display=We("display",R))}catch(Je){tn(n,n.return,Je)}}}else if(Le.tag===6){if(Te===null)try{Le.stateNode.nodeValue=ce?"":Le.memoizedProps}catch(Je){tn(n,n.return,Je)}}else if((Le.tag!==22&&Le.tag!==23||Le.memoizedState===null||Le===n)&&Le.child!==null){Le.child.return=Le,Le=Le.child;continue}if(Le===n)break e;for(;Le.sibling===null;){if(Le.return===null||Le.return===n)break e;Te===Le&&(Te=null),Le=Le.return}Te===Le&&(Te=null),Le.sibling.return=Le.return,Le=Le.sibling}}break;case 19:yi(r,n),Ii(n),c&4&&Mp(n);break;case 21:break;default:yi(r,n),Ii(n)}}function Ii(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(yp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var g=c.stateNode;c.flags&32&&(Ke(g,""),c.flags&=-33);var M=xp(n);Ru(n,M,g);break;case 3:case 4:var R=c.stateNode.containerInfo,k=xp(n);Cu(n,k,R);break;default:throw Error(t(161))}}catch(W){tn(n,n.return,W)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function i_(n,r,a){qe=n,Ep(n)}function Ep(n,r,a){for(var c=(n.mode&1)!==0;qe!==null;){var g=qe,M=g.child;if(g.tag===22&&c){var R=g.memoizedState!==null||sl;if(!R){var k=g.alternate,W=k!==null&&k.memoizedState!==null||Cn;k=sl;var ce=Cn;if(sl=R,(Cn=W)&&!ce)for(qe=g;qe!==null;)R=qe,W=R.child,R.tag===22&&R.memoizedState!==null?Cp(g):W!==null?(W.return=R,qe=W):Cp(g);for(;M!==null;)qe=M,Ep(M),M=M.sibling;qe=g,sl=k,Cn=ce}Tp(n)}else(g.subtreeFlags&8772)!==0&&M!==null?(M.return=g,qe=M):Tp(n)}}function Tp(n){for(;qe!==null;){var r=qe;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Cn||ol(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Cn)if(a===null)c.componentDidMount();else{var g=r.elementType===r.type?a.memoizedProps:vi(r.type,a.memoizedProps);c.componentDidUpdate(g,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var M=r.updateQueue;M!==null&&Ad(r,M,c);break;case 3:var R=r.updateQueue;if(R!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Ad(r,R,a)}break;case 5:var k=r.stateNode;if(a===null&&r.flags&4){a=k;var W=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&a.focus();break;case"img":W.src&&(a.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ce=r.alternate;if(ce!==null){var Te=ce.memoizedState;if(Te!==null){var Le=Te.dehydrated;Le!==null&&To(Le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||r.flags&512&&Au(r)}catch(we){tn(r,r.return,we)}}if(r===n){qe=null;break}if(a=r.sibling,a!==null){a.return=r.return,qe=a;break}qe=r.return}}function Ap(n){for(;qe!==null;){var r=qe;if(r===n){qe=null;break}var a=r.sibling;if(a!==null){a.return=r.return,qe=a;break}qe=r.return}}function Cp(n){for(;qe!==null;){var r=qe;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{ol(4,r)}catch(W){tn(r,a,W)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var g=r.return;try{c.componentDidMount()}catch(W){tn(r,g,W)}}var M=r.return;try{Au(r)}catch(W){tn(r,M,W)}break;case 5:var R=r.return;try{Au(r)}catch(W){tn(r,R,W)}}}catch(W){tn(r,r.return,W)}if(r===n){qe=null;break}var k=r.sibling;if(k!==null){k.return=r.return,qe=k;break}qe=r.return}}var r_=Math.ceil,al=D.ReactCurrentDispatcher,Pu=D.ReactCurrentOwner,ci=D.ReactCurrentBatchConfig,bt=0,gn=null,ln=null,Mn=0,Kn=0,ks=gr(0),fn=0,jo=null,Yr=0,ll=0,bu=0,Yo=null,Vn=null,Lu=0,zs=1/0,Ki=null,cl=!1,Du=null,Mr=null,ul=!1,wr=null,fl=0,Ko=0,Iu=null,hl=-1,dl=0;function Dn(){return(bt&6)!==0?be():hl!==-1?hl:hl=be()}function Er(n){return(n.mode&1)===0?1:(bt&2)!==0&&Mn!==0?Mn&-Mn:Hv.transition!==null?(dl===0&&(dl=xh()),dl):(n=Ut,n!==0||(n=window.event,n=n===void 0?16:Ph(n.type)),n)}function xi(n,r,a,c){if(50<Ko)throw Ko=0,Iu=null,Error(t(185));xo(n,a,c),((bt&2)===0||n!==gn)&&(n===gn&&((bt&2)===0&&(ll|=a),fn===4&&Tr(n,Mn)),Gn(n,c),a===1&&bt===0&&(r.mode&1)===0&&(zs=be()+500,Ha&&_r()))}function Gn(n,r){var a=n.callbackNode;dc(n,r);var c=xn(n,n===gn?Mn:0);if(c===0)a!==null&&Me(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Me(a),r===1)n.tag===0?Bv(Pp.bind(null,n)):pd(Pp.bind(null,n)),Ov(function(){(bt&6)===0&&_r()}),a=null;else{switch(Sh(c)){case 1:a=mt;break;case 4:a=nt;break;case 16:a=at;break;case 536870912:a=yt;break;default:a=at}a=Fp(a,Rp.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Rp(n,r){if(hl=-1,dl=0,(bt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Bs()&&n.callbackNode!==a)return null;var c=xn(n,n===gn?Mn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=pl(n,c);else{r=c;var g=bt;bt|=2;var M=Lp();(gn!==n||Mn!==r)&&(Ki=null,zs=be()+500,Jr(n,r));do try{a_();break}catch(k){bp(n,k)}while(!0);Jc(),al.current=M,bt=g,ln!==null?r=0:(gn=null,Mn=0,r=fn)}if(r!==0){if(r===2&&(g=_s(n),g!==0&&(c=g,r=Nu(n,g))),r===1)throw a=jo,Jr(n,0),Tr(n,c),Gn(n,be()),a;if(r===6)Tr(n,c);else{if(g=n.current.alternate,(c&30)===0&&!s_(g)&&(r=pl(n,c),r===2&&(M=_s(n),M!==0&&(c=M,r=Nu(n,M))),r===1))throw a=jo,Jr(n,0),Tr(n,c),Gn(n,be()),a;switch(n.finishedWork=g,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Zr(n,Vn,Ki);break;case 3:if(Tr(n,c),(c&130023424)===c&&(r=Lu+500-be(),10<r)){if(xn(n,0)!==0)break;if(g=n.suspendedLanes,(g&c)!==c){Dn(),n.pingedLanes|=n.suspendedLanes&g;break}n.timeoutHandle=Bc(Zr.bind(null,n,Vn,Ki),r);break}Zr(n,Vn,Ki);break;case 4:if(Tr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,g=-1;0<c;){var R=31-jt(c);M=1<<R,R=r[R],R>g&&(g=R),c&=~M}if(c=g,c=be()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*r_(c/1960))-c,10<c){n.timeoutHandle=Bc(Zr.bind(null,n,Vn,Ki),c);break}Zr(n,Vn,Ki);break;case 5:Zr(n,Vn,Ki);break;default:throw Error(t(329))}}}return Gn(n,be()),n.callbackNode===a?Rp.bind(null,n):null}function Nu(n,r){var a=Yo;return n.current.memoizedState.isDehydrated&&(Jr(n,r).flags|=256),n=pl(n,r),n!==2&&(r=Vn,Vn=a,r!==null&&Uu(r)),n}function Uu(n){Vn===null?Vn=n:Vn.push.apply(Vn,n)}function s_(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var g=a[c],M=g.getSnapshot;g=g.value;try{if(!mi(M(),g))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Tr(n,r){for(r&=~bu,r&=~ll,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-jt(r),c=1<<a;n[a]=-1,r&=~c}}function Pp(n){if((bt&6)!==0)throw Error(t(327));Bs();var r=xn(n,0);if((r&1)===0)return Gn(n,be()),null;var a=pl(n,r);if(n.tag!==0&&a===2){var c=_s(n);c!==0&&(r=c,a=Nu(n,c))}if(a===1)throw a=jo,Jr(n,0),Tr(n,r),Gn(n,be()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Zr(n,Vn,Ki),Gn(n,be()),null}function Ou(n,r){var a=bt;bt|=1;try{return n(r)}finally{bt=a,bt===0&&(zs=be()+500,Ha&&_r())}}function Kr(n){wr!==null&&wr.tag===0&&(bt&6)===0&&Bs();var r=bt;bt|=1;var a=ci.transition,c=Ut;try{if(ci.transition=null,Ut=1,n)return n()}finally{Ut=c,ci.transition=a,bt=r,(bt&6)===0&&_r()}}function Fu(){Kn=ks.current,$t(ks)}function Jr(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Uv(a)),ln!==null)for(a=ln.return;a!==null;){var c=a;switch(Xc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&za();break;case 3:Us(),$t(zn),$t(En),su();break;case 5:iu(c);break;case 4:Us();break;case 13:$t(Zt);break;case 19:$t(Zt);break;case 10:Zc(c.type._context);break;case 22:case 23:Fu()}a=a.return}if(gn=n,ln=n=Ar(n.current,null),Mn=Kn=r,fn=0,jo=null,bu=ll=Yr=0,Vn=Yo=null,Xr!==null){for(r=0;r<Xr.length;r++)if(a=Xr[r],c=a.interleaved,c!==null){a.interleaved=null;var g=c.next,M=a.pending;if(M!==null){var R=M.next;M.next=g,c.next=R}a.pending=c}Xr=null}return n}function bp(n,r){do{var a=ln;try{if(Jc(),Ja.current=tl,Za){for(var c=Qt.memoizedState;c!==null;){var g=c.queue;g!==null&&(g.pending=null),c=c.next}Za=!1}if(jr=0,mn=un=Qt=null,Vo=!1,Go=0,Pu.current=null,a===null||a.return===null){fn=1,jo=r,ln=null;break}e:{var M=n,R=a.return,k=a,W=r;if(r=Mn,k.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var ce=W,Te=k,Le=Te.tag;if((Te.mode&1)===0&&(Le===0||Le===11||Le===15)){var we=Te.alternate;we?(Te.updateQueue=we.updateQueue,Te.memoizedState=we.memoizedState,Te.lanes=we.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var Ge=tp(R);if(Ge!==null){Ge.flags&=-257,np(Ge,R,k,M,r),Ge.mode&1&&ep(M,ce,r),r=Ge,W=ce;var je=r.updateQueue;if(je===null){var Je=new Set;Je.add(W),r.updateQueue=Je}else je.add(W);break e}else{if((r&1)===0){ep(M,ce,r),ku();break e}W=Error(t(426))}}else if(Yt&&k.mode&1){var sn=tp(R);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),np(sn,R,k,M,r),Yc(Os(W,k));break e}}M=W=Os(W,k),fn!==4&&(fn=2),Yo===null?Yo=[M]:Yo.push(M),M=R;do{switch(M.tag){case 3:M.flags|=65536,r&=-r,M.lanes|=r;var ie=Zd(M,W,r);Td(M,ie);break e;case 1:k=W;var Y=M.type,se=M.stateNode;if((M.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Mr===null||!Mr.has(se)))){M.flags|=65536,r&=-r,M.lanes|=r;var Ie=Qd(M,k,r);Td(M,Ie);break e}}M=M.return}while(M!==null)}Ip(a)}catch(Ze){r=Ze,ln===a&&a!==null&&(ln=a=a.return);continue}break}while(!0)}function Lp(){var n=al.current;return al.current=tl,n===null?tl:n}function ku(){(fn===0||fn===3||fn===2)&&(fn=4),gn===null||(Yr&268435455)===0&&(ll&268435455)===0||Tr(gn,Mn)}function pl(n,r){var a=bt;bt|=2;var c=Lp();(gn!==n||Mn!==r)&&(Ki=null,Jr(n,r));do try{o_();break}catch(g){bp(n,g)}while(!0);if(Jc(),bt=a,al.current=c,ln!==null)throw Error(t(261));return gn=null,Mn=0,fn}function o_(){for(;ln!==null;)Dp(ln)}function a_(){for(;ln!==null&&!De();)Dp(ln)}function Dp(n){var r=Op(n.alternate,n,Kn);n.memoizedProps=n.pendingProps,r===null?Ip(n):ln=r,Pu.current=null}function Ip(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=Qv(a,r,Kn),a!==null){ln=a;return}}else{if(a=e_(a,r),a!==null){a.flags&=32767,ln=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{fn=6,ln=null;return}}if(r=r.sibling,r!==null){ln=r;return}ln=r=n}while(r!==null);fn===0&&(fn=5)}function Zr(n,r,a){var c=Ut,g=ci.transition;try{ci.transition=null,Ut=1,l_(n,r,a,c)}finally{ci.transition=g,Ut=c}return null}function l_(n,r,a,c){do Bs();while(wr!==null);if((bt&6)!==0)throw Error(t(327));a=n.finishedWork;var g=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var M=a.lanes|a.childLanes;if(V0(n,M),n===gn&&(ln=gn=null,Mn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ul||(ul=!0,Fp(at,function(){return Bs(),null})),M=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||M){M=ci.transition,ci.transition=null;var R=Ut;Ut=1;var k=bt;bt|=4,Pu.current=null,n_(n,a),wp(a,n),Rv(kc),Ta=!!Fc,kc=Fc=null,n.current=a,i_(a),me(),bt=k,Ut=R,ci.transition=M}else n.current=a;if(ul&&(ul=!1,wr=n,fl=g),M=n.pendingLanes,M===0&&(Mr=null),gt(a.stateNode),Gn(n,be()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)g=r[a],c(g.value,{componentStack:g.stack,digest:g.digest});if(cl)throw cl=!1,n=Du,Du=null,n;return(fl&1)!==0&&n.tag!==0&&Bs(),M=n.pendingLanes,(M&1)!==0?n===Iu?Ko++:(Ko=0,Iu=n):Ko=0,_r(),null}function Bs(){if(wr!==null){var n=Sh(fl),r=ci.transition,a=Ut;try{if(ci.transition=null,Ut=16>n?16:n,wr===null)var c=!1;else{if(n=wr,wr=null,fl=0,(bt&6)!==0)throw Error(t(331));var g=bt;for(bt|=4,qe=n.current;qe!==null;){var M=qe,R=M.child;if((qe.flags&16)!==0){var k=M.deletions;if(k!==null){for(var W=0;W<k.length;W++){var ce=k[W];for(qe=ce;qe!==null;){var Te=qe;switch(Te.tag){case 0:case 11:case 15:qo(8,Te,M)}var Le=Te.child;if(Le!==null)Le.return=Te,qe=Le;else for(;qe!==null;){Te=qe;var we=Te.sibling,Ge=Te.return;if(_p(Te),Te===ce){qe=null;break}if(we!==null){we.return=Ge,qe=we;break}qe=Ge}}}var je=M.alternate;if(je!==null){var Je=je.child;if(Je!==null){je.child=null;do{var sn=Je.sibling;Je.sibling=null,Je=sn}while(Je!==null)}}qe=M}}if((M.subtreeFlags&2064)!==0&&R!==null)R.return=M,qe=R;else e:for(;qe!==null;){if(M=qe,(M.flags&2048)!==0)switch(M.tag){case 0:case 11:case 15:qo(9,M,M.return)}var ie=M.sibling;if(ie!==null){ie.return=M.return,qe=ie;break e}qe=M.return}}var Y=n.current;for(qe=Y;qe!==null;){R=qe;var se=R.child;if((R.subtreeFlags&2064)!==0&&se!==null)se.return=R,qe=se;else e:for(R=Y;qe!==null;){if(k=qe,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:ol(9,k)}}catch(Ze){tn(k,k.return,Ze)}if(k===R){qe=null;break e}var Ie=k.sibling;if(Ie!==null){Ie.return=k.return,qe=Ie;break e}qe=k.return}}if(bt=g,_r(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(et,n)}catch{}c=!0}return c}finally{Ut=a,ci.transition=r}}return!1}function Np(n,r,a){r=Os(a,r),r=Zd(n,r,1),n=xr(n,r,1),r=Dn(),n!==null&&(xo(n,1,r),Gn(n,r))}function tn(n,r,a){if(n.tag===3)Np(n,n,a);else for(;r!==null;){if(r.tag===3){Np(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Mr===null||!Mr.has(c))){n=Os(a,n),n=Qd(r,n,1),r=xr(r,n,1),n=Dn(),r!==null&&(xo(r,1,n),Gn(r,n));break}}r=r.return}}function c_(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Dn(),n.pingedLanes|=n.suspendedLanes&a,gn===n&&(Mn&a)===a&&(fn===4||fn===3&&(Mn&130023424)===Mn&&500>be()-Lu?Jr(n,0):bu|=a),Gn(n,r)}function Up(n,r){r===0&&((n.mode&1)===0?r=1:(r=Xn,Xn<<=1,(Xn&130023424)===0&&(Xn=4194304)));var a=Dn();n=qi(n,r),n!==null&&(xo(n,r,a),Gn(n,a))}function u_(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Up(n,a)}function f_(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,g=n.memoizedState;g!==null&&(a=g.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Up(n,a)}var Op;Op=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||zn.current)Hn=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Hn=!1,Zv(n,r,a);Hn=(n.flags&131072)!==0}else Hn=!1,Yt&&(r.flags&1048576)!==0&&md(r,Ga,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;rl(n,r),n=r.pendingProps;var g=Rs(r,En.current);Ns(r,a),g=lu(null,r,c,n,g,a);var M=cu();return r.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Bn(c)?(M=!0,Ba(r)):M=!1,r.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,tu(r),g.updater=nl,r.stateNode=g,g._reactInternals=r,mu(r,c,n,a),r=yu(null,r,c,!0,M,a)):(r.tag=0,Yt&&M&&$c(r),Ln(null,r,g,a),r=r.child),r;case 16:c=r.elementType;e:{switch(rl(n,r),n=r.pendingProps,g=c._init,c=g(c._payload),r.type=c,g=r.tag=d_(c),n=vi(c,n),g){case 0:r=_u(null,r,c,n,a);break e;case 1:r=lp(null,r,c,n,a);break e;case 11:r=ip(null,r,c,n,a);break e;case 14:r=rp(null,r,c,vi(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,g=r.pendingProps,g=r.elementType===c?g:vi(c,g),_u(n,r,c,g,a);case 1:return c=r.type,g=r.pendingProps,g=r.elementType===c?g:vi(c,g),lp(n,r,c,g,a);case 3:e:{if(cp(r),n===null)throw Error(t(387));c=r.pendingProps,M=r.memoizedState,g=M.element,Ed(n,r),Ya(r,c,null,a);var R=r.memoizedState;if(c=R.element,M.isDehydrated)if(M={element:c,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},r.updateQueue.baseState=M,r.memoizedState=M,r.flags&256){g=Os(Error(t(423)),r),r=up(n,r,c,a,g);break e}else if(c!==g){g=Os(Error(t(424)),r),r=up(n,r,c,a,g);break e}else for(Yn=mr(r.stateNode.containerInfo.firstChild),jn=r,Yt=!0,gi=null,a=Md(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ls(),c===g){r=Yi(n,r,a);break e}Ln(n,r,c,a)}r=r.child}return r;case 5:return Cd(r),n===null&&jc(r),c=r.type,g=r.pendingProps,M=n!==null?n.memoizedProps:null,R=g.children,zc(c,g)?R=null:M!==null&&zc(c,M)&&(r.flags|=32),ap(n,r),Ln(n,r,R,a),r.child;case 6:return n===null&&jc(r),null;case 13:return fp(n,r,a);case 4:return nu(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Ds(r,null,c,a):Ln(n,r,c,a),r.child;case 11:return c=r.type,g=r.pendingProps,g=r.elementType===c?g:vi(c,g),ip(n,r,c,g,a);case 7:return Ln(n,r,r.pendingProps,a),r.child;case 8:return Ln(n,r,r.pendingProps.children,a),r.child;case 12:return Ln(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,g=r.pendingProps,M=r.memoizedProps,R=g.value,Vt(Xa,c._currentValue),c._currentValue=R,M!==null)if(mi(M.value,R)){if(M.children===g.children&&!zn.current){r=Yi(n,r,a);break e}}else for(M=r.child,M!==null&&(M.return=r);M!==null;){var k=M.dependencies;if(k!==null){R=M.child;for(var W=k.firstContext;W!==null;){if(W.context===c){if(M.tag===1){W=ji(-1,a&-a),W.tag=2;var ce=M.updateQueue;if(ce!==null){ce=ce.shared;var Te=ce.pending;Te===null?W.next=W:(W.next=Te.next,Te.next=W),ce.pending=W}}M.lanes|=a,W=M.alternate,W!==null&&(W.lanes|=a),Qc(M.return,a,r),k.lanes|=a;break}W=W.next}}else if(M.tag===10)R=M.type===r.type?null:M.child;else if(M.tag===18){if(R=M.return,R===null)throw Error(t(341));R.lanes|=a,k=R.alternate,k!==null&&(k.lanes|=a),Qc(R,a,r),R=M.sibling}else R=M.child;if(R!==null)R.return=M;else for(R=M;R!==null;){if(R===r){R=null;break}if(M=R.sibling,M!==null){M.return=R.return,R=M;break}R=R.return}M=R}Ln(n,r,g.children,a),r=r.child}return r;case 9:return g=r.type,c=r.pendingProps.children,Ns(r,a),g=ai(g),c=c(g),r.flags|=1,Ln(n,r,c,a),r.child;case 14:return c=r.type,g=vi(c,r.pendingProps),g=vi(c.type,g),rp(n,r,c,g,a);case 15:return sp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,g=r.pendingProps,g=r.elementType===c?g:vi(c,g),rl(n,r),r.tag=1,Bn(c)?(n=!0,Ba(r)):n=!1,Ns(r,a),Kd(r,c,g),mu(r,c,g,a),yu(null,r,c,!0,n,a);case 19:return dp(n,r,a);case 22:return op(n,r,a)}throw Error(t(156,r.tag))};function Fp(n,r){return Ae(n,r)}function h_(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(n,r,a,c){return new h_(n,r,a,c)}function zu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function d_(n){if(typeof n=="function")return zu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ae)return 11;if(n===he)return 14}return 2}function Ar(n,r){var a=n.alternate;return a===null?(a=ui(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ml(n,r,a,c,g,M){var R=2;if(c=n,typeof n=="function")zu(n)&&(R=1);else if(typeof n=="string")R=5;else e:switch(n){case F:return Qr(a.children,g,M,r);case q:R=8,g|=8;break;case U:return n=ui(12,a,r,g|2),n.elementType=U,n.lanes=M,n;case j:return n=ui(13,a,r,g),n.elementType=j,n.lanes=M,n;case oe:return n=ui(19,a,r,g),n.elementType=oe,n.lanes=M,n;case de:return gl(a,g,M,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case L:R=10;break e;case ne:R=9;break e;case ae:R=11;break e;case he:R=14;break e;case _e:R=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ui(R,a,r,g),r.elementType=n,r.type=c,r.lanes=M,r}function Qr(n,r,a,c){return n=ui(7,n,c,r),n.lanes=a,n}function gl(n,r,a,c){return n=ui(22,n,c,r),n.elementType=de,n.lanes=a,n.stateNode={isHidden:!1},n}function Bu(n,r,a){return n=ui(6,n,null,r),n.lanes=a,n}function Hu(n,r,a){return r=ui(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function p_(n,r,a,c,g){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pc(0),this.expirationTimes=pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.identifierPrefix=c,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Vu(n,r,a,c,g,M,R,k,W){return n=new p_(n,r,a,k,W),r===1?(r=1,M===!0&&(r|=8)):r=0,M=ui(3,null,null,r),n.current=M,M.stateNode=n,M.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},tu(M),n}function m_(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function kp(n){if(!n)return vr;n=n._reactInternals;e:{if(b(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Bn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Bn(a))return hd(n,a,r)}return r}function zp(n,r,a,c,g,M,R,k,W){return n=Vu(a,c,!0,n,g,M,R,k,W),n.context=kp(null),a=n.current,c=Dn(),g=Er(a),M=ji(c,g),M.callback=r??null,xr(a,M,g),n.current.lanes=g,xo(n,g,c),Gn(n,c),n}function vl(n,r,a,c){var g=r.current,M=Dn(),R=Er(g);return a=kp(a),r.context===null?r.context=a:r.pendingContext=a,r=ji(M,R),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=xr(g,r,R),n!==null&&(xi(n,g,R,M),ja(n,g,R)),R}function _l(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Bp(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Gu(n,r){Bp(n,r),(n=n.alternate)&&Bp(n,r)}function g_(){return null}var Hp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Wu(n){this._internalRoot=n}yl.prototype.render=Wu.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));vl(n,r,null,null)},yl.prototype.unmount=Wu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Kr(function(){vl(null,n,null,null)}),r[Gi]=null}};function yl(n){this._internalRoot=n}yl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Eh();n={blockedOn:null,target:n,priority:r};for(var a=0;a<hr.length&&r!==0&&r<hr[a].priority;a++);hr.splice(a,0,n),a===0&&Ch(n)}};function $u(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function v_(n,r,a,c,g){if(g){if(typeof c=="function"){var M=c;c=function(){var ce=_l(R);M.call(ce)}}var R=zp(r,c,n,0,null,!1,!1,"",Vp);return n._reactRootContainer=R,n[Gi]=R.current,No(n.nodeType===8?n.parentNode:n),Kr(),R}for(;g=n.lastChild;)n.removeChild(g);if(typeof c=="function"){var k=c;c=function(){var ce=_l(W);k.call(ce)}}var W=Vu(n,0,!1,null,null,!1,!1,"",Vp);return n._reactRootContainer=W,n[Gi]=W.current,No(n.nodeType===8?n.parentNode:n),Kr(function(){vl(r,W,a,c)}),W}function Sl(n,r,a,c,g){var M=a._reactRootContainer;if(M){var R=M;if(typeof g=="function"){var k=g;g=function(){var W=_l(R);k.call(W)}}vl(r,R,n,g)}else R=v_(a,r,n,g,c);return _l(R)}Mh=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Vi(r.pendingLanes);a!==0&&(mc(r,a|1),Gn(r,be()),(bt&6)===0&&(zs=be()+500,_r()))}break;case 13:Kr(function(){var c=qi(n,1);if(c!==null){var g=Dn();xi(c,n,1,g)}}),Gu(n,1)}},gc=function(n){if(n.tag===13){var r=qi(n,134217728);if(r!==null){var a=Dn();xi(r,n,134217728,a)}Gu(n,134217728)}},wh=function(n){if(n.tag===13){var r=Er(n),a=qi(n,r);if(a!==null){var c=Dn();xi(a,n,r,c)}Gu(n,r)}},Eh=function(){return Ut},Th=function(n,r){var a=Ut;try{return Ut=n,r()}finally{Ut=a}},ge=function(n,r,a){switch(r){case"input":if(_t(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var g=ka(c);if(!g)throw Error(t(90));it(c),_t(c,g)}}}break;case"textarea":Pe(n,a);break;case"select":r=a.value,r!=null&&fe(n,!!a.multiple,r,!1)}},rn=Ou,Rt=Kr;var __={usingClientEntryPoint:!1,Events:[Fo,As,ka,It,Ft,Ou]},Jo={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},y_={bundleType:Jo.bundleType,version:Jo.version,rendererPackageName:Jo.rendererPackageName,rendererConfig:Jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=K(n),n===null?null:n.stateNode},findFiberByHostInstance:Jo.findFiberByHostInstance||g_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{et=Ml.inject(y_),Pt=Ml}catch{}}return Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=__,Wn.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$u(r))throw Error(t(200));return m_(n,r,null,a)},Wn.createRoot=function(n,r){if(!$u(n))throw Error(t(299));var a=!1,c="",g=Hp;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(g=r.onRecoverableError)),r=Vu(n,1,!1,null,null,a,!1,c,g),n[Gi]=r.current,No(n.nodeType===8?n.parentNode:n),new Wu(r)},Wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=K(r),n=n===null?null:n.stateNode,n},Wn.flushSync=function(n){return Kr(n)},Wn.hydrate=function(n,r,a){if(!xl(r))throw Error(t(200));return Sl(null,n,r,!0,a)},Wn.hydrateRoot=function(n,r,a){if(!$u(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,g=!1,M="",R=Hp;if(a!=null&&(a.unstable_strictMode===!0&&(g=!0),a.identifierPrefix!==void 0&&(M=a.identifierPrefix),a.onRecoverableError!==void 0&&(R=a.onRecoverableError)),r=zp(r,null,n,1,a??null,g,!1,M,R),n[Gi]=r.current,No(n),c)for(n=0;n<c.length;n++)a=c[n],g=a._getVersion,g=g(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,g]:r.mutableSourceEagerHydrationData.push(a,g);return new yl(r)},Wn.render=function(n,r,a){if(!xl(r))throw Error(t(200));return Sl(null,n,r,!1,a)},Wn.unmountComponentAtNode=function(n){if(!xl(n))throw Error(t(40));return n._reactRootContainer?(Kr(function(){Sl(null,null,n,!1,function(){n._reactRootContainer=null,n[Gi]=null})}),!0):!1},Wn.unstable_batchedUpdates=Ou,Wn.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!xl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Sl(n,r,a,!1,c)},Wn.version="18.3.1-next-f1338f8080-20240426",Wn}var Kp;function P_(){if(Kp)return ju.exports;Kp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ju.exports=R_(),ju.exports}var Jp;function b_(){if(Jp)return wl;Jp=1;var s=P_();return wl.createRoot=s.createRoot,wl.hydrateRoot=s.hydrateRoot,wl}var L_=b_();const D_=Kg(L_),Qn={snow_smg:{id:"snow_smg",name:"Snowburst SMG",type:"hitscan",damage:11,fireRate:12,spread:.035,magSize:32,reloadTime:1.8},candy_shotgun:{id:"candy_shotgun",name:"Candy Cane Shotgun",type:"hitscan",damage:10,pellets:9,fireRate:1.2,spread:.18,magSize:6,reloadTime:2.4},gift_launcher:{id:"gift_launcher",name:"Gift Launcher",type:"projectile",damage:80,fireRate:.75,spread:.05,magSize:4,reloadTime:2.6,projectileSpeed:36},icicle_rifle:{id:"icicle_rifle",name:"Icicle Rifle",type:"hitscan",damage:58,fireRate:.9,spread:.01,magSize:5,reloadTime:2.3}},Wf=[{id:"elf",name:"Workshop Elf",primaryColor:"#1f8a3b",accentColor:"#d62839"},{id:"reindeer",name:"Reindeer Ranger",primaryColor:"#8b5a2b",accentColor:"#c41e3d"},{id:"snowman",name:"Frosty Scout",primaryColor:"#e8f1f2",accentColor:"#1b4965"},{id:"gingerbread",name:"Ginger Gunner",primaryColor:"#b5651d",accentColor:"#f2d0a4"},{id:"nutcracker",name:"Nutcracker Guard",primaryColor:"#102542",accentColor:"#e63946"}],I_={heaven:{id:"heaven",name:"Celestial Cheer",description:"Golden clouds, choir pads, floating candy bridges.",theme:"heaven"},earth:{id:"earth",name:"Town Square",description:"Snowy village plaza with trees, gifts, and lamp posts.",theme:"earth"},hell:{id:"hell",name:"Infernal Workshop",description:"Lava rivers, basalt cliffs, glowing runes of winter fire.",theme:"hell"}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ih="164",N_=0,Zp=1,U_=2,Jg=1,O_=2,rr=3,kr=0,$n=1,sr=2,Or=0,lo=1,$f=2,Qp=3,em=4,F_=5,ds=100,k_=101,z_=102,B_=103,H_=104,V_=200,G_=201,W_=202,$_=203,Xf=204,qf=205,X_=206,q_=207,j_=208,Y_=209,K_=210,J_=211,Z_=212,Q_=213,ey=214,ty=0,ny=1,iy=2,nc=3,ry=4,sy=5,oy=6,ay=7,Zg=0,ly=1,cy=2,Fr=0,uy=1,fy=2,hy=3,dy=4,py=5,my=6,gy=7,Qg=300,fo=301,ho=302,jf=303,Yf=304,ac=306,Kf=1e3,ms=1001,Jf=1002,di=1003,vy=1004,El=1005,Ci=1006,Ju=1007,gs=1008,zr=1009,_y=1010,yy=1011,e0=1012,t0=1013,po=1014,Ur=1015,lc=1016,n0=1017,i0=1018,ya=1020,xy=35902,Sy=1021,My=1022,Fi=1023,wy=1024,Ey=1025,co=1026,ma=1027,Ty=1028,r0=1029,Ay=1030,s0=1031,o0=1033,Zu=33776,Qu=33777,ef=33778,tf=33779,tm=35840,nm=35841,im=35842,rm=35843,sm=36196,om=37492,am=37496,lm=37808,cm=37809,um=37810,fm=37811,hm=37812,dm=37813,pm=37814,mm=37815,gm=37816,vm=37817,_m=37818,ym=37819,xm=37820,Sm=37821,nf=36492,Mm=36494,wm=36495,Cy=36283,Em=36284,Tm=36285,Am=36286,Ry=3200,Py=3201,a0=0,by=1,Nr="",Ni="srgb",Hr="srgb-linear",rh="display-p3",uc="display-p3-linear",ic="linear",Xt="srgb",rc="rec709",sc="p3",Hs=7680,Cm=519,Ly=512,Dy=513,Iy=514,l0=515,Ny=516,Uy=517,Oy=518,Fy=519,Rm=35044,Pm="300 es",or=2e3,oc=2001;class go{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bm=1234567;const fa=Math.PI/180,ga=180/Math.PI;function vo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function yn(s,e,t){return Math.max(e,Math.min(t,s))}function sh(s,e){return(s%e+e)%e}function ky(s,e,t,i,o){return i+(s-e)*(o-i)/(t-e)}function zy(s,e,t){return s!==e?(t-s)/(e-s):0}function ha(s,e,t){return(1-t)*s+t*e}function By(s,e,t,i){return ha(s,e,1-Math.exp(-t*i))}function Hy(s,e=1){return e-Math.abs(sh(s,e*2)-e)}function Vy(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Gy(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Wy(s,e){return s+Math.floor(Math.random()*(e-s+1))}function $y(s,e){return s+Math.random()*(e-s)}function Xy(s){return s*(.5-Math.random())}function qy(s){s!==void 0&&(bm=s);let e=bm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jy(s){return s*fa}function Yy(s){return s*ga}function Ky(s){return(s&s-1)===0&&s!==0}function Jy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Zy(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Qy(s,e,t,i,o){const l=Math.cos,u=Math.sin,f=l(t/2),p=u(t/2),h=l((e+i)/2),m=u((e+i)/2),d=l((e-i)/2),_=u((e-i)/2),y=l((i-e)/2),w=u((i-e)/2);switch(o){case"XYX":s.set(f*m,p*d,p*_,f*h);break;case"YZY":s.set(p*_,f*m,p*d,f*h);break;case"ZXZ":s.set(p*d,p*_,f*m,f*h);break;case"XZX":s.set(f*m,p*w,p*y,f*h);break;case"YXY":s.set(p*y,f*m,p*w,f*h);break;case"ZYZ":s.set(p*w,p*y,f*m,f*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function so(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function In(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Tl={DEG2RAD:fa,RAD2DEG:ga,generateUUID:vo,clamp:yn,euclideanModulo:sh,mapLinear:ky,inverseLerp:zy,lerp:ha,damp:By,pingpong:Hy,smoothstep:Vy,smootherstep:Gy,randInt:Wy,randFloat:$y,randFloatSpread:Xy,seededRandom:qy,degToRad:jy,radToDeg:Yy,isPowerOfTwo:Ky,ceilPowerOfTwo:Jy,floorPowerOfTwo:Zy,setQuaternionFromProperEuler:Qy,normalize:In,denormalize:so};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*i-u*o+e.x,this.y=l*o+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mt{constructor(e,t,i,o,l,u,f,p,h){Mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,l,u,f,p,h)}set(e,t,i,o,l,u,f,p,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=l,m[5]=p,m[6]=i,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,l=this.elements,u=i[0],f=i[3],p=i[6],h=i[1],m=i[4],d=i[7],_=i[2],y=i[5],w=i[8],E=o[0],x=o[3],S=o[6],C=o[1],P=o[4],D=o[7],V=o[2],O=o[5],F=o[8];return l[0]=u*E+f*C+p*V,l[3]=u*x+f*P+p*O,l[6]=u*S+f*D+p*F,l[1]=h*E+m*C+d*V,l[4]=h*x+m*P+d*O,l[7]=h*S+m*D+d*F,l[2]=_*E+y*C+w*V,l[5]=_*x+y*P+w*O,l[8]=_*S+y*D+w*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],m=e[8];return t*u*m-t*f*h-i*l*m+i*f*p+o*l*h-o*u*p}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],m=e[8],d=m*u-f*h,_=f*p-m*l,y=h*l-u*p,w=t*d+i*_+o*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=d*E,e[1]=(o*h-m*i)*E,e[2]=(f*i-o*u)*E,e[3]=_*E,e[4]=(m*t-o*p)*E,e[5]=(o*l-f*t)*E,e[6]=y*E,e[7]=(i*p-h*t)*E,e[8]=(u*t-i*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,l,u,f){const p=Math.cos(l),h=Math.sin(l);return this.set(i*p,i*h,-i*(p*u+h*f)+u+e,-o*h,o*p,-o*(-h*u+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(rf.makeScale(e,t)),this}rotate(e){return this.premultiply(rf.makeRotation(-e)),this}translate(e,t){return this.premultiply(rf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rf=new Mt;function c0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function va(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ex(){const s=va("canvas");return s.style.display="block",s}const Lm={};function tx(s){s in Lm||(Lm[s]=!0,console.warn(s))}const Dm=new Mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Im=new Mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Al={[Hr]:{transfer:ic,primaries:rc,toReference:s=>s,fromReference:s=>s},[Ni]:{transfer:Xt,primaries:rc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[uc]:{transfer:ic,primaries:sc,toReference:s=>s.applyMatrix3(Im),fromReference:s=>s.applyMatrix3(Dm)},[rh]:{transfer:Xt,primaries:sc,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Im),fromReference:s=>s.applyMatrix3(Dm).convertLinearToSRGB()}},nx=new Set([Hr,uc]),kt={enabled:!0,_workingColorSpace:Hr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!nx.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=Al[e].toReference,o=Al[t].fromReference;return o(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Al[s].primaries},getTransfer:function(s){return s===Nr?ic:Al[s].transfer}};function uo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function sf(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Vs;class ix{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vs===void 0&&(Vs=va("canvas")),Vs.width=e.width,Vs.height=e.height;const i=Vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=va("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=uo(l[u]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(uo(t[i]/255)*255):t[i]=uo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rx=0;class u0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=vo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(of(o[u].image)):l.push(of(o[u]))}else l=of(o);i.url=l}return t||(e.images[this.uuid]=i),i}}function of(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ix.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sx=0;class On extends go{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,i=ms,o=ms,l=Ci,u=gs,f=Fi,p=zr,h=On.DEFAULT_ANISOTROPY,m=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=vo(),this.name="",this.source=new u0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kf:e.x=e.x-Math.floor(e.x);break;case ms:e.x=e.x<0?0:1;break;case Jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kf:e.y=e.y-Math.floor(e.y);break;case ms:e.y=e.y<0?0:1;break;case Jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Qg;On.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,i=0,o=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*i+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*i+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*i+u[11]*o+u[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,l;const p=e.elements,h=p[0],m=p[4],d=p[8],_=p[1],y=p[5],w=p[9],E=p[2],x=p[6],S=p[10];if(Math.abs(m-_)<.01&&Math.abs(d-E)<.01&&Math.abs(w-x)<.01){if(Math.abs(m+_)<.1&&Math.abs(d+E)<.1&&Math.abs(w+x)<.1&&Math.abs(h+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,D=(y+1)/2,V=(S+1)/2,O=(m+_)/4,F=(d+E)/4,q=(w+x)/4;return P>D&&P>V?P<.01?(i=0,o=.707106781,l=.707106781):(i=Math.sqrt(P),o=O/i,l=F/i):D>V?D<.01?(i=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),i=O/o,l=q/o):V<.01?(i=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),i=F/l,o=q/l),this.set(i,o,l,t),this}let C=Math.sqrt((x-w)*(x-w)+(d-E)*(d-E)+(_-m)*(_-m));return Math.abs(C)<.001&&(C=1),this.x=(x-w)/C,this.y=(d-E)/C,this.z=(_-m)/C,this.w=Math.acos((h+y+S-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ox extends go{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const l=new On(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);l.flipY=!1,l.generateMipmaps=i.generateMipmaps,l.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new u0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends ox{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class f0 extends On{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ax extends On{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xa{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,l,u,f){let p=i[o+0],h=i[o+1],m=i[o+2],d=i[o+3];const _=l[u+0],y=l[u+1],w=l[u+2],E=l[u+3];if(f===0){e[t+0]=p,e[t+1]=h,e[t+2]=m,e[t+3]=d;return}if(f===1){e[t+0]=_,e[t+1]=y,e[t+2]=w,e[t+3]=E;return}if(d!==E||p!==_||h!==y||m!==w){let x=1-f;const S=p*_+h*y+m*w+d*E,C=S>=0?1:-1,P=1-S*S;if(P>Number.EPSILON){const V=Math.sqrt(P),O=Math.atan2(V,S*C);x=Math.sin(x*O)/V,f=Math.sin(f*O)/V}const D=f*C;if(p=p*x+_*D,h=h*x+y*D,m=m*x+w*D,d=d*x+E*D,x===1-f){const V=1/Math.sqrt(p*p+h*h+m*m+d*d);p*=V,h*=V,m*=V,d*=V}}e[t]=p,e[t+1]=h,e[t+2]=m,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,o,l,u){const f=i[o],p=i[o+1],h=i[o+2],m=i[o+3],d=l[u],_=l[u+1],y=l[u+2],w=l[u+3];return e[t]=f*w+m*d+p*y-h*_,e[t+1]=p*w+m*_+h*d-f*y,e[t+2]=h*w+m*y+f*_-p*d,e[t+3]=m*w-f*d-p*_-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,p=Math.sin,h=f(i/2),m=f(o/2),d=f(l/2),_=p(i/2),y=p(o/2),w=p(l/2);switch(u){case"XYZ":this._x=_*m*d+h*y*w,this._y=h*y*d-_*m*w,this._z=h*m*w+_*y*d,this._w=h*m*d-_*y*w;break;case"YXZ":this._x=_*m*d+h*y*w,this._y=h*y*d-_*m*w,this._z=h*m*w-_*y*d,this._w=h*m*d+_*y*w;break;case"ZXY":this._x=_*m*d-h*y*w,this._y=h*y*d+_*m*w,this._z=h*m*w+_*y*d,this._w=h*m*d-_*y*w;break;case"ZYX":this._x=_*m*d-h*y*w,this._y=h*y*d+_*m*w,this._z=h*m*w-_*y*d,this._w=h*m*d+_*y*w;break;case"YZX":this._x=_*m*d+h*y*w,this._y=h*y*d+_*m*w,this._z=h*m*w-_*y*d,this._w=h*m*d-_*y*w;break;case"XZY":this._x=_*m*d-h*y*w,this._y=h*y*d-_*m*w,this._z=h*m*w+_*y*d,this._w=h*m*d+_*y*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],l=t[8],u=t[1],f=t[5],p=t[9],h=t[2],m=t[6],d=t[10],_=i+f+d;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(m-p)*y,this._y=(l-h)*y,this._z=(u-o)*y}else if(i>f&&i>d){const y=2*Math.sqrt(1+i-f-d);this._w=(m-p)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+h)/y}else if(f>d){const y=2*Math.sqrt(1+f-i-d);this._w=(l-h)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(p+m)/y}else{const y=2*Math.sqrt(1+d-i-f);this._w=(u-o)/y,this._x=(l+h)/y,this._y=(p+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,l=e._z,u=e._w,f=t._x,p=t._y,h=t._z,m=t._w;return this._x=i*m+u*f+o*h-l*p,this._y=o*m+u*p+l*f-i*h,this._z=l*m+u*h+i*p-o*f,this._w=u*m-i*f-o*p-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,l=this._z,u=this._w;let f=u*e._w+i*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=i,this._y=o,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*i+t*this._x,this._y=y*o+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const h=Math.sqrt(p),m=Math.atan2(h,f),d=Math.sin((1-t)*m)/h,_=Math.sin(t*m)/h;return this._w=u*d+this._w*_,this._x=i*d+this._x*_,this._y=o*d+this._y*_,this._z=l*d+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*o,this.y=l[1]*t+l[4]*i+l[7]*o,this.z=l[2]*t+l[5]*i+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*i+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*i+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*i+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,l=e.x,u=e.y,f=e.z,p=e.w,h=2*(u*o-f*i),m=2*(f*t-l*o),d=2*(l*i-u*t);return this.x=t+p*h+u*d-f*m,this.y=i+p*m+f*h-l*d,this.z=o+p*d+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*o,this.y=l[1]*t+l[5]*i+l[9]*o,this.z=l[2]*t+l[6]*i+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,l=e.z,u=t.x,f=t.y,p=t.z;return this.x=o*p-l*f,this.y=l*u-i*p,this.z=i*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return af.copy(this).projectOnVector(e),this.sub(af)}reflect(e){return this.sub(af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const af=new H,Nm=new xa;class Sa{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Si):Si.fromBufferAttribute(l,u),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cl.copy(i.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),Rl.subVectors(this.max,Qo),Gs.subVectors(e.a,Qo),Ws.subVectors(e.b,Qo),$s.subVectors(e.c,Qo),Rr.subVectors(Ws,Gs),Pr.subVectors($s,Ws),es.subVectors(Gs,$s);let t=[0,-Rr.z,Rr.y,0,-Pr.z,Pr.y,0,-es.z,es.y,Rr.z,0,-Rr.x,Pr.z,0,-Pr.x,es.z,0,-es.x,-Rr.y,Rr.x,0,-Pr.y,Pr.x,0,-es.y,es.x,0];return!lf(t,Gs,Ws,$s,Rl)||(t=[1,0,0,0,1,0,0,0,1],!lf(t,Gs,Ws,$s,Rl))?!1:(Pl.crossVectors(Rr,Pr),t=[Pl.x,Pl.y,Pl.z],lf(t,Gs,Ws,$s,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ji=[new H,new H,new H,new H,new H,new H,new H,new H],Si=new H,Cl=new Sa,Gs=new H,Ws=new H,$s=new H,Rr=new H,Pr=new H,es=new H,Qo=new H,Rl=new H,Pl=new H,ts=new H;function lf(s,e,t,i,o){for(let l=0,u=s.length-3;l<=u;l+=3){ts.fromArray(s,l);const f=o.x*Math.abs(ts.x)+o.y*Math.abs(ts.y)+o.z*Math.abs(ts.z),p=e.dot(ts),h=t.dot(ts),m=i.dot(ts);if(Math.max(-Math.max(p,h,m),Math.min(p,h,m))>f)return!1}return!0}const lx=new Sa,ea=new H,cf=new H;class oh{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):lx.setFromPoints(e).getCenter(i);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const t=ea.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(ea,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(cf)),this.expandByPoint(ea.copy(e.center).sub(cf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new H,uf=new H,bl=new H,br=new H,ff=new H,Ll=new H,hf=new H;class h0{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){uf.copy(e).add(t).multiplyScalar(.5),bl.copy(t).sub(e).normalize(),br.copy(this.origin).sub(uf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(bl),f=br.dot(this.direction),p=-br.dot(bl),h=br.lengthSq(),m=Math.abs(1-u*u);let d,_,y,w;if(m>0)if(d=u*p-f,_=u*f-p,w=l*m,d>=0)if(_>=-w)if(_<=w){const E=1/m;d*=E,_*=E,y=d*(d+u*_+2*f)+_*(u*d+_+2*p)+h}else _=l,d=Math.max(0,-(u*_+f)),y=-d*d+_*(_+2*p)+h;else _=-l,d=Math.max(0,-(u*_+f)),y=-d*d+_*(_+2*p)+h;else _<=-w?(d=Math.max(0,-(-u*l+f)),_=d>0?-l:Math.min(Math.max(-l,-p),l),y=-d*d+_*(_+2*p)+h):_<=w?(d=0,_=Math.min(Math.max(-l,-p),l),y=_*(_+2*p)+h):(d=Math.max(0,-(u*l+f)),_=d>0?l:Math.min(Math.max(-l,-p),l),y=-d*d+_*(_+2*p)+h);else _=u>0?-l:l,d=Math.max(0,-(u*_+f)),y=-d*d+_*(_+2*p)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),o&&o.copy(uf).addScaledVector(bl,_),y}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const i=Zi.dot(this.direction),o=Zi.dot(Zi)-i*i,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=i-u,p=i+u;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,l,u,f,p;const h=1/this.direction.x,m=1/this.direction.y,d=1/this.direction.z,_=this.origin;return h>=0?(i=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(i=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),m>=0?(l=(e.min.y-_.y)*m,u=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,u=(e.min.y-_.y)*m),i>u||l>o||((l>i||isNaN(i))&&(i=l),(u<o||isNaN(o))&&(o=u),d>=0?(f=(e.min.z-_.z)*d,p=(e.max.z-_.z)*d):(f=(e.max.z-_.z)*d,p=(e.min.z-_.z)*d),i>p||f>o)||((f>i||i!==i)&&(i=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,i,o,l){ff.subVectors(t,e),Ll.subVectors(i,e),hf.crossVectors(ff,Ll);let u=this.direction.dot(hf),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;br.subVectors(this.origin,e);const p=f*this.direction.dot(Ll.crossVectors(br,Ll));if(p<0)return null;const h=f*this.direction.dot(ff.cross(br));if(h<0||p+h>u)return null;const m=-f*br.dot(hf);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,i,o,l,u,f,p,h,m,d,_,y,w,E,x){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,l,u,f,p,h,m,d,_,y,w,E,x)}set(e,t,i,o,l,u,f,p,h,m,d,_,y,w,E,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=o,S[1]=l,S[5]=u,S[9]=f,S[13]=p,S[2]=h,S[6]=m,S[10]=d,S[14]=_,S[3]=y,S[7]=w,S[11]=E,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/Xs.setFromMatrixColumn(e,0).length(),l=1/Xs.setFromMatrixColumn(e,1).length(),u=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,l=e.z,u=Math.cos(i),f=Math.sin(i),p=Math.cos(o),h=Math.sin(o),m=Math.cos(l),d=Math.sin(l);if(e.order==="XYZ"){const _=u*m,y=u*d,w=f*m,E=f*d;t[0]=p*m,t[4]=-p*d,t[8]=h,t[1]=y+w*h,t[5]=_-E*h,t[9]=-f*p,t[2]=E-_*h,t[6]=w+y*h,t[10]=u*p}else if(e.order==="YXZ"){const _=p*m,y=p*d,w=h*m,E=h*d;t[0]=_+E*f,t[4]=w*f-y,t[8]=u*h,t[1]=u*d,t[5]=u*m,t[9]=-f,t[2]=y*f-w,t[6]=E+_*f,t[10]=u*p}else if(e.order==="ZXY"){const _=p*m,y=p*d,w=h*m,E=h*d;t[0]=_-E*f,t[4]=-u*d,t[8]=w+y*f,t[1]=y+w*f,t[5]=u*m,t[9]=E-_*f,t[2]=-u*h,t[6]=f,t[10]=u*p}else if(e.order==="ZYX"){const _=u*m,y=u*d,w=f*m,E=f*d;t[0]=p*m,t[4]=w*h-y,t[8]=_*h+E,t[1]=p*d,t[5]=E*h+_,t[9]=y*h-w,t[2]=-h,t[6]=f*p,t[10]=u*p}else if(e.order==="YZX"){const _=u*p,y=u*h,w=f*p,E=f*h;t[0]=p*m,t[4]=E-_*d,t[8]=w*d+y,t[1]=d,t[5]=u*m,t[9]=-f*m,t[2]=-h*m,t[6]=y*d+w,t[10]=_-E*d}else if(e.order==="XZY"){const _=u*p,y=u*h,w=f*p,E=f*h;t[0]=p*m,t[4]=-d,t[8]=h*m,t[1]=_*d+E,t[5]=u*m,t[9]=y*d-w,t[2]=w*d-y,t[6]=f*m,t[10]=E*d+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cx,e,ux)}lookAt(e,t,i){const o=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Lr.crossVectors(i,Jn),Lr.lengthSq()===0&&(Math.abs(i.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Lr.crossVectors(i,Jn)),Lr.normalize(),Dl.crossVectors(Jn,Lr),o[0]=Lr.x,o[4]=Dl.x,o[8]=Jn.x,o[1]=Lr.y,o[5]=Dl.y,o[9]=Jn.y,o[2]=Lr.z,o[6]=Dl.z,o[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,l=this.elements,u=i[0],f=i[4],p=i[8],h=i[12],m=i[1],d=i[5],_=i[9],y=i[13],w=i[2],E=i[6],x=i[10],S=i[14],C=i[3],P=i[7],D=i[11],V=i[15],O=o[0],F=o[4],q=o[8],U=o[12],L=o[1],ne=o[5],ae=o[9],j=o[13],oe=o[2],he=o[6],_e=o[10],de=o[14],G=o[3],ue=o[7],te=o[11],z=o[15];return l[0]=u*O+f*L+p*oe+h*G,l[4]=u*F+f*ne+p*he+h*ue,l[8]=u*q+f*ae+p*_e+h*te,l[12]=u*U+f*j+p*de+h*z,l[1]=m*O+d*L+_*oe+y*G,l[5]=m*F+d*ne+_*he+y*ue,l[9]=m*q+d*ae+_*_e+y*te,l[13]=m*U+d*j+_*de+y*z,l[2]=w*O+E*L+x*oe+S*G,l[6]=w*F+E*ne+x*he+S*ue,l[10]=w*q+E*ae+x*_e+S*te,l[14]=w*U+E*j+x*de+S*z,l[3]=C*O+P*L+D*oe+V*G,l[7]=C*F+P*ne+D*he+V*ue,l[11]=C*q+P*ae+D*_e+V*te,l[15]=C*U+P*j+D*de+V*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],l=e[12],u=e[1],f=e[5],p=e[9],h=e[13],m=e[2],d=e[6],_=e[10],y=e[14],w=e[3],E=e[7],x=e[11],S=e[15];return w*(+l*p*d-o*h*d-l*f*_+i*h*_+o*f*y-i*p*y)+E*(+t*p*y-t*h*_+l*u*_-o*u*y+o*h*m-l*p*m)+x*(+t*h*d-t*f*y-l*u*d+i*u*y+l*f*m-i*h*m)+S*(-o*f*m-t*p*d+t*f*_+o*u*d-i*u*_+i*p*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],m=e[8],d=e[9],_=e[10],y=e[11],w=e[12],E=e[13],x=e[14],S=e[15],C=d*x*h-E*_*h+E*p*y-f*x*y-d*p*S+f*_*S,P=w*_*h-m*x*h-w*p*y+u*x*y+m*p*S-u*_*S,D=m*E*h-w*d*h+w*f*y-u*E*y-m*f*S+u*d*S,V=w*d*p-m*E*p-w*f*_+u*E*_+m*f*x-u*d*x,O=t*C+i*P+o*D+l*V;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=C*F,e[1]=(E*_*l-d*x*l-E*o*y+i*x*y+d*o*S-i*_*S)*F,e[2]=(f*x*l-E*p*l+E*o*h-i*x*h-f*o*S+i*p*S)*F,e[3]=(d*p*l-f*_*l-d*o*h+i*_*h+f*o*y-i*p*y)*F,e[4]=P*F,e[5]=(m*x*l-w*_*l+w*o*y-t*x*y-m*o*S+t*_*S)*F,e[6]=(w*p*l-u*x*l-w*o*h+t*x*h+u*o*S-t*p*S)*F,e[7]=(u*_*l-m*p*l+m*o*h-t*_*h-u*o*y+t*p*y)*F,e[8]=D*F,e[9]=(w*d*l-m*E*l-w*i*y+t*E*y+m*i*S-t*d*S)*F,e[10]=(u*E*l-w*f*l+w*i*h-t*E*h-u*i*S+t*f*S)*F,e[11]=(m*f*l-u*d*l-m*i*h+t*d*h+u*i*y-t*f*y)*F,e[12]=V*F,e[13]=(m*E*o-w*d*o+w*i*_-t*E*_-m*i*x+t*d*x)*F,e[14]=(w*f*o-u*E*o-w*i*p+t*E*p+u*i*x-t*f*x)*F,e[15]=(u*d*o-m*f*o+m*i*p-t*d*p-u*i*_+t*f*_)*F,this}scale(e){const t=this.elements,i=e.x,o=e.y,l=e.z;return t[0]*=i,t[4]*=o,t[8]*=l,t[1]*=i,t[5]*=o,t[9]*=l,t[2]*=i,t[6]*=o,t[10]*=l,t[3]*=i,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),l=1-i,u=e.x,f=e.y,p=e.z,h=l*u,m=l*f;return this.set(h*u+i,h*f-o*p,h*p+o*f,0,h*f+o*p,m*f+i,m*p-o*u,0,h*p-o*f,m*p+o*u,l*p*p+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,l,u){return this.set(1,i,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,l=t._x,u=t._y,f=t._z,p=t._w,h=l+l,m=u+u,d=f+f,_=l*h,y=l*m,w=l*d,E=u*m,x=u*d,S=f*d,C=p*h,P=p*m,D=p*d,V=i.x,O=i.y,F=i.z;return o[0]=(1-(E+S))*V,o[1]=(y+D)*V,o[2]=(w-P)*V,o[3]=0,o[4]=(y-D)*O,o[5]=(1-(_+S))*O,o[6]=(x+C)*O,o[7]=0,o[8]=(w+P)*F,o[9]=(x-C)*F,o[10]=(1-(_+E))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let l=Xs.set(o[0],o[1],o[2]).length();const u=Xs.set(o[4],o[5],o[6]).length(),f=Xs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],Mi.copy(this);const h=1/l,m=1/u,d=1/f;return Mi.elements[0]*=h,Mi.elements[1]*=h,Mi.elements[2]*=h,Mi.elements[4]*=m,Mi.elements[5]*=m,Mi.elements[6]*=m,Mi.elements[8]*=d,Mi.elements[9]*=d,Mi.elements[10]*=d,t.setFromRotationMatrix(Mi),i.x=l,i.y=u,i.z=f,this}makePerspective(e,t,i,o,l,u,f=or){const p=this.elements,h=2*l/(t-e),m=2*l/(i-o),d=(t+e)/(t-e),_=(i+o)/(i-o);let y,w;if(f===or)y=-(u+l)/(u-l),w=-2*u*l/(u-l);else if(f===oc)y=-u/(u-l),w=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=h,p[4]=0,p[8]=d,p[12]=0,p[1]=0,p[5]=m,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,i,o,l,u,f=or){const p=this.elements,h=1/(t-e),m=1/(i-o),d=1/(u-l),_=(t+e)*h,y=(i+o)*m;let w,E;if(f===or)w=(u+l)*d,E=-2*d;else if(f===oc)w=l*d,E=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*h,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*m,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=E,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xs=new H,Mi=new Jt,cx=new H(0,0,0),ux=new H(1,1,1),Lr=new H,Dl=new H,Jn=new H,Um=new Jt,Om=new xa;class zi{constructor(e=0,t=0,i=0,o=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],p=o[1],h=o[5],m=o[9],d=o[2],_=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(yn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-d,l),this._z=0);break;case"ZXY":this._x=Math.asin(yn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-d,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-yn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(yn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-d,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-yn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Um,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Om.setFromEuler(this),this.setFromQuaternion(Om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class ah{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fx=0;const Fm=new H,qs=new xa,Qi=new Jt,Il=new H,ta=new H,hx=new H,dx=new xa,km=new H(1,0,0),zm=new H(0,1,0),Bm=new H(0,0,1),Hm={type:"added"},px={type:"removed"},js={type:"childadded",child:null},df={type:"childremoved",child:null};class hn extends go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new H,t=new zi,i=new xa,o=new H(1,1,1);function l(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Mt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(km,e)}rotateY(e){return this.rotateOnAxis(zm,e)}rotateZ(e){return this.rotateOnAxis(Bm,e)}translateOnAxis(e,t){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(km,e)}translateY(e){return this.translateOnAxis(zm,e)}translateZ(e){return this.translateOnAxis(Bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Il.copy(e):Il.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(ta,Il,this.up):Qi.lookAt(Il,ta,this.up),this.quaternion.setFromRotationMatrix(Qi),o&&(Qi.extractRotation(o.matrixWorld),qs.setFromRotationMatrix(Qi),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hm),js.child=e,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(px),df.child=e,this.dispatchEvent(df),df.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hm),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++){const l=t[i];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++){const f=o[l];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,m=p.length;h<m;h++){const d=p[h];l(e.shapes,d)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(t){const f=u(e.geometries),p=u(e.materials),h=u(e.textures),m=u(e.images),d=u(e.shapes),_=u(e.skeletons),y=u(e.animations),w=u(e.nodes);f.length>0&&(i.geometries=f),p.length>0&&(i.materials=p),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),d.length>0&&(i.shapes=d),_.length>0&&(i.skeletons=_),y.length>0&&(i.animations=y),w.length>0&&(i.nodes=w)}return i.object=o,i;function u(f){const p=[];for(const h in f){const m=f[h];delete m.metadata,p.push(m)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}hn.DEFAULT_UP=new H(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new H,er=new H,pf=new H,tr=new H,Ys=new H,Ks=new H,Vm=new H,mf=new H,gf=new H,vf=new H;class Oi{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),wi.subVectors(e,t),o.cross(wi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,i,o,l){wi.subVectors(o,t),er.subVectors(i,t),pf.subVectors(e,t);const u=wi.dot(wi),f=wi.dot(er),p=wi.dot(pf),h=er.dot(er),m=er.dot(pf),d=u*h-f*f;if(d===0)return l.set(0,0,0),null;const _=1/d,y=(h*p-f*m)*_,w=(u*m-f*p)*_;return l.set(1-y-w,w,y)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,i,o,l,u,f,p){return this.getBarycoord(e,t,i,o,tr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,tr.x),p.addScaledVector(u,tr.y),p.addScaledVector(f,tr.z),p)}static isFrontFacing(e,t,i,o){return wi.subVectors(i,t),er.subVectors(e,t),wi.cross(er).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),wi.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,l){return Oi.getInterpolation(e,this.a,this.b,this.c,t,i,o,l)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,l=this.c;let u,f;Ys.subVectors(o,i),Ks.subVectors(l,i),mf.subVectors(e,i);const p=Ys.dot(mf),h=Ks.dot(mf);if(p<=0&&h<=0)return t.copy(i);gf.subVectors(e,o);const m=Ys.dot(gf),d=Ks.dot(gf);if(m>=0&&d<=m)return t.copy(o);const _=p*d-m*h;if(_<=0&&p>=0&&m<=0)return u=p/(p-m),t.copy(i).addScaledVector(Ys,u);vf.subVectors(e,l);const y=Ys.dot(vf),w=Ks.dot(vf);if(w>=0&&y<=w)return t.copy(l);const E=y*h-p*w;if(E<=0&&h>=0&&w<=0)return f=h/(h-w),t.copy(i).addScaledVector(Ks,f);const x=m*w-y*d;if(x<=0&&d-m>=0&&y-w>=0)return Vm.subVectors(l,o),f=(d-m)/(d-m+(y-w)),t.copy(o).addScaledVector(Vm,f);const S=1/(x+E+_);return u=E*S,f=_*S,t.copy(i).addScaledVector(Ys,u).addScaledVector(Ks,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const d0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dr={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function _f(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ct{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=kt.workingColorSpace){return this.r=e,this.g=t,this.b=i,kt.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=kt.workingColorSpace){if(e=sh(e,1),t=yn(t,0,1),i=yn(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,u=2*i-l;this.r=_f(u,l,e+1/3),this.g=_f(u,l,e),this.b=_f(u,l,e-1/3)}return kt.toWorkingColorSpace(this,o),this}setStyle(e,t=Ni){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ni){const i=d0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}copyLinearToSRGB(e){return this.r=sf(e.r),this.g=sf(e.g),this.b=sf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ni){return kt.fromWorkingColorSpace(Pn.copy(this),e),Math.round(yn(Pn.r*255,0,255))*65536+Math.round(yn(Pn.g*255,0,255))*256+Math.round(yn(Pn.b*255,0,255))}getHexString(e=Ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.fromWorkingColorSpace(Pn.copy(this),t);const i=Pn.r,o=Pn.g,l=Pn.b,u=Math.max(i,o,l),f=Math.min(i,o,l);let p,h;const m=(f+u)/2;if(f===u)p=0,h=0;else{const d=u-f;switch(h=m<=.5?d/(u+f):d/(2-u-f),u){case i:p=(o-l)/d+(o<l?6:0);break;case o:p=(l-i)/d+2;break;case l:p=(i-o)/d+4;break}p/=6}return e.h=p,e.s=h,e.l=m,e}getRGB(e,t=kt.workingColorSpace){return kt.fromWorkingColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Ni){kt.fromWorkingColorSpace(Pn.copy(this),e);const t=Pn.r,i=Pn.g,o=Pn.b;return e!==Ni?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(Dr),this.setHSL(Dr.h+e,Dr.s+t,Dr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Dr),e.getHSL(Nl);const i=ha(Dr.h,Nl.h,t),o=ha(Dr.s,Nl.s,t),l=ha(Dr.l,Nl.l,t);return this.setHSL(i,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*o,this.g=l[1]*t+l[4]*i+l[7]*o,this.b=l[2]*t+l[5]*i+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Ct;Ct.NAMES=d0;let mx=0;class Ma extends go{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=lo,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xf,this.blendDst=qf,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(i.blending=this.blending),this.side!==kr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xf&&(i.blendSrc=this.blendSrc),this.blendDst!==qf&&(i.blendDst=this.blendDst),this.blendEquation!==ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(i.textures=l),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let l=0;l!==o;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nn extends Ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Zg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new H,Ul=new Xe;class ki{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ur,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return tx("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ul.fromBufferAttribute(this,t),Ul.applyMatrix3(e),this.setXY(t,Ul.x,Ul.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=so(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=so(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=so(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=so(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=so(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),i=In(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),i=In(i,this.array),o=In(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,l){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),i=In(i,this.array),o=In(o,this.array),l=In(l,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rm&&(e.usage=this.usage),e}}class p0 extends ki{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class m0 extends ki{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qt extends ki{constructor(e,t,i){super(new Float32Array(e),t,i)}}let gx=0;const fi=new Jt,yf=new hn,Js=new H,Zn=new Sa,na=new Sa,_n=new H;class ii extends go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(c0(e)?m0:p0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new Mt().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,i){return fi.makeTranslation(e,t,i),this.applyMatrix4(fi),this}scale(e,t,i){return fi.makeScale(e,t,i),this.applyMatrix4(fi),this}lookAt(e){return yf.lookAt(e),yf.updateMatrix(),this.applyMatrix4(yf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const t=[];for(let i=0,o=e.length;i<o;i++){const l=e[i];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const l=t[i];Zn.setFromBufferAttribute(l),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];na.setFromBufferAttribute(f),this.morphTargetsRelative?(_n.addVectors(Zn.min,na.min),Zn.expandByPoint(_n),_n.addVectors(Zn.max,na.max),Zn.expandByPoint(_n)):(Zn.expandByPoint(na.min),Zn.expandByPoint(na.max))}Zn.getCenter(i);let o=0;for(let l=0,u=e.count;l<u;l++)_n.fromBufferAttribute(e,l),o=Math.max(o,i.distanceToSquared(_n));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],p=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)_n.fromBufferAttribute(f,h),p&&(Js.fromBufferAttribute(e,h),_n.add(Js)),o=Math.max(o,i.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ki(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let q=0;q<i.count;q++)f[q]=new H,p[q]=new H;const h=new H,m=new H,d=new H,_=new Xe,y=new Xe,w=new Xe,E=new H,x=new H;function S(q,U,L){h.fromBufferAttribute(i,q),m.fromBufferAttribute(i,U),d.fromBufferAttribute(i,L),_.fromBufferAttribute(l,q),y.fromBufferAttribute(l,U),w.fromBufferAttribute(l,L),m.sub(h),d.sub(h),y.sub(_),w.sub(_);const ne=1/(y.x*w.y-w.x*y.y);isFinite(ne)&&(E.copy(m).multiplyScalar(w.y).addScaledVector(d,-y.y).multiplyScalar(ne),x.copy(d).multiplyScalar(y.x).addScaledVector(m,-w.x).multiplyScalar(ne),f[q].add(E),f[U].add(E),f[L].add(E),p[q].add(x),p[U].add(x),p[L].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let q=0,U=C.length;q<U;++q){const L=C[q],ne=L.start,ae=L.count;for(let j=ne,oe=ne+ae;j<oe;j+=3)S(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const P=new H,D=new H,V=new H,O=new H;function F(q){V.fromBufferAttribute(o,q),O.copy(V);const U=f[q];P.copy(U),P.sub(V.multiplyScalar(V.dot(U))).normalize(),D.crossVectors(O,U);const ne=D.dot(p[q])<0?-1:1;u.setXYZW(q,P.x,P.y,P.z,ne)}for(let q=0,U=C.length;q<U;++q){const L=C[q],ne=L.start,ae=L.count;for(let j=ne,oe=ne+ae;j<oe;j+=3)F(e.getX(j+0)),F(e.getX(j+1)),F(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ki(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,y=i.count;_<y;_++)i.setXYZ(_,0,0,0);const o=new H,l=new H,u=new H,f=new H,p=new H,h=new H,m=new H,d=new H;if(e)for(let _=0,y=e.count;_<y;_+=3){const w=e.getX(_+0),E=e.getX(_+1),x=e.getX(_+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,x),m.subVectors(u,l),d.subVectors(o,l),m.cross(d),f.fromBufferAttribute(i,w),p.fromBufferAttribute(i,E),h.fromBufferAttribute(i,x),f.add(m),p.add(m),h.add(m),i.setXYZ(w,f.x,f.y,f.z),i.setXYZ(E,p.x,p.y,p.z),i.setXYZ(x,h.x,h.y,h.z)}else for(let _=0,y=t.count;_<y;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),m.subVectors(u,l),d.subVectors(o,l),m.cross(d),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(f,p){const h=f.array,m=f.itemSize,d=f.normalized,_=new h.constructor(p.length*m);let y=0,w=0;for(let E=0,x=p.length;E<x;E++){f.isInterleavedBufferAttribute?y=p[E]*f.data.stride+f.offset:y=p[E]*m;for(let S=0;S<m;S++)_[w++]=h[y++]}return new ki(_,m,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ii,i=this.index.array,o=this.attributes;for(const f in o){const p=o[f],h=e(p,i);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const p=[],h=l[f];for(let m=0,d=h.length;m<d;m++){const _=h[m],y=e(_,i);p.push(y)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const p in i){const h=i[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],m=[];for(let d=0,_=h.length;d<_;d++){const y=h[d];m.push(y.toJSON(e.data))}m.length>0&&(o[p]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],d=l[h];for(let _=0,y=d.length;_<y;_++)m.push(d[_].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const d=u[h];this.addGroup(d.start,d.count,d.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gm=new Jt,ns=new h0,Ol=new oh,Wm=new H,Zs=new H,Qs=new H,eo=new H,xf=new H,Fl=new H,kl=new Xe,zl=new Xe,Bl=new Xe,$m=new H,Xm=new H,qm=new H,Hl=new H,Vl=new H;class Oe extends hn{constructor(e=new ii,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,l=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Fl.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const m=f[p],d=l[p];m!==0&&(xf.fromBufferAttribute(d,e),u?Fl.addScaledVector(xf,m):Fl.addScaledVector(xf.sub(t),m))}t.add(Fl)}return t}raycast(e,t){const i=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(l),ns.copy(e.ray).recast(e.near),!(Ol.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Ol,Wm)===null||ns.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(Gm.copy(l).invert(),ns.copy(e.ray).applyMatrix4(Gm),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,i){let o;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,d=l.attributes.normal,_=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,E=_.length;w<E;w++){const x=_[w],S=u[x.materialIndex],C=Math.max(x.start,y.start),P=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let D=C,V=P;D<V;D+=3){const O=f.getX(D),F=f.getX(D+1),q=f.getX(D+2);o=Gl(this,S,e,i,h,m,d,O,F,q),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),E=Math.min(f.count,y.start+y.count);for(let x=w,S=E;x<S;x+=3){const C=f.getX(x),P=f.getX(x+1),D=f.getX(x+2);o=Gl(this,u,e,i,h,m,d,C,P,D),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let w=0,E=_.length;w<E;w++){const x=_[w],S=u[x.materialIndex],C=Math.max(x.start,y.start),P=Math.min(p.count,Math.min(x.start+x.count,y.start+y.count));for(let D=C,V=P;D<V;D+=3){const O=D,F=D+1,q=D+2;o=Gl(this,S,e,i,h,m,d,O,F,q),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),E=Math.min(p.count,y.start+y.count);for(let x=w,S=E;x<S;x+=3){const C=x,P=x+1,D=x+2;o=Gl(this,u,e,i,h,m,d,C,P,D),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function vx(s,e,t,i,o,l,u,f){let p;if(e.side===$n?p=i.intersectTriangle(u,l,o,!0,f):p=i.intersectTriangle(o,l,u,e.side===kr,f),p===null)return null;Vl.copy(f),Vl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Vl);return h<t.near||h>t.far?null:{distance:h,point:Vl.clone(),object:s}}function Gl(s,e,t,i,o,l,u,f,p,h){s.getVertexPosition(f,Zs),s.getVertexPosition(p,Qs),s.getVertexPosition(h,eo);const m=vx(s,e,t,i,Zs,Qs,eo,Hl);if(m){o&&(kl.fromBufferAttribute(o,f),zl.fromBufferAttribute(o,p),Bl.fromBufferAttribute(o,h),m.uv=Oi.getInterpolation(Hl,Zs,Qs,eo,kl,zl,Bl,new Xe)),l&&(kl.fromBufferAttribute(l,f),zl.fromBufferAttribute(l,p),Bl.fromBufferAttribute(l,h),m.uv1=Oi.getInterpolation(Hl,Zs,Qs,eo,kl,zl,Bl,new Xe)),u&&($m.fromBufferAttribute(u,f),Xm.fromBufferAttribute(u,p),qm.fromBufferAttribute(u,h),m.normal=Oi.getInterpolation(Hl,Zs,Qs,eo,$m,Xm,qm,new H),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const d={a:f,b:p,c:h,normal:new H,materialIndex:0};Oi.getNormal(Zs,Qs,eo,d.normal),m.face=d}return m}class Gt extends ii{constructor(e=1,t=1,i=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],h=[],m=[],d=[];let _=0,y=0;w("z","y","x",-1,-1,i,t,e,u,l,0),w("z","y","x",1,-1,i,t,-e,u,l,1),w("x","z","y",1,1,e,i,t,o,u,2),w("x","z","y",1,-1,e,i,-t,o,u,3),w("x","y","z",1,-1,e,t,i,o,l,4),w("x","y","z",-1,-1,e,t,-i,o,l,5),this.setIndex(p),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(m,3)),this.setAttribute("uv",new qt(d,2));function w(E,x,S,C,P,D,V,O,F,q,U){const L=D/F,ne=V/q,ae=D/2,j=V/2,oe=O/2,he=F+1,_e=q+1;let de=0,G=0;const ue=new H;for(let te=0;te<_e;te++){const z=te*ne-j;for(let le=0;le<he;le++){const Ve=le*L-ae;ue[E]=Ve*C,ue[x]=z*P,ue[S]=oe,h.push(ue.x,ue.y,ue.z),ue[E]=0,ue[x]=0,ue[S]=O>0?1:-1,m.push(ue.x,ue.y,ue.z),d.push(le/F),d.push(1-te/q),de+=1}}for(let te=0;te<q;te++)for(let z=0;z<F;z++){const le=_+z+he*te,Ve=_+z+he*(te+1),re=_+(z+1)+he*(te+1),ye=_+(z+1)+he*te;p.push(le,Ve,ye),p.push(Ve,re,ye),G+=6}f.addGroup(y,G,U),y+=G,_+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mo(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const o=s[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Nn(s){const e={};for(let t=0;t<s.length;t++){const i=mo(s[t]);for(const o in i)e[o]=i[o]}return e}function _x(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function g0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:kt.workingColorSpace}const yx={clone:mo,merge:Nn};var xx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Br extends Ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xx,this.fragmentShader=Sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=_x(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class v0 extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ir=new H,jm=new Xe,Ym=new Xe;class ei extends v0{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,jm,Ym),t.subVectors(Ym,jm)}setViewOffset(e,t,i,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fa*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*i/h,o*=u.width/p,i*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const to=-90,no=1;class Mx extends hn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ei(to,no,e,t);o.layers=this.layers,this.add(o);const l=new ei(to,no,e,t);l.layers=this.layers,this.add(l);const u=new ei(to,no,e,t);u.layers=this.layers,this.add(u);const f=new ei(to,no,e,t);f.layers=this.layers,this.add(f);const p=new ei(to,no,e,t);p.layers=this.layers,this.add(p);const h=new ei(to,no,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,l,u,f,p]=t;for(const h of t)this.remove(h);if(e===or)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===oc)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,h,m]=this.children,d=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,l),e.setRenderTarget(i,1,o),e.render(t,u),e.setRenderTarget(i,2,o),e.render(t,f),e.setRenderTarget(i,3,o),e.render(t,p),e.setRenderTarget(i,4,o),e.render(t,h),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,o),e.render(t,m),e.setRenderTarget(d,_,y),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class _0 extends On{constructor(e,t,i,o,l,u,f,p,h,m){e=e!==void 0?e:[],t=t!==void 0?t:fo,super(e,t,i,o,l,u,f,p,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wx extends vs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new _0(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ci}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Gt(5,5,5),l=new Br({name:"CubemapFromEquirect",uniforms:mo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$n,blending:Or});l.uniforms.tEquirect.value=t;const u=new Oe(o,l),f=t.minFilter;return t.minFilter===gs&&(t.minFilter=Ci),new Mx(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,o);e.setRenderTarget(l)}}const Sf=new H,Ex=new H,Tx=new Mt;class fs{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Sf.subVectors(i,t).cross(Ex.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Sf),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Tx.getNormalMatrix(e),o=this.coplanarPoint(Sf).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new oh,Wl=new H;class lh{constructor(e=new fs,t=new fs,i=new fs,o=new fs,l=new fs,u=new fs){this.planes=[e,t,i,o,l,u]}set(e,t,i,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=or){const i=this.planes,o=e.elements,l=o[0],u=o[1],f=o[2],p=o[3],h=o[4],m=o[5],d=o[6],_=o[7],y=o[8],w=o[9],E=o[10],x=o[11],S=o[12],C=o[13],P=o[14],D=o[15];if(i[0].setComponents(p-l,_-h,x-y,D-S).normalize(),i[1].setComponents(p+l,_+h,x+y,D+S).normalize(),i[2].setComponents(p+u,_+m,x+w,D+C).normalize(),i[3].setComponents(p-u,_-m,x-w,D-C).normalize(),i[4].setComponents(p-f,_-d,x-E,D-P).normalize(),t===or)i[5].setComponents(p+f,_+d,x+E,D+P).normalize();else if(t===oc)i[5].setComponents(f,d,E,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(Wl.x=o.normal.x>0?e.max.x:e.min.x,Wl.y=o.normal.y>0?e.max.y:e.min.y,Wl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Wl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function y0(){let s=null,e=!1,t=null,i=null;function o(l,u){t(l,u),i=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Ax(s){const e=new WeakMap;function t(f,p){const h=f.array,m=f.usage,d=h.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,h,m),f.onUploadCallback();let y;if(h instanceof Float32Array)y=s.FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=s.SHORT;else if(h instanceof Uint32Array)y=s.UNSIGNED_INT;else if(h instanceof Int32Array)y=s.INT;else if(h instanceof Int8Array)y=s.BYTE;else if(h instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:d}}function i(f,p,h){const m=p.array,d=p._updateRange,_=p.updateRanges;if(s.bindBuffer(h,f),d.count===-1&&_.length===0&&s.bufferSubData(h,0,m),_.length!==0){for(let y=0,w=_.length;y<w;y++){const E=_[y];s.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}p.clearUpdateRanges()}d.count!==-1&&(s.bufferSubData(h,d.offset*m.BYTES_PER_ELEMENT,m,d.offset,d.count),d.count=-1),p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);if(h===void 0)e.set(f,t(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,f,p),h.version=f.version}}return{get:o,remove:l,update:u}}class Bi extends ii{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(i),p=Math.floor(o),h=f+1,m=p+1,d=e/f,_=t/p,y=[],w=[],E=[],x=[];for(let S=0;S<m;S++){const C=S*_-u;for(let P=0;P<h;P++){const D=P*d-l;w.push(D,-C,0),E.push(0,0,1),x.push(P/f),x.push(1-S/p)}}for(let S=0;S<p;S++)for(let C=0;C<f;C++){const P=C+h*S,D=C+h*(S+1),V=C+1+h*(S+1),O=C+1+h*S;y.push(P,D,O),y.push(D,V,O)}this.setIndex(y),this.setAttribute("position",new qt(w,3)),this.setAttribute("normal",new qt(E,3)),this.setAttribute("uv",new qt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rx=`#ifdef USE_ALPHAHASH
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
#endif`,Px=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ix=`#ifdef USE_AOMAP
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
#endif`,Nx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ux=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bx=`#ifdef USE_IRIDESCENCE
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
#endif`,Hx=`#ifdef USE_BUMPMAP
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
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kx=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Jx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zx=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iS="gl_FragColor = linearToOutputTexel( gl_FragColor );",rS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,sS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aS=`#ifdef USE_ENVMAP
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
#endif`,lS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pS=`#ifdef USE_GRADIENTMAP
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
}`,mS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_S=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,yS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,xS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ES=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,TS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AS=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,CS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,RS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,US=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,OS=`#if defined( USE_POINTS_UV )
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
#endif`,FS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,VS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,GS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,WS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$S=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YS=`#ifdef USE_NORMALMAP
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
#endif`,KS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,cM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,fM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dM=`#ifdef USE_SKINNING
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
#endif`,pM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mM=`#ifdef USE_SKINNING
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
#endif`,gM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_M=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yM=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xM=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SM=`#ifdef USE_TRANSMISSION
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
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CM=`uniform sampler2D t2D;
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
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DM=`#include <common>
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
}`,IM=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,NM=`#define DISTANCE
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
}`,UM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kM=`uniform float scale;
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
}`,zM=`uniform vec3 diffuse;
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
}`,BM=`#include <common>
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
}`,HM=`uniform vec3 diffuse;
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
}`,VM=`#define LAMBERT
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
}`,GM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,WM=`#define MATCAP
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
}`,$M=`#define MATCAP
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
}`,XM=`#define NORMAL
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
}`,qM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jM=`#define PHONG
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
}`,YM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,KM=`#define STANDARD
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
}`,JM=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,ZM=`#define TOON
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
}`,QM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ew=`uniform float size;
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
}`,tw=`uniform vec3 diffuse;
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
}`,nw=`#include <common>
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
}`,iw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,rw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sw=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:Cx,alphahash_pars_fragment:Rx,alphamap_fragment:Px,alphamap_pars_fragment:bx,alphatest_fragment:Lx,alphatest_pars_fragment:Dx,aomap_fragment:Ix,aomap_pars_fragment:Nx,batching_pars_vertex:Ux,batching_vertex:Ox,begin_vertex:Fx,beginnormal_vertex:kx,bsdfs:zx,iridescence_fragment:Bx,bumpmap_pars_fragment:Hx,clipping_planes_fragment:Vx,clipping_planes_pars_fragment:Gx,clipping_planes_pars_vertex:Wx,clipping_planes_vertex:$x,color_fragment:Xx,color_pars_fragment:qx,color_pars_vertex:jx,color_vertex:Yx,common:Kx,cube_uv_reflection_fragment:Jx,defaultnormal_vertex:Zx,displacementmap_pars_vertex:Qx,displacementmap_vertex:eS,emissivemap_fragment:tS,emissivemap_pars_fragment:nS,colorspace_fragment:iS,colorspace_pars_fragment:rS,envmap_fragment:sS,envmap_common_pars_fragment:oS,envmap_pars_fragment:aS,envmap_pars_vertex:lS,envmap_physical_pars_fragment:yS,envmap_vertex:cS,fog_vertex:uS,fog_pars_vertex:fS,fog_fragment:hS,fog_pars_fragment:dS,gradientmap_pars_fragment:pS,lightmap_pars_fragment:mS,lights_lambert_fragment:gS,lights_lambert_pars_fragment:vS,lights_pars_begin:_S,lights_toon_fragment:xS,lights_toon_pars_fragment:SS,lights_phong_fragment:MS,lights_phong_pars_fragment:wS,lights_physical_fragment:ES,lights_physical_pars_fragment:TS,lights_fragment_begin:AS,lights_fragment_maps:CS,lights_fragment_end:RS,logdepthbuf_fragment:PS,logdepthbuf_pars_fragment:bS,logdepthbuf_pars_vertex:LS,logdepthbuf_vertex:DS,map_fragment:IS,map_pars_fragment:NS,map_particle_fragment:US,map_particle_pars_fragment:OS,metalnessmap_fragment:FS,metalnessmap_pars_fragment:kS,morphinstance_vertex:zS,morphcolor_vertex:BS,morphnormal_vertex:HS,morphtarget_pars_vertex:VS,morphtarget_vertex:GS,normal_fragment_begin:WS,normal_fragment_maps:$S,normal_pars_fragment:XS,normal_pars_vertex:qS,normal_vertex:jS,normalmap_pars_fragment:YS,clearcoat_normal_fragment_begin:KS,clearcoat_normal_fragment_maps:JS,clearcoat_pars_fragment:ZS,iridescence_pars_fragment:QS,opaque_fragment:eM,packing:tM,premultiplied_alpha_fragment:nM,project_vertex:iM,dithering_fragment:rM,dithering_pars_fragment:sM,roughnessmap_fragment:oM,roughnessmap_pars_fragment:aM,shadowmap_pars_fragment:lM,shadowmap_pars_vertex:cM,shadowmap_vertex:uM,shadowmask_pars_fragment:fM,skinbase_vertex:hM,skinning_pars_vertex:dM,skinning_vertex:pM,skinnormal_vertex:mM,specularmap_fragment:gM,specularmap_pars_fragment:vM,tonemapping_fragment:_M,tonemapping_pars_fragment:yM,transmission_fragment:xM,transmission_pars_fragment:SM,uv_pars_fragment:MM,uv_pars_vertex:wM,uv_vertex:EM,worldpos_vertex:TM,background_vert:AM,background_frag:CM,backgroundCube_vert:RM,backgroundCube_frag:PM,cube_vert:bM,cube_frag:LM,depth_vert:DM,depth_frag:IM,distanceRGBA_vert:NM,distanceRGBA_frag:UM,equirect_vert:OM,equirect_frag:FM,linedashed_vert:kM,linedashed_frag:zM,meshbasic_vert:BM,meshbasic_frag:HM,meshlambert_vert:VM,meshlambert_frag:GM,meshmatcap_vert:WM,meshmatcap_frag:$M,meshnormal_vert:XM,meshnormal_frag:qM,meshphong_vert:jM,meshphong_frag:YM,meshphysical_vert:KM,meshphysical_frag:JM,meshtoon_vert:ZM,meshtoon_frag:QM,points_vert:ew,points_frag:tw,shadow_vert:nw,shadow_frag:iw,sprite_vert:rw,sprite_frag:sw},Be={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},Ui={basic:{uniforms:Nn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Nn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Nn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Nn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Nn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Nn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Nn([Be.points,Be.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Nn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Nn([Be.common,Be.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Nn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Nn([Be.sprite,Be.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:Nn([Be.common,Be.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:Nn([Be.lights,Be.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Ui.physical={uniforms:Nn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const $l={r:0,b:0,g:0},rs=new zi,ow=new Jt;function aw(s,e,t,i,o,l,u){const f=new Ct(0);let p=l===!0?0:1,h,m,d=null,_=0,y=null;function w(C){let P=C.isScene===!0?C.background:null;return P&&P.isTexture&&(P=(C.backgroundBlurriness>0?t:e).get(P)),P}function E(C){let P=!1;const D=w(C);D===null?S(f,p):D&&D.isColor&&(S(D,1),P=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,u):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function x(C,P){const D=w(P);D&&(D.isCubeTexture||D.mapping===ac)?(m===void 0&&(m=new Oe(new Gt(1,1,1),new Br({name:"BackgroundCubeMaterial",uniforms:mo(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(V,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),rs.copy(P.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.material.uniforms.envMap.value=D,m.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(ow.makeRotationFromEuler(rs)),m.material.toneMapped=kt.getTransfer(D.colorSpace)!==Xt,(d!==D||_!==D.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,d=D,_=D.version,y=s.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):D&&D.isTexture&&(h===void 0&&(h=new Oe(new Bi(2,2),new Br({name:"BackgroundMaterial",uniforms:mo(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=D,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=kt.getTransfer(D.colorSpace)!==Xt,D.matrixAutoUpdate===!0&&D.updateMatrix(),h.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||_!==D.version||y!==s.toneMapping)&&(h.material.needsUpdate=!0,d=D,_=D.version,y=s.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function S(C,P){C.getRGB($l,g0(s)),i.buffers.color.setClear($l.r,$l.g,$l.b,P,u)}return{getClearColor:function(){return f},setClearColor:function(C,P=1){f.set(C),p=P,S(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,S(f,p)},render:E,addToRenderList:x}}function lw(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},o=_(null);let l=o,u=!1;function f(L,ne,ae,j,oe){let he=!1;const _e=d(j,ae,ne);l!==_e&&(l=_e,h(l.object)),he=y(L,j,ae,oe),he&&w(L,j,ae,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,D(L,ne,ae,j),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function p(){return s.createVertexArray()}function h(L){return s.bindVertexArray(L)}function m(L){return s.deleteVertexArray(L)}function d(L,ne,ae){const j=ae.wireframe===!0;let oe=i[L.id];oe===void 0&&(oe={},i[L.id]=oe);let he=oe[ne.id];he===void 0&&(he={},oe[ne.id]=he);let _e=he[j];return _e===void 0&&(_e=_(p()),he[j]=_e),_e}function _(L){const ne=[],ae=[],j=[];for(let oe=0;oe<t;oe++)ne[oe]=0,ae[oe]=0,j[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:ae,attributeDivisors:j,object:L,attributes:{},index:null}}function y(L,ne,ae,j){const oe=l.attributes,he=ne.attributes;let _e=0;const de=ae.getAttributes();for(const G in de)if(de[G].location>=0){const te=oe[G];let z=he[G];if(z===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),te===void 0||te.attribute!==z||z&&te.data!==z.data)return!0;_e++}return l.attributesNum!==_e||l.index!==j}function w(L,ne,ae,j){const oe={},he=ne.attributes;let _e=0;const de=ae.getAttributes();for(const G in de)if(de[G].location>=0){let te=he[G];te===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));const z={};z.attribute=te,te&&te.data&&(z.data=te.data),oe[G]=z,_e++}l.attributes=oe,l.attributesNum=_e,l.index=j}function E(){const L=l.newAttributes;for(let ne=0,ae=L.length;ne<ae;ne++)L[ne]=0}function x(L){S(L,0)}function S(L,ne){const ae=l.newAttributes,j=l.enabledAttributes,oe=l.attributeDivisors;ae[L]=1,j[L]===0&&(s.enableVertexAttribArray(L),j[L]=1),oe[L]!==ne&&(s.vertexAttribDivisor(L,ne),oe[L]=ne)}function C(){const L=l.newAttributes,ne=l.enabledAttributes;for(let ae=0,j=ne.length;ae<j;ae++)ne[ae]!==L[ae]&&(s.disableVertexAttribArray(ae),ne[ae]=0)}function P(L,ne,ae,j,oe,he,_e){_e===!0?s.vertexAttribIPointer(L,ne,ae,oe,he):s.vertexAttribPointer(L,ne,ae,j,oe,he)}function D(L,ne,ae,j){E();const oe=j.attributes,he=ae.getAttributes(),_e=ne.defaultAttributeValues;for(const de in he){const G=he[de];if(G.location>=0){let ue=oe[de];if(ue===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor)),ue!==void 0){const te=ue.normalized,z=ue.itemSize,le=e.get(ue);if(le===void 0)continue;const Ve=le.buffer,re=le.type,ye=le.bytesPerElement,Re=re===s.INT||re===s.UNSIGNED_INT||ue.gpuType===t0;if(ue.isInterleavedBufferAttribute){const Ee=ue.data,$e=Ee.stride,Ye=ue.offset;if(Ee.isInstancedInterleavedBuffer){for(let ee=0;ee<G.locationSize;ee++)S(G.location+ee,Ee.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let ee=0;ee<G.locationSize;ee++)x(G.location+ee);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let ee=0;ee<G.locationSize;ee++)P(G.location+ee,z/G.locationSize,re,te,$e*ye,(Ye+z/G.locationSize*ee)*ye,Re)}else{if(ue.isInstancedBufferAttribute){for(let Ee=0;Ee<G.locationSize;Ee++)S(G.location+Ee,ue.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ee=0;Ee<G.locationSize;Ee++)x(G.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let Ee=0;Ee<G.locationSize;Ee++)P(G.location+Ee,z/G.locationSize,re,te,z*ye,z/G.locationSize*Ee*ye,Re)}}else if(_e!==void 0){const te=_e[de];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(G.location,te);break;case 3:s.vertexAttrib3fv(G.location,te);break;case 4:s.vertexAttrib4fv(G.location,te);break;default:s.vertexAttrib1fv(G.location,te)}}}}C()}function V(){q();for(const L in i){const ne=i[L];for(const ae in ne){const j=ne[ae];for(const oe in j)m(j[oe].object),delete j[oe];delete ne[ae]}delete i[L]}}function O(L){if(i[L.id]===void 0)return;const ne=i[L.id];for(const ae in ne){const j=ne[ae];for(const oe in j)m(j[oe].object),delete j[oe];delete ne[ae]}delete i[L.id]}function F(L){for(const ne in i){const ae=i[ne];if(ae[L.id]===void 0)continue;const j=ae[L.id];for(const oe in j)m(j[oe].object),delete j[oe];delete ae[L.id]}}function q(){U(),u=!0,l!==o&&(l=o,h(l.object))}function U(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:q,resetDefaultState:U,dispose:V,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:E,enableAttribute:x,disableUnusedAttributes:C}}function cw(s,e,t){let i;function o(h){i=h}function l(h,m){s.drawArrays(i,h,m),t.update(m,i,1)}function u(h,m,d){d!==0&&(s.drawArraysInstanced(i,h,m,d),t.update(m,i,d))}function f(h,m,d){if(d===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<d;y++)this.render(h[y],m[y]);else{_.multiDrawArraysWEBGL(i,h,0,m,0,d);let y=0;for(let w=0;w<d;w++)y+=m[w];t.update(y,i,1)}}function p(h,m,d,_){if(d===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let w=0;w<h.length;w++)u(h[w],m[w],_[w]);else{y.multiDrawArraysInstancedWEBGL(i,h,0,m,0,_,0,d);let w=0;for(let E=0;E<d;E++)w+=m[E];for(let E=0;E<_.length;E++)t.update(w,i,_[E])}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function uw(s,e,t,i){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Fi&&i.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const F=O===lc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==zr&&i.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ur&&!F)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=p(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const d=t.logarithmicDepthBuffer===!0,_=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=y>0,V=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:d,maxTextures:_,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:E,maxAttributes:x,maxVertexUniforms:S,maxVaryings:C,maxFragmentUniforms:P,vertexTextures:D,maxSamples:V}}function fw(s){const e=this;let t=null,i=0,o=!1,l=!1;const u=new fs,f=new Mt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(d,_){const y=d.length!==0||_||i!==0||o;return o=_,i=d.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(d,_){t=m(d,_,0)},this.setState=function(d,_,y){const w=d.clippingPlanes,E=d.clipIntersection,x=d.clipShadows,S=s.get(d);if(!o||w===null||w.length===0||l&&!x)l?m(null):h();else{const C=l?0:i,P=C*4;let D=S.clippingState||null;p.value=D,D=m(w,_,P,y);for(let V=0;V!==P;++V)D[V]=t[V];S.clippingState=D,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(d,_,y,w){const E=d!==null?d.length:0;let x=null;if(E!==0){if(x=p.value,w!==!0||x===null){const S=y+E*4,C=_.matrixWorldInverse;f.getNormalMatrix(C),(x===null||x.length<S)&&(x=new Float32Array(S));for(let P=0,D=y;P!==E;++P,D+=4)u.copy(d[P]).applyMatrix4(C,f),u.normal.toArray(x,D),x[D+3]=u.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}function hw(s){let e=new WeakMap;function t(u,f){return f===jf?u.mapping=fo:f===Yf&&(u.mapping=ho),u}function i(u){if(u&&u.isTexture){const f=u.mapping;if(f===jf||f===Yf)if(e.has(u)){const p=e.get(u).texture;return t(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const h=new wx(p.height);return h.fromEquirectangularTexture(s,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap}return{get:i,dispose:l}}class x0 extends v0{constructor(e=-1,t=1,i=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=i-e,u=i+e,f=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=m*this.view.offsetY,p=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const oo=4,Km=[.125,.215,.35,.446,.526,.582],ps=20,Mf=new x0,Jm=new Ct;let wf=null,Ef=0,Tf=0,Af=!1;const hs=(1+Math.sqrt(5))/2,io=1/hs,Zm=[new H(-hs,io,0),new H(hs,io,0),new H(-io,0,hs),new H(io,0,hs),new H(0,hs,-io),new H(0,hs,io),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Qm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){wf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wf,Ef,Tf),this._renderer.xr.enabled=Af,e.scissorTest=!1,Xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fo||e.mapping===ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:lc,format:Fi,colorSpace:Hr,depthBuffer:!1},o=eg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eg(e,t,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dw(l)),this._blurMaterial=pw(l,e,t)}return o}_compileMaterial(e){const t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,Mf)}_sceneToCubeUV(e,t,i,o){const f=new ei(90,1,t,i),p=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,d=m.autoClear,_=m.toneMapping;m.getClearColor(Jm),m.toneMapping=Fr,m.autoClear=!1;const y=new nn({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),w=new Oe(new Gt,y);let E=!1;const x=e.background;x?x.isColor&&(y.color.copy(x),e.background=null,E=!0):(y.color.copy(Jm),E=!0);for(let S=0;S<6;S++){const C=S%3;C===0?(f.up.set(0,p[S],0),f.lookAt(h[S],0,0)):C===1?(f.up.set(0,0,p[S]),f.lookAt(0,h[S],0)):(f.up.set(0,p[S],0),f.lookAt(0,0,h[S]));const P=this._cubeSize;Xl(o,C*P,S>2?P:0,P,P),m.setRenderTarget(o),E&&m.render(w,f),m.render(e,f)}w.geometry.dispose(),w.material.dispose(),m.toneMapping=_,m.autoClear=d,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===fo||e.mapping===ho;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Oe(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;Xl(t,0,0,3*p,2*p),i.setRenderTarget(t),i.render(u,Mf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Zm[(o-l-1)%Zm.length];this._blur(e,l-1,l,u,f)}t.autoClear=i}_blur(e,t,i,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,o,"latitudinal",l),this._halfBlur(u,e,i,i,o,"longitudinal",l)}_halfBlur(e,t,i,o,l,u,f){const p=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,d=new Oe(this._lodPlanes[o],h),_=h.uniforms,y=this._sizeLods[i]-1,w=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*ps-1),E=l/w,x=isFinite(l)?1+Math.floor(m*E):ps;x>ps&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ps}`);const S=[];let C=0;for(let F=0;F<ps;++F){const q=F/E,U=Math.exp(-q*q/2);S.push(U),F===0?C+=U:F<x&&(C+=2*U)}for(let F=0;F<S.length;F++)S[F]=S[F]/C;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=S,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:P}=this;_.dTheta.value=w,_.mipInt.value=P-i;const D=this._sizeLods[o],V=3*D*(o>P-oo?o-P+oo:0),O=4*(this._cubeSize-D);Xl(t,V,O,3*D,2*D),p.setRenderTarget(t),p.render(d,Mf)}}function dw(s){const e=[],t=[],i=[];let o=s;const l=s-oo+1+Km.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);t.push(f);let p=1/f;u>s-oo?p=Km[u-s+oo-1]:u===0&&(p=0),i.push(p);const h=1/(f-2),m=-h,d=1+h,_=[m,m,d,m,d,d,m,m,d,d,m,d],y=6,w=6,E=3,x=2,S=1,C=new Float32Array(E*w*y),P=new Float32Array(x*w*y),D=new Float32Array(S*w*y);for(let O=0;O<y;O++){const F=O%3*2/3-1,q=O>2?0:-1,U=[F,q,0,F+2/3,q,0,F+2/3,q+1,0,F,q,0,F+2/3,q+1,0,F,q+1,0];C.set(U,E*w*O),P.set(_,x*w*O);const L=[O,O,O,O,O,O];D.set(L,S*w*O)}const V=new ii;V.setAttribute("position",new ki(C,E)),V.setAttribute("uv",new ki(P,x)),V.setAttribute("faceIndex",new ki(D,S)),e.push(V),o>oo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function eg(s,e,t){const i=new vs(s,e,t);return i.texture.mapping=ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xl(s,e,t,i,o){s.viewport.set(e,t,i,o),s.scissor.set(e,t,i,o)}function pw(s,e,t){const i=new Float32Array(ps),o=new H(0,1,0);return new Br({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Or,depthTest:!1,depthWrite:!1})}function tg(){return new Br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Or,depthTest:!1,depthWrite:!1})}function ng(){return new Br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function ch(){return`

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
	`}function mw(s){let e=new WeakMap,t=null;function i(f){if(f&&f.isTexture){const p=f.mapping,h=p===jf||p===Yf,m=p===fo||p===ho;if(h||m){let d=e.get(f);const _=d!==void 0?d.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new Qm(s)),d=h?t.fromEquirectangular(f,d):t.fromCubemap(f,d),d.texture.pmremVersion=f.pmremVersion,e.set(f,d),d.texture;if(d!==void 0)return d.texture;{const y=f.image;return h&&y&&y.height>0||m&&y&&o(y)?(t===null&&(t=new Qm(s)),d=h?t.fromEquirectangular(f):t.fromCubemap(f),d.texture.pmremVersion=f.pmremVersion,e.set(f,d),f.addEventListener("dispose",l),d.texture):null}}}return f}function o(f){let p=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&p++;return p===h}function l(f){const p=f.target;p.removeEventListener("dispose",l);const h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function gw(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function vw(s,e,t,i){const o={},l=new WeakMap;function u(d){const _=d.target;_.index!==null&&e.remove(_.index);for(const w in _.attributes)e.remove(_.attributes[w]);for(const w in _.morphAttributes){const E=_.morphAttributes[w];for(let x=0,S=E.length;x<S;x++)e.remove(E[x])}_.removeEventListener("dispose",u),delete o[_.id];const y=l.get(_);y&&(e.remove(y),l.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(d,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,t.memory.geometries++),_}function p(d){const _=d.attributes;for(const w in _)e.update(_[w],s.ARRAY_BUFFER);const y=d.morphAttributes;for(const w in y){const E=y[w];for(let x=0,S=E.length;x<S;x++)e.update(E[x],s.ARRAY_BUFFER)}}function h(d){const _=[],y=d.index,w=d.attributes.position;let E=0;if(y!==null){const C=y.array;E=y.version;for(let P=0,D=C.length;P<D;P+=3){const V=C[P+0],O=C[P+1],F=C[P+2];_.push(V,O,O,F,F,V)}}else if(w!==void 0){const C=w.array;E=w.version;for(let P=0,D=C.length/3-1;P<D;P+=3){const V=P+0,O=P+1,F=P+2;_.push(V,O,O,F,F,V)}}else return;const x=new(c0(_)?m0:p0)(_,1);x.version=E;const S=l.get(d);S&&e.remove(S),l.set(d,x)}function m(d){const _=l.get(d);if(_){const y=d.index;y!==null&&_.version<y.version&&h(d)}else h(d);return l.get(d)}return{get:f,update:p,getWireframeAttribute:m}}function _w(s,e,t){let i;function o(_){i=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function p(_,y){s.drawElements(i,y,l,_*u),t.update(y,i,1)}function h(_,y,w){w!==0&&(s.drawElementsInstanced(i,y,l,_*u,w),t.update(y,i,w))}function m(_,y,w){if(w===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let x=0;x<w;x++)this.render(_[x]/u,y[x]);else{E.multiDrawElementsWEBGL(i,y,0,l,_,0,w);let x=0;for(let S=0;S<w;S++)x+=y[S];t.update(x,i,1)}}function d(_,y,w,E){if(w===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<_.length;S++)h(_[S]/u,y[S],E[S]);else{x.multiDrawElementsInstancedWEBGL(i,y,0,l,_,0,E,0,w);let S=0;for(let C=0;C<w;C++)S+=y[C];for(let C=0;C<E.length;C++)t.update(S,i,E[C])}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=d}function yw(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function xw(s,e,t){const i=new WeakMap,o=new Kt;function l(u,f,p){const h=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,d=m!==void 0?m.length:0;let _=i.get(f);if(_===void 0||_.count!==d){let L=function(){q.dispose(),i.delete(f),f.removeEventListener("dispose",L)};var y=L;_!==void 0&&_.texture.dispose();const w=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let D=0;w===!0&&(D=1),E===!0&&(D=2),x===!0&&(D=3);let V=f.attributes.position.count*D,O=1;V>e.maxTextureSize&&(O=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const F=new Float32Array(V*O*4*d),q=new f0(F,V,O,d);q.type=Ur,q.needsUpdate=!0;const U=D*4;for(let ne=0;ne<d;ne++){const ae=S[ne],j=C[ne],oe=P[ne],he=V*O*4*ne;for(let _e=0;_e<ae.count;_e++){const de=_e*U;w===!0&&(o.fromBufferAttribute(ae,_e),F[he+de+0]=o.x,F[he+de+1]=o.y,F[he+de+2]=o.z,F[he+de+3]=0),E===!0&&(o.fromBufferAttribute(j,_e),F[he+de+4]=o.x,F[he+de+5]=o.y,F[he+de+6]=o.z,F[he+de+7]=0),x===!0&&(o.fromBufferAttribute(oe,_e),F[he+de+8]=o.x,F[he+de+9]=o.y,F[he+de+10]=o.z,F[he+de+11]=oe.itemSize===4?o.w:1)}}_={count:d,texture:q,size:new Xe(V,O)},i.set(f,_),f.addEventListener("dispose",L)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let x=0;x<h.length;x++)w+=h[x];const E=f.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",E),p.getUniforms().setValue(s,"morphTargetInfluences",h)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function Sw(s,e,t,i){let o=new WeakMap;function l(p){const h=i.render.frame,m=p.geometry,d=e.get(p,m);if(o.get(d)!==h&&(e.update(d),o.set(d,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==h&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,h))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==h&&(_.update(),o.set(_,h))}return d}function u(){o=new WeakMap}function f(p){const h=p.target;h.removeEventListener("dispose",f),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}class S0 extends On{constructor(e,t,i,o,l,u,f,p,h,m){if(m=m!==void 0?m:co,m!==co&&m!==ma)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===co&&(i=po),i===void 0&&m===ma&&(i=ya),super(null,o,l,u,f,p,m,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:di,this.minFilter=p!==void 0?p:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const M0=new On,w0=new S0(1,1);w0.compareFunction=l0;const E0=new f0,T0=new ax,A0=new _0,ig=[],rg=[],sg=new Float32Array(16),og=new Float32Array(9),ag=new Float32Array(4);function _o(s,e,t){const i=s[0];if(i<=0||i>0)return s;const o=e*t;let l=ig[o];if(l===void 0&&(l=new Float32Array(o),ig[o]=l),e!==0){i.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function dn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function pn(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function fc(s,e){let t=rg[e];t===void 0&&(t=new Int32Array(e),rg[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Mw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ww(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2fv(this.addr,e),pn(t,e)}}function Ew(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;s.uniform3fv(this.addr,e),pn(t,e)}}function Tw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4fv(this.addr,e),pn(t,e)}}function Aw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;ag.set(i),s.uniformMatrix2fv(this.addr,!1,ag),pn(t,i)}}function Cw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;og.set(i),s.uniformMatrix3fv(this.addr,!1,og),pn(t,i)}}function Rw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;sg.set(i),s.uniformMatrix4fv(this.addr,!1,sg),pn(t,i)}}function Pw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function bw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2iv(this.addr,e),pn(t,e)}}function Lw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;s.uniform3iv(this.addr,e),pn(t,e)}}function Dw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4iv(this.addr,e),pn(t,e)}}function Iw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Nw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2uiv(this.addr,e),pn(t,e)}}function Uw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;s.uniform3uiv(this.addr,e),pn(t,e)}}function Ow(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4uiv(this.addr,e),pn(t,e)}}function Fw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);const l=this.type===s.SAMPLER_2D_SHADOW?w0:M0;t.setTexture2D(e||l,o)}function kw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||T0,o)}function zw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||A0,o)}function Bw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||E0,o)}function Hw(s){switch(s){case 5126:return Mw;case 35664:return ww;case 35665:return Ew;case 35666:return Tw;case 35674:return Aw;case 35675:return Cw;case 35676:return Rw;case 5124:case 35670:return Pw;case 35667:case 35671:return bw;case 35668:case 35672:return Lw;case 35669:case 35673:return Dw;case 5125:return Iw;case 36294:return Nw;case 36295:return Uw;case 36296:return Ow;case 35678:case 36198:case 36298:case 36306:case 35682:return Fw;case 35679:case 36299:case 36307:return kw;case 35680:case 36300:case 36308:case 36293:return zw;case 36289:case 36303:case 36311:case 36292:return Bw}}function Vw(s,e){s.uniform1fv(this.addr,e)}function Gw(s,e){const t=_o(e,this.size,2);s.uniform2fv(this.addr,t)}function Ww(s,e){const t=_o(e,this.size,3);s.uniform3fv(this.addr,t)}function $w(s,e){const t=_o(e,this.size,4);s.uniform4fv(this.addr,t)}function Xw(s,e){const t=_o(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function qw(s,e){const t=_o(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function jw(s,e){const t=_o(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Yw(s,e){s.uniform1iv(this.addr,e)}function Kw(s,e){s.uniform2iv(this.addr,e)}function Jw(s,e){s.uniform3iv(this.addr,e)}function Zw(s,e){s.uniform4iv(this.addr,e)}function Qw(s,e){s.uniform1uiv(this.addr,e)}function eE(s,e){s.uniform2uiv(this.addr,e)}function tE(s,e){s.uniform3uiv(this.addr,e)}function nE(s,e){s.uniform4uiv(this.addr,e)}function iE(s,e,t){const i=this.cache,o=e.length,l=fc(t,o);dn(i,l)||(s.uniform1iv(this.addr,l),pn(i,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||M0,l[u])}function rE(s,e,t){const i=this.cache,o=e.length,l=fc(t,o);dn(i,l)||(s.uniform1iv(this.addr,l),pn(i,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||T0,l[u])}function sE(s,e,t){const i=this.cache,o=e.length,l=fc(t,o);dn(i,l)||(s.uniform1iv(this.addr,l),pn(i,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||A0,l[u])}function oE(s,e,t){const i=this.cache,o=e.length,l=fc(t,o);dn(i,l)||(s.uniform1iv(this.addr,l),pn(i,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||E0,l[u])}function aE(s){switch(s){case 5126:return Vw;case 35664:return Gw;case 35665:return Ww;case 35666:return $w;case 35674:return Xw;case 35675:return qw;case 35676:return jw;case 5124:case 35670:return Yw;case 35667:case 35671:return Kw;case 35668:case 35672:return Jw;case 35669:case 35673:return Zw;case 5125:return Qw;case 36294:return eE;case 36295:return tE;case 36296:return nE;case 35678:case 36198:case 36298:case 36306:case 35682:return iE;case 35679:case 36299:case 36307:return rE;case 35680:case 36300:case 36308:case 36293:return sE;case 36289:case 36303:case 36311:case 36292:return oE}}class lE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Hw(t.type)}}class cE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aE(t.type)}}class uE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],i)}}}const Cf=/(\w+)(\])?(\[|\.)?/g;function lg(s,e){s.seq.push(e),s.map[e.id]=e}function fE(s,e,t){const i=s.name,o=i.length;for(Cf.lastIndex=0;;){const l=Cf.exec(i),u=Cf.lastIndex;let f=l[1];const p=l[2]==="]",h=l[3];if(p&&(f=f|0),h===void 0||h==="["&&u+2===o){lg(t,h===void 0?new lE(f,s,e):new cE(f,s,e));break}else{let d=t.map[f];d===void 0&&(d=new uE(f),lg(t,d)),t=d}}}class tc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);fE(l,u,this)}}setValue(e,t,i,o){const l=this.map[t];l!==void 0&&l.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],p=i[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&i.push(u)}return i}}function cg(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const hE=37297;let dE=0;function pE(s,e){const t=s.split(`
`),i=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;i.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return i.join(`
`)}function mE(s){const e=kt.getPrimaries(kt.workingColorSpace),t=kt.getPrimaries(s);let i;switch(e===t?i="":e===sc&&t===rc?i="LinearDisplayP3ToLinearSRGB":e===rc&&t===sc&&(i="LinearSRGBToLinearDisplayP3"),s){case Hr:case uc:return[i,"LinearTransferOETF"];case Ni:case rh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function ug(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(i&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+pE(s.getShaderSource(e),u)}else return o}function gE(s,e){const t=mE(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function vE(s,e){let t;switch(e){case uy:t="Linear";break;case fy:t="Reinhard";break;case hy:t="OptimizedCineon";break;case dy:t="ACESFilmic";break;case my:t="AgX";break;case gy:t="Neutral";break;case py:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _E(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function yE(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xE(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function ca(s){return s!==""}function fg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zf(s){return s.replace(SE,wE)}const ME=new Map;function wE(s,e){let t=St[e];if(t===void 0){const i=ME.get(e);if(i!==void 0)t=St[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zf(t)}const EE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dg(s){return s.replace(EE,TE)}function TE(s,e,t,i){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function pg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function AE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===O_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===rr&&(e="SHADOWMAP_TYPE_VSM"),e}function CE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case fo:case ho:e="ENVMAP_TYPE_CUBE";break;case ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ho:e="ENVMAP_MODE_REFRACTION";break}return e}function PE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zg:e="ENVMAP_BLENDING_MULTIPLY";break;case ly:e="ENVMAP_BLENDING_MIX";break;case cy:e="ENVMAP_BLENDING_ADD";break}return e}function bE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function LE(s,e,t,i){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const p=AE(t),h=CE(t),m=RE(t),d=PE(t),_=bE(t),y=_E(t),w=yE(l),E=o.createProgram();let x,S,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ca).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ca).join(`
`),S.length>0&&(S+=`
`)):(x=[pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),S=[pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+d:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fr?"#define TONE_MAPPING":"",t.toneMapping!==Fr?St.tonemapping_pars_fragment:"",t.toneMapping!==Fr?vE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,gE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),u=Zf(u),u=fg(u,t),u=hg(u,t),f=Zf(f),f=fg(f,t),f=hg(f,t),u=dg(u),f=dg(f),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",t.glslVersion===Pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=C+x+u,D=C+S+f,V=cg(o,o.VERTEX_SHADER,P),O=cg(o,o.FRAGMENT_SHADER,D);o.attachShader(E,V),o.attachShader(E,O),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function F(ne){if(s.debug.checkShaderErrors){const ae=o.getProgramInfoLog(E).trim(),j=o.getShaderInfoLog(V).trim(),oe=o.getShaderInfoLog(O).trim();let he=!0,_e=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,V,O);else{const de=ug(o,V,"vertex"),G=ug(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+ne.name+`
Material Type: `+ne.type+`

Program Info Log: `+ae+`
`+de+`
`+G)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(j===""||oe==="")&&(_e=!1);_e&&(ne.diagnostics={runnable:he,programLog:ae,vertexShader:{log:j,prefix:x},fragmentShader:{log:oe,prefix:S}})}o.deleteShader(V),o.deleteShader(O),q=new tc(o,E),U=xE(o,E)}let q;this.getUniforms=function(){return q===void 0&&F(this),q};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=o.getProgramParameter(E,hE)),L},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dE++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=V,this.fragmentShader=O,this}let DE=0;class IE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new NE(e),t.set(e,i)),i}}class NE{constructor(e){this.id=DE++,this.code=e,this.usedTimes=0}}function UE(s,e,t,i,o,l,u){const f=new ah,p=new IE,h=new Set,m=[],d=o.logarithmicDepthBuffer,_=o.vertexTextures;let y=o.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(U){return h.add(U),U===0?"uv":`uv${U}`}function x(U,L,ne,ae,j){const oe=ae.fog,he=j.geometry,_e=U.isMeshStandardMaterial?ae.environment:null,de=(U.isMeshStandardMaterial?t:e).get(U.envMap||_e),G=de&&de.mapping===ac?de.image.height:null,ue=w[U.type];U.precision!==null&&(y=o.getMaxPrecision(U.precision),y!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",y,"instead."));const te=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,z=te!==void 0?te.length:0;let le=0;he.morphAttributes.position!==void 0&&(le=1),he.morphAttributes.normal!==void 0&&(le=2),he.morphAttributes.color!==void 0&&(le=3);let Ve,re,ye,Re;if(ue){const Rt=Ui[ue];Ve=Rt.vertexShader,re=Rt.fragmentShader}else Ve=U.vertexShader,re=U.fragmentShader,p.update(U),ye=p.getVertexShaderID(U),Re=p.getFragmentShaderID(U);const Ee=s.getRenderTarget(),$e=j.isInstancedMesh===!0,Ye=j.isBatchedMesh===!0,ee=!!U.map,Lt=!!U.matcap,it=!!de,ht=!!U.aoMap,st=!!U.lightMap,wt=!!U.bumpMap,vt=!!U.normalMap,_t=!!U.displacementMap,Ot=!!U.emissiveMap,B=!!U.metalnessMap,N=!!U.roughnessMap,fe=U.anisotropy>0,xe=U.clearcoat>0,Ce=U.dispersion>0,Pe=U.iridescence>0,tt=U.sheen>0,Fe=U.transmission>0,ke=fe&&!!U.anisotropyMap,dt=xe&&!!U.clearcoatMap,Ne=xe&&!!U.clearcoatNormalMap,Ke=xe&&!!U.clearcoatRoughnessMap,xt=Pe&&!!U.iridescenceMap,ot=Pe&&!!U.iridescenceThicknessMap,We=tt&&!!U.sheenColorMap,ut=tt&&!!U.sheenRoughnessMap,Et=!!U.specularMap,zt=!!U.specularColorMap,pt=!!U.specularIntensityMap,J=Fe&&!!U.transmissionMap,Se=Fe&&!!U.thicknessMap,ge=!!U.gradientMap,Ue=!!U.alphaMap,ze=U.alphaTest>0,Tt=!!U.alphaHash,It=!!U.extensions;let Ft=Fr;U.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const rn={shaderID:ue,shaderType:U.type,shaderName:U.name,vertexShader:Ve,fragmentShader:re,defines:U.defines,customVertexShaderID:ye,customFragmentShaderID:Re,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:y,batching:Ye,instancing:$e,instancingColor:$e&&j.instanceColor!==null,instancingMorph:$e&&j.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Hr,alphaToCoverage:!!U.alphaToCoverage,map:ee,matcap:Lt,envMap:it,envMapMode:it&&de.mapping,envMapCubeUVHeight:G,aoMap:ht,lightMap:st,bumpMap:wt,normalMap:vt,displacementMap:_&&_t,emissiveMap:Ot,normalMapObjectSpace:vt&&U.normalMapType===by,normalMapTangentSpace:vt&&U.normalMapType===a0,metalnessMap:B,roughnessMap:N,anisotropy:fe,anisotropyMap:ke,clearcoat:xe,clearcoatMap:dt,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Ke,dispersion:Ce,iridescence:Pe,iridescenceMap:xt,iridescenceThicknessMap:ot,sheen:tt,sheenColorMap:We,sheenRoughnessMap:ut,specularMap:Et,specularColorMap:zt,specularIntensityMap:pt,transmission:Fe,transmissionMap:J,thicknessMap:Se,gradientMap:ge,opaque:U.transparent===!1&&U.blending===lo&&U.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ze,alphaHash:Tt,combine:U.combine,mapUv:ee&&E(U.map.channel),aoMapUv:ht&&E(U.aoMap.channel),lightMapUv:st&&E(U.lightMap.channel),bumpMapUv:wt&&E(U.bumpMap.channel),normalMapUv:vt&&E(U.normalMap.channel),displacementMapUv:_t&&E(U.displacementMap.channel),emissiveMapUv:Ot&&E(U.emissiveMap.channel),metalnessMapUv:B&&E(U.metalnessMap.channel),roughnessMapUv:N&&E(U.roughnessMap.channel),anisotropyMapUv:ke&&E(U.anisotropyMap.channel),clearcoatMapUv:dt&&E(U.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&E(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&E(U.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&E(U.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&E(U.iridescenceThicknessMap.channel),sheenColorMapUv:We&&E(U.sheenColorMap.channel),sheenRoughnessMapUv:ut&&E(U.sheenRoughnessMap.channel),specularMapUv:Et&&E(U.specularMap.channel),specularColorMapUv:zt&&E(U.specularColorMap.channel),specularIntensityMapUv:pt&&E(U.specularIntensityMap.channel),transmissionMapUv:J&&E(U.transmissionMap.channel),thicknessMapUv:Se&&E(U.thicknessMap.channel),alphaMapUv:Ue&&E(U.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(vt||fe),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!he.attributes.uv&&(ee||Ue),fog:!!oe,useFog:U.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:le,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:U.dithering,shadowMapEnabled:s.shadowMap.enabled&&ne.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ee&&U.map.isVideoTexture===!0&&kt.getTransfer(U.map.colorSpace)===Xt,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===sr,flipSided:U.side===$n,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:It&&U.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:It&&U.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return rn.vertexUv1s=h.has(1),rn.vertexUv2s=h.has(2),rn.vertexUv3s=h.has(3),h.clear(),rn}function S(U){const L=[];if(U.shaderID?L.push(U.shaderID):(L.push(U.customVertexShaderID),L.push(U.customFragmentShaderID)),U.defines!==void 0)for(const ne in U.defines)L.push(ne),L.push(U.defines[ne]);return U.isRawShaderMaterial===!1&&(C(L,U),P(L,U),L.push(s.outputColorSpace)),L.push(U.customProgramCacheKey),L.join()}function C(U,L){U.push(L.precision),U.push(L.outputColorSpace),U.push(L.envMapMode),U.push(L.envMapCubeUVHeight),U.push(L.mapUv),U.push(L.alphaMapUv),U.push(L.lightMapUv),U.push(L.aoMapUv),U.push(L.bumpMapUv),U.push(L.normalMapUv),U.push(L.displacementMapUv),U.push(L.emissiveMapUv),U.push(L.metalnessMapUv),U.push(L.roughnessMapUv),U.push(L.anisotropyMapUv),U.push(L.clearcoatMapUv),U.push(L.clearcoatNormalMapUv),U.push(L.clearcoatRoughnessMapUv),U.push(L.iridescenceMapUv),U.push(L.iridescenceThicknessMapUv),U.push(L.sheenColorMapUv),U.push(L.sheenRoughnessMapUv),U.push(L.specularMapUv),U.push(L.specularColorMapUv),U.push(L.specularIntensityMapUv),U.push(L.transmissionMapUv),U.push(L.thicknessMapUv),U.push(L.combine),U.push(L.fogExp2),U.push(L.sizeAttenuation),U.push(L.morphTargetsCount),U.push(L.morphAttributeCount),U.push(L.numDirLights),U.push(L.numPointLights),U.push(L.numSpotLights),U.push(L.numSpotLightMaps),U.push(L.numHemiLights),U.push(L.numRectAreaLights),U.push(L.numDirLightShadows),U.push(L.numPointLightShadows),U.push(L.numSpotLightShadows),U.push(L.numSpotLightShadowsWithMaps),U.push(L.numLightProbes),U.push(L.shadowMapType),U.push(L.toneMapping),U.push(L.numClippingPlanes),U.push(L.numClipIntersection),U.push(L.depthPacking)}function P(U,L){f.disableAll(),L.supportsVertexTextures&&f.enable(0),L.instancing&&f.enable(1),L.instancingColor&&f.enable(2),L.instancingMorph&&f.enable(3),L.matcap&&f.enable(4),L.envMap&&f.enable(5),L.normalMapObjectSpace&&f.enable(6),L.normalMapTangentSpace&&f.enable(7),L.clearcoat&&f.enable(8),L.iridescence&&f.enable(9),L.alphaTest&&f.enable(10),L.vertexColors&&f.enable(11),L.vertexAlphas&&f.enable(12),L.vertexUv1s&&f.enable(13),L.vertexUv2s&&f.enable(14),L.vertexUv3s&&f.enable(15),L.vertexTangents&&f.enable(16),L.anisotropy&&f.enable(17),L.alphaHash&&f.enable(18),L.batching&&f.enable(19),L.dispersion&&f.enable(20),U.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.skinning&&f.enable(4),L.morphTargets&&f.enable(5),L.morphNormals&&f.enable(6),L.morphColors&&f.enable(7),L.premultipliedAlpha&&f.enable(8),L.shadowMapEnabled&&f.enable(9),L.useLegacyLights&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.alphaToCoverage&&f.enable(20),U.push(f.mask)}function D(U){const L=w[U.type];let ne;if(L){const ae=Ui[L];ne=yx.clone(ae.uniforms)}else ne=U.uniforms;return ne}function V(U,L){let ne;for(let ae=0,j=m.length;ae<j;ae++){const oe=m[ae];if(oe.cacheKey===L){ne=oe,++ne.usedTimes;break}}return ne===void 0&&(ne=new LE(s,L,U,l),m.push(ne)),ne}function O(U){if(--U.usedTimes===0){const L=m.indexOf(U);m[L]=m[m.length-1],m.pop(),U.destroy()}}function F(U){p.remove(U)}function q(){p.dispose()}return{getParameters:x,getProgramCacheKey:S,getUniforms:D,acquireProgram:V,releaseProgram:O,releaseShaderCache:F,programs:m,dispose:q}}function OE(){let s=new WeakMap;function e(l){let u=s.get(l);return u===void 0&&(u={},s.set(l,u)),u}function t(l){s.delete(l)}function i(l,u,f){s.get(l)[u]=f}function o(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:o}}function FE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function mg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function gg(){const s=[];let e=0;const t=[],i=[],o=[];function l(){e=0,t.length=0,i.length=0,o.length=0}function u(d,_,y,w,E,x){let S=s[e];return S===void 0?(S={id:d.id,object:d,geometry:_,material:y,groupOrder:w,renderOrder:d.renderOrder,z:E,group:x},s[e]=S):(S.id=d.id,S.object=d,S.geometry=_,S.material=y,S.groupOrder=w,S.renderOrder=d.renderOrder,S.z=E,S.group=x),e++,S}function f(d,_,y,w,E,x){const S=u(d,_,y,w,E,x);y.transmission>0?i.push(S):y.transparent===!0?o.push(S):t.push(S)}function p(d,_,y,w,E,x){const S=u(d,_,y,w,E,x);y.transmission>0?i.unshift(S):y.transparent===!0?o.unshift(S):t.unshift(S)}function h(d,_){t.length>1&&t.sort(d||FE),i.length>1&&i.sort(_||mg),o.length>1&&o.sort(_||mg)}function m(){for(let d=e,_=s.length;d<_;d++){const y=s[d];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:o,init:l,push:f,unshift:p,finish:m,sort:h}}function kE(){let s=new WeakMap;function e(i,o){const l=s.get(i);let u;return l===void 0?(u=new gg,s.set(i,[u])):o>=l.length?(u=new gg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function zE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ct};break;case"SpotLight":t={position:new H,direction:new H,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=t,t}}}function BE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let HE=0;function VE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function GE(s){const e=new zE,t=BE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new H);const o=new H,l=new Jt,u=new Jt;function f(h,m){let d=0,_=0,y=0;for(let ne=0;ne<9;ne++)i.probe[ne].set(0,0,0);let w=0,E=0,x=0,S=0,C=0,P=0,D=0,V=0,O=0,F=0,q=0;h.sort(VE);const U=m===!0?Math.PI:1;for(let ne=0,ae=h.length;ne<ae;ne++){const j=h[ne],oe=j.color,he=j.intensity,_e=j.distance,de=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)d+=oe.r*he*U,_+=oe.g*he*U,y+=oe.b*he*U;else if(j.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(j.sh.coefficients[G],he);q++}else if(j.isDirectionalLight){const G=e.get(j);if(G.color.copy(j.color).multiplyScalar(j.intensity*U),j.castShadow){const ue=j.shadow,te=t.get(j);te.shadowBias=ue.bias,te.shadowNormalBias=ue.normalBias,te.shadowRadius=ue.radius,te.shadowMapSize=ue.mapSize,i.directionalShadow[w]=te,i.directionalShadowMap[w]=de,i.directionalShadowMatrix[w]=j.shadow.matrix,P++}i.directional[w]=G,w++}else if(j.isSpotLight){const G=e.get(j);G.position.setFromMatrixPosition(j.matrixWorld),G.color.copy(oe).multiplyScalar(he*U),G.distance=_e,G.coneCos=Math.cos(j.angle),G.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),G.decay=j.decay,i.spot[x]=G;const ue=j.shadow;if(j.map&&(i.spotLightMap[O]=j.map,O++,ue.updateMatrices(j),j.castShadow&&F++),i.spotLightMatrix[x]=ue.matrix,j.castShadow){const te=t.get(j);te.shadowBias=ue.bias,te.shadowNormalBias=ue.normalBias,te.shadowRadius=ue.radius,te.shadowMapSize=ue.mapSize,i.spotShadow[x]=te,i.spotShadowMap[x]=de,V++}x++}else if(j.isRectAreaLight){const G=e.get(j);G.color.copy(oe).multiplyScalar(he),G.halfWidth.set(j.width*.5,0,0),G.halfHeight.set(0,j.height*.5,0),i.rectArea[S]=G,S++}else if(j.isPointLight){const G=e.get(j);if(G.color.copy(j.color).multiplyScalar(j.intensity*U),G.distance=j.distance,G.decay=j.decay,j.castShadow){const ue=j.shadow,te=t.get(j);te.shadowBias=ue.bias,te.shadowNormalBias=ue.normalBias,te.shadowRadius=ue.radius,te.shadowMapSize=ue.mapSize,te.shadowCameraNear=ue.camera.near,te.shadowCameraFar=ue.camera.far,i.pointShadow[E]=te,i.pointShadowMap[E]=de,i.pointShadowMatrix[E]=j.shadow.matrix,D++}i.point[E]=G,E++}else if(j.isHemisphereLight){const G=e.get(j);G.skyColor.copy(j.color).multiplyScalar(he*U),G.groundColor.copy(j.groundColor).multiplyScalar(he*U),i.hemi[C]=G,C++}}S>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_FLOAT_1,i.rectAreaLTC2=Be.LTC_FLOAT_2):(i.rectAreaLTC1=Be.LTC_HALF_1,i.rectAreaLTC2=Be.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=_,i.ambient[2]=y;const L=i.hash;(L.directionalLength!==w||L.pointLength!==E||L.spotLength!==x||L.rectAreaLength!==S||L.hemiLength!==C||L.numDirectionalShadows!==P||L.numPointShadows!==D||L.numSpotShadows!==V||L.numSpotMaps!==O||L.numLightProbes!==q)&&(i.directional.length=w,i.spot.length=x,i.rectArea.length=S,i.point.length=E,i.hemi.length=C,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=V,i.spotShadowMap.length=V,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=V+O-F,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=q,L.directionalLength=w,L.pointLength=E,L.spotLength=x,L.rectAreaLength=S,L.hemiLength=C,L.numDirectionalShadows=P,L.numPointShadows=D,L.numSpotShadows=V,L.numSpotMaps=O,L.numLightProbes=q,i.version=HE++)}function p(h,m){let d=0,_=0,y=0,w=0,E=0;const x=m.matrixWorldInverse;for(let S=0,C=h.length;S<C;S++){const P=h[S];if(P.isDirectionalLight){const D=i.directional[d];D.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(x),d++}else if(P.isSpotLight){const D=i.spot[y];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(x),y++}else if(P.isRectAreaLight){const D=i.rectArea[w];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(x),u.identity(),l.copy(P.matrixWorld),l.premultiply(x),u.extractRotation(l),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),w++}else if(P.isPointLight){const D=i.point[_];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(x),_++}else if(P.isHemisphereLight){const D=i.hemi[E];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(x),E++}}}return{setup:f,setupView:p,state:i}}function vg(s){const e=new GE(s),t=[],i=[];function o(m){h.camera=m,t.length=0,i.length=0}function l(m){t.push(m)}function u(m){i.push(m)}function f(m){e.setup(t,m)}function p(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:u}}function WE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new vg(s),e.set(o,[f])):l>=u.length?(f=new vg(s),u.push(f)):f=u[l],f}function i(){e=new WeakMap}return{get:t,dispose:i}}class $E extends Ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ry,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XE extends Ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function YE(s,e,t){let i=new lh;const o=new Xe,l=new Xe,u=new Kt,f=new $E({depthPacking:Py}),p=new XE,h={},m=t.maxTextureSize,d={[kr]:$n,[$n]:kr,[sr]:sr},_=new Br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:qE,fragmentShader:jE}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const w=new ii;w.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Oe(w,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jg;let S=this.type;this.render=function(O,F,q){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const U=s.getRenderTarget(),L=s.getActiveCubeFace(),ne=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(Or),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const j=S!==rr&&this.type===rr,oe=S===rr&&this.type!==rr;for(let he=0,_e=O.length;he<_e;he++){const de=O[he],G=de.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const ue=G.getFrameExtents();if(o.multiply(ue),l.copy(G.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/ue.x),o.x=l.x*ue.x,G.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/ue.y),o.y=l.y*ue.y,G.mapSize.y=l.y)),G.map===null||j===!0||oe===!0){const z=this.type!==rr?{minFilter:di,magFilter:di}:{};G.map!==null&&G.map.dispose(),G.map=new vs(o.x,o.y,z),G.map.texture.name=de.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const te=G.getViewportCount();for(let z=0;z<te;z++){const le=G.getViewport(z);u.set(l.x*le.x,l.y*le.y,l.x*le.z,l.y*le.w),ae.viewport(u),G.updateMatrices(de,z),i=G.getFrustum(),D(F,q,G.camera,de,this.type)}G.isPointLightShadow!==!0&&this.type===rr&&C(G,q),G.needsUpdate=!1}S=this.type,x.needsUpdate=!1,s.setRenderTarget(U,L,ne)};function C(O,F){const q=e.update(E);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new vs(o.x,o.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(F,null,q,_,E,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(F,null,q,y,E,null)}function P(O,F,q,U){let L=null;const ne=q.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(ne!==void 0)L=ne;else if(L=q.isPointLight===!0?p:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ae=L.uuid,j=F.uuid;let oe=h[ae];oe===void 0&&(oe={},h[ae]=oe);let he=oe[j];he===void 0&&(he=L.clone(),oe[j]=he,F.addEventListener("dispose",V)),L=he}if(L.visible=F.visible,L.wireframe=F.wireframe,U===rr?L.side=F.shadowSide!==null?F.shadowSide:F.side:L.side=F.shadowSide!==null?F.shadowSide:d[F.side],L.alphaMap=F.alphaMap,L.alphaTest=F.alphaTest,L.map=F.map,L.clipShadows=F.clipShadows,L.clippingPlanes=F.clippingPlanes,L.clipIntersection=F.clipIntersection,L.displacementMap=F.displacementMap,L.displacementScale=F.displacementScale,L.displacementBias=F.displacementBias,L.wireframeLinewidth=F.wireframeLinewidth,L.linewidth=F.linewidth,q.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const ae=s.properties.get(L);ae.light=q}return L}function D(O,F,q,U,L){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&L===rr)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,O.matrixWorld);const j=e.update(O),oe=O.material;if(Array.isArray(oe)){const he=j.groups;for(let _e=0,de=he.length;_e<de;_e++){const G=he[_e],ue=oe[G.materialIndex];if(ue&&ue.visible){const te=P(O,ue,U,L);O.onBeforeShadow(s,O,F,q,j,te,G),s.renderBufferDirect(q,null,j,te,O,G),O.onAfterShadow(s,O,F,q,j,te,G)}}}else if(oe.visible){const he=P(O,oe,U,L);O.onBeforeShadow(s,O,F,q,j,he,null),s.renderBufferDirect(q,null,j,he,O,null),O.onAfterShadow(s,O,F,q,j,he,null)}}const ae=O.children;for(let j=0,oe=ae.length;j<oe;j++)D(ae[j],F,q,U,L)}function V(O){O.target.removeEventListener("dispose",V);for(const q in h){const U=h[q],L=O.target.uuid;L in U&&(U[L].dispose(),delete U[L])}}}function KE(s){function e(){let J=!1;const Se=new Kt;let ge=null;const Ue=new Kt(0,0,0,0);return{setMask:function(ze){ge!==ze&&!J&&(s.colorMask(ze,ze,ze,ze),ge=ze)},setLocked:function(ze){J=ze},setClear:function(ze,Tt,It,Ft,rn){rn===!0&&(ze*=Ft,Tt*=Ft,It*=Ft),Se.set(ze,Tt,It,Ft),Ue.equals(Se)===!1&&(s.clearColor(ze,Tt,It,Ft),Ue.copy(Se))},reset:function(){J=!1,ge=null,Ue.set(-1,0,0,0)}}}function t(){let J=!1,Se=null,ge=null,Ue=null;return{setTest:function(ze){ze?Re(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(ze){Se!==ze&&!J&&(s.depthMask(ze),Se=ze)},setFunc:function(ze){if(ge!==ze){switch(ze){case ty:s.depthFunc(s.NEVER);break;case ny:s.depthFunc(s.ALWAYS);break;case iy:s.depthFunc(s.LESS);break;case nc:s.depthFunc(s.LEQUAL);break;case ry:s.depthFunc(s.EQUAL);break;case sy:s.depthFunc(s.GEQUAL);break;case oy:s.depthFunc(s.GREATER);break;case ay:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=ze}},setLocked:function(ze){J=ze},setClear:function(ze){Ue!==ze&&(s.clearDepth(ze),Ue=ze)},reset:function(){J=!1,Se=null,ge=null,Ue=null}}}function i(){let J=!1,Se=null,ge=null,Ue=null,ze=null,Tt=null,It=null,Ft=null,rn=null;return{setTest:function(Rt){J||(Rt?Re(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(Rt){Se!==Rt&&!J&&(s.stencilMask(Rt),Se=Rt)},setFunc:function(Rt,Bt,on){(ge!==Rt||Ue!==Bt||ze!==on)&&(s.stencilFunc(Rt,Bt,on),ge=Rt,Ue=Bt,ze=on)},setOp:function(Rt,Bt,on){(Tt!==Rt||It!==Bt||Ft!==on)&&(s.stencilOp(Rt,Bt,on),Tt=Rt,It=Bt,Ft=on)},setLocked:function(Rt){J=Rt},setClear:function(Rt){rn!==Rt&&(s.clearStencil(Rt),rn=Rt)},reset:function(){J=!1,Se=null,ge=null,Ue=null,ze=null,Tt=null,It=null,Ft=null,rn=null}}}const o=new e,l=new t,u=new i,f=new WeakMap,p=new WeakMap;let h={},m={},d=new WeakMap,_=[],y=null,w=!1,E=null,x=null,S=null,C=null,P=null,D=null,V=null,O=new Ct(0,0,0),F=0,q=!1,U=null,L=null,ne=null,ae=null,j=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let he=!1,_e=0;const de=s.getParameter(s.VERSION);de.indexOf("WebGL")!==-1?(_e=parseFloat(/^WebGL (\d)/.exec(de)[1]),he=_e>=1):de.indexOf("OpenGL ES")!==-1&&(_e=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),he=_e>=2);let G=null,ue={};const te=s.getParameter(s.SCISSOR_BOX),z=s.getParameter(s.VIEWPORT),le=new Kt().fromArray(te),Ve=new Kt().fromArray(z);function re(J,Se,ge,Ue){const ze=new Uint8Array(4),Tt=s.createTexture();s.bindTexture(J,Tt),s.texParameteri(J,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(J,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let It=0;It<ge;It++)J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?s.texImage3D(Se,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,ze):s.texImage2D(Se+It,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ze);return Tt}const ye={};ye[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Re(s.DEPTH_TEST),l.setFunc(nc),wt(!1),vt(Zp),Re(s.CULL_FACE),ht(Or);function Re(J){h[J]!==!0&&(s.enable(J),h[J]=!0)}function Ee(J){h[J]!==!1&&(s.disable(J),h[J]=!1)}function $e(J,Se){return m[J]!==Se?(s.bindFramebuffer(J,Se),m[J]=Se,J===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Se),J===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ye(J,Se){let ge=_,Ue=!1;if(J){ge=d.get(Se),ge===void 0&&(ge=[],d.set(Se,ge));const ze=J.textures;if(ge.length!==ze.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let Tt=0,It=ze.length;Tt<It;Tt++)ge[Tt]=s.COLOR_ATTACHMENT0+Tt;ge.length=ze.length,Ue=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(ge)}function ee(J){return y!==J?(s.useProgram(J),y=J,!0):!1}const Lt={[ds]:s.FUNC_ADD,[k_]:s.FUNC_SUBTRACT,[z_]:s.FUNC_REVERSE_SUBTRACT};Lt[B_]=s.MIN,Lt[H_]=s.MAX;const it={[V_]:s.ZERO,[G_]:s.ONE,[W_]:s.SRC_COLOR,[Xf]:s.SRC_ALPHA,[K_]:s.SRC_ALPHA_SATURATE,[j_]:s.DST_COLOR,[X_]:s.DST_ALPHA,[$_]:s.ONE_MINUS_SRC_COLOR,[qf]:s.ONE_MINUS_SRC_ALPHA,[Y_]:s.ONE_MINUS_DST_COLOR,[q_]:s.ONE_MINUS_DST_ALPHA,[J_]:s.CONSTANT_COLOR,[Z_]:s.ONE_MINUS_CONSTANT_COLOR,[Q_]:s.CONSTANT_ALPHA,[ey]:s.ONE_MINUS_CONSTANT_ALPHA};function ht(J,Se,ge,Ue,ze,Tt,It,Ft,rn,Rt){if(J===Or){w===!0&&(Ee(s.BLEND),w=!1);return}if(w===!1&&(Re(s.BLEND),w=!0),J!==F_){if(J!==E||Rt!==q){if((x!==ds||P!==ds)&&(s.blendEquation(s.FUNC_ADD),x=ds,P=ds),Rt)switch(J){case lo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $f:s.blendFunc(s.ONE,s.ONE);break;case Qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case em:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}else switch(J){case lo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $f:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case em:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}S=null,C=null,D=null,V=null,O.set(0,0,0),F=0,E=J,q=Rt}return}ze=ze||Se,Tt=Tt||ge,It=It||Ue,(Se!==x||ze!==P)&&(s.blendEquationSeparate(Lt[Se],Lt[ze]),x=Se,P=ze),(ge!==S||Ue!==C||Tt!==D||It!==V)&&(s.blendFuncSeparate(it[ge],it[Ue],it[Tt],it[It]),S=ge,C=Ue,D=Tt,V=It),(Ft.equals(O)===!1||rn!==F)&&(s.blendColor(Ft.r,Ft.g,Ft.b,rn),O.copy(Ft),F=rn),E=J,q=!1}function st(J,Se){J.side===sr?Ee(s.CULL_FACE):Re(s.CULL_FACE);let ge=J.side===$n;Se&&(ge=!ge),wt(ge),J.blending===lo&&J.transparent===!1?ht(Or):ht(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),l.setFunc(J.depthFunc),l.setTest(J.depthTest),l.setMask(J.depthWrite),o.setMask(J.colorWrite);const Ue=J.stencilWrite;u.setTest(Ue),Ue&&(u.setMask(J.stencilWriteMask),u.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),u.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Ot(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?Re(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function wt(J){U!==J&&(J?s.frontFace(s.CW):s.frontFace(s.CCW),U=J)}function vt(J){J!==N_?(Re(s.CULL_FACE),J!==L&&(J===Zp?s.cullFace(s.BACK):J===U_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),L=J}function _t(J){J!==ne&&(he&&s.lineWidth(J),ne=J)}function Ot(J,Se,ge){J?(Re(s.POLYGON_OFFSET_FILL),(ae!==Se||j!==ge)&&(s.polygonOffset(Se,ge),ae=Se,j=ge)):Ee(s.POLYGON_OFFSET_FILL)}function B(J){J?Re(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function N(J){J===void 0&&(J=s.TEXTURE0+oe-1),G!==J&&(s.activeTexture(J),G=J)}function fe(J,Se,ge){ge===void 0&&(G===null?ge=s.TEXTURE0+oe-1:ge=G);let Ue=ue[ge];Ue===void 0&&(Ue={type:void 0,texture:void 0},ue[ge]=Ue),(Ue.type!==J||Ue.texture!==Se)&&(G!==ge&&(s.activeTexture(ge),G=ge),s.bindTexture(J,Se||ye[J]),Ue.type=J,Ue.texture=Se)}function xe(){const J=ue[G];J!==void 0&&J.type!==void 0&&(s.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function Ce(){try{s.compressedTexImage2D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Pe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function tt(){try{s.texSubImage2D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Fe(){try{s.texSubImage3D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ke(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function dt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ne(){try{s.texStorage2D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ke(){try{s.texStorage3D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function xt(){try{s.texImage2D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ot(){try{s.texImage3D.apply(s,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function We(J){le.equals(J)===!1&&(s.scissor(J.x,J.y,J.z,J.w),le.copy(J))}function ut(J){Ve.equals(J)===!1&&(s.viewport(J.x,J.y,J.z,J.w),Ve.copy(J))}function Et(J,Se){let ge=p.get(Se);ge===void 0&&(ge=new WeakMap,p.set(Se,ge));let Ue=ge.get(J);Ue===void 0&&(Ue=s.getUniformBlockIndex(Se,J.name),ge.set(J,Ue))}function zt(J,Se){const Ue=p.get(Se).get(J);f.get(Se)!==Ue&&(s.uniformBlockBinding(Se,Ue,J.__bindingPointIndex),f.set(Se,Ue))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},G=null,ue={},m={},d=new WeakMap,_=[],y=null,w=!1,E=null,x=null,S=null,C=null,P=null,D=null,V=null,O=new Ct(0,0,0),F=0,q=!1,U=null,L=null,ne=null,ae=null,j=null,le.set(0,0,s.canvas.width,s.canvas.height),Ve.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Re,disable:Ee,bindFramebuffer:$e,drawBuffers:Ye,useProgram:ee,setBlending:ht,setMaterial:st,setFlipSided:wt,setCullFace:vt,setLineWidth:_t,setPolygonOffset:Ot,setScissorTest:B,activeTexture:N,bindTexture:fe,unbindTexture:xe,compressedTexImage2D:Ce,compressedTexImage3D:Pe,texImage2D:xt,texImage3D:ot,updateUBOMapping:Et,uniformBlockBinding:zt,texStorage2D:Ne,texStorage3D:Ke,texSubImage2D:tt,texSubImage3D:Fe,compressedTexSubImage2D:ke,compressedTexSubImage3D:dt,scissor:We,viewport:ut,reset:pt}}function JE(s,e,t,i,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Xe,m=new WeakMap;let d;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(B,N){return y?new OffscreenCanvas(B,N):va("canvas")}function E(B,N,fe){let xe=1;const Ce=Ot(B);if((Ce.width>fe||Ce.height>fe)&&(xe=fe/Math.max(Ce.width,Ce.height)),xe<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Pe=Math.floor(xe*Ce.width),tt=Math.floor(xe*Ce.height);d===void 0&&(d=w(Pe,tt));const Fe=N?w(Pe,tt):d;return Fe.width=Pe,Fe.height=tt,Fe.getContext("2d").drawImage(B,0,0,Pe,tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ce.width+"x"+Ce.height+") to ("+Pe+"x"+tt+")."),Fe}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ce.width+"x"+Ce.height+")."),B;return B}function x(B){return B.generateMipmaps&&B.minFilter!==di&&B.minFilter!==Ci}function S(B){s.generateMipmap(B)}function C(B,N,fe,xe,Ce=!1){if(B!==null){if(s[B]!==void 0)return s[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Pe=N;if(N===s.RED&&(fe===s.FLOAT&&(Pe=s.R32F),fe===s.HALF_FLOAT&&(Pe=s.R16F),fe===s.UNSIGNED_BYTE&&(Pe=s.R8)),N===s.RED_INTEGER&&(fe===s.UNSIGNED_BYTE&&(Pe=s.R8UI),fe===s.UNSIGNED_SHORT&&(Pe=s.R16UI),fe===s.UNSIGNED_INT&&(Pe=s.R32UI),fe===s.BYTE&&(Pe=s.R8I),fe===s.SHORT&&(Pe=s.R16I),fe===s.INT&&(Pe=s.R32I)),N===s.RG&&(fe===s.FLOAT&&(Pe=s.RG32F),fe===s.HALF_FLOAT&&(Pe=s.RG16F),fe===s.UNSIGNED_BYTE&&(Pe=s.RG8)),N===s.RG_INTEGER&&(fe===s.UNSIGNED_BYTE&&(Pe=s.RG8UI),fe===s.UNSIGNED_SHORT&&(Pe=s.RG16UI),fe===s.UNSIGNED_INT&&(Pe=s.RG32UI),fe===s.BYTE&&(Pe=s.RG8I),fe===s.SHORT&&(Pe=s.RG16I),fe===s.INT&&(Pe=s.RG32I)),N===s.RGB&&fe===s.UNSIGNED_INT_5_9_9_9_REV&&(Pe=s.RGB9_E5),N===s.RGBA){const tt=Ce?ic:kt.getTransfer(xe);fe===s.FLOAT&&(Pe=s.RGBA32F),fe===s.HALF_FLOAT&&(Pe=s.RGBA16F),fe===s.UNSIGNED_BYTE&&(Pe=tt===Xt?s.SRGB8_ALPHA8:s.RGBA8),fe===s.UNSIGNED_SHORT_4_4_4_4&&(Pe=s.RGBA4),fe===s.UNSIGNED_SHORT_5_5_5_1&&(Pe=s.RGB5_A1)}return(Pe===s.R16F||Pe===s.R32F||Pe===s.RG16F||Pe===s.RG32F||Pe===s.RGBA16F||Pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Pe}function P(B,N){return x(B)===!0||B.isFramebufferTexture&&B.minFilter!==di&&B.minFilter!==Ci?Math.log2(Math.max(N.width,N.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?N.mipmaps.length:1}function D(B){const N=B.target;N.removeEventListener("dispose",D),O(N),N.isVideoTexture&&m.delete(N)}function V(B){const N=B.target;N.removeEventListener("dispose",V),q(N)}function O(B){const N=i.get(B);if(N.__webglInit===void 0)return;const fe=B.source,xe=_.get(fe);if(xe){const Ce=xe[N.__cacheKey];Ce.usedTimes--,Ce.usedTimes===0&&F(B),Object.keys(xe).length===0&&_.delete(fe)}i.remove(B)}function F(B){const N=i.get(B);s.deleteTexture(N.__webglTexture);const fe=B.source,xe=_.get(fe);delete xe[N.__cacheKey],u.memory.textures--}function q(B){const N=i.get(B);if(B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(N.__webglFramebuffer[xe]))for(let Ce=0;Ce<N.__webglFramebuffer[xe].length;Ce++)s.deleteFramebuffer(N.__webglFramebuffer[xe][Ce]);else s.deleteFramebuffer(N.__webglFramebuffer[xe]);N.__webglDepthbuffer&&s.deleteRenderbuffer(N.__webglDepthbuffer[xe])}else{if(Array.isArray(N.__webglFramebuffer))for(let xe=0;xe<N.__webglFramebuffer.length;xe++)s.deleteFramebuffer(N.__webglFramebuffer[xe]);else s.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&s.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&s.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let xe=0;xe<N.__webglColorRenderbuffer.length;xe++)N.__webglColorRenderbuffer[xe]&&s.deleteRenderbuffer(N.__webglColorRenderbuffer[xe]);N.__webglDepthRenderbuffer&&s.deleteRenderbuffer(N.__webglDepthRenderbuffer)}const fe=B.textures;for(let xe=0,Ce=fe.length;xe<Ce;xe++){const Pe=i.get(fe[xe]);Pe.__webglTexture&&(s.deleteTexture(Pe.__webglTexture),u.memory.textures--),i.remove(fe[xe])}i.remove(B)}let U=0;function L(){U=0}function ne(){const B=U;return B>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+o.maxTextures),U+=1,B}function ae(B){const N=[];return N.push(B.wrapS),N.push(B.wrapT),N.push(B.wrapR||0),N.push(B.magFilter),N.push(B.minFilter),N.push(B.anisotropy),N.push(B.internalFormat),N.push(B.format),N.push(B.type),N.push(B.generateMipmaps),N.push(B.premultiplyAlpha),N.push(B.flipY),N.push(B.unpackAlignment),N.push(B.colorSpace),N.join()}function j(B,N){const fe=i.get(B);if(B.isVideoTexture&&vt(B),B.isRenderTargetTexture===!1&&B.version>0&&fe.__version!==B.version){const xe=B.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(fe,B,N);return}}t.bindTexture(s.TEXTURE_2D,fe.__webglTexture,s.TEXTURE0+N)}function oe(B,N){const fe=i.get(B);if(B.version>0&&fe.__version!==B.version){le(fe,B,N);return}t.bindTexture(s.TEXTURE_2D_ARRAY,fe.__webglTexture,s.TEXTURE0+N)}function he(B,N){const fe=i.get(B);if(B.version>0&&fe.__version!==B.version){le(fe,B,N);return}t.bindTexture(s.TEXTURE_3D,fe.__webglTexture,s.TEXTURE0+N)}function _e(B,N){const fe=i.get(B);if(B.version>0&&fe.__version!==B.version){Ve(fe,B,N);return}t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture,s.TEXTURE0+N)}const de={[Kf]:s.REPEAT,[ms]:s.CLAMP_TO_EDGE,[Jf]:s.MIRRORED_REPEAT},G={[di]:s.NEAREST,[vy]:s.NEAREST_MIPMAP_NEAREST,[El]:s.NEAREST_MIPMAP_LINEAR,[Ci]:s.LINEAR,[Ju]:s.LINEAR_MIPMAP_NEAREST,[gs]:s.LINEAR_MIPMAP_LINEAR},ue={[Ly]:s.NEVER,[Fy]:s.ALWAYS,[Dy]:s.LESS,[l0]:s.LEQUAL,[Iy]:s.EQUAL,[Oy]:s.GEQUAL,[Ny]:s.GREATER,[Uy]:s.NOTEQUAL};function te(B,N){if(N.type===Ur&&e.has("OES_texture_float_linear")===!1&&(N.magFilter===Ci||N.magFilter===Ju||N.magFilter===El||N.magFilter===gs||N.minFilter===Ci||N.minFilter===Ju||N.minFilter===El||N.minFilter===gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,de[N.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,de[N.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,de[N.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,G[N.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,G[N.minFilter]),N.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,ue[N.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(N.magFilter===di||N.minFilter!==El&&N.minFilter!==gs||N.type===Ur&&e.has("OES_texture_float_linear")===!1)return;if(N.anisotropy>1||i.get(N).__currentAnisotropy){const fe=e.get("EXT_texture_filter_anisotropic");s.texParameterf(B,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(N.anisotropy,o.getMaxAnisotropy())),i.get(N).__currentAnisotropy=N.anisotropy}}}function z(B,N){let fe=!1;B.__webglInit===void 0&&(B.__webglInit=!0,N.addEventListener("dispose",D));const xe=N.source;let Ce=_.get(xe);Ce===void 0&&(Ce={},_.set(xe,Ce));const Pe=ae(N);if(Pe!==B.__cacheKey){Ce[Pe]===void 0&&(Ce[Pe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,fe=!0),Ce[Pe].usedTimes++;const tt=Ce[B.__cacheKey];tt!==void 0&&(Ce[B.__cacheKey].usedTimes--,tt.usedTimes===0&&F(N)),B.__cacheKey=Pe,B.__webglTexture=Ce[Pe].texture}return fe}function le(B,N,fe){let xe=s.TEXTURE_2D;(N.isDataArrayTexture||N.isCompressedArrayTexture)&&(xe=s.TEXTURE_2D_ARRAY),N.isData3DTexture&&(xe=s.TEXTURE_3D);const Ce=z(B,N),Pe=N.source;t.bindTexture(xe,B.__webglTexture,s.TEXTURE0+fe);const tt=i.get(Pe);if(Pe.version!==tt.__version||Ce===!0){t.activeTexture(s.TEXTURE0+fe);const Fe=kt.getPrimaries(kt.workingColorSpace),ke=N.colorSpace===Nr?null:kt.getPrimaries(N.colorSpace),dt=N.colorSpace===Nr||Fe===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,N.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,N.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Ne=E(N.image,!1,o.maxTextureSize);Ne=_t(N,Ne);const Ke=l.convert(N.format,N.colorSpace),xt=l.convert(N.type);let ot=C(N.internalFormat,Ke,xt,N.colorSpace,N.isVideoTexture);te(xe,N);let We;const ut=N.mipmaps,Et=N.isVideoTexture!==!0,zt=tt.__version===void 0||Ce===!0,pt=Pe.dataReady,J=P(N,Ne);if(N.isDepthTexture)ot=s.DEPTH_COMPONENT16,N.type===Ur?ot=s.DEPTH_COMPONENT32F:N.type===po?ot=s.DEPTH_COMPONENT24:N.type===ya&&(ot=s.DEPTH24_STENCIL8),zt&&(Et?t.texStorage2D(s.TEXTURE_2D,1,ot,Ne.width,Ne.height):t.texImage2D(s.TEXTURE_2D,0,ot,Ne.width,Ne.height,0,Ke,xt,null));else if(N.isDataTexture)if(ut.length>0){Et&&zt&&t.texStorage2D(s.TEXTURE_2D,J,ot,ut[0].width,ut[0].height);for(let Se=0,ge=ut.length;Se<ge;Se++)We=ut[Se],Et?pt&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,We.width,We.height,Ke,xt,We.data):t.texImage2D(s.TEXTURE_2D,Se,ot,We.width,We.height,0,Ke,xt,We.data);N.generateMipmaps=!1}else Et?(zt&&t.texStorage2D(s.TEXTURE_2D,J,ot,Ne.width,Ne.height),pt&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ne.width,Ne.height,Ke,xt,Ne.data)):t.texImage2D(s.TEXTURE_2D,0,ot,Ne.width,Ne.height,0,Ke,xt,Ne.data);else if(N.isCompressedTexture)if(N.isCompressedArrayTexture){Et&&zt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,J,ot,ut[0].width,ut[0].height,Ne.depth);for(let Se=0,ge=ut.length;Se<ge;Se++)We=ut[Se],N.format!==Fi?Ke!==null?Et?pt&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,We.width,We.height,Ne.depth,Ke,We.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,ot,We.width,We.height,Ne.depth,0,We.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?pt&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,We.width,We.height,Ne.depth,Ke,xt,We.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,ot,We.width,We.height,Ne.depth,0,Ke,xt,We.data)}else{Et&&zt&&t.texStorage2D(s.TEXTURE_2D,J,ot,ut[0].width,ut[0].height);for(let Se=0,ge=ut.length;Se<ge;Se++)We=ut[Se],N.format!==Fi?Ke!==null?Et?pt&&t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,We.width,We.height,Ke,We.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,ot,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?pt&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,We.width,We.height,Ke,xt,We.data):t.texImage2D(s.TEXTURE_2D,Se,ot,We.width,We.height,0,Ke,xt,We.data)}else if(N.isDataArrayTexture)Et?(zt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,J,ot,Ne.width,Ne.height,Ne.depth),pt&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ne.width,Ne.height,Ne.depth,Ke,xt,Ne.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ot,Ne.width,Ne.height,Ne.depth,0,Ke,xt,Ne.data);else if(N.isData3DTexture)Et?(zt&&t.texStorage3D(s.TEXTURE_3D,J,ot,Ne.width,Ne.height,Ne.depth),pt&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ne.width,Ne.height,Ne.depth,Ke,xt,Ne.data)):t.texImage3D(s.TEXTURE_3D,0,ot,Ne.width,Ne.height,Ne.depth,0,Ke,xt,Ne.data);else if(N.isFramebufferTexture){if(zt)if(Et)t.texStorage2D(s.TEXTURE_2D,J,ot,Ne.width,Ne.height);else{let Se=Ne.width,ge=Ne.height;for(let Ue=0;Ue<J;Ue++)t.texImage2D(s.TEXTURE_2D,Ue,ot,Se,ge,0,Ke,xt,null),Se>>=1,ge>>=1}}else if(ut.length>0){if(Et&&zt){const Se=Ot(ut[0]);t.texStorage2D(s.TEXTURE_2D,J,ot,Se.width,Se.height)}for(let Se=0,ge=ut.length;Se<ge;Se++)We=ut[Se],Et?pt&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ke,xt,We):t.texImage2D(s.TEXTURE_2D,Se,ot,Ke,xt,We);N.generateMipmaps=!1}else if(Et){if(zt){const Se=Ot(Ne);t.texStorage2D(s.TEXTURE_2D,J,ot,Se.width,Se.height)}pt&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ke,xt,Ne)}else t.texImage2D(s.TEXTURE_2D,0,ot,Ke,xt,Ne);x(N)&&S(xe),tt.__version=Pe.version,N.onUpdate&&N.onUpdate(N)}B.__version=N.version}function Ve(B,N,fe){if(N.image.length!==6)return;const xe=z(B,N),Ce=N.source;t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+fe);const Pe=i.get(Ce);if(Ce.version!==Pe.__version||xe===!0){t.activeTexture(s.TEXTURE0+fe);const tt=kt.getPrimaries(kt.workingColorSpace),Fe=N.colorSpace===Nr?null:kt.getPrimaries(N.colorSpace),ke=N.colorSpace===Nr||tt===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,N.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,N.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const dt=N.isCompressedTexture||N.image[0].isCompressedTexture,Ne=N.image[0]&&N.image[0].isDataTexture,Ke=[];for(let ge=0;ge<6;ge++)!dt&&!Ne?Ke[ge]=E(N.image[ge],!0,o.maxCubemapSize):Ke[ge]=Ne?N.image[ge].image:N.image[ge],Ke[ge]=_t(N,Ke[ge]);const xt=Ke[0],ot=l.convert(N.format,N.colorSpace),We=l.convert(N.type),ut=C(N.internalFormat,ot,We,N.colorSpace),Et=N.isVideoTexture!==!0,zt=Pe.__version===void 0||xe===!0,pt=Ce.dataReady;let J=P(N,xt);te(s.TEXTURE_CUBE_MAP,N);let Se;if(dt){Et&&zt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,J,ut,xt.width,xt.height);for(let ge=0;ge<6;ge++){Se=Ke[ge].mipmaps;for(let Ue=0;Ue<Se.length;Ue++){const ze=Se[Ue];N.format!==Fi?ot!==null?Et?pt&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue,0,0,ze.width,ze.height,ot,ze.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue,ut,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?pt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue,0,0,ze.width,ze.height,ot,We,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue,ut,ze.width,ze.height,0,ot,We,ze.data)}}}else{if(Se=N.mipmaps,Et&&zt){Se.length>0&&J++;const ge=Ot(Ke[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,J,ut,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ne){Et?pt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ke[ge].width,Ke[ge].height,ot,We,Ke[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ut,Ke[ge].width,Ke[ge].height,0,ot,We,Ke[ge].data);for(let Ue=0;Ue<Se.length;Ue++){const Tt=Se[Ue].image[ge].image;Et?pt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue+1,0,0,Tt.width,Tt.height,ot,We,Tt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue+1,ut,Tt.width,Tt.height,0,ot,We,Tt.data)}}else{Et?pt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ot,We,Ke[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ut,ot,We,Ke[ge]);for(let Ue=0;Ue<Se.length;Ue++){const ze=Se[Ue];Et?pt&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue+1,0,0,ot,We,ze.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue+1,ut,ot,We,ze.image[ge])}}}x(N)&&S(s.TEXTURE_CUBE_MAP),Pe.__version=Ce.version,N.onUpdate&&N.onUpdate(N)}B.__version=N.version}function re(B,N,fe,xe,Ce,Pe){const tt=l.convert(fe.format,fe.colorSpace),Fe=l.convert(fe.type),ke=C(fe.internalFormat,tt,Fe,fe.colorSpace);if(!i.get(N).__hasExternalTextures){const Ne=Math.max(1,N.width>>Pe),Ke=Math.max(1,N.height>>Pe);Ce===s.TEXTURE_3D||Ce===s.TEXTURE_2D_ARRAY?t.texImage3D(Ce,Pe,ke,Ne,Ke,N.depth,0,tt,Fe,null):t.texImage2D(Ce,Pe,ke,Ne,Ke,0,tt,Fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,B),wt(N)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,Ce,i.get(fe).__webglTexture,0,st(N)):(Ce===s.TEXTURE_2D||Ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,xe,Ce,i.get(fe).__webglTexture,Pe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(B,N,fe){if(s.bindRenderbuffer(s.RENDERBUFFER,B),N.depthBuffer&&!N.stencilBuffer){let xe=s.DEPTH_COMPONENT24;if(fe||wt(N)){const Ce=N.depthTexture;Ce&&Ce.isDepthTexture&&(Ce.type===Ur?xe=s.DEPTH_COMPONENT32F:Ce.type===po&&(xe=s.DEPTH_COMPONENT24));const Pe=st(N);wt(N)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,xe,N.width,N.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,xe,N.width,N.height)}else s.renderbufferStorage(s.RENDERBUFFER,xe,N.width,N.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,B)}else if(N.depthBuffer&&N.stencilBuffer){const xe=st(N);fe&&wt(N)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,s.DEPTH24_STENCIL8,N.width,N.height):wt(N)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,s.DEPTH24_STENCIL8,N.width,N.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,B)}else{const xe=N.textures;for(let Ce=0;Ce<xe.length;Ce++){const Pe=xe[Ce],tt=l.convert(Pe.format,Pe.colorSpace),Fe=l.convert(Pe.type),ke=C(Pe.internalFormat,tt,Fe,Pe.colorSpace),dt=st(N);fe&&wt(N)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,ke,N.width,N.height):wt(N)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,ke,N.width,N.height):s.renderbufferStorage(s.RENDERBUFFER,ke,N.width,N.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(B,N){if(N&&N.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,B),!(N.depthTexture&&N.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(N.depthTexture).__webglTexture||N.depthTexture.image.width!==N.width||N.depthTexture.image.height!==N.height)&&(N.depthTexture.image.width=N.width,N.depthTexture.image.height=N.height,N.depthTexture.needsUpdate=!0),j(N.depthTexture,0);const xe=i.get(N.depthTexture).__webglTexture,Ce=st(N);if(N.depthTexture.format===co)wt(N)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(N.depthTexture.format===ma)wt(N)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Ee(B){const N=i.get(B),fe=B.isWebGLCubeRenderTarget===!0;if(B.depthTexture&&!N.__autoAllocateDepthBuffer){if(fe)throw new Error("target.depthTexture not supported in Cube render targets");Re(N.__webglFramebuffer,B)}else if(fe){N.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(s.FRAMEBUFFER,N.__webglFramebuffer[xe]),N.__webglDepthbuffer[xe]=s.createRenderbuffer(),ye(N.__webglDepthbuffer[xe],B,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,N.__webglFramebuffer),N.__webglDepthbuffer=s.createRenderbuffer(),ye(N.__webglDepthbuffer,B,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function $e(B,N,fe){const xe=i.get(B);N!==void 0&&re(xe.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),fe!==void 0&&Ee(B)}function Ye(B){const N=B.texture,fe=i.get(B),xe=i.get(N);B.addEventListener("dispose",V);const Ce=B.textures,Pe=B.isWebGLCubeRenderTarget===!0,tt=Ce.length>1;if(tt||(xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture()),xe.__version=N.version,u.memory.textures++),Pe){fe.__webglFramebuffer=[];for(let Fe=0;Fe<6;Fe++)if(N.mipmaps&&N.mipmaps.length>0){fe.__webglFramebuffer[Fe]=[];for(let ke=0;ke<N.mipmaps.length;ke++)fe.__webglFramebuffer[Fe][ke]=s.createFramebuffer()}else fe.__webglFramebuffer[Fe]=s.createFramebuffer()}else{if(N.mipmaps&&N.mipmaps.length>0){fe.__webglFramebuffer=[];for(let Fe=0;Fe<N.mipmaps.length;Fe++)fe.__webglFramebuffer[Fe]=s.createFramebuffer()}else fe.__webglFramebuffer=s.createFramebuffer();if(tt)for(let Fe=0,ke=Ce.length;Fe<ke;Fe++){const dt=i.get(Ce[Fe]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),u.memory.textures++)}if(B.samples>0&&wt(B)===!1){fe.__webglMultisampledFramebuffer=s.createFramebuffer(),fe.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer);for(let Fe=0;Fe<Ce.length;Fe++){const ke=Ce[Fe];fe.__webglColorRenderbuffer[Fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,fe.__webglColorRenderbuffer[Fe]);const dt=l.convert(ke.format,ke.colorSpace),Ne=l.convert(ke.type),Ke=C(ke.internalFormat,dt,Ne,ke.colorSpace,B.isXRRenderTarget===!0),xt=st(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,Ke,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,fe.__webglColorRenderbuffer[Fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(fe.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(fe.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Pe){t.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),te(s.TEXTURE_CUBE_MAP,N);for(let Fe=0;Fe<6;Fe++)if(N.mipmaps&&N.mipmaps.length>0)for(let ke=0;ke<N.mipmaps.length;ke++)re(fe.__webglFramebuffer[Fe][ke],B,N,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,ke);else re(fe.__webglFramebuffer[Fe],B,N,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0);x(N)&&S(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(tt){for(let Fe=0,ke=Ce.length;Fe<ke;Fe++){const dt=Ce[Fe],Ne=i.get(dt);t.bindTexture(s.TEXTURE_2D,Ne.__webglTexture),te(s.TEXTURE_2D,dt),re(fe.__webglFramebuffer,B,dt,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,0),x(dt)&&S(s.TEXTURE_2D)}t.unbindTexture()}else{let Fe=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Fe=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Fe,xe.__webglTexture),te(Fe,N),N.mipmaps&&N.mipmaps.length>0)for(let ke=0;ke<N.mipmaps.length;ke++)re(fe.__webglFramebuffer[ke],B,N,s.COLOR_ATTACHMENT0,Fe,ke);else re(fe.__webglFramebuffer,B,N,s.COLOR_ATTACHMENT0,Fe,0);x(N)&&S(Fe),t.unbindTexture()}B.depthBuffer&&Ee(B)}function ee(B){const N=B.textures;for(let fe=0,xe=N.length;fe<xe;fe++){const Ce=N[fe];if(x(Ce)){const Pe=B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,tt=i.get(Ce).__webglTexture;t.bindTexture(Pe,tt),S(Pe),t.unbindTexture()}}}const Lt=[],it=[];function ht(B){if(B.samples>0){if(wt(B)===!1){const N=B.textures,fe=B.width,xe=B.height;let Ce=s.COLOR_BUFFER_BIT;const Pe=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=i.get(B),Fe=N.length>1;if(Fe)for(let ke=0;ke<N.length;ke++)t.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,tt.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,tt.__webglFramebuffer);for(let ke=0;ke<N.length;ke++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Ce|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Ce|=s.STENCIL_BUFFER_BIT)),Fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,tt.__webglColorRenderbuffer[ke]);const dt=i.get(N[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,fe,xe,0,0,fe,xe,Ce,s.NEAREST),p===!0&&(Lt.length=0,it.length=0,Lt.push(s.COLOR_ATTACHMENT0+ke),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Lt.push(Pe),it.push(Pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,it)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Fe)for(let ke=0;ke<N.length;ke++){t.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,tt.__webglColorRenderbuffer[ke]);const dt=i.get(N[ke]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,dt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,tt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&p){const N=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[N])}}}function st(B){return Math.min(o.maxSamples,B.samples)}function wt(B){const N=i.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&N.__useRenderToTexture!==!1}function vt(B){const N=u.render.frame;m.get(B)!==N&&(m.set(B,N),B.update())}function _t(B,N){const fe=B.colorSpace,xe=B.format,Ce=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||fe!==Hr&&fe!==Nr&&(kt.getTransfer(fe)===Xt?(xe!==Fi||Ce!==zr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",fe)),N}function Ot(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=ne,this.resetTextureUnits=L,this.setTexture2D=j,this.setTexture2DArray=oe,this.setTexture3D=he,this.setTextureCube=_e,this.rebindTextures=$e,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=re,this.useMultisampledRTT=wt}function ZE(s,e){function t(i,o=Nr){let l;const u=kt.getTransfer(o);if(i===zr)return s.UNSIGNED_BYTE;if(i===n0)return s.UNSIGNED_SHORT_4_4_4_4;if(i===i0)return s.UNSIGNED_SHORT_5_5_5_1;if(i===xy)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===_y)return s.BYTE;if(i===yy)return s.SHORT;if(i===e0)return s.UNSIGNED_SHORT;if(i===t0)return s.INT;if(i===po)return s.UNSIGNED_INT;if(i===Ur)return s.FLOAT;if(i===lc)return s.HALF_FLOAT;if(i===Sy)return s.ALPHA;if(i===My)return s.RGB;if(i===Fi)return s.RGBA;if(i===wy)return s.LUMINANCE;if(i===Ey)return s.LUMINANCE_ALPHA;if(i===co)return s.DEPTH_COMPONENT;if(i===ma)return s.DEPTH_STENCIL;if(i===Ty)return s.RED;if(i===r0)return s.RED_INTEGER;if(i===Ay)return s.RG;if(i===s0)return s.RG_INTEGER;if(i===o0)return s.RGBA_INTEGER;if(i===Zu||i===Qu||i===ef||i===tf)if(u===Xt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===Zu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ef)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===Zu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ef)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tm||i===nm||i===im||i===rm)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===tm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nm)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===im)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rm)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sm||i===om||i===am)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===sm||i===om)return u===Xt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===am)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===lm||i===cm||i===um||i===fm||i===hm||i===dm||i===pm||i===mm||i===gm||i===vm||i===_m||i===ym||i===xm||i===Sm)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===lm)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cm)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===um)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fm)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hm)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dm)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pm)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mm)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gm)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vm)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_m)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ym)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xm)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sm)return u===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nf||i===Mm||i===wm)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===nf)return u===Xt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cy||i===Em||i===Tm||i===Am)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===nf)return l.COMPRESSED_RED_RGTC1_EXT;if(i===Em)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Am)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ya?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}class QE extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bn extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e1={type:"move"};class Rf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,l=null,u=null;const f=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const E of e.hand.values()){const x=t.getJointPose(E,i),S=this._getHandJoint(h,E);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const m=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],_=m.position.distanceTo(d.position),y=.02,w=.005;h.inputState.pinching&&_>y+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=y-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(e1)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new bn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const t1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n1=`
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

}`;class i1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new On,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,o=new Br({vertexShader:t1,fragmentShader:n1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Oe(new Bi(20,20),o)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class r1 extends go{constructor(e,t){super();const i=this;let o=null,l=1,u=null,f="local-floor",p=1,h=null,m=null,d=null,_=null,y=null,w=null;const E=new i1,x=t.getContextAttributes();let S=null,C=null;const P=[],D=[],V=new Xe;let O=null;const F=new ei;F.layers.enable(1),F.viewport=new Kt;const q=new ei;q.layers.enable(2),q.viewport=new Kt;const U=[F,q],L=new QE;L.layers.enable(1),L.layers.enable(2);let ne=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ye=P[re];return ye===void 0&&(ye=new Rf,P[re]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(re){let ye=P[re];return ye===void 0&&(ye=new Rf,P[re]=ye),ye.getGripSpace()},this.getHand=function(re){let ye=P[re];return ye===void 0&&(ye=new Rf,P[re]=ye),ye.getHandSpace()};function j(re){const ye=D.indexOf(re.inputSource);if(ye===-1)return;const Re=P[ye];Re!==void 0&&(Re.update(re.inputSource,re.frame,h||u),Re.dispatchEvent({type:re.type,data:re.inputSource}))}function oe(){o.removeEventListener("select",j),o.removeEventListener("selectstart",j),o.removeEventListener("selectend",j),o.removeEventListener("squeeze",j),o.removeEventListener("squeezestart",j),o.removeEventListener("squeezeend",j),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",he);for(let re=0;re<P.length;re++){const ye=D[re];ye!==null&&(D[re]=null,P[re].disconnect(ye))}ne=null,ae=null,E.reset(),e.setRenderTarget(S),y=null,_=null,d=null,o=null,C=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){f=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(re){h=re},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return d},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(S=e.getRenderTarget(),o.addEventListener("select",j),o.addEventListener("selectstart",j),o.addEventListener("selectend",j),o.addEventListener("squeeze",j),o.addEventListener("squeezestart",j),o.addEventListener("squeezeend",j),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",he),x.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(V),o.renderState.layers===void 0){const ye={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,ye),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new vs(y.framebufferWidth,y.framebufferHeight,{format:Fi,type:zr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ye=null,Re=null,Ee=null;x.depth&&(Ee=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=x.stencil?ma:co,Re=x.stencil?ya:po);const $e={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:l};d=new XRWebGLBinding(o,t),_=d.createProjectionLayer($e),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new vs(_.textureWidth,_.textureHeight,{format:Fi,type:zr,depthTexture:new S0(_.textureWidth,_.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),h=null,u=await o.requestReferenceSpace(f),Ve.setContext(o),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function he(re){for(let ye=0;ye<re.removed.length;ye++){const Re=re.removed[ye],Ee=D.indexOf(Re);Ee>=0&&(D[Ee]=null,P[Ee].disconnect(Re))}for(let ye=0;ye<re.added.length;ye++){const Re=re.added[ye];let Ee=D.indexOf(Re);if(Ee===-1){for(let Ye=0;Ye<P.length;Ye++)if(Ye>=D.length){D.push(Re),Ee=Ye;break}else if(D[Ye]===null){D[Ye]=Re,Ee=Ye;break}if(Ee===-1)break}const $e=P[Ee];$e&&$e.connect(Re)}}const _e=new H,de=new H;function G(re,ye,Re){_e.setFromMatrixPosition(ye.matrixWorld),de.setFromMatrixPosition(Re.matrixWorld);const Ee=_e.distanceTo(de),$e=ye.projectionMatrix.elements,Ye=Re.projectionMatrix.elements,ee=$e[14]/($e[10]-1),Lt=$e[14]/($e[10]+1),it=($e[9]+1)/$e[5],ht=($e[9]-1)/$e[5],st=($e[8]-1)/$e[0],wt=(Ye[8]+1)/Ye[0],vt=ee*st,_t=ee*wt,Ot=Ee/(-st+wt),B=Ot*-st;ye.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(B),re.translateZ(Ot),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert();const N=ee+Ot,fe=Lt+Ot,xe=vt-B,Ce=_t+(Ee-B),Pe=it*Lt/fe*N,tt=ht*Lt/fe*N;re.projectionMatrix.makePerspective(xe,Ce,Pe,tt,N,fe),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}function ue(re,ye){ye===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ye.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;E.texture!==null&&(re.near=E.depthNear,re.far=E.depthFar),L.near=q.near=F.near=re.near,L.far=q.far=F.far=re.far,(ne!==L.near||ae!==L.far)&&(o.updateRenderState({depthNear:L.near,depthFar:L.far}),ne=L.near,ae=L.far,F.near=ne,F.far=ae,q.near=ne,q.far=ae,F.updateProjectionMatrix(),q.updateProjectionMatrix(),re.updateProjectionMatrix());const ye=re.parent,Re=L.cameras;ue(L,ye);for(let Ee=0;Ee<Re.length;Ee++)ue(Re[Ee],ye);Re.length===2?G(L,F,q):L.projectionMatrix.copy(F.projectionMatrix),te(re,L,ye)};function te(re,ye,Re){Re===null?re.matrix.copy(ye.matrixWorld):(re.matrix.copy(Re.matrixWorld),re.matrix.invert(),re.matrix.multiply(ye.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ye.projectionMatrix),re.projectionMatrixInverse.copy(ye.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=ga*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(_===null&&y===null))return p},this.setFoveation=function(re){p=re,_!==null&&(_.fixedFoveation=re),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=re)},this.hasDepthSensing=function(){return E.texture!==null};let z=null;function le(re,ye){if(m=ye.getViewerPose(h||u),w=ye,m!==null){const Re=m.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let Ee=!1;Re.length!==L.cameras.length&&(L.cameras.length=0,Ee=!0);for(let Ye=0;Ye<Re.length;Ye++){const ee=Re[Ye];let Lt=null;if(y!==null)Lt=y.getViewport(ee);else{const ht=d.getViewSubImage(_,ee);Lt=ht.viewport,Ye===0&&(e.setRenderTargetTextures(C,ht.colorTexture,_.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(C))}let it=U[Ye];it===void 0&&(it=new ei,it.layers.enable(Ye),it.viewport=new Kt,U[Ye]=it),it.matrix.fromArray(ee.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(ee.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Ye===0&&(L.matrix.copy(it.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ee===!0&&L.cameras.push(it)}const $e=o.enabledFeatures;if($e&&$e.includes("depth-sensing")){const Ye=d.getDepthInformation(Re[0]);Ye&&Ye.isValid&&Ye.texture&&E.init(e,Ye,o.renderState)}}for(let Re=0;Re<P.length;Re++){const Ee=D[Re],$e=P[Re];Ee!==null&&$e!==void 0&&$e.update(Ee,ye,h||u)}E.render(e,L),z&&z(re,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),w=null}const Ve=new y0;Ve.setAnimationLoop(le),this.setAnimationLoop=function(re){z=re},this.dispose=function(){}}}const ss=new zi,s1=new Jt;function o1(s,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function i(x,S){S.color.getRGB(x.fogColor.value,g0(s)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function o(x,S,C,P,D){S.isMeshBasicMaterial||S.isMeshLambertMaterial?l(x,S):S.isMeshToonMaterial?(l(x,S),d(x,S)):S.isMeshPhongMaterial?(l(x,S),m(x,S)):S.isMeshStandardMaterial?(l(x,S),_(x,S),S.isMeshPhysicalMaterial&&y(x,S,D)):S.isMeshMatcapMaterial?(l(x,S),w(x,S)):S.isMeshDepthMaterial?l(x,S):S.isMeshDistanceMaterial?(l(x,S),E(x,S)):S.isMeshNormalMaterial?l(x,S):S.isLineBasicMaterial?(u(x,S),S.isLineDashedMaterial&&f(x,S)):S.isPointsMaterial?p(x,S,C,P):S.isSpriteMaterial?h(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===$n&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===$n&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const C=e.get(S),P=C.envMap,D=C.envMapRotation;if(P&&(x.envMap.value=P,ss.copy(D),ss.x*=-1,ss.y*=-1,ss.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),x.envMapRotation.value.setFromMatrix4(s1.makeRotationFromEuler(ss)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap){x.lightMap.value=S.lightMap;const V=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=S.lightMapIntensity*V,t(S.lightMap,x.lightMapTransform)}S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function u(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function f(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function p(x,S,C,P){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*C,x.scale.value=P*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function h(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function m(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function d(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function _(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function y(x,S,C){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===$n&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,S){S.matcap&&(x.matcap.value=S.matcap)}function E(x,S){const C=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function a1(s,e,t,i){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,P){const D=P.program;i.uniformBlockBinding(C,D)}function h(C,P){let D=o[C.id];D===void 0&&(w(C),D=m(C),o[C.id]=D,C.addEventListener("dispose",x));const V=P.program;i.updateUBOMapping(C,V);const O=e.render.frame;l[C.id]!==O&&(_(C),l[C.id]=O)}function m(C){const P=d();C.__bindingPointIndex=P;const D=s.createBuffer(),V=C.__size,O=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,V,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,D),D}function d(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const P=o[C.id],D=C.uniforms,V=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let O=0,F=D.length;O<F;O++){const q=Array.isArray(D[O])?D[O]:[D[O]];for(let U=0,L=q.length;U<L;U++){const ne=q[U];if(y(ne,O,U,V)===!0){const ae=ne.__offset,j=Array.isArray(ne.value)?ne.value:[ne.value];let oe=0;for(let he=0;he<j.length;he++){const _e=j[he],de=E(_e);typeof _e=="number"||typeof _e=="boolean"?(ne.__data[0]=_e,s.bufferSubData(s.UNIFORM_BUFFER,ae+oe,ne.__data)):_e.isMatrix3?(ne.__data[0]=_e.elements[0],ne.__data[1]=_e.elements[1],ne.__data[2]=_e.elements[2],ne.__data[3]=0,ne.__data[4]=_e.elements[3],ne.__data[5]=_e.elements[4],ne.__data[6]=_e.elements[5],ne.__data[7]=0,ne.__data[8]=_e.elements[6],ne.__data[9]=_e.elements[7],ne.__data[10]=_e.elements[8],ne.__data[11]=0):(_e.toArray(ne.__data,oe),oe+=de.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,ne.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(C,P,D,V){const O=C.value,F=P+"_"+D;if(V[F]===void 0)return typeof O=="number"||typeof O=="boolean"?V[F]=O:V[F]=O.clone(),!0;{const q=V[F];if(typeof O=="number"||typeof O=="boolean"){if(q!==O)return V[F]=O,!0}else if(q.equals(O)===!1)return q.copy(O),!0}return!1}function w(C){const P=C.uniforms;let D=0;const V=16;for(let F=0,q=P.length;F<q;F++){const U=Array.isArray(P[F])?P[F]:[P[F]];for(let L=0,ne=U.length;L<ne;L++){const ae=U[L],j=Array.isArray(ae.value)?ae.value:[ae.value];for(let oe=0,he=j.length;oe<he;oe++){const _e=j[oe],de=E(_e),G=D%V;G!==0&&V-G<de.boundary&&(D+=V-G),ae.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=D,D+=de.storage}}}const O=D%V;return O>0&&(D+=V-O),C.__size=D,C.__cache={},this}function E(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),P}function x(C){const P=C.target;P.removeEventListener("dispose",x);const D=u.indexOf(P.__bindingPointIndex);u.splice(D,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function S(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:p,update:h,dispose:S}}class l1{constructor(e={}){const{canvas:t=ex(),context:i=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=u;const y=new Uint32Array(4),w=new Int32Array(4);let E=null,x=null;const S=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ni,this._useLegacyLights=!1,this.toneMapping=Fr,this.toneMappingExposure=1;const P=this;let D=!1,V=0,O=0,F=null,q=-1,U=null;const L=new Kt,ne=new Kt;let ae=null;const j=new Ct(0);let oe=0,he=t.width,_e=t.height,de=1,G=null,ue=null;const te=new Kt(0,0,he,_e),z=new Kt(0,0,he,_e);let le=!1;const Ve=new lh;let re=!1,ye=!1;const Re=new Jt,Ee=new H,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return F===null?de:1}let ee=i;function Lt(b,$){return t.getContext(b,$)}try{const b={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ih}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",ge,!1),ee===null){const $="webgl2";if(ee=Lt($,b),ee===null)throw Lt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let it,ht,st,wt,vt,_t,Ot,B,N,fe,xe,Ce,Pe,tt,Fe,ke,dt,Ne,Ke,xt,ot,We,ut,Et;function zt(){it=new gw(ee),it.init(),We=new ZE(ee,it),ht=new uw(ee,it,e,We),st=new KE(ee),wt=new yw(ee),vt=new OE,_t=new JE(ee,it,st,vt,ht,We,wt),Ot=new hw(P),B=new mw(P),N=new Ax(ee),ut=new lw(ee,N),fe=new vw(ee,N,wt,ut),xe=new Sw(ee,fe,N,wt),Ke=new xw(ee,ht,_t),ke=new fw(vt),Ce=new UE(P,Ot,B,it,ht,ut,ke),Pe=new o1(P,vt),tt=new kE,Fe=new WE(it),Ne=new aw(P,Ot,B,st,xe,_,p),dt=new YE(P,xe,ht),Et=new a1(ee,wt,ht,st),xt=new cw(ee,it,wt),ot=new _w(ee,it,wt),wt.programs=Ce.programs,P.capabilities=ht,P.extensions=it,P.properties=vt,P.renderLists=tt,P.shadowMap=dt,P.state=st,P.info=wt}zt();const pt=new r1(P,ee);this.xr=pt,this.getContext=function(){return ee},this.getContextAttributes=function(){return ee.getContextAttributes()},this.forceContextLoss=function(){const b=it.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=it.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(b){b!==void 0&&(de=b,this.setSize(he,_e,!1))},this.getSize=function(b){return b.set(he,_e)},this.setSize=function(b,$,Q=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}he=b,_e=$,t.width=Math.floor(b*de),t.height=Math.floor($*de),Q===!0&&(t.style.width=b+"px",t.style.height=$+"px"),this.setViewport(0,0,b,$)},this.getDrawingBufferSize=function(b){return b.set(he*de,_e*de).floor()},this.setDrawingBufferSize=function(b,$,Q){he=b,_e=$,de=Q,t.width=Math.floor(b*Q),t.height=Math.floor($*Q),this.setViewport(0,0,b,$)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(te)},this.setViewport=function(b,$,Q,X){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,$,Q,X),st.viewport(L.copy(te).multiplyScalar(de).round())},this.getScissor=function(b){return b.copy(z)},this.setScissor=function(b,$,Q,X){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,$,Q,X),st.scissor(ne.copy(z).multiplyScalar(de).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(b){st.setScissorTest(le=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){ue=b},this.getClearColor=function(b){return b.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(b=!0,$=!0,Q=!0){let X=0;if(b){let K=!1;if(F!==null){const pe=F.texture.format;K=pe===o0||pe===s0||pe===r0}if(K){const pe=F.texture.type,Ae=pe===zr||pe===po||pe===e0||pe===ya||pe===n0||pe===i0,Me=Ne.getClearColor(),De=Ne.getClearAlpha(),me=Me.r,be=Me.g,rt=Me.b;Ae?(y[0]=me,y[1]=be,y[2]=rt,y[3]=De,ee.clearBufferuiv(ee.COLOR,0,y)):(w[0]=me,w[1]=be,w[2]=rt,w[3]=De,ee.clearBufferiv(ee.COLOR,0,w))}else X|=ee.COLOR_BUFFER_BIT}$&&(X|=ee.DEPTH_BUFFER_BIT),Q&&(X|=ee.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),tt.dispose(),Fe.dispose(),vt.dispose(),Ot.dispose(),B.dispose(),xe.dispose(),ut.dispose(),Et.dispose(),Ce.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Rt),pt.removeEventListener("sessionend",Bt),on.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const b=wt.autoReset,$=dt.enabled,Q=dt.autoUpdate,X=dt.needsUpdate,K=dt.type;zt(),wt.autoReset=b,dt.enabled=$,dt.autoUpdate=Q,dt.needsUpdate=X,dt.type=K}function ge(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ue(b){const $=b.target;$.removeEventListener("dispose",Ue),ze($)}function ze(b){Tt(b),vt.remove(b)}function Tt(b){const $=vt.get(b).programs;$!==void 0&&($.forEach(function(Q){Ce.releaseProgram(Q)}),b.isShaderMaterial&&Ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,$,Q,X,K,pe){$===null&&($=$e);const Ae=K.isMesh&&K.matrixWorld.determinant()<0,Me=Z(b,$,Q,X,K);st.setMaterial(X,Ae);let De=Q.index,me=1;if(X.wireframe===!0){if(De=fe.getWireframeAttribute(Q),De===void 0)return;me=2}const be=Q.drawRange,rt=Q.attributes.position;let mt=be.start*me,nt=(be.start+be.count)*me;pe!==null&&(mt=Math.max(mt,pe.start*me),nt=Math.min(nt,(pe.start+pe.count)*me)),De!==null?(mt=Math.max(mt,0),nt=Math.min(nt,De.count)):rt!=null&&(mt=Math.max(mt,0),nt=Math.min(nt,rt.count));const at=nt-mt;if(at<0||at===1/0)return;ut.setup(K,X,Me,Q,De);let an,yt=xt;if(De!==null&&(an=N.get(De),yt=ot,yt.setIndex(an)),K.isMesh)X.wireframe===!0?(st.setLineWidth(X.wireframeLinewidth*Ye()),yt.setMode(ee.LINES)):yt.setMode(ee.TRIANGLES);else if(K.isLine){let et=X.linewidth;et===void 0&&(et=1),st.setLineWidth(et*Ye()),K.isLineSegments?yt.setMode(ee.LINES):K.isLineLoop?yt.setMode(ee.LINE_LOOP):yt.setMode(ee.LINE_STRIP)}else K.isPoints?yt.setMode(ee.POINTS):K.isSprite&&yt.setMode(ee.TRIANGLES);if(K.isBatchedMesh)K._multiDrawInstances!==null?yt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances):yt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)yt.renderInstances(mt,at,K.count);else if(Q.isInstancedBufferGeometry){const et=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Pt=Math.min(Q.instanceCount,et);yt.renderInstances(mt,at,Pt)}else yt.render(mt,at)};function It(b,$,Q){b.transparent===!0&&b.side===sr&&b.forceSinglePass===!1?(b.side=$n,b.needsUpdate=!0,v(b,$,Q),b.side=kr,b.needsUpdate=!0,v(b,$,Q),b.side=sr):v(b,$,Q)}this.compile=function(b,$,Q=null){Q===null&&(Q=b),x=Fe.get(Q),x.init($),C.push(x),Q.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),b!==Q&&b.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights(P._useLegacyLights);const X=new Set;return b.traverse(function(K){const pe=K.material;if(pe)if(Array.isArray(pe))for(let Ae=0;Ae<pe.length;Ae++){const Me=pe[Ae];It(Me,Q,K),X.add(Me)}else It(pe,Q,K),X.add(pe)}),C.pop(),x=null,X},this.compileAsync=function(b,$,Q=null){const X=this.compile(b,$,Q);return new Promise(K=>{function pe(){if(X.forEach(function(Ae){vt.get(Ae).currentProgram.isReady()&&X.delete(Ae)}),X.size===0){K(b);return}setTimeout(pe,10)}it.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Ft=null;function rn(b){Ft&&Ft(b)}function Rt(){on.stop()}function Bt(){on.start()}const on=new y0;on.setAnimationLoop(rn),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(b){Ft=b,pt.setAnimationLoop(b),b===null?on.stop():on.start()},pt.addEventListener("sessionstart",Rt),pt.addEventListener("sessionend",Bt),this.render=function(b,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera($),$=pt.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,$,F),x=Fe.get(b,C.length),x.init($),C.push(x),Re.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Ve.setFromProjectionMatrix(Re),ye=this.localClippingEnabled,re=ke.init(this.clippingPlanes,ye),E=tt.get(b,S.length),E.init(),S.push(E),wn(b,$,0,P.sortObjects),E.finish(),P.sortObjects===!0&&E.sort(G,ue);const Q=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1;Q&&Ne.addToRenderList(E,b),this.info.render.frame++,re===!0&&ke.beginShadows();const X=x.state.shadowsArray;dt.render(X,b,$),re===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=E.opaque,pe=E.transmissive;if(x.setupLights(P._useLegacyLights),$.isArrayCamera){const Ae=$.cameras;if(pe.length>0)for(let Me=0,De=Ae.length;Me<De;Me++){const me=Ae[Me];ri(K,pe,b,me)}Q&&Ne.render(b);for(let Me=0,De=Ae.length;Me<De;Me++){const me=Ae[Me];Pi(E,b,me,me.viewport)}}else pe.length>0&&ri(K,pe,b,$),Q&&Ne.render(b),Pi(E,b,$);F!==null&&(_t.updateMultisampleRenderTarget(F),_t.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(P,b,$),ut.resetDefaultState(),q=-1,U=null,C.pop(),C.length>0?(x=C[C.length-1],re===!0&&ke.setGlobalState(P.clippingPlanes,x.state.camera)):x=null,S.pop(),S.length>0?E=S[S.length-1]:E=null};function wn(b,$,Q,X){if(b.visible===!1)return;if(b.layers.test($.layers)){if(b.isGroup)Q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update($);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ve.intersectsSprite(b)){X&&Ee.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Re);const Ae=xe.update(b),Me=b.material;Me.visible&&E.push(b,Ae,Me,Q,Ee.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ve.intersectsObject(b))){const Ae=xe.update(b),Me=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ee.copy(b.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ee.copy(Ae.boundingSphere.center)),Ee.applyMatrix4(b.matrixWorld).applyMatrix4(Re)),Array.isArray(Me)){const De=Ae.groups;for(let me=0,be=De.length;me<be;me++){const rt=De[me],mt=Me[rt.materialIndex];mt&&mt.visible&&E.push(b,Ae,mt,Q,Ee.z,rt)}}else Me.visible&&E.push(b,Ae,Me,Q,Ee.z,null)}}const pe=b.children;for(let Ae=0,Me=pe.length;Ae<Me;Ae++)wn(pe[Ae],$,Q,X)}function Pi(b,$,Q,X){const K=b.opaque,pe=b.transmissive,Ae=b.transparent;x.setupLightsView(Q),re===!0&&ke.setGlobalState(P.clippingPlanes,Q),X&&st.viewport(L.copy(X)),K.length>0&&lr(K,$,Q),pe.length>0&&lr(pe,$,Q),Ae.length>0&&lr(Ae,$,Q),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function ri(b,$,Q,X){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[X.id]===void 0&&(x.state.transmissionRenderTarget[X.id]=new vs(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?lc:zr,minFilter:gs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const pe=x.state.transmissionRenderTarget[X.id],Ae=X.viewport||L;pe.setSize(Ae.z,Ae.w);const Me=P.getRenderTarget();P.setRenderTarget(pe),P.getClearColor(j),oe=P.getClearAlpha(),oe<1&&P.setClearColor(16777215,.5),P.clear();const De=P.toneMapping;P.toneMapping=Fr;const me=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),x.setupLightsView(X),re===!0&&ke.setGlobalState(P.clippingPlanes,X),lr(b,Q,X),_t.updateMultisampleRenderTarget(pe),_t.updateRenderTargetMipmap(pe),it.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let rt=0,mt=$.length;rt<mt;rt++){const nt=$[rt],at=nt.object,an=nt.geometry,yt=nt.material,et=nt.group;if(yt.side===sr&&at.layers.test(X.layers)){const Pt=yt.side;yt.side=$n,yt.needsUpdate=!0,T(at,Q,X,an,yt,et),yt.side=Pt,yt.needsUpdate=!0,be=!0}}be===!0&&(_t.updateMultisampleRenderTarget(pe),_t.updateRenderTargetMipmap(pe))}P.setRenderTarget(Me),P.setClearColor(j,oe),me!==void 0&&(X.viewport=me),P.toneMapping=De}function lr(b,$,Q){const X=$.isScene===!0?$.overrideMaterial:null;for(let K=0,pe=b.length;K<pe;K++){const Ae=b[K],Me=Ae.object,De=Ae.geometry,me=X===null?Ae.material:X,be=Ae.group;Me.layers.test(Q.layers)&&T(Me,$,Q,De,me,be)}}function T(b,$,Q,X,K,pe){b.onBeforeRender(P,$,Q,X,K,pe),b.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),K.onBeforeRender(P,$,Q,X,b,pe),K.transparent===!0&&K.side===sr&&K.forceSinglePass===!1?(K.side=$n,K.needsUpdate=!0,P.renderBufferDirect(Q,$,X,K,b,pe),K.side=kr,K.needsUpdate=!0,P.renderBufferDirect(Q,$,X,K,b,pe),K.side=sr):P.renderBufferDirect(Q,$,X,K,b,pe),b.onAfterRender(P,$,Q,X,K,pe)}function v(b,$,Q){$.isScene!==!0&&($=$e);const X=vt.get(b),K=x.state.lights,pe=x.state.shadowsArray,Ae=K.state.version,Me=Ce.getParameters(b,K.state,pe,$,Q),De=Ce.getProgramCacheKey(Me);let me=X.programs;X.environment=b.isMeshStandardMaterial?$.environment:null,X.fog=$.fog,X.envMap=(b.isMeshStandardMaterial?B:Ot).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?$.environmentRotation:b.envMapRotation,me===void 0&&(b.addEventListener("dispose",Ue),me=new Map,X.programs=me);let be=me.get(De);if(be!==void 0){if(X.currentProgram===be&&X.lightsStateVersion===Ae)return I(b,Me),be}else Me.uniforms=Ce.getUniforms(b),b.onBuild(Q,Me,P),b.onBeforeCompile(Me,P),be=Ce.acquireProgram(Me,De),me.set(De,be),X.uniforms=Me.uniforms;const rt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(rt.clippingPlanes=ke.uniform),I(b,Me),X.needsLights=Qe(b),X.lightsStateVersion=Ae,X.needsLights&&(rt.ambientLightColor.value=K.state.ambient,rt.lightProbe.value=K.state.probe,rt.directionalLights.value=K.state.directional,rt.directionalLightShadows.value=K.state.directionalShadow,rt.spotLights.value=K.state.spot,rt.spotLightShadows.value=K.state.spotShadow,rt.rectAreaLights.value=K.state.rectArea,rt.ltc_1.value=K.state.rectAreaLTC1,rt.ltc_2.value=K.state.rectAreaLTC2,rt.pointLights.value=K.state.point,rt.pointLightShadows.value=K.state.pointShadow,rt.hemisphereLights.value=K.state.hemi,rt.directionalShadowMap.value=K.state.directionalShadowMap,rt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,rt.spotShadowMap.value=K.state.spotShadowMap,rt.spotLightMatrix.value=K.state.spotLightMatrix,rt.spotLightMap.value=K.state.spotLightMap,rt.pointShadowMap.value=K.state.pointShadowMap,rt.pointShadowMatrix.value=K.state.pointShadowMatrix),X.currentProgram=be,X.uniformsList=null,be}function A(b){if(b.uniformsList===null){const $=b.currentProgram.getUniforms();b.uniformsList=tc.seqWithValue($.seq,b.uniforms)}return b.uniformsList}function I(b,$){const Q=vt.get(b);Q.outputColorSpace=$.outputColorSpace,Q.batching=$.batching,Q.instancing=$.instancing,Q.instancingColor=$.instancingColor,Q.instancingMorph=$.instancingMorph,Q.skinning=$.skinning,Q.morphTargets=$.morphTargets,Q.morphNormals=$.morphNormals,Q.morphColors=$.morphColors,Q.morphTargetsCount=$.morphTargetsCount,Q.numClippingPlanes=$.numClippingPlanes,Q.numIntersection=$.numClipIntersection,Q.vertexAlphas=$.vertexAlphas,Q.vertexTangents=$.vertexTangents,Q.toneMapping=$.toneMapping}function Z(b,$,Q,X,K){$.isScene!==!0&&($=$e),_t.resetTextureUnits();const pe=$.fog,Ae=X.isMeshStandardMaterial?$.environment:null,Me=F===null?P.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Hr,De=(X.isMeshStandardMaterial?B:Ot).get(X.envMap||Ae),me=X.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,be=!!Q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),rt=!!Q.morphAttributes.position,mt=!!Q.morphAttributes.normal,nt=!!Q.morphAttributes.color;let at=Fr;X.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(at=P.toneMapping);const an=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,yt=an!==void 0?an.length:0,et=vt.get(X),Pt=x.state.lights;if(re===!0&&(ye===!0||b!==U)){const xn=b===U&&X.id===q;ke.setState(X,b,xn)}let gt=!1;X.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Pt.state.version||et.outputColorSpace!==Me||K.isBatchedMesh&&et.batching===!1||!K.isBatchedMesh&&et.batching===!0||K.isInstancedMesh&&et.instancing===!1||!K.isInstancedMesh&&et.instancing===!0||K.isSkinnedMesh&&et.skinning===!1||!K.isSkinnedMesh&&et.skinning===!0||K.isInstancedMesh&&et.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&et.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&et.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&et.instancingMorph===!1&&K.morphTexture!==null||et.envMap!==De||X.fog===!0&&et.fog!==pe||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ke.numPlanes||et.numIntersection!==ke.numIntersection)||et.vertexAlphas!==me||et.vertexTangents!==be||et.morphTargets!==rt||et.morphNormals!==mt||et.morphColors!==nt||et.toneMapping!==at||et.morphTargetsCount!==yt)&&(gt=!0):(gt=!0,et.__version=X.version);let jt=et.currentProgram;gt===!0&&(jt=v(X,$,K));let Fn=!1,pi=!1,kn=!1;const Ht=jt.getUniforms(),Xn=et.uniforms;if(st.useProgram(jt.program)&&(Fn=!0,pi=!0,kn=!0),X.id!==q&&(q=X.id,pi=!0),Fn||U!==b){Ht.setValue(ee,"projectionMatrix",b.projectionMatrix),Ht.setValue(ee,"viewMatrix",b.matrixWorldInverse);const xn=Ht.map.cameraPosition;xn!==void 0&&xn.setValue(ee,Ee.setFromMatrixPosition(b.matrixWorld)),ht.logarithmicDepthBuffer&&Ht.setValue(ee,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ht.setValue(ee,"isOrthographic",b.isOrthographicCamera===!0),U!==b&&(U=b,pi=!0,kn=!0)}if(K.isSkinnedMesh){Ht.setOptional(ee,K,"bindMatrix"),Ht.setOptional(ee,K,"bindMatrixInverse");const xn=K.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Ht.setValue(ee,"boneTexture",xn.boneTexture,_t))}K.isBatchedMesh&&(Ht.setOptional(ee,K,"batchingTexture"),Ht.setValue(ee,"batchingTexture",K._matricesTexture,_t));const Vi=Q.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&Ke.update(K,Q,jt),(pi||et.receiveShadow!==K.receiveShadow)&&(et.receiveShadow=K.receiveShadow,Ht.setValue(ee,"receiveShadow",K.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Xn.envMap.value=De,Xn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&$.environment!==null&&(Xn.envMapIntensity.value=$.environmentIntensity),pi&&(Ht.setValue(ee,"toneMappingExposure",P.toneMappingExposure),et.needsLights&&ve(Xn,kn),pe&&X.fog===!0&&Pe.refreshFogUniforms(Xn,pe),Pe.refreshMaterialUniforms(Xn,X,de,_e,x.state.transmissionRenderTarget[b.id]),tc.upload(ee,A(et),Xn,_t)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(tc.upload(ee,A(et),Xn,_t),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ht.setValue(ee,"center",K.center),Ht.setValue(ee,"modelViewMatrix",K.modelViewMatrix),Ht.setValue(ee,"normalMatrix",K.normalMatrix),Ht.setValue(ee,"modelMatrix",K.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const xn=X.uniformsGroups;for(let yo=0,dc=xn.length;yo<dc;yo++){const _s=xn[yo];Et.update(_s,jt),Et.bind(_s,jt)}}return jt}function ve(b,$){b.ambientLightColor.needsUpdate=$,b.lightProbe.needsUpdate=$,b.directionalLights.needsUpdate=$,b.directionalLightShadows.needsUpdate=$,b.pointLights.needsUpdate=$,b.pointLightShadows.needsUpdate=$,b.spotLights.needsUpdate=$,b.spotLightShadows.needsUpdate=$,b.rectAreaLights.needsUpdate=$,b.hemisphereLights.needsUpdate=$}function Qe(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,$,Q){vt.get(b.texture).__webglTexture=$,vt.get(b.depthTexture).__webglTexture=Q;const X=vt.get(b);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=Q===void 0,X.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,$){const Q=vt.get(b);Q.__webglFramebuffer=$,Q.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(b,$=0,Q=0){F=b,V=$,O=Q;let X=!0,K=null,pe=!1,Ae=!1;if(b){const De=vt.get(b);De.__useDefaultFramebuffer!==void 0?(st.bindFramebuffer(ee.FRAMEBUFFER,null),X=!1):De.__webglFramebuffer===void 0?_t.setupRenderTarget(b):De.__hasExternalTextures&&_t.rebindTextures(b,vt.get(b.texture).__webglTexture,vt.get(b.depthTexture).__webglTexture);const me=b.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(Ae=!0);const be=vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(be[$])?K=be[$][Q]:K=be[$],pe=!0):b.samples>0&&_t.useMultisampledRTT(b)===!1?K=vt.get(b).__webglMultisampledFramebuffer:Array.isArray(be)?K=be[Q]:K=be,L.copy(b.viewport),ne.copy(b.scissor),ae=b.scissorTest}else L.copy(te).multiplyScalar(de).floor(),ne.copy(z).multiplyScalar(de).floor(),ae=le;if(st.bindFramebuffer(ee.FRAMEBUFFER,K)&&X&&st.drawBuffers(b,K),st.viewport(L),st.scissor(ne),st.setScissorTest(ae),pe){const De=vt.get(b.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_CUBE_MAP_POSITIVE_X+$,De.__webglTexture,Q)}else if(Ae){const De=vt.get(b.texture),me=$||0;ee.framebufferTextureLayer(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,De.__webglTexture,Q||0,me)}q=-1},this.readRenderTargetPixels=function(b,$,Q,X,K,pe,Ae){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Me=Me[Ae]),Me){st.bindFramebuffer(ee.FRAMEBUFFER,Me);try{const De=b.texture,me=De.format,be=De.type;if(!ht.textureFormatReadable(me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=b.width-X&&Q>=0&&Q<=b.height-K&&ee.readPixels($,Q,X,K,We.convert(me),We.convert(be),pe)}finally{const De=F!==null?vt.get(F).__webglFramebuffer:null;st.bindFramebuffer(ee.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(b,$,Q=0){const X=Math.pow(2,-Q),K=Math.floor($.image.width*X),pe=Math.floor($.image.height*X);_t.setTexture2D($,0),ee.copyTexSubImage2D(ee.TEXTURE_2D,Q,0,0,b.x,b.y,K,pe),st.unbindTexture()},this.copyTextureToTexture=function(b,$,Q,X=0){const K=$.image.width,pe=$.image.height,Ae=We.convert(Q.format),Me=We.convert(Q.type);_t.setTexture2D(Q,0),ee.pixelStorei(ee.UNPACK_FLIP_Y_WEBGL,Q.flipY),ee.pixelStorei(ee.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),ee.pixelStorei(ee.UNPACK_ALIGNMENT,Q.unpackAlignment),$.isDataTexture?ee.texSubImage2D(ee.TEXTURE_2D,X,b.x,b.y,K,pe,Ae,Me,$.image.data):$.isCompressedTexture?ee.compressedTexSubImage2D(ee.TEXTURE_2D,X,b.x,b.y,$.mipmaps[0].width,$.mipmaps[0].height,Ae,$.mipmaps[0].data):ee.texSubImage2D(ee.TEXTURE_2D,X,b.x,b.y,Ae,Me,$.image),X===0&&Q.generateMipmaps&&ee.generateMipmap(ee.TEXTURE_2D),st.unbindTexture()},this.copyTextureToTexture3D=function(b,$,Q,X,K=0){const pe=b.max.x-b.min.x,Ae=b.max.y-b.min.y,Me=b.max.z-b.min.z,De=We.convert(X.format),me=We.convert(X.type);let be;if(X.isData3DTexture)_t.setTexture3D(X,0),be=ee.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)_t.setTexture2DArray(X,0),be=ee.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ee.pixelStorei(ee.UNPACK_FLIP_Y_WEBGL,X.flipY),ee.pixelStorei(ee.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),ee.pixelStorei(ee.UNPACK_ALIGNMENT,X.unpackAlignment);const rt=ee.getParameter(ee.UNPACK_ROW_LENGTH),mt=ee.getParameter(ee.UNPACK_IMAGE_HEIGHT),nt=ee.getParameter(ee.UNPACK_SKIP_PIXELS),at=ee.getParameter(ee.UNPACK_SKIP_ROWS),an=ee.getParameter(ee.UNPACK_SKIP_IMAGES),yt=Q.isCompressedTexture?Q.mipmaps[K]:Q.image;ee.pixelStorei(ee.UNPACK_ROW_LENGTH,yt.width),ee.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,yt.height),ee.pixelStorei(ee.UNPACK_SKIP_PIXELS,b.min.x),ee.pixelStorei(ee.UNPACK_SKIP_ROWS,b.min.y),ee.pixelStorei(ee.UNPACK_SKIP_IMAGES,b.min.z),Q.isDataTexture||Q.isData3DTexture?ee.texSubImage3D(be,K,$.x,$.y,$.z,pe,Ae,Me,De,me,yt.data):X.isCompressedArrayTexture?ee.compressedTexSubImage3D(be,K,$.x,$.y,$.z,pe,Ae,Me,De,yt.data):ee.texSubImage3D(be,K,$.x,$.y,$.z,pe,Ae,Me,De,me,yt),ee.pixelStorei(ee.UNPACK_ROW_LENGTH,rt),ee.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,mt),ee.pixelStorei(ee.UNPACK_SKIP_PIXELS,nt),ee.pixelStorei(ee.UNPACK_SKIP_ROWS,at),ee.pixelStorei(ee.UNPACK_SKIP_IMAGES,an),K===0&&X.generateMipmaps&&ee.generateMipmap(be),st.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?_t.setTextureCube(b,0):b.isData3DTexture?_t.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?_t.setTexture2DArray(b,0):_t.setTexture2D(b,0),st.unbindTexture()},this.resetState=function(){V=0,O=0,F=null,st.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===rh?"display-p3":"srgb",t.unpackColorSpace=kt.workingColorSpace===uc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class uh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ct(e),this.density=t}clone(){return new uh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class c1 extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Hi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)i=this.getPoint(u/e),l+=i.distanceTo(o),t.push(l),o=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let o=0;const l=i.length;let u;t?u=t:u=e*i[l-1];let f=0,p=l-1,h;for(;f<=p;)if(o=Math.floor(f+(p-f)/2),h=i[o]-u,h<0)f=o+1;else if(h>0)p=o-1;else{p=o;break}if(o=p,i[o]===u)return o/(l-1);const m=i[o],_=i[o+1]-m,y=(u-m)/_;return(o+y)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),p=t||(u.isVector2?new Xe:new H);return p.copy(f).sub(u).normalize(),p}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new H,o=[],l=[],u=[],f=new H,p=new Jt;for(let y=0;y<=e;y++){const w=y/e;o[y]=this.getTangentAt(w,new H)}l[0]=new H,u[0]=new H;let h=Number.MAX_VALUE;const m=Math.abs(o[0].x),d=Math.abs(o[0].y),_=Math.abs(o[0].z);m<=h&&(h=m,i.set(1,0,0)),d<=h&&(h=d,i.set(0,1,0)),_<=h&&i.set(0,0,1),f.crossVectors(o[0],i).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),u[y]=u[y-1].clone(),f.crossVectors(o[y-1],o[y]),f.length()>Number.EPSILON){f.normalize();const w=Math.acos(yn(o[y-1].dot(o[y]),-1,1));l[y].applyMatrix4(p.makeRotationAxis(f,w))}u[y].crossVectors(o[y],l[y])}if(t===!0){let y=Math.acos(yn(l[0].dot(l[e]),-1,1));y/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(y=-y);for(let w=1;w<=e;w++)l[w].applyMatrix4(p.makeRotationAxis(o[w],y*w)),u[w].crossVectors(o[w],l[w])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class fh extends Hi{constructor(e=0,t=0,i=1,o=1,l=0,u=Math.PI*2,f=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=p}getPoint(e,t=new Xe){const i=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let p=this.aX+this.xRadius*Math.cos(f),h=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const m=Math.cos(this.aRotation),d=Math.sin(this.aRotation),_=p-this.aX,y=h-this.aY;p=_*m-y*d+this.aX,h=_*d+y*m+this.aY}return i.set(p,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class u1 extends fh{constructor(e,t,i,o,l,u){super(e,t,i,i,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function hh(){let s=0,e=0,t=0,i=0;function o(l,u,f,p){s=l,e=f,t=-3*l+3*u-2*f-p,i=2*l-2*u+f+p}return{initCatmullRom:function(l,u,f,p,h){o(u,f,h*(f-l),h*(p-u))},initNonuniformCatmullRom:function(l,u,f,p,h,m,d){let _=(u-l)/h-(f-l)/(h+m)+(f-u)/m,y=(f-u)/m-(p-u)/(m+d)+(p-f)/d;_*=m,y*=m,o(u,f,_,y)},calc:function(l){const u=l*l,f=u*l;return s+e*l+t*u+i*f}}}const ql=new H,Pf=new hh,bf=new hh,Lf=new hh;class f1 extends Hi{constructor(e=[],t=!1,i="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=o}getPoint(e,t=new H){const i=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),p=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:p===0&&f===l-1&&(f=l-2,p=1);let h,m;this.closed||f>0?h=o[(f-1)%l]:(ql.subVectors(o[0],o[1]).add(o[0]),h=ql);const d=o[f%l],_=o[(f+1)%l];if(this.closed||f+2<l?m=o[(f+2)%l]:(ql.subVectors(o[l-1],o[l-2]).add(o[l-1]),m=ql),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let w=Math.pow(h.distanceToSquared(d),y),E=Math.pow(d.distanceToSquared(_),y),x=Math.pow(_.distanceToSquared(m),y);E<1e-4&&(E=1),w<1e-4&&(w=E),x<1e-4&&(x=E),Pf.initNonuniformCatmullRom(h.x,d.x,_.x,m.x,w,E,x),bf.initNonuniformCatmullRom(h.y,d.y,_.y,m.y,w,E,x),Lf.initNonuniformCatmullRom(h.z,d.z,_.z,m.z,w,E,x)}else this.curveType==="catmullrom"&&(Pf.initCatmullRom(h.x,d.x,_.x,m.x,this.tension),bf.initCatmullRom(h.y,d.y,_.y,m.y,this.tension),Lf.initCatmullRom(h.z,d.z,_.z,m.z,this.tension));return i.set(Pf.calc(p),bf.calc(p),Lf.calc(p)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(new H().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _g(s,e,t,i,o){const l=(i-e)*.5,u=(o-t)*.5,f=s*s,p=s*f;return(2*t-2*i+l+u)*p+(-3*t+3*i-2*l-u)*f+l*s+t}function h1(s,e){const t=1-s;return t*t*e}function d1(s,e){return 2*(1-s)*s*e}function p1(s,e){return s*s*e}function da(s,e,t,i){return h1(s,e)+d1(s,t)+p1(s,i)}function m1(s,e){const t=1-s;return t*t*t*e}function g1(s,e){const t=1-s;return 3*t*t*s*e}function v1(s,e){return 3*(1-s)*s*s*e}function _1(s,e){return s*s*s*e}function pa(s,e,t,i,o){return m1(s,e)+g1(s,t)+v1(s,i)+_1(s,o)}class C0 extends Hi{constructor(e=new Xe,t=new Xe,i=new Xe,o=new Xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=o}getPoint(e,t=new Xe){const i=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return i.set(pa(e,o.x,l.x,u.x,f.x),pa(e,o.y,l.y,u.y,f.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class y1 extends Hi{constructor(e=new H,t=new H,i=new H,o=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=o}getPoint(e,t=new H){const i=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return i.set(pa(e,o.x,l.x,u.x,f.x),pa(e,o.y,l.y,u.y,f.y),pa(e,o.z,l.z,u.z,f.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class R0 extends Hi{constructor(e=new Xe,t=new Xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Xe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class x1 extends Hi{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class P0 extends Hi{constructor(e=new Xe,t=new Xe,i=new Xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Xe){const i=t,o=this.v0,l=this.v1,u=this.v2;return i.set(da(e,o.x,l.x,u.x),da(e,o.y,l.y,u.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class S1 extends Hi{constructor(e=new H,t=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new H){const i=t,o=this.v0,l=this.v1,u=this.v2;return i.set(da(e,o.x,l.x,u.x),da(e,o.y,l.y,u.y),da(e,o.z,l.z,u.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class b0 extends Hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Xe){const i=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),f=l-u,p=o[u===0?u:u-1],h=o[u],m=o[u>o.length-2?o.length-1:u+1],d=o[u>o.length-3?o.length-1:u+2];return i.set(_g(f,p.x,h.x,m.x,d.x),_g(f,p.y,h.y,m.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(new Xe().fromArray(o))}return this}}var yg=Object.freeze({__proto__:null,ArcCurve:u1,CatmullRomCurve3:f1,CubicBezierCurve:C0,CubicBezierCurve3:y1,EllipseCurve:fh,LineCurve:R0,LineCurve3:x1,QuadraticBezierCurve:P0,QuadraticBezierCurve3:S1,SplineCurve:b0});class M1 extends Hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yg[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=i){const u=o[l]-i,f=this.curves[l],p=f.getLength(),h=p===0?0:1-u/p;return f.getPointAt(h,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,o=this.curves.length;i<o;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let o=0,l=this.curves;o<l.length;o++){const u=l[o],f=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,p=u.getPoints(f);for(let h=0;h<p.length;h++){const m=p[h];i&&i.equals(m)||(t.push(m),i=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const o=e.curves[t];this.curves.push(new yg[o.type]().fromJSON(o))}return this}}class w1 extends M1{constructor(e){super(),this.type="Path",this.currentPoint=new Xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new R0(this.currentPoint.clone(),new Xe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,o){const l=new P0(this.currentPoint.clone(),new Xe(e,t),new Xe(i,o));return this.curves.push(l),this.currentPoint.set(i,o),this}bezierCurveTo(e,t,i,o,l,u){const f=new C0(this.currentPoint.clone(),new Xe(e,t),new Xe(i,o),new Xe(l,u));return this.curves.push(f),this.currentPoint.set(l,u),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new b0(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,o,l,u){const f=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(e+f,t+p,i,o,l,u),this}absarc(e,t,i,o,l,u){return this.absellipse(e,t,i,i,o,l,u),this}ellipse(e,t,i,o,l,u,f,p){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+h,t+m,i,o,l,u,f,p),this}absellipse(e,t,i,o,l,u,f,p){const h=new fh(e,t,i,o,l,u,f,p);if(this.curves.length>0){const d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);const m=h.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class dh extends ii{constructor(e=[new Xe(0,-.5),new Xe(.5,0),new Xe(0,.5)],t=12,i=0,o=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:o},t=Math.floor(t),o=yn(o,0,Math.PI*2);const l=[],u=[],f=[],p=[],h=[],m=1/t,d=new H,_=new Xe,y=new H,w=new H,E=new H;let x=0,S=0;for(let C=0;C<=e.length-1;C++)switch(C){case 0:x=e[C+1].x-e[C].x,S=e[C+1].y-e[C].y,y.x=S*1,y.y=-x,y.z=S*0,E.copy(y),y.normalize(),p.push(y.x,y.y,y.z);break;case e.length-1:p.push(E.x,E.y,E.z);break;default:x=e[C+1].x-e[C].x,S=e[C+1].y-e[C].y,y.x=S*1,y.y=-x,y.z=S*0,w.copy(y),y.x+=E.x,y.y+=E.y,y.z+=E.z,y.normalize(),p.push(y.x,y.y,y.z),E.copy(w)}for(let C=0;C<=t;C++){const P=i+C*m*o,D=Math.sin(P),V=Math.cos(P);for(let O=0;O<=e.length-1;O++){d.x=e[O].x*D,d.y=e[O].y,d.z=e[O].x*V,u.push(d.x,d.y,d.z),_.x=C/t,_.y=O/(e.length-1),f.push(_.x,_.y);const F=p[3*O+0]*D,q=p[3*O+1],U=p[3*O+0]*V;h.push(F,q,U)}}for(let C=0;C<t;C++)for(let P=0;P<e.length-1;P++){const D=P+C*e.length,V=D,O=D+e.length,F=D+e.length+1,q=D+1;l.push(V,O,q),l.push(F,q,O)}this.setIndex(l),this.setAttribute("position",new qt(u,3)),this.setAttribute("uv",new qt(f,2)),this.setAttribute("normal",new qt(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dh(e.points,e.segments,e.phiStart,e.phiLength)}}class ph extends dh{constructor(e=1,t=1,i=4,o=8){const l=new w1;l.absarc(0,-t/2,e,Math.PI*1.5,0),l.absarc(0,t/2,e,0,Math.PI*.5),super(l.getPoints(i),o),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:o}}static fromJSON(e){return new ph(e.radius,e.length,e.capSegments,e.radialSegments)}}class mh extends ii{constructor(e=1,t=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:o},t=Math.max(3,t);const l=[],u=[],f=[],p=[],h=new H,m=new Xe;u.push(0,0,0),f.push(0,0,1),p.push(.5,.5);for(let d=0,_=3;d<=t;d++,_+=3){const y=i+d/t*o;h.x=e*Math.cos(y),h.y=e*Math.sin(y),u.push(h.x,h.y,h.z),f.push(0,0,1),m.x=(u[_]/e+1)/2,m.y=(u[_+1]/e+1)/2,p.push(m.x,m.y)}for(let d=1;d<=t;d++)l.push(d,d+1,0);this.setIndex(l),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ti extends ii{constructor(e=1,t=1,i=1,o=32,l=1,u=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:p};const h=this;o=Math.floor(o),l=Math.floor(l);const m=[],d=[],_=[],y=[];let w=0;const E=[],x=i/2;let S=0;C(),u===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(m),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(y,2));function C(){const D=new H,V=new H;let O=0;const F=(t-e)/i;for(let q=0;q<=l;q++){const U=[],L=q/l,ne=L*(t-e)+e;for(let ae=0;ae<=o;ae++){const j=ae/o,oe=j*p+f,he=Math.sin(oe),_e=Math.cos(oe);V.x=ne*he,V.y=-L*i+x,V.z=ne*_e,d.push(V.x,V.y,V.z),D.set(he,F,_e).normalize(),_.push(D.x,D.y,D.z),y.push(j,1-L),U.push(w++)}E.push(U)}for(let q=0;q<o;q++)for(let U=0;U<l;U++){const L=E[U][q],ne=E[U+1][q],ae=E[U+1][q+1],j=E[U][q+1];m.push(L,ne,j),m.push(ne,ae,j),O+=6}h.addGroup(S,O,0),S+=O}function P(D){const V=w,O=new Xe,F=new H;let q=0;const U=D===!0?e:t,L=D===!0?1:-1;for(let ae=1;ae<=o;ae++)d.push(0,x*L,0),_.push(0,L,0),y.push(.5,.5),w++;const ne=w;for(let ae=0;ae<=o;ae++){const oe=ae/o*p+f,he=Math.cos(oe),_e=Math.sin(oe);F.x=U*_e,F.y=x*L,F.z=U*he,d.push(F.x,F.y,F.z),_.push(0,L,0),O.x=he*.5+.5,O.y=_e*.5*L+.5,y.push(O.x,O.y),w++}for(let ae=0;ae<o;ae++){const j=V+ae,oe=ne+ae;D===!0?m.push(oe,oe+1,j):m.push(oe+1,oe,j),q+=3}h.addGroup(S,q,D===!0?1:2),S+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ar extends ti{constructor(e=1,t=1,i=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,i,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new ar(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gh extends ii{constructor(e=[],t=[],i=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:o};const l=[],u=[];f(o),h(i),m(),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(l.slice(),3)),this.setAttribute("uv",new qt(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(C){const P=new H,D=new H,V=new H;for(let O=0;O<t.length;O+=3)y(t[O+0],P),y(t[O+1],D),y(t[O+2],V),p(P,D,V,C)}function p(C,P,D,V){const O=V+1,F=[];for(let q=0;q<=O;q++){F[q]=[];const U=C.clone().lerp(D,q/O),L=P.clone().lerp(D,q/O),ne=O-q;for(let ae=0;ae<=ne;ae++)ae===0&&q===O?F[q][ae]=U:F[q][ae]=U.clone().lerp(L,ae/ne)}for(let q=0;q<O;q++)for(let U=0;U<2*(O-q)-1;U++){const L=Math.floor(U/2);U%2===0?(_(F[q][L+1]),_(F[q+1][L]),_(F[q][L])):(_(F[q][L+1]),_(F[q+1][L+1]),_(F[q+1][L]))}}function h(C){const P=new H;for(let D=0;D<l.length;D+=3)P.x=l[D+0],P.y=l[D+1],P.z=l[D+2],P.normalize().multiplyScalar(C),l[D+0]=P.x,l[D+1]=P.y,l[D+2]=P.z}function m(){const C=new H;for(let P=0;P<l.length;P+=3){C.x=l[P+0],C.y=l[P+1],C.z=l[P+2];const D=x(C)/2/Math.PI+.5,V=S(C)/Math.PI+.5;u.push(D,1-V)}w(),d()}function d(){for(let C=0;C<u.length;C+=6){const P=u[C+0],D=u[C+2],V=u[C+4],O=Math.max(P,D,V),F=Math.min(P,D,V);O>.9&&F<.1&&(P<.2&&(u[C+0]+=1),D<.2&&(u[C+2]+=1),V<.2&&(u[C+4]+=1))}}function _(C){l.push(C.x,C.y,C.z)}function y(C,P){const D=C*3;P.x=e[D+0],P.y=e[D+1],P.z=e[D+2]}function w(){const C=new H,P=new H,D=new H,V=new H,O=new Xe,F=new Xe,q=new Xe;for(let U=0,L=0;U<l.length;U+=9,L+=6){C.set(l[U+0],l[U+1],l[U+2]),P.set(l[U+3],l[U+4],l[U+5]),D.set(l[U+6],l[U+7],l[U+8]),O.set(u[L+0],u[L+1]),F.set(u[L+2],u[L+3]),q.set(u[L+4],u[L+5]),V.copy(C).add(P).add(D).divideScalar(3);const ne=x(V);E(O,L+0,C,ne),E(F,L+2,P,ne),E(q,L+4,D,ne)}}function E(C,P,D,V){V<0&&C.x===1&&(u[P]=C.x-1),D.x===0&&D.z===0&&(u[P]=V/2/Math.PI+.5)}function x(C){return Math.atan2(C.z,-C.x)}function S(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gh(e.vertices,e.indices,e.radius,e.details)}}class vh extends gh{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vh(e.radius,e.detail)}}class Un extends ii{constructor(e=1,t=32,i=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const p=Math.min(u+f,Math.PI);let h=0;const m=[],d=new H,_=new H,y=[],w=[],E=[],x=[];for(let S=0;S<=i;S++){const C=[],P=S/i;let D=0;S===0&&u===0?D=.5/t:S===i&&p===Math.PI&&(D=-.5/t);for(let V=0;V<=t;V++){const O=V/t;d.x=-e*Math.cos(o+O*l)*Math.sin(u+P*f),d.y=e*Math.cos(u+P*f),d.z=e*Math.sin(o+O*l)*Math.sin(u+P*f),w.push(d.x,d.y,d.z),_.copy(d).normalize(),E.push(_.x,_.y,_.z),x.push(O+D,1-P),C.push(h++)}m.push(C)}for(let S=0;S<i;S++)for(let C=0;C<t;C++){const P=m[S][C+1],D=m[S][C],V=m[S+1][C],O=m[S+1][C+1];(S!==0||u>0)&&y.push(P,D,O),(S!==i-1||p<Math.PI)&&y.push(D,V,O)}this.setIndex(y),this.setAttribute("position",new qt(w,3)),this.setAttribute("normal",new qt(E,3)),this.setAttribute("uv",new qt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _a extends ii{constructor(e=1,t=.4,i=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:o,arc:l},i=Math.floor(i),o=Math.floor(o);const u=[],f=[],p=[],h=[],m=new H,d=new H,_=new H;for(let y=0;y<=i;y++)for(let w=0;w<=o;w++){const E=w/o*l,x=y/i*Math.PI*2;d.x=(e+t*Math.cos(x))*Math.cos(E),d.y=(e+t*Math.cos(x))*Math.sin(E),d.z=t*Math.sin(x),f.push(d.x,d.y,d.z),m.x=e*Math.cos(E),m.y=e*Math.sin(E),_.subVectors(d,m).normalize(),p.push(_.x,_.y,_.z),h.push(w/o),h.push(y/i)}for(let y=1;y<=i;y++)for(let w=1;w<=o;w++){const E=(o+1)*y+w-1,x=(o+1)*(y-1)+w-1,S=(o+1)*(y-1)+w,C=(o+1)*y+w;u.push(E,x,C),u.push(x,S,C)}this.setIndex(u),this.setAttribute("position",new qt(f,3)),this.setAttribute("normal",new qt(p,3)),this.setAttribute("uv",new qt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Nt extends Ma{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=a0,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const xg={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class E1{constructor(e,t,i){const o=this;let l=!1,u=0,f=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(m){f++,l===!1&&o.onStart!==void 0&&o.onStart(m,u,f),l=!0},this.itemEnd=function(m){u++,o.onProgress!==void 0&&o.onProgress(m,u,f),u===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(m){o.onError!==void 0&&o.onError(m)},this.resolveURL=function(m){return p?p(m):m},this.setURLModifier=function(m){return p=m,this},this.addHandler=function(m,d){return h.push(m,d),this},this.removeHandler=function(m){const d=h.indexOf(m);return d!==-1&&h.splice(d,2),this},this.getHandler=function(m){for(let d=0,_=h.length;d<_;d+=2){const y=h[d],w=h[d+1];if(y.global&&(y.lastIndex=0),y.test(m))return w}return null}}}const T1=new E1;class _h{constructor(e){this.manager=e!==void 0?e:T1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(o,l){i.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}_h.DEFAULT_MATERIAL_NAME="__DEFAULT";class A1 extends _h{constructor(e){super(e)}load(e,t,i,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=xg.get(e);if(u!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u;const f=va("img");function p(){m(),xg.add(e,this),t&&t(this),l.manager.itemEnd(e)}function h(d){m(),o&&o(d),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){f.removeEventListener("load",p,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(e),f.src=e,f}}class L0 extends _h{constructor(e){super(e)}load(e,t,i,o){const l=new On,u=new A1(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},i,o),l}}class hc extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class C1 extends hc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Df=new Jt,Sg=new H,Mg=new H;class D0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lh,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Sg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sg),Mg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mg),t.updateMatrixWorld(),Df.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Df),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Df)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wg=new Jt,ia=new H,If=new H;class R1 extends D0{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new Kt(2,1,1,1),new Kt(0,1,1,1),new Kt(3,1,1,1),new Kt(1,1,1,1),new Kt(3,0,1,1),new Kt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,o=this.matrix,l=e.distance||i.far;l!==i.far&&(i.far=l,i.updateProjectionMatrix()),ia.setFromMatrixPosition(e.matrixWorld),i.position.copy(ia),If.copy(i.position),If.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(If),i.updateMatrixWorld(),o.makeTranslation(-ia.x,-ia.y,-ia.z),wg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wg)}}class Qf extends hc{constructor(e,t,i=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new R1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class P1 extends D0{constructor(){super(new x0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class b1 extends hc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new P1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class L1 extends hc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class D1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Eg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Eg(){return(typeof performance>"u"?Date:performance).now()}const Tg=new Jt;class I1{constructor(e,t,i=0,o=1/0){this.ray=new h0(e,t),this.near=i,this.far=o,this.camera=null,this.layers=new ah,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Tg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tg),this}intersectObject(e,t=!0,i=[]){return eh(e,this,i,t),i.sort(Ag),i}intersectObjects(e,t=!0,i=[]){for(let o=0,l=e.length;o<l;o++)eh(e[o],this,i,t);return i.sort(Ag),i}}function Ag(s,e){return s.distance-e.distance}function eh(s,e,t,i){if(s.layers.test(e.layers)&&s.raycast(e,t),i===!0){const o=s.children;for(let l=0,u=o.length;l<u;l++)eh(o[l],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ih);var Nf={},Cg={},Rg;function N1(){return Rg||(Rg=1,ArrayBuffer.isView||(ArrayBuffer.isView=s=>s!==null&&typeof s=="object"&&s.buffer instanceof ArrayBuffer),typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window)),Cg}var nr={},Uf={},Pg;function yh(){return Pg||(Pg=1,(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.ServerError=s.CloseCode=void 0,(function(t){t[t.CONSENTED=4e3]="CONSENTED",t[t.DEVMODE_RESTART=4010]="DEVMODE_RESTART"})(s.CloseCode||(s.CloseCode={}));class e extends Error{constructor(i,o){super(o),this.name="ServerError",this.code=i}}s.ServerError=e})(Uf)),Uf}var Ei={},os={},bg;function U1(){if(bg)return os;bg=1,Object.defineProperty(os,"__esModule",{value:!0}),os.decode=os.encode=void 0;function s(h,m){if(this._offset=m,h instanceof ArrayBuffer)this._buffer=h,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(h))this._buffer=h.buffer,this._view=new DataView(this._buffer,h.byteOffset,h.byteLength);else throw new Error("Invalid argument")}function e(h,m,d){for(var _="",y=0,w=m,E=m+d;w<E;w++){var x=h.getUint8(w);if((x&128)===0){_+=String.fromCharCode(x);continue}if((x&224)===192){_+=String.fromCharCode((x&31)<<6|h.getUint8(++w)&63);continue}if((x&240)===224){_+=String.fromCharCode((x&15)<<12|(h.getUint8(++w)&63)<<6|(h.getUint8(++w)&63)<<0);continue}if((x&248)===240){y=(x&7)<<18|(h.getUint8(++w)&63)<<12|(h.getUint8(++w)&63)<<6|(h.getUint8(++w)&63)<<0,y>=65536?(y-=65536,_+=String.fromCharCode((y>>>10)+55296,(y&1023)+56320)):_+=String.fromCharCode(y);continue}throw new Error("Invalid byte "+x.toString(16))}return _}s.prototype._array=function(h){for(var m=new Array(h),d=0;d<h;d++)m[d]=this._parse();return m},s.prototype._map=function(h){for(var m="",d={},_=0;_<h;_++)m=this._parse(),d[m]=this._parse();return d},s.prototype._str=function(h){var m=e(this._view,this._offset,h);return this._offset+=h,m},s.prototype._bin=function(h){var m=this._buffer.slice(this._offset,this._offset+h);return this._offset+=h,m},s.prototype._parse=function(){var h=this._view.getUint8(this._offset++),m,d=0,_=0,y=0,w=0;if(h<192)return h<128?h:h<144?this._map(h&15):h<160?this._array(h&15):this._str(h&31);if(h>223)return(255-h+1)*-1;switch(h){case 192:return null;case 194:return!1;case 195:return!0;case 196:return d=this._view.getUint8(this._offset),this._offset+=1,this._bin(d);case 197:return d=this._view.getUint16(this._offset),this._offset+=2,this._bin(d);case 198:return d=this._view.getUint32(this._offset),this._offset+=4,this._bin(d);case 199:if(d=this._view.getUint8(this._offset),_=this._view.getInt8(this._offset+1),this._offset+=2,_===-1){var E=this._view.getUint32(this._offset);return y=this._view.getInt32(this._offset+4),w=this._view.getUint32(this._offset+8),this._offset+=12,new Date((y*4294967296+w)*1e3+E/1e6)}return[_,this._bin(d)];case 200:return d=this._view.getUint16(this._offset),_=this._view.getInt8(this._offset+2),this._offset+=3,[_,this._bin(d)];case 201:return d=this._view.getUint32(this._offset),_=this._view.getInt8(this._offset+4),this._offset+=5,[_,this._bin(d)];case 202:return m=this._view.getFloat32(this._offset),this._offset+=4,m;case 203:return m=this._view.getFloat64(this._offset),this._offset+=8,m;case 204:return m=this._view.getUint8(this._offset),this._offset+=1,m;case 205:return m=this._view.getUint16(this._offset),this._offset+=2,m;case 206:return m=this._view.getUint32(this._offset),this._offset+=4,m;case 207:return y=this._view.getUint32(this._offset)*Math.pow(2,32),w=this._view.getUint32(this._offset+4),this._offset+=8,y+w;case 208:return m=this._view.getInt8(this._offset),this._offset+=1,m;case 209:return m=this._view.getInt16(this._offset),this._offset+=2,m;case 210:return m=this._view.getInt32(this._offset),this._offset+=4,m;case 211:return y=this._view.getInt32(this._offset)*Math.pow(2,32),w=this._view.getUint32(this._offset+4),this._offset+=8,y+w;case 212:if(_=this._view.getInt8(this._offset),this._offset+=1,_===0){this._offset+=1;return}return[_,this._bin(1)];case 213:return _=this._view.getInt8(this._offset),this._offset+=1,[_,this._bin(2)];case 214:return _=this._view.getInt8(this._offset),this._offset+=1,_===-1?(m=this._view.getUint32(this._offset),this._offset+=4,new Date(m*1e3)):[_,this._bin(4)];case 215:if(_=this._view.getInt8(this._offset),this._offset+=1,_===0)return y=this._view.getInt32(this._offset)*Math.pow(2,32),w=this._view.getUint32(this._offset+4),this._offset+=8,new Date(y+w);if(_===-1){y=this._view.getUint32(this._offset),w=this._view.getUint32(this._offset+4),this._offset+=8;var x=(y&3)*4294967296+w;return new Date(x*1e3+(y>>>2)/1e6)}return[_,this._bin(8)];case 216:return _=this._view.getInt8(this._offset),this._offset+=1,[_,this._bin(16)];case 217:return d=this._view.getUint8(this._offset),this._offset+=1,this._str(d);case 218:return d=this._view.getUint16(this._offset),this._offset+=2,this._str(d);case 219:return d=this._view.getUint32(this._offset),this._offset+=4,this._str(d);case 220:return d=this._view.getUint16(this._offset),this._offset+=2,this._array(d);case 221:return d=this._view.getUint32(this._offset),this._offset+=4,this._array(d);case 222:return d=this._view.getUint16(this._offset),this._offset+=2,this._map(d);case 223:return d=this._view.getUint32(this._offset),this._offset+=4,this._map(d)}throw new Error("Could not parse")};function t(h,m=0){var d=new s(h,m),_=d._parse();if(d._offset!==h.byteLength)throw new Error(h.byteLength-d._offset+" trailing bytes");return _}os.decode=t;var i=4294967296-1,o=17179869184-1;function l(h,m,d){for(var _=0,y=0,w=d.length;y<w;y++)_=d.charCodeAt(y),_<128?h.setUint8(m++,_):_<2048?(h.setUint8(m++,192|_>>6),h.setUint8(m++,128|_&63)):_<55296||_>=57344?(h.setUint8(m++,224|_>>12),h.setUint8(m++,128|_>>6&63),h.setUint8(m++,128|_&63)):(y++,_=65536+((_&1023)<<10|d.charCodeAt(y)&1023),h.setUint8(m++,240|_>>18),h.setUint8(m++,128|_>>12&63),h.setUint8(m++,128|_>>6&63),h.setUint8(m++,128|_&63))}function u(h){for(var m=0,d=0,_=0,y=h.length;_<y;_++)m=h.charCodeAt(_),m<128?d+=1:m<2048?d+=2:m<55296||m>=57344?d+=3:(_++,d+=4);return d}function f(h,m,d){var _=typeof d,y=0,w=0,E=0,x=0,S=0,C=0;if(_==="string"){if(S=u(d),S<32)h.push(S|160),C=1;else if(S<256)h.push(217,S),C=2;else if(S<65536)h.push(218,S>>8,S),C=3;else if(S<4294967296)h.push(219,S>>24,S>>16,S>>8,S),C=5;else throw new Error("String too long");return m.push({_str:d,_length:S,_offset:h.length}),C+S}if(_==="number")return Math.floor(d)!==d||!isFinite(d)?(h.push(203),m.push({_float:d,_length:8,_offset:h.length}),9):d>=0?d<128?(h.push(d),1):d<256?(h.push(204,d),2):d<65536?(h.push(205,d>>8,d),3):d<4294967296?(h.push(206,d>>24,d>>16,d>>8,d),5):(E=d/Math.pow(2,32)>>0,x=d>>>0,h.push(207,E>>24,E>>16,E>>8,E,x>>24,x>>16,x>>8,x),9):d>=-32?(h.push(d),1):d>=-128?(h.push(208,d),2):d>=-32768?(h.push(209,d>>8,d),3):d>=-2147483648?(h.push(210,d>>24,d>>16,d>>8,d),5):(E=Math.floor(d/Math.pow(2,32)),x=d>>>0,h.push(211,E>>24,E>>16,E>>8,E,x>>24,x>>16,x>>8,x),9);if(_==="object"){if(d===null)return h.push(192),1;if(Array.isArray(d)){if(S=d.length,S<16)h.push(S|144),C=1;else if(S<65536)h.push(220,S>>8,S),C=3;else if(S<4294967296)h.push(221,S>>24,S>>16,S>>8,S),C=5;else throw new Error("Array too large");for(y=0;y<S;y++)C+=f(h,m,d[y]);return C}if(d instanceof Date){var P=d.getTime(),D=Math.floor(P/1e3),V=(P-D*1e3)*1e6;return D>=0&&V>=0&&D<=o?V===0&&D<=i?(h.push(214,255,D>>24,D>>16,D>>8,D),6):(E=D/4294967296,x=D&4294967295,h.push(215,255,V>>22,V>>14,V>>6,E,x>>24,x>>16,x>>8,x),10):(E=Math.floor(D/4294967296),x=D>>>0,h.push(199,12,255,V>>24,V>>16,V>>8,V,E>>24,E>>16,E>>8,E,x>>24,x>>16,x>>8,x),15)}if(d instanceof ArrayBuffer){if(S=d.byteLength,S<256)h.push(196,S),C=2;else if(S<65536)h.push(197,S>>8,S),C=3;else if(S<4294967296)h.push(198,S>>24,S>>16,S>>8,S),C=5;else throw new Error("Buffer too large");return m.push({_bin:d,_length:S,_offset:h.length}),C+S}if(typeof d.toJSON=="function")return f(h,m,d.toJSON());var O=[],F="",q=Object.keys(d);for(y=0,w=q.length;y<w;y++)F=q[y],d[F]!==void 0&&typeof d[F]!="function"&&O.push(F);if(S=O.length,S<16)h.push(S|128),C=1;else if(S<65536)h.push(222,S>>8,S),C=3;else if(S<4294967296)h.push(223,S>>24,S>>16,S>>8,S),C=5;else throw new Error("Object too large");for(y=0;y<S;y++)F=O[y],C+=f(h,m,F),C+=f(h,m,d[F]);return C}if(_==="boolean")return h.push(d?195:194),1;if(_==="undefined")return h.push(192),1;if(typeof d.toJSON=="function")return f(h,m,d.toJSON());throw new Error("Could not encode")}function p(h){var m=[],d=[],_=f(m,d,h),y=new ArrayBuffer(_),w=new DataView(y),E=0,x=0,S=-1;d.length>0&&(S=d[0]._offset);for(var C,P=0,D=0,V=0,O=m.length;V<O;V++)if(w.setUint8(x+V,m[V]),V+1===S){if(C=d[E],P=C._length,D=x+S,C._bin)for(var F=new Uint8Array(C._bin),q=0;q<P;q++)w.setUint8(D+q,F[q]);else C._str?l(w,D,C._str):C._float!==void 0&&w.setFloat64(D,C._float);E++,x+=P,d[E]&&(S=d[E]._offset)}return y}return os.encode=p,os}var ra={},as={},Of,Lg;function O1(){return Lg||(Lg=1,Of=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}),Of}var Dg;function F1(){if(Dg)return as;Dg=1;var s=as&&as.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(as,"__esModule",{value:!0}),as.WebSocketTransport=void 0;const e=s(O1()),t=globalThis.WebSocket||e.default;let i=class{constructor(l){this.events=l}send(l){l instanceof ArrayBuffer?this.ws.send(l):Array.isArray(l)&&this.ws.send(new Uint8Array(l).buffer)}connect(l,u){try{this.ws=new t(l,{headers:u,protocols:this.protocols})}catch{this.ws=new t(l,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(l,u){this.ws.close(l,u)}get isOpen(){return this.ws.readyState===t.OPEN}};return as.WebSocketTransport=i,as}var Ig;function k1(){if(Ig)return ra;Ig=1,Object.defineProperty(ra,"__esModule",{value:!0}),ra.Connection=void 0;const s=F1();let e=class{constructor(){this.events={},this.transport=new s.WebSocketTransport(this.events)}send(i){this.transport.send(i)}connect(i,o){this.transport.connect(i,o)}close(i,o){this.transport.close(i,o)}get isOpen(){return this.transport.isOpen}};return ra.Connection=e,ra}var Ff={},Ng;function I0(){return Ng||(Ng=1,(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.utf8Length=s.utf8Read=s.ErrorCode=s.Protocol=void 0,(function(i){i[i.HANDSHAKE=9]="HANDSHAKE",i[i.JOIN_ROOM=10]="JOIN_ROOM",i[i.ERROR=11]="ERROR",i[i.LEAVE_ROOM=12]="LEAVE_ROOM",i[i.ROOM_DATA=13]="ROOM_DATA",i[i.ROOM_STATE=14]="ROOM_STATE",i[i.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",i[i.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",i[i.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"})(s.Protocol||(s.Protocol={})),(function(i){i[i.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",i[i.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",i[i.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",i[i.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",i[i.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",i[i.AUTH_FAILED=4215]="AUTH_FAILED",i[i.APPLICATION_ERROR=4216]="APPLICATION_ERROR"})(s.ErrorCode||(s.ErrorCode={}));function e(i,o){const l=i[o++];for(var u="",f=0,p=o,h=o+l;p<h;p++){var m=i[p];if((m&128)===0){u+=String.fromCharCode(m);continue}if((m&224)===192){u+=String.fromCharCode((m&31)<<6|i[++p]&63);continue}if((m&240)===224){u+=String.fromCharCode((m&15)<<12|(i[++p]&63)<<6|(i[++p]&63)<<0);continue}if((m&248)===240){f=(m&7)<<18|(i[++p]&63)<<12|(i[++p]&63)<<6|(i[++p]&63)<<0,f>=65536?(f-=65536,u+=String.fromCharCode((f>>>10)+55296,(f&1023)+56320)):u+=String.fromCharCode(f);continue}throw new Error("Invalid byte "+m.toString(16))}return u}s.utf8Read=e;function t(i=""){let o=0,l=0;for(let u=0,f=i.length;u<f;u++)o=i.charCodeAt(u),o<128?l+=1:o<2048?l+=2:o<55296||o>=57344?l+=3:(u++,l+=4);return l+1}s.utf8Length=t})(Ff)),Ff}var ls={},Ug;function N0(){if(Ug)return ls;Ug=1,Object.defineProperty(ls,"__esModule",{value:!0}),ls.getSerializer=ls.registerSerializer=void 0;const s={};function e(i,o){s[i]=o}ls.registerSerializer=e;function t(i){const o=s[i];if(!o)throw new Error("missing serializer: "+i);return o}return ls.getSerializer=t,ls}var sa={},Og;function U0(){if(Og)return sa;Og=1,Object.defineProperty(sa,"__esModule",{value:!0}),sa.createNanoEvents=void 0;const s=()=>({emit(e,...t){let i=this.events[e]||[];for(let o=0,l=i.length;o<l;o++)i[o](...t)},events:{},on(e,t){var i;return!((i=this.events[e])===null||i===void 0)&&i.push(t)||(this.events[e]=[t]),()=>{var o;this.events[e]=(o=this.events[e])===null||o===void 0?void 0:o.filter(l=>t!==l)}}});return sa.createNanoEvents=s,sa}var cs={},Fg;function z1(){if(Fg)return cs;Fg=1,Object.defineProperty(cs,"__esModule",{value:!0}),cs.createSignal=cs.EventEmitter=void 0;class s{constructor(){this.handlers=[]}register(i,o=!1){return this.handlers.push(i),this}invoke(...i){this.handlers.forEach(o=>o.apply(this,i))}invokeAsync(...i){return Promise.all(this.handlers.map(o=>o.apply(this,i)))}remove(i){const o=this.handlers.indexOf(i);this.handlers[o]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}cs.EventEmitter=s;function e(){const t=new s;function i(o){return t.register(o,this===null)}return i.once=o=>{const l=function(...u){o.apply(this,u),t.remove(l)};t.register(l)},i.remove=o=>t.remove(o),i.invoke=(...o)=>t.invoke(...o),i.invokeAsync=(...o)=>t.invokeAsync(...o),i.clear=()=>t.clear(),i}return cs.createSignal=e,cs}var ua={exports:{}},B1=ua.exports,kg;function O0(){return kg||(kg=1,(function(s,e){(function(t,i){i(e)})(B1,(function(t){var i=function(T,v){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,I){A.__proto__=I}||function(A,I){for(var Z in I)Object.prototype.hasOwnProperty.call(I,Z)&&(A[Z]=I[Z])},i(T,v)};function o(T,v){if(typeof v!="function"&&v!==null)throw new TypeError("Class extends value "+String(v)+" is not a constructor or null");i(T,v);function A(){this.constructor=T}T.prototype=v===null?Object.create(v):(A.prototype=v.prototype,new A)}function l(T,v,A,I){var Z=arguments.length,ve=Z<3?v:I,Qe;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")ve=Reflect.decorate(T,v,A,I);else for(var b=T.length-1;b>=0;b--)(Qe=T[b])&&(ve=(Z<3?Qe(ve):Z>3?Qe(v,A,ve):Qe(v,A))||ve);return Z>3&&ve&&Object.defineProperty(v,A,ve),ve}function u(T,v,A){if(arguments.length===2)for(var I=0,Z=v.length,ve;I<Z;I++)(ve||!(I in v))&&(ve||(ve=Array.prototype.slice.call(v,0,I)),ve[I]=v[I]);return T.concat(ve||Array.prototype.slice.call(v))}typeof SuppressedError=="function"&&SuppressedError;var f=255,p=213;t.OPERATION=void 0,(function(T){T[T.ADD=128]="ADD",T[T.REPLACE=0]="REPLACE",T[T.DELETE=64]="DELETE",T[T.DELETE_AND_ADD=192]="DELETE_AND_ADD",T[T.TOUCH=1]="TOUCH",T[T.CLEAR=10]="CLEAR"})(t.OPERATION||(t.OPERATION={}));var h=(function(){function T(v,A,I){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=v,this.setParent(A,I)}return T.prototype.setParent=function(v,A,I){var Z=this;if(this.indexes||(this.indexes=this.ref instanceof Bt?this.ref._definition.indexes:{}),this.parent=v,this.parentIndex=I,!!A)if(this.root=A,this.ref instanceof Bt){var ve=this.ref._definition;for(var Qe in ve.schema){var b=this.ref[Qe];if(b&&b.$changes){var $=ve.indexes[Qe];b.$changes.setParent(this.ref,A,$)}}}else typeof this.ref=="object"&&this.ref.forEach(function(Q,X){if(Q instanceof Bt){var K=Q.$changes,pe=Z.ref.$changes.indexes[X];K.setParent(Z.ref,Z.root,pe)}})},T.prototype.operation=function(v){this.changes.set(--this.currentCustomOperation,v)},T.prototype.change=function(v,A){A===void 0&&(A=t.OPERATION.ADD);var I=typeof v=="number"?v:this.indexes[v];this.assertValidIndex(I,v);var Z=this.changes.get(I);(!Z||Z.op===t.OPERATION.DELETE||Z.op===t.OPERATION.TOUCH)&&this.changes.set(I,{op:Z&&Z.op===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:A,index:I}),this.allChanges.add(I),this.changed=!0,this.touchParents()},T.prototype.touch=function(v){var A=typeof v=="number"?v:this.indexes[v];this.assertValidIndex(A,v),this.changes.has(A)||this.changes.set(A,{op:t.OPERATION.TOUCH,index:A}),this.allChanges.add(A),this.touchParents()},T.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},T.prototype.getType=function(v){if(this.ref._definition){var A=this.ref._definition;return A.schema[A.fieldsByIndex[v]]}else{var A=this.parent._definition,I=A.schema[A.fieldsByIndex[this.parentIndex]];return Object.values(I)[0]}},T.prototype.getChildrenFilter=function(){var v=this.parent._definition.childFilters;return v&&v[this.parentIndex]},T.prototype.getValue=function(v){return this.ref.getByIndex(v)},T.prototype.delete=function(v){var A=typeof v=="number"?v:this.indexes[v];if(A===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(v," (").concat(A,")"));return}var I=this.getValue(A);this.changes.set(A,{op:t.OPERATION.DELETE,index:A}),this.allChanges.delete(A),delete this.caches[A],I&&I.$changes&&(I.$changes.parent=void 0),this.changed=!0,this.touchParents()},T.prototype.discard=function(v,A){var I=this;v===void 0&&(v=!1),A===void 0&&(A=!1),this.ref instanceof Bt||this.changes.forEach(function(Z){if(Z.op===t.OPERATION.DELETE){var ve=I.ref.getIndex(Z.index);delete I.indexes[ve]}}),this.changes.clear(),this.changed=v,A&&this.allChanges.clear(),this.currentCustomOperation=0},T.prototype.discardAll=function(){var v=this;this.changes.forEach(function(A){var I=v.getValue(A.index);I&&I.$changes&&I.$changes.discardAll()}),this.discard()},T.prototype.cache=function(v,A){this.caches[v]=A},T.prototype.clone=function(){return new T(this.ref,this.parent,this.root)},T.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},T.prototype.assertValidIndex=function(v,A){if(v===void 0)throw new Error('ChangeTree: missing index for field "'.concat(A,'"'))},T})();function m(T,v,A,I){return T[v]||(T[v]=[]),T[v].push(A),I==null||I.forEach(function(Z,ve){return A(Z,ve)}),function(){return _(T[v],T[v].indexOf(A))}}function d(T){var v=this,A=typeof this.$changes.getType()!="string";this.$items.forEach(function(I,Z){T.push({refId:v.$changes.refId,op:t.OPERATION.DELETE,field:Z,value:void 0,previousValue:I}),A&&v.$changes.root.removeRef(I.$changes.refId)})}function _(T,v){if(v===-1||v>=T.length)return!1;for(var A=T.length-1,I=v;I<A;I++)T[I]=T[I+1];return T.length=A,!0}var y=function(T,v){var A=T.toString(),I=v.toString();return A<I?-1:A>I?1:0};function w(T){return T.$proxy=!0,T=new Proxy(T,{get:function(v,A){return typeof A!="symbol"&&!isNaN(A)?v.at(A):v[A]},set:function(v,A,I){if(typeof A!="symbol"&&!isNaN(A)){var Z=Array.from(v.$items.keys()),ve=parseInt(Z[A]||A);I==null?v.deleteAt(ve):v.setAt(ve,I)}else v[A]=I;return!0},deleteProperty:function(v,A){return typeof A=="number"?v.deleteAt(A):delete v[A],!0},has:function(v,A){return typeof A!="symbol"&&!isNaN(Number(A))?v.$items.has(Number(A)):Reflect.has(v,A)}}),T}var E=(function(){function T(){for(var v=[],A=0;A<arguments.length;A++)v[A]=arguments[A];this.$changes=new h(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,v)}return T.prototype.onAdd=function(v,A){return A===void 0&&(A=!0),m(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,v,A?this.$items:void 0)},T.prototype.onRemove=function(v){return m(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,v)},T.prototype.onChange=function(v){return m(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,v)},T.is=function(v){return Array.isArray(v)||v.array!==void 0},Object.defineProperty(T.prototype,"length",{get:function(){return this.$items.size},set:function(v){v===0?this.clear():this.splice(v,this.length-v)},enumerable:!1,configurable:!0}),T.prototype.push=function(){for(var v=this,A=[],I=0;I<arguments.length;I++)A[I]=arguments[I];var Z;return A.forEach(function(ve){Z=v.$refId++,v.setAt(Z,ve)}),Z},T.prototype.pop=function(){var v=Array.from(this.$indexes.values()).pop();if(v!==void 0){this.$changes.delete(v),this.$indexes.delete(v);var A=this.$items.get(v);return this.$items.delete(v),A}},T.prototype.at=function(v){if(v=Math.trunc(v)||0,v<0&&(v+=this.length),!(v<0||v>=this.length)){var A=Array.from(this.$items.keys())[v];return this.$items.get(A)}},T.prototype.setAt=function(v,A){var I,Z;if(A==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(v)!==A){A.$changes!==void 0&&A.$changes.setParent(this,this.$changes.root,v);var ve=(Z=(I=this.$changes.indexes[v])===null||I===void 0?void 0:I.op)!==null&&Z!==void 0?Z:t.OPERATION.ADD;this.$changes.indexes[v]=v,this.$indexes.set(v,v),this.$items.set(v,A),this.$changes.change(v,ve)}},T.prototype.deleteAt=function(v){var A=Array.from(this.$items.keys())[v];return A===void 0?!1:this.$deleteAt(A)},T.prototype.$deleteAt=function(v){return this.$changes.delete(v),this.$indexes.delete(v),this.$items.delete(v)},T.prototype.clear=function(v){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),v&&d.call(this,v),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},T.prototype.concat=function(){for(var v,A=[],I=0;I<arguments.length;I++)A[I]=arguments[I];return new(T.bind.apply(T,u([void 0],(v=Array.from(this.$items.values())).concat.apply(v,A),!1)))},T.prototype.join=function(v){return Array.from(this.$items.values()).join(v)},T.prototype.reverse=function(){var v=this,A=Array.from(this.$items.keys()),I=Array.from(this.$items.values()).reverse();return I.forEach(function(Z,ve){v.setAt(A[ve],Z)}),this},T.prototype.shift=function(){var v=Array.from(this.$items.keys()),A=v.shift();if(A!==void 0){var I=this.$items.get(A);return this.$deleteAt(A),I}},T.prototype.slice=function(v,A){var I=new T;return I.push.apply(I,Array.from(this.$items.values()).slice(v,A)),I},T.prototype.sort=function(v){var A=this;v===void 0&&(v=y);var I=Array.from(this.$items.keys()),Z=Array.from(this.$items.values()).sort(v);return Z.forEach(function(ve,Qe){A.setAt(I[Qe],ve)}),this},T.prototype.splice=function(v,A){A===void 0&&(A=this.length-v);for(var I=[],Z=2;Z<arguments.length;Z++)I[Z-2]=arguments[Z];for(var ve=Array.from(this.$items.keys()),Qe=[],b=v;b<v+A;b++)Qe.push(this.$items.get(ve[b])),this.$deleteAt(ve[b]);for(var b=0;b<I.length;b++)this.setAt(v+b,I[b]);return Qe},T.prototype.unshift=function(){for(var v=this,A=[],I=0;I<arguments.length;I++)A[I]=arguments[I];var Z=this.length,ve=A.length,Qe=Array.from(this.$items.values());return A.forEach(function(b,$){v.setAt($,b)}),Qe.forEach(function(b,$){v.setAt(ve+$,b)}),Z+ve},T.prototype.indexOf=function(v,A){return Array.from(this.$items.values()).indexOf(v,A)},T.prototype.lastIndexOf=function(v,A){return A===void 0&&(A=this.length-1),Array.from(this.$items.values()).lastIndexOf(v,A)},T.prototype.every=function(v,A){return Array.from(this.$items.values()).every(v,A)},T.prototype.some=function(v,A){return Array.from(this.$items.values()).some(v,A)},T.prototype.forEach=function(v,A){Array.from(this.$items.values()).forEach(v,A)},T.prototype.map=function(v,A){return Array.from(this.$items.values()).map(v,A)},T.prototype.filter=function(v,A){return Array.from(this.$items.values()).filter(v,A)},T.prototype.reduce=function(v,A){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},T.prototype.reduceRight=function(v,A){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},T.prototype.find=function(v,A){return Array.from(this.$items.values()).find(v,A)},T.prototype.findIndex=function(v,A){return Array.from(this.$items.values()).findIndex(v,A)},T.prototype.fill=function(v,A,I){throw new Error("ArraySchema#fill() not implemented")},T.prototype.copyWithin=function(v,A,I){throw new Error("ArraySchema#copyWithin() not implemented")},T.prototype.toString=function(){return this.$items.toString()},T.prototype.toLocaleString=function(){return this.$items.toLocaleString()},T.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(T,Symbol.species,{get:function(){return T},enumerable:!1,configurable:!0}),T.prototype.entries=function(){return this.$items.entries()},T.prototype.keys=function(){return this.$items.keys()},T.prototype.values=function(){return this.$items.values()},T.prototype.includes=function(v,A){return Array.from(this.$items.values()).includes(v,A)},T.prototype.flatMap=function(v,A){throw new Error("ArraySchema#flatMap() is not supported.")},T.prototype.flat=function(v){throw new Error("ArraySchema#flat() is not supported.")},T.prototype.findLast=function(){var v=Array.from(this.$items.values());return v.findLast.apply(v,arguments)},T.prototype.findLastIndex=function(){var v=Array.from(this.$items.values());return v.findLastIndex.apply(v,arguments)},T.prototype.with=function(v,A){var I=Array.from(this.$items.values());return I[v]=A,new(T.bind.apply(T,u([void 0],I,!1)))},T.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},T.prototype.toSorted=function(v){return Array.from(this.$items.values()).sort(v)},T.prototype.toSpliced=function(v,A){var I=Array.from(this.$items.values());return I.toSpliced.apply(I,arguments)},T.prototype.setIndex=function(v,A){this.$indexes.set(v,A)},T.prototype.getIndex=function(v){return this.$indexes.get(v)},T.prototype.getByIndex=function(v){return this.$items.get(this.$indexes.get(v))},T.prototype.deleteByIndex=function(v){var A=this.$indexes.get(v);this.$items.delete(A),this.$indexes.delete(v)},T.prototype.toArray=function(){return Array.from(this.$items.values())},T.prototype.toJSON=function(){return this.toArray().map(function(v){return typeof v.toJSON=="function"?v.toJSON():v})},T.prototype.clone=function(v){var A;return v?A=new(T.bind.apply(T,u([void 0],Array.from(this.$items.values()),!1))):A=new(T.bind.apply(T,u([void 0],this.map(function(I){return I.$changes?I.clone():I}),!1))),A},T})();function x(T){return T.$proxy=!0,T=new Proxy(T,{get:function(v,A){return typeof A!="symbol"&&typeof v[A]>"u"?v.get(A):v[A]},set:function(v,A,I){return typeof A!="symbol"&&A.indexOf("$")===-1&&A!=="onAdd"&&A!=="onRemove"&&A!=="onChange"?v.set(A,I):v[A]=I,!0},deleteProperty:function(v,A){return v.delete(A),!0}}),T}var S=(function(){function T(v){var A=this;if(this.$changes=new h(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,v)if(v instanceof Map||v instanceof T)v.forEach(function(Z,ve){return A.set(ve,Z)});else for(var I in v)this.set(I,v[I])}return T.prototype.onAdd=function(v,A){return A===void 0&&(A=!0),m(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,v,A?this.$items:void 0)},T.prototype.onRemove=function(v){return m(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,v)},T.prototype.onChange=function(v){return m(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,v)},T.is=function(v){return v.map!==void 0},T.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(T.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(T,Symbol.species,{get:function(){return T},enumerable:!1,configurable:!0}),T.prototype.set=function(v,A){if(A==null)throw new Error("MapSchema#set('".concat(v,"', ").concat(A,"): trying to set ").concat(A," value on '").concat(v,"'."));v=v.toString();var I=typeof this.$changes.indexes[v]<"u",Z=I?this.$changes.indexes[v]:this.$refId++,ve=I?t.OPERATION.REPLACE:t.OPERATION.ADD,Qe=A.$changes!==void 0;if(Qe&&A.$changes.setParent(this,this.$changes.root,Z),!I)this.$changes.indexes[v]=Z,this.$indexes.set(Z,v);else{if(!Qe&&this.$items.get(v)===A)return;Qe&&this.$items.get(v)!==A&&(ve=t.OPERATION.ADD)}return this.$items.set(v,A),this.$changes.change(v,ve),this},T.prototype.get=function(v){return this.$items.get(v)},T.prototype.delete=function(v){return this.$changes.delete(v.toString()),this.$items.delete(v)},T.prototype.clear=function(v){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),v&&d.call(this,v),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},T.prototype.has=function(v){return this.$items.has(v)},T.prototype.forEach=function(v){this.$items.forEach(v)},T.prototype.entries=function(){return this.$items.entries()},T.prototype.keys=function(){return this.$items.keys()},T.prototype.values=function(){return this.$items.values()},Object.defineProperty(T.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),T.prototype.setIndex=function(v,A){this.$indexes.set(v,A)},T.prototype.getIndex=function(v){return this.$indexes.get(v)},T.prototype.getByIndex=function(v){return this.$items.get(this.$indexes.get(v))},T.prototype.deleteByIndex=function(v){var A=this.$indexes.get(v);this.$items.delete(A),this.$indexes.delete(v)},T.prototype.toJSON=function(){var v={};return this.forEach(function(A,I){v[I]=typeof A.toJSON=="function"?A.toJSON():A}),v},T.prototype.clone=function(v){var A;return v?A=Object.assign(new T,this):(A=new T,this.forEach(function(I,Z){I.$changes?A.set(Z,I.clone()):A.set(Z,I)})),A},T})(),C={};function P(T,v){C[T]=v}function D(T){return C[T]}var V=(function(){function T(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return T.create=function(v){var A=new T;return A.schema=Object.assign({},v&&v.schema||{}),A.indexes=Object.assign({},v&&v.indexes||{}),A.fieldsByIndex=Object.assign({},v&&v.fieldsByIndex||{}),A.descriptors=Object.assign({},v&&v.descriptors||{}),A.deprecated=Object.assign({},v&&v.deprecated||{}),A},T.prototype.addField=function(v,A){var I=this.getNextFieldIndex();this.fieldsByIndex[I]=v,this.indexes[v]=I,this.schema[v]=Array.isArray(A)?{array:A[0]}:A},T.prototype.hasField=function(v){return this.indexes[v]!==void 0},T.prototype.addFilter=function(v,A){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[v]]=A,this.indexesWithFilters.push(this.indexes[v]),!0},T.prototype.addChildrenFilter=function(v,A){var I=this.indexes[v],Z=this.schema[v];if(D(Object.keys(Z)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[I]=A,!0;console.warn("@filterChildren: field '".concat(v,"' can't have children. Ignoring filter."))},T.prototype.getChildrenFilter=function(v){return this.childFilters&&this.childFilters[this.indexes[v]]},T.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},T})();function O(T){return T._context&&T._context.useFilters}var F=(function(){function T(){this.types={},this.schemas=new Map,this.useFilters=!1}return T.prototype.has=function(v){return this.schemas.has(v)},T.prototype.get=function(v){return this.types[v]},T.prototype.add=function(v,A){A===void 0&&(A=this.schemas.size),v._definition=V.create(v._definition),v._typeid=A,this.types[A]=v,this.schemas.set(v,A)},T.create=function(v){return v===void 0&&(v={}),function(A){return v.context||(v.context=new T),U(A,v)}},T})(),q=new F;function U(T,v){return v===void 0&&(v={}),function(A,I){var Z=v.context||q,ve=A.constructor;if(ve._context=Z,!T)throw new Error("".concat(ve.name,': @type() reference provided for "').concat(I,`" is undefined. Make sure you don't have any circular dependencies.`));Z.has(ve)||Z.add(ve);var Qe=ve._definition;if(Qe.addField(I,T),Qe.descriptors[I]){if(Qe.deprecated[I])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(I,"' definition on '").concat(ve.name,`'.
Check @type() annotation`))}catch(pe){var b=pe.stack.split(`
`)[4].trim();throw new Error("".concat(pe.message," ").concat(b))}}var $=E.is(T),Q=!$&&S.is(T);if(typeof T!="string"&&!Bt.is(T)){var X=Object.values(T)[0];typeof X!="string"&&!Z.has(X)&&Z.add(X)}if(v.manual){Qe.descriptors[I]={enumerable:!0,configurable:!0,writable:!0};return}var K="_".concat(I);Qe.descriptors[K]={enumerable:!1,configurable:!1,writable:!0},Qe.descriptors[I]={get:function(){return this[K]},set:function(pe){pe!==this[K]&&(pe!=null?($&&!(pe instanceof E)&&(pe=new(E.bind.apply(E,u([void 0],pe,!1)))),Q&&!(pe instanceof S)&&(pe=new S(pe)),pe.$proxy===void 0&&(Q?pe=x(pe):$&&(pe=w(pe))),this.$changes.change(I),pe.$changes&&pe.$changes.setParent(this,this.$changes.root,this._definition.indexes[I])):this[K]!==void 0&&this.$changes.delete(I),this[K]=pe)},enumerable:!0,configurable:!0}}}function L(T){return function(v,A){var I=v.constructor,Z=I._definition;Z.addFilter(A,T)&&(I._context.useFilters=!0)}}function ne(T){return function(v,A){var I=v.constructor,Z=I._definition;Z.addChildrenFilter(A,T)&&(I._context.useFilters=!0)}}function ae(T){return T===void 0&&(T=!0),function(v,A){var I=v.constructor,Z=I._definition;Z.deprecated[A]=!0,T&&(Z.descriptors[A]={get:function(){throw new Error("".concat(A," is deprecated."))},set:function(ve){},enumerable:!1,configurable:!0})}}function j(T,v,A){A===void 0&&(A={}),A.context||(A.context=T._context||A.context||q);for(var I in v)U(v[I],A)(T.prototype,I);return T}function oe(T){for(var v=0,A=0,I=0,Z=T.length;I<Z;I++)v=T.charCodeAt(I),v<128?A+=1:v<2048?A+=2:v<55296||v>=57344?A+=3:(I++,A+=4);return A}function he(T,v,A){for(var I=0,Z=0,ve=A.length;Z<ve;Z++)I=A.charCodeAt(Z),I<128?T[v++]=I:I<2048?(T[v++]=192|I>>6,T[v++]=128|I&63):I<55296||I>=57344?(T[v++]=224|I>>12,T[v++]=128|I>>6&63,T[v++]=128|I&63):(Z++,I=65536+((I&1023)<<10|A.charCodeAt(Z)&1023),T[v++]=240|I>>18,T[v++]=128|I>>12&63,T[v++]=128|I>>6&63,T[v++]=128|I&63)}function _e(T,v){T.push(v&255)}function de(T,v){T.push(v&255)}function G(T,v){T.push(v&255),T.push(v>>8&255)}function ue(T,v){T.push(v&255),T.push(v>>8&255)}function te(T,v){T.push(v&255),T.push(v>>8&255),T.push(v>>16&255),T.push(v>>24&255)}function z(T,v){var A=v>>24,I=v>>16,Z=v>>8,ve=v;T.push(ve&255),T.push(Z&255),T.push(I&255),T.push(A&255)}function le(T,v){var A=Math.floor(v/Math.pow(2,32)),I=v>>>0;z(T,I),z(T,A)}function Ve(T,v){var A=v/Math.pow(2,32)>>0,I=v>>>0;z(T,I),z(T,A)}function re(T,v){Ye(T,v)}function ye(T,v){ee(T,v)}var Re=new Int32Array(2),Ee=new Float32Array(Re.buffer),$e=new Float64Array(Re.buffer);function Ye(T,v){Ee[0]=v,te(T,Re[0])}function ee(T,v){$e[0]=v,te(T,Re[0]),te(T,Re[1])}function Lt(T,v){return de(T,v?1:0)}function it(T,v){v||(v="");var A=oe(v),I=0;if(A<32)T.push(A|160),I=1;else if(A<256)T.push(217),de(T,A),I=2;else if(A<65536)T.push(218),ue(T,A),I=3;else if(A<4294967296)T.push(219),z(T,A),I=5;else throw new Error("String too long");return he(T,T.length,v),I+A}function ht(T,v){if(isNaN(v))return ht(T,0);if(isFinite(v)){if(v!==(v|0))return T.push(203),ee(T,v),9}else return ht(T,v>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return v>=0?v<128?(de(T,v),1):v<256?(T.push(204),de(T,v),2):v<65536?(T.push(205),ue(T,v),3):v<4294967296?(T.push(206),z(T,v),5):(T.push(207),Ve(T,v),9):v>=-32?(T.push(224|v+32),1):v>=-128?(T.push(208),_e(T,v),2):v>=-32768?(T.push(209),G(T,v),3):v>=-2147483648?(T.push(210),te(T,v),5):(T.push(211),le(T,v),9)}var st=Object.freeze({__proto__:null,boolean:Lt,float32:re,float64:ye,int16:G,int32:te,int64:le,int8:_e,number:ht,string:it,uint16:ue,uint32:z,uint64:Ve,uint8:de,utf8Write:he,writeFloat32:Ye,writeFloat64:ee});function wt(T,v,A){for(var I="",Z=0,ve=v,Qe=v+A;ve<Qe;ve++){var b=T[ve];if((b&128)===0){I+=String.fromCharCode(b);continue}if((b&224)===192){I+=String.fromCharCode((b&31)<<6|T[++ve]&63);continue}if((b&240)===224){I+=String.fromCharCode((b&15)<<12|(T[++ve]&63)<<6|(T[++ve]&63)<<0);continue}if((b&248)===240){Z=(b&7)<<18|(T[++ve]&63)<<12|(T[++ve]&63)<<6|(T[++ve]&63)<<0,Z>=65536?(Z-=65536,I+=String.fromCharCode((Z>>>10)+55296,(Z&1023)+56320)):I+=String.fromCharCode(Z);continue}console.error("Invalid byte "+b.toString(16))}return I}function vt(T,v){return _t(T,v)<<24>>24}function _t(T,v){return T[v.offset++]}function Ot(T,v){return B(T,v)<<16>>16}function B(T,v){return T[v.offset++]|T[v.offset++]<<8}function N(T,v){return T[v.offset++]|T[v.offset++]<<8|T[v.offset++]<<16|T[v.offset++]<<24}function fe(T,v){return N(T,v)>>>0}function xe(T,v){return Ne(T,v)}function Ce(T,v){return Ke(T,v)}function Pe(T,v){var A=fe(T,v),I=N(T,v)*Math.pow(2,32);return I+A}function tt(T,v){var A=fe(T,v),I=fe(T,v)*Math.pow(2,32);return I+A}var Fe=new Int32Array(2),ke=new Float32Array(Fe.buffer),dt=new Float64Array(Fe.buffer);function Ne(T,v){return Fe[0]=N(T,v),ke[0]}function Ke(T,v){return Fe[0]=N(T,v),Fe[1]=N(T,v),dt[0]}function xt(T,v){return _t(T,v)>0}function ot(T,v){var A=T[v.offset++],I;A<192?I=A&31:A===217?I=_t(T,v):A===218?I=B(T,v):A===219&&(I=fe(T,v));var Z=wt(T,v.offset,I);return v.offset+=I,Z}function We(T,v){var A=T[v.offset];return A<192&&A>160||A===217||A===218||A===219}function ut(T,v){var A=T[v.offset++];if(A<128)return A;if(A===202)return Ne(T,v);if(A===203)return Ke(T,v);if(A===204)return _t(T,v);if(A===205)return B(T,v);if(A===206)return fe(T,v);if(A===207)return tt(T,v);if(A===208)return vt(T,v);if(A===209)return Ot(T,v);if(A===210)return N(T,v);if(A===211)return Pe(T,v);if(A>223)return(255-A+1)*-1}function Et(T,v){var A=T[v.offset];return A<128||A>=202&&A<=211}function zt(T,v){return T[v.offset]<160}function pt(T,v){return T[v.offset-1]===f&&(T[v.offset]<128||T[v.offset]>=202&&T[v.offset]<=211)}var J=Object.freeze({__proto__:null,arrayCheck:zt,boolean:xt,float32:xe,float64:Ce,int16:Ot,int32:N,int64:Pe,int8:vt,number:ut,numberCheck:Et,readFloat32:Ne,readFloat64:Ke,string:ot,stringCheck:We,switchStructureCheck:pt,uint16:B,uint32:fe,uint64:tt,uint8:_t}),Se=(function(){function T(v){var A=this;this.$changes=new h(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,v&&v.forEach(function(I){return A.add(I)})}return T.prototype.onAdd=function(v,A){return A===void 0&&(A=!0),m(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,v,A?this.$items:void 0)},T.prototype.onRemove=function(v){return m(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,v)},T.prototype.onChange=function(v){return m(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,v)},T.is=function(v){return v.collection!==void 0},T.prototype.add=function(v){var A=this.$refId++,I=v.$changes!==void 0;return I&&v.$changes.setParent(this,this.$changes.root,A),this.$changes.indexes[A]=A,this.$indexes.set(A,A),this.$items.set(A,v),this.$changes.change(A),A},T.prototype.at=function(v){var A=Array.from(this.$items.keys())[v];return this.$items.get(A)},T.prototype.entries=function(){return this.$items.entries()},T.prototype.delete=function(v){for(var A=this.$items.entries(),I,Z;(Z=A.next())&&!Z.done;)if(v===Z.value[1]){I=Z.value[0];break}return I===void 0?!1:(this.$changes.delete(I),this.$indexes.delete(I),this.$items.delete(I))},T.prototype.clear=function(v){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),v&&d.call(this,v),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},T.prototype.has=function(v){return Array.from(this.$items.values()).some(function(A){return A===v})},T.prototype.forEach=function(v){var A=this;this.$items.forEach(function(I,Z,ve){return v(I,Z,A)})},T.prototype.values=function(){return this.$items.values()},Object.defineProperty(T.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),T.prototype.setIndex=function(v,A){this.$indexes.set(v,A)},T.prototype.getIndex=function(v){return this.$indexes.get(v)},T.prototype.getByIndex=function(v){return this.$items.get(this.$indexes.get(v))},T.prototype.deleteByIndex=function(v){var A=this.$indexes.get(v);this.$items.delete(A),this.$indexes.delete(v)},T.prototype.toArray=function(){return Array.from(this.$items.values())},T.prototype.toJSON=function(){var v=[];return this.forEach(function(A,I){v.push(typeof A.toJSON=="function"?A.toJSON():A)}),v},T.prototype.clone=function(v){var A;return v?A=Object.assign(new T,this):(A=new T,this.forEach(function(I){I.$changes?A.add(I.clone()):A.add(I)})),A},T})(),ge=(function(){function T(v){var A=this;this.$changes=new h(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,v&&v.forEach(function(I){return A.add(I)})}return T.prototype.onAdd=function(v,A){return A===void 0&&(A=!0),m(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,v,A?this.$items:void 0)},T.prototype.onRemove=function(v){return m(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,v)},T.prototype.onChange=function(v){return m(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,v)},T.is=function(v){return v.set!==void 0},T.prototype.add=function(v){var A,I;if(this.has(v))return!1;var Z=this.$refId++;v.$changes!==void 0&&v.$changes.setParent(this,this.$changes.root,Z);var ve=(I=(A=this.$changes.indexes[Z])===null||A===void 0?void 0:A.op)!==null&&I!==void 0?I:t.OPERATION.ADD;return this.$changes.indexes[Z]=Z,this.$indexes.set(Z,Z),this.$items.set(Z,v),this.$changes.change(Z,ve),Z},T.prototype.entries=function(){return this.$items.entries()},T.prototype.delete=function(v){for(var A=this.$items.entries(),I,Z;(Z=A.next())&&!Z.done;)if(v===Z.value[1]){I=Z.value[0];break}return I===void 0?!1:(this.$changes.delete(I),this.$indexes.delete(I),this.$items.delete(I))},T.prototype.clear=function(v){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),v&&d.call(this,v),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},T.prototype.has=function(v){for(var A=this.$items.values(),I=!1,Z;(Z=A.next())&&!Z.done;)if(v===Z.value){I=!0;break}return I},T.prototype.forEach=function(v){var A=this;this.$items.forEach(function(I,Z,ve){return v(I,Z,A)})},T.prototype.values=function(){return this.$items.values()},Object.defineProperty(T.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),T.prototype.setIndex=function(v,A){this.$indexes.set(v,A)},T.prototype.getIndex=function(v){return this.$indexes.get(v)},T.prototype.getByIndex=function(v){return this.$items.get(this.$indexes.get(v))},T.prototype.deleteByIndex=function(v){var A=this.$indexes.get(v);this.$items.delete(A),this.$indexes.delete(v)},T.prototype.toArray=function(){return Array.from(this.$items.values())},T.prototype.toJSON=function(){var v=[];return this.forEach(function(A,I){v.push(typeof A.toJSON=="function"?A.toJSON():A)}),v},T.prototype.clone=function(v){var A;return v?A=Object.assign(new T,this):(A=new T,this.forEach(function(I){I.$changes?A.add(I.clone()):A.add(I)})),A},T})(),Ue=(function(){function T(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return T.prototype.addRefId=function(v){this.refIds.has(v)||(this.refIds.add(v),this.containerIndexes.set(v,new Set))},T.get=function(v){return v.$filterState===void 0&&(v.$filterState=new T),v.$filterState},T})(),ze=(function(){function T(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return T.prototype.getNextUniqueId=function(){return this.nextUniqueId++},T.prototype.addRef=function(v,A,I){I===void 0&&(I=!0),this.refs.set(v,A),I&&(this.refCounts[v]=(this.refCounts[v]||0)+1)},T.prototype.removeRef=function(v){var A=this.refCounts[v];if(A===void 0){console.warn("trying to remove reference ".concat(v," that doesn't exist"));return}if(A===0){console.warn("trying to remove reference ".concat(v," with 0 refCount"));return}this.refCounts[v]=A-1,this.deletedRefs.add(v)},T.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},T.prototype.garbageCollectDeletedRefs=function(){var v=this;this.deletedRefs.forEach(function(A){if(!(v.refCounts[A]>0)){var I=v.refs.get(A);if(I instanceof Bt)for(var Z in I._definition.schema)typeof I._definition.schema[Z]!="string"&&I[Z]&&I[Z].$changes&&v.removeRef(I[Z].$changes.refId);else{var ve=I.$changes.parent._definition,Qe=ve.schema[ve.fieldsByIndex[I.$changes.parentIndex]];typeof Object.values(Qe)[0]=="function"&&Array.from(I.values()).forEach(function(b){return v.removeRef(b.$changes.refId)})}v.refs.delete(A),delete v.refCounts[A]}}),this.deletedRefs.clear()},T})(),Tt=(function(T){o(v,T);function v(){return T!==null&&T.apply(this,arguments)||this}return v})(Error);function It(T,v,A,I){var Z,ve=!1;switch(v){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":Z="number",isNaN(T)&&console.log('trying to encode "NaN" in '.concat(A.constructor.name,"#").concat(I));break;case"string":Z="string",ve=!0;break;case"boolean":return}if(typeof T!==Z&&(!ve||ve&&T!==null)){var Qe="'".concat(JSON.stringify(T),"'").concat(T&&T.constructor&&" (".concat(T.constructor.name,")")||"");throw new Tt("a '".concat(Z,"' was expected, but ").concat(Qe," was provided in ").concat(A.constructor.name,"#").concat(I))}}function Ft(T,v,A,I){if(!(T instanceof v))throw new Tt("a '".concat(v.name,"' was expected, but '").concat(T.constructor.name,"' was provided in ").concat(A.constructor.name,"#").concat(I))}function rn(T,v,A,I,Z){It(A,T,I,Z);var ve=st[T];if(ve)ve(v,A);else throw new Tt("a '".concat(T,"' was expected, but ").concat(A," was provided in ").concat(I.constructor.name,"#").concat(Z))}function Rt(T,v,A){return J[T](v,A)}var Bt=(function(){function T(){for(var v=[],A=0;A<arguments.length;A++)v[A]=arguments[A];Object.defineProperties(this,{$changes:{value:new h(this,void 0,new ze),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var I=this._definition.descriptors;I&&Object.defineProperties(this,I),v[0]&&this.assign(v[0])}return T.onError=function(v){console.error(v)},T.is=function(v){return v._definition&&v._definition.schema!==void 0},T.prototype.onChange=function(v){return m(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,v)},T.prototype.onRemove=function(v){return m(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,v)},T.prototype.assign=function(v){return Object.assign(this,v),this},Object.defineProperty(T.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),T.prototype.setDirty=function(v,A){this.$changes.change(v,A)},T.prototype.listen=function(v,A,I){var Z=this;return I===void 0&&(I=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[v]||(this.$callbacks[v]=[]),this.$callbacks[v].push(A),I&&this[v]!==void 0&&A(this[v],void 0),function(){return _(Z.$callbacks[v],Z.$callbacks[v].indexOf(A))}},T.prototype.decode=function(v,A,I){A===void 0&&(A={offset:0}),I===void 0&&(I=this);var Z=[],ve=this.$changes.root,Qe=v.length,b=0;for(ve.refs.set(b,this);A.offset<Qe;){var $=v[A.offset++];if($==f){b=ut(v,A);var Q=ve.refs.get(b);if(!Q)throw new Error('"refId" not found: '.concat(b));I=Q;continue}var X=I.$changes,K=I._definition!==void 0,pe=K?$>>6<<6:$;if(pe===t.OPERATION.CLEAR){I.clear(Z);continue}var Ae=K?$%(pe||255):ut(v,A),Me=K?I._definition.fieldsByIndex[Ae]:"",De=X.getType(Ae),me=void 0,be=void 0,rt=void 0;if(K?be=I["_".concat(Me)]:(be=I.getByIndex(Ae),(pe&t.OPERATION.ADD)===t.OPERATION.ADD?(rt=I instanceof S?ot(v,A):Ae,I.setIndex(Ae,rt)):rt=I.getIndex(Ae)),(pe&t.OPERATION.DELETE)===t.OPERATION.DELETE&&(pe!==t.OPERATION.DELETE_AND_ADD&&I.deleteByIndex(Ae),be&&be.$changes&&ve.removeRef(be.$changes.refId),me=null),Me===void 0){console.warn("@colyseus/schema: definition mismatch");for(var mt={offset:A.offset};A.offset<Qe&&!(pt(v,A)&&(mt.offset=A.offset+1,ve.refs.has(ut(v,mt))));)A.offset++;continue}else if(pe!==t.OPERATION.DELETE)if(T.is(De)){var nt=ut(v,A);if(me=ve.refs.get(nt),pe!==t.OPERATION.REPLACE){var at=this.getSchemaType(v,A,De);me||(me=this.createTypeInstance(at),me.$changes.refId=nt,be&&(me.$callbacks=be.$callbacks,be.$changes.refId&&nt!==be.$changes.refId&&ve.removeRef(be.$changes.refId))),ve.addRef(nt,me,me!==be)}}else if(typeof De=="string")me=Rt(De,v,A);else{var an=D(Object.keys(De)[0]),yt=ut(v,A),et=ve.refs.has(yt)?be||ve.refs.get(yt):new an.constructor;if(me=et.clone(!0),me.$changes.refId=yt,be&&(me.$callbacks=be.$callbacks,be.$changes.refId&&yt!==be.$changes.refId)){ve.removeRef(be.$changes.refId);for(var Pt=be.entries(),gt=void 0;(gt=Pt.next())&&!gt.done;){var jt=gt.value,Fn=jt[0],pi=jt[1];Z.push({refId:yt,op:t.OPERATION.DELETE,field:Fn,value:void 0,previousValue:pi})}}ve.addRef(yt,me,et!==be)}if(me!=null){if(me.$changes&&me.$changes.setParent(X.ref,X.root,Ae),I instanceof T)I[Me]=me;else if(I instanceof S){var Fn=rt;I.$items.set(Fn,me),I.$changes.allChanges.add(Ae)}else if(I instanceof E)I.setAt(Ae,me);else if(I instanceof Se){var kn=I.add(me);I.setIndex(Ae,kn)}else if(I instanceof ge){var kn=I.add(me);kn!==!1&&I.setIndex(Ae,kn)}}be!==me&&Z.push({refId:b,op:pe,field:Me,dynamicIndex:rt,value:me,previousValue:be})}return this._triggerChanges(Z),ve.garbageCollectDeletedRefs(),Z},T.prototype.encode=function(v,A,I){v===void 0&&(v=!1),A===void 0&&(A=[]),I===void 0&&(I=!1);for(var Z=this.$changes,ve=new WeakSet,Qe=[Z],b=1,$=0;$<b;$++){var Q=Qe[$],X=Q.ref,K=X instanceof T;Q.ensureRefId(),ve.add(Q),Q!==Z&&(Q.changed||v)&&(de(A,f),ht(A,Q.refId));for(var pe=Array.from(v?Q.allChanges:Q.changes.values()),Ae=0,Me=pe.length;Ae<Me;Ae++){var De=v?{op:t.OPERATION.ADD,index:pe[Ae]}:pe[Ae],me=De.index,be=K?X._definition.fieldsByIndex&&X._definition.fieldsByIndex[me]:me,rt=A.length;if(De.op!==t.OPERATION.TOUCH)if(K)de(A,me|De.op);else{if(de(A,De.op),De.op===t.OPERATION.CLEAR)continue;ht(A,me)}if(!K&&(De.op&t.OPERATION.ADD)==t.OPERATION.ADD&&X instanceof S){var mt=Q.ref.$indexes.get(me);it(A,mt)}if(De.op!==t.OPERATION.DELETE){var nt=Q.getType(me),at=Q.getValue(me);if(at&&at.$changes&&!ve.has(at.$changes)&&(Qe.push(at.$changes),at.$changes.ensureRefId(),b++),De.op!==t.OPERATION.TOUCH){if(T.is(nt))Ft(at,nt,X,be),ht(A,at.$changes.refId),(De.op&t.OPERATION.ADD)===t.OPERATION.ADD&&this.tryEncodeTypeId(A,nt,at.constructor);else if(typeof nt=="string")rn(nt,A,at,X,be);else{var an=D(Object.keys(nt)[0]);Ft(X["_".concat(be)],an.constructor,X,be),ht(A,at.$changes.refId)}I&&Q.cache(me,A.slice(rt))}}}!v&&!I&&Q.discard()}return A},T.prototype.encodeAll=function(v){return this.encode(!0,[],v)},T.prototype.applyFilters=function(v,A){var I,Z;A===void 0&&(A=!1);for(var ve=this,Qe=new Set,b=Ue.get(v),$=[this.$changes],Q=1,X=[],K=function(Ae){var Me=$[Ae];if(Qe.has(Me.refId))return"continue";var De=Me.ref,me=De instanceof T;de(X,f),ht(X,Me.refId);var be=b.refIds.has(Me),rt=A||!be;b.addRefId(Me);var mt=b.containerIndexes.get(Me),nt=Array.from(rt?Me.allChanges:Me.changes.values());if(!A&&me&&De._definition.indexesWithFilters){var at=De._definition.indexesWithFilters;at.forEach(function(Ht){!mt.has(Ht)&&Me.allChanges.has(Ht)&&(rt?nt.push(Ht):nt.push({op:t.OPERATION.ADD,index:Ht}))})}for(var an=0,yt=nt.length;an<yt;an++){var et=rt?{op:t.OPERATION.ADD,index:nt[an]}:nt[an];if(et.op===t.OPERATION.CLEAR){de(X,et.op);continue}var Pt=et.index;if(et.op===t.OPERATION.DELETE){me?de(X,et.op|Pt):(de(X,et.op),ht(X,Pt));continue}var gt=Me.getValue(Pt),jt=Me.getType(Pt);if(me){var Fn=De._definition.filters&&De._definition.filters[Pt];if(Fn&&!Fn.call(De,v,gt,ve)){gt&&gt.$changes&&Qe.add(gt.$changes.refId);continue}}else{var pi=Me.parent,Fn=Me.getChildrenFilter();if(Fn&&!Fn.call(pi,v,De.$indexes.get(Pt),gt,ve)){gt&&gt.$changes&&Qe.add(gt.$changes.refId);continue}}if(gt.$changes&&($.push(gt.$changes),Q++),et.op!==t.OPERATION.TOUCH)if(et.op===t.OPERATION.ADD||me)X.push.apply(X,(I=Me.caches[Pt])!==null&&I!==void 0?I:[]),mt.add(Pt);else if(mt.has(Pt))X.push.apply(X,(Z=Me.caches[Pt])!==null&&Z!==void 0?Z:[]);else{if(mt.add(Pt),de(X,t.OPERATION.ADD),ht(X,Pt),De instanceof S){var kn=Me.ref.$indexes.get(Pt);it(X,kn)}gt.$changes?ht(X,gt.$changes.refId):st[jt](X,gt)}else if(gt.$changes&&!me){if(de(X,t.OPERATION.ADD),ht(X,Pt),De instanceof S){var kn=Me.ref.$indexes.get(Pt);it(X,kn)}ht(X,gt.$changes.refId)}}},pe=0;pe<Q;pe++)K(pe);return X},T.prototype.clone=function(){var v,A=new this.constructor,I=this._definition.schema;for(var Z in I)typeof this[Z]=="object"&&typeof((v=this[Z])===null||v===void 0?void 0:v.clone)=="function"?A[Z]=this[Z].clone():A[Z]=this[Z];return A},T.prototype.toJSON=function(){var v=this._definition.schema,A=this._definition.deprecated,I={};for(var Z in v)!A[Z]&&this[Z]!==null&&typeof this[Z]<"u"&&(I[Z]=typeof this[Z].toJSON=="function"?this[Z].toJSON():this["_".concat(Z)]);return I},T.prototype.discardAllChanges=function(){this.$changes.discardAll()},T.prototype.getByIndex=function(v){return this[this._definition.fieldsByIndex[v]]},T.prototype.deleteByIndex=function(v){this[this._definition.fieldsByIndex[v]]=void 0},T.prototype.tryEncodeTypeId=function(v,A,I){A._typeid!==I._typeid&&(de(v,p),ht(v,I._typeid))},T.prototype.getSchemaType=function(v,A,I){var Z;return v[A.offset]===p&&(A.offset++,Z=this.constructor._context.get(ut(v,A))),Z||I},T.prototype.createTypeInstance=function(v){var A=new v;return A.$changes.root=this.$changes.root,A},T.prototype._triggerChanges=function(v){for(var A,I,Z,ve,Qe,b,$,Q,X,K=new Set,pe=this.$changes.root.refs,Ae=function(De){var me=v[De],be=me.refId,rt=pe.get(be),mt=rt.$callbacks;if((me.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&me.previousValue instanceof T&&((I=(A=me.previousValue.$callbacks)===null||A===void 0?void 0:A[t.OPERATION.DELETE])===null||I===void 0||I.forEach(function(nt){return nt()})),!mt)return"continue";if(rt instanceof T){if(!K.has(be))try{(Z=mt==null?void 0:mt[t.OPERATION.REPLACE])===null||Z===void 0||Z.forEach(function(nt){return nt()})}catch(nt){T.onError(nt)}try{mt.hasOwnProperty(me.field)&&((ve=mt[me.field])===null||ve===void 0||ve.forEach(function(nt){return nt(me.value,me.previousValue)}))}catch(nt){T.onError(nt)}}else me.op===t.OPERATION.ADD&&me.previousValue===void 0?(Qe=mt[t.OPERATION.ADD])===null||Qe===void 0||Qe.forEach(function(nt){var at;return nt(me.value,(at=me.dynamicIndex)!==null&&at!==void 0?at:me.field)}):me.op===t.OPERATION.DELETE?me.previousValue!==void 0&&((b=mt[t.OPERATION.DELETE])===null||b===void 0||b.forEach(function(nt){var at;return nt(me.previousValue,(at=me.dynamicIndex)!==null&&at!==void 0?at:me.field)})):me.op===t.OPERATION.DELETE_AND_ADD&&(me.previousValue!==void 0&&(($=mt[t.OPERATION.DELETE])===null||$===void 0||$.forEach(function(nt){var at;return nt(me.previousValue,(at=me.dynamicIndex)!==null&&at!==void 0?at:me.field)})),(Q=mt[t.OPERATION.ADD])===null||Q===void 0||Q.forEach(function(nt){var at;return nt(me.value,(at=me.dynamicIndex)!==null&&at!==void 0?at:me.field)})),me.value!==me.previousValue&&((X=mt[t.OPERATION.REPLACE])===null||X===void 0||X.forEach(function(nt){var at;return nt(me.value,(at=me.dynamicIndex)!==null&&at!==void 0?at:me.field)}));K.add(be)},Me=0;Me<v.length;Me++)Ae(Me)},T._definition=V.create(),T})();function on(T){for(var v=[T.$changes],A=1,I={},Z=I,ve=function(b){var $=v[b];$.changes.forEach(function(Q){var X=$.ref,K=Q.index,pe=X._definition?X._definition.fieldsByIndex[K]:X.$indexes.get(K);Z[pe]=$.getValue(K)})},Qe=0;Qe<A;Qe++)ve(Qe);return I}var wn={context:new F},Pi=(function(T){o(v,T);function v(){return T!==null&&T.apply(this,arguments)||this}return l([U("string",wn)],v.prototype,"name",void 0),l([U("string",wn)],v.prototype,"type",void 0),l([U("number",wn)],v.prototype,"referencedType",void 0),v})(Bt),ri=(function(T){o(v,T);function v(){var A=T!==null&&T.apply(this,arguments)||this;return A.fields=new E,A}return l([U("number",wn)],v.prototype,"id",void 0),l([U([Pi],wn)],v.prototype,"fields",void 0),v})(Bt),lr=(function(T){o(v,T);function v(){var A=T!==null&&T.apply(this,arguments)||this;return A.types=new E,A}return v.encode=function(A){var I,Z=A.constructor,ve=new v;ve.rootType=Z._typeid;var Qe=function(X,K){for(var pe in K){var Ae=new Pi;Ae.name=pe;var Me=void 0;if(typeof K[pe]=="string")Me=K[pe];else{var De=K[pe],me=void 0;Bt.is(De)?(Me="ref",me=K[pe]):(Me=Object.keys(De)[0],typeof De[Me]=="string"?Me+=":"+De[Me]:me=De[Me]),Ae.referencedType=me?me._typeid:-1}Ae.type=Me,X.fields.push(Ae)}ve.types.push(X)},b=(I=Z._context)===null||I===void 0?void 0:I.types;for(var $ in b){var Q=new ri;Q.id=Number($),Qe(Q,b[$]._definition.schema)}return ve.encodeAll()},v.decode=function(A,I){var Z=new F,ve=new v;ve.decode(A,I);var Qe=ve.types.reduce(function(K,pe){var Ae=(function(De){o(me,De);function me(){return De!==null&&De.apply(this,arguments)||this}return me})(Bt),Me=pe.id;return K[Me]=Ae,Z.add(Ae,Me),K},{});ve.types.forEach(function(K){var pe=Qe[K.id];K.fields.forEach(function(Ae){var Me;if(Ae.referencedType!==void 0){var De=Ae.type,me=Qe[Ae.referencedType];if(!me){var be=Ae.type.split(":");De=be[0],me=be[1]}De==="ref"?U(me,{context:Z})(pe.prototype,Ae.name):U((Me={},Me[De]=me,Me),{context:Z})(pe.prototype,Ae.name)}else U(Ae.type,{context:Z})(pe.prototype,Ae.name)})});var b=Qe[ve.rootType],$=new b;for(var Q in b._definition.schema){var X=b._definition.schema[Q];typeof X!="string"&&($[Q]=typeof X=="function"?new X:new(D(Object.keys(X)[0])).constructor)}return $},l([U([ri],wn)],v.prototype,"types",void 0),l([U("number",wn)],v.prototype,"rootType",void 0),v})(Bt);P("map",{constructor:S}),P("array",{constructor:E}),P("set",{constructor:ge}),P("collection",{constructor:Se}),t.ArraySchema=E,t.CollectionSchema=Se,t.Context=F,t.MapSchema=S,t.Reflection=lr,t.ReflectionField=Pi,t.ReflectionType=ri,t.Schema=Bt,t.SchemaDefinition=V,t.SetSchema=ge,t.decode=J,t.defineTypes=j,t.deprecated=ae,t.dumpChanges=on,t.encode=st,t.filter=L,t.filterChildren=ne,t.hasFilter=O,t.registerType=P,t.type=U}))})(ua,ua.exports)),ua.exports}var zg;function k0(){if(zg)return Ei;zg=1;var s=Ei&&Ei.__createBinding||(Object.create?(function(_,y,w,E){E===void 0&&(E=w);var x=Object.getOwnPropertyDescriptor(y,w);(!x||("get"in x?!y.__esModule:x.writable||x.configurable))&&(x={enumerable:!0,get:function(){return y[w]}}),Object.defineProperty(_,E,x)}):(function(_,y,w,E){E===void 0&&(E=w),_[E]=y[w]})),e=Ei&&Ei.__setModuleDefault||(Object.create?(function(_,y){Object.defineProperty(_,"default",{enumerable:!0,value:y})}):function(_,y){_.default=y}),t=Ei&&Ei.__importStar||function(_){if(_&&_.__esModule)return _;var y={};if(_!=null)for(var w in _)w!=="default"&&Object.prototype.hasOwnProperty.call(_,w)&&s(y,_,w);return e(y,_),y};Object.defineProperty(Ei,"__esModule",{value:!0}),Ei.Room=void 0;const i=t(U1()),o=k1(),l=I0(),u=N0(),f=U0(),p=z1(),h=O0(),m=yh();let d=class F0{constructor(y,w){this.onStateChange=(0,p.createSignal)(),this.onError=(0,p.createSignal)(),this.onLeave=(0,p.createSignal)(),this.onJoin=(0,p.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,f.createNanoEvents)(),this.roomId=null,this.name=y,w&&(this.serializer=new((0,u.getSerializer)("schema")),this.rootSchema=w,this.serializer.state=new w),this.onError((E,x)=>{var S;return(S=console.warn)===null||S===void 0?void 0:S.call(console,`colyseus.js - onError => (${E}) ${x}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(y,w,E=this,x){const S=new o.Connection;E.connection=S,S.events.onmessage=F0.prototype.onMessageCallback.bind(E),S.events.onclose=function(C){var P;if(!E.hasJoined){(P=console.warn)===null||P===void 0||P.call(console,`Room connection was closed unexpectedly (${C.code}): ${C.reason}`),E.onError.invoke(C.code,C.reason);return}C.code===m.CloseCode.DEVMODE_RESTART&&w?w():(E.onLeave.invoke(C.code,C.reason),E.destroy())},S.events.onerror=function(C){var P;(P=console.warn)===null||P===void 0||P.call(console,`Room, onError (${C.code}): ${C.reason}`),E.onError.invoke(C.code,C.reason)},S.connect(y,x)}leave(y=!0){return new Promise(w=>{this.onLeave(E=>w(E)),this.connection?y?this.connection.send([l.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(m.CloseCode.CONSENTED)})}onMessage(y,w){return this.onMessageHandlers.on(this.getMessageHandlerKey(y),w)}send(y,w){const E=[l.Protocol.ROOM_DATA];typeof y=="string"?h.encode.string(E,y):h.encode.number(E,y);let x;if(w!==void 0){const S=i.encode(w);x=new Uint8Array(E.length+S.byteLength),x.set(new Uint8Array(E),0),x.set(new Uint8Array(S),E.length)}else x=new Uint8Array(E);this.connection.send(x.buffer)}sendBytes(y,w){const E=[l.Protocol.ROOM_DATA_BYTES];typeof y=="string"?h.encode.string(E,y):h.encode.number(E,y);let x;x=new Uint8Array(E.length+(w.byteLength||w.length)),x.set(new Uint8Array(E),0),x.set(new Uint8Array(w),E.length),this.connection.send(x.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(y){const w=Array.from(new Uint8Array(y.data)),E=w[0];if(E===l.Protocol.JOIN_ROOM){let x=1;const S=(0,l.utf8Read)(w,x);if(x+=(0,l.utf8Length)(S),this.serializerId=(0,l.utf8Read)(w,x),x+=(0,l.utf8Length)(this.serializerId),!this.serializer){const C=(0,u.getSerializer)(this.serializerId);this.serializer=new C}w.length>x&&this.serializer.handshake&&this.serializer.handshake(w,{offset:x}),this.reconnectionToken=`${this.roomId}:${S}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([l.Protocol.JOIN_ROOM])}else if(E===l.Protocol.ERROR){const x={offset:1},S=h.decode.number(w,x),C=h.decode.string(w,x);this.onError.invoke(S,C)}else if(E===l.Protocol.LEAVE_ROOM)this.leave();else if(E===l.Protocol.ROOM_DATA_SCHEMA){const x={offset:1},C=this.serializer.getState().constructor._context.get(h.decode.number(w,x)),P=new C;P.decode(w,x),this.dispatchMessage(C,P)}else if(E===l.Protocol.ROOM_STATE)w.shift(),this.setState(w);else if(E===l.Protocol.ROOM_STATE_PATCH)w.shift(),this.patch(w);else if(E===l.Protocol.ROOM_DATA){const x={offset:1},S=h.decode.stringCheck(w,x)?h.decode.string(w,x):h.decode.number(w,x),C=w.length>x.offset?i.decode(y.data,x.offset):void 0;this.dispatchMessage(S,C)}else if(E===l.Protocol.ROOM_DATA_BYTES){const x={offset:1},S=h.decode.stringCheck(w,x)?h.decode.string(w,x):h.decode.number(w,x);this.dispatchMessage(S,new Uint8Array(w.slice(x.offset)))}}setState(y){this.serializer.setState(y),this.onStateChange.invoke(this.serializer.getState())}patch(y){this.serializer.patch(y),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(y,w){var E;const x=this.getMessageHandlerKey(y);this.onMessageHandlers.events[x]?this.onMessageHandlers.emit(x,w):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",y,w):(E=console.warn)===null||E===void 0||E.call(console,`colyseus.js: onMessage() not registered for type '${y}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(y){switch(typeof y){case"function":return`$${y._typeid}`;case"string":return y;case"number":return`i${y}`;default:throw new Error("invalid message type.")}}};return Ei.Room=d,Ei}var Ti={};function Bg(s,e){e.headers=s.headers||{},e.statusMessage=s.statusText,e.statusCode=s.status,e.data=s.response}function Ri(s,e,t){return new Promise(function(i,o){t=t||{};var l=new XMLHttpRequest,u,f,p,h=t.body,m=t.headers||{};t.timeout&&(l.timeout=t.timeout),l.ontimeout=l.onerror=function(d){d.timeout=d.type=="timeout",o(d)},l.open(s,e.href||e),l.onload=function(){for(p=l.getAllResponseHeaders().trim().split(/[\r\n]+/),Bg(l,l);f=p.shift();)f=f.split(": "),l.headers[f.shift().toLowerCase()]=f.join(": ");if(f=l.headers["content-type"],f&&~f.indexOf("application/json"))try{l.data=JSON.parse(l.data,t.reviver)}catch(d){return Bg(l,d),o(d)}(l.status>=400?o:i)(l)},typeof FormData<"u"&&h instanceof FormData||h&&typeof h=="object"&&(m["content-type"]="application/json",h=JSON.stringify(h)),l.withCredentials=!!t.withCredentials;for(u in m)l.setRequestHeader(u,m[u]);l.send(h)})}var H1=Ri.bind(Ri,"GET"),V1=Ri.bind(Ri,"POST"),G1=Ri.bind(Ri,"PATCH"),W1=Ri.bind(Ri,"DELETE"),$1=Ri.bind(Ri,"PUT");const X1=Object.freeze(Object.defineProperty({__proto__:null,del:W1,get:H1,patch:G1,post:V1,put:$1,send:Ri},Symbol.toStringTag,{value:"Module"})),q1=S_(X1);var Hg;function j1(){if(Hg)return Ti;Hg=1;var s=Ti&&Ti.__createBinding||(Object.create?(function(u,f,p,h){h===void 0&&(h=p);var m=Object.getOwnPropertyDescriptor(f,p);(!m||("get"in m?!f.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return f[p]}}),Object.defineProperty(u,h,m)}):(function(u,f,p,h){h===void 0&&(h=p),u[h]=f[p]})),e=Ti&&Ti.__setModuleDefault||(Object.create?(function(u,f){Object.defineProperty(u,"default",{enumerable:!0,value:f})}):function(u,f){u.default=f}),t=Ti&&Ti.__importStar||function(u){if(u&&u.__esModule)return u;var f={};if(u!=null)for(var p in u)p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)&&s(f,u,p);return e(f,u),f};Object.defineProperty(Ti,"__esModule",{value:!0}),Ti.HTTP=void 0;const i=yh(),o=t(q1);let l=class{constructor(f,p={}){this.client=f,this.headers=p}get(f,p={}){return this.request("get",f,p)}post(f,p={}){return this.request("post",f,p)}del(f,p={}){return this.request("del",f,p)}put(f,p={}){return this.request("put",f,p)}request(f,p,h={}){return o[f](this.client.getHttpEndpoint(p),this.getOptions(h)).catch(m=>{var d;const _=m.statusCode,y=((d=m.data)===null||d===void 0?void 0:d.error)||m.statusMessage||m.message;throw!_&&!y?m:new i.ServerError(_,y)})}getOptions(f){return f.headers=Object.assign({},this.headers,f.headers),this.authToken&&(f.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(f.withCredentials=!0),f}};return Ti.HTTP=l,Ti}var Ai={},ir={},Vg;function Y1(){if(Vg)return ir;Vg=1,Object.defineProperty(ir,"__esModule",{value:!0}),ir.getItem=ir.removeItem=ir.setItem=void 0;let s;function e(){if(!s)try{s=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return s||(s={cache:{},setItem:function(l,u){this.cache[l]=u},getItem:function(l){this.cache[l]},removeItem:function(l){delete this.cache[l]}}),s}function t(l,u){e().setItem(l,u)}ir.setItem=t;function i(l){e().removeItem(l)}ir.removeItem=i;function o(l,u){const f=e().getItem(l);typeof Promise>"u"||!(f instanceof Promise)?u(f):f.then(p=>u(p))}return ir.getItem=o,ir}var Gg;function z0(){if(Gg)return Ai;Gg=1;var s=Ai&&Ai.__awaiter||function(m,d,_,y){function w(E){return E instanceof _?E:new _(function(x){x(E)})}return new(_||(_=Promise))(function(E,x){function S(D){try{P(y.next(D))}catch(V){x(V)}}function C(D){try{P(y.throw(D))}catch(V){x(V)}}function P(D){D.done?E(D.value):w(D.value).then(S,C)}P((y=y.apply(m,d||[])).next())})},e=Ai&&Ai.__classPrivateFieldGet||function(m,d,_,y){if(_==="a"&&!y)throw new TypeError("Private accessor was defined without a getter");if(typeof d=="function"?m!==d||!y:!d.has(m))throw new TypeError("Cannot read private member from an object whose class did not declare it");return _==="m"?y:_==="a"?y.call(m):y?y.value:d.get(m)},t=Ai&&Ai.__classPrivateFieldSet||function(m,d,_,y,w){if(y==="m")throw new TypeError("Private method is not writable");if(y==="a"&&!w)throw new TypeError("Private accessor was defined without a setter");if(typeof d=="function"?m!==d||!w:!d.has(m))throw new TypeError("Cannot write private member to an object whose class did not declare it");return y==="a"?w.call(m,_):w?w.value=_:d.set(m,_),_},i,o,l,u;Object.defineProperty(Ai,"__esModule",{value:!0}),Ai.Auth=void 0;const f=Y1(),p=U0();let h=class{constructor(d){this.http=d,this.settings={path:"/auth",key:"colyseus-auth-token"},i.set(this,!1),o.set(this,void 0),l.set(this,void 0),u.set(this,(0,p.createNanoEvents)()),(0,f.getItem)(this.settings.key,_=>this.token=_)}set token(d){this.http.authToken=d}get token(){return this.http.authToken}onChange(d){const _=e(this,u,"f").on("change",d);return e(this,i,"f")||t(this,o,new Promise((y,w)=>{this.getUserData().then(E=>{this.emitChange(Object.assign(Object.assign({},E),{token:this.token}))}).catch(E=>{this.emitChange({user:null,token:void 0})}).finally(()=>{y()})}),"f"),t(this,i,!0,"f"),_}getUserData(){return s(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(d,_,y){return s(this,void 0,void 0,function*(){const w=(yield this.http.post(`${this.settings.path}/register`,{body:{email:d,password:_,options:y}})).data;return this.emitChange(w),w})}signInWithEmailAndPassword(d,_){return s(this,void 0,void 0,function*(){const y=(yield this.http.post(`${this.settings.path}/login`,{body:{email:d,password:_}})).data;return this.emitChange(y),y})}signInAnonymously(d){return s(this,void 0,void 0,function*(){const _=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:d}})).data;return this.emitChange(_),_})}sendPasswordResetEmail(d){return s(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:d}})).data})}signInWithProvider(d,_={}){return s(this,void 0,void 0,function*(){return new Promise((y,w)=>{const E=_.width||480,x=_.height||768,S=this.token?`?token=${this.token}`:"",C=`Login with ${d[0].toUpperCase()+d.substring(1)}`,P=this.http.client.getHttpEndpoint(`${_.prefix||`${this.settings.path}/provider`}/${d}${S}`),D=screen.width/2-E/2,V=screen.height/2-x/2;t(this,l,window.open(P,C,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+E+", height="+x+", top="+V+", left="+D),"f");const O=q=>{q.data.user===void 0&&q.data.token===void 0||(clearInterval(F),e(this,l,"f").close(),t(this,l,void 0,"f"),window.removeEventListener("message",O),q.data.error!==void 0?w(q.data.error):(y(q.data),this.emitChange(q.data)))},F=setInterval(()=>{(!e(this,l,"f")||e(this,l,"f").closed)&&(t(this,l,void 0,"f"),w("cancelled"),window.removeEventListener("message",O))},200);window.addEventListener("message",O)})})}signOut(){return s(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(d){d.token!==void 0&&(this.token=d.token,d.token===null?(0,f.removeItem)(this.settings.key):(0,f.setItem)(this.settings.key,d.token)),e(this,u,"f").emit("change",d)}};return Ai.Auth=h,i=new WeakMap,o=new WeakMap,l=new WeakMap,u=new WeakMap,Ai}var oa={},Wg;function K1(){if(Wg)return oa;Wg=1,Object.defineProperty(oa,"__esModule",{value:!0}),oa.discordURLBuilder=void 0;function s(e){var t;const i=((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.hostname)||"localhost",o=e.hostname.split("."),l=!e.hostname.includes("trycloudflare.com")&&!e.hostname.includes("discordsays.com")&&o.length>2?`/${o[0]}`:"";return e.pathname.startsWith("/.proxy")?`${e.protocol}//${i}${l}${e.pathname}${e.search}`:`${e.protocol}//${i}/.proxy/colyseus${l}${e.pathname}${e.search}`}return oa.discordURLBuilder=s,oa}var $g;function J1(){if($g)return nr;$g=1;var s=nr&&nr.__awaiter||function(m,d,_,y){function w(E){return E instanceof _?E:new _(function(x){x(E)})}return new(_||(_=Promise))(function(E,x){function S(D){try{P(y.next(D))}catch(V){x(V)}}function C(D){try{P(y.throw(D))}catch(V){x(V)}}function P(D){D.done?E(D.value):w(D.value).then(S,C)}P((y=y.apply(m,d||[])).next())})},e;Object.defineProperty(nr,"__esModule",{value:!0}),nr.Client=nr.MatchMakeError=void 0;const t=yh(),i=k0(),o=j1(),l=z0(),u=K1();class f extends Error{constructor(d,_){super(d),this.code=_,Object.setPrototypeOf(this,f.prototype)}}nr.MatchMakeError=f;const p=typeof window<"u"&&typeof((e=window==null?void 0:window.location)===null||e===void 0?void 0:e.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";let h=class{constructor(d=p,_){var y,w;if(typeof d=="string"){const E=d.startsWith("/")?new URL(d,p):new URL(d),x=E.protocol==="https:"||E.protocol==="wss:",S=Number(E.port||(x?443:80));this.settings={hostname:E.hostname,pathname:E.pathname,port:S,secure:x}}else d.port===void 0&&(d.port=d.secure?443:80),d.pathname===void 0&&(d.pathname=""),this.settings=d;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new o.HTTP(this,(_==null?void 0:_.headers)||{}),this.auth=new l.Auth(this.http),this.urlBuilder=_==null?void 0:_.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((w=(y=window==null?void 0:window.location)===null||y===void 0?void 0:y.hostname)===null||w===void 0)&&w.includes("discordsays.com"))&&(this.urlBuilder=u.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(d,_={},y){return s(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",d,_,y)})}create(d,_={},y){return s(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",d,_,y)})}join(d,_={},y){return s(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",d,_,y)})}joinById(d,_={},y){return s(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",d,_,y)})}reconnect(d,_){return s(this,void 0,void 0,function*(){if(typeof d=="string"&&typeof _=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[y,w]=d.split(":");if(!y||!w)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",y,{reconnectionToken:w},_)})}getAvailableRooms(d=""){return s(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${d}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(d,_,y){return s(this,void 0,void 0,function*(){const w=this.createRoom(d.room.name,_);w.roomId=d.room.roomId,w.sessionId=d.sessionId;const E={sessionId:w.sessionId};d.reconnectionToken&&(E.reconnectionToken=d.reconnectionToken);const x=y||w;return w.connect(this.buildEndpoint(d.room,E),d.devMode&&(()=>s(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${w.roomId}'...`);let S=0,C=8;const P=()=>s(this,void 0,void 0,function*(){S++;try{yield this.consumeSeatReservation(d,_,x),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${w.roomId}'`)}catch{S<C?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${S} out of ${C})`),setTimeout(P,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(P,2e3)})),x,this.http.headers),new Promise((S,C)=>{const P=(D,V)=>C(new t.ServerError(D,V));x.onError.once(P),x.onJoin.once(()=>{x.onError.remove(P),S(x)})})})}createMatchMakeRequest(d,_,y={},w,E){return s(this,void 0,void 0,function*(){const x=(yield this.http.post(`matchmake/${d}/${_}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(y)})).data;if(x.error)throw new f(x.error,x.code);return d==="reconnect"&&(x.reconnectionToken=y.reconnectionToken),yield this.consumeSeatReservation(x,w,E)})}createRoom(d,_){return new i.Room(d,_)}buildEndpoint(d,_={}){const y=[];for(const x in _)_.hasOwnProperty(x)&&y.push(`${x}=${_[x]}`);let w=this.settings.secure?"wss://":"ws://";d.publicAddress?w+=`${d.publicAddress}`:w+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const E=`${w}/${d.processId}/${d.roomId}?${y.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(E)):E}getHttpEndpoint(d=""){const _=d.startsWith("/")?d:`/${d}`,y=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${_}`;return this.urlBuilder?this.urlBuilder(new URL(y)):y}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}};return nr.Client=h,nr}var aa={},Xg;function Z1(){if(Xg)return aa;Xg=1,Object.defineProperty(aa,"__esModule",{value:!0}),aa.SchemaSerializer=void 0;const s=O0();let e=class{setState(i){return this.state.decode(i)}getState(){return this.state}patch(i){return this.state.decode(i)}teardown(){var i,o;(o=(i=this.state)===null||i===void 0?void 0:i.$changes)===null||o===void 0||o.root.clearRefs()}handshake(i,o){this.state?new s.Reflection().decode(i,o):this.state=s.Reflection.decode(i,o)}};return aa.SchemaSerializer=e,aa}var la={},qg;function Q1(){if(qg)return la;qg=1,Object.defineProperty(la,"__esModule",{value:!0}),la.NoneSerializer=void 0;let s=class{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}};return la.NoneSerializer=s,la}var jg;function eT(){return jg||(jg=1,(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.SchemaSerializer=s.registerSerializer=s.Auth=s.Room=s.ErrorCode=s.Protocol=s.MatchMakeError=s.Client=void 0,N1();var e=J1();Object.defineProperty(s,"Client",{enumerable:!0,get:function(){return e.Client}}),Object.defineProperty(s,"MatchMakeError",{enumerable:!0,get:function(){return e.MatchMakeError}});var t=I0();Object.defineProperty(s,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),Object.defineProperty(s,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}});var i=k0();Object.defineProperty(s,"Room",{enumerable:!0,get:function(){return i.Room}});var o=z0();Object.defineProperty(s,"Auth",{enumerable:!0,get:function(){return o.Auth}});const l=Z1();Object.defineProperty(s,"SchemaSerializer",{enumerable:!0,get:function(){return l.SchemaSerializer}});const u=Q1(),f=N0();Object.defineProperty(s,"registerSerializer",{enumerable:!0,get:function(){return f.registerSerializer}}),(0,f.registerSerializer)("schema",l.SchemaSerializer),(0,f.registerSerializer)("none",u.NoneSerializer)})(Nf)),Nf}var tT=eT();const nT={heaven:{id:"heaven",spawnPoints:[[0,2,0],[6,2,-4],[-6,2,4],[8,2,8]],waypoints:[{id:"a",position:[0,2,0],links:["b","c"]},{id:"b",position:[8,2,0],links:["a","d"]},{id:"c",position:[-8,2,0],links:["a","d"]},{id:"d",position:[0,2,10],links:["b","c"]}],bounds:{min:[-18,0,-18],max:[18,12,18]},skyColor:"#f6e8ff",fogColor:"#c9e4ff",ambient:[.9,.9,1],gravity:-16},earth:{id:"earth",spawnPoints:[[0,1.8,0],[10,1.8,-6],[-10,1.8,6],[6,1.8,10]],waypoints:[{id:"a",position:[0,1.8,0],links:["b","c","d"]},{id:"b",position:[10,1.8,-6],links:["a","c"]},{id:"c",position:[-10,1.8,6],links:["a","d"]},{id:"d",position:[6,1.8,10],links:["a","b"]}],bounds:{min:[-22,0,-22],max:[22,10,22]},skyColor:"#0b3954",fogColor:"#1f7a8c",ambient:[.6,.7,.8],gravity:-18},hell:{id:"hell",spawnPoints:[[0,2.5,0],[8,2.5,-8],[-8,2.5,8],[12,2.5,6]],waypoints:[{id:"a",position:[0,2.5,0],links:["b","c"]},{id:"b",position:[10,2.5,-6],links:["a","d"]},{id:"c",position:[-10,2.5,6],links:["a","d"]},{id:"d",position:[0,2.5,12],links:["b","c"]}],bounds:{min:[-20,0,-20],max:[20,12,20]},skyColor:"#2b0b0b",fogColor:"#8c1d1d",ambient:[.45,.3,.3],gravity:-16}};function iT(s){const e=new bn,t=s.bounds.max[0]-s.bounds.min[0],i=s.bounds.max[2]-s.bounds.min[2],o=new Bi(t,i),l=new Nt({color:cT(s.id),roughness:.9,metalness:.05}),u=new Oe(o,l);return u.rotation.x=-Math.PI/2,u.receiveShadow=!0,e.add(u),rT(e,s),s.id==="heaven"?sT(e,s):s.id==="hell"?aT(e,s):oT(e,s),lT(e,s),e}function rT(s,e){const t=new _a(.5,.1,8,16,Math.PI),i=new Nt({color:16711680}),o=new Nt({color:16777215}),l=()=>{const u=new bn,f=new Oe(new ti(.1,.1,2),o);f.position.y=1,u.add(f);for(let h=0;h<5;h++){const m=new Oe(new _a(.105,.05,8,16),i);m.rotation.x=Math.PI/2,m.position.y=.4+h*.4,u.add(m)}const p=new Oe(t,o);return p.position.set(.5,2,0),u.add(p),u};for(let u=0;u<10;u++){const f=l();f.position.set(ni(e.bounds.min[0]+2,e.bounds.max[0]-2),0,ni(e.bounds.min[2]+2,e.bounds.max[2]-2)),f.rotation.y=Math.random()*Math.PI*2,s.add(f)}}function sT(s,e){const t=new ti(.8,.8,8,16),i=new Nt({color:16766720,metalness:.8,roughness:.2});[[5,0,5],[-5,0,5],[5,0,-5],[-5,0,-5],[10,0,0],[-10,0,0],[0,0,10],[0,0,-10]].forEach(([m,d,_])=>{const y=new Oe(t,i);y.position.set(m,4,_),y.castShadow=!0,y.receiveShadow=!0,s.add(y)});const l=new ar(4,12,16),u=new Nt({color:16770560,emissive:11175936,emissiveIntensity:.2,metalness:.9,roughness:.1}),f=new Oe(l,u);f.position.set(0,6,0),f.castShadow=!0,s.add(f);const p=new Un(3,16,16),h=new Nt({color:16777215,transparent:!0,opacity:.9});for(let m=0;m<5;m++){const d=new Oe(p,h);d.position.set(ni(e.bounds.min[0],e.bounds.max[0]),ni(2,6),ni(e.bounds.min[2],e.bounds.max[2])),d.scale.set(1.5,.4,1.5),s.add(d)}}function oT(s,e){const t=new ar(2,6,8),i=new Nt({color:2976335,roughness:.8}),o=new ti(.4,.4,2),l=new Nt({color:6045747});for(let y=0;y<8;y++){const w=new bn,E=new Oe(t,i);E.position.y=4,E.castShadow=!0;const x=new Oe(o,l);x.position.y=1,x.castShadow=!0,w.add(E),w.add(x),w.position.set(ni(e.bounds.min[0]+2,e.bounds.max[0]-2),0,ni(e.bounds.min[2]+2,e.bounds.max[2]-2)),s.add(w)}const u=new Gt(1.5,1.5,1.5);for(let y=0;y<6;y++){const w=Math.random()>.5?13711159:2718459,E=new Oe(u,new Nt({color:w}));E.position.set(ni(e.bounds.min[0]+4,e.bounds.max[0]-4),.75,ni(e.bounds.min[2]+4,e.bounds.max[2]-4)),E.castShadow=!0,E.userData.solid=!0,s.add(E)}const f=new Gt(4,.5,8),p=new Nt({color:9127187,roughness:1}),h=new Oe(f,p);h.position.set(0,2.5,0),h.userData.solid=!0,s.add(h);const m=new Gt(4,.5,6),d=new Oe(m,p);d.position.set(0,1.25,-6),d.rotation.x=-Math.PI/8,d.userData.solid=!0,s.add(d);const _=new Oe(m,p);_.position.set(0,1.25,6),_.rotation.x=Math.PI/8,_.userData.solid=!0,s.add(_)}function aT(s,e){const t=new ar(1,5,4),i=new Nt({color:1710618,roughness:.2});for(let h=0;h<12;h++){const m=new Oe(t,i);m.position.set(ni(e.bounds.min[0],e.bounds.max[0]),2.5,ni(e.bounds.min[2],e.bounds.max[2])),m.castShadow=!0,m.userData.solid=!0,s.add(m)}const o=new ar(3,10,4),l=new Nt({color:5570560,roughness:.9,flatShading:!0}),u=new Oe(o,l);u.position.set(0,5,0),u.rotation.y=Math.PI/4,u.castShadow=!0,u.userData.solid=!0,s.add(u);const f=new mh(3,16),p=new nn({color:16729344});for(let h=0;h<3;h++){const m=new Oe(f,p);m.rotation.x=-Math.PI/2,m.position.set(ni(e.bounds.min[0]+5,e.bounds.max[0]-5),.05,ni(e.bounds.min[2]+5,e.bounds.max[2]-5)),s.add(m)}}function lT(s,e){const t=[[e.bounds.min[0],e.bounds.min[2]],[e.bounds.max[0],e.bounds.min[2]],[e.bounds.max[0],e.bounds.max[2]],[e.bounds.min[0],e.bounds.max[2]]],i=new Gt(1,4,1),o=new Nt({color:8947848});t.forEach(([l,u])=>{const f=new Oe(i,o);f.position.set(l,2,u),f.userData.solid=!0,s.add(f)})}function cT(s){switch(s){case"heaven":return 15792383;case"hell":return 3017997;default:return 14737632}}function ni(s,e){return Math.random()*(e-s)+s}class uT{constructor(){this.musicOscillators=[],this.lastKillLineTime=0,this.lastHitTime=0;const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.2,this.musicGain.connect(this.masterGain),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.4,this.sfxGain.connect(this.masterGain),window.addEventListener("click",()=>{this.ctx.state==="suspended"&&this.ctx.resume()},{once:!0})}startMusic(e){this.musicOscillators.length>0&&this.stopMusic();let t=[],i=65.41;e==="lobby"?(t=[{freq:392,dur:.3},{freq:0,dur:.1},{freq:349.23,dur:.1},{freq:329.63,dur:.2},{freq:293.66,dur:.2},{freq:261.63,dur:.2},{freq:293.66,dur:.2},{freq:329.63,dur:.2},{freq:261.63,dur:.4},{freq:0,dur:.2},{freq:293.66,dur:.2},{freq:329.63,dur:.2},{freq:349.23,dur:.2},{freq:293.66,dur:.2},{freq:329.63,dur:.4},{freq:0,dur:.4}],i=58.27):e==="heaven"?(t=[{freq:392,dur:.6},{freq:440,dur:.2},{freq:392,dur:.4},{freq:329.63,dur:1},{freq:392,dur:.6},{freq:440,dur:.2},{freq:392,dur:.4},{freq:329.63,dur:1},{freq:587.33,dur:.6},{freq:587.33,dur:.4},{freq:493.88,dur:1},{freq:523.25,dur:.6},{freq:523.25,dur:.4},{freq:392,dur:1}],i=130.81):e==="hell"?(t=[{freq:466.16,dur:.15},{freq:440,dur:.15},{freq:466.16,dur:.15},{freq:392,dur:.15},{freq:466.16,dur:.15},{freq:440,dur:.15},{freq:466.16,dur:.15},{freq:392,dur:.15},{freq:466.16,dur:.15},{freq:440,dur:.15},{freq:466.16,dur:.15},{freq:392,dur:.15}],i=36.71):e==="defeat"?(t=[{freq:233.08,dur:.6},{freq:0,dur:.2},{freq:233.08,dur:.6},{freq:0,dur:.2},{freq:233.08,dur:.6},{freq:0,dur:.2},{freq:233.08,dur:.4},{freq:220,dur:.2},{freq:196,dur:.2},{freq:174.61,dur:.8},{freq:0,dur:.5}],i=58.27):e==="victory"?(t=[{freq:392,dur:.4},{freq:523.25,dur:.4},{freq:523.25,dur:.2},{freq:587.33,dur:.2},{freq:523.25,dur:.2},{freq:493.88,dur:.2},{freq:440,dur:.8},{freq:440,dur:.4},{freq:587.33,dur:.4},{freq:659.25,dur:.2},{freq:587.33,dur:.2},{freq:523.25,dur:.2},{freq:493.88,dur:.2},{freq:392,dur:.8},{freq:392,dur:.4},{freq:659.25,dur:.4},{freq:698.46,dur:.2},{freq:659.25,dur:.2},{freq:587.33,dur:.2},{freq:523.25,dur:.2},{freq:440,dur:.4},{freq:392,dur:.4},{freq:440,dur:.4},{freq:587.33,dur:.4},{freq:493.88,dur:.4},{freq:523.25,dur:1},{freq:0,dur:.5}],i=130.81):(t=[{freq:329.63,dur:.2},{freq:0,dur:.05},{freq:329.63,dur:.2},{freq:0,dur:.05},{freq:329.63,dur:.4},{freq:0,dur:.2},{freq:329.63,dur:.2},{freq:0,dur:.05},{freq:329.63,dur:.2},{freq:0,dur:.05},{freq:329.63,dur:.4},{freq:0,dur:.2},{freq:329.63,dur:.2},{freq:392,dur:.2},{freq:523.25,dur:.3},{freq:587.33,dur:.1},{freq:329.63,dur:.8},{freq:0,dur:.4}],i=65.41);let o=0,l=this.ctx.currentTime;const f=setInterval(()=>{for(;l<this.ctx.currentTime+.5;){const m=t[o%t.length];if(m.freq>0){const d=this.ctx.createOscillator(),_=this.ctx.createGain();d.type=e==="hell"?"sawtooth":"triangle",d.frequency.value=m.freq,_.gain.setValueAtTime(.1,l),_.gain.exponentialRampToValueAtTime(.01,l+m.dur-.05),d.connect(_),_.connect(this.musicGain),d.start(l),d.stop(l+m.dur)}l+=m.dur,o++}},100),p=this.ctx.createOscillator();p.type=e==="hell"?"sawtooth":"sine",p.frequency.value=i;const h=this.ctx.createGain();h.gain.value=.2,p.connect(h),h.connect(this.musicGain),p.start(),this.cleanupMusic=()=>{clearInterval(f),p.stop(),this.musicOscillators=[]},this.musicOscillators.push(p)}stopMusic(){this.cleanupMusic&&this.cleanupMusic()}playOof(){const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.connect(t),t.connect(this.sfxGain);const i=this.ctx.currentTime;e.type="sawtooth",e.frequency.setValueAtTime(150,i),e.frequency.exponentialRampToValueAtTime(50,i+.15),t.gain.setValueAtTime(.8,i),t.gain.exponentialRampToValueAtTime(.01,i+.15),e.start(i),e.stop(i+.15)}playShoot(e){const t=this.ctx.createOscillator(),i=this.ctx.createGain();t.connect(i),i.connect(this.sfxGain);const o=this.ctx.currentTime;e==="shotgun"?(t.type="sawtooth",t.frequency.setValueAtTime(100,o),t.frequency.exponentialRampToValueAtTime(10,o+.2),i.gain.setValueAtTime(1,o),i.gain.exponentialRampToValueAtTime(.01,o+.3),t.start(o),t.stop(o+.3)):e==="icicle"?(t.type="triangle",t.frequency.setValueAtTime(800,o),t.frequency.linearRampToValueAtTime(200,o+.1),i.gain.setValueAtTime(.5,o),i.gain.exponentialRampToValueAtTime(.01,o+.2),t.start(o),t.stop(o+.2)):e==="gift"?(t.type="sine",t.frequency.setValueAtTime(200,o),t.frequency.linearRampToValueAtTime(600,o+.5),i.gain.setValueAtTime(.5,o),i.gain.linearRampToValueAtTime(0,o+.5),t.start(o),t.stop(o+.5)):(t.type="square",t.frequency.setValueAtTime(400,o),t.frequency.exponentialRampToValueAtTime(100,o+.1),i.gain.setValueAtTime(.3,o),i.gain.exponentialRampToValueAtTime(.01,o+.1),t.start(o),t.stop(o+.1))}playAxeThrow(){const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.connect(t),t.connect(this.sfxGain);const i=this.ctx.currentTime;e.type="triangle",e.frequency.setValueAtTime(200,i),e.frequency.linearRampToValueAtTime(100,i+.3),t.gain.setValueAtTime(.3,i),t.gain.linearRampToValueAtTime(0,i+.3),e.start(i),e.stop(i+.3)}playHeal(){const e=this.ctx.currentTime;[523.25,659.25,783.99].forEach((i,o)=>{const l=this.ctx.createOscillator(),u=this.ctx.createGain();l.type="sine",l.frequency.value=i,l.connect(u),u.connect(this.sfxGain);const f=e+o*.1;u.gain.setValueAtTime(0,f),u.gain.linearRampToValueAtTime(.3,f+.05),u.gain.exponentialRampToValueAtTime(.01,f+.4),l.start(f),l.stop(f+.4)})}playPowerup(){const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.connect(t),t.connect(this.sfxGain);const i=this.ctx.currentTime;e.type="sawtooth",e.frequency.setValueAtTime(200,i),e.frequency.exponentialRampToValueAtTime(800,i+.5);const o=this.ctx.createOscillator();o.frequency.value=20;const l=this.ctx.createGain();l.gain.value=50,o.connect(l),l.connect(e.frequency),o.start(i),o.stop(i+.5),t.gain.setValueAtTime(.5,i),t.gain.linearRampToValueAtTime(0,i+.5),e.start(i),e.stop(i+.5)}playExplosion(){const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sawtooth",e.connect(t),t.connect(this.sfxGain);const i=this.ctx.currentTime;e.frequency.setValueAtTime(100,i),e.frequency.exponentialRampToValueAtTime(1,i+.5),t.gain.setValueAtTime(1,i),t.gain.exponentialRampToValueAtTime(.01,i+.8),e.start(i),e.stop(i+.8)}playKillLine(){if(!window.speechSynthesis)return;const e=Date.now();if(e-this.lastKillLineTime<3e3)return;this.lastKillLineTime=e,window.speechSynthesis.cancel();const t=["Jingle bells!","Ho ho ho!","Merry Christmas!","Slay bells ring!","Naughty list for you!","Put that cookie down!"],i=t[Math.floor(Math.random()*t.length)],o=new SpeechSynthesisUtterance(i);o.pitch=1.5+Math.random()*.5,o.rate=1.2,o.volume=.8,window.speechSynthesis.speak(o)}playHit(){const e=this.ctx.currentTime;if(e-this.lastHitTime<.05)return;this.lastHitTime=e;const t=this.ctx.createOscillator(),i=this.ctx.createGain();t.connect(i),i.connect(this.sfxGain),t.type="sine",t.frequency.setValueAtTime(800,e),i.gain.setValueAtTime(.5,e),i.gain.exponentialRampToValueAtTime(.01,e+.1),t.start(e),t.stop(e+.1)}playPoint(){const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.connect(t),t.connect(this.sfxGain);const i=this.ctx.currentTime;e.type="sine",e.frequency.setValueAtTime(1200,i),t.gain.setValueAtTime(.3,i),t.gain.exponentialRampToValueAtTime(.01,i+.5),e.start(i),e.stop(i+.5)}playDeath(){const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.connect(t),t.connect(this.sfxGain);const i=this.ctx.currentTime;e.type="sawtooth",e.frequency.setValueAtTime(300,i),e.frequency.linearRampToValueAtTime(50,i+.4),t.gain.setValueAtTime(.5,i),t.gain.linearRampToValueAtTime(0,i+.4),e.start(i),e.stop(i+.4)}}const en=new uT,B0=new L0().load("face.jpg"),fT=new L0().load("face_ginger.png"),ao=class ao{constructor(e,t){this.clock=new D1,this.running=!1,this.bots=[],this.projectiles=[],this.items=[],this.score=0,this.pointerLocked=!1,this.inputState={forward:0,right:0,jump:!1,fireHeld:!1,aimHeld:!1,reload:!1,yaw:0,pitch:0},this.stageTimer=0,this.itemSpawns={potion1:!1,powerup1:!1,potion2:!1,powerup2:!1,powerup3:!1,powerup4:!1},this.powerupState={active:!1,timer:0,type:"damage_speed_ammo"},this.netClient=null,this.netRoom=null,this.remoteMeshes=new Map,this.trails=[],this.raycaster=new I1,this.defaultFov=75,this.lastHitSound=0,this.adsFov=40,this.stage=1,this.maxStage=5,this.isBossStage=!1,this.bossEntity=null,this.gameWon=!1,this.bannerText="",this.victoryParticles=[],this.gameLost=!1,this.tick=()=>{const o=Math.min(this.clock.getDelta(),.05);if(this.mode==="menu"){const u=Date.now()*5e-4,f=5;this.camera.position.x=this.player.position.x+Math.sin(u)*f,this.camera.position.z=this.player.position.z+Math.cos(u)*f,this.camera.position.y=this.player.position.y+2,this.camera.lookAt(this.player.position.clone().add(new H(0,1.5,0))),this.player.yaw=u,this.localMesh.rotation.y=this.player.yaw}else this.stepPlayer(o);(this.mode==="bots"||this.mode==="menu"||this.mode==="adventure")&&this.stepBots(o),this.stepProjectiles(o),this.stepItems(o),this.updateTrails(o);for(let u=this.victoryParticles.length-1;u>=0;u--){const f=this.victoryParticles[u];f.life-=o,f.mesh.position.addScaledVector(f.vel,o),f.vel.y-=5*o,f.mesh.scale.setScalar(f.life/2),f.life<=0&&(this.scene.remove(f.mesh),this.victoryParticles.splice(u,1))}const l=this.inputState.aimHeld?this.adsFov:this.defaultFov;Math.abs(this.camera.fov-l)>.1&&(this.camera.fov+=(l-this.camera.fov)*o*10,this.camera.updateProjectionMatrix()),this.powerupState.active&&(this.powerupState.timer-=o,this.powerupState.timer<=0&&(this.powerupState.active=!1,this.speak("Powerup ended."))),this.mode==="adventure"&&(this.stageTimer+=o,this.checkItemSpawns()),this.updateHud(),this.renderer.render(this.scene,this.camera)},this.onResize=()=>{const{clientWidth:o,clientHeight:l}=this.container;this.camera.aspect=o/l,this.camera.updateProjectionMatrix(),this.renderer.setSize(o,l)},this.onMouseMove=o=>{if(!this.pointerLocked)return;const l=.0025;this.player.yaw-=o.movementX*l,this.player.pitch-=o.movementY*l,this.player.pitch=Tl.clamp(this.player.pitch,-Math.PI/2+.1,Math.PI/2-.1)},this.onKeyDown=o=>{o.code==="KeyW"&&(this.inputState.forward=1),o.code==="KeyS"&&(this.inputState.forward=-1),o.code==="KeyA"&&(this.inputState.right=-1),o.code==="KeyD"&&(this.inputState.right=1),o.code==="Space"&&(this.inputState.jump=!0),o.code==="KeyR"&&this.reload()},this.onKeyUp=o=>{(o.code==="KeyW"||o.code==="KeyS")&&(this.inputState.forward=0),(o.code==="KeyA"||o.code==="KeyD")&&(this.inputState.right=0),o.code==="Space"&&(this.inputState.jump=!1)},this.container=e,this.mode=t.mode,this.loadout=t.loadout,this.hud=t.onHud,this.onExitCallback=t.onExit,this.renderer=new l1({antialias:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,(e.clientWidth===0||e.clientHeight===0)&&console.warn("GameClient initialized with 0 dimensions. Canvas will be invisible.",e.clientWidth,e.clientHeight),this.scene=new c1,this.camera=new ei(this.defaultFov,e.clientWidth/e.clientHeight,.1,500),this.camera.position.set(0,2,6),e.appendChild(this.renderer.domElement),this.bindEvents(),this.loadMap(t.mapId),this.spawnPlayer(t.playerName),Qn.candy_shotgun&&(Qn.candy_shotgun.magSize=12),Qn.gift_launcher&&(Qn.gift_launcher.magSize=6),Qn.icicle_rifle&&(Qn.icicle_rifle.magSize=15),this.mode==="bots"?this.spawnBots(6):this.mode==="adventure"?this.startAdventureStage():this.mode==="multiplayer"?this.setupMultiplayer(t.mapId,t.playerName).catch(o=>{console.error("Multiplayer connect failed",o)}):this.mode==="menu"&&this.spawnBots(6),this.updateHud();const i=this.mode==="menu"?"lobby":t.mapId;document.addEventListener("click",()=>en.startMusic(i),{once:!0})}bindEvents(){window.addEventListener("resize",this.onResize),this.mode!=="menu"&&(this.container.addEventListener("click",()=>{this.container.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===this.container,this.pointerLocked}),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.onKeyUp),document.addEventListener("mousedown",e=>{e.button===0&&(this.inputState.fireHeld=!0),e.button===2&&(this.inputState.aimHeld=!0)}),document.addEventListener("mouseup",e=>{e.button===0&&(this.inputState.fireHeld=!1),e.button===2&&(this.inputState.aimHeld=!1)}),document.addEventListener("contextmenu",e=>e.preventDefault()))}loadMap(e){this.map=nT[e],this.scene.clear(),this.scene.background=new Ct(this.map.skyColor);const t=new Ct(this.map.fogColor);this.scene.fog=new uh(t,.015);const i=new C1(16777215,4473924,.7);i.position.set(0,20,0),this.scene.add(i);const o=new b1(16777215,.6);o.position.set(15,25,10),o.castShadow=!0,this.scene.add(o);const l=new L1(new Ct(this.map.ambient[0],this.map.ambient[1],this.map.ambient[2]).getHex(),.8);if(this.scene.add(l),this.map.id==="heaven"){const u=new Qf(16777215,1,100);u.position.set(0,10,0),this.scene.add(u)}this.mapGroup=iT(this.map),this.scene.add(this.mapGroup)}spawnPlayer(e){const t=ro(this.map.spawnPoints);this.player={id:"local",name:e,position:new H(...t),velocity:new H,yaw:0,pitch:0,hp:100,armor:25,weapon:this.loadout.primary,magAmmo:Qn[this.loadout.primary].magSize,reserveAmmo:1/0,isBot:!1,nextFire:0,strafeDir:0,strafeTimer:0,swingProgress:0,isSwinging:!1,respawnTimer:0},this.localMesh=kf(this.player.weapon,!1),this.localMesh.position.copy(this.player.position),this.localMesh.userData.entityId=this.player.id,this.scene.add(this.localMesh),this.updateCamera()}async setupMultiplayer(e,t){const i="ws://localhost:2567";this.netClient=new tT.Client(i);try{this.netRoom=await this.netClient.joinOrCreate("battle",{map:e,name:t,weapon:this.loadout.primary});const o=this.netRoom;o.state.players.onAdd=(l,u)=>{u===o.sessionId&&this.player.position.set(l.x,l.y,l.z);const f=kf(l.weapon,!1);f.position.set(l.x,l.y,l.z),f.userData.entityId=u,this.scene.add(f),this.remoteMeshes.set(u,f),l.onChange=()=>{f.position.set(l.x,l.y,l.z),f.rotation.y=l.yaw,u===o.sessionId&&(this.player.position.set(l.x,l.y,l.z),this.player.yaw=l.yaw,this.player.pitch=l.pitch,this.player.hp=l.hp,this.player.armor=l.armor)}},o.state.players.onRemove=(l,u)=>{const f=this.remoteMeshes.get(u);f&&(this.scene.remove(f),this.remoteMeshes.delete(u))}}catch(o){console.error("Failed to join multiplayer room",o)}}startAdventureStage(){for(const i of this.bots)i.mesh&&this.scene.remove(i.mesh),i.healthBar&&this.scene.remove(i.healthBar);this.bots=[],this.bossEntity=null,this.bannerText=`STAGE ${this.stage}`,this.updateHud(),this.speak(`Stage ${this.stage}`),this.items.forEach(i=>this.scene.remove(i.mesh)),this.items=[],this.stageTimer=0,this.itemSpawns={potion1:!1,potion2:!1,powerup1:!1,powerup2:!1,powerup3:!1,powerup4:!1};let e=3;const t=()=>{e>0?(this.bannerText=`${e}...`,this.updateHud(),e--,setTimeout(t,1e3)):(this.bannerText="START!",this.updateHud(),this.speak("Start!"),this.doSpawnWave(),setTimeout(()=>{this.bannerText="",this.updateHud()},2e3))};setTimeout(t,1500),this.player.hp=100,this.player.armor=25}speak(e){if(!window.speechSynthesis)return;const t=new SpeechSynthesisUtterance(e);t.rate=1.1,t.pitch=1,window.speechSynthesis.speak(t)}doSpawnWave(){let e=7;this.stage===2&&(e=20),this.stage===3&&(e=35),this.stage===4&&(e=50),this.stage===5&&(e=70),this.spawnBots(e),this.stage===5&&this.spawnBoss()}spawnBoss(){this.isBossStage=!0;const e=ro(this.map.spawnPoints),i={id:"boss",name:"KRAMPUS",position:new H(...e),velocity:new H,yaw:0,pitch:0,hp:5e3,armor:100,weapon:"icicle_rifle",magAmmo:1/0,reserveAmmo:1/0,isBot:!0,nextFire:0,strafeDir:0,strafeTimer:0,swingProgress:0,isSwinging:!1,respawnTimer:0},o=new bn,l=new ph(1.5,3,4,8),u=new Nt({color:2263842,roughness:.8}),f=new Oe(l,u);f.position.y=2.5,o.add(f);const p=new Un(1.2,16,16),h=new Nt({color:25600}),m=new Oe(p,h);m.position.y=4.5,m.userData.isHead=!0,o.add(m);const d=new Oe(new Gt(3,6,3),new nn({visible:!1}));d.position.y=2.5,d.userData.entityId=i.id,o.add(d);const _=new ar(.2,1,8),y=new Nt({color:1118481}),w=new Oe(_,y);w.position.set(.6,5.2,0),w.rotation.z=-.5,o.add(w);const E=new Bi(2,2),x=new nn({map:B0,transparent:!0}),S=new Oe(E,x);S.position.set(0,4.5,1.3),S.rotation.y=0,S.position.set(0,4.5,-1.3),S.rotation.y=Math.PI,o.add(S);const C=new Oe(_,y);C.position.set(-.6,5.2,0),C.rotation.z=.5,o.add(C),o.position.copy(i.position),o.userData.entityId=i.id,this.scene.add(o),i.mesh=o;const P=Yg();P.scale.set(3,3,3),this.scene.add(P),i.healthBar=P,this.bots.push(i),this.bossEntity=i,en.playDeath()}spawnBots(e=6){this.bots=[];for(let t=0;t<e;t++){const i=ro(this.map.spawnPoints),o=Math.random()<.3,l=o?"gingerbread":"snowman",u=o?"gingerbread_axe":"snow_smg",f=o?60:100,p={id:`bot_${Date.now()}_${t}`,name:o?"Gingerbread Man":"Snowman",position:new H(...i),velocity:new H,yaw:Math.random()*Math.PI*2,pitch:0,hp:f,armor:0,weapon:u,magAmmo:1/0,reserveAmmo:1/0,isBot:!0,botType:l,nextFire:Math.random()*2,strafeDir:0,strafeTimer:0,swingProgress:0,isSwinging:!1,respawnTimer:0},h=o?dT():kf(u,!0);h.position.copy(p.position),h.userData.entityId=p.id,this.scene.add(h),p.mesh=h;const m=h.userData.sword;p.swordMesh=m;const d=Yg();this.scene.add(d),p.healthBar=d,this.bots.push(p)}}start(){this.running||(this.running=!0,this.clock.start(),this.renderer.setAnimationLoop(this.tick))}stop(){this.running=!1,this.renderer.setAnimationLoop(null)}dispose(){this.stop(),window.removeEventListener("resize",this.onResize),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("keyup",this.onKeyUp),this.container.contains(this.renderer.domElement)&&this.container.removeChild(this.renderer.domElement),this.renderer.dispose()}triggerDefeat(){this.gameLost||(this.gameLost=!0,this.bannerText="DEFEAT",this.updateHud(),this.speak("You died."),en.startMusic("defeat"),setTimeout(()=>{this.onExitCallback&&this.onExitCallback()},5e3))}triggerVictory(){if(this.gameWon)return;this.gameWon=!0,this.bannerText="VICTORY!",this.updateHud(),this.speak("Merry Christmas! Victory!"),en.startMusic("victory");const e=setInterval(()=>{if(!this.running){clearInterval(e);return}this.spawnFirework()},500);setTimeout(()=>{clearInterval(e),this.onExitCallback&&this.onExitCallback()},5e3)}spawnFirework(){const e=new Ct().setHSL(Math.random(),1,.5),t=this.player.position.clone().add(new H((Math.random()-.5)*20,10+Math.random()*5,(Math.random()-.5)*20-10)),i=new Un(.2,8,8),o=new nn({color:e});for(let l=0;l<20;l++){const u=new Oe(i,o);u.position.copy(t),this.scene.add(u);const f=new H(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(5+Math.random()*5);this.victoryParticles.push({mesh:u,vel:f,life:2})}en.playShoot("snowball")}updateTrails(e){for(let t=this.trails.length-1;t>=0;t--){const i=this.trails[t];if(i.life-=e,i.life<=0)this.scene.remove(i.mesh),i.mesh.material&&i.mesh.material.dispose(),this.trails.splice(t,1);else{const o=i.life/i.maxLife;i.mesh.material.opacity=o;const l=o*i.startScale;i.mesh.scale.set(l,l,i.mesh.scale.z)}}}checkItemSpawns(){this.stageTimer>10&&!this.itemSpawns.potion1&&(this.spawnItem("health_potion"),this.itemSpawns.potion1=!0),this.stageTimer>10&&!this.itemSpawns.powerup1&&(this.spawnItem("powerup"),this.itemSpawns.powerup1=!0),this.stage>=4&&this.stageTimer>25&&!this.itemSpawns.potion2&&(this.spawnItem("health_potion"),this.itemSpawns.potion2=!0),this.stage>=4&&this.stageTimer>25&&!this.itemSpawns.powerup2&&(this.spawnItem("powerup"),this.itemSpawns.powerup2=!0),this.stage===5&&(this.stageTimer>40&&!this.itemSpawns.powerup3&&(this.spawnItem("powerup"),this.itemSpawns.powerup3=!0),this.stageTimer>55&&!this.itemSpawns.powerup4&&(this.spawnItem("powerup"),this.itemSpawns.powerup4=!0))}spawnItem(e){const t=ro(this.map.spawnPoints),i=new H(t[0],t[1]+1,t[2]);i.x+=(Math.random()-.5)*10,i.z+=(Math.random()-.5)*10,this.clampToBounds(i);const o=pT(e);o.position.copy(i),this.scene.add(o),this.items.push({id:`item_${Date.now()}_${Math.random()}`,type:e,mesh:o,position:i,life:45}),console.log(`Spawned ${e} at ${i.x.toFixed(1)}, ${i.z.toFixed(1)}`)}stepItems(e){for(let t=0;t<this.items.length;t++){const i=this.items[t];if(i.mesh.rotation.y+=e,i.mesh.position.y=i.position.y+Math.sin(Date.now()*.003)*.2,this.player.position.distanceTo(i.mesh.position)<2&&this.player.hp>0){if(i.type==="health_potion"){if(this.player.hp<100){this.player.hp=Math.min(100,this.player.hp+50),this.speak("Health restored."),en.playShoot("snowball"),this.showFloatingText("+50 HP",65280),this.destroyItem(t),t--;continue}}else if(i.type==="powerup"){this.powerupState={active:!0,timer:10,type:"damage_speed_ammo"},this.speak("Power up!"),en.playShoot("snowball"),this.showFloatingText("POWER UP!",16776960),this.destroyItem(t),t--;continue}}i.life-=e}}destroyItem(e){const t=this.items[e];this.disposeObject(t.mesh),this.items.splice(e,1)}disposeObject(e){this.scene.remove(e),e.traverse(t=>{var i;t instanceof Oe&&(t.geometry&&!((i=t.geometry.userData)!=null&&i.shared)&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(l=>{var u;(u=l.userData)!=null&&u.shared||l.dispose()}))})}showFloatingText(e,t){this.bannerText=e,this.updateHud(),setTimeout(()=>{this.bannerText===e&&(this.bannerText="",this.updateHud())},1500)}stepProjectiles(e){for(let t=this.projectiles.length-1;t>=0;t--){const i=this.projectiles[t];i.life-=e,i.mesh.position.addScaledVector(i.velocity,e),i.isAxe&&this.spawnParticles(i.mesh.position.clone(),16711680,1);let o=!1;const l=[...this.bots];this.player.hp>0&&l.push(this.player);for(const u of l){if(u.id===i.ownerId)continue;if(i.mesh.position.distanceTo(u.position)<i.radius+.5){if(o=!0,u.id==="local")us(this.player,i.damage),en.playOof(),this.showFloatingText(`-${i.damage}`,16711680);else if(us(u,i.damage),u.hp<=0){if(this.gameWon)continue;en.playHit()}else en.playHit();break}}if(!i.isAxe&&i.mesh.position.y<.2&&(o=!0),o||i.life<=0){if(i.isAxe&&i.life<=0&&console.log("Axe expired (Time out)"),i.isAxe&&o&&console.log("Axe HIT something"),o&&i.weaponId==="gift_launcher"){console.log("Gift Launcher Splash Triggered!"),this.spawnParticles(i.mesh.position,16776960,20);const u=20,f=[...this.bots];this.player.hp>0&&f.push(this.player);for(const p of f){if(p.id==="local"&&i.ownerId==="local")continue;if(p.position.distanceTo(i.mesh.position)<u){let m=i.damage;p.id==="local"?(us(this.player,m),en.playOof(),this.showFloatingText(`-${m}`,16711680)):(us(p,m),en.playHit())}}en.playShoot("snowball")}this.disposeObject(i.mesh),this.projectiles.splice(t,1);continue}i.isAxe&&Math.random()<.01&&console.log("Axe alive at",i.mesh.position)}}stepPlayer(e){if(this.player.nextFire-=e,this.player.hp<=0){if(this.mode==="adventure"){this.triggerDefeat();return}if(this.player.respawnTimer||(this.player.respawnTimer=3),this.player.respawnTimer-=e,this.localMesh.visible=!1,this.player.respawnTimer<=0){const h=ro(this.map.spawnPoints);this.player.position.set(...h),this.player.hp=100,this.player.armor=25,this.player.magAmmo=Qn[this.player.weapon].magSize,this.localMesh.visible=!0,this.player.velocity.set(0,0,0),this.player.respawnTimer=0}return}const t=15,i=new H;i.x=this.inputState.right,i.z=-this.inputState.forward,i.lengthSq()>0&&i.normalize().multiplyScalar(t);const o=this.player.yaw,l=new H(Math.sin(o),0,Math.cos(o)),u=new H(Math.cos(o),0,-Math.sin(o)),f=new H;f.addScaledVector(l,i.z),f.addScaledVector(u,i.x),this.player.velocity.x=f.x,this.player.velocity.z=f.z,this.player.slowTimer&&this.player.slowTimer>0&&(this.player.velocity.x*=.825,this.player.velocity.z*=.825,this.player.slowTimer-=e),this.player.velocity.y+=this.map.gravity*e,this.inputState.jump&&this.player.position.y<=1.3&&(this.player.velocity.y=8,this.inputState.jump=!1);const p=this.player.position.clone().addScaledVector(this.player.velocity,e);this.checkMapCollision(p,this.player.velocity,e),this.clampToBounds(p),this.player.position.copy(p),this.localMesh.position.copy(this.player.position),this.localMesh.rotation.y=this.player.yaw,this.localMesh.updateMatrixWorld(!0),this.updateCamera(),this.inputState.fireHeld&&this.tryFire(this.player,this.bots,e)}updateCamera(){const i=new H(0,2.5,4);i.applyAxisAngle(new H(0,1,0),this.player.yaw);const o=this.player.position.clone().add(i);this.camera.position.lerp(o,.2);const l=this.player.position.clone().add(new H(0,1.5,0));l.y+=Math.sin(this.player.pitch)*5,this.camera.lookAt(l)}stepBots(e){for(let t=0;t<this.bots.length;t++){const i=this.bots[t];if(i.nextFire-=e,i.hp<=0){if(this.mode==="adventure"){i.mesh&&this.disposeObject(i.mesh),i.healthBar&&this.disposeObject(i.healthBar),this.bots.splice(t,1),t--,this.bots.length===0&&(this.stage===5?this.triggerVictory():(this.stage++,setTimeout(()=>this.startAdventureStage(),2e3)));continue}if(i.respawnTimer||(i.respawnTimer=2),i.respawnTimer-=e,i.mesh&&(i.mesh.visible=!1),i.healthBar&&(i.healthBar.visible=!1),i.respawnTimer<=0){const w=ro(this.map.spawnPoints);i.position.set(...w),i.hp=100,i.armor=10,i.swingProgress=0,i.isSwinging=!1,i.respawnTimer=0,i.mesh&&(i.mesh.visible=!0),i.healthBar&&(i.healthBar.visible=!0)}continue}const o=this.player.position.clone().sub(i.position),l=o.length(),u=o.x,f=o.z,p=new H;if(i.botType==="gingerbread"){l>1&&(p.z=1),i.strafeTimer===void 0&&(i.strafeTimer=0),i.strafeDir===void 0&&(i.strafeDir=1),i.strafeTimer-=e,i.strafeTimer<=0&&(i.strafeTimer=.5+Math.random()*.8,i.strafeDir=Math.random()<.5?-1:1),p.x=i.strafeDir*2.5,l<2.5&&i.nextFire<=0&&(i.swingProgress=1,i.nextFire=1,us(this.player,5),en.playOof(),this.showFloatingText("-5 (SLOWED)",65535),this.player.slowTimer=1),i.nextFire>0&&(i.nextFire-=e);let x=Math.atan2(u,f)-i.yaw;for(;x>Math.PI;)x-=Math.PI*2;for(;x<-Math.PI;)x+=Math.PI*2;i.yaw+=x*5*e,i.swingProgress>0&&(i.swingProgress-=e*5)}else(i.botType==="snowman"||!i.botType)&&(i.yaw=Math.atan2(o.x,o.z),l>1.8?p.z=1:p.z=0);let h=5.5;this.mode==="adventure"?h=5.5*(1+(this.stage-1)*.1):h=5.5,i.botType==="gingerbread"&&(h=5.5*.5);const m=new H(Math.sin(i.yaw),0,Math.cos(i.yaw)),d=new H(Math.cos(i.yaw),0,-Math.sin(i.yaw));i.velocity.x=0,i.velocity.z=0,i.velocity.addScaledVector(m,p.z*h),i.velocity.addScaledVector(d,p.x*h);const _=new H;for(let w=0;w<this.bots.length;w++){if(t===w)continue;const E=this.bots[w];if(E.hp<=0)continue;if(i.position.distanceTo(E.position)<1.5){const S=i.position.clone().sub(E.position).normalize();_.add(S)}}_.lengthSq()>0&&(_.normalize().multiplyScalar(4),i.velocity.add(_)),i.velocity.y+=this.map.gravity*e;const y=i.position.clone().addScaledVector(i.velocity,e);if(y.y<1.2&&(y.y=1.2,i.velocity.y=0),this.clampToBounds(y),i.position.copy(y),i.mesh&&(i.mesh.position.copy(i.position),i.mesh.rotation.y=i.yaw+Math.PI,i.mesh.updateMatrixWorld(!0)),i.healthBar){i.healthBar.position.copy(i.position).add(new H(0,2.8,0)),i.healthBar.lookAt(this.camera.position);const w=i.healthBar.children[1],E=Math.max(i.hp/100,0);w.scale.set(E,1,1),w.position.x=-.5+E/2}if(i.botType==="snowman"||i.botType==="boss"){if(i.isSwinging){if(i.swingProgress+=e*4,i.swingProgress>=1&&(i.isSwinging=!1,i.swingProgress=0),i.swordMesh){const w=-Math.PI/4,E=Math.sin(i.swingProgress*Math.PI)*1.5;i.swordMesh.rotation.x=w+E}}else if(i.swordMesh&&(i.swordMesh.rotation.x=-Math.PI/4),l<2.5&&(i.nextFire-=e,i.nextFire<=0&&(i.isSwinging=!0,i.swingProgress=0,i.nextFire=1,l<2.5&&this.player.hp>0))){us(this.player,15),en.playOof();const w=new H(Math.sin(i.yaw),0,Math.cos(i.yaw)).normalize().multiplyScalar(15);this.player.velocity.add(w)}}}}shootProjectile(e){const t=Qn[e.weapon],i=t.projectileSpeed||30;let o=e.yaw,l=e.pitch;t.id==="gift_launcher"&&e.ownerId==="local"&&(o+=Math.PI);const u=new H(Math.sin(o)*Math.cos(l),Math.sin(-l),Math.cos(o)*Math.cos(l));u.lengthSq()>0?u.normalize():u.set(0,0,1);const f=t.id==="gingerbread_axe";let p;if(f){console.log("FORCE SPAWNING RPG MISSILE");const h=new bn,m=new Oe(new ti(.15,.15,.8,8),new nn({color:16711680}));m.rotation.x=Math.PI/2,h.add(m);const d=new Oe(new ar(.15,.4,8),new nn({color:16755370}));d.rotation.x=Math.PI/2,d.position.z=.6,h.add(d);const _=new Gt(.8,.05,.4),y=new nn({color:8947848}),w=new Oe(_,y);w.position.z=-.3,h.add(w);const E=new Oe(_,y);E.position.z=-.3,E.rotation.z=Math.PI/2,h.add(E),h.scale.set(2,2,2),p=h,p.lookAt(e.position.clone().add(u))}else p=hT(t,!1);if(p.position.copy(e.position),f&&console.log("Axe Position:",p.position,"Scale:",p.scale,"Parent?",p.parent),f&&(p.rotation.z=Math.random()*Math.PI),this.scene.add(p),f&&console.log("Axe Added to Scene. Scene Children count:",this.scene.children.length),this.projectiles.push({mesh:p,velocity:u.multiplyScalar(i),ownerId:e.ownerId,damage:t.damage,radius:f?.5:.2,life:3,isAxe:f,weaponId:e.weapon}),this.projectiles.length>50){const h=this.projectiles.shift();h&&this.disposeObject(h.mesh)}}tryFire(e,t,i){var d,_,y;const o=Qn[e.weapon];if(e.nextFire>0)return;if(!(e.id==="local"&&this.powerupState.active)){if(e.magAmmo<=0)return;e.magAmmo-=1}let l=o.fireRate;e.id==="local"&&this.powerupState.active&&(l*=2),e.nextFire=1/l,e.id==="local"&&(o.id.includes("shotgun")?en.playShoot("shotgun"):o.id.includes("icicle")?en.playShoot("icicle"):o.id.includes("gift")?en.playShoot("gift"):en.playShoot("snowball"));let u=e.position.clone().add(new H(0,1.3,0)),f;if(e.id==="local"?f=this.localMesh:f=e.mesh,f&&f.userData.muzzle){const w=new H;f.userData.muzzle.getWorldPosition(w),u=w}else{const w=new H(Math.sin(e.yaw),0,-Math.sin(e.yaw));u.addScaledVector(w,.4)}let p=new H;if(!e.isBot&&e.id==="local"){const w=new H;this.camera.getWorldDirection(w),this.raycaster.set(this.camera.position,w);const E=this.raycaster.intersectObjects(this.scene.children,!0);let x=this.camera.position.clone().addScaledVector(w,100);for(const S of E){if(S.distance<1||S.object.name==="sky")continue;let C=!1,P=S.object;for(;P;){if(((d=P.userData)==null?void 0:d.entityId)===e.id){C=!0;break}P=P.parent}if(!C){x=S.point;break}}p.subVectors(x,u).normalize()}else p.set(Math.sin(e.yaw)*Math.cos(e.pitch),Math.sin(-e.pitch),Math.cos(e.yaw)*Math.cos(e.pitch)).normalize();if(o.type==="projectile"){this.shootProjectile({weapon:o.id,position:u,yaw:e.yaw,pitch:e.pitch,ownerId:e.id});return}const h=o.pellets||1;let m=!1;for(let w=0;w<h;w++){const E=p.clone();if(o.spread>0){const D=(Math.random()-.5)*o.spread,V=(Math.random()-.5)*o.spread,O=(Math.random()-.5)*o.spread;E.add(new H(D,V,O)).normalize()}this.raycaster.set(u,E);const x=this.raycaster.intersectObjects(this.scene.children,!0);let S=u.clone().addScaledVector(E,300),C=null,P=!1;for(const D of x){if(D.distance<.2)continue;let V=D.object,O=null,F=!1;for(;V;){if((_=V.userData)!=null&&_.isHead&&(F=!0),(y=V.userData)!=null&&y.entityId){O=V.userData.entityId;break}if(V.parent===null)break;V=V.parent}if(O){const q=t.find(U=>U.id===O);if(q){C=q,S=D.point,P=F;break}else if(O===e.id)continue}if(!O&&D.object.type==="Mesh"&&D.object.name!=="sky"){S=D.point;break}}if(this.createBulletTrail(u,S,o.type),C&&C.hp>0&&u.distanceTo(S)<=300){let O=o.damage;if(P&&(O*=2),this.mode!=="multiplayer"&&e===this.player&&this.powerupState.active&&(O*=2),us(C,O),!m){const F=Date.now();F-this.lastHitSound>50&&(en.playHit(),this.lastHitSound=F),m=!0}C.hp<=0&&!e.isBot&&(this.score+=1,en.playPoint(),en.playDeath(),Math.random()>.3&&en.playKillLine())}}}checkMapCollision(e,t,i){var y;const o=new H(0,-1,0),l=e.clone().add(new H(0,1,0));this.raycaster.set(l,o);const u=this.raycaster.intersectObjects([this.mapGroup],!0);let f=0,p=!1;for(const w of u){let E=!1,x=w.object;for(;x;){if((y=x.userData)!=null&&y.solid){E=!0;break}if(x.parent===this.mapGroup||x.parent===null)break;x=x.parent}if(E||w.object.name!=="sky"){f=w.point.y,p=E;break}}const h=1.2,m=.5,d=f+h,_=e.y;d>_+m?(p&&(e.x-=t.x*i,e.z-=t.z*i),e.y<1.2&&(e.y=1.2)):e.y<d&&(e.y=d,t.y<0&&(t.y=0))}createBulletTrail(e,t,i){const o=i==="hitscan"&&this.player.weapon.includes("shotgun"),l=o?16755200:16776960,u=o?.05:.15,p=new H().subVectors(t,e).length(),h=new nn({color:l,transparent:!0,opacity:.8,blending:$f,depthWrite:!1}),m=new Oe(ao.trailGeo,h);m.position.copy(e),m.lookAt(t),m.scale.set(u,u,p),this.scene.add(m),this.trails.push({mesh:m,life:.2,maxLife:.2,startScale:u})}clampToBounds(e){e.x=Tl.clamp(e.x,this.map.bounds.min[0],this.map.bounds.max[0]),e.y=Tl.clamp(e.y,this.map.bounds.min[1],this.map.bounds.max[1]+5),e.z=Tl.clamp(e.z,this.map.bounds.min[2],this.map.bounds.max[2])}spawnParticles(e,t,i=5){const o=new Gt(.2,.2,.2),l=new nn({color:t,transparent:!0,opacity:1});for(let u=0;u<i;u++){const f=new Oe(o,l),p=new H((Math.random()-.5)*.5,(Math.random()-.5)*.5,(Math.random()-.5)*.5);f.position.copy(e).add(p),this.scene.add(f),this.trails.push({mesh:f,life:1,maxLife:1,startScale:1})}}sendInput(){if(!this.netRoom)return;const e={forward:this.inputState.forward,right:this.inputState.right,jump:this.inputState.jump,fire:this.inputState.fireHeld,reload:this.inputState.reload,yaw:this.player.yaw,pitch:this.player.pitch,sequence:Date.now(),weapon:this.player.weapon};this.netRoom.send("input",e)}updateHud(){if(this.hud){let e="";this.mode==="adventure"&&(this.gameWon?e="VICTORY! MERRY CHRISTMAS!":this.isBossStage?e="BOSS FIGHT":e=`Stage ${this.stage} / ${this.maxStage} - Enemies: ${this.bots.length}`),this.hud({hp:this.player.hp,armor:this.player.armor,weapon:this.player.weapon,magAmmo:this.player.magAmmo,reserveAmmo:this.player.reserveAmmo,score:this.score,mode:this.mode,map:this.map.id,stageInfo:e,bannerText:this.bannerText,powerupTimer:this.powerupState.active?this.powerupState.timer:0})}}reload(){const e=Qn[this.player.weapon];if(this.player.magAmmo>=e.magSize)return;const t=e.magSize-this.player.magAmmo;this.player.magAmmo+=t,this.player.nextFire=e.reloadTime}};ao.trailGeo=(()=>{const e=new ti(1,1,1,6,1,!0).translate(0,.5,0).rotateX(Math.PI/2);return e.userData={shared:!0},e})(),ao.sphereGeo=(()=>{const e=new Un(.15,8,8);return e.userData={shared:!0},e})(),ao.boxGeo=(()=>{const e=new Gt(.4,.4,.4);return e.userData={shared:!0},e})();let th=ao;function us(s,e){const t=Math.min(s.armor,e*.3);s.armor-=t,s.hp-=Math.max(e-t,0)}function ro(s){return s[Math.floor(Math.random()*s.length)]}function kf(s,e,t="snowman"){const i=new bn;i.userData={};let o=16777215,l=2236962;const u=Wf.find(oe=>oe.id===t);u&&u.color&&(o=u.color),e&&(o=14540253,l=4473924);const f=new Nt({color:o,roughness:.9,metalness:.1}),p=new Un(.6,16,16),h=new Oe(p,f);h.position.y=.6,h.castShadow=!0,h.receiveShadow=!0,i.add(h);const m=new Un(.45,16,16),d=new Oe(m,f);d.position.y=1.4,d.castShadow=!0,d.receiveShadow=!0,i.add(d);const _=new Un(.05,8,8),y=new nn({color:l}),w=new Oe(_,y);w.position.set(0,1.3,.42),i.add(w);const E=new Oe(_,y);E.position.set(0,1.5,.4),i.add(E);const x=new Un(.3,16,16),S=new Oe(x,f);S.position.y=2,S.castShadow=!0,S.receiveShadow=!0,S.userData.isHead=!0,i.add(S);const C=new ar(.05,.3,8),P=new Nt({color:16753920}),D=new Oe(C,P);D.rotation.x=Math.PI/2,D.position.set(0,0,-.3),S.add(D);const V=e?16711680:0,O=new Un(.04,8,8),F=new nn({color:V}),q=new Oe(O,F);q.position.set(-.1,.1,-.25),S.add(q);const U=new Oe(O,F);if(U.position.set(.1,.1,-.25),S.add(U),e){const oe=new Gt(.12,.02,.02),he=new nn({color:0}),_e=new Oe(oe,he);_e.position.set(-.1,.18,-.22),_e.rotation.z=-.3,S.add(_e);const de=new Oe(oe,he);de.position.set(.1,.18,-.22),de.rotation.z=.3,S.add(de);const G=new Bi(.5,.5),ue=new nn({map:B0,transparent:!0}),te=new Oe(G,ue);te.position.set(0,0,-.32),te.rotation.y=Math.PI,S.add(te)}const L=new ti(.03,.03,.8),ne=new Nt({color:6045747}),ae=new Oe(L,ne);ae.rotation.z=Math.PI/3,ae.position.set(-.5,1.4,0),i.add(ae);const j=new Oe(L,ne);if(j.rotation.z=-Math.PI/3,j.position.set(.5,1.4,0),i.add(j),e){const oe=new bn,he=new ti(.04,.04,.25),_e=new Nt({color:4473924}),de=new Oe(he,_e);oe.add(de);const G=new Gt(.3,.05,.05),ue=new Oe(G,_e);ue.position.y=.125,oe.add(ue);const te=new Gt(.08,.8,.02),z=new Nt({color:15658734,metalness:.8,roughness:.2}),le=new Oe(te,z);le.position.y=.55,oe.add(le),oe.position.set(.5,1.3,-.2),oe.rotation.x=-Math.PI/4,i.add(oe),i.userData.sword=oe}else{const oe=new bn,he=new Nt({color:3355443}),_e=new Nt({color:1118481});if(s.includes("shotgun")){const de=new Gt(.1,.15,.4),G=new Oe(de,new Nt({color:9127187}));G.position.z=.2,oe.add(G);const ue=new ti(.06,.06,.8),te=new Oe(ue,_e);te.rotation.x=Math.PI/2,te.position.z=-.4,oe.add(te);const z=new hn;z.position.set(0,0,-.8),te.add(z),oe.userData.muzzle=z}else{const de=new Gt(.12,.15,.5),G=new Oe(de,he);oe.add(G);const ue=new ti(.04,.04,.4),te=new Oe(ue,_e);te.rotation.x=Math.PI/2,te.position.z=-.45,oe.add(te);const z=new Gt(.08,.25,.1),le=new Oe(z,he);le.position.set(0,-.2,.1),oe.add(le);const Ve=new hn;Ve.position.set(0,0,-.2),te.add(Ve),oe.userData.muzzle=Ve}oe.position.set(.6,1.3,-.5),i.add(oe),i.userData.muzzle=oe.userData.muzzle}return i}function hT(s,e=!1){const t=new bn;if(e){const p=new Oe(new Gt(2,2,2),new nn({color:255}));return t.add(p),t}const i=s.id==="gift_launcher",o=i?new Gt(.4,.4,.4):new Un(.15,8,8),l=i?16711680:16777215,u=new nn({color:l}),f=new Oe(o,u);return t.add(f),t}let jl,Yl,Kl,Jl,zf,Zl,Ql,Bf,Hf,Vf,Gf,ec;function dT(){const s=new bn;jl||(jl=new Gt(.6,.9,.15),jl.userData={shared:!0},Kl=new ti(.35,.35,.15,16),Kl.rotateX(Math.PI/2),Kl.userData={shared:!0},Yl=new Un(.06),Yl.userData={shared:!0},Jl=new Un(.04),Jl.userData={shared:!0},zf=new _a(.1,.02,4,8,Math.PI),zf.userData={shared:!0},Zl=new Gt(.2,.7,.15),Zl.userData={shared:!0},Ql=new Gt(.25,.7,.15),Ql.userData={shared:!0},Bf=new Nt({color:11887901,roughness:.9}),Bf.userData={shared:!0},Hf=new Nt({color:16777215}),Hf.userData={shared:!0},Vf=new Nt({color:16711680}),Vf.userData={shared:!0},Gf=new Nt({color:65280}),Gf.userData={shared:!0},ec=new nn({color:0}),ec.userData={shared:!0});const e=Bf.clone(),t=new Oe(jl,e);t.position.y=.75,s.add(t);const i=new Oe(Kl,e);i.position.y=1.35,s.add(i);const o=new Oe(Yl,Vf);o.position.set(0,.85,-.08),s.add(o);const l=new Oe(Yl,Gf);l.position.set(0,.65,-.08),s.add(l);const u=new Oe(Jl,ec);u.position.set(-.12,1.45,-.08),s.add(u);const f=new Oe(Jl,ec);f.position.set(.12,1.45,-.08),s.add(f);const p=new Oe(zf,Hf);p.position.set(0,1.35,-.08),p.rotation.x=Math.PI,s.add(p);const h=new Bi(.6,.6),m=new nn({map:fT,transparent:!0}),d=new Oe(h,m);d.position.set(0,1.35,-.09),d.rotation.y=Math.PI,s.add(d);const _=new Oe(Zl,e);_.position.set(-.45,1,0),_.rotation.z=Math.PI/8,s.add(_);const y=new Oe(Zl,e);y.position.set(.45,1,0),y.rotation.z=-Math.PI/8,s.add(y);const w=new Oe(Ql,e);w.position.set(-.2,.35,0),s.add(w);const E=new Oe(Ql,e);return E.position.set(.2,.35,0),s.add(E),s.userData.isHead=!0,s}function Yg(){const s=new bn,e=new Bi(1,.1),t=new nn({color:0}),i=new Oe(e,t);s.add(i);const o=new Bi(1,.1),l=new nn({color:65280}),u=new Oe(o,l);return u.position.z=.01,s.add(u),s}function pT(s){const e=new bn;if(s==="health_potion"){const t=new Un(.3,16,16),i=new Nt({color:16711680,emissive:5570560,transparent:!0,opacity:.8}),o=new Oe(t,i);e.add(o);const l=new nn({color:16777215}),u=new Oe(new Gt(.1,.4,.1),l),f=new Oe(new Gt(.4,.1,.1),l);e.add(u),e.add(f);const p=new Qf(16711680,1,3);e.add(p)}else{const t=new vh(.35,0),i=new Nt({color:16776960,emissive:11175936,metalness:1,roughness:.2}),o=new Oe(t,i);e.add(o);const l=new Qf(16776960,1,4);e.add(l)}return e}function mT({mode:s,map:e,playerName:t,loadout:i,onExit:o}){const l=hi.useRef(null),u=hi.useRef(null),[f,p]=hi.useState(null);return hi.useEffect(()=>{if(!l.current)return;u.current&&(u.current.stop(),u.current.dispose());const h=new th(l.current,{mode:s,mapId:e,playerName:t,loadout:i,onHud:p,onExit:o});return u.current=h,h.start(),()=>{h.stop(),h.dispose(),u.current=null}},[s,e,t,i]),He.jsxs("div",{className:"game-shell",children:[He.jsx("div",{ref:l,className:"canvas-container"}),s!=="menu"&&He.jsx("div",{className:"crosshair"}),s!=="menu"&&f&&He.jsxs("div",{className:"hud-container",children:[He.jsxs("div",{className:"hud-group",children:[He.jsxs("div",{className:"health-box",children:[He.jsx("div",{className:"hud-value",children:Math.round(f.hp)}),He.jsx("div",{className:"hud-label",children:"Health"})]}),He.jsxs("div",{className:"health-box",style:{borderColor:"#4ea0ff"},children:[He.jsx("div",{className:"hud-value",style:{color:"#4ea0ff"},children:Math.round(f.armor)}),He.jsx("div",{className:"hud-label",children:"Shield"})]}),f.stageInfo&&He.jsx("div",{style:{marginLeft:20,color:"gold",fontWeight:"bold",textShadow:"0 2px 4px black"},children:f.stageInfo})]}),He.jsx("div",{className:"hud-group",children:He.jsxs("div",{className:"ammo-box",style:{minWidth:150},children:[He.jsx("div",{className:"hud-value",style:{fontSize:18,color:"white"},children:Qn[f.weapon].name}),He.jsx("div",{className:"hud-label",children:"Weapon"})]})}),He.jsxs("div",{className:"hud-group",children:[He.jsxs("div",{className:"ammo-box",children:[He.jsx("div",{className:"hud-value",children:f.magAmmo}),He.jsx("div",{className:"hud-label",children:"Ammo"})]}),He.jsxs("div",{className:"grenade-box",children:[He.jsx("div",{className:"hud-value",children:f.score}),He.jsx("div",{className:"hud-label",children:"Score"})]})]}),He.jsx("button",{className:"ss_button btn_red",style:{position:"absolute",top:-60,right:0,height:36,fontSize:14},onClick:o,children:"Exit"})]}),s!=="menu"&&He.jsxs("div",{className:"controls-overlay",children:[He.jsx("div",{children:"WASD - Move"}),He.jsx("div",{children:"SPACE - Jump"}),He.jsx("div",{children:"LMB - Shoot"}),He.jsx("div",{children:"R - Reload"}),He.jsx("div",{children:"MOUSE - Aim"})]}),s==="multiplayer"&&He.jsx(gT,{text:"Multiplayer Beta: Connecting..."}),s!=="menu"&&f&&(f.powerupTimer||0)>0&&He.jsxs("div",{style:{position:"absolute",top:100,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center"},children:[He.jsxs("div",{style:{position:"relative",width:60,height:60},children:[He.jsxs("svg",{width:"60",height:"60",viewBox:"0 0 60 60",children:[He.jsx("circle",{cx:"30",cy:"30",r:"25",fill:"none",stroke:"rgba(255,255,255,0.3)",strokeWidth:"5"}),He.jsx("circle",{cx:"30",cy:"30",r:"25",fill:"none",stroke:"gold",strokeWidth:"5",strokeDasharray:"157",strokeDashoffset:157*(1-f.powerupTimer/10),transform:"rotate(-90 30 30)",style:{transition:"stroke-dashoffset 0.1s linear"}})]}),He.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"gold",fontWeight:"bold",fontSize:20},children:Math.ceil(f.powerupTimer)})]}),He.jsx("div",{style:{color:"gold",fontWeight:"bold",marginTop:5,textShadow:"0 1px 2px black"},children:"POWER SURGE"})]}),s!=="menu"&&f&&f.bannerText&&He.jsx("div",{style:{position:"absolute",top:"30%",left:0,right:0,textAlign:"center",fontSize:72,fontWeight:900,color:"#fff",textShadow:"0 0 20px #ff0000, 0 0 10px #000",fontFamily:"var(--font-heading)",pointerEvents:"none",zIndex:999},children:f.bannerText})]})}function gT({text:s}){return He.jsx("div",{style:{position:"absolute",top:20,left:0,right:0,display:"flex",justifyContent:"center",pointerEvents:"none",color:"#d8f3ff",fontWeight:700,textShadow:"0 2px 4px rgba(0,0,0,0.5)"},children:s})}const vT=Object.values(Qn);function _T(){const[s,e]=hi.useState("menu"),[t,i]=hi.useState("earth"),[o,l]=hi.useState("Frosty"),[u,f]=hi.useState("snow_smg"),[p,h]=hi.useState("candy_shotgun"),[m,d]=hi.useState(Wf[0].id),_=hi.useMemo(()=>({primary:u,secondary:p,avatarId:m}),[u,p,m]),y=E=>{e(E)},w=()=>e("menu");return He.jsxs("div",{className:"app-root",children:[He.jsx("div",{className:"game-shell",children:He.jsx(mT,{mode:s,map:t,playerName:o,loadout:_,onExit:w})}),s==="menu"&&He.jsxs("div",{className:"shell-overlay",children:[He.jsx("header",{className:"main-header",children:He.jsx("div",{className:"game-logo",children:"CHRISTMAS SHOCK"})}),He.jsxs("div",{className:"main-layout",children:[He.jsx("div",{className:"column",children:He.jsxs("div",{className:"ss_bigtab",style:{cursor:"default",height:"auto"},children:[He.jsx("div",{className:"hud-label",style:{marginBottom:10},children:"Loadout"}),He.jsx("div",{style:{display:"grid",gap:8,width:"100%"},children:vT.map(E=>He.jsxs("div",{className:`ss_bigtab ${u===E.id?"selected":""}`,style:{minHeight:80,padding:10},onClick:()=>f(E.id),children:[He.jsx("div",{className:"hud-value",style:{fontSize:18},children:E.name}),He.jsx("div",{className:"hud-label",children:E.type==="hitscan"?"Hitscan":"Projectile"})]},E.id))})]})}),He.jsx("div",{className:"column center",children:He.jsxs("div",{style:{width:"100%",maxWidth:400},children:[He.jsx("input",{className:"ss_field",value:o,onChange:E=>l(E.target.value),placeholder:"Enter Name"}),He.jsx("button",{className:"ss_button btn_play",onClick:()=>y("bots"),children:"PLAY"}),He.jsx("button",{className:"ss_button btn_play",style:{marginTop:10,background:"linear-gradient(#ff8e2b, #b35900)"},onClick:()=>y("adventure"),children:"ADVENTURE"}),He.jsxs("div",{style:{display:"flex",gap:10,marginTop:10},children:[He.jsx("button",{className:"ss_button btn_blue",style:{flex:1},onClick:()=>y("multiplayer"),children:"Servers"}),He.jsx("button",{className:"ss_button btn_red",style:{flex:1},children:"Login"})]})]})}),He.jsxs("div",{className:"column",children:[He.jsxs("div",{className:"ss_bigtab",style:{cursor:"default"},children:[He.jsx("div",{className:"hud-label",style:{marginBottom:10},children:"Map Selection"}),He.jsx("div",{style:{display:"grid",gap:8,width:"100%"},children:Object.values(I_).map(E=>He.jsxs("div",{className:`ss_bigtab ${t===E.id?"selected":""}`,style:{minHeight:100,padding:10},onClick:()=>i(E.id),children:[He.jsx("div",{className:"map-bg",style:{backgroundImage:yT(E.id)}}),He.jsx("div",{className:"hud-value",style:{fontSize:16},children:E.name})]},E.id))})]}),He.jsxs("div",{className:"ss_bigtab",style:{cursor:"default",marginTop:"auto"},children:[He.jsx("div",{className:"hud-label",children:"Skins"}),He.jsx("div",{style:{display:"flex",gap:5,flexWrap:"wrap",justifyContent:"center"},children:Wf.map(E=>He.jsx("div",{onClick:()=>d(E.id),style:{width:30,height:30,borderRadius:"50%",background:E.primaryColor,border:m===E.id?"2px solid white":"none",cursor:"pointer"}},E.id))})]})]})]})]})]})}function yT(s){return s==="heaven"?"linear-gradient(135deg,#f6e8ff,#b1e1ff)":s==="hell"?"linear-gradient(135deg,#5a0b0b,#f25f5c)":"linear-gradient(135deg,#0b3954,#1f7a8c)"}const H0=document.getElementById("root");if(!H0)throw new Error("Root element #root not found");D_.createRoot(H0).render(He.jsx(T_.StrictMode,{children:He.jsx(_T,{})}));
